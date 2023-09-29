import { isNothing } from './checks';

export function waitForElm(selector: string, target = document.body) {
  return new Promise((resolve) => {
    if (document.querySelector(selector)) {
      resolve(document.querySelector(selector));
      return;
    }

    const observer = new MutationObserver(() => {
      if (document.querySelector(selector)) {
        resolve(document.querySelector(selector));
        observer.disconnect();
      }
    });

    observer.observe(target, {
      childList: true,
      subtree: true,
      attributes: true,
    });
  });
}

export function waitForAtb(
  selector: string,
  atribute: string,
  target = document.body,
): Promise<string> {
  return new Promise((resolve) => {
    if (document.querySelector(selector)?.getAttribute(atribute)) {
      resolve(document.querySelector(selector)?.getAttribute(atribute) ?? '');
      return;
    }

    const observer = new MutationObserver(() => {
      if (document.querySelector(selector)?.getAttribute(atribute)) {
        resolve(document.querySelector(selector)?.getAttribute(atribute) ?? '');
        observer.disconnect();
      }
    });

    observer.observe(target, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: [atribute],
    });
  });
}

export function waitForVar(name: keyof typeof unsafeWindow | string, target = document.body) {
  return new Promise((resolve) => {
    if (!isNothing(unsafeWindow[name])) {
      resolve(unsafeWindow[name]);
      return;
    }

    const observer = new MutationObserver(() => {
      if (!isNothing(unsafeWindow[name])) {
        resolve(unsafeWindow[name]);
        observer.disconnect();
      }
    });

    observer.observe(target, {
      childList: true,
      subtree: true,
      attributes: true,
    });
  });
}
