// == Anchira ======================================================================================
export default {
  name: 'Anchira',
  url: /https?:\/\/(www\.)?(anchira).to/,
  homepage: 'https://anchira.to/',
  language: ['English'],
  category: 'hentai',
  waitEle: 'nav select option',
  async run() {
    const libraryUrl = 'https://anchira.to/api/v1/library/';
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
      listImages: data.names.map(
        (name: string) => `${cdnUrl}/${data.id}/${data.key}/${data.hash}/a/${name}`,
      ),
    };
  },
};
