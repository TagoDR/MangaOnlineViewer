// == HenTalk ======================================================================================

export default {
  name: 'HenTalk',
  url: /https?:\/\/(www.)?hentalk.pw/,
  homepage: 'https://hentalk.pw/',
  language: ['English'],
  category: 'hentai',
  waitEle: 'div div + img[alt^=Page]',
  async run() {
    const cdn = 'https://hentalk.pw';
    const api = await fetch(
      `${window.location.pathname}/__data.json?x-sveltekit-invalidated=011`,
    ).then(async (res) => res.json());
    const slug = document
      .querySelector('div div + img[alt^=Page]')
      ?.getAttribute('src')
      ?.match(/image\/(.+)\//)?.[1];
    const images = api.nodes[1].data.filter(
      (e: unknown) => typeof e === 'string' && /\.(png|gif|jpg|jpeg|webp)$/.test(e),
    );
    return {
      title: document
        .querySelector('title')
        ?.textContent?.trim()
        .replace(/Page \d+ • /, ''),
      series: window.location.href.replace(/read\/.+/, ''),
      pages: images?.length,
      prev: '#',
      next: '#',
      listImages: images?.map(
        (src: string, i: number) =>
          `${cdn}/image/${slug}/${i + 1}${/\.(png|gif|jpg|jpeg|webp)$/.exec(src)?.[0]}`,
      ),
    };
  },
};
