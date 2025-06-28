// == Simply-Hentai ================================================================================
import { Category, IManga, ISite, Language } from '../types';

const site: ISite = {
  name: 'Simply-Hentai',
  url: /https?:\/\/(www\.)?simply-hentai.com\/.+\/page\/.+/,
  homepage: 'https://simply-hentai.com/',
  language: [Language.ENGLISH],
  category: Category.HENTAI,
  waitEle: '#__NEXT_DATA__',
  async run(): Promise<IManga> {
    const json = JSON.parse(document.querySelector('#__NEXT_DATA__')?.innerHTML ?? '');
    const images = json.props.pageProps.data.pages.map(
      (img: { sizes: { full: string } }) => img.sizes.full,
    );
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
export default site;
