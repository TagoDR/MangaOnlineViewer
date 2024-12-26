export const cleanUpElement = (...ele: HTMLElement[]) =>
  ele.forEach((element: HTMLElement) => {
    element.getAttributeNames().forEach((attr) => {
      element.removeAttribute(attr);
    });
  });
export const cleanUpSelector = (...sel: string[]) =>
  sel.forEach((selector: string) => {
    const element = document.querySelector<HTMLElement>(selector);
    if (element) cleanUpElement(element);
  });

export function hideElements(selector: string) {
  // Get all elements on the page
  const allElements = document.body.querySelectorAll<HTMLElement>(selector);
  allElements.forEach((element) => {
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
      element.addEventListener('click', function (event) {
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
  elements.forEach((e) => {
    e.remove();
  });
}

export default () => {
  removeElements('style, link, meta');
  hideElements('*');
  cleanUpElement(document.documentElement, document.head, document.body);
};
