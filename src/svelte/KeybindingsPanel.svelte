<script lang="ts">
    import { _ as getLocaleString } from 'svelte-i18n';
    import settings from '../core/settings';
    import IconX from './icons/x.svelte';
    import IconPencil from './icons/pencil.svelte';
    import IconDeviceFloppy from './icons/device-floppy.svelte';

    let editor = $state(false);

    function toggle() {
        editor = !editor;
    }
</script>

<div id="KeybindingsPanel" class="panel">
    <h2>{$getLocaleString('KEYBINDINGS')}</h2>
    <button id="CloseKeybindings" class="closeButton" title={$getLocaleString('CLOSE')}>
        <IconX />
    </button>
    <div class="controls">
        <button
            id="EditKeybindings"
            class="ControlButton"
            type="button"
            title={$getLocaleString('EDIT_KEYBINDS')}
            onclick={toggle}
        >
            <IconPencil />
            {$getLocaleString('BUTTON_EDIT')}
        </button>
        <button
            id="SaveKeybindings"
            class="ControlButton hidden"
            type="button"
            title={$getLocaleString('SAVE_KEYBINDS')}
            onclick={toggle}
        >
            <IconDeviceFloppy />
            {$getLocaleString('BUTTON_SAVE')}
        </button>
    </div>
    <div id="KeybindingsList">
        {#if !editor}
            {#each Object.keys($settings.keybinds) as kb}
                <span>{$getLocaleString(kb)}:</span>
                <span>
                    {#if $settings.keybinds[kb]}
                        {#each $settings.keybinds[kb] || [] as key}
                            <kbd class="dark">{key}</kbd>
                        {/each}
                    {/if}
                </span>
            {/each}
        {:else}
            {#each Object.keys($settings.keybinds) as kb}
                <label for={kb}>{$getLocaleString(kb)}:</label>
                <input
                    type="text"
                    class="KeybindInput"
                    id={kb}
                    name={kb}
                    value={$settings.keybinds[kb]?.join(' , ') ?? ''}
                />
            {/each}
            <div id="HotKeysRules">{$getLocaleString('KEYBIND_RULES')}</div>
        {/if}
    </div>
</div>

<style>
</style>
