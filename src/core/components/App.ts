import { IManga } from '../../types';
import { isBookmarked, useSettings } from '../settings';
import listPages from './MangaPages';
import SettingsPanel from './SettingsPanel';
import KeybindingsPanel from './KeybindingsPanel';
import ThumbnailsPanel from './ThumbnailsPanel';
import {
  IconArrowBigLeft,
  IconArrowBigRight,
  IconCategory,
  IconFileDownload,
  IconLoader2,
  IconMenu2,
  IconArrowAutofitDown,
  IconArrowAutofitHeight,
  IconArrowAutofitLeft,
  IconArrowAutofitRight,
  IconArrowAutofitWidth,
  IconBookmarks,
  IconKeyboard,
  IconListNumbers,
  IconSettings,
  IconZoomInArea,
  IconZoomOutArea,
  IconZoomPan,
  IconSpacingVertical,
} from './icons';
import BookmarksPanel from './BookmarksPanel';
import sequence from '../../utils/sequence';

const listOptions = (times: number, begin: number) =>
  sequence(times, begin).map((index) => `<option value='${index}'>${index}</option>`);

const app = (manga: IManga, begin = 1) => `
<div id='MangaOnlineViewer'
  class="${useSettings().colorScheme} 
    ${useSettings().hidePageControls ? 'hideControls' : ''}
    ${isBookmarked() ? 'bookmarked' : ''}"
  data-theme='${useSettings().theme}'>
  <header id="Header" class="${useSettings().mouseOverMenu ? 'mouseOverMenu' : ''}">
    <div id='menu'>
      ${IconMenu2}
    </div>
    <aside id='GlobalFunctions'>
      <span>
        <button id='enlarge' title='Enlarge' class='ControlButton'>${IconZoomInArea}</button>
        <button id='restore' title='Restore' class='ControlButton'>${IconZoomPan}</button>
        <button id='reduce' title='Reduce' class='ControlButton'>${IconZoomOutArea}</button>
        <button id='fitWidth' title='Fit Width' class='ControlButton'>${IconArrowAutofitWidth}</button>
        <button id='fitHeight' title='Fit Height' class='ControlButton'>${IconArrowAutofitHeight}</button>
        <button id='keybindings' title='Keybindings' class='ControlButton'>${IconKeyboard}</button>
      </span>
      <span>
        <button id='ltrMode' title='Left to Right Mode' class='ControlButton'>${IconArrowAutofitRight}</button>
        <button id='verticalMode' title='Vertical Mode' class='ControlButton'>${IconArrowAutofitDown}</button>
        <button id='webComic' title='Web Comic Mode' class='ControlButton'>${IconSpacingVertical}</button>
        <button id='rtlMode' title='Right to Left Mode' class='ControlButton'>${IconArrowAutofitLeft}</button>
        <button id='pageControls' title='Toggle Page Controls' class='ControlButton'>${IconListNumbers}</button>
        <button id='bookmarks' title='List Bookmarks' class='ControlButton'>${IconBookmarks}</button>
        <button id='settings' title='Settings' class='ControlButton'>${IconSettings}</button>
      </span>
    </aside>
    <div class='ViewerTitle'>
      <h1 id='MangaTitle'>${manga.title}</h1>
      <a id='series' href='${manga.series}'>(Return to Chapter List)</a>
    </div>
    <nav id='ChapterNavigation'>
      <div id='Counters' class='ControlLabel'>
        <i>0</i> of <b>${begin > 1 ? manga.pages - (begin - 1) : manga.pages}</b> Pages Loaded,
        <span class='ControlLabel'>Go to Page:</span>
        <select id='gotoPage'>
          <option selected>#</option>
          ${listOptions(manga.pages, begin).join('')}
        </select>
      </div>
      <div id='ChapterControl' class='ChapterControl'>
        <button class='download NavigationControlButton ControlButton' title='Donwload Images Zip' type='button'>
          ${IconFileDownload}
          ${IconLoader2}
          Download
        </button>
        <button id='prev' class='NavigationControlButton ControlButton' title='Previos Chapter' type='button' 
          value='${manga.prev || ''}'>
          ${IconArrowBigLeft}
          Previous
        </button>
        <button id='next' class='NavigationControlButton ControlButton' title='Next Chapter' type='button' 
          value='${manga.next || ''}'>
          Next
          ${IconArrowBigRight}
        </button>
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
      <i>0</i> of <b>${begin > 1 ? manga.pages - (begin - 1) : manga.pages}</b> Pages Loaded
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
