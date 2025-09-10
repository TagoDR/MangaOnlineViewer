import { LitElement, html, css } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';

/**
 * A dialog web component that can be used to display highly interruptive messages.
 * Uses the native <dialog> element for accessibility and focus management.
 * @fires open - This event is fired when the dialog opens.
 * @fires close - This event is fired when the dialog closes.
 * @fires closing - This event is fired before the dialog is closed by clicking escape or on the backdrop. The event is cancellable which means `event.preventDefault()` can cancel the closing of the dialog.
 * @cssprop --dialog-backdrop-bg - Background of the backdrop.
 * @cssprop --dialog-animation-duration - Duration of the dialog animation.
 * @cssprop --dialog-animation-easing - Easing of the dialog animation.
 * @cssprop --dialog-border-radius - Border radius of the dialog.
 * @cssprop --dialog-box-shadow - Box shadow of the dialog.
 * @cssprop --dialog-max-width - Max width of the dialog.
 * @cssprop --dialog-width - Width of the dialog.
 * @cssprop --dialog-padding - Padding of the dialog.
 * @cssprop --dialog-color - Color of the dialog.
 * @cssprop --dialog-bg - Background of the dialog.
 * @csspart dialog - The dialog element.
 */
@customElement('mov-dialog')
export class MovDialog<R = any> extends LitElement {
  static styles = css`
    :host(:not([open])) {
      display: none;
    }

    dialog {
      animation: scaleIn var(--dialog-animation-duration, 100ms)
        var(--dialog-animation-easing, ease-out);
      border-radius: var(--dialog-border-radius, 12px);
      box-shadow: var(--dialog-box-shadow, 0 2px 10px -5px rgba(0, 0, 0, 0.6));
      max-width: var(--dialog-max-width, 700px);
      width: var(--dialog-width, 100%);
      padding: var(--dialog-padding, 24px);
      color: var(--dialog-color, currentColor);
      background: var(--dialog-bg, white);
      border: none;
      display: flex;
      flex-direction: column;
      overflow-x: var(--dialog-overflow-x, hidden);
      overflow-y: var(--dialog-overflow-y, auto);
    }

    dialog::backdrop {
      background: var(--dialog-backdrop-bg, rgba(0, 0, 0, 0.6));
      animation: fadeIn var(--dialog-animation-duration, 100ms)
        var(--dialog-animation-easing, ease-out);
    }

    ::slotted(article),
    article {
      flex-grow: 1;
      overflow-y: auto;
      -webkit-overflow-scrolling: touch;
    }

    ::slotted(header),
    header,
    ::slotted(footer),
    footer {
      flex-shrink: 0;
    }

    @keyframes scaleIn {
      0% {
        transform: scale(0.9) translateY(30px);
        opacity: 0;
      }
      100% {
        transform: scale(1) translateY(0);
        opacity: 1;
      }
    }

    @keyframes fadeIn {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
  `;

  @property({ type: Boolean, reflect: true })
  open = false;

  public result?: R;

  @query('dialog')
  protected $dialog!: HTMLDialogElement;

  updated(changed: Map<string, any>) {
    if (changed.has('open')) {
      if (this.open) {
        this.$dialog.showModal();
        this.dispatchEvent(new CustomEvent('open'));
      } else {
        if (this.$dialog.open) {
          this.$dialog.close();
        }
      }
    }
  }

  render() {
    return html`
      <dialog part="dialog" @cancel=${this.handleCancel} @close=${this.handleClose}>
        <slot></slot>
      </dialog>
    `;
  }

  private handleCancel(event: Event) {
    const isDefaultPrevented = !this.dispatchEvent(new CustomEvent('closing', { cancelable: true }));
    if (isDefaultPrevented) {
      event.preventDefault();
    }
  }

  private handleClose() {
    this.open = false;
    this.dispatchEvent(new CustomEvent('close', { detail: this.result }));
  }

  show() {
    this.open = true;
  }

  close(result?: R) {
    this.result = result;
    this.open = false;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'mov-dialog': MovDialog;
  }
}

interface IOpenDialogConfig<T extends MovDialog<R>, R = any> {
  $content: Node | (($dialog: T) => void);
  $container: HTMLElement;
  initialize: (() => T);
}

export function openDialog<T extends MovDialog<R>, R = any>({
  $content,
  $container = document.body,
  initialize = (() => new MovDialog<R>() as T)
}: Partial<IOpenDialogConfig<T, R>> = {}): { $dialog: T; resolver: Promise<R> } {
  const $dialog = initialize();

  if ($content != null) {
    if (typeof $content === 'function') {
      $content($dialog);
    } else {
      $dialog.appendChild($content);
    }
  }

  const resolver = new Promise<R>(res => {
    $dialog.addEventListener<any>('close', (e: CustomEvent<R>) => {
      $dialog.remove();
      res(e.detail);
    }, { once: true });
  });

  $container.appendChild($dialog);
  $dialog.show();

  return { $dialog, resolver };
}
