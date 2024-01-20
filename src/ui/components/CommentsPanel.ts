import { html } from '../../utils/code-tag';
import { getLocaleString, getUserSettings } from '../../core/settings';
import { IconMoon, IconSun, IconX } from '../icons';

const commentsPanel = () => html`
  <div id="CommentsPanel" class="panel">
    <button id="CloseComments" class="closeButton" title="${getLocaleString('CLOSE')}">
      ${IconX}
    </button>
    <h2>${getLocaleString('COMMENTS')}</h2>
    <div id="CommentsArea" class="${getUserSettings().colorScheme}"></div>
    <button id="CommentsColorScheme" class="simpleButton ColorScheme">
      ${IconSun} ${IconMoon}
    </button>
  </div>
`;
export default commentsPanel;
