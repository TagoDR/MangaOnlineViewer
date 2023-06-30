import { IManga } from '../types/IManga';
import head from './reader';
import body from './components/App';
import { logScript } from '../utils/tampermonkey';
import events from './events';
import { loadManga } from './page';
import { isBackgroundColorDark } from '../utils/colors';

export default async function display(manga: IManga) {
  if (manga.before !== undefined) {
    await manga.before(manga.begin);
  }
  const comments = document.querySelector('#disqus_thread, #fb-comments');
  const commentsBackgroundColorDark = isBackgroundColorDark(comments ?? document.body);
  [document.documentElement, document.head, document.body].forEach((element: HTMLElement) => {
    element.getAttributeNames().forEach((attr) => element.removeAttribute(attr));
  });
  document.head.innerHTML = head(manga);
  document.body.innerHTML = body(manga, manga.begin);
  if (comments) {
    const area = document.getElementById('CommentsArea');
    area?.classList.add(commentsBackgroundColorDark ? 'dark' : 'light');
    area?.append(comments);
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
