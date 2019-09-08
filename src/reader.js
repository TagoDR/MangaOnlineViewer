import { isMobile } from './browser';
import htmlKeybinds from './components/keybinds.html';
import cssStyles from './components/styles.css';
import { icon, settings } from './settings';
import { themesCSS, themesSelector } from './themes';

const panel = `<div id='ImageOptions'>
  <div id='menu'>
    <span class='menuOuterArrow'><span class='menuInnerArrow'></span></span>
  </div>
  <div class='panel'>
    <img id='enlarge' alt='Enlarge' title='Enlarge' src='${icon.enlarge}' class='controlButton' />
    <img id='restore' alt='Restore' title='Restore' src='${icon.restore}' class='controlButton' />
    <img id='reduce' alt='Reduce' title='Reduce' src='${icon.reduce}' class='controlButton' />
    <img id='fitWidth' alt='Fit Width' title='Fit Width' src='${icon.fitWidth}' class='controlButton' />
    <img id='webComic' alt='Web Comic Mode' title='Web Comic Mode' src='${icon.webComic}' class='controlButton' />
    <img id='ltrMode' alt='Left to Right Mode' title='Left to Right Mode' src='${icon.pictureLeft}' class='controlButton'/>
    <img id='verticalMode' alt='Vertical Mode' title='Vertical Mode' src='${icon.pictureDown}' class='controlButton'/>
    <img id='rtlMode' alt='Right to Left Mode' title='Right to Left Mode' src='${icon.pictureRight}' class='controlButton'/>
    <img id='settings' alt='settings' title='settings' src='${icon.settings}' class='controlButton' />
  </div>
  <div id='Zoom' class='controlLabel'>Zoom: <b>${settings.Zoom}</b> %</div>
</div>`;
const controls = `<div id='ViewerControls' class='panel'>
  <span class='controlLabel ThemeSelector'>Theme:
    <input id='CustomThemeHue' class='jscolor' value='${settings.CustomTheme}' ${(settings.Theme
  !== 'Custom_Dark' && settings.Theme !== 'Custom_Light') ? 'style="display: none;"' : ''}'>
    <select id='ThemeSelector'>
      ${themesSelector}
    </select>
  </span>
  <span class='controlLabel loadMode'>Default Load Mode:
    <select id='loadMode'>
      <option value='normal' ${settings.loadMode === 'normal' ? 'selected' : ''}>Normal(Wait 3 sec)</option>
      <option value='always' ${settings.loadMode === 'always' ? 'selected' : ''}>Always(Immediately)</option>
      <option value='never' ${settings.loadMode === 'never' ? 'selected' : ''}>Never(Manually)</option>
    </select>
  </span>
  <span class='controlLabel PagesPerSecond'>Pages/Second:
    <select id='PagesPerSecond'>
      <option value='3000' ${settings.Timer === 3000 ? 'selected' : ''}>0.3(Slow)</option>
      <option value='2000' ${settings.Timer === 2000 ? 'selected' : ''}>0.5</option>
      <option value='1000' ${settings.Timer === 1000 ? 'selected' : ''}>01(Normal)</option>
      <option value='500' ${settings.Timer === 500 ? 'selected' : ''}>02</option>
      <option value='250' ${settings.Timer === 250 ? 'selected' : ''}>04(Fast)</option>
      <option value='125' ${settings.Timer === 125 ? 'selected' : ''}>08</option>
      <option value='100' ${settings.Timer === 100 ? 'selected' : ''}>10(Extreme)</option>
    </select>
  </span>
  <span class='controlLabel DefaultZoom'>Default Zoom:
    <select id='DefaultZoom'>
      <option value='50' ${settings.Zoom === 50 ? 'selected' : ''}>50%</option>
      <option value='75' ${settings.Zoom === 75 ? 'selected' : ''}>75%</option>
      <option value='100' ${settings.Zoom === 100 ? 'selected' : ''}>100%</option>
      <option value='125' ${settings.Zoom === 125 ? 'selected' : ''}>125%</option>
      <option value='150' ${settings.Zoom === 150 ? 'selected' : ''}>150%</option>
      <option value='175' ${settings.Zoom === 175 ? 'selected' : ''}>175%</option>
      <option value='200' ${settings.Zoom === 200 ? 'selected' : ''}>200%</option>
      <option value='1000' ${settings.Zoom === 1000 ? 'selected' : ''}>Fit Width</option>
    </select>
  </span>
  <span class='controlLabel viewMode'>Default View Mode:
    <select id='viewMode'>
      <option value='' ${settings.viewMode === '' ? 'selected' : ''}>Vertical</option>
      <option value='WebComic' ${settings.viewMode === 'WebComic' ? 'selected' : ''}>WebComic</option>
      <option value='FluidLTR' ${settings.viewMode === 'FluidLTR' ? 'selected' : ''}>Left to Right</option>
      <option value='FluidRTL' ${settings.viewMode === 'FluidRTL' ? 'selected' : ''}>Right to Left</option>
    </select>
  </span>
  <span class='controlLabel fitIfOversized'>Fit Width if Oversized:
    <input type='checkbox' value='true' name='fitIfOversized' id='fitIfOversized' ${(settings.FitWidthIfOversized ? 'checked' : '')}>
  </span>
  <span class='controlLabel showThumbnails'>Show Thumbnails:
    <input type='checkbox' value='true' name='showThumbnails' id='showThumbnails' ${(settings.ShowThumbnails ? 'checked' : '')}>
   </span>
   <span class='controlLabel lazyLoadImages'>Lazy Load Images:
    <input type='checkbox' value='true' name='lazyLoadImages' id='lazyLoadImages' ${(settings.lazyLoadImages ? 'checked' : '')}>
   </span>
  <span class='controlLabel downloadZip'>Download Images as Zip Automatically:
    <input type='checkbox' value='false' name='downloadZip' id='downloadZip' ${(settings.DownloadZip ? 'checked' : '')}>
  </span>
</div>`;
const chapterControl = R.curry((id, manga) => `<div id='${id}' class='ChapterControl'>
    <a href='#' class='download'>Download</a>
    <a class='prev' id='prev' href='${manga.prev || ''}' onclick='W.location="${manga.prev || ''}";W.location.reload();'>Previous</a>
    <a class='next' id='next' href='${manga.next || ''}' onclick='W.location="${manga.next || ''}";W.location.reload();'>Next</a>
</div>`);
const chapterControlTop = chapterControl('ChapterControlTop');
const chapterControlBottom = chapterControl('ChapterControlBottom');
const title = (manga) => `<div class='ViewerTitle'><br/><a id='series' href='${manga.series}'>${manga.title}<br/>(Return to Chapter List)</a></div>`;
// Add Pages Place holders
const listPages = R.times((index) => `<div id='Page${index + 1}' class='MangaPage'>
  <div class='PageFunctions'>
    <a class='Bookmark controlButton' title='Bookmark'></a>
    <a class='ZoomIn controlButton' title='Zoom In'></a>
    <a class='ZoomRestore controlButton' title='Zoom Restore'></a>
    <a class='ZoomOut controlButton' title='Zoom Out'></a>
    <a class='ZoomWidth controlButton' title='Zoom to Width'></a>
    <a class='Hide controlButton' title='Hide'></a>
    <a class='Reload controlButton' title='Reload'></a>
    <span>${index + 1}</span>
  </div>
  <div class='PageContent' style='display: none;'>
    <img id='PageImg${index + 1}' alt='PageImg${index + 1}' />
  </div>
</div>`);
const listOptions = R.times((index) => `<option value='${index + 1}'>${index + 1}</option>`);
const listThumbnails = R.times(
  (index) => `<div id='Thumbnail${index + 1}' class='Thumbnail'><img id='ThumbnailImg${index
  + 1}' alt='ThumbnailImg${index + 1}' src=''/><span>${index + 1}</span></div>`,
);
const body = (manga, begin = 0) => `
<div id='MangaOnlineViewer' class='${settings.Theme} ${isMobile ? 'mobile' : ''}'>
  ${title(manga)}
  <div id='Counters' class='controlLabel'>
    <i>0</i> of <b>${manga.quant}</b> Pages Loaded 
    <span class='controlLabel'>Go to Page:</span>
    <select id='gotoPage'>
      <option selected>#</option>
      ${listOptions(manga.quant).slice(begin).join('')}
    </select>
  </div>
  ${chapterControlTop(manga)}
  <div id='Chapter' class='${(settings.FitWidthIfOversized
=== true ? 'fitWidthIfOversized' : '')} ${settings.viewMode}'>
    ${listPages(manga.quant).slice(begin).join('')}    
  </div>
  ${title(manga)}
  ${chapterControlBottom(manga)}
  ${panel}    
  ${controls}
  ${htmlKeybinds}
  <div id='Navigation' class='panel ${settings.ShowThumbnails ? '' : 'disabled'}'>
    <div id='NavigationCounters' class='controlLabel'>
      <img alt='Thumbnails' title='Thumbnails' src='${icon.menu}' class='nav' /><i>0</i> of <b>${manga.quant}</b> Pages Loaded
    </div>
    <div id='Thumbnails'>
      ${listThumbnails(manga.quant).slice(begin).join('')}
    </div>
  </div>
  <a href='#' id='blob' style='display: none;'>Download</a>
</div>`;

