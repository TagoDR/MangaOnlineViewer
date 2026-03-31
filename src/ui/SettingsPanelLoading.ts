import { html } from 'lit';
import { getLocaleString, getSettingsValue } from '../core/settings.ts';
import { changeLoadMode, changeLoadSpeed } from './events/options.ts';

function loadMode() {
  return html`
    <div class="ControlLabel loadMode">
      ${getLocaleString('DEFAULT_LOAD_MODE')}
      <select
        id="loadMode"
        @change="${changeLoadMode}"
      >
        <option
          value="wait"
          ?selected=${getSettingsValue('loadMode') === 'wait'}
        >
          ${getLocaleString('LOAD_MODE_NORMAL')}
        </option>
        <option
          value="always"
          ?selected=${getSettingsValue('loadMode') === 'always'}
        >
          ${getLocaleString('LOAD_MODE_ALWAYS')}
        </option>
        <option
          value="never"
          ?selected=${getSettingsValue('loadMode') === 'never'}
        >
          ${getLocaleString('LOAD_MODE_NEVER')}
        </option>
      </select>
    </div>
  `;
}

function loadSpeed() {
  return html`
    <div class="ControlLabel PagesPerSecond">
      ${getLocaleString('LOAD_SPEED')}
      <select
        id="PagesPerSecond"
        @change="${changeLoadSpeed}"
      >
        <option
          value="Safe"
          ?selected=${getSettingsValue('loadSpeed') === 'Safe'}
        >
          ${getLocaleString('SLOWLY')} (Safe)
        </option>
        <option
          value="Standard"
          ?selected=${getSettingsValue('loadSpeed') === 'Standard'}
        >
          ${getLocaleString('NORMAL')} (Standard)
        </option>
        <option
          value="Faster"
          ?selected=${getSettingsValue('loadSpeed') === 'Faster'}
        >
          ${getLocaleString('FAST')} (Faster)
        </option>
        <option
          value="Extreme"
          ?selected=${getSettingsValue('loadSpeed') === 'Extreme'}
        >
          ${getLocaleString('EXTREME')} (Extreme)
        </option>
        <option
          value="All"
          ?selected=${getSettingsValue('loadSpeed') === 'All'}
        >
          ${getLocaleString('ALL_PAGES')} (All)
        </option>
      </select>
    </div>
  `;
}

export default () => html`${loadMode()} ${loadSpeed()}`;
