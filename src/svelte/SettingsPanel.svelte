<script lang="ts">
import { locale } from '../core/settings';
import { buttonResetSettings } from '../ui/events/options.ts';
import { buttonSettingsClose } from '../ui/events/panels.ts';
import { IconSettingsOff, IconX } from '../ui/icons';
import SettingsPanelGeneral from './SettingsPanel-General.svelte';
import SettingsPanelLoading from './SettingsPanel-Loading.svelte';
import SettingsPanelOthers from './SettingsPanel-Others.svelte';
import SettingsPanelTheme from './SettingsPanel-Theme.svelte';
import SettingsPanelZoom from './SettingsPanel-Zoom.svelte';
</script>

<div
  class="panel"
  id="SettingsPanel"
>
  <h2>{$locale.SETTINGS}</h2>
  <button
    class="closeButton"
    id="CloseSettings"
    onclick={buttonSettingsClose}
    title={$locale.CLOSE}
  >
    {@html IconX}
  </button>
  <button
    class="ControlButton"
    id="ResetSettings"
    onclick={buttonResetSettings}
  >
    {@html IconSettingsOff}
    {$locale.BUTTON_RESET_SETTINGS}
  </button>
  <fieldset>
    <legend>{$locale.GENERAL}</legend>
    <SettingsPanelGeneral />
  </fieldset>
  <fieldset>
    <legend>{$locale.THEME}</legend>
    <SettingsPanelTheme />
  </fieldset>
  <fieldset>
    <legend>{$locale.LOADING}</legend>
    <SettingsPanelLoading />
  </fieldset>
  <fieldset>
    <legend>{$locale.ZOOM}</legend>
    <SettingsPanelZoom />
  </fieldset>
  <fieldset>
    <legend>{$locale.OTHERS}</legend>
    <SettingsPanelOthers />
  </fieldset>
</div>

<style>
</style>
