import {
  getAppStateValue,
  getSettingsValue,
  navbarSize,
  setAppStateValue,
} from '../../core/settings';

/**
 * Event handler to zoom in on an individual page by a percentage step.
 * @param {Event} event - The click event from the zoom-in button.
 */
export function buttonZoomIn(event: Event) {
  const button = event.currentTarget as HTMLButtonElement;
  const index = parseInt(button.value, 10);
  const images = getAppStateValue('images');
  const img = getAppStateValue('images')?.[index];
  if (img?.naturalWidth) {
    setAppStateValue('images', {
      ...images,
      [index]: {
        ...img,
        width: (img?.width || img?.naturalWidth) * (1 + getSettingsValue('zoomStep') / 100),
        height: undefined,
      },
    });
  }
}

/**
 * Event handler to zoom out on an individual page by a percentage step.
 * @param {Event} event - The click event from the zoom-out button.
 */
export function buttonZoomOut(event: Event) {
  const button = event.currentTarget as HTMLButtonElement;
  const index = parseInt(button.value, 10);
  const images = getAppStateValue('images');
  const img = getAppStateValue('images')?.[index];
  if (img?.naturalWidth) {
    setAppStateValue('images', {
      ...images,
      [index]: {
        ...img,
        width: (img?.width || img?.naturalWidth) * (1 - getSettingsValue('zoomStep') / 100),
        height: undefined,
      },
    });
  }
}

/**
 * Event handler to restore the zoom of an individual page to 100%.
 * @param {Event} event - The click event from the restore zoom button.
 */
export function buttonRestoreZoom(event: Event) {
  const button = event.currentTarget as HTMLButtonElement;
  const index = parseInt(button.value, 10);
  const images = getAppStateValue('images');
  const img = getAppStateValue('images')?.[index];
  if (img) {
    setAppStateValue('images', {
      ...images,
      [index]: {
        ...img,
        width: undefined,
        height: undefined,
      },
    });
  }
}

/**
 * Event handler to fit an individual page to the screen width.
 * @param {Event} event - The click event from the fit-to-width button.
 */
export function buttonZoomWidth(event: Event) {
  const button = event.currentTarget as HTMLButtonElement;
  const index = parseInt(button.value, 10);
  const images = getAppStateValue('images');
  const img = getAppStateValue('images')?.[index];
  if (img) {
    setAppStateValue('images', {
      ...images,
      [index]: {
        ...img,
        width:
          window.innerWidth +
          (getSettingsValue('navbar') === 'left' || getSettingsValue('navbar') === 'right'
            ? -navbarSize
            : 0),
        height: undefined,
      },
    });
  }
}

/**
 * Event handler to fit an individual page to the screen height.
 * @param {Event} event - The click event from the fit-to-height button.
 */
export function buttonZoomHeight(event: Event): void {
  const button = event.currentTarget as HTMLButtonElement;
  const index = parseInt(button.value, 10);
  const images = getAppStateValue('images');
  const img = getAppStateValue('images')?.[index];
  if (img) {
    setAppStateValue('images', {
      ...images,
      [index]: {
        ...img,
        width: undefined,
        height: window.innerHeight + (getSettingsValue('navbar') === 'bottom' ? -navbarSize : 0),
      },
    });
  }
}
