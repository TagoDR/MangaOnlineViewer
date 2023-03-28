import cssStyles from './styles/styles';
import { useSettings } from './settings';
import { themesCSS } from './themes';
import { IManga } from '../types';
import externalCSS from './styles/externalStyle';
import { wrapStyle } from '../utils/css';

function head(manga: IManga) {
  return `
<title>${manga.title}</title>
<meta charset='UTF-8'>
${wrapStyle('externals', externalCSS)}
${wrapStyle('reader', cssStyles)}
${themesCSS}
${wrapStyle(
  'MinZoom',
  `#MangaOnlineViewer .PageContent .PageImg {min-width: ${useSettings().minZoom}vw;}`,
)}
`;
}

export default head;
