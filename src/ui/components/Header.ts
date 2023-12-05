import { html } from '../../utils/code-tag';
import { getLocaleString, getUserSettings } from '../../core/settings';
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
import sequence from '../../utils/sequence';
import type { IManga } from '../../types';

const listOptions = (times: number, begin: number) =>
  sequence(times, begin).map((index) => html` <option value="${index}">${index}</option>`);
const Header = (manga: IManga) => html`
  <header id="Header" class="${getUserSettings().header}">
    <aside id="GlobalFunctions">
      <span>
        <button id="enlarge" title="${getLocaleString('ENLARGE')}" class="ControlButton">
          ${IconZoomInArea}
        </button>
        <button id="restore" title="${getLocaleString('RESTORE')}" class="ControlButton">
          ${IconZoomPan}
        </button>
        <button id="reduce" title="${getLocaleString('REDUCE')}" class="ControlButton">
          ${IconZoomOutArea}
        </button>
        <button id="fitWidth" title="${getLocaleString('FIT_WIDTH')}" class="ControlButton">
          ${IconArrowAutofitWidth}
        </button>
        <button id="fitHeight" title="${getLocaleString('FIT_HEIGHT')}" class="ControlButton">
          ${IconArrowAutofitHeight}
        </button>
        <button id="keybindings" title="${getLocaleString('KEYBINDINGS')}" class="ControlButton">
          ${IconKeyboard}
        </button>
        <button
          id="AutoScroll"
          title="${getLocaleString('SCROLL_START')}"
          class="ControlButton phones"
        >
          ${IconPlayerPlay} ${IconPlayerPause}
        </button>
      </span>
      <span>
        <button id="ltrMode" title="${getLocaleString('VIEW_MODE_LEFT')}" class="ControlButton">
          ${IconArrowAutofitRight}
        </button>
        <button
          id="verticalMode"
          title="${getLocaleString('VIEW_MODE_VERTICAL')}"
          class="ControlButton tablets"
        >
          ${IconArrowAutofitDown}
        </button>
        <button
          id="webComic"
          title="${getLocaleString('VIEW_MODE_WEBCOMIC')}"
          class="ControlButton tablets"
        >
          ${IconSpacingVertical}
        </button>
        <button id="rtlMode" title="${getLocaleString('VIEW_MODE_RIGHT')}" class="ControlButton">
          ${IconArrowAutofitLeft}
        </button>
        <button
          id="pageControls"
          title="${getLocaleString('TOGGLE_CONTROLS')}"
          class="ControlButton tablets"
        >
          ${IconListNumbers}
        </button>
        <button
          id="bookmarks"
          title="${getLocaleString('BOOKMARKS')}"
          class="ControlButton tablets"
        >
          ${IconBookmarks}
        </button>
        <button
          id="settings"
          title="${getLocaleString('SETTINGS')}"
          class="ControlButton tablets phones"
        >
          ${IconSettings}
        </button>
      </span>
      <span id="ZoomSlider">
        <output id="ZoomVal" class="RangeValue" for="Zoom">
          ${getUserSettings().defaultZoom}%
        </output>
        <input
          type="range"
          value="${getUserSettings().defaultZoom}"
          name="Zoom"
          id="Zoom"
          min="1"
          max="200"
        />
      </span>
    </aside>
    <div class="ViewerTitle">
      <h1 id="MangaTitle">${manga.title}</h1>
      <a id="series" href="${manga.series ?? ''}"> (${getLocaleString('RETURN_CHAPTER_LIST')}) </a>
    </div>
    <nav id="ChapterNavigation">
      <div id="Counters" class="ControlLabel">
        ${getLocaleString('PAGES_LOADED')}:
        <i>0</i> / <b>${manga.begin > 1 ? manga.pages - (manga.begin - 1) : manga.pages}</b>
        <span class="ControlLabel"> ${getLocaleString('GO_TO_PAGE')}: </span>
        <select id="gotoPage">
          <option selected>#</option>
          ${listOptions(manga.pages, manga.begin).join('')}
        </select>
      </div>
      <div id="ChapterControl" class="ChapterControl">
        <span>
          <button
            id="CommentsButton"
            class="NavigationControlButton ControlButton ${manga.comments ? '' : 'disabled'}"
            title="${getLocaleString('DISPLAY_COMMENTS')}"
          >
            ${IconMessage} ${getLocaleString('DISPLAY_COMMENTS')}
          </button>
          <button
            id="download"
            class="NavigationControlButton ControlButton disabled"
            type="button"
            title="${getLocaleString('DOWNLOAD_ZIP')}"
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
          >
            ${IconArrowBigLeft} ${getLocaleString('BUTTON_PREVIOUS')}
          </a>
          <a
            id="next"
            class="NavigationControlButton ControlButton"
            type="button"
            href="${manga.next ?? ''}"
            title="${getLocaleString('NEXT_CHAPTER')}"
          >
            ${getLocaleString('BUTTON_NEXT')} ${IconArrowBigRight}
          </a>
        </span>
      </div>
    </nav>
  </header>
`;

export default Header;
