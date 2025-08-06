import { html } from 'lit';
import { getAppStateValue, getLocaleString, getSettingsValue } from '../../core/settings';
import { changeCommentsColor } from '../events/globals';
import { IconMoon, IconSun, IconX } from '../icons';
import { classMap } from 'lit/directives/class-map.js';
import { buttonPanelsClose } from '../events/panels.ts';

const commentsPanel = () => html`
  <div
    id="CommentsPanel"
    class="${classMap({
      panel:true,
      visible: getAppStateValue('panel') === 'comments',
    })}"
  >
    <button
      id="CloseComments"
      class="closeButton"
      title="${getLocaleString('CLOSE')}"
      @click=${buttonPanelsClose}
    >
      ${IconX}
    </button>
    <h2>${getLocaleString('COMMENTS')}</h2>
    <div
      id="CommentsArea"
      class="${getSettingsValue('colorScheme')}"
    >
      ${getAppStateValue('manga')?.comments}
    </div>
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
