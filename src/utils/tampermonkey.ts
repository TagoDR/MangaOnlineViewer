/** biome-ignore-all lint/suspicious/noExplicitAny: the values truly does not matter */

import Bowser from 'bowser';
import type { Device, ISettings } from '../types';

/**
 * Safely exposes a value to the window object, targeting `unsafeWindow` in userscript environments
 * and falling back to the standard `window` object.
 * @param {string} key - The key to assign the value to on the window object.
 * @param {any} content - The value to expose.
 */
export function giveToWindow(key: string, content: any) {
  if (typeof unsafeWindow !== 'undefined') unsafeWindow[key] = content;
  if (typeof window !== 'undefined') {
    // @ts-expect-error key is missing
    window[key] = content;
  }
}

/**
 * The primary logging function for the userscript, which prefixes all messages with a standard header.
 * @param {...any} text - The content to be logged.
 * @returns {any[]} The logged content.
 */
function logScript(...text: any[]): any[] {
  console.log('MangaOnlineViewer: ', ...text);
  return text;
}

/**
 * A verbose logging function that only outputs messages when in a development environment.
 * @param {...any} text - The content to be logged.
 * @returns {any[]} The logged content.
 */
function logScriptVerbose(...text: any[]): any[] {
  if (['dev', 'development'].includes(import.meta.env.MODE))
    console.info('MangaOnlineViewer: ', ...text);
  return text;
}

/**
 * A curried logging function that creates a new logger with a predefined prefix.
 * @param {string} x - The prefix to be added to all log messages from this logger.
 * @returns {(...y: any[]) => any[]} A new logging function.
 */
const logScriptC =
  (x: string) =>
  (...y: any[]) =>
    logScript(x, ...y);

/**
 * Clears the browser console and then prints an initial message.
 * @param {...string} text - The message to log after clearing the console.
 */
function logClear(...text: string[]) {
  try {
    if (typeof console.clear !== 'undefined') {
      console.clear();
    }
  } finally {
    logScript(...text);
  }
}

/**
 * Logs a stack trace to the console with a standard prefix.
 * @param {...string} text - The message to accompany the stack trace.
 */
function printStackTrace(...text: string[]) {
  console.trace('MangaOnlineViewer:', ...text);
}

/**
 * A safe wrapper for `GM_listValues` that provides a fallback for non-userscript environments.
 * @returns {string[]} An array of keys for all stored values, or an empty array if the API is unavailable.
 */
function getListGM(): string[] {
  return typeof GM_listValues !== 'undefined' ? GM_listValues() : [];
}

/**
 * A safe wrapper for `GM_deleteValue`.
 * @param {string} name - The key of the value to remove.
 */
function removeValueGM(name: string) {
  if (typeof GM_deleteValue !== 'undefined') {
    GM_deleteValue(name);
  } else {
    logScriptVerbose('Fake Removing: ', name);
  }
}

/**
 * A shim for the `GM_info` object, providing fallback data for non-userscript environments.
 */
const getInfoGM =
  typeof GM_info !== 'undefined'
    ? GM_info
    : {
        scriptHandler: 'Console',
        script: {
          name: 'Debug',
          version: 'Testing',
        },
      };

/**
 * A safe wrapper for `GM_getValue`.
 * @param {string} name - The key of the value to retrieve.
 * @param {any} [defaultValue=null] - The default value to return if the key does not exist.
 * @returns {any} The retrieved value or the default.
 */
function getValueGM(name: string, defaultValue: any = null): any {
  if (typeof GM_getValue !== 'undefined') {
    return GM_getValue(name, defaultValue);
  }
  logScriptVerbose('Fake Getting: ', name, ' = ', defaultValue);
  return defaultValue;
}

/**
 * Retrieves a value from storage and parses it as JSON.
 * @param {string} name - The key of the value to retrieve.
 * @param {any} [defaultValue=null] - The default value to return if the key does not exist.
 * @returns {any} The parsed JSON object or the default value.
 */
function getJsonGM(name: string, defaultValue: any = null) {
  const result = getValueGM(name, defaultValue);
  if (typeof result === 'string' && result.trim() !== '') {
    try {
      return JSON.parse(result);
    } catch (e) {
      logScript('Failed to parse JSON from storage', name, e);
      return defaultValue;
    }
  }
  return result;
}

/**
 * Retrieves the global settings object from storage.
 * @param {ISettings} [defaultSettings] - The default settings to return if none are found.
 * @returns {Partial<ISettings>} The global settings object.
 */
