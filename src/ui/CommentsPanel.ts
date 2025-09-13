import { useStores } from '@nanostores/lit';
import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import {
  appState,
  getAppStateValue,
  getLocaleString,
  getSettingsValue,
  locale,
  settings,
} from '../core/settings.ts';
import { changeCommentsColor } from './events/globals.ts';
import { buttonPanelsClose } from './events/panels.ts';
import { IconMoon, IconSun } from './icons';
import './components/Panel.ts';

declare global {
  interface HTMLElementTagNameMap {
    'mov-comments-panel': CommentsPanel;
  }
}

/**
 * Renders the comments panel as a Lit component.
 * This panel displays the captured comments section from the original page (e.g., Disqus, Facebook).
 * It includes controls to close the panel and to toggle the color scheme of the comments iframe.
 * Its visibility is controlled by the `panel` property in the application state.
 */
@customElement('mov-comments-panel')
@useStores(settings, locale, appState)
export default class CommentsPanel extends LitElement {
  protected createRenderRoot() {
    return this; // No shadow DOM
  }

  render() {
    return html`
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
  }
}
