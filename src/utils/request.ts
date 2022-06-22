import { logScript } from './tampermonkey';

export default function getHtml(url: string, selector: string, attibute: string) {
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
        const doc = parser.parseFromString(html, 'text/html');

        // You can now even select part of that html as you would in the regular DOM
        // Example:
        // var docArticle = doc.querySelector('article').innerHTML;
        // console.log(doc);
        logScript('Selection Page image: ', selector, 'attribute: ', attibute);
        resolve(doc.querySelector(selector)?.getAttribute(attibute));
      })
      .catch((err) => {
        logScript('Failed to fetch page: ', err);
      });
  });
}
