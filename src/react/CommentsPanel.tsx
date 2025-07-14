import { useStore } from '@nanostores/preact';
import { locale, settings } from '../core/settings.ts';
import { buttonCommentsClose } from '../ui/events/globals.ts';
import { IconMoon, IconSun, IconX } from './Icons.ts';

function CommentsPanel() {
  const l = useStore(locale);
  const s = useStore(settings);

  return (
    <section
      id="CommentsPanel"
      className="panel"
    >
      <button
        id="CloseComments"
        className="closeButton"
        title={l.CLOSE}
        onClick={buttonCommentsClose}
        type="button"
      >
        <IconX />
      </button>
      <h2>{l.COMMENTS}</h2>
      <div
        id="CommentsArea"
        className={s.colorScheme}
      ></div>
      <button
        id="CommentsColorScheme"
        className="simpleButton ColorScheme"
        type="button"
      >
        <IconSun />
        <IconMoon />
      </button>
    </section>
  );
}

export default CommentsPanel;
