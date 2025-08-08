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
 * A component that displays a 10-shade color palette generated from a base color.
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
   * The base color in hex format from which to generate the palette.
   */
  @property({ type: String })
  baseColor = '#228be6'; // Default blue
  @property({ type: String })
  mode = 'base';
  @state()
  private gradient: string[] = [];

  // Re-generate the gradient whenever the base color changes.
  willUpdate(changedProperties: PropertyValueMap<this>) {
    if (changedProperties.has('baseColor')) {
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
