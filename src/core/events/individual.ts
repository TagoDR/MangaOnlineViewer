import { reloadImage } from '../page';

function individual() {
  // Reload Page
  function buttonReloadPage(elem: Element) {
    return elem.addEventListener('click', (event) => {
      const img: HTMLImageElement = (
        event.currentTarget as HTMLElement
      ).parentElement?.parentElement?.querySelector('.PageImg')!;
      reloadImage(img);
    });
  }

  document.querySelectorAll('.Reload')?.forEach(buttonReloadPage);

  // Hide
  function buttonHidePage(elem: Element): void {
    elem.addEventListener('click', (event) => {
      const img: HTMLElement = (event.currentTarget as HTMLElement).parentElement?.parentElement!;
      img.classList.toggle('hide');
    });
  }

  document.querySelectorAll('.Hide')?.forEach(buttonHidePage);
}

export default individual;
