import JSZip from 'jszip';
import { saveAs } from 'file-saver';
import { logScript } from '../utils/tampermonkey';

type ImageFile = {
  name: string;
  data: string;
};

let zip: JSZip;

const base64Regex = /^data:(?<mimeType>image\/\w+);base64,+(?<data>.+)/;

const objectURLRegex = /^blob:(.+?)\/(.+)$/;

const getExtension = (mimeType: string) =>
  /image\/(?<ext>jpe?g|png|webp)/.exec(mimeType)?.groups?.ext ?? 'png';

function isObjectURL(url: string) {
  return objectURLRegex.test(url);
}

const getFilename = (name: string, index: number, total: number, ext: string) =>
  `${name}${(index + 1).toString().padStart(Math.floor(Math.log10(total)) + 1, '0')}.${ext.replace(
    'jpeg',
    'jpg',
  )}`;

async function getImage(src: string) {
  return new Promise<Tampermonkey.Response<string>>((resolve) => {
    logScript(`Getting Image data: ${src}`);
    GM_xmlhttpRequest({
      method: 'GET',
      url: src,
      headers: { referer: src, origin: src },
      responseType: 'blob',
      onload(response) {
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
  let src = img.getAttribute('src');
  if (src == null || isObjectURL(src)) {
    src = img.getAttribute('data-src');
    if (src == null || isObjectURL(src)) {
      return Promise.reject(new Error('Image source not specified'));
    }
  }

  const base64 = base64Regex.exec(src);
  if (base64?.groups) {
    return Promise.resolve({
      name: getFilename('Page-', index, array.length, getExtension(base64.groups?.mimeType)),
      data: base64.groups.data,
    });
  }

  return new Promise((resolve) => {
    // SetTimeout(
    //   () =>
    getImage(src)
      .then((res) => {
        resolve({
          name: getFilename('Page-', index, array.length, getExtension(res.response.type)),
          data: res.response,
        });
      })
      .catch(logScript);
    //   UseSettings().throttlePageLoad * index,
    // );
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
