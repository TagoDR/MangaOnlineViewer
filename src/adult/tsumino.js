// == Tsumino ======================================================================================
export default {
  name: 'Tsumino',
  url: /https?:\/\/(www.)?tsumino.com\/Read\/Index\/[0-9]+\?page=.+/,
  homepage: 'http://tsumino.com/',
  language: ['English'],
  category: 'hentai',
  run() {
    let api = null;
    $.ajax({
      type: 'GET',
      url: `https://www.tsumino.com/Read/Load?q=${$('#image-container').attr('data-opt')}`,
      dataType: 'json',
      async: false,
      success(res) {
        api = res;
      },
    });
    const src = $('#image-container').attr('data-cdn');
    const imgs = [...Array(api.reader_page_total).keys()].map((i) => src.replace('[PAGE]', i + 1));
    return {
      title: $('title').text().match(/(.+Read )(.+)/)[2],
      series: api.reader_start_url,
      quant: api.reader_page_total,
      prev: '#',
      next: '#',
      listImages: imgs,
    };
  },
};
