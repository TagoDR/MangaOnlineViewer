import main from './main';
import adult from './adult';
import localhost from './main/localhost';
import start from './core/viewer';

const sites = [...main, ...adult, localhost];
// console.log('Main:', main.length);
// console.log('Adult:', adult.length);
// console.log('All:', sites.length);
start(sites);
