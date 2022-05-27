// == Leitor =======================================================================================
export default {
  name: 'Leitor',
  url: /https?:\/\/(www.)?leitor.net\/manga\/.+\/.+\/.+/,
  homepage: 'https://leitor.net/',
  language: ['Portuguese'],
  category: 'manga',
  run() {
    const token = $('script[src*=token]')
      .attr('src')
      .match(/[&?]token=(\w+)&?/i)[1];
    const idRelease = $('script[src*=token]')
      .attr('src')
      .match(/[&?]id_release=(\d+)&?/i)[1];
    let api = null;
    const url = `https://leitor.net/leitor/pages/${idRelease}.json?key=${token}`;
    $.ajax({
      type: 'GET',
      url,
      async: false,
      success(res) {
        api = res;
      },
    });
    return {
      title: $('title').text().trim(),
      series: $('.series-cover a').attr('href'),
      quant: api.images.length,
      prev: $('.chapter-list .selected').next().find('a').attr('href'),
      next: $('.chapter-list .selected').prev().find('a').attr('href'),
      listImages: api.images,
    };
  },
};
