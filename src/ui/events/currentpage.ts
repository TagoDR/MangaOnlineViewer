import _ from 'lodash';
import { getAppStateValue, getSettingsValue, setAppStateValue } from '../../core/settings';

/**
 * Computes which page is currently considered "active" in the viewport.
 * The logic identifies which page's leading edge (top for vertical, left/right for horizontal)
 * has most recently passed the center of the viewport.
 * @internal
 * @returns {number | null} The current page number, or `null` if it cannot be determined.
 */
function computeCurrentPage(): number | null {
  const pages = getAppStateValue('images');
  if (!pages) return null;

  const viewMode = getSettingsValue('viewMode');
  const isHorizontal = viewMode === 'FluidLTR' || viewMode === 'FluidRTL';
  const isRTL = viewMode === 'FluidRTL';

  const viewportCenterY = window.innerHeight / 2;
  const viewportCenterX = window.innerWidth / 2;

  let best: { index: number; edge: number } | null = null;

  for (const index in pages) {
    const image = pages[index].ref?.value;
    if (!image) continue;
    const rect = image?.getBoundingClientRect();
    const edge = isHorizontal ? (isRTL ? rect.right : rect.left) : rect.top;
    const passed = isHorizontal ? edge <= viewportCenterX : edge <= viewportCenterY;
    if (passed) {
      if (!best || edge > best.edge) {
        best = { index: parseInt(index, 10), edge };
      }
    }
  }

  if (!best) {
    return getAppStateValue('manga')?.begin ?? 1;
  }

  return best.index;
}

/**
 * Calculates the current page and updates the global application state if it has changed.
 * @internal
 */
function updateCurrentPage() {
  const page = computeCurrentPage();
  if (page == null) return;
  if (getAppStateValue('currentPage') !== page) {
    setAppStateValue('currentPage', page);
  }
}

/**
 * Attaches the necessary scroll and resize listeners to trigger the current page calculation.
 * @internal
 */
function attachListeners() {
  const handler = _.throttle(() => {
    requestAnimationFrame(updateCurrentPage);
  }, 100);

  window.addEventListener('scroll', handler, { passive: true } as AddEventListenerOptions);
  window.addEventListener('resize', handler);
  getAppStateValue('chapter').value?.addEventListener('scroll', handler, {
    passive: true,
  } as AddEventListenerOptions);

  requestAnimationFrame(updateCurrentPage);
}

/**
 * Initializes the current page tracking functionality.
 * It waits until the main application has rendered and then attaches the necessary event listeners.
 */
export default function trackCurrentPage() {
  if (!getAppStateValue('chapter').value) {
    setTimeout(trackCurrentPage, 50);
    return;
  }
  attachListeners();
}
