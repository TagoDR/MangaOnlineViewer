import { css, html, LitElement, type PropertyValueMap } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { map } from 'lit/directives/map.js';
import { generateColorGradient } from '../../utils/palettes.ts';
import './ColorSwatch.ts';

declare global {
  interface HTMLElementTagNameMap {
    'mov-color-palette': ColorPalette;
  }
}

/**
 * A component that displays a 10-shade color palette generated from a single base color.
 * It uses the `generateColorGradient` utility to create the shades and renders them as a series of `mov-color-swatch` elements.
 *
 * @element mov-color-palette
 *
 * @cssprop [--palette-gap=4px] - The gap between the color swatches.
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
  mode = 'base';

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
        color =>
          html`<mov-color-swatch
            .color=${color}
            radius="4px"
            size="22"
          ></mov-color-swatch>`,
      )}
    `;
  }
}
