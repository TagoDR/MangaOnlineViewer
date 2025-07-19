import { useStore } from '@nanostores/react';
import { locale, settings } from '../core/settings.ts';
import type { IManga } from '../types';
import { toggleAutoScroll } from '../ui/events/autoscroll.ts';
import { buttonBookmarksOpen } from '../ui/events/bookmarks.ts';
import {
  buttonCommentsOpen,
  buttonGlobalHideImageControls,
  buttonRedirectURL,
  buttonStartDownload,
} from '../ui/events/globals.ts';
import { selectGoToPage } from '../ui/events/navigation.ts';
import { buttonKeybindingsOpen, buttonSettingsOpen } from '../ui/events/panels.ts';
import { updateViewMode } from '../ui/events/viewmode.ts';
import { changeGlobalZoom, changeZoom, changeZoomByStep } from '../ui/events/zoom.ts';
import {
  IconArrowAutofitDown,
  IconArrowAutofitHeight,
  IconArrowAutofitLeft,
  IconArrowAutofitRight,
  IconArrowAutofitWidth,
  IconArrowBigLeft,
  IconArrowBigRight,
  IconBookmarks,
  IconFileDownload,
  IconKeyboard,
  IconListNumbers,
  IconLoader2,
  IconMenu2,
  IconMessage,
  IconPlayerPause,
  IconPlayerPlay,
  IconSettings,
  IconSpacingVertical,
  IconZoomInArea,
  IconZoomOutArea,
  IconZoomPan,
} from './Icons.ts';

type Props = {
  manga: IManga;
};

