import { html } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { getAppStateValue, getLocaleString, getSettingsValue } from '../core/settings.ts';
import { changeCommentsColor } from './events/globals.ts';
import { buttonPanelsClose } from './events/panels.ts';
import { IconMoon, IconSun, IconX } from './icons';

const commentsDialog = () => html`
  <div
    id="CommentsPanel"
    class="${classMap({
      panel: true,
      visible: getAppStateValue('panel') === 'comments',
      [getSettingsValue('colorScheme')]: true,
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
export default commentsDialog;
