import { useStores } from '@nanostores/lit';
import { css, html, LitElement, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { map } from 'lit/directives/map.js';
import {
  appState,
  getAppStateValue,
  getLocaleString,
  locale,
  setAppStateValue,
  settings,
} from '../core/settings.js';
import sequence from '../utils/sequence';
import { svgToUrl } from '../utils/svgs.ts';
import { transformScrollToHorizontal } from './events/viewmode.ts';
import { IconPhoto, IconPhotoOff } from './icons';
import styles from './styles/Navbar.css?inline';

@customElement('mov-navbar')
@useStores(settings, locale, appState)
export default class Navbar extends LitElement {
  static styles = [
    unsafeCSS(styles),
    css`
      .Thumbnail .ThumbnailImg[src=''],
      .Thumbnail .ThumbnailImg:not([src]) {
        background-image: url('${unsafeCSS(svgToUrl(IconPhoto))}');
      }

      .Thumbnail .ThumbnailImg.imgBroken {
        background-image: url('${unsafeCSS(svgToUrl(IconPhotoOff))}');
      }
    `,
  ];

  /** Defines the layout and scroll direction of the navbar. */
  @property({ type: String })
  mode: 'bottom' | 'left' | 'right' = 'bottom';

  render() {
    const navClasses = {
      horizontal: this.mode === 'bottom',
      vertical: this.mode !== 'bottom',
      left: this.mode === 'left',
      right: this.mode === 'right',
    };

    return html`
      <div
        id="Navigation"
        class=${classMap(navClasses)}
      >
        <div id="NavigationCounters">
          <wa-icon
            name="category"
            style="vertical-align: middle;"
            label="Thumbnails"
          ></wa-icon>
          <i>${getAppStateValue('loaded')}</i> /
          <b>
            ${
              (getAppStateValue('manga')?.pages ?? 0) -
              ((getAppStateValue('manga')?.begin ?? 1) - 1)
            }
          </b>
          ${getLocaleString('PAGES_LOADED')}
          <span>: ${getAppStateValue('currentPage')}</span>
        </div>
        <div
          id="Thumbnails"
          @wheel=${this.mode === 'bottom' ? transformScrollToHorizontal : null}
        >
          ${map(
            sequence(getAppStateValue('manga')?.pages ?? 0, getAppStateValue('manga')?.begin ?? 1),
            index =>
              html` <div
                id="Thumbnail${index}"
                class="Thumbnail"
                role="button"
                tabindex="0"
                title="Go to page ${index}"
                @click=${() => this._onThumbnailClick(index)}
                @keydown=${(e: KeyboardEvent) => {
                  if (e.key === 'Enter' || e.key === ' ') this._onThumbnailClick(index);
                }}
              >
                <img
                  id="ThumbnailImg${index}"
                  alt="Thumbnail ${index}"
                  class="ThumbnailImg"
                  src="${getAppStateValue('manga')?.listImages?.[index - 1]}"
                />
                <span class="ThumbnailIndex">${index}</span>
              </div>`,
          )}
        </div>
      </div>
    `;
  }

  /**
   * Dispatches an event to the reader store to scroll to a specific page.
   * @param index The page number of the clicked thumbnail.
   */
  private _onThumbnailClick(index: number) {
    setAppStateValue('scrollToPage', index);
  }
}
