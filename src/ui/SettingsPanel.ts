import { useStores } from '@nanostores/lit';
import { css, html, LitElement, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';
import {
  appState,
  getAppStateValue,
  getLocaleString,
  locale,
  resetSettings,
  settings,
} from '../core/settings.ts';
import { buttonPanelsClose } from './events/panels.ts';
import SettingsPanelGeneral from './SettingsPanelGeneral.ts';
import SettingsPanelLoading from './SettingsPanelLoading.ts';
import SettingsPanelOthers from './SettingsPanelOthers.ts';
import SettingsPanelTheme from './SettingsPanelTheme.ts';
import SettingsPanelZoom from './SettingsPanelZoom.ts';
import './components/Drawer.ts';
import styles from './styles/settings.css?inline';

declare global {
  interface HTMLElementTagNameMap {
    'settings-panel': SettingsPanel;
  }
}

/**
 * Renders the main settings panel as a LitElement component.
 * This panel serves as a container for various setting categories, each rendered as a separate fieldset.
 * Its visibility is reactively controlled by the `panel` property in the application state.
 */
@customElement('settings-panel')
@useStores(settings, locale, appState)
export default class SettingsPanel extends LitElement {
  static styles = [
    css`
      #SettingsPanel.mobile #SettingsPanelZoom,
      #SettingsPanel.mobile .fitIfOversize,
      #SettingsPanel.mobile .showThumbnails,
      #SettingsPanel.mobile .lazyLoadImages,
      #SettingsPanel.mobile .downloadZip,
      #SettingsPanel.mobile .minZoom,
      #SettingsPanel.mobile .zoomStep,
      #SettingsPanel.mobile .headerType,
      #SettingsPanel.mobile .navbarType,
      #SettingsPanel.mobile .autoScroll {
        display: none;
      }
    `,
    unsafeCSS(styles),
  ];

  // protected createRenderRoot() {
  //   return this; // No shadow DOM
  // }

  render() {
    return html`
      <mov-drawer
        id="SettingsPanel"
        ?open=${getAppStateValue('panel') === 'settings'}
        @close=${buttonPanelsClose}
        placement="start"
        class="${getAppStateValue('device')}"
      >
        <h2 slot="label">${getLocaleString('SETTINGS')}</h2>
        <mov-button
          id="ResetSettings"
          @click="${resetSettings}"
          title="${getLocaleString('BUTTON_RESET_SETTINGS')}"
        >
          <mov-icon
            name="IconSettingsOff"
            size="20px"
            slot="start"
          ></mov-icon>
          ${getLocaleString('BUTTON_RESET_SETTINGS')}
        </mov-button>
        <div class="content">
          <fieldset id="SettingsPanelGeneral">
            <legend>${getLocaleString('GENERAL')}</legend>
            ${SettingsPanelGeneral()}
          </fieldset>
          <fieldset id="SettingsPanelTheme">
            <legend>${getLocaleString('THEME')}</legend>
            ${SettingsPanelTheme()}
          </fieldset>
          <fieldset id="SettingsPanelLoading">
            <legend>${getLocaleString('LOADING')}</legend>
            ${SettingsPanelLoading()}
          </fieldset>
          <fieldset id="SettingsPanelZoom">
            <legend>${getLocaleString('ZOOM')}</legend>
            ${SettingsPanelZoom()}
          </fieldset>
          <fieldset id="SettingsPanelOthers">
            <legend>${getLocaleString('OTHERS')}</legend>
            ${SettingsPanelOthers()}
          </fieldset>
        </div>
      </mov-drawer>
    `;
  }
}
