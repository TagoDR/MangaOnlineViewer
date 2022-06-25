// == UnionMangas =================================================================================
export default {
  name: 'UnionMangas',
  url: /https?:\/\/(www.)?unionleitor.top\/leitor\/.+\/.+/,
  homepage: 'https://unionleitor.top/',
  language: ['Portuguese'],
  category: 'manga',
  run() {
    const chapter = document.querySelector<HTMLOptionElement>('#capitulo_trocar option:checked');
    const images = [...document.querySelectorAll('.img-manga')];
    return {
      title: document.querySelector('.titulo-leitura')?.textContent?.trim(),
      series: document.querySelector('.breadcrumbs a:nth-child(3)')?.getAttribute('href'),
      pages: images.length,
      prev: chapter?.previousElementSibling?.getAttribute('value'),
      next: chapter?.nextElementSibling?.getAttribute('value'),
      listImages: images.map((img) => img.getAttribute('src')),
    };
  },
};
