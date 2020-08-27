// == MangaSee =====================================================================================
export default {
  name: 'MangaSee',
  url: /https?:\/\/(www.)?mangasee123.com\/read-online\/.+/,
  homepage: 'https://mangasee123.com/',
  language: ['English'],
  category: 'manga',
  waitAttr: ['.img-fluid', 'src'],
  run() {
    const src = $('.img-fluid').attr('src');
    const CurChapter = JSON.parse($('script:last').text().match(/CurChapter = ({.+});/)[1]);
    const CHAPTERS = JSON.parse($('script:last').text().match(/CHAPTERS = (\[{.+}\]);/)[1]);
    const CurChapterIndex = CHAPTERS.findIndex((chap) => chap.Chapter === CurChapter.Chapter);

    function ChapterURLEncode(ChapterString) {
      let Index = '';
      const IndexString = ChapterString.substring(0, 1);
      if (IndexString !== '1') {
        Index = `-index-${IndexString}`;
      }
      const Chapter = parseInt(ChapterString.slice(1, -1), 10);
      let Odd = '';
      const OddString = ChapterString[ChapterString.length - 1];
      if (OddString !== '0') {
        Odd = `.${OddString}`;
      }
      return W.location.href.replace(/-chapter-.+/, `-chapter-${Chapter}${Odd}${Index}.html`);
    }

    return {
      title: $('title').text().replace(/ Page .+/, ''),
      series: $('.MainContainer a:first').attr('href'),
      quant: CurChapter.Page,
      prev: ChapterURLEncode(CHAPTERS[CurChapterIndex - 1].Chapter),
      next: ChapterURLEncode(CHAPTERS[CurChapterIndex + 1].Chapter),
      listImages: [...Array(parseInt(CurChapter.Page, 10))
        .keys()].map((i) => src.replace(/-\d\d\d.png/, `-${String(`000${i + 1}`).slice(-3)}.png`)),
    };
  },
};
