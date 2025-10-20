/**
 * @file This is the entry point for the local development environment, which is not part of the production userscript builds.
 * It initializes the application with a mock `localhost` site configuration,
 * sets up handlers for local file uploads, and immediately displays the viewer UI.
 * This allows for rapid testing and development of the UI components without needing
 * to run the script on a live website.
 */

import start, { preparePage } from './core/main.ts';
import { allowUpload } from './core/upload';
import localhost from './main/localhost';

if (document.querySelector('manga-online-viewer')) {
  console.log('MangaOnlineViewer is already running');
} else {
  // Enable local file upload functionality.
  allowUpload();

  // Add a click listener to a test button for re-rendering the display.
  document
    .querySelector('#test')
    ?.addEventListener('click', () => start([{ ...localhost, url: /.*/ }]));

  // Immediately render the main application UI with the mock data.
  if (import.meta.env.MODE !== 'standalone')
    preparePage([{ ...localhost, start: 'always' }, await localhost.run()]);
}
