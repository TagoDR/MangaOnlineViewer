import { html } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { getLocaleString, getSettingsValue } from '../../core/settings.ts';
import colors, { getTextColor } from '../../utils/colors.ts';
import { buttonSelectTheme, changeColorScheme, changeThemeHex } from '../events/theming.ts';
import { IconCheck, IconMoon, IconSun } from '../icons';

function themesSelector() {
  const swatchKeys = Object.keys(colors).filter(k => !['dark', 'gray'].includes(k));
  return swatchKeys.map(key => {
    const hex = colors[key]['600'];
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
      ${themesSelector()}
      <input
        id="ThemeHex"
        type="color"
        value="${getSettingsValue('theme')}"
        class="colorpicker"
        title="${getSettingsValue('theme')}"
        @change=${changeThemeHex}
      />
    </div>
  `;
}

export default theme;
