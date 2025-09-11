import { css, html, LitElement, type PropertyValueMap } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import { IconX } from '../icons';

declare global {
  interface HTMLElementTagNameMap {
    'mov-panel': MovPanel;
  }
}

/**
 * A versatile panel component that can function as a side drawer or a dialog.
 *
 * @element mov-panel
 * @fires open - Dispatched when the panel begins to open.
 * @fires close - Dispatched when the panel has closed.
 *
 * @attr {boolean} open - Reflects the open/closed state of the panel.
 * @attr {'drawer' | 'dialog'} mode - The mode of the panel. Defaults to 'drawer'.
 * @attr {'left' | 'right'} position - For 'drawer' mode, the side from which the panel appears. Defaults to 'left'.
 * @attr {boolean} fullscreen - For 'dialog' mode, whether the dialog covers the full screen.
 *
 * @slot - The main content to display inside the panel.
 * @slot header - Content for the panel's header.
 * @slot action - Content for an optional action item, positioned opposite the close button.
 */
@customElement('mov-panel')
export class MovPanel extends LitElement {
  static styles = css`
    :host {
      --panel-overlay-transition: opacity linear 0.25s;
      --panel-overlay-opacity: 0.5;
    }

    dialog {
      all: unset;
      background-color: var(--theme-background-color, #fff);
      color: var(--theme-text-color, #000);
      z-index: 1001;
      position: fixed;
      box-shadow: 0 0 25px rgba(0, 0, 0, 0.5);
      display: flex;
      flex-direction: column;
      visibility: hidden;
    }

    :host([open]) dialog {
      visibility: visible;
    }

    dialog::backdrop {
      background-color: #000;
      opacity: 0;
      transition: var(--panel-overlay-transition);
    }

    :host([open]) dialog::backdrop {
      opacity: var(--panel-overlay-opacity);
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

    /* --- MODE: DRAWER --- */
    :host([mode='drawer']) {
      --panel-transition: transform 0.25s ease-out;
    }
    :host([mode='drawer']) dialog {
      width: 350px;
      max-width: 75vw;
      top: 0;
      bottom: 0;
      height: 100%;
      transition: var(--panel-transition);
    }
    :host([mode='drawer'][position='left']) dialog {
      left: 0;
      transform: translateX(-100%);
    }
    :host([mode='drawer'][position='right']) dialog {
      right: 0;
      transform: translateX(100%);
    }
    :host([mode='drawer'][open]) dialog {
      transform: none;
    }
    :host([mode='drawer'][position='right']) .action-item {
      order: 3;
    }
    :host([mode='drawer'][position='right']) .header-content {
      order: 2;
    }
    :host([mode='drawer'][position='right']) .close-button-container {
      order: 1;
      justify-content: flex-start;
    }

    /* --- MODE: DIALOG --- */
    :host([mode='dialog']) {
      --panel-transition: transform 0.15s ease-out, opacity 0.15s ease-out;
    }
    :host([mode='dialog']) dialog {
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) scale(0.9);
      border-radius: 12px;
      width: var(--dialog-width, 700px);
      max-width: 90vw;
      max-height: 90vh;
      opacity: 0;
      transition: var(--panel-transition);
    }
    :host([mode='dialog'][open]) dialog {
      transform: translate(-50%, -50%) scale(1);
      opacity: 1;
    }
    :host([mode='dialog'][fullscreen]) dialog {
      width: 100vw;
      height: 100vh;
      max-width: 100vw;
      max-height: 100vh;
      top: 0;
      left: 0;
      transform: none;
      border-radius: 0;
    }
  `;

  @property({ type: Boolean, reflect: true }) open = false;
  @property({ type: String, reflect: true }) mode: 'drawer' | 'dialog' = 'drawer';
  @property({ type: String, reflect: true }) position: 'left' | 'right' = 'left';
  @property({ type: Boolean, reflect: true }) fullscreen = false;

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
        if (changedProperties.get('open') === true) {
          this.dispatchEvent(new CustomEvent('close', { bubbles: true, composed: true }));
        }

        const closeDialog = () => {
          if (this.dialog.open) {
            this.dialog.close();
          }
        };

        const timer = setTimeout(closeDialog, 300);
        this.dialog.addEventListener(
          'transitionend',
          () => {
            clearTimeout(timer);
            closeDialog();
          },
          { once: true },
        );
      }
    }
  }

  render() {
    return html`
      <dialog
        part="dialog"
        @cancel=${this.handleCancel}
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
