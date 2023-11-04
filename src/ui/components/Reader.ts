import { html } from '../../utils/code-tag';
import { IManga } from '../../types';
import { getUserSettings } from '../../core/settings';
import listPages from './MangaPages';

const Reader = (manga: IManga) => html`
  <main
    id="Chapter"
    class="${getUserSettings().fitWidthIfOversize ? 'fitWidthIfOversize' : ''}
  ${getUserSettings().viewMode}"
  >
    ${listPages(manga.pages, manga.begin).join('')}
  </main>
`;
export default Reader;
