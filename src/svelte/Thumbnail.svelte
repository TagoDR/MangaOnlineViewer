<script lang="ts">
import { clickThumbnail } from '../ui/events/navigation.ts';

interface Props {
  index: number;
  src?: string;
}

const { index, src = '' }: Props = $props();
</script>

<div
  class="Thumbnail"
  id="Thumbnail{index}"
  onclick={clickThumbnail}
>
  <img
    alt=""
    class="ThumbnailImg"
    id="ThumbnailImg{index}"
    {src}
  />
  <span class="ThumbnailIndex">{index}</span>
</div>
