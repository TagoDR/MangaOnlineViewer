import { css, html, LitElement, type PropertyValues } from 'lit';
import { customElement, property } from 'lit/decorators.js';

declare global {
  interface HTMLElementTagNameMap {
    'group-layout': Group;
  }
}

@customElement('group-layout')
export class Group extends LitElement {
  static styles = css`
    :host {
      display: flex;
      flex-direction: row;
    }
  `;

  @property({ type: String }) gap = '1rem';
  @property({ type: String }) justify = 'flex-start';
  @property({ type: String }) align = 'center';
  @property({ type: String }) wrap = 'nowrap';

  willUpdate(changedProperties: PropertyValues) {
    super.willUpdate(changedProperties);
    if (changedProperties.has('gap')) {
      this.style.gap = this.gap;
    }
    if (changedProperties.has('justify')) {
      this.style.justifyContent = this.justify;
    }
    if (changedProperties.has('align')) {
      this.style.alignItems = this.align;
    }
    if (changedProperties.has('wrap')) {
      this.style.flexWrap = this.wrap;
    }
  }

  render() {
    return html`<slot></slot>`;
  }
}
