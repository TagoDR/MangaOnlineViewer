/* eslint-disable @typescript-eslint/no-explicit-any, no-console */
// Encapsulation for the console
import UAParser from 'ua-parser-js';
import type { ISettings } from '../types';

function logScript(...text: any[]): string[] {
  console.log('MangaOnlineViewer: ', ...text);
  return text;
}

function logScriptVerbose(...text: any[]): string[] {
  if (import.meta.env.MODE === 'dev') console.info('MangaOnlineViewer: ', ...text);
  return text;
}

// Compose console output
const logScriptC = (x: string) => (y: string) => logScript(x, y)[1];

// Clear the Console
function logClear(...text: string[]) {
  try {
    if (typeof console.clear !== 'undefined') {
      console.clear();
    }
  } finally {
    logScript(...text);
  }
}

// Replacement function for GM_listValues allowing for debugging in console
function getListGM(): string[] {
  return typeof GM_listValues !== 'undefined' ? GM_listValues() : [];
}

// Replacement function for GM_listValues allowing for debugging in console
function removeValueGM(name: string) {
  if (typeof GM_deleteValue !== 'undefined') {
    GM_deleteValue(name);
  } else {
    logScript('Removing: ', name);
  }
}

// Replacement function for GM_info allowing for debugging in console
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

// Replacement function for GM_getValue allowing for debugging in console
function getValueGM(name: string, defaultValue: any = null): any {
  if (typeof GM_getValue !== 'undefined') {
    return GM_getValue(name, defaultValue);
  }

  logScript('Fake Getting: ', name, ' = ', defaultValue);
  return defaultValue;
}

function getJsonGM(name: string, defaultValue: any = null) {
  const result = getValueGM(name, defaultValue);
  if (typeof result === 'string') {
    return JSON.parse(result);
  }

  return result;
}

function getSettings(defaultSettings?: ISettings): Partial<ISettings> {
  return getJsonGM('settings', defaultSettings);
}

// Replacement function for GM_setValue allowing for debugging in console
function setValueGM(name: string, value: any): string {
  try {
    GM_setValue(name, value);
    // LogScript('Setting: ', name, ' = ', value as any);
    return value.toString();
  } catch (e) {
    logScript('Fake Setting: ', name, ' = ', value);
    return String(value);
  }
}

function setSettings(value: Partial<ISettings>) {
  return setValueGM('settings', value);
}

// See https://stackoverflow.com/a/2401861/331508 for optional browser sniffing code.
function getBrowser() {
  let tem;
  const M =
    /(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i.exec(navigator.userAgent) ?? [];
  if (/trident/i.test(M[1])) {
    tem = /\brv[ :]+(\d+)/g.exec(navigator.userAgent) ?? [];
    return `IE ${tem[1] ?? ''}`;
  }

  if (M[1] === 'Chrome') {
    tem = /\b(OPR|Edge)\/(\d+)/.exec(navigator.userAgent);
    if (tem !== null) {
      return tem.slice(1).join(' ').replace('OPR', 'Opera');
    }
  }

  const tempM = [M[1], M[2]];
  tem = /version\/(\d+)/i.exec(navigator.userAgent);
  if (tem !== null) {
    tempM.splice(1, 1, tem[1]);
  }

  return tempM.join(' ');
}

// https://stackoverflow.com/questions/27487828/how-to-detect-if-a-userscript-is-installed-from-the-chrome-store
function getEngine(): string {
  return getInfoGM.scriptHandler ?? 'Greasemonkey';
}

const parser = new UAParser();
const getDevice = () => {
  const device = parser.getDevice().type;
  if (device !== 'mobile' && device !== 'tablet') {
    if (window.matchMedia('screen and (max-width: 600px)').matches) return 'mobile';
    if (window.matchMedia('screen and (max-width: 992px)').matches) return 'tablet';
    return 'desktop';
  }
  return device;
};
const isMobile = () =>
  // @ts-ignore
  navigator?.userAgentData?.mobile || getDevice() === 'mobile' || getDevice() === 'tablet';

export {
  logScript,
  logScriptVerbose,
  getListGM,
  getInfoGM,
  getValueGM,
  getJsonGM,
  getSettings,
  setValueGM,
  setSettings,
  removeValueGM,
  getBrowser,
  getEngine,
  logScriptC,
  logClear,
  isMobile,
  getDevice,
};
