// == MangaInn  ====================================================================================
export default {
  name: 'HatigarmScans',
  url: /https?:\/\/(www.)?hatigarmscans.net\/manga\/.+\/.+(\/[0-9]*)?/,
  homepage: 'https://www.hatigarmscans.net//',
  language: ['English'],
  category: 'manga',
  run() {
    const src = $('.scan-page').attr('src');
    const url = src.substring(0, src.lastIndexOf('/') + 1);
    return {
      title: W.title.replace(/ - Page .+/, '').trim(),
      series: W.base_url.substring(0, W.base_url.lastIndexOf('/') + 1),
      quant: W.pages.length,
      prev: W.next_chapter,
      next: W.prev_chapter,
      listImages: W.pages.map((i) => url + i.page_image),
    };
  },
};
