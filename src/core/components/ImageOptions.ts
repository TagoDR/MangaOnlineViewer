import { icon, settings } from '../settings';

const imageOptions = `<div id='ImageOptions'>
  <div id='menu'>
    <div class="hamburger-lines">
      <span class="line line1"></span>
      <span class="line line2"></span>
      <span class="line line3"></span>
    </div>
<!--    <span class='menuOuterArrow'><span class='menuInnerArrow'></span></span>-->
  </div>
  <div class='panel'>
    <img id='enlarge' alt='Enlarge' title='Enlarge' src='${icon.enlarge}' class='ControlButton' />
    <img id='restore' alt='Restore' title='Restore' src='${icon.restore}' class='ControlButton' />
    <img id='reduce' alt='Reduce' title='Reduce' src='${icon.reduce}' class='ControlButton' />
    <img id='fitWidth' alt='Fit Width' title='Fit Width' src='${icon.fitWidth}' class='ControlButton' />
    <img id='fitHeight' alt='Fit Height' title='Fit Height' src='${icon.fitHeight}' class='ControlButton' />
    <img id='webComic' alt='Web Comic Mode' title='Web Comic Mode' src='${icon.webComic}' class='ControlButton' />
    <img id='ltrMode' alt='Left to Right Mode' title='Left to Right Mode' src='${icon.pictureLeft}' class='ControlButton'/>
    <img id='verticalMode' alt='Vertical Mode' title='Vertical Mode' src='${icon.pictureDown}' class='ControlButton'/>
    <img id='rtlMode' alt='Right to Left Mode' title='Right to Left Mode' src='${icon.pictureRight}' class='ControlButton'/>
    <img id='pageControls' alt='Toggle Page Controls' title='Toggle Page Controls' src='${icon.controls}' class='ControlButton'/>
    <img id='settings' alt='settings' title='settings' src='${icon.settings}' class='ControlButton' />
  </div>
  <div id='Zoom' class='ControlLabel'>Zoom: <b id='ZoomPercent'>${settings.zoom}</b> %</div>
</div>`;
export default imageOptions;
