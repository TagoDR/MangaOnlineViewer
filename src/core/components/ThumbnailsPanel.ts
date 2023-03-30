import sequence from '../../utils/sequence';

const ThumbnailsPanel = (times: number, begin: number) =>
  sequence(times, begin).map(
    // language=html
    (index) => `
      <div id='Thumbnail${index}' class='Thumbnail'>
        <img id='ThumbnailImg${index}' alt='' class='ThumbnailImg' src='' />
        <span class='ThumbnailIndex'>${index}</span>
      </div>`,
  );
export default ThumbnailsPanel;
