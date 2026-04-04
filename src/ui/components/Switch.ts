import { css, html, LitElement, type TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { IconCheck, IconX } from '../icons';

/**
 * Custom switch
 *
 * API is compatible with Web Awesome's wa-switch component (v3.3.1).
 *
 */
@customElement('mov-switch')
export class Switch extends LitElement {
  @property({ type: String }) name = '';
  @property({ type: String }) value = 'on';
  @property({ type: Boolean, reflect: true }) checked = false;
  @property({ type: Boolean, reflect: true, attribute: 'default-checked' }) defaultChecked = false;
  @property({ type: Boolean, reflect: true }) disabled = false;
  @property({ type: Boolean, reflect: true }) required = false;
  @property({ type: String, reflect: true }) size: 'small' | 'medium' | 'large' = 'medium';
  @property({ type: String }) hint = '';
  @property({ type: String, reflect: true }) design: 'graphical' | 'textual' = 'graphical';
  @property({ type: String }) textOn = 'ON';
  @property({ type: String }) textOff = 'OFF';

  static readonly styles = css`
    :host {
      --switch-width: 3rem;
      --switch-height: 1.5rem;
      --knob-size: 1.25rem;
      display: inline-block;
    }

    :host([size='small']) {
      --switch-width: 2.5rem;
      --switch-height: 1.25rem;
      --knob-size: 1rem;
    }

    :host([size='large']) {
      --switch-width: 4rem;
      --switch-height: 2rem;
      --knob-size: 1.75rem;
    }

    *,
    *::before,
    *::after {
      box-sizing: border-box;
    }

    input {
      display: none;
    }

    .switch {
      display: inline-block;
      position: relative;
      width: var(--switch-width);
      height: var(--switch-height);
      border-radius: var(--switch-height);
      background-color: #d7062a;
      border: 1px solid #d7062a;
      transition:
        background-color 0.3s,
        border-color 0.3s;
      cursor: pointer;
    }

    input:checked + .switch {
      background-color: #50ac5d;
      border-color: #50ac5d;
    }

    .switch.textual {
      background-color: var(--mov-color-on-loud);
      border-color: var(--mov-color-on-loud);
    }

    input:checked + .switch.textual {
      background-color: var(--mov-color-fill-loud);
      border-color: var(--mov-color-fill-loud);
    }

    input:disabled + .switch {
      background-color: #eee;
      border-color: #ccc;
      cursor: not-allowed;
    }

    .knob {
      position: absolute;
      top: 1px;
      left: 1px;
      width: var(--knob-size);
      height: var(--knob-size);
      background-color: #fff;
      border-radius: 50%;
      box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
      transition: left 0.3s;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1rem;
      font-weight: bold;
      font-family: Arial;
      color: #333;
    }

    input:checked + .switch .knob {
      left: calc(100% - var(--knob-size) - 1px);
    }

    .switch:focus {
      outline: 2px solid #0a6ed1;
      outline-offset: 2px;
    }

    .icon {
      width: 1rem;
      height: 1rem;
      fill: none;
    }

    .text {
      font-size: 0.75rem;
      font-weight: bold;
      color: #333;
    }

    .hint {
      font-size: 0.8rem;
      opacity: 0.7;
      margin-top: 0.25rem;
    }
  `;

  private handleChange(event: Event) {
    if (!this.disabled) {
      this.checked = (event.target as HTMLInputElement).checked;
      this.dispatchEvent(
        new CustomEvent('change', {
          detail: {
            checked: this.checked,
          },
          bubbles: true,
          composed: true,
        }),
      );
      this.dispatchEvent(
        new CustomEvent('input', {
          detail: {
            checked: this.checked,
          },
          bubbles: true,
          composed: true,
        }),
      );
    }
  }

  protected render() {
    const design = this.design.toLowerCase();
    let knobContent: TemplateResult<1>;
    if (design === 'graphical') {
      knobContent = html`${this.checked ? IconCheck : IconX}`;
    } else {
      knobContent = html`<span class="text">${this.checked ? this.textOn : this.textOff}</span>`;
    }

    return html`
      <div class="base">
        <label class="label">
          <slot></slot>
          <input
            type="checkbox"
            .name="${this.name}"
            .value="${this.value}"
            .checked=${this.checked}
            ?disabled=${this.disabled}
            ?required=${this.required}
            @change=${this.handleChange}
          />
          <div
            class="${classMap({
              switch: true,
              [design]: true,
            })}"
          >
            <div class="knob">${knobContent}</div>
          </div>
        </label>
        <div class="hint">
          <slot name="hint">${this.hint}</slot>
        </div>
      </div>
    `;
  }
}
