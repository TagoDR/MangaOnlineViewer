import JSZip from 'jszip';
import { saveAs } from 'file-saver';
import { logScript, logScriptC } from '../utils/tampermonkey';
import {
  getDataFromBase64,
  getExtension,
  getExtensionBase64,
  isBase64ImageUrl,
  isObjectURL,
} from '../utils/urls';

type ImageFile = {
  name: string;
  data: string;
};

let zip: JSZip;

const getFilename = (name: string, index: number, total: number, ext: string) =>
  `${name}${(index + 1).toString().padStart(Math.floor(Math.log10(total)) + 1, '0')}.${ext.replace(
    'jpeg',
    'jpg',
  )}`;

async function getImage(src: string) {
  return new Promise<Tampermonkey.Response<string>>((resolve, reject) => {
    logScript(`Getting Image data: ${src}`);
    GM_xmlhttpRequest({
      method: 'GET',
      url: src,
      headers: { referer: window.location.host, origin: window.location.host },
      responseType: 'blob',
      onload(response) {
        if (response.status !== 200) {
          reject(response);
        }
        resolve(response);
      },
    });
  });
}

async function getImageData(
  img: HTMLImageElement,
  index: number,
  array: HTMLImageElement[],
): Promise<ImageFile> {
  const src = img.getAttribute('src') ?? img.getAttribute('data-src') ?? '';
  if (isObjectURL(src)) {
    throw new Error('Image source unusable');
  }
  if (isBase64ImageUrl(src)) {
    return Promise.resolve({
      name: getFilename('Page-', index, array.length, getExtensionBase64(src)),
      data: getDataFromBase64(src) ?? '',
    });
  }

  return new Promise((resolve) => {
    getImage(src)
      .then((res) => {
        resolve({
          name: getFilename('Page-', index, array.length, getExtension(src)),
          data: res.response,
        });
      })
      .catch(logScriptC('Image not Available'));
  });
}

function addZip(img: ImageFile) {
  logScript(`${img.name} Added to Zip from Base64 Image`);
  zip.file(img.name, img.data, {
    base64: true,
    createFolders: true,
    compression: 'DEFLATE',
  });
}

async function generateZip() {
  zip = new JSZip();
  const images = [...document.querySelectorAll<HTMLImageElement>('.PageImg')];
  Promise.all(images.map(getImageData))
    .then((data) => {
      data.forEach(addZip);
      logScript('Generating Zip');
      zip
        .generateAsync(
          {
            type: 'blob',
          },
          // LogScript, progress
        )
        .then((content) => {
          logScript('Download Ready');
          const zipName = `${document.querySelector('#MangaTitle')?.textContent?.trim()}.zip`;
          saveAs(content, zipName, { autoBom: false });
          document.getElementById('download')?.classList.remove('loading');
        })
        .catch(logScript);
    })
    .catch((msg) => logScript("One or more images couldn't be Downloaded", msg));
}

export default generateZip;
