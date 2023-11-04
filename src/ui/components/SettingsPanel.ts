import { html } from '../../utils/code-tag';
import { getLocaleString, getUserSettings } from '../../core/settings';
import { IconCheck, IconMoon, IconPalette, IconSun, IconX } from '../icons';
import locales from '../../locales';
import colors from '../../utils/colors';

const localeSelector = () =>
  locales
    .map(
      (locale) =>
        html` <option
          value="${locale.ID}"
          ${getUserSettings().locale === locale.ID ? 'selected' : ''}
        >
          ${locale.NAME}
        </option>`,
    )
    .join('');

const themesSelector = () =>
  [...Object.keys(colors).map((color) => colors[color].name)]
    .map(
      (theme) =>
        html` <span
          title="${theme}"
          class="${theme} ThemeRadio ${getUserSettings().theme === theme ? 'selected' : ''}"
        >
          ${IconCheck}
        </span>`,
    )
    .join('');

const language = html` <div class="ControlLabel locale">
  ${getLocaleString('LANGUAGE')}
  <select id="locale">
    ${localeSelector()}
  </select>
</div>`;
const theme = html` <div id="ThemeSection">
  <div class="ControlLabel ColorSchemeSelector">
    ${getLocaleString('COLOR_SCHEME')}
    <button id="ColorScheme" class="simpleButton">${IconSun} ${IconMoon}</button>
  </div>
  <div class="ControlLabel ThemeSelector">
    ${getLocaleString('THEME')}
    <span
      class="custom ThemeRadio 
        ${getUserSettings().theme === 'custom' ? 'selected' : ''}"
      title="custom"
    >
      ${IconPalette} ${IconCheck}
    </span>
    ${themesSelector()}
  </div>
  <div
    id="Hue"
    class="ControlLabel CustomTheme ControlLabelItem 
      ${getUserSettings().theme.startsWith('custom') ? 'show' : ''}"
  >
    ${getLocaleString('THEME_HUE')}
    <input
      id="CustomThemeHue"
      type="color"
      value="${getUserSettings().customTheme}"
      class="colorpicker CustomTheme"
    />
  </div>
  <div
    id="Shade"
    class="ControlLabel CustomTheme ControlLabelItem
      ${getUserSettings().theme.startsWith('custom') ? '' : 'show'}"
  >
    <span>
      ${getLocaleString('THEME_SHADE')}
      <output id="themeShadeVal" class="RangeValue" for="ThemeShade">
        ${getUserSettings().themeShade}
      </output>
    </span>
    <input
      type="range"
      value="${getUserSettings().themeShade}"
      name="ThemeShade"
      id="ThemeShade"
      min="100"
      max="900"
      step="100"
      oninput="themeShadeVal.value = this.value"
    />
  </div>
</div>`;
const loadMode = html` <div class="ControlLabel loadMode">
  ${getLocaleString('DEFAULT_LOAD_MODE')}
  <select id="loadMode">
    <option value="wait" ${getUserSettings().loadMode === 'wait' ? 'selected' : ''}>
      ${getLocaleString('LOAD_MODE_NORMAL')}
    </option>
    <option value="always" ${getUserSettings().loadMode === 'always' ? 'selected' : ''}>
      ${getLocaleString('LOAD_MODE_ALWAYS')}
    </option>
    <option value="never" ${getUserSettings().loadMode === 'never' ? 'selected' : ''}>
      ${getLocaleString('LOAD_MODE_NEVER')}
    </option>
  </select>
</div>`;
const loadSpeed = html` <div class="ControlLabel PagesPerSecond">
  ${getLocaleString('LOAD_SPEED')}
  <select id="PagesPerSecond">
    <option value="3000" ${getUserSettings().throttlePageLoad === 3000 ? 'selected' : ''}>
      0.3(${getLocaleString('SLOWLY')})
    </option>
    <option value="2000" ${getUserSettings().throttlePageLoad === 2000 ? 'selected' : ''}>
      0.5
    </option>
    <option value="1000" ${getUserSettings().throttlePageLoad === 1000 ? 'selected' : ''}>
      01(${getLocaleString('NORMAL')})
    </option>
    <option value="500" ${getUserSettings().throttlePageLoad === 500 ? 'selected' : ''}>02</option>
    <option value="250" ${getUserSettings().throttlePageLoad === 250 ? 'selected' : ''}>
      04(${getLocaleString('FAST')})
    </option>
    <option value="125" ${getUserSettings().throttlePageLoad === 125 ? 'selected' : ''}>08</option>
    <option value="100" ${getUserSettings().throttlePageLoad === 100 ? 'selected' : ''}>
      10(${getLocaleString('EXTREME')})
    </option>
    <option value="1" ${getUserSettings().throttlePageLoad === 1 ? 'selected' : ''}>
      ${getLocaleString('ALL_PAGES')}
    </option>
  </select>
</div>`;
const defaultZoomMode = html` <div class="ControlLabel DefaultZoomMode">
  ${getLocaleString('DEFAULT_ZOOM_MODE')}
  <select id="DefaultZoomMode">
    <option value="percent" ${getUserSettings().zoomMode === 'percent' ? 'selected' : ''}>
      ${getLocaleString('PERCENT')}
    </option>
    <option value="width" ${getUserSettings().zoomMode === 'width' ? 'selected' : ''}>
      ${getLocaleString('FIT_WIDTH')}
    </option>
    <option value="height" ${getUserSettings().zoomMode === 'height' ? 'selected' : ''}>
      ${getLocaleString('FIT_HEIGHT')}
    </option>
  </select>
</div>`;
const defaultZoom = html` <div
  class="ControlLabel DefaultZoom ControlLabelItem
  ${getUserSettings().zoomMode === 'percent' ? 'show' : ''}"
>
  <span>
    ${getLocaleString('DEFAULT_ZOOM')}
    <output id="defaultZoomVal" class="RangeValue" for="DefaultZoom">
      ${getUserSettings().defaultZoom}%
    </output>
  </span>
  <input
    type="range"
    value="${getUserSettings().defaultZoom}"
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
</div>`;
const minZoom = html` <div class="ControlLabel minZoom">
  <span>
    ${getLocaleString('MINIMUM_ZOOM')}
    <output id="minZoomVal" class="RangeValue" for="minZoom">
      ${getUserSettings().minZoom}%
    </output>
  </span>
  <input
    type="range"
    value="${getUserSettings().minZoom}"
    name="minZoom"
    id="minZoom"
    min="30"
    max="100"
    step="10"
    oninput='minZoomVal.value = this.value + "%"'
  />
</div>`;
const zoomStep = html` <div class="ControlLabel zoomStep">
  <span>
    ${getLocaleString('ZOOM_STEP')}
    <output id="zoomStepVal" class="RangeValue" for="zoomStep">
      ${getUserSettings().zoomStep}%
    </output>
  </span>
  <input
    type="range"
    value="${getUserSettings().zoomStep}"
    name="zoomStep"
    id="zoomStep"
    min="5"
    max="50"
    step="5"
    oninput='zoomStepVal.value = this.value + "%"'
  />
</div>`;
const viewMode = html` <div class="ControlLabel viewMode">
  ${getLocaleString('DEFAULT_VIEW_MODE')}
  <select id="viewMode">
    <option value="Vertical" ${getUserSettings().viewMode === 'Vertical' ? 'selected' : ''}>
      ${getLocaleString('VIEW_MODE_VERTICAL')}
    </option>
    <option value="WebComic" ${getUserSettings().viewMode === 'WebComic' ? 'selected' : ''}>
      ${getLocaleString('VIEW_MODE_WEBCOMIC')}
    </option>
    <option value="FluidLTR" ${getUserSettings().viewMode === 'FluidLTR' ? 'selected' : ''}>
      ${getLocaleString('VIEW_MODE_LEFT')}
    </option>
    <option value="FluidRTL" ${getUserSettings().viewMode === 'FluidRTL' ? 'selected' : ''}>
      ${getLocaleString('VIEW_MODE_RIGHT')}
    </option>
  </select>
</div>`;
const lazyLoad = html` <div
  class="ControlLabel lazyStart ControlLabelItem
    ${getUserSettings().lazyLoadImages ? 'show' : ''}"
>
  <span>
    ${getLocaleString('LAZY_LOAD_IMAGES')}
    <output id="lazyStartVal" for="lazyStart"> ${getUserSettings().lazyStart} </output>
  </span>
  <input
    type="range"
    value="${getUserSettings().lazyStart}"
    name="lazyStart"
    id="lazyStart"
    min="5"
    max="100"
    step="5"
    oninput="lazyStartVal.value = this.value"
  />
</div>`;
const headerType = html` <div class="ControlLabel headerType">
  ${getLocaleString('HEADER_TYPE')}
  <select id="headerType">
    <option value="hover" ${getUserSettings().header === 'hover' ? 'selected' : ''}>
      ${getLocaleString('HEADER_HOVER')}
    </option>
    <option value="scroll" ${getUserSettings().header === 'scroll' ? 'selected' : ''}>
      ${getLocaleString('HEADER_SCROLL')}
    </option>
    <option value="click" ${getUserSettings().header === 'click' ? 'selected' : ''}>
      ${getLocaleString('HEADER_CLICK')}
    </option>
    <option value="fixed" ${getUserSettings().header === 'fixed' ? 'selected' : ''}>
      ${getLocaleString('HEADER_FIXED')}
    </option>
  </select>
</div>`;
const checkboxOptions = html` <div class="ControlLabel fitIfOversize">
    ${getLocaleString('FIT_WIDTH_OVERSIZED')}
    <input
      type="checkbox"
      value="true"
      name="fitIfOversize"
      id="fitIfOversize"
      ${getUserSettings().fitWidthIfOversize ? 'checked' : ''}
    />
  </div>
  <div class="ControlLabel showThumbnails">
    ${getLocaleString('SHOW_THUMBNAILS')}
    <input
      type="checkbox"
      value="true"
      name="showThumbnails"
      id="showThumbnails"
      ${getUserSettings().showThumbnails ? 'checked' : ''}
    />
  </div>
  <div class="ControlLabel lazyLoadImages">
    ${getLocaleString('LAZY_LOAD_IMAGES_ENABLE')}
    <input
      type="checkbox"
      value="true"
      name="lazyLoadImages"
      id="lazyLoadImages"
      ${getUserSettings().lazyLoadImages ? 'checked' : ''}
    />
  </div>
  <div class="ControlLabel downloadZip">
    ${getLocaleString('DOWNLOAD_IMAGES')}
    <input
      type="checkbox"
      value="false"
      name="downloadZip"
      id="downloadZip"
      ${getUserSettings().downloadZip ? 'checked' : ''}
    />
  </div>
  <div class="ControlLabel hidePageControls">
    ${getLocaleString('HIDE_CONTROLS')}
    <input
      type="checkbox"
      value="false"
      name="hidePageControls"
      id="hidePageControls"
      ${getUserSettings().hidePageControls ? 'checked' : ''}
    />
  </div>`;
const SettingsPanel = () => html`
  <div id="SettingsPanel" class="panel">
    <h2>${getLocaleString('SETTINGS')}</h2>
    <button id="CloseSettings" class="closeButton" title="${getLocaleString('CLOSE')}">
      ${IconX}
    </button>
    <button id="ResetSettings" class="simpleButton">
      ${getLocaleString('BUTTON_RESET_SETTINGS')}
    </button>
    ${language} ${theme} ${loadMode} ${loadSpeed} ${defaultZoomMode} ${defaultZoom} ${minZoom}
    ${zoomStep} ${viewMode} ${checkboxOptions} ${headerType} ${lazyLoad}
  </div>
`;
export default SettingsPanel;
