import { html } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { getSettingsValue } from '../../core/settings';
import type { IManga } from '../../types';
import { transformScrollToHorizontal } from '../events/common';
import listPages from './MangaPages';

const Reader = (manga: IManga) => html`
  <main
    id="Chapter"
    class="${classMap({
      fitWidthIfOversize: getSettingsValue('fitWidthIfOversize'),
      [getSettingsValue('viewMode')]: true,
    })}"
    @wheel=${(e: WheelEvent) => {
      if (getSettingsValue('viewMode') !== 'FluidLTR') return;
      transformScrollToHorizontal(e);
    }}
  >
    ${listPages(manga.pages, manga.begin ?? 0)}
  </main>
`;
export default Reader;
