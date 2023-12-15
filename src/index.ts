import localhost from './main/localhost';
import display from './ui';
import { allowUpload } from './core/upload';

allowUpload();
document.querySelector('#test')?.addEventListener('click', () => display(localhost.run()));
const timeout = setTimeout(() => {
  display(localhost.run());
}, 2000);
document.addEventListener('mousemove', () => clearTimeout(timeout), { once: true });
