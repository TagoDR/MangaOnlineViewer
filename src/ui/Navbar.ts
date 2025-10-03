import { useStores } from '@nanostores/lit';
import { css, html, LitElement, nothing, type PropertyValues, unsafeCSS } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { map } from 'lit/directives/map.js';
import { appState, getAppStateValue, getLocaleString, locale, settings } from '../core/settings.js';
import type { NavbarMode } from '../types';
import sequence from '../utils/sequence';
import { svgToUrl } from '../utils/svgs.ts';
import { transformScrollToHorizontal } from './events/common.ts';
import { clickThumbnail } from './events/navigation.ts';
import { IconCategory } from './icons';
import { IconPhoto, IconPhotoOff } from './icons/StyledIcons.ts';
import styles from './styles/navbar.css?inline';

/**
 * A LitElement component that displays a navigation bar with thumbnails for each page.
 * It can be positioned at the bottom, left, or right of the screen.
 * The component subscribes to global state stores to reactively update its content.
 *
 * @element navbar-thumbnails
 * @fires click - Navigates to the corresponding page when a thumbnail is clicked.
 */
@customElement('navbar-thumbnails')
@useStores(settings, locale, appState)
export default class Navbar extends LitElement {
  /**
   * The component's styles, including imported CSS and dynamic styles for image placeholders.
   */
  static readonly styles = [
    unsafeCSS(styles),
    css`
      #Navigation {
        transition: opacity 0.2s ease-in-out;
      }
      #Navigation.hiding {
        opacity: 0;
        /* Disable transition during position change to avoid animating the hide */
        transition: none;
      }

      .Thumbnail .ThumbnailImg[src=''],
      .Thumbnail .ThumbnailImg:not([src]) {
        background-image: url('${unsafeCSS(svgToUrl(IconPhoto))}');
      }

      .Thumbnail .ThumbnailImg.imgBroken {
        background-image: url('${unsafeCSS(svgToUrl(IconPhotoOff))}');
      }
    `,
  ];

  /**
   * The display mode of the navigation bar.
   * Can be 'bottom', 'left', 'right', or 'disabled'.
   * @type {NavbarMode}
   */
  @property({ type: String })
  mode: NavbarMode = 'bottom';

  @property({ type: Boolean })
  forceExpanded: boolean = false;

  /**
   * Internal state to manage visibility during mode changes, preventing visual jumps.
   * @private
   */
  @state()
  private isHiding = false;

  /**
   * Lit-element lifecycle method.
   * Hides the navbar just before its position is about to change.
   */
  willUpdate(changedProperties: PropertyValues<this>) {
    if (changedProperties.has('mode')) {
      this.isHiding = true;
    }
  }

  /**
   * Lit-element lifecycle method.
   * Fades the navbar back in after it has been re-rendered in the new position.
   */
  updated(changedProperties: PropertyValues<this>) {
    if (changedProperties.has('mode') && this.isHiding) {
      // A minimal timeout ensures the browser has processed the 'hiding' state
      // before we trigger the fade-in, making the transition more reliable than rAF.
      setTimeout(() => {
        this.isHiding = false;
      }, 50);
    }
  }

  /**
   * Renders the navigation bar, including page counters and thumbnails.
   * @returns The rendered template.
   */
  render() {
    if (this.mode === 'disabled') return nothing;
    const manga = getAppStateValue('manga');
    const navClasses = {
      horizontal: this.mode === 'bottom',
      vertical: this.mode !== 'bottom',
      left: this.mode === 'left',
      right: this.mode === 'right',
      bottom: this.mode === 'bottom',
      hiding: this.isHiding,
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
          <b> ${(manga?.pages ?? 1) - ((manga?.begin ?? 1) - 1)} </b>
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
              html` <figure
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
                  src=${getAppStateValue('images')?.[index]?.src ?? nothing}
                />
                <figcaption class="ThumbnailIndex">${index}</figcaption>
              </figure>`,
          )}
        </div>
      </nav>
    `;
  }
}
