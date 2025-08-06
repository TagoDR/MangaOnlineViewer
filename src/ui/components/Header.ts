import { html } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { getLocaleString, getSettingsValue } from '../../core/settings';
import type { IManga } from '../../types';
import sequence from '../../utils/sequence';
import { toggleAutoScroll } from '../events/autoscroll';
import { buttonBookmarksOpen } from '../events/bookmarks';
import {
  buttonCommentsOpen,
  buttonGlobalHideImageControls,
  buttonRedirectURL,
  buttonStartDownload,
} from '../events/globals';
import { selectGoToPage } from '../events/navigation';
import { buttonKeybindingsOpen, buttonSettingsOpen } from '../events/panels';
import { updateViewMode } from '../events/viewmode.ts';
import { changeGlobalZoom, changeZoom, changeZoomByStep } from '../events/zoom.ts';
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
  IconMessage,
  IconPlayerPause,
  IconPlayerPlay,
  IconSettings,
  IconSpacingVertical,
  IconZoomInArea,
  IconZoomOutArea,
  IconZoomPan,
} from '../icons';

const listOptions = (times: number, begin: number) =>
  sequence(times, begin).map(
    (index) => html`
    <option value="${index}">${index}</option>`,
  );
const Header = (manga: IManga) => html`
  <header
    id="Header"
    class="${getSettingsValue('header')} headroom-top"
  >
    <aside id="GlobalFunctions">
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
          @click="${changeGlobalZoom('percent')}"
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
        >
          ${IconArrowAutofitWidth}
        </button>
        <button
          id="fitHeight"
          title="${getLocaleString('FIT_HEIGHT')}"
          class="ControlButton"
          @click="${changeGlobalZoom('height')}"
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
          class="ControlButton phones"
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
        >
          ${IconArrowAutofitRight}
        </button>
        <button
          id="verticalMode"
          title="${getLocaleString('VIEW_MODE_VERTICAL')}"
          class="ControlButton tablets"
          @click="${updateViewMode('Vertical')}"
        >
          ${IconArrowAutofitDown}
        </button>
        <button
          id="webComic"
          title="${getLocaleString('VIEW_MODE_WEBCOMIC')}"
          class="ControlButton tablets"
          @click="${updateViewMode('WebComic')}"
        >
          ${IconSpacingVertical}
        </button>
        <button
          id="rtlMode"
          title="${getLocaleString('VIEW_MODE_RIGHT')}"
          class="ControlButton"
          @click="${updateViewMode('FluidRTL')}"
        >
          ${IconArrowAutofitLeft}
        </button>
        <button
          id="pageControls"
          title="${getLocaleString('TOGGLE_CONTROLS')}"
          class="ControlButton tablets"
          @click="${buttonGlobalHideImageControls}"
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
    </aside>
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
    <nav id="ChapterNavigation">
      <div
        id="Counters"
        class="ControlLabel"
      >
        ${getLocaleString('PAGES_LOADED')}:
        <i>0</i> /
        <b>${manga.begin && manga.begin > 1 ? manga.pages - (manga.begin - 1) : manga.pages}</b>
        <span class="ControlLabel"> ${getLocaleString('GO_TO_PAGE')}: </span>
        <select
          id="gotoPage"
          @change=${selectGoToPage}
        >
          <option selected>#</option>
          ${listOptions(manga.pages, manga.begin ?? 0).join('')}
        </select>
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
              disabled: !!manga.comments,
            })}"
            title="${getLocaleString('DISPLAY_COMMENTS')}"
            @click=${buttonCommentsOpen}
          >
            ${IconMessage} ${getLocaleString('DISPLAY_COMMENTS')}
          </button>
          <button
            id="download"
            class="NavigationControlButton ControlButton disabled"
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
    </nav>
  </header>
`;

export default Header;
