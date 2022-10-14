// == FoOlSlide ====================================================================================
export default {
  name: ['FoOlSlide', 'Kireicake'],
  url: /^(?!.*jaiminisbox).*\/read\/.+/,
  homepage: ['#', 'https://reader.kireicake.com'],
  language: ['English'],
  obs: 'Any Site that uses FoOLSlide',
  category: 'manga',
  waitEle: 'img.open',
  run() {
    const chapter = [...document.querySelectorAll('.topbar_left .dropdown_parent:last-of-type li')];
    const origin = chapter.findIndex((item) => {
      const url = item.querySelector('a')?.getAttribute('href');
      if (url) return window.location.href.startsWith(url);
      return false;
    });
    const pages = [...document.querySelectorAll('.topbar_right .dropdown li')];
    const images = [...document.querySelectorAll('.inner img:not(.open)')];
    const num = images.length > 1 ? images.length : pages.length;
    return {
      title:
        chapter.at(origin)?.querySelector('a')?.textContent?.trim() ??
        document.querySelector('title')?.textContent?.trim(),
      series: document.querySelector('div.tbtitle div.text a')?.getAttribute('href'),
      pages: num,
      prev: chapter
        .at(origin + 1)
        ?.querySelector('a')
        ?.getAttribute('href'),
      next: chapter
        .at(origin - 1)
        ?.querySelector('a')
        ?.getAttribute('href'),
      listPages:
        images.length > 1
          ? null
          : Array(num)
              .fill(0)
              .map((_, i) => `${window.location.href.replace(/\/\d+$/, '')}/${i + 1}`),
      listImages: images.length > 1 ? images.map((img) => img.getAttribute('src')) : null,
      img: 'img.open',
    };
  },
};
