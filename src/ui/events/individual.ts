import { reloadImage } from '../page';

export function buttonReloadPage(elem: Element) {
  elem.addEventListener('click', (event) => {
    const img = (event.currentTarget as HTMLElement).parentElement?.parentElement?.querySelector(
      '.PageImg',
    ) as HTMLImageElement;
    reloadImage(img);
  });
}
export function buttonHidePage(elem: Element): void {
  elem.addEventListener('click', (event) => {
    const img = (event.currentTarget as HTMLElement).parentElement?.parentElement as HTMLElement;
    img.classList.toggle('hide');
  });
}
function individual() {
  document.querySelectorAll('.Reload')?.forEach(buttonReloadPage);
  document.querySelectorAll('.Hide')?.forEach(buttonHidePage);
}

export default individual;
