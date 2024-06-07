// == HentaiNexus ==================================================================================
export default {
  name: 'HentaiNexus',
  url: /https?:\/\/((www\.)?hentainexus.com|nexus.fakku.cc)\/read\/.+/,
  homepage: 'https://hentainexus.com/',
  language: ['English'],
  category: 'hentai',
  run() {
    const images =
      unsafeWindow.pageData?.map((i: { image: string }) => i.image) ??
      unsafeWindow.images?.map((i: { url: string }) => i.url);
    return {
      title: document
        .querySelector('title')
        ?.textContent?.replace(/^\[[\d/]+\]/, '')
        .trim(),
      series: document.querySelector('#returnGalleryFooter a')?.getAttribute('href'),
      pages: images.length,
      prev: '#',
      next: '#',
      listImages: images,
    };
  },
};
