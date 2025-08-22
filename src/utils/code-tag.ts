/**
 * A simple template literal tag that concatenates the template strings and expressions.
 * This function is the base for the `html` and `css` tags and does not perform any special processing.
 * @internal
 * @param {TemplateStringsArray} raw - The static parts of the template literal.
 * @param {...unknown} keys - The dynamic expressions embedded in the template literal.
 * @returns {string} The concatenated string.
 */
const concatenateTemplateLiteralTag = (raw: TemplateStringsArray, ...keys: unknown[]): string =>
  keys.length === 0 ? raw[0] : String.raw({ raw }, ...keys);

/**
 * A template literal tag used to identify HTML strings.
 * This allows IDEs and tools like Prettier to apply proper syntax highlighting and formatting.
 * @example
 * const myHtml = html`<div>Hello, World!</div>`;
 */
const html = concatenateTemplateLiteralTag;

/**
 * A template literal tag used to identify CSS strings.
 * This allows IDEs and tools like Prettier to apply proper syntax highlighting and formatting.
 * @example
 * const myCss = css`
 *   .my-class {
 *     color: blue;
 *   }
 * `;
 */
const css = concatenateTemplateLiteralTag;

export { html, css };
