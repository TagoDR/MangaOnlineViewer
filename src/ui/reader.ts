import { html } from '../utils/code-tag';
import cssStyles from './styles/styles';
import { getUserSettings } from '../core/settings';
import { themesCSS } from './themes';
import type { IManga } from '../types';
import externalCSS from './styles/externalStyle';
import { wrapStyle } from '../utils/css';

function head(manga: IManga) {
  return html`
    <title>${manga.title}</title>
    <meta charset="UTF-8" />
    ${wrapStyle('externals', externalCSS)} ${wrapStyle('reader', cssStyles)} ${themesCSS}
    ${wrapStyle(
      'MinZoom',
      `#MangaOnlineViewer .PageContent .PageImg {min-width: ${getUserSettings().minZoom}vw;}`,
    )}
  `;
}

export default head;
