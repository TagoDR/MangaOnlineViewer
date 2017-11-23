import {
  settings,
  icon,
} from './settings';
import {
  themesCSS,
  themesSelector,
} from './themes';

const painel = `
<div id='ImageOptions'>
  <div id='menu'>
    <span class='menuOuterArrow'><span class='menuInnerArrow'></span></span>
  </div>
  <div class='painel'>
    <img id='enlarge' title='Enlarge' src='${icon.enlage}' class='controlButton' />
    <img id='restore' title='Restore' src='${icon.restore}' class='controlButton' />
    <img id='reduce' title='Reduce' src='${icon.reduce}' class='controlButton' />
    <img id='fitwidth' title='Fit Width' src='${icon.fitwidth}' class='controlButton' />
    <img id='webcomic' title='Web Comic Mode' src='${icon.webcomic}' class='controlButton' />
    <img id='ltrmode' title='Left to Right Mode' src='${icon.pictureleft}' class='controlButton'/>
    <img id='verticalmode' title='Vertical Mode' src='${icon.picturedown}' class='controlButton'/>
    <img id='rtlmode' title='Right to Left Mode' src='${icon.pictureright}' class='controlButton'/>
    <img id='settings' title='settings' src='${icon.settings}' class='controlButton' />
  </div>
  <div id='Zoom' class='controlLable'>Zoom: <b>${settings.Zoom}</b> %</div>
</div>`;
const shortcuts = `
<div id='ViewerShortcuts' class='painel' style='display: none;'>
  <span class='key'>+</span> or <span class='key'>=</span> : Global Zoom in pages (enlarge)<br/>
  <span class='key'>-</span> : Global Zoom out pages (reduce)<br/>
  <span class='key'>*</span> or <span class='key'>8</span> : Global Restore pages to original<br/>
  <span class='key'>5</span> : Global Fit window width<br/>
  <span class='key'>Arrow Right</span> or <span class='key'>.</span> : Next Chapter<br/>
  <span class='key'>Arrow Left</span> or <span class='key'>,</span> : Previous Chapter<br/>
</div>`;
const controls = `
<div id='ViewerControls' class='painel' style='display: none;'>
  <span class='controlLable'>Theme:
    <input id='CustomThemeHue' class='jscolor' value='${settings.CustomTheme}' ${(settings.Theme
  !== 'Custom_Dark' && settings.Theme !== 'Custom_Light') ? 'style="display: none;"' : ''}'>
    <select id='ThemeSelector'>
      ${themesSelector}
    </select>
  </span>
  <span class='controlLable'>Pages/Second:
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
  <span class='controlLable'>Default Zoom:
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
  <span class='controlLable'>Fit Width if Oversized:
    <input type='checkbox' val='true' name='fitIfOversized' id='fitIfOversized' ${(settings.FitWidthIfOversized ? 'checked' : '')}>
  </span>
  <span class='controlLable'>Show Thumbnails:
    <input type='checkbox' val='true' name='showThumbnails' id='showThumbnails' ${(settings.ShowThumbnails ? 'checked' : '')}>
   </span>
  <span class='controlLable'>Default View Mode:
    <select id='viewMode'>
      <option value='' ${settings.viewMode === '' ? 'selected' : ''}>Vertical</option>
      <option value='WebComic' ${settings.viewMode === 'WebComic' ? 'selected' : ''}>WebComic</option>
      <option value='FluidLTR' ${settings.viewMode === 'FluidLTR' ? 'selected' : ''}>Left to Right</option>
      <option value='FluidRTL' ${settings.viewMode === 'FluidRTL' ? 'selected' : ''}>Right to Left</option>
    </select>
  </span>
  <span class='controlLable'>Download Images as Zip Automatically:
    <input type='checkbox' val='false' name='downloadZip' id='downloadZip' ${(settings.DownloadZip ? 'checked' : '')}>
  </span>
  <span class='controlLable'>Always Load Script:
    <input type='checkbox' val='true' name='alwaysLoad' id='alwaysLoad' ${(settings.alwaysLoad ? 'checked' : '')}>
  </span>
</div>`;
const chapterControl = R.curry((id, target, manga) => `
<div id='${id}' class='ChapterControl'>
    <a id='bottom' href='#${target}' style='display: none;'>Bottom</a>
    <a href='#' class='download'>Download</a>
    <a class='prev' id='prev' href='${manga.prev || ''}' onclick='location="${manga.prev || ''}";location.reload();'>Previous</a>
    <a class='next' id='next' href='${manga.next || ''}' onclick='location="${manga.next || ''}";location.reload();'>Next</a>
</div>`);
const chapterControlTop = chapterControl('ChapterControlTop', 'ChapterControlBottom');
const chapterControlBottom = chapterControl('ChapterControlBottom', 'MangaOnlineViewer');
const title = manga => `<div class='ViewerTitle'><br/><a id='series' href='${manga.series}'>${manga.title}<br/>(Return to Chapter List)</a></div>`;
// Add Pages Place holders
const listPages = R.times(index => `
<div id='Page${index + 1}' class='MangaPage'>
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
const listOptions = R.times(index => `<option value='${index + 1}'>${index + 1}</option>`);
const listThumbnails = R.times(
  index => `<div id='ThumbNail${index + 1}' class='ThumbNail'><img id='ThumbNailImg${index
  + 1}' alt='ThumbNailImg${index + 1}' src=''/><span>${index + 1}</span></div>`);
