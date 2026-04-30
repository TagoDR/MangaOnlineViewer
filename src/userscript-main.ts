/**
 * @file Entry point for the main (SFW) Manga Online Viewer userscript.
 * This script imports the list of SFW (Safe for Work) websites and initializes the main
 * application logic to run on them.
 */
import start from './core/main';
import sites from './main';
import { logScript } from './utils/tampermonkey';

// Initialize the script with the list of SFW sites.
start(sites).catch(logScript);
