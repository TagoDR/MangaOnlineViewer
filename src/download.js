import { logScript } from './browser';

const cache = {
  zip: new JSZip(),
  downloadFiles: 0,
  Data: {},
};

// Generate Zip File for download
function generateZip() {
  // Source: http://stackoverflow.com/questions/8778863/downloading-an-image-using-xmlhttprequest-in-a-userscript/8781262#8781262
  if (cache.downloadFiles === 0) {
    $('.MangaPage img').get().forEach((value, index) => {
      const img = $(value);
      const src = img.attr('src');
      const ext = src.match(/.jpg|.png/ig) || ['.png'];
      const filename = `Page ${String(`000${index + 1}`).slice(-3)}${ext[0]}`;
      if (src.indexOf('base64') > -1) {
        let base64 = src.replace('data:image/png;base64,', '');
        const i = base64.indexOf(',');
        if (i !== -1) {
          base64 = base64.substring(i + 1, base64.length);
        }
        cache.zip.file(filename, base64, {
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
      blobLink.download = `${$('title').text().trim()}.zip`;
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
