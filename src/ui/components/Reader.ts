import { html } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { getSettingsValue } from '../../core/settings';
import type { IManga } from '../../types';
import { transformScrollToHorizontal, transformScrollToHorizontalReverse } from '../events/common';
import listPages from './MangaPages';

const Reader = (manga: IManga) => html`
  <main
    id="Chapter"
    class="${classMap({
      fitWidthIfOversize: getSettingsValue('fitWidthIfOversize'),
      [getSettingsValue('viewMode')]: true,
    })}"
    @wheel=${(e: WheelEvent) => {
      const viewMode = getSettingsValue('viewMode');
      if (viewMode === 'FluidLTR') transformScrollToHorizontal(e);
      else if (viewMode === 'FluidRTL') transformScrollToHorizontalReverse(e);
    }}
  >
    ${listPages(manga.pages, manga.begin ?? 0)}
  </main>
`;
export default Reader;
