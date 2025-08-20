import { html } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { getAppStateValue, getLocaleString, resetSettings } from '../core/settings.ts';
import { buttonPanelsClose } from './events/panels.ts';
import { IconSettingsOff, IconX } from './icons';
import SettingsPanelGeneral from './SettingsPanelGeneral.ts';
import SettingsPanelLoading from './SettingsPanelLoading.ts';
import SettingsPanelOthers from './SettingsPanelOthers.ts';
import SettingsPanelTheme from './SettingsPanelTheme.ts';
import SettingsPanelZoom from './SettingsPanelZoom.ts';

/**
 * Renders the main settings panel as a Lit template.
 * This panel serves as a container for various setting categories, each rendered as a separate fieldset.
 * Its visibility is controlled by the `panel` property in the application state.
 *
 * @returns A Lit `TemplateResult` representing the settings panel.
 */
const SettingsPanel = () => html`
  <div
    id="SettingsPanel"
    class="${classMap({
      panel: true,
      visible: getAppStateValue('panel') === 'settings',
    })}"
  >
    <h2>${getLocaleString('SETTINGS')}</h2>
    <button
      id="CloseSettings"
      class="closeButton"
      title="${getLocaleString('CLOSE')}"
      @click="${buttonPanelsClose}"
    >
      ${IconX}
    </button>
    <button
      id="ResetSettings"
      class="ControlButton"
      @click="${resetSettings}"
    >
      ${IconSettingsOff} ${getLocaleString('BUTTON_RESET_SETTINGS')}
    </button>
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
`;

export default SettingsPanel;
