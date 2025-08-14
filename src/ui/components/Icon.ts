import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { toPascalCase } from '../../utils/format.ts';
import * as styledIcons from '../icons';
import type { DirectiveResult } from 'lit/directive.js';
import type { UnsafeSVGDirective } from 'lit/directives/unsafe-svg.js';

declare global {
  interface HTMLElementTagNameMap {
    'mov-icon': Icon;
  }
}

/**
 * A custom icon component that wraps <wa-icon> to display project-specific
 * SVGs with custom colors applied.
 */
@customElement('mov-icon')
export class Icon extends LitElement {
  static styles = css`
    :host {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      vertical-align: middle;
    }
  `;

  /** The name of the icon to display, in kebab-case (e.g., 'file-download'). */
  @property({ type: String }) name = '';

  /** An optional label for accessibility. */
  @property({ type: String }) label = '';
  @property({ type: String }) size = '';

  render() {
    const styledSvg = (
      styledIcons as Record<string, string | DirectiveResult<typeof UnsafeSVGDirective>>
    )[`${toPascalCase(this.name)}Raw`] as string;
    if (!styledSvg) {
      // Fallback for icons that don't have custom styling or are not found
      return html` <wa-icon
        .name=${this.name}
        .label=${this.label}
      ></wa-icon>`;
    }

    // By converting the processed SVG to a data URL and passing it to the `src`
    // attribute, we leverage wa-icon's rendering while using our custom assets.
    const dataUrl = `data:image/svg+xml,${encodeURIComponent(styledSvg)}`;
    return html` <wa-icon
      .src=${dataUrl}
      .label=${this.label}
    ></wa-icon>`;
  }
}
