// == MangaSee =====================================================================================
export default {
  name: 'MangaSee',
  url: /https?:\/\/(www.)?mangaseeonline.us\/read-online\/.+/,
  homepage: 'https://mangaseeonline.us/',
  language: ['English'],
  category: 'manga',
  run() {
    const imgs = Object.values(W.PageArr).slice(0, -1);
    const chapter = $('.ChapterSelect:first option:selected');
    const chapterLink = (chap) => {
      if (chap === undefined) return '#';
      return `/read-online/${$('.IndexName')
        .val()}-chapter-${W.ChapterArr[chap].ChapterDisplay}-page-1.html`;
    };
    return {
      title: $('title').text().replace(/ Page .+/, ''),
      series: $('.list-link').attr('href'),
      quant: imgs.length,
      prev: chapterLink(chapter.prev().val()),
      next: chapterLink(chapter.next().val()),
      listImages: imgs,
    };
  },
};
