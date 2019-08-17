// == ExHentai =====================================================================================
export default {
  name: ['ExHentai', 'e-Hentai'],
  url: /https?:\/\/(g.)?(exhentai|e-hentai).org\/g\/.+\/.+/,
  homepage: ['https://exhentai.org/', 'https://e-hentai.org/'],
  language: ['English'],
  obs: 'May get your IP Banned, use with moderation',
  category: 'hentai',
  run() {
    return {
      title: $('#gn').text().trim(),
      series: '#',
      quant: $('.gdtm a, .gdtl a').get().length,
      prev: $('.ptt td:first a').attr('href'),
      next: $('.ptt td:last a').attr('href'),
      listPages: $('.gdtm a, .gdtl a').get().map((item) => $(item).attr('href')),
      img: '#img',
      // timer: 3000,
    };
  },
};
