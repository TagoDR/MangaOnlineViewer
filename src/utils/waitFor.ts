import { isNothing } from './checks';

/**
 * Waits for an element matching the given selector to appear in the DOM.
 * @param {string} selector - The CSS selector for the desired element.
 * @param {HTMLElement} [target=document.body] - The parent element within which to observe for mutations. Defaults to `document.body`.
 * @returns {Promise<Element>} A promise that resolves with the found element once it is available.
 */
export function waitForElm(selector: string, target = document.body): Promise<Element> {
  return new Promise(resolve => {
    const element = document.querySelector(selector);
    if (element) {
      resolve(element);
      return;
    }

    const observer = new MutationObserver(() => {
      const observedElement = document.querySelector(selector);
      if (observedElement) {
        resolve(observedElement);
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
 * Waits for a function to return a truthy value.
 * It repeatedly calls the function until it returns `true`.
 * @param {() => boolean} fn - A function that returns a boolean value indicating the desired condition.
 * @param {number} [timer=250] - The interval in milliseconds between checks.
 * @returns {Promise<boolean>} A promise that resolves to `true` when the function returns a truthy value.
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
 * Waits for a specific attribute to be present on an element and resolves with the attribute's value.
 * @param {string} selector - The CSS selector to identify the target element.
 * @param {string} attribute - The name of the attribute to wait for.
 * @param {Element} [target=document.body] - The parent element to observe for mutations. Defaults to `document.body`.
 * @returns {Promise<string>} A promise that resolves with the value of the specified attribute.
 */
export function waitForAtb(
  selector: string,
  attribute: string,
  target = document.body,
): Promise<string> {
  return new Promise(resolve => {
    const element = target.querySelector(selector);
    if (element?.getAttribute(attribute)) {
      resolve(element.getAttribute(attribute) ?? '');
      return;
    }

    const observer = new MutationObserver(() => {
      const observedElement = target.querySelector(selector);
      if (observedElement?.getAttribute(attribute)) {
        resolve(observedElement.getAttribute(attribute) ?? '');
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
 * Waits for a global variable to be available on the `unsafeWindow` object.
 * Note: This is specific to userscript environments like Tampermonkey.
 * @security This function uses `unsafeWindow` to access global variables on the page. This can be a security risk if the page's scripts are malicious.
 * @param {string | keyof typeof unsafeWindow} name - The name of the variable to wait for.
 * @param {HTMLElement} [target=document.body] - The DOM element to observe for changes as a fallback trigger.
 * @returns {Promise<any>} A promise that resolves with the value of the variable once it becomes available.
 */
export function waitForVar(
  name: keyof typeof unsafeWindow | string,
  target = document.body,
): Promise<unknown> {
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
 * Returns a promise that resolves after a specified amount of time.
 * @param {number} [millis=1000] - The duration to wait in milliseconds.
 * @param {T} [result] - The value the promise will resolve with.
 * @returns {Promise<T>} A promise that resolves after the given time.
 */
export function waitForTimer<T>(millis: number = 1000, result?: T): Promise<T | undefined> {
  return new Promise(resolve => {
    setTimeout(() => resolve(result), millis);
  });
}

/**
 * Continuously polls a predicate function until it returns a truthy value.
 * @param {() => boolean} predFn - A function that will be repeatedly invoked. The polling stops when it returns `true`.
 * @returns {Promise<any>} A promise that resolves with the truthy result of the predicate function.
 */
export async function until(predFn: () => boolean): Promise<unknown> {
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
 * Waits for both a promise to resolve and a minimum amount of time to pass.
 * @template T
 * @param {Promise<T>} promise - The promise to wait for.
 * @param {number} [timer=1000] - The minimum time to wait in milliseconds.
 * @returns {Promise<T>} A promise that resolves with the result of the input promise, after the timer has also completed.
 */
export async function waitWithTimer<T>(promise: Promise<T>, timer: number = 1000): Promise<T> {
  const [result] = await Promise.all([promise, waitForTimer(timer)]);
  return result;
}

/**
 * Waits for a promise to resolve, but with a maximum timeout.
 * If the promise does not resolve within the timeout period, the race is lost.
 * @template T
 * @param {Promise<T>} promise - The promise to wait for.
 * @param {number} [timeout=5000] - The maximum time to wait in milliseconds.
 * @returns {Promise<T | boolean>} A promise that resolves with the result of the input promise, or `false` if it times out.
 */
export async function waitWithTimeout(promise: Promise<boolean>, timeout: number = 5000) {
  return Promise.race([promise, waitForTimer(timeout, false)]);
}
