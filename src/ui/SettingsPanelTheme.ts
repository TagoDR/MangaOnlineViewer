import { html } from 'lit';
import { getLocaleString, getSettingsValue } from '../core/settings.ts';
import { sample } from '../utils/colors.ts';
import { changeColorScheme, changeTheme } from './events/theming.ts';

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
        @input=${changeTheme}
        list="color-sample"
      />
      <datalist id="color-sample">
        ${Object.values(sample).map(c => html`<option value="${c}"></option>`)}
      </datalist>
    </div>
    <color-palette
      .baseColor="${getSettingsValue('theme')}"
      mode="steps"
      .selected=${getSettingsValue('theme')}
      @change="${changeTheme}"
    ></color-palette>
    <span id="ColorRecommendations">
      ${Object.values(sample).map(
        c =>
          html`<color-swatch
            .color="${c}"
            .selected=${getSettingsValue('theme')}
            @change=${changeTheme}
          ></color-swatch>`,
      )}
    </span>
    <details class="ControlLabel">
      <summary>${getLocaleString('THEME_HUE')} & ${getLocaleString('THEME_SHADE')}</summary>
      <color-panel
        .selected=${getSettingsValue('theme')}
        @change=${changeTheme}
      ></color-panel>
    </details>
  `;
}

export default theme;
