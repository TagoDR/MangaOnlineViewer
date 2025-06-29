import { allowUpload } from './core/upload';
import localhost from './main/localhost';
import display from './ui';

allowUpload();
// document.querySelector('#test')?.addEventListener('click', () => display(localhost.run()));
// const timeout = setTimeout(() => {
display(await localhost.run());
// }, 2000);
// document.addEventListener('mousemove', () => clearTimeout(timeout), { once: true });
