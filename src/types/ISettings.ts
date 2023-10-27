import { type IBookmark } from './IBookmark';

export type ITheme = {
  primaryShade: 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
  colorScheme: 'dark' | 'light';
  primaryColor: string;
  other?: {
    variant: 'filled' | 'outline' | 'light';
  };
};

export type Shade = 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
export type ViewMode = 'WebComic' | 'FluidLTR' | 'FluidRTL' | 'Vertical';
export type LoadMode = 'wait' | 'always' | 'never';
export type ColorScheme = 'dark' | 'light';
export type HeaderMode = 'hover' | 'scroll' | 'click' | 'fixed';
export type ZoomMode = 'percent' | 'height' | 'width';

export type ISettings = {
  locale: string;
  colorScheme: ColorScheme;
  theme: string;
  customTheme: string;
  themeShade: Shade;
  viewMode: ViewMode;
  bookmarks: IBookmark[];
  loadMode: LoadMode;
  fitWidthIfOversize?: boolean;
  showThumbnails?: boolean;
  downloadZip?: boolean;
  throttlePageLoad: number;
  defaultZoom: number;
  zoomMode: ZoomMode;
  zoomStep: number;
  minZoom: number;
  lazyLoadImages: boolean;
  lazyStart: number;
  hidePageControls: boolean;
  header: HeaderMode;
  maxReload: number;
  keybinds: Record<string, string[] | undefined>;
};
