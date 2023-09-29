import sites from './adult';
import start from './core/main.ts';
import { logScript } from './utils/tampermonkey';

start(sites).catch(logScript);
