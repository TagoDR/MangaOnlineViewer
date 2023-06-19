import { IManga } from '../types/IManga';
import head from './reader';
import body from './components/App';
import { logScript } from '../utils/tampermonkey';
import events from './events';
import { loadManga } from './page';

export default async function display(manga: IManga) {
  if (manga.before !== undefined) {
    await manga.before(manga.begin);
  }
  [document.documentElement, document.head, document.body].forEach((element: HTMLElement) => {
    element.getAttributeNames().forEach((attr) => element.removeAttribute(attr));
  });
  const comments = document.querySelector('#disqus_thread, #fb-comments');
  document.head.innerHTML = head(manga);
  document.body.innerHTML = body(manga, manga.begin);
  if (comments) {
    document.getElementById('CommentsArea')?.append(comments);
    document.getElementById('CommentsPainel')?.classList.remove('hide');
  }
  logScript('Rebuilding Site');
  setTimeout(() => {
    try {
      events();
      setTimeout(() => {
        window.scrollTo(0, 0);
        loadManga(manga, manga.begin);
      }, 50);
    } catch (e) {
      logScript(e);
    }
  }, 50);
}
