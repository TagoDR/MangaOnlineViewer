// == Localhost =====================================================================================
import { placeholder, randomPlaceholder } from '../utils/svgs';

export default {
  name: 'Localhost',
  url: /(file:\/\/\/.+index.html)/,
  homepage: 'http://127.0.0.1:8080/index.html',
  language: ['Portuguese'],
  category: 'manga',
  run: () => ({
    title: 'Placeholder Manga Loaded',
    series: '#Counters',
    pages: parseInt(window.location.search.match(/\d+/)?.toString() || '0', 10) || 5,
    begin: 0,
    prev: '?pages=50',
    next: '?pages=1',
    listImages: [
      placeholder(985, 1400, '#152C55'),
      placeholder(1970, 1400, '#2D1657'),
      placeholder(985, 1400, '#7A1420'),
      placeholder(985, 1400, '#0F5B30'),
      placeholder(1970, 1400, '#806D15'),
      ...Array(45).fill(0).map(randomPlaceholder),
    ],
  }),
};
