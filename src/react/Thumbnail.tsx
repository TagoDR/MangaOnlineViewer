import { clickThumbnail } from '../ui/events/navigation.ts';

type Props = {
  index: number;
  src?: string;
};

function Thumbnail({ index, src = '' }: Props) {
  return (
    <div
      id={`Thumbnail${index}`}
      className="Thumbnail"
      onClick={clickThumbnail}
    >
      <img
        id={`ThumbnailImg${index}`}
        alt=""
        className="ThumbnailImg"
        src={src}
      />
      <span className="ThumbnailIndex">{index}</span>
    </div>
  );
}

export default Thumbnail;
