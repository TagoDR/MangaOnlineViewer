import { IBookmark } from './IBookmark';
import { settings } from '../core/settings.js';

export interface ITheme {
  primaryShade: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
  colorScheme: 'dark' | 'light';
  white: string;
  black: string;
  colors: Record<
    string,
    [string, string, string, string, string, string, string, string, string, string]
  >;
  primaryColor: string;
  breakpoints: { sm: number };
  other: {
    variant: 'filled' | 'outline' | 'light';
  };
}

export interface ISettings {
  Theme:
    | 'Dark'
    | 'Light'
    | 'Clear'
    | 'Dark_Blue'
    | 'Tango_Blue'
    | 'Lime'
    | 'Plum'
    | 'Light_Plum'
    | 'Earthy'
    | 'Cool_Blues'
    | 'Custom_Dark'
    | 'Custom_Light'
    | 'Full_Custom';
  CustomTheme: string;
  CustomThemeBody: string;
  CustomThemeText: string;
  CustomThemeLines: string;
  CustomThemePanel: string;
  CustomThemeButton: string;
  configVersion: number;
  zoomStep: number;
  viewMode: 'WebComic' | 'FluidLTR' | 'FluidRTL' | ''; // inherit = WebComic
  bookmarks: IBookmark[];
  loadMode: 'wait' | 'always' | 'never';
  throttlePageLoad: number;
  widthScale: number;
  FitWidthIfOversize?: boolean;
  ShowThumbnails?: boolean;
  downloadZip?: boolean;
  Timer: number;
  Zoom: number;
  lazyLoadImages: boolean;
  lazyStart: number;
  hidePageControls: boolean;
}
