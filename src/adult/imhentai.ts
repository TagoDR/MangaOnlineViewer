// == Imhentai =====================================================================================
export default {
  name: 'Imhentai',
  url: /https?:\/\/(www.)?imhentai.xxx\/view\/.+\/.+\//,
  homepage: 'http://imhentai.xxx/',
  language: ['English'],
  category: 'hentai',
  waitVar: 'g_th',
  run() {
    const galleryId = $('#gallery_id').val();
    const imageDir = $('#image_dir').val();
    const cId = $('#u_id').val();
    let randomServer;
    if (cId > 0 && cId <= 274825) {
      randomServer = 'm1.imhentai.xxx';
    }
    if (cId > 274825 && cId <= 403818) {
      randomServer = 'm2.imhentai.xxx';
    }
    if (cId > 403818 && cId <= 527143) {
      randomServer = 'm3.imhentai.xxx';
    }
    if (cId > 527143 && cId <= 632481) {
      randomServer = 'm4.imhentai.xxx';
    }
    if (cId > 632481) {
      randomServer = 'm5.imhentai.xxx';
    }
    const src = Object.values(W.g_th).map((i, index) => {
      const ext = i
        .split(',')[0]
        .replace('g', 'gif')
        .replace('p', 'png')
        .replace('j', 'jpg')
        .replace('b', 'bmp');
      return `//${randomServer}/${imageDir}/${galleryId}/${index + 1}.${ext}`;
    });
    return {
      title: $('title').text().trim(),
      series: $('.return_btn').attr('href'),
      pages: parseInt($('#pages').val(), 10),
      prev: '#',
      next: '#',
      listImages: src,
    };
  },
};
