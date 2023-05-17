// == OmegaScans ===================================================================================
export default {
  name: ['OmegaScans'],
  url: /https?:\/\/(www.)?(omegascans).(org)\/.+/,
  homepage: ['https://omegascans.org/'],
  language: ['English'],
  category: 'manga',
  waitVar: '__NEXT_DATA__',
  async run() {
    const W: Window = typeof unsafeWindow !== 'undefined' ? unsafeWindow : window;
    const api = await fetch(
      // @ts-ignore
      // eslint-disable-next-line no-underscore-dangle
      `https://api.omegascans.org/series/chapter/${W.__NEXT_DATA__.props.pageProps.data.id}`,
    ).then((res) => res.json());
    const { images } = api.content;
    return {
      title: document.querySelector('h5')?.textContent?.trim(),
      series: document.querySelector('h5 a')?.getAttribute('href'),
      pages: images.length,
      prev: document.querySelector('.fa-arrow-left')?.closest('a')?.getAttribute('href'),
      next: document.querySelector('.fa-arrow-right')?.closest('a')?.getAttribute('href'),
      listImages: images,
    };
  },
};
