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
      series: window.mangaNav.mangaUrl,
      pages: window.chapter_preloaded_images.length,
      prev: $('select.single-chapter-select option:selected').next().val(),
      next: $('select.single-chapter-select option:selected').prev().val(),
      listImages: window.chapter_preloaded_images,
    };
  },
};
