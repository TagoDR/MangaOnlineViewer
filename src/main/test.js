// == Test =========================================================================================
export default {
  name: 'Test',
  url: /https?:\/\/(www.)?blank.org\/(\?[0-9]+)?/,
  homepage: 'http://blank.org/?5',
  language: ['English'],
  category: 'test',
  run() {
    const num = parseInt(W.location.search.replace('?', ''), 10) || 5;
    return {
      title: 'Test Page',
      series: 'http://blank.org/?5',
      quant: num,
      prev: `?${num - 1}`,
      next: `?${num + 1}`,
      listImages: [...Array(num).keys()].map((i) => `http://lorempixel.com/900/1300/cats/${i}`),
    };
  },
};
