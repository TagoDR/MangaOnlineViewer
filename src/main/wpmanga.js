// == WPManga ======================================================================================
export default {
  name: ['MangaDeep'],
  url: /https?:\/\/(www.)?(mangadeep).com\/chapter\/.+\/[0-9]+/,
  homepage: ['http://mangadeep.com/'],
  language: ['English'],
  category: 'manga',
  run() {
    const src = $('select.sl-page:first option').get();
    return {
      title: $('.read-page a:eq(2)').text().trim(),
      series: $('.read-page a:eq(1)').attr('href'),
      quant: src.length,
      prev: $('select.sl-chap:first option:selected').next().val(),
      next: $('select.sl-chap:first option:selected').prev().val(),
      listPages: src.map((i) => $(i).val()),
      img: '#manga_pic_1',
    };
  },
};
