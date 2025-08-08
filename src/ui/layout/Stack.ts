import { css, html, LitElement, type PropertyValues } from 'lit';
import { customElement, property } from 'lit/decorators.js';

declare global {
  interface HTMLElementTagNameMap {
    'stack-layout': Stack;
  }
}

@customElement('stack-layout')
export class Stack extends LitElement {
  static styles = css`
    :host {
      display: flex;
      flex-direction: column;
    }
  `;

  @property({ type: String }) gap = '1rem';
  @property({ type: String }) align = 'stretch';
  @property({ type: String }) justify = 'flex-start';

  willUpdate(changedProperties: PropertyValues) {
    super.willUpdate(changedProperties);
    if (changedProperties.has('gap')) {
      this.style.gap = this.gap;
    }
    if (changedProperties.has('align')) {
      this.style.alignItems = this.align;
    }
    if (changedProperties.has('justify')) {
      this.style.justifyContent = this.justify;
    }
  }

  render() {
    return html`<slot></slot>`;
  }
}
