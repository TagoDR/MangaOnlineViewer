import { html } from '../../utils/code-tag';
import type { IManga } from '../../types';
import { isBackgroundColorDark } from '../../utils/colors';
import { getLocaleString } from '../../core/settings';
import { IconX } from '../icons';

const commentsPanel = (manga: IManga) => html`
  <div id="CommentsPanel" class="panel">
    <button id="CloseComments" class="closeButton" title="${getLocaleString('CLOSE')}">
      ${IconX}
    </button>
    <h2>${getLocaleString('COMMENTS')}</h2>
    <div
      id="CommentsArea"
      class="${isBackgroundColorDark(manga.comments ?? document.body) ? 'dark' : 'light'}"
    >
      ${manga.comments?.outerHTML}
    </div>
  </div>
`;
export default commentsPanel;
