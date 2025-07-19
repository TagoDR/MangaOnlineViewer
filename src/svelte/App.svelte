<script lang="ts">
import _ from 'lodash';
import { isBookmarked, settings } from '../core/settings';
import type { IManga } from '../types';
import { manualScroll } from '../ui/events/autoscroll.ts';
import { buttonBookmarksClose } from '../ui/events/bookmarks.ts';
import { buttonCommentsClose } from '../ui/events/globals';
import { toggleScrollDirection } from '../ui/events/headroom.ts';
import {
  buttonHeaderClick,
  buttonKeybindingsClose,
  buttonSettingsClose,
  headerHover,
} from '../ui/events/panels.ts';
import { IconMenu2 } from '../ui/icons';
import { getDevice } from '../utils/tampermonkey';
import BookmarksPanel from './BookmarksPanel.svelte';
import CommentsPanel from './CommentsPanel.svelte';
import Header from './Header.svelte';
import KeybindingsPanel from './KeybindingsPanel.svelte';
import Reader from './Reader.svelte';
import SettingsPanel from './SettingsPanel.svelte';
import ThumbnailPanel from './ThumbnailPanel.svelte';

interface Props {
  manga: IManga;
}

const { manga }: Props = $props();

function buttonOverlay() {
  buttonSettingsClose();
  buttonCommentsClose();
  buttonBookmarksClose();
  buttonKeybindingsClose();
}
</script>

<div
  class="{$settings.colorScheme}
        {$settings.hidePageControls ? 'hideControls' : ''}
        {isBookmarked() ? 'bookmarked' : ''}
        {getDevice()}"
  data-theme={$settings.theme}
  id="MangaOnlineViewer"
>
  <div
    class={$settings.header}
    id="menu"
    onclick={buttonHeaderClick}
  >
    {@html IconMenu2}
  </div>
  <Header {manga} />
  <Reader {manga} />
  <ThumbnailPanel {manga} />
  <div
    class="overlay"
    id="Overlay"
    onclick={buttonOverlay}
  ></div>
  <CommentsPanel />
  <KeybindingsPanel />
  <BookmarksPanel />
  <SettingsPanel />
</div>

<svelte:window
  onmouseover={_.throttle(headerHover, 300)}
  onscroll={_.debounce(toggleScrollDirection, 50)}
  onwheel={_.throttle(manualScroll, 500)}
/>

<style>
</style>
