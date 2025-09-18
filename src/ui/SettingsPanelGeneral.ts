import { html } from 'lit';
import { getLocaleString, getSettingsValue, isSettingsLocal } from '../core/settings.ts';
import locales from '../locales';
import { changeLocale, changeSettingsScope } from './events/options.ts';
import { IconLocationCog, IconWorldCog } from './icons';
import './components/SegmentedControl.ts';

function settingsScope() {
  const options = [
    {
      value: 'false',
      label: getLocaleString('GLOBAL'),
      icon: IconWorldCog,
    },
    {
      value: 'true',
      label: window.location.hostname,
      icon: IconLocationCog,
    },
  ];
  const value = isSettingsLocal() ? 'true' : 'false';

  return html` <div class="ControlLabel">
    ${getLocaleString('SCOPE')}
    <segmented-control
      .options=${options}
      .value=${value}
      @change=${changeSettingsScope}
    ></segmented-control>
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
