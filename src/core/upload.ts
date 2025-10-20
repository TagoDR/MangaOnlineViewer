import JSZip from 'jszip';
import localhost from '../main/localhost';
import { logScript } from '../utils/tampermonkey';
import { preparePage } from './main.ts';

const fileTypes = [
  'image/apng',
  'image/bmp',
  'image/gif',
  'image/jpeg',
  'image/pjpeg',
  'image/png',
  'image/svg+xml',
  'image/tiff',
  'image/webp',
  'image/x-icon',
];

const fileImageExt = /.(png|jpg|jpeg|gif|bmp|webp)$/i;

/**
 * Sorts file names in natural order (e.g., "file1.jpg", "file2.jpg", "file10.jpg").
 * @param {string} a - The first file name.
 * @param {string} b - The second file name.
 * @returns {number} A number indicating the sort order.
 */
const orderFiles = (a: string, b: string): number =>
  a.localeCompare(b, navigator.languages[0] || navigator.language, {
    numeric: true,
    ignorePunctuation: true,
  });

/**
 * Checks if a file is a valid image type based on its MIME type.
 * @param {File} file - The file to check.
 * @returns {boolean} True if the file is a valid image type, false otherwise.
 */
function validFileType(file: File): boolean {
  return fileTypes.includes(file.type);
}

/**
 * Creates a blob URL from an image's array buffer.
 * @param {ArrayBuffer} content - The array buffer of the image.
 * @returns {string} The blob URL representing the image.
 */
const getImageBlob = (content: ArrayBuffer): string => {
  const buffer = new Uint8Array(content);
  const blob = new Blob([buffer.buffer]);
  return URL.createObjectURL(blob);
};

/**
 * Loads a zip file and extracts all image files, returning them as an array of blob URLs.
 * @param {string | File} filePath - The path to the zip file or the zip file object itself.
 * @returns {Promise<string[]>} A promise that resolves with an array of image blob URLs.
 */
export async function loadZipFile(filePath: string | File): Promise<string[]> {
  const zip = await JSZip.loadAsync(filePath);
  const files = zip
    .filter((_, file) => !file.dir && fileImageExt.test(file.name))
    .sort((a, b) => orderFiles(a.name, b.name));
  logScript('Files in zip:', zip.files);
  return Promise.all(files.map(file => file.async('arraybuffer').then(getImageBlob)));
}

/**
 * Renders the uploaded images in the viewer.
 * @param {string} title - The title for the viewer.
 * @param {string[]} listImages - An array of image blob URLs to display.
 */
function displayUploadedFiles(title: string, listImages: string[]): void {
  preparePage([
    { ...localhost, start: 'always' },
    {
      title,
      series: '?reload',
      pages: listImages.length,
      begin: 1,
      prev: '#',
      next: '#',
      lazy: false,
      listImages,
    },
  ]).then(() => logScript('Page loaded'));
}

/**
 * Loads and displays a manga from a zip file.
 * @param {File | string} zipFile - The zip file to load, either as a File object or a path.
 * @returns {Promise<void>}
 */
export async function loadMangaFromZip(zipFile: File | string): Promise<void> {
  const listImages = await loadZipFile(zipFile);
  displayUploadedFiles(typeof zipFile === 'string' ? zipFile : zipFile.name, listImages);
}

/**
 * Handles the file input change event for loading local image files.
 * This function uses the non-standard 'webkitRelativePath' property to get the relative path of files from a directory input.
 * While non-standard, it is supported by all major modern browsers and there is no standard alternative that provides the same functionality.
 * @param {Event} evt - The file input change event.
 */
function openFileImages(evt: Event): void {
  const input = evt.target as HTMLInputElement;
  const files = Array.from(input.files as Iterable<File>)
    .filter(validFileType)
    .sort((a, b) => orderFiles(a.webkitRelativePath || a.name, b.webkitRelativePath || b.name));
  logScript(
    'Local Files: ',
    files,
    files.map(f => f.webkitRelativePath || f.name),
  );
  if (input.files?.[0]) {
    displayUploadedFiles(
      input.files[0].webkitRelativePath.split('/')[0] || 'Local Images',
      files.map(URL.createObjectURL),
    );
  }
}

/**
 * Checks if the current page is the local testing environment and sets up file upload handlers.
 * This is used for local development and testing of the viewer with local files.
 * @returns {boolean} True if the upload functionality is enabled, false otherwise.
 */
export function allowUpload(): boolean {
  if (localhost.url.test(window.location.href)) {
    if (document.querySelector('#MangaOnlineViewer, #LocalTest')) {
      document.querySelector('#LocalTest')?.setAttribute('style', 'display:none');
      document.querySelector('#file')?.addEventListener('change', evt => {
        const input = evt.target as HTMLInputElement;
        if (input.files?.[0]) loadMangaFromZip(input.files[0]);
      });
      document.querySelector('#folder')?.addEventListener('change', openFileImages);
      document.querySelector('#images')?.addEventListener('change', openFileImages);
      logScript(`Waiting for zip/images upload`);
    }
    return true;
  }
  return false;
}
