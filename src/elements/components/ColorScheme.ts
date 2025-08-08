import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

declare global {
  interface HTMLElementTagNameMap {
    'mov-color-scheme': ColorScheme;
  }
}

/**
 * A theme-toggle button that shows a sun/moon icon, built using mov-toggle-button.
 */
@customElement('mov-color-scheme')
export class ColorScheme extends LitElement {
  static styles = css`
    :host {
      display: inline-flex;
      vertical-align: middle;
      justify-content: center;
      align-items: center;
    }
  `;

  /** The current color scheme. 'light' corresponds to the default state, 'dark' to the active state. */
  @property({ type: String })
  scheme: 'light' | 'dark' = 'dark';

  @property({ type: String })
  variant = 'neutral';

  @property({ type: String })
  appearance = 'plain';

  render() {
    // Map the 'scheme' property to the 'active' property of the toggle button.
    // We'll define 'dark' mode as the 'active' state.
    const isActive = this.scheme === 'dark';

    return html`
      <mov-toggle-button
        mode="theme"
        .active=${isActive}
        label="Switch to dark theme"
        activeLabel="Switch to light theme"
        variant=${this.variant}
        appearance=${this.appearance}
        @toggle=${this.onToggle}
      ></mov-toggle-button>
    `;
  }

  private onToggle() {
    // Forward the toggle event to the parent component, maintaining the original event contract.
    this.dispatchEvent(
      new CustomEvent('toggle', {
        detail: { scheme: this.scheme },
        bubbles: true,
        composed: true,
      }),
    );
  }
}
