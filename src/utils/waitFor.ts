import { isNothing } from './checks';

export function waitForElm(selector: string, target = document.body): any {
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

export function waitForAtb(selector: string, atribute: string, target = document.body): any {
  return new Promise((resolve) => {
    if (document.querySelector(selector)?.getAttribute(atribute)) {
      resolve(document.querySelector(selector)?.getAttribute(atribute));
      return;
    }

    const observer = new MutationObserver(() => {
      if (document.querySelector(selector)?.getAttribute(atribute)) {
        resolve(document.querySelector(selector)?.getAttribute(atribute));
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

export function waitForVar(name: string, target = document.body): any {
  const W = typeof unsafeWindow !== 'undefined' ? unsafeWindow : window;
  return new Promise((resolve) => {
    if (!isNothing(W[name as any])) {
      resolve(W[name as any]);
      return;
    }

    const observer = new MutationObserver(() => {
      if (!isNothing(W[name as any])) {
        resolve(W[name as any]);
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
