const listThumbnails = (times: number) =>
  Array(times)
    .fill(null)
    .map(
      (_, index) => `
<div id='Thumbnail${index + 1}' class='Thumbnail'>
  <img id='ThumbnailImg${index + 1}' alt='' class='ThumbnailImg' src=''/>
  <span class='ThumbnailIndex'>${index + 1}</span>
</div>`,
    );
export default listThumbnails;
