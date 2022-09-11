export function scrollToElement(ele: HTMLElement | undefined | null) {
  window.scroll(0, ele?.offsetTop || 0);
}
