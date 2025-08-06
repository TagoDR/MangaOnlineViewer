import { html } from 'lit';
import { getLocaleString, getSettingsValue } from '../../core/settings';
import { buttonCommentsClose, changeCommentsColor } from '../events/globals';
import { IconMoon, IconSun, IconX } from '../icons';

const commentsPanel = () => html`
  <div
    id="CommentsPanel"
    class="panel"
  >
    <button
      id="CloseComments"
      class="closeButton"
      title="${getLocaleString('CLOSE')}"
      @click=${buttonCommentsClose}
    >
      ${IconX}
    </button>
    <h2>${getLocaleString('COMMENTS')}</h2>
    <div
      id="CommentsArea"
      class="${getSettingsValue('colorScheme')}"
    ></div>
    <button
      id="CommentsColorScheme"
      class="simpleButton ColorScheme"
      @click=${changeCommentsColor}
    >
      ${IconSun} ${IconMoon}
    </button>
  </div>
`;
export default commentsPanel;
