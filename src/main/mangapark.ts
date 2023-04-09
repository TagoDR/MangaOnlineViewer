// == MangaPark ====================================================================================
export default {
  name: 'MangaPark',
  url: /https?:\/\/(www.)?mangapark.(com|me|org|net)\/title\/.+\/.+/,
  homepage: 'https://mangapark.net/',
  language: ['English'],
  category: 'manga',
  waitEle: 'main div div a.btn-primary',
  run() {
    const json = JSON.parse(document.querySelector('#__NEXT_DATA__')?.innerHTML || '');
    const data = json.props.pageProps.dehydratedState.queries[0].state.data.data.imageSet;
    const images = data.httpLis.map(
      (img: string, index: number) => `${img}?${data.wordLis[index]}`,
    );
    return {
      title: [...document.querySelectorAll('.comic-detail h3 a, .comic-detail h6 span')]
        .map((e) => e.textContent?.trim())
        .join(' '),
      series: document.querySelector('.comic-detail a')?.getAttribute('href'),
      pages: images.length,
      prev: document.querySelectorAll('main div div a.btn-primary')?.item(0)?.getAttribute('href'),
      next: document.querySelectorAll('main div div a.btn-primary')?.item(1)?.getAttribute('href'),
      listImages: images,
    };
  },
};
