/**
 * A wrapped `console.log` function that adds a styled prefix to all log messages for easy identification.
 * @param {...any} args - The arguments to be logged to the console.
 */
export function log(...args: unknown[]) {
  // eslint-disable-next-line no-console
  console.log('%cUserscript (React Mode):', 'color: purple; font-weight: bold', ...args);
}

/**
 * A wrapped version of `fetch` that logs the request and ensures the URL is absolute.
 * This is particularly useful in userscript environments where relative URLs might be ambiguous.
 * @param {string} urlString - The URL to fetch (can be relative or absolute).
 * @returns {Promise<Response>} The `fetch` promise.
 */
export async function logFetch(urlString: string): Promise<Response> {
  const url = new URL(urlString, window.location.href);
  log('fetching', url.href);
  return fetch(url.href, { credentials: 'include' });
}

/**
 * Executes a callback function whenever the window's URL changes.
 * It uses a `MutationObserver` on the `body` to detect changes, which is a common strategy for single-page applications.
 * The callback is also executed once immediately upon registration.
 *
 * @param {() => void} callback - The function to be called when the URL changes.
 * @returns {MutationObserver} The underlying `MutationObserver` instance.
 */
export function addLocationChangeCallback(callback: () => void): MutationObserver {
  // Run the callback once right at the start
  window.setTimeout(callback, 0);

  // Set up a `MutationObserver` to watch for changes in the URL
  let oldHref = window.location.href;
  const body = document.querySelector('body');
  const observer = new MutationObserver(mutations => {
    if (mutations.some(() => oldHref !== document.location.href)) {
      oldHref = document.location.href;
      callback();
    }
  });

  if (body) {
    observer.observe(body, { childList: true, subtree: true });
  }
  return observer;
}

/**
 * Waits for a DOM element to become available using a polling mechanism.
 * This is useful for scripts that need to interact with elements that may be added to the page dynamically.
 * It will try for a maximum of 60 times (15 seconds) before rejecting the promise.
 *
 * @param {string} selector - The CSS selector for the element to wait for.
 * @returns {Promise<Element>} A promise that resolves with the found DOM element.
 * @throws {Error} If the element is not found after the maximum number of retries.
 */
export async function awaitElement(selector: string): Promise<Element> {
  const MAX_TRIES = 60;
  let tries = 0;
  return new Promise((resolve, reject) => {
    function probe() {
      tries += 1;
      return document.querySelector(selector);
    }

    function delayedProbe() {
      if (tries >= MAX_TRIES) {
        log("Can't find element with selector", selector);
        reject(new Error("Can't find element"));
        return;
      }

      const elm = probe();
      if (elm) {
        resolve(elm);
        return;
      }

      window.setTimeout(delayedProbe, 250);
    }

    delayedProbe();
  });
}
