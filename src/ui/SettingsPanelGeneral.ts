import { html } from 'lit';
import { getLocaleString, getSettingsValue, isSettingsLocal } from '../core/settings.ts';
import locales from '../locales';
import { changeDeviceMode, changeLocale, changeSettingsScope } from './events/options.ts';
import './components/SegmentedControl.ts';

function settingsScope() {
  const value = isSettingsLocal() ? 'true' : 'false';

  return html` <div class="ControlLabel">
    ${getLocaleString('SCOPE')}
    <segmented-control
      .value=${value}
      @change=${changeSettingsScope}
    >
      <segmented-control-option
        value="false"
        label=${getLocaleString('GLOBAL')}
        icon="IconWorldCog"
      ></segmented-control-option>
      <segmented-control-option
        value="true"
        label=${window.location.hostname}
        icon="IconLocationCog"
      ></segmented-control-option>
    </segmented-control>
  </div>`;
}

function localeSelector() {
  return locales.map(
    locale => html`
      <option
        value="${locale.ID}"
        ?selected=${getSettingsValue('locale') === locale.ID}
      >
        ${locale.NAME}
      </option>
    `,
  );
}

function language() {
  return html` <div class="ControlLabel locale">
    ${getLocaleString('LANGUAGE')}
    <select
      id="locale"
      @change="${changeLocale}"
    >
      ${localeSelector()}
    </select>
  </div>`;
}

function deviceMode() {
  const value = getSettingsValue('deviceMode');

  return html` <div class="ControlLabel">
    ${getLocaleString('DEVICE_MODE')}
    <segmented-control
      .value=${value}
      @change=${changeDeviceMode}
    >
      <segmented-control-option
        value="auto"
        label=${getLocaleString('DEVICE_MODE_AUTO')}
        icon="IconAdjustmentsHorizontal"
      ></segmented-control-option>
      <segmented-control-option
        value="desktop"
        label=${getLocaleString('DEVICE_MODE_DESKTOP')}
        icon="IconDeviceDesktop"
      ></segmented-control-option>
      <segmented-control-option
        value="tablet"
        label=${getLocaleString('DEVICE_MODE_TABLET')}
        icon="IconDeviceTablet"
      ></segmented-control-option>
      <segmented-control-option
        value="mobile"
        label=${getLocaleString('DEVICE_MODE_MOBILE')}
        icon="IconDeviceMobile"
      ></segmented-control-option>
    </segmented-control>
  </div>`;
}

export default () => html`${settingsScope()} ${deviceMode()} ${language()}`;
