// == UnionMangas =================================================================================
export default { // TODO: Check
  name: 'UnionMangas',
  url: /unionmangas/,
  homepage: 'http://unionmangas.net/',
  language: ['Portuguese'],
  category: 'manga',
  run() {
    const origin = $('#topo h1 a');
    const chapter = $('#cap_manga1 option:selected');
    return {
      title: origin.text(),
      series: origin.attr('href'),
      quant: $('.selectPage:first option').length,
      prev: chapter.prev().val(),
      next: chapter.next().val(),
      listImages: $('.item img.real').get().map(item => $(item).attr('src')),
    };
  },
};
