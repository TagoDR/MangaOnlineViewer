// == 9Hentai ======================================================================================
export default {
  name: '9Hentai',
  url: /https?:\/\/(www.)?9hentai.(ru|to)\/g\/.+\/.+/,
  homepage: 'https://9hentai.to',
  language: ['English'],
  category: 'hentai',
  waitAttr: ['#jumpPageModal input', 'max'],
  async run() {
    const data = { id: parseInt(window.location.pathname.match(/\d+/)![0], 10) };
    const options = {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const api: {
      results: { title: string; total_page: number; id: number; image_server: string };
    } = await fetch('/api/getBookByID', options).then((res) => res.json());
    return {
      title: api.results.title,
      series: `/g/${api.results.id}/`,
      pages: api.results.total_page,
      prev: '#',
      next: '#',
      listImages: Array(api.results.total_page)
        .fill(0)
        .map((_, i) => `${api.results.image_server + api.results.id}/${i + 1}.jpg`),
    };
  },
};
