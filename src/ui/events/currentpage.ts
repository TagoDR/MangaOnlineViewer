import _ from 'lodash';
import { getAppStateValue, setAppStateValue, getSettingsValue } from '../../core/settings';

function extractIndex(id: string | null): number | null {
  if (!id) return null;
  const m = id.match(/Page(\d+)/);
  return m ? parseInt(m[1], 10) : null;
}

function computeCurrentPage(): number | null {
  const root = getAppStateValue('render') as ShadowRoot | null | undefined;
  if (!root) return null;
  const chapter = root.querySelector<HTMLElement>('#Chapter');
  if (!chapter) return null;
  const pages = [...(root.querySelectorAll<HTMLElement>('.MangaPage') ?? [])];
  if (!pages.length) return null;

  // Determine orientation based on viewMode/class
  const viewMode = getSettingsValue('viewMode');
  const isHorizontal = viewMode === 'FluidLTR' || viewMode === 'FluidRTL';
  const isRTL = viewMode === 'FluidRTL';

  const viewportCenterY = window.innerHeight / 2;
  const viewportCenterX = window.innerWidth / 2;

  // Strategy: pick the page whose leading edge has passed the viewport center line
  // Vertical: use top edge; Horizontal LTR: left edge; Horizontal RTL: right edge.
  // Among those, pick the one with the largest edge value (just passed the center).
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

  // If none has passed yet (e.g., at top/start), choose the first page
  if (!best) {
    const firstIdx = extractIndex(pages[0]?.id);
    return firstIdx ?? null;
  }

  return best.idx;
}

function updateCurrentPage() {
  const page = computeCurrentPage();
  if (page == null) return;
  if (getAppStateValue('currentPage') !== page) {
    setAppStateValue('currentPage', page);
  }
}

function attachListeners() {
  // Listen to window scroll (vertical) and main chapter scroll (horizontal fluid)
  const root = getAppStateValue('render') as ShadowRoot | null | undefined;
  const chapter = root?.querySelector<HTMLElement>('#Chapter');

  const handler = _.throttle(() => {
    // Use rAF to align with paint for smoother calculation
    requestAnimationFrame(updateCurrentPage);
  }, 100);

  window.addEventListener('scroll', handler, { passive: true } as AddEventListenerOptions);
  window.addEventListener('resize', handler);
  chapter?.addEventListener('scroll', handler, { passive: true } as AddEventListenerOptions);

  // Initial compute
  requestAnimationFrame(updateCurrentPage);
}

export default function trackCurrentPage() {
  // If render is not ready yet, wait a tick
  if (!getAppStateValue('render')) {
    setTimeout(trackCurrentPage, 50);
    return;
  }
  attachListeners();
}
