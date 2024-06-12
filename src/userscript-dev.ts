import main from './main';
import adult from './adult';
import start from './core/main';
import { logScript } from './utils/tampermonkey';

const sites = [...main, ...adult];
start(sites).catch(logScript);
