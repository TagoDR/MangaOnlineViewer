<script lang="ts">
import { locale, settings } from '../core/settings';
import { buttonBookmarksClose, buttonEraseBookmarks } from '../ui/events/bookmarks.ts';
import { IconBookmark, IconBookmarkOff, IconExternalLink, IconTrash, IconX } from '../ui/icons';
import { isEmpty } from '../utils/checks';
</script>

<div
  class="panel"
  id="BookmarksPanel"
>
  <button
    class="closeButton"
    id="CloseBookmarks"
    onclick={buttonBookmarksClose}
    title={$locale.CLOSE}
  >
    {@html IconX}
  </button>
  <button
    class="Bookmark simpleButton"
    title="${$locale.BOOKMARK}"
  >
    {@html IconBookmark}
    {@html IconBookmarkOff}
  </button>
  <h2>{$locale.BOOKMARKS}</h2>
  <div id="BookmarksList">
    {#if isEmpty($settings.bookmarks)}
      {$locale.LIST_EMPTY}
    {:else}
      {#each $settings.bookmarks as mark, index (index)}
        <div
          id="Bookmark{index + 1}"
          class="BookmarkItem"
        >
          <span class="bookmarkColumnLarge">
            <span class="bookmarkName">{mark.name}</span>
            <br />
            <a
              class="bookmarkURl"
              href={mark.url}
              target="_blank">{mark.url}</a
            >
          </span>
          <span class="bookmarkColumnSmall">
            <span class="bookmarkDate">
              {new Date(mark.date).toISOString().slice(0, 10)}
            </span>
            <br />
            <span class="bookmarkPage">Page: {mark.page}</span>
          </span>
          <span class="bookmarkFunctions">
            <a
              class=""
              href={mark.url}
              target="_blank"
            >
              <button
                class="ControlButton open"
                title="Open Bookmark"
                type="button"
              >
                {@html IconExternalLink}
              </button>
            </a>
            <button
              class="ControlButton erase"
              title="Delete Bookmark"
              type="button"
              value={mark.url}
              onclick={buttonEraseBookmarks}
            >
              {@html IconTrash}
            </button>
          </span>
        </div>
      {/each}
    {/if}
  </div>
</div>

<style>
</style>
