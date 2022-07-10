import settings from '../settings';
import {
  IconArrowAutofitDown,
  IconArrowAutofitHeight,
  IconArrowAutofitLeft,
  IconArrowAutofitRight,
  IconArrowAutofitWidth,
  IconBookmarks,
  IconKeyboard,
  IconListNumbers,
  IconMenu2,
  IconSettings,
  IconZoomInArea,
  IconZoomOutArea,
  IconZoomPan,
} from './icons.js';

const imageOptions = `<div id='ImageOptions'>
  <div id='menu'>
    ${IconMenu2}
  </div>
  <div id='GlobalFunctions' class=''>
    <button id='enlarge' title='Enlarge' class='ControlButton'>${IconZoomInArea}</button>
    <button id='restore' title='Restore' class='ControlButton'>${IconZoomPan}</button>
    <button id='reduce' title='Reduce' class='ControlButton'>${IconZoomOutArea}</button>
    <button id='fitWidth' title='Fit Width' class='ControlButton'>${IconArrowAutofitWidth}</button>
    <button id='fitHeight' title='Fit Height' class='ControlButton'>${IconArrowAutofitHeight}</button>
    <button id='keybindings' title='Keybindings' class='ControlButton'>${IconKeyboard}</button>
    <button id='ltrMode' title='Left to Right Mode' class='ControlButton'>${IconArrowAutofitRight}</button>
    <button id='verticalMode' title='Vertical Mode' class='ControlButton'>${IconArrowAutofitDown}</button>
    <button id='rtlMode' title='Right to Left Mode' class='ControlButton'>${IconArrowAutofitLeft}</button>
    <button id='pageControls' title='Toggle Page Controls' class='ControlButton'>${IconListNumbers}</button>
    <button id='bookmarks' title='List Bookmarks' class='ControlButton'>${IconBookmarks}</button>
    <button id='settings' title='Settings' class='ControlButton'>${IconSettings}</button>
  </div>
<!--  <div id='Zoom' class='ControlLabel'>Zoom: <b id='ZoomPercent'>${settings.zoom}</b> %</div>-->
</div>`;
export default imageOptions;
