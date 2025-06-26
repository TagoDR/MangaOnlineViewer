<script lang="ts">
    import { _ as getLocaleString } from 'svelte-i18n';
    import settings from '../core/settings';
    import IconArrowAutofitDown from './icons/arrow-autofit-down.svelte';
    import IconArrowAutofitHeight from './icons/arrow-autofit-height.svelte';
    import IconArrowAutofitLeft from './icons/arrow-autofit-left.svelte';
    import IconArrowAutofitRight from './icons/arrow-autofit-right.svelte';
    import IconArrowAutofitWidth from './icons/arrow-autofit-width.svelte';
    import IconArrowBigLeft from './icons/arrow-big-left.svelte';
    import IconArrowBigRight from './icons/arrow-big-right.svelte';
    import IconBookmarks from './icons/bookmarks.svelte';
    import IconFileDownload from './icons/file-download.svelte';
    import IconKeyboard from './icons/keyboard.svelte';
    import IconListNumbers from './icons/list-numbers.svelte';
    import IconLoader2 from './icons/loader-2.svelte';
    import IconMenu2 from './icons/menu-2.svelte';
    import IconSettings from './icons/settings.svelte';
    import IconZoomInArea from './icons/zoom-in-area.svelte';
    import IconZoomPan from './icons/zoom-pan.svelte';
    import IconZoomOutArea from './icons/zoom-out-area.svelte';
    import IconSpacingVertical from './icons/spacing-vertical.svelte';
    import IconPlayerPause from './icons/player-pause.svelte';
    import IconPlayerPlay from './icons/player-play.svelte';
    import IconMessage from './icons/message.svelte';
    import type { IManga } from '../types';

    interface Props {
        manga: IManga;
    }

    const { manga }: Props = $props();
</script>

<div id="menu">
    <IconMenu2 />
</div>
<header id="Header" class="{$settings.header} headroom-top">
    <aside id="GlobalFunctions">
        <span>
            <button id="enlarge" title={$getLocaleString('ENLARGE')} class="ControlButton">
                <IconZoomInArea />
            </button>
            <button id="restore" title={$getLocaleString('RESTORE')} class="ControlButton">
                <IconZoomPan />
            </button>
            <button id="reduce" title={$getLocaleString('REDUCE')} class="ControlButton">
                <IconZoomOutArea />
            </button>
            <button id="fitWidth" title={$getLocaleString('FIT_WIDTH')} class="ControlButton">
                <IconArrowAutofitWidth />
            </button>
            <button id="fitHeight" title={$getLocaleString('FIT_HEIGHT')} class="ControlButton">
                <IconArrowAutofitHeight />
            </button>
            <button id="keybindings" title={$getLocaleString('KEYBINDINGS')} class="ControlButton">
                <IconKeyboard />
            </button>
            <button
                id="AutoScroll"
                title={$getLocaleString('SCROLL_START')}
                class="ControlButton phones"
            >
                <IconPlayerPlay />
                <IconPlayerPause />
            </button>
        </span>
        <span>
            <button id="ltrMode" title={$getLocaleString('VIEW_MODE_LEFT')} class="ControlButton">
                <IconArrowAutofitRight />
            </button>
            <button
                id="verticalMode"
                title={$getLocaleString('VIEW_MODE_VERTICAL')}
                class="ControlButton tablets"
            >
                <IconArrowAutofitDown />
            </button>
            <button
                id="webComic"
                title={$getLocaleString('VIEW_MODE_WEBCOMIC')}
                class="ControlButton tablets"
            >
                <IconSpacingVertical />
            </button>
            <button id="rtlMode" title={$getLocaleString('VIEW_MODE_RIGHT')} class="ControlButton">
                <IconArrowAutofitLeft />
            </button>
            <button
                id="pageControls"
                title={$getLocaleString('TOGGLE_CONTROLS')}
                class="ControlButton tablets"
            >
                <IconListNumbers />
            </button>
            <button
                id="bookmarks"
                title={$getLocaleString('BOOKMARKS')}
                class="ControlButton tablets"
            >
                <IconBookmarks />
            </button>
            <button
                id="settings"
                title={$getLocaleString('SETTINGS')}
                class="ControlButton tablets phones"
            >
                <IconSettings />
            </button>
        </span>
        <span id="ZoomSlider">
            <output id="ZoomVal" class="RangeValue" for="Zoom">
                {$settings.defaultZoom}%
            </output>
            <input
                type="range"
                value={$settings.defaultZoom}
                name="Zoom"
                id="Zoom"
                min="1"
                max="200"
            />
        </span>
    </aside>
    <div class="ViewerTitle">
        <h1 id="MangaTitle">{manga.title}</h1>
        <a id="series" href={manga.series}>
            ({$getLocaleString('RETURN_CHAPTER_LIST')})
        </a>
    </div>
    <nav id="ChapterNavigation">
        <div id="Counters" class="ControlLabel">
            {$getLocaleString('PAGES_LOADED')}:
            <i>0</i> / <b>{manga.begin > 1 ? manga.pages - (manga.begin - 1) : manga.pages}</b>
            <span class="ControlLabel">
                {$getLocaleString('GO_TO_PAGE')}:
            </span>
            <select id="gotoPage">
                <option selected>#</option>
                {#each Array.from(Array(manga.pages + 1).keys()).slice(manga.begin) as index}
                    <option value={index}>{index}</option>
                {/each}
            </select>
        </div>
        <div id="ChapterControl" class="ChapterControl">
            <button
                id="CommentsButton"
                class="NavigationControlButton ControlButton {manga.comments ? '' : 'disabled'}"
                title={$getLocaleString('DISPLAY_COMMENTS')}
            >
                <IconMessage />
                {$getLocaleString('DISPLAY_COMMENTS')}
            </button>
            <button
                id="download"
                class="NavigationControlButton ControlButton disabled"
                type="button"
                title={$getLocaleString('DOWNLOAD_ZIP')}
            >
                <IconFileDownload />
                <IconLoader2 />
                {$getLocaleString('BUTTON_DOWNLOAD')}
            </button>
            <a
                id="prev"
                class="NavigationControlButton ControlButton"
                type="button"
                href={manga.prev ?? ''}
                title={$getLocaleString('PREVIOUS_CHAPTER')}
            >
                <IconArrowBigLeft />
                {$getLocaleString('BUTTON_PREVIOUS')}
            </a>
            <a
                id="next"
                class="NavigationControlButton ControlButton"
                type="button"
                href={manga.next ?? ''}
                title={$getLocaleString('NEXT_CHAPTER')}
            >
                {$getLocaleString('BUTTON_NEXT')}
                <IconArrowBigRight />
            </a>
        </div>
    </nav>
</header>

<style>
</style>
