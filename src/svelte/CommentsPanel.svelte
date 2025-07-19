<script lang="ts">
import { locale, settings } from '../core/settings';
import { buttonCommentsClose } from '../ui/events/globals.ts';
import { IconMoon, IconSun, IconX } from '../ui/icons';
</script>

<section
  class="panel"
  id="CommentsPanel"
>
  <button
    class="closeButton"
    id="CloseComments"
    onclick={buttonCommentsClose}
    title={$locale.CLOSE}
  >
    {@html IconX}
  </button>
  <h2>{$locale.COMMENTS}</h2>
  <div
    class={$settings.colorScheme}
    id="CommentsArea"
  ></div>
  <button
    class="simpleButton ColorScheme"
    id="CommentsColorScheme"
  >
    {@html IconSun}
    {@html IconMoon}
  </button>
</section>
