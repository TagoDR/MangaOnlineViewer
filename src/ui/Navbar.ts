import { html, nothing } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { getAppStateValue, getLocaleString, getSettingsValue } from '../core/settings.ts';
import type { IManga } from '../types';
import sequence from '../utils/sequence.ts';
import { transformScrollToHorizontal } from './events/common.ts';
import { clickThumbnail } from './events/navigation.ts';
import { IconCategory } from './icons';

const Navbar = (manga: IManga) => {
  const navbarPosition = getSettingsValue('navbar');
  const isVertical = navbarPosition === 'left' || navbarPosition === 'right';
  return html`
    <nav
      id="Navigation"
      class="${classMap({
        [navbarPosition]: true,
        panel: true,
        vertical: isVertical,
        horizontal: !isVertical,
        header: getAppStateValue('headerVisible'),
      })}"
    >
      <div
        id="NavigationCounters"
        class="ControlLabel"
      >
        ${IconCategory}
        <i>${getAppStateValue('loaded')}</i> /
        <b>
          ${(getAppStateValue('manga')?.pages ?? 0) - ((getAppStateValue('manga')?.begin ?? 1) - 1)}
        </b>
        ${getLocaleString('PAGES_LOADED')}
        <span>: ${getAppStateValue('currentPage')}</span>
      </div>
      <div
        id="Thumbnails"
        @wheel=${!isVertical ? transformScrollToHorizontal : nothing}
      >
        ${sequence(manga.pages, manga.begin).map(
          index => html`
            <div
              id="Thumbnail${index}"
              class="Thumbnail"
            >
              <img
                id="ThumbnailImg${index}"
                alt=""
                class="ThumbnailImg"
                src=${getAppStateValue('images')?.[index]?.src ?? ''}
                @click=${clickThumbnail}
              />
              <span class="ThumbnailIndex">${index}</span>
            </div>
          `,
        )}
      </div>
    </nav>
  `;
};
export default Navbar;
