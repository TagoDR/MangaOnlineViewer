import { css, html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

declare global {
  interface HTMLElementTagNameMap {
    'center-layout': Center;
  }
}

@customElement('center-layout')
export class Center extends LitElement {
  static styles = css`
    :host {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  `;

  render() {
    return html`<slot></slot>`;
  }
}
