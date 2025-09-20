// == Localhost ====================================================================================
import { Category, type IManga, type ISite, Language } from '../types';
import { placeholder, randomPlaceholder } from '../utils/svgs';

const localhost: ISite = {
  name: 'Local Files',
  url: /(file:\/\/\/.+(index)?.html)/,
  homepage: '/index.html?raw=1',
  language: [Language.RAW],
  category: Category.MANGA,
  run(): IManga {
    const num: number = parseInt(/\d+/.exec(window.location.search)?.toString() ?? '5', 10);
    const comments = document.createElement('div');
    const lorem =
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
    const commentsEn = [
      lorem,
      `<span style="color: white; background-color: black;">${lorem.substring(0, 100)}</span>`,
      `<span style="color: black; background-color: white;">${lorem.substring(100, 200)}</span>`,
      `<b>${lorem.substring(200, 300)}</b>`,
      `<i>${lorem.substring(300, 400)}</i>`,
    ];
    comments.innerHTML = Array(100)
      .fill(0)
      .map(() => commentsEn[Math.floor(Math.random() * commentsEn.length)])
      .join('<br><br>');
    return {
      title: 'Placeholder Manga Loaded',
      series: '?reload',
      pages: num,
      begin: 1,
      prev: '?pages=50',
      next: '?pages=1',
      listImages: [
        placeholder(1970, 1400, '#2D1657'),
        placeholder(985, 1400, '#152C55'),
        placeholder(985, 1400, '#7A1420'),
        placeholder(985, 1400, '#0F5B30'),
        placeholder(1970, 1400, '#806D15'),
        ...Array(num).fill(0).map(randomPlaceholder),
      ],
      comments,
    };
  },
};
export default localhost;
