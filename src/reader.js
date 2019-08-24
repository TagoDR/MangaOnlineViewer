import cssStyles from './components/styles.css';
import shortcuts from './components/keybinds.html';
import { icon, settings } from './settings';
import { themesCSS, themesSelector } from './themes';

const panel = "<div id='ImageOptions'>\n  <div id='menu'>\n    <span class='menuOuterArrow'><span class='menuInnerArrow'></span></span>\n  </div>\n  <div class='panel'>\n    <img id='enlarge' alt='Enlarge' title='Enlarge' src='".concat(icon.enlarge, "' class='controlButton' />\n    <img id='restore' alt='Restore' title='Restore' src='").concat(icon.restore, "' class='controlButton' />\n    <img id='reduce' alt='Reduce' title='Reduce' src='").concat(icon.reduce, "' class='controlButton' />\n    <img id='fitWidth' alt='Fit Width' title='Fit Width' src='").concat(icon.fitWidth, "' class='controlButton' />\n    <img id='webComic' alt='Web Comic Mode' title='Web Comic Mode' src='")
  .concat(icon.webComic, "' class='controlButton' />\n    <img id='ltrMode' alt='Left to Right Mode' title='Left to Right Mode' src='")
  .concat(icon.pictureLeft, "' class='controlButton'/>\n    <img id='verticalMode' alt='Vertical Mode' title='Vertical Mode' src='")
  .concat(icon.pictureDown, "' class='controlButton'/>\n    <img id='rtlMode' alt='Right to Left Mode' title='Right to Left Mode' src='")
  .concat(icon.pictureRight, "' class='controlButton'/>\n    <img id='settings' alt='settings' title='settings' src='")
  .concat(icon.settings, "' class='controlButton' />\n  </div>\n  <div id='Zoom' class='controlLabel'>Zoom: <b>")
  .concat(settings.Zoom, '</b> %</div>\n</div>');
