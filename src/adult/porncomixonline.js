// == PornComixOnline ==============================================================================
export default {
  name: ['PornComixOnline', 'xyzcomics'],
  url: /https?:\/\/(www.)?(porncomixonline.net|xyzcomics.com)\/.+/,
  homepage: ['https://www.porncomixonline.net', 'http://xyzcomics.com/'],
  language: ['English'],
  category: 'hentai',
  run() {
    const imgs = $('.dgwt-jg-gallery img').get();
    return {
      title: $('.entry-title').text().trim(),
      series: '#',
      quant: imgs.length,
      prev: '#',
      next: '#',
      listImages: imgs.map((i) => {
        const urls = $(i).attr('data-jg-srcset').split(',');
        let src = '';
        let w = 0;
        for (let l = 0; l < urls.length; l += 1) {
          const s = urls[l].match(/(.+) (\d+)w/);
          if (s[2] > w) {
            [, w, src] = s;
            w = s[2];
            src = s[1];
          }
        }
        return src;
      }),
    };
  },
};
