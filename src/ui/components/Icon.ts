import { css, html, LitElement, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import type { DirectiveResult } from 'lit/directive.js';
import type { UnsafeSVGDirective } from 'lit/directives/unsafe-svg.js';
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
 * @element mov-icon
 * @cssprop [--mov-icon-size=1rem] - The width and height of the icon.
 */
@customElement('mov-icon')
export class Icon extends LitElement {
  static styles = css`
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
    /* Fallback if no color is set */
    :host(:not([style*='color'])) svg {
      color: var(--mov-color-on-loud);
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

  render() {
    const key = toPascalCase(this.name);
    const styledSvg = (styledIcons as Record<string, DirectiveResult<typeof UnsafeSVGDirective>>)[
      key
    ] as string | undefined;

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