const controls = "<div id='ViewerControls' class='panel' style='display: none;'>\n  <span class='controlLabel'>Theme:\n    <input id='CustomThemeHue' class='jscolor' value='".concat(settings.CustomTheme, "' ").concat(settings.Theme !== 'Custom_Dark' && settings.Theme !== 'Custom_Light' ? 'style="display: none;"' : '', "'>\n    <select id='ThemeSelector'>\n      ").concat(themesSelector, "\n    </select>\n  </span>\n  <span class='controlLabel'>Default Load Mode:\n    <select id='loadMode'>\n      <option value='normal' ").concat(settings.loadMode === 'normal' ? 'selected' : '', ">Normal(Wait 3 sec)</option>\n      <option value='always' ")
  .concat(settings.loadMode === 'always' ? 'selected' : '', ">Always(Immediately)</option>\n      <option value='never' ")
  .concat(settings.loadMode === 'never' ? 'selected' : '', ">Never(Manually)</option>\n    </select>\n  </span>\n  <span class='controlLabel'>Pages/Second:\n    <select id='PagesPerSecond'>\n      <option value='3000' ")
  .concat(settings.Timer === 3000 ? 'selected' : '', ">0.3(Slow)</option>\n      <option value='2000' ")
  .concat(settings.Timer === 2000 ? 'selected' : '', ">0.5</option>\n      <option value='1000' ")
  .concat(settings.Timer === 1000 ? 'selected' : '', ">01(Normal)</option>\n      <option value='500' ")
  .concat(settings.Timer === 500 ? 'selected' : '', ">02</option>\n      <option value='250' ")
  .concat(settings.Timer === 250 ? 'selected' : '', ">04(Fast)</option>\n      <option value='125' ")
  .concat(settings.Timer === 125 ? 'selected' : '', ">08</option>\n      <option value='100' ")
  .concat(settings.Timer === 100 ? 'selected' : '', ">10(Extreme)</option>\n    </select>\n  </span>\n  <span class='controlLabel'>Default Zoom:\n    <select id='DefaultZoom'>\n      <option value='50' ")
  .concat(settings.Zoom === 50 ? 'selected' : '', ">50%</option>\n      <option value='75' ")
  .concat(settings.Zoom === 75 ? 'selected' : '', ">75%</option>\n      <option value='100' ")
  .concat(settings.Zoom === 100 ? 'selected' : '', ">100%</option>\n      <option value='125' ")
  .concat(settings.Zoom === 125 ? 'selected' : '', ">125%</option>\n      <option value='150' ")
  .concat(settings.Zoom === 150 ? 'selected' : '', ">150%</option>\n      <option value='175' ")
  .concat(settings.Zoom === 175 ? 'selected' : '', ">175%</option>\n      <option value='200' ")
  .concat(settings.Zoom === 200 ? 'selected' : '', ">200%</option>\n      <option value='1000' ")
  .concat(settings.Zoom === 1000 ? 'selected' : '', ">Fit Width</option>\n    </select>\n  </span>\n  <span class='controlLabel'>Default View Mode:\n    <select id='viewMode'>\n      <option value='' ")
  .concat(settings.viewMode === '' ? 'selected' : '', ">Vertical</option>\n      <option value='WebComic' ")
  .concat(settings.viewMode === 'WebComic' ? 'selected' : '', ">WebComic</option>\n      <option value='FluidLTR' ")
  .concat(settings.viewMode === 'FluidLTR' ? 'selected' : '', ">Left to Right</option>\n      <option value='FluidRTL' ")
  .concat(settings.viewMode === 'FluidRTL' ? 'selected' : '', ">Right to Left</option>\n    </select>\n  </span>\n  <span class='controlLabel'>Fit Width if Oversized:\n    <input type='checkbox' value='true' name='fitIfOversized' id='fitIfOversized' ")
  .concat(settings.FitWidthIfOversized ? 'checked' : '', ">\n  </span>\n  <span class='controlLabel'>Show Thumbnails:\n    <input type='checkbox' value='true' name='showThumbnails' id='showThumbnails' ")
  .concat(settings.ShowThumbnails ? 'checked' : '', ">\n   </span>\n   <span class='controlLabel'>Lazy Load Images:\n    <input type='checkbox' value='true' name='lazyLoadImages' id='lazyLoadImages' ")
  .concat(settings.lazyLoadImages ? 'checked' : '', ">\n   </span>\n  <span class='controlLabel'>Download Images as Zip Automatically:\n    <input type='checkbox' value='false' name='downloadZip' id='downloadZip' ")
  .concat(settings.DownloadZip ? 'checked' : '', '>\n  </span>\n</div>');
const chapterControl = R.curry((id, target, manga) => "<div id='".concat(id, "' class='ChapterControl'>\n    <a id='bottom' href='#").concat(target, "' style='display: none;'>Bottom</a>\n    <a href='#' class='download'>Download</a>\n    <a class='prev' id='prev' href='").concat(manga.prev || '', "' onclick='W.location=\"").concat(manga.prev || '', "\";W.location.reload();'>Previous</a>\n    <a class='next' id='next' href='")
  .concat(manga.next || '', "' onclick='W.location=\"")
  .concat(manga.next || '', "\";W.location.reload();'>Next</a>\n</div>"));
const chapterControlTop = chapterControl('ChapterControlTop', 'ChapterControlBottom');
const chapterControlBottom = chapterControl('ChapterControlBottom', 'MangaOnlineViewer');

const title = (manga) => "<div class='ViewerTitle'><br/><a id='series' href='".concat(manga.series, "'>").concat(manga.title, '<br/>(Return to Chapter List)</a></div>'); // Add Pages Place holders


