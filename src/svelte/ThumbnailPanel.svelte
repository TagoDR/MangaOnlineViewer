<script lang="ts">
    import { _ as getLocaleString } from 'svelte-i18n';
    import settings from '../core/settings';
    import Thumbnail from './Thumnail.svelte';
    import IconCategory from './icons/category.svelte';
    import type { IManga } from '../types';

    interface Props {
        manga: IManga;
    }

    const { manga }: Props = $props();
</script>

<nav id="Navigation" class="panel {$settings.showThumbnails ? '' : 'disabled'}">
    <div id="NavigationCounters" class="ControlLabel">
        <IconCategory />
        <i>0</i> / <b>{manga.begin > 1 ? manga.pages - (manga.begin - 1) : manga.pages}</b>
        {$getLocaleString('PAGES_LOADED')}
    </div>
    <div id="Thumbnails">
        {#each Array.from(Array(manga.pages + 1).keys()).slice(manga.begin) as index}
            <Thumbnail {index} />
        {/each}
    </div>
</nav>

<style>
</style>
