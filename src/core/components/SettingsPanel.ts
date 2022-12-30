import { themesSelector } from '../themes';
import { getLocaleString, useSettings } from '../settings';
import { IconCheck, IconMoon, IconPalette, IconSun, IconX } from './icons';
import locales from '../../locales';

const localeSelector = locales.map(
  (locale) =>
    `<option value='${locale.ID}' ${useSettings().locale === locale.ID ? 'selected' : ''}>${
      locale.NAME
    }</option>`,
);

// language=html
const SettingsPanel = `
  <div id='SettingsOverlay' class='overlay'></div>
  <div id='SettingsPanel' class='panel'>
    <h2>${getLocaleString('SETTINGS')}</h2>
    <button id='CloseSettings' class='closeButton' title='${getLocaleString('CLOSE')}'>
      ${IconX}
    </button>
    <button id='ResetSettings' class='simpleButton'>
      ${getLocaleString('BUTTON_RESET_SETTINGS')}
    </button>
    <!-- =========================================================================================== -->
    <div class='ControlLabel locale'>${getLocaleString('LANGUAGE')}:
      <select id='locale'>
        ${localeSelector.join('')}
      </select>
    </div>
    <!-- =========================================================================================== -->
    <div id='ThemeSection'>
      <div class='ControlLabel ColorSchemeSelector'>${getLocaleString('COLOR_SCHEME')}:
        <button id='ColorScheme' class='simpleButton'>
          ${IconSun}
          ${IconMoon}
        </button>
      </div>
      <!-- =========================================================================================== -->
      <div class='ControlLabel ThemeSelector'>${getLocaleString('THEME')}:
        <span class='custom ThemeRadio 
            ${useSettings().theme === 'custom' ? 'selected' : ''}'
              title='custom'>
        ${IconPalette}
        ${IconCheck}
      </span>
        ${themesSelector.join('')}
      </div>
      <!-- =========================================================================================== -->
      <div id='Hue' class='ControlLabel CustomTheme ControlLabelItem 
          ${useSettings().theme.startsWith('custom') ? 'show' : ''}'>
        ${getLocaleString('THEME_HUE')}:
        <input id='CustomThemeHue' type='color' value='${useSettings().customTheme}'
               class='colorpicker CustomTheme' />
      </div>
      <!-- =========================================================================================== -->
      <div id='Shade' class='ControlLabel CustomTheme ControlLabelItem
          ${useSettings().theme.startsWith('custom') ? '' : 'show'}'>
      <span>
        ${getLocaleString('THEME_SHADE')}:
        <output id='themeShadeVal' class='RangeValue' for='themeShade'>${
          useSettings().themeShade
        }</output>
      </span>
        <input type='range'
               value='${useSettings().themeShade}'
               name='ThemeShade'
               id='ThemeShade'
               min='100'
               max='900'
               step='100'
               oninput='themeShadeVal.value = this.value'
        />
      </div>
    </div>
    <!-- =========================================================================================== -->
    <div class='ControlLabel loadMode'>${getLocaleString('DEFAULT_LOAD_MODE')}:
      <select id='loadMode'>
        <option value='wait' ${useSettings().loadMode === 'wait' ? 'selected' : ''}>
          ${getLocaleString('LOAD_MODE_NORMAL')}
        </option>
        <option value='always' ${useSettings().loadMode === 'always' ? 'selected' : ''}>
          ${getLocaleString('LOAD_MODE_ALWAYS')}
        </option>
        <option value='never' ${useSettings().loadMode === 'never' ? 'selected' : ''}>
          ${getLocaleString('LOAD_MODE_NEVER')}
        </option>
      </select>
    </div>
    <!-- =========================================================================================== -->
    <div class='ControlLabel PagesPerSecond'>${getLocaleString('LOAD_SPEED')}:
      <select id='PagesPerSecond'>
        <option value='3000' ${useSettings().throttlePageLoad === 3000 ? 'selected' : ''}>
            0.3(${getLocaleString('SLOWLY')})
        </option>
        <option value='2000' ${useSettings().throttlePageLoad === 2000 ? 'selected' : ''}>
          0.5
        </option>
        <option value='1000' ${useSettings().throttlePageLoad === 1000 ? 'selected' : ''}>
            01(${getLocaleString('NORMAL')})
        </option>
        <option value='500' ${useSettings().throttlePageLoad === 500 ? 'selected' : ''}>
          02
        </option>
        <option value='250' ${useSettings().throttlePageLoad === 250 ? 'selected' : ''}>
            04(${getLocaleString('FAST')})
        </option>
        <option value='125' ${useSettings().throttlePageLoad === 125 ? 'selected' : ''}>
          08
        </option>
        <option value='100' ${useSettings().throttlePageLoad === 100 ? 'selected' : ''}>
            10(${getLocaleString('EXTREME')})
        </option>
      </select>
    </div>
    <!-- =========================================================================================== -->
    <div class='ControlLabel DefaultZoomMode'>
      ${getLocaleString('DEFAULT_ZOOM_MODE')}:
      <select id='DefaultZoomMode'>
        <option value='percent' ${useSettings().zoomMode === 'percent' ? 'selected' : ''}>
          ${getLocaleString('PERCENT')}
        </option>
        <option value='width' ${useSettings().zoomMode === 'width' ? 'selected' : ''}>
          ${getLocaleString('FIT_WIDTH')}
        </option>
        <option value='height' ${useSettings().zoomMode === 'height' ? 'selected' : ''}>
          ${getLocaleString('FIT_HEIGHT')}
        </option>
      </select>
    </div>
    <!-- =========================================================================================== -->
    <div class='ControlLabel DefaultZoom ControlLabelItem
        ${useSettings().zoomMode === 'percent' ? 'show' : ''}'>
      <span>
        ${getLocaleString('DEFAULT_ZOOM')}:
        <output id='defaultZoomVal'
                class='RangeValue'
                for='DefaultZoom'>
          ${useSettings().defaultZoom}%
        </output>
      </span>
      <input type='range'
             value='${useSettings().defaultZoom}'
             name='DefaultZoom'
             id='DefaultZoom'
             min='5'
             max='200'
             step='5'
             list='tickmarks'
             oninput='defaultZoomVal.value = this.value + "%"'
      />
      <datalist id='tickmarks'>
        <option value='5'>5</option>
        <option value='25'>25</option>
        <option value='50'>50</option>
        <option value='75'>75</option>
        <option value='100'>100</option>
        <option value='125'>125</option>
        <option value='150'>150</option>
        <option value='175'>175</option>
        <option value='200'>200</option>
      </datalist>
    </div>
    <!-- =========================================================================================== -->
    <div class='ControlLabel minZoom'>
    <span>
      ${getLocaleString('MINIMUM_ZOOM')}:
      <output id='minZoomVal' class='RangeValue' for='minZoom'>${useSettings().minZoom}%</output>
    </span>
      <input type='range'
             value='${useSettings().minZoom}'
             name='minZoom'
             id='minZoom'
             min='30'
             max='100'
             step='10'
             oninput='minZoomVal.value = this.value + "%"'
      />
    </div>
    <!-- =========================================================================================== -->
    <div class='ControlLabel zoomStep'>
    <span>
      ${getLocaleString('ZOOM_STEP')}:
      <output id='zoomStepVal' class='RangeValue' for='zoomStep'>${useSettings().zoomStep}%</output>
    </span>
      <input type='range'
             value='${useSettings().zoomStep}'
             name='zoomStep'
             id='zoomStep'
             min='5'
             max='50'
             step='5'
             oninput='zoomStepVal.value = this.value + "%"'
      />
    </div>
    <!-- =========================================================================================== -->
    <div class='ControlLabel viewMode'>${getLocaleString('DEFAULT_VIEW_MODE')}:
      <select id='viewMode'>
        <option value='Vertical' ${useSettings().viewMode === 'Vertical' ? 'selected' : ''}>
          ${getLocaleString('VIEW_MODE_VERTICAL')}
        </option>
        <option value='WebComic' ${useSettings().viewMode === 'WebComic' ? 'selected' : ''}>
          ${getLocaleString('VIEW_MODE_WEBCOMIC')}
        </option>
        <option value='FluidLTR' ${useSettings().viewMode === 'FluidLTR' ? 'selected' : ''}>
          ${getLocaleString('VIEW_MODE_LEFT')}
        </option>
        <option value='FluidRTL' ${useSettings().viewMode === 'FluidRTL' ? 'selected' : ''}>
          ${getLocaleString('VIEW_MODE_RIGHT')}
        </option>
      </select>
    </div>
    <!-- =========================================================================================== -->
    <div class='ControlLabel fitIfOversize'>${getLocaleString('FIT_WIDTH_OVERSIZED')}:
      <input type='checkbox' value='true' name='fitIfOversize' id='fitIfOversize' ${
        useSettings().fitWidthIfOversize ? 'checked' : ''
      } />
    </div>
    <!-- =========================================================================================== -->
    <div class='ControlLabel showThumbnails'>${getLocaleString('SHOW_THUMBNAILS')}:
      <input type='checkbox' value='true' name='showThumbnails' id='showThumbnails' ${
        useSettings().showThumbnails ? 'checked' : ''
      } />
    </div>
    <!-- =========================================================================================== -->
    <div class='ControlLabel lazyLoadImages'>${getLocaleString('LAZY_LOAD_IMAGES_ENABLE')}:
      <input type='checkbox' value='true' name='lazyLoadImages' id='lazyLoadImages' ${
        useSettings().lazyLoadImages ? 'checked' : ''
      } />
    </div>
    <!-- =========================================================================================== -->
    <div class='ControlLabel lazyStart ControlLabelItem
        ${useSettings().lazyLoadImages ? 'show' : ''}'
    '>
    <span>
      ${getLocaleString('LAZY_LOAD_IMAGES')}:
      <output id='lazyStartVal' for='lazyStart'>${useSettings().lazyStart}</output>
    </span>
    <input type='range' value='${
      useSettings().lazyStart
    }' name='lazyStart' id='lazyStart' min='5' max='100' step='5'
           oninput='lazyStartVal.value = this.value' />

  </div>
  <!-- =========================================================================================== -->
  <div class='ControlLabel downloadZip'>${getLocaleString('DOWNLOAD_IMAGES')}:
    <input type='checkbox' value='false' name='downloadZip' id='downloadZip' ${
      useSettings().downloadZip ? 'checked' : ''
    } />
  </div>
  <!-- =========================================================================================== -->
  <div class='ControlLabel hidePageControls'>${getLocaleString('HIDE_CONTROLS')}:
    <input type='checkbox' value='false' name='hidePageControls' id='hidePageControls' ${
      useSettings().hidePageControls ? 'checked' : ''
    } />
  </div>
  <!-- =========================================================================================== -->
  <div class='ControlLabel headerType'>${getLocaleString('HEADER_TYPE')}:
    <select id='headerType'>
      <option value='hover' ${useSettings().header === 'hover' ? 'selected' : ''}>
        ${getLocaleString('HEADER_HOVER')}
      </option>
      <option value='scroll' ${useSettings().header === 'scroll' ? 'selected' : ''}>
        ${getLocaleString('HEADER_SCROLL')}
      </option>
      <option value='click' ${useSettings().header === 'click' ? 'selected' : ''}>
        ${getLocaleString('HEADER_CLICK')}
      </option>
      <option value='fixed' ${useSettings().header === 'fixed' ? 'selected' : ''}>
        ${getLocaleString('HEADER_FIXED')}
      </option>
    </select>
  </div>
  </div>
`;
export default SettingsPanel;
