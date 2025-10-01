import { css, html, LitElement, type PropertyValueMap } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import { IconX } from '../icons';
import './Icon';

declare global {
  interface HTMLElementTagNameMap {
    'mov-dialog': Dialog;
  }
}

/**
 * A dialog component that can be modal or inline.
 *
 * @element mov-dialog
 * @fires open - Dispatched when the dialog begins to open.
 * @fires close - Dispatched when the dialog has closed.
 *
 * @attr {boolean} open - Reflects the open/closed state of the dialog.
 * @attr {'dialog' | 'inline'} mode - The mode of the dialog. Defaults to 'dialog'.
 * @attr {boolean} fullscreen - For 'dialog' mode, whether the dialog covers the full screen.
 *
 * @slot - The main content to display inside the dialog.
 * @slot header - Content for the dialog's header.
 * @slot header-actions - Content for an optional action item, positioned opposite the close button.
 */
@customElement('mov-dialog')
export default class Dialog extends LitElement {
  static readonly styles = css`
    :host {
      --panel-overlay-transition: opacity linear 0.25s;
      --panel-overlay-opacity: 0.5;
      --panel-z-index: 1000;
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
    }

    :host([open]:not([mode='inline'])) dialog,
    .closing {
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

    .icon-container {
      display: flex;
      justify-content: center;
      padding-block-end: 1rem;
      text-align: center;
    }
    :host([icon='success']) .icon-container mov-icon {
      color: var(--theme-color-success, #28a745);
    }
    :host([icon='error']) .icon-container mov-icon {
      color: var(--theme-color-danger, #dc3545);
    }
    :host([icon='warning']) .icon-container mov-icon {
      color: var(--theme-color-warning, #ffc107);
    }
    :host([icon='info']) .icon-container mov-icon {
      color: var(--theme-color-info, #17a2b8);
    }
    :host([icon='question']) .icon-container mov-icon {
      color: var(--theme-color-secondary, #6c757d);
    }

    /* --- MODE: INLINE --- */
    :host([mode='inline']) {
      display: block;
      width: 100%;
    }
    :host([mode='inline']) dialog {
      all: unset;
      background-color: var(--theme-background-color, #fff);
      color: var(--theme-text-color, #000);
      box-shadow: none;
      display: flex;
      flex-direction: column;
      visibility: visible;
      position: relative;
      width: 100%;
      border: 1px solid var(--theme-border-color, #e0e0e0);
      border-radius: 12px;
    }
    :host([mode='inline']) .backdrop {
      display: none;
    }
    :host([mode='inline']) .close-button {
      display: none; /* No close button in inline mode */
    }

    /* --- MODE: DIALOG --- */
    :host([mode='dialog']) {
      --panel-transition: transform 0.15s ease-out, opacity 0.15s ease-out;
    }
    :host([mode='dialog']) dialog {
      opacity: 0;
      transition: var(--panel-transition);
    }
    :host([mode='dialog'][open]) dialog {
      opacity: 1;
    }
    :host([mode='dialog']:not([fullscreen])) dialog {
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) scale(0.9);
      border-radius: 12px;
      width: var(--dialog-width, 700px);
    }
    :host([mode='dialog']:not([fullscreen])[open]) dialog {
      transform: translate(-50%, -50%) scale(1);
    }
    :host([fullscreen]) {
      --panel-overlay-transition: none;
    }
    :host([fullscreen]) dialog {
      width: 100vw;
      height: 100vh;
      top: 0;
      left: 0;
      transform: translateY(2rem);
      border-radius: 0;
    }
    :host([fullscreen][open]) dialog {
      transform: translateY(0);
    }
  `;

  @property({ type: Boolean, reflect: true }) open = false;
  @property({ type: String, reflect: true }) mode: 'dialog' | 'inline' = 'dialog';
  @property({ type: Boolean, reflect: true }) fullscreen = false;
  @property({ type: String, reflect: true }) icon?:
    | 'info'
    | 'warning'
    | 'success'
    | 'error'
    | 'question';

  static getIconName(iconType?: 'info' | 'warning' | 'success' | 'error' | 'question') {
    switch (iconType) {
      case 'info':
        return 'info-circle';
      case 'warning':
        return 'alert-circle';
      case 'success':
        return 'circle-check';
      case 'error':
        return 'circle-x';
      case 'question':
        return 'help';
      default:
        return '';
    }
  }

  @query('dialog')
  private readonly dialog!: HTMLDialogElement;

  close() {
    this.open = false;
  }

  private handleCancel(e: Event) {
    e.preventDefault();
    this.close();
  }

  private handleClick(event: MouseEvent) {
    if (this.mode !== 'inline' && event.target === this.dialog) {
      this.close();
    }
  }

  protected updated(changedProperties: PropertyValueMap<this>): void {
    if (this.mode === 'inline') {
      return;
    }
    if (changedProperties.has('open')) {
      if (this.open) {
        this.dialog.classList.remove('closing');
        this.dialog.show();
        this.dispatchEvent(new CustomEvent('open', { bubbles: true, composed: true }));
      } else if (changedProperties.get('open') === true) {
        this.dispatchEvent(new CustomEvent('close', { bubbles: true, composed: true }));
        this.dialog.classList.add('closing');
        // Wait for animations to finish before closing the dialog.
        // The longest animation is 250ms, so 300ms is a safe buffer.
        setTimeout(() => {
          this.dialog.classList.remove('closing');
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
            <slot name="header-actions"></slot>
          </div>
          <div class="header-content">
            <slot name="label"></slot>
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
        <div class="content-slot">
          ${
            this.icon
              ? html`
                <div class="icon-container">
                  <mov-icon
                    .name=${Dialog.getIconName(this.icon)}
                    size="4rem"
                  ></mov-icon>
                </div>
              `
              : ''
          }
          <slot></slot>
        </div>
        <slot name="footer"></slot>
      </dialog>
    `;
  }
}
