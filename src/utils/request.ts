import { logScript } from './tampermonkey';

/**
 * Fetches content from a URL and parses it as a DOM document.
 * @param {string} url - The URL to fetch.
 * @param {DOMParserSupportedType} format - The MIME type to use for parsing (e.g., 'text/html', 'text/xml').
 * @returns {Promise<Document>} A promise that resolves with the parsed `Document` object.
 */
export async function fetchText(url: string, format: DOMParserSupportedType): Promise<Document> {
  return new Promise(resolve => {
    logScript('Fetching page: ', url);
    fetch(url)
      .then(async response =>
        // When the page is loaded convert it to text
        response.text(),
      )
      .then(html => {
        // Initialize the DOM parser
        const parser = new DOMParser();

        // Parse the text
        const doc = parser.parseFromString(html, format);

        resolve(doc);
      })
      .catch(err => {
        logScript('Failed to fetch page: ', err);
      });
  });
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
  return fetchHtml(url).then(doc => doc.querySelector(selector)?.getAttribute(attribute));
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
