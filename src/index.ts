/**
 * @file This is the entry point for the local development environment, which is not part of the production userscript builds.
 * It initializes the application with a mock `localhost` site configuration,
 * sets up handlers for local file uploads, and immediately displays the viewer UI.
 * This allows for rapid testing and development of the UI components without needing
 * to run the script on a live website.
 */
import { html, render } from 'lit';
import { preparePage } from './core/main.ts';
import localhost from './main/localhost';
import './ui/StandaloneLanding.ts';
import { requiredScripts } from './core/externals.ts';
import { isStandalone } from './utils/tampermonkey.ts';

(async () => {
  if (document.querySelector('manga-online-viewer')) {
    console.log('MangaOnlineViewer is already running');
    return;
  }

  console.log('Loading required scripts...', requiredScripts);
  await Promise.all(
    requiredScripts.map(
      src =>
        new Promise((resolve, reject) => {
          const script = document.createElement('script');
          script.src = src;
          script.onload = () => {
            console.log(`Loaded: ${src}`);
            resolve(null);
          };
          script.onerror = () => {
            console.error(`Failed to load: ${src}`);
            reject(new Error(`Failed to load script: ${src}`));
          };
          document.head.appendChild(script);
        }),
    ),
  ).catch(err => {
    console.error('Critical error loading scripts:', err);
  });
  console.log('Scripts loaded, initializing application...');

  // Immediately render the main application UI with the mock data.
  try {
    if (window.location.search === '') {
      await preparePage([{ ...localhost, start: 'always' }, await localhost.run()]);
    } else {
      render(
        html`<standalone-landing ?test="${!isStandalone()}"></standalone-landing>`,
        document.body,
      );
    }
  } catch (err) {
    console.error('Initialization error:', err);
    document.body.innerHTML = `<div style="color: red; padding: 20px;">
      <h1>MangaOnlineViewer Initialization Error</h1>
      <pre>${err instanceof Error ? err.stack : JSON.stringify(err)}</pre>
    </div>`;
  }
})();
