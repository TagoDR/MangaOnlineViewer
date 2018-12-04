// == MangaRock ====================================================================================
export default {
  name: 'MangaRock',
  url: /https?:\/\/(www.)?mangarock.com\/manga\/.+\/chapter\/.+/,
  homepage: 'https://mangarock.com/',
  language: ['English'],
  category: 'manga',
  waitEle: 'select:nth(1) option',
  waitAttr: ['a[title]', 'href'],
  run() {
    let api = null;
    const url = `https://api.mangarockhd.com/query/web401/pages?oid=${location.pathname.match(
      /mrs-chapter-[0-9]+/)[0]}`;
    $.ajax({
      type: 'GET',
      url,
      async: false,
      success(res) {
        api = res;
      },
    });

    function decode(t) {
      /* eslint-disable no-mixed-operators,no-bitwise */
      const s = ['length'];
      const e = new Uint8Array(t[s[0]] + 15);
      const n = t[s[0]] + 7;
      e[0] = 82;
      e[1] = 73;
      e[2] = 70;
      e[3] = 70;
      e[7] = n >> 24 & 255;
      e[6] = n >> 16 & 255;
      e[5] = n >> 8 & 255;
      e[4] = 255 & n;
      e[8] = 87;
      e[9] = 69;
      e[10] = 66;
      e[11] = 80;
      e[12] = 86;
      e[13] = 80;
      e[14] = 56;
      for (let r = 0; r < t[s[0]]; r += 1) e[r + 15] = 101 ^ t[r];
      return e;
      /* eslint-enable no-mixed-operators,no-bitwise */
    }

    function process(mri) {
      const image = decode(new Uint8Array(mri));
      const e = [];
      for (let n = 0; n < image.length; n += 32768) {
        e.push(String.fromCharCode.apply(null, image.subarray(n, n + 32768)));
      }
      return `data:image/webp;base64,${btoa(e.join(''))}`;
    }

    function getMRI(index, src, e) {
      setTimeout(() => {
        GM_xmlhttpRequest({
          method: 'GET',
          url: src,
          overrideMimeType: 'text/plain; charset=x-user-defined',
          responseType: 'arraybuffer',
          onload(request) {
            e.addImg(index, process(request.response));
          },
        });
      }, e.wait * (index - e.begin));
    }

    return {
      title: $('title').text().trim(),
      series: $('a[title]').attr('href'),
      quant: api.data.length,
      prev: $('select:first option:selected').prev().val(),
      next: $('select:first option:selected').next().val(),
      bruteForce(e) {
        for (let i = 0; i < api.data.length; i += 1) {
          if (i >= e.begin - 1) {
            getMRI(i + 1, api.data[i], e);
          }
        }
      },
    };
  },
}
;
