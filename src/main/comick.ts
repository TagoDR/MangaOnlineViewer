// == Comick =======================================================================================
export default {
  name: 'Comick',
  url: /https?:\/\/(www\.)?comick.io\/.+/,
  homepage: 'https://comick.io/',
  language: ['English'],
  category: 'manga',
  async run() {
    const apiUrl = 'https://api.comick.io';
    const chapterId = /\/([^/]+)-chapter.+$/.exec(window.location.pathname)?.[1];
    const data = await fetch(`${apiUrl}/chapter/${chapterId}`).then((res) => res.json());
    const pages: { img: string; page: number }[] = data.chapter.md_images.map(
      (image: { b2key: string; w: string }) =>
        `https://meo.comick.pictures/${image.b2key}?width=${image.w}`,
    );
    return {
      title: data.chapter.md_comics.title,
      series: `/comic/${data.chapter.md_comics.slug}`,
      pages: pages.length,
      prev: data.prev?.href,
      next: data.next?.href,
      listImages: pages,
    };
  },
};
