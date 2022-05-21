// == MangaHere ====================================================================================
export default {
  name: 'MangaHere',
  url: /https?:\/\/(www.)?mangahere.cc\/manga\/.+\/.+/,
  homepage: 'http://www.mangahere.cc/',
  language: ['English'],
  category: 'manga',
  run() {
    function decode(data, page) {
      const toBeEval = data.match(/'[^']*'/g)[5].replace(/'/g, '');
      const keyWords = data
        .match(/'[^']*'/g)[6]
        .replace(/'/g, '')
        .split('|');

      function charFromPosition(i) {
        return (
          (i < 31 ? '' : charFromPosition(parseInt(`${i / 31}`, 10))) +
          (i % 31 > 35 ? String.fromCharCode((i % 31) + 29) : (i % 31).toString(36))
        );
      }

      const replacingValues = {};
      keyWords.forEach((ele, i) => {
        replacingValues[charFromPosition(i)] = ele || charFromPosition(i);
      });

      const res = toBeEval.replace(/\b\w+\b/g, (y) => replacingValues[y]);
      return (
        res.match(/pix="([^;]+)";/)[1] + // eslint-disable-line no-useless-escape
        res.match(/pvalue=\["([^,]+)","([^,\]]+)"/)[page === 0 ? 1 : 2]
      ); // eslint-disable-line no-useless-escape
    }

    const src = Array(W.imagecount)
      .fill(null)
      .map((_, i) => {
        let img = '';
        $.ajax({
          url: 'chapterfun.ashx',
          async: false,
          data: { cid: W.chapterid, page: i, key: $('#dm5_key').val() },
        }).done((data) => {
          img = decode(data, i);
        }); // eslint-disable-line no-eval
        return img;
      });
    return {
      title: $('.reader-header-title div:first').text().trim(),
      series: $('.reader-header-title a').attr('href'),
      pages: W.imagecount,
      prev: W.prechapterurl,
      next: W.nextchapterurl,
      listImages: src,
    };
  },
};
