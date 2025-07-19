import { createRoot } from 'react-dom/client';
import type { IManga } from '../types';
import { loadManga } from '../ui/page';
import head from '../ui/reader';
import App from './App.tsx';

export default function loadReader(manga: IManga) {
  console.warn('Using React');
  document.head.innerHTML = head(manga);
  document.body.innerHTML = "<div id='MangaOnlineViewer'></div>";
  createRoot(document.body).render(<App manga={manga} />);
  setTimeout(() => {
    // events();
    loadManga(manga, 0);
  }, 1000);
}
