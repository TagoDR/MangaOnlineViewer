export function scrollToElement(ele: HTMLElement | undefined | null) {
  const chapter = document.querySelector('#Chapter');
  if (chapter?.classList.contains('FluidLTR') || chapter?.classList.contains('FluidRTL')) {
    chapter?.scroll(ele?.offsetLeft ?? 0, ele?.offsetTop ?? 0);
  } else {
    window?.scroll(ele?.offsetLeft ?? 0, ele?.offsetTop ?? 0);
  }
}

export function addEvent(ev: string, fn: (e: Event) => void) {
  return (elem: Element) => elem.addEventListener(ev, fn);
}

export function transformScrollToHorizontal(this: HTMLElement, event: Event) {
  if (!(event as WheelEvent).deltaY) {
    return;
  }

  (event.currentTarget as Element).scrollLeft +=
    (event as WheelEvent).deltaY + (event as WheelEvent).deltaX;
  event.preventDefault();
}

export function transformScrollToHorizontalReverse(this: HTMLElement, event: Event) {
  if (!(event as WheelEvent).deltaY) {
    return;
  }

  (event.currentTarget as Element).scrollLeft -=
    (event as WheelEvent).deltaY + (event as WheelEvent).deltaX;
  event.preventDefault();
}
