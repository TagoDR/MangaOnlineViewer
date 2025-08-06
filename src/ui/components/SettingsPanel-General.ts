import { html } from 'lit';
import { getLocaleString, getSettingsValue, isSettingsLocal } from '../../core/settings.ts';
import locales from '../../locales';
import { changeLocale, changeSettingsScope } from '../events/options.ts';
import { IconLocationCog, IconWorldCog } from '../icons';

function settingsScope() {
  return html` <div class="ControlLabel">
    ${getLocaleString('SCOPE')}
    <div
      id="SettingsScope"
      class="radio-inputs"
    >
      <label class="radio">
        <input
          type="radio"
          id="globalSettings"
          name="settingsScope"
          ?checked="${!isSettingsLocal()}"
          value="false"
          @change="${changeSettingsScope}"
        />
        <span class="name">${IconWorldCog} ${getLocaleString('GLOBAL')}</span>
      </label>
      <label class="radio">
        <input
          type="radio"
          id="localSettings"
          name="settingsScope"
          ?checked="${isSettingsLocal()}"
          value="true"
          @change="${changeSettingsScope}"
        />
        <span class="name">${IconLocationCog} ${window.location.hostname}</span>
      </label>
    </div>
  </div>`;
}

function localeSelector() {
  return locales.map(
    (locale) => html`
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
