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
const shortcuts = `<div id='ViewerShortcuts' class='panel' style='display: none;'>
<kbd class='dark'>Numpad 5</kbd>/<kbd class='dark'>X</kbd>/<kbd class='dark'>/</kbd>: Open Settings<br/>
<kbd class='dark'>Numpad +</kbd>/<kbd class='dark'>Q</kbd>/<kbd class='dark'>=</kbd>: Global Zoom in pages (enlarge)<br/>
<kbd class='dark'>Numpad -</kbd>/<kbd class='dark'>E</kbd>/<kbd class='dark'>-</kbd>: Global Zoom out pages (reduce)<br/>
<kbd class='dark'>Numpad /</kbd>/<kbd class='dark'>R</kbd>/<kbd class='dark'>9</kbd>: Global Restore pages to original<br/>
<kbd class='dark'>Numpad *</kbd>/<kbd class='dark'>F</kbd>/<kbd class='dark'>0</kbd>: Global Fit window width<br/>
<kbd class='dark'>Numpad 6</kbd>/<kbd class='dark'>D</kbd>/<kbd class='dark'>.</kbd>/<kbd class="dark">→</kbd>: Next Chapter<br/>
<kbd class='dark'>Numpad 4</kbd>/<kbd class='dark'>A</kbd>/<kbd class='dark'>,</kbd>/<kbd class="dark">←</kbd>: Previous Chapter<br/>
<kbd class='dark'>Numpad 8</kbd>/<kbd class='dark'>W</kbd>: Scroll Up<br/>
<kbd class='dark'>Numpad 2</kbd>/<kbd class='dark'>S</kbd>: Scroll Down<br/>
</div>`;
const controls = `<div id='ViewerControls' class='panel' style='display: none;'>
  <span class='controlLabel'>Theme:
    <input id='CustomThemeHue' class='jscolor' value='${settings.CustomTheme}' ${(settings.Theme
  !== 'Custom_Dark' && settings.Theme !== 'Custom_Light') ? 'style="display: none;"' : ''}'>
    <select id='ThemeSelector'>
      ${themesSelector}
    </select>
  </span>
  <span class='controlLabel'>Default Load Mode:
    <select id='loadMode'>
      <option value='normal' ${settings.loadMode === 'normal' ? 'selected' : ''}>Normal(Wait 3 sec)</option>
      <option value='always' ${settings.loadMode === 'always' ? 'selected' : ''}>Always(Immediately)</option>
      <option value='never' ${settings.loadMode === 'never' ? 'selected' : ''}>Never(Manually)</option>
    </select>
  </span>
  <span class='controlLabel'>Pages/Second:
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
  <span class='controlLabel'>Default Zoom:
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
  <span class='controlLabel'>Default View Mode:
    <select id='viewMode'>
      <option value='' ${settings.viewMode === '' ? 'selected' : ''}>Vertical</option>
      <option value='WebComic' ${settings.viewMode === 'WebComic' ? 'selected' : ''}>WebComic</option>
      <option value='FluidLTR' ${settings.viewMode === 'FluidLTR' ? 'selected' : ''}>Left to Right</option>
      <option value='FluidRTL' ${settings.viewMode === 'FluidRTL' ? 'selected' : ''}>Right to Left</option>
    </select>
  </span>
  <span class='controlLabel'>Fit Width if Oversized:
    <input type='checkbox' value='true' name='fitIfOversized' id='fitIfOversized' ${(settings.FitWidthIfOversized ? 'checked' : '')}>
  </span>
  <span class='controlLabel'>Show Thumbnails:
    <input type='checkbox' value='true' name='showThumbnails' id='showThumbnails' ${(settings.ShowThumbnails ? 'checked' : '')}>
   </span>
   <span class='controlLabel'>Lazy Load Images:
    <input type='checkbox' value='true' name='lazyLoadImages' id='lazyLoadImages' ${(settings.lazyLoadImages ? 'checked' : '')}>
   </span>
  <span class='controlLabel'>Download Images as Zip Automatically:
    <input type='checkbox' value='false' name='downloadZip' id='downloadZip' ${(settings.DownloadZip ? 'checked' : '')}>
  </span>
</div>`;
const chapterControl = R.curry((id, target, manga) => `<div id='${id}' class='ChapterControl'>
    <a id='bottom' href='#${target}' style='display: none;'>Bottom</a>
    <a href='#' class='download'>Download</a>
    <a class='prev' id='prev' href='${manga.prev || ''}' onclick='W.location="${manga.prev || ''}";W.location.reload();'>Previous</a>
    <a class='next' id='next' href='${manga.next || ''}' onclick='W.location="${manga.next || ''}";W.location.reload();'>Next</a>
</div>`);
const chapterControlTop = chapterControl('ChapterControlTop', 'ChapterControlBottom');
const chapterControlBottom = chapterControl('ChapterControlBottom', 'MangaOnlineViewer');
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
const body = (manga, begin = 0) => `<div id='MangaOnlineViewer' class='${settings.Theme}' style='min-height: 1080px;'>
  ${title(manga)}
  ${chapterControlTop(manga)}
  <div id='Chapter' style='text-align:center' class='${(settings.FitWidthIfOversized
=== true ? 'fitWidthIfOversized' : '')} ${settings.viewMode}'>
    ${listPages(manga.quant).slice(begin).join('')}    
  </div>
  ${title(manga)}
  ${chapterControlBottom(manga)}
  ${panel}    
  ${controls}
  ${shortcuts}    
  <div id='Counters' class='controlLabel'>
    <i>0</i> of <b>${manga.quant}</b> Pages Loaded 
    <span class='controlLabel'>Go to Page:</span>
    <select id='gotoPage'>
      <option selected>#</option>
      ${listOptions(manga.quant).slice(begin).join('')}
    </select>
  </div>
  <div id='Navigation' style='text-align:center' class='panel ${settings.ShowThumbnails ? '' : 'disabled'}'>
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
const readerCSS = `<style type='text/css'>html{font-size:100%}
body{margin:0;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:14px;line-height:20px;color:#333;background-color:#FFF;padding:0}
a{color:#08C;text-decoration:none}
img{height:auto;max-width:100%;vertical-align:middle;border:0 none}
/*button,input,select,textarea{margin:0;font-size:100%;vertical-align:middle}
button,input{line-height:normal}
label,input,button,select,textarea{font-size:14px;font-weight:normal;line-height:20px}
input,button,select,textarea{font-family:'Helvetica Neue',Helvetica,Arial,sans-serif}
select,textarea,input[type='text'],input[type='password'],input[type='datetime'],input[type='datetime-local'],input[type='date'],input[type='month'],input[type='time'],input[type='week'],input[type='number'],input[type='email'],input[type='url'],input[type='search'],input[type='tel'],input[type='color'],.uneditable-input{display:inline-block;height:20px;padding:4px 6px;margin-bottom:10px;font-size:14px;line-height:20px;color:#555;vertical-align:middle;border-radius:4px 4px 4px 4px}
input:not([type='checkbox']),textarea,.uneditable-input{width:206px}
textarea,input[type='text'],input[type='password'],input[type='datetime'],input[type='datetime-local'],input[type='date'],input[type='month'],input[type='time'],input[type='week'],input[type='number'],input[type='email'],input[type='url'],input[type='search'],input[type='tel'],input[type='color'],.uneditable-input{background-color:#FFF;border:1px solid #CCC;box-shadow:0 1px 1px rgba(0,0,0,0.075) inset;transition:border .2s linear 0,box-shadow .2s linear 0}
input,textarea,.uneditable-input{margin-left:0}*/
#nprogress .bar{background:#29d;position:fixed;z-index:1031;top:0;left:0;width:100%;height:4px;}
#MangaOnlineViewer{width:100%;height:100%;padding-bottom: 100px;}
#MangaOnlineViewer #Chapter{text-align:center;margin: 25px auto 0;display:block;}
#MangaOnlineViewer #Chapter.WebComic .PageFunctions {position: relative;}
#MangaOnlineViewer #Chapter.WebComic .PageContent {margin-top: -23px; margin-bottom: 0;}
#MangaOnlineViewer #Chapter.FluidLTR .MangaPage {width: auto;}
#MangaOnlineViewer #Chapter.FluidRTL .MangaPage {width: auto;}
#MangaOnlineViewer #Chapter.FluidLTR {direction: ltr;}
#MangaOnlineViewer #Chapter.FluidRTL {direction: rtl;}
#MangaOnlineViewer #ViewerControls{padding: 8px;position:fixed;top:0;left:332px;width:auto;}
#MangaOnlineViewer #ViewerShortcuts{padding: 8px;position:fixed;top:65px;left:0;}
#ViewerControls .controlLabel {display: list-item; list-style: none;}
#MangaOnlineViewer select{height:20px;padding:0;margin-bottom:5px}
#MangaOnlineViewer .controlButton{cursor:pointer;border:0 none;}
#MangaOnlineViewer #ImageOptions {left: 0;position: absolute;top: 0;width: 332px;}
#MangaOnlineViewer #ImageOptions .panel {padding:5px;position: inherit;}
#MangaOnlineViewer #ImageOptions:hover {position:fixed;}
#MangaOnlineViewer #ImageOptions.settingsOpen {position:fixed;}
#MangaOnlineViewer #ImageOptions #menu {position:fixed;height: 64px;width: 200px;top: 0;}
#MangaOnlineViewer #ImageOptions #Zoom {position:absolute;left: 18px;bottom: -65px;}
#MangaOnlineViewer .MangaPage{width:100%;display:inline-block;text-align:center;transform: translate3d(0, 0, 0);backface-visibility: hidden;perspective: 1000px;-webkit-backface-visibility: hidden;-webkit-perspective: 1000px;-moz-transform: translate3d(0, 0, 0);-moz-backface-visibility: hidden;-moz-perspective: 1000px;}
#MangaOnlineViewer .PageContent{margin:0 0 15px;text-align:center;display:inline-block}
#MangaOnlineViewer #gotoPage{width:35px;}
#MangaOnlineViewer #ThemeSelector{width:110px;}
#MangaOnlineViewer .ChapterControl{-moz-user-select:none;-webkit-user-select: none;margin-right:120px;margin-top: 1px;float: right;}
#MangaOnlineViewer .ChapterControl a{display:inline-block;width: 80px;height:25px;text-align:center;margin-left: 3px;margin-bottom: -1px;}
#MangaOnlineViewer .ChapterControl a[href='#'],#MangaOnlineViewer .ChapterControl a[href='']{visibility:hidden}
#MangaOnlineViewer .ViewerTitle{display: block;text-align: center;height:35px;}
#MangaOnlineViewer #Counters {position: absolute;right: 10px;top: 10px;}
#MangaOnlineViewer .PageFunctions{-moz-user-select:none;-webkit-user-select: none;font-family:monospace;font-size:10pt;padding-right:120px;text-align:right}
#MangaOnlineViewer .PageFunctions>span{min-width:20px;text-align:center;display:inline-block;padding:2px 10px}
#MangaOnlineViewer .PageFunctions > a {height: 16px;width: 16px; padding: 10px;}
#MangaOnlineViewer .PageFunctions a{opacity:0.2}
#MangaOnlineViewer .PageFunctions:hover a{opacity:1}
#MangaOnlineViewer #NavigationCounters {margin-top: 5px;width: 100%;}
#MangaOnlineViewer #Navigation {bottom: -180px;height: 190px;overflow-x: hidden;overflow-y: hidden;padding-bottom: 20px;position: fixed;white-space: nowrap;width: 100%;}
#MangaOnlineViewer #Navigation #Thumbnails {overflow-x:auto;overflow-y: hidden;}
#MangaOnlineViewer #Navigation:hover {bottom: 0;}
#MangaOnlineViewer #Navigation.disabled {display: none;}
#MangaOnlineViewer #Navigation.visible {bottom: 0;}
#MangaOnlineViewer #Navigation .Thumbnail {display: inline-block;height: 150px;margin: 0 5px;position: relative;}
#MangaOnlineViewer #Navigation .Thumbnail span {display: block;opacity: 0.8;position: relative;top: -30px;width: 100%;}
#MangaOnlineViewer #Navigation .Thumbnail img {align-content: center;cursor: pointer;display: inline-block;margin-bottom: -10px;margin-top: 10px;max-height: 150px;min-height: 150px;min-width: 100px;}
#MangaOnlineViewer #Navigation .nav {transform: rotate(-90deg);;}
#MangaOnlineViewer #ImageOptions .menuOuterArrow  {width: 0;height: 0;border-top: 10px solid transparent;border-bottom: 10px solid transparent;border-left:10px solid blue;display: inline-block;position: absolute;bottom: 0;}
#MangaOnlineViewer #ImageOptions .menuInnerArrow {width: 0;height: 0;border-top: 5px solid transparent;border-bottom: 5px solid transparent;border-left:5px solid white;left: -10px;position: absolute;top: -5px;display: inline-block;}
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
