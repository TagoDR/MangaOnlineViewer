import { blobToDataURL } from 'blob-util';
import { logScript } from './tampermonkey';
import { isBase64ImageUrl, isObjectURL } from './urls';

type LazyLoadOptions = {
  root?: Element | Document | null;
  rootMargin?: string;
  threshold?: number;
  fetchOptions?: RequestInit;
};

/**
 * Modern lazy loading using Intersection Observer API
 * Works with Web Components and Shadow DOM
 */
function lazyLoad(
  element: HTMLImageElement,
  callback: (element: HTMLImageElement) => void | Promise<void>,
  fetchOptions?: RequestInit,
  options: LazyLoadOptions = {},
): void {
  const { root = null, rootMargin = '200px', threshold = 0.01 } = options;

  // Create an intersection observer for this specific element
  const observer = new IntersectionObserver(
    async entries => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;

          try {
            // Get the data-src attribute
            let src = img.getAttribute('data-src') ?? '';

            if (src) {
              // Convert to blob URL if needed
              if (!isObjectURL(src) && !isBase64ImageUrl(src) && fetchOptions) {
                src = await fetch(src, fetchOptions)
                  .then(resp => resp.blob())
                  .then(blob => blobToDataURL(blob));
              }

              // Set the actual src
              img.setAttribute('src', src);

              // Call the callback
              await callback(img);

              logScript('Lazy loaded image:', src);
            }
          } catch (error) {
            logScript('Error lazy loading image:', error);
            // Mark as broken
            img.classList.add('imgBroken');
          }

          // Stop observing this element
          observer.unobserve(img);
          observer.disconnect();
        }
      }
    },
    {
      root,
      rootMargin,
      threshold,
    },
  );

  // Start observing the element
  observer.observe(element);

  // Store the observer on the element for cleanup if needed
  (element as any)._lazyObserver = observer;
}

/**
 * Cleanup function to disconnect observers (useful for component cleanup)
 */
export function cleanupLazyLoad(element: HTMLImageElement): void {
  const observer = (element as any)._lazyObserver as IntersectionObserver;
  if (observer) {
    observer.disconnect();
    delete (element as any)._lazyObserver;
  }
}

/**
 * Enhanced lazy load that automatically detects the correct scroll container
 * for different view modes in the manga reader
 */
export function lazyLoadWithContext(
  element: HTMLImageElement,
  callback: (element: HTMLImageElement) => void | Promise<void>,
  fetchOptions?: RequestInit,
): void {
  // Find the appropriate scroll container
  let root: Element | null = null;

  // Look for the reader component
  const readerElement = element.closest('[id="Chapter"]') as HTMLElement;

  if (readerElement) {
    // Determine view mode from class or attribute
    const isFluid =
      readerElement.classList.contains('FluidLTR') || readerElement.classList.contains('FluidRTL');

    if (isFluid) {
      // In fluid mode, the reader itself is the scroll container
      root = readerElement;
    } else {
      // In vertical modes, look for the parent scroll container
      root = readerElement.parentElement;
    }
  }

  lazyLoad(element, callback, fetchOptions, {
    root,
    rootMargin: '500px', // Load images when they're 500px away from viewport
    threshold: 0.01,
  });
}

export default lazyLoad;
