import { html } from '../../utils/code-tag';
import { getLocaleString, getSettingsValue, isSettingsLocal } from '../../core/settings';
import {
  IconCheck,
  IconLocationCog,
  IconMoon,
  IconPalette,
  IconSettingsOff,
  IconSun,
  IconWorldCog,
  IconX,
} from '../icons';
import locales from '../../locales';
import colors from '../../utils/colors';

const localeSelector = () =>
  locales
    .map(
      locale => html`
        <option value="${locale.ID}" ${getSettingsValue('locale') === locale.ID ? 'selected' : ''}>
          ${locale.NAME}
        </option>
      `,
    )
    .join('');

const themesSelector = () =>
  [...Object.keys(colors).map(color => colors[color].name)]
    .map(
      theme => html`
        <span
          title="${theme}"
          class="${theme} ThemeRadio ${getSettingsValue('theme') === theme ? 'selected' : ''}"
        >
          ${IconCheck}
        </span>
      `,
    )
    .join('');

const settingsScope = () =>
  html` <div class="ControlLabel">
    ${getLocaleString('SCOPE')}
    <div id="SettingsScope" class="radio-inputs">
      <label class="radio">
        <input
          type="radio"
          id="globalSettings"
          name="settingsScope"
          ${!isSettingsLocal() ? 'checked' : ''}
          value="false"
        />
        <span class="name">${IconWorldCog} ${getLocaleString('GLOBAL')}</span>
      </label>
      <label class="radio">
        <input
          type="radio"
          id="localSettings"
          name="settingsScope"
          ${isSettingsLocal() ? 'checked' : ''}
          value="true"
        />
        <span class="name">${IconLocationCog} ${window.location.hostname}</span>
      </label>
    </div>
  </div>`;

const language = () =>
  html` <div class="ControlLabel locale">
    ${getLocaleString('LANGUAGE')}
    <select id="locale">
      ${localeSelector()}
    </select>
  </div>`;

const theme = () => html`
  <div class="ControlLabel ColorSchemeSelector">
    <label>${getLocaleString('COLOR_SCHEME')}</label>
    <button id="ColorScheme" class="ControlButton">${IconSun} ${IconMoon}</button>
  </div>
  <div class="ControlLabel ThemeSelector">
    <label>${getLocaleString('THEME_COLOR')}</label>
    <span
      class="custom ThemeRadio 
        ${getSettingsValue('theme') === 'custom' ? 'selected' : ''}"
      title="custom"
    >
      ${IconPalette} ${IconCheck}
    </span>
    ${themesSelector()}
  </div>
  <div
    id="Hue"
    class="ControlLabel CustomTheme ControlLabelItem 
      ${getSettingsValue('theme').startsWith('custom') ? 'show' : ''}"
  >
    <label>${getLocaleString('THEME_HUE')}</label>
    <input
      id="CustomThemeHue"
      type="color"
      value="${getSettingsValue('customTheme')}"
      class="colorpicker CustomTheme"
    />
  </div>
  <div
    id="Shade"
    class="ControlLabel CustomTheme ControlLabelItem
      ${getSettingsValue('theme').startsWith('custom') ? '' : 'show'}"
  >
    <span>
      <label>${getLocaleString('THEME_SHADE')}</label>
      <output id="themeShadeVal" class="RangeValue" for="ThemeShade">
        ${getSettingsValue('themeShade')}
      </output>
    </span>
    <input
      type="range"
      value="${getSettingsValue('themeShade')}"
      name="ThemeShade"
      id="ThemeShade"
      min="100"
      max="900"
      step="100"
      oninput="themeShadeVal.value = this.value"
    />
  </div>
`;

const loadMode = () => html`
  <div class="ControlLabel loadMode">
    ${getLocaleString('DEFAULT_LOAD_MODE')}
    <select id="loadMode">
      <option value="wait" ${getSettingsValue('loadMode') === 'wait' ? 'selected' : ''}>
        ${getLocaleString('LOAD_MODE_NORMAL')}
      </option>
      <option value="always" ${getSettingsValue('loadMode') === 'always' ? 'selected' : ''}>
        ${getLocaleString('LOAD_MODE_ALWAYS')}
      </option>
      <option value="never" ${getSettingsValue('loadMode') === 'never' ? 'selected' : ''}>
        ${getLocaleString('LOAD_MODE_NEVER')}
      </option>
    </select>
  </div>
`;

