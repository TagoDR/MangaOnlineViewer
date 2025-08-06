import type { IBookmark } from './IBookmark';

export type Shade = 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
export type ViewMode = 'WebComic' | 'FluidLTR' | 'FluidRTL' | 'Vertical';
export type LoadMode = 'wait' | 'always' | 'never';
export type ColorScheme = 'dark' | 'light';
export type HeaderMode = 'hover' | 'scroll' | 'click' | 'fixed' | 'simple';
export type NavbarMode = 'disabled' | 'bottom' | 'left' | 'right';
export type ZoomMode = 'percent' | 'height' | 'width';

export type ISettings = {
  bookmarks: IBookmark[];
  colorScheme: ColorScheme;
  customTheme: string;
  downloadZip: boolean;
  enableComments: boolean;
  enabled: boolean;
  fitWidthIfOversize: boolean;
  header: HeaderMode;
  hidePageControls: boolean;
  keybinds: Record<string, string[] | undefined>;
  lazyLoadImages: boolean;
  lazyStart: number;
  loadMode: LoadMode;
  locale: string;
  maxReload: number;
  minZoom: number;
  navbar: NavbarMode;
  pagination: boolean;
  scrollHeight: number;
  theme: string;
  themeShade: Shade;
  throttlePageLoad: number;
  viewMode: ViewMode;
  zoomMode: ZoomMode;
  zoomStep: number;
  zoomValue: number;
};

export type ISettingsKey = keyof ISettings;
