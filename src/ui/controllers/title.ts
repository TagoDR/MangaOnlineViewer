import type { ReactiveController, ReactiveControllerHost } from 'lit';

export class TitleController implements ReactiveController {
  host: ReactiveControllerHost;
  value: string | undefined;

  private element: HTMLElement | undefined;
  private text: string | undefined;
  private readonly canvasContext: CanvasRenderingContext2D | null = null;
  private readonly resizeObserver: ResizeObserver;

  constructor(host: ReactiveControllerHost) {
    this.host = host;
    host.addController(this);
    const canvas = document.createElement('canvas');
    this.canvasContext = canvas.getContext('2d');
    this.resizeObserver = new ResizeObserver(() => this.update());
  }

  hostConnected() {
    // Logic is initiated by the host via `observe`
  }

  hostDisconnected() {
    this.resizeObserver.disconnect();
  }

  observe(element: HTMLElement, text: string) {
    if (!element || !text) {
      return;
    }
    this.element = element;
    this.text = text;
    this.resizeObserver.disconnect();
    this.resizeObserver.observe(this.element);
    this.update();
  }

  private update() {
    if (!this.element || !this.text || !this.canvasContext) {
      this.value = this.text;
      this.host.requestUpdate();
      return;
    }

    const style = window.getComputedStyle(this.element);
    this.canvasContext.font = `${style.fontWeight} ${style.fontSize} ${style.fontFamily}`;

    const fullText = this.text;
    const containerWidth = this.element.clientWidth;
    const textWidth = this.canvasContext.measureText(fullText).width;

    if (textWidth <= containerWidth) {
      this.value = fullText;
      this.host.requestUpdate();
      return;
    }

    const ellipsis = '...';
    const ellipsisWidth = this.canvasContext.measureText(ellipsis).width;
    const targetWidth = containerWidth - ellipsisWidth;

    let start = '';
    let end = '';
    for (let i = 1; i < fullText.length; i++) {
      const startCandidate = fullText.substring(0, i);
      const endCandidate = fullText.substring(fullText.length - i);
      if (
        this.canvasContext.measureText(startCandidate).width +
          this.canvasContext.measureText(endCandidate).width >
        targetWidth
      ) {
        break;
      }
      start = startCandidate;
      end = endCandidate;
    }
    this.value = `${start}${ellipsis}${end}`;
    this.host.requestUpdate();
  }
}
