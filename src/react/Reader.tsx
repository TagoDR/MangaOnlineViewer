import { useStore } from '@nanostores/preact';
import { settings } from '../core/settings.ts';
import type { IManga } from '../types';
import MangaPage from './MangaPage.tsx';

type Props = {
  manga: IManga;
};

function Reader({ manga }: Props) {
  const s = useStore(settings);
  return (
    <main
      id="Chapter"
      className={`${s.fitWidthIfOversize ? 'fitWidthIfOversize' : ''} ${s.viewMode}`}
    >
      {Array.from(Array(manga.pages + 1).keys())
        .slice(manga.begin)
        .map(index => (
          <MangaPage
            index={index}
            key={index}
          />
        ))}
    </main>
  );
}

export default Reader;
