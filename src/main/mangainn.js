// == MangaInn  ====================================================================================
export default {
  name: 'MangaInn',
  url: /https?:\/\/(www.)?mangainn.net\/manga\/chapter\/.+/,
  homepage: 'http://www.mangainn.net/',
  lang: ['eng'],
  category: 'manga',
  run() {
    const num = parseInt($('select#cmbpages option:last').html(), 10);
    const chapter = $('#chapters option:selected');
    return {
      title: $('#gotomangainfo2').text().replace(' - ', ''),
      series: $('#gotoMangaInfo').attr('href'),
      quant: num,
      prev: chapter.prev().val(),
      next: chapter.next().val(),
      listPages: [...Array(num).keys()].map(i => `${location.href}/page_${i + 1}`),
      img: 'img#imgPage',
    };
  },
};
