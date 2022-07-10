import { IManga } from '../../types';
import settings from '../settings';
import listPages from './MangaPages';
import imageOptions from './ImageOptions';
import settingsPanel from './ViewerControls';
import Keybindings from './Keybindings';
import listThumbnails from './Thumbnails';
import {
  IconArrowBigLeft,
  IconArrowBigRight,
  IconCategory,
  IconFileDownload,
  IconLoader2,
} from './icons';
import Bookmarks from './Bookmarks.js';

const listOptions = (times: number) =>
  Array(times)
    .fill(null)
    .map((_, index) => `<option value='${index + 1}'>${index + 1}</option>`);

const body = (manga: IManga, begin = 0) => `
<div id='MangaOnlineViewer'
  class="${settings.theme} ${settings.hidePageControls ? 'hideControls' : ''}">
  <header id="Header" class="${settings.mouseOverMenu ? 'mouseOverMenu' : ''}">
    <aside id='GlobalControls'>
      ${imageOptions}
    </aside>
    <div class='ViewerTitle'>
      <h1 id='MangaTitle'>${manga.title}</h1>
      <a id='series' href='${manga.series}'>(Return to Chapter List)</a>
    </div>
    <nav id='ChapterNavigation'>
      <div id='Counters' class='ControlLabel'>
        <i>0</i> of <b>${manga.pages}</b> Pages Loaded
        <span class='ControlLabel'>Go to Page:</span>
        <select id='gotoPage'>
          <option selected>#</option>
          ${listOptions(manga.pages).slice(begin).join('')}
        </select>
      </div>
      <div id='ChapterControl' class='ChapterControl'>
        <button class='download NavigationControlButton ControlButton' title='Donwload Images Zip' type='button'>
          ${IconFileDownload}
          ${IconLoader2}
          Download
        </button>
        <button id='prev' class='prev NavigationControlButton ControlButton' title='Previos Chapter' type='button'
        onclick="window.location.href='${manga.prev || ''}';">
          ${IconArrowBigLeft}
          Previous
        </button>
        <button id='next' class='next NavigationControlButton ControlButton' title='Next Chapter' type='button'
        onclick="window.location.href='${manga.next || ''}';">
          Next
          ${IconArrowBigRight}
        </button>
      </div>
    </nav>
  </header>  
  <main id='Chapter' class='${settings.fitWidthIfOversize === true ? 'fitWidthIfOversize' : ''} ${
  settings.viewMode
}'>
    ${listPages(manga.pages).slice(begin).join('')}
  </main>
  <nav id='Navigation' class='panel ${settings.showThumbnails ? '' : 'disabled'}'>
    <div id='NavigationCounters' class='ControlLabel'>
      ${IconCategory}
      <i>0</i> of <b>${manga.pages}</b> Pages Loaded
    </div>
    <div id='Thumbnails'>
      ${listThumbnails(manga.pages).slice(begin).join('')}
    </div>
  </nav>
  ${settingsPanel}
  ${Keybindings}
  ${Bookmarks}
</div>`;
export default body;
