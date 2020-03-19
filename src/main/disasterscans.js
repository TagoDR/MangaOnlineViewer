// == DisasterScans ================================================================================
export default {
  name: 'DisasterScans',
  url: /https?:\/\/(www.)?disasterscans.com\/manga\/.+\/chapter-.+/,
  homepage: 'https://disasterscans.com/',
  language: ['English'],
  category: 'manga',
  run() {
    return {
      title: $('#chapter-heading').text(),
      series: W.mangaNav.mangaUrl,
      quant: W.chapter_preloaded_images.length,
      prev: $('select.single-chapter-select option:selected').next().val(),
      next: $('select.single-chapter-select option:selected').prev().val(),
      listImages: W.chapter_preloaded_images,
    };
  },
};
