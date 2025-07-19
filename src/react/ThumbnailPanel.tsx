import { useStore } from '@nanostores/react';
import { locale, settings } from '../core/settings.ts';
import type { IManga } from '../types';
import { transformScrollToHorizontal } from '../ui/events/common.ts';
import { IconCategory } from './Icons.ts';
import Thumbnail from './Thumbnail.tsx';

type Props = {
  manga: IManga;
};

function ThumbnailPanel({ manga }: Props) {
  const l = useStore(locale);
  const s = useStore(settings);

  return (
    <nav
      id="Navigation"
      className={`panel ${s.showThumbnails ? '' : 'disabled'}`}
    >
      <div
        id="NavigationCounters"
        className="ControlLabel"
      >
        <IconCategory />
        <i>0</i> /
        <b>{manga.begin && manga.begin > 1 ? manga.pages - (manga.begin - 1) : manga.pages}</b>
        {l.PAGES_LOADED}
      </div>
      <div
        id="Thumbnails"
        onWheel={transformScrollToHorizontal}
      >
        {Array.from(Array(manga.pages + 1).keys())
          .slice(manga.begin)
          .map(index => (
            <Thumbnail
              index={index}
              key={index}
            />
          ))}
      </div>
    </nav>
  );
}

export default ThumbnailPanel;
