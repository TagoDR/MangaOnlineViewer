import { logScript } from './browser';

const cache = {
  zip: new JSZip(),
  downloadFiles: 0,
  Data: {},
};

const getExtension = (mimeType) => ((((/image\/(?<ext>jpe?g|png|webp)/.exec(mimeType) || {}).groups || {}).ext || '') || 'png');
const getFilename = (name, index, total, ext) => `${name}${(index + 1).toString().padStart(Math.floor(Math.log10(total)) + 1, '0')}.${ext.replace('jpeg', 'jpg')}`;

// Generate Zip File for download
function generateZip() {
  // Source: http://stackoverflow.com/questions/8778863/downloading-an-image-using-xmlhttprequest-in-a-userscript/8781262#8781262
  if (cache.downloadFiles === 0) {
    const filenameRegex = /^(?<name>.*?)(?<index>\d+)\.(?<ext>\w+)$/;
    const images = $('.MangaPage img');
    const filenames = (() => {
      const result = [];
      for (let i = 0; i < images.length; i += 1) {
        const img = $(images[i]);
        const filename = img.attr('src').split(/[?#]/)[0].split('/').pop();
        const match = filenameRegex.exec(filename);
        if (!match) break;
        const { name, index, ext } = match.groups;
        const fixedFilename = getFilename(name, index, images.length, ext);
        if (result.length > 0 && fixedFilename <= result[result.length - 1]) break;
        result.push(fixedFilename);
      }
      if (result.length < images.length) return [];
      return result;
    })();
    images.get().forEach((value, index) => {
      const img = $(value);
      const src = img.attr('src');
      const base64 = /^data:(?<mimeType>image\/\w+);base64,+(?<data>.+)/.exec(src);
      if (base64) {
        const filename = getFilename('Page ', index, images.length, getExtension(base64.groups.mimeType));
        cache.zip.file(filename, base64.groups.data, {
          base64: true,
          createFolders: true,
        });
        logScript(`${filename} Added to Zip from Base64 Image, From: ${src}`);
        cache.downloadFiles += 1;
      } else {
        try {
          GM_xmlhttpRequest({
            method: 'GET',
            url: src,
            overrideMimeType: 'text/plain; charset=x-user-defined',
            responseType: 'blob',
            onload(request) {
              const filename = filenames[index] || getFilename('Page ', index, images.length, getExtension(request.response.type));
              cache.zip.file(filename, request.response, {
                base64: true,
                createFolders: true,
                compression: 'DEFLATE',
              });
              logScript(`${filename} Added to Zip as Base64 Image, From: ${src}, Data:`,
                request.response);
              cache.downloadFiles += 1;
            },
          });
        } catch (e) {
          logScript(e);
        }
      }
    });
  }
  const total = parseInt($('#Counters').find('b').text(), 10);
  if (cache.downloadFiles < total) {
    logScript(`Waiting for Files to Download ${cache.downloadFiles} of ${total}`);
    setTimeout(generateZip, 2000);
  } else {
    const blobLink = document.getElementById('blob');
    try {
      blobLink.download = `${$('#series i').first().text().trim()}.zip`;
      cache.zip.generateAsync({
        type: 'blob',
      }).then((content) => {
        blobLink.href = W.URL.createObjectURL(content);
        logScript('Download Ready');
        $('#blob')[0].click();
      });
    } catch (e) {
      logScript(e);
      blobLink.innerHTML += ' (not supported on this browser)';
    }
  }
}

export default generateZip;
