import type { ReactiveController, ReactiveControllerHost } from 'lit';
import _ from 'lodash';
import type { HeaderMode, ViewMode, ZoomMode } from '../../types';

export interface HeaderVisibilityConfig {
  headerMode: HeaderMode;
  zoomMode: ZoomMode;
  viewMode: ViewMode;
  mainEl: HTMLElement | undefined;
}

export class HeaderVisibilityController implements ReactiveController {
  // State exposed to the host component
  headerVisible = true;
  private host: ReactiveControllerHost;
  private config: HeaderVisibilityConfig;
  // Internal state
  private prevOffset = 0;
  private prevOffsetX = 0;
  private isHoveringHeader = false;

  // Debounced/bound event handlers
  private debouncedScrollHandler = _.debounce(this.handleScroll.bind(this), 50);
  private boundMouseMoveHandler = this.handleMouseMove.bind(this);

  constructor(host: ReactiveControllerHost, config: HeaderVisibilityConfig) {
    this.host = host;
    this.config = config;
    this.host.addController(this);
  }

  hostConnected() {
    this.addListeners();
    window.addEventListener('mousemove', this.boundMouseMoveHandler);
  }

  hostDisconnected() {
    this.removeListeners();
    window.removeEventListener('mousemove', this.boundMouseMoveHandler);
  }

  /** Called by the host to pass down property changes. */
  update(newConfig: Partial<HeaderVisibilityConfig>) {
    const oldMainEl = this.config.mainEl;
    this.config = { ...this.config, ...newConfig };

    // Re-attach listeners if the main scrollable element changes
    if (this.config.mainEl && this.config.mainEl !== oldMainEl) {
      this.removeListeners();
      this.addListeners();
    }
  }

  /** Public method for the host to use in 'click' mode. */
  toggleHeader = () => {
    if (this.config.headerMode === 'click') {
      this.headerVisible = !this.headerVisible;
      this.host.requestUpdate();
    }
  };

  private addListeners() {
    this.config.mainEl?.addEventListener('scroll', this.debouncedScrollHandler);
  }

  private removeListeners() {
    this.config.mainEl?.removeEventListener('scroll', this.debouncedScrollHandler);
  }

  private handleScroll() {
    const { headerMode, zoomMode, mainEl, viewMode } = this.config;
    if (!mainEl) {
      return;
    }

    const scrollY = mainEl.scrollTop;
    const scrollX = mainEl.scrollLeft;
    const isAtTop = scrollY <= 50;
    const isAtBottom = mainEl.scrollTop + mainEl.offsetHeight >= mainEl.scrollHeight - 50;
    const isFluid = viewMode.startsWith('Fluid');
    let newVisibility = this.headerVisible;

    if (headerMode === 'scroll') {
      if (isAtBottom && zoomMode !== 'height') {
        newVisibility = true;
      } else if (
        (scrollY > this.prevOffset && !isAtTop) ||
        (isFluid && Math.abs(scrollX - this.prevOffsetX) > 5 && !isAtTop)
      ) {
        newVisibility = false; // Hide on scroll down or sideways
      } else if (scrollY < this.prevOffset || isAtTop) {
        newVisibility = true; // Show on scroll up or if at top
      }
    } else if (headerMode === 'hover') {
      newVisibility = isAtTop || isAtBottom || this.isHoveringHeader;
    } else if (headerMode === 'click') {
      if (isAtTop && !isFluid) {
        newVisibility = true;
      } else if (isFluid && Math.abs(scrollX - this.prevOffsetX) > 5) {
        newVisibility = false;
      }
    }

    if (this.headerVisible !== newVisibility) {
      this.headerVisible = newVisibility;
      this.host.requestUpdate();
    }
    this.prevOffset = Math.max(0, scrollY);
    this.prevOffsetX = Math.max(0, scrollX);
  }

  private handleMouseMove(event: MouseEvent) {
    if (this.config.headerMode === 'hover') {
      const isInTop10Percent = event.clientY < window.innerHeight * 0.1;
      if (isInTop10Percent === this.isHoveringHeader) return;
      this.isHoveringHeader = isInTop10Percent;
      this.handleScroll(); // Re-evaluate visibility
    }
  }
}
