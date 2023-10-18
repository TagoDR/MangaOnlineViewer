import JSZip from 'jszip';
import { logScript } from '../utils/tampermonkey';
import formatPage from './viewer';

const getImageBlob = (content: ArrayBuffer) => {
  const buffer = new Uint8Array(content);
  const blob = new Blob([buffer.buffer]);
  return URL.createObjectURL(blob);
};

/**
 * Loads a zip file form disc and returns list of images
 * @param filePath
 */
export async function loadZipFile(filePath: string | File) {
  const zip = await JSZip.loadAsync(filePath);
  const files = zip.filter((_, item) => !item.dir);
  logScript('Files in zip:', zip.files);
  return Promise.all(files.map((file) => file.async('arraybuffer').then(getImageBlob)));
}

/**
 *  Display manga from zip file images
 * @param zipFile
 */
export async function loadMangaFromZip(zipFile: File | string) {
  const listImages = await loadZipFile(zipFile);
  formatPage({
    title: typeof zipFile === 'string' ? zipFile : zipFile.name,
    series: 'https://github.com/TagoDR/MangaOnlineViewer',
    pages: listImages.length,
    begin: 0,
    prev: '#',
    next: '#',
    listImages,
  });
}
export function allowUpload() {
  const ele = document.createElement('div');
  ele.innerHTML = `
        <p>Can read any zip file with images inside and diplay it like any of the supported sites</p>
        <label for='file'>Choose the local zip file:</label>
        <input type="file" id="file" name="file" class='btn' accept=".zip, .cbz, .cbr, .7z, .rar" value=''/><br />
        <p>Note : your browser will process the zip file, don't choose a file too big !</p>
    `;
  document.querySelector('#user-content-local-zip-files-cbz-cbr + p')?.replaceWith(ele);
  document.querySelector('#file')?.addEventListener('change', (evt) => {
    const input = evt.target as HTMLInputElement;
    if (input.files?.[0]) loadMangaFromZip(input.files[0]);
  });
  logScript(`Waiting for zip upload`);
}
