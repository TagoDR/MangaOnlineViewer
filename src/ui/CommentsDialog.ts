import { html } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { getAppStateValue, getLocaleString, getSettingsValue } from '../core/settings.ts';
import { changeCommentsColor } from './events/globals.ts';
import { buttonPanelsClose } from './events/panels.ts';
import { IconMoon, IconSun, IconX } from './icons';

/**
 * Renders the comments panel as a Lit template.
 * This panel displays the captured comments section from the original page (e.g., Disqus, Facebook).
 * It includes controls to close the panel and to toggle the color scheme of the comments iframe.
 * Its visibility is controlled by the `panel` property in the application state.
 *
 * @returns A Lit `TemplateResult` representing the comments panel.
 */
const commentsDialog = () => html`
  <div
    id="CommentsPanel"
    class="${classMap({
      panel: true,
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
export default commentsDialog;
