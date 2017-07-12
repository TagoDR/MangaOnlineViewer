// == ReadManga.Today ==============================================================================
export default {
  name: 'Funmanga',
  url: /https?:\/\/(www.)?funmanga.com\/.+\/[0-9]+/,
  homepage: 'http://funmanga.com/',
  language: ['English'],
  category: 'manga',
  run() {
    const chapter = $('.extra-buttons select:first option:selected');
    const url = $('.widget-heading select option').get().slice(1);
    return {
      title: $('title').text().trim(),
      series: $('h5.widget-heading a:first').attr('href'),
      quant: url.length,
      prev: chapter.next('option').val(),
      next: chapter.prev('option').val(),
      listPages: url.map(item => $(item).val()),
      img: '.img-responsive',
    };
  },
};
