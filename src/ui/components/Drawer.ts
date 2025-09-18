import { css, html, LitElement, type PropertyValueMap } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import { IconX } from '../icons';

declare global {
  interface HTMLElementTagNameMap {
    'mov-drawer': Drawer;
  }
}

/**
 * A side drawer component.
 *
 * @element mov-drawer
 * @fires open - Dispatched when the drawer begins to open.
 * @fires close - Dispatched when the drawer has closed.
 *
 * @attr {boolean} open - Reflects the open/closed state of the drawer.
 * @attr {'left' | 'right'} position - The side from which the drawer appears. Defaults to 'left'.
 *
 * @slot - The main content to display inside the drawer.
 * @slot header - Content for the drawer's header.
 * @slot action - Content for an optional action item, positioned opposite the close button.
 */
@customElement('mov-drawer')
export default class Drawer extends LitElement {
  static styles = css`
    :host {
      --panel-overlay-transition: opacity linear 0.25s;
      --panel-overlay-opacity: 0.5;
      --panel-z-index: 1000;
      --panel-transition: transform 0.25s ease-out;
    }

    .backdrop {
      display: none;
      position: fixed;
      inset: 0;
      background-color: #000;
      opacity: 0;
      transition: var(--panel-overlay-transition);
      z-index: var(--panel-z-index);
    }

    :host([open]) .backdrop {
      display: block;
      opacity: var(--panel-overlay-opacity);
    }

    dialog {
      all: unset;
      background-color: var(--theme-background-color, #fff);
      color: var(--theme-text-color, #000);
      z-index: calc(var(--panel-z-index) + 1);
      position: fixed;
      box-shadow: 0 0 25px rgba(0, 0, 0, 0.5);
      display: flex;
      flex-direction: column;
      visibility: hidden;
      max-width: 100vw;
      max-height: 100vh;
      width: 350px;
      top: 0;
      bottom: 0;
      height: 100%;
      transition: var(--panel-transition);
    }

    :host([open]) dialog {
      visibility: visible;
    }

    /* Header Styles */
    .header-bar {
      display: flex;
      align-items: center;
      padding: 0.75rem 1rem;
      border-bottom: 1px solid var(--theme-border-color, #e0e0e0);
      flex-shrink: 0;
    }
    .action-item {
      order: 1;
    }
    .header-content {
      order: 2;
      flex-grow: 1;
      text-align: center;
      font-weight: bold;
    }
    .close-button-container {
      order: 3;
      display: flex;
      justify-content: flex-end;
    }
    .action-item,
    .close-button-container {
      min-width: 40px;
    }
    .close-button {
      background: none;
      border: none;
      cursor: pointer;
      font-size: 1.5rem;
      line-height: 1;
      padding: 0;
      color: inherit;
    }
    .content-slot {
      display: block;
      padding: 1rem;
      overflow-y: auto;
      flex-grow: 1;
    }

    :host([position='left']) dialog {
      left: 0;
      transform: translateX(-100%);
    }
    :host([position='right']) dialog {
      right: 0;
      transform: translateX(100%);
    }
    :host([open]) dialog {
      transform: none;
    }
    :host([position='right']) .action-item {
      order: 3;
    }
    :host([position='right']) .header-content {
      order: 2;
    }
    :host([position='right']) .close-button-container {
      order: 1;
      justify-content: flex-start;
    }
  `;

  @property({ type: Boolean, reflect: true }) open = false;
  @property({ type: String, reflect: true }) position: 'left' | 'right' = 'left';

  @query('dialog')
  private dialog!: HTMLDialogElement;

  close() {
    this.open = false;
  }

  private handleCancel(e: Event) {
    e.preventDefault();
    this.close();
  }

  private handleClick(event: MouseEvent) {
    if (event.target === this.dialog) {
      this.close();
    }
  }

  protected updated(changedProperties: PropertyValueMap<this>): void {
    if (changedProperties.has('open')) {
      if (this.open) {
        this.dialog.show();
        this.dispatchEvent(new CustomEvent('open', { bubbles: true, composed: true }));
      } else {
        if (changedProperties.get('open') === true) {
          this.dispatchEvent(new CustomEvent('close', { bubbles: true, composed: true }));
        }
        // Wait for animations to finish before closing the dialog.
        // The longest animation is 250ms, so 300ms is a safe buffer.
        setTimeout(() => {
          if (this.dialog.open) {
            this.dialog.close();
          }
        }, 300);
      }
    }
  }

  render() {
    return html`
      <div
        class="backdrop"
        @click=${this.close}
      ></div>
      <dialog
        part="dialog"
        @cancel=${this.handleCancel}
        @click=${this.handleClick}
      >
        <div
          class="header-bar"
          part="header-bar"
        >
          <div class="action-item">
            <slot name="action"></slot>
          </div>
          <div class="header-content">
            <slot name="header"></slot>
          </div>
          <div
            class="close-button-container"
            part="close-button-container"
          >
            <button
              class="close-button"
              part="close-button"
              @click=${this.close}
              aria-label="Close"
            >
              ${IconX}
            </button>
          </div>
        </div>
        <slot class="content-slot"></slot>
      </dialog>
    `;
  }
}
