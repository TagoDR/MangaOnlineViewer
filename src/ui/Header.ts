import { html, LitElement, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { getAppStateValue, getLocaleString, getSettingsValue } from '../core/settings';
import type { IManga } from '../types';
import sequence from '../utils/sequence';
import { toggleAutoScroll } from './events/autoscroll';
import { buttonBookmarksOpen } from './events/bookmarks';
import {
  buttonCommentsOpen,
  buttonGlobalHideImageControls,
  buttonRedirectURL,
  buttonStartDownload,
} from './events/globals';
import { HeadroomController } from './events/headroom';
import { selectGoToPage } from './events/navigation';
import { buttonKeybindingsOpen, buttonSettingsOpen } from './events/panels';
import { updateViewMode } from './events/viewmode';
import { changeGlobalZoom, changeZoom, changeZoomByStep } from './events/zoom';
import {
  IconArrowAutofitDown,
  IconArrowAutofitHeight,
  IconArrowAutofitLeft,
  IconArrowAutofitRight,
  IconArrowAutofitWidth,
  IconArrowBigLeft,
  IconArrowBigRight,
  IconBookmarks,
  IconFileDownload,
  IconKeyboard,
  IconListNumbers,
  IconLoader2,
  IconMenu2,
  IconMessage,
  IconPlayerPause,
  IconPlayerPlay,
  IconSettings,
  IconSpacingVertical,
  IconZoomInArea,
  IconZoomOutArea,
  IconZoomPan,
} from './icons';
import styles from './styles/header.css?inline';

@customElement('mov-header')
export class MovHeader extends LitElement {
  static styles = [unsafeCSS(styles)];

  // protected createRenderRoot() {
  //   return this; // No shadow DOM
  // }

  private headroomController = new HeadroomController(this);

  @property({ type: Object })
  manga?: IManga;

  render() {
    if (!this.manga) return html``;
    const { headroom, headerVisible } = this.headroomController;
    return html`
      <div
        id="menu"
        class="${classMap({
          [getSettingsValue('header')]: true,
          hide: ['top', 'end'].includes(headroom),
        })}"
        @click=${this.headroomController.toggleHeaderVisibility}
      >
        ${IconMenu2}
      </div>
      <header
        id="Header"
        class="${classMap({
          [getSettingsValue('header')]: true,
          [`headroom-${headroom}`]: true,
          visible: headerVisible && ['hide', 'none'].includes(headroom),
        })}"
      >
        <div id="GlobalFunctions">
          <span>
            <button
              id="enlarge"
              title="${getLocaleString('ENLARGE')}"
              class="HeaderButton"
              @click="${changeZoomByStep()}"
            >
              ${IconZoomInArea}
            </button>
            <button
              id="restore"
              title="${getLocaleString('RESTORE')}"
              class="HeaderButton"
              @click="${changeGlobalZoom('percent', 100)}"
            >
              ${IconZoomPan}
            </button>
            <button
              id="reduce"
              title="${getLocaleString('REDUCE')}"
              class="HeaderButton"
              @click="${changeZoomByStep(-1)}"
            >
              ${IconZoomOutArea}
            </button>
            <button
              id="fitWidth"
              title="${getLocaleString('FIT_WIDTH')}"
              class="HeaderButton"
              @click="${changeGlobalZoom('width')}"
              ?selected=${getSettingsValue('zoomMode') === 'width'}
            >
              ${IconArrowAutofitWidth}
            </button>
            <button
              id="fitHeight"
              title="${getLocaleString('FIT_HEIGHT')}"
              class="HeaderButton"
              @click="${changeGlobalZoom('height')}"
              ?selected=${getSettingsValue('zoomMode') === 'height'}
            >
              ${IconArrowAutofitHeight}
            </button>
            <button
              id="keybindings"
              title="${getLocaleString('KEYBINDINGS')}"
              class="HeaderButton"
              @click=${buttonKeybindingsOpen}
            >
              ${IconKeyboard}
            </button>
            <button
              id="AutoScroll"
              title="${getLocaleString('SCROLL_START')}"
              class="${classMap({
                HeaderButton: true,
                running: getAppStateValue('autoScroll'),
              })}"
              @click=${toggleAutoScroll}
            >
              ${getAppStateValue('autoScroll') ? IconPlayerPause : IconPlayerPlay}
            </button>
          </span>
          <span>
            <button
              id="ltrMode"
              title="${getLocaleString('VIEW_MODE_LEFT')}"
              class="HeaderButton"
              @click="${updateViewMode('FluidLTR')}"
              ?selected=${getSettingsValue('viewMode') === 'FluidLTR'}
            >
              ${IconArrowAutofitRight}
            </button>
            <button
              id="verticalMode"
              title="${getLocaleString('VIEW_MODE_VERTICAL')}"
              class="HeaderButton tablets"
              @click="${updateViewMode('Vertical')}"
              ?selected=${getSettingsValue('viewMode') === 'Vertical'}
            >
              ${IconArrowAutofitDown}
            </button>
            <button
              id="webComic"
              title="${getLocaleString('VIEW_MODE_WEBCOMIC')}"
              class="HeaderButton tablets"
              @click="${updateViewMode('WebComic')}"
              ?selected=${getSettingsValue('viewMode') === 'WebComic'}
            >
              ${IconSpacingVertical}
            </button>
            <button
              id="rtlMode"
              title="${getLocaleString('VIEW_MODE_RIGHT')}"
              class="HeaderButton"
              @click="${updateViewMode('FluidRTL')}"
              ?selected=${getSettingsValue('viewMode') === 'FluidRTL'}
            >
              ${IconArrowAutofitLeft}
            </button>
            <button
              id="pageControls"
              title="${getLocaleString('TOGGLE_CONTROLS')}"
              class="HeaderButton tablets phones"
              @click="${buttonGlobalHideImageControls}"
              ?selected=${getSettingsValue('hidePageControls')}
            >
              ${IconListNumbers}
            </button>
            <button
              id="bookmarks"
              title="${getLocaleString('BOOKMARKS')}"
              class="HeaderButton tablets"
              @click=${buttonBookmarksOpen}
            >
              ${IconBookmarks}
            </button>
            <button
              id="settings"
              title="${getLocaleString('SETTINGS')}"
              class="HeaderButton tablets phones"
              @click=${buttonSettingsOpen}
            >
              ${IconSettings}
            </button>
          </span>
          <span id="ZoomSlider">
            <output
              id="ZoomVal"
              class="RangeValue"
              for="Zoom"
            >
              ${
                getSettingsValue('zoomMode') === 'percent'
                  ? `${getSettingsValue('zoomValue')}%`
                  : getSettingsValue('zoomMode')
              }
            </output>
            <input
              type="range"
              value="${getSettingsValue('zoomValue')}"
              name="Zoom"
              id="Zoom"
              min="1"
              max="200"
              @input="${changeZoom}"
            />
          </span>
        </div>
        <div class="ViewerTitle">
          <h1 id="MangaTitle">${this.manga.title}</h1>
          <a
            id="series"
            href="${this.manga.series ?? ''}"
            @click=${buttonRedirectURL}
          >
            (${getLocaleString('RETURN_CHAPTER_LIST')})
          </a>
        </div>
        <div id="ChapterNavigation">
          <div
            id="Counters"
            class="ControlLabel"
          >
            ${getLocaleString('PAGES_LOADED')}:
            <i>${getAppStateValue('loaded') ?? 0}</i> /
            <b>
              ${
                (getAppStateValue('manga')?.pages ?? 0) -
                ((getAppStateValue('manga')?.begin ?? 1) - 1)
              }
            </b>
            <span class="ControlLabel"> ${getLocaleString('GO_TO_PAGE')}: </span>
            <select
              id="gotoPage"
              @change=${selectGoToPage}
            >
              <option selected>#</option>
              ${sequence(this.manga.pages, this.manga.begin).map(
                index => html` <option value="${index}">${index}</option>`,
              )}
            </select>
            <span>: ${getAppStateValue('currentPage')}</span>
          </div>
          <div
            id="ChapterControl"
            class="ChapterControl"
          >
            <span>
              <button
                id="CommentsButton"
                class="${classMap({
                  NavigationButton: true,
                  HeaderButton: true,
                  disabled: !this.manga.comments,
                })}"
                title="${getLocaleString('DISPLAY_COMMENTS')}"
                @click=${buttonCommentsOpen}
              >
                ${IconMessage} ${getLocaleString('DISPLAY_COMMENTS')}
              </button>
              <button
                id="download"
                class="${classMap({
                  NavigationButton: true,
                  HeaderButton: true,
                  disabled: getAppStateValue('download') !== 'available',
                  loading: getAppStateValue('download') === 'working',
                })}"
                type="button"
                title="${getLocaleString('DOWNLOAD_ZIP')}"
                @click=${buttonStartDownload}
              >
                ${getAppStateValue('download') === 'working' ? IconLoader2 : IconFileDownload}
                ${getLocaleString('BUTTON_DOWNLOAD')}
              </button></span
            >
            <span>
              <a
                id="prev"
                class="NavigationButton HeaderButton"
                type="button"
                href="${this.manga.prev ?? ''}"
                title="${getLocaleString('PREVIOUS_CHAPTER')}"
                @click=${buttonRedirectURL}
              >
                ${IconArrowBigLeft} ${getLocaleString('BUTTON_PREVIOUS')}
              </a>
              <a
                id="next"
                class="NavigationButton HeaderButton"
                type="button"
                href="${this.manga.next ?? ''}"
                title="${getLocaleString('NEXT_CHAPTER')}"
                @click=${buttonRedirectURL}
              >
                ${getLocaleString('BUTTON_NEXT')} ${IconArrowBigRight}
              </a>
            </span>
          </div>
        </div>
      </header>
    `;
  }
}
