// == Simply-Hentai ================================================================================
export default {
  name: 'Simply-Hentai',
  url: /https?:\/\/.*simply-hentai.com\/.+\/page\/.+/,
  homepage: 'http://simply-hentai.com/',
  lang: ['eng'],
  category: 'hentai',
  run() {
    const url = $('#nextLink').prev('a').attr('href');
    const origin = $('.m10b h1 a:first');
    return {
      title: origin.text().trim(),
      series: origin.attr('href'),
      quant: $('.m10b ').text().match(/Page [0-9]+ of ([0-9]+)/)[1],
      prev: '#',
      next: '#',
      bruteForce(func) {
        func.getPage(url).then((html) => {
          const listImages = $(html)
            .find('.m10b span[data-class^=\'img-responsive\'] :first-child')
            .get()
            .map(item => $(item)
              .attr('data-src')
              .replace('very_small', 'full')
              .replace('album/', ''));
          func.loadMangaImages({ listImages });
        });
      },
    };
  },
};

