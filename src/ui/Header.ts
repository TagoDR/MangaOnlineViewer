import { html } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { getAppStateValue, getLocaleString, getSettingsValue } from '../core/settings.ts';
import type { IManga } from '../types';
import sequence from '../utils/sequence.ts';
import { toggleAutoScroll } from './events/autoscroll.ts';
import { buttonBookmarksOpen } from './events/bookmarks.ts';
import {
  buttonCommentsOpen,
  buttonGlobalHideImageControls,
  buttonRedirectURL,
  buttonStartDownload,
} from './events/globals.ts';
import { buttonHeaderClick } from './events/headroom.ts';
import { selectGoToPage } from './events/navigation.ts';
import { buttonKeybindingsOpen, buttonSettingsOpen } from './events/panels.ts';
import { updateViewMode } from './events/viewmode.ts';
import { changeGlobalZoom, changeZoom, changeZoomByStep } from './events/zoom.ts';
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

/**
 * Renders a sequence of `<option>` elements for a `<select>` dropdown.
 * This is a helper function to populate page jump selectors.
 *
 * @param {number} times - The total number of options to generate.
 * @param {number} [begin=1] - The starting value for the sequence.
 * @returns An array of Lit `TemplateResult` objects, each representing an `<option>` element.
 */
const listOptions = (times: number, begin: number = 1) =>
  sequence(times, begin).map(index => html` <option value="${index}">${index}</option>`);

/**
 * Renders the main application header as a Lit template.
 * The header includes global controls for navigation, view modes, zoom, and other actions
 * like downloading, accessing comments, bookmarks, and settings.
 *
 * @param {IManga} manga - The current manga's metadata, used to display titles, chapter navigation, and progress.
 * @returns A Lit `TemplateResult` representing the header component.
 */
