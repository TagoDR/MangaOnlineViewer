// == AsuraScans ===================================================================================
export default {
  name: 'Asura Scans',
  url: /https?:\/\/beta.asurascans.com\/read\/.+\/.+/,
  homepage: 'https://beta.asurascans.com/',
  language: ['English'],
  category: 'manga',
  run() {
    const { chapterID, data } = JSON.parse(
      document.querySelector('#__NEXT_DATA__')?.textContent ?? '',
    ).props.pageProps;
    return {
      title: document.querySelector('span.h2')?.textContent?.trim(),
      series: document.querySelector('.container a.h6')?.getAttribute('href'),
      pages: data.length,
      prev: document.querySelector('.prev:not(.disabled)')?.getAttribute('href'),
      next: document.querySelector('.next:not(.disabled)')?.getAttribute('href'),
      listImages: data.map(
        (img: { uuid: string }) => `https://img.asurascans.com/pages/${chapterID}/${img.uuid}.jpg`,
      ),
    };
  },
};