// Inject CSS for this script
const readerCSS = `<style type='text/css'>
${cssStyles}
#MangaOnlineViewer .fitWidthIfOversized .PageContent img { max-width: ${$(window).width()}px;}
#MangaOnlineViewer .PageFunctions .Bookmark {background: url('${icon.bookmark}') no-repeat scroll center center transparent;}
#MangaOnlineViewer .PageFunctions .Reload {background: url('${icon.reload}') no-repeat scroll center center transparent;}
#MangaOnlineViewer .PageFunctions .Hide {background: url('${icon.hide}') no-repeat scroll center center transparent;}
#MangaOnlineViewer .PageFunctions .ZoomIn {background: url('${icon.zoomIn}') no-repeat scroll center center transparent;}
#MangaOnlineViewer .PageFunctions .ZoomOut {background: url('${icon.zoomOut}') no-repeat scroll center center transparent;}
#MangaOnlineViewer .PageFunctions .ZoomRestore {background: url('${icon.zoomRestore}') no-repeat scroll center center transparent;}
#MangaOnlineViewer .PageFunctions .ZoomWidth {background: url('${icon.zoomWidth}') no-repeat scroll center center transparent;}
</style>`;
const externalScripts = [
  '<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js" integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous"></script>',
  '<script src="https://cdnjs.cloudflare.com/ajax/libs/jszip/3.2.2/jszip.min.js" integrity="sha256-gy5W5/rXWluWXFRvMWFFMVhocfpBe7Tf4SW2WMfjs4E=" crossorigin="anonymous"></script>',
  '<script src="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.js" integrity="sha256-XWzSUJ+FIQ38dqC06/48sNRwU1Qh3/afjmJ080SneA8=" crossorigin="anonymous"></script>',
  '<script src="https://cdn.jsdelivr.net/npm/sweetalert2@8.16.1/dist/sweetalert2.min.js" integrity="sha256-eMnJEv7c7pNrl00kXIpjSRDEkBCijv3gGL2bOOyG7ZY=" crossorigin="anonymous"></script>',
  '<script src="https://cdnjs.cloudflare.com/ajax/libs/jscolor/2.0.4/jscolor.min.js" integrity="sha256-CJWfUCeP3jLdUMVNUll6yQx37gh9AKmXTRxvRf7jzro=" crossorigin="anonymous"></script>',
  '<script src="https://cdnjs.cloudflare.com/ajax/libs/color-scheme/1.0.1/color-scheme.min.js" integrity="sha256-7IUC8vhyoPLh1tuQJnffPB5VO6HpR4VWK4Y1ciOOoBY=" crossorigin="anonymous"></script>',
  '<script src="https://cdnjs.cloudflare.com/ajax/libs/ramda/0.26.1/ramda.min.js" integrity="sha256-43x9r7YRdZpZqTjDT5E0Vfrxn1ajIZLyYWtfAXsargA=" crossorigin="anonymous"></script>',
  '<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-scrollTo/2.1.2/jquery.scrollTo.min.js" integrity="sha256-7QS1cHsH75h3IFgrFKsdhmKHHpWqF82sb/9vNLqcqs0=" crossorigin="anonymous"></script>',
  '<script src="https://cdnjs.cloudflare.com/ajax/libs/unveil2/2.0.8/jquery.unveil2.min.js" integrity="sha256-B00tEEtJRbA9gas0viRdqVPI81EuZG+kYU978/alKt8=" crossorigin="anonymous"></script>',

];
const externalCSS = [
  '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" integrity="sha256-l85OmPOjvil/SOvVt3HnSSjzF1TUMyT9eV0c2BzEGzU=" crossorigin="anonymous" />',
  '<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/sweetalert2@8.16.1/dist/sweetalert2.css" integrity="sha256-k59BjMeOG0yTQ5DlmjApR918fjnoMKI9zsdP3iZaYhQ=" crossorigin="anonymous">',
  '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css" integrity="sha256-pMhcV6/TBDtqH9E9PWKgS+P32PVguLG8IipkPyqMtfY=" crossorigin="anonymous" />',
  '<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@gerhobbelt/keyscss@1.1.3-6/keys.css" integrity="sha256-a/1ebfXeoX0xLUcQCJLQsm6APQNBwrm03/XFcvW7xAI=" crossorigin="anonymous">',
];

function reader(manga, begin = 0) {
  return `
<head>
  <title>${manga.title}</title>
  <meta charset="UTF-8">
  ${externalScripts.join('\n')}
  ${externalCSS.join('\n')}
  ${readerCSS}
  ${themesCSS}
</head>
<body class='${settings.Theme}'>
  ${body(manga, begin > 0 ? begin - 1 : 0)}
</body>`;
}

export default reader;
