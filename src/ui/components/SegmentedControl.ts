import { customElement, property, query, state } from 'lit/decorators.js';
import { css, html, LitElement, nothing, type PropertyValues } from 'lit';
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
 * It is built upon native radio inputs for accessibility and form integration.
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
  @property({ type: String })
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
    }
    .thumb {
      position: absolute;
      top: 0.25rem;
      bottom: 0.25rem;
      border-radius: 0.5rem;
      background-color: var(--mov-color-fill-loud);
      transition:
        transform 0.3s cubic-bezier(0.4, 0, 0.2, 1),
        width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      z-index: 1;
    }
    .option {
      flex: 1;
      text-align: center;
      z-index: 2;
    }
    input {
      display: none;
    }
    .label {
      display: flex;
      cursor: pointer;
      align-items: center;
      justify-content: center;
      border-radius: 0.5rem;
      border: none;
      padding: 0.5rem 0;
      color: var(--theme-text-color);
      background-color: transparent;
      transition: color 0.15s ease-in-out;
      flex-direction: row;
      gap: 0.25rem;
    }
    .label.bottom {
      flex-direction: column;
    }
    input:checked + .label {
      color: var(--mov-color-on-loud);
      font-weight: 600;
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
   * Handles the change event from the internal radio inputs, updates the component's value,
   * and dispatches a `change` event.
   * @internal
   */
  private handleChange(event: Event) {
    const target = event.currentTarget as HTMLInputElement;
    this.value = target.value;
    this.dispatchEvent(
      new CustomEvent('change', { detail: this.value, bubbles: true, composed: true }),
    );
  }

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
    this.updateThumbPosition();
  }

  protected updated(changedProperties: PropertyValues) {
    super.updated(changedProperties);
    if (
      changedProperties.has('value') ||
      changedProperties.has('_options') ||
      changedProperties.has('labelPosition')
    ) {
      Promise.resolve().then(() => this.updateThumbPosition());
    }
  }

  private updateThumbPosition() {
    if (!this.thumb) {
      return;
    }

    const selectedOption = this.shadowRoot?.querySelector<HTMLInputElement>('input:checked')
      ?.parentElement as HTMLLabelElement | null;

    if (selectedOption) {
      const { offsetLeft, offsetWidth } = selectedOption;
      this.thumb.style.transform = `translateX(${offsetLeft}px)`;
      this.thumb.style.width = `${offsetWidth}px`;
    } else {
      this.thumb.style.width = '0px';
    }
  }

  protected render() {
    return html`
      <div class="segmented-control">
        <div class="thumb"></div>
        ${this._options.map(
          option => html`
            <label
              class="option"
              title="${this.labelPosition === 'tooltip' ? option.label : nothing}"
            >
              <input
                type="radio"
                name="segmented-control"
                .value=${option.value}
                ?checked=${this.value === option.value}
                @change=${this.handleChange}
              />
              <span
                class="${classMap({
                  label: true,
                  bottom: this.labelPosition === 'bottom',
                })}"
              >
                ${option.icon
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
                  : nothing}
                ${this.labelPosition !== 'tooltip' ? html`<span>${option.label}</span>` : nothing}
              </span>
            </label>
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
