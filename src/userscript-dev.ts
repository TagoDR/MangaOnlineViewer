import main from './main';
import adult from './adult';
import localhost from './main/localhost';
import start from './core/viewer';
import { ISite } from './types';

const sites = [...adult, ...main, localhost as ISite];
// console.log('Main:', main.length);
// console.log('Adult:', adult.length);
// console.log('All:', sites.length);
start(sites);
