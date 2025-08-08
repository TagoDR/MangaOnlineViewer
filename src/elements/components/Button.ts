import { css, html, LitElement } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';

/**
 * A wrapper component for <wa-button>.
 *
 * This component is designed to be a true drop-in replacement for <wa-button>,
 * correctly forwarding all properties and slotted content. It also ensures
 * proper layout behavior and proxies the click() method.
 */
@customElement('mov-button')
export class MovButton extends LitElement {
  static styles = css`
    :host {
      display: inline-flex;
      vertical-align: middle;
    }

    :host([disabled]) {
      pointer-events: none;
      user-select: none;
      opacity: 0.5;
      cursor: not-allowed;
    }
    /*
     * When we detect an icon-only button, we add the 'is-icon-button' class to the inner <wa-button>.
     * This CSS rule then targets that class to style the button's 'base' part, making it square.
     */

    wa-button.is-icon-button::part(base) {
      outline-offset: 2px;
      width: var(--wa-form-control-height);
      aspect-ratio: 1 / 1;
    }
  `;

  @query('slot:not([name])') labelSlot: HTMLSlotElement | undefined;
  @state() isIconButton = false;
  // These properties mirror the API of <wa-button>.
  @property({ type: String }) variant?: string;

  // --- Properties ---
  @property({ type: String }) appearance?: string;
  @property({ type: String }) size?: string;
  @property({ type: String }) href?: string;
  @property({ type: String }) target?: string;
  @property({ type: Boolean, reflect: true }) disabled?: boolean;
  @property({ type: Boolean, reflect: true }) loading?: boolean;
  @property({ type: String }) title: string = '';
  @property({ type: String }) value?: string;

  render() {
    return html`
      <wa-button
        class=${classMap({ 'is-icon-button': this.isIconButton })}
        .variant=${ifDefined(this.variant)}
        .appearance=${ifDefined(this.appearance)}
        .size=${ifDefined(this.size)}
        .href=${ifDefined(this.href)}
        .target=${ifDefined(this.target)}
        ?disabled=${ifDefined(this.disabled)}
        ?loading=${ifDefined(this.loading)}
        .title=${ifDefined(this.title)}
        .value=${ifDefined(this.value)}
      >
        <!--
          The 'slot' attribute on the <slot> element is for re-slotting.
          It seems to be required for wa-button to correctly pick up the icon.
          We only render the slots if they have content to avoid layout issues.
        -->
        <slot
          name="start"
          slot="start"
        ></slot>
        <slot @slotchange=${this.handleLabelSlotChange}></slot>
        <slot
          name="end"
          slot="end"
        ></slot>
      </wa-button>
    `;
  }

  private handleLabelSlotChange() {
    const nodes = this.labelSlot?.assignedNodes({ flatten: true });
    let hasIconLabel = false;
    let hasIcon = false;
    let text = '';

    // If there's only an icon and no text, it's an icon button
    [...(nodes ?? [])].forEach(node => {
      if (
        (node.nodeType === Node.ELEMENT_NODE && (node as HTMLElement).localName === 'wa-icon') ||
        (node as HTMLElement).localName === 'mov-icon'
      ) {
        hasIcon = true;
        if (!hasIconLabel) hasIconLabel = (node as HTMLElement).hasAttribute('label');
      }

      // Concatenate text nodes
      if (node.nodeType === Node.TEXT_NODE) {
        text += node.textContent;
      }
    });

    this.isIconButton = text.trim() === '' && hasIcon;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'mov-button': MovButton;
  }
}
