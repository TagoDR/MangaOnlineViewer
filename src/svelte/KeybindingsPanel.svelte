<script lang="ts">
import { locale } from '../core/settings';
import { buttonKeybindingsClose, editKeybindings, saveKeybindings } from '../ui/events/panels.ts';
import { IconDeviceFloppy, IconPencil, IconX } from '../ui/icons';
</script>

<div
  class="panel"
  id="KeybindingsPanel"
>
  <h2>{$locale.KEYBINDINGS}</h2>
  <button
    class="closeButton"
    id="CloseKeybindings"
    onclick={buttonKeybindingsClose}
    title={$locale.CLOSE}
  >
    {@html IconX}
  </button>
  <div class="controls">
    <button
      class="ControlButton"
      id="EditKeybindings"
      onclick={editKeybindings}
      title={$locale.EDIT_KEYBINDS}
      type="button"
    >
      {@html IconPencil}
      {$locale.BUTTON_EDIT}
    </button>
    <button
      class="ControlButton hidden"
      id="SaveKeybindings"
      onclick={saveKeybindings}
      title={$locale.SAVE_KEYBINDS}
      type="button"
    >
      {@html IconDeviceFloppy}
      {$locale.BUTTON_SAVE}
    </button>
  </div>
  <div id="KeybindingsList"></div>
  <div id="HotKeysRules">{$locale.KEYBIND_RULES}</div>
</div>

<style>
</style>
