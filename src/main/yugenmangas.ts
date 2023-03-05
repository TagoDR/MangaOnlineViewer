// == YugenMangas ==================================================================================
export default {
  name: 'YugenMangas',
  url: /https?:\/\/(www.)?(yugenmangas).com\/series\/.+/,
  homepage: 'https://yugenmangas.com/',
  language: ['Spanish'],
  category: 'manga',
  async run() {
    const data = JSON.parse(document.querySelector('#__NEXT_DATA__')?.textContent ?? '');
    const { id } =
      data.props.pageProps.data ??
      (
        await fetch(
          window.location.href
            .replace('series', `_next/data/${data.buildId}/series`)
            .concat('.json'),
        ).then((res) => res.json())
      ).pageProps.data;
    const api = await fetch(`https://api.yugenmangas.com/series/chapter/${id}`).then((res) =>
      res.json(),
    );
    return {
      title: document.querySelector('title')?.textContent?.trim(),
      series: document.querySelector('.chapter-heading h5 a')?.getAttribute('href'),
      pages: api.content.images.length,
      prev: document.querySelector('.prev-chap a')?.getAttribute('href'),
      next: document.querySelector('.next-chap a')?.getAttribute('href'),
      listImages: api.content.images.map((url: string) => `https://api.yugenmangas.com/${url}`),
    };
  },
};
