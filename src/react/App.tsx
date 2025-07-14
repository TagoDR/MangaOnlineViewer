import { useStore } from '@nanostores/preact';
import _ from 'lodash';
import { useEffect } from 'preact/hooks';
import { isBookmarked, settings } from '../core/settings.ts';
import type { IManga } from '../types';
import { manualScroll } from '../ui/events/autoscroll.ts';
import { buttonBookmarksClose } from '../ui/events/bookmarks.ts';
import { buttonCommentsClose } from '../ui/events/globals.ts';
import { toggleScrollDirection } from '../ui/events/headroom.ts';
import {
  buttonHeaderClick,
  buttonKeybindingsClose,
  buttonSettingsClose,
  headerHover,
} from '../ui/events/panels.ts';
import { getDevice } from '../utils/tampermonkey.ts';
import BookmarksPanel from './BookmarksPanel.tsx';
import CommentsPanel from './CommentsPanel.tsx';
import Header from './Header.tsx';
import { IconMenu2 } from './Icons.ts';
import KeybindingsPanel from './KeybindingsPanel.tsx';
import Reader from './Reader.tsx';
import SettingsPanel from './SettingsPanel.tsx';
import ThumbnailPanel from './ThumbnailPanel.tsx';

type Props = {
  manga: IManga;
};

function App({ manga }: Props) {
  const s = useStore(settings);

  function buttonOverlay() {
    buttonSettingsClose();
    buttonCommentsClose();
    buttonBookmarksClose();
    buttonKeybindingsClose();
  }

  useEffect(() => {
    const handleScroll = _.debounce(toggleScrollDirection, 50);
    const handleWheel = _.throttle(manualScroll, 500);
    const handleMouseOver = _.throttle(headerHover, 300);

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('wheel', handleWheel);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <div
      id="MangaOnlineViewer"
      className={`${s.colorScheme} ${
        s.hidePageControls ? 'hideControls' : ''
      } ${isBookmarked() ? 'bookmarked' : ''} ${getDevice()}`}
      data-theme={s.theme}
    >
      <div
        id="menu"
        className={s.header}
        onClick={buttonHeaderClick}
      >
        <IconMenu2 />
      </div>
      <Header manga={manga} />
      <Reader manga={manga} />
      <ThumbnailPanel manga={manga} />
      <div
        id="Overlay"
        className="overlay"
        onClick={buttonOverlay}
      ></div>
      <CommentsPanel />
      <KeybindingsPanel />
      <BookmarksPanel />
      <SettingsPanel />
    </div>
  );
}

export default App;
