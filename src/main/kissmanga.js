// == KissManga ====================================================================================
export default {
  name: 'KissManga',
  url: /https?:\/\/(www.)?kissmanga.com\/Manga\/.+\/.+?id=[0-9]+/,
  homepage: 'http://kissmanga.com/',
  lang: ['eng'],
  category: 'manga',
  run() {
    const chapter = $('#selectChapter option');
    const origin = $('#navsubbar a');
    return {
      title: origin.text(),
      series: origin.attr('href'),
      quant: $('#selectPage option:last').last().html(),
      prev: chapter.filter(':selected').prev().val(),
      next: chapter.filter(':selected').next().val(),
      listImages: W.lstImages,
    };
  },
};
