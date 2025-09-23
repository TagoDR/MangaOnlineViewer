import { css, html, LitElement, type PropertyValueMap } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { getTextColor } from '../../utils/colors';
import { generateColorGradient } from '../../utils/palettes.ts';
import { IconCheck } from '../icons';

declare global {
  interface HTMLElementTagNameMap {
    'color-palette': ColorPalette;
  }
}

/**
 * A component that displays a 10-shade color palette generated from a single base color.
 * It uses the `generateColorGradient` utility to create the shades and renders them as a series of swatches.
 *
 * @element color-palette
 *
 * @cssprop [--palette-gap=4px] - The gap between the color swatches.
 * @cssprop [--swatch-size=22px] - The size of the color swatches.
 * @cssprop [--swatch-radius=4px] - The border radius of the color swatches.
 */
@customElement('color-palette')
export class ColorPalette extends LitElement {
  static readonly styles = css`
    :host {
      display: flex;
      gap: var(--palette-gap, 4px);
      align-items: center;
      justify-content: center;
    }

    .swatch {
      width: var(--swatch-size, 22px);
      height: var(--swatch-size, 22px);
      border-radius: var(--swatch-radius, 4px);
      border: 1px solid var(--theme-border-color, #ccc);
      transition: transform 0.15s ease;
      cursor: pointer;
      background-clip: content-box;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
    }
    .swatch-inner {
      width: 100%;
      height: 100%;
      border-radius: var(--swatch-radius, 4px);
      background-color: var(--color);
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .checkmark {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      opacity: 0;
      transition: opacity 0.15s ease;
      width: 100%;
      height: 100%;
      align-items: center;
      justify-content: center;
      display: flex;
      color: var(--text-color);
      font-weight: bold;
      font-size: 16px;
      line-height: 1;
    }

    .checkmark svg {
      width: 60%;
      height: 60%;
    }
    .swatch[checked] .checkmark {
      opacity: 1;
    }
    .swatch:hover {
      transform: scale(1.1);
    }
  `;

  /**
   * The base color in hexadecimal format from which the entire palette will be generated.
   * @type {string}
   */
  @property({ type: String })
  baseColor = '#228be6';

  /**
   * The algorithm mode used to generate the color gradient.
   * Can be 'base', 'saturation', or 'lightness'.
   * @type {string}
   */
  @property({ type: String })
  mode: 'saturation' | 'lightness' | 'mantine' | 'chakra' | 'steps' = 'steps';

  /**
   * The orientation of the color palette.
   * @type {'horizontal' | 'vertical'}
   */
  @property({ type: String, reflect: true })
  orientation: 'horizontal' | 'vertical' = 'horizontal';

  /**
   * The currently selected color value. If this matches the swatch's `color`, the swatch will be checked.
   * @type {string | undefined}
   */
  @property({ type: String })
  selected: string | undefined;

  /**
   * The currently selected theme color in hexadecimal format (e.g., "#29487D").
   * This is used to highlight the active swatch with a checkmark.
   * @type {string}
   */
  @property({ type: String, reflect: true })
  value = '';

  /**
   * The internal state holding the array of generated color strings.
   * @internal
   */
  @state()
  private gradient: string[] = [];

  /**
   * Re-generates the color gradient whenever the `baseColor` or `mode` property changes.
   * @internal
   */
  willUpdate(changedProperties: PropertyValueMap<this>) {
    if (changedProperties.has('baseColor') || changedProperties.has('mode')) {
      this.gradient = generateColorGradient(this.baseColor, this.mode) ?? [];
    }
  }

  private handleSwatchClick(color: string) {
    this.value = color;
    this.dispatchEvent(
      new CustomEvent('input', { detail: { value: this.value }, bubbles: true, composed: true }),
    );
    this.dispatchEvent(
      new CustomEvent('change', { detail: { value: this.value }, bubbles: true, composed: true }),
    );
  }

  render() {
    return html`
      ${this.gradient.map(color => {
        const isChecked = this.selected && color.toLowerCase() === this.selected.toLowerCase();
        const textColor = getTextColor(color);
        return html`
          <div
            class="swatch"
            ?checked=${isChecked}
            title=${color}
            @click=${() => this.handleSwatchClick(color)}
          >
            <div
              class="swatch-inner"
              style="--color: ${color}; --text-color: ${textColor}"
            >
              <span class="checkmark">${IconCheck}</span>
            </div>
          </div>
        `;
      })}
    `;
  }
}
