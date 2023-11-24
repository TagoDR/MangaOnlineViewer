import JSZip from 'jszip';
import { html } from '../utils/code-tag';
import { logScript } from '../utils/tampermonkey';
import formatPage from './viewer';
import localhost from '../main/localhost';

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
  }).then(() => logScript('Page loaded'));
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
    formatPage({
      title: input.files[0].webkitRelativePath.split('/')[0] || 'Local Images',
      series: 'https://github.com/TagoDR/MangaOnlineViewer',
      pages: files.length,
      begin: 1,
      prev: '#',
      next: '#',
      listImages: files.map(URL.createObjectURL),
    }).then(() => logScript('Page loaded'));
  }
}
const browserMessage = html`
  <h3>For <i style="color:crimson">Chrome</i> and similar browsers</h3>
  <p>
    Save this file
    <a href="https://github.com/TagoDR/MangaOnlineViewer/blob/master/index.html?raw=1">
      index.html
    </a>
    , then open it in the browser, and you will see the options below.
  </p>
  <h3>Below only works with <i style="color:orange">Firefox</i>!</h3>
`;
const filesSelectors = html`
  <p>
    <b>Attention</b>: You will need to "Allow access to file URLs" for tampermonkey, just go to the
    browser extension settings.
  </p>
  <p>Can read any zip file with images inside and diplay it like any of the supported sites</p>
  <label for="file">Choose the local zip file:</label>
  <input
    type="file"
    id="file"
    name="file"
    class="btn"
    accept=".zip, .cbz, .cbr, .7z, .rar"
    value=""
  /><br />
  <p>Note : your browser will process the zip file, don't choose a file too big !</p>
  <label for="file"><b>OR</b> Select a folder with images inside:</label>
  <input
    type="file"
    id="folder"
    name="folder"
    class="btn"
    webkitdirectory
    mozdirectory
    directory
    value=""
  /><br />
  <label for="file"><b>OR</b> Select images:</label>
  <input
    type="file"
    id="images"
    name="images"
    class="btn"
    accept="image/*"
    multiple
    value=""
  /><br />
`;
export function allowUpload() {
  if (localhost.url.test(window.location.href)) document.querySelector('#LocalTest')?.remove();
  if (
    window.location.href === 'https://github.com/TagoDR/MangaOnlineViewer' ||
    localhost.url.test(window.location.href) ||
    window.location.href === 'http://localhost:5173/'
  ) {
    const ele = document.createElement('div');
    ele.id = 'LocalMangaOnlineViewer';
    ele.innerHTML =
      (window.location.href === 'https://github.com/TagoDR/MangaOnlineViewer'
        ? browserMessage
        : '') + filesSelectors;
    document
      .querySelector('#user-content-local-files-zip-cbz-cbr')
      ?.parentElement?.nextElementSibling?.replaceWith(ele);
    document.querySelector('#file')?.addEventListener('change', (evt) => {
      const input = evt.target as HTMLInputElement;
      if (input.files?.[0]) loadMangaFromZip(input.files[0]);
    });
    document.querySelector('#folder')?.addEventListener('change', openFileImages);
    document.querySelector('#images')?.addEventListener('change', openFileImages);
    logScript(`Waiting for zip upload`);
    return true;
  }
  return false;
}
