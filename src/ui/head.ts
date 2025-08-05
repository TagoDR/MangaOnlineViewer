import { getSettingsValue } from '../core/settings';
import type { IManga } from '../types';
import { html } from '../utils/code-tag';
import { wrapStyle } from '../utils/css';
import externalCSS from './styles/externalStyle';
import cssStyles from './styles/styles';
import { themesCSS } from './themes';

function head(manga: IManga) {
  return html`
    <title>${manga.title}</title>
    <meta charset="UTF-8" />
    ${wrapStyle('externals', externalCSS)} ${wrapStyle('reader', cssStyles)} ${themesCSS}
    ${wrapStyle(
      'MinZoom',
      `#MangaOnlineViewer .PageContent .PageImg {min-width: ${getSettingsValue('minZoom')}vw;}`,
    )}
  `;
}

export default head;
