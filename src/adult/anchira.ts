// == Anchira ======================================================================================
export default {
  name: 'Anchira',
  url: /https?:\/\/(www\.)?(anchira).to/,
  homepage: 'https://anchira.to/',
  language: ['English'],
  category: 'hentai',
  waitEle: 'nav select option',
  async run() {
    const libraryUrl = 'https://api.anchira.to/library/';
    const cdnUrl = 'https://kisakisexo.xyz';
    const chapterId = window.location.pathname.slice(3);
    const options = {
      method: 'GET',
      headers: {
        Accept: '*/*',
        Referer: window.location.href,
        'X-Requested-With': 'XMLHttpRequest',
      },
    };
    const api = await fetch(libraryUrl + chapterId, options).then(async (res) => res.json());
    const data = await fetch(`${libraryUrl + chapterId}/data`, options).then(async (res) =>
      res.json(),
    );
    return {
      title: api.title,
      pages: api.pages,
      prev: '#',
      next: '#',
      listImages: api.data.map(
        (image: { n: string }) => `${cdnUrl}/${api.id}/${data.key}/${data.hash}/a/${image.n}`,
      ),
    };
  },
};
