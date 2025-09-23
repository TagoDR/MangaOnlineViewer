import { html } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { getLocaleString, getSettingsValue } from '../core/settings.ts';
import { changeMinZoom, changeZoomStep } from './events/options.ts';
import { changeDefaultViewMode } from './events/viewmode.ts';
import { changeDefaultZoomMode, changeDefaultZoomValue } from './events/zoom.ts';
import './components/SegmentedControl.ts';

/**
 * Renders the control for setting the default zoom mode (Percent, Fit Width, Fit Height).
 * @returns The Lit template for the default zoom mode setting.
 */
function defaultZoomMode() {
  return html` <div class="ControlLabel DefaultZoomMode">
    ${getLocaleString('DEFAULT_ZOOM_MODE')}
    <segmented-control
      .value=${getSettingsValue('zoomMode')}
      @change=${changeDefaultZoomMode}
      labelPosition="tooltip"
    >
      <segmented-control-option
        value="percent"
        label=${getLocaleString('PERCENT')}
        icon="file-percent"
      ></segmented-control-option>
      <segmented-control-option
        value="width"
        label=${getLocaleString('FIT_WIDTH')}
        icon="arrow-autofit-width"
      ></segmented-control-option>
      <segmented-control-option
        value="height"
        label=${getLocaleString('FIT_HEIGHT')}
        icon="arrow-autofit-height"
      ></segmented-control-option>
    </segmented-control>
  </div>`;
}

/**
 * Renders the control for setting the default zoom value as a percentage.
 * This control is only visible when the zoom mode is set to 'percent'.
 * @returns The Lit template for the default zoom value setting.
 */
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
        list="zoomValueList"
        @input="${changeDefaultZoomValue}"
      />
      <datalist id="zoomValueList">
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

/**
 * Renders the control for setting the minimum zoom level for images.
 * @returns The Lit template for the minimum zoom setting.
 */
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
        min="25"
        max="100"
        step="5"
        @input="${changeMinZoom}"
        list="minZoomList"
      />
      <datalist id="minZoomList">
        <option value="25">25</option>
        <option value="50">50</option>
        <option value="75">75</option>
        <option value="100">100</option>
      </datalist>
    </div>
  `;
}

/**
 * Renders the control for setting the zoom step value, which determines the increment/decrement for zoom actions.
 * @returns The Lit template for the zoom step setting.
 */
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
        min="10"
        max="50"
        step="5"
        @input="${changeZoomStep}"
        list="zoomStepList"
      />
      <datalist id="zoomStepList">
        <option value="10">10</option>
        <option value="30">30</option>
        <option value="50">50</option>
      </datalist>
    </div>
  `;
}

/**
 * Renders the control for setting the default view mode (Vertical, WebComic, Fluid LTR, Fluid RTL).
 * @returns The Lit template for the default view mode setting.
 */
function viewMode() {
  return html`
    <div class="ControlLabel viewMode">
      ${getLocaleString('DEFAULT_VIEW_MODE')}
      <segmented-control
        .value=${getSettingsValue('viewMode')}
        @change=${changeDefaultViewMode}
        labelPosition="tooltip"
      >
        <segmented-control-option
          value="Vertical"
          label=${getLocaleString('VIEW_MODE_VERTICAL')}
          icon="arrow-autofit-down"
        ></segmented-control-option>
        <segmented-control-option
          value="WebComic"
          label=${getLocaleString('VIEW_MODE_WEBCOMIC')}
          icon="spacing-vertical"
        ></segmented-control-option>
        <segmented-control-option
          value="FluidLTR"
          label=${getLocaleString('VIEW_MODE_LEFT')}
          icon="arrow-autofit-right"
        ></segmented-control-option>
        <segmented-control-option
          value="FluidRTL"
          label=${getLocaleString('VIEW_MODE_RIGHT')}
          icon="arrow-autofit-left"
        ></segmented-control-option>
      </segmented-control>
    </div>
  `;
}

/**
 * Renders the zoom and view settings panel by combining all the individual setting controls.
 * @returns The Lit template for the entire zoom settings panel.
 */
export default () =>
  html`${defaultZoomMode()} ${zoomValue()} ${minZoom()} ${zoomStep()} ${viewMode()}`;
