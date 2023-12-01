import { html } from '../../utils/code-tag';
import sequence from '../../utils/sequence';
import { IManga } from '../../types';
import { IconCategory } from '../icons';
import { getLocaleString, getUserSettings } from '../../core/settings';

const ThumbnailsPanel = (manga: IManga) => html`
  <nav id="Navigation" class="panel ${getUserSettings().showThumbnails ? '' : 'disabled'}">
    <div id="NavigationCounters" class="ControlLabel">
      ${IconCategory}
      <i>0</i> / <b>${manga.begin > 1 ? manga.pages - (manga.begin - 1) : manga.pages}</b>
      ${getLocaleString('PAGES_LOADED')}
    </div>
    <div id="Thumbnails">
      ${sequence(manga.pages, manga.begin)
        .map(
          (index) => html`
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
