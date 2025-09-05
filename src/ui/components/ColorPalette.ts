import { css, html, LitElement, type PropertyValueMap } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { map } from 'lit/directives/map.js';
import { styleMap } from 'lit/directives/style-map.js';
import { generateColorGradient } from '../../utils/palettes.ts';

declare global {
  interface HTMLElementTagNameMap {
    'mov-color-palette': ColorPalette;
  }
}

/**
 * A component that displays a 10-shade color palette generated from a single base color.
 * It uses the `generateColorGradient` utility to create the shades and renders them as a series of swatches.
 *
 * @element mov-color-palette
 *
 * @cssprop [--palette-gap=4px] - The gap between the color swatches.
 * @cssprop [--swatch-size=22px] - The size of the color swatches.
 * @cssprop [--swatch-radius=4px] - The border radius of the color swatches.
 */
@customElement('mov-color-palette')
export class ColorPalette extends LitElement {
  static styles = css`
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
      border: 1px solid var(--theme-border-color, rgba(0, 0, 0, 0.1));
      transition: transform 0.15s ease;
      cursor: pointer;
      box-sizing: border-box;
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

  render() {
    return html`
      ${map(
        this.gradient,
        (color) =>
          html`<div
            class="swatch"
            style=${styleMap({ backgroundColor: color })}
          ></div>`,
      )}
    `;
  }
}
