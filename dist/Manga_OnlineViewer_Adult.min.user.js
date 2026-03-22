// ==UserScript==
// @name          Manga OnlineViewer Adult
// @author        Tago
// @updateURL     https://github.com/TagoDR/MangaOnlineViewer/raw/master/dist/Manga_OnlineViewer_Adult.meta.js
// @downloadURL   https://github.com/TagoDR/MangaOnlineViewer/raw/master/dist/Manga_OnlineViewer_Adult.user.js
// @supportURL    https://github.com/TagoDR/MangaOnlineViewer/issues
// @namespace     https://github.com/TagoDR
// @description   Shows all pages at once in online view for these sites: AkumaMoe, BestPornComix, DoujinMoeNM, Dragon Translation, 8Muses.com, 8Muses.io, ExHentai, e-Hentai, FSIComics, FreeAdultComix, GNTAI.net, Hentai2Read, HentaiEra, HentaiForce, HentaiFox, HentaiHand, nHentai.com, HentaIHere, HentaiNexus, HenTalk, Hitomi, Imhentai, KingComix, Chochox, Comics18, Luscious, MultPorn, MyHentaiGallery, nHentai.net, nHentai.xxx, lhentai, 9Hentai, PornComicsHD, Pururin, SchaleNetwork, Simply-Hentai, TMOHentai, 3Hentai, HentaiVox, Tsumino, vermangasporno, vercomicsporno, wnacg, XlecxOne, xyzcomics, Yabai, Madara WordPress Plugin, AllPornComic, Manytoon, Manga District
// @version       2026.03.22.build-2109
// @license       MIT
// @icon          https://cdn-icons-png.flaticon.com/32/9824/9824312.png
// @run-at        document-end
// @grant         unsafeWindow
// @grant         GM_getValue
// @grant         GM_setValue
// @grant         GM_listValues
// @grant         GM_deleteValue
// @grant         GM_xmlhttpRequest
// @grant         GM_addValueChangeListener
// @noframes      on
// @connect       *
// @require       https://cdn.jsdelivr.net/npm/colorjs.io@0.6.1/dist/color.global.min.js
// @require       https://cdnjs.cloudflare.com/ajax/libs/jszip/3.9.1/jszip.min.js
// @require       https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.js
// @require       https://cdn.jsdelivr.net/npm/lodash@4.17.23/lodash.min.js
// @require       https://cdn.jsdelivr.net/npm/hotkeys-js@4.0.2/dist/hotkeys-js.min.js
// @require       https://cdn.jsdelivr.net/npm/bowser@2.14.1/bundled.js
// @require       https://cdnjs.cloudflare.com/ajax/libs/blob-util/2.0.2/blob-util.min.js
// @require       https://cdnjs.cloudflare.com/ajax/libs/FileSaver.js/2.0.5/FileSaver.min.js
// @require       https://cdn.jsdelivr.net/npm/toolcool-range-slider@4.0.28/dist/toolcool-range-slider.min.js
// @require       https://cdn.jsdelivr.net/npm/toolcool-range-slider@4.0.28/dist/plugins/tcrs-generated-labels.min.js
// @require       https://cdn.jsdelivr.net/npm/toolcool-range-slider@4.0.28/dist/plugins/tcrs-marks.min.js
// @include       /https?:\/\/(www\.)?akuma\.moe\/g\/.+\/.+/
// @include       /https?:\/\/(www\.)?bestporncomix.com\/gallery\/.+/
// @include       /https?:\/\/(www\.)?doujins.com\/.+/
// @include       /https?:\/\/(www\.)?dragontranslation.net\/leer\/.+/
// @include       /https?:\/\/(comics.)?8muses.(com|io)\/(comics\/)?picture\/.+/
// @include       /https?:\/\/(g\.)?(exhentai|e-hentai).org\/s\/.+\/.+/
// @include       /https?:\/\/(www\.)?fsicomics.com\/.+/
// @include       /https?:\/\/(www\.)?freeadultcomix.com\/.+/
// @include       /https?:\/\/(www\.)?gntai.net\/(?!(category|tags|autores))[^/]+\/.+/
// @include       /https?:\/\/(www\.)?hentai2read.com\/[^/]+\/\d+(.\d+)?\//
// @include       /https?:\/\/(www\.)?hentaiera.com\/view\/.+\/\d+\/?/
// @include       /https?:\/\/(www\.)?hentaiforce.net\/view\/.+\/\d+/
// @include       /https?:\/\/(www\.)?hentaifox.com\/g\/.+/
// @include       /https?:\/\/(www\.)?(hentaihand|nhentai).com\/.+\/reader/
// @include       /https?:\/\/(www\.)?hentaihere.com\/.+\/.+\/.+/
// @include       /https?:\/\/((www\.)?hentainexus.com|nexus.fakku.cc)\/read\/.+/
// @include       /https?:\/\/(www.)?hentalk.pw/
// @include       /https?:\/\/hitomi.la\/reader\/.+/
// @include       /https?:\/\/(www\.)?imhentai.xxx\/view\/.+\/.+\//
// @include       /https?:\/\/(www\.)?(kingcomix|chochox|comics18).(com|org)\/.+/
// @include       /https?:\/\/(www\.)?luscious.net\/.+\/read\/.+/
// @include       /https?:\/\/(www\.)?multporn.net\/(comics|hentai_manga)\/.+/
// @include       /https?:\/\/(www\.)?myhentaigallery.com\/g\/.+\/\d+/
// @include       /https?:\/\/(www\.)?(nhentai|lhentai).(net|xxx|com|to)\/g\/.+\/.+/
// @include       /https?:\/\/(www\.)?9hentai.(so)\/g\/.+\/.+/
// @include       /https?:\/\/(www\.)?porncomicshd.com\/es.*/
// @include       /https?:\/\/(www\.)?pururin.me\/(view|read)\/.+\/.+\/.+/
// @include       /https?:\/\/(www\.)?(niyaniya|shupogaki|hoshino).(moe|one)/
// @include       /https?:\/\/(www\.)?simply-hentai.com\/.+\/page\/.+/
// @include       /https?:\/\/(www\.)?tmohentai.com\/reader\/.+\/(paginated\/\d+|cascade)/
// @include       /https?:\/\/(www\.)?(3hentai|hentaivox).(net|com)\/(d|view)\/.+\/.+/
// @include       /https?:\/\/(www\.)?tsumino.com\/Read\/Index\/\d+(\?page=.+)?/
// @include       /https?:\/\/(www\.)?(vermangasporno|vercomicsporno).com\/.+/
// @include       /https?:\/\/(www\.)?wnacg.com\/photos-view-id-.+/
// @include       /https?:\/\/(www\.)?xlecx.one\/.+/
// @include       /https?:\/\/(www\.)?xyzcomics.com\/.+/
// @include       /https?:\/\/(www\.)?yabai.si\/g\/.+\/read/
// @include       /https?:\/\/.+\/(porncomic|read-scan|title)\/.+\/.+/
// ==/UserScript==
(function(){var Xf=Object.create,$o=Object.defineProperty,Jf=Object.getOwnPropertyDescriptor,Qf=Object.getOwnPropertyNames,e2=Object.getPrototypeOf,t2=Object.prototype.hasOwnProperty,pn=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),Xc=(e,t)=>{let r={};for(var o in e)$o(r,o,{get:e[o],enumerable:!0});return t||$o(r,Symbol.toStringTag,{value:"Module"}),r},n2=(e,t,r,o)=>{if(t&&typeof t=="object"||typeof t=="function")for(var a=Qf(t),s=0,c=a.length,d;s<c;s++)d=a[s],!t2.call(e,d)&&d!==r&&$o(e,d,{get:(u=>t[u]).bind(null,d),enumerable:!(o=Jf(t,d))||o.enumerable});return e},zo=(e,t,r)=>(r=e!=null?Xf(e2(e)):{},n2(t||!e||!e.__esModule?$o(r,"default",{value:e,enumerable:!0}):r,e));function _s(e){return e===null||typeof e>"u"||e===void 0||typeof e=="string"&&e===""||Array.isArray(e)&&e.length===0||typeof e=="object"&&Object.keys(e).length===0}function gn(e){return _s(e)||e===!1||e===0}function Jc(e){return"listImages"in e&&!gn(e.listImages)}function Qc(e){return"listPages"in e&&!gn(e.listPages)}function r2(e){return"bruteForce"in e&&!gn(e.bruteForce)}var De=(function(e){return e.ENGLISH="English",e.SPANISH="Spanish",e.PORTUGUESE="Portuguese",e.CHINESE="Chinese",e.RAW="Raw",e})({}),He=(function(e){return e.MANGA="manga",e.COMIC="comic",e.HENTAI="hentai",e})({});function i2(e,t){return t in e}var o2={name:["3Hentai","HentaiVox"],url:/https?:\/\/(www\.)?(3hentai|hentaivox).(net|com)\/(d|view)\/.+\/.+/,homepage:["https://3hentai.net/","https://hentaivox.com/"],language:[De.ENGLISH],category:He.HENTAI,waitVar:"readerPages",run(){return{title:unsafeWindow.readerPages.title.replace(/- Page.+/,"").trim(),series:unsafeWindow.readerPages.baseUri.replace("%s",""),pages:unsafeWindow.readerPages.lastPage,prev:"#",next:"#",listImages:Object.keys(unsafeWindow.readerPages.pages).map(e=>unsafeWindow.readerPages.baseUriImg.replace("%s",unsafeWindow.readerPages.pages[e].f))}}};function a2(e,t=document.body){return new Promise(r=>{const o=document.querySelector(e);if(o){r(o);return}const a=new MutationObserver(()=>{const s=document.querySelector(e);s&&(r(s),a.disconnect())});a.observe(t,{childList:!0,subtree:!0,attributes:!0})})}function ys(e,t=250){return new Promise(r=>{const o=setInterval(()=>{e()&&(clearInterval(o),r(!0))},t)})}function eu(e,t,r=document.body){return new Promise(o=>{const a=r.querySelector(e);if(a?.getAttribute(t)){o(a.getAttribute(t)??"");return}const s=new MutationObserver(()=>{const c=r.querySelector(e);c?.getAttribute(t)&&(o(c.getAttribute(t)??""),s.disconnect())});s.observe(r,{childList:!0,subtree:!0,attributes:!0,attributeFilter:[t]})})}function tu(e,t=document.body){return new Promise(r=>{if(!gn(unsafeWindow[e])){r(unsafeWindow[e]);return}const o=new MutationObserver(()=>{gn(unsafeWindow[e])||(r(unsafeWindow[e]),o.disconnect())});o.observe(t,{childList:!0,subtree:!0,attributes:!0})})}function s2(e=1e3,t){return new Promise(r=>{setTimeout(()=>r(t),e)})}async function l2(e,t=1e3){const[r]=await Promise.all([e,s2(t)]);return r}async function nu(e,t,r,o,a="img",s="src"){const c=document.createElement("div");c.setAttribute("style","height: 100vh;width: 100vw;position: fixed;top: 0;left: 0;z-index: 100000;background: white;opacity: 0.5;"),document.body.append(c),e();const d=document.querySelector(r),u=document.querySelector(o),h=[];for(let f=1;f<=t;f+=1)h[f-1]=await l2(eu(a,s,u??document.body),100),u?.querySelector(a)?.removeAttribute(s),d?.dispatchEvent(new Event("click"));return h}var c2={name:["8Muses.com","8Muses.io"],obs:"Slow start, bruteforce may be required",url:/https?:\/\/(comics.)?8muses.(com|io)\/(comics\/)?picture\/.+/,homepage:["https://comics.8muses.com/","https://8muses.io/"],language:[De.ENGLISH],category:He.HENTAI,async run(){const e=unsafeWindow.link_images?.slice(1,unsafeWindow.link_images.length)??[],t=document.querySelector('link[rel="last"]')?.getAttribute("href")?.match(/\d+$/)?.at(0),r=e?.length??parseInt(t??"0",10),o={title:[...document.querySelectorAll(".top-menu-breadcrumb li:not(:last-child)")].map(a=>a?.textContent?.trim()).join("/"),series:document.querySelector(".top-menu-breadcrumb li:nth-last-child(2) a")?.getAttribute("href"),pages:r,prev:"#",next:"#",lazy:!1,timer:10,listImages:e,async before(){unsafeWindow.link_images?.length||(o.listImages=await nu(()=>{const a=document.querySelector(".page-prev");for(;document.querySelector(".c-dropdown-toggle")?.textContent?.match(/\d+/)?.at(0)!=="1";)a?.dispatchEvent(new Event("click"))},r,".page-next",".p-picture",".photo img","src"))}};return o}},u2={name:"9Hentai",url:/https?:\/\/(www\.)?9hentai.(so)\/g\/.+\/.+/,homepage:"https://9hentai.so",language:[De.ENGLISH],category:He.HENTAI,waitAttr:["#jumpPageModal input","max"],async run(){const e={id:parseInt(/\d+/.exec(window.location.pathname)?.at(0)??"0",10)},t={method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}},r=await fetch("/api/getBookByID",t).then(async o=>o.json());return{title:r.results.title,series:`/g/${r.results.id}/`,pages:r.results.total_page,prev:"#",next:"#",listImages:Array(r.results.total_page).fill(0).map((o,a)=>`${r.results.image_server.replace(".com",".so")+r.results.id}/${a+1}.jpg`)}}},d2={name:"AkumaMoe",url:/https?:\/\/(www\.)?akuma\.moe\/g\/.+\/.+/,homepage:"https://akuma.moe",language:[De.RAW],category:He.HENTAI,waitFunc:()=>unsafeWindow.img_lst?.length===document.querySelectorAll(".reader-nav:first-child .nav-select option")?.length,async run(){return{title:document.querySelector("h1.sr-only")?.textContent?.trim().replace(/^Reading /,""),series:`https://akuma.moe/g/${/\/g\/([^/]+)\//.exec(window.location.pathname)?.[1]}/`,pages:unsafeWindow.img_lst.length,prev:"#",next:"#",listImages:unsafeWindow.img_lst.map(e=>`${unsafeWindow.img_prt}/${e}`)}}},h2={name:"BestPornComix",url:/https?:\/\/(www\.)?bestporncomix.com\/gallery\/.+/,homepage:"https://www.bestporncomix.com",language:[De.ENGLISH],category:He.HENTAI,waitTime:5e3,run(){const e=[...document.querySelectorAll("figure a")];return{title:document.querySelector("h1.entry-title")?.textContent?.trim(),pages:e.length,prev:"#",next:"#",listImages:e.map(t=>t.getAttribute("href")??"")}}},f2={name:"DoujinMoeNM",url:/https?:\/\/(www\.)?doujins.com\/.+/,homepage:"https://doujins.com/",language:[De.ENGLISH],category:He.HENTAI,waitEle:".doujin",run(){const e=[...document.querySelectorAll(".doujin")];return{title:document.querySelector(".folder-title a:last-child")?.textContent?.trim(),series:document.querySelector(".folder-title a:nth-last-child(2)")?.getAttribute("href"),pages:e.length,prev:"#",next:"#",listImages:e.map(t=>t.getAttribute("data-file")??"")}}},p2={name:"Dragon Translation",url:/https?:\/\/(www\.)?dragontranslation.net\/leer\/.+/,homepage:"https://dragontranslation.net/es",language:[De.SPANISH],category:He.HENTAI,waitEle:"#chapter_imgs img",run(){const e=[...document.querySelectorAll("#chapter_imgs img")].map(t=>t.getAttribute("src")??"").filter(t=>t&&t!=="/discord2.jpg");return{title:document.querySelector("h1")?.textContent?.trim(),series:document.querySelector("h2 + div a")?.getAttribute("href"),pages:e.length,prev:document.querySelector(".fa-chevron-circle-left")?.parentElement?.getAttribute("href"),next:document.querySelector(".fa-chevron-circle-right")?.parentElement?.getAttribute("href"),listImages:e}}},g2={name:["ExHentai","e-Hentai"],url:/https?:\/\/(g\.)?(exhentai|e-hentai).org\/s\/.+\/.+/,homepage:["https://exhentai.org/","https://e-hentai.org/"],language:[De.ENGLISH],obs:"May get your IP Banned, use with moderation",category:He.HENTAI,async run(){const e=parseInt(document.querySelector(".sn div span:nth-child(2)")?.textContent??"0",10),t=Math.ceil(e/20),r=document.querySelector(".sb a")?.getAttribute("href")?.replace(/\?p=\d+/,""),o=Array(t).fill(0).map(async(s,c)=>fetch(`${r}?p=${c}`).then(async d=>d.text()).then(d=>new DOMParser().parseFromString(d,"text/html"))),a=(await Promise.all(o)).flatMap(s=>[...s.querySelectorAll("#gdt a")].map(c=>c.getAttribute("href")??""));return{title:document.querySelector("#i1 h1")?.textContent?.trim(),series:r,pages:e,begin:parseInt(document.querySelector("div#i2 span")?.textContent??"1",10),prev:"#",next:"#",listPages:a,img:"#img",lazy:!0,async reload(s){const c=`${a[s-1]}`,d=await fetch(c).then(h=>h.text()).then(h=>/nl\('([\d-]+)'\)/.exec(h)?.[1]),u=`${c}${c.indexOf("?")?"&":"?"}nl=${d}`;return fetch(u).then(h=>h.text()).then(h=>new DOMParser()?.parseFromString(h,"text/html")?.querySelector("#img")?.getAttribute("src")??"")}}}},m2={name:"FreeAdultComix",url:/https?:\/\/(www\.)?freeadultcomix.com\/.+/,homepage:"https://www.freeadultcomix.com",language:[De.ENGLISH],category:He.HENTAI,waitTime:5e3,run(){const e=[...document.querySelectorAll(".foto img")];return{title:document.querySelector(".post-conteudo h1")?.textContent?.trim(),pages:e.length,prev:"#",next:"#",listImages:e.map(t=>t.getAttribute("src")??"")}}},v2={name:"FSIComics",url:/https?:\/\/(www\.)?fsicomics.com\/.+/,homepage:"https://fsicomics.com/",language:[De.ENGLISH],category:He.HENTAI,run(){const e=[...document.querySelectorAll(".wp-block-gallery img")];return{title:document.querySelector(".s-title")?.textContent?.trim(),pages:e.length,prev:"#",next:"#",listImages:e.map(t=>t.getAttribute("data-large-file")??"")}}},b2={name:"GNTAI.net",url:/https?:\/\/(www\.)?gntai.net\/(?!(category|tags|autores))[^/]+\/.+/,homepage:"https://www.gntai.net/",language:[De.SPANISH],category:He.HENTAI,run(){const e=document.querySelector("#main > script")?.innerHTML.match(/var pages = [^;]+/)?.at(0)?.toString().match(/https?[^"]+/g)??[];return{title:document.querySelector(".entry-header h1")?.textContent?.trim(),pages:e?.length,prev:"#",next:"#",listImages:e}}},w2={name:"Hentai2Read",url:/https?:\/\/(www\.)?hentai2read.com\/[^/]+\/\d+(.\d+)?\//,homepage:"https://hentai2read.com/",language:[De.ENGLISH],category:He.HENTAI,run(){return{title:document.querySelector(".reader-left-text")?.textContent?.trim(),series:unsafeWindow.gData.mainURL,pages:unsafeWindow.gData.images.length,prev:unsafeWindow.gData.previousURL,next:unsafeWindow.gData.nextURL,listImages:unsafeWindow.gData.images.map(e=>`https://static.hentaicdn.com/hentai${e}`)}}},_2={name:"HentaiEra",url:/https?:\/\/(www\.)?hentaiera.com\/view\/.+\/\d+\/?/,homepage:"https://hentaiera.com/",language:[De.ENGLISH],category:He.HENTAI,run(){const e=parseInt(document.querySelector(".total_pages")?.textContent??"0",10);return{title:document.querySelector("h1")?.textContent?.trim().replace(/ - Page .+$/,""),series:document.querySelector(".return_btn ")?.getAttribute("href"),pages:e,prev:"#",next:"#",listPages:Array(e).fill(0).map((t,r)=>window.location.href.replace(/\/\d*\/?$/,`/${r+1}`)),img:"#gimg",lazyAttr:"data-src"}}},y2={name:"HentaiForce",url:/https?:\/\/(www\.)?hentaiforce.net\/view\/.+\/\d+/,homepage:"https://hentaiforce.net/",language:[De.ENGLISH],category:He.HENTAI,run(){return{title:document.querySelector("h1")?.textContent?.trim().replace(/ - Page .+$/,""),series:document.querySelector(".reader-go-back ")?.getAttribute("href"),pages:unsafeWindow.readerPages.lastPage,prev:"#",next:"#",listImages:Array(unsafeWindow.readerPages.lastPage).fill(0).map((e,t)=>unsafeWindow.readerPages.baseUriImg.replace("%c",unsafeWindow.readerPages.pages[t+1].l).replace("%s",unsafeWindow.readerPages.pages[t+1].f))}}},k2=/^blob:(.+?)\/(.+)$/;function E2(e){return/^data:image\/(png|jpg|jpeg|gif|svg)/.test(e)}function S2(e){return k2.test(e)}function ks(e){switch(e){case"p":return"png";case"b":return"bmp";case"g":return"gif";case"w":return"webp";default:return"jpg"}}var A2={name:"HentaiFox",url:/https?:\/\/(www\.)?hentaifox.com\/g\/.+/,homepage:"https://www.hentaifox.com/",language:[De.ENGLISH],category:He.HENTAI,waitVar:"g_th",waitFunc:()=>document.querySelector("#gimg")?.classList.contains("loaded")??!1,run(){const e=parseInt(document.querySelector(".total_pages")?.textContent??"",10),t=document.querySelector("#gimg")?.getAttribute("src")?.replace(/\d+.\w+$/,"")??"";return{title:document.querySelector("title")?.textContent?.replace(/ - Page .+/,"").trim(),series:document.querySelector(".browse_buttons a")?.getAttribute("href"),pages:e,prev:"#",next:"#",listImages:Array(e).fill(0).map((r,o)=>`${t+(o+1)}.${ks(unsafeWindow.g_th[o+1][0])}`)}}},M2={name:["HentaiHand","nHentai.com"],url:/https?:\/\/(www\.)?(hentaihand|nhentai).com\/.+\/reader/,homepage:["https://hentaihand.com/","https://nhentai.com"],language:[De.ENGLISH],category:He.HENTAI,waitEle:".reader img",run(){const e=[...document.querySelectorAll(".reader img")];return{title:document.querySelector(".reader-header h5")?.textContent?.trim(),series:document.querySelector(".reader-header h5 a")?.getAttribute("href"),pages:e.length,prev:"#",next:"#",listImages:e.map(t=>t.getAttribute("data-src")??t.getAttribute("src")??"")}}},x2={name:"HentaIHere",url:/https?:\/\/(www\.)?hentaihere.com\/.+\/.+\/.+/,homepage:"https://www.hentaihere.com/",language:[De.ENGLISH],category:He.HENTAI,waitVar:"rff_imageList",run(){const e=document.querySelector("#arf-reader-img")?.getAttribute("src")?.replace(/\d.+/,"");return{title:unsafeWindow.rff_pageTitle.replace(/.+\|/,"").trim(),series:unsafeWindow.rff_thisManga,pages:unsafeWindow.rff_imageList.length,prev:unsafeWindow.rff_previousChapter,next:unsafeWindow.rff_nextChapter,listImages:unsafeWindow.rff_imageList.map(t=>e+t)}}},I2={name:"HentaiNexus",url:/https?:\/\/((www\.)?hentainexus.com|nexus.fakku.cc)\/read\/.+/,homepage:"https://hentainexus.com/",language:[De.ENGLISH],category:He.HENTAI,run(){const e=unsafeWindow.pageData?.map(t=>t.image)??unsafeWindow.images?.map(t=>t.url);return{title:document.querySelector("title")?.textContent?.replace(/^\[[\d/]+\]/,"").trim(),series:document.querySelector("#returnGalleryFooter a")?.getAttribute("href"),pages:e.length,prev:"#",next:"#",listImages:e}}},O2={name:"HenTalk",url:/https?:\/\/(www.)?hentalk.pw/,homepage:"https://hentalk.pw/",language:[De.ENGLISH],category:He.HENTAI,async run(){const e="https://hentalk.pw",t=await fetch(`${window.location.pathname}/__data.json?x-sveltekit-trailing-slash=1&x-sveltekit-invalidated=001`).then(async s=>s.json()).then(s=>s.nodes[2].data),r=t?.[t.find(s=>s?.gallery)?.gallery],o=t?.[r?.hash]||t?.[t.find(s=>s?.hash&&s?.id).hash],a=t?.[r.images].map(s=>t[s]).map(s=>t[s.filename]);return{title:t?.[r.title],series:window.location.href.replace(/read\/.+/,""),pages:a?.length,prev:"#",next:"#",listImages:a?.map(s=>`${e}/image/${o}/${s}`)}}},C2={name:"Hitomi",url:/https?:\/\/hitomi.la\/reader\/.+/,homepage:"https://hitomi.la/",language:[De.ENGLISH],category:He.HENTAI,waitAttr:["#comicImages img","src"],waitVar:"galleryinfo",run(){return{title:document.querySelector("title")?.textContent?.replace("| Hitomi.la","").trim(),series:document.querySelector(".brand")?.getAttribute("href"),pages:unsafeWindow.galleryinfo.files.length,prev:"#",next:"#",listImages:unsafeWindow.galleryinfo.files.map(e=>unsafeWindow.url_from_url_from_hash(unsafeWindow.galleryinfo,e,"webp"))}}},T2={name:"Imhentai",url:/https?:\/\/(www\.)?imhentai.xxx\/view\/.+\/.+\//,homepage:"https://imhentai.xxx/",language:[De.ENGLISH],category:He.HENTAI,waitVar:"g_th",async run(){const e=document.querySelector("#gallery_id")?.getAttribute("value"),t=document.querySelector("#image_dir")?.getAttribute("value"),r=parseInt(document.querySelector("#pages")?.getAttribute("value")??"",10),o=await tu("random_server");return{title:document.querySelector("title")?.textContent?.trim(),series:document.querySelector(".return_btn")?.getAttribute("href"),pages:r,prev:"#",next:"#",listImages:Array(r).fill(0).map((a,s)=>`//${o}/${t}/${e}/${s+1}.${ks(unsafeWindow.g_th[s+1][0])}`)}}},L2={name:["KingComix","Chochox","Comics18"],url:/https?:\/\/(www\.)?(kingcomix|chochox|comics18).(com|org)\/.+/,homepage:["https://kingcomix.com/","https://chochox.com/porno/","https://comics18.org/"],language:[De.ENGLISH,De.SPANISH],category:He.HENTAI,run(){const e=[...document.querySelectorAll("figure img, .entry-content img:not(a img), .wp-content img")];return{title:document.querySelector("h1.singleTitle-h1")?.textContent?.trim(),pages:e.length,prev:"#",next:"#",listImages:e.map(t=>t.getAttribute("data-src")??t.getAttribute("data-full-url")??t.getAttribute("data-lazy-src")??t.getAttribute("src")??"")}}},R2={name:"Luscious",url:/https?:\/\/(www\.)?luscious.net\/.+\/read\/.+/,homepage:"https://luscious.net/",language:[De.ENGLISH],category:He.HENTAI,waitEle:".album-info div",async run(){const e=parseInt(document.querySelector('input[name="page_number"] + span')?.textContent?.match(/\d+/)?.pop()??"0",10),t=Math.ceil(e/50),r=parseInt(document.querySelector(".album-heading a")?.getAttribute("href")?.match(/\d+\//)?.toString()??"0",10),o="&query=%20query%20PictureListInsideAlbum(%24input%3A%20PictureListInput!)%20%7B%20picture%20%7B%20list(input%3A%20%24input)%20%7B%20info%20%7B%20...FacetCollectionInfo%20%7D%20items%20%7B%20__typename%20id%20title%20description%20created%20like_status%20number_of_comments%20number_of_favorites%20moderation_status%20width%20height%20resolution%20aspect_ratio%20url_to_original%20url_to_video%20is_animated%20position%20permissions%20url%20tags%20%7B%20category%20text%20url%20%7D%20thumbnails%20%7B%20width%20height%20size%20url%20%7D%20%7D%20%7D%20%7D%20%7D%20fragment%20FacetCollectionInfo%20on%20FacetCollectionInfo%20%7B%20page%20has_next_page%20has_previous_page%20total_items%20total_pages%20items_per_page%20url_complete%20%7D%20",a=Array(t).fill(0).map(async(c,d)=>{const u=`https://apicdn.luscious.net/graphql/nobatch/?operationName=PictureListInsideAlbum&variables={"input":{"filters":[{"name":"album_id","value":"${r}"}],"display":"position","items_per_page":50,"page":${d+1}}}${o}`;return GM.xmlHttpRequest({method:"GET",url:u}).then(h=>JSON.parse(h.responseText))}),s=(await Promise.all(a)).flatMap(c=>c.data.picture.list.items.map(d=>d.url_to_original));return{title:document.querySelector(".album-heading a")?.textContent?.trim(),series:document.querySelector(".album-heading a")?.getAttribute("href"),pages:e,prev:"#",next:"#",listImages:s}}},ru=/^([\t\n])*(https?:\/\/)?.+\.(jpg|jpeg|png|gif|bmp|webp).*$/;function iu(){return[...document.querySelectorAll(".wp-manga-chapter-img, .blocks-gallery-item img, .reading-content img, #chapter-images img, #chapterContent img")].map(e=>{const t=[...e.attributes].filter(r=>/.*(src|url).*/i.test(r.name)&&!/^.*(blank|lazy|loading).*$/.test(r.value));return t.length===0?"":t.find(r=>ru.test(r.value))?.value??e?.getAttribute("src")??""})}var P2={name:["Madara WordPress Plugin","MangaHaus","Isekai Scan","Comic Kiba","Zinmanga","mangatx","Toonily","Mngazuki","JaiminisBox","DisasterScans","ManhuaPlus","TopManhua","NovelMic","Reset-Scans","LeviatanScans","Dragon Tea","SetsuScans","ToonGod","Hades Scans"],url:/https?:\/\/.+\/(manga|series|manhua|comic|ch|novel|webtoon|tmo)\/.+\/.+/,homepage:["https://mangabooth.com/","https://manhuaus.com","https://isekaiscan.com/","https://comickiba.com/","https://zinmanga.com/","https://mangatx.com/","https://toonily.net/","https://mangazuki.me/","https://jaiminisbox.net","https://disasterscans.com/","https://manhuaplus.org/","https://www.topmanhua.com/","https://novelmic.com/","https://reset-scans.com/","https://leviatanscans.com/","https://dragontea.ink/","https://setsuscans.com/","https://toongod.org/home/","https://lectorhades.latamtoon.com"],language:[De.ENGLISH],obs:"Any Site that uses Madara WordPress Plugin",category:He.MANGA,waitFunc:()=>{const e=iu();return e.length>0&&e.every(t=>t&&ru.test(t))},run(){const e=iu();return{title:document.querySelector("#chapter-heading")?.textContent?.trim(),series:(document.querySelector(".breadcrumb li:nth-child(3) a")??document.querySelector(".breadcrumb li:nth-child(2) a"))?.getAttribute("href"),pages:e.length,prev:document.querySelector(".prev_page")?.getAttribute("href"),next:document.querySelector(".next_page")?.getAttribute("href"),listImages:e}}},$2={...P2,name:["Madara WordPress Plugin","AllPornComic","Manytoon","Manga District"],url:/https?:\/\/.+\/(porncomic|read-scan|title)\/.+\/.+/,homepage:["#","https://allporncomic.com/","https://manytoon.com/","https://mangadistrict.com/"],category:He.HENTAI},z2={name:"MultPorn",url:/https?:\/\/(www\.)?multporn.net\/(comics|hentai_manga)\/.+/,homepage:"https://multporn.net/",language:[De.ENGLISH],category:He.HENTAI,async run(){const e=/"configUrl":"(.+?)",/.exec(document.head.textContent)?.at(1)?.replaceAll("\\","")??"",t=[...(await fetch(e).then(async r=>r.text()).then(r=>new DOMParser().parseFromString(r,"text/xml"))).querySelectorAll("image")];return{title:document.querySelector("#page-title")?.textContent?.trim(),pages:t.length,prev:"#",next:"#",listImages:t.map(r=>r.getAttribute("imageURL")??"")}}},D2={name:"MyHentaiGallery",url:/https?:\/\/(www\.)?myhentaigallery.com\/g\/.+\/\d+/,homepage:"https://www.myhentaigallery.com",language:[De.ENGLISH],category:He.HENTAI,run(){const e=document.getElementById("js__pagination__next")?.parentElement?.previousElementSibling?.querySelector("a"),t=parseInt(e?.textContent??"",10);return{title:document.querySelector("title")?.textContent?.trim(),series:document.querySelector(".back-to-gallery a")?.getAttribute("href"),pages:t,prev:"#",next:"#",listPages:Array(t).fill(0).map((r,o)=>window.location.href.replace(/\/\d+$/,`/${o+1}`)),img:".gallery-slide img"}}},N2={name:["nHentai.net","nHentai.xxx","lhentai"],url:/https?:\/\/(www\.)?(nhentai|lhentai).(net|xxx|com|to)\/g\/.+\/.+/,homepage:["https://nhentai.net/","https://nhentai.xxx/","https://lhentai.com/"],language:[De.ENGLISH],category:He.HENTAI,run(){const e=parseInt(document.querySelector(".num-pages")?.textContent??"",10),t=document.querySelector("#image-container img")?.getAttribute("src")?.replace(/\d+.\w+$/,""),r=unsafeWindow._gallery?.images?.pages?.map(o=>ks(o.t));return{title:document.querySelector("title")?.textContent?.split("- Page")[0].trim(),series:document.querySelector(".go-back")?.getAttribute("href"),pages:e,prev:"#",next:"#",listImages:Array(e).fill(0).map((o,a)=>`${t}${a+1}.${r[a]}`)}}},B2={name:"PornComicsHD",url:/https?:\/\/(www\.)?porncomicshd.com\/es.*/,homepage:"https://porncomicshd.com/es",language:[De.SPANISH],category:He.HENTAI,waitEle:"app-comic-reader img",async run(){const e=[...document.querySelectorAll("app-comic-reader img")];return{title:document.querySelector("h1")?.textContent?.trim(),pages:e.length,prev:"#",next:"#",lazy:!1,listImages:e.map(t=>t.getAttribute("src")??"")}}},H2={name:"Pururin",url:/https?:\/\/(www\.)?pururin.me\/(view|read)\/.+\/.+\/.+/,homepage:"https://pururin.me/",language:[De.ENGLISH],category:He.HENTAI,waitAttr:[".img-viewer img","src"],run(){const e=document.querySelector(".img-viewer img")?.getAttribute("src")??"",t=[...document.querySelectorAll(".img-select option")];return{title:document.querySelector(".title")?.textContent?.trim(),series:document.querySelector(".breadcrumb-item:nth-child(4) a")?.getAttribute("href"),pages:t.length,prev:"#",next:"#",listImages:t.map((r,o)=>e.replace(/\/\d+\./,`/${o+1}.`))}}},F2={name:"SchaleNetwork",url:/https?:\/\/(www\.)?(niyaniya|shupogaki|hoshino).(moe|one)/,homepage:"https://schale.network/",language:[De.ENGLISH],category:He.HENTAI,waitEle:"nav select option",async run(){const e=history.state.memo.gallery,t=e.resolution,{base:r,entries:o}=history.state.memo.data,a=o.map(s=>`${r}/${s.path}?w=${t}`);return{title:e.title,series:`/g/${e.id}/${e.key}/`,pages:a.length,prev:"#",next:"#",fetchOptions:{method:"GET",redirect:"follow"},listImages:a}}},G2={name:"Simply-Hentai",url:/https?:\/\/(www\.)?simply-hentai.com\/.+\/page\/.+/,homepage:"https://simply-hentai.com/",language:[De.ENGLISH],category:He.HENTAI,waitEle:"#__NEXT_DATA__",async run(){const e=JSON.parse(document.querySelector("#__NEXT_DATA__")?.innerHTML??"").props.pageProps.data.pages.map(t=>t.sizes.full);return{title:document.querySelector(".content-headline a")?.textContent?.trim(),series:document.querySelector(".content-headline a")?.getAttribute("href"),pages:e.length,prev:"#",next:"#",listImages:e}}},U2={name:"TMOHentai",url:/https?:\/\/(www\.)?tmohentai.com\/reader\/.+\/(paginated\/\d+|cascade)/,homepage:"https://tmohentai.com/",language:[De.SPANISH],category:He.HENTAI,run(){const e=[...document.querySelectorAll(".content-image")].map(t=>t.getAttribute("data-original")??t.getAttribute("src")??"");return{before(){window.location.pathname.includes("paginated")&&(window.location.pathname=window.location.pathname.replace(/paginated.*/,"cascade"))},title:document.querySelector(".reader-title")?.textContent?.trim(),series:document.querySelector(".nav-justified li a")?.getAttribute("href"),pages:e.length,prev:"#",next:"#",listImages:e}}},W2={name:"Tsumino",url:/https?:\/\/(www\.)?tsumino.com\/Read\/Index\/\d+(\?page=.+)?/,homepage:"https://tsumino.com/",language:[De.ENGLISH],category:He.HENTAI,async run(){const e=document.querySelector("#image-container")?.getAttribute("data-opt"),t=document.querySelector("#image-container")?.getAttribute("data-cdn")??"",r=`https://www.tsumino.com/Read/Load?q=${e}`,o=await fetch(r).then(async a=>a.json());return{title:document.querySelector("title")?.textContent?.replace(/.+Read/,"").trim(),series:o.reader_start_url,pages:o.reader_page_total,prev:"#",next:"#",listImages:Array(o.reader_page_total).fill(0).map((a,s)=>t.replace("[PAGE]",`${s+1}`))}}},V2={name:["vermangasporno","vercomicsporno"],url:/https?:\/\/(www\.)?(vermangasporno|vercomicsporno).com\/.+/,homepage:["https://vermangasporno.com/","https://vercomicsporno.com/"],language:[De.SPANISH],category:He.HENTAI,waitEle:'img[loading="lazy"].size-full, .comicimg picture img, .wp-content img',run(){const e=[...document.querySelectorAll('img[loading="lazy"].size-full, .comicimg picture img, .wp-content img')];return{title:document.querySelector("h1.titl, title")?.textContent?.trim(),pages:e.length,prev:"#",next:"#",listImages:e.map(t=>t.getAttribute("data-lazy-src")??t.getAttribute("data-src")??t.getAttribute("src")??"")}}},Z2={name:"wnacg",url:/https?:\/\/(www\.)?wnacg.com\/photos-view-id-.+/,homepage:"https://wnacg.com/",language:[De.ENGLISH,De.RAW,De.CHINESE],category:He.HENTAI,run(){const e=[...document.querySelectorAll(".pageselect option")];return{title:document.querySelector(".bread a:last-of-type")?.textContent?.trim(),pages:e.length,prev:"#",next:"#",listPages:e.map(t=>window.location.pathname.replace(/\d+/,t.value)),img:"#picarea"}}},j2={name:"XlecxOne",url:/https?:\/\/(www\.)?xlecx.one\/.+/,homepage:"https://xlecx.one/",language:[De.ENGLISH],category:He.HENTAI,run(){const e=[...new Set([...document.querySelectorAll("article .page__text img , article #content-2 img")].map(t=>t.getAttribute("data-src")??t.getAttribute("data-srce")??t.closest("a")?.getAttribute("href")??t.getAttribute("src")??""))];return{title:document.querySelector("title")?.textContent?.trim(),pages:e.length,prev:"#",next:"#",listImages:e}}},q2={name:"xyzcomics",url:/https?:\/\/(www\.)?xyzcomics.com\/.+/,homepage:"https://xyzcomics.com/",language:[De.ENGLISH],category:He.HENTAI,run(){const e=[...document.querySelectorAll(".jig-link")];return{title:document.querySelector(".entry-title")?.textContent?.trim(),pages:e.length,prev:"#",next:"#",listImages:e.map(t=>t.getAttribute("href")??"")}}},K2={name:"Yabai",url:/https?:\/\/(www\.)?yabai.si\/g\/.+\/read/,homepage:"https://yabai.si/",language:[De.ENGLISH],category:He.HENTAI,async run(){const e=document.querySelectorAll("nav select option").length,t={title:document.querySelector("title")?.textContent?.trim(),series:"../",pages:e,prev:"#",next:"#",listImages:[""],async before(){t.listImages=await nu(()=>{const r=document.querySelector("select option");r&&(r.selected=!0),document.querySelector("select")?.dispatchEvent(new Event("change"))},e,'button[title="Next"]',"h1 + div","img.mx-auto","src")}};return t}},Y2=[d2,h2,f2,p2,c2,g2,v2,m2,b2,w2,_2,y2,A2,M2,x2,I2,O2,C2,T2,L2,R2,z2,D2,N2,u2,B2,H2,F2,G2,U2,o2,W2,V2,Z2,j2,q2,K2,$2],X2=pn(((e,t)=>{(function(r,o){typeof e=="object"&&typeof t=="object"?t.exports=o():typeof define=="function"&&define.amd?define([],o):typeof e=="object"?e.bowser=o():r.bowser=o()})(e,(function(){return(function(r){var o={};function a(s){if(o[s])return o[s].exports;var c=o[s]={i:s,l:!1,exports:{}};return r[s].call(c.exports,c,c.exports,a),c.l=!0,c.exports}return a.m=r,a.c=o,a.d=function(s,c,d){a.o(s,c)||Object.defineProperty(s,c,{enumerable:!0,get:d})},a.r=function(s){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(s,"__esModule",{value:!0})},a.t=function(s,c){if(1&c&&(s=a(s)),8&c||4&c&&typeof s=="object"&&s&&s.__esModule)return s;var d=Object.create(null);if(a.r(d),Object.defineProperty(d,"default",{enumerable:!0,value:s}),2&c&&typeof s!="string")for(var u in s)a.d(d,u,function(h){return s[h]}.bind(null,u));return d},a.n=function(s){var c=s&&s.__esModule?function(){return s.default}:function(){return s};return a.d(c,"a",c),c},a.o=function(s,c){return Object.prototype.hasOwnProperty.call(s,c)},a.p="",a(a.s=90)})({17:function(r,o,a){"use strict";o.__esModule=!0,o.default=void 0;var s=a(18);o.default=(function(){function c(){}return c.getFirstMatch=function(d,u){var h=u.match(d);return h&&h.length>0&&h[1]||""},c.getSecondMatch=function(d,u){var h=u.match(d);return h&&h.length>1&&h[2]||""},c.matchAndReturnConst=function(d,u,h){if(d.test(u))return h},c.getWindowsVersionName=function(d){switch(d){case"NT":return"NT";case"XP":return"XP";case"NT 5.0":return"2000";case"NT 5.1":return"XP";case"NT 5.2":return"2003";case"NT 6.0":return"Vista";case"NT 6.1":return"7";case"NT 6.2":return"8";case"NT 6.3":return"8.1";case"NT 10.0":return"10";default:return}},c.getMacOSVersionName=function(d){var u=d.split(".").splice(0,2).map((function(b){return parseInt(b,10)||0}));u.push(0);var h=u[0],f=u[1];if(h===10)switch(f){case 5:return"Leopard";case 6:return"Snow Leopard";case 7:return"Lion";case 8:return"Mountain Lion";case 9:return"Mavericks";case 10:return"Yosemite";case 11:return"El Capitan";case 12:return"Sierra";case 13:return"High Sierra";case 14:return"Mojave";case 15:return"Catalina";default:return}switch(h){case 11:return"Big Sur";case 12:return"Monterey";case 13:return"Ventura";case 14:return"Sonoma";case 15:return"Sequoia";default:return}},c.getAndroidVersionName=function(d){var u=d.split(".").splice(0,2).map((function(h){return parseInt(h,10)||0}));if(u.push(0),!(u[0]===1&&u[1]<5))return u[0]===1&&u[1]<6?"Cupcake":u[0]===1&&u[1]>=6?"Donut":u[0]===2&&u[1]<2?"Eclair":u[0]===2&&u[1]===2?"Froyo":u[0]===2&&u[1]>2?"Gingerbread":u[0]===3?"Honeycomb":u[0]===4&&u[1]<1?"Ice Cream Sandwich":u[0]===4&&u[1]<4?"Jelly Bean":u[0]===4&&u[1]>=4?"KitKat":u[0]===5?"Lollipop":u[0]===6?"Marshmallow":u[0]===7?"Nougat":u[0]===8?"Oreo":u[0]===9?"Pie":void 0},c.getVersionPrecision=function(d){return d.split(".").length},c.compareVersions=function(d,u,h){h===void 0&&(h=!1);var f=c.getVersionPrecision(d),b=c.getVersionPrecision(u),v=Math.max(f,b),g=0,m=c.map([d,u],(function(k){var _=v-c.getVersionPrecision(k),S=k+new Array(_+1).join(".0");return c.map(S.split("."),(function(M){return new Array(20-M.length).join("0")+M})).reverse()}));for(h&&(g=v-Math.min(f,b)),v-=1;v>=g;){if(m[0][v]>m[1][v])return 1;if(m[0][v]===m[1][v]){if(v===g)return 0;v-=1}else if(m[0][v]<m[1][v])return-1}},c.map=function(d,u){var h,f=[];if(Array.prototype.map)return Array.prototype.map.call(d,u);for(h=0;h<d.length;h+=1)f.push(u(d[h]));return f},c.find=function(d,u){var h,f;if(Array.prototype.find)return Array.prototype.find.call(d,u);for(h=0,f=d.length;h<f;h+=1){var b=d[h];if(u(b,h))return b}},c.assign=function(d){for(var u,h,f=d,b=arguments.length,v=new Array(b>1?b-1:0),g=1;g<b;g++)v[g-1]=arguments[g];if(Object.assign)return Object.assign.apply(Object,[d].concat(v));var m=function(){var k=v[u];typeof k=="object"&&k!==null&&Object.keys(k).forEach((function(_){f[_]=k[_]}))};for(u=0,h=v.length;u<h;u+=1)m();return d},c.getBrowserAlias=function(d){return s.BROWSER_ALIASES_MAP[d]},c.getBrowserTypeByAlias=function(d){return s.BROWSER_MAP[d]||""},c})(),r.exports=o.default},18:function(r,o,a){"use strict";o.__esModule=!0,o.ENGINE_MAP=o.OS_MAP=o.PLATFORMS_MAP=o.BROWSER_MAP=o.BROWSER_ALIASES_MAP=void 0,o.BROWSER_ALIASES_MAP={AmazonBot:"amazonbot","Amazon Silk":"amazon_silk","Android Browser":"android",BaiduSpider:"baiduspider",Bada:"bada",BingCrawler:"bingcrawler",Brave:"brave",BlackBerry:"blackberry","ChatGPT-User":"chatgpt_user",Chrome:"chrome",ClaudeBot:"claudebot",Chromium:"chromium",Diffbot:"diffbot",DuckDuckBot:"duckduckbot",DuckDuckGo:"duckduckgo",Electron:"electron",Epiphany:"epiphany",FacebookExternalHit:"facebookexternalhit",Firefox:"firefox",Focus:"focus",Generic:"generic","Google Search":"google_search",Googlebot:"googlebot",GPTBot:"gptbot","Internet Explorer":"ie",InternetArchiveCrawler:"internetarchivecrawler","K-Meleon":"k_meleon",LibreWolf:"librewolf",Linespider:"linespider",Maxthon:"maxthon","Meta-ExternalAds":"meta_externalads","Meta-ExternalAgent":"meta_externalagent","Meta-ExternalFetcher":"meta_externalfetcher","Meta-WebIndexer":"meta_webindexer","Microsoft Edge":"edge","MZ Browser":"mz","NAVER Whale Browser":"naver","OAI-SearchBot":"oai_searchbot",Omgilibot:"omgilibot",Opera:"opera","Opera Coast":"opera_coast","Pale Moon":"pale_moon",PerplexityBot:"perplexitybot","Perplexity-User":"perplexity_user",PhantomJS:"phantomjs",PingdomBot:"pingdombot",Puffin:"puffin",QQ:"qq",QQLite:"qqlite",QupZilla:"qupzilla",Roku:"roku",Safari:"safari",Sailfish:"sailfish","Samsung Internet for Android":"samsung_internet",SlackBot:"slackbot",SeaMonkey:"seamonkey",Sleipnir:"sleipnir","Sogou Browser":"sogou",Swing:"swing",Tizen:"tizen","UC Browser":"uc",Vivaldi:"vivaldi","WebOS Browser":"webos",WeChat:"wechat",YahooSlurp:"yahooslurp","Yandex Browser":"yandex",YandexBot:"yandexbot",YouBot:"youbot"},o.BROWSER_MAP={amazonbot:"AmazonBot",amazon_silk:"Amazon Silk",android:"Android Browser",baiduspider:"BaiduSpider",bada:"Bada",bingcrawler:"BingCrawler",blackberry:"BlackBerry",brave:"Brave",chatgpt_user:"ChatGPT-User",chrome:"Chrome",claudebot:"ClaudeBot",chromium:"Chromium",diffbot:"Diffbot",duckduckbot:"DuckDuckBot",duckduckgo:"DuckDuckGo",edge:"Microsoft Edge",electron:"Electron",epiphany:"Epiphany",facebookexternalhit:"FacebookExternalHit",firefox:"Firefox",focus:"Focus",generic:"Generic",google_search:"Google Search",googlebot:"Googlebot",gptbot:"GPTBot",ie:"Internet Explorer",internetarchivecrawler:"InternetArchiveCrawler",k_meleon:"K-Meleon",librewolf:"LibreWolf",linespider:"Linespider",maxthon:"Maxthon",meta_externalads:"Meta-ExternalAds",meta_externalagent:"Meta-ExternalAgent",meta_externalfetcher:"Meta-ExternalFetcher",meta_webindexer:"Meta-WebIndexer",mz:"MZ Browser",naver:"NAVER Whale Browser",oai_searchbot:"OAI-SearchBot",omgilibot:"Omgilibot",opera:"Opera",opera_coast:"Opera Coast",pale_moon:"Pale Moon",perplexitybot:"PerplexityBot",perplexity_user:"Perplexity-User",phantomjs:"PhantomJS",pingdombot:"PingdomBot",puffin:"Puffin",qq:"QQ Browser",qqlite:"QQ Browser Lite",qupzilla:"QupZilla",roku:"Roku",safari:"Safari",sailfish:"Sailfish",samsung_internet:"Samsung Internet for Android",seamonkey:"SeaMonkey",slackbot:"SlackBot",sleipnir:"Sleipnir",sogou:"Sogou Browser",swing:"Swing",tizen:"Tizen",uc:"UC Browser",vivaldi:"Vivaldi",webos:"WebOS Browser",wechat:"WeChat",yahooslurp:"YahooSlurp",yandex:"Yandex Browser",yandexbot:"YandexBot",youbot:"YouBot"},o.PLATFORMS_MAP={bot:"bot",desktop:"desktop",mobile:"mobile",tablet:"tablet",tv:"tv"},o.OS_MAP={Android:"Android",Bada:"Bada",BlackBerry:"BlackBerry",ChromeOS:"Chrome OS",HarmonyOS:"HarmonyOS",iOS:"iOS",Linux:"Linux",MacOS:"macOS",PlayStation4:"PlayStation 4",Roku:"Roku",Tizen:"Tizen",WebOS:"WebOS",Windows:"Windows",WindowsPhone:"Windows Phone"},o.ENGINE_MAP={Blink:"Blink",EdgeHTML:"EdgeHTML",Gecko:"Gecko",Presto:"Presto",Trident:"Trident",WebKit:"WebKit"}},90:function(r,o,a){"use strict";o.__esModule=!0,o.default=void 0;var s,c=(s=a(91))&&s.__esModule?s:{default:s},d=a(18);function u(h,f){for(var b=0;b<f.length;b++){var v=f[b];v.enumerable=v.enumerable||!1,v.configurable=!0,"value"in v&&(v.writable=!0),Object.defineProperty(h,v.key,v)}}o.default=(function(){function h(){}var f,b,v;return h.getParser=function(g,m,k){if(m===void 0&&(m=!1),k===void 0&&(k=null),typeof g!="string")throw new Error("UserAgent should be a string");return new c.default(g,m,k)},h.parse=function(g,m){return m===void 0&&(m=null),new c.default(g,m).getResult()},f=h,v=[{key:"BROWSER_MAP",get:function(){return d.BROWSER_MAP}},{key:"ENGINE_MAP",get:function(){return d.ENGINE_MAP}},{key:"OS_MAP",get:function(){return d.OS_MAP}},{key:"PLATFORMS_MAP",get:function(){return d.PLATFORMS_MAP}}],(b=null)&&u(f.prototype,b),v&&u(f,v),h})(),r.exports=o.default},91:function(r,o,a){"use strict";o.__esModule=!0,o.default=void 0;var s=f(a(92)),c=f(a(93)),d=f(a(94)),u=f(a(95)),h=f(a(17));function f(b){return b&&b.__esModule?b:{default:b}}o.default=(function(){function b(g,m,k){if(m===void 0&&(m=!1),k===void 0&&(k=null),g==null||g==="")throw new Error("UserAgent parameter can't be empty");this._ua=g;var _=!1;typeof m=="boolean"?(_=m,this._hints=k):this._hints=m!=null&&typeof m=="object"?m:null,this.parsedResult={},_!==!0&&this.parse()}var v=b.prototype;return v.getHints=function(){return this._hints},v.hasBrand=function(g){if(!this._hints||!Array.isArray(this._hints.brands))return!1;var m=g.toLowerCase();return this._hints.brands.some((function(k){return k.brand&&k.brand.toLowerCase()===m}))},v.getBrandVersion=function(g){if(this._hints&&Array.isArray(this._hints.brands)){var m=g.toLowerCase(),k=this._hints.brands.find((function(_){return _.brand&&_.brand.toLowerCase()===m}));return k?k.version:void 0}},v.getUA=function(){return this._ua},v.test=function(g){return g.test(this._ua)},v.parseBrowser=function(){var g=this;this.parsedResult.browser={};var m=h.default.find(s.default,(function(k){if(typeof k.test=="function")return k.test(g);if(Array.isArray(k.test))return k.test.some((function(_){return g.test(_)}));throw new Error("Browser's test function is not valid")}));return m&&(this.parsedResult.browser=m.describe(this.getUA(),this)),this.parsedResult.browser},v.getBrowser=function(){return this.parsedResult.browser?this.parsedResult.browser:this.parseBrowser()},v.getBrowserName=function(g){return g?String(this.getBrowser().name).toLowerCase()||"":this.getBrowser().name||""},v.getBrowserVersion=function(){return this.getBrowser().version},v.getOS=function(){return this.parsedResult.os?this.parsedResult.os:this.parseOS()},v.parseOS=function(){var g=this;this.parsedResult.os={};var m=h.default.find(c.default,(function(k){if(typeof k.test=="function")return k.test(g);if(Array.isArray(k.test))return k.test.some((function(_){return g.test(_)}));throw new Error("Browser's test function is not valid")}));return m&&(this.parsedResult.os=m.describe(this.getUA())),this.parsedResult.os},v.getOSName=function(g){var m=this.getOS().name;return g?String(m).toLowerCase()||"":m||""},v.getOSVersion=function(){return this.getOS().version},v.getPlatform=function(){return this.parsedResult.platform?this.parsedResult.platform:this.parsePlatform()},v.getPlatformType=function(g){g===void 0&&(g=!1);var m=this.getPlatform().type;return g?String(m).toLowerCase()||"":m||""},v.parsePlatform=function(){var g=this;this.parsedResult.platform={};var m=h.default.find(d.default,(function(k){if(typeof k.test=="function")return k.test(g);if(Array.isArray(k.test))return k.test.some((function(_){return g.test(_)}));throw new Error("Browser's test function is not valid")}));return m&&(this.parsedResult.platform=m.describe(this.getUA())),this.parsedResult.platform},v.getEngine=function(){return this.parsedResult.engine?this.parsedResult.engine:this.parseEngine()},v.getEngineName=function(g){return g?String(this.getEngine().name).toLowerCase()||"":this.getEngine().name||""},v.parseEngine=function(){var g=this;this.parsedResult.engine={};var m=h.default.find(u.default,(function(k){if(typeof k.test=="function")return k.test(g);if(Array.isArray(k.test))return k.test.some((function(_){return g.test(_)}));throw new Error("Browser's test function is not valid")}));return m&&(this.parsedResult.engine=m.describe(this.getUA())),this.parsedResult.engine},v.parse=function(){return this.parseBrowser(),this.parseOS(),this.parsePlatform(),this.parseEngine(),this},v.getResult=function(){return h.default.assign({},this.parsedResult)},v.satisfies=function(g){var m=this,k={},_=0,S={},M=0;if(Object.keys(g).forEach((function(fe){var we=g[fe];typeof we=="string"?(S[fe]=we,M+=1):typeof we=="object"&&(k[fe]=we,_+=1)})),_>0){var C=Object.keys(k),T=h.default.find(C,(function(fe){return m.isOS(fe)}));if(T){var $=this.satisfies(k[T]);if($!==void 0)return $}var Z=h.default.find(C,(function(fe){return m.isPlatform(fe)}));if(Z){var U=this.satisfies(k[Z]);if(U!==void 0)return U}}if(M>0){var ie=Object.keys(S),H=h.default.find(ie,(function(fe){return m.isBrowser(fe,!0)}));if(H!==void 0)return this.compareVersion(S[H])}},v.isBrowser=function(g,m){m===void 0&&(m=!1);var k=this.getBrowserName().toLowerCase(),_=g.toLowerCase(),S=h.default.getBrowserTypeByAlias(_);return m&&S&&(_=S.toLowerCase()),_===k},v.compareVersion=function(g){var m=[0],k=g,_=!1,S=this.getBrowserVersion();if(typeof S=="string")return g[0]===">"||g[0]==="<"?(k=g.substr(1),g[1]==="="?(_=!0,k=g.substr(2)):m=[],g[0]===">"?m.push(1):m.push(-1)):g[0]==="="?k=g.substr(1):g[0]==="~"&&(_=!0,k=g.substr(1)),m.indexOf(h.default.compareVersions(S,k,_))>-1},v.isOS=function(g){return this.getOSName(!0)===String(g).toLowerCase()},v.isPlatform=function(g){return this.getPlatformType(!0)===String(g).toLowerCase()},v.isEngine=function(g){return this.getEngineName(!0)===String(g).toLowerCase()},v.is=function(g,m){return m===void 0&&(m=!1),this.isBrowser(g,m)||this.isOS(g)||this.isPlatform(g)},v.some=function(g){var m=this;return g===void 0&&(g=[]),g.some((function(k){return m.is(k)}))},b})(),r.exports=o.default},92:function(r,o,a){"use strict";o.__esModule=!0,o.default=void 0;var s,c=(s=a(17))&&s.__esModule?s:{default:s},d=/version\/(\d+(\.?_?\d+)+)/i;o.default=[{test:[/gptbot/i],describe:function(u){var h={name:"GPTBot"},f=c.default.getFirstMatch(/gptbot\/(\d+(\.\d+)+)/i,u)||c.default.getFirstMatch(d,u);return f&&(h.version=f),h}},{test:[/chatgpt-user/i],describe:function(u){var h={name:"ChatGPT-User"},f=c.default.getFirstMatch(/chatgpt-user\/(\d+(\.\d+)+)/i,u)||c.default.getFirstMatch(d,u);return f&&(h.version=f),h}},{test:[/oai-searchbot/i],describe:function(u){var h={name:"OAI-SearchBot"},f=c.default.getFirstMatch(/oai-searchbot\/(\d+(\.\d+)+)/i,u)||c.default.getFirstMatch(d,u);return f&&(h.version=f),h}},{test:[/claudebot/i,/claude-web/i,/claude-user/i,/claude-searchbot/i],describe:function(u){var h={name:"ClaudeBot"},f=c.default.getFirstMatch(/(?:claudebot|claude-web|claude-user|claude-searchbot)\/(\d+(\.\d+)+)/i,u)||c.default.getFirstMatch(d,u);return f&&(h.version=f),h}},{test:[/omgilibot/i,/webzio-extended/i],describe:function(u){var h={name:"Omgilibot"},f=c.default.getFirstMatch(/(?:omgilibot|webzio-extended)\/(\d+(\.\d+)+)/i,u)||c.default.getFirstMatch(d,u);return f&&(h.version=f),h}},{test:[/diffbot/i],describe:function(u){var h={name:"Diffbot"},f=c.default.getFirstMatch(/diffbot\/(\d+(\.\d+)+)/i,u)||c.default.getFirstMatch(d,u);return f&&(h.version=f),h}},{test:[/perplexitybot/i],describe:function(u){var h={name:"PerplexityBot"},f=c.default.getFirstMatch(/perplexitybot\/(\d+(\.\d+)+)/i,u)||c.default.getFirstMatch(d,u);return f&&(h.version=f),h}},{test:[/perplexity-user/i],describe:function(u){var h={name:"Perplexity-User"},f=c.default.getFirstMatch(/perplexity-user\/(\d+(\.\d+)+)/i,u)||c.default.getFirstMatch(d,u);return f&&(h.version=f),h}},{test:[/youbot/i],describe:function(u){var h={name:"YouBot"},f=c.default.getFirstMatch(/youbot\/(\d+(\.\d+)+)/i,u)||c.default.getFirstMatch(d,u);return f&&(h.version=f),h}},{test:[/meta-webindexer/i],describe:function(u){var h={name:"Meta-WebIndexer"},f=c.default.getFirstMatch(/meta-webindexer\/(\d+(\.\d+)+)/i,u)||c.default.getFirstMatch(d,u);return f&&(h.version=f),h}},{test:[/meta-externalads/i],describe:function(u){var h={name:"Meta-ExternalAds"},f=c.default.getFirstMatch(/meta-externalads\/(\d+(\.\d+)+)/i,u)||c.default.getFirstMatch(d,u);return f&&(h.version=f),h}},{test:[/meta-externalagent/i],describe:function(u){var h={name:"Meta-ExternalAgent"},f=c.default.getFirstMatch(/meta-externalagent\/(\d+(\.\d+)+)/i,u)||c.default.getFirstMatch(d,u);return f&&(h.version=f),h}},{test:[/meta-externalfetcher/i],describe:function(u){var h={name:"Meta-ExternalFetcher"},f=c.default.getFirstMatch(/meta-externalfetcher\/(\d+(\.\d+)+)/i,u)||c.default.getFirstMatch(d,u);return f&&(h.version=f),h}},{test:[/googlebot/i],describe:function(u){var h={name:"Googlebot"},f=c.default.getFirstMatch(/googlebot\/(\d+(\.\d+))/i,u)||c.default.getFirstMatch(d,u);return f&&(h.version=f),h}},{test:[/linespider/i],describe:function(u){var h={name:"Linespider"},f=c.default.getFirstMatch(/(?:linespider)(?:-[-\w]+)?[\s/](\d+(\.\d+)+)/i,u)||c.default.getFirstMatch(d,u);return f&&(h.version=f),h}},{test:[/amazonbot/i],describe:function(u){var h={name:"AmazonBot"},f=c.default.getFirstMatch(/amazonbot\/(\d+(\.\d+)+)/i,u)||c.default.getFirstMatch(d,u);return f&&(h.version=f),h}},{test:[/bingbot/i],describe:function(u){var h={name:"BingCrawler"},f=c.default.getFirstMatch(/bingbot\/(\d+(\.\d+)+)/i,u)||c.default.getFirstMatch(d,u);return f&&(h.version=f),h}},{test:[/baiduspider/i],describe:function(u){var h={name:"BaiduSpider"},f=c.default.getFirstMatch(/baiduspider\/(\d+(\.\d+)+)/i,u)||c.default.getFirstMatch(d,u);return f&&(h.version=f),h}},{test:[/duckduckbot/i],describe:function(u){var h={name:"DuckDuckBot"},f=c.default.getFirstMatch(/duckduckbot\/(\d+(\.\d+)+)/i,u)||c.default.getFirstMatch(d,u);return f&&(h.version=f),h}},{test:[/ia_archiver/i],describe:function(u){var h={name:"InternetArchiveCrawler"},f=c.default.getFirstMatch(/ia_archiver\/(\d+(\.\d+)+)/i,u)||c.default.getFirstMatch(d,u);return f&&(h.version=f),h}},{test:[/facebookexternalhit/i,/facebookcatalog/i],describe:function(){return{name:"FacebookExternalHit"}}},{test:[/slackbot/i,/slack-imgProxy/i],describe:function(u){var h={name:"SlackBot"},f=c.default.getFirstMatch(/(?:slackbot|slack-imgproxy)(?:-[-\w]+)?[\s/](\d+(\.\d+)+)/i,u)||c.default.getFirstMatch(d,u);return f&&(h.version=f),h}},{test:[/yahoo!?[\s/]*slurp/i],describe:function(){return{name:"YahooSlurp"}}},{test:[/yandexbot/i,/yandexmobilebot/i],describe:function(){return{name:"YandexBot"}}},{test:[/pingdom/i],describe:function(){return{name:"PingdomBot"}}},{test:[/opera/i],describe:function(u){var h={name:"Opera"},f=c.default.getFirstMatch(d,u)||c.default.getFirstMatch(/(?:opera)[\s/](\d+(\.?_?\d+)+)/i,u);return f&&(h.version=f),h}},{test:[/opr\/|opios/i],describe:function(u){var h={name:"Opera"},f=c.default.getFirstMatch(/(?:opr|opios)[\s/](\S+)/i,u)||c.default.getFirstMatch(d,u);return f&&(h.version=f),h}},{test:[/SamsungBrowser/i],describe:function(u){var h={name:"Samsung Internet for Android"},f=c.default.getFirstMatch(d,u)||c.default.getFirstMatch(/(?:SamsungBrowser)[\s/](\d+(\.?_?\d+)+)/i,u);return f&&(h.version=f),h}},{test:[/Whale/i],describe:function(u){var h={name:"NAVER Whale Browser"},f=c.default.getFirstMatch(d,u)||c.default.getFirstMatch(/(?:whale)[\s/](\d+(?:\.\d+)+)/i,u);return f&&(h.version=f),h}},{test:[/PaleMoon/i],describe:function(u){var h={name:"Pale Moon"},f=c.default.getFirstMatch(d,u)||c.default.getFirstMatch(/(?:PaleMoon)[\s/](\d+(?:\.\d+)+)/i,u);return f&&(h.version=f),h}},{test:[/MZBrowser/i],describe:function(u){var h={name:"MZ Browser"},f=c.default.getFirstMatch(/(?:MZBrowser)[\s/](\d+(?:\.\d+)+)/i,u)||c.default.getFirstMatch(d,u);return f&&(h.version=f),h}},{test:[/focus/i],describe:function(u){var h={name:"Focus"},f=c.default.getFirstMatch(/(?:focus)[\s/](\d+(?:\.\d+)+)/i,u)||c.default.getFirstMatch(d,u);return f&&(h.version=f),h}},{test:[/swing/i],describe:function(u){var h={name:"Swing"},f=c.default.getFirstMatch(/(?:swing)[\s/](\d+(?:\.\d+)+)/i,u)||c.default.getFirstMatch(d,u);return f&&(h.version=f),h}},{test:[/coast/i],describe:function(u){var h={name:"Opera Coast"},f=c.default.getFirstMatch(d,u)||c.default.getFirstMatch(/(?:coast)[\s/](\d+(\.?_?\d+)+)/i,u);return f&&(h.version=f),h}},{test:[/opt\/\d+(?:.?_?\d+)+/i],describe:function(u){var h={name:"Opera Touch"},f=c.default.getFirstMatch(/(?:opt)[\s/](\d+(\.?_?\d+)+)/i,u)||c.default.getFirstMatch(d,u);return f&&(h.version=f),h}},{test:[/yabrowser/i],describe:function(u){var h={name:"Yandex Browser"},f=c.default.getFirstMatch(/(?:yabrowser)[\s/](\d+(\.?_?\d+)+)/i,u)||c.default.getFirstMatch(d,u);return f&&(h.version=f),h}},{test:[/ucbrowser/i],describe:function(u){var h={name:"UC Browser"},f=c.default.getFirstMatch(d,u)||c.default.getFirstMatch(/(?:ucbrowser)[\s/](\d+(\.?_?\d+)+)/i,u);return f&&(h.version=f),h}},{test:[/Maxthon|mxios/i],describe:function(u){var h={name:"Maxthon"},f=c.default.getFirstMatch(d,u)||c.default.getFirstMatch(/(?:Maxthon|mxios)[\s/](\d+(\.?_?\d+)+)/i,u);return f&&(h.version=f),h}},{test:[/epiphany/i],describe:function(u){var h={name:"Epiphany"},f=c.default.getFirstMatch(d,u)||c.default.getFirstMatch(/(?:epiphany)[\s/](\d+(\.?_?\d+)+)/i,u);return f&&(h.version=f),h}},{test:[/puffin/i],describe:function(u){var h={name:"Puffin"},f=c.default.getFirstMatch(d,u)||c.default.getFirstMatch(/(?:puffin)[\s/](\d+(\.?_?\d+)+)/i,u);return f&&(h.version=f),h}},{test:[/sleipnir/i],describe:function(u){var h={name:"Sleipnir"},f=c.default.getFirstMatch(d,u)||c.default.getFirstMatch(/(?:sleipnir)[\s/](\d+(\.?_?\d+)+)/i,u);return f&&(h.version=f),h}},{test:[/k-meleon/i],describe:function(u){var h={name:"K-Meleon"},f=c.default.getFirstMatch(d,u)||c.default.getFirstMatch(/(?:k-meleon)[\s/](\d+(\.?_?\d+)+)/i,u);return f&&(h.version=f),h}},{test:[/micromessenger/i],describe:function(u){var h={name:"WeChat"},f=c.default.getFirstMatch(/(?:micromessenger)[\s/](\d+(\.?_?\d+)+)/i,u)||c.default.getFirstMatch(d,u);return f&&(h.version=f),h}},{test:[/qqbrowser/i],describe:function(u){var h={name:/qqbrowserlite/i.test(u)?"QQ Browser Lite":"QQ Browser"},f=c.default.getFirstMatch(/(?:qqbrowserlite|qqbrowser)[/](\d+(\.?_?\d+)+)/i,u)||c.default.getFirstMatch(d,u);return f&&(h.version=f),h}},{test:[/msie|trident/i],describe:function(u){var h={name:"Internet Explorer"},f=c.default.getFirstMatch(/(?:msie |rv:)(\d+(\.?_?\d+)+)/i,u);return f&&(h.version=f),h}},{test:[/\sedg\//i],describe:function(u){var h={name:"Microsoft Edge"},f=c.default.getFirstMatch(/\sedg\/(\d+(\.?_?\d+)+)/i,u);return f&&(h.version=f),h}},{test:[/edg([ea]|ios)/i],describe:function(u){var h={name:"Microsoft Edge"},f=c.default.getSecondMatch(/edg([ea]|ios)\/(\d+(\.?_?\d+)+)/i,u);return f&&(h.version=f),h}},{test:[/vivaldi/i],describe:function(u){var h={name:"Vivaldi"},f=c.default.getFirstMatch(/vivaldi\/(\d+(\.?_?\d+)+)/i,u);return f&&(h.version=f),h}},{test:[/seamonkey/i],describe:function(u){var h={name:"SeaMonkey"},f=c.default.getFirstMatch(/seamonkey\/(\d+(\.?_?\d+)+)/i,u);return f&&(h.version=f),h}},{test:[/sailfish/i],describe:function(u){var h={name:"Sailfish"},f=c.default.getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i,u);return f&&(h.version=f),h}},{test:[/silk/i],describe:function(u){var h={name:"Amazon Silk"},f=c.default.getFirstMatch(/silk\/(\d+(\.?_?\d+)+)/i,u);return f&&(h.version=f),h}},{test:[/phantom/i],describe:function(u){var h={name:"PhantomJS"},f=c.default.getFirstMatch(/phantomjs\/(\d+(\.?_?\d+)+)/i,u);return f&&(h.version=f),h}},{test:[/slimerjs/i],describe:function(u){var h={name:"SlimerJS"},f=c.default.getFirstMatch(/slimerjs\/(\d+(\.?_?\d+)+)/i,u);return f&&(h.version=f),h}},{test:[/blackberry|\bbb\d+/i,/rim\stablet/i],describe:function(u){var h={name:"BlackBerry"},f=c.default.getFirstMatch(d,u)||c.default.getFirstMatch(/blackberry[\d]+\/(\d+(\.?_?\d+)+)/i,u);return f&&(h.version=f),h}},{test:[/(web|hpw)[o0]s/i],describe:function(u){var h={name:"WebOS Browser"},f=c.default.getFirstMatch(d,u)||c.default.getFirstMatch(/w(?:eb)?[o0]sbrowser\/(\d+(\.?_?\d+)+)/i,u);return f&&(h.version=f),h}},{test:[/bada/i],describe:function(u){var h={name:"Bada"},f=c.default.getFirstMatch(/dolfin\/(\d+(\.?_?\d+)+)/i,u);return f&&(h.version=f),h}},{test:[/tizen/i],describe:function(u){var h={name:"Tizen"},f=c.default.getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.?_?\d+)+)/i,u)||c.default.getFirstMatch(d,u);return f&&(h.version=f),h}},{test:[/qupzilla/i],describe:function(u){var h={name:"QupZilla"},f=c.default.getFirstMatch(/(?:qupzilla)[\s/](\d+(\.?_?\d+)+)/i,u)||c.default.getFirstMatch(d,u);return f&&(h.version=f),h}},{test:[/librewolf/i],describe:function(u){var h={name:"LibreWolf"},f=c.default.getFirstMatch(/(?:librewolf)[\s/](\d+(\.?_?\d+)+)/i,u);return f&&(h.version=f),h}},{test:[/firefox|iceweasel|fxios/i],describe:function(u){var h={name:"Firefox"},f=c.default.getFirstMatch(/(?:firefox|iceweasel|fxios)[\s/](\d+(\.?_?\d+)+)/i,u);return f&&(h.version=f),h}},{test:[/electron/i],describe:function(u){var h={name:"Electron"},f=c.default.getFirstMatch(/(?:electron)\/(\d+(\.?_?\d+)+)/i,u);return f&&(h.version=f),h}},{test:[/sogoumobilebrowser/i,/metasr/i,/se 2\.[x]/i],describe:function(u){var h={name:"Sogou Browser"},f=c.default.getFirstMatch(/(?:sogoumobilebrowser)[\s/](\d+(\.?_?\d+)+)/i,u),b=c.default.getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i,u),v=c.default.getFirstMatch(/se ([\d.]+)x/i,u),g=f||b||v;return g&&(h.version=g),h}},{test:[/MiuiBrowser/i],describe:function(u){var h={name:"Miui"},f=c.default.getFirstMatch(/(?:MiuiBrowser)[\s/](\d+(\.?_?\d+)+)/i,u);return f&&(h.version=f),h}},{test:function(u){return!!u.hasBrand("DuckDuckGo")||u.test(/\sDdg\/[\d.]+$/i)},describe:function(u,h){var f={name:"DuckDuckGo"};if(h){var b=h.getBrandVersion("DuckDuckGo");if(b)return f.version=b,f}var v=c.default.getFirstMatch(/\sDdg\/([\d.]+)$/i,u);return v&&(f.version=v),f}},{test:function(u){return u.hasBrand("Brave")},describe:function(u,h){var f={name:"Brave"};if(h){var b=h.getBrandVersion("Brave");if(b)return f.version=b,f}return f}},{test:[/chromium/i],describe:function(u){var h={name:"Chromium"},f=c.default.getFirstMatch(/(?:chromium)[\s/](\d+(\.?_?\d+)+)/i,u)||c.default.getFirstMatch(d,u);return f&&(h.version=f),h}},{test:[/chrome|crios|crmo/i],describe:function(u){var h={name:"Chrome"},f=c.default.getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i,u);return f&&(h.version=f),h}},{test:[/GSA/i],describe:function(u){var h={name:"Google Search"},f=c.default.getFirstMatch(/(?:GSA)\/(\d+(\.?_?\d+)+)/i,u);return f&&(h.version=f),h}},{test:function(u){var h=!u.test(/like android/i),f=u.test(/android/i);return h&&f},describe:function(u){var h={name:"Android Browser"},f=c.default.getFirstMatch(d,u);return f&&(h.version=f),h}},{test:[/playstation 4/i],describe:function(u){var h={name:"PlayStation 4"},f=c.default.getFirstMatch(d,u);return f&&(h.version=f),h}},{test:[/safari|applewebkit/i],describe:function(u){var h={name:"Safari"},f=c.default.getFirstMatch(d,u);return f&&(h.version=f),h}},{test:[/.*/i],describe:function(u){var h=u.search("\\(")!==-1?/^(.*)\/(.*)[ \t]\((.*)/:/^(.*)\/(.*) /;return{name:c.default.getFirstMatch(h,u),version:c.default.getSecondMatch(h,u)}}}],r.exports=o.default},93:function(r,o,a){"use strict";o.__esModule=!0,o.default=void 0;var s,c=(s=a(17))&&s.__esModule?s:{default:s},d=a(18);o.default=[{test:[/Roku\/DVP/],describe:function(u){var h=c.default.getFirstMatch(/Roku\/DVP-(\d+\.\d+)/i,u);return{name:d.OS_MAP.Roku,version:h}}},{test:[/windows phone/i],describe:function(u){var h=c.default.getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i,u);return{name:d.OS_MAP.WindowsPhone,version:h}}},{test:[/windows /i],describe:function(u){var h=c.default.getFirstMatch(/Windows ((NT|XP)( \d\d?.\d)?)/i,u),f=c.default.getWindowsVersionName(h);return{name:d.OS_MAP.Windows,version:h,versionName:f}}},{test:[/Macintosh(.*?) FxiOS(.*?)\//],describe:function(u){var h={name:d.OS_MAP.iOS},f=c.default.getSecondMatch(/(Version\/)(\d[\d.]+)/,u);return f&&(h.version=f),h}},{test:[/macintosh/i],describe:function(u){var h=c.default.getFirstMatch(/mac os x (\d+(\.?_?\d+)+)/i,u).replace(/[_\s]/g,"."),f=c.default.getMacOSVersionName(h),b={name:d.OS_MAP.MacOS,version:h};return f&&(b.versionName=f),b}},{test:[/(ipod|iphone|ipad)/i],describe:function(u){var h=c.default.getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i,u).replace(/[_\s]/g,".");return{name:d.OS_MAP.iOS,version:h}}},{test:[/OpenHarmony/i],describe:function(u){var h=c.default.getFirstMatch(/OpenHarmony\s+(\d+(\.\d+)*)/i,u);return{name:d.OS_MAP.HarmonyOS,version:h}}},{test:function(u){var h=!u.test(/like android/i),f=u.test(/android/i);return h&&f},describe:function(u){var h=c.default.getFirstMatch(/android[\s/-](\d+(\.\d+)*)/i,u),f=c.default.getAndroidVersionName(h),b={name:d.OS_MAP.Android,version:h};return f&&(b.versionName=f),b}},{test:[/(web|hpw)[o0]s/i],describe:function(u){var h=c.default.getFirstMatch(/(?:web|hpw)[o0]s\/(\d+(\.\d+)*)/i,u),f={name:d.OS_MAP.WebOS};return h&&h.length&&(f.version=h),f}},{test:[/blackberry|\bbb\d+/i,/rim\stablet/i],describe:function(u){var h=c.default.getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i,u)||c.default.getFirstMatch(/blackberry\d+\/(\d+([_\s]\d+)*)/i,u)||c.default.getFirstMatch(/\bbb(\d+)/i,u);return{name:d.OS_MAP.BlackBerry,version:h}}},{test:[/bada/i],describe:function(u){var h=c.default.getFirstMatch(/bada\/(\d+(\.\d+)*)/i,u);return{name:d.OS_MAP.Bada,version:h}}},{test:[/tizen/i],describe:function(u){var h=c.default.getFirstMatch(/tizen[/\s](\d+(\.\d+)*)/i,u);return{name:d.OS_MAP.Tizen,version:h}}},{test:[/linux/i],describe:function(){return{name:d.OS_MAP.Linux}}},{test:[/CrOS/],describe:function(){return{name:d.OS_MAP.ChromeOS}}},{test:[/PlayStation 4/],describe:function(u){var h=c.default.getFirstMatch(/PlayStation 4[/\s](\d+(\.\d+)*)/i,u);return{name:d.OS_MAP.PlayStation4,version:h}}}],r.exports=o.default},94:function(r,o,a){"use strict";o.__esModule=!0,o.default=void 0;var s,c=(s=a(17))&&s.__esModule?s:{default:s},d=a(18);o.default=[{test:[/googlebot/i],describe:function(){return{type:d.PLATFORMS_MAP.bot,vendor:"Google"}}},{test:[/linespider/i],describe:function(){return{type:d.PLATFORMS_MAP.bot,vendor:"Line"}}},{test:[/amazonbot/i],describe:function(){return{type:d.PLATFORMS_MAP.bot,vendor:"Amazon"}}},{test:[/gptbot/i],describe:function(){return{type:d.PLATFORMS_MAP.bot,vendor:"OpenAI"}}},{test:[/chatgpt-user/i],describe:function(){return{type:d.PLATFORMS_MAP.bot,vendor:"OpenAI"}}},{test:[/oai-searchbot/i],describe:function(){return{type:d.PLATFORMS_MAP.bot,vendor:"OpenAI"}}},{test:[/baiduspider/i],describe:function(){return{type:d.PLATFORMS_MAP.bot,vendor:"Baidu"}}},{test:[/bingbot/i],describe:function(){return{type:d.PLATFORMS_MAP.bot,vendor:"Bing"}}},{test:[/duckduckbot/i],describe:function(){return{type:d.PLATFORMS_MAP.bot,vendor:"DuckDuckGo"}}},{test:[/claudebot/i,/claude-web/i,/claude-user/i,/claude-searchbot/i],describe:function(){return{type:d.PLATFORMS_MAP.bot,vendor:"Anthropic"}}},{test:[/omgilibot/i,/webzio-extended/i],describe:function(){return{type:d.PLATFORMS_MAP.bot,vendor:"Webz.io"}}},{test:[/diffbot/i],describe:function(){return{type:d.PLATFORMS_MAP.bot,vendor:"Diffbot"}}},{test:[/perplexitybot/i],describe:function(){return{type:d.PLATFORMS_MAP.bot,vendor:"Perplexity AI"}}},{test:[/perplexity-user/i],describe:function(){return{type:d.PLATFORMS_MAP.bot,vendor:"Perplexity AI"}}},{test:[/youbot/i],describe:function(){return{type:d.PLATFORMS_MAP.bot,vendor:"You.com"}}},{test:[/ia_archiver/i],describe:function(){return{type:d.PLATFORMS_MAP.bot,vendor:"Internet Archive"}}},{test:[/meta-webindexer/i],describe:function(){return{type:d.PLATFORMS_MAP.bot,vendor:"Meta"}}},{test:[/meta-externalads/i],describe:function(){return{type:d.PLATFORMS_MAP.bot,vendor:"Meta"}}},{test:[/meta-externalagent/i],describe:function(){return{type:d.PLATFORMS_MAP.bot,vendor:"Meta"}}},{test:[/meta-externalfetcher/i],describe:function(){return{type:d.PLATFORMS_MAP.bot,vendor:"Meta"}}},{test:[/facebookexternalhit/i,/facebookcatalog/i],describe:function(){return{type:d.PLATFORMS_MAP.bot,vendor:"Meta"}}},{test:[/slackbot/i,/slack-imgProxy/i],describe:function(){return{type:d.PLATFORMS_MAP.bot,vendor:"Slack"}}},{test:[/yahoo/i],describe:function(){return{type:d.PLATFORMS_MAP.bot,vendor:"Yahoo"}}},{test:[/yandexbot/i,/yandexmobilebot/i],describe:function(){return{type:d.PLATFORMS_MAP.bot,vendor:"Yandex"}}},{test:[/pingdom/i],describe:function(){return{type:d.PLATFORMS_MAP.bot,vendor:"Pingdom"}}},{test:[/huawei/i],describe:function(u){var h=c.default.getFirstMatch(/(can-l01)/i,u)&&"Nova",f={type:d.PLATFORMS_MAP.mobile,vendor:"Huawei"};return h&&(f.model=h),f}},{test:[/nexus\s*(?:7|8|9|10).*/i],describe:function(){return{type:d.PLATFORMS_MAP.tablet,vendor:"Nexus"}}},{test:[/ipad/i],describe:function(){return{type:d.PLATFORMS_MAP.tablet,vendor:"Apple",model:"iPad"}}},{test:[/Macintosh(.*?) FxiOS(.*?)\//],describe:function(){return{type:d.PLATFORMS_MAP.tablet,vendor:"Apple",model:"iPad"}}},{test:[/kftt build/i],describe:function(){return{type:d.PLATFORMS_MAP.tablet,vendor:"Amazon",model:"Kindle Fire HD 7"}}},{test:[/silk/i],describe:function(){return{type:d.PLATFORMS_MAP.tablet,vendor:"Amazon"}}},{test:[/tablet(?! pc)/i],describe:function(){return{type:d.PLATFORMS_MAP.tablet}}},{test:function(u){var h=u.test(/ipod|iphone/i),f=u.test(/like (ipod|iphone)/i);return h&&!f},describe:function(u){var h=c.default.getFirstMatch(/(ipod|iphone)/i,u);return{type:d.PLATFORMS_MAP.mobile,vendor:"Apple",model:h}}},{test:[/nexus\s*[0-6].*/i,/galaxy nexus/i],describe:function(){return{type:d.PLATFORMS_MAP.mobile,vendor:"Nexus"}}},{test:[/Nokia/i],describe:function(u){var h=c.default.getFirstMatch(/Nokia\s+([0-9]+(\.[0-9]+)?)/i,u),f={type:d.PLATFORMS_MAP.mobile,vendor:"Nokia"};return h&&(f.model=h),f}},{test:[/[^-]mobi/i],describe:function(){return{type:d.PLATFORMS_MAP.mobile}}},{test:function(u){return u.getBrowserName(!0)==="blackberry"},describe:function(){return{type:d.PLATFORMS_MAP.mobile,vendor:"BlackBerry"}}},{test:function(u){return u.getBrowserName(!0)==="bada"},describe:function(){return{type:d.PLATFORMS_MAP.mobile}}},{test:function(u){return u.getBrowserName()==="windows phone"},describe:function(){return{type:d.PLATFORMS_MAP.mobile,vendor:"Microsoft"}}},{test:function(u){var h=Number(String(u.getOSVersion()).split(".")[0]);return u.getOSName(!0)==="android"&&h>=3},describe:function(){return{type:d.PLATFORMS_MAP.tablet}}},{test:function(u){return u.getOSName(!0)==="android"},describe:function(){return{type:d.PLATFORMS_MAP.mobile}}},{test:[/smart-?tv|smarttv/i],describe:function(){return{type:d.PLATFORMS_MAP.tv}}},{test:[/netcast/i],describe:function(){return{type:d.PLATFORMS_MAP.tv}}},{test:function(u){return u.getOSName(!0)==="macos"},describe:function(){return{type:d.PLATFORMS_MAP.desktop,vendor:"Apple"}}},{test:function(u){return u.getOSName(!0)==="windows"},describe:function(){return{type:d.PLATFORMS_MAP.desktop}}},{test:function(u){return u.getOSName(!0)==="linux"},describe:function(){return{type:d.PLATFORMS_MAP.desktop}}},{test:function(u){return u.getOSName(!0)==="playstation 4"},describe:function(){return{type:d.PLATFORMS_MAP.tv}}},{test:function(u){return u.getOSName(!0)==="roku"},describe:function(){return{type:d.PLATFORMS_MAP.tv}}}],r.exports=o.default},95:function(r,o,a){"use strict";o.__esModule=!0,o.default=void 0;var s,c=(s=a(17))&&s.__esModule?s:{default:s},d=a(18);o.default=[{test:function(u){return u.getBrowserName(!0)==="microsoft edge"},describe:function(u){if(/\sedg\//i.test(u))return{name:d.ENGINE_MAP.Blink};var h=c.default.getFirstMatch(/edge\/(\d+(\.?_?\d+)+)/i,u);return{name:d.ENGINE_MAP.EdgeHTML,version:h}}},{test:[/trident/i],describe:function(u){var h={name:d.ENGINE_MAP.Trident},f=c.default.getFirstMatch(/trident\/(\d+(\.?_?\d+)+)/i,u);return f&&(h.version=f),h}},{test:function(u){return u.test(/presto/i)},describe:function(u){var h={name:d.ENGINE_MAP.Presto},f=c.default.getFirstMatch(/presto\/(\d+(\.?_?\d+)+)/i,u);return f&&(h.version=f),h}},{test:function(u){var h=u.test(/gecko/i),f=u.test(/like gecko/i);return h&&!f},describe:function(u){var h={name:d.ENGINE_MAP.Gecko},f=c.default.getFirstMatch(/gecko\/(\d+(\.?_?\d+)+)/i,u);return f&&(h.version=f),h}},{test:[/(apple)?webkit\/537\.36/i],describe:function(){return{name:d.ENGINE_MAP.Blink}}},{test:[/(apple)?webkit/i],describe:function(u){var h={name:d.ENGINE_MAP.WebKit},f=c.default.getFirstMatch(/webkit\/(\d+(\.?_?\d+)+)/i,u);return f&&(h.version=f),h}}],r.exports=o.default}})}))})),ou=zo(X2(),1);function J2(e,t){typeof unsafeWindow<"u"&&(unsafeWindow[e]=t),typeof window<"u"&&(window[e]=t)}function ke(...e){return console.log("MangaOnlineViewer-adult-min: ",...e),e}function mn(...e){return["dev","development"].includes("adult-min")&&console.info("MangaOnlineViewer: ",...e),e}function au(e){typeof GM_deleteValue<"u"?GM_deleteValue(e):mn("Fake Removing: ",e)}var Es=typeof GM_info<"u"?GM_info:{scriptHandler:"Console",script:{name:"Debug",version:"Testing"}};function Q2(e,t){return typeof GM_getValue<"u"?GM_getValue(e,t):(mn("Fake Getting: ",e," = ",t),t)}function su(e,t){const r=Q2(e,t);if(typeof r=="string"&&r.trim()!=="")try{return JSON.parse(r)}catch(o){return ke("Failed to parse JSON from storage",e,o),t}return r}function ep(e){return su("settings",e)}function tp(e){return su(window.location.hostname,e)}function lu(e,t){return typeof GM_setValue<"u"?(GM_setValue(e,t),ke("Setting: ",e," = ",t),t.toString()):(mn("Fake Setting: ",e," = ",t),String(t))}function np(e){return lu("settings",e)}function cu(e){return lu(window.location.hostname,e)}function rp(){const e=ou.default.getParser(window.navigator.userAgent).getBrowser();return`${e.name} ${e.version}`}function ip(){return Es.scriptHandler??"Greasemonkey"}var Di=()=>{const e=ou.default.getParser(window.navigator.userAgent).getPlatformType(!0);return e==="mobile"||window.matchMedia("screen and (max-width: 600px)").matches?"mobile":e==="tablet"||window.matchMedia("screen and (max-width: 992px)").matches?"tablet":"desktop"},op=()=>Di()==="mobile"||Di()==="tablet",uu=(e,t="settings")=>{if(typeof GM_addValueChangeListener<"u")try{return GM_addValueChangeListener(t,(r,o,a,s)=>{s&&e(a)})}catch(r){ke("Failed to add settings listener",r)}};async function Ni(e,t,r,o){e!==void 0&&(ke(r),ke(o,await t(e)))}async function ap(e){await Ni(e.waitAttr,t=>eu(t?.[0],t?.[1]),`Waiting for Attribute ${e.waitAttr?.[1]} of ${e.waitAttr?.[0]}`,`Found Attribute ${e.waitAttr?.[1]} of ${e.waitAttr?.[0]} =`),await Ni(e.waitEle,a2,`Waiting for Element ${e.waitEle}`,"Found Element"),await Ni(e.waitVar,tu,`Waiting for Variable ${e.waitVar}`,"Found Variable"),await Ni(e.waitFunc,ys,`Waiting to pass Function check ${e.waitFunc}`,"Found Function check"),await Ni(e.waitTime,t=>new Promise(r=>setTimeout(r,t)),`Waiting for ${e.waitTime} milliseconds`,"Continuing after timer")}var sp="@moaqzdev/toast",Bi={_dispatchToast(e,t){Object.assign(t,{type:e});const r=new CustomEvent(sp,{detail:t});document.dispatchEvent(r)},success(e){this._dispatchToast("success",e)},error(e){this._dispatchToast("error",e)},warning(e){this._dispatchToast("warning",e)},info(e){this._dispatchToast("info",e)},confirm(e){this._dispatchToast("confirm",e)}},On=[],ar=0,Do=4,No=0,du=e=>{let t=[],r={get(){return r.lc||r.listen(()=>{})(),r.value},init:e,lc:0,listen(o){return r.lc=t.push(o),()=>{for(let s=ar+Do;s<On.length;)On[s]===o?On.splice(s,Do):s+=Do;let a=t.indexOf(o);~a&&(t.splice(a,1),--r.lc||r.off())}},notify(o,a){No++;let s=!On.length;for(let c of t)On.push(c,r.value,o,a);if(s){for(ar=0;ar<On.length;ar+=Do)On[ar](On[ar+1],On[ar+2],On[ar+3]);On.length=0}},off(){},set(o){let a=r.value;a!==o&&(r.value=o,r.notify(a))},subscribe(o){let a=r.listen(o);return o(r.value),a},value:e};return r},lp=5,Bo=6,Ho=10,cp=(e,t,r,o)=>(e.events=e.events||{},e.events[r+Ho]||(e.events[r+Ho]=o(a=>{e.events[r].reduceRight((s,c)=>(c(s),s),{shared:{},...a})})),e.events[r]=e.events[r]||[],e.events[r].push(t),()=>{let a=e.events[r],s=a.indexOf(t);a.splice(s,1),a.length||(delete e.events[r],e.events[r+Ho](),delete e.events[r+Ho])}),up=1e3,dp=(e,t)=>cp(e,o=>{let a=t(o);a&&e.events[Bo].push(a)},lp,o=>{let a=e.listen;e.listen=(...c)=>(!e.lc&&!e.active&&(e.active=!0,o()),a(...c));let s=e.off;return e.events[Bo]=[],e.off=()=>{s(),setTimeout(()=>{if(e.active&&!e.lc){e.active=!1;for(let c of e.events[Bo])c();e.events[Bo]=[]}},up)},()=>{e.listen=a,e.off=s}}),hp=(e,t,r)=>{Array.isArray(e)||(e=[e]);let o,a,s=()=>{if(a===No)return;a=No;let f=e.map(b=>b.get());if(!o||f.some((b,v)=>b!==o[v])){o=f;let b=t(...f);b&&b.then&&b.t?b.then(v=>{o===f&&c.set(v)}):(c.set(b),a=No)}},c=du(void 0),d=c.get;c.get=()=>(s(),d());let u,h=r?()=>{clearTimeout(u),u=setTimeout(s)}:s;return dp(c,()=>{let f=e.map(b=>b.listen(h));return s(),()=>{for(let b of f)b()}}),c},fp=(e,t)=>hp(e,t),hu=(e={})=>{let t=du(e);return t.setKey=function(r,o){let a=t.value;typeof o>"u"&&r in t.value?(t.value={...t.value},delete t.value[r],t.notify(a,r)):t.value[r]!==o&&(t.value={...t.value,[r]:o},t.notify(a,r))},t},Ss=globalThis,fu=e=>e,Fo=Ss.trustedTypes,pu=Fo?Fo.createPolicy("lit-html",{createHTML:e=>e}):void 0,As="$lit$",Wn=`lit$${Math.random().toFixed(9).slice(2)}$`,Ms="?"+Wn,pp=`<${Ms}>`,Cr=document,Hi=()=>Cr.createComment(""),Fi=e=>e===null||typeof e!="object"&&typeof e!="function",xs=Array.isArray,gu=e=>xs(e)||typeof e?.[Symbol.iterator]=="function",Is=`[ 	
\f\r]`,Gi=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,mu=/-->/g,vu=/>/g,Tr=RegExp(`>|${Is}(?:([^\\s"'>=/]+)(${Is}*=${Is}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),bu=/'/g,wu=/"/g,_u=/^(?:script|style|textarea|title)$/i,Os=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),le=Os(1),XE=Os(2),JE=Os(3),Vn=Symbol.for("lit-noChange"),Pe=Symbol.for("lit-nothing"),yu=new WeakMap,Lr=Cr.createTreeWalker(Cr,129);function ku(e,t){if(!xs(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return pu!==void 0?pu.createHTML(t):t}var Eu=(e,t)=>{const r=e.length-1,o=[];let a,s=t===2?"<svg>":t===3?"<math>":"",c=Gi;for(let d=0;d<r;d++){const u=e[d];let h,f,b=-1,v=0;for(;v<u.length&&(c.lastIndex=v,f=c.exec(u),f!==null);)v=c.lastIndex,c===Gi?f[1]==="!--"?c=mu:f[1]!==void 0?c=vu:f[2]!==void 0?(_u.test(f[2])&&(a=RegExp("</"+f[2],"g")),c=Tr):f[3]!==void 0&&(c=Tr):c===Tr?f[0]===">"?(c=a??Gi,b=-1):f[1]===void 0?b=-2:(b=c.lastIndex-f[2].length,h=f[1],c=f[3]===void 0?Tr:f[3]==='"'?wu:bu):c===wu||c===bu?c=Tr:c===mu||c===vu?c=Gi:(c=Tr,a=void 0);const g=c===Tr&&e[d+1].startsWith("/>")?" ":"";s+=c===Gi?u+pp:b>=0?(o.push(h),u.slice(0,b)+As+u.slice(b)+Wn+g):u+Wn+(b===-2?d:g)}return[ku(e,s+(e[r]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),o]},Cs=class jf{constructor({strings:t,_$litType$:r},o){let a;this.parts=[];let s=0,c=0;const d=t.length-1,u=this.parts,[h,f]=Eu(t,r);if(this.el=jf.createElement(h,o),Lr.currentNode=this.el.content,r===2||r===3){const b=this.el.content.firstChild;b.replaceWith(...b.childNodes)}for(;(a=Lr.nextNode())!==null&&u.length<d;){if(a.nodeType===1){if(a.hasAttributes())for(const b of a.getAttributeNames())if(b.endsWith(As)){const v=f[c++],g=a.getAttribute(b).split(Wn),m=/([.?@])?(.*)/.exec(v);u.push({type:1,index:s,name:m[2],strings:g,ctor:m[1]==="."?Au:m[1]==="?"?Mu:m[1]==="@"?xu:Ui}),a.removeAttribute(b)}else b.startsWith(Wn)&&(u.push({type:6,index:s}),a.removeAttribute(b));if(_u.test(a.tagName)){const b=a.textContent.split(Wn),v=b.length-1;if(v>0){a.textContent=Fo?Fo.emptyScript:"";for(let g=0;g<v;g++)a.append(b[g],Hi()),Lr.nextNode(),u.push({type:2,index:++s});a.append(b[v],Hi())}}}else if(a.nodeType===8)if(a.data===Ms)u.push({type:2,index:s});else{let b=-1;for(;(b=a.data.indexOf(Wn,b+1))!==-1;)u.push({type:7,index:s}),b+=Wn.length-1}s++}}static createElement(t,r){const o=Cr.createElement("template");return o.innerHTML=t,o}};function Rr(e,t,r=e,o){if(t===Vn)return t;let a=o!==void 0?r._$Co?.[o]:r._$Cl;const s=Fi(t)?void 0:t._$litDirective$;return a?.constructor!==s&&(a?._$AO?.(!1),s===void 0?a=void 0:(a=new s(e),a._$AT(e,r,o)),o!==void 0?(r._$Co??=[])[o]=a:r._$Cl=a),a!==void 0&&(t=Rr(e,a._$AS(e,t.values),a,o)),t}var Su=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:r}=this._$AD,o=(e?.creationScope??Cr).importNode(t,!0);Lr.currentNode=o;let a=Lr.nextNode(),s=0,c=0,d=r[0];for(;d!==void 0;){if(s===d.index){let u;d.type===2?u=new Go(a,a.nextSibling,this,e):d.type===1?u=new d.ctor(a,d.name,d.strings,this,e):d.type===6&&(u=new Iu(a,this,e)),this._$AV.push(u),d=r[++c]}s!==d?.index&&(a=Lr.nextNode(),s++)}return Lr.currentNode=Cr,o}p(e){let t=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(e,r,t),t+=r.strings.length-2):r._$AI(e[t])),t++}},Go=class qf{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,r,o,a){this.type=2,this._$AH=Pe,this._$AN=void 0,this._$AA=t,this._$AB=r,this._$AM=o,this.options=a,this._$Cv=a?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&t?.nodeType===11&&(t=r.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,r=this){t=Rr(this,t,r),Fi(t)?t===Pe||t==null||t===""?(this._$AH!==Pe&&this._$AR(),this._$AH=Pe):t!==this._$AH&&t!==Vn&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):gu(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==Pe&&Fi(this._$AH)?this._$AA.nextSibling.data=t:this.T(Cr.createTextNode(t)),this._$AH=t}$(t){const{values:r,_$litType$:o}=t,a=typeof o=="number"?this._$AC(t):(o.el===void 0&&(o.el=Cs.createElement(ku(o.h,o.h[0]),this.options)),o);if(this._$AH?._$AD===a)this._$AH.p(r);else{const s=new Su(a,this),c=s.u(this.options);s.p(r),this.T(c),this._$AH=s}}_$AC(t){let r=yu.get(t.strings);return r===void 0&&yu.set(t.strings,r=new Cs(t)),r}k(t){xs(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let o,a=0;for(const s of t)a===r.length?r.push(o=new qf(this.O(Hi()),this.O(Hi()),this,this.options)):o=r[a],o._$AI(s),a++;a<r.length&&(this._$AR(o&&o._$AB.nextSibling,a),r.length=a)}_$AR(t=this._$AA.nextSibling,r){for(this._$AP?.(!1,!0,r);t!==this._$AB;){const o=fu(t).nextSibling;fu(t).remove(),t=o}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}},Ui=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,r,o,a){this.type=1,this._$AH=Pe,this._$AN=void 0,this.element=e,this.name=t,this._$AM=o,this.options=a,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=Pe}_$AI(e,t=this,r,o){const a=this.strings;let s=!1;if(a===void 0)e=Rr(this,e,t,0),s=!Fi(e)||e!==this._$AH&&e!==Vn,s&&(this._$AH=e);else{const c=e;let d,u;for(e=a[0],d=0;d<a.length-1;d++)u=Rr(this,c[r+d],t,d),u===Vn&&(u=this._$AH[d]),s||=!Fi(u)||u!==this._$AH[d],u===Pe?e=Pe:e!==Pe&&(e+=(u??"")+a[d+1]),this._$AH[d]=u}s&&!o&&this.j(e)}j(e){e===Pe?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},Au=class extends Ui{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===Pe?void 0:e}},Mu=class extends Ui{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==Pe)}},xu=class extends Ui{constructor(e,t,r,o,a){super(e,t,r,o,a),this.type=5}_$AI(e,t=this){if((e=Rr(this,e,t,0)??Pe)===Vn)return;const r=this._$AH,o=e===Pe&&r!==Pe||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,a=e!==Pe&&(r===Pe||o);o&&this.element.removeEventListener(this.name,this,r),a&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},Iu=class{constructor(e,t,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){Rr(this,e)}},gp={M:As,P:Wn,A:Ms,C:1,L:Eu,R:Su,D:gu,V:Rr,I:Go,H:Ui,N:Mu,U:xu,B:Au,F:Iu},mp=Ss.litHtmlPolyfillSupport;mp?.(Cs,Go),(Ss.litHtmlVersions??=[]).push("3.3.2");var vp=(e,t,r)=>{const o=r?.renderBefore??t;let a=o._$litPart$;if(a===void 0){const s=r?.renderBefore??null;o._$litPart$=a=new Go(t.insertBefore(Hi(),s),s,void 0,r??{})}return a._$AI(e),a},{I:bp}=gp,Ou=e=>e,QE=e=>e===null||typeof e!="object"&&typeof e!="function",eS={HTML:1,SVG:2,MATHML:3},tS=(e,t)=>t===void 0?e?._$litType$!==void 0:e?._$litType$===t,nS=e=>e?._$litType$?.h!=null,rS=e=>e?._$litDirective$!==void 0,iS=e=>e?._$litDirective$,wp=e=>e.strings===void 0,Cu=()=>document.createComment(""),oS=(e,t,r)=>{const o=e._$AA.parentNode,a=t===void 0?e._$AB:t._$AA;if(r===void 0)r=new bp(o.insertBefore(Cu(),a),o.insertBefore(Cu(),a),e,e.options);else{const s=r._$AB.nextSibling,c=r._$AM,d=c!==e;if(d){let u;r._$AQ?.(e),r._$AM=e,r._$AP!==void 0&&(u=e._$AU)!==c._$AU&&r._$AP(u)}if(s!==a||d){let u=r._$AA;for(;u!==s;){const h=Ou(u).nextSibling;Ou(o).insertBefore(u,a),u=h}}}return r},aS=(e,t,r=e)=>(e._$AI(t,r),e),_p={},sS=(e,t=_p)=>e._$AH=t,lS=e=>e._$AH,cS=e=>{e._$AR(),e._$AA.remove()},uS=e=>{e._$AR()},Uo={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Wi=e=>(...t)=>({_$litDirective$:e,values:t}),Wo=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,r){this._$Ct=e,this._$AM=t,this._$Ci=r}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}},Vi=(e,t)=>{const r=e._$AN;if(r===void 0)return!1;for(const o of r)o._$AO?.(t,!1),Vi(o,t);return!0},Vo=e=>{let t,r;do{if((t=e._$AM)===void 0)break;r=t._$AN,r.delete(e),e=t}while(r?.size===0)},Tu=e=>{for(let t;t=e._$AM;e=t){let r=t._$AN;if(r===void 0)t._$AN=r=new Set;else if(r.has(e))break;r.add(e),Ep(t)}};function yp(e){this._$AN!==void 0?(Vo(this),this._$AM=e,Tu(this)):this._$AM=e}function kp(e,t=!1,r=0){const o=this._$AH,a=this._$AN;if(a!==void 0&&a.size!==0)if(t)if(Array.isArray(o))for(let s=r;s<o.length;s++)Vi(o[s],!1),Vo(o[s]);else o!=null&&(Vi(o,!1),Vo(o));else Vi(this,e)}var Ep=e=>{e.type==Uo.CHILD&&(e._$AP??=kp,e._$AQ??=yp)},Sp=class extends Wo{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,r){super._$AT(e,t,r),Tu(this),this.isConnected=e._$AU}_$AO(e,t=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),t&&(Vi(this,e),Vo(this))}setValue(e){if(wp(this._$Ct))this._$Ct._$AI(e,this);else{const t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}},Ts=()=>new Ap,Ap=class{},Ls=new WeakMap,Rs=Wi(class extends Sp{render(e){return Pe}update(e,[t]){const r=t!==this.G;return r&&this.G!==void 0&&this.rt(void 0),(r||this.lt!==this.ct)&&(this.G=t,this.ht=e.options?.host,this.rt(this.ct=e.element)),Pe}rt(e){if(this.isConnected||(e=void 0),typeof this.G=="function"){const t=this.ht??globalThis;let r=Ls.get(t);r===void 0&&(r=new WeakMap,Ls.set(t,r)),r.get(this.G)!==void 0&&this.G.call(this.ht,void 0),r.set(this.G,e),e!==void 0&&this.G.call(this.ht,e)}else this.G.value=e}get lt(){return typeof this.G=="function"?Ls.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),Mp=pn(((e,t)=>{(function(){var r,o="4.17.23",a=200,s="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",c="Expected a function",d="Invalid `variable` option passed into `_.template`",u="__lodash_hash_undefined__",h=500,f="__lodash_placeholder__",b=1,v=2,g=4,m=1,k=2,_=1,S=2,M=4,C=8,T=16,$=32,Z=64,U=128,ie=256,H=512,fe=30,we="...",R=800,j=16,E=1,J=2,xe=3,oe=1/0,Me=9007199254740991,ae=17976931348623157e292,Ee=NaN,F=4294967295,G=F-1,Se=F>>>1,pe=[["ary",U],["bind",_],["bindKey",S],["curry",C],["curryRight",T],["flip",H],["partial",$],["partialRight",Z],["rearg",ie]],de="[object Arguments]",Ke="[object Array]",kt="[object AsyncFunction]",$e="[object Boolean]",Fe="[object Date]",Et="[object DOMException]",rt="[object Error]",Ft="[object Function]",Kt="[object GeneratorFunction]",w="[object Map]",Q="[object Number]",V="[object Null]",O="[object Object]",I="[object Promise]",D="[object Proxy]",re="[object RegExp]",ne="[object Set]",B="[object String]",ce="[object Symbol]",ve="[object Undefined]",ue="[object WeakMap]",Ae="[object WeakSet]",Ze="[object ArrayBuffer]",Ne="[object DataView]",Dt="[object Float32Array]",Kn="[object Float64Array]",Yt="[object Int8Array]",Yn="[object Int16Array]",at="[object Int32Array]",vr="[object Uint8Array]",Ur="[object Uint8ClampedArray]",cn="[object Uint16Array]",ki="[object Uint32Array]",zl=/\b__p \+= '';/g,Dl=/\b(__p \+=) '' \+/g,Nl=/(__e\(.*?\)|\b__t\)) \+\n'';/g,wo=/&(?:amp|lt|gt|quot|#39);/g,br=/[&<>"']/g,Ei=RegExp(wo.source),M9=RegExp(br.source),x9=/<%-([\s\S]+?)%>/g,I9=/<%([\s\S]+?)%>/g,wh=/<%=([\s\S]+?)%>/g,O9=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,C9=/^\w*$/,T9=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Bl=/[\\^$.*+?()[\]{}|]/g,L9=RegExp(Bl.source),Hl=/^\s+/,R9=/\s/,P9=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,$9=/\{\n\/\* \[wrapped with (.+)\] \*/,z9=/,? & /,D9=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,N9=/[()=,{}\[\]\/\s]/,B9=/\\(\\)?/g,H9=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,_h=/\w*$/,F9=/^[-+]0x[0-9a-f]+$/i,G9=/^0b[01]+$/i,U9=/^\[object .+?Constructor\]$/,W9=/^0o[0-7]+$/i,V9=/^(?:0|[1-9]\d*)$/,Z9=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Ta=/($^)/,j9=/['\n\r\u2028\u2029\\]/g,La="\\ud800-\\udfff",yh="\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff",kh="\\u2700-\\u27bf",Eh="a-z\\xdf-\\xf6\\xf8-\\xff",q9="\\xac\\xb1\\xd7\\xf7",K9="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",Y9="\\u2000-\\u206f",X9=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Sh="A-Z\\xc0-\\xd6\\xd8-\\xde",Ah="\\ufe0e\\ufe0f",Mh=q9+K9+Y9+X9,Fl="['’]",J9="["+La+"]",xh="["+Mh+"]",Ra="["+yh+"]",Ih="\\d+",Q9="["+kh+"]",Oh="["+Eh+"]",Ch="[^"+La+Mh+Ih+kh+Eh+Sh+"]",Gl="\\ud83c[\\udffb-\\udfff]",e7="(?:"+Ra+"|"+Gl+")",Th="[^"+La+"]",Ul="(?:\\ud83c[\\udde6-\\uddff]){2}",Wl="[\\ud800-\\udbff][\\udc00-\\udfff]",Si="["+Sh+"]",Lh="\\u200d",Rh="(?:"+Oh+"|"+Ch+")",t7="(?:"+Si+"|"+Ch+")",Ph="(?:"+Fl+"(?:d|ll|m|re|s|t|ve))?",$h="(?:"+Fl+"(?:D|LL|M|RE|S|T|VE))?",zh=e7+"?",Dh="["+Ah+"]?",n7="(?:"+Lh+"(?:"+[Th,Ul,Wl].join("|")+")"+Dh+zh+")*",r7="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",i7="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",Nh=Dh+zh+n7,o7="(?:"+[Q9,Ul,Wl].join("|")+")"+Nh,a7="(?:"+[Th+Ra+"?",Ra,Ul,Wl,J9].join("|")+")",s7=RegExp(Fl,"g"),l7=RegExp(Ra,"g"),Vl=RegExp(Gl+"(?="+Gl+")|"+a7+Nh,"g"),c7=RegExp([Si+"?"+Oh+"+"+Ph+"(?="+[xh,Si,"$"].join("|")+")",t7+"+"+$h+"(?="+[xh,Si+Rh,"$"].join("|")+")",Si+"?"+Rh+"+"+Ph,Si+"+"+$h,i7,r7,Ih,o7].join("|"),"g"),u7=RegExp("["+Lh+La+yh+Ah+"]"),d7=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,h7=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],f7=-1,st={};st[Dt]=st[Kn]=st[Yt]=st[Yn]=st[at]=st[vr]=st[Ur]=st[cn]=st[ki]=!0,st[de]=st[Ke]=st[Ze]=st[$e]=st[Ne]=st[Fe]=st[rt]=st[Ft]=st[w]=st[Q]=st[O]=st[re]=st[ne]=st[B]=st[ue]=!1;var it={};it[de]=it[Ke]=it[Ze]=it[Ne]=it[$e]=it[Fe]=it[Dt]=it[Kn]=it[Yt]=it[Yn]=it[at]=it[w]=it[Q]=it[O]=it[re]=it[ne]=it[B]=it[ce]=it[vr]=it[Ur]=it[cn]=it[ki]=!0,it[rt]=it[Ft]=it[ue]=!1;var p7={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},g7={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},m7={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},v7={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},b7=parseFloat,w7=parseInt,Bh=typeof global=="object"&&global&&global.Object===Object&&global,_7=typeof self=="object"&&self&&self.Object===Object&&self,Ct=Bh||_7||Function("return this")(),Zl=typeof e=="object"&&e&&!e.nodeType&&e,Wr=Zl&&typeof t=="object"&&t&&!t.nodeType&&t,Hh=Wr&&Wr.exports===Zl,jl=Hh&&Bh.process,yn=(function(){try{var z=Wr&&Wr.require&&Wr.require("util").types;return z||jl&&jl.binding&&jl.binding("util")}catch{}})(),Fh=yn&&yn.isArrayBuffer,Gh=yn&&yn.isDate,Uh=yn&&yn.isMap,Wh=yn&&yn.isRegExp,Vh=yn&&yn.isSet,Zh=yn&&yn.isTypedArray;function un(z,X,W){switch(W.length){case 0:return z.call(X);case 1:return z.call(X,W[0]);case 2:return z.call(X,W[0],W[1]);case 3:return z.call(X,W[0],W[1],W[2])}return z.apply(X,W)}function y7(z,X,W,be){for(var Le=-1,qe=z==null?0:z.length;++Le<qe;){var xt=z[Le];X(be,xt,W(xt),z)}return be}function kn(z,X){for(var W=-1,be=z==null?0:z.length;++W<be&&X(z[W],W,z)!==!1;);return z}function k7(z,X){for(var W=z==null?0:z.length;W--&&X(z[W],W,z)!==!1;);return z}function jh(z,X){for(var W=-1,be=z==null?0:z.length;++W<be;)if(!X(z[W],W,z))return!1;return!0}function wr(z,X){for(var W=-1,be=z==null?0:z.length,Le=0,qe=[];++W<be;){var xt=z[W];X(xt,W,z)&&(qe[Le++]=xt)}return qe}function Pa(z,X){return!!(z!=null&&z.length)&&Ai(z,X,0)>-1}function ql(z,X,W){for(var be=-1,Le=z==null?0:z.length;++be<Le;)if(W(X,z[be]))return!0;return!1}function ut(z,X){for(var W=-1,be=z==null?0:z.length,Le=Array(be);++W<be;)Le[W]=X(z[W],W,z);return Le}function _r(z,X){for(var W=-1,be=X.length,Le=z.length;++W<be;)z[Le+W]=X[W];return z}function Kl(z,X,W,be){var Le=-1,qe=z==null?0:z.length;for(be&&qe&&(W=z[++Le]);++Le<qe;)W=X(W,z[Le],Le,z);return W}function E7(z,X,W,be){var Le=z==null?0:z.length;for(be&&Le&&(W=z[--Le]);Le--;)W=X(W,z[Le],Le,z);return W}function Yl(z,X){for(var W=-1,be=z==null?0:z.length;++W<be;)if(X(z[W],W,z))return!0;return!1}var S7=Xl("length");function A7(z){return z.split("")}function M7(z){return z.match(D9)||[]}function qh(z,X,W){var be;return W(z,function(Le,qe,xt){if(X(Le,qe,xt))return be=qe,!1}),be}function $a(z,X,W,be){for(var Le=z.length,qe=W+(be?1:-1);be?qe--:++qe<Le;)if(X(z[qe],qe,z))return qe;return-1}function Ai(z,X,W){return X===X?N7(z,X,W):$a(z,Kh,W)}function x7(z,X,W,be){for(var Le=W-1,qe=z.length;++Le<qe;)if(be(z[Le],X))return Le;return-1}function Kh(z){return z!==z}function Yh(z,X){var W=z==null?0:z.length;return W?Ql(z,X)/W:Ee}function Xl(z){return function(X){return X==null?r:X[z]}}function Jl(z){return function(X){return z==null?r:z[X]}}function Xh(z,X,W,be,Le){return Le(z,function(qe,xt,Qe){W=be?(be=!1,qe):X(W,qe,xt,Qe)}),W}function I7(z,X){var W=z.length;for(z.sort(X);W--;)z[W]=z[W].value;return z}function Ql(z,X){for(var W,be=-1,Le=z.length;++be<Le;){var qe=X(z[be]);qe!==r&&(W=W===r?qe:W+qe)}return W}function ec(z,X){for(var W=-1,be=Array(z);++W<z;)be[W]=X(W);return be}function O7(z,X){return ut(X,function(W){return[W,z[W]]})}function Jh(z){return z&&z.slice(0,n1(z)+1).replace(Hl,"")}function dn(z){return function(X){return z(X)}}function tc(z,X){return ut(X,function(W){return z[W]})}function _o(z,X){return z.has(X)}function Qh(z,X){for(var W=-1,be=z.length;++W<be&&Ai(X,z[W],0)>-1;);return W}function e1(z,X){for(var W=z.length;W--&&Ai(X,z[W],0)>-1;);return W}function C7(z,X){for(var W=z.length,be=0;W--;)z[W]===X&&++be;return be}var T7=Jl(p7),L7=Jl(g7);function R7(z){return"\\"+v7[z]}function P7(z,X){return z==null?r:z[X]}function Mi(z){return u7.test(z)}function $7(z){return d7.test(z)}function z7(z){for(var X,W=[];!(X=z.next()).done;)W.push(X.value);return W}function nc(z){var X=-1,W=Array(z.size);return z.forEach(function(be,Le){W[++X]=[Le,be]}),W}function t1(z,X){return function(W){return z(X(W))}}function yr(z,X){for(var W=-1,be=z.length,Le=0,qe=[];++W<be;){var xt=z[W];(xt===X||xt===f)&&(z[W]=f,qe[Le++]=W)}return qe}function za(z){var X=-1,W=Array(z.size);return z.forEach(function(be){W[++X]=be}),W}function D7(z){var X=-1,W=Array(z.size);return z.forEach(function(be){W[++X]=[be,be]}),W}function N7(z,X,W){for(var be=W-1,Le=z.length;++be<Le;)if(z[be]===X)return be;return-1}function B7(z,X,W){for(var be=W+1;be--;)if(z[be]===X)return be;return be}function xi(z){return Mi(z)?F7(z):S7(z)}function Rn(z){return Mi(z)?G7(z):A7(z)}function n1(z){for(var X=z.length;X--&&R9.test(z.charAt(X)););return X}var H7=Jl(m7);function F7(z){for(var X=Vl.lastIndex=0;Vl.test(z);)++X;return X}function G7(z){return z.match(Vl)||[]}function U7(z){return z.match(c7)||[]}var kr=(function z(X){X=X==null?Ct:kr.defaults(Ct.Object(),X,kr.pick(Ct,h7));var W=X.Array,be=X.Date,Le=X.Error,qe=X.Function,xt=X.Math,Qe=X.Object,rc=X.RegExp,W7=X.String,En=X.TypeError,Da=W.prototype,V7=qe.prototype,Ii=Qe.prototype,Na=X["__core-js_shared__"],Ba=V7.toString,Ye=Ii.hasOwnProperty,Z7=0,r1=(function(){var n=/[^.]+$/.exec(Na&&Na.keys&&Na.keys.IE_PROTO||"");return n?"Symbol(src)_1."+n:""})(),Ha=Ii.toString,j7=Ba.call(Qe),q7=Ct._,K7=rc("^"+Ba.call(Ye).replace(Bl,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Fa=Hh?X.Buffer:r,Er=X.Symbol,Ga=X.Uint8Array,i1=Fa?Fa.allocUnsafe:r,Ua=t1(Qe.getPrototypeOf,Qe),o1=Qe.create,a1=Ii.propertyIsEnumerable,Wa=Da.splice,s1=Er?Er.isConcatSpreadable:r,yo=Er?Er.iterator:r,Vr=Er?Er.toStringTag:r,Va=(function(){try{var n=Yr(Qe,"defineProperty");return n({},"",{}),n}catch{}})(),Y7=X.clearTimeout!==Ct.clearTimeout&&X.clearTimeout,X7=be&&be.now!==Ct.Date.now&&be.now,J7=X.setTimeout!==Ct.setTimeout&&X.setTimeout,Za=xt.ceil,ja=xt.floor,ic=Qe.getOwnPropertySymbols,Q7=Fa?Fa.isBuffer:r,l1=X.isFinite,e8=Da.join,t8=t1(Qe.keys,Qe),It=xt.max,Nt=xt.min,n8=be.now,r8=X.parseInt,c1=xt.random,i8=Da.reverse,oc=Yr(X,"DataView"),ko=Yr(X,"Map"),ac=Yr(X,"Promise"),Oi=Yr(X,"Set"),Eo=Yr(X,"WeakMap"),So=Yr(Qe,"create"),qa=Eo&&new Eo,Ci={},o8=Xr(oc),a8=Xr(ko),s8=Xr(ac),l8=Xr(Oi),c8=Xr(Eo),Ka=Er?Er.prototype:r,Ao=Ka?Ka.valueOf:r,u1=Ka?Ka.toString:r;function A(n){if(gt(n)&&!ze(n)&&!(n instanceof We)){if(n instanceof Sn)return n;if(Ye.call(n,"__wrapped__"))return hf(n)}return new Sn(n)}var Ti=(function(){function n(){}return function(i){if(!ht(i))return{};if(o1)return o1(i);n.prototype=i;var l=new n;return n.prototype=r,l}})();function Ya(){}function Sn(n,i){this.__wrapped__=n,this.__actions__=[],this.__chain__=!!i,this.__index__=0,this.__values__=r}A.templateSettings={escape:x9,evaluate:I9,interpolate:wh,variable:"",imports:{_:A}},A.prototype=Ya.prototype,A.prototype.constructor=A,Sn.prototype=Ti(Ya.prototype),Sn.prototype.constructor=Sn;function We(n){this.__wrapped__=n,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=F,this.__views__=[]}function u8(){var n=new We(this.__wrapped__);return n.__actions__=Xt(this.__actions__),n.__dir__=this.__dir__,n.__filtered__=this.__filtered__,n.__iteratees__=Xt(this.__iteratees__),n.__takeCount__=this.__takeCount__,n.__views__=Xt(this.__views__),n}function d8(){if(this.__filtered__){var n=new We(this);n.__dir__=-1,n.__filtered__=!0}else n=this.clone(),n.__dir__*=-1;return n}function h8(){var n=this.__wrapped__.value(),i=this.__dir__,l=ze(n),p=i<0,y=l?n.length:0,x=Sw(0,y,this.__views__),L=x.start,P=x.end,N=P-L,te=p?P:L-1,ee=this.__iteratees__,se=ee.length,me=0,_e=Nt(N,this.__takeCount__);if(!l||!p&&y==N&&_e==N)return P1(n,this.__actions__);var Ie=[];e:for(;N--&&me<_e;){te+=i;for(var Re=-1,Ce=n[te];++Re<se;){var et=ee[Re],Ve=et.iteratee,Wt=et.type,Un=Ve(Ce);if(Wt==J)Ce=Un;else if(!Un){if(Wt==E)continue e;break e}}Ie[me++]=Ce}return Ie}We.prototype=Ti(Ya.prototype),We.prototype.constructor=We;function Zr(n){var i=-1,l=n==null?0:n.length;for(this.clear();++i<l;){var p=n[i];this.set(p[0],p[1])}}function f8(){this.__data__=So?So(null):{},this.size=0}function p8(n){var i=this.has(n)&&delete this.__data__[n];return this.size-=i?1:0,i}function g8(n){var i=this.__data__;if(So){var l=i[n];return l===u?r:l}return Ye.call(i,n)?i[n]:r}function m8(n){var i=this.__data__;return So?i[n]!==r:Ye.call(i,n)}function v8(n,i){var l=this.__data__;return this.size+=this.has(n)?0:1,l[n]=So&&i===r?u:i,this}Zr.prototype.clear=f8,Zr.prototype.delete=p8,Zr.prototype.get=g8,Zr.prototype.has=m8,Zr.prototype.set=v8;function Xn(n){var i=-1,l=n==null?0:n.length;for(this.clear();++i<l;){var p=n[i];this.set(p[0],p[1])}}function b8(){this.__data__=[],this.size=0}function w8(n){var i=this.__data__,l=Xa(i,n);return l<0?!1:(l==i.length-1?i.pop():Wa.call(i,l,1),--this.size,!0)}function _8(n){var i=this.__data__,l=Xa(i,n);return l<0?r:i[l][1]}function y8(n){return Xa(this.__data__,n)>-1}function k8(n,i){var l=this.__data__,p=Xa(l,n);return p<0?(++this.size,l.push([n,i])):l[p][1]=i,this}Xn.prototype.clear=b8,Xn.prototype.delete=w8,Xn.prototype.get=_8,Xn.prototype.has=y8,Xn.prototype.set=k8;function Jn(n){var i=-1,l=n==null?0:n.length;for(this.clear();++i<l;){var p=n[i];this.set(p[0],p[1])}}function E8(){this.size=0,this.__data__={hash:new Zr,map:new(ko||Xn),string:new Zr}}function S8(n){var i=cs(this,n).delete(n);return this.size-=i?1:0,i}function A8(n){return cs(this,n).get(n)}function M8(n){return cs(this,n).has(n)}function x8(n,i){var l=cs(this,n),p=l.size;return l.set(n,i),this.size+=l.size==p?0:1,this}Jn.prototype.clear=E8,Jn.prototype.delete=S8,Jn.prototype.get=A8,Jn.prototype.has=M8,Jn.prototype.set=x8;function jr(n){var i=-1,l=n==null?0:n.length;for(this.__data__=new Jn;++i<l;)this.add(n[i])}function I8(n){return this.__data__.set(n,u),this}function O8(n){return this.__data__.has(n)}jr.prototype.add=jr.prototype.push=I8,jr.prototype.has=O8;function Pn(n){this.size=(this.__data__=new Xn(n)).size}function C8(){this.__data__=new Xn,this.size=0}function T8(n){var i=this.__data__,l=i.delete(n);return this.size=i.size,l}function L8(n){return this.__data__.get(n)}function R8(n){return this.__data__.has(n)}function P8(n,i){var l=this.__data__;if(l instanceof Xn){var p=l.__data__;if(!ko||p.length<a-1)return p.push([n,i]),this.size=++l.size,this;l=this.__data__=new Jn(p)}return l.set(n,i),this.size=l.size,this}Pn.prototype.clear=C8,Pn.prototype.delete=T8,Pn.prototype.get=L8,Pn.prototype.has=R8,Pn.prototype.set=P8;function d1(n,i){var l=ze(n),p=!l&&Jr(n),y=!l&&!p&&Ir(n),x=!l&&!p&&!y&&$i(n),L=l||p||y||x,P=L?ec(n.length,W7):[],N=P.length;for(var te in n)(i||Ye.call(n,te))&&!(L&&(te=="length"||y&&(te=="offset"||te=="parent")||x&&(te=="buffer"||te=="byteLength"||te=="byteOffset")||nr(te,N)))&&P.push(te);return P}function h1(n){var i=n.length;return i?n[vc(0,i-1)]:r}function $8(n,i){return us(Xt(n),qr(i,0,n.length))}function z8(n){return us(Xt(n))}function sc(n,i,l){(l!==r&&!$n(n[i],l)||l===r&&!(i in n))&&Qn(n,i,l)}function Mo(n,i,l){var p=n[i];(!(Ye.call(n,i)&&$n(p,l))||l===r&&!(i in n))&&Qn(n,i,l)}function Xa(n,i){for(var l=n.length;l--;)if($n(n[l][0],i))return l;return-1}function D8(n,i,l,p){return Sr(n,function(y,x,L){i(p,y,l(y),L)}),p}function f1(n,i){return n&&Fn(i,Tt(i),n)}function N8(n,i){return n&&Fn(i,Qt(i),n)}function Qn(n,i,l){i=="__proto__"&&Va?Va(n,i,{configurable:!0,enumerable:!0,value:l,writable:!0}):n[i]=l}function lc(n,i){for(var l=-1,p=i.length,y=W(p),x=n==null;++l<p;)y[l]=x?r:Gc(n,i[l]);return y}function qr(n,i,l){return n===n&&(l!==r&&(n=n<=l?n:l),i!==r&&(n=n>=i?n:i)),n}function An(n,i,l,p,y,x){var L,P=i&b,N=i&v,te=i&g;if(l&&(L=y?l(n,p,y,x):l(n)),L!==r)return L;if(!ht(n))return n;var ee=ze(n);if(ee){if(L=Mw(n),!P)return Xt(n,L)}else{var se=Bt(n),me=se==Ft||se==Kt;if(Ir(n))return D1(n,P);if(se==O||se==de||me&&!y){if(L=N||me?{}:nf(n),!P)return N?gw(n,N8(L,n)):pw(n,f1(L,n))}else{if(!it[se])return y?n:{};L=xw(n,se,P)}}x||(x=new Pn);var _e=x.get(n);if(_e)return _e;x.set(n,L),Lf(n)?n.forEach(function(Re){L.add(An(Re,i,l,Re,n,x))}):Cf(n)&&n.forEach(function(Re,Ce){L.set(Ce,An(Re,i,l,Ce,n,x))});var Ie=ee?r:(te?N?Ic:xc:N?Qt:Tt)(n);return kn(Ie||n,function(Re,Ce){Ie&&(Ce=Re,Re=n[Ce]),Mo(L,Ce,An(Re,i,l,Ce,n,x))}),L}function B8(n){var i=Tt(n);return function(l){return p1(l,n,i)}}function p1(n,i,l){var p=l.length;if(n==null)return!p;for(n=Qe(n);p--;){var y=l[p],x=i[y],L=n[y];if(L===r&&!(y in n)||!x(L))return!1}return!0}function g1(n,i,l){if(typeof n!="function")throw new En(c);return Ro(function(){n.apply(r,l)},i)}function xo(n,i,l,p){var y=-1,x=Pa,L=!0,P=n.length,N=[],te=i.length;if(!P)return N;l&&(i=ut(i,dn(l))),p?(x=ql,L=!1):i.length>=a&&(x=_o,L=!1,i=new jr(i));e:for(;++y<P;){var ee=n[y],se=l==null?ee:l(ee);if(ee=p||ee!==0?ee:0,L&&se===se){for(var me=te;me--;)if(i[me]===se)continue e;N.push(ee)}else x(i,se,p)||N.push(ee)}return N}var Sr=G1(Hn),m1=G1(uc,!0);function H8(n,i){var l=!0;return Sr(n,function(p,y,x){return l=!!i(p,y,x),l}),l}function Ja(n,i,l){for(var p=-1,y=n.length;++p<y;){var x=n[p],L=i(x);if(L!=null&&(P===r?L===L&&!fn(L):l(L,P)))var P=L,N=x}return N}function F8(n,i,l,p){var y=n.length;for(l=Be(l),l<0&&(l=-l>y?0:y+l),p=p===r||p>y?y:Be(p),p<0&&(p+=y),p=l>p?0:Pf(p);l<p;)n[l++]=i;return n}function v1(n,i){var l=[];return Sr(n,function(p,y,x){i(p,y,x)&&l.push(p)}),l}function $t(n,i,l,p,y){var x=-1,L=n.length;for(l||(l=Ow),y||(y=[]);++x<L;){var P=n[x];i>0&&l(P)?i>1?$t(P,i-1,l,p,y):_r(y,P):p||(y[y.length]=P)}return y}var cc=U1(),b1=U1(!0);function Hn(n,i){return n&&cc(n,i,Tt)}function uc(n,i){return n&&b1(n,i,Tt)}function Qa(n,i){return wr(i,function(l){return rr(n[l])})}function Kr(n,i){i=Mr(i,n);for(var l=0,p=i.length;n!=null&&l<p;)n=n[Gn(i[l++])];return l&&l==p?n:r}function w1(n,i,l){var p=i(n);return ze(n)?p:_r(p,l(n))}function Gt(n){return n==null?n===r?ve:V:Vr&&Vr in Qe(n)?Ew(n):zw(n)}function dc(n,i){return n>i}function G8(n,i){return n!=null&&Ye.call(n,i)}function U8(n,i){return n!=null&&i in Qe(n)}function W8(n,i,l){return n>=Nt(i,l)&&n<It(i,l)}function hc(n,i,l){for(var p=l?ql:Pa,y=n[0].length,x=n.length,L=x,P=W(x),N=1/0,te=[];L--;){var ee=n[L];L&&i&&(ee=ut(ee,dn(i))),N=Nt(ee.length,N),P[L]=!l&&(i||y>=120&&ee.length>=120)?new jr(L&&ee):r}ee=n[0];var se=-1,me=P[0];e:for(;++se<y&&te.length<N;){var _e=ee[se],Ie=i?i(_e):_e;if(_e=l||_e!==0?_e:0,!(me?_o(me,Ie):p(te,Ie,l))){for(L=x;--L;){var Re=P[L];if(!(Re?_o(Re,Ie):p(n[L],Ie,l)))continue e}me&&me.push(Ie),te.push(_e)}}return te}function V8(n,i,l,p){return Hn(n,function(y,x,L){i(p,l(y),x,L)}),p}function Io(n,i,l){i=Mr(i,n),n=sf(n,i);var p=n==null?n:n[Gn(xn(i))];return p==null?r:un(p,n,l)}function _1(n){return gt(n)&&Gt(n)==de}function Z8(n){return gt(n)&&Gt(n)==Ze}function j8(n){return gt(n)&&Gt(n)==Fe}function Oo(n,i,l,p,y){return n===i?!0:n==null||i==null||!gt(n)&&!gt(i)?n!==n&&i!==i:q8(n,i,l,p,Oo,y)}function q8(n,i,l,p,y,x){var L=ze(n),P=ze(i),N=L?Ke:Bt(n),te=P?Ke:Bt(i);N=N==de?O:N,te=te==de?O:te;var ee=N==O,se=te==O,me=N==te;if(me&&Ir(n)){if(!Ir(i))return!1;L=!0,ee=!1}if(me&&!ee)return x||(x=new Pn),L||$i(n)?Q1(n,i,l,p,y,x):yw(n,i,N,l,p,y,x);if(!(l&m)){var _e=ee&&Ye.call(n,"__wrapped__"),Ie=se&&Ye.call(i,"__wrapped__");if(_e||Ie){var Re=_e?n.value():n,Ce=Ie?i.value():i;return x||(x=new Pn),y(Re,Ce,l,p,x)}}return me?(x||(x=new Pn),kw(n,i,l,p,y,x)):!1}function K8(n){return gt(n)&&Bt(n)==w}function fc(n,i,l,p){var y=l.length,x=y,L=!p;if(n==null)return!x;for(n=Qe(n);y--;){var P=l[y];if(L&&P[2]?P[1]!==n[P[0]]:!(P[0]in n))return!1}for(;++y<x;){P=l[y];var N=P[0],te=n[N],ee=P[1];if(L&&P[2]){if(te===r&&!(N in n))return!1}else{var se=new Pn;if(p)var me=p(te,ee,N,n,i,se);if(!(me===r?Oo(ee,te,m|k,p,se):me))return!1}}return!0}function y1(n){return!ht(n)||Tw(n)?!1:(rr(n)?K7:U9).test(Xr(n))}function Y8(n){return gt(n)&&Gt(n)==re}function X8(n){return gt(n)&&Bt(n)==ne}function J8(n){return gt(n)&&ms(n.length)&&!!st[Gt(n)]}function k1(n){return typeof n=="function"?n:n==null?en:typeof n=="object"?ze(n)?A1(n[0],n[1]):S1(n):Vf(n)}function pc(n){if(!Lo(n))return t8(n);var i=[];for(var l in Qe(n))Ye.call(n,l)&&l!="constructor"&&i.push(l);return i}function Q8(n){if(!ht(n))return $w(n);var i=Lo(n),l=[];for(var p in n)p=="constructor"&&(i||!Ye.call(n,p))||l.push(p);return l}function gc(n,i){return n<i}function E1(n,i){var l=-1,p=Jt(n)?W(n.length):[];return Sr(n,function(y,x,L){p[++l]=i(y,x,L)}),p}function S1(n){var i=Cc(n);return i.length==1&&i[0][2]?of(i[0][0],i[0][1]):function(l){return l===n||fc(l,n,i)}}function A1(n,i){return Lc(n)&&rf(i)?of(Gn(n),i):function(l){var p=Gc(l,n);return p===r&&p===i?Uc(l,n):Oo(i,p,m|k)}}function es(n,i,l,p,y){n!==i&&cc(i,function(x,L){if(y||(y=new Pn),ht(x))ew(n,i,L,l,es,p,y);else{var P=p?p(Pc(n,L),x,L+"",n,i,y):r;P===r&&(P=x),sc(n,L,P)}},Qt)}function ew(n,i,l,p,y,x,L){var P=Pc(n,l),N=Pc(i,l),te=L.get(N);if(te){sc(n,l,te);return}var ee=x?x(P,N,l+"",n,i,L):r,se=ee===r;if(se){var me=ze(N),_e=!me&&Ir(N),Ie=!me&&!_e&&$i(N);ee=N,me||_e||Ie?ze(P)?ee=P:mt(P)?ee=Xt(P):_e?(se=!1,ee=D1(N,!0)):Ie?(se=!1,ee=N1(N,!0)):ee=[]:Po(N)||Jr(N)?(ee=P,Jr(P)?ee=$f(P):(!ht(P)||rr(P))&&(ee=nf(N))):se=!1}se&&(L.set(N,ee),y(ee,N,p,x,L),L.delete(N)),sc(n,l,ee)}function M1(n,i){var l=n.length;if(l)return i+=i<0?l:0,nr(i,l)?n[i]:r}function x1(n,i,l){i.length?i=ut(i,function(y){return ze(y)?function(x){return Kr(x,y.length===1?y[0]:y)}:y}):i=[en];var p=-1;return i=ut(i,dn(Oe())),I7(E1(n,function(y,x,L){var P=ut(i,function(N){return N(y)});return{criteria:P,index:++p,value:y}}),function(y,x){return fw(y,x,l)})}function tw(n,i){return I1(n,i,function(l,p){return Uc(n,p)})}function I1(n,i,l){for(var p=-1,y=i.length,x={};++p<y;){var L=i[p],P=Kr(n,L);l(P,L)&&Co(x,Mr(L,n),P)}return x}function nw(n){return function(i){return Kr(i,n)}}function mc(n,i,l,p){var y=p?x7:Ai,x=-1,L=i.length,P=n;for(n===i&&(i=Xt(i)),l&&(P=ut(n,dn(l)));++x<L;)for(var N=0,te=i[x],ee=l?l(te):te;(N=y(P,ee,N,p))>-1;)P!==n&&Wa.call(P,N,1),Wa.call(n,N,1);return n}function O1(n,i){for(var l=n?i.length:0,p=l-1;l--;){var y=i[l];if(l==p||y!==x){var x=y;nr(y)?Wa.call(n,y,1):_c(n,y)}}return n}function vc(n,i){return n+ja(c1()*(i-n+1))}function rw(n,i,l,p){for(var y=-1,x=It(Za((i-n)/(l||1)),0),L=W(x);x--;)L[p?x:++y]=n,n+=l;return L}function bc(n,i){var l="";if(!n||i<1||i>Me)return l;do i%2&&(l+=n),i=ja(i/2),i&&(n+=n);while(i);return l}function Ue(n,i){return $c(af(n,i,en),n+"")}function iw(n){return h1(zi(n))}function ow(n,i){var l=zi(n);return us(l,qr(i,0,l.length))}function Co(n,i,l,p){if(!ht(n))return n;i=Mr(i,n);for(var y=-1,x=i.length,L=x-1,P=n;P!=null&&++y<x;){var N=Gn(i[y]),te=l;if(N==="__proto__"||N==="constructor"||N==="prototype")return n;if(y!=L){var ee=P[N];te=p?p(ee,N,P):r,te===r&&(te=ht(ee)?ee:nr(i[y+1])?[]:{})}Mo(P,N,te),P=P[N]}return n}var C1=qa?function(n,i){return qa.set(n,i),n}:en,aw=Va?function(n,i){return Va(n,"toString",{configurable:!0,enumerable:!1,value:Vc(i),writable:!0})}:en;function sw(n){return us(zi(n))}function Mn(n,i,l){var p=-1,y=n.length;i<0&&(i=-i>y?0:y+i),l=l>y?y:l,l<0&&(l+=y),y=i>l?0:l-i>>>0,i>>>=0;for(var x=W(y);++p<y;)x[p]=n[p+i];return x}function lw(n,i){var l;return Sr(n,function(p,y,x){return l=i(p,y,x),!l}),!!l}function ts(n,i,l){var p=0,y=n==null?p:n.length;if(typeof i=="number"&&i===i&&y<=Se){for(;p<y;){var x=p+y>>>1,L=n[x];L!==null&&!fn(L)&&(l?L<=i:L<i)?p=x+1:y=x}return y}return wc(n,i,en,l)}function wc(n,i,l,p){var y=0,x=n==null?0:n.length;if(x===0)return 0;i=l(i);for(var L=i!==i,P=i===null,N=fn(i),te=i===r;y<x;){var ee=ja((y+x)/2),se=l(n[ee]),me=se!==r,_e=se===null,Ie=se===se,Re=fn(se);if(L)var Ce=p||Ie;else te?Ce=Ie&&(p||me):P?Ce=Ie&&me&&(p||!_e):N?Ce=Ie&&me&&!_e&&(p||!Re):_e||Re?Ce=!1:Ce=p?se<=i:se<i;Ce?y=ee+1:x=ee}return Nt(x,G)}function T1(n,i){for(var l=-1,p=n.length,y=0,x=[];++l<p;){var L=n[l],P=i?i(L):L;if(!l||!$n(P,N)){var N=P;x[y++]=L===0?0:L}}return x}function L1(n){return typeof n=="number"?n:fn(n)?Ee:+n}function hn(n){if(typeof n=="string")return n;if(ze(n))return ut(n,hn)+"";if(fn(n))return u1?u1.call(n):"";var i=n+"";return i=="0"&&1/n==-oe?"-0":i}function Ar(n,i,l){var p=-1,y=Pa,x=n.length,L=!0,P=[],N=P;if(l)L=!1,y=ql;else if(x>=a){var te=i?null:ww(n);if(te)return za(te);L=!1,y=_o,N=new jr}else N=i?[]:P;e:for(;++p<x;){var ee=n[p],se=i?i(ee):ee;if(ee=l||ee!==0?ee:0,L&&se===se){for(var me=N.length;me--;)if(N[me]===se)continue e;i&&N.push(se),P.push(ee)}else y(N,se,l)||(N!==P&&N.push(se),P.push(ee))}return P}function _c(n,i){i=Mr(i,n);var l=-1,p=i.length;if(!p)return!0;for(var y=n==null||typeof n!="object"&&typeof n!="function";++l<p;){var x=i[l];if(typeof x=="string"){if(x==="__proto__"&&!Ye.call(n,"__proto__"))return!1;if(x==="constructor"&&l+1<p&&typeof i[l+1]=="string"&&i[l+1]==="prototype"){if(y&&l===0)continue;return!1}}}var L=sf(n,i);return L==null||delete L[Gn(xn(i))]}function R1(n,i,l,p){return Co(n,i,l(Kr(n,i)),p)}function ns(n,i,l,p){for(var y=n.length,x=p?y:-1;(p?x--:++x<y)&&i(n[x],x,n););return l?Mn(n,p?0:x,p?x+1:y):Mn(n,p?x+1:0,p?y:x)}function P1(n,i){var l=n;return l instanceof We&&(l=l.value()),Kl(i,function(p,y){return y.func.apply(y.thisArg,_r([p],y.args))},l)}function yc(n,i,l){var p=n.length;if(p<2)return p?Ar(n[0]):[];for(var y=-1,x=W(p);++y<p;)for(var L=n[y],P=-1;++P<p;)P!=y&&(x[y]=xo(x[y]||L,n[P],i,l));return Ar($t(x,1),i,l)}function $1(n,i,l){for(var p=-1,y=n.length,x=i.length,L={};++p<y;){var P=p<x?i[p]:r;l(L,n[p],P)}return L}function kc(n){return mt(n)?n:[]}function Ec(n){return typeof n=="function"?n:en}function Mr(n,i){return ze(n)?n:Lc(n,i)?[n]:df(Xe(n))}var cw=Ue;function xr(n,i,l){var p=n.length;return l=l===r?p:l,!i&&l>=p?n:Mn(n,i,l)}var z1=Y7||function(n){return Ct.clearTimeout(n)};function D1(n,i){if(i)return n.slice();var l=n.length,p=i1?i1(l):new n.constructor(l);return n.copy(p),p}function Sc(n){var i=new n.constructor(n.byteLength);return new Ga(i).set(new Ga(n)),i}function uw(n,i){var l=i?Sc(n.buffer):n.buffer;return new n.constructor(l,n.byteOffset,n.byteLength)}function dw(n){var i=new n.constructor(n.source,_h.exec(n));return i.lastIndex=n.lastIndex,i}function hw(n){return Ao?Qe(Ao.call(n)):{}}function N1(n,i){var l=i?Sc(n.buffer):n.buffer;return new n.constructor(l,n.byteOffset,n.length)}function B1(n,i){if(n!==i){var l=n!==r,p=n===null,y=n===n,x=fn(n),L=i!==r,P=i===null,N=i===i,te=fn(i);if(!P&&!te&&!x&&n>i||x&&L&&N&&!P&&!te||p&&L&&N||!l&&N||!y)return 1;if(!p&&!x&&!te&&n<i||te&&l&&y&&!p&&!x||P&&l&&y||!L&&y||!N)return-1}return 0}function fw(n,i,l){for(var p=-1,y=n.criteria,x=i.criteria,L=y.length,P=l.length;++p<L;){var N=B1(y[p],x[p]);if(N)return p>=P?N:N*(l[p]=="desc"?-1:1)}return n.index-i.index}function H1(n,i,l,p){for(var y=-1,x=n.length,L=l.length,P=-1,N=i.length,te=It(x-L,0),ee=W(N+te),se=!p;++P<N;)ee[P]=i[P];for(;++y<L;)(se||y<x)&&(ee[l[y]]=n[y]);for(;te--;)ee[P++]=n[y++];return ee}function F1(n,i,l,p){for(var y=-1,x=n.length,L=-1,P=l.length,N=-1,te=i.length,ee=It(x-P,0),se=W(ee+te),me=!p;++y<ee;)se[y]=n[y];for(var _e=y;++N<te;)se[_e+N]=i[N];for(;++L<P;)(me||y<x)&&(se[_e+l[L]]=n[y++]);return se}function Xt(n,i){var l=-1,p=n.length;for(i||(i=W(p));++l<p;)i[l]=n[l];return i}function Fn(n,i,l,p){var y=!l;l||(l={});for(var x=-1,L=i.length;++x<L;){var P=i[x],N=p?p(l[P],n[P],P,l,n):r;N===r&&(N=n[P]),y?Qn(l,P,N):Mo(l,P,N)}return l}function pw(n,i){return Fn(n,Tc(n),i)}function gw(n,i){return Fn(n,ef(n),i)}function rs(n,i){return function(l,p){var y=ze(l)?y7:D8,x=i?i():{};return y(l,n,Oe(p,2),x)}}function Li(n){return Ue(function(i,l){var p=-1,y=l.length,x=y>1?l[y-1]:r,L=y>2?l[2]:r;for(x=n.length>3&&typeof x=="function"?(y--,x):r,L&&Ut(l[0],l[1],L)&&(x=y<3?r:x,y=1),i=Qe(i);++p<y;){var P=l[p];P&&n(i,P,p,x)}return i})}function G1(n,i){return function(l,p){if(l==null)return l;if(!Jt(l))return n(l,p);for(var y=l.length,x=i?y:-1,L=Qe(l);(i?x--:++x<y)&&p(L[x],x,L)!==!1;);return l}}function U1(n){return function(i,l,p){for(var y=-1,x=Qe(i),L=p(i),P=L.length;P--;){var N=L[n?P:++y];if(l(x[N],N,x)===!1)break}return i}}function mw(n,i,l){var p=i&_,y=To(n);function x(){return(this&&this!==Ct&&this instanceof x?y:n).apply(p?l:this,arguments)}return x}function W1(n){return function(i){i=Xe(i);var l=Mi(i)?Rn(i):r,p=l?l[0]:i.charAt(0),y=l?xr(l,1).join(""):i.slice(1);return p[n]()+y}}function Ri(n){return function(i){return Kl(Uf(Gf(i).replace(s7,"")),n,"")}}function To(n){return function(){var i=arguments;switch(i.length){case 0:return new n;case 1:return new n(i[0]);case 2:return new n(i[0],i[1]);case 3:return new n(i[0],i[1],i[2]);case 4:return new n(i[0],i[1],i[2],i[3]);case 5:return new n(i[0],i[1],i[2],i[3],i[4]);case 6:return new n(i[0],i[1],i[2],i[3],i[4],i[5]);case 7:return new n(i[0],i[1],i[2],i[3],i[4],i[5],i[6])}var l=Ti(n.prototype),p=n.apply(l,i);return ht(p)?p:l}}function vw(n,i,l){var p=To(n);function y(){for(var x=arguments.length,L=W(x),P=x,N=Pi(y);P--;)L[P]=arguments[P];var te=x<3&&L[0]!==N&&L[x-1]!==N?[]:yr(L,N);return x-=te.length,x<l?K1(n,i,is,y.placeholder,r,L,te,r,r,l-x):un(this&&this!==Ct&&this instanceof y?p:n,this,L)}return y}function V1(n){return function(i,l,p){var y=Qe(i);if(!Jt(i)){var x=Oe(l,3);i=Tt(i),l=function(P){return x(y[P],P,y)}}var L=n(i,l,p);return L>-1?y[x?i[L]:L]:r}}function Z1(n){return tr(function(i){var l=i.length,p=l,y=Sn.prototype.thru;for(n&&i.reverse();p--;){var x=i[p];if(typeof x!="function")throw new En(c);if(y&&!L&&ls(x)=="wrapper")var L=new Sn([],!0)}for(p=L?p:l;++p<l;){x=i[p];var P=ls(x),N=P=="wrapper"?Oc(x):r;N&&Rc(N[0])&&N[1]==(U|C|$|ie)&&!N[4].length&&N[9]==1?L=L[ls(N[0])].apply(L,N[3]):L=x.length==1&&Rc(x)?L[P]():L.thru(x)}return function(){var te=arguments,ee=te[0];if(L&&te.length==1&&ze(ee))return L.plant(ee).value();for(var se=0,me=l?i[se].apply(this,te):ee;++se<l;)me=i[se].call(this,me);return me}})}function is(n,i,l,p,y,x,L,P,N,te){var ee=i&U,se=i&_,me=i&S,_e=i&(C|T),Ie=i&H,Re=me?r:To(n);function Ce(){for(var et=arguments.length,Ve=W(et),Wt=et;Wt--;)Ve[Wt]=arguments[Wt];if(_e)var Un=Pi(Ce),Or=C7(Ve,Un);if(p&&(Ve=H1(Ve,p,y,_e)),x&&(Ve=F1(Ve,x,L,_e)),et-=Or,_e&&et<te){var vt=yr(Ve,Un);return K1(n,i,is,Ce.placeholder,l,Ve,vt,P,N,te-et)}var zn=se?l:this,or=me?zn[n]:n;return et=Ve.length,P?Ve=Dw(Ve,P):Ie&&et>1&&Ve.reverse(),ee&&N<et&&(Ve.length=N),this&&this!==Ct&&this instanceof Ce&&(or=Re||To(or)),or.apply(zn,Ve)}return Ce}function j1(n,i){return function(l,p){return V8(l,n,i(p),{})}}function os(n,i){return function(l,p){var y;if(l===r&&p===r)return i;if(l!==r&&(y=l),p!==r){if(y===r)return p;typeof l=="string"||typeof p=="string"?(l=hn(l),p=hn(p)):(l=L1(l),p=L1(p)),y=n(l,p)}return y}}function Ac(n){return tr(function(i){return i=ut(i,dn(Oe())),Ue(function(l){var p=this;return n(i,function(y){return un(y,p,l)})})})}function as(n,i){i=i===r?" ":hn(i);var l=i.length;if(l<2)return l?bc(i,n):i;var p=bc(i,Za(n/xi(i)));return Mi(i)?xr(Rn(p),0,n).join(""):p.slice(0,n)}function bw(n,i,l,p){var y=i&_,x=To(n);function L(){for(var P=-1,N=arguments.length,te=-1,ee=p.length,se=W(ee+N),me=this&&this!==Ct&&this instanceof L?x:n;++te<ee;)se[te]=p[te];for(;N--;)se[te++]=arguments[++P];return un(me,y?l:this,se)}return L}function q1(n){return function(i,l,p){return p&&typeof p!="number"&&Ut(i,l,p)&&(l=p=r),i=ir(i),l===r?(l=i,i=0):l=ir(l),p=p===r?i<l?1:-1:ir(p),rw(i,l,p,n)}}function ss(n){return function(i,l){return typeof i=="string"&&typeof l=="string"||(i=In(i),l=In(l)),n(i,l)}}function K1(n,i,l,p,y,x,L,P,N,te){var ee=i&C,se=ee?L:r,me=ee?r:L,_e=ee?x:r,Ie=ee?r:x;i|=ee?$:Z,i&=~(ee?Z:$),i&M||(i&=~(_|S));var Re=[n,i,y,_e,se,Ie,me,P,N,te],Ce=l.apply(r,Re);return Rc(n)&&lf(Ce,Re),Ce.placeholder=p,cf(Ce,n,i)}function Mc(n){var i=xt[n];return function(l,p){if(l=In(l),p=p==null?0:Nt(Be(p),292),p&&l1(l)){var y=(Xe(l)+"e").split("e");return y=(Xe(i(y[0]+"e"+(+y[1]+p)))+"e").split("e"),+(y[0]+"e"+(+y[1]-p))}return i(l)}}var ww=Oi&&1/za(new Oi([,-0]))[1]==oe?function(n){return new Oi(n)}:qc;function Y1(n){return function(i){var l=Bt(i);return l==w?nc(i):l==ne?D7(i):O7(i,n(i))}}function er(n,i,l,p,y,x,L,P){var N=i&S;if(!N&&typeof n!="function")throw new En(c);var te=p?p.length:0;if(te||(i&=~($|Z),p=y=r),L=L===r?L:It(Be(L),0),P=P===r?P:Be(P),te-=y?y.length:0,i&Z){var ee=p,se=y;p=y=r}var me=N?r:Oc(n),_e=[n,i,l,p,y,ee,se,x,L,P];if(me&&Pw(_e,me),n=_e[0],i=_e[1],l=_e[2],p=_e[3],y=_e[4],P=_e[9]=_e[9]===r?N?0:n.length:It(_e[9]-te,0),!P&&i&(C|T)&&(i&=~(C|T)),!i||i==_)var Ie=mw(n,i,l);else i==C||i==T?Ie=vw(n,i,P):(i==$||i==(_|$))&&!y.length?Ie=bw(n,i,l,p):Ie=is.apply(r,_e);return cf((me?C1:lf)(Ie,_e),n,i)}function X1(n,i,l,p){return n===r||$n(n,Ii[l])&&!Ye.call(p,l)?i:n}function J1(n,i,l,p,y,x){return ht(n)&&ht(i)&&(x.set(i,n),es(n,i,r,J1,x),x.delete(i)),n}function _w(n){return Po(n)?r:n}function Q1(n,i,l,p,y,x){var L=l&m,P=n.length,N=i.length;if(P!=N&&!(L&&N>P))return!1;var te=x.get(n),ee=x.get(i);if(te&&ee)return te==i&&ee==n;var se=-1,me=!0,_e=l&k?new jr:r;for(x.set(n,i),x.set(i,n);++se<P;){var Ie=n[se],Re=i[se];if(p)var Ce=L?p(Re,Ie,se,i,n,x):p(Ie,Re,se,n,i,x);if(Ce!==r){if(Ce)continue;me=!1;break}if(_e){if(!Yl(i,function(et,Ve){if(!_o(_e,Ve)&&(Ie===et||y(Ie,et,l,p,x)))return _e.push(Ve)})){me=!1;break}}else if(!(Ie===Re||y(Ie,Re,l,p,x))){me=!1;break}}return x.delete(n),x.delete(i),me}function yw(n,i,l,p,y,x,L){switch(l){case Ne:if(n.byteLength!=i.byteLength||n.byteOffset!=i.byteOffset)return!1;n=n.buffer,i=i.buffer;case Ze:return!(n.byteLength!=i.byteLength||!x(new Ga(n),new Ga(i)));case $e:case Fe:case Q:return $n(+n,+i);case rt:return n.name==i.name&&n.message==i.message;case re:case B:return n==i+"";case w:var P=nc;case ne:var N=p&m;if(P||(P=za),n.size!=i.size&&!N)return!1;var te=L.get(n);if(te)return te==i;p|=k,L.set(n,i);var ee=Q1(P(n),P(i),p,y,x,L);return L.delete(n),ee;case ce:if(Ao)return Ao.call(n)==Ao.call(i)}return!1}function kw(n,i,l,p,y,x){var L=l&m,P=xc(n),N=P.length;if(N!=xc(i).length&&!L)return!1;for(var te=N;te--;){var ee=P[te];if(!(L?ee in i:Ye.call(i,ee)))return!1}var se=x.get(n),me=x.get(i);if(se&&me)return se==i&&me==n;var _e=!0;x.set(n,i),x.set(i,n);for(var Ie=L;++te<N;){ee=P[te];var Re=n[ee],Ce=i[ee];if(p)var et=L?p(Ce,Re,ee,i,n,x):p(Re,Ce,ee,n,i,x);if(!(et===r?Re===Ce||y(Re,Ce,l,p,x):et)){_e=!1;break}Ie||(Ie=ee=="constructor")}if(_e&&!Ie){var Ve=n.constructor,Wt=i.constructor;Ve!=Wt&&"constructor"in n&&"constructor"in i&&!(typeof Ve=="function"&&Ve instanceof Ve&&typeof Wt=="function"&&Wt instanceof Wt)&&(_e=!1)}return x.delete(n),x.delete(i),_e}function tr(n){return $c(af(n,r,gf),n+"")}function xc(n){return w1(n,Tt,Tc)}function Ic(n){return w1(n,Qt,ef)}var Oc=qa?function(n){return qa.get(n)}:qc;function ls(n){for(var i=n.name+"",l=Ci[i],p=Ye.call(Ci,i)?l.length:0;p--;){var y=l[p],x=y.func;if(x==null||x==n)return y.name}return i}function Pi(n){return(Ye.call(A,"placeholder")?A:n).placeholder}function Oe(){var n=A.iteratee||Zc;return n=n===Zc?k1:n,arguments.length?n(arguments[0],arguments[1]):n}function cs(n,i){var l=n.__data__;return Cw(i)?l[typeof i=="string"?"string":"hash"]:l.map}function Cc(n){for(var i=Tt(n),l=i.length;l--;){var p=i[l],y=n[p];i[l]=[p,y,rf(y)]}return i}function Yr(n,i){var l=P7(n,i);return y1(l)?l:r}function Ew(n){var i=Ye.call(n,Vr),l=n[Vr];try{n[Vr]=r;var p=!0}catch{}var y=Ha.call(n);return p&&(i?n[Vr]=l:delete n[Vr]),y}var Tc=ic?function(n){return n==null?[]:(n=Qe(n),wr(ic(n),function(i){return a1.call(n,i)}))}:Kc,ef=ic?function(n){for(var i=[];n;)_r(i,Tc(n)),n=Ua(n);return i}:Kc,Bt=Gt;(oc&&Bt(new oc(new ArrayBuffer(1)))!=Ne||ko&&Bt(new ko)!=w||ac&&Bt(ac.resolve())!=I||Oi&&Bt(new Oi)!=ne||Eo&&Bt(new Eo)!=ue)&&(Bt=function(n){var i=Gt(n),l=i==O?n.constructor:r,p=l?Xr(l):"";if(p)switch(p){case o8:return Ne;case a8:return w;case s8:return I;case l8:return ne;case c8:return ue}return i});function Sw(n,i,l){for(var p=-1,y=l.length;++p<y;){var x=l[p],L=x.size;switch(x.type){case"drop":n+=L;break;case"dropRight":i-=L;break;case"take":i=Nt(i,n+L);break;case"takeRight":n=It(n,i-L);break}}return{start:n,end:i}}function Aw(n){var i=n.match($9);return i?i[1].split(z9):[]}function tf(n,i,l){i=Mr(i,n);for(var p=-1,y=i.length,x=!1;++p<y;){var L=Gn(i[p]);if(!(x=n!=null&&l(n,L)))break;n=n[L]}return x||++p!=y?x:(y=n==null?0:n.length,!!y&&ms(y)&&nr(L,y)&&(ze(n)||Jr(n)))}function Mw(n){var i=n.length,l=new n.constructor(i);return i&&typeof n[0]=="string"&&Ye.call(n,"index")&&(l.index=n.index,l.input=n.input),l}function nf(n){return typeof n.constructor=="function"&&!Lo(n)?Ti(Ua(n)):{}}function xw(n,i,l){var p=n.constructor;switch(i){case Ze:return Sc(n);case $e:case Fe:return new p(+n);case Ne:return uw(n,l);case Dt:case Kn:case Yt:case Yn:case at:case vr:case Ur:case cn:case ki:return N1(n,l);case w:return new p;case Q:case B:return new p(n);case re:return dw(n);case ne:return new p;case ce:return hw(n)}}function Iw(n,i){var l=i.length;if(!l)return n;var p=l-1;return i[p]=(l>1?"& ":"")+i[p],i=i.join(l>2?", ":" "),n.replace(P9,`{
/* [wrapped with `+i+`] */
`)}function Ow(n){return ze(n)||Jr(n)||!!(s1&&n&&n[s1])}function nr(n,i){var l=typeof n;return i=i??Me,!!i&&(l=="number"||l!="symbol"&&V9.test(n))&&n>-1&&n%1==0&&n<i}function Ut(n,i,l){if(!ht(l))return!1;var p=typeof i;return(p=="number"?Jt(l)&&nr(i,l.length):p=="string"&&i in l)?$n(l[i],n):!1}function Lc(n,i){if(ze(n))return!1;var l=typeof n;return l=="number"||l=="symbol"||l=="boolean"||n==null||fn(n)?!0:C9.test(n)||!O9.test(n)||i!=null&&n in Qe(i)}function Cw(n){var i=typeof n;return i=="string"||i=="number"||i=="symbol"||i=="boolean"?n!=="__proto__":n===null}function Rc(n){var i=ls(n),l=A[i];if(typeof l!="function"||!(i in We.prototype))return!1;if(n===l)return!0;var p=Oc(l);return!!p&&n===p[0]}function Tw(n){return!!r1&&r1 in n}var Lw=Na?rr:Yc;function Lo(n){var i=n&&n.constructor;return n===(typeof i=="function"&&i.prototype||Ii)}function rf(n){return n===n&&!ht(n)}function of(n,i){return function(l){return l==null?!1:l[n]===i&&(i!==r||n in Qe(l))}}function Rw(n){var i=ps(n,function(p){return l.size===h&&l.clear(),p}),l=i.cache;return i}function Pw(n,i){var l=n[1],p=i[1],y=l|p,x=y<(_|S|U),L=p==U&&l==C||p==U&&l==ie&&n[7].length<=i[8]||p==(U|ie)&&i[7].length<=i[8]&&l==C;if(!(x||L))return n;p&_&&(n[2]=i[2],y|=l&_?0:M);var P=i[3];if(P){var N=n[3];n[3]=N?H1(N,P,i[4]):P,n[4]=N?yr(n[3],f):i[4]}return P=i[5],P&&(N=n[5],n[5]=N?F1(N,P,i[6]):P,n[6]=N?yr(n[5],f):i[6]),P=i[7],P&&(n[7]=P),p&U&&(n[8]=n[8]==null?i[8]:Nt(n[8],i[8])),n[9]==null&&(n[9]=i[9]),n[0]=i[0],n[1]=y,n}function $w(n){var i=[];if(n!=null)for(var l in Qe(n))i.push(l);return i}function zw(n){return Ha.call(n)}function af(n,i,l){return i=It(i===r?n.length-1:i,0),function(){for(var p=arguments,y=-1,x=It(p.length-i,0),L=W(x);++y<x;)L[y]=p[i+y];y=-1;for(var P=W(i+1);++y<i;)P[y]=p[y];return P[i]=l(L),un(n,this,P)}}function sf(n,i){return i.length<2?n:Kr(n,Mn(i,0,-1))}function Dw(n,i){for(var l=n.length,p=Nt(i.length,l),y=Xt(n);p--;){var x=i[p];n[p]=nr(x,l)?y[x]:r}return n}function Pc(n,i){if(!(i==="constructor"&&typeof n[i]=="function")&&i!="__proto__")return n[i]}var lf=uf(C1),Ro=J7||function(n,i){return Ct.setTimeout(n,i)},$c=uf(aw);function cf(n,i,l){var p=i+"";return $c(n,Iw(p,Nw(Aw(p),l)))}function uf(n){var i=0,l=0;return function(){var p=n8(),y=j-(p-l);if(l=p,y>0){if(++i>=R)return arguments[0]}else i=0;return n.apply(r,arguments)}}function us(n,i){var l=-1,p=n.length,y=p-1;for(i=i===r?p:i;++l<i;){var x=vc(l,y),L=n[x];n[x]=n[l],n[l]=L}return n.length=i,n}var df=Rw(function(n){var i=[];return n.charCodeAt(0)===46&&i.push(""),n.replace(T9,function(l,p,y,x){i.push(y?x.replace(B9,"$1"):p||l)}),i});function Gn(n){if(typeof n=="string"||fn(n))return n;var i=n+"";return i=="0"&&1/n==-oe?"-0":i}function Xr(n){if(n!=null){try{return Ba.call(n)}catch{}try{return n+""}catch{}}return""}function Nw(n,i){return kn(pe,function(l){var p="_."+l[0];i&l[1]&&!Pa(n,p)&&n.push(p)}),n.sort()}function hf(n){if(n instanceof We)return n.clone();var i=new Sn(n.__wrapped__,n.__chain__);return i.__actions__=Xt(n.__actions__),i.__index__=n.__index__,i.__values__=n.__values__,i}function Bw(n,i,l){(l?Ut(n,i,l):i===r)?i=1:i=It(Be(i),0);var p=n==null?0:n.length;if(!p||i<1)return[];for(var y=0,x=0,L=W(Za(p/i));y<p;)L[x++]=Mn(n,y,y+=i);return L}function Hw(n){for(var i=-1,l=n==null?0:n.length,p=0,y=[];++i<l;){var x=n[i];x&&(y[p++]=x)}return y}function Fw(){var n=arguments.length;if(!n)return[];for(var i=W(n-1),l=arguments[0],p=n;p--;)i[p-1]=arguments[p];return _r(ze(l)?Xt(l):[l],$t(i,1))}var Gw=Ue(function(n,i){return mt(n)?xo(n,$t(i,1,mt,!0)):[]}),Uw=Ue(function(n,i){var l=xn(i);return mt(l)&&(l=r),mt(n)?xo(n,$t(i,1,mt,!0),Oe(l,2)):[]}),Ww=Ue(function(n,i){var l=xn(i);return mt(l)&&(l=r),mt(n)?xo(n,$t(i,1,mt,!0),r,l):[]});function Vw(n,i,l){var p=n==null?0:n.length;return p?(i=l||i===r?1:Be(i),Mn(n,i<0?0:i,p)):[]}function Zw(n,i,l){var p=n==null?0:n.length;return p?(i=l||i===r?1:Be(i),i=p-i,Mn(n,0,i<0?0:i)):[]}function jw(n,i){return n&&n.length?ns(n,Oe(i,3),!0,!0):[]}function qw(n,i){return n&&n.length?ns(n,Oe(i,3),!0):[]}function Kw(n,i,l,p){var y=n==null?0:n.length;return y?(l&&typeof l!="number"&&Ut(n,i,l)&&(l=0,p=y),F8(n,i,l,p)):[]}function ff(n,i,l){var p=n==null?0:n.length;if(!p)return-1;var y=l==null?0:Be(l);return y<0&&(y=It(p+y,0)),$a(n,Oe(i,3),y)}function pf(n,i,l){var p=n==null?0:n.length;if(!p)return-1;var y=p-1;return l!==r&&(y=Be(l),y=l<0?It(p+y,0):Nt(y,p-1)),$a(n,Oe(i,3),y,!0)}function gf(n){return n!=null&&n.length?$t(n,1):[]}function Yw(n){return n!=null&&n.length?$t(n,oe):[]}function Xw(n,i){return n!=null&&n.length?(i=i===r?1:Be(i),$t(n,i)):[]}function Jw(n){for(var i=-1,l=n==null?0:n.length,p={};++i<l;){var y=n[i];p[y[0]]=y[1]}return p}function mf(n){return n&&n.length?n[0]:r}function Qw(n,i,l){var p=n==null?0:n.length;if(!p)return-1;var y=l==null?0:Be(l);return y<0&&(y=It(p+y,0)),Ai(n,i,y)}function e_(n){return n!=null&&n.length?Mn(n,0,-1):[]}var t_=Ue(function(n){var i=ut(n,kc);return i.length&&i[0]===n[0]?hc(i):[]}),n_=Ue(function(n){var i=xn(n),l=ut(n,kc);return i===xn(l)?i=r:l.pop(),l.length&&l[0]===n[0]?hc(l,Oe(i,2)):[]}),r_=Ue(function(n){var i=xn(n),l=ut(n,kc);return i=typeof i=="function"?i:r,i&&l.pop(),l.length&&l[0]===n[0]?hc(l,r,i):[]});function i_(n,i){return n==null?"":e8.call(n,i)}function xn(n){var i=n==null?0:n.length;return i?n[i-1]:r}function o_(n,i,l){var p=n==null?0:n.length;if(!p)return-1;var y=p;return l!==r&&(y=Be(l),y=y<0?It(p+y,0):Nt(y,p-1)),i===i?B7(n,i,y):$a(n,Kh,y,!0)}function a_(n,i){return n&&n.length?M1(n,Be(i)):r}var s_=Ue(vf);function vf(n,i){return n&&n.length&&i&&i.length?mc(n,i):n}function l_(n,i,l){return n&&n.length&&i&&i.length?mc(n,i,Oe(l,2)):n}function c_(n,i,l){return n&&n.length&&i&&i.length?mc(n,i,r,l):n}var u_=tr(function(n,i){var l=n==null?0:n.length,p=lc(n,i);return O1(n,ut(i,function(y){return nr(y,l)?+y:y}).sort(B1)),p});function d_(n,i){var l=[];if(!(n&&n.length))return l;var p=-1,y=[],x=n.length;for(i=Oe(i,3);++p<x;){var L=n[p];i(L,p,n)&&(l.push(L),y.push(p))}return O1(n,y),l}function zc(n){return n==null?n:i8.call(n)}function h_(n,i,l){var p=n==null?0:n.length;return p?(l&&typeof l!="number"&&Ut(n,i,l)?(i=0,l=p):(i=i==null?0:Be(i),l=l===r?p:Be(l)),Mn(n,i,l)):[]}function f_(n,i){return ts(n,i)}function p_(n,i,l){return wc(n,i,Oe(l,2))}function g_(n,i){var l=n==null?0:n.length;if(l){var p=ts(n,i);if(p<l&&$n(n[p],i))return p}return-1}function m_(n,i){return ts(n,i,!0)}function v_(n,i,l){return wc(n,i,Oe(l,2),!0)}function b_(n,i){if(n!=null&&n.length){var l=ts(n,i,!0)-1;if($n(n[l],i))return l}return-1}function w_(n){return n&&n.length?T1(n):[]}function __(n,i){return n&&n.length?T1(n,Oe(i,2)):[]}function y_(n){var i=n==null?0:n.length;return i?Mn(n,1,i):[]}function k_(n,i,l){return n&&n.length?(i=l||i===r?1:Be(i),Mn(n,0,i<0?0:i)):[]}function E_(n,i,l){var p=n==null?0:n.length;return p?(i=l||i===r?1:Be(i),i=p-i,Mn(n,i<0?0:i,p)):[]}function S_(n,i){return n&&n.length?ns(n,Oe(i,3),!1,!0):[]}function A_(n,i){return n&&n.length?ns(n,Oe(i,3)):[]}var M_=Ue(function(n){return Ar($t(n,1,mt,!0))}),x_=Ue(function(n){var i=xn(n);return mt(i)&&(i=r),Ar($t(n,1,mt,!0),Oe(i,2))}),I_=Ue(function(n){var i=xn(n);return i=typeof i=="function"?i:r,Ar($t(n,1,mt,!0),r,i)});function O_(n){return n&&n.length?Ar(n):[]}function C_(n,i){return n&&n.length?Ar(n,Oe(i,2)):[]}function T_(n,i){return i=typeof i=="function"?i:r,n&&n.length?Ar(n,r,i):[]}function Dc(n){if(!(n&&n.length))return[];var i=0;return n=wr(n,function(l){if(mt(l))return i=It(l.length,i),!0}),ec(i,function(l){return ut(n,Xl(l))})}function bf(n,i){if(!(n&&n.length))return[];var l=Dc(n);return i==null?l:ut(l,function(p){return un(i,r,p)})}var L_=Ue(function(n,i){return mt(n)?xo(n,i):[]}),R_=Ue(function(n){return yc(wr(n,mt))}),P_=Ue(function(n){var i=xn(n);return mt(i)&&(i=r),yc(wr(n,mt),Oe(i,2))}),$_=Ue(function(n){var i=xn(n);return i=typeof i=="function"?i:r,yc(wr(n,mt),r,i)}),z_=Ue(Dc);function D_(n,i){return $1(n||[],i||[],Mo)}function N_(n,i){return $1(n||[],i||[],Co)}var B_=Ue(function(n){var i=n.length,l=i>1?n[i-1]:r;return l=typeof l=="function"?(n.pop(),l):r,bf(n,l)});function wf(n){var i=A(n);return i.__chain__=!0,i}function H_(n,i){return i(n),n}function ds(n,i){return i(n)}var F_=tr(function(n){var i=n.length,l=i?n[0]:0,p=this.__wrapped__,y=function(x){return lc(x,n)};return i>1||this.__actions__.length||!(p instanceof We)||!nr(l)?this.thru(y):(p=p.slice(l,+l+(i?1:0)),p.__actions__.push({func:ds,args:[y],thisArg:r}),new Sn(p,this.__chain__).thru(function(x){return i&&!x.length&&x.push(r),x}))});function G_(){return wf(this)}function U_(){return new Sn(this.value(),this.__chain__)}function W_(){this.__values__===r&&(this.__values__=Rf(this.value()));var n=this.__index__>=this.__values__.length,i=n?r:this.__values__[this.__index__++];return{done:n,value:i}}function V_(){return this}function Z_(n){for(var i,l=this;l instanceof Ya;){var p=hf(l);p.__index__=0,p.__values__=r,i?y.__wrapped__=p:i=p;var y=p;l=l.__wrapped__}return y.__wrapped__=n,i}function j_(){var n=this.__wrapped__;if(n instanceof We){var i=n;return this.__actions__.length&&(i=new We(this)),i=i.reverse(),i.__actions__.push({func:ds,args:[zc],thisArg:r}),new Sn(i,this.__chain__)}return this.thru(zc)}function q_(){return P1(this.__wrapped__,this.__actions__)}var K_=rs(function(n,i,l){Ye.call(n,l)?++n[l]:Qn(n,l,1)});function Y_(n,i,l){var p=ze(n)?jh:H8;return l&&Ut(n,i,l)&&(i=r),p(n,Oe(i,3))}function X_(n,i){return(ze(n)?wr:v1)(n,Oe(i,3))}var J_=V1(ff),Q_=V1(pf);function ey(n,i){return $t(hs(n,i),1)}function ty(n,i){return $t(hs(n,i),oe)}function ny(n,i,l){return l=l===r?1:Be(l),$t(hs(n,i),l)}function _f(n,i){return(ze(n)?kn:Sr)(n,Oe(i,3))}function yf(n,i){return(ze(n)?k7:m1)(n,Oe(i,3))}var ry=rs(function(n,i,l){Ye.call(n,l)?n[l].push(i):Qn(n,l,[i])});function iy(n,i,l,p){n=Jt(n)?n:zi(n),l=l&&!p?Be(l):0;var y=n.length;return l<0&&(l=It(y+l,0)),vs(n)?l<=y&&n.indexOf(i,l)>-1:!!y&&Ai(n,i,l)>-1}var oy=Ue(function(n,i,l){var p=-1,y=typeof i=="function",x=Jt(n)?W(n.length):[];return Sr(n,function(L){x[++p]=y?un(i,L,l):Io(L,i,l)}),x}),ay=rs(function(n,i,l){Qn(n,l,i)});function hs(n,i){return(ze(n)?ut:E1)(n,Oe(i,3))}function sy(n,i,l,p){return n==null?[]:(ze(i)||(i=i==null?[]:[i]),l=p?r:l,ze(l)||(l=l==null?[]:[l]),x1(n,i,l))}var ly=rs(function(n,i,l){n[l?0:1].push(i)},function(){return[[],[]]});function cy(n,i,l){var p=ze(n)?Kl:Xh,y=arguments.length<3;return p(n,Oe(i,4),l,y,Sr)}function uy(n,i,l){var p=ze(n)?E7:Xh,y=arguments.length<3;return p(n,Oe(i,4),l,y,m1)}function dy(n,i){return(ze(n)?wr:v1)(n,gs(Oe(i,3)))}function hy(n){return(ze(n)?h1:iw)(n)}function fy(n,i,l){return(l?Ut(n,i,l):i===r)?i=1:i=Be(i),(ze(n)?$8:ow)(n,i)}function py(n){return(ze(n)?z8:sw)(n)}function gy(n){if(n==null)return 0;if(Jt(n))return vs(n)?xi(n):n.length;var i=Bt(n);return i==w||i==ne?n.size:pc(n).length}function my(n,i,l){var p=ze(n)?Yl:lw;return l&&Ut(n,i,l)&&(i=r),p(n,Oe(i,3))}var vy=Ue(function(n,i){if(n==null)return[];var l=i.length;return l>1&&Ut(n,i[0],i[1])?i=[]:l>2&&Ut(i[0],i[1],i[2])&&(i=[i[0]]),x1(n,$t(i,1),[])}),fs=X7||function(){return Ct.Date.now()};function by(n,i){if(typeof i!="function")throw new En(c);return n=Be(n),function(){if(--n<1)return i.apply(this,arguments)}}function kf(n,i,l){return i=l?r:i,i=n&&i==null?n.length:i,er(n,U,r,r,r,r,i)}function Ef(n,i){var l;if(typeof i!="function")throw new En(c);return n=Be(n),function(){return--n>0&&(l=i.apply(this,arguments)),n<=1&&(i=r),l}}var Nc=Ue(function(n,i,l){var p=_;if(l.length){var y=yr(l,Pi(Nc));p|=$}return er(n,p,i,l,y)}),Sf=Ue(function(n,i,l){var p=_|S;if(l.length){var y=yr(l,Pi(Sf));p|=$}return er(i,p,n,l,y)});function Af(n,i,l){i=l?r:i;var p=er(n,C,r,r,r,r,r,i);return p.placeholder=Af.placeholder,p}function Mf(n,i,l){i=l?r:i;var p=er(n,T,r,r,r,r,r,i);return p.placeholder=Mf.placeholder,p}function xf(n,i,l){var p,y,x,L,P,N,te=0,ee=!1,se=!1,me=!0;if(typeof n!="function")throw new En(c);i=In(i)||0,ht(l)&&(ee=!!l.leading,se="maxWait"in l,x=se?It(In(l.maxWait)||0,i):x,me="trailing"in l?!!l.trailing:me);function _e(vt){var zn=p,or=y;return p=y=r,te=vt,L=n.apply(or,zn),L}function Ie(vt){return te=vt,P=Ro(et,i),ee?_e(vt):L}function Re(vt){var zn=vt-N,or=vt-te,Zf=i-zn;return se?Nt(Zf,x-or):Zf}function Ce(vt){var zn=vt-N,or=vt-te;return N===r||zn>=i||zn<0||se&&or>=x}function et(){var vt=fs();if(Ce(vt))return Ve(vt);P=Ro(et,Re(vt))}function Ve(vt){return P=r,me&&p?_e(vt):(p=y=r,L)}function Wt(){P!==r&&z1(P),te=0,p=N=y=P=r}function Un(){return P===r?L:Ve(fs())}function Or(){var vt=fs(),zn=Ce(vt);if(p=arguments,y=this,N=vt,zn){if(P===r)return Ie(N);if(se)return z1(P),P=Ro(et,i),_e(N)}return P===r&&(P=Ro(et,i)),L}return Or.cancel=Wt,Or.flush=Un,Or}var wy=Ue(function(n,i){return g1(n,1,i)}),_y=Ue(function(n,i,l){return g1(n,In(i)||0,l)});function yy(n){return er(n,H)}function ps(n,i){if(typeof n!="function"||i!=null&&typeof i!="function")throw new En(c);var l=function(){var p=arguments,y=i?i.apply(this,p):p[0],x=l.cache;if(x.has(y))return x.get(y);var L=n.apply(this,p);return l.cache=x.set(y,L)||x,L};return l.cache=new(ps.Cache||Jn),l}ps.Cache=Jn;function gs(n){if(typeof n!="function")throw new En(c);return function(){var i=arguments;switch(i.length){case 0:return!n.call(this);case 1:return!n.call(this,i[0]);case 2:return!n.call(this,i[0],i[1]);case 3:return!n.call(this,i[0],i[1],i[2])}return!n.apply(this,i)}}function ky(n){return Ef(2,n)}var Ey=cw(function(n,i){i=i.length==1&&ze(i[0])?ut(i[0],dn(Oe())):ut($t(i,1),dn(Oe()));var l=i.length;return Ue(function(p){for(var y=-1,x=Nt(p.length,l);++y<x;)p[y]=i[y].call(this,p[y]);return un(n,this,p)})}),Bc=Ue(function(n,i){return er(n,$,r,i,yr(i,Pi(Bc)))}),If=Ue(function(n,i){return er(n,Z,r,i,yr(i,Pi(If)))}),Sy=tr(function(n,i){return er(n,ie,r,r,r,i)});function Ay(n,i){if(typeof n!="function")throw new En(c);return i=i===r?i:Be(i),Ue(n,i)}function My(n,i){if(typeof n!="function")throw new En(c);return i=i==null?0:It(Be(i),0),Ue(function(l){var p=l[i],y=xr(l,0,i);return p&&_r(y,p),un(n,this,y)})}function xy(n,i,l){var p=!0,y=!0;if(typeof n!="function")throw new En(c);return ht(l)&&(p="leading"in l?!!l.leading:p,y="trailing"in l?!!l.trailing:y),xf(n,i,{leading:p,maxWait:i,trailing:y})}function Iy(n){return kf(n,1)}function Oy(n,i){return Bc(Ec(i),n)}function Cy(){if(!arguments.length)return[];var n=arguments[0];return ze(n)?n:[n]}function Ty(n){return An(n,g)}function Ly(n,i){return i=typeof i=="function"?i:r,An(n,g,i)}function Ry(n){return An(n,b|g)}function Py(n,i){return i=typeof i=="function"?i:r,An(n,b|g,i)}function $y(n,i){return i==null||p1(n,i,Tt(i))}function $n(n,i){return n===i||n!==n&&i!==i}var zy=ss(dc),Dy=ss(function(n,i){return n>=i}),Jr=_1((function(){return arguments})())?_1:function(n){return gt(n)&&Ye.call(n,"callee")&&!a1.call(n,"callee")},ze=W.isArray,Ny=Fh?dn(Fh):Z8;function Jt(n){return n!=null&&ms(n.length)&&!rr(n)}function mt(n){return gt(n)&&Jt(n)}function By(n){return n===!0||n===!1||gt(n)&&Gt(n)==$e}var Ir=Q7||Yc,Hy=Gh?dn(Gh):j8;function Fy(n){return gt(n)&&n.nodeType===1&&!Po(n)}function Gy(n){if(n==null)return!0;if(Jt(n)&&(ze(n)||typeof n=="string"||typeof n.splice=="function"||Ir(n)||$i(n)||Jr(n)))return!n.length;var i=Bt(n);if(i==w||i==ne)return!n.size;if(Lo(n))return!pc(n).length;for(var l in n)if(Ye.call(n,l))return!1;return!0}function Uy(n,i){return Oo(n,i)}function Wy(n,i,l){l=typeof l=="function"?l:r;var p=l?l(n,i):r;return p===r?Oo(n,i,r,l):!!p}function Hc(n){if(!gt(n))return!1;var i=Gt(n);return i==rt||i==Et||typeof n.message=="string"&&typeof n.name=="string"&&!Po(n)}function Vy(n){return typeof n=="number"&&l1(n)}function rr(n){if(!ht(n))return!1;var i=Gt(n);return i==Ft||i==Kt||i==kt||i==D}function Of(n){return typeof n=="number"&&n==Be(n)}function ms(n){return typeof n=="number"&&n>-1&&n%1==0&&n<=Me}function ht(n){var i=typeof n;return n!=null&&(i=="object"||i=="function")}function gt(n){return n!=null&&typeof n=="object"}var Cf=Uh?dn(Uh):K8;function Zy(n,i){return n===i||fc(n,i,Cc(i))}function jy(n,i,l){return l=typeof l=="function"?l:r,fc(n,i,Cc(i),l)}function qy(n){return Tf(n)&&n!=+n}function Ky(n){if(Lw(n))throw new Le(s);return y1(n)}function Yy(n){return n===null}function Xy(n){return n==null}function Tf(n){return typeof n=="number"||gt(n)&&Gt(n)==Q}function Po(n){if(!gt(n)||Gt(n)!=O)return!1;var i=Ua(n);if(i===null)return!0;var l=Ye.call(i,"constructor")&&i.constructor;return typeof l=="function"&&l instanceof l&&Ba.call(l)==j7}var Fc=Wh?dn(Wh):Y8;function Jy(n){return Of(n)&&n>=-Me&&n<=Me}var Lf=Vh?dn(Vh):X8;function vs(n){return typeof n=="string"||!ze(n)&&gt(n)&&Gt(n)==B}function fn(n){return typeof n=="symbol"||gt(n)&&Gt(n)==ce}var $i=Zh?dn(Zh):J8;function Qy(n){return n===r}function ek(n){return gt(n)&&Bt(n)==ue}function tk(n){return gt(n)&&Gt(n)==Ae}var nk=ss(gc),rk=ss(function(n,i){return n<=i});function Rf(n){if(!n)return[];if(Jt(n))return vs(n)?Rn(n):Xt(n);if(yo&&n[yo])return z7(n[yo]());var i=Bt(n);return(i==w?nc:i==ne?za:zi)(n)}function ir(n){return n?(n=In(n),n===oe||n===-oe?(n<0?-1:1)*ae:n===n?n:0):n===0?n:0}function Be(n){var i=ir(n),l=i%1;return i===i?l?i-l:i:0}function Pf(n){return n?qr(Be(n),0,F):0}function In(n){if(typeof n=="number")return n;if(fn(n))return Ee;if(ht(n)){var i=typeof n.valueOf=="function"?n.valueOf():n;n=ht(i)?i+"":i}if(typeof n!="string")return n===0?n:+n;n=Jh(n);var l=G9.test(n);return l||W9.test(n)?w7(n.slice(2),l?2:8):F9.test(n)?Ee:+n}function $f(n){return Fn(n,Qt(n))}function ik(n){return n?qr(Be(n),-Me,Me):n===0?n:0}function Xe(n){return n==null?"":hn(n)}var ok=Li(function(n,i){if(Lo(i)||Jt(i)){Fn(i,Tt(i),n);return}for(var l in i)Ye.call(i,l)&&Mo(n,l,i[l])}),zf=Li(function(n,i){Fn(i,Qt(i),n)}),bs=Li(function(n,i,l,p){Fn(i,Qt(i),n,p)}),ak=Li(function(n,i,l,p){Fn(i,Tt(i),n,p)}),sk=tr(lc);function lk(n,i){var l=Ti(n);return i==null?l:f1(l,i)}var ck=Ue(function(n,i){n=Qe(n);var l=-1,p=i.length,y=p>2?i[2]:r;for(y&&Ut(i[0],i[1],y)&&(p=1);++l<p;)for(var x=i[l],L=Qt(x),P=-1,N=L.length;++P<N;){var te=L[P],ee=n[te];(ee===r||$n(ee,Ii[te])&&!Ye.call(n,te))&&(n[te]=x[te])}return n}),uk=Ue(function(n){return n.push(r,J1),un(Df,r,n)});function dk(n,i){return qh(n,Oe(i,3),Hn)}function hk(n,i){return qh(n,Oe(i,3),uc)}function fk(n,i){return n==null?n:cc(n,Oe(i,3),Qt)}function pk(n,i){return n==null?n:b1(n,Oe(i,3),Qt)}function gk(n,i){return n&&Hn(n,Oe(i,3))}function mk(n,i){return n&&uc(n,Oe(i,3))}function vk(n){return n==null?[]:Qa(n,Tt(n))}function bk(n){return n==null?[]:Qa(n,Qt(n))}function Gc(n,i,l){var p=n==null?r:Kr(n,i);return p===r?l:p}function wk(n,i){return n!=null&&tf(n,i,G8)}function Uc(n,i){return n!=null&&tf(n,i,U8)}var _k=j1(function(n,i,l){i!=null&&typeof i.toString!="function"&&(i=Ha.call(i)),n[i]=l},Vc(en)),yk=j1(function(n,i,l){i!=null&&typeof i.toString!="function"&&(i=Ha.call(i)),Ye.call(n,i)?n[i].push(l):n[i]=[l]},Oe),kk=Ue(Io);function Tt(n){return Jt(n)?d1(n):pc(n)}function Qt(n){return Jt(n)?d1(n,!0):Q8(n)}function Ek(n,i){var l={};return i=Oe(i,3),Hn(n,function(p,y,x){Qn(l,i(p,y,x),p)}),l}function Sk(n,i){var l={};return i=Oe(i,3),Hn(n,function(p,y,x){Qn(l,y,i(p,y,x))}),l}var Ak=Li(function(n,i,l){es(n,i,l)}),Df=Li(function(n,i,l,p){es(n,i,l,p)}),Mk=tr(function(n,i){var l={};if(n==null)return l;var p=!1;i=ut(i,function(x){return x=Mr(x,n),p||(p=x.length>1),x}),Fn(n,Ic(n),l),p&&(l=An(l,b|v|g,_w));for(var y=i.length;y--;)_c(l,i[y]);return l});function xk(n,i){return Nf(n,gs(Oe(i)))}var Ik=tr(function(n,i){return n==null?{}:tw(n,i)});function Nf(n,i){if(n==null)return{};var l=ut(Ic(n),function(p){return[p]});return i=Oe(i),I1(n,l,function(p,y){return i(p,y[0])})}function Ok(n,i,l){i=Mr(i,n);var p=-1,y=i.length;for(y||(y=1,n=r);++p<y;){var x=n==null?r:n[Gn(i[p])];x===r&&(p=y,x=l),n=rr(x)?x.call(n):x}return n}function Ck(n,i,l){return n==null?n:Co(n,i,l)}function Tk(n,i,l,p){return p=typeof p=="function"?p:r,n==null?n:Co(n,i,l,p)}var Bf=Y1(Tt),Hf=Y1(Qt);function Lk(n,i,l){var p=ze(n),y=p||Ir(n)||$i(n);if(i=Oe(i,4),l==null){var x=n&&n.constructor;y?l=p?new x:[]:ht(n)?l=rr(x)?Ti(Ua(n)):{}:l={}}return(y?kn:Hn)(n,function(L,P,N){return i(l,L,P,N)}),l}function Rk(n,i){return n==null?!0:_c(n,i)}function Pk(n,i,l){return n==null?n:R1(n,i,Ec(l))}function $k(n,i,l,p){return p=typeof p=="function"?p:r,n==null?n:R1(n,i,Ec(l),p)}function zi(n){return n==null?[]:tc(n,Tt(n))}function zk(n){return n==null?[]:tc(n,Qt(n))}function Dk(n,i,l){return l===r&&(l=i,i=r),l!==r&&(l=In(l),l=l===l?l:0),i!==r&&(i=In(i),i=i===i?i:0),qr(In(n),i,l)}function Nk(n,i,l){return i=ir(i),l===r?(l=i,i=0):l=ir(l),n=In(n),W8(n,i,l)}function Bk(n,i,l){if(l&&typeof l!="boolean"&&Ut(n,i,l)&&(i=l=r),l===r&&(typeof i=="boolean"?(l=i,i=r):typeof n=="boolean"&&(l=n,n=r)),n===r&&i===r?(n=0,i=1):(n=ir(n),i===r?(i=n,n=0):i=ir(i)),n>i){var p=n;n=i,i=p}if(l||n%1||i%1){var y=c1();return Nt(n+y*(i-n+b7("1e-"+((y+"").length-1))),i)}return vc(n,i)}var Hk=Ri(function(n,i,l){return i=i.toLowerCase(),n+(l?Ff(i):i)});function Ff(n){return Wc(Xe(n).toLowerCase())}function Gf(n){return n=Xe(n),n&&n.replace(Z9,T7).replace(l7,"")}function Fk(n,i,l){n=Xe(n),i=hn(i);var p=n.length;l=l===r?p:qr(Be(l),0,p);var y=l;return l-=i.length,l>=0&&n.slice(l,y)==i}function Gk(n){return n=Xe(n),n&&M9.test(n)?n.replace(br,L7):n}function Uk(n){return n=Xe(n),n&&L9.test(n)?n.replace(Bl,"\\$&"):n}var Wk=Ri(function(n,i,l){return n+(l?"-":"")+i.toLowerCase()}),Vk=Ri(function(n,i,l){return n+(l?" ":"")+i.toLowerCase()}),Zk=W1("toLowerCase");function jk(n,i,l){n=Xe(n),i=Be(i);var p=i?xi(n):0;if(!i||p>=i)return n;var y=(i-p)/2;return as(ja(y),l)+n+as(Za(y),l)}function qk(n,i,l){n=Xe(n),i=Be(i);var p=i?xi(n):0;return i&&p<i?n+as(i-p,l):n}function Kk(n,i,l){n=Xe(n),i=Be(i);var p=i?xi(n):0;return i&&p<i?as(i-p,l)+n:n}function Yk(n,i,l){return l||i==null?i=0:i&&(i=+i),r8(Xe(n).replace(Hl,""),i||0)}function Xk(n,i,l){return(l?Ut(n,i,l):i===r)?i=1:i=Be(i),bc(Xe(n),i)}function Jk(){var n=arguments,i=Xe(n[0]);return n.length<3?i:i.replace(n[1],n[2])}var Qk=Ri(function(n,i,l){return n+(l?"_":"")+i.toLowerCase()});function eE(n,i,l){return l&&typeof l!="number"&&Ut(n,i,l)&&(i=l=r),l=l===r?F:l>>>0,l?(n=Xe(n),n&&(typeof i=="string"||i!=null&&!Fc(i))&&(i=hn(i),!i&&Mi(n))?xr(Rn(n),0,l):n.split(i,l)):[]}var tE=Ri(function(n,i,l){return n+(l?" ":"")+Wc(i)});function nE(n,i,l){return n=Xe(n),l=l==null?0:qr(Be(l),0,n.length),i=hn(i),n.slice(l,l+i.length)==i}function rE(n,i,l){var p=A.templateSettings;l&&Ut(n,i,l)&&(i=r),n=Xe(n),i=bs({},i,p,X1);var y=bs({},i.imports,p.imports,X1),x=Tt(y),L=tc(y,x),P,N,te=0,ee=i.interpolate||Ta,se="__p += '",me=rc((i.escape||Ta).source+"|"+ee.source+"|"+(ee===wh?H9:Ta).source+"|"+(i.evaluate||Ta).source+"|$","g"),_e="//# sourceURL="+(Ye.call(i,"sourceURL")?(i.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++f7+"]")+`
`;n.replace(me,function(Ce,et,Ve,Wt,Un,Or){return Ve||(Ve=Wt),se+=n.slice(te,Or).replace(j9,R7),et&&(P=!0,se+=`' +
__e(`+et+`) +
'`),Un&&(N=!0,se+=`';
`+Un+`;
__p += '`),Ve&&(se+=`' +
((__t = (`+Ve+`)) == null ? '' : __t) +
'`),te=Or+Ce.length,Ce}),se+=`';
`;var Ie=Ye.call(i,"variable")&&i.variable;if(!Ie)se=`with (obj) {
`+se+`
}
`;else if(N9.test(Ie))throw new Le(d);se=(N?se.replace(zl,""):se).replace(Dl,"$1").replace(Nl,"$1;"),se="function("+(Ie||"obj")+`) {
`+(Ie?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(P?", __e = _.escape":"")+(N?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+se+`return __p
}`;var Re=Wf(function(){return qe(x,_e+"return "+se).apply(r,L)});if(Re.source=se,Hc(Re))throw Re;return Re}function iE(n){return Xe(n).toLowerCase()}function oE(n){return Xe(n).toUpperCase()}function aE(n,i,l){if(n=Xe(n),n&&(l||i===r))return Jh(n);if(!n||!(i=hn(i)))return n;var p=Rn(n),y=Rn(i);return xr(p,Qh(p,y),e1(p,y)+1).join("")}function sE(n,i,l){if(n=Xe(n),n&&(l||i===r))return n.slice(0,n1(n)+1);if(!n||!(i=hn(i)))return n;var p=Rn(n);return xr(p,0,e1(p,Rn(i))+1).join("")}function lE(n,i,l){if(n=Xe(n),n&&(l||i===r))return n.replace(Hl,"");if(!n||!(i=hn(i)))return n;var p=Rn(n);return xr(p,Qh(p,Rn(i))).join("")}function cE(n,i){var l=fe,p=we;if(ht(i)){var y="separator"in i?i.separator:y;l="length"in i?Be(i.length):l,p="omission"in i?hn(i.omission):p}n=Xe(n);var x=n.length;if(Mi(n)){var L=Rn(n);x=L.length}if(l>=x)return n;var P=l-xi(p);if(P<1)return p;var N=L?xr(L,0,P).join(""):n.slice(0,P);if(y===r)return N+p;if(L&&(P+=N.length-P),Fc(y)){if(n.slice(P).search(y)){var te,ee=N;for(y.global||(y=rc(y.source,Xe(_h.exec(y))+"g")),y.lastIndex=0;te=y.exec(ee);)var se=te.index;N=N.slice(0,se===r?P:se)}}else if(n.indexOf(hn(y),P)!=P){var me=N.lastIndexOf(y);me>-1&&(N=N.slice(0,me))}return N+p}function uE(n){return n=Xe(n),n&&Ei.test(n)?n.replace(wo,H7):n}var dE=Ri(function(n,i,l){return n+(l?" ":"")+i.toUpperCase()}),Wc=W1("toUpperCase");function Uf(n,i,l){return n=Xe(n),i=l?r:i,i===r?$7(n)?U7(n):M7(n):n.match(i)||[]}var Wf=Ue(function(n,i){try{return un(n,r,i)}catch(l){return Hc(l)?l:new Le(l)}}),hE=tr(function(n,i){return kn(i,function(l){l=Gn(l),Qn(n,l,Nc(n[l],n))}),n});function fE(n){var i=n==null?0:n.length,l=Oe();return n=i?ut(n,function(p){if(typeof p[1]!="function")throw new En(c);return[l(p[0]),p[1]]}):[],Ue(function(p){for(var y=-1;++y<i;){var x=n[y];if(un(x[0],this,p))return un(x[1],this,p)}})}function pE(n){return B8(An(n,b))}function Vc(n){return function(){return n}}function gE(n,i){return n==null||n!==n?i:n}var mE=Z1(),vE=Z1(!0);function en(n){return n}function Zc(n){return k1(typeof n=="function"?n:An(n,b))}function bE(n){return S1(An(n,b))}function wE(n,i){return A1(n,An(i,b))}var _E=Ue(function(n,i){return function(l){return Io(l,n,i)}}),yE=Ue(function(n,i){return function(l){return Io(n,l,i)}});function jc(n,i,l){var p=Tt(i),y=Qa(i,p);l==null&&!(ht(i)&&(y.length||!p.length))&&(l=i,i=n,n=this,y=Qa(i,Tt(i)));var x=!(ht(l)&&"chain"in l)||!!l.chain,L=rr(n);return kn(y,function(P){var N=i[P];n[P]=N,L&&(n.prototype[P]=function(){var te=this.__chain__;if(x||te){var ee=n(this.__wrapped__);return(ee.__actions__=Xt(this.__actions__)).push({func:N,args:arguments,thisArg:n}),ee.__chain__=te,ee}return N.apply(n,_r([this.value()],arguments))})}),n}function kE(){return Ct._===this&&(Ct._=q7),this}function qc(){}function EE(n){return n=Be(n),Ue(function(i){return M1(i,n)})}var SE=Ac(ut),AE=Ac(jh),ME=Ac(Yl);function Vf(n){return Lc(n)?Xl(Gn(n)):nw(n)}function xE(n){return function(i){return n==null?r:Kr(n,i)}}var IE=q1(),OE=q1(!0);function Kc(){return[]}function Yc(){return!1}function CE(){return{}}function TE(){return""}function LE(){return!0}function RE(n,i){if(n=Be(n),n<1||n>Me)return[];var l=F,p=Nt(n,F);i=Oe(i),n-=F;for(var y=ec(p,i);++l<n;)i(l);return y}function PE(n){return ze(n)?ut(n,Gn):fn(n)?[n]:Xt(df(Xe(n)))}function $E(n){var i=++Z7;return Xe(n)+i}var zE=os(function(n,i){return n+i},0),DE=Mc("ceil"),NE=os(function(n,i){return n/i},1),BE=Mc("floor");function HE(n){return n&&n.length?Ja(n,en,dc):r}function FE(n,i){return n&&n.length?Ja(n,Oe(i,2),dc):r}function GE(n){return Yh(n,en)}function UE(n,i){return Yh(n,Oe(i,2))}function WE(n){return n&&n.length?Ja(n,en,gc):r}function VE(n,i){return n&&n.length?Ja(n,Oe(i,2),gc):r}var ZE=os(function(n,i){return n*i},1),jE=Mc("round"),qE=os(function(n,i){return n-i},0);function KE(n){return n&&n.length?Ql(n,en):0}function YE(n,i){return n&&n.length?Ql(n,Oe(i,2)):0}return A.after=by,A.ary=kf,A.assign=ok,A.assignIn=zf,A.assignInWith=bs,A.assignWith=ak,A.at=sk,A.before=Ef,A.bind=Nc,A.bindAll=hE,A.bindKey=Sf,A.castArray=Cy,A.chain=wf,A.chunk=Bw,A.compact=Hw,A.concat=Fw,A.cond=fE,A.conforms=pE,A.constant=Vc,A.countBy=K_,A.create=lk,A.curry=Af,A.curryRight=Mf,A.debounce=xf,A.defaults=ck,A.defaultsDeep=uk,A.defer=wy,A.delay=_y,A.difference=Gw,A.differenceBy=Uw,A.differenceWith=Ww,A.drop=Vw,A.dropRight=Zw,A.dropRightWhile=jw,A.dropWhile=qw,A.fill=Kw,A.filter=X_,A.flatMap=ey,A.flatMapDeep=ty,A.flatMapDepth=ny,A.flatten=gf,A.flattenDeep=Yw,A.flattenDepth=Xw,A.flip=yy,A.flow=mE,A.flowRight=vE,A.fromPairs=Jw,A.functions=vk,A.functionsIn=bk,A.groupBy=ry,A.initial=e_,A.intersection=t_,A.intersectionBy=n_,A.intersectionWith=r_,A.invert=_k,A.invertBy=yk,A.invokeMap=oy,A.iteratee=Zc,A.keyBy=ay,A.keys=Tt,A.keysIn=Qt,A.map=hs,A.mapKeys=Ek,A.mapValues=Sk,A.matches=bE,A.matchesProperty=wE,A.memoize=ps,A.merge=Ak,A.mergeWith=Df,A.method=_E,A.methodOf=yE,A.mixin=jc,A.negate=gs,A.nthArg=EE,A.omit=Mk,A.omitBy=xk,A.once=ky,A.orderBy=sy,A.over=SE,A.overArgs=Ey,A.overEvery=AE,A.overSome=ME,A.partial=Bc,A.partialRight=If,A.partition=ly,A.pick=Ik,A.pickBy=Nf,A.property=Vf,A.propertyOf=xE,A.pull=s_,A.pullAll=vf,A.pullAllBy=l_,A.pullAllWith=c_,A.pullAt=u_,A.range=IE,A.rangeRight=OE,A.rearg=Sy,A.reject=dy,A.remove=d_,A.rest=Ay,A.reverse=zc,A.sampleSize=fy,A.set=Ck,A.setWith=Tk,A.shuffle=py,A.slice=h_,A.sortBy=vy,A.sortedUniq=w_,A.sortedUniqBy=__,A.split=eE,A.spread=My,A.tail=y_,A.take=k_,A.takeRight=E_,A.takeRightWhile=S_,A.takeWhile=A_,A.tap=H_,A.throttle=xy,A.thru=ds,A.toArray=Rf,A.toPairs=Bf,A.toPairsIn=Hf,A.toPath=PE,A.toPlainObject=$f,A.transform=Lk,A.unary=Iy,A.union=M_,A.unionBy=x_,A.unionWith=I_,A.uniq=O_,A.uniqBy=C_,A.uniqWith=T_,A.unset=Rk,A.unzip=Dc,A.unzipWith=bf,A.update=Pk,A.updateWith=$k,A.values=zi,A.valuesIn=zk,A.without=L_,A.words=Uf,A.wrap=Oy,A.xor=R_,A.xorBy=P_,A.xorWith=$_,A.zip=z_,A.zipObject=D_,A.zipObjectDeep=N_,A.zipWith=B_,A.entries=Bf,A.entriesIn=Hf,A.extend=zf,A.extendWith=bs,jc(A,A),A.add=zE,A.attempt=Wf,A.camelCase=Hk,A.capitalize=Ff,A.ceil=DE,A.clamp=Dk,A.clone=Ty,A.cloneDeep=Ry,A.cloneDeepWith=Py,A.cloneWith=Ly,A.conformsTo=$y,A.deburr=Gf,A.defaultTo=gE,A.divide=NE,A.endsWith=Fk,A.eq=$n,A.escape=Gk,A.escapeRegExp=Uk,A.every=Y_,A.find=J_,A.findIndex=ff,A.findKey=dk,A.findLast=Q_,A.findLastIndex=pf,A.findLastKey=hk,A.floor=BE,A.forEach=_f,A.forEachRight=yf,A.forIn=fk,A.forInRight=pk,A.forOwn=gk,A.forOwnRight=mk,A.get=Gc,A.gt=zy,A.gte=Dy,A.has=wk,A.hasIn=Uc,A.head=mf,A.identity=en,A.includes=iy,A.indexOf=Qw,A.inRange=Nk,A.invoke=kk,A.isArguments=Jr,A.isArray=ze,A.isArrayBuffer=Ny,A.isArrayLike=Jt,A.isArrayLikeObject=mt,A.isBoolean=By,A.isBuffer=Ir,A.isDate=Hy,A.isElement=Fy,A.isEmpty=Gy,A.isEqual=Uy,A.isEqualWith=Wy,A.isError=Hc,A.isFinite=Vy,A.isFunction=rr,A.isInteger=Of,A.isLength=ms,A.isMap=Cf,A.isMatch=Zy,A.isMatchWith=jy,A.isNaN=qy,A.isNative=Ky,A.isNil=Xy,A.isNull=Yy,A.isNumber=Tf,A.isObject=ht,A.isObjectLike=gt,A.isPlainObject=Po,A.isRegExp=Fc,A.isSafeInteger=Jy,A.isSet=Lf,A.isString=vs,A.isSymbol=fn,A.isTypedArray=$i,A.isUndefined=Qy,A.isWeakMap=ek,A.isWeakSet=tk,A.join=i_,A.kebabCase=Wk,A.last=xn,A.lastIndexOf=o_,A.lowerCase=Vk,A.lowerFirst=Zk,A.lt=nk,A.lte=rk,A.max=HE,A.maxBy=FE,A.mean=GE,A.meanBy=UE,A.min=WE,A.minBy=VE,A.stubArray=Kc,A.stubFalse=Yc,A.stubObject=CE,A.stubString=TE,A.stubTrue=LE,A.multiply=ZE,A.nth=a_,A.noConflict=kE,A.noop=qc,A.now=fs,A.pad=jk,A.padEnd=qk,A.padStart=Kk,A.parseInt=Yk,A.random=Bk,A.reduce=cy,A.reduceRight=uy,A.repeat=Xk,A.replace=Jk,A.result=Ok,A.round=jE,A.runInContext=z,A.sample=hy,A.size=gy,A.snakeCase=Qk,A.some=my,A.sortedIndex=f_,A.sortedIndexBy=p_,A.sortedIndexOf=g_,A.sortedLastIndex=m_,A.sortedLastIndexBy=v_,A.sortedLastIndexOf=b_,A.startCase=tE,A.startsWith=nE,A.subtract=qE,A.sum=KE,A.sumBy=YE,A.template=rE,A.times=RE,A.toFinite=ir,A.toInteger=Be,A.toLength=Pf,A.toLower=iE,A.toNumber=In,A.toSafeInteger=ik,A.toString=Xe,A.toUpper=oE,A.trim=aE,A.trimEnd=sE,A.trimStart=lE,A.truncate=cE,A.unescape=uE,A.uniqueId=$E,A.upperCase=dE,A.upperFirst=Wc,A.each=_f,A.eachRight=yf,A.first=mf,jc(A,(function(){var n={};return Hn(A,function(i,l){Ye.call(A.prototype,l)||(n[l]=i)}),n})(),{chain:!1}),A.VERSION=o,kn(["bind","bindKey","curry","curryRight","partial","partialRight"],function(n){A[n].placeholder=A}),kn(["drop","take"],function(n,i){We.prototype[n]=function(l){l=l===r?1:It(Be(l),0);var p=this.__filtered__&&!i?new We(this):this.clone();return p.__filtered__?p.__takeCount__=Nt(l,p.__takeCount__):p.__views__.push({size:Nt(l,F),type:n+(p.__dir__<0?"Right":"")}),p},We.prototype[n+"Right"]=function(l){return this.reverse()[n](l).reverse()}}),kn(["filter","map","takeWhile"],function(n,i){var l=i+1,p=l==E||l==xe;We.prototype[n]=function(y){var x=this.clone();return x.__iteratees__.push({iteratee:Oe(y,3),type:l}),x.__filtered__=x.__filtered__||p,x}}),kn(["head","last"],function(n,i){var l="take"+(i?"Right":"");We.prototype[n]=function(){return this[l](1).value()[0]}}),kn(["initial","tail"],function(n,i){var l="drop"+(i?"":"Right");We.prototype[n]=function(){return this.__filtered__?new We(this):this[l](1)}}),We.prototype.compact=function(){return this.filter(en)},We.prototype.find=function(n){return this.filter(n).head()},We.prototype.findLast=function(n){return this.reverse().find(n)},We.prototype.invokeMap=Ue(function(n,i){return typeof n=="function"?new We(this):this.map(function(l){return Io(l,n,i)})}),We.prototype.reject=function(n){return this.filter(gs(Oe(n)))},We.prototype.slice=function(n,i){n=Be(n);var l=this;return l.__filtered__&&(n>0||i<0)?new We(l):(n<0?l=l.takeRight(-n):n&&(l=l.drop(n)),i!==r&&(i=Be(i),l=i<0?l.dropRight(-i):l.take(i-n)),l)},We.prototype.takeRightWhile=function(n){return this.reverse().takeWhile(n).reverse()},We.prototype.toArray=function(){return this.take(F)},Hn(We.prototype,function(n,i){var l=/^(?:filter|find|map|reject)|While$/.test(i),p=/^(?:head|last)$/.test(i),y=A[p?"take"+(i=="last"?"Right":""):i],x=p||/^find/.test(i);y&&(A.prototype[i]=function(){var L=this.__wrapped__,P=p?[1]:arguments,N=L instanceof We,te=P[0],ee=N||ze(L),se=function(et){var Ve=y.apply(A,_r([et],P));return p&&me?Ve[0]:Ve};ee&&l&&typeof te=="function"&&te.length!=1&&(N=ee=!1);var me=this.__chain__,_e=!!this.__actions__.length,Ie=x&&!me,Re=N&&!_e;if(!x&&ee){L=Re?L:new We(this);var Ce=n.apply(L,P);return Ce.__actions__.push({func:ds,args:[se],thisArg:r}),new Sn(Ce,me)}return Ie&&Re?n.apply(this,P):(Ce=this.thru(se),Ie?p?Ce.value()[0]:Ce.value():Ce)})}),kn(["pop","push","shift","sort","splice","unshift"],function(n){var i=Da[n],l=/^(?:push|sort|unshift)$/.test(n)?"tap":"thru",p=/^(?:pop|shift)$/.test(n);A.prototype[n]=function(){var y=arguments;if(p&&!this.__chain__){var x=this.value();return i.apply(ze(x)?x:[],y)}return this[l](function(L){return i.apply(ze(L)?L:[],y)})}}),Hn(We.prototype,function(n,i){var l=A[i];if(l){var p=l.name+"";Ye.call(Ci,p)||(Ci[p]=[]),Ci[p].push({name:i,func:l})}}),Ci[is(r,S).name]=[{name:"wrapper",func:r}],We.prototype.clone=u8,We.prototype.reverse=d8,We.prototype.value=h8,A.prototype.at=F_,A.prototype.chain=G_,A.prototype.commit=U_,A.prototype.next=W_,A.prototype.plant=Z_,A.prototype.reverse=j_,A.prototype.toJSON=A.prototype.valueOf=A.prototype.value=q_,A.prototype.first=A.prototype.head,yo&&(A.prototype[yo]=V_),A})();typeof define=="function"&&typeof define.amd=="object"&&define.amd?(Ct._=kr,define(function(){return kr})):Wr?((Wr.exports=kr)._=kr,Zl._=kr):Ct._=kr}).call(e)})),Je=zo(Mp(),1),xp={ID:"de_DE",NAME:"Deutsch",STARTING:"Starte Manga OnlineViewer",RESUME:"Fortsetzen ab Seite ",WAITING:"Bitte warten, 3 Sekunden...",CHOOSE_BEGINNING:"Wähle die Startseite:",BUTTON_START:"Manga OnlineViewer starten",SETTINGS:"Einstellungen",LANGUAGE:"Sprache",COLOR_SCHEME:"Farbschema",THEME:"Design",THEME_COLOR:"Farbe",THEME_HUE:"Farbton",THEME_SHADE:"Schattierung",DEFAULT_LOAD_MODE:"Standard-Lademodus",LOAD_MODE_NORMAL:"Normal (3 Sek. warten)",LOAD_MODE_ALWAYS:"Immer (sofort)",LOAD_MODE_NEVER:"Nie (manuell)",LOAD_SPEED:"Ladegeschwindigkeit Seiten/Sekunde",DEFAULT_ZOOM:"Standard-Zoom (zwischen 5 und 200)",DEFAULT_ZOOM_MODE:"Standard-Zoommodus",MINIMUM_ZOOM:"Minimaler Zoom relativ zur Bildschirmbreite (zwischen 30 und 100)",ZOOM_STEP:"Zoom-Schrittgröße (zwischen 5 und 50)",DEFAULT_VIEW_MODE:"Standard-Ansichtsmodus",VIEW_MODE_VERTICAL:"Vertikal",VIEW_MODE_LEFT:"Links nach Rechts",VIEW_MODE_RIGHT:"Rechts nach Links",VIEW_MODE_WEBCOMIC:"WebComic",FIT_WIDTH_OVERSIZED:"Breite anpassen bei Übergröße",SHOW_THUMBNAILS:"Miniaturansichten anzeigen",HIDE_CONTROLS:"Seitensteuerung immer ausblenden",HEADER_TYPE:"Kopfbereichstyp ändern",HEADER_HOVER:"Hover",HEADER_SCROLL:"Scrollen",HEADER_CLICK:"Klicken",HEADER_FIXED:"Fixiert",HEADER_SIMPLE:"Einfach",BUTTON_DOWNLOAD:"Herunterladen",DOWNLOAD_ZIP:"Zip-Datei herunterladen",DOWNLOAD_IMAGES:"Bilder automatisch als Zip herunterladen",DOWNLOAD_PROGRESS:"Herunterladen: ##num## von ##total##",GENERATING_ZIP:"Zip-Datei wird erstellt...",DOWNLOAD_INCOMPLETE:"Download unvollständig",DOWNLOAD_INCOMPLETE_MESSAGE:"Einige Seiten konnten nicht heruntergeladen werden und wurden übersprungen. Eine Liste der fehlgeschlagenen Seiten wurde der ZIP-Datei hinzugefügt.",BUTTON_NEXT:"Weiter",NEXT_CHAPTER:"Nächstes Kapitel",BUTTON_PREVIOUS:"Zurück",PREVIOUS_CHAPTER:"Vorheriges Kapitel",BOOKMARKS:"Lesezeichen",BOOKMARK:"Lesezeichen",BOOKMARK_REMOVED:"Lesezeichen entfernt",BOOKMARK_SAVED:"Lesezeichen gespeichert",BOOKMARK_MESSAGE:"Beim nächsten Öffnen dieses Kapitels wird ab fortgesetzt: Seite ##num## (Nur EINMAL pro Lesezeichen)",KEYBINDINGS:"Tastenkürzel",EDIT_KEYBINDS:"Tastenkürzel bearbeiten",SAVE_KEYBINDS:"Tastenkürzel speichern",BUTTON_EDIT:"Bearbeiten",BUTTON_SAVE:"Speichern",KEYBIND_RULES:`
    <h3>Unterstützte Tasten</h3>
    Erlaubte Modifikatoren: shift, option, alt, ctrl, control, command. <br/>
    Spezielle Tasten: backspace, tab, clear, enter, return, esc, escape, space, up, down, left, right, home, end, pageup, pagedown, del, delete, f1 - f19, num_0 - num_9, num_multiply, num_add, num_enter, num_subtract, num_decimal, num_divide. <br/>
    Beispiele: <kbd>a</kbd>, <kbd>ctrl+a</kbd>, <kbd>shift+a</kbd>, <kbd>num_2</kbd>, <kbd>2</kbd>
  `,ATTENTION:"Achtung",WARNING:"Warnung",BUTTON_RESET_SETTINGS:"Einstellungen zurücksetzen(Reset Settings)",SETTINGS_RESET:"Die Einstellungen wurden zurückgesetzt, bitte Seite neu laden",LANGUAGE_CHANGED:"Die Sprache wurde geändert, bitte Seite neu laden",AUTO_DOWNLOAD:"Beim nächsten Laden eines Kapitels wirst du automatisch gefragt, ob du speichern möchtest",LAZY_LOAD:"Lazy Load ist mit Zip-Download nicht kompatibel, mit dieser Einstellung kannst du nicht herunterladen.<br/> Empfehlung: <span style='color:red;font-weight:bold'>Miniaturansichten deaktivieren</span> um Bandbreite/Speicher zu sparen.",LAZY_LOAD_IMAGES_ENABLE:"Lazy Load Bilder aktivieren",LAZY_LOAD_IMAGES:"Lazy Start ab Seite (zwischen 5 und 100)",RETURN_CHAPTER_LIST:"Zur Kapitelübersicht zurückkehren",PAGES_LOADED:"Seiten geladen",GO_TO_PAGE:"Gehe zu Seite",ENLARGE:"Vergrößern",RESTORE:"Wiederherstellen",REDUCE:"Wiederherstellen",FIT_WIDTH:"Breite anpassen",FIT_HEIGHT:"Höhe anpassen",PERCENT:"Prozent",TOGGLE_CONTROLS:"Seitensteuerung umschalten",ZOOM_IN:"Hineinzoomen",ZOOM_OUT:"Herauszoomen",ZOOM_RESET:"Zoom zurücksetzen",ZOOM_WIDTH:"Auf Breite zoomen",ZOOM_HEIGHT:"Auf Höhe zoomen",HIDE:"Ausblenden",RELOAD:"Neu laden",SLOWLY:"Langsam",NORMAL:"Normal",FAST:"Schnell",EXTREME:"Extrem",ALL_PAGES:"Alle Seiten",SPEED_WARNING:"Ladegeschwindigkeit zu hoch",SPEED_WARNING_MESSAGE:"Diese Geschwindigkeit wird nicht empfohlen.<br/> Sie kann einige Server überlasten oder deine IP als DDoS-Angreifer markieren.<br/> Bitte mit Vorsicht verwenden!",SCROLL_UP:"Nach oben scrollen",SCROLL_DOWN:"Nach unten scrollen",CLOSE:"Schließen",LIST_EMPTY:"Liste leer",SCROLL_START:"Auto-Scroll umschalten",INCREASE_SPEED:"Scrollgeschwindigkeit erhöhen",DECREASE_SPEED:"Scrollgeschwindigkeit verringern",AUTO_SCROLL_HEIGHT:"Auto-Scroll-Geschwindigkeit in Pixel",VERTICAL_SEPARATOR:"Vertikale Trenner anzeigen",END:"Ende",SCOPE:"Bereich",GLOBAL:"Global",GENERAL:"Allgemein",LOADING:"Lädt",ZOOM:"Zoom",OTHERS:"Sonstiges",NAVBAR_TYPE:"Navigationsleistentyp ändern",NAVBAR_BOTTOM:"Unten",NAVBAR_LEFT:"Links",NAVBAR_RIGHT:"Rechts",NAVBAR_DISABLED:"Deaktiviert",PAGINATION_TYPE:"Paginierungstyp",PAGINATION_DISABLED:"Deaktiviert",PAGINATION_SLIDER:"Schieberegler",PAGINATION_ARROWS:"Seitenpfeile",PAGINATION_BOTH:"Beides",FILE_MENU:"Hauptmenü",VIEW_MENU:"Menü „Ansicht“",ZOOM_MENU:"Zoom-Menü"},Ip={ID:"en_US",NAME:"English (US)",STARTING:"Starting Manga OnlineViewer",RESUME:"Resuming reading from Page ",WAITING:"Please wait, 3 seconds...",CHOOSE_BEGINNING:"Choose the Page to start from:",BUTTON_START:"Start Manga OnlineViewer",SETTINGS:"Settings",LANGUAGE:"Language",COLOR_SCHEME:"Color Scheme",THEME:"Theme",THEME_COLOR:"Color",THEME_HUE:"Color Hue",THEME_SHADE:"Color Shade",DEFAULT_LOAD_MODE:"Default Load Mode",LOAD_MODE_NORMAL:"Normal(Wait 3 sec)",LOAD_MODE_ALWAYS:"Always(Immediately)",LOAD_MODE_NEVER:"Never(Manually)",LOAD_SPEED:"Load Speed Pages/Second",DEFAULT_ZOOM:"Default Zoom (between 5 and 200)",DEFAULT_ZOOM_MODE:"Default Zoom Mode",MINIMUM_ZOOM:"Minimum Zoom relative to the width of screen (between 30 and 100)",ZOOM_STEP:"Zoom Change Step (between 5 and 50)",DEFAULT_VIEW_MODE:"Default View Mode",VIEW_MODE_VERTICAL:"Vertical",VIEW_MODE_LEFT:"Left to Right",VIEW_MODE_RIGHT:"Right to Left",VIEW_MODE_WEBCOMIC:"WebComic",FIT_WIDTH_OVERSIZED:"Fit Width if Oversized",SHOW_THUMBNAILS:"Show Thumbnails",HIDE_CONTROLS:"Always Hide Page Controls",HEADER_TYPE:"Change Header Type",HEADER_HOVER:"Hover",HEADER_SCROLL:"Scroll",HEADER_CLICK:"Click",HEADER_FIXED:"Fixed",HEADER_SIMPLE:"Simple",BUTTON_DOWNLOAD:"Download",DOWNLOAD_ZIP:"Download Zip file",DOWNLOAD_IMAGES:"Download Images as Zip Automatically",DOWNLOAD_PROGRESS:"Downloading: ##num## of ##total##",GENERATING_ZIP:"Generating Zip file...",DOWNLOAD_INCOMPLETE:"Download Incomplete",DOWNLOAD_INCOMPLETE_MESSAGE:"Some pages failed to download and were skipped. A list of failed pages has been added to the ZIP file.",BUTTON_NEXT:"Next",NEXT_CHAPTER:"Next Chapter",BUTTON_PREVIOUS:"Previous",PREVIOUS_CHAPTER:"Previous Chapter",BOOKMARKS:"Bookmarks",BOOKMARK:"Bookmark",BOOKMARK_REMOVED:"Bookmark Removed",BOOKMARK_SAVED:"Bookmark Saved",BOOKMARK_MESSAGE:"Next time you open this chapter it will resume from: Page ##num## (Only ONCE per Bookmark)",KEYBINDINGS:"Keybindings",EDIT_KEYBINDS:"Edit KeyBindings",SAVE_KEYBINDS:"Save KeyBindings",BUTTON_EDIT:"Edit",BUTTON_SAVE:"Save",KEYBIND_RULES:`
    <h3>Supported Keys</h3>
    Allowed modifiers: shift, option, alt, ctrl, control, command. <br/>
    Special keys: backspace, tab, clear, enter, return, esc, escape, space, up, down, left, right, home, end, pageup, pagedown, del, delete, f1 - f19, num_0 - num_9, num_multiply, num_add, num_enter, num_subtract, num_decimal, num_divide. <br/>
    Examples: <kbd>a</kbd>, <kbd>ctrl+a</kbd> , <kbd>shift+a</kbd> , <kbd>num_2</kbd> , <kbd>2</kbd>
  `,ATTENTION:"Attention",WARNING:"Warning",BUTTON_RESET_SETTINGS:"Reset Settings",SETTINGS_RESET:"Settings have been reset, reload the page to take effect",LANGUAGE_CHANGED:"Language has been changed, reload the page to take effect",AUTO_DOWNLOAD:"Next time a chapter finish loading you will be prompted to save automatically",LAZY_LOAD:"Lazy load is incompatible with zip download, you will not be able to download with this setting ON.<br/> Suggestion: <span style='color:red;font-weight:bold'>Disable Thumbnails</span> to save Bandwidth/Memory.",LAZY_LOAD_IMAGES_ENABLE:"Enable Lazy Load Images",LAZY_LOAD_IMAGES:"Lazy Start From Page (between 5 and 100)",RETURN_CHAPTER_LIST:"Return to Chapter List",PAGES_LOADED:"Pages Loaded",GO_TO_PAGE:"Go to Page",ENLARGE:"Enlarge",RESTORE:"Restore",REDUCE:"Reduce",FIT_WIDTH:"Fit Width",FIT_HEIGHT:"Fit Height",PERCENT:"Percent",TOGGLE_CONTROLS:"Toggle page controls",ZOOM_IN:"Zoom In",ZOOM_OUT:"Zoom Out",ZOOM_RESET:"Zoom Reset",ZOOM_WIDTH:"Zoom to Width",ZOOM_HEIGHT:"Zoom to Height",HIDE:"Hide",RELOAD:"Reload",SLOWLY:"Slowly",NORMAL:"Normal",FAST:"Fast",EXTREME:"Extreme",ALL_PAGES:"All Pages",SPEED_WARNING:"Loading Speed too High",SPEED_WARNING_MESSAGE:"This speed is not recommended.<br/> It may hurt some servers or get your IP marked as DDoS attacker.<br/> Please use with caution!",SCROLL_UP:"Scroll Up",SCROLL_DOWN:"Scroll Down",CLOSE:"Close",LIST_EMPTY:"List Empty",SCROLL_START:"Toggle Auto Scroll",INCREASE_SPEED:"Increase Scroll Speed",DECREASE_SPEED:"Decrease Scroll Speed",AUTO_SCROLL_HEIGHT:"Auto Scroll Speed in Pixels",VERTICAL_SEPARATOR:"Show Vertical Separators",END:"End",SCOPE:"Scope",GLOBAL:"Global",GENERAL:"General",LOADING:"Loading",ZOOM:"Zoom",OTHERS:"Others",NAVBAR_TYPE:"Change Navbar Type",NAVBAR_BOTTOM:"Bottom",NAVBAR_LEFT:"Left",NAVBAR_RIGHT:"Right",NAVBAR_DISABLED:"Disabled",PAGINATION_TYPE:"Pagination Type",PAGINATION_DISABLED:"Disabled",PAGINATION_SLIDER:"Slider",PAGINATION_ARROWS:"Side Arrows",PAGINATION_BOTH:"Both",FILE_MENU:"Main Menu",VIEW_MENU:"View Menu",ZOOM_MENU:"Zoom Menu"},Op={ID:"es_ES",NAME:"Español (ES)",STARTING:"Iniciando Manga OnlineViewer",RESUME:"Continuando lectura desde la Página ",WAITING:"Por favor espere, 3 segundos...",CHOOSE_BEGINNING:"Elija la página en la que comenzar:",BUTTON_START:"Iniciar Manga OnlineViewer",SETTINGS:"Ajustes",LANGUAGE:"Idioma",COLOR_SCHEME:"Esquema de color",THEME:"Tema",THEME_COLOR:"Color",THEME_HUE:"Matiz del color",THEME_SHADE:"Saturación del color",DEFAULT_LOAD_MODE:"Modo de carga por defecto",LOAD_MODE_NORMAL:"Normal (Espera 3s)",LOAD_MODE_ALWAYS:"Siempre (Inmediatamente)",LOAD_MODE_NEVER:"Nunca (Manualmente)",LOAD_SPEED:"Velocidad carga página/segundo",DEFAULT_ZOOM:"Zoom por defecto (entre 5 y 200)",DEFAULT_ZOOM_MODE:"Modo de zoom por defecto",MINIMUM_ZOOM:"Zoom mínimo relativo al ancho de la pantalla",ZOOM_STEP:"Paso entre cambios de zoom (entre 5 y 50)",DEFAULT_VIEW_MODE:"Modo de visualización por defecto",VIEW_MODE_VERTICAL:"Vertical",VIEW_MODE_LEFT:"Izquierda a derecha",VIEW_MODE_RIGHT:"Derecha a izquierda",VIEW_MODE_WEBCOMIC:"WebComic",FIT_WIDTH_OVERSIZED:"Ajustar ancho si es demasiado grande",SHOW_THUMBNAILS:"Mostrar miniaturas",HIDE_CONTROLS:"Ocultar siempre la barra de controles",HEADER_TYPE:"Cambiar tipo de cabecera",HEADER_HOVER:"Pasar por encima",HEADER_SCROLL:"Desplazamiento",HEADER_CLICK:"Hacer click",HEADER_FIXED:"Fijo",HEADER_SIMPLE:"Sencillo",BUTTON_DOWNLOAD:"Descargar",DOWNLOAD_ZIP:"Descargar fichero Zip",DOWNLOAD_IMAGES:"Autodescargar imágenes como Zip",DOWNLOAD_PROGRESS:"Descargando: ##num## de ##total##",GENERATING_ZIP:"Generando archivo Zip...",DOWNLOAD_INCOMPLETE:"Descarga Incompleta",DOWNLOAD_INCOMPLETE_MESSAGE:"Algunas páginas no se pudieron descargar y se saltaron. Se ha añadido una lista de páginas fallidas al archivo ZIP.",BUTTON_NEXT:"Siguiente",NEXT_CHAPTER:"Siguiente capítulo",BUTTON_PREVIOUS:"Anterior",PREVIOUS_CHAPTER:"Capítulo anterior",BOOKMARKS:"Marcadores",BOOKMARK:"Marcador",BOOKMARK_REMOVED:"Marcador eliminado",BOOKMARK_SAVED:"Marcador guardado",BOOKMARK_MESSAGE:"La próxima vez que abra este capítulo, continuará desde la página ##num## (Sólo UNA VEZ por Marcador)",KEYBINDINGS:"Atajos de teclado",EDIT_KEYBINDS:"Editar atajos",SAVE_KEYBINDS:"Guardar atajos",BUTTON_EDIT:"Editar",BUTTON_SAVE:"Guardar",KEYBIND_RULES:`
    <h3>Teclas soportadas</h3>
    Modificadores permitidos: shift, option, alt, ctrl, control, command. <br/>
    Teclas especiales: backspace, tab, clear, enter, return, esc, escape, space, up, down, left, right, home, end, pageup, pagedown, del, delete, f1 - f19, num_0 - num_9, num_multiply, num_add, num_enter, num_subtract, num_decimal, num_divide. <br/>
    Ejemplos: <kbd>a</kbd>, <kbd>ctrl+a</kbd> , <kbd>shift+a</kbd> , <kbd>num_2</kbd> , <kbd>2</kbd>
  `,ATTENTION:"Atención",WARNING:"Alerta",BUTTON_RESET_SETTINGS:"Reiniciar ajustes(Reset Settings)",SETTINGS_RESET:"Se han restablecido los ajustes, vuelve a cargar la página para que surta efecto",LANGUAGE_CHANGED:"Se ha cambiado el idioma, vuelve a cargar la página para que surta efecto",AUTO_DOWNLOAD:"La próxima vez que termine de cargarse un capítulo, se le pedirá que guarde automáticamente",LAZY_LOAD:"La carga diferida es incompatible con la descarga zip, no podrá descargar con este ajuste activado.<br/> Sugerencia: <span style='color:red;font-weight:bold'>Desactivar miniaturas</span> para ahorrar Ancho de banda/Memoria.",LAZY_LOAD_IMAGES_ENABLE:"Habilitar carga de imágenes diferida",LAZY_LOAD_IMAGES:"Empezar carga diferida a partir de la página (entre 5 y 100)",RETURN_CHAPTER_LIST:"Regresar a la lista de capítulos",PAGES_LOADED:"Páginas cargadas",GO_TO_PAGE:"Ir a página",ENLARGE:"Agrandar",RESTORE:"Restaurar",REDUCE:"Reducir",FIT_WIDTH:"Ajustar al ancho",FIT_HEIGHT:"Ajustar al alto",PERCENT:"Porcentual",TOGGLE_CONTROLS:"Alternar controles de página",ZOOM_IN:"Acercar",ZOOM_OUT:"Alejar",ZOOM_RESET:"Restablecer zoom",ZOOM_WIDTH:"Zoom al ancho",ZOOM_HEIGHT:"Zoom al alto",HIDE:"Ocultar",RELOAD:"Recargar",SLOWLY:"Lento",NORMAL:"Normal",FAST:"Rápido",EXTREME:"Extremo",ALL_PAGES:"Todas las páginas",SPEED_WARNING:"Velocidad de carga muy alta",SPEED_WARNING_MESSAGE:"No se recomienda esta velocidad.<br/> Puede dañar algunos servidores o marcar su IP como atacante DDoS.<br/> ¡Utilícelo con precaución!",SCROLL_UP:"Desplazar arriba",SCROLL_DOWN:"Desplazar abajo",CLOSE:"Cerrar",LIST_EMPTY:"Lista vacía",SCROLL_START:"Alternar desplazamiento automático",INCREASE_SPEED:"Aumentar la velocidad de desplazamiento",DECREASE_SPEED:"Disminuir la velocidad de desplazamiento",AUTO_SCROLL_HEIGHT:"Velocidad de desplazamiento automático en píxeles",VERTICAL_SEPARATOR:"Mostrar separadores verticales",END:"Fin",SCOPE:"Alcance",GLOBAL:"Global",GENERAL:"General",LOADING:"Carga",ZOOM:"Zoom",OTHERS:"Otros",NAVBAR_TYPE:"Cambiar el tipo de barra de navegación",NAVBAR_BOTTOM:"Abajo",NAVBAR_LEFT:"Izquierda",NAVBAR_RIGHT:"Derecha",NAVBAR_DISABLED:"Desactivado",PAGINATION_TYPE:"Tipo de paginación",PAGINATION_DISABLED:"Desactivado",PAGINATION_SLIDER:"Control deslizante",PAGINATION_ARROWS:"Flechas laterales",PAGINATION_BOTH:"Ambos",FILE_MENU:"Menú principal",VIEW_MENU:"Ver menú",ZOOM_MENU:"Menú Zoom"},Cp={ID:"fr_FR",NAME:"Français (FR)",STARTING:"Démarrage Manga OnlineViewer",RESUME:"Reprise de la lecture à partir de la Page ",WAITING:"Veuillez patienter, 3 secondes...",CHOOSE_BEGINNING:"Choisissez la page par laquelle commencer :",BUTTON_START:"Démarrer Manga OnlineViewer",SETTINGS:"Paramètres",LANGUAGE:"Langue",COLOR_SCHEME:"Palette de couleurs",THEME:"Thème",THEME_COLOR:"Couleur",THEME_HUE:"Teinte de couleur",THEME_SHADE:"Nuance de couleur",DEFAULT_LOAD_MODE:"Mode de chargement par défaut",LOAD_MODE_NORMAL:"Normal (attendre 3 s)",LOAD_MODE_ALWAYS:"Toujours (immédiatement)",LOAD_MODE_NEVER:"Jamais (manuellement)",LOAD_SPEED:"Vitesse de chargement des pages/seconde",DEFAULT_ZOOM:"Zoom par défaut (entre 5 et 200)",DEFAULT_ZOOM_MODE:"Mode de zoom par défaut",MINIMUM_ZOOM:"Zoom minimum par rapport à la largeur de l'écran (entre 30 et 100)",ZOOM_STEP:"Pas de changement de zoom (entre 5 et 50)",DEFAULT_VIEW_MODE:"Mode d'affichage par défaut",VIEW_MODE_VERTICAL:"Vertical",VIEW_MODE_LEFT:"De gauche à droite",VIEW_MODE_RIGHT:"De droite à gauche",VIEW_MODE_WEBCOMIC:"WebComic",FIT_WIDTH_OVERSIZED:"Ajuster à la largeur si surdimensionné",SHOW_THUMBNAILS:"Afficher les vignettes",HIDE_CONTROLS:"Toujours masquer les contrôles de page",HEADER_TYPE:"Changer le type d'en-tête",HEADER_HOVER:"Survol",HEADER_SCROLL:"Défilement",HEADER_CLICK:"Clic",HEADER_FIXED:"Fixe",HEADER_SIMPLE:"Simple",BUTTON_DOWNLOAD:"Télécharger",DOWNLOAD_ZIP:"Télécharger le fichier Zip",DOWNLOAD_IMAGES:"Télécharger les images en Zip automatiquement",DOWNLOAD_PROGRESS:"Téléchargement : ##num## sur ##total##",GENERATING_ZIP:"Génération du fichier Zip...",DOWNLOAD_INCOMPLETE:"Téléchargement incomplet",DOWNLOAD_INCOMPLETE_MESSAGE:"Certaines pages n'ont pas pu être téléchargées et ont été ignorées. Une liste des pages concernées a été ajoutée au fichier ZIP.",BUTTON_NEXT:"Suivant",NEXT_CHAPTER:"Chapitre suivant",BUTTON_PREVIOUS:"Précédent",PREVIOUS_CHAPTER:"Chapitre précédent",BOOKMARKS:"Favoris",BOOKMARK:"Favori",BOOKMARK_REMOVED:"Favori supprimé",BOOKMARK_SAVED:"Favori enregistré",BOOKMARK_MESSAGE:"La prochaine fois que vous ouvrirez ce chapitre, il reprendra à partir de: Page ##num## (Seulement UNE FOIS par favori)",KEYBINDINGS:"Raccourcis clavier",EDIT_KEYBINDS:"Modifier les raccourcis clavier",SAVE_KEYBINDS:"Enregistrer les raccourcis clavier",BUTTON_EDIT:"Modifier",BUTTON_SAVE:"Enregistrer",KEYBIND_RULES:`
    <h3>Touches prises en charge</h3>
    Modificateurs autorisés : shift, option, alt, ctrl, control, command. <br/>
    Touches spéciales : backspace, tab, clear, enter, return, esc, escape, space, up, down, left, right, home, end, pageup, pagedown, del, delete, f1 - f19, num_0 - num_9, num_multiply, num_add, num_enter, num_subtract, num_decimal, num_divide. <br/>
    Exemples : <kbd>a</kbd>, <kbd>ctrl+a</kbd> , <kbd>shift+a</kbd> , <kbd>num_2</kbd> , <kbd>2</kbd>
  `,ATTENTION:"Attention",WARNING:"Avertissement",BUTTON_RESET_SETTINGS:"Réinitialiser les paramètres",SETTINGS_RESET:"Les paramètres ont été réinitialisés, rechargez la page pour prendre effet",LANGUAGE_CHANGED:"La langue a été modifiée, rechargez la page pour prendre effet",AUTO_DOWNLOAD:"La prochaine fois qu'un chapitre finira de se charger, il vous sera proposé de l'enregistrer automatiquement",LAZY_LOAD:"Le chargement paresseux est incompatible avec le téléchargement zip, vous ne pourrez pas télécharger avec ce paramètre activé.<br/> Suggestion : <span style='color:red;font-weight:bold'>Désactivez les vignettes</span> pour économiser de la bande passante/mémoire.",LAZY_LOAD_IMAGES_ENABLE:"Activer le chargement paresseux des images",LAZY_LOAD_IMAGES:"Début du chargement paresseux à partir de la page (entre 5 et 100)",RETURN_CHAPTER_LIST:"Retour à la liste des chapitres",PAGES_LOADED:"Pages chargées",GO_TO_PAGE:"Aller à la page",ENLARGE:"Agrandir",RESTORE:"Restaurer",REDUCE:"Réduire",FIT_WIDTH:"Ajuster à la largeur",FIT_HEIGHT:"Ajuster à la hauteur",PERCENT:"Pourcentage",TOGGLE_CONTROLS:"Basculer les contrôles de page",ZOOM_IN:"Zoom avant",ZOOM_OUT:"Zoom arrière",ZOOM_RESET:"Réinitialiser le zoom",ZOOM_WIDTH:"Zoomer à la largeur",ZOOM_HEIGHT:"Zoomer à la hauteur",HIDE:"Masquer",RELOAD:"Recharger",SLOWLY:"Lentement",NORMAL:"Normal",FAST:"Rapide",EXTREME:"Extrême",ALL_PAGES:"Toutes les pages",SPEED_WARNING:"Vitesse de chargement trop élevée",SPEED_WARNING_MESSAGE:"Cette vitesse n'est pas recommandée.<br/> Elle peut nuire à certains serveurs ou marquer votre IP comme un attaquant DDoS.<br/> Veuillez l'utiliser avec prudence !",SCROLL_UP:"Faire défiler vers le haut",SCROLL_DOWN:"Faire défiler vers le bas",CLOSE:"Fermer",LIST_EMPTY:"Liste vide",SCROLL_START:"Basculer le défilement automatique",INCREASE_SPEED:"Augmenter la vitesse de défilement",DECREASE_SPEED:"Diminuer la vitesse de défilement",AUTO_SCROLL_HEIGHT:"Vitesse de défilement automatique en pixels",VERTICAL_SEPARATOR:"Afficher les séparateurs verticaux",END:"Fin",SCOPE:"Portée",GLOBAL:"Global",GENERAL:"Général",LOADING:"Chargement",ZOOM:"Zoom",OTHERS:"Autres",NAVBAR_TYPE:"Changer le type de barre de navigation",NAVBAR_BOTTOM:"Bas",NAVBAR_LEFT:"Gauche",NAVBAR_RIGHT:"Droite",NAVBAR_DISABLED:"Désactivé",PAGINATION_TYPE:"Type de pagination",PAGINATION_DISABLED:"Désactivé",PAGINATION_SLIDER:"Curseur",PAGINATION_ARROWS:"Flèches latérales",PAGINATION_BOTH:"Les deux",FILE_MENU:"Menu principal",VIEW_MENU:"Menu Affichage",ZOOM_MENU:"Menu Zoom"},Tp={ID:"pt_BR",NAME:"Portugues (Brasil)",STARTING:"Iniciando Manga OnlineViewer",RESUME:"Continuando leitura na Pagina ",WAITING:"Por Favor espere, 3 segundos...",CHOOSE_BEGINNING:"Escolha a pagina de onde começar:",BUTTON_START:"Iniciar Manga OnlineViewer",SETTINGS:"Configurações",LANGUAGE:"Idioma",COLOR_SCHEME:"Esquema de Color",THEME:"Tema",THEME_COLOR:"Cor",THEME_HUE:"Tom da Cor",THEME_SHADE:"Saturação da Cor",DEFAULT_LOAD_MODE:"Forma de Carregamento Padrão",LOAD_MODE_NORMAL:"Normal(Esperando 3 sec)",LOAD_MODE_ALWAYS:"Sempre(Imediatamente)",LOAD_MODE_NEVER:"Nunca(Manualmente)",LOAD_SPEED:"Velocidade de Carregamento Paginas/Segundo",DEFAULT_ZOOM:"Zoom padrão (entre 5 e 200)",DEFAULT_ZOOM_MODE:"Modo de Zoom padrão",MINIMUM_ZOOM:"Zoom minimo, relativo ao tamanho da tela (entre 30 e 100)",ZOOM_STEP:"Precisão da Mudança do Zoom (entre 5 e 50)",DEFAULT_VIEW_MODE:"Modo de Visualização Padrão",VIEW_MODE_VERTICAL:"Vertical",VIEW_MODE_LEFT:"Esquerda para Direita",VIEW_MODE_RIGHT:"Direita para Esquerda",VIEW_MODE_WEBCOMIC:"WebComic",FIT_WIDTH_OVERSIZED:"Encher a tela se grande demais",SHOW_THUMBNAILS:"Mostra Miniaturas",HIDE_CONTROLS:"Sempre esconder controles das paginas",HEADER_TYPE:"Mudar Tipo de Cabeçalho",HEADER_HOVER:"Passar por perto",HEADER_SCROLL:"Rolagem do Mouse",HEADER_CLICK:"Click",HEADER_FIXED:"Fixo",HEADER_SIMPLE:"Simples",BUTTON_DOWNLOAD:"Download",DOWNLOAD_ZIP:"Baixar arquivo Zip",DOWNLOAD_IMAGES:"Download das Imagens como Zip Automaticamente",DOWNLOAD_PROGRESS:"Baixando: ##num## de ##total##",GENERATING_ZIP:"Gerando arquivo Zip...",DOWNLOAD_INCOMPLETE:"Download Incompleto",DOWNLOAD_INCOMPLETE_MESSAGE:"Algumas páginas falharam ao baixar e foram puladas. Uma lista de páginas que falharam foi adicionada ao arquivo ZIP.",BUTTON_NEXT:"Proximo",NEXT_CHAPTER:"Proximo Capitulo",BUTTON_PREVIOUS:"Anterior",PREVIOUS_CHAPTER:"Capitulo Anterior",BOOKMARKS:"Marca paginas",BOOKMARK:"Marcar pagina",BOOKMARK_REMOVED:"Marca pagina Removido",BOOKMARK_SAVED:"Marca pagina Salvo",BOOKMARK_MESSAGE:"Proxima vez que abrir este capitulo continuará a partir da Pagina ##num## (Apenas UMA VEZ por marca pagina)",KEYBINDINGS:"Atalhos",EDIT_KEYBINDS:"Editar Atalhos",SAVE_KEYBINDS:"Salvar Atalhos",BUTTON_EDIT:"Editar",BUTTON_SAVE:"Salvar",KEYBIND_RULES:`
    <h3>Teclas Suportadas</h3>
    Modificadores permitidos: shift, option, alt, ctrl, control, command. <br/>
    Teclas Especiais: backspace, tab, clear, enter, return, esc, escape, space, up, down, left, right, home, end, pageup, pagedown, del, delete, f1 - f19, num_0 - num_9, num_multiply, num_add, num_enter, num_subtract, num_decimal, num_divide.<br/>
    Exemplos: <kbd>a</kbd>, <kbd>ctrl+a</kbd> , <kbd>shift+a</kbd> , <kbd>num_2</kbd> , <kbd>2</kbd>
  `,ATTENTION:"Atenção",WARNING:"Alerta",BUTTON_RESET_SETTINGS:"Limpar Configurações(Reset Settings)",SETTINGS_RESET:"Configurações foram limpas, recarregue o site para efetivar a alteração",LANGUAGE_CHANGED:"Idioma foi alterado, recarregue o site para efetivar a alteração",AUTO_DOWNLOAD:"Proxima vez que abrir um capitulo download iniciara automaticamente",LAZY_LOAD:"Carregamento preguiçoso não é compativel com download de zip, não conseguira com essa configuração ativa.<br/> Sugestão: <span style='color:red;font-weight:bold'>Desative Miniaturas</span> para economizar memoria e cota de internet.",LAZY_LOAD_IMAGES_ENABLE:"Ativar Carregamento de imagens preguiçoso",LAZY_LOAD_IMAGES:"Carregamento de paginas preguiçoso começa a partir de (entre 5 e 100)",RETURN_CHAPTER_LIST:"Voltar a lista de Capitulos",PAGES_LOADED:"Paginas Carregadas",GO_TO_PAGE:"Pular para",ENLARGE:"Aumentar",RESTORE:"Restaurar",REDUCE:"Diminuir",FIT_WIDTH:"Preencher Largura",FIT_HEIGHT:"Preencher Altura ",PERCENT:"Percentual",TOGGLE_CONTROLS:"Mostar controles de pagina",ZOOM_IN:"Mais Zoom",ZOOM_OUT:"Menos Zoom",ZOOM_RESET:"Resetar Zoom",ZOOM_WIDTH:"Zoom para Largura",ZOOM_HEIGHT:"Zoom para Altura",HIDE:"Esconder",RELOAD:"Recarregar",SLOWLY:"Devagar",NORMAL:"Normal",FAST:"Rapido",EXTREME:"Extremo",ALL_PAGES:"Todas as Paginas",SPEED_WARNING:"Velocidade de Carregamento muito alta",SPEED_WARNING_MESSAGE:"Essa velocidade não é recomendada.<br/> Ela pode derrubar um servidor or marcar voce como um ataque hacker de DDoS.<br/> Use com cuidado!",SCROLL_UP:"Subir Pagina",SCROLL_DOWN:"Descer Pagina",CLOSE:"Fechar",LIST_EMPTY:"Lista Vazia",SCROLL_START:"Ativar Rolagem Automatica",INCREASE_SPEED:"Aumentar Valocidade da Rolagem",DECREASE_SPEED:"Diminuir Valocidade da Rolagem",AUTO_SCROLL_HEIGHT:"Velocidade da Rolagem Automatica em Pixels",VERTICAL_SEPARATOR:"Mostrar Separadores Verticais",END:"Fin",SCOPE:"Escopo",GLOBAL:"Global",GENERAL:"Geral",LOADING:"Carregamento",ZOOM:"Zoom",OTHERS:"Outros",NAVBAR_TYPE:"Mudar barra de navegação",NAVBAR_BOTTOM:"Embaixo",NAVBAR_LEFT:"Esquerda",NAVBAR_RIGHT:"Direita",NAVBAR_DISABLED:"Desativado",PAGINATION_TYPE:"Tipo de Paginação",PAGINATION_DISABLED:"Desativado",PAGINATION_SLIDER:"Controle deslizante",PAGINATION_ARROWS:"Setas Laterais",PAGINATION_BOTH:"Ambos",FILE_MENU:"Menu Principal",VIEW_MENU:"Menu de Visualizações",ZOOM_MENU:"Menu de Zoom"},Lp={ID:"zh_CN",NAME:"中文 (简体)",STARTING:"正在启动 Manga OnlineViewer",RESUME:"从页面继续阅读 ",WAITING:"请等待3秒钟...",CHOOSE_BEGINNING:"选择要开始的页数:",BUTTON_START:"启动Manga OnlineViewer",SETTINGS:"设置",LANGUAGE:"语言",COLOR_SCHEME:"配色方案",THEME:"主题",THEME_COLOR:"颜色",THEME_HUE:"色相",THEME_SHADE:"色度",DEFAULT_LOAD_MODE:"默认加载模式",LOAD_MODE_NORMAL:"等待模式(等待3秒自动加载 )",LOAD_MODE_ALWAYS:"自动模式(无需等待)",LOAD_MODE_NEVER:"手动模式(点击启动)",LOAD_SPEED:"加载速度页数/秒",DEFAULT_ZOOM:"默认缩放 (最小 5 最大 200)",DEFAULT_ZOOM_MODE:"默认缩放模式",MINIMUM_ZOOM:"相对于屏幕宽度的最小缩放 (最小 30 最大 100)",ZOOM_STEP:"缩放级别 (最小 5 最大 50)",DEFAULT_VIEW_MODE:"默认视图模式",VIEW_MODE_VERTICAL:"垂直有缝",VIEW_MODE_LEFT:"从左到右",VIEW_MODE_RIGHT:"从右到左",VIEW_MODE_WEBCOMIC:"垂直无缝",FIT_WIDTH_OVERSIZED:"如果尺寸过大、则适合宽度",SHOW_THUMBNAILS:"显示缩略图",HIDE_CONTROLS:"始终隐藏页面控件",HEADER_TYPE:"更改标题显示方式",HEADER_HOVER:"悬停",HEADER_SCROLL:"滚动",HEADER_CLICK:"点击",HEADER_FIXED:"固定",HEADER_SIMPLE:"简单",BUTTON_DOWNLOAD:"下载",DOWNLOAD_ZIP:"下载压缩文件",DOWNLOAD_IMAGES:"自动将图片下载成ZIP",DOWNLOAD_PROGRESS:"正在下载：第 ##num## 页，共 ##total## 页",GENERATING_ZIP:"正在生成 Zip 文件...",DOWNLOAD_INCOMPLETE:"下载不完整",DOWNLOAD_INCOMPLETE_MESSAGE:"部分页面下载失败并已跳过。失败页面列表已添加到 ZIP 文件中。",BUTTON_NEXT:"下一页",NEXT_CHAPTER:"下一章",BUTTON_PREVIOUS:"上一页",PREVIOUS_CHAPTER:"上一章",BOOKMARKS:"书签",BOOKMARK:"Bookmark",BOOKMARK_REMOVED:"删除书签",BOOKMARK_SAVED:"保存书签",BOOKMARK_MESSAGE:"下次打开本章时，将从: 页码 ##num## (仅一次 每个书签)",KEYBINDINGS:"快捷键",EDIT_KEYBINDS:"编辑键绑定",SAVE_KEYBINDS:"保存键绑定",BUTTON_EDIT:"编辑",BUTTON_SAVE:"救",KEYBIND_RULES:`
    <h3>支持的密钥</h3>
    允许的修饰符: shift, option, alt, ctrl, control, command. <br/>
    特殊键: backspace, tab, clear, enter, return, esc, escape, space, up, down, left, right, home, end, pageup, pagedown, del, delete, f1 - f19, num_0 - num_9, num_multiply, num_add, num_enter, num_subtract, num_decimal, num_divide.<br/>
    例子: <kbd>a</kbd>, <kbd>ctrl+a</kbd> , <kbd>shift+a</kbd> , <kbd>num_2</kbd> , <kbd>2</kbd>
  `,ATTENTION:"注意",WARNING:"警告",BUTTON_RESET_SETTINGS:"重置设置(Reset Settings)",SETTINGS_RESET:"设置已重置、重新加载页面才能生效",LANGUAGE_CHANGED:"语言已更改、重新加载页面才能生效",AUTO_DOWNLOAD:"下次章节加载完成时、系统将提示您自动保存",LAZY_LOAD:"延迟加载与zip下载不兼容、您将无法使用此设置下载.<br/> 建议: <span style='color:red;font-weight:bold'>禁用缩略图</span> 以节省流量和内存.",LAZY_LOAD_IMAGES_ENABLE:"启用延迟加载图像",LAZY_LOAD_IMAGES:"惰性加载从页面 (最小 5 最大 100)",RETURN_CHAPTER_LIST:"返回章节列表",PAGES_LOADED:"已加载的页数",GO_TO_PAGE:"转到页数",ENLARGE:"放大",RESTORE:"还原",REDUCE:"缩小",FIT_WIDTH:"适合宽度",FIT_HEIGHT:"适合高度",PERCENT:"百分之",TOGGLE_CONTROLS:"显示隐藏页面控件",ZOOM_IN:"放大",ZOOM_OUT:"缩小",ZOOM_RESET:"还原",ZOOM_WIDTH:"适合宽度",ZOOM_HEIGHT:"适合高度",HIDE:"显示隐藏页面控件",RELOAD:"重新加载",SLOWLY:"慢速",NORMAL:"正常",FAST:"快速",EXTREME:"极端",ALL_PAGES:"所有页面",SPEED_WARNING:"加载速度过高",SPEED_WARNING_MESSAGE:"不建议使用此速度.<br/>它可能会伤害某些服务器或将您的 IP 标记为 DDoS 攻击者.<br/>请谨慎使用!",SCROLL_UP:"向上滚动",SCROLL_DOWN:"向下滚动",CLOSE:"关闭",LIST_EMPTY:"没有收藏书签",SCROLL_START:"切换自动滚动",INCREASE_SPEED:"增加滚动速度",DECREASE_SPEED:"降低滚动速度",AUTO_SCROLL_HEIGHT:"自动滚动速度（以像素为单位）",VERTICAL_SEPARATOR:"显示垂直分隔符",END:"结尾",SCOPE:"范围",GLOBAL:"全球",GENERAL:"常规",LOADING:"装载",ZOOM:"缩放",OTHERS:"别人",NAVBAR_TYPE:"更改导航栏类型",NAVBAR_BOTTOM:"底部",NAVBAR_LEFT:"左边",NAVBAR_RIGHT:"正确的",NAVBAR_DISABLED:"已禁用",PAGINATION_TYPE:"分页类型",PAGINATION_DISABLED:"已禁用",PAGINATION_SLIDER:"滑块",PAGINATION_ARROWS:"侧边箭头",PAGINATION_BOTH:"两者",FILE_MENU:"主菜单",VIEW_MENU:"查看菜单",ZOOM_MENU:"缩放菜单"},Qr=[Ip,Op,Tp,Lp,xp,Cp],Zi=(e,t)=>{const r=(o,a)=>Je.default.transform(o,(s,c,d)=>{Je.default.isEqual(c,a[d])||(Je.default.isObject(c)&&Je.default.isObject(a[d])&&!Je.default.isArray(c)?s[d]=r(c,a[d]):s[d]=c)});return r(e,t)},Lu={bookmarks:[],colorScheme:"dark",downloadZip:!1,enabled:!1,fitWidthIfOversize:!0,header:"scroll",hidePageControls:!1,lazyLoadImages:!1,lazyStart:50,loadMode:"wait",locale:"en_US",maxReload:5,minZoom:30,navbar:"bottom",pagination:"disabled",scrollHeight:25,theme:"#29487D",throttlePageLoad:1e3,viewMode:"WebComic",zoomMode:"percent",zoomStep:30,zoomValue:100,keybinds:{SCROLL_UP:["up","W","num_8"],SCROLL_DOWN:["down","S","num_2"],NEXT_CHAPTER:["right","/","D","num_6"],PREVIOUS_CHAPTER:["left",";","A","num_4"],RETURN_CHAPTER_LIST:["backspace","del","num_decimal"],ENLARGE:["-","num_add","E"],REDUCE:["=","num_subtract","Q"],RESTORE:["9","num_divide","R"],FIT_WIDTH:["0","num_multiply","F"],FIT_HEIGHT:["H","num_0"],SETTINGS:["num_divide","num_5","X"],VIEW_MODE_WEBCOMIC:["C"],VIEW_MODE_VERTICAL:["V"],VIEW_MODE_LEFT:["N"],VIEW_MODE_RIGHT:["B"],SCROLL_START:["space"],INCREASE_SPEED:["."],DECREASE_SPEED:[","]}},Rp={lazyLoadImages:!0,fitWidthIfOversize:!0,navbar:"disabled",viewMode:"WebComic",header:"scroll",hidePageControls:!0,pagination:"disabled"};function Cn(e=!0){return op()?Je.default.defaultsDeep(Rp,{...Lu,theme:e?"#29487D":"#004526"}):{...Lu,theme:e?"#29487D":"#004526"}}function Pp(e,t){if(Array.isArray(e)&&Array.isArray(t)){if(e.length!==t.length)return!1;const r=s=>`${s.url}-${s.date}`,o=[...e].sort((s,c)=>r(s).localeCompare(r(c))),a=[...t].sort((s,c)=>r(s).localeCompare(r(c)));return Je.default.isEqual(o,a)}}function $p(e,t){if(e&&typeof e=="object"&&t&&typeof t=="object"){const r=e,o=t,a=Object.keys(r).sort((c,d)=>c.localeCompare(d)),s=Object.keys(o).sort((c,d)=>c.localeCompare(d));if(!Je.default.isEqual(a,s))return!1;for(const c of a){const d=r[c]?[...r[c]].sort((h,f)=>h.localeCompare(f)):[],u=o[c]?[...o[c]].sort((h,f)=>h.localeCompare(f)):[];if(!Je.default.isEqual(d,u))return!1}return!0}}function Ru(e,t,r){if(r==="bookmarks")return Pp(e,t);if(r==="keybinds")return $p(e,t)}function Zo(e,t,r){if(e===t)return!1;if(r){const o={[r]:e},a={[r]:t};return!Je.default.isEqualWith(o,a,Ru)}return!Je.default.isEqualWith(e,t,Ru)}var Vt=Je.default.defaultsDeep(ep(Cn()),Cn()),Zt=Je.default.defaultsDeep(tp(Cn(!1)),Cn(!1)),Pr=()=>Zt?.enabled===!0,Ps=e=>Pr()&&!["locale","bookmarks","keybinds"].includes(e),St=hu(Pr()?{...Zt,locale:Vt.locale,keybinds:Vt.keybinds,bookmarks:Vt.bookmarks}:Vt),ei=fp(St,e=>Qr.find(t=>t.ID===e.locale)??Qr[1]),jt=hu({autoScroll:!1,chapter:Ts(),currentPage:0,device:Di(),manga:void 0,panel:"none",scrollToPage:void 0});function $r(e){if(e){const t=Ps(e)?Zt[e]:Vt[e],r=St.get()?.[e];Zo(r,t,e)&&(St.setKey(e,t),ke("Refreshed Settings",e,t));return}for(const t in St.get()){const r=St.get()[t],o=Ps(t)?Zt[t]:Vt[t];Zo(r,o)&&St.setKey(t,o)}ke("Refreshed All Settings")}function zp(e){const t=Je.default.defaultsDeep(e,Cn()),r=Vt?Zi(t,Vt):t;if(!gn(r)){ke("Imported Global Settings",r),Vt=t;for(const o in r)$r(o)}}uu(Je.default.debounce(zp,300),"settings");function Dp(e){const t=Je.default.defaultsDeep(e,Cn(!1)),r=Zt?Zi(t,Zt):t;if(!gn(r)){ke("Imported Local Settings",r),Zt=t;for(const o in r)$r(o)}}uu(Je.default.debounce(Dp,300),location.hostname);function q(e){return St.get()?.[e]}function ti(e,t){const r=St.get()?.[e];Zo(r,t,e)&&St.setKey(e,t)}function bt(e,t){Zo(q(e),t,e)&&(St.setKey(e,t),Ps(e)?(Zt[e]=t,cu(Zi(Zt,Cn(!1)))):(Vt[e]=t,np(Zi(Vt,Cn()))))}function ji(e,t){ti(e,t(q(e)))}function ge(e){return jt.get()[e]}function Ge(e,t){const r=jt.get()[e];Je.default.isEqual(r,t)||jt.setKey(e,t)}function Pu(e,t){const r=jt.get()[e],o=t(r);Je.default.isEqual(r,o)||jt.setKey(e,o)}function Nn(e,t){Pu("images",r=>({...r,[e]:{...r?.[e],...t(r?.[e]??{})}}))}function K(e){const t=Qr.find(r=>r.ID===q("locale"))??Qr[1];return i2(t,e)?t?.[e]??Qr[1]?.[e]:`##MISSING_STRING_${e}##`}function $u(e=!1){return Zt.enabled=e,cu(Zi(Zt,Cn(!1))),ke("Local Settings ",e?"Enabled":"Disabled"),Bi.info({title:"Changed Settings to",description:Pr()?"Local":"Global",duration:2e3}),Pr()}function Np(){Pr()?(au(location.hostname),Zt=Cn(!1),$u(!1)):(au("settings"),Vt=Cn(),$r()),ke("Settings Reset")}function ni(e=location.href){return q("bookmarks").find(t=>t.url===e)?.page}function Bp(e=null){mn("Current Settings (Local:",Pr(),") ",e?St.get()[e]:St.get(),`
Global Settings`,e?Vt[e]:Vt,`
Local Settings`,e?Zt[e]:Zt,`
AppState`,jt.get())}J2("MOVSettings",Bp);var Hp=(e,t,r)=>{if(r&&!["bookmarks","zoomValue"].includes(r)){const o=t[r],a=e[r];Bi.info({title:`${r} Changed`,description:`from ${JSON.stringify(o)} to ${JSON.stringify(a)}`,duration:2e3})}};St.listen(Je.default.debounce(Hp,300));var Fp=pn(((e,t)=>{(function(r){typeof e=="object"&&typeof t<"u"?t.exports=r():typeof define=="function"&&define.amd?define([],r):(typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:this).JSZip=r()})(function(){return(function r(o,a,s){function c(h,f){if(!a[h]){if(!o[h]){var b=typeof require=="function"&&require;if(!f&&b)return b(h,!0);if(d)return d(h,!0);var v=new Error("Cannot find module '"+h+"'");throw v.code="MODULE_NOT_FOUND",v}var g=a[h]={exports:{}};o[h][0].call(g.exports,function(m){var k=o[h][1][m];return c(k||m)},g,g.exports,r,o,a,s)}return a[h].exports}for(var d=typeof require=="function"&&require,u=0;u<s.length;u++)c(s[u]);return c})({1:[function(r,o,a){"use strict";var s=r("./utils"),c=r("./support"),d="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";a.encode=function(u){for(var h,f,b,v,g,m,k,_=[],S=0,M=u.length,C=M,T=s.getTypeOf(u)!=="string";S<u.length;)C=M-S,b=T?(h=u[S++],f=S<M?u[S++]:0,S<M?u[S++]:0):(h=u.charCodeAt(S++),f=S<M?u.charCodeAt(S++):0,S<M?u.charCodeAt(S++):0),v=h>>2,g=(3&h)<<4|f>>4,m=1<C?(15&f)<<2|b>>6:64,k=2<C?63&b:64,_.push(d.charAt(v)+d.charAt(g)+d.charAt(m)+d.charAt(k));return _.join("")},a.decode=function(u){var h,f,b,v,g,m,k=0,_=0,S="data:";if(u.substr(0,S.length)===S)throw new Error("Invalid base64 input, it looks like a data url.");var M,C=3*(u=u.replace(/[^A-Za-z0-9\+\/\=]/g,"")).length/4;if(u.charAt(u.length-1)===d.charAt(64)&&C--,u.charAt(u.length-2)===d.charAt(64)&&C--,C%1!=0)throw new Error("Invalid base64 input, bad content length.");for(M=c.uint8array?new Uint8Array(0|C):new Array(0|C);k<u.length;)h=d.indexOf(u.charAt(k++))<<2|(v=d.indexOf(u.charAt(k++)))>>4,f=(15&v)<<4|(g=d.indexOf(u.charAt(k++)))>>2,b=(3&g)<<6|(m=d.indexOf(u.charAt(k++))),M[_++]=h,g!==64&&(M[_++]=f),m!==64&&(M[_++]=b);return M}},{"./support":30,"./utils":32}],2:[function(r,o,a){"use strict";var s=r("./external"),c=r("./stream/DataWorker"),d=r("./stream/Crc32Probe"),u=r("./stream/DataLengthProbe");function h(f,b,v,g,m){this.compressedSize=f,this.uncompressedSize=b,this.crc32=v,this.compression=g,this.compressedContent=m}h.prototype={getContentWorker:function(){var f=new c(s.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new u("data_length")),b=this;return f.on("end",function(){if(this.streamInfo.data_length!==b.uncompressedSize)throw new Error("Bug : uncompressed data size mismatch")}),f},getCompressedWorker:function(){return new c(s.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize",this.compressedSize).withStreamInfo("uncompressedSize",this.uncompressedSize).withStreamInfo("crc32",this.crc32).withStreamInfo("compression",this.compression)}},h.createWorkerFrom=function(f,b,v){return f.pipe(new d).pipe(new u("uncompressedSize")).pipe(b.compressWorker(v)).pipe(new u("compressedSize")).withStreamInfo("compression",b)},o.exports=h},{"./external":6,"./stream/Crc32Probe":25,"./stream/DataLengthProbe":26,"./stream/DataWorker":27}],3:[function(r,o,a){"use strict";var s=r("./stream/GenericWorker");a.STORE={magic:"\0\0",compressWorker:function(c){return new s("STORE compression")},uncompressWorker:function(){return new s("STORE decompression")}},a.DEFLATE=r("./flate")},{"./flate":7,"./stream/GenericWorker":28}],4:[function(r,o,a){"use strict";var s=r("./utils"),c=(function(){for(var d,u=[],h=0;h<256;h++){d=h;for(var f=0;f<8;f++)d=1&d?3988292384^d>>>1:d>>>1;u[h]=d}return u})();o.exports=function(d,u){return d!==void 0&&d.length?s.getTypeOf(d)!=="string"?(function(h,f,b,v){var g=c,m=v+b;h^=-1;for(var k=v;k<m;k++)h=h>>>8^g[255&(h^f[k])];return-1^h})(0|u,d,d.length,0):(function(h,f,b,v){var g=c,m=v+b;h^=-1;for(var k=v;k<m;k++)h=h>>>8^g[255&(h^f.charCodeAt(k))];return-1^h})(0|u,d,d.length,0):0}},{"./utils":32}],5:[function(r,o,a){"use strict";a.base64=!1,a.binary=!1,a.dir=!1,a.createFolders=!0,a.date=null,a.compression=null,a.compressionOptions=null,a.comment=null,a.unixPermissions=null,a.dosPermissions=null},{}],6:[function(r,o,a){"use strict";var s=null;s=typeof Promise<"u"?Promise:r("lie"),o.exports={Promise:s}},{lie:37}],7:[function(r,o,a){"use strict";var s=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Uint32Array<"u",c=r("pako"),d=r("./utils"),u=r("./stream/GenericWorker"),h=s?"uint8array":"array";function f(b,v){u.call(this,"FlateWorker/"+b),this._pako=null,this._pakoAction=b,this._pakoOptions=v,this.meta={}}a.magic="\b\0",d.inherits(f,u),f.prototype.processChunk=function(b){this.meta=b.meta,this._pako===null&&this._createPako(),this._pako.push(d.transformTo(h,b.data),!1)},f.prototype.flush=function(){u.prototype.flush.call(this),this._pako===null&&this._createPako(),this._pako.push([],!0)},f.prototype.cleanUp=function(){u.prototype.cleanUp.call(this),this._pako=null},f.prototype._createPako=function(){this._pako=new c[this._pakoAction]({raw:!0,level:this._pakoOptions.level||-1});var b=this;this._pako.onData=function(v){b.push({data:v,meta:b.meta})}},a.compressWorker=function(b){return new f("Deflate",b)},a.uncompressWorker=function(){return new f("Inflate",{})}},{"./stream/GenericWorker":28,"./utils":32,pako:38}],8:[function(r,o,a){"use strict";function s(g,m){var k,_="";for(k=0;k<m;k++)_+=String.fromCharCode(255&g),g>>>=8;return _}function c(g,m,k,_,S,M){var C,T,$=g.file,Z=g.compression,U=M!==h.utf8encode,ie=d.transformTo("string",M($.name)),H=d.transformTo("string",h.utf8encode($.name)),fe=$.comment,we=d.transformTo("string",M(fe)),R=d.transformTo("string",h.utf8encode(fe)),j=H.length!==$.name.length,E=R.length!==fe.length,J="",xe="",oe="",Me=$.dir,ae=$.date,Ee={crc32:0,compressedSize:0,uncompressedSize:0};m&&!k||(Ee.crc32=g.crc32,Ee.compressedSize=g.compressedSize,Ee.uncompressedSize=g.uncompressedSize);var F=0;m&&(F|=8),U||!j&&!E||(F|=2048);var G=0,Se=0;Me&&(G|=16),S==="UNIX"?(Se=798,G|=(function(de,Ke){var kt=de;return de||(kt=Ke?16893:33204),(65535&kt)<<16})($.unixPermissions,Me)):(Se=20,G|=(function(de){return 63&(de||0)})($.dosPermissions)),C=ae.getUTCHours(),C<<=6,C|=ae.getUTCMinutes(),C<<=5,C|=ae.getUTCSeconds()/2,T=ae.getUTCFullYear()-1980,T<<=4,T|=ae.getUTCMonth()+1,T<<=5,T|=ae.getUTCDate(),j&&(xe=s(1,1)+s(f(ie),4)+H,J+="up"+s(xe.length,2)+xe),E&&(oe=s(1,1)+s(f(we),4)+R,J+="uc"+s(oe.length,2)+oe);var pe="";return pe+=`
\0`,pe+=s(F,2),pe+=Z.magic,pe+=s(C,2),pe+=s(T,2),pe+=s(Ee.crc32,4),pe+=s(Ee.compressedSize,4),pe+=s(Ee.uncompressedSize,4),pe+=s(ie.length,2),pe+=s(J.length,2),{fileRecord:b.LOCAL_FILE_HEADER+pe+ie+J,dirRecord:b.CENTRAL_FILE_HEADER+s(Se,2)+pe+s(we.length,2)+"\0\0\0\0"+s(G,4)+s(_,4)+ie+J+we}}var d=r("../utils"),u=r("../stream/GenericWorker"),h=r("../utf8"),f=r("../crc32"),b=r("../signature");function v(g,m,k,_){u.call(this,"ZipFileWorker"),this.bytesWritten=0,this.zipComment=m,this.zipPlatform=k,this.encodeFileName=_,this.streamFiles=g,this.accumulate=!1,this.contentBuffer=[],this.dirRecords=[],this.currentSourceOffset=0,this.entriesCount=0,this.currentFile=null,this._sources=[]}d.inherits(v,u),v.prototype.push=function(g){var m=g.meta.percent||0,k=this.entriesCount,_=this._sources.length;this.accumulate?this.contentBuffer.push(g):(this.bytesWritten+=g.data.length,u.prototype.push.call(this,{data:g.data,meta:{currentFile:this.currentFile,percent:k?(m+100*(k-_-1))/k:100}}))},v.prototype.openedSource=function(g){this.currentSourceOffset=this.bytesWritten,this.currentFile=g.file.name;var m=this.streamFiles&&!g.file.dir;if(m){var k=c(g,m,!1,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);this.push({data:k.fileRecord,meta:{percent:0}})}else this.accumulate=!0},v.prototype.closedSource=function(g){this.accumulate=!1;var m=this.streamFiles&&!g.file.dir,k=c(g,m,!0,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);if(this.dirRecords.push(k.dirRecord),m)this.push({data:(function(_){return b.DATA_DESCRIPTOR+s(_.crc32,4)+s(_.compressedSize,4)+s(_.uncompressedSize,4)})(g),meta:{percent:100}});else for(this.push({data:k.fileRecord,meta:{percent:0}});this.contentBuffer.length;)this.push(this.contentBuffer.shift());this.currentFile=null},v.prototype.flush=function(){for(var g=this.bytesWritten,m=0;m<this.dirRecords.length;m++)this.push({data:this.dirRecords[m],meta:{percent:100}});var k=this.bytesWritten-g,_=(function(S,M,C,T,$){var Z=d.transformTo("string",$(T));return b.CENTRAL_DIRECTORY_END+"\0\0\0\0"+s(S,2)+s(S,2)+s(M,4)+s(C,4)+s(Z.length,2)+Z})(this.dirRecords.length,k,g,this.zipComment,this.encodeFileName);this.push({data:_,meta:{percent:100}})},v.prototype.prepareNextSource=function(){this.previous=this._sources.shift(),this.openedSource(this.previous.streamInfo),this.isPaused?this.previous.pause():this.previous.resume()},v.prototype.registerPrevious=function(g){this._sources.push(g);var m=this;return g.on("data",function(k){m.processChunk(k)}),g.on("end",function(){m.closedSource(m.previous.streamInfo),m._sources.length?m.prepareNextSource():m.end()}),g.on("error",function(k){m.error(k)}),this},v.prototype.resume=function(){return!!u.prototype.resume.call(this)&&(!this.previous&&this._sources.length?(this.prepareNextSource(),!0):this.previous||this._sources.length||this.generatedError?void 0:(this.end(),!0))},v.prototype.error=function(g){var m=this._sources;if(!u.prototype.error.call(this,g))return!1;for(var k=0;k<m.length;k++)try{m[k].error(g)}catch{}return!0},v.prototype.lock=function(){u.prototype.lock.call(this);for(var g=this._sources,m=0;m<g.length;m++)g[m].lock()},o.exports=v},{"../crc32":4,"../signature":23,"../stream/GenericWorker":28,"../utf8":31,"../utils":32}],9:[function(r,o,a){"use strict";var s=r("../compressions"),c=r("./ZipFileWorker");a.generateWorker=function(d,u,h){var f=new c(u.streamFiles,h,u.platform,u.encodeFileName),b=0;try{d.forEach(function(v,g){b++;var m=(function(M,C){var T=M||C,$=s[T];if(!$)throw new Error(T+" is not a valid compression method !");return $})(g.options.compression,u.compression),k=g.options.compressionOptions||u.compressionOptions||{},_=g.dir,S=g.date;g._compressWorker(m,k).withStreamInfo("file",{name:v,dir:_,date:S,comment:g.comment||"",unixPermissions:g.unixPermissions,dosPermissions:g.dosPermissions}).pipe(f)}),f.entriesCount=b}catch(v){f.error(v)}return f}},{"../compressions":3,"./ZipFileWorker":8}],10:[function(r,o,a){"use strict";function s(){if(!(this instanceof s))return new s;if(arguments.length)throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");this.files=Object.create(null),this.comment=null,this.root="",this.clone=function(){var c=new s;for(var d in this)typeof this[d]!="function"&&(c[d]=this[d]);return c}}(s.prototype=r("./object")).loadAsync=r("./load"),s.support=r("./support"),s.defaults=r("./defaults"),s.version="3.9.1",s.loadAsync=function(c,d){return new s().loadAsync(c,d)},s.external=r("./external"),o.exports=s},{"./defaults":5,"./external":6,"./load":11,"./object":15,"./support":30}],11:[function(r,o,a){"use strict";var s=r("./utils"),c=r("./external"),d=r("./utf8"),u=r("./zipEntries"),h=r("./stream/Crc32Probe"),f=r("./nodejsUtils");function b(v){return new c.Promise(function(g,m){var k=v.decompressed.getContentWorker().pipe(new h);k.on("error",function(_){m(_)}).on("end",function(){k.streamInfo.crc32!==v.decompressed.crc32?m(new Error("Corrupted zip : CRC32 mismatch")):g()}).resume()})}o.exports=function(v,g){var m=this;return g=s.extend(g||{},{base64:!1,checkCRC32:!1,optimizedBinaryString:!1,createFolders:!1,decodeFileName:d.utf8decode}),f.isNode&&f.isStream(v)?c.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")):s.prepareContent("the loaded zip file",v,!0,g.optimizedBinaryString,g.base64).then(function(k){var _=new u(g);return _.load(k),_}).then(function(k){var _=[c.Promise.resolve(k)],S=k.files;if(g.checkCRC32)for(var M=0;M<S.length;M++)_.push(b(S[M]));return c.Promise.all(_)}).then(function(k){for(var _=k.shift(),S=_.files,M=0;M<S.length;M++){var C=S[M],T=C.fileNameStr,$=s.resolve(C.fileNameStr);m.file($,C.decompressed,{binary:!0,optimizedBinaryString:!0,date:C.date,dir:C.dir,comment:C.fileCommentStr.length?C.fileCommentStr:null,unixPermissions:C.unixPermissions,dosPermissions:C.dosPermissions,createFolders:g.createFolders}),C.dir||(m.file($).unsafeOriginalName=T)}return _.zipComment.length&&(m.comment=_.zipComment),m})}},{"./external":6,"./nodejsUtils":14,"./stream/Crc32Probe":25,"./utf8":31,"./utils":32,"./zipEntries":33}],12:[function(r,o,a){"use strict";var s=r("../utils"),c=r("../stream/GenericWorker");function d(u,h){c.call(this,"Nodejs stream input adapter for "+u),this._upstreamEnded=!1,this._bindStream(h)}s.inherits(d,c),d.prototype._bindStream=function(u){var h=this;(this._stream=u).pause(),u.on("data",function(f){h.push({data:f,meta:{percent:0}})}).on("error",function(f){h.isPaused?this.generatedError=f:h.error(f)}).on("end",function(){h.isPaused?h._upstreamEnded=!0:h.end()})},d.prototype.pause=function(){return!!c.prototype.pause.call(this)&&(this._stream.pause(),!0)},d.prototype.resume=function(){return!!c.prototype.resume.call(this)&&(this._upstreamEnded?this.end():this._stream.resume(),!0)},o.exports=d},{"../stream/GenericWorker":28,"../utils":32}],13:[function(r,o,a){"use strict";var s=r("readable-stream").Readable;function c(d,u,h){s.call(this,u),this._helper=d;var f=this;d.on("data",function(b,v){f.push(b)||f._helper.pause(),h&&h(v)}).on("error",function(b){f.emit("error",b)}).on("end",function(){f.push(null)})}r("../utils").inherits(c,s),c.prototype._read=function(){this._helper.resume()},o.exports=c},{"../utils":32,"readable-stream":16}],14:[function(r,o,a){"use strict";o.exports={isNode:typeof Buffer<"u",newBufferFrom:function(s,c){if(Buffer.from&&Buffer.from!==Uint8Array.from)return Buffer.from(s,c);if(typeof s=="number")throw new Error('The "data" argument must not be a number');return new Buffer(s,c)},allocBuffer:function(s){if(Buffer.alloc)return Buffer.alloc(s);var c=new Buffer(s);return c.fill(0),c},isBuffer:function(s){return Buffer.isBuffer(s)},isStream:function(s){return s&&typeof s.on=="function"&&typeof s.pause=="function"&&typeof s.resume=="function"}}},{}],15:[function(r,o,a){"use strict";function s(T,$,Z){var U,ie=d.getTypeOf($),H=d.extend(Z||{},f);H.date=H.date||new Date,H.compression!==null&&(H.compression=H.compression.toUpperCase()),typeof H.unixPermissions=="string"&&(H.unixPermissions=parseInt(H.unixPermissions,8)),H.unixPermissions&&16384&H.unixPermissions&&(H.dir=!0),H.dosPermissions&&16&H.dosPermissions&&(H.dir=!0),H.dir&&(T=S(T)),H.createFolders&&(U=_(T))&&M.call(this,U,!0);var fe=ie==="string"&&H.binary===!1&&H.base64===!1;Z&&Z.binary!==void 0||(H.binary=!fe),($ instanceof b&&$.uncompressedSize===0||H.dir||!$||$.length===0)&&(H.base64=!1,H.binary=!0,$="",H.compression="STORE",ie="string");var we=null;we=$ instanceof b||$ instanceof u?$:m.isNode&&m.isStream($)?new k(T,$):d.prepareContent(T,$,H.binary,H.optimizedBinaryString,H.base64);var R=new v(T,we,H);this.files[T]=R}var c=r("./utf8"),d=r("./utils"),u=r("./stream/GenericWorker"),h=r("./stream/StreamHelper"),f=r("./defaults"),b=r("./compressedObject"),v=r("./zipObject"),g=r("./generate"),m=r("./nodejsUtils"),k=r("./nodejs/NodejsStreamInputAdapter"),_=function(T){T.slice(-1)==="/"&&(T=T.substring(0,T.length-1));var $=T.lastIndexOf("/");return 0<$?T.substring(0,$):""},S=function(T){return T.slice(-1)!=="/"&&(T+="/"),T},M=function(T,$){return $=$!==void 0?$:f.createFolders,T=S(T),this.files[T]||s.call(this,T,null,{dir:!0,createFolders:$}),this.files[T]};function C(T){return Object.prototype.toString.call(T)==="[object RegExp]"}o.exports={load:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},forEach:function(T){var $,Z,U;for($ in this.files)U=this.files[$],(Z=$.slice(this.root.length,$.length))&&$.slice(0,this.root.length)===this.root&&T(Z,U)},filter:function(T){var $=[];return this.forEach(function(Z,U){T(Z,U)&&$.push(U)}),$},file:function(T,$,Z){if(arguments.length!==1)return T=this.root+T,s.call(this,T,$,Z),this;if(C(T)){var U=T;return this.filter(function(H,fe){return!fe.dir&&U.test(H)})}var ie=this.files[this.root+T];return ie&&!ie.dir?ie:null},folder:function(T){if(!T)return this;if(C(T))return this.filter(function(ie,H){return H.dir&&T.test(ie)});var $=this.root+T,Z=M.call(this,$),U=this.clone();return U.root=Z.name,U},remove:function(T){T=this.root+T;var $=this.files[T];if($||(T.slice(-1)!=="/"&&(T+="/"),$=this.files[T]),$&&!$.dir)delete this.files[T];else for(var Z=this.filter(function(ie,H){return H.name.slice(0,T.length)===T}),U=0;U<Z.length;U++)delete this.files[Z[U].name];return this},generate:function(T){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},generateInternalStream:function(T){var $,Z={};try{if((Z=d.extend(T||{},{streamFiles:!1,compression:"STORE",compressionOptions:null,type:"",platform:"DOS",comment:null,mimeType:"application/zip",encodeFileName:c.utf8encode})).type=Z.type.toLowerCase(),Z.compression=Z.compression.toUpperCase(),Z.type==="binarystring"&&(Z.type="string"),!Z.type)throw new Error("No output type specified.");d.checkSupport(Z.type),Z.platform!=="darwin"&&Z.platform!=="freebsd"&&Z.platform!=="linux"&&Z.platform!=="sunos"||(Z.platform="UNIX"),Z.platform==="win32"&&(Z.platform="DOS");var U=Z.comment||this.comment||"";$=g.generateWorker(this,Z,U)}catch(ie){($=new u("error")).error(ie)}return new h($,Z.type||"string",Z.mimeType)},generateAsync:function(T,$){return this.generateInternalStream(T).accumulate($)},generateNodeStream:function(T,$){return(T=T||{}).type||(T.type="nodebuffer"),this.generateInternalStream(T).toNodejsStream($)}}},{"./compressedObject":2,"./defaults":5,"./generate":9,"./nodejs/NodejsStreamInputAdapter":12,"./nodejsUtils":14,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31,"./utils":32,"./zipObject":35}],16:[function(r,o,a){o.exports=r("stream")},{stream:void 0}],17:[function(r,o,a){"use strict";var s=r("./DataReader");function c(d){s.call(this,d);for(var u=0;u<this.data.length;u++)d[u]=255&d[u]}r("../utils").inherits(c,s),c.prototype.byteAt=function(d){return this.data[this.zero+d]},c.prototype.lastIndexOfSignature=function(d){for(var u=d.charCodeAt(0),h=d.charCodeAt(1),f=d.charCodeAt(2),b=d.charCodeAt(3),v=this.length-4;0<=v;--v)if(this.data[v]===u&&this.data[v+1]===h&&this.data[v+2]===f&&this.data[v+3]===b)return v-this.zero;return-1},c.prototype.readAndCheckSignature=function(d){var u=d.charCodeAt(0),h=d.charCodeAt(1),f=d.charCodeAt(2),b=d.charCodeAt(3),v=this.readData(4);return u===v[0]&&h===v[1]&&f===v[2]&&b===v[3]},c.prototype.readData=function(d){if(this.checkOffset(d),d===0)return[];var u=this.data.slice(this.zero+this.index,this.zero+this.index+d);return this.index+=d,u},o.exports=c},{"../utils":32,"./DataReader":18}],18:[function(r,o,a){"use strict";var s=r("../utils");function c(d){this.data=d,this.length=d.length,this.index=0,this.zero=0}c.prototype={checkOffset:function(d){this.checkIndex(this.index+d)},checkIndex:function(d){if(this.length<this.zero+d||d<0)throw new Error("End of data reached (data length = "+this.length+", asked index = "+d+"). Corrupted zip ?")},setIndex:function(d){this.checkIndex(d),this.index=d},skip:function(d){this.setIndex(this.index+d)},byteAt:function(d){},readInt:function(d){var u,h=0;for(this.checkOffset(d),u=this.index+d-1;u>=this.index;u--)h=(h<<8)+this.byteAt(u);return this.index+=d,h},readString:function(d){return s.transformTo("string",this.readData(d))},readData:function(d){},lastIndexOfSignature:function(d){},readAndCheckSignature:function(d){},readDate:function(){var d=this.readInt(4);return new Date(Date.UTC(1980+(d>>25&127),(d>>21&15)-1,d>>16&31,d>>11&31,d>>5&63,(31&d)<<1))}},o.exports=c},{"../utils":32}],19:[function(r,o,a){"use strict";var s=r("./Uint8ArrayReader");function c(d){s.call(this,d)}r("../utils").inherits(c,s),c.prototype.readData=function(d){this.checkOffset(d);var u=this.data.slice(this.zero+this.index,this.zero+this.index+d);return this.index+=d,u},o.exports=c},{"../utils":32,"./Uint8ArrayReader":21}],20:[function(r,o,a){"use strict";var s=r("./DataReader");function c(d){s.call(this,d)}r("../utils").inherits(c,s),c.prototype.byteAt=function(d){return this.data.charCodeAt(this.zero+d)},c.prototype.lastIndexOfSignature=function(d){return this.data.lastIndexOf(d)-this.zero},c.prototype.readAndCheckSignature=function(d){return d===this.readData(4)},c.prototype.readData=function(d){this.checkOffset(d);var u=this.data.slice(this.zero+this.index,this.zero+this.index+d);return this.index+=d,u},o.exports=c},{"../utils":32,"./DataReader":18}],21:[function(r,o,a){"use strict";var s=r("./ArrayReader");function c(d){s.call(this,d)}r("../utils").inherits(c,s),c.prototype.readData=function(d){if(this.checkOffset(d),d===0)return new Uint8Array(0);var u=this.data.subarray(this.zero+this.index,this.zero+this.index+d);return this.index+=d,u},o.exports=c},{"../utils":32,"./ArrayReader":17}],22:[function(r,o,a){"use strict";var s=r("../utils"),c=r("../support"),d=r("./ArrayReader"),u=r("./StringReader"),h=r("./NodeBufferReader"),f=r("./Uint8ArrayReader");o.exports=function(b){var v=s.getTypeOf(b);return s.checkSupport(v),v!=="string"||c.uint8array?v==="nodebuffer"?new h(b):c.uint8array?new f(s.transformTo("uint8array",b)):new d(s.transformTo("array",b)):new u(b)}},{"../support":30,"../utils":32,"./ArrayReader":17,"./NodeBufferReader":19,"./StringReader":20,"./Uint8ArrayReader":21}],23:[function(r,o,a){"use strict";a.LOCAL_FILE_HEADER="PK",a.CENTRAL_FILE_HEADER="PK",a.CENTRAL_DIRECTORY_END="PK",a.ZIP64_CENTRAL_DIRECTORY_LOCATOR="PK\x07",a.ZIP64_CENTRAL_DIRECTORY_END="PK",a.DATA_DESCRIPTOR="PK\x07\b"},{}],24:[function(r,o,a){"use strict";var s=r("./GenericWorker"),c=r("../utils");function d(u){s.call(this,"ConvertWorker to "+u),this.destType=u}c.inherits(d,s),d.prototype.processChunk=function(u){this.push({data:c.transformTo(this.destType,u.data),meta:u.meta})},o.exports=d},{"../utils":32,"./GenericWorker":28}],25:[function(r,o,a){"use strict";var s=r("./GenericWorker"),c=r("../crc32");function d(){s.call(this,"Crc32Probe"),this.withStreamInfo("crc32",0)}r("../utils").inherits(d,s),d.prototype.processChunk=function(u){this.streamInfo.crc32=c(u.data,this.streamInfo.crc32||0),this.push(u)},o.exports=d},{"../crc32":4,"../utils":32,"./GenericWorker":28}],26:[function(r,o,a){"use strict";var s=r("../utils"),c=r("./GenericWorker");function d(u){c.call(this,"DataLengthProbe for "+u),this.propName=u,this.withStreamInfo(u,0)}s.inherits(d,c),d.prototype.processChunk=function(u){if(u){var h=this.streamInfo[this.propName]||0;this.streamInfo[this.propName]=h+u.data.length}c.prototype.processChunk.call(this,u)},o.exports=d},{"../utils":32,"./GenericWorker":28}],27:[function(r,o,a){"use strict";var s=r("../utils"),c=r("./GenericWorker");function d(u){c.call(this,"DataWorker");var h=this;this.dataIsReady=!1,this.index=0,this.max=0,this.data=null,this.type="",this._tickScheduled=!1,u.then(function(f){h.dataIsReady=!0,h.data=f,h.max=f&&f.length||0,h.type=s.getTypeOf(f),h.isPaused||h._tickAndRepeat()},function(f){h.error(f)})}s.inherits(d,c),d.prototype.cleanUp=function(){c.prototype.cleanUp.call(this),this.data=null},d.prototype.resume=function(){return!!c.prototype.resume.call(this)&&(!this._tickScheduled&&this.dataIsReady&&(this._tickScheduled=!0,s.delay(this._tickAndRepeat,[],this)),!0)},d.prototype._tickAndRepeat=function(){this._tickScheduled=!1,this.isPaused||this.isFinished||(this._tick(),this.isFinished||(s.delay(this._tickAndRepeat,[],this),this._tickScheduled=!0))},d.prototype._tick=function(){if(this.isPaused||this.isFinished)return!1;var u=null,h=Math.min(this.max,this.index+16384);if(this.index>=this.max)return this.end();switch(this.type){case"string":u=this.data.substring(this.index,h);break;case"uint8array":u=this.data.subarray(this.index,h);break;case"array":case"nodebuffer":u=this.data.slice(this.index,h)}return this.index=h,this.push({data:u,meta:{percent:this.max?this.index/this.max*100:0}})},o.exports=d},{"../utils":32,"./GenericWorker":28}],28:[function(r,o,a){"use strict";function s(c){this.name=c||"default",this.streamInfo={},this.generatedError=null,this.extraStreamInfo={},this.isPaused=!0,this.isFinished=!1,this.isLocked=!1,this._listeners={data:[],end:[],error:[]},this.previous=null}s.prototype={push:function(c){this.emit("data",c)},end:function(){if(this.isFinished)return!1;this.flush();try{this.emit("end"),this.cleanUp(),this.isFinished=!0}catch(c){this.emit("error",c)}return!0},error:function(c){return!this.isFinished&&(this.isPaused?this.generatedError=c:(this.isFinished=!0,this.emit("error",c),this.previous&&this.previous.error(c),this.cleanUp()),!0)},on:function(c,d){return this._listeners[c].push(d),this},cleanUp:function(){this.streamInfo=this.generatedError=this.extraStreamInfo=null,this._listeners=[]},emit:function(c,d){if(this._listeners[c])for(var u=0;u<this._listeners[c].length;u++)this._listeners[c][u].call(this,d)},pipe:function(c){return c.registerPrevious(this)},registerPrevious:function(c){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.streamInfo=c.streamInfo,this.mergeStreamInfo(),this.previous=c;var d=this;return c.on("data",function(u){d.processChunk(u)}),c.on("end",function(){d.end()}),c.on("error",function(u){d.error(u)}),this},pause:function(){return!this.isPaused&&!this.isFinished&&(this.isPaused=!0,this.previous&&this.previous.pause(),!0)},resume:function(){if(!this.isPaused||this.isFinished)return!1;var c=this.isPaused=!1;return this.generatedError&&(this.error(this.generatedError),c=!0),this.previous&&this.previous.resume(),!c},flush:function(){},processChunk:function(c){this.push(c)},withStreamInfo:function(c,d){return this.extraStreamInfo[c]=d,this.mergeStreamInfo(),this},mergeStreamInfo:function(){for(var c in this.extraStreamInfo)this.extraStreamInfo.hasOwnProperty(c)&&(this.streamInfo[c]=this.extraStreamInfo[c])},lock:function(){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.isLocked=!0,this.previous&&this.previous.lock()},toString:function(){var c="Worker "+this.name;return this.previous?this.previous+" -> "+c:c}},o.exports=s},{}],29:[function(r,o,a){"use strict";var s=r("../utils"),c=r("./ConvertWorker"),d=r("./GenericWorker"),u=r("../base64"),h=r("../support"),f=r("../external"),b=null;if(h.nodestream)try{b=r("../nodejs/NodejsStreamOutputAdapter")}catch{}function v(m,k){return new f.Promise(function(_,S){var M=[],C=m._internalType,T=m._outputType,$=m._mimeType;m.on("data",function(Z,U){M.push(Z),k&&k(U)}).on("error",function(Z){M=[],S(Z)}).on("end",function(){try{_((function(Z,U,ie){switch(Z){case"blob":return s.newBlob(s.transformTo("arraybuffer",U),ie);case"base64":return u.encode(U);default:return s.transformTo(Z,U)}})(T,(function(Z,U){var ie,H=0,fe=null,we=0;for(ie=0;ie<U.length;ie++)we+=U[ie].length;switch(Z){case"string":return U.join("");case"array":return Array.prototype.concat.apply([],U);case"uint8array":for(fe=new Uint8Array(we),ie=0;ie<U.length;ie++)fe.set(U[ie],H),H+=U[ie].length;return fe;case"nodebuffer":return Buffer.concat(U);default:throw new Error("concat : unsupported type '"+Z+"'")}})(C,M),$))}catch(Z){S(Z)}M=[]}).resume()})}function g(m,k,_){var S=k;switch(k){case"blob":case"arraybuffer":S="uint8array";break;case"base64":S="string"}try{this._internalType=S,this._outputType=k,this._mimeType=_,s.checkSupport(S),this._worker=m.pipe(new c(S)),m.lock()}catch(M){this._worker=new d("error"),this._worker.error(M)}}g.prototype={accumulate:function(m){return v(this,m)},on:function(m,k){var _=this;return m==="data"?this._worker.on(m,function(S){k.call(_,S.data,S.meta)}):this._worker.on(m,function(){s.delay(k,arguments,_)}),this},resume:function(){return s.delay(this._worker.resume,[],this._worker),this},pause:function(){return this._worker.pause(),this},toNodejsStream:function(m){if(s.checkSupport("nodestream"),this._outputType!=="nodebuffer")throw new Error(this._outputType+" is not supported by this method");return new b(this,{objectMode:this._outputType!=="nodebuffer"},m)}},o.exports=g},{"../base64":1,"../external":6,"../nodejs/NodejsStreamOutputAdapter":13,"../support":30,"../utils":32,"./ConvertWorker":24,"./GenericWorker":28}],30:[function(r,o,a){"use strict";if(a.base64=!0,a.array=!0,a.string=!0,a.arraybuffer=typeof ArrayBuffer<"u"&&typeof Uint8Array<"u",a.nodebuffer=typeof Buffer<"u",a.uint8array=typeof Uint8Array<"u",typeof ArrayBuffer>"u")a.blob=!1;else{var s=new ArrayBuffer(0);try{a.blob=new Blob([s],{type:"application/zip"}).size===0}catch{try{var c=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);c.append(s),a.blob=c.getBlob("application/zip").size===0}catch{a.blob=!1}}}try{a.nodestream=!!r("readable-stream").Readable}catch{a.nodestream=!1}},{"readable-stream":16}],31:[function(r,o,a){"use strict";for(var s=r("./utils"),c=r("./support"),d=r("./nodejsUtils"),u=r("./stream/GenericWorker"),h=new Array(256),f=0;f<256;f++)h[f]=252<=f?6:248<=f?5:240<=f?4:224<=f?3:192<=f?2:1;h[254]=h[254]=1;function b(){u.call(this,"utf-8 decode"),this.leftOver=null}function v(){u.call(this,"utf-8 encode")}a.utf8encode=function(g){return c.nodebuffer?d.newBufferFrom(g,"utf-8"):(function(m){var k,_,S,M,C,T=m.length,$=0;for(M=0;M<T;M++)(64512&(_=m.charCodeAt(M)))==55296&&M+1<T&&(64512&(S=m.charCodeAt(M+1)))==56320&&(_=65536+(_-55296<<10)+(S-56320),M++),$+=_<128?1:_<2048?2:_<65536?3:4;for(k=c.uint8array?new Uint8Array($):new Array($),M=C=0;C<$;M++)(64512&(_=m.charCodeAt(M)))==55296&&M+1<T&&(64512&(S=m.charCodeAt(M+1)))==56320&&(_=65536+(_-55296<<10)+(S-56320),M++),_<128?k[C++]=_:(_<2048?k[C++]=192|_>>>6:(_<65536?k[C++]=224|_>>>12:(k[C++]=240|_>>>18,k[C++]=128|_>>>12&63),k[C++]=128|_>>>6&63),k[C++]=128|63&_);return k})(g)},a.utf8decode=function(g){return c.nodebuffer?s.transformTo("nodebuffer",g).toString("utf-8"):(function(m){var k,_,S,M,C=m.length,T=new Array(2*C);for(k=_=0;k<C;)if((S=m[k++])<128)T[_++]=S;else if(4<(M=h[S]))T[_++]=65533,k+=M-1;else{for(S&=M===2?31:M===3?15:7;1<M&&k<C;)S=S<<6|63&m[k++],M--;1<M?T[_++]=65533:S<65536?T[_++]=S:(S-=65536,T[_++]=55296|S>>10&1023,T[_++]=56320|1023&S)}return T.length!==_&&(T.subarray?T=T.subarray(0,_):T.length=_),s.applyFromCharCode(T)})(g=s.transformTo(c.uint8array?"uint8array":"array",g))},s.inherits(b,u),b.prototype.processChunk=function(g){var m=s.transformTo(c.uint8array?"uint8array":"array",g.data);if(this.leftOver&&this.leftOver.length){if(c.uint8array){var k=m;(m=new Uint8Array(k.length+this.leftOver.length)).set(this.leftOver,0),m.set(k,this.leftOver.length)}else m=this.leftOver.concat(m);this.leftOver=null}var _=(function(M,C){var T;for((C=C||M.length)>M.length&&(C=M.length),T=C-1;0<=T&&(192&M[T])==128;)T--;return T<0||T===0?C:T+h[M[T]]>C?T:C})(m),S=m;_!==m.length&&(c.uint8array?(S=m.subarray(0,_),this.leftOver=m.subarray(_,m.length)):(S=m.slice(0,_),this.leftOver=m.slice(_,m.length))),this.push({data:a.utf8decode(S),meta:g.meta})},b.prototype.flush=function(){this.leftOver&&this.leftOver.length&&(this.push({data:a.utf8decode(this.leftOver),meta:{}}),this.leftOver=null)},a.Utf8DecodeWorker=b,s.inherits(v,u),v.prototype.processChunk=function(g){this.push({data:a.utf8encode(g.data),meta:g.meta})},a.Utf8EncodeWorker=v},{"./nodejsUtils":14,"./stream/GenericWorker":28,"./support":30,"./utils":32}],32:[function(r,o,a){"use strict";var s=r("./support"),c=r("./base64"),d=r("./nodejsUtils"),u=r("set-immediate-shim"),h=r("./external");function f(_){return _}function b(_,S){for(var M=0;M<_.length;++M)S[M]=255&_.charCodeAt(M);return S}a.newBlob=function(_,S){a.checkSupport("blob");try{return new Blob([_],{type:S})}catch{try{var M=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);return M.append(_),M.getBlob(S)}catch{throw new Error("Bug : can't construct the Blob.")}}};var v={stringifyByChunk:function(_,S,M){var C=[],T=0,$=_.length;if($<=M)return String.fromCharCode.apply(null,_);for(;T<$;)S==="array"||S==="nodebuffer"?C.push(String.fromCharCode.apply(null,_.slice(T,Math.min(T+M,$)))):C.push(String.fromCharCode.apply(null,_.subarray(T,Math.min(T+M,$)))),T+=M;return C.join("")},stringifyByChar:function(_){for(var S="",M=0;M<_.length;M++)S+=String.fromCharCode(_[M]);return S},applyCanBeUsed:{uint8array:(function(){try{return s.uint8array&&String.fromCharCode.apply(null,new Uint8Array(1)).length===1}catch{return!1}})(),nodebuffer:(function(){try{return s.nodebuffer&&String.fromCharCode.apply(null,d.allocBuffer(1)).length===1}catch{return!1}})()}};function g(_){var S=65536,M=a.getTypeOf(_),C=!0;if(M==="uint8array"?C=v.applyCanBeUsed.uint8array:M==="nodebuffer"&&(C=v.applyCanBeUsed.nodebuffer),C)for(;1<S;)try{return v.stringifyByChunk(_,M,S)}catch{S=Math.floor(S/2)}return v.stringifyByChar(_)}function m(_,S){for(var M=0;M<_.length;M++)S[M]=_[M];return S}a.applyFromCharCode=g;var k={};k.string={string:f,array:function(_){return b(_,new Array(_.length))},arraybuffer:function(_){return k.string.uint8array(_).buffer},uint8array:function(_){return b(_,new Uint8Array(_.length))},nodebuffer:function(_){return b(_,d.allocBuffer(_.length))}},k.array={string:g,array:f,arraybuffer:function(_){return new Uint8Array(_).buffer},uint8array:function(_){return new Uint8Array(_)},nodebuffer:function(_){return d.newBufferFrom(_)}},k.arraybuffer={string:function(_){return g(new Uint8Array(_))},array:function(_){return m(new Uint8Array(_),new Array(_.byteLength))},arraybuffer:f,uint8array:function(_){return new Uint8Array(_)},nodebuffer:function(_){return d.newBufferFrom(new Uint8Array(_))}},k.uint8array={string:g,array:function(_){return m(_,new Array(_.length))},arraybuffer:function(_){return _.buffer},uint8array:f,nodebuffer:function(_){return d.newBufferFrom(_)}},k.nodebuffer={string:g,array:function(_){return m(_,new Array(_.length))},arraybuffer:function(_){return k.nodebuffer.uint8array(_).buffer},uint8array:function(_){return m(_,new Uint8Array(_.length))},nodebuffer:f},a.transformTo=function(_,S){return S=S||"",_?(a.checkSupport(_),k[a.getTypeOf(S)][_](S)):S},a.resolve=function(_){for(var S=_.split("/"),M=[],C=0;C<S.length;C++){var T=S[C];T==="."||T===""&&C!==0&&C!==S.length-1||(T===".."?M.pop():M.push(T))}return M.join("/")},a.getTypeOf=function(_){return typeof _=="string"?"string":Object.prototype.toString.call(_)==="[object Array]"?"array":s.nodebuffer&&d.isBuffer(_)?"nodebuffer":s.uint8array&&_ instanceof Uint8Array?"uint8array":s.arraybuffer&&_ instanceof ArrayBuffer?"arraybuffer":void 0},a.checkSupport=function(_){if(!s[_.toLowerCase()])throw new Error(_+" is not supported by this platform")},a.MAX_VALUE_16BITS=65535,a.MAX_VALUE_32BITS=-1,a.pretty=function(_){var S,M,C="";for(M=0;M<(_||"").length;M++)C+="\\x"+((S=_.charCodeAt(M))<16?"0":"")+S.toString(16).toUpperCase();return C},a.delay=function(_,S,M){u(function(){_.apply(M||null,S||[])})},a.inherits=function(_,S){function M(){}M.prototype=S.prototype,_.prototype=new M},a.extend=function(){var _,S,M={};for(_=0;_<arguments.length;_++)for(S in arguments[_])arguments[_].hasOwnProperty(S)&&M[S]===void 0&&(M[S]=arguments[_][S]);return M},a.prepareContent=function(_,S,M,C,T){return h.Promise.resolve(S).then(function($){return s.blob&&($ instanceof Blob||["[object File]","[object Blob]"].indexOf(Object.prototype.toString.call($))!==-1)&&typeof FileReader<"u"?new h.Promise(function(Z,U){var ie=new FileReader;ie.onload=function(H){Z(H.target.result)},ie.onerror=function(H){U(H.target.error)},ie.readAsArrayBuffer($)}):$}).then(function($){var Z=a.getTypeOf($);return Z?(Z==="arraybuffer"?$=a.transformTo("uint8array",$):Z==="string"&&(T?$=c.decode($):M&&C!==!0&&($=(function(U){return b(U,s.uint8array?new Uint8Array(U.length):new Array(U.length))})($))),$):h.Promise.reject(new Error("Can't read the data of '"+_+"'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"))})}},{"./base64":1,"./external":6,"./nodejsUtils":14,"./support":30,"set-immediate-shim":54}],33:[function(r,o,a){"use strict";var s=r("./reader/readerFor"),c=r("./utils"),d=r("./signature"),u=r("./zipEntry"),h=(r("./utf8"),r("./support"));function f(b){this.files=[],this.loadOptions=b}f.prototype={checkSignature:function(b){if(!this.reader.readAndCheckSignature(b)){this.reader.index-=4;var v=this.reader.readString(4);throw new Error("Corrupted zip or bug: unexpected signature ("+c.pretty(v)+", expected "+c.pretty(b)+")")}},isSignature:function(b,v){var g=this.reader.index;this.reader.setIndex(b);var m=this.reader.readString(4)===v;return this.reader.setIndex(g),m},readBlockEndOfCentral:function(){this.diskNumber=this.reader.readInt(2),this.diskWithCentralDirStart=this.reader.readInt(2),this.centralDirRecordsOnThisDisk=this.reader.readInt(2),this.centralDirRecords=this.reader.readInt(2),this.centralDirSize=this.reader.readInt(4),this.centralDirOffset=this.reader.readInt(4),this.zipCommentLength=this.reader.readInt(2);var b=this.reader.readData(this.zipCommentLength),v=h.uint8array?"uint8array":"array",g=c.transformTo(v,b);this.zipComment=this.loadOptions.decodeFileName(g)},readBlockZip64EndOfCentral:function(){this.zip64EndOfCentralSize=this.reader.readInt(8),this.reader.skip(4),this.diskNumber=this.reader.readInt(4),this.diskWithCentralDirStart=this.reader.readInt(4),this.centralDirRecordsOnThisDisk=this.reader.readInt(8),this.centralDirRecords=this.reader.readInt(8),this.centralDirSize=this.reader.readInt(8),this.centralDirOffset=this.reader.readInt(8),this.zip64ExtensibleData={};for(var b,v,g,m=this.zip64EndOfCentralSize-44;0<m;)b=this.reader.readInt(2),v=this.reader.readInt(4),g=this.reader.readData(v),this.zip64ExtensibleData[b]={id:b,length:v,value:g}},readBlockZip64EndOfCentralLocator:function(){if(this.diskWithZip64CentralDirStart=this.reader.readInt(4),this.relativeOffsetEndOfZip64CentralDir=this.reader.readInt(8),this.disksCount=this.reader.readInt(4),1<this.disksCount)throw new Error("Multi-volumes zip are not supported")},readLocalFiles:function(){var b,v;for(b=0;b<this.files.length;b++)v=this.files[b],this.reader.setIndex(v.localHeaderOffset),this.checkSignature(d.LOCAL_FILE_HEADER),v.readLocalPart(this.reader),v.handleUTF8(),v.processAttributes()},readCentralDir:function(){var b;for(this.reader.setIndex(this.centralDirOffset);this.reader.readAndCheckSignature(d.CENTRAL_FILE_HEADER);)(b=new u({zip64:this.zip64},this.loadOptions)).readCentralPart(this.reader),this.files.push(b);if(this.centralDirRecords!==this.files.length&&this.centralDirRecords!==0&&this.files.length===0)throw new Error("Corrupted zip or bug: expected "+this.centralDirRecords+" records in central dir, got "+this.files.length)},readEndOfCentral:function(){var b=this.reader.lastIndexOfSignature(d.CENTRAL_DIRECTORY_END);if(b<0)throw this.isSignature(0,d.LOCAL_FILE_HEADER)?new Error("Corrupted zip: can't find end of central directory"):new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");this.reader.setIndex(b);var v=b;if(this.checkSignature(d.CENTRAL_DIRECTORY_END),this.readBlockEndOfCentral(),this.diskNumber===c.MAX_VALUE_16BITS||this.diskWithCentralDirStart===c.MAX_VALUE_16BITS||this.centralDirRecordsOnThisDisk===c.MAX_VALUE_16BITS||this.centralDirRecords===c.MAX_VALUE_16BITS||this.centralDirSize===c.MAX_VALUE_32BITS||this.centralDirOffset===c.MAX_VALUE_32BITS){if(this.zip64=!0,(b=this.reader.lastIndexOfSignature(d.ZIP64_CENTRAL_DIRECTORY_LOCATOR))<0)throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");if(this.reader.setIndex(b),this.checkSignature(d.ZIP64_CENTRAL_DIRECTORY_LOCATOR),this.readBlockZip64EndOfCentralLocator(),!this.isSignature(this.relativeOffsetEndOfZip64CentralDir,d.ZIP64_CENTRAL_DIRECTORY_END)&&(this.relativeOffsetEndOfZip64CentralDir=this.reader.lastIndexOfSignature(d.ZIP64_CENTRAL_DIRECTORY_END),this.relativeOffsetEndOfZip64CentralDir<0))throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),this.checkSignature(d.ZIP64_CENTRAL_DIRECTORY_END),this.readBlockZip64EndOfCentral()}var g=this.centralDirOffset+this.centralDirSize;this.zip64&&(g+=20,g+=12+this.zip64EndOfCentralSize);var m=v-g;if(0<m)this.isSignature(v,d.CENTRAL_FILE_HEADER)||(this.reader.zero=m);else if(m<0)throw new Error("Corrupted zip: missing "+Math.abs(m)+" bytes.")},prepareReader:function(b){this.reader=s(b)},load:function(b){this.prepareReader(b),this.readEndOfCentral(),this.readCentralDir(),this.readLocalFiles()}},o.exports=f},{"./reader/readerFor":22,"./signature":23,"./support":30,"./utf8":31,"./utils":32,"./zipEntry":34}],34:[function(r,o,a){"use strict";var s=r("./reader/readerFor"),c=r("./utils"),d=r("./compressedObject"),u=r("./crc32"),h=r("./utf8"),f=r("./compressions"),b=r("./support");function v(g,m){this.options=g,this.loadOptions=m}v.prototype={isEncrypted:function(){return(1&this.bitFlag)==1},useUTF8:function(){return(2048&this.bitFlag)==2048},readLocalPart:function(g){var m,k;if(g.skip(22),this.fileNameLength=g.readInt(2),k=g.readInt(2),this.fileName=g.readData(this.fileNameLength),g.skip(k),this.compressedSize===-1||this.uncompressedSize===-1)throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");if((m=(function(_){for(var S in f)if(f.hasOwnProperty(S)&&f[S].magic===_)return f[S];return null})(this.compressionMethod))===null)throw new Error("Corrupted zip : compression "+c.pretty(this.compressionMethod)+" unknown (inner file : "+c.transformTo("string",this.fileName)+")");this.decompressed=new d(this.compressedSize,this.uncompressedSize,this.crc32,m,g.readData(this.compressedSize))},readCentralPart:function(g){this.versionMadeBy=g.readInt(2),g.skip(2),this.bitFlag=g.readInt(2),this.compressionMethod=g.readString(2),this.date=g.readDate(),this.crc32=g.readInt(4),this.compressedSize=g.readInt(4),this.uncompressedSize=g.readInt(4);var m=g.readInt(2);if(this.extraFieldsLength=g.readInt(2),this.fileCommentLength=g.readInt(2),this.diskNumberStart=g.readInt(2),this.internalFileAttributes=g.readInt(2),this.externalFileAttributes=g.readInt(4),this.localHeaderOffset=g.readInt(4),this.isEncrypted())throw new Error("Encrypted zip are not supported");g.skip(m),this.readExtraFields(g),this.parseZIP64ExtraField(g),this.fileComment=g.readData(this.fileCommentLength)},processAttributes:function(){this.unixPermissions=null,this.dosPermissions=null;var g=this.versionMadeBy>>8;this.dir=!!(16&this.externalFileAttributes),g==0&&(this.dosPermissions=63&this.externalFileAttributes),g==3&&(this.unixPermissions=this.externalFileAttributes>>16&65535),this.dir||this.fileNameStr.slice(-1)!=="/"||(this.dir=!0)},parseZIP64ExtraField:function(g){if(this.extraFields[1]){var m=s(this.extraFields[1].value);this.uncompressedSize===c.MAX_VALUE_32BITS&&(this.uncompressedSize=m.readInt(8)),this.compressedSize===c.MAX_VALUE_32BITS&&(this.compressedSize=m.readInt(8)),this.localHeaderOffset===c.MAX_VALUE_32BITS&&(this.localHeaderOffset=m.readInt(8)),this.diskNumberStart===c.MAX_VALUE_32BITS&&(this.diskNumberStart=m.readInt(4))}},readExtraFields:function(g){var m,k,_,S=g.index+this.extraFieldsLength;for(this.extraFields||(this.extraFields={});g.index+4<S;)m=g.readInt(2),k=g.readInt(2),_=g.readData(k),this.extraFields[m]={id:m,length:k,value:_};g.setIndex(S)},handleUTF8:function(){var g=b.uint8array?"uint8array":"array";if(this.useUTF8())this.fileNameStr=h.utf8decode(this.fileName),this.fileCommentStr=h.utf8decode(this.fileComment);else{var m=this.findExtraFieldUnicodePath();if(m!==null)this.fileNameStr=m;else{var k=c.transformTo(g,this.fileName);this.fileNameStr=this.loadOptions.decodeFileName(k)}var _=this.findExtraFieldUnicodeComment();if(_!==null)this.fileCommentStr=_;else{var S=c.transformTo(g,this.fileComment);this.fileCommentStr=this.loadOptions.decodeFileName(S)}}},findExtraFieldUnicodePath:function(){var g=this.extraFields[28789];if(g){var m=s(g.value);return m.readInt(1)!==1||u(this.fileName)!==m.readInt(4)?null:h.utf8decode(m.readData(g.length-5))}return null},findExtraFieldUnicodeComment:function(){var g=this.extraFields[25461];if(g){var m=s(g.value);return m.readInt(1)!==1||u(this.fileComment)!==m.readInt(4)?null:h.utf8decode(m.readData(g.length-5))}return null}},o.exports=v},{"./compressedObject":2,"./compressions":3,"./crc32":4,"./reader/readerFor":22,"./support":30,"./utf8":31,"./utils":32}],35:[function(r,o,a){"use strict";function s(m,k,_){this.name=m,this.dir=_.dir,this.date=_.date,this.comment=_.comment,this.unixPermissions=_.unixPermissions,this.dosPermissions=_.dosPermissions,this._data=k,this._dataBinary=_.binary,this.options={compression:_.compression,compressionOptions:_.compressionOptions}}var c=r("./stream/StreamHelper"),d=r("./stream/DataWorker"),u=r("./utf8"),h=r("./compressedObject"),f=r("./stream/GenericWorker");s.prototype={internalStream:function(m){var k=null,_="string";try{if(!m)throw new Error("No output type specified.");var S=(_=m.toLowerCase())==="string"||_==="text";_!=="binarystring"&&_!=="text"||(_="string"),k=this._decompressWorker();var M=!this._dataBinary;M&&!S&&(k=k.pipe(new u.Utf8EncodeWorker)),!M&&S&&(k=k.pipe(new u.Utf8DecodeWorker))}catch(C){(k=new f("error")).error(C)}return new c(k,_,"")},async:function(m,k){return this.internalStream(m).accumulate(k)},nodeStream:function(m,k){return this.internalStream(m||"nodebuffer").toNodejsStream(k)},_compressWorker:function(m,k){if(this._data instanceof h&&this._data.compression.magic===m.magic)return this._data.getCompressedWorker();var _=this._decompressWorker();return this._dataBinary||(_=_.pipe(new u.Utf8EncodeWorker)),h.createWorkerFrom(_,m,k)},_decompressWorker:function(){return this._data instanceof h?this._data.getContentWorker():this._data instanceof f?this._data:new d(this._data)}};for(var b=["asText","asBinary","asNodeBuffer","asUint8Array","asArrayBuffer"],v=function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},g=0;g<b.length;g++)s.prototype[b[g]]=v;o.exports=s},{"./compressedObject":2,"./stream/DataWorker":27,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31}],36:[function(r,o,a){(function(s){"use strict";var c,d,u=s.MutationObserver||s.WebKitMutationObserver;if(u){var h=0,f=new u(m),b=s.document.createTextNode("");f.observe(b,{characterData:!0}),c=function(){b.data=h=++h%2}}else if(s.setImmediate||s.MessageChannel===void 0)c="document"in s&&"onreadystatechange"in s.document.createElement("script")?function(){var k=s.document.createElement("script");k.onreadystatechange=function(){m(),k.onreadystatechange=null,k.parentNode.removeChild(k),k=null},s.document.documentElement.appendChild(k)}:function(){setTimeout(m,0)};else{var v=new s.MessageChannel;v.port1.onmessage=m,c=function(){v.port2.postMessage(0)}}var g=[];function m(){var k,_;d=!0;for(var S=g.length;S;){for(_=g,g=[],k=-1;++k<S;)_[k]();S=g.length}d=!1}o.exports=function(k){g.push(k)!==1||d||c()}}).call(this,typeof global<"u"?global:typeof self<"u"?self:typeof window<"u"?window:{})},{}],37:[function(r,o,a){"use strict";var s=r("immediate");function c(){}var d={},u=["REJECTED"],h=["FULFILLED"],f=["PENDING"];function b(S){if(typeof S!="function")throw new TypeError("resolver must be a function");this.state=f,this.queue=[],this.outcome=void 0,S!==c&&k(this,S)}function v(S,M,C){this.promise=S,typeof M=="function"&&(this.onFulfilled=M,this.callFulfilled=this.otherCallFulfilled),typeof C=="function"&&(this.onRejected=C,this.callRejected=this.otherCallRejected)}function g(S,M,C){s(function(){var T;try{T=M(C)}catch($){return d.reject(S,$)}T===S?d.reject(S,new TypeError("Cannot resolve promise with itself")):d.resolve(S,T)})}function m(S){var M=S&&S.then;if(S&&(typeof S=="object"||typeof S=="function")&&typeof M=="function")return function(){M.apply(S,arguments)}}function k(S,M){var C=!1;function T(U){C||(C=!0,d.reject(S,U))}function $(U){C||(C=!0,d.resolve(S,U))}var Z=_(function(){M($,T)});Z.status==="error"&&T(Z.value)}function _(S,M){var C={};try{C.value=S(M),C.status="success"}catch(T){C.status="error",C.value=T}return C}(o.exports=b).prototype.finally=function(S){if(typeof S!="function")return this;var M=this.constructor;return this.then(function(C){return M.resolve(S()).then(function(){return C})},function(C){return M.resolve(S()).then(function(){throw C})})},b.prototype.catch=function(S){return this.then(null,S)},b.prototype.then=function(S,M){if(typeof S!="function"&&this.state===h||typeof M!="function"&&this.state===u)return this;var C=new this.constructor(c);return this.state!==f?g(C,this.state===h?S:M,this.outcome):this.queue.push(new v(C,S,M)),C},v.prototype.callFulfilled=function(S){d.resolve(this.promise,S)},v.prototype.otherCallFulfilled=function(S){g(this.promise,this.onFulfilled,S)},v.prototype.callRejected=function(S){d.reject(this.promise,S)},v.prototype.otherCallRejected=function(S){g(this.promise,this.onRejected,S)},d.resolve=function(S,M){var C=_(m,M);if(C.status==="error")return d.reject(S,C.value);var T=C.value;if(T)k(S,T);else{S.state=h,S.outcome=M;for(var $=-1,Z=S.queue.length;++$<Z;)S.queue[$].callFulfilled(M)}return S},d.reject=function(S,M){S.state=u,S.outcome=M;for(var C=-1,T=S.queue.length;++C<T;)S.queue[C].callRejected(M);return S},b.resolve=function(S){return S instanceof this?S:d.resolve(new this(c),S)},b.reject=function(S){var M=new this(c);return d.reject(M,S)},b.all=function(S){var M=this;if(Object.prototype.toString.call(S)!=="[object Array]")return this.reject(new TypeError("must be an array"));var C=S.length,T=!1;if(!C)return this.resolve([]);for(var $=new Array(C),Z=0,U=-1,ie=new this(c);++U<C;)H(S[U],U);return ie;function H(fe,we){M.resolve(fe).then(function(R){$[we]=R,++Z!==C||T||(T=!0,d.resolve(ie,$))},function(R){T||(T=!0,d.reject(ie,R))})}},b.race=function(S){var M=this;if(Object.prototype.toString.call(S)!=="[object Array]")return this.reject(new TypeError("must be an array"));var C=S.length,T=!1;if(!C)return this.resolve([]);for(var $=-1,Z=new this(c);++$<C;)U=S[$],M.resolve(U).then(function(ie){T||(T=!0,d.resolve(Z,ie))},function(ie){T||(T=!0,d.reject(Z,ie))});var U;return Z}},{immediate:36}],38:[function(r,o,a){"use strict";var s={};(0,r("./lib/utils/common").assign)(s,r("./lib/deflate"),r("./lib/inflate"),r("./lib/zlib/constants")),o.exports=s},{"./lib/deflate":39,"./lib/inflate":40,"./lib/utils/common":41,"./lib/zlib/constants":44}],39:[function(r,o,a){"use strict";var s=r("./zlib/deflate"),c=r("./utils/common"),d=r("./utils/strings"),u=r("./zlib/messages"),h=r("./zlib/zstream"),f=Object.prototype.toString,b=0,v=-1,g=0,m=8;function k(S){if(!(this instanceof k))return new k(S);this.options=c.assign({level:v,method:m,chunkSize:16384,windowBits:15,memLevel:8,strategy:g,to:""},S||{});var M=this.options;M.raw&&0<M.windowBits?M.windowBits=-M.windowBits:M.gzip&&0<M.windowBits&&M.windowBits<16&&(M.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new h,this.strm.avail_out=0;var C=s.deflateInit2(this.strm,M.level,M.method,M.windowBits,M.memLevel,M.strategy);if(C!==b)throw new Error(u[C]);if(M.header&&s.deflateSetHeader(this.strm,M.header),M.dictionary){var T;if(T=typeof M.dictionary=="string"?d.string2buf(M.dictionary):f.call(M.dictionary)==="[object ArrayBuffer]"?new Uint8Array(M.dictionary):M.dictionary,(C=s.deflateSetDictionary(this.strm,T))!==b)throw new Error(u[C]);this._dict_set=!0}}function _(S,M){var C=new k(M);if(C.push(S,!0),C.err)throw C.msg||u[C.err];return C.result}k.prototype.push=function(S,M){var C,T,$=this.strm,Z=this.options.chunkSize;if(this.ended)return!1;T=M===~~M?M:M===!0?4:0,typeof S=="string"?$.input=d.string2buf(S):f.call(S)==="[object ArrayBuffer]"?$.input=new Uint8Array(S):$.input=S,$.next_in=0,$.avail_in=$.input.length;do{if($.avail_out===0&&($.output=new c.Buf8(Z),$.next_out=0,$.avail_out=Z),(C=s.deflate($,T))!==1&&C!==b)return this.onEnd(C),!(this.ended=!0);$.avail_out!==0&&($.avail_in!==0||T!==4&&T!==2)||(this.options.to==="string"?this.onData(d.buf2binstring(c.shrinkBuf($.output,$.next_out))):this.onData(c.shrinkBuf($.output,$.next_out)))}while((0<$.avail_in||$.avail_out===0)&&C!==1);return T===4?(C=s.deflateEnd(this.strm),this.onEnd(C),this.ended=!0,C===b):T!==2||(this.onEnd(b),!($.avail_out=0))},k.prototype.onData=function(S){this.chunks.push(S)},k.prototype.onEnd=function(S){S===b&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=c.flattenChunks(this.chunks)),this.chunks=[],this.err=S,this.msg=this.strm.msg},a.Deflate=k,a.deflate=_,a.deflateRaw=function(S,M){return(M=M||{}).raw=!0,_(S,M)},a.gzip=function(S,M){return(M=M||{}).gzip=!0,_(S,M)}},{"./utils/common":41,"./utils/strings":42,"./zlib/deflate":46,"./zlib/messages":51,"./zlib/zstream":53}],40:[function(r,o,a){"use strict";var s=r("./zlib/inflate"),c=r("./utils/common"),d=r("./utils/strings"),u=r("./zlib/constants"),h=r("./zlib/messages"),f=r("./zlib/zstream"),b=r("./zlib/gzheader"),v=Object.prototype.toString;function g(k){if(!(this instanceof g))return new g(k);this.options=c.assign({chunkSize:16384,windowBits:0,to:""},k||{});var _=this.options;_.raw&&0<=_.windowBits&&_.windowBits<16&&(_.windowBits=-_.windowBits,_.windowBits===0&&(_.windowBits=-15)),!(0<=_.windowBits&&_.windowBits<16)||k&&k.windowBits||(_.windowBits+=32),15<_.windowBits&&_.windowBits<48&&(15&_.windowBits)==0&&(_.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new f,this.strm.avail_out=0;var S=s.inflateInit2(this.strm,_.windowBits);if(S!==u.Z_OK)throw new Error(h[S]);this.header=new b,s.inflateGetHeader(this.strm,this.header)}function m(k,_){var S=new g(_);if(S.push(k,!0),S.err)throw S.msg||h[S.err];return S.result}g.prototype.push=function(k,_){var S,M,C,T,$,Z,U=this.strm,ie=this.options.chunkSize,H=this.options.dictionary,fe=!1;if(this.ended)return!1;M=_===~~_?_:_===!0?u.Z_FINISH:u.Z_NO_FLUSH,typeof k=="string"?U.input=d.binstring2buf(k):v.call(k)==="[object ArrayBuffer]"?U.input=new Uint8Array(k):U.input=k,U.next_in=0,U.avail_in=U.input.length;do{if(U.avail_out===0&&(U.output=new c.Buf8(ie),U.next_out=0,U.avail_out=ie),(S=s.inflate(U,u.Z_NO_FLUSH))===u.Z_NEED_DICT&&H&&(Z=typeof H=="string"?d.string2buf(H):v.call(H)==="[object ArrayBuffer]"?new Uint8Array(H):H,S=s.inflateSetDictionary(this.strm,Z)),S===u.Z_BUF_ERROR&&fe===!0&&(S=u.Z_OK,fe=!1),S!==u.Z_STREAM_END&&S!==u.Z_OK)return this.onEnd(S),!(this.ended=!0);U.next_out&&(U.avail_out!==0&&S!==u.Z_STREAM_END&&(U.avail_in!==0||M!==u.Z_FINISH&&M!==u.Z_SYNC_FLUSH)||(this.options.to==="string"?(C=d.utf8border(U.output,U.next_out),T=U.next_out-C,$=d.buf2string(U.output,C),U.next_out=T,U.avail_out=ie-T,T&&c.arraySet(U.output,U.output,C,T,0),this.onData($)):this.onData(c.shrinkBuf(U.output,U.next_out)))),U.avail_in===0&&U.avail_out===0&&(fe=!0)}while((0<U.avail_in||U.avail_out===0)&&S!==u.Z_STREAM_END);return S===u.Z_STREAM_END&&(M=u.Z_FINISH),M===u.Z_FINISH?(S=s.inflateEnd(this.strm),this.onEnd(S),this.ended=!0,S===u.Z_OK):M!==u.Z_SYNC_FLUSH||(this.onEnd(u.Z_OK),!(U.avail_out=0))},g.prototype.onData=function(k){this.chunks.push(k)},g.prototype.onEnd=function(k){k===u.Z_OK&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=c.flattenChunks(this.chunks)),this.chunks=[],this.err=k,this.msg=this.strm.msg},a.Inflate=g,a.inflate=m,a.inflateRaw=function(k,_){return(_=_||{}).raw=!0,m(k,_)},a.ungzip=m},{"./utils/common":41,"./utils/strings":42,"./zlib/constants":44,"./zlib/gzheader":47,"./zlib/inflate":49,"./zlib/messages":51,"./zlib/zstream":53}],41:[function(r,o,a){"use strict";var s=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Int32Array<"u";a.assign=function(u){for(var h=Array.prototype.slice.call(arguments,1);h.length;){var f=h.shift();if(f){if(typeof f!="object")throw new TypeError(f+"must be non-object");for(var b in f)f.hasOwnProperty(b)&&(u[b]=f[b])}}return u},a.shrinkBuf=function(u,h){return u.length===h?u:u.subarray?u.subarray(0,h):(u.length=h,u)};var c={arraySet:function(u,h,f,b,v){if(h.subarray&&u.subarray)u.set(h.subarray(f,f+b),v);else for(var g=0;g<b;g++)u[v+g]=h[f+g]},flattenChunks:function(u){var h,f,b,v,g,m;for(h=b=0,f=u.length;h<f;h++)b+=u[h].length;for(m=new Uint8Array(b),h=v=0,f=u.length;h<f;h++)g=u[h],m.set(g,v),v+=g.length;return m}},d={arraySet:function(u,h,f,b,v){for(var g=0;g<b;g++)u[v+g]=h[f+g]},flattenChunks:function(u){return[].concat.apply([],u)}};a.setTyped=function(u){u?(a.Buf8=Uint8Array,a.Buf16=Uint16Array,a.Buf32=Int32Array,a.assign(a,c)):(a.Buf8=Array,a.Buf16=Array,a.Buf32=Array,a.assign(a,d))},a.setTyped(s)},{}],42:[function(r,o,a){"use strict";var s=r("./common"),c=!0,d=!0;try{String.fromCharCode.apply(null,[0])}catch{c=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch{d=!1}for(var u=new s.Buf8(256),h=0;h<256;h++)u[h]=252<=h?6:248<=h?5:240<=h?4:224<=h?3:192<=h?2:1;function f(b,v){if(v<65537&&(b.subarray&&d||!b.subarray&&c))return String.fromCharCode.apply(null,s.shrinkBuf(b,v));for(var g="",m=0;m<v;m++)g+=String.fromCharCode(b[m]);return g}u[254]=u[254]=1,a.string2buf=function(b){var v,g,m,k,_,S=b.length,M=0;for(k=0;k<S;k++)(64512&(g=b.charCodeAt(k)))==55296&&k+1<S&&(64512&(m=b.charCodeAt(k+1)))==56320&&(g=65536+(g-55296<<10)+(m-56320),k++),M+=g<128?1:g<2048?2:g<65536?3:4;for(v=new s.Buf8(M),k=_=0;_<M;k++)(64512&(g=b.charCodeAt(k)))==55296&&k+1<S&&(64512&(m=b.charCodeAt(k+1)))==56320&&(g=65536+(g-55296<<10)+(m-56320),k++),g<128?v[_++]=g:(g<2048?v[_++]=192|g>>>6:(g<65536?v[_++]=224|g>>>12:(v[_++]=240|g>>>18,v[_++]=128|g>>>12&63),v[_++]=128|g>>>6&63),v[_++]=128|63&g);return v},a.buf2binstring=function(b){return f(b,b.length)},a.binstring2buf=function(b){for(var v=new s.Buf8(b.length),g=0,m=v.length;g<m;g++)v[g]=b.charCodeAt(g);return v},a.buf2string=function(b,v){var g,m,k,_,S=v||b.length,M=new Array(2*S);for(g=m=0;g<S;)if((k=b[g++])<128)M[m++]=k;else if(4<(_=u[k]))M[m++]=65533,g+=_-1;else{for(k&=_===2?31:_===3?15:7;1<_&&g<S;)k=k<<6|63&b[g++],_--;1<_?M[m++]=65533:k<65536?M[m++]=k:(k-=65536,M[m++]=55296|k>>10&1023,M[m++]=56320|1023&k)}return f(M,m)},a.utf8border=function(b,v){var g;for((v=v||b.length)>b.length&&(v=b.length),g=v-1;0<=g&&(192&b[g])==128;)g--;return g<0||g===0?v:g+u[b[g]]>v?g:v}},{"./common":41}],43:[function(r,o,a){"use strict";o.exports=function(s,c,d,u){for(var h=65535&s|0,f=s>>>16&65535|0,b=0;d!==0;){for(d-=b=2e3<d?2e3:d;f=f+(h=h+c[u++]|0)|0,--b;);h%=65521,f%=65521}return h|f<<16|0}},{}],44:[function(r,o,a){"use strict";o.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],45:[function(r,o,a){"use strict";var s=(function(){for(var c,d=[],u=0;u<256;u++){c=u;for(var h=0;h<8;h++)c=1&c?3988292384^c>>>1:c>>>1;d[u]=c}return d})();o.exports=function(c,d,u,h){var f=s,b=h+u;c^=-1;for(var v=h;v<b;v++)c=c>>>8^f[255&(c^d[v])];return-1^c}},{}],46:[function(r,o,a){"use strict";var s,c=r("../utils/common"),d=r("./trees"),u=r("./adler32"),h=r("./crc32"),f=r("./messages"),b=0,v=4,g=0,m=-2,k=-1,_=4,S=2,M=8,C=9,T=286,$=30,Z=19,U=2*T+1,ie=15,H=3,fe=258,we=fe+H+1,R=42,j=113,E=1,J=2,xe=3,oe=4;function Me(w,Q){return w.msg=f[Q],Q}function ae(w){return(w<<1)-(4<w?9:0)}function Ee(w){for(var Q=w.length;0<=--Q;)w[Q]=0}function F(w){var Q=w.state,V=Q.pending;V>w.avail_out&&(V=w.avail_out),V!==0&&(c.arraySet(w.output,Q.pending_buf,Q.pending_out,V,w.next_out),w.next_out+=V,Q.pending_out+=V,w.total_out+=V,w.avail_out-=V,Q.pending-=V,Q.pending===0&&(Q.pending_out=0))}function G(w,Q){d._tr_flush_block(w,0<=w.block_start?w.block_start:-1,w.strstart-w.block_start,Q),w.block_start=w.strstart,F(w.strm)}function Se(w,Q){w.pending_buf[w.pending++]=Q}function pe(w,Q){w.pending_buf[w.pending++]=Q>>>8&255,w.pending_buf[w.pending++]=255&Q}function de(w,Q){var V,O,I=w.max_chain_length,D=w.strstart,re=w.prev_length,ne=w.nice_match,B=w.strstart>w.w_size-we?w.strstart-(w.w_size-we):0,ce=w.window,ve=w.w_mask,ue=w.prev,Ae=w.strstart+fe,Ze=ce[D+re-1],Ne=ce[D+re];w.prev_length>=w.good_match&&(I>>=2),ne>w.lookahead&&(ne=w.lookahead);do if(ce[(V=Q)+re]===Ne&&ce[V+re-1]===Ze&&ce[V]===ce[D]&&ce[++V]===ce[D+1]){D+=2,V++;do;while(ce[++D]===ce[++V]&&ce[++D]===ce[++V]&&ce[++D]===ce[++V]&&ce[++D]===ce[++V]&&ce[++D]===ce[++V]&&ce[++D]===ce[++V]&&ce[++D]===ce[++V]&&ce[++D]===ce[++V]&&D<Ae);if(O=fe-(Ae-D),D=Ae-fe,re<O){if(w.match_start=Q,ne<=(re=O))break;Ze=ce[D+re-1],Ne=ce[D+re]}}while((Q=ue[Q&ve])>B&&--I!=0);return re<=w.lookahead?re:w.lookahead}function Ke(w){var Q,V,O,I,D,re,ne,B,ce,ve,ue=w.w_size;do{if(I=w.window_size-w.lookahead-w.strstart,w.strstart>=ue+(ue-we)){for(c.arraySet(w.window,w.window,ue,ue,0),w.match_start-=ue,w.strstart-=ue,w.block_start-=ue,Q=V=w.hash_size;O=w.head[--Q],w.head[Q]=ue<=O?O-ue:0,--V;);for(Q=V=ue;O=w.prev[--Q],w.prev[Q]=ue<=O?O-ue:0,--V;);I+=ue}if(w.strm.avail_in===0)break;if(re=w.strm,ne=w.window,B=w.strstart+w.lookahead,ce=I,ve=void 0,ve=re.avail_in,ce<ve&&(ve=ce),V=ve===0?0:(re.avail_in-=ve,c.arraySet(ne,re.input,re.next_in,ve,B),re.state.wrap===1?re.adler=u(re.adler,ne,ve,B):re.state.wrap===2&&(re.adler=h(re.adler,ne,ve,B)),re.next_in+=ve,re.total_in+=ve,ve),w.lookahead+=V,w.lookahead+w.insert>=H)for(D=w.strstart-w.insert,w.ins_h=w.window[D],w.ins_h=(w.ins_h<<w.hash_shift^w.window[D+1])&w.hash_mask;w.insert&&(w.ins_h=(w.ins_h<<w.hash_shift^w.window[D+H-1])&w.hash_mask,w.prev[D&w.w_mask]=w.head[w.ins_h],w.head[w.ins_h]=D,D++,w.insert--,!(w.lookahead+w.insert<H)););}while(w.lookahead<we&&w.strm.avail_in!==0)}function kt(w,Q){for(var V,O;;){if(w.lookahead<we){if(Ke(w),w.lookahead<we&&Q===b)return E;if(w.lookahead===0)break}if(V=0,w.lookahead>=H&&(w.ins_h=(w.ins_h<<w.hash_shift^w.window[w.strstart+H-1])&w.hash_mask,V=w.prev[w.strstart&w.w_mask]=w.head[w.ins_h],w.head[w.ins_h]=w.strstart),V!==0&&w.strstart-V<=w.w_size-we&&(w.match_length=de(w,V)),w.match_length>=H)if(O=d._tr_tally(w,w.strstart-w.match_start,w.match_length-H),w.lookahead-=w.match_length,w.match_length<=w.max_lazy_match&&w.lookahead>=H){for(w.match_length--;w.strstart++,w.ins_h=(w.ins_h<<w.hash_shift^w.window[w.strstart+H-1])&w.hash_mask,V=w.prev[w.strstart&w.w_mask]=w.head[w.ins_h],w.head[w.ins_h]=w.strstart,--w.match_length!=0;);w.strstart++}else w.strstart+=w.match_length,w.match_length=0,w.ins_h=w.window[w.strstart],w.ins_h=(w.ins_h<<w.hash_shift^w.window[w.strstart+1])&w.hash_mask;else O=d._tr_tally(w,0,w.window[w.strstart]),w.lookahead--,w.strstart++;if(O&&(G(w,!1),w.strm.avail_out===0))return E}return w.insert=w.strstart<H-1?w.strstart:H-1,Q===v?(G(w,!0),w.strm.avail_out===0?xe:oe):w.last_lit&&(G(w,!1),w.strm.avail_out===0)?E:J}function $e(w,Q){for(var V,O,I;;){if(w.lookahead<we){if(Ke(w),w.lookahead<we&&Q===b)return E;if(w.lookahead===0)break}if(V=0,w.lookahead>=H&&(w.ins_h=(w.ins_h<<w.hash_shift^w.window[w.strstart+H-1])&w.hash_mask,V=w.prev[w.strstart&w.w_mask]=w.head[w.ins_h],w.head[w.ins_h]=w.strstart),w.prev_length=w.match_length,w.prev_match=w.match_start,w.match_length=H-1,V!==0&&w.prev_length<w.max_lazy_match&&w.strstart-V<=w.w_size-we&&(w.match_length=de(w,V),w.match_length<=5&&(w.strategy===1||w.match_length===H&&4096<w.strstart-w.match_start)&&(w.match_length=H-1)),w.prev_length>=H&&w.match_length<=w.prev_length){for(I=w.strstart+w.lookahead-H,O=d._tr_tally(w,w.strstart-1-w.prev_match,w.prev_length-H),w.lookahead-=w.prev_length-1,w.prev_length-=2;++w.strstart<=I&&(w.ins_h=(w.ins_h<<w.hash_shift^w.window[w.strstart+H-1])&w.hash_mask,V=w.prev[w.strstart&w.w_mask]=w.head[w.ins_h],w.head[w.ins_h]=w.strstart),--w.prev_length!=0;);if(w.match_available=0,w.match_length=H-1,w.strstart++,O&&(G(w,!1),w.strm.avail_out===0))return E}else if(w.match_available){if((O=d._tr_tally(w,0,w.window[w.strstart-1]))&&G(w,!1),w.strstart++,w.lookahead--,w.strm.avail_out===0)return E}else w.match_available=1,w.strstart++,w.lookahead--}return w.match_available&&(O=d._tr_tally(w,0,w.window[w.strstart-1]),w.match_available=0),w.insert=w.strstart<H-1?w.strstart:H-1,Q===v?(G(w,!0),w.strm.avail_out===0?xe:oe):w.last_lit&&(G(w,!1),w.strm.avail_out===0)?E:J}function Fe(w,Q,V,O,I){this.good_length=w,this.max_lazy=Q,this.nice_length=V,this.max_chain=O,this.func=I}function Et(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=M,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new c.Buf16(2*U),this.dyn_dtree=new c.Buf16(2*(2*$+1)),this.bl_tree=new c.Buf16(2*(2*Z+1)),Ee(this.dyn_ltree),Ee(this.dyn_dtree),Ee(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new c.Buf16(ie+1),this.heap=new c.Buf16(2*T+1),Ee(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new c.Buf16(2*T+1),Ee(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function rt(w){var Q;return w&&w.state?(w.total_in=w.total_out=0,w.data_type=S,(Q=w.state).pending=0,Q.pending_out=0,Q.wrap<0&&(Q.wrap=-Q.wrap),Q.status=Q.wrap?R:j,w.adler=Q.wrap===2?0:1,Q.last_flush=b,d._tr_init(Q),g):Me(w,m)}function Ft(w){var Q=rt(w);return Q===g&&(function(V){V.window_size=2*V.w_size,Ee(V.head),V.max_lazy_match=s[V.level].max_lazy,V.good_match=s[V.level].good_length,V.nice_match=s[V.level].nice_length,V.max_chain_length=s[V.level].max_chain,V.strstart=0,V.block_start=0,V.lookahead=0,V.insert=0,V.match_length=V.prev_length=H-1,V.match_available=0,V.ins_h=0})(w.state),Q}function Kt(w,Q,V,O,I,D){if(!w)return m;var re=1;if(Q===k&&(Q=6),O<0?(re=0,O=-O):15<O&&(re=2,O-=16),I<1||C<I||V!==M||O<8||15<O||Q<0||9<Q||D<0||_<D)return Me(w,m);O===8&&(O=9);var ne=new Et;return(w.state=ne).strm=w,ne.wrap=re,ne.gzhead=null,ne.w_bits=O,ne.w_size=1<<ne.w_bits,ne.w_mask=ne.w_size-1,ne.hash_bits=I+7,ne.hash_size=1<<ne.hash_bits,ne.hash_mask=ne.hash_size-1,ne.hash_shift=~~((ne.hash_bits+H-1)/H),ne.window=new c.Buf8(2*ne.w_size),ne.head=new c.Buf16(ne.hash_size),ne.prev=new c.Buf16(ne.w_size),ne.lit_bufsize=1<<I+6,ne.pending_buf_size=4*ne.lit_bufsize,ne.pending_buf=new c.Buf8(ne.pending_buf_size),ne.d_buf=1*ne.lit_bufsize,ne.l_buf=3*ne.lit_bufsize,ne.level=Q,ne.strategy=D,ne.method=V,Ft(w)}s=[new Fe(0,0,0,0,function(w,Q){var V=65535;for(V>w.pending_buf_size-5&&(V=w.pending_buf_size-5);;){if(w.lookahead<=1){if(Ke(w),w.lookahead===0&&Q===b)return E;if(w.lookahead===0)break}w.strstart+=w.lookahead,w.lookahead=0;var O=w.block_start+V;if((w.strstart===0||w.strstart>=O)&&(w.lookahead=w.strstart-O,w.strstart=O,G(w,!1),w.strm.avail_out===0)||w.strstart-w.block_start>=w.w_size-we&&(G(w,!1),w.strm.avail_out===0))return E}return w.insert=0,Q===v?(G(w,!0),w.strm.avail_out===0?xe:oe):(w.strstart>w.block_start&&(G(w,!1),w.strm.avail_out),E)}),new Fe(4,4,8,4,kt),new Fe(4,5,16,8,kt),new Fe(4,6,32,32,kt),new Fe(4,4,16,16,$e),new Fe(8,16,32,32,$e),new Fe(8,16,128,128,$e),new Fe(8,32,128,256,$e),new Fe(32,128,258,1024,$e),new Fe(32,258,258,4096,$e)],a.deflateInit=function(w,Q){return Kt(w,Q,M,15,8,0)},a.deflateInit2=Kt,a.deflateReset=Ft,a.deflateResetKeep=rt,a.deflateSetHeader=function(w,Q){return w&&w.state?w.state.wrap!==2?m:(w.state.gzhead=Q,g):m},a.deflate=function(w,Q){var V,O,I,D;if(!w||!w.state||5<Q||Q<0)return w?Me(w,m):m;if(O=w.state,!w.output||!w.input&&w.avail_in!==0||O.status===666&&Q!==v)return Me(w,w.avail_out===0?-5:m);if(O.strm=w,V=O.last_flush,O.last_flush=Q,O.status===R)if(O.wrap===2)w.adler=0,Se(O,31),Se(O,139),Se(O,8),O.gzhead?(Se(O,(O.gzhead.text?1:0)+(O.gzhead.hcrc?2:0)+(O.gzhead.extra?4:0)+(O.gzhead.name?8:0)+(O.gzhead.comment?16:0)),Se(O,255&O.gzhead.time),Se(O,O.gzhead.time>>8&255),Se(O,O.gzhead.time>>16&255),Se(O,O.gzhead.time>>24&255),Se(O,O.level===9?2:2<=O.strategy||O.level<2?4:0),Se(O,255&O.gzhead.os),O.gzhead.extra&&O.gzhead.extra.length&&(Se(O,255&O.gzhead.extra.length),Se(O,O.gzhead.extra.length>>8&255)),O.gzhead.hcrc&&(w.adler=h(w.adler,O.pending_buf,O.pending,0)),O.gzindex=0,O.status=69):(Se(O,0),Se(O,0),Se(O,0),Se(O,0),Se(O,0),Se(O,O.level===9?2:2<=O.strategy||O.level<2?4:0),Se(O,3),O.status=j);else{var re=M+(O.w_bits-8<<4)<<8;re|=(2<=O.strategy||O.level<2?0:O.level<6?1:O.level===6?2:3)<<6,O.strstart!==0&&(re|=32),re+=31-re%31,O.status=j,pe(O,re),O.strstart!==0&&(pe(O,w.adler>>>16),pe(O,65535&w.adler)),w.adler=1}if(O.status===69)if(O.gzhead.extra){for(I=O.pending;O.gzindex<(65535&O.gzhead.extra.length)&&(O.pending!==O.pending_buf_size||(O.gzhead.hcrc&&O.pending>I&&(w.adler=h(w.adler,O.pending_buf,O.pending-I,I)),F(w),I=O.pending,O.pending!==O.pending_buf_size));)Se(O,255&O.gzhead.extra[O.gzindex]),O.gzindex++;O.gzhead.hcrc&&O.pending>I&&(w.adler=h(w.adler,O.pending_buf,O.pending-I,I)),O.gzindex===O.gzhead.extra.length&&(O.gzindex=0,O.status=73)}else O.status=73;if(O.status===73)if(O.gzhead.name){I=O.pending;do{if(O.pending===O.pending_buf_size&&(O.gzhead.hcrc&&O.pending>I&&(w.adler=h(w.adler,O.pending_buf,O.pending-I,I)),F(w),I=O.pending,O.pending===O.pending_buf_size)){D=1;break}D=O.gzindex<O.gzhead.name.length?255&O.gzhead.name.charCodeAt(O.gzindex++):0,Se(O,D)}while(D!==0);O.gzhead.hcrc&&O.pending>I&&(w.adler=h(w.adler,O.pending_buf,O.pending-I,I)),D===0&&(O.gzindex=0,O.status=91)}else O.status=91;if(O.status===91)if(O.gzhead.comment){I=O.pending;do{if(O.pending===O.pending_buf_size&&(O.gzhead.hcrc&&O.pending>I&&(w.adler=h(w.adler,O.pending_buf,O.pending-I,I)),F(w),I=O.pending,O.pending===O.pending_buf_size)){D=1;break}D=O.gzindex<O.gzhead.comment.length?255&O.gzhead.comment.charCodeAt(O.gzindex++):0,Se(O,D)}while(D!==0);O.gzhead.hcrc&&O.pending>I&&(w.adler=h(w.adler,O.pending_buf,O.pending-I,I)),D===0&&(O.status=103)}else O.status=103;if(O.status===103&&(O.gzhead.hcrc?(O.pending+2>O.pending_buf_size&&F(w),O.pending+2<=O.pending_buf_size&&(Se(O,255&w.adler),Se(O,w.adler>>8&255),w.adler=0,O.status=j)):O.status=j),O.pending!==0){if(F(w),w.avail_out===0)return O.last_flush=-1,g}else if(w.avail_in===0&&ae(Q)<=ae(V)&&Q!==v)return Me(w,-5);if(O.status===666&&w.avail_in!==0)return Me(w,-5);if(w.avail_in!==0||O.lookahead!==0||Q!==b&&O.status!==666){var ne=O.strategy===2?(function(B,ce){for(var ve;;){if(B.lookahead===0&&(Ke(B),B.lookahead===0)){if(ce===b)return E;break}if(B.match_length=0,ve=d._tr_tally(B,0,B.window[B.strstart]),B.lookahead--,B.strstart++,ve&&(G(B,!1),B.strm.avail_out===0))return E}return B.insert=0,ce===v?(G(B,!0),B.strm.avail_out===0?xe:oe):B.last_lit&&(G(B,!1),B.strm.avail_out===0)?E:J})(O,Q):O.strategy===3?(function(B,ce){for(var ve,ue,Ae,Ze,Ne=B.window;;){if(B.lookahead<=fe){if(Ke(B),B.lookahead<=fe&&ce===b)return E;if(B.lookahead===0)break}if(B.match_length=0,B.lookahead>=H&&0<B.strstart&&(ue=Ne[Ae=B.strstart-1])===Ne[++Ae]&&ue===Ne[++Ae]&&ue===Ne[++Ae]){Ze=B.strstart+fe;do;while(ue===Ne[++Ae]&&ue===Ne[++Ae]&&ue===Ne[++Ae]&&ue===Ne[++Ae]&&ue===Ne[++Ae]&&ue===Ne[++Ae]&&ue===Ne[++Ae]&&ue===Ne[++Ae]&&Ae<Ze);B.match_length=fe-(Ze-Ae),B.match_length>B.lookahead&&(B.match_length=B.lookahead)}if(B.match_length>=H?(ve=d._tr_tally(B,1,B.match_length-H),B.lookahead-=B.match_length,B.strstart+=B.match_length,B.match_length=0):(ve=d._tr_tally(B,0,B.window[B.strstart]),B.lookahead--,B.strstart++),ve&&(G(B,!1),B.strm.avail_out===0))return E}return B.insert=0,ce===v?(G(B,!0),B.strm.avail_out===0?xe:oe):B.last_lit&&(G(B,!1),B.strm.avail_out===0)?E:J})(O,Q):s[O.level].func(O,Q);if(ne!==xe&&ne!==oe||(O.status=666),ne===E||ne===xe)return w.avail_out===0&&(O.last_flush=-1),g;if(ne===J&&(Q===1?d._tr_align(O):Q!==5&&(d._tr_stored_block(O,0,0,!1),Q===3&&(Ee(O.head),O.lookahead===0&&(O.strstart=0,O.block_start=0,O.insert=0))),F(w),w.avail_out===0))return O.last_flush=-1,g}return Q!==v?g:O.wrap<=0?1:(O.wrap===2?(Se(O,255&w.adler),Se(O,w.adler>>8&255),Se(O,w.adler>>16&255),Se(O,w.adler>>24&255),Se(O,255&w.total_in),Se(O,w.total_in>>8&255),Se(O,w.total_in>>16&255),Se(O,w.total_in>>24&255)):(pe(O,w.adler>>>16),pe(O,65535&w.adler)),F(w),0<O.wrap&&(O.wrap=-O.wrap),O.pending!==0?g:1)},a.deflateEnd=function(w){var Q;return w&&w.state?(Q=w.state.status)!==R&&Q!==69&&Q!==73&&Q!==91&&Q!==103&&Q!==j&&Q!==666?Me(w,m):(w.state=null,Q===j?Me(w,-3):g):m},a.deflateSetDictionary=function(w,Q){var V,O,I,D,re,ne,B,ce,ve=Q.length;if(!w||!w.state||(D=(V=w.state).wrap)===2||D===1&&V.status!==R||V.lookahead)return m;for(D===1&&(w.adler=u(w.adler,Q,ve,0)),V.wrap=0,ve>=V.w_size&&(D===0&&(Ee(V.head),V.strstart=0,V.block_start=0,V.insert=0),ce=new c.Buf8(V.w_size),c.arraySet(ce,Q,ve-V.w_size,V.w_size,0),Q=ce,ve=V.w_size),re=w.avail_in,ne=w.next_in,B=w.input,w.avail_in=ve,w.next_in=0,w.input=Q,Ke(V);V.lookahead>=H;){for(O=V.strstart,I=V.lookahead-(H-1);V.ins_h=(V.ins_h<<V.hash_shift^V.window[O+H-1])&V.hash_mask,V.prev[O&V.w_mask]=V.head[V.ins_h],V.head[V.ins_h]=O,O++,--I;);V.strstart=O,V.lookahead=H-1,Ke(V)}return V.strstart+=V.lookahead,V.block_start=V.strstart,V.insert=V.lookahead,V.lookahead=0,V.match_length=V.prev_length=H-1,V.match_available=0,w.next_in=ne,w.input=B,w.avail_in=re,V.wrap=D,g},a.deflateInfo="pako deflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./messages":51,"./trees":52}],47:[function(r,o,a){"use strict";o.exports=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}},{}],48:[function(r,o,a){"use strict";o.exports=function(s,c){var d=s.state,u=s.next_in,h,f,b,v,g,m,k,_,S,M,C,T,$,Z,U,ie,H,fe,we,R,j,E=s.input,J;h=u+(s.avail_in-5),f=s.next_out,J=s.output,b=f-(c-s.avail_out),v=f+(s.avail_out-257),g=d.dmax,m=d.wsize,k=d.whave,_=d.wnext,S=d.window,M=d.hold,C=d.bits,T=d.lencode,$=d.distcode,Z=(1<<d.lenbits)-1,U=(1<<d.distbits)-1;e:do{C<15&&(M+=E[u++]<<C,C+=8,M+=E[u++]<<C,C+=8),ie=T[M&Z];t:for(;;){if(M>>>=H=ie>>>24,C-=H,(H=ie>>>16&255)===0)J[f++]=65535&ie;else{if(!(16&H)){if((64&H)==0){ie=T[(65535&ie)+(M&(1<<H)-1)];continue t}if(32&H){d.mode=12;break e}s.msg="invalid literal/length code",d.mode=30;break e}fe=65535&ie,(H&=15)&&(C<H&&(M+=E[u++]<<C,C+=8),fe+=M&(1<<H)-1,M>>>=H,C-=H),C<15&&(M+=E[u++]<<C,C+=8,M+=E[u++]<<C,C+=8),ie=$[M&U];n:for(;;){if(M>>>=H=ie>>>24,C-=H,!(16&(H=ie>>>16&255))){if((64&H)==0){ie=$[(65535&ie)+(M&(1<<H)-1)];continue n}s.msg="invalid distance code",d.mode=30;break e}if(we=65535&ie,C<(H&=15)&&(M+=E[u++]<<C,(C+=8)<H&&(M+=E[u++]<<C,C+=8)),g<(we+=M&(1<<H)-1)){s.msg="invalid distance too far back",d.mode=30;break e}if(M>>>=H,C-=H,(H=f-b)<we){if(k<(H=we-H)&&d.sane){s.msg="invalid distance too far back",d.mode=30;break e}if(j=S,(R=0)===_){if(R+=m-H,H<fe){for(fe-=H;J[f++]=S[R++],--H;);R=f-we,j=J}}else if(_<H){if(R+=m+_-H,(H-=_)<fe){for(fe-=H;J[f++]=S[R++],--H;);if(R=0,_<fe){for(fe-=H=_;J[f++]=S[R++],--H;);R=f-we,j=J}}}else if(R+=_-H,H<fe){for(fe-=H;J[f++]=S[R++],--H;);R=f-we,j=J}for(;2<fe;)J[f++]=j[R++],J[f++]=j[R++],J[f++]=j[R++],fe-=3;fe&&(J[f++]=j[R++],1<fe&&(J[f++]=j[R++]))}else{for(R=f-we;J[f++]=J[R++],J[f++]=J[R++],J[f++]=J[R++],2<(fe-=3););fe&&(J[f++]=J[R++],1<fe&&(J[f++]=J[R++]))}break}}break}}while(u<h&&f<v);u-=fe=C>>3,M&=(1<<(C-=fe<<3))-1,s.next_in=u,s.next_out=f,s.avail_in=u<h?h-u+5:5-(u-h),s.avail_out=f<v?v-f+257:257-(f-v),d.hold=M,d.bits=C}},{}],49:[function(r,o,a){"use strict";var s=r("../utils/common"),c=r("./adler32"),d=r("./crc32"),u=r("./inffast"),h=r("./inftrees"),f=1,b=2,v=0,g=-2,m=1,k=852,_=592;function S(R){return(R>>>24&255)+(R>>>8&65280)+((65280&R)<<8)+((255&R)<<24)}function M(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new s.Buf16(320),this.work=new s.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function C(R){var j;return R&&R.state?(j=R.state,R.total_in=R.total_out=j.total=0,R.msg="",j.wrap&&(R.adler=1&j.wrap),j.mode=m,j.last=0,j.havedict=0,j.dmax=32768,j.head=null,j.hold=0,j.bits=0,j.lencode=j.lendyn=new s.Buf32(k),j.distcode=j.distdyn=new s.Buf32(_),j.sane=1,j.back=-1,v):g}function T(R){var j;return R&&R.state?((j=R.state).wsize=0,j.whave=0,j.wnext=0,C(R)):g}function $(R,j){var E,J;return R&&R.state?(J=R.state,j<0?(E=0,j=-j):(E=1+(j>>4),j<48&&(j&=15)),j&&(j<8||15<j)?g:(J.window!==null&&J.wbits!==j&&(J.window=null),J.wrap=E,J.wbits=j,T(R))):g}function Z(R,j){var E,J;return R?(J=new M,(R.state=J).window=null,(E=$(R,j))!==v&&(R.state=null),E):g}var U,ie,H=!0;function fe(R){if(H){var j;for(U=new s.Buf32(512),ie=new s.Buf32(32),j=0;j<144;)R.lens[j++]=8;for(;j<256;)R.lens[j++]=9;for(;j<280;)R.lens[j++]=7;for(;j<288;)R.lens[j++]=8;for(h(f,R.lens,0,288,U,0,R.work,{bits:9}),j=0;j<32;)R.lens[j++]=5;h(b,R.lens,0,32,ie,0,R.work,{bits:5}),H=!1}R.lencode=U,R.lenbits=9,R.distcode=ie,R.distbits=5}function we(R,j,E,J){var xe,oe=R.state;return oe.window===null&&(oe.wsize=1<<oe.wbits,oe.wnext=0,oe.whave=0,oe.window=new s.Buf8(oe.wsize)),J>=oe.wsize?(s.arraySet(oe.window,j,E-oe.wsize,oe.wsize,0),oe.wnext=0,oe.whave=oe.wsize):(J<(xe=oe.wsize-oe.wnext)&&(xe=J),s.arraySet(oe.window,j,E-J,xe,oe.wnext),(J-=xe)?(s.arraySet(oe.window,j,E-J,J,0),oe.wnext=J,oe.whave=oe.wsize):(oe.wnext+=xe,oe.wnext===oe.wsize&&(oe.wnext=0),oe.whave<oe.wsize&&(oe.whave+=xe))),0}a.inflateReset=T,a.inflateReset2=$,a.inflateResetKeep=C,a.inflateInit=function(R){return Z(R,15)},a.inflateInit2=Z,a.inflate=function(R,j){var E,J,xe,oe,Me,ae,Ee,F,G,Se,pe,de,Ke,kt,$e,Fe,Et,rt,Ft,Kt,w,Q,V,O,I=0,D=new s.Buf8(4),re=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!R||!R.state||!R.output||!R.input&&R.avail_in!==0)return g;(E=R.state).mode===12&&(E.mode=13),Me=R.next_out,xe=R.output,Ee=R.avail_out,oe=R.next_in,J=R.input,ae=R.avail_in,F=E.hold,G=E.bits,Se=ae,pe=Ee,Q=v;e:for(;;)switch(E.mode){case m:if(E.wrap===0){E.mode=13;break}for(;G<16;){if(ae===0)break e;ae--,F+=J[oe++]<<G,G+=8}if(2&E.wrap&&F===35615){D[E.check=0]=255&F,D[1]=F>>>8&255,E.check=d(E.check,D,2,0),G=F=0,E.mode=2;break}if(E.flags=0,E.head&&(E.head.done=!1),!(1&E.wrap)||(((255&F)<<8)+(F>>8))%31){R.msg="incorrect header check",E.mode=30;break}if((15&F)!=8){R.msg="unknown compression method",E.mode=30;break}if(G-=4,w=8+(15&(F>>>=4)),E.wbits===0)E.wbits=w;else if(w>E.wbits){R.msg="invalid window size",E.mode=30;break}E.dmax=1<<w,R.adler=E.check=1,E.mode=512&F?10:12,G=F=0;break;case 2:for(;G<16;){if(ae===0)break e;ae--,F+=J[oe++]<<G,G+=8}if(E.flags=F,(255&E.flags)!=8){R.msg="unknown compression method",E.mode=30;break}if(57344&E.flags){R.msg="unknown header flags set",E.mode=30;break}E.head&&(E.head.text=F>>8&1),512&E.flags&&(D[0]=255&F,D[1]=F>>>8&255,E.check=d(E.check,D,2,0)),G=F=0,E.mode=3;case 3:for(;G<32;){if(ae===0)break e;ae--,F+=J[oe++]<<G,G+=8}E.head&&(E.head.time=F),512&E.flags&&(D[0]=255&F,D[1]=F>>>8&255,D[2]=F>>>16&255,D[3]=F>>>24&255,E.check=d(E.check,D,4,0)),G=F=0,E.mode=4;case 4:for(;G<16;){if(ae===0)break e;ae--,F+=J[oe++]<<G,G+=8}E.head&&(E.head.xflags=255&F,E.head.os=F>>8),512&E.flags&&(D[0]=255&F,D[1]=F>>>8&255,E.check=d(E.check,D,2,0)),G=F=0,E.mode=5;case 5:if(1024&E.flags){for(;G<16;){if(ae===0)break e;ae--,F+=J[oe++]<<G,G+=8}E.length=F,E.head&&(E.head.extra_len=F),512&E.flags&&(D[0]=255&F,D[1]=F>>>8&255,E.check=d(E.check,D,2,0)),G=F=0}else E.head&&(E.head.extra=null);E.mode=6;case 6:if(1024&E.flags&&(ae<(de=E.length)&&(de=ae),de&&(E.head&&(w=E.head.extra_len-E.length,E.head.extra||(E.head.extra=new Array(E.head.extra_len)),s.arraySet(E.head.extra,J,oe,de,w)),512&E.flags&&(E.check=d(E.check,J,de,oe)),ae-=de,oe+=de,E.length-=de),E.length))break e;E.length=0,E.mode=7;case 7:if(2048&E.flags){if(ae===0)break e;for(de=0;w=J[oe+de++],E.head&&w&&E.length<65536&&(E.head.name+=String.fromCharCode(w)),w&&de<ae;);if(512&E.flags&&(E.check=d(E.check,J,de,oe)),ae-=de,oe+=de,w)break e}else E.head&&(E.head.name=null);E.length=0,E.mode=8;case 8:if(4096&E.flags){if(ae===0)break e;for(de=0;w=J[oe+de++],E.head&&w&&E.length<65536&&(E.head.comment+=String.fromCharCode(w)),w&&de<ae;);if(512&E.flags&&(E.check=d(E.check,J,de,oe)),ae-=de,oe+=de,w)break e}else E.head&&(E.head.comment=null);E.mode=9;case 9:if(512&E.flags){for(;G<16;){if(ae===0)break e;ae--,F+=J[oe++]<<G,G+=8}if(F!==(65535&E.check)){R.msg="header crc mismatch",E.mode=30;break}G=F=0}E.head&&(E.head.hcrc=E.flags>>9&1,E.head.done=!0),R.adler=E.check=0,E.mode=12;break;case 10:for(;G<32;){if(ae===0)break e;ae--,F+=J[oe++]<<G,G+=8}R.adler=E.check=S(F),G=F=0,E.mode=11;case 11:if(E.havedict===0)return R.next_out=Me,R.avail_out=Ee,R.next_in=oe,R.avail_in=ae,E.hold=F,E.bits=G,2;R.adler=E.check=1,E.mode=12;case 12:if(j===5||j===6)break e;case 13:if(E.last){F>>>=7&G,G-=7&G,E.mode=27;break}for(;G<3;){if(ae===0)break e;ae--,F+=J[oe++]<<G,G+=8}switch(E.last=1&F,G-=1,3&(F>>>=1)){case 0:E.mode=14;break;case 1:if(fe(E),E.mode=20,j!==6)break;F>>>=2,G-=2;break e;case 2:E.mode=17;break;case 3:R.msg="invalid block type",E.mode=30}F>>>=2,G-=2;break;case 14:for(F>>>=7&G,G-=7&G;G<32;){if(ae===0)break e;ae--,F+=J[oe++]<<G,G+=8}if((65535&F)!=(F>>>16^65535)){R.msg="invalid stored block lengths",E.mode=30;break}if(E.length=65535&F,G=F=0,E.mode=15,j===6)break e;case 15:E.mode=16;case 16:if(de=E.length){if(ae<de&&(de=ae),Ee<de&&(de=Ee),de===0)break e;s.arraySet(xe,J,oe,de,Me),ae-=de,oe+=de,Ee-=de,Me+=de,E.length-=de;break}E.mode=12;break;case 17:for(;G<14;){if(ae===0)break e;ae--,F+=J[oe++]<<G,G+=8}if(E.nlen=257+(31&F),F>>>=5,G-=5,E.ndist=1+(31&F),F>>>=5,G-=5,E.ncode=4+(15&F),F>>>=4,G-=4,286<E.nlen||30<E.ndist){R.msg="too many length or distance symbols",E.mode=30;break}E.have=0,E.mode=18;case 18:for(;E.have<E.ncode;){for(;G<3;){if(ae===0)break e;ae--,F+=J[oe++]<<G,G+=8}E.lens[re[E.have++]]=7&F,F>>>=3,G-=3}for(;E.have<19;)E.lens[re[E.have++]]=0;if(E.lencode=E.lendyn,E.lenbits=7,V={bits:E.lenbits},Q=h(0,E.lens,0,19,E.lencode,0,E.work,V),E.lenbits=V.bits,Q){R.msg="invalid code lengths set",E.mode=30;break}E.have=0,E.mode=19;case 19:for(;E.have<E.nlen+E.ndist;){for(;Fe=(I=E.lencode[F&(1<<E.lenbits)-1])>>>16&255,Et=65535&I,!(($e=I>>>24)<=G);){if(ae===0)break e;ae--,F+=J[oe++]<<G,G+=8}if(Et<16)F>>>=$e,G-=$e,E.lens[E.have++]=Et;else{if(Et===16){for(O=$e+2;G<O;){if(ae===0)break e;ae--,F+=J[oe++]<<G,G+=8}if(F>>>=$e,G-=$e,E.have===0){R.msg="invalid bit length repeat",E.mode=30;break}w=E.lens[E.have-1],de=3+(3&F),F>>>=2,G-=2}else if(Et===17){for(O=$e+3;G<O;){if(ae===0)break e;ae--,F+=J[oe++]<<G,G+=8}G-=$e,w=0,de=3+(7&(F>>>=$e)),F>>>=3,G-=3}else{for(O=$e+7;G<O;){if(ae===0)break e;ae--,F+=J[oe++]<<G,G+=8}G-=$e,w=0,de=11+(127&(F>>>=$e)),F>>>=7,G-=7}if(E.have+de>E.nlen+E.ndist){R.msg="invalid bit length repeat",E.mode=30;break}for(;de--;)E.lens[E.have++]=w}}if(E.mode===30)break;if(E.lens[256]===0){R.msg="invalid code -- missing end-of-block",E.mode=30;break}if(E.lenbits=9,V={bits:E.lenbits},Q=h(f,E.lens,0,E.nlen,E.lencode,0,E.work,V),E.lenbits=V.bits,Q){R.msg="invalid literal/lengths set",E.mode=30;break}if(E.distbits=6,E.distcode=E.distdyn,V={bits:E.distbits},Q=h(b,E.lens,E.nlen,E.ndist,E.distcode,0,E.work,V),E.distbits=V.bits,Q){R.msg="invalid distances set",E.mode=30;break}if(E.mode=20,j===6)break e;case 20:E.mode=21;case 21:if(6<=ae&&258<=Ee){R.next_out=Me,R.avail_out=Ee,R.next_in=oe,R.avail_in=ae,E.hold=F,E.bits=G,u(R,pe),Me=R.next_out,xe=R.output,Ee=R.avail_out,oe=R.next_in,J=R.input,ae=R.avail_in,F=E.hold,G=E.bits,E.mode===12&&(E.back=-1);break}for(E.back=0;Fe=(I=E.lencode[F&(1<<E.lenbits)-1])>>>16&255,Et=65535&I,!(($e=I>>>24)<=G);){if(ae===0)break e;ae--,F+=J[oe++]<<G,G+=8}if(Fe&&(240&Fe)==0){for(rt=$e,Ft=Fe,Kt=Et;Fe=(I=E.lencode[Kt+((F&(1<<rt+Ft)-1)>>rt)])>>>16&255,Et=65535&I,!(rt+($e=I>>>24)<=G);){if(ae===0)break e;ae--,F+=J[oe++]<<G,G+=8}F>>>=rt,G-=rt,E.back+=rt}if(F>>>=$e,G-=$e,E.back+=$e,E.length=Et,Fe===0){E.mode=26;break}if(32&Fe){E.back=-1,E.mode=12;break}if(64&Fe){R.msg="invalid literal/length code",E.mode=30;break}E.extra=15&Fe,E.mode=22;case 22:if(E.extra){for(O=E.extra;G<O;){if(ae===0)break e;ae--,F+=J[oe++]<<G,G+=8}E.length+=F&(1<<E.extra)-1,F>>>=E.extra,G-=E.extra,E.back+=E.extra}E.was=E.length,E.mode=23;case 23:for(;Fe=(I=E.distcode[F&(1<<E.distbits)-1])>>>16&255,Et=65535&I,!(($e=I>>>24)<=G);){if(ae===0)break e;ae--,F+=J[oe++]<<G,G+=8}if((240&Fe)==0){for(rt=$e,Ft=Fe,Kt=Et;Fe=(I=E.distcode[Kt+((F&(1<<rt+Ft)-1)>>rt)])>>>16&255,Et=65535&I,!(rt+($e=I>>>24)<=G);){if(ae===0)break e;ae--,F+=J[oe++]<<G,G+=8}F>>>=rt,G-=rt,E.back+=rt}if(F>>>=$e,G-=$e,E.back+=$e,64&Fe){R.msg="invalid distance code",E.mode=30;break}E.offset=Et,E.extra=15&Fe,E.mode=24;case 24:if(E.extra){for(O=E.extra;G<O;){if(ae===0)break e;ae--,F+=J[oe++]<<G,G+=8}E.offset+=F&(1<<E.extra)-1,F>>>=E.extra,G-=E.extra,E.back+=E.extra}if(E.offset>E.dmax){R.msg="invalid distance too far back",E.mode=30;break}E.mode=25;case 25:if(Ee===0)break e;if(de=pe-Ee,E.offset>de){if((de=E.offset-de)>E.whave&&E.sane){R.msg="invalid distance too far back",E.mode=30;break}Ke=de>E.wnext?(de-=E.wnext,E.wsize-de):E.wnext-de,de>E.length&&(de=E.length),kt=E.window}else kt=xe,Ke=Me-E.offset,de=E.length;for(Ee<de&&(de=Ee),Ee-=de,E.length-=de;xe[Me++]=kt[Ke++],--de;);E.length===0&&(E.mode=21);break;case 26:if(Ee===0)break e;xe[Me++]=E.length,Ee--,E.mode=21;break;case 27:if(E.wrap){for(;G<32;){if(ae===0)break e;ae--,F|=J[oe++]<<G,G+=8}if(pe-=Ee,R.total_out+=pe,E.total+=pe,pe&&(R.adler=E.check=E.flags?d(E.check,xe,pe,Me-pe):c(E.check,xe,pe,Me-pe)),pe=Ee,(E.flags?F:S(F))!==E.check){R.msg="incorrect data check",E.mode=30;break}G=F=0}E.mode=28;case 28:if(E.wrap&&E.flags){for(;G<32;){if(ae===0)break e;ae--,F+=J[oe++]<<G,G+=8}if(F!==(4294967295&E.total)){R.msg="incorrect length check",E.mode=30;break}G=F=0}E.mode=29;case 29:Q=1;break e;case 30:Q=-3;break e;case 31:return-4;default:return g}return R.next_out=Me,R.avail_out=Ee,R.next_in=oe,R.avail_in=ae,E.hold=F,E.bits=G,(E.wsize||pe!==R.avail_out&&E.mode<30&&(E.mode<27||j!==4))&&we(R,R.output,R.next_out,pe-R.avail_out)?(E.mode=31,-4):(Se-=R.avail_in,pe-=R.avail_out,R.total_in+=Se,R.total_out+=pe,E.total+=pe,E.wrap&&pe&&(R.adler=E.check=E.flags?d(E.check,xe,pe,R.next_out-pe):c(E.check,xe,pe,R.next_out-pe)),R.data_type=E.bits+(E.last?64:0)+(E.mode===12?128:0)+(E.mode===20||E.mode===15?256:0),(Se==0&&pe===0||j===4)&&Q===v&&(Q=-5),Q)},a.inflateEnd=function(R){if(!R||!R.state)return g;var j=R.state;return j.window&&(j.window=null),R.state=null,v},a.inflateGetHeader=function(R,j){var E;return R&&R.state?(2&(E=R.state).wrap)==0?g:((E.head=j).done=!1,v):g},a.inflateSetDictionary=function(R,j){var E,J=j.length;return R&&R.state?(E=R.state).wrap!==0&&E.mode!==11?g:E.mode===11&&c(1,j,J,0)!==E.check?-3:we(R,j,J,J)?(E.mode=31,-4):(E.havedict=1,v):g},a.inflateInfo="pako inflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./inffast":48,"./inftrees":50}],50:[function(r,o,a){"use strict";var s=r("../utils/common"),c=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],d=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],u=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],h=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];o.exports=function(f,b,v,g,m,k,_,S){var M,C,T,$,Z,U,ie,H,fe,we=S.bits,R=0,j=0,E=0,J=0,xe=0,oe=0,Me=0,ae=0,Ee=0,F=0,G=null,Se=0,pe=new s.Buf16(16),de=new s.Buf16(16),Ke=null,kt=0;for(R=0;R<=15;R++)pe[R]=0;for(j=0;j<g;j++)pe[b[v+j]]++;for(xe=we,J=15;1<=J&&pe[J]===0;J--);if(J<xe&&(xe=J),J===0)return m[k++]=20971520,m[k++]=20971520,S.bits=1,0;for(E=1;E<J&&pe[E]===0;E++);for(xe<E&&(xe=E),R=ae=1;R<=15;R++)if(ae<<=1,(ae-=pe[R])<0)return-1;if(0<ae&&(f===0||J!==1))return-1;for(de[1]=0,R=1;R<15;R++)de[R+1]=de[R]+pe[R];for(j=0;j<g;j++)b[v+j]!==0&&(_[de[b[v+j]]++]=j);if(U=f===0?(G=Ke=_,19):f===1?(G=c,Se-=257,Ke=d,kt-=257,256):(G=u,Ke=h,-1),R=E,Z=k,Me=j=F=0,T=-1,$=(Ee=1<<(oe=xe))-1,f===1&&852<Ee||f===2&&592<Ee)return 1;for(;;){for(ie=R-Me,fe=_[j]<U?(H=0,_[j]):_[j]>U?(H=Ke[kt+_[j]],G[Se+_[j]]):(H=96,0),M=1<<R-Me,E=C=1<<oe;m[Z+(F>>Me)+(C-=M)]=ie<<24|H<<16|fe|0,C!==0;);for(M=1<<R-1;F&M;)M>>=1;if(M!==0?(F&=M-1,F+=M):F=0,j++,--pe[R]==0){if(R===J)break;R=b[v+_[j]]}if(xe<R&&(F&$)!==T){for(Me===0&&(Me=xe),Z+=E,ae=1<<(oe=R-Me);oe+Me<J&&!((ae-=pe[oe+Me])<=0);)oe++,ae<<=1;if(Ee+=1<<oe,f===1&&852<Ee||f===2&&592<Ee)return 1;m[T=F&$]=xe<<24|oe<<16|Z-k|0}}return F!==0&&(m[Z+F]=R-Me<<24|4194304),S.bits=xe,0}},{"../utils/common":41}],51:[function(r,o,a){"use strict";o.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},{}],52:[function(r,o,a){"use strict";var s=r("../utils/common"),c=0,d=1;function u(I){for(var D=I.length;0<=--D;)I[D]=0}var h=0,f=29,b=256,v=b+1+f,g=30,m=19,k=2*v+1,_=15,S=16,M=7,C=256,T=16,$=17,Z=18,U=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],ie=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],H=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],fe=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],we=new Array(2*(v+2));u(we);var R=new Array(2*g);u(R);var j=new Array(512);u(j);var E=new Array(256);u(E);var J=new Array(f);u(J);var xe,oe,Me,ae=new Array(g);function Ee(I,D,re,ne,B){this.static_tree=I,this.extra_bits=D,this.extra_base=re,this.elems=ne,this.max_length=B,this.has_stree=I&&I.length}function F(I,D){this.dyn_tree=I,this.max_code=0,this.stat_desc=D}function G(I){return I<256?j[I]:j[256+(I>>>7)]}function Se(I,D){I.pending_buf[I.pending++]=255&D,I.pending_buf[I.pending++]=D>>>8&255}function pe(I,D,re){I.bi_valid>S-re?(I.bi_buf|=D<<I.bi_valid&65535,Se(I,I.bi_buf),I.bi_buf=D>>S-I.bi_valid,I.bi_valid+=re-S):(I.bi_buf|=D<<I.bi_valid&65535,I.bi_valid+=re)}function de(I,D,re){pe(I,re[2*D],re[2*D+1])}function Ke(I,D){for(var re=0;re|=1&I,I>>>=1,re<<=1,0<--D;);return re>>>1}function kt(I,D,re){var ne,B,ce=new Array(_+1),ve=0;for(ne=1;ne<=_;ne++)ce[ne]=ve=ve+re[ne-1]<<1;for(B=0;B<=D;B++){var ue=I[2*B+1];ue!==0&&(I[2*B]=Ke(ce[ue]++,ue))}}function $e(I){var D;for(D=0;D<v;D++)I.dyn_ltree[2*D]=0;for(D=0;D<g;D++)I.dyn_dtree[2*D]=0;for(D=0;D<m;D++)I.bl_tree[2*D]=0;I.dyn_ltree[2*C]=1,I.opt_len=I.static_len=0,I.last_lit=I.matches=0}function Fe(I){8<I.bi_valid?Se(I,I.bi_buf):0<I.bi_valid&&(I.pending_buf[I.pending++]=I.bi_buf),I.bi_buf=0,I.bi_valid=0}function Et(I,D,re,ne){var B=2*D,ce=2*re;return I[B]<I[ce]||I[B]===I[ce]&&ne[D]<=ne[re]}function rt(I,D,re){for(var ne=I.heap[re],B=re<<1;B<=I.heap_len&&(B<I.heap_len&&Et(D,I.heap[B+1],I.heap[B],I.depth)&&B++,!Et(D,ne,I.heap[B],I.depth));)I.heap[re]=I.heap[B],re=B,B<<=1;I.heap[re]=ne}function Ft(I,D,re){var ne,B,ce,ve,ue=0;if(I.last_lit!==0)for(;ne=I.pending_buf[I.d_buf+2*ue]<<8|I.pending_buf[I.d_buf+2*ue+1],B=I.pending_buf[I.l_buf+ue],ue++,ne===0?de(I,B,D):(de(I,(ce=E[B])+b+1,D),(ve=U[ce])!==0&&pe(I,B-=J[ce],ve),de(I,ce=G(--ne),re),(ve=ie[ce])!==0&&pe(I,ne-=ae[ce],ve)),ue<I.last_lit;);de(I,C,D)}function Kt(I,D){var re,ne,B,ce=D.dyn_tree,ve=D.stat_desc.static_tree,ue=D.stat_desc.has_stree,Ae=D.stat_desc.elems,Ze=-1;for(I.heap_len=0,I.heap_max=k,re=0;re<Ae;re++)ce[2*re]!==0?(I.heap[++I.heap_len]=Ze=re,I.depth[re]=0):ce[2*re+1]=0;for(;I.heap_len<2;)ce[2*(B=I.heap[++I.heap_len]=Ze<2?++Ze:0)]=1,I.depth[B]=0,I.opt_len--,ue&&(I.static_len-=ve[2*B+1]);for(D.max_code=Ze,re=I.heap_len>>1;1<=re;re--)rt(I,ce,re);for(B=Ae;re=I.heap[1],I.heap[1]=I.heap[I.heap_len--],rt(I,ce,1),ne=I.heap[1],I.heap[--I.heap_max]=re,I.heap[--I.heap_max]=ne,ce[2*B]=ce[2*re]+ce[2*ne],I.depth[B]=(I.depth[re]>=I.depth[ne]?I.depth[re]:I.depth[ne])+1,ce[2*re+1]=ce[2*ne+1]=B,I.heap[1]=B++,rt(I,ce,1),2<=I.heap_len;);I.heap[--I.heap_max]=I.heap[1],(function(Ne,Dt){var Kn,Yt,Yn,at,vr,Ur,cn=Dt.dyn_tree,ki=Dt.max_code,zl=Dt.stat_desc.static_tree,Dl=Dt.stat_desc.has_stree,Nl=Dt.stat_desc.extra_bits,wo=Dt.stat_desc.extra_base,br=Dt.stat_desc.max_length,Ei=0;for(at=0;at<=_;at++)Ne.bl_count[at]=0;for(cn[2*Ne.heap[Ne.heap_max]+1]=0,Kn=Ne.heap_max+1;Kn<k;Kn++)br<(at=cn[2*cn[2*(Yt=Ne.heap[Kn])+1]+1]+1)&&(at=br,Ei++),cn[2*Yt+1]=at,ki<Yt||(Ne.bl_count[at]++,vr=0,wo<=Yt&&(vr=Nl[Yt-wo]),Ur=cn[2*Yt],Ne.opt_len+=Ur*(at+vr),Dl&&(Ne.static_len+=Ur*(zl[2*Yt+1]+vr)));if(Ei!==0){do{for(at=br-1;Ne.bl_count[at]===0;)at--;Ne.bl_count[at]--,Ne.bl_count[at+1]+=2,Ne.bl_count[br]--,Ei-=2}while(0<Ei);for(at=br;at!==0;at--)for(Yt=Ne.bl_count[at];Yt!==0;)ki<(Yn=Ne.heap[--Kn])||(cn[2*Yn+1]!==at&&(Ne.opt_len+=(at-cn[2*Yn+1])*cn[2*Yn],cn[2*Yn+1]=at),Yt--)}})(I,D),kt(ce,Ze,I.bl_count)}function w(I,D,re){var ne,B,ce=-1,ve=D[1],ue=0,Ae=7,Ze=4;for(ve===0&&(Ae=138,Ze=3),D[2*(re+1)+1]=65535,ne=0;ne<=re;ne++)B=ve,ve=D[2*(ne+1)+1],++ue<Ae&&B===ve||(ue<Ze?I.bl_tree[2*B]+=ue:B!==0?(B!==ce&&I.bl_tree[2*B]++,I.bl_tree[2*T]++):ue<=10?I.bl_tree[2*$]++:I.bl_tree[2*Z]++,ce=B,Ze=(ue=0)===ve?(Ae=138,3):B===ve?(Ae=6,3):(Ae=7,4))}function Q(I,D,re){var ne,B,ce=-1,ve=D[1],ue=0,Ae=7,Ze=4;for(ve===0&&(Ae=138,Ze=3),ne=0;ne<=re;ne++)if(B=ve,ve=D[2*(ne+1)+1],!(++ue<Ae&&B===ve)){if(ue<Ze)for(;de(I,B,I.bl_tree),--ue!=0;);else B!==0?(B!==ce&&(de(I,B,I.bl_tree),ue--),de(I,T,I.bl_tree),pe(I,ue-3,2)):ue<=10?(de(I,$,I.bl_tree),pe(I,ue-3,3)):(de(I,Z,I.bl_tree),pe(I,ue-11,7));ce=B,Ze=(ue=0)===ve?(Ae=138,3):B===ve?(Ae=6,3):(Ae=7,4)}}u(ae);var V=!1;function O(I,D,re,ne){pe(I,(h<<1)+(ne?1:0),3),(function(B,ce,ve,ue){Fe(B),ue&&(Se(B,ve),Se(B,~ve)),s.arraySet(B.pending_buf,B.window,ce,ve,B.pending),B.pending+=ve})(I,D,re,!0)}a._tr_init=function(I){V||((function(){var D,re,ne,B,ce,ve=new Array(_+1);for(B=ne=0;B<f-1;B++)for(J[B]=ne,D=0;D<1<<U[B];D++)E[ne++]=B;for(E[ne-1]=B,B=ce=0;B<16;B++)for(ae[B]=ce,D=0;D<1<<ie[B];D++)j[ce++]=B;for(ce>>=7;B<g;B++)for(ae[B]=ce<<7,D=0;D<1<<ie[B]-7;D++)j[256+ce++]=B;for(re=0;re<=_;re++)ve[re]=0;for(D=0;D<=143;)we[2*D+1]=8,D++,ve[8]++;for(;D<=255;)we[2*D+1]=9,D++,ve[9]++;for(;D<=279;)we[2*D+1]=7,D++,ve[7]++;for(;D<=287;)we[2*D+1]=8,D++,ve[8]++;for(kt(we,v+1,ve),D=0;D<g;D++)R[2*D+1]=5,R[2*D]=Ke(D,5);xe=new Ee(we,U,b+1,v,_),oe=new Ee(R,ie,0,g,_),Me=new Ee(new Array(0),H,0,m,M)})(),V=!0),I.l_desc=new F(I.dyn_ltree,xe),I.d_desc=new F(I.dyn_dtree,oe),I.bl_desc=new F(I.bl_tree,Me),I.bi_buf=0,I.bi_valid=0,$e(I)},a._tr_stored_block=O,a._tr_flush_block=function(I,D,re,ne){var B,ce,ve=0;0<I.level?(I.strm.data_type===2&&(I.strm.data_type=(function(ue){var Ae,Ze=4093624447;for(Ae=0;Ae<=31;Ae++,Ze>>>=1)if(1&Ze&&ue.dyn_ltree[2*Ae]!==0)return c;if(ue.dyn_ltree[18]!==0||ue.dyn_ltree[20]!==0||ue.dyn_ltree[26]!==0)return d;for(Ae=32;Ae<b;Ae++)if(ue.dyn_ltree[2*Ae]!==0)return d;return c})(I)),Kt(I,I.l_desc),Kt(I,I.d_desc),ve=(function(ue){var Ae;for(w(ue,ue.dyn_ltree,ue.l_desc.max_code),w(ue,ue.dyn_dtree,ue.d_desc.max_code),Kt(ue,ue.bl_desc),Ae=m-1;3<=Ae&&ue.bl_tree[2*fe[Ae]+1]===0;Ae--);return ue.opt_len+=3*(Ae+1)+5+5+4,Ae})(I),B=I.opt_len+3+7>>>3,(ce=I.static_len+3+7>>>3)<=B&&(B=ce)):B=ce=re+5,re+4<=B&&D!==-1?O(I,D,re,ne):I.strategy===4||ce===B?(pe(I,2+(ne?1:0),3),Ft(I,we,R)):(pe(I,4+(ne?1:0),3),(function(ue,Ae,Ze,Ne){var Dt;for(pe(ue,Ae-257,5),pe(ue,Ze-1,5),pe(ue,Ne-4,4),Dt=0;Dt<Ne;Dt++)pe(ue,ue.bl_tree[2*fe[Dt]+1],3);Q(ue,ue.dyn_ltree,Ae-1),Q(ue,ue.dyn_dtree,Ze-1)})(I,I.l_desc.max_code+1,I.d_desc.max_code+1,ve+1),Ft(I,I.dyn_ltree,I.dyn_dtree)),$e(I),ne&&Fe(I)},a._tr_tally=function(I,D,re){return I.pending_buf[I.d_buf+2*I.last_lit]=D>>>8&255,I.pending_buf[I.d_buf+2*I.last_lit+1]=255&D,I.pending_buf[I.l_buf+I.last_lit]=255&re,I.last_lit++,D===0?I.dyn_ltree[2*re]++:(I.matches++,D--,I.dyn_ltree[2*(E[re]+b+1)]++,I.dyn_dtree[2*G(D)]++),I.last_lit===I.lit_bufsize-1},a._tr_align=function(I){pe(I,2,3),de(I,C,we),(function(D){D.bi_valid===16?(Se(D,D.bi_buf),D.bi_buf=0,D.bi_valid=0):8<=D.bi_valid&&(D.pending_buf[D.pending++]=255&D.bi_buf,D.bi_buf>>=8,D.bi_valid-=8)})(I)}},{"../utils/common":41}],53:[function(r,o,a){"use strict";o.exports=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}},{}],54:[function(r,o,a){"use strict";o.exports=typeof setImmediate=="function"?setImmediate:function(){var s=[].slice.apply(arguments);s.splice(1,0,0),setTimeout.apply(null,s)}},{}]},{},[10])(10)})})),zu=zo(Fp(),1),Du=(e,...t)=>t.length===0?e[0]:String.raw({raw:e},...t),ri=Du,Nu=Du;function qi(e,t){let r=e.length,o,a,s=!1,c=!1;Array.isArray(e[0])?o=e:(o=[e],r=o.length,s=!0),Array.isArray(t[0])?a=t:(a=t.length>0?t.map(f=>[f]):[[]],c=!0);let d=a[0].length,u=a[0].map((f,b)=>a.map(v=>v[b])),h=o.map(f=>u.map(b=>{let v=0;if(!Array.isArray(f)){for(let g of b)v+=f*g;return v}for(let g=0;g<f.length;g++)v+=f[g]*(b[g]||0);return v}));return r===1&&s&&(h=h[0]),d===1&&c?r===1&&s?h[0]:h.map(f=>f[0]):h}function $s(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]}function ft(e,t,r=[0,0,0]){const o=$s(e,t[0]),a=$s(e,t[1]),s=$s(e,t[2]);return r[0]=o,r[1]=a,r[2]=s,r}function ii(e){return sr(e)==="string"}function sr(e){return(Object.prototype.toString.call(e).match(/^\[object\s+(.*?)\]$/)[1]||"").toLowerCase()}function zs(e,{precision:t=16,unit:r}){return je(e)?"none":(e=+Ds(e,t),e+(r??""))}function je(e){return e===null}function wt(e){return je(e)?0:e}function Ds(e,t){if(e===0)return 0;let r=~~e,o=0;r&&t&&(o=~~Math.log10(Math.abs(r))+1);const a=10**(t-o);return Math.floor(e*a+.5)/a}function Ki(e,t,r){return isNaN(e)?t:isNaN(t)?e:e+(t-e)*r}function Bu(e,t,r){return(r-e)/(t-e)}function Ns(e,t,r){return!e||!t||e===t||e[0]===t[0]&&e[1]===t[1]||isNaN(r)||r===null?r:Ki(t[0],t[1],Bu(e[0],e[1],r))}function jo(e,t,r){return Math.max(Math.min(r,t),e)}function qo(e,t){return Math.sign(e)===Math.sign(t)?e:-e}function _t(e,t){return qo(Math.abs(e)**t,e)}function Bs(e,t){return t===0?0:e/t}function Hu(e,t,r=0,o=e.length){for(;r<o;){const a=r+o>>1;e[a]<t?r=a+1:o=a}return r}function oi(e,t){if(e instanceof t)return!0;const r=t.name;for(;e;){const o=Object.getPrototypeOf(e),a=o?.constructor?.name;if(a===r)return!0;if(!a||a==="Object")return!1;e=o}return!1}var Gp=Object.freeze({__proto__:null,bisectLeft:Hu,clamp:jo,copySign:qo,interpolate:Ki,interpolateInv:Bu,isInstance:oi,isNone:je,isString:ii,mapRange:Ns,multiplyMatrices:qi,multiply_v3_m3x3:ft,serializeNumber:zs,skipNone:wt,spow:_t,toPrecision:Ds,type:sr,zdiv:Bs}),Up=class{add(e,t,r){if(typeof arguments[0]!="string"){for(var e in arguments[0])this.add(e,arguments[0][e],arguments[1]);return}(Array.isArray(e)?e:[e]).forEach(function(o){this[o]=this[o]||[],t&&this[o][r?"unshift":"push"](t)},this)}run(e,t){this[e]=this[e]||[],this[e].forEach(function(r){r.call(t&&t.context?t.context:t,t)})}},lr=new Up,nn={gamut_mapping:"css",precision:5,deltaE:"76",verbose:"production".toLowerCase()!=="test",warn:function(t){this.verbose&&globalThis?.console?.warn?.(t)}},Fu=class{type;coordMeta;coordRange;range;constructor(e,t){if(typeof e=="object"&&(this.coordMeta=e),t&&(this.coordMeta=t,this.coordRange=t.range??t.refRange),typeof e=="string"){let r=e.trim().match(/^(?<type><[a-z]+>)(\[(?<min>-?[.\d]+),\s*(?<max>-?[.\d]+)\])?$/);if(!r)throw new TypeError(`Cannot parse ${e} as a type definition.`);this.type=r.groups.type;let{min:o,max:a}=r.groups;(o||a)&&(this.range=[+o,+a])}}get computedRange(){return this.range?this.range:this.type==="<percentage>"?this.percentageRange():this.type==="<angle>"?[0,360]:null}get unit(){return this.type==="<percentage>"?"%":this.type==="<angle>"?"deg":""}resolve(e){if(this.type==="<angle>")return e;let t=this.computedRange,r=this.coordRange;return this.type==="<percentage>"&&(r??=this.percentageRange()),Ns(t,r,e)}serialize(e,t){let r=this.type==="<percentage>"?this.percentageRange(100):this.computedRange,o=this.unit;return e=Ns(this.coordRange,r,e),zs(e,{unit:o,precision:t})}toString(){let e=this.type;if(this.range){let[t="",r=""]=this.range;e+=`[${t},${r}]`}return e}percentageRange(e=1){let t;return this.coordMeta&&this.coordMeta.range||this.coordRange&&this.coordRange[0]>=0?t=[0,1]:t=[-1,1],[t[0]*e,t[1]*e]}static get(e,t){return oi(e,this)?e:new this(e,t)}},Hs=Symbol("instance"),Gu=class Kf{type;name;spaceCoords;coords;id;alpha;constructor(t,r=t.space){t[Hs]=this,this.type="function",this.name="color",Object.assign(this,t),this.space=r,this.type!=="custom"&&(this.spaceCoords=Object.values(r.coords),this.coords||(this.coords=this.spaceCoords.map(o=>{let a=["<number>","<percentage>"];return o.type==="angle"&&a.push("<angle>"),a})),this.coords=this.coords.map((o,a)=>{let s=this.spaceCoords[a];return typeof o=="string"&&(o=o.trim().split(/\s*\|\s*/)),o.map(c=>Fu.get(c,s))}))}serializeCoords(t,r,o){return o=t.map((a,s)=>Fu.get(o?.[s]??this.coords[s][0],this.spaceCoords[s])),t.map((a,s)=>o[s].serialize(a,r))}coerceCoords(t,r){return Object.entries(this.space.coords).map(([o,a],s)=>{let c=t[s];if(je(c)||isNaN(c))return c;let d=r[s],u=this.coords[s].find(h=>h.type==d);if(!u){let h=a.name||o;throw new TypeError(`${d??c?.raw??c} not allowed for ${h} in ${this.name}()`)}return c=u.resolve(c),u.range&&(r[s]=u.toString()),c})}canSerialize(){return this.type==="function"||this.serialize}parse(t){return null}static get(t,...r){return!t||oi(t,this)?t:t[Hs]?t[Hs]:new Kf(t,...r)}},Ht={D50:[.3457/.3585,1,.2958/.3585],D65:[.3127/.329,1,.3583/.329]};function Fs(e){return Array.isArray(e)?e:Ht[e]}function Ko(e,t,r,o={}){if(e=Fs(e),t=Fs(t),!e||!t)throw new TypeError(`Missing white point to convert ${e?"":"from"}${!e&&!t?"/":""}${t?"":"to"}`);if(e===t)return r;let a={W1:e,W2:t,XYZ:r,options:o};if(lr.run("chromatic-adaptation-start",a),a.M||(a.W1===Ht.D65&&a.W2===Ht.D50?a.M=[[1.0479297925449969,.022946870601609652,-.05019226628920524],[.02962780877005599,.9904344267538799,-.017073799063418826],[-.009243040646204504,.015055191490298152,.7518742814281371]]:a.W1===Ht.D50&&a.W2===Ht.D65&&(a.M=[[.955473421488075,-.02309845494876471,.06325924320057072],[-.0283697093338637,1.0099953980813041,.021041441191917323],[.012314014864481998,-.020507649298898964,1.330365926242124]])),lr.run("chromatic-adaptation-end",a),a.M)return ft(a.XYZ,a.M);throw new TypeError("Only Bradford CAT with white points D50 and D65 supported for now.")}function Uu(e,t){let r={str:String(e)?.trim(),options:t};if(lr.run("parse-start",r),r.color)return r.color;r.parsed=Vp(r.str);let o,a=r.options?r.options.parseMeta??r.options.meta:null;if(r.parsed){let s=r.parsed.name,c,d,u=r.parsed.args,h=u.map((v,g)=>r.parsed.argMeta[g]?.type);if(s==="color"){let v=u.shift();h.shift();let g=v.startsWith("--")?v.substring(2):`--${v}`,m=[v,g];if(c=ye.findFormat({name:s,id:m,type:"function"}),!c){let k,_=v in ye.registry?v:g;if(_ in ye.registry){let S=ye.registry[_].formats?.color?.id;S&&(k=`Did you mean ${e.replace("color("+v,"color("+S)}?`)}throw new TypeError(`Cannot parse ${r.str}. `+(k??"Missing a plugin?"))}d=c.space,c.id.startsWith("--")&&!v.startsWith("--")&&nn.warn(`${d.name} is a non-standard space and not currently supported in the CSS spec. Use prefixed color(${c.id}) instead of color(${v}).`),v.startsWith("--")&&!c.id.startsWith("--")&&nn.warn(`${d.name} is a standard space and supported in the CSS spec. Use color(${c.id}) instead of prefixed color(${v}).`)}else c=ye.findFormat({name:s,type:"function"}),d=c.space;a&&Object.assign(a,{format:c,formatId:c.name,types:h,commas:r.parsed.commas});let f=1;r.parsed.lastAlpha&&(f=r.parsed.args.pop(),a&&(a.alphaType=h.pop()));let b=c.coords.length;if(u.length!==b)throw new TypeError(`Expected ${b} coordinates for ${d.id} in ${r.str}), got ${u.length}`);u=c.coerceCoords(u,h),o={spaceId:d.id,coords:u,alpha:f}}else e:for(let s of ye.all)for(let c in s.formats){let d=s.formats[c];if(d.type!=="custom"||d.test&&!d.test(r.str))continue;let u=s.getFormat(d),h=u.parse(r.str);if(h){a&&Object.assign(a,{format:u,formatId:c}),o=h;break e}}if(!o)throw new TypeError(`Could not parse ${e} as a color. Missing a plugin?`);return o.alpha=je(o.alpha)?o.alpha:o.alpha===void 0?1:jo(0,o.alpha,1),o}var Wu={"%":.01,deg:1,grad:.9,rad:180/Math.PI,turn:360},Yo={function:/^([a-z]+)\(((?:calc\(NaN\)|.)+?)\)$/i,number:/^([-+]?(?:[0-9]*\.)?[0-9]+(e[-+]?[0-9]+)?)$/i,unitValue:RegExp(`(${Object.keys(Wu).join("|")})$`),singleArgument:/\/?\s*(none|NaN|calc\(NaN\)|[-+\w.]+(?:%|deg|g?rad|turn)?)/g};function Wp(e){let t={},r=e.match(Yo.unitValue)?.[0],o=t.raw=e;return r?(t.type=r==="%"?"<percentage>":"<angle>",t.unit=r,t.unitless=Number(o.slice(0,-r.length)),o=t.unitless*Wu[r]):Yo.number.test(o)?(o=Number(o),t.type="<number>"):o==="none"?o=null:o==="NaN"||o==="calc(NaN)"?(o=NaN,t.type="<number>"):t.type="<ident>",{value:o,meta:t}}function Vp(e){if(!e)return;e=e.trim();let t=e.match(Yo.function);if(t){let r=[],o=[],a=!1,s=t[1].toLowerCase(),c=t[2].replace(Yo.singleArgument,(d,u)=>{let{value:h,meta:f}=Wp(u);return(d.startsWith("/")||s!=="color"&&r.length===3)&&(a=!0),r.push(h),o.push(f),""});return{name:s,args:r,argMeta:o,lastAlpha:a,commas:c.includes(","),rawName:t[1],rawArgs:t[2]}}}function Te(e,t){if(Array.isArray(e))return e.map(o=>Te(o,t));if(!e)throw new TypeError("Empty color reference");ii(e)&&(e=Uu(e,t));let r=e.space||e.spaceId;return typeof r=="string"&&(e.space=ye.get(r)),e.alpha===void 0&&(e.alpha=1),e}var Zp=75e-6,ye=class Dn{constructor(t){this.id=t.id,this.name=t.name,this.base=t.base?Dn.get(t.base):null,this.aliases=t.aliases,this.base&&(this.fromBase=t.fromBase,this.toBase=t.toBase);let r=t.coords??this.base.coords;for(let o in r)"name"in r[o]||(r[o].name=o);this.coords=r,this.white=Fs(t.white??this.base.white??"D65"),this.formats=t.formats??{};for(let o in this.formats){let a=this.formats[o];a.type||="function",a.name||=o}this.formats.color?.id||(this.formats.color={...this.formats.color??{},id:t.cssId||this.id}),t.gamutSpace?this.gamutSpace=t.gamutSpace==="self"?this:Dn.get(t.gamutSpace):this.isPolar?this.gamutSpace=this.base:this.gamutSpace=this,this.gamutSpace.isUnbounded&&(this.inGamut=(o,a)=>!0),this.referred=t.referred,Object.defineProperty(this,"path",{value:jp(this).reverse(),writable:!1,enumerable:!0,configurable:!0}),lr.run("colorspace-init-end",this)}inGamut(t,{epsilon:r=Zp}={}){if(!this.equals(this.gamutSpace))return t=this.to(this.gamutSpace,t),this.gamutSpace.inGamut(t,{epsilon:r});let o=Object.values(this.coords);return t.every((a,s)=>{let c=o[s];if(c.type!=="angle"&&c.range){if(je(a))return!0;let[d,u]=c.range;return(d===void 0||a>=d-r)&&(u===void 0||a<=u+r)}return!0})}get isUnbounded(){return Object.values(this.coords).every(t=>!("range"in t))}get cssId(){return this.formats?.color?.id||this.id}get isPolar(){for(let t in this.coords)if(this.coords[t].type==="angle")return!0;return!1}getFormat(t){if(!t)return null;t==="default"?t=Object.values(this.formats)[0]:typeof t=="string"&&(t=this.formats[t]);let r=Gu.get(t,this);return r!==t&&t.name in this.formats&&(this.formats[t.name]=r),r}equals(t){return t?this===t||this.id===t||this.id===t.id:!1}to(t,r){if(arguments.length===1){const d=Te(t);[t,r]=[d.space,d.coords]}if(t=Dn.get(t),this.equals(t))return r;r=r.map(d=>je(d)?0:d);let o=this.path,a=t.path,s,c;for(let d=0;d<o.length&&o[d].equals(a[d]);d++)s=o[d],c=d;if(!s)throw new Error(`Cannot convert between color spaces ${this} and ${t}: no connection space was found`);for(let d=o.length-1;d>c;d--)r=o[d].toBase(r);for(let d=c+1;d<a.length;d++)r=a[d].fromBase(r);return r}from(t,r){if(arguments.length===1){const o=Te(t);[t,r]=[o.space,o.coords]}return t=Dn.get(t),t.to(this,r)}toString(){return`${this.name} (${this.id})`}getMinCoords(){let t=[];for(let r in this.coords){let o=this.coords[r],a=o.range||o.refRange;t.push(a?.min??0)}return t}static registry={};static get all(){return[...new Set(Object.values(Dn.registry))]}static register(t,r){if(arguments.length===1&&(r=arguments[0],t=r.id),r=this.get(r),this.registry[t]&&this.registry[t]!==r)throw new Error(`Duplicate color space registration: '${t}'`);if(this.registry[t]=r,arguments.length===1&&r.aliases)for(let o of r.aliases)this.register(o,r);return r}static get(t,...r){if(!t||oi(t,this))return t;if(sr(t)==="string"){let o=Dn.registry[t.toLowerCase()];if(!o)throw new TypeError(`No color space found with id = "${t}"`);return o}if(r.length)return Dn.get(...r);throw new TypeError(`${t} is not a valid color space`)}static findFormat(t,r=Dn.all){if(!t)return null;typeof t=="string"&&(t={name:t});for(let o of r)for(let[a,s]of Object.entries(o.formats)){s.name??=a,s.type??="function";let c=(!t.name||s.name===t.name)&&(!t.type||s.type===t.type);if(t.id){let d=s.ids||[s.id],u=Array.isArray(t.id)?t.id:[t.id];c&&=u.some(h=>d.includes(h))}if(c){let d=Gu.get(s,o);return d!==s&&(o.formats[s.name]=d),d}}return null}static resolveCoord(t,r){let o=sr(t),a,s;if(o==="string"?t.includes(".")?[a,s]=t.split("."):[a,s]=[,t]:Array.isArray(t)?[a,s]=t:(a=t.space,s=t.coordId),a=Dn.get(a),a||(a=r),!a)throw new TypeError(`Cannot resolve coordinate reference ${t}: No color space specified and relative references are not allowed here`);if(o=sr(s),o==="number"||o==="string"&&s>=0){let u=Object.entries(a.coords)[s];if(u)return{space:a,id:u[0],index:s,...u[1]}}a=Dn.get(a);let c=s.toLowerCase(),d=0;for(let u in a.coords){let h=a.coords[u];if(u.toLowerCase()===c||h.name?.toLowerCase()===c)return{space:a,id:u,index:d,...h};d++}throw new TypeError(`No "${s}" coordinate found in ${a.name}. Its coordinates are: ${Object.keys(a.coords).join(", ")}`)}static DEFAULT_FORMAT={type:"functions",name:"color"}};function jp(e){let t=[e];for(let r=e;r=r.base;)t.push(r);return t}var Lt=new ye({id:"xyz-d65",name:"XYZ D65",coords:{x:{refRange:[0,1],name:"X"},y:{refRange:[0,1],name:"Y"},z:{refRange:[0,1],name:"Z"}},white:"D65",formats:{color:{ids:["xyz-d65","xyz"]}},aliases:["xyz"]}),zt=class extends ye{constructor(e){e.coords||(e.coords={r:{range:[0,1],name:"Red"},g:{range:[0,1],name:"Green"},b:{range:[0,1],name:"Blue"}}),e.base||(e.base=Lt),e.toXYZ_M&&e.fromXYZ_M&&(e.toBase??=t=>{let r=ft(t,e.toXYZ_M);return this.white!==this.base.white&&(r=Ko(this.white,this.base.white,r)),r},e.fromBase??=t=>(t=Ko(this.base.white,this.white,t),ft(t,e.fromXYZ_M))),e.referred??="display",super(e)}};function Vu(e,t={}){if(Array.isArray(e))return e.map(u=>Vu(u,t));let{cssProperty:r="background-color",element:o,...a}=t,s=null;try{return Te(e,a)}catch(u){s=u}let{CSS:c,getComputedStyle:d}=globalThis;if(ii(e)&&o&&c&&d&&c.supports(r,e)){let u=o.style[r];e!==u&&(o.style[r]=e);let h=d(o).getPropertyValue(r);if(e!==u&&(o.style[r]=u),h!==e)try{return Te(h,a)}catch(f){s=f}else s={message:"Color value is a valid CSS color, but it could not be resolved :("}}return t.errorMeta&&(t.errorMeta.error=s),null}function Yi(e,t){e=Te(e);let r=ye.get(t,t?.space),o=t?.precision,a;return!r||e.space.equals(r)?a=e.coords.slice():a=r.from(e),o===void 0?a:a.map(s=>Ds(s,o))}function rn(e,t){if(e=Te(e),t==="alpha")return e.alpha??1;let{space:r,index:o}=ye.resolveCoord(t,e.space);return Yi(e,r)[o]}function Gs(e,t,r,o){return e=Te(e),Array.isArray(t)&&([t,r,o]=[e.space,t,r]),t=ye.get(t),e.coords=t===e.space?r.slice():t.to(e.space,r),o!==void 0&&(e.alpha=o),e}Gs.returns="color";function Zn(e,t,r){if(e=Te(e),arguments.length===2&&sr(arguments[1])==="object"){let o=arguments[1];for(let a in o)Zn(e,a,o[a])}else if(typeof r=="function"&&(r=r(rn(e,t))),t==="alpha")e.alpha=r;else{let{space:o,index:a}=ye.resolveCoord(t,e.space),s=Yi(e,o);s[a]=r,Gs(e,o,s)}return e}Zn.returns="color";var Us=new ye({id:"xyz-d50",name:"XYZ D50",white:"D50",base:Lt,fromBase:e=>Ko(Lt.white,"D50",e),toBase:e=>Ko("D50",Lt.white,e)}),qp=216/24389,Zu=24/116,Xo=24389/27,Ws=Ht.D50,on=new ye({id:"lab",name:"Lab",coords:{l:{refRange:[0,100],name:"Lightness"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:Ws,base:Us,fromBase(e){let t=e.map((r,o)=>r/Ws[o]).map(r=>r>qp?Math.cbrt(r):(Xo*r+16)/116);return[116*t[1]-16,500*(t[0]-t[1]),200*(t[1]-t[2])]},toBase(e){let[t,r,o]=e,a=[];return a[1]=(t+16)/116,a[0]=r/500+a[1],a[2]=a[1]-o/200,[a[0]>Zu?Math.pow(a[0],3):(116*a[0]-16)/Xo,e[0]>8?Math.pow((e[0]+16)/116,3):e[0]/Xo,a[2]>Zu?Math.pow(a[2],3):(116*a[2]-16)/Xo].map((s,c)=>s*Ws[c])},formats:{lab:{coords:["<percentage> | <number>","<number> | <percentage>","<number> | <percentage>"]}}});function vn(e){return typeof e!="number"?e:(e%360+360)%360}function ju(e,t){let[r,o]=t,a=je(r),s=je(o);if(a&&s)return[r,o];if(a?r=o:s&&(o=r),e==="raw")return t;r=vn(r),o=vn(o);let c=o-r;return e==="increasing"?c<0&&(o+=360):e==="decreasing"?c>0&&(r+=360):e==="longer"?-180<c&&c<180&&(c>0?r+=360:o+=360):e==="shorter"&&(c>180?r+=360:c<-180&&(o+=360)),[r,o]}var an=new ye({id:"lch",name:"LCH",coords:{l:{refRange:[0,100],name:"Lightness"},c:{refRange:[0,150],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:on,fromBase(e){if(this.ε===void 0){let c=Object.values(this.base.coords)[1].refRange;this.ε=(c[1]-c[0])/1e5}let[t,r,o]=e,a=Math.abs(r)<this.ε&&Math.abs(o)<this.ε,s=a?null:vn(Math.atan2(o,r)*180/Math.PI);return[t,a?0:Math.sqrt(r**2+o**2),s]},toBase(e){let[t,r,o]=e,a=null,s=null;return je(o)||(r=r<0?0:r,a=r*Math.cos(o*Math.PI/180),s=r*Math.sin(o*Math.PI/180)),[t,a,s]},formats:{lch:{coords:["<percentage> | <number>","<number> | <percentage>","<number> | <angle>"]}}}),qu=25**7,Jo=Math.PI,Ku=180/Jo,ai=Jo/180;function Yu(e){const t=e*e;return t*t*t*e}function Xu(e,t,{kL:r=1,kC:o=1,kH:a=1}={}){[e,t]=Te([e,t]);let[s,c,d]=on.from(e),u=an.from(on,[s,c,d])[1],[h,f,b]=on.from(t),v=an.from(on,[h,f,b])[1];u<0&&(u=0),v<0&&(v=0);let g=Yu((u+v)/2),m=.5*(1-Math.sqrt(g/(g+qu))),k=(1+m)*c,_=(1+m)*f,S=Math.sqrt(k**2+d**2),M=Math.sqrt(_**2+b**2),C=k===0&&d===0?0:Math.atan2(d,k),T=_===0&&b===0?0:Math.atan2(b,_);C<0&&(C+=2*Jo),T<0&&(T+=2*Jo),C*=Ku,T*=Ku;let $=h-s,Z=M-S,U=T-C,ie=C+T,H=Math.abs(U),fe;S*M===0?fe=0:H<=180?fe=U:U>180?fe=U-360:U<-180?fe=U+360:nn.warn("the unthinkable has happened");let we=2*Math.sqrt(M*S)*Math.sin(fe*ai/2),R=(s+h)/2,j=(S+M)/2,E=Yu(j),J;S*M===0?J=ie:H<=180?J=ie/2:ie<360?J=(ie+360)/2:J=(ie-360)/2;let xe=(R-50)**2,oe=1+.015*xe/Math.sqrt(20+xe),Me=1+.045*j,ae=1;ae-=.17*Math.cos((J-30)*ai),ae+=.24*Math.cos(2*J*ai),ae+=.32*Math.cos((3*J+6)*ai),ae-=.2*Math.cos((4*J-63)*ai);let Ee=1+.015*j*ae,F=30*Math.exp(-1*((J-275)/25)**2),G=2*Math.sqrt(E/(E+qu)),Se=-1*Math.sin(2*F*ai)*G,pe=($/(r*oe))**2;return pe+=(Z/(o*Me))**2,pe+=(we/(a*Ee))**2,pe+=Se*(Z/(o*Me))*(we/(a*Ee)),Math.sqrt(pe)}var Kp=[[.819022437996703,.3619062600528904,-.1288737815209879],[.0329836539323885,.9292868615863434,.0361446663506424],[.0481771893596242,.2642395317527308,.6335478284694309]],Yp=[[1.2268798758459243,-.5578149944602171,.2813910456659647],[-.0405757452148008,1.112286803280317,-.0717110580655164],[-.0763729366746601,-.4214933324022432,1.5869240198367816]],Xp=[[.210454268309314,.7936177747023054,-.0040720430116193],[1.9779985324311684,-2.42859224204858,.450593709617411],[.0259040424655478,.7827717124575296,-.8086757549230774]],cr=[[1,.3963377773761749,.2158037573099136],[1,-.1055613458156586,-.0638541728258133],[1,-.0894841775298119,-1.2914855480194092]],Tn=new ye({id:"oklab",name:"Oklab",coords:{l:{refRange:[0,1],name:"Lightness"},a:{refRange:[-.4,.4]},b:{refRange:[-.4,.4]}},white:"D65",base:Lt,fromBase(e){let t=ft(e,Kp);return t[0]=Math.cbrt(t[0]),t[1]=Math.cbrt(t[1]),t[2]=Math.cbrt(t[2]),ft(t,Xp,t)},toBase(e){let t=ft(e,cr);return t[0]=t[0]**3,t[1]=t[1]**3,t[2]=t[2]**3,ft(t,Yp,t)},formats:{oklab:{coords:["<percentage> | <number>","<number> | <percentage>","<number> | <percentage>"]}}});function Vs(e,t){[e,t]=Te([e,t]);let[r,o,a]=Tn.from(e),[s,c,d]=Tn.from(t),u=r-s,h=o-c,f=a-d;return Math.sqrt(u**2+h**2+f**2)}var Jp=75e-6;function zr(e,t,{epsilon:r=Jp}={}){e=Te(e),t||(t=e.space),t=ye.get(t);let o=e.coords;return t!==e.space&&(o=t.from(e)),t.inGamut(o,{epsilon:r})}function si(e){return{space:e.space,coords:e.coords.slice(),alpha:e.alpha}}function Ju(e,t,r="lab"){r=ye.get(r);let o=r.from(e),a=r.from(t);return Math.sqrt(o.reduce((s,c,d)=>{let u=a[d];return je(c)||je(u)?s:s+(u-c)**2},0))}function Qp(e,t){return Ju(e,t,"lab")}var Qu=Math.PI/180;function eg(e,t,{l:r=2,c:o=1}={}){[e,t]=Te([e,t]);let[a,s,c]=on.from(e),[,d,u]=an.from(on,[a,s,c]),[h,f,b]=on.from(t),v=an.from(on,[h,f,b])[1];d<0&&(d=0),v<0&&(v=0);let g=a-h,m=d-v,k=s-f,_=c-b,S=k**2+_**2-m**2,M=.511;a>=16&&(M=.040975*a/(1+.01765*a));let C=.0638*d/(1+.0131*d)+.638,T;je(u)&&(u=0),u>=164&&u<=345?T=.56+Math.abs(.2*Math.cos((u+168)*Qu)):T=.36+Math.abs(.4*Math.cos((u+35)*Qu));let $=Math.pow(d,4),Z=Math.sqrt($/($+1900)),U=C*(Z*T+1-Z),ie=(g/(r*M))**2;return ie+=(m/(o*C))**2,ie+=S/U**2,Math.sqrt(ie)}var e0=203,Zs=new ye({id:"xyz-abs-d65",cssId:"--xyz-abs-d65",name:"Absolute XYZ D65",coords:{x:{refRange:[0,9504.7],name:"Xa"},y:{refRange:[0,1e4],name:"Ya"},z:{refRange:[0,10888.3],name:"Za"}},base:Lt,fromBase(e){return e.map(t=>t*e0)},toBase(e){return e.map(t=>t/e0)}}),Qo=1.15,ea=.66,t0=2610/2**14,tg=2**14/2610,n0=3424/2**12,r0=2413/2**7,i0=2392/2**7,ng=1.7*2523/2**5,o0=2**5/(1.7*2523),ta=-.56,js=16295499532821565e-27,rg=[[.41478972,.579999,.014648],[-.20151,1.120649,.0531008],[-.0166008,.2648,.6684799]],ig=[[1.9242264357876067,-1.0047923125953657,.037651404030618],[.35031676209499907,.7264811939316552,-.06538442294808501],[-.09098281098284752,-.3127282905230739,1.5227665613052603]],og=[[.5,.5,0],[3.524,-4.066708,.542708],[.199076,1.096799,-1.295875]],ag=[[1,.13860504327153927,.05804731615611883],[1,-.1386050432715393,-.058047316156118904],[1,-.09601924202631895,-.811891896056039]],a0=new ye({id:"jzazbz",name:"Jzazbz",coords:{jz:{refRange:[0,1],name:"Jz"},az:{refRange:[-.21,.21]},bz:{refRange:[-.21,.21]}},base:Zs,fromBase(e){let[t,r,o]=e,[a,s,c]=ft(ft([Qo*t-(Qo-1)*o,ea*r-(ea-1)*t,o],rg).map(function(d){return _t((n0+r0*_t(d/1e4,t0))/(1+i0*_t(d/1e4,t0)),ng)}),og);return[(1+ta)*a/(1+ta*a)-js,s,c]},toBase(e){let[t,r,o]=e,[a,s,c]=ft(ft([(t+js)/(1+ta-ta*(t+js)),r,o],ag).map(function(u){return 1e4*_t((n0-_t(u,o0))/(i0*_t(u,o0)-r0),tg)}),ig),d=(a+(Qo-1)*c)/Qo;return[d,(s+(ea-1)*d)/ea,c]},formats:{jzazbz:{coords:["<percentage> | <number>","<number> | <percentage>","<number> | <percentage>"]}}}),qs=new ye({id:"jzczhz",name:"JzCzHz",coords:{jz:{refRange:[0,1],name:"Jz"},cz:{refRange:[0,.26],name:"Chroma"},hz:{refRange:[0,360],type:"angle",name:"Hue"}},base:a0,fromBase:an.fromBase,toBase:an.toBase,formats:{jzczhz:{coords:["<percentage> | <number>","<number> | <percentage>","<number> | <angle>"]}}});function sg(e,t){[e,t]=Te([e,t]);let[r,o,a]=qs.from(e),[s,c,d]=qs.from(t),u=r-s,h=o-c;je(a)&&je(d)?(a=0,d=0):je(a)?a=d:je(d)&&(d=a);let f=a-d,b=2*Math.sqrt(o*c)*Math.sin(f/2*(Math.PI/180));return Math.sqrt(u**2+h**2+b**2)}var s0=3424/4096,l0=2413/128,c0=2392/128,u0=2610/16384,lg=2523/32,cg=16384/2610,d0=32/2523,ug=[[.3592832590121217,.6976051147779502,-.035891593232029],[-.1920808463704993,1.100476797037432,.0753748658519118],[.0070797844607479,.0748396662186362,.8433265453898765]],dg=[[2048/4096,2048/4096,0],[6610/4096,-13613/4096,7003/4096],[17933/4096,-17390/4096,-543/4096]],hg=[[.9999999999999998,.0086090370379328,.111029625003026],[.9999999999999998,-.0086090370379328,-.1110296250030259],[.9999999999999998,.5600313357106791,-.3206271749873188]],fg=[[2.0701522183894223,-1.3263473389671563,.2066510476294053],[.3647385209748072,.6805660249472273,-.0453045459220347],[-.0497472075358123,-.0492609666966131,1.1880659249923042]],Ks=new ye({id:"ictcp",name:"ICTCP",coords:{i:{refRange:[0,1],name:"I"},ct:{refRange:[-.5,.5],name:"CT"},cp:{refRange:[-.5,.5],name:"CP"}},base:Zs,fromBase(e){return pg(ft(e,ug))},toBase(e){return ft(gg(e),fg)},formats:{ictcp:{coords:["<percentage> | <number>","<number> | <percentage>","<number> | <percentage>"]}}});function pg(e){return ft(e.map(function(t){return((s0+l0*(t/1e4)**u0)/(1+c0*(t/1e4)**u0))**lg}),dg)}function gg(e){return ft(e,hg).map(function(t){return 1e4*(Math.max(t**d0-s0,0)/(l0-c0*t**d0))**cg})}function mg(e,t){[e,t]=Te([e,t]);let[r,o,a]=Ks.from(e),[s,c,d]=Ks.from(t);return 720*Math.sqrt((r-s)**2+.25*(o-c)**2+(a-d)**2)}function vg(e,t){[e,t]=Te([e,t]);let r=2,[o,a,s]=Tn.from(e),[c,d,u]=Tn.from(t),h=o-c,f=r*(a-d),b=r*(s-u);return Math.sqrt(h**2+f**2+b**2)}var bg=Ht.D65,h0=.42,f0=1/h0,Ys=2*Math.PI,p0=[[.401288,.650173,-.051461],[-.250268,1.204414,.045854],[-.002079,.048952,.953127]],wg=[[1.8620678550872327,-1.0112546305316843,.14918677544445175],[.38752654323613717,.6214474419314753,-.008973985167612518],[-.015841498849333856,-.03412293802851557,1.0499644368778496]],_g=[[460,451,288],[460,-891,-261],[460,-220,-6300]],yg={dark:[.8,.525,.8],dim:[.9,.59,.9],average:[1,.69,1]},Dr={h:[20.14,90,164.25,237.53,380.14],e:[.8,.7,1,1.2,.8],H:[0,100,200,300,400]},kg=180/Math.PI,g0=Math.PI/180;function m0(e,t){return e.map(r=>{const o=_t(t*Math.abs(r)*.01,h0);return 400*qo(o,r)/(o+27.13)})}function Eg(e,t){const r=100/t*27.13**f0;return e.map(o=>{const a=Math.abs(o);return qo(r*_t(a/(400-a),f0),o)})}function Sg(e){let t=vn(e);t<=Dr.h[0]&&(t+=360);const r=Hu(Dr.h,t)-1,[o,a]=Dr.h.slice(r,r+2),[s,c]=Dr.e.slice(r,r+2),d=Dr.H[r],u=(t-o)/s;return d+100*u/(u+(a-t)/c)}function Ag(e){let t=(e%400+400)%400;const r=Math.floor(.01*t);t=t%100;const[o,a]=Dr.h.slice(r,r+2),[s,c]=Dr.e.slice(r,r+2);return vn((t*(c*o-s*a)-100*o*c)/(t*(c-s)-100*c))}function v0(e,t,r,o,a){const s={};s.discounting=a,s.refWhite=e,s.surround=o;const c=e.map(m=>m*100);s.la=t,s.yb=r;const d=c[1],u=ft(c,p0);let h=yg[s.surround];const f=h[0];s.c=h[1],s.nc=h[2];const b=(1/(5*s.la+1))**4;s.fl=b*s.la+.1*(1-b)*(1-b)*Math.cbrt(5*s.la),s.flRoot=s.fl**.25,s.n=s.yb/d,s.z=1.48+Math.sqrt(s.n),s.nbb=.725*s.n**-.2,s.ncb=s.nbb;const v=Math.max(Math.min(f*(1-1/3.6*Math.exp((-s.la-42)/92)),1),0);s.dRgb=u.map(m=>Ki(1,d/m,v)),s.dRgbInv=s.dRgb.map(m=>1/m);const g=m0(u.map((m,k)=>m*s.dRgb[k]),s.fl);return s.aW=s.nbb*(2*g[0]+g[1]+.05*g[2]),s}var b0=v0(bg,64/Math.PI*.2,20,"average",!1);function Xs(e,t){if(!(e.J!==void 0^e.Q!==void 0))throw new Error("Conversion requires one and only one: 'J' or 'Q'");if(!(e.C!==void 0^e.M!==void 0^e.s!==void 0))throw new Error("Conversion requires one and only one: 'C', 'M' or 's'");if(!(e.h!==void 0^e.H!==void 0))throw new Error("Conversion requires one and only one: 'h' or 'H'");if(e.J===0||e.Q===0)return[0,0,0];let r=0;e.h!==void 0?r=vn(e.h)*g0:r=Ag(e.H)*g0;const o=Math.cos(r),a=Math.sin(r);let s=0;e.J!==void 0?s=_t(e.J,1/2)*.1:e.Q!==void 0&&(s=.25*t.c*e.Q/((t.aW+4)*t.flRoot));let c=0;e.C!==void 0?c=e.C/s:e.M!==void 0?c=e.M/t.flRoot/s:e.s!==void 0&&(c=4e-4*e.s**2*(t.aW+4)/t.c);const d=_t(c*Math.pow(1.64-Math.pow(.29,t.n),-.73),10/9),u=.25*(Math.cos(r+2)+3.8),h=t.aW*_t(s,2/t.c/t.z),f=5e4/13*t.nc*t.ncb*u,b=h/t.nbb,v=23*(b+.305)*Bs(d,23*f+d*(11*o+108*a));return ft(Eg(ft([b,v*o,v*a],_g).map(g=>g*1/1403),t.fl).map((g,m)=>g*t.dRgbInv[m]),wg).map(g=>g/100)}function w0(e,t){const r=m0(ft(e.map(k=>k*100),p0).map((k,_)=>k*t.dRgb[_]),t.fl),o=r[0]+(-12*r[1]+r[2])/11,a=(r[0]+r[1]-2*r[2])/9,s=(Math.atan2(a,o)%Ys+Ys)%Ys,c=.25*(Math.cos(s+2)+3.8),d=_t(5e4/13*t.nc*t.ncb*Bs(c*Math.sqrt(o**2+a**2),r[0]+r[1]+1.05*r[2]+.305),.9)*Math.pow(1.64-Math.pow(.29,t.n),.73),u=_t(t.nbb*(2*r[0]+r[1]+.05*r[2])/t.aW,.5*t.c*t.z),h=100*_t(u,2),f=4/t.c*u*(t.aW+4)*t.flRoot,b=d*u,v=b*t.flRoot,g=vn(s*kg),m=Sg(g);return{J:h,C:b,h:g,s:50*_t(t.c*d/(t.aW+4),1/2),Q:f,M:v,H:m}}var Mg=new ye({id:"cam16-jmh",cssId:"--cam16-jmh",name:"CAM16-JMh",coords:{j:{refRange:[0,100],name:"J"},m:{refRange:[0,105],name:"Colorfulness"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:Lt,fromBase(e){this.ε===void 0&&(this.ε=Object.values(this.coords)[1].refRange[1]/1e5);const t=w0(e,b0),r=Math.abs(t.M)<this.ε;return[t.J,r?0:t.M,r?null:t.h]},toBase(e){return Xs({J:e[0],M:e[1],h:e[2]},b0)}}),xg=Ht.D65,Ig=216/24389,_0=24389/27;function Og(e){return 116*(e>Ig?Math.cbrt(e):(_0*e+16)/116)-16}function Js(e){return e>8?Math.pow((e+16)/116,3):e/_0}function Cg(e,t){let[r,o,a]=e,s=[],c=0;if(a===0)return[0,0,0];let d=Js(a);a>0?c=.00379058511492914*a**2+.608983189401032*a+.9155088574762233:c=9514440756550361e-21*a**2+.08693057439788597*a-21.928975842194614;const u=2e-12,h=15;let f=0,b=1/0;for(;f<=h;){s=Xs({J:c,C:o,h:r},t);const v=Math.abs(s[1]-d);if(v<b){if(v<=u)return s;b=v}c=c-(s[1]-d)*c/(2*s[1]),f+=1}return Xs({J:c,C:o,h:r},t)}function Tg(e,t){const r=Og(e[1]);if(r===0)return[0,0,0];const o=w0(e,Qs);return[vn(o.h),o.C,r]}var Qs=v0(xg,200/Math.PI*Js(50),Js(50)*100,"average",!1),Xi=new ye({id:"hct",name:"HCT",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},c:{refRange:[0,145],name:"Colorfulness"},t:{refRange:[0,100],name:"Tone"}},base:Lt,fromBase(e){this.ε===void 0&&(this.ε=Object.values(this.coords)[1].refRange[1]/1e5);let t=Tg(e);return t[1]<this.ε&&(t[1]=0,t[0]=null),t},toBase(e){return Cg(e,Qs)},formats:{color:{id:"--hct",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}}),Lg=Math.PI/180,y0=[1,.007,.0228];function k0(e){e[1]<0&&(e=Xi.fromBase(Xi.toBase(e)));const t=Math.log(Math.max(1+y0[2]*e[1]*Qs.flRoot,1))/y0[2],r=e[0]*Lg,o=t*Math.cos(r),a=t*Math.sin(r);return[e[2],o,a]}function Rg(e,t){[e,t]=Te([e,t]);let[r,o,a]=k0(Xi.from(e)),[s,c,d]=k0(Xi.from(t));return Math.sqrt((r-s)**2+(o-c)**2+(a-d)**2)}var li={deltaE76:Qp,deltaECMC:eg,deltaE2000:Xu,deltaEJz:sg,deltaEITP:mg,deltaEOK:Vs,deltaEOK2:vg,deltaEHCT:Rg};function Pg(e){return Math.max(parseFloat(`1e${(e?Math.floor(Math.log10(Math.abs(e))):0)-2}`),1e-6)}var E0={hct:{method:"hct.c",jnd:2,deltaEMethod:"hct",blackWhiteClamp:{}},"hct-tonal":{method:"hct.c",jnd:0,deltaEMethod:"hct",blackWhiteClamp:{channel:"hct.t",min:0,max:100}}};function ur(e,{method:t=nn.gamut_mapping,space:r=void 0,deltaEMethod:o="",jnd:a=2,blackWhiteClamp:s=void 0}={}){if(e=Te(e),ii(arguments[1])?r=arguments[1]:r||(r=e.space),r=ye.get(r),zr(e,r,{epsilon:0}))return e;let c;if(t==="css")c=$g(e,{space:r});else{if(t!=="clip"&&!zr(e,r)){Object.prototype.hasOwnProperty.call(E0,t)&&({method:t,jnd:a,deltaEMethod:o,blackWhiteClamp:s}=E0[t]);let d=Xu;if(o!==""){for(let h in li)if("deltae"+o.toLowerCase()===h.toLowerCase()){d=li[h];break}}a===0&&(a=1e-16);let u=ur(tt(e,r),{method:"clip",space:r});if(d(e,u)>a){if(s&&Object.keys(s).length===3){let S=ye.resolveCoord(s.channel),M=rn(tt(e,S.space),S.id);if(je(M)&&(M=0),M>=s.max)return tt({space:"xyz-d65",coords:Ht.D65},e.space);if(M<=s.min)return tt({space:"xyz-d65",coords:[0,0,0]},e.space)}let h=ye.resolveCoord(t),f=h.space,b=h.id,v=tt(e,f);v.coords.forEach((S,M)=>{je(S)&&(v.coords[M]=0)});let g=(h.range||h.refRange)[0],m=Pg(a),k=g,_=rn(v,b);for(;_-k>m;){let S=si(v);S=ur(S,{space:r,method:"clip"}),d(v,S)-a<m?k=rn(v,b):_=rn(v,b),Zn(v,b,(k+_)/2)}c=tt(v,r)}else c=u}else c=tt(e,r);if(t==="clip"||!zr(c,r,{epsilon:0})){let d=Object.values(r.coords).map(u=>u.range||[]);c.coords=c.coords.map((u,h)=>{let[f,b]=d[h];return f!==void 0&&(u=Math.max(f,u)),b!==void 0&&(u=Math.min(u,b)),u})}}return r!==e.space&&(c=tt(c,e.space)),e.coords=c.coords,e}ur.returns="color";var S0={WHITE:{space:Tn,coords:[1,0,0],alpha:1},BLACK:{space:Tn,coords:[0,0,0],alpha:1}};function $g(e,{space:t}={}){e=Te(e),t||(t=e.space),t=ye.get(t);const a=ye.get("oklch");if(t.isUnbounded)return tt(e,t);const s=tt(e,a);let c=s.coords[0];if(c>=1){const m=tt(S0.WHITE,t);return m.alpha=e.alpha,tt(m,t)}if(c<=0){const m=tt(S0.BLACK,t);return m.alpha=e.alpha,tt(m,t)}if(zr(s,t,{epsilon:0}))return tt(s,t);function d(m){const k=tt(m,t),_=Object.values(t.coords);return k.coords=k.coords.map((S,M)=>{if("range"in _[M]){const[C,T]=_[M].range;return jo(C,S,T)}return S}),k}let u=0,h=s.coords[1],f=!0,b=si(s),v=d(b),g=Vs(v,b);if(g<.02)return v;for(;h-u>1e-4;){const m=(u+h)/2;if(b.coords[1]=m,f&&zr(b,t,{epsilon:0}))u=m;else if(v=d(b),g=Vs(v,b),g<.02){if(.02-g<1e-4)break;f=!1,u=m}else h=m}return v}function tt(e,t,{inGamut:r}={}){e=Te(e),t=ye.get(t);let o=t.from(e),a={space:t,coords:o,alpha:e.alpha};return r&&(a=ur(a,r===!0?void 0:r)),a}tt.returns="color";function Ji(e,t={}){let{precision:r=nn.precision,format:o,inGamut:a=!0,coords:s,alpha:c,commas:d}=t,u,h=Te(e),f=o,b=h.parseMeta;b&&!o&&(b.format.canSerialize()&&(o=b.format,f=b.formatId),s??=b.types,c??=b.alphaType,d??=b.commas),f&&(o=h.space.getFormat(o)??ye.findFormat(f)),o||(o=h.space.getFormat("default")??ye.DEFAULT_FORMAT,f=o.name),o&&o.space&&o.space!==h.space&&(h=tt(h,o.space));let v=h.coords.slice();if(a||=o.toGamut,a&&!zr(h)&&(v=ur(si(h),a===!0?void 0:a).coords),o.type==="custom")if(o.serialize)u=o.serialize(v,h.alpha,t);else throw new TypeError(`format ${f} can only be used to parse colors, not for serialization`);else{let g=o.name||"color",m=o.serializeCoords(v,r,s);if(g==="color"){let C=o.id||o.ids?.[0]||h.space.cssId||h.space.id;m.unshift(C)}let k=h.alpha;c!==void 0&&typeof c!="object"&&(c=typeof c=="string"?{type:c}:{include:c});let _=c?.type??"<number>",S=c?.include===!0||o.alpha===!0||c?.include!==!1&&o.alpha!==!1&&k<1,M="";if(d??=o.commas,S){if(r!==null){let C;_==="<percentage>"&&(C="%",k*=100),k=zs(k,{precision:r,unit:C})}M=`${d?",":" /"} ${k}`}u=`${g}(${m.join(d?", ":" ")}${M})`}return u}var Qi=new zt({id:"rec2020-linear",cssId:"--rec2020-linear",name:"Linear REC.2020",white:"D65",toXYZ_M:[[.6369580483012914,.14461690358620832,.1688809751641721],[.2627002120112671,.6779980715188708,.05930171646986196],[0,.028072693049087428,1.060985057710791]],fromXYZ_M:[[1.716651187971268,-.355670783776392,-.25336628137366],[-.666684351832489,1.616481236634939,.0157685458139111],[.017639857445311,-.042770613257809,.942103121235474]]}),A0=new zt({id:"rec2020",name:"REC.2020",base:Qi,toBase(e){return e.map(function(t){let r=t<0?-1:1,o=t*r;return r*Math.pow(o,2.4)})},fromBase(e){return e.map(function(t){let r=t<0?-1:1,o=t*r;return r*Math.pow(o,1/2.4)})}}),M0=new zt({id:"p3-linear",cssId:"display-p3-linear",name:"Linear P3",white:"D65",toXYZ_M:[[.4865709486482162,.26566769316909306,.1982172852343625],[.2289745640697488,.6917385218365064,.079286914093745],[0,.04511338185890264,1.043944368900976]],fromXYZ_M:[[2.493496911941425,-.9313836179191239,-.40271078445071684],[-.8294889695615747,1.7626640603183463,.023624685841943577],[.03584583024378447,-.07617238926804182,.9568845240076872]]}),zg=[[.41239079926595934,.357584339383878,.1804807884018343],[.21263900587151027,.715168678767756,.07219231536073371],[.01933081871559182,.11919477979462598,.9505321522496607]],At=[[3.2409699419045226,-1.537383177570094,-.4986107602930034],[-.9692436362808796,1.8759675015077202,.04155505740717559],[.05563007969699366,-.20397695888897652,1.0569715142428786]],x0=new zt({id:"srgb-linear",name:"Linear sRGB",white:"D65",toXYZ_M:zg,fromXYZ_M:At}),I0={aliceblue:[240/255,248/255,1],antiquewhite:[250/255,235/255,215/255],aqua:[0,1,1],aquamarine:[127/255,1,212/255],azure:[240/255,1,1],beige:[245/255,245/255,220/255],bisque:[1,228/255,196/255],black:[0,0,0],blanchedalmond:[1,235/255,205/255],blue:[0,0,1],blueviolet:[138/255,43/255,226/255],brown:[165/255,42/255,42/255],burlywood:[222/255,184/255,135/255],cadetblue:[95/255,158/255,160/255],chartreuse:[127/255,1,0],chocolate:[210/255,105/255,30/255],coral:[1,127/255,80/255],cornflowerblue:[100/255,149/255,237/255],cornsilk:[1,248/255,220/255],crimson:[220/255,20/255,60/255],cyan:[0,1,1],darkblue:[0,0,139/255],darkcyan:[0,139/255,139/255],darkgoldenrod:[184/255,134/255,11/255],darkgray:[169/255,169/255,169/255],darkgreen:[0,100/255,0],darkgrey:[169/255,169/255,169/255],darkkhaki:[189/255,183/255,107/255],darkmagenta:[139/255,0,139/255],darkolivegreen:[85/255,107/255,47/255],darkorange:[1,140/255,0],darkorchid:[153/255,50/255,204/255],darkred:[139/255,0,0],darksalmon:[233/255,150/255,122/255],darkseagreen:[143/255,188/255,143/255],darkslateblue:[72/255,61/255,139/255],darkslategray:[47/255,79/255,79/255],darkslategrey:[47/255,79/255,79/255],darkturquoise:[0,206/255,209/255],darkviolet:[148/255,0,211/255],deeppink:[1,20/255,147/255],deepskyblue:[0,191/255,1],dimgray:[105/255,105/255,105/255],dimgrey:[105/255,105/255,105/255],dodgerblue:[30/255,144/255,1],firebrick:[178/255,34/255,34/255],floralwhite:[1,250/255,240/255],forestgreen:[34/255,139/255,34/255],fuchsia:[1,0,1],gainsboro:[220/255,220/255,220/255],ghostwhite:[248/255,248/255,1],gold:[1,215/255,0],goldenrod:[218/255,165/255,32/255],gray:[128/255,128/255,128/255],green:[0,128/255,0],greenyellow:[173/255,1,47/255],grey:[128/255,128/255,128/255],honeydew:[240/255,1,240/255],hotpink:[1,105/255,180/255],indianred:[205/255,92/255,92/255],indigo:[75/255,0,130/255],ivory:[1,1,240/255],khaki:[240/255,230/255,140/255],lavender:[230/255,230/255,250/255],lavenderblush:[1,240/255,245/255],lawngreen:[124/255,252/255,0],lemonchiffon:[1,250/255,205/255],lightblue:[173/255,216/255,230/255],lightcoral:[240/255,128/255,128/255],lightcyan:[224/255,1,1],lightgoldenrodyellow:[250/255,250/255,210/255],lightgray:[211/255,211/255,211/255],lightgreen:[144/255,238/255,144/255],lightgrey:[211/255,211/255,211/255],lightpink:[1,182/255,193/255],lightsalmon:[1,160/255,122/255],lightseagreen:[32/255,178/255,170/255],lightskyblue:[135/255,206/255,250/255],lightslategray:[119/255,136/255,153/255],lightslategrey:[119/255,136/255,153/255],lightsteelblue:[176/255,196/255,222/255],lightyellow:[1,1,224/255],lime:[0,1,0],limegreen:[50/255,205/255,50/255],linen:[250/255,240/255,230/255],magenta:[1,0,1],maroon:[128/255,0,0],mediumaquamarine:[102/255,205/255,170/255],mediumblue:[0,0,205/255],mediumorchid:[186/255,85/255,211/255],mediumpurple:[147/255,112/255,219/255],mediumseagreen:[60/255,179/255,113/255],mediumslateblue:[123/255,104/255,238/255],mediumspringgreen:[0,250/255,154/255],mediumturquoise:[72/255,209/255,204/255],mediumvioletred:[199/255,21/255,133/255],midnightblue:[25/255,25/255,112/255],mintcream:[245/255,1,250/255],mistyrose:[1,228/255,225/255],moccasin:[1,228/255,181/255],navajowhite:[1,222/255,173/255],navy:[0,0,128/255],oldlace:[253/255,245/255,230/255],olive:[128/255,128/255,0],olivedrab:[107/255,142/255,35/255],orange:[1,165/255,0],orangered:[1,69/255,0],orchid:[218/255,112/255,214/255],palegoldenrod:[238/255,232/255,170/255],palegreen:[152/255,251/255,152/255],paleturquoise:[175/255,238/255,238/255],palevioletred:[219/255,112/255,147/255],papayawhip:[1,239/255,213/255],peachpuff:[1,218/255,185/255],peru:[205/255,133/255,63/255],pink:[1,192/255,203/255],plum:[221/255,160/255,221/255],powderblue:[176/255,224/255,230/255],purple:[128/255,0,128/255],rebeccapurple:[102/255,51/255,153/255],red:[1,0,0],rosybrown:[188/255,143/255,143/255],royalblue:[65/255,105/255,225/255],saddlebrown:[139/255,69/255,19/255],salmon:[250/255,128/255,114/255],sandybrown:[244/255,164/255,96/255],seagreen:[46/255,139/255,87/255],seashell:[1,245/255,238/255],sienna:[160/255,82/255,45/255],silver:[192/255,192/255,192/255],skyblue:[135/255,206/255,235/255],slateblue:[106/255,90/255,205/255],slategray:[112/255,128/255,144/255],slategrey:[112/255,128/255,144/255],snow:[1,250/255,250/255],springgreen:[0,1,127/255],steelblue:[70/255,130/255,180/255],tan:[210/255,180/255,140/255],teal:[0,128/255,128/255],thistle:[216/255,191/255,216/255],tomato:[1,99/255,71/255],turquoise:[64/255,224/255,208/255],violet:[238/255,130/255,238/255],wheat:[245/255,222/255,179/255],white:[1,1,1],whitesmoke:[245/255,245/255,245/255],yellow:[1,1,0],yellowgreen:[154/255,205/255,50/255]},O0=Array(3).fill("<percentage> | <number>[0, 255]"),C0=Array(3).fill("<number>[0, 255]"),Nr=new zt({id:"srgb",name:"sRGB",base:x0,fromBase:e=>e.map(t=>{let r=t<0?-1:1,o=t*r;return o>.0031308?r*(1.055*o**(1/2.4)-.055):12.92*t}),toBase:e=>e.map(t=>{let r=t<0?-1:1,o=t*r;return o<=.04045?t/12.92:r*((o+.055)/1.055)**2.4}),formats:{rgb:{coords:O0},rgb_number:{name:"rgb",commas:!0,coords:C0,alpha:!1},color:{},rgba:{coords:O0,commas:!0,alpha:!0},rgba_number:{name:"rgba",commas:!0,coords:C0},hex:{type:"custom",toGamut:!0,test:e=>/^#(([a-f0-9]{2}){3,4}|[a-f0-9]{3,4})$/i.test(e),parse(e){e.length<=5&&(e=e.replace(/[a-f0-9]/gi,"$&$&"));let t=[];return e.replace(/[a-f0-9]{2}/gi,r=>{t.push(parseInt(r,16)/255)}),{spaceId:"srgb",coords:t.slice(0,3),alpha:t.slice(3)[0]}},serialize:(e,t,{collapse:r=!0,alpha:o}={})=>{(o!==!1&&t<1||o===!0)&&e.push(t),e=e.map(s=>Math.round(s*255));let a=r&&e.every(s=>s%17===0);return"#"+e.map(s=>a?(s/17).toString(16):s.toString(16).padStart(2,"0")).join("")}},keyword:{type:"custom",test:e=>/^[a-z]+$/i.test(e),parse(e){e=e.toLowerCase();let t={spaceId:"srgb",coords:null,alpha:1};if(e==="transparent"?(t.coords=I0.black,t.alpha=0):t.coords=I0[e],t.coords)return t}}}}),T0=new zt({id:"p3",cssId:"display-p3",name:"P3",base:M0,fromBase:Nr.fromBase,toBase:Nr.toBase});nn.display_space=Nr;var Dg;if(typeof CSS<"u"&&CSS.supports)for(let e of[on,A0,T0]){let t=Ji({space:e,coords:e.getMinCoords(),alpha:1});if(CSS.supports("color",t)){nn.display_space=e;break}}function Ng(e,{space:t=nn.display_space,...r}={}){e=Te(e);let o=Ji(e,r);if(typeof CSS>"u"||CSS.supports("color",o)||!nn.display_space)o=new String(o),o.color=e;else{let a=e;if((e.coords.some(je)||je(e.alpha))&&!(Dg??=CSS.supports("color","hsl(none 50% 50%)"))&&(a=si(e),a.coords=a.coords.map(wt),a.alpha=wt(a.alpha),o=Ji(a,r),CSS.supports("color",o)))return o=new String(o),o.color=a,o;a=tt(a,t),o=new String(Ji(a,r)),o.color=a}return o}function Bg(e,t,{space:r,hue:o="shorter"}={}){e=Te(e),r||=e.space,r=ye.get(r);let a=Object.values(r.coords);[e,t]=[e,t].map(h=>tt(h,r));let[s,c]=[e,t].map(h=>h.coords),d=s.map((h,f)=>{let b=a[f],v=c[f];return b.type==="angle"&&([h,v]=ju(o,[h,v])),L0(h,v)}),u=L0(e.alpha,t.alpha);return{space:r,coords:d,alpha:u}}function L0(e,t){return je(e)||je(t)?e===t?null:0:e-t}function Hg(e,t){return e=Te(e),t=Te(t),e.space===t.space&&e.alpha===t.alpha&&e.coords.every((r,o)=>r===t.coords[o])}function dr(e){return rn(e,[Lt,"y"])}function R0(e,t){Zn(e,[Lt,"y"],t)}function Fg(e){Object.defineProperty(e.prototype,"luminance",{get(){return dr(this)},set(t){R0(this,t)}})}var Gg=Object.freeze({__proto__:null,getLuminance:dr,register:Fg,setLuminance:R0});function Ug(e,t){e=Te(e),t=Te(t);let r=Math.max(dr(e),0),o=Math.max(dr(t),0);return o>r&&([r,o]=[o,r]),(r+.05)/(o+.05)}var Wg=.56,Vg=.57,Zg=.62,jg=.65,P0=.022,qg=1.414,Kg=.1,Yg=5e-4,Xg=1.14,$0=.027,Jg=1.14;function z0(e){return e>=P0?e:e+(P0-e)**qg}function ci(e){return(e<0?-1:1)*Math.pow(Math.abs(e),2.4)}function Qg(e,t){t=Te(t),e=Te(e);let r,o,a,s,c,d;t=tt(t,"srgb"),[s,c,d]=t.coords.map(g=>je(g)?0:g);let u=ci(s)*.2126729+ci(c)*.7151522+ci(d)*.072175;e=tt(e,"srgb"),[s,c,d]=e.coords.map(g=>je(g)?0:g);let h=ci(s)*.2126729+ci(c)*.7151522+ci(d)*.072175,f=z0(u),b=z0(h),v=b>f;return Math.abs(b-f)<Yg?o=0:v?(r=b**Wg-f**Vg,o=r*Xg):(r=b**jg-f**Zg,o=r*Jg),Math.abs(o)<Kg?a=0:o>0?a=o-$0:a=o+$0,a*100}function em(e,t){e=Te(e),t=Te(t);let r=Math.max(dr(e),0),o=Math.max(dr(t),0);o>r&&([r,o]=[o,r]);let a=r+o;return a===0?0:(r-o)/a}var tm=5e4;function nm(e,t){e=Te(e),t=Te(t);let r=Math.max(dr(e),0),o=Math.max(dr(t),0);return o>r&&([r,o]=[o,r]),o===0?tm:(r-o)/o}function rm(e,t){e=Te(e),t=Te(t);let r=rn(e,[on,"l"]),o=rn(t,[on,"l"]);return Math.abs(r-o)}var im=216/24389,D0=24/116,na=24389/27,el=Ht.D65,tl=new ye({id:"lab-d65",name:"Lab D65",coords:{l:{refRange:[0,100],name:"Lightness"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:el,base:Lt,fromBase(e){let t=e.map((r,o)=>r/el[o]).map(r=>r>im?Math.cbrt(r):(na*r+16)/116);return[116*t[1]-16,500*(t[0]-t[1]),200*(t[1]-t[2])]},toBase(e){let t=[];return t[1]=(e[0]+16)/116,t[0]=e[1]/500+t[1],t[2]=t[1]-e[2]/200,[t[0]>D0?Math.pow(t[0],3):(116*t[0]-16)/na,e[0]>8?Math.pow((e[0]+16)/116,3):e[0]/na,t[2]>D0?Math.pow(t[2],3):(116*t[2]-16)/na].map((r,o)=>r*el[o])},formats:{"lab-d65":{coords:["<number> | <percentage>","<number> | <percentage>","<number> | <percentage>"]}}}),nl=Math.pow(5,.5)*.5+.5;function om(e,t){e=Te(e),t=Te(t);let r=rn(e,[tl,"l"]),o=rn(t,[tl,"l"]),a=Math.abs(Math.pow(r,nl)-Math.pow(o,nl)),s=Math.pow(a,1/nl)*Math.SQRT2-40;return s<7.5?0:s}var ra=Object.freeze({__proto__:null,contrastAPCA:Qg,contrastDeltaPhi:om,contrastLstar:rm,contrastMichelson:em,contrastWCAG21:Ug,contrastWeber:nm});function am(e,t,r){ii(r)&&(r={algorithm:r});let{algorithm:o,...a}=r||{};if(!o){let s=Object.keys(ra).map(c=>c.replace(/^contrast/,"")).join(", ");throw new TypeError(`contrast() function needs a contrast algorithm. Please specify one of: ${s}`)}e=Te(e),t=Te(t);for(let s in ra)if("contrast"+o.toLowerCase()===s.toLowerCase())return ra[s](e,t,a);throw new TypeError(`Unknown contrast algorithm: ${o}`)}function ia(e){let[t,r,o]=Yi(e,Lt),a=t+15*r+3*o;return[4*t/a,9*r/a]}function N0(e){let[t,r,o]=Yi(e,Lt),a=t+r+o;return[t/a,r/a]}function sm(e){Object.defineProperty(e.prototype,"uv",{get(){return ia(this)}}),Object.defineProperty(e.prototype,"xy",{get(){return N0(this)}})}var lm=Object.freeze({__proto__:null,register:sm,uv:ia,xy:N0});function eo(e,t,r={}){ii(r)&&(r={method:r});let{method:o=nn.deltaE,...a}=r;for(let s in li)if("deltae"+o.toLowerCase()===s.toLowerCase())return li[s](e,t,a);throw new TypeError(`Unknown deltaE method: ${o}`)}function B0(e,t=.25){return Zn(e,[ye.get("oklch","lch"),"l"],r=>r*(1+t))}function H0(e,t=.25){return Zn(e,[ye.get("oklch","lch"),"l"],r=>r*(1-t))}B0.returns="color",H0.returns="color";var cm=Object.freeze({__proto__:null,darken:H0,lighten:B0});function F0(e,t,r,o={}){return[e,t]=[Te(e),Te(t)],sr(r)==="object"&&([r,o]=[.5,r]),to(e,t,o)(r??.5)}function G0(e,t,r={}){let o;rl(e)&&([o,r]=[e,t],[e,t]=o.rangeArgs.colors);let{maxDeltaE:a,deltaEMethod:s,steps:c=2,maxSteps:d=1e3,...u}=r;o||([e,t]=[Te(e),Te(t)],o=to(e,t,u));let h=eo(e,t),f=a>0?Math.max(c,Math.ceil(h/a)+1):c,b=[];if(d!==void 0&&(f=Math.min(f,d)),f===1)b=[{p:.5,color:o(.5)}];else{let v=1/(f-1);b=Array.from({length:f},(g,m)=>{let k=m*v;return{p:k,color:o(k)}})}if(a>0){let v=b.reduce((g,m,k)=>{if(k===0)return 0;let _=eo(m.color,b[k-1].color,s);return Math.max(g,_)},0);for(;v>a;){v=0;for(let g=1;g<b.length&&b.length<d;g++){let m=b[g-1],k=b[g],_=(k.p+m.p)/2,S=o(_);v=Math.max(v,eo(S,m.color),eo(S,k.color)),b.splice(g,0,{p:_,color:o(_)}),g++}}}return b=b.map(v=>v.color),b}function to(e,t,r={}){if(rl(e)){let[u,h]=[e,t];return to(...u.rangeArgs.colors,{...u.rangeArgs.options,...h})}let{space:o,outputSpace:a,progression:s,premultiplied:c}=r;e=Te(e),t=Te(t),e=si(e),t=si(t);let d={colors:[e,t],options:r};if(o?o=ye.get(o):o=ye.registry[nn.interpolationSpace]||e.space,a=a?ye.get(a):o,e=tt(e,o),t=tt(t,o),e=ur(e),t=ur(t),o.coords.h&&o.coords.h.type==="angle"){let u=r.hue=r.hue||"shorter",h=[o,"h"],[f,b]=[rn(e,h),rn(t,h)];je(f)&&!je(b)?f=b:je(b)&&!je(f)&&(b=f),[f,b]=ju(u,[f,b]),Zn(e,h,f),Zn(t,h,b)}return c&&(e.coords=e.coords.map(u=>u*e.alpha),t.coords=t.coords.map(u=>u*t.alpha)),Object.assign(u=>{u=s?s(u):u;let h=e.coords.map((v,g)=>{let m=t.coords[g];return Ki(v,m,u)}),f=Ki(e.alpha,t.alpha,u),b={space:o,coords:h,alpha:f};return c&&(b.coords=b.coords.map(v=>v/f)),a!==o&&(b=tt(b,a)),b},{rangeArgs:d})}function rl(e){return sr(e)==="function"&&!!e.rangeArgs}nn.interpolationSpace="lab";function um(e){e.defineFunction("mix",F0,{returns:"color"}),e.defineFunction("range",to,{returns:"function<color>"}),e.defineFunction("steps",G0,{returns:"array<color>"})}var dm=Object.freeze({__proto__:null,isRange:rl,mix:F0,range:to,register:um,steps:G0}),hm=new ye({id:"hsl",name:"HSL",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:Nr,fromBase:e=>{let t=Math.max(...e),r=Math.min(...e),[o,a,s]=e,[c,d,u]=[null,0,(r+t)/2],h=t-r;if(h!==0){switch(d=u===0||u===1?0:(t-u)/Math.min(u,1-u),t){case o:c=(a-s)/h+(a<s?6:0);break;case a:c=(s-o)/h+2;break;case s:c=(o-a)/h+4}c=c*60}return d<0&&(c+=180,d=Math.abs(d)),c>=360&&(c-=360),[c,d*100,u*100]},toBase:e=>{let[t,r,o]=e;t=t%360,t<0&&(t+=360),r/=100,o/=100;function a(s){let c=(s+t/30)%12,d=r*Math.min(o,1-o);return o-d*Math.max(-1,Math.min(c-3,9-c,1))}return[a(0),a(8),a(4)]},formats:{hsl:{coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]},hsla:{coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"],commas:!0,alpha:!0}}}),U0=new ye({id:"hsv",name:"HSV",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},v:{range:[0,100],name:"Value"}},base:Nr,fromBase(e){let t=Math.max(...e),r=Math.min(...e),[o,a,s]=e,[c,d,u]=[null,0,t],h=t-r;if(h!==0){switch(t){case o:c=(a-s)/h+(a<s?6:0);break;case a:c=(s-o)/h+2;break;case s:c=(o-a)/h+4}c=c*60}return u&&(d=h/u),c>=360&&(c-=360),[c,d*100,u*100]},toBase(e){let[t,r,o]=e;t=t%360,t<0&&(t+=360),r/=100,o/=100;function a(s){let c=(s+t/60)%6;return o-o*r*Math.max(0,Math.min(c,4-c,1))}return[a(5),a(3),a(1)]},formats:{color:{id:"--hsv",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}}),fm=new ye({id:"hwb",name:"HWB",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},w:{range:[0,100],name:"Whiteness"},b:{range:[0,100],name:"Blackness"}},base:U0,fromBase(e){let[t,r,o]=e;return[t,o*(100-r)/100,100-o]},toBase(e){let[t,r,o]=e;r/=100,o/=100;let a=r+o;if(a>=1)return[t,0,r/a*100];let s=1-o;return[t,(s===0?0:1-r/s)*100,s*100]},formats:{hwb:{coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}}),W0=new zt({id:"a98rgb-linear",cssId:"--a98-rgb-linear",name:"Linear Adobe® 98 RGB compatible",white:"D65",toXYZ_M:[[.5766690429101305,.1855582379065463,.1882286462349947],[.29734497525053605,.6273635662554661,.07529145849399788],[.02703136138641234,.07068885253582723,.9913375368376388]],fromXYZ_M:[[2.0415879038107465,-.5650069742788596,-.34473135077832956],[-.9692436362808795,1.8759675015077202,.04155505740717557],[.013444280632031142,-.11836239223101838,1.0151749943912054]]}),pm=new zt({id:"a98rgb",cssId:"a98-rgb",name:"Adobe® 98 RGB compatible",base:W0,toBase:e=>e.map(t=>Math.pow(Math.abs(t),563/256)*Math.sign(t)),fromBase:e=>e.map(t=>Math.pow(Math.abs(t),256/563)*Math.sign(t))}),V0=new zt({id:"prophoto-linear",cssId:"--prophoto-rgb-linear",name:"Linear ProPhoto",white:"D50",base:Us,toXYZ_M:[[.7977666449006423,.13518129740053308,.0313477341283922],[.2880748288194013,.711835234241873,8993693872564e-17],[0,0,.8251046025104602]],fromXYZ_M:[[1.3457868816471583,-.25557208737979464,-.05110186497554526],[-.5446307051249019,1.5082477428451468,.02052744743642139],[0,0,1.2119675456389452]]}),gm=1/512,mm=16/512,vm=new zt({id:"prophoto",cssId:"prophoto-rgb",name:"ProPhoto",base:V0,toBase(e){return e.map(t=>{let r=t<0?-1:1,o=t*r;return o<mm?t/16:r*o**1.8})},fromBase(e){return e.map(t=>{let r=t<0?-1:1,o=t*r;return o>=gm?r*o**(1/1.8):16*t})}}),oa=1.09929682680944,Z0=.018053968510807,bm=new zt({id:"--rec2020-oetf",name:"REC.2020_Scene_Referred",base:Qi,referred:"scene",toBase(e){return e.map(function(t){let r=t<0?-1:1,o=t*r;return o<Z0*4.5?t/4.5:r*Math.pow((o+oa-1)/oa,1/.45)})},fromBase(e){return e.map(function(t){let r=t<0?-1:1,o=t*r;return o>=Z0?r*(oa*Math.pow(o,.45)-(oa-1)):4.5*t})}}),wm=new ye({id:"oklch",name:"OkLCh",coords:{l:{refRange:[0,1],name:"Lightness"},c:{refRange:[0,.4],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},white:"D65",base:Tn,fromBase:an.fromBase,toBase:an.toBase,formats:{oklch:{coords:["<percentage> | <number>","<number> | <percentage>","<number> | <angle>"]}}}),ui=2*Math.PI,aa=[[4.076741636075958,-3.307711539258063,.2309699031821043],[-1.2684379732850315,2.609757349287688,-.341319376002657],[-.0041960761386756,-.7034186179359362,1.7076146940746117]],sa=[[[-1.8817031,-.80936501],[1.19086277,1.76576728,.59662641,.75515197,.56771245]],[[1.8144408,-1.19445267],[.73956515,-.45954404,.08285427,.12541073,-.14503204]],[[.13110758,1.81333971],[1.35733652,-.00915799,-1.1513021,-.50559606,.00692167]]],il=Number.MAX_VALUE,no=.206,ol=.03,ro=(1+no)/(1+ol);function Rt(e,t){let r=e.length;if(r!==t.length)throw new Error(`Vectors of size ${r} and ${t.length} are not aligned`);let o=0;return e.forEach((a,s)=>{o+=a*t[s]}),o}function io(e){return .5*(ro*e-no+Math.sqrt((ro*e-no)*(ro*e-no)+4*ol*ro*e))}function di(e){return(e**2+no*e)/(ro*(e+ol))}function al(e){let[t,r]=e;return[r/t,r/(1-t)]}function _m(e,t){return[.11516993+1/(7.4477897+4.1590124*t+e*(-2.19557347+1.75198401*t+e*(-2.13704948-10.02301043*t+e*(-4.24894561+5.38770819*t+4.69891013*e)))),.11239642+1/(1.6132032-.68124379*t+e*(.40370612+.90148123*t+e*(-.27087943+.6122399*t+e*(.00299215-.45399568*t-.14661872*e))))]}function sl(e,t){let r=ft(e,cr);return r[0]=r[0]**3,r[1]=r[1]**3,r[2]=r[2]**3,ft(r,t,r)}function la(e,t,r,o){let a=km(e,t,r,o),s=sl([1,a*e,a*t],r),c=_t(1/Math.max(...s),1/3);return[c,c*a]}function ym(e,t,r,o,a,s,c,d){let u;if(d===void 0&&(d=la(e,t,s,c)),(r-a)*d[1]-(d[0]-a)*o<=0)u=d[1]*a/(o*d[0]+d[1]*(a-r));else{u=d[1]*(a-1)/(o*(d[0]-1)+d[1]*(a-r));let h=r-a,f=o,b=Rt(cr[0].slice(1),[e,t]),v=Rt(cr[1].slice(1),[e,t]),g=Rt(cr[2].slice(1),[e,t]),m=h+f*b,k=h+f*v,_=h+f*g,S=a*(1-u)+u*r,M=u*o,C=S+M*b,T=S+M*v,$=S+M*g,Z=C**3,U=T**3,ie=$**3,H=3*m*C**2,fe=3*k*T**2,we=3*_*$**2,R=6*m**2*C,j=6*k**2*T,E=6*_**2*$,J=Rt(s[0],[Z,U,ie])-1,xe=Rt(s[0],[H,fe,we]),oe=Rt(s[0],[R,j,E]),Me=xe/(xe*xe-.5*J*oe),ae=-J*Me,Ee=Rt(s[1],[Z,U,ie])-1,F=Rt(s[1],[H,fe,we]),G=Rt(s[1],[R,j,E]),Se=F/(F*F-.5*Ee*G),pe=-Ee*Se,de=Rt(s[2],[Z,U,ie])-1,Ke=Rt(s[2],[H,fe,we]),kt=Rt(s[2],[R,j,E]),$e=Ke/(Ke*Ke-.5*de*kt),Fe=-de*$e;ae=Me>=0?ae:il,pe=Se>=0?pe:il,Fe=$e>=0?Fe:il,u+=Math.min(ae,Math.min(pe,Fe))}return u}function j0(e,t,r){let[o,a,s]=e,c=la(a,s,t,r),d=ym(a,s,o,1,o,t,r,c),u=al(c),h=d/Math.min(o*u[0],(1-o)*u[1]),f=_m(a,s),b=o*f[0],v=(1-o)*f[1],g=.9*h*Math.sqrt(Math.sqrt(1/(1/b**4+1/v**4)));return b=o*.4,v=(1-o)*.8,[Math.sqrt(1/(1/b**2+1/v**2)),g,d]}function km(e,t,r,o){let a,s,c,d,u,h,f,b;Rt(o[0][0],[e,t])>1?([a,s,c,d,u]=o[0][1],[h,f,b]=r[0]):Rt(o[1][0],[e,t])>1?([a,s,c,d,u]=o[1][1],[h,f,b]=r[1]):([a,s,c,d,u]=o[2][1],[h,f,b]=r[2]);let v=a+s*e+c*t+d*e**2+u*e*t,g=Rt(cr[0].slice(1),[e,t]),m=Rt(cr[1].slice(1),[e,t]),k=Rt(cr[2].slice(1),[e,t]),_=1+v*g,S=1+v*m,M=1+v*k,C=_**3,T=S**3,$=M**3,Z=3*g*_**2,U=3*m*S**2,ie=3*k*M**2,H=6*g**2*_,fe=6*m**2*S,we=6*k**2*M,R=h*C+f*T+b*$,j=h*Z+f*U+b*ie,E=h*H+f*fe+b*we;return v=v-R*j/(j**2-.5*R*E),v}function Em(e,t,r){let[o,a,s]=e,c=di(s),d=null,u=null;if(o=vn(o)/360,c!==0&&c!==1&&a!==0){let h=Math.cos(ui*o),f=Math.sin(ui*o),[b,v,g]=j0([c,h,f],t,r),m=.8,k=1.25,_,S,M,C;a<m?(_=k*a,S=0,M=m*b,C=1-M/v):(_=5*(a-.8),S=v,M=.2*v**2*1.25**2/b,C=1-M/(g-v));let T=S+_*M/(1-C*_);d=T*h,u=T*f}return[c,d,u]}function Sm(e,t,r){let o=1e-7,a=1e-4,s=e[0],c=0,d=io(s),u=Math.sqrt(e[1]**2+e[2]**2),h=.5+Math.atan2(-e[2],-e[1])/ui;if(d!==0&&d!==1&&u!==0){let[b,v,g]=j0([s,e[1]/u,e[2]/u],t,r),m=.8,k=1.25,_,S,M,C;u<v?(S=m*b,M=1-S/v,C=u/(S+M*u),c=C*m):(_=v,S=.2*v**2*k**2/b,M=1-S/(g-v),C=(u-_)/(S+M*(u-_)),c=m+.2*C)}const f=Math.abs(c)<a;return f||d===0||Math.abs(1-d)<o?(h=null,f||(c=0)):h=vn(h*360),[h,c,d]}var Am=new ye({id:"okhsl",name:"Okhsl",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,1],name:"Saturation"},l:{range:[0,1],name:"Lightness"}},base:Tn,gamutSpace:"self",fromBase(e){return Sm(e,aa,sa)},toBase(e){return Em(e,aa,sa)},formats:{color:{id:"--okhsl",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}}),q0=new ye({id:"oklrab",name:"Oklrab",coords:{l:{refRange:[0,1],name:"Lightness"},a:{refRange:[-.4,.4]},b:{refRange:[-.4,.4]}},white:"D65",base:Tn,fromBase(e){return[io(e[0]),e[1],e[2]]},toBase(e){return[di(e[0]),e[1],e[2]]},formats:{color:{coords:["<percentage> | <number>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}}),Mm=new ye({id:"oklrch",name:"Oklrch",coords:{l:{refRange:[0,1],name:"Lightness"},c:{refRange:[0,.4],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},white:"D65",base:q0,fromBase:an.fromBase,toBase:an.toBase,formats:{color:{coords:["<percentage> | <number>","<number> | <percentage>[0,1]","<number> | <angle>"]}}});function xm(e,t,r){let[o,a,s]=e;o=vn(o)/360;let c=di(s),d=null,u=null;if(c!==0&&a!==0){let h=Math.cos(ui*o),f=Math.sin(ui*o),[b,v]=al(la(h,f,t,r)),g=.5,m=1-g/b,k=1-a*g/(g+v-v*m*a),_=a*v*g/(g+v-v*m*a);c=s*k;let S=s*_,M=di(k),C=_*M/k,T=di(c);S=S*T/c,c=T;let[$,Z,U]=sl([M,h*C,f*C],t),ie=_t(1/Math.max(Math.max($,Z),Math.max(U,0)),1/3);c=c*ie,S=S*ie,d=S*h,u=S*f}return[c,d,u]}function Im(e,t,r){let o=1e-4,a=e[0],s=0,c=io(a),d=Math.sqrt(e[1]**2+e[2]**2),u=.5+Math.atan2(-e[2],-e[1])/ui;if(a!==0&&a!==1&&d!==0){let h=e[1]/d,f=e[2]/d,[b,v]=al(la(h,f,t,r)),g=.5,m=1-g/b,k=v/(d+a*v),_=k*a,S=k*d,M=di(_),C=S*M/_,[T,$,Z]=sl([M,h*C,f*C],t),U=_t(1/Math.max(Math.max(T,$),Math.max(Z,0)),1/3);a=a/U,d=d/U,d=d*io(a)/a,a=io(a),c=a/_,s=(g+v)*S/(v*g+v*m*S)}return Math.abs(s)<o||c===0?u=null:u=vn(u*360),[u,s,c]}var Om=new ye({id:"okhsv",name:"Okhsv",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,1],name:"Saturation"},v:{range:[0,1],name:"Value"}},base:Tn,gamutSpace:"self",fromBase(e){return Im(e,aa,sa)},toBase(e){return xm(e,aa,sa)},formats:{color:{id:"--okhsv",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}}),K0=Ht.D65,Cm=216/24389,Y0=24389/27,[X0,J0]=ia({space:Lt,coords:K0}),Q0=new ye({id:"luv",name:"Luv",coords:{l:{refRange:[0,100],name:"Lightness"},u:{refRange:[-215,215]},v:{refRange:[-215,215]}},white:K0,base:Lt,fromBase(e){let t=[wt(e[0]),wt(e[1]),wt(e[2])],r=t[1],[o,a]=ia({space:Lt,coords:t});if(!Number.isFinite(o)||!Number.isFinite(a))return[0,0,0];let s=r<=Cm?Y0*r:116*Math.cbrt(r)-16;return[s,13*s*(o-X0),13*s*(a-J0)]},toBase(e){let[t,r,o]=e;if(t===0||je(t))return[0,0,0];r=wt(r),o=wt(o);let a=r/(13*t)+X0,s=o/(13*t)+J0,c=t<=8?t/Y0:Math.pow((t+16)/116,3);return[c*(9*a/(4*s)),c,c*((12-3*a-20*s)/(4*s))]},formats:{color:{id:"--luv",coords:["<number> | <percentage>","<number> | <percentage>","<number> | <percentage>"]}}}),ll=new ye({id:"lchuv",name:"LChuv",coords:{l:{refRange:[0,100],name:"Lightness"},c:{refRange:[0,220],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:Q0,fromBase:an.fromBase,toBase:an.toBase,formats:{color:{id:"--lchuv",coords:["<number> | <percentage>","<number> | <percentage>","<number> | <angle>"]}}}),Tm=216/24389,Lm=24389/27,ed=At[0][0],td=At[0][1],cl=At[0][2],nd=At[1][0],rd=At[1][1],ul=At[1][2],id=At[2][0],od=At[2][1],dl=At[2][2];function hi(e,t,r){const o=t/(Math.sin(r)-e*Math.cos(r));return o<0?1/0:o}function ca(e){const t=Math.pow(e+16,3)/1560896,r=t>Tm?t:e/Lm,o=r*(284517*ed-94839*cl),a=r*(838422*cl+769860*td+731718*ed),s=r*(632260*cl-126452*td),c=r*(284517*nd-94839*ul),d=r*(838422*ul+769860*rd+731718*nd),u=r*(632260*ul-126452*rd),h=r*(284517*id-94839*dl),f=r*(838422*dl+769860*od+731718*id),b=r*(632260*dl-126452*od);return{r0s:o/s,r0i:a*e/s,r1s:o/(s+126452),r1i:(a-769860)*e/(s+126452),g0s:c/u,g0i:d*e/u,g1s:c/(u+126452),g1i:(d-769860)*e/(u+126452),b0s:h/b,b0i:f*e/b,b1s:h/(b+126452),b1i:(f-769860)*e/(b+126452)}}function ad(e,t){const r=t/360*Math.PI*2,o=hi(e.r0s,e.r0i,r),a=hi(e.r1s,e.r1i,r),s=hi(e.g0s,e.g0i,r),c=hi(e.g1s,e.g1i,r),d=hi(e.b0s,e.b0i,r),u=hi(e.b1s,e.b1i,r);return Math.min(o,a,s,c,d,u)}var Rm=new ye({id:"hsluv",name:"HSLuv",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:ll,gamutSpace:Nr,fromBase(e){let[t,r,o]=[wt(e[0]),wt(e[1]),wt(e[2])],a;return t>99.9999999?(a=0,t=100):t<1e-8?(a=0,t=0):a=r/ad(ca(t),o)*100,[o,a,t]},toBase(e){let[t,r,o]=[wt(e[0]),wt(e[1]),wt(e[2])],a;return o>99.9999999?(o=100,a=0):o<1e-8?(o=0,a=0):a=ad(ca(o),t)/100*r,[o,a,t]},formats:{color:{id:"--hsluv",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}});At[0][0],At[0][1],At[0][2],At[1][0],At[1][1],At[1][2],At[2][0],At[2][1],At[2][2];function fi(e,t){return Math.abs(t)/Math.sqrt(Math.pow(e,2)+1)}function sd(e){let t=fi(e.r0s,e.r0i),r=fi(e.r1s,e.r1i),o=fi(e.g0s,e.g0i),a=fi(e.g1s,e.g1i),s=fi(e.b0s,e.b0i),c=fi(e.b1s,e.b1i);return Math.min(t,r,o,a,s,c)}var Pm=new ye({id:"hpluv",name:"HPLuv",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:ll,gamutSpace:"self",fromBase(e){let[t,r,o]=[wt(e[0]),wt(e[1]),wt(e[2])],a;return t>99.9999999?(a=0,t=100):t<1e-8?(a=0,t=0):a=r/sd(ca(t))*100,[o,a,t]},toBase(e){let[t,r,o]=[wt(e[0]),wt(e[1]),wt(e[2])],a;return o>99.9999999?(o=100,a=0):o<1e-8?(o=0,a=0):a=sd(ca(o))/100*r,[o,a,t]},formats:{color:{id:"--hpluv",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}}),hl=new zt({id:"rec2100-linear",name:"Linear REC.2100",white:"D65",toBase:Qi.toBase,fromBase:Qi.fromBase}),ld=203,cd=2610/2**14,$m=2**14/2610,zm=2523/2**5,ud=2**5/2523,dd=3424/2**12,hd=2413/2**7,fd=2392/2**7,Dm=new zt({id:"rec2100pq",cssId:"rec2100-pq",name:"REC.2100-PQ",base:hl,toBase(e){return e.map(function(t){return(Math.max(t**ud-dd,0)/(hd-fd*t**ud))**$m*1e4/ld})},fromBase(e){return e.map(function(t){let r=Math.max(t*ld/1e4,0);return((dd+hd*r**cd)/(1+fd*r**cd))**zm})}}),pd=.17883277,gd=.28466892,md=.55991073,fl=3.7743,Nm=new zt({id:"rec2100hlg",cssId:"rec2100-hlg",name:"REC.2100-HLG",referred:"scene",base:hl,toBase(e){return e.map(function(t){return t<=.5?t**2/3*fl:(Math.exp((t-md)/pd)+gd)/12*fl})},fromBase(e){return e.map(function(t){return t/=fl,t<=1/12?_t(3*t,.5):pd*Math.log(12*t-gd)+md})}}),vd={};lr.add("chromatic-adaptation-start",e=>{e.options.method&&(e.M=bd(e.W1,e.W2,e.options.method))}),lr.add("chromatic-adaptation-end",e=>{e.M||(e.M=bd(e.W1,e.W2,e.options.method))});function ua({id:e,toCone_M:t,fromCone_M:r}){vd[e]=arguments[0]}function bd(e,t,r="Bradford"){let o=vd[r],[a,s,c]=qi(o.toCone_M,e),[d,u,h]=qi(o.toCone_M,t),f=qi([[d/a,0,0],[0,u/s,0],[0,0,h/c]],o.toCone_M);return qi(o.fromCone_M,f)}ua({id:"von Kries",toCone_M:[[.40024,.7076,-.08081],[-.2263,1.16532,.0457],[0,0,.91822]],fromCone_M:[[1.8599363874558397,-1.1293816185800916,.21989740959619328],[.3611914362417676,.6388124632850422,-6370596838649899e-21],[0,0,1.0890636230968613]]}),ua({id:"Bradford",toCone_M:[[.8951,.2664,-.1614],[-.7502,1.7135,.0367],[.0389,-.0685,1.0296]],fromCone_M:[[.9869929054667121,-.14705425642099013,.15996265166373122],[.4323052697233945,.5183602715367774,.049291228212855594],[-.00852866457517732,.04004282165408486,.96848669578755]]}),ua({id:"CAT02",toCone_M:[[.7328,.4296,-.1624],[-.7036,1.6975,.0061],[.003,.0136,.9834]],fromCone_M:[[1.0961238208355142,-.27886900021828726,.18274517938277307],[.4543690419753592,.4735331543074117,.07209780371722911],[-.009627608738429355,-.00569803121611342,1.0153256399545427]]}),ua({id:"CAT16",toCone_M:[[.401288,.650173,-.051461],[-.250268,1.204414,.045854],[-.002079,.048952,.953127]],fromCone_M:[[1.862067855087233,-1.0112546305316845,.14918677544445172],[.3875265432361372,.6214474419314753,-.008973985167612521],[-.01584149884933386,-.03412293802851557,1.0499644368778496]]}),Object.assign(Ht,{A:[1.0985,1,.35585],C:[.98074,1,1.18232],D55:[.95682,1,.92149],D75:[.94972,1,1.22638],E:[1,1,1],F2:[.99186,1,.67393],F7:[.95041,1,1.08747],F11:[1.00962,1,.6435]}),Ht.ACES=[.32168/.33767,1,.34065/.33767];var wd=new zt({id:"acescg",cssId:"--acescg",name:"ACEScg",coords:{r:{range:[0,65504],name:"Red"},g:{range:[0,65504],name:"Green"},b:{range:[0,65504],name:"Blue"}},referred:"scene",white:Ht.ACES,toXYZ_M:[[.6624541811085053,.13400420645643313,.1561876870049078],[.27222871678091454,.6740817658111484,.05368951740793705],[-.005574649490394108,.004060733528982826,1.0103391003129971]],fromXYZ_M:[[1.6410233796943257,-.32480329418479,-.23642469523761225],[-.6636628587229829,1.6153315916573379,.016756347685530137],[.011721894328375376,-.008284441996237409,.9883948585390215]]}),da=2**-16,pl=-.35828683,ha=(Math.log2(65504)+9.72)/17.52,Bm=new zt({id:"acescc",cssId:"--acescc",name:"ACEScc",coords:{r:{range:[pl,ha],name:"Red"},g:{range:[pl,ha],name:"Green"},b:{range:[pl,ha],name:"Blue"}},referred:"scene",base:wd,toBase(e){const t=-.3013698630136986;return e.map(function(r){return r<=t?(2**(r*17.52-9.72)-da)*2:r<ha?2**(r*17.52-9.72):65504})},fromBase(e){return e.map(function(t){return t<=0?(Math.log2(da)+9.72)/17.52:t<da?(Math.log2(da+t*.5)+9.72)/17.52:(Math.log2(t)+9.72)/17.52})}}),_d=Object.freeze({__proto__:null,A98RGB:pm,A98RGB_Linear:W0,ACEScc:Bm,ACEScg:wd,CAM16_JMh:Mg,HCT:Xi,HPLuv:Pm,HSL:hm,HSLuv:Rm,HSV:U0,HWB:fm,ICTCP:Ks,JzCzHz:qs,Jzazbz:a0,LCH:an,LCHuv:ll,Lab:on,Lab_D65:tl,Luv:Q0,OKLCH:wm,OKLab:Tn,OKLrCH:Mm,OKLrab:q0,Okhsl:Am,Okhsv:Om,P3:T0,P3_Linear:M0,ProPhoto:vm,ProPhoto_Linear:V0,REC_2020:A0,REC_2020_Linear:Qi,REC_2020_Scene_Referred:bm,REC_2100_HLG:Nm,REC_2100_Linear:hl,REC_2100_PQ:Dm,XYZ_ABS_D65:Zs,XYZ_D50:Us,XYZ_D65:Lt,sRGB:Nr,sRGB_Linear:x0}),lt=class tn{constructor(...t){let r;if(t.length===1){let c={};typeof t[0]=="object"&&Object.getPrototypeOf(t[0]).constructor===Object&&(t[0]={...t[0]}),r=Te(t[0],{parseMeta:c}),c.format&&(this.parseMeta=c)}let o,a,s;r?(o=r.space||r.spaceId,a=r.coords,s=r.alpha):[o,a,s]=t,Object.defineProperty(this,"space",{value:ye.get(o),writable:!1,enumerable:!0,configurable:!0}),this.coords=a?a.slice():[0,0,0],this.alpha=je(s)?s:s===void 0?1:jo(0,s,1);for(let c in this.space.coords)Object.defineProperty(this,c,{get:()=>this.get(c),set:d=>this.set(c,d)})}get spaceId(){return this.space.id}clone(){return new tn(this.space,this.coords,this.alpha)}toJSON(){return{spaceId:this.spaceId,coords:this.coords,alpha:this.alpha}}display(...t){let r=Ng(this,...t);return r.color=new tn(r.color),r}static get(t,...r){return oi(t,this)?t:new tn(t,...r)}static try(t,r){if(oi(t,this))return t;let o=Vu(t,r);return o?new tn(o):null}static defineFunction(t,r,o=r){let{instance:a=!0,returns:s}=o,c=function(...d){let u=r(...d);if(s==="color")u=tn.get(u);else if(s==="function<color>"){let h=u;u=function(...f){let b=h(...f);return tn.get(b)},Object.assign(u,h)}else s==="array<color>"&&(u=u.map(h=>tn.get(h)));return u};t in tn||(tn[t]=c),a&&(tn.prototype[t]=function(...d){return c(this,...d)})}static defineFunctions(t){for(let r in t)tn.defineFunction(r,t[r],t[r])}static extend(t){if(t.register)t.register(tn);else for(let r in t)tn.defineFunction(r,t[r])}};lt.defineFunctions({get:rn,getAll:Yi,set:Zn,setAll:Gs,to:tt,equals:Hg,inGamut:zr,toGamut:ur,distance:Ju,deltas:Bg,toString:Ji}),Object.assign(lt,{util:Gp,hooks:lr,WHITES:Ht,Space:ye,spaces:ye.registry,parse:Uu,defaults:nn});for(let e of Object.keys(_d))ye.register(_d[e]);for(let e in ye.registry)gl(e,ye.registry[e]);lr.add("colorspace-init-end",e=>{gl(e.id,e),e.aliases?.forEach(t=>{gl(t,e)})});function gl(e,t){let r=e.replace(/-/g,"_");Object.defineProperty(lt.prototype,r,{get(){let o=this.getAll(e);if(typeof Proxy>"u")return o;let a=new Proxy(o,{has:(s,c)=>{try{return ye.resolveCoord([t,c]),!0}catch{}return Reflect.has(s,c)},get:(s,c,d)=>{if(c&&typeof c!="symbol"&&!(c in s)&&c in a){let{index:u}=ye.resolveCoord([t,c]);if(u>=0)return s[u]}return Reflect.get(s,c,d)},set:(s,c,d,u)=>{if(c&&typeof c!="symbol"&&!(c in s)||Number(c)>=0){let{index:h}=ye.resolveCoord([t,c]);if(h>=0)return s[h]=d,this.setAll(e,s),!0}return Reflect.set(s,c,d,u)}});return a},set(o){this.setAll(e,o)},configurable:!0,enumerable:!0})}lt.extend(li),lt.extend({deltaE:eo}),Object.assign(lt,{deltaEMethods:li}),lt.extend(cm),lt.extend({contrast:am}),lt.extend(lm),lt.extend(Gg),lt.extend(dm),lt.extend(ra);var ml={navy:"#001f3f",darkblue:"#1e4f7a",blue:"#1A2F4B",darkgreen:"#062925",green:"#1A3636",grass:"#1B3C53",teal:"#044A42",darkpurple:"#1B0044",purple:"#363062",grape:"#31326F",maroon:"#44000D"},yt={dark:{50:"#C1C2C5",100:"#A6A7AB",200:"#909296",300:"#5c5f66",400:"#373A40",500:"#2C2E33",600:"#25262b",700:"#1A1B1E",800:"#141517",900:"#101113",950:"#000000"},slate:{50:"oklch(98.4% 0.003 247.858)",100:"oklch(96.8% 0.007 247.896)",200:"oklch(92.9% 0.013 255.508)",300:"oklch(86.9% 0.022 252.894)",400:"oklch(70.4% 0.04 256.788)",500:"oklch(55.4% 0.046 257.417)",600:"oklch(44.6% 0.043 257.281)",700:"oklch(37.2% 0.044 257.287)",800:"oklch(27.9% 0.041 260.031)",900:"oklch(20.8% 0.042 265.755)",950:"oklch(12.9% 0.042 264.695)"},gray:{50:"oklch(98.5% 0.002 247.839)",100:"oklch(96.7% 0.003 264.542)",200:"oklch(92.8% 0.006 264.531)",300:"oklch(87.2% 0.01 258.338)",400:"oklch(70.7% 0.022 261.325)",500:"oklch(55.1% 0.027 264.364)",600:"oklch(44.6% 0.03 256.802)",700:"oklch(37.3% 0.034 259.733)",800:"oklch(27.8% 0.033 256.848)",900:"oklch(21% 0.034 264.665)",950:"oklch(13% 0.028 261.692)"},zinc:{50:"oklch(98.5% 0 0)",100:"oklch(96.7% 0.001 286.375)",200:"oklch(92% 0.004 286.32)",300:"oklch(87.1% 0.006 286.286)",400:"oklch(70.5% 0.015 286.067)",500:"oklch(55.2% 0.016 285.938)",600:"oklch(44.2% 0.017 285.786)",700:"oklch(37% 0.013 285.805)",800:"oklch(27.4% 0.006 286.033)",900:"oklch(21% 0.006 285.885)",950:"oklch(14.1% 0.005 285.823)"},neutral:{50:"oklch(98.5% 0 0)",100:"oklch(97% 0 0)",200:"oklch(92.2% 0 0)",300:"oklch(87% 0 0)",400:"oklch(70.8% 0 0)",500:"oklch(55.6% 0 0)",600:"oklch(43.9% 0 0)",700:"oklch(37.1% 0 0)",800:"oklch(26.9% 0 0)",900:"oklch(20.5% 0 0)",950:"oklch(14.5% 0 0)"},stone:{50:"oklch(98.5% 0.001 106.423)",100:"oklch(97% 0.001 106.424)",200:"oklch(92.3% 0.003 48.717)",300:"oklch(86.9% 0.005 56.366)",400:"oklch(70.9% 0.01 56.259)",500:"oklch(55.3% 0.013 58.071)",600:"oklch(44.4% 0.011 73.639)",700:"oklch(37.4% 0.01 67.558)",800:"oklch(26.8% 0.007 34.298)",900:"oklch(21.6% 0.006 56.043)",950:"oklch(14.7% 0.004 49.25)"},red:{50:"oklch(97.1% 0.013 17.38)",100:"oklch(93.6% 0.032 17.717)",200:"oklch(88.5% 0.062 18.334)",300:"oklch(80.8% 0.114 19.571)",400:"oklch(70.4% 0.191 22.216)",500:"oklch(63.7% 0.237 25.331)",600:"oklch(57.7% 0.245 27.325)",700:"oklch(50.5% 0.213 27.518)",800:"oklch(44.4% 0.177 26.899)",900:"oklch(39.6% 0.141 25.723)",950:"oklch(25.8% 0.092 26.042)"},orange:{50:"oklch(98% 0.016 73.684)",100:"oklch(95.4% 0.038 75.164)",200:"oklch(90.1% 0.076 70.697)",300:"oklch(83.7% 0.128 66.29)",400:"oklch(75% 0.183 55.934)",500:"oklch(70.5% 0.213 47.604)",600:"oklch(64.6% 0.222 41.116)",700:"oklch(55.3% 0.195 38.402)",800:"oklch(47% 0.157 37.304)",900:"oklch(40.8% 0.123 38.172)",950:"oklch(26.6% 0.079 36.259)"},amber:{50:"oklch(98.7% 0.022 95.277)",100:"oklch(96.2% 0.059 95.617)",200:"oklch(92.4% 0.12 95.746)",300:"oklch(87.9% 0.169 91.605)",400:"oklch(82.8% 0.189 84.429)",500:"oklch(76.9% 0.188 70.08)",600:"oklch(66.6% 0.179 58.318)",700:"oklch(55.5% 0.163 48.998)",800:"oklch(47.3% 0.137 46.201)",900:"oklch(41.4% 0.112 45.904)",950:"oklch(27.9% 0.077 45.635)"},yellow:{50:"oklch(98.7% 0.026 102.212)",100:"oklch(97.3% 0.071 103.193)",200:"oklch(94.5% 0.129 101.54)",300:"oklch(90.5% 0.182 98.111)",400:"oklch(85.2% 0.199 91.936)",500:"oklch(79.5% 0.184 86.047)",600:"oklch(68.1% 0.162 75.834)",700:"oklch(55.4% 0.135 66.442)",800:"oklch(47.6% 0.114 61.907)",900:"oklch(42.1% 0.095 57.708)",950:"oklch(28.6% 0.066 53.813)"},lime:{50:"oklch(98.6% 0.031 120.757)",100:"oklch(96.7% 0.067 122.328)",200:"oklch(93.8% 0.127 124.321)",300:"oklch(89.7% 0.196 126.665)",400:"oklch(84.1% 0.238 128.85)",500:"oklch(76.8% 0.233 130.85)",600:"oklch(64.8% 0.2 131.684)",700:"oklch(53.2% 0.157 131.589)",800:"oklch(45.3% 0.124 130.933)",900:"oklch(40.5% 0.101 131.063)",950:"oklch(27.4% 0.072 132.109)"},green:{50:"oklch(98.2% 0.018 155.826)",100:"oklch(96.2% 0.044 156.743)",200:"oklch(92.5% 0.084 155.995)",300:"oklch(87.1% 0.15 154.449)",400:"oklch(79.2% 0.209 151.711)",500:"oklch(72.3% 0.219 149.579)",600:"oklch(62.7% 0.194 149.214)",700:"oklch(52.7% 0.154 150.069)",800:"oklch(44.8% 0.119 151.328)",900:"oklch(39.3% 0.095 152.535)",950:"oklch(26.6% 0.065 152.934)"},emerald:{50:"oklch(97.9% 0.021 166.113)",100:"oklch(95% 0.052 163.051)",200:"oklch(90.5% 0.093 164.15)",300:"oklch(84.5% 0.143 164.978)",400:"oklch(76.5% 0.177 163.223)",500:"oklch(69.6% 0.17 162.48)",600:"oklch(59.6% 0.145 163.225)",700:"oklch(50.8% 0.118 165.612)",800:"oklch(43.2% 0.095 166.913)",900:"oklch(37.8% 0.077 168.94)",950:"oklch(26.2% 0.051 172.552)"},teal:{50:"oklch(98.4% 0.014 180.72)",100:"oklch(95.3% 0.051 180.801)",200:"oklch(91% 0.096 180.426)",300:"oklch(85.5% 0.138 181.071)",400:"oklch(77.7% 0.152 181.912)",500:"oklch(70.4% 0.14 182.503)",600:"oklch(60% 0.118 184.704)",700:"oklch(51.1% 0.096 186.391)",800:"oklch(43.7% 0.078 188.216)",900:"oklch(38.6% 0.063 188.416)",950:"oklch(27.7% 0.046 192.524)"},cyan:{50:"oklch(98.4% 0.019 200.873)",100:"oklch(95.6% 0.045 203.388)",200:"oklch(91.7% 0.08 205.041)",300:"oklch(86.5% 0.127 207.078)",400:"oklch(78.9% 0.154 211.53)",500:"oklch(71.5% 0.143 215.221)",600:"oklch(60.9% 0.126 221.723)",700:"oklch(52% 0.105 223.128)",800:"oklch(45% 0.085 224.283)",900:"oklch(39.8% 0.07 227.392)",950:"oklch(30.2% 0.056 229.695)"},sky:{50:"oklch(97.7% 0.013 236.62)",100:"oklch(95.1% 0.026 236.824)",200:"oklch(90.1% 0.058 230.902)",300:"oklch(82.8% 0.111 230.318)",400:"oklch(74.6% 0.16 232.661)",500:"oklch(68.5% 0.169 237.323)",600:"oklch(58.8% 0.158 241.966)",700:"oklch(50% 0.134 242.749)",800:"oklch(44.3% 0.11 240.79)",900:"oklch(39.1% 0.09 240.876)",950:"oklch(29.3% 0.066 243.157)"},blue:{50:"oklch(97% 0.014 254.604)",100:"oklch(93.2% 0.032 255.585)",200:"oklch(88.2% 0.059 254.128)",300:"oklch(80.9% 0.105 251.813)",400:"oklch(70.7% 0.165 254.624)",500:"oklch(62.3% 0.214 259.815)",600:"oklch(54.6% 0.245 262.881)",700:"oklch(48.8% 0.243 264.376)",800:"oklch(42.4% 0.199 265.638)",900:"oklch(37.9% 0.146 265.522)",950:"oklch(28.2% 0.091 267.935)"},indigo:{50:"oklch(96.2% 0.018 272.314)",100:"oklch(93% 0.034 272.788)",200:"oklch(87% 0.065 274.039)",300:"oklch(78.5% 0.115 274.713)",400:"oklch(67.3% 0.182 276.935)",500:"oklch(58.5% 0.233 277.117)",600:"oklch(51.1% 0.262 276.966)",700:"oklch(45.7% 0.24 277.023)",800:"oklch(39.8% 0.195 277.366)",900:"oklch(35.9% 0.144 278.697)",950:"oklch(25.7% 0.09 281.288)"},violet:{50:"oklch(96.9% 0.016 293.756)",100:"oklch(94.3% 0.029 294.588)",200:"oklch(89.4% 0.057 293.283)",300:"oklch(81.1% 0.111 293.571)",400:"oklch(70.2% 0.183 293.541)",500:"oklch(60.6% 0.25 292.717)",600:"oklch(54.1% 0.281 293.009)",700:"oklch(49.1% 0.27 292.581)",800:"oklch(43.2% 0.232 292.759)",900:"oklch(38% 0.189 293.745)",950:"oklch(28.3% 0.141 291.089)"},purple:{50:"oklch(97.7% 0.014 308.299)",100:"oklch(94.6% 0.033 307.174)",200:"oklch(90.2% 0.063 306.703)",300:"oklch(82.7% 0.119 306.383)",400:"oklch(71.4% 0.203 305.504)",500:"oklch(62.7% 0.265 303.9)",600:"oklch(55.8% 0.288 302.321)",700:"oklch(49.6% 0.265 301.924)",800:"oklch(43.8% 0.218 303.724)",900:"oklch(38.1% 0.176 304.987)",950:"oklch(29.1% 0.149 302.717)"},fuchsia:{50:"oklch(97.7% 0.017 320.058)",100:"oklch(95.2% 0.037 318.852)",200:"oklch(90.3% 0.076 319.62)",300:"oklch(83.3% 0.145 321.434)",400:"oklch(74% 0.238 322.16)",500:"oklch(66.7% 0.295 322.15)",600:"oklch(59.1% 0.293 322.896)",700:"oklch(51.8% 0.253 323.949)",800:"oklch(45.2% 0.211 324.591)",900:"oklch(40.1% 0.17 325.612)",950:"oklch(29.3% 0.136 325.661)"},pink:{50:"oklch(97.1% 0.014 343.198)",100:"oklch(94.8% 0.028 342.258)",200:"oklch(89.9% 0.061 343.231)",300:"oklch(82.3% 0.12 346.018)",400:"oklch(71.8% 0.202 349.761)",500:"oklch(65.6% 0.241 354.308)",600:"oklch(59.2% 0.249 0.584)",700:"oklch(52.5% 0.223 3.958)",800:"oklch(45.9% 0.187 3.815)",900:"oklch(40.8% 0.153 2.432)",950:"oklch(28.4% 0.109 3.907)"},rose:{50:"oklch(96.9% 0.015 12.422)",100:"oklch(94.1% 0.03 12.58)",200:"oklch(89.2% 0.058 10.001)",300:"oklch(81% 0.117 11.638)",400:"oklch(71.2% 0.194 13.428)",500:"oklch(64.5% 0.246 16.439)",600:"oklch(58.6% 0.253 17.585)",700:"oklch(51.4% 0.222 16.935)",800:"oklch(45.5% 0.188 13.697)",900:"oklch(41% 0.159 10.272)",950:"oklch(27.1% 0.105 12.094)"}};function Hm(e){try{lt.get(e)}catch{return!0}return lt.contrast(e,"white","Lstar")>lt.contrast(e,"black","Lstar")}function pi(e){return Hm(e)?"#FFFFFF":"#000000"}function oo(e){const t=e.replace(/[\t\n\r]/gim,"").replace(/\s\s+/g," ");return`data:image/svg+xml;charset=UTF-8,${encodeURIComponent(t).replace(/\(/g,"%28").replace(/\)/g,"%29")}`}var fa=e=>e%100===0?15:e%50===0?10:e%25===0?5:2.5;function Fm(e,t,r,o){let a="";for(let s=0;s<=e;s+=5){const c=ri` <line
      x1="${s}"
      y1="0"
      x2="${s}"
      y2="${fa(s)}"
    />`;if(a+=c,s!==0&&s%50===0){const d=ri` <text
        x="${s}"
        y="25"
        text-anchor="middle"
        font-size="${fa(s)}px"
      >
        ${s}
      </text>`;a+=d}}for(let s=0;s<=t;s+=5){const c=ri` <line
      x1="0"
      y1="${s}"
      x2="${fa(s)}"
      y2="${s}"
    />`;if(a+=c,s!==0&&s%50===0){const d=ri` <text
        x="25"
        y="${s}"
        text-anchor="middle"
        dominant-baseline="middle"
        font-size="${fa(s)}px"
      >
        ${s}
      </text>`;a+=d}}return ri` <svg
    xmlns="http://www.w3.org/2000/svg"
    width="${e}"
    height="${t}"
    viewBox="0 0 ${e} ${t}"
  >
    <rect
      width="${e}"
      height="${t}"
      fill="${r}"
    />
    <text
      fill="${o}"
      font-family="Verdana, Arial, Helvetica, sans-serif"
      font-size="30"
      dy="10.5"
      font-weight="bold"
      x="50%"
      y="50%"
      text-anchor="middle"
    >
      ${e}x${t}
    </text>
    <g
      stroke-width="1"
      font-family="Verdana, Arial, Helvetica, sans-serif"
      font-size="10px"
      font-weight="100"
      fill="${o}"
      stroke="${o}"
    >
      ${a}
    </g>
  </svg>`}function gi(e,t,r="#0F1C3F",o="#ECEAD9"){return oo(Fm(e,t,r,o))}var yd=Object.values(yt).map(e=>e[900]),kd=[400,600,900,1200,1400,1600,1970],Ed=[600,800,1e3,1200,1400,2e3,2600];function Gm(){const e=Math.floor(Math.random()*kd.length),t=Math.floor(Math.random()*Ed.length),r=Math.floor(Math.random()*yd.length);return gi(kd[e],Ed[t],yd[r])}var Sd={name:"Local Files",url:/(file:\/\/\/.+(index)?.html)/,homepage:"/index.html?raw=1",language:[De.RAW],category:He.MANGA,run(){const e=parseInt(/\d+/.exec(window.location.search)?.toString()??"5",10);return{title:"Placeholder Manga Loaded",series:"?reload",pages:e,begin:1,prev:"?pages=50",next:"?pages=1",listImages:[gi(1970,1400,"#2D1657"),gi(985,1400,"#152C55"),gi(985,1400,"#7A1420"),gi(985,1400,"#0F5B30"),gi(1970,1400,"#806D15"),...Array(e).fill(0).map(Gm)]}}},Um=["image/apng","image/bmp","image/gif","image/jpeg","image/pjpeg","image/png","image/svg+xml","image/tiff","image/webp","image/x-icon"],Wm=/.(png|jpg|jpeg|gif|bmp|webp)$/i,Ad=(e,t)=>e.localeCompare(t,navigator.languages[0]||navigator.language,{numeric:!0,ignorePunctuation:!0});function Vm(e){return Um.includes(e.type)}var Zm=e=>{const t=new Blob([new Uint8Array(e).buffer]);return URL.createObjectURL(t)};async function jm(e){const t=await zu.default.loadAsync(e),r=t.filter((o,a)=>!a.dir&&Wm.test(a.name)).sort((o,a)=>Ad(o.name,a.name));return ke("Files in zip:",t.files),Promise.all(r.map(o=>o.async("arraybuffer").then(Zm)))}function Md(e,t){bh([{...Sd,start:"always"},{title:e,series:"?reload",pages:t.length,begin:1,prev:"#",next:"#",lazy:!1,listImages:t}]).then(()=>ke("Page loaded"))}async function qm(e){const t=await jm(e);Md(typeof e=="string"?e:e.name,t)}function xd(e){const t=e.target,r=Array.from(t.files).filter(Vm).sort((o,a)=>Ad(o.webkitRelativePath||o.name,a.webkitRelativePath||a.name));ke("Local Files: ",r,r.map(o=>o.webkitRelativePath||o.name)),t.files?.[0]&&Md(t.files[0].webkitRelativePath.split("/")[0]||"Local Images",r.map(URL.createObjectURL))}function Km(){return Sd.url.test(window.location.href)?(document.querySelector("#MangaOnlineViewer, #LocalTest")&&(document.querySelector("#LocalTest")?.setAttribute("style","display:none"),document.querySelector("#file")?.addEventListener("change",e=>{const t=e.target;t.files?.[0]&&qm(t.files[0])}),document.querySelector("#folder")?.addEventListener("change",xd),document.querySelector("#images")?.addEventListener("change",xd),ke("Waiting for zip/images upload")),!0):!1}var pa=globalThis,vl=pa.ShadowRoot&&(pa.ShadyCSS===void 0||pa.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,bl=Symbol(),Id=new WeakMap,Od=class{constructor(e,t,r){if(this._$cssResult$=!0,r!==bl)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(vl&&e===void 0){const r=t!==void 0&&t.length===1;r&&(e=Id.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&Id.set(t,e))}return e}toString(){return this.cssText}},qt=e=>new Od(typeof e=="string"?e:e+"",void 0,bl),Pt=(e,...t)=>new Od(e.length===1?e[0]:t.reduce((r,o,a)=>r+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[a+1],e[0]),e,bl),Ym=(e,t)=>{if(vl)e.adoptedStyleSheets=t.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(const r of t){const o=document.createElement("style"),a=pa.litNonce;a!==void 0&&o.setAttribute("nonce",a),o.textContent=r.cssText,e.appendChild(o)}},Cd=vl?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let r="";for(const o of t.cssRules)r+=o.cssText;return qt(r)})(e):e,{is:Xm,defineProperty:Jm,getOwnPropertyDescriptor:Qm,getOwnPropertyNames:e5,getOwnPropertySymbols:t5,getPrototypeOf:n5}=Object,ga=globalThis,Td=ga.trustedTypes,r5=Td?Td.emptyScript:"",i5=ga.reactiveElementPolyfillSupport,ao=(e,t)=>e,ma={toAttribute(e,t){switch(t){case Boolean:e=e?r5:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},wl=(e,t)=>!Xm(e,t),Ld={attribute:!0,type:String,converter:ma,reflect:!1,useDefault:!1,hasChanged:wl};Symbol.metadata??=Symbol("metadata"),ga.litPropertyMetadata??=new WeakMap;var mi=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=Ld){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const r=Symbol(),o=this.getPropertyDescriptor(e,r,t);o!==void 0&&Jm(this.prototype,e,o)}}static getPropertyDescriptor(e,t,r){const{get:o,set:a}=Qm(this.prototype,e)??{get(){return this[t]},set(s){this[t]=s}};return{get:o,set(s){const c=o?.call(this);a?.call(this,s),this.requestUpdate(e,c,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Ld}static _$Ei(){if(this.hasOwnProperty(ao("elementProperties")))return;const e=n5(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(ao("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(ao("properties"))){const t=this.properties,r=[...e5(t),...t5(t)];for(const o of r)this.createProperty(o,t[o])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[r,o]of t)this.elementProperties.set(r,o)}this._$Eh=new Map;for(const[t,r]of this.elementProperties){const o=this._$Eu(t,r);o!==void 0&&this._$Eh.set(o,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const r=new Set(e.flat(1/0).reverse());for(const o of r)t.unshift(Cd(o))}else e!==void 0&&t.push(Cd(e));return t}static _$Eu(e,t){const r=t.attribute;return r===!1?void 0:typeof r=="string"?r:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const r of t.keys())this.hasOwnProperty(r)&&(e.set(r,this[r]),delete this[r]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Ym(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,r){this._$AK(e,r)}_$ET(e,t){const r=this.constructor.elementProperties.get(e),o=this.constructor._$Eu(e,r);if(o!==void 0&&r.reflect===!0){const a=(r.converter?.toAttribute!==void 0?r.converter:ma).toAttribute(t,r.type);this._$Em=e,a==null?this.removeAttribute(o):this.setAttribute(o,a),this._$Em=null}}_$AK(e,t){const r=this.constructor,o=r._$Eh.get(e);if(o!==void 0&&this._$Em!==o){const a=r.getPropertyOptions(o),s=typeof a.converter=="function"?{fromAttribute:a.converter}:a.converter?.fromAttribute!==void 0?a.converter:ma;this._$Em=o;const c=s.fromAttribute(t,a.type);this[o]=c??this._$Ej?.get(o)??c,this._$Em=null}}requestUpdate(e,t,r,o=!1,a){if(e!==void 0){const s=this.constructor;if(o===!1&&(a=this[e]),r??=s.getPropertyOptions(e),!((r.hasChanged??wl)(a,t)||r.useDefault&&r.reflect&&a===this._$Ej?.get(e)&&!this.hasAttribute(s._$Eu(e,r))))return;this.C(e,t,r)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:r,reflect:o,wrapped:a},s){r&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,s??t??this[e]),a!==!0||s!==void 0)||(this._$AL.has(e)||(this.hasUpdated||r||(t=void 0),this._$AL.set(e,t)),o===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[o,a]of this._$Ep)this[o]=a;this._$Ep=void 0}const r=this.constructor.elementProperties;if(r.size>0)for(const[o,a]of r){const{wrapped:s}=a,c=this[o];s!==!0||this._$AL.has(o)||c===void 0||this.C(o,void 0,a,c)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(r=>r.hostUpdate?.()),this.update(t)):this._$EM()}catch(r){throw e=!1,this._$EM(),r}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(e){}firstUpdated(e){}};mi.elementStyles=[],mi.shadowRootOptions={mode:"open"},mi[ao("elementProperties")]=new Map,mi[ao("finalized")]=new Map,i5?.({ReactiveElement:mi}),(ga.reactiveElementVersions??=[]).push("2.1.2");var _l=globalThis,nt=class extends mi{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=vp(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Vn}};nt._$litElement$=!0,nt.finalized=!0,_l.litElementHydrateSupport?.({LitElement:nt});var o5=_l.litElementPolyfillSupport;o5?.({LitElement:nt}),(_l.litElementVersions??=[]).push("4.2.2");var pt=e=>(t,r)=>{r!==void 0?r.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)},a5={attribute:!0,type:String,converter:ma,reflect:!1,hasChanged:wl},s5=(e=a5,t,r)=>{const{kind:o,metadata:a}=r;let s=globalThis.litPropertyMetadata.get(a);if(s===void 0&&globalThis.litPropertyMetadata.set(a,s=new Map),o==="setter"&&((e=Object.create(e)).wrapped=!0),s.set(r.name,e),o==="accessor"){const{name:c}=r;return{set(d){const u=t.get.call(this);t.set.call(this,d),this.requestUpdate(c,u,e,!0,d)},init(d){return d!==void 0&&this.C(c,void 0,e,d),d}}}if(o==="setter"){const{name:c}=r;return function(d){const u=this[c];t.call(this,d),this.requestUpdate(c,u,e,!0,d)}}throw Error("Unsupported decorator location: "+o)};function he(e){return(t,r)=>typeof r=="object"?s5(e,t,r):((o,a,s)=>{const c=a.hasOwnProperty(s);return a.constructor.createProperty(s,o),c?Object.getOwnPropertyDescriptor(a,s):void 0})(e,t,r)}function sn(e){return he({...e,state:!0,attribute:!1})}var Rd=(e,t,r)=>(r.configurable=!0,r.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(e,t,r),r);function Br(e,t){return(r,o,a)=>{const s=c=>c.renderRoot?.querySelector(e)??null;if(t){const{get:c,set:d}=typeof o=="object"?r:a??(()=>{const u=Symbol();return{get(){return this[u]},set(h){this[u]=h}}})();return Rd(r,o,{get(){let u=c.call(this);return u===void 0&&(u=s(this),(u!==null||this.hasUpdated)&&d.call(this,u)),u}})}return Rd(r,o,{get(){return s(this)}})}}var va=class extends Wo{constructor(e){if(super(e),this.it=Pe,e.type!==Uo.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===Pe||e==null)return this._t=void 0,this.it=e;if(e===Vn)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;const t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}};va.directiveName="unsafeHTML",va.resultType=1;var Pd=Wi(va),yl=class extends va{};yl.directiveName="unsafeSVG",yl.resultType=2;var $d=Wi(yl);function zd(e){return e.startsWith("Icon")&&!e.includes("-")&&!e.includes("_")?e:`Icon${(e.startsWith("Icon")?e.substring(4):e).split(/[-_]/).map(t=>t.charAt(0).toUpperCase()+t.slice(1)).join("")}`}var l5=".icon-tabler-file-download>:nth-child(n+4){color:gold}.icon-tabler-arrow-autofit-width>:nth-child(n+3),.icon-tabler-arrow-autofit-height>:nth-child(n+3){color:#ff0}.icon-tabler-zoom-in-area>:nth-child(2),.icon-tabler-zoom-in-area>:nth-child(3){color:#0f0}.icon-tabler-zoom-out-area>:nth-child(2){color:red}.icon-tabler-zoom-pan>:nth-child(n+4){color:#96f}.icon-tabler-arrow-autofit-down>:nth-child(n+3),.icon-tabler-arrow-autofit-left>:nth-child(n+3),.icon-tabler-arrow-autofit-right>:nth-child(n+3){color:#28ffbf}.icon-tabler-spacing-vertical>:nth-child(4){color:#f0f}.icon-tabler-list-numbers>:nth-child(n+5){color:#e48900}.icon-tabler-bookmarks>:nth-child(n+2),.icon-tabler-bookmark>:nth-child(2),.icon-tabler-bookmark-off>:nth-child(2){color:orange}.icon-tabler-bookmark-off>:nth-child(3),.icon-tabler-eye-off>:nth-child(4){color:red}.icon-tabler-zoom-cancel>:nth-child(3),.icon-tabler-zoom-cancel>:nth-child(4){color:#96f}.icon-tabler-zoom-in>:nth-child(3),.icon-tabler-zoom-in>:nth-child(4){color:#0f0}.icon-tabler-zoom-out>:nth-child(3){color:red}.icon-tabler-refresh>:nth-child(n+2){color:#0ff}.icon-tabler-photo>:nth-child(n+2),.icon-tabler-photo-off>:nth-child(n+2){color:silver}.icon-tabler-photo-off>:nth-child(6){color:orange}.icon-tabler-message>:nth-child(2),.icon-tabler-message>:nth-child(3),.icon-tabler-book-return>g{color:#adff2f}.icon-tabler-file-percent>:nth-child(2),.icon-tabler-file-percent>:nth-child(5),.icon-tabler-file-percent>:nth-child(6){color:#ff0}.icon-tabler-settings-off>:nth-child(4){color:red}",c5='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-adjustments-horizontal"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M14 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M4 6l8 0" /><path d="M16 6l4 0" /><path d="M8 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M4 12l2 0" /><path d="M10 12l10 0" /><path d="M17 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M4 18l11 0" /><path d="M19 18l1 0" /></svg>',u5=`<svg\r
  xmlns="http://www.w3.org/2000/svg"\r
  width="24"\r
  height="24"\r
  viewBox="0 0 24 24"\r
  fill="none"\r
  stroke="currentColor"\r
  stroke-width="2"\r
  stroke-linecap="round"\r
  stroke-linejoin="round"\r
  class="icon icon-tabler icons-tabler-outline icon-tabler-alert-circle"\r
>\r
  <path\r
    stroke="none"\r
    d="M0 0h24v24H0z"\r
    fill="none"\r
  />\r
  <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />\r
  <path d="M12 8v4" />\r
  <path d="M12 16h.01" />\r
</svg>\r
`,d5=`<svg\r
  xmlns="http://www.w3.org/2000/svg"\r
  class="icon icon-tabler icon-tabler-arrow-autofit-down"\r
  width="24"\r
  height="24"\r
  viewBox="0 0 24 24"\r
  stroke-width="2"\r
  stroke="currentColor"\r
  fill="none"\r
  stroke-linecap="round"\r
  stroke-linejoin="round"\r
>\r
  <path\r
    stroke="none"\r
    d="M0 0h24v24H0z"\r
    fill="none"\r
  />\r
  <path d="M12 20h-6a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h8" />\r
  <path d="M18 4v17" />\r
  <path d="M15 18l3 3l3 -3" />\r
</svg>\r
`,h5=`<svg\r
  xmlns="http://www.w3.org/2000/svg"\r
  class="icon icon-tabler icon-tabler-arrow-autofit-height"\r
  width="24"\r
  height="24"\r
  viewBox="0 0 24 24"\r
  stroke-width="2"\r
  stroke="currentColor"\r
  fill="none"\r
  stroke-linecap="round"\r
  stroke-linejoin="round"\r
>\r
  <path\r
    stroke="none"\r
    d="M0 0h24v24H0z"\r
    fill="none"\r
  />\r
  <path d="M12 20h-6a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h6" />\r
  <path d="M18 14v7" />\r
  <path d="M18 3v7" />\r
  <path d="M15 18l3 3l3 -3" />\r
  <path d="M15 6l3 -3l3 3" />\r
</svg>\r
`,f5=`<svg\r
  xmlns="http://www.w3.org/2000/svg"\r
  class="icon icon-tabler icon-tabler-arrow-autofit-left"\r
  width="24"\r
  height="24"\r
  viewBox="0 0 24 24"\r
  stroke-width="2"\r
  stroke="currentColor"\r
  fill="none"\r
  stroke-linecap="round"\r
  stroke-linejoin="round"\r
>\r
  <path\r
    stroke="none"\r
    d="M0 0h24v24H0z"\r
    fill="none"\r
  />\r
  <path d="M4 12v-6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v8" />\r
  <path d="M20 18h-17" />\r
  <path d="M6 15l-3 3l3 3" />\r
</svg>\r
`,p5=`<svg\r
  xmlns="http://www.w3.org/2000/svg"\r
  class="icon icon-tabler icon-tabler-arrow-autofit-right"\r
  width="24"\r
  height="24"\r
  viewBox="0 0 24 24"\r
  stroke-width="2"\r
  stroke="currentColor"\r
  fill="none"\r
  stroke-linecap="round"\r
  stroke-linejoin="round"\r
>\r
  <path\r
    stroke="none"\r
    d="M0 0h24v24H0z"\r
    fill="none"\r
  />\r
  <path d="M20 12v-6a2 2 0 0 0 -2 -2h-12a2 2 0 0 0 -2 2v8" />\r
  <path d="M4 18h17" />\r
  <path d="M18 15l3 3l-3 3" />\r
</svg>\r
`,g5=`<svg\r
  xmlns="http://www.w3.org/2000/svg"\r
  class="icon icon-tabler icon-tabler-arrow-autofit-width"\r
  width="24"\r
  height="24"\r
  viewBox="0 0 24 24"\r
  stroke-width="2"\r
  stroke="currentColor"\r
  fill="none"\r
  stroke-linecap="round"\r
  stroke-linejoin="round"\r
>\r
  <path\r
    stroke="none"\r
    d="M0 0h24v24H0z"\r
    fill="none"\r
  />\r
  <path d="M4 12v-6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v6" />\r
  <path d="M10 18h-7" />\r
  <path d="M21 18h-7" />\r
  <path d="M6 15l-3 3l3 3" />\r
  <path d="M18 15l3 3l-3 3" />\r
</svg>\r
`,m5=`<svg\r
  xmlns="http://www.w3.org/2000/svg"\r
  class="icon icon-tabler icon-tabler-arrow-big-left"\r
  width="24"\r
  height="24"\r
  viewBox="0 0 24 24"\r
  stroke-width="2"\r
  stroke="currentColor"\r
  fill="none"\r
  stroke-linecap="round"\r
  stroke-linejoin="round"\r
>\r
  <path\r
    stroke="none"\r
    d="M0 0h24v24H0z"\r
    fill="none"\r
  />\r
  <path\r
    d="M20 15h-8v3.586a1 1 0 0 1 -1.707 .707l-6.586 -6.586a1 1 0 0 1 0 -1.414l6.586 -6.586a1 1 0 0 1 1.707 .707v3.586h8a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1z"\r
  />\r
</svg>\r
`,v5=`<svg\r
  xmlns="http://www.w3.org/2000/svg"\r
  class="icon icon-tabler icon-tabler-arrow-big-right"\r
  width="24"\r
  height="24"\r
  viewBox="0 0 24 24"\r
  stroke-width="2"\r
  stroke="currentColor"\r
  fill="none"\r
  stroke-linecap="round"\r
  stroke-linejoin="round"\r
>\r
  <path\r
    stroke="none"\r
    d="M0 0h24v24H0z"\r
    fill="none"\r
  />\r
  <path\r
    d="M4 9h8v-3.586a1 1 0 0 1 1.707 -.707l6.586 6.586a1 1 0 0 1 0 1.414l-6.586 6.586a1 1 0 0 1 -1.707 -.707v-3.586h-8a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1z"\r
  />\r
</svg>\r
`,b5='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-arrows-horizontal"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 8l-4 4l4 4" /><path d="M17 8l4 4l-4 4" /><path d="M3 12l18 0" /></svg>',w5='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-arrows-left-right"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M21 17l-18 0" /><path d="M6 10l-3 -3l3 -3" /><path d="M3 7l18 0" /><path d="M18 20l3 -3l-3 -3" /></svg>',_5=`<svg\r
  xmlns="http://www.w3.org/2000/svg"\r
  width="24"\r
  height="24"\r
  viewBox="0 0 24 24"\r
  fill="none"\r
  stroke="currentColor"\r
  stroke-width="2"\r
  stroke-linecap="round"\r
  stroke-linejoin="round"\r
  class="icon icon-tabler icons-tabler-outline icon-tabler-arrows-move"\r
>\r
  <path\r
    stroke="none"\r
    d="M0 0h24v24H0z"\r
    fill="none"\r
  />\r
  <path d="M18 9l3 3l-3 3" />\r
  <path d="M15 12h6" />\r
  <path d="M6 9l-3 3l3 3" />\r
  <path d="M3 12h6" />\r
  <path d="M9 18l3 3l3 -3" />\r
  <path d="M12 15v6" />\r
  <path d="M15 6l-3 -3l-3 3" />\r
  <path d="M12 3v6" />\r
</svg>\r
`,y5=`<svg\r
  xmlns="http://www.w3.org/2000/svg"\r
  width="24"\r
  height="24"\r
  viewBox="0 0 24 24"\r
  fill="none"\r
  stroke="currentColor"\r
  stroke-width="2"\r
  stroke-linecap="round"\r
  stroke-linejoin="round"\r
  class="icon icon-tabler icons-tabler-outline icon-tabler-arrows-move-vertical"\r
>\r
  <path\r
    stroke="none"\r
    d="M0 0h24v24H0z"\r
    fill="none"\r
  />\r
  <path d="M9 18l3 3l3 -3" />\r
  <path d="M12 15v6" />\r
  <path d="M15 6l-3 -3l-3 3" />\r
  <path d="M12 3v6" />\r
</svg>\r
`,k5=`<svg\r
  xmlns="http://www.w3.org/2000/svg"\r
  width="24"\r
  height="24"\r
  viewBox="0 0 24 24"\r
  fill="none"\r
  stroke="currentColor"\r
  stroke-width="2"\r
  stroke-linecap="round"\r
  stroke-linejoin="round"\r
  class="icon icon-tabler icons-tabler-outline icon-tabler-arrows-vertical"\r
>\r
  <path\r
    stroke="none"\r
    d="M0 0h24v24H0z"\r
    fill="none"\r
  />\r
  <path d="M8 7l4 -4l4 4" />\r
  <path d="M8 17l4 4l4 -4" />\r
  <path d="M12 3l0 18" />\r
</svg>\r
`,E5=`<svg\r
  xmlns="http://www.w3.org/2000/svg"\r
  width="24"\r
  height="24"\r
  viewBox="0 0 24 24"\r
  fill="none"\r
  stroke="currentColor"\r
  stroke-width="2"\r
  stroke-linecap="round"\r
  stroke-linejoin="round"\r
  class="icon icon-tabler icons-tabler-outline icon-tabler-book"\r
>\r
  <path\r
    stroke="none"\r
    d="M0 0h24v24H0z"\r
    fill="none"\r
  />\r
  <path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0" />\r
  <path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0" />\r
  <path d="M3 6l0 13" />\r
  <path d="M12 6l0 13" />\r
  <path d="M21 6l0 13" />\r
</svg>\r
`,S5=`<svg\r
  xmlns="http://www.w3.org/2000/svg"\r
  width="24"\r
  height="24"\r
  viewBox="0 0 24 24"\r
  fill="none"\r
  stroke="currentColor"\r
  stroke-width="2"\r
  stroke-linecap="round"\r
  stroke-linejoin="round"\r
  class="icon icon-tabler icons-tabler-outline icon-tabler-return"\r
>\r
  <path\r
    stroke="none"\r
    d="M0 0h24v24H0z"\r
    fill="none"\r
  />\r
  <path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 2 -1" />\r
  <path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0" />\r
  <path d="M3 6l0 13" />\r
  <path d="M12 6l0 13" />\r
  <path d="M21 6l0 4" />\r
  <g transform="rotate(-90, 19, 15)">\r
    <path d="M15 16l3 -3l3 3" />\r
    <path d="M18 13v9" />\r
  </g>\r
</svg>\r
`,A5=`<svg\r
  xmlns="http://www.w3.org/2000/svg"\r
  width="24"\r
  height="24"\r
  viewBox="0 0 24 24"\r
  fill="none"\r
  stroke="currentColor"\r
  stroke-width="2"\r
  stroke-linecap="round"\r
  stroke-linejoin="round"\r
  class="icon icon-tabler icons-tabler-outline icon-tabler-book-upload"\r
>\r
  <path\r
    stroke="none"\r
    d="M0 0h24v24H0z"\r
    fill="none"\r
  />\r
  <path d="M14 20h-8a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12v5" />\r
  <path d="M11 16h-5a2 2 0 0 0 -2 2" />\r
  <path d="M15 16l3 -3l3 3" />\r
  <path d="M18 13v9" />\r
</svg>\r
`,M5=`<svg\r
  xmlns="http://www.w3.org/2000/svg"\r
  class="icon icon-tabler icon-tabler-bookmark"\r
  width="24"\r
  height="24"\r
  viewBox="0 0 24 24"\r
  stroke-width="2"\r
  stroke="currentColor"\r
  fill="none"\r
  stroke-linecap="round"\r
  stroke-linejoin="round"\r
>\r
  <path\r
    stroke="none"\r
    d="M0 0h24v24H0z"\r
    fill="none"\r
  />\r
  <path d="M18 7v14l-6 -4l-6 4v-14a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4z" />\r
</svg>\r
`,x5=`<svg\r
  xmlns="http://www.w3.org/2000/svg"\r
  class="icon icon-tabler icon-tabler-bookmark-off"\r
  width="24"\r
  height="24"\r
  viewBox="0 0 24 24"\r
  stroke-width="2"\r
  stroke="currentColor"\r
  fill="none"\r
  stroke-linecap="round"\r
  stroke-linejoin="round"\r
>\r
  <path\r
    stroke="none"\r
    d="M0 0h24v24H0z"\r
    fill="none"\r
  />\r
  <path\r
    d="M7.708 3.721a3.982 3.982 0 0 1 2.292 -.721h4a4 4 0 0 1 4 4v7m0 4v3l-6 -4l-6 4v-14c0 -.308 .035 -.609 .1 -.897"\r
  />\r
  <path d="M3 3l18 18" />\r
</svg>\r
`,I5=`<svg\r
  xmlns="http://www.w3.org/2000/svg"\r
  class="icon icon-tabler icon-tabler-bookmarks"\r
  width="24"\r
  height="24"\r
  viewBox="0 0 24 24"\r
  stroke-width="2"\r
  stroke="currentColor"\r
  fill="none"\r
  stroke-linecap="round"\r
  stroke-linejoin="round"\r
>\r
  <path\r
    stroke="none"\r
    d="M0 0h24v24H0z"\r
    fill="none"\r
  />\r
  <path d="M15 10v11l-5 -3l-5 3v-11a3 3 0 0 1 3 -3h4a3 3 0 0 1 3 3z" />\r
  <path d="M11 3h5a3 3 0 0 1 3 3v11" />\r
</svg>\r
`,O5=`<svg\r
  xmlns="http://www.w3.org/2000/svg"\r
  width="24"\r
  height="24"\r
  viewBox="0 0 24 24"\r
  fill="none"\r
  stroke="currentColor"\r
  stroke-width="2"\r
  stroke-linecap="round"\r
  stroke-linejoin="round"\r
  class="icon icon-tabler icons-tabler-outline icon-tabler-box-align-top"\r
>\r
  <path\r
    stroke="none"\r
    d="M0 0h24v24H0z"\r
    fill="none"\r
  />\r
  <path d="M4 10.005h16v-5a1 1 0 0 0 -1 -1h-14a1 1 0 0 0 -1 1v5z" />\r
  <path d="M4 15.005v-.01" />\r
  <path d="M4 20.005v-.01" />\r
  <path d="M9 20.005v-.01" />\r
  <path d="M15 20.005v-.01" />\r
  <path d="M20 20.005v-.01" />\r
  <path d="M20 15.005v-.01" />\r
</svg>\r
`,C5=`<svg\r
  id="Capa_1"\r
  enable-background="new 0 0 512 512"\r
  height="512"\r
  viewBox="0 0 512 512"\r
  width="512"\r
  xmlns="http://www.w3.org/2000/svg"\r
>\r
  <g>\r
    <g>\r
      <g>\r
        <path\r
          d="m427.508 512h-343.02c-5.69 0-10.302-4.612-10.302-10.302v-491.396c0-5.69 4.612-10.302 10.302-10.302h343.02c5.69 0 10.302 4.612 10.302 10.302v491.396c-.001 5.69-4.613 10.302-10.302 10.302z"\r
          fill="#f2eff2"\r
        />\r
      </g>\r
    </g>\r
    <path\r
      d="m427.512 0h-41.238c5.687 0 10.302 4.615 10.302 10.302v41.156l-18.039 71.714 18.039 81.268v46.358l-18.039 45.164 18.039 24.847v46.358l-10.302 61.227 10.302 32.149v41.156c0 5.687-4.615 10.302-10.302 10.302h41.238c5.687 0 10.302-4.615 10.302-10.302v-491.397c0-5.687-4.615-10.302-10.302-10.302z"\r
      fill="#e1dde1"\r
    />\r
    <g>\r
      <path\r
        d="m243.51 273.63-47.48 104.08-80.61-10.85v-315.4c0-2.85 2.31-5.15 5.15-5.15h30.86c2.13 0 4.03 1.29 4.8 3.27z"\r
        fill="#3ad1e0"\r
      />\r
      <path\r
        d="m243.51 273.63-16.68 36.56-101.52-260.61c-.76-1.95-2.64-3.25-4.74-3.27h30.86c2.13 0 4.03 1.29 4.8 3.27z"\r
        fill="#22c7db"\r
      />\r
      <path\r
        d="m310.81 465.69h-190.24c-2.84 0-5.15-2.3-5.15-5.15v-93.68c25.18-34.92 65.99-57.81 112.19-58.37l-16.07 35.21 74.5 39.08 29.56 75.9c1.32 3.37-1.17 7.01-4.79 7.01z"\r
        fill="#fb33a8"\r
      />\r
      <path\r
        d="m310.81 465.69h-30.92c3.61 0 6.11-3.64 4.79-7.01l-12.92-33.17c-1.92 4.55-2.88 9.61-2.61 14.91.01.13.01.25.01.38 0 5.92-7.39 8.87-11.45 4.36-6.77-7.49-16.03-11.24-25.29-11.24s-18.54 3.75-25.29 11.24c-1.36 1.52-3.11 2.19-4.83 2.19-3.48 0-6.84-2.78-6.62-6.93.03-.59.04-1.18.04-1.77 0-19.36-16.23-34.99-35.81-33.99-.12.01-.24.01-.37.01-5.92 0-8.87-7.4-4.37-11.46 7.49-6.76 11.24-16.03 11.24-25.29s-3.75-18.52-11.24-25.29c-1.51-1.36-2.18-3.1-2.18-4.81 0-3.48 2.78-6.84 6.92-6.64.6.04 1.19.05 1.77.05 12.81 0 23.98-7.11 29.79-17.57l34.29-1.12-14.22 31.16 74.5 39.08 29.56 75.9c1.32 3.37-1.17 7.01-4.79 7.01z"\r
        fill="#fb33a8"\r
      />\r
      <path\r
        d="m396.58 51.46v152.98c0 2.84-2.31 5.15-5.15 5.15h-32l-40.41-29.31-40.41 29.31h-17.82c-2.12 0-4.03-1.3-4.8-3.28l-59.6-152.98c-1.32-3.38 1.18-7.02 4.79-7.02h190.25c2.84 0 5.15 2.3 5.15 5.15z"\r
        fill="#fcb44d"\r
      />\r
      <path\r
        d="m396.576 51.457v152.982c0 2.843-2.308 5.151-5.151 5.151h-30.927c2.843 0 5.151-2.308 5.151-5.151v-152.982c0-2.843-2.308-5.151-5.151-5.151h30.927c2.843.001 5.151 2.308 5.151 5.151z"\r
        fill="#fb9927"\r
      />\r
      <g>\r
        <path\r
          d="m359.428 181.065v28.526h-80.818v-28.526c0-22.324 18.1-40.414 40.414-40.414 11.157 0 21.263 4.522 28.567 11.837 7.314 7.314 11.837 17.409 11.837 28.577z"\r
          fill="#ae6ad8"\r
        />\r
        <path\r
          d="m359.43 181.065v28.526h-29.237v-28.526c0-11.167-4.522-21.263-11.837-28.577-3.935-3.935-8.674-7.067-13.949-9.107 4.533-1.762 9.467-2.73 14.618-2.73 11.157 0 21.263 4.522 28.567 11.837 7.316 7.314 11.838 17.409 11.838 28.577z"\r
          fill="#975bbb"\r
        />\r
        <g>\r
          <g>\r
            <circle\r
              cx="319.023"\r
              cy="121.497"\r
              fill="#f2eff2"\r
              r="26.224"\r
            />\r
          </g>\r
        </g>\r
      </g>\r
      <path\r
        d="m396.576 250.798v70.011c0 2.845-2.306 5.151-5.151 5.151h-85.311c-2.123 0-4.029-1.303-4.8-3.281l-27.273-70.011c-1.316-3.377 1.175-7.021 4.8-7.021h112.585c2.844 0 5.15 2.306 5.15 5.151z"\r
        fill="#23f1a8"\r
      />\r
      <path\r
        d="m396.576 250.798v70.011c0 2.843-2.308 5.151-5.151 5.151h-30.927c2.843 0 5.151-2.308 5.151-5.151v-70.011c0-2.843-2.308-5.151-5.151-5.151h30.927c2.843 0 5.151 2.307 5.151 5.151z"\r
        fill="#27e19d"\r
      />\r
      <path\r
        d="m324.179 362.016h67.246c2.845 0 5.151 2.306 5.151 5.151v93.376c0 2.845-2.306 5.151-5.151 5.151h-30.866c-2.123 0-4.029-1.303-4.799-3.281l-36.38-93.376c-1.316-3.377 1.175-7.021 4.799-7.021z"\r
        fill="#23f1a8"\r
      />\r
      <path\r
        d="m396.576 367.167v93.376c0 2.843-2.308 5.151-5.151 5.151h-30.927c2.843 0 5.151-2.308 5.151-5.151v-93.376c0-2.843-2.308-5.151-5.151-5.151h30.927c2.843 0 5.151 2.308 5.151 5.151z"\r
        fill="#27e19d"\r
      />\r
    </g>\r
    <g>\r
      <path\r
        d="m269.153 413.978c.01.124.01.247.01.371 0 5.924-7.397 8.87-11.456 4.368-6.768-7.489-16.03-11.239-25.291-11.239s-18.533 3.75-25.291 11.239c-1.36 1.514-3.101 2.184-4.821 2.184-3.482 0-6.84-2.782-6.624-6.923.031-.597.041-1.185.041-1.772 0-19.367-16.236-34.995-35.809-33.996-.124.01-.247.01-.371.01-5.924 0-8.87-7.397-4.368-11.456 7.489-6.758 11.239-16.03 11.239-25.291s-3.75-18.523-11.239-25.291c-1.514-1.36-2.184-3.101-2.184-4.811 0-3.482 2.782-6.84 6.923-6.634.597.031 1.185.041 1.772.041 19.367 0 34.995-16.236 33.996-35.799-.01-.124-.01-.247-.01-.371 0-5.934 7.397-8.87 11.456-4.378 6.758 7.489 16.03 11.239 25.291 11.239 3.76 0 7.51-.618 11.095-1.844l42.526 109.158c-10.591 6.183-17.565 17.916-16.885 31.195z"\r
        fill="#fdef63"\r
      />\r
      <path\r
        d="m268.516 417.19c.406-.839.648-1.79.648-2.841 0-.123 0-.247-.01-.371-.68-13.279 6.294-25.013 16.885-31.194l-42.526-109.158c-3.585 1.226-7.335 1.844-11.095 1.844-7.992 0-15.988-2.799-22.374-8.378z"\r
        fill="#f3d730"\r
      />\r
    </g>\r
    <g>\r
      <g>\r
        <path\r
          d="m229.374 349.967c-4.267 0-7.726-3.459-7.726-7.726v-29.272c0-4.267 3.459-7.726 7.726-7.726s7.726 3.459 7.726 7.726v29.272c0 4.267-3.459 7.726-7.726 7.726z"\r
          fill="#554e55"\r
        />\r
      </g>\r
      <g>\r
        <path\r
          d="m229.374 377.711c-4.267 0-7.726-3.459-7.726-7.726v-2.061c0-4.267 3.459-7.726 7.726-7.726s7.726 3.459 7.726 7.726v2.061c0 4.267-3.459 7.726-7.726 7.726z"\r
          fill="#554e55"\r
        />\r
      </g>\r
    </g>\r
    <g>\r
      <g>\r
        <path\r
          d="m258.185 86.361h-18.228c-4.267 0-7.726-3.459-7.726-7.726s3.459-7.726 7.726-7.726h18.228c4.267 0 7.726 3.459 7.726 7.726 0 4.266-3.459 7.726-7.726 7.726z"\r
          fill="#f2eff2"\r
        />\r
      </g>\r
      <g>\r
        <path\r
          d="m266.269 111.168h-18.229c-4.267 0-7.726-3.459-7.726-7.726s3.459-7.726 7.726-7.726h18.228c4.267 0 7.726 3.459 7.726 7.726s-3.458 7.726-7.725 7.726z"\r
          fill="#f2eff2"\r
        />\r
      </g>\r
    </g>\r
  </g>\r
</svg>\r
`,T5=`<?xml version="1.0" encoding="UTF-8"?>\r
<svg\r
  xmlns="http://www.w3.org/2000/svg"\r
  version="1.1"\r
  id="Capa_1"\r
  x="0px"\r
  y="0px"\r
  viewBox="0 0 512 512"\r
  style="enable-background: new 0 0 512 512"\r
  xml:space="preserve"\r
  width="512"\r
  height="512"\r
>\r
  <g>\r
    <g>\r
      <g>\r
        <path\r
          style="fill: #f2eff2"\r
          d="M422.485,504.5H89.515c-5.523,0-10-4.477-10-10v-477c0-5.523,4.477-10,10-10h332.971&#10;&#9;&#9;&#9;&#9;c5.523,0,10,4.477,10,10v477C432.485,500.023,428.008,504.5,422.485,504.5z"\r
        />\r
      </g>\r
    </g>\r
    <g>\r
      <g>\r
        <path\r
          style="fill: #e1dde1"\r
          d="M432.49,17.5v477c0,5.52-4.48,10-10,10h-40.03c5.52,0,10-4.48,10-10v-477c0-5.52-4.48-10-10-10&#10;&#9;&#9;&#9;&#9;h40.03C428.01,7.5,432.49,11.98,432.49,17.5z"\r
        />\r
      </g>\r
    </g>\r
    <g>\r
      <path\r
        style="\r
          fill: none;\r
          stroke: #000000;\r
          stroke-width: 15;\r
          stroke-linecap: round;\r
          stroke-linejoin: round;\r
          stroke-miterlimit: 10;\r
        "\r
        d="&#10;&#9;&#9;&#9;M334.56,7.5H89.515c-5.523,0-10,4.477-10,10v477c0,5.523,4.477,10,10,10h332.971c5.523,0,10-4.477,10-10v-477&#10;&#9;&#9;&#9;c0-5.523-4.477-10-10-10h-54.763"\r
      />\r
    </g>\r
    <g>\r
      <path\r
        style="fill: #3ad1e0"\r
        d="M313.86,452.74L159.16,55.63c-0.75-1.92-2.6-3.18-4.66-3.18h-29.96c-2.76,0-5,2.24-5,5v397.1&#10;&#9;&#9;&#9;c0,2.76,2.24,5,5,5h184.67C312.72,459.55,315.14,456.01,313.86,452.74z"\r
      />\r
      <path\r
        style="fill: #22c7db"\r
        d="M309.21,459.55h-30.02c3.51,0,5.93-3.54,4.65-6.81L129.14,55.63c-0.74-1.9-2.56-3.16-4.6-3.18&#10;&#9;&#9;&#9;h29.96c2.06,0,3.91,1.26,4.66,3.18l154.7,397.11C315.14,456.01,312.72,459.55,309.21,459.55z"\r
      />\r
      <path\r
        style="fill: #fb33a8"\r
        d="M258.193,309.845c-9.05-1.894-18.424-2.909-28.037-2.909c-45.55,0-85.862,22.354-110.616,56.676&#10;&#9;&#9;&#9;v90.938c0,2.76,2.24,5,5,5h184.67c3.51,0,5.93-3.54,4.65-6.81L258.193,309.845z"\r
      />\r
      <path\r
        style="fill: #ee2d9a"\r
        d="M193.362,311.966c-5.64,10.161-16.48,17.055-28.912,17.055c-0.57,0-1.14-0.01-1.72-0.04&#10;&#9;&#9;&#9;c-4.02-0.2-6.72,3.06-6.72,6.44c0,1.66,0.65,3.35,2.12,4.67c7.27,6.57,10.91,15.56,10.91,24.55s-3.64,17.99-10.91,24.55&#10;&#9;&#9;&#9;c-4.37,3.94-1.51,11.12,4.24,11.12c0.12,0,0.24,0,0.36-0.01c19-0.97,34.76,14.2,34.76,33c0,0.57-0.01,1.14-0.04,1.72&#10;&#9;&#9;&#9;c-0.21,4.02,3.05,6.72,6.43,6.72c1.67,0,3.36-0.65,4.68-2.12c6.56-7.27,15.56-10.91,24.55-10.91c8.99,0,17.98,3.64,24.55,10.91&#10;&#9;&#9;&#9;c3.94,4.37,11.12,1.51,11.12-4.24c0-0.12,0-0.24-0.01-0.36c-0.264-5.151,0.666-10.058,2.527-14.479l12.543,32.197&#10;&#9;&#9;&#9;c1.28,3.27-1.14,6.81-4.65,6.81h30.02c3.51,0,5.93-3.54,4.65-6.81l-55.667-142.895L193.362,311.966z"\r
      />\r
      <path\r
        style="\r
          fill: none;\r
          stroke: #000000;\r
          stroke-width: 15;\r
          stroke-linecap: round;\r
          stroke-linejoin: round;\r
          stroke-miterlimit: 10;\r
        "\r
        d="&#10;&#9;&#9;&#9;M230.156,306.937c-45.55,0-85.862,22.354-110.616,56.676"\r
      />\r
      <path\r
        style="fill: #fcb44d"\r
        d="M392.46,57.45v148.5c0,2.76-2.24,5-5,5H260.65c-2.06,0-3.91-1.26-4.66-3.18l-57.85-148.5&#10;&#9;&#9;&#9;c-1.28-3.28,1.14-6.82,4.65-6.82h184.67C390.22,52.45,392.46,54.69,392.46,57.45z"\r
      />\r
      <path\r
        style="fill: #fb9927"\r
        d="M392.46,57.45v148.5c0,2.76-2.24,5-5,5h-30.021c2.76,0,5-2.24,5-5V57.45c0-2.76-2.24-5-5-5h30.021&#10;&#9;&#9;&#9;C390.22,52.45,392.46,54.69,392.46,57.45z"\r
      />\r
      <g>\r
        <path\r
          style="fill: #ae6ad8"\r
          d="M356.4,183.26v27.69h-78.45v-27.69c0-21.67,17.57-39.23,39.23-39.23&#10;&#9;&#9;&#9;&#9;c10.83,0,20.64,4.39,27.73,11.49C352.01,162.62,356.4,172.42,356.4,183.26z"\r
        />\r
        <path\r
          style="fill: #975bbb"\r
          d="M356.402,183.26v27.69h-28.38v-27.69c0-10.84-4.39-20.64-11.49-27.74&#10;&#9;&#9;&#9;&#9;c-3.82-3.82-8.42-6.86-13.54-8.84c4.4-1.71,9.19-2.65,14.19-2.65c10.83,0,20.64,4.39,27.73,11.49&#10;&#9;&#9;&#9;&#9;C352.012,162.62,356.402,172.42,356.402,183.26z"\r
        />\r
        <path\r
          style="\r
            fill: none;\r
            stroke: #000000;\r
            stroke-width: 15;\r
            stroke-linecap: round;\r
            stroke-linejoin: round;\r
            stroke-miterlimit: 10;\r
          "\r
          d="&#10;&#9;&#9;&#9;&#9;M277.95,210.95v-27.69c0-21.67,17.57-39.23,39.23-39.23c10.83,0,20.64,4.39,27.73,11.49c7.1,7.1,11.49,16.9,11.49,27.74v27.69"\r
        />\r
        <g>\r
          <circle\r
            style="fill: #f2eff2"\r
            cx="317.179"\r
            cy="125.438"\r
            r="25.456"\r
          />\r
\r
          <circle\r
            style="\r
              fill: none;\r
              stroke: #000000;\r
              stroke-width: 15;\r
              stroke-linecap: round;\r
              stroke-linejoin: round;\r
              stroke-miterlimit: 10;\r
            "\r
            cx="317.179"\r
            cy="125.438"\r
            r="25.456"\r
          />\r
        </g>\r
      </g>\r
      <path\r
        style="fill: #23f1a8"\r
        d="M392.46,250.95v67.96c0,2.761-2.239,5-5,5h-82.812c-2.061,0-3.911-1.265-4.659-3.185l-26.474-67.96&#10;&#9;&#9;&#9;c-1.277-3.278,1.141-6.815,4.659-6.815H387.46C390.221,245.95,392.46,248.189,392.46,250.95z"\r
      />\r
      <path\r
        style="fill: #27e19d"\r
        d="M392.46,250.95v67.96c0,2.76-2.24,5-5,5h-30.021c2.76,0,5-2.24,5-5v-67.96c0-2.76-2.24-5-5-5&#10;&#9;&#9;&#9;h30.021C390.22,245.95,392.46,248.19,392.46,250.95z"\r
      />\r
      <path\r
        style="fill: #23f1a8"\r
        d="M322.184,358.91h65.276c2.761,0,5,2.239,5,5v90.64c0,2.761-2.239,5-5,5h-29.962&#10;&#9;&#9;&#9;c-2.061,0-3.911-1.265-4.659-3.185l-35.314-90.64C316.248,362.447,318.666,358.91,322.184,358.91z"\r
      />\r
      <path\r
        style="fill: #27e19d"\r
        d="M392.46,363.91v90.64c0,2.76-2.24,5-5,5h-30.021c2.76,0,5-2.24,5-5v-90.64c0-2.76-2.24-5-5-5&#10;&#9;&#9;&#9;h30.021C390.22,358.91,392.46,361.15,392.46,363.91z"\r
      />\r
      <path\r
        style="\r
          fill: none;\r
          stroke: #000000;\r
          stroke-width: 15;\r
          stroke-linecap: round;\r
          stroke-linejoin: round;\r
          stroke-miterlimit: 10;\r
        "\r
        d="&#10;&#9;&#9;&#9;M119.54,242.003V454.55c0,2.761,2.239,5,5,5h184.666c3.518,0,5.936-3.537,4.659-6.815l-154.704-397.1&#10;&#9;&#9;&#9;c-0.748-1.92-2.598-3.185-4.659-3.185H124.54c-2.761,0-5,2.239-5,5v151.391"\r
      />\r
      <path\r
        style="\r
          fill: none;\r
          stroke: #000000;\r
          stroke-width: 15;\r
          stroke-linecap: round;\r
          stroke-linejoin: round;\r
          stroke-miterlimit: 10;\r
        "\r
        d="&#10;&#9;&#9;&#9;M392.46,57.45v148.5c0,2.761-2.239,5-5,5H260.648c-2.061,0-3.911-1.265-4.659-3.185l-57.854-148.5&#10;&#9;&#9;&#9;c-1.277-3.278,1.141-6.815,4.659-6.815H387.46C390.221,52.45,392.46,54.689,392.46,57.45z"\r
      />\r
      <path\r
        style="\r
          fill: none;\r
          stroke: #000000;\r
          stroke-width: 15;\r
          stroke-linecap: round;\r
          stroke-linejoin: round;\r
          stroke-miterlimit: 10;\r
        "\r
        d="&#10;&#9;&#9;&#9;M306.627,245.95h-28.454c-3.518,0-5.936,3.537-4.659,6.815l26.474,67.96c0.748,1.92,2.598,3.185,4.659,3.185h82.812&#10;&#9;&#9;&#9;c2.761,0,5-2.239,5-5v-67.96c0-2.761-2.239-5-5-5h-47.67"\r
      />\r
      <path\r
        style="\r
          fill: none;\r
          stroke: #000000;\r
          stroke-width: 15;\r
          stroke-linecap: round;\r
          stroke-linejoin: round;\r
          stroke-miterlimit: 10;\r
        "\r
        d="&#10;&#9;&#9;&#9;M322.184,358.91h65.276c2.761,0,5,2.239,5,5v90.64c0,2.761-2.239,5-5,5h-29.962c-2.061,0-3.911-1.265-4.659-3.185l-35.314-90.64&#10;&#9;&#9;&#9;C316.248,362.447,318.666,358.91,322.184,358.91z"\r
      />\r
    </g>\r
    <g>\r
      <path\r
        style="fill: #fdef63"\r
        d="M268.77,409.35c0.01,0.12,0.01,0.24,0.01,0.36c0,5.75-7.18,8.61-11.12,4.24&#10;&#9;&#9;&#9;c-6.57-7.27-15.56-10.91-24.55-10.91c-8.99,0-17.99,3.64-24.55,10.91c-1.32,1.47-3.01,2.12-4.68,2.12c-3.38,0-6.64-2.7-6.43-6.72&#10;&#9;&#9;&#9;c0.03-0.58,0.04-1.15,0.04-1.72c0-18.8-15.76-33.97-34.76-33c-0.12,0.01-0.24,0.01-0.36,0.01c-5.75,0-8.61-7.18-4.24-11.12&#10;&#9;&#9;&#9;c7.27-6.56,10.91-15.56,10.91-24.55s-3.64-17.98-10.91-24.55c-1.47-1.32-2.12-3.01-2.12-4.67c0-3.38,2.7-6.64,6.72-6.44&#10;&#9;&#9;&#9;c0.58,0.03,1.15,0.04,1.72,0.04c18.8,0,33.97-15.76,33-34.75c-0.01-0.12-0.01-0.24-0.01-0.36c0-5.76,7.18-8.61,11.12-4.25&#10;&#9;&#9;&#9;c6.56,7.27,15.56,10.91,24.55,10.91c3.65,0,7.29-0.6,10.77-1.79l41.28,105.96C274.88,385.07,268.11,396.46,268.77,409.35z"\r
      />\r
      <path\r
        style="fill: #f3d730"\r
        d="M268.151,412.468c0.394-0.814,0.629-1.738,0.629-2.758c0-0.12,0-0.24-0.01-0.36&#10;&#9;&#9;&#9;c-0.66-12.89,6.11-24.28,16.39-30.28l-41.28-105.96c-3.48,1.19-7.12,1.79-10.77,1.79c-7.758,0-15.52-2.717-21.718-8.132&#10;&#9;&#9;&#9;L268.151,412.468z"\r
      />\r
      <path\r
        style="\r
          fill: none;\r
          stroke: #000000;\r
          stroke-width: 15;\r
          stroke-linecap: round;\r
          stroke-linejoin: round;\r
          stroke-miterlimit: 10;\r
        "\r
        d="&#10;&#9;&#9;&#9;M268.77,409.35c0.01,0.12,0.01,0.24,0.01,0.36c0,5.75-7.18,8.61-11.12,4.24c-6.57-7.27-15.56-10.91-24.55-10.91&#10;&#9;&#9;&#9;c-8.99,0-17.99,3.64-24.55,10.91c-1.32,1.47-3.01,2.12-4.68,2.12c-3.38,0-6.64-2.7-6.43-6.72c0.03-0.58,0.04-1.15,0.04-1.72&#10;&#9;&#9;&#9;c0-18.8-15.76-33.97-34.76-33c-0.12,0.01-0.24,0.01-0.36,0.01c-5.75,0-8.61-7.18-4.24-11.12c7.27-6.56,10.91-15.56,10.91-24.55&#10;&#9;&#9;&#9;s-3.64-17.98-10.91-24.55c-1.47-1.32-2.12-3.01-2.12-4.67c0-3.38,2.7-6.64,6.72-6.44c0.58,0.03,1.15,0.04,1.72,0.04&#10;&#9;&#9;&#9;c18.8,0,33.97-15.76,33-34.75c-0.01-0.12-0.01-0.24-0.01-0.36c0-5.76,7.18-8.61,11.12-4.25c6.56,7.27,15.56,10.91,24.55,10.91&#10;&#9;&#9;&#9;c3.65,0,7.29-0.6,10.77-1.79l41.28,105.96C274.88,385.07,268.11,396.46,268.77,409.35z"\r
      />\r
    </g>\r
    <g>\r
      <line\r
        style="\r
          fill: none;\r
          stroke: #000000;\r
          stroke-width: 15;\r
          stroke-linecap: round;\r
          stroke-linejoin: round;\r
          stroke-miterlimit: 10;\r
        "\r
        x1="230.156"\r
        y1="339.714"\r
        x2="230.156"\r
        y2="311.299"\r
      />\r
\r
      <line\r
        style="\r
          fill: none;\r
          stroke: #000000;\r
          stroke-width: 15;\r
          stroke-linecap: round;\r
          stroke-linejoin: round;\r
          stroke-miterlimit: 10;\r
        "\r
        x1="230.156"\r
        y1="364.644"\r
        x2="230.156"\r
        y2="366.646"\r
      />\r
    </g>\r
    <g>\r
      <line\r
        style="\r
          fill: none;\r
          stroke: #000000;\r
          stroke-width: 15;\r
          stroke-linecap: round;\r
          stroke-linejoin: round;\r
          stroke-miterlimit: 10;\r
        "\r
        x1="240.429"\r
        y1="83.83"\r
        x2="258.124"\r
        y2="83.83"\r
      />\r
\r
      <line\r
        style="\r
          fill: none;\r
          stroke: #000000;\r
          stroke-width: 15;\r
          stroke-linecap: round;\r
          stroke-linejoin: round;\r
          stroke-miterlimit: 10;\r
        "\r
        x1="248.276"\r
        y1="107.911"\r
        x2="265.97"\r
        y2="107.911"\r
      />\r
    </g>\r
  </g>\r
</svg>\r
`,L5=`<?xml version="1.0" encoding="UTF-8" standalone="no"?>\r
<!-- Created with Inkscape (http://www.inkscape.org/) -->\r
\r
<svg\r
  version="1.1"\r
  id="svg3390"\r
  xml:space="preserve"\r
  width="682.66669"\r
  height="682.66669"\r
  viewBox="0 0 682.66669 682.66669"\r
  xmlns="http://www.w3.org/2000/svg"\r
>\r
  <defs id="defs3394">\r
    <clipPath\r
      clipPathUnits="userSpaceOnUse"\r
      id="clipPath3404"\r
    >\r
      <path\r
        d="M 0,512 H 512 V 0 H 0 Z"\r
        id="path3402"\r
      />\r
    </clipPath>\r
  </defs>\r
  <g\r
    id="g3396"\r
    transform="matrix(1.3333333,0,0,-1.3333333,0,682.66667)"\r
  >\r
    <g id="g3398">\r
      <g\r
        id="g3400"\r
        clip-path="url(#clipPath3404)"\r
      >\r
        <g\r
          id="g3406"\r
          transform="translate(451.7344)"\r
        >\r
          <path\r
            d="m 0,0 h -391.469 c -11.379,0 -20.603,9.225 -20.603,20.604 v 470.792 c 0,11.379 9.224,20.604 20.603,20.604 L 0,512 c 11.379,0 20.604,-9.225 20.604,-20.604 V 20.604 C 20.604,9.225 11.379,0 0,0"\r
            style="fill: #efe6e6; fill-opacity: 1; fill-rule: nonzero; stroke: none"\r
            id="path3408"\r
          />\r
        </g>\r
        <g\r
          id="g3410"\r
          transform="translate(472.3376,41.2072)"\r
        >\r
          <path\r
            d="m 0,0 c -216.202,0 -391.468,175.266 -391.468,391.468 v 79.325 h -20.604 c -11.379,0 -20.604,-9.225 -20.604,-20.604 V -20.604 c 0,-11.379 9.225,-20.603 20.604,-20.603 H -20.603 C -9.224,-41.207 0,-31.983 0,-20.604 Z"\r
            style="fill: #e2d7d7; fill-opacity: 1; fill-rule: nonzero; stroke: none"\r
            id="path3412"\r
          />\r
        </g>\r
        <g\r
          id="g3414"\r
          transform="translate(235.3964,198.1382)"\r
        >\r
          <path\r
            d="M 0,0 H 195.734 V 272.655 H 82.414 Z"\r
            style="fill: #ffffff; fill-opacity: 1; fill-rule: nonzero; stroke: none"\r
            id="path3416"\r
          />\r
        </g>\r
        <g\r
          id="g3418"\r
          transform="translate(235.3964,198.1382)"\r
        >\r
          <path\r
            d="M 0,0 H 195.734 V 272.655 H 82.414 Z"\r
            style="fill: #5ad6ff; fill-opacity: 1; fill-rule: nonzero; stroke: none"\r
            id="path3420"\r
          />\r
        </g>\r
        <g\r
          id="g3422"\r
          transform="translate(80.8692,198.1382)"\r
        >\r
          <path\r
            d="m 0,0 h 113.32 l 82.414,272.655 H 0 Z"\r
            style="fill: #f4e74d; fill-opacity: 1; fill-rule: nonzero; stroke: none"\r
            id="path3424"\r
          />\r
        </g>\r
        <g\r
          id="g3426"\r
          transform="translate(80.8692,432.6757)"\r
        >\r
          <path\r
            d="M 0,0 V -234.537 H 78.01 C 29.021,-169.169 0,-87.974 0,0"\r
            style="fill: #eedb00; fill-opacity: 1; fill-rule: nonzero; stroke: none"\r
            id="path3428"\r
          />\r
        </g>\r
        <path\r
          d="M 431.131,41.207 H 80.869 v 115.724 h 350.262 z"\r
          style="fill: #b18cd9; fill-opacity: 1; fill-rule: nonzero; stroke: none"\r
          id="path3430"\r
        />\r
        <g\r
          id="g3432"\r
          transform="translate(194.475,156.931)"\r
        >\r
          <path\r
            d="m 0,0 h -113.606 v -115.724 h 350.262 v 2.149 C 144.487,-103.933 61.838,-62.31 0,0"\r
            style="fill: #996acc; fill-opacity: 1; fill-rule: nonzero; stroke: none"\r
            id="path3434"\r
          />\r
        </g>\r
        <g\r
          id="g3436"\r
          transform="translate(213.2632,94.3332)"\r
        >\r
          <path\r
            d="m 0,0 c 0,-10.991 -11.188,-19.901 -24.99,-19.901 -13.801,0 -24.989,8.91 -24.989,19.901 0,10.991 11.188,19.9 24.989,19.9 C -11.188,19.9 0,10.991 0,0"\r
            style="fill: #ffffff; fill-opacity: 1; fill-rule: nonzero; stroke: none"\r
            id="path3438"\r
          />\r
        </g>\r
        <g\r
          id="g3440"\r
          transform="translate(298.7368,94.3332)"\r
        >\r
          <path\r
            d="m 0,0 c 0,-10.991 11.188,-19.901 24.99,-19.901 13.801,0 24.989,8.91 24.989,19.901 0,10.991 -11.188,19.9 -24.989,19.9 C 11.188,19.9 0,10.991 0,0"\r
            style="fill: #ffffff; fill-opacity: 1; fill-rule: nonzero; stroke: none"\r
            id="path3442"\r
          />\r
        </g>\r
        <g\r
          id="g3444"\r
          transform="translate(202.8374,123.7057)"\r
        >\r
          <path\r
            d="M 0,0 V -10.216"\r
            style="\r
              fill: none;\r
              stroke: #3d4751;\r
              stroke-width: 15;\r
              stroke-linecap: round;\r
              stroke-linejoin: round;\r
              stroke-miterlimit: 10;\r
              stroke-dasharray: none;\r
              stroke-opacity: 1;\r
            "\r
            id="path3446"\r
          />\r
        </g>\r
        <g\r
          id="g3448"\r
          transform="translate(309.1625,123.7057)"\r
        >\r
          <path\r
            d="M 0,0 V -10.216"\r
            style="\r
              fill: none;\r
              stroke: #3d4751;\r
              stroke-width: 15;\r
              stroke-linecap: round;\r
              stroke-linejoin: round;\r
              stroke-miterlimit: 10;\r
              stroke-dasharray: none;\r
              stroke-opacity: 1;\r
            "\r
            id="path3450"\r
          />\r
        </g>\r
        <g\r
          id="g3452"\r
          transform="translate(241.984,113.7942)"\r
        >\r
          <path\r
            d="m 0,0 c 3.408,-3.911 8.421,-6.385 14.016,-6.385 5.595,0 10.608,2.474 14.016,6.385"\r
            style="\r
              fill: none;\r
              stroke: #3d4751;\r
              stroke-width: 15;\r
              stroke-linecap: round;\r
              stroke-linejoin: round;\r
              stroke-miterlimit: 10;\r
              stroke-dasharray: none;\r
              stroke-opacity: 1;\r
            "\r
            id="path3454"\r
          />\r
        </g>\r
        <g\r
          id="g3456"\r
          transform="translate(150.0629,447.8862)"\r
        >\r
          <path\r
            d="m 0,0 33.436,22.907 h -102.63 v -161.294 l 21.382,72.58 59.96,-46.151 -25.363,71.287 75.636,-2.093 z"\r
            style="fill: #fd5c6f; fill-opacity: 1; fill-rule: nonzero; stroke: none"\r
            id="path3458"\r
          />\r
        </g>\r
        <g\r
          id="g3460"\r
          transform="translate(80.8692,432.6757)"\r
        >\r
          <path\r
            d="m 0,0 v -123.177 l 10.122,34.358 C 3.502,-60.282 0,-30.55 0,0"\r
            style="fill: #f6334c; fill-opacity: 1; fill-rule: nonzero; stroke: none"\r
            id="path3462"\r
          />\r
        </g>\r
        <g\r
          id="g3464"\r
          transform="translate(431.1308,271.141)"\r
        >\r
          <path\r
            d="m 0,0 -57.698,-44.41 24.406,68.598 -72.782,-2.014 60.066,41.15 -60.066,41.151 72.782,-2.014 -24.406,68.597 L 0,126.649 Z"\r
            style="fill: #ffffff; fill-opacity: 1; fill-rule: nonzero; stroke: none"\r
            id="path3466"\r
          />\r
        </g>\r
      </g>\r
    </g>\r
  </g>\r
</svg>\r
`,R5=`<?xml version="1.0" encoding="UTF-8" standalone="no"?>\r
<!-- Created with Inkscape (http://www.inkscape.org/) -->\r
\r
<svg\r
  version="1.1"\r
  id="svg5007"\r
  xml:space="preserve"\r
  width="682.66669"\r
  height="682.66669"\r
  viewBox="0 0 682.66669 682.66669"\r
  xmlns="http://www.w3.org/2000/svg"\r
>\r
  <defs id="defs5011">\r
    <clipPath\r
      clipPathUnits="userSpaceOnUse"\r
      id="clipPath5021"\r
    >\r
      <path\r
        d="M 0,512 H 512 V 0 H 0 Z"\r
        id="path5019"\r
      />\r
    </clipPath>\r
  </defs>\r
  <g\r
    id="g5013"\r
    transform="matrix(1.3333333,0,0,-1.3333333,0,682.66667)"\r
  >\r
    <g id="g5015">\r
      <g\r
        id="g5017"\r
        clip-path="url(#clipPath5021)"\r
      >\r
        <g\r
          id="g5023"\r
          transform="translate(446,7.5)"\r
        >\r
          <path\r
            d="m 0,0 h -380 c -11.046,0 -20,8.954 -20,20 v 457 c 0,11.046 8.954,20 20,20 H 0 c 11.046,0 20,-8.954 20,-20 V 20 C 20,8.954 11.046,0 0,0"\r
            style="fill: #efe6e6; fill-opacity: 1; fill-rule: nonzero; stroke: none"\r
            id="path5025"\r
          />\r
        </g>\r
        <g\r
          id="g5027"\r
          transform="translate(465.9996,47.5)"\r
        >\r
          <path\r
            d="m 0,0 c -209.868,0 -380,170.132 -380,380 v 77 h -20 c -11.045,0 -20,-8.954 -20,-20 V -20 c 0,-11.046 8.955,-20 20,-20 h 380 c 11.046,0 20,8.954 20,20 z"\r
            style="fill: #e2d7d7; fill-opacity: 1; fill-rule: nonzero; stroke: none"\r
            id="path5029"\r
          />\r
        </g>\r
        <g\r
          id="g5031"\r
          transform="translate(236,199.8333)"\r
        >\r
          <path\r
            d="M 0,0 H 190 V 264.667 H 80 Z"\r
            style="fill: #ffffff; fill-opacity: 1; fill-rule: nonzero; stroke: none"\r
            id="path5033"\r
          />\r
        </g>\r
        <g\r
          id="g5035"\r
          transform="translate(236,199.8333)"\r
        >\r
          <path\r
            d="M 0,0 H 190 V 264.667 H 80 Z"\r
            style="fill: #5ad6ff; fill-opacity: 1; fill-rule: nonzero; stroke: none"\r
            id="path5037"\r
          />\r
        </g>\r
        <g\r
          id="g5039"\r
          transform="translate(86,199.8333)"\r
        >\r
          <path\r
            d="m 0,0 h 110 l 80,264.667 H 0 Z"\r
            style="fill: #f4e74d; fill-opacity: 1; fill-rule: nonzero; stroke: none"\r
            id="path5041"\r
          />\r
        </g>\r
        <g\r
          id="g5043"\r
          transform="translate(86,427.4996)"\r
        >\r
          <path\r
            d="M 0,0 V -227.666 H 75.725 C 28.171,-164.213 0,-85.397 0,0"\r
            style="fill: #eedb00; fill-opacity: 1; fill-rule: nonzero; stroke: none"\r
            id="path5045"\r
          />\r
        </g>\r
        <path\r
          d="M 426,47.5 H 86 v 112.333 h 340 z"\r
          style="fill: #b18cd9; fill-opacity: 1; fill-rule: nonzero; stroke: none"\r
          id="path5047"\r
        />\r
        <g\r
          id="g5049"\r
          transform="translate(196.2775,159.8334)"\r
        >\r
          <path\r
            d="m 0,0 h -110.278 v -112.333 h 340 v 2.085 C 140.254,-100.888 60.026,-60.484 0,0"\r
            style="fill: #996acc; fill-opacity: 1; fill-rule: nonzero; stroke: none"\r
            id="path5051"\r
          />\r
        </g>\r
        <g\r
          id="g5053"\r
          transform="translate(214.5152,99.0695)"\r
        >\r
          <path\r
            d="m 0,0 c 0,-10.669 -10.861,-19.318 -24.258,-19.318 -13.397,0 -24.257,8.649 -24.257,19.318 0,10.669 10.86,19.317 24.257,19.317 C -10.861,19.317 0,10.669 0,0"\r
            style="fill: #ffffff; fill-opacity: 1; fill-rule: nonzero; stroke: none"\r
            id="path5055"\r
          />\r
        </g>\r
        <g\r
          id="g5057"\r
          transform="translate(297.4848,99.0695)"\r
        >\r
          <path\r
            d="m 0,0 c 0,-10.669 10.861,-19.318 24.258,-19.318 13.397,0 24.257,8.649 24.257,19.318 0,10.669 -10.86,19.317 -24.257,19.317 C 10.861,19.317 0,10.669 0,0"\r
            style="fill: #ffffff; fill-opacity: 1; fill-rule: nonzero; stroke: none"\r
            id="path5059"\r
          />\r
        </g>\r
        <g\r
          id="g5061"\r
          transform="translate(204.3949,127.5815)"\r
        >\r
          <path\r
            d="M 0,0 V -9.916"\r
            style="\r
              fill: none;\r
              stroke: #000000;\r
              stroke-width: 15;\r
              stroke-linecap: round;\r
              stroke-linejoin: round;\r
              stroke-miterlimit: 10;\r
              stroke-dasharray: none;\r
              stroke-opacity: 1;\r
            "\r
            id="path5063"\r
          />\r
        </g>\r
        <g\r
          id="g5065"\r
          transform="translate(307.605,127.5815)"\r
        >\r
          <path\r
            d="M 0,0 V -9.916"\r
            style="\r
              fill: none;\r
              stroke: #000000;\r
              stroke-width: 15;\r
              stroke-linecap: round;\r
              stroke-linejoin: round;\r
              stroke-miterlimit: 10;\r
              stroke-dasharray: none;\r
              stroke-opacity: 1;\r
            "\r
            id="path5067"\r
          />\r
        </g>\r
        <g\r
          id="g5069"\r
          transform="translate(242.3946,117.9604)"\r
        >\r
          <path\r
            d="m 0,0 c 3.308,-3.796 8.175,-6.198 13.605,-6.198 5.431,0 10.298,2.402 13.606,6.198"\r
            style="\r
              fill: none;\r
              stroke: #000000;\r
              stroke-width: 15;\r
              stroke-linecap: round;\r
              stroke-linejoin: round;\r
              stroke-miterlimit: 10;\r
              stroke-dasharray: none;\r
              stroke-opacity: 1;\r
            "\r
            id="path5071"\r
          />\r
        </g>\r
        <g\r
          id="g5073"\r
          transform="translate(153.1665,442.2645)"\r
        >\r
          <path\r
            d="m 0,0 32.456,22.235 h -99.623 v -156.568 l 20.756,70.454 58.203,-44.799 -24.62,69.199 73.42,-2.032 z"\r
            style="fill: #fd5c6f; fill-opacity: 1; fill-rule: nonzero; stroke: none"\r
            id="path5075"\r
          />\r
        </g>\r
        <g\r
          id="g5077"\r
          transform="translate(86,427.4996)"\r
        >\r
          <path\r
            d="m 0,0 v -119.568 l 9.825,33.351 C 3.399,-58.516 0,-29.655 0,0"\r
            style="fill: #f6334c; fill-opacity: 1; fill-rule: nonzero; stroke: none"\r
            id="path5079"\r
          />\r
        </g>\r
        <g\r
          id="g5081"\r
          transform="translate(426,270.6974)"\r
        >\r
          <path\r
            d="m 0,0 -56.008,-43.108 23.692,66.587 -70.65,-1.955 58.306,39.945 -58.306,39.945 70.65,-1.955 -23.692,66.588 L 0,122.939 Z"\r
            style="fill: #ffffff; fill-opacity: 1; fill-rule: nonzero; stroke: none"\r
            id="path5083"\r
          />\r
        </g>\r
        <g\r
          id="g5085"\r
          transform="translate(446,7.5)"\r
        >\r
          <path\r
            d="m 0,0 h -380 c -11.046,0 -20,8.954 -20,20 v 457 c 0,11.046 8.954,20 20,20 H 0 c 11.046,0 20,-8.954 20,-20 V 20 C 20,8.954 11.046,0 0,0 Z"\r
            style="\r
              fill: none;\r
              stroke: #000000;\r
              stroke-width: 15;\r
              stroke-linecap: round;\r
              stroke-linejoin: round;\r
              stroke-miterlimit: 10;\r
              stroke-dasharray: none;\r
              stroke-opacity: 1;\r
            "\r
            id="path5087"\r
          />\r
        </g>\r
        <g\r
          id="g5089"\r
          transform="translate(426,346.167)"\r
        >\r
          <path\r
            d="m 0,0 v 118.333 h -110 l -80,-264.667 H 0 V -28"\r
            style="\r
              fill: none;\r
              stroke: #000000;\r
              stroke-width: 15;\r
              stroke-linecap: round;\r
              stroke-linejoin: round;\r
              stroke-miterlimit: 10;\r
              stroke-dasharray: none;\r
              stroke-opacity: 1;\r
            "\r
            id="path5091"\r
          />\r
        </g>\r
        <g\r
          id="g5093"\r
          transform="translate(86,199.8333)"\r
        >\r
          <path\r
            d="m 0,0 h 110 l 80,264.667 H 0 Z"\r
            style="\r
              fill: none;\r
              stroke: #000000;\r
              stroke-width: 15;\r
              stroke-linecap: round;\r
              stroke-linejoin: round;\r
              stroke-miterlimit: 10;\r
              stroke-dasharray: none;\r
              stroke-opacity: 1;\r
            "\r
            id="path5095"\r
          />\r
        </g>\r
        <g\r
          id="g5097"\r
          transform="translate(154.0172,159.8334)"\r
        >\r
          <path\r
            d="m 0,0 h 271.983 v -112.333 h -340 V 0 H -28"\r
            style="\r
              fill: none;\r
              stroke: #000000;\r
              stroke-width: 15;\r
              stroke-linecap: round;\r
              stroke-linejoin: round;\r
              stroke-miterlimit: 10;\r
              stroke-dasharray: none;\r
              stroke-opacity: 1;\r
            "\r
            id="path5099"\r
          />\r
        </g>\r
        <g\r
          id="g5101"\r
          transform="translate(86,307.9314)"\r
        >\r
          <path\r
            d="m 0,0 20.756,70.454 58.203,-44.799 -24.62,69.199 73.419,-2.032 -60.591,41.511 32.455,22.236"\r
            style="\r
              fill: none;\r
              stroke: #000000;\r
              stroke-width: 15;\r
              stroke-linecap: round;\r
              stroke-linejoin: round;\r
              stroke-miterlimit: 10;\r
              stroke-dasharray: none;\r
              stroke-opacity: 1;\r
            "\r
            id="path5103"\r
          />\r
        </g>\r
        <g\r
          id="g5105"\r
          transform="translate(426,270.6974)"\r
        >\r
          <path\r
            d="m 0,0 -56.008,-43.108 23.692,66.587 -70.65,-1.955 58.306,39.945 -58.306,39.945 70.65,-1.955 -23.692,66.588 L 0,122.939"\r
            style="\r
              fill: none;\r
              stroke: #000000;\r
              stroke-width: 15;\r
              stroke-linecap: round;\r
              stroke-linejoin: round;\r
              stroke-miterlimit: 10;\r
              stroke-dasharray: none;\r
              stroke-opacity: 1;\r
            "\r
            id="path5107"\r
          />\r
        </g>\r
      </g>\r
    </g>\r
  </g>\r
</svg>\r
`,P5=`<svg\r
  id="Capa_1"\r
  enable-background="new 0 0 512 512"\r
  height="512"\r
  viewBox="0 0 512 512"\r
  width="512"\r
  xmlns="http://www.w3.org/2000/svg"\r
>\r
  <g>\r
    <g>\r
      <g>\r
        <path\r
          d="m427.508 512h-343.02c-5.69 0-10.302-4.612-10.302-10.302v-491.396c0-5.69 4.612-10.302 10.302-10.302h343.02c5.69 0 10.302 4.612 10.302 10.302v491.396c-.001 5.69-4.613 10.302-10.302 10.302z"\r
          fill="#f2eff2"\r
        />\r
      </g>\r
    </g>\r
    <path\r
      d="m427.512 0h-41.238c5.687 0 10.302 4.615 10.302 10.302v36.12l-18.016 49.462 18.016 36.952v51.701l-13.787 87.003 13.787 55.974v51.669l-18.016 52.406 18.016 34.008v36.1c0 5.687-4.615 10.302-10.302 10.302h41.238c5.687 0 10.302-4.615 10.302-10.302v-491.395c0-5.687-4.615-10.302-10.302-10.302z"\r
      fill="#e1dde1"\r
    />\r
    <path\r
      d="m396.6 46.36v86.52c0 2.85-2.31 5.15-5.15 5.15h-110.11l-22.53-48.41 22.53-48.41h110.11c2.84 0 5.15 2.3 5.15 5.15z"\r
      fill="#3ad1e0"\r
    />\r
    <path\r
      d="m396.599 46.358v86.525c0 2.843-2.308 5.151-5.151 5.151h-30.926c2.843 0 5.151-2.308 5.151-5.151v-86.525c0-2.843-2.308-5.151-5.151-5.151h30.926c2.844 0 5.151 2.308 5.151 5.151z"\r
      fill="#20bfd5"\r
    />\r
    <path\r
      d="m281.34 41.207h-39.904c-2.845 0-5.151 2.306-5.151 5.151v86.525c0 2.845 2.306 5.151 5.151 5.151h39.904z"\r
      fill="#23f1a8"\r
    />\r
    <path\r
      d="m304.73 470.79h-77.71l-39.22-20.29-39.23 20.29h-28.03c-2.84 0-5.15-2.3-5.15-5.15v-86.52c0-2.85 2.31-5.15 5.15-5.15h128.92c1.76 0 3.4.89 4.34 2.37l55.27 86.53c2.19 3.43-.27 7.92-4.34 7.92z"\r
      fill="#23f1a8"\r
    />\r
    <g>\r
      <path\r
        d="m227.019 443.104v27.689h-78.446v-27.689c0-21.669 17.569-39.228 39.228-39.228 10.83 0 20.639 4.39 27.729 11.489 7.099 7.1 11.489 16.899 11.489 27.739z"\r
        fill="#ae6ad8"\r
      />\r
      <path\r
        d="m227.021 443.101v27.691h-29.061v-27.691c0-10.838-4.389-20.634-11.486-27.732-3.729-3.74-8.211-6.727-13.207-8.715 4.492-1.793 9.406-2.782 14.536-2.782 10.827 0 20.635 4.389 27.732 11.497 7.097 7.098 11.486 16.895 11.486 27.732z"\r
        fill="#975bbb"\r
      />\r
    </g>\r
    <path\r
      d="m304.728 470.793h-30.926c4.069 0 6.531-4.492 4.347-7.922l-55.269-86.525c-.948-1.483-2.586-2.38-4.347-2.38h30.926c1.762 0 3.4.896 4.347 2.38l55.269 86.525c2.184 3.43-.278 7.922-4.347 7.922z"\r
      fill="#27e19d"\r
    />\r
    <path\r
      d="m391.448 373.966h-81.106c-4.068 0-6.531 4.495-4.341 7.924l55.269 86.525c.946 1.482 2.583 2.378 4.341 2.378h25.837c2.845 0 5.151-2.306 5.151-5.151v-86.525c0-2.845-2.306-5.151-5.151-5.151z"\r
      fill="#ae6ad8"\r
    />\r
    <path\r
      d="m396.599 379.117v86.525c0 2.843-2.308 5.151-5.151 5.151h-25.837c-.907 0-1.772-.237-2.534-.68 1.556-.886 2.596-2.555 2.596-4.471v-86.525c0-2.843-2.308-5.151-5.151-5.151h30.926c2.844 0 5.151 2.308 5.151 5.151z"\r
      fill="#975bbb"\r
    />\r
    <g>\r
      <path\r
        d="m195.602 46.358v86.525c0 2.845-2.306 5.151-5.151 5.151h-69.91c-2.845 0-5.151-2.306-5.151-5.151v-86.525c0-2.845 2.306-5.151 5.151-5.151h69.91c2.845 0 5.151 2.306 5.151 5.151z"\r
        fill="#3ad1e0"\r
      />\r
      <path\r
        d="m195.6 46.358v86.525c0 2.843-2.308 5.151-5.151 5.151h-30.926c2.843 0 5.151-2.308 5.151-5.151v-86.525c0-2.843-2.308-5.151-5.151-5.151h30.926c2.844 0 5.151 2.308 5.151 5.151z"\r
        fill="#20bfd5"\r
      />\r
    </g>\r
    <g>\r
      <path\r
        d="m396.6 184.39v143.22c0 2.84-2.31 5.15-5.15 5.15h-30.93l-104.53-27.53-104.52 27.53h-30.93c-2.84 0-5.15-2.31-5.15-5.15v-143.22c0-2.84 2.31-5.15 5.15-5.15h47.77l87.68 16.15 87.69-16.15h47.77c2.84 0 5.15 2.31 5.15 5.15z"\r
        fill="#fb54b6"\r
      />\r
    </g>\r
    <path\r
      d="m151.473 332.759c0-57.729 46.798-104.527 104.527-104.527s104.527 46.798 104.527 104.527z"\r
      fill="#fb9927"\r
    />\r
    <path\r
      d="m360.522 332.759h-35.397c0-51.694-37.519-94.612-86.824-103.028 5.748-.979 11.662-1.494 17.699-1.494 57.731 0 104.522 46.79 104.522 104.522z"\r
      fill="#f98824"\r
    />\r
    <g>\r
      <path\r
        d="m396.599 184.392v143.216c0 2.843-2.308 5.151-5.151 5.151h-30.926c2.843 0 5.151-2.308 5.151-5.151v-143.216c0-2.843-2.308-5.151-5.151-5.151h30.926c2.844 0 5.151 2.308 5.151 5.151z"\r
        fill="#fb33a8"\r
      />\r
    </g>\r
    <g>\r
      <g>\r
        <path\r
          d="m345.43 247.027c-.144 0-.299 0-.453-.01-24.024-1.226-43.947 17.946-43.947 41.722 0 .721.021 1.442.051 2.174.268 5.079-3.853 8.489-8.128 8.489-2.112 0-4.244-.814-5.913-2.678-8.293-9.189-19.676-13.794-31.039-13.794s-22.746 4.605-31.039 13.794c-1.669 1.865-3.801 2.678-5.913 2.678-4.275 0-8.396-3.41-8.128-8.489.031-.731.041-1.453.041-2.174 0-23.777-19.924-42.948-43.937-41.722-.155.01-.309.01-.464.01-7.263 0-10.879-9.076-5.357-14.062 9.189-8.293 13.794-19.666 13.794-31.039 0-7.912-2.225-15.813-6.686-22.685h175.378c-4.461 6.871-6.686 14.773-6.686 22.685 0 11.373 4.605 22.746 13.794 31.039 5.521 4.986 1.905 14.062-5.368 14.062z"\r
          fill="#fdef63"\r
        />\r
        <g>\r
          <g id="XMLID_00000127012381744132405410000009872483291948348836_">\r
            <path\r
              d="m280.138 231.696c-4.268 0-7.726-3.459-7.726-7.726v-.107c0-4.267 3.459-7.726 7.726-7.726s7.726 3.459 7.726 7.726v.107c0 4.267-3.459 7.726-7.726 7.726z"\r
              fill="#554e55"\r
            />\r
          </g>\r
          <g id="XMLID_00000080918978500845250090000017315552773041050031_">\r
            <path\r
              d="m256 231.696c-4.267 0-7.726-3.459-7.726-7.726v-.107c0-4.267 3.459-7.726 7.726-7.726 4.268 0 7.726 3.459 7.726 7.726v.107c0 4.267-3.458 7.726-7.726 7.726z"\r
              fill="#554e55"\r
            />\r
          </g>\r
          <g id="XMLID_00000140711681861242238370000008769002181148908969_">\r
            <path\r
              d="m231.862 231.696c-4.267 0-7.726-3.459-7.726-7.726v-.107c0-4.267 3.459-7.726 7.726-7.726s7.726 3.459 7.726 7.726v.107c.001 4.267-3.459 7.726-7.726 7.726z"\r
              fill="#554e55"\r
            />\r
          </g>\r
        </g>\r
        <path\r
          d="m345.43 247.037c-.155 0-.299 0-.443-.021-24.034-1.226-43.948 17.956-43.948 41.722 0 .721.01 1.432.052 2.174.258 5.079-3.863 8.499-8.128 8.499-2.122 0-4.255-.824-5.924-2.689-6.954-7.685-16.05-12.167-25.507-13.423 29.968-14.804 50.582-45.678 50.582-81.364 0-7.84-.999-15.442-2.864-22.695h34.429c-4.45 6.871-6.676 14.783-6.676 22.685 0 11.373 4.605 22.757 13.784 31.05 5.532 4.966 1.926 14.062-5.357 14.062z"\r
          fill="#f3d730"\r
        />\r
      </g>\r
    </g>\r
    <g>\r
      <g>\r
        <g>\r
          <circle\r
            cx="187.8"\r
            cy="385.284"\r
            fill="#d8b2ec"\r
            r="25.455"\r
          />\r
        </g>\r
      </g>\r
    </g>\r
    <g>\r
      <g id="XMLID_00000028301319025648580530000009457246182494066313_">\r
        <path\r
          d="m316.443 111.45c-4.258 0-7.714-3.445-7.726-7.705-.012-4.267 3.438-7.736 7.705-7.747l41.222-.114h.021c4.258 0 7.714 3.445 7.726 7.705.012 4.267-3.438 7.736-7.705 7.747l-41.222.114c-.007 0-.014 0-.021 0z"\r
          fill="#f2eff2"\r
        />\r
      </g>\r
      <g>\r
        <path\r
          d="m357.665 83.243h-21.761c-4.268 0-7.726-3.459-7.726-7.726s3.459-7.726 7.726-7.726h21.761c4.268 0 7.726 3.459 7.726 7.726s-3.458 7.726-7.726 7.726z"\r
          fill="#f2eff2"\r
        />\r
      </g>\r
    </g>\r
  </g>\r
</svg>\r
`,$5=`<?xml version="1.0" encoding="UTF-8"?>\r
<svg\r
  xmlns="http://www.w3.org/2000/svg"\r
  version="1.1"\r
  id="Capa_1"\r
  x="0px"\r
  y="0px"\r
  viewBox="0 0 512 512"\r
  style="enable-background: new 0 0 512 512"\r
  xml:space="preserve"\r
  width="512"\r
  height="512"\r
>\r
  <g>\r
    <g>\r
      <g>\r
        <path\r
          style="fill: #f2eff2"\r
          d="M422.485,504.5H89.515c-5.523,0-10-4.477-10-10v-477c0-5.523,4.477-10,10-10h332.971&#10;&#9;&#9;&#9;&#9;c5.523,0,10,4.477,10,10v477C432.485,500.023,428.008,504.5,422.485,504.5z"\r
        />\r
      </g>\r
    </g>\r
    <g>\r
      <g>\r
        <path\r
          style="fill: #e1dde1"\r
          d="M432.49,17.5v477c0,5.52-4.48,10-10,10h-40.03c5.52,0,10-4.48,10-10v-477c0-5.52-4.48-10-10-10&#10;&#9;&#9;&#9;&#9;h40.03C428.01,7.5,432.49,11.98,432.49,17.5z"\r
        />\r
      </g>\r
    </g>\r
    <g>\r
      <path\r
        style="\r
          fill: none;\r
          stroke: #000000;\r
          stroke-width: 15;\r
          stroke-linecap: round;\r
          stroke-linejoin: round;\r
          stroke-miterlimit: 10;\r
        "\r
        d="&#10;&#9;&#9;&#9;M158.639,7.5H89.515c-5.523,0-10,4.477-10,10v477c0,5.523,4.477,10,10,10h332.971c5.523,0,10-4.477,10-10v-477&#10;&#9;&#9;&#9;c0-5.523-4.477-10-10-10H191.801"\r
      />\r
    </g>\r
    <path\r
      style="fill: #3ad1e0"\r
      d="M392.482,52.5v83.99c0,2.761-2.239,5-5,5H241.866c-2.761,0-5-2.239-5-5V52.5c0-2.761,2.239-5,5-5&#10;&#9;&#9;h145.617C390.244,47.5,392.482,49.739,392.482,52.5z"\r
    />\r
    <path\r
      style="fill: #20bfd5"\r
      d="M392.482,52.5v83.99c0,2.76-2.24,5-5,5h-30.02c2.76,0,5-2.24,5-5V52.5c0-2.76-2.24-5-5-5h30.02&#10;&#9;&#9;C390.242,47.5,392.482,49.74,392.482,52.5z"\r
    />\r
    <path\r
      style="fill: #26d192"\r
      d="M280.6,47.5h-38.735c-2.761,0-5,2.239-5,5v83.99c0,2.761,2.239,5,5,5H280.6V47.5z"\r
    />\r
\r
    <line\r
      style="\r
        fill: none;\r
        stroke: #000000;\r
        stroke-width: 15;\r
        stroke-linecap: round;\r
        stroke-linejoin: round;\r
        stroke-miterlimit: 10;\r
      "\r
      x1="280.6"\r
      y1="141.49"\r
      x2="280.6"\r
      y2="47.5"\r
    />\r
    <path\r
      style="fill: #23f1a8"\r
      d="M124.512,370.51h125.143c1.706,0,3.295,0.87,4.214,2.308l53.65,83.99&#10;&#9;&#9;c2.126,3.328-0.264,7.692-4.214,7.692H124.512c-2.761,0-5-2.239-5-5v-83.99C119.512,372.749,121.751,370.51,124.512,370.51z"\r
    />\r
    <g>\r
      <path\r
        style="fill: #ae6ad8"\r
        d="M227.87,437.622V464.5h-76.148v-26.878c0-21.034,17.054-38.079,38.079-38.079&#10;&#9;&#9;&#9;c10.512,0,20.034,4.261,26.916,11.153C223.609,417.588,227.87,427.1,227.87,437.622z"\r
      />\r
      <path\r
        style="fill: #975bbb"\r
        d="M227.872,437.62v26.88h-28.21v-26.88c0-10.52-4.26-20.03-11.15-26.92&#10;&#9;&#9;&#9;c-3.62-3.63-7.97-6.53-12.82-8.46c4.36-1.74,9.13-2.7,14.11-2.7c10.51,0,20.03,4.26,26.92,11.16&#10;&#9;&#9;&#9;C223.612,417.59,227.872,427.1,227.872,437.62z"\r
      />\r
      <path\r
        style="\r
          fill: none;\r
          stroke: #000000;\r
          stroke-width: 15;\r
          stroke-linecap: round;\r
          stroke-linejoin: round;\r
          stroke-miterlimit: 10;\r
        "\r
        d="&#10;&#9;&#9;&#9;M151.722,464.5v-26.878c0-21.034,17.054-38.079,38.079-38.079c10.512,0,20.034,4.261,26.916,11.153&#10;&#9;&#9;&#9;c6.892,6.892,11.153,16.404,11.153,26.926V464.5"\r
      />\r
    </g>\r
    <path\r
      style="fill: #27e19d"\r
      d="M303.302,464.5h-30.02c3.95,0,6.34-4.36,4.22-7.69l-53.65-83.99c-0.92-1.44-2.51-2.31-4.22-2.31&#10;&#9;&#9;h30.02c1.71,0,3.3,0.87,4.22,2.31l53.65,83.99C309.642,460.14,307.252,464.5,303.302,464.5z"\r
    />\r
    <path\r
      style="fill: #ae6ad8"\r
      d="M387.482,370.51h-78.73c-3.949,0-6.34,4.363-4.214,7.692l53.65,83.99&#10;&#9;&#9;c0.919,1.438,2.507,2.308,4.214,2.308h25.08c2.761,0,5-2.239,5-5v-83.99C392.482,372.749,390.244,370.51,387.482,370.51z"\r
    />\r
    <path\r
      style="fill: #975bbb"\r
      d="M392.482,375.51v83.99c0,2.76-2.24,5-5,5h-25.08c-0.88,0-1.72-0.23-2.46-0.66&#10;&#9;&#9;c1.51-0.86,2.52-2.48,2.52-4.34v-83.99c0-2.76-2.24-5-5-5h30.02C390.242,370.51,392.482,372.75,392.482,375.51z"\r
    />\r
    <path\r
      style="\r
        fill: none;\r
        stroke: #000000;\r
        stroke-width: 15;\r
        stroke-linecap: round;\r
        stroke-linejoin: round;\r
        stroke-miterlimit: 10;\r
      "\r
      d="&#10;&#9;&#9;M392.482,52.5v83.99c0,2.761-2.239,5-5,5H241.866c-2.761,0-5-2.239-5-5V52.5c0-2.761,2.239-5,5-5h145.617&#10;&#9;&#9;C390.244,47.5,392.482,49.739,392.482,52.5z"\r
    />\r
    <g>\r
      <path\r
        style="fill: #3ad1e0"\r
        d="M197.374,52.5v83.99c0,2.761-2.239,5-5,5h-67.862c-2.761,0-5-2.239-5-5V52.5c0-2.761,2.239-5,5-5&#10;&#9;&#9;&#9;h67.862C195.135,47.5,197.374,49.739,197.374,52.5z"\r
      />\r
      <path\r
        style="fill: #20bfd5"\r
        d="M197.372,52.5v83.99c0,2.76-2.24,5-5,5h-30.02c2.76,0,5-2.24,5-5V52.5c0-2.76-2.24-5-5-5h30.02&#10;&#9;&#9;&#9;C195.132,47.5,197.372,49.74,197.372,52.5z"\r
      />\r
      <path\r
        style="\r
          fill: none;\r
          stroke: #000000;\r
          stroke-width: 15;\r
          stroke-linecap: round;\r
          stroke-linejoin: round;\r
          stroke-miterlimit: 10;\r
        "\r
        d="&#10;&#9;&#9;&#9;M197.374,52.5v83.99c0,2.761-2.239,5-5,5h-67.862c-2.761,0-5-2.239-5-5V52.5c0-2.761,2.239-5,5-5h67.862&#10;&#9;&#9;&#9;C195.135,47.5,197.374,49.739,197.374,52.5z"\r
      />\r
    </g>\r
    <g>\r
      <path\r
        style="fill: #fb54b6"\r
        d="M124.512,181.49h262.97c2.761,0,5,2.239,5,5v139.02c0,2.761-2.239,5-5,5h-262.97&#10;&#9;&#9;&#9;c-2.761,0-5-2.239-5-5V186.49C119.512,183.729,121.751,181.49,124.512,181.49z"\r
      />\r
    </g>\r
    <path\r
      style="fill: #fb9927"\r
      d="M154.537,330.51c0-56.038,45.427-101.465,101.465-101.465s101.465,45.427,101.465,101.465H154.537z"\r
    />\r
    <path\r
      style="fill: #f98824"\r
      d="M357.462,330.51h-34.36c0-50.18-36.42-91.84-84.28-100.01c5.58-0.95,11.32-1.45,17.18-1.45&#10;&#9;&#9;C312.042,229.05,357.462,274.47,357.462,330.51z"\r
    />\r
    <path\r
      style="\r
        fill: none;\r
        stroke: #000000;\r
        stroke-width: 15;\r
        stroke-linecap: round;\r
        stroke-linejoin: round;\r
        stroke-miterlimit: 10;\r
      "\r
      d="&#10;&#9;&#9;M154.537,330.51c0-56.038,45.427-101.465,101.465-101.465s101.465,45.427,101.465,101.465"\r
    />\r
    <g>\r
      <path\r
        style="fill: #fb33a8"\r
        d="M392.482,186.49v139.02c0,2.76-2.24,5-5,5h-30.02c2.76,0,5-2.24,5-5V186.49c0-2.76-2.24-5-5-5&#10;&#9;&#9;&#9;h30.02C390.242,181.49,392.482,183.73,392.482,186.49z"\r
      />\r
    </g>\r
    <g>\r
      <g>\r
        <path\r
          style="fill: #fdef63"\r
          d="M342.812,247.29c-0.14,0-0.29,0-0.44-0.01c-23.32-1.19-42.66,17.42-42.66,40.5&#10;&#9;&#9;&#9;&#9;c0,0.7,0.02,1.4,0.05,2.11c0.26,4.93-3.74,8.24-7.89,8.24c-2.05,0-4.12-0.79-5.74-2.6c-8.05-8.92-19.1-13.39-30.13-13.39&#10;&#9;&#9;&#9;&#9;s-22.08,4.47-30.13,13.39c-1.62,1.81-3.69,2.6-5.74,2.6c-4.15,0-8.15-3.31-7.89-8.24c0.03-0.71,0.04-1.41,0.04-2.11&#10;&#9;&#9;&#9;&#9;c0-23.08-19.34-41.69-42.65-40.5c-0.15,0.01-0.3,0.01-0.45,0.01c-7.05,0-10.56-8.81-5.2-13.65c8.92-8.05,13.39-19.09,13.39-30.13&#10;&#9;&#9;&#9;&#9;c0-7.68-2.16-15.35-6.49-22.02h170.24c-4.33,6.67-6.49,14.34-6.49,22.02c0,11.04,4.47,22.08,13.39,30.13&#10;&#9;&#9;&#9;&#9;C353.382,238.48,349.872,247.29,342.812,247.29z"\r
        />\r
        <g>\r
          <line\r
            id="XMLID_00000127012381744132405410000009872483291948348836_"\r
            style="\r
              fill: none;\r
              stroke: #000000;\r
              stroke-width: 15;\r
              stroke-linecap: round;\r
              stroke-linejoin: round;\r
              stroke-miterlimit: 10;\r
            "\r
            x1="279.433"\r
            y1="224.908"\r
            x2="279.433"\r
            y2="224.805"\r
          />\r
\r
          <line\r
            id="XMLID_00000080918978500845250090000017315552773041050031_"\r
            style="\r
              fill: none;\r
              stroke: #000000;\r
              stroke-width: 15;\r
              stroke-linecap: round;\r
              stroke-linejoin: round;\r
              stroke-miterlimit: 10;\r
            "\r
            x1="256.002"\r
            y1="224.908"\r
            x2="256.002"\r
            y2="224.805"\r
          />\r
\r
          <line\r
            id="XMLID_00000140711681861242238370000008769002181148908969_"\r
            style="\r
              fill: none;\r
              stroke: #000000;\r
              stroke-width: 15;\r
              stroke-linecap: round;\r
              stroke-linejoin: round;\r
              stroke-miterlimit: 10;\r
            "\r
            x1="232.572"\r
            y1="224.908"\r
            x2="232.572"\r
            y2="224.805"\r
          />\r
        </g>\r
        <path\r
          style="fill: #f3d730"\r
          d="M342.812,247.3c-0.15,0-0.29,0-0.43-0.02c-23.33-1.19-42.66,17.43-42.66,40.5&#10;&#9;&#9;&#9;&#9;c0,0.7,0.01,1.39,0.05,2.11c0.25,4.93-3.75,8.25-7.89,8.25c-2.06,0-4.13-0.8-5.75-2.61c-6.75-7.46-15.58-11.81-24.76-13.03&#10;&#9;&#9;&#9;&#9;c29.09-14.37,49.1-44.34,49.1-78.98c0-7.61-0.97-14.99-2.78-22.03h33.42c-4.32,6.67-6.48,14.35-6.48,22.02&#10;&#9;&#9;&#9;&#9;c0,11.04,4.47,22.09,13.38,30.14C353.382,238.47,349.882,247.3,342.812,247.3z"\r
        />\r
      </g>\r
      <path\r
        style="\r
          fill: none;\r
          stroke: #000000;\r
          stroke-width: 15;\r
          stroke-linecap: round;\r
          stroke-linejoin: round;\r
          stroke-miterlimit: 10;\r
        "\r
        d="&#10;&#9;&#9;&#9;M341.122,181.49c-4.33,6.67-6.49,14.34-6.49,22.02c0,11.04,4.47,22.08,13.39,30.13c5.36,4.84,1.85,13.65-5.21,13.65&#10;&#9;&#9;&#9;c-0.14,0-0.29,0-0.44-0.01c-23.32-1.19-42.66,17.42-42.66,40.5c0,0.7,0.02,1.4,0.05,2.11c0.26,4.93-3.74,8.24-7.89,8.24&#10;&#9;&#9;&#9;c-2.05,0-4.12-0.79-5.74-2.6c-8.05-8.92-19.1-13.39-30.13-13.39s-22.08,4.47-30.13,13.39c-1.62,1.81-3.69,2.6-5.74,2.6&#10;&#9;&#9;&#9;c-4.15,0-8.15-3.31-7.89-8.24c0.03-0.71,0.04-1.41,0.04-2.11c0-23.08-19.34-41.69-42.65-40.5c-0.15,0.01-0.3,0.01-0.45,0.01&#10;&#9;&#9;&#9;c-7.05,0-10.56-8.81-5.2-13.65c8.92-8.05,13.39-19.09,13.39-30.13c0-7.68-2.16-15.35-6.49-22.02"\r
      />\r
    </g>\r
    <g>\r
      <path\r
        style="\r
          fill: none;\r
          stroke: #000000;\r
          stroke-width: 15;\r
          stroke-linecap: round;\r
          stroke-linejoin: round;\r
          stroke-miterlimit: 10;\r
        "\r
        d="&#10;&#9;&#9;&#9;M208.726,181.49h-84.213c-2.761,0-5,2.239-5,5v139.02c0,2.761,2.239,5,5,5h262.97c2.761,0,5-2.239,5-5V186.49c0-2.761-2.239-5-5-5&#10;&#9;&#9;&#9;H241.888"\r
      />\r
    </g>\r
    <path\r
      style="\r
        fill: none;\r
        stroke: #000000;\r
        stroke-width: 15;\r
        stroke-linecap: round;\r
        stroke-linejoin: round;\r
        stroke-miterlimit: 10;\r
      "\r
      d="&#10;&#9;&#9;M124.512,370.51h125.143c1.706,0,3.295,0.87,4.214,2.308l53.65,83.99c2.126,3.328-0.264,7.692-4.214,7.692H124.512&#10;&#9;&#9;c-2.761,0-5-2.239-5-5v-83.99C119.512,372.749,121.751,370.51,124.512,370.51z"\r
    />\r
    <path\r
      style="\r
        fill: none;\r
        stroke: #000000;\r
        stroke-width: 15;\r
        stroke-linecap: round;\r
        stroke-linejoin: round;\r
        stroke-miterlimit: 10;\r
      "\r
      d="&#10;&#9;&#9;M392.482,397.976V375.51c0-2.761-2.239-5-5-5h-78.73c-3.949,0-6.34,4.363-4.214,7.692l53.65,83.99&#10;&#9;&#9;c0.919,1.438,2.507,2.308,4.214,2.308h25.08c2.761,0,5-2.239,5-5v-28.362"\r
    />\r
    <g>\r
      <g>\r
        <g>\r
          <circle\r
            style="fill: #d8b2ec"\r
            cx="189.8"\r
            cy="381.497"\r
            r="24.709"\r
          />\r
\r
          <circle\r
            style="\r
              fill: none;\r
              stroke: #000000;\r
              stroke-width: 15;\r
              stroke-linecap: round;\r
              stroke-linejoin: round;\r
              stroke-miterlimit: 10;\r
            "\r
            cx="189.8"\r
            cy="381.497"\r
            r="24.709"\r
          />\r
        </g>\r
      </g>\r
    </g>\r
    <g>\r
      <line\r
        id="XMLID_00000028301319025648580530000009457246182494066313_"\r
        style="\r
          fill: none;\r
          stroke: #000000;\r
          stroke-width: 15;\r
          stroke-linecap: round;\r
          stroke-linejoin: round;\r
          stroke-miterlimit: 10;\r
        "\r
        x1="314.674"\r
        y1="108.185"\r
        x2="354.689"\r
        y2="108.075"\r
      />\r
\r
      <line\r
        style="\r
          fill: none;\r
          stroke: #000000;\r
          stroke-width: 15;\r
          stroke-linecap: round;\r
          stroke-linejoin: round;\r
          stroke-miterlimit: 10;\r
        "\r
        x1="333.566"\r
        y1="80.805"\r
        x2="354.689"\r
        y2="80.805"\r
      />\r
    </g>\r
  </g>\r
</svg>\r
`,z5=`<svg\r
  xmlns="http://www.w3.org/2000/svg"\r
  class="icon icon-tabler icon-tabler-category"\r
  width="24"\r
  height="24"\r
  viewBox="0 0 24 24"\r
  stroke-width="2"\r
  stroke="currentColor"\r
  fill="none"\r
  stroke-linecap="round"\r
  stroke-linejoin="round"\r
>\r
  <path\r
    stroke="none"\r
    d="M0 0h24v24H0z"\r
    fill="none"\r
  />\r
  <path d="M4 4h6v6h-6z" />\r
  <path d="M14 4h6v6h-6z" />\r
  <path d="M4 14h6v6h-6z" />\r
  <path d="M17 17m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />\r
</svg>\r
`,D5=`<svg\r
  xmlns="http://www.w3.org/2000/svg"\r
  class="icon icon-tabler icon-tabler-check"\r
  width="24"\r
  height="24"\r
  viewBox="0 0 24 24"\r
  stroke-width="2"\r
  stroke="currentColor"\r
  fill="none"\r
  stroke-linecap="round"\r
  stroke-linejoin="round"\r
>\r
  <path\r
    stroke="none"\r
    d="M0 0h24v24H0z"\r
    fill="none"\r
  />\r
  <path d="M5 12l5 5l10 -10" />\r
</svg>\r
`,N5='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-left"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 6l-6 6l6 6" /></svg>',B5=`<svg\r
  xmlns="http://www.w3.org/2000/svg"\r
  width="24"\r
  height="24"\r
  viewBox="0 0 24 24"\r
  fill="none"\r
  stroke="currentColor"\r
  stroke-width="2"\r
  stroke-linecap="round"\r
  stroke-linejoin="round"\r
  class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right"\r
>\r
  <path\r
    stroke="none"\r
    d="M0 0h24v24H0z"\r
    fill="none"\r
  />\r
  <path d="M9 6l6 6l-6 6" />\r
</svg>\r
`,H5=`<svg\r
  xmlns="http://www.w3.org/2000/svg"\r
  width="24"\r
  height="24"\r
  viewBox="0 0 24 24"\r
  fill="none"\r
  stroke="currentColor"\r
  stroke-width="2"\r
  stroke-linecap="round"\r
  stroke-linejoin="round"\r
  class="icon icon-tabler icons-tabler-outline icon-tabler-circle-check"\r
>\r
  <path\r
    stroke="none"\r
    d="M0 0h24v24H0z"\r
    fill="none"\r
  />\r
  <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />\r
  <path d="M9 12l2 2l4 -4" />\r
</svg>\r
`,F5=`<svg\r
  xmlns="http://www.w3.org/2000/svg"\r
  width="24"\r
  height="24"\r
  viewBox="0 0 24 24"\r
  fill="none"\r
  stroke="currentColor"\r
  stroke-width="2"\r
  stroke-linecap="round"\r
  stroke-linejoin="round"\r
  class="icon icon-tabler icons-tabler-outline icon-tabler-circle-x"\r
>\r
  <path\r
    stroke="none"\r
    d="M0 0h24v24H0z"\r
    fill="none"\r
  />\r
  <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />\r
  <path d="M10 10l4 4m0 -4l-4 4" />\r
</svg>\r
`,G5=`<svg\r
  xmlns="http://www.w3.org/2000/svg"\r
  class="icon icon-tabler icon-tabler-device-floppy"\r
  width="24"\r
  height="24"\r
  viewBox="0 0 24 24"\r
  stroke-width="2"\r
  stroke="currentColor"\r
  fill="none"\r
  stroke-linecap="round"\r
  stroke-linejoin="round"\r
>\r
  <path\r
    stroke="none"\r
    d="M0 0h24v24H0z"\r
    fill="none"\r
  />\r
  <path d="M6 4h10l4 4v10a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2" />\r
  <path d="M12 14m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />\r
  <path d="M14 4l0 4l-6 0l0 -4" />\r
</svg>\r
`,U5=`<svg\r
  xmlns="http://www.w3.org/2000/svg"\r
  width="24"\r
  height="24"\r
  viewBox="0 0 24 24"\r
  fill="none"\r
  stroke="currentColor"\r
  stroke-width="2"\r
  stroke-linecap="round"\r
  stroke-linejoin="round"\r
  class="icon icon-tabler icons-tabler-outline icon-tabler-dots-vertical"\r
>\r
  <path\r
    stroke="none"\r
    d="M0 0h24v24H0z"\r
    fill="none"\r
  />\r
  <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />\r
  <path d="M12 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />\r
  <path d="M12 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />\r
</svg>\r
`,W5=`<svg\r
  id="Capa_1"\r
  enable-background="new 0 0 512 512"\r
  viewBox="0 0 512 512"\r
  xmlns="http://www.w3.org/2000/svg"\r
>\r
  <g>\r
    <g>\r
      <path\r
        d="m369.32 512h-226.64c-45.516 0-82.414-36.898-82.414-82.414v-347.172c0-45.516 36.898-82.414 82.414-82.414h226.64c45.516 0 82.414 36.898 82.414 82.414v347.171c0 45.517-36.898 82.415-82.414 82.415z"\r
        fill="#636978"\r
      />\r
    </g>\r
    <g>\r
      <path\r
        d="m225.095 450.189v-388.378c0-34.137 27.673-61.811 61.81-61.811h-144.225c-45.516 0-82.414 36.898-82.414 82.414v347.171c0 45.516 36.898 82.414 82.414 82.414h144.225c-34.137.001-61.81-27.673-61.81-61.81z"\r
        fill="#555a66"\r
      />\r
    </g>\r
    <g>\r
      <path\r
        d="m369.32 61.811h-226.64c-11.379 0-20.604 9.225-20.604 20.604v336.869c0 11.379 9.225 20.604 20.604 20.604h226.64c11.379 0 20.604-9.225 20.604-20.604v-336.87c0-11.379-9.225-20.603-20.604-20.603z"\r
        fill="#96e8ff"\r
      />\r
    </g>\r
    <g>\r
      <path\r
        d="m122.076 82.414v336.869c0 11.379 9.225 20.604 20.604 20.604h82.414v-378.076h-82.414c-11.379 0-20.604 9.224-20.604 20.603z"\r
        fill="#80dbff"\r
      />\r
    </g>\r
    <g>\r
      <path\r
        d="m256 111.277c-27.66-8.24-55.124-9.125-82.742-2.655-5.835 1.367-9.975 6.555-9.975 12.548v95.771c0 6.566 6.064 11.463 12.479 10.063 23.872-5.21 47.636-4.921 71.52.866 5.731 1.389 11.704 1.389 17.435 0 23.884-5.788 47.648-6.077 71.52-.866 6.415 1.4 12.479-3.497 12.479-10.063 0-40.343 0-55.429 0-95.771 0-5.993-4.139-11.181-9.975-12.548-27.617-6.471-55.081-5.585-82.741 2.655z"\r
        fill="#fff"\r
      />\r
    </g>\r
    <g>\r
      <path\r
        d="m173.258 108.622c-5.835 1.367-9.975 6.555-9.975 12.548v95.771c0 6.566 6.064 11.463 12.479 10.063 23.872-5.21 47.636-4.921 71.52.866 2.866.694 5.791 1.041 8.717 1.041v-117.634c-27.659-8.24-55.123-9.126-82.741-2.655z"\r
        fill="#f5fafc"\r
      />\r
    </g>\r
    <g>\r
      <path\r
        d="m205.037 104.432c-10.584.315-21.171 1.704-31.781 4.19-5.834 1.367-9.973 6.56-9.973 12.552v95.761c0 6.547 6.037 11.478 12.432 10.08 23.888-5.221 47.667-4.935 71.567.856 2.866.694 8.717 1.042 8.717 1.042 0-13.231-13.741-21.854-26.952-27.087-14.54-5.759-24.011-19.905-24.011-35.544v-61.85z"\r
        fill="#e1f1fa"\r
      />\r
    </g>\r
    <g>\r
      <g>\r
        <path\r
          d="m338.414 289.266h-164.829c-4.142 0-7.5-3.357-7.5-7.5s3.358-7.5 7.5-7.5h164.829c4.143 0 7.5 3.357 7.5 7.5s-3.357 7.5-7.5 7.5z"\r
          fill="#19cffc"\r
        />\r
      </g>\r
      <g>\r
        <path\r
          d="m338.414 330.473h-164.829c-4.142 0-7.5-3.357-7.5-7.5s3.358-7.5 7.5-7.5h164.829c4.143 0 7.5 3.357 7.5 7.5s-3.357 7.5-7.5 7.5z"\r
          fill="#19cffc"\r
        />\r
      </g>\r
      <g>\r
        <g>\r
          <path\r
            d="m191.667 385.134c-4.142 0-7.5-3.357-7.5-7.5v-12.362c0-4.143 3.358-7.5 7.5-7.5s7.5 3.357 7.5 7.5v12.362c0 4.142-3.358 7.5-7.5 7.5z"\r
            fill="#495560"\r
          />\r
        </g>\r
        <g>\r
          <path\r
            d="m320.333 385.134c-4.143 0-7.5-3.357-7.5-7.5v-12.362c0-4.143 3.357-7.5 7.5-7.5s7.5 3.357 7.5 7.5v12.362c0 4.142-3.357 7.5-7.5 7.5z"\r
            fill="#495560"\r
          />\r
        </g>\r
        <g>\r
          <path\r
            d="m256 392.493c-8.668 0-16.911-3.754-22.615-10.3-2.721-3.123-2.396-7.86.727-10.582 3.122-2.721 7.86-2.396 10.582.727 2.855 3.276 6.976 5.155 11.307 5.155s8.452-1.879 11.307-5.155c2.723-3.122 7.457-3.447 10.582-.727 3.122 2.722 3.448 7.459.727 10.582-5.706 6.546-13.949 10.3-22.617 10.3z"\r
            fill="#495560"\r
          />\r
        </g>\r
      </g>\r
    </g>\r
  </g>\r
  <g />\r
  <g />\r
  <g />\r
  <g />\r
  <g />\r
  <g />\r
  <g />\r
  <g />\r
  <g />\r
  <g />\r
  <g />\r
  <g />\r
  <g />\r
  <g />\r
  <g />\r
</svg>\r
`,V5=`<svg\r
  version="1.1"\r
  id="Capa_1"\r
  xmlns="http://www.w3.org/2000/svg"\r
  x="0px"\r
  y="0px"\r
  viewBox="0 0 512 512"\r
  style="enable-background: new 0 0 512 512"\r
  xml:space="preserve"\r
>\r
  <g>\r
    <path\r
      style="fill: #636978"\r
      d="M366,504.5H146c-44.183,0-80-35.817-80-80v-337c0-44.183,35.817-80,80-80h220&#10;&#9;&#9;c44.183,0,80,35.817,80,80v337C446,468.683,410.183,504.5,366,504.5z"\r
    />\r
    <path\r
      style="fill: #555a66"\r
      d="M226,444.5v-377c0-33.137,26.863-60,60-60H146c-44.183,0-80,35.817-80,80v337&#10;&#9;&#9;c0,44.183,35.817,80,80,80h140C252.863,504.5,226,477.637,226,444.5z"\r
    />\r
    <path\r
      style="fill: #96e8ff"\r
      d="M366,67.5H146c-11.046,0-20,8.954-20,20v327c0,11.046,8.954,20,20,20h220c11.046,0,20-8.954,20-20&#10;&#9;&#9;v-327C386,76.454,377.046,67.5,366,67.5z"\r
    />\r
    <path\r
      style="fill: #80dbff"\r
      d="M126,87.5v327c0,11.046,8.954,20,20,20h80v-367h-80C134.954,67.5,126,76.454,126,87.5z"\r
    />\r
    <path\r
      style="fill: #ffffff"\r
      d="M256,115.517c-26.85-7.998-53.509-8.858-80.318-2.577c-5.664,1.327-9.682,6.363-9.682,12.18&#10;&#9;&#9;c0,39.161,0,53.805,0,92.965c0,6.374,5.886,11.128,12.113,9.768c23.172-5.058,46.241-4.777,69.425,0.841&#10;&#9;&#9;c5.563,1.348,11.361,1.348,16.924,0c23.184-5.618,46.252-5.898,69.425-0.841c6.227,1.359,12.113-3.395,12.113-9.768&#10;&#9;&#9;c0-39.161,0-53.805,0-92.965c0-5.818-4.018-10.853-9.682-12.18C309.509,106.659,282.85,107.518,256,115.517z"\r
    />\r
    <path\r
      style="fill: #f5fafc"\r
      d="M175.682,112.94c-5.664,1.327-9.682,6.363-9.682,12.18c0,39.161,0,53.805,0,92.965&#10;&#9;&#9;c0,6.374,5.886,11.128,12.113,9.769c23.172-5.058,46.241-4.777,69.425,0.841c2.782,0.674,5.622,1.011,8.462,1.011V115.517&#10;&#9;&#9;C229.15,107.518,202.491,106.659,175.682,112.94z"\r
    />\r
    <path\r
      style="fill: #e1f1fa"\r
      d="M206.53,108.873c-10.274,0.306-20.551,1.654-30.85,4.067c-5.663,1.327-9.681,6.368-9.681,12.184&#10;&#9;&#9;c0,39.155,0,53.801,0,92.955c0,6.355,5.86,11.141,12.068,9.785c23.188-5.068,46.271-4.791,69.47,0.831&#10;&#9;&#9;c2.782,0.674,8.462,1.011,8.462,1.011c0-12.844-13.338-21.214-26.163-26.293c-14.114-5.59-23.307-19.322-23.307-34.502V108.873z"\r
    />\r
    <g>\r
      <path\r
        style="\r
          fill: none;\r
          stroke: #000000;\r
          stroke-width: 15;\r
          stroke-linecap: round;\r
          stroke-linejoin: round;\r
          stroke-miterlimit: 10;\r
        "\r
        d="&#10;&#9;&#9;&#9;M366,504.5H146c-44.183,0-80-35.817-80-80v-337c0-44.183,35.817-80,80-80h220c44.183,0,80,35.817,80,80v337&#10;&#9;&#9;&#9;C446,468.683,410.183,504.5,366,504.5z"\r
      />\r
      <path\r
        style="\r
          fill: none;\r
          stroke: #000000;\r
          stroke-width: 15;\r
          stroke-linecap: round;\r
          stroke-linejoin: round;\r
          stroke-miterlimit: 10;\r
        "\r
        d="&#10;&#9;&#9;&#9;M126,398.01v16.49c0,11.046,8.954,20,20,20h220c11.046,0,20-8.954,20-20v-327c0-11.046-8.954-20-20-20H146&#10;&#9;&#9;&#9;c-11.046,0-20,8.954-20,20v280.51"\r
      />\r
\r
      <line\r
        style="\r
          fill: none;\r
          stroke: #000000;\r
          stroke-width: 15;\r
          stroke-linecap: round;\r
          stroke-linejoin: round;\r
          stroke-miterlimit: 10;\r
        "\r
        x1="176"\r
        y1="281.01"\r
        x2="336"\r
        y2="281.01"\r
      />\r
\r
      <line\r
        style="\r
          fill: none;\r
          stroke: #000000;\r
          stroke-width: 15;\r
          stroke-linecap: round;\r
          stroke-linejoin: round;\r
          stroke-miterlimit: 10;\r
        "\r
        x1="176"\r
        y1="321.01"\r
        x2="336"\r
        y2="321.01"\r
      />\r
      <path\r
        style="\r
          fill: none;\r
          stroke: #000000;\r
          stroke-width: 15;\r
          stroke-linecap: round;\r
          stroke-linejoin: round;\r
          stroke-miterlimit: 10;\r
        "\r
        d="&#10;&#9;&#9;&#9;M286.144,109.53c-10.033,0.992-20.075,2.987-30.144,5.986c-26.85-7.998-53.509-8.858-80.318-2.577&#10;&#9;&#9;&#9;c-5.664,1.327-9.682,6.363-9.682,12.18c0,39.161,0,53.805,0,92.965c0,6.374,5.886,11.128,12.113,9.768&#10;&#9;&#9;&#9;c23.172-5.058,46.241-4.777,69.425,0.841c5.563,1.348,11.361,1.348,16.924,0c23.184-5.618,46.252-5.898,69.425-0.841&#10;&#9;&#9;&#9;c6.227,1.359,12.113-3.395,12.113-9.768c0-39.161,0-53.805,0-92.965c0-5.818-4.018-10.853-9.682-12.18&#10;&#9;&#9;&#9;c-6.702-1.57-13.395-2.694-20.084-3.372"\r
      />\r
\r
      <line\r
        style="\r
          fill: none;\r
          stroke: #000000;\r
          stroke-width: 15;\r
          stroke-linecap: round;\r
          stroke-linejoin: round;\r
          stroke-miterlimit: 10;\r
        "\r
        x1="256"\r
        y1="115.517"\r
        x2="256"\r
        y2="229.706"\r
      />\r
      <g>\r
        <line\r
          style="\r
            fill: none;\r
            stroke: #000000;\r
            stroke-width: 15;\r
            stroke-linecap: round;\r
            stroke-linejoin: round;\r
            stroke-miterlimit: 10;\r
          "\r
          x1="193.551"\r
          y1="362.07"\r
          x2="193.551"\r
          y2="374.07"\r
        />\r
\r
        <line\r
          style="\r
            fill: none;\r
            stroke: #000000;\r
            stroke-width: 15;\r
            stroke-linecap: round;\r
            stroke-linejoin: round;\r
            stroke-miterlimit: 10;\r
          "\r
          x1="318.449"\r
          y1="362.07"\r
          x2="318.449"\r
          y2="374.07"\r
        />\r
        <path\r
          style="\r
            fill: none;\r
            stroke: #000000;\r
            stroke-width: 15;\r
            stroke-linecap: round;\r
            stroke-linejoin: round;\r
            stroke-miterlimit: 10;\r
          "\r
          d="&#10;&#9;&#9;&#9;&#9;M239.536,373.713c4.003,4.594,9.892,7.501,16.464,7.501c6.572,0,12.461-2.907,16.464-7.501"\r
        />\r
      </g>\r
    </g>\r
  </g>\r
  <g></g>\r
  <g></g>\r
  <g></g>\r
  <g></g>\r
  <g></g>\r
  <g></g>\r
  <g></g>\r
  <g></g>\r
  <g></g>\r
  <g></g>\r
  <g></g>\r
  <g></g>\r
  <g></g>\r
  <g></g>\r
  <g></g>\r
</svg>\r
`,Z5=`<svg\r
  id="Capa_1"\r
  enable-background="new 0 0 512 512"\r
  height="512"\r
  viewBox="0 0 512 512"\r
  width="512"\r
  xmlns="http://www.w3.org/2000/svg"\r
>\r
  <g>\r
    <path\r
      d="m449.945 61.818v388.363c0 34.144-27.684 61.818-61.818 61.818h-264.254c-34.134 0-61.818-27.674-61.818-61.818v-388.363c0-34.144 27.684-61.818 61.818-61.818h264.253c34.135 0 61.819 27.674 61.819 61.818z"\r
      fill="#808fa4"\r
    />\r
    <path\r
      d="m188.464 512h-64.59c-34.134 0-61.818-27.674-61.818-61.818v-388.364c-.001-34.144 27.683-61.818 61.817-61.818h50.341c-7.367 6.574-15.218 18.092-15.218 37.359v423.909c.001 0-.215 30.24 29.468 50.732z"\r
      fill="#64768e"\r
    />\r
    <path\r
      d="m418.912 61.942v147.509l-194.274 13.033 77.912-191.451h85.453c17.072 0 30.909 13.837 30.909 30.909z"\r
      fill="#c5ced6"\r
    />\r
    <path\r
      d="m271.516 31.033-46.878 191.451-65.641-6.501-65.909-6.532 20.843-140.421 45.365-37.997z"\r
      fill="#abb6c4"\r
    />\r
    <path\r
      d="m159.296 31.033c-.196 2.009-.299 4.121-.299 6.326v178.624l-65.909-6.532v-147.509c0-17.072 13.837-30.909 30.909-30.909z"\r
      fill="#9ca9ba"\r
    />\r
    <path\r
      d="m313.676 222.484-18.885 196.428h-135.794l-51.732-35.968-14.177-142.46 65.909-5.379z"\r
      fill="#c5ced6"\r
    />\r
    <path\r
      d="m93.088 240.484 65.909-5.378v183.807h-35c-17.072 0-30.909-13.837-30.909-30.909z"\r
      fill="#abb6c4"\r
    />\r
    <path\r
      d="m418.912 240.484v147.519c0 17.072-13.837 30.909-30.909 30.909h-62.19l-12.137-196.428z"\r
      fill="#64768e"\r
    />\r
    <path\r
      d="m287.487 480.971h-62.974c-8.317 0-15.059-6.742-15.059-15.059v-.913c0-8.317 6.742-15.059 15.059-15.059h62.974c8.317 0 15.059 6.742 15.059 15.059v.913c0 8.316-6.743 15.059-15.059 15.059z"\r
      fill="#64768e"\r
    />\r
    <path\r
      d="m418.912 209.451v31.033h-77.644c-8.531 0-15.455 6.924-15.455 15.455v162.974h-31.022v-162.975c0-8.531-6.923-15.455-15.455-15.455h-120.34l-13.147-13.27 13.147-17.763h44.138c6.718 0 12.673-4.348 14.723-10.746l53.658-167.672h31.033l-50.65 158.255c-3.183 9.974 4.255 20.163 14.723 20.163h152.291z"\r
      fill="#e8ecf9"\r
    />\r
    <path\r
      d="m93.088 209.451h65.909v31.033h-65.909z"\r
      fill="#d7ddf5"\r
    />\r
    <g>\r
      <g>\r
        <path\r
          d="m129.509 332.474c-4.268 0-7.727-3.459-7.727-7.727v-12.364c0-4.268 3.459-7.727 7.727-7.727s7.727 3.459 7.727 7.727v12.364c0 4.268-3.459 7.727-7.727 7.727z"\r
          fill="#495560"\r
        />\r
      </g>\r
      <g>\r
        <path\r
          d="m258.191 332.474c-4.268 0-7.727-3.459-7.727-7.727v-12.364c0-4.268 3.459-7.727 7.727-7.727s7.727 3.459 7.727 7.727v12.364c.001 4.268-3.458 7.727-7.727 7.727z"\r
          fill="#495560"\r
        />\r
      </g>\r
      <path\r
        d="m223.825 324.391c-4.268 0-7.727 3.459-7.727 7.727 0 3.952-3.215 7.167-7.166 7.167-3.952 0-7.167-3.215-7.167-7.167 0-4.268-3.459-7.727-7.727-7.727s-7.727 3.459-7.727 7.727c0 3.952-3.215 7.167-7.166 7.167-3.952 0-7.167-3.215-7.167-7.167 0-4.268-3.459-7.727-7.727-7.727s-7.727 3.459-7.727 7.727c0 12.473 10.148 22.621 22.621 22.621 5.7 0 10.911-2.124 14.894-5.616 3.982 3.492 9.193 5.616 14.894 5.616 12.473 0 22.62-10.148 22.62-22.621-.001-4.268-3.46-7.727-7.728-7.727z"\r
        fill="#495560"\r
      />\r
    </g>\r
  </g>\r
</svg>\r
`,j5=`<?xml version="1.0" encoding="UTF-8"?>\r
<svg\r
  xmlns="http://www.w3.org/2000/svg"\r
  version="1.1"\r
  id="Capa_1"\r
  x="0px"\r
  y="0px"\r
  viewBox="0 0 511.941 511.941"\r
  style="enable-background: new 0 0 511.941 511.941"\r
  xml:space="preserve"\r
  width="512"\r
  height="512"\r
>\r
  <g>\r
    <g>\r
      <path\r
        style="fill: #808fa4"\r
        d="M444.211,67.5v376.94c0,33.14-26.87,60-60,60H127.73c-33.13,0-60-26.86-60-60V67.5&#10;&#9;&#9;&#9;c0-33.14,26.87-60,60-60h256.48C417.341,7.5,444.211,34.361,444.211,67.5z"\r
      />\r
      <path\r
        style="fill: #64768e"\r
        d="M190.421,504.44h-62.69c-33.13,0-60-26.86-60-60V67.5c0-33.14,26.87-60,60-60h48.86&#10;&#9;&#9;&#9;c-7.15,6.38-14.77,17.56-14.77,36.26v411.44C161.821,455.201,161.611,484.551,190.421,504.44z"\r
      />\r
      <path\r
        style="fill: #c5ced6"\r
        d="M414.091,67.62v143.17l-188.56,12.65l75.62-185.82h82.94&#10;&#9;&#9;&#9;C400.661,37.62,414.091,51.051,414.091,67.62z"\r
      />\r
      <polygon\r
        style="fill: #abb6c4"\r
        points="271.031,37.62 225.531,223.44 161.821,217.131 97.85,210.79 118.08,74.5 162.111,37.62 &#9;&#9;&#10;&#9;&#9;&#9;"\r
      />\r
      <path\r
        style="fill: #9ca9ba"\r
        d="M162.111,37.62c-0.19,1.95-0.29,4-0.29,6.14v173.37l-63.97-6.34V67.62c0-16.57,13.43-30,30-30&#10;&#9;&#9;&#9;H162.111z"\r
      />\r
      <polygon\r
        style="fill: #c5ced6"\r
        points="311.951,223.44 293.62,414.091 161.821,414.091 111.611,379.181 97.85,240.911 &#10;&#9;&#9;&#9;161.821,235.69 &#9;&#9;"\r
      />\r
      <path\r
        style="fill: #abb6c4"\r
        d="M97.85,240.911l63.97-5.22v178.4h-33.97c-16.57,0-30-13.43-30-30V240.911z"\r
      />\r
      <path\r
        style="fill: #64768e"\r
        d="M414.091,240.911v143.18c0,16.57-13.43,30-30,30h-60.36l-11.78-190.65L414.091,240.911z"\r
      />\r
      <path\r
        style="fill: #64768e"\r
        d="M286.088,474.324h-60.235c-8.317,0-15.059-6.742-15.059-15.059v0&#10;&#9;&#9;&#9;c0-8.317,6.742-15.059,15.059-15.059h60.235c8.317,0,15.059,6.742,15.059,15.059v0&#10;&#9;&#9;&#9;C301.147,467.581,294.405,474.324,286.088,474.324z"\r
      />\r
      <path\r
        style="fill: #e8ecf9"\r
        d="M414.091,210.79v30.12h-75.36c-8.28,0-15,6.72-15,15v158.18h-30.11v-158.18c0-8.28-6.72-15-15-15&#10;&#9;&#9;&#9;h-116.8l-12.76-12.88l12.76-17.24h42.84c6.52,0,12.3-4.22,14.29-10.43l52.08-162.74h30.12l-49.16,153.6&#10;&#9;&#9;&#9;c-3.09,9.68,4.13,19.57,14.29,19.57H414.091z"\r
      />\r
      <rect\r
        x="97.85"\r
        y="210.79"\r
        style="fill: #d7ddf5"\r
        width="63.97"\r
        height="30.12"\r
      />\r
    </g>\r
    <g>\r
      <path\r
        style="\r
          fill: none;\r
          stroke: #000000;\r
          stroke-width: 15;\r
          stroke-linecap: round;\r
          stroke-linejoin: round;\r
          stroke-miterlimit: 10;\r
        "\r
        d="&#10;&#9;&#9;&#9;M384.206,504.441H127.735c-33.137,0-60-26.863-60-60V67.5c0-33.137,26.863-60,60-60h256.471c33.137,0,60,26.863,60,60v376.941&#10;&#9;&#9;&#9;C444.206,477.578,417.343,504.441,384.206,504.441z"\r
      />\r
      <path\r
        style="\r
          fill: none;\r
          stroke: #000000;\r
          stroke-width: 15;\r
          stroke-linecap: round;\r
          stroke-linejoin: round;\r
          stroke-miterlimit: 10;\r
        "\r
        d="&#10;&#9;&#9;&#9;M384.088,414.088H127.853c-16.569,0-30-13.431-30-30V67.618c0-16.569,13.431-30,30-30h256.235c16.569,0,30,13.431,30,30v316.471&#10;&#9;&#9;&#9;C414.088,400.657,400.657,414.088,384.088,414.088z"\r
      />\r
      <path\r
        style="\r
          fill: none;\r
          stroke: #000000;\r
          stroke-width: 15;\r
          stroke-linecap: round;\r
          stroke-linejoin: round;\r
          stroke-miterlimit: 10;\r
        "\r
        d="&#10;&#9;&#9;&#9;M286.088,474.324h-60.235c-8.317,0-15.059-6.742-15.059-15.059c0-8.317,6.742-15.059,15.059-15.059h60.235&#10;&#9;&#9;&#9;c8.317,0,15.059,6.742,15.059,15.059C301.147,467.581,294.405,474.324,286.088,474.324z"\r
      />\r
      <path\r
        style="\r
          fill: none;\r
          stroke: #000000;\r
          stroke-width: 15;\r
          stroke-linecap: round;\r
          stroke-linejoin: round;\r
          stroke-miterlimit: 10;\r
        "\r
        d="&#10;&#9;&#9;&#9;M100.85,210.79h103.811c6.523,0,12.298-4.215,14.286-10.428L270.56,39.09"\r
      />\r
      <path\r
        style="\r
          fill: none;\r
          stroke: #000000;\r
          stroke-width: 15;\r
          stroke-linecap: round;\r
          stroke-linejoin: round;\r
          stroke-miterlimit: 10;\r
        "\r
        d="&#10;&#9;&#9;&#9;M293.62,410.091v-154.18c0-8.284-6.716-15-15-15H100.85"\r
      />\r
      <path\r
        style="\r
          fill: none;\r
          stroke: #000000;\r
          stroke-width: 15;\r
          stroke-linecap: round;\r
          stroke-linejoin: round;\r
          stroke-miterlimit: 10;\r
        "\r
        d="&#10;&#9;&#9;&#9;M411.091,240.911h-72.36c-8.284,0-15,6.716-15,15v154.18"\r
      />\r
      <path\r
        style="\r
          fill: none;\r
          stroke: #000000;\r
          stroke-width: 15;\r
          stroke-linecap: round;\r
          stroke-linejoin: round;\r
          stroke-miterlimit: 10;\r
        "\r
        d="&#10;&#9;&#9;&#9;M300.616,39.291l-48.622,151.927c-3.098,9.679,4.124,19.572,14.286,19.572h144.81"\r
      />\r
      <g>\r
        <line\r
          style="\r
            fill: none;\r
            stroke: #000000;\r
            stroke-width: 15;\r
            stroke-linecap: round;\r
            stroke-linejoin: round;\r
            stroke-miterlimit: 10;\r
          "\r
          x1="133.2"\r
          y1="310.695"\r
          x2="133.2"\r
          y2="322.695"\r
        />\r
\r
        <line\r
          style="\r
            fill: none;\r
            stroke: #000000;\r
            stroke-width: 15;\r
            stroke-linecap: round;\r
            stroke-linejoin: round;\r
            stroke-miterlimit: 10;\r
          "\r
          x1="258.098"\r
          y1="310.695"\r
          x2="258.098"\r
          y2="322.695"\r
        />\r
        <g>\r
          <path\r
            style="\r
              fill: none;\r
              stroke: #000000;\r
              stroke-width: 15;\r
              stroke-linecap: round;\r
              stroke-miterlimit: 10;\r
            "\r
            d="M195.831,329.85&#10;&#9;&#9;&#9;&#9;&#9;c0,7.984-6.472,14.456-14.456,14.456s-14.456-6.472-14.456-14.456"\r
          />\r
          <path\r
            style="\r
              fill: none;\r
              stroke: #000000;\r
              stroke-width: 15;\r
              stroke-linecap: round;\r
              stroke-miterlimit: 10;\r
            "\r
            d="M224.742,329.85&#10;&#9;&#9;&#9;&#9;&#9;c0,7.984-6.472,14.456-14.456,14.456s-14.456-6.472-14.456-14.456"\r
          />\r
        </g>\r
      </g>\r
    </g>\r
  </g>\r
</svg>\r
`,q5=`<svg\r
  xmlns="http://www.w3.org/2000/svg"\r
  class="icon icon-tabler icon-tabler-external-link"\r
  width="24"\r
  height="24"\r
  viewBox="0 0 24 24"\r
  stroke-width="2"\r
  stroke="currentColor"\r
  fill="none"\r
  stroke-linecap="round"\r
  stroke-linejoin="round"\r
>\r
  <path\r
    stroke="none"\r
    d="M0 0h24v24H0z"\r
    fill="none"\r
  />\r
  <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6" />\r
  <path d="M11 13l9 -9" />\r
  <path d="M15 4h5v5" />\r
</svg>\r
`,K5=`<svg\r
  xmlns="http://www.w3.org/2000/svg"\r
  class="icon icon-tabler icon-tabler-eye"\r
  width="24"\r
  height="24"\r
  viewBox="0 0 24 24"\r
  stroke-width="2"\r
  stroke="currentColor"\r
  fill="none"\r
  stroke-linecap="round"\r
  stroke-linejoin="round"\r
>\r
  <path\r
    stroke="none"\r
    d="M0 0h24v24H0z"\r
    fill="none"\r
  />\r
  <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />\r
  <path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" />\r
</svg>\r
`,Y5=`<svg\r
  xmlns="http://www.w3.org/2000/svg"\r
  class="icon icon-tabler icon-tabler-eye-off"\r
  width="24"\r
  height="24"\r
  viewBox="0 0 24 24"\r
  stroke-width="2"\r
  stroke="currentColor"\r
  fill="none"\r
  stroke-linecap="round"\r
  stroke-linejoin="round"\r
>\r
  <path\r
    stroke="none"\r
    d="M0 0h24v24H0z"\r
    fill="none"\r
  />\r
  <path d="M10.585 10.587a2 2 0 0 0 2.829 2.828" />\r
  <path\r
    d="M16.681 16.673a8.717 8.717 0 0 1 -4.681 1.327c-3.6 0 -6.6 -2 -9 -6c1.272 -2.12 2.712 -3.678 4.32 -4.674m2.86 -1.146a9.055 9.055 0 0 1 1.82 -.18c3.6 0 6.6 2 9 6c-.666 1.11 -1.379 2.067 -2.138 2.87"\r
  />\r
  <path d="M3 3l18 18" />\r
</svg>\r
`,X5=`<svg\r
  xmlns="http://www.w3.org/2000/svg"\r
  class="icon icon-tabler icon-tabler-file-download"\r
  width="24"\r
  height="24"\r
  viewBox="0 0 24 24"\r
  stroke-width="2"\r
  stroke="currentColor"\r
  fill="none"\r
  stroke-linecap="round"\r
  stroke-linejoin="round"\r
>\r
  <path\r
    stroke="none"\r
    d="M0 0h24v24H0z"\r
    fill="none"\r
  />\r
  <path d="M14 3v4a1 1 0 0 0 1 1h4" />\r
  <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />\r
  <path d="M12 17v-6" />\r
  <path d="M9.5 14.5l2.5 2.5l2.5 -2.5" />\r
</svg>\r
`,J5=`<svg\r
  xmlns="http://www.w3.org/2000/svg"\r
  width="24"\r
  height="24"\r
  viewBox="0 0 24 24"\r
  fill="none"\r
  stroke="currentColor"\r
  stroke-width="2"\r
  stroke-linecap="round"\r
  stroke-linejoin="round"\r
  class="icon icon-tabler icons-tabler-outline icon-tabler-file-percent"\r
>\r
  <path\r
    stroke="none"\r
    d="M0 0h24v24H0z"\r
    fill="none"\r
  />\r
  <path d="M10 17l4 -4" />\r
  <path d="M14 3v4a1 1 0 0 0 1 1h4" />\r
  <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />\r
  <path d="M10 13h.01" />\r
  <path d="M14 17h.01" />\r
</svg>\r
`,Q5=`<svg\r
  xmlns="http://www.w3.org/2000/svg"\r
  width="24"\r
  height="24"\r
  viewBox="0 0 24 24"\r
  fill="none"\r
  stroke="currentColor"\r
  stroke-width="2"\r
  stroke-linecap="round"\r
  stroke-linejoin="round"\r
  class="icon icon-tabler icons-tabler-outline icon-tabler-hand-click"\r
>\r
  <path\r
    stroke="none"\r
    d="M0 0h24v24H0z"\r
    fill="none"\r
  />\r
  <path d="M8 13v-8.5a1.5 1.5 0 0 1 3 0v7.5" />\r
  <path d="M11 11.5v-2a1.5 1.5 0 0 1 3 0v2.5" />\r
  <path d="M14 10.5a1.5 1.5 0 0 1 3 0v1.5" />\r
  <path\r
    d="M17 11.5a1.5 1.5 0 0 1 3 0v4.5a6 6 0 0 1 -6 6h-2h.208a6 6 0 0 1 -5.012 -2.7l-.196 -.3c-.312 -.479 -1.407 -2.388 -3.286 -5.728a1.5 1.5 0 0 1 .536 -2.022a1.867 1.867 0 0 1 2.28 .28l1.47 1.47"\r
  />\r
  <path d="M5 3l-1 -1" />\r
  <path d="M4 7h-1" />\r
  <path d="M14 3l1 -1" />\r
  <path d="M15 6h1" />\r
</svg>\r
`,ev=`<svg\r
  xmlns="http://www.w3.org/2000/svg"\r
  width="24"\r
  height="24"\r
  viewBox="0 0 24 24"\r
  fill="none"\r
  stroke="currentColor"\r
  stroke-width="2"\r
  stroke-linecap="round"\r
  stroke-linejoin="round"\r
  class="icon icon-tabler icons-tabler-outline icon-tabler-help"\r
>\r
  <path\r
    stroke="none"\r
    d="M0 0h24v24H0z"\r
    fill="none"\r
  />\r
  <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />\r
  <path d="M12 17l0 .01" />\r
  <path d="M12 13.5a1.5 1.5 0 0 1 1 -1.5a2.6 2.6 0 1 0 -3 -4" />\r
</svg>\r
`,tv=`<svg\r
  xmlns="http://www.w3.org/2000/svg"\r
  width="24"\r
  height="24"\r
  viewBox="0 0 24 24"\r
  fill="none"\r
  stroke="currentColor"\r
  stroke-width="2"\r
  stroke-linecap="round"\r
  stroke-linejoin="round"\r
  class="icon icon-tabler icons-tabler-outline icon-tabler-info-circle"\r
>\r
  <path\r
    stroke="none"\r
    d="M0 0h24v24H0z"\r
    fill="none"\r
  />\r
  <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />\r
  <path d="M12 9h.01" />\r
  <path d="M11 12h1v4h1" />\r
</svg>\r
`,nv=`<svg\r
  xmlns="http://www.w3.org/2000/svg"\r
  class="icon icon-tabler icon-tabler-keyboard"\r
  width="24"\r
  height="24"\r
  viewBox="0 0 24 24"\r
  stroke-width="2"\r
  stroke="currentColor"\r
  fill="none"\r
  stroke-linecap="round"\r
  stroke-linejoin="round"\r
>\r
  <path\r
    stroke="none"\r
    d="M0 0h24v24H0z"\r
    fill="none"\r
  />\r
  <path d="M2 6m0 2a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-16a2 2 0 0 1 -2 -2z" />\r
  <path d="M6 10l0 .01" />\r
  <path d="M10 10l0 .01" />\r
  <path d="M14 10l0 .01" />\r
  <path d="M18 10l0 .01" />\r
  <path d="M6 14l0 .01" />\r
  <path d="M18 14l0 .01" />\r
  <path d="M10 14l4 .01" />\r
</svg>\r
`,rv=`<svg\r
  xmlns="http://www.w3.org/2000/svg"\r
  width="24"\r
  height="24"\r
  viewBox="0 0 24 24"\r
  fill="none"\r
  stroke="currentColor"\r
  stroke-width="2"\r
  stroke-linecap="round"\r
  stroke-linejoin="round"\r
  class="icon icon-tabler icons-tabler-outline icon-tabler-layout-bottombar"\r
>\r
  <path\r
    stroke="none"\r
    d="M0 0h24v24H0z"\r
    fill="none"\r
  />\r
  <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />\r
  <path d="M4 15l16 0" />\r
</svg>\r
`,iv=`<svg\r
  xmlns="http://www.w3.org/2000/svg"\r
  width="24"\r
  height="24"\r
  viewBox="0 0 24 24"\r
  fill="none"\r
  stroke="currentColor"\r
  stroke-width="2"\r
  stroke-linecap="round"\r
  stroke-linejoin="round"\r
  class="icon icon-tabler icons-tabler-outline icon-tabler-layout-bottombar-inactive"\r
>\r
  <path\r
    stroke="none"\r
    d="M0 0h24v24H0z"\r
    fill="none"\r
  />\r
  <path d="M4 6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z" />\r
  <path d="M4 15h1" />\r
  <path d="M19 15h1" />\r
  <path d="M9 15h1" />\r
  <path d="M14 15h1" />\r
</svg>\r
`,ov=`<svg\r
  xmlns="http://www.w3.org/2000/svg"\r
  width="24"\r
  height="24"\r
  viewBox="0 0 24 24"\r
  fill="none"\r
  stroke="currentColor"\r
  stroke-width="2"\r
  stroke-linecap="round"\r
  stroke-linejoin="round"\r
  class="icon icon-tabler icons-tabler-outline icon-tabler-layout-sidebar"\r
>\r
  <path\r
    stroke="none"\r
    d="M0 0h24v24H0z"\r
    fill="none"\r
  />\r
  <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />\r
  <path d="M9 4l0 16" />\r
</svg>\r
`,av=`<svg\r
  xmlns="http://www.w3.org/2000/svg"\r
  width="24"\r
  height="24"\r
  viewBox="0 0 24 24"\r
  fill="none"\r
  stroke="currentColor"\r
  stroke-width="2"\r
  stroke-linecap="round"\r
  stroke-linejoin="round"\r
  class="icon icon-tabler icons-tabler-outline icon-tabler-layout-sidebar-inactive"\r
>\r
  <path\r
    stroke="none"\r
    d="M0 0h24v24H0z"\r
    fill="none"\r
  />\r
  <path d="M4 6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z" />\r
  <path d="M9 4v1" />\r
  <path d="M9 9v1" />\r
  <path d="M9 14v1" />\r
  <path d="M9 19v1" />\r
</svg>\r
`,sv=`<svg\r
  xmlns="http://www.w3.org/2000/svg"\r
  width="24"\r
  height="24"\r
  viewBox="0 0 24 24"\r
  fill="none"\r
  stroke="currentColor"\r
  stroke-width="2"\r
  stroke-linecap="round"\r
  stroke-linejoin="round"\r
  class="icon icon-tabler icons-tabler-outline icon-tabler-layout-sidebar-right"\r
>\r
  <path\r
    stroke="none"\r
    d="M0 0h24v24H0z"\r
    fill="none"\r
  />\r
  <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />\r
  <path d="M15 4l0 16" />\r
</svg>\r
`,lv=`<svg\r
  xmlns="http://www.w3.org/2000/svg"\r
  width="24"\r
  height="24"\r
  viewBox="0 0 24 24"\r
  fill="none"\r
  stroke="currentColor"\r
  stroke-width="2"\r
  stroke-linecap="round"\r
  stroke-linejoin="round"\r
  class="icon icon-tabler icons-tabler-outline icon-tabler-layout-sidebar-right-inactive"\r
>\r
  <path\r
    stroke="none"\r
    d="M0 0h24v24H0z"\r
    fill="none"\r
  />\r
  <path d="M4 6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z" />\r
  <path d="M15 4v1" />\r
  <path d="M15 9v1" />\r
  <path d="M15 14v1" />\r
  <path d="M15 19v1" />\r
</svg>\r
`,cv=`<svg\r
  xmlns="http://www.w3.org/2000/svg"\r
  class="icon icon-tabler icon-tabler-list-numbers"\r
  width="24"\r
  height="24"\r
  viewBox="0 0 24 24"\r
  stroke-width="2"\r
  stroke="currentColor"\r
  fill="none"\r
  stroke-linecap="round"\r
  stroke-linejoin="round"\r
>\r
  <path\r
    stroke="none"\r
    d="M0 0h24v24H0z"\r
    fill="none"\r
  />\r
  <path d="M11 6h9" />\r
  <path d="M11 12h9" />\r
  <path d="M12 18h8" />\r
  <path d="M4 16a2 2 0 1 1 4 0c0 .591 -.5 1 -1 1.5l-3 2.5h4" />\r
  <path d="M6 10v-6l-2 2" />\r
</svg>\r
`,uv=`<svg\r
  xmlns="http://www.w3.org/2000/svg"\r
  class="icon icon-tabler icon-tabler-loader-2"\r
  width="24"\r
  height="24"\r
  viewBox="0 0 24 24"\r
  stroke-width="2"\r
  stroke="currentColor"\r
  fill="none"\r
  stroke-linecap="round"\r
  stroke-linejoin="round"\r
>\r
  <path\r
    stroke="none"\r
    d="M0 0h24v24H0z"\r
    fill="none"\r
  />\r
  <path d="M12 3a9 9 0 1 0 9 9" />\r
</svg>\r
`,dv=`<svg\r
  xmlns="http://www.w3.org/2000/svg"\r
  width="24"\r
  height="24"\r
  viewBox="0 0 24 24"\r
  fill="none"\r
  stroke="currentColor"\r
  stroke-width="2"\r
  stroke-linecap="round"\r
  stroke-linejoin="round"\r
  class="icon icon-tabler icons-tabler-outline icon-tabler-location-cog"\r
>\r
  <path\r
    stroke="none"\r
    d="M0 0h24v24H0z"\r
    fill="none"\r
  />\r
  <path d="M12 18l-2 -4l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5l-3.14 8.697" />\r
  <path d="M19.001 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />\r
  <path d="M19.001 15.5v1.5" />\r
  <path d="M19.001 21v1.5" />\r
  <path d="M22.032 17.25l-1.299 .75" />\r
  <path d="M17.27 20l-1.3 .75" />\r
  <path d="M15.97 17.25l1.3 .75" />\r
  <path d="M20.733 20l1.3 .75" />\r
</svg>\r
`,hv=`<svg\r
  xmlns="http://www.w3.org/2000/svg"\r
  class="icon icon-tabler icon-tabler-menu-2"\r
  width="24"\r
  height="24"\r
  viewBox="0 0 24 24"\r
  stroke-width="2"\r
  stroke="currentColor"\r
  fill="none"\r
  stroke-linecap="round"\r
  stroke-linejoin="round"\r
>\r
  <path\r
    stroke="none"\r
    d="M0 0h24v24H0z"\r
    fill="none"\r
  />\r
  <path d="M4 6l16 0" />\r
  <path d="M4 12l16 0" />\r
  <path d="M4 18l16 0" />\r
</svg>\r
`,fv=`<svg\r
  xmlns="http://www.w3.org/2000/svg"\r
  width="24"\r
  height="24"\r
  viewBox="0 0 24 24"\r
  fill="none"\r
  stroke="currentColor"\r
  stroke-width="2"\r
  stroke-linecap="round"\r
  stroke-linejoin="round"\r
  class="icon icon-tabler icons-tabler-outline icon-tabler-menu-deep"\r
>\r
  <path\r
    stroke="none"\r
    d="M0 0h24v24H0z"\r
    fill="none"\r
  />\r
  <path d="M4 6h16" />\r
  <path d="M7 12h13" />\r
  <path d="M10 18h10" />\r
</svg>\r
`,pv=`<svg\r
  xmlns="http://www.w3.org/2000/svg"\r
  class="icon icon-tabler icon-tabler-message"\r
  width="24"\r
  height="24"\r
  viewBox="0 0 24 24"\r
  stroke-width="2"\r
  stroke="currentColor"\r
  fill="none"\r
  stroke-linecap="round"\r
  stroke-linejoin="round"\r
>\r
  <path\r
    stroke="none"\r
    d="M0 0h24v24H0z"\r
    fill="none"\r
  />\r
  <path d="M8 9h8" />\r
  <path d="M8 13h6" />\r
  <path\r
    d="M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-5l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12z"\r
  />\r
</svg>\r
`,gv=`<svg\r
  xmlns="http://www.w3.org/2000/svg"\r
  class="icon icon-tabler icon-tabler-moon"\r
  width="24"\r
  height="24"\r
  viewBox="0 0 24 24"\r
  stroke-width="2"\r
  stroke="currentColor"\r
  fill="none"\r
  stroke-linecap="round"\r
  stroke-linejoin="round"\r
>\r
  <path\r
    stroke="none"\r
    d="M0 0h24v24H0z"\r
    fill="none"\r
  />\r
  <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" />\r
</svg>\r
`,mv=`<svg\r
  id="Capa_1"\r
  enable-background="new 0 0 512 512"\r
  height="512"\r
  viewBox="0 0 512 512"\r
  width="512"\r
  xmlns="http://www.w3.org/2000/svg"\r
>\r
  <g>\r
    <path\r
      d="m449.945 61.818v388.363c0 34.144-27.684 61.818-61.818 61.818h-264.253c-34.134 0-61.818-27.674-61.818-61.818v-388.363c-.001-34.144 27.684-61.818 61.818-61.818h264.253c34.133 0 61.818 27.674 61.818 61.818z"\r
      fill="#e8ecf9"\r
    />\r
    <path\r
      d="m207.555 512h-83.681c-34.134 0-61.818-27.674-61.818-61.818v-388.364c-.001-34.144 27.684-61.818 61.818-61.818h79.993c-11.292 3.421-26.809 12.446-26.809 36.256v436.87c0 26.479 19.854 35.783 30.497 38.874z"\r
      fill="#d7ddf5"\r
    />\r
    <path\r
      d="m403.396 62.004v139.751c0 8.541-6.924 15.455-15.455 15.455h-210.883l-51.556-21.729v-124.699l51.556-24.233h210.883c8.531 0 15.455 6.913 15.455 15.455z"\r
      fill="#c5ced6"\r
    />\r
    <path\r
      d="m177.058 46.549v170.66h-52.999c-8.531 0-15.455-6.913-15.455-15.455v-139.75c0-8.541 6.924-15.455 15.455-15.455z"\r
      fill="#abb6c4"\r
    />\r
    <path\r
      d="m217.209 279.213v8.036l-40.151 41.769-8.809 9.17-59.644 4.307 12.333-53.195 56.121-25.541h24.696c8.541-.001 15.454 6.923 15.454 15.454z"\r
      fill="#c5ced6"\r
    />\r
    <path\r
      d="m124.059 263.758h52.999v65.26l-8.809 9.17-59.644 4.307v-63.281c-.001-8.532 6.923-15.456 15.454-15.456z"\r
      fill="#abb6c4"\r
    />\r
    <path\r
      d="m217.209 334.365v60.407l-40.151 43.438-4.204 4.543-64.25-8.634 8.573-21.379-8.573-26.551 50.743-51.824z"\r
      fill="#c5ced6"\r
    />\r
    <path\r
      d="m177.058 334.365v103.845l-4.204 4.543-64.25-8.634v-47.93l50.743-51.824z"\r
      fill="#abb6c4"\r
    />\r
    <path\r
      d="m217.209 287.249v47.116c-2.823 1.731-5.121 4.368-6.388 7.696-2.359 6.182-8.253 9.984-14.496 9.984-1.844 0-3.719-.33-5.543-1.03-.546-.206-1.092-.381-1.638-.525-1.298-.34-2.596-.505-3.895-.505-2.916 0-5.749.824-8.191 2.339l-11.045-14.888 11.045-32.29c1.03.165 2.061.433 3.07.824.587.227 1.175.412 1.772.556 1.247.319 2.514.474 3.771.474 6.244 0 12.137-3.802 14.496-9.984.082-.206.165-.412.258-.608 2.493-5.821 8.191-9.376 14.239-9.376.845.001 1.69.073 2.545.217z"\r
      fill="#808fa4"\r
    />\r
    <path\r
      d="m177.058 305.146v47.178c-2.782 1.731-5.049 4.348-6.305 7.645-.196.505-.402.989-.649 1.453-2.669 5.316-8.108 8.521-13.847 8.521-.309 0-.618-.01-.927-.031-1.535-.093-3.091-.412-4.605-.999-1.824-.701-3.699-1.03-5.543-1.03-6.244 0-12.137 3.802-14.496 9.984s-8.242 9.984-14.496 9.984c-1.834 0-3.709-.33-5.533-1.03-.68-.258-1.36-.474-2.05-.628v-43.695c5.038-1.02 9.458-4.523 11.426-9.674 2.359-6.182 8.253-9.984 14.496-9.984 1.844 0 3.709.33 5.533 1.03 1.824.701 3.709 1.03 5.553 1.03 1.113 0 2.226-.124 3.297-.361 2.895-.629 5.574-2.081 7.686-4.193 1.494-1.494 2.699-3.318 3.503-5.419 2.359-6.182 8.242-9.984 14.496-9.984.813-.003 1.637.058 2.461.203z"\r
      fill="#64768e"\r
    />\r
    <path\r
      d="m217.209 394.772v55.224c0 8.541-6.913 15.455-15.455 15.455h-24.696l-15.516-24.284 15.516-28.426c1.885-1.618 3.4-3.719 4.348-6.202 2.359-6.172 8.253-9.973 14.496-9.973 1.844 0 3.719.33 5.543 1.03 1.824.701 3.689 1.03 5.533 1.03 1.175 0 2.349-.134 3.472-.402h.01c2.494-.578 4.822-1.762 6.749-3.452z"\r
      fill="#808fa4"\r
    />\r
    <path\r
      d="m166.91 416.522c3.74 0 7.346-1.36 10.148-3.781v52.71h-52.999c-8.531 0-15.455-6.913-15.455-15.455v-15.877c3.802-1.968 8.397-2.37 12.704-.721 1.824.701 3.699 1.03 5.543 1.03 6.244 0 12.137-3.802 14.496-9.984s8.242-9.984 14.496-9.984c1.834 0 3.709.33 5.533 1.03 1.824.702 3.7 1.032 5.534 1.032z"\r
      fill="#64768e"\r
    />\r
    <path\r
      d="m403.396 351.612v98.384c0 8.541-6.924 15.455-15.455 15.455h-69.051l-55.132-93.686v-92.552c0-8.531 6.924-15.455 15.455-15.455h62.91z"\r
      fill="#808fa4"\r
    />\r
    <path\r
      d="m380.121 333.572-61.231 131.879h-39.677c-8.531 0-15.455-6.913-15.455-15.455v-78.231l77.572-53.699z"\r
      fill="#abb6c4"\r
    />\r
    <path\r
      d="m403.396 279.213v72.4c-7.058 3.359-14.95 5.234-23.275 5.234-3.534 0-6.996-.34-10.344-.989-17.34-3.338-31.744-14.929-38.956-30.518-3.215-6.924-5.007-14.651-5.007-22.79 0-15.197 6.244-28.941 16.31-38.791h45.818c8.53-.001 15.454 6.923 15.454 15.454z"\r
      fill="#c5ced6"\r
    />\r
    <g>\r
      <g>\r
        <ellipse\r
          cx="172.744"\r
          cy="147.233"\r
          fill="#fff"\r
          rx="30.72"\r
          ry="24.464"\r
        />\r
        <ellipse\r
          cx="339.256"\r
          cy="147.233"\r
          fill="#fff"\r
          rx="30.72"\r
          ry="24.464"\r
        />\r
        <path\r
          d="m285.787 117.781c-4.268 0-7.727 3.46-7.727 7.727 0 3.952-3.215 7.166-7.166 7.166s-7.166-3.215-7.166-7.166c0-4.268-3.46-7.727-7.727-7.727-4.268 0-7.727 3.46-7.727 7.727 0 3.952-3.215 7.166-7.166 7.166-3.952 0-7.166-3.215-7.166-7.166 0-4.268-3.46-7.727-7.727-7.727-4.268 0-7.727 3.46-7.727 7.727 0 12.473 10.148 22.621 22.621 22.621 5.701 0 10.911-2.124 14.894-5.616 3.982 3.492 9.193 5.616 14.894 5.616 12.473 0 22.621-10.148 22.621-22.621-.003-4.267-3.463-7.727-7.731-7.727z"\r
          fill="#495560"\r
        />\r
      </g>\r
      <g>\r
        <path\r
          d="m206.795 121.062c-4.268 0-7.727-3.46-7.727-7.727 0-3.559-2.896-6.454-6.455-6.454s-6.455 2.895-6.455 6.454c0 4.268-3.46 7.727-7.727 7.727-4.268 0-7.727-3.46-7.727-7.727 0-12.081 9.829-21.909 21.91-21.909s21.91 9.828 21.91 21.909c-.001 4.267-3.461 7.727-7.729 7.727z"\r
          fill="#495560"\r
        />\r
      </g>\r
      <g>\r
        <path\r
          d="m333.569 121.062c-4.268 0-7.727-3.46-7.727-7.727 0-3.559-2.896-6.454-6.455-6.454s-6.455 2.895-6.455 6.454c0 4.268-3.46 7.727-7.727 7.727-4.268 0-7.727-3.46-7.727-7.727 0-12.081 9.829-21.909 21.91-21.909s21.91 9.828 21.91 21.909c-.001 4.267-3.461 7.727-7.729 7.727z"\r
          fill="#495560"\r
        />\r
      </g>\r
    </g>\r
  </g>\r
</svg>\r
`,vv=`<?xml version="1.0" encoding="UTF-8"?>\r
<svg\r
  xmlns="http://www.w3.org/2000/svg"\r
  version="1.1"\r
  id="Capa_1"\r
  x="0px"\r
  y="0px"\r
  viewBox="0 0 511.94 511.94"\r
  style="enable-background: new 0 0 511.94 511.94"\r
  xml:space="preserve"\r
  width="512"\r
  height="512"\r
>\r
  <g>\r
    <g>\r
      <path\r
        style="fill: #e8ecf9"\r
        d="M444.21,67.5v376.94c0,33.14-26.87,60-60,60H127.73c-33.13,0-60-26.86-60-60V67.5&#10;&#9;&#9;&#9;c0-33.14,26.87-60,60-60h256.48C417.34,7.5,444.21,34.36,444.21,67.5z"\r
      />\r
      <path\r
        style="fill: #d7ddf5"\r
        d="M208.95,504.44h-81.22c-33.13,0-60-26.86-60-60V67.5c0-33.14,26.87-60,60-60h77.64&#10;&#9;&#9;&#9;c-10.96,3.32-26.02,12.08-26.02,35.19v424.02C179.35,492.41,198.62,501.44,208.95,504.44z"\r
      />\r
      <path\r
        style="fill: #c5ced6"\r
        d="M399.03,67.68v135.64c0,8.29-6.72,15-15,15H179.35l-50.04-21.09V76.2l50.04-23.52h204.68&#10;&#9;&#9;&#9;C392.31,52.68,399.03,59.39,399.03,67.68z"\r
      />\r
      <path\r
        style="fill: #abb6c4"\r
        d="M179.35,52.68v165.64h-51.44c-8.28,0-15-6.71-15-15V67.68c0-8.29,6.72-15,15-15H179.35z"\r
      />\r
      <path\r
        style="fill: #c5ced6"\r
        d="M218.32,278.5v7.8l-38.97,40.54l-8.55,8.9l-57.89,4.18l11.97-51.63l54.47-24.79h23.97&#10;&#9;&#9;&#9;C211.61,263.5,218.32,270.22,218.32,278.5z"\r
      />\r
      <path\r
        style="fill: #abb6c4"\r
        d="M127.91,263.5h51.44v63.34l-8.55,8.9l-57.89,4.18V278.5C112.91,270.22,119.63,263.5,127.91,263.5z"\r
      />\r
      <polygon\r
        style="fill: #c5ced6"\r
        points="218.32,332.03 218.32,390.66 179.35,432.82 175.27,437.23 112.91,428.85 121.23,408.1 &#10;&#9;&#9;&#9;112.91,382.33 162.16,332.03 &#9;&#9;"\r
      />\r
      <polygon\r
        style="fill: #abb6c4"\r
        points="179.35,332.03 179.35,432.82 175.27,437.23 112.91,428.85 112.91,382.33 162.16,332.03 &#9;&#9;&#10;&#9;&#9;&#9;"\r
      />\r
      <path\r
        style="fill: #808fa4"\r
        d="M218.32,286.3v45.73c-2.74,1.68-4.97,4.24-6.2,7.47c-2.29,6-8.01,9.69-14.07,9.69&#10;&#9;&#9;&#9;c-1.79,0-3.61-0.32-5.38-1c-0.53-0.2-1.06-0.37-1.59-0.51c-1.26-0.33-2.52-0.49-3.78-0.49c-2.83,0-5.58,0.8-7.95,2.27&#10;&#9;&#9;&#9;l-10.72-14.45l10.72-31.34c1,0.16,2,0.42,2.98,0.8c0.57,0.22,1.14,0.4,1.72,0.54c1.21,0.31,2.44,0.46,3.66,0.46&#10;&#9;&#9;&#9;c6.06,0,11.78-3.69,14.07-9.69c0.08-0.2,0.16-0.4,0.25-0.59c2.42-5.65,7.95-9.1,13.82-9.1&#10;&#9;&#9;&#9;C216.67,286.09,217.49,286.16,218.32,286.3z"\r
      />\r
      <path\r
        style="fill: #64768e"\r
        d="M179.35,303.67v45.79c-2.7,1.68-4.9,4.22-6.12,7.42c-0.19,0.49-0.39,0.96-0.63,1.41&#10;&#9;&#9;&#9;c-2.59,5.16-7.87,8.27-13.44,8.27c-0.3,0-0.6-0.01-0.9-0.03c-1.49-0.09-3-0.4-4.47-0.97c-1.77-0.68-3.59-1-5.38-1&#10;&#9;&#9;&#9;c-6.06,0-11.78,3.69-14.07,9.69s-8,9.69-14.07,9.69c-1.78,0-3.6-0.32-5.37-1c-0.66-0.25-1.32-0.46-1.99-0.61v-42.41&#10;&#9;&#9;&#9;c4.89-0.99,9.18-4.39,11.09-9.39c2.29-6,8.01-9.69,14.07-9.69c1.79,0,3.6,0.32,5.37,1c1.77,0.68,3.6,1,5.39,1&#10;&#9;&#9;&#9;c1.08,0,2.16-0.12,3.2-0.35c2.81-0.61,5.41-2.02,7.46-4.07c1.45-1.45,2.62-3.22,3.4-5.26c2.29-6,8-9.69,14.07-9.69&#10;&#9;&#9;&#9;C177.75,303.47,178.55,303.53,179.35,303.67z"\r
      />\r
      <path\r
        style="fill: #808fa4"\r
        d="M218.32,390.66v53.6c0,8.29-6.71,15-15,15h-23.97l-15.06-23.57l15.06-27.59&#10;&#9;&#9;&#9;c1.83-1.57,3.3-3.61,4.22-6.02c2.29-5.99,8.01-9.68,14.07-9.68c1.79,0,3.61,0.32,5.38,1c1.77,0.68,3.58,1,5.37,1&#10;&#9;&#9;&#9;c1.14,0,2.28-0.13,3.37-0.39h0.01C214.19,393.45,216.45,392.3,218.32,390.66z"\r
      />\r
      <path\r
        style="fill: #64768e"\r
        d="M169.5,411.77c3.63,0,7.13-1.32,9.85-3.67v51.16h-51.44c-8.28,0-15-6.71-15-15v-15.41&#10;&#9;&#9;&#9;c3.69-1.91,8.15-2.3,12.33-0.7c1.77,0.68,3.59,1,5.38,1c6.06,0,11.78-3.69,14.07-9.69c2.29-6,8-9.69,14.07-9.69&#10;&#9;&#9;&#9;c1.78,0,3.6,0.32,5.37,1C165.9,411.45,167.72,411.77,169.5,411.77z"\r
      />\r
      <path\r
        style="fill: #808fa4"\r
        d="M399.03,348.77v95.49c0,8.29-6.72,15-15,15h-67.02l-53.51-90.93V278.5c0-8.28,6.72-15,15-15h61.06&#10;&#9;&#9;&#9;L399.03,348.77z"\r
      />\r
      <path\r
        style="fill: #abb6c4"\r
        d="M376.44,331.26l-59.43,128H278.5c-8.28,0-15-6.71-15-15v-75.93l75.29-52.12L376.44,331.26z"\r
      />\r
      <path\r
        style="fill: #c5ced6"\r
        d="M399.03,278.5v70.27c-6.85,3.26-14.51,5.08-22.59,5.08c-3.43,0-6.79-0.33-10.04-0.96&#10;&#9;&#9;&#9;c-16.83-3.24-30.81-14.49-37.81-29.62c-3.12-6.72-4.86-14.22-4.86-22.12c0-14.75,6.06-28.09,15.83-37.65h44.47&#10;&#9;&#9;&#9;C392.31,263.5,399.03,270.22,399.03,278.5z"\r
      />\r
      <g>\r
        <g>\r
          <ellipse\r
            style="fill: #ffffff"\r
            cx="175.162"\r
            cy="150.402"\r
            rx="29.816"\r
            ry="23.744"\r
          />\r
          <ellipse\r
            style="fill: #ffffff"\r
            cx="336.778"\r
            cy="150.402"\r
            rx="29.816"\r
            ry="23.744"\r
          />\r
        </g>\r
      </g>\r
    </g>\r
    <g>\r
      <path\r
        style="\r
          fill: none;\r
          stroke: #000000;\r
          stroke-width: 15;\r
          stroke-linecap: round;\r
          stroke-linejoin: round;\r
          stroke-miterlimit: 10;\r
        "\r
        d="&#10;&#9;&#9;&#9;M67.73,402.54v41.9c0,33.14,26.87,60,60,60h256.48c33.13,0,60-26.86,60-60V67.5c0-33.14-26.87-60-60-60H127.73&#10;&#9;&#9;&#9;c-33.13,0-60,26.86-60,60v300.04"\r
      />\r
      <path\r
        style="\r
          fill: none;\r
          stroke: #000000;\r
          stroke-width: 15;\r
          stroke-linecap: round;\r
          stroke-linejoin: round;\r
          stroke-miterlimit: 10;\r
        "\r
        d="&#10;&#9;&#9;&#9;M359,52.68h25.03c8.28,0,15,6.71,15,15v135.64c0,8.29-6.72,15-15,15H127.91c-8.28,0-15-6.71-15-15V67.68c0-8.29,6.72-15,15-15H324&#10;&#9;&#9;&#9;"\r
      />\r
      <path\r
        style="\r
          fill: none;\r
          stroke: #000000;\r
          stroke-width: 15;\r
          stroke-linecap: round;\r
          stroke-linejoin: round;\r
          stroke-miterlimit: 10;\r
        "\r
        d="&#10;&#9;&#9;&#9;M203.323,459.264h-75.412c-8.284,0-15-6.716-15-15V278.499c0-8.284,6.716-15,15-15h75.412c8.284,0,15,6.716,15,15v165.765&#10;&#9;&#9;&#9;C218.323,452.548,211.607,459.264,203.323,459.264z"\r
      />\r
      <path\r
        style="\r
          fill: none;\r
          stroke: #000000;\r
          stroke-width: 15;\r
          stroke-linecap: round;\r
          stroke-linejoin: round;\r
          stroke-miterlimit: 10;\r
        "\r
        d="&#10;&#9;&#9;&#9;M399.03,278.5v165.76c0,8.29-6.72,15-15,15H278.5c-8.28,0-15-6.71-15-15V278.5c0-8.28,6.72-15,15-15h105.53&#10;&#9;&#9;&#9;C392.31,263.5,399.03,270.22,399.03,278.5z"\r
      />\r
\r
      <line\r
        style="\r
          fill: none;\r
          stroke: #000000;\r
          stroke-width: 15;\r
          stroke-linecap: round;\r
          stroke-linejoin: round;\r
          stroke-miterlimit: 10;\r
        "\r
        x1="264.641"\r
        y1="367.54"\r
        x2="327.14"\r
        y2="324.275"\r
      />\r
\r
      <line\r
        style="\r
          fill: none;\r
          stroke: #000000;\r
          stroke-width: 15;\r
          stroke-linecap: round;\r
          stroke-linejoin: round;\r
          stroke-miterlimit: 10;\r
        "\r
        x1="335.24"\r
        y1="420"\r
        x2="317.58"\r
        y2="458.04"\r
      />\r
\r
      <line\r
        style="\r
          fill: none;\r
          stroke: #000000;\r
          stroke-width: 15;\r
          stroke-linecap: round;\r
          stroke-linejoin: round;\r
          stroke-miterlimit: 10;\r
        "\r
        x1="365.42"\r
        y1="354.99"\r
        x2="349.98"\r
        y2="388.25"\r
      />\r
      <path\r
        style="\r
          fill: none;\r
          stroke: #000000;\r
          stroke-width: 15;\r
          stroke-linecap: round;\r
          stroke-linejoin: round;\r
          stroke-miterlimit: 10;\r
        "\r
        d="&#10;&#9;&#9;&#9;M337.07,266.11c-14.481,16.226-16.955,38.907-8.48,57.16c12.198,26.365,43.179,37.557,69.06,26.13"\r
      />\r
      <path\r
        style="\r
          fill: none;\r
          stroke: #000000;\r
          stroke-width: 15;\r
          stroke-linecap: round;\r
          stroke-linejoin: round;\r
          stroke-miterlimit: 10;\r
        "\r
        d="&#10;&#9;&#9;&#9;M114.09,339.63c4.39-1.26,8.16-4.51,9.91-9.1c2.29-6,8.01-9.69,14.07-9.69c4.907,0,5.826,2,10.76,2&#10;&#9;&#9;&#9;c6.016,0,11.752-3.643,14.06-9.68c2.29-6,8-9.69,14.07-9.69c3.551,0,5.135,1.068,7.09,1.54c7.171,1.837,14.948-1.942,17.73-9.23&#10;&#9;&#9;&#9;c2.653-6.632,8.993-10.222,15.36-9.63"\r
      />\r
      <path\r
        style="\r
          fill: none;\r
          stroke: #000000;\r
          stroke-width: 15;\r
          stroke-linecap: round;\r
          stroke-linejoin: round;\r
          stroke-miterlimit: 10;\r
        "\r
        d="&#10;&#9;&#9;&#9;M114.09,382.66c0.973,0.288,2.952,1.28,6.18,1.28c6.07,0,11.78-3.69,14.07-9.69c2.29-6,8.01-9.69,14.07-9.69&#10;&#9;&#9;&#9;c4.605,0,5.534,1.709,9.85,1.97c6.213,0.414,12.476-3.218,14.97-9.65c2.891-7.576,11.422-11.716,19.44-8.69&#10;&#9;&#9;&#9;c7.75,2.977,16.481-0.911,19.45-8.69c1.05-2.75,2.82-5.02,5.02-6.66"\r
      />\r
      <path\r
        style="\r
          fill: none;\r
          stroke: #000000;\r
          stroke-width: 15;\r
          stroke-linecap: round;\r
          stroke-linejoin: round;\r
          stroke-miterlimit: 10;\r
        "\r
        d="&#10;&#9;&#9;&#9;M114.09,428.31c3.44-1.43,7.41-1.59,11.15-0.16c7.75,2.977,16.481-0.911,19.45-8.69c2.29-6,8-9.69,14.07-9.69&#10;&#9;&#9;&#9;c4.886,0,5.854,2,10.74,2c6.07,0,11.78-3.69,14.07-9.69c2.29-5.99,8.01-9.68,14.07-9.68c4.907,0,5.856,2,10.75,2&#10;&#9;&#9;&#9;c3.118,0,6.213-0.998,8.75-2.81"\r
      />\r
      <g>\r
        <g>\r
          <g>\r
            <path\r
              style="\r
                fill: none;\r
                stroke: #000000;\r
                stroke-width: 15;\r
                stroke-linecap: round;\r
                stroke-miterlimit: 10;\r
              "\r
              d="M255.97,129.317&#10;&#9;&#9;&#9;&#9;&#9;&#9;c0,7.984-6.472,14.456-14.456,14.456c-7.984,0-14.456-6.472-14.456-14.456"\r
            />\r
            <path\r
              style="\r
                fill: none;\r
                stroke: #000000;\r
                stroke-width: 15;\r
                stroke-linecap: round;\r
                stroke-miterlimit: 10;\r
              "\r
              d="M284.881,129.317&#10;&#9;&#9;&#9;&#9;&#9;&#9;c0,7.984-6.472,14.456-14.456,14.456c-7.984,0-14.456-6.472-14.456-14.456"\r
            />\r
          </g>\r
        </g>\r
        <path\r
          style="\r
            fill: none;\r
            stroke: #000000;\r
            stroke-width: 15;\r
            stroke-linecap: round;\r
            stroke-linejoin: round;\r
            stroke-miterlimit: 10;\r
          "\r
          d="&#10;&#9;&#9;&#9;&#9;M208.213,117.501c0-7.602-6.163-13.765-13.765-13.765c-7.602,0-13.765,6.163-13.765,13.765"\r
        />\r
        <path\r
          style="\r
            fill: none;\r
            stroke: #000000;\r
            stroke-width: 15;\r
            stroke-linecap: round;\r
            stroke-linejoin: round;\r
            stroke-miterlimit: 10;\r
          "\r
          d="&#10;&#9;&#9;&#9;&#9;M303.727,117.501c0-7.602,6.163-13.765,13.765-13.765c7.602,0,13.765,6.163,13.765,13.765"\r
        />\r
      </g>\r
    </g>\r
  </g>\r
</svg>\r
`,bv=`<svg\r
  xmlns="http://www.w3.org/2000/svg"\r
  class="icon icon-tabler icon-tabler-palette"\r
  width="24"\r
  height="24"\r
  viewBox="0 0 24 24"\r
  stroke-width="2"\r
  stroke="currentColor"\r
  fill="none"\r
  stroke-linecap="round"\r
  stroke-linejoin="round"\r
>\r
  <path\r
    stroke="none"\r
    d="M0 0h24v24H0z"\r
    fill="none"\r
  />\r
  <path\r
    d="M12 21a9 9 0 0 1 0 -18c4.97 0 9 3.582 9 8c0 1.06 -.474 2.078 -1.318 2.828c-.844 .75 -1.989 1.172 -3.182 1.172h-2.5a2 2 0 0 0 -1 3.75a1.3 1.3 0 0 1 -1 2.25"\r
  />\r
  <path d="M8.5 10.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />\r
  <path d="M12.5 7.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />\r
  <path d="M16.5 10.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />\r
</svg>\r
`,wv=`<svg\r
  xmlns="http://www.w3.org/2000/svg"\r
  class="icon icon-tabler icon-tabler-pencil"\r
  width="24"\r
  height="24"\r
  viewBox="0 0 24 24"\r
  stroke-width="2"\r
  stroke="currentColor"\r
  fill="none"\r
  stroke-linecap="round"\r
  stroke-linejoin="round"\r
>\r
  <path\r
    stroke="none"\r
    d="M0 0h24v24H0z"\r
    fill="none"\r
  />\r
  <path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4" />\r
  <path d="M13.5 6.5l4 4" />\r
</svg>\r
`,_v=`<svg\r
  xmlns="http://www.w3.org/2000/svg"\r
  width="24"\r
  height="24"\r
  viewBox="0 0 24 24"\r
  fill="none"\r
  stroke="currentColor"\r
  stroke-width="2"\r
  stroke-linecap="round"\r
  stroke-linejoin="round"\r
  class="icon icon-tabler icons-tabler-outline icon-tabler-pencil-cog"\r
>\r
  <path\r
    stroke="none"\r
    d="M0 0h24v24H0z"\r
    fill="none"\r
  />\r
  <path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4" />\r
  <path d="M13.5 6.5l4 4" />\r
  <path d="M19.001 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />\r
  <path d="M19.001 15.5v1.5" />\r
  <path d="M19.001 21v1.5" />\r
  <path d="M22.032 17.25l-1.299 .75" />\r
  <path d="M17.27 20l-1.3 .75" />\r
  <path d="M15.97 17.25l1.3 .75" />\r
  <path d="M20.733 20l1.3 .75" />\r
</svg>\r
`,yv=`<svg\r
  xmlns="http://www.w3.org/2000/svg"\r
  class="icon icon-tabler icon-tabler-photo"\r
  width="24"\r
  height="24"\r
  viewBox="0 0 24 24"\r
  stroke-width="2"\r
  stroke="currentColor"\r
  fill="none"\r
  stroke-linecap="round"\r
  stroke-linejoin="round"\r
>\r
  <path\r
    stroke="none"\r
    d="M0 0h24v24H0z"\r
    fill="none"\r
  />\r
  <path d="M15 8h.01" />\r
  <path d="M3 6a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3v-12z" />\r
  <path d="M3 16l5 -5c.928 -.893 2.072 -.893 3 0l5 5" />\r
  <path d="M14 14l1 -1c.928 -.893 2.072 -.893 3 0l3 3" />\r
</svg>\r
`,kv=`<svg\r
  xmlns="http://www.w3.org/2000/svg"\r
  class="icon icon-tabler icon-tabler-photo-off"\r
  width="24"\r
  height="24"\r
  viewBox="0 0 24 24"\r
  stroke-width="2"\r
  stroke="currentColor"\r
  fill="none"\r
  stroke-linecap="round"\r
  stroke-linejoin="round"\r
>\r
  <path\r
    stroke="none"\r
    d="M0 0h24v24H0z"\r
    fill="none"\r
  />\r
  <path d="M15 8h.01" />\r
  <path\r
    d="M7 3h11a3 3 0 0 1 3 3v11m-.856 3.099a2.991 2.991 0 0 1 -2.144 .901h-12a3 3 0 0 1 -3 -3v-12c0 -.845 .349 -1.608 .91 -2.153"\r
  />\r
  <path d="M3 16l5 -5c.928 -.893 2.072 -.893 3 0l5 5" />\r
  <path d="M16.33 12.338c.574 -.054 1.155 .166 1.67 .662l3 3" />\r
  <path\r
    d="M3 3l18 18"\r
    color="orange"\r
  />\r
</svg>\r
`,Ev=`<svg\r
  xmlns="http://www.w3.org/2000/svg"\r
  width="24"\r
  height="24"\r
  viewBox="0 0 24 24"\r
  fill="none"\r
  stroke="currentColor"\r
  stroke-width="2"\r
  stroke-linecap="round"\r
  stroke-linejoin="round"\r
  class="icon icon-tabler icons-tabler-outline icon-tabler-pin"\r
>\r
  <path\r
    stroke="none"\r
    d="M0 0h24v24H0z"\r
    fill="none"\r
  />\r
  <path d="M15 4.5l-4 4l-4 1.5l-1.5 1.5l7 7l1.5 -1.5l1.5 -4l4 -4" />\r
  <path d="M9 15l-4.5 4.5" />\r
  <path d="M14.5 4l5.5 5.5" />\r
</svg>\r
`,Sv=`<svg\r
  xmlns="http://www.w3.org/2000/svg"\r
  class="icon icon-tabler icon-tabler-player-pause"\r
  width="24"\r
  height="24"\r
  viewBox="0 0 24 24"\r
  stroke-width="2"\r
  stroke="currentColor"\r
  fill="none"\r
  stroke-linecap="round"\r
  stroke-linejoin="round"\r
>\r
  <path\r
    stroke="none"\r
    d="M0 0h24v24H0z"\r
    fill="none"\r
  />\r
  <path d="M6 5m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v12a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" />\r
  <path d="M14 5m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v12a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" />\r
</svg>\r
`,Av=`<svg\r
  xmlns="http://www.w3.org/2000/svg"\r
  class="icon icon-tabler icon-tabler-player-play"\r
  width="24"\r
  height="24"\r
  viewBox="0 0 24 24"\r
  stroke-width="2"\r
  stroke="currentColor"\r
  fill="none"\r
  stroke-linecap="round"\r
  stroke-linejoin="round"\r
>\r
  <path\r
    stroke="none"\r
    d="M0 0h24v24H0z"\r
    fill="none"\r
  />\r
  <path d="M7 4v16l13 -8z" />\r
</svg>\r
`,Mv=`<svg\r
  xmlns="http://www.w3.org/2000/svg"\r
  class="icon icon-tabler icon-tabler-refresh"\r
  width="24"\r
  height="24"\r
  viewBox="0 0 24 24"\r
  stroke-width="2"\r
  stroke="currentColor"\r
  fill="none"\r
  stroke-linecap="round"\r
  stroke-linejoin="round"\r
>\r
  <path\r
    stroke="none"\r
    d="M0 0h24v24H0z"\r
    fill="none"\r
  />\r
  <path d="M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4" />\r
  <path d="M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4" />\r
</svg>\r
`,xv=`<svg\r
  xmlns="http://www.w3.org/2000/svg"\r
  class="icon icon-tabler icon-tabler-settings"\r
  width="24"\r
  height="24"\r
  viewBox="0 0 24 24"\r
  stroke-width="2"\r
  stroke="currentColor"\r
  fill="none"\r
  stroke-linecap="round"\r
  stroke-linejoin="round"\r
>\r
  <path\r
    stroke="none"\r
    d="M0 0h24v24H0z"\r
    fill="none"\r
  />\r
  <path\r
    d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z"\r
  />\r
  <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />\r
</svg>\r
`,Iv=`<svg\r
  xmlns="http://www.w3.org/2000/svg"\r
  width="24"\r
  height="24"\r
  viewBox="0 0 24 24"\r
  fill="none"\r
  stroke="currentColor"\r
  stroke-width="2"\r
  stroke-linecap="round"\r
  stroke-linejoin="round"\r
  class="icon icon-tabler icons-tabler-outline icon-tabler-settings-off"\r
>\r
  <path\r
    stroke="none"\r
    d="M0 0h24v24H0z"\r
    fill="none"\r
  />\r
  <path\r
    d="M9.451 5.437c.418 -.218 .75 -.609 .874 -1.12c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35c-.486 .118 -.894 .44 -1.123 .878m-.188 3.803c-.517 .523 -1.349 .734 -2.125 .262a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.472 -.774 -.262 -1.604 .259 -2.121"\r
  />\r
  <path d="M9.889 9.869a3 3 0 1 0 4.226 4.26m.592 -3.424a3.012 3.012 0 0 0 -1.419 -1.415" />\r
  <path d="M3 3l18 18" />\r
</svg>\r
`,Ov=`<svg\r
  xmlns="http://www.w3.org/2000/svg"\r
  class="icon icon-tabler icon-tabler-spacing-vertical"\r
  width="24"\r
  height="24"\r
  viewBox="0 0 24 24"\r
  stroke-width="2"\r
  stroke="currentColor"\r
  fill="none"\r
  stroke-linecap="round"\r
  stroke-linejoin="round"\r
>\r
  <path\r
    stroke="none"\r
    d="M0 0h24v24H0z"\r
    fill="none"\r
  />\r
  <path d="M4 20v-2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v2" />\r
  <path d="M4 4v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" />\r
  <path d="M16 12h-8" />\r
</svg>\r
`,Cv=`<svg\r
  xmlns="http://www.w3.org/2000/svg"\r
  class="icon icon-tabler icon-tabler-sun"\r
  width="24"\r
  height="24"\r
  viewBox="0 0 24 24"\r
  stroke-width="2"\r
  stroke="currentColor"\r
  fill="none"\r
  stroke-linecap="round"\r
  stroke-linejoin="round"\r
>\r
  <path\r
    stroke="none"\r
    d="M0 0h24v24H0z"\r
    fill="none"\r
  />\r
  <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />\r
  <path\r
    d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7"\r
  />\r
</svg>\r
`,Tv=`<svg\r
  xmlns="http://www.w3.org/2000/svg"\r
  class="icon icon-tabler icon-tabler-trash"\r
  width="24"\r
  height="24"\r
  viewBox="0 0 24 24"\r
  stroke-width="2"\r
  stroke="currentColor"\r
  fill="none"\r
  stroke-linecap="round"\r
  stroke-linejoin="round"\r
>\r
  <path\r
    stroke="none"\r
    d="M0 0h24v24H0z"\r
    fill="none"\r
  />\r
  <path d="M4 7l16 0" />\r
  <path d="M10 11l0 6" />\r
  <path d="M14 11l0 6" />\r
  <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />\r
  <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />\r
</svg>\r
`,Lv=`<svg\r
  xmlns="http://www.w3.org/2000/svg"\r
  width="24"\r
  height="24"\r
  viewBox="0 0 24 24"\r
  fill="none"\r
  stroke="currentColor"\r
  stroke-width="2"\r
  stroke-linecap="round"\r
  stroke-linejoin="round"\r
  class="icon icon-tabler icons-tabler-outline icon-tabler-world-cog"\r
>\r
  <path\r
    stroke="none"\r
    d="M0 0h24v24H0z"\r
    fill="none"\r
  />\r
  <path d="M21 12a9 9 0 1 0 -8.979 9" />\r
  <path d="M3.6 9h16.8" />\r
  <path d="M3.6 15h8.9" />\r
  <path d="M11.5 3a17 17 0 0 0 0 18" />\r
  <path d="M12.5 3a16.992 16.992 0 0 1 2.522 10.376" />\r
  <path d="M19.001 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />\r
  <path d="M19.001 15.5v1.5" />\r
  <path d="M19.001 21v1.5" />\r
  <path d="M22.032 17.25l-1.299 .75" />\r
  <path d="M17.27 20l-1.3 .75" />\r
  <path d="M15.97 17.25l1.3 .75" />\r
  <path d="M20.733 20l1.3 .75" />\r
</svg>\r
`,Rv=`<svg\r
  xmlns="http://www.w3.org/2000/svg"\r
  class="icon icon-tabler icon-tabler-x"\r
  width="24"\r
  height="24"\r
  viewBox="0 0 24 24"\r
  stroke-width="2"\r
  stroke="currentColor"\r
  fill="none"\r
  stroke-linecap="round"\r
  stroke-linejoin="round"\r
>\r
  <path\r
    stroke="none"\r
    d="M0 0h24v24H0z"\r
    fill="none"\r
  />\r
  <path d="M18 6l-12 12" />\r
  <path d="M6 6l12 12" />\r
</svg>\r
`,Pv=`<svg\r
  xmlns="http://www.w3.org/2000/svg"\r
  width="24"\r
  height="24"\r
  viewBox="0 0 24 24"\r
  fill="none"\r
  stroke="currentColor"\r
  stroke-width="2"\r
  stroke-linecap="round"\r
  stroke-linejoin="round"\r
  class="icon icon-tabler icons-tabler-outline icon-tabler-zoom"\r
>\r
  <path\r
    stroke="none"\r
    d="M0 0h24v24H0z"\r
    fill="none"\r
  />\r
  <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />\r
  <path d="M21 21l-6 -6" />\r
</svg>\r
`,$v=`<svg\r
  xmlns="http://www.w3.org/2000/svg"\r
  class="icon icon-tabler icon-tabler-zoom-cancel"\r
  width="24"\r
  height="24"\r
  viewBox="0 0 24 24"\r
  stroke-width="2"\r
  stroke="currentColor"\r
  fill="none"\r
  stroke-linecap="round"\r
  stroke-linejoin="round"\r
>\r
  <path\r
    stroke="none"\r
    d="M0 0h24v24H0z"\r
    fill="none"\r
  />\r
  <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />\r
  <path d="M8 8l4 4" />\r
  <path d="M12 8l-4 4" />\r
  <path d="M21 21l-6 -6" />\r
</svg>\r
`,zv=`<svg\r
  xmlns="http://www.w3.org/2000/svg"\r
  class="icon icon-tabler icon-tabler-zoom-in"\r
  width="24"\r
  height="24"\r
  viewBox="0 0 24 24"\r
  stroke-width="2"\r
  stroke="currentColor"\r
  fill="none"\r
  stroke-linecap="round"\r
  stroke-linejoin="round"\r
>\r
  <path\r
    stroke="none"\r
    d="M0 0h24v24H0z"\r
    fill="none"\r
  />\r
  <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />\r
  <path d="M7 10l6 0" />\r
  <path d="M10 7l0 6" />\r
  <path d="M21 21l-6 -6" />\r
</svg>\r
`,Dv=`<svg\r
  xmlns="http://www.w3.org/2000/svg"\r
  class="icon icon-tabler icon-tabler-zoom-in-area"\r
  width="24"\r
  height="24"\r
  viewBox="0 0 24 24"\r
  stroke-width="2"\r
  stroke="currentColor"\r
  fill="none"\r
  stroke-linecap="round"\r
  stroke-linejoin="round"\r
>\r
  <path\r
    stroke="none"\r
    d="M0 0h24v24H0z"\r
    fill="none"\r
  />\r
  <path d="M15 13v4" />\r
  <path d="M13 15h4" />\r
  <path d="M15 15m-5 0a5 5 0 1 0 10 0a5 5 0 1 0 -10 0" />\r
  <path d="M22 22l-3 -3" />\r
  <path d="M6 18h-1a2 2 0 0 1 -2 -2v-1" />\r
  <path d="M3 11v-1" />\r
  <path d="M3 6v-1a2 2 0 0 1 2 -2h1" />\r
  <path d="M10 3h1" />\r
  <path d="M15 3h1a2 2 0 0 1 2 2v1" />\r
</svg>\r
`,Nv=`<svg\r
  xmlns="http://www.w3.org/2000/svg"\r
  class="icon icon-tabler icon-tabler-zoom-out"\r
  width="24"\r
  height="24"\r
  viewBox="0 0 24 24"\r
  stroke-width="2"\r
  stroke="currentColor"\r
  fill="none"\r
  stroke-linecap="round"\r
  stroke-linejoin="round"\r
>\r
  <path\r
    stroke="none"\r
    d="M0 0h24v24H0z"\r
    fill="none"\r
  />\r
  <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />\r
  <path d="M7 10l6 0" />\r
  <path d="M21 21l-6 -6" />\r
</svg>\r
`,Bv=`<svg\r
  xmlns="http://www.w3.org/2000/svg"\r
  class="icon icon-tabler icon-tabler-zoom-out-area"\r
  width="24"\r
  height="24"\r
  viewBox="0 0 24 24"\r
  stroke-width="2"\r
  stroke="currentColor"\r
  fill="none"\r
  stroke-linecap="round"\r
  stroke-linejoin="round"\r
>\r
  <path\r
    stroke="none"\r
    d="M0 0h24v24H0z"\r
    fill="none"\r
  />\r
  <path d="M13 15h4" />\r
  <path d="M15 15m-5 0a5 5 0 1 0 10 0a5 5 0 1 0 -10 0" />\r
  <path d="M22 22l-3 -3" />\r
  <path d="M6 18h-1a2 2 0 0 1 -2 -2v-1" />\r
  <path d="M3 11v-1" />\r
  <path d="M3 6v-1a2 2 0 0 1 2 -2h1" />\r
  <path d="M10 3h1" />\r
  <path d="M15 3h1a2 2 0 0 1 2 2v1" />\r
</svg>\r
`,Hv=`<svg\r
  xmlns="http://www.w3.org/2000/svg"\r
  class="icon icon-tabler icon-tabler-zoom-pan"\r
  width="24"\r
  height="24"\r
  viewBox="0 0 24 24"\r
  stroke-width="2"\r
  stroke="currentColor"\r
  fill="none"\r
  stroke-linecap="round"\r
  stroke-linejoin="round"\r
>\r
  <path\r
    stroke="none"\r
    d="M0 0h24v24H0z"\r
    fill="none"\r
  />\r
  <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />\r
  <path d="M17 17l-2.5 -2.5" />\r
  <path d="M10 5l2 -2l2 2" />\r
  <path d="M19 10l2 2l-2 2" />\r
  <path d="M5 10l-2 2l2 2" />\r
  <path d="M10 19l2 2l2 -2" />\r
</svg>\r
`,Dd=Xc({IconAdjustmentsHorizontal:()=>c5,IconAlertCircle:()=>u5,IconArrowAutofitDown:()=>d5,IconArrowAutofitHeight:()=>h5,IconArrowAutofitLeft:()=>f5,IconArrowAutofitRight:()=>p5,IconArrowAutofitWidth:()=>g5,IconArrowBigLeft:()=>m5,IconArrowBigRight:()=>v5,IconArrowsHorizontal:()=>b5,IconArrowsLeftRight:()=>w5,IconArrowsMove:()=>_5,IconArrowsMoveVertical:()=>y5,IconArrowsVertical:()=>k5,IconBook:()=>E5,IconBookReturn:()=>S5,IconBookUpload:()=>A5,IconBookmark:()=>M5,IconBookmarkOff:()=>x5,IconBookmarks:()=>I5,IconBoxAlignTop:()=>O5,IconCategory:()=>z5,IconCheck:()=>D5,IconChevronLeft:()=>N5,IconChevronRight:()=>B5,IconCircleCheck:()=>H5,IconCircleX:()=>F5,IconComic1:()=>T5,IconComic1Flat:()=>C5,IconComic2:()=>R5,IconComic2Flat:()=>L5,IconComic3:()=>$5,IconComic3Flat:()=>P5,IconDeviceFloppy:()=>G5,IconDotsVertical:()=>U5,IconEReader1:()=>V5,IconEReader1Flat:()=>W5,IconEReader2:()=>j5,IconEReader2Flat:()=>Z5,IconExternalLink:()=>q5,IconEye:()=>K5,IconEyeOff:()=>Y5,IconFileDownload:()=>X5,IconFilePercent:()=>J5,IconHandClick:()=>Q5,IconHelp:()=>ev,IconInfoCircle:()=>tv,IconKeyboard:()=>nv,IconLayoutBottombar:()=>rv,IconLayoutBottombarInactive:()=>iv,IconLayoutSidebar:()=>ov,IconLayoutSidebarInactive:()=>av,IconLayoutSidebarRight:()=>sv,IconLayoutSidebarRightInactive:()=>lv,IconListNumbers:()=>cv,IconLoader2:()=>uv,IconLocationCog:()=>dv,IconMenu2:()=>hv,IconMenuDeep:()=>fv,IconMessage:()=>pv,IconMoon:()=>gv,IconPage:()=>vv,IconPageFlat:()=>mv,IconPalette:()=>bv,IconPencil:()=>wv,IconPencilCog:()=>_v,IconPhoto:()=>yv,IconPhotoOff:()=>kv,IconPin:()=>Ev,IconPlayerPause:()=>Sv,IconPlayerPlay:()=>Av,IconRefresh:()=>Mv,IconSettings:()=>xv,IconSettingsOff:()=>Iv,IconSpacingVertical:()=>Ov,IconSun:()=>Cv,IconTrash:()=>Tv,IconWorldCog:()=>Lv,IconX:()=>Rv,IconZoom:()=>Pv,IconZoomCancel:()=>$v,IconZoomIn:()=>zv,IconZoomInArea:()=>Dv,IconZoomOut:()=>Nv,IconZoomOutArea:()=>Bv,IconZoomPan:()=>Hv}),kl=Xc({IconAdjustmentsHorizontal:()=>jv,IconAlertCircle:()=>v4,IconArrowAutofitDown:()=>Yv,IconArrowAutofitHeight:()=>Xv,IconArrowAutofitLeft:()=>Jv,IconArrowAutofitRight:()=>Qv,IconArrowAutofitWidth:()=>e4,IconArrowBigLeft:()=>t4,IconArrowBigRight:()=>n4,IconArrowsHorizontal:()=>qv,IconArrowsLeftRight:()=>Kv,IconArrowsMove:()=>r4,IconArrowsMoveVertical:()=>i4,IconArrowsVertical:()=>o4,IconBook:()=>a4,IconBookReturn:()=>s4,IconBookUpload:()=>l4,IconBookmark:()=>c4,IconBookmarkOff:()=>u4,IconBookmarks:()=>d4,IconBoxAlignTop:()=>h4,IconCategory:()=>f4,IconCheck:()=>p4,IconChevronLeft:()=>g4,IconChevronRight:()=>m4,IconCircleCheck:()=>b4,IconCircleX:()=>w4,IconComic1:()=>k4,IconComic1Flat:()=>E4,IconComic2:()=>S4,IconComic2Flat:()=>A4,IconComic3:()=>M4,IconComic3Flat:()=>x4,IconDeviceFloppy:()=>I4,IconDotsVertical:()=>O4,IconEReader1:()=>C4,IconEReader1Flat:()=>T4,IconEReader2:()=>L4,IconEReader2Flat:()=>R4,IconExternalLink:()=>P4,IconEye:()=>$4,IconEyeOff:()=>z4,IconFileDownload:()=>D4,IconFilePercent:()=>N4,IconHandClick:()=>B4,IconHelp:()=>_4,IconInfoCircle:()=>y4,IconKeyboard:()=>H4,IconLayoutBottombar:()=>F4,IconLayoutBottombarInactive:()=>G4,IconLayoutSidebar:()=>U4,IconLayoutSidebarInactive:()=>W4,IconLayoutSidebarRight:()=>V4,IconLayoutSidebarRightInactive:()=>Z4,IconListNumbers:()=>j4,IconLoader2:()=>q4,IconLocationCog:()=>K4,IconMenu2:()=>Y4,IconMenuDeep:()=>X4,IconMessage:()=>J4,IconMoon:()=>Q4,IconPage:()=>e3,IconPageFlat:()=>t3,IconPalette:()=>n3,IconPencil:()=>r3,IconPencilCog:()=>i3,IconPhoto:()=>El,IconPhotoOff:()=>Sl,IconPin:()=>o3,IconPlayerPause:()=>a3,IconPlayerPlay:()=>s3,IconRefresh:()=>l3,IconSettings:()=>c3,IconSettingsOff:()=>u3,IconSpacingVertical:()=>d3,IconSun:()=>h3,IconTrash:()=>f3,IconWorldCog:()=>p3,IconX:()=>g3,IconZoom:()=>m3,IconZoomCancel:()=>v3,IconZoomIn:()=>b3,IconZoomInArea:()=>w3,IconZoomOut:()=>_3,IconZoomOutArea:()=>y3,IconZoomPan:()=>k3});function Fv(e){return[...e.matchAll(/([^{}]+)\s*\{([^}]+)\}/g)].map(t=>{const r=t[1].trim(),o=t[2],a=/color:\s*([^;]+)/.exec(o);if(a){const s=a[1].trim();return{selectors:r.split(",").map(c=>c.trim().replace(/\s\s+/g," ")),color:s}}return null}).filter(t=>t!==null)}var Gv=Fv(l5),ba=new Map;for(const e of Gv)for(const t of e.selectors){const r=t.match(/^\s*\.([^ ]+)\s*(.*)$/);if(!r)continue;const[,o,a]=r;let s=a.trim();s.startsWith(">")&&(s=s.substring(1).trim()),s===""&&(s="*"),ba.has(o)||ba.set(o,[]),ba.get(o)?.push({subSelector:s,color:e.color})}var Uv=new DOMParser,Wv=new XMLSerializer;function Vv(e,t){const r=ba.get(t);if(!r?.length)return e;const o=Uv.parseFromString(e,"image/svg+xml").documentElement;if(o.querySelector("parsererror"))return console.error(`Error parsing SVG for ${t}`),e;for(const{subSelector:a,color:s}of r)try{o.querySelectorAll(a).forEach(c=>{c.setAttribute("stroke",s)})}catch(c){console.error(`Invalid selector "${a}" for ${t}`,c)}return Wv.serializeToString(o)}var Zv=Object.fromEntries(Object.keys(Dd).map(e=>{const t=e.replace(/^Icon/,"").replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),r=Dd[e];return[e,Vv(r,`icon-tabler-${t}`)]})),{IconAdjustmentsHorizontal:jv,IconArrowsHorizontal:qv,IconArrowsLeftRight:Kv,IconArrowAutofitDown:Yv,IconArrowAutofitHeight:Xv,IconArrowAutofitLeft:Jv,IconArrowAutofitRight:Qv,IconArrowAutofitWidth:e4,IconArrowBigLeft:t4,IconArrowBigRight:n4,IconArrowsMove:r4,IconArrowsMoveVertical:i4,IconArrowsVertical:o4,IconBook:a4,IconBookReturn:s4,IconBookUpload:l4,IconBookmark:c4,IconBookmarkOff:u4,IconBookmarks:d4,IconBoxAlignTop:h4,IconCategory:f4,IconCheck:p4,IconChevronLeft:g4,IconChevronRight:m4,IconAlertCircle:v4,IconCircleCheck:b4,IconCircleX:w4,IconHelp:_4,IconInfoCircle:y4,IconComic1:k4,IconComic1Flat:E4,IconComic2:S4,IconComic2Flat:A4,IconComic3:M4,IconComic3Flat:x4,IconDeviceFloppy:I4,IconDotsVertical:O4,IconEReader1:C4,IconEReader1Flat:T4,IconEReader2:L4,IconEReader2Flat:R4,IconExternalLink:P4,IconEye:$4,IconEyeOff:z4,IconFileDownload:D4,IconFilePercent:N4,IconHandClick:B4,IconKeyboard:H4,IconLayoutBottombar:F4,IconLayoutBottombarInactive:G4,IconLayoutSidebar:U4,IconLayoutSidebarInactive:W4,IconLayoutSidebarRight:V4,IconLayoutSidebarRightInactive:Z4,IconListNumbers:j4,IconLoader2:q4,IconLocationCog:K4,IconMenu2:Y4,IconMenuDeep:X4,IconMessage:J4,IconMoon:Q4,IconPage:e3,IconPageFlat:t3,IconPalette:n3,IconPencil:r3,IconPencilCog:i3,IconPhoto:El,IconPhotoOff:Sl,IconPin:o3,IconPlayerPause:a3,IconPlayerPlay:s3,IconRefresh:l3,IconSettings:c3,IconSettingsOff:u3,IconSpacingVertical:d3,IconSun:h3,IconTrash:f3,IconWorldCog:p3,IconX:g3,IconZoom:m3,IconZoomCancel:v3,IconZoomIn:b3,IconZoomInArea:w3,IconZoomOut:_3,IconZoomOutArea:y3,IconZoomPan:k3}=Zv;function Y(e,t,r,o){var a=arguments.length,s=a<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,r):o,c;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(e,t,r,o);else for(var d=e.length-1;d>=0;d--)(c=e[d])&&(s=(a<3?c(s):a>3?c(t,r,s):c(t,r))||s);return a>3&&s&&Object.defineProperty(t,r,s),s}var Hr=class extends nt{constructor(...t){super(...t),this.name="",this.variant="regular",this.family="classic",this.label="",this.size=""}static{this.styles=Pt`
    :host {
      --mov-icon-size: 1rem;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      vertical-align: middle;
      line-height: 1;
    }
    :host([hidden]) {
      display: none;
    }
    svg {
      width: var(--mov-icon-size, 1rem);
      height: var(--mov-icon-size, 1rem);
      display: block;
      color: inherit; /* This will inherit from the host element */
    }
  `}updated(t){super.updated(t),t.has("name")&&(kl[zd(this.name)]?(this.dispatchEvent(new CustomEvent("load",{bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent("wa-load",{bubbles:!0,composed:!0}))):(this.dispatchEvent(new CustomEvent("error",{bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent("wa-error",{bubbles:!0,composed:!0}))))}render(){const t=kl[zd(this.name)];if(!t)return Pe;const r=this.size?`--mov-icon-size: ${this.size};`:"";return le`<span
      role=${this.label?"img":Pe}
      aria-label=${this.label||Pe}
      aria-hidden=${this.label?Pe:"true"}
      style=${r}
      >${$d(t)}</span
    >`}};Y([he({type:String})],Hr.prototype,"name",void 0),Y([he({type:String,reflect:!0})],Hr.prototype,"variant",void 0),Y([he({type:String,reflect:!0})],Hr.prototype,"family",void 0),Y([he({type:String})],Hr.prototype,"label",void 0),Y([he({type:String})],Hr.prototype,"size",void 0),Hr=Y([pt("mov-icon")],Hr);var Ot=Wi(class extends Wo{constructor(e){if(super(e),e.type!==Uo.ATTRIBUTE||e.name!=="class"||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(o=>o!=="")));for(const o in t)t[o]&&!this.nt?.has(o)&&this.st.add(o);return this.render(t)}const r=e.element.classList;for(const o of this.st)o in t||(r.remove(o),this.st.delete(o));for(const o in t){const a=!!t[o];a===this.st.has(o)||this.nt?.has(o)||(a?(r.add(o),this.st.add(o)):(r.remove(o),this.st.delete(o)))}return Vn}}),ln=e=>e??Pe,E3=":host{--mov-font-size-scale:1;--mov-font-size-m:calc(1rem * var(--mov-font-size-scale));--mov-font-size-s:round(calc(var(--mov-font-size-m) / 1.125), 1px);--mov-font-size-l:round(calc(var(--mov-font-size-m) * 1.125 * 1.125), 1px);--mov-border-width-s:.0625rem;--mov-border-radius-m:.375rem;--mov-border-radius-pill:9999px;--mov-transition-fast:75ms;--mov-font-weight-action:500;--mov-focus-ring:solid .1875rem var(--mov-color-fill-loud);--mov-focus-ring-offset:.0625rem;--mov-line-height-condensed:1.2;--mov-form-control-padding-block:.75em;--mov-form-control-padding-inline:1em;--mov-form-control-height:round(calc(2 * var(--mov-form-control-padding-block) + 1em * var(--mov-line-height-condensed)), 1px);display:inline-block}:host([size=small]){font-size:var(--mov-font-size-s)}:host([size=medium]){font-size:var(--mov-font-size-m)}:host([size=large]){font-size:var(--mov-font-size-l)}.button{box-sizing:border-box;user-select:none;white-space:nowrap;vertical-align:middle;transition-property:background,border,box-shadow,color;transition-duration:var(--mov-transition-fast);cursor:pointer;padding:0 var(--mov-form-control-padding-inline);font-family:inherit;font-size:inherit;font-weight:var(--mov-font-weight-action);line-height:calc(var(--mov-form-control-height) - var(--mov-border-width-s) * 2);height:var(--mov-form-control-height);border-radius:var(--mov-border-radius-m);border-style:solid;border-width:var(--mov-border-width-s);background-color:var(--mov-color-fill-loud);color:var(--mov-color-on-loud);border-color:#0000;justify-content:center;align-items:center;text-decoration:none;display:inline-flex}:host([appearance~=plain]){& .button{color:var(--mov-color-on-quiet);background-color:#0000;border-color:#0000}@media (hover:hover){& .button:not(.disabled):not(.loading):hover{color:var(--mov-color-on-quiet);background-color:var(--mov-color-fill-quiet)}}& .button:not(.disabled):not(.loading):active{color:var(--mov-color-on-quiet);background-color:color-mix(in oklab, var(--mov-color-fill-quiet), var(--mov-color-mix-active))}}:host([appearance~=outlined]){& .button{color:var(--mov-color-on-quiet);border-color:var(--mov-color-border-loud);background-color:#0000}@media (hover:hover){& .button:not(.disabled):not(.loading):hover{color:var(--mov-color-on-quiet);background-color:var(--mov-color-fill-quiet)}}& .button:not(.disabled):not(.loading):active{color:var(--mov-color-on-quiet);background-color:color-mix(in oklab, var(--mov-color-fill-quiet), var(--mov-color-mix-active))}}:host([appearance~=filled]){& .button{color:var(--mov-color-on-normal);background-color:var(--mov-color-fill-normal);border-color:#0000}@media (hover:hover){& .button:not(.disabled):not(.loading):hover{color:var(--mov-color-on-normal);background-color:color-mix(in oklab, var(--mov-color-fill-normal), var(--mov-color-mix-hover))}}& .button:not(.disabled):not(.loading):active{color:var(--mov-color-on-normal);background-color:color-mix(in oklab, var(--mov-color-fill-normal), var(--mov-color-mix-active))}}:host([appearance~=filled][appearance~=outlined]) .button{border-color:var(--mov-color-border-normal)}:host([appearance~=accent]){& .button{color:var(--mov-color-on-loud);background-color:var(--mov-color-fill-loud);border-color:#0000}@media (hover:hover){& .button:not(.disabled):not(.loading):hover{background-color:color-mix(in oklab, var(--mov-color-fill-loud), var(--mov-color-mix-hover))}}& .button:not(.disabled):not(.loading):active{background-color:color-mix(in oklab, var(--mov-color-fill-loud), var(--mov-color-mix-active))}}.button:focus{outline:none}.button:focus-visible{outline:var(--mov-focus-ring);outline-offset:var(--mov-focus-ring-offset)}.button.disabled{opacity:.5;cursor:not-allowed}.button.disabled *{pointer-events:none}.button.is-icon-button{outline-offset:2px;width:var(--mov-form-control-height);aspect-ratio:1}:host([pill]) .button{border-radius:var(--mov-border-radius-pill)}.start,.end{pointer-events:none;flex:none;align-items:center;display:flex}.label{display:inline-block}.is-icon-button .label{display:flex}mov-icon[part~=caret]{align-self:center;align-items:center;display:flex}mov-icon[part~=caret]::part(svg){width:.875em;height:.875em}.loading{cursor:wait;position:relative}.loading .start,.loading .label,.loading .end,.loading .caret{visibility:hidden}.spinner{--indicator-color:currentColor;--track-color:color-mix(in oklab, currentColor, transparent 90%);border:2px solid var(--track-color);border-top-color:var(--indicator-color);border-radius:50%;width:1em;height:1em;font-size:1em;animation:1s linear infinite spin;position:absolute;top:calc(50% - .5em);left:calc(50% - .5em)}@keyframes spin{to{transform:rotate(360deg)}}slot[name=start]::slotted(*){margin-inline-end:.75em}slot[name=end]::slotted(*),.button:not(.visually-hidden-label) [part~=caret]{margin-inline-start:.75em}",ct=class extends nt{constructor(...t){super(...t),this.isIconButton=!1,this.hasLabel=!1,this.hasStart=!1,this.hasEnd=!1,this.title="",this.appearance="accent",this.variant="brand",this.size="medium",this.withCaret=!1,this.disabled=!1,this.loading=!1,this.pill=!1,this.type="button",this.form=null}static{this.styles=[qt(E3)]}handleClick(t){(this.disabled||this.loading)&&(t.preventDefault(),t.stopPropagation())}click(){this.button?.click()}focus(t){this.button?.focus(t)}blur(){this.button?.blur()}render(){const t=!!this.href,r={button:!0,"with-caret":this.withCaret,disabled:this.disabled,loading:this.loading,pill:this.pill,"has-label":this.hasLabel,"has-start":this.hasStart,"has-end":this.hasEnd,"is-icon-button":this.isIconButton},o=le`
      <slot
        name="start"
        @slotchange=${this.handleLabelSlotChange}
        part="start"
        class="start"
      ></slot>
      <slot
        @slotchange=${this.handleLabelSlotChange}
        part="label"
        class="label"
      ></slot>
      <slot
        name="end"
        @slotchange=${this.handleLabelSlotChange}
        part="end"
        class="end"
      ></slot>
      ${this.withCaret?le`<mov-icon
            part="caret"
            class="caret"
            name="IconChevronRight"
            style="transform: rotate(90deg)"
          ></mov-icon>`:""}
      ${this.loading?le`<span
            part="spinner"
            class="spinner"
          ></span>`:""}
    `;return t?le`
        <a
          part="base"
          class=${Ot(r)}
          href=${ln(this.href)}
          target=${ln(this.target)}
          title=${ln(this.title)}
          role="button"
          aria-disabled=${this.disabled?"true":"false"}
          tabindex=${this.disabled?"-1":"0"}
          download=${ln(this.download)}
          @click=${this.handleClick}
        >
          ${o}
        </a>
      `:le`
        <button
          part="base"
          class=${Ot(r)}
          ?disabled=${this.disabled||this.loading}
          type=${ln(this.type)}
          title=${ln(this.title)}
          name=${ln(this.name)}
          value=${ln(this.value)}
          aria-disabled=${this.disabled?"true":"false"}
          tabindex=${this.disabled?"-1":"0"}
        >
          ${o}
        </button>
      `}handleLabelSlotChange(){const t=this.labelSlot?.assignedNodes({flatten:!0})??[],r=t.filter(c=>c.nodeType===Node.ELEMENT_NODE),o=t.filter(c=>c.nodeType===Node.TEXT_NODE&&c.textContent?.trim()!==""),a=c=>["wa-icon","mov-icon","svg"].includes(c.localName),s=r.some(a);this.isIconButton=o.length===0&&s}};Y([Br(".button")],ct.prototype,"button",void 0),Y([Br("slot:not([name])")],ct.prototype,"labelSlot",void 0),Y([sn()],ct.prototype,"isIconButton",void 0),Y([sn()],ct.prototype,"hasLabel",void 0),Y([sn()],ct.prototype,"hasStart",void 0),Y([sn()],ct.prototype,"hasEnd",void 0),Y([he()],ct.prototype,"title",void 0),Y([he({reflect:!0})],ct.prototype,"appearance",void 0),Y([he({reflect:!0})],ct.prototype,"variant",void 0),Y([he({reflect:!0})],ct.prototype,"size",void 0),Y([he({attribute:"with-caret",type:Boolean,reflect:!0})],ct.prototype,"withCaret",void 0),Y([he({type:Boolean,reflect:!0})],ct.prototype,"disabled",void 0),Y([he({type:Boolean,reflect:!0})],ct.prototype,"loading",void 0),Y([he({type:Boolean,reflect:!0})],ct.prototype,"pill",void 0),Y([he()],ct.prototype,"type",void 0),Y([he({reflect:!0})],ct.prototype,"name",void 0),Y([he({reflect:!0})],ct.prototype,"value",void 0),Y([he({reflect:!0})],ct.prototype,"href",void 0),Y([he()],ct.prototype,"target",void 0),Y([he()],ct.prototype,"rel",void 0),Y([he()],ct.prototype,"download",void 0),Y([he({reflect:!0})],ct.prototype,"form",void 0),ct=Y([pt("mov-button")],ct);var bn=class extends nt{constructor(...t){super(...t),this.mode="menu",this.active=!1,this.label="",this.icon="",this.activeIcon="",this.appearance="accent",this.size="medium",this.disabled=!1,this.loading=!1}static{this.styles=Pt`
    :host {
      display: inline-flex;
      vertical-align: middle;
    }

    /* Base button styling */
    mov-button {
      position: relative;
    }

    /* Single icon modes - simple rotation in place */
    .single-icon-mode mov-icon {
      transition: transform 0.3s ease;
      display: block;
    }

    .chevron-icon {
      transform: rotate(0deg);
    }

    :host([active]) .chevron-icon {
      transform: rotate(90deg);
    }

    .expand-icon {
      transform: rotate(0deg);
    }

    :host([active]) .expand-icon {
      transform: rotate(180deg);
    }

    /* Two icon modes - positioned for smooth swap */
    .two-icon-mode {
      position: relative;
    }

    .two-icon-mode mov-icon {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      transition:
        opacity 0.25s ease,
        transform 0.3s ease;
    }

    /* Default state: inactive visible, active hidden */
    .inactive-icon {
      opacity: 1;
      transform: translate(-50%, -50%) scale(1);
    }

    .active-icon {
      opacity: 0;
      transform: translate(-50%, -50%) scale(0.8);
    }

    /* Active state: inactive hidden, active visible */
    :host([active]) .inactive-icon {
      opacity: 0;
      transform: translate(-50%, -50%) scale(0.8);
    }

    :host([active]) .active-icon {
      opacity: 1;
      transform: translate(-50%, -50%) scale(1);
    }

    /* Play-pause uses single icon swap without positioning issues */
    .play-pause-icon {
      transition: opacity 0.2s ease;
      display: block;
    }

    /* Simple click feedback without disrupting layout */
    mov-button:active {
      transform: scale(0.96);
    }

    /* Loading state */
    :host([loading]) mov-icon {
      animation: spin 1s linear infinite;
    }

    @keyframes spin {
      to {
        transform: rotate(360deg);
      }
    }

    /* Hover effects */
    mov-button:hover:not(:disabled) {
      filter: brightness(1.05);
    }

    /* Focus visible enhancement */
    mov-button:focus-visible {
      outline: 2px solid var(--mov-color-fill-loud, currentColor);
      outline-offset: 2px;
    }

    /* Ensure proper centering for all modes */
    mov-button.single-icon-mode {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    /* Fix icon sizing consistency */
    mov-icon {
      flex-shrink: 0;
    }
  `}connectedCallback(){super.connectedCallback(),this.label||(this.label=this._getDefaultLabel())}render(){const t=this.active?this.activeLabel??this.label:this.label,r={"two-icon-mode":["menu","custom","theme"].includes(this.mode),"single-icon-mode":["chevron","expand","play-pause"].includes(this.mode)};return le`
      <mov-button
        @click=${this._onClick}
        .appearance=${ln(this.appearance)}
        .size=${ln(this.size)}
        ?disabled=${ln(this.disabled)}
        ?loading=${ln(this.loading)}
        .title=${ln(this.title)}
        class=${Ot(r)}
        title=${t}
        aria-label=${t}
        aria-pressed=${this.active?"true":"false"}
        icon-only
      >
        ${this._renderIcons()}
      </mov-button>
    `}_getDefaultLabel(){switch(this.mode){case"menu":return"Toggle menu";case"chevron":return"Toggle expand";case"theme":return"Toggle theme";case"play-pause":return"Toggle play";case"expand":return"Toggle expand";case"custom":return"Toggle";default:return"Toggle"}}_getIcons(){switch(this.mode){case"menu":return{inactive:"menu-2",active:"x"};case"chevron":return{inactive:"chevron-right",active:"chevron-right"};case"theme":return{inactive:"moon",active:"sun"};case"play-pause":return{inactive:"player-play",active:"player-pause"};case"expand":return{inactive:"arrow-autofit-down",active:"arrow-autofit-down"};case"custom":return{inactive:this.icon,active:this.activeIcon};default:return{inactive:"",active:""}}}_renderIcons(){const t=this._getIcons();return t.inactive?this.mode==="chevron"?le`<mov-icon
        class="chevron-icon"
        name=${t.inactive}
      ></mov-icon>`:this.mode==="expand"?le`<mov-icon
        class="expand-icon"
        name=${t.inactive}
      ></mov-icon>`:this.mode==="play-pause"?le`<mov-icon
        class="play-pause-icon"
        name=${this.active?t.active:t.inactive}
      ></mov-icon>`:le`
      <mov-icon
        class="inactive-icon"
        name=${t.inactive}
      ></mov-icon>
      <mov-icon
        class="active-icon"
        name=${t.active}
      ></mov-icon>
    `:Pe}_onClick(){if(this.disabled||this.loading)return;const t=this.active;this.active=!this.active,this.dispatchEvent(new CustomEvent("toggle",{detail:{value:this.active,oldValue:t,mode:this.mode},bubbles:!0,composed:!0}))}toggle(){this._onClick()}setActive(t){this.active=t}};Y([he({type:String})],bn.prototype,"mode",void 0),Y([he({type:Boolean,reflect:!0})],bn.prototype,"active",void 0),Y([he({type:String})],bn.prototype,"label",void 0),Y([he({type:String})],bn.prototype,"activeLabel",void 0),Y([he({type:String})],bn.prototype,"icon",void 0),Y([he({type:String})],bn.prototype,"activeIcon",void 0),Y([he({type:String,reflect:!0})],bn.prototype,"appearance",void 0),Y([he({type:String,reflect:!0})],bn.prototype,"size",void 0),Y([he({type:Boolean})],bn.prototype,"disabled",void 0),Y([he({type:Boolean,reflect:!0})],bn.prototype,"loading",void 0),bn=Y([pt("toggle-button")],bn);var Nd="important",S3=" !"+Nd,Bn=Wi(class extends Wo{constructor(e){if(super(e),e.type!==Uo.ATTRIBUTE||e.name!=="style"||e.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce((t,r)=>{const o=e[r];return o==null?t:t+`${r=r.includes("-")?r:r.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${o};`},"")}update(e,[t]){const{style:r}=e.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(t)),this.render(t);for(const o of this.ft)t[o]??(this.ft.delete(o),o.includes("-")?r.removeProperty(o):r[o]=null);for(const o in t){const a=t[o];if(a!=null){this.ft.add(o);const s=typeof a=="string"&&a.endsWith(S3);o.includes("-")||s?r.setProperty(o,s?a.slice(0,-11):a,s?Nd:""):r[o]=a}}return Vn}}),A3=Object.fromEntries(Object.entries(kl).map(([e,t])=>[e,$d(t)])),{IconAdjustmentsHorizontal:dS,IconArrowsHorizontal:hS,IconArrowsLeftRight:fS,IconArrowAutofitDown:pS,IconArrowAutofitHeight:M3,IconArrowAutofitLeft:gS,IconArrowAutofitRight:mS,IconArrowAutofitWidth:x3,IconArrowBigLeft:vS,IconArrowBigRight:bS,IconArrowsMove:wS,IconArrowsMoveVertical:_S,IconArrowsVertical:yS,IconBook:kS,IconBookReturn:ES,IconBookUpload:SS,IconBookmark:I3,IconBookmarkOff:O3,IconBookmarks:AS,IconBoxAlignTop:MS,IconCategory:C3,IconCheck:wa,IconChevronLeft:xS,IconChevronRight:IS,IconAlertCircle:OS,IconCircleCheck:CS,IconCircleX:TS,IconHelp:LS,IconInfoCircle:RS,IconComic1:PS,IconComic1Flat:$S,IconComic2:zS,IconComic2Flat:DS,IconComic3:NS,IconComic3Flat:BS,IconDeviceFloppy:HS,IconDotsVertical:FS,IconEReader1:GS,IconEReader1Flat:US,IconEReader2:WS,IconEReader2Flat:VS,IconExternalLink:ZS,IconEye:T3,IconEyeOff:L3,IconFileDownload:jS,IconFilePercent:qS,IconHandClick:KS,IconKeyboard:YS,IconLayoutBottombar:XS,IconLayoutBottombarInactive:JS,IconLayoutSidebar:QS,IconLayoutSidebarInactive:eA,IconLayoutSidebarRight:tA,IconLayoutSidebarRightInactive:nA,IconListNumbers:rA,IconLoader2:iA,IconLocationCog:oA,IconMenu2:aA,IconMenuDeep:sA,IconMessage:lA,IconMoon:cA,IconPage:uA,IconPageFlat:dA,IconPalette:hA,IconPencil:fA,IconPencilCog:pA,IconPhoto:gA,IconPhotoOff:mA,IconPin:vA,IconPlayerPause:bA,IconPlayerPlay:wA,IconRefresh:R3,IconSettings:_A,IconSettingsOff:yA,IconSpacingVertical:kA,IconSun:EA,IconTrash:SA,IconWorldCog:AA,IconX:Al,IconZoom:MA,IconZoomCancel:P3,IconZoomIn:$3,IconZoomInArea:xA,IconZoomOut:z3,IconZoomOutArea:IA,IconZoomPan:OA}=A3,hr=class extends nt{constructor(...t){super(...t),this.color="#000000",this.size=26,this.radius="50%",this.contrastColor="#FFFFFF",this.checked=!1}static{this.styles=Pt`
    :host {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      position: relative;
      box-sizing: border-box;
      -webkit-tap-highlight-color: transparent;
    }

    .swatch {
      position: relative;
      width: 100%;
      height: 100%;
      border-radius: var(--radius);
      background-color: var(--color);
      display: flex;
      align-items: center;
      justify-content: center;
      transition: transform 0.15s ease;
      box-sizing: border-box;
      border: 1px solid var(--theme-border-color, rgba(0, 0, 0, 0.1));
      color: var(--contrast-color);
    }

    :host(:hover) .swatch {
      transform: scale(1.1);
    }

    ::slotted(*) {
      width: 60%;
      height: 60%;
    }

    .check-icon {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      color: var(--contrast-color);
      opacity: 0;
      transition: opacity 0.15s ease;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
      font-size: 16px;
      line-height: 1;
    }

    .check-icon svg {
      width: 60%;
      height: 60%;
    }

    :host([checked]) .check-icon {
      opacity: 1;
    }
  `}willUpdate(t){t.has("color")&&(this.contrastColor=pi(this.color)),t.has("selected")&&(this.checked=this.color.toLowerCase()===this.selected?.toLowerCase())}handleClick(){this.dispatchEvent(new CustomEvent("input",{detail:{value:this.color},bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent("change",{detail:{value:this.color},bubbles:!0,composed:!0}))}render(){const t={width:`${this.size}px`,height:`${this.size}px`},r={"--radius":typeof this.radius=="number"?`${this.radius}px`:this.radius,"--color":this.color,"--contrast-color":this.contrastColor};return le`
      <div style=${Bn(t)}>
        <div
          class="swatch"
          style=${Bn(r)}
          @click=${this.handleClick}
        >
          <slot></slot>
          <span class="check-icon"> ${wa} </span>
        </div>
      </div>
    `}};Y([he({type:String})],hr.prototype,"color",void 0),Y([he({type:String})],hr.prototype,"selected",void 0),Y([he({type:Number})],hr.prototype,"size",void 0),Y([he({type:String})],hr.prototype,"radius",void 0),Y([he({state:!0})],hr.prototype,"contrastColor",void 0),Y([he({type:Boolean,reflect:!0})],hr.prototype,"checked",void 0),hr=Y([pt("color-swatch")],hr);function D3(e){const t=e.to("oklch"),r=t.coords[2],o=t.coords[1],a=t.coords[0],s=[.95,.9,.8,.7,.6,.5,.4,.3,.2,.1,.05],c=s.map(h=>new lt("oklch",[h,o,r]).toString({format:"hex"}));let d=-1,u=1/0;for(let h=0;h<s.length;h++){const f=Math.abs(s[h]-a);f<u&&(u=f,d=h)}return d!==-1&&(c[d]=e.toString({format:"hex"})),c.map(h=>h.toUpperCase())}function N3(e){const t=e.to("hsl"),r=[.97,.9,.8,.7,.6,.5,.4,.3,.2,.1,.05],o=[];for(const a of r){const s=t.clone();s.coords[2]=a*100,a>.8?s.coords[1]*=.4:a>.6?s.coords[1]*=.8:a<.3&&(s.coords[1]=Math.min(100,s.coords[1]*1.1)),o.push(s.toString({format:"hex"}).toUpperCase())}return o}function B3(e){const t=[],r=[95,90,80,70,60,50,40,30,20,10,5],o=e.to("hsl");for(const a of r){const s=o.clone();s.coords[2]=a,t.push(s.toString({format:"hex"}).toUpperCase())}return t}function H3(e){const t=new Array(11).fill(""),r=e.to("hsl"),o={lightest:{lightness:95,rotate:-10,saturate:-30},darkest:{lightness:10,rotate:10,saturate:10}},a=5,s=5,c=(o.lightest.lightness-50)/a,d=(50-o.darkest.lightness)/s,u=o.lightest.rotate/a,h=o.darkest.rotate/s,f=o.lightest.saturate/a,b=o.darkest.saturate/s;for(let v=1;v<=a;v++){const g=a-v,m=r.clone();m.coords[2]+=c*(v-.5),m.coords[0]+=u*v,m.coords[1]+=f*v,t[g]=m.toString({format:"hex"})}t[5]=r.clone().toString({format:"hex"});for(let v=1;v<=s;v++){const g=a+v,m=r.clone();m.coords[2]-=d*(v-.5),m.coords[0]+=h*v,m.coords[1]+=b*v,t[g]=m.toString({format:"hex"})}return t}function F3(e){const[t,r,o]=e.to("hsl").coords,a=new Array(11);a[5]=e.toString({format:"hex"});for(let s=0;s<5;s++){const c=(5-s)/6,d=o+(100-o)*c;a[s]=new lt("hsl",[t,r-r*c,d]).toString({format:"hex"})}for(let s=0;s<5;s++){const c=(s+1)/6,d=o-o*c,u=r+(100-r)*c;a[s+6]=new lt("hsl",[t,u,d]).toString({format:"hex"})}return a}function Bd(e,t="steps"){let r;try{r=lt.get(e)}catch{r=lt.get(ml.navy)}switch(t){case"saturation":return N3(r);case"lightness":return B3(r);case"mantine":return F3(r);case"chakra":return H3(r);default:return D3(r)}}var fr=class extends nt{constructor(...t){super(...t),this.baseColor="#228be6",this.mode="steps",this.orientation="horizontal",this.value="",this.gradient=[]}static{this.styles=Pt`
    :host {
      display: flex;
      gap: var(--palette-gap, 4px);
      align-items: center;
      justify-content: center;
    }

    .swatch {
      width: var(--swatch-size, 22px);
      height: var(--swatch-size, 22px);
      border-radius: var(--swatch-radius, 4px);
      border: 1px solid var(--theme-border-color, #ccc);
      transition: transform 0.15s ease;
      cursor: pointer;
      background-clip: content-box;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
    }
    .swatch-inner {
      width: 100%;
      height: 100%;
      border-radius: var(--swatch-radius, 4px);
      background-color: var(--color);
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .checkmark {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      opacity: 0;
      transition: opacity 0.15s ease;
      width: 100%;
      height: 100%;
      align-items: center;
      justify-content: center;
      display: flex;
      color: var(--text-color);
      font-weight: bold;
      font-size: 16px;
      line-height: 1;
    }

    .checkmark svg {
      width: 60%;
      height: 60%;
    }
    .swatch[checked] .checkmark {
      opacity: 1;
    }
    .swatch:hover {
      transform: scale(1.1);
    }
  `}willUpdate(t){(t.has("baseColor")||t.has("mode"))&&(this.gradient=Bd(this.baseColor,this.mode)??[])}handleSwatchClick(t){this.value=t,this.dispatchEvent(new CustomEvent("input",{detail:{value:this.value},bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value},bubbles:!0,composed:!0}))}render(){return le`
      ${this.gradient.map(t=>le`
          <div
            class="swatch"
            ?checked=${this.selected&&t.toLowerCase()===this.selected.toLowerCase()}
            title=${t}
            @click=${()=>this.handleSwatchClick(t)}
          >
            <div
              class="swatch-inner"
              style="--color: ${t}; --text-color: ${pi(t)}"
            >
              <span class="checkmark">${wa}</span>
            </div>
          </div>
        `)}
    `}};Y([he({type:String})],fr.prototype,"baseColor",void 0),Y([he({type:String})],fr.prototype,"mode",void 0),Y([he({type:String,reflect:!0})],fr.prototype,"orientation",void 0),Y([he({type:String})],fr.prototype,"selected",void 0),Y([he({type:String,reflect:!0})],fr.prototype,"value",void 0),Y([sn()],fr.prototype,"gradient",void 0),fr=Y([pt("color-palette")],fr);var _a=class extends nt{constructor(...t){super(...t),this.value=""}static{this.styles=Pt`
    :host {
      display: flex;
      flex-direction: column;
      gap: 4px;
      width: 100%;
    }
    .SwatchGroup {
      display: grid;
      grid-template-columns: auto 1fr;
      align-items: center;
      column-gap: 8px;
    }
    .ColorName {
      font-size: 12px;
      color: var(--theme-text-color);
      text-transform: capitalize;
      min-width: 64px;
    }
    .Swatches {
      display: grid;
      grid-template-columns: repeat(9, 16px);
      gap: 8px;
      align-items: center;
    }
    .ThemeRadio {
      color: var(--mov-color-on-loud);
      height: 20px;
      width: 20px;
      border-radius: 3px;
      margin: 0;
      position: relative;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.2);
    }
    .ThemeRadio:hover,
    .ThemeRadio:focus-visible {
      outline: 2px solid var(--theme-border-color);
      outline-offset: 1px;
    }
    .ThemeRadio.selected {
      box-shadow:
        0 0 0 2px var(--theme-body-background),
        0 0 0 3px var(--theme-text-color);
    }
    .ThemeRadio svg {
      width: 10px;
      height: 10px;
    }
    .ThemeRadio.selected .icon-tabler-check {
      display: inline;
    }
    .ThemeRadio:not(.selected) .icon-tabler-check {
      display: none;
    }
  `}handleColorClick(t){this.value=t.currentTarget.title,this.dispatchEvent(new CustomEvent("input",{detail:{value:this.value},bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value},bubbles:!0,composed:!0}))}render(){const t=Object.keys(yt).filter(o=>!["dark","gray","zinc","neutral","stone"].includes(o)),r=[200,300,400,500,600,700,800,900,950];return t.map(o=>le` <div class="SwatchGroup">
        <span class="ColorName">${o}</span>
        <div class="Swatches">${r.map(a=>{const s=yt[o][a],c=pi(s);return le`
          <span
            title="${s}"
            class="${Ot({ThemeRadio:!0,selected:this.selected?.toLowerCase()===s.toLowerCase()})}"
            style="background-color: ${s}; color: ${c}"
            @click=${this.handleColorClick}
          >
            ${wa}
          </span>
        `})}</div>
      </div>`)}};Y([he({type:String,reflect:!0})],_a.prototype,"value",void 0),Y([he({type:String})],_a.prototype,"selected",void 0),_a=Y([pt("color-panel")],_a);var Ln=class extends nt{constructor(...t){super(...t),this.value="#228be6",this.swatches=null,this.mode="popup",this.opened=!1,this.popupDirection="left",this.sourceSpace="srgb",this.hsv={h:0,s:0,v:0},this.saturationThumbPosition={x:0,y:0},this.hueThumbPosition=0,this.isDraggingSaturation=!1,this.isDraggingHue=!1}static{this.styles=Pt`
    :host {
      display: inline-block;
      position: relative;
    }

    .picker-container {
      width: 250px;
      box-sizing: border-box;
    }

    .picker-container.popup {
      position: absolute;
      top: calc(100% + 4px);
      left: 0;
      z-index: 10;
      border: 1px solid var(--theme-border-color);
      border-radius: 8px;
      background: var(--theme-background-color);
      padding: 12px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    }

    .picker-container.popup.right {
      left: auto;
      right: 0;
    }

    .saturation-panel {
      position: relative;
      width: 100%;
      height: 180px;
      border-radius: 8px;
      cursor: crosshair;
      -webkit-tap-highlight-color: transparent;
    }

    .saturation-overlay-1,
    .saturation-overlay-2 {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      border-radius: inherit;
    }

    .saturation-overlay-1 {
      background: linear-gradient(to right, #fff, transparent);
    }

    .saturation-overlay-2 {
      background: linear-gradient(to top, #000, transparent);
    }

    .saturation-thumb {
      position: absolute;
      width: 16px;
      height: 16px;
      border: 2px solid #fff;
      border-radius: 50%;
      box-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
      transform: translate(-8px, -8px);
      pointer-events: none;
    }

    .sliders {
      display: flex;
      flex-direction: column;
      gap: 12px;
      margin-top: 12px;
    }

    .hue-slider {
      position: relative;
      width: 100%;
      height: 10px;
      border-radius: 5px;
      background: linear-gradient(to right, #f00, #ff0, #0f0, #0ff, #00f, #f0f, #f00);
      cursor: pointer;
    }

    .hue-thumb {
      position: absolute;
      top: 50%;
      width: 16px;
      height: 16px;
      border: 2px solid #fff;
      border-radius: 50%;
      box-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
      transform: translate(-8px, -50%);
      pointer-events: none;
    }

    .swatches {
      display: grid;
      grid-template-columns: repeat(10, 1fr);
      gap: 8px;
      margin-top: 12px;
    }

    .swatch {
      width: 100%;
      aspect-ratio: 1;
      border-radius: 4px;
      border: 1px solid #dee2e6;
      cursor: pointer;
      padding: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
      transition: transform 0.1s;
    }

    .swatch:hover {
      transform: scale(1.1);
    }

    .popup-trigger {
      width: 96px;
      height: 32px;
      border-radius: 4px;
      border: 1px solid var(--theme-background-color);
      padding: 4px;
      box-sizing: border-box;
      cursor: pointer;
      background-color: var(--theme-hightlight-color);
    }

    .preview {
      width: 100%;
      height: 100%;
      border-radius: 2px;
    }
  `}connectedCallback(){super.connectedCallback(),this.updateStateFromValue(this.value),window.addEventListener("mousemove",this.handleDrag.bind(this)),window.addEventListener("mouseup",this.handleDragEnd.bind(this)),window.addEventListener("touchmove",this.handleDrag.bind(this),{passive:!1}),window.addEventListener("touchend",this.handleDragEnd.bind(this))}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("mousemove",this.handleDrag.bind(this)),window.removeEventListener("mouseup",this.handleDragEnd.bind(this)),window.removeEventListener("touchmove",this.handleDrag.bind(this)),window.removeEventListener("touchend",this.handleDragEnd.bind(this)),window.removeEventListener("click",this.handleClickOutside.bind(this))}updated(t){t.has("mode")&&(this.mode==="popup"?window.addEventListener("click",this.handleClickOutside.bind(this)):window.removeEventListener("click",this.handleClickOutside.bind(this)))}willUpdate(t){t.has("value")&&this.updateStateFromValue(this.value),t.has("mode")&&this.mode==="inline"&&(this.opened=!1)}handleClickOutside(t){this.opened&&!t.composedPath().includes(this)&&(this.opened=!1)}togglePopup(){if(this.mode==="popup"){if(!this.opened){const t=this.getBoundingClientRect(),r=250;let o;const a=this.closest("mov-drawer");if(a?.shadowRoot){const s=a.shadowRoot.querySelector("dialog");s?o=s.getBoundingClientRect():o={left:0,right:window.innerWidth}}else o={left:0,right:window.innerWidth};t.left+r>o.right?t.right-r>o.left?this.popupDirection="right":this.popupDirection="left":this.popupDirection="left"}this.opened=!this.opened}}isSameColor(t,r){return!t||!r?!1:lt.deltaE(t,r,{method:"2000"})<1}renderCheckIcon(t){return le`
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
        style=${Bn({stroke:pi(t)})}
      >
        <path d="M5 12l5 5l10 -10" />
      </svg>
    `}renderPickerBody(){const t={backgroundColor:`hsl(${this.hsv.h}, 100%, 50%)`},r={h:this.hsv.h,s:this.hsv.s*100,v:this.hsv.v*100},o={top:`${this.saturationThumbPosition.y}%`,left:`${this.saturationThumbPosition.x}%`,backgroundColor:new lt("hsv",[r.h,r.s,r.v]).toString({format:"hex"})},a={left:`${this.hueThumbPosition}%`};return le`
      <div
        class="saturation-panel"
        style=${Bn(t)}
        @mousedown=${this.handleSaturationDragStart.bind(this)}
        @touchstart=${this.handleSaturationDragStart.bind(this)}
      >
        <div class="saturation-overlay-1"></div>
        <div class="saturation-overlay-2"></div>
        <div
          class="saturation-thumb"
          style=${Bn(o)}
        ></div>
      </div>

      <div class="sliders">
        <div
          class="hue-slider"
          @mousedown=${this.handleHueDragStart.bind(this)}
          @touchstart=${this.handleHueDragStart.bind(this)}
        >
          <div
            class="hue-thumb"
            style=${Bn(a)}
          ></div>
        </div>
      </div>

      <div class="swatches">
        ${(this.swatches||Object.entries(yt).filter(([s])=>!["dark","gray","zinc","neutral","stone"].includes(s)).map(([,s])=>s[600])).map(s=>le`
            <button
              class="swatch"
              title=${s}
              style=${Bn({backgroundColor:s})}
              @click=${()=>this.selectSwatch(s)}
            >
              ${this.isSameColor(this.value,s)?this.renderCheckIcon(s):""}
            </button>
          `)}
      </div>
    `}render(){const t={"picker-container":!0,popup:this.mode==="popup",right:this.popupDirection==="right"},r=this.renderPickerBody();return this.mode==="popup"?le`
        <div
          class="popup-trigger"
          @click=${this.togglePopup}
        >
          <div
            class="preview"
            style=${Bn({backgroundColor:this.value})}
          ></div>
        </div>
        ${this.opened?le`<div class=${Ot(t)}>${r}</div>`:""}
      `:le`<div class=${Ot(t)}>${r}</div>`}parseColor(t){try{return lt.get(t)}catch(r){return console.error(`[mov-color-picker] Invalid color value: "${t}"`,r),null}}colorToHsv(t){let[r,o,a]=t.to("srgb").to("hsv").coords;return Number.isNaN(r)&&(r=this.hsv.h||0,o=0),o=Math.max(0,Math.min(100,o))/100,a=Math.max(0,Math.min(100,a))/100,{h:r,s:o,v:a}}updateStateFromValue(t){const r=this.parseColor(t);if(!r)return;this.sourceSpace=r.space.id;const o=this.colorToHsv(r);(o.h!==this.hsv.h||o.s!==this.hsv.s||o.v!==this.hsv.v)&&(this.hsv=o,this.updateThumbPositions())}dispatchInput(){this.dispatchEvent(new CustomEvent("input",{detail:{value:this.value},bubbles:!0,composed:!0}))}dispatchChange(){this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value},bubbles:!0,composed:!0}))}updateValueFromHsv(){const t={h:this.hsv.h,s:this.hsv.s*100,v:this.hsv.v*100},r=new lt("hsv",[t.h,t.s,t.v]);let o;try{!this.sourceSpace||["srgb","hsl","hsv"].includes(this.sourceSpace)?o=r.to("srgb").toString({format:"hex"}):o=r.to(this.sourceSpace).toString({precision:5})}catch(a){console.error(`[mov-color-picker] Could not convert color to space ${this.sourceSpace}`,a),o=r.to("srgb").toString({format:"hex"})}this.value!==o&&(this.value=o,this.dispatchInput())}updateThumbPositions(){this.saturationThumbPosition={x:this.hsv.s*100,y:(1-this.hsv.v)*100},this.hueThumbPosition=this.hsv.h/360*100}handleSaturationDragStart(t){t.preventDefault(),this.isDraggingSaturation=!0,this.saturationPanel=this.shadowRoot?.querySelector(".saturation-panel"),this.updateSaturation(t)}handleHueDragStart(t){t.preventDefault(),this.isDraggingHue=!0,this.hueSlider=this.shadowRoot?.querySelector(".hue-slider"),this.updateHue(t)}handleDrag(t){this.isDraggingSaturation&&this.updateSaturation(t),this.isDraggingHue&&this.updateHue(t)}handleDragEnd(){(this.isDraggingSaturation||this.isDraggingHue)&&this.dispatchChange(),this.isDraggingSaturation=!1,this.isDraggingHue=!1}getEventPosition(t){return"touches"in t?{clientX:t.touches[0].clientX,clientY:t.touches[0].clientY}:{clientX:t.clientX,clientY:t.clientY}}updateSaturation(t){if(!this.saturationPanel)return;const{clientX:r,clientY:o}=this.getEventPosition(t),a=this.saturationPanel.getBoundingClientRect(),s=Math.max(0,Math.min(r-a.left,a.width)),c=Math.max(0,Math.min(o-a.top,a.height));this.hsv.s=s/a.width,this.hsv.v=1-c/a.height,this.updateValueFromHsv(),this.updateThumbPositions()}updateHue(t){if(!this.hueSlider)return;const{clientX:r}=this.getEventPosition(t),o=this.hueSlider.getBoundingClientRect(),a=Math.max(0,Math.min(r-o.left,o.width));this.hsv.h=a/o.width*360,this.updateValueFromHsv(),this.updateThumbPositions()}selectSwatch(t){this.value=t,this.dispatchInput(),this.dispatchChange()}};Y([he({type:String})],Ln.prototype,"value",void 0),Y([he({type:Array})],Ln.prototype,"swatches",void 0),Y([he({type:String})],Ln.prototype,"mode",void 0),Y([sn()],Ln.prototype,"opened",void 0),Y([sn()],Ln.prototype,"popupDirection",void 0),Y([sn()],Ln.prototype,"sourceSpace",void 0),Y([sn()],Ln.prototype,"hsv",void 0),Y([sn()],Ln.prototype,"saturationThumbPosition",void 0),Y([sn()],Ln.prototype,"hueThumbPosition",void 0),Ln=Y([pt("mov-color-picker")],Ln);var Hd=(e,t,r)=>{for(const o of t)if(o[0]===e)return(0,o[1])();return r?.()},pr=class extends nt{constructor(...t){super(...t),this.value="",this.labelPosition="side",this.size="medium",this._options=[],this.resizeObserver=new ResizeObserver(()=>this.updateThumbPosition())}static{this.styles=Pt`
    :host {
      width: 100%;
      display: block;
    }
    .segmented-control {
      position: relative;
      display: flex;
      gap: 0.25rem;
      border-radius: 0.5rem;
      background-color: var(--theme-border-color);
      padding: 0.25rem;
      flex-wrap: wrap;
    }
    .thumb {
      position: absolute;
      top: 0;
      left: 0;
      border-radius: 0.5rem;
      background-color: var(--mov-color-fill-loud);
      transition:
        transform 0.3s cubic-bezier(0.4, 0, 0.2, 1),
        width 0.3s cubic-bezier(0.4, 0, 0.2, 1),
        height 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      z-index: 1;
    }
    .option {
      flex: 1;
      text-align: center;
      z-index: 2; /* Ensure button is above thumb */
      position: relative; /* Needed to correctly position the button */
    }

    .button {
      /* The button now acts as the interactive label */
      width: 100%;
      display: flex;
      cursor: pointer;
      align-items: center;
      justify-content: center;
      border-radius: 0.5rem;
      border: none;
      /* Default colors when not selected */
      color: var(--theme-text-color);
      background-color: transparent;
      transition: color 0.15s ease-in-out;
      flex-direction: row;
      gap: 0.25rem;
      padding: 0.5rem 0.75rem; /* Default padding (medium) */
      font-size: 1rem; /* Default font-size (medium) */
      box-sizing: border-box; /* Include padding/border in element's total width/height */
    }

    /* Selected State Styles - Driven by the 'selected' class */
    .button.selected {
      color: var(--mov-color-on-loud);
      font-weight: 600;
    }

    /* Size Variations */
    .button.small {
      padding: 0.25rem 0.5rem;
      font-size: 0.875rem;
    }
    .button.large {
      padding: 0.75rem 1rem;
      font-size: 1.125rem;
    }

    /* Label Position Variations */
    .button.bottom {
      flex-direction: column;
    }
    .button.bottom.small {
      padding: 0.25rem;
    }
    .button.bottom.medium {
      padding: 0.5rem;
    }
    .button.bottom.large {
      padding: 0.75rem;
    }
  `}connectedCallback(){super.connectedCallback(),this.resizeObserver.observe(this)}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver.unobserve(this)}handleClick(t,r){this.value=r,this.dispatchEvent(new CustomEvent("change",{detail:this.value,bubbles:!0,composed:!0}))}handleSlotChange(){this._options=this._slotEl.assignedNodes({flatten:!0}).filter(t=>t.nodeName==="SEGMENTED-CONTROL-OPTION").map(t=>({value:t.getAttribute("value")??"",label:t.getAttribute("label")??"",icon:t.getAttribute("icon")??void 0}))}firstUpdated(){this.handleSlotChange(),this.updateComplete.then(()=>this.updateThumbPosition())}updated(t){super.updated(t),(t.has("value")||t.has("_options")||t.has("labelPosition")||t.has("size"))&&Promise.resolve().then(()=>this.updateThumbPosition())}updateThumbPosition(){if(!this.thumb)return;const t=this.shadowRoot?.querySelector(".button.selected");if(t){const{offsetWidth:r,offsetHeight:o}=t,a=t.getBoundingClientRect(),s=this.shadowRoot?.querySelector(".segmented-control")?.getBoundingClientRect(),c=a.left-(s?.left??0),d=a.top-(s?.top??0);this.thumb.style.transform=`translate(${c}px, ${d}px)`,this.thumb.style.width=`${r}px`,this.thumb.style.height=`${o}px`}else this.thumb.style.width="0px",this.thumb.style.height="0px"}render(){return le`
      <div class="segmented-control">
        <div class="thumb"></div>
        ${this._options.map(t=>le`
            <div
              class="option"
              title="${this.labelPosition==="tooltip"?t.label:Pe}"
            >
              <button
                class="${Ot({button:!0,selected:this.value===t.value,bottom:this.labelPosition==="bottom",small:this.size==="small",medium:this.size==="medium",large:this.size==="large"})}"
                @click=${r=>this.handleClick(r,t.value)}
                role="radio"
                aria-checked="${this.value===t.value}"
              >
                ${t.icon?le`<mov-icon
                      name="${t.icon}"
                      .size=${Hd(this.size,[["small",()=>"16px"],["medium",()=>"24px"],["large",()=>"36px"]],()=>this.size)}
                    ></mov-icon>`:Pe}
                ${this.labelPosition!=="tooltip"?le`<span>${t.label}</span>`:Pe}
              </button>
            </div>
          `)}
      </div>
      <div style="display: none;">
        <slot @slotchange=${this.handleSlotChange}></slot>
      </div>
    `}};Y([he({type:String,reflect:!0})],pr.prototype,"value",void 0),Y([he({type:String})],pr.prototype,"labelPosition",void 0),Y([he({type:String})],pr.prototype,"size",void 0),Y([sn()],pr.prototype,"_options",void 0),Y([Br(".thumb")],pr.prototype,"thumb",void 0),Y([Br("slot")],pr.prototype,"_slotEl",void 0),pr=Y([pt("segmented-control")],pr);var so=class extends nt{constructor(...t){super(...t),this.value="",this.label=""}createRenderRoot(){return this}};Y([he({type:String,reflect:!0})],so.prototype,"value",void 0),Y([he({type:String,reflect:!0})],so.prototype,"label",void 0),Y([he({type:String,reflect:!0})],so.prototype,"icon",void 0),so=Y([pt("segmented-control-option")],so);var gr=class extends nt{constructor(...t){super(...t),this.name="",this.checked=!1,this.disabled=!1,this.design="graphical",this.textOn="ON",this.textOff="OFF"}static{this.styles=Pt`
    :host {
      --switch-width: 3rem;
      --switch-height: 1.5rem;
      --knob-size: 1.25rem;
      display: inline-block;
    }

    input {
      display: none;
    }

    .switch {
      display: inline-block;
      position: relative;
      width: var(--switch-width);
      height: var(--switch-height);
      border-radius: var(--switch-height);
      background-color: #d7062a;
      border: 1px solid #d7062a;
      transition:
        background-color 0.3s,
        border-color 0.3s;
      cursor: pointer;
    }

    input:checked + .switch {
      background-color: #50ac5d;
      border-color: #50ac5d;
    }

    .switch.textual {
      background-color: var(--mov-color-on-loud);
      border-color: var(--mov-color-on-loud);
    }

    input:checked + .switch.textual {
      background-color: var(--mov-color-fill-loud);
      border-color: var(--mov-color-fill-loud);
    }

    input:disabled + .switch {
      background-color: #eee;
      border-color: #ccc;
      cursor: not-allowed;
    }

    .knob {
      position: absolute;
      top: 50%;
      left: 2px;
      transform: translateY(-50%);
      width: var(--knob-size);
      height: var(--knob-size);
      background-color: #fff;
      border-radius: 50%;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
      transition: left 0.3s;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1rem;
      font-weight: bold;
      font-family: Arial;
      color: #333;
    }

    input:checked + .switch .knob {
      left: calc(100% - var(--knob-size) - 2px);
    }

    .switch:focus {
      outline: 2px solid #0a6ed1;
      outline-offset: 2px;
    }

    .icon {
      width: 1rem;
      height: 1rem;
      fill: none;
    }

    .text {
      font-size: 0.75rem;
      font-weight: bold;
      color: #333;
    }
  `}toggleChecked(){this.disabled||(this.checked=!this.checked,this.dispatchEvent(new CustomEvent("change",{detail:{checked:this.checked},bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent("input",{detail:{checked:this.checked},bubbles:!0,composed:!0})))}render(){let t;return this.design==="graphical"?t=le`${this.checked?wa:Al}`:t=le`<span class="text">${this.checked?this.textOn:this.textOff}</span>`,le`
      <input
        type="checkbox"
        id="${this.name}"
        name="${this.name}"
        ?checked=${this.checked}
        ?disabled=${this.disabled}
        @click=${this.toggleChecked}
      />
      <label
        for="${this.name}"
        class="${Ot({switch:!0,[this.design]:!0})}"
      >
        <div class="knob">${t}</div>
      </label>
    `}};Y([he({type:String})],gr.prototype,"name",void 0),Y([he({type:Boolean,reflect:!0})],gr.prototype,"checked",void 0),Y([he({type:Boolean,reflect:!0})],gr.prototype,"disabled",void 0),Y([he({type:String,reflect:!0})],gr.prototype,"design",void 0),Y([he({type:String})],gr.prototype,"textOn",void 0),Y([he({type:String})],gr.prototype,"textOff",void 0),gr=Y([pt("mov-switch")],gr);var G3=pn((e=>{Object.defineProperty(e,"__esModule",{value:!0}),e.BLANK_URL=e.relativeFirstCharacters=e.whitespaceEscapeCharsRegex=e.urlSchemeRegex=e.ctrlCharactersRegex=e.htmlCtrlEntityRegex=e.htmlEntitiesRegex=e.invalidProtocolRegex=void 0,e.invalidProtocolRegex=/^([^\w]*)(javascript|data|vbscript)/im,e.htmlEntitiesRegex=/&#(\w+)(^\w|;)?/g,e.htmlCtrlEntityRegex=/&(newline|tab);/gi,e.ctrlCharactersRegex=/[\u0000-\u001F\u007F-\u009F\u2000-\u200D\uFEFF]/gim,e.urlSchemeRegex=/^.+(:|&colon;)/gim,e.whitespaceEscapeCharsRegex=/(\\|%5[cC])((%(6[eE]|72|74))|[nrt])/g,e.relativeFirstCharacters=[".","/"],e.BLANK_URL="about:blank"})),U3=pn((e=>{Object.defineProperty(e,"__esModule",{value:!0}),e.sanitizeUrl=c;var t=G3();function r(d){return t.relativeFirstCharacters.indexOf(d[0])>-1}function o(d){return d.replace(t.ctrlCharactersRegex,"").replace(t.htmlEntitiesRegex,function(u,h){return String.fromCharCode(h)})}function a(d){return URL.canParse(d)}function s(d){try{return decodeURIComponent(d)}catch{return d}}function c(d){if(!d)return t.BLANK_URL;var u,h=s(d.trim());do h=o(h).replace(t.htmlCtrlEntityRegex,"").replace(t.ctrlCharactersRegex,"").replace(t.whitespaceEscapeCharsRegex,"").trim(),h=s(h),u=h.match(t.ctrlCharactersRegex)||h.match(t.htmlEntitiesRegex)||h.match(t.htmlCtrlEntityRegex)||h.match(t.whitespaceEscapeCharsRegex);while(u&&u.length>0);var f=h;if(!f)return t.BLANK_URL;if(r(f))return f;var b=f.trimStart(),v=b.match(t.urlSchemeRegex);if(!v)return f;var g=v[0].toLowerCase().trim();if(t.invalidProtocolRegex.test(g))return t.BLANK_URL;var m=b.replace(/\\/g,"/");if(g==="mailto:"||g.includes("://"))return m;if(g==="http:"||g==="https:"){if(!a(m))return t.BLANK_URL;var k=new URL(m);return k.protocol=k.protocol.toLowerCase(),k.hostname=k.hostname.toLowerCase(),k.toString()}return m}})),W3=pn(((e,t)=>{(function(r,o){typeof define=="function"&&define.amd?define([],o):typeof e<"u"?o():(o(),r.FileSaver={})})(e,function(){"use strict";function r(h,f){return typeof f>"u"?f={autoBom:!1}:typeof f!="object"&&(console.warn("Deprecated: Expected third argument to be a object"),f={autoBom:!f}),f.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(h.type)?new Blob(["\uFEFF",h],{type:h.type}):h}function o(h,f,b){var v=new XMLHttpRequest;v.open("GET",h),v.responseType="blob",v.onload=function(){u(v.response,f,b)},v.onerror=function(){console.error("could not download file")},v.send()}function a(h){var f=new XMLHttpRequest;f.open("HEAD",h,!1);try{f.send()}catch{}return 200<=f.status&&299>=f.status}function s(h){try{h.dispatchEvent(new MouseEvent("click"))}catch{var f=document.createEvent("MouseEvents");f.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),h.dispatchEvent(f)}}var c=typeof window=="object"&&window.window===window?window:typeof self=="object"&&self.self===self?self:typeof global=="object"&&global.global===global?global:void 0,d=c.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),u=c.saveAs||(typeof window!="object"||window!==c?function(){}:"download"in HTMLAnchorElement.prototype&&!d?function(h,f,b){var v=c.URL||c.webkitURL,g=document.createElement("a");f=f||h.name||"download",g.download=f,g.rel="noopener",typeof h=="string"?(g.href=h,g.origin===location.origin?s(g):a(g.href)?o(h,f,b):s(g,g.target="_blank")):(g.href=v.createObjectURL(h),setTimeout(function(){v.revokeObjectURL(g.href)},4e4),setTimeout(function(){s(g)},0))}:"msSaveOrOpenBlob"in navigator?function(h,f,b){if(f=f||h.name||"download",typeof h!="string")navigator.msSaveOrOpenBlob(r(h,b),f);else if(a(h))o(h,f,b);else{var v=document.createElement("a");v.href=h,v.target="_blank",setTimeout(function(){s(v)})}}:function(h,f,b,v){if(v=v||open("","_blank"),v&&(v.document.title=v.document.body.innerText="downloading..."),typeof h=="string")return o(h,f,b);var g=h.type==="application/octet-stream",m=/constructor/i.test(c.HTMLElement)||c.safari,k=/CriOS\/[\d]+/.test(navigator.userAgent);if((k||g&&m||d)&&typeof FileReader<"u"){var _=new FileReader;_.onloadend=function(){var C=_.result;C=k?C:C.replace(/^data:[^;]*;/,"data:attachment/file;"),v?v.location.href=C:location=C,v=null},_.readAsDataURL(h)}else{var S=c.URL||c.webkitURL,M=S.createObjectURL(h);v?v.location=M:location.href=M,v=null,setTimeout(function(){S.revokeObjectURL(M)},4e4)}});c.saveAs=u.saveAs=u,typeof t<"u"&&(t.exports=u)})})),Fd=U3(),V3=W3();function Z3(e){switch(e){case"image/jpeg":return"jpg";case"image/png":return"png";case"image/webp":return"webp";case"image/gif":return"gif";case"image/bmp":return"bmp";default:return"png"}}async function j3(e){if(!e.src)return null;try{const t=await fetch(e.src);if(t.ok)return ke(`Got blob for page ${e.src} from fetch`),await t.blob()}catch(t){ke(`Failed to get blob for page ${e.src} from fetch`,t)}return typeof GM_xmlhttpRequest<"u"?new Promise(t=>{GM_xmlhttpRequest({method:"GET",url:e.src,responseType:"blob",onload:r=>{r.status===200?(ke(`Got blob for page ${e.src} from GM_xmlhttpRequest`),t(r.response)):(ke(`Failed to get blob for page ${e.src} from GM_xmlhttpRequest`,r.statusText),t(null))},onerror:r=>{ke(`Failed to get blob for page ${e.src} from GM_xmlhttpRequest`,r),t(null)}})}):null}async function q3(e){const t=e.ref?.value;if(!t)return null;try{const r=document.createElement("canvas"),o=r.getContext("2d");if(o)return r.width=t.naturalWidth,r.height=t.naturalHeight,o.drawImage(t,0,0),await new Promise(a=>{r.toBlob(s=>{s&&ke(`Got blob for page ${e.src} from canvas`),a(s)},"image/png",1)})}catch(r){ke(`Failed to get blob for page ${e.src} from canvas`,r)}return null}async function K3(e){if(e.blob)return ke(`Got blob for page ${e.src} from cache`),e.blob;const t=await j3(e)||await q3(e);return t||ke(`Failed to get blob for page ${e.src}`),t}async function Y3(){Ge("download","working");const e=new zu.default,t=ge("images")??{},r=ge("manga"),o=r?.pages??0,a=Math.floor(Math.log10(o||1))+1,s=Object.entries(t).sort((h,f)=>Number(h[0])-Number(f[0])),c=[],d=h=>{Ge("dialog",{open:!0,title:K("BUTTON_DOWNLOAD"),content:le`
        <div style='display: flex; flex-direction: column; gap: 10px;'>
          <p>${K("DOWNLOAD_PROGRESS").replace("##num##",h.toString()).replace("##total##",o.toString())}</p>
          <progress value='${h}' max='${o}' style='width: 100%; height: 20px;'></progress>
        </div>
      `,footer:le``})};d(0);let u=0;for(const[h,f]of s)try{const b=await K3(f);if(b){const v=Z3(b.type),g=`Page-${Number(h).toString().padStart(a,"0")}.${v}`;ke(`${g} Added to Zip from Blob`),e.file(g,b,{createFolders:!0,compression:"DEFLATE"})}else c.push(f.src??h)}catch(b){ke(`Error processing page ${h}`,b),c.push(f.src??h)}finally{u+=1,d(u)}Ge("dialog",{open:!0,title:K("BUTTON_DOWNLOAD"),content:le`
      <div style='display: flex; flex-direction: column; gap: 10px;'>
        <p>${K("GENERATING_ZIP")}</p>
        <progress style='width: 100%; height: 20px;'></progress>
      </div>
    `,footer:le``}),c.length>0&&(ke("Some images failed to download:",c),e.file("failed_pages.txt",c.join(`
`))),ke("Generating Zip"),e.generateAsync({type:"blob"}).then(h=>{ke("Download Ready"),(0,V3.saveAs)(h,`${r?.title??document.title}.zip`,{autoBom:!1}),c.length>0?Ge("dialog",{open:!0,title:K("DOWNLOAD_INCOMPLETE"),icon:"warning",content:le`<p>${K("DOWNLOAD_INCOMPLETE_MESSAGE")}</p>`,footer:le`<mov-button @click=${()=>Ge("dialog",null)}>
            ${K("CLOSE")}
          </mov-button>`}):Ge("dialog",null)}).catch(h=>{ke("Error generating zip",h),Ge("dialog",{open:!0,title:K("WARNING"),icon:"error",content:le`<p>Error generating zip: ${h.message}</p>`,footer:le`<mov-button @click=${()=>Ge("dialog",null)}>
          ${K("CLOSE")}
        </mov-button>`})}).finally(()=>{Ge("download",void 0)})}function Gd(){ge("download")!=="working"&&(ke("Downloading Chapter"),Y3().catch(e=>ke("Error downloading chapter",e)))}function X3(){ji("hidePageControls",e=>!e)}function lo(e){const t=e.target,r=t.getAttribute("value")??t.getAttribute("href");e.button!==1&&!e.ctrlKey&&(r&&r!=="#"?window.location.href=(0,Fd.sanitizeUrl)(r):t.id==="series"&&window.history.back())}function J3(e){q("viewMode").startsWith("Fluid")?ge("chapter").value?.scroll(e?.offsetLeft??0,e?.offsetTop??0):window?.scroll(e?.offsetLeft??0,e?.offsetTop??0)}jt.listen((e,t,r)=>{r==="scrollToPage"&&e.scrollToPage!==void 0&&(e.scrollToPage<=0?window.scrollTo(0,0):J3(ge("images")?.[e.scrollToPage]?.ref?.value),setTimeout(()=>Ge("scrollToPage",void 0),10))});function Q3(e){const t=e.currentTarget.value;Ge("scrollToPage",parseInt(t,10))}function e6(e){Ge("scrollToPage",e)}var Ml=typeof navigator<"u"?navigator.userAgent.toLowerCase().indexOf("firefox")>0:!1;function xl(e,t,r,o){e.addEventListener?e.addEventListener(t,r,o):e.attachEvent&&e.attachEvent(`on${t}`,r)}function co(e,t,r,o){e&&(e.removeEventListener?e.removeEventListener(t,r,o):e.detachEvent&&e.detachEvent(`on${t}`,r))}function Ud(e,t){const r=t.slice(0,t.length-1),o=[];for(let a=0;a<r.length;a++)o.push(e[r[a].toLowerCase()]);return o}function Wd(e){typeof e!="string"&&(e=""),e=e.replace(/\s/g,"");const t=e.split(",");let r=t.lastIndexOf("");for(;r>=0;)t[r-1]+=",",t.splice(r,1),r=t.lastIndexOf("");return t}function t6(e,t){const r=e.length>=t.length?e:t,o=e.length>=t.length?t:e;let a=!0;for(let s=0;s<r.length;s++)o.indexOf(r[s])===-1&&(a=!1);return a}function Vd(e){let t=e.keyCode||e.which||e.charCode;return e.code&&/^Key[A-Z]$/.test(e.code)&&(t=e.code.charCodeAt(3)),t}var uo={backspace:8,"⌫":8,tab:9,clear:12,enter:13,"↩":13,return:13,esc:27,escape:27,space:32,left:37,up:38,right:39,down:40,arrowup:38,arrowdown:40,arrowleft:37,arrowright:39,del:46,delete:46,ins:45,insert:45,home:36,end:35,pageup:33,pagedown:34,capslock:20,num_0:96,num_1:97,num_2:98,num_3:99,num_4:100,num_5:101,num_6:102,num_7:103,num_8:104,num_9:105,num_multiply:106,num_add:107,num_enter:108,num_subtract:109,num_decimal:110,num_divide:111,"⇪":20,",":188,".":190,"/":191,"`":192,"-":Ml?173:189,"=":Ml?61:187,";":Ml?59:186,"'":222,"{":219,"}":221,"[":219,"]":221,"\\":220},wn={"⇧":16,shift:16,"⌥":18,alt:18,option:18,"⌃":17,ctrl:17,control:17,"⌘":91,cmd:91,meta:91,command:91},ho={16:"shiftKey",18:"altKey",17:"ctrlKey",91:"metaKey",shiftKey:16,ctrlKey:17,altKey:18,metaKey:91},Mt={16:!1,18:!1,17:!1,91:!1},dt={};for(let e=1;e<20;e++)uo[`f${e}`]=111+e;var ot=[],fo=null,vi=null,Zd="all",jn=new Map,bi=e=>uo[e.toLowerCase()]||wn[e.toLowerCase()]||e.toUpperCase().charCodeAt(0),n6=e=>Object.keys(uo).find(t=>uo[t]===e),r6=e=>Object.keys(wn).find(t=>wn[t]===e),jd=e=>{Zd=e||"all"},po=()=>Zd||"all",i6=()=>ot.slice(0),o6=()=>ot.map(e=>n6(e)||r6(e)||String.fromCharCode(e)),a6=()=>{const e=[];return Object.keys(dt).forEach(t=>{dt[t].forEach(({key:r,scope:o,mods:a,shortcut:s})=>{e.push({scope:o,shortcut:s,mods:a,keys:r.split("+").map(c=>bi(c))})})}),e},qd=e=>{const t=e.target||e.srcElement,{tagName:r}=t;let o=!0;const a=r==="INPUT"&&!["checkbox","radio","range","button","file","reset","submit","color"].includes(t.type);return(t.isContentEditable||(a||r==="TEXTAREA"||r==="SELECT")&&!t.readOnly)&&(o=!1),o},s6=e=>(typeof e=="string"&&(e=bi(e)),ot.indexOf(e)!==-1),l6=(e,t)=>{let r,o;e||(e=po());for(const a in dt)if(Object.prototype.hasOwnProperty.call(dt,a))for(r=dt[a],o=0;o<r.length;)r[o].scope===e?r.splice(o,1).forEach(({element:s})=>Il(s)):o++;po()===e&&jd(t||"all")};function c6(e){let t=Vd(e);e.key&&e.key.toLowerCase()==="capslock"&&(t=bi(e.key));const r=ot.indexOf(t);if(r>=0&&ot.splice(r,1),e.key&&e.key.toLowerCase()==="meta"&&ot.splice(0,ot.length),(t===93||t===224)&&(t=91),t in Mt){Mt[t]=!1;for(const o in wn)wn[o]===t&&(_n[o]=!1)}}var Kd=(e,...t)=>{if(typeof e>"u")Object.keys(dt).forEach(r=>{Array.isArray(dt[r])&&dt[r].forEach(o=>ya(o)),delete dt[r]}),Il(null);else if(Array.isArray(e))e.forEach(r=>{r.key&&ya(r)});else if(typeof e=="object")e.key&&ya(e);else if(typeof e=="string"){let[r,o]=t;typeof r=="function"&&(o=r,r=""),ya({key:e,scope:r,method:o,splitKey:"+"})}},ya=({key:e,scope:t,method:r,splitKey:o="+"})=>{Wd(e).forEach(a=>{const s=a.split(o),c=s.length,d=s[c-1],u=d==="*"?"*":bi(d);if(!dt[u])return;t||(t=po());const h=c>1?Ud(wn,s):[],f=[];dt[u]=dt[u].filter(b=>{const v=(r?b.method===r:!0)&&b.scope===t&&t6(b.mods,h);return v&&f.push(b.element),!v}),f.forEach(b=>Il(b))})};function Yd(e,t,r,o){if(t.element!==o)return;let a;if(t.scope===r||t.scope==="all"){a=t.mods.length>0;for(const s in Mt)Object.prototype.hasOwnProperty.call(Mt,s)&&(!Mt[s]&&t.mods.indexOf(+s)>-1||Mt[s]&&t.mods.indexOf(+s)===-1)&&(a=!1);(t.mods.length===0&&!Mt[16]&&!Mt[18]&&!Mt[17]&&!Mt[91]||a||t.shortcut==="*")&&(t.keys=[],t.keys=t.keys.concat(ot),t.method(e,t)===!1&&(e.preventDefault?e.preventDefault():e.returnValue=!1,e.stopPropagation&&e.stopPropagation(),e.cancelBubble&&(e.cancelBubble=!0)))}}function Xd(e,t){const r=dt["*"];let o=Vd(e);if(e.key&&e.key.toLowerCase()==="capslock"||!(_n.filter||qd).call(this,e))return;if((o===93||o===224)&&(o=91),ot.indexOf(o)===-1&&o!==229&&ot.push(o),["metaKey","ctrlKey","altKey","shiftKey"].forEach(d=>{const u=ho[d];e[d]&&ot.indexOf(u)===-1?ot.push(u):!e[d]&&ot.indexOf(u)>-1?ot.splice(ot.indexOf(u),1):d==="metaKey"&&e[d]&&(ot=ot.filter(h=>h in ho||h===o))}),o in Mt){Mt[o]=!0;for(const d in wn)Object.prototype.hasOwnProperty.call(wn,d)&&(_n[d]=e[ho[wn[d]]]);if(!r)return}for(const d in Mt)Object.prototype.hasOwnProperty.call(Mt,d)&&(Mt[d]=e[ho[d]]);e.getModifierState&&!(e.altKey&&!e.ctrlKey)&&e.getModifierState("AltGraph")&&(ot.indexOf(17)===-1&&ot.push(17),ot.indexOf(18)===-1&&ot.push(18),Mt[17]=!0,Mt[18]=!0);const a=po();if(r)for(let d=0;d<r.length;d++)r[d].scope===a&&(e.type==="keydown"&&r[d].keydown||e.type==="keyup"&&r[d].keyup)&&Yd(e,r[d],a,t);if(!(o in dt))return;const s=dt[o],c=s.length;for(let d=0;d<c;d++)if((e.type==="keydown"&&s[d].keydown||e.type==="keyup"&&s[d].keyup)&&s[d].key){const u=s[d],{splitKey:h}=u,f=u.key.split(h),b=[];for(let v=0;v<f.length;v++)b.push(bi(f[v]));b.sort().join("")===ot.sort().join("")&&Yd(e,u,a,t)}}var _n=function e(t,r,o){ot=[];const a=Wd(t);let s=[],c="all",d=document,u=0,h=!1,f=!0,b="+",v=!1,g=!1;if(o===void 0&&typeof r=="function"&&(o=r),Object.prototype.toString.call(r)==="[object Object]"){const m=r;m.scope&&(c=m.scope),m.element&&(d=m.element),m.keyup&&(h=m.keyup),m.keydown!==void 0&&(f=m.keydown),m.capture!==void 0&&(v=m.capture),typeof m.splitKey=="string"&&(b=m.splitKey),m.single===!0&&(g=!0)}for(typeof r=="string"&&(c=r),g&&Kd(t,c);u<a.length;u++){const m=a[u].split(b);s=[],m.length>1&&(s=Ud(wn,m));let k=m[m.length-1];k=k==="*"?"*":bi(k),k in dt||(dt[k]=[]),dt[k].push({keyup:h,keydown:f,scope:c,mods:s,shortcut:a[u],method:o,key:a[u],splitKey:b,element:d})}if(typeof d<"u"&&typeof window<"u"){if(!jn.has(d)){const m=(_=window.event)=>Xd(_,d),k=(_=window.event)=>{Xd(_,d),c6(_)};jn.set(d,{keydownListener:m,keyupListenr:k,capture:v}),xl(d,"keydown",m,v),xl(d,"keyup",k,v)}if(!fo){const m=()=>{ot=[]};fo={listener:m,capture:v},xl(window,"focus",m,v)}if(!vi&&typeof document<"u"){const m=()=>{ot=[];for(const S in Mt)Mt[S]=!1;for(const S in wn)e[S]=!1},k=m,_=m;document.addEventListener("fullscreenchange",k),document.addEventListener("webkitfullscreenchange",_),vi={fullscreen:k,webkit:_}}}};function u6(e,t="all"){Object.keys(dt).forEach(r=>{dt[r].filter(o=>o.scope===t&&o.shortcut===e).forEach(o=>{o&&o.method&&o.method({},o)})})}function Il(e){const t=Object.values(dt).flat();if(t.findIndex(({element:r})=>r===e)<0&&e){const{keydownListener:r,keyupListenr:o,capture:a}=jn.get(e)||{};r&&o&&(co(e,"keyup",o,a),co(e,"keydown",r,a),jn.delete(e))}if(t.length<=0||jn.size<=0){if(Array.from(jn.keys()).forEach(r=>{const{keydownListener:o,keyupListenr:a,capture:s}=jn.get(r)||{};o&&a&&(co(r,"keyup",a,s),co(r,"keydown",o,s),jn.delete(r))}),jn.clear(),Object.keys(dt).forEach(r=>delete dt[r]),fo){const{listener:r,capture:o}=fo;co(window,"focus",r,o),fo=null}vi&&typeof document<"u"&&(document.removeEventListener("fullscreenchange",vi.fullscreen),document.removeEventListener("webkitfullscreenchange",vi.webkit),vi=null)}}var Ol={getPressedKeyString:o6,setScope:jd,getScope:po,deleteScope:l6,getPressedKeyCodes:i6,getAllKeyCodes:a6,isPressed:s6,filter:qd,trigger:u6,unbind:Kd,keyMap:uo,modifier:wn,modifierMap:ho};for(const e in Ol){const t=e;Object.prototype.hasOwnProperty.call(Ol,t)&&(_n[t]=Ol[t])}if(typeof window<"u"){const e=window.hotkeys;_n.noConflict=t=>(t&&window.hotkeys===_n&&(window.hotkeys=e),_n),window.hotkeys=_n}typeof module<"u"&&module.exports&&(module.exports=_n,module.exports.default=_n);function Jd(){const e=ge("chapter").value;if(q("viewMode").startsWith("Fluid")){const t=q("viewMode")==="FluidRTL"?-1:1;e?.scrollBy({top:0,left:q("scrollHeight")*t,behavior:"smooth"}),e&&e.scrollLeft+e.clientWidth>=e.scrollWidth-2&&(Ge("autoScroll",!1),ke("Finished auto scroll"))}else window.scrollBy({top:q("scrollHeight"),left:0,behavior:"smooth"}),window.scrollY+window.innerHeight>=document.documentElement.scrollHeight&&(Ge("autoScroll",!1),ke("Finished auto scroll"));ge("autoScroll")&&requestAnimationFrame(Jd)}function ka(){ge("autoScroll")?(Ge("autoScroll",!1),ke("Stopped auto scroll")):(Ge("autoScroll",!0),requestAnimationFrame(Jd),ke("Start auto scroll"))}var Ea=!1,d6=Je.default.debounce(()=>{ka(),Ea=!1},500);function h6(){!Ea&&ge("autoScroll")&&(ka(),Ea=!0),Ea&&!ge("autoScroll")&&d6()}function f6(){window.addEventListener("wheel",Je.default.throttle(h6,500))}function p6(e,t){const r=document.createElement("style");return r.id=e,r.appendChild(document.createTextNode(t)),r}function g6(e,t){document.querySelector(`#${e}`)||(document.head??document.querySelector("head")).appendChild(p6(e,t))}function m6(e){document.querySelectorAll(`style[id="${e}"]`).forEach(t=>{t.remove()})}function v6(e,t){m6(e),g6(e,t)}function b6(e,t){return ri`
    <style id="${e}">
      ${t}
    </style>
  `}var Fr=class extends nt{constructor(...t){super(...t),this.open=!1,this.mode="dialog",this.fullscreen=!1}static{this.styles=Pt`
    :host {
      --panel-overlay-transition: opacity linear 0.25s;
      --panel-overlay-opacity: 0.5;
      --panel-z-index: 1000;
    }

    .backdrop {
      display: none;
      position: fixed;
      inset: 0;
      background-color: #000;
      opacity: 0;
      transition: var(--panel-overlay-transition);
      z-index: var(--panel-z-index);
    }

    :host([open]) .backdrop {
      display: block;
      opacity: var(--panel-overlay-opacity);
    }

    dialog {
      all: unset;
      background-color: var(--theme-background-color, #fff);
      color: var(--theme-text-color, #000);
      z-index: calc(var(--panel-z-index) + 1);
      position: fixed;
      box-shadow: 0 0 25px rgba(0, 0, 0, 0.5);
      display: flex;
      flex-direction: column;
      visibility: hidden;
      max-width: 100vw;
      max-height: 100vh;
    }

    :host([open]:not([mode='inline'])) dialog,
    .closing {
      visibility: visible;
    }

    /* Header Styles */
    .header-bar {
      display: flex;
      align-items: center;
      padding: 0.75rem 1rem;
      border-bottom: 1px solid var(--theme-border-color, #e0e0e0);
      flex-shrink: 0;
    }
    .action-item {
      order: 1;
    }
    .header-content {
      order: 2;
      flex-grow: 1;
      text-align: center;
      font-weight: bold;
    }
    .close-button-container {
      order: 3;
      display: flex;
      justify-content: flex-end;
    }
    .action-item,
    .close-button-container {
      min-width: 40px;
    }
    .close-button {
      background: none;
      border: none;
      cursor: pointer;
      font-size: 1.5rem;
      line-height: 1;
      padding: 0;
      color: inherit;
    }
    .content-slot {
      display: block;
      padding: 1rem;
      overflow-y: auto;
      flex-grow: 1;
    }

    .icon-container {
      display: flex;
      justify-content: center;
      padding-block-end: 1rem;
      text-align: center;
    }
    :host([icon='success']) .icon-container mov-icon {
      color: var(--theme-color-success, #28a745);
    }
    :host([icon='error']) .icon-container mov-icon {
      color: var(--theme-color-danger, #dc3545);
    }
    :host([icon='warning']) .icon-container mov-icon {
      color: var(--theme-color-warning, #ffc107);
    }
    :host([icon='info']) .icon-container mov-icon {
      color: var(--theme-color-info, #17a2b8);
    }
    :host([icon='question']) .icon-container mov-icon {
      color: var(--theme-color-secondary, #6c757d);
    }

    /* --- MODE: INLINE --- */
    :host([mode='inline']) {
      display: block;
      width: 500px;
      max-width: 100%;
    }
    :host([mode='inline']) dialog {
      all: unset;
      background-color: var(--theme-background-color, #fff);
      color: var(--theme-text-color, #000);
      box-shadow: none;
      display: flex;
      flex-direction: column;
      visibility: visible;
      position: relative;
      width: 500px;
      max-width: 100%;
      border: 1px solid var(--theme-border-color, #e0e0e0);
      border-radius: 12px;
    }
    :host([mode='inline']) .backdrop {
      display: none;
    }
    :host([mode='inline']) .close-button {
      display: none; /* No close button in inline mode */
    }

    /* --- MODE: DIALOG --- */
    :host([mode='dialog']) {
      --panel-transition: transform 0.15s ease-out, opacity 0.15s ease-out;
    }
    :host([mode='dialog']) dialog {
      opacity: 0;
      transition: var(--panel-transition);
    }
    :host([mode='dialog'][open]) dialog {
      opacity: 1;
    }
    :host([mode='dialog']:not([fullscreen])) dialog {
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) scale(0.9);
      border-radius: 12px;
      width: var(--dialog-width, 700px);
    }
    :host([mode='dialog']:not([fullscreen])[open]) dialog {
      transform: translate(-50%, -50%) scale(1);
    }
    :host([fullscreen]) {
      --panel-overlay-transition: none;
    }
    :host([fullscreen]) dialog {
      width: 100vw;
      height: 100vh;
      top: 0;
      left: 0;
      transform: translateY(2rem);
      border-radius: 0;
    }
    :host([fullscreen][open]) dialog {
      transform: translateY(0);
    }
  `}close(){this.open=!1}handleCancel(t){t.preventDefault(),this.close()}handleClick(t){this.mode!=="inline"&&t.target===this.dialog&&this.close()}updated(t){this.mode!=="inline"&&t.has("open")&&(this.open?(this.dialog.classList.remove("closing"),this.dialog.show(),this.dispatchEvent(new CustomEvent("open",{bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent("wa-show",{bubbles:!0,composed:!0})),setTimeout(()=>{this.dispatchEvent(new CustomEvent("wa-after-show",{bubbles:!0,composed:!0}))},150)):t.get("open")===!0&&(this.dispatchEvent(new CustomEvent("close",{bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent("wa-hide",{bubbles:!0,composed:!0})),this.dialog.classList.add("closing"),setTimeout(()=>{this.dialog.classList.remove("closing"),this.dialog.open&&this.dialog.close(),this.dispatchEvent(new CustomEvent("wa-after-hide",{bubbles:!0,composed:!0}))},300)))}render(){return le`
      <div
        class="backdrop"
        @click=${this.close}
      ></div>
      <dialog
        part="dialog"
        @cancel=${this.handleCancel}
        @click=${this.handleClick}
      >
        <div
          class="header-bar"
          part="header-bar"
        >
          <div class="action-item">
            <slot name="header-actions"></slot>
          </div>
          <div class="header-content">
            <slot name="label"></slot>
          </div>
          <div
            class="close-button-container"
            part="close-button-container"
          >
            <button
              class="close-button"
              part="close-button"
              @click=${this.close}
              aria-label="Close"
            >
              ${Al}
            </button>
          </div>
        </div>
        <div class="content-slot">
          ${this.icon?le`
                <div class="icon-container">
                  <mov-icon
                    .name=${w6(this.icon)}
                    size="4rem"
                  ></mov-icon>
                </div>
              `:""}
          <slot></slot>
        </div>
        <slot name="footer"></slot>
      </dialog>
    `}};Y([he({type:Boolean,reflect:!0})],Fr.prototype,"open",void 0),Y([he({type:String,reflect:!0})],Fr.prototype,"mode",void 0),Y([he({type:Boolean,reflect:!0})],Fr.prototype,"fullscreen",void 0),Y([he({type:String,reflect:!0})],Fr.prototype,"icon",void 0),Y([Br("dialog")],Fr.prototype,"dialog",void 0),Fr=Y([pt("mov-dialog")],Fr);function Cl(e){const t=()=>Ge("dialog",null);e.timer&&setTimeout(t,e.timer),Ge("dialog",{open:!0,icon:e.icon,title:e.title,content:le`<div style="padding: 1rem;">${Pd(e.html)}</div>`,footer:le`
      <div
        slot="footer"
        style="display: flex; justify-content: flex-end; padding: 0.5rem 1rem 1rem;"
      >
        <mov-button @click=${t}>OK</mov-button>
      </div>
    `})}function w6(e){switch(e){case"info":return"info-circle";case"warning":return"alert-circle";case"success":return"circle-check";case"error":return"circle-x";case"question":return"help";default:return""}}function _6(e){const t=e.currentTarget.value;$u(t==="true")}function y6(e){const t=e.currentTarget.value;bt("locale",t)}function k6(e){const t=e.currentTarget.value;bt("loadMode",t)}function E6(e){const t=e.detail.checked;bt("fitWidthIfOversize",t)}function S6(e){const t=e.currentTarget.value;bt("navbar",t)}function A6(e){const t=e.currentTarget.value;bt("pagination",t)}function M6(e){const t=e.detail.checked;bt("downloadZip",t),t&&Cl({title:K("ATTENTION"),html:K("AUTO_DOWNLOAD"),timer:1e4,icon:"info"})}function x6(e){const t=e.detail.checked;bt("lazyLoadImages",t),t&&Cl({title:K("WARNING"),html:K("LAZY_LOAD"),icon:"warning"})}function I6(e){const t=e.currentTarget.value;bt("lazyStart",parseInt(t,10))}function O6(e){const t=parseInt(e.currentTarget.value,10);bt("throttlePageLoad",t),t<100&&Cl({title:K("SPEED_WARNING"),html:K("SPEED_WARNING_MESSAGE"),icon:"warning"})}function C6(e){const t=e.currentTarget.value;bt("zoomStep",parseInt(t,10))}function T6(e){const t=e.currentTarget.value;v6("MinZoom",`#MangaOnlineViewer .PageContent .PageImg {min-width: ${t}vw;}`),bt("minZoom",parseInt(t,10))}function L6(e){const t=e.detail.checked;bt("hidePageControls",t)}function R6(e){const t=e.currentTarget.value;bt("header",t)}function P6(e){const{value:t}=e.currentTarget;bt("scrollHeight",parseInt(t,10))}function Qd(e){ji("scrollHeight",t=>{const r=t+e*25;if(r<=0)return 0;const o=Math.ceil(window.innerHeight/200)*100;return r>=o?o:r})}function $6(){const e=q("navbar");return e==="left"||e==="right"?window.innerWidth-34:window.innerWidth}function z6(){return q("navbar")==="bottom"?window.innerHeight-34:window.innerHeight}function eh(e,t=q("zoomMode"),r=q("zoomValue")){const o=$6(),a=z6();if(t==="width")e.width=o,e.height=void 0;else if(t==="height")e.width=void 0,e.height=a;else if(t==="percent"){const s=e.naturalWidth??e.ref?.value?.naturalWidth;e.width=s?s*(r/100):void 0,e.height=void 0}return e}function Gr(e=q("zoomMode"),t=q("zoomValue")){ke("Zoom",e,t),ti("zoomMode",e),ti("zoomValue",t),e==="height"?Ge("scrollToPage",ge("currentPage")):$r("header");const r=ge("images"),o=ge("manga"),a={};for(let s=o?.begin??1;s<=(o?.pages??1);s++)a[s]=eh({...r?.[s]},e,t);Ge("images",a)}function wi(e,t=q("zoomValue")){return()=>{Gr(e,t)}}function Sa(e=1){return()=>{const t=q("zoomValue")+e*q("zoomStep");t>0&&t<500&&Gr("percent",t)}}function D6(e){const t=e.currentTarget.value;bt("zoomMode",t)}function N6(e){const t=parseInt(e.currentTarget.value,10);bt("zoomValue",t),Gr("percent",t)}function B6(e){Gr("percent",parseInt(e.currentTarget.value,10))}function qn(e){return()=>{ti("viewMode",e),e.startsWith("Fluid")?(ti("zoomMode","height"),ti("header","click")):($r("zoomMode"),$r("zoomValue"),$r("header")),Gr()}}function H6(e){const t=e.currentTarget.value;bt("viewMode",t),qn(t)()}function F6(e){const t=q("viewMode")==="FluidRTL"?-1:1;ge("chapter").value?.scrollBy({left:.8*window.innerWidth*e*t,behavior:"smooth"})}function G6(e){const t=ge("currentPage")+e;t<0?Ge("scrollToPage",0):t>(ge("manga")?.pages??1)||Ge("scrollToPage",t)}function U6(e){window.scrollBy({top:.8*window.innerHeight*e,behavior:"smooth"})}function th(e){const t=q("viewMode"),r=q("zoomMode");ke("Scrolling view",t,"zoom",r,"sign",e),t.startsWith("Fluid")?F6(e):r==="height"?G6(e):U6(e)}function go(e){const t=ge("manga")?.[e];t&&t!=="#"?location.href=(0,Fd.sanitizeUrl)(t):e!=="next"&&history.back()}var W6={SCROLL_UP(){th(-1)},SCROLL_DOWN(){th(1)},NEXT_CHAPTER(){go("next")},PREVIOUS_CHAPTER(){go("prev")},RETURN_CHAPTER_LIST(){go("series")},ENLARGE(){Sa(1)()},REDUCE(){Sa(-1)()},RESTORE(){wi("percent",100)()},FIT_WIDTH(){wi("width")()},FIT_HEIGHT(){wi("height")()},SETTINGS(){Pu("panel",e=>e==="none"?"settings":"none")},VIEW_MODE_WEBCOMIC(){qn("WebComic")()},VIEW_MODE_VERTICAL(){qn("Vertical")()},VIEW_MODE_LEFT(){qn("FluidRTL")()},VIEW_MODE_RIGHT(){qn("FluidLTR")()},SCROLL_START(){ka()},INCREASE_SPEED(){Qd(1)},DECREASE_SPEED(){Qd(-1)}};function nh(){document.onkeydown=null,document.onkeyup=null,window.onkeydown=null,window.onkeyup=null,window.onload=null,document.body.onload=null,_n.unbind(),Object.keys(q("keybinds")).forEach(e=>{_n(q("keybinds")[e]?.join(",")??"",Je.default.throttle(t=>{t.preventDefault(),t.stopImmediatePropagation(),t.stopPropagation(),W6[e]()},100))})}var mr=class extends nt{constructor(...t){super(...t),this.mode="disabled",this.currentPage=1,this.totalPages=1,this.startPage=1}static{this.styles=Pt`
    :host {
      display: contents; /* Use contents to not interfere with layout */
      font-family:
        system-ui,
        -apple-system,
        sans-serif;
    }

    .slider-pagination {
      display: flex;
      position: fixed;
      bottom: 30px;
      left: 0;
      right: 0;
      background-color: transparent;
      justify-content: center;
      align-items: center;
      gap: 3px;
      width: 100%;
      max-width: 100%;
      z-index: 100;
    }

    .pagination-button {
      background: var(--mov-color-fill-loud);
      border: 1px solid var(--mov-color-fill-loud);
      color: var(--mov-color-on-loud);
      padding: 8px 12px;
      border-radius: 4px;
      cursor: pointer;
      font-size: 14px;
      transition: all 0.2s ease;
      display: flex;
      align-items: center;
      justify-content: center;
      min-width: 36px;
      height: 36px;
    }

    .pagination-button:hover:not(:disabled) {
      opacity: 0.8;
      transform: translateY(-1px);
    }

    .pagination-button:disabled {
      opacity: 0.4;
      cursor: not-allowed;
    }

    .pagination-button mov-icon {
      width: 16px;
      height: 16px;
      fill: currentColor;
    }

    .slider-container {
      position: relative;
      max-width: 1000px;
      width: inherit;
      margin: 0 5px;
    }

    .pagination-slider {
      -webkit-appearance: none;
      appearance: none;
      width: 100%;
      height: 4px;
      background: var(--mov-color-fill-loud);
      opacity: 0.5;
      border-radius: 2px;
      outline: none;
      cursor: pointer;
    }

    .pagination-slider::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      width: 16px;
      height: 16px;
      background: white;
      border-radius: 50%;
      cursor: pointer;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
      border: 1px solid var(--mov-color-fill-loud);
    }

    .pagination-slider::-moz-range-thumb {
      width: 16px;
      height: 16px;
      background: white;
      border-radius: 50%;
      cursor: pointer;
      border: 1px solid var(--mov-color-fill-loud);
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
    }

    .slider-tooltip {
      position: absolute;
      top: -35px;
      left: 50%;
      transform: translateX(-50%);
      background: rgba(0, 0, 0, 0.9);
      color: white;
      padding: 4px 8px;
      border-radius: 4px;
      font-size: 12px;
      white-space: nowrap;
      opacity: 0;
      pointer-events: none;
      transition: opacity 0.2s ease;
    }

    .slider-container:hover .slider-tooltip {
      opacity: 1;
    }

    .tooltip {
      position: absolute;
      bottom: 45px;
      left: 50%;
      transform: translateX(-50%);
      background: var(--theme-body-background);
      color: white;
      padding: 4px 8px;
      border-radius: 4px;
      font-size: 12px;
      white-space: nowrap;
      opacity: 0;
      pointer-events: none;
      transition: opacity 0.2s ease;
      z-index: 1001;
    }

    .pagination-button:hover .tooltip {
      opacity: 1;
    }

    .side-arrow {
      position: fixed;
      top: var(--header-height, 50px);
      bottom: 0;
      width: 10vw;
      height: calc(100vh - var(--header-height, 50px));
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      z-index: 99;
      opacity: 0;
      transition: opacity 0.2s ease-in-out;
      -webkit-tap-highlight-color: transparent;
    }

    .side-arrow:hover {
      background-color: var(--mov-color-primary-alpha-10);
      opacity: 1;
    }

    .side-arrow.left {
      left: 0;
    }

    .side-arrow.right {
      right: 0;
    }

    .side-arrow:active {
      background-color: var(--mov-color-primary-alpha-20);
    }

    .side-arrow mov-icon {
      width: 48px;
      height: 48px;
      fill: var(--mov-color-on-primary);
      filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.5));
    }

    .side-arrow:disabled {
      display: none;
    }
  `}get isFirstPage(){return this.currentPage<=this.startPage}get isLastPage(){return this.currentPage>=this.totalPages-(1-this.startPage)}renderSlider(){return le`
      <div class="slider-pagination">
        <button
          class="pagination-button"
          @click=${lo}
          value="${this.prev}"
          ?disabled=${gn(this.prev)||this.prev==="#"}
        >
          <mov-icon name="arrow-big-left"></mov-icon>
          <div class="tooltip">Previous Chapter</div>
        </button>

        <button
          class="pagination-button"
          @click=${this.goToPreviousPage}
          ?disabled=${this.isFirstPage}
        >
          <mov-icon name="chevron-left"></mov-icon>
          <div class="tooltip">Previous Page</div>
        </button>

        <div class="slider-container">
          <input
            type="range"
            class="pagination-slider"
            min="${this.startPage}"
            max="${this.totalPages}"
            .value="${this.currentPage.toString()}"
            @input="${Q3}"
          />
          <div class="slider-tooltip">${this.currentPage} / ${this.totalPages}</div>
        </div>

        <button class="pagination-button" @click=${this.goToNextPage} ?disabled=${this.isLastPage}>
          <mov-icon name="chevron-right"></mov-icon>
          <div class="tooltip">Next Page</div>
        </button>

        <button
          class="pagination-button"
          @click=${lo}
          value="${this.next}"
          ?disabled=${gn(this.next)||this.next==="#"}
        >
          <mov-icon name="arrow-big-right"></mov-icon>
          <div class="tooltip">Next Chapter</div>
        </button>
      </div>
    `}renderSideArrows(){return le`
      <div class="arrows-pagination">
        <button
          class="side-arrow left"
          @click=${this.handleLeftArrowClick}
          ?disabled=${this.isFirstPage&&(gn(this.prev)||this.prev==="#")}
        >
          <mov-icon name="chevron-left"></mov-icon>
        </button>
        <button
          class="side-arrow right"
          @click=${this.handleRightArrowClick}
          ?disabled=${this.isLastPage&&(gn(this.next)||this.next==="#")}
        >
          <mov-icon name="chevron-right"></mov-icon>
        </button>
      </div>
    `}render(){if(this.mode==="disabled")return Pe;const t=this.mode==="slider"||this.mode==="both",r=this.mode==="side-arrows"||this.mode==="both";return le`
      ${t?this.renderSlider():Pe} ${r?this.renderSideArrows():Pe}
    `}handleLeftArrowClick(){this.isFirstPage?go("prev"):this.goToPreviousPage()}handleRightArrowClick(){this.isLastPage?go("next"):this.goToNextPage()}goToPreviousPage(){this.goToPage(this.currentPage-1)}goToNextPage(){this.goToPage(this.currentPage+1)}goToPage(t){Ge("scrollToPage",t)}};Y([he({type:String})],mr.prototype,"mode",void 0),Y([he({type:Number})],mr.prototype,"currentPage",void 0),Y([he({type:Number})],mr.prototype,"totalPages",void 0),Y([he({type:Number})],mr.prototype,"startPage",void 0),Y([he({type:String})],mr.prototype,"next",void 0),Y([he({type:String})],mr.prototype,"prev",void 0),mr=Y([pt("manga-pagination")],mr);var mo=class extends nt{constructor(...t){super(...t),this.open=!1,this.placement="end"}static{this.styles=Pt`
    :host {
      --panel-overlay-transition: opacity linear 0.25s;
      --panel-overlay-opacity: 0.5;
      --panel-z-index: 1000;
      --panel-transition: transform 0.25s ease-out;
    }

    .backdrop {
      display: none;
      position: fixed;
      inset: 0;
      background-color: #000;
      opacity: 0;
      transition: var(--panel-overlay-transition);
      z-index: var(--panel-z-index);
    }

    :host([open]) .backdrop {
      display: block;
      opacity: var(--panel-overlay-opacity);
    }

    dialog {
      all: unset;
      background-color: var(--theme-background-color, #fff);
      color: var(--theme-text-color, #000);
      z-index: calc(var(--panel-z-index) + 1);
      position: fixed;
      box-shadow: 0 0 25px rgba(0, 0, 0, 0.5);
      display: flex;
      flex-direction: column;
      visibility: hidden;
      max-width: 100vw;
      max-height: 100vh;
      width: 350px;
      top: 0;
      bottom: 0;
      height: 100%;
      transition: var(--panel-transition);
    }

    :host([open]) dialog,
    .closing {
      visibility: visible;
    }

    /* Header Styles */
    .header-bar {
      display: flex;
      align-items: center;
      padding: 0.75rem 1rem;
      border-bottom: 1px solid var(--theme-border-color, #e0e0e0);
      flex-shrink: 0;
    }
    .action-item {
      order: 1;
    }
    .header-content {
      order: 2;
      flex-grow: 1;
      text-align: center;
      font-weight: bold;
    }
    .close-button-container {
      order: 3;
      display: flex;
      justify-content: flex-end;
    }
    .action-item,
    .close-button-container {
      min-width: 40px;
    }
    .close-button {
      background: none;
      border: none;
      cursor: pointer;
      font-size: 1.5rem;
      line-height: 1;
      padding: 0;
      color: inherit;
    }
    .content-slot {
      display: block;
      padding: 1rem;
      overflow-y: auto;
      flex-grow: 1;
    }

    :host([placement='start']) dialog {
      left: 0;
      transform: translateX(-100%);
    }
    :host([placement='end']) dialog {
      right: 0;
      transform: translateX(100%);
    }
    :host([open]) dialog {
      transform: none;
    }
    :host([placement='end']) .action-item {
      order: 3;
    }
    :host([placement='end']) .header-content {
      order: 2;
    }
    :host([placement='end']) .close-button-container {
      order: 1;
      justify-content: flex-start;
    }
  `}close(){this.open=!1}handleCancel(t){t.preventDefault(),this.close()}handleClick(t){t.target===this.dialog&&this.close()}updated(t){t.has("open")&&(this.open?(this.dialog.classList.remove("closing"),this.dialog.show(),this.dispatchEvent(new CustomEvent("open",{bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent("wa-show",{bubbles:!0,composed:!0})),setTimeout(()=>{this.dispatchEvent(new CustomEvent("wa-after-show",{bubbles:!0,composed:!0}))},250)):t.get("open")===!0&&(this.dispatchEvent(new CustomEvent("close",{bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent("wa-hide",{bubbles:!0,composed:!0})),this.dialog.classList.add("closing"),setTimeout(()=>{this.dialog.classList.remove("closing"),this.dialog.open&&this.dialog.close(),this.dispatchEvent(new CustomEvent("wa-after-hide",{bubbles:!0,composed:!0}))},300)))}render(){return le`
      <div
        class="backdrop"
        @click=${this.close}
      ></div>
      <dialog
        part="dialog"
        @cancel=${this.handleCancel}
        @click=${this.handleClick}
      >
        <div
          class="header-bar"
          part="header-bar"
        >
          <div class="action-item">
            <slot name="header-actions"></slot>
          </div>
          <div class="header-content">
            <slot name="label"></slot>
          </div>
          <div
            class="close-button-container"
            part="close-button-container"
          >
            <button
              class="close-button"
              part="close-button"
              @click=${this.close}
              aria-label="Close"
            >
              ${Al}
            </button>
          </div>
        </div>
        <slot class="content-slot"></slot>
      </dialog>
    `}};Y([he({type:Boolean,reflect:!0})],mo.prototype,"open",void 0),Y([he({type:String,reflect:!0})],mo.prototype,"placement",void 0),Y([Br("dialog")],mo.prototype,"dialog",void 0),mo=Y([pt("mov-drawer")],mo);var Aa=class extends nt{static{this.styles=Pt`
    :host {
      position: relative;
      display: inline-block;
    }
    :host([checkable]) {
      --mov-dropdown-item-checkmark-display: inline-block;
    }
    .dropdown-content {
      display: none;
      position: absolute;
      background-color: var(--theme-background-color, #f9f9f9);
      min-width: 160px;
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
      z-index: 1;
      list-style: none;
      padding: 0;
      margin: 0;
      border: 1px solid var(--theme-border-color, #ccc);
      border-radius: 5px;
    }
    :host([open]) .dropdown-content {
      display: block;
    }
  `}constructor(){super(),this.open=!1,this.checkable=!1,this.boundClickHandler=this.handleClickOutside.bind(this)}connectedCallback(){super.connectedCallback(),document.addEventListener("click",this.boundClickHandler)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("click",this.boundClickHandler)}handleClickOutside(t){this.open&&!t.composedPath().includes(this)&&(this.open=!1)}toggle(){this.open=!this.open}render(){return le`
      <div
        @click=${this.toggle}
        class="trigger-wrapper"
      >
        <slot name="trigger"></slot>
      </div>
      <div class="dropdown-content">
        <slot></slot>
      </div>
    `}};Y([he({type:Boolean,reflect:!0})],Aa.prototype,"open",void 0),Y([he({type:Boolean,reflect:!0})],Aa.prototype,"checkable",void 0),Aa=Y([pt("mov-dropdown")],Aa);var Tl=class extends nt{constructor(...t){super(...t),this.selected=!1}static{this.styles=Pt`
    :host {
      display: block;
    }
    .item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 8px 12px;
      cursor: pointer;
      color: var(--theme-body-text-color);
      background-color: var(--theme-background-color);
      gap: 10px;
    }
    .item:hover {
      background-color: var(--mov-color-fill-normal);
      color: var(--mov-color-on-normal);
    }
    :host([selected]) .item {
      background-color: var(--mov-color-fill-normal);
      color: var(--mov-color-on-normal);
    }
    .item-content {
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .check-icon {
      display: var(--mov-dropdown-item-checkmark-display, none);
      visibility: hidden;
      width: 1.2em;
      height: 1.2em;
    }
    :host([selected]) .check-icon {
      visibility: visible;
    }
    ::slotted([slot='details']) {
      font-size: 0.9em;
      opacity: 0.7;
    }
  `}render(){return le`
      <div class="item">
        <div class="item-content">
          <mov-icon
            class="check-icon"
            name="IconCheck"
          ></mov-icon>
          <slot name="icon"></slot>
          <slot></slot>
        </div>
        <slot name="details"></slot>
      </div>
    `}};Y([he({type:Boolean,reflect:!0})],Tl.prototype,"selected",void 0),Tl=Y([pt("mov-dropdown-item")],Tl);var rh="kbd,.key{white-space:nowrap;text-align:center;background-color:#505050;background-color:gradient(linear, left top, left bottom, from(#3c3c3c), to(#505050));color:#fafafa;text-shadow:-1px -1px #464646;cursor:default;user-select:none;border:none;border-radius:.3em;min-width:1em;padding:.3em .4em .2em .3em;font-family:Lucida Grande,Lucida,Arial,sans-serif;font-size:.85em;font-style:normal;line-height:1;text-decoration:none;display:inline-block;box-shadow:inset 0 0 1px #969696,inset 0 -.05em .4em #505050,0 .1em #1e1e1e,0 .1em .1em #0000004d}kbd[title],.key[title]{cursor:help}kbd.dark,.dark-keys kbd,.key.dark,.dark-keys .key{white-space:nowrap;text-align:center;background-color:#505050;background-color:gradient(linear, left top, left bottom, from(#3c3c3c), to(#505050));color:#fafafa;text-shadow:-1px -1px #464646;border:none;border-radius:.3em;min-width:1em;padding:.3em .4em .2em .3em;font-family:Lucida Grande,Lucida,Arial,sans-serif;font-style:normal;text-decoration:none;display:inline-block;box-shadow:inset 0 0 1px #969696,inset 0 -.05em .4em #505050,0 .1em #1e1e1e,0 .1em .1em #0000004d}kbd.light,.light-keys kbd,.key.light,.light-keys .key{white-space:nowrap;text-align:center;background-color:#fafafa;background-color:gradient(linear, left top, left bottom, from(#d2d2d2), to(#fff));color:#323232;text-shadow:0 0 2px #fff;border:none;border-radius:.3em;min-width:1em;padding:.3em .4em .2em .3em;font-family:Lucida Grande,Lucida,Arial,sans-serif;font-style:normal;text-decoration:none;display:inline-block;box-shadow:inset 0 0 1px #fff,inset 0 0 .4em #c8c8c8,0 .1em #828282,0 .11em #0006,0 .1em .11em #000000e6}kbd.so,.so-keys kbd,.key.so,.so-keys .key{white-space:nowrap;text-align:center;color:#242729;text-shadow:0 1px #fff;background-color:#e1e3e5;border:1px solid #adb3b9;border-radius:.272727em;min-width:1em;margin:0 .1em;padding:.1em .6em;font-family:Arial,Helvetica Neue,Helvetica,sans-serif;font-style:normal;line-height:1.4;text-decoration:none;display:inline-block;box-shadow:0 1px #0c0d0e33,inset 0 0 0 2px #fff}kbd.github,.github-keys kbd,.key.github,.github-keys .key{white-space:nowrap;text-align:center;color:#444d56;vertical-align:middle;box-sizing:border-box;min-width:1em;text-shadow:none;background-color:#fafbfc;border:1px solid #c6cbd1;border-bottom-color:#959da5;border-radius:.272727em;padding:.272727em .454545em;font-family:SFMono-Regular,Consolas,Liberation Mono,Menlo,Courier,monospace;font-size:68.75%;font-style:normal;line-height:.909091;text-decoration:none;display:inline-block;box-shadow:inset 0 -1px #959da5}",V6=pn((e=>{Object.defineProperty(e,"__esModule",{value:!0}),e.StoreController=void 0;var t=class{constructor(r,o){this.host=r,this.atom=o,r.addController(this)}hostConnected(){this.unsubscribe=this.atom.subscribe(()=>{this.host.requestUpdate()})}hostDisconnected(){var r;(r=this.unsubscribe)===null||r===void 0||r.call(this)}get value(){return this.atom.get()}};e.StoreController=t})),Ll=pn((e=>{Object.defineProperty(e,"__esModule",{value:!0}),e.MultiStoreController=void 0;var t=class{constructor(r,o){this.host=r,this.atoms=o,r.addController(this)}hostConnected(){this.unsubscribes=this.atoms.map(r=>r.subscribe(()=>this.host.requestUpdate()))}hostDisconnected(){var r;(r=this.unsubscribes)===null||r===void 0||r.forEach(o=>o())}get values(){return this.atoms.map(r=>r.get())}};e.MultiStoreController=t})),Z6=pn((e=>{Object.defineProperty(e,"__esModule",{value:!0}),e.useStores=void 0;var t=Ll();function r(...o){return a=>class extends a{constructor(...s){super(...s),new t.MultiStoreController(this,o)}}}e.useStores=r})),j6=pn((e=>{Object.defineProperty(e,"__esModule",{value:!0}),e.withStores=void 0;var t=Ll(),r=(o,a)=>class extends o{constructor(...c){super(...c),new t.MultiStoreController(this,a)}};e.withStores=r})),q6=pn((e=>{Object.defineProperty(e,"__esModule",{value:!0}),e.withStores=e.useStores=e.MultiStoreController=e.StoreController=void 0;var t=V6();Object.defineProperty(e,"StoreController",{enumerable:!0,get:function(){return t.StoreController}});var r=Ll();Object.defineProperty(e,"MultiStoreController",{enumerable:!0,get:function(){return r.MultiStoreController}});var o=Z6();Object.defineProperty(e,"useStores",{enumerable:!0,get:function(){return o.useStores}});var a=j6();Object.defineProperty(e,"withStores",{enumerable:!0,get:function(){return a.withStores}})})),_i=q6(),Ma=49,K6=100,Y6=class Yf{constructor(t){this.prevOffset=0,this.headroom="top",this.headerVisible=!0,this.handleScroll=Je.default.throttle(()=>{if(this.isAnyDropdownOpen()){this.prevOffset=window.scrollY;return}const o=q("header"),{scrollY:a}=window;let s="none";q("zoomMode")!=="height"&&a+window.innerHeight+K6>document.body.scrollHeight?s="end":a>this.prevOffset&&a>Ma?s="hide":o==="scroll"&&a<this.prevOffset&&a>Ma?s="show":o!=="click"&&a<=Ma&&(s="top");let c=!1;if(this.headroom!==s&&(this.headroom=s,c=!0),o==="scroll"){const d=s!=="hide";this.headerVisible!==d&&(this.headerVisible=d,c=!0)}c&&this.host.requestUpdate(),this.prevOffset=a},300),this.handleMouseMove=Je.default.throttle(o=>{if(this.isAnyDropdownOpen()){this.headerVisible||(this.headerVisible=!0,this.host.requestUpdate());return}if(["hover","scroll"].includes(q("header"))){const a=Yf.isMouseInsideRegion(o,window.innerWidth,Ma*1.5);this.headerVisible!==a&&(this.headerVisible=a,this.host.requestUpdate())}},300),this.toggleHeaderVisibility=()=>{q("header")==="click"&&(this.headerVisible=!this.headerVisible,this.host.requestUpdate())},this.host=t,t.addController(this);const r=q("header");q("zoomMode")==="height"&&["click","hover"].includes(r)&&(this.headerVisible=!1)}hostConnected(){window.addEventListener("scroll",this.handleScroll),window.addEventListener("mousemove",this.handleMouseMove)}hostDisconnected(){window.removeEventListener("scroll",this.handleScroll),window.removeEventListener("mousemove",this.handleMouseMove)}isAnyDropdownOpen(){if(!this.host.shadowRoot)return!1;const t=this.host.shadowRoot.querySelectorAll("mov-dropdown");for(const r of t)if(r.open)return!0;return!1}static isMouseInsideRegion(t,r,o){return t.clientX>=0&&t.clientX<=r&&t.clientY>=0&&t.clientY<=o}},X6=class{constructor(e){this.canvasContext=null,this.host=e,e.addController(this),this.canvasContext=document.createElement("canvas").getContext("2d"),this.resizeObserver=new ResizeObserver(()=>this.update())}hostConnected(){}hostDisconnected(){this.resizeObserver.disconnect()}observe(e,t){!e||!t||(this.element=e,this.text=t,this.resizeObserver.disconnect(),this.resizeObserver.observe(this.element),this.update())}update(){if(!this.element||!this.text||!this.canvasContext){this.value=this.text,this.host.requestUpdate();return}const e=window.getComputedStyle(this.element);this.canvasContext.font=`${e.fontWeight} ${e.fontSize} ${e.fontFamily}`;const t=this.text,r=this.element.clientWidth;if(this.canvasContext.measureText(t).width<=r){this.value=t,this.host.requestUpdate();return}const o="...",a=r-this.canvasContext.measureText(o).width;let s="",c="";for(let d=1;d<t.length;d++){const u=t.substring(0,d),h=t.substring(t.length-d);if(this.canvasContext.measureText(u).width+this.canvasContext.measureText(h).width>a)break;s=u,c=h}this.value=`${s}${o}${c}`,this.host.requestUpdate()}};function Rl(e=window.location.href){gn(ni(e))||(ke(`Bookmark Removed ${e}`),ji("bookmarks",t=>[...t.filter(r=>r.url!==e)]))}function J6(e){const t=e.currentTarget.value;ke(`Bookmark Removed ${t}`),Bi.error({title:K("BOOKMARK_REMOVED"),duration:1e4}),Rl(t)}function Q6(){Ge("panel","bookmarks")}function ih(){const e=ge("currentPage"),t={name:ge("manga")?.title??document.documentElement.title??window.location.hostname,url:window.location.href,page:e,date:new Date().toISOString().slice(0,10)};ni(t.url)?(ji("bookmarks",r=>[...r.filter(o=>o.url!==t.url)]),Bi.error({title:K("BOOKMARK_REMOVED"),duration:1e4})):(ji("bookmarks",r=>[...r,t]),Bi.success({title:K("BOOKMARK_SAVED"),description:K("BOOKMARK_MESSAGE").replace("##num##",e.toString()),duration:1e4}))}function Pl(){Ge("panel","none")}function eb(){Ge("panel","settings")}function tb(){Ge("panel","keybindings")}function nb(e){const t={};Object.keys(e).forEach(r=>{const o=e[r].value;if(o){const a=o.value.split(",").map(s=>s.trim()).filter(s=>s!=="");t[r]=a.length>0?a:void 0}}),bt("keybinds",t),Ge("panel","keybindings"),nh()}function rb(){Ge("panel","keybindingsEditor")}var ib="#Header{background-color:var(--theme-background-color);z-index:900;flex-flow:row;justify-content:space-around;align-items:center;transition:transform .3s ease-in;display:flex;position:sticky;top:0;left:0;right:0;box-shadow:0 0 25px #00000080}#Header.click{padding-left:40px}@keyframes headroom{0%{transform:translateY(-100%)}to{transform:translateY(0%)}}#Header:not(.visible,.headroom-top,.fixed,.simple){animation:.3s ease-in reverse headroom;position:sticky;top:0;transform:translateY(-100%)}#Header.scroll.headroom-hide:not(.visible){animation:none;position:sticky;top:0;transform:translateY(-100%)}#Header.scroll.headroom-show,#Header.headroom-end,#Header.visible{animation:.3s ease-in headroom;position:sticky;top:0;transform:translateY(0%)}#Header.headroom-top{animation:none}#Header.fixed{animation:none;position:sticky;top:0;transform:translateY(0%)}#Header.simple{animation:none;position:static;top:0;transform:translateY(0%)}#menu{z-index:1;color:var(--theme-body-text-color);width:40px;height:40px;position:fixed}#menu:not(.click),#menu.hide{display:none}#menu.click{z-index:901;top:0;left:0}#MangaTitle{word-wrap:anywhere;white-space:nowrap;text-overflow:ellipsis;min-width:200px;max-width:40vw;margin:0;padding:2px;font-size:1.2rem;font-weight:400;overflow:hidden}#GlobalFunctions{z-index:100;flex-wrap:wrap;gap:3px;padding:3px 3px 3px 0;display:flex}#ZoomControl{flex-direction:column;align-items:center;gap:3px;padding:10px 5px;display:flex}",oh="#Header.mobile,#Header.tablet{flex-flow:wrap;display:flex}.mobile #ViewerTitle,.tablet #ViewerTitle{order:4;min-height:auto}.mobile #GlobalFunctions,.tablet #GlobalFunctions{order:2;width:auto;padding:5px}.mobile #GlobalFunctions span{flex-direction:column}.mobile #ZoomControl,.tablet #ZoomControl{order:3}.mobile #Toolbar,.tabler #Toolbar{order:1}#Header.mobile{flex-flow:wrap;justify-content:center;align-items:center}#Header.mobile.click+#Chapter:not(.webcomic,.vertical){position:sticky}.tablet #MangaTitle,.mobile #MangaTitle{max-width:90vw}.mobile #ViewerTitle{order:3;height:auto;margin-top:0;padding:0}.mobile #GlobalFunctions{order:2;gap:0;width:auto;padding:0}.mobile mov-button::part(base){border-radius:0}.mobile #FileDropdown mov-button:first-of-type::part(base){border-radius:5px 0 0 5px}.mobile #GlobalFunctions mov-button:last-of-type::part(base){border-radius:0 5px 5px 0}.mobile .PageFunctions{padding:0}.mobile .PageFunctions .PageButton.Bookmark{opacity:1}.mobile #GlobalFunctions #ZoomSlider,.tablet #GlobalFunctions #ZoomSlider,.mobile .PageFunctions .PageButton:not(.Bookmark),.tablet #Counters,.mobile #ZoomControl,.mobile #ZoomDropdown,.mobile #ViewDropdown,.mobile #FileDropdown :where(:nth-child(3),:nth-child(4)){display:none}",xa=class extends nt{static{this.styles=[qt(ib),qt(oh),qt(rh),Pt``]}constructor(){super(),this.headroomController=new Y6(this),this.titleController=new X6(this)}updated(t){super.updated(t),t.has("manga")&&this.manga&&requestAnimationFrame(()=>{this.manga&&this.titleController.observe(this.mangaTitleElement,this.manga?.title??"Manga Online Viewer")})}render(){if(!this.manga)return le``;const{headroom:t,headerVisible:r}=this.headroomController,o=q("keybinds"),a=s=>{if(ge("device")!=="desktop")return Pe;const c=o[s];return!c||c.length===0?Pe:c.map(d=>le`<kbd slot="details">${d}</kbd>`)};return le`
      <mov-button
        id="menu"
        class="${Ot({[q("header")]:!0,hide:["top","end"].includes(t)})}"
        @click=${this.headroomController.toggleHeaderVisibility}
      >
        <mov-icon name="IconMenu2"></mov-icon>
      </mov-button>
      <header
        id="Header"
        class="${Ot({[q("header")]:!0,[`headroom-${t}`]:!0,visible:r&&["hide","none"].includes(t),[ge("device")]:!0})}"
      >
        <div
          id="Toolbar"
          class="button-group"
        >
          <mov-dropdown id="FileDropdown">
            <mov-button
              slot="trigger"
              title="${K("FILE_MENU")}"
            >
              <mov-icon
                label="File"
                name="IconDotsVertical"
              ></mov-icon>
            </mov-button>
            <mov-dropdown-item
              id="settings"
              @click=${eb}
            >
              <mov-icon
                slot="icon"
                name="IconSettings"
              ></mov-icon>
              ${K("SETTINGS")} ${a("SETTINGS")}
            </mov-dropdown-item>
            <mov-dropdown-item
              id="keybindings"
              @click=${tb}
            >
              <mov-icon
                slot="icon"
                name="IconKeyboard"
              ></mov-icon>
              ${K("KEYBINDINGS")}
            </mov-dropdown-item>
            <mov-dropdown-item
              id="AutoScroll"
              class="${Ot({running:ge("autoScroll")})}"
              @click=${ka}
            >
              <mov-icon
                slot="icon"
                name="${ge("autoScroll")?"IconPlayerPause":"IconPlayerPlay"}"
              ></mov-icon>
              ${K("SCROLL_START")} ${a("SCROLL_START")}
            </mov-dropdown-item>
            <mov-dropdown-item
              id="bookmarks"
              class="tablets"
              @click=${Q6}
            >
              <mov-icon
                slot="icon"
                name="IconBookmarks"
              ></mov-icon>
              ${K("BOOKMARKS")}
            </mov-dropdown-item>
            <mov-dropdown-item
              id="pageControls"
              class="tablets phones"
              @click="${X3}"
              ?selected=${q("hidePageControls")}
            >
              <mov-icon
                slot="icon"
                name="IconListNumbers"
              ></mov-icon>
              ${K("TOGGLE_CONTROLS")}
            </mov-dropdown-item>
          </mov-dropdown>

          <mov-dropdown
            id="ViewDropdown"
            checkable
          >
            <mov-button
              slot="trigger"
              title="${K("VIEW_MENU")}"
            >
              <mov-icon
                label="View"
                name="IconBook"
              ></mov-icon>
            </mov-button>
            <mov-dropdown-item
              id="webComic"
              class="tablets"
              @click="${qn("WebComic")}"
              ?selected=${q("viewMode")==="WebComic"}
            >
              <mov-icon
                slot="icon"
                name="IconSpacingVertical"
              ></mov-icon>
              ${K("VIEW_MODE_WEBCOMIC")} ${a("VIEW_MODE_WEBCOMIC")}
            </mov-dropdown-item>
            <mov-dropdown-item
              id="verticalMode"
              class="tablets"
              @click="${qn("Vertical")}"
              ?selected=${q("viewMode")==="Vertical"}
            >
              <mov-icon
                slot="icon"
                name="IconArrowAutofitDown"
              ></mov-icon>
              ${K("VIEW_MODE_VERTICAL")} ${a("VIEW_MODE_VERTICAL")}
            </mov-dropdown-item>
            <mov-dropdown-item
              id="ltrMode"
              @click="${qn("FluidLTR")}"
              ?selected=${q("viewMode")==="FluidLTR"}
            >
              <mov-icon
                slot="icon"
                name="IconArrowAutofitRight"
              ></mov-icon>
              ${K("VIEW_MODE_LEFT")} ${a("VIEW_MODE_LEFT")}
            </mov-dropdown-item>
            <mov-dropdown-item
              id="rtlMode"
              @click="${qn("FluidRTL")}"
              ?selected=${q("viewMode")==="FluidRTL"}
            >
              <mov-icon
                slot="icon"
                name="IconArrowAutofitLeft"
              ></mov-icon>
              ${K("VIEW_MODE_RIGHT")} ${a("VIEW_MODE_RIGHT")}
            </mov-dropdown-item>
          </mov-dropdown>
          <mov-dropdown
            id="ZoomDropdown"
            checkable
          >
            <mov-button
              slot="trigger"
              title="${K("ZOOM_MENU")}"
            >
              <mov-icon
                label="Zoom"
                name="IconZoom"
              ></mov-icon>
            </mov-button>
            <mov-dropdown-item
              id="enlarge"
              @click="${Sa()}"
            >
              <mov-icon
                slot="icon"
                name="IconZoomInArea"
              ></mov-icon>
              ${K("ENLARGE")} ${a("ENLARGE")}
            </mov-dropdown-item>
            <mov-dropdown-item
              id="restore"
              @click="${wi("percent",100)}"
            >
              <mov-icon
                slot="icon"
                name="IconZoomPan"
              ></mov-icon>
              ${K("RESTORE")} ${a("RESTORE")}
            </mov-dropdown-item>
            <mov-dropdown-item
              id="reduce"
              @click="${Sa(-1)}"
            >
              <mov-icon
                slot="icon"
                name="IconZoomOutArea"
              ></mov-icon>
              ${K("REDUCE")} ${a("REDUCE")}
            </mov-dropdown-item>
            <mov-dropdown-item
              id="fitWidth"
              @click="${wi("width")}"
              ?selected=${q("zoomMode")==="width"}
            >
              <mov-icon
                slot="icon"
                name="IconArrowAutofitWidth"
              ></mov-icon>
              ${K("FIT_WIDTH")} ${a("FIT_WIDTH")}
            </mov-dropdown-item>
            <mov-dropdown-item
              id="fitHeight"
              @click="${wi("height")}"
              ?selected=${q("zoomMode")==="height"}
            >
              <mov-icon
                slot="icon"
                name="IconArrowAutofitHeight"
              ></mov-icon>
              ${K("FIT_HEIGHT")} ${a("FIT_HEIGHT")}
            </mov-dropdown-item>
          </mov-dropdown>
        </div>
        <div id="ViewerTitle">
          <h1
            id="MangaTitle"
            title="${this.manga.title}"
          >
            ${this.titleController.value??this.manga.title}
          </h1>
        </div>
        <div id="ZoomControl">
          <input
            type="range"
            id="Zoom"
            name="Zoom"
            .value="${q("zoomValue")}"
            min="${q("minZoom")}"
            max="200"
            @input=${B6}
          />
          <span id="ZoomVal">
            Zoom:
            ${q("zoomMode")==="percent"?`${q("zoomValue")}%`:q("zoomMode")}</span
          >
        </div>
        <div
          id="GlobalFunctions"
          class="button-group"
        >
          <mov-button
            id="series"
            href="${this.manga.series??Pe}"
            @click=${lo}
            title="${K("RETURN_CHAPTER_LIST")}"
            ?disabled=${!this.manga.series}
          >
            <mov-icon name="IconBookReturn"></mov-icon>
          </mov-button>
          <mov-button
            id="download"
            title="${K("DOWNLOAD_ZIP")}"
            @click=${Gd}
            ?disabled=${ge("download")!=="available"}
            ?loading=${ge("download")==="working"}
          >
            <mov-icon
              name="${ge("download")==="working"?"IconLoader2":"IconFileDownload"}"
            ></mov-icon>
          </mov-button>
          <mov-button
            id="prev"
            href="${this.manga.prev??Pe}"
            title="${K("PREVIOUS_CHAPTER")}"
            @click=${lo}
            ?disabled=${!this.manga.prev}
          >
            <mov-icon name="IconArrowBigLeft"></mov-icon>
          </mov-button>
          <mov-button
            id="next"
            href="${this.manga.next??Pe}"
            title="${K("NEXT_CHAPTER")}"
            @click=${lo}
            ?disabled=${!this.manga.next}
          >
            <mov-icon name="IconArrowBigRight"></mov-icon>
          </mov-button>
        </div>
      </header>
    `}};Y([Br("#MangaTitle")],xa.prototype,"mangaTitleElement",void 0),Y([he({type:Object})],xa.prototype,"manga",void 0),xa=Y([pt("reader-header"),(0,_i.useStores)(St,ei,jt)],xa);var ob="#BookmarksPanel{text-align:center;--width:100vw}#BookmarksList{flex-direction:column;gap:5px;max-height:60vh;padding:0 5px;display:flex;overflow:auto}.bookmark-item{text-align:left;border-radius:5px;align-items:center;gap:1rem;padding:.75rem 1rem;transition:background-color .15s ease-in-out;display:flex}.bookmark-item:hover{background-color:var(--mov-color-fill-quiet,#8080801a)}.bookmark-info{flex-grow:1;min-width:0}.bookmark-name{font-weight:500}.bookmark-url{white-space:nowrap;text-overflow:ellipsis;color:color-mix(in oklab, var(--theme-body-text-color), transparent 30%);font-size:.875rem;text-decoration:none;display:block;overflow:hidden}.bookmark-url:hover{text-decoration:underline}.bookmark-details{text-align:right;width:90px;color:color-mix(in oklab, var(--theme-body-text-color), transparent 30%);flex-shrink:0;font-size:.875rem}.bookmark-details>div{padding:2px 0}.bookmark-actions{flex-shrink:0;gap:.5rem;display:flex}",ah=class extends nt{static{this.styles=[qt(ob)]}listBookmarks(){return _s(q("bookmarks"))?[K("LIST_EMPTY")]:q("bookmarks").map((t,r)=>le`
        <div
          id="Bookmark${r+1}"
          class="bookmark-item"
        >
          <div class="bookmark-info">
            <div class="bookmark-name">${t.name}</div>
            <a
              class="bookmark-url"
              href="${t.url}"
              target="_blank"
              >${t.url}</a
            >
          </div>
          <div class="bookmark-details">
            <div class="bookmark-date">${new Date(t.date).toISOString().slice(0,10)}</div>
            <div class="bookmark-page">Page: ${t.page}</div>
          </div>
          <div class="bookmark-actions">
            <a
              href="${t.url}"
              target="_blank"
            >
              <mov-button
                title="Open Bookmark"
                size="small"
              >
                <mov-icon
                  name="IconExternalLink"
                  size="16px"
                ></mov-icon>
              </mov-button>
            </a>
            <mov-button
              title="Delete Bookmark"
              size="small"
              value="${t.url}"
              @click=${J6}
            >
              <mov-icon
                name="IconTrash"
                size="16px"
              ></mov-icon>
            </mov-button>
          </div>
        </div>
      `)}render(){return le`
      <mov-dialog
        id="BookmarksPanel"
        ?open=${ge("panel")==="bookmarks"}
        light-dismiss
        @close=${Pl}
      >
        <mov-button
          class="Bookmark"
          title="${K("BOOKMARK")}"
          @click=${ih}
          slot="header-actions"
        >
          <mov-icon
            name="${ni()===void 0?"IconBookmark":"IconBookmarkOff"}"
            size="24px"
          ></mov-icon>
        </mov-button>
        <h2 slot="header">${K("BOOKMARKS")}</h2>
        <h2 slot="label">${K("BOOKMARKS")}</h2>
        <div id="BookmarksList">${this.listBookmarks()}</div>
      </mov-dialog>
    `}};ah=Y([pt("bookmark-panel"),(0,_i.useStores)(St,ei,jt)],ah);function*ab(e,t){const r=typeof t=="function";if(e!==void 0){let o=-1;for(const a of e)o>-1&&(yield r?t(o):t),o++,yield a}}var sb="#KeybindingsPanel div{line-height:1.5em}#KeybindingsPanel #KeybindingsList{grid-template-columns:1fr 2fr;gap:5px;display:grid}#KeybindingsPanel .ControlButton{justify-content:center;align-items:center;gap:.5em;margin-left:3px;padding:5px 10px}#KeybindingsPanel label{display:ruby}#KeybindingsPanel input{width:100%;display:inline-block}#KeybindingsPanel #HotKeysRules{grid-column:span 2}",sh=class extends nt{constructor(...t){super(...t),this.keybindsRefs=Object.keys(q("keybinds")).reduce((r,o)=>(r[o]=Ts(),r),{})}static{this.styles=[qt(sb),qt(rh)]}keybindList(){const t=q("keybinds");return Object.keys(t).map(r=>{const o=t[r]?.length?ab(t[r]?.map(a=>le`<kbd class="dark">${a}</kbd>`)," / "):"";return le`<span>${K(r)}:</span> <span>${o}</span>`})}keybindEditor(){const t=q("keybinds");return Object.keys(t).map(r=>le`<label for="${r}">${K(r)}:</label>
          <input
            type="text"
            class="KeybindInput"
            id="${r}"
            name="${r}"
            value="${t[r]?.join(" , ")??Pe}"
            ${Rs(this.keybindsRefs[r])}
          />`)}render(){return le`
      <mov-drawer
        id="KeybindingsPanel"
        ?open=${ge("panel").startsWith("keybindings")}
        placement="end"
        @close=${Pl}
      >
        <h2 slot="label">${K("KEYBINDINGS")}</h2>
        <div
          class="controls"
          slot="header-actions"
        >
          ${ge("panel")==="keybindingsEditor"?le` <mov-button
                id="SaveKeybindings"
                type="button"
                title="${K("SAVE_KEYBINDS")}"
                @click=${()=>nb(this.keybindsRefs)}
              >
                <mov-icon
                  name="IconDeviceFloppy"
                  size="16px"
                  slot="start"
                ></mov-icon>
                ${K("BUTTON_SAVE")}
              </mov-button>`:le` <mov-button
                id="EditKeybindings"
                type="button"
                title="${K("EDIT_KEYBINDS")}"
                @click=${rb}
              >
                <mov-icon
                  name="IconPencil"
                  size="16px"
                  slot="start"
                ></mov-icon>
                ${K("BUTTON_EDIT")}
              </mov-button>`}
        </div>
        <div id="KeybindingsList">
          ${ge("panel")==="keybindingsEditor"?this.keybindEditor():this.keybindList()}
        </div>
        <div id="HotKeysRules">${Pd(K("KEYBIND_RULES"))}</div>
      </mov-drawer>
    `}};sh=Y([pt("keybindings-panel"),(0,_i.useStores)(St,ei,jt)],sh);function*lb(e,t){if(e!==void 0){let r=0;for(const o of e)yield t(o,r++)}}function vo(e,t=1){return Array(e).fill(0).map((r,o)=>o+1).filter(r=>r>=t)}function lh(e){e.deltaY&&(e.currentTarget.scrollLeft+=e.deltaY+e.deltaX,e.preventDefault())}function cb(e){e.deltaY&&(e.currentTarget.scrollLeft-=e.deltaY-e.deltaX,e.preventDefault())}var ub=":host{--nav-collapsed-size:34px;--nav-expanded-size:200px;--header-height:80px}#Navigation{color:var(--theme-text-color);background-color:var(--theme-hightlight-color);box-sizing:border-box;white-space:nowrap;text-align:center;z-index:1000;gap:5px;line-height:0;transition:all .3s;display:flex;position:fixed;overflow:hidden}#Thumbnails{flex-grow:1;justify-content:flex-start;gap:5px;display:flex}#Navigation.horizontal #Thumbnails{flex-direction:row;overflow:auto hidden}#Navigation.vertical #Thumbnails{flex-direction:column;justify-content:flex-start;overflow:hidden auto}#Navigation.left #Thumbnails{direction:rtl}:host(:not([forceExpanded])) #Navigation:not(:hover) #Thumbnails{display:none}#NavigationCounters{text-align:center;white-space:nowrap;flex-shrink:0;justify-content:center;align-items:center;gap:.5rem;padding:5px;line-height:1rem;display:flex}#Navigation.horizontal{height:var(--nav-collapsed-size);flex-direction:column;width:100%;left:0;right:0}:host([forceExpanded]) #Navigation.horizontal,#Navigation.horizontal:hover{height:var(--nav-expanded-size)}#Navigation.bottom{bottom:0}#Navigation.vertical{width:var(--nav-collapsed-size);flex-direction:row;height:100%;transition:top .3s,height .3s,width .3s;bottom:0}:host([forceExpanded]) #Navigation.vertical,#Navigation.vertical:hover{width:var(--nav-expanded-size)}#Navigation.left{flex-direction:row-reverse;left:0}#Navigation.right{right:0}#Navigation.vertical #NavigationCounters{writing-mode:vertical-rl;transform:rotate(180deg)}#Navigation.right #NavigationCounters{transform:rotate(0)}#Navigation.vertical.header{top:var(--header-height);height:calc(100% - var(--header-height))}#Navigation .Thumbnail{justify-content:center;align-items:center;width:150px;height:150px;margin:0 5px;display:inline-flex;position:relative}.ThumbnailIndex{color:var(--mov-color-on-loud);background-color:var(--mov-color-fill-loud);opacity:.9;text-align:center;z-index:1;width:100%;font-weight:600;line-height:1.2rem;display:block;position:absolute;bottom:30%;left:0}.ThumbnailImg{cursor:pointer;background-position:50%;background-repeat:no-repeat;background-size:48px 48px;min-width:80px;max-width:150px;min-height:150px;max-height:150px;display:inline-block}",bo=class extends nt{constructor(...t){super(...t),this.mode="bottom",this.forceExpanded=!1,this.isHiding=!1}static{this.styles=[qt(ub),Pt`
      #Navigation {
        transition: opacity 0.2s ease-in-out;
      }
      #Navigation.hiding {
        opacity: 0;
        /* Disable transition during position change to avoid animating the hide */
        transition: none;
      }

      .Thumbnail .ThumbnailImg[src=''],
      .Thumbnail .ThumbnailImg:not([src]) {
        background-image: url('${qt(oo(El))}');
      }

      .Thumbnail .ThumbnailImg.imgBroken {
        background-image: url('${qt(oo(Sl))}');
      }
    `]}willUpdate(t){t.has("mode")&&(this.isHiding=!0)}updated(t){t.has("mode")&&this.isHiding&&setTimeout(()=>{this.isHiding=!1},50)}render(){if(this.mode==="disabled")return Pe;const t=ge("manga"),r={horizontal:this.mode==="bottom",vertical:this.mode!=="bottom",left:this.mode==="left",right:this.mode==="right",bottom:this.mode==="bottom",hiding:this.isHiding},o=Object.values(ge("images")??{}).filter(a=>a.status==="loaded").length;return le`
      <nav
        id="Navigation"
        class="${Ot(r)}"
      >
        <div
          id="NavigationCounters"
          class="ControlLabel"
        >
          ${C3}
          <i>${o}</i> /
          <b> ${(t?.pages??1)-((t?.begin??1)-1)} </b>
          ${K("PAGES_LOADED")}
          <span>: ${ge("currentPage")}</span>
        </div>
        <div
          id="Thumbnails"
          @wheel=${this.mode==="bottom"?lh:null}
        >
          ${lb(vo(t?.pages??1,t?.begin??1),a=>le` <figure
                id="Thumbnail${a}"
                class="Thumbnail"
                role="button"
                tabindex="0"
                title="Go to page ${a}"
                @click=${()=>e6(a)}
              >
                <img
                  id="ThumbnailImg${a}"
                  alt=""
                  class="ThumbnailImg"
                  src=${ge("images")?.[a]?.src??Pe}
                />
                <figcaption class="ThumbnailIndex">${a}</figcaption>
              </figure>`)}
        </div>
      </nav>
    `}};Y([he({type:String})],bo.prototype,"mode",void 0),Y([he({type:Boolean})],bo.prototype,"forceExpanded",void 0),Y([sn()],bo.prototype,"isHiding",void 0),bo=Y([pt("navbar-thumbnails"),(0,_i.useStores)(St,ei,jt)],bo);function db(){const e=Pr()?"true":"false";return le` <div class="ControlLabel">
    ${K("SCOPE")}
    <segmented-control
      .value=${e}
      @change=${_6}
    >
      <segmented-control-option
        value="false"
        label=${K("GLOBAL")}
        icon="IconWorldCog"
      ></segmented-control-option>
      <segmented-control-option
        value="true"
        label=${window.location.hostname}
        icon="IconLocationCog"
      ></segmented-control-option>
    </segmented-control>
  </div>`}function hb(){return Qr.map(e=>le`
      <option
        value="${e.ID}"
        ?selected=${q("locale")===e.ID}
      >
        ${e.NAME}
      </option>
    `)}function fb(){return le` <div class="ControlLabel locale">
    ${K("LANGUAGE")}
    <select
      id="locale"
      @change="${y6}"
    >
      ${hb()}
    </select>
  </div>`}var pb=()=>le`${db()} ${fb()}`;function gb(){return le`
    <div class="ControlLabel loadMode">
      ${K("DEFAULT_LOAD_MODE")}
      <select
        id="loadMode"
        @change="${k6}"
      >
        <option
          value="wait"
          ?selected=${q("loadMode")==="wait"}
        >
          ${K("LOAD_MODE_NORMAL")}
        </option>
        <option
          value="always"
          ?selected=${q("loadMode")==="always"}
        >
          ${K("LOAD_MODE_ALWAYS")}
        </option>
        <option
          value="never"
          ?selected=${q("loadMode")==="never"}
        >
          ${K("LOAD_MODE_NEVER")}
        </option>
      </select>
    </div>
  `}function mb(){return le`
    <div class="ControlLabel PagesPerSecond">
      ${K("LOAD_SPEED")}
      <select
        id="PagesPerSecond"
        @change="${O6}"
      >
        <option
          value="3000"
          ?selected=${q("throttlePageLoad")===3e3}
        >
          0.3(${K("SLOWLY")})
        </option>
        <option
          value="2000"
          ?selected=${q("throttlePageLoad")===2e3}
        >
          0.5
        </option>
        <option
          value="1000"
          ?selected=${q("throttlePageLoad")===1e3}
        >
          01(${K("NORMAL")})
        </option>
        <option
          value="500"
          ?selected=${q("throttlePageLoad")===500}
        >
          02
        </option>
        <option
          value="250"
          ?selected=${q("throttlePageLoad")===250}
        >
          04(${K("FAST")})
        </option>
        <option
          value="125"
          ?selected=${q("throttlePageLoad")===125}
        >
          08
        </option>
        <option
          value="100"
          ?selected=${q("throttlePageLoad")===100}
        >
          10(${K("EXTREME")})
        </option>
        <option
          value="1"
          ?selected=${q("throttlePageLoad")===1}
        >
          ${K("ALL_PAGES")}
        </option>
      </select>
    </div>
  `}var vb=()=>le`${gb()} ${mb()}`;function bb(){return le`
    <div class="ControlLabel fitIfOversize">
      ${K("FIT_WIDTH_OVERSIZED")}
      <mov-switch
        name="fitIfOversize"
        ?checked=${q("fitWidthIfOversize")}
        @change=${E6}
      ></mov-switch>
    </div>
    <div class="ControlLabel downloadZip">
      ${K("DOWNLOAD_IMAGES")}
      <mov-switch
        name="downloadZip"
        ?checked=${q("downloadZip")}
        @change=${M6}
      ></mov-switch>
    </div>
    <div class="ControlLabel hidePageControls">
      ${K("HIDE_CONTROLS")}
      <mov-switch
        name="hidePageControls"
        ?checked=${q("hidePageControls")}
        @change=${L6}
      ></mov-switch>
    </div>
    <div class="ControlLabel lazyLoadImages">
      ${K("LAZY_LOAD_IMAGES_ENABLE")}
      <mov-switch
        name="lazyLoadImages"
        ?checked=${q("lazyLoadImages")}
        @change=${x6}
      ></mov-switch>
    </div>
  `}function wb(){return le`
    <div
      class="${Ot({ControlLabel:!0,lazyStart:!0,ControlLabelItem:!0,show:q("lazyLoadImages")})}"
    >
      <span>
        ${K("LAZY_LOAD_IMAGES")}
        <output
          id="lazyStartVal"
          for="lazyStart"
        >
          ${q("lazyStart")}
        </output>
      </span>
      <input
        type="range"
        value="${q("lazyStart")}"
        name="lazyStart"
        id="lazyStart"
        min="5"
        max="100"
        step="5"
        oninput="lazyStartVal.value = this.value"
        @change="${I6}"
      />
    </div>
  `}function _b(){return le`
    <div class="ControlLabel headerType">
      ${K("HEADER_TYPE")}
      <segmented-control
        .value=${q("header")}
        @change=${R6}
        labelPosition="bottom"
      >
        <segmented-control-option
          value="hover"
          label=${K("HEADER_HOVER")}
          icon="arrows-move"
        ></segmented-control-option>
        <segmented-control-option
          value="scroll"
          label=${K("HEADER_SCROLL")}
          icon="arrows-vertical"
        ></segmented-control-option>
        <segmented-control-option
          value="click"
          label=${K("HEADER_CLICK")}
          icon="hand-click"
        ></segmented-control-option>
        <segmented-control-option
          value="fixed"
          label=${K("HEADER_FIXED")}
          icon="pin"
        ></segmented-control-option>
        <segmented-control-option
          value="simple"
          label=${K("HEADER_SIMPLE")}
          icon="box-align-top"
        ></segmented-control-option>
      </segmented-control>
    </div>
  `}function yb(){return le`
    <div class="ControlLabel pagination">
      ${K("PAGINATION_TYPE")}
      <segmented-control
        .value=${q("pagination")}
        @change=${A6}
        labelPosition="side"
      >
        <segmented-control-option
          value="disabled"
          label=${K("PAGINATION_DISABLED")}
          icon="x"
        ></segmented-control-option>
        <segmented-control-option
          value="slider"
          label=${K("PAGINATION_SLIDER")}
          icon="adjustments-horizontal"
        ></segmented-control-option>
        <segmented-control-option
          value="side-arrows"
          label=${K("PAGINATION_ARROWS")}
          icon="arrows-left-right"
        ></segmented-control-option>
        <segmented-control-option
          value="both"
          label=${K("PAGINATION_BOTH")}
          icon="arrows-horizontal"
        ></segmented-control-option>
      </segmented-control>
    </div>
  `}function kb(){return le`
    <div class="ControlLabel navbarType">
      ${K("NAVBAR_TYPE")}
      <segmented-control
        .value=${q("navbar")}
        @change=${S6}
        labelPosition="tooltip"
      >
        <segmented-control-option
          value="bottom"
          label=${K("NAVBAR_BOTTOM")}
          icon="layout-bottombar"
        ></segmented-control-option>
        <segmented-control-option
          value="left"
          label=${K("NAVBAR_LEFT")}
          icon="layout-sidebar"
        ></segmented-control-option>
        <segmented-control-option
          value="right"
          label=${K("NAVBAR_RIGHT")}
          icon="layout-sidebar-right"
        ></segmented-control-option>
        <segmented-control-option
          value="disabled"
          label=${K("NAVBAR_DISABLED")}
          icon="x"
        ></segmented-control-option>
      </segmented-control>
    </div>
  `}function Eb(){return le`
    <div class="ControlLabel autoScroll">
      <span>
        ${K("AUTO_SCROLL_HEIGHT")}
        <output
          id="scrollHeightVal"
          for="scrollHeight"
        >
          ${q("scrollHeight")} </output
        >px
      </span>
      <input
        type="range"
        value="${q("scrollHeight")}"
        name="scrollHeight"
        id="scrollHeight"
        min="1"
        max="${Math.ceil(window.innerHeight/200)*100}"
        step="1"
        @change="${P6}"
      />
    </div>
  `}var Sb=()=>le`${bb()} ${yb()} ${wb()} ${_b()} ${kb()} ${Eb()}`;function Ab(){const e=q("colorScheme")==="dark";bt("colorScheme",e?"light":"dark"),document.documentElement.classList.remove(e?"dark":"light"),document.documentElement.classList.add(q("colorScheme"))}function Ia(e){bt("theme",e instanceof CustomEvent?e.detail.value:e.currentTarget.value)}function Mb(){return le`
    <div class="ControlLabel ColorSchemeSelector">
      <label>${K("COLOR_SCHEME")}</label>
      <toggle-button
        id="ColorScheme"
        mode="theme"
        @click=${Ab}
        ?active=${q("colorScheme")==="dark"}
      >
      </toggle-button>
    </div>
    <div class="ControlLabel ThemeSelector">
      <label>${K("THEME_COLOR")}</label>
      <mov-color-picker
        id="ThemeHex"
        .value="${q("theme")}"
        title="${q("theme")}"
        @input=${Ia}
        .swatches=${Object.values(ml)}
      ></mov-color-picker>
    </div>
    <color-palette
      .baseColor="${q("theme")}"
      mode="steps"
      .selected=${q("theme")}
      @change="${Ia}"
    ></color-palette>
    <span id="ColorRecommendations">
      ${Object.values(ml).map(e=>le`<color-swatch
            .color="${e}"
            .selected=${q("theme")}
            @change=${Ia}
          ></color-swatch>`)}
    </span>
    <details class="ControlLabel">
      <summary>${K("THEME_HUE")} & ${K("THEME_SHADE")}</summary>
      <color-panel
        .selected=${q("theme")}
        @change=${Ia}
      ></color-panel>
    </details>
  `}function xb(){return le` <div class="ControlLabel DefaultZoomMode">
    ${K("DEFAULT_ZOOM_MODE")}
    <segmented-control
      .value=${q("zoomMode")}
      @change=${D6}
      labelPosition="tooltip"
    >
      <segmented-control-option
        value="percent"
        label=${K("PERCENT")}
        icon="file-percent"
      ></segmented-control-option>
      <segmented-control-option
        value="width"
        label=${K("FIT_WIDTH")}
        icon="arrow-autofit-width"
      ></segmented-control-option>
      <segmented-control-option
        value="height"
        label=${K("FIT_HEIGHT")}
        icon="arrow-autofit-height"
      ></segmented-control-option>
    </segmented-control>
  </div>`}function Ib(){return le`
    <div
      class="${Ot({ControlLabel:!0,zoomValue:!0,ControlLabelItem:!0,show:q("zoomMode")==="percent"})}"
    >
      <span>
        ${K("DEFAULT_ZOOM")}
        <output
          id="zoomValueVal"
          class="RangeValue"
          for="zoomValue"
        >
          ${q("zoomValue")}%
        </output>
      </span>
      <input
        type="range"
        value="${q("zoomValue")}"
        name="zoomValue"
        id="zoomValue"
        min="5"
        max="200"
        step="5"
        list="zoomValueList"
        @input="${N6}"
      />
      <datalist id="zoomValueList">
        <option value="5">5</option>
        <option value="25">25</option>
        <option value="50">50</option>
        <option value="75">75</option>
        <option value="100">100</option>
        <option value="125">125</option>
        <option value="150">150</option>
        <option value="175">175</option>
        <option value="200">200</option>
      </datalist>
    </div>
  `}function Ob(){return le`
    <div class="ControlLabel minZoom">
      <span>
        ${K("MINIMUM_ZOOM")}
        <output
          id="minZoomVal"
          class="RangeValue"
          for="minZoom"
        >
          ${q("minZoom")}%
        </output>
      </span>
      <input
        type="range"
        value="${q("minZoom")}"
        name="minZoom"
        id="minZoom"
        min="25"
        max="100"
        step="5"
        @input="${T6}"
        list="minZoomList"
      />
      <datalist id="minZoomList">
        <option value="25">25</option>
        <option value="50">50</option>
        <option value="75">75</option>
        <option value="100">100</option>
      </datalist>
    </div>
  `}function Cb(){return le`
    <div class="ControlLabel zoomStep">
      <span>
        ${K("ZOOM_STEP")}
        <output
          id="zoomStepVal"
          class="RangeValue"
          for="zoomStep"
        >
          ${q("zoomStep")}%
        </output>
      </span>
      <input
        type="range"
        value="${q("zoomStep")}"
        name="zoomStep"
        id="zoomStep"
        min="10"
        max="50"
        step="5"
        @input="${C6}"
        list="zoomStepList"
      />
      <datalist id="zoomStepList">
        <option value="10">10</option>
        <option value="30">30</option>
        <option value="50">50</option>
      </datalist>
    </div>
  `}function Tb(){return le`
    <div class="ControlLabel viewMode">
      ${K("DEFAULT_VIEW_MODE")}
      <segmented-control
        .value=${q("viewMode")}
        @change=${H6}
        labelPosition="tooltip"
      >
        <segmented-control-option
          value="Vertical"
          label=${K("VIEW_MODE_VERTICAL")}
          icon="arrow-autofit-down"
        ></segmented-control-option>
        <segmented-control-option
          value="WebComic"
          label=${K("VIEW_MODE_WEBCOMIC")}
          icon="spacing-vertical"
        ></segmented-control-option>
        <segmented-control-option
          value="FluidLTR"
          label=${K("VIEW_MODE_LEFT")}
          icon="arrow-autofit-right"
        ></segmented-control-option>
        <segmented-control-option
          value="FluidRTL"
          label=${K("VIEW_MODE_RIGHT")}
          icon="arrow-autofit-left"
        ></segmented-control-option>
      </segmented-control>
    </div>
  `}var Lb=()=>le`${xb()} ${Ib()} ${Ob()} ${Cb()} ${Tb()}`,Rb="#SettingsPanel{color:var(--theme-text-color)}#SettingsPanel fieldset{border:1px solid var(--theme-body-text-color);border-radius:10px;padding:3px}#SettingsPanel .ControlLabel{flex-flow:wrap;justify-content:space-between;align-items:center;padding:2px;display:flex}#SettingsPanel .ControlLabelItem{justify-content:space-between;align-items:center;display:flex}#SettingsPanel .ControlLabelItem:not(.show){display:none}#SettingsPanel input[type=range]{width:100%}#SettingsPanel .RangeValue{color:var(--mov-color-on-loud);text-align:center;background:var(--mov-color-fill-loud);border-radius:3px;margin-left:8px;padding:2px 5px;line-height:20px;display:inline-block}#SettingsPanel datalist{flex-direction:row;justify-content:space-between;width:100%;display:flex}#SettingsPanel datalist option{writing-mode:vertical-lr;padding:0}#ThemeSelector{width:110px}#ColorRecommendations{flex-flow:wrap;gap:2px;display:flex}#Chapter:not(.Vertical)~#SettingsPanel .verticalSeparator{display:none}#ColorScheme{min-width:28px;min-height:28px;padding:5px}#ResetSettings,#ResetSettings::part(base){width:100%}",ch=class extends nt{static{this.styles=[Pt`
      #SettingsPanel.mobile #SettingsPanelZoom,
      #SettingsPanel.mobile .fitIfOversize,
      #SettingsPanel.mobile .showThumbnails,
      #SettingsPanel.mobile .lazyLoadImages,
      #SettingsPanel.mobile .downloadZip,
      #SettingsPanel.mobile .minZoom,
      #SettingsPanel.mobile .zoomStep,
      #SettingsPanel.mobile .headerType,
      #SettingsPanel.mobile .navbarType,
      #SettingsPanel.mobile .autoScroll {
        display: none;
      }
    `,qt(Rb)]}render(){return le`
      <mov-drawer
        id="SettingsPanel"
        ?open=${ge("panel")==="settings"}
        @close=${Pl}
        placement="start"
        class="${ge("device")}"
      >
        <h2 slot="label">${K("SETTINGS")}</h2>
        <mov-button
          id="ResetSettings"
          @click="${Np}"
          title="${K("BUTTON_RESET_SETTINGS")}"
        >
          <mov-icon
            name="IconSettingsOff"
            size="20px"
            slot="start"
          ></mov-icon>
          ${K("BUTTON_RESET_SETTINGS")}
        </mov-button>
        <div class="content">
          <fieldset id="SettingsPanelGeneral">
            <legend>${K("GENERAL")}</legend>
            ${pb()}
          </fieldset>
          <fieldset id="SettingsPanelTheme">
            <legend>${K("THEME")}</legend>
            ${Mb()}
          </fieldset>
          <fieldset id="SettingsPanelLoading">
            <legend>${K("LOADING")}</legend>
            ${vb()}
          </fieldset>
          <fieldset id="SettingsPanelZoom">
            <legend>${K("ZOOM")}</legend>
            ${Lb()}
          </fieldset>
          <fieldset id="SettingsPanelOthers">
            <legend>${K("OTHERS")}</legend>
            ${Sb()}
          </fieldset>
        </div>
      </mov-drawer>
    `}};ch=Y([pt("settings-panel"),(0,_i.useStores)(St,ei,jt)],ch);function Pb(e){return new Promise(function(t,r){var o=new FileReader,a=typeof o.readAsBinaryString=="function";o.onloadend=function(){var s=o.result||"";if(a)return t(s);t(Db(s))},o.onerror=r,a?o.readAsBinaryString(e):o.readAsArrayBuffer(e)})}function $b(e){return Pb(e).then(btoa)}function zb(e){return $b(e).then(function(t){return"data:"+e.type+";base64,"+t})}function Db(e){for(var t="",r=new Uint8Array(e),o=r.byteLength,a=-1;++a<o;)t+=String.fromCharCode(r[a]);return t}async function Nb(e,t){ke("Fetching page: ",e);try{const r=await(await fetch(e)).text();return new DOMParser().parseFromString(r,t)}catch(r){throw ke("Failed to fetch page: ",r),r}}async function Bb(e){return Nb(e,"text/html")}async function Hb(e,t,r){try{return(await Bb(e)).querySelector(t)?.getAttribute(r)}catch(o){return ke("Failed to get element attribute: ",o),null}}function Fb(e){if(e){let t=e.trim();return t.startsWith("//")&&(t=`https:${t}`),t}return""}async function Oa(e,t,r,o=0){const a=ge("images")?.[t];a?.status&&a.status!=="pending"||(Nn(t,()=>({status:"loading"})),setTimeout(async()=>{let s=Fb(r),c,d="loaded";try{const u=await fetch(s,e.fetchOptions);u.ok?(c=await u.blob(),s=await zb(c)):d="error"}catch(u){ke("Failed to fetch image",u),d="error"}Nn(t,()=>({src:s,blob:c,status:d})),mn("Loaded Image:",t,"Source:",s)},(e.timer??q("throttlePageLoad"))*o),e.pages===t&&Rl())}async function uh(e,t,r,o=0){const a=ge("images")?.[t];a?.status&&a.status!=="pending"||(Nn(t,()=>({status:"loading"})),setTimeout(async()=>{try{const s=await Hb(r,e.img,e.lazyAttr??"src");s?(Nn(t,()=>({status:"pending"})),await Oa(e,t,s,0)):Nn(t,()=>({status:"error"}))}catch(s){ke("Failed to get page attribute",s),Nn(t,()=>({status:"error"}))}},(e.timer??q("throttlePageLoad"))*o),e.pages===o&&Rl())}function dh(e,t){vo(t.pages,e).filter((r,o)=>!(t.lazy??q("lazyLoadImages"))||o<=q("lazyStart")).forEach((r,o)=>{uh(t,r,t.listPages[r-1],o)})}function hh(e,t){vo(t.pages,e).filter((r,o)=>!(t.lazy??q("lazyLoadImages"))||o<=q("lazyStart")).forEach((r,o)=>{Oa(t,r,t.listImages[r-1],o)})}async function Gb(){await ys(()=>ge("manga")!==void 0);const e=ge("manga"),t=e.begin??1;mn("Loading Images"),mn(`Intervals: ${e.timer??q("throttlePageLoad")??"Default(1000)"}`),mn(`Lazy: ${e.lazy??q("lazyLoadImages")}, Starting from: ${q("lazyStart")}`),Gr(),Jc(e)?(mn("Method: Images:",e.listImages),hh(t,e)):Qc(e)?(mn("Method: Pages:",e.listPages),dh(t,e)):r2(e)?(mn("Method: Brute Force"),e.bruteForce({begin:t,addImg:Oa,loadImages(r){hh(t,{...e,listImages:r})},loadPages(r,o,a){dh(t,{...e,listPages:r,img:o,lazyAttr:a})},wait:q("throttlePageLoad")})):ke("No Loading Method Found"),jt.listen((r,o,a)=>{if(a==="currentPage"&&r.currentPage>o.currentPage)for(let s=r.currentPage;s<r.currentPage+5;s++)r.images?.[s]?.src===void 0&&(Jc(e)?Oa(e,s,e.listImages[s-1]):Qc(e)&&uh(e,s,e.listPages[s-1]))})}function Ub(){const e=ge("images");if(!e)return null;const t=q("viewMode"),r=t==="FluidLTR"||t==="FluidRTL",o=t==="FluidRTL",a=window.innerHeight/2,s=window.innerWidth/2;let c=null;for(const d in e){const u=e[d].ref?.value;if(!u)continue;const h=u?.getBoundingClientRect();let f;r?o?f=h.right:f=h.left:f=h.top,(r?f<=s:f<=a)&&(!c||f>c.edge)&&(c={index:parseInt(d,10),edge:f})}return c?c.index:ge("manga")?.begin??1}function fh(){const e=Ub();e!=null&&ge("currentPage")!==e&&Ge("currentPage",e)}function Wb(){const e=Je.default.throttle(()=>{requestAnimationFrame(fh)},100);window.addEventListener("scroll",e,{passive:!0}),window.addEventListener("resize",e),ge("chapter").value?.addEventListener("scroll",e,{passive:!0}),requestAnimationFrame(fh)}function ph(){if(!ge("chapter").value){setTimeout(ph,50);return}Wb()}var gh=Je.default.debounce(()=>{Ge("device",Di()),Gr()},200);async function Vb(){await ys(()=>ge("manga")!==void 0),nh(),window.addEventListener("resize",gh),window.addEventListener("orientationchange",gh),f6(),ph()}var Zb=pn(((e,t)=>{(function(r,o){typeof define=="function"&&define.amd?define(o):typeof e=="object"?t.exports=o():r.NProgress=o()})(e,function(){var r={};r.version="0.2.0";var o=r.settings={minimum:.08,easing:"ease",positionUsing:"",speed:200,trickle:!0,trickleRate:.02,trickleSpeed:800,showSpinner:!0,barSelector:'[role="bar"]',spinnerSelector:'[role="spinner"]',parent:"body",template:'<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'};r.configure=function(m){var k,_;for(k in m)_=m[k],_!==void 0&&m.hasOwnProperty(k)&&(o[k]=_);return this},r.status=null,r.set=function(m){var k=r.isStarted();m=a(m,o.minimum,1),r.status=m===1?null:m;var _=r.render(!k),S=_.querySelector(o.barSelector),M=o.speed,C=o.easing;return _.offsetWidth,d(function(T){o.positionUsing===""&&(o.positionUsing=r.getPositioningCSS()),u(S,c(m,M,C)),m===1?(u(_,{transition:"none",opacity:1}),_.offsetWidth,setTimeout(function(){u(_,{transition:"all "+M+"ms linear",opacity:0}),setTimeout(function(){r.remove(),T()},M)},M)):setTimeout(T,M)}),this},r.isStarted=function(){return typeof r.status=="number"},r.start=function(){r.status||r.set(0);var m=function(){setTimeout(function(){r.status&&(r.trickle(),m())},o.trickleSpeed)};return o.trickle&&m(),this},r.done=function(m){return!m&&!r.status?this:r.inc(.3+.5*Math.random()).set(1)},r.inc=function(m){var k=r.status;return k?(typeof m!="number"&&(m=(1-k)*a(Math.random()*k,.1,.95)),k=a(k+m,0,.994),r.set(k)):r.start()},r.trickle=function(){return r.inc(Math.random()*o.trickleRate)},(function(){var m=0,k=0;r.promise=function(_){return!_||_.state()==="resolved"?this:(k===0&&r.start(),m++,k++,_.always(function(){k--,k===0?(m=0,r.done()):r.set((m-k)/m)}),this)}})(),r.render=function(m){if(r.isRendered())return document.getElementById("nprogress");f(document.documentElement,"nprogress-busy");var k=document.createElement("div");k.id="nprogress",k.innerHTML=o.template;var _=k.querySelector(o.barSelector),S=m?"-100":s(r.status||0),M=document.querySelector(o.parent),C;return u(_,{transition:"all 0 linear",transform:"translate3d("+S+"%,0,0)"}),o.showSpinner||(C=k.querySelector(o.spinnerSelector),C&&g(C)),M!=document.body&&f(M,"nprogress-custom-parent"),M.appendChild(k),k},r.remove=function(){b(document.documentElement,"nprogress-busy"),b(document.querySelector(o.parent),"nprogress-custom-parent");var m=document.getElementById("nprogress");m&&g(m)},r.isRendered=function(){return!!document.getElementById("nprogress")},r.getPositioningCSS=function(){var m=document.body.style,k="WebkitTransform"in m?"Webkit":"MozTransform"in m?"Moz":"msTransform"in m?"ms":"OTransform"in m?"O":"";return k+"Perspective"in m?"translate3d":k+"Transform"in m?"translate":"margin"};function a(m,k,_){return m<k?k:m>_?_:m}function s(m){return(-1+m)*100}function c(m,k,_){var S;return o.positionUsing==="translate3d"?S={transform:"translate3d("+s(m)+"%,0,0)"}:o.positionUsing==="translate"?S={transform:"translate("+s(m)+"%,0)"}:S={"margin-left":s(m)+"%"},S.transition="all "+k+"ms "+_,S}var d=(function(){var m=[];function k(){var _=m.shift();_&&_(k)}return function(_){m.push(_),m.length==1&&k()}})(),u=(function(){var m=["Webkit","O","Moz","ms"],k={};function _(T){return T.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,function($,Z){return Z.toUpperCase()})}function S(T){var $=document.body.style;if(T in $)return T;for(var Z=m.length,U=T.charAt(0).toUpperCase()+T.slice(1),ie;Z--;)if(ie=m[Z]+U,ie in $)return ie;return T}function M(T){return T=_(T),k[T]||(k[T]=S(T))}function C(T,$,Z){$=M($),T.style[$]=Z}return function(T,$){var Z=arguments,U,ie;if(Z.length==2)for(U in $)ie=$[U],ie!==void 0&&$.hasOwnProperty(U)&&C(T,U,ie);else C(T,Z[1],Z[2])}})();function h(m,k){return(typeof m=="string"?m:v(m)).indexOf(" "+k+" ")>=0}function f(m,k){var _=v(m),S=_+k;h(_,k)||(m.className=S.substring(1))}function b(m,k){var _=v(m),S;h(m,k)&&(S=_.replace(" "+k+" "," "),m.className=S.substring(1,S.length-1))}function v(m){return(" "+(m.className||"")+" ").replace(/\s+/gi," ")}function g(m){m&&m.parentNode&&m.parentNode.removeChild(m)}return r})})),jb=zo(Zb(),1);function qb(e,t){const r=e.replace(/[?&]forceReload=\d+$/,"");return`${r+(r.includes("?")?"&":"?")}forceReload=${t}`}function Kb(e){let t=1;const r=e?.match(/forceReload=(\d+)$/);return r?.at(1)&&(t=parseInt(r[1],10)+1),t}function mh(e,t){ke(`Reloading Page ${e}`,t);const r=ge("images")?.[e]?.src;if(!r)return;const o=Kb(r);o>q("maxReload")||(t?.removeAttribute("src"),E2(r)||S2(r)?t?.setAttribute("src",r):t?.setAttribute("src",qb(r,o)))}function Yb(e){const t=e.currentTarget,r=parseInt(t.value,10),o=ge("images")?.[r]?.ref?.value;o&&mh(r,o)}function Xb(e){const t=e.currentTarget;Nn(parseInt(t.value,10),r=>({hide:!r.hide}))}function Jb(e){const t=e.currentTarget;Nn(parseInt(t.id.replace("PageImg",""),10),s=>({...eh({naturalWidth:t.naturalWidth,naturalHeight:t.naturalHeight}),status:"loaded"}));const r=ge("manga")?.pages??1,o=Object.values(ge("images")??{}).filter(s=>s.status==="loaded").length,a=Math.floor(o/r*100);document.title=`(${a}%) ${ge("manga")?.title}`,jb.default.configure({showSpinner:!1}).set(o/r),ke(`Progress: ${a}%`),o===r&&(ke("Images Loading Complete"),Ge("download","available"),q("downloadZip")&&Gd())}function Qb(e){const t=e.currentTarget;if(_s(t.getAttribute("src")))return;const r=parseInt(t.id.replace("PageImg",""),10);Nn(r,()=>({status:"error"})),mh(r,t)}function e9(e){const t=e.currentTarget,r=parseInt(t.value,10),o=ge("images"),a=ge("images")?.[r];a?.naturalWidth&&Ge("images",{...o,[r]:{...a,width:(a?.width||a?.naturalWidth)*(1+q("zoomStep")/100),height:void 0}})}function t9(e){const t=e.currentTarget,r=parseInt(t.value,10),o=ge("images"),a=ge("images")?.[r];a?.naturalWidth&&Ge("images",{...o,[r]:{...a,width:(a?.width||a?.naturalWidth)*(1-q("zoomStep")/100),height:void 0}})}function n9(e){const t=e.currentTarget,r=parseInt(t.value,10),o=ge("images"),a=ge("images")?.[r];a&&Ge("images",{...o,[r]:{...a,width:void 0,height:void 0}})}function r9(e){const t=e.currentTarget,r=parseInt(t.value,10),o=ge("images"),a=ge("images")?.[r];a&&Ge("images",{...o,[r]:{...a,width:window.innerWidth+(q("navbar")==="left"||q("navbar")==="right"?-34:0),height:void 0}})}function i9(e){const t=e.currentTarget,r=parseInt(t.value,10),o=ge("images"),a=ge("images")?.[r];a&&Ge("images",{...o,[r]:{...a,width:void 0,height:window.innerHeight+(q("navbar")==="bottom"?-34:0)}})}function o9(e){const t=ge("images")?.[e];let r;return q("viewMode").startsWith("Fluid")?r=`${window.innerHeight+(q("navbar")==="bottom"?-34:0)}px`:r=void 0,{width:t?.width?`${t.width}px`:"auto",height:t?.height?`${t.height}px`:"auto","max-height":r,"min-width":`${q("minZoom")}vw`}}var a9=(e,t)=>vo(e,t).map(r=>(ge("images")?.[r]?.ref||Nn(r,o=>({ref:Ts()})),le`
      <div
        id="Page${r}"
        class="${Ot({MangaPage:!0,hide:!!ge("images")?.[r].hide})}"
      >
        <div class="PageFunctions">
          <button
            class="Bookmark PageButton"
            title="${K("BOOKMARK")}"
            @click=${ih}
            value="${r}"
          >
            ${ni()?O3:I3}
          </button>
          <button
            class="ZoomIn PageButton"
            title="${K("ZOOM_IN")}"
            @click=${e9}
            value="${r}"
          >
            ${$3}
          </button>
          <button
            class="ZoomRestore PageButton"
            title="${K("ZOOM_RESET")}"
            @click=${n9}
            value="${r}"
          >
            ${P3}
          </button>
          <button
            class="ZoomOut PageButton"
            title="${K("ZOOM_OUT")}"
            @click=${t9}
            value="${r}"
          >
            ${z3}
          </button>
          <button
            class="ZoomWidth PageButton"
            title="${K("ZOOM_WIDTH")}"
            @click=${r9}
            value="${r}"
          >
            ${x3}
          </button>
          <button
            class="ZoomHeight PageButton"
            title="${K("ZOOM_HEIGHT")}"
            @click=${i9}
            value="${r}"
          >
            ${M3}
          </button>
          <button
            class="Hide PageButton"
            title="${K("HIDE")}"
            @click=${Xb}
            value="${r}"
          >
            ${ge("images")?.[r].hide?T3:L3}
          </button>
          <button
            class="Reload PageButton"
            title="${K("RELOAD")}"
            @click=${Yb}
            value="${r}"
          >
            ${R3}
          </button>
          <span class="PageIndex">${r}</span>
        </div>
        <div class="PageContent">
          <img
            id="PageImg${r}"
            alt="Page ${r}"
            class="${Ot({PageImg:!0,imgLoaded:ge("images")?.[r]?.status==="loaded",imgLoading:ge("images")?.[r]?.status==="loading",imgBroken:ge("images")?.[r]?.status==="error"})}"
            src=${ge("images")?.[r]?.src??Pe}
            style="${Bn(o9(r))}"
            @load=${Jb}
            @error=${Qb}
            ${Rs(ge("images")?.[r].ref)}
          />
        </div>
      </div>
      <div class="separator">
        [ ${r===e?K("END"):`${r} / ${e}`} ]
      </div>
    `)),s9=e=>le`
  <main
    id="Chapter"
    ${Rs(ge("chapter"))}
    class="${Ot({fitWidthIfOversize:q("fitWidthIfOversize"),[q("viewMode")]:!0,separator:q("viewMode")==="Vertical"})}"
    @wheel=${t=>{q("viewMode")==="FluidLTR"?lh(t):q("viewMode")==="FluidRTL"&&cb(t)}}
  >
    ${a9(e.pages,e.begin??0)}
  </main>
`,l9=":root:not(.light,.dark){--theme-body-background:#25262b;--theme-body-text-color:#c1c2c5;--theme-text-color:#c1c2c5;--theme-primary-color:#1a1b1e;--theme-primary-text-color:#c1c2c5;--theme-background-color:#25262b;--theme-hightlight-color:#2c2e33;--theme-border-color:#373a40;--theme-secondary-color:#2c2e33;--theme-secondary-text-color:#c1c2c5}:host{box-sizing:border-box}#MangaOnlineViewer{color:var(--theme-body-text-color);background-color:var(--theme-body-background);box-sizing:border-box;min-height:100vh;text-decoration:none}#Chapter{box-sizing:border-box;grid-template-columns:repeat(1,1fr);min-width:225px;display:grid}#Chapter.Vertical:has(+#Navigation:not(.disabled)),#Chapter.WebComic:has(+#Navigation:not(.disabled)){padding-bottom:31px}#Chapter.Vertical .PageContent{margin-top:8px;margin-bottom:8px}.closeButton{width:fit-content;height:fit-content;position:absolute;top:10px;right:10px}.overlay{z-index:950;cursor:pointer;background-color:#00000080;width:100%;height:100%;display:none;position:fixed;inset:0}.overlay.visible{display:block}select{height:20px;margin:2px}:not(.FluidRTL,.FluidLTR).fitWidthIfOversize .PageContent .PageImg{object-fit:contain;max-width:100%}.hideControls .PageFunctions{visibility:hidden}",c9="@keyframes spin{to{transform:rotate(360deg)}}@keyframes spin-reverse{0%{transform:rotate(360deg)}to{transform:rotate(0)}}.icon-tabler-loader-2,.animate-spin{animation:1s linear infinite spin}.animate-spin-reverse{animation:1s linear infinite spin-reverse}",u9="#Chapter.FluidLTR,#Chapter.FluidRTL{min-width:auto;display:flex;overflow-x:auto;& .ZoomWidth{display:none}& .PageImg{min-width:unset}& .MangaPage{width:initial;min-width:fit-content;position:relative}& .MangaPage.DoublePage{grid-column:span 2}}#Chapter.FluidLTR{flex-direction:row;& .MangaPage .PageFunctions{direction:rtl;left:0;right:auto}}#Chapter.FluidRTL{flex-direction:row-reverse}",d9='.PageButton .icon-tabler{vertical-align:sub;width:1rem;height:1rem}.PageButton,.PageButton:visited,.PageButton:link{cursor:pointer;min-height:32px;color:var(--mov-color-on-loud);background-color:var(--mov-color-fill-loud);border-style:solid;border-width:1px;border-color:var(--theme-border-color);border-radius:5px;padding:2px;text-decoration:none}.PageButton:active,.PageButton:hover{opacity:.8}.PageButton[selected]{background-color:var(--mov-color-fill-normal);color:var(--mov-color-on-normal);border:1px solid var(--theme-border-color)}.PageButton.hidden{display:none}.MangaPage{text-align:center;width:100%;min-width:100%;min-height:22px;line-height:0;display:inline-block}.PageContent{text-align:center;max-width:100%;height:100%;transition:all .3s ease-in-out;display:inline-block;overflow:auto hidden}.MangaPage.hide .PageContent{height:0}.PageContent .PageImg[src=""],.PageContent .PageImg:not([src]),.PageContent .PageImg.imgBroken{background-position:50%;background-repeat:no-repeat;background-size:20%;background-color:var(--theme-hightlight-color);text-align:center;vertical-align:top;width:40vw;height:80vh;color:var(--theme-text-color);min-width:40vw;max-width:100%;min-height:50vh;max-height:100%;margin:0;font-size:1rem;line-height:80vh;display:inline-block;position:relative}.PageContent .PageImg[src=""]:before,.PageContent .PageImg:not([src]):before,.PageContent .PageImg.imgBroken:before{content:attr(alt);white-space:pre-wrap;text-align:center;color:var(--theme-text-color);font-size:1rem;position:absolute;top:40%;left:50%;transform:translate(-50%,-50%)}.PageFunctions{justify-content:flex-end;align-items:center;gap:3px;margin:0;padding:0;font-family:monospace;display:flex;position:absolute;right:0}.PageFunctions>.PageIndex{background-color:var(--mov-color-fill-loud);color:var(--mov-color-on-loud);text-align:center;border-radius:5px;min-width:20px;padding:3px 5px;line-height:1rem;display:inline-block}.PageFunctions .PageButton{opacity:.5;border-width:0;justify-content:center;align-items:center;min-height:auto;margin:0;padding:3px;display:flex}.PageFunctions:hover .PageButton{opacity:1}.PageFunctions .PageButton:hover{opacity:.9}#Chapter.Vertical .separator{text-align:center;align-items:center;font-style:italic;display:flex}#Chapter.Vertical .separator:before,#Chapter.Vertical .separator:after{content:"";border-bottom:1px solid var(--theme-text-color);flex:1}#Chapter.Vertical.separator:not(:empty):before{margin-right:.25em}#Chapter.Vertical.separator:not(:empty):after{margin-left:.25em}#Chapter:not(.separator) .separator,#Chapter:not(.Vertical) .separator{display:none}',h9="html{font-size:100%}body{color:var(--theme-body-text-color);background-color:var(--theme-body-background);margin:0;padding:0;font-family:Helvetica Neue,Helvetica,Arial,sans-serif;font-size:14px;line-height:20px}a,a:link,a:visited,a:active,a:focus{color:var(--theme-body-text-color);text-decoration:none}img{vertical-align:middle;border:0;height:auto}",f9=Nu`
  .PageContent .PageImg[src=''],
  .PageContent .PageImg:not([src]) {
    background-image: url('${oo(El)}');
  }

  .PageContent .PageImg.imgBroken {
    background-image: url('${oo(Sl)}');
  }

  ${h9}
  ${l9}
  ${d9}
  ${u9}
  ${oh}
  ${c9}
`,p9=(e="#MangaOnlineViewer",t=q("theme"))=>{const r=Bd(t),o=pi(t),a=q("colorScheme")==="dark"?r[8]:r[2];return Nu`
    :where(:root),
    ${e}, .dark,
    ${e}.dark {
      --theme-primary-color: ${t};
      --theme-primary-text-color: ${o};
      --theme-secondary-color: ${a};
      --theme-secondary-text-color: ${pi(a)};

      color-scheme: dark;
      --theme-body-background: ${yt.dark[600]};
      --theme-body-text-color: ${yt.dark[50]};
      --theme-text-color: ${yt.dark[50]};
      --theme-background-color: ${yt.dark[600]};
      --theme-hightlight-color: ${yt.dark[500]};
      --theme-border-color: ${yt.dark[400]};

      --mov-color-fill-quiet: ${r[9]};
      --mov-color-fill-normal: var(--theme-secondary-color, ${r[8]});
      --mov-color-fill-loud: var(--theme-primary-color);
      --mov-color-border-quiet: ${r[8]};
      --mov-color-border-normal: ${r[7]};
      --mov-color-border-loud: ${r[6]};
      --mov-color-on-quiet: ${r[4]};
      --mov-color-on-normal: var(--theme-secondary-text-color, ${r[3]});
      --mov-color-on-loud: var(--theme-primary-text-color, white);

      --mov-color-mix-hover: black 8%;
      --mov-color-mix-active: black 16%;
    }

    .light,
    ${e}.light {
      color-scheme: light;
      --theme-body-background: ${yt.gray[50]};
      --theme-body-text-color: ${yt.gray[900]};
      --theme-text-color: ${yt.gray[900]};
      --theme-background-color: ${yt.gray[50]};
      --theme-hightlight-color: ${yt.gray[500]};
      --theme-border-color: ${yt.gray[100]};

      --mov-color-fill-quiet: ${r[0]};
      --mov-color-fill-normal: var(--theme-secondary-color, ${r[1]});
      --mov-color-fill-loud: var(--theme-primary-color);
      --mov-color-border-quiet: ${r[1]};
      --mov-color-border-normal: ${r[2]};
      --mov-color-border-loud: ${r[4]};
      --mov-color-on-quiet: ${r[6]};
      --mov-color-on-normal: var(--theme-secondary-text-color, ${r[3]});
      --mov-color-on-loud: var(--theme-primary-text-color, white);

      --mov-color-mix-hover: black 10%;
      --mov-color-mix-active: black 20%;
    }
  `},g9="#StartMOV{all:revert;backface-visibility:hidden;color:#fff;cursor:pointer;text-align:center;z-index:105000;background-image:linear-gradient(90deg,#667eea,#764ba2,#6b8dd6,#8e37d7);background-size:300% 100%;border:none;border-radius:10px;width:80%;min-height:50px;margin:0 auto;padding:.5rem 1rem;font-size:2rem;transition:all .4s ease-in-out;position:fixed;bottom:0;left:0;right:0;box-shadow:0 4px 15px #744fa8bf}#StartMOV:hover{background-position:100% 0;transition:all .4s ease-in-out}#StartMOV:focus{outline:none}",yi=class extends nt{constructor(...t){super(...t),this.mangaPages=0,this.begin=1,this.timeoutMs=3e3,this.status="initial-prompt"}static{this.styles=[qt(g9)]}connectedCallback(){super.connectedCallback(),this.status==="initial-prompt"&&(this.timeoutId=window.setTimeout(()=>{this.handleStart()},this.timeoutMs))}disconnectedCallback(){super.disconnectedCallback(),window.clearTimeout(this.timeoutId)}handleStart(){window.clearTimeout(this.timeoutId),this.dispatchEvent(new CustomEvent("start",{detail:null}))}handleLateStart(t,r){this.dispatchEvent(new CustomEvent("start",{detail:{begin:t,end:r}}))}handleButtonCLick(){this.status="late-start-prompt"}handleDialogClose(t){t.stopPropagation(),window.clearTimeout(this.timeoutId),this.status="late-start-button"}render(){switch(this.status){case"late-start-button":return this.renderLateStartButton();case"late-start-prompt":return this.renderLateStartPrompt();default:return this.renderInitialPrompt()}}renderInitialPrompt(){return le`
      <mov-dialog
        ?open=${this.status==="initial-prompt"}
        icon="info"
        @close=${this.handleDialogClose}
      >
        <span slot="label">${K("STARTING")}</span>
        <div style="padding: 1rem;">${K("WAITING")}</div>
        <div
          slot="footer"
          style="display: flex; justify-content: space-between; padding: 0.5rem 1rem 1rem;"
        >
          <mov-button
            @click=${this.handleDialogClose}
            style="--mov-color-fill-loud: ${yt.red[700]}; --mov-color-on-loud: white;"
          >
            Cancel
          </mov-button>
          <mov-button
            @click=${this.handleStart}
            style="--mov-color-fill-loud: ${yt.green[700]}; --mov-color-on-loud: white;"
          >
            Start Now
          </mov-button>
        </div>
      </mov-dialog>
    `}renderLateStartButton(){return le`
      <button
        id="StartMOV"
        @click=${this.handleButtonCLick}
      >
        ${K("BUTTON_START")}
      </button>
    `}renderLateStartPrompt(){let t=this.begin,r=this.mangaPages;const o=a=>{[t,r]=[a.detail.value1,a.detail.value2]};return le`
      <mov-dialog
        ?open=${this.status==="late-start-prompt"}
        icon="question"
        @close=${this.handleDialogClose}
      >
        <span slot="label">${K("STARTING")}</span>
        <div style="padding: 1rem;">
          ${K("CHOOSE_BEGINNING")}
          <div
            id="pageInputGroup"
            style="padding: 1rem 0;"
          >
            <tc-range-slider
              id="pagesSlider"
              theme="glass"
              css-links="https://cdn.jsdelivr.net/npm/toolcool-range-slider@4.0.28/dist/plugins/tcrs-themes.min.css"
              min="1"
              max="${this.mangaPages}"
              round="0"
              step="1"
              value1="${t}"
              value2="${r}"
              data="${vo(this.mangaPages).join(", ")}"
              marks="true"
              marks-count="11"
              marks-values-count="11"
              generate-labels="true"
              slider-width="100%"
              pointers-overlap="false"
              generate-labels-text-color="var(--mov-color-on-loud)"
              @change=${o}
            ></tc-range-slider>
          </div>
        </div>
        <div
          slot="footer"
          style="display: flex; justify-content: flex-end; gap: 0.5rem; padding: 0.5rem 1rem 1rem;"
        >
          <mov-button
            @click=${this.handleDialogClose}
            style="--mov-color-fill-loud: ${yt.red[700]}; --mov-color-on-loud: white;"
          >
            Close
          </mov-button>
          <mov-button
            @click=${()=>this.handleLateStart(t,r)}
            style="--mov-color-fill-loud: ${yt.green[700]}; --mov-color-on-loud: white;"
          >
            Run
          </mov-button>
        </div>
      </mov-dialog>
    `}};Y([he({type:Number,reflect:!0})],yi.prototype,"mangaPages",void 0),Y([he({type:Number,reflect:!0})],yi.prototype,"begin",void 0),Y([he({type:Number})],yi.prototype,"timeoutMs",void 0),Y([he({type:String,reflect:!0})],yi.prototype,"status",void 0),yi=Y([pt("script-startup")],yi);function m9(e){if(!e?.parentNode)return e;const t=e.cloneNode(!0);return e.parentNode.replaceChild(t,e),t}var v9=e=>{e.getAttributeNames().forEach(t=>{e?.removeAttribute(t)})},b9=(...e)=>{e?.forEach(v9),e?.forEach(m9)};function w9(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var vh,Ca=class extends nt{constructor(...t){super(...t),this.loadMode="wait"}static{this.styles=[Pt``,qt(f9)]}async start(t,r){this.manga&&(b9(document.documentElement,document.head,document.body),window.scrollTo(0,0),Ge("manga",{...this.manga,begin:t??this.manga.begin,pages:r??this.manga.pages}),document.documentElement.setAttribute("mov",""))}firstUpdated(){this.loadMode==="always"&&this.start(),Vb(),Gb()}render(){const t=ge("manga"),r=ge("dialog");return le`
      <style>
        ${p9()}
      </style>
      <div
        id="MangaOnlineViewer"
        class="${Ot({[q("colorScheme")]:!0,hideControls:q("hidePageControls"),bookmarked:!!ni(),[ge("device")]:!0})}"
        style="${Bn({[`padding-${q("navbar")}`]:"34px"})}"
        .locale="${q("locale")}"
      >
        ${t?le`
              <reader-header .manga=${t}></reader-header>
              ${s9(t)}
              <navbar-thumbnails
                      .mode=${q("navbar")}
                    ></navbar-thumbnails>
              <manga-pagination
                      .mode="${q("pagination")}"
                      .startPage=${t.begin}
                      .totalPages=${t.pages}
                      .currentPage=${ge("currentPage")}
                      .next=${t.next}
                      .prev=${t.prev}
                    ></manga-pagination>
              <keybindings-panel></keybindings-panel>
              <bookmark-panel></bookmark-panel>
              <settings-panel></settings-panel>
              <moaqz-toaster dismissable></moaqz-toaster>
              </div>`:le(vh||(vh=w9([` <script-startup
              .mangaPages="`,`"
              begin="`,`"
              initialStatus="`,`"
              @start=`,`
            ><\/script-startup>`])),this.manga?.pages,this.manga?.begin,Hd(this.loadMode,[["wait",()=>"initial-prompt"],["never",()=>"late-start-button"]]),o=>{this.start(o.detail?.begin,o.detail?.end)})}
        ${r?le`
              <mov-dialog
                open
                .icon=${r.icon}
                @close=${()=>Ge("dialog",null)}
              >
                <span slot="label">${r.title}</span>
                ${r.content} ${r.footer}
              </mov-dialog>
            `:""}
      </div>
    `}};Y([he({type:String,reflect:!0})],Ca.prototype,"loadMode",void 0),Y([he({type:Object})],Ca.prototype,"manga",void 0),Ca=Y([pt("manga-online-viewer"),(0,_i.useStores)(St,ei,jt)],Ca);var $l="@moaqzdev/toast",_9=class ws extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static#e=3e3;parseDuration(t){if(t==="none"||Number.isInteger(t)&&t>ws.#e)return t;const r=this.getAttribute("duration");if(r){const o=Number.parseInt(r);if(!Number.isNaN(o))return o}return ws.#e}async createToast({title:t,type:r,description:o,onConfirm:a,onCancel:s,confirmText:c="✅",cancelText:d="❌",duration:u}){const h=this.shadowRoot.querySelector("#toast-tmpl").content.cloneNode(!0),f={container:h.querySelector("[data-toast]"),title:h.querySelector("[data-title]"),description:h.querySelector("[data-description]"),actions:h.querySelector("[data-actions]"),confirmBtn:h.querySelector("button[data-action-type='confirm']"),cancelBtn:h.querySelector("button[data-action-type='cancel']"),closeBtn:h.querySelector("[data-close-button]")};u=this.parseDuration(u),f.title.textContent=t||"",f.container.setAttribute("data-type",r),o==null?f.description?.remove():f.description.textContent=o;const b=()=>this.removeToast(f.container);if(r==="confirm"?(f.confirmBtn.textContent=c,f.confirmBtn.addEventListener("click",()=>{a?.(),b()},{once:!0}),f.cancelBtn.textContent=d,f.cancelBtn.addEventListener("click",()=>{s?.(),b()},{once:!0})):f.actions?.remove(),this.hasAttribute("dismissable")?f.closeBtn.addEventListener("click",b,{once:!0}):f.closeBtn?.remove(),this.shadowRoot.querySelector("[data-toaster]").appendChild(h),u!=="none"){const v=new AbortController,g=Date.now();let m=null,k=0;const _=()=>{v.abort(),b()};let S=setTimeout(_,u);const M=()=>{m??(clearTimeout(S),m=Date.now())},C=()=>{m!=null&&(k=m-g,m=null,S=setTimeout(_,Math.max(u-k,0)))};["focusin","pointerenter","mouseenter"].forEach(T=>{f.container.addEventListener(T,M,{signal:v.signal})}),["focusout","pointerleave","mouseleave"].forEach(T=>{f.container.addEventListener(T,C,{signal:v.signal})})}}removeToast(t){t.animate([{opacity:1},{opacity:0}],{duration:300,easing:"ease",fill:"forwards"}).finished.then(()=>t.remove())}handleEvent(t){if(t instanceof CustomEvent&&t.type===$l){const r=t.detail;this.createToast(r)}}connectedCallback(){this.render(),document.addEventListener($l,this)}disconnectedCallback(){document.removeEventListener($l,this)}render(){this.shadowRoot.innerHTML=`
    <style>${ws.STYLES}</style>

    <template id="toast-tmpl">
      <li data-toast tabindex="0">
        <button data-close-button aria-label="Close">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="14" 
            height="14" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            stroke-width="2" 
            stroke-linecap="round" 
            stroke-linejoin="round"
            aria-hidden="true"
          >
            <path d="M18 6 6 18"/><path d="m6 6 12 12"/>
          </svg>
        </button>
        <p data-title></p>
        <p data-description></p>
        <div data-actions>
          <button type="button" data-action-type="confirm"></button>
          <button type="button" data-action-type="cancel"></button>
        </div>
      </li>
    </template>

    <ol data-toaster tabindex="-1"></ol>`}static STYLES=`
  * {
    box-sizing: border-box;
  }

  :host {
    --_travel-distance: var(--toast-travel-distance, 5vh);

    --_toast-background: var(--toast-background, #FCFCFC);
    --_toast-border: var(--toast-border, #00000026);
    --_toast-title: var(--toast-title, #000000DF);
    --_toast-description: var(--toast-description, #0000009B);

    --_toast-success: var(--toast-success, #00924BA4);
    --_toast-error: var(--toast-error, #D2000571);
    --_toast-warning: var(--toast-warning, #E35F00AA);
    --_toast-info: var(--toast-info, #0084E6A1);
    --_toast-confirm: var(--toast-confirm, #6600C06C);

    --_toast-actions-direction: var(--toast-actions-direction, row);
    --_toast-actions-justify: var(--toast-actions-justify, flex-end);
    --_toast-actions-gap: var(--toast-actions-gap, 0.25rem);

    --_toast-actions-confirm-text-color: var(--toast-actions-confirm-text-color, white);
    --_toast-actions-confirm-background-color: var(--toast-actions-confirm-background-color, #00713FDE);
    --_toast-actions-cancel-text-color: var(--toast-actions-cancel-text-color, white);
    --_toast-actions-cancel-background-color: var(--toast-actions-cancel-background-color, #C40006D3);
  }

  @media (prefers-color-scheme: dark) {
    :host {
      --_toast-background: var(--toast-background, #111111);
      --_toast-border: var(--toast-border,  #FFFFFF2C);
      --_toast-title: var(--toast-title, #FFFFFFED);
      --_toast-description: var(--toast-description, #FFFFFFAF);
  
      --_toast-success: var(--toast-success, #54FFAD73);
      --_toast-error: var(--toast-error, #FF5D61B0);
      --_toast-warning: var(--toast-warning, #FE84389D);
      --_toast-info: var(--toast-info, #3094FEB9);
      --_toast-confirm: var(--toast-confirm, #C47EFFA4);

      --_toast-actions-confirm-text-color: var(--toast-actions-confirm-text-color, white);
      --_toast-actions-confirm-background-color: var(--toast-actions-confirm-background-color, #54FFAD73);
      --_toast-actions-cancel-text-color: var(--toast-actions-cancel-text-color, white);
      --_toast-actions-cancel-background-color: var(--toast-actions-cancel-background-color, #FF5D61B0);
    }
  }

  @keyframes slide-in {
    from { 
      transform: translateY(var(--_travel-distance)) 
    }
  }

  @keyframes fade-in {
    from { opacity: 0 }
    to { opacity: 1 }
  }

  [data-toaster] {
    --container-width: 20rem;

    position: fixed;
    z-index: 999;
    width: var(--container-width);
    height: 100dvh;
    max-height: 100dvh;
    overflow: hidden;
    top: 0;
    right: 0;
    pointer-events: none;
    margin: 0;
    padding: 1rem;
    display: flex;
    flex-direction: column-reverse;
    gap: 0.5rem;
  }

  :host([position="bottom-right"]) [data-toaster] {
    top: 0;
    right: 0;
  }
  
  :host([position="bottom-left"]) [data-toaster] {
    top: 0;
    left: 0;
  }

  :host([position="bottom-center"]) [data-toaster] {
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  }
  
  :host([position="top-right"]) [data-toaster] {
    top: 0;
    right: 0;
    flex-direction: column;
  }
  
  :host([position="top-left"]) [data-toaster] {
    top: 0;
    left: 0;
    flex-direction: column;
  }

  :host([position="top-center"]) [data-toaster] {
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    flex-direction: column;
  }

  [data-toast] {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    position: relative;

    pointer-events: none;
    user-select: none;

    list-style: none;
    background-color: var(--_toast-background);
    padding: 1rem;
    border: 1px solid var(--_toast-border);
    border-radius: 0.25rem;
    pointer-events: all;

    will-change: transform;
    animation: fade-in .3s ease, slide-in .3s ease;

    @media (prefers-reduced-motion: reduce){
      --_travel-distance: 0;
    }
  
    &[data-type="success"] {
      border-top: 4px solid var(--_toast-success);
    }
  
    &[data-type="error"] {
      border-top: 4px solid var(--_toast-error);
    }
  
    &[data-type="info"] {
      border-top: 4px solid var(--_toast-info)
    }

    &[data-type="warning"] {
      border-top: 4px solid var(--_toast-warning)
    }

    &[data-type="confirm"] {
      border-top: 4px solid var(--_toast-confirm);
    }
  }

  [data-close-button] {
    --size: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--size);
    height: var(--size);
    position: absolute;
    top: 0;
    left: 0;
    color: var(--_toast-title);
    background-color: var(--_toast-background);
    border-radius: 50%;
    border: 1px solid var(--_toast-border);
    padding: 0.125rem;
    translate: -35% -35%;
    cursor: pointer;
  }

  [data-actions] {
    display: flex;
    flex-direction: var(--_toast-actions-direction);
    justify-content: var(--_toast-actions-justify);
    gap: var(--_toast-actions-gap);
    margin-top: 0.5rem;
  }

  button[data-action-type="confirm"],
  button[data-action-type="cancel"] {
    padding: 0.5rem;
    border: none;
    border-radius: 0.25rem;
    cursor: pointer;
    transition-property: opacity;
    transition-duration: 200ms;

    &:hover,
    &:focus {
      opacity: 0.8;
    }
  }
      
  button[data-action-type="confirm"] {
    color: var(--_toast-actions-confirm-text-color);
    font-weight: 600;
    background-color: var(--_toast-actions-confirm-background-color);
  }

  button[data-action-type="cancel"] {
    color: var(--_toast-actions-cancel-text-color);
    font-weight: 600;
    background-color:var(--_toast-actions-cancel-background-color);
  }
  
  [data-title], [data-description] {
    margin: 0;
    all: initial; 
    font-family: inherit;
    line-height: 1.5;
  }

  [data-title] {
    font-size: 1rem;
    font-weight: 600;
    color: var(--_toast-title);
  }

  [data-description] {
    font-size: 0.875rem;
    color: var(--_toast-description);
    text-wrap: pretty;
  }`};customElements.define("moaqz-toaster",_9);var y9=`/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */
html{-webkit-text-size-adjust:100%;line-height:1.15}body{margin:0}main{display:block}h1{margin:.67em 0;font-size:2em}hr{box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace;font-size:1em}a{background-color:#0000}abbr[title]{border-bottom:none;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace;font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}img{border-style:none}button,input,optgroup,select,textarea{margin:0;font-family:inherit;font-size:100%;line-height:1.15}button,input{overflow:visible}button,select{text-transform:none}button,[type=button],[type=reset],[type=submit]{-webkit-appearance:button}button::-moz-focus-inner{border-style:none;padding:0}[type=button]::-moz-focus-inner{border-style:none;padding:0}[type=reset]::-moz-focus-inner{border-style:none;padding:0}[type=submit]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring{outline:1px dotted buttontext}[type=button]:-moz-focusring{outline:1px dotted buttontext}[type=reset]:-moz-focusring{outline:1px dotted buttontext}[type=submit]:-moz-focusring{outline:1px dotted buttontext}fieldset{padding:.35em .75em .625em}legend{box-sizing:border-box;color:inherit;white-space:normal;max-width:100%;padding:0;display:table}progress{vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button{height:auto}[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details{display:block}summary{display:list-item}template,[hidden]{display:none}`,k9="#nprogress{pointer-events:none}#nprogress .bar{z-index:1031;background:#29d;width:100%;height:2px;position:fixed;top:0;left:0}#nprogress .peg{opacity:1;width:100px;height:100%;display:block;position:absolute;right:0;transform:rotate(3deg)translateY(-4px);box-shadow:0 0 10px #29d,0 0 5px #29d}#nprogress .spinner{z-index:1031;display:block;position:fixed;top:15px;right:15px}#nprogress .spinner-icon{box-sizing:border-box;border:2px solid #0000;border-color:#29d #0000 #0000 #29d;border-radius:50%;width:18px;height:18px;animation:.4s linear infinite nprogress-spinner}.nprogress-custom-parent{position:relative;overflow:hidden}.nprogress-custom-parent #nprogress .spinner,.nprogress-custom-parent #nprogress .bar{position:absolute}@-webkit-keyframes nprogress-spinner{0%{-webkit-transform:rotate(0)}to{-webkit-transform:rotate(360deg)}}@keyframes nprogress-spinner{0%{transform:rotate(0)}to{transform:rotate(360deg)}}",E9="#nprogress .bar{z-index:1031;background:#29d;width:100%;height:4px;position:fixed;top:0;left:0}html[mov] body>:not(manga-online-viewer,#nprogress){display:none!important}html[mov]{all:unset;font-size:16px}",S9=[y9,k9,E9].join(`
`);async function bh([e,t]){ke(`Found Pages: ${t.pages} in ${e?.name}`),t.title||(t.title=document.querySelector("title")?.textContent?.trim()),t.begin=ni()??t.begin??1,t.before!==void 0&&(mn("Executing Preparation"),await t.before(t.begin??0)),document.head.innerHTML+=b6("externals",S9);const r=document.createElement("manga-online-viewer");r.loadMode=e?.start??q("loadMode"),r.manga=t,document.body.appendChild(r)}async function A9(e){if(ke(`Starting ${Es.script.name} ${Es.script.version} on ${Di()} ${rp()} with ${ip()}`),Km())return;ke(e.length,"Known Manga Sites:",e);const t=e.filter(o=>o.url.test(window.location.href));ke(t.length,"Found sites:",t);const r=t.map(async o=>{ke(`Testing site: ${o.name}`),await ap(o);const a=await o.run();if(a.pages>0)return[o,a];throw new Error(`${o.name} found ${a.pages} pages`)});try{bh(await Promise.any(r))}catch(o){if(o instanceof AggregateError){ke("All sites failed to run:");for(const a of o.errors)ke(a.message)}else ke("An unexpected error occurred:",o)}}A9(Y2).catch(ke)})();
