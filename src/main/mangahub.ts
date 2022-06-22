// == MangaHub =====================================================================================
export default {
  name: 'MangaHub',
  url: /https?:\/\/(www.)?(mangahub).io\/chapter\/.+\/.+/,
  homepage: 'https://mangahub.io/',
  language: ['English'],
  category: 'manga',
  waitEle: '#select-chapter',
  async run() {
    const slug = window['CURRENT_MANGA_SLUG' as any] || window.location.pathname.split('/')[2];
    const number = window.location.pathname.split('/')[3].replace('chapter-', '');
    const data = { query: `{chapter(x:m01,slug:"${slug}",number:${number}){pages}}` };
    const options = {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const api = await fetch('https://api.mghubcdn.com/graphql', options).then((res) => res.json());
    const images = Object.values(JSON.parse(api?.data.chapter.pages.toString()));
    return {
      title: document.querySelector('#mangareader h3')?.textContent?.trim(),
      series: document.querySelector('#mangareader a')?.getAttribute('href'),
      pages: images.length,
      prev: document.querySelector('.previous a')?.getAttribute('href'),
      next: document.querySelector('.next a')?.getAttribute('href'),
      listImages: images.map((i) => `https://img.mghubcdn.com/file/imghub/${i}`),
    };
  },
};
