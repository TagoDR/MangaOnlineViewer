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
export default (...items: (HTMLElement | string)[]) => {
  items.forEach((item) => {
    if (item instanceof HTMLElement) cleanUpElement(item);
    if (typeof item === 'string') cleanUpSelector(item);
  });
};
