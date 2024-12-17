// == Flame Comics =================================================================================
export default {
  name: 'Flame Comics',
  url: /https?:\/\/(www.)?(flamecomics).(xyz)\/series\/.+/,
  homepage: 'https://flamecomics.xyz/',
  language: ['English'],
  category: 'manga',
  run() {
    const cdn = 'https://cdn.flamecomics.xyz/series';
    const json = JSON.parse(document.getElementById('__NEXT_DATA__')?.textContent ?? '');
    const { chapter, previous, next } = json.props.pageProps;
    const images = Object.keys(chapter.images).map(
      (i) => `${cdn}/${chapter.series_id}/${chapter.token}/${chapter.images[i].name}`,
    );
    return {
      title: `${chapter.title} ${chapter.chapter}`,
      series: `../${chapter.series_id}`,
      pages: images.length,
      prev: previous,
      next: next,
      listImages: images,
    };
  },
};
