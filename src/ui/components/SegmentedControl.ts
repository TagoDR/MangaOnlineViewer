import { css, html, LitElement, PropertyValues } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';

/**
 * Defines the structure for a single option within the segmented control.
 */
export type SegmentedControlOption = {
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
  }
}

/**
 * A control that allows users to select one option from a set, presented as a row of connected buttons.
 * It is built upon native radio inputs for accessibility and form integration.
 *
 * @element segmented-control
 *
 * @fires change - Dispatched when the selected value changes. The `detail` property of the event contains the new value.
 */
@customElement('segmented-control')
export class SegmentedControl extends LitElement {
  /**
   * An array of option objects to display in the control.
   * @type {SegmentedControlOption[]}
   */
  @property({ type: Array })
  options: SegmentedControlOption[] = [];

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

  @query('.thumb')
  private thumb!: HTMLDivElement;

  private resizeObserver = new ResizeObserver(() => this.updateThumbPosition());

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

  /**
   * @internal
   */
  protected firstUpdated() {
    this.updateThumbPosition();
  }

  /**
   * @internal
   */
  protected updated(changedProperties: PropertyValues) {
    super.updated(changedProperties);
    if (
      changedProperties.has('value') ||
      changedProperties.has('options') ||
      changedProperties.has('labelPosition')
    ) {
      // Use a microtask to ensure the DOM is updated before we measure.
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
      // No selection, hide the thumb
      this.thumb.style.width = '0px';
    }
  }

  /**
   * @internal
   */
  protected render() {
    return html`
      <div class="segmented-control">
        <div class="thumb"></div>
        ${this.options.map(
          option => html`
            <label
              class="option"
              title="${this.labelPosition === 'tooltip' ? option.label : ''}"
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
                <mov-icon name="${option.icon}"></mov-icon>
                ${this.labelPosition !== 'tooltip' ? html`<span>${option.label}</span>` : ''}
              </span>
            </label>
          `,
        )}
      </div>
    `;
  }
}
