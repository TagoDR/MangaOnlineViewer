import { saveAs } from 'file-saver';
import JSZip from 'jszip';
import type { Page } from '../types';
import { logScript } from '../utils/tampermonkey';
import { getAppStateValue, setAppStateValue } from './settings.ts';

/**
 * Gets the file extension from a MIME type.
 * @param {string} [mime] - The MIME type of the file.
 * @returns {string} The corresponding file extension (e.g., 'jpg', 'png'). Defaults to 'png'.
 */
function extFromMime(mime?: string): string {
  switch (mime) {
    case 'image/jpeg':
      return 'jpg';
    case 'image/png':
      return 'png';
    case 'image/webp':
      return 'webp';
    case 'image/gif':
      return 'gif';
    case 'image/bmp':
      return 'bmp';
    default:
      return 'png';
  }
}

/**
 * Fetches an image from its URL and returns it as a Blob.
 * @param page
 */
async function getBlobFromFetch(page: Page): Promise<Blob | null> {
  if (!page.src) return null;
  try {
    const response = await fetch(page.src);
    if (response.ok) {
      logScript(`Got blob for page ${page.src} from fetch`);
      return await response.blob();
    }
  } catch (error) {
    logScript(`Failed to get blob for page ${page.src} from fetch`, error);
  }
  return null;
}

/**
 * Draws an image onto a canvas and returns it as a Blob.
 * @param page
 */
async function getBlobFromCanvas(page: Page): Promise<Blob | null> {
  const img = page.ref?.value;
  if (!img) return null;
  try {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if (ctx) {
      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;
      ctx.drawImage(img, 0, 0);
      return await new Promise(resolve => {
        canvas.toBlob(
          blob => {
            if (blob) {
              logScript(`Got blob for page ${page.src} from canvas`);
            }
            resolve(blob);
          },
          'image/png',
          1,
        );
      });
    }
  } catch (e) {
    logScript(`Failed to get blob for page ${page.src} from canvas`, e);
  }
  return null;
}

/**
 * Tries to get the image blob from cache, fetch or canvas.
 * @param page
 */
async function getImageBlob(page: Page): Promise<Blob | null> {
  if (page.blob) {
    logScript(`Got blob for page ${page.src} from cache`);
    return page.blob;
  }

  const blob = await getBlobFromFetch(page);
  if (blob) {
    return blob;
  }

  const canvasBlob = await getBlobFromCanvas(page);
  if (canvasBlob) {
    return canvasBlob;
  }

  logScript(`Failed to get blob for page ${page.src}`);
  return null;
}

/**
 * Generates a zip file from the images stored in the application state and initiates a download.
 * The zip file is named after the manga title.
 * @returns {Promise<void>} A promise that resolves when the zip generation and download process is initiated.
 */
async function generateZip(): Promise<void> {
  setAppStateValue('download', 'working');
  const zip = new JSZip();
  const images = getAppStateValue('images') ?? {};
  const manga = getAppStateValue('manga');
  const digits = Math.floor(Math.log10(manga?.pages ?? 1)) + 1;
  const imageEntries = Object.entries(images).sort((a, b) => Number(a[0]) - Number(b[0]));
  for (const [key, page] of imageEntries) {
    // eslint-disable-next-line no-await-in-loop
    const blob = await getImageBlob(page);
    if (blob) {
      const ext = extFromMime(blob.type);
      const name = `Page-${Number(key).toString().padStart(digits, '0')}.${ext}`;
      logScript(`${name} Added to Zip from Blob`);
      zip.file(name, blob, {
        createFolders: true,
        compression: 'DEFLATE',
      });
    }
  }

  logScript('Generating Zip');
  zip
    .generateAsync({ type: 'blob' })
    .then(content => {
      logScript('Download Ready');
      const zipName = `${manga?.title ?? document.title}.zip`;
      saveAs(content, zipName, { autoBom: false });
    })
    .catch(err => {
      logScript('Error generating zip', err);
    })
    .finally(() => {
      setAppStateValue('download', undefined);
    });
}

export default generateZip;
