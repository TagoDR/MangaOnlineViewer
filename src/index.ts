/**
 * @file This is the entry point for the local development environment.
 * It initializes the application with a mock `localhost` site configuration,
 * sets up handlers for local file uploads, and immediately displays the viewer UI.
 * This allows for rapid testing and development of the UI components without needing
 * to run the script on a live website.
 */

import { preparePage } from './core/main.ts';
import { allowUpload } from './core/upload';
import localhost from './main/localhost';
import display from './ui';

// Immediately execute the localhost site configuration to get the mock manga data.
const site = await localhost.run();

// Enable local file upload functionality.
allowUpload();

// Add a click listener to a test button for re-rendering the display.
document.querySelector('#test')?.addEventListener('click', () => preparePage([localhost, site]));

// Immediately render the main application UI with the mock data.
display(site);
