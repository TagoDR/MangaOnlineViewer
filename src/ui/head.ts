import type { IManga } from '../types';
import { html } from '../utils/code-tag';
import { wrapStyle } from '../utils/css';
import externalCSS from './styles/externalStyle';

/**
 * Generates the HTML for the document's `<head>` section.
 * This includes setting the page title based on the manga's title and injecting
 * critical external CSS styles required for the application's UI.
 *
 * @param {IManga} manga - The manga object containing metadata, used here for the title.
 * @returns An HTML template literal to be rendered inside the `<head>`.
 */
function head(manga: IManga) {
  return html`
    <title>${manga.title}</title>
    <meta charset="UTF-8" />
    ${wrapStyle('externals', externalCSS)}
  `;
}

export default head;
