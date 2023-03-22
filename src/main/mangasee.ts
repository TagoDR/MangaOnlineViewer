// == MangaSee =====================================================================================
export default {
  name: ['MangaSee', 'Manga4life'],
  url: /https?:\/\/(www.)?(mangasee123|manga4life).com\/read-online\/.+/,
  homepage: ['https://mangasee123.com/', 'https://manga4life.com/'],
  language: ['English'],
  category: 'manga',
  waitAttr: ['.img-fluid', 'src'],
  run() {
    const src = document.querySelector('.img-fluid')?.getAttribute('src') || '';
    const script = [...document.querySelectorAll('body script:not([src])')].at(-1)?.textContent;
    const textCurChapter = script?.match(/CurChapter = ({.+});/) || [];
    const CurChapter = JSON.parse(textCurChapter[1]);
    const textCHAPTERS = script?.match(/CHAPTERS = (\[\{.+}]);/) || [];
    const CHAPTERS = JSON.parse(textCHAPTERS[1]);
    const CurChapterIndex = CHAPTERS.findIndex(
      (chap: { Chapter: string }) => chap.Chapter === CurChapter.Chapter,
    );

    function ChapterURLEncode(reference: number) {
      let ChapterString = CHAPTERS[CurChapterIndex + reference];
      if (ChapterString === undefined) {
        return '#';
      }
      ChapterString = ChapterString.Chapter;
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
      return window.location.href.replace(/-chapter-.+/, `-chapter-${Chapter}${Odd}${Index}.html`);
    }

    return {
      title: document
        .querySelector('title')
        ?.textContent?.replace(/ Page .+/, '')
        .trim(),
      series: document.querySelector('.MainContainer a')?.getAttribute('href'),
      pages: parseInt(CurChapter.Page, 10),
      prev: ChapterURLEncode(-1),
      next: ChapterURLEncode(+1),
      listImages: Array(parseInt(CurChapter.Page, 10))
        .fill(0)
        .map((_, i) =>
          src.replace(
            /-\d\d\d.png/,
            `-${String(i + 1)
              .padStart(3, '0')
              .slice(-3)}.png`,
          ),
        ),
    };
  },
};
