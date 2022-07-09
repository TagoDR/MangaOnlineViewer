import cssStyles from './components/styles';
import settings from './settings';
import { themesCSS } from './themes';
import { IManga } from '../types';
import externalCSS from './components/externalStyle';
import { wrapStyle } from '../utils/css';

function head(manga: IManga) {
  return `
<head>
  <title>${manga.title}</title>
  <meta charset='UTF-8'>
  ${wrapStyle('externals', externalCSS)}
  ${wrapStyle('reader', cssStyles)}
  ${themesCSS}
  ${wrapStyle(
    'MinZoom',
    `#MangaOnlineViewer .PageContent .PageImg {min-width: ${settings.minZoom}vw;}`,
  )}
</head>
`;
}
export default head;
