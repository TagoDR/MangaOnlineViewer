import JSZip from 'jszip';
import localhost from '../main/localhost';
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

const fileImageExt = /.(png|jpg|jpeg|gif|bmp|webp)$/i;

const orderFiles = (a: string, b: string) =>
  a.localeCompare(b, navigator.languages[0] || navigator.language, {
    numeric: true,
    ignorePunctuation: true,
  });

function validFileType(file: File) {
  return fileTypes.includes(file.type);
}

const getImageBlob = (content: ArrayBuffer) => {
  const buffer = new Uint8Array(content);
  const blob = new Blob([buffer.buffer]);
  return URL.createObjectURL(blob);
};

export async function loadZipFile(filePath: string | File) {
  const zip = await JSZip.loadAsync(filePath);
  const files = zip
    .filter((_, file) => !file.dir && fileImageExt.test(file.name))
    .sort((a, b) => orderFiles(a.name, b.name));
  logScript('Files in zip:', zip.files);
  return Promise.all(files.map((file) => file.async('arraybuffer').then(getImageBlob)));
}

function displayUploadedFiles(title: string, listImages: string[]) {
  formatPage({
    title,
    series: '?reload',
    pages: listImages.length,
    begin: 1,
    prev: '#',
    next: '#',
    lazy: false,
    listImages,
  }).then(() => logScript('Page loaded'));
}

export async function loadMangaFromZip(zipFile: File | string) {
  const listImages = await loadZipFile(zipFile);
  displayUploadedFiles(typeof zipFile === 'string' ? zipFile : zipFile.name, listImages);
}

function openFileImages(evt: Event) {
  const input = evt.target as HTMLInputElement;
  const files = Array.from(input.files as Iterable<File>)
    .filter(validFileType)
    .sort((a, b) => orderFiles(a.webkitRelativePath || a.name, b.webkitRelativePath || b.name));
  logScript(
    'Local Files: ',
    files,
    files.map((f) => f.webkitRelativePath || f.name),
  );
  if (input.files?.[0]) {
    displayUploadedFiles(
      input.files[0].webkitRelativePath.split('/')[0] || 'Local Images',
      files.map(URL.createObjectURL),
    );
  }
}

export function allowUpload() {
  if (localhost.url.test(window.location.href)) {
    if (document.querySelector('#MangaOnlineViewer, #LocalTest')) {
      document.querySelector('#LocalTest')?.setAttribute('style', 'display:none');
      document.querySelector('#file')?.addEventListener('change', (evt) => {
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
