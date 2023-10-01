<script lang="ts">
    import settings from '../core/settings';
    import MangaPage from './MangaPage.svelte';
    import type { IManga } from '../types';

    interface Props {
        manga: IManga;
    }

    const { manga }: Props = $props();
</script>

<main
    id="Chapter"
    class="{$settings.fitWidthIfOversize ? 'fitWidthIfOversize' : ''}
      {$settings.viewMode}"
>
    {#each Array.from(Array(manga.pages + 1).keys()).slice(manga.begin) as index}
        <MangaPage {index} />
    {/each}
</main>

<style>
</style>
