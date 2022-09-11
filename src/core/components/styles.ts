import { svgToUrl } from '../../utils/svgs';
import { IconPalette, IconPhoto, IconPhotoOff } from './icons';
import colors from '../../utils/colors';

// language=CSS
export default `
:root,
.dark,
.dark .default,
[data-theme='dark'] {
  --theme-body-background: ${colors.dark['600']};
  --theme-body-text-color: ${colors.dark['50']};
  --theme-text-color: ${colors.dark['50']};
  --theme-primary-color: ${colors.dark['700']};
  --theme-primary-text-color: ${colors.dark['50']};
  --theme-background-color: ${colors.dark['600']};
  --theme-hightlight-color: ${colors.dark['500']};
  --theme-border-color: ${colors.dark['400']};
}
.light,
.light .default,
[data-theme='light'] {
  --theme-body-background: ${colors.gray['50']};
  --theme-body-text-color: ${colors.gray['900']};
  --theme-text-color: ${colors.gray['900']};
  --theme-primary-color: ${colors.gray['300']};
  --theme-primary-text-color: ${colors.gray['900']};
  --theme-background-color: ${colors.gray['50']};
  --theme-hightlight-color: ${colors.gray['500']};
  --theme-border-color: ${colors.gray['100']};
}
/*  Simple Normalizer */
html {
  font-size: 100%;
}
body {
  margin: 0;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 14px;
  line-height: 20px;
  color: #333;
  background-color: #fff;
  padding: 0;
}
a,
a:link,
a:visited,
a:active,
a:focus {
  color: var(--theme-body-text-color);
  text-decoration: none;
}
img {
  height: auto;
  vertical-align: middle;
  border: 0 none;
}

.icon-tabler {
  height: 1rem;
  width: 1rem;
  align-self: center;
  vertical-align: sub;
}

#nprogress .bar {
  background: #29d;
  position: fixed;
  z-index: 1031;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
}

#MangaOnlineViewer {
  padding-bottom: 40px;
  min-height: 760px;
  min-width: 360px;
  width:100%;
  height:100%;
  text-decoration:none;
  color: var(--theme-body-text-color);
  background-color: var(--theme-body-background);
}

#MangaOnlineViewer #Chapter {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  min-width: 225px;
}

#MangaOnlineViewer #Chapter.FluidLTR {
  direction: ltr;
}

#MangaOnlineViewer #Chapter.FluidRTL {
  direction: rtl;
}

#MangaOnlineViewer #Chapter.FluidLTR,
#MangaOnlineViewer #Chapter.FluidRTL {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}

#MangaOnlineViewer #Chapter.FluidLTR .PageImg,
#MangaOnlineViewer #Chapter.FluidRTL .PageImg {
  min-width: unset;
}

#MangaOnlineViewer #Chapter.FluidLTR .MangaPage.DoublePage,
#MangaOnlineViewer #Chapter.FluidRTL .MangaPage.DoublePage {
  grid-column: span 2;
}

#MangaOnlineViewer #Chapter.FluidLTR .MangaPage:not(.DoublePage):nth-child(2n),
#MangaOnlineViewer #Chapter.FluidRTL .MangaPage:not(.DoublePage):nth-child(2n) {
  justify-self: flex-start;
}

#MangaOnlineViewer #Chapter.FluidLTR .MangaPage:not(.DoublePage):nth-child(2n-1),
#MangaOnlineViewer #Chapter.FluidRTL .MangaPage:not(.DoublePage):nth-child(2n-1) {
  justify-self: flex-end;
}

#MangaOnlineViewer #Chapter.Vertical .PageContent {
  margin-bottom: 15px;
}

#MangaOnlineViewer #Chapter.FluidLTR .MangaPage,
#MangaOnlineViewer #Chapter.FluidRTL .MangaPage {
  width: auto;
}

#MangaOnlineViewer #Chapter.FluidLTR .ZoomWidth .icon-tabler,
#MangaOnlineViewer #Chapter.FluidRTL .ZoomWidth .icon-tabler {
  color: red;
}

#MangaOnlineViewer #SettingsPanel {
  color: var(--theme-text-color);
  padding: 10px;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 1000;
  transition: transform 0.3s ease-in, background-color 0.3s linear;
  transform: translateX(-100%);
  display: flex;
  flex-flow: column;
  gap: 5px;
  overflow-y: auto;
  max-width: 100vw;
  width: 305px;
}

#MangaOnlineViewer #SettingsPanel.visible {
  transform: translateX(0);
}

#MangaOnlineViewer #SettingsPanel .ControlLabel {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
}

#MangaOnlineViewer #SettingsPanel .ControlLabelItem {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

#MangaOnlineViewer #SettingsPanel .ControlLabelItem:not(.show) {
  display: none;
}

#MangaOnlineViewer #ThemeSection{
  border: 1px solid var(--theme-body-text-color);
  border-radius: 10px;
  padding: 10px;
}

#MangaOnlineViewer .closeButton {
  width: fit-content;
  height: fit-content;
  position: absolute;
  right: 10px;
  top: 10px;
}

#MangaOnlineViewer .overlay {
  position: fixed;
  display: none;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0,0,0,0.5);
  z-index: 950;
  cursor: pointer;
}
#MangaOnlineViewer .overlay.visible {
  display: block;
}

#MangaOnlineViewer .ThemeRadio {
  border: 1px solid var(--theme-text-color);
  color: var(--theme-primary-text-color);
  background-color: var(--theme-primary-color);
  height: 20px;
  width: 20px;
  border-radius: 50%;
  padding: 1px;
  margin: 2px 5px;
  position: relative;
}

#MangaOnlineViewer .ThemeRadio svg{
  position: absolute;
  top: 15%;
  right: 15%;
}

#MangaOnlineViewer .ThemeRadio.custom{
  /*background-image: url("${svgToUrl(IconPalette)}");*/
  /*background-position: center;*/
  /*background-repeat: no-repeat;*/
  /*background-size: 80%;*/
}

#MangaOnlineViewer .ThemeRadio.selected .icon-tabler-check {
  display: inline;
}

#MangaOnlineViewer .ThemeRadio:not(.selected) .icon-tabler-check {
  display: none;
}

#MangaOnlineViewer #KeybindingsPanel {
  padding: 8px;
  position: fixed;
  top: 65px;
  right: 0;
  transition: transform 0.3s ease-in-out;;
  transform: translateX(100%);
  line-height: 1.5em;
  z-index: 1000;
}

#MangaOnlineViewer #KeybindingsPanel.visible {
  transform: translateX(0);
  display: block;
}

#MangaOnlineViewer #BookmarksPanel {
  position: fixed;
  top: 10%;
  width: 50%;
  left: 25%;
  right: 25%;
  text-align: center;
  max-height: 70%;
  transition: transform 0.3s ease-in-out;;
  transform: scaleY(0%);
  z-index: 1000;
}

#MangaOnlineViewer #BookmarksPanel.visible {
  transform: scaleY(100%);
  display: block;
}

#MangaOnlineViewer #BookmarksList {
  padding: 0 15px;
  overflow: auto;
  max-height: 60vh;
}

#MangaOnlineViewer #BookmarksList .BookmarkItem {
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  align-items: center;
  padding: 2px;
}

#MangaOnlineViewer #BookmarksList .bookmarkData {
  flex-basis: 15%;
}

#MangaOnlineViewer #BookmarksList .bookmarkURl {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  flex-basis: 55%;
}


#MangaOnlineViewer select {
  height: 20px;
  padding: 0;
  margin-bottom: 5px;
}

#MangaOnlineViewer .ControlButton {
  cursor: pointer;
  border-radius: 5px;
  border-width: 1px;
  padding: 2px;
  min-height: 32px;
  color: var(--theme-primary-text-color);
  background-color: var(--theme-primary-color);
  border-color: var(--theme-border-color);  
}

#MangaOnlineViewer .ControlButton:hover {
  opacity: 0.8;
}

#MangaOnlineViewer .panel {
  padding: 5px;
  position: inherit;
  border-radius: 5px;
  background-color: var(--theme-background-color);
}

#MangaOnlineViewer .MangaPage {
  width: 100%;
  display: inline-block;
  text-align: center;
  /*transform: translate3d(0, 0, 0);*/
  /*backface-visibility: hidden;*/
  /*perspective: 1000px;*/
  line-height: 0;
  min-height: 22px;
  min-width: 100%;
}

#MangaOnlineViewer .PageContent {
  text-align: center;
  display: inline-block;
  overflow-x: auto;
  max-width: 100%;
  transition: all 0.3s ease-in-out;
  height: 100%;
  overflow-y: hidden;
}

#MangaOnlineViewer .MangaPage.hide .PageContent {
  /*display: none;*/
  height: 0;
}

#MangaOnlineViewer .MangaPage.hide .PageFunctions {
  /*position:relative;*/
}

#MangaOnlineViewer .PageContent .PageImg[src=""],
#MangaOnlineViewer .PageContent .PageImg:not([src]) {
  width: 40vw;
  height: 80vh;
  display: inline-block;
  background-image: url("${svgToUrl(IconPhoto)}");
  background-position: center;
  background-repeat: no-repeat;
  background-size: 20%;
  background-color: var(--theme-hightlight-color);
}

#MangaOnlineViewer .PageContent .PageImg.imgBroken {
  width: 40vw;
  height: 80vh;
  display: inline-block;
  background-image: url("${svgToUrl(IconPhotoOff)}");
  background-position: center;
  background-repeat: no-repeat;
  background-size: 20%;
  background-color: var(--theme-hightlight-color);
}

#MangaOnlineViewer .Thumbnail .ThumbnailImg[src=""],
#MangaOnlineViewer .Thumbnail .ThumbnailImg:not([src]) {
  width: 100px;
  height: 150px;
  display: inline-block;
  background-image: url("${svgToUrl(IconPhoto)}");
  background-position: center;
  background-repeat: no-repeat;
  background-size: 20%;
}

#MangaOnlineViewer .fitWidthIfOversize .PageContent .PageImg {
  max-width: 100%;
}

#MangaOnlineViewer #gotoPage {
  min-width: 35px;
}

#MangaOnlineViewer #ThemeSelector {
  width: 110px;
}

#MangaOnlineViewer #Header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-flow: row nowrap;
  transition: transform 0.3s ease-in;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  background-color: inherit;
  z-index: 900;
}

#MangaOnlineViewer #Header.scroll-hide {
  transform: translateY(-100%);
}

#MangaOnlineViewer #Header.scroll-show {
  transform: translateY(-1%);
}

#MangaOnlineViewer #Header.mouseOverMenu {
  position: static;
  transform: none;
}

#MangaOnlineViewer #Header.scroll-end,
#MangaOnlineViewer #Header.visible {
  transform: translateY(-1%);
  position: sticky;
}

#MangaOnlineViewer #Header.mouseOverMenu:hover {
  position: sticky;
}

#MangaOnlineViewer #Header:not(.mouseOverMenu) #menu,
#MangaOnlineViewer #Header.mouseOverMenu:hover #menu {
  display: none;
}

#MangaOnlineViewer #menu {
  position: fixed;
  min-height: 70px;
  width: 100%;
  top: 0;
  z-index: 1;
  color: var(--theme-body-text-color);
}

#MangaOnlineViewer #MangaTitle {
  padding: 2px;
  margin: 0;
  font-size: 1.2rem;
  font-weight: normal;
}

#MangaOnlineViewer #GlobalFunctions{
  display: flex;
  gap: 3px;
  padding-left:10px;
  flex-wrap: wrap;
  width: 300px;
  z-index: 100;
}

#MangaOnlineViewer #GlobalFunctions .icon-tabler{
  width: 25px;
  height: 25px;
}

#MangaOnlineViewer #ChapterNavigation {
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: end;
  padding-right: 10px;
  width: 300px;
}

#MangaOnlineViewer .ChapterControl {
  display: flex;
  flex-wrap: nowrap;
}

#MangaOnlineViewer .ChapterControl .NavigationControlButton {
  display: inline-flex;
  margin-left: 3px;
  justify-content: center;
  align-items: center;
  padding: 5px 10px;
  gap: 0.5em;
}

#MangaOnlineViewer .ChapterControl .NavigationControlButton .icon-tabler {
  flex-shrink: 0;
  align-self: center;
  width: 1rem;
  height: 1rem;
}

#MangaOnlineViewer .ChapterControl .NavigationControlButton[value='#'],
#MangaOnlineViewer .ChapterControl .NavigationControlButton[value=''],
#MangaOnlineViewer .ChapterControl .NavigationControlButton[value='undefined'] {
  visibility: hidden;
}

#MangaOnlineViewer .ChapterControl .download.loading{
  cursor: not-allowed;
}

#MangaOnlineViewer .ViewerTitle {
  text-align: center;
  min-height: 60px;
  /*max-width: 500px;*/
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 5px;
  flex-basis: 60%;
}

#MangaOnlineViewer #Counters {
}

#MangaOnlineViewer .PageFunctions {
  font-family: monospace;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: 0;
  padding: 0;
  gap: 3px;
  position: absolute;
  right: 0;
}

#MangaOnlineViewer .PageFunctions > .PageIndex {
  background-color: var(--theme-primary-color);
  color: var(--theme-primary-text-color);
  min-width: 20px;
  text-align: center;
  display: inline-block;
  padding: 3px 5px;
  line-height: 1rem;
  border-radius: 5px;
  border-top-right-radius: 5px;
  border-top-right-radius: 0;
}

#MangaOnlineViewer .PageFunctions .ControlButton {
  padding: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  border-width: 0;
  min-height: auto;
  opacity: 0.5;
}

#MangaOnlineViewer .PageFunctions:hover .ControlButton {
  opacity: 1;
}

#MangaOnlineViewer .PageFunctions .ControlButton:hover {
  opacity: 0.9;
}

#MangaOnlineViewer.light #ColorScheme > :not(.inverse),
#MangaOnlineViewer:not(.light) #ColorScheme > .inverse,
#MangaOnlineViewer .ChapterControl .download.loading > :not(.inverse),
#MangaOnlineViewer .ChapterControl .download:not(.loading) > .inverse,
#MangaOnlineViewer .MangaPage.hide .ControlButton.Hide  > .inverse,
#MangaOnlineViewer .MangaPage:not(.hide) .ControlButton.Hide  > :not(.inverse),
#MangaOnlineViewer.bookmarked .ControlButton.Bookmark  > :not(.inverse),
#MangaOnlineViewer:not(.bookmarked) .ControlButton.Bookmark  > .inverse {
  display: none;
}

#MangaOnlineViewer.hideControls .PageFunctions {
  visibility: hidden;
}

#MangaOnlineViewer #NavigationCounters {
  margin: 5px;
  width: 100%;
  line-height: 1rem;
}

#MangaOnlineViewer #Navigation {
  color: var(--theme-text-color);
  background-color: var(--theme-hightlight-color);
  bottom: -180px;
  height: 185px;
  overflow-x: hidden;
  overflow-y: hidden;
  padding-bottom: 20px;
  position: fixed;
  white-space: nowrap;
  width: 100%;
  text-align: center;
  transition: transform 0.3s ease-in, background-color 0.3s linear;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  line-height: 0rem;
}

#MangaOnlineViewer #Navigation #Thumbnails {
  overflow-x: auto;
  overflow-y: hidden;
  margin-right: 10px;
}

#MangaOnlineViewer #Navigation:hover {
  transform: translateY(-180px);
}

#MangaOnlineViewer #Navigation.disabled {
  display: none;
}

#MangaOnlineViewer #Navigation.visible {
  transform: translateY(-180px);
}

#MangaOnlineViewer #Navigation .Thumbnail {
  display: inline-block;
  height: 150px;
  margin: 0 5px;
  border: 1px solid var(--theme-primary-color);
}

#MangaOnlineViewer #Navigation .Thumbnail .ThumbnailIndex {
  color: var(--theme-text-color);
  background-color: var(--theme-hightlight-color);
  display: block;
  opacity: 0.8;
  position: relative;
  bottom: 25%;
  width: 100%;
  line-height: 1rem;
}

#MangaOnlineViewer #Navigation .Thumbnail .ThumbnailImg {
  cursor: pointer;
  display: inline-block;
  max-height: 150px;
  min-height: 150px;
  min-width: 80px;
  max-width: 160px;
}

#MangaOnlineViewer #menu .icon-tabler {
  position: absolute;
  top: 5px;
  left: 10px;
  height: 32px;
  width: 32px;
}

@media (max-width: 992px) {
  #MangaOnlineViewer #Header {
      flex-direction: column;
  }

  #MangaOnlineViewer #Header.mouseOverMenu {
    position: sticky;
    transition: transform 0.3s ease-in;
  }

  #MangaOnlineViewer #Header.scroll-show {
    transform: translateY(-1%);
  }

  #MangaOnlineViewer #Header.scroll-hide {
    transform: translateY(-100%);
  }
  
  #MangaOnlineViewer .PageContent .PageImg {
    max-width: 100%;
  }

  #MangaOnlineViewer .ViewerTitle {
    order: 1;
    min-height: auto;
    padding: 0px;
    margin: 0px;
  }
  
  #MangaOnlineViewer #GlobalFunctions {
    flex-wrap: nowrap;
    padding: 0;
    width: auto;
    order: 3;
    padding: 5px;
  }

  #MangaOnlineViewer #ChapterNavigation {
    order: 2;
  }
  
  #MangaOnlineViewer #menu {
    display: none;
  }

  #MangaOnlineViewer #GlobalFunctions #keybindings {
    display: none;
  }
}
/* Small devices (landscape phones) */
@media (max-width: 600px) {
  #MangaOnlineViewer #Header {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }

  #MangaOnlineViewer #Header.mouseOverMenu {
    position: sticky;
    transition: transform 0.3s ease-in;
  }
  
  #MangaOnlineViewer #Header.scroll-show {
    transform: translateY(-1%);
  }
  
  #MangaOnlineViewer #Header.scroll-hide {
    transform: translateY(-100%);
  }

  #MangaOnlineViewer .ViewerTitle {
    order: 1;
    flex-basis: 100%;
    margin-top: 0px;
  }

  #MangaOnlineViewer #GlobalFunctions {
    order: 2;
    padding: 0;
  }

  #MangaOnlineViewer #ChapterNavigation {
    order: 3;
    width: auto;
  }

  #MangaOnlineViewer #Navigation {
    display: none;
  }

  #MangaOnlineViewer .PageFunctions {
    padding: 0;
  }

  #MangaOnlineViewer .PageFunctions .ControlButton:not(.Bookmark) {
    display: none;
  }

  #MangaOnlineViewer .PageFunctions .ControlButton.Bookmark {
    opacity: 1;
  }

  #MangaOnlineViewer .PageContent {
    margin: 0;
    width: 100%;
  }

  #MangaOnlineViewer .PageContent .PageImg {
    max-width: 100%;
  }

  #MangaOnlineViewer #GlobalFunctions .ControlButton:not(#settings) {
    display: none;
  }

  #MangaOnlineViewer #GlobalFunctions {
    min-width: auto;
  }

  #MangaOnlineViewer #SettingsPanel .DefaultZoom,
  #MangaOnlineViewer #SettingsPanel .viewMode,
  #MangaOnlineViewer #SettingsPanel .fitIfOversize,
  #MangaOnlineViewer #SettingsPanel .showThumbnails,
  #MangaOnlineViewer #SettingsPanel .lazyLoadImages,
  #MangaOnlineViewer #SettingsPanel .downloadZip,
  #MangaOnlineViewer #SettingsPanel .minZoom,
  #MangaOnlineViewer #SettingsPanel .zoomStep,
  #MangaOnlineViewer #SettingsPanel .mouseOverMenu {
    display: none;
  }

  #MangaOnlineViewer #KeybindingsPanel {
    display: none;
  }  

  #MangaOnlineViewer #menu {
    display: none;
  }
  
  #MangaOnlineViewer .ViewerTitle {
    height: auto;
    padding: 0;
  }

  #MangaOnlineViewer .ChapterControl {
  }

  #MangaOnlineViewer .ChapterControl .download {
    display: none;
  }

  #MangaOnlineViewer #Counters {
    display: none;
  }
}

@-webkit-keyframes spin {
  to {
    transform:rotate(360deg)
  }
}
@keyframes spin {
  to {
    transform:rotate(360deg)
  }
}
.animate-spin {
  -webkit-animation:spin 1s linear infinite;
  animation:spin 1s linear infinite
}
@-webkit-keyframes spin-reverse {
  0% {
    transform:rotate(360deg)
  }
  to {
    transform:rotate(0)
  }
}
@keyframes spin-reverse {
  0% {
    transform:rotate(360deg)
  }
  to {
    transform:rotate(0)
  }
}
.animate-spin-reverse {
  -webkit-animation:spin-reverse 1s linear infinite;
  animation:spin-reverse 1s linear infinite
}
`;
