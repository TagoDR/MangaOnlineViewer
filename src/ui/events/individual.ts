import { reloadImage } from '../page';

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
