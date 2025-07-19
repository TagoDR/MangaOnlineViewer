<script lang="ts">
import { locale, settings } from '../core/settings';
import type { IManga } from '../types';
import { transformScrollToHorizontal } from '../ui/events/common.ts';
import { IconCategory } from '../ui/icons';
import Thumbnail from './Thumbnail.svelte';

interface Props {
  manga: IManga;
}

const { manga }: Props = $props();
</script>

<nav
  class="panel {$settings.showThumbnails ? '' : 'disabled'}"
  id="Navigation"
>
  <div
    class="ControlLabel"
    id="NavigationCounters"
  >
    {@html IconCategory}
    <i>0</i> /
    <b>{manga.begin && manga.begin > 1 ? manga.pages - (manga.begin - 1) : manga.pages}</b>
    {$locale.PAGES_LOADED}
  </div>
  <div
    id="Thumbnails"
    onwheel={transformScrollToHorizontal}
  >
    {#each Array.from(Array(manga.pages + 1).keys()).slice(manga.begin) as index}
      <Thumbnail {index} />
    {/each}
  </div>
</nav>

<style>
</style>
