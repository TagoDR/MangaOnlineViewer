import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import colors, { getTextColor } from '../../utils/colors.ts';
import { IconCheck } from '../icons';

declare global {
  interface HTMLElementTagNameMap {
    'color-panel': ColorPanel;
  }
}

/**
 * A component that displays a grid of color swatches for theme selection.
 * It renders a list of predefined color families and their shades, allowing the user
 * to pick a new primary theme color for the application.
 *
 * @element color-panel
 *
 * @fires click - When a color swatch is clicked, it dispatches an event that is handled by `buttonSelectTheme` to update the application settings.
 */
@customElement('color-panel')
export class ColorPanel extends LitElement {
  static readonly styles = css`
    :host {
      display: flex;
      flex-direction: column;
      gap: 4px;
      width: 100%;
    }
    .SwatchGroup {
      display: grid;
      grid-template-columns: auto 1fr;
      align-items: center;
      column-gap: 8px;
    }
    .ColorName {
      font-size: 12px;
      color: var(--theme-text-color);
      text-transform: capitalize;
      min-width: 64px;
    }
    .Swatches {
      display: grid;
      grid-template-columns: repeat(9, 16px);
      gap: 8px;
      align-items: center;
    }
    .ThemeRadio {
      color: var(--mov-color-on-loud);
      height: 20px;
      width: 20px;
      border-radius: 3px;
      margin: 0;
      position: relative;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.2);
    }
    .ThemeRadio:hover,
    .ThemeRadio:focus-visible {
      outline: 2px solid var(--theme-border-color);
      outline-offset: 1px;
    }
    .ThemeRadio.selected {
      box-shadow:
        0 0 0 2px var(--theme-body-background),
        0 0 0 3px var(--theme-text-color);
    }
    .ThemeRadio svg {
      width: 10px;
      height: 10px;
    }
    .ThemeRadio.selected .icon-tabler-check {
      display: inline;
    }
    .ThemeRadio:not(.selected) .icon-tabler-check {
      display: none;
    }
  `;

  /**
   * The currently selected theme color in hexadecimal format (e.g., "#29487D").
   * This is used to highlight the active swatch with a checkmark.
   * @type {string}
   */
  @property({ type: String, reflect: true })
  value = '';

  /**
   * The currently selected color value. If this matches the swatch's `color`, the swatch will be checked.
   * @type {string | undefined}
   */
  @property({ type: String })
  selected: string | undefined;

  /**
   * Handles the click event on a color swatch.
   * Updates the component's `value` property to the selected color's hex code.
   * Dispatches 'input' and 'change' custom events to notify parent components
   * about the color selection.
   * @param {MouseEvent} event The click event object.
   * @private
   */
  private handleColorClick(event: MouseEvent) {
    this.value = (event.currentTarget as HTMLElement).title;
    this.dispatchEvent(
      new CustomEvent('input', { detail: { value: this.value }, bubbles: true, composed: true }),
    );
    this.dispatchEvent(
      new CustomEvent('change', { detail: { value: this.value }, bubbles: true, composed: true }),
    );
  }

  /**
   * Renders the grid of color swatches grouped by color family.
   * @internal
   */
  protected render() {
    const swatchKeys = Object.keys(colors).filter(
      k => !['dark', 'gray', 'zinc', 'neutral', 'stone'].includes(k),
    );
    // .sort(sortColors);
    const shades = [/*50, 100,*/ 200, 300, 400, 500, 600, 700, 800, 900, 950] as const;
    return swatchKeys.map(key => {
      const swatches = shades.map(shade => {
        const hex = colors[key][shade];
        const text = getTextColor(hex);
        const isSelected = this.selected?.toLowerCase() === hex.toLowerCase();
        return html`
          <span
            title="${hex}"
            class="${classMap({
              ThemeRadio: true,
              selected: isSelected,
            })}"
            style="background-color: ${hex}; color: ${text}"
            @click=${this.handleColorClick}
          >
            ${IconCheck}
          </span>
        `;
      });
      return html` <div class="SwatchGroup">
        <span class="ColorName">${key}</span>
        <div class="Swatches">${swatches}</div>
      </div>`;
    });
  }
}
