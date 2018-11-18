// == MangaFox =====================================================================================
export default {
  name: 'MangaFox',
  url: /https?:\/\/(www.)?|fanfox.net\/manga\/.+\/.+\//,
  homepage: 'http://fanfox.net/',
  language: ['English'],
  category: 'manga',
  run() {
    const src = [...Array(W.imagecount).keys()].map((i) => {
      let res = '';
      $.ajax({ url: 'chapterfun.ashx', async: false, data: { cid: W.chapterid, page: i } })
        .done((data) => { res = eval(data); });// eslint-disable-line no-eval
      if (i === 0) return res[0];
      return res[1];
    });
    return {
      title: $('.reader-header-title div:first').text().trim(),
      series: $('.reader-header-title a').attr('href'),
      quant: W.imagecount,
      prev: W.prechapterurl,
      next: W.nextchapterurl,
      listImages: src,
    };
  },
};
