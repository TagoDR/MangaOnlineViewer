import { IBookmark } from './IBookmark';

export interface ITheme {
  primaryShade: 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
  colorScheme: 'dark' | 'light';
  primaryColor: string;
  other?: {
    variant: 'filled' | 'outline' | 'light';
  };
}

export interface ISettings {
  theme: string;
  customTheme: string;
  customThemeBody: string;
  customThemeText: string;
  customThemeLines: string;
  customThemePanel: string;
  customThemeButton: string;
  viewMode: 'FluidLTR' | 'FluidRTL' | '';
  bookmarks: IBookmark[];
  loadMode: 'wait' | 'always' | 'never';
  fitWidthIfOversize?: boolean;
  showThumbnails?: boolean;
  downloadZip?: boolean;
  throttlePageLoad: number;
  zoom: number;
  zoomStep: number;
  minZoom: number;
  lazyLoadImages: boolean;
  lazyStart: number;
  hidePageControls: boolean;
  mouseOverMenu: boolean;
}
