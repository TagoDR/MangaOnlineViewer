import {
  getAppStateValue,
  getSettingsValue,
  saveSettingsValue,
  setAppStateValue,
} from '../../core/settings';
import { isNothing } from '../../utils/checks';
import keybindings from './keybindings';

export function buttonPanelsClose() {
  setAppStateValue('panel', 'none');
}

export function buttonSettingsOpen() {
  setAppStateValue('panel', 'settings');
}

export function buttonKeybindingsOpen() {
  setAppStateValue('panel', 'keybindings');
}

export function saveKeybindings() {
  const newkeybinds: Record<string, string[] | undefined> = getSettingsValue('keybinds');
  Object.keys(getSettingsValue('keybinds')).forEach(kb => {
    const keys = getAppStateValue('render')
      ?.querySelector<HTMLInputElement>(`#${kb}`)
      ?.value.split(',')
      ?.map(value => value.trim());
    newkeybinds[kb] = isNothing(keys) ? undefined : keys;
  });
  saveSettingsValue('keybinds', newkeybinds);
  setAppStateValue('panel', 'keybindings');
  keybindings();
}

export function editKeybindings() {
  setAppStateValue('panel', 'keybindingsEditor');
}
