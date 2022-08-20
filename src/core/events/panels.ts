function panels() {
  // Settings Control
  function buttonSettings() {
    document.querySelector('#SettingsPanel')?.classList.toggle('visible');
    document.querySelector('#Navigation')?.classList.toggle('visible');
    document.querySelector('#Header')?.classList.toggle('visible');
    document.querySelector('#SettingsOverlay')?.classList.toggle('visible');
  }
  document.querySelector('#settings')?.addEventListener('click', buttonSettings);
  document.querySelector('#CloseSettings')?.addEventListener('click', buttonSettings);
  document.querySelector('#SettingsOverlay')?.addEventListener('click', buttonSettings);
  // Keybindings list
  function buttonKeybindings() {
    document.querySelector('#KeybindingsPanel')?.classList.toggle('visible');
  }
  document.querySelector('#keybindings')?.addEventListener('click', buttonKeybindings);
  document.querySelector('#CloseKeybindings')?.addEventListener('click', buttonKeybindings);
}

export default panels;
