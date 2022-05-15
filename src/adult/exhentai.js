// == ExHentai =====================================================================================
export default {
  name: ['ExHentai', 'e-Hentai'],
  url: /https?:\/\/(g.)?(exhentai|e-hentai).org\/s\/.+\/.+/,
  homepage: ['https://exhentai.org/', 'https://e-hentai.org/'],
  language: ['English'],
  obs: 'May get your IP Banned, use with moderation',
  category: 'hentai',
  run() {
    const num = parseInt($('.sn div span:eq(1)').text().trim(), 10);
    const maxGalley = Math.ceil(num / 40);
    const gallery = $('.sb a').attr('href').replace(/\?p=\d+/, '');
    return {
      title: $('#i1 h1').text().trim(),
      series: gallery,
      pages: num,
      prev: '#',
      next: '#',
      img: '#img',
      lazy: true,
      bruteForce(func) {
        [...Array(maxGalley).keys()]
          .slice(Math.floor(Math.abs((func.begin - 1) / 40)))
          .map((galleryId, galleryOrder) => func.getHtml(galleryId > 0 ? `${gallery}?inline_set=ts_m&p=${galleryId}` : `${gallery}?inline_set=ts_m`, func.wait * galleryOrder)
            .then((html) => {
              $(html).find('.gdtm a, .gdtl a').get()
                .map((item) => $(item).attr('href'))
                .map((url, index) => {
                  setTimeout(() => {
                    if ((galleryId * 40) + index + 1 >= func.begin) {
                      func.addPage((galleryId * 40) + index + 1, url);
                    }
                    return null;
                  }, (func.wait) * ((galleryOrder * 40) + index + 1));
                  return (galleryId * 40) + index + 1;
                });
            }));
      },
    };
  },
};
