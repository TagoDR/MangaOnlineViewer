// Prettier supports these languages:
// https://github.com/prettier/prettier/blob/e46aba0ab279c764dc26e0f41f15c55122440c51/src/language-js/embed.js#L13

const concatenateTemplateLiteralTag = (raw: TemplateStringsArray, ...keys: unknown[]): string =>
  keys.length === 0 ? raw[0] : String.raw({ raw }, ...keys);

/**
 Enable highlighting/prettifying when used as html`<div>`
 https://prettier.io/docs/en/options.html#embedded-language-formatting
 */
const html = concatenateTemplateLiteralTag;
/**
 Enable highlighting/prettifying when used as css`.a {}`
 https://prettier.io/docs/en/options.html#embedded-language-formatting
 */
const css = concatenateTemplateLiteralTag;

export { html, css };
