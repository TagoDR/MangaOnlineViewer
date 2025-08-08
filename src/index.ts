import { allowUpload } from './core/upload';
import display from './elements';
import localhost from './main/localhost';

const site = await localhost.run();
allowUpload();
document.querySelector('#test')?.addEventListener('click', () => display(site));
display(site);
