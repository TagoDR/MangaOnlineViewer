// == MangaPark ====================================================================================
declare let CryptoJS: any;
declare let amWord: string;
declare let amPass: string;
declare let imgPathLis: string[];
declare let imgCdnHost: string;
export default {
  name: 'MangaPark',
  url: /https?:\/\/(www.)?mangapark.(com|me|org|net)\/(manga|chapter|comic)\/.+\/.+/,
  homepage: 'https://mangapark.net/',
  language: ['English'],
  category: 'manga',
  waitVar: 'CryptoJS',
  run() {
    const pass = JSON.parse(CryptoJS.AES.decrypt(amWord, amPass).toString(CryptoJS.enc.Utf8));
    return {
      title: document.querySelector('title')?.textContent?.trim(),
      series: document.querySelector('.nav-title a')?.getAttribute('href'),
      pages: imgPathLis.length,
      prev: document.querySelector('.nav-prev a')?.getAttribute('href'),
      next: document.querySelector('.nav-next a')?.getAttribute('href'),
      listImages: imgPathLis.map((i: string, index: number) => `${imgCdnHost + i}?${pass[index]}`),
    };
  },
};
