// == MultPorn =====================================================================================
export default {
  name: 'MultPorn',
  url: /https?:\/\/(www.)?multporn.net\/(comics|hentai_manga)\/.+/,
  homepage: 'https://multporn.net/',
  language: ['English'],
  category: 'hentai',
  // waitEle: '.jb-idx-thumb:last .jb-thm-thumb-image',
  async run() {
    const url =
      document.head.textContent
        ?.match(/"configUrl":"(.+?)",/)
        ?.at(1)
        ?.replaceAll('\\', '') || '';
    const api = await fetch(url)
      .then((res) => res.text())
      .then((html) => new DOMParser().parseFromString(html, 'text/xml'));
    const images = [...api.querySelectorAll('image')];
    return {
      title: document.querySelector('#page-title')?.textContent?.trim(),
      series: '#',
      pages: images.length,
      prev: '#',
      next: '#',
      listImages: images.map((img) => img.getAttribute('imageURL')),
    };
  },
};
