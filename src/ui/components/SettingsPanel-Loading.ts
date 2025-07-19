import { getLocaleString, getSettingsValue } from '../../core/settings.ts';
import { html } from '../../utils/code-tag.ts';

function loadMode() {
  return html`
    <div class="ControlLabel loadMode">
      ${getLocaleString('DEFAULT_LOAD_MODE')}
      <select id="loadMode">
        <option
          value="wait"
          ${getSettingsValue('loadMode') === 'wait' ? 'selected' : ''}
        >
          ${getLocaleString('LOAD_MODE_NORMAL')}
        </option>
        <option
          value="always"
          ${getSettingsValue('loadMode') === 'always' ? 'selected' : ''}
        >
          ${getLocaleString('LOAD_MODE_ALWAYS')}
        </option>
        <option
          value="never"
          ${getSettingsValue('loadMode') === 'never' ? 'selected' : ''}
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
      <select id="PagesPerSecond">
        <option
          value="3000"
          ${getSettingsValue('throttlePageLoad') === 3000 ? 'selected' : ''}
        >
          0.3(${getLocaleString('SLOWLY')})
        </option>
        <option
          value="2000"
          ${getSettingsValue('throttlePageLoad') === 2000 ? 'selected' : ''}
        >
          0.5
        </option>
        <option
          value="1000"
          ${getSettingsValue('throttlePageLoad') === 1000 ? 'selected' : ''}
        >
          01(${getLocaleString('NORMAL')})
        </option>
        <option
          value="500"
          ${getSettingsValue('throttlePageLoad') === 500 ? 'selected' : ''}
        >
          02
        </option>
        <option
          value="250"
          ${getSettingsValue('throttlePageLoad') === 250 ? 'selected' : ''}
        >
          04(${getLocaleString('FAST')})
        </option>
        <option
          value="125"
          ${getSettingsValue('throttlePageLoad') === 125 ? 'selected' : ''}
        >
          08
        </option>
        <option
          value="100"
          ${getSettingsValue('throttlePageLoad') === 100 ? 'selected' : ''}
        >
          10(${getLocaleString('EXTREME')})
        </option>
        <option
          value="1"
          ${getSettingsValue('throttlePageLoad') === 1 ? 'selected' : ''}
        >
          ${getLocaleString('ALL_PAGES')}
        </option>
      </select>
    </div>
  `;
}

export default () => loadMode() + loadSpeed();
