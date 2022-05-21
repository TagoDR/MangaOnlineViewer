/* eslint-disable no-undef */
// == MangaPark ====================================================================================
declare let CryptoJS;
let amWord;
let amPass;
let amSub_name;
let mpEpi_name;
let currSubUrl;
let imgPathLis;
let prevEpiUrl;
let nextEpiUrl;
let imgCdnHost;
export default {
  name: 'MangaPark',
  url: /https?:\/\/(www.)?mangapark.(com|me|org|net)\/(manga|chapter|comic)\/.+\/.+/,
  homepage: 'http://mangapark.net/',
  language: ['English'],
  category: 'manga',
  run() {
    const pass = JSON.parse(CryptoJS.AES.decrypt(amWord, amPass).toString(CryptoJS.enc.Utf8));
    return {
      // eslint-disable-next-line camelcase
      title: `${amSub_name} - ${mpEpi_name}`,
      series: currSubUrl,
      pages: imgPathLis.length,
      prev: prevEpiUrl,
      next: nextEpiUrl,
      listImages: imgPathLis.map((i, index) => `${imgCdnHost + i}?${pass[index]}`),
    };
  },
};