import { css, html, LitElement, nothing, type PropertyValueMap } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import { toPascalCase } from '../../utils/format.ts';
import * as styledIcons from '../icons/StyledIcons.ts';

declare global {
  interface HTMLElementTagNameMap {
    'mov-icon': Icon;
  }
}

/**
 * A lightweight, self-contained icon component for rendering inline SVGs.
 * This component looks up pre-processed SVG strings from the `icons` module
 * and renders them directly. It is an alternative to using a larger library like WebAwesome.
 *
 * API is compatible with Web Awesome's wa-icon component and Webcomponents 3.0.0 standards.
 *
 * @element mov-icon
 * @cssprop [--mov-icon-size=1rem] - The width and height of the icon.
 */
@customElement('mov-icon')
export class Icon extends LitElement {
  static readonly styles = css`
    :host {
      --mov-icon-size: 1rem;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      vertical-align: middle;
      line-height: 1;
    }
    :host([hidden]) {
      display: none;
    }
    svg {
      width: var(--mov-icon-size, 1rem);
      height: var(--mov-icon-size, 1rem);
      display: block;
      color: inherit; /* This will inherit from the host element */
    }
  `;

  /**
   * The name of the icon to display.
   * The name should be in kebab-case (e.g., 'file-download') and correspond to an exported SVG in the `icons` module.
   * @type {string}
   */
  @property({ type: String })
  name = '';

  /**
   * The variant of the icon to display.
   * @type {'thin' | 'light' | 'regular' | 'solid'}
   */
  @property({ type: String, reflect: true })
  variant: 'thin' | 'light' | 'regular' | 'solid' = 'regular';

  /**
   * The family of the icon to display.
   * @type {'classic' | 'sharp' | 'duotone' | 'brands'}
   */
  @property({ type: String, reflect: true })
  family: 'classic' | 'sharp' | 'duotone' | 'brands' = 'classic';

  /**
   * An optional accessibility label for the icon. If provided, the icon will have an `aria-label`.
   * @type {string}
   */
  @property({ type: String })
  label = '';

  /**
   * An optional size for the icon, specified as a valid CSS string (e.g., '16px', '1.25rem').
   * If not provided, the icon will default to the `--mov-icon-size` CSS custom property.
   * @type {string}
   */
  @property({ type: String })
  size = '';

  protected updated(changedProperties: PropertyValueMap<this>) {
    super.updated(changedProperties);
    if (changedProperties.has('name')) {
      const key = toPascalCase(this.name);
      const styledSvg = (styledIcons as Record<string, string>)[key];
      if (styledSvg) {
        this.dispatchEvent(new CustomEvent('load', { bubbles: true, composed: true }));
        this.dispatchEvent(new CustomEvent('wa-load', { bubbles: true, composed: true }));
      } else {
        this.dispatchEvent(new CustomEvent('error', { bubbles: true, composed: true }));
        this.dispatchEvent(new CustomEvent('wa-error', { bubbles: true, composed: true }));
      }
    }
  }

  render() {
    const key = toPascalCase(this.name);
    const styledSvg = (styledIcons as Record<string, string>)[key];

    if (!styledSvg) {
      return nothing;
    }

    const style = this.size ? `--mov-icon-size: ${this.size};` : '';

    return html`<span
      role=${this.label ? 'img' : nothing}
      aria-label=${this.label || nothing}
      aria-hidden=${this.label ? nothing : 'true'}
      style=${style}
      >${unsafeSVG(styledSvg)}</span
    >`;
  }
}
