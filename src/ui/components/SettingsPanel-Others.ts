import { html } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { getLocaleString, getSettingsValue } from '../../core/settings';
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
} from '../events/options';
import { IconLayoutBottombar, IconLayoutSidebar, IconLayoutSidebarRight, IconX } from '../icons';
import toggler from './Toggler';

function checkboxOptions() {
  return html`
    <div class="ControlLabel fitIfOversize">
      ${getLocaleString('FIT_WIDTH_OVERSIZED')}
      ${toggler('fitIfOversize', getSettingsValue('fitWidthIfOversize'), checkFitWidthOversize)}
    </div>
    <div class="ControlLabel enableComments">
      ${getLocaleString('ENABLE_COMMENTS')}
      ${toggler('enableComments', getSettingsValue('enableComments'), checkEnableComments)}
    </div>
    <div class="ControlLabel downloadZip">
      ${getLocaleString('DOWNLOAD_IMAGES')}
      ${toggler('downloadZip', getSettingsValue('downloadZip'), checkAutoDownload)}
    </div>
    <div class="ControlLabel hidePageControls">
      ${getLocaleString('HIDE_CONTROLS')}
      ${toggler('hidePageControls', getSettingsValue('hidePageControls'), checkHideImageControls)}
    </div>
    <div class="ControlLabel lazyLoadImages">
      ${getLocaleString('LAZY_LOAD_IMAGES_ENABLE')}
      ${toggler('lazyLoadImages', getSettingsValue('lazyLoadImages'), checkLazyLoad)}
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
      <select
        id="headerType"
        @change="${changeHeaderType}"
      >
        <option
          value="hover"
          ?selected=${getSettingsValue('header') === 'hover'}
        >
          ${getLocaleString('HEADER_HOVER')}
        </option>
        <option
          value="scroll"
          ?selected=${getSettingsValue('header') === 'scroll'}
        >
          ${getLocaleString('HEADER_SCROLL')}
        </option>
        <option
          value="click"
          ?selected=${getSettingsValue('header') === 'click'}
        >
          ${getLocaleString('HEADER_CLICK')}
        </option>
        <option
          value="fixed"
          ?selected=${getSettingsValue('header') === 'fixed'}
        >
          ${getLocaleString('HEADER_FIXED')}
        </option>
        <option
          value="simple"
          ?selected=${getSettingsValue('header') === 'simple'}
        >
          ${getLocaleString('HEADER_SIMPLE')}
        </option>
      </select>
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
      <div class="radio-inputs">
        ${navbarOptions.map(
          option => html`
            <label class="radio">
              <input
                type="radio"
                name="navbarType"
                value=${option.value}
                ?checked=${getSettingsValue('navbar') === option.value}
                @change=${changeNavbarType}
              />
              <span class="name">${option.icon} ${option.label}</span>
              </span>
            </label>
          `,
        )}
      </div>
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
