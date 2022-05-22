import { isMobile } from './browser.js';
import htmlKeybinds from './components/keybinds.js';
import cssStyles from './components/styles.js';
import { externalCSS, externalScripts } from './externals.js';
import { icon, settings } from './settings.js';
import { themesCSS, themesSelector } from './themes.js';
import { IManga } from './interfaces.js';

const panel = `<div id='ImageOptions'>
  <div id='menu'>
    <span class='menuOuterArrow'><span class='menuInnerArrow'></span></span>
  </div>
  <div class='panel'>
    <img id='enlarge' alt='Enlarge' title='Enlarge' src='${icon.enlarge}' class='controlButton' />
    <img id='restore' alt='Restore' title='Restore' src='${icon.restore}' class='controlButton' />
    <img id='reduce' alt='Reduce' title='Reduce' src='${icon.reduce}' class='controlButton' />
    <img id='fitWidth' alt='Fit Width' title='Fit Width' src='${icon.fitWidth}' class='controlButton' />
    <img id='fitHeight' alt='Fit Height' title='Fit Height' src='${icon.fitHeight}' class='controlButton' />
    <img id='webComic' alt='Web Comic Mode' title='Web Comic Mode' src='${icon.webComic}' class='controlButton' />
    <img id='ltrMode' alt='Left to Right Mode' title='Left to Right Mode' src='${icon.pictureLeft}' class='controlButton'/>
    <img id='verticalMode' alt='Vertical Mode' title='Vertical Mode' src='${icon.pictureDown}' class='controlButton'/>
    <img id='rtlMode' alt='Right to Left Mode' title='Right to Left Mode' src='${icon.pictureRight}' class='controlButton'/>
    <img id='pageControls' alt='Toggle Page Controls' title='Toggle Page Controls' src='${icon.controls}' class='controlButton'/>
    <img id='settings' alt='settings' title='settings' src='${icon.settings}' class='controlButton' />
  </div>
  <div id='Zoom' class='controlLabel'>Zoom: <b>${settings.Zoom}</b> %</div>
</div>`;
const controls = `<div id='ViewerControls' class='panel'>
  <span class='controlLabel ThemeSelector'>Theme:
    <select id='ThemeSelector'>
      ${themesSelector}
    </select>
      <span class='CustomTheme' ${
        settings.Theme !== 'Custom_Dark' && settings.Theme !== 'Custom_Light'
          ? 'style="display: none;"'
          : ''
      }><br/>-Base:<input id='CustomThemeHue' value='${
  settings.CustomTheme
}' class='colorpicker CustomTheme'></span>
      <span class='FullCustom' ${
        settings.Theme !== 'Full_Custom' ? 'style="display: none;"' : ''
      }><br/>-Body:<input id='CustomThemeHueBody' value='${
  settings.CustomThemeBody
}' class='colorpicker FullCustom'></span>
      <span class='FullCustom' ${
        settings.Theme !== 'Full_Custom' ? 'style="display: none;"' : ''
      }><br/>-Text:<input id='CustomThemeHueText' value=${
  settings.CustomThemeText
}' class='colorpicker FullCustom'></span>
      <span class='FullCustom' ${
        settings.Theme !== 'Full_Custom' ? 'style="display: none;"' : ''
      }><br/>-Lines:<input id='CustomThemeHueLines' value='${
  settings.CustomThemeLines
}' class='colorpicker FullCustom'></span>
      <span class='FullCustom' ${
        settings.Theme !== 'Full_Custom' ? 'style="display: none;"' : ''
      }><br/>-Painels:<input id='CustomThemeHuePanel' value='${
  settings.CustomThemePanel
}' class='colorpicker FullCustom'></span>
      <span class='FullCustom' ${
        settings.Theme !== 'Full_Custom' ? 'style="display: none;"' : ''
      }><br/>-Buttons:<input id='CustomThemeHueButton' value='${
  settings.CustomThemeButton
}' class='colorpicker FullCustom'></span>
  </span>
  <span class='controlLabel loadMode'>Default Load Mode:
    <select id='loadMode'>
      <option value='normal' ${
        settings.loadMode === 'normal' ? 'selected' : ''
      }>Normal(Wait 3 sec)</option>
      <option value='always' ${
        settings.loadMode === 'always' ? 'selected' : ''
      }>Always(Immediately)</option>
      <option value='never' ${
        settings.loadMode === 'never' ? 'selected' : ''
      }>Never(Manually)</option>
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
      <option value='-1000' ${settings.Zoom === -1000 ? 'selected' : ''}>Fit Height</option>
    </select>
  </span>
  <span class='controlLabel zoomStep'>Zoom Change Step (between 5 and 50): <br/>
    <input type='range' value='${
      settings.zoomStep
    }' name='zoomStep' id='zoomStep' min='5' max='50' step='5' oninput='zoomStepVal.value = this.value'>
    <output id='zoomStepVal'>${settings.zoomStep}</output>
  </span>
  <span class='controlLabel viewMode'>Default View Mode:
    <select id='viewMode'>
      <option value='' ${settings.viewMode === '' ? 'selected' : ''}>Vertical</option>
      <option value='WebComic' ${
        settings.viewMode === 'WebComic' ? 'selected' : ''
      }>WebComic</option>
      <option value='FluidLTR' ${
        settings.viewMode === 'FluidLTR' ? 'selected' : ''
      }>Left to Right</option>
      <option value='FluidRTL' ${
        settings.viewMode === 'FluidRTL' ? 'selected' : ''
      }>Right to Left</option>
    </select>
  </span>
  <span class='controlLabel fitIfOversize'>Fit Width if Oversize:
    <input type='checkbox' value='true' name='fitIfOversize' id='fitIfOversize' ${
      settings.FitWidthIfOversize ? 'checked' : ''
    }>
  </span>
  <span class='controlLabel showThumbnails'>Show Thumbnails:
    <input type='checkbox' value='true' name='showThumbnails' id='showThumbnails' ${
      settings.ShowThumbnails ? 'checked' : ''
    }>
   </span>
   <span class='controlLabel lazyLoadImages'>Lazy Load Images:
    <input type='checkbox' value='true' name='lazyLoadImages' id='lazyLoadImages' ${
      settings.lazyLoadImages ? 'checked' : ''
    }>
   </span>
   <span class='controlLabel lazyStart'>Lazy Start From Page (between 5 and 100):<br/>
    <input type='range' value='${
      settings.lazyStart
    }' name='lazyStart' id='lazyStart' min='5' max='100' step='5' oninput='lazyStartVal.value = this.value'>
    <output id='lazyStartVal'>${settings.lazyStart}</output>
  </span>
  <span class='controlLabel downloadZip'>Download Images as Zip Automatically:
    <input type='checkbox' value='false' name='downloadZip' id='downloadZip' ${
      settings.DownloadZip ? 'checked' : ''
    }>
  </span>
  <span class='controlLabel hidePageControls'>Always Hide Page Controls:
    <input type='checkbox' value='false' name='hidePageControls' id='hidePageControls' ${
      settings.hidePageControls ? 'checked' : ''
    }>
  </span>
</div>`;
const chapterControl = (id) => (manga) =>
  `<div id='${id}' class='ChapterControl'>
    <a href='#' class='download'>Download</a>
    <a class='prev' id='prev' href='${manga.prev || ''}' onclick='W.location="${
    manga.prev || ''
  }";W.location.reload();'>Previous</a>
    <a class='next' id='next' href='${manga.next || ''}' onclick='W.location="${
    manga.next || ''
  }";W.location.reload();'>Next</a>
</div>`;
const chapterControlTop = chapterControl('ChapterControlTop');
const chapterControlBottom = chapterControl('ChapterControlBottom');
const title = (manga) =>
  `<div class='ViewerTitle'><br/><a id='series' href='${manga.series}'><i>${manga.title}</i><br/>(Return to Chapter List)</a></div>`;
