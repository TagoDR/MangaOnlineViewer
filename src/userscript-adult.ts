/**
 * @file Entry point for the Manga Online Viewer "Adult" (NSFW) userscript.
 * This script imports the list of adult-oriented websites and initializes the main
 * application logic to run on them.
 */
import sites from './adult';
import start from './core/main';
import { logScript } from './utils/tampermonkey';

// Initialize the script with the list of adult sites.
start(sites).catch(logScript);
