<script lang="ts">
import { settings } from '../core/settings';
import type { IManga } from '../types';
import MangaPage from './MangaPage.svelte';

interface Props {
  manga: IManga;
}

const { manga }: Props = $props();
</script>

<main
  class="{$settings.fitWidthIfOversize ? 'fitWidthIfOversize' : ''}
      {$settings.viewMode}"
  id="Chapter"
>
  {#each Array.from(Array(manga.pages + 1).keys()).slice(manga.begin) as index}
    <MangaPage {index} />
  {/each}
</main>

<style>
</style>
