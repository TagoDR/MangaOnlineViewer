// == MangaHub =====================================================================================
export default {
  name: 'MangaHub',
  url: /https?:\/\/(www.)?(mangahub).io\/chapter\/.+\/.+/,
  homepage: 'https://mangahub.io/',
  language: ['English'],
  category: 'manga',
  waitEle: '#select-chapter',
  async run() {
    function getCookie(name: string) {
      const re = new RegExp(`${name}=([^;]+)`);
      const value = re.exec(document.cookie);
      return value != null ? decodeURIComponent(value[1]) : null;
    }

    const W: any = typeof unsafeWindow !== 'undefined' ? unsafeWindow : window;
    const slug = W.CURRENT_MANGA_SLUG || window.location.pathname.split('/')[2];
    const number = window.location.pathname.split('/')[3].replace('chapter-', '');
    const data = { query: `{chapter(x:m01,slug:"${slug}",number:${number}){pages}}` };
    const options = {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
        'x-mhub-access': getCookie('mhub_access'),
      },
    };
    const api = await fetch('https://api.mghubcdn.com/graphql', options as any).then((res) =>
      res.json(),
    );
    const images = JSON.parse(api?.data.chapter.pages.toString());
    return {
      title: document.querySelector('#mangareader h3')?.textContent?.trim(),
      series: document.querySelector('#mangareader a')?.getAttribute('href'),
      pages: images.i.length,
      prev: document.querySelector('.previous a')?.getAttribute('href'),
      next: document.querySelector('.next a')?.getAttribute('href'),
      listImages: images.i.map(
        (i: string) => `https://img.mghubcdn.com/file/imghub/${images.p + i}`,
      ),
    };
  },
};
