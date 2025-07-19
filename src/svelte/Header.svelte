<script lang="ts">
import { locale, settings } from '../core/settings';
import type { IManga } from '../types';
import { toggleAutoScroll } from '../ui/events/autoscroll.ts';
import { buttonBookmarksOpen } from '../ui/events/bookmarks.ts';
import {
  buttonCommentsOpen,
  buttonGlobalHideImageControls,
  buttonRedirectURL,
  buttonStartDownload,
} from '../ui/events/globals.ts';
import { selectGoToPage } from '../ui/events/navigation.ts';
import { buttonKeybindingsOpen, buttonSettingsOpen } from '../ui/events/panels.ts';
import { updateViewMode } from '../ui/events/viewmode.ts';
import { changeGlobalZoom, changeZoom, changeZoomByStep } from '../ui/events/zoom.ts';
import {
  IconArrowAutofitDown,
  IconArrowAutofitHeight,
  IconArrowAutofitLeft,
  IconArrowAutofitRight,
  IconArrowAutofitWidth,
  IconArrowBigLeft,
  IconArrowBigRight,
  IconBookmarks,
  IconFileDownload,
  IconKeyboard,
  IconListNumbers,
  IconLoader2,
  IconMenu2,
  IconMessage,
  IconPlayerPause,
  IconPlayerPlay,
  IconSettings,
  IconSpacingVertical,
  IconZoomInArea,
  IconZoomOutArea,
  IconZoomPan,
} from '../ui/icons';

interface Props {
  manga: IManga;
}

const { manga }: Props = $props();
</script>

<div id="menu">
  {@html IconMenu2}
</div>
<header
  class="{$settings.header} headroom-top"
  id="Header"
>
  <aside id="GlobalFunctions">
    <span>
      <button
        class="ControlButton"
        id="enlarge"
        onclick={changeZoomByStep(1)}
        title={$locale.ENLARGE}
      >
        {@html IconZoomInArea}
      </button>
      <button
        class="ControlButton"
        id="restore"
        onclick={changeGlobalZoom('percent')}
        title={$locale.RESTORE}
      >
        {@html IconZoomPan}
      </button>
      <button
        class="ControlButton"
        id="reduce"
        onclick={changeZoomByStep(-1)}
        title={$locale.REDUCE}
      >
        {@html IconZoomOutArea}
      </button>
      <button
        class="ControlButton"
        id="fitWidth"
        onclick={changeGlobalZoom('width')}
        title={$locale.FIT_WIDTH}
      >
        {@html IconArrowAutofitWidth}
      </button>
      <button
        class="ControlButton"
        id="fitHeight"
        onclick={changeGlobalZoom('height')}
        title={$locale.FIT_HEIGHT}
      >
        {@html IconArrowAutofitHeight}
      </button>
      <button
        class="ControlButton"
        id="keybindings"
        onclick={buttonKeybindingsOpen}
        title={$locale.KEYBINDINGS}
      >
        {@html IconKeyboard}
      </button>
      <button
        class="ControlButton phones"
        id="AutoScroll"
        onclick={toggleAutoScroll}
        title={$locale.SCROLL_START}
      >
        {@html IconPlayerPlay}
        {@html IconPlayerPause}
      </button>
    </span>
    <span>
      <button
        class="ControlButton"
        id="ltrMode"
        onclick={updateViewMode('FluidLTR')}
        title={$locale.VIEW_MODE_LEFT}
      >
        {@html IconArrowAutofitRight}
      </button>
      <button
        class="ControlButton tablets"
        id="verticalMode"
        onclick={updateViewMode('Vertical')}
        title={$locale.VIEW_MODE_VERTICAL}
      >
        {@html IconArrowAutofitDown}
      </button>
      <button
        class="ControlButton tablets"
        id="webComic"
        onclick={updateViewMode('WebComic')}
        title={$locale.VIEW_MODE_WEBCOMIC}
      >
        {@html IconSpacingVertical}
      </button>
      <button
        class="ControlButton"
        id="rtlMode"
        onclick={updateViewMode('FluidRTL')}
        title={$locale.VIEW_MODE_RIGHT}
      >
        {@html IconArrowAutofitLeft}
      </button>
      <button
        class="ControlButton tablets"
        id="pageControls"
        onclick={buttonGlobalHideImageControls}
        title={$locale.TOGGLE_CONTROLS}
      >
        {@html IconListNumbers}
      </button>
      <button
        class="ControlButton tablets"
        id="bookmarks"
        onclick={buttonBookmarksOpen}
        title={$locale.BOOKMARKS}
      >
        {@html IconBookmarks}
      </button>
      <button
        class="ControlButton tablets phones"
        id="settings"
        onclick={buttonSettingsOpen}
        title={$locale.SETTINGS}
      >
        {@html IconSettings}
      </button>
    </span>
    <span id="ZoomSlider">
      <output
        class="RangeValue"
        for="Zoom"
        id="ZoomVal"
      >
        {$settings.zoomMode === 'percent' ? $settings.defaultZoom + '%' : $settings.zoomMode}
      </output>
      <input
        id="Zoom"
        max="200"
        min="1"
        name="Zoom"
        oninput={changeZoom}
        type="range"
        value={$settings.defaultZoom}
      />
    </span>
  </aside>
  <div class="ViewerTitle">
    <h1 id="MangaTitle">{manga.title}</h1>
    <a
      href={manga.series}
      id="series"
      onclick={buttonRedirectURL}
    >
      ({$locale.RETURN_CHAPTER_LIST})
    </a>
  </div>
  <nav id="ChapterNavigation">
    <div
      class="ControlLabel"
      id="Counters"
    >
      {$locale.PAGES_LOADED}:
      <i>0</i> /
      <b>{manga.begin && manga.begin > 1 ? manga.pages - (manga.begin - 1) : manga.pages}</b>
      <span class="ControlLabel">
        {$locale.GO_TO_PAGE}:
      </span>
      <select
        id="gotoPage"
        onchange={selectGoToPage}
      >
        <option selected>#</option>
        {#each Array.from(Array(manga.pages + 1).keys()).slice(manga.begin) as index}
          <option value={index}>{index}</option>
        {/each}
      </select>
    </div>
    <div
      class="ChapterControl"
      id="ChapterControl"
    >
      <button
        class="NavigationControlButton ControlButton {manga.comments ? '' : 'disabled'}"
        id="CommentsButton"
        onclick={buttonCommentsOpen}
        title={$locale.DISPLAY_COMMENTS}
      >
        {@html IconMessage}
        {$locale.DISPLAY_COMMENTS}
      </button>
      <button
        class="NavigationControlButton ControlButton disabled"
        id="download"
        onclick={buttonStartDownload}
        title={$locale.DOWNLOAD_ZIP}
        type="button"
      >
        {@html IconFileDownload}
        {@html IconLoader2}
        {$locale.BUTTON_DOWNLOAD}
      </button>
      <a
        class="NavigationControlButton ControlButton"
        href={manga.prev ?? ''}
        id="prev"
        onclick={buttonRedirectURL}
        title={$locale.PREVIOUS_CHAPTER}
        type="button"
      >
        {@html IconArrowBigLeft}
        {$locale.BUTTON_PREVIOUS}
      </a>
      <a
        class="NavigationControlButton ControlButton"
        href={manga.next ?? ''}
        id="next"
        onclick={buttonRedirectURL}
        title={$locale.NEXT_CHAPTER}
        type="button"
      >
        {$locale.BUTTON_NEXT}
        {@html IconArrowBigRight}
      </a>
    </div>
  </nav>
</header>

<style>
</style>
