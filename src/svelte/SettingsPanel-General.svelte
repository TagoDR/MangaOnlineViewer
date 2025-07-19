<script lang="ts">
import { isSettingsLocal, locale, settings } from '../core/settings';
import locales from '../locales';
import { changeLocale, changeSettingsScope } from '../ui/events/options.ts';
import { IconLocationCog, IconWorldCog } from '../ui/icons';
</script>

<div class="ControlLabel">
  {$locale.SCOPE}
  <div
    class="radio-inputs"
    id="SettingsScope"
  >
    <label class="radio">
      <input
        checked={!isSettingsLocal()}
        id="globalSettings"
        name="settingsScope"
        onchange={changeSettingsScope}
        type="radio"
        value="false"
      />
      <span class="name">{@html IconWorldCog} {$locale.GLOBAL}</span>
    </label>
    <label class="radio">
      <input
        checked={isSettingsLocal()}
        id="localSettings"
        name="settingsScope"
        onchange={changeSettingsScope}
        type="radio"
        value="true"
      />
      <span class="name">{@html IconLocationCog} {window.location.hostname}</span>
    </label>
  </div>
</div>
<div class="ControlLabel locale">
  {$locale.LANGUAGE}
  <select
    id="locale"
    onchange={changeLocale}
    bind:value={$settings.locale}
  >
    {#each locales as locale}
      <option value="${locale.ID}">
        {locale.NAME}
      </option>
    {/each}
  </select>
</div>
