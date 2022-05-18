// == KissManga ====================================================================================
export default {
  name: 'KissManga',
  url: /https?:\/\/(www.)?kissmanga.com\/Manga\/.+\/.+?id=[0-9]+/,
  homepage: 'http://kissmanga.com/',
  language: ['English'],
  category: 'manga',
  waitVar: 'lstOLA',
  run() {
    const chapter = $('.selectChapter option:selected');
    const url = W.location.href.replace(/[^/]+$/, '');
    return {
      title: $('title')
        .text()
        .replace('Read manga', '')
        .replace('online in high quality', '')
        .trim(),
      series: $('#navsubbar a').attr('href'),
      pages: W.mnaplzoamfs.length,
      prev: url + chapter.prev().val(),
      next: url + chapter.next().val(),
      listImages: W.mnaplzoamfs,
    };
  },
};