function Header({ manga }: Props) {
  const l = useStore(locale);
  const s = useStore(settings);

  return (
    <>
      <div id="menu">
        <IconMenu2 />
      </div>
      <header
        id="Header"
        className={`${s.header} headroom-top`}
      >
        <aside id="GlobalFunctions">
          <span>
            <button
              id="enlarge"
              title={l.ENLARGE}
              className="ControlButton"
              onClick={changeZoomByStep(1)}
              type="button"
            >
              <IconZoomInArea />
            </button>
            <button
              id="restore"
              title={l.RESTORE}
              className="ControlButton"
              onClick={() => changeGlobalZoom('percent')}
              type="button"
            >
              <IconZoomPan />
            </button>
            <button
              id="reduce"
              title={l.REDUCE}
              className="ControlButton"
              onClick={changeZoomByStep(-1)}
              type="button"
            >
              <IconZoomOutArea />
            </button>
            <button
              id="fitWidth"
              title={l.FIT_WIDTH}
              className="ControlButton"
              onClick={() => changeGlobalZoom('width')}
              type="button"
            >
              <IconArrowAutofitWidth />
            </button>
            <button
              id="fitHeight"
              title={l.FIT_HEIGHT}
              className="ControlButton"
              onClick={() => changeGlobalZoom('height')}
              type="button"
            >
              <IconArrowAutofitHeight />
            </button>
            <button
              id="keybindings"
              title={l.KEYBINDINGS}
              className="ControlButton"
              onClick={buttonKeybindingsOpen}
              type="button"
            >
              <IconKeyboard />
            </button>
            <button
              id="AutoScroll"
              title={l.SCROLL_START}
              className="ControlButton phones"
              onClick={toggleAutoScroll}
              type="button"
            >
              <IconPlayerPlay />
              <IconPlayerPause />
            </button>
          </span>
          <span>
            <button
              id="ltrMode"
              title={l.VIEW_MODE_LEFT}
              className="ControlButton"
              onClick={() => updateViewMode('FluidLTR')}
              type="button"
            >
              <IconArrowAutofitRight />
            </button>
            <button
              id="verticalMode"
              title={l.VIEW_MODE_VERTICAL}
              className="ControlButton tablets"
              onClick={() => updateViewMode('Vertical')}
              type="button"
            >
              <IconArrowAutofitDown />
            </button>
            <button
              id="webComic"
              title={l.VIEW_MODE_WEBCOMIC}
              className="ControlButton tablets"
              onClick={() => updateViewMode('WebComic')}
              type="button"
            >
              <IconSpacingVertical />
            </button>
            <button
              id="rtlMode"
              title={l.VIEW_MODE_RIGHT}
              className="ControlButton"
              onClick={() => updateViewMode('FluidRTL')}
              type="button"
            >
              <IconArrowAutofitLeft />
            </button>
            <button
              id="pageControls"
              title={l.TOGGLE_CONTROLS}
              className="ControlButton tablets"
              onClick={buttonGlobalHideImageControls}
              type="button"
            >
              <IconListNumbers />
            </button>
            <button
              id="bookmarks"
              title={l.BOOKMARKS}
              className="ControlButton tablets"
              onClick={buttonBookmarksOpen}
              type="button"
            >
              <IconBookmarks />
            </button>
            <button
              id="settings"
              title={l.SETTINGS}
              className="ControlButton tablets phones"
              onClick={buttonSettingsOpen}
              type="button"
            >
              <IconSettings />
            </button>
          </span>
          <span id="ZoomSlider">
            <output
              id="ZoomVal"
              className="RangeValue"
              htmlFor="Zoom"
            >
              {s.zoomMode === 'percent' ? `${s.defaultZoom}%` : s.zoomMode}
            </output>
            <input
              type="range"
              value={s.defaultZoom}
              name="Zoom"
              id="Zoom"
              min="1"
              max="200"
              onInput={changeZoom}
            />
          </span>
        </aside>
        <div className="ViewerTitle">
          <h1 id="MangaTitle">{manga.title}</h1>
          <a
            id="series"
            href={manga.series ?? ''}
            onClick={buttonRedirectURL}
          >
            ({l.RETURN_CHAPTER_LIST})
          </a>
        </div>
        <nav id="ChapterNavigation">
          <div
            id="Counters"
            className="ControlLabel"
          >
            {l.PAGES_LOADED}:<i>0</i> /
            <b>{manga.begin && manga.begin > 1 ? manga.pages - (manga.begin - 1) : manga.pages}</b>
            <span className="ControlLabel">{l.GO_TO_PAGE}:</span>
            <select
              id="gotoPage"
              onChange={selectGoToPage}
            >
              <option selected>#</option>
              {Array.from(Array(manga.pages + 1).keys())
                .slice(manga.begin)
                .map(index => (
                  <option
                    value={index}
                    key={index}
                  >
                    {index}
                  </option>
                ))}
            </select>
          </div>
          <div
            id="ChapterControl"
            className="ChapterControl"
          >
            <button
              id="CommentsButton"
              className={`NavigationControlButton ControlButton ${manga.comments ? '' : 'disabled'}`}
              title={l.DISPLAY_COMMENTS}
              onClick={buttonCommentsOpen}
              type="button"
            >
              <IconMessage />
              {l.DISPLAY_COMMENTS}
            </button>
            <button
              id="download"
              className="NavigationControlButton ControlButton disabled"
              type="button"
              title={l.DOWNLOAD_ZIP}
              onClick={buttonStartDownload}
            >
              <IconFileDownload />
              <IconLoader2 />
              {l.BUTTON_DOWNLOAD}
            </button>
            <a
              id="prev"
              className="NavigationControlButton ControlButton"
              type="button"
              href={manga.prev ?? ''}
              title={l.PREVIOUS_CHAPTER}
              onClick={buttonRedirectURL}
            >
              <IconArrowBigLeft />
              {l.BUTTON_PREVIOUS}
            </a>
            <a
              id="next"
              className="NavigationControlButton ControlButton"
              type="button"
              href={manga.next ?? ''}
              title={l.NEXT_CHAPTER}
              onClick={buttonRedirectURL}
            >
              {l.BUTTON_NEXT}
              <IconArrowBigRight />
            </a>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
