import { useStores } from '@nanostores/lit';
import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { appState, getLocaleString, getSettingsValue, locale, settings } from '../core/settings';
import { changeViewMode } from './events/viewmode.ts';
import { changeMinZoom, changeZoomByStep, changeZoomMode, changeZoomValue } from './events/zoom.ts';

@customElement('mov-settings-zoom')
@useStores(settings, locale, appState)
export class SettingsPanelZoom extends LitElement {
  render() {
    return html`
      <div class="ControlLabel DefaultZoomMode">
        ${getLocaleString('DEFAULT_ZOOM_MODE')}
        <select
          id="DefaultZoomMode"
          value=${getSettingsValue('zoomMode')}
          @change=${changeZoomMode}
        >
          <option value="percent">${getLocaleString('PERCENT')}</option>
          <option value="width">${getLocaleString('FIT_WIDTH')}</option>
          <option value="height">${getLocaleString('FIT_HEIGHT')}</option>
        </select>
      </div>
      <div
        class=${classMap({
          ControlLabel: true,
          DefaultZoom: true,
          ControlLabelItem: true,
          show: getSettingsValue('zoomMode') === 'percent',
        })}
      >
        <span>
          ${getLocaleString('DEFAULT_ZOOM')}
          <output
            id="defaultZoomVal"
            class="RangeValue"
            for="DefaultZoom"
          >
            ${getSettingsValue('zoomValue')}%
          </output>
        </span>
        <wa-slider
          value="${getSettingsValue('zoomValue')}"
          name="DefaultZoom"
          id="DefaultZoom"
          min="5"
          max="200"
          step="5"
          with-markers
          with-tooltip
          style="width: 100%"
          @input=${changeZoomValue}
        ></wa-slider>
      </div>
      <div class="ControlLabel minZoom">
        <span>
          ${getLocaleString('MINIMUM_ZOOM')}
          <output
            id="minZoomVal"
            class="RangeValue"
            for="minZoom"
          >
            ${getSettingsValue('minZoom')}%
          </output>
        </span>
        <wa-slider
          value="${getSettingsValue('minZoom')}"
          name="minZoom"
          id="minZoom"
          min="30"
          max="100"
          step="10"
          with-markers
          with-tooltip
          style="width: 100%"
          @input=${changeMinZoom}
        ></wa-slider>
      </div>
      <div class="ControlLabel zoomStep">
        <span>
          ${getLocaleString('ZOOM_STEP')}
          <output
            id="zoomStepVal"
            class="RangeValue"
            for="zoomStep"
          >
            ${getSettingsValue('zoomStep')}%
          </output>
        </span>
        <wa-slider
          value="${getSettingsValue('zoomStep')}"
          name="zoomStep"
          id="zoomStep"
          min="5"
          max="50"
          step="5"
          with-markers
          with-tooltip
          style="width: 100%"
          @change=${changeZoomByStep}
        ></wa-slider>
      </div>
      <div class="ControlLabel viewMode">
        ${getLocaleString('DEFAULT_VIEW_MODE')}
        <select
          id="viewMode"
          value=${getSettingsValue('viewMode')}
          @change=${changeViewMode}
        >
          <option value="Vertical">${getLocaleString('VIEW_MODE_VERTICAL')}</option>
          <option value="WebComic">${getLocaleString('VIEW_MODE_WEBCOMIC')}</option>
          <option value="FluidLTR">${getLocaleString('VIEW_MODE_LEFT')}</option>
          <option value="FluidRTL">${getLocaleString('VIEW_MODE_RIGHT')}</option>
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
    'mov-settings-zoom': SettingsPanelZoom;
  }
}
