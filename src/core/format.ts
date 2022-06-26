import { IManga } from '../types/IManga';
import display from './display';

export default async function formatPage(manga: IManga, begin = 0) {
  display(manga, begin);
}
