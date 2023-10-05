import cssStyles from './styles/styles.ts';
import { getUserSettings } from '../core/settings.ts';
import { themesCSS } from './themes.ts';
import type { IManga } from '../types/index.ts';
import externalCSS from './styles/externalStyle.ts';
import { wrapStyle } from '../utils/css.ts';

function head(manga: IManga) {
  return `
<title>${manga.title}</title>
<meta charset='UTF-8'>
${wrapStyle('externals', externalCSS)}
${wrapStyle('reader', cssStyles)}
${themesCSS}
${wrapStyle(
  'MinZoom',
  `#MangaOnlineViewer .PageContent .PageImg {min-width: ${getUserSettings().minZoom}vw;}`,
)}
`;
}

export default head;
