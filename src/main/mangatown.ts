// == MangaTown ====================================================================================
export default {
  name: 'MangaTown',
  url: /https?:\/\/(www.|m.)?mangatown.com\/manga\/.+\/.+/,
  homepage: 'https://www.mangatown.com/',
  language: ['English'],
  category: 'manga',
  waitVar: 'chapter_id',
  async run() {
    const key = document.querySelector('#dm5_key')?.getAttribute('value');
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'text/plain',
      },
    };
    const src = Array(unsafeWindow.total_pages)
      .fill(0)
      .map(async (_, i) => {
        const url = `chapterfun.ashx?cid=${unsafeWindow.chapter_id}&page=${i}&key=${key}`;
        const api: string = await fetch(url, options).then(async (res) => res.text());
        let d: string[];
        // eslint-disable-next-line no-eval
        (0, eval)(api);
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        return d;
      });
    const images = await Promise.all(src);
    const chapter = document.querySelector<HTMLOptionElement>('#top_chapter_list option:checked');
    return {
      title: document.querySelector('.title h1')?.textContent,
      series: unsafeWindow.series_url,
      pages: images.length,
      prev: chapter?.previousElementSibling?.getAttribute('value'),
      next: chapter?.nextElementSibling?.getAttribute('value'),
      listImages: images.map((img, i) => img[i === 0 ? 0 : 1]),
    };
  },
};
