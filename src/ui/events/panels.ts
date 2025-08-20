import {
  getAppStateValue,
  getSettingsValue,
  saveSettingsValue,
  setAppStateValue,
} from '../../core/settings';
import { isNothing } from '../../utils/checks';
import keybindings from './keybindings';

/**
 * Event handler to close any currently open panel by setting the application state.
 */
export function buttonPanelsClose() {
  setAppStateValue('panel', 'none');
}

/**
 * Event handler to open the settings panel.
 */
export function buttonSettingsOpen() {
  setAppStateValue('panel', 'settings');
}

/**
 * Event handler to open the keybindings panel in its default view mode.
 */
export function buttonKeybindingsOpen() {
  setAppStateValue('panel', 'keybindings');
}

/**
 * Saves the keybindings from the editor form to the application settings.
 * After saving, it switches the panel back to the keybindings view mode and re-initializes the keybinding listeners.
 */
export function saveKeybindings() {
  const newKeybinds: Record<string, string[] | undefined> = {};
  getAppStateValue('render')?.querySelectorAll<HTMLInputElement>('.KeybindInput').forEach(element => {
    const keys = element.value.split(',').map(value => value.trim());
    newKeybinds[element.id] = isNothing(keys) ? undefined : keys;
  });
  saveSettingsValue('keybinds', newKeybinds);
  setAppStateValue('panel', 'keybindings');
  keybindings();
}

/**
 * Event handler to switch the keybindings panel to its editor mode.
 */
export function editKeybindings() {
  setAppStateValue('panel', 'keybindingsEditor');
}
