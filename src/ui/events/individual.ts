import { reloadImage } from '../page';
import { addEvent } from './common';

export function buttonReloadPage(event: Event): void {
  const img = (event.currentTarget as HTMLElement).parentElement?.parentElement?.querySelector(
    '.PageImg',
  ) as HTMLImageElement;
  reloadImage(img);
}
export function buttonHidePage(event: Event): void {
  const img = (event.currentTarget as HTMLElement).parentElement?.parentElement as HTMLElement;
  img.classList.toggle('hide');
}
function individual() {
  document.querySelectorAll('.Reload')?.forEach(addEvent('click', buttonReloadPage));
  document.querySelectorAll('.Hide')?.forEach(addEvent('click', buttonHidePage));
}

export default individual;
