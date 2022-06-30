// == GNTAI ========================================================================================
export default {
  name: 'GNTAI.net',
  url: /https?:\/\/(www.)?gntai.net\/.+\/.+/,
  homepage: 'https://www.gntai.net/',
  language: ['Spanish'],
  category: 'hentai',
  run() {
    const images = document
      .querySelector('#main > script')
      ?.innerHTML.match(/var pages = [^;]+/)
      ?.at(0)
      ?.toString()
      .match(/https?[^"]+/g);
    return {
      title: document.querySelector('.entry-header h1')?.textContent?.trim(),
      series: '#',
      pages: images?.length,
      prev: '#',
      next: '#',
      listImages: images,
    };
  },
};
