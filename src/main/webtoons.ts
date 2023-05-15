// == WebToons =====================================================================================
export default {
  name: 'WebToons',
  url: /https?:\/\/(www.)?webtoons.com\/.+viewer.+/,
  homepage: 'https://www.webtoons.com/',
  language: ['English'],
  category: 'manga',
  run() {
    const images = [...document.querySelectorAll('#_imageList img')];
    return {
      title: document.querySelector('.subj_info')?.textContent?.trim(),
      series: document.querySelector('.subj_info a')?.getAttribute('href'),
      pages: images.length,
      prev: document.querySelector('._prevEpisode')?.getAttribute('href'),
      next: document.querySelector('._nextEpisode')?.getAttribute('href'),
      listImages: images.map(
        (img) =>
          img.getAttribute('data-url') || img.getAttribute('data-src') || img.getAttribute('src'),
      ),
    };
  },
};
