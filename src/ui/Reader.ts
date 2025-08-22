import { html } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { styleMap } from 'lit/directives/style-map.js';
import { getSettingsValue } from '../core/settings.ts';
import type { IManga } from '../types';
import {
  transformScrollToHorizontal,
  transformScrollToHorizontalReverse,
} from './events/common.ts';
import listPages from './MangaPage.ts';

/**
 * Renders the main reader area where manga pages are displayed.
 * This component is responsible for laying out the pages according to the selected view mode
 * and applying appropriate scrolling behavior, such as transforming vertical scroll to horizontal for fluid modes.
 *
 * @param {IManga} manga - The manga object containing the page count and starting page number.
 * @returns A Lit `TemplateResult` representing the reader's main container.
 */
const Reader = (manga: IManga) => html`
  <main
    id="Chapter"
    class="${classMap({
      fitWidthIfOversize: getSettingsValue('fitWidthIfOversize'),
      [getSettingsValue('viewMode')]: true,
      separator: getSettingsValue('viewMode') === 'Vertical',
    })}"
    style="${styleMap({
      [`margin-${getSettingsValue('navbar')}`]: '34px',
    })}"
    @wheel=${(e: WheelEvent) => {
      if (getSettingsValue('viewMode') === 'FluidLTR') transformScrollToHorizontal(e);
      else if (getSettingsValue('viewMode') === 'FluidRTL') transformScrollToHorizontalReverse(e);
    }}
  >
    ${listPages(manga.pages, manga.begin ?? 0)}
  </main>
`;
export default Reader;
