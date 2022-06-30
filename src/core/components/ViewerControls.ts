import { themesSelector } from '../themes';
import { settings } from '../settings';

const controls = `<div id='ViewerControls' class='panel'>
  <span class='controlLabel ThemeSelector'>Theme:
    <select id='ThemeSelector'>
      ${themesSelector}
    </select>
      <span class='CustomTheme' ${
        settings.theme !== 'Custom_Dark' && settings.theme !== 'Custom_Light'
          ? 'style="display: none;"'
          : ''
      }><br/>-Base:<input id='CustomThemeHue' type='color' value='${
  settings.customTheme
}' class='colorpicker CustomTheme'></span>
      <span class='FullCustom' ${
        settings.theme !== 'Full_Custom' ? 'style="display: none;"' : ''
      }><br/>-Body:<input id='CustomThemeHueBody' type='color' value='${
  settings.customThemeBody
}' class='colorpicker FullCustom'></span>
      <span class='FullCustom' ${
        settings.theme !== 'Full_Custom' ? 'style="display: none;"' : ''
      }><br/>-Text:<input id='CustomThemeHueText' type='color' value=${
  settings.customThemeText
}' class='colorpicker FullCustom'></span>
      <span class='FullCustom' ${
        settings.theme !== 'Full_Custom' ? 'style="display: none;"' : ''
      }><br/>-Lines:<input id='CustomThemeHueLines' type='color' value='${
  settings.customThemeLines
}' class='colorpicker FullCustom'></span>
      <span class='FullCustom' ${
        settings.theme !== 'Full_Custom' ? 'style="display: none;"' : ''
      }><br/>-Painels:<input id='CustomThemeHuePanel' type='color' value='${
  settings.customThemePanel
}' class='colorpicker FullCustom'></span>
      <span class='FullCustom' ${
        settings.theme !== 'Full_Custom' ? 'style="display: none;"' : ''
      }><br/>-Buttons:<input id='CustomThemeHueButton' type='color' value='${
  settings.customThemeButton
}' class='colorpicker FullCustom'></span>
  </span>
  <span class='controlLabel loadMode'>Default Load Mode:
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
  </span>
  <span class='controlLabel PagesPerSecond'>Pages/Second:
    <select id='PagesPerSecond'>
      <option value='3000' ${settings.timer === 3000 ? 'selected' : ''}>0.3(Slow)</option>
      <option value='2000' ${settings.timer === 2000 ? 'selected' : ''}>0.5</option>
      <option value='1000' ${settings.timer === 1000 ? 'selected' : ''}>01(Normal)</option>
      <option value='500' ${settings.timer === 500 ? 'selected' : ''}>02</option>
      <option value='250' ${settings.timer === 250 ? 'selected' : ''}>04(Fast)</option>
      <option value='125' ${settings.timer === 125 ? 'selected' : ''}>08</option>
      <option value='100' ${settings.timer === 100 ? 'selected' : ''}>10(Extreme)</option>
    </select>
  </span>
  <span class='controlLabel DefaultZoom'>Default Zoom:
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
  </span>
  <span class='controlLabel zoomStep'>Zoom Change Step (between 5 and 50): <br/>
    <input type='range' value='${
      settings.zoomStep
    }' name='zoomStep' id='zoomStep' min='5' max='50' step='5' oninput='zoomStepVal.value = this.value'>
    <output id='zoomStepVal'>${settings.zoomStep}</output>
  </span>
  <span class='controlLabel viewMode'>Default View Mode:
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
  </span>
  <span class='controlLabel fitIfOversize'>Fit Width if Oversize:
    <input type='checkbox' value='true' name='fitIfOversize' id='fitIfOversize' ${
      settings.fitWidthIfOversize ? 'checked' : ''
    }>
  </span>
  <span class='controlLabel showThumbnails'>Show Thumbnails:
    <input type='checkbox' value='true' name='showThumbnails' id='showThumbnails' ${
      settings.showThumbnails ? 'checked' : ''
    }>
   </span>
   <span class='controlLabel lazyLoadImages'>Lazy Load Images:
    <input type='checkbox' value='true' name='lazyLoadImages' id='lazyLoadImages' ${
      settings.lazyLoadImages ? 'checked' : ''
    }>
   </span>
   <span class='controlLabel lazyStart'>Lazy Start From Page (between 5 and 100):<br/>
    <input type='range' value='${
      settings.lazyStart
    }' name='lazyStart' id='lazyStart' min='5' max='100' step='5' oninput='lazyStartVal.value = this.value'>
    <output id='lazyStartVal'>${settings.lazyStart}</output>
  </span>
  <span class='controlLabel downloadZip'>Download Images as Zip Automatically:
    <input type='checkbox' value='false' name='downloadZip' id='downloadZip' ${
      settings.downloadZip ? 'checked' : ''
    }>
  </span>
  <span class='controlLabel hidePageControls'>Always Hide Page Controls:
    <input type='checkbox' value='false' name='hidePageControls' id='hidePageControls' ${
      settings.hidePageControls ? 'checked' : ''
    }>
  </span>
</div>`;
export default controls;
