import { css, html, LitElement, type PropertyValues, unsafeCSS } from 'lit';
import { customElement, property, queryAssignedNodes, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import type { HeaderMode, NavbarMode, ViewMode, ZoomMode } from '../../types';
import { AutoScrollController } from '../controllers/AutoScrollController.ts';
import { HeaderVisibilityController } from '../controllers/HeaderVisibilityController.ts';
import styles from '../styles/AppShell.css?inline';

@customElement('mov-app-shell')
export class AppShell extends LitElement {
  static styles = css`
    ${unsafeCSS(styles)}
  `;

  // --- Properties ---
  @property({ type: String })
  headerMode: HeaderMode = 'scroll';
  @property({ type: String })
  viewMode: ViewMode = 'WebComic';
  @property({ type: String })
  navbarMode: NavbarMode = 'bottom';
  @property({ type: String })
  zoomMode: ZoomMode = 'percent';
  @property({ type: Boolean })
  autoScroll = false;
  @property({ type: Number })
  scrollAmount = 10;

  // --- State ---
  @state()
  navExpanded = false;

  @queryAssignedNodes({ slot: 'main', flatten: true })
  _main?: Array<HTMLElement>;

  // --- Controllers ---
  private headerController = new HeaderVisibilityController(this, {
    headerMode: this.headerMode,
    zoomMode: this.zoomMode,
    viewMode: this.viewMode,
    mainEl: undefined,
  });
  private autoScrollController = new AutoScrollController(this, {
    autoScroll: this.autoScroll,
    scrollAmount: this.scrollAmount,
    viewMode: this.viewMode,
    mainEl: undefined,
  });

  // --- Render Method ---
  render() {
    const headerClasses = {
      [this.headerMode]: true,
      visible: this.headerController.headerVisible,
      hidden: !this.headerController.headerVisible,
    };

    const shellClasses = {
      'nav-disabled': this.navbarMode === 'disabled',
      'nav-expanded': this.navExpanded,
      'nav-is-bottom': this.navbarMode === 'bottom',
      'nav-is-left': this.navbarMode === 'left',
      'nav-is-right': this.navbarMode === 'right',
    };

    return html`
      <div
        id="AppShell"
        class=${classMap(shellClasses)}
      >
        <span id="HeaderControls">
          ${
            this.headerMode === 'click'
              ? html` <mov-toggle-button
                label="Show Header"
                activeLabel="Hide Header"
                ?active=${this.headerController.headerVisible}
                @toggle=${this.headerController.toggleHeader}
                variant="brand"
                appearance="filled"
              ></mov-toggle-button>`
              : ''
          }
        </span>

        <header class=${classMap(headerClasses)}>
          <slot name="toolbar-left"></slot>
          <slot name="header"></slot>
          <slot name="toolbar-right"></slot>
        </header>

        <main>
          <slot name="main"></slot>
        </main>

        ${
          this.navbarMode !== 'disabled'
            ? html` <nav
              @mouseenter=${() => this.handleNavHover(true)}
              @mouseleave=${() => this.handleNavHover(false)}
            >
              <slot name="nav"></slot>
            </nav>`
            : ''
        }
      </div>
    `;
  }

  // --- Lit Lifecycle Methods ---
  protected firstUpdated() {
    // Find the first actual element in the main slot, ignoring text/comment nodes.
    const mainEl = this._main?.find(node => node.nodeType === Node.ELEMENT_NODE) as
      | HTMLElement
      | undefined;

    // Pass the main scrollable element to the controllers once it's available.
    this.headerController.update({ mainEl });
    this.autoScrollController.update({ mainEl });
  }

  protected updated(changedProperties: PropertyValues) {
    super.updated(changedProperties);

    // Only update controllers if their relevant properties have changed.
    if (
      changedProperties.has('headerMode') ||
      changedProperties.has('zoomMode') ||
      changedProperties.has('viewMode')
    ) {
      this.headerController.update({
        headerMode: this.headerMode,
        zoomMode: this.zoomMode,
        viewMode: this.viewMode,
      });
    }

    if (
      changedProperties.has('autoScroll') ||
      changedProperties.has('scrollAmount') ||
      changedProperties.has('viewMode')
    ) {
      this.autoScrollController.update({
        autoScroll: this.autoScroll,
        scrollAmount: this.scrollAmount,
        viewMode: this.viewMode,
      });
    }
  }

  // --- Other Handlers ---
  private handleNavHover(expand: boolean) {
    if (this.navbarMode !== 'disabled') {
      this.navExpanded = expand;
    }
  }
}
