import type { ReactiveController, ReactiveControllerHost } from 'lit';

function randomId() {
  return Math.random().toString(36).substring(2, 9);
}

// Define the types within this file or import from a dedicated types file
export interface UseScrollSpyHeadingData {
  depth: number;
  value: string;
  id: string;
  getNode: () => HTMLElement;
}

export interface UseScrollSpyOptions {
  selector?: string;
  getDepth?: (element: HTMLElement) => number;
  getValue?: (element: HTMLElement) => string;
  scrollHost?: HTMLElement | Window; // Changed to allow Window
}

export interface UseScrollSpyReturnType {
  active: number;
  data: UseScrollSpyHeadingData[];
  initialized: boolean;
  reinitialize: () => void;
}

function getHeadingsData(
  headings: HTMLElement[],
  getDepth: (element: HTMLElement) => number,
  getValue: (element: HTMLElement) => string,
): UseScrollSpyHeadingData[] {
  const result: UseScrollSpyHeadingData[] = [];

  for (let i = 0; i < headings.length; i += 1) {
    const heading = headings[i];
    result.push({
      depth: getDepth(heading),
      value: getValue(heading),
      id: heading.id || randomId(),
      getNode: () => (heading.id ? (document.getElementById(heading.id) as HTMLElement) : heading),
    });
  }

  return result;
}

function getActiveElement(rects: DOMRect[]) {
  if (rects.length === 0) {
    return -1;
  }

  const closest = rects.reduce(
    (acc, item, index) => {
      // Prioritize ui that are closer to the top of the viewport (y >= 0)
      // and then the ones closest to y = 0
      if (item.y >= 0 && (acc.position < 0 || Math.abs(item.y) < Math.abs(acc.position))) {
        return { index, position: item.y };
      }
      return acc;
    },
    // Initialize with a value that ensures the first valid element is picked
    { index: 0, position: rects[0].y < 0 ? -Infinity : rects[0].y },
  );

  return closest.index;
}

function getDefaultDepth(element: HTMLElement) {
  return Number(element.tagName[1]);
}

function getDefaultValue(element: HTMLElement) {
  return element.textContent || '';
}

/**
 * A reactive controller for LitElement to provide scroll spy functionality.
 * Mimics the behavior of Mantine's use-scroll-spy hook.
 */
export class ScrollSpyController implements ReactiveController {
  host: ReactiveControllerHost;
  options: UseScrollSpyOptions;
  private headingsRef: UseScrollSpyHeadingData[] = [];
  private scrollHostElement: HTMLElement | Window = window;

  constructor(host: ReactiveControllerHost, options?: UseScrollSpyOptions) {
    this.host = host;
    this.host.addController(this);
    this.options = {
      selector: 'h1, h2, h3, h4, h5, h6',
      getDepth: getDefaultDepth,
      getValue: getDefaultValue,
      scrollHost: window,
      ...options,
    };
  }

  private _active: number = -1;

  /**
   * Public getters to expose the state.
   * We use getters/setters to trigger host updates.
   */
  get active(): number {
    return this._active;
  }

  private set active(value: number) {
    if (this._active !== value) {
      this._active = value;
      this.host.requestUpdate();
    }
  }

  private _initialized: boolean = false;

  get initialized(): boolean {
    return this._initialized;
  }

  private set initialized(value: boolean) {
    if (this._initialized !== value) {
      this._initialized = value;
      this.host.requestUpdate();
    }
  }

  private _data: UseScrollSpyHeadingData[] = [];

  get data(): UseScrollSpyHeadingData[] {
    return this._data;
  }

  private set data(value: UseScrollSpyHeadingData[]) {
    // Perform a shallow comparison or a deeper comparison if needed for performance
    if (this._data !== value) {
      this._data = value;
      this.host.requestUpdate();
    }
  }

  /**
   * Expose reinitialize through a getter or a public method.
   * Here, we just directly call the initialize method.
   */
  get reinitialize(): () => void {
    return this.initialize;
  }

  hostConnected() {
    this.initialize();
    this.scrollHostElement = this.options.scrollHost || window;
    this.scrollHostElement.addEventListener('scroll', this.handleScroll.bind(this));
    // Re-evaluate on resize to handle layout changes
    window.addEventListener('resize', this.handleScroll.bind(this));
  }

  hostDisconnected() {
    this.scrollHostElement.removeEventListener('scroll', this.handleScroll.bind(this));
    window.removeEventListener('resize', this.handleScroll.bind(this));
  }

  public initialize = () => {
    const headings = getHeadingsData(
      Array.from(document.querySelectorAll(this.options.selector ?? 'h1, h2, h3, h4, h5, h6')),
      this.options.getDepth ?? getDefaultDepth,
      this.options.getValue ?? getDefaultValue,
    );
    this.headingsRef = headings;
    this.initialized = true;
    this.data = headings;
    this.active = getActiveElement(headings.map(d => d.getNode().getBoundingClientRect()));
  };

  private handleScroll = () => {
    this.active = getActiveElement(this.headingsRef.map(d => d.getNode().getBoundingClientRect()));
  };
}
