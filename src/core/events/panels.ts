import { keybindEditor, keybindList } from '../components/KeybindingsPanel';
import { updateSettings, useSettings } from '../settings';
import { isNothing } from '../../utils/checks';
import keybindings from './keybindings';

function panels() {
  // Show Header list
  function buttonHeader() {
    const header = document.querySelector('#Header');
    if (header?.classList.contains('click')) header?.classList.toggle('visible');
  }

  document.querySelector('#menu')?.addEventListener('click', buttonHeader);

  // Settings Control
  function buttonSettingsOpen() {
    document.querySelector('#SettingsPanel')?.classList.add('visible');
    document.querySelector('#Navigation')?.classList.add('visible');
    document.querySelector('#Header')?.classList.add('visible');
    document.querySelector('#SettingsOverlay')?.classList.add('visible');
  }

  function buttonSettingsClose() {
    document.querySelector('#SettingsPanel')?.classList.remove('visible');
    document.querySelector('#Navigation')?.classList.remove('visible');
    document.querySelector('#Header')?.classList.remove('visible');
    document.querySelector('#SettingsOverlay')?.classList.remove('visible');
  }

  document.querySelector('#settings')?.addEventListener('click', buttonSettingsOpen);
  document.querySelector('#CloseSettings')?.addEventListener('click', buttonSettingsClose);
  document.querySelector('#SettingsOverlay')?.addEventListener('click', buttonSettingsClose);

  // Keybindings list
  function buttonKeybindings() {
    document.querySelector('#KeybindingsList')!.innerHTML = keybindList().join('\n');
    document.querySelector('#SaveKeybindings')?.classList.add('hidden');
    document.querySelector('#EditKeybindings')?.classList.remove('hidden');
    document.querySelector('#KeybindingsPanel')?.classList.toggle('visible');
    document.querySelector('#KeybindingsOverlay')?.classList.toggle('visible');
  }

  function saveKeybindings() {
    const newkeybinds: { [key: string]: string[] | undefined } = useSettings().keybinds;
    Object.keys(useSettings().keybinds).forEach((kb) => {
      const keys = document
        .querySelector<HTMLInputElement>(`#${kb}`)
        ?.value.split(',')
        ?.map((value) => value.trim());
      newkeybinds[kb] = isNothing(keys) ? undefined : keys;
    });
    updateSettings({ keybinds: newkeybinds });
    document.querySelector('#KeybindingsList')!.innerHTML = keybindList().join('\n');
    document.querySelector('#SaveKeybindings')?.classList.add('hidden');
    document.querySelector('#EditKeybindings')?.classList.remove('hidden');
    keybindings();
  }

  function editKeybindings() {
    document.querySelector('#KeybindingsList')!.innerHTML = keybindEditor().join('\n');
    document.querySelector('#SaveKeybindings')?.classList.remove('hidden');
    document.querySelector('#EditKeybindings')?.classList.add('hidden');
  }

  document.querySelector('#keybindings')?.addEventListener('click', buttonKeybindings);
  document.querySelector('#CloseKeybindings')?.addEventListener('click', buttonKeybindings);
  document.querySelector('#KeybindingsOverlay')?.addEventListener('click', buttonKeybindings);
  document.querySelector('#EditKeybindings')?.addEventListener('click', editKeybindings);
  document.querySelector('#SaveKeybindings')?.addEventListener('click', saveKeybindings);
}

export default panels;
