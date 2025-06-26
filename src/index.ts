import { allowUpload } from './core/upload';
import localhost from './main/localhost';
import render from './svelte';
import type { IManga } from './types';
import display from './ui';

const site = (await localhost.run()) as IManga;
allowUpload();
document.querySelector('#test')?.addEventListener('click', () => display(site));
document.querySelector('#testFramework')?.addEventListener('click', () => render(site));
render(site);
