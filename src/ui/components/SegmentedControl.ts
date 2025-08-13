import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';

export type SegmentedControlOption = {
  value: string;
  label: string;
  icon?: unknown;
};

@customElement('segmented-control')
export class SegmentedControl extends LitElement {
  @property({ type: Array })
  options: SegmentedControlOption[] = [];

  @property({ type: String })
  value = '';

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

  private handleChange(event: Event) {
    const target = event.currentTarget as HTMLInputElement;
    this.value = target.value;
    this.dispatchEvent(
      new CustomEvent('change', { detail: this.value, bubbles: true, composed: true }),
    );
  }

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
