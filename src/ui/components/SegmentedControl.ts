import { css, html, LitElement, nothing, type PropertyValues } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { choose } from 'lit-html/directives/choose.js';

/**
 * Defines the structure for a single option within the segmented control.
 */
export type SegmentedControlOptionData = {
  /** The unique value for the option, submitted with the change event. */
  value: string;
  /** The human-readable label for the option. */
  label: string;
  /** An optional icon template to display with the label. */
  icon?: string;
};

declare global {
  interface HTMLElementTagNameMap {
    'segmented-control': SegmentedControl;
    'segmented-control-option': SegmentedControlOption;
  }
}

/**
 * A control that allows users to select one option from a set, presented as a row of connected buttons.
 * It is a fully custom component, eliminating the need for hidden radio inputs.
 *
 * @element segmented-control
 *
 * @fires change - Dispatched when the selected value changes. The `detail` property of the event contains the new value.
 *
 * @slot - This component accepts `segmented-control-option` elements to define the options.
 */
@customElement('segmented-control')
export class SegmentedControl extends LitElement {
  /**
   * The currently selected value. This should correspond to the `value` property of one of the options.
   * @type {string}
   */
  @property({ type: String, reflect: true })
  value = '';

  /**
   * The position of the label relative to the icon.
   * - `side`: Label is to the side of the icon.
   * - `bottom`: Label is below the icon.
   * - `tooltip`: Label is hidden and shown in a tooltip on hover.
   * @type {'side' | 'bottom' | 'tooltip'}
   */
  @property({ type: String })
  labelPosition: 'side' | 'bottom' | 'tooltip' = 'side';

  /**
   * The size of the icons in the control.
   * @type {'small' | 'medium' | 'large'}
   */
  @property({ type: String })
  size: 'small' | 'medium' | 'large' = 'medium';

  @state()
  private _options: SegmentedControlOptionData[] = [];

  @query('.thumb')
  private readonly thumb!: HTMLDivElement;

  @query('slot')
  private readonly _slotEl!: HTMLSlotElement;

  private readonly resizeObserver = new ResizeObserver(() => this.updateThumbPosition());

  static readonly styles = css`
    :host {
      width: 100%;
      display: block;
    }
    .segmented-control {
      position: relative;
      display: flex;
      gap: 0.25rem;
      border-radius: 0.5rem;
      background-color: var(--theme-border-color);
      padding: 0.25rem;
      flex-wrap: wrap;
    }
    .thumb {
      position: absolute;
      top: 0;
      left: 0;
      border-radius: 0.5rem;
      background-color: var(--mov-color-fill-loud);
      transition:
        transform 0.3s cubic-bezier(0.4, 0, 0.2, 1),
        width 0.3s cubic-bezier(0.4, 0, 0.2, 1),
        height 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      z-index: 1;
    }
    .option {
      flex: 1;
      text-align: center;
      z-index: 2; /* Ensure button is above thumb */
      position: relative; /* Needed to correctly position the button */
    }

    .button {
      /* The button now acts as the interactive label */
      width: 100%;
      display: flex;
      cursor: pointer;
      align-items: center;
      justify-content: center;
      border-radius: 0.5rem;
      border: none;
      /* Default colors when not selected */
      color: var(--theme-text-color);
      background-color: transparent;
      transition: color 0.15s ease-in-out;
      flex-direction: row;
      gap: 0.25rem;
      padding: 0.5rem 0.75rem; /* Default padding (medium) */
      font-size: 1rem; /* Default font-size (medium) */
      box-sizing: border-box; /* Include padding/border in element's total width/height */
    }

    /* Selected State Styles - Driven by the 'selected' class */
    .button.selected {
      color: var(--mov-color-on-loud);
      font-weight: 600;
    }

    /* Size Variations */
    .button.small {
      padding: 0.25rem 0.5rem;
      font-size: 0.875rem;
    }
    .button.large {
      padding: 0.75rem 1rem;
      font-size: 1.125rem;
    }

    /* Label Position Variations */
    .button.bottom {
      flex-direction: column;
    }
    .button.bottom.small {
      padding: 0.25rem;
    }
    .button.bottom.medium {
      padding: 0.5rem;
    }
    .button.bottom.large {
      padding: 0.75rem;
    }
  `;

  connectedCallback() {
    super.connectedCallback();
    this.resizeObserver.observe(this);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.resizeObserver.unobserve(this);
  }

  /**
   * Handles the click event on an option button, updates the component's value,
   * and dispatches a `change` event.
   * @internal
   */
  private handleClick(_event: Event, value: string) {
    // The value might be the same as 'this.value' (user clicked the selected option),
    // but we still update the state and dispatch the event.
    this.value = value;

    this.dispatchEvent(
      new CustomEvent('change', { detail: this.value, bubbles: true, composed: true }),
    );
  }

