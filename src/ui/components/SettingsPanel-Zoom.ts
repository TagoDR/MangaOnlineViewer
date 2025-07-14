import { getLocaleString, getSettingsValue } from '../../core/settings.ts';
import { html } from '../../utils/code-tag.ts';

function defaultZoomMode() {
  return html`
    <div class="ControlLabel DefaultZoomMode">
      ${getLocaleString('DEFAULT_ZOOM_MODE')}
      <select id="DefaultZoomMode">
        <option value="percent" ${getSettingsValue('zoomMode') === 'percent' ? 'selected' : ''}>
          ${getLocaleString('PERCENT')}
        </option>
        <option value="width" ${getSettingsValue('zoomMode') === 'width' ? 'selected' : ''}>
          ${getLocaleString('FIT_WIDTH')}
        </option>
        <option value="height" ${getSettingsValue('zoomMode') === 'height' ? 'selected' : ''}>
          ${getLocaleString('FIT_HEIGHT')}
        </option>
      </select>
    </div>`;
}

function defaultZoom() {
  return html`
    <div
      class="ControlLabel DefaultZoom ControlLabelItem ${
        getSettingsValue('zoomMode') === 'percent' ? 'show' : ''
      }"
    >
      <span>
        ${getLocaleString('DEFAULT_ZOOM')}
        <output id="defaultZoomVal" class="RangeValue" for="DefaultZoom">
          ${getSettingsValue('defaultZoom')}%
        </output>
      </span>
      <input
        type="range"
        value="${getSettingsValue('defaultZoom')}"
        name="DefaultZoom"
        id="DefaultZoom"
        min="5"
        max="200"
        step="5"
        list="tickmarks"
        oninput='defaultZoomVal.value = this.value + "%"'
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
        <output id="minZoomVal" class="RangeValue" for="minZoom">
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
      />
    </div>
  `;
}

function zoomStep() {
  return html`
    <div class="ControlLabel zoomStep">
      <span>
        ${getLocaleString('ZOOM_STEP')}
        <output id="zoomStepVal" class="RangeValue" for="zoomStep">
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
      />
    </div>
  `;
}

function viewMode() {
  return html`
    <div class="ControlLabel viewMode">
      ${getLocaleString('DEFAULT_VIEW_MODE')}
      <select id="viewMode">
        <option value="Vertical" ${getSettingsValue('viewMode') === 'Vertical' ? 'selected' : ''}>
          ${getLocaleString('VIEW_MODE_VERTICAL')}
        </option>
        <option value="WebComic" ${getSettingsValue('viewMode') === 'WebComic' ? 'selected' : ''}>
          ${getLocaleString('VIEW_MODE_WEBCOMIC')}
        </option>
        <option value="FluidLTR" ${getSettingsValue('viewMode') === 'FluidLTR' ? 'selected' : ''}>
          ${getLocaleString('VIEW_MODE_LEFT')}
        </option>
        <option value="FluidRTL" ${getSettingsValue('viewMode') === 'FluidRTL' ? 'selected' : ''}>
          ${getLocaleString('VIEW_MODE_RIGHT')}
        </option>
      </select>
    </div>
  `;
}

export default () => defaultZoomMode() + defaultZoom() + minZoom() + zoomStep() + viewMode();
