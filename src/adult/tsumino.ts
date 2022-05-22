// == Tsumino ======================================================================================
export default {
  name: 'Tsumino',
  url: /https?:\/\/(www.)?tsumino.com\/Read\/Index\/[0-9]+(\?page=.+)?/,
  homepage: 'http://tsumino.com/',
  language: ['English'],
  category: 'hentai',
  run() {
    let api: { reader_page_total; reader_start_url };
    $.ajax({
      type: 'GET',
      url: `https://www.tsumino.com/Read/Load?q=${$('#image-container').attr('data-opt')}`,
      dataType: 'json',
      async: false,
      success(res) {
        api = res;
      },
    });
    const src = $('#image-container').attr('data-cdn') as string;
    const imgs = Array(api!.reader_page_total)
      .fill(null)
      .map((_, i) => src.replace('[PAGE]', `${i + 1}`));
    return {
      title: $('title')
        .text()
        .match(/(.+Read )(.+)/)![2],
      series: api!.reader_start_url,
      pages: api!.reader_page_total,
      prev: '#',
      next: '#',
      listImages: imgs,
    };
  },
};
