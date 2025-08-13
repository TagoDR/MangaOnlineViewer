import type { ReactiveController, ReactiveControllerHost } from 'lit';
import _ from 'lodash';
import type { ViewMode } from '../../types';
import { logScript } from '../../utils/tampermonkey.ts';

export interface AutoScrollConfig {
  autoScroll: boolean;
  scrollAmount: number;
  viewMode: ViewMode;
  mainEl: HTMLElement | undefined;
}

export class AutoScrollController implements ReactiveController {
  private host: ReactiveControllerHost & HTMLElement;
  private config: AutoScrollConfig;
  private rafId: number | null = null;
  private isManuallyPaused = false; // Track if user manually paused

  private debouncedResume = _.debounce(() => {
    // Only resume if not manually paused and autoscroll is still enabled
    if (this.config.autoScroll && !this.isManuallyPaused) {
      logScript('Resuming auto scroll after user inactivity.');
      this.start();
    }
  }, 2000);

  constructor(host: ReactiveControllerHost & HTMLElement, config: AutoScrollConfig) {
    this.host = host;
    this.config = config;
    this.host.addController(this);
  }

  hostConnected() {
    this.addListeners();
  }

  hostDisconnected() {
    this.removeListeners();
    this.stop();
  }

  hostUpdated() {
    // Reset manual pause flag when autoScroll changes
    if (this.config.autoScroll && this.rafId === null) {
      this.isManuallyPaused = false; // Reset manual pause flag
      this.start();
    } else if (!this.config.autoScroll && this.rafId !== null) {
      this.isManuallyPaused = true; // User explicitly disabled
      this.stop();
      this.debouncedResume.cancel();
    }
  }

  update(newConfig: Partial<AutoScrollConfig>) {
    const oldMainEl = this.config.mainEl;
    const oldAutoScroll = this.config.autoScroll;

    this.config = { ...this.config, ...newConfig };

    // Handle mainEl changes
    if (this.config.mainEl && this.config.mainEl !== oldMainEl) {
      this.removeListeners();
      this.addListeners();
    }

    // Handle autoScroll state changes
    if (oldAutoScroll !== this.config.autoScroll) {
      if (this.config.autoScroll) {
        this.isManuallyPaused = false;
        this.start();
      } else {
        this.isManuallyPaused = true;
        this.stop();
        this.debouncedResume.cancel();
      }
    }
  }

  private handleManualScroll = () => {
    if (this.rafId !== null) {
      logScript('User scroll detected, pausing auto scroll.');
      this.stop();
      // Only resume if not manually disabled
      if (this.config.autoScroll) {
        this.debouncedResume();
      }
    }
  };

  private handleKeyboardInteraction = () => {
    // Cancel any pending resume when user interacts via keyboard
    this.debouncedResume.cancel();
  };

  private addListeners() {
    this.config.mainEl?.addEventListener('wheel', this.handleManualScroll, { passive: true });
    // Listen for keyboard events to prevent unwanted resume
    document.addEventListener('keydown', this.handleKeyboardInteraction);
  }

  private removeListeners() {
    this.config.mainEl?.removeEventListener('wheel', this.handleManualScroll);
    document.removeEventListener('keydown', this.handleKeyboardInteraction);
  }

  private scrollLoop() {
    const { mainEl, viewMode, scrollAmount } = this.config;
    if (!mainEl || !this.config.autoScroll) {
      this.stop();
      return;
    }

    let atEnd = false;
    if (viewMode.startsWith('Fluid')) {
      const { scrollLeft, scrollWidth, clientWidth } = mainEl;
      const dir = viewMode === 'FluidRTL' ? -1 : 1;
      mainEl.scrollLeft += scrollAmount * dir;
      atEnd = dir === 1 ? scrollLeft + clientWidth >= scrollWidth - 1 : scrollLeft <= 0;
    } else {
      const { scrollTop, scrollHeight, clientHeight } = mainEl;
      mainEl.scrollTop += scrollAmount;
      atEnd = scrollTop + clientHeight >= scrollHeight - 1;
    }

    if (atEnd) {
      logScript('Finished auto scroll (reached end).');
      this.isManuallyPaused = false; // Reset so it can be restarted
      this.host.dispatchEvent(
        new CustomEvent('auto-scroll-change', { detail: false, bubbles: true, composed: true }),
      );
    } else {
      this.rafId = requestAnimationFrame(this.scrollLoop.bind(this));
    }
  }

  private start() {
    if (this.rafId !== null || !this.config.autoScroll) return;
    logScript('Start auto scroll');
    this.rafId = requestAnimationFrame(this.scrollLoop.bind(this));
  }

  private stop() {
    if (this.rafId !== null) {
      cancelAnimationFrame(this.rafId);
      this.rafId = null;
      logScript('Stopped auto scroll');
    }
  }

  // Public method to force stop (for keyboard actions)
  public forceStop() {
    this.isManuallyPaused = true;
    this.stop();
    this.debouncedResume.cancel();
  }

  // Public method to force start (for keyboard actions)
  public forceStart() {
    if (this.config.autoScroll) {
      this.isManuallyPaused = false;
      this.start();
    }
  }
}
