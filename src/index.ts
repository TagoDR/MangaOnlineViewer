/**
 * @file This is the entry point for the local development environment, which is not part of the production userscript builds.
 * It initializes the application with a mock `localhost` site configuration,
 * sets up handlers for local file uploads, and immediately displays the viewer UI.
 * This allows for rapid testing and development of the UI components without needing
 * to run the script on a live website.
 */

import { html, render } from 'lit-html';
import { preparePage } from './core/main.ts';
import localhost from './main/localhost';
import './ui/StandaloneLanding.ts';
import { isStandalone } from './utils/tampermonkey.ts';

(async () => {
  if (document.querySelector('manga-online-viewer')) {
    console.log('MangaOnlineViewer is already running');
    return;
  }

  // Immediately render the main application UI with the mock data.
  if (window.location.search === '') {
    preparePage([{ ...localhost, start: 'always' }, await localhost.run()]);
  } else {
    render(
      html`<standalone-landing ?test="${!isStandalone()}"></standalone-landing>`,
      document.body,
    );
  }
})();
