import { useStore } from '@nanostores/preact';
import { locale } from '../core/settings.ts';
import { buttonBookmark } from '../ui/events/bookmarks.ts';
import { buttonHidePage, buttonReloadPage } from '../ui/events/individual.ts';
import {
  buttonRestoreZoom,
  buttonZoomHeight,
  buttonZoomIn,
  buttonZoomOut,
  buttonZoomWidth,
} from '../ui/events/size.ts';
import {
  IconArrowAutofitHeight,
  IconArrowAutofitWidth,
  IconBookmark,
  IconBookmarkOff,
  IconEye,
  IconEyeOff,
  IconRefresh,
  IconZoomCancel,
  IconZoomIn,
  IconZoomOut,
} from './Icons.ts';

type Props = {
  index: number;
  src?: string;
};

function MangaPage({ index, src = '' }: Props) {
  const l = useStore(locale);

  return (
    <div
      id={`Page${index}`}
      className="MangaPage"
    >
      <div className="PageFunctions">
        <button
          className="Bookmark ControlButton"
          title={l.BOOKMARK}
          onClick={buttonBookmark}
          type="button"
        >
          <IconBookmark />
          <IconBookmarkOff />
        </button>
        <button
          className="ZoomIn ControlButton"
          title={l.ZOOM_IN}
          onClick={buttonZoomIn}
          type="button"
        >
          <IconZoomIn />
        </button>
        <button
          className="ZoomRestore ControlButton"
          title={l.ZOOM_RESET}
          onClick={buttonRestoreZoom}
          type="button"
        >
          <IconZoomCancel />
        </button>
        <button
          className="ZoomOut ControlButton"
          title={l.ZOOM_OUT}
          onClick={buttonZoomOut}
          type="button"
        >
          <IconZoomOut />
        </button>
        <button
          className="ZoomWidth ControlButton"
          title={l.ZOOM_WIDTH}
          onClick={buttonZoomWidth}
          type="button"
        >
          <IconArrowAutofitWidth />
        </button>
        <button
          className="ZoomHeight ControlButton"
          title={l.ZOOM_HEIGHT}
          onClick={buttonZoomHeight}
          type="button"
        >
          <IconArrowAutofitHeight />
        </button>
        <button
          className="Hide ControlButton"
          title={l.HIDE}
          onClick={buttonHidePage}
          type="button"
        >
          <IconEye />
          <IconEyeOff />
        </button>
        <button
          className="Reload ControlButton"
          title={l.RELOAD}
          onClick={buttonReloadPage}
          type="button"
        >
          <IconRefresh />
        </button>
        <span className="PageIndex">{index}</span>
      </div>
      <div className="PageContent">
        <img
          id={`PageImg${index}`}
          alt=""
          className="PageImg"
          src={src}
        />
      </div>
    </div>
  );
}

export default MangaPage;
