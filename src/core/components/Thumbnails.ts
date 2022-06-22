export const listThumbnails = (times: number) =>
  Array(times)
    .fill(null)
    .map(
      (_, index) =>
        `<div id='Thumbnail${index + 1}' class='Thumbnail'><img id='ThumbnailImg${
          index + 1
        }' alt='ThumbnailImg${index + 1}' src=''/><span>${index + 1}</span></div>`,
    );
