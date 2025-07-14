import { useStore } from '@nanostores/preact';
import { useState } from 'preact/hooks';
import { locale, settings } from '../core/settings.ts';
import { isKey } from '../types';
import { buttonKeybindingsClose, editKeybindings, saveKeybindings } from '../ui/events/panels.ts';
import { IconDeviceFloppy, IconPencil, IconX } from './Icons.ts';

function KeybindingsPanel() {
  const l = useStore(locale);
  const s = useStore(settings);
  const [editor, setEditor] = useState(false);

  const handleEdit = () => {
    editKeybindings();
    setEditor(true);
  };

  const handleSave = () => {
    saveKeybindings();
    setEditor(false);
  };

  return (
    <div
      id="KeybindingsPanel"
      className="panel"
    >
      <h2>{l.KEYBINDINGS}</h2>
      <button
        id="CloseKeybindings"
        className="closeButton"
        title={l.CLOSE}
        onClick={buttonKeybindingsClose}
        type="button"
      >
        <IconX />
      </button>
      <div className="controls">
        <button
          id="EditKeybindings"
          className="ControlButton"
          type="button"
          title={l.EDIT_KEYBINDS}
          onClick={handleEdit}
        >
          <IconPencil />
          {l.BUTTON_EDIT}
        </button>
        <button
          id="SaveKeybindings"
          className="ControlButton hidden"
          type="button"
          title={l.SAVE_KEYBINDS}
          onClick={handleSave}
        >
          <IconDeviceFloppy />
          {l.BUTTON_SAVE}
        </button>
      </div>
      <div id="KeybindingsList">
        {!editor ? (
          Object.keys(s.keybinds).map(kb => (
            <span key={kb}>
              <span>{isKey(l, kb) ? l[kb] : ''}:</span>
              <span>
                {s.keybinds[kb]?.map((key: string) => (
                  <kbd
                    className="dark"
                    key={key}
                  >
                    {key}
                  </kbd>
                ))}
              </span>
            </span>
          ))
        ) : (
          <>
            {Object.keys(s.keybinds).map(kb => (
              <label
                htmlFor={kb}
                key={kb}
              >
                {isKey(l, kb) ? l[kb] : ''}:
                <input
                  type="text"
                  className="KeybindInput"
                  id={kb}
                  name={kb}
                  defaultValue={s.keybinds[kb]?.join(' , ') ?? ''}
                />
              </label>
            ))}
            <div id="HotKeysRules">{l.KEYBIND_RULES}</div>
          </>
        )}
      </div>
    </div>
  );
}

export default KeybindingsPanel;
