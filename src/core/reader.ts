import cssStyles from './components/styles';
import { externalCSS, externalScripts } from './externals';
import settings from './settings';
import { themesCSS } from './themes';
import { IManga } from '../types';

// Inject CSS for this script
const readerCSS = `<style id='Reader' type='text/css'>
${cssStyles}
</style>`;

function head(manga: IManga) {
  return `
<head>
  <title>${manga.title}</title>
  <meta charset='UTF-8'>
  ${externalScripts.join('\n')}
  ${externalCSS.join('\n')}
  ${readerCSS}
  ${themesCSS}
  <style id='MinZoom' type='text/css'>
    #MangaOnlineViewer .PageContent .PageImg {min-width: ${settings.minZoom}vw;}
  </style>
</head>
`;
}
export default head;
