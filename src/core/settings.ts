import _ from 'lodash';
import { computed, map } from 'nanostores';
import locales from '../locales';
import {
  type IApp,
  type ILocale,
  type ILocaleKey,
  type ISettings,
  type ISettingsKey,
  isKey,
} from '../types';
import { isNothing } from '../utils/checks';
import diffObj from '../utils/diffObj';
import {
  getDevice,
  getGlobalSettings,
  getLocalSettings,
  giveToWindow,
  isMobile,
  logScript,
  logScriptC,
  logScriptVerbose,
  removeValueGM,
  saveGlobalSettings,
  saveLocalSettings,
  settingsChangeListener,
} from '../utils/tampermonkey';

export const defaultSettings: ISettings = {
  bookmarks: [],
  colorScheme: 'dark',
  customTheme: '#004526',
  downloadZip: false,
  enableComments: true,
  enabled: true,
  fitWidthIfOversize: true,
  header: 'hover',
  hidePageControls: false,
  lazyLoadImages: false,
  lazyStart: 50,
  loadMode: 'wait',
  locale: 'en_US',
  maxReload: 5,
  minZoom: 30,
  navbar: 'bottom',
  pagination: false,
  scrollHeight: 5,
  theme: 'darkblue',
  themeShade: 600,
  throttlePageLoad: 1000,
  viewMode: 'WebComic',
  zoomMode: 'percent',
  zoomStep: 25,
  zoomValue: 100,
  keybinds: {
    SCROLL_UP: ['up', 'W', 'num_8'],
    SCROLL_DOWN: ['down', 'S', 'num_2'],
    NEXT_CHAPTER: ['right', '/', 'D', 'num_6'],
    PREVIOUS_CHAPTER: ['left', ';', 'A', 'num_4'],
    ENLARGE: ['-', 'num_add', 'E'],
    REDUCE: ['=', 'num_subtract', 'Q'],
    RESTORE: ['9', 'num_divide', 'R'],
    FIT_WIDTH: ['0', 'num_multiply', 'F'],
    FIT_HEIGHT: ['H'],
    SETTINGS: ['num_divide', 'num_5', 'X'],
    VIEW_MODE_WEBCOMIC: ['C'],
    VIEW_MODE_VERTICAL: ['V'],
    VIEW_MODE_LEFT: ['N'],
    VIEW_MODE_RIGHT: ['B'],
    SCROLL_START: ['space'],
  },
};

const mobileSettings: Partial<ISettings> = {
  lazyLoadImages: true,
  fitWidthIfOversize: true,
  navbar: 'disabled',
  viewMode: 'WebComic',
  header: 'scroll',
  hidePageControls: true,
  pagination: true,
};

function getDefault(global = true) {
  return !isMobile()
    ? { ...defaultSettings, enabled: global, theme: global ? 'darkblue' : 'darkgreen' }
    : _.defaultsDeep(mobileSettings, {
        ...defaultSettings,
        enabled: global,
        theme: global ? 'darkblue' : 'darkgreen',
      });
}

// Configuration
let globalSettings: ISettings = _.defaultsDeep(getGlobalSettings(getDefault()), getDefault());
let localSettings: ISettings = _.defaultsDeep(
  getLocalSettings(getDefault(false)),
  getDefault(false),
);

export const isSettingsLocal = () => localSettings?.enabled === true;

export const settings = map<ISettings>(isSettingsLocal() ? localSettings : globalSettings);
export const locale = computed(
  settings,
  (current): ILocale => locales.find(l => l.ID === current.locale) ?? locales[1],
);
export const appState = map<IApp>({
  autoScroll: false,
  currentPage: 0,
  loaded: 0,
  manga: undefined,
  panel: 'none',
  scrollToPage: undefined,
  device: getDevice(),
  images: {},
  thumbnails: {},
});

giveToWindow('app', appState);

appState.subscribe(logScriptC('ReaderState'));
settings.subscribe(logScriptC('SettingsState'));

export function refreshSettings<K extends ISettingsKey>(key?: K) {
  if (key) {
    if (isSettingsLocal()) {
      settings.setKey(key, localSettings[key]);
    } else {
      settings.setKey(key, globalSettings[key]);
    }
  } else {
    if (isSettingsLocal()) {
      settings.set({ ...localSettings });
    } else {
      settings.set({ ...globalSettings });
    }
  }
}

function syncGlobalSettings(newValue: Partial<ISettings>) {
  const newSettings = _.defaultsDeep(newValue, getDefault());
  const diff = globalSettings ? diffObj(newSettings, globalSettings) : newSettings;
  if (!isNothing(diff)) {
    logScript('Imported Global Settings', diff);
    globalSettings = newSettings;
    refreshSettings();
  }
}

settingsChangeListener(_.debounce(syncGlobalSettings, 300), 'settings');

