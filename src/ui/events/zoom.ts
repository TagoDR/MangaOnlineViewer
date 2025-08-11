import { getSettingsValue, saveSettingsValue, setSettingsValue } from '../../core/settings';
import type { ZoomMode } from '../../types';
import { logScript } from '../../utils/tampermonkey.ts';

// After pages load apply default Zoom
export function applyZoom(
  mode: ZoomMode = getSettingsValue('zoomMode'),
  value = getSettingsValue('zoomValue'),
  index?: number,
) {
  logScript('Zoom', mode, value, index);
  setSettingsValue('zoomMode', mode);
  setSettingsValue('zoomValue', value);
  // const images = { ...getAppStateValue('images') };
  // const manga = getAppStateValue('manga');
  // if (!manga) return;
  // for (let i = manga.begin ?? 1; i < (manga?.pages ?? 1); i++) {
  //   if (index && i !== index) continue;
  //   const img = images?.[i];
  //   if (!img || !img.naturalWidth) return;
  //   if (mode === 'width') {
  //     // Fit width
  //     img.width = `${window.innerWidth}px`; // Or maybe `100vw`
  //     img.height = 'auto';
  //   } else if (mode === 'height') {
  //     // Fit height
  //     const nextHeight = window.innerHeight + (getSettingsValue('navbar') === 'bottom' ? -29 : 0);
  //     img.height = `${nextHeight}px`; // Or maybe `100vh`
  //     img.minWidth = 'unset';
  //     img.width = 'auto';
  //   } else if (mode === 'percent') {
  //     if (value === 100) {
  //       img.width = 'auto';
  //       img.height = 'auto';
  //     } else {
  //       img.width = `${img.naturalWidth * (value / 100)}px`;
  //       img.height = 'auto';
  //     }
  //     img.minWidth = `${getSettingsValue('minZoom')}vw`;
  //   }
  // }
  // setAppStateValue('images', images);
}

export function changeGlobalZoom(mode: ZoomMode, value = getSettingsValue('zoomValue')) {
  return () => {
    setSettingsValue('zoomMode', mode);
    setSettingsValue('zoomValue', value);
    applyZoom(mode, value);
  };
}

export function changeZoomByStep(sign = 1) {
  return () => {
    const ratio = getSettingsValue('zoomValue') + sign * getSettingsValue('zoomStep');
    setSettingsValue('zoomValue', ratio);
    applyZoom('percent', ratio);
  };
}

export function changeDefaultZoomMode(event: Event) {
  const target = (event.currentTarget as HTMLInputElement).value as ZoomMode;
  saveSettingsValue('zoomMode', target);
  applyZoom(target);
}

export function changeDefaultZoomValue(event: Event) {
  const target = parseInt((event.currentTarget as HTMLInputElement).value, 10);
  saveSettingsValue('zoomValue', target);
  applyZoom('percent', target);
}

export function changeZoom(event: Event) {
  const target = parseInt((event.currentTarget as HTMLInputElement).value, 10);
  applyZoom('percent', target);
}
