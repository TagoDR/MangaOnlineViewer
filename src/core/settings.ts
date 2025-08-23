import _ from 'lodash';
import { computed, map } from 'nanostores';
import locales from '../locales';
import { type ILocale, type ILocaleKey, type ISettings, type ISettingsKey, isKey } from '../types';
import { applyZoom } from '../ui/page';
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
  saveGlobalSettings,
  saveLocalSettings,
  settingsChangeListener,
} from '../utils/tampermonkey';

/**
 * Default settings for the script.
 * @type {ISettings}
 */
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

/**
 * Settings overrides for mobile devices.
 * @type {Partial<ISettings>}
 */
const mobileSettings: Partial<ISettings> = {
  lazyLoadImages: true,
  fitWidthIfOversize: true,
  showThumbnails: false,
  viewMode: 'WebComic',
  header: 'click',
};

/**
 * Generates the default settings object based on the device type (mobile/desktop) and scope (global/local).
 * @param {boolean} [global=true] - Whether to get the global or local default settings.
 * @returns {ISettings} The default settings object.
 */
function getDefault(global = true): ISettings {
  return !isMobile()
    ? { ...defaultSettings, enabled: global, theme: global ? 'darkblue' : 'darkgreen' }
    : _.defaultsDeep(mobileSettings, {
        ...defaultSettings,
        enabled: global,
        theme: global ? 'darkblue' : 'darkgreen',
      });
}

// Raw settings objects, loaded from Tampermonkey's storage.
let globalSettings: ISettings = _.defaultsDeep(getGlobalSettings(getDefault()), getDefault());
let localSettings: ISettings = _.defaultsDeep(
  getLocalSettings(getDefault(false)),
  getDefault(false),
);

/**
 * Checks if site-specific (local) settings are currently enabled and active.
 * @returns {boolean} True if local settings are enabled, false otherwise.
 */
export const isSettingsLocal = (): boolean => localSettings?.enabled === true;

/**
 * The reactive store for all settings. It holds either global or local settings based on the current mode.
 * Components should subscribe to this store to react to settings changes.
 * @type {import('nanostores').MapStore<ISettings>}
 */
export const settings = map<ISettings>(
  isSettingsLocal() ? { ...localSettings, locale: globalSettings.locale } : globalSettings,
);

/**
 * A computed store that provides the currently selected locale object based on the `locale` setting.
 * @type {import('nanostores').ComputedStore<ILocale>}
 */
export const locale = computed(
  settings,
  (current): ILocale => locales.find(l => l.ID === current.locale) ?? locales[1],
);

/**
 * Refreshes the reactive `settings` store with the latest values from the raw settings objects.
 * Call this after a change is made to `globalSettings` or `localSettings` to propagate the change.
 * @param {K} [key] - If provided, refreshes only a single key. Otherwise, refreshes the entire object.
 */
export function refreshSettings<K extends ISettingsKey>(key?: K): void {
  if (key) {
    const newVal = isSettingsLocal() && key !== 'locale' ? localSettings[key] : globalSettings[key];
    const currentVal = settings.get()?.[key];
    if (!_.isEqual(currentVal, newVal)) {
      settings.setKey(key, newVal);
      logScript('Refreshed Settings', key, newVal);
    }
    return;
  }
  const newObj = isSettingsLocal()
    ? { ...localSettings, locale: globalSettings.locale }
    : { ...globalSettings };
  const currentObj = settings.get();
  if (!_.isEqual(currentObj, newObj)) {
    settings.set(newObj);
    logScript('Refreshed Settings', key, null);
  }
}

/**
 * Synchronization callback for when global settings are changed in another tab.
 * @param {Partial<ISettings>} newValue - The new settings value from storage.
 */
function syncGlobalSettings(newValue: Partial<ISettings>): void {
  const newSettings = _.defaultsDeep(newValue, getDefault());
  const diff = globalSettings ? diffObj(newSettings, globalSettings) : newSettings;
  if (!isNothing(diff)) {
    logScript('Imported Global Settings', diff);
    globalSettings = newSettings;
    refreshSettings();
    applyZoom(getSettingsValue('zoomMode'), getSettingsValue('defaultZoom'));
  }
}

settingsChangeListener(_.debounce(syncGlobalSettings, 300), 'settings');

/**
 * Synchronization callback for when local settings are changed in another tab.
 * @param {Partial<ISettings>} newValue - The new settings value from storage.
 */
