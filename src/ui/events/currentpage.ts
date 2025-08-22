import _ from 'lodash';
import { getAppStateValue, getSettingsValue, setAppStateValue } from '../../core/settings';

/**
 * Extracts the page number from a page element's ID (e.g., "Page12" -> 12).
 * @internal
 * @param {string | null} id - The ID of the element.
 * @returns {number | null} The extracted page number, or `null` if parsing fails.
 */
function extractIndex(id: string | null): number | null {
  if (!id) return null;
  const m = id.match(/Page(\d+)/);
  return m ? parseInt(m[1], 10) : null;
}

/**
 * Computes which page is currently considered "active" in the viewport.
 * The logic identifies which page's leading edge (top for vertical, left/right for horizontal)
 * has most recently passed the center of the viewport.
 * @internal
 * @returns {number | null} The current page number, or `null` if it cannot be determined.
 */
function computeCurrentPage(): number | null {
  const root = getAppStateValue('render') as ShadowRoot | null | undefined;
  if (!root) return null;
  const chapter = root.querySelector<HTMLElement>('#Chapter');
  if (!chapter) return null;
  const pages = [...(root.querySelectorAll<HTMLElement>('.MangaPage') ?? [])];
  if (!pages.length) return null;

  const viewMode = getSettingsValue('viewMode');
  const isHorizontal = viewMode === 'FluidLTR' || viewMode === 'FluidRTL';
  const isRTL = viewMode === 'FluidRTL';

  const viewportCenterY = window.innerHeight / 2;
  const viewportCenterX = window.innerWidth / 2;

  let best: { idx: number; edge: number } | null = null;

  for (const el of pages) {
    const rect = el.getBoundingClientRect();
    const edge = isHorizontal ? (isRTL ? rect.right : rect.left) : rect.top;
    const passed = isHorizontal ? edge <= viewportCenterX : edge <= viewportCenterY;
    if (passed) {
      const idx = extractIndex(el.id);
      if (idx != null) {
        if (!best || edge > best.edge) {
          best = { idx, edge };
        }
      }
    }
  }

  if (!best) {
    const firstIdx = extractIndex(pages[0]?.id);
    return firstIdx ?? null;
  }

  return best.idx;
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
  const root = getAppStateValue('render') as ShadowRoot | null | undefined;
  const chapter = root?.querySelector<HTMLElement>('#Chapter');

  const handler = _.throttle(() => {
    requestAnimationFrame(updateCurrentPage);
  }, 100);

  window.addEventListener('scroll', handler, { passive: true } as AddEventListenerOptions);
  window.addEventListener('resize', handler);
  chapter?.addEventListener('scroll', handler, { passive: true } as AddEventListenerOptions);

  requestAnimationFrame(updateCurrentPage);
}

/**
 * Initializes the current page tracking functionality.
 * It waits until the main application has rendered and then attaches the necessary event listeners.
 */
export default function trackCurrentPage() {
  if (!getAppStateValue('render')) {
    setTimeout(trackCurrentPage, 50);
    return;
  }
  attachListeners();
}
