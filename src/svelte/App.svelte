<script lang="ts">
    import type { IManga } from '../types';
    import Reader from './Reader.svelte';
    import settings, { isBookmarked } from '../core/settings';
    import Header from './Header.svelte';
    import BookmarksPanel from './BookmarksPanel.svelte';
    import SettingsPanel from './SettingsPanel.svelte';
    import KeybindingsPanel from './KeybindingsPanel.svelte';
    import ThumbnailPanel from './ThumbnailPanel.svelte';
    import CommentsPanel from './CommentsPanel.svelte';
    import { getDevice } from '../utils/tampermonkey';

    interface Props {
        manga: IManga;
    }

    const { manga }: Props = $props();
</script>

<div
    id="MangaOnlineViewer"
    class="{$settings.colorScheme}
        {$settings.hidePageControls ? 'hideControls' : ''}
        {isBookmarked() ? 'bookmarked' : ''}
        {getDevice()}"
    data-theme={$settings.theme}
>
    <Header {manga} />
    <Reader {manga} />
    <CommentsPanel {manga} />
    <ThumbnailPanel {manga} />
    <div id="Overlay" class="overlay"></div>
    <SettingsPanel />
    <KeybindingsPanel />
    <BookmarksPanel />
</div>

<style>
</style>
