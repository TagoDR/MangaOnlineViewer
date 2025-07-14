import { useStore } from '@nanostores/react';
import _ from 'lodash';
import { useEffect } from 'react';
import { isBookmarked, settings } from '../../core/settings';
import type { IManga } from '../../types';
import { manualScroll } from '../../ui/events/autoscroll';
import { buttonBookmarksClose } from '../../ui/events/bookmarks';
import { buttonCommentsClose } from '../../ui/events/globals';
import { toggleScrollDirection } from '../../ui/events/headroom';
import {
  buttonHeaderClick,
  buttonKeybindingsClose,
  buttonSettingsClose,
  headerHover,
} from '../../ui/events/panels';
import { getDevice } from '../../utils/tampermonkey';
import { IconMenu2 } from '../Icons.ts';
import BookmarksPanel from './BookmarksPanel';
import CommentsPanel from './CommentsPanel';
import Header from './Header';
import KeybindingsPanel from './KeybindingsPanel';
import Reader from './Reader';
import SettingsPanel from './SettingsPanel';
import ThumbnailPanel from './ThumbnailPanel';

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
      <div id="menu" className={s.header} onClick={buttonHeaderClick}>
        <IconMenu2 />
      </div>
      <Header manga={manga} />
      <Reader manga={manga} />
      <ThumbnailPanel manga={manga} />
      <div id="Overlay" className="overlay" onClick={buttonOverlay}></div>
      <CommentsPanel />
      <KeybindingsPanel />
      <BookmarksPanel />
      <SettingsPanel />
    </div>
  );
}

export default App;
