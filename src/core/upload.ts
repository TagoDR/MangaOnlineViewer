import JSZip from 'jszip';
import { logScript } from '../utils/tampermonkey';
import formatPage from './viewer';

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

function validFileType(file: File) {
  return fileTypes.includes(file.type);
}
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
    begin: 1,
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
        <label for='file'><b>OR</b> Select a folder with images inside:</label>
        <input type="file" id="folder" name="folder" class='btn' webkitdirectory mozdirectory msdirectory odirectory directory value='' /><br />
        <label for='file'><b>OR</b> Select images:</label>
        <input type="file" id="images" name="images" class='btn' accept="image/*" multiple value='' /><br />
    `;
  document.querySelector('#user-content-local-files-zip-cbz-cbr + p')?.replaceWith(ele);
  document.querySelector('#file')?.addEventListener('change', (evt) => {
    const input = evt.target as HTMLInputElement;
    if (input.files?.[0]) loadMangaFromZip(input.files[0]);
  });
  document.querySelectorAll('#folder, #images')?.forEach((element) =>
    element.addEventListener('change', (evt) => {
      const input = evt.target as HTMLInputElement;
      const files = Array.from(input.files as Iterable<File>)
        .filter(validFileType)
        .map(URL.createObjectURL);
      if (input.files?.[0])
        formatPage({
          title: input.files[0].webkitRelativePath.split('/')[0],
          series: 'https://github.com/TagoDR/MangaOnlineViewer',
          pages: files.length,
          begin: 1,
          prev: '#',
          next: '#',
          listImages: files,
        });
    }),
  );
  logScript(`Waiting for zip upload`);
}
