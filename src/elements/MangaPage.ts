import { useStores } from '@nanostores/lit';
import { css, html, LitElement, unsafeCSS } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { type StyleInfo, styleMap } from 'lit/directives/style-map.js';
import _ from 'lodash';
import {
  appState,
  getAppStateValue,
  getLocaleString,
  getSettingsValue,
  isBookmarked,
  locale,
  setAppStateValue,
  settings,
} from '../core/settings';
import type { ZoomMode } from '../types';
import { svgToUrl } from '../utils/svgs.ts';
import { buttonBookmark } from './events/bookmarks.ts';
import { buttonReloadPage } from './events/individual.ts';
import { IconPhoto, IconPhotoOff } from './icons';
import styles from './styles/MangaPage.css?inline';

@customElement('mov-manga-page')
@useStores(settings, locale, appState)
export default class MangaPage extends LitElement {
  static styles = [
    unsafeCSS(styles),
    css`
      .PageContent .PageImg[src=''],
      .PageContent .PageImg:not([src]) {
        background-image: url('${unsafeCSS(svgToUrl(IconPhoto))}');
      }

      .PageContent .PageImg.imgBroken {
        background-image: url('${unsafeCSS(svgToUrl(IconPhotoOff))}');
      }
    `,
  ];

  @property({ type: Number })
  index = 0;
  @state() visible = true;
  @state() zoomMode: ZoomMode = 'percent';
  @state() zoomValue: number = 100;
  @state() private naturalWidth = 0; // State to hold the image's natural width

  private observer: IntersectionObserver | null = null;

  // Debounced function to update the store, preventing rapid-fire updates during fast scrolls.
  private debouncedUpdate = _.debounce(() => {
    // Only update if this image is not already the current one.
    if (getAppStateValue('currentPage') !== this.index) {
      setAppStateValue('currentPage', this.index);
    }
  }, 100);

  connectedCallback() {
    super.connectedCallback();

    // Determine the correct scroll container (root) for the observer.
    // In vertical modes, it's the reader's parent; in fluid modes, it's the reader itself.
    const viewMode = getSettingsValue('viewMode');
    const isVertical = viewMode === 'Vertical' || viewMode === 'WebComic';
    const readerElement = this.closest<HTMLElement>('#Chapter');
    const root = isVertical ? readerElement?.parentElement : readerElement;

    // Fallback to the document's viewport if the root isn't found.
    const options = {
      root: root ?? document,
      threshold: 0.5, // Trigger when 50% of the element is visible.
    };

    this.observer = new IntersectionObserver(entries => {
      // If the image is intersecting (more than 50% visible), trigger the update.
      if (entries[0]?.isIntersecting) {
        this.debouncedUpdate();
      }
    }, options);

    this.observer.observe(this);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    // Clean up the observer and any pending debounced calls.
    if (this.observer) {
      this.observer.disconnect();
      this.observer = null;
    }
    this.debouncedUpdate.cancel();
  }

