import { isNothing } from './checks';

/**
 * Waits for an element matching the given selector to appear in the DOM.
 *
 * @param {string} selector - The CSS selector for the desired element.
 * @param {HTMLElement} [target=document.body] - The target element within which to observe DOM mutations. Defaults to the document's body.
 * @return {Promise<HTMLElement>} A promise that resolves with the found element once it is available in the DOM.
 */
export function waitForElm(selector: string, target = document.body) {
  return new Promise(resolve => {
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

/**
 * Repeatedly checks if the provided function returns a truthy value, resolving the promise once it does.
 *
 * @param {function} fn - A function that is called repeatedly to check a specific condition. It should return a boolean value.
 * @param {number} [timer=250] - Interval time in milliseconds between successive calls to the function.
 * @return {Promise<boolean>} A promise that resolves to true when the provided function returns a truthy value.
 */
export function waitForFunc(fn: () => boolean, timer: number = 250): Promise<boolean> {
  return new Promise(resolve => {
    const intervalId = setInterval(() => {
      if (fn()) {
        clearInterval(intervalId);
        resolve(true);
      }
    }, timer);
  });
}

/**
 * Waits for a specific attribute on a selected element within the DOM and resolves with the attribute's value when it's available.
 *
 * @param {string} selector - The CSS selector to identify the target element.
 * @param {string} attribute - The attribute name that needs to be present on the target element.
 * @param {Element} [target=document.body] - The root element to observe for mutations. Defaults to the document body.
 * @return {Promise<string>} A promise that resolves with the value of the specified attribute once it is available.
 */
export function waitForAtb(
  selector: string,
  attribute: string,
  target = document.body,
): Promise<string> {
  return new Promise(resolve => {
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

/**
 * Waits for a specific variable to be available in the `unsafeWindow` object, observing DOM mutations if necessary.
 *
 * @param {string|keyof typeof unsafeWindow} name - The name of the variable to wait for in the `unsafeWindow` object.
 * @param {HTMLElement} [target=document.body] - The DOM element to observe for changes if the variable is not immediately available.
 * @return {Promise<any>} A promise that resolves with the value of the variable once it becomes available.
 */
export function waitForVar(name: keyof typeof unsafeWindow | string, target = document.body) {
  return new Promise(resolve => {
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

/**
 * Waits for the specified amount of time in milliseconds before resolving the promise.
 *
 * @param {number} [millis=1000] - The duration to wait in milliseconds. Defaults to 1000ms.
 * @param {boolean} [result=true] - The value the promise will resolve to after the timer. Defaults to true.
 * @return {Promise<boolean>} A promise that resolves to the specified result after the given time.
 */
export function waitForTimer(millis: number = 1000, result: boolean = true) {
  return new Promise(resolve => {
    setTimeout(() => resolve(result), millis);
  });
}

/**
 * Continuously polls a predicate function until it returns `true`,
 * resolving the returned promise once the condition is met.
 *
 * @param {Function} predFn - A predicate function that will be repeatedly invoked until it returns `true`.
 * @returns {Promise<unknown>} A promise that resolves when `predFn` returns `true`.
 */
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
export async function waitWithTimer(promise: Promise<string>, timer: number = 1000) {
  return (await Promise.all([promise, waitForTimer(timer)]))[0];
}

/**
 * Wait for promise to resolve or for the timeout
 * @param promise
 * @param timeout
 */
export async function waitWithTimeout(promise: Promise<boolean>, timeout: number = 5000) {
  return Promise.race([promise, waitForTimer(timeout, false)]);
}
