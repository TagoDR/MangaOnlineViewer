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
  /**
   * The currently selected theme color in hexadecimal format (e.g., "#29487D").
   * This is used to highlight the active swatch with a checkmark.
   * @type {string}
   */
  @property({ type: String })
  value = '';

  static styles = css`
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
   * Handles clicks on individual color swatches. It stops the event from bubbling,
   * sets the host's title to the swatch's color, and dispatches a new click event
   * from the host. This allows the parent listener to use `event.currentTarget.title`
   * to get the color.
   */
  private handleColorClick(event: MouseEvent) {
    event.stopPropagation();
    this.title = (event.currentTarget as HTMLElement).title;
    this.click();
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
        return html`
          <span
            title="${hex}"
            class="${classMap({
              ThemeRadio: true,
              selected: this.value === hex,
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
