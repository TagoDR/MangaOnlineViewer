import { useStores } from '@nanostores/lit';
import { css, html, LitElement, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { map } from 'lit/directives/map.js';
import { appState, getAppStateValue, getLocaleString, locale, settings } from '../core/settings.js';
import type { NavbarMode } from '../types';
import sequence from '../utils/sequence';
import { svgToUrl } from '../utils/svgs.ts';
import { transformScrollToHorizontal } from './events/common.ts';
import { clickThumbnail } from './events/navigation.ts';
import { IconCategory, IconPhotoOffRaw, IconPhotoRaw } from './icons';
import styles from './styles/Navbar.css?inline';

@customElement('mov-navbar')
@useStores(settings, locale, appState)
export default class Navbar extends LitElement {
  static styles = [
    unsafeCSS(styles),
    css`
      .Thumbnail .ThumbnailImg[src=''],
      .Thumbnail .ThumbnailImg:not([src]) {
        background-image: url('${unsafeCSS(svgToUrl(IconPhotoRaw))}');
      }

      .Thumbnail .ThumbnailImg.imgBroken {
        background-image: url('${unsafeCSS(svgToUrl(IconPhotoOffRaw))}');
      }
    `,
  ];

  @property({ type: String })
  mode: NavbarMode = 'bottom';

  render() {
    const manga = getAppStateValue('manga');
    const navClasses = {
      horizontal: this.mode === 'bottom',
      vertical: this.mode !== 'bottom',
      left: this.mode === 'left',
      right: this.mode === 'right',
      bottom: this.mode === 'bottom',
    };

    return html`
      <nav
        id="Navigation"
        class="${classMap(navClasses)}"
      >
        <div
          id="NavigationCounters"
          class="ControlLabel"
        >
          ${IconCategory}
          <i>${getAppStateValue('loaded')}</i> /
          <b>
            ${(manga?.pages ?? 1) - ((manga?.begin ?? 1) - 1)}
          </b>
          ${getLocaleString('PAGES_LOADED')}
          <span>: ${getAppStateValue('currentPage')}</span>
        </div>
        <div
          id="Thumbnails"
          @wheel=${this.mode === 'bottom' ? transformScrollToHorizontal : null}
        >
          ${map(
            sequence(manga?.pages ?? 1, manga?.begin ?? 1),
            index =>
              html` <div
                id="Thumbnail${index}"
                class="Thumbnail"
                role="button"
                tabindex="0"
                title="Go to page ${index}"
                @click=${() => clickThumbnail(index)}
              >
                <img
                  id="ThumbnailImg${index}"
                  alt=""
                  class="ThumbnailImg"
                  src=${getAppStateValue('images')?.[index]?.src ?? ''}
                />
                <figcaption class="ThumbnailIndex">${index}</figcaption>
              </figure>
            `,
          )}
        </div>
      </nav>
    `;
  }
}