const body = (manga, begin = 0) => `
<div id='MangaOnlineViewer' class='${settings.Theme}' style='min-height: 1080px;'>
  ${title(manga)}
  ${chapterControlTop(manga)}
  <div id='Chapter' align='center' class='${(settings.FitWidthIfOversized
=== true ? 'fitWidthIfOversized' : '')} ${settings.viewMode}'>
    ${listPages(manga.quant).slice(begin).join('')}    
  </div>
  ${title(manga)}
  ${chapterControlBottom(manga)}
  ${painel}    
  ${controls}
  ${shortcuts}    
  <div id='Counters' class='controlLable'>
    <i>0</i> of <b>${manga.quant}</b> Pages Loaded 
    <span class='controlLable'>Go to Page:</span>
    <select id='gotoPage'>
      <option selected>#</option>
      ${listOptions(manga.quant).slice(begin).join('')}
    </select>
  </div>
  <div id='Navigation' align='center' class='painel ${settings.ShowThumbnails ? '' : 'disabled'}'>
    <div id='NavigationCounters' class='controlLable'>
      <img title='Thumbnails' src='${icon.menu}' class='nav' /><i>0</i> of <b>${manga.quant}</b> Pages Loaded
    </div>
    ${listThumbnails(manga.quant).slice(begin).join('')}
  </div>
  <a href='#' id='blob' style='display: none;'>Download</a>
</div>`;

