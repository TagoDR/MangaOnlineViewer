// == ExHentai =====================================================================================
export default {
  name: ['ExHentai', 'e-Hentai'],
  url: /https?:\/\/(g.)?(exhentai|e-hentai).org\/g\/.+\/.+/,
  homepage: ['https://exhentai.org/', 'https://e-hentai.org/'],
  lang: ['eng'],
  category: 'hentai',
  run() {
    return {
      title: $('#gn').text().trim(),
      series: '#',
      quant: $('.gdtm a').get().length,
      prev: $('.ptt td:first a').attr('href'),
      next: $('.ptt td:last a').attr('href'),
      listPages: $('.gdtm a').get().map(item => $(item).attr('href')),
      img: '#img',
      timer: 3000,
    };
  },
};
