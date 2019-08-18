/* eslint-disable camelcase */

// Encapsulation for the console
function logScript(...text) {
  // eslint-disable-next-line no-console
  console.log('MangaOnlineViewer:', ...text);
  return text;
}
// Composeble console output
const logScriptC = R.curry((x, y) => logScript(x, y)[1]);
// Clear the Console
function logClear(...text) {
  // eslint-disable-next-line no-console
  console.clear();
  logScript(...text);
}
// Replacement function for GM_listValues allowing for debugging in console
const getListGM = GM_listValues || (() => []);
// Replacement function for GM_listValues allowing for debugging in console
const removeValueGM = GM_deleteValue || ((name) => logScript('Removing: ', name));
// Replacement function for GM_info allowing for debugging in console
const getInfoGM = GM_info || {
  scriptHandler: 'Console',
  script: {
    name: 'Debug',
    version: 'Testing',
  },
};
// Replacement function for GM_getValue allowing for debugging in console
const getValueGM = GM_getValue || ((name, defaultValue = null) => logScript('Getting: ', name, '=',
  defaultValue)[3]);
// Replacement function for GM_setValue allowing for debugging in console
const setValueGM = GM_setValue || ((name, value) => logScript('Getting: ', name, '=', value));

// See https://stackoverflow.com/a/2401861/331508 for optional browser sniffing code.
function getBrowser() {
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
function getEngine() {
  return `${getInfoGM.scriptHandler || 'Greasemonkey'} ${getInfoGM.version}`;
}

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
};
