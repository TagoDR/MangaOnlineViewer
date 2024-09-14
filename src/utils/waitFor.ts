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

export function waitForFunc(fn: () => any, timer: number = 250): Promise<any> {
  return new Promise((resolve) => {
    const intervalId = setInterval(() => {
      if (fn()) {
        clearInterval(intervalId);
        resolve(true);
      }
    }, timer);
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

export function waitForTimer(millis: number = 1000, result: any = true) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(result), millis);
  });
}

export async function until(predFn: () => boolean) {
  const poll = (done: (value: unknown) => void) => {
    const result = predFn();
    if (result) {
      done(result);
    } else {
      setTimeout(() => {
        poll(done);
      }, 500);
    }
  };

  return new Promise(poll);
}

/**
 * Wait for promise to resolve and for the timer to complete
 * @param promise
 * @param timer
 */
export async function waitWithTimer(promise: Promise<any>, timer: number = 1000) {
  return (await Promise.all([promise, waitForTimer(timer)]))[0];
}

/**
 * Wait for promise to resolve or for the timeout
 * @param promise
 * @param timeout
 */
export async function waitWithTimeout(promise: Promise<any>, timeout: number = 5000) {
  return Promise.race([promise, waitForTimer(timeout, false)]);
}
