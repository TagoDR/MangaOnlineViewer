// == Reset-Scans ================================================================================
export default {
  name: 'Reset-Scans',
  url: /https?:\/\/(www\.)?reset-scans.com\/manga\/.+\/chapter.+/,
  homepage: 'https://reset-scans.com/',
  language: ['English'],
  category: 'manga',
  waitVar: 'chapter_data',
  run() {
    const images = Array.isArray(unsafeWindow.chapter_data)
      ? JSON.parse(unsafeWindow.chapter_data.toString())
      : JSON.parse(
          JSON.parse(
            CryptoJS.AES.decrypt(unsafeWindow.chapter_data, unsafeWindow.wpmangaprotectornonce, {
              format: {
                stringify(data) {
                  const cypher = {
                    ct: data.ciphertext.toString(CryptoJS.enc.Base64),
                    iv: data.iv?.toString(),
                    s: data.salt?.toString(),
                  };
                  return JSON.stringify(cypher);
                },
                parse(text) {
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
