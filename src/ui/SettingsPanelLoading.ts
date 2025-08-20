import { html } from 'lit';
import { getLocaleString, getSettingsValue } from '../core/settings.ts';
import { changeLoadMode, changePagesPerSecond } from './events/options.ts';

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
        @change="${changePagesPerSecond}"
      >
        <option
          value="3000"
          ?selected=${getSettingsValue('throttlePageLoad') === 3000}
        >
          0.3(${getLocaleString('SLOWLY')})
        </option>
        <option
          value="2000"
          ?selected=${getSettingsValue('throttlePageLoad') === 2000}
        >
          0.5
        </option>
        <option
          value="1000"
          ?selected=${getSettingsValue('throttlePageLoad') === 1000}
        >
          01(${getLocaleString('NORMAL')})
        </option>
        <option
          value="500"
          ?selected=${getSettingsValue('throttlePageLoad') === 500}
        >
          02
        </option>
        <option
          value="250"
          ?selected=${getSettingsValue('throttlePageLoad') === 250}
        >
          04(${getLocaleString('FAST')})
        </option>
        <option
          value="125"
          ?selected=${getSettingsValue('throttlePageLoad') === 125}
        >
          08
        </option>
        <option
          value="100"
          ?selected=${getSettingsValue('throttlePageLoad') === 100}
        >
          10(${getLocaleString('EXTREME')})
        </option>
        <option
          value="1"
          ?selected=${getSettingsValue('throttlePageLoad') === 1}
        >
          ${getLocaleString('ALL_PAGES')}
        </option>
      </select>
    </div>
  `;
}

export default () => html`${loadMode()} ${loadSpeed()}`;
