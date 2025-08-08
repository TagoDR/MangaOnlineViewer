import { useStores } from '@nanostores/lit';
import { css, html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { map } from 'lit/directives/map.js';
import {
  appState,
  getLocaleString,
  getSettingsValue,
  isSettingsLocal,
  locale,
  settings,
} from '../core/settings';
import locales from '../locales';
import { changeLocale, changeSettingsScope } from './events/settings';

@customElement('mov-settings-general')
@useStores(settings, locale, appState)
export class SettingsPanelGeneral extends LitElement {
  static styles = css`
    #SettingsScope {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  `;

  render() {
    return html`
      <div class="ControlLabel">
        ${getLocaleString('SCOPE')}
        <wa-radio-group
          id="SettingsScope"
          .value="${isSettingsLocal() ? 'true' : 'false'}"
          @change="${changeSettingsScope}"
          orientation="horizontal"
          size="large"
          name="settingsScope"
        >
          <wa-radio
            appearance="button"
            value="false"
          >
            <span class="name">
              <wa-icon
                name="world-cog"
                label="Global Settings"
              ></wa-icon>
              ${getLocaleString('GLOBAL')}
            </span>
          </wa-radio>
          <wa-radio
            appearance="button"
            value="true"
          >
            <span class="name">
              <wa-icon
                name="location-cog"
                label="Local Settings"
              ></wa-icon>
              ${window.location.hostname}
            </span>
          </wa-radio>
        </wa-radio-group>
      </div>
      <div class="ControlLabel locale">
        ${getLocaleString('LANGUAGE')}
        <select
          id="locale"
          value="${getSettingsValue('locale')}"
          @change="${changeLocale}"
        >
          ${map(locales, loc => html` <option value="${loc.ID}">${loc.NAME}</option> `)}
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
    'mov-settings-general': SettingsPanelGeneral;
  }
}
