import { logScript } from './browser';

const cache = {
  zip: new JSZip(),
  downloadFiles: 0,
  Data: {},
};
// Converts Images into Base64
function customBase64Encode(inputStr) {
  // Source: http://stackoverflow.com/questions/8778863/downloading-an-image-using-xmlhttprequest-in-a-userscript/8781262#8781262
  /* eslint-disable no-bitwise */
  const bbLen = 3;
  const enCharLen = 4;
  const inpLen = inputStr.length;
  let inx = 0;
  let jnx;
  const keyStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
  let output = '';
  let paddingBytes = 0;
  const bytebuffer = new Array(bbLen);
  const encodedCharIndexes = new Array(enCharLen);
  while (inx < inpLen) {
    for (jnx = 0; jnx < bbLen; jnx += 1) {
      /* --- Throw away high-order byte, as documented at:
       https://developer.mozilla.org/En/Using_XMLHttpRequest#Handling_binary_data
       */
      if (inx < inpLen) {
        bytebuffer[jnx] = inputStr.charCodeAt(inx) & 0xff;
        inx += 1;
      } else {
        bytebuffer[jnx] = 0;
      }
    }
    /* --- Get each encoded character, 6 bits at a time.
     index 0: first  6 bits
     index 1: second 6 bits
     (2 least significant bits from inputStr byte 1
     + 4 most significant bits from byte 2)
     index 2: third  6 bits
     (4 least significant bits from inputStr byte 2
     + 2 most significant bits from byte 3)
     index 3: forth  6 bits (6 least significant bits from inputStr byte 3)
     */
    encodedCharIndexes[0] = bytebuffer[0] >> 2;
    encodedCharIndexes[1] = ((bytebuffer[0] & 0x3) << 4) | (bytebuffer[1] >> 4);
    encodedCharIndexes[2] = ((bytebuffer[1] & 0x0f) << 2) | (bytebuffer[2] >> 6);
    encodedCharIndexes[3] = bytebuffer[2] & 0x3f;
    // --- Determine whether padding happened, and adjust accordingly.
    paddingBytes = inx - (inpLen - 1);
    switch (paddingBytes) {
      case 1:
        // Set last character to padding char
        encodedCharIndexes[3] = 64;
        break;
      case 2:
        // Set last 2 characters to padding char
        encodedCharIndexes[3] = 64;
        encodedCharIndexes[2] = 64;
        break;
      default:
        break; // No padding - proceed
    }
    /* --- Now grab each appropriate character out of our keystring,
     based on our index array and append it to the output string.
     */
    for (jnx = 0; jnx < enCharLen; jnx += 1) {
      output += keyStr.charAt(encodedCharIndexes[jnx]);
    }
  }
  return output;
  /* eslint-enable no-bitwise */
}
// Generate Zip File for download
function generateZip() {
  if (cache.downloadFiles === 0) {
    $('.MangaPage img').get().forEach((value, index) => {
      const img = $(value);
      const filename = `Page ${String(`000${index + 1}`).slice(-3)}.png`;
      const src = img.attr('src');
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
        logScript(`${filename} Added to Zip from Base64 Image`);
        cache.downloadFiles += 1;
      } else {
        try {
          GM_xmlhttpRequest({
            method: 'GET',
            url: src,
            overrideMimeType: 'text/plain; charset=x-user-defined',
            onload(e) {
              const base64 = customBase64Encode(e.responseText);
              cache.zip.file(filename, base64, {
                base64: true,
                createFolders: true,
              });
              logScript(`${filename} Added to Zip as Base64 Image`);
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
