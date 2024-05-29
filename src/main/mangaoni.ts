// == MangaOni =====================================================================================
export default {
  name: 'MangaOni',
  url: /https?:\/\/(www\.)?manga-oni.com\/lector\/.+\/\d+\/cascada/,
  homepage: 'https://manga-oni.com/',
  language: ['Spanish'],
  category: 'manga',
  run() {
    document.querySelector('#c_list')?.dispatchEvent(new Event('mouseover'));
    const chapter = document.querySelector<HTMLOptionElement>('#c_list option:checked');
    const images = [...document.querySelectorAll('#slider img')];
    return {
      title: document.querySelector('title')?.text.replace(' — Manga en línea | MangaOni', ''),
      pages: images?.length,
      prev: chapter?.nextElementSibling?.getAttribute('value'),
      next: chapter?.previousElementSibling?.getAttribute('value'),
      listImages: images.map((img) => img.getAttribute('data-src') ?? img.getAttribute('src')),
    };
  },
};
