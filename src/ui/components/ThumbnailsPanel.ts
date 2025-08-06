import { html } from 'lit';
import { getLocaleString, getSettingsValue } from '../../core/settings';
import type { IManga } from '../../types';
import sequence from '../../utils/sequence';
import { transformScrollToHorizontal } from '../events/common';
import { clickThumbnail } from '../events/navigation';
import { IconCategory } from '../icons';
import { classMap } from 'lit/directives/class-map.js';

const ThumbnailsPanel = (manga: IManga) => html`
  <nav
    id="Navigation"
    class="${classMap({
      panel: true,
      disabled: getSettingsValue('navbar') === 'disabled',
    })}"
  >
    <div
      id="NavigationCounters"
      class="ControlLabel"
    >
      ${IconCategory}
      <i>0</i> /
      <b>${manga.begin && manga.begin > 1 ? manga.pages - (manga.begin - 1) : manga.pages}</b>
      ${getLocaleString('PAGES_LOADED')}
    </div>
    <div
      id="Thumbnails"
      @click=${clickThumbnail}
      @wheel=${transformScrollToHorizontal}
    >
      ${sequence(manga.pages, manga.begin).map(
        (index) => html`
          <div
            id="Thumbnail${index}"
            class="Thumbnail"
          >
            <img
              id="ThumbnailImg${index}"
              alt=""
              class="ThumbnailImg"
              src=""
            />
            <span class="ThumbnailIndex">${index}</span>
          </div>
        `,
      )}
    </div>
  </nav>
`;
export default ThumbnailsPanel;
