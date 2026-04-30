import { render } from 'lit';

/**
 * Efficiently replaces a DOM element with new rendered content using Lit's `render` function.
 * This method avoids direct manipulation of the live DOM until the new content is fully rendered
 * in a temporary container (a DocumentFragment), minimizing reflows and improving performance.
 *
 * @param {unknown} value - The Lit-compatible template or value to render (e.g., a `TemplateResult`).
 * @param {HTMLElement} container - The existing DOM element to be replaced.
 */
const renderReplace = (value: unknown, container: HTMLElement): void => {
  // 1. Create a new container (a DocumentFragment is a good choice for efficiency)
  const tempContainer = document.createDocumentFragment();

  // 2. Render the new template into the temporary container
  render(value, tempContainer);

  // 3. Replace the old element with the content of the temporary container
  container.replaceWith(tempContainer);
};

export default renderReplace;
