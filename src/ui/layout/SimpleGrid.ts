import { css, html, LitElement, type PropertyValues } from 'lit';
import { customElement, property } from 'lit/decorators.js';

declare global {
  interface HTMLElementTagNameMap {
    'simple-grid-layout': SimpleGrid;
  }
}

@customElement('simple-grid-layout')
export class SimpleGrid extends LitElement {
  static styles = css`
    :host {
      display: grid;
    }
  `;

  @property({ type: Number }) cols = 2;
  @property({ type: String }) spacing = '1rem';
  @property({ type: String, attribute: 'vertical-spacing' }) verticalSpacing: string | undefined;

  willUpdate(changedProperties: PropertyValues) {
    super.willUpdate(changedProperties);
    if (changedProperties.has('cols')) {
      this.style.gridTemplateColumns = `repeat(${this.cols}, minmax(0, 1fr))`;
    }
    if (changedProperties.has('spacing') || changedProperties.has('verticalSpacing')) {
      if (this.verticalSpacing) {
        this.style.columnGap = this.spacing;
        this.style.rowGap = this.verticalSpacing;
        this.style.gap = '';
      } else {
        this.style.gap = this.spacing;
        this.style.columnGap = '';
        this.style.rowGap = '';
      }
    }
  }

  render() {
    return html`<slot></slot>`;
  }
}
