// == Simply-Hentai ================================================================================
export default {
  name: 'Simply-Hentai',
  url: /https?:\/\/(www.)?simply-hentai.com\/.+\/page\/.+/,
  homepage: 'https://simply-hentai.com/',
  language: ['English'],
  category: 'hentai',
  waitEle: '#__NEXT_DATA__',
  async run() {
    const json = JSON.parse(document.querySelector('#__NEXT_DATA__')?.innerHTML || '');
    const images = json.props.pageProps.data.pages.map((img: any) => img.sizes.full);
    return {
      title: document.querySelector('.content-headline a')?.textContent?.trim(),
      series: document.querySelector('.content-headline a')?.getAttribute('href'),
      pages: images.length,
      prev: '#',
      next: '#',
      listImages: images,
    };
  },
};
