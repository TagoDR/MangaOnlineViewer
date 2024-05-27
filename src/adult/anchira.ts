// == Anchira ======================================================================================

export default {
  name: 'Anchira',
  url: /https?:\/\/(www\.)?(anchira).to/,
  homepage: 'https://anchira.to/',
  language: ['English'],
  category: 'hentai',
  lazy: false,
  waitEle: 'nav select option',
  async run() {
    const baseUrl = 'https://anchira.to';
    const libraryUrl = 'https://api.anchira.to/library/';
    const getCdn = (page: number) =>
      page % 2 === 0 ? 'https://kisakisexo.xyz' : 'https://aronasexo.xyz';
    const chapterId = window.location.pathname.slice(3);
    const options = {
      method: 'GET',
      headers: {
        Accept: '*/*',
        Referer: `${baseUrl}/`,
        Origin: baseUrl,
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
        (image: { n: string }, page: number): Promise<string> =>
          fetch(`${getCdn(page)}/${data.id}/${data.key}/${data.hash}/a/${image.n}`, {
            method: 'GET',
            redirect: 'follow',
          })
            .then((resp) => resp.blob())
            .then((blob) => URL.createObjectURL(blob)),
      ),
    };
  },
};
