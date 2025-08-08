import { useStores } from '@nanostores/lit';
import { html, LitElement, unsafeCSS } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import {
  appState,
  getAppStateValue,
  getLocaleString,
  getSettingsValue,
  locale,
  setAppStateValue,
  settings,
} from '../core/settings';
import styles from './styles/CommentsDialog.css?inline';

@customElement('mov-comments-dialog')
@useStores(settings, locale, appState)
export default class CommentsDialog extends LitElement {
  static styles = [unsafeCSS(styles)];

  @state()
  colorScheme = getSettingsValue('colorScheme');

  render() {
    const isVisible = getAppStateValue('panel') === 'comments';
    return html`
      <wa-dialog
        id="CommentsPanel"
        class="${classMap({
          'dialog-scrolling': true,
          'wa-inverse': this.colorScheme !== getSettingsValue('colorScheme'),
        })}"
        ?open="${isVisible}"
        style="--width: 50vw;"
        light-dismiss
        @wa-after-hide=${() => setAppStateValue('panel', 'none')}
      >
        <h2 slot="label">${getLocaleString('COMMENTS')}</h2>
        <mov-color-scheme
          slot="header-actions"
          appearance="outlined"
          variant="brand"
          @click=${this.toggleColorScheme}
        ></mov-color-scheme>
        <div
          id="CommentsArea"
          class="${getSettingsValue('colorScheme')}"
        >
          ${getAppStateValue('manga')?.comments}
        </div>
      </wa-dialog>
    `;
  }

  toggleColorScheme() {
    this.colorScheme = this.colorScheme === 'dark' ? 'light' : 'dark';
  }
}