// Add Pages Place-holders
const listPages = (times) =>
  Array(times)
    .fill(null)
    .map(
      (_, index) => `
<div id='Page${index + 1}' class='MangaPage'>
  <div class='PageFunctions'>
    <a class='Bookmark controlButton' title='Bookmark'></a>
    <a class='ZoomIn controlButton' title='Zoom In'></a>
    <a class='ZoomRestore controlButton' title='Zoom Restore'></a>
    <a class='ZoomOut controlButton' title='Zoom Out'></a>
    <a class='ZoomWidth controlButton' title='Zoom to Width'></a>
    <a class='ZoomHeight controlButton' title='Zoom to Height'></a>
    <a class='Hide controlButton' title='Hide'></a>
    <a class='Reload controlButton' title='Reload'></a>
    <span>${index + 1}</span>
  </div>
  <div class='PageContent'>
    <img id='PageImg${index + 1}' alt='PageImg${index + 1}' />
  </div>
</div>`,
    );
const listOptions = (times) =>
  Array(times)
    .fill(null)
    .map((_, index) => `<option value='${index + 1}'>${index + 1}</option>`);
const listThumbnails = (times) =>
  Array(times)
    .fill(null)
    .map(
      (_, index) =>
        `<div id='Thumbnail${index + 1}' class='Thumbnail'><img id='ThumbnailImg${
          index + 1
        }' alt='ThumbnailImg${index + 1}' src=''/><span>${index + 1}</span></div>`,
    );
const body = (manga, begin = 0) => `
<div id='MangaOnlineViewer' class='${settings.Theme} ${isMobile ? 'mobile' : ''} ${
  settings.hidePageControls ? 'hideControls' : ''
}'>
  ${title(manga)}
  <div id='Counters' class='controlLabel'>
    <i>0</i> of <b>${manga.pages}</b> Pages Loaded
    <span class='controlLabel'>Go to Page:</span>
    <select id='gotoPage'>
      <option selected>#</option>
      ${listOptions(manga.pages).slice(begin).join('')}
    </select>
  </div>
  ${chapterControlTop(manga)}
  <div id='Chapter' class='${settings.FitWidthIfOversize === true ? 'fitWidthIfOversize' : ''} ${
  settings.viewMode
}'>
    ${listPages(manga.pages).slice(begin).join('')}
  </div>
  ${title(manga)}
  ${chapterControlBottom(manga)}
  ${panel}
  ${controls}
  ${htmlKeybinds}
  <div id='Navigation' class='panel ${settings.ShowThumbnails ? '' : 'disabled'}'>
    <div id='NavigationCounters' class='controlLabel'>
      <img alt='Thumbnails' title='Thumbnails' src='${icon.menu}' class='nav' /><i>0</i> of <b>${
  manga.pages
}</b> Pages Loaded
    </div>
    <div id='Thumbnails'>
      ${listThumbnails(manga.pages).slice(begin).join('')}
    </div>
  </div>
  <a href='#' id='blob' style='display: none;'>Download</a>
</div>`;

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

function reader(manga: IManga, begin = 0) {
  return `
<head>
  <title>${manga.title}</title>
  <meta charset='UTF-8'>
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
