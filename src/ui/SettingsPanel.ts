import { useStores } from '@nanostores/lit';
import { css, html, LitElement, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';
import {
  appState,
  getAppStateValue,
  getLocaleString,
  locale,
  resetSettings,
  setAppStateValue,
  settings,
} from '../core/settings';
import styles from './styles/SettingsPanel.css?inline';
import { themesCSS } from './themes.ts';

@customElement('mov-settings-panel')
@useStores(settings, locale, appState)
export default class SettingsPanel extends LitElement {
  static styles = [unsafeCSS(themesCSS), unsafeCSS(styles), css``];

  render() {
    const isVisible = getAppStateValue('panel') === 'settings';
    return html`
      <wa-drawer
        id="SettingsPanel"
        placement="start"
        ?open="${isVisible}"
        @wa-after-hide=${() => setAppStateValue('panel', 'none')}
      >
        <h2 slot="label">${getLocaleString('SETTINGS')}</h2>
        <wa-button
          slot="header-actions"
          id="ResetSettings"
          variant="danger"
          size="small"
          title="${getLocaleString('BUTTON_RESET_SETTINGS')}"
          @click=${resetSettings}
        >
          <wa-icon
            slot="start"
            name="settings-off"
            label="${getLocaleString('BUTTON_RESET_SETTINGS')}"
          ></wa-icon>
          ${getLocaleString('BUTTON_RESET_SETTINGS')}
        </wa-button>
        <fieldset>
          <legend>${getLocaleString('GENERAL')}</legend>
          <mov-settings-general></mov-settings-general>
        </fieldset>
        <fieldset>
          <legend>${getLocaleString('THEME')}</legend>
          <mov-settings-theme></mov-settings-theme>
        </fieldset>
        <fieldset>
          <legend>${getLocaleString('LOADING')}</legend>
          <mov-settings-loading></mov-settings-loading>
        </fieldset>
        <fieldset>
          <legend>${getLocaleString('ZOOM')}</legend>
          <mov-settings-zoom></mov-settings-zoom>
        </fieldset>
        <fieldset>
          <legend>${getLocaleString('OTHERS')}</legend>
          <mov-settings-others></mov-settings-others>
        </fieldset>
      </wa-drawer>
    `;
  }
}

declare global {
  interface HTMLElementMangaPageMap {
    'mov-settings-panel': SettingsPanel;
  }
}
