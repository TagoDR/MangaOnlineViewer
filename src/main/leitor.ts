// == Leitor =======================================================================================
export default {
  name: 'Leitor',
  url: /https?:\/\/(www.)?leitor.net\/manga\/.+\/.+\/.+/,
  homepage: 'https://leitor.net/',
  language: ['Portuguese'],
  category: 'manga',
  async run() {
    const W: any = typeof unsafeWindow !== 'undefined' ? unsafeWindow : window;
    const url = `https://leitor.net/leitor/pages/${W.READER_ID_RELEASE}.json?key=${W.READER_TOKEN}`;
    const api = await fetch(url).then((res) => res.json());
    const chapter = document.querySelector<HTMLOptionElement>('.chapter-list .selected');
    return {
      title: document.querySelector('title')?.textContent?.trim(),
      series: document.querySelector('.series-cover a')?.getAttribute('href'),
      pages: api.images.length,
      prev: chapter?.nextElementSibling?.querySelector('a')?.getAttribute('href'),
      next: chapter?.previousElementSibling?.querySelector('a')?.getAttribute('href'),
      listImages: api.images.map(
        (img: { legacy?: string; avif?: string }) => img.avif || img.legacy,
      ),
    };
  },
};
