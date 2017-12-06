// == ReadManga.Today ==============================================================================
export default {
  name: 'ReadManga.Today',
  url: /https?:\/\/(www.)?readmng.com\/.+\/.+\/[0-9]+/,
  homepage: 'http://www.readmng.com/',
  language: ['English'],
  category: 'manga',
  run() {
    const url = location.href.substring(0, location.href.lastIndexOf('/'));
    const num = $('select[name="category_type"]:last option').get().length;
    const chapter = $('select[name="chapter_list"] option:selected');
    return {
      title: $('title').text().trim(),
      series: $('.btn:eq(4)').attr('href'),
      quant: num,
      prev: chapter.next('option').val(),
      next: chapter.prev('option').val(),
      listPages: [...Array(num).keys()].map(i => `${url}/${i + 1}`),
      img: '#chapter_img',
      // bruteForce(func) {
      //   func.getPage(`${url}/all-pages`).then((html) => {
      //     const listImages = $(html)
      //       .find('.page_chapter img').get()
      //       .map(item => $(item).attr('src'));
      //     func.loadMangaImages({ listImages });
      //   });
      // },
    };
  },
};

