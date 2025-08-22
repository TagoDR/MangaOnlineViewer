import { html } from './code-tag';

/**
 * Creates a <style> element with the specified ID and content.
 * @param {string} id - The ID for the new style element.
 * @param {string} content - The CSS text to be placed inside the style element.
 * @returns {HTMLStyleElement} The newly created <style> element.
 */
function createStyleElement(id: string, content: string): HTMLStyleElement {
  const style = document.createElement('style');
  style.id = id;
  style.appendChild(document.createTextNode(content));
  return style;
}

/**
 * Appends a CSS stylesheet to the document's <head> if an element with the same ID doesn't already exist.
 * @param {string} id - The ID for the stylesheet, used to prevent duplicate insertions.
 * @param {string} content - The CSS text to be added.
 */
function appendStyleSheet(id: string, content: string) {
  if (!document.querySelector(`#${id}`)) {
    const head = document.head ?? document.querySelector('head');
    head.appendChild(createStyleElement(id, content));
  }
}

/**
 * Removes all <style> elements with a specific ID from the document.
 * @param {string} id - The ID of the style elements to remove.
 */
function removeStyleSheet(id: string) {
  document.querySelectorAll(`style[id="${id}"]`).forEach(elem => {
    elem.remove();
  });
}

/**
 * Replaces the content of a stylesheet by removing the old one and appending a new one with the same ID.
 * @param {string} id - The ID of the stylesheet to replace.
 * @param {string} content - The new CSS content.
 */
function replaceStyleSheet(id: string, content: string) {
  removeStyleSheet(id);
  appendStyleSheet(id, content);
}

/**
 * Wraps a string of CSS in a <style> tag for embedding directly into a Lit-HTML template.
 * @param {string} id - The ID for the style tag.
 * @param {string} css - The CSS text to wrap.
 * @returns A Lit-HTML template containing the style tag.
 */
function wrapStyle(id: string, css: string) {
  return html`
    <style id="${id}">
      ${css}
    </style>
  `;
}

export { appendStyleSheet, removeStyleSheet, replaceStyleSheet, wrapStyle };
