import { getLocaleString, getSettingsValue, isSettingsLocal } from '../../core/settings.ts';
import locales from '../../locales';
import { html } from '../../utils/code-tag.ts';
import { IconLocationCog, IconWorldCog } from '../icons';

function settingsScope() {
  return html` <div class="ControlLabel">
    ${getLocaleString('SCOPE')}
    <div id="SettingsScope" class="radio-inputs">
      <label class="radio">
        <input
          type="radio"
          id="globalSettings"
          name="settingsScope"
          ${!isSettingsLocal() ? 'checked' : ''}
          value="false"
        />
        <span class="name">${IconWorldCog} ${getLocaleString('GLOBAL')}</span>
      </label>
      <label class="radio">
        <input
          type="radio"
          id="localSettings"
          name="settingsScope"
          ${isSettingsLocal() ? 'checked' : ''}
          value="true"
        />
        <span class="name">${IconLocationCog} ${window.location.hostname}</span>
      </label>
    </div>
  </div>`;
}

function localeSelector() {
  return locales
    .map(
      (locale) => html`
        <option value="${locale.ID}" ${getSettingsValue('locale') === locale.ID ? 'selected' : ''}>
          ${locale.NAME}
        </option>
      `,
    )
    .join('');
}

function language() {
  return html` <div class="ControlLabel locale">
    ${getLocaleString('LANGUAGE')}
    <select id="locale">
      ${localeSelector()}
    </select>
  </div>`;
}

export default () => settingsScope() + language();
