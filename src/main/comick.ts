// == Comick =======================================================================================
export default {
  name: 'Comick',
  url: /https?:\/\/(www\.)?comick.io\/.+/,
  homepage: 'https://comick.io/home',
  language: ['English'],
  category: 'manga',
  waitEle: '#__NEXT_DATA__',
  run() {
    const data = JSON.parse(document.querySelector('#__NEXT_DATA__')?.textContent ?? '');
    return {
      title: data.props.pageProps.chapter.title,
      series: `/comic/${data.props.pageProps.chapter.md_comics.slug}`,
      pages: data.props.pageProps.chapter.md_images.length,
      prev: data.props.pageProps.prev?.href,
      next: data.props.pageProps.next?.href,
      listImages: data.props.pageProps.chapter.md_images.map(
        (img: { b2key: string }) => `https://s3.comick.ink/comick/${img.b2key}`,
      ),
    };
  },
};
