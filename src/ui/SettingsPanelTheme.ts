import { html } from 'lit';
import { getLocaleString, getSettingsValue } from '../core/settings.ts';
import { sample } from '../utils/colors.ts';
import { buttonSelectTheme, changeColorScheme, changeThemeHex } from './events/theming.ts';

function theme() {
  return html`
    <div class="ControlLabel ColorSchemeSelector">
      <label>${getLocaleString('COLOR_SCHEME')}</label>
      <mov-toggle-button
        id="ColorScheme"
        mode="theme"
        @click=${changeColorScheme}
        ?active=${getSettingsValue('colorScheme') === 'dark'}
      >
      </mov-toggle-button>
    </div>
    <div class="ControlLabel ThemeSelector">
      <label>${getLocaleString('THEME_COLOR')}</label>
      <input
        id="ThemeHex"
        type="color"
        .value="${getSettingsValue('theme')}"
        class="colorpicker"
        title="${getSettingsValue('theme')}"
        @input=${changeThemeHex}
        list="color-sample"
      />
      <datalist id="color-sample">
        ${Object.values(sample).map(c => html`<option value="${c}"></option>`)}
      </datalist>
    </div>
    ${Object.values(sample).map(c => html`<mov-color-swatch .value="${c}" ?selected=${getSettingsValue('theme') === c} @click=${changeThemeHex}></mov-color-swatch>`)}
    <details class="ControlLabel">
      <summary>${getLocaleString('THEME_HUE')} & ${getLocaleString('THEME_SHADE')}</summary>
      <mov-color-panel .value=${getSettingsValue('theme')} @click=${buttonSelectTheme}></mov-color-panel>
    </details>
  `;
}

export default theme;
