import { getAppStateValue, getSettingsValue } from '../../core/settings.ts';

export function scrollToElement(ele: HTMLElement | undefined | null) {
  if (getSettingsValue('viewMode').startsWith('Fluid')) {
    getAppStateValue('render')?.querySelector('#Chapter')
      ?.scroll(ele?.offsetLeft ?? 0, ele?.offsetTop ?? 0);
  } else {
    window?.scroll(ele?.offsetLeft ?? 0, ele?.offsetTop ?? 0);
  }
}

export function addEvent(ev: string, fn: (e: Event) => void) {
  return (elem: Element) => elem.addEventListener(ev, fn);
}

export function transformScrollToHorizontal(event: WheelEvent) {
  if (!(event as WheelEvent).deltaY) {
    return;
  }

  (event.currentTarget as Element).scrollLeft +=
    (event as WheelEvent).deltaY + (event as WheelEvent).deltaX;
  event.preventDefault();
}

export function transformScrollToHorizontalReverse(event: Event) {
  if (!(event as WheelEvent).deltaY) {
    return;
  }

  (event.currentTarget as Element).scrollLeft -=
    (event as WheelEvent).deltaY + (event as WheelEvent).deltaX;
  event.preventDefault();
}
