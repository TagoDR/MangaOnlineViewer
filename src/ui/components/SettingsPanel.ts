import { html } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { getAppStateValue, getLocaleString, resetSettings } from '../../core/settings';
import { buttonPanelsClose } from '../events/panels.ts';
import { IconSettingsOff, IconX } from '../icons';
import SettingsPanelGeneral from './SettingsPanel-General';
import SettingsPanelLoading from './SettingsPanel-Loading';
import SettingsPanelOthers from './SettingsPanel-Others';
import SettingsPanelTheme from './SettingsPanel-Theme';
import SettingsPanelZoom from './SettingsPanel-Zoom';

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
