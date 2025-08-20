import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
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
  icon?: unknown;
};

declare global {
  interface HTMLElementTagNameMap {
    'mov-segmented-control': SegmentedControl;
  }
}

/**
 * A control that allows users to select one option from a set, presented as a row of connected buttons.
 * It is built upon native radio inputs for accessibility and form integration.
 *
 * @element mov-segmented-control
 *
 * @fires change - Dispatched when the selected value changes. The `detail` property of the event contains the new value.
 */
@customElement('mov-segmented-control')
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

  static styles = css`
    :host {
      width: 100%;
    }
    .segmented-control {
      display: flex;
      gap: 0.25rem;
      border-radius: 0.5rem;
      background-color: var(--theme-border-color);
      padding: 0.25rem;
    }
    .option {
      flex: 1;
      text-align: center;
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
      background-color: var(--theme-border-color);
      transition: all 0.15s ease-in-out;
      flex-direction: row;
      gap: 0.25rem;
    }
    .label.bottom {
      flex-direction: column;
    }
    input:checked + .label {
      background-color: var(--theme-primary-color);
      color: var(--theme-primary-text-color);
      font-weight: 600;
    }
  `;

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
  protected render() {
    return html`
      <div class="segmented-control">
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
                ${option.icon}
                ${this.labelPosition !== 'tooltip' ? html`<span>${option.label}</span>` : ''}
              </span>
            </label>
          `,
        )}
      </div>
    `;
  }
}
