import { render } from 'lit';
import _ from 'lodash';
import { getSettingsValue, saveSettingsValue, setAppStateValue } from '../../core/settings';
import { isNothing } from '../../utils/checks';
import { keybindEditor, keybindList } from '../components/KeybindingsPanel';
import keybindings from './keybindings';

export function toggleFunction(
  selector: string,
  classname: string,
  open: () => void,
  close: () => void,
) {
  return () => {
    const isOpen = document.querySelector(selector)?.className.includes(classname);
    if (isOpen) {
      close();
    } else {
      open();
    }
  };
}

export function buttonHeaderClick() {
  const header = document.querySelector('#Header');
  if (header?.classList.contains('click')) {
    header?.classList.toggle('visible');
  }
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
  const header = document.querySelector('#Header');
  if (header?.classList.contains('hover')) {
    if (isMouseInsideRegion(event, header.clientWidth, header.clientHeight)) {
      document.querySelector('#menu')?.classList.add('hide');
      header?.classList.add('visible');
    } else {
      document.querySelector('#menu')?.classList.remove('hide');
      header?.classList.remove('visible');
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
  const keybindingList = document.querySelector('#KeybindingsList');
  if (keybindingList) keybindingList.innerHTML = keybindList().join('\n');
  setAppStateValue('panel', 'keybindings');
}

export function saveKeybindings() {
  const newkeybinds: Record<string, string[] | undefined> = getSettingsValue('keybinds');
  Object.keys(getSettingsValue('keybinds')).forEach((kb) => {
    const keys = document
      .querySelector<HTMLInputElement>(`#${kb}`)
      ?.value.split(',')
      ?.map((value) => value.trim());
    newkeybinds[kb] = isNothing(keys) ? undefined : keys;
  });
  saveSettingsValue('keybinds', newkeybinds);
  const keybindingList = document.querySelector<HTMLElement>('#KeybindingsList');
  if (keybindingList) render(keybindList(), keybindingList);
  document.querySelector('#SaveKeybindings')?.classList.add('hidden');
  document.querySelector('#EditKeybindings')?.classList.remove('hidden');
  keybindings();
}

export function editKeybindings() {
  const keybindingList = document.querySelector<HTMLElement>('#KeybindingsList');
  if (keybindingList) render(keybindEditor(), keybindingList);
  document.querySelector('#SaveKeybindings')?.classList.remove('hidden');
  document.querySelector('#EditKeybindings')?.classList.add('hidden');
}

function panels() {
  // Show Header list
  document.addEventListener('mousemove', _.throttle(headerHover, 300));
}

export default panels;
