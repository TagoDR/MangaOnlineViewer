import { IManga } from '../../types';
import { icon, settings } from '../settings';
import { isMobile } from '../../utils/tampermonkey';
import listPages from './MangaPages';
import imageOptions from './ImageOptions';
import controls from './ViewerControls';
import Keybindings from './Keybindings.js';
import listThumbnails from './Thumbnails';

const listOptions = (times: number) =>
  Array(times)
    .fill(null)
    .map((_, index) => `<option value='${index + 1}'>${index + 1}</option>`);

const body = (manga: IManga, begin = 0) => `
<div id='MangaOnlineViewer'
  class='${settings.theme} ${isMobile ? 'mobile' : ''} ${
  settings.hidePageControls ? 'hideControls' : ''
}'>
  <header id="Header">
    <aside id='GlobalControls'>
      ${imageOptions}
      ${controls}
      ${Keybindings}
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
        <a href='#' class='download NavigationControlButton ControlButton'>
          Download
        </a>
        <a class='prev NavigationControlButton ControlButton' id='prev' href='${manga.prev || ''}'>
          Previous
        </a>
        <a class='next NavigationControlButton ControlButton' id='next' href='${manga.next || ''}'>
          Next
        </a>
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
      <img alt='Thumbnails' title='Thumbnails' src='${icon.menu}' class='nav' />
      <i>0</i> of <b>${manga.pages}</b> Pages Loaded
    </div>
    <div id='Thumbnails'>
      ${listThumbnails(manga.pages).slice(begin).join('')}
    </div>
  </nav>
  <a href='#' id='blob' style='display: none;'>Download</a>
</div>`;
export default body;
