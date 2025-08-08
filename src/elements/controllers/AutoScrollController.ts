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

  private debouncedResume = _.debounce(() => {
    if (this.config.autoScroll) {
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
    if (this.config.autoScroll && this.rafId === null) {
      this.start();
    } else if (!this.config.autoScroll && this.rafId !== null) {
      this.stop();
      this.debouncedResume.cancel();
    }
  }

  update(newConfig: Partial<AutoScrollConfig>) {
    const oldMainEl = this.config.mainEl;
    this.config = { ...this.config, ...newConfig };
    if (this.config.mainEl && this.config.mainEl !== oldMainEl) {
      this.removeListeners();
      this.addListeners();
    }
  }

  private handleManualScroll = () => {
    if (this.rafId !== null) {
      logScript('User scroll detected, pausing auto scroll.');
      this.stop();
      this.debouncedResume();
    }
  };

  private addListeners() {
    this.config.mainEl?.addEventListener('wheel', this.handleManualScroll, { passive: true });
  }

  private removeListeners() {
    this.config.mainEl?.removeEventListener('wheel', this.handleManualScroll);
  }

  private scrollLoop() {
    const { mainEl, viewMode, scrollAmount } = this.config;
    if (!mainEl) {
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
      this.host.dispatchEvent(
        new CustomEvent('auto-scroll-change', { detail: false, bubbles: true, composed: true }),
      );
    } else {
      this.rafId = requestAnimationFrame(this.scrollLoop.bind(this));
    }
  }

  private start() {
    if (this.rafId !== null) return;
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
}
