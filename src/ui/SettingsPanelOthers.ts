import { html } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { getLocaleString, getSettingsValue } from '../core/settings.ts';
import {
  changeHeaderType,
  changeLazyStart,
  changeNavbarType,
  changeScrollHeight,
  checkAutoDownload,
  checkFitWidthOversize,
  checkHideImageControls,
  checkLazyLoad,
  checkPagination,
} from './events/options.ts';

function checkboxOptions() {
  return html`
    <div class="ControlLabel fitIfOversize">
      ${getLocaleString('FIT_WIDTH_OVERSIZED')}
      <toggle-switch
        name="fitIfOversize"
        ?checked=${getSettingsValue('fitWidthIfOversize')}
        @change=${checkFitWidthOversize}
      ></toggle-switch>
    </div>
    <div class="ControlLabel pagination">
      ${getLocaleString('ENABLE_PAGINATION')}
      <toggle-switch
        name="pagination"
        ?checked=${getSettingsValue('pagination')}
        @change=${checkPagination}
      ></toggle-switch>
    </div>
    <div class="ControlLabel downloadZip">
      ${getLocaleString('DOWNLOAD_IMAGES')}
      <toggle-switch
        name="downloadZip"
        ?checked=${getSettingsValue('downloadZip')}
        @change=${checkAutoDownload}
      ></toggle-switch>
    </div>
    <div class="ControlLabel hidePageControls">
      ${getLocaleString('HIDE_CONTROLS')}
      <toggle-switch
        name="hidePageControls"
        ?checked=${getSettingsValue('hidePageControls')}
        @change=${checkHideImageControls}
      ></toggle-switch>
    </div>
    <div class="ControlLabel lazyLoadImages">
      ${getLocaleString('LAZY_LOAD_IMAGES_ENABLE')}
      <toggle-switch
        name="lazyLoadImages"
        ?checked=${getSettingsValue('lazyLoadImages')}
        @change=${checkLazyLoad}
      ></toggle-switch>
    </div>
  `;
}

function lazyLoad() {
  return html`
    <div
      class="${classMap({
        ControlLabel: true,
        lazyStart: true,
        ControlLabelItem: true,
        show: getSettingsValue('lazyLoadImages'),
      })}"
    >
      <span>
        ${getLocaleString('LAZY_LOAD_IMAGES')}
        <output
          id="lazyStartVal"
          for="lazyStart"
        >
          ${getSettingsValue('lazyStart')}
        </output>
      </span>
      <input
        type="range"
        value="${getSettingsValue('lazyStart')}"
        name="lazyStart"
        id="lazyStart"
        min="5"
        max="100"
        step="5"
        oninput="lazyStartVal.value = this.value"
        @change="${changeLazyStart}"
      />
    </div>
  `;
}

function headerType() {
  return html`
    <div class="ControlLabel headerType">
      ${getLocaleString('HEADER_TYPE')}
      <segmented-control
        .value=${getSettingsValue('header')}
        @change=${changeHeaderType}
        labelPosition="bottom"
      >
        <segmented-control-option
          value="hover"
          label=${getLocaleString('HEADER_HOVER')}
          icon="arrows-move"
        ></segmented-control-option>
        <segmented-control-option
          value="scroll"
          label=${getLocaleString('HEADER_SCROLL')}
          icon="arrows-vertical"
        ></segmented-control-option>
        <segmented-control-option
          value="click"
          label=${getLocaleString('HEADER_CLICK')}
          icon="hand-click"
        ></segmented-control-option>
        <segmented-control-option
          value="fixed"
          label=${getLocaleString('HEADER_FIXED')}
          icon="pin"
        ></segmented-control-option>
        <segmented-control-option
          value="simple"
          label=${getLocaleString('HEADER_SIMPLE')}
          icon="box-align-top"
        ></segmented-control-option>
      </segmented-control>
    </div>
  `;
}

function navbarType() {
  return html`
    <div class="ControlLabel navbarType">
      ${getLocaleString('NAVBAR_TYPE')}
      <segmented-control
        .value=${getSettingsValue('navbar')}
        @change=${changeNavbarType}
        labelPosition="tooltip"
      >
        <segmented-control-option
          value="bottom"
          label=${getLocaleString('NAVBAR_BOTTOM')}
          icon="layout-bottombar"
        ></segmented-control-option>
        <segmented-control-option
          value="left"
          label=${getLocaleString('NAVBAR_LEFT')}
          icon="layout-sidebar"
        ></segmented-control-option>
        <segmented-control-option
          value="right"
          label=${getLocaleString('NAVBAR_RIGHT')}
          icon="layout-sidebar-right"
        ></segmented-control-option>
        <segmented-control-option
          value="disabled"
          label=${getLocaleString('NAVBAR_DISABLED')}
          icon="x"
        ></segmented-control-option>
      </segmented-control>
    </div>
  `;
}

function autoScroll() {
  return html`
    <div class="ControlLabel autoScroll">
      <span>
        ${getLocaleString('AUTO_SCROLL_HEIGHT')}
        <output
          id="scrollHeightVal"
          for="scrollHeight"
        >
          ${getSettingsValue('scrollHeight')} </output
        >px
      </span>
      <input
        type="range"
        value="${getSettingsValue('scrollHeight')}"
        name="scrollHeight"
        id="scrollHeight"
        min="1"
        max="${Math.ceil(window.innerHeight / 200) * 100}"
        step="1"
        @change="${changeScrollHeight}"
      />
    </div>
  `;
}

export default () =>
  html`${checkboxOptions()} ${lazyLoad()} ${headerType()} ${navbarType()} ${autoScroll()}`;
