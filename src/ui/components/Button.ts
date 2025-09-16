import { html, LitElement, unsafeCSS } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import './Icon.ts';
import styles from '../styles/button.css?inline';

declare global {
  interface HTMLElementTagNameMap {
    'mov-button': Button;
  }
}

/**
 * A versatile button component inspired by WebAwesome and Mantine UI.
 * It can be rendered as a `<button>` or an `<a>` tag, supports multiple visual appearances,
 * sizes, and a loading state. This component is fully standalone while maintaining
 * compatibility with wa-button API.
 *
 * @element mov-button
 *
 * @slot - The default slot for the button's text label.
 * @slot start - For placing an icon or element before the label.
 * @slot end - For placing an icon or element after the label.
 *
 * @part base - The component's base wrapper element (button or a tag).
 * @part label - The component's label part.
 * @part start - The start slot container.
 * @part end - The end slot container.
 *
 */
@customElement('mov-button')
export default class Button extends LitElement {
  static styles = [unsafeCSS(styles)];

  @query('.button') button: HTMLButtonElement | HTMLLinkElement | undefined;
  @query('slot:not([name])') private readonly labelSlot: HTMLSlotElement | undefined;

  @state() private isIconButton = false;
  @state() private hasLabel = false;
  @state() private hasStart = false;
  @state() private hasEnd = false;

  @property() title = '';
  @property({ reflect: true }) appearance: 'accent' | 'filled' | 'outline' | 'plain' = 'accent';
  @property({ reflect: true }) size: 'small' | 'medium' | 'large' = 'medium';
  @property({ attribute: 'with-caret', type: Boolean, reflect: true }) withCaret = false;
  @property({ type: Boolean, reflect: true }) disabled = false;
  @property({ type: Boolean, reflect: true }) loading = false;
  @property({ type: Boolean, reflect: true }) pill = false;
  @property() type: 'button' | 'submit' | 'reset' = 'button';
  @property({ reflect: true }) name?: string;
  @property({ reflect: true }) value?: string;
  @property({ reflect: true }) href?: string;
  @property() target?: '_blank' | '_parent' | '_self' | '_top';
  @property() rel?: string;
  @property() download?: string;
  @property({ reflect: true }) form: string | null = null;

  private handleClick(event: MouseEvent) {
    if (this.disabled || this.loading) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }

    if (this.type === 'submit' && !this.href) {
      const form = this.closest('form');
      if (form) {
        event.preventDefault();
        const tempButton = document.createElement('button');
        tempButton.type = this.type;
        tempButton.style.display = 'none';
        if (this.name) tempButton.name = this.name;
        if (this.value) tempButton.value = this.value;
        form.appendChild(tempButton);
        tempButton.click();
        form.removeChild(tempButton);
      }
    }
  }

  click() {
    this.button?.click();
  }

  focus(options?: FocusOptions) {
    this.button?.focus(options);
  }

  blur() {
    this.button?.blur();
  }

  render() {
    const isLink = !!this.href;
    const classes = {
      button: true,
      'with-caret': this.withCaret,
      disabled: this.disabled,
      loading: this.loading,
      pill: this.pill,
      'has-label': this.hasLabel,
      'has-start': this.hasStart,
      'has-end': this.hasEnd,
      'is-icon-button': this.isIconButton,
    };

    const buttonContent = html`
      <slot
        name="start"
        @slotchange=${this.handleLabelSlotChange}
        part="start"
        class="start"
      ></slot>
      <slot
        @slotchange=${this.handleLabelSlotChange}
        part="label"
        class="label"
      ></slot>
      <slot
        name="end"
        @slotchange=${this.handleLabelSlotChange}
        part="end"
        class="end"
      ></slot>
      ${
        this.withCaret
          ? html`<mov-icon
            part="caret"
            class="caret"
            name="IconChevronRight"
            style="transform: rotate(90deg)"
          ></mov-icon>`
          : ''
      }
      ${
        this.loading
          ? html`<span
            part="spinner"
            class="spinner"
          ></span>`
          : ''
      }
    `;

    return isLink
      ? html`
          <a
            part="base"
            class=${classMap(classes)}
            href=${ifDefined(this.href)}
            target=${ifDefined(this.target)}
            title=${ifDefined(this.title)}
            role="button"
            aria-disabled=${this.disabled ? 'true' : 'false'}
            tabindex=${this.disabled ? '-1' : '0'}
            download=${ifDefined(this.download)}
            @click=${this.handleClick}
          >
            ${buttonContent}
          </a>
        `
      : html`
          <button
            part="base"
            class=${classMap(classes)}
            ?disabled=${this.disabled || this.loading}
            type=${ifDefined(this.type)}
            title=${ifDefined(this.title)}
            name=${ifDefined(this.name)}
            value=${ifDefined(this.value)}
            aria-disabled=${this.disabled ? 'true' : 'false'}
            tabindex=${this.disabled ? '-1' : '0'}
            @click=${this.handleClick}
          >
            ${buttonContent}
          </button>
        `;
  }

  private handleLabelSlotChange() {
    const isIconEl = (el: Element | null | undefined) => {
      if (!el) return false;
      const name = el.localName;
      return name === 'wa-icon' || name === 'mov-icon' || name === 'svg';
    };
    const nodes = this.labelSlot?.assignedNodes({ flatten: true }) ?? [];
    let hasIconLabel = false;
    let hasIcon = false;
    let text = '';

    // If there's only an icon and no text, it's an icon button
    [...nodes].forEach((node, index) => {
      if (node.nodeType === Node.ELEMENT_NODE && isIconEl(node as HTMLElement)) {
        hasIcon = true;
        if (!hasIconLabel) hasIconLabel = (node as HTMLElement).hasAttribute('label');
      }

      // Concatenate text nodes
      if (node.nodeType === Node.TEXT_NODE) {
        text += node.textContent;
      }
      if (index === 0 && isIconEl(node as HTMLElement)) {
        (node as HTMLElement).setAttribute('slot', 'start');
      }
      if (index === nodes.length - 1 && isIconEl(node as HTMLElement)) {
        (node as HTMLElement).setAttribute('slot', 'end');
      }
    });

    this.isIconButton = text.trim() === '' && hasIcon;
  }
}
