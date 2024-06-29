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
    const data = /const data = ([^;]+);/.exec(api)?.[0];
    const slug =
      data?.match(/hash:"(\w+)"/)?.[1] ??
      document
        .querySelector('div div + img[alt^=Page]')
        ?.getAttribute('src')
        ?.match(/image\/(.+)\//)?.[1];
    const images = /const data = ([^;]+);/
      .exec(api)?.[0]
      ?.match(/images:\[([^\]]+)\]/)?.[1]
      ?.match(/filename:"[\w.]+"/g)
      ?.map((s) => s.replace('filename:"', '').replace('"', ''));
    return {
      title: document
        .querySelector('title')
        ?.textContent?.trim()
        .replace(/Page \d+ • /, ''),
      series: window.location.href.replace(/read\/.+/, ''),
      pages: images?.length,
      prev: '#',
      next: '#',
      listImages: images?.map((src) => `${cdn}/image/${slug}/${src}`),
    };
  },
};
