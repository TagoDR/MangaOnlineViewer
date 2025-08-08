import { useStores } from '@nanostores/lit';
import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { appState, getLocaleString, getSettingsValue, locale, settings } from '../core/settings';
import { changeLoadMode, changePagesPerSecond } from './events/settings.ts';

@customElement('mov-settings-loading')
@useStores(settings, locale, appState)
export class SettingsPanelLoading extends LitElement {
  render() {
    return html`
      <div class="ControlLabel loadMode">
        ${getLocaleString('DEFAULT_LOAD_MODE')}
        <select
          id="loadMode"
          value=${getSettingsValue('loadMode')}
          @change=${changeLoadMode}
        >
          <option value="wait">${getLocaleString('LOAD_MODE_NORMAL')}</option>
          <option value="always">${getLocaleString('LOAD_MODE_ALWAYS')}</option>
          <option value="never">${getLocaleString('LOAD_MODE_NEVER')}</option>
        </select>
      </div>
      <div class="ControlLabel PagesPerSecond">
        ${getLocaleString('LOAD_SPEED')}
        <select
          id="PagesPerSecond"
          value=${getSettingsValue('throttlePageLoad')}
          @change=${changePagesPerSecond}
        >
          <option value="3000">0.3(${getLocaleString('SLOWLY')})</option>
          <option value="2000">0.5</option>
          <option value="1000">01(${getLocaleString('NORMAL')})</option>
          <option value="500">02</option>
          <option value="250">04(${getLocaleString('FAST')})</option>
          <option value="125">08</option>
          <option value="100">10(${getLocaleString('EXTREME')})</option>
          <option value="1">${getLocaleString('ALL_PAGES')}</option>
        </select>
      </div>
    `;
  }

  createRenderRoot() {
    return this; // Renders directly into the host element (light DOM)
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'mov-settings-loading': SettingsPanelLoading;
  }
}
