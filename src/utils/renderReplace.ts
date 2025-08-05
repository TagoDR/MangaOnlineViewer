import { render } from 'lit-html';

const renderReplace = (value: unknown, container: HTMLElement) => {
  // 1. Create a new container (a DocumentFragment is a good choice for efficiency)
  const tempContainer = document.createDocumentFragment();

  // 2. Render the new template into the temporary container
  render(value, tempContainer);

  // 3. Replace the old element with the content of the temporary container
  container.replaceWith(tempContainer);
};

export default renderReplace;
