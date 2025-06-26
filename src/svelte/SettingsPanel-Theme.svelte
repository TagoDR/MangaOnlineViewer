<script lang="ts">
  import { locale, settings } from '../core/settings';
  import {
    buttonSelectTheme,
    changeColorScheme,
    changeCustomTheme,
    changeThemeShade,
  } from '../ui/events/theming.ts';
  import colors from '../utils/colors.ts';
  import { IconCheck, IconMoon, IconPalette, IconSun } from '../ui/icons';
</script>

<div class="ControlLabel ColorSchemeSelector">
  <label>{$locale.COLOR_SCHEME}</label>
  <button class="ControlButton" id="ColorScheme" onclick={changeColorScheme}>
    {@html IconSun}
    {@html IconMoon}
  </button>
</div>
<div class="ControlLabel ThemeSelector">
  <label>{$locale.THEME_COLOR}</label>
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
  <label>{$locale.THEME_HUE}</label>
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
    <label>{$locale.THEME_SHADE}</label>
    <output class="RangeValue" for="ThemeShade" id="themeShadeVal">
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
