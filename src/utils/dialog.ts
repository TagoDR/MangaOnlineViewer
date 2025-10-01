/**
 * This file provides utility functions for creating and managing dialogs, replacing SweetAlert functionality.
 * It uses the custom <mov-dialog> component to create responsive and interactive prompts.
 */
import 'toolcool-range-slider/dist/plugins/tcrs-generated-labels.min.js';
import 'toolcool-range-slider/dist/plugins/tcrs-marks.min';
import 'toolcool-range-slider';
import type { RangeSlider } from 'toolcool-range-slider';
import { getLocaleString } from '../core/settings';
import '../ui/components/Dialog';
import '../ui/components/Button';
import startButton from '../ui/styles/startButton.css?inline';
import { html } from './code-tag';

import '../ui/components/Icon.ts';
import colors from './colors.ts';
import sequence from './sequence.ts';

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
    dialog.icon = 'info';
    dialog.innerHTML = html`
      <span slot="label">${getLocaleString('STARTING')}</span>
      <div style="padding: 1rem;">${getLocaleString('WAITING')}</div>
      <div
        slot="footer"
        style="display: flex; justify-content: space-between; padding: 0.5rem 1rem 1rem;"
      >
        <mov-button
          id="mov-cancel-button"
          style="--mov-color-fill-loud:  ${colors.red[700]}; --mov-color-on-loud: white;"
        >
          Cancel
        </mov-button>
        <mov-button
          id="mov-start-button"
          style="--mov-color-fill-loud:  ${colors.green[700]}; --mov-color-on-loud: white;"
        >
          Start Now
        </mov-button>
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
    dialog.icon = 'question';
    dialog.innerHTML = html`
      <span slot="label">${getLocaleString('STARTING')}</span>
      <div style="padding: 1rem;">
        ${getLocaleString('CHOOSE_BEGINNING')}
        <div id="pageInputGroup" style="padding: 1rem 0;">
          <tc-range-slider
            id="pagesSlider"
            theme="glass"
            css-links="https://cdn.jsdelivr.net/npm/toolcool-range-slider@4.0.28/dist/plugins/tcrs-themes.min.css"
            min="1"
            max="${mangaPages}"
            round="0"
            step="1"
            value1="${beginPage}"
            value2="${endPage}"
            data="${sequence(mangaPages).join(', ')}"
            marks="true"
            marks-count="11"
            marks-values-count="11"
            generate-labels="true"
            slider-width="100%"
            pointers-overlap="false"
            pointers-min-distance="1"
            generate-labels-text-color="var(--mov-color-on-loud)"
          ></tc-range-slider>
        </div>
      </div>
      <div
        slot="footer"
        style="display: flex; justify-content: flex-end; gap: 0.5rem; padding: 0.5rem 1rem 1rem;"
      >
        <mov-button
          id="mov-close-button"
          style="--mov-color-fill-loud:  ${colors.red[700]}; --mov-color-on-loud: white;"
        >
          Close
        </mov-button>
        <mov-button
          id="mov-run-button"
          style="--mov-color-fill-loud:  ${colors.green[700]}; --mov-color-on-loud: white;"
        >
          Run
        </mov-button>
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

/**
 * Displays a non-interactive informational dialog.
 * @param {object} options - The options for the dialog.
 * @param {string} options.title - The title of the dialog.
 * @param {string} options.html - The HTML content of the dialog.
 * @param {'info'|'warning'|'success'|'error'} [options.icon] - The icon to display.
 * @param {number} [options.timer] - An optional timer in ms to auto-close the dialog.
 */
export function showInfoDialog(options: {
  title: string;
  html: string;
  icon?: 'info' | 'warning' | 'success' | 'error' | 'question';
  timer?: number;
}): void {
  const dialog = document.createElement('mov-dialog');

  if (options.icon) {
    dialog.icon = options.icon;
  }

  dialog.innerHTML = html`
    <span slot="label">${options.title}</span>
    <div style="padding: 1rem;">${options.html}</div>
    <div
      slot="footer"
      style="display: flex; justify-content: flex-end; padding: 0.5rem 1rem 1rem;"
    >
      <mov-button id="mov-info-ok-button">OK</mov-button>
    </div>
  `;

  document.body.append(dialog);

  const closeDialog = () => {
    if (document.body.contains(dialog)) {
      dialog.close();
    }
  };

  if (options.timer) {
    setTimeout(closeDialog, options.timer);
  }

  dialog.addEventListener('close', () => {
    dialog.remove();
  });

  dialog.querySelector('#mov-info-ok-button')?.addEventListener('click', closeDialog);

  dialog.open = true;
}
