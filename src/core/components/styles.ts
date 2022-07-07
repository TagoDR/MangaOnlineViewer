// language=CSS
export default `
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
a {
  color: #08c;
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
}

#MangaOnlineViewer #Chapter {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  min-width: 225px;
}

#MangaOnlineViewer #Chapter.DoublePage {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}

#MangaOnlineViewer #Chapter.DoublePage .PageImg {
  min-width: unset;
}

#MangaOnlineViewer #Chapter.DoublePage .MangaPage.DoublePage {
  grid-column: span 2;
}

#MangaOnlineViewer #Chapter.WebComic .PageFunctions {
}

#MangaOnlineViewer #Chapter.WebComic .PageContent {
  margin: 0;
}

#MangaOnlineViewer #Chapter.FluidLTR .MangaPage {
  width: auto;
}

#MangaOnlineViewer #Chapter.FluidRTL .MangaPage {
  width: auto;
}

#MangaOnlineViewer #Chapter.FluidLTR {
  direction: ltr;
}

#MangaOnlineViewer #Chapter.FluidRTL {
  direction: rtl;
}

#MangaOnlineViewer #ViewerControls {
  padding: 10px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  transition: transform 0.3s ease-in, background-color 0.3s linear;
  transform: translateX(-100%);
  display: flex;
  flex-flow: column;
  gap: 5px;
  height: 100%;
  max-width: 100vw;
  width: 305px;
}

#MangaOnlineViewer #ViewerControls.visible {
  transform: translateX(0);
}

#MangaOnlineViewer #ViewerControls .ControlLabel {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
}

#MangaOnlineViewer #ViewerControls .ControlLabelItem {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-basis: 40%;
}

#MangaOnlineViewer #ViewerControls .ControlLabelItem:not(.show) {
  display: none;
}

#MangaOnlineViewer #CloseSettings {
  width: fit-content;
  height: fit-content;
  position: absolute;
  right: 10px;
  top: 10px;
}

#MangaOnlineViewer #ViewerShortcuts {
  padding: 8px;
  position: fixed;
  top: 65px;
  right: 0;
  /*transition: transform 0.3s ease-in, background-color 0.3s linear;*/
  /*transform: translateX(100%);*/
  display: none;
  line-height: 1.5em;
}

#MangaOnlineViewer #ViewerShortcuts.visible {
  /*transform: translateX(0);*/
  display: block;
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
}

#MangaOnlineViewer .ControlButton:hover {
  opacity: 0.8;
}

#MangaOnlineViewer #ImageOptions {
  left: 0;
  position: absolute;
  top: 0;
  width: 408px;
  z-index: 1000;
}

#MangaOnlineViewer .panel {
  padding: 5px;
  position: inherit;
  border-radius: 5px;
}

#MangaOnlineViewer #ImageOptions:hover {
  position: fixed;
}

#MangaOnlineViewer #ImageOptions.settingsOpen {
  position: fixed;
}

#MangaOnlineViewer #ImageOptions #menu {
  position: fixed;
  height: 64px;
  width: 400px;
  top: 0;
}

#MangaOnlineViewer #ImageOptions #Zoom {
  position: absolute;
  left: 18px;
  bottom: -65px;
}

#MangaOnlineViewer .MangaPage {
  width: 100%;
  display: inline-block;
  text-align: center;
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
  perspective: 1000px;
  line-height: 0;
}

#MangaOnlineViewer .PageContent {
  margin: 0 0 15px;
  text-align: center;
  display: inline-block;
  overflow-x: auto;
  max-width: 100%;
}

#MangaOnlineViewer .MangaPage.hide .PageContent {
  display: none;
}

#MangaOnlineViewer .MangaPage.hide .PageFunctions {
  position:relative;
}

#MangaOnlineViewer .PageContent .PageImg[src=""],
#MangaOnlineViewer .PageContent .PageImg:not([src]) {
  width: 500px;
  height: 750px;
  display: inline-block;
}

#MangaOnlineViewer .fitWidthIfOversize .PageContent .PageImg {
  max-width: 100%;
}

#MangaOnlineViewer #gotoPage {
  width: 35px;
}

#MangaOnlineViewer #ThemeSelector {
  width: 110px;
}

#MangaOnlineViewer #Header {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-flow: row nowrap;
  transition: transform 0.3s ease-in, background-color 0.3s linear;
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

#MangaOnlineViewer #MangaTitle {
  padding: 2px;
  margin: 0;
  font-size: 1.2rem;
  font-weight: normal;
}

#MangaOnlineViewer #GlobalControls {
  flex-basis: 30%;
}

#MangaOnlineViewer #ChapterNavigation {
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  flex-basis: 30%;
}

#MangaOnlineViewer .ChapterControl {
  display: flex;
  flex-wrap: nowrap;
}

#MangaOnlineViewer .ChapterControl .NavigationControlButton {
  display: inline-flex;
  margin: 3px;
  justify-content: center;
  align-items: center;
  border: 2px solid transparent;
  padding: 5px 10px;
  gap: 0.5em;
}

#MangaOnlineViewer .ChapterControl .NavigationControlButton svg {
  flex-shrink: 0;
  align-self: center;
  width: 1rem;
  height: 1rem;
}

#MangaOnlineViewer .ChapterControl .NavigationControlButton[href="#"],
#MangaOnlineViewer .ChapterControl .NavigationControlButton[href=""] {
  visibility: hidden;
}

#MangaOnlineViewer .ViewerTitle {
  text-align: center;
  min-height: 60px;
  max-width: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 5px;
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
  min-width: 20px;
  text-align: center;
  display: inline-block;
  padding: 2px 10px;
  line-height: 1rem;
}

#MangaOnlineViewer .PageFunctions > .ControlButton {
  height: 16px;
  width: 16px;
  padding: 0 5px;
  margin: 0;
  border-width: 0;
}

#MangaOnlineViewer .PageFunctions .ControlButton {
  opacity: 0.5;
}

#MangaOnlineViewer .PageFunctions:hover .ControlButton {
  opacity: 1;
}

#MangaOnlineViewer .PageFunctions .ControlButton:hover {
  opacity: 0.9;
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
}

#MangaOnlineViewer #Navigation .Thumbnail .ThumbnailIndex {
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

#MangaOnlineViewer #ImageOptions .hamburger-lines {
  display: block;
  height: 26px;
  width: 32px;
  position: absolute;
  top: 15px;
  left: 15px;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

#MangaOnlineViewer #ImageOptions .hamburger-lines .line {
  display: block;
  height: 4px;
  width: 100%;
  border-radius: 10px;
  /*background: rgba(131, 133, 136, 0.40);*/
}

#MangaOnlineViewer #blob {
  display: none;
}

/* Mobile styles*/
@media (max-width: 768px) {
  #MangaOnlineViewer #Header {
    flex-direction: column;
  }

  #MangaOnlineViewer .ViewerTitle {
    order: 1;
    flex-basis: 100%;
  }

  #MangaOnlineViewer #GlobalControls {
    order: 2;
  }

  #MangaOnlineViewer #ChapterNavigation {
    order: 3;
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

  #MangaOnlineViewer .fitWidthIfOversize .PageContent .PageImg {
    max-width: 100%;
  }

  #MangaOnlineViewer #ImageOptions .ControlButton:not(#settings) {
    display: none;
  }

  #MangaOnlineViewer #ViewerControls .DefaultZoom,
  #MangaOnlineViewer #ViewerControls .viewMode,
  #MangaOnlineViewer #ViewerControls .fitIfOversize,
  #MangaOnlineViewer #ViewerControls .showThumbnails,
  #MangaOnlineViewer #ViewerControls .lazyLoadImages,
  #MangaOnlineViewer #ViewerControls .downloadZip,
  #MangaOnlineViewer #ViewerControls .minZoom,
  #MangaOnlineViewer #ViewerControls .zoomStep,
  #MangaOnlineViewer #ViewerControls .mouseOverMenu {
    display: none;
  }

  #MangaOnlineViewer #ViewerShortcuts {
    display: none;
  }  

  #MangaOnlineViewer #ImageOptions #menu {
    display: none;
  }

  #MangaOnlineViewer #ImageOptions #Zoom {
    display: none;
  }

  #MangaOnlineViewer .ViewerTitle {
    height: auto;
    padding: 0;
  }

  #MangaOnlineViewer .ChapterControl {
    display: block;
    text-align: center;
  }

  #MangaOnlineViewer .ChapterControl .download {
    display: none;
  }

  #MangaOnlineViewer #Counters {
    display: none;
  }
}

`;
