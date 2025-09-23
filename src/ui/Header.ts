import keycss from '@gerhobbelt/keyscss/keys.css?inline';
import { useStores } from '@nanostores/lit';
import { css, html, LitElement, nothing, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
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
import { toggleAutoScroll } from './events/autoscroll';
import { buttonBookmarksOpen } from './events/bookmarks';
import {
  buttonCommentsOpen,
  buttonGlobalHideImageControls,
  buttonRedirectURL,
  buttonStartDownload,
} from './events/globals';
import { HeadroomController } from './events/headroom';
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

  constructor() {
    super();
    this.headroomController = new HeadroomController(this);
  }

  @property({ type: Object })
  manga?: IManga;

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
      <mov-button
        id="menu"
        class="${classMap({
          [getSettingsValue('header')]: true,
          hide: ['top', 'end'].includes(headroom),
        })}"
        @click=${this.headroomController.toggleHeaderVisibility}
      >
        <mov-icon name="IconMenu2"></mov-icon>
      </mov-button>
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
          <mov-dropdown id="FileDropdown">
            <mov-button
              slot="trigger"
              title="${getLocaleString('FILE_MENU')}"
            >
              <mov-icon
                label="File"
                name="IconDotsVertical"
              ></mov-icon>
            </mov-button>
            <mov-dropdown-item
              id="settings"
              @click=${buttonSettingsOpen}
            >
              <mov-icon
                slot="icon"
                name="IconSettings"
              ></mov-icon>
              ${getLocaleString('SETTINGS')} ${renderKeybind('SETTINGS')}
            </mov-dropdown-item>
            <mov-dropdown-item
              id="keybindings"
              @click=${buttonKeybindingsOpen}
            >
              <mov-icon
                slot="icon"
                name="IconKeyboard"
              ></mov-icon>
              ${getLocaleString('KEYBINDINGS')}
            </mov-dropdown-item>
            <mov-dropdown-item
              id="AutoScroll"
              class="${classMap({ running: getAppStateValue('autoScroll') })}"
              @click=${toggleAutoScroll}
            >
              <mov-icon
                slot="icon"
                name="${getAppStateValue('autoScroll') ? 'IconPlayerPause' : 'IconPlayerPlay'}"
              ></mov-icon>
              ${getLocaleString('SCROLL_START')} ${renderKeybind('SCROLL_START')}
            </mov-dropdown-item>
            <mov-dropdown-item
              id="bookmarks"
              class="tablets"
              @click=${buttonBookmarksOpen}
            >
              <mov-icon
                slot="icon"
                name="IconBookmarks"
              ></mov-icon>
              ${getLocaleString('BOOKMARKS')}
            </mov-dropdown-item>
            <mov-dropdown-item
              id="pageControls"
              class="tablets phones"
              @click="${buttonGlobalHideImageControls}"
              ?selected=${getSettingsValue('hidePageControls')}
            >
              <mov-icon
                slot="icon"
                name="IconListNumbers"
              ></mov-icon>
              ${getLocaleString('TOGGLE_CONTROLS')}
            </mov-dropdown-item>
          </mov-dropdown>

          <mov-dropdown
            id="ViewDropdown"
            checkable
          >
            <mov-button
              slot="trigger"
              title="${getLocaleString('VIEW_MENU')}"
            >
              <mov-icon
                label="View"
                name="IconBook"
              ></mov-icon>
            </mov-button>
            <mov-dropdown-item
              id="webComic"
              class="tablets"
              @click="${updateViewMode('WebComic')}"
              ?selected=${getSettingsValue('viewMode') === 'WebComic'}
            >
              <mov-icon
                slot="icon"
                name="IconSpacingVertical"
              ></mov-icon>
              ${getLocaleString('VIEW_MODE_WEBCOMIC')} ${renderKeybind('VIEW_MODE_WEBCOMIC')}
            </mov-dropdown-item>
            <mov-dropdown-item
              id="verticalMode"
              class="tablets"
              @click="${updateViewMode('Vertical')}"
              ?selected=${getSettingsValue('viewMode') === 'Vertical'}
            >
              <mov-icon
                slot="icon"
                name="IconArrowAutofitDown"
              ></mov-icon>
              ${getLocaleString('VIEW_MODE_VERTICAL')} ${renderKeybind('VIEW_MODE_VERTICAL')}
            </mov-dropdown-item>
            <mov-dropdown-item
              id="ltrMode"
              @click="${updateViewMode('FluidLTR')}"
              ?selected=${getSettingsValue('viewMode') === 'FluidLTR'}
            >
              <mov-icon
                slot="icon"
                name="IconArrowAutofitRight"
              ></mov-icon>
              ${getLocaleString('VIEW_MODE_LEFT')} ${renderKeybind('VIEW_MODE_LEFT')}
            </mov-dropdown-item>
            <mov-dropdown-item
              id="rtlMode"
              @click="${updateViewMode('FluidRTL')}"
              ?selected=${getSettingsValue('viewMode') === 'FluidRTL'}
            >
              <mov-icon
                slot="icon"
                name="IconArrowAutofitLeft"
              ></mov-icon>
              ${getLocaleString('VIEW_MODE_RIGHT')} ${renderKeybind('VIEW_MODE_RIGHT')}
            </mov-dropdown-item>
          </mov-dropdown>
          <mov-dropdown
            id="ZoomDropdown"
            checkable
          >
            <mov-button
              slot="trigger"
              title="${getLocaleString('ZOOM_MENU')}"
            >
              <mov-icon
                label="Zoom"
                name="IconZoom"
              ></mov-icon>
            </mov-button>
            <mov-dropdown-item
              id="enlarge"
              @click="${changeZoomByStep()}"
            >
              <mov-icon
                slot="icon"
                name="IconZoomInArea"
              ></mov-icon>
              ${getLocaleString('ENLARGE')} ${renderKeybind('ENLARGE')}
            </mov-dropdown-item>
            <mov-dropdown-item
              id="restore"
              @click="${changeGlobalZoom('percent', 100)}"
            >
              <mov-icon
                slot="icon"
                name="IconZoomPan"
              ></mov-icon>
              ${getLocaleString('RESTORE')} ${renderKeybind('RESTORE')}
            </mov-dropdown-item>
            <mov-dropdown-item
              id="reduce"
              @click="${changeZoomByStep(-1)}"
            >
              <mov-icon
                slot="icon"
                name="IconZoomOutArea"
              ></mov-icon>
              ${getLocaleString('REDUCE')} ${renderKeybind('REDUCE')}
            </mov-dropdown-item>
            <mov-dropdown-item
              id="fitWidth"
              @click="${changeGlobalZoom('width')}"
              ?selected=${getSettingsValue('zoomMode') === 'width'}
            >
              <mov-icon
                slot="icon"
                name="IconArrowAutofitWidth"
              ></mov-icon>
              ${getLocaleString('FIT_WIDTH')} ${renderKeybind('FIT_WIDTH')}
            </mov-dropdown-item>
            <mov-dropdown-item
              id="fitHeight"
              @click="${changeGlobalZoom('height')}"
              ?selected=${getSettingsValue('zoomMode') === 'height'}
            >
              <mov-icon
                slot="icon"
                name="IconArrowAutofitHeight"
              ></mov-icon>
              ${getLocaleString('FIT_HEIGHT')} ${renderKeybind('FIT_HEIGHT')}
            </mov-dropdown-item>
          </mov-dropdown>
        </div>
        <div id="ViewerTitle">
          <h1 id="MangaTitle">${this.manga.title}</h1>
        </div>
        <div id="ZoomControl">
          <input
            type="range"
            id="Zoom"
            .value="${getSettingsValue('zoomValue')}"
            min="${getSettingsValue('minZoom')}"
            max="200"
            @input=${changeZoom}
          />
          <span id="ZoomVal"
            >${
              getSettingsValue('zoomMode') === 'percent'
                ? `${getSettingsValue('zoomValue')}%`
                : getSettingsValue('zoomMode')
            }</span
          >
        </div>
        <div
          id="GlobalFunctions"
          class="button-group"
        >
          <mov-button
            id="series"
            href="${this.manga.series ?? nothing}"
            @click=${buttonRedirectURL}
            title="${getLocaleString('RETURN_CHAPTER_LIST')}"
            ?disabled=${!this.manga.series}
          >
            <mov-icon name="IconBookReturn"></mov-icon>
          </mov-button>
          <mov-button
            id="CommentsButton"
            title="${getLocaleString('DISPLAY_COMMENTS')}"
            @click=${buttonCommentsOpen}
            ?disabled=${!this.manga.comments}
          >
            <mov-icon name="IconMessage"></mov-icon>
          </mov-button>
          <mov-button
            id="download"
            title="${getLocaleString('DOWNLOAD_ZIP')}"
            @click=${buttonStartDownload}
            ?disabled=${getAppStateValue('download') !== 'available'}
            ?loading=${getAppStateValue('download') === 'working'}
          >
            <mov-icon
              name="${
                getAppStateValue('download') === 'working' ? 'IconLoader2' : 'IconFileDownload'
              }"
            ></mov-icon>
          </mov-button>
          <mov-button
            id="prev"
            href="${this.manga.prev ?? nothing}"
            title="${getLocaleString('PREVIOUS_CHAPTER')}"
            @click=${buttonRedirectURL}
            ?disabled=${!this.manga.prev}
          >
            <mov-icon name="IconArrowBigLeft"></mov-icon>
          </mov-button>
          <mov-button
            id="next"
            href="${this.manga.next ?? nothing}"
            title="${getLocaleString('NEXT_CHAPTER')}"
            @click=${buttonRedirectURL}
            ?disabled=${!this.manga.next}
          >
            <mov-icon name="IconArrowBigRight"></mov-icon>
          </mov-button>
        </div>
      </header>
    `;
  }
}
