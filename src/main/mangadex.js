// == MangaDex =====================================================================================
export default {
  name: 'MangaDex',
  url: /https?:\/\/(www.)?mangadex.org\/chapter\/.+(\/.+)?/,
  homepage: 'https://mangadex.com/',
  language: ['English'],
  category: 'manga',
  run() {
    const text = $('script:last').text();
    const server = text.match(/var server = '(.+)';/)[1];
    const dataUrl = text.match(/var dataurl = '(.+)';/)[1];
    const start = text.indexOf('var page_array = ') + 18;
    const cut = text.substring(start);
    const end = cut.indexOf(';') - 2;
    const pageArray = cut.substring(0, end).trim().replace(/'/g, '"');
    const pages = JSON.parse(`[${pageArray}]`);
    const chapter = $('#jump_chapter option:selected');
    return {
      title: $('title').text().replace(' - MangaDex', ''),
      series: $('span[title] + a').attr('href'),
      quant: pages.length,
      prev: `/chapter/${chapter.next().val()}`,
      next: `/chapter/${chapter.prev().val()}`,
      listImages: pages.map(i => `${server + dataUrl}/${i}`),
    };
  },
};

