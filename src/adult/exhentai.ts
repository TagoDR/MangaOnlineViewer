// == ExHentai =====================================================================================
export default {
  name: ['ExHentai', 'e-Hentai'],
  url: /https?:\/\/(g.)?(exhentai|e-hentai).org\/s\/.+\/.+/,
  homepage: ['https://exhentai.org/', 'https://e-hentai.org/'],
  language: ['English'],
  obs: 'May get your IP Banned, use with moderation',
  category: 'hentai',
  async run() {
    const num = parseInt(
      document.querySelector('.sn div span:nth-child(2)')?.textContent || '',
      10,
    );
    const maxGalley =
      parseInt(document.querySelector('.ptt td:nth-last-of-type(2) a')?.textContent || '', 10) ||
      Math.ceil(num / 40);
    const gallery = document
      .querySelector('.sb a')
      ?.getAttribute('href')
      ?.replace(/\?p=\d+/, '');

    const fetchBlocks = Array(maxGalley)
      .fill(0)
      .map((_, galleryId) =>
        fetch(`${gallery}?p=${galleryId}`)
          .then((res) => res.text())
          .then((html) => new DOMParser().parseFromString(html, 'text/html')),
      );

    const data = await Promise.all(fetchBlocks);
    const pages = data.flatMap((html) =>
      [...html.querySelectorAll('.gdtm a, .gdtl a')].map((item) => item.getAttribute('href')),
    );

    return {
      title: document.querySelector('#i1 h1')?.textContent?.trim(),
      series: gallery,
      pages: num,
      begin: parseInt(document.querySelector('div#i2 span')?.textContent ?? '1', 10),
      prev: '#',
      next: '#',
      listPages: pages,
      img: '#img',
      lazy: true,
    };
  },
};
