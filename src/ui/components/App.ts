import type { IManga } from '../../types';
import {
  getAllLocaleStrings,
  getLocaleString,
  getUserSettings,
  isBookmarked,
} from '../../core/settings';
import listPages from './MangaPages';
import SettingsPanel from './SettingsPanel';
import KeybindingsPanel from './KeybindingsPanel';
import ThumbnailsPanel from './ThumbnailsPanel';
import { IconCategory, IconMessage } from './icons';
import BookmarksPanel from './BookmarksPanel';
import { isBackgroundColorDark } from '../../utils/colors';
import Header from './Header';

const app = (manga: IManga) => `
  <div id='MangaOnlineViewer' 
      class='${getUserSettings().colorScheme} 
        ${getUserSettings().hidePageControls ? 'hideControls' : ''}
        ${isBookmarked() ? 'bookmarked' : ''}'
      data-theme='${getUserSettings().theme}'>
    ${Header(manga)}
    <main id='Chapter' class='${getUserSettings().fitWidthIfOversize ? 'fitWidthIfOversize' : ''}
      ${getUserSettings().viewMode}'>
      ${listPages(manga.pages, manga.begin).join('')}
    </main>
    <section id='CommentsPainel' class='${manga.comments ? '' : 'hide'}'>
      <div id='CommentsButton' class='ControlButton'
        title='${getLocaleString('DISPLAY_COMMENTS')}'>
        ${IconMessage}
        ${getAllLocaleStrings('DISPLAY_COMMENTS')}
      </div>
      <div id='CommentsArea' class='hide 
          ${isBackgroundColorDark(manga.comments ?? document.body) ? 'dark' : 'light'}'>
          ${manga.comments?.outerHTML}
      </div>
    </section>
    <nav id='Navigation' class='panel ${getUserSettings().showThumbnails ? '' : 'disabled'}'>
      <div id='NavigationCounters' class='ControlLabel'>
        ${IconCategory}
        <i>0</i> / <b>${manga.begin > 1 ? manga.pages - (manga.begin - 1) : manga.pages}</b>
        ${getAllLocaleStrings('PAGES_LOADED')}
      </div>
      <div id='Thumbnails'>
        ${ThumbnailsPanel(manga.pages, manga.begin).join('')}
      </div>
    </nav>
    ${SettingsPanel}
    ${KeybindingsPanel}
    ${BookmarksPanel}
  </div>`;
export default app;
