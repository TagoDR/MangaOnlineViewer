// ==UserScript==
// @name Manga OnlineViewer
// @author Tago
// @updateURL https://github.com/TagoDR/MangaOnlineViewer/raw/master/Manga_OnlineViewer.meta.js
// @downloadURL https://github.com/TagoDR/MangaOnlineViewer/raw/master/Manga_OnlineViewer.user.js
// @namespace https://github.com/TagoDR
// @description Shows all pages at once in online view for these sites: Asura Scans, Flame Scans, Batoto, ComiCastle, DisasterScans, Dynasty-Scans, Leitor, LHTranslation, MangaDex, MangaFox, MangaHere, MangaFreak, mangahosted, MangaHub, MangaKakalot, MangaNelo, MangaNato, MangaPark, Mangareader, MangaSee, Manga4life, MangaTown, NineManga, PandaManga, RawDevart, ReadComicsOnline, ReadManga Today, Funmanga, MangaDoom, MangaInn, SenManga(Raw), TenManga, TuMangaOnline, UnionMangas, Manga33, FoOlSlide, Kireicake, Yuri-ism, Sense-Scans, Madara WordPress Plugin, MangaHaus, Isekai Scan, Comic Kiba, Zinmanga, mangatx, Toonily, Mngazuki, ReaperScans, JaiminisBox
// @version 2022.06.26
// @license MIT
// @grant GM_getValue
// @grant GM_setValue
// @grant GM_listValues
// @grant GM_deleteValue
// @grant GM_xmlhttpRequest
// @connect *
// @require https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js
// @require https://cdnjs.cloudflare.com/ajax/libs/jszip/3.9.1/jszip.min.js
// @require https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.js
// @require https://cdnjs.cloudflare.com/ajax/libs/limonte-sweetalert2/11.4.10/sweetalert2.min.js
// @require https://cdnjs.cloudflare.com/ajax/libs/color-scheme/1.0.1/color-scheme.min.js
// @require https://cdnjs.cloudflare.com/ajax/libs/unveil2/2.0.8/jquery.unveil2.min.js
// @require https://cdnjs.cloudflare.com/ajax/libs/jquery.imagesloaded/5.0.0/imagesloaded.pkgd.min.js
// @include /https?:\/\/(www.)?(asurascans|flamescans).(com|org)\/.+/
// @include /https?:\/\/(www.)?bato.to\/chapter.*/
// @include /https?:\/\/(www.)?comicastle.org\/read\/.+\/[0-9]+.*/
// @include /https?:\/\/(www.)?disasterscans.com\/manga\/.+\/chapter-.+/
// @include /https?:\/\/(www.)?dynasty-scans.com\/chapters\/.+/
// @include /https?:\/\/(www.)?leitor.net\/manga\/.+\/.+\/.+/
// @include /https?:\/\/(www.)?lhtranslation.net\/read.+/
// @include /https?:\/\/(www.)?mangadex.org\/chapter\/.+(\/.+)?/
// @include /https?:\/\/(www.)?(fanfox.net|mangahere.cc)\/manga\/.+\/.+\//
// @include /https?:\/\/.{3,4}?(mangafreak).net\/Read.+/
// @include /https?:\/\/(www.)?mangahosted.com\/manga\/.+\/.+/
// @include /https?:\/\/(www.)?(mangahub).io\/chapter\/.+\/.+/
// @include /https?:\/\/(www.)?((manganelo|mangakakalot).com\/chapter\/.+\/.+|(manganato|readmanganato).com\/manga-\w\w\d+\/chapter-\d+)/
// @include /https?:\/\/(www.)?mangapark.(com|me|org|net)\/(manga|chapter|comic)\/.+\/.+/
// @include /https?:\/\/(www.)?mangareader.to\/read\/.+\/.+\/.+/
// @include /https?:\/\/(www.)?(mangasee123|manga4life).com\/read-online\/.+/
// @include /https?:\/\/(www.)?mangatown.com\/manga\/.+\/.+/
// @include /https?:\/\/(www.)?ninemanga.com\/chapter\/.+\/.+\.html/
// @include /https?:\/\/(www.)?pandamanga.xyz\/.+\/.+\/.+/
// @include /https?:\/\/(www.)?rawdevart.com\/comic\/.+\/.+\//
// @include /https?:\/\/(www.)?readcomicsonline.ru\/comic\/.*\/\d*/
// @include /https?:\/\/(www.)?(funmanga|mngdoom|readmng|mangainn).(com|net)\/.+\/\d+/
// @include /https?:\/\/raw.senmanga.com\/.+\/.+\/?/
// @include /https?:\/\/(www.)?(tenmanga|gardenmanage).com\/(chapter|statuses)\/.+/
// @include /https?:\/\/(www.)?(tmofans|lectortmo|followmanga).com\/.+\/.+\/(paginated|cascade)/
// @include /https?:\/\/(www.)?unionleitor.top\/leitor\/.+\/.+/
// @include /https?:\/\/(www.)?(manga33).com\/manga\/.+/
// @include /^(?!.*jaiminisbox).*\/read\/.+/
// @include /https?:\/\/.+\/(manga|series)\/.+\/.+/
// @exclude /https?:\/\/(www.)?tsumino.com\/.+/
// @exclude /https?:\/\/(www.)?pururin.io\/.+/
// ==/UserScript==

