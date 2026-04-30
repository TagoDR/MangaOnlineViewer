import { logScript } from './tampermonkey';

/**
 * Fetches content from a URL and parses it as a DOM document.
 * @param {string} url - The URL to fetch.
 * @param {DOMParserSupportedType} format - The MIME type to use for parsing (e.g., 'text/html', 'text/xml').
 * @returns {Promise<Document>} A promise that resolves with the parsed `Document` object.
 */
export async function fetchText(url: string, format: DOMParserSupportedType): Promise<Document> {
  logScript('Fetching page: ', url);
  try {
    const response = await fetch(url);
    const html = await response.text();
    const parser = new DOMParser();
    return parser.parseFromString(html, format);
  } catch (err) {
    logScript('Failed to fetch page: ', err);
    throw err;
  }
}

/**
 * Fetches a URL and parses it as an HTML document.
 * @param {string} url - The URL to fetch.
 * @returns {Promise<Document>} A promise that resolves with the parsed HTML `Document`.
 */
export async function fetchHtml(url: string): Promise<Document> {
  return fetchText(url, 'text/html');
}

/**
 * Fetches a URL and parses it as an XML document.
 * @param {string} url - The URL to fetch.
 * @returns {Promise<Document>} A promise that resolves with the parsed XML `Document`.
 */
export async function fetchXml(url: string): Promise<Document> {
  return fetchText(url, 'text/xml');
}

/**
 * Fetches a URL and returns the response as a Blob.
 * Uses GM_xmlhttpRequest if available to bypass CORS.
 * @param {string} url - The URL to fetch.
 * @param {RequestInit} [options] - The options to use for the `fetch` request.
 * @returns {Promise<Blob | null>} A promise that resolves with the `Blob`, or `null` if the fetch fails.
 */
export async function fetchBlob(url: string, options?: RequestInit): Promise<Blob | null> {
  if (typeof GM_xmlhttpRequest !== 'undefined') {
    return new Promise(resolve => {
      GM_xmlhttpRequest({
        method: 'GET',
        url,
        responseType: 'blob',
        headers: options?.headers as { [p: string]: string },
        onload: response => {
          if (response.status === 200) {
            resolve(response.response);
          } else {
            resolve(null);
          }
        },
        onerror: () => resolve(null),
      });
    });
  }
  try {
    const response = await fetch(url, options);
    if (response.ok) {
      return await response.blob();
    }
  } catch (error) {
    logScript(`Failed to fetch blob from ${url}:`, error);
  }
  return null;
}

/**
 * Fetches an HTML page and extracts the value of a specific attribute from a given element.
 * @param {string} url - The URL of the page to fetch.
 * @param {string} selector - The CSS selector for the target element.
 * @param {string} attribute - The name of the attribute to retrieve.
 * @returns {Promise<string | null | undefined>} A promise that resolves with the attribute's value, or `null` if not found.
 */
export async function getElementAttribute(
  url: string,
  selector: string,
  attribute: string,
): Promise<string | null | undefined> {
  try {
    const doc = await fetchHtml(url);
    return doc.querySelector(selector)?.getAttribute(attribute);
  } catch (err) {
    logScript('Failed to get element attribute: ', err);
    return null;
  }
}

/**
 * Attempts to fetch JSON data from a series of URLs, returning the first successful response.
 * @param {RequestInit} options - The options to use for the `fetch` request.
 * @param {...string} urls - A spread array of URLs to try in sequence.
 * @returns {Promise<any>} A promise that resolves with the JSON data from the first successful fetch.
 * @throws {Error} If all fetch attempts fail.
 */
export async function fetchJsonFromUrls(options: RequestInit, ...urls: string[]) {
  for (const url of urls) {
    try {
      const response = await fetch(url, options);
      if (response.ok) {
        return await response.json();
      }
      logScript(`Fetch ${url} failed.`);
    } catch (error) {
      logScript(`Failed to fetch from ${url}:`, error);
    }
  }
  throw new Error('All fetch attempts failed');
}
