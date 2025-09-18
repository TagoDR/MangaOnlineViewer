import { html } from 'lit';
import { getLocaleString, getSettingsValue } from '../core/settings.ts';
import { sample } from '../utils/colors.ts';
import { buttonSelectTheme, changeColorScheme, changeThemeHex } from './events/theming.ts';

function theme() {
  return html`
    <div class="ControlLabel ColorSchemeSelector">
      <label>${getLocaleString('COLOR_SCHEME')}</label>
      <toggle-button
        id="ColorScheme"
        mode="theme"
        @click=${changeColorScheme}
        ?active=${getSettingsValue('colorScheme') === 'dark'}
      >
      </toggle-button>
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
    <span id="ColorRecommendations">
      ${Object.values(sample).map(
        c =>
          html`<color-swatch
            .value="${c}"
            ?selected=${getSettingsValue('theme') === c}
            @click=${changeThemeHex}
          ></color-swatch>`,
      )}
    </span>
    <details class="ControlLabel">
      <summary>${getLocaleString('THEME_HUE')} & ${getLocaleString('THEME_SHADE')}</summary>
      <color-panel
        .value=${getSettingsValue('theme')}
        @click=${buttonSelectTheme}
      ></color-panel>
    </details>
  `;
}

export default theme;
