import { html } from 'lit';
import { type StyleInfo, styleMap } from 'lit-html/directives/style-map.js';
import { getAppStateValue, getLocaleString, getSettingsValue } from '../../core/settings';
import sequence from '../../utils/sequence';
import { buttonBookmark } from '../events/bookmarks';
import {
  buttonHidePage,
  buttonReloadPage,
  imageLoadError,
  imageLoaded,
} from '../events/individual';
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

function getImageStyle(index: number) {
  const image = getAppStateValue('images')?.[index];
  const mode = getSettingsValue('zoomMode');
  const value = getSettingsValue('zoomValue');
  const imageStyles: StyleInfo = {
    width: image?.width ?? 'auto',
    height: image?.height ?? 'auto',
    'min-width': image?.minWidth ?? `${getSettingsValue('minZoom')}vw`,
  };
  if (image?.naturalWidth) {
    if (mode === 'width') {
      // Fit width
      imageStyles.width = `${window.innerWidth}px`; // Or maybe `100vw`
      imageStyles.height = 'auto';
    } else if (mode === 'height') {
      // Fit height
      const nextHeight = window.innerHeight + (getSettingsValue('navbar') === 'bottom' ? -29 : 0);
      imageStyles.height = `${nextHeight}px`; // Or maybe `100vh`
      imageStyles.maxHeight = `${nextHeight}px`; // Or maybe `100vh`
      imageStyles.minWidth = 'unset';
      imageStyles.width = 'auto';
    } else if (mode === 'percent') {
      if (value === 100) {
        imageStyles.width = 'auto';
        imageStyles.height = 'auto';
      } else {
        imageStyles.width = `${image.naturalWidth * (value / 100)}px`;
        imageStyles.height = 'auto';
      }
      imageStyles.minWidth = `${getSettingsValue('minZoom')}vw`;
    }
  }
  return imageStyles;
}

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
            value="${index}"
          >
            ${IconBookmark} ${IconBookmarkOff}
          </button>
          <button
            class="ZoomIn ControlButton"
            title="${getLocaleString('ZOOM_IN')}"
            @click=${buttonZoomIn}
            value="${index}"
          >
            ${IconZoomIn}
          </button>
          <button
            class="ZoomRestore ControlButton"
            title="${getLocaleString('ZOOM_RESET')}"
            @click=${buttonRestoreZoom}
            value="${index}"
          >
            ${IconZoomCancel}
          </button>
          <button
            class="ZoomOut ControlButton"
            title="${getLocaleString('ZOOM_OUT')}"
            @click=${buttonZoomOut}
            value="${index}"
          >
            ${IconZoomOut}
          </button>
          <button
            class="ZoomWidth ControlButton"
            title="${getLocaleString('ZOOM_WIDTH')}"
            @click=${buttonZoomWidth}
            value="${index}"
          >
            ${IconArrowAutofitWidth}
          </button>
          <button
            class="ZoomHeight ControlButton"
            title="${getLocaleString('ZOOM_HEIGHT')}"
            @click=${buttonZoomHeight}
            value="${index}"
          >
            ${IconArrowAutofitHeight}
          </button>
          <button
            class="Hide ControlButton"
            title="${getLocaleString('HIDE')}"
            @click=${buttonHidePage}
            value="${index}"
          >
            ${IconEye} ${IconEyeOff}
          </button>
          <button
            class="Reload ControlButton"
            title="${getLocaleString('RELOAD')}"
            @click=${buttonReloadPage}
            value="${index}"
          >
            ${IconRefresh}
          </button>
          <span class="PageIndex">${index}</span>
        </div>
        <div class="PageContent">
          <img
            id="PageImg${index}"
            alt="Page ${index}"
            class="PageImg"
            src=${getAppStateValue('images')?.[index]?.src ?? ''}
            style="${styleMap(getImageStyle(index))}"
            @load=${imageLoaded}
            @error=${imageLoadError}
          />
        </div>
      </div>
      <div class="separator">
        [ ${index === times ? getLocaleString('END') : `${index} / ${times}`} ]
      </div>
    `,
  );
export default listPages;
