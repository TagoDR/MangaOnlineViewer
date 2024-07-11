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
    const baseUrl = 'https://koharu.to';
    const libraryUrl = 'https://api.koharu.to/books/detail/';
    const dataUrl = 'https://api.koharu.to/books/data/';
    const url = window.location.pathname.split('/');
    const chapterId = `${url[2]}/${url[3]}`;
    const options = {
      method: 'GET',
      headers: {
        Accept: '*/*',
        Referer: `${baseUrl}/`,
        Origin: baseUrl,
      },
    };
    const api = await fetch(libraryUrl + chapterId, options).then(async (res) => res.json());
    const data = await fetch(
      `${dataUrl + chapterId}/${api.data['0'].id}/${api.data['0'].public_key}`,
      {
        ...options,
        method: 'POST',
      },
    ).then(async (res) => res.json());
    return {
      title: api.title,
      series: `/g/${chapterId}/`,
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
