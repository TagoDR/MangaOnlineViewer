import { useStore } from '@nanostores/react';
import { locale, settings } from '../core/settings.ts';
import {
  buttonSelectTheme,
  changeColorScheme,
  changeCustomTheme,
  changeThemeShade,
} from '../ui/events/theming.ts';
import colors from '../utils/colors.ts';
import { IconCheck, IconMoon, IconPalette, IconSun } from './Icons.ts';

function SettingsPanelTheme() {
  const l = useStore(locale);
  const s = useStore(settings);

  return (
    <>
      <div className="ControlLabel ColorSchemeSelector">
        <label>{l.COLOR_SCHEME}</label>
        <button
          id="ColorScheme"
          className="ControlButton"
          onClick={changeColorScheme}
          type="button"
        >
          <IconSun />
          <IconMoon />
        </button>
      </div>
      <div className="ControlLabel ThemeSelector">
        <label>{l.THEME_COLOR}</label>
        <span
          className={`custom ThemeRadio ${s.theme === 'custom' ? 'selected' : ''}`}
          title="custom"
          onClick={buttonSelectTheme}
        >
          <IconPalette />
          <IconCheck />
        </span>
        {Object.keys(colors).map(color => (
          <span
            key={colors[color].name}
            title={colors[color].name}
            className={`${colors[color].name} ThemeRadio ${
              s.theme === colors[color].name ? 'selected' : ''
            }`}
            onClick={buttonSelectTheme}
          >
            <IconCheck />
          </span>
        ))}
      </div>
      <div
        id="Hue"
        className={`ControlLabel CustomTheme ControlLabelItem ${
          s.theme.startsWith('custom') ? 'show' : ''
        }`}
      >
        <label>{l.THEME_HUE}</label>
        <input
          id="CustomThemeHue"
          type="color"
          value={s.customTheme}
          onChange={changeCustomTheme}
          className="colorpicker CustomTheme"
        />
      </div>
      <div
        id="Shade"
        className={`ControlLabel CustomTheme ControlLabelItem ${
          s.theme.startsWith('custom') ? '' : 'show'
        }`}
      >
        <span>
          <label>{l.THEME_SHADE}</label>
          <output
            id="themeShadeVal"
            className="RangeValue"
            htmlFor="ThemeShade"
          >
            {s.themeShade}
          </output>
        </span>
        <input
          type="range"
          value={s.themeShade}
          onInput={changeThemeShade}
          name="ThemeShade"
          id="ThemeShade"
          min="100"
          max="900"
          step="100"
        />
      </div>
    </>
  );
}

export default SettingsPanelTheme;
