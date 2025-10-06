import keycss from '@gerhobbelt/keyscss/keys.css?inline';
import { useStores } from '@nanostores/lit';
import { css, html, LitElement, nothing, unsafeCSS } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import {
  appState,
  getAppStateValue,
  getLocaleString,
  getSettingsValue,
  locale,
  settings,
} from '../core/settings';
import type { IManga } from '../types';
import { HeadroomController } from './controllers/headroom.ts';
import { TitleController } from './controllers/title.ts';
import { toggleAutoScroll } from './events/autoscroll';
import { buttonBookmarksOpen } from './events/bookmarks';
import {
  buttonGlobalHideImageControls,
  buttonRedirectURL,
  buttonStartDownload,
} from './events/globals';
import { buttonKeybindingsOpen, buttonSettingsOpen } from './events/panels';
import { updateViewMode } from './events/viewmode';
import { changeGlobalZoom, changeZoom, changeZoomByStep } from './events/zoom';
import styles from './styles/header.css?inline';
import media from './styles/media.css?inline';

@customElement('reader-header')
@useStores(settings, locale, appState)
export class Header extends LitElement {
  static readonly styles = [unsafeCSS(styles), unsafeCSS(media), unsafeCSS(keycss), css``];

  private readonly headroomController: HeadroomController;
  private readonly titleController: TitleController;

  @query('#MangaTitle') private readonly mangaTitleElement!: HTMLElement;

  constructor() {
    super();
    this.headroomController = new HeadroomController(this);
    this.titleController = new TitleController(this);
  }

  @property({ type: Object })
  manga?: IManga;

  protected updated(changedProperties: Map<string | number | symbol, unknown>) {
    super.updated(changedProperties);
    if (changedProperties.has('manga') && this.manga) {
      requestAnimationFrame(() => {
        if (this.manga) {
          this.titleController.observe(
            this.mangaTitleElement,
            this.manga?.title ?? 'Manga Online Viewer',
          );
        }
      });
    }
  }

