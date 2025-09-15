import { nothing, type TemplateResult } from 'lit';
import { Directive, directive } from 'lit/directive.js';

class IfDirective extends Directive {
  /**
   * Renders a template if a condition is true, otherwise renders nothing.
   * @param condition The boolean condition to evaluate.
   * @param template A function that returns the TemplateResult to render if the condition is true.
   */
  render(condition: boolean, template: TemplateResult | unknown) {
    return condition ? template : nothing;
  }
}

/**
 * A Lit directive that conditionally renders a template.
 *
 * Example usage:
 * ```ts
 * import { html } from 'lit';
 * import { ifTrue } from './directives.ts';
 *
 * // in a component's render method
 * render() {
 *   return html`
 *     <div>
 *       ${ifTrue(this.showContent, () => html`<p>This content is shown conditionally.</p>`)}
 *     </div>
 *   `;
 * }
 * ```
 */
export const ifTrue = directive(IfDirective);
