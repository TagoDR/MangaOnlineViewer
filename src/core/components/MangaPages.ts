// Add Pages Place-holders
const listPages = (times: number) =>
  Array(times)
    .fill(null)
    .map(
      (_, index) => `
<div id='Page${index + 1}' class='MangaPage'>
  <div class='PageFunctions'>
    <button class='Bookmark ControlButton' title='Bookmark'></button>
    <button class='ZoomIn ControlButton' title='Zoom In'></button>
    <button class='ZoomRestore ControlButton' title='Zoom Restore'></button>
    <button class='ZoomOut ControlButton' title='Zoom Out'></button>
    <button class='ZoomWidth ControlButton' title='Zoom to Width'></button>
    <button class='ZoomHeight ControlButton' title='Zoom to Height'></button>
    <button class='Hide ControlButton' title='Hide'></button>
    <button class='Reload ControlButton' title='Reload'></button>
    <span class='PageIndex'>${index + 1}</span>
  </div>
  <div class='PageContent'>
    <img id='PageImg${index + 1}' alt='PageImg${index + 1}' class='PageImg' />
  </div>
</div>`,
    );
export default listPages;
