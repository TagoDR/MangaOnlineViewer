import { getLocaleString } from '../../core/settings';
import { html } from '../../utils/code-tag';
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
} from '../icons';

const listPages = (times: number, begin: number) =>
  sequence(times, begin).map(
    (index) => html`
      <div id="Page${index}" class="MangaPage">
        <div class="PageFunctions">
          <button class="Bookmark ControlButton" title="${getLocaleString('BOOKMARK')}">
            ${IconBookmark} ${IconBookmarkOff}
          </button>
          <button class="ZoomIn ControlButton" title="${getLocaleString('ZOOM_IN')}">
            ${IconZoomIn}
          </button>
          <button class="ZoomRestore ControlButton" title="${getLocaleString('ZOOM_RESET')}">
            ${IconZoomCancel}
          </button>
          <button class="ZoomOut ControlButton" title="${getLocaleString('ZOOM_OUT')}">
            ${IconZoomOut}
          </button>
          <button class="ZoomWidth ControlButton" title="${getLocaleString('ZOOM_WIDTH')}">
            ${IconArrowAutofitWidth}
          </button>
          <button class="ZoomHeight ControlButton" title="${getLocaleString('ZOOM_HEIGHT')}">
            ${IconArrowAutofitHeight}
          </button>
          <button class="Hide ControlButton" title="${getLocaleString('HIDE')}">
            ${IconEye} ${IconEyeOff}
          </button>
          <button class="Reload ControlButton" title="${getLocaleString('RELOAD')}">
            ${IconRefresh}
          </button>
          <span class="PageIndex">${index}</span>
        </div>
        <div class="PageContent">
          <img id="PageImg${index}" alt="" class="PageImg" src="" />
        </div>
      </div>
      <div class="separator">
        [ ${index === times ? getLocaleString('END') : `${index} / ${times}`} ]
      </div>
    `,
  );
export default listPages;