function getGlobalSettings(defaultSettings?: ISettings): Partial<ISettings> {
  return getJsonGM('settings', defaultSettings);
}

/**
 * Retrieves the site-specific (local) settings object from storage.
 * @param {ISettings} [defaultSettings] - The default settings to return if none are found.
 * @returns {Partial<ISettings>} The local settings object.
 */
function getLocalSettings(defaultSettings?: ISettings): Partial<ISettings> {
  return getJsonGM(window.location.hostname, defaultSettings);
}

/**
 * A safe wrapper for `GM_setValue`.
 * @param {string} name - The key for the value to be stored.
 * @param {any} value - The value to store.
 * @returns {string} The string representation of the stored value.
 */
function setValueGM(name: string, value: any): string {
  if (typeof GM_setValue !== 'undefined') {
    GM_setValue(name, value);
    logScript('Setting: ', name, ' = ', value);
    return value.toString();
  }
  logScriptVerbose('Fake Setting: ', name, ' = ', value);
  return String(value);
}

/**
 * Saves the global settings object to storage.
 * @param {Partial<ISettings>} value - The settings object to save.
 * @returns {string} The string representation of the saved object.
 */
function saveGlobalSettings(value: Partial<ISettings>): string {
  return setValueGM('settings', value);
}

/**
 * Saves the site-specific (local) settings object to storage.
 * @param {Partial<ISettings>} value - The settings object to save.
 * @returns {string} The string representation of the saved object.
 */
function saveLocalSettings(value: Partial<ISettings>): string {
  return setValueGM(window.location.hostname, value);
}

/**
 * Attempts to parse the browser name and version from the user agent string.
 * @returns {string} The browser name and version (e.g., "Chrome 108").
 */
function getBrowser(): string {
  const result = Bowser.getParser(window.navigator.userAgent).getBrowser();
  return `${result.name} ${result.version}`;
}

/**
 * Gets the name of the userscript engine (e.g., 'Tampermonkey', 'Greasemonkey').
 * @returns {string} The name of the script handler.
 */
function getEngine(): string {
  return getInfoGM.scriptHandler ?? 'Greasemonkey';
}

/**
 * Determines the type of device based on the user agent and screen size.
 * @returns {Device} The device type: 'mobile', 'tablet', or 'desktop'.
 */
const getDevice = (): Device => {
  const parser = Bowser.getParser(window.navigator.userAgent);
  const device = parser.getPlatformType(true);
  if (device === 'mobile' || window.matchMedia('screen and (max-width: 600px)').matches) {
    return 'mobile';
  }
  if (device === 'tablet' || window.matchMedia('screen and (max-width: 992px)').matches) {
    return 'tablet';
  }
  return 'desktop';
};

/**
 * A convenience function to check if the current device is a mobile or tablet.
 * @returns {boolean} `true` if the device is a mobile or tablet, `false` otherwise.
 */
const isMobile = () => getDevice() === 'mobile' || getDevice() === 'tablet';

/**
 * Sets up a listener for changes to a GM storage value, triggering a callback when the value is changed in another tab.
 * @param {(newSettings: Partial<ISettings>) => void} fn - The callback function to execute with the new settings.
 * @param {string} [gmValue='settings'] - The key of the GM value to listen to (e.g., 'settings' or a hostname).
 * @returns {number | undefined} The listener ID from `GM_addValueChangeListener`, or `undefined` if not available.
 */
const settingsChangeListener = (
  fn: (newSettings: Partial<ISettings>) => void,
  gmValue: string = 'settings',
): number | undefined => {
  if (typeof GM_addValueChangeListener !== 'undefined') {
    try {
      return GM_addValueChangeListener(
        gmValue,
        (_name: string, _oldValue: any, newValue: any, remote: boolean) => {
          if (remote) fn(newValue);
        },
      );
    } catch (e) {
      logScript('Failed to add settings listener', e);
    }
  }
  return undefined;
};

export {
  logScript,
  logScriptVerbose,
  getListGM,
  getInfoGM,
  getValueGM,
  getJsonGM,
  getGlobalSettings,
  getLocalSettings,
  setValueGM,
  saveGlobalSettings,
  saveLocalSettings,
  removeValueGM,
  getBrowser,
  getEngine,
  logScriptC,
  logClear,
  isMobile,
  getDevice,
  settingsChangeListener,
  printStackTrace,
};
