import { keybindEditor, keybindings } from '../components/KeybindingsPanel';

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
    document.querySelector('#KeybindingsPanel')?.classList.toggle('visible');
  }
  function saveKeybindings() {
    document.querySelector('#KeybindingsList')!.innerHTML = keybindings.join('\n');
  }
  function editKeybindings() {
    document.querySelector('#KeybindingsList')!.innerHTML = keybindEditor.join('\n');
  }

  document.querySelector('#keybindings')?.addEventListener('click', buttonKeybindings);
  document.querySelector('#CloseKeybindings')?.addEventListener('click', buttonKeybindings);
  document.querySelector('#EditKeybindings')?.addEventListener('click', editKeybindings);
  document.querySelector('#SaveKeybindings')?.addEventListener('click', saveKeybindings);
}

export default panels;
