/* eslint-disable camelcase */

// Encapsulation for the console
function logScript(...text: any[]): any[] {
  // eslint-disable-next-line no-console
  console.log('MangaOnlineViewer: ', ...text);
  return text;
}

// Compose console output
const logScriptC = (x: any) => (y: any) => logScript(x, y)[1];

// Clear the Console
function logClear(...text) {
  try {
    // eslint-disable-next-line no-console
    if (typeof console.clear !== 'undefined') console.clear();
  } finally {
    logScript(...text);
  }
}

// Replacement function for GM_listValues allowing for debugging in console
function getListGM(): string[] {
  return typeof GM_listValues !== 'undefined' ? GM_listValues() : [];
}

// Replacement function for GM_listValues allowing for debugging in console
function removeValueGM(name) {
  return typeof GM_deleteValue !== 'undefined'
    ? GM_deleteValue(name)
    : logScript('Removing: ', name);
}

// Replacement function for GM_info allowing for debugging in console
const getInfoGM = GM_info || {
  scriptHandler: 'Console',
  script: {
    name: 'Debug',
    version: 'Testing',
  },
};

// Replacement function for GM_getValue allowing for debugging in console
function getValueGM(name: string, defaultValue: any = null): any {
  if (typeof GM_getValue !== 'undefined') return GM_getValue(name, defaultValue);
  logScript('Getting: ', name, '=', defaultValue);
  return defaultValue;
}

// Replacement function for GM_setValue allowing for debugging in console
function setValueGM(name: string, value: string | number | boolean): string {
  if (typeof GM_setValue !== 'undefined') return String(GM_setValue(name, value));
  logScript('Getting: ', name, '=', value);
  return String(value);
}

// See https://stackoverflow.com/a/2401861/331508 for optional browser sniffing code.
function getBrowser(): string {
  const ua = navigator.userAgent;
  let tem;
  let M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
  if (/trident/i.test(M[1])) {
    tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
    return `IE ${tem[1] || ''}`;
  }
  if (M[1] === 'Chrome') {
    tem = ua.match(/\b(OPR|Edge)\/(\d+)/);
    if (tem !== null) {
      return tem.slice(1).join(' ').replace('OPR', 'Opera');
    }
  }
  M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, '-?'];
  tem = ua.match(/version\/(\d+)/i);
  if (tem !== null) {
    M.splice(1, 1, tem[1]);
  }
  return M.join(' ');
}

// See https://stackoverflow.com/questions/27487828/how-to-detect-if-a-userscript-is-installed-from-the-chrome-store
function getEngine(): string {
  return `${getInfoGM.scriptHandler || 'Greasemonkey'} ${getInfoGM.script.version}`;
}

const isMobile = W.matchMedia('screen and (max-width: 1024px)').matches;

export {
  logScript,
  getListGM,
  getInfoGM,
  getValueGM,
  setValueGM,
  removeValueGM,
  getBrowser,
  getEngine,
  logScriptC,
  logClear,
  isMobile,
};