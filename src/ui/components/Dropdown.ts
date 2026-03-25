import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import './Icon.ts';

/**
 * A dropdown component that can be used to display a menu of options.
 * This component is designed to be compatible with wa-dropdown API. *
 *
 * API is compatible with Web Awesome's wa-dropdown component and Webcomponents 3.0.0 standards.
 *
 * @element mov-dropdown
 *
 * @slot - The default slot for the dropdown's content.
 * @slot trigger - The element that triggers the dropdown.
 */
@customElement('mov-dropdown')
export class MovDropdown extends LitElement {
  static readonly styles = css`
    :host {
      position: relative;
      display: inline-block;
    }
    :host([checkable]) {
      --mov-dropdown-item-checkmark-display: inline-block;
    }
    .dropdown-content {
      display: none;
      position: absolute;
      background-color: var(--theme-background-color, #f9f9f9);
      min-width: 160px;
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
      z-index: 1;
      list-style: none;
      padding: 0;
      margin: 0;
      border: 1px solid var(--theme-border-color, #ccc);
      border-radius: 5px;
    }
    :host([open]) .dropdown-content {
      display: block;
    }
  `;

  @property({ type: Boolean, reflect: true })
  open = false;

  @property({ type: Boolean, reflect: true })
  checkable = false;

  private readonly boundClickHandler: (e: MouseEvent) => void;

  constructor() {
    super();
    this.boundClickHandler = this.handleClickOutside.bind(this);
  }

  connectedCallback() {
    super.connectedCallback();
    document.addEventListener('click', this.boundClickHandler);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    document.removeEventListener('click', this.boundClickHandler);
  }

  handleClickOutside(event: MouseEvent) {
    if (this.open && !event.composedPath().includes(this)) {
      this.open = false;
    }
  }

  toggle() {
    this.open = !this.open;
  }

  render() {
    return html`
      <div
        @click=${this.toggle}
        class="trigger-wrapper"
      >
        <slot name="trigger"></slot>
      </div>
      <div class="dropdown-content">
        <slot></slot>
      </div>
    `;
  }
}

/**
 * A dropdown item component that can be used within a mov-dropdown.
 * This component is designed to be compatible with wa-dropdown-item API.
 *
 * API is compatible with Web Awesome's wa-dropdown-item component and Webcomponents 3.0.0 standards.
 *
 * @element mov-dropdown-item
 *
 * @slot - The default slot for the item's label.
 * @slot icon - For placing an icon before the label.
 * @slot details - For placing additional information after the label.
 */
@customElement('mov-dropdown-item')
export class MovDropdownItem extends LitElement {
  static readonly styles = css`
    :host {
      display: block;
      min-width: max-content;
    }
    .item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 8px 12px;
      cursor: pointer;
      color: var(--theme-body-text-color);
      background-color: var(--theme-background-color);
      gap: 10px;
    }
    .item:hover {
      background-color: var(--mov-color-fill-normal);
      color: var(--mov-color-on-normal);
    }
    :host([selected]) .item {
      background-color: var(--mov-color-fill-normal);
      color: var(--mov-color-on-normal);
    }
    .item-content {
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .check-icon {
      display: var(--mov-dropdown-item-checkmark-display, none);
      visibility: hidden;
      width: 1.2em;
      height: 1.2em;
    }
    :host([selected]) .check-icon {
      visibility: visible;
    }
    ::slotted([slot='details']) {
      font-size: 0.9em;
      opacity: 0.7;
    }
  `;

  @property({ type: Boolean, reflect: true })
  selected = false;

  render() {
    return html`
      <div class="item">
        <div class="item-content">
          <mov-icon
            class="check-icon"
            name="IconCheck"
          ></mov-icon>
          <slot name="icon"></slot>
          <slot></slot>
        </div>
        <slot name="details"></slot>
      </div>
    `;
  }
}

/**
 * A divider component that can be used within a mov-dropdown.
 * This component is designed to be compatible with wa-dropdown-divider API.
 *
 * API is compatible with Web Awesome's wa-dropdown-divider component and Webcomponents 3.0.0 standards.
 *
 * @element mov-divider
 */
@customElement('mov-divider')
export class MovDivider extends LitElement {
  static readonly styles = css`
    :host {
      display: block;
    }
    .divider {
      border-top: 1px solid var(--theme-border-color, #ccc);
      margin: 4px 0;
    }
  `;

  render() {
    return html`<div
      class="divider"
      role="separator"
    ></div>`;
  }
}
