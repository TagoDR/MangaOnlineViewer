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
import { isNothing } from '../utils/checks.js';

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
  },
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
  if (locale && locale[name]) {
    return locale[name];
  }
  if (locales[1] && locales[1][name]) {
    return locales[1][name];
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

export function isBookmarked(url: string = window.location.href): number | undefined {
  return settings.bookmarks.find((el) => el.url === url)?.page;
}

// Clear old Bookmarks
const bookmarkTimeLimit = 1000 * 60 * 60 * 24 * 30 * 12; // year
const refreshedBookmark = settings.bookmarks.filter(
  (el) => Date.now() - new Date(el.date).valueOf() < bookmarkTimeLimit,
);
if (settings.bookmarks.length !== refreshedBookmark.length) {
  updateSettings({ bookmarks: refreshedBookmark });
}

// Clear used Bookmarks
if (!isNothing(isBookmarked())) {
  logScript(`Bookmark Removed ${window.location.href}`);
  updateSettings({
    bookmarks: settings.bookmarks.filter((el) => el.url !== window.location.href),
  });
}
