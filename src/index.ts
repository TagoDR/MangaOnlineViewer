import { allowUpload } from './core/upload';
import localhost from './main/localhost';
import render from './react';
import type { IManga } from './types';
import display from './ui';

const site = localhost.run() as IManga;
allowUpload();
document.querySelector('#test')?.addEventListener('click', () => display(site));
document.querySelector('#testFramework')?.addEventListener('click', () => render(site));

export const framework = true;
// export const framework = ['dev', 'development'].includes(import.meta.env.MODE);

if (framework) render(site);
else display(site);
