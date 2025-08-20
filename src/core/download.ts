import { saveAs } from 'file-saver';
import JSZip from 'jszip';
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
 * Generates a zip file from the images stored in the application state and initiates a download.
 * The zip file is named after the manga title.
 * @returns {Promise<void>} A promise that resolves when the zip generation and download process is initiated.
 */
async function generateZip(): Promise<void> {
  setAppStateValue('download', 'working');
  const zip = new JSZip();
  // Read images from app state; use Blob only
  const images = getAppStateValue('images') ?? {};
  const manga = getAppStateValue('manga');
  const digits = Math.floor(Math.log10(manga?.pages ?? 1)) + 1;

  Object.entries(images)
    .sort((a, b) => Number(a[0]) - Number(b[0]))
    .forEach(([key, page]) => {
      if (!page || !page.blob) return;
      const blob = page.blob;
      const ext = extFromMime(blob.type);
      const name = `Page-${Number(key).toString().padStart(digits, '0')}.${ext}`;

      logScript(`${name} Added to Zip from Blob`);
      zip.file(name, blob, {
        createFolders: true,
        compression: 'DEFLATE',
      });
    });

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
