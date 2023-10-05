export default function scrollToElement(ele: HTMLElement | undefined) {
  window.scroll(0, ele?.offsetTop ?? 0);
}
