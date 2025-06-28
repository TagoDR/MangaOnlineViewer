import _ from 'lodash';
import { keybindEditor, keybindList } from '../components/KeybindingsPanel';
import { getSettingsValue, setSettingsValue } from '../../core/settings';
import { isNothing } from '../../utils/checks';
import keybindings from './keybindings';
import { addEvent } from './common';

function toggleFunction(selector: string, classname: string, open: () => void, close: () => void) {
  return () => {
    const isOpen = document.querySelector(selector)?.className.includes(classname);
    if (isOpen) {
      close();
    } else {
      open();
    }
  };
}

function buttonHeaderClick() {
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

export function buttonSettingsOpen() {
  document.querySelector('#SettingsPanel')?.classList.add('visible');
  document.querySelector('#Navigation')?.classList.add('visible');
  document.querySelector('#Header')?.classList.add('visible');
  document.querySelector('#Overlay')?.classList.add('visible');
}

export function buttonSettingsClose() {
  document.querySelector('#SettingsPanel')?.classList.remove('visible');
  document.querySelector('#Navigation')?.classList.remove('visible');
  document.querySelector('#Header')?.classList.remove('visible');
  document.querySelector('#Overlay')?.classList.remove('visible');
}

export function buttonKeybindingsOpen() {
  document.querySelector('#KeybindingsList')!.innerHTML = keybindList().join('\n');
  document.querySelector('#SaveKeybindings')?.classList.add('hidden');
  document.querySelector('#EditKeybindings')?.classList.remove('hidden');
  document.querySelector('#KeybindingsPanel')?.classList.add('visible');
  document.querySelector('#Overlay')?.classList.add('visible');
}

export function buttonKeybindingsClose() {
  document.querySelector('#SaveKeybindings')?.classList.add('hidden');
  document.querySelector('#EditKeybindings')?.classList.remove('hidden');
  document.querySelector('#KeybindingsPanel')?.classList.remove('visible');
  document.querySelector('#Overlay')?.classList.remove('visible');
}

export function saveKeybindings() {
  const newkeybinds: Record<string, string[] | undefined> = getSettingsValue('keybinds');
  Object.keys(getSettingsValue('keybinds')).forEach(kb => {
    const keys = document
      .querySelector<HTMLInputElement>(`#${kb}`)
      ?.value.split(',')
      ?.map(value => value.trim());
    newkeybinds[kb] = isNothing(keys) ? undefined : keys;
  });
  setSettingsValue('keybinds', newkeybinds);
  document.querySelector('#KeybindingsList')!.innerHTML = keybindList().join('\n');
  document.querySelector('#SaveKeybindings')?.classList.add('hidden');
  document.querySelector('#EditKeybindings')?.classList.remove('hidden');
  keybindings();
}

export function editKeybindings() {
  document.querySelector('#KeybindingsList')!.innerHTML = keybindEditor().join('\n');
  document.querySelector('#SaveKeybindings')?.classList.remove('hidden');
  document.querySelector('#EditKeybindings')?.classList.add('hidden');
}

function panels() {
  // Show Header list
  document.querySelector('#menu')?.addEventListener('click', buttonHeaderClick);
  document.addEventListener('mousemove', _.throttle(headerHover, 300));
  // Settings Control
  document
    .querySelector('#settings')
    ?.addEventListener(
      'click',
      toggleFunction('#SettingsPanel', 'visible', buttonSettingsOpen, buttonSettingsClose),
    );
  document.querySelectorAll('.closeButton')?.forEach(addEvent('click', buttonSettingsClose));
  document.querySelector('#Overlay')?.addEventListener('click', buttonSettingsClose);
  // Keybindings list
  document.querySelector('#keybindings')?.addEventListener('click', buttonKeybindingsOpen);
  document.querySelectorAll('.closeButton')?.forEach(addEvent('click', buttonKeybindingsClose));
  document.querySelector('#Overlay')?.addEventListener('click', buttonKeybindingsClose);
  document.querySelector('#EditKeybindings')?.addEventListener('click', editKeybindings);
  document.querySelector('#SaveKeybindings')?.addEventListener('click', saveKeybindings);
}

export default panels;
