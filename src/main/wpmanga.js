// == WPManga ======================================================================================
export default {
  name: ['Manga33'],
  url: /https?:\/\/(www.)?(manga33).com\/chapter\/.+\/[0-9]+/,
  homepage: ['http://manga33.com/'],
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
      img: '.chapter-content img',
    };
  },
};
