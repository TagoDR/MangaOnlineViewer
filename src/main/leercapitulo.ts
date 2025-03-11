// == LeerCapitulo =================================================================================
export default {
  name: 'LeerCapitulo',
  url: /https?:\/\/(www.)?leercapitulo.co\/leer\/.+/,
  homepage: 'https://www.leercapitulo.co/',
  language: ['Spanish'],
  category: 'manga',
  waitEle:"#page_select",
  run() {
    const img = [...document.querySelectorAll('#page_select option')].map(el => el.getAttribute('value'));
    return {
      title: document.querySelector('h1')?.textContent?.trim(),
      series: document.querySelector('.chapter-title a')?.getAttribute('href'),
      pages: img.length,
      prev: document.querySelector('.pre')?.getAttribute('href'),
      next: document.querySelector('.next')?.getAttribute('href'),
      listImages: img,
    };
  },
};
