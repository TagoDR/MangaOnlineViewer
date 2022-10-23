import _ from 'lodash';
import {
  getListGM,
  getSettings,
  isMobile,
  logScript,
  removeValueGM,
  setSettings,
} from '../utils/tampermonkey';
import { ISettings } from '../types';
import diffObj from '../utils/diffObj';
import locales from '../locales';

export const defaultSettings: ISettings = {
  locale: 'en_US',
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
  header: 'hover',
  maxReload: 5,
};

// Configuration
let settings: ISettings = _.defaultsDeep(getSettings(defaultSettings), defaultSettings);

// Force Settings for mobile
if (isMobile) {
  settings.lazyLoadImages = true;
  settings.fitWidthIfOversize = true;
  settings.showThumbnails = false;
  settings.viewMode = 'WebComic';
  settings.header = 'click';
}

type SettingsKey = keyof typeof settings;

export function useSettingsValue(key: SettingsKey) {
  return settings[key];
}

export function useSettings() {
  return settings;
}

export function getLocaleString(name: string): string {
  const locale = locales.find((l) => l.ID === settings.locale);
  if (locale) {
    return locale[name];
  }
  return '##MISSING_STRING##';
}

export function updateSettings(newValue: Partial<ISettings>) {
  logScript(JSON.stringify(newValue));
  settings = { ...settings, ...newValue };
  setSettings(diffObj(settings, defaultSettings));
}

export function resetSettings() {
  getListGM().forEach((setting) => removeValueGM(setting));
  updateSettings(defaultSettings);
}

// Clear old Bookmarks
const bookmarkTimeLimit = 1000 * 60 * 60 * 24 * 30 * 12; // year
const refreshedBookmark = settings.bookmarks.filter(
  (el) => Date.now() - el.date < bookmarkTimeLimit,
);
if (settings.bookmarks.length !== refreshedBookmark.length) {
  updateSettings({ bookmarks: refreshedBookmark });
}

export function isBookmarked(url: string = window.location.href): boolean {
  return useSettings().bookmarks.some((el) => el.url === url);
}
