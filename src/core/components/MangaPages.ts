import sequence from '../../utils/sequence';
import {
  IconArrowAutofitHeight,
  IconArrowAutofitWidth,
  IconBookmark,
  IconBookmarkOff,
  IconEye,
  IconEyeOff,
  IconRefresh,
  IconZoomCancel,
  IconZoomIn,
  IconZoomOut,
} from './icons';
import { getLocaleString } from '../settings.js';

const listPages = (times: number, begin: number) =>
  sequence(times, begin).map(
    // language=html
    (index) => `
      <div id='Page${index}' class='MangaPage'>
        <div class='PageFunctions'>
          <button class='Bookmark ControlButton' title='${getLocaleString('BOOKMARK')}'>
            ${IconBookmark}
            ${IconBookmarkOff}
          </button>
          <button class='ZoomIn ControlButton' title='${getLocaleString('ZOOM_IN')}'>
            ${IconZoomIn}
          </button>
          <button class='ZoomRestore ControlButton' title='${getLocaleString('ZOOM_RESET')}'>
            ${IconZoomCancel}
          </button>
          <button class='ZoomOut ControlButton' title='${getLocaleString('ZOOM_OUT')}'>
            ${IconZoomOut}
          </button>
          <button class='ZoomWidth ControlButton' title='${getLocaleString('ZOOM_WIDTH')}'>
            ${IconArrowAutofitWidth}
          </button>
          <button class='ZoomHeight ControlButton' title='${getLocaleString('ZOOM_HEIGHT')}'>
            ${IconArrowAutofitHeight}
          </button>
          <button class='Hide ControlButton' title='${getLocaleString('HIDE')}'>
            ${IconEye}
            ${IconEyeOff}
          </button>
          <button class='Reload ControlButton' title='${getLocaleString('RELOAD')}'>
            ${IconRefresh}
          </button>
          <span class='PageIndex'>${index}</span>
        </div>
        <div class='PageContent'>
          <img id='PageImg${index}' alt='' class='PageImg' />
        </div>
      </div>`,
  );
export default listPages;
