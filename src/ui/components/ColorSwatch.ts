import { css, html, LitElement, type PropertyValues } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styleMap } from 'lit/directives/style-map.js';
import tinycolor from 'tinycolor2';
import { IconCheck } from '../icons';

declare global {
  interface HTMLElementTagNameMap {
    'mov-color-swatch': ColorSwatch;
  }
}

/**
 * A component that displays a single, clickable color swatch.
 * It can indicate a "selected" state with a checkmark and automatically calculates
 * a contrasting color for the checkmark to ensure visibility.
 *
 * @element mov-color-swatch
 *
 * @slot - The default slot can be used to place custom content (like an icon) inside the swatch.
 */
@customElement('mov-color-swatch')
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
    }

    .check-icon svg {
      width: 60%;
      height: 60%;
    }

    :host([selected]) .check-icon {
      opacity: 1;
    }
  `;

  /**
   * The background color of the swatch, in any valid CSS color format.
   * @type {string}
   */
  @property({ type: String })
  color = '#228be6';

  /**
   * If `true`, a checkmark icon will be displayed over the swatch.
   * @type {boolean}
   */
  @property({ type: Boolean, reflect: true })
  selected = false;

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
   * Recalculates the contrasting color for the checkmark whenever the swatch color changes.
   * @internal
   */
  willUpdate(changedProperties: PropertyValues) {
    if (changedProperties.has('color')) {
      // Use black for light colors and white for dark colors to ensure contrast
      this.contrastColor = tinycolor(this.color).isLight() ? '#000000' : '#FFFFFF';
    }
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
        >
          <slot></slot>
          <span class="check-icon"> ${IconCheck} </span>
        </div>
      </div>
    `;
  }
}
