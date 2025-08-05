import { html } from 'lit-html';
import { getSettingsValue } from '../../core/settings';
import type { IManga } from '../../types';
import { transformScrollToHorizontal } from '../events/common';
import listPages from './MangaPages';

const Reader = (manga: IManga) => html`
  <main
    id="Chapter"
    class="${getSettingsValue('fitWidthIfOversize') ? 'fitWidthIfOversize' : ''}
  ${getSettingsValue('verticalSeparator') ? 'separator' : ''}
  ${getSettingsValue('viewMode')}"
    @wheel=${(e: WheelEvent) => {
      if (getSettingsValue('viewMode') !== 'FluidLTR') return;
      transformScrollToHorizontal(e);
    }}
  >
    ${listPages(manga.pages, manga.begin ?? 0)}
  </main>
`;
export default Reader;
