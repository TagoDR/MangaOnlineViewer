<script lang="ts">
import { locale } from '../core/settings';
import { buttonBookmark } from '../ui/events/bookmarks.ts';
import { buttonHidePage, buttonReloadPage } from '../ui/events/individual.ts';
import {
  buttonRestoreZoom,
  buttonZoomHeight,
  buttonZoomIn,
  buttonZoomOut,
  buttonZoomWidth,
} from '../ui/events/size.ts';
import {
  IconArrowAutofitHeight,
  IconArrowAutofitWidth,
  IconBookmark,
  IconBookmarkOff,
  IconEye,
  IconEyeOff,
  IconRefresh,
  IconZoomCancel,
  IconZoomIn,
  IconZoomOut,
} from '../ui/icons';

interface Props {
  index: number;
  src?: string;
}

const { index, src = '' }: Props = $props();
</script>

<div
  class="MangaPage"
  id="Page{index}"
>
  <div class="PageFunctions">
    <button
      class="Bookmark ControlButton"
      onclick={buttonBookmark}
      title={$locale.BOOKMARK}
    >
      {@html IconBookmark}
      {@html IconBookmarkOff}
    </button>
    <button
      class="ZoomIn ControlButton"
      onclick={buttonZoomIn}
      title={$locale.ZOOM_IN}
    >
      {@html IconZoomIn}
    </button>
    <button
      class="ZoomRestore ControlButton"
      onclick={buttonRestoreZoom}
      title={$locale.ZOOM_RESET}
    >
      {@html IconZoomCancel}
    </button>
    <button
      class="ZoomOut ControlButton"
      onclick={buttonZoomOut}
      title={$locale.ZOOM_OUT}
    >
      {@html IconZoomOut}
    </button>
    <button
      class="ZoomWidth ControlButton"
      onclick={buttonZoomWidth}
      title={$locale.ZOOM_WIDTH}
    >
      {@html IconArrowAutofitWidth}
    </button>
    <button
      class="ZoomHeight ControlButton"
      onclick={buttonZoomHeight}
      title={$locale.ZOOM_HEIGHT}
    >
      {@html IconArrowAutofitHeight}
    </button>
    <button
      class="Hide ControlButton"
      onclick={buttonHidePage}
      title={$locale.HIDE}
    >
      {@html IconEye}
      {@html IconEyeOff}
    </button>
    <button
      class="Reload ControlButton"
      onclick={buttonReloadPage}
      title={$locale.RELOAD}
    >
      {@html IconRefresh}
    </button>
    <span class="PageIndex">{index}</span>
  </div>
  <div class="PageContent">
    <img
      alt=""
      class="PageImg"
      id="PageImg{index}"
      {src}
    />
  </div>
</div>

<style>
</style>
