import main from './main';
import adult from './adult';
import start from './core/main';
import { logScript } from './utils/tampermonkey';

const sites = [...main.slice(0, -3), ...adult, ...main.slice(-3)];
start(sites).catch(logScript);
