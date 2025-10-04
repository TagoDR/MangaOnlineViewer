import type { IBookmark } from './IBookmark';

/**
 * Defines the available reading modes for the viewer.
 * - `WebComic`: A continuous vertical strip, optimized for webcomics.
 * - `FluidLTR`: A continuous horizontal strip, read from Left to Right.
 * - `FluidRTL`: A continuous horizontal strip, read from Right to Left.
 * - `Vertical`: Pages are displayed one below the other with a separator.
 */
export type ViewMode = 'WebComic' | 'FluidLTR' | 'FluidRTL' | 'Vertical';

/**
 * Defines when the script should automatically start.
 * - `wait`: Show a prompt for 3 seconds before starting.
 * - `always`: Start immediately on page load.
 * - `never`: Require the user to manually click the start button.
 */
export type LoadMode = 'wait' | 'always' | 'never';

/**
 * Defines the color scheme for the UI.
 */
export type ColorScheme = 'dark' | 'light';

/**
 * Defines the behavior of the header.
 * - `hover`: Appears when the mouse is near the top of the page.
 * - `scroll`: Appears when scrolling up.
 * - `click`: Appears only when a menu button is clicked.
 * - `fixed`: Always visible at the top.
 * - `simple`: A minimal, always-visible header.
 */
export type HeaderMode = 'hover' | 'scroll' | 'click' | 'fixed' | 'simple';

/**
 * Defines the position and behavior of the thumbnail navigation bar.
 */
export type NavbarMode = 'disabled' | 'bottom' | 'left' | 'right';

/**
 * Defines the zoom behavior.
 * - `percent`: Zoom is a percentage of the image's original size.
 * - `height`: Image height is fit to the screen height.
 * - `width`: Image width is fit to the screen width.
 */
export type ZoomMode = 'percent' | 'height' | 'width';

/**
 * Defines the structure for the user's configurable settings.
 */
export type ISettings = {
  /** An array of all saved bookmarks. */
  bookmarks: IBookmark[];
  /** The currently selected color scheme for the UI. */
  colorScheme: ColorScheme;
  /** Whether to automatically download chapters as a ZIP file. */
  downloadZip: boolean;
  /** Whether to capture and display the comments section from the original page. */
  enableComments: boolean;
  /** Whether the script is enabled, locally for a specific site, or globally. */
  enabled: boolean;
  /** Whether to automatically fit oversized images to the screen width. */
  fitWidthIfOversize: boolean;
  /** The behavior of the main header. */
  header: HeaderMode;
  /** Whether to always hide the individual page controls. */
  hidePageControls: boolean;
  /** A record of all user-defined keybindings. */
  keybinds: Record<string, string[] | undefined>;
  /** Whether to enable lazy loading for images. */
  lazyLoadImages: boolean;
  /** The page number at which to start lazy loading. */
  lazyStart: number;
  /** The default behavior for starting the viewer. */
  loadMode: LoadMode;
  /** The selected language for the UI, represented by a locale code (e.g., 'en_US'). */
  locale: string;
  /** The maximum number of times to retry loading a failed image. */
  maxReload: number;
  /** The minimum zoom level for an image, as a percentage of the screen width. */
  minZoom: number;
  /** The position and behavior of the thumbnail navigation bar. */
  navbar: NavbarMode;
  /** Whether to show the thumbnail navigation bar. */
  pagination: boolean;
  /** The speed (in pixels) for automatic scrolling. */
  scrollHeight: number;
  /** The primary theme color for the UI, in hex format. */
  theme: string;
  /** The delay (in milliseconds) between loading consecutive pages. */
  throttlePageLoad: number;
  /** The default reading mode. */
  viewMode: ViewMode;
  /** The default zoom behavior. */
  zoomMode: ZoomMode;
  /** The amount (as a percentage) to change the zoom by with each step. */
  zoomStep: number;
  /** The default zoom level, as a percentage. */
  zoomValue: number;
};

/**
 * A utility type that represents all valid keys for the settings object.
 * This ensures type safety when accessing settings.
 */
export type ISettingsKey = keyof ISettings;
