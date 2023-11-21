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

export function waitFor(
  fn: () => string | undefined | null,
  target = document.body,
): Promise<string> {
  return new Promise((resolve) => {
    const result = fn();
    if (result) {
      resolve(result);
      return;
    }

    const observer = new MutationObserver(() => {
      const res = fn();
      if (res) {
        resolve(res);
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
  attribute: string,
  target = document.body,
): Promise<string> {
  return new Promise((resolve) => {
    if (target.querySelector(selector)?.getAttribute(attribute)) {
      resolve(target.querySelector(selector)?.getAttribute(attribute) ?? '');
      return;
    }

    const observer = new MutationObserver(() => {
      if (target.querySelector(selector)?.getAttribute(attribute)) {
        resolve(target.querySelector(selector)?.getAttribute(attribute) ?? '');
        observer.disconnect();
      }
    });

    observer.observe(target, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: [attribute],
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
