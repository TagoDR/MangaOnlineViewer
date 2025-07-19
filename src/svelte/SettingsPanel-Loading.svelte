<script lang="ts">
import { locale, settings } from '../core/settings';
import { changeLoadMode, changePagesPerSecond } from '../ui/events/options.ts';
</script>

<div class="ControlLabel loadMode">
  {$locale.DEFAULT_LOAD_MODE}
  <select
    id="loadMode"
    onchange={changeLoadMode}
    bind:value={$settings.loadMode}
  >
    <option value="wait">
      {$locale.LOAD_MODE_NORMAL}
    </option>
    <option value="always">
      {$locale.LOAD_MODE_ALWAYS}
    </option>
    <option value="never">
      {$locale.LOAD_MODE_NEVER}
    </option>
  </select>
</div>
<div class="ControlLabel PagesPerSecond">
  {$locale.LOAD_SPEED}
  <select
    id="PagesPerSecond"
    onchange={changePagesPerSecond}
    bind:value={$settings.throttlePageLoad}
  >
    <option value="3000">
      0.3({$locale.SLOWLY})
    </option>
    <option value="2000"> 0.5</option>
    <option value="1000">
      01({$locale.NORMAL})
    </option>
    <option value="500"> 02</option>
    <option value="250">
      04({$locale.FAST})
    </option>
    <option value="125"> 08</option>
    <option value="100">
      10({$locale.EXTREME})
    </option>
    <option value="1">
      {$locale.ALL_PAGES}
    </option>
  </select>
</div>
