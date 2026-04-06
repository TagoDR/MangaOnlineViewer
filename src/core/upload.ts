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
 * Handles universal file upload by detecting if the input contains a ZIP file, a folder, or multiple images.
 * @param {Event} evt - The change event from the file input.
 */
export async function handleUniversalUpload(evt: Event): Promise<void> {
  const target = evt.target as HTMLInputElement;
  const files = Array.from(target.files || []);

  if (files.length === 0) return;

  // Check if it's a single ZIP-like file
  if (files.length === 1 && /.(zip|cbz|cbr|7z|rar)$/i.test(files[0].name)) {
    await loadMangaFromZip(files[0]);
    return;
  }

  // Check if it's a collection of images (either from a folder or multiple selection)
  const imageFiles = files.filter(validFileType);
  if (imageFiles.length > 0) {
    const sortedImages = imageFiles.sort((a, b) =>
      orderFiles(a.webkitRelativePath || a.name, b.webkitRelativePath || b.name),
    );

    const title =
      imageFiles[0].webkitRelativePath.split('/')[0] ||
      (files.length > 1 ? 'Local Images' : imageFiles[0].name);

    displayUploadedFiles(title, sortedImages.map(URL.createObjectURL));
    return;
  }

  logScript('No compatible files found in upload.');
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
      document.querySelector('#file-input')?.addEventListener('change', handleUniversalUpload);
      logScript(`Waiting for local file upload`);
    }
    return true;
  }
  return false;
}