const loadSpeed = () => html`
  <div class="ControlLabel PagesPerSecond">
    ${getLocaleString('LOAD_SPEED')}
    <select id="PagesPerSecond">
      <option value="3000" ${getSettingsValue('throttlePageLoad') === 3000 ? 'selected' : ''}>
        0.3(${getLocaleString('SLOWLY')})
      </option>
      <option value="2000" ${getSettingsValue('throttlePageLoad') === 2000 ? 'selected' : ''}>
        0.5
      </option>
      <option value="1000" ${getSettingsValue('throttlePageLoad') === 1000 ? 'selected' : ''}>
        01(${getLocaleString('NORMAL')})
      </option>
      <option value="500" ${getSettingsValue('throttlePageLoad') === 500 ? 'selected' : ''}>
        02
      </option>
      <option value="250" ${getSettingsValue('throttlePageLoad') === 250 ? 'selected' : ''}>
        04(${getLocaleString('FAST')})
      </option>
      <option value="125" ${getSettingsValue('throttlePageLoad') === 125 ? 'selected' : ''}>
        08
      </option>
      <option value="100" ${getSettingsValue('throttlePageLoad') === 100 ? 'selected' : ''}>
        10(${getLocaleString('EXTREME')})
      </option>
      <option value="1" ${getSettingsValue('throttlePageLoad') === 1 ? 'selected' : ''}>
        ${getLocaleString('ALL_PAGES')}
      </option>
    </select>
  </div>
`;

const defaultZoomMode = () =>
  html` <div class="ControlLabel DefaultZoomMode">
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
const defaultZoom = () => html`
  <div
    class="ControlLabel DefaultZoom ControlLabelItem
  ${getSettingsValue('zoomMode') === 'percent' ? 'show' : ''}"
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

const minZoom = () => html`
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

const zoomStep = () => html`
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

const viewMode = () => html`
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

const lazyLoad = () => html`
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

const headerType = () => html`
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

function toggler(name: string, checked: boolean = false) {
  return html`
    <div class="toggler">
      <input id="${name}" name="${name}" type="checkbox" value="true" ${checked ? 'checked' : ''} />
      <label for="${name}"> ${IconCheck} ${IconX} </label>
    </div>
  `;
}

const checkboxOptions = () => html`
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
  <div class="ControlLabel lazyLoadImages">
    ${getLocaleString('LAZY_LOAD_IMAGES_ENABLE')}
    ${toggler('lazyLoadImages', getSettingsValue('lazyLoadImages'))}
  </div>
  ${lazyLoad()}
  <div class="ControlLabel downloadZip">
    ${getLocaleString('DOWNLOAD_IMAGES')} ${toggler('downloadZip', getSettingsValue('downloadZip'))}
  </div>
  <div class="ControlLabel hidePageControls">
    ${getLocaleString('HIDE_CONTROLS')}
    ${toggler('hidePageControls', getSettingsValue('hidePageControls'))}
  </div>
`;

const autoScroll = () => html`
  <div class="ControlLabel autoScroll">
    <span>
      ${getLocaleString('AUTO_SCROLL_HEIGHT')}
      <output id="scrollHeightVal" for="scrollHeight"> ${getSettingsValue('scrollHeight')} </output
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

const SettingsPanel = () => html`
  <div id="SettingsPanel" class="panel">
    <h2>${getLocaleString('SETTINGS')}</h2>
    <button id="CloseSettings" class="closeButton" title="${getLocaleString('CLOSE')}">
      ${IconX}
    </button>
    <button id="ResetSettings" class="ControlButton">
      ${IconSettingsOff} ${getLocaleString('BUTTON_RESET_SETTINGS')}
    </button>
    <fieldset>
      <legend>${getLocaleString('GENERAL')}</legend>
      ${settingsScope()} ${language()}
    </fieldset>
    <fieldset>
      <legend>${getLocaleString('THEME')}</legend>
      ${theme()}
    </fieldset>
    <fieldset>
      <legend>${getLocaleString('LOADING')}</legend>
      ${loadMode()} ${loadSpeed()}
    </fieldset>
    <fieldset>
      <legend>${getLocaleString('ZOOM')}</legend>
      ${defaultZoomMode()} ${defaultZoom()} ${minZoom()} ${zoomStep()} ${viewMode()}
    </fieldset>
    <fieldset>
      <legend>${getLocaleString('OTHERS')}</legend>
      ${checkboxOptions()} ${headerType()} ${autoScroll()}
    </fieldset>
  </div>
`;

export default SettingsPanel;
