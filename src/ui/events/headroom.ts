import type { ReactiveController, ReactiveControllerHost } from 'lit';
import _ from 'lodash';
import { getSettingsValue } from '../../core/settings.ts';

const headerHeight = 49;
const showEnd = 100;

export class HeadroomController implements ReactiveController {
  host: ReactiveControllerHost;

  private prevOffset = 0;

  public headroom = 'top';

  public headerVisible = true;

  constructor(host: ReactiveControllerHost) {
    this.host = host;
    host.addController(this);
  }

  hostConnected() {
    window.addEventListener('scroll', this.handleScroll);
    window.addEventListener('mousemove', this.handleMouseMove);
    this.handleScroll(); // Initial check
  }

  hostDisconnected() {
    window.removeEventListener('scroll', this.handleScroll);
    window.removeEventListener('mousemove', this.handleMouseMove);
  }

  private handleScroll = _.throttle(() => {
    const header = getSettingsValue('header');
    const { scrollY } = window;
    let newHeadroom = 'none';
    if (
      showEnd &&
      getSettingsValue('zoomMode') !== 'height' &&
      scrollY + window.innerHeight + showEnd > document.body.scrollHeight
    ) {
      // Show header if near the end of the page
      newHeadroom = 'end';
    } else if (scrollY > this.prevOffset && scrollY > headerHeight) {
      // Hide header on scroll down
      newHeadroom = 'hide';
    } else if (header === 'scroll' && scrollY < this.prevOffset && scrollY > headerHeight) {
      // Show header on scroll up
      newHeadroom = 'show';
    } else if (header !== 'click' && scrollY <= headerHeight) {
      // Always show header if near the top
      newHeadroom = 'top';
    }

    if (this.headroom !== newHeadroom) {
      this.headroom = newHeadroom;
      this.host.requestUpdate();
    }

    this.prevOffset = scrollY;
  }, 300);

  private static isMouseInsideRegion(
    event: MouseEvent,
    headerWidth: number,
    headerHeight: number,
  ): boolean {
    return (
      event.clientX >= 0 &&
      event.clientX <= headerWidth &&
      event.clientY >= 0 &&
      event.clientY <= headerHeight
    );
  }

  private handleMouseMove = _.throttle((event: MouseEvent) => {
    if (getSettingsValue('header') === 'hover') {
      const newHeaderVisible = HeadroomController.isMouseInsideRegion(
        event,
        window.innerWidth,
        headerHeight * 1.5,
      );
      if (this.headerVisible !== newHeaderVisible) {
        this.headerVisible = newHeaderVisible;
        this.host.requestUpdate();
      }
    }
  }, 300);

  public toggleHeaderVisibility = () => {
    if (getSettingsValue('header') === 'click') {
      this.headerVisible = !this.headerVisible;
      this.host.requestUpdate();
    }
  };
}
