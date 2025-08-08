import type { IManga } from '../types';
import { html } from '../utils/code-tag';
import { wrapStyle } from '../utils/css';
import externalCSS from './styles/externalStyle';

function head(manga: IManga) {
  return html`
    <title>${manga.title}</title>
    <meta charset="UTF-8" />
    ${wrapStyle('externals', externalCSS)}
  `;
}

export default head;
