<script lang="ts">
    interface Props {
        index: number;
        src?: string;
    }

    const { index, src = '' }: Props = $props();
</script>

<div id="Thumbnail{index}" class="Thumbnail">
    <img id="ThumbnailImg{index}" alt="" class="ThumbnailImg" {src} />
    <span class="ThumbnailIndex">{index}</span>
</div>
