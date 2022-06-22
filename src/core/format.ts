import { IManga } from '../types/IManga';

export default async function formatPage(manga: IManga, begin = 0) {
  const display = await import('./display');
  display.default(manga, begin);
}
