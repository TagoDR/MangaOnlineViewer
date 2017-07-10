// == ReadManga.Today ==============================================================================
export default {
  name: 'ReadManga.Today',
  url: /https?:\/\/(www.)?readmanga.today\/.+\/[0-9]+/,
  homepage: 'http://www.readmanga.today/',
  lang: ['eng'],
  category: 'manga',
  run() {
    const chapter = $('select[name="chapter_list"] option:selected');
    return {
      title: $('title').text().trim(),
      series: $('.btn:eq(4)').attr('href'),
      quant: $('select[name="category_type"]:last option').get().length,
      prev: chapter.next('option').val(),
      next: chapter.prev('option').val(),
      bruteForce(func) {
        func.getPage(`${location}/all-pages`).then((html) => {
          const listImages = $(html).find('img.img-responsive-2').get().map(item => $(item).attr('src'));
          func.loadMangaImages({ listImages });
        });
      },
    };
  },
};
