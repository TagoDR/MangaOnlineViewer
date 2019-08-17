// == Hentai Comic =================================================================================
export default {
  name: 'Hentai Comic',
  url: /https?:\/\/(www.)?(hentai|porn)-.+.com\/image\/.+/,
  homepage: 'https://hentai-comic.com/',
  language: ['English'],
  obs: 'and similar sites',
  category: 'hentai',
  run() {
    const pages = [W.location.pathname];
    pages.push(...$('#paginator:first a').get().slice(0, -2).map((s) => $(s).attr('href')));
    const imgs = [];

    function getimages(url) {
      $.ajax({
        type: 'POST',
        url,
        dataType: 'html',
        async: false,
        success(html) {
          imgs.push(...$('#display_image_detail img', html).get().map((s) => $(s).attr('src')));
        },
      });
    }

    pages.map(getimages);
    return {
      title: $('#title h2').text().trim(),
      series: $('#post + div a').attr('href'),
      quant: imgs.length,
      prev: '#',
      next: '#',
      listImages: imgs,
    };
  },
};
