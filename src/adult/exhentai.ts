// == ExHentai =====================================================================================
export default {
  name: ['ExHentai', 'e-Hentai'],
  url: /https?:\/\/(g.)?(exhentai|e-hentai).org\/s\/.+\/.+/,
  homepage: ['https://exhentai.org/', 'https://e-hentai.org/'],
  language: ['English'],
  obs: 'May get your IP Banned, use with moderation',
  category: 'hentai',
  async run() {
    const num = parseInt(
      document.querySelector('.sn div span:nth-child(2)')?.textContent || '',
      10,
    );
    const maxGalley = Math.ceil(num / 40);
    const gallery = document
      .querySelector('.sb a')
      ?.getAttribute('href')
      ?.replace(/\?p=\d+/, '');

    const fetchBlocks = Array(maxGalley)
      .fill(0)
      .map((_, galleryId) =>
        fetch(
          galleryId > 0
            ? `${gallery}?inline_set=ts_m&p=${galleryId}`
            : `${gallery}?inline_set=ts_m`,
        )
          .then((res) => res.text())
          .then((html) => new DOMParser().parseFromString(html, 'text/html')),
      );

    const data = await Promise.all(fetchBlocks);
    const pages = data.flatMap((html) =>
      [...html.querySelectorAll('.gdtm a, .gdtl a')].map((item) => item.getAttribute('href')),
    );

    // function bruteForce(func: any) {
    //   Array(maxGalley)
    //     .fill(0)
    //     .map((_, i) => i)
    //     .slice(Math.floor(Math.abs((func.begin - 1) / 40)))
    //     .map((galleryId, galleryOrder) =>
    //       fetch(
    //         galleryId > 0
    //           ? `${gallery}?inline_set=ts_m&p=${galleryId}`
    //           : `${gallery}?inline_set=ts_m`,
    //       )
    //         .then((res) => res.text())
    //         .then((html) => new DOMParser().parseFromString(html, 'text/html'))
    //         .then((html: any) => {
    //           [...html.querySelectorAll('.gdtm a, .gdtl a')]
    //             .map((item) => item.getAttribute('href'))
    //             .filter((url, index) => galleryId * 40 + index + 1 >= func.begin)
    //             .map((url, index) => {
    //               setTimeout(() => {
    //                 if (galleryId * 40 + index + 1 >= func.begin) {
    //                   func.addPage(galleryId * 40 + index + 1, url);
    //                 }
    //               }, func.wait * (galleryOrder * 40 + index + 1));
    //               return galleryId * 40 + index + 1;
    //             });
    //         }),
    //     );
    // }

    return {
      title: document.querySelector('#i1 h1')?.textContent?.trim(),
      series: gallery,
      pages: num,
      prev: '#',
      next: '#',
      listPages: pages,
      img: '#img',
      lazy: true,
    };
  },
};
