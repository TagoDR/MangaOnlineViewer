import { logScript } from './tampermonkey';

export function fetchText(url: string, format: DOMParserSupportedType): Promise<Document> {
  return new Promise((resolve) => {
    logScript('Fetching page: ', url);
    fetch(url)
      .then((response) =>
        // When the page is loaded convert it to text
        response.text(),
      )
      .then((html) => {
        // Initialize the DOM parser
        const parser = new DOMParser();

        // Parse the text
        const doc = parser.parseFromString(html, format);

        // You can now even select part of that html as you would in the regular DOM
        // Example:
        // var docArticle = doc.querySelector('article').innerHTML;
        // console.log(doc);
        resolve(doc);
      })
      .catch((err) => {
        logScript('Failed to fetch page: ', err);
      });
  });
}

export function fetchHtml(url: string): Promise<Document> {
  return fetchText(url, 'text/html');
}

export function fetchXml(url: string): Promise<Document> {
  return fetchText(url, 'text/xml');
}

export function getElementAttribute(
  url: string,
  selector: string,
  attribute: string,
): Promise<string | null | undefined> {
  return fetchHtml(url).then((doc) => doc.querySelector(selector)?.getAttribute(attribute));
}
