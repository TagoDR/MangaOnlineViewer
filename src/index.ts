import localhost from './main/localhost';
import display from './ui';
//import { loadMangaFromZip } from './core/upload';

// document.querySelector('#file')?.addEventListener('change', (evt) => {
//   const input = evt.target as HTMLInputElement;
//   if (input.files?.[0]) loadMangaFromZip(input.files[0]);
// });
// document.querySelector('#test')?.addEventListener('click', () =>
  display(localhost.run())
// );
