import { css, html, LitElement, type PropertyValueMap } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';

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
 * @fires close - Dispatched when the drawer begins to close. The parent component is responsible for setting `open = false`.
 *
 * @attr {boolean} open - Reflects the open/closed state of the drawer. Set this to true to open the drawer and false to close it.
 * @attr {boolean} right - If present, positions the drawer on the right side of the screen.
 *
 * @slot - The content to display inside the drawer.
 *
 * @csspart dialog - The underlying <dialog> element used for the drawer.
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

    dialog::backdrop {
      background-color: #000;
      opacity: 0;
      transition: var(--side-drawer-overlay-transition);
    }

    :host([open]) dialog {
      transform: none;
      visibility: visible;
    }

    :host([open]) dialog::backdrop {
      opacity: var(--side-drawer-overlay-opacity);
    }

    slot {
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
    this.dispatchEvent(new CustomEvent('close', { bubbles: true, composed: true }));
  }

  protected firstUpdated(): void {
    this.dialog.addEventListener('close', () => {
      // This handles the ESC key closing the dialog
      this.close();
    });
  }

  protected updated(changedProperties: PropertyValueMap<this>): void {
    if (changedProperties.has('open')) {
      if (this.open) {
        if (!this.dialog.open) {
          this.dialog.showModal();
        }
        this.dispatchEvent(new CustomEvent('open', { bubbles: true, composed: true }));
      } else {
        // Animate the closing of the drawer
        this.dialog.addEventListener(
          'transitionend',
          () => {
            if (!this.open && this.dialog.open) {
              this.dialog.close();
            }
          },
          { once: true },
        );
      }
    }
  }

  private handleBackdropClick(event: MouseEvent) {
    // Close the drawer if the backdrop is clicked
    if (event.target === this.dialog) {
      this.close();
    }
  }

  render() {
    return html`
      <dialog
        part="dialog"
        @click=${this.handleBackdropClick}
      >
        <slot></slot>
      </dialog>
    `;
  }
}