var x=Object.defineProperty;var l=(e,t)=>x(e,"name",{value:t,configurable:!0});(function(){"use strict";// @license MIT
var asurasflamecans={name:["Asura Scans","Flame Scans"],url:/https?:\/\/(www.)?(asurascans|flamescans).(com|org)\/.+/,homepage:["https://www.asurascans.com/","https://flamescans.org/"],language:["English"],category:"manga",waitEle:"#chapter option:nth-child(2)",run(){var a,o,n,r,s;const e=document.querySelector("#chapter option:checked"),t=[...document.querySelectorAll("#readerarea p img")];return{title:(o=(a=document.querySelector(".entry-title"))==null?void 0:a.textContent)==null?void 0:o.trim(),series:(n=document.querySelector(".allc a"))==null?void 0:n.getAttribute("href"),pages:t.length,prev:(r=e==null?void 0:e.nextElementSibling)==null?void 0:r.getAttribute("value"),next:(s=e==null?void 0:e.previousElementSibling)==null?void 0:s.getAttribute("value"),listImages:t.map(c=>c.getAttribute("src"))}}};// @license MIT
var batoto={name:"Batoto",url:/https?:\/\/(www.)?bato.to\/chapter.*/,homepage:"http://bato.to/",language:["English"],category:"manga",run(){var t,a,o,n,r;const e=[...document.querySelectorAll(".page-img")];return{title:(a=(t=document.querySelector(".nav-title a"))==null?void 0:t.textContent)==null?void 0:a.trim(),series:(o=document.querySelector(".nav-title a"))==null?void 0:o.getAttribute("href"),pages:e.length,prev:(n=document.querySelector(".nav-prev a"))==null?void 0:n.getAttribute("href"),next:(r=document.querySelector(".nav-next a"))==null?void 0:r.getAttribute("href"),listImages:e.map(s=>s.getAttribute("src"))}}};// @license MIT
var comicastle={name:"ComiCastle",url:/https?:\/\/(www.)?comicastle.org\/read\/.+\/[0-9]+.*/,homepage:"http://www.comicastle.org/",language:["English"],category:"comic",waitEle:".form-control option:nth-child(1)",run(){var a,o,n,r;const e=[...document.querySelectorAll(".form-control")[1].querySelectorAll("option")],t=document.querySelectorAll(".form-control")[0].querySelector("option:checked");return{title:(a=t==null?void 0:t.textContent)==null?void 0:a.trim(),series:(o=document.querySelector(".navbar-header a"))==null?void 0:o.getAttribute("href"),pages:e.length,prev:(n=t==null?void 0:t.previousElementSibling)==null?void 0:n.getAttribute("value"),next:(r=t==null?void 0:t.nextElementSibling)==null?void 0:r.getAttribute("value"),listImages:e.map(s=>s.getAttribute("alt"))}}};// @license MIT
var disasterscans={name:"DisasterScans",url:/https?:\/\/(www.)?disasterscans.com\/manga\/.+\/chapter-.+/,homepage:"https://disasterscans.com/",language:["English"],category:"manga",waitEle:"select.single-chapter-select option",waitVar:"mangaNav",run(){var a,o,n,r;const e=typeof unsafeWindow!="undefined"?unsafeWindow:window,t=document.querySelector("select.single-chapter-select option:checked");return{title:(o=(a=document.querySelector("#chapter-heading"))==null?void 0:a.textContent)==null?void 0:o.trim(),series:e.mangaNav.mangaUrl,pages:e.chapter_preloaded_images.length,prev:(n=t==null?void 0:t.nextElementSibling)==null?void 0:n.getAttribute("value"),next:(r=t==null?void 0:t.previousElementSibling)==null?void 0:r.getAttribute("value"),listImages:e.chapter_preloaded_images}}};// @license MIT
var dysnatyscans={name:"Dynasty-Scans",url:/https?:\/\/(www.)?dynasty-scans.com\/chapters\/.+/,homepage:"https://dynasty-scans.com/",language:["English"],category:"manga",run(){var t,a,o,n,r;const e=typeof unsafeWindow!="undefined"?unsafeWindow:window;return{title:(a=(t=document.querySelector("#chapter-title"))==null?void 0:t.textContent)==null?void 0:a.trim(),series:(o=document.querySelector("#chapter-title a"))==null?void 0:o.getAttribute("href"),pages:e.pages.length,prev:(n=document.querySelector("#prev_link"))==null?void 0:n.getAttribute("href"),next:(r=document.querySelector("#next_link"))==null?void 0:r.getAttribute("href"),listImages:e.pages.map(s=>s.image)}}};// @license MIT
var foolslide={name:["FoOlSlide","Kireicake","Yuri-ism","Sense-Scans"],url:/^(?!.*jaiminisbox).*\/read\/.+/,homepage:["#","https://reader.kireicake.com","https://www.yuri-ism.net","https://sensescans.com/"],language:["English"],obs:"Any Site that uses FoOLSlide",category:"manga",run(){var r,s,c,u,g,m,w,p;const e=[...document.querySelectorAll(".topbar_left .dropdown_parent:last-of-type li")],t=e.findIndex(A=>{var f;const h=(f=A.querySelector("a"))==null?void 0:f.getAttribute("href");return h?window.location.href.startsWith(h):!1}),a=[...document.querySelectorAll(".topbar_right .dropdown li")],o=[...document.querySelectorAll(".inner img:not(.open)")],n=o.length>1?o.length:a.length;return{title:(c=(s=(r=e.at(t))==null?void 0:r.querySelector("a"))==null?void 0:s.textContent)==null?void 0:c.trim(),series:(u=document.querySelector("div.tbtitle div.text a"))==null?void 0:u.getAttribute("href"),pages:n,prev:(m=(g=e.at(t+1))==null?void 0:g.querySelector("a"))==null?void 0:m.getAttribute("href"),next:(p=(w=e.at(t-1))==null?void 0:w.querySelector("a"))==null?void 0:p.getAttribute("href"),listPages:o.length>1?null:Array(n).fill(0).map((A,h)=>`${window.location.href.replace(/\/\d+$/,"")}/${h+1}`),listImages:o.length>1?o.map(A=>A.getAttribute("src")):null,img:"img.open"}}};// @license MIT
var leitor={name:"Leitor",url:/https?:\/\/(www.)?leitor.net\/manga\/.+\/.+\/.+/,homepage:"https://leitor.net/",language:["Portuguese"],category:"manga",async run(){var n,r,s,c,u,g,m;const e=typeof unsafeWindow!="undefined"?unsafeWindow:window,t=`https://leitor.net/leitor/pages/${e.READER_ID_RELEASE}.json?key=${e.READER_TOKEN}`,a=await fetch(t).then(w=>w.json()),o=document.querySelector(".chapter-list .selected");return{title:(r=(n=document.querySelector("title"))==null?void 0:n.textContent)==null?void 0:r.trim(),series:(s=document.querySelector(".series-cover a"))==null?void 0:s.getAttribute("href"),pages:a.images.length,prev:(u=(c=o==null?void 0:o.nextElementSibling)==null?void 0:c.querySelector("a"))==null?void 0:u.getAttribute("href"),next:(m=(g=o==null?void 0:o.previousElementSibling)==null?void 0:g.querySelector("a"))==null?void 0:m.getAttribute("href"),listImages:a.images.map(w=>w.avif||w.legacy)}}};// @license MIT
var lhtranslation={name:"LHTranslation",url:/https?:\/\/(www.)?lhtranslation.net\/read.+/,homepage:"https://lhtranslation.net/",language:["English"],category:"manga",run(){var a,o,n,r,s;const e=document.querySelector(".form-control option:checked"),t=[...document.querySelectorAll("img.chapter-img")];return{title:(o=(a=document.querySelector(".chapter-img.tieude font"))==null?void 0:a.textContent)==null?void 0:o.trim(),series:(n=document.querySelector(".navbar-brand.manga-name"))==null?void 0:n.getAttribute("href"),pages:t.length,prev:(r=e==null?void 0:e.nextElementSibling)==null?void 0:r.getAttribute("value"),next:(s=e==null?void 0:e.previousElementSibling)==null?void 0:s.getAttribute("value"),listImages:t.map(c=>c.getAttribute("src"))}}};// @license MIT
var madarawp={name:["Madara WordPress Plugin","MangaHaus","Isekai Scan","Comic Kiba","Zinmanga","mangatx","Toonily","Mngazuki","ReaperScans","JaiminisBox"],url:/https?:\/\/.+\/(manga|series)\/.+\/.+/,homepage:["#","https://manhuaus.com","https://isekaiscan.com/","https://comickiba.com/","https://zinmanga.com/","https://mangatx.com/","https://toonily.net/","https://mangazuki.me/","https://reaperscans.com/","https://jaiminisbox.net"],language:["English"],obs:"Any Site that uses Madara Wordpress Plugin",category:"manga",run(){var t,a,o,n,r;const e=[...document.querySelectorAll(".wp-manga-chapter-img, .blocks-gallery-item img")];return{title:(a=(t=document.querySelector("#chapter-heading"))==null?void 0:t.textContent)==null?void 0:a.trim(),series:(o=document.querySelector(".breadcrumb li:nth-child(2) a"))==null?void 0:o.getAttribute("href"),pages:e.length,prev:(n=document.querySelector(".prev_page"))==null?void 0:n.getAttribute("href"),next:(r=document.querySelector(".next_page"))==null?void 0:r.getAttribute("href"),listImages:e.map(s=>s.getAttribute("src")||s.getAttribute("data-src")||s.getAttribute("data-full-url"))}}};// @license MIT
var mangadex={name:"MangaDex",url:/https?:\/\/(www.)?mangadex.org\/chapter\/.+(\/.+)?/,homepage:"https://mangadex.org/",language:["English"],category:"manga",waitEle:"a[href^='/chapter/']",async run(){var r,s;const t=`https://api.mangadex.org/at-home/server/${window.location.pathname.match(/\/chapter\/([^/]+)(\/\d+)?/)[1]}`,a=await fetch(t).then(c=>c.json()),o=a.chapter.data,n=document.querySelectorAll("a[href^='/chapter/']");return{title:(r=document.querySelector("title"))==null?void 0:r.text.replace(" - MangaDex",""),series:(s=document.querySelector("a.text-primary[href^='/title/']"))==null?void 0:s.getAttribute("href"),pages:o.length,prev:n[1].getAttribute("href"),next:n[0].getAttribute("href"),listImages:o.map(c=>`${a.baseUrl}/data/${a.chapter.hash}/${c}`)}}};// @license MIT
var mangafox={name:["MangaFox","MangaHere"],url:/https?:\/\/(www.)?(fanfox.net|mangahere.cc)\/manga\/.+\/.+\//,homepage:["https://fanfox.net/","https://www.mangahere.cc/"],language:["English"],category:"manga",async run(){var e,t,a,o;const W=typeof unsafeWindow!="undefined"?unsafeWindow:window,key=(e=document.querySelector("#dm5_key"))==null?void 0:e.getAttribute("value"),options={method:"GET",headers:{"Content-Type":"text/plain"}},src=Array(W.imagecount).fill(null).map(async(_,i)=>{const url=`chapterfun.ashx?cid=${W.chapterid}&page=${i}&key=${key}`,api=await fetch(url,options).then(n=>n.text());return eval(api),d}),images=await Promise.all(src);return{title:(a=(t=document.querySelector(".reader-header-title div"))==null?void 0:t.textContent)==null?void 0:a.trim(),series:(o=document.querySelector(".reader-header-title a"))==null?void 0:o.getAttribute("href"),pages:W.imagecount,prev:W.prechapterurl,next:W.nextchapterurl,listImages:images.map((n,r)=>n[r===0?0:1])}}};// @license MIT
var mangafreak={name:"MangaFreak",url:/https?:\/\/.{3,4}?(mangafreak).net\/Read.+/,homepage:"https://mangafreak.net/",language:["English"],category:"manga",run(){var a,o,n,r,s;const e=document.querySelector(".chapter_list select option:checked"),t=[...document.querySelectorAll(".mySlides img")];return{title:(o=(a=document.querySelector("title"))==null?void 0:a.textContent)==null?void 0:o.trim(),series:(n=document.querySelector(".title a"))==null?void 0:n.getAttribute("href"),pages:t.length,prev:(r=e==null?void 0:e.previousElementSibling)==null?void 0:r.getAttribute("value"),next:(s=e==null?void 0:e.nextElementSibling)==null?void 0:s.getAttribute("value"),listImages:t.map(c=>c.getAttribute("src"))}}};// @license MIT
var mangahosted={name:"mangahosted",url:/https?:\/\/(www.)?mangahosted.com\/manga\/.+\/.+/,homepage:"https://mangahosted.com/",language:["Portuguese"],category:"manga",run(){const e=typeof unsafeWindow!="undefined"?unsafeWindow:window,t=[...document.querySelectorAll("picture img")];return{title:$(".breadcrumb li:eq(3)").text().trim(),series:$(".breadcrumb li:eq(2) a").attr("href"),pages:t.length,prev:e.$read_prev,next:e.$read_next,listImages:t.map(a=>a.getAttribute("src"))}}};// @license MIT
var mangahub={name:"MangaHub",url:/https?:\/\/(www.)?(mangahub).io\/chapter\/.+\/.+/,homepage:"https://mangahub.io/",language:["English"],category:"manga",waitEle:"#select-chapter",async run(){var c,u,g,m,w;const t=(typeof unsafeWindow!="undefined"?unsafeWindow:window).CURRENT_MANGA_SLUG||window.location.pathname.split("/")[2],a=window.location.pathname.split("/")[3].replace("chapter-",""),o={query:`{chapter(x:m01,slug:"${t}",number:${a}){pages}}`},n={method:"POST",body:JSON.stringify(o),headers:{"Content-Type":"application/json"}},r=await fetch("https://api.mghubcdn.com/graphql",n).then(p=>p.json()),s=Object.values(JSON.parse(r==null?void 0:r.data.chapter.pages.toString()));return{title:(u=(c=document.querySelector("#mangareader h3"))==null?void 0:c.textContent)==null?void 0:u.trim(),series:(g=document.querySelector("#mangareader a"))==null?void 0:g.getAttribute("href"),pages:s.length,prev:(m=document.querySelector(".previous a"))==null?void 0:m.getAttribute("href"),next:(w=document.querySelector(".next a"))==null?void 0:w.getAttribute("href"),listImages:s.map(p=>`https://img.mghubcdn.com/file/imghub/${p}`)}}};// @license MIT
var mangakakalot={name:["MangaKakalot","MangaNelo","MangaNato"],url:/https?:\/\/(www.)?((manganelo|mangakakalot).com\/chapter\/.+\/.+|(manganato|readmanganato).com\/manga-\w\w\d+\/chapter-\d+)/,homepage:["https://mangakakalot.com/page","http://www.manganelo.com/","http://www.manganato.com/"],language:["English"],category:"manga",run(){var t,a,o,n;const e=[...document.querySelectorAll("#vungdoc img, .container-chapter-reader img")];return{title:(a=(t=document.querySelector(".info-top-chapter h2, .imageOptions-chapter-info-top h1"))==null?void 0:t.textContent)==null?void 0:a.trim(),series:document.querySelectorAll("span a[title]").item(1).getAttribute("href"),pages:e.length,prev:(o=document.querySelector(".navi-change-chapter-btn-prev, .next"))==null?void 0:o.getAttribute("href"),next:(n=document.querySelector(".navi-change-chapter-btn-next, .back"))==null?void 0:n.getAttribute("href"),listImages:e.map(r=>r.getAttribute("src"))}}};// @license MIT
var mangapark={name:"MangaPark",url:/https?:\/\/(www.)?mangapark.(com|me|org|net)\/(manga|chapter|comic)\/.+\/.+/,homepage:"https://mangapark.net/",language:["English"],category:"manga",waitVar:"CryptoJS",run(){const e=JSON.parse(CryptoJS.AES.decrypt(amWord,amPass).toString(CryptoJS.enc.Utf8));return{title:`${amSub_name} - ${mpEpi_name}`,series:currSubUrl,pages:imgPathLis.length,prev:prevEpiUrl,next:nextEpiUrl,listImages:imgPathLis.map((t,a)=>`${imgCdnHost+t}?${e[a]}`)}}};// @license MIT
var mangareader={name:"Mangareader",url:/https?:\/\/(www.)?mangareader.to\/read\/.+\/.+\/.+/,homepage:"https://mangareader.to",language:["English"],category:"manga",obs:"Some galleries will not be usable",waitEle:".ds-image, .iv-card",run(){var a,o,n,r,s,c,u;const e=document.querySelector(".chapter-item.active"),t=[...document.querySelectorAll(".ds-image:not(.shuffled)[data-url], .iv-card:not(.shuffled)[data-url]")];return{title:(o=(a=document.querySelector(".hr-manga h2"))==null?void 0:a.textContent)==null?void 0:o.trim(),series:(n=document.querySelector(".hr-manga"))==null?void 0:n.getAttribute("href"),pages:t.length,prev:(s=(r=e==null?void 0:e.nextElementSibling)==null?void 0:r.querySelector("a"))==null?void 0:s.getAttribute("href"),next:(u=(c=e==null?void 0:e.previousElementSibling)==null?void 0:c.querySelector("a"))==null?void 0:u.getAttribute("href"),listImages:t.map(g=>g.getAttribute("data-url"))}}};// @license MIT
var __defProp$f=Object.defineProperty,__name$f=l((e,t)=>__defProp$f(e,"name",{value:t,configurable:!0}),"__name$f"),mangasee={name:["MangaSee","Manga4life"],url:/https?:\/\/(www.)?(mangasee123|manga4life).com\/read-online\/.+/,homepage:["https://mangasee123.com/","https://manga4life.com/"],language:["English"],category:"manga",waitAttr:[".img-fluid","src"],run(){var u,g,m,w,p;const e=((u=document.querySelector(".img-fluid"))==null?void 0:u.getAttribute("src"))||"",t=(g=[...document.querySelectorAll("body script:not([src])")].at(-1))==null?void 0:g.textContent,a=(t==null?void 0:t.match(/CurChapter = ({.+});/))||[],o=JSON.parse(a[1]),n=(t==null?void 0:t.match(/CHAPTERS = (\[\{.+}]);/))||[],r=JSON.parse(n[1]),s=r.findIndex(A=>A.Chapter===o.Chapter);function c(A){let h=r[s+A];if(h===void 0)return"#";h=h.Chapter;let f="";const b=h.substring(0,1);b!=="1"&&(f=`-index-${b}`);const v=parseInt(h.slice(1,-1),10);let C="";const y=h[h.length-1];return y!=="0"&&(C=`.${y}`),window.location.href.replace(/-chapter-.+/,`-chapter-${v}${C}${f}.html`)}return l(c,"ChapterURLEncode"),__name$f(c,"ChapterURLEncode"),{title:(w=(m=document.querySelector("title"))==null?void 0:m.textContent)==null?void 0:w.replace(/ Page .+/,"").trim(),series:(p=document.querySelector(".MainContainer a"))==null?void 0:p.getAttribute("href"),pages:parseInt(o.Page,10),prev:c(-1),next:c(1),listImages:Array(parseInt(o.Page,10)).fill(0).map((A,h)=>e.replace(/-\d\d\d.png/,`-${String(`000${h+1}`).slice(-3)}.png`))}}};// @license MIT
var mangatown={name:"MangaTown",url:/https?:\/\/(www.)?mangatown.com\/manga\/.+\/.+/,homepage:"https://www.mangatown.com/",language:["English"],category:"manga",waitEle:"#top_chapter_list option",waitMax:5e3,run(){var a,o,n,r;const e=[...document.querySelectorAll("div.page_select:nth-child(3) > select:nth-child(5) > option")].slice(0,-1),t=document.querySelector("#top_chapter_list option:checked");return{title:(a=document.querySelector(".title h1"))==null?void 0:a.textContent,series:(o=document.querySelector(".title h2 a"))==null?void 0:o.getAttribute("href"),pages:e.length,prev:(n=t==null?void 0:t.previousElementSibling)==null?void 0:n.getAttribute("value"),next:(r=t==null?void 0:t.nextElementSibling)==null?void 0:r.getAttribute("value"),listPages:e.map(s=>s.value),imageSelector:"#image"}}};// @license MIT
var ninemanga={name:"NineManga",url:/https?:\/\/(www.)?ninemanga.com\/chapter\/.+\/.+\.html/,homepage:"https://ninemanga.com/",language:["English"],category:"manga",run(){var a,o,n,r,s;const e=document.querySelector("#chapter option:checked"),t=[...document.querySelector("#page").querySelectorAll("option")];return{title:(o=(a=document.querySelector(".tip a"))==null?void 0:a.textContent)==null?void 0:o.trim(),series:(n=document.querySelector(".subgiude > li:nth-child(2) > a"))==null?void 0:n.getAttribute("href"),pages:t.length,prev:(r=e==null?void 0:e.nextElementSibling)==null?void 0:r.getAttribute("value"),next:(s=e==null?void 0:e.previousElementSibling)==null?void 0:s.getAttribute("value"),listPages:t.map(c=>$(c).val()),img:".manga_pic"}}};// @license MIT
var pandamanga={name:"PandaManga",url:/https?:\/\/(www.)?pandamanga.xyz\/.+\/.+\/.+/,homepage:"https://www.pandamanga.com/",language:["English"],category:"manga",run(){var o,n,r;const e=document.querySelector(".select-chapter option:checked"),t=JSON.parse(document.getElementById("__NEXT_DATA__").textContent),a=t.props.pageProps.mangaview.source.split(",").filter(s=>s.length>0);return{title:t.props.pageProps.mangaview.nameSeoChapter,series:(o=document.querySelector(".allc a"))==null?void 0:o.getAttribute("href"),pages:a.length,prev:(n=e==null?void 0:e.nextElementSibling)==null?void 0:n.getAttribute("value"),next:(r=e==null?void 0:e.previousElementSibling)==null?void 0:r.getAttribute("value"),listImages:a}}};// @license MIT
var rawdevart={name:"RawDevart",url:/https?:\/\/(www.)?rawdevart.com\/comic\/.+\/.+\//,homepage:"https://rawdevart.com",language:["Japanese"],category:"manga",waitVar:"rconfig",waitEle:"#chapter-list select",run(){var o,n;const e=typeof unsafeWindow!="undefined"?unsafeWindow:window,t=document.querySelector("#chapter-list option:checked"),a=[...document.querySelectorAll("#img-container img")];return{title:e.rconfig.chapterTitle,series:e.rconfig.prefix,pages:a.length,prev:(o=t==null?void 0:t.nextElementSibling)==null?void 0:o.getAttribute("value"),next:(n=t==null?void 0:t.previousElementSibling)==null?void 0:n.getAttribute("value"),listImages:a.map(r=>$(r).attr("data-src")||$(r).attr("src"))}}};// @license MIT
var readcomicsonline={name:"ReadComicsOnline",url:/https?:\/\/(www.)?readcomicsonline.ru\/comic\/.*\/\d*/,homepage:"https://readcomicsonline.ru/",language:["English"],category:"comic",run(){var a;const e=typeof unsafeWindow!="undefined"?unsafeWindow:window,t=[...document.querySelectorAll("#all img")];return{title:e.title.replace(/ - Page \d+/,""),series:(a=document.querySelector("div.pager-cnt a"))==null?void 0:a.getAttribute("href"),pages:e.pages.length,prev:e.prev_chapter,next:e.next_chapter,listImages:t.map(o=>o.getAttribute("data-src"))}}};// @license MIT
var readmangatoday={name:["ReadManga Today","Funmanga","MangaDoom","MangaInn"],url:/https?:\/\/(www.)?(funmanga|mngdoom|readmng|mangainn).(com|net)\/.+\/\d+/,homepage:["https://www.readmng.com/","https://funmanga.com/","https://mngdoom.com/","https://www.mangainn.net/"],language:["English"],category:"manga",run(){const e=typeof unsafeWindow!="undefined"?unsafeWindow:window;return{title:e.chapter_page_title,series:e.manga_url,pages:e.images.length,prev:e.prev_chapter_url,next:e.next_chapter_url,listImages:e.images.map(t=>t.url)}}};// @license MIT
var senmanga={name:"SenManga(Raw)",url:/https?:\/\/raw.senmanga.com\/.+\/.+\/?/,homepage:"https://raw.senmanga.com/",language:["Original"],category:"manga",run(){var n,r,s,c,u,g;const e=`/${window.location.pathname.split("/")[1]}/${window.location.pathname.split("/")[2]}`,t=parseInt(((n=document.querySelector(".page-list select option:last-child"))==null?void 0:n.getAttribute("value"))||"0",10),a=[...document.querySelectorAll(".dropdown-chapter li")],o=a.findIndex(m=>{var w;return((w=m.querySelector("a"))==null?void 0:w.getAttribute("href"))===window.location.href});return{title:$(".title").text().trim(),series:(r=document.querySelector(".breadcrumb li:nth-child(2) a"))==null?void 0:r.getAttribute("href"),pages:t,prev:(c=(s=a.at(o+1))==null?void 0:s.querySelector("a"))==null?void 0:c.getAttribute("href"),next:(g=(u=a.at(o-1))==null?void 0:u.querySelector("a"))==null?void 0:g.getAttribute("href"),listPages:Array(t).fill(0).map((m,w)=>`${e}/${w+1}/`),img:".picture"}}};// @license MIT
var tenmanga={name:"TenManga",url:/https?:\/\/(www.)?(tenmanga|gardenmanage).com\/(chapter|statuses)\/.+/,homepage:"https://www.tenmanga.com/",language:["English"],category:"manga",waitVar:"_pageCtrl",run(){var o,n,r,s,c;const e=typeof unsafeWindow!="undefined"?unsafeWindow:window,t=document.querySelector(".mangaread-pagenav select option:checked"),a=e._pageCtrl.options.all_imgs_url;return{title:(n=(o=document.querySelector(".title  h1"))==null?void 0:o.textContent)==null?void 0:n.trim(),series:(r=document.querySelector(".title  a:nth-child(2)"))==null?void 0:r.getAttribute("href"),pages:a.length,prev:(s=t==null?void 0:t.nextElementSibling)==null?void 0:s.getAttribute("value"),next:(c=t==null?void 0:t.previousElementSibling)==null?void 0:c.getAttribute("value"),listImages:a}}};// @license MIT
var tmofans={name:"TuMangaOnline",url:/https?:\/\/(www.)?(tmofans|lectortmo|followmanga).com\/.+\/.+\/(paginated|cascade)/,homepage:"https://lectortmo.com/",language:["Spanish"],category:"manga",run(){var o,n,r,s,c;const e=[...document.querySelectorAll(".img-container img")],t=[...document.querySelectorAll("div.container:nth-child(4) select#viewer-pages-select option")],a=e.length>1?e.length:t.length;return{title:(n=(o=document.querySelector("title"))==null?void 0:o.textContent)==null?void 0:n.trim(),series:(r=document.querySelector('a[title="Volver"]'))==null?void 0:r.getAttribute("href"),pages:a,prev:(s=document.querySelector(".chapter-prev a"))==null?void 0:s.getAttribute("href"),next:(c=document.querySelector(".chapter-next a"))==null?void 0:c.getAttribute("href"),listPages:e.length>1?null:Array(a).fill(0).map((u,g)=>`${window.location.href.replace(/\/\d+$/,"")}/${g+1}`),listImages:e.length>1?e.map(u=>$(u).attr("data-src")):null,img:"#viewer-container img, .viewer-page"}}};// @license MIT
var unionmangas={name:"UnionMangas",url:/https?:\/\/(www.)?unionleitor.top\/leitor\/.+\/.+/,homepage:"https://unionleitor.top/",language:["Portuguese"],category:"manga",run(){var a,o,n,r,s;const e=document.querySelector("#capitulo_trocar option:checked"),t=[...document.querySelectorAll(".img-manga")];return{title:(o=(a=document.querySelector(".titulo-leitura"))==null?void 0:a.textContent)==null?void 0:o.trim(),series:(n=document.querySelector(".breadcrumbs a:nth-child(3)"))==null?void 0:n.getAttribute("href"),pages:t.length,prev:(r=e==null?void 0:e.previousElementSibling)==null?void 0:r.getAttribute("value"),next:(s=e==null?void 0:e.nextElementSibling)==null?void 0:s.getAttribute("value"),listImages:t.map(c=>c.getAttribute("src"))}}};// @license MIT
var wpmanga={name:["Manga33"],url:/https?:\/\/(www.)?(manga33).com\/manga\/.+/,homepage:["https://manga33.com/"],language:["English"],category:"manga",run(){var t,a,o,n,r;const e=[...document.querySelectorAll(".chapter-content img")];return{title:(a=(t=document.querySelector("title"))==null?void 0:t.textContent)==null?void 0:a.trim(),series:(o=document.querySelector(".navbar-brand"))==null?void 0:o.getAttribute("href"),pages:e.length,prev:(n=document.querySelector("a.prev"))==null?void 0:n.getAttribute("href"),next:(r=document.querySelector("a.next"))==null?void 0:r.getAttribute("href"),listImages:e.map(s=>s.getAttribute("src")),before(){window.location.pathname.match(/all.html$/)||window.location.pathname.match(/\d+-\d+.html$/)&&(window.location.pathname=window.location.pathname.replace(/-\d+.html$/,"-all.html"))}}}};const sites=[asurasflamecans,batoto,comicastle,disasterscans,dysnatyscans,leitor,lhtranslation,mangadex,mangafox,mangafreak,mangahosted,mangahub,mangakakalot,mangapark,mangareader,mangasee,mangatown,ninemanga,pandamanga,rawdevart,readcomicsonline,readmangatoday,senmanga,tenmanga,tmofans,unionmangas,wpmanga,foolslide,madarawp];// @license MIT
var __defProp$e=Object.defineProperty,__name$e=l((e,t)=>__defProp$e(e,"name",{value:t,configurable:!0}),"__name$e");function logScript(...e){return console.log("MangaOnlineViewer: ",...e),e}l(logScript,"logScript"),__name$e(logScript,"logScript");function logClear(...e){try{typeof console.clear!="undefined"&&console.clear()}finally{logScript(...e)}}l(logClear,"logClear"),__name$e(logClear,"logClear");function getListGM(){return typeof GM_listValues!="undefined"?GM_listValues():[]}l(getListGM,"getListGM"),__name$e(getListGM,"getListGM");function removeValueGM(e){return typeof GM_deleteValue!="undefined"?GM_deleteValue(e):logScript("Removing: ",e)}l(removeValueGM,"removeValueGM"),__name$e(removeValueGM,"removeValueGM");const getInfoGM=typeof GM_info!="undefined"?GM_info:{scriptHandler:"Console",script:{name:"Debug",version:"Testing"}};function getValueGM(e,t=null){return typeof GM_getValue!="undefined"?GM_getValue(e,t):(logScript("Fake Getting: ",e," = ",t),t)}l(getValueGM,"getValueGM"),__name$e(getValueGM,"getValueGM");function getJsonGM(e,t=null){const a=getValueGM(e,t);return typeof a=="string"?JSON.parse(a):a}l(getJsonGM,"getJsonGM"),__name$e(getJsonGM,"getJsonGM");function getSettings(e){return getJsonGM("settings",e)}l(getSettings,"getSettings"),__name$e(getSettings,"getSettings");function setValueGM(e,t){try{return GM_setValue(e,t),t.toString()}catch{return logScript("Fake Setting: ",e," = ",t),String(t)}}l(setValueGM,"setValueGM"),__name$e(setValueGM,"setValueGM");function setJsonGM(e,t){return setValueGM(e,JSON.stringify(t))}l(setJsonGM,"setJsonGM"),__name$e(setJsonGM,"setJsonGM");function setSettings(e){return setJsonGM("settings",e)}l(setSettings,"setSettings"),__name$e(setSettings,"setSettings");function getBrowser(){const e=navigator.userAgent;let t,a=e.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i)||[];return/trident/i.test(a[1])?(t=/\brv[ :]+(\d+)/g.exec(e)||[],`IE ${t[1]||""}`):a[1]==="Chrome"&&(t=e.match(/\b(OPR|Edge)\/(\d+)/),t!==null)?t.slice(1).join(" ").replace("OPR","Opera"):(a=a[2]?[a[1],a[2]]:[navigator.appName,navigator.appVersion,"-?"],t=e.match(/version\/(\d+)/i),t!==null&&a.splice(1,1,t[1]),a.join(" "))}l(getBrowser,"getBrowser"),__name$e(getBrowser,"getBrowser");function getEngine(){return getInfoGM.scriptHandler||"Greasemonkey"}l(getEngine,"getEngine"),__name$e(getEngine,"getEngine");const isMobile=window.matchMedia("screen and (max-width: 1024px)").matches;// @license MIT
var __defProp$d=Object.defineProperty,__name$d=l((e,t)=>__defProp$d(e,"name",{value:t,configurable:!0}),"__name$d");function isEmpty(e){return e===null||typeof e=="undefined"||e===void 0||typeof e=="string"&&e===""||Array.isArray(e)&&e.length===0||typeof e=="object"&&Object.keys(e).length===0}l(isEmpty,"isEmpty"),__name$d(isEmpty,"isEmpty");function isNothing(e){const t=__name$d(a=>Array.isArray(a)?!a.some(o=>!isNothing(o)):Object.keys(a).some(n=>!isNothing(a[n]))?!1:t(Object.keys(a)),"isEmptyObject");return e==!1||e===0||isEmpty(e)||typeof e=="object"&&t(e)}l(isNothing,"isNothing"),__name$d(isNothing,"isNothing");// @license MIT
var cssStyles=`
html {
  font-size: 100%;
}

body {
  margin: 0;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 14px;
  line-height: 20px;
  color: #333;
  background-color: #FFF;
  padding: 0;
}

a {
  color: #08C;
  text-decoration: none;
}

img {
  height: auto;
  max-width: 100%;
  vertical-align: middle;
  border: 0 none;
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
  width: 100%;
  height: 100%;
  padding-bottom: 100px;
  min-height: 1080px;
}

#MangaOnlineViewer #Chapter {
  text-align: center;
  display: block;
}

#MangaOnlineViewer #Chapter.WebComic .PageFunctions {
  position: relative;
  margin-bottom: -23px;
}

#MangaOnlineViewer #Chapter.WebComic .PageContent {
  margin-bottom: 0;
  line-height: 0;
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
  padding: 8px;
  position: fixed;
  top: 0;
  left: 405px;
  width: auto;
  display: none;
}

#MangaOnlineViewer #ViewerShortcuts {
  padding: 8px;
  position: fixed;
  top: 65px;
  left: 0;
}

#MangaOnlineViewer #ViewerControls .controlLabel {
  display: list-item;
  list-style: none;
}

#MangaOnlineViewer select {
  height: 20px;
  padding: 0;
  margin-bottom: 5px;
}

#MangaOnlineViewer .controlButton {
  cursor: pointer;
  border: 0 none;
}

#MangaOnlineViewer #ImageOptions {
  left: 0;
  position: absolute;
  top: 0;
  width: 405px;
}

#MangaOnlineViewer #ImageOptions .panel {
  padding: 5px;
  position: inherit;
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
  width: 200px;
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
}

#MangaOnlineViewer .PageContent {
  margin: 0 0 15px;
  text-align: center;
  display: inline-block;
}

#MangaOnlineViewer .PageContent img[src=""],
#MangaOnlineViewer .PageContent img:not([src]) {
  width: 500px;
  height: 750px;
  display: inline-block;
}

#MangaOnlineViewer #gotoPage {
  width: 35px;
}

#MangaOnlineViewer #ThemeSelector {
  width: 110px;
}

#MangaOnlineViewer header, #MangaOnlineViewer footer {
 display: flex;
 justify-content: center;
 align-content: center;
 position: relative;
}

#MangaOnlineViewer .ChapterControl {
  right: 270px;
  position: absolute;
  top: 20px;
}

#MangaOnlineViewer .ChapterControl a {
  display: inline-block;
  width: 80px;
  height: 25px;
  text-align: center;
  margin-left: 3px;
  margin-bottom: -1px;
}

#MangaOnlineViewer .ChapterControl a[href='#'],
#MangaOnlineViewer .ChapterControl a[href=''] {
  visibility: hidden
}

#MangaOnlineViewer .ViewerTitle {
  text-align: center;
  min-height: 60px;
  max-width: 500px;
  display: flex;
  justify-content: center;
  align-content: center;
  padding-top: 10px;
}

#MangaOnlineViewer #Counters {
  position: absolute;
  right: 10px;
  top: 22px;
}

#MangaOnlineViewer .PageFunctions {
  font-family: monospace;
  font-size: 10pt;
  padding-right: 120px;
  text-align: right
}

#MangaOnlineViewer .PageFunctions > span {
  min-width: 20px;
  text-align: center;
  display: inline-block;
  padding: 2px 10px
}

#MangaOnlineViewer .PageFunctions > a {
  height: 16px;
  width: 16px;
  padding: 10px;
}

#MangaOnlineViewer .PageFunctions a {
  opacity: 0.2;
}

#MangaOnlineViewer .PageFunctions:hover a {
  opacity: 1;
}

#MangaOnlineViewer.hideControls .PageFunctions {
  display: none;
  visibility: hidden;
}

#MangaOnlineViewer #NavigationCounters {
  margin-top: 5px;
  width: 100%;
}

#MangaOnlineViewer #Navigation {
  bottom: -180px;
  height: 190px;
  overflow-x: hidden;
  overflow-y: hidden;
  padding-bottom: 20px;
  position: fixed;
  white-space: nowrap;
  width: 100%;
  text-align: center;
}

#MangaOnlineViewer #Navigation #Thumbnails {
  overflow-x: auto;
  overflow-y: hidden;
}

#MangaOnlineViewer #Navigation:hover {
  bottom: 0;
}

#MangaOnlineViewer #Navigation.disabled {
  display: none;
}

#MangaOnlineViewer #Navigation.visible {
  bottom: 0;
}

#MangaOnlineViewer #Navigation .Thumbnail {
  display: inline-block;
  height: 150px;
  margin: 0 5px;
  position: relative;
}

#MangaOnlineViewer #Navigation .Thumbnail span {
  display: block;
  opacity: 0.8;
  position: relative;
  top: -30px;
  width: 100%;
}

#MangaOnlineViewer #Navigation .Thumbnail img {
  align-content: center;
  cursor: pointer;
  display: inline-block;
  margin-bottom: -10px;
  margin-top: 10px;
  max-height: 150px;
  min-height: 150px;
  min-width: 80px;
  max-width: 160px;
}

#MangaOnlineViewer #Navigation .nav {
  transform: rotate(-90deg);
}

#MangaOnlineViewer #ImageOptions .menuOuterArrow {
  width: 0;
  height: 0;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  border-left: 10px solid blue;
  display: inline-block;
  position: absolute;
  bottom: 0;
}

#MangaOnlineViewer #ImageOptions .menuInnerArrow {
  width: 0;
  height: 0;
  border-top: 5px solid transparent;
  border-bottom: 5px solid transparent;
  border-left: 5px solid white;
  left: -10px;
  position: absolute;
  top: -5px;
  display: inline-block;
}

#MangaOnlineViewer.mobile * {
  float: none !important;
}

#MangaOnlineViewer.mobile #Navigation {
  display: none;
}

#MangaOnlineViewer.mobile .PageFunctions {
  padding: 0;
}

#MangaOnlineViewer.mobile .PageFunctions a:not(.Bookmark) {
  display: none;
}

#MangaOnlineViewer.mobile .PageFunctions a.Bookmark {
  opacity: 1;
}

#MangaOnlineViewer.mobile .PageFunctions span {
  right: 0;
  position: inherit;
  text-align: center;
}

#MangaOnlineViewer.mobile .PageContent {
  margin: 0;
  width: 100%;
}

#MangaOnlineViewer.mobile .PageContent img {
  width: 100% !important;
}

#MangaOnlineViewer.mobile .fitWidthIfOversize .PageContent img {
  max-width: 100%;
}

#MangaOnlineViewer.mobile #ImageOptions img:not(#settings) {
  display: none;
}

#MangaOnlineViewer.mobile #ViewerShortcuts {
  display: none !important;
}

#MangaOnlineViewer.mobile #ViewerControls {
  padding: 8px;
  position: fixed;
  top: 0;
  left: 45px;
  width: auto;
}

#MangaOnlineViewer.mobile #ViewerControls span.DefaultZoom,
#MangaOnlineViewer.mobile #ViewerControls span.viewMode,
#MangaOnlineViewer.mobile #ViewerControls span.fitIfOversize,
#MangaOnlineViewer.mobile #ViewerControls span.showThumbnails,
#MangaOnlineViewer.mobile #ViewerControls span.lazyLoadImages,
#MangaOnlineViewer.mobile #ViewerControls span.downloadZip {
  display: none;
}

#MangaOnlineViewer.mobile #ViewerControls {
  padding: 8px;
  position: fixed;
  top: 0;
  left: 45px;
  width: auto;
}

#MangaOnlineViewer.mobile #ImageOptions #menu {
  display: none;
}

#MangaOnlineViewer.mobile #ImageOptions #Zoom {
  display: none;
}

#MangaOnlineViewer.mobile .ViewerTitle {
  height: auto;
}

#MangaOnlineViewer.mobile .ChapterControl {
  margin: 10px;
  display: block;
  text-align: center;
}

#MangaOnlineViewer.mobile .ChapterControl .download {
  display: none;
}

#MangaOnlineViewer.mobile #Counters {
  position: inherit;
  text-align: center;
  margin: 10px;
}

#MangaOnlineViewer.mobile #Chapter {
  margin: 5px auto 0;
}

#MangaOnlineViewer .fitWidthIfOversize .PageContent img {
  max-width: 100%;
}

#MangaOnlineViewer .minicolors-theme-default .minicolors-swatch {
  top: 2px;
  left: 2px;
}
`;const sweetalertStyle=`
.swal2-popup.swal2-toast {
    box-sizing: border-box;
    grid-column: 1/4 !important;
    grid-row: 1/4 !important;
    grid-template-columns: 1fr 99fr 1fr;
    padding: 1em;
    overflow-y: hidden;
    background: #fff;
    box-shadow: 0 0 1px hsla(0deg, 0%, 0%, 0.075), 0 1px 2px hsla(0deg, 0%, 0%, 0.075),
        1px 2px 4px hsla(0deg, 0%, 0%, 0.075), 1px 3px 8px hsla(0deg, 0%, 0%, 0.075),
        2px 4px 16px hsla(0deg, 0%, 0%, 0.075);
    pointer-events: all;
}
.swal2-popup.swal2-toast > * {
    grid-column: 2;
}
.swal2-popup.swal2-toast #swal2-title {
    margin: 0.5em 1em;
    padding: 0;
    font-size: 1em;
    text-align: initial;
}
.swal2-popup.swal2-toast .swal2-loading {
    justify-content: center;
}
.swal2-popup.swal2-toast .swal2-input {
    height: 2em;
    margin: 0.5em;
    font-size: 1em;
}
.swal2-popup.swal2-toast .swal2-validation-message {
    font-size: 1em;
}
.swal2-popup.swal2-toast .swal2-footer {
    margin: 0.5em 0 0;
    padding: 0.5em 0 0;
    font-size: 0.8em;
}
.swal2-popup.swal2-toast .swal2-close {
    grid-column: 3/3;
    grid-row: 1/99;
    align-self: center;
    width: 0.8em;
    height: 0.8em;
    margin: 0;
    font-size: 2em;
}
.swal2-popup.swal2-toast .swal2-html-container {
    margin: 0.5em 1em;
    padding: 0;
    font-size: 1em;
    text-align: initial;
}
.swal2-popup.swal2-toast .swal2-html-container:empty {
    padding: 0;
}
.swal2-popup.swal2-toast .swal2-loader {
    grid-column: 1;
    grid-row: 1/99;
    align-self: center;
    width: 2em;
    height: 2em;
    margin: 0.25em;
}
.swal2-popup.swal2-toast .swal2-icon {
    grid-column: 1;
    grid-row: 1/99;
    align-self: center;
    width: 2em;
    min-width: 2em;
    height: 2em;
    margin: 0 0.5em 0 0;
}
.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content {
    display: flex;
    align-items: center;
    font-size: 1.8em;
    font-weight: 700;
}
.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring {
    width: 2em;
    height: 2em;
}
.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^='swal2-x-mark-line'] {
    top: 0.875em;
    width: 1.375em;
}
.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^='swal2-x-mark-line'][class$='left'] {
    left: 0.3125em;
}
.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^='swal2-x-mark-line'][class$='right'] {
    right: 0.3125em;
}
.swal2-popup.swal2-toast .swal2-actions {
    justify-content: flex-start;
    height: auto;
    margin: 0;
    margin-top: 0.5em;
    padding: 0 0.5em;
}
.swal2-popup.swal2-toast .swal2-styled {
    margin: 0.25em 0.5em;
    padding: 0.4em 0.6em;
    font-size: 1em;
}
.swal2-popup.swal2-toast .swal2-success {
    border-color: #a5dc86;
}
.swal2-popup.swal2-toast .swal2-success [class^='swal2-success-circular-line'] {
    position: absolute;
    width: 1.6em;
    height: 3em;
    transform: rotate(45deg);
    border-radius: 50%;
}
.swal2-popup.swal2-toast .swal2-success [class^='swal2-success-circular-line'][class$='left'] {
    top: -0.8em;
    left: -0.5em;
    transform: rotate(-45deg);
    transform-origin: 2em 2em;
    border-radius: 4em 0 0 4em;
}
.swal2-popup.swal2-toast .swal2-success [class^='swal2-success-circular-line'][class$='right'] {
    top: -0.25em;
    left: 0.9375em;
    transform-origin: 0 1.5em;
    border-radius: 0 4em 4em 0;
}
.swal2-popup.swal2-toast .swal2-success .swal2-success-ring {
    width: 2em;
    height: 2em;
}
.swal2-popup.swal2-toast .swal2-success .swal2-success-fix {
    top: 0;
    left: 0.4375em;
    width: 0.4375em;
    height: 2.6875em;
}
.swal2-popup.swal2-toast .swal2-success [class^='swal2-success-line'] {
    height: 0.3125em;
}
.swal2-popup.swal2-toast .swal2-success [class^='swal2-success-line'][class$='tip'] {
    top: 1.125em;
    left: 0.1875em;
    width: 0.75em;
}
.swal2-popup.swal2-toast .swal2-success [class^='swal2-success-line'][class$='long'] {
    top: 0.9375em;
    right: 0.1875em;
    width: 1.375em;
}
.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip {
    -webkit-animation: swal2-toast-animate-success-line-tip 0.75s;
    animation: swal2-toast-animate-success-line-tip 0.75s;
}
.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long {
    -webkit-animation: swal2-toast-animate-success-line-long 0.75s;
    animation: swal2-toast-animate-success-line-long 0.75s;
}
.swal2-popup.swal2-toast.swal2-show {
    -webkit-animation: swal2-toast-show 0.5s;
    animation: swal2-toast-show 0.5s;
}
.swal2-popup.swal2-toast.swal2-hide {
    -webkit-animation: swal2-toast-hide 0.1s forwards;
    animation: swal2-toast-hide 0.1s forwards;
}
.swal2-container {
    display: grid;
    position: fixed;
    z-index: 1060;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    box-sizing: border-box;
    grid-template-areas: 'top-start top top-end' 'center-start center center-end' 'bottom-start bottom-center bottom-end';
    grid-template-rows: minmax(-webkit-min-content, auto) minmax(-webkit-min-content, auto) minmax(
            -webkit-min-content,
            auto
        );
    grid-template-rows: minmax(min-content, auto) minmax(min-content, auto) minmax(
            min-content,
            auto
        );
    height: 100%;
    padding: 0.625em;
    overflow-x: hidden;
    transition: background-color 0.1s;
    -webkit-overflow-scrolling: touch;
}
.swal2-container.swal2-backdrop-show,
.swal2-container.swal2-noanimation {
    background: rgba(0, 0, 0, 0.4);
}
.swal2-container.swal2-backdrop-hide {
    background: 0 0 !important;
}
.swal2-container.swal2-bottom-start,
.swal2-container.swal2-center-start,
.swal2-container.swal2-top-start {
    grid-template-columns: minmax(0, 1fr) auto auto;
}
.swal2-container.swal2-bottom,
.swal2-container.swal2-center,
.swal2-container.swal2-top {
    grid-template-columns: auto minmax(0, 1fr) auto;
}
.swal2-container.swal2-bottom-end,
.swal2-container.swal2-center-end,
.swal2-container.swal2-top-end {
    grid-template-columns: auto auto minmax(0, 1fr);
}
.swal2-container.swal2-top-start > .swal2-popup {
    align-self: start;
}
.swal2-container.swal2-top > .swal2-popup {
    grid-column: 2;
    align-self: start;
    justify-self: center;
}
.swal2-container.swal2-top-end > .swal2-popup,
.swal2-container.swal2-top-right > .swal2-popup {
    grid-column: 3;
    align-self: start;
    justify-self: end;
}
.swal2-container.swal2-center-left > .swal2-popup,
.swal2-container.swal2-center-start > .swal2-popup {
    grid-row: 2;
    align-self: center;
}
.swal2-container.swal2-center > .swal2-popup {
    grid-column: 2;
    grid-row: 2;
    align-self: center;
    justify-self: center;
}
.swal2-container.swal2-center-end > .swal2-popup,
.swal2-container.swal2-center-right > .swal2-popup {
    grid-column: 3;
    grid-row: 2;
    align-self: center;
    justify-self: end;
}
.swal2-container.swal2-bottom-left > .swal2-popup,
.swal2-container.swal2-bottom-start > .swal2-popup {
    grid-column: 1;
    grid-row: 3;
    align-self: end;
}
.swal2-container.swal2-bottom > .swal2-popup {
    grid-column: 2;
    grid-row: 3;
    justify-self: center;
    align-self: end;
}
.swal2-container.swal2-bottom-end > .swal2-popup,
.swal2-container.swal2-bottom-right > .swal2-popup {
    grid-column: 3;
    grid-row: 3;
    align-self: end;
    justify-self: end;
}
.swal2-container.swal2-grow-fullscreen > .swal2-popup,
.swal2-container.swal2-grow-row > .swal2-popup {
    grid-column: 1/4;
    width: 100%;
}
.swal2-container.swal2-grow-column > .swal2-popup,
.swal2-container.swal2-grow-fullscreen > .swal2-popup {
    grid-row: 1/4;
    align-self: stretch;
}
.swal2-container.swal2-no-transition {
    transition: none !important;
}
.swal2-popup {
    display: none;
    position: relative;
    box-sizing: border-box;
    grid-template-columns: minmax(0, 100%);
    width: 32em;
    max-width: 100%;
    padding: 0 0 1.25em;
    border: none;
    border-radius: 5px;
    background: #fff;
    color: #545454;
    font-family: inherit;
    font-size: 1rem;
}
.swal2-popup:focus {
    outline: 0;
}
.swal2-popup.swal2-loading {
    overflow-y: hidden;
}
#swal2-title {
    position: relative;
    max-width: 100%;
    margin: 0;
    padding: 0.8em 1em 0;
    color: inherit;
    font-size: 1.875em;
    font-weight: 600;
    text-align: center;
    text-transform: none;
    word-wrap: break-word;
}
.swal2-actions {
    display: flex;
    z-index: 1;
    box-sizing: border-box;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    width: auto;
    margin: 1.25em auto 0;
    padding: 0;
}
.swal2-actions:not(.swal2-loading) .swal2-styled[disabled] {
    opacity: 0.4;
}
.swal2-actions:not(.swal2-loading) .swal2-styled:hover {
    background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1));
}
.swal2-actions:not(.swal2-loading) .swal2-styled:active {
    background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2));
}
.swal2-loader {
    display: none;
    align-items: center;
    justify-content: center;
    width: 2.2em;
    height: 2.2em;
    margin: 0 1.875em;
    -webkit-animation: swal2-rotate-loading 1.5s linear 0s infinite normal;
    animation: swal2-rotate-loading 1.5s linear 0s infinite normal;
    border-width: 0.25em;
    border-style: solid;
    border-radius: 100%;
    border-color: #2778c4 transparent #2778c4 transparent;
}
.swal2-styled {
    margin: 0.3125em;
    padding: 0.625em 1.1em;
    transition: box-shadow 0.1s;
    box-shadow: 0 0 0 3px transparent;
    font-weight: 500;
}
.swal2-styled:not([disabled]) {
    cursor: pointer;
}
.swal2-styled.swal2-confirm {
    border: 0;
    border-radius: 0.25em;
    background: initial;
    background-color: #7066e0;
    color: #fff;
    font-size: 1em;
}
.swal2-styled.swal2-confirm:focus {
    box-shadow: 0 0 0 3px rgba(112, 102, 224, 0.5);
}
.swal2-styled.swal2-deny {
    border: 0;
    border-radius: 0.25em;
    background: initial;
    background-color: #dc3741;
    color: #fff;
    font-size: 1em;
}
.swal2-styled.swal2-deny:focus {
    box-shadow: 0 0 0 3px rgba(220, 55, 65, 0.5);
}
.swal2-styled.swal2-cancel {
    border: 0;
    border-radius: 0.25em;
    background: initial;
    background-color: #6e7881;
    color: #fff;
    font-size: 1em;
}
.swal2-styled.swal2-cancel:focus {
    box-shadow: 0 0 0 3px rgba(110, 120, 129, 0.5);
}
.swal2-styled.swal2-default-outline:focus {
    box-shadow: 0 0 0 3px rgba(100, 150, 200, 0.5);
}
.swal2-styled:focus {
    outline: 0;
}
.swal2-styled::-moz-focus-inner {
    border: 0;
}
.swal2-footer {
    justify-content: center;
    margin: 1em 0 0;
    padding: 1em 1em 0;
    border-top: 1px solid #eee;
    color: inherit;
    font-size: 1em;
}
.swal2-timer-progress-bar-container {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    grid-column: auto !important;
    overflow: hidden;
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;
}
.swal2-timer-progress-bar {
    width: 100%;
    height: 0.25em;
    background: rgba(0, 0, 0, 0.2);
}
.swal2-image {
    max-width: 100%;
    margin: 2em auto 1em;
}
.swal2-close {
    z-index: 2;
    align-items: center;
    justify-content: center;
    width: 1.2em;
    height: 1.2em;
    margin-top: 0;
    margin-right: 0;
    margin-bottom: -1.2em;
    padding: 0;
    overflow: hidden;
    transition: color 0.1s, box-shadow 0.1s;
    border: none;
    border-radius: 5px;
    background: 0 0;
    color: #ccc;
    font-family: serif;
    font-family: monospace;
    font-size: 2.5em;
    cursor: pointer;
    justify-self: end;
}
.swal2-close:hover {
    transform: none;
    background: 0 0;
    color: #f27474;
}
.swal2-close:focus {
    outline: 0;
    box-shadow: inset 0 0 0 3px rgba(100, 150, 200, 0.5);
}
.swal2-close::-moz-focus-inner {
    border: 0;
}
.swal2-html-container {
    z-index: 1;
    justify-content: center;
    margin: 1em 1.6em 0.3em;
    padding: 0;
    overflow: auto;
    color: inherit;
    font-size: 1.125em;
    font-weight: 400;
    line-height: normal;
    text-align: center;
    word-wrap: break-word;
    word-break: break-word;
}
.swal2-checkbox,
.swal2-file,
.swal2-input,
.swal2-radio,
.swal2-select,
.swal2-textarea {
    margin: 1em 2em 3px;
}
.swal2-file,
.swal2-input,
.swal2-textarea {
    box-sizing: border-box;
    width: auto;
    transition: border-color 0.1s, box-shadow 0.1s;
    border: 1px solid #d9d9d9;
    border-radius: 0.1875em;
    background: 0 0;
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.06), 0 0 0 3px transparent;
    color: inherit;
    font-size: 1.125em;
}
.swal2-file.swal2-inputerror,
.swal2-input.swal2-inputerror,
.swal2-textarea.swal2-inputerror {
    border-color: #f27474 !important;
    box-shadow: 0 0 2px #f27474 !important;
}
.swal2-file:focus,
.swal2-input:focus,
.swal2-textarea:focus {
    border: 1px solid #b4dbed;
    outline: 0;
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.06), 0 0 0 3px rgba(100, 150, 200, 0.5);
}
.swal2-file::-moz-placeholder,
.swal2-input::-moz-placeholder,
.swal2-textarea::-moz-placeholder {
    color: #ccc;
}
.swal2-file:-ms-input-placeholder,
.swal2-input:-ms-input-placeholder,
.swal2-textarea:-ms-input-placeholder {
    color: #ccc;
}
.swal2-file::placeholder,
.swal2-input::placeholder,
.swal2-textarea::placeholder {
    color: #ccc;
}
.swal2-range {
    margin: 1em 2em 3px;
    background: #fff;
}
.swal2-range input {
    width: 80%;
}
.swal2-range output {
    width: 20%;
    color: inherit;
    font-weight: 600;
    text-align: center;
}
.swal2-range input,
.swal2-range output {
    height: 2.625em;
    padding: 0;
    font-size: 1.125em;
    line-height: 2.625em;
}
.swal2-input {
    height: 2.625em;
    padding: 0 0.75em;
}
.swal2-file {
    width: 75%;
    margin-right: auto;
    margin-left: auto;
    background: 0 0;
    font-size: 1.125em;
}
.swal2-textarea {
    height: 6.75em;
    padding: 0.75em;
}
.swal2-select {
    min-width: 50%;
    max-width: 100%;
    padding: 0.375em 0.625em;
    background: 0 0;
    color: inherit;
    font-size: 1.125em;
}
.swal2-checkbox,
.swal2-radio {
    align-items: center;
    justify-content: center;
    background: #fff;
    color: inherit;
}
.swal2-checkbox label,
.swal2-radio label {
    margin: 0 0.6em;
    font-size: 1.125em;
}
.swal2-checkbox input,
.swal2-radio input {
    flex-shrink: 0;
    margin: 0 0.4em;
}
.swal2-input-label {
    display: flex;
    justify-content: center;
    margin: 1em auto 0;
}
.swal2-validation-message {
    align-items: center;
    justify-content: center;
    margin: 1em 0 0;
    padding: 0.625em;
    overflow: hidden;
    background: #f0f0f0;
    color: #666;
    font-size: 1em;
    font-weight: 300;
}
.swal2-validation-message::before {
    content: '!';
    display: inline-block;
    width: 1.5em;
    min-width: 1.5em;
    height: 1.5em;
    margin: 0 0.625em;
    border-radius: 50%;
    background-color: #f27474;
    color: #fff;
    font-weight: 600;
    line-height: 1.5em;
    text-align: center;
}
.swal2-icon {
    position: relative;
    box-sizing: content-box;
    justify-content: center;
    width: 5em;
    height: 5em;
    margin: 2.5em auto 0.6em;
    border: 0.25em solid transparent;
    border-radius: 50%;
    border-color: #000;
    font-family: inherit;
    line-height: 5em;
    cursor: default;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}
.swal2-icon .swal2-icon-content {
    display: flex;
    align-items: center;
    font-size: 3.75em;
}
.swal2-icon.swal2-error {
    border-color: #f27474;
    color: #f27474;
}
.swal2-icon.swal2-error .swal2-x-mark {
    position: relative;
    flex-grow: 1;
}
.swal2-icon.swal2-error [class^='swal2-x-mark-line'] {
    display: block;
    position: absolute;
    top: 2.3125em;
    width: 2.9375em;
    height: 0.3125em;
    border-radius: 0.125em;
    background-color: #f27474;
}
.swal2-icon.swal2-error [class^='swal2-x-mark-line'][class$='left'] {
    left: 1.0625em;
    transform: rotate(45deg);
}
.swal2-icon.swal2-error [class^='swal2-x-mark-line'][class$='right'] {
    right: 1em;
    transform: rotate(-45deg);
}
.swal2-icon.swal2-error.swal2-icon-show {
    -webkit-animation: swal2-animate-error-icon 0.5s;
    animation: swal2-animate-error-icon 0.5s;
}
.swal2-icon.swal2-error.swal2-icon-show .swal2-x-mark {
    -webkit-animation: swal2-animate-error-x-mark 0.5s;
    animation: swal2-animate-error-x-mark 0.5s;
}
.swal2-icon.swal2-warning {
    border-color: #facea8;
    color: #f8bb86;
}
.swal2-icon.swal2-warning.swal2-icon-show {
    -webkit-animation: swal2-animate-error-icon 0.5s;
    animation: swal2-animate-error-icon 0.5s;
}
.swal2-icon.swal2-warning.swal2-icon-show .swal2-icon-content {
    -webkit-animation: swal2-animate-i-mark 0.5s;
    animation: swal2-animate-i-mark 0.5s;
}
.swal2-icon.swal2-info {
    border-color: #9de0f6;
    color: #3fc3ee;
}
.swal2-icon.swal2-info.swal2-icon-show {
    -webkit-animation: swal2-animate-error-icon 0.5s;
    animation: swal2-animate-error-icon 0.5s;
}
.swal2-icon.swal2-info.swal2-icon-show .swal2-icon-content {
    -webkit-animation: swal2-animate-i-mark 0.8s;
    animation: swal2-animate-i-mark 0.8s;
}
.swal2-icon.swal2-question {
    border-color: #c9dae1;
    color: #87adbd;
}
.swal2-icon.swal2-question.swal2-icon-show {
    -webkit-animation: swal2-animate-error-icon 0.5s;
    animation: swal2-animate-error-icon 0.5s;
}
.swal2-icon.swal2-question.swal2-icon-show .swal2-icon-content {
    -webkit-animation: swal2-animate-question-mark 0.8s;
    animation: swal2-animate-question-mark 0.8s;
}
.swal2-icon.swal2-success {
    border-color: #a5dc86;
    color: #a5dc86;
}
.swal2-icon.swal2-success [class^='swal2-success-circular-line'] {
    position: absolute;
    width: 3.75em;
    height: 7.5em;
    transform: rotate(45deg);
    border-radius: 50%;
}
.swal2-icon.swal2-success [class^='swal2-success-circular-line'][class$='left'] {
    top: -0.4375em;
    left: -2.0635em;
    transform: rotate(-45deg);
    transform-origin: 3.75em 3.75em;
    border-radius: 7.5em 0 0 7.5em;
}
.swal2-icon.swal2-success [class^='swal2-success-circular-line'][class$='right'] {
    top: -0.6875em;
    left: 1.875em;
    transform: rotate(-45deg);
    transform-origin: 0 3.75em;
    border-radius: 0 7.5em 7.5em 0;
}
.swal2-icon.swal2-success .swal2-success-ring {
    position: absolute;
    z-index: 2;
    top: -0.25em;
    left: -0.25em;
    box-sizing: content-box;
    width: 100%;
    height: 100%;
    border: 0.25em solid rgba(165, 220, 134, 0.3);
    border-radius: 50%;
}
.swal2-icon.swal2-success .swal2-success-fix {
    position: absolute;
    z-index: 1;
    top: 0.5em;
    left: 1.625em;
    width: 0.4375em;
    height: 5.625em;
    transform: rotate(-45deg);
}
.swal2-icon.swal2-success [class^='swal2-success-line'] {
    display: block;
    position: absolute;
    z-index: 2;
    height: 0.3125em;
    border-radius: 0.125em;
    background-color: #a5dc86;
}
.swal2-icon.swal2-success [class^='swal2-success-line'][class$='tip'] {
    top: 2.875em;
    left: 0.8125em;
    width: 1.5625em;
    transform: rotate(45deg);
}
.swal2-icon.swal2-success [class^='swal2-success-line'][class$='long'] {
    top: 2.375em;
    right: 0.5em;
    width: 2.9375em;
    transform: rotate(-45deg);
}
.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-tip {
    -webkit-animation: swal2-animate-success-line-tip 0.75s;
    animation: swal2-animate-success-line-tip 0.75s;
}
.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-long {
    -webkit-animation: swal2-animate-success-line-long 0.75s;
    animation: swal2-animate-success-line-long 0.75s;
}
.swal2-icon.swal2-success.swal2-icon-show .swal2-success-circular-line-right {
    -webkit-animation: swal2-rotate-success-circular-line 4.25s ease-in;
    animation: swal2-rotate-success-circular-line 4.25s ease-in;
}
.swal2-progress-steps {
    flex-wrap: wrap;
    align-items: center;
    max-width: 100%;
    margin: 1.25em auto;
    padding: 0;
    background: 0 0;
    font-weight: 600;
}
.swal2-progress-steps li {
    display: inline-block;
    position: relative;
}
.swal2-progress-steps .swal2-progress-step {
    z-index: 20;
    flex-shrink: 0;
    width: 2em;
    height: 2em;
    border-radius: 2em;
    background: #2778c4;
    color: #fff;
    line-height: 2em;
    text-align: center;
}
.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step {
    background: #2778c4;
}
.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step ~ .swal2-progress-step {
    background: #add8e6;
    color: #fff;
}
.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step ~ .swal2-progress-step-line {
    background: #add8e6;
}
.swal2-progress-steps .swal2-progress-step-line {
    z-index: 10;
    flex-shrink: 0;
    width: 2.5em;
    height: 0.4em;
    margin: 0 -1px;
    background: #2778c4;
}
[class^='swal2'] {
    -webkit-tap-highlight-color: transparent;
}
.swal2-show {
    -webkit-animation: swal2-show 0.3s;
    animation: swal2-show 0.3s;
}
.swal2-hide {
    -webkit-animation: swal2-hide 0.15s forwards;
    animation: swal2-hide 0.15s forwards;
}
.swal2-noanimation {
    transition: none;
}
.swal2-scrollbar-measure {
    position: absolute;
    top: -9999px;
    width: 50px;
    height: 50px;
    overflow: scroll;
}
.swal2-rtl .swal2-close {
    margin-right: initial;
    margin-left: 0;
}
.swal2-rtl .swal2-timer-progress-bar {
    right: 0;
    left: auto;
}
.swal2-no-war {
    display: flex;
    position: fixed;
    z-index: 1061;
    top: 0;
    left: 0;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 3.375em;
    background: #20232a;
    color: #fff;
    text-align: center;
}
.swal2-no-war a {
    color: #61dafb;
    text-decoration: none;
}
.swal2-no-war a:hover {
    text-decoration: underline;
}
@-webkit-keyframes swal2-toast-show {
    0% {
        transform: translateY(-0.625em) rotateZ(2deg);
    }
    33% {
        transform: translateY(0) rotateZ(-2deg);
    }
    66% {
        transform: translateY(0.3125em) rotateZ(2deg);
    }
    100% {
        transform: translateY(0) rotateZ(0);
    }
}
@keyframes swal2-toast-show {
    0% {
        transform: translateY(-0.625em) rotateZ(2deg);
    }
    33% {
        transform: translateY(0) rotateZ(-2deg);
    }
    66% {
        transform: translateY(0.3125em) rotateZ(2deg);
    }
    100% {
        transform: translateY(0) rotateZ(0);
    }
}
@-webkit-keyframes swal2-toast-hide {
    100% {
        transform: rotateZ(1deg);
        opacity: 0;
    }
}
@keyframes swal2-toast-hide {
    100% {
        transform: rotateZ(1deg);
        opacity: 0;
    }
}
@-webkit-keyframes swal2-toast-animate-success-line-tip {
    0% {
        top: 0.5625em;
        left: 0.0625em;
        width: 0;
    }
    54% {
        top: 0.125em;
        left: 0.125em;
        width: 0;
    }
    70% {
        top: 0.625em;
        left: -0.25em;
        width: 1.625em;
    }
    84% {
        top: 1.0625em;
        left: 0.75em;
        width: 0.5em;
    }
    100% {
        top: 1.125em;
        left: 0.1875em;
        width: 0.75em;
    }
}
@keyframes swal2-toast-animate-success-line-tip {
    0% {
        top: 0.5625em;
        left: 0.0625em;
        width: 0;
    }
    54% {
        top: 0.125em;
        left: 0.125em;
        width: 0;
    }
    70% {
        top: 0.625em;
        left: -0.25em;
        width: 1.625em;
    }
    84% {
        top: 1.0625em;
        left: 0.75em;
        width: 0.5em;
    }
    100% {
        top: 1.125em;
        left: 0.1875em;
        width: 0.75em;
    }
}
@-webkit-keyframes swal2-toast-animate-success-line-long {
    0% {
        top: 1.625em;
        right: 1.375em;
        width: 0;
    }
    65% {
        top: 1.25em;
        right: 0.9375em;
        width: 0;
    }
    84% {
        top: 0.9375em;
        right: 0;
        width: 1.125em;
    }
    100% {
        top: 0.9375em;
        right: 0.1875em;
        width: 1.375em;
    }
}
@keyframes swal2-toast-animate-success-line-long {
    0% {
        top: 1.625em;
        right: 1.375em;
        width: 0;
    }
    65% {
        top: 1.25em;
        right: 0.9375em;
        width: 0;
    }
    84% {
        top: 0.9375em;
        right: 0;
        width: 1.125em;
    }
    100% {
        top: 0.9375em;
        right: 0.1875em;
        width: 1.375em;
    }
}
@-webkit-keyframes swal2-show {
    0% {
        transform: scale(0.7);
    }
    45% {
        transform: scale(1.05);
    }
    80% {
        transform: scale(0.95);
    }
    100% {
        transform: scale(1);
    }
}
@keyframes swal2-show {
    0% {
        transform: scale(0.7);
    }
    45% {
        transform: scale(1.05);
    }
    80% {
        transform: scale(0.95);
    }
    100% {
        transform: scale(1);
    }
}
@-webkit-keyframes swal2-hide {
    0% {
        transform: scale(1);
        opacity: 1;
    }
    100% {
        transform: scale(0.5);
        opacity: 0;
    }
}
@keyframes swal2-hide {
    0% {
        transform: scale(1);
        opacity: 1;
    }
    100% {
        transform: scale(0.5);
        opacity: 0;
    }
}
@-webkit-keyframes swal2-animate-success-line-tip {
    0% {
        top: 1.1875em;
        left: 0.0625em;
        width: 0;
    }
    54% {
        top: 1.0625em;
        left: 0.125em;
        width: 0;
    }
    70% {
        top: 2.1875em;
        left: -0.375em;
        width: 3.125em;
    }
    84% {
        top: 3em;
        left: 1.3125em;
        width: 1.0625em;
    }
    100% {
        top: 2.8125em;
        left: 0.8125em;
        width: 1.5625em;
    }
}
@keyframes swal2-animate-success-line-tip {
    0% {
        top: 1.1875em;
        left: 0.0625em;
        width: 0;
    }
    54% {
        top: 1.0625em;
        left: 0.125em;
        width: 0;
    }
    70% {
        top: 2.1875em;
        left: -0.375em;
        width: 3.125em;
    }
    84% {
        top: 3em;
        left: 1.3125em;
        width: 1.0625em;
    }
    100% {
        top: 2.8125em;
        left: 0.8125em;
        width: 1.5625em;
    }
}
@-webkit-keyframes swal2-animate-success-line-long {
    0% {
        top: 3.375em;
        right: 2.875em;
        width: 0;
    }
    65% {
        top: 3.375em;
        right: 2.875em;
        width: 0;
    }
    84% {
        top: 2.1875em;
        right: 0;
        width: 3.4375em;
    }
    100% {
        top: 2.375em;
        right: 0.5em;
        width: 2.9375em;
    }
}
@keyframes swal2-animate-success-line-long {
    0% {
        top: 3.375em;
        right: 2.875em;
        width: 0;
    }
    65% {
        top: 3.375em;
        right: 2.875em;
        width: 0;
    }
    84% {
        top: 2.1875em;
        right: 0;
        width: 3.4375em;
    }
    100% {
        top: 2.375em;
        right: 0.5em;
        width: 2.9375em;
    }
}
@-webkit-keyframes swal2-rotate-success-circular-line {
    0% {
        transform: rotate(-45deg);
    }
    5% {
        transform: rotate(-45deg);
    }
    12% {
        transform: rotate(-405deg);
    }
    100% {
        transform: rotate(-405deg);
    }
}
@keyframes swal2-rotate-success-circular-line {
    0% {
        transform: rotate(-45deg);
    }
    5% {
        transform: rotate(-45deg);
    }
    12% {
        transform: rotate(-405deg);
    }
    100% {
        transform: rotate(-405deg);
    }
}
@-webkit-keyframes swal2-animate-error-x-mark {
    0% {
        margin-top: 1.625em;
        transform: scale(0.4);
        opacity: 0;
    }
    50% {
        margin-top: 1.625em;
        transform: scale(0.4);
        opacity: 0;
    }
    80% {
        margin-top: -0.375em;
        transform: scale(1.15);
    }
    100% {
        margin-top: 0;
        transform: scale(1);
        opacity: 1;
    }
}
@keyframes swal2-animate-error-x-mark {
    0% {
        margin-top: 1.625em;
        transform: scale(0.4);
        opacity: 0;
    }
    50% {
        margin-top: 1.625em;
        transform: scale(0.4);
        opacity: 0;
    }
    80% {
        margin-top: -0.375em;
        transform: scale(1.15);
    }
    100% {
        margin-top: 0;
        transform: scale(1);
        opacity: 1;
    }
}
@-webkit-keyframes swal2-animate-error-icon {
    0% {
        transform: rotateX(100deg);
        opacity: 0;
    }
    100% {
        transform: rotateX(0);
        opacity: 1;
    }
}
@keyframes swal2-animate-error-icon {
    0% {
        transform: rotateX(100deg);
        opacity: 0;
    }
    100% {
        transform: rotateX(0);
        opacity: 1;
    }
}
@-webkit-keyframes swal2-rotate-loading {
    0% {
        transform: rotate(0);
    }
    100% {
        transform: rotate(360deg);
    }
}
@keyframes swal2-rotate-loading {
    0% {
        transform: rotate(0);
    }
    100% {
        transform: rotate(360deg);
    }
}
@-webkit-keyframes swal2-animate-question-mark {
    0% {
        transform: rotateY(-360deg);
    }
    100% {
        transform: rotateY(0);
    }
}
@keyframes swal2-animate-question-mark {
    0% {
        transform: rotateY(-360deg);
    }
    100% {
        transform: rotateY(0);
    }
}
@-webkit-keyframes swal2-animate-i-mark {
    0% {
        transform: rotateZ(45deg);
        opacity: 0;
    }
    25% {
        transform: rotateZ(-25deg);
        opacity: 0.4;
    }
    50% {
        transform: rotateZ(15deg);
        opacity: 0.8;
    }
    75% {
        transform: rotateZ(-5deg);
        opacity: 1;
    }
    100% {
        transform: rotateX(0);
        opacity: 1;
    }
}
@keyframes swal2-animate-i-mark {
    0% {
        transform: rotateZ(45deg);
        opacity: 0;
    }
    25% {
        transform: rotateZ(-25deg);
        opacity: 0.4;
    }
    50% {
        transform: rotateZ(15deg);
        opacity: 0.8;
    }
    75% {
        transform: rotateZ(-5deg);
        opacity: 1;
    }
    100% {
        transform: rotateX(0);
        opacity: 1;
    }
}
body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) {
    overflow: hidden;
}
body.swal2-height-auto {
    height: auto !important;
}
body.swal2-no-backdrop .swal2-container {
    background-color: transparent !important;
    pointer-events: none;
}
body.swal2-no-backdrop .swal2-container .swal2-popup {
    pointer-events: all;
}
body.swal2-no-backdrop .swal2-container .swal2-modal {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
}
@media print {
    body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) {
        overflow-y: scroll !important;
    }
    body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) > [aria-hidden='true'] {
        display: none;
    }
    body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container {
        position: static !important;
    }
}
body.swal2-toast-shown .swal2-container {
    box-sizing: border-box;
    width: 360px;
    max-width: 100%;
    background-color: transparent;
    pointer-events: none;
}
body.swal2-toast-shown .swal2-container.swal2-top {
    top: 0;
    right: auto;
    bottom: auto;
    left: 50%;
    transform: translateX(-50%);
}
body.swal2-toast-shown .swal2-container.swal2-top-end,
body.swal2-toast-shown .swal2-container.swal2-top-right {
    top: 0;
    right: 0;
    bottom: auto;
    left: auto;
}
body.swal2-toast-shown .swal2-container.swal2-top-left,
body.swal2-toast-shown .swal2-container.swal2-top-start {
    top: 0;
    right: auto;
    bottom: auto;
    left: 0;
}
body.swal2-toast-shown .swal2-container.swal2-center-left,
body.swal2-toast-shown .swal2-container.swal2-center-start {
    top: 50%;
    right: auto;
    bottom: auto;
    left: 0;
    transform: translateY(-50%);
}
body.swal2-toast-shown .swal2-container.swal2-center {
    top: 50%;
    right: auto;
    bottom: auto;
    left: 50%;
    transform: translate(-50%, -50%);
}
body.swal2-toast-shown .swal2-container.swal2-center-end,
body.swal2-toast-shown .swal2-container.swal2-center-right {
    top: 50%;
    right: 0;
    bottom: auto;
    left: auto;
    transform: translateY(-50%);
}
body.swal2-toast-shown .swal2-container.swal2-bottom-left,
body.swal2-toast-shown .swal2-container.swal2-bottom-start {
    top: auto;
    right: auto;
    bottom: 0;
    left: 0;
}
body.swal2-toast-shown .swal2-container.swal2-bottom {
    top: auto;
    right: auto;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
}
body.swal2-toast-shown .swal2-container.swal2-bottom-end,
body.swal2-toast-shown .swal2-container.swal2-bottom-right {
    top: auto;
    right: 0;
    bottom: 0;
    left: auto;
}

`;// @license MIT
const externalScripts=['<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js" integrity="sha512-894YE6QWD5I59HgZOGReFYm4dnWc1Qt5NtvYSaNcOP+u1T9qYdvdihz0PPSiiqn/+/3e7Jo4EaG7TubfWGUrMQ==" crossorigin="anonymous" referrerpolicy="no-referrer"><\/script>','<script src="https://cdnjs.cloudflare.com/ajax/libs/jszip/3.9.1/jszip.min.js" integrity="sha512-amNoSoOK3jIKx6qlDrv36P4M/h7vc6CHwiBU3XG9/1LW0ZSNe8E3iZL1tPG/VnfCrVrZc2Zv47FIJ7fyDX4DMA==" crossorigin="anonymous" referrerpolicy="no-referrer"><\/script>','<script src="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.js" integrity="sha256-XWzSUJ+FIQ38dqC06/48sNRwU1Qh3/afjmJ080SneA8=" crossorigin="anonymous"><\/script>','<script src="https://cdnjs.cloudflare.com/ajax/libs/limonte-sweetalert2/11.4.10/sweetalert2.min.js" integrity="sha512-OgIASmUioEN3o3gYIAxYUeW4G5FWdhORLq0p7UhTM6Xrm5XGY4IrSDM3uYTCNh4ik4V8BX0NaX9/Z/VMqigCzg==" crossorigin="anonymous" referrerpolicy="no-referrer"><\/script>','<script src="https://cdnjs.cloudflare.com/ajax/libs/color-scheme/1.0.1/color-scheme.min.js" integrity="sha256-7IUC8vhyoPLh1tuQJnffPB5VO6HpR4VWK4Y1ciOOoBY=" crossorigin="anonymous"><\/script>','<script src="https://cdnjs.cloudflare.com/ajax/libs/unveil2/2.0.8/jquery.unveil2.min.js" integrity="sha256-B00tEEtJRbA9gas0viRdqVPI81EuZG+kYU978/alKt8=" crossorigin="anonymous"><\/script>','<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.imagesloaded/5.0.0/imagesloaded.pkgd.min.js" integrity="sha512-kfs3Dt9u9YcOiIt4rNcPUzdyNNO9sVGQPiZsub7ywg6lRW5KuK1m145ImrFHe3LMWXHndoKo2YRXWy8rnOcSKg==" crossorigin="anonymous" referrerpolicy="no-referrer"><\/script>'];externalScripts.map(e=>{const t=e.match(/src="(.+?)"/);return t?t[1]:""});const externalCSS=['<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" integrity="sha256-l85OmPOjvil/SOvVt3HnSSjzF1TUMyT9eV0c2BzEGzU=" crossorigin="anonymous" />','<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css" integrity="sha256-pMhcV6/TBDtqH9E9PWKgS+P32PVguLG8IipkPyqMtfY=" crossorigin="anonymous" />','<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@gerhobbelt/keyscss@1.1.3-6/keys.css" integrity="sha256-a/1ebfXeoX0xLUcQCJLQsm6APQNBwrm03/XFcvW7xAI=" crossorigin="anonymous">','<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/limonte-sweetalert2/11.4.10/sweetalert2.min.css" integrity="sha512-R9EM3xazxo9xyo8pz3IMTw7SIO1qKnG1Vs3yJnVApYhqDwemdSJJbcd5KROicK87kRiFksOhhtW/s2c4Mdjrwg==" crossorigin="anonymous" referrerpolicy="no-referrer" />'];externalCSS.map(e=>{const t=e.match(/href="(.+?)"/);return t?t[1]:""});const settings={configVersion:0,throttlePageLoad:0,widthScale:0,Theme:getValueGM("MangaTheme","Light"),CustomTheme:getValueGM("MangaCustomTheme","#3d0099"),CustomThemeBody:getValueGM("MangaCustomThemeBody","#000000"),CustomThemeText:getValueGM("MangaCustomThemeText","#ffffff"),CustomThemeLines:getValueGM("MangaCustomThemeLines","#666666"),CustomThemePanel:getValueGM("MangaCustomThemePanel","#333333"),CustomThemeButton:getValueGM("MangaCustomThemeButton","#282828"),FitWidthIfOversize:getValueGM("MangaFitWidthIfOversize",!0),ShowThumbnails:getValueGM("MangaShowThumbnails",!0),downloadZip:getValueGM("MangaDownloadZip",!1),Timer:getValueGM("MangaTimer",1e3),Zoom:getValueGM("MangaZoom",100),zoomStep:getValueGM("MangaZoomStep",25),loadMode:getValueGM("MangaLoadMode","wait"),viewMode:getValueGM("MangaViewMode",""),bookmarks:JSON.parse(getValueGM("MangaBookmarks","[]")),lazyLoadImages:getValueGM("MangaLazyLoadImages",!1),lazyStart:getValueGM("MangaLazyStart",50),hidePageControls:getValueGM("MangaHidePageControls",!1)};isMobile&&(settings.lazyLoadImages=!0,settings.lazyStart=parseInt(getValueGM("MangaLazyStart",5),10),settings.FitWidthIfOversize=!0,settings.ShowThumbnails=!1,settings.viewMode="");const bookmarkTimeLimit=1e3*60*60*24*30*12;settings.bookmarks=settings.bookmarks.filter(e=>Date.now()-e.date<bookmarkTimeLimit),setValueGM("MangaBookmarks",JSON.stringify(settings.bookmarks));const icon={enlarge:"data:image/png;base64,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",reduce:"data:image/png;base64,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%3D%3D",restore:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAKT2lDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjanVNnVFPpFj333vRCS4iAlEtvUhUIIFJCi4AUkSYqIQkQSoghodkVUcERRUUEG8igiAOOjoCMFVEsDIoK2AfkIaKOg6OIisr74Xuja9a89+bN/rXXPues852zzwfACAyWSDNRNYAMqUIeEeCDx8TG4eQuQIEKJHAAEAizZCFz/SMBAPh+PDwrIsAHvgABeNMLCADATZvAMByH/w/qQplcAYCEAcB0kThLCIAUAEB6jkKmAEBGAYCdmCZTAKAEAGDLY2LjAFAtAGAnf+bTAICd+Jl7AQBblCEVAaCRACATZYhEAGg7AKzPVopFAFgwABRmS8Q5ANgtADBJV2ZIALC3AMDOEAuyAAgMADBRiIUpAAR7AGDIIyN4AISZABRG8lc88SuuEOcqAAB4mbI8uSQ5RYFbCC1xB1dXLh4ozkkXKxQ2YQJhmkAuwnmZGTKBNA/g88wAAKCRFRHgg/P9eM4Ors7ONo62Dl8t6r8G/yJiYuP+5c+rcEAAAOF0ftH+LC+zGoA7BoBt/qIl7gRoXgugdfeLZrIPQLUAoOnaV/Nw+H48PEWhkLnZ2eXk5NhKxEJbYcpXff5nwl/AV/1s+X48/Pf14L7iJIEyXYFHBPjgwsz0TKUcz5IJhGLc5o9H/LcL//wd0yLESWK5WCoU41EScY5EmozzMqUiiUKSKcUl0v9k4t8s+wM+3zUAsGo+AXuRLahdYwP2SycQWHTA4vcAAPK7b8HUKAgDgGiD4c93/+8//UegJQCAZkmScQAAXkQkLlTKsz/HCAAARKCBKrBBG/TBGCzABhzBBdzBC/xgNoRCJMTCQhBCCmSAHHJgKayCQiiGzbAdKmAv1EAdNMBRaIaTcA4uwlW4Dj1wD/phCJ7BKLyBCQRByAgTYSHaiAFiilgjjggXmYX4IcFIBBKLJCDJiBRRIkuRNUgxUopUIFVIHfI9cgI5h1xGupE7yAAygvyGvEcxlIGyUT3UDLVDuag3GoRGogvQZHQxmo8WoJvQcrQaPYw2oefQq2gP2o8+Q8cwwOgYBzPEbDAuxsNCsTgsCZNjy7EirAyrxhqwVqwDu4n1Y8+xdwQSgUXACTYEd0IgYR5BSFhMWE7YSKggHCQ0EdoJNwkDhFHCJyKTqEu0JroR+cQYYjIxh1hILCPWEo8TLxB7iEPENyQSiUMyJ7mQAkmxpFTSEtJG0m5SI+ksqZs0SBojk8naZGuyBzmULCAryIXkneTD5DPkG+Qh8lsKnWJAcaT4U+IoUspqShnlEOU05QZlmDJBVaOaUt2ooVQRNY9aQq2htlKvUYeoEzR1mjnNgxZJS6WtopXTGmgXaPdpr+h0uhHdlR5Ol9BX0svpR+iX6AP0dwwNhhWDx4hnKBmbGAcYZxl3GK+YTKYZ04sZx1QwNzHrmOeZD5lvVVgqtip8FZHKCpVKlSaVGyovVKmqpqreqgtV81XLVI+pXlN9rkZVM1PjqQnUlqtVqp1Q61MbU2epO6iHqmeob1Q/pH5Z/YkGWcNMw09DpFGgsV/jvMYgC2MZs3gsIWsNq4Z1gTXEJrHN2Xx2KruY/R27iz2qqaE5QzNKM1ezUvOUZj8H45hx+Jx0TgnnKKeX836K3hTvKeIpG6Y0TLkxZVxrqpaXllirSKtRq0frvTau7aedpr1Fu1n7gQ5Bx0onXCdHZ4/OBZ3nU9lT3acKpxZNPTr1ri6qa6UbobtEd79up+6Ynr5egJ5Mb6feeb3n+hx9L/1U/W36p/VHDFgGswwkBtsMzhg8xTVxbzwdL8fb8VFDXcNAQ6VhlWGX4YSRudE8o9VGjUYPjGnGXOMk423GbcajJgYmISZLTepN7ppSTbmmKaY7TDtMx83MzaLN1pk1mz0x1zLnm+eb15vft2BaeFostqi2uGVJsuRaplnutrxuhVo5WaVYVVpds0atna0l1rutu6cRp7lOk06rntZnw7Dxtsm2qbcZsOXYBtuutm22fWFnYhdnt8Wuw+6TvZN9un2N/T0HDYfZDqsdWh1+c7RyFDpWOt6azpzuP33F9JbpL2dYzxDP2DPjthPLKcRpnVOb00dnF2e5c4PziIuJS4LLLpc+Lpsbxt3IveRKdPVxXeF60vWdm7Obwu2o26/uNu5p7ofcn8w0nymeWTNz0MPIQ+BR5dE/C5+VMGvfrH5PQ0+BZ7XnIy9jL5FXrdewt6V3qvdh7xc+9j5yn+M+4zw33jLeWV/MN8C3yLfLT8Nvnl+F30N/I/9k/3r/0QCngCUBZwOJgUGBWwL7+Hp8Ib+OPzrbZfay2e1BjKC5QRVBj4KtguXBrSFoyOyQrSH355jOkc5pDoVQfujW0Adh5mGLw34MJ4WHhVeGP45wiFga0TGXNXfR3ENz30T6RJZE3ptnMU85ry1KNSo+qi5qPNo3ujS6P8YuZlnM1VidWElsSxw5LiquNm5svt/87fOH4p3iC+N7F5gvyF1weaHOwvSFpxapLhIsOpZATIhOOJTwQRAqqBaMJfITdyWOCnnCHcJnIi/RNtGI2ENcKh5O8kgqTXqS7JG8NXkkxTOlLOW5hCepkLxMDUzdmzqeFpp2IG0yPTq9MYOSkZBxQqohTZO2Z+pn5mZ2y6xlhbL+xW6Lty8elQfJa7OQrAVZLQq2QqboVFoo1yoHsmdlV2a/zYnKOZarnivN7cyzytuQN5zvn//tEsIS4ZK2pYZLVy0dWOa9rGo5sjxxedsK4xUFK4ZWBqw8uIq2Km3VT6vtV5eufr0mek1rgV7ByoLBtQFr6wtVCuWFfevc1+1dT1gvWd+1YfqGnRs+FYmKrhTbF5cVf9go3HjlG4dvyr+Z3JS0qavEuWTPZtJm6ebeLZ5bDpaql+aXDm4N2dq0Dd9WtO319kXbL5fNKNu7g7ZDuaO/PLi8ZafJzs07P1SkVPRU+lQ27tLdtWHX+G7R7ht7vPY07NXbW7z3/T7JvttVAVVN1WbVZftJ+7P3P66Jqun4lvttXa1ObXHtxwPSA/0HIw6217nU1R3SPVRSj9Yr60cOxx++/p3vdy0NNg1VjZzG4iNwRHnk6fcJ3/ceDTradox7rOEH0x92HWcdL2pCmvKaRptTmvtbYlu6T8w+0dbq3nr8R9sfD5w0PFl5SvNUyWna6YLTk2fyz4ydlZ19fi753GDborZ752PO32oPb++6EHTh0kX/i+c7vDvOXPK4dPKy2+UTV7hXmq86X23qdOo8/pPTT8e7nLuarrlca7nuer21e2b36RueN87d9L158Rb/1tWeOT3dvfN6b/fF9/XfFt1+cif9zsu72Xcn7q28T7xf9EDtQdlD3YfVP1v+3Njv3H9qwHeg89HcR/cGhYPP/pH1jw9DBY+Zj8uGDYbrnjg+OTniP3L96fynQ89kzyaeF/6i/suuFxYvfvjV69fO0ZjRoZfyl5O/bXyl/erA6xmv28bCxh6+yXgzMV70VvvtwXfcdx3vo98PT+R8IH8o/2j5sfVT0Kf7kxmTk/8EA5jz/GMzLdsAAAAgY0hSTQAAeiUAAICDAAD5/wAAgOkAAHUwAADqYAAAOpgAABdvkl/FRgAABVZJREFUeNrUl11Mk1ccxn9vS5HWtrBGEJAILNsczq8C2xxDJwkm+7hYDBdkZheyGGgyy42b2+LNErxZvNmGJlUztywzmmzRZWFxtiHgJgPLh4ob2xQtOAuKUD5s18+3/10IqAMVULbsSZ6c9z0X7/m9//OcnHMUEeG/lPK/ALDZbAXjj90Oh2N03gFsNlsiUAlsBl7IysoCYHBwkFAodAX4BtjtcDiuPXIAm832HHBo3bp1T+Tn55OdnU0gECAWi2E0GvH5fLS1teFyuYLADofDseeRAdhstteArzdv3qxfsmQJ9fX19PT0EAyFMZtNJGi1JCcns3HjRgCam5txu917HA6H/aEBqqqqRFEUKisrGRoa4tixY7z+5lZ+Ov4tiTodhYUFZGZmYlmURr3rBBaLhbVr11JXV4fb7Z7RYPv27VOmdIoIIkJVVZW4XC5paGiQA59/KdGYKtMpHhcJRWJy7Lvv5fDhw9LZ2SnV1dUyPDws91NlZaVMjHWnE8ZL/0JOTg5r1qyhpqaGLdt2UNfqo2RlCka9lusjUTou3QQgGhMEiFsK+fH4h+Tl5VFUVMTHn31LzuqXp/3zLaXp96yKZrwtt1qttLS0ULS+hN6hBShAyx9j/OxpoKV/PxHDESKGI8QFENAoGl7dVI7b7WbFihUMe3+bUwYmAAqysrK4cOECTzy1jImJ0ps7GAz/xkh4gJHwIEPB67R5tzMR22DS03g8HsxmM1qiRMOBOQOkm0wmRkZGeMxiAcCy6CxD4d/xBfuIhhMIBzVEQoLRZKK97x0ESEzUMjo6ioiwcOFCoiH/rAESxltVVVW0Wi2xWAzQMl5piJlRJcyoegM1HkJEh0bR3lpCKGi1WuLxOKqqomi0cwa44vP5lqWnp3Otz4vRuByAQHQMEYWAOoxG0RAJJqIB4nEVs1HPgriPtLQ0RAS/38/itHS0usQ5TUFzb28vBQUFtJ5uxmRYwFDkAqpEiEsUFCHsj4HAzbGbCILJoOPSL03k5eUxMDCAwbQIy2Mmko0LpngmAF84nU5yc3OJhUP8+auTJ01voQD+uA8FUICAPwjAG8/vZ+DSz1zs6mTVqlWcO3eOZ/LXkqyPT+sHAjgcDg+A0+mkvLyctuZTnG2qo2jx++jOJ2C66GdRf4iMQQtbivfT0fwDjSe+Y9OmTXR1ddF9uZfi/CcJeNvR65jimWQAEaG7uxudTse2bduor6/nqwO7WbG6BIPJTEyFkZsBDn/+CanmJLZu3UpfXx9Op5O9e/fi8Xhu7Zg97Sxd9uysQwiA3W5nZ812gsEgpaWlrBoYoKuri6vXrwKQlJTEyyUvkpGRQXt7O/UNLt579wM8Hg+5ubl4vV6qq6spKyvjesr5ye9++vaRmQGkpKSQXOqj/byLppomXlr/EtnZ2eh0OjQaDbFYjP7+fk6ePEnfX91kZT7OoUOH2LBhA16vl+LiYmpra7Hb7ZSVlfHXc62zqwCAkiAstI6hXxbA3fM9jR0KqBoQBRRBv1hIzAmRnBohiA/96UIaGxs5evQodrudioqK2xA8GCLhnuk0qBiW+zEsh/6eG5P9USAjNXXyPfh8G8ffuwJAbW0twBQINs4B4E5l5KTeBdHfc4OMnNsQr3y09L4Q99XEvjy+Xz+UrFbrpA8ePCgiIqdOnRKr1Sq7du2a9jxw14noUZxyW1tb71pVFRUVNDU1TQZz586dyrQVeJSeTSXmBWA2EPMGcC8IINlqtcqUDMyX8vPzJwc4c+ZMGnAcSAQKRSSime+7X0dHx52hawSWWK3WlSISmbcQ/tOAHrgMdN5Z/n9lCh6kvwcA86Zk7edk5TEAAAAASUVORK5CYII%3D",fitWidth:"data:image/png;base64,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",fitHeight:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAEV0lEQVR42sWWXWgcVRTHz8zsZj8jWkGw4oNWgghNH6wPLYpJ1hYfFKko+GbriqEiQq0+9MO2vohCqoIvfRAlgi/6oqKI1CbRWm01rUyirUuaZJPdlSSQTfdjZna+djxnNhNnd+98VFEvXObeGeb+f/d/z733cPA/F87dSafTqVgstgnrvyKmaRqYplleW1uTmABYtjZUdUpTVfzCtT52Phlt1kDub06JCALE4/F+hJj2AuivVqtiXZLwX45ZW+O22jMrAH23tEN2Dey8sywgZ1Op1DYEmPIGqNVESZJtAZ5fF3Zm7YJYqnLw1jcWjDzBt4l3CbtKT08PpJJJf4BavS7Ksuw7c+p99BPASQT45ajAXCLW4NFoFJJBAHUCUJRu+90uYFMsAbx/zoLXHhVgU9ojPhgAiUQiAECSRMUDwHbC1X/njAUHHuLZgdrRtygIIxFIxOP+ABIBNBqhAE6dtWD/g8LGIJw7CBkxILR2QQCALIsNH4ANCOyPnrdg707hLzgfcQcAd4I/gEwAeA74ATgQH09a8NR9fJuolzgVnudDACiKqIYAoPr5lAWPbeO7hL0gCAC3oj+AQgB4ZAaJUz19xYLd9/CBwtcH0GiIGssBxrlwbg7g/i1cl7AXCL0PBMAAtB3gfcQnJiY2fpifn4dsNhvKgdAAmq63jmIPgPHxcRgcHLTbY2NjkMlkQjuAh1EAgKqKOsUArhcLggoBDAwM2GtK7aGhIU/hzneBACoBrDvgVBJyBqNKtufzeSisWXD7TVxoB8IDGIan/W6RsVwTMncLoYSvC8BAAFsQZ867hDufX06b8Eh/hCnebDYxBbDsNj2dwysedBDhDrABeI/Zu5+fTBrw5PZImzgJU6UxUGgDhJaREyJw4w29/gDaOoDjQNsd0AHw4Y86PL2zp02c4odyP7pPFKVhty2rCQLehOVqfXXH9nt3mKYxEwjAr+8CzmcJTn2rw/6BnjZxusorlSpg4gm1Wg3oXomieCyRkLPP7NtbLBQ+xZxD9wUg64Lsp/L2aQ1e2h2zLSZoyqTK5TIsFgo2QCqZgs2bb8VbkDeHh4efv3z5ygerq6u6W/BvA+gmwMjXKrzycBx4MG3Lr12rQOmPEhQQ4PE9exBKp7Z18OWDRy5OXhopFot6h54/QOf+d0O8950G757R4PtDaUhEDMBEBpaWlmFhcRFMdGPXrowNcvzE8TcunL9w7OrV2S5xXwAnBrwAzs6Y8PoXKnx1IGkHGqbzKFiE/MICbLnzDujtTVso/ubkzxeP5XI5pjgbQNdFsyMIWetv4BKM/qBD9oEoUP5A9i+g+NLyMvT13WUePnzo6K/Tv52cnZ31FP9HAPQ0mphmcZYNUKlUbPslpaGcePXIi3Nz86OlUslXnAWwlQ4J2lJeGU7niUc7QNUNqNUlmP49V37h2X3PraysfIa7wQgS7wLAWd+M4reF+ZE5GMfJiWQyL0tSKHGWA/95+RN8q4s/S0hajQAAAABJRU5ErkJggg==",reload:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAC70lEQVR4XrXQa0xTdxgG8Pd/es6x2JbL2iINtCQdAkvAuOAwBMKMfiBZJGWMYQIx68plwwEbUfACeIlGyJbQVYMxsjGGZkHDIFZHIBurboOQESgLldaISMu6cmprSi/0cnp6TL8IiSb9tN+H5+OTJw/8r/rHVgCgAr7qmZKoLown7y3rgiMnf4aY2q/roeP6Aio/9RtZc/F33kedMw0lx3WnDzcP88pbhmE7DLb5dcYKc4+cmG2DfXva5D5qecFe0JuD3Wa7T+XYxOp8RNIhQZIfK+8Yeb1gdMEFhDgR1xoDBxxhUuOkUY+XxVq9GPnFBmLzvDhK93B31lu58sxnkAOl6gmIwqNx1eCDD3P2waUHf+Q7gsEOGoWkDArq6YjfhyfFZ0X4vEyaA5gHMfsZv/f9t+z9T6hwLvNqgWnZAicmx/mrNluR3W7+208ZVLRtXpnEed6YmCn6E0Q7vGGOf3bTtXbNaTZO25aMEceKCV4p674Dn3yvEyi6bhfkHW0XjrIsFKon4NPhxYT83qmz0vPa07tqr7ybuL8qLq1uEF4jEUuh9KQaiqubUXF1E6hnLaCZ+5dT1TsWv+ezb8QJB1VkG8tCTDcWKfjBQOHKSUpeol1TFfb99fGe1qtEkfoefD4wB19PPI1v/k4nrzg3QNRotFsnqkaWgAcvsIePPRlOGi9x0JjCFwplRdxhdXZKKpEpyyVJMk5KebwKT4ixUVbTEAMZsHWi1Q5GysE1WV21z9b8lxxr3kN+q18IG/wD/3l3n11YYTSrtsCPLqe7aNNpX/yyryvkWP4HolA0pGf6gSWmMCxYUYloUTfQWDoKM4AAsRiLIlwcC6UIgrNCZLnsNmoncZ4ofP+mZqsgStY0CCzji8ciu08hmtfIBNZXI3TQirGEm2AC8wJ2/Zc485AxCHxGP6+DN5LV3gJZ3VB2uuruT2mV3yoTi6tTxIX1wuR3PiDeazMACTFIlC2QWnOOk1rVWSApOyaXKBoglpfB+En628ogAgAAAABJRU5ErkJggg%3D%3D",zoomIn:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACoUlEQVQ4jZXQu2tTYRjH8e9535OTmDQxaZuYU6NNi9a7CaiQSczmWBGKm0WHLkL9DxTETSkF0YqD1kEUvCJI6yBxUiTVqPUKLa1JJfZiehLTkzQ3h1htQBB/08sLz+e5KKzKmXMXgk1O16lyuRJ0N7cemJv9lpifn0/ksrnhK4NnY/wlcuUxcPn6gKPJeVNv2xhuD24OtrT4aXK1+NfYHeHFbLa3o2uXe/zls9G/AucvXRtwujwnd+/ey7auLvR1PrwtHvR1Xta3BViqOjCM75HOLduD7149f9AAXBy+Ha5Uqtf27Y3Q2R7AqqlIqSAVBVUKbFYNn7eV5HdBcWku3NG14+mHxIupFUDMpJL9fn0D7YH1lCoK+QKUynD07CRCAaFAs8vKntBOmv2bsdrs/asnEJUq4TZdR5UKDiustYMUUDRzmMtQAwTgb3bh14NYNK17NaDmzULYscaGFPXCI6cnKZo5CmaOQ/0jFMwsDy/1oKoKrR4XFovWcEQ19yM/ZWSNoCo3IBW4faYTgP3HRnhy5SDVGmTy9VVUKbBqlgZAmEtLicmpaaSoISWovyYpmFmEAEX582eaBppFJhqAUml5MP7qNV/Ts6gSpKx3G7vVg1CgWoVSBbI/8mTmviAUBhuAu8MXYkZm4f6Ne4+YXcjULy9AAWo1MJdhYdHg8cgdPr2Nk/oYb5hAAmzaFho1DGPr64+TW/PFMlbNSiZXYN4wmfgyw/j4Sz6/f4PHViWdTh+JRqOj8Xg8DfVGv9Nz/GSv2+3pd3s84SanE01KqrVKorxcHNzZ4SOdTl+NxWIUi8VFXdejQ0NDiQbgX+nr6+sNhUK/EbvdHpX/LvuTsbGxRCAQmI5EIt2pVMqWTCYP/xewgvh8vmmv19s9MTFx4ifGBwN4Ure0EAAAAABJRU5ErkJggg%3D%3D",zoomOut:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAClElEQVQ4jZWQTUsbURiFz9w7mYmOSfNhYkZjjVJTba0J1EKW8R8IBXEpdOGmoP+gBemuRQJSCV1Uuyhd2C8KhXSVrlqK0bGkrS4MamJNNRonMZmJSSZdxFgHBOmBy3u5cJ733MPgnKYfz3paTOYHlUrVY7G1Bvf3/kiZTEbK5/ILz0KPorhAtHGZCb+YEVpMr8T2q/4uT6/HbnehxWx3NTUJ/qNcbrzbe8sSX/4SuRDwZG5+xmS2Tg0ODqHf64XY5oTDboXY5kBHuxtFTYAsHwZ6rt/w/Fj5+l4HeLqw6K9Wtfk7QwH0dLnBcywoZUAZBiwlMPIcnI5WJA8JSsV9f7f35udf0rfNBoDspJKTLrETXe4OlKsMCipQrgAMA5DTYzPzuO0bgM3VC97YPHk+Aalq8LeLIljKQOCBK80AJUChBCgnQA0AAeCymeESPTBw3Mh5AFtQVL/QZAQldePYwwRKSh6qkkdJOYaq5PBhbhQsy6DVaobBwOlKZPPHhU05J3tY2gnKAIvTPQAArQZoWn1mC/WvsJSA5ww6AFGKRSmxuQVKaqAUYE+TUAYgpN5F401RZHAGKukA5fJJaGllFb/Te2ApQOlpeaQ+NQ0oV4HccQHZ/W0QBiEd4M3CbFTOHrx7+fYj9g6yZ2YGQK1WL/LgSManyGusx5eQWlvSJaAAcK3fF5FluW91LdFXKFXAczyyeRUZWUFiewfx+DLWf36Hjdewu7s7FgwGI7FYLA3UF51p9N7UuMVinbRYrX6TyQQDpdBqValyUgoNdDuRTqefR6NRqKp6JIricDgclnSAyzQxMTHu8/nOIIIgDNPLbf8Ui8Ukt9u9FQgERlKplDGZTN79L0AD4nQ6txwOx8jGxsb9vyYg/nmG24G2AAAAAElFTkSuQmCC",zoomRestore:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACsUlEQVR4Xp2SW0iTYRjH/5/fYdtnTc0jrhPW0Dwt7HC3mZBeKF1pbVoO26V3RkK3URcqiLBADRxEXZR2o9LuDAaKeSHOw1ZuRdBhTs3cNL9tbt/29m6gqASBP/jB8168fx6e50FHR0eb1Wp9PjAwMJS0v79/aHBw0NbV1fWiurr6Av5Hc3PzbXKAQCBAnE4nsdvtpLe3N2Qyme7W19fnVVVV8fgXra2t9wglFouR5eVl4nA4SDAYJHvE4/HE1OSkq6WlxczzfAaOkMayrAKUiYn3cLncMBgM8K1vYnbxIz55v2B6doEprdSV9XR399TV1d0CIBwKoChBYdk01NbehNv7FcHtPziVnQ3CKxCJxjDhmMYJdVa+xdL2QBTFs4cCqFw4HIbX+xlqtRo//GvIzc9HFDx2EgK2IMLj/42ZuXkY9IZiGlB8NECIRqNITxeRhBMU8EsEHzeicK2F8TPEYEVi8GP1F3Jy80SO43IAMHsBXLImhCCwGQAt8G1lHf7vEviTWal3PCFDIXA4f7oQ66v+CB327qEOGAYQBAEZGWr4fD6Ua89BlgKAHIHA0/DwDs5nqXCl4hLG39lXJGnHA4DsdwBCwPMcWI7H6OgYzGYz0pUiphY+YXMjhJIzBbhxVY/ZmQ/o6+uTI5HdNBzEct/SGYmEydLiIrHZbOSZ1ZqqSVwmSf5sBcn42Bi5dv06KSoqInTtSwAq9odIQCDLMra2t6DRFILlWLwZHsaDh53JM8fjJ0/hnJ+HrrICoVAoodfrywG8pl7e2wKbHIRWq4VOp0NDQwNMRiOampqojTAa76Rsb2+HJElzHo8HNTU1ZSqV6hWAEoZenkmrvfhIqVTy2IMACUJSBcMwKelneWTk7UvaRalGo7FkZmbC7XY34hiUUa1UG7Ucx0BBzaMWUMW/uh49keTZSXYAAAAASUVORK5CYII%3D",zoomWidth:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACyUlEQVR4XqWSX0hTbRjAn/ecdSbbNJdFK/p3tTAvXI4IwrwJ6vtEqK819abIG1GCYRcFs+FNXdS+z82tP1ARpX7VVUVoYgWl07oItH8KUcHUxf7Y5v667exse3rfEUsxr/rBw3k453l/D895XmI2m3dJkqQGilwuj25YX2FGgFpCuApEhGw2G+QITCdT6QZRFJEQAkvhKisrr1RVVY3Q53OFQjGcTqebjxmObjMYDMqmxkal8djR7YhYX6pSuZhwBQ6HYw4RpcHBAan7v3/ziWQK/7Z7kJFIxPGv7jkMR6LodPRgj912x2KxQFdXVzHAbrfPIqW/rw8XQiFsuu7Djvte9M8H0fPNi6f/n8XDlz0YDC1gZ6f5lc1mY2eKIYOf8DyB9l4vfIqoYMaPYPiaBkYuD5AUJWi9HYfdcqG0rKwMlv6HoiBPC6+d2ARtdxOgKefhwpG1wCY+PxgDd0CCWy2bwWoVI5FIlDbjVgrWCAJEowtgN5bDuScZUClKCp2CyTjcbNkA8ej3rChmwjzJQy6HwCA0iiqtVgsvR8Ygk4rBxQYOovFFiC2mwGlUQSIWgkePB5J0zVU8yZUCEuConOeWCHQ6Hej1ehh1jUE4HCl0RzqX1+eD4eGnyPOykuPG+i0YfO+XcXgij2T5CIgI1dXVLIGhoaHiOyZSq9Ugzb/1ZKWdOw7otspdHyZu5Mr1OSq5y1Yxg4i5TCaDLBhut3tZeDwebG0/ZbW21Uw6THvj7+6dwauW5rSz2/qPDCk5Cr2yhXFoChqN5tdV5TjgeR54QhSX+idrLCf3BJ65RsnB/bXKkenJXiZghwrxG4o75whCKAHgmvi8sU6v9Y9PffGVKDUVMtpBTovWwOoUJIIglLD8ozsND1+/0Tg79o0LXH5AFggEHphMJgUASLAKAmVqauoFyxfFPLQdWgc1dYbaOuNZIGyEP+EHsrF5Hxph5xoAAAAASUVORK5CYII%3D",hide:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAbpJREFUeNrUk8FKAlEUhu9oqRQ2JCG0UBgNWijWQkFhiAqaXERLceE21+16A1+gRQshCFy5MGiTCROBguEqzGkVI0kgumihOKQw3f4zOL2Aqw58MHPv+f9zzr0zAuecLRIOtmAsbCAgrIf5KGtgHyggBHzzvC+ggxp4AiNbZxsIMDh1u91niqJs5XI5v6Zpq41Gw0WbsizPIpHIpFQqDWu12vt0Oi1Cd0d1aQQPOE8kEhf1el2uVCrbpmmuBwIB12RiMAIiF63RHuVQLmksrdPpTKPq42AwmBqGwQlVVTlFsXjNZfmAK8oJR1fc3qdc0pB2CS7ZZDLpQ/uu2WxmzVUoFFDZZJeXV9Z7OBxln59vzN6nXNKgUJYMblqt1vpoNNr2IChBkiSmqk2WSh1ZAo/HzZaXpT+DbwQ0H6R1OhyOfrfb/Wk2m2Y8Ht8QRdGLeZmmvbJQaIeJog/VNXZ4uGcZ67rez+fz9ziLW7oVAXPYV5FEA8fpdDqayWSivV5vs91ue6liLBYbB4PBfrlc7lSr1Q4aeMDyM52TbWB/FysgAnaBH3jn62MwBC9AA4b97Qj//19Y2OBXgAEA3HnRUkre/J0AAAAASUVORK5CYII%3D",settings:"data:image/png;base64,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%3D",menu:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABqUlEQVR4XqWTPWtUQRhGz/vO7HWDYNJaWyz5FSJEgoWlYCGInaClCGpI4geC1mJjIWshqGn9CGwQf4TmJo0/wRRK1Jt7H+eOO8VCsIgHHjjD8MDMy4ydfLD57cfvdqFphZjFAB3mBgM3jldhjxOr73RU5lM3Np0A+Fp/BjcMw62PeL7jXBm1AMlDdil5bayeX6TvRkRmvBsJbikD3CPQUIUDXuwGAConuwTBBYCAyJRLyyOCQYxw7ZHx5KZ4tbnDhaURABuTbS4uLSLBm+QFB8ty/bExDHD1ofH0hqAFU0voyHF1ZFcKohDL7Me3xeVUHt8STQvRyFcaOJni6j0YGUEElaPwckVIEAAPUAVjOCBTHCU3oxCLvp7UuDnBI+4BOGAYnY2tGoBjUxeiKi2AuTtv1fNrmi5l+T5qJT2b1PoppfT+Jft+9m319N0yRM7dNSrg7D3jw4oAMHU45Fin7AHww4a4tSbOrBsf10UHWHmyZDC37ALC7AxUPJcBvGwimHUsl6As/usv9N0413z/NL/2/nTTdnSigP3jO5oZg2D0XQNOAQscjb0/9SM6Il0maJIAAAAASUVORK5CYII%3D",webComic:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACvUlEQVR42rWXaW4aQRCFayDs4IDZ7Bi83CGHyPLDMDiRZYRygRwmV4hQkCWbYbO5RDhBZMkLJGGzwezrkOo2xIEwhA7tJz0hesT019XV1YUA09KeSFL3wO+Hq+sbEASBehWNRiPq3Z1tOI3F4J0o6nC4N3k++3YbAtwRgGwuByqVaqXJJ5JlGbwezwRgHYcqSgCuEylaOPCL8P1HHgFWW/0jwAi2XmwggIQAATcOFZUBogggilAoFlcO/0RkC9wuF5xKCBBYEqBUvuUK4HTY2QAq1SqXySeyWa1sALVanSvA2pqFDaDRbHIFMJtMbADtdpsrgMFgYAPodvv4dcRpegF0Os2SAJJUIIWIFA9MX07zC7SojQvRYoBoPF4Q9/c5rXxaUiIBAZ9vIYDzczicNpvNL2Wyep4RQDcajcyHUOgNjpSUANbQ22gHWs05AEN0GX2DrikBPEMb0bo5z1YVCWcX3UIPlADUyVTqU38w+Eiv0f+aQ6AvJUkn+nxTV+88zQKYo7FYHX+48nIH/T7EUyly7BZCzAI48BiWyDG8vLqmybPsPtBoYdT2dncgHIlA6OgIer0eJM7O4P0CCMU6kM3mHjoiBgCybV6vB74cH8PbV6/Ban2OBa0LyfNzRQjlhuRnnh4dFpGju7W5AREECJD7pN4Au32dRiKJkZi3HYqlOF9gb0gIwKbbRSMQPDyELk7cbrVpJEhOpNLpvxJTuSEplZkBaOPhdMDXTAa+XVzQl5OtkYdDCAWDgFUWcHv/0ROOAW4rd7B8BjwCGPQGMBoNc58z3YbV+3umyf+EmCfmjqiOCcRFD7UJLBYzG0Cz1eIDMJbJaGQD6HQ6XAH0ej0bQL/f43kbg0ajZQMYDmXFhGIHEECtVrEBEPEEIFoGwIbeG38+hUgBuoQFhUiLNqE1TwRAWm3yh+N3Kf4FvfygMCu2Xp8AAAAASUVORK5CYII%3D",bookmark:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACfUlEQVQ4T5WTW0iTARiGnzl/TadLnUGpebgRDU2zg2YQmBdBJHYwNUHyhGIFURdaCJnQhUpUF2EoHqE8VZB4E0QlhaampmZZVprzUEpz859u0/3OGFGUaeB3/b4PH+/7fTL+M4dDNyTJgaZeU+1aMtl//LInt1O7sSwQfaZ2J7C8mnZNgL9K2P2m/3EHpimC9ySED2l4tS5AUXZUaU5JbSbGYYqzU8pyaz5mrQegGm0tG/LeFe3G/GfULeUzPsca/QHNSojsYLBzrI+fn4e9naBUubm6OCkULv6+m7bFpJzez+IszI+AtovmurvPh4ZN7+YMyzqNiG5BkomjWmlSlhDpXlRRfj1HEZgMGAAjLImgVYNhDPSfYLYXDG9BFEG0AZmCeZ2Z9OpvxdYQZYEeQlrlzQtFEXEZKvR6MEzBwjSIg6BpA50VYAKjAwjutH+QNGnV47mDk0uVv1twhn038qJvpWYlh9qYjTDT+dNsGAWTGRYdsci9qHph6j1fOXJWL9FqzWNljZ51lyOaE4967kDdAmY9LFpgwR4UPtR3Ob0+WdwZA0z8CvOfO3h61as3KnQmBL0JJDmY7WHRAWxdeDau7DtwpTv0zyb+Amx1JWjgmkuPUjAK4ACuASDZwaQazEuIdq7moLz+sDEtA6tucDxMyLx/TlWK3JavRjfLpdrpmmXkFMZ7nNoi6GyspriSiawHPYayVQHlSRsb0w+5n2h4aXx/sWGq4Mv3pXqr0NddnliYsDk/Ya9DQMUjzb2MO9r41QDKh5nKjqY+qa2qw1AAqFdcnXdquGN+bIgQeaRsNhwQV7bg5GzLdr1EO2BZ40ttnG2J0Ev0A3NWzQ/Exfbo5qJ4cQAAAABJRU5ErkJggg==",pictureRight:"data:image/png;base64,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",pictureDown:"data:image/png;base64,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",pictureLeft:"data:image/png;base64,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",controls:"data:image/png;base64,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"};// @license MIT
var __defProp$c=Object.defineProperty,__name$c=l((e,t)=>__defProp$c(e,"name",{value:t,configurable:!0}),"__name$c");const scheme=new ColorScheme().scheme("mono").variation("default");function addTheme(e){return`<style type='text/css' name='${e[0]}'>
  .${e[0]} .controlLabel, .${e[0]} .ViewerTitle, .${e[0]}, .PageFunctions a.visible, .${e[0]} a, .${e[0]} a:link, .${e[0]} a:visited, .${e[0]} a:active, .${e[0]} a:focus{ text-decoration:none; color: ${e[2]};}
  .${e[0]} {background-repeat: repeat;background-position: 0 0;background-image: none;background-color: ${e[1]};background-attachment: scroll;}
  .${e[0]} #ImageOptions #menu .menuOuterArrow {border-left-width: 10px;border-left-style: solid;border-left-color: ${e[4]};}
  .${e[0]} #ImageOptions #menu .menuInnerArrow {border-left-width: 5px;border-left-style: solid;border-left-color: ${e[1]};}
  .${e[0]} .PageFunctions { border: 1px solid ${e[3]}; border-bottom: medium none; border-left: medium none; border-right: medium none;}
  /*.${e[0]} #Chapter { border: 1px solid ${e[3]}; border-top: medium none; border-left: medium none; border-right: medium none;}*/
  .${e[0]} .PageFunctions > span, .${e[0]} .Thumbnail span {background: none repeat scroll 0 0 ${e[4]};}
  .${e[0]} .panel {background: none repeat scroll 0 0 ${e[4]}; border: thin solid ${e[3]};}
  .${e[0]} .PageContent, .${e[0]} .Thumbnail img { outline: 2px solid ${e[3]}; background: none repeat scroll 0 0 ${e[4]};}
  .${e[0]} .ChapterControl a { border: 1px solid ${e[3]}; background-color: ${e[5]};
  </style>`}l(addTheme,"addTheme"),__name$c(addTheme,"addTheme");function addCustomTheme(e){const t=scheme.from_hex(e.replace("#","")).colors();return addTheme(["Custom_Dark","#000000",`#${t[2]}`,`#${t[3]}`,`#${t[0]}`,`#${t[1]}`])+addTheme(["Custom_Light","#eeeeec",`#${t[3]}`,`#${t[2]}`,`#${t[0]}`,`#${t[1]}`])}l(addCustomTheme,"addCustomTheme"),__name$c(addCustomTheme,"addCustomTheme");function addFullCustomTheme(e,t,a,o,n){return addTheme(["Full_Custom",e,t,a,o,n])}l(addFullCustomTheme,"addFullCustomTheme"),__name$c(addFullCustomTheme,"addFullCustomTheme");function loadThemes(){const e=scheme.from_hex(settings.CustomTheme.replace("#","")).colors();return[["Dark","#000000","#ffffff","#666666","#333333","#282828"],["Light","#eeeeec","#2e3436","#888a85","#babdb6","#c8cec2"],["Clear","#ffffff","#2e3436","#888a85","#eeeeec","#d3d7cf"],["Dark_Blue","#000000","#91a0b0","#586980","#3e4b5b","#222c3b"],["Tango_Blue","#000000","#82a0bf","#3d669b","#304c77","#102747"],["Lime","#000000","#8abd59","#608d34","#38531f","#233413"],["Plum","#000000","#ad7fa8","#75507b","#49324d","#311b37"],["Light_Plum","#eeeeec","#5c3566","#9b71a2","#ad7fa8","#d2b8ce"],["Earthy","#000000","#ffffff","#693d3d","#46211a","#683327"],["Cool_Blues","#000000","#c4dfe6","#66a5ad","#07575b","#003b46"],["Custom_Dark","#000000",`#${e[2]}`,`#${e[3]}`,`#${e[0]}`,`#${e[1]}`],["Custom_Light","#eeeeec",`#${e[3]}`,`#${e[2]}`,`#${e[0]}`,`#${e[1]}`],["Full_Custom",settings.CustomThemeBody,settings.CustomThemeText,settings.CustomThemeLines,settings.CustomThemePanel,settings.CustomThemeButton]]}l(loadThemes,"loadThemes"),__name$c(loadThemes,"loadThemes");const themes=loadThemes(),themesSelector=themes.map(e=>`<option value='${e[0]}' ${settings.Theme===e[0]?"selected":""}>${e[0].replace("_"," ")}</option>`),themesCSS=themes.map(addTheme).join("");// @license MIT
var __defProp$b=Object.defineProperty,__name$b=l((e,t)=>__defProp$b(e,"name",{value:t,configurable:!0}),"__name$b");const chapterControl=__name$b(e=>t=>`<div id='${e}' class='ChapterControl'>
    <a href='#' class='download'>Download</a>
    <a class='prev' id='prev' href='${t.prev||""}'>Previous</a>
    <a class='next' id='next' href='${t.next||""}'>Next</a>
</div>`,"chapterControl"),chapterControlTop=chapterControl("ChapterControlTop"),chapterControlBottom=chapterControl("ChapterControlBottom");// @license MIT
var __defProp$a=Object.defineProperty,__name$a=l((e,t)=>__defProp$a(e,"name",{value:t,configurable:!0}),"__name$a");const listPages=__name$a(e=>Array(e).fill(null).map((t,a)=>`
<div id='Page${a+1}' class='MangaPage'>
  <div class='PageFunctions'>
    <a class='Bookmark controlButton' title='Bookmark'></a>
    <a class='ZoomIn controlButton' title='Zoom In'></a>
    <a class='ZoomRestore controlButton' title='Zoom Restore'></a>
    <a class='ZoomOut controlButton' title='Zoom Out'></a>
    <a class='ZoomWidth controlButton' title='Zoom to Width'></a>
    <a class='ZoomHeight controlButton' title='Zoom to Height'></a>
    <a class='Hide controlButton' title='Hide'></a>
    <a class='Reload controlButton' title='Reload'></a>
    <span>${a+1}</span>
  </div>
  <div class='PageContent'>
    <img id='PageImg${a+1}' alt='PageImg${a+1}' />
  </div>
</div>`),"listPages"),imageOptions=`<div id='ImageOptions'>
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
</div>`,controls$1=`<div id='ViewerControls' class='panel'>
  <span class='controlLabel ThemeSelector'>Theme:
    <select id='ThemeSelector'>
      ${themesSelector}
    </select>
      <span class='CustomTheme' ${settings.Theme!=="Custom_Dark"&&settings.Theme!=="Custom_Light"?'style="display: none;"':""}><br/>-Base:<input id='CustomThemeHue' type='color' value='${settings.CustomTheme}' class='colorpicker CustomTheme'></span>
      <span class='FullCustom' ${settings.Theme!=="Full_Custom"?'style="display: none;"':""}><br/>-Body:<input id='CustomThemeHueBody' type='color' value='${settings.CustomThemeBody}' class='colorpicker FullCustom'></span>
      <span class='FullCustom' ${settings.Theme!=="Full_Custom"?'style="display: none;"':""}><br/>-Text:<input id='CustomThemeHueText' type='color' value=${settings.CustomThemeText}' class='colorpicker FullCustom'></span>
      <span class='FullCustom' ${settings.Theme!=="Full_Custom"?'style="display: none;"':""}><br/>-Lines:<input id='CustomThemeHueLines' type='color' value='${settings.CustomThemeLines}' class='colorpicker FullCustom'></span>
      <span class='FullCustom' ${settings.Theme!=="Full_Custom"?'style="display: none;"':""}><br/>-Painels:<input id='CustomThemeHuePanel' type='color' value='${settings.CustomThemePanel}' class='colorpicker FullCustom'></span>
      <span class='FullCustom' ${settings.Theme!=="Full_Custom"?'style="display: none;"':""}><br/>-Buttons:<input id='CustomThemeHueButton' type='color' value='${settings.CustomThemeButton}' class='colorpicker FullCustom'></span>
  </span>
  <span class='controlLabel loadMode'>Default Load Mode:
    <select id='loadMode'>
      <option value='wait' ${settings.loadMode==="wait"?"selected":""}>Normal(Wait 3 sec)</option>
      <option value='always' ${settings.loadMode==="always"?"selected":""}>Always(Immediately)</option>
      <option value='never' ${settings.loadMode==="never"?"selected":""}>Never(Manually)</option>
    </select>
  </span>
  <span class='controlLabel PagesPerSecond'>Pages/Second:
    <select id='PagesPerSecond'>
      <option value='3000' ${settings.Timer===3e3?"selected":""}>0.3(Slow)</option>
      <option value='2000' ${settings.Timer===2e3?"selected":""}>0.5</option>
      <option value='1000' ${settings.Timer===1e3?"selected":""}>01(Normal)</option>
      <option value='500' ${settings.Timer===500?"selected":""}>02</option>
      <option value='250' ${settings.Timer===250?"selected":""}>04(Fast)</option>
      <option value='125' ${settings.Timer===125?"selected":""}>08</option>
      <option value='100' ${settings.Timer===100?"selected":""}>10(Extreme)</option>
    </select>
  </span>
  <span class='controlLabel DefaultZoom'>Default Zoom:
    <select id='DefaultZoom'>
      <option value='50' ${settings.Zoom===50?"selected":""}>50%</option>
      <option value='75' ${settings.Zoom===75?"selected":""}>75%</option>
      <option value='100' ${settings.Zoom===100?"selected":""}>100%</option>
      <option value='125' ${settings.Zoom===125?"selected":""}>125%</option>
      <option value='150' ${settings.Zoom===150?"selected":""}>150%</option>
      <option value='175' ${settings.Zoom===175?"selected":""}>175%</option>
      <option value='200' ${settings.Zoom===200?"selected":""}>200%</option>
      <option value='1000' ${settings.Zoom===1e3?"selected":""}>Fit Width</option>
      <option value='-1000' ${settings.Zoom===-1e3?"selected":""}>Fit Height</option>
    </select>
  </span>
  <span class='controlLabel zoomStep'>Zoom Change Step (between 5 and 50): <br/>
    <input type='range' value='${settings.zoomStep}' name='zoomStep' id='zoomStep' min='5' max='50' step='5' oninput='zoomStepVal.value = this.value'>
    <output id='zoomStepVal'>${settings.zoomStep}</output>
  </span>
  <span class='controlLabel viewMode'>Default View Mode:
    <select id='viewMode'>
      <option value='' ${settings.viewMode===""?"selected":""}>Vertical</option>
      <option value='WebComic' ${settings.viewMode==="WebComic"?"selected":""}>WebComic</option>
      <option value='FluidLTR' ${settings.viewMode==="FluidLTR"?"selected":""}>Left to Right</option>
      <option value='FluidRTL' ${settings.viewMode==="FluidRTL"?"selected":""}>Right to Left</option>
    </select>
  </span>
  <span class='controlLabel fitIfOversize'>Fit Width if Oversize:
    <input type='checkbox' value='true' name='fitIfOversize' id='fitIfOversize' ${settings.FitWidthIfOversize?"checked":""}>
  </span>
  <span class='controlLabel showThumbnails'>Show Thumbnails:
    <input type='checkbox' value='true' name='showThumbnails' id='showThumbnails' ${settings.ShowThumbnails?"checked":""}>
   </span>
   <span class='controlLabel lazyLoadImages'>Lazy Load Images:
    <input type='checkbox' value='true' name='lazyLoadImages' id='lazyLoadImages' ${settings.lazyLoadImages?"checked":""}>
   </span>
   <span class='controlLabel lazyStart'>Lazy Start From Page (between 5 and 100):<br/>
    <input type='range' value='${settings.lazyStart}' name='lazyStart' id='lazyStart' min='5' max='100' step='5' oninput='lazyStartVal.value = this.value'>
    <output id='lazyStartVal'>${settings.lazyStart}</output>
  </span>
  <span class='controlLabel downloadZip'>Download Images as Zip Automatically:
    <input type='checkbox' value='false' name='downloadZip' id='downloadZip' ${settings.downloadZip?"checked":""}>
  </span>
  <span class='controlLabel hidePageControls'>Always Hide Page Controls:
    <input type='checkbox' value='false' name='hidePageControls' id='hidePageControls' ${settings.hidePageControls?"checked":""}>
  </span>
</div>`;// @license MIT
var htmlKeybinds=`<div id='ViewerShortcuts' class='panel' style='display: none;'>
    <kbd class='dark'>Numpad 5</kbd>/<kbd class='dark'>/</kbd>: Open Settings<br/>
    <kbd class='dark'>Numpad +</kbd>/<kbd class='dark'>=</kbd>: Global Zoom in pages (enlarge)<br/>
    <kbd class='dark'>Numpad -</kbd>/<kbd class='dark'>-</kbd>: Global Zoom out pages (reduce)<br/>
    <kbd class='dark'>Numpad /</kbd>/<kbd class='dark'>9</kbd>: Global Restore pages to original<br/>
    <kbd class='dark'>Numpad *</kbd>/<kbd class='dark'>0</kbd>: Global Fit window width<br/>
    <kbd class='dark'>V</kbd>: Vertical Mode<br/>
    <kbd class='dark'>C</kbd>: WebComic Mode<br/>
    <kbd class='dark'>N</kbd>: Right to Left Mode<br/>
    <kbd class='dark'>B</kbd>: Left to Right Mode<br/>
    <kbd class='dark'>\u2192</kbd>/<kbd class='dark'>D</kbd>/<kbd class='dark'>Numpad 6</kbd>/<kbd class='dark'>.</kbd> : Next Chapter<br/>
    <kbd class='dark'>\u2190</kbd>/<kbd class='dark'>A</kbd>/<kbd class='dark'>Numpad 4</kbd>/<kbd class='dark'>,</kbd> : Previous Chapter<br/>
    <kbd class='dark'>\u2191</kbd>/<kbd class='dark'>W</kbd>/<kbd class='dark'>Numpad 8</kbd>: Scroll Up<br/>
    <kbd class='dark'>\u2193</kbd>/<kbd class='dark'>S</kbd>/<kbd class='dark'>Numpad 2</kbd>: Scroll Down<br/>
</div>`;// @license MIT
var __defProp$9=Object.defineProperty,__name$9=l((e,t)=>__defProp$9(e,"name",{value:t,configurable:!0}),"__name$9");const listThumbnails=__name$9(e=>Array(e).fill(null).map((t,a)=>`<div id='Thumbnail${a+1}' class='Thumbnail'><img id='ThumbnailImg${a+1}' alt='ThumbnailImg${a+1}' src=''/><span>${a+1}</span></div>`),"listThumbnails");// @license MIT
var __defProp$8=Object.defineProperty,__name$8=l((e,t)=>__defProp$8(e,"name",{value:t,configurable:!0}),"__name$8");const title=__name$8(e=>`<div class='ViewerTitle'><a id='series' href='${e.series}'><i>${e.title}</i><br/>(Return to Chapter List)</a></div>`,"title"),listOptions=__name$8(e=>Array(e).fill(null).map((t,a)=>`<option value='${a+1}'>${a+1}</option>`),"listOptions"),body=__name$8((e,t=0)=>`
<div id='MangaOnlineViewer'
  class='${settings.Theme} ${isMobile?"mobile":""} ${settings.hidePageControls?"hideControls":""}'>
  <header>
    ${title(e)}
    <div id='Counters' class='controlLabel'>
      <i>0</i> of <b>${e.pages}</b> Pages Loaded
      <span class='controlLabel'>Go to Page:</span>
      <select id='gotoPage'>
        <option selected>#</option>
        ${listOptions(e.pages).slice(t).join("")}
      </select>
    </div>
    ${chapterControlTop(e)}
  </header>  
  <main id='Chapter' class='${settings.FitWidthIfOversize===!0?"fitWidthIfOversize":""} ${settings.viewMode}'>
    ${listPages(e.pages).slice(t).join("")}
  </main>
  <footer>
    ${title(e)}
    ${chapterControlBottom(e)}
  </footer>
  <aside>
    ${imageOptions}
    ${controls$1}
    ${htmlKeybinds}
  </aside>
  <nav id='Navigation' class='panel ${settings.ShowThumbnails?"":"disabled"}'>
    <div id='NavigationCounters' class='controlLabel'>
      <img alt='Thumbnails' title='Thumbnails' src='${icon.menu}' class='nav' />
      <i>0</i> of <b>${e.pages}</b> Pages Loaded
    </div>
    <div id='Thumbnails'>
      ${listThumbnails(e.pages).slice(t).join("")}
    </div>
  </nav>
  <a href='#' id='blob' style='display: none;'>Download</a>
</div>`,"body");// @license MIT
var __defProp$7=Object.defineProperty,__name$7=l((e,t)=>__defProp$7(e,"name",{value:t,configurable:!0}),"__name$7");const readerCSS=`<style type='text/css'>
${cssStyles}
#MangaOnlineViewer .PageFunctions .Bookmark {background: url('${icon.bookmark}') no-repeat scroll center center transparent;}
#MangaOnlineViewer .PageFunctions .Reload {background: url('${icon.reload}') no-repeat scroll center center transparent;}
#MangaOnlineViewer .PageFunctions .Hide {background: url('${icon.hide}') no-repeat scroll center center transparent;}
#MangaOnlineViewer .PageFunctions .ZoomIn {background: url('${icon.zoomIn}') no-repeat scroll center center transparent;}
#MangaOnlineViewer .PageFunctions .ZoomOut {background: url('${icon.zoomOut}') no-repeat scroll center center transparent;}
#MangaOnlineViewer .PageFunctions .ZoomRestore {background: url('${icon.zoomRestore}') no-repeat scroll center center transparent;}
#MangaOnlineViewer .PageFunctions .ZoomWidth {background: url('${icon.zoomWidth}') no-repeat scroll center center transparent;}
#MangaOnlineViewer .PageFunctions .ZoomHeight {background: url('${icon.zoomWidth}') no-repeat scroll center center transparent;}
</style>`;function head(e){return`
<head>
  <title>${e.title}</title>
  <meta charset='UTF-8'>
  ${externalScripts.join(`
`)}
  ${externalCSS.join(`
`)}
  ${readerCSS}
  ${themesCSS}
</head>
`}l(head,"head"),__name$7(head,"head");function reader(e,t=0){return`
${head(e)}
<body class='${settings.Theme}'>
  ${body(e,t>0?t-1:0)}
</body>`}l(reader,"reader"),__name$7(reader,"reader");var commonjsGlobal=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},FileSaver_min={exports:{}};(function(e,t){(function(a,o){o()})(commonjsGlobal,function(){function a(g,m){return typeof m=="undefined"?m={autoBom:!1}:typeof m!="object"&&(console.warn("Deprecated: Expected third argument to be a object"),m={autoBom:!m}),m.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(g.type)?new Blob(["\uFEFF",g],{type:g.type}):g}l(a,"b");function o(g,m,w){var p=new XMLHttpRequest;p.open("GET",g),p.responseType="blob",p.onload=function(){u(p.response,m,w)},p.onerror=function(){console.error("could not download file")},p.send()}l(o,"c");function n(g){var m=new XMLHttpRequest;m.open("HEAD",g,!1);try{m.send()}catch{}return 200<=m.status&&299>=m.status}l(n,"d");function r(g){try{g.dispatchEvent(new MouseEvent("click"))}catch{var m=document.createEvent("MouseEvents");m.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),g.dispatchEvent(m)}}l(r,"e");var s=typeof window=="object"&&window.window===window?window:typeof self=="object"&&self.self===self?self:typeof commonjsGlobal=="object"&&commonjsGlobal.global===commonjsGlobal?commonjsGlobal:void 0,c=s.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),u=s.saveAs||(typeof window!="object"||window!==s?function(){}:"download"in HTMLAnchorElement.prototype&&!c?function(g,m,w){var p=s.URL||s.webkitURL,A=document.createElement("a");m=m||g.name||"download",A.download=m,A.rel="noopener",typeof g=="string"?(A.href=g,A.origin===location.origin?r(A):n(A.href)?o(g,m,w):r(A,A.target="_blank")):(A.href=p.createObjectURL(g),setTimeout(function(){p.revokeObjectURL(A.href)},4e4),setTimeout(function(){r(A)},0))}:"msSaveOrOpenBlob"in navigator?function(g,m,w){if(m=m||g.name||"download",typeof g!="string")navigator.msSaveOrOpenBlob(a(g,w),m);else if(n(g))o(g,m,w);else{var p=document.createElement("a");p.href=g,p.target="_blank",setTimeout(function(){r(p)})}}:function(g,m,w,p){if(p=p||open("","_blank"),p&&(p.document.title=p.document.body.innerText="downloading..."),typeof g=="string")return o(g,m,w);var A=g.type==="application/octet-stream",h=/constructor/i.test(s.HTMLElement)||s.safari,f=/CriOS\/[\d]+/.test(navigator.userAgent);if((f||A&&h||c)&&typeof FileReader!="undefined"){var b=new FileReader;b.onloadend=function(){var y=b.result;y=f?y:y.replace(/^data:[^;]*;/,"data:attachment/file;"),p?p.location.href=y:location=y,p=null},b.readAsDataURL(g)}else{var v=s.URL||s.webkitURL,C=v.createObjectURL(g);p?p.location=C:location.href=C,p=null,setTimeout(function(){v.revokeObjectURL(C)},4e4)}});s.saveAs=u.saveAs=u,e.exports=u})})(FileSaver_min);// @license MIT
var __defProp$6=Object.defineProperty,__name$6=l((e,t)=>__defProp$6(e,"name",{value:t,configurable:!0}),"__name$6");const cache={zip:new JSZip,downloadFiles:0,Data:{}},getExtension=__name$6(e=>((/image\/(?<ext>jpe?g|png|webp)/.exec(e)||{}).groups||{}).ext||""||"png","getExtension"),getFilename=__name$6((e,t,a,o)=>`${e}${(t+1).toString().padStart(Math.floor(Math.log10(a))+1,"0")}.${o.replace("jpeg","jpg")}`,"getFilename");function generateZip(){var t,a,o,n;if(cache.downloadFiles===0){const r=/^(?<name>.*?)(?<index>\d+)\.(?<ext>\w+)$/,s=document.querySelectorAll(".MangaPage img"),c=(()=>{var g,m,w;const u=[];for(let p=0;p<s.length;p+=1){const h=(m=(g=s[p].getAttribute("src"))==null?void 0:g.split(/[?#]/)[0].split("/").pop())!=null?m:"",f=r.exec(h);if(!f||!f.groups)break;const b=getFilename(f.groups.name,parseInt(f.groups.index,10),s.length,(w=f.groups)==null?void 0:w.ext);if(u.length>0&&b<=u[u.length-1])break;u.push(b)}return u.length<s.length?[]:u})();s.forEach((u,g)=>{var p,A;const m=(p=u.getAttribute("src"))!=null?p:"",w=/^data:(?<mimeType>image\/\w+);base64,+(?<data>.+)/.exec(m);if(w&&w.groups){const h=getFilename("Page ",g,s.length,getExtension((A=w.groups)==null?void 0:A.mimeType));cache.zip.file(h,w.groups.data,{base64:!0,createFolders:!0}),logScript(`${h} Added to Zip from Base64 Image, From: ${m}`),cache.downloadFiles+=1}else try{GM_xmlhttpRequest({method:"GET",url:m,overrideMimeType:"text/plain; charset=x-user-defined",responseType:"blob",onload(h){const f=c[g]||getFilename("Page ",g,s.length,getExtension(h.response.type));cache.zip.file(f,h.response,{base64:!0,createFolders:!0,compression:"DEFLATE"}),logScript(`${f} Added to Zip as Base64 Image, From: ${m}, Data:`,h.response),cache.downloadFiles+=1}})}catch(h){logScript(h)}})}const e=parseInt(((a=(t=document.getElementById("Counters"))==null?void 0:t.querySelector("b"))==null?void 0:a.textContent)||"",10);if(cache.downloadFiles<e)logScript(`Waiting for Files to Download ${cache.downloadFiles} of ${e}`),setTimeout(generateZip,2e3);else{const r=document.getElementById("blob");try{r.download=`${(n=(o=document.querySelector("#series b"))==null?void 0:o.textContent)==null?void 0:n.trim()}.zip`,cache.zip.generateAsync({type:"blob"}).then(s=>{var u,g;logScript("Download Ready");const c=`${(g=(u=document.querySelector("#series i"))==null?void 0:u.textContent)==null?void 0:g.trim()}.zip`;FileSaver_min.exports.saveAs(s,c)})}catch(s){logScript(s)}}}l(generateZip,"generateZip"),__name$6(generateZip,"generateZip");// @license MIT
var __defProp$5=Object.defineProperty,__name$5=l((e,t)=>__defProp$5(e,"name",{value:t,configurable:!0}),"__name$5");function isImagesManga(e){return"listImages"in e&&!isNothing(e.listImages)}l(isImagesManga,"isImagesManga"),__name$5(isImagesManga,"isImagesManga");function isPagesManga(e){return"listPages"in e&&!isNothing(e.listPages)}l(isPagesManga,"isPagesManga"),__name$5(isPagesManga,"isPagesManga");function isBruteforceManga(e){return"bruteForce"in e&&!isNothing(e.bruteForce)}l(isBruteforceManga,"isBruteforceManga"),__name$5(isBruteforceManga,"isBruteforceManga");// @license MIT
var __defProp$4=Object.defineProperty,__name$4=l((e,t)=>__defProp$4(e,"name",{value:t,configurable:!0}),"__name$4");function getHtml(e,t=settings.Timer){return new Promise(a=>{setTimeout(()=>{logScript(`Getting page: ${e}`),$.ajax({type:"GET",url:e,dataType:"html",async:!0,success:o=>{logScript(`Got page: ${e}`),a(o)},retryCount:0,retryLimit:10,retryWait:1e4,timeout:1e3,created:Date.now(),error(){this.retryCount+=1,this.retryCount<=this.retryLimit?(logScript(`Retrying Getting page: ${e}`),setTimeout(()=>{$.ajax(this)},this.retryWait)):logScript(`Failed Getting page: ${e}`)}})},t)})}l(getHtml,"getHtml"),__name$4(getHtml,"getHtml");function applyZoom(e=".PageContent img",t=settings.Zoom){(typeof e=="string"?$(e):e).each((o,n)=>{$(n).removeAttr("width").removeAttr("height").removeAttr("style"),t===1e3?$(n).width(window.innerWidth):t===-1e3?$(n).height(window.innerHeight+($("#Navigation").hasClass("disabled")?0:-34)+($("#Chapter").hasClass("WebComic")?0:-35)):$(n).width($(n).prop("naturalWidth")*(t/100))})}l(applyZoom,"applyZoom"),__name$4(applyZoom,"applyZoom");function reloadImage(e){const t=e.attr("src");t!==void 0&&(e.removeAttr("src"),setTimeout(()=>{e.attr("src",t)},500))}l(reloadImage,"reloadImage"),__name$4(reloadImage,"reloadImage");function onImagesDone(){logScript("Images Loading Complete"),settings.lazyLoadImages||($(".download").attr("href","#download"),logScript("Download Available"),settings.downloadZip&&$("#blob").trigger("click"))}l(onImagesDone,"onImagesDone"),__name$4(onImagesDone,"onImagesDone");function updateProgress(){const e=$(".PageContent img").get().length,t=$(".PageContent img.imgLoaded").get().length,a=Math.floor(t/e*100);$("title").html(`(${a}%) ${$("#series i").first().text()}`),$("#Counters i, #NavigationCounters i").html(t.toString()),NProgress.configure({showSpinner:!1}).set(t/e),logScript(`Progress: ${a}%`),t===e&&onImagesDone()}l(updateProgress,"updateProgress"),__name$4(updateProgress,"updateProgress");function onImagesProgress(e,t){const a=$(t.img);if(t.isLoaded){a.addClass("imgLoaded"),a.removeClass("imgBroken");const o=a.attr("id").replace("PageImg","ThumbnailImg");$(`#${o}`).attr("src",a.attr("src")).on("load",()=>applyZoom(a))}else a.addClass("imgBroken"),reloadImage(a),a.parent().imagesLoaded().progress(onImagesProgress);updateProgress()}l(onImagesProgress,"onImagesProgress"),__name$4(onImagesProgress,"onImagesProgress");function normalizeUrl(e){let t=e.trim();return t.startsWith("//")&&(t=`https:${t}`),t}l(normalizeUrl,"normalizeUrl"),__name$4(normalizeUrl,"normalizeUrl");function addImg(e,t){const a=normalizeUrl(t);return!settings.lazyLoadImages||e<settings.lazyStart?($(`#PageImg${e}`).attr("src",a),$(`#PageImg${e}`).parent().imagesLoaded().progress(onImagesProgress),logScript("Loaded Image:",e,"Source:",a)):$(`#PageImg${e}`).attr("data-src",a).unveil({offset:1e3}).on("loaded.unveil",()=>{$(`#PageImg${e}`).parent().imagesLoaded().progress(onImagesProgress),logScript("Unveiled Image: ",e," Source: ",$(`#PageImg${e}`).attr("src"))}),e}l(addImg,"addImg"),__name$4(addImg,"addImg");function addPage(e,t,a){return!settings.lazyLoadImages||t<settings.lazyStart?getHtml(a).then(o=>{var r;const n=normalizeUrl($(o).find(e.img).attr((r=e.lazyAttr)!=null?r:"src"));$(`#PageImg${t}`).attr("src",n),$(`#PageImg${t}`).parent().imagesLoaded().progress(onImagesProgress),logScript("Loaded Page:",t,"Source:",n)}):$(`#PageImg${t}`).attr("data-src","data:image/gif;base64,R0lGODlhAQABAIAAAP///////yH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==").unveil({offset:2e3}).on("loaded.unveil",()=>{getHtml(a).then(o=>{var r;const n=normalizeUrl($(o).find(e.img).attr((r=e.lazyAttr)!=null?r:"src"));$(`#PageImg${t}`).attr("src",n).width("auto"),$(`#PageImg${t}`).parent().imagesLoaded().progress(onImagesProgress),logScript("Unveiled Page: ",t," Source: ",$(`#PageImg${t}`).attr("src"))})}),t}l(addPage,"addPage"),__name$4(addPage,"addPage");function delayAdd(e,t=settings.Timer){return new Promise(a=>{setTimeout(()=>{a(e)},t)})}l(delayAdd,"delayAdd"),__name$4(delayAdd,"delayAdd");function loadMangaPages(e,t){var a;return(a=t.listPages)==null?void 0:a.map((o,n)=>n>=e?delayAdd(o,(t.timer||settings.Timer)*(n-e)).then(r=>addPage(t,n+1,r)):null)}l(loadMangaPages,"loadMangaPages"),__name$4(loadMangaPages,"loadMangaPages");function loadMangaImages(e,t){var a;return(a=t.listImages)==null?void 0:a.map((o,n)=>n>=e?delayAdd(o,(t.timer||settings.Timer)*(n-e)).then(r=>addImg(n+1,r)):null)}l(loadMangaImages,"loadMangaImages"),__name$4(loadMangaImages,"loadMangaImages");function loadManga(e,t=1){settings.lazyLoadImages=e.lazy||settings.lazyLoadImages,logScript("Loading Images"),logScript(`Intervals: ${e.timer||settings.Timer||"Default(1000)"}`),logScript(`Lazy: ${settings.lazyLoadImages}`),settings.lazyLoadImages&&logScript("Download may not work with Lazy Loading Images"),isImagesManga(e)?(logScript("Method: Images:",e.listImages),loadMangaImages(t-1,e)):isPagesManga(e)?(logScript("Method: Pages:",e.listPages),loadMangaPages(t-1,e)):isBruteforceManga(e)&&(logScript("Method: Brute Force"),e.bruteForce({begin:t,addImg,addPage:(a,o)=>addPage(e,a,o),loadMangaImages:a=>loadMangaImages(t-1,a),loadMangaPages:a=>loadMangaPages(t-1,a),getHtml,wait:settings.Timer}))}l(loadManga,"loadManga"),__name$4(loadManga,"loadManga");// @license MIT
var __defProp$3=Object.defineProperty,__name$3=l((e,t)=>__defProp$3(e,"name",{value:t,configurable:!0}),"__name$3");function scrollToElement(e){var t,a;$(window).scrollTop(((t=e.offset())==null?void 0:t.top)||0).scrollLeft(((a=e.offset())==null?void 0:a.left)||0)}l(scrollToElement,"scrollToElement"),__name$3(scrollToElement,"scrollToElement");function setKeyDownEvents(){try{$(document).off("keyup"),$(document).off("keydown"),$(document).off("keypress"),$(document).off("onload"),$(window).off("keyup"),$(window).off("keydown"),$(window).off("keypress"),$(window).off("onload"),document.onkeydown=null,document.onkeypress=null,window.onkeydown=null,window.onkeypress=null,window.onload=null,document.body.onload=null}catch(t){logScript(`Keybinds error: ${t}`)}function e(t){var o,n,r,s,c;const a=(o=t.originalEvent)==null?void 0:o.code;if(!((n=t.originalEvent)!=null&&n.ctrlKey)&&!((r=t.originalEvent)!=null&&r.altKey)&&!((s=t.originalEvent)!=null&&s.shiftKey)&&!((c=t.originalEvent)!=null&&c.metaKey)&&$.inArray(a,["KeyW","Numpad8","KeyS","Numpad2","ArrowRight","Period","KeyD","Numpad6","ArrowLeft","Comma","KeyA","Numpad4","Equal","NumpadAdd","KeyE","Minus","NumpadSubtract","KeyQ","Digit9","NumpadDivide","KeyR","Digit0","NumpadMultiply","KeyF","Slash","Numpad5","KeyX","KeyC","KeyV","KeyB","KeyN"])!==-1){switch(t.preventDefault(),t.stopPropagation(),t.stopImmediatePropagation(),a){case"ArrowUp":case"KeyW":case"Numpad8":if(settings.Zoom===-1e3){const u=$(".MangaPage").get().map(g=>$(g).offset().top-$(window).scrollTop()).findIndex(g=>g>10);scrollToElement($(".MangaPage").eq(u-2))}else window.scrollBy({top:-$(window).height()/2,behavior:"smooth"});break;case"ArrowDown":case"KeyS":case"Numpad2":if(settings.Zoom===-1e3){const u=$(".MangaPage").get().map(g=>$(g).offset().top-$(window).scrollTop()).findIndex(g=>g>10);scrollToElement($(".MangaPage").eq(u))}else window.scrollBy({top:$(window).height()/2,behavior:"smooth"});break;case"ArrowRight":case"Period":case"KeyD":case"Numpad6":$(".ChapterControl:first .next").trigger("click");break;case"ArrowLeft":case"Comma":case"KeyA":case"Numpad4":$(".ChapterControl:first .prev").trigger("click");break;case"Equal":case"NumpadAdd":case"KeyE":$("#enlarge").trigger("click");break;case"Minus":case"NumpadSubtract":case"KeyQ":$("#reduce").trigger("click");break;case"Digit9":case"NumpadDivide":case"KeyR":$("#restore").trigger("click");break;case"Digit0":case"NumpadMultiply":case"KeyF":$("#fitWidth").trigger("click");break;case"Slash":case"Numpad5":case"KeyX":$("#settings").trigger("click");break;case"KeyC":$("#webComic").trigger("click");break;case"KeyV":$("#verticalMode").trigger("click");break;case"KeyN":$("#rtlMode").trigger("click");break;case"KeyB":$("#ltrMode").trigger("click");break}return!1}return!0}l(e,"processKey"),__name$3(e,"processKey"),$(document).on("keydown",e)}l(setKeyDownEvents,"setKeyDownEvents"),__name$3(setKeyDownEvents,"setKeyDownEvents");function controls(){$("#enlarge").on("click",()=>{settings.Zoom+=settings.zoomStep,$("#Zoom b").html(settings.Zoom.toString()),applyZoom()}),$("#reduce").on("click",()=>{settings.Zoom-=settings.zoomStep,$("#Zoom b").html(settings.Zoom.toString()),applyZoom()}),$("#restore").on("click",()=>{settings.Zoom=100,$("#Zoom b").html(settings.Zoom.toString()),applyZoom()}),$("#fitWidth").on("click",()=>{settings.Zoom=1e3,$("#Zoom b").html(settings.Zoom.toString()),applyZoom()}),$("#fitHeight").on("click",()=>{settings.Zoom=-1e3,$("#Zoom b").html(settings.Zoom.toString()),applyZoom()}),$("#zoomStep").on("change",e=>{const t=$(e.target).val();setValueGM("MangaZoomStep",parseInt(t,10)),logScript(`zoomStep: ${getValueGM("MangaZoomStep")}`)}),$("#webComic").on("click",()=>{$("#Chapter").addClass("WebComic").removeClass("FluidLTR").removeClass("FluidRTL"),applyZoom()}),$("#ltrMode").on("click",()=>{$("#Chapter").removeClass("WebComic").addClass("FluidLTR").removeClass("FluidRTL"),applyZoom()}),$("#rtlMode").on("click",()=>{$("#Chapter").removeClass("WebComic").removeClass("FluidLTR").addClass("FluidRTL"),applyZoom()}),$("#verticalMode").on("click",()=>{$("#Chapter").removeClass("WebComic").removeClass("FluidLTR").removeClass("FluidRTL"),applyZoom()}),$("#fitIfOversize").on("change",e=>{$("#Chapter").toggleClass("fitWidthIfOversize"),$(e.target).is(":checked")?setValueGM("MangaFitWidthIfOversize",!0):setValueGM("MangaFitWidthIfOversize",!1),logScript(`fitIfOversize: ${getValueGM("MangaFitWidthIfOversize")}`)}),$("#viewMode").on("change",e=>{const t=$(e.target).val();$("#Chapter").removeClass("WebComic").removeClass("FluidLTR").removeClass("FluidRTL").addClass(t),setValueGM("MangaViewMode",t),logScript(`ViewMode: ${getValueGM("MangaViewMode")}`),applyZoom()}),$("#loadMode").on("change",e=>{const t=$(e.target).val();setValueGM("MangaLoadMode",t),logScript(`MangaLoadMode: ${getValueGM("MangaLoadMode")}`)}),$("#showThumbnails").on("change",e=>{$("#Navigation").toggleClass("disabled"),$(e.target).is(":checked")?setValueGM("MangaShowThumbnails",!0):setValueGM("MangaShowThumbnails",!1),logScript(`MangaShowThumbnails: ${getValueGM("MangaShowThumbnails")}`),applyZoom()}),$("#downloadZip").on("change",e=>{$(e.target).is(":checked")?(setValueGM("MangaDownloadZip",!0),Swal.fire({title:"Attention",text:"Next time a chapter finish loading you will be prompted to save automatically",timer:1e4,icon:"info"})):setValueGM("MangaDownloadZip",!1),logScript(`MangaDownloadZip: ${getValueGM("MangaDownloadZip")}`)}),$("#blob").one("click",generateZip),$(".download").on("click",()=>{logScript("Downloading Chapter"),$("#blob").trigger("click")}),$("#lazyLoadImages").on("change",e=>{$(e.target).is(":checked")?(setValueGM("MangaLazyLoadImages",!0),Swal.fire({title:"Warning",html:`Lazy load is incompatible with zip download, you will not be able to download with this setting ON.<br/>
               Suggestion: <span style="color:red;font-weight:bold">Disable Thumbnails</span> to save Bandwidth/Memory.`,icon:"warning"})):setValueGM("MangaLazyLoadImages",!1),logScript(`MangaLazyLoadImages: ${getValueGM("MangaLazyLoadImages")}`)}),$("#lazyStart").on("change",e=>{const t=$(e.target).val();setValueGM("MangaLazyStart",t),logScript(`lazyStart: ${getValueGM("MangaLazyStart")}`)}),$("#PagesPerSecond").on("change",e=>{setValueGM("MangaTimer",parseInt($(e.target).val(),10)),logScript(`MangaTimer: ${getValueGM("MangaTimer")}`)}),$("#DefaultZoom").on("change",e=>{settings.Zoom=parseInt($(e.target).val(),10),$("#Zoom b").html(settings.Zoom.toString),setValueGM("MangaZoom",parseInt(settings.Zoom.toString(),10)),logScript(`MangaZoom: ${getValueGM("MangaZoom")}`),applyZoom()}),$("#pageControls").on("click",()=>{$("#MangaOnlineViewer").toggleClass("hideControls")}),$("#hidePageControls").on("change",e=>{$("#MangaOnlineViewer").toggleClass("hideControls"),$(e.target).is(":checked")?setValueGM("MangaHidePageControls",!0):setValueGM("MangaHidePageControls",!1),logScript(`MangaHidePageControls: ${getValueGM("MangaHidePageControls")}`)}),$("#ThemeSelector").on("change",e=>{const t=$(e.target);$("#MangaOnlineViewer , body").removeClass().addClass(t.val()),logScript("MangaTheme",t.val()),setValueGM("MangaTheme",t.val()),t.val()==="Custom_Dark"||t.val()==="Custom_Light"?$(".CustomTheme").show():$(".CustomTheme").hide(),t.val()==="Full_Custom"?$(".FullCustom").show():$(".FullCustom").hide()}),$("#CustomThemeHue").on("change",e=>{const t=$(e.target).val();logScript(`CustomTheme: ${t}`),$('style[title="Custom_Light"], style[title="Custom_Dark"]').remove(),$("head").append(addCustomTheme(t)),setValueGM("MangaCustomTheme",t),logScript(`MangaCustomTheme: ${getValueGM("MangaCustomTheme")}`)}),$(".FullCustom").on("change",()=>{logScript("FullCustomTheme: ",$("#CustomThemeHueBody").val(),$("#CustomThemeHueText").val(),$("#CustomThemeHueLines").val(),$("#CustomThemeHuePanel").val(),$("#CustomThemeHueButton").val()),$('style[title="Full_Custom"]').remove(),$("head").append(addFullCustomTheme($("#CustomThemeHueBody").val(),$("#CustomThemeHueText").val(),$("#CustomThemeHueLines").val(),$("#CustomThemeHuePanel").val(),$("#CustomThemeHueButton").val())),setValueGM("MangaCustomThemeBody",$("#CustomThemeHueBody").val()),setValueGM("MangaCustomThemeText",$("#CustomThemeHueText").val()),setValueGM("MangaCustomThemeLines",$("#CustomThemeHueLines").val()),setValueGM("MangaCustomThemePanel",$("#CustomThemeHuePanel").val()),setValueGM("MangaCustomThemeButton",$("#CustomThemeHueButton").val())}),$("#gotoPage").on("change",e=>{applyZoom(),scrollToElement($(`#Page${$(e.target).val()}`))}),$(".Thumbnail").on("click",e=>{applyZoom(),scrollToElement($(`#Page${$(e.currentTarget).find("span").html()}`))}),$("#settings").on("click",()=>{$("#ViewerControls").slideToggle(),$("#ViewerShortcuts").slideToggle(),$("#ImageOptions").toggleClass("settingsOpen"),$("#Navigation").toggleClass("visible")}),$(".Bookmark").on("click",e=>{const t=parseInt($(e.target).parents(".MangaPage").find(".PageFunctions span").text(),10),a={url:window.location.href,page:t,date:Date.now()},o=settings.bookmarks.filter(n=>n.url===a.url).length>0;settings.bookmarks=settings.bookmarks.filter(n=>n.url!==a.url),o?Swal.fire({title:"Bookmark Removed",timer:1e4,icon:"error"}):(settings.bookmarks.push(a),Swal.fire({title:"Saved Bookmark",html:`Next time you open this chapter it will resume from:<h4>Page ${t}</h4>(Only <i>ONCE</i> per Bookmark, will be removed after a year unused)`,icon:"success"})),setValueGM("MangaBookmarks",JSON.stringify(settings.bookmarks)),logScript(`MangaBookmarks: ${getValueGM("MangaBookmarks")}`)}),$(".Reload").on("click",e=>{reloadImage($(e.target).parents(".MangaPage").find(".PageContent img"))}),$(".ZoomIn").on("click",e=>{const t=$(e.target).parents(".MangaPage").find(".PageContent img"),a=t.width()/t.prop("naturalWidth")*(100+settings.zoomStep);applyZoom(t,a)}),$(".ZoomOut").on("click",e=>{const t=$(e.target).parents(".MangaPage").find(".PageContent img"),a=t.width()/t.prop("naturalWidth")*(100-settings.zoomStep);applyZoom(t,a)}),$(".ZoomRestore").on("click",()=>{$(".PageContent img").removeAttr("width")}),$(".ZoomWidth").on("click",e=>{const t=$(e.target).parents(".MangaPage").find(".PageContent img");applyZoom(t,1e3)}),$(".ZoomHeight").on("click",e=>{const t=$(e.target).parents(".MangaPage").find(".PageContent img");applyZoom(t,-1e3)}),$(".Hide").on("click",e=>{$(e.target).parents(".MangaPage").find(".PageContent").slideToggle("slow")})}l(controls,"controls"),__name$3(controls,"controls");// @license MIT
var __defProp$2=Object.defineProperty,__name$2=l((e,t)=>__defProp$2(e,"name",{value:t,configurable:!0}),"__name$2");function display(e,t){window.stop(),e.before!==void 0&&e.before(),document.head.innerHTML=head(e),document.body.innerHTML=body(e,t),document.body.className="",document.body.removeAttribute("style"),logScript("Rebuilding Site"),setTimeout(()=>{try{controls(),setKeyDownEvents(),setTimeout(()=>{window.scrollTo(0,0),loadManga(e,t)},50),isNothing(settings.bookmarks.filter(a=>a.url===window.location.href))||(logScript(`Bookmark Removed ${window.location.href}`),settings.bookmarks=settings.bookmarks.filter(a=>a.url!==window.location.href),setValueGM("MangaBookmarks",JSON.stringify(settings.bookmarks)))}catch(a){logScript(a)}},50),e.after!==void 0&&e.after()}l(display,"display"),__name$2(display,"display");// @license MIT
var __defProp$1=Object.defineProperty,__name$1=l((e,t)=>__defProp$1(e,"name",{value:t,configurable:!0}),"__name$1");async function formatPage(e,t=0){display(e,t)}l(formatPage,"formatPage"),__name$1(formatPage,"formatPage");// @license MIT
var __defProp=Object.defineProperty,__name=l((e,t)=>__defProp(e,"name",{value:t,configurable:!0}),"__name");async function lateStart(e,t=1){const a=await e.run();logScript("LateStart");const o={title:"Starting<br>MangaOnlineViewer",input:"range",inputAttributes:{min:"1",max:a.pages.toString(),step:"1"},inputValue:t||1,text:"Choose the Page to start from:",showCancelButton:!0,cancelButtonColor:"#d33",reverseButtons:!0,icon:"question"};Swal.fire(o).then(n=>{n.value?(logScript(`Choice: ${n.value}`),formatPage(a,n.value-1)):logScript(n.dismiss)})}l(lateStart,"lateStart"),__name(lateStart,"lateStart");function createLateStartButton(e,t){const a=document.createElement("button");a.innerText="Start MangaOnlineViewer",a.id="StartMOV",a.onclick=()=>{lateStart(e,t)},document.body.appendChild(a);const o=`
#StartMOV {
    font-size: 20px;
    font-weight: bold;
    color: #fff;
    cursor: pointer;
    margin: 20px;
    padding: 10px 20px;
    text-align: center;
    border: none;
    background-size: 300% 100%;
    border-radius: 50px;
    transition: all 0.4s ease-in-out;
    background-image: linear-gradient(to right, #667eea, #764ba2, #6b8dd6, #8e37d7);
    box-shadow: 0 4px 15px 0 rgba(116, 79, 168, 0.75);
    position: fixed;
    top: 10px;
    right: 10px;
    z-index: 10000;
}

#StartMOV:hover {
    background-position: 100% 0;
    transition: all 0.4s ease-in-out;
}

#StartMOV:focus {
    outline: none;
}

`,n=document.createElement("style");n.appendChild(document.createTextNode(o)),document.head.appendChild(n),logScript("Start Button added to page",a)}l(createLateStartButton,"createLateStartButton"),__name(createLateStartButton,"createLateStartButton");function preparePage(e,t,a=0){var o,n;if(logScript(`Found Pages: ${t.pages}`),t.pages>0){let r=a;r===0&&(r=((n=(o=settings==null?void 0:settings.bookmarks)==null?void 0:o.find(c=>c.url===window.location.href))==null?void 0:n.page)||0);const s=document.createElement("style");switch(s.appendChild(document.createTextNode(sweetalertStyle)),document.body.appendChild(s),e.start||(settings==null?void 0:settings.loadMode)){case"never":createLateStartButton(e,r);break;case"always":formatPage(t,0);break;case"wait":default:Swal.fire({title:"Starting<br>MangaOnlineViewer",html:`${r>1?`Resuming reading from Page ${r}.<br/>`:""}Please wait, 3 seconds...`,showCancelButton:!0,cancelButtonColor:"#d33",reverseButtons:!0,timer:3e3}).then(c=>{c.value||c.dismiss===Swal.DismissReason.timer?formatPage(t,r):(createLateStartButton(e,r),logScript(c.dismiss))});break}}}l(preparePage,"preparePage"),__name(preparePage,"preparePage");async function waitExec(e,t=0){var a;if(t>=(e.waitMax||5e3)){preparePage(e,await e.run());return}if(e.waitAttr!==void 0){const o=(a=document.querySelector(e.waitAttr[0]))==null?void 0:a.getAttribute(e.waitAttr[1]);if(isNothing(o)){logScript(`Waiting for Attribute ${e.waitAttr[1]} of ${e.waitAttr[0]} = ${o}`),setTimeout(()=>{waitExec(e,t+(e.waitStep||1e3))},e.waitStep||1e3);return}logScript(`Found Attribute ${e.waitAttr[1]} of ${e.waitAttr[0]} = ${o}`)}if(e.waitEle!==void 0){const o=document.querySelector(e.waitEle);if(isNothing(o==null?void 0:o.tagName)){logScript(`Waiting for Element ${e.waitEle} = `,o),setTimeout(()=>{waitExec(e,t+(e.waitStep||1e3))},e.waitStep||1e3);return}logScript(`Found Element ${e.waitEle} = `,o)}if(e.waitVar!==void 0){const n=(typeof unsafeWindow!="undefined"?unsafeWindow:window)[e.waitVar];if(isNothing(n)){logScript(`Waiting for Variable ${e.waitVar} = ${n}`),setTimeout(()=>{waitExec(e,t+(e.waitStep||1e3))},e.waitStep||1e3);return}logScript(`Found Variable ${e.waitVar} = ${n}`)}preparePage(e,await e.run())}l(waitExec,"waitExec"),__name(waitExec,"waitExec");function start(e){logScript(`Starting ${getInfoGM.script.name} ${getInfoGM.script.version} on ${getBrowser()} with ${getEngine()}`),logScript(`${e.length} Known Manga Sites, Looking for a match...`);const t=e.find(a=>a.url.test(window.location.href));t?(logScript(`Found site: ${t.name}`),waitExec(t)):logScript("Sorry, didnt find any valid site")}l(start,"start"),__name(start,"start"),start(sites)})();