  render() {
    if (!this.manga) return html``;
    const { headroom, headerVisible } = this.headroomController;
    const keybinds = getSettingsValue('keybinds');
    const renderKeybind = (action: keyof typeof keybinds) => {
      if (getAppStateValue('device') !== 'desktop') return nothing;
      const keys = keybinds[action];
      if (!keys || keys.length === 0) {
        return nothing;
      }
      return keys.map(key => html`<kbd slot="details">${key}</kbd>`);
    };

    return html`
      <wa-button
        id="menu"
        class="${classMap({
          [getSettingsValue('header')]: true,
          hide: ['top', 'end'].includes(headroom),
        })}"
        @click=${this.headroomController.toggleHeaderVisibility}
      >
        <wa-icon name="IconMenu2"></wa-icon>
      </wa-button>
      <header
        id="Header"
        class="${classMap({
          [getSettingsValue('header')]: true,
          [`headroom-${headroom}`]: true,
          visible: headerVisible && ['hide', 'none'].includes(headroom),
          [getAppStateValue('device')]: true,
        })}"
      >
        <div
          id="Toolbar"
          class="button-group"
        >
          <wa-dropdown id="FileDropdown">
            <wa-button
              slot="trigger"
              title="${getLocaleString('FILE_MENU')}"
            >
              <wa-icon
                label="File"
                name="IconDotsVertical"
              ></wa-icon>
            </wa-button>
            <wa-dropdown-item
              id="settings"
              @click=${buttonSettingsOpen}
            >
              <wa-icon
                slot="icon"
                name="IconSettings"
              ></wa-icon>
              ${getLocaleString('SETTINGS')} ${renderKeybind('SETTINGS')}
            </wa-dropdown-item>
            <wa-dropdown-item
              id="keybindings"
              @click=${buttonKeybindingsOpen}
            >
              <wa-icon
                slot="icon"
                name="IconKeyboard"
              ></wa-icon>
              ${getLocaleString('KEYBINDINGS')}
            </wa-dropdown-item>
            <wa-dropdown-item
              id="AutoScroll"
              class="${classMap({ running: getAppStateValue('autoScroll') })}"
              @click=${toggleAutoScroll}
            >
              <wa-icon
                slot="icon"
                name="${getAppStateValue('autoScroll') ? 'IconPlayerPause' : 'IconPlayerPlay'}"
              ></wa-icon>
              ${getLocaleString('SCROLL_START')} ${renderKeybind('SCROLL_START')}
            </wa-dropdown-item>
            <wa-dropdown-item
              id="bookmarks"
              class="tablets"
              @click=${buttonBookmarksOpen}
            >
              <wa-icon
                slot="icon"
                name="IconBookmarks"
              ></wa-icon>
              ${getLocaleString('BOOKMARKS')}
            </wa-dropdown-item>
            <wa-dropdown-item
              id="pageControls"
              class="tablets phones"
              @click="${buttonGlobalHideImageControls}"
              ?selected=${getSettingsValue('hidePageControls')}
            >
              <wa-icon
                slot="icon"
                name="IconListNumbers"
              ></wa-icon>
              ${getLocaleString('TOGGLE_CONTROLS')}
            </wa-dropdown-item>
          </wa-dropdown>

          <wa-dropdown id="ViewDropdown">
            <wa-button
              slot="trigger"
              title="${getLocaleString('VIEW_MENU')}"
            >
              <wa-icon
                label="View"
                name="IconBook"
              ></wa-icon>
            </wa-button>
            <wa-dropdown-item
              id="webComic"
              class="tablets"
              @click="${updateViewMode('WebComic')}"
              ?selected=${getSettingsValue('viewMode') === 'WebComic'}
            >
              <wa-icon
                slot="icon"
                name="IconSpacingVertical"
              ></wa-icon>
              ${getLocaleString('VIEW_MODE_WEBCOMIC')} ${renderKeybind('VIEW_MODE_WEBCOMIC')}
            </wa-dropdown-item>
            <wa-dropdown-item
              id="verticalMode"
              class="tablets"
              @click="${updateViewMode('Vertical')}"
              ?selected=${getSettingsValue('viewMode') === 'Vertical'}
            >
              <wa-icon
                slot="icon"
                name="IconArrowAutofitDown"
              ></wa-icon>
              ${getLocaleString('VIEW_MODE_VERTICAL')} ${renderKeybind('VIEW_MODE_VERTICAL')}
            </wa-dropdown-item>
            <wa-dropdown-item
              id="ltrMode"
              @click="${updateViewMode('FluidLTR')}"
              ?selected=${getSettingsValue('viewMode') === 'FluidLTR'}
            >
              <wa-icon
                slot="icon"
                name="IconArrowAutofitRight"
              ></wa-icon>
              ${getLocaleString('VIEW_MODE_LEFT')} ${renderKeybind('VIEW_MODE_LEFT')}
            </wa-dropdown-item>
            <wa-dropdown-item
              id="rtlMode"
              @click="${updateViewMode('FluidRTL')}"
              ?selected=${getSettingsValue('viewMode') === 'FluidRTL'}
            >
              <wa-icon
                slot="icon"
                name="IconArrowAutofitLeft"
              ></wa-icon>
              ${getLocaleString('VIEW_MODE_RIGHT')} ${renderKeybind('VIEW_MODE_RIGHT')}
            </wa-dropdown-item>
          </wa-dropdown>
          <wa-dropdown id="ZoomDropdown">
            <wa-button
              slot="trigger"
              title="${getLocaleString('ZOOM_MENU')}"
            >
              <wa-icon
                label="Zoom"
                name="IconZoom"
              ></wa-icon>
            </wa-button>
            <wa-dropdown-item
              id="enlarge"
              @click="${changeZoomByStep()}"
            >
              <wa-icon
                slot="icon"
                name="IconZoomInArea"
              ></wa-icon>
              ${getLocaleString('ENLARGE')} ${renderKeybind('ENLARGE')}
            </wa-dropdown-item>
            <wa-dropdown-item
              id="restore"
              @click="${changeGlobalZoom('percent', 100)}"
            >
              <wa-icon
                slot="icon"
                name="IconZoomPan"
              ></wa-icon>
              ${getLocaleString('RESTORE')} ${renderKeybind('RESTORE')}
            </wa-dropdown-item>
            <wa-dropdown-item
              id="reduce"
              @click="${changeZoomByStep(-1)}"
            >
              <wa-icon
                slot="icon"
                name="IconZoomOutArea"
              ></wa-icon>
              ${getLocaleString('REDUCE')} ${renderKeybind('REDUCE')}
            </wa-dropdown-item>
            <wa-dropdown-item
              id="fitWidth"
              @click="${changeGlobalZoom('width')}"
              ?selected=${getSettingsValue('zoomMode') === 'width'}
            >
              <wa-icon
                slot="icon"
                name="IconArrowAutofitWidth"
              ></wa-icon>
              ${getLocaleString('FIT_WIDTH')} ${renderKeybind('FIT_WIDTH')}
            </wa-dropdown-item>
            <wa-dropdown-item
              id="fitHeight"
              @click="${changeGlobalZoom('height')}"
              ?selected=${getSettingsValue('zoomMode') === 'height'}
            >
              <wa-icon
                slot="icon"
                name="IconArrowAutofitHeight"
              ></wa-icon>
              ${getLocaleString('FIT_HEIGHT')} ${renderKeybind('FIT_HEIGHT')}
            </wa-dropdown-item>
          </wa-dropdown>
        </div>
        <div id="ViewerTitle">
          <h1
            id="MangaTitle"
            title="${this.manga.title}"
          >
            ${this.titleController.value ?? this.manga.title}
          </h1>
        </div>
        <div id="ZoomControl">
          <wa-slider
            id="Zoom"
            name="Zoom"
            .value="${getSettingsValue('zoomValue')}"
            min="${getSettingsValue('minZoom')}"
            max="200"
            @input=${changeZoom}
            step="20"
            with-markers
            with-tooltip
            label="Zoom : ${
              getSettingsValue('zoomMode') === 'percent'
                ? `${getSettingsValue('zoomValue')}%`
                : getSettingsValue('zoomMode')
            }"
          >
          </wa-slider>
        </div>
        <div
          id="GlobalFunctions"
          class="button-group"
        >
          <wa-button
            id="series"
            href="${this.manga.series ?? nothing}"
            @click=${buttonRedirectURL}
            title="${getLocaleString('RETURN_CHAPTER_LIST')}"
            ?disabled=${!this.manga.series}
          >
            <wa-icon name="IconBookReturn"></wa-icon>
          </wa-button>
          <wa-button
            id="download"
            title="${getLocaleString('DOWNLOAD_ZIP')}"
            @click=${buttonStartDownload}
            ?disabled=${getAppStateValue('download') !== 'available'}
            ?loading=${getAppStateValue('download') === 'working'}
          >
            <wa-icon
              name="${
                getAppStateValue('download') === 'working' ? 'IconLoader2' : 'IconFileDownload'
              }"
            ></wa-icon>
          </wa-button>
          <wa-button
            id="prev"
            href="${this.manga.prev ?? nothing}"
            title="${getLocaleString('PREVIOUS_CHAPTER')}"
            @click=${buttonRedirectURL}
            ?disabled=${!this.manga.prev}
          >
            <wa-icon name="IconArrowBigLeft"></wa-icon>
          </wa-button>
          <wa-button
            id="next"
            href="${this.manga.next ?? nothing}"
            title="${getLocaleString('NEXT_CHAPTER')}"
            @click=${buttonRedirectURL}
            ?disabled=${!this.manga.next}
          >
            <wa-icon name="IconArrowBigRight"></wa-icon>
          </wa-button>
        </div>
      </header>
    `;
  }
}
