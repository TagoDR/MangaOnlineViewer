// == MultPorn =====================================================================================
export default {
  name: 'MultPorn',
  url: /https?:\/\/(www.)?multporn.net\/(comics|hentai_manga)\/.+/,
  homepage: 'https://multporn.net/',
  language: ['English'],
  category: 'hentai',
  waitEle: '.jb-idx-thumb:last .jb-thm-thumb-image',
  run() {
    const num = $('.jb-thm-thumb-image').get().length;
    const imgs = $('.jb-thm-thumb-image').get()
      .map(img => $(img).attr('src')
        .replace(/\?.+/, '')
        .replace('/styles/juicebox_square_thumbnail_comics/public', ''));
    return {
      title: $('#page-title').text().trim(),
      series: '#',
      quant: num,
      prev: '#',
      next: '#',
      listImages: imgs,
    };
  },
};
