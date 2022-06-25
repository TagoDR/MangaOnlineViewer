// == PandaManga ==================================================================================
export default {
  name: 'PandaManga',
  url: /https?:\/\/(www.)?pandamanga.xyz\/.+\/.+\/.+/,
  homepage: 'https://www.pandamanga.com/',
  language: ['English'],
  category: 'manga',
  run() {
    const chapter = document.querySelector<HTMLOptionElement>('.select-chapter option:checked');
    const data = JSON.parse(document.getElementById('__NEXT_DATA__')!.textContent!);
    const images = data.props.pageProps.mangaview.source
      .split(',')
      .filter((url: string) => url.length > 0);
    return {
      title: data.props.pageProps.mangaview.nameSeoChapter,
      series: document.querySelector('.allc a')?.getAttribute('href'),
      pages: images.length,
      prev: chapter?.nextElementSibling?.getAttribute('value'),
      next: chapter?.previousElementSibling?.getAttribute('value'),
      listImages: images,
    };
  },
};
