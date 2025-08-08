import { saveSettingsValue } from '../../core/settings';
import type { ViewMode } from '../../types';

export function updateViewMode(mode: ViewMode) {
  return () => {
    saveSettingsValue('viewMode', mode);
    if (mode.startsWith('Fluid')) saveSettingsValue('zoomMode', 'height');
  };
}

export function changeViewMode(event: Event) {
  const mode = (event.currentTarget as HTMLInputElement).value as ViewMode;
  updateViewMode(mode)();
}

export function transformScrollToHorizontal(event: WheelEvent) {
  if (!(event as WheelEvent).deltaY) return;

  (event.currentTarget as Element).scrollLeft -=
    (event as WheelEvent).deltaY + (event as WheelEvent).deltaX;
  event.preventDefault();
}

export function transformScrollToHorizontalReverse(event: Event) {
  if (!(event as WheelEvent).deltaY) return;

  (event.currentTarget as Element).scrollLeft +=
    (event as WheelEvent).deltaY + (event as WheelEvent).deltaX;
  event.preventDefault();
}
