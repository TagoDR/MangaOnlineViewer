import { logger } from '@nanostores/logger';
import { createRef } from 'lit/directives/ref.js';
import _ from 'lodash';
import { computed, map } from 'nanostores';
import locales from '../locales';
import {
  type IApp,
  type IBookmark,
  type ILocale,
  type ILocaleKey,
  type ISettings,
  type ISettingsKey,
  isKey,
  type Page,
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
  bookmarks: [],
  colorScheme: 'dark',
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
  scrollHeight: 25,
  theme: '#29487D',
  throttlePageLoad: 1000,
  viewMode: 'WebComic',
  zoomMode: 'percent',
  zoomStep: 30,
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

/**
 * Settings overrides for mobile devices.
 * @type {Partial<ISettings>}
 */
const mobileSettings: Partial<ISettings> = {
  lazyLoadImages: true,
  fitWidthIfOversize: true,
  navbar: 'disabled',
  viewMode: 'WebComic',
  header: 'click',
  hidePageControls: true,
  pagination: false,
};

/**
 * Generates the default settings object based on the device type (mobile/desktop) and scope (global/local).
 * @param {boolean} [global=true] - Whether to get the global or local default settings.
 * @returns {ISettings} The default settings object.
 */
function getDefault(global = true): ISettings {
  return !isMobile()
    ? { ...defaultSettings, enabled: global, theme: global ? '#29487D' : '#004526' }
    : _.defaultsDeep(mobileSettings, {
        ...defaultSettings,
        enabled: global,
        theme: global ? '#29487D' : '#004526',
      });
}

/**
 * A customizer function for Lodash's isEqualWith to handle specific
 * comparison logic for ISettings objects.
 *
 * It specifically handles the 'bookmarks' array and the `keybinds` object,
 * comparing their contents regardless of their order.
 *
 * @param value The value from the first object.
 * @param other The value from the second object.
 * @param key The key of the property being compared.
 * @returns A boolean if a custom comparison is made, or undefined to
 * let Lodash's default comparison take over.
 */
export function compareSettingsCustomizer(
  value: any,
  other: any,
  key: string | number | symbol | undefined,
): boolean | undefined {
  // Handle the 'bookmarks' array.
  if (key === 'bookmarks') {
    // Ensure both values are arrays before proceeding.
    if (Array.isArray(value) && Array.isArray(other)) {
      // If the array lengths are different, they are not equal.
      if (value.length !== other.length) {
        return false;
      }

      // To compare arrays without considering order, we can sort them first.
      // We'll create a sortable string from the bookmark properties.
      // Using `url` and `date` ensures uniqueness for sorting.
      const getBookmarkSortKey = (b: IBookmark) => `${b.url}-${b.date}`;

      const sortedValue = [...value].sort((a, b) =>
        getBookmarkSortKey(a).localeCompare(getBookmarkSortKey(b)),
      );
      const sortedOther = [...other].sort((a, b) =>
        getBookmarkSortKey(a).localeCompare(getBookmarkSortKey(b)),
      );

      // Now we can use Lodash's isEqual to perform a deep comparison
      // on the sorted arrays.
      return _.isEqual(sortedValue, sortedOther);
    }
  }

  // Handle the 'keybinds' object.
  if (key === 'keybinds') {
    // Ensure both values are objects before proceeding.
    if (typeof value === 'object' && typeof other === 'object') {
      const keysA = Object.keys(value).sort();
      const keysB = Object.keys(other).sort();

      // If the keys are different, the objects are not equal.
      if (!_.isEqual(keysA, keysB)) {
        return false;
      }

      // Compare the arrays for each key, after sorting the inner arrays.
      for (const k of keysA) {
        const sortedArrayA = value[k] ? [...value[k]].sort() : [];
        const sortedArrayB = other[k] ? [...other[k]].sort() : [];
        if (!_.isEqual(sortedArrayA, sortedArrayB)) {
          return false;
        }
      }
      return true;
    }
  }

  // For all other properties, return undefined to let Lodash handle the comparison.
  return undefined;
}

/**
 * Compares two ISettings objects to detect changes, handling bookmarks
 * as an unordered list. Can also compare individual properties if the
 * optional key is provided.
 *
 * @param newSettings The new settings object or value.
 * @param oldSettings The old settings object or value.
 * @param key The optional key to use when comparing individual properties.
 * @returns true if the settings are identical, false otherwise.
 */
export function haveSettingsChanged(
  newSettings: ISettings | ISettings[ISettingsKey],
  oldSettings: ISettings | ISettings[ISettingsKey],
  key?: ISettingsKey,
): boolean {
  // If the references are the same, no change has occurred.
  // This is a quick check to prevent unnecessary deep comparisons.
  if (newSettings === oldSettings) {
    return false;
  }

  // If a key is provided, we create a temporary object to trigger the customizer logic.
  if (key) {
    const tempA = { [key]: newSettings };
    const tempB = { [key]: oldSettings };
    return !_.isEqualWith(tempA, tempB, compareSettingsCustomizer);
  }
  // If no key is provided, assume we are comparing the full object.
  return !_.isEqualWith(newSettings, oldSettings, compareSettingsCustomizer);
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

export const isLocalSettingsAllowed = (key: ISettingsKey) =>
  isSettingsLocal() && !['locale', 'bookmarks', 'keybinds'].includes(key);

/**
 * The reactive store for all settings. It holds either global or local settings based on the current mode.
 * Components should subscribe to this store to react to settings changes.
 * @type {import('nanostores').MapStore<ISettings>}
 */
export const settings = map<ISettings>(
  isSettingsLocal()
    ? {
        ...localSettings,
        locale: globalSettings.locale,
        keybinds: globalSettings.keybinds,
        bookmarks: globalSettings.bookmarks,
      }
    : globalSettings,
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
 * The reactive store for the application's volatile state, like current page, scroll state, etc.
 * This state is not persisted.
 * @type {import('nanostores').MapStore<IApp>}
 */
export const appState = map<IApp>({
  autoScroll: false,
  chapter: createRef(),
  currentPage: 0,
  device: getDevice(),
  loaded: 0,
  manga: undefined,
  panel: 'none',
  scrollToPage: undefined,
});

if (import.meta.env.DEV) {
  logger({
    Settings: settings,
    AppState: appState,
  });
}

/**
 * Refreshes the reactive `settings` store with the latest values from the raw settings objects.
 * Call this after a change is made to `globalSettings` or `localSettings` to propagate the change.
 * @param {K} [key] - If provided, refreshes only a single key. Otherwise, refreshes the entire object.
 */
export function refreshSettings<K extends ISettingsKey>(key?: K): void {
  if (key) {
    const newVal = isLocalSettingsAllowed(key) ? localSettings[key] : globalSettings[key];
    const currentVal = settings.get()?.[key];
    // Pass the key to the comparison function
    if (haveSettingsChanged(currentVal, newVal, key)) {
      settings.setKey(key, newVal);
      logScript('Refreshed Settings', key, newVal);
    }
    return;
  }
  const newObj = isSettingsLocal()
    ? {
        ...localSettings,
        locale: globalSettings.locale,
        keybinds: globalSettings.keybinds,
        bookmarks: globalSettings.bookmarks,
      }
    : { ...globalSettings };
  const currentObj = settings.get();
  if (haveSettingsChanged(currentObj, newObj)) {
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
  // Pass the key to the comparison function
  if (!haveSettingsChanged(current, value, key)) return;
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
  // Pass the key to the comparison function
  if (!haveSettingsChanged(currentEffective, value, key)) return;
  settings.setKey(key, value);
  if (isLocalSettingsAllowed(key)) {
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
 * Gets a value from the reactive `appState` store.
 * @template K
 * @param {K} key - The key of the value to get.
 * @returns {IApp[K]} The value from the app state.
 */
export function getAppStateValue<K extends keyof IApp>(key: K): IApp[K] {
  return appState.get()[key];
}

/**
 * Sets a value in the reactive `appState` store.
 * @template K
 * @param {K} key - The key of the value to set.
 * @param {IApp[K]} value - The new value.
 */
export function setAppStateValue<K extends keyof IApp>(key: K, value: IApp[K]): void {
  const current = appState.get()[key];
  if (_.isEqual(current, value)) return;
  appState.setKey(key, value);
}

/**
 * Updates a value in the `appState` store using a function.
 * @template K
 * @param {K} key - The key of the value to change.
 * @param {(value: IApp[K]) => IApp[K]} fn - The function to change the value.
 */
export function changeAppStateValue<K extends keyof IApp>(
  key: K,
  fn: (value: IApp[K]) => IApp[K],
): void {
  const oldVal = appState.get()[key];
  const newVal = fn(oldVal);
  if (_.isEqual(oldVal, newVal)) return;
  appState.setKey(key, newVal);
}

/**
 * Updates a specific image's data within the `appState.images` object.
 * This is useful for updating properties of a single image (e.g., its loaded status, dimensions).
 *
 * @param {number} index - The index of the image to update.
 * @param {(value: Page) => Page} fn - A function that receives the current image data and returns the updated image data.
 */
export function changeImage(index: number, fn: (value: Page) => Page): void {
  changeAppStateValue('images', images => ({
    ...images,
    [index]: { ...images?.[index], ...fn(images?.[index] ?? {}) },
  }));
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
  return getSettingsValue('bookmarks').find(el => el.url === url)?.page;
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
    '\nAppState',
    appState.get(),
  );
}

giveToWindow('MOVSettings', showSettings);

export const navbarSize = 34;
