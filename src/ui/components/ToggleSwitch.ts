import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { IconCheck, IconX } from '../icons';

declare global {
  interface HTMLElementTagNameMap {
    'mov-toggle-switch': ToggleSwitch;
  }
}

/**
 * A stylish toggle switch component that mimics the appearance of a physical switch.
 * It is built upon a native HTML checkbox for accessibility and form integration.
 *
 * @element mov-toggle-switch
 *
 * @cssprop [--toggler-size=2em] - Controls the overall size of the toggle switch. The width is set to this value, and the height is half of it.
 */
@customElement('mov-toggle-switch')
export class ToggleSwitch extends LitElement {
  /**
   * The `name` attribute for the underlying `<input type="checkbox">` element.
   * This is useful for associating the switch with a label or for use in a form.
   * @type {string}
   */
  @property({ type: String })
  name = '';

  /**
   * The boolean state of the switch. `true` if the switch is in the "on" position, `false` otherwise.
   * @type {boolean}
   */
  @property({ type: Boolean, reflect: true })
  checked = false;

  /**
   * An optional event handler function that can be passed as a property.
   * It will be attached directly to the `change` event of the internal `<input>` element.
   * @type {((e: Event) => void) | undefined}
   */
  @property({ attribute: false })
  onChange: ((e: Event) => void) | undefined;

  static styles = css`
    /* From Uiverse.io by mobinkakei */
    :host {
      --toggler-size: 2em;
    }

    .toggler input {
      display: none;
    }

    .toggler label {
      display: block;
      position: relative;
      width: var(--toggler-size);
      height: calc(var(--toggler-size) / 2);
      border: 1px solid #d6d6d6;
      border-radius: 36px;
      background: #e4e8e8;
      cursor: pointer;
    }

    .toggler label::after {
      display: block;
      border-radius: 100%;
      background-color: #d7062a;
      content: '';
      animation-name: toggler-size;
      animation-duration: 0.15s;
      animation-timing-function: ease-out;
      animation-direction: normal;
      animation-iteration-count: 1;
      animation-play-state: running;
    }

    .toggler label::after,
    .toggler label .toggler-on .icon,
    .toggler label .toggler-off .icon {
      position: absolute;
      top: 50%;
      left: 25%;
      width: calc(var(--toggler-size) * 0.4);
      height: calc(var(--toggler-size) * 0.4);
      transform: translateY(-50%) translateX(-50%);
      transition:
        left 0.15s ease-in-out,
        background-color 0.2s ease-out,
        width 0.15s ease-in-out,
        height 0.15s ease-in-out,
        opacity 0.15s ease-in-out;
    }

    .toggler input:checked + label::after,
    .toggler input:checked + label .toggler-on .icon,
    .toggler input:checked + label .toggler-off .icon {
      left: 75%;
    }

    .toggler input:checked + label::after {
      background-color: #50ac5d;
      animation-name: toggler-size2;
    }

    .toggler .toggler-on .icon,
    .toggler .toggler-off .icon {
      opacity: 1;
      z-index: 2;
      color: #fefefe;
      fill: none;
    }

    .toggler input:checked + label .toggler-off .icon,
    .toggler input:not(:checked) + label .toggler-on .icon {
      width: 0;
      height: 0;
      opacity: 0;
    }

    @keyframes toggler-size {
      0%,
      100% {
        width: calc(var(--toggler-size) * 0.4);
        height: calc(var(--toggler-size) * 0.4);
      }

      50% {
        width: calc(var(--toggler-size) * 0.3);
        height: calc(var(--toggler-size) * 0.3);
      }
    }

    @keyframes toggler-size2 {
      0%,
      100% {
        width: calc(var(--toggler-size) * 0.4);
        height: calc(var(--toggler-size) * 0.4);
      }

      50% {
        width: calc(var(--toggler-size) * 0.3);
        height: calc(var(--toggler-size) * 0.3);
      }
    }
  `;

  protected render() {
    return html`
      <div class="toggler">
        <input
          id="${this.name}"
          name="${this.name}"
          type="checkbox"
          value="true"
          ?checked=${this.checked}
          @change=${this.onChange}
        />
        <label for="${this.name}">
          <span class="toggler-on">${IconCheck}</span>
          <span class="toggler-off">${IconX}</span>
        </label>
      </div>
    `;
  }
}
