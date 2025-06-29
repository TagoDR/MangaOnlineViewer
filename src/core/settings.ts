import _ from 'lodash';
import locales from '../locales';
import type { ISettings, ISettingsKey } from '../types';
import { isNothing } from '../utils/checks';
import diffObj from '../utils/diffObj';
import {
  getGlobalSettings,
  getLocalSettings,
  giveToWindow,
  isMobile,
  logScript,
  logScriptVerbose,
  removeValueGM,
  setGlobalSettings,
  setLocalSettings,
  settingsChangeListener,
} from '../utils/tampermonkey';

export const defaultSettings: ISettings = {
  enabled: true,
  locale: 'en_US',
  theme: 'darkblue',
  customTheme: '#004526',
  themeShade: 600,
  colorScheme: 'dark',
  fitWidthIfOversize: true,
  showThumbnails: true,
  enableComments: true,
  downloadZip: false,
  verticalSeparator: false,
  throttlePageLoad: 1000,
  zoomMode: 'percent',
  defaultZoom: 100,
  zoomStep: 25,
  minZoom: 30,
  loadMode: 'wait',
  viewMode: 'WebComic',
  bookmarks: [],
  lazyLoadImages: false,
  lazyStart: 50,
  hidePageControls: false,
  header: 'hover',
  maxReload: 5,
  scrollHeight: 20,
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

function getDefault(global = true) {
  return !isMobile()
    ? { ...defaultSettings, enabled: global, theme: global ? 'darkblue' : 'darkgreen' }
    : _.defaultsDeep(
        {
          lazyLoadImages: true,
          fitWidthIfOversize: true,
          showThumbnails: false,
          viewMode: 'WebComic',
          header: 'click',
        },
        { ...defaultSettings, enabled: global, theme: global ? 'darkblue' : 'darkgreen' },
      );
}

// Configuration
let globalSettings: ISettings = _.defaultsDeep(getGlobalSettings(getDefault()), getDefault());
let localSettings: ISettings = _.defaultsDeep(
  getLocalSettings(getDefault(false)),
  getDefault(false),
);

export function showSettings<K extends ISettingsKey>(key: K | null = null) {
  logScriptVerbose('Global Settings', key ? globalSettings[key] : globalSettings);
  logScriptVerbose('Local Settings', key ? localSettings[key] : localSettings);
}

giveToWindow('MOVSettings', showSettings);

export const isSettingsLocal = () => localSettings?.enabled === true;

settingsChangeListener((newValue: Partial<ISettings>) => {
  const newSettings = _.defaultsDeep(newValue, getDefault());
  const diff = globalSettings ? diffObj(newSettings, globalSettings) : newSettings;
  if (!isNothing(diff)) {
    logScript('Imported Global Settings', diff);
    globalSettings = newSettings;
    document.getElementById('MangaOnlineViewer')?.dispatchEvent(new Event('hydrate'));
  }
}, 'settings');

settingsChangeListener((newValue: Partial<ISettings>) => {
  const newSettings = _.defaultsDeep(newValue, getDefault(false));
  const diff = localSettings ? diffObj(newSettings, localSettings) : newSettings;
  if (!isNothing(diff)) {
    logScript('Imported Local Settings', diff);
    localSettings = newSettings;
    document.getElementById('MangaOnlineViewer')?.dispatchEvent(new Event('hydrate'));
  }
}, window.location.hostname);

/**
 * Gets the effective value for a setting, considering site-specific overrides,
 * then global settings, then session defaults.
 *
 * @param key The key of the setting to retrieve.
 * @returns The effective value of the setting.
 */
export function getSettingsValue<K extends ISettingsKey>(key: K): ISettings[K] {
  if (isSettingsLocal()) {
    return localSettings[key];
  }
  return globalSettings[key];
}

/**
 * Sets a single setting value by its key and persists the change.
 * The value provided must match the type of the setting defined in ISettings.
 *
 * @param key The key of the setting to update.
 * @param value The new value for the setting.
 */
export function setSettingsValue<K extends ISettingsKey>(key: K, value: ISettings[K]): void {
  if (isSettingsLocal() && !['locale', 'bookmarks'].includes(key)) {
    localSettings[key] = value;
    setLocalSettings(diffObj(localSettings, getDefault(false)));
  } else {
    globalSettings[key] = value;
    setGlobalSettings(diffObj(globalSettings, getDefault()));
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
  if (isSettingsLocal()) {
    localSettings[key] = fn(localSettings[key]);
    setLocalSettings(diffObj(localSettings, getDefault(false)));
  } else {
    globalSettings[key] = fn(globalSettings[key]);
    setGlobalSettings(diffObj(globalSettings, getDefault()));
  }
}

export function getLocaleString(name: string): string {
  const locale = locales.find((l) => l.ID === getSettingsValue('locale'));
  if (locale?.[name]) {
    return locale[name];
  }

  if (locales?.at(1)?.[name]) {
    return locales[1][name];
  }

  return `##MISSING_STRING_${name.toLocaleUpperCase()}##`;
}

/*
export function getAllLocaleStrings(name: string): string {
  return locales.map((locale) => `<span class='${locale.ID}'>${locale[name]}</span>`).join('\n');
}
*/

/*
export function updateSettings(newValue: Partial<ISettings>) {
  logScript(JSON.stringify(newValue));
  if (localSettings) {
    localSettings = { ...localSettings, ...newValue };
    setLocalSettings(diffObj(localSettings, getDefault()));
  } else {
    globalSettings = { ...globalSettings, ...newValue };
    setGlobalSettings(diffObj(globalSettings, getDefault()));
  }
}
*/

export function resetSettings() {
  if (isSettingsLocal()) {
    removeValueGM(window.location.hostname);
    localSettings = getDefault(false);
  } else {
    removeValueGM('settings');
    globalSettings = getDefault();
  }
  document.getElementById('MangaOnlineViewer')?.dispatchEvent(new Event('hydrate'));
}

export function toggleLocalSettings(activate = false) {
  if (activate) {
    if (!localSettings) {
      localSettings = { ...globalSettings };
    } else {
      localSettings.enabled = true;
    }
    setLocalSettings(diffObj(localSettings, getDefault(false)));
    logScript('Local Settings Enabled');
  } else {
    if (isSettingsLocal()) {
      localSettings.enabled = false;
    }
    setLocalSettings(diffObj(localSettings, getDefault(false)));
    logScript('Local Settings Disabled');
  }
  document.getElementById('MangaOnlineViewer')?.dispatchEvent(new Event('hydrate'));
  return isSettingsLocal();
}

export function isBookmarked(url: string = window.location.href): number | undefined {
  return globalSettings.bookmarks.find((el) => el.url === url)?.page;
}

/*
// Clear old Bookmarks
const bookmarkTimeLimit = 1000 * 60 * 60 * 24 * 30 * 12; // Year
const refreshedBookmark = globalSettings.bookmarks.filter(
  (el) => Date.now() - new Date(el.date).valueOf() < bookmarkTimeLimit,
);
if (globalSettings.bookmarks.length !== refreshedBookmark.length) {
  setSettingsValue('bookmarks', refreshedBookmark);
}
*/
