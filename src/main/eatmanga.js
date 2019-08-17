// == EatManga =====================================================================================
export default {
  name: 'EatManga',
  url: /https?:\/\/(www.)?eatmanga.me\/Manga-Scan\/.+\/.+\//,
  homepage: 'http://eatmanga.me/',
  language: ['English'],
  category: 'manga',
  run() {
    const chapter = $('#top_chapter_list option:selected');
    return {
      title: $('#main_content h1').text().split(',')[0].trim(),
      series: $('ul#crumbs li a:eq(2)').attr('href'),
      quant: $('select#pages option:last').html(),
      prev: chapter.next().val(),
      next: chapter.prev().val(),
      listPages: $('select#pages option').get().map((item) => $(item).val()),
      img: '#eatmanga_image , #eatmanga_image_big',
    };
  },
};
