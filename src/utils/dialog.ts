/**
 * This file provides utility functions for creating and managing dialogs, replacing SweetAlert functionality.
 * It uses the custom <mov-dialog> component to create responsive and interactive prompts.
 */
import 'toolcool-range-slider';
import 'toolcool-range-slider/dist/plugins/tcrs-generated-labels.min.js';
import 'toolcool-range-slider/dist/plugins/tcrs-marks.min';
import 'toolcool-range-slider/dist/plugins/tcrs-moving-tooltip.min.js';
import type { RangeSlider } from 'toolcool-range-slider';
import { getLocaleString } from '../core/settings';
import '../ui/components/Dialog';
import '../ui/components/Button';
import startButton from '../ui/styles/startButton.css?inline';
import { html } from './code-tag';

/**
 * Creates and displays a modal dialog to inform the user the script is about to run.
 * The dialog has a "Start Now" button and a "Cancel" button.
 * It automatically resolves after a timeout.
 * @param {number} [timeoutMs=3000] - The timeout in milliseconds to auto-resolve.
 * @returns {Promise<void>} A promise that resolves if the user confirms or the timer runs out,
 * and rejects if the user cancels.
 */
export function initialPrompt(timeoutMs = 3000): Promise<void> {
  return new Promise((resolve, reject) => {
    const dialog = document.createElement('mov-dialog');
    dialog.innerHTML = html`
      <span slot="label">${getLocaleString('STARTING')}</span>
      <div style="padding: 1rem;">${getLocaleString('WAITING')}</div>
      <div
        slot="footer"
        style="display: flex; justify-content: space-between; padding: 0.5rem 1rem 1rem;"
      >
        <mov-button id="mov-cancel-button"> Cancel </mov-button>
        <mov-button id="mov-start-button"> Start Now </mov-button>
      </div>
    `;
    document.body.append(dialog);

    let resolved = false;
    const timeoutId = setTimeout(() => {
      if (document.body.contains(dialog)) {
        resolved = true;
        dialog.close();
        resolve();
      }
    }, timeoutMs);

    dialog.addEventListener('close', () => {
      clearTimeout(timeoutId);
      if (!resolved) {
        reject(new Error('Dialog closed by user'));
      }
      dialog.remove();
    });

    dialog.querySelector('#mov-start-button')?.addEventListener('click', () => {
      resolved = true;
      dialog.close();
      resolve();
    });

    dialog.querySelector('#mov-cancel-button')?.addEventListener('click', () => {
      dialog.close();
    });

    dialog.open = true;
  });
}

/**
 * Creates and displays a modal dialog with a range slider for page selection.
 * @param {number} mangaPages - The total number of pages.
 * @param {number} [begin=1] - The initial starting page.
 * @returns {Promise<{begin: number, end: number}>} A promise that resolves with the selected
 * page range, or rejects if the user cancels.
 */
export function lateStart(mangaPages: number, begin = 1): Promise<{ begin: number; end: number }> {
  return new Promise((resolve, reject) => {
    let beginPage = begin;
    let endPage = mangaPages;

    const dialog = document.createElement('mov-dialog');
    dialog.innerHTML = html`
      <span slot="label">${getLocaleString('STARTING')}</span>
      <div style="padding: 1rem;">
        ${getLocaleString('CHOOSE_BEGINNING')}
        <div
          id="pageInputGroup"
          style="padding: 1rem 0;"
        >
          <tc-range-slider
            id="pagesSlider"
            min="1"
            max="${mangaPages}"
            round="1"
            step="1"
            value1="${beginPage}"
            value2="${endPage}"
            marks="true"
            marks-count="${Math.ceil(mangaPages / 10)}"
            marks-values-count="${Math.ceil(mangaPages / 20)}"
            generate-labels="true"
            slider-width="100%"
            range-dragging="true"
            pointers-overlap="false"
            moving-tooltip="true"
          ></tc-range-slider>
        </div>
      </div>
      <div
        slot="footer"
        style="display: flex; justify-content: flex-end; gap: 0.5rem; padding: 0.5rem 1rem 1rem;"
      >
        <mov-button id="mov-close-button"> Close </mov-button>
        <mov-button id="mov-run-button"> Run </mov-button>
      </div>
    `;
    document.body.append(dialog);

    const slider = dialog.querySelector<RangeSlider>('#pagesSlider');
    slider?.addEventListener('change', (evt: Event) => {
      const detail = (evt as CustomEvent).detail;
      [beginPage, endPage] = [detail.value1, detail.value2];
    });

    let resolved = false;
    dialog.addEventListener('close', () => {
      if (!resolved) {
        reject(new Error('Dialog closed by user'));
      }
      dialog.remove();
    });

    dialog.querySelector('#mov-run-button')?.addEventListener('click', () => {
      resolved = true;
      dialog.close();
      resolve({ begin: beginPage, end: endPage });
    });

    dialog.querySelector('#mov-close-button')?.addEventListener('click', () => {
      dialog.close();
    });

    dialog.open = true;
  });
}

/**
 * Creates and injects a button to start the manga viewer later.
 * @param {() => void} onClick - The function to execute when the button is clicked.
 */
export function createLateStartButton(onClick: () => void): void {
  const button = document.createElement('button');
  button.innerText = getLocaleString('BUTTON_START');
  button.id = 'StartMOV';
  button.onclick = onClick;
  document.body.appendChild(button);

  const style = document.createElement('style');
  style.appendChild(document.createTextNode(startButton));
  document.head.appendChild(style);
}
