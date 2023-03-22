// == Tsumino ======================================================================================
export default {
  name: 'Tsumino',
  url: /https?:\/\/(www.)?tsumino.com\/Read\/Index\/\d+(\?page=.+)?/,
  homepage: 'http://tsumino.com/',
  language: ['English'],
  category: 'hentai',
  async run() {
    const dataopt = document.querySelector('#image-container')?.getAttribute('data-opt');
    const datacdn = document.querySelector('#image-container')?.getAttribute('data-cdn') || '';
    const url = `https://www.tsumino.com/Read/Load?q=${dataopt}`;
    const api = await fetch(url).then((res) => res.json());
    return {
      title: document
        .querySelector('title')
        ?.textContent?.replace(/.+Read/, '')
        .trim(),
      series: api.reader_start_url,
      pages: api.reader_page_total,
      prev: '#',
      next: '#',
      listImages: Array(api.reader_page_total)
        .fill(0)
        .map((_, i) => datacdn.replace('[PAGE]', `${i + 1}`)),
    };
  },
};
