function removeAllEventListeners(element: HTMLElement): HTMLElement {
  if (!element || !element.parentNode) {
    // Or handle this case as appropriate, maybe return the original element
    return element;
  }
  const newElement = element.cloneNode(true) as HTMLElement; // true for deep clone
  element.parentNode.replaceChild(newElement, element);
  return newElement;
}

const removeAttributes = (element: HTMLElement) => {
  element.getAttributeNames().forEach(attr => element?.removeAttribute(attr));
};

export const cleanUpElement = (...elements: HTMLElement[]) => {
  elements?.forEach(removeAttributes);
  elements?.forEach(removeAllEventListeners);
};

export const cleanUpSelector = (...selectors: string[]) => {
  selectors?.forEach(selector => {
    const element = document.querySelector<HTMLElement>(selector);
    if (element) {
      removeAttributes(element);
      removeAllEventListeners(element);
    }
  });
};

export function hideElements(selector: string) {
  // Get all elements on the page
  const allElements = document.body.querySelectorAll<HTMLElement>(selector);
  allElements.forEach(element => {
    // Hide the element
    element.style.display = 'none';
    // Disable form elements (inputs, selects, textareas, buttons)

    if (
      element instanceof HTMLInputElement ||
      element instanceof HTMLSelectElement ||
      element instanceof HTMLTextAreaElement ||
      element instanceof HTMLButtonElement
    ) {
      element.disabled = true;
    }
    // Disable links to prevent navigation

    if (element instanceof HTMLAnchorElement) {
      element.addEventListener('click', event => {
        event.preventDefault(); // Prevent link from working
      });
      element.style.pointerEvents = 'none'; // Further prevent interaction
    }
    // Disable other interactive elements by preventing events and setting pointer-events

    element.style.pointerEvents = 'none';
  });
}

export function removeElements(selector: string) {
  // Select all script elements in the document
  const elements = document.querySelectorAll(selector);
  elements?.forEach(e => {
    e?.remove();
  });
}

export default () => {
  removeElements('head :not(script)');
  hideElements('*');
  cleanUpElement(document.documentElement, document.head, document.body);
};
