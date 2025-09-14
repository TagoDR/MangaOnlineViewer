import { html } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { createRef, ref } from 'lit/directives/ref.js';
import { type StyleInfo, styleMap } from 'lit-html/directives/style-map.js';
import {
  changeImage,
  getAppStateValue,
  getLocaleString,
  getSettingsValue,
  isBookmarked,
  navbarSize,
} from '../core/settings.ts';
import sequence from '../utils/sequence.ts';
import { buttonBookmark } from './events/bookmarks.ts';
import {
  buttonHidePage,
  buttonReloadPage,
  imageLoadError,
  imageLoaded,
} from './events/individual.ts';
import {
  buttonRestoreZoom,
  buttonZoomHeight,
  buttonZoomIn,
  buttonZoomOut,
  buttonZoomWidth,
} from './events/size.ts';
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

/**
 * Calculates the inline styles for a manga page's image based on the current zoom settings.
 * This function determines the width and height of the image according to the global
 * zoom mode ('width', 'height', 'percent') and zoom value.
 *
 * @param {number} index - The page number for which to calculate the style.
 * @returns {StyleInfo} A Lit `StyleInfo` object to be used with the `styleMap` directive.
 */
function getImageStyle(index: number): StyleInfo {
  const image = getAppStateValue('images')?.[index];
  return {
    width: image?.width ? `${image.width}px` : 'auto',
    height: image?.height ? `${image.height}px` : 'auto',
    'max-height': getSettingsValue('viewMode').startsWith('Fluid')
      ? `${window.innerHeight + (getSettingsValue('navbar') === 'bottom' ? -navbarSize : 0)}px`
      : undefined,
    'min-width': `${getSettingsValue('minZoom')}vw`,
  };
}

/**
 * Generates the complete list of manga pages as a Lit `TemplateResult`.
 * Each page includes a set of controls (bookmark, zoom, hide, reload) and the page image itself.
 * A separator is also rendered between pages.
 *
 * @param {number} times - The total number of pages in the manga.
 * @param {number} begin - The starting page number.
 * @returns An array of Lit `TemplateResult` objects, one for each page.
 */
const listPages = (times: number, begin: number) =>
  sequence(times, begin).map(index => {
    if (!getAppStateValue('images')?.[index]?.ref) {
      changeImage(index, _image => ({ ref: createRef() }));
    }
    return html`
      <div
        id="Page${index}"
        class="${classMap({
          MangaPage: true,
          hide: !!getAppStateValue('images')?.[index].hide,
        })}"
      >
        <div class="PageFunctions">
          <button
            class="Bookmark ControlButton"
            title="${getLocaleString('BOOKMARK')}"
            @click=${buttonBookmark}
            value="${index}"
          >
            ${isBookmarked() ? IconBookmarkOff : IconBookmark}
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
            ${getAppStateValue('images')?.[index].hide ? IconEye : IconEyeOff}
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
            ${ref(getAppStateValue('images')?.[index].ref)}
          />
        </div>
      </div>
      <div class="separator">
        [ ${index === times ? getLocaleString('END') : `${index} / ${times}`} ]
      </div>
    `;
  });
export default listPages;
