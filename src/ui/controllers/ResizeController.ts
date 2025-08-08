import type { ReactiveController, ReactiveControllerHost } from 'lit';

export class ResizeController implements ReactiveController {
  host: ReactiveControllerHost;

  private resizeObserver: ResizeObserver;
  private readonly handleResize: () => void;

  constructor(host: ReactiveControllerHost) {
    this.host = host;
    this.host.addController(this);
    this.handleResize = () => {
      this.host.requestUpdate();
      window.dispatchEvent(new CustomEvent('app-resize'));
    };
    this.resizeObserver = new ResizeObserver(this.handleResize);
  }

  hostConnected() {
    this.resizeObserver.observe(document.body);
    window.addEventListener('orientationchange', this.handleResize);
  }

  hostDisconnected() {
    this.resizeObserver.disconnect();
    window.removeEventListener('orientationchange', this.handleResize);
  }
}
