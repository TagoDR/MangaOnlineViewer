import { html } from 'lit';
import { getLocaleString, getSettingsValue } from '../core/settings.ts';
import { sample } from '../utils/colors.ts';
import { changeColorScheme, changeThemeHex } from './events/theming.ts';
import { IconMoon, IconSun } from './icons';

function theme() {
  return html`
    <div class="ControlLabel ColorSchemeSelector">
      <label>${getLocaleString('COLOR_SCHEME')}</label>
      <button
        id="ColorScheme"
        class="ControlButton"
        @click=${changeColorScheme}
      >
        ${IconSun} ${IconMoon}
      </button>
    </div>
    <div class="ControlLabel ThemeSelector">
      <label>${getLocaleString('THEME_COLOR')}</label>
      <input
        id="ThemeHex"
        type="color"
        value="${getSettingsValue('theme')}"
        class="colorpicker"
        title="${getSettingsValue('theme')}"
        @change=${changeThemeHex}
        list="color-sample"
      />
      <datalist id="color-sample">
        ${Object.values(sample).map(c => html`<option value="${c}"></option>`)}
      </datalist>
    </div>
    <details class="ControlLabel">
      <summary>${getLocaleString('THEME_HUE')} & ${getLocaleString('THEME_SHADE')}</summary>
      <mov-color-panel .selectedTheme=${getSettingsValue('theme')}></mov-color-panel>
    </details>
  `;
}

export default theme;
