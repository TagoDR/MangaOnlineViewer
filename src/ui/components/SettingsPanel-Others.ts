import { getLocaleString, getSettingsValue } from '../../core/settings';
import { html } from '../../utils/code-tag';
import toggler from './Toggler';

function checkboxOptions() {
  return html`
    <div class="ControlLabel verticalSeparator">
      ${getLocaleString('VERTICAL_SEPARATOR')}
      ${toggler('verticalSeparator', getSettingsValue('verticalSeparator'))}
    </div>
    <div class="ControlLabel fitIfOversize">
      ${getLocaleString('FIT_WIDTH_OVERSIZED')}
      ${toggler('fitIfOversize', getSettingsValue('fitWidthIfOversize'))}
    </div>
    <div class="ControlLabel showThumbnails">
      ${getLocaleString('SHOW_THUMBNAILS')}
      ${toggler('showThumbnails', getSettingsValue('showThumbnails'))}
    </div>
    <div class="ControlLabel enableComments">
      ${getLocaleString('ENABLE_COMMENTS')}
      ${toggler('enableComments', getSettingsValue('enableComments'))}
    </div>
    <div class="ControlLabel downloadZip">
      ${getLocaleString('DOWNLOAD_IMAGES')}
      ${toggler('downloadZip', getSettingsValue('downloadZip'))}
    </div>
    <div class="ControlLabel hidePageControls">
      ${getLocaleString('HIDE_CONTROLS')}
      ${toggler('hidePageControls', getSettingsValue('hidePageControls'))}
    </div>
    <div class="ControlLabel lazyLoadImages">
      ${getLocaleString('LAZY_LOAD_IMAGES_ENABLE')}
      ${toggler('lazyLoadImages', getSettingsValue('lazyLoadImages'))}
    </div>
  `;
}

function lazyLoad() {
  return html`
    <div
      class="ControlLabel lazyStart ControlLabelItem
    ${getSettingsValue('lazyLoadImages') ? 'show' : ''}"
    >
      <span>
        ${getLocaleString('LAZY_LOAD_IMAGES')}
        <output id="lazyStartVal" for="lazyStart"> ${getSettingsValue('lazyStart')} </output>
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
      />
    </div>
  `;
}

function headerType() {
  return html`
    <div class="ControlLabel headerType">
      ${getLocaleString('HEADER_TYPE')}
      <select id="headerType">
        <option value="hover" ${getSettingsValue('header') === 'hover' ? 'selected' : ''}>
          ${getLocaleString('HEADER_HOVER')}
        </option>
        <option value="scroll" ${getSettingsValue('header') === 'scroll' ? 'selected' : ''}>
          ${getLocaleString('HEADER_SCROLL')}
        </option>
        <option value="click" ${getSettingsValue('header') === 'click' ? 'selected' : ''}>
          ${getLocaleString('HEADER_CLICK')}
        </option>
        <option value="fixed" ${getSettingsValue('header') === 'fixed' ? 'selected' : ''}>
          ${getLocaleString('HEADER_FIXED')}
        </option>
        <option value="simple" ${getSettingsValue('header') === 'simple' ? 'selected' : ''}>
          ${getLocaleString('HEADER_SIMPLE')}
        </option>
      </select>
    </div>
  `;
}

function autoScroll() {
  return html`
    <div class="ControlLabel autoScroll">
      <span>
        ${getLocaleString('AUTO_SCROLL_HEIGHT')}
        <output id="scrollHeightVal" for="scrollHeight">
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
        oninput="scrollHeightVal.value = this.value"
      />
    </div>
  `;
}

export default () => checkboxOptions() + lazyLoad() + headerType() + autoScroll();
