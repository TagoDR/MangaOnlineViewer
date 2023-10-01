import _ from 'lodash';
import { get, writable } from 'svelte/store';
import { addMessages, init } from 'svelte-i18n';
import {
  getListGM,
  getSettings,
  isMobile,
  logScript,
  removeValueGM,
  setSettings,
  settingsChangeListener,
} from '../utils/tampermonkey';
import type { IBookmark, ISettings } from '../types';
import diffObj from '../utils/diffObj';
import locales from '../locales';
import { isNothing } from '../utils/checks';

export const defaultSettings: ISettings = {
  locale: 'en_US',
  theme: 'darkblue',
  customTheme: '#263e3a',
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

const getDefault = () =>
  !isMobile()
    ? defaultSettings
    : _.defaultsDeep(
      {
        lazyLoadImages: true,
        fitWidthIfOversize: true,
        showThumbnails: false,
        viewMode: 'WebComic',
        header: 'click',
      },
      defaultSettings,
    );

// Configuration
export const settings = writable<ISettings>(
  _.defaultsDeep(getSettings(defaultSettings), defaultSettings));
locales.forEach((locale) => addMessages(locale.ID, locale));
init({
  fallbackLocale: 'en_US',
  initialLocale: get(settings).locale,
});

settingsChangeListener((newValue: Partial<ISettings>) => {
  const newSettings = _.defaultsDeep(newValue, getDefault());
  const diff = diffObj(newSettings, get(settings));
  if (!isNothing(diff)) {
    logScript('Imported Settings', diff);
    settings.set(newSettings);
    document.getElementById('MangaOnlineViewer')?.dispatchEvent(new Event('hydrate'));
  }
});

export function getUserSettings() {
  return get(settings);
}

export function getLocaleString(name: string): string {
  const locale = locales.find((l) => l.ID === get(settings).locale);
  if (locale?.[name]) {
    return locale[name];
  }

  if (locales?.at(1)?.[name]) {
    return locales[1][name];
  }

  return '##MISSING_STRING##';
}

export function getAllLocaleStrings(name: string): string {
  return locales.map((locale) => `<span class='${locale.ID}'>${locale[name]}</span>`).join('\n');
}

export function updateSettings(newValue: Partial<ISettings>) {
  logScript(JSON.stringify(newValue));
  settings.update((_settings: ISettings) => ({ ..._settings, ...newValue }));
  setSettings(diffObj(get(settings), getDefault()));
}

export function resetSettings() {
  getListGM().forEach((setting) => {
    removeValueGM(setting);
  });
  updateSettings(getDefault());
}

export function isBookmarked(url: string = window.location.href): number | undefined {
  return get(settings).bookmarks.find((el: IBookmark) => el.url === url)?.page;
}

// Clear old Bookmarks
const bookmarkTimeLimit = 1000 * 60 * 60 * 24 * 30 * 12; // Year
const refreshedBookmark = get(settings).bookmarks.filter(
  (el: IBookmark) => Date.now() - new Date(el.date).valueOf() < bookmarkTimeLimit,
);
if (get(settings).bookmarks.length !== refreshedBookmark.length) {
  updateSettings({ bookmarks: refreshedBookmark });
}

export default settings;
