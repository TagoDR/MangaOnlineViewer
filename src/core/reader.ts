import cssStyles from './styles.js';
import { externalCSS, externalScripts } from './externals.js';
import { icon, settings } from './settings.js';
import { themesCSS } from './themes.js';
import { IManga } from '../types/IManga.js';
import { body } from './components/App.js';

// Inject CSS for this script
const readerCSS = `<style type='text/css'>
${cssStyles}
#MangaOnlineViewer .PageFunctions .Bookmark {background: url('${icon.bookmark}') no-repeat scroll center center transparent;}
#MangaOnlineViewer .PageFunctions .Reload {background: url('${icon.reload}') no-repeat scroll center center transparent;}
#MangaOnlineViewer .PageFunctions .Hide {background: url('${icon.hide}') no-repeat scroll center center transparent;}
#MangaOnlineViewer .PageFunctions .ZoomIn {background: url('${icon.zoomIn}') no-repeat scroll center center transparent;}
#MangaOnlineViewer .PageFunctions .ZoomOut {background: url('${icon.zoomOut}') no-repeat scroll center center transparent;}
#MangaOnlineViewer .PageFunctions .ZoomRestore {background: url('${icon.zoomRestore}') no-repeat scroll center center transparent;}
#MangaOnlineViewer .PageFunctions .ZoomWidth {background: url('${icon.zoomWidth}') no-repeat scroll center center transparent;}
#MangaOnlineViewer .PageFunctions .ZoomHeight {background: url('${icon.zoomWidth}') no-repeat scroll center center transparent;}
</style>`;

export function head(manga: IManga) {
  return `
<head>
  <title>${manga.title}</title>
  <meta charset='UTF-8'>
  ${externalScripts.join('\n')}
  ${externalCSS.join('\n')}
  ${readerCSS}
  ${themesCSS}
</head>
`;
}

function reader(manga: IManga, begin = 0) {
  return `
${head(manga)}
<body class='${settings.Theme}'>
  ${body(manga, begin > 0 ? begin - 1 : 0)}
</body>`;
}

export default reader;
