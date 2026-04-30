import { html, LitElement, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import './Icon.ts';

import { appendStyleSheet } from '../../utils/css';
import styles from '../styles/toast.css?inline';

declare global {
  interface HTMLElementTagNameMap {
    'mov-toast': Toast;
  }
}

/**
 * A toast component for displaying brief notifications.
 *
 * API is compatible with Web Awesome's wa-toast-item component (v3.3.1).
 *
 * @element mov-toast
 *
 * @slot - The default slot for the toast's description.
 * @slot icon - An optional icon to display.
 * @slot action - A slot for buttons or links.
 *
 * @fires wa-show - Dispatched when the toast begins to open.
 * @fires wa-after-show - Dispatched after the opening animation completes.
 * @fires wa-hide - Dispatched when the toast begins to close.
 * @fires wa-after-hide - Dispatched after the closing animation completes.
 */
@customElement('mov-toast')
export default class Toast extends LitElement {
  static readonly styles = [unsafeCSS(styles)];

  /** Indicates if the toast is currently visible. */
  @property({ type: Boolean, reflect: true }) open = false;

  /** The visual style of the toast. */
  @property({ reflect: true }) variant: 'primary' | 'success' | 'neutral' | 'warning' | 'danger' =
    'primary';

  /** The duration in milliseconds before the toast auto-hides. Set to Infinity to disable. */
  @property({ type: Number }) duration = 3000;

  /** Whether the toast should show a close button. */
  @property({ type: Boolean }) closable = false;

  /** An optional title for the toast. */
  @property() title = '';

  /** An optional description for the toast. */
  @property() description = '';

  /** An optional icon name to display. */
  @property() icon?: string;

  /** The placement of the toast. */
  @property({ reflect: true }) placement: ToastPlacement = 'bottom-end';

  private autoHideTimeout?: number;

  /** Shows the toast. */
  async show() {
    if (this.open) return;

    // Ensure the component has rendered at least once in its hidden state
    await this.updateComplete;

    this.dispatchEvent(new CustomEvent('wa-show', { bubbles: true, composed: true }));
    this.open = true;

    if (this.duration < Infinity) {
      this.autoHideTimeout = window.setTimeout(() => this.hide(), this.duration);
    }

    return new Promise<void>(resolve => {
      setTimeout(() => {
        this.dispatchEvent(new CustomEvent('wa-after-show', { bubbles: true, composed: true }));
        resolve();
      }, 300);
    });
  }

  /** Hides the toast. */
  async hide() {
    if (!this.open) return;

    window.clearTimeout(this.autoHideTimeout);
    this.dispatchEvent(new CustomEvent('wa-hide', { bubbles: true, composed: true }));
    this.open = false;

    return new Promise<void>(resolve => {
      setTimeout(() => {
        this.dispatchEvent(new CustomEvent('wa-after-hide', { bubbles: true, composed: true }));
        this.remove();
        resolve();
      }, 300);
    });
  }

  private handleCloseClick() {
    this.hide();
  }

  private getDefaultIcon() {
    if (this.icon) return this.icon;
    switch (this.variant) {
      case 'success':
        return 'IconCircleCheck';
      case 'warning':
        return 'IconAlertCircle';
      case 'danger':
        return 'IconCircleX';
      default:
        return 'IconInfoCircle';
    }
  }

  render() {
    return html`
      <div
        part="base"
        class=${classMap({
          'mov-toast': true,
          [`mov-toast-variant-${this.variant}`]: true,
        })}
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
        aria-hidden=${this.open ? 'false' : 'true'}
      >
        <div class="mov-toast-body" part="body">
          <div class="mov-toast-icon" part="icon">
            <slot name="icon">
              <mov-icon name=${this.getDefaultIcon()}></mov-icon>
            </slot>
          </div>

          <div class="mov-toast-content" part="content">
            ${this.title ? html`<div class="mov-toast-title" part="title">${this.title}</div>` : ''}
            <div class="mov-toast-description" part="description">
              <slot>${this.description}</slot>
            </div>
          </div>

          <slot name="action"></slot>

          ${
            this.closable
              ? html`
                <button
                  type="button"
                  class="mov-toast-close"
                  part="close-button"
                  @click=${this.handleCloseClick}
                  aria-label="Close"
                >
                  <mov-icon name="IconX"></mov-icon>
                </button>
              `
              : ''
          }
        </div>
      </div>
    `;
  }
}

export type ToastPlacement =
  | 'top-start'
  | 'top-center'
  | 'top-end'
  | 'bottom-start'
  | 'bottom-center'
  | 'bottom-end';

export interface ToastOptions {
  title?: string;
  description?: string;
  message?: string;
  variant?: 'primary' | 'success' | 'neutral' | 'warning' | 'danger' | 'info' | 'error';
  duration?: number;
  closable?: boolean;
  icon?: string;
  placement?: ToastPlacement;
}

/**
 * Utility function to show a toast notification.
 * Manages singleton toast stacks in the DOM for different placements.
 */
export const toast = (options: ToastOptions) => {
  const placement = options.placement || 'bottom-end';
  const stackClass = `mov-toast-stack-${placement}`;
  let stack = document.querySelector(`.mov-toast-stack.${stackClass}`);

  // Inject global styles for the stack if not already present
  const hostIndex = styles.indexOf(':host');
  const globalStyles = hostIndex > -1 ? styles.substring(0, hostIndex).trim() : styles;
  appendStyleSheet('mov-toast-stack-styles', globalStyles);

  if (!stack) {
    stack = document.createElement('div');
    stack.className = `mov-toast-stack ${stackClass}`;
    document.body.appendChild(stack);
  }

  const toastItem = document.createElement('mov-toast') as Toast;

  // Map 'info' and 'error' to Web Awesome variants if necessary
  let variant = options.variant || 'primary';
  if (variant === 'info') variant = 'primary';
  if (variant === 'error') variant = 'danger';

  toastItem.variant = variant as Toast['variant'];
  toastItem.title = options.title || '';
  toastItem.description = options.description || options.message || '';
  toastItem.duration = options.duration ?? 3000;
  toastItem.closable = options.closable ?? true;
  toastItem.placement = placement;
  if (options.icon) toastItem.icon = options.icon;

  stack.appendChild(toastItem);

  // Small delay to ensure the element is in the DOM before animating
  requestAnimationFrame(() => {
    toastItem.show();
  });

  return toastItem;
};

// Convenience methods
toast.info = (options: ToastOptions) => toast({ ...options, variant: 'primary' });
toast.success = (options: ToastOptions) => toast({ ...options, variant: 'success' });
toast.warning = (options: ToastOptions) => toast({ ...options, variant: 'warning' });
toast.error = (options: ToastOptions) => toast({ ...options, variant: 'danger' });
