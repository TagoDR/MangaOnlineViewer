import type { IManga } from '../../types';
import { getUserSettings, isBookmarked } from '../../core/settings';
import SettingsPanel from './SettingsPanel';
import KeybindingsPanel from './KeybindingsPanel';
import ThumbnailsPanel from './ThumbnailsPanel';
import BookmarksPanel from './BookmarksPanel';
import Header from './Header';
import Reader from './Reader';
import CommentsPanel from './CommentsPanel';

const app = (manga: IManga) => `
<div id='MangaOnlineViewer' 
    class='${getUserSettings().colorScheme} 
      ${getUserSettings().hidePageControls ? 'hideControls' : ''}
      ${isBookmarked() ? 'bookmarked' : ''}'
    locale='${getUserSettings().locale}'  
    data-theme='${getUserSettings().theme}'>
  ${Header(manga)}
  ${Reader(manga)}
  ${CommentsPanel(manga)}  
  ${ThumbnailsPanel(manga)}
  ${SettingsPanel}
  ${KeybindingsPanel}
  ${BookmarksPanel}
</div>`;
export default app;
