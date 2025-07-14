import { getLocaleString } from '../../core/settings';
import { html } from '../../utils/code-tag';
import { IconSettingsOff, IconX } from '../icons';
import SettingsPanelGeneral from './SettingsPanel-General';
import SettingsPanelLoading from './SettingsPanel-Loading';
import SettingsPanelOthers from './SettingsPanel-Others';
import SettingsPanelTheme from './SettingsPanel-Theme';
import SettingsPanelZoom from './SettingsPanel-Zoom';

const SettingsPanel = () => html`
  <div id="SettingsPanel" class="panel">
    <h2>${getLocaleString('SETTINGS')}</h2>
    <button id="CloseSettings" class="closeButton" title="${getLocaleString('CLOSE')}">
      ${IconX}
    </button>
    <button id="ResetSettings" class="ControlButton">
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
