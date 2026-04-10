import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import './Icon.ts';

/**
 * A dropdown component that can be used to display a menu of options.
 * This component is designed to be compatible with wa-dropdown API. *
 *
 * API is compatible with Web Awesome's wa-dropdown component (v3.3.1).
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
      top: 100%;
      left: 0;
      background-color: var(--theme-background-color, #f9f9f9);
      min-width: 160px;
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
      z-index: 100;
      list-style: none;
      padding: 0;
      margin: 4px 0 0;
      border: 1px solid var(--theme-border-color, #ccc);
      border-radius: 5px;
    }
    :host([placement^='top']) .dropdown-content {
      top: auto;
      bottom: 100%;
      margin: 0 0 4px;
    }
    :host([placement$='end']) .dropdown-content {
      left: auto;
      right: 0;
    }
    :host([open]) .dropdown-content {
      display: block;
    }
  `;

  @property({ type: Boolean, reflect: true })
  open = false;

  @property({ type: Boolean, reflect: true })
  checkable = false;

  @property({ type: Number }) distance = 0;
  @property({ type: Number }) skidding = 0;
  @property({ type: String }) placement:
    | 'top'
    | 'top-start'
    | 'top-end'
    | 'bottom'
    | 'bottom-start'
    | 'bottom-end'
    | 'right'
    | 'right-start'
    | 'right-end'
    | 'left'
    | 'left-start'
    | 'left-end' = 'bottom-start';

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
      this.hide();
    }
  }

  show() {
    if (this.open) return;
    this.open = true;
    this.dispatchEvent(new CustomEvent('wa-show', { bubbles: true, composed: true }));
    setTimeout(() => {
      this.dispatchEvent(new CustomEvent('wa-after-show', { bubbles: true, composed: true }));
    }, 150);
  }

  hide() {
    if (!this.open) return;
    this.open = false;
    this.dispatchEvent(new CustomEvent('wa-hide', { bubbles: true, composed: true }));
    setTimeout(() => {
      this.dispatchEvent(new CustomEvent('wa-after-hide', { bubbles: true, composed: true }));
    }, 150);
  }

  toggle() {
    if (this.open) {
      this.hide();
    } else {
      this.show();
    }
  }

  render() {
    return html`
      <div
        @click=${this.toggle}
        class="trigger-wrapper"
        part="trigger"
      >
        <slot name="trigger"></slot>
      </div>
      <div
        class="dropdown-content"
        part="menu"
      >
        <slot></slot>
      </div>
    `;
  }
}

/**
 * A dropdown item component that can be used within a mov-dropdown.
 * This component is designed to be compatible with wa-dropdown-item API.
 *
 * API is compatible with Web Awesome's wa-dropdown-item component (v3.3.1).
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
    :host([selected]) .item,
    :host([checked]) .item {
      background-color: var(--mov-color-fill-normal);
      color: var(--mov-color-on-normal);
    }
    :host([disabled]) .item {
      opacity: 0.5;
      cursor: not-allowed;
      pointer-events: none;
    }
    :host([variant='danger']) .item {
      color: var(--theme-color-danger, #dc3545);
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
    :host([selected]) .check-icon,
    :host([checked]) .check-icon {
      visibility: visible;
    }
    ::slotted([slot='details']) {
      font-size: 0.9em;
      opacity: 0.7;
    }
  `;

  @property({ type: Boolean, reflect: true })
  selected = false;

  @property({ type: Boolean, reflect: true })
  checked = false;

  @property({ type: Boolean, reflect: true })
  disabled = false;

  @property({ type: String }) value = '';
  @property({ type: String, reflect: true }) variant: 'default' | 'danger' = 'default';
  @property({ type: String, reflect: true }) type: 'normal' | 'checkbox' = 'normal';

  private handleSelect() {
    if (this.disabled) return;
    this.dispatchEvent(
      new CustomEvent('wa-select', {
        detail: { item: this },
        bubbles: true,
        composed: true,
      }),
    );
  }

  render() {
    return html`
      <div
        class="item"
        @click=${this.handleSelect}
        part="base"
      >
        <div
          class="item-content"
          part="label"
        >
          <mov-icon
            class="check-icon"
            name="IconCheck"
            part="checkmark"
          ></mov-icon>
          <slot
            name="icon"
            part="icon"
          ></slot>
          <slot></slot>
        </div>
        <slot
          name="details"
          part="details"
        ></slot>
      </div>
    `;
  }
}

/**
 * A divider component that can be used within a mov-dropdown.
 * This component is designed to be compatible with wa-divider API.
 *
 * API is compatible with Web Awesome's wa-divider component (v3.3.1).
 *
 * @element mov-divider
 */
@customElement('mov-divider')
export class MovDivider extends LitElement {
  static readonly styles = css`
    :host {
      display: block;
    }
    :host([orientation='horizontal']) .divider {
      border-top: 1px solid var(--theme-border-color, #ccc);
      margin: 4px 0;
    }
    :host([orientation='vertical']) .divider {
      border-left: 1px solid var(--theme-border-color, #ccc);
      height: 100%;
      margin: 0 4px;
      display: inline-block;
    }
  `;

  @property({ type: String, reflect: true }) orientation: 'horizontal' | 'vertical' = 'horizontal';

  render() {
    return html`<div
      class="divider"
      role="separator"
    ></div>`;
  }
}
