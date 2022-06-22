// == MangaDex =====================================================================================
export default {
  name: 'MangaDex',
  url: /https?:\/\/(www.)?mangadex.org\/chapter\/.+(\/.+)?/,
  homepage: 'https://mangadex.org/',
  language: ['English'],
  category: 'manga',
  waitEle: "a[href^='/chapter/']",
  async run() {
    const chapterId = window.location.pathname.match(/\/chapter\/([^/]+)(\/[0-9]+)?/)![1];
    const home = `https://api.mangadex.org/at-home/server/${chapterId}`;
    const server = await fetch(home).then((res) => res.json());
    const chapter = document.querySelectorAll<HTMLAnchorElement>("a[href^='/chapter/']");
    return {
      title: document.querySelector('title')?.text.replace(' - MangaDex', ''),
      series: document.querySelector("a.text-primary[href^='/title/']")?.getAttribute('href'),
      pages: server!.chapter.data.length,
      prev: chapter[1].getAttribute('href'),
      next: chapter[0].getAttribute('href'),
      listImages: server!.chapter.data.map(
        (img: any) => `${server.baseUrl}/data/${server.chapter.hash}/${img}`,
      ),
    };
  },
};
