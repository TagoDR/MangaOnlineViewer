import { html } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { getLocaleString, getSettingsValue } from '../../core/settings.ts';
import colors, { getTextColor, sortColors } from '../../utils/colors.ts';
import { buttonSelectTheme, changeColorScheme, changeThemeHex } from '../events/theming.ts';
import { IconCheck, IconMoon, IconSun } from '../icons';

function themesSelector() {
  const swatchKeys = Object.keys(colors)
    .filter(k => !['dark', 'gray'].includes(k))
    .sort(sortColors);
  const shades = [/*50,*/ 100, 200, 300, 400, 500, 600, 700, 800, 900] as const;
  return swatchKeys.map(key => {
    const name = colors[key].name;
    const swatches = shades.map(shade => {
      const hex = colors[key][shade];
      const text = getTextColor(hex);
      return html`
        <span
          title="${hex}"
          class="${classMap({
            ThemeRadio: true,
            selected: getSettingsValue('theme') === hex,
          })}"
          style="background-color: ${hex}; color: ${text}"
          @click=${buttonSelectTheme}
        >
          ${IconCheck}
        </span>
      `;
    });
    return html` <div class="SwatchGroup">
      <span class="ColorName">${name}</span>
      <div class="Swatches">${swatches}</div>
    </div>`;
  });
}

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
      />
      <div class="ColorPanel">${themesSelector()}</div>
    </div>
  `;
}

export default theme;
