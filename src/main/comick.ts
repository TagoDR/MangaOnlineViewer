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
  async run() {
    const apiUrl = 'https://api.comick.io';
    const chapterId = /\/([^/]+)-chapter.+$/.exec(window.location.pathname)?.[1];
    const data = await fetch(`${apiUrl}/chapter/${chapterId}`).then((res) => res.json());
    const images =
      data.chapter.md_images && data.chapter.md_images.length
        ? data.chapter.md_images
        : await fetch(`${apiUrl}/chapter/${chapterId}/get_images`).then((res) => res.json());
    const pages: { img: string; page: number }[] = images.map(
      (image: { b2key: string; w: string }) => `https://meo.comick.pictures/${image.b2key}`,
    );
    return {
      title: data.seoTitle ?? `${data.chapter.md_comics.title} ${data.chapter.chap}`,
      series: `/comic/${data.chapter.md_comics.slug}`,
      pages: pages.length,
      prev: data.prev?.href,
      next: data.next?.href,
      listImages: pages,
    };
  },
};
