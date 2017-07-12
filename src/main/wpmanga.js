// == WPManga ======================================================================================
export default {
  name: ['MangaDeep'],
  url: /https?:\/\/(www.)?(mangadeep).com\/.+\/[0-9]+/,
  homepage: ['http://mangadeep.com/'],
  language: ['English'],
  category: 'manga',
  run() {
    const url = `/${location.pathname.split('/')[1]}/${location.pathname.split('/')[2]}`;
    const num = parseInt($('select.cbo_wpm_pag:first option:last').html(), 10);
    const chapter = $('.cbo_wpm_chp option:selected');
    const key = $('.cbo_wpm_chp').attr('onchange').replace(/location.href='/, '');
    return {
      title: $('.wpm_pag h1').text().trim(),
      series: $('h1.ttl a').attr('href'),
      quant: num,
      prev: key.replace(/'.+/, chapter.next().val()),
      next: key.replace(/'.+/, chapter.prev().val()),
      listPages: [...Array(num).keys()].map(i => `${url}/${i + 1}/`),
      img: 'img.manga-page , .prw > a img, .prw a img',
    };
  },
};
