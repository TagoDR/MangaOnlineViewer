// == MangaDemon ===================================================================================
import { Category, type IManga, type ISite, Language } from '../types';
import { logScriptVerbose } from '../utils/tampermonkey.ts';

const mangademon: ISite = {
  name: 'MangaDemon',
  url: /https?:\/\/(www\.)?demonicscans\.org\/title\/.+\/chapter\/.+/,
  homepage: 'https://demonicscans.org/',
  language: [Language.ENGLISH],
  category: Category.MANGA,
  start: 'always',
  async run(): Promise<IManga> {
    const response = await fetch(location.href);
    const text = await response.text();
    const doc = new DOMParser().parseFromString(`<!DOCTYPE html>${text}`, 'text/html');
    const images = [...doc.querySelectorAll('.imgholder')];
    return {
      title: doc.querySelector('title')?.textContent?.trim(),
      series: doc.querySelector('h1 a')?.getAttribute('href'),
      pages: images.length,
      prev: doc.querySelector('.prevchap')?.getAttribute('href'),
      next: doc.querySelector('.nextchap')?.getAttribute('href'),
      listImages: images.map(
        img => (img.getAttribute('data-src') || img.getAttribute('src')) ?? '',
      ),
      before() {
        // Anti-anti-adblock. Restore tampered browser functions from a clean iframe.
        const iframe = document.createElement('iframe');
        iframe.style.display = 'none';
        document.body.appendChild(iframe);
        const contentWin = iframe.contentWindow;
        if (contentWin) {
          logScriptVerbose('Force restore Javascript');
          // Restore window properties
          // Restore Promise and fetch specially to avoid cross-origin issues.
          try {
            // Restore Promise constructor. Must be done before anything that returns a Promise.
            if (typeof (contentWin as any).Promise !== 'undefined') {
              (window as any).Promise = (contentWin as any).Promise;
            }
            // Restore fetch and wrap its returned promise to belong to the main window's context.
            if (typeof (contentWin as any).fetch !== 'undefined') {
              const originalFetch = (contentWin as any).fetch.bind(window);
              (window as any).fetch = (...args: any[]) => {
                const iframePromise = originalFetch(...args);
                return new Promise((resolve, reject) => {
                  iframePromise.then(resolve, reject).catch(reject);
                });
              };
            }
          } catch (e) {
            console.error('JS restore failed for Promise/fetch', e);
          }

          // Restore other simple window properties that can be directly replaced
          const simpleProps = [
            'JSON',
            'RegExp',
            'Object',
            'Array',
            'Date',
            'Math',
            'atob',
            'btoa',
            'decodeURIComponent',
            'encodeURI',
            'parseInt',
            'setTimeout',
            'setInterval',
            'clearTimeout',
            'clearInterval',
            'Storage',
            'ArrayBuffer',
            'Uint8Array',
            'MessageChannel',
            'BroadcastChannel',
            'Image',
            'Event',
            'Error',
            'TypeError',
          ];
          simpleProps.forEach(prop => {
            if (typeof (contentWin as any)[prop] !== 'undefined') {
              try {
                const original = (contentWin as any)[prop];
                (window as any)[prop] =
                  typeof original === 'function' ? original.bind(window) : original;
              } catch (e) {
                console.error(`JS restore failed for ${prop}`, e);
              }
            }
          });

          // Restore methods on complex, read-only properties
          const complexProps = ['customElements', 'sessionStorage', 'localStorage'];
          complexProps.forEach(prop => {
            const originalObject = (contentWin as any)[prop];
            const targetObject = (window as any)[prop];
            if (originalObject && targetObject) {
              for (const key in originalObject) {
                // We don't use hasOwnProperty here because Object.prototype might be tampered with.
                try {
                  const originalKey = (originalObject as any)[key];
                  if (typeof originalKey === 'function') {
                    (targetObject as any)[key] = originalKey.bind(targetObject);
                  }
                } catch (e) {
                  console.error(`JS restore failed for ${prop}.${key}`, e);
                }
              }
            }
          });

          // Restore document properties
          const docProps = [
            'createElement',
            'createTextNode',
            'getElementById',
            'querySelector',
            'querySelectorAll',
            'getElementsByTagName',
            'getElementsByClassName',
            'createElementNS',
            'createDocumentFragment',
            'getElementsByName',
          ];
          docProps.forEach(prop => {
            if (typeof (contentWin.document as any)[prop] !== 'undefined') {
              try {
                const original = (contentWin.document as any)[prop];
                (document as any)[prop] =
                  typeof original === 'function' ? original.bind(document) : original;
              } catch (e) {
                console.error('JS restore failed', e);
              }
            }
          });
        }
        // Clean up the iframe
        if (iframe.parentNode) {
          iframe.parentNode.removeChild(iframe);
        }
        logScriptVerbose('Finish restore Javascript');
      },
    };
  },
};
export default mangademon;
