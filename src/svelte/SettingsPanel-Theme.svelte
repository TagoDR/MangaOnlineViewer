<script lang="ts">
import { locale, settings } from '../core/settings';
import {
  buttonSelectTheme,
  changeColorScheme,
  changeCustomTheme,
  changeThemeShade,
} from '../ui/events/theming.ts';
import { IconCheck, IconMoon, IconPalette, IconSun } from '../ui/icons';
import colors from '../utils/colors.ts';
</script>

<div class="ControlLabel ColorSchemeSelector">
  {$locale.COLOR_SCHEME}
  <button
    class="ControlButton"
    id="ColorScheme"
    onclick={changeColorScheme}
  >
    {@html IconSun}
    {@html IconMoon}
  </button>
</div>
<div class="ControlLabel ThemeSelector">
  {$locale.THEME_COLOR}
  <span
    class="custom ThemeRadio
        {$settings.theme === 'custom' ? 'selected' : ''}"
    onclick={buttonSelectTheme}
    title="custom"
  >
    {@html IconPalette}
    {@html IconCheck}
  </span>
  {#each Object.keys(colors).map(color => colors[color].name) as theme}
    <span
      title={theme}
      class="{theme} ThemeRadio {$settings.theme === theme ? 'selected' : ''}"
      onclick={buttonSelectTheme}
    >
      {@html IconCheck}
    </span>
  {/each}
</div>
<div
  class="ControlLabel CustomTheme ControlLabelItem
      {$settings.theme.startsWith('custom') ? 'show' : ''}"
  id="Hue"
>
  {$locale.THEME_HUE}
  <input
    class="colorpicker CustomTheme"
    id="CustomThemeHue"
    onchange={changeCustomTheme}
    type="color"
    value={$settings.customTheme}
  />
</div>
<div
  class="ControlLabel CustomTheme ControlLabelItem
      {$settings.theme.startsWith('custom') ? '' : 'show'}"
  id="Shade"
>
  <span>
    {$locale.THEME_SHADE}
    <output
      class="RangeValue"
      for="ThemeShade"
      id="themeShadeVal"
    >
      {$settings.themeShade}
    </output>
  </span>
  <input
    id="ThemeShade"
    max="900"
    min="100"
    name="ThemeShade"
    oninput={changeThemeShade}
    step="100"
    type="range"
    value={$settings.themeShade}
  />
</div>
