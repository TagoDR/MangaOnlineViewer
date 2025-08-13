import { css, html, LitElement, type PropertyValues } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styleMap } from 'lit/directives/style-map.js';
import tinycolor from 'tinycolor2';

declare global {
  interface HTMLElementTagNameMap {
    'mov-color-swatch': ColorSwatch;
  }
}

/**
 * A component that displays a color swatch, similar to Mantine's ColorSwatch.
 * It is clickable and can indicate a "selected" state with a checkmark.
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
  @property({ type: String })
  color = '#228be6'; // Default color
  @property({ type: Boolean, reflect: true })
  selected = false;
  @property({ type: Number })
  size = 26;
  @property({ type: String })
  radius: string | number = '50%';
  @property({ state: true })
  private contrastColor = '#FFFFFF';

  // Recalculate checkmark color whenever the swatch color changes.
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
          <span class="check-icon">
            <wa-icon
              name="check"
              label="Selected"
            ></wa-icon>
          </span>
        </div>
      </div>
    `;
  }
}
