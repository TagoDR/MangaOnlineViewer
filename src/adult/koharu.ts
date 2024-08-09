// == Koharu ======================================================================================

export default {
  name: 'Koharu',
  url: /https?:\/\/(www\.)?(koharu).to/,
  homepage: 'https://koharu.to/',
  language: ['English'],
  category: 'hentai',
  lazy: false,
  waitEle: 'nav select option',
  async run() {
    const options = {
      method: 'GET',
      headers: {
        Accept: '*/*',
        Referer: `${window.location.host}/`,
        Origin: window.location.host,
      },
    };
    const url = window.location.pathname.split('/');
    const galleryID = `${url[2]}/${url[3]}`;
    const detailAPI = `https://api.koharu.to/books/detail/${galleryID}`;
    const detail = await fetch(detailAPI, options).then(async (res) => res.json());
    const dataID = Object.keys(detail.data)
      .map(Number)
      .sort((a, b) => b - a)[0];
    const dataAPI = `https://api.koharu.to/books/data/${galleryID}/${detail.data[dataID].id}/${detail.data[dataID].public_key}?v=${detail.updated_at ?? detail.created_at}&w=${dataID}`;
    const data = await fetch(dataAPI, options)
      .then(async (res) => res.json())
      .then(({ base, entries }) =>
        entries.map((image: { path: string }) => `${base}/${image.path}?w=${dataID}`),
      );
    return {
      title: detail.title,
      series: `/g/${galleryID}/`,
      pages: data.length,
      prev: '#',
      next: '#',
      fetchOptions: {
        method: 'GET',
        redirect: 'follow',
      },
      listImages: data,
    };
  },
};
