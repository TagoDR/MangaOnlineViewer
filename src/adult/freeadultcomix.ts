// == FreeAdultComix ================================================================================
export default {
  name: 'FreeAdultComix',
  url: /https?:\/\/(www\.)?freeadultcomix.com\/.+/,
  homepage: 'https://www.freeadultcomix.com',
  language: ['English'],
  category: 'hentai',
  timer: 5000,
  run() {
    const images = [...document.querySelectorAll('.foto img')];
    return {
      title: document.querySelector('.post-conteudo h1')?.textContent?.trim(),
      pages: images.length,
      prev: '#',
      next: '#',
      listImages: images.map((img) => img.getAttribute('src')),
    };
  },
};
