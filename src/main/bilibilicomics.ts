// == BilibiliComics ===============================================================================
export default {
  name: 'BilibiliComics',
  url: /https?:\/\/(www.)?(bilibilicomics).com\/.+\/.+/,
  homepage: 'https://www.bilibilicomics.com/',
  language: ['English'],
  category: 'manga',
  waitEle: '.read-nav',
  async run() {
    const W: any = typeof unsafeWindow !== 'undefined' ? unsafeWindow : window;
    const api = await fetch(
      'https://www.bilibilicomics.com/twirp/comic.v1.Comic/GetImageIndex?device=pc&platform=web&lang=en&sys_lang=en',
      {
        method: 'post',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ep_id: W.location.href.split('/').pop(),
          credential: '',
        }),
      },
    )
      .then((res) => res.json())
      .then(({ data }) => data.images.map((image: { path: string }) => `${image.path}@2000w.webp`))
      .then(JSON.stringify)
      .then((urls) =>
        fetch(
          'https://www.bilibilicomics.com/twirp/comic.v1.Comic/ImageToken?device=pc&platform=web&lang=en&sys_lang=en',
          {
            method: 'post',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ urls }),
          },
        ),
      )
      .then((res) => res.json())
      .then((tokens) =>
        tokens.data.map((i: { url: string; token: string }) => `${i.url}?token=${i.token}`),
      );

    return {
      title: document.querySelector('.read-nav')?.textContent?.trim(),
      series: document.querySelector('.manga-title')?.getAttribute('href'),
      pages: api.length,
      prev: document
        .querySelector('.navigate a button[title=Previous]')
        ?.parentElement?.getAttribute('href'),
      next: document
        .querySelector('.navigate a button[title=Next]')
        ?.parentElement?.getAttribute('href'),
      listImages: api,
    };
  },
};