  render() {
    const imageStyles: StyleInfo = {};

    if (this.naturalWidth > 0) {
      // Once loaded, calculate width based on the image's actual size.
      // e.g., naturalWidth: 150px, zoomValue: 200 -> 150 * (200/100) = 300px
      if (this.zoomMode === 'percent') {
        const zoomFactor = this.zoomValue / 100;
        imageStyles.width = `${this.naturalWidth * zoomFactor}px`;
        imageStyles.height = 'auto';
      } else if (this.zoomMode === 'width') {
        imageStyles.width = `100vw`;
        imageStyles.height = 'auto';
      } else if (this.zoomMode === 'height') {
        imageStyles.height = `100vh`;
        imageStyles.width = 'auto';
      }
    } else {
      // Before the image loads, use a percentage-based width for a responsive layout.
      // This prevents a layout shift when the image appears.
      imageStyles.width = `auto`;
    }

    return html` <wa-button-group
        size="small"
        class="${classMap({
          PageFunctions: true,
          hideControls: getSettingsValue('hidePageControls'),
        })}"
      >
        <wa-button
          id="BookmarkButton${this.index}"
          class="Bookmark"
          appearance="outlined"
          variant="brand"
          size="small"
          @click=${buttonBookmark}
        >
          <wa-icon
            name="${isBookmarked() ? 'bookmark-off' : 'bookmark'}"
            label="${getLocaleString('BOOKMARK')}"
          ></wa-icon>
        </wa-button>
        <wa-tooltip
          for="BookmarkButton${this.index}"
          placement="bottom-end"
        >
          ${getLocaleString('BOOKMARK')}
        </wa-tooltip>

        <wa-button
          id="ZoomInButton${this.index}"
          class="ZoomIn"
          appearance="outlined"
          variant="brand"
          size="small"
          @click=${this.onClickZoomIn}
        >
          <wa-icon
            name="zoom-in"
            label="${getLocaleString('ZOOM_IN')}"
          ></wa-icon>
        </wa-button>
        <wa-tooltip
          for="ZoomInButton${this.index}"
          placement="bottom-end"
        >
          ${getLocaleString('ZOOM_IN')}
        </wa-tooltip>

        <wa-button
          id="ZoomRestoreButton${this.index}"
          class="ZoomRestore"
          appearance="outlined"
          variant="brand"
          size="small"
          @click="${this.onClickZoomRestore}"
        >
          <wa-icon
            name="zoom-cancel"
            label="${getLocaleString('ZOOM_RESET')}"
          ></wa-icon>
        </wa-button>
        <wa-tooltip
          for="ZoomRestoreButton${this.index}"
          placement="bottom-end"
        >
          ${getLocaleString('ZOOM_RESET')}
        </wa-tooltip>

        <wa-button
          id="ZoomOutButton${this.index}"
          class="ZoomOut"
          appearance="outlined"
          variant="brand"
          size="small"
          @click="${this.onClickZoomOut}"
        >
          <wa-icon
            name="zoom-out"
            label="${getLocaleString('ZOOM_OUT')}"
          ></wa-icon>
        </wa-button>
        <wa-tooltip
          for="ZoomOutButton${this.index}"
          placement="bottom-end"
        >
          ${getLocaleString('ZOOM_OUT')}
        </wa-tooltip>

        <wa-button
          id="ZoomWidthButton${this.index}"
          class="ZoomWidth"
          appearance="outlined"
          variant="brand"
          size="small"
          @click=${this.onClickZoomWidth}
        >
          <wa-icon
            name="arrow-autofit-width"
            label="${getLocaleString('ZOOM_WIDTH')}"
          ></wa-icon>
        </wa-button>
        <wa-tooltip
          for="ZoomWidthButton${this.index}"
          placement="bottom-end"
        >
          ${getLocaleString('ZOOM_WIDTH')}
        </wa-tooltip>

        <wa-button
          id="ZoomHeightButton${this.index}"
          class="ZoomHeight"
          appearance="outlined"
          variant="brand"
          size="small"
          @click=${this.onClickZoomHeight}
        >
          <wa-icon
            name="arrow-autofit-height"
            label="${getLocaleString('ZOOM_HEIGHT')}"
          ></wa-icon>
        </wa-button>
        <wa-tooltip
          for="ZoomHeightButton${this.index}"
          placement="bottom-end"
        >
          ${getLocaleString('ZOOM_HEIGHT')}
        </wa-tooltip>

        <wa-button
          id="HideButton${this.index}"
          class="Hide"
          appearance="outlined"
          variant="brand"
          size="small"
          @click=${() => {
            this.visible = !this.visible;
          }}
        >
          <wa-icon
            name="${this.visible ? 'eye-off' : 'eye'}"
            label="${getLocaleString('HIDE')}"
          ></wa-icon>
        </wa-button>
        <wa-tooltip
          for="HideButton${this.index}"
          placement="bottom-end"
        >
          ${getLocaleString('HIDE')}
        </wa-tooltip>

        <wa-button
          id="ReloadButton${this.index}"
          class="Reload"
          appearance="outlined"
          variant="brand"
          size="small"
          @click=${buttonReloadPage}
        >
          <wa-icon
            name="refresh"
            label="${getLocaleString('RELOAD')}"
          ></wa-icon>
        </wa-button>
        <wa-tooltip
          for="ReloadButton${this.index}"
          placement="bottom-end"
        >
          ${getLocaleString('RELOAD')}
        </wa-tooltip>
        <wa-tag
          id="PageIndex${this.index}"
          class="PageIndex"
          appearance="outlined"
          variant="brand"
          size="medium"
          style=${styleMap({
            height: '38px',
            width: '38px',
            'border-radius': '0 5px 5px 0',
            'justify-content': 'center',
          })}
        >
          ${this.index}
        </wa-tag>
        <wa-tooltip
          for="PageIndex${this.index}"
          placement="bottom-end"
        >
          Page ${this.index}
        </wa-tooltip>
      </wa-button-group>
      <div
        class="${classMap({
          PageContent: true,
          hide: !this.visible,
          fitWidthIfOversize:
            getSettingsValue('fitWidthIfOversize') &&
            getSettingsValue('viewMode') !== 'FluidRTL' &&
            getSettingsValue('viewMode') !== 'FluidLTR',
          height: getSettingsValue('zoomMode') === 'height',
        })}"
      >
        <img
          id="PageImg${this.index}"
          alt="Manga Page ${this.index}"
          class="${classMap({
            PageImg: true,
            fitWidthIfOversize:
              getSettingsValue('fitWidthIfOversize') &&
              getSettingsValue('viewMode') !== 'FluidRTL' &&
              getSettingsValue('viewMode') !== 'FluidLTR',
            height: getSettingsValue('zoomMode') === 'height',
          })}"
          src=${getAppStateValue('manga')?.listImages?.[this.index - 1]}
          style=${styleMap(imageStyles)}
          @load=${this._onImageLoad}
          @error=${(e: Event) => (e.target as HTMLImageElement).classList.add('imgBroken')}
        />
      </div>`;
  }

  onClickZoomIn() {
    this.zoomMode = 'percent';
    this.zoomValue = this.zoomValue + getSettingsValue('zoomStep');
  }

  onClickZoomOut() {
    this.zoomMode = 'percent';
    this.zoomValue = this.zoomValue - getSettingsValue('zoomStep');
  }

  onClickZoomRestore() {
    this.zoomMode = 'percent';
    this.zoomValue = 100;
  }

  onClickZoomWidth() {
    this.zoomMode = 'width';
  }

  onClickZoomHeight() {
    this.zoomMode = 'height';
  }

  protected firstUpdated() {
    settings.listen((value, _oldValue, changedKey) => {
      if (changedKey === 'zoomMode') {
        this.zoomMode = value.zoomMode;
      }
      if (changedKey === 'zoomValue') {
        this.zoomValue = value.zoomValue;
      }
    });
  }

  /**
   * When the image loads, capture its natural width to enable pixel-perfect zooming.
   */
  private _onImageLoad(e: Event) {
    const img = e.target as HTMLImageElement;
    img.classList.remove('imgBroken');
    this.naturalWidth = img.naturalWidth;
    setAppStateValue('loaded', getAppStateValue('loaded') + 1);
    if (getAppStateValue('manga')?.pages === getAppStateValue('loaded')) {
      setAppStateValue('download', 'available');
    }
  }
}

declare global {
  interface HTMLElementMangaPageMap {
    'mov-manga-page': MangaPage;
  }
}
