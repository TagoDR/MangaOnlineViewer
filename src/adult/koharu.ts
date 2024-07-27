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
    const url = window.location.pathname.split('/');
    const galleryID = `${url[2]}/${url[3]}`;
    const detailAPI = `https://api.koharu.to/books/detail/${galleryID}`;
    const detail = await fetch(detailAPI).then(async (res) => res.json());
    const dataAPI = `https://api.koharu.to/books/data/${galleryID}/${detail.data['0'].id}/${detail.data['0'].public_key}?v=${detail.updated_at ?? detail.created_at}&w=0`;
    const data = await fetch(dataAPI).then(async (res) => res.json());
    return {
      title: detail.title,
      series: `/g/${galleryID}/`,
      pages: data.entries.length,
      prev: '#',
      next: '#',
      fetchOptions: {
        method: 'GET',
        redirect: 'follow',
      },
      listImages: data.entries.map((image: { path: string }) => `${data.base}/${image.path}`),
    };
  },
};
