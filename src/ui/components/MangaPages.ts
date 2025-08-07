import { html } from 'lit';
import { getLocaleString, getSettingsValue } from '../../core/settings';
import sequence from '../../utils/sequence';
import { buttonBookmark } from '../events/bookmarks';
import { buttonHidePage, buttonReloadPage } from '../events/individual';
import {
  buttonRestoreZoom,
  buttonZoomHeight,
  buttonZoomIn,
  buttonZoomOut,
  buttonZoomWidth,
} from '../events/size';
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
import { styleMap } from 'lit-html/directives/style-map.js';

const listPages = (times: number, begin: number) =>
  sequence(times, begin).map(
    index => html`
      <div
        id="Page${index}"
        class="MangaPage"
      >
        <div class="PageFunctions">
          <button
            class="Bookmark ControlButton"
            title="${getLocaleString('BOOKMARK')}"
            @click=${buttonBookmark}
          >
            ${IconBookmark} ${IconBookmarkOff}
          </button>
          <button
            class="ZoomIn ControlButton"
            title="${getLocaleString('ZOOM_IN')}"
            @click=${buttonZoomIn}
          >
            ${IconZoomIn}
          </button>
          <button
            class="ZoomRestore ControlButton"
            title="${getLocaleString('ZOOM_RESET')}"
            @click=${buttonRestoreZoom}
          >
            ${IconZoomCancel}
          </button>
          <button
            class="ZoomOut ControlButton"
            title="${getLocaleString('ZOOM_OUT')}"
            @click=${buttonZoomOut}
          >
            ${IconZoomOut}
          </button>
          <button
            class="ZoomWidth ControlButton"
            title="${getLocaleString('ZOOM_WIDTH')}"
            @click=${buttonZoomWidth}
          >
            ${IconArrowAutofitWidth}
          </button>
          <button
            class="ZoomHeight ControlButton"
            title="${getLocaleString('ZOOM_HEIGHT')}"
            @click=${buttonZoomHeight}
          >
            ${IconArrowAutofitHeight}
          </button>
          <button
            class="Hide ControlButton"
            title="${getLocaleString('HIDE')}"
            @click=${buttonHidePage}
          >
            ${IconEye} ${IconEyeOff}
          </button>
          <button
            class="Reload ControlButton"
            title="${getLocaleString('RELOAD')}"
            @click=${buttonReloadPage}
          >
            ${IconRefresh}
          </button>
          <span class="PageIndex">${index}</span>
        </div>
        <div class="PageContent">
          <img
            id="PageImg${index}"
            alt=""
            class="PageImg"
            src=""
            style="${styleMap({
              'min-width': `${getSettingsValue('minZoom')}vw`,
            })}"
          />
        </div>
      </div>
      <div class="separator">
        [ ${index === times ? getLocaleString('END') : `${index} / ${times}`} ]
      </div>
    `,
  );
export default listPages;
