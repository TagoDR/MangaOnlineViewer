import { IManga } from '../../types';
import { icon, settings } from '../settings';
import { isMobile } from '../../utils/tampermonkey';
import { chapterControlBottom, chapterControlTop } from './ChapterControl';
import listPages from './MangaPages';
import imageOptions from './ImageOptions';
import controls from './ViewerControls';
import htmlKeybinds from '../keybinds';
import listThumbnails from './Thumbnails';

const title = (manga: IManga) =>
  `<div class='ViewerTitle'><a id='series' href='${manga.series}'><i>${manga.title}</i><br/>(Return to Chapter List)</a></div>`;
const listOptions = (times: number) =>
  Array(times)
    .fill(null)
    .map((_, index) => `<option value='${index + 1}'>${index + 1}</option>`);

const body = (manga: IManga, begin = 0) => `
<div id='MangaOnlineViewer'
  class='${settings.theme} ${isMobile ? 'mobile' : ''} ${
  settings.hidePageControls ? 'hideControls' : ''
}'>
  <header>
    ${title(manga)}
    <div id='Counters' class='controlLabel'>
      <i>0</i> of <b>${manga.pages}</b> Pages Loaded
      <span class='controlLabel'>Go to Page:</span>
      <select id='gotoPage'>
        <option selected>#</option>
        ${listOptions(manga.pages).slice(begin).join('')}
      </select>
    </div>
    ${chapterControlTop(manga)}
  </header>  
  <main id='Chapter' class='${settings.fitWidthIfOversize === true ? 'fitWidthIfOversize' : ''} ${
  settings.viewMode
}'>
    ${listPages(manga.pages).slice(begin).join('')}
  </main>
  <footer>
    ${title(manga)}
    ${chapterControlBottom(manga)}
  </footer>
  <aside>
    ${imageOptions}
    ${controls}
    ${htmlKeybinds}
  </aside>
  <nav id='Navigation' class='panel ${settings.showThumbnails ? '' : 'disabled'}'>
    <div id='NavigationCounters' class='controlLabel'>
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
