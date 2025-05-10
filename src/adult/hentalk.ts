// == HenTalk ======================================================================================

export default {
  name: 'HenTalk',
  url: /https?:\/\/(www.)?hentalk.pw/,
  homepage: 'https://hentalk.pw/',
  language: ['English'],
  category: 'hentai',
  async run() {
    const cdn = 'https://hentalk.pw';
    const api = await fetch(
      `${window.location.pathname}/__data.json?x-sveltekit-trailing-slash=1&x-sveltekit-invalidated=001`,
    )
      .then(async (res) => res.json())
      .then((j) => j.nodes[2].data);
    const gallery = api?.[api.find((e: { gallery?: number }) => e?.gallery)?.gallery];
    const slug =
      api?.[gallery?.hash] ||
      api?.[api.find((e: { hash?: number; id?: number }) => e?.hash && e?.id).hash];
    const images = api?.[gallery.images]
      .map((i: number) => api[i])
      .map((i: { filename: string }) => api[i.filename]);
    return {
      title: api?.[gallery.title],
      series: window.location.href.replace(/read\/.+/, ''),
      pages: images?.length,
      prev: '#',
      next: '#',
      listImages: images?.map((src: string) => `${cdn}/image/${slug}/${src}`),
    };
  },
};
