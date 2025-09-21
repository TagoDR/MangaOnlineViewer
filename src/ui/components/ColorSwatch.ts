import { css, html, LitElement, type PropertyValues } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styleMap } from 'lit-html/directives/style-map.js';
import { getTextColor } from '../../utils/colors.ts';
import { IconCheck } from '../icons';

declare global {
  interface HTMLElementTagNameMap {
    'color-swatch': ColorSwatch;
  }
}

/**
 * A component that displays a single, clickable color swatch.
 * It can indicate a "selected" state with a checkmark and automatically calculates
 * a contrasting color for the checkmark to ensure visibility.
 *
 * @element color-swatch
 *
 * @slot - The default slot can be used to place custom content (like an icon) inside the swatch.
 */
@customElement('color-swatch')
export class ColorSwatch extends LitElement {
  static styles = css`
    :host {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      position: relative;
      box-sizing: border-box;
      -webkit-tap-highlight-color: transparent;
    }

    .swatch {
      position: relative;
      width: 100%;
      height: 100%;
      border-radius: var(--radius);
      background-color: var(--color);
      display: flex;
      align-items: center;
      justify-content: center;
      transition: transform 0.15s ease;
      box-sizing: border-box;
      border: 1px solid var(--theme-border-color, rgba(0, 0, 0, 0.1));
      color: var(--contrast-color);
    }

    :host(:hover) .swatch {
      transform: scale(1.1);
    }

    ::slotted(*) {
      width: 60%;
      height: 60%;
    }

    .check-icon {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      color: var(--contrast-color);
      opacity: 0;
      transition: opacity 0.15s ease;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
      font-size: 16px;
      line-height: 1;
    }

    .check-icon svg {
      width: 60%;
      height: 60%;
    }

    :host([checked]) .check-icon {
      opacity: 1;
    }
  `;

  /**
   * The background color of the swatch, in any valid CSS color format.
   * @type {string}
   */
  @property({ type: String })
  color = '#000000';

  /**
   * The currently selected color value. If this matches the swatch's `color`, the swatch will be checked.
   * @type {string | undefined}
   */
  @property({ type: String })
  selected: string | undefined;

  /**
   * The size (width and height) of the swatch in pixels.
   * @type {number}
   */
  @property({ type: Number })
  size = 26;

  /**
   * The border-radius of the swatch. Can be a number (in pixels) or a valid CSS string.
   * @type {string | number}
   */
  @property({ type: String })
  radius: string | number = '50%';

  /**
   * The automatically calculated contrasting color (black or white) for the checkmark.
   * @internal
   */
  @property({ state: true })
  private contrastColor = '#FFFFFF';

  /**
   * Whether the swatch is currently checked. This is automatically set if `color` matches `selected`.
   */
  @property({ type: Boolean, reflect: true })
  checked: boolean = false;

  /**
   * Recalculates the contrasting color for the checkmark whenever the swatch color changes.
   * @internal
   */
  willUpdate(changedProperties: PropertyValues) {
    if (changedProperties.has('color')) {
      this.contrastColor = getTextColor(this.color);
    }
    if (changedProperties.has('selected')) {
      this.checked = this.color.toLowerCase() === this.selected?.toLowerCase();
    }
  }

  /**
   * Handles the click event on the swatch.
   * Dispatches 'input' and 'change' events with the swatch's color value.
   * @private
   */
  private handleClick() {
    this.dispatchEvent(
      new CustomEvent('input', { detail: { value: this.color }, bubbles: true, composed: true }),
    );
    this.dispatchEvent(
      new CustomEvent('change', { detail: { value: this.color }, bubbles: true, composed: true }),
    );
  }

  render() {
    const hostStyles = {
      width: `${this.size}px`,
      height: `${this.size}px`,
    };

    const swatchStyles = {
      '--radius': typeof this.radius === 'number' ? `${this.radius}px` : this.radius,
      '--color': this.color,
      '--contrast-color': this.contrastColor,
    };

    return html`
      <div style=${styleMap(hostStyles)}>
        <div
          class="swatch"
          style=${styleMap(swatchStyles)}
          @click=${this.handleClick}
        >
          <slot></slot>
          <span class="check-icon"> ${IconCheck} </span>
        </div>
      </div>
    `;
  }
}
