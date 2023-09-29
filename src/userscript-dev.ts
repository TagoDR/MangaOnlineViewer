import main from './main';
import adult from './adult';
import localhost from './main/localhost';
import start from './core/main.ts';
import type { ISite } from './types';
import { logScript } from './utils/tampermonkey';

const sites = [...adult, ...main, localhost as ISite];
start(sites).catch(logScript);
