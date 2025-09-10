import { css, html, LitElement, type PropertyValueMap } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import { IconX } from '../icons';

declare global {
  interface HTMLElementTagNameMap {
    'mov-drawer': MovDrawer;
  }
}

/**
 * A side drawer component that can be opened or closed by setting its `open` property.
 *
 * @element mov-drawer
 *
 * @fires open - Dispatched when the drawer begins to open.
 * @fires close - Dispatched when the drawer has closed.
 *
 * @attr {boolean} open - Reflects the open/closed state of the drawer. Set this to true to open the drawer and false to close it.
 * @attr {boolean} right - If present, positions the drawer on the right side of the screen.
 *
 * @slot - The main content to display inside the drawer.
 * @slot header - Content for the drawer's header.
 * @slot action - Content for an optional action item, positioned opposite the close button.
 *
 * @csspart dialog - The underlying <dialog> element used for the drawer.
 * @csspart header-bar - The container for the header, action, and close buttons.
 * @csspart close-button-container - The container for the close button.
 * @csspart close-button - The close button element.
 */
@customElement('mov-drawer')
export class MovDrawer extends LitElement {
  static styles = css`
    :host {
      --side-drawer-transition: transform 0.25s ease-out;
      --side-drawer-overlay-transition: opacity linear 0.25s;
      --side-drawer-overlay-opacity: 0.5;
    }

    dialog {
      all: unset;
      background-color: var(--theme-background-color, #fff);
      color: var(--theme-text-color, #000);
      width: 350px;
      max-width: 75vw;
      z-index: 1001;
      position: fixed;
      top: 0;
      bottom: 0;
      left: 0;
      height: 100%;
      transform: translateX(-100%);
      transition: var(--side-drawer-transition);
      visibility: hidden;
      box-shadow: 0 0 25px rgba(0, 0, 0, 0.5);
      display: flex;
      flex-direction: column;
    }

    :host([right]) dialog {
      left: unset;
      right: 0;
      transform: translateX(100%);
    }

    :host([open]) dialog {
      transform: none;
      visibility: visible;
    }

    dialog::backdrop {
      background-color: #000;
      opacity: 0;
      transition: var(--side-drawer-overlay-transition);
    }

    :host([open]) dialog::backdrop {
      opacity: var(--side-drawer-overlay-opacity);
    }

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

    .action-item, .close-button-container {
        min-width: 40px;
    }

    :host([right]) .action-item {
      order: 3;
    }
    :host([right]) .header-content {
      order: 2;
    }
    :host([right]) .close-button-container {
      order: 1;
      justify-content: flex-start;
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
  `;

  @property({ type: Boolean, reflect: true })
  open = false;

  @property({ type: Boolean, reflect: true })
  right = false;

  @query('dialog')
  private dialog!: HTMLDialogElement;

  private close() {
    this.open = false;
  }

  private handleCancel(e: Event) {
    e.preventDefault();
    this.close();
  }

  protected updated(changedProperties: PropertyValueMap<this>): void {
    if (changedProperties.has('open')) {
      if (this.open) {
        if (!this.dialog.open) {
          this.dialog.showModal();
        }
        this.dispatchEvent(new CustomEvent('open', { bubbles: true, composed: true }));
      } else {
        // The `open` property was set to false. This could have been done
        // by the parent, or by the component itself (e.g. via backdrop click).
        if (changedProperties.get('open') === true) {
            // Only dispatch the close event if it was previously open.
            this.dispatchEvent(new CustomEvent('close', { bubbles: true, composed: true }));
        }

        // Animate the closing of the drawer
        const closeDialog = () => {
            if (this.dialog.open) {
                this.dialog.close();
            }
        };

        const timer = setTimeout(closeDialog, 300);
        this.dialog.addEventListener('transitionend', () => {
            clearTimeout(timer);
            closeDialog();
        }, { once: true });
      }
    }
  }

  render() {
    return html`
      <dialog
        part="dialog"
        @cancel=${this.handleCancel}
      >
        <div class="header-bar" part="header-bar">
            <div class="action-item">
                <slot name="action"></slot>
            </div>
            <div class="header-content">
                <slot name="header"></slot>
            </div>
            <div class="close-button-container" part="close-button-container">
                <button class="close-button" part="close-button" @click=${this.close} aria-label="Close">${IconX}</button>
            </div>
        </div>
        <slot class="content-slot"></slot>
      </dialog>
    `;
  }
}
