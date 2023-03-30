import { IManga } from '../../types';
import { getLocaleString, isBookmarked, useSettings } from '../settings';
import listPages from './MangaPages';
import SettingsPanel from './SettingsPanel';
import KeybindingsPanel from './KeybindingsPanel';
import ThumbnailsPanel from './ThumbnailsPanel';
import {
  IconArrowAutofitDown,
  IconArrowAutofitHeight,
  IconArrowAutofitLeft,
  IconArrowAutofitRight,
  IconArrowAutofitWidth,
  IconArrowBigLeft,
  IconArrowBigRight,
  IconBookmarks,
  IconCategory,
  IconFileDownload,
  IconKeyboard,
  IconListNumbers,
  IconLoader2,
  IconMenu2,
  IconSettings,
  IconSpacingVertical,
  IconZoomInArea,
  IconZoomOutArea,
  IconZoomPan,
} from './icons';
import BookmarksPanel from './BookmarksPanel';
import sequence from '../../utils/sequence';

const listOptions = (times: number, begin: number) =>
  sequence(times, begin).map((index) => `<option value='${index}'>${index}</option>`);

const app = (manga: IManga, begin = 1) => `
  <div id='MangaOnlineViewer'
       class='${useSettings().colorScheme} 
    ${useSettings().hidePageControls ? 'hideControls' : ''}
    ${isBookmarked() ? 'bookmarked' : ''}'
       data-theme='${useSettings().theme}'>
    <header id='Header' class='${useSettings().header}'>
      <div id='menu'>
        ${IconMenu2}
      </div>
      <aside id='GlobalFunctions'>    
      <span>
        <button id='enlarge' title='${getLocaleString('ENLARGE')}' class='ControlButton'>
          ${IconZoomInArea}
        </button>
        <button id='restore' title='${getLocaleString('RESTORE')}' class='ControlButton'>
          ${IconZoomPan}
        </button>
        <button id='reduce' title='${getLocaleString('REDUCE')}' class='ControlButton'>
          ${IconZoomOutArea}
        </button>
        <button id='fitWidth' title='${getLocaleString('FIT_WIDTH')}' class='ControlButton'>
          ${IconArrowAutofitWidth}
        </button>
        <button id='fitHeight' title='${getLocaleString('FIT_HEIGHT')}' class='ControlButton'>
          ${IconArrowAutofitHeight}
        </button>
        <button id='keybindings' title='${getLocaleString('KEYBINDINGS')}' class='ControlButton'>
          ${IconKeyboard}
        </button>
      </span>
        <span>
        <button id='ltrMode' title='${getLocaleString('VIEW_MODE_LEFT')}' class='ControlButton'>
          ${IconArrowAutofitRight}
        </button>
        <button id='verticalMode'
                title='${getLocaleString('VIEW_MODE_VERTICAL')}' class='ControlButton tablets'>
          ${IconArrowAutofitDown}
        </button>
        <button id='webComic'
                title='${getLocaleString('VIEW_MODE_WEBCOMIC')}' class='ControlButton tablets'>
          ${IconSpacingVertical}
        </button>
        <button id='rtlMode' title='${getLocaleString('VIEW_MODE_RIGHT')}' class='ControlButton'>
          ${IconArrowAutofitLeft}
        </button>
        <button id='pageControls'
                title='${getLocaleString('TOGGLE_CONTROLS')}' class='ControlButton tablets'>
          ${IconListNumbers}
        </button>
        <button id='bookmarks' title='${getLocaleString(
          'BOOKMARKS',
        )}' class='ControlButton tablets'>
          ${IconBookmarks}
        </button>
        <button id='settings' title='${getLocaleString(
          'SETTINGS',
        )}' class='ControlButton tablets phones'>
          ${IconSettings}
        </button>
      </span>
        <span id='ZoomSlider'>
        <output id='ZoomVal'
                class='RangeValue'
                for='Zoom'>
            ${useSettings().defaultZoom}%
        </output>
        <input type='range'
               value='${useSettings().defaultZoom}'
               name='Zoom'
               id='Zoom'
               min='1'
               max='200'
        />
      </span>
      </aside>
      <div class='ViewerTitle'>
        <h1 id='MangaTitle'>${manga.title}</h1>
        <a id='series' href='${manga.series}'>
            (${getLocaleString('RETURN_CHAPTER_LIST')})
        </a>
      </div>
      <nav id='ChapterNavigation'>
        <div id='Counters' class='ControlLabel'>
          ${getLocaleString('PAGES_LOADED')}:
          <i>0</i> / <b>${begin > 1 ? manga.pages - (begin - 1) : manga.pages}</b>
          <span class='ControlLabel'>
          ${getLocaleString('GO_TO_PAGE')}:
        </span>
          <select id='gotoPage'>
            <option selected>#</option>
            ${listOptions(manga.pages, begin).join('')}
          </select>
        </div>
        <div id='ChapterControl' class='ChapterControl'>
          <button id='download' class='NavigationControlButton ControlButton disabled' type='button'
                  title='${getLocaleString('DOWNLOAD_ZIP')}'>
            ${IconFileDownload}
            ${IconLoader2}
            ${getLocaleString('BUTTON_DOWNLOAD')}
          </button>
          <a id='prev' class='NavigationControlButton ControlButton' type='button'
             href='${manga.prev || ''}' title='${getLocaleString('PREVIOUS_CHAPTER')}'>
            ${IconArrowBigLeft}
            ${getLocaleString('BUTTON_PREVIOUS')}
          </a>
          <a id='next' class='NavigationControlButton ControlButton' type='button'
             href='${manga.next || ''}' title='${getLocaleString('NEXT_CHAPTER')}'>
            ${getLocaleString('BUTTON_NEXT')}
            ${IconArrowBigRight}
          </a>
        </div>
      </nav>
    </header>
    <main id='Chapter' class='${useSettings().fitWidthIfOversize ? 'fitWidthIfOversize' : ''}
      ${useSettings().viewMode}'>
      ${listPages(manga.pages, begin).join('')}
    </main>
    <nav id='Navigation' class='panel ${useSettings().showThumbnails ? '' : 'disabled'}'>
      <div id='NavigationCounters' class='ControlLabel'>
        ${IconCategory}
        <i>0</i> / <b>${begin > 1 ? manga.pages - (begin - 1) : manga.pages}</b>
        ${getLocaleString('PAGES_LOADED')}
      </div>
      <div id='Thumbnails'>
        ${ThumbnailsPanel(manga.pages, begin).join('')}
      </div>
    </nav>
    ${SettingsPanel}
    ${KeybindingsPanel}
    ${BookmarksPanel}
  </div>`;
export default app;
