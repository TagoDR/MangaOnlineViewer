import { useStores } from '@nanostores/lit';
import { html, LitElement, unsafeCSS } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import {
  appState,
  getAppStateValue,
  getLocaleString,
  getSettingsValue,
  locale,
  settings,
} from '../core/settings.ts';
import { buttonPanelsClose } from './events/panels.ts';
import './components/Dialog.ts';
import styles from './styles/comments.css?inline';
import { themesCSS } from './themes.ts';

declare global {
  interface HTMLElementTagNameMap {
    'comments-panel': CommentsPanel;
  }
}

/**
 * Renders the comments panel as a Lit component.
 * This panel displays the captured comments section from the original page (e.g., Disqus, Facebook).
 * It includes controls to close the panel and to toggle the color scheme of the comments iframe.
 * Its visibility is controlled by the `panel` property in the application state.
 */
@customElement('comments-panel')
@useStores(settings, locale, appState)
export default class CommentsPanel extends LitElement {
  static readonly styles = [unsafeCSS(styles), unsafeCSS(themesCSS(':host'))];

  @state()
  private colorScheme: 'dark' | 'light' = getSettingsValue('colorScheme');

  render() {
    return html`
      <mov-dialog
        id="CommentsPanel"
        ?open=${getAppStateValue('panel') === 'comments'}
        fullscreen
        @close=${buttonPanelsClose}
      >
        <h2 slot="label">${getLocaleString('COMMENTS')}</h2>
        <div
          id="CommentsArea"
          class="${this.colorScheme}"
        >
          ${getAppStateValue('manga')?.comments}
        </div>
        <toggle-button
          id="CommentsColorScheme"
          mode="theme"
          @click=${this.changeCommentsColor}
          slot="header-actions"
          ?active=${this.colorScheme === 'dark'}
        >
        </toggle-button>
      </mov-dialog>
    `;
  }

  /**
   * Event handler to toggle the color scheme of the comments panel.
   * It toggles 'light' and 'dark' classes on the parent element of the button.
   */
  changeCommentsColor() {
    this.colorScheme = this.colorScheme === 'dark' ? 'light' : 'dark';
  }
}
