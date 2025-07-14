import { useStore } from '@nanostores/react';
import { locale } from '../../core/settings';
import { buttonSettingsClose } from '../../ui/events/panels';
import { IconSettingsOff, IconX } from '../Icons.ts';
import SettingsPanelGeneral from './SettingsPanel-General';
import SettingsPanelLoading from './SettingsPanel-Loading';
import SettingsPanelOthers from './SettingsPanel-Others';
import SettingsPanelTheme from './SettingsPanel-Theme';
import SettingsPanelZoom from './SettingsPanel-Zoom';

function SettingsPanel() {
  const l = useStore(locale);

  return (
    <div id="SettingsPanel" className="panel">
      <h2>{l.SETTINGS}</h2>
      <button
        id="CloseSettings"
        className="closeButton"
        title={l.CLOSE}
        onClick={buttonSettingsClose}
        type="button"
      >
        <IconX />
      </button>
      <button id="ResetSettings" className="ControlButton" type="button">
        <IconSettingsOff />
        {l.BUTTON_RESET_SETTINGS}
      </button>
      <fieldset>
        <legend>{l.GENERAL}</legend>
        <SettingsPanelGeneral />
      </fieldset>
      <fieldset>
        <legend>{l.THEME}</legend>
        <SettingsPanelTheme />
      </fieldset>
      <fieldset>
        <legend>{l.LOADING}</legend>
        <SettingsPanelLoading />
      </fieldset>
      <fieldset>
        <legend>{l.ZOOM}</legend>
        <SettingsPanelZoom />
      </fieldset>
      <fieldset>
        <legend>{l.OTHERS}</legend>
        <SettingsPanelOthers />
      </fieldset>
    </div>
  );
}

export default SettingsPanel;