function syncLocalSettings(newValue: Partial<ISettings>) {
  const newSettings = _.defaultsDeep(newValue, getDefault(false));
  const diff = localSettings ? diffObj(newSettings, localSettings) : newSettings;
  if (!isNothing(diff)) {
    logScript('Imported Local Settings', diff);
    localSettings = newSettings;
    refreshSettings();
  }
}

settingsChangeListener(_.debounce(syncLocalSettings, 300), window.location.hostname);

/**
 * Gets the effective value for a setting, considering site-specific overrides,
 * then global settings, then session defaults.
 *
 * @param key The key of the setting to retrieve.
 * @returns The effective value of the setting.
 */
export function getSettingsValue<K extends ISettingsKey>(key: K): ISettings[K] {
  // if (isSettingsLocal() && !['locale', 'bookmarks'].includes(key)) {
  //   return localSettings[key];
  // }
  // return globalSettings[key];
  return settings.get()?.[key];
}

/**
 * Sets a single setting value by its key without persisting the change.
 * The value provided must match the type of the setting defined in ISettings.
 *
 * @param key The key of the setting to update.
 * @param value The new value for the setting.
 */
export function setSettingsValue<K extends ISettingsKey>(key: K, value: ISettings[K]): void {
  settings.setKey(key, value);
  if (isSettingsLocal() && !['locale', 'bookmarks'].includes(key)) {
    localSettings[key] = value;
  } else {
    globalSettings[key] = value;
  }
}

/**
 * Saves a single setting value by its key and persists the change.
 * The value provided must match the type of the setting defined in ISettings.
 *
 * @param key The key of the setting to update.
 * @param value The new value for the setting.
 */
export function saveSettingsValue<K extends ISettingsKey>(key: K, value: ISettings[K]): void {
  setSettingsValue(key, value);
  if (isSettingsLocal() && !['locale', 'bookmarks'].includes(key)) {
    const alter = _.defaultsDeep(getLocalSettings(getDefault(false)), getDefault(false));
    saveLocalSettings(diffObj(alter, getDefault(false)));
  } else {
    const alter = {
      ..._.defaultsDeep(getGlobalSettings(getDefault()), getDefault()),
      [key]: value,
    };
    saveGlobalSettings(diffObj(alter, getDefault()));
  }
}

/**
 * Changes a single setting value by its key and persists the change.
 * The function provided must match the type of the setting defined in ISettings.
 *
 * @param key The key of the setting to update.
 * @param fn function that receives the current value and must return the new value
 */
export function changeSettingsValue<K extends ISettingsKey>(
  key: K,
  fn: (value: ISettings[K]) => ISettings[K],
): void {
  const newValue = fn(
    isSettingsLocal() && !['locale', 'bookmarks'].includes(key)
      ? localSettings[key]
      : globalSettings[key],
  );
  saveSettingsValue(key, newValue);
  settings.set({ ...settings.get(), [key]: newValue });
}

export function getAppStateValue<K extends keyof IApp>(key: K): IApp[K] {
  return appState.get()[key];
}

export function setAppStateValue<K extends keyof IApp>(key: K, value: IApp[K]): void {
  appState.setKey(key, value);
}
export function changeAppStateValue<K extends keyof IApp>(
  key: K,
  fn: (value: IApp[K]) => IApp[K],
): void {
  appState.setKey(key, fn(appState.get()[key]));
}

export function getLocaleString<K extends ILocaleKey>(name: K | string): string {
  const locale = locales.find(l => l.ID === getSettingsValue('locale')) ?? locales[1];
  if (isKey(locale, name)) return locale?.[name] ?? locales[1]?.[name];
  return `##MISSING_STRING_${name}##`;
}

export function resetSettings() {
  if (isSettingsLocal()) {
    removeValueGM(window.location.hostname);
    localSettings = getDefault(false);
  } else {
    removeValueGM('settings');
    globalSettings = getDefault();
  }
  logScript('Settings Reset');
  refreshSettings();
}

export function toggleLocalSettings(activate = false) {
  localSettings.enabled = activate;
  saveLocalSettings(diffObj(localSettings, getDefault(false)));
  logScript('Local Settings ', activate ? 'Enabled' : 'Disabled');
  refreshSettings();
  return isSettingsLocal();
}

export function isBookmarked(url: string = window.location.href): number | undefined {
  return globalSettings.bookmarks.find(el => el.url === url)?.page;
}

export function showSettings<K extends ISettingsKey>(key: K | null = null) {
  logScriptVerbose(
    'Current Settings (Local:',
    isSettingsLocal(),
    ') ',
    key ? settings.get()[key] : settings.get(),
    '\nGlobal Settings',
    key ? globalSettings[key] : globalSettings,
    '\nLocal Settings',
    key ? localSettings[key] : localSettings,
  );
}

giveToWindow('MOVSettings', showSettings);
