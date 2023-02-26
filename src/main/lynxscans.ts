// == LynxScans ====================================================================================
export default {
  name: 'LynxScans',
  url: /https?:\/\/(www.)?lynxscans.com\/comics?\/.+/,
  homepage: 'https://lynxscans.com/',
  language: ['English'],
  category: 'manga',
  waitAttr: ['#app', 'data-page'],
  run() {
    const data: {
      props: {
        pages: { url: string }[];
        nextChapter: string;
        previousChapter: string;
        home: string;
      };
    } = JSON.parse(document.querySelector('#app')!.getAttribute('data-page')!);
    return {
      title: document.querySelector('title')?.textContent?.trim(),
      series: data.props.home,
      pages: data.props.pages.length,
      prev: data.props.previousChapter,
      next: data.props.nextChapter,
      listImages: data.props.pages.map((img: { url: string }) => img.url),
    };
  },
};
