import _ from 'lodash';
import { getSettings, isMobile, logScript, setSettings } from '../utils/tampermonkey';
import { ISettings } from '../types';
import diffObj from '../utils/diffObj';

export const defaultSettings: ISettings = {
  theme: 'darkblue',
  customTheme: '#263e3a',
  themeShade: 600,
  colorScheme: 'dark',
  fitWidthIfOversize: true,
  showThumbnails: true,
  downloadZip: false,
  throttlePageLoad: 1000,
  zoom: 100,
  zoomStep: 25,
  minZoom: 50,
  loadMode: 'wait',
  viewMode: 'WebComic',
  bookmarks: [],
  lazyLoadImages: false,
  lazyStart: 50,
  hidePageControls: false,
  mouseOverMenu: true,
};

// Configuration
let settings: ISettings = _.defaultsDeep(getSettings(defaultSettings), defaultSettings);

// Force Settings for mobile
if (isMobile) {
  settings.lazyLoadImages = true;
  settings.fitWidthIfOversize = true;
  settings.showThumbnails = false;
  settings.viewMode = 'WebComic';
}

type SettingsKey = keyof typeof settings;
export function useSettingsValue(key: SettingsKey) {
  return settings[key];
}

export function useSettings() {
  return settings;
}
export function updateSettings(newValue: Partial<ISettings>) {
  logScript(JSON.stringify(newValue));
  settings = { ...settings, ...newValue };
  setSettings(diffObj(settings, defaultSettings));
}

export function resetSettings() {
  updateSettings(defaultSettings);
}

// Clear old Bookmarks
const bookmarkTimeLimit = 1000 * 60 * 60 * 24 * 30 * 12; // year
updateSettings({
  bookmarks: settings.bookmarks.filter((el) => Date.now() - el.date < bookmarkTimeLimit),
});
