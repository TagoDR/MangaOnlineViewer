/**
 * Defines the structure for a localization object, containing all the translatable strings
 * used throughout the application's user interface.
 */
export type ILocale = {
  /** The unique identifier for the locale, e.g., 'en_US'. */
  ID: string;
  /** The human-readable name of the language, e.g., 'English (US)'. */
  NAME: string;

  STARTING: string;
  RESUME: string;
  WAITING: string;
  CHOOSE_BEGINNING: string;
  BUTTON_START: string;
  SETTINGS: string;
  LANGUAGE: string;
  COLOR_SCHEME: string;
  THEME: string;
  THEME_COLOR: string;
  THEME_HUE: string;
  THEME_SHADE: string;
  DEFAULT_LOAD_MODE: string;
  LOAD_MODE_NORMAL: string;
  LOAD_MODE_ALWAYS: string;
  LOAD_MODE_NEVER: string;
  LOAD_SPEED: string;
  DEFAULT_ZOOM: string;
  DEFAULT_ZOOM_MODE: string;
  MINIMUM_ZOOM: string;
  ZOOM_STEP: string;
  DEFAULT_VIEW_MODE: string;
  VIEW_MODE_VERTICAL: string;
  VIEW_MODE_LEFT: string;
  VIEW_MODE_RIGHT: string;
  VIEW_MODE_WEBCOMIC: string;
  FIT_WIDTH_OVERSIZED: string;
  SHOW_THUMBNAILS: string;
  ENABLE_COMMENTS: string;
  HIDE_CONTROLS: string;
  HEADER_TYPE: string;
  HEADER_HOVER: string;
  HEADER_SCROLL: string;
  HEADER_CLICK: string;
  HEADER_FIXED: string;
  HEADER_SIMPLE: string;
  BUTTON_DOWNLOAD: string;
  DOWNLOAD_ZIP: string;
  DOWNLOAD_IMAGES: string;
  BUTTON_NEXT: string;
  NEXT_CHAPTER: string;
  BUTTON_PREVIOUS: string;
  PREVIOUS_CHAPTER: string;
  BOOKMARKS: string;
  BOOKMARK: string;
  BOOKMARK_REMOVED: string;
  BOOKMARK_SAVED: string;
  BOOKMARK_MESSAGE: string;
  KEYBINDINGS: string;
  EDIT_KEYBINDS: string;
  SAVE_KEYBINDS: string;
  BUTTON_EDIT: string;
  BUTTON_SAVE: string;
  KEYBIND_RULES: string;
  ATTENTION: string;
  WARNING: string;
  BUTTON_RESET_SETTINGS: string;
  SETTINGS_RESET: string;
  LANGUAGE_CHANGED: string;
  AUTO_DOWNLOAD: string;
  LAZY_LOAD: string;
  LAZY_LOAD_IMAGES_ENABLE: string;
  LAZY_LOAD_IMAGES: string;
  RETURN_CHAPTER_LIST: string;
  PAGES_LOADED: string;
  GO_TO_PAGE: string;
  ENLARGE: string;
  RESTORE: string;
  REDUCE: string;
  FIT_WIDTH: string;
  FIT_HEIGHT: string;
  PERCENT: string;
  TOGGLE_CONTROLS: string;
  ZOOM_IN: string;
  ZOOM_OUT: string;
  ZOOM_RESET: string;
  ZOOM_WIDTH: string;
  ZOOM_HEIGHT: string;
  HIDE: string;
  RELOAD: string;
  SLOWLY: string;
  NORMAL: string;
  FAST: string;
  EXTREME: string;
  ALL_PAGES: string;
  SPEED_WARNING: string;
  SPEED_WARNING_MESSAGE: string;
  SCROLL_UP: string;
  SCROLL_DOWN: string;
  CLOSE: string;
  LIST_EMPTY: string;
  DISPLAY_COMMENTS: string;
  COMMENTS: string;
  SCROLL_START: string;
  INCREASE_SPEED: string;
  DECREASE_SPEED: string;
  AUTO_SCROLL_HEIGHT: string;
  VERTICAL_SEPARATOR: string;
  END: string;
  SCOPE: string;
  GLOBAL: string;
  GENERAL: string;
  LOADING: string;
  ZOOM: string;
  OTHERS: string;
  NAVBAR_TYPE: string;
  NAVBAR_BOTTOM: string;
  NAVBAR_LEFT: string;
  NAVBAR_RIGHT: string;
  NAVBAR_DISABLED: string;
  ENABLE_PAGINATION: string;
  FILE_MENU: string;
  VIEW_MENU: string;
  ZOOM_MENU: string;
};

/**
 * A utility type that represents all valid keys for the localization strings.
 * This ensures type safety when accessing translations.
 */
export type ILocaleKey = keyof ILocale;