// Inject CSS for this script
const readerCSS = `
<style type='text/css'>html{font-size:100%}
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
.key{display:inline;display:inline-block;min-width:1em;padding:.2em .3em;font:400 .85em/1 'Lucida Grande',Lucida,Arial,sans-serif;text-align:center;text-decoration:none;-moz-border-radius:.3em;-webkit-border-radius:.3em;border-radius:.3em;border:none;cursor:default;-moz-user-select:none;-webkit-user-select:none;user-select:none}
.key[title]{cursor:help}
.key, .dark-keys,.dark-keys .key,.key.dark{background:#505050;background:-moz-linear-gradient(top,#3c3c3c,#505050);background:-webkit-gradient(linear,left top,left bottom,from(#3c3c3c),to(#505050));color:#fafafa;text-shadow:-1px -1px 0 #464646;-moz-box-shadow:inset 0 0 1px #969696,inset 0 -.05em .4em #505050,0 .1em 0 #1e1e1e,0 .1em .1em rgba(0,0,0,.3);-webkit-box-shadow:inset 0 0 1px #969696,inset 0 -.05em .4em #505050,0 .1em 0 #1e1e1e,0 .1em .1em rgba(0,0,0,.3);box-shadow:inset 0 0 1px #969696,inset 0 -.05em .4em #505050,0 .1em 0 #1e1e1e,0 .1em .1em rgba(0,0,0,.3)}
.light-keys,.light-keys .key,.key.light{background:#fafafa;background:-moz-linear-gradient(top,#d2d2d2,#fff);background:-webkit-gradient(linear,left top,left bottom,from(#d2d2d2),to(#fff));color:#323232;text-shadow:0 0 2px #fff;-moz-box-shadow:inset 0 0 1px #fff,inset 0 0 .4em #c8c8c8,0 .1em 0 #828282,0 .11em 0 rgba(0,0,0,.4),0 .1em .11em rgba(0,0,0,.9);-webkit-box-shadow:inset 0 0 1px #fff,inset 0 0 .4em #c8c8c8,0 .1em 0 #828282,0 .11em 0 rgba(0,0,0,.4),0 .1em .11em rgba(0,0,0,.9);box-shadow:inset 0 0 1px #fff,inset 0 0 .4em #c8c8c8,0 .1em 0 #828282,0 .11em 0 rgba(0,0,0,.4),0 .1em .11em rgba(0,0,0,.9)}
#MangaOnlineViewer{width:100%;height:100%;padding-bottom: 100px;}
#MangaOnlineViewer #Chapter{text-align:center;margin: 25px auto 0;display:block;}
#MangaOnlineViewer #Chapter.WebComic .PageFunctions {position: relative;}
#MangaOnlineViewer #Chapter.WebComic .PageContent {margin-top: -23px; margin-bottom: 0;}
#MangaOnlineViewer #Chapter.FluidLTR .MangaPage {width: auto;}
#MangaOnlineViewer #Chapter.FluidRTL .MangaPage {width: auto;}
#MangaOnlineViewer #Chapter.FluidLTR {direction: ltr;}
#MangaOnlineViewer #Chapter.FluidRTL {direction: rtl;}
#MangaOnlineViewer #ViewerControls{padding: 8px;position:fixed;top:0;left:332px;width:auto;}
#MangaOnlineViewer #ViewerShortcuts{padding: 8px;position:fixed;top:65px;left:0px;}
#ViewerControls .controlLable {display: list-item; list-style: none;}
#MangaOnlineViewer select{height:20px;padding:0;margin-bottom:5px}
#MangaOnlineViewer .controlButton{cursor:pointer;border:0 none;}
#MangaOnlineViewer #ImageOptions {left: 0px;position: absolute;top: 0px;width: 332px;}
#MangaOnlineViewer #ImageOptions .painel {padding:4.5px;position: inherit;}
#MangaOnlineViewer #ImageOptions:hover {position:fixed;}
#MangaOnlineViewer #ImageOptions.settingsOpen {position:fixed;}
#MangaOnlineViewer #ImageOptions #menu {position:fixed;top: 45px;height: 64px;width: 200px;top: 0;}
#MangaOnlineViewer #ImageOptions #Zoom {position:absolute;left: 18px;bottom: -65px;}
#MangaOnlineViewer .MangaPage{width:100%;display:inline-block;text-align:center;align:center;transform: translate3d(0, 0, 0);backface-visibility: hidden;perspective: 1000;(0, 0, 0);-webkit-backface-visibility: hidden;-webkit-perspective: 1000;-moz-transform: translate3d(0, 0, 0);-moz-backface-visibility: hidden;-moz-perspective: 1000;}
#MangaOnlineViewer .PageContent{margin:0 0 15px;text-align:center;display:inline-block}
#MangaOnlineViewer #gotoPage{width:35px;}
#MangaOnlineViewer #ThemeSelector{width:110px;}
#MangaOnlineViewer #PagesPerSecond{width:46px;}
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
#MangaOnlineViewer #Navigation {bottom: -170px;height: 180px;overflow: auto;overflow-x: auto;overflow-y: hidden;padding-bottom: 20px;position: fixed;white-space: nowrap;width: 100%;}
#MangaOnlineViewer #Navigation:hover {bottom: 0;}
#MangaOnlineViewer #Navigation.disabled {display: none;}
#MangaOnlineViewer #Navigation.visible {bottom: 0;}
#MangaOnlineViewer #Navigation .ThumbNail {display: inline-block;height: 150px;margin: 0 5px;position: relative;}
#MangaOnlineViewer #Navigation .ThumbNail span {display: block;opacity: 0.8;position: relative;top: -30px;width: 100%;}
#MangaOnlineViewer #Navigation .ThumbNail img {align-content: center;cursor: pointer;display: inline-block;margin-bottom: -10px;margin-top: 10px;max-height: 150px;min-height: 150px;min-width: 100px;}
#MangaOnlineViewer #Navigation .nav {behavior:url(-ms-transform.htc);-moz-transform:rotate(-90deg);-webkit-transform:rotate(-90deg);-o-transform:rotate(-90deg);}
#MangaOnlineViewer #ImageOptions .menuOuterArrow  {width: 0;height: 0;border-top: 10px solid transparent;border-bottom: 10px solid transparent;border-left:10px solid blue;display: inline-block;position: absolute;bottom: 0;}
#MangaOnlineViewer #ImageOptions .menuInnerArrow {width: 0;height: 0;border-top: 5px solid transparent;border-bottom: 5px solid transparent;border-left:5px solid white;left: -10px;position: absolute;top: -5px;display: inline-block;}
#MangaOnlineViewer .fitWidthIfOversized .PageContent img { max-width: ${$(window).width()}px;}
#MangaOnlineViewer .PageFunctions .Bookmark {background: url('${icon.bookmark}') no-repeat scroll center center transparent;}
#MangaOnlineViewer .PageFunctions .Reload {background: url('${icon.reload}') no-repeat scroll center center transparent;}
#MangaOnlineViewer .PageFunctions .Hide {background: url('${icon.hide}') no-repeat scroll center center transparent;}
#MangaOnlineViewer .PageFunctions .ZoomIn {background: url('${icon.zoomin}') no-repeat scroll center center transparent;}
#MangaOnlineViewer .PageFunctions .ZoomOut {background: url('${icon.zoomout}') no-repeat scroll center center transparent;}
#MangaOnlineViewer .PageFunctions .ZoomRestore {background: url('${icon.zoomrestore}') no-repeat scroll center center transparent;}
#MangaOnlineViewer .PageFunctions .ZoomWidth {background: url('${icon.zoomwidth}') no-repeat scroll center center transparent;}
</style>`;
const externalScripts = [
  '<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js" integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4=" crossorigin="anonymous"></script>',
  '<script src="https://cdnjs.cloudflare.com/ajax/libs/jszip/3.1.3/jszip.min.js" integrity="sha256-RbP/rbx4XeYJH6eYUniR63Jk5NEV48Gjestg49cNSWY=" crossorigin="anonymous"></script>',
  '<script src="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.js" integrity="sha256-XWzSUJ+FIQ38dqC06/48sNRwU1Qh3/afjmJ080SneA8=" crossorigin="anonymous"></script>',
  '<script src="https://cdnjs.cloudflare.com/ajax/libs/limonte-sweetalert2/6.10.1/sweetalert2.all.min.js" integrity="sha256-Cx9rA5vmyLN1w4VBrMl1cCaCD5FN7K+H1uTpf0/V+7s=" crossorigin="anonymous"></script>',
  '<script src="https://cdnjs.cloudflare.com/ajax/libs/color-js/1.0.1/color.min.js" integrity="sha256-qAjuzGZ65rH+O8iRUmRdRCgk33HmM0Gbq15CwUsxW3k=" crossorigin="anonymous"></script>',
  '<script src="https://cdnjs.cloudflare.com/ajax/libs/color-scheme/1.0.0/color-scheme.min.js" integrity="sha256-DonUU+7nLBqoy0pdfzuUbr+5bdhcMcnKdF2MhfkjvGs=" crossorigin="anonymous"></script>',
  '<script src="https://cdnjs.cloudflare.com/ajax/libs/ramda/0.24.1/ramda.min.js" integrity="sha256-yF1J6hzNIWN398K1d+n1XXGC3JEchH55G05dxM+rsFk=" crossorigin="anonymous"></script>',

];
const externalCSS = [
  '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.min.css" integrity="sha256-HxaKz5E/eBbvhGMNwhWRPrAR9i/lG1JeT4mD6hCQ7s4=" crossorigin="anonymous" />',
  '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css" integrity="sha256-pMhcV6/TBDtqH9E9PWKgS+P32PVguLG8IipkPyqMtfY=" crossorigin="anonymous" />',
  '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/limonte-sweetalert2/6.10.1/sweetalert2.min.css" integrity="sha256-dFCwuhCfoeoBeMuViN7hhbZEZW7takATo0uQ8SzZSI8=" crossorigin="anonymous" />',
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
