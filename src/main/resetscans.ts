// == Reset-Scans ================================================================================
declare let CryptoJS: any;
export default {
  name: 'Reset-Scans',
  url: /https?:\/\/(www.)?reset-scans.com\/manga\/.+\/chapter.+/,
  homepage: 'https://reset-scans.com/',
  language: ['English'],
  category: 'manga',
  waitVar: 'chapter_data',
  run() {
    const W: any = typeof unsafeWindow !== 'undefined' ? unsafeWindow : window;
    const images = Array.isArray(W.chapter_data)
      ? JSON.parse(W.chapter_data)
      : JSON.parse(
          JSON.parse(
            CryptoJS.AES.decrypt(W.chapter_data, W.wpmangaprotectornonce, {
              format: {
                stringify(data: any) {
                  const cypher = {
                    ct: data.ciphertext.toString(CryptoJS.enc.Base64),
                    iv: data.iv?.toString(),
                    s: data.salt?.toString(),
                  };
                  return JSON.stringify(cypher);
                },
                parse(text: any) {
                  const result = JSON.parse(text);
                  return CryptoJS.lib.CipherParams.create({
                    ciphertext: CryptoJS.enc.Base64.parse(result.ct),
                    iv: CryptoJS.enc.Hex.parse(result.iv),
                    salt: CryptoJS.enc.Hex.parse(result.s),
                  });
                },
              },
            }).toString(CryptoJS.enc.Utf8),
          ),
        );

    return {
      title: document.querySelector('#chapter-heading')?.textContent?.trim(),
      series: document.querySelector('.back')?.getAttribute('href'),
      pages: images.length,
      prev: document.querySelector('.prev_page')?.getAttribute('href'),
      next: document.querySelector('.next_page')?.getAttribute('href'),
      listImages: images,
    };
  },
};
