// == MangaDex =====================================================================================
export default {
  name: 'MangaDex',
  url: /https?:\/\/(www\.)?mangadex.org\/chapter\/.+(\/.+)?/,
  homepage: 'https://mangadex.org/',
  language: ['English'],
  category: 'manga',
  waitEle: ".md--reader-menu a[href^='/chapter/']",
  async run() {
    const chapterId = /\/chapter\/([^/]+)(\/\d+)?/.exec(window.location.pathname)?.at(1);
    const home = `https://api.mangadex.org/at-home/server/${chapterId}`;
    const server = await fetch(home).then(async (res) => res.json());
    const images = server.chapter.data;
    const chapters = [...document.querySelectorAll(".md--reader-menu a[href^='/chapter/']")].map(
      (a) => a.getAttribute('href'),
    );
    return {
      title: document.querySelector('title')?.text.replace(' - MangaDex', ''),
      series: document.querySelector("a.text-primary[href^='/title/']")?.getAttribute('href'),
      pages: images.length,
      prev: chapters[0] !== window.location.pathname ? chapters[0] : '#',
      next: chapters[1] !== window.location.pathname ? chapters[1] : '#',
      listImages: images.map(
        (img: string) => `${server.baseUrl}/data/${server.chapter.hash}/${img}`,
      ),
    };
  },
};
