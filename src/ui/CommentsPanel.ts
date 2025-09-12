import { html } from 'lit';
import { getAppStateValue, getLocaleString, getSettingsValue } from '../core/settings.ts';
import { changeCommentsColor } from './events/globals.ts';
import { buttonPanelsClose } from './events/panels.ts';
import { IconMoon, IconSun } from './icons';

/**
 * Renders the comments panel as a Lit template.
 * This panel displays the captured comments section from the original page (e.g., Disqus, Facebook).
 * It includes controls to close the panel and to toggle the color scheme of the comments iframe.
 * Its visibility is controlled by the `panel` property in the application state.
 *
 * @returns A Lit `TemplateResult` representing the comments panel.
 */
const commentsPanel = () => html`
  <mov-panel
    id="CommentsPanel"
    ?open=${getAppStateValue('panel') === 'comments'}
    mode="dialog"
    position="fullscreen"
    @close=${buttonPanelsClose}
  >
    <h2 slot="header">${getLocaleString('COMMENTS')}</h2>
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
      slot="action"
    >
      ${IconSun} ${IconMoon}
    </button>
  </mov-panel>
`;
export default commentsPanel;