function syncLocalSettings(newValue: Partial<ISettings>): void {
  const newSettings = _.defaultsDeep(newValue, getDefault(false));
  const diff = localSettings ? diffObj(newSettings, localSettings) : newSettings;
  if (!isNothing(diff)) {
    logScript('Imported Local Settings', diff);
    localSettings = newSettings;
    refreshSettings();
    applyZoom(getSettingsValue('zoomMode'), getSettingsValue('defaultZoom'));
  }
}

settingsChangeListener(_.debounce(syncLocalSettings, 300), window.location.hostname);

/**
 * Gets the effective value for a setting from the reactive store.
 * This respects whether local or global settings are currently active.
 * @template K
 * @param {K} key - The key of the setting to retrieve.
 * @returns {ISettings[K]} The effective value of the setting.
 */
export function getSettingsValue<K extends ISettingsKey>(key: K): ISettings[K] {
  return settings.get()?.[key];
}

/**
 * Sets a single setting value in the reactive `settings` store. This change is NOT persisted to storage.
 * @template K
 * @param {K} key - The key of the setting to update.
 * @param {ISettings[K]} value - The new value for the setting.
 */
export function setSettingsValue<K extends ISettingsKey>(key: K, value: ISettings[K]): void {
  const current = settings.get()?.[key];
  if (_.isEqual(current, value)) return;
  settings.setKey(key, value);
}

/**
 * Saves a single setting value by its key and persists the change to Tampermonkey's storage.
 * @template K
 * @param {K} key - The key of the setting to update.
 * @param {ISettings[K]} value - The new value for the setting.
 */
export function saveSettingsValue<K extends ISettingsKey>(key: K, value: ISettings[K]): void {
  const currentEffective = getSettingsValue(key);
  if (_.isEqual(currentEffective, value)) return;

  setSettingsValue(key, value);
  if (isSettingsLocal() && key !== 'locale') {
    localSettings[key] = value;
    saveLocalSettings(diffObj(localSettings, getDefault(false)));
  } else {
    globalSettings[key] = value;
    saveGlobalSettings(diffObj(globalSettings, getDefault()));
  }
}

/**
 * Updates a single setting value using a function and persists the change.
 * @template K
 * @param {K} key - The key of the setting to update.
 * @param {(value: ISettings[K]) => ISettings[K]} fn - A function that receives the current value and returns the new value.
 */
export function changeSettingsValue<K extends ISettingsKey>(
  key: K,
  fn: (value: ISettings[K]) => ISettings[K],
): void {
  const oldValue = getSettingsValue(key);
  const newValue = fn(oldValue);
  setSettingsValue(key, newValue);
}

/**
 * Gets a translated string from the current locale.
 * @param {K | string} name - The key of the string to get.
 * @returns {string} The translated string, or a placeholder if not found.
 */
export function getLocaleString<K extends ILocaleKey>(name: K | string): string {
  const currentLocale = locales.find(l => l.ID === getSettingsValue('locale')) ?? locales[1];
  if (isKey(currentLocale, name)) return currentLocale?.[name] ?? locales[1]?.[name];
  return `##MISSING_STRING_${name}##`;
}

/**
 * Resets the settings (either local or global) to their default values.
 */
export function resetSettings(): void {
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

/**
 * Enables or disables site-specific (local) settings.
 * @param {boolean} [activate=false] - Whether to activate or deactivate local settings.
 * @returns {boolean} The new state of local settings (true if enabled, false otherwise).
 */
export function toggleLocalSettings(activate = false): boolean {
  localSettings.enabled = activate;
  saveLocalSettings(diffObj(localSettings, getDefault(false)));
  logScript('Local Settings ', activate ? 'Enabled' : 'Disabled');
  refreshSettings();
  return isSettingsLocal();
}

/**
 * Checks if a URL is bookmarked.
 * @param {string} [url=window.location.href] - The URL to check.
 * @returns {number | undefined} The bookmarked page number, or undefined if not bookmarked.
 */
export function isBookmarked(url: string = window.location.href): number | undefined {
  return globalSettings.bookmarks.find(el => el.url === url)?.page;
}

/**
 * A debug utility to log the current state of settings to the console.
 * @param {K | null} [key=null] - An optional settings key to inspect a specific value.
 */
export function showSettings<K extends ISettingsKey>(key: K | null = null): void {
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
