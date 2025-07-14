import { getLocaleString, getSettingsValue } from '../../core/settings.ts';
import { html } from '../../utils/code-tag.ts';
import colors from '../../utils/colors.ts';
import { IconCheck, IconMoon, IconPalette, IconSun } from '../icons';

function themesSelector() {
  return [...Object.keys(colors).map((color) => colors[color].name)]
    .map(
      (theme) => html`
        <span
          title="${theme}"
          class="${theme} ThemeRadio ${getSettingsValue('theme') === theme ? 'selected' : ''}"
        >
          ${IconCheck}
        </span>
      `,
    )
    .join('');
}

function theme() {
  return html`
    <div class="ControlLabel ColorSchemeSelector">
      <label>${getLocaleString('COLOR_SCHEME')}</label>
      <button id="ColorScheme" class="ControlButton">${IconSun} ${IconMoon}</button>
    </div>
    <div class="ControlLabel ThemeSelector">
      <label>${getLocaleString('THEME_COLOR')}</label>
      <span
        class="custom ThemeRadio
        ${getSettingsValue('theme') === 'custom' ? 'selected' : ''}"
        title="custom"
      >
        ${IconPalette} ${IconCheck}
      </span>
      ${themesSelector()}
    </div>
    <div
      id="Hue"
      class="ControlLabel CustomTheme ControlLabelItem
      ${getSettingsValue('theme').startsWith('custom') ? 'show' : ''}"
    >
      <label>${getLocaleString('THEME_HUE')}</label>
      <input
        id="CustomThemeHue"
        type="color"
        value="${getSettingsValue('customTheme')}"
        class="colorpicker CustomTheme"
      />
    </div>
    <div
      id="Shade"
      class="ControlLabel CustomTheme ControlLabelItem
      ${getSettingsValue('theme').startsWith('custom') ? '' : 'show'}"
    >
      <span>
        <label>${getLocaleString('THEME_SHADE')}</label>
        <output id="themeShadeVal" class="RangeValue" for="ThemeShade">
          ${getSettingsValue('themeShade')}
        </output>
      </span>
      <input
        type="range"
        value="${getSettingsValue('themeShade')}"
        name="ThemeShade"
        id="ThemeShade"
        min="100"
        max="900"
        step="100"
        oninput="themeShadeVal.value = this.value"
      />
    </div>
  `;
}

export default theme;
