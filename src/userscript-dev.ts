/**
 * @file Entry point for the Manga Online Viewer "Development" userscript.
 * This script is used for local development and testing. It combines both the main (SFW)
 * and adult (NSFW) site lists to allow for comprehensive testing across all supported websites.
 */
import adult from './adult';
import start from './core/main';
import main from './main';
import { logScript } from './utils/tampermonkey';

// Combine all sites for development purposes.
const sites = [...main.slice(0, -3), ...adult, ...main.slice(-3)];

console.warn('Running in development mode');
// Initialize the script with the combined list of all sites.
start(sites).catch(logScript);
