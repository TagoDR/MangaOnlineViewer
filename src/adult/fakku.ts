// == Fakku.cc =====================================================================================

export default {
  name: 'Fakku.cc',
  url: /https?:\/\/(spy.)?fakku.cc/,
  homepage: 'https://spy.fakku.cc/',
  language: ['English'],
  category: 'hentai',
  waitEle: 'div div + img[alt^=Page]',
  async run() {
    const cdn = 'https://cdn.fakku.cc';
    const api = await fetch(`${window.location.href}/__data.json?x-sveltekit-invalidated=011`).then(
      async (res) => res.text(),
    );
    const { data } = JSON.parse(api.split('\n').filter((s) => s.length)[1]);
    const slug = data[5];
    const num = data[12].length;
    return {
      title: document
        .querySelector('.title')
        ?.textContent?.trim()
        .replace(/Page \d+ • /, ''),
      series: window.location.href.replace(/read\/.+/, ''),
      pages: num,
      prev: '#',
      next: '#',
      listImages: Array(num)
        .fill(0)
        .map((_, i) => `${cdn}/image/${slug}/${i + 1}`),
    };
  },
};
