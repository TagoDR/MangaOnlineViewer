// == FoOlSlide ====================================================================================
export default {
  name: ['FoOlSlide', 'Kireicake', 'Yuri-ism'],
  url: /^(?!.*jaiminisbox).*\/read\/.+/,
  homepage: ['#', 'https://reader.kireicake.com', 'https://www.yuri-ism.net'],
  language: ['English'],
  obs: 'Any Site that uses FoOLSlide',
  category: 'manga',
  run() {
    // Todo: remake chapter links
    // const chapter = $('.topbar_left .dropdown_parent:last ul li a');
    const pages = [...document.querySelectorAll('.topbar_right .dropdown li')];
    const images = [...document.querySelectorAll('.inner img:not(.open)')];
    const num = images.length > 1 ? images.length : pages.length;
    return {
      title: document.querySelector('title')?.textContent?.trim(),
      series: $('div.tbtitle div.text a:first').attr('href'),
      pages: num,
      prev: '#',
      next: '#',
      // prev: chapter
      //   .eq(
      //     chapter.index(
      //       chapter.filter(`[href*='${window.location.pathname.replace(/page.+/, '')}']`),
      //     ) + 1,
      //   )
      //   .attr('href'),
      // next: chapter
      //   .eq(
      //     chapter.index(
      //       chapter.filter(`[href*='${window.location.pathname.replace(/page.+/, '')}']`),
      //     ) - 1,
      //   )
      //   .attr('href'),
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
