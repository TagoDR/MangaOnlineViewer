// == MangaFox =====================================================================================
export default {
  name: ['MangaFox', 'MangaHere'],
  url: /https?:\/\/(www.)?(fanfox.net|mangahere.cc)\/manga\/.+\/.+\//,
  homepage: ['https://fanfox.net/', 'https://www.mangahere.cc/'],
  language: ['English'],
  category: 'manga',
  waitVar: 'chapterid',
  async run() {
    const W: any = typeof unsafeWindow !== 'undefined' ? unsafeWindow : window;
    const key = document.querySelector('#dm5_key')?.getAttribute('value');
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'text/plain',
      },
    };
    const src = Array(W.imagecount)
      .fill(0)
      .map(async (_, i) => {
        const url = `chapterfun.ashx?cid=${W.chapterid || W.chapter_id}&page=${i}&key=${key}`;
        const api: string = await fetch(url, options).then((res) => res.text());
        // eslint-disable-next-line no-eval
        (0, eval)(api);
        // @ts-ignore
        return d;
      });
    const images = await Promise.all(src);
    return {
      title: document.querySelector('.reader-header-title div')?.textContent?.trim(),
      series: document.querySelector('.reader-header-title a')?.getAttribute('href'),
      pages: W.imagecount,
      prev: W.prechapterurl,
      next: W.nextchapterurl,
      listImages: images.map((img, i) => img[i === 0 ? 0 : 1]),
    };
  },
};
