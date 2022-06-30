/* eslint-disable @typescript-eslint/naming-convention */
// == MangaPark ====================================================================================
declare let CryptoJS: any;
declare let amWord: string;
declare let amPass: string;
declare let amSub_name: string;
declare let mpEpi_name: string;
declare let currSubUrl: string;
declare let imgPathLis: string[];
declare let prevEpiUrl: string;
declare let nextEpiUrl: string;
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
      title: `${amSub_name} - ${mpEpi_name}`,
      series: currSubUrl,
      pages: imgPathLis.length,
      prev: prevEpiUrl,
      next: nextEpiUrl,
      listImages: imgPathLis.map((i: string, index: number) => `${imgCdnHost + i}?${pass[index]}`),
    };
  },
};
