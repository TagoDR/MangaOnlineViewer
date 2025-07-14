import { allowUpload } from './core/upload';
import localhost from './main/localhost';
import display from './ui';

const site = await localhost.run();
allowUpload();
document.querySelector('#test')?.addEventListener('click', () => display(site));
