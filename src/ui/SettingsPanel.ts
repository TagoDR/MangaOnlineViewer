import { useStores } from '@nanostores/lit';
import { css, html, LitElement, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';
import { appState, getLocaleString, locale, resetSettings, settings } from '../core/settings.ts';
import { buttonPanelsClose } from './events/panels.ts';
import { IconSettingsOff } from './icons';
import SettingsPanelGeneral from './SettingsPanelGeneral.ts';
import SettingsPanelLoading from './SettingsPanelLoading.ts';
import SettingsPanelOthers from './SettingsPanelOthers.ts';
import SettingsPanelTheme from './SettingsPanelTheme.ts';
import SettingsPanelZoom from './SettingsPanelZoom.ts';
import './components/Panel.ts';
import cssStyles from './styles/settings.css?inline';

declare global {
  interface HTMLElementTagNameMap {
    'mov-settings-panel': SettingsPanel;
  }
}

/**
 * Renders the main settings panel as a LitElement component.
 * This panel serves as a container for various setting categories, each rendered as a separate fieldset.
 * Its visibility is reactively controlled by the `panel` property in the application state.
 */
@customElement('mov-settings-panel')
@useStores(settings, locale, appState)
export default class SettingsPanel extends LitElement {
  static styles = [css``, unsafeCSS(cssStyles)];
  protected createRenderRoot() {
    return this; // No shadow DOM
  }

  render() {
    return html`
      <mov-panel
        id="SettingsPanel"
        .open=${appState.get().panel === 'settings'}
        mode="drawer"
        @close=${buttonPanelsClose}
      >
        <h2 slot="header">${getLocaleString('SETTINGS')}</h2>
        <button
          id="ResetSettings"
          class="ControlButton"
          @click="${resetSettings}"
          title="${getLocaleString('BUTTON_RESET_SETTINGS')}"
        >
          ${IconSettingsOff} ${getLocaleString('BUTTON_RESET_SETTINGS')}
        </button>
        <div class="content">
          <fieldset>
            <legend>${getLocaleString('GENERAL')}</legend>
            ${SettingsPanelGeneral()}
          </fieldset>
          <fieldset>
            <legend>${getLocaleString('THEME')}</legend>
            ${SettingsPanelTheme()}
          </fieldset>
          <fieldset>
            <legend>${getLocaleString('LOADING')}</legend>
            ${SettingsPanelLoading()}
          </fieldset>
          <fieldset>
            <legend>${getLocaleString('ZOOM')}</legend>
            ${SettingsPanelZoom()}
          </fieldset>
          <fieldset>
            <legend>${getLocaleString('OTHERS')}</legend>
            ${SettingsPanelOthers()}
          </fieldset>
        </div>
      </mov-panel>
    `;
  }
}
