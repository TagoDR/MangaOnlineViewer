import { icon, settings } from '../settings';
import { IconMenu2 } from './icons.js';

const imageOptions = `<div id='ImageOptions'>
  <div id='menu'>
    ${IconMenu2}
  </div>
  <div id='GlobalFunctions' class=''>
    <button id='enlarge' title='Enlarge' class='ControlButton' ><img alt='Enlarge' src='${icon.enlarge}' /></button>
    <button id='restore' title='Restore' class='ControlButton'><img alt='Restore' src='${icon.restore}' /></button>
    <button id='reduce' title='Reduce' class='ControlButton'><img alt='Reduce' src='${icon.reduce}' /></button>
    <button id='fitWidth' title='Fit Width' class='ControlButton'><img alt='Fit Width' src='${icon.fitWidth}' /></button>
    <button id='fitHeight' title='Fit Height' class='ControlButton'><img alt='Fit Height' src='${icon.fitHeight}' /></button>
    <button id='webComic' title='Web Comic Mode' class='ControlButton'><img alt='Web Comic Mode' src='${icon.webComic}' /></button>
    <button id='ltrMode' title='Left to Right Mode' class='ControlButton'><img alt='Left to Right Mode' src='${icon.pictureLeft}' /></button>
    <button id='verticalMode' title='Vertical Mode' class='ControlButton'><img alt='Vertical Mode' src='${icon.pictureDown}' /></button>
    <button id='rtlMode' title='Right to Left Mode' class='ControlButton'><img alt='Right to Left Mode' src='${icon.pictureRight}' /></button>
    <button id='pageControls' title='Toggle Page Controls' class='ControlButton'><img alt='Toggle Page Controls' src='${icon.controls}' /></button>
    <button id='settings' title='Settings' class='ControlButton'><img alt='Settings' src='${icon.settings}' /></button>
  </div>
  <div id='Zoom' class='ControlLabel'>Zoom: <b id='ZoomPercent'>${settings.zoom}</b> %</div>
</div>`;
export default imageOptions;
