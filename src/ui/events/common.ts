export function scrollToElement(ele: HTMLElement | undefined) {
  window.scroll(0, ele?.offsetTop ?? 0);
}

export function addEvent(ev: string, fn: (e: Event) => void) {
  return (elem: Element) => elem.addEventListener(ev, fn);
}
