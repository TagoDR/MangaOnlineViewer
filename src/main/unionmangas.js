// == UnionMangas =================================================================================
export default {
  name: 'UnionMangas',
  url: /https?:\/\/(www.)?unionleitor.top\/leitor\/.+\/.+/,
  homepage: 'https://unionleitor.top/',
  language: ['Portuguese'],
  category: 'manga',
  run() {
    return {
      title: $('.titulo-leitura').text().trim(),
      series: $('.breadcrumbs a:last').attr('href'),
      quant: $('#paginas option').get().length,
      prev: `/leitor/${$('#mangaUrl').text()}/${$('.listCap:selected').prev().val()}`,
      next: `/leitor/${$('#mangaUrl').text()}/${$('.listCap:selected').prev().next()}`,
      listImages: $('.img-manga')
        .get()
        .map((i) => $(i).attr('src')),
    };
  },
};
