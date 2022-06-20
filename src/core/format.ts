import { IManga } from '../types/IManga';

export default async function formatPage(manga: IManga, begin = 0) {
  const display = await import('../legacy/display');
  display.default(manga, begin);
}
