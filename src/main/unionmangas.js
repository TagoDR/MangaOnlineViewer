// == UnionMangas =================================================================================
export default { // TODO: Check
  name: 'UnionMangas',
  url: /https?:\/\/(www.)?unionmangas.net\/leitor\/.+\/.+/,
  homepage: 'http://unionmangas.net/',
  language: ['Portuguese'],
  category: 'manga',
  run() {
    const origin = $('#topo h1 a');
    const chapter = $('#cap_manga1 option:selected');
    const src = $('.item img.real').get();
    return {
      title: origin.text(),
      series: origin.attr('href'),
      quant: $('.selectPage:first option').length,
      prev: chapter.prev().val(),
      next: chapter.next().val(),
      listImages: [$(src[0]).attr('src')].concat(src.splice(1).map(item => $(item).attr('data-lazy'))),
    };
  },
};