const listPages = R.times((index) => "<div id='Page".concat(index + 1, "' class='MangaPage'>\n  <div class='PageFunctions'>\n    <a class='Bookmark controlButton' title='Bookmark'></a>\n    <a class='ZoomIn controlButton' title='Zoom In'></a>\n    <a class='ZoomRestore controlButton' title='Zoom Restore'></a>\n    <a class='ZoomOut controlButton' title='Zoom Out'></a>\n    <a class='ZoomWidth controlButton' title='Zoom to Width'></a>\n    <a class='Hide controlButton' title='Hide'></a>\n    <a class='Reload controlButton' title='Reload'></a>\n    <span>").concat(index + 1, "</span>\n  </div>\n  <div class='PageContent' style='display: none;'>\n    <img id='PageImg").concat(index + 1, "' alt='PageImg").concat(index + 1, "' />\n  </div>\n</div>"));
const listOptions = R.times((index) => "<option value='".concat(index + 1, "'>").concat(index + 1, '</option>'));
const listThumbnails = R.times((index) => "<div id='Thumbnail".concat(index + 1, "' class='Thumbnail'><img id='ThumbnailImg").concat(index + 1, "' alt='ThumbnailImg").concat(index + 1, "' src=''/><span>").concat(index + 1, '</span></div>'));

const body = (manga, begin = 0) => "<div id='MangaOnlineViewer' class='".concat(settings.Theme, "' style='min-height: 1080px;'>\n  ").concat(title(manga), '\n  ').concat(chapterControlTop(manga), "\n  <div id='Chapter' style='text-align:center' class='").concat(settings.FitWidthIfOversized === true ? 'fitWidthIfOversized' : '', ' ')
  .concat(settings.viewMode, "'>\n    ")
  .concat(listPages(manga.quant).slice(begin).join(''), '    \n  </div>\n  ')
  .concat(title(manga), '\n  ')
  .concat(chapterControlBottom(manga), '\n  ')
  .concat(panel, '    \n  ')
  .concat(controls, '\n  ')
  .concat(shortcuts, "    \n  <div id='Counters' class='controlLabel'>\n    <i>0</i> of <b>")
  .concat(manga.quant, "</b> Pages Loaded \n    <span class='controlLabel'>Go to Page:</span>\n    <select id='gotoPage'>\n      <option selected>#</option>\n      ")
  .concat(listOptions(manga.quant).slice(begin).join(''), "\n    </select>\n  </div>\n  <div id='Navigation' style='text-align:center' class='panel ")
  .concat(settings.ShowThumbnails ? '' : 'disabled', "'>\n    <div id='NavigationCounters' class='controlLabel'>\n      <img alt='Thumbnails' title='Thumbnails' src='")
  .concat(icon.menu, "' class='nav' /><i>0</i> of <b>")
  .concat(manga.quant, "</b> Pages Loaded\n    </div>\n    <div id='Thumbnails'>\n      ")
  .concat(listThumbnails(manga.quant).slice(begin).join(''), "\n    </div>\n  </div>\n  <a href='#' id='blob' style='display: none;'>Download</a>\n</div>"); // Inject CSS for this script


const readerCSS = "<style type='text/css'>\n".concat(cssStyles, '\n#MangaOnlineViewer .fitWidthIfOversized .PageContent img { max-width: ').concat($(window).width(), "px;}\n#MangaOnlineViewer .PageFunctions .Bookmark {background: url('").concat(icon.bookmark, "') no-repeat scroll center center transparent;}\n#MangaOnlineViewer .PageFunctions .Reload {background: url('").concat(icon.reload, "') no-repeat scroll center center transparent;}\n#MangaOnlineViewer .PageFunctions .Hide {background: url('")
  .concat(icon.hide, "') no-repeat scroll center center transparent;}\n#MangaOnlineViewer .PageFunctions .ZoomIn {background: url('")
  .concat(icon.zoomIn, "') no-repeat scroll center center transparent;}\n#MangaOnlineViewer .PageFunctions .ZoomOut {background: url('")
  .concat(icon.zoomOut, "') no-repeat scroll center center transparent;}\n#MangaOnlineViewer .PageFunctions .ZoomRestore {background: url('")
  .concat(icon.zoomRestore, "') no-repeat scroll center center transparent;}\n#MangaOnlineViewer .PageFunctions .ZoomWidth {background: url('")
  .concat(icon.zoomWidth, "') no-repeat scroll center center transparent;}\n</style>");
