import { getValueGM, isMobile, setValueGM } from '../utils/tampermonkey';
import { ISettings, IBookmark } from '../types';

// Configuration
const settings: ISettings = {
  theme: getValueGM('Theme', 'darkblue'),
  customTheme: getValueGM('CustomTheme', '#263e3a'),
  themeShade: getValueGM('ThemeShade', 600),
  colorScheme: getValueGM('ColorScheme', 'dark'),
  fitWidthIfOversize: getValueGM('FitWidthIfOversize', true),
  showThumbnails: getValueGM('ShowThumbnails', true),
  downloadZip: getValueGM('DownloadZip', false),
  throttlePageLoad: getValueGM('Timer', 1000),
  zoom: getValueGM('Zoom', 100),
  zoomStep: getValueGM('ZoomStep', 25),
  minZoom: getValueGM('MinZoom', 50),
  loadMode: getValueGM('LoadMode', 'wait'),
  viewMode: getValueGM('ViewMode', 'WebComic'),
  bookmarks: JSON.parse(getValueGM('Bookmarks', '[]')) as IBookmark[],
  lazyLoadImages: getValueGM('LazyLoadImages', false),
  lazyStart: getValueGM('LazyStart', 50),
  hidePageControls: getValueGM('HidePageControls', false),
  mouseOverMenu: getValueGM('MouseOverMenu', true),
};
// Force Settings for mobile
if (isMobile) {
  settings.lazyLoadImages = true;
  settings.lazyStart = 5;
  settings.fitWidthIfOversize = true;
  settings.showThumbnails = false;
  settings.viewMode = '';
}
// Clear old Bookmarks
const bookmarkTimeLimit = 1000 * 60 * 60 * 24 * 30 * 12; // year
settings.bookmarks = settings.bookmarks.filter((el) => Date.now() - el.date < bookmarkTimeLimit);
setValueGM('Bookmarks', JSON.stringify(settings.bookmarks));

export default settings;