const Header = (manga: IManga) => html`
  <div
    id="menu"
    class="${classMap({
      [getSettingsValue('header')]: true,
      hide: ['top', 'end'].includes(getAppStateValue('headroom')),
    })}"
    @click=${buttonHeaderClick}
  >
    ${IconMenu2}
  </div>
  <header
    id="Header"
    class="${classMap({
      [getSettingsValue('header')]: true,
      [`headroom-${getAppStateValue('headroom')}`]: true,
      visible:
        getAppStateValue('headerVisible') &&
        ['hide', 'none'].includes(getAppStateValue('headroom')),
    })}"
  >
    <div id="GlobalFunctions">
      <span>
        <button
          id="enlarge"
          title="${getLocaleString('ENLARGE')}"
          class="ControlButton"
          @click="${changeZoomByStep()}"
        >
          ${IconZoomInArea}
        </button>
        <button
          id="restore"
          title="${getLocaleString('RESTORE')}"
          class="ControlButton"
          @click="${changeGlobalZoom('percent', 100)}"
        >
          ${IconZoomPan}
        </button>
        <button
          id="reduce"
          title="${getLocaleString('REDUCE')}"
          class="ControlButton"
          @click="${changeZoomByStep(-1)}"
        >
          ${IconZoomOutArea}
        </button>
        <button
          id="fitWidth"
          title="${getLocaleString('FIT_WIDTH')}"
          class="ControlButton"
          @click="${changeGlobalZoom('width')}"
          ?selected=${getSettingsValue('zoomMode') === 'width'}
        >
          ${IconArrowAutofitWidth}
        </button>
        <button
          id="fitHeight"
          title="${getLocaleString('FIT_HEIGHT')}"
          class="ControlButton"
          @click="${changeGlobalZoom('height')}"
          ?selected=${getSettingsValue('zoomMode') === 'height'}
        >
          ${IconArrowAutofitHeight}
        </button>
        <button
          id="keybindings"
          title="${getLocaleString('KEYBINDINGS')}"
          class="ControlButton"
          @click=${buttonKeybindingsOpen}
        >
          ${IconKeyboard}
        </button>
        <button
          id="AutoScroll"
          title="${getLocaleString('SCROLL_START')}"
          class="ControlButton"
          @click=${toggleAutoScroll}
        >
          ${IconPlayerPlay} ${IconPlayerPause}
        </button>
      </span>
      <span>
        <button
          id="ltrMode"
          title="${getLocaleString('VIEW_MODE_LEFT')}"
          class="ControlButton"
          @click="${updateViewMode('FluidLTR')}"
          ?selected=${getSettingsValue('viewMode') === 'FluidLTR'}
        >
          ${IconArrowAutofitRight}
        </button>
        <button
          id="verticalMode"
          title="${getLocaleString('VIEW_MODE_VERTICAL')}"
          class="ControlButton tablets"
          @click="${updateViewMode('Vertical')}"
          ?selected=${getSettingsValue('viewMode') === 'Vertical'}
        >
          ${IconArrowAutofitDown}
        </button>
        <button
          id="webComic"
          title="${getLocaleString('VIEW_MODE_WEBCOMIC')}"
          class="ControlButton tablets"
          @click="${updateViewMode('WebComic')}"
          ?selected=${getSettingsValue('viewMode') === 'WebComic'}
        >
          ${IconSpacingVertical}
        </button>
        <button
          id="rtlMode"
          title="${getLocaleString('VIEW_MODE_RIGHT')}"
          class="ControlButton"
          @click="${updateViewMode('FluidRTL')}"
          ?selected=${getSettingsValue('viewMode') === 'FluidRTL'}
        >
          ${IconArrowAutofitLeft}
        </button>
        <button
          id="pageControls"
          title="${getLocaleString('TOGGLE_CONTROLS')}"
          class="ControlButton tablets phones"
          @click="${buttonGlobalHideImageControls}"
          ?selected=${getSettingsValue('hidePageControls')}
        >
          ${IconListNumbers}
        </button>
        <button
          id="bookmarks"
          title="${getLocaleString('BOOKMARKS')}"
          class="ControlButton tablets"
          @click=${buttonBookmarksOpen}
        >
          ${IconBookmarks}
        </button>
        <button
          id="settings"
          title="${getLocaleString('SETTINGS')}"
          class="ControlButton tablets phones"
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
      <h1 id="MangaTitle">${manga.title}</h1>
      <a
        id="series"
        href="${manga.series ?? ''}"
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
          ${(getAppStateValue('manga')?.pages ?? 0) - ((getAppStateValue('manga')?.begin ?? 1) - 1)}
        </b>
        <span class="ControlLabel"> ${getLocaleString('GO_TO_PAGE')}: </span>
        <select
          id="gotoPage"
          @change=${selectGoToPage}
        >
          <option selected>#</option>
          ${listOptions(manga.pages, manga.begin)}
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
              NavigationControlButton: true,
              ControlButton: true,
              disabled: !manga.comments,
            })}"
            title="${getLocaleString('DISPLAY_COMMENTS')}"
            @click=${buttonCommentsOpen}
          >
            ${IconMessage} ${getLocaleString('DISPLAY_COMMENTS')}
          </button>
          <button
            id="download"
            class="${classMap({
              NavigationControlButton: true,
              ControlButton: true,
              disabled: getAppStateValue('download') !== 'available',
              loading: getAppStateValue('download') === 'working',
            })}"
            type="button"
            title="${getLocaleString('DOWNLOAD_ZIP')}"
            @click=${buttonStartDownload}
          >
            ${IconFileDownload} ${IconLoader2} ${getLocaleString('BUTTON_DOWNLOAD')}
          </button></span
        >
        <span>
          <a
            id="prev"
            class="NavigationControlButton ControlButton"
            type="button"
            href="${manga.prev ?? ''}"
            title="${getLocaleString('PREVIOUS_CHAPTER')}"
            @click=${buttonRedirectURL}
          >
            ${IconArrowBigLeft} ${getLocaleString('BUTTON_PREVIOUS')}
          </a>
          <a
            id="next"
            class="NavigationControlButton ControlButton"
            type="button"
            href="${manga.next ?? ''}"
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

export default Header;
