import _ from 'lodash';
import {
  changeAppStateValue,
  getAppStateValue,
  getSettingsValue,
  saveSettingsValue,
  setAppStateValue,
} from '../../core/settings';
import { isNothing } from '../../utils/checks';
import keybindings from './keybindings';

export function buttonHeaderClick() {
  changeAppStateValue('header', h => !h);
}

export function isMouseInsideRegion(event: MouseEvent, headerWidth: number, headerHeight: number) {
  // Check if the mouse is inside the region
  return (
    event.clientX >= 0 &&
    event.clientX <= headerWidth &&
    event.clientY >= 0 &&
    event.clientY <= headerHeight
  );
}

export function headerHover(event: MouseEvent) {
  const header = getAppStateValue('render')?.querySelector('#Header');
  if (getSettingsValue('header') === 'hover') {
    if (header && isMouseInsideRegion(event, header?.clientWidth, header?.clientHeight)) {
      setAppStateValue('header', true);
    } else {
      setAppStateValue('header', false);
    }
  }
}

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

function panels() {
  // Show Header list
  window.addEventListener('mousemove', _.throttle(headerHover, 300));
}

export default panels;
