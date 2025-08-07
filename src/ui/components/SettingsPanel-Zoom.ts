import { html } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { getLocaleString, getSettingsValue } from '../../core/settings.ts';
import { changeMinZoom, changeZoomStep } from '../events/options.ts';
import { changeViewMode } from '../events/viewmode.ts';
import { changeDefaultZoomMode, changeDefaultZoomValue } from '../events/zoom.ts';

function defaultZoomMode() {
  return html` <div class="ControlLabel DefaultZoomMode">
    ${getLocaleString('DEFAULT_ZOOM_MODE')}
    <select
      id="DefaultZoomMode"
      @change="${changeDefaultZoomMode}"
    >
      <option
        value="percent"
        ?selected=${getSettingsValue('zoomMode') === 'percent'}
      >
        ${getLocaleString('PERCENT')}
      </option>
      <option
        value="width"
        ?selected=${getSettingsValue('zoomMode') === 'width'}
      >
        ${getLocaleString('FIT_WIDTH')}
      </option>
      <option
        value="height"
        ?selected=${getSettingsValue('zoomMode') === 'height'}
      >
        ${getLocaleString('FIT_HEIGHT')}
      </option>
    </select>
  </div>`;
}

function zoomValue() {
  return html`
    <div
      class="${classMap({
        ControlLabel: true,
        zoomValue: true,
        ControlLabelItem: true,
        show: getSettingsValue('zoomMode') === 'percent',
      })}"
    >
      <span>
        ${getLocaleString('DEFAULT_ZOOM')}
        <output
          id="zoomValueVal"
          class="RangeValue"
          for="zoomValue"
        >
          ${getSettingsValue('zoomValue')}%
        </output>
      </span>
      <input
        type="range"
        value="${getSettingsValue('zoomValue')}"
        name="zoomValue"
        id="zoomValue"
        min="5"
        max="200"
        step="5"
        list="tickmarks"
        oninput='zoomValueVal.value = this.value + "%"'
        @change="${changeDefaultZoomValue}"
      />
      <datalist id="tickmarks">
        <option value="5">5</option>
        <option value="25">25</option>
        <option value="50">50</option>
        <option value="75">75</option>
        <option value="100">100</option>
        <option value="125">125</option>
        <option value="150">150</option>
        <option value="175">175</option>
        <option value="200">200</option>
      </datalist>
    </div>
  `;
}

function minZoom() {
  return html`
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
      <input
        type="range"
        value="${getSettingsValue('minZoom')}"
        name="minZoom"
        id="minZoom"
        min="30"
        max="100"
        step="10"
        oninput='minZoomVal.value = this.value + "%"'
        @input="${changeMinZoom}"
      />
    </div>
  `;
}

function zoomStep() {
  return html`
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
      <input
        type="range"
        value="${getSettingsValue('zoomStep')}"
        name="zoomStep"
        id="zoomStep"
        min="5"
        max="50"
        step="5"
        oninput='zoomStepVal.value = this.value + "%"'
        @change="${changeZoomStep}"
      />
    </div>
  `;
}

function viewMode() {
  return html`
    <div class="ControlLabel viewMode">
      ${getLocaleString('DEFAULT_VIEW_MODE')}
      <select
        id="viewMode"
        @change="${changeViewMode}"
      >
        <option
          value="Vertical"
          ?selected=${getSettingsValue('viewMode') === 'Vertical'}
        >
          ${getLocaleString('VIEW_MODE_VERTICAL')}
        </option>
        <option
          value="WebComic"
          ?selected=${getSettingsValue('viewMode') === 'WebComic'}
        >
          ${getLocaleString('VIEW_MODE_WEBCOMIC')}
        </option>
        <option
          value="FluidLTR"
          ?selected=${getSettingsValue('viewMode') === 'FluidLTR'}
        >
          ${getLocaleString('VIEW_MODE_LEFT')}
        </option>
        <option
          value="FluidRTL"
          ?selected=${getSettingsValue('viewMode') === 'FluidRTL'}
        >
          ${getLocaleString('VIEW_MODE_RIGHT')}
        </option>
      </select>
    </div>
  `;
}

export default () =>
  html`${defaultZoomMode()} ${zoomValue()} ${minZoom()} ${zoomStep()} ${viewMode()}`;
