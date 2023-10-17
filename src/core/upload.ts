import JSZip from 'jszip';
import display from '../ui';
import { logScript } from '../utils/tampermonkey';

const getImageBlob = (content: ArrayBuffer) => {
  const buffer = new Uint8Array(content);
  const blob = new Blob([buffer.buffer]);
  return URL.createObjectURL(blob);
};

/**
 * Loads a zip file form disc and returns list of images
 * @param filePath
 */
async function loadZipFile(filePath: string | File) {
  const zip = await JSZip.loadAsync(filePath);
  const files = zip.filter((_, item) => !item.dir);
  logScript('Files in zip:', zip.files);
  return Promise.all(files.map((file) => file.async('arraybuffer').then(getImageBlob)));
}
/**
 *  Display manga from zip file images
 * @param zipFile
 */
async function displayFromZIP(zipFile: File | string) {
  const listImages = await loadZipFile(zipFile);
  display({
    title: typeof zipFile === 'string' ? zipFile : zipFile.name,
    series: 'https://github.com/TagoDR/MangaOnlineViewer',
    pages: listImages.length,
    begin: 0,
    prev: '#',
    next: '#',
    listImages,
  });
}

export default function setupLocalFileReader() {
  document.querySelector('#file')?.addEventListener('change', (evt) => {
    const input = evt.target as HTMLInputElement;
    if (input.files?.[0]) displayFromZIP(input.files[0]);
  });
}
