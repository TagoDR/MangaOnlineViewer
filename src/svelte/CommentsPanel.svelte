<script lang="ts">
    import { _ as getLocaleString } from 'svelte-i18n';
    import type { IManga } from '../types';
    import IconX from './icons/x.svelte';
    import IconSun from './icons/sun.svelte';
    import IconMoon from './icons/moon.svelte';
    import settings from '../core/settings';

    interface Props {
        manga: IManga;
    }

    const { manga }: Props = $props();
</script>

<section id="CommentsPanel" class="panel">
    <button id="CloseComments" class="closeButton" title={$getLocaleString('CLOSE')}>
        <IconX />
    </button>
    <h2>{$getLocaleString('COMMENTS')}</h2>
    <div id="CommentsArea" class={$settings.colorScheme}></div>
    <button id="CommentsColorScheme" class="simpleButton ColorScheme">
        <IconSun />
        <IconMoon />
    </button>
</section>
