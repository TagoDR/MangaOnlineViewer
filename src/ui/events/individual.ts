import { reloadImage } from '../page.ts';

function individual() {
  // Reload Page
  function buttonReloadPage(elem: Element) {
    elem.addEventListener('click', (event) => {
      const img = (event.currentTarget as HTMLElement).parentElement?.parentElement?.querySelector(
        '.PageImg',
      ) as HTMLImageElement;
      reloadImage(img);
    });
  }

  document.querySelectorAll('.Reload')?.forEach(buttonReloadPage);

  // Hide
  function buttonHidePage(elem: Element): void {
    elem.addEventListener('click', (event) => {
      const img = (event.currentTarget as HTMLElement).parentElement?.parentElement as HTMLElement;
      img.classList.toggle('hide');
    });
  }

  document.querySelectorAll('.Hide')?.forEach(buttonHidePage);
}

export default individual;