  /**
   * Gathers option data from the slotted `segmented-control-option` elements.
   * @internal
   */
  private handleSlotChange() {
    this._options = (this._slotEl.assignedNodes({ flatten: true }) as HTMLElement[])
      .filter(node => node.nodeName === 'SEGMENTED-CONTROL-OPTION')
      .map(node => ({
        value: node.getAttribute('value') ?? '',
        label: node.getAttribute('label') ?? '',
        icon: node.getAttribute('icon') ?? undefined,
      }));
  }

  protected firstUpdated() {
    this.handleSlotChange();
    // Use a slight delay to ensure all options have rendered and calculated their size
    this.updateComplete.then(() => this.updateThumbPosition());
  }

  protected updated(changedProperties: PropertyValues) {
    super.updated(changedProperties);
    if (
      changedProperties.has('value') ||
      changedProperties.has('_options') ||
      changedProperties.has('labelPosition') ||
      changedProperties.has('size')
    ) {
      // Schedule thumb position update after the DOM has fully rendered the new state
      Promise.resolve().then(() => this.updateThumbPosition());
    }
  }

  /**
   * Finds the currently selected option button and moves/resizes the thumb element.
   * @internal
   */
  private updateThumbPosition() {
    if (!this.thumb) {
      return;
    }

    // Use a robust selector to find the button that has the 'selected' class.
    const selectedButton = this.shadowRoot?.querySelector<HTMLButtonElement>('.button.selected');

    if (selectedButton) {
      // Use the button's position and size to place the thumb
      const { offsetWidth, offsetHeight } = selectedButton;

      // The button's position is relative to its parent `.option` wrapper.
      // We need the position relative to the `.segmented-control` container.
      const buttonRect = selectedButton.getBoundingClientRect();
      const containerRect = this.shadowRoot
        ?.querySelector('.segmented-control')
        ?.getBoundingClientRect();

      const offsetX = buttonRect.left - (containerRect?.left ?? 0);
      const offsetY = buttonRect.top - (containerRect?.top ?? 0);

      this.thumb.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
      this.thumb.style.width = `${offsetWidth}px`;
      this.thumb.style.height = `${offsetHeight}px`;
    } else {
      // Hide the thumb if no option is selected
      this.thumb.style.width = '0px';
      this.thumb.style.height = '0px';
    }
  }

  protected render() {
    return html`
      <div class="segmented-control">
        <div class="thumb"></div>
        ${this._options.map(
          option => html`
            <div
              class="option"
              title="${this.labelPosition === 'tooltip' ? option.label : nothing}"
            >
              <button
                class="${classMap({
                  button: true,
                  selected: this.value === option.value, // ✅ Use component state for selection
                  bottom: this.labelPosition === 'bottom',
                  small: this.size === 'small',
                  medium: this.size === 'medium',
                  large: this.size === 'large',
                })}"
                @click=${(e: Event) => this.handleClick(e, option.value)}
                role="radio"
                aria-checked="${this.value === option.value}"
              >
                ${
                  option.icon
                    ? html`<mov-icon
                      name="${option.icon}"
                      .size=${choose(
                        this.size,
                        [
                          ['small', () => '16px'],
                          ['medium', () => '24px'],
                          ['large', () => '36px'],
                        ],
                        () => this.size,
                      )}
                    ></mov-icon>`
                    : nothing
                }
                ${this.labelPosition !== 'tooltip' ? html`<span>${option.label}</span>` : nothing}
              </button>
            </div>
          `,
        )}
      </div>
      <div style="display: none;">
        <slot @slotchange=${this.handleSlotChange}></slot>
      </div>
    `;
  }
}

/**
 * A data component that represents an option in a `segmented-control`.
 * It does not render any visible content itself but provides its attributes
 * to the parent `segmented-control` element.
 *
 * @element segmented-control-option
 *
 * @slot - This component does not render slotted content.
 */
@customElement('segmented-control-option')
export class SegmentedControlOption extends LitElement {
  /**
   * The value of the option.
   * @type {string}
   */
  @property({ type: String, reflect: true })
  value = '';

  /**
   * The text label for the option.
   * @type {string}
   */
  @property({ type: String, reflect: true })
  label = '';

  /**
   * The name of the icon to display.
   * @type {string}
   */
  @property({ type: String, reflect: true })
  icon?: string;

  /**
   * This component is a data container and does not need its own shadow DOM.
   * @internal
   */
  protected createRenderRoot() {
    return this;
  }
}
