import { html } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { getLocaleString, getSettingsValue } from '../core/settings.ts';
import {
  changeHeaderType,
  changeLazyStart,
  changeNavbarType,
  changeScrollHeight,
  checkAutoDownload,
  checkEnableComments,
  checkFitWidthOversize,
  checkHideImageControls,
  checkLazyLoad,
  checkPagination,
} from './events/options.ts';
import {
  IconArrowsMove,
  IconArrowsVertical,
  IconBoxAlignTop,
  IconHandClick,
  IconLayoutBottombar,
  IconLayoutSidebar,
  IconLayoutSidebarRight,
  IconPin,
  IconX,
} from './icons';

function checkboxOptions() {
  return html`
    <div class="ControlLabel fitIfOversize">
      ${getLocaleString('FIT_WIDTH_OVERSIZED')}
      <mov-toggle-switch
        name="fitIfOversize"
        ?checked=${getSettingsValue('fitWidthIfOversize')}
        .onChange=${checkFitWidthOversize}
      ></mov-toggle-switch>
    </div>
    <div class="ControlLabel pagination">
      ${getLocaleString('ENABLE_PAGINATION')}
      <mov-toggle-switch
        name="pagination"
        ?checked=${getSettingsValue('pagination')}
        .onChange=${checkPagination}
      ></mov-toggle-switch>
    </div>
    <div class="ControlLabel enableComments">
      ${getLocaleString('ENABLE_COMMENTS')}
      <mov-toggle-switch
        name="enableComments"
        ?checked=${getSettingsValue('enableComments')}
        .onChange=${checkEnableComments}
      ></mov-toggle-switch>
    </div>
    <div class="ControlLabel downloadZip">
      ${getLocaleString('DOWNLOAD_IMAGES')}
      <mov-toggle-switch
        name="downloadZip"
        ?checked=${getSettingsValue('downloadZip')}
        .onChange=${checkAutoDownload}
      ></mov-toggle-switch>
    </div>
    <div class="ControlLabel hidePageControls">
      ${getLocaleString('HIDE_CONTROLS')}
      <mov-toggle-switch
        name="hidePageControls"
        ?checked=${getSettingsValue('hidePageControls')}
        .onChange=${checkHideImageControls}
      ></mov-toggle-switch>
    </div>
    <div class="ControlLabel lazyLoadImages">
      ${getLocaleString('LAZY_LOAD_IMAGES_ENABLE')}
      <mov-toggle-switch
        name="lazyLoadImages"
        ?checked=${getSettingsValue('lazyLoadImages')}
        .onChange=${checkLazyLoad}
      ></mov-toggle-switch>
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
  const headerOptions = [
    { value: 'hover', label: getLocaleString('HEADER_HOVER'), icon: IconArrowsMove },
    { value: 'scroll', label: getLocaleString('HEADER_SCROLL'), icon: IconArrowsVertical },
    { value: 'click', label: getLocaleString('HEADER_CLICK'), icon: IconHandClick },
    { value: 'fixed', label: getLocaleString('HEADER_FIXED'), icon: IconPin },
    { value: 'simple', label: getLocaleString('HEADER_SIMPLE'), icon: IconBoxAlignTop },
  ];
  return html`
    <div class="ControlLabel headerType">
      ${getLocaleString('HEADER_TYPE')}
      <mov-segmented-control
        .options=${headerOptions}
        .value=${getSettingsValue('header')}
        @change=${changeHeaderType}
        labelPosition="bottom"
      ></mov-segmented-control>
    </div>
  `;
}

function navbarType() {
  const navbarOptions = [
    { value: 'bottom', label: getLocaleString('NAVBAR_BOTTOM'), icon: IconLayoutBottombar },
    { value: 'left', label: getLocaleString('NAVBAR_LEFT'), icon: IconLayoutSidebar },
    { value: 'right', label: getLocaleString('NAVBAR_RIGHT'), icon: IconLayoutSidebarRight },
    { value: 'disabled', label: getLocaleString('NAVBAR_DISABLED'), icon: IconX },
  ];
  return html`
    <div class="ControlLabel navbarType">
      ${getLocaleString('NAVBAR_TYPE')}
      <mov-segmented-control
        .options=${navbarOptions}
        .value=${getSettingsValue('navbar')}
        @change=${changeNavbarType}
        labelPosition="tooltip"
      ></mov-segmented-control>
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
        max="100"
        step="1"
        @change="${changeScrollHeight}"
      />
    </div>
  `;
}

export default () =>
  html`${checkboxOptions()} ${lazyLoad()} ${headerType()} ${navbarType()} ${autoScroll()}`;
