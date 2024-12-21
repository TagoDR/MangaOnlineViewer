// == Comick =======================================================================================
export default {
  name: 'Comick',
  url: /https?:\/\/(www\.)?comick.io\/.+/,
  homepage: 'https://comick.io/',
  language: ['English'],
  category: 'manga',
  waitFunc() {
    return /\/([^/]+)-chapter.+$/.test(window.location.pathname);
  },
  waitEle: '#__NEXT_DATA__',
  run() {
    const data = JSON.parse(document.getElementById('__NEXT_DATA__')?.innerHTML ?? '')?.props
      ?.pageProps;
    const pages = data?.chapter?.md_images?.map(
      (image: { b2key: string }) => `https://meo.comick.pictures/${image?.b2key}`,
    );
    return {
      title: data?.seoTitle ?? `${data.chapter?.md_comics?.title} ${data?.chapter?.chap}`,
      series: `/comic/${data?.chapter?.md_comics?.slug}`,
      pages: pages?.length,
      prev: data?.prev?.href,
      next: data?.next?.href,
      listImages: pages,
    };
  },
};
