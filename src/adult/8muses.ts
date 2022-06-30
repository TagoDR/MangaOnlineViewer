// == 8Muses =======================================================================================
export default {
  name: '8Muses',
  url: /https?:\/\/comics.8muses.com\/comics\/picture\/.+/,
  homepage: 'https://comics.8muses.com/',
  language: ['English'],
  category: 'hentai',
  async run() {
    function decode(data: string) {
      /* eslint-disable no-mixed-operators,no-shadow */
      return ((t) => {
        if (t.charAt(0) !== '!') return t;
        return t
          .slice(1)
          .replace(/[\x21-\x7e]/g, (s) => String.fromCharCode(33 + ((s.charCodeAt(0) + 14) % 94)));
      })(data.replace(/&gt;/g, '>').replace(/&lt;/g, '<').replace(/&amp;/g, '&'));
      /* eslint-enable no-mixed-operators,no-shadow */
    }

    const api = await fetch(window.location.href)
      .then((res) => res.text())
      .then((html) => new DOMParser().parseFromString(html, 'text/html'));
    const dataPublic = JSON.parse(
      decode(api.querySelector('#ractive-public')?.innerHTML.trim() || ''),
    );
    const dataShared = JSON.parse(
      decode(api.querySelector('#ractive-shared')?.innerHTML.trim() || ''),
    );
    const src = dataShared.options.pictureHost || window.location.host;
    return {
      title: document
        .querySelector('.top-menu-breadcrumb li:nth-last-child(2) a')
        ?.textContent?.trim(),
      series: document
        .querySelector('.top-menu-breadcrumb li:nth-last-child(2) a')
        ?.getAttribute('href'),
      pages: dataPublic.pictures.length,
      prev: '#',
      next: '#',
      listImages: dataPublic.pictures.map(
        (img: { publicUri: string }) => `//${src}/image/fl/${img.publicUri}.jpg`,
      ),
    };
  },
};
