import { getSettingsValue } from '../../core/settings';
import type { IManga } from '../../types';
import { html } from '../../utils/code-tag';
import listPages from './MangaPages';

const Reader = (manga: IManga) => html`
  <main
    id="Chapter"
    class="${getSettingsValue('fitWidthIfOversize') ? 'fitWidthIfOversize' : ''}
  ${getSettingsValue('verticalSeparator') ? 'separator' : ''}
  ${getSettingsValue('viewMode')}"
  >
    ${listPages(manga.pages, manga.begin ?? 0).join('')}
  </main>
`;
export default Reader;
