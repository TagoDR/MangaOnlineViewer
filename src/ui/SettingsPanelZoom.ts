import { html } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { getLocaleString, getSettingsValue } from '../core/settings.ts';
import { changeMinZoom, changeZoomStep } from './events/options.ts';
import { changeDefaultViewMode } from './events/viewmode.ts';
import { changeDefaultZoomMode, changeDefaultZoomValue } from './events/zoom.ts';
import {
  IconArrowAutofitDown,
  IconArrowAutofitHeight,
  IconArrowAutofitLeft,
  IconArrowAutofitRight,
  IconArrowAutofitWidth,
  IconFilePercent,
  IconSpacingVertical,
} from './icons';
import './components/SegmentedControl.ts';

function defaultZoomMode() {
  const zoomOptions = [
    { value: 'percent', label: getLocaleString('PERCENT'), icon: IconFilePercent },
    { value: 'width', label: getLocaleString('FIT_WIDTH'), icon: IconArrowAutofitWidth },
    { value: 'height', label: getLocaleString('FIT_HEIGHT'), icon: IconArrowAutofitHeight },
  ];
  return html` <div class="ControlLabel DefaultZoomMode">
    ${getLocaleString('DEFAULT_ZOOM_MODE')}
    <mov-segmented-control
      .options=${zoomOptions}
      .value=${getSettingsValue('zoomMode')}
      @change=${changeDefaultZoomMode}
      labelPosition="tooltip"
    ></mov-segmented-control>
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
  const viewModeOptions = [
    { value: 'Vertical', label: getLocaleString('VIEW_MODE_VERTICAL'), icon: IconArrowAutofitDown },
    { value: 'WebComic', label: getLocaleString('VIEW_MODE_WEBCOMIC'), icon: IconSpacingVertical },
    { value: 'FluidLTR', label: getLocaleString('VIEW_MODE_LEFT'), icon: IconArrowAutofitRight },
    { value: 'FluidRTL', label: getLocaleString('VIEW_MODE_RIGHT'), icon: IconArrowAutofitLeft },
  ];
  return html`
    <div class="ControlLabel viewMode">
      ${getLocaleString('DEFAULT_VIEW_MODE')}
      <mov-segmented-control
        .options=${viewModeOptions}
        .value=${getSettingsValue('viewMode')}
        @change=${changeDefaultViewMode}
        labelPosition="tooltip"
      ></mov-segmented-control>
    </div>
  `;
}

export default () =>
  html`${defaultZoomMode()} ${zoomValue()} ${minZoom()} ${zoomStep()} ${viewMode()}`;
