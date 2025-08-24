// == MangaDemon ===================================================================================
import { Category, type IManga, type ISite, Language } from '../types';

const mangademon: ISite = {
  name: 'MangaDemon',
  url: /https?:\/\/(www\.)?demonicscans\.org\/title\/.+\/chapter\/.+/,
  homepage: 'https://demonicscans.org/',
  language: [Language.ENGLISH],
  category: Category.MANGA,
  run(): IManga {
    const images = [...document.querySelectorAll('.imgholder')];
    return {
      title: document.querySelector('title')?.textContent?.trim(),
      series: document.querySelector('h1 a')?.getAttribute('href'),
      pages: images.length,
      prev: document.querySelector('.prevchap')?.getAttribute('href'),
      next: document.querySelector('.nextchap')?.getAttribute('href'),
      listImages: images.map(
        img => (img.getAttribute('data-src') || img.getAttribute('src')) ?? '',
      ),
      before(): void {
        // Restore Tampered document.createTextNode
        const iframe = document.createElement('iframe');
        iframe.style.display = 'none';
        document.body.appendChild(iframe);
        const originalDocument = iframe.contentWindow?.document;
        if (originalDocument) document.createTextNode = originalDocument.createTextNode;
        document.body.removeChild(iframe);
      },
    };
  },
};
export default mangademon;
