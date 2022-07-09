// Creates the style element
function createStyleElement(id: string, content: string): HTMLStyleElement {
  const style = document.createElement('style');
  style.id = id;
  style.appendChild(document.createTextNode(content));
  return style;
}

// Appends CSS content to the head of the site
function appendStyleSheet(id: string, content: string) {
  if (!document.querySelector(`#${id}`)) {
    const head = document.head || document.querySelector('head');
    head.appendChild(createStyleElement(id, content));
  }
}

function removeStyleSheet(id: string) {
  document.querySelectorAll(`style[id="${id}"]`).forEach((elem) => elem.remove());
}

function replaceStyleSheet(id: string, content: string) {
  removeStyleSheet(id);
  appendStyleSheet(id, content);
}

function wrapStyle(id: string, css: string) {
  return `<style type='text/css' id='${id}'>${css}</style>`;
}

export { appendStyleSheet, removeStyleSheet, replaceStyleSheet, wrapStyle };
