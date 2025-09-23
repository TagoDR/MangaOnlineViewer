/**
 * Removes all event listeners from a DOM element by cloning and replacing it.
 * @internal
 * @param {HTMLElement} element - The element from which to remove event listeners.
 * @returns {HTMLElement} The new, listener-free element that replaced the original.
 */
function removeAllEventListeners(element: HTMLElement): HTMLElement {
  if (!element?.parentNode) {
    return element;
  }
  const newElement = element.cloneNode(true) as HTMLElement;
  element.parentNode.replaceChild(newElement, element);
  return newElement;
}

/**
 * Removes all attributes from a DOM element.
 * @internal
 * @param {HTMLElement} element - The element from which to remove attributes.
 */
const removeAttributes = (element: HTMLElement) => {
  element.getAttributeNames().forEach(attr => {
    element?.removeAttribute(attr);
  });
};

/**
 * Scrubs one or more DOM elements by removing all their attributes and event listeners.
 * @param {...HTMLElement} elements - A spread array of HTML elements to clean up.
 */
export const cleanUpElement = (...elements: HTMLElement[]) => {
  elements?.forEach(removeAttributes);
  elements?.forEach(removeAllEventListeners);
};

/**
 * Scrubs all elements matching the given CSS selectors by removing their attributes and event listeners.
 * @param {...string} selectors - A spread array of CSS selectors for the elements to clean up.
 */
export const cleanUpSelector = (...selectors: string[]) => {
  selectors?.forEach(selector => {
    const element = document.querySelector<HTMLElement>(selector);
    if (element) {
      removeAttributes(element);
      removeAllEventListeners(element);
    }
  });
};

/**
 * Hides and disables all elements matching a given selector to prevent user interaction with the original page.
 * This includes setting `display: none`, disabling form elements, and neutralizing links.
 * @param {string} selector - The CSS selector for the elements to hide and disable.
 */
export function hideElements(selector: string) {
  const allElements = document.body.querySelectorAll<HTMLElement>(selector);
  allElements.forEach(element => {
    element.style.display = 'none';

    if (
      element instanceof HTMLInputElement ||
      element instanceof HTMLSelectElement ||
      element instanceof HTMLTextAreaElement ||
      element instanceof HTMLButtonElement
    ) {
      element.disabled = true;
    }

    if (element instanceof HTMLAnchorElement) {
      element.addEventListener('click', event => {
        event.preventDefault();
      });
      element.style.pointerEvents = 'none';
    }

    element.style.pointerEvents = 'none';
  });
}

/**
 * Removes all elements matching a given selector from the DOM.
 * @param {string} selector - The CSS selector for the elements to remove.
 */
export function removeElements(selector: string) {
  const elements = document.querySelectorAll(selector);
  elements?.forEach(e => {
    e?.remove();
  });
}

/**
 * A comprehensive cleanup function to prepare the host page for the viewer.
 * It removes all non-essential elements from the `<head>`, hides all elements in the `<body>`,
 * and then scrubs the `<html>`, `<head>`, and `<body>` tags of any attributes and event listeners.
 */
export default () => {
  removeElements('head :not(script)');
  hideElements('*');
  cleanUpElement(document.documentElement, document.head, document.body);
};
