import { css, html, LitElement, unsafeCSS } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit-html/directives/if-defined.js';
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
export class Button extends LitElement {
  static styles = [unsafeCSS(styles), css``];

  @query('slot:not([name])') labelSlot: HTMLSlotElement | undefined;
  @state() isIconButton = false;

  /**
   * The color variant to use, corresponding to a theme color name (e.g., "brand", "accent").
   * @type {'neutral' | 'brand' | 'success' | 'warning' | 'danger'}
   */
  @property({ type: String })
  variant?: 'neutral' | 'brand' | 'success' | 'warning' | 'danger';

  /**
   * The visual appearance of the button.
   * @type {'accent' | 'filled' | 'outline' | 'light' | 'subtle' | 'plain'}
   */
  @property({ type: String, reflect: true })
  appearance?: 'accent' | 'filled' | 'outlined' | 'light' | 'subtle' | 'plain';

  /**
   * The size of the button.
   * @type {'small' | 'medium' | 'large'}
   */
  @property({ type: String, reflect: true })
  size?: 'small' | 'medium' | 'large' = 'medium';

  /**
   * If provided, the component will be rendered as an `<a>` tag with this `href`.
   * @type {string | undefined}
   */
  @property({ type: String })
  href?: string;

  /**
   * The `target` attribute for the link, used when `href` is set.
   * @type {string | undefined}
   */
  @property({ type: String })
  target?: string;

  /**
   * If `true`, the button will be in a disabled state and cannot be interacted with.
   * @type {boolean}
   */
  @property({ type: Boolean, reflect: true })
  disabled?: boolean = false;

  /**
   * If `true`, a loading spinner will be shown, and the button will be disabled.
   * @type {boolean}
   */
  @property({ type: Boolean, reflect: true })
  loading?: boolean = false;

  /**
   * The `title` attribute, which is often displayed as a tooltip on hover.
   * @type {string}
   */
  @property({ type: String })
  title: string = '';

  /**
   * The `value` attribute, used when the component is rendered as a `<button>`.
   * @type {string | undefined}
   */
  @property({ type: String })
  value?: string;

  /**
   * The `pill` attribute, used to make the button more rounded.
   * @type {boolean | undefined}
   */
  @property({ type: Boolean })
  pill?: boolean;

  /**
   * The `name` attribute, used when the component is rendered as a `<button>`.
   * @type {string | undefined}
   */
  @property({ type: String })
  name?: string;

  /**
   * The `type` attribute, used when the component is rendered as a `<button>`.
   * @type {'button' | 'submit' | 'reset'}
   */
  @property({ type: String })
  type?: 'button' | 'submit' | 'reset' = 'button';

  /**
   * Renders the component as either an `<a>` or a `<button>` element based on the `href` property.
   * @internal
   */
  render() {
    const isLink = this.href ? true : false;
    const classes = {
      button: true,
      [`button--${this.variant}`]: !!this.variant,
      [`button--${this.appearance}`]: !!this.appearance,
      [`button--${this.size}`]: !!this.size,
      'button--disabled': !!(this.disabled || this.loading),
      'button--loading': !!this.loading,
      'button--pill': !!this.pill,
    };

    // Update host class for icon button styling
    if (this.isIconButton) {
      this.classList.add('icon-button');
    } else {
      this.classList.remove('icon-button');
    }

    const buttonContent = html`
      <span
        part="content"
        class="button__content"
      >
        <slot
          name="start"
          part="start"
          class="start"
        ></slot>
        <slot
          part="label"
          class="label"
          @slotchange=${this.handleLabelSlotChange}
        ></slot>
        <slot
          name="end"
          part="end"
          class="end"
        ></slot>
        ${
          this.loading
            ? html`<mov-icon
              class="button__spinner"
              part="spinner"
              name="IconLoader2"
            ></mov-icon>`
            : ''
        }
      </span>
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

  /**
   * Clicks the button.
   * @public
   */
  click() {
    const button = this.renderRoot.querySelector('.button') as
      | HTMLButtonElement
      | HTMLAnchorElement;
    button?.click();
  }

  /**
   * Sets focus on the button.
   * @public
   */
  focus(options?: FocusOptions) {
    const button = this.renderRoot.querySelector('.button') as
      | HTMLButtonElement
      | HTMLAnchorElement;
    button?.focus(options);
  }

  /**
   * Removes focus from the button.
   * @public
   */
  blur() {
    const button = this.renderRoot.querySelector('.button') as
      | HTMLButtonElement
      | HTMLAnchorElement;
    button?.blur();
  }
}
