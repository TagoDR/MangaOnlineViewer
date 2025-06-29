import { getLocaleString, getSettingsValue } from '../../core/settings';
import type { IManga } from '../../types';
import { html } from '../../utils/code-tag';
import sequence from '../../utils/sequence';
import { IconCategory } from '../icons';

const ThumbnailsPanel = (manga: IManga) => html`
  <nav id="Navigation" class="panel ${getSettingsValue('showThumbnails') ? '' : 'disabled'}">
    <div id="NavigationCounters" class="ControlLabel">
      ${IconCategory}
      <i>0</i> /
      <b>${manga.begin && manga.begin > 1 ? manga.pages - (manga.begin - 1) : manga.pages}</b>
      ${getLocaleString('PAGES_LOADED')}
    </div>
    <div id="Thumbnails">
      ${sequence(manga.pages, manga.begin)
        .map(
          index => html`
            <div id="Thumbnail${index}" class="Thumbnail">
              <img id="ThumbnailImg${index}" alt="" class="ThumbnailImg" src="" />
              <span class="ThumbnailIndex">${index}</span>
            </div>
          `,
        )
        .join('')}
    </div>
  </nav>
`;
export default ThumbnailsPanel;
