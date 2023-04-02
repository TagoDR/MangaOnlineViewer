export function waitForElm(selector: string, target = document.body): any {
  return new Promise((resolve) => {
    if (document.querySelector(selector)) {
      resolve(document.querySelector(selector));
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
