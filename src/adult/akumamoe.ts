// == AkumaMoe =====================================================================================
export default {
  name: 'AkumaMoe',
  url: /https?:\/\/(www\.)?akuma\.moe\/g\/.+\/.+/,
  homepage: 'https://akuma.moe',
  language: ['Raw'],
  category: 'hentai',
  waitFunc: () =>
    unsafeWindow.img_lst?.length ===
    document.querySelectorAll('.reader-nav:first-child .nav-select option')?.length,
  async run() {
    return {
      title: document
        .querySelector('h1.sr-only')
        ?.textContent?.trim()
        .replace(/^Reading /, ''),
      series: `https://akuma.moe/g/${/\/g\/([^/]+)\//.exec(window.location.pathname)?.[1]}/`,
      pages: unsafeWindow.img_lst.length,
      prev: '#',
      next: '#',
      listImages: unsafeWindow.img_lst.map((img: string) => `${unsafeWindow.img_prt}/${img}`),
    };
  },
};
