<script lang="ts">
    import { _ as getLocaleString } from 'svelte-i18n';
    import IconArrowAutofitHeight from './icons/arrow-autofit-height.svelte';
    import IconArrowAutofitWidth from './icons/arrow-autofit-width.svelte';
    import IconBookmark from './icons/bookmark.svelte';
    import IconBookmarkOff from './icons/bookmark-off.svelte';
    import IconEye from './icons/eye.svelte';
    import IconEyeOff from './icons/eye-off.svelte';
    import IconRefresh from './icons/refresh.svelte';
    import IconZoomCancel from './icons/zoom-cancel.svelte';
    import IconZoomIn from './icons/zoom-in.svelte';
    import IconZoomOut from './icons/zoom-out.svelte';

    interface Props {
        index: number;
        src?: string;
    }

    const { index, src = '' }: Props = $props();
</script>

<div id="Page{index}" class="MangaPage">
    <div class="PageFunctions">
        <button class="Bookmark ControlButton" title={$getLocaleString('BOOKMARK')}>
            <IconBookmark />
            <IconBookmarkOff />
        </button>
        <button class="ZoomIn ControlButton" title={$getLocaleString('ZOOM_IN')}>
            <IconZoomIn />
        </button>
        <button class="ZoomRestore ControlButton" title={$getLocaleString('ZOOM_RESET')}>
            <IconZoomCancel />
        </button>
        <button class="ZoomOut ControlButton" title={$getLocaleString('ZOOM_OUT')}>
            <IconZoomOut />
        </button>
        <button class="ZoomWidth ControlButton" title={$getLocaleString('ZOOM_WIDTH')}>
            <IconArrowAutofitWidth />
        </button>
        <button class="ZoomHeight ControlButton" title={$getLocaleString('ZOOM_HEIGHT')}>
            <IconArrowAutofitHeight />
        </button>
        <button class="Hide ControlButton" title={$getLocaleString('HIDE')}>
            <IconEye />
            <IconEyeOff />
        </button>
        <button class="Reload ControlButton" title={$getLocaleString('RELOAD')}>
            <IconRefresh />
        </button>
        <span class="PageIndex">{index}</span>
    </div>
    <div class="PageContent">
        <img id="PageImg{index}" alt="" class="PageImg" {src} />
    </div>
</div>

<style>
</style>
