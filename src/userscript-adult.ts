/**
 * @file Entry point for the Manga Online Viewer "Adult" (NSFW) userscript.
 * This script imports the list of adult-oriented websites and initializes the main
 * application logic to run on them.
 */
import sites from './adult/index.ts';
import start from './core/main.ts';
import { logScript } from './utils/tampermonkey.ts';

// Initialize the script with the list of adult sites.
start(sites).catch(logScript);
