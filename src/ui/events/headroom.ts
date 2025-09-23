import type { ReactiveController, ReactiveControllerHost } from 'lit';
import _ from 'lodash';
import { getSettingsValue } from '../../core/settings.ts';
import type { MovDropdown } from '../components/Dropdown.ts';

const headerHeight = 49;
const showEnd = 100;

export class HeadroomController implements ReactiveController {
  host: ReactiveControllerHost & { shadowRoot: ShadowRoot | null };

  private prevOffset = 0;

  public headroom = 'top';

  public headerVisible = true;

  constructor(host: ReactiveControllerHost & { shadowRoot: ShadowRoot | null }) {
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

  private isAnyDropdownOpen(): boolean {
    if (!this.host.shadowRoot) return false;
    const allDropdowns = this.host.shadowRoot.querySelectorAll<MovDropdown>('mov-dropdown');
    // eslint-disable-next-line no-restricted-syntax
    for (const dropdown of allDropdowns) {
      if (dropdown.open) {
        return true;
      }
    }
    return false;
  }

  private readonly handleScroll = _.throttle(() => {
    if (this.isAnyDropdownOpen()) {
      this.prevOffset = window.scrollY;
      return;
    }

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

    let needsUpdate = false;
    if (this.headroom !== newHeadroom) {
      this.headroom = newHeadroom;
      needsUpdate = true;
    }
    if (header === 'scroll') {
      const newHeaderVisible = newHeadroom !== 'hide';
      if (this.headerVisible !== newHeaderVisible) {
        this.headerVisible = newHeaderVisible;
        needsUpdate = true;
      }
    }
    if (needsUpdate) {
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

  private readonly handleMouseMove = _.throttle((event: MouseEvent) => {
    if (this.isAnyDropdownOpen()) {
      if (!this.headerVisible) {
        this.headerVisible = true;
        this.host.requestUpdate();
      }
      return;
    }

    if (['hover', 'scroll'].includes(getSettingsValue('header'))) {
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
