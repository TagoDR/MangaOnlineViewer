import { themesSelector } from '../themes';
import { settings } from '../settings';

const controls = `<div id='ViewerControls' class='panel'>
  <div class='ControlLabel ThemeSelector'>Theme:
    <select id='ThemeSelector'>
      ${themesSelector}
    </select>
      <div class='CustomTheme ControlLabelItem ${
        settings.theme === 'Custom_Dark' || settings.theme === 'Custom_Light' ? 'show' : ''
      }'>
        -Base:<input id='CustomThemeHue' type='color' value='${
          settings.customTheme
        }' class='colorpicker CustomTheme'>
      </div>
      <div class='FullCustom ControlLabelItem ${settings.theme === 'Full_Custom' ? 'show' : ''}' >
        -Body:<input id='CustomThemeHueBody' type='color' value='${
          settings.customThemeBody
        }' class='colorpicker FullCustom'>
      </div>
      <div class='FullCustom ControlLabelItem ${settings.theme === 'Full_Custom' ? 'show' : ''}' >
        -Text:<input id='CustomThemeHueText' type='color' value=${
          settings.customThemeText
        }' class='colorpicker FullCustom'>
      </div>
      <div class='FullCustom ControlLabelItem ${settings.theme === 'Full_Custom' ? 'show' : ''}' >
        -Lines:<input id='CustomThemeHueLines' type='color' value='${
          settings.customThemeLines
        }' class='colorpicker FullCustom'>
      </div>
      <div class='FullCustom ControlLabelItem ${settings.theme === 'Full_Custom' ? 'show' : ''}'>
        -Painels:
        <input id='CustomThemeHuePanel' type='color' value='${
          settings.customThemePanel
        }' class='colorpicker FullCustom'>
      </div>
      <div class='FullCustom ControlLabelItem ${settings.theme === 'Full_Custom' ? 'show' : ''}'>
        -Buttons:
        <input id='CustomThemeHueButton' type='color' value='${
          settings.customThemeButton
        }' class='colorpicker FullCustom'>
      </div>
  </div>
  <div class='ControlLabel loadMode'>Default Load Mode:
    <select id='loadMode'>
      <option value='wait' ${
        settings.loadMode === 'wait' ? 'selected' : ''
      }>Normal(Wait 3 sec)</option>
      <option value='always' ${
        settings.loadMode === 'always' ? 'selected' : ''
      }>Always(Immediately)</option>
      <option value='never' ${
        settings.loadMode === 'never' ? 'selected' : ''
      }>Never(Manually)</option>
    </select>
  </div>
  <div class='ControlLabel PagesPerSecond'>Pages/Second:
    <select id='PagesPerSecond'>
      <option value='3000' ${
        settings.throttlePageLoad === 3000 ? 'selected' : ''
      }>0.3(Slow)</option>
      <option value='2000' ${settings.throttlePageLoad === 2000 ? 'selected' : ''}>0.5</option>
      <option value='1000' ${
        settings.throttlePageLoad === 1000 ? 'selected' : ''
      }>01(Normal)</option>
      <option value='500' ${settings.throttlePageLoad === 500 ? 'selected' : ''}>02</option>
      <option value='250' ${settings.throttlePageLoad === 250 ? 'selected' : ''}>04(Fast)</option>
      <option value='125' ${settings.throttlePageLoad === 125 ? 'selected' : ''}>08</option>
      <option value='100' ${
        settings.throttlePageLoad === 100 ? 'selected' : ''
      }>10(Extreme)</option>
    </select>
  </div>
  <div class='ControlLabel DefaultZoom'>Default Zoom:
    <select id='DefaultZoom'>
      <option value='50' ${settings.zoom === 50 ? 'selected' : ''}>50%</option>
      <option value='75' ${settings.zoom === 75 ? 'selected' : ''}>75%</option>
      <option value='100' ${settings.zoom === 100 ? 'selected' : ''}>100%</option>
      <option value='125' ${settings.zoom === 125 ? 'selected' : ''}>125%</option>
      <option value='150' ${settings.zoom === 150 ? 'selected' : ''}>150%</option>
      <option value='175' ${settings.zoom === 175 ? 'selected' : ''}>175%</option>
      <option value='200' ${settings.zoom === 200 ? 'selected' : ''}>200%</option>
      <option value='1000' ${settings.zoom === 1000 ? 'selected' : ''}>Fit Width</option>
      <option value='-1000' ${settings.zoom === -1000 ? 'selected' : ''}>Fit Height</option>
    </select>
  </div>
  <div class='ControlLabel zoomStep'>Zoom Change Step (between 5 and 50):<output id='zoomStepVal'>${
    settings.zoomStep
  }</output>
    <input type='range' value='${
      settings.zoomStep
    }' name='zoomStep' id='zoomStep' min='5' max='50' step='5' oninput='zoomStepVal.value = this.value'>
    
  </div>
  <div class='ControlLabel viewMode'>Default View Mode:
    <select id='viewMode'>
      <option value='' ${settings.viewMode === '' ? 'selected' : ''}>Vertical</option>
      <option value='WebComic' ${
        settings.viewMode === 'WebComic' ? 'selected' : ''
      }>WebComic</option>
      <option value='FluidLTR' ${
        settings.viewMode === 'FluidLTR' ? 'selected' : ''
      }>Left to Right</option>
      <option value='FluidRTL' ${
        settings.viewMode === 'FluidRTL' ? 'selected' : ''
      }>Right to Left</option>
    </select>
  </div>
  <div class='ControlLabel fitIfOversize'>Fit Width if Oversize:
    <input type='checkbox' value='true' name='fitIfOversize' id='fitIfOversize' ${
      settings.fitWidthIfOversize ? 'checked' : ''
    }>
  </div>
  <div class='ControlLabel showThumbnails'>Show Thumbnails:
    <input type='checkbox' value='true' name='showThumbnails' id='showThumbnails' ${
      settings.showThumbnails ? 'checked' : ''
    }>
   </div>
   <div class='ControlLabel lazyLoadImages'>Lazy Load Images:
    <input type='checkbox' value='true' name='lazyLoadImages' id='lazyLoadImages' ${
      settings.lazyLoadImages ? 'checked' : ''
    }>
   </div>
   <div class='ControlLabel lazyStart'>Lazy Start From Page (between 5 and 100):
   <output id='lazyStartVal'>${settings.lazyStart}</output>
    <input type='range' value='${
      settings.lazyStart
    }' name='lazyStart' id='lazyStart' min='5' max='100' step='5' oninput='lazyStartVal.value = this.value'>
    
  </div>
  <div class='ControlLabel downloadZip'>Download Images as Zip Automatically:
    <input type='checkbox' value='false' name='downloadZip' id='downloadZip' ${
      settings.downloadZip ? 'checked' : ''
    }>
  </div>
  <div class='ControlLabel hidePageControls'>Always Hide Page Controls:
    <input type='checkbox' value='false' name='hidePageControls' id='hidePageControls' ${
      settings.hidePageControls ? 'checked' : ''
    }>
  </div>
  <div class='ControlLabel mouseOverMenu'>Toggle Sticky Header / MouseOverMenu:
    <input type='checkbox' value='false' name='mouseOverMenu' id='mouseOverMenu' ${
      settings.mouseOverMenu ? 'checked' : ''
    }>
  </div>
</div>`;
export default controls;
