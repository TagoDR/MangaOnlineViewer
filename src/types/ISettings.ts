import type { IBookmark } from './IBookmark';

export type ViewMode = 'WebComic' | 'FluidLTR' | 'FluidRTL' | 'Vertical';
export type LoadMode = 'wait' | 'always' | 'never';
export type ColorScheme = 'dark' | 'light';
export type HeaderMode = 'hover' | 'scroll' | 'click' | 'fixed' | 'simple';
export type NavbarMode = 'disabled' | 'bottom' | 'left' | 'right';
export type ZoomMode = 'percent' | 'height' | 'width';

export type ISettings = {
  bookmarks: IBookmark[];
  colorScheme: ColorScheme;
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
  throttlePageLoad: number;
  viewMode: ViewMode;
  zoomMode: ZoomMode;
  zoomStep: number;
  zoomValue: number;
};

export type ISettingsKey = keyof ISettings;