const externalScripts = ['<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js" integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous"></script>', '<script src="https://cdnjs.cloudflare.com/ajax/libs/jszip/3.2.2/jszip.min.js" integrity="sha256-gy5W5/rXWluWXFRvMWFFMVhocfpBe7Tf4SW2WMfjs4E=" crossorigin="anonymous"></script>', '<script src="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.js" integrity="sha256-XWzSUJ+FIQ38dqC06/48sNRwU1Qh3/afjmJ080SneA8=" crossorigin="anonymous"></script>', '<script src="https://cdn.jsdelivr.net/npm/sweetalert2@8.16.1/dist/sweetalert2.min.js" integrity="sha256-eMnJEv7c7pNrl00kXIpjSRDEkBCijv3gGL2bOOyG7ZY=" crossorigin="anonymous"></script>', '<script src="https://cdnjs.cloudflare.com/ajax/libs/jscolor/2.0.4/jscolor.min.js" integrity="sha256-CJWfUCeP3jLdUMVNUll6yQx37gh9AKmXTRxvRf7jzro=" crossorigin="anonymous"></script>', '<script src="https://cdnjs.cloudflare.com/ajax/libs/color-scheme/1.0.1/color-scheme.min.js" integrity="sha256-7IUC8vhyoPLh1tuQJnffPB5VO6HpR4VWK4Y1ciOOoBY=" crossorigin="anonymous"></script>', '<script src="https://cdnjs.cloudflare.com/ajax/libs/ramda/0.26.1/ramda.min.js" integrity="sha256-43x9r7YRdZpZqTjDT5E0Vfrxn1ajIZLyYWtfAXsargA=" crossorigin="anonymous"></script>', '<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-scrollTo/2.1.2/jquery.scrollTo.min.js" integrity="sha256-7QS1cHsH75h3IFgrFKsdhmKHHpWqF82sb/9vNLqcqs0=" crossorigin="anonymous"></script>', '<script src="https://cdnjs.cloudflare.com/ajax/libs/unveil2/2.0.8/jquery.unveil2.min.js" integrity="sha256-B00tEEtJRbA9gas0viRdqVPI81EuZG+kYU978/alKt8=" crossorigin="anonymous"></script>'];
const externalCSS = ['<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" integrity="sha256-l85OmPOjvil/SOvVt3HnSSjzF1TUMyT9eV0c2BzEGzU=" crossorigin="anonymous" />', '<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/sweetalert2@8.16.1/dist/sweetalert2.css" integrity="sha256-k59BjMeOG0yTQ5DlmjApR918fjnoMKI9zsdP3iZaYhQ=" crossorigin="anonymous">', '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css" integrity="sha256-pMhcV6/TBDtqH9E9PWKgS+P32PVguLG8IipkPyqMtfY=" crossorigin="anonymous" />', '<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@gerhobbelt/keyscss@1.1.3-6/keys.css" integrity="sha256-a/1ebfXeoX0xLUcQCJLQsm6APQNBwrm03/XFcvW7xAI=" crossorigin="anonymous">'];

function reader(manga, begin = 0) {
  return '\n<head>\n  <title>'.concat(manga.title, '</title>\n  <meta charset="UTF-8">\n  ').concat(externalScripts.join('\n'), '\n  ').concat(externalCSS.join('\n'), '\n  ').concat(readerCSS, '\n  ')
    .concat(themesCSS, "\n</head>\n<body class='")
    .concat(settings.Theme, "'>\n  ")
    .concat(body(manga, begin > 0 ? begin - 1 : 0), '\n</body>');
}

export default reader;
