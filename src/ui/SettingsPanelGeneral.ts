import { html } from 'lit';
import { getLocaleString, getSettingsValue, isSettingsLocal } from '../core/settings.ts';
import locales from '../locales';
import { changeLocale, changeSettingsScope } from './events/options.ts';
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

export default () => html`${settingsScope()} ${language()}`;
