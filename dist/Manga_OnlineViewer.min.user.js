// ==UserScript==
// @name          Manga OnlineViewer
// @author        Tago
// @updateURL     https://github.com/TagoDR/MangaOnlineViewer/raw/master/dist/Manga_OnlineViewer.meta.js
// @downloadURL   https://github.com/TagoDR/MangaOnlineViewer/raw/master/dist/Manga_OnlineViewer.user.js
// @supportURL    https://github.com/TagoDR/MangaOnlineViewer/issues
// @namespace     https://github.com/TagoDR
// @description   Shows all pages at once in online view for these sites: Asura Scans, Batoto, BilibiliComics, Comick, Comix.to, Dynasty-Scans, Flame Comics, Ikigai Mangas - EltaNews, Ikigai Mangas - Ajaco, Kagane, KuManga, LeerCapitulo, LHTranslation, Local Files, M440, MangaBuddy, MangaDex, MangaFox, MangaHere, Mangago, MangaHub, MangaKakalot, NeloManga, MangaNato, NatoManga, MangaBats, MangaBall, MangaOni, MangaPark, MangaReader, MangaToons, MangaTown, ManhwaWeb, MangaGeko.com, MangaGeko.cc, NineAnime, OlympusBiblioteca, QiManhwa, ReadComicsOnline, ReaperScans, TuMangaOnline, WebNovel, WebToons, WeebCentral, Vortex Scans, ZeroScans, MangaStream WordPress Plugin, Realm Oasis, Voids-Scans, Luminous Scans, Shimada Scans, Night Scans, Manhwa-Freak, OzulScansEn, CypherScans, MangaGalaxy, LuaScans, Drake Scans, Rizzfables, NovatoScans, TresDaos, Lectormiau, NTRGod, Threedaos, FoOlSlide, Kireicake, Madara WordPress Plugin, MangaHaus, Isekai Scan, Comic Kiba, Zinmanga, mangatx, Toonily, Mngazuki, JaiminisBox, DisasterScans, ManhuaPlus, TopManhua, NovelMic, Reset-Scans, LeviatanScans, Dragon Tea, SetsuScans, ToonGod, Hades Scans
// @version       2026.03.22.build-2219
// @license       MIT
// @icon          https://cdn-icons-png.flaticon.com/32/2281/2281832.png
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
// @include       /https?:\/\/(www.)?(asuracomic).(net)\/.+/
// @include       /https?:\/\/(?:www\.)?(?:fto|jto|hto|dto|mto|wto|bato|battwo|batotwo|comiko|batocomic|readtoto|zbato|xbato|mangatoto)\.(?:to|com|net|org)\/(chapter|title).*/
// @include       /https?:\/\/(www\.)?(bilibilicomics).net\/episode\/.+/
// @include       /https?:\/\/(www\.)?comick.io\/.+/
// @include       /https?:\/\/comix\.to\/(title|comic)\/.+\/.+/
// @include       /https?:\/\/(www\.)?dynasty-scans.com\/chapters\/.+/
// @include       /https?:\/\/(www.)?(flamecomics).(xyz)\/series\/.+/
// @include       /https?:\/\/(visorikigai|visualikigai).(ajaco|eltanews|foodib|jobswu).(com|net|site)\/capitulo\/\d+/
// @include       /https:\/\/(www\.)?kagane\.org\/series\/.+\/reader\/.+/
// @include       /https?:\/\/(www\.)?kumanga.com\/manga\/leer\/.+/
// @include       /https?:\/\/(www.)?leercapitulo.co\/leer\/.+/
// @include       /https?:\/\/(www\.)?lhtranslation.net\/read.+/
// @include       /(file:\/\/\/.+(index)?.html)/
// @include       /https?:\/\/(www\.)?m440.in\/manga\/.+\/.+\/\d+/
// @include       /https?:\/\/(www\.)?mangabuddy.com\/.+\/chapter.+/
// @include       /https?:\/\/(www\.)?mangadex.org/
// @include       /https?:\/\/(www\.)?(fanfox.net|mangahere.cc)\/manga\/.+\/.+\//
// @include       /https?:\/\/(www\.)?mangago.me\/.*\/.*\/.*/
// @include       /https?:\/\/(www\.)?(mangahub).io\/chapter\/.+\/.+/
// @include       /https?:\/\/(www\.)?(read|chap)?(nelomanga|mangakakalot|natomanga|manganato|mangabats|mangakakalove).(com|gg|net).*\/(chapter|manga)\/.+\/.+/
// @include       /https?:\/\/mangaball\.net\/chapter-detail\/.+/
// @include       /https?:\/\/(www\.)?manga-oni.com\/lector\/.+\/\d+\/cascada/
// @include       /https?:\/\/(www\.)?(mangapark|mpark|comicpark|readpark|parkmanga).(com|me|org|net|io|to)\/title\/.+\/.+/
// @include       /https?:\/\/(www\.)?mangareader.to\/read\/.+\/.+\/.+/
// @include       /https?:\/\/.*mangatoon.mobi\/.+\/watch\/.+/
// @include       /https?:\/\/www\.mangatown\.com\/manga\/.+\/.+\//
// @include       /https?:\/\/(www\.)?manhwaweb.com\/leer\/.+/
// @include       /https?:\/\/(www\.)?mgeko.(com|cc)?\/reader\/.*/
// @include       /https?:\/\/(www\.)?nineanime.com\/chapter\/.+/
// @include       /https?:\/\/(www\.)?olympusbiblioteca.com\/capitulo\/\d+\/.+/
// @include       /https?:\/\/qimanhwa\.com\/series\/[^/]+\/chapter-.+/
// @include       /https?:\/\/(www\.)?readcomicsonline.ru\/comic\/.*\/\d*/
// @include       /https?:\/\/(www\.)?reaperscans\.com\/series\/.+\/chapter.+/
// @include       /https?:\/\/(www\.)?(.+).com\/(viewer|news)\/.+\/(paginated|cascade)/
// @include       /https?:\/\/(www\.)?webnovel.com\/comic\/.+/
// @include       /https?:\/\/(www\.)?webtoons.com\/.+viewer.+/
// @include       /https?:\/\/(www\.)?(weebcentral).com\/chapters\/.+/
// @include       /https?:\/\/(www.)?(vortexscans).(org)\/.+/
// @include       /https?:\/\/(www\.)?zscans.com\/comics\/.+/
// @include       /https?:\/\/[^/]*(scans?|comic|realm|rizz|hivetoon|tresdaos|zonamiau|ntrgod|threedaos)[^/]*\/.+/
// @include       /^(?!.*jaiminisbox).*\/read\/.+/
// @include       /https?:\/\/.+\/(manga|series|manhua|comic|ch|novel|webtoon|tmo)\/.+\/.+/
// @exclude       /https?:\/\/(www\.)?tsumino.com\/.+/
// @exclude       /https?:\/\/(www\.)?pururin.io\/.+/
// ==/UserScript==
(function(){var Qf=Object.create,No=Object.defineProperty,e2=Object.getOwnPropertyDescriptor,t2=Object.getOwnPropertyNames,n2=Object.getPrototypeOf,r2=Object.prototype.hasOwnProperty,gn=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),eu=(e,t)=>{let r={};for(var o in e)No(r,o,{get:e[o],enumerable:!0});return t||No(r,Symbol.toStringTag,{value:"Module"}),r},i2=(e,t,r,o)=>{if(t&&typeof t=="object"||typeof t=="function")for(var a=t2(t),s=0,c=a.length,h;s<c;s++)h=a[s],!r2.call(e,h)&&h!==r&&No(e,h,{get:(u=>t[u]).bind(null,h),enumerable:!(o=e2(t,h))||o.enumerable});return e},Do=(e,t,r)=>(r=e!=null?Qf(n2(e)):{},i2(t||!e||!e.__esModule?No(r,"default",{value:e,enumerable:!0}):r,e)),o2=gn(((e,t)=>{(function(r,o){typeof e=="object"&&typeof t=="object"?t.exports=o():typeof define=="function"&&define.amd?define([],o):typeof e=="object"?e.bowser=o():r.bowser=o()})(e,(function(){return(function(r){var o={};function a(s){if(o[s])return o[s].exports;var c=o[s]={i:s,l:!1,exports:{}};return r[s].call(c.exports,c,c.exports,a),c.l=!0,c.exports}return a.m=r,a.c=o,a.d=function(s,c,h){a.o(s,c)||Object.defineProperty(s,c,{enumerable:!0,get:h})},a.r=function(s){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(s,"__esModule",{value:!0})},a.t=function(s,c){if(1&c&&(s=a(s)),8&c||4&c&&typeof s=="object"&&s&&s.__esModule)return s;var h=Object.create(null);if(a.r(h),Object.defineProperty(h,"default",{enumerable:!0,value:s}),2&c&&typeof s!="string")for(var u in s)a.d(h,u,function(f){return s[f]}.bind(null,u));return h},a.n=function(s){var c=s&&s.__esModule?function(){return s.default}:function(){return s};return a.d(c,"a",c),c},a.o=function(s,c){return Object.prototype.hasOwnProperty.call(s,c)},a.p="",a(a.s=90)})({17:function(r,o,a){"use strict";o.__esModule=!0,o.default=void 0;var s=a(18);o.default=(function(){function c(){}return c.getFirstMatch=function(h,u){var f=u.match(h);return f&&f.length>0&&f[1]||""},c.getSecondMatch=function(h,u){var f=u.match(h);return f&&f.length>1&&f[2]||""},c.matchAndReturnConst=function(h,u,f){if(h.test(u))return f},c.getWindowsVersionName=function(h){switch(h){case"NT":return"NT";case"XP":return"XP";case"NT 5.0":return"2000";case"NT 5.1":return"XP";case"NT 5.2":return"2003";case"NT 6.0":return"Vista";case"NT 6.1":return"7";case"NT 6.2":return"8";case"NT 6.3":return"8.1";case"NT 10.0":return"10";default:return}},c.getMacOSVersionName=function(h){var u=h.split(".").splice(0,2).map((function(b){return parseInt(b,10)||0}));u.push(0);var f=u[0],p=u[1];if(f===10)switch(p){case 5:return"Leopard";case 6:return"Snow Leopard";case 7:return"Lion";case 8:return"Mountain Lion";case 9:return"Mavericks";case 10:return"Yosemite";case 11:return"El Capitan";case 12:return"Sierra";case 13:return"High Sierra";case 14:return"Mojave";case 15:return"Catalina";default:return}switch(f){case 11:return"Big Sur";case 12:return"Monterey";case 13:return"Ventura";case 14:return"Sonoma";case 15:return"Sequoia";default:return}},c.getAndroidVersionName=function(h){var u=h.split(".").splice(0,2).map((function(f){return parseInt(f,10)||0}));if(u.push(0),!(u[0]===1&&u[1]<5))return u[0]===1&&u[1]<6?"Cupcake":u[0]===1&&u[1]>=6?"Donut":u[0]===2&&u[1]<2?"Eclair":u[0]===2&&u[1]===2?"Froyo":u[0]===2&&u[1]>2?"Gingerbread":u[0]===3?"Honeycomb":u[0]===4&&u[1]<1?"Ice Cream Sandwich":u[0]===4&&u[1]<4?"Jelly Bean":u[0]===4&&u[1]>=4?"KitKat":u[0]===5?"Lollipop":u[0]===6?"Marshmallow":u[0]===7?"Nougat":u[0]===8?"Oreo":u[0]===9?"Pie":void 0},c.getVersionPrecision=function(h){return h.split(".").length},c.compareVersions=function(h,u,f){f===void 0&&(f=!1);var p=c.getVersionPrecision(h),b=c.getVersionPrecision(u),w=Math.max(p,b),m=0,v=c.map([h,u],(function(E){var y=w-c.getVersionPrecision(E),S=E+new Array(y+1).join(".0");return c.map(S.split("."),(function(x){return new Array(20-x.length).join("0")+x})).reverse()}));for(f&&(m=w-Math.min(p,b)),w-=1;w>=m;){if(v[0][w]>v[1][w])return 1;if(v[0][w]===v[1][w]){if(w===m)return 0;w-=1}else if(v[0][w]<v[1][w])return-1}},c.map=function(h,u){var f,p=[];if(Array.prototype.map)return Array.prototype.map.call(h,u);for(f=0;f<h.length;f+=1)p.push(u(h[f]));return p},c.find=function(h,u){var f,p;if(Array.prototype.find)return Array.prototype.find.call(h,u);for(f=0,p=h.length;f<p;f+=1){var b=h[f];if(u(b,f))return b}},c.assign=function(h){for(var u,f,p=h,b=arguments.length,w=new Array(b>1?b-1:0),m=1;m<b;m++)w[m-1]=arguments[m];if(Object.assign)return Object.assign.apply(Object,[h].concat(w));var v=function(){var E=w[u];typeof E=="object"&&E!==null&&Object.keys(E).forEach((function(y){p[y]=E[y]}))};for(u=0,f=w.length;u<f;u+=1)v();return h},c.getBrowserAlias=function(h){return s.BROWSER_ALIASES_MAP[h]},c.getBrowserTypeByAlias=function(h){return s.BROWSER_MAP[h]||""},c})(),r.exports=o.default},18:function(r,o,a){"use strict";o.__esModule=!0,o.ENGINE_MAP=o.OS_MAP=o.PLATFORMS_MAP=o.BROWSER_MAP=o.BROWSER_ALIASES_MAP=void 0,o.BROWSER_ALIASES_MAP={AmazonBot:"amazonbot","Amazon Silk":"amazon_silk","Android Browser":"android",BaiduSpider:"baiduspider",Bada:"bada",BingCrawler:"bingcrawler",Brave:"brave",BlackBerry:"blackberry","ChatGPT-User":"chatgpt_user",Chrome:"chrome",ClaudeBot:"claudebot",Chromium:"chromium",Diffbot:"diffbot",DuckDuckBot:"duckduckbot",DuckDuckGo:"duckduckgo",Electron:"electron",Epiphany:"epiphany",FacebookExternalHit:"facebookexternalhit",Firefox:"firefox",Focus:"focus",Generic:"generic","Google Search":"google_search",Googlebot:"googlebot",GPTBot:"gptbot","Internet Explorer":"ie",InternetArchiveCrawler:"internetarchivecrawler","K-Meleon":"k_meleon",LibreWolf:"librewolf",Linespider:"linespider",Maxthon:"maxthon","Meta-ExternalAds":"meta_externalads","Meta-ExternalAgent":"meta_externalagent","Meta-ExternalFetcher":"meta_externalfetcher","Meta-WebIndexer":"meta_webindexer","Microsoft Edge":"edge","MZ Browser":"mz","NAVER Whale Browser":"naver","OAI-SearchBot":"oai_searchbot",Omgilibot:"omgilibot",Opera:"opera","Opera Coast":"opera_coast","Pale Moon":"pale_moon",PerplexityBot:"perplexitybot","Perplexity-User":"perplexity_user",PhantomJS:"phantomjs",PingdomBot:"pingdombot",Puffin:"puffin",QQ:"qq",QQLite:"qqlite",QupZilla:"qupzilla",Roku:"roku",Safari:"safari",Sailfish:"sailfish","Samsung Internet for Android":"samsung_internet",SlackBot:"slackbot",SeaMonkey:"seamonkey",Sleipnir:"sleipnir","Sogou Browser":"sogou",Swing:"swing",Tizen:"tizen","UC Browser":"uc",Vivaldi:"vivaldi","WebOS Browser":"webos",WeChat:"wechat",YahooSlurp:"yahooslurp","Yandex Browser":"yandex",YandexBot:"yandexbot",YouBot:"youbot"},o.BROWSER_MAP={amazonbot:"AmazonBot",amazon_silk:"Amazon Silk",android:"Android Browser",baiduspider:"BaiduSpider",bada:"Bada",bingcrawler:"BingCrawler",blackberry:"BlackBerry",brave:"Brave",chatgpt_user:"ChatGPT-User",chrome:"Chrome",claudebot:"ClaudeBot",chromium:"Chromium",diffbot:"Diffbot",duckduckbot:"DuckDuckBot",duckduckgo:"DuckDuckGo",edge:"Microsoft Edge",electron:"Electron",epiphany:"Epiphany",facebookexternalhit:"FacebookExternalHit",firefox:"Firefox",focus:"Focus",generic:"Generic",google_search:"Google Search",googlebot:"Googlebot",gptbot:"GPTBot",ie:"Internet Explorer",internetarchivecrawler:"InternetArchiveCrawler",k_meleon:"K-Meleon",librewolf:"LibreWolf",linespider:"Linespider",maxthon:"Maxthon",meta_externalads:"Meta-ExternalAds",meta_externalagent:"Meta-ExternalAgent",meta_externalfetcher:"Meta-ExternalFetcher",meta_webindexer:"Meta-WebIndexer",mz:"MZ Browser",naver:"NAVER Whale Browser",oai_searchbot:"OAI-SearchBot",omgilibot:"Omgilibot",opera:"Opera",opera_coast:"Opera Coast",pale_moon:"Pale Moon",perplexitybot:"PerplexityBot",perplexity_user:"Perplexity-User",phantomjs:"PhantomJS",pingdombot:"PingdomBot",puffin:"Puffin",qq:"QQ Browser",qqlite:"QQ Browser Lite",qupzilla:"QupZilla",roku:"Roku",safari:"Safari",sailfish:"Sailfish",samsung_internet:"Samsung Internet for Android",seamonkey:"SeaMonkey",slackbot:"SlackBot",sleipnir:"Sleipnir",sogou:"Sogou Browser",swing:"Swing",tizen:"Tizen",uc:"UC Browser",vivaldi:"Vivaldi",webos:"WebOS Browser",wechat:"WeChat",yahooslurp:"YahooSlurp",yandex:"Yandex Browser",yandexbot:"YandexBot",youbot:"YouBot"},o.PLATFORMS_MAP={bot:"bot",desktop:"desktop",mobile:"mobile",tablet:"tablet",tv:"tv"},o.OS_MAP={Android:"Android",Bada:"Bada",BlackBerry:"BlackBerry",ChromeOS:"Chrome OS",HarmonyOS:"HarmonyOS",iOS:"iOS",Linux:"Linux",MacOS:"macOS",PlayStation4:"PlayStation 4",Roku:"Roku",Tizen:"Tizen",WebOS:"WebOS",Windows:"Windows",WindowsPhone:"Windows Phone"},o.ENGINE_MAP={Blink:"Blink",EdgeHTML:"EdgeHTML",Gecko:"Gecko",Presto:"Presto",Trident:"Trident",WebKit:"WebKit"}},90:function(r,o,a){"use strict";o.__esModule=!0,o.default=void 0;var s,c=(s=a(91))&&s.__esModule?s:{default:s},h=a(18);function u(f,p){for(var b=0;b<p.length;b++){var w=p[b];w.enumerable=w.enumerable||!1,w.configurable=!0,"value"in w&&(w.writable=!0),Object.defineProperty(f,w.key,w)}}o.default=(function(){function f(){}var p,b,w;return f.getParser=function(m,v,E){if(v===void 0&&(v=!1),E===void 0&&(E=null),typeof m!="string")throw new Error("UserAgent should be a string");return new c.default(m,v,E)},f.parse=function(m,v){return v===void 0&&(v=null),new c.default(m,v).getResult()},p=f,w=[{key:"BROWSER_MAP",get:function(){return h.BROWSER_MAP}},{key:"ENGINE_MAP",get:function(){return h.ENGINE_MAP}},{key:"OS_MAP",get:function(){return h.OS_MAP}},{key:"PLATFORMS_MAP",get:function(){return h.PLATFORMS_MAP}}],(b=null)&&u(p.prototype,b),w&&u(p,w),f})(),r.exports=o.default},91:function(r,o,a){"use strict";o.__esModule=!0,o.default=void 0;var s=p(a(92)),c=p(a(93)),h=p(a(94)),u=p(a(95)),f=p(a(17));function p(b){return b&&b.__esModule?b:{default:b}}o.default=(function(){function b(m,v,E){if(v===void 0&&(v=!1),E===void 0&&(E=null),m==null||m==="")throw new Error("UserAgent parameter can't be empty");this._ua=m;var y=!1;typeof v=="boolean"?(y=v,this._hints=E):this._hints=v!=null&&typeof v=="object"?v:null,this.parsedResult={},y!==!0&&this.parse()}var w=b.prototype;return w.getHints=function(){return this._hints},w.hasBrand=function(m){if(!this._hints||!Array.isArray(this._hints.brands))return!1;var v=m.toLowerCase();return this._hints.brands.some((function(E){return E.brand&&E.brand.toLowerCase()===v}))},w.getBrandVersion=function(m){if(this._hints&&Array.isArray(this._hints.brands)){var v=m.toLowerCase(),E=this._hints.brands.find((function(y){return y.brand&&y.brand.toLowerCase()===v}));return E?E.version:void 0}},w.getUA=function(){return this._ua},w.test=function(m){return m.test(this._ua)},w.parseBrowser=function(){var m=this;this.parsedResult.browser={};var v=f.default.find(s.default,(function(E){if(typeof E.test=="function")return E.test(m);if(Array.isArray(E.test))return E.test.some((function(y){return m.test(y)}));throw new Error("Browser's test function is not valid")}));return v&&(this.parsedResult.browser=v.describe(this.getUA(),this)),this.parsedResult.browser},w.getBrowser=function(){return this.parsedResult.browser?this.parsedResult.browser:this.parseBrowser()},w.getBrowserName=function(m){return m?String(this.getBrowser().name).toLowerCase()||"":this.getBrowser().name||""},w.getBrowserVersion=function(){return this.getBrowser().version},w.getOS=function(){return this.parsedResult.os?this.parsedResult.os:this.parseOS()},w.parseOS=function(){var m=this;this.parsedResult.os={};var v=f.default.find(c.default,(function(E){if(typeof E.test=="function")return E.test(m);if(Array.isArray(E.test))return E.test.some((function(y){return m.test(y)}));throw new Error("Browser's test function is not valid")}));return v&&(this.parsedResult.os=v.describe(this.getUA())),this.parsedResult.os},w.getOSName=function(m){var v=this.getOS().name;return m?String(v).toLowerCase()||"":v||""},w.getOSVersion=function(){return this.getOS().version},w.getPlatform=function(){return this.parsedResult.platform?this.parsedResult.platform:this.parsePlatform()},w.getPlatformType=function(m){m===void 0&&(m=!1);var v=this.getPlatform().type;return m?String(v).toLowerCase()||"":v||""},w.parsePlatform=function(){var m=this;this.parsedResult.platform={};var v=f.default.find(h.default,(function(E){if(typeof E.test=="function")return E.test(m);if(Array.isArray(E.test))return E.test.some((function(y){return m.test(y)}));throw new Error("Browser's test function is not valid")}));return v&&(this.parsedResult.platform=v.describe(this.getUA())),this.parsedResult.platform},w.getEngine=function(){return this.parsedResult.engine?this.parsedResult.engine:this.parseEngine()},w.getEngineName=function(m){return m?String(this.getEngine().name).toLowerCase()||"":this.getEngine().name||""},w.parseEngine=function(){var m=this;this.parsedResult.engine={};var v=f.default.find(u.default,(function(E){if(typeof E.test=="function")return E.test(m);if(Array.isArray(E.test))return E.test.some((function(y){return m.test(y)}));throw new Error("Browser's test function is not valid")}));return v&&(this.parsedResult.engine=v.describe(this.getUA())),this.parsedResult.engine},w.parse=function(){return this.parseBrowser(),this.parseOS(),this.parsePlatform(),this.parseEngine(),this},w.getResult=function(){return f.default.assign({},this.parsedResult)},w.satisfies=function(m){var v=this,E={},y=0,S={},x=0;if(Object.keys(m).forEach((function(pe){var _e=m[pe];typeof _e=="string"?(S[pe]=_e,x+=1):typeof _e=="object"&&(E[pe]=_e,y+=1)})),y>0){var T=Object.keys(E),L=f.default.find(T,(function(pe){return v.isOS(pe)}));if(L){var z=this.satisfies(E[L]);if(z!==void 0)return z}var q=f.default.find(T,(function(pe){return v.isPlatform(pe)}));if(q){var W=this.satisfies(E[q]);if(W!==void 0)return W}}if(x>0){var oe=Object.keys(S),H=f.default.find(oe,(function(pe){return v.isBrowser(pe,!0)}));if(H!==void 0)return this.compareVersion(S[H])}},w.isBrowser=function(m,v){v===void 0&&(v=!1);var E=this.getBrowserName().toLowerCase(),y=m.toLowerCase(),S=f.default.getBrowserTypeByAlias(y);return v&&S&&(y=S.toLowerCase()),y===E},w.compareVersion=function(m){var v=[0],E=m,y=!1,S=this.getBrowserVersion();if(typeof S=="string")return m[0]===">"||m[0]==="<"?(E=m.substr(1),m[1]==="="?(y=!0,E=m.substr(2)):v=[],m[0]===">"?v.push(1):v.push(-1)):m[0]==="="?E=m.substr(1):m[0]==="~"&&(y=!0,E=m.substr(1)),v.indexOf(f.default.compareVersions(S,E,y))>-1},w.isOS=function(m){return this.getOSName(!0)===String(m).toLowerCase()},w.isPlatform=function(m){return this.getPlatformType(!0)===String(m).toLowerCase()},w.isEngine=function(m){return this.getEngineName(!0)===String(m).toLowerCase()},w.is=function(m,v){return v===void 0&&(v=!1),this.isBrowser(m,v)||this.isOS(m)||this.isPlatform(m)},w.some=function(m){var v=this;return m===void 0&&(m=[]),m.some((function(E){return v.is(E)}))},b})(),r.exports=o.default},92:function(r,o,a){"use strict";o.__esModule=!0,o.default=void 0;var s,c=(s=a(17))&&s.__esModule?s:{default:s},h=/version\/(\d+(\.?_?\d+)+)/i;o.default=[{test:[/gptbot/i],describe:function(u){var f={name:"GPTBot"},p=c.default.getFirstMatch(/gptbot\/(\d+(\.\d+)+)/i,u)||c.default.getFirstMatch(h,u);return p&&(f.version=p),f}},{test:[/chatgpt-user/i],describe:function(u){var f={name:"ChatGPT-User"},p=c.default.getFirstMatch(/chatgpt-user\/(\d+(\.\d+)+)/i,u)||c.default.getFirstMatch(h,u);return p&&(f.version=p),f}},{test:[/oai-searchbot/i],describe:function(u){var f={name:"OAI-SearchBot"},p=c.default.getFirstMatch(/oai-searchbot\/(\d+(\.\d+)+)/i,u)||c.default.getFirstMatch(h,u);return p&&(f.version=p),f}},{test:[/claudebot/i,/claude-web/i,/claude-user/i,/claude-searchbot/i],describe:function(u){var f={name:"ClaudeBot"},p=c.default.getFirstMatch(/(?:claudebot|claude-web|claude-user|claude-searchbot)\/(\d+(\.\d+)+)/i,u)||c.default.getFirstMatch(h,u);return p&&(f.version=p),f}},{test:[/omgilibot/i,/webzio-extended/i],describe:function(u){var f={name:"Omgilibot"},p=c.default.getFirstMatch(/(?:omgilibot|webzio-extended)\/(\d+(\.\d+)+)/i,u)||c.default.getFirstMatch(h,u);return p&&(f.version=p),f}},{test:[/diffbot/i],describe:function(u){var f={name:"Diffbot"},p=c.default.getFirstMatch(/diffbot\/(\d+(\.\d+)+)/i,u)||c.default.getFirstMatch(h,u);return p&&(f.version=p),f}},{test:[/perplexitybot/i],describe:function(u){var f={name:"PerplexityBot"},p=c.default.getFirstMatch(/perplexitybot\/(\d+(\.\d+)+)/i,u)||c.default.getFirstMatch(h,u);return p&&(f.version=p),f}},{test:[/perplexity-user/i],describe:function(u){var f={name:"Perplexity-User"},p=c.default.getFirstMatch(/perplexity-user\/(\d+(\.\d+)+)/i,u)||c.default.getFirstMatch(h,u);return p&&(f.version=p),f}},{test:[/youbot/i],describe:function(u){var f={name:"YouBot"},p=c.default.getFirstMatch(/youbot\/(\d+(\.\d+)+)/i,u)||c.default.getFirstMatch(h,u);return p&&(f.version=p),f}},{test:[/meta-webindexer/i],describe:function(u){var f={name:"Meta-WebIndexer"},p=c.default.getFirstMatch(/meta-webindexer\/(\d+(\.\d+)+)/i,u)||c.default.getFirstMatch(h,u);return p&&(f.version=p),f}},{test:[/meta-externalads/i],describe:function(u){var f={name:"Meta-ExternalAds"},p=c.default.getFirstMatch(/meta-externalads\/(\d+(\.\d+)+)/i,u)||c.default.getFirstMatch(h,u);return p&&(f.version=p),f}},{test:[/meta-externalagent/i],describe:function(u){var f={name:"Meta-ExternalAgent"},p=c.default.getFirstMatch(/meta-externalagent\/(\d+(\.\d+)+)/i,u)||c.default.getFirstMatch(h,u);return p&&(f.version=p),f}},{test:[/meta-externalfetcher/i],describe:function(u){var f={name:"Meta-ExternalFetcher"},p=c.default.getFirstMatch(/meta-externalfetcher\/(\d+(\.\d+)+)/i,u)||c.default.getFirstMatch(h,u);return p&&(f.version=p),f}},{test:[/googlebot/i],describe:function(u){var f={name:"Googlebot"},p=c.default.getFirstMatch(/googlebot\/(\d+(\.\d+))/i,u)||c.default.getFirstMatch(h,u);return p&&(f.version=p),f}},{test:[/linespider/i],describe:function(u){var f={name:"Linespider"},p=c.default.getFirstMatch(/(?:linespider)(?:-[-\w]+)?[\s/](\d+(\.\d+)+)/i,u)||c.default.getFirstMatch(h,u);return p&&(f.version=p),f}},{test:[/amazonbot/i],describe:function(u){var f={name:"AmazonBot"},p=c.default.getFirstMatch(/amazonbot\/(\d+(\.\d+)+)/i,u)||c.default.getFirstMatch(h,u);return p&&(f.version=p),f}},{test:[/bingbot/i],describe:function(u){var f={name:"BingCrawler"},p=c.default.getFirstMatch(/bingbot\/(\d+(\.\d+)+)/i,u)||c.default.getFirstMatch(h,u);return p&&(f.version=p),f}},{test:[/baiduspider/i],describe:function(u){var f={name:"BaiduSpider"},p=c.default.getFirstMatch(/baiduspider\/(\d+(\.\d+)+)/i,u)||c.default.getFirstMatch(h,u);return p&&(f.version=p),f}},{test:[/duckduckbot/i],describe:function(u){var f={name:"DuckDuckBot"},p=c.default.getFirstMatch(/duckduckbot\/(\d+(\.\d+)+)/i,u)||c.default.getFirstMatch(h,u);return p&&(f.version=p),f}},{test:[/ia_archiver/i],describe:function(u){var f={name:"InternetArchiveCrawler"},p=c.default.getFirstMatch(/ia_archiver\/(\d+(\.\d+)+)/i,u)||c.default.getFirstMatch(h,u);return p&&(f.version=p),f}},{test:[/facebookexternalhit/i,/facebookcatalog/i],describe:function(){return{name:"FacebookExternalHit"}}},{test:[/slackbot/i,/slack-imgProxy/i],describe:function(u){var f={name:"SlackBot"},p=c.default.getFirstMatch(/(?:slackbot|slack-imgproxy)(?:-[-\w]+)?[\s/](\d+(\.\d+)+)/i,u)||c.default.getFirstMatch(h,u);return p&&(f.version=p),f}},{test:[/yahoo!?[\s/]*slurp/i],describe:function(){return{name:"YahooSlurp"}}},{test:[/yandexbot/i,/yandexmobilebot/i],describe:function(){return{name:"YandexBot"}}},{test:[/pingdom/i],describe:function(){return{name:"PingdomBot"}}},{test:[/opera/i],describe:function(u){var f={name:"Opera"},p=c.default.getFirstMatch(h,u)||c.default.getFirstMatch(/(?:opera)[\s/](\d+(\.?_?\d+)+)/i,u);return p&&(f.version=p),f}},{test:[/opr\/|opios/i],describe:function(u){var f={name:"Opera"},p=c.default.getFirstMatch(/(?:opr|opios)[\s/](\S+)/i,u)||c.default.getFirstMatch(h,u);return p&&(f.version=p),f}},{test:[/SamsungBrowser/i],describe:function(u){var f={name:"Samsung Internet for Android"},p=c.default.getFirstMatch(h,u)||c.default.getFirstMatch(/(?:SamsungBrowser)[\s/](\d+(\.?_?\d+)+)/i,u);return p&&(f.version=p),f}},{test:[/Whale/i],describe:function(u){var f={name:"NAVER Whale Browser"},p=c.default.getFirstMatch(h,u)||c.default.getFirstMatch(/(?:whale)[\s/](\d+(?:\.\d+)+)/i,u);return p&&(f.version=p),f}},{test:[/PaleMoon/i],describe:function(u){var f={name:"Pale Moon"},p=c.default.getFirstMatch(h,u)||c.default.getFirstMatch(/(?:PaleMoon)[\s/](\d+(?:\.\d+)+)/i,u);return p&&(f.version=p),f}},{test:[/MZBrowser/i],describe:function(u){var f={name:"MZ Browser"},p=c.default.getFirstMatch(/(?:MZBrowser)[\s/](\d+(?:\.\d+)+)/i,u)||c.default.getFirstMatch(h,u);return p&&(f.version=p),f}},{test:[/focus/i],describe:function(u){var f={name:"Focus"},p=c.default.getFirstMatch(/(?:focus)[\s/](\d+(?:\.\d+)+)/i,u)||c.default.getFirstMatch(h,u);return p&&(f.version=p),f}},{test:[/swing/i],describe:function(u){var f={name:"Swing"},p=c.default.getFirstMatch(/(?:swing)[\s/](\d+(?:\.\d+)+)/i,u)||c.default.getFirstMatch(h,u);return p&&(f.version=p),f}},{test:[/coast/i],describe:function(u){var f={name:"Opera Coast"},p=c.default.getFirstMatch(h,u)||c.default.getFirstMatch(/(?:coast)[\s/](\d+(\.?_?\d+)+)/i,u);return p&&(f.version=p),f}},{test:[/opt\/\d+(?:.?_?\d+)+/i],describe:function(u){var f={name:"Opera Touch"},p=c.default.getFirstMatch(/(?:opt)[\s/](\d+(\.?_?\d+)+)/i,u)||c.default.getFirstMatch(h,u);return p&&(f.version=p),f}},{test:[/yabrowser/i],describe:function(u){var f={name:"Yandex Browser"},p=c.default.getFirstMatch(/(?:yabrowser)[\s/](\d+(\.?_?\d+)+)/i,u)||c.default.getFirstMatch(h,u);return p&&(f.version=p),f}},{test:[/ucbrowser/i],describe:function(u){var f={name:"UC Browser"},p=c.default.getFirstMatch(h,u)||c.default.getFirstMatch(/(?:ucbrowser)[\s/](\d+(\.?_?\d+)+)/i,u);return p&&(f.version=p),f}},{test:[/Maxthon|mxios/i],describe:function(u){var f={name:"Maxthon"},p=c.default.getFirstMatch(h,u)||c.default.getFirstMatch(/(?:Maxthon|mxios)[\s/](\d+(\.?_?\d+)+)/i,u);return p&&(f.version=p),f}},{test:[/epiphany/i],describe:function(u){var f={name:"Epiphany"},p=c.default.getFirstMatch(h,u)||c.default.getFirstMatch(/(?:epiphany)[\s/](\d+(\.?_?\d+)+)/i,u);return p&&(f.version=p),f}},{test:[/puffin/i],describe:function(u){var f={name:"Puffin"},p=c.default.getFirstMatch(h,u)||c.default.getFirstMatch(/(?:puffin)[\s/](\d+(\.?_?\d+)+)/i,u);return p&&(f.version=p),f}},{test:[/sleipnir/i],describe:function(u){var f={name:"Sleipnir"},p=c.default.getFirstMatch(h,u)||c.default.getFirstMatch(/(?:sleipnir)[\s/](\d+(\.?_?\d+)+)/i,u);return p&&(f.version=p),f}},{test:[/k-meleon/i],describe:function(u){var f={name:"K-Meleon"},p=c.default.getFirstMatch(h,u)||c.default.getFirstMatch(/(?:k-meleon)[\s/](\d+(\.?_?\d+)+)/i,u);return p&&(f.version=p),f}},{test:[/micromessenger/i],describe:function(u){var f={name:"WeChat"},p=c.default.getFirstMatch(/(?:micromessenger)[\s/](\d+(\.?_?\d+)+)/i,u)||c.default.getFirstMatch(h,u);return p&&(f.version=p),f}},{test:[/qqbrowser/i],describe:function(u){var f={name:/qqbrowserlite/i.test(u)?"QQ Browser Lite":"QQ Browser"},p=c.default.getFirstMatch(/(?:qqbrowserlite|qqbrowser)[/](\d+(\.?_?\d+)+)/i,u)||c.default.getFirstMatch(h,u);return p&&(f.version=p),f}},{test:[/msie|trident/i],describe:function(u){var f={name:"Internet Explorer"},p=c.default.getFirstMatch(/(?:msie |rv:)(\d+(\.?_?\d+)+)/i,u);return p&&(f.version=p),f}},{test:[/\sedg\//i],describe:function(u){var f={name:"Microsoft Edge"},p=c.default.getFirstMatch(/\sedg\/(\d+(\.?_?\d+)+)/i,u);return p&&(f.version=p),f}},{test:[/edg([ea]|ios)/i],describe:function(u){var f={name:"Microsoft Edge"},p=c.default.getSecondMatch(/edg([ea]|ios)\/(\d+(\.?_?\d+)+)/i,u);return p&&(f.version=p),f}},{test:[/vivaldi/i],describe:function(u){var f={name:"Vivaldi"},p=c.default.getFirstMatch(/vivaldi\/(\d+(\.?_?\d+)+)/i,u);return p&&(f.version=p),f}},{test:[/seamonkey/i],describe:function(u){var f={name:"SeaMonkey"},p=c.default.getFirstMatch(/seamonkey\/(\d+(\.?_?\d+)+)/i,u);return p&&(f.version=p),f}},{test:[/sailfish/i],describe:function(u){var f={name:"Sailfish"},p=c.default.getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i,u);return p&&(f.version=p),f}},{test:[/silk/i],describe:function(u){var f={name:"Amazon Silk"},p=c.default.getFirstMatch(/silk\/(\d+(\.?_?\d+)+)/i,u);return p&&(f.version=p),f}},{test:[/phantom/i],describe:function(u){var f={name:"PhantomJS"},p=c.default.getFirstMatch(/phantomjs\/(\d+(\.?_?\d+)+)/i,u);return p&&(f.version=p),f}},{test:[/slimerjs/i],describe:function(u){var f={name:"SlimerJS"},p=c.default.getFirstMatch(/slimerjs\/(\d+(\.?_?\d+)+)/i,u);return p&&(f.version=p),f}},{test:[/blackberry|\bbb\d+/i,/rim\stablet/i],describe:function(u){var f={name:"BlackBerry"},p=c.default.getFirstMatch(h,u)||c.default.getFirstMatch(/blackberry[\d]+\/(\d+(\.?_?\d+)+)/i,u);return p&&(f.version=p),f}},{test:[/(web|hpw)[o0]s/i],describe:function(u){var f={name:"WebOS Browser"},p=c.default.getFirstMatch(h,u)||c.default.getFirstMatch(/w(?:eb)?[o0]sbrowser\/(\d+(\.?_?\d+)+)/i,u);return p&&(f.version=p),f}},{test:[/bada/i],describe:function(u){var f={name:"Bada"},p=c.default.getFirstMatch(/dolfin\/(\d+(\.?_?\d+)+)/i,u);return p&&(f.version=p),f}},{test:[/tizen/i],describe:function(u){var f={name:"Tizen"},p=c.default.getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.?_?\d+)+)/i,u)||c.default.getFirstMatch(h,u);return p&&(f.version=p),f}},{test:[/qupzilla/i],describe:function(u){var f={name:"QupZilla"},p=c.default.getFirstMatch(/(?:qupzilla)[\s/](\d+(\.?_?\d+)+)/i,u)||c.default.getFirstMatch(h,u);return p&&(f.version=p),f}},{test:[/librewolf/i],describe:function(u){var f={name:"LibreWolf"},p=c.default.getFirstMatch(/(?:librewolf)[\s/](\d+(\.?_?\d+)+)/i,u);return p&&(f.version=p),f}},{test:[/firefox|iceweasel|fxios/i],describe:function(u){var f={name:"Firefox"},p=c.default.getFirstMatch(/(?:firefox|iceweasel|fxios)[\s/](\d+(\.?_?\d+)+)/i,u);return p&&(f.version=p),f}},{test:[/electron/i],describe:function(u){var f={name:"Electron"},p=c.default.getFirstMatch(/(?:electron)\/(\d+(\.?_?\d+)+)/i,u);return p&&(f.version=p),f}},{test:[/sogoumobilebrowser/i,/metasr/i,/se 2\.[x]/i],describe:function(u){var f={name:"Sogou Browser"},p=c.default.getFirstMatch(/(?:sogoumobilebrowser)[\s/](\d+(\.?_?\d+)+)/i,u),b=c.default.getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i,u),w=c.default.getFirstMatch(/se ([\d.]+)x/i,u),m=p||b||w;return m&&(f.version=m),f}},{test:[/MiuiBrowser/i],describe:function(u){var f={name:"Miui"},p=c.default.getFirstMatch(/(?:MiuiBrowser)[\s/](\d+(\.?_?\d+)+)/i,u);return p&&(f.version=p),f}},{test:function(u){return!!u.hasBrand("DuckDuckGo")||u.test(/\sDdg\/[\d.]+$/i)},describe:function(u,f){var p={name:"DuckDuckGo"};if(f){var b=f.getBrandVersion("DuckDuckGo");if(b)return p.version=b,p}var w=c.default.getFirstMatch(/\sDdg\/([\d.]+)$/i,u);return w&&(p.version=w),p}},{test:function(u){return u.hasBrand("Brave")},describe:function(u,f){var p={name:"Brave"};if(f){var b=f.getBrandVersion("Brave");if(b)return p.version=b,p}return p}},{test:[/chromium/i],describe:function(u){var f={name:"Chromium"},p=c.default.getFirstMatch(/(?:chromium)[\s/](\d+(\.?_?\d+)+)/i,u)||c.default.getFirstMatch(h,u);return p&&(f.version=p),f}},{test:[/chrome|crios|crmo/i],describe:function(u){var f={name:"Chrome"},p=c.default.getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i,u);return p&&(f.version=p),f}},{test:[/GSA/i],describe:function(u){var f={name:"Google Search"},p=c.default.getFirstMatch(/(?:GSA)\/(\d+(\.?_?\d+)+)/i,u);return p&&(f.version=p),f}},{test:function(u){var f=!u.test(/like android/i),p=u.test(/android/i);return f&&p},describe:function(u){var f={name:"Android Browser"},p=c.default.getFirstMatch(h,u);return p&&(f.version=p),f}},{test:[/playstation 4/i],describe:function(u){var f={name:"PlayStation 4"},p=c.default.getFirstMatch(h,u);return p&&(f.version=p),f}},{test:[/safari|applewebkit/i],describe:function(u){var f={name:"Safari"},p=c.default.getFirstMatch(h,u);return p&&(f.version=p),f}},{test:[/.*/i],describe:function(u){var f=u.search("\\(")!==-1?/^(.*)\/(.*)[ \t]\((.*)/:/^(.*)\/(.*) /;return{name:c.default.getFirstMatch(f,u),version:c.default.getSecondMatch(f,u)}}}],r.exports=o.default},93:function(r,o,a){"use strict";o.__esModule=!0,o.default=void 0;var s,c=(s=a(17))&&s.__esModule?s:{default:s},h=a(18);o.default=[{test:[/Roku\/DVP/],describe:function(u){var f=c.default.getFirstMatch(/Roku\/DVP-(\d+\.\d+)/i,u);return{name:h.OS_MAP.Roku,version:f}}},{test:[/windows phone/i],describe:function(u){var f=c.default.getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i,u);return{name:h.OS_MAP.WindowsPhone,version:f}}},{test:[/windows /i],describe:function(u){var f=c.default.getFirstMatch(/Windows ((NT|XP)( \d\d?.\d)?)/i,u),p=c.default.getWindowsVersionName(f);return{name:h.OS_MAP.Windows,version:f,versionName:p}}},{test:[/Macintosh(.*?) FxiOS(.*?)\//],describe:function(u){var f={name:h.OS_MAP.iOS},p=c.default.getSecondMatch(/(Version\/)(\d[\d.]+)/,u);return p&&(f.version=p),f}},{test:[/macintosh/i],describe:function(u){var f=c.default.getFirstMatch(/mac os x (\d+(\.?_?\d+)+)/i,u).replace(/[_\s]/g,"."),p=c.default.getMacOSVersionName(f),b={name:h.OS_MAP.MacOS,version:f};return p&&(b.versionName=p),b}},{test:[/(ipod|iphone|ipad)/i],describe:function(u){var f=c.default.getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i,u).replace(/[_\s]/g,".");return{name:h.OS_MAP.iOS,version:f}}},{test:[/OpenHarmony/i],describe:function(u){var f=c.default.getFirstMatch(/OpenHarmony\s+(\d+(\.\d+)*)/i,u);return{name:h.OS_MAP.HarmonyOS,version:f}}},{test:function(u){var f=!u.test(/like android/i),p=u.test(/android/i);return f&&p},describe:function(u){var f=c.default.getFirstMatch(/android[\s/-](\d+(\.\d+)*)/i,u),p=c.default.getAndroidVersionName(f),b={name:h.OS_MAP.Android,version:f};return p&&(b.versionName=p),b}},{test:[/(web|hpw)[o0]s/i],describe:function(u){var f=c.default.getFirstMatch(/(?:web|hpw)[o0]s\/(\d+(\.\d+)*)/i,u),p={name:h.OS_MAP.WebOS};return f&&f.length&&(p.version=f),p}},{test:[/blackberry|\bbb\d+/i,/rim\stablet/i],describe:function(u){var f=c.default.getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i,u)||c.default.getFirstMatch(/blackberry\d+\/(\d+([_\s]\d+)*)/i,u)||c.default.getFirstMatch(/\bbb(\d+)/i,u);return{name:h.OS_MAP.BlackBerry,version:f}}},{test:[/bada/i],describe:function(u){var f=c.default.getFirstMatch(/bada\/(\d+(\.\d+)*)/i,u);return{name:h.OS_MAP.Bada,version:f}}},{test:[/tizen/i],describe:function(u){var f=c.default.getFirstMatch(/tizen[/\s](\d+(\.\d+)*)/i,u);return{name:h.OS_MAP.Tizen,version:f}}},{test:[/linux/i],describe:function(){return{name:h.OS_MAP.Linux}}},{test:[/CrOS/],describe:function(){return{name:h.OS_MAP.ChromeOS}}},{test:[/PlayStation 4/],describe:function(u){var f=c.default.getFirstMatch(/PlayStation 4[/\s](\d+(\.\d+)*)/i,u);return{name:h.OS_MAP.PlayStation4,version:f}}}],r.exports=o.default},94:function(r,o,a){"use strict";o.__esModule=!0,o.default=void 0;var s,c=(s=a(17))&&s.__esModule?s:{default:s},h=a(18);o.default=[{test:[/googlebot/i],describe:function(){return{type:h.PLATFORMS_MAP.bot,vendor:"Google"}}},{test:[/linespider/i],describe:function(){return{type:h.PLATFORMS_MAP.bot,vendor:"Line"}}},{test:[/amazonbot/i],describe:function(){return{type:h.PLATFORMS_MAP.bot,vendor:"Amazon"}}},{test:[/gptbot/i],describe:function(){return{type:h.PLATFORMS_MAP.bot,vendor:"OpenAI"}}},{test:[/chatgpt-user/i],describe:function(){return{type:h.PLATFORMS_MAP.bot,vendor:"OpenAI"}}},{test:[/oai-searchbot/i],describe:function(){return{type:h.PLATFORMS_MAP.bot,vendor:"OpenAI"}}},{test:[/baiduspider/i],describe:function(){return{type:h.PLATFORMS_MAP.bot,vendor:"Baidu"}}},{test:[/bingbot/i],describe:function(){return{type:h.PLATFORMS_MAP.bot,vendor:"Bing"}}},{test:[/duckduckbot/i],describe:function(){return{type:h.PLATFORMS_MAP.bot,vendor:"DuckDuckGo"}}},{test:[/claudebot/i,/claude-web/i,/claude-user/i,/claude-searchbot/i],describe:function(){return{type:h.PLATFORMS_MAP.bot,vendor:"Anthropic"}}},{test:[/omgilibot/i,/webzio-extended/i],describe:function(){return{type:h.PLATFORMS_MAP.bot,vendor:"Webz.io"}}},{test:[/diffbot/i],describe:function(){return{type:h.PLATFORMS_MAP.bot,vendor:"Diffbot"}}},{test:[/perplexitybot/i],describe:function(){return{type:h.PLATFORMS_MAP.bot,vendor:"Perplexity AI"}}},{test:[/perplexity-user/i],describe:function(){return{type:h.PLATFORMS_MAP.bot,vendor:"Perplexity AI"}}},{test:[/youbot/i],describe:function(){return{type:h.PLATFORMS_MAP.bot,vendor:"You.com"}}},{test:[/ia_archiver/i],describe:function(){return{type:h.PLATFORMS_MAP.bot,vendor:"Internet Archive"}}},{test:[/meta-webindexer/i],describe:function(){return{type:h.PLATFORMS_MAP.bot,vendor:"Meta"}}},{test:[/meta-externalads/i],describe:function(){return{type:h.PLATFORMS_MAP.bot,vendor:"Meta"}}},{test:[/meta-externalagent/i],describe:function(){return{type:h.PLATFORMS_MAP.bot,vendor:"Meta"}}},{test:[/meta-externalfetcher/i],describe:function(){return{type:h.PLATFORMS_MAP.bot,vendor:"Meta"}}},{test:[/facebookexternalhit/i,/facebookcatalog/i],describe:function(){return{type:h.PLATFORMS_MAP.bot,vendor:"Meta"}}},{test:[/slackbot/i,/slack-imgProxy/i],describe:function(){return{type:h.PLATFORMS_MAP.bot,vendor:"Slack"}}},{test:[/yahoo/i],describe:function(){return{type:h.PLATFORMS_MAP.bot,vendor:"Yahoo"}}},{test:[/yandexbot/i,/yandexmobilebot/i],describe:function(){return{type:h.PLATFORMS_MAP.bot,vendor:"Yandex"}}},{test:[/pingdom/i],describe:function(){return{type:h.PLATFORMS_MAP.bot,vendor:"Pingdom"}}},{test:[/huawei/i],describe:function(u){var f=c.default.getFirstMatch(/(can-l01)/i,u)&&"Nova",p={type:h.PLATFORMS_MAP.mobile,vendor:"Huawei"};return f&&(p.model=f),p}},{test:[/nexus\s*(?:7|8|9|10).*/i],describe:function(){return{type:h.PLATFORMS_MAP.tablet,vendor:"Nexus"}}},{test:[/ipad/i],describe:function(){return{type:h.PLATFORMS_MAP.tablet,vendor:"Apple",model:"iPad"}}},{test:[/Macintosh(.*?) FxiOS(.*?)\//],describe:function(){return{type:h.PLATFORMS_MAP.tablet,vendor:"Apple",model:"iPad"}}},{test:[/kftt build/i],describe:function(){return{type:h.PLATFORMS_MAP.tablet,vendor:"Amazon",model:"Kindle Fire HD 7"}}},{test:[/silk/i],describe:function(){return{type:h.PLATFORMS_MAP.tablet,vendor:"Amazon"}}},{test:[/tablet(?! pc)/i],describe:function(){return{type:h.PLATFORMS_MAP.tablet}}},{test:function(u){var f=u.test(/ipod|iphone/i),p=u.test(/like (ipod|iphone)/i);return f&&!p},describe:function(u){var f=c.default.getFirstMatch(/(ipod|iphone)/i,u);return{type:h.PLATFORMS_MAP.mobile,vendor:"Apple",model:f}}},{test:[/nexus\s*[0-6].*/i,/galaxy nexus/i],describe:function(){return{type:h.PLATFORMS_MAP.mobile,vendor:"Nexus"}}},{test:[/Nokia/i],describe:function(u){var f=c.default.getFirstMatch(/Nokia\s+([0-9]+(\.[0-9]+)?)/i,u),p={type:h.PLATFORMS_MAP.mobile,vendor:"Nokia"};return f&&(p.model=f),p}},{test:[/[^-]mobi/i],describe:function(){return{type:h.PLATFORMS_MAP.mobile}}},{test:function(u){return u.getBrowserName(!0)==="blackberry"},describe:function(){return{type:h.PLATFORMS_MAP.mobile,vendor:"BlackBerry"}}},{test:function(u){return u.getBrowserName(!0)==="bada"},describe:function(){return{type:h.PLATFORMS_MAP.mobile}}},{test:function(u){return u.getBrowserName()==="windows phone"},describe:function(){return{type:h.PLATFORMS_MAP.mobile,vendor:"Microsoft"}}},{test:function(u){var f=Number(String(u.getOSVersion()).split(".")[0]);return u.getOSName(!0)==="android"&&f>=3},describe:function(){return{type:h.PLATFORMS_MAP.tablet}}},{test:function(u){return u.getOSName(!0)==="android"},describe:function(){return{type:h.PLATFORMS_MAP.mobile}}},{test:[/smart-?tv|smarttv/i],describe:function(){return{type:h.PLATFORMS_MAP.tv}}},{test:[/netcast/i],describe:function(){return{type:h.PLATFORMS_MAP.tv}}},{test:function(u){return u.getOSName(!0)==="macos"},describe:function(){return{type:h.PLATFORMS_MAP.desktop,vendor:"Apple"}}},{test:function(u){return u.getOSName(!0)==="windows"},describe:function(){return{type:h.PLATFORMS_MAP.desktop}}},{test:function(u){return u.getOSName(!0)==="linux"},describe:function(){return{type:h.PLATFORMS_MAP.desktop}}},{test:function(u){return u.getOSName(!0)==="playstation 4"},describe:function(){return{type:h.PLATFORMS_MAP.tv}}},{test:function(u){return u.getOSName(!0)==="roku"},describe:function(){return{type:h.PLATFORMS_MAP.tv}}}],r.exports=o.default},95:function(r,o,a){"use strict";o.__esModule=!0,o.default=void 0;var s,c=(s=a(17))&&s.__esModule?s:{default:s},h=a(18);o.default=[{test:function(u){return u.getBrowserName(!0)==="microsoft edge"},describe:function(u){if(/\sedg\//i.test(u))return{name:h.ENGINE_MAP.Blink};var f=c.default.getFirstMatch(/edge\/(\d+(\.?_?\d+)+)/i,u);return{name:h.ENGINE_MAP.EdgeHTML,version:f}}},{test:[/trident/i],describe:function(u){var f={name:h.ENGINE_MAP.Trident},p=c.default.getFirstMatch(/trident\/(\d+(\.?_?\d+)+)/i,u);return p&&(f.version=p),f}},{test:function(u){return u.test(/presto/i)},describe:function(u){var f={name:h.ENGINE_MAP.Presto},p=c.default.getFirstMatch(/presto\/(\d+(\.?_?\d+)+)/i,u);return p&&(f.version=p),f}},{test:function(u){var f=u.test(/gecko/i),p=u.test(/like gecko/i);return f&&!p},describe:function(u){var f={name:h.ENGINE_MAP.Gecko},p=c.default.getFirstMatch(/gecko\/(\d+(\.?_?\d+)+)/i,u);return p&&(f.version=p),f}},{test:[/(apple)?webkit\/537\.36/i],describe:function(){return{name:h.ENGINE_MAP.Blink}}},{test:[/(apple)?webkit/i],describe:function(u){var f={name:h.ENGINE_MAP.WebKit},p=c.default.getFirstMatch(/webkit\/(\d+(\.?_?\d+)+)/i,u);return p&&(f.version=p),f}}],r.exports=o.default}})}))})),tu=Do(o2(),1);function a2(e,t){typeof unsafeWindow<"u"&&(unsafeWindow[e]=t),typeof window<"u"&&(window[e]=t)}function Ee(...e){return console.log("MangaOnlineViewer-main-min: ",...e),e}function mn(...e){return["dev","development"].includes("main-min")&&console.info("MangaOnlineViewer: ",...e),e}function nu(e){typeof GM_deleteValue<"u"?GM_deleteValue(e):mn("Fake Removing: ",e)}var ks=typeof GM_info<"u"?GM_info:{scriptHandler:"Console",script:{name:"Debug",version:"Testing"}};function s2(e,t){return typeof GM_getValue<"u"?GM_getValue(e,t):(mn("Fake Getting: ",e," = ",t),t)}function ru(e,t){const r=s2(e,t);if(typeof r=="string"&&r.trim()!=="")try{return JSON.parse(r)}catch(o){return Ee("Failed to parse JSON from storage",e,o),t}return r}function l2(e){return ru("settings",e)}function c2(e){return ru(window.location.hostname,e)}function iu(e,t){return typeof GM_setValue<"u"?(GM_setValue(e,t),Ee("Setting: ",e," = ",t),t.toString()):(mn("Fake Setting: ",e," = ",t),String(t))}function u2(e){return iu("settings",e)}function ou(e){return iu(window.location.hostname,e)}function d2(){const e=tu.default.getParser(window.navigator.userAgent).getBrowser();return`${e.name} ${e.version}`}function h2(){return ks.scriptHandler??"Greasemonkey"}var Bi=()=>{const e=tu.default.getParser(window.navigator.userAgent).getPlatformType(!0);return e==="mobile"||window.matchMedia("screen and (max-width: 600px)").matches?"mobile":e==="tablet"||window.matchMedia("screen and (max-width: 992px)").matches?"tablet":"desktop"},f2=()=>Bi()==="mobile"||Bi()==="tablet",au=(e,t="settings")=>{if(typeof GM_addValueChangeListener<"u")try{return GM_addValueChangeListener(t,(r,o,a,s)=>{s&&e(a)})}catch(r){Ee("Failed to add settings listener",r)}};function Es(e){return e===null||typeof e>"u"||e===void 0||typeof e=="string"&&e===""||Array.isArray(e)&&e.length===0||typeof e=="object"&&Object.keys(e).length===0}function vn(e){return Es(e)||e===!1||e===0}function p2(e,t=document.body){return new Promise(r=>{const o=document.querySelector(e);if(o){r(o);return}const a=new MutationObserver(()=>{const s=document.querySelector(e);s&&(r(s),a.disconnect())});a.observe(t,{childList:!0,subtree:!0,attributes:!0})})}function As(e,t=250){return new Promise(r=>{const o=setInterval(()=>{e()&&(clearInterval(o),r(!0))},t)})}function g2(e,t,r=document.body){return new Promise(o=>{const a=r.querySelector(e);if(a?.getAttribute(t)){o(a.getAttribute(t)??"");return}const s=new MutationObserver(()=>{const c=r.querySelector(e);c?.getAttribute(t)&&(o(c.getAttribute(t)??""),s.disconnect())});s.observe(r,{childList:!0,subtree:!0,attributes:!0,attributeFilter:[t]})})}function m2(e,t=document.body){return new Promise(r=>{if(!vn(unsafeWindow[e])){r(unsafeWindow[e]);return}const o=new MutationObserver(()=>{vn(unsafeWindow[e])||(r(unsafeWindow[e]),o.disconnect())});o.observe(t,{childList:!0,subtree:!0,attributes:!0})})}function v2(e=1e3,t){return new Promise(r=>{setTimeout(()=>r(t),e)})}async function Fi(e,t,r,o){e!==void 0&&(Ee(r),Ee(o,await t(e)))}async function b2(e){await Fi(e.waitAttr,t=>g2(t?.[0],t?.[1]),`Waiting for Attribute ${e.waitAttr?.[1]} of ${e.waitAttr?.[0]}`,`Found Attribute ${e.waitAttr?.[1]} of ${e.waitAttr?.[0]} =`),await Fi(e.waitEle,p2,`Waiting for Element ${e.waitEle}`,"Found Element"),await Fi(e.waitVar,m2,`Waiting for Variable ${e.waitVar}`,"Found Variable"),await Fi(e.waitFunc,As,`Waiting to pass Function check ${e.waitFunc}`,"Found Function check"),await Fi(e.waitTime,t=>new Promise(r=>setTimeout(r,t)),`Waiting for ${e.waitTime} milliseconds`,"Continuing after timer")}var w2="@moaqzdev/toast",Hi={_dispatchToast(e,t){Object.assign(t,{type:e});const r=new CustomEvent(w2,{detail:t});document.dispatchEvent(r)},success(e){this._dispatchToast("success",e)},error(e){this._dispatchToast("error",e)},warning(e){this._dispatchToast("warning",e)},info(e){this._dispatchToast("info",e)},confirm(e){this._dispatchToast("confirm",e)}},On=[],sr=0,Bo=4,Fo=0,su=e=>{let t=[],r={get(){return r.lc||r.listen(()=>{})(),r.value},init:e,lc:0,listen(o){return r.lc=t.push(o),()=>{for(let s=sr+Bo;s<On.length;)On[s]===o?On.splice(s,Bo):s+=Bo;let a=t.indexOf(o);~a&&(t.splice(a,1),--r.lc||r.off())}},notify(o,a){Fo++;let s=!On.length;for(let c of t)On.push(c,r.value,o,a);if(s){for(sr=0;sr<On.length;sr+=Bo)On[sr](On[sr+1],On[sr+2],On[sr+3]);On.length=0}},off(){},set(o){let a=r.value;a!==o&&(r.value=o,r.notify(a))},subscribe(o){let a=r.listen(o);return o(r.value),a},value:e};return r},_2=5,Ho=6,Go=10,y2=(e,t,r,o)=>(e.events=e.events||{},e.events[r+Go]||(e.events[r+Go]=o(a=>{e.events[r].reduceRight((s,c)=>(c(s),s),{shared:{},...a})})),e.events[r]=e.events[r]||[],e.events[r].push(t),()=>{let a=e.events[r],s=a.indexOf(t);a.splice(s,1),a.length||(delete e.events[r],e.events[r+Go](),delete e.events[r+Go])}),k2=1e3,E2=(e,t)=>y2(e,o=>{let a=t(o);a&&e.events[Ho].push(a)},_2,o=>{let a=e.listen;e.listen=(...c)=>(!e.lc&&!e.active&&(e.active=!0,o()),a(...c));let s=e.off;return e.events[Ho]=[],e.off=()=>{s(),setTimeout(()=>{if(e.active&&!e.lc){e.active=!1;for(let c of e.events[Ho])c();e.events[Ho]=[]}},k2)},()=>{e.listen=a,e.off=s}}),A2=(e,t,r)=>{Array.isArray(e)||(e=[e]);let o,a,s=()=>{if(a===Fo)return;a=Fo;let p=e.map(b=>b.get());if(!o||p.some((b,w)=>b!==o[w])){o=p;let b=t(...p);b&&b.then&&b.t?b.then(w=>{o===p&&c.set(w)}):(c.set(b),a=Fo)}},c=su(void 0),h=c.get;c.get=()=>(s(),h());let u,f=r?()=>{clearTimeout(u),u=setTimeout(s)}:s;return E2(c,()=>{let p=e.map(b=>b.listen(f));return s(),()=>{for(let b of p)b()}}),c},S2=(e,t)=>A2(e,t),lu=(e={})=>{let t=su(e);return t.setKey=function(r,o){let a=t.value;typeof o>"u"&&r in t.value?(t.value={...t.value},delete t.value[r],t.notify(a,r)):t.value[r]!==o&&(t.value={...t.value,[r]:o},t.notify(a,r))},t},Ss=globalThis,cu=e=>e,Uo=Ss.trustedTypes,uu=Uo?Uo.createPolicy("lit-html",{createHTML:e=>e}):void 0,Ms="$lit$",Vn=`lit$${Math.random().toFixed(9).slice(2)}$`,xs="?"+Vn,M2=`<${xs}>`,Tr=document,Gi=()=>Tr.createComment(""),Ui=e=>e===null||typeof e!="object"&&typeof e!="function",Is=Array.isArray,du=e=>Is(e)||typeof e?.[Symbol.iterator]=="function",Cs=`[ 	
\f\r]`,Wi=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,hu=/-->/g,fu=/>/g,Lr=RegExp(`>|${Cs}(?:([^\\s"'>=/]+)(${Cs}*=${Cs}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),pu=/'/g,gu=/"/g,mu=/^(?:script|style|textarea|title)$/i,Os=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),ce=Os(1),lA=Os(2),cA=Os(3),Zn=Symbol.for("lit-noChange"),$e=Symbol.for("lit-nothing"),vu=new WeakMap,Rr=Tr.createTreeWalker(Tr,129);function bu(e,t){if(!Is(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return uu!==void 0?uu.createHTML(t):t}var wu=(e,t)=>{const r=e.length-1,o=[];let a,s=t===2?"<svg>":t===3?"<math>":"",c=Wi;for(let h=0;h<r;h++){const u=e[h];let f,p,b=-1,w=0;for(;w<u.length&&(c.lastIndex=w,p=c.exec(u),p!==null);)w=c.lastIndex,c===Wi?p[1]==="!--"?c=hu:p[1]!==void 0?c=fu:p[2]!==void 0?(mu.test(p[2])&&(a=RegExp("</"+p[2],"g")),c=Lr):p[3]!==void 0&&(c=Lr):c===Lr?p[0]===">"?(c=a??Wi,b=-1):p[1]===void 0?b=-2:(b=c.lastIndex-p[2].length,f=p[1],c=p[3]===void 0?Lr:p[3]==='"'?gu:pu):c===gu||c===pu?c=Lr:c===hu||c===fu?c=Wi:(c=Lr,a=void 0);const m=c===Lr&&e[h+1].startsWith("/>")?" ":"";s+=c===Wi?u+M2:b>=0?(o.push(f),u.slice(0,b)+Ms+u.slice(b)+Vn+m):u+Vn+(b===-2?h:m)}return[bu(e,s+(e[r]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),o]},Ts=class Kf{constructor({strings:t,_$litType$:r},o){let a;this.parts=[];let s=0,c=0;const h=t.length-1,u=this.parts,[f,p]=wu(t,r);if(this.el=Kf.createElement(f,o),Rr.currentNode=this.el.content,r===2||r===3){const b=this.el.content.firstChild;b.replaceWith(...b.childNodes)}for(;(a=Rr.nextNode())!==null&&u.length<h;){if(a.nodeType===1){if(a.hasAttributes())for(const b of a.getAttributeNames())if(b.endsWith(Ms)){const w=p[c++],m=a.getAttribute(b).split(Vn),v=/([.?@])?(.*)/.exec(w);u.push({type:1,index:s,name:v[2],strings:m,ctor:v[1]==="."?yu:v[1]==="?"?ku:v[1]==="@"?Eu:Vi}),a.removeAttribute(b)}else b.startsWith(Vn)&&(u.push({type:6,index:s}),a.removeAttribute(b));if(mu.test(a.tagName)){const b=a.textContent.split(Vn),w=b.length-1;if(w>0){a.textContent=Uo?Uo.emptyScript:"";for(let m=0;m<w;m++)a.append(b[m],Gi()),Rr.nextNode(),u.push({type:2,index:++s});a.append(b[w],Gi())}}}else if(a.nodeType===8)if(a.data===xs)u.push({type:2,index:s});else{let b=-1;for(;(b=a.data.indexOf(Vn,b+1))!==-1;)u.push({type:7,index:s}),b+=Vn.length-1}s++}}static createElement(t,r){const o=Tr.createElement("template");return o.innerHTML=t,o}};function Pr(e,t,r=e,o){if(t===Zn)return t;let a=o!==void 0?r._$Co?.[o]:r._$Cl;const s=Ui(t)?void 0:t._$litDirective$;return a?.constructor!==s&&(a?._$AO?.(!1),s===void 0?a=void 0:(a=new s(e),a._$AT(e,r,o)),o!==void 0?(r._$Co??=[])[o]=a:r._$Cl=a),a!==void 0&&(t=Pr(e,a._$AS(e,t.values),a,o)),t}var _u=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:r}=this._$AD,o=(e?.creationScope??Tr).importNode(t,!0);Rr.currentNode=o;let a=Rr.nextNode(),s=0,c=0,h=r[0];for(;h!==void 0;){if(s===h.index){let u;h.type===2?u=new Wo(a,a.nextSibling,this,e):h.type===1?u=new h.ctor(a,h.name,h.strings,this,e):h.type===6&&(u=new Au(a,this,e)),this._$AV.push(u),h=r[++c]}s!==h?.index&&(a=Rr.nextNode(),s++)}return Rr.currentNode=Tr,o}p(e){let t=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(e,r,t),t+=r.strings.length-2):r._$AI(e[t])),t++}},Wo=class Yf{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,r,o,a){this.type=2,this._$AH=$e,this._$AN=void 0,this._$AA=t,this._$AB=r,this._$AM=o,this.options=a,this._$Cv=a?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&t?.nodeType===11&&(t=r.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,r=this){t=Pr(this,t,r),Ui(t)?t===$e||t==null||t===""?(this._$AH!==$e&&this._$AR(),this._$AH=$e):t!==this._$AH&&t!==Zn&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):du(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==$e&&Ui(this._$AH)?this._$AA.nextSibling.data=t:this.T(Tr.createTextNode(t)),this._$AH=t}$(t){const{values:r,_$litType$:o}=t,a=typeof o=="number"?this._$AC(t):(o.el===void 0&&(o.el=Ts.createElement(bu(o.h,o.h[0]),this.options)),o);if(this._$AH?._$AD===a)this._$AH.p(r);else{const s=new _u(a,this),c=s.u(this.options);s.p(r),this.T(c),this._$AH=s}}_$AC(t){let r=vu.get(t.strings);return r===void 0&&vu.set(t.strings,r=new Ts(t)),r}k(t){Is(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let o,a=0;for(const s of t)a===r.length?r.push(o=new Yf(this.O(Gi()),this.O(Gi()),this,this.options)):o=r[a],o._$AI(s),a++;a<r.length&&(this._$AR(o&&o._$AB.nextSibling,a),r.length=a)}_$AR(t=this._$AA.nextSibling,r){for(this._$AP?.(!1,!0,r);t!==this._$AB;){const o=cu(t).nextSibling;cu(t).remove(),t=o}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}},Vi=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,r,o,a){this.type=1,this._$AH=$e,this._$AN=void 0,this.element=e,this.name=t,this._$AM=o,this.options=a,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=$e}_$AI(e,t=this,r,o){const a=this.strings;let s=!1;if(a===void 0)e=Pr(this,e,t,0),s=!Ui(e)||e!==this._$AH&&e!==Zn,s&&(this._$AH=e);else{const c=e;let h,u;for(e=a[0],h=0;h<a.length-1;h++)u=Pr(this,c[r+h],t,h),u===Zn&&(u=this._$AH[h]),s||=!Ui(u)||u!==this._$AH[h],u===$e?e=$e:e!==$e&&(e+=(u??"")+a[h+1]),this._$AH[h]=u}s&&!o&&this.j(e)}j(e){e===$e?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},yu=class extends Vi{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===$e?void 0:e}},ku=class extends Vi{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==$e)}},Eu=class extends Vi{constructor(e,t,r,o,a){super(e,t,r,o,a),this.type=5}_$AI(e,t=this){if((e=Pr(this,e,t,0)??$e)===Zn)return;const r=this._$AH,o=e===$e&&r!==$e||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,a=e!==$e&&(r===$e||o);o&&this.element.removeEventListener(this.name,this,r),a&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},Au=class{constructor(e,t,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){Pr(this,e)}},x2={M:Ms,P:Vn,A:xs,C:1,L:wu,R:_u,D:du,V:Pr,I:Wo,H:Vi,N:ku,U:Eu,B:yu,F:Au},I2=Ss.litHtmlPolyfillSupport;I2?.(Ts,Wo),(Ss.litHtmlVersions??=[]).push("3.3.2");var C2=(e,t,r)=>{const o=r?.renderBefore??t;let a=o._$litPart$;if(a===void 0){const s=r?.renderBefore??null;o._$litPart$=a=new Wo(t.insertBefore(Gi(),s),s,void 0,r??{})}return a._$AI(e),a},{I:O2}=x2,Su=e=>e,uA=e=>e===null||typeof e!="object"&&typeof e!="function",dA={HTML:1,SVG:2,MATHML:3},hA=(e,t)=>t===void 0?e?._$litType$!==void 0:e?._$litType$===t,fA=e=>e?._$litType$?.h!=null,pA=e=>e?._$litDirective$!==void 0,gA=e=>e?._$litDirective$,T2=e=>e.strings===void 0,Mu=()=>document.createComment(""),mA=(e,t,r)=>{const o=e._$AA.parentNode,a=t===void 0?e._$AB:t._$AA;if(r===void 0)r=new O2(o.insertBefore(Mu(),a),o.insertBefore(Mu(),a),e,e.options);else{const s=r._$AB.nextSibling,c=r._$AM,h=c!==e;if(h){let u;r._$AQ?.(e),r._$AM=e,r._$AP!==void 0&&(u=e._$AU)!==c._$AU&&r._$AP(u)}if(s!==a||h){let u=r._$AA;for(;u!==s;){const f=Su(u).nextSibling;Su(o).insertBefore(u,a),u=f}}}return r},vA=(e,t,r=e)=>(e._$AI(t,r),e),L2={},bA=(e,t=L2)=>e._$AH=t,wA=e=>e._$AH,_A=e=>{e._$AR(),e._$AA.remove()},yA=e=>{e._$AR()},Vo={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Zi=e=>(...t)=>({_$litDirective$:e,values:t}),Zo=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,r){this._$Ct=e,this._$AM=t,this._$Ci=r}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}},qi=(e,t)=>{const r=e._$AN;if(r===void 0)return!1;for(const o of r)o._$AO?.(t,!1),qi(o,t);return!0},qo=e=>{let t,r;do{if((t=e._$AM)===void 0)break;r=t._$AN,r.delete(e),e=t}while(r?.size===0)},xu=e=>{for(let t;t=e._$AM;e=t){let r=t._$AN;if(r===void 0)t._$AN=r=new Set;else if(r.has(e))break;r.add(e),$2(t)}};function R2(e){this._$AN!==void 0?(qo(this),this._$AM=e,xu(this)):this._$AM=e}function P2(e,t=!1,r=0){const o=this._$AH,a=this._$AN;if(a!==void 0&&a.size!==0)if(t)if(Array.isArray(o))for(let s=r;s<o.length;s++)qi(o[s],!1),qo(o[s]);else o!=null&&(qi(o,!1),qo(o));else qi(this,e)}var $2=e=>{e.type==Vo.CHILD&&(e._$AP??=P2,e._$AQ??=R2)},z2=class extends Zo{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,r){super._$AT(e,t,r),xu(this),this.isConnected=e._$AU}_$AO(e,t=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),t&&(qi(this,e),qo(this))}setValue(e){if(T2(this._$Ct))this._$Ct._$AI(e,this);else{const t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}},Ls=()=>new N2,N2=class{},Rs=new WeakMap,Ps=Zi(class extends z2{render(e){return $e}update(e,[t]){const r=t!==this.G;return r&&this.G!==void 0&&this.rt(void 0),(r||this.lt!==this.ct)&&(this.G=t,this.ht=e.options?.host,this.rt(this.ct=e.element)),$e}rt(e){if(this.isConnected||(e=void 0),typeof this.G=="function"){const t=this.ht??globalThis;let r=Rs.get(t);r===void 0&&(r=new WeakMap,Rs.set(t,r)),r.get(this.G)!==void 0&&this.G.call(this.ht,void 0),r.set(this.G,e),e!==void 0&&this.G.call(this.ht,e)}else this.G.value=e}get lt(){return typeof this.G=="function"?Rs.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),D2=gn(((e,t)=>{(function(){var r,o="4.17.23",a=200,s="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",c="Expected a function",h="Invalid `variable` option passed into `_.template`",u="__lodash_hash_undefined__",f=500,p="__lodash_placeholder__",b=1,w=2,m=4,v=1,E=2,y=1,S=2,x=4,T=8,L=16,z=32,q=64,W=128,oe=256,H=512,pe=30,_e="...",P=800,j=16,A=1,Q=2,Ie=3,ae=1/0,xe=9007199254740991,se=17976931348623157e292,Ae=NaN,G=4294967295,U=G-1,Se=G>>>1,ge=[["ary",W],["bind",y],["bindKey",S],["curry",T],["curryRight",L],["flip",H],["partial",z],["partialRight",q],["rearg",oe]],he="[object Arguments]",Ye="[object Array]",Et="[object AsyncFunction]",Ne="[object Boolean]",Ge="[object Date]",At="[object DOMException]",it="[object Error]",Gt="[object Function]",Yt="[object GeneratorFunction]",_="[object Map]",ee="[object Number]",Z="[object Null]",O="[object Object]",C="[object Promise]",D="[object Proxy]",ie="[object RegExp]",re="[object Set]",F="[object String]",ue="[object Symbol]",be="[object Undefined]",de="[object WeakMap]",Me="[object WeakSet]",qe="[object ArrayBuffer]",Fe="[object DataView]",Dt="[object Float32Array]",Yn="[object Float64Array]",Xt="[object Int8Array]",Xn="[object Int16Array]",st="[object Int32Array]",br="[object Uint8Array]",Vr="[object Uint8ClampedArray]",un="[object Uint16Array]",Ai="[object Uint32Array]",Bl=/\b__p \+= '';/g,Fl=/\b(__p \+=) '' \+/g,Hl=/(__e\(.*?\)|\b__t\)) \+\n'';/g,yo=/&(?:amp|lt|gt|quot|#39);/g,wr=/[&<>"']/g,Si=RegExp(yo.source),N9=RegExp(wr.source),D9=/<%-([\s\S]+?)%>/g,B9=/<%([\s\S]+?)%>/g,yh=/<%=([\s\S]+?)%>/g,F9=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,H9=/^\w*$/,G9=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Gl=/[\\^$.*+?()[\]{}|]/g,U9=RegExp(Gl.source),Ul=/^\s+/,W9=/\s/,V9=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,Z9=/\{\n\/\* \[wrapped with (.+)\] \*/,q9=/,? & /,j9=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,K9=/[()=,{}\[\]\/\s]/,Y9=/\\(\\)?/g,X9=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,kh=/\w*$/,J9=/^[-+]0x[0-9a-f]+$/i,Q9=/^0b[01]+$/i,e7=/^\[object .+?Constructor\]$/,t7=/^0o[0-7]+$/i,n7=/^(?:0|[1-9]\d*)$/,r7=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Ra=/($^)/,i7=/['\n\r\u2028\u2029\\]/g,Pa="\\ud800-\\udfff",Eh="\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff",Ah="\\u2700-\\u27bf",Sh="a-z\\xdf-\\xf6\\xf8-\\xff",o7="\\xac\\xb1\\xd7\\xf7",a7="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",s7="\\u2000-\\u206f",l7=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Mh="A-Z\\xc0-\\xd6\\xd8-\\xde",xh="\\ufe0e\\ufe0f",Ih=o7+a7+s7+l7,Wl="['’]",c7="["+Pa+"]",Ch="["+Ih+"]",$a="["+Eh+"]",Oh="\\d+",u7="["+Ah+"]",Th="["+Sh+"]",Lh="[^"+Pa+Ih+Oh+Ah+Sh+Mh+"]",Vl="\\ud83c[\\udffb-\\udfff]",d7="(?:"+$a+"|"+Vl+")",Rh="[^"+Pa+"]",Zl="(?:\\ud83c[\\udde6-\\uddff]){2}",ql="[\\ud800-\\udbff][\\udc00-\\udfff]",Mi="["+Mh+"]",Ph="\\u200d",$h="(?:"+Th+"|"+Lh+")",h7="(?:"+Mi+"|"+Lh+")",zh="(?:"+Wl+"(?:d|ll|m|re|s|t|ve))?",Nh="(?:"+Wl+"(?:D|LL|M|RE|S|T|VE))?",Dh=d7+"?",Bh="["+xh+"]?",f7="(?:"+Ph+"(?:"+[Rh,Zl,ql].join("|")+")"+Bh+Dh+")*",p7="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",g7="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",Fh=Bh+Dh+f7,m7="(?:"+[u7,Zl,ql].join("|")+")"+Fh,v7="(?:"+[Rh+$a+"?",$a,Zl,ql,c7].join("|")+")",b7=RegExp(Wl,"g"),w7=RegExp($a,"g"),jl=RegExp(Vl+"(?="+Vl+")|"+v7+Fh,"g"),_7=RegExp([Mi+"?"+Th+"+"+zh+"(?="+[Ch,Mi,"$"].join("|")+")",h7+"+"+Nh+"(?="+[Ch,Mi+$h,"$"].join("|")+")",Mi+"?"+$h+"+"+zh,Mi+"+"+Nh,g7,p7,Oh,m7].join("|"),"g"),y7=RegExp("["+Ph+Pa+Eh+xh+"]"),k7=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,E7=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],A7=-1,lt={};lt[Dt]=lt[Yn]=lt[Xt]=lt[Xn]=lt[st]=lt[br]=lt[Vr]=lt[un]=lt[Ai]=!0,lt[he]=lt[Ye]=lt[qe]=lt[Ne]=lt[Fe]=lt[Ge]=lt[it]=lt[Gt]=lt[_]=lt[ee]=lt[O]=lt[ie]=lt[re]=lt[F]=lt[de]=!1;var ot={};ot[he]=ot[Ye]=ot[qe]=ot[Fe]=ot[Ne]=ot[Ge]=ot[Dt]=ot[Yn]=ot[Xt]=ot[Xn]=ot[st]=ot[_]=ot[ee]=ot[O]=ot[ie]=ot[re]=ot[F]=ot[ue]=ot[br]=ot[Vr]=ot[un]=ot[Ai]=!0,ot[it]=ot[Gt]=ot[de]=!1;var S7={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},M7={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},x7={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},I7={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},C7=parseFloat,O7=parseInt,Hh=typeof global=="object"&&global&&global.Object===Object&&global,T7=typeof self=="object"&&self&&self.Object===Object&&self,Tt=Hh||T7||Function("return this")(),Kl=typeof e=="object"&&e&&!e.nodeType&&e,Zr=Kl&&typeof t=="object"&&t&&!t.nodeType&&t,Gh=Zr&&Zr.exports===Kl,Yl=Gh&&Hh.process,kn=(function(){try{var N=Zr&&Zr.require&&Zr.require("util").types;return N||Yl&&Yl.binding&&Yl.binding("util")}catch{}})(),Uh=kn&&kn.isArrayBuffer,Wh=kn&&kn.isDate,Vh=kn&&kn.isMap,Zh=kn&&kn.isRegExp,qh=kn&&kn.isSet,jh=kn&&kn.isTypedArray;function dn(N,J,V){switch(V.length){case 0:return N.call(J);case 1:return N.call(J,V[0]);case 2:return N.call(J,V[0],V[1]);case 3:return N.call(J,V[0],V[1],V[2])}return N.apply(J,V)}function L7(N,J,V,we){for(var Re=-1,Ke=N==null?0:N.length;++Re<Ke;){var It=N[Re];J(we,It,V(It),N)}return we}function En(N,J){for(var V=-1,we=N==null?0:N.length;++V<we&&J(N[V],V,N)!==!1;);return N}function R7(N,J){for(var V=N==null?0:N.length;V--&&J(N[V],V,N)!==!1;);return N}function Kh(N,J){for(var V=-1,we=N==null?0:N.length;++V<we;)if(!J(N[V],V,N))return!1;return!0}function _r(N,J){for(var V=-1,we=N==null?0:N.length,Re=0,Ke=[];++V<we;){var It=N[V];J(It,V,N)&&(Ke[Re++]=It)}return Ke}function za(N,J){return!!(N!=null&&N.length)&&xi(N,J,0)>-1}function Xl(N,J,V){for(var we=-1,Re=N==null?0:N.length;++we<Re;)if(V(J,N[we]))return!0;return!1}function dt(N,J){for(var V=-1,we=N==null?0:N.length,Re=Array(we);++V<we;)Re[V]=J(N[V],V,N);return Re}function yr(N,J){for(var V=-1,we=J.length,Re=N.length;++V<we;)N[Re+V]=J[V];return N}function Jl(N,J,V,we){var Re=-1,Ke=N==null?0:N.length;for(we&&Ke&&(V=N[++Re]);++Re<Ke;)V=J(V,N[Re],Re,N);return V}function P7(N,J,V,we){var Re=N==null?0:N.length;for(we&&Re&&(V=N[--Re]);Re--;)V=J(V,N[Re],Re,N);return V}function Ql(N,J){for(var V=-1,we=N==null?0:N.length;++V<we;)if(J(N[V],V,N))return!0;return!1}var $7=ec("length");function z7(N){return N.split("")}function N7(N){return N.match(j9)||[]}function Yh(N,J,V){var we;return V(N,function(Re,Ke,It){if(J(Re,Ke,It))return we=Ke,!1}),we}function Na(N,J,V,we){for(var Re=N.length,Ke=V+(we?1:-1);we?Ke--:++Ke<Re;)if(J(N[Ke],Ke,N))return Ke;return-1}function xi(N,J,V){return J===J?K7(N,J,V):Na(N,Xh,V)}function D7(N,J,V,we){for(var Re=V-1,Ke=N.length;++Re<Ke;)if(we(N[Re],J))return Re;return-1}function Xh(N){return N!==N}function Jh(N,J){var V=N==null?0:N.length;return V?nc(N,J)/V:Ae}function ec(N){return function(J){return J==null?r:J[N]}}function tc(N){return function(J){return N==null?r:N[J]}}function Qh(N,J,V,we,Re){return Re(N,function(Ke,It,et){V=we?(we=!1,Ke):J(V,Ke,It,et)}),V}function B7(N,J){var V=N.length;for(N.sort(J);V--;)N[V]=N[V].value;return N}function nc(N,J){for(var V,we=-1,Re=N.length;++we<Re;){var Ke=J(N[we]);Ke!==r&&(V=V===r?Ke:V+Ke)}return V}function rc(N,J){for(var V=-1,we=Array(N);++V<N;)we[V]=J(V);return we}function F7(N,J){return dt(J,function(V){return[V,N[V]]})}function e1(N){return N&&N.slice(0,i1(N)+1).replace(Ul,"")}function hn(N){return function(J){return N(J)}}function ic(N,J){return dt(J,function(V){return N[V]})}function ko(N,J){return N.has(J)}function t1(N,J){for(var V=-1,we=N.length;++V<we&&xi(J,N[V],0)>-1;);return V}function n1(N,J){for(var V=N.length;V--&&xi(J,N[V],0)>-1;);return V}function H7(N,J){for(var V=N.length,we=0;V--;)N[V]===J&&++we;return we}var G7=tc(S7),U7=tc(M7);function W7(N){return"\\"+I7[N]}function V7(N,J){return N==null?r:N[J]}function Ii(N){return y7.test(N)}function Z7(N){return k7.test(N)}function q7(N){for(var J,V=[];!(J=N.next()).done;)V.push(J.value);return V}function oc(N){var J=-1,V=Array(N.size);return N.forEach(function(we,Re){V[++J]=[Re,we]}),V}function r1(N,J){return function(V){return N(J(V))}}function kr(N,J){for(var V=-1,we=N.length,Re=0,Ke=[];++V<we;){var It=N[V];(It===J||It===p)&&(N[V]=p,Ke[Re++]=V)}return Ke}function Da(N){var J=-1,V=Array(N.size);return N.forEach(function(we){V[++J]=we}),V}function j7(N){var J=-1,V=Array(N.size);return N.forEach(function(we){V[++J]=[we,we]}),V}function K7(N,J,V){for(var we=V-1,Re=N.length;++we<Re;)if(N[we]===J)return we;return-1}function Y7(N,J,V){for(var we=V+1;we--;)if(N[we]===J)return we;return we}function Ci(N){return Ii(N)?J7(N):$7(N)}function Pn(N){return Ii(N)?Q7(N):z7(N)}function i1(N){for(var J=N.length;J--&&W9.test(N.charAt(J)););return J}var X7=tc(x7);function J7(N){for(var J=jl.lastIndex=0;jl.test(N);)++J;return J}function Q7(N){return N.match(jl)||[]}function e8(N){return N.match(_7)||[]}var Er=(function N(J){J=J==null?Tt:Er.defaults(Tt.Object(),J,Er.pick(Tt,E7));var V=J.Array,we=J.Date,Re=J.Error,Ke=J.Function,It=J.Math,et=J.Object,ac=J.RegExp,t8=J.String,An=J.TypeError,Ba=V.prototype,n8=Ke.prototype,Oi=et.prototype,Fa=J["__core-js_shared__"],Ha=n8.toString,Xe=Oi.hasOwnProperty,r8=0,o1=(function(){var n=/[^.]+$/.exec(Fa&&Fa.keys&&Fa.keys.IE_PROTO||"");return n?"Symbol(src)_1."+n:""})(),Ga=Oi.toString,i8=Ha.call(et),o8=Tt._,a8=ac("^"+Ha.call(Xe).replace(Gl,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Ua=Gh?J.Buffer:r,Ar=J.Symbol,Wa=J.Uint8Array,a1=Ua?Ua.allocUnsafe:r,Va=r1(et.getPrototypeOf,et),s1=et.create,l1=Oi.propertyIsEnumerable,Za=Ba.splice,c1=Ar?Ar.isConcatSpreadable:r,Eo=Ar?Ar.iterator:r,qr=Ar?Ar.toStringTag:r,qa=(function(){try{var n=Jr(et,"defineProperty");return n({},"",{}),n}catch{}})(),s8=J.clearTimeout!==Tt.clearTimeout&&J.clearTimeout,l8=we&&we.now!==Tt.Date.now&&we.now,c8=J.setTimeout!==Tt.setTimeout&&J.setTimeout,ja=It.ceil,Ka=It.floor,sc=et.getOwnPropertySymbols,u8=Ua?Ua.isBuffer:r,u1=J.isFinite,d8=Ba.join,h8=r1(et.keys,et),Ct=It.max,Bt=It.min,f8=we.now,p8=J.parseInt,d1=It.random,g8=Ba.reverse,lc=Jr(J,"DataView"),Ao=Jr(J,"Map"),cc=Jr(J,"Promise"),Ti=Jr(J,"Set"),So=Jr(J,"WeakMap"),Mo=Jr(et,"create"),Ya=So&&new So,Li={},m8=Qr(lc),v8=Qr(Ao),b8=Qr(cc),w8=Qr(Ti),_8=Qr(So),Xa=Ar?Ar.prototype:r,xo=Xa?Xa.valueOf:r,h1=Xa?Xa.toString:r;function M(n){if(mt(n)&&!De(n)&&!(n instanceof Ve)){if(n instanceof Sn)return n;if(Xe.call(n,"__wrapped__"))return pf(n)}return new Sn(n)}var Ri=(function(){function n(){}return function(i){if(!ft(i))return{};if(s1)return s1(i);n.prototype=i;var l=new n;return n.prototype=r,l}})();function Ja(){}function Sn(n,i){this.__wrapped__=n,this.__actions__=[],this.__chain__=!!i,this.__index__=0,this.__values__=r}M.templateSettings={escape:D9,evaluate:B9,interpolate:yh,variable:"",imports:{_:M}},M.prototype=Ja.prototype,M.prototype.constructor=M,Sn.prototype=Ri(Ja.prototype),Sn.prototype.constructor=Sn;function Ve(n){this.__wrapped__=n,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=G,this.__views__=[]}function y8(){var n=new Ve(this.__wrapped__);return n.__actions__=Jt(this.__actions__),n.__dir__=this.__dir__,n.__filtered__=this.__filtered__,n.__iteratees__=Jt(this.__iteratees__),n.__takeCount__=this.__takeCount__,n.__views__=Jt(this.__views__),n}function k8(){if(this.__filtered__){var n=new Ve(this);n.__dir__=-1,n.__filtered__=!0}else n=this.clone(),n.__dir__*=-1;return n}function E8(){var n=this.__wrapped__.value(),i=this.__dir__,l=De(n),g=i<0,k=l?n.length:0,I=$w(0,k,this.__views__),R=I.start,$=I.end,B=$-R,ne=g?$:R-1,te=this.__iteratees__,le=te.length,ve=0,ye=Bt(B,this.__takeCount__);if(!l||!g&&k==B&&ye==B)return z1(n,this.__actions__);var Ce=[];e:for(;B--&&ve<ye;){ne+=i;for(var Pe=-1,Te=n[ne];++Pe<le;){var tt=te[Pe],Ze=tt.iteratee,Vt=tt.type,Wn=Ze(Te);if(Vt==Q)Te=Wn;else if(!Wn){if(Vt==A)continue e;break e}}Ce[ve++]=Te}return Ce}Ve.prototype=Ri(Ja.prototype),Ve.prototype.constructor=Ve;function jr(n){var i=-1,l=n==null?0:n.length;for(this.clear();++i<l;){var g=n[i];this.set(g[0],g[1])}}function A8(){this.__data__=Mo?Mo(null):{},this.size=0}function S8(n){var i=this.has(n)&&delete this.__data__[n];return this.size-=i?1:0,i}function M8(n){var i=this.__data__;if(Mo){var l=i[n];return l===u?r:l}return Xe.call(i,n)?i[n]:r}function x8(n){var i=this.__data__;return Mo?i[n]!==r:Xe.call(i,n)}function I8(n,i){var l=this.__data__;return this.size+=this.has(n)?0:1,l[n]=Mo&&i===r?u:i,this}jr.prototype.clear=A8,jr.prototype.delete=S8,jr.prototype.get=M8,jr.prototype.has=x8,jr.prototype.set=I8;function Jn(n){var i=-1,l=n==null?0:n.length;for(this.clear();++i<l;){var g=n[i];this.set(g[0],g[1])}}function C8(){this.__data__=[],this.size=0}function O8(n){var i=this.__data__,l=Qa(i,n);return l<0?!1:(l==i.length-1?i.pop():Za.call(i,l,1),--this.size,!0)}function T8(n){var i=this.__data__,l=Qa(i,n);return l<0?r:i[l][1]}function L8(n){return Qa(this.__data__,n)>-1}function R8(n,i){var l=this.__data__,g=Qa(l,n);return g<0?(++this.size,l.push([n,i])):l[g][1]=i,this}Jn.prototype.clear=C8,Jn.prototype.delete=O8,Jn.prototype.get=T8,Jn.prototype.has=L8,Jn.prototype.set=R8;function Qn(n){var i=-1,l=n==null?0:n.length;for(this.clear();++i<l;){var g=n[i];this.set(g[0],g[1])}}function P8(){this.size=0,this.__data__={hash:new jr,map:new(Ao||Jn),string:new jr}}function $8(n){var i=ds(this,n).delete(n);return this.size-=i?1:0,i}function z8(n){return ds(this,n).get(n)}function N8(n){return ds(this,n).has(n)}function D8(n,i){var l=ds(this,n),g=l.size;return l.set(n,i),this.size+=l.size==g?0:1,this}Qn.prototype.clear=P8,Qn.prototype.delete=$8,Qn.prototype.get=z8,Qn.prototype.has=N8,Qn.prototype.set=D8;function Kr(n){var i=-1,l=n==null?0:n.length;for(this.__data__=new Qn;++i<l;)this.add(n[i])}function B8(n){return this.__data__.set(n,u),this}function F8(n){return this.__data__.has(n)}Kr.prototype.add=Kr.prototype.push=B8,Kr.prototype.has=F8;function $n(n){this.size=(this.__data__=new Jn(n)).size}function H8(){this.__data__=new Jn,this.size=0}function G8(n){var i=this.__data__,l=i.delete(n);return this.size=i.size,l}function U8(n){return this.__data__.get(n)}function W8(n){return this.__data__.has(n)}function V8(n,i){var l=this.__data__;if(l instanceof Jn){var g=l.__data__;if(!Ao||g.length<a-1)return g.push([n,i]),this.size=++l.size,this;l=this.__data__=new Qn(g)}return l.set(n,i),this.size=l.size,this}$n.prototype.clear=H8,$n.prototype.delete=G8,$n.prototype.get=U8,$n.prototype.has=W8,$n.prototype.set=V8;function f1(n,i){var l=De(n),g=!l&&ei(n),k=!l&&!g&&Cr(n),I=!l&&!g&&!k&&Ni(n),R=l||g||k||I,$=R?rc(n.length,t8):[],B=$.length;for(var ne in n)(i||Xe.call(n,ne))&&!(R&&(ne=="length"||k&&(ne=="offset"||ne=="parent")||I&&(ne=="buffer"||ne=="byteLength"||ne=="byteOffset")||rr(ne,B)))&&$.push(ne);return $}function p1(n){var i=n.length;return i?n[_c(0,i-1)]:r}function Z8(n,i){return hs(Jt(n),Yr(i,0,n.length))}function q8(n){return hs(Jt(n))}function uc(n,i,l){(l!==r&&!zn(n[i],l)||l===r&&!(i in n))&&er(n,i,l)}function Io(n,i,l){var g=n[i];(!(Xe.call(n,i)&&zn(g,l))||l===r&&!(i in n))&&er(n,i,l)}function Qa(n,i){for(var l=n.length;l--;)if(zn(n[l][0],i))return l;return-1}function j8(n,i,l,g){return Sr(n,function(k,I,R){i(g,k,l(k),R)}),g}function g1(n,i){return n&&Gn(i,Lt(i),n)}function K8(n,i){return n&&Gn(i,en(i),n)}function er(n,i,l){i=="__proto__"&&qa?qa(n,i,{configurable:!0,enumerable:!0,value:l,writable:!0}):n[i]=l}function dc(n,i){for(var l=-1,g=i.length,k=V(g),I=n==null;++l<g;)k[l]=I?r:Vc(n,i[l]);return k}function Yr(n,i,l){return n===n&&(l!==r&&(n=n<=l?n:l),i!==r&&(n=n>=i?n:i)),n}function Mn(n,i,l,g,k,I){var R,$=i&b,B=i&w,ne=i&m;if(l&&(R=k?l(n,g,k,I):l(n)),R!==r)return R;if(!ft(n))return n;var te=De(n);if(te){if(R=Nw(n),!$)return Jt(n,R)}else{var le=Ft(n),ve=le==Gt||le==Yt;if(Cr(n))return B1(n,$);if(le==O||le==he||ve&&!k){if(R=B||ve?{}:of(n),!$)return B?Mw(n,K8(R,n)):Sw(n,g1(R,n))}else{if(!ot[le])return k?n:{};R=Dw(n,le,$)}}I||(I=new $n);var ye=I.get(n);if(ye)return ye;I.set(n,R),Pf(n)?n.forEach(function(Pe){R.add(Mn(Pe,i,l,Pe,n,I))}):Lf(n)&&n.forEach(function(Pe,Te){R.set(Te,Mn(Pe,i,l,Te,n,I))});var Ce=te?r:(ne?B?Tc:Oc:B?en:Lt)(n);return En(Ce||n,function(Pe,Te){Ce&&(Te=Pe,Pe=n[Te]),Io(R,Te,Mn(Pe,i,l,Te,n,I))}),R}function Y8(n){var i=Lt(n);return function(l){return m1(l,n,i)}}function m1(n,i,l){var g=l.length;if(n==null)return!g;for(n=et(n);g--;){var k=l[g],I=i[k],R=n[k];if(R===r&&!(k in n)||!I(R))return!1}return!0}function v1(n,i,l){if(typeof n!="function")throw new An(c);return $o(function(){n.apply(r,l)},i)}function Co(n,i,l,g){var k=-1,I=za,R=!0,$=n.length,B=[],ne=i.length;if(!$)return B;l&&(i=dt(i,hn(l))),g?(I=Xl,R=!1):i.length>=a&&(I=ko,R=!1,i=new Kr(i));e:for(;++k<$;){var te=n[k],le=l==null?te:l(te);if(te=g||te!==0?te:0,R&&le===le){for(var ve=ne;ve--;)if(i[ve]===le)continue e;B.push(te)}else I(i,le,g)||B.push(te)}return B}var Sr=W1(Hn),b1=W1(fc,!0);function X8(n,i){var l=!0;return Sr(n,function(g,k,I){return l=!!i(g,k,I),l}),l}function es(n,i,l){for(var g=-1,k=n.length;++g<k;){var I=n[g],R=i(I);if(R!=null&&($===r?R===R&&!pn(R):l(R,$)))var $=R,B=I}return B}function J8(n,i,l,g){var k=n.length;for(l=He(l),l<0&&(l=-l>k?0:k+l),g=g===r||g>k?k:He(g),g<0&&(g+=k),g=l>g?0:zf(g);l<g;)n[l++]=i;return n}function w1(n,i){var l=[];return Sr(n,function(g,k,I){i(g,k,I)&&l.push(g)}),l}function zt(n,i,l,g,k){var I=-1,R=n.length;for(l||(l=Fw),k||(k=[]);++I<R;){var $=n[I];i>0&&l($)?i>1?zt($,i-1,l,g,k):yr(k,$):g||(k[k.length]=$)}return k}var hc=V1(),_1=V1(!0);function Hn(n,i){return n&&hc(n,i,Lt)}function fc(n,i){return n&&_1(n,i,Lt)}function ts(n,i){return _r(i,function(l){return ir(n[l])})}function Xr(n,i){i=xr(i,n);for(var l=0,g=i.length;n!=null&&l<g;)n=n[Un(i[l++])];return l&&l==g?n:r}function y1(n,i,l){var g=i(n);return De(n)?g:yr(g,l(n))}function Ut(n){return n==null?n===r?be:Z:qr&&qr in et(n)?Pw(n):qw(n)}function pc(n,i){return n>i}function Q8(n,i){return n!=null&&Xe.call(n,i)}function ew(n,i){return n!=null&&i in et(n)}function tw(n,i,l){return n>=Bt(i,l)&&n<Ct(i,l)}function gc(n,i,l){for(var g=l?Xl:za,k=n[0].length,I=n.length,R=I,$=V(I),B=1/0,ne=[];R--;){var te=n[R];R&&i&&(te=dt(te,hn(i))),B=Bt(te.length,B),$[R]=!l&&(i||k>=120&&te.length>=120)?new Kr(R&&te):r}te=n[0];var le=-1,ve=$[0];e:for(;++le<k&&ne.length<B;){var ye=te[le],Ce=i?i(ye):ye;if(ye=l||ye!==0?ye:0,!(ve?ko(ve,Ce):g(ne,Ce,l))){for(R=I;--R;){var Pe=$[R];if(!(Pe?ko(Pe,Ce):g(n[R],Ce,l)))continue e}ve&&ve.push(Ce),ne.push(ye)}}return ne}function nw(n,i,l,g){return Hn(n,function(k,I,R){i(g,l(k),I,R)}),g}function Oo(n,i,l){i=xr(i,n),n=cf(n,i);var g=n==null?n:n[Un(In(i))];return g==null?r:dn(g,n,l)}function k1(n){return mt(n)&&Ut(n)==he}function rw(n){return mt(n)&&Ut(n)==qe}function iw(n){return mt(n)&&Ut(n)==Ge}function To(n,i,l,g,k){return n===i?!0:n==null||i==null||!mt(n)&&!mt(i)?n!==n&&i!==i:ow(n,i,l,g,To,k)}function ow(n,i,l,g,k,I){var R=De(n),$=De(i),B=R?Ye:Ft(n),ne=$?Ye:Ft(i);B=B==he?O:B,ne=ne==he?O:ne;var te=B==O,le=ne==O,ve=B==ne;if(ve&&Cr(n)){if(!Cr(i))return!1;R=!0,te=!1}if(ve&&!te)return I||(I=new $n),R||Ni(n)?tf(n,i,l,g,k,I):Lw(n,i,B,l,g,k,I);if(!(l&v)){var ye=te&&Xe.call(n,"__wrapped__"),Ce=le&&Xe.call(i,"__wrapped__");if(ye||Ce){var Pe=ye?n.value():n,Te=Ce?i.value():i;return I||(I=new $n),k(Pe,Te,l,g,I)}}return ve?(I||(I=new $n),Rw(n,i,l,g,k,I)):!1}function aw(n){return mt(n)&&Ft(n)==_}function mc(n,i,l,g){var k=l.length,I=k,R=!g;if(n==null)return!I;for(n=et(n);k--;){var $=l[k];if(R&&$[2]?$[1]!==n[$[0]]:!($[0]in n))return!1}for(;++k<I;){$=l[k];var B=$[0],ne=n[B],te=$[1];if(R&&$[2]){if(ne===r&&!(B in n))return!1}else{var le=new $n;if(g)var ve=g(ne,te,B,n,i,le);if(!(ve===r?To(te,ne,v|E,g,le):ve))return!1}}return!0}function E1(n){return!ft(n)||Gw(n)?!1:(ir(n)?a8:e7).test(Qr(n))}function sw(n){return mt(n)&&Ut(n)==ie}function lw(n){return mt(n)&&Ft(n)==re}function cw(n){return mt(n)&&bs(n.length)&&!!lt[Ut(n)]}function A1(n){return typeof n=="function"?n:n==null?tn:typeof n=="object"?De(n)?x1(n[0],n[1]):M1(n):qf(n)}function vc(n){if(!Po(n))return h8(n);var i=[];for(var l in et(n))Xe.call(n,l)&&l!="constructor"&&i.push(l);return i}function uw(n){if(!ft(n))return Zw(n);var i=Po(n),l=[];for(var g in n)g=="constructor"&&(i||!Xe.call(n,g))||l.push(g);return l}function bc(n,i){return n<i}function S1(n,i){var l=-1,g=Qt(n)?V(n.length):[];return Sr(n,function(k,I,R){g[++l]=i(k,I,R)}),g}function M1(n){var i=Rc(n);return i.length==1&&i[0][2]?sf(i[0][0],i[0][1]):function(l){return l===n||mc(l,n,i)}}function x1(n,i){return $c(n)&&af(i)?sf(Un(n),i):function(l){var g=Vc(l,n);return g===r&&g===i?Zc(l,n):To(i,g,v|E)}}function ns(n,i,l,g,k){n!==i&&hc(i,function(I,R){if(k||(k=new $n),ft(I))dw(n,i,R,l,ns,g,k);else{var $=g?g(Nc(n,R),I,R+"",n,i,k):r;$===r&&($=I),uc(n,R,$)}},en)}function dw(n,i,l,g,k,I,R){var $=Nc(n,l),B=Nc(i,l),ne=R.get(B);if(ne){uc(n,l,ne);return}var te=I?I($,B,l+"",n,i,R):r,le=te===r;if(le){var ve=De(B),ye=!ve&&Cr(B),Ce=!ve&&!ye&&Ni(B);te=B,ve||ye||Ce?De($)?te=$:vt($)?te=Jt($):ye?(le=!1,te=B1(B,!0)):Ce?(le=!1,te=F1(B,!0)):te=[]:zo(B)||ei(B)?(te=$,ei($)?te=Nf($):(!ft($)||ir($))&&(te=of(B))):le=!1}le&&(R.set(B,te),k(te,B,g,I,R),R.delete(B)),uc(n,l,te)}function I1(n,i){var l=n.length;if(l)return i+=i<0?l:0,rr(i,l)?n[i]:r}function C1(n,i,l){i.length?i=dt(i,function(k){return De(k)?function(I){return Xr(I,k.length===1?k[0]:k)}:k}):i=[tn];var g=-1;return i=dt(i,hn(Oe())),B7(S1(n,function(k,I,R){var $=dt(i,function(B){return B(k)});return{criteria:$,index:++g,value:k}}),function(k,I){return Aw(k,I,l)})}function hw(n,i){return O1(n,i,function(l,g){return Zc(n,g)})}function O1(n,i,l){for(var g=-1,k=i.length,I={};++g<k;){var R=i[g],$=Xr(n,R);l($,R)&&Lo(I,xr(R,n),$)}return I}function fw(n){return function(i){return Xr(i,n)}}function wc(n,i,l,g){var k=g?D7:xi,I=-1,R=i.length,$=n;for(n===i&&(i=Jt(i)),l&&($=dt(n,hn(l)));++I<R;)for(var B=0,ne=i[I],te=l?l(ne):ne;(B=k($,te,B,g))>-1;)$!==n&&Za.call($,B,1),Za.call(n,B,1);return n}function T1(n,i){for(var l=n?i.length:0,g=l-1;l--;){var k=i[l];if(l==g||k!==I){var I=k;rr(k)?Za.call(n,k,1):Ec(n,k)}}return n}function _c(n,i){return n+Ka(d1()*(i-n+1))}function pw(n,i,l,g){for(var k=-1,I=Ct(ja((i-n)/(l||1)),0),R=V(I);I--;)R[g?I:++k]=n,n+=l;return R}function yc(n,i){var l="";if(!n||i<1||i>xe)return l;do i%2&&(l+=n),i=Ka(i/2),i&&(n+=n);while(i);return l}function We(n,i){return Dc(lf(n,i,tn),n+"")}function gw(n){return p1(Di(n))}function mw(n,i){var l=Di(n);return hs(l,Yr(i,0,l.length))}function Lo(n,i,l,g){if(!ft(n))return n;i=xr(i,n);for(var k=-1,I=i.length,R=I-1,$=n;$!=null&&++k<I;){var B=Un(i[k]),ne=l;if(B==="__proto__"||B==="constructor"||B==="prototype")return n;if(k!=R){var te=$[B];ne=g?g(te,B,$):r,ne===r&&(ne=ft(te)?te:rr(i[k+1])?[]:{})}Io($,B,ne),$=$[B]}return n}var L1=Ya?function(n,i){return Ya.set(n,i),n}:tn,vw=qa?function(n,i){return qa(n,"toString",{configurable:!0,enumerable:!1,value:jc(i),writable:!0})}:tn;function bw(n){return hs(Di(n))}function xn(n,i,l){var g=-1,k=n.length;i<0&&(i=-i>k?0:k+i),l=l>k?k:l,l<0&&(l+=k),k=i>l?0:l-i>>>0,i>>>=0;for(var I=V(k);++g<k;)I[g]=n[g+i];return I}function ww(n,i){var l;return Sr(n,function(g,k,I){return l=i(g,k,I),!l}),!!l}function rs(n,i,l){var g=0,k=n==null?g:n.length;if(typeof i=="number"&&i===i&&k<=Se){for(;g<k;){var I=g+k>>>1,R=n[I];R!==null&&!pn(R)&&(l?R<=i:R<i)?g=I+1:k=I}return k}return kc(n,i,tn,l)}function kc(n,i,l,g){var k=0,I=n==null?0:n.length;if(I===0)return 0;i=l(i);for(var R=i!==i,$=i===null,B=pn(i),ne=i===r;k<I;){var te=Ka((k+I)/2),le=l(n[te]),ve=le!==r,ye=le===null,Ce=le===le,Pe=pn(le);if(R)var Te=g||Ce;else ne?Te=Ce&&(g||ve):$?Te=Ce&&ve&&(g||!ye):B?Te=Ce&&ve&&!ye&&(g||!Pe):ye||Pe?Te=!1:Te=g?le<=i:le<i;Te?k=te+1:I=te}return Bt(I,U)}function R1(n,i){for(var l=-1,g=n.length,k=0,I=[];++l<g;){var R=n[l],$=i?i(R):R;if(!l||!zn($,B)){var B=$;I[k++]=R===0?0:R}}return I}function P1(n){return typeof n=="number"?n:pn(n)?Ae:+n}function fn(n){if(typeof n=="string")return n;if(De(n))return dt(n,fn)+"";if(pn(n))return h1?h1.call(n):"";var i=n+"";return i=="0"&&1/n==-ae?"-0":i}function Mr(n,i,l){var g=-1,k=za,I=n.length,R=!0,$=[],B=$;if(l)R=!1,k=Xl;else if(I>=a){var ne=i?null:Ow(n);if(ne)return Da(ne);R=!1,k=ko,B=new Kr}else B=i?[]:$;e:for(;++g<I;){var te=n[g],le=i?i(te):te;if(te=l||te!==0?te:0,R&&le===le){for(var ve=B.length;ve--;)if(B[ve]===le)continue e;i&&B.push(le),$.push(te)}else k(B,le,l)||(B!==$&&B.push(le),$.push(te))}return $}function Ec(n,i){i=xr(i,n);var l=-1,g=i.length;if(!g)return!0;for(var k=n==null||typeof n!="object"&&typeof n!="function";++l<g;){var I=i[l];if(typeof I=="string"){if(I==="__proto__"&&!Xe.call(n,"__proto__"))return!1;if(I==="constructor"&&l+1<g&&typeof i[l+1]=="string"&&i[l+1]==="prototype"){if(k&&l===0)continue;return!1}}}var R=cf(n,i);return R==null||delete R[Un(In(i))]}function $1(n,i,l,g){return Lo(n,i,l(Xr(n,i)),g)}function is(n,i,l,g){for(var k=n.length,I=g?k:-1;(g?I--:++I<k)&&i(n[I],I,n););return l?xn(n,g?0:I,g?I+1:k):xn(n,g?I+1:0,g?k:I)}function z1(n,i){var l=n;return l instanceof Ve&&(l=l.value()),Jl(i,function(g,k){return k.func.apply(k.thisArg,yr([g],k.args))},l)}function Ac(n,i,l){var g=n.length;if(g<2)return g?Mr(n[0]):[];for(var k=-1,I=V(g);++k<g;)for(var R=n[k],$=-1;++$<g;)$!=k&&(I[k]=Co(I[k]||R,n[$],i,l));return Mr(zt(I,1),i,l)}function N1(n,i,l){for(var g=-1,k=n.length,I=i.length,R={};++g<k;){var $=g<I?i[g]:r;l(R,n[g],$)}return R}function Sc(n){return vt(n)?n:[]}function Mc(n){return typeof n=="function"?n:tn}function xr(n,i){return De(n)?n:$c(n,i)?[n]:ff(Je(n))}var _w=We;function Ir(n,i,l){var g=n.length;return l=l===r?g:l,!i&&l>=g?n:xn(n,i,l)}var D1=s8||function(n){return Tt.clearTimeout(n)};function B1(n,i){if(i)return n.slice();var l=n.length,g=a1?a1(l):new n.constructor(l);return n.copy(g),g}function xc(n){var i=new n.constructor(n.byteLength);return new Wa(i).set(new Wa(n)),i}function yw(n,i){var l=i?xc(n.buffer):n.buffer;return new n.constructor(l,n.byteOffset,n.byteLength)}function kw(n){var i=new n.constructor(n.source,kh.exec(n));return i.lastIndex=n.lastIndex,i}function Ew(n){return xo?et(xo.call(n)):{}}function F1(n,i){var l=i?xc(n.buffer):n.buffer;return new n.constructor(l,n.byteOffset,n.length)}function H1(n,i){if(n!==i){var l=n!==r,g=n===null,k=n===n,I=pn(n),R=i!==r,$=i===null,B=i===i,ne=pn(i);if(!$&&!ne&&!I&&n>i||I&&R&&B&&!$&&!ne||g&&R&&B||!l&&B||!k)return 1;if(!g&&!I&&!ne&&n<i||ne&&l&&k&&!g&&!I||$&&l&&k||!R&&k||!B)return-1}return 0}function Aw(n,i,l){for(var g=-1,k=n.criteria,I=i.criteria,R=k.length,$=l.length;++g<R;){var B=H1(k[g],I[g]);if(B)return g>=$?B:B*(l[g]=="desc"?-1:1)}return n.index-i.index}function G1(n,i,l,g){for(var k=-1,I=n.length,R=l.length,$=-1,B=i.length,ne=Ct(I-R,0),te=V(B+ne),le=!g;++$<B;)te[$]=i[$];for(;++k<R;)(le||k<I)&&(te[l[k]]=n[k]);for(;ne--;)te[$++]=n[k++];return te}function U1(n,i,l,g){for(var k=-1,I=n.length,R=-1,$=l.length,B=-1,ne=i.length,te=Ct(I-$,0),le=V(te+ne),ve=!g;++k<te;)le[k]=n[k];for(var ye=k;++B<ne;)le[ye+B]=i[B];for(;++R<$;)(ve||k<I)&&(le[ye+l[R]]=n[k++]);return le}function Jt(n,i){var l=-1,g=n.length;for(i||(i=V(g));++l<g;)i[l]=n[l];return i}function Gn(n,i,l,g){var k=!l;l||(l={});for(var I=-1,R=i.length;++I<R;){var $=i[I],B=g?g(l[$],n[$],$,l,n):r;B===r&&(B=n[$]),k?er(l,$,B):Io(l,$,B)}return l}function Sw(n,i){return Gn(n,Pc(n),i)}function Mw(n,i){return Gn(n,nf(n),i)}function os(n,i){return function(l,g){var k=De(l)?L7:j8,I=i?i():{};return k(l,n,Oe(g,2),I)}}function Pi(n){return We(function(i,l){var g=-1,k=l.length,I=k>1?l[k-1]:r,R=k>2?l[2]:r;for(I=n.length>3&&typeof I=="function"?(k--,I):r,R&&Wt(l[0],l[1],R)&&(I=k<3?r:I,k=1),i=et(i);++g<k;){var $=l[g];$&&n(i,$,g,I)}return i})}function W1(n,i){return function(l,g){if(l==null)return l;if(!Qt(l))return n(l,g);for(var k=l.length,I=i?k:-1,R=et(l);(i?I--:++I<k)&&g(R[I],I,R)!==!1;);return l}}function V1(n){return function(i,l,g){for(var k=-1,I=et(i),R=g(i),$=R.length;$--;){var B=R[n?$:++k];if(l(I[B],B,I)===!1)break}return i}}function xw(n,i,l){var g=i&y,k=Ro(n);function I(){return(this&&this!==Tt&&this instanceof I?k:n).apply(g?l:this,arguments)}return I}function Z1(n){return function(i){i=Je(i);var l=Ii(i)?Pn(i):r,g=l?l[0]:i.charAt(0),k=l?Ir(l,1).join(""):i.slice(1);return g[n]()+k}}function $i(n){return function(i){return Jl(Vf(Wf(i).replace(b7,"")),n,"")}}function Ro(n){return function(){var i=arguments;switch(i.length){case 0:return new n;case 1:return new n(i[0]);case 2:return new n(i[0],i[1]);case 3:return new n(i[0],i[1],i[2]);case 4:return new n(i[0],i[1],i[2],i[3]);case 5:return new n(i[0],i[1],i[2],i[3],i[4]);case 6:return new n(i[0],i[1],i[2],i[3],i[4],i[5]);case 7:return new n(i[0],i[1],i[2],i[3],i[4],i[5],i[6])}var l=Ri(n.prototype),g=n.apply(l,i);return ft(g)?g:l}}function Iw(n,i,l){var g=Ro(n);function k(){for(var I=arguments.length,R=V(I),$=I,B=zi(k);$--;)R[$]=arguments[$];var ne=I<3&&R[0]!==B&&R[I-1]!==B?[]:kr(R,B);return I-=ne.length,I<l?X1(n,i,as,k.placeholder,r,R,ne,r,r,l-I):dn(this&&this!==Tt&&this instanceof k?g:n,this,R)}return k}function q1(n){return function(i,l,g){var k=et(i);if(!Qt(i)){var I=Oe(l,3);i=Lt(i),l=function($){return I(k[$],$,k)}}var R=n(i,l,g);return R>-1?k[I?i[R]:R]:r}}function j1(n){return nr(function(i){var l=i.length,g=l,k=Sn.prototype.thru;for(n&&i.reverse();g--;){var I=i[g];if(typeof I!="function")throw new An(c);if(k&&!R&&us(I)=="wrapper")var R=new Sn([],!0)}for(g=R?g:l;++g<l;){I=i[g];var $=us(I),B=$=="wrapper"?Lc(I):r;B&&zc(B[0])&&B[1]==(W|T|z|oe)&&!B[4].length&&B[9]==1?R=R[us(B[0])].apply(R,B[3]):R=I.length==1&&zc(I)?R[$]():R.thru(I)}return function(){var ne=arguments,te=ne[0];if(R&&ne.length==1&&De(te))return R.plant(te).value();for(var le=0,ve=l?i[le].apply(this,ne):te;++le<l;)ve=i[le].call(this,ve);return ve}})}function as(n,i,l,g,k,I,R,$,B,ne){var te=i&W,le=i&y,ve=i&S,ye=i&(T|L),Ce=i&H,Pe=ve?r:Ro(n);function Te(){for(var tt=arguments.length,Ze=V(tt),Vt=tt;Vt--;)Ze[Vt]=arguments[Vt];if(ye)var Wn=zi(Te),Or=H7(Ze,Wn);if(g&&(Ze=G1(Ze,g,k,ye)),I&&(Ze=U1(Ze,I,R,ye)),tt-=Or,ye&&tt<ne){var bt=kr(Ze,Wn);return X1(n,i,as,Te.placeholder,l,Ze,bt,$,B,ne-tt)}var Nn=le?l:this,ar=ve?Nn[n]:n;return tt=Ze.length,$?Ze=jw(Ze,$):Ce&&tt>1&&Ze.reverse(),te&&B<tt&&(Ze.length=B),this&&this!==Tt&&this instanceof Te&&(ar=Pe||Ro(ar)),ar.apply(Nn,Ze)}return Te}function K1(n,i){return function(l,g){return nw(l,n,i(g),{})}}function ss(n,i){return function(l,g){var k;if(l===r&&g===r)return i;if(l!==r&&(k=l),g!==r){if(k===r)return g;typeof l=="string"||typeof g=="string"?(l=fn(l),g=fn(g)):(l=P1(l),g=P1(g)),k=n(l,g)}return k}}function Ic(n){return nr(function(i){return i=dt(i,hn(Oe())),We(function(l){var g=this;return n(i,function(k){return dn(k,g,l)})})})}function ls(n,i){i=i===r?" ":fn(i);var l=i.length;if(l<2)return l?yc(i,n):i;var g=yc(i,ja(n/Ci(i)));return Ii(i)?Ir(Pn(g),0,n).join(""):g.slice(0,n)}function Cw(n,i,l,g){var k=i&y,I=Ro(n);function R(){for(var $=-1,B=arguments.length,ne=-1,te=g.length,le=V(te+B),ve=this&&this!==Tt&&this instanceof R?I:n;++ne<te;)le[ne]=g[ne];for(;B--;)le[ne++]=arguments[++$];return dn(ve,k?l:this,le)}return R}function Y1(n){return function(i,l,g){return g&&typeof g!="number"&&Wt(i,l,g)&&(l=g=r),i=or(i),l===r?(l=i,i=0):l=or(l),g=g===r?i<l?1:-1:or(g),pw(i,l,g,n)}}function cs(n){return function(i,l){return typeof i=="string"&&typeof l=="string"||(i=Cn(i),l=Cn(l)),n(i,l)}}function X1(n,i,l,g,k,I,R,$,B,ne){var te=i&T,le=te?R:r,ve=te?r:R,ye=te?I:r,Ce=te?r:I;i|=te?z:q,i&=~(te?q:z),i&x||(i&=~(y|S));var Pe=[n,i,k,ye,le,Ce,ve,$,B,ne],Te=l.apply(r,Pe);return zc(n)&&uf(Te,Pe),Te.placeholder=g,df(Te,n,i)}function Cc(n){var i=It[n];return function(l,g){if(l=Cn(l),g=g==null?0:Bt(He(g),292),g&&u1(l)){var k=(Je(l)+"e").split("e");return k=(Je(i(k[0]+"e"+(+k[1]+g)))+"e").split("e"),+(k[0]+"e"+(+k[1]-g))}return i(l)}}var Ow=Ti&&1/Da(new Ti([,-0]))[1]==ae?function(n){return new Ti(n)}:Xc;function J1(n){return function(i){var l=Ft(i);return l==_?oc(i):l==re?j7(i):F7(i,n(i))}}function tr(n,i,l,g,k,I,R,$){var B=i&S;if(!B&&typeof n!="function")throw new An(c);var ne=g?g.length:0;if(ne||(i&=~(z|q),g=k=r),R=R===r?R:Ct(He(R),0),$=$===r?$:He($),ne-=k?k.length:0,i&q){var te=g,le=k;g=k=r}var ve=B?r:Lc(n),ye=[n,i,l,g,k,te,le,I,R,$];if(ve&&Vw(ye,ve),n=ye[0],i=ye[1],l=ye[2],g=ye[3],k=ye[4],$=ye[9]=ye[9]===r?B?0:n.length:Ct(ye[9]-ne,0),!$&&i&(T|L)&&(i&=~(T|L)),!i||i==y)var Ce=xw(n,i,l);else i==T||i==L?Ce=Iw(n,i,$):(i==z||i==(y|z))&&!k.length?Ce=Cw(n,i,l,g):Ce=as.apply(r,ye);return df((ve?L1:uf)(Ce,ye),n,i)}function Q1(n,i,l,g){return n===r||zn(n,Oi[l])&&!Xe.call(g,l)?i:n}function ef(n,i,l,g,k,I){return ft(n)&&ft(i)&&(I.set(i,n),ns(n,i,r,ef,I),I.delete(i)),n}function Tw(n){return zo(n)?r:n}function tf(n,i,l,g,k,I){var R=l&v,$=n.length,B=i.length;if($!=B&&!(R&&B>$))return!1;var ne=I.get(n),te=I.get(i);if(ne&&te)return ne==i&&te==n;var le=-1,ve=!0,ye=l&E?new Kr:r;for(I.set(n,i),I.set(i,n);++le<$;){var Ce=n[le],Pe=i[le];if(g)var Te=R?g(Pe,Ce,le,i,n,I):g(Ce,Pe,le,n,i,I);if(Te!==r){if(Te)continue;ve=!1;break}if(ye){if(!Ql(i,function(tt,Ze){if(!ko(ye,Ze)&&(Ce===tt||k(Ce,tt,l,g,I)))return ye.push(Ze)})){ve=!1;break}}else if(!(Ce===Pe||k(Ce,Pe,l,g,I))){ve=!1;break}}return I.delete(n),I.delete(i),ve}function Lw(n,i,l,g,k,I,R){switch(l){case Fe:if(n.byteLength!=i.byteLength||n.byteOffset!=i.byteOffset)return!1;n=n.buffer,i=i.buffer;case qe:return!(n.byteLength!=i.byteLength||!I(new Wa(n),new Wa(i)));case Ne:case Ge:case ee:return zn(+n,+i);case it:return n.name==i.name&&n.message==i.message;case ie:case F:return n==i+"";case _:var $=oc;case re:var B=g&v;if($||($=Da),n.size!=i.size&&!B)return!1;var ne=R.get(n);if(ne)return ne==i;g|=E,R.set(n,i);var te=tf($(n),$(i),g,k,I,R);return R.delete(n),te;case ue:if(xo)return xo.call(n)==xo.call(i)}return!1}function Rw(n,i,l,g,k,I){var R=l&v,$=Oc(n),B=$.length;if(B!=Oc(i).length&&!R)return!1;for(var ne=B;ne--;){var te=$[ne];if(!(R?te in i:Xe.call(i,te)))return!1}var le=I.get(n),ve=I.get(i);if(le&&ve)return le==i&&ve==n;var ye=!0;I.set(n,i),I.set(i,n);for(var Ce=R;++ne<B;){te=$[ne];var Pe=n[te],Te=i[te];if(g)var tt=R?g(Te,Pe,te,i,n,I):g(Pe,Te,te,n,i,I);if(!(tt===r?Pe===Te||k(Pe,Te,l,g,I):tt)){ye=!1;break}Ce||(Ce=te=="constructor")}if(ye&&!Ce){var Ze=n.constructor,Vt=i.constructor;Ze!=Vt&&"constructor"in n&&"constructor"in i&&!(typeof Ze=="function"&&Ze instanceof Ze&&typeof Vt=="function"&&Vt instanceof Vt)&&(ye=!1)}return I.delete(n),I.delete(i),ye}function nr(n){return Dc(lf(n,r,vf),n+"")}function Oc(n){return y1(n,Lt,Pc)}function Tc(n){return y1(n,en,nf)}var Lc=Ya?function(n){return Ya.get(n)}:Xc;function us(n){for(var i=n.name+"",l=Li[i],g=Xe.call(Li,i)?l.length:0;g--;){var k=l[g],I=k.func;if(I==null||I==n)return k.name}return i}function zi(n){return(Xe.call(M,"placeholder")?M:n).placeholder}function Oe(){var n=M.iteratee||Kc;return n=n===Kc?A1:n,arguments.length?n(arguments[0],arguments[1]):n}function ds(n,i){var l=n.__data__;return Hw(i)?l[typeof i=="string"?"string":"hash"]:l.map}function Rc(n){for(var i=Lt(n),l=i.length;l--;){var g=i[l],k=n[g];i[l]=[g,k,af(k)]}return i}function Jr(n,i){var l=V7(n,i);return E1(l)?l:r}function Pw(n){var i=Xe.call(n,qr),l=n[qr];try{n[qr]=r;var g=!0}catch{}var k=Ga.call(n);return g&&(i?n[qr]=l:delete n[qr]),k}var Pc=sc?function(n){return n==null?[]:(n=et(n),_r(sc(n),function(i){return l1.call(n,i)}))}:Jc,nf=sc?function(n){for(var i=[];n;)yr(i,Pc(n)),n=Va(n);return i}:Jc,Ft=Ut;(lc&&Ft(new lc(new ArrayBuffer(1)))!=Fe||Ao&&Ft(new Ao)!=_||cc&&Ft(cc.resolve())!=C||Ti&&Ft(new Ti)!=re||So&&Ft(new So)!=de)&&(Ft=function(n){var i=Ut(n),l=i==O?n.constructor:r,g=l?Qr(l):"";if(g)switch(g){case m8:return Fe;case v8:return _;case b8:return C;case w8:return re;case _8:return de}return i});function $w(n,i,l){for(var g=-1,k=l.length;++g<k;){var I=l[g],R=I.size;switch(I.type){case"drop":n+=R;break;case"dropRight":i-=R;break;case"take":i=Bt(i,n+R);break;case"takeRight":n=Ct(n,i-R);break}}return{start:n,end:i}}function zw(n){var i=n.match(Z9);return i?i[1].split(q9):[]}function rf(n,i,l){i=xr(i,n);for(var g=-1,k=i.length,I=!1;++g<k;){var R=Un(i[g]);if(!(I=n!=null&&l(n,R)))break;n=n[R]}return I||++g!=k?I:(k=n==null?0:n.length,!!k&&bs(k)&&rr(R,k)&&(De(n)||ei(n)))}function Nw(n){var i=n.length,l=new n.constructor(i);return i&&typeof n[0]=="string"&&Xe.call(n,"index")&&(l.index=n.index,l.input=n.input),l}function of(n){return typeof n.constructor=="function"&&!Po(n)?Ri(Va(n)):{}}function Dw(n,i,l){var g=n.constructor;switch(i){case qe:return xc(n);case Ne:case Ge:return new g(+n);case Fe:return yw(n,l);case Dt:case Yn:case Xt:case Xn:case st:case br:case Vr:case un:case Ai:return F1(n,l);case _:return new g;case ee:case F:return new g(n);case ie:return kw(n);case re:return new g;case ue:return Ew(n)}}function Bw(n,i){var l=i.length;if(!l)return n;var g=l-1;return i[g]=(l>1?"& ":"")+i[g],i=i.join(l>2?", ":" "),n.replace(V9,`{
/* [wrapped with `+i+`] */
`)}function Fw(n){return De(n)||ei(n)||!!(c1&&n&&n[c1])}function rr(n,i){var l=typeof n;return i=i??xe,!!i&&(l=="number"||l!="symbol"&&n7.test(n))&&n>-1&&n%1==0&&n<i}function Wt(n,i,l){if(!ft(l))return!1;var g=typeof i;return(g=="number"?Qt(l)&&rr(i,l.length):g=="string"&&i in l)?zn(l[i],n):!1}function $c(n,i){if(De(n))return!1;var l=typeof n;return l=="number"||l=="symbol"||l=="boolean"||n==null||pn(n)?!0:H9.test(n)||!F9.test(n)||i!=null&&n in et(i)}function Hw(n){var i=typeof n;return i=="string"||i=="number"||i=="symbol"||i=="boolean"?n!=="__proto__":n===null}function zc(n){var i=us(n),l=M[i];if(typeof l!="function"||!(i in Ve.prototype))return!1;if(n===l)return!0;var g=Lc(l);return!!g&&n===g[0]}function Gw(n){return!!o1&&o1 in n}var Uw=Fa?ir:Qc;function Po(n){var i=n&&n.constructor;return n===(typeof i=="function"&&i.prototype||Oi)}function af(n){return n===n&&!ft(n)}function sf(n,i){return function(l){return l==null?!1:l[n]===i&&(i!==r||n in et(l))}}function Ww(n){var i=ms(n,function(g){return l.size===f&&l.clear(),g}),l=i.cache;return i}function Vw(n,i){var l=n[1],g=i[1],k=l|g,I=k<(y|S|W),R=g==W&&l==T||g==W&&l==oe&&n[7].length<=i[8]||g==(W|oe)&&i[7].length<=i[8]&&l==T;if(!(I||R))return n;g&y&&(n[2]=i[2],k|=l&y?0:x);var $=i[3];if($){var B=n[3];n[3]=B?G1(B,$,i[4]):$,n[4]=B?kr(n[3],p):i[4]}return $=i[5],$&&(B=n[5],n[5]=B?U1(B,$,i[6]):$,n[6]=B?kr(n[5],p):i[6]),$=i[7],$&&(n[7]=$),g&W&&(n[8]=n[8]==null?i[8]:Bt(n[8],i[8])),n[9]==null&&(n[9]=i[9]),n[0]=i[0],n[1]=k,n}function Zw(n){var i=[];if(n!=null)for(var l in et(n))i.push(l);return i}function qw(n){return Ga.call(n)}function lf(n,i,l){return i=Ct(i===r?n.length-1:i,0),function(){for(var g=arguments,k=-1,I=Ct(g.length-i,0),R=V(I);++k<I;)R[k]=g[i+k];k=-1;for(var $=V(i+1);++k<i;)$[k]=g[k];return $[i]=l(R),dn(n,this,$)}}function cf(n,i){return i.length<2?n:Xr(n,xn(i,0,-1))}function jw(n,i){for(var l=n.length,g=Bt(i.length,l),k=Jt(n);g--;){var I=i[g];n[g]=rr(I,l)?k[I]:r}return n}function Nc(n,i){if(!(i==="constructor"&&typeof n[i]=="function")&&i!="__proto__")return n[i]}var uf=hf(L1),$o=c8||function(n,i){return Tt.setTimeout(n,i)},Dc=hf(vw);function df(n,i,l){var g=i+"";return Dc(n,Bw(g,Kw(zw(g),l)))}function hf(n){var i=0,l=0;return function(){var g=f8(),k=j-(g-l);if(l=g,k>0){if(++i>=P)return arguments[0]}else i=0;return n.apply(r,arguments)}}function hs(n,i){var l=-1,g=n.length,k=g-1;for(i=i===r?g:i;++l<i;){var I=_c(l,k),R=n[I];n[I]=n[l],n[l]=R}return n.length=i,n}var ff=Ww(function(n){var i=[];return n.charCodeAt(0)===46&&i.push(""),n.replace(G9,function(l,g,k,I){i.push(k?I.replace(Y9,"$1"):g||l)}),i});function Un(n){if(typeof n=="string"||pn(n))return n;var i=n+"";return i=="0"&&1/n==-ae?"-0":i}function Qr(n){if(n!=null){try{return Ha.call(n)}catch{}try{return n+""}catch{}}return""}function Kw(n,i){return En(ge,function(l){var g="_."+l[0];i&l[1]&&!za(n,g)&&n.push(g)}),n.sort()}function pf(n){if(n instanceof Ve)return n.clone();var i=new Sn(n.__wrapped__,n.__chain__);return i.__actions__=Jt(n.__actions__),i.__index__=n.__index__,i.__values__=n.__values__,i}function Yw(n,i,l){(l?Wt(n,i,l):i===r)?i=1:i=Ct(He(i),0);var g=n==null?0:n.length;if(!g||i<1)return[];for(var k=0,I=0,R=V(ja(g/i));k<g;)R[I++]=xn(n,k,k+=i);return R}function Xw(n){for(var i=-1,l=n==null?0:n.length,g=0,k=[];++i<l;){var I=n[i];I&&(k[g++]=I)}return k}function Jw(){var n=arguments.length;if(!n)return[];for(var i=V(n-1),l=arguments[0],g=n;g--;)i[g-1]=arguments[g];return yr(De(l)?Jt(l):[l],zt(i,1))}var Qw=We(function(n,i){return vt(n)?Co(n,zt(i,1,vt,!0)):[]}),e_=We(function(n,i){var l=In(i);return vt(l)&&(l=r),vt(n)?Co(n,zt(i,1,vt,!0),Oe(l,2)):[]}),t_=We(function(n,i){var l=In(i);return vt(l)&&(l=r),vt(n)?Co(n,zt(i,1,vt,!0),r,l):[]});function n_(n,i,l){var g=n==null?0:n.length;return g?(i=l||i===r?1:He(i),xn(n,i<0?0:i,g)):[]}function r_(n,i,l){var g=n==null?0:n.length;return g?(i=l||i===r?1:He(i),i=g-i,xn(n,0,i<0?0:i)):[]}function i_(n,i){return n&&n.length?is(n,Oe(i,3),!0,!0):[]}function o_(n,i){return n&&n.length?is(n,Oe(i,3),!0):[]}function a_(n,i,l,g){var k=n==null?0:n.length;return k?(l&&typeof l!="number"&&Wt(n,i,l)&&(l=0,g=k),J8(n,i,l,g)):[]}function gf(n,i,l){var g=n==null?0:n.length;if(!g)return-1;var k=l==null?0:He(l);return k<0&&(k=Ct(g+k,0)),Na(n,Oe(i,3),k)}function mf(n,i,l){var g=n==null?0:n.length;if(!g)return-1;var k=g-1;return l!==r&&(k=He(l),k=l<0?Ct(g+k,0):Bt(k,g-1)),Na(n,Oe(i,3),k,!0)}function vf(n){return n!=null&&n.length?zt(n,1):[]}function s_(n){return n!=null&&n.length?zt(n,ae):[]}function l_(n,i){return n!=null&&n.length?(i=i===r?1:He(i),zt(n,i)):[]}function c_(n){for(var i=-1,l=n==null?0:n.length,g={};++i<l;){var k=n[i];g[k[0]]=k[1]}return g}function bf(n){return n&&n.length?n[0]:r}function u_(n,i,l){var g=n==null?0:n.length;if(!g)return-1;var k=l==null?0:He(l);return k<0&&(k=Ct(g+k,0)),xi(n,i,k)}function d_(n){return n!=null&&n.length?xn(n,0,-1):[]}var h_=We(function(n){var i=dt(n,Sc);return i.length&&i[0]===n[0]?gc(i):[]}),f_=We(function(n){var i=In(n),l=dt(n,Sc);return i===In(l)?i=r:l.pop(),l.length&&l[0]===n[0]?gc(l,Oe(i,2)):[]}),p_=We(function(n){var i=In(n),l=dt(n,Sc);return i=typeof i=="function"?i:r,i&&l.pop(),l.length&&l[0]===n[0]?gc(l,r,i):[]});function g_(n,i){return n==null?"":d8.call(n,i)}function In(n){var i=n==null?0:n.length;return i?n[i-1]:r}function m_(n,i,l){var g=n==null?0:n.length;if(!g)return-1;var k=g;return l!==r&&(k=He(l),k=k<0?Ct(g+k,0):Bt(k,g-1)),i===i?Y7(n,i,k):Na(n,Xh,k,!0)}function v_(n,i){return n&&n.length?I1(n,He(i)):r}var b_=We(wf);function wf(n,i){return n&&n.length&&i&&i.length?wc(n,i):n}function w_(n,i,l){return n&&n.length&&i&&i.length?wc(n,i,Oe(l,2)):n}function __(n,i,l){return n&&n.length&&i&&i.length?wc(n,i,r,l):n}var y_=nr(function(n,i){var l=n==null?0:n.length,g=dc(n,i);return T1(n,dt(i,function(k){return rr(k,l)?+k:k}).sort(H1)),g});function k_(n,i){var l=[];if(!(n&&n.length))return l;var g=-1,k=[],I=n.length;for(i=Oe(i,3);++g<I;){var R=n[g];i(R,g,n)&&(l.push(R),k.push(g))}return T1(n,k),l}function Bc(n){return n==null?n:g8.call(n)}function E_(n,i,l){var g=n==null?0:n.length;return g?(l&&typeof l!="number"&&Wt(n,i,l)?(i=0,l=g):(i=i==null?0:He(i),l=l===r?g:He(l)),xn(n,i,l)):[]}function A_(n,i){return rs(n,i)}function S_(n,i,l){return kc(n,i,Oe(l,2))}function M_(n,i){var l=n==null?0:n.length;if(l){var g=rs(n,i);if(g<l&&zn(n[g],i))return g}return-1}function x_(n,i){return rs(n,i,!0)}function I_(n,i,l){return kc(n,i,Oe(l,2),!0)}function C_(n,i){if(n!=null&&n.length){var l=rs(n,i,!0)-1;if(zn(n[l],i))return l}return-1}function O_(n){return n&&n.length?R1(n):[]}function T_(n,i){return n&&n.length?R1(n,Oe(i,2)):[]}function L_(n){var i=n==null?0:n.length;return i?xn(n,1,i):[]}function R_(n,i,l){return n&&n.length?(i=l||i===r?1:He(i),xn(n,0,i<0?0:i)):[]}function P_(n,i,l){var g=n==null?0:n.length;return g?(i=l||i===r?1:He(i),i=g-i,xn(n,i<0?0:i,g)):[]}function $_(n,i){return n&&n.length?is(n,Oe(i,3),!1,!0):[]}function z_(n,i){return n&&n.length?is(n,Oe(i,3)):[]}var N_=We(function(n){return Mr(zt(n,1,vt,!0))}),D_=We(function(n){var i=In(n);return vt(i)&&(i=r),Mr(zt(n,1,vt,!0),Oe(i,2))}),B_=We(function(n){var i=In(n);return i=typeof i=="function"?i:r,Mr(zt(n,1,vt,!0),r,i)});function F_(n){return n&&n.length?Mr(n):[]}function H_(n,i){return n&&n.length?Mr(n,Oe(i,2)):[]}function G_(n,i){return i=typeof i=="function"?i:r,n&&n.length?Mr(n,r,i):[]}function Fc(n){if(!(n&&n.length))return[];var i=0;return n=_r(n,function(l){if(vt(l))return i=Ct(l.length,i),!0}),rc(i,function(l){return dt(n,ec(l))})}function _f(n,i){if(!(n&&n.length))return[];var l=Fc(n);return i==null?l:dt(l,function(g){return dn(i,r,g)})}var U_=We(function(n,i){return vt(n)?Co(n,i):[]}),W_=We(function(n){return Ac(_r(n,vt))}),V_=We(function(n){var i=In(n);return vt(i)&&(i=r),Ac(_r(n,vt),Oe(i,2))}),Z_=We(function(n){var i=In(n);return i=typeof i=="function"?i:r,Ac(_r(n,vt),r,i)}),q_=We(Fc);function j_(n,i){return N1(n||[],i||[],Io)}function K_(n,i){return N1(n||[],i||[],Lo)}var Y_=We(function(n){var i=n.length,l=i>1?n[i-1]:r;return l=typeof l=="function"?(n.pop(),l):r,_f(n,l)});function yf(n){var i=M(n);return i.__chain__=!0,i}function X_(n,i){return i(n),n}function fs(n,i){return i(n)}var J_=nr(function(n){var i=n.length,l=i?n[0]:0,g=this.__wrapped__,k=function(I){return dc(I,n)};return i>1||this.__actions__.length||!(g instanceof Ve)||!rr(l)?this.thru(k):(g=g.slice(l,+l+(i?1:0)),g.__actions__.push({func:fs,args:[k],thisArg:r}),new Sn(g,this.__chain__).thru(function(I){return i&&!I.length&&I.push(r),I}))});function Q_(){return yf(this)}function ey(){return new Sn(this.value(),this.__chain__)}function ty(){this.__values__===r&&(this.__values__=$f(this.value()));var n=this.__index__>=this.__values__.length,i=n?r:this.__values__[this.__index__++];return{done:n,value:i}}function ny(){return this}function ry(n){for(var i,l=this;l instanceof Ja;){var g=pf(l);g.__index__=0,g.__values__=r,i?k.__wrapped__=g:i=g;var k=g;l=l.__wrapped__}return k.__wrapped__=n,i}function iy(){var n=this.__wrapped__;if(n instanceof Ve){var i=n;return this.__actions__.length&&(i=new Ve(this)),i=i.reverse(),i.__actions__.push({func:fs,args:[Bc],thisArg:r}),new Sn(i,this.__chain__)}return this.thru(Bc)}function oy(){return z1(this.__wrapped__,this.__actions__)}var ay=os(function(n,i,l){Xe.call(n,l)?++n[l]:er(n,l,1)});function sy(n,i,l){var g=De(n)?Kh:X8;return l&&Wt(n,i,l)&&(i=r),g(n,Oe(i,3))}function ly(n,i){return(De(n)?_r:w1)(n,Oe(i,3))}var cy=q1(gf),uy=q1(mf);function dy(n,i){return zt(ps(n,i),1)}function hy(n,i){return zt(ps(n,i),ae)}function fy(n,i,l){return l=l===r?1:He(l),zt(ps(n,i),l)}function kf(n,i){return(De(n)?En:Sr)(n,Oe(i,3))}function Ef(n,i){return(De(n)?R7:b1)(n,Oe(i,3))}var py=os(function(n,i,l){Xe.call(n,l)?n[l].push(i):er(n,l,[i])});function gy(n,i,l,g){n=Qt(n)?n:Di(n),l=l&&!g?He(l):0;var k=n.length;return l<0&&(l=Ct(k+l,0)),ws(n)?l<=k&&n.indexOf(i,l)>-1:!!k&&xi(n,i,l)>-1}var my=We(function(n,i,l){var g=-1,k=typeof i=="function",I=Qt(n)?V(n.length):[];return Sr(n,function(R){I[++g]=k?dn(i,R,l):Oo(R,i,l)}),I}),vy=os(function(n,i,l){er(n,l,i)});function ps(n,i){return(De(n)?dt:S1)(n,Oe(i,3))}function by(n,i,l,g){return n==null?[]:(De(i)||(i=i==null?[]:[i]),l=g?r:l,De(l)||(l=l==null?[]:[l]),C1(n,i,l))}var wy=os(function(n,i,l){n[l?0:1].push(i)},function(){return[[],[]]});function _y(n,i,l){var g=De(n)?Jl:Qh,k=arguments.length<3;return g(n,Oe(i,4),l,k,Sr)}function yy(n,i,l){var g=De(n)?P7:Qh,k=arguments.length<3;return g(n,Oe(i,4),l,k,b1)}function ky(n,i){return(De(n)?_r:w1)(n,vs(Oe(i,3)))}function Ey(n){return(De(n)?p1:gw)(n)}function Ay(n,i,l){return(l?Wt(n,i,l):i===r)?i=1:i=He(i),(De(n)?Z8:mw)(n,i)}function Sy(n){return(De(n)?q8:bw)(n)}function My(n){if(n==null)return 0;if(Qt(n))return ws(n)?Ci(n):n.length;var i=Ft(n);return i==_||i==re?n.size:vc(n).length}function xy(n,i,l){var g=De(n)?Ql:ww;return l&&Wt(n,i,l)&&(i=r),g(n,Oe(i,3))}var Iy=We(function(n,i){if(n==null)return[];var l=i.length;return l>1&&Wt(n,i[0],i[1])?i=[]:l>2&&Wt(i[0],i[1],i[2])&&(i=[i[0]]),C1(n,zt(i,1),[])}),gs=l8||function(){return Tt.Date.now()};function Cy(n,i){if(typeof i!="function")throw new An(c);return n=He(n),function(){if(--n<1)return i.apply(this,arguments)}}function Af(n,i,l){return i=l?r:i,i=n&&i==null?n.length:i,tr(n,W,r,r,r,r,i)}function Sf(n,i){var l;if(typeof i!="function")throw new An(c);return n=He(n),function(){return--n>0&&(l=i.apply(this,arguments)),n<=1&&(i=r),l}}var Hc=We(function(n,i,l){var g=y;if(l.length){var k=kr(l,zi(Hc));g|=z}return tr(n,g,i,l,k)}),Mf=We(function(n,i,l){var g=y|S;if(l.length){var k=kr(l,zi(Mf));g|=z}return tr(i,g,n,l,k)});function xf(n,i,l){i=l?r:i;var g=tr(n,T,r,r,r,r,r,i);return g.placeholder=xf.placeholder,g}function If(n,i,l){i=l?r:i;var g=tr(n,L,r,r,r,r,r,i);return g.placeholder=If.placeholder,g}function Cf(n,i,l){var g,k,I,R,$,B,ne=0,te=!1,le=!1,ve=!0;if(typeof n!="function")throw new An(c);i=Cn(i)||0,ft(l)&&(te=!!l.leading,le="maxWait"in l,I=le?Ct(Cn(l.maxWait)||0,i):I,ve="trailing"in l?!!l.trailing:ve);function ye(bt){var Nn=g,ar=k;return g=k=r,ne=bt,R=n.apply(ar,Nn),R}function Ce(bt){return ne=bt,$=$o(tt,i),te?ye(bt):R}function Pe(bt){var Nn=bt-B,ar=bt-ne,jf=i-Nn;return le?Bt(jf,I-ar):jf}function Te(bt){var Nn=bt-B,ar=bt-ne;return B===r||Nn>=i||Nn<0||le&&ar>=I}function tt(){var bt=gs();if(Te(bt))return Ze(bt);$=$o(tt,Pe(bt))}function Ze(bt){return $=r,ve&&g?ye(bt):(g=k=r,R)}function Vt(){$!==r&&D1($),ne=0,g=B=k=$=r}function Wn(){return $===r?R:Ze(gs())}function Or(){var bt=gs(),Nn=Te(bt);if(g=arguments,k=this,B=bt,Nn){if($===r)return Ce(B);if(le)return D1($),$=$o(tt,i),ye(B)}return $===r&&($=$o(tt,i)),R}return Or.cancel=Vt,Or.flush=Wn,Or}var Oy=We(function(n,i){return v1(n,1,i)}),Ty=We(function(n,i,l){return v1(n,Cn(i)||0,l)});function Ly(n){return tr(n,H)}function ms(n,i){if(typeof n!="function"||i!=null&&typeof i!="function")throw new An(c);var l=function(){var g=arguments,k=i?i.apply(this,g):g[0],I=l.cache;if(I.has(k))return I.get(k);var R=n.apply(this,g);return l.cache=I.set(k,R)||I,R};return l.cache=new(ms.Cache||Qn),l}ms.Cache=Qn;function vs(n){if(typeof n!="function")throw new An(c);return function(){var i=arguments;switch(i.length){case 0:return!n.call(this);case 1:return!n.call(this,i[0]);case 2:return!n.call(this,i[0],i[1]);case 3:return!n.call(this,i[0],i[1],i[2])}return!n.apply(this,i)}}function Ry(n){return Sf(2,n)}var Py=_w(function(n,i){i=i.length==1&&De(i[0])?dt(i[0],hn(Oe())):dt(zt(i,1),hn(Oe()));var l=i.length;return We(function(g){for(var k=-1,I=Bt(g.length,l);++k<I;)g[k]=i[k].call(this,g[k]);return dn(n,this,g)})}),Gc=We(function(n,i){return tr(n,z,r,i,kr(i,zi(Gc)))}),Of=We(function(n,i){return tr(n,q,r,i,kr(i,zi(Of)))}),$y=nr(function(n,i){return tr(n,oe,r,r,r,i)});function zy(n,i){if(typeof n!="function")throw new An(c);return i=i===r?i:He(i),We(n,i)}function Ny(n,i){if(typeof n!="function")throw new An(c);return i=i==null?0:Ct(He(i),0),We(function(l){var g=l[i],k=Ir(l,0,i);return g&&yr(k,g),dn(n,this,k)})}function Dy(n,i,l){var g=!0,k=!0;if(typeof n!="function")throw new An(c);return ft(l)&&(g="leading"in l?!!l.leading:g,k="trailing"in l?!!l.trailing:k),Cf(n,i,{leading:g,maxWait:i,trailing:k})}function By(n){return Af(n,1)}function Fy(n,i){return Gc(Mc(i),n)}function Hy(){if(!arguments.length)return[];var n=arguments[0];return De(n)?n:[n]}function Gy(n){return Mn(n,m)}function Uy(n,i){return i=typeof i=="function"?i:r,Mn(n,m,i)}function Wy(n){return Mn(n,b|m)}function Vy(n,i){return i=typeof i=="function"?i:r,Mn(n,b|m,i)}function Zy(n,i){return i==null||m1(n,i,Lt(i))}function zn(n,i){return n===i||n!==n&&i!==i}var qy=cs(pc),jy=cs(function(n,i){return n>=i}),ei=k1((function(){return arguments})())?k1:function(n){return mt(n)&&Xe.call(n,"callee")&&!l1.call(n,"callee")},De=V.isArray,Ky=Uh?hn(Uh):rw;function Qt(n){return n!=null&&bs(n.length)&&!ir(n)}function vt(n){return mt(n)&&Qt(n)}function Yy(n){return n===!0||n===!1||mt(n)&&Ut(n)==Ne}var Cr=u8||Qc,Xy=Wh?hn(Wh):iw;function Jy(n){return mt(n)&&n.nodeType===1&&!zo(n)}function Qy(n){if(n==null)return!0;if(Qt(n)&&(De(n)||typeof n=="string"||typeof n.splice=="function"||Cr(n)||Ni(n)||ei(n)))return!n.length;var i=Ft(n);if(i==_||i==re)return!n.size;if(Po(n))return!vc(n).length;for(var l in n)if(Xe.call(n,l))return!1;return!0}function ek(n,i){return To(n,i)}function tk(n,i,l){l=typeof l=="function"?l:r;var g=l?l(n,i):r;return g===r?To(n,i,r,l):!!g}function Uc(n){if(!mt(n))return!1;var i=Ut(n);return i==it||i==At||typeof n.message=="string"&&typeof n.name=="string"&&!zo(n)}function nk(n){return typeof n=="number"&&u1(n)}function ir(n){if(!ft(n))return!1;var i=Ut(n);return i==Gt||i==Yt||i==Et||i==D}function Tf(n){return typeof n=="number"&&n==He(n)}function bs(n){return typeof n=="number"&&n>-1&&n%1==0&&n<=xe}function ft(n){var i=typeof n;return n!=null&&(i=="object"||i=="function")}function mt(n){return n!=null&&typeof n=="object"}var Lf=Vh?hn(Vh):aw;function rk(n,i){return n===i||mc(n,i,Rc(i))}function ik(n,i,l){return l=typeof l=="function"?l:r,mc(n,i,Rc(i),l)}function ok(n){return Rf(n)&&n!=+n}function ak(n){if(Uw(n))throw new Re(s);return E1(n)}function sk(n){return n===null}function lk(n){return n==null}function Rf(n){return typeof n=="number"||mt(n)&&Ut(n)==ee}function zo(n){if(!mt(n)||Ut(n)!=O)return!1;var i=Va(n);if(i===null)return!0;var l=Xe.call(i,"constructor")&&i.constructor;return typeof l=="function"&&l instanceof l&&Ha.call(l)==i8}var Wc=Zh?hn(Zh):sw;function ck(n){return Tf(n)&&n>=-xe&&n<=xe}var Pf=qh?hn(qh):lw;function ws(n){return typeof n=="string"||!De(n)&&mt(n)&&Ut(n)==F}function pn(n){return typeof n=="symbol"||mt(n)&&Ut(n)==ue}var Ni=jh?hn(jh):cw;function uk(n){return n===r}function dk(n){return mt(n)&&Ft(n)==de}function hk(n){return mt(n)&&Ut(n)==Me}var fk=cs(bc),pk=cs(function(n,i){return n<=i});function $f(n){if(!n)return[];if(Qt(n))return ws(n)?Pn(n):Jt(n);if(Eo&&n[Eo])return q7(n[Eo]());var i=Ft(n);return(i==_?oc:i==re?Da:Di)(n)}function or(n){return n?(n=Cn(n),n===ae||n===-ae?(n<0?-1:1)*se:n===n?n:0):n===0?n:0}function He(n){var i=or(n),l=i%1;return i===i?l?i-l:i:0}function zf(n){return n?Yr(He(n),0,G):0}function Cn(n){if(typeof n=="number")return n;if(pn(n))return Ae;if(ft(n)){var i=typeof n.valueOf=="function"?n.valueOf():n;n=ft(i)?i+"":i}if(typeof n!="string")return n===0?n:+n;n=e1(n);var l=Q9.test(n);return l||t7.test(n)?O7(n.slice(2),l?2:8):J9.test(n)?Ae:+n}function Nf(n){return Gn(n,en(n))}function gk(n){return n?Yr(He(n),-xe,xe):n===0?n:0}function Je(n){return n==null?"":fn(n)}var mk=Pi(function(n,i){if(Po(i)||Qt(i)){Gn(i,Lt(i),n);return}for(var l in i)Xe.call(i,l)&&Io(n,l,i[l])}),Df=Pi(function(n,i){Gn(i,en(i),n)}),_s=Pi(function(n,i,l,g){Gn(i,en(i),n,g)}),vk=Pi(function(n,i,l,g){Gn(i,Lt(i),n,g)}),bk=nr(dc);function wk(n,i){var l=Ri(n);return i==null?l:g1(l,i)}var _k=We(function(n,i){n=et(n);var l=-1,g=i.length,k=g>2?i[2]:r;for(k&&Wt(i[0],i[1],k)&&(g=1);++l<g;)for(var I=i[l],R=en(I),$=-1,B=R.length;++$<B;){var ne=R[$],te=n[ne];(te===r||zn(te,Oi[ne])&&!Xe.call(n,ne))&&(n[ne]=I[ne])}return n}),yk=We(function(n){return n.push(r,ef),dn(Bf,r,n)});function kk(n,i){return Yh(n,Oe(i,3),Hn)}function Ek(n,i){return Yh(n,Oe(i,3),fc)}function Ak(n,i){return n==null?n:hc(n,Oe(i,3),en)}function Sk(n,i){return n==null?n:_1(n,Oe(i,3),en)}function Mk(n,i){return n&&Hn(n,Oe(i,3))}function xk(n,i){return n&&fc(n,Oe(i,3))}function Ik(n){return n==null?[]:ts(n,Lt(n))}function Ck(n){return n==null?[]:ts(n,en(n))}function Vc(n,i,l){var g=n==null?r:Xr(n,i);return g===r?l:g}function Ok(n,i){return n!=null&&rf(n,i,Q8)}function Zc(n,i){return n!=null&&rf(n,i,ew)}var Tk=K1(function(n,i,l){i!=null&&typeof i.toString!="function"&&(i=Ga.call(i)),n[i]=l},jc(tn)),Lk=K1(function(n,i,l){i!=null&&typeof i.toString!="function"&&(i=Ga.call(i)),Xe.call(n,i)?n[i].push(l):n[i]=[l]},Oe),Rk=We(Oo);function Lt(n){return Qt(n)?f1(n):vc(n)}function en(n){return Qt(n)?f1(n,!0):uw(n)}function Pk(n,i){var l={};return i=Oe(i,3),Hn(n,function(g,k,I){er(l,i(g,k,I),g)}),l}function $k(n,i){var l={};return i=Oe(i,3),Hn(n,function(g,k,I){er(l,k,i(g,k,I))}),l}var zk=Pi(function(n,i,l){ns(n,i,l)}),Bf=Pi(function(n,i,l,g){ns(n,i,l,g)}),Nk=nr(function(n,i){var l={};if(n==null)return l;var g=!1;i=dt(i,function(I){return I=xr(I,n),g||(g=I.length>1),I}),Gn(n,Tc(n),l),g&&(l=Mn(l,b|w|m,Tw));for(var k=i.length;k--;)Ec(l,i[k]);return l});function Dk(n,i){return Ff(n,vs(Oe(i)))}var Bk=nr(function(n,i){return n==null?{}:hw(n,i)});function Ff(n,i){if(n==null)return{};var l=dt(Tc(n),function(g){return[g]});return i=Oe(i),O1(n,l,function(g,k){return i(g,k[0])})}function Fk(n,i,l){i=xr(i,n);var g=-1,k=i.length;for(k||(k=1,n=r);++g<k;){var I=n==null?r:n[Un(i[g])];I===r&&(g=k,I=l),n=ir(I)?I.call(n):I}return n}function Hk(n,i,l){return n==null?n:Lo(n,i,l)}function Gk(n,i,l,g){return g=typeof g=="function"?g:r,n==null?n:Lo(n,i,l,g)}var Hf=J1(Lt),Gf=J1(en);function Uk(n,i,l){var g=De(n),k=g||Cr(n)||Ni(n);if(i=Oe(i,4),l==null){var I=n&&n.constructor;k?l=g?new I:[]:ft(n)?l=ir(I)?Ri(Va(n)):{}:l={}}return(k?En:Hn)(n,function(R,$,B){return i(l,R,$,B)}),l}function Wk(n,i){return n==null?!0:Ec(n,i)}function Vk(n,i,l){return n==null?n:$1(n,i,Mc(l))}function Zk(n,i,l,g){return g=typeof g=="function"?g:r,n==null?n:$1(n,i,Mc(l),g)}function Di(n){return n==null?[]:ic(n,Lt(n))}function qk(n){return n==null?[]:ic(n,en(n))}function jk(n,i,l){return l===r&&(l=i,i=r),l!==r&&(l=Cn(l),l=l===l?l:0),i!==r&&(i=Cn(i),i=i===i?i:0),Yr(Cn(n),i,l)}function Kk(n,i,l){return i=or(i),l===r?(l=i,i=0):l=or(l),n=Cn(n),tw(n,i,l)}function Yk(n,i,l){if(l&&typeof l!="boolean"&&Wt(n,i,l)&&(i=l=r),l===r&&(typeof i=="boolean"?(l=i,i=r):typeof n=="boolean"&&(l=n,n=r)),n===r&&i===r?(n=0,i=1):(n=or(n),i===r?(i=n,n=0):i=or(i)),n>i){var g=n;n=i,i=g}if(l||n%1||i%1){var k=d1();return Bt(n+k*(i-n+C7("1e-"+((k+"").length-1))),i)}return _c(n,i)}var Xk=$i(function(n,i,l){return i=i.toLowerCase(),n+(l?Uf(i):i)});function Uf(n){return qc(Je(n).toLowerCase())}function Wf(n){return n=Je(n),n&&n.replace(r7,G7).replace(w7,"")}function Jk(n,i,l){n=Je(n),i=fn(i);var g=n.length;l=l===r?g:Yr(He(l),0,g);var k=l;return l-=i.length,l>=0&&n.slice(l,k)==i}function Qk(n){return n=Je(n),n&&N9.test(n)?n.replace(wr,U7):n}function eE(n){return n=Je(n),n&&U9.test(n)?n.replace(Gl,"\\$&"):n}var tE=$i(function(n,i,l){return n+(l?"-":"")+i.toLowerCase()}),nE=$i(function(n,i,l){return n+(l?" ":"")+i.toLowerCase()}),rE=Z1("toLowerCase");function iE(n,i,l){n=Je(n),i=He(i);var g=i?Ci(n):0;if(!i||g>=i)return n;var k=(i-g)/2;return ls(Ka(k),l)+n+ls(ja(k),l)}function oE(n,i,l){n=Je(n),i=He(i);var g=i?Ci(n):0;return i&&g<i?n+ls(i-g,l):n}function aE(n,i,l){n=Je(n),i=He(i);var g=i?Ci(n):0;return i&&g<i?ls(i-g,l)+n:n}function sE(n,i,l){return l||i==null?i=0:i&&(i=+i),p8(Je(n).replace(Ul,""),i||0)}function lE(n,i,l){return(l?Wt(n,i,l):i===r)?i=1:i=He(i),yc(Je(n),i)}function cE(){var n=arguments,i=Je(n[0]);return n.length<3?i:i.replace(n[1],n[2])}var uE=$i(function(n,i,l){return n+(l?"_":"")+i.toLowerCase()});function dE(n,i,l){return l&&typeof l!="number"&&Wt(n,i,l)&&(i=l=r),l=l===r?G:l>>>0,l?(n=Je(n),n&&(typeof i=="string"||i!=null&&!Wc(i))&&(i=fn(i),!i&&Ii(n))?Ir(Pn(n),0,l):n.split(i,l)):[]}var hE=$i(function(n,i,l){return n+(l?" ":"")+qc(i)});function fE(n,i,l){return n=Je(n),l=l==null?0:Yr(He(l),0,n.length),i=fn(i),n.slice(l,l+i.length)==i}function pE(n,i,l){var g=M.templateSettings;l&&Wt(n,i,l)&&(i=r),n=Je(n),i=_s({},i,g,Q1);var k=_s({},i.imports,g.imports,Q1),I=Lt(k),R=ic(k,I),$,B,ne=0,te=i.interpolate||Ra,le="__p += '",ve=ac((i.escape||Ra).source+"|"+te.source+"|"+(te===yh?X9:Ra).source+"|"+(i.evaluate||Ra).source+"|$","g"),ye="//# sourceURL="+(Xe.call(i,"sourceURL")?(i.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++A7+"]")+`
`;n.replace(ve,function(Te,tt,Ze,Vt,Wn,Or){return Ze||(Ze=Vt),le+=n.slice(ne,Or).replace(i7,W7),tt&&($=!0,le+=`' +
__e(`+tt+`) +
'`),Wn&&(B=!0,le+=`';
`+Wn+`;
__p += '`),Ze&&(le+=`' +
((__t = (`+Ze+`)) == null ? '' : __t) +
'`),ne=Or+Te.length,Te}),le+=`';
`;var Ce=Xe.call(i,"variable")&&i.variable;if(!Ce)le=`with (obj) {
`+le+`
}
`;else if(K9.test(Ce))throw new Re(h);le=(B?le.replace(Bl,""):le).replace(Fl,"$1").replace(Hl,"$1;"),le="function("+(Ce||"obj")+`) {
`+(Ce?"":`obj || (obj = {});
`)+"var __t, __p = ''"+($?", __e = _.escape":"")+(B?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+le+`return __p
}`;var Pe=Zf(function(){return Ke(I,ye+"return "+le).apply(r,R)});if(Pe.source=le,Uc(Pe))throw Pe;return Pe}function gE(n){return Je(n).toLowerCase()}function mE(n){return Je(n).toUpperCase()}function vE(n,i,l){if(n=Je(n),n&&(l||i===r))return e1(n);if(!n||!(i=fn(i)))return n;var g=Pn(n),k=Pn(i);return Ir(g,t1(g,k),n1(g,k)+1).join("")}function bE(n,i,l){if(n=Je(n),n&&(l||i===r))return n.slice(0,i1(n)+1);if(!n||!(i=fn(i)))return n;var g=Pn(n);return Ir(g,0,n1(g,Pn(i))+1).join("")}function wE(n,i,l){if(n=Je(n),n&&(l||i===r))return n.replace(Ul,"");if(!n||!(i=fn(i)))return n;var g=Pn(n);return Ir(g,t1(g,Pn(i))).join("")}function _E(n,i){var l=pe,g=_e;if(ft(i)){var k="separator"in i?i.separator:k;l="length"in i?He(i.length):l,g="omission"in i?fn(i.omission):g}n=Je(n);var I=n.length;if(Ii(n)){var R=Pn(n);I=R.length}if(l>=I)return n;var $=l-Ci(g);if($<1)return g;var B=R?Ir(R,0,$).join(""):n.slice(0,$);if(k===r)return B+g;if(R&&($+=B.length-$),Wc(k)){if(n.slice($).search(k)){var ne,te=B;for(k.global||(k=ac(k.source,Je(kh.exec(k))+"g")),k.lastIndex=0;ne=k.exec(te);)var le=ne.index;B=B.slice(0,le===r?$:le)}}else if(n.indexOf(fn(k),$)!=$){var ve=B.lastIndexOf(k);ve>-1&&(B=B.slice(0,ve))}return B+g}function yE(n){return n=Je(n),n&&Si.test(n)?n.replace(yo,X7):n}var kE=$i(function(n,i,l){return n+(l?" ":"")+i.toUpperCase()}),qc=Z1("toUpperCase");function Vf(n,i,l){return n=Je(n),i=l?r:i,i===r?Z7(n)?e8(n):N7(n):n.match(i)||[]}var Zf=We(function(n,i){try{return dn(n,r,i)}catch(l){return Uc(l)?l:new Re(l)}}),EE=nr(function(n,i){return En(i,function(l){l=Un(l),er(n,l,Hc(n[l],n))}),n});function AE(n){var i=n==null?0:n.length,l=Oe();return n=i?dt(n,function(g){if(typeof g[1]!="function")throw new An(c);return[l(g[0]),g[1]]}):[],We(function(g){for(var k=-1;++k<i;){var I=n[k];if(dn(I[0],this,g))return dn(I[1],this,g)}})}function SE(n){return Y8(Mn(n,b))}function jc(n){return function(){return n}}function ME(n,i){return n==null||n!==n?i:n}var xE=j1(),IE=j1(!0);function tn(n){return n}function Kc(n){return A1(typeof n=="function"?n:Mn(n,b))}function CE(n){return M1(Mn(n,b))}function OE(n,i){return x1(n,Mn(i,b))}var TE=We(function(n,i){return function(l){return Oo(l,n,i)}}),LE=We(function(n,i){return function(l){return Oo(n,l,i)}});function Yc(n,i,l){var g=Lt(i),k=ts(i,g);l==null&&!(ft(i)&&(k.length||!g.length))&&(l=i,i=n,n=this,k=ts(i,Lt(i)));var I=!(ft(l)&&"chain"in l)||!!l.chain,R=ir(n);return En(k,function($){var B=i[$];n[$]=B,R&&(n.prototype[$]=function(){var ne=this.__chain__;if(I||ne){var te=n(this.__wrapped__);return(te.__actions__=Jt(this.__actions__)).push({func:B,args:arguments,thisArg:n}),te.__chain__=ne,te}return B.apply(n,yr([this.value()],arguments))})}),n}function RE(){return Tt._===this&&(Tt._=o8),this}function Xc(){}function PE(n){return n=He(n),We(function(i){return I1(i,n)})}var $E=Ic(dt),zE=Ic(Kh),NE=Ic(Ql);function qf(n){return $c(n)?ec(Un(n)):fw(n)}function DE(n){return function(i){return n==null?r:Xr(n,i)}}var BE=Y1(),FE=Y1(!0);function Jc(){return[]}function Qc(){return!1}function HE(){return{}}function GE(){return""}function UE(){return!0}function WE(n,i){if(n=He(n),n<1||n>xe)return[];var l=G,g=Bt(n,G);i=Oe(i),n-=G;for(var k=rc(g,i);++l<n;)i(l);return k}function VE(n){return De(n)?dt(n,Un):pn(n)?[n]:Jt(ff(Je(n)))}function ZE(n){var i=++r8;return Je(n)+i}var qE=ss(function(n,i){return n+i},0),jE=Cc("ceil"),KE=ss(function(n,i){return n/i},1),YE=Cc("floor");function XE(n){return n&&n.length?es(n,tn,pc):r}function JE(n,i){return n&&n.length?es(n,Oe(i,2),pc):r}function QE(n){return Jh(n,tn)}function eA(n,i){return Jh(n,Oe(i,2))}function tA(n){return n&&n.length?es(n,tn,bc):r}function nA(n,i){return n&&n.length?es(n,Oe(i,2),bc):r}var rA=ss(function(n,i){return n*i},1),iA=Cc("round"),oA=ss(function(n,i){return n-i},0);function aA(n){return n&&n.length?nc(n,tn):0}function sA(n,i){return n&&n.length?nc(n,Oe(i,2)):0}return M.after=Cy,M.ary=Af,M.assign=mk,M.assignIn=Df,M.assignInWith=_s,M.assignWith=vk,M.at=bk,M.before=Sf,M.bind=Hc,M.bindAll=EE,M.bindKey=Mf,M.castArray=Hy,M.chain=yf,M.chunk=Yw,M.compact=Xw,M.concat=Jw,M.cond=AE,M.conforms=SE,M.constant=jc,M.countBy=ay,M.create=wk,M.curry=xf,M.curryRight=If,M.debounce=Cf,M.defaults=_k,M.defaultsDeep=yk,M.defer=Oy,M.delay=Ty,M.difference=Qw,M.differenceBy=e_,M.differenceWith=t_,M.drop=n_,M.dropRight=r_,M.dropRightWhile=i_,M.dropWhile=o_,M.fill=a_,M.filter=ly,M.flatMap=dy,M.flatMapDeep=hy,M.flatMapDepth=fy,M.flatten=vf,M.flattenDeep=s_,M.flattenDepth=l_,M.flip=Ly,M.flow=xE,M.flowRight=IE,M.fromPairs=c_,M.functions=Ik,M.functionsIn=Ck,M.groupBy=py,M.initial=d_,M.intersection=h_,M.intersectionBy=f_,M.intersectionWith=p_,M.invert=Tk,M.invertBy=Lk,M.invokeMap=my,M.iteratee=Kc,M.keyBy=vy,M.keys=Lt,M.keysIn=en,M.map=ps,M.mapKeys=Pk,M.mapValues=$k,M.matches=CE,M.matchesProperty=OE,M.memoize=ms,M.merge=zk,M.mergeWith=Bf,M.method=TE,M.methodOf=LE,M.mixin=Yc,M.negate=vs,M.nthArg=PE,M.omit=Nk,M.omitBy=Dk,M.once=Ry,M.orderBy=by,M.over=$E,M.overArgs=Py,M.overEvery=zE,M.overSome=NE,M.partial=Gc,M.partialRight=Of,M.partition=wy,M.pick=Bk,M.pickBy=Ff,M.property=qf,M.propertyOf=DE,M.pull=b_,M.pullAll=wf,M.pullAllBy=w_,M.pullAllWith=__,M.pullAt=y_,M.range=BE,M.rangeRight=FE,M.rearg=$y,M.reject=ky,M.remove=k_,M.rest=zy,M.reverse=Bc,M.sampleSize=Ay,M.set=Hk,M.setWith=Gk,M.shuffle=Sy,M.slice=E_,M.sortBy=Iy,M.sortedUniq=O_,M.sortedUniqBy=T_,M.split=dE,M.spread=Ny,M.tail=L_,M.take=R_,M.takeRight=P_,M.takeRightWhile=$_,M.takeWhile=z_,M.tap=X_,M.throttle=Dy,M.thru=fs,M.toArray=$f,M.toPairs=Hf,M.toPairsIn=Gf,M.toPath=VE,M.toPlainObject=Nf,M.transform=Uk,M.unary=By,M.union=N_,M.unionBy=D_,M.unionWith=B_,M.uniq=F_,M.uniqBy=H_,M.uniqWith=G_,M.unset=Wk,M.unzip=Fc,M.unzipWith=_f,M.update=Vk,M.updateWith=Zk,M.values=Di,M.valuesIn=qk,M.without=U_,M.words=Vf,M.wrap=Fy,M.xor=W_,M.xorBy=V_,M.xorWith=Z_,M.zip=q_,M.zipObject=j_,M.zipObjectDeep=K_,M.zipWith=Y_,M.entries=Hf,M.entriesIn=Gf,M.extend=Df,M.extendWith=_s,Yc(M,M),M.add=qE,M.attempt=Zf,M.camelCase=Xk,M.capitalize=Uf,M.ceil=jE,M.clamp=jk,M.clone=Gy,M.cloneDeep=Wy,M.cloneDeepWith=Vy,M.cloneWith=Uy,M.conformsTo=Zy,M.deburr=Wf,M.defaultTo=ME,M.divide=KE,M.endsWith=Jk,M.eq=zn,M.escape=Qk,M.escapeRegExp=eE,M.every=sy,M.find=cy,M.findIndex=gf,M.findKey=kk,M.findLast=uy,M.findLastIndex=mf,M.findLastKey=Ek,M.floor=YE,M.forEach=kf,M.forEachRight=Ef,M.forIn=Ak,M.forInRight=Sk,M.forOwn=Mk,M.forOwnRight=xk,M.get=Vc,M.gt=qy,M.gte=jy,M.has=Ok,M.hasIn=Zc,M.head=bf,M.identity=tn,M.includes=gy,M.indexOf=u_,M.inRange=Kk,M.invoke=Rk,M.isArguments=ei,M.isArray=De,M.isArrayBuffer=Ky,M.isArrayLike=Qt,M.isArrayLikeObject=vt,M.isBoolean=Yy,M.isBuffer=Cr,M.isDate=Xy,M.isElement=Jy,M.isEmpty=Qy,M.isEqual=ek,M.isEqualWith=tk,M.isError=Uc,M.isFinite=nk,M.isFunction=ir,M.isInteger=Tf,M.isLength=bs,M.isMap=Lf,M.isMatch=rk,M.isMatchWith=ik,M.isNaN=ok,M.isNative=ak,M.isNil=lk,M.isNull=sk,M.isNumber=Rf,M.isObject=ft,M.isObjectLike=mt,M.isPlainObject=zo,M.isRegExp=Wc,M.isSafeInteger=ck,M.isSet=Pf,M.isString=ws,M.isSymbol=pn,M.isTypedArray=Ni,M.isUndefined=uk,M.isWeakMap=dk,M.isWeakSet=hk,M.join=g_,M.kebabCase=tE,M.last=In,M.lastIndexOf=m_,M.lowerCase=nE,M.lowerFirst=rE,M.lt=fk,M.lte=pk,M.max=XE,M.maxBy=JE,M.mean=QE,M.meanBy=eA,M.min=tA,M.minBy=nA,M.stubArray=Jc,M.stubFalse=Qc,M.stubObject=HE,M.stubString=GE,M.stubTrue=UE,M.multiply=rA,M.nth=v_,M.noConflict=RE,M.noop=Xc,M.now=gs,M.pad=iE,M.padEnd=oE,M.padStart=aE,M.parseInt=sE,M.random=Yk,M.reduce=_y,M.reduceRight=yy,M.repeat=lE,M.replace=cE,M.result=Fk,M.round=iA,M.runInContext=N,M.sample=Ey,M.size=My,M.snakeCase=uE,M.some=xy,M.sortedIndex=A_,M.sortedIndexBy=S_,M.sortedIndexOf=M_,M.sortedLastIndex=x_,M.sortedLastIndexBy=I_,M.sortedLastIndexOf=C_,M.startCase=hE,M.startsWith=fE,M.subtract=oA,M.sum=aA,M.sumBy=sA,M.template=pE,M.times=WE,M.toFinite=or,M.toInteger=He,M.toLength=zf,M.toLower=gE,M.toNumber=Cn,M.toSafeInteger=gk,M.toString=Je,M.toUpper=mE,M.trim=vE,M.trimEnd=bE,M.trimStart=wE,M.truncate=_E,M.unescape=yE,M.uniqueId=ZE,M.upperCase=kE,M.upperFirst=qc,M.each=kf,M.eachRight=Ef,M.first=bf,Yc(M,(function(){var n={};return Hn(M,function(i,l){Xe.call(M.prototype,l)||(n[l]=i)}),n})(),{chain:!1}),M.VERSION=o,En(["bind","bindKey","curry","curryRight","partial","partialRight"],function(n){M[n].placeholder=M}),En(["drop","take"],function(n,i){Ve.prototype[n]=function(l){l=l===r?1:Ct(He(l),0);var g=this.__filtered__&&!i?new Ve(this):this.clone();return g.__filtered__?g.__takeCount__=Bt(l,g.__takeCount__):g.__views__.push({size:Bt(l,G),type:n+(g.__dir__<0?"Right":"")}),g},Ve.prototype[n+"Right"]=function(l){return this.reverse()[n](l).reverse()}}),En(["filter","map","takeWhile"],function(n,i){var l=i+1,g=l==A||l==Ie;Ve.prototype[n]=function(k){var I=this.clone();return I.__iteratees__.push({iteratee:Oe(k,3),type:l}),I.__filtered__=I.__filtered__||g,I}}),En(["head","last"],function(n,i){var l="take"+(i?"Right":"");Ve.prototype[n]=function(){return this[l](1).value()[0]}}),En(["initial","tail"],function(n,i){var l="drop"+(i?"":"Right");Ve.prototype[n]=function(){return this.__filtered__?new Ve(this):this[l](1)}}),Ve.prototype.compact=function(){return this.filter(tn)},Ve.prototype.find=function(n){return this.filter(n).head()},Ve.prototype.findLast=function(n){return this.reverse().find(n)},Ve.prototype.invokeMap=We(function(n,i){return typeof n=="function"?new Ve(this):this.map(function(l){return Oo(l,n,i)})}),Ve.prototype.reject=function(n){return this.filter(vs(Oe(n)))},Ve.prototype.slice=function(n,i){n=He(n);var l=this;return l.__filtered__&&(n>0||i<0)?new Ve(l):(n<0?l=l.takeRight(-n):n&&(l=l.drop(n)),i!==r&&(i=He(i),l=i<0?l.dropRight(-i):l.take(i-n)),l)},Ve.prototype.takeRightWhile=function(n){return this.reverse().takeWhile(n).reverse()},Ve.prototype.toArray=function(){return this.take(G)},Hn(Ve.prototype,function(n,i){var l=/^(?:filter|find|map|reject)|While$/.test(i),g=/^(?:head|last)$/.test(i),k=M[g?"take"+(i=="last"?"Right":""):i],I=g||/^find/.test(i);k&&(M.prototype[i]=function(){var R=this.__wrapped__,$=g?[1]:arguments,B=R instanceof Ve,ne=$[0],te=B||De(R),le=function(tt){var Ze=k.apply(M,yr([tt],$));return g&&ve?Ze[0]:Ze};te&&l&&typeof ne=="function"&&ne.length!=1&&(B=te=!1);var ve=this.__chain__,ye=!!this.__actions__.length,Ce=I&&!ve,Pe=B&&!ye;if(!I&&te){R=Pe?R:new Ve(this);var Te=n.apply(R,$);return Te.__actions__.push({func:fs,args:[le],thisArg:r}),new Sn(Te,ve)}return Ce&&Pe?n.apply(this,$):(Te=this.thru(le),Ce?g?Te.value()[0]:Te.value():Te)})}),En(["pop","push","shift","sort","splice","unshift"],function(n){var i=Ba[n],l=/^(?:push|sort|unshift)$/.test(n)?"tap":"thru",g=/^(?:pop|shift)$/.test(n);M.prototype[n]=function(){var k=arguments;if(g&&!this.__chain__){var I=this.value();return i.apply(De(I)?I:[],k)}return this[l](function(R){return i.apply(De(R)?R:[],k)})}}),Hn(Ve.prototype,function(n,i){var l=M[i];if(l){var g=l.name+"";Xe.call(Li,g)||(Li[g]=[]),Li[g].push({name:i,func:l})}}),Li[as(r,S).name]=[{name:"wrapper",func:r}],Ve.prototype.clone=y8,Ve.prototype.reverse=k8,Ve.prototype.value=E8,M.prototype.at=J_,M.prototype.chain=Q_,M.prototype.commit=ey,M.prototype.next=ty,M.prototype.plant=ry,M.prototype.reverse=iy,M.prototype.toJSON=M.prototype.valueOf=M.prototype.value=oy,M.prototype.first=M.prototype.head,Eo&&(M.prototype[Eo]=ny),M})();typeof define=="function"&&typeof define.amd=="object"&&define.amd?(Tt._=Er,define(function(){return Er})):Zr?((Zr.exports=Er)._=Er,Kl._=Er):Tt._=Er}).call(e)})),Qe=Do(D2(),1),B2={ID:"de_DE",NAME:"Deutsch",STARTING:"Starte Manga OnlineViewer",RESUME:"Fortsetzen ab Seite ",WAITING:"Bitte warten, 3 Sekunden...",CHOOSE_BEGINNING:"Wähle die Startseite:",BUTTON_START:"Manga OnlineViewer starten",SETTINGS:"Einstellungen",LANGUAGE:"Sprache",COLOR_SCHEME:"Farbschema",THEME:"Design",THEME_COLOR:"Farbe",THEME_HUE:"Farbton",THEME_SHADE:"Schattierung",DEFAULT_LOAD_MODE:"Standard-Lademodus",LOAD_MODE_NORMAL:"Normal (3 Sek. warten)",LOAD_MODE_ALWAYS:"Immer (sofort)",LOAD_MODE_NEVER:"Nie (manuell)",LOAD_SPEED:"Ladegeschwindigkeit Seiten/Sekunde",DEFAULT_ZOOM:"Standard-Zoom (zwischen 5 und 200)",DEFAULT_ZOOM_MODE:"Standard-Zoommodus",MINIMUM_ZOOM:"Minimaler Zoom relativ zur Bildschirmbreite (zwischen 30 und 100)",ZOOM_STEP:"Zoom-Schrittgröße (zwischen 5 und 50)",DEFAULT_VIEW_MODE:"Standard-Ansichtsmodus",VIEW_MODE_VERTICAL:"Vertikal",VIEW_MODE_LEFT:"Links nach Rechts",VIEW_MODE_RIGHT:"Rechts nach Links",VIEW_MODE_WEBCOMIC:"WebComic",FIT_WIDTH_OVERSIZED:"Breite anpassen bei Übergröße",SHOW_THUMBNAILS:"Miniaturansichten anzeigen",HIDE_CONTROLS:"Seitensteuerung immer ausblenden",HEADER_TYPE:"Kopfbereichstyp ändern",HEADER_HOVER:"Hover",HEADER_SCROLL:"Scrollen",HEADER_CLICK:"Klicken",HEADER_FIXED:"Fixiert",HEADER_SIMPLE:"Einfach",BUTTON_DOWNLOAD:"Herunterladen",DOWNLOAD_ZIP:"Zip-Datei herunterladen",DOWNLOAD_IMAGES:"Bilder automatisch als Zip herunterladen",DOWNLOAD_PROGRESS:"Herunterladen: ##num## von ##total##",GENERATING_ZIP:"Zip-Datei wird erstellt...",DOWNLOAD_INCOMPLETE:"Download unvollständig",DOWNLOAD_INCOMPLETE_MESSAGE:"Einige Seiten konnten nicht heruntergeladen werden und wurden übersprungen. Eine Liste der fehlgeschlagenen Seiten wurde der ZIP-Datei hinzugefügt.",BUTTON_NEXT:"Weiter",NEXT_CHAPTER:"Nächstes Kapitel",BUTTON_PREVIOUS:"Zurück",PREVIOUS_CHAPTER:"Vorheriges Kapitel",BOOKMARKS:"Lesezeichen",BOOKMARK:"Lesezeichen",BOOKMARK_REMOVED:"Lesezeichen entfernt",BOOKMARK_SAVED:"Lesezeichen gespeichert",BOOKMARK_MESSAGE:"Beim nächsten Öffnen dieses Kapitels wird ab fortgesetzt: Seite ##num## (Nur EINMAL pro Lesezeichen)",KEYBINDINGS:"Tastenkürzel",EDIT_KEYBINDS:"Tastenkürzel bearbeiten",SAVE_KEYBINDS:"Tastenkürzel speichern",BUTTON_EDIT:"Bearbeiten",BUTTON_SAVE:"Speichern",KEYBIND_RULES:`
    <h3>Unterstützte Tasten</h3>
    Erlaubte Modifikatoren: shift, option, alt, ctrl, control, command. <br/>
    Spezielle Tasten: backspace, tab, clear, enter, return, esc, escape, space, up, down, left, right, home, end, pageup, pagedown, del, delete, f1 - f19, num_0 - num_9, num_multiply, num_add, num_enter, num_subtract, num_decimal, num_divide. <br/>
    Beispiele: <kbd>a</kbd>, <kbd>ctrl+a</kbd>, <kbd>shift+a</kbd>, <kbd>num_2</kbd>, <kbd>2</kbd>
  `,ATTENTION:"Achtung",WARNING:"Warnung",BUTTON_RESET_SETTINGS:"Einstellungen zurücksetzen(Reset Settings)",SETTINGS_RESET:"Die Einstellungen wurden zurückgesetzt, bitte Seite neu laden",LANGUAGE_CHANGED:"Die Sprache wurde geändert, bitte Seite neu laden",AUTO_DOWNLOAD:"Beim nächsten Laden eines Kapitels wirst du automatisch gefragt, ob du speichern möchtest",LAZY_LOAD:"Lazy Load ist mit Zip-Download nicht kompatibel, mit dieser Einstellung kannst du nicht herunterladen.<br/> Empfehlung: <span style='color:red;font-weight:bold'>Miniaturansichten deaktivieren</span> um Bandbreite/Speicher zu sparen.",LAZY_LOAD_IMAGES_ENABLE:"Lazy Load Bilder aktivieren",LAZY_LOAD_IMAGES:"Lazy Start ab Seite (zwischen 5 und 100)",RETURN_CHAPTER_LIST:"Zur Kapitelübersicht zurückkehren",PAGES_LOADED:"Seiten geladen",GO_TO_PAGE:"Gehe zu Seite",ENLARGE:"Vergrößern",RESTORE:"Wiederherstellen",REDUCE:"Wiederherstellen",FIT_WIDTH:"Breite anpassen",FIT_HEIGHT:"Höhe anpassen",PERCENT:"Prozent",TOGGLE_CONTROLS:"Seitensteuerung umschalten",ZOOM_IN:"Hineinzoomen",ZOOM_OUT:"Herauszoomen",ZOOM_RESET:"Zoom zurücksetzen",ZOOM_WIDTH:"Auf Breite zoomen",ZOOM_HEIGHT:"Auf Höhe zoomen",HIDE:"Ausblenden",RELOAD:"Neu laden",SLOWLY:"Langsam",NORMAL:"Normal",FAST:"Schnell",EXTREME:"Extrem",ALL_PAGES:"Alle Seiten",SPEED_WARNING:"Ladegeschwindigkeit zu hoch",SPEED_WARNING_MESSAGE:"Diese Geschwindigkeit wird nicht empfohlen.<br/> Sie kann einige Server überlasten oder deine IP als DDoS-Angreifer markieren.<br/> Bitte mit Vorsicht verwenden!",SCROLL_UP:"Nach oben scrollen",SCROLL_DOWN:"Nach unten scrollen",CLOSE:"Schließen",LIST_EMPTY:"Liste leer",SCROLL_START:"Auto-Scroll umschalten",INCREASE_SPEED:"Scrollgeschwindigkeit erhöhen",DECREASE_SPEED:"Scrollgeschwindigkeit verringern",AUTO_SCROLL_HEIGHT:"Auto-Scroll-Geschwindigkeit in Pixel",VERTICAL_SEPARATOR:"Vertikale Trenner anzeigen",END:"Ende",SCOPE:"Bereich",GLOBAL:"Global",GENERAL:"Allgemein",LOADING:"Lädt",ZOOM:"Zoom",OTHERS:"Sonstiges",NAVBAR_TYPE:"Navigationsleistentyp ändern",NAVBAR_BOTTOM:"Unten",NAVBAR_LEFT:"Links",NAVBAR_RIGHT:"Rechts",NAVBAR_DISABLED:"Deaktiviert",PAGINATION_TYPE:"Paginierungstyp",PAGINATION_DISABLED:"Deaktiviert",PAGINATION_SLIDER:"Schieberegler",PAGINATION_ARROWS:"Seitenpfeile",PAGINATION_BOTH:"Beides",FILE_MENU:"Hauptmenü",VIEW_MENU:"Menü „Ansicht“",ZOOM_MENU:"Zoom-Menü"},F2={ID:"en_US",NAME:"English (US)",STARTING:"Starting Manga OnlineViewer",RESUME:"Resuming reading from Page ",WAITING:"Please wait, 3 seconds...",CHOOSE_BEGINNING:"Choose the Page to start from:",BUTTON_START:"Start Manga OnlineViewer",SETTINGS:"Settings",LANGUAGE:"Language",COLOR_SCHEME:"Color Scheme",THEME:"Theme",THEME_COLOR:"Color",THEME_HUE:"Color Hue",THEME_SHADE:"Color Shade",DEFAULT_LOAD_MODE:"Default Load Mode",LOAD_MODE_NORMAL:"Normal(Wait 3 sec)",LOAD_MODE_ALWAYS:"Always(Immediately)",LOAD_MODE_NEVER:"Never(Manually)",LOAD_SPEED:"Load Speed Pages/Second",DEFAULT_ZOOM:"Default Zoom (between 5 and 200)",DEFAULT_ZOOM_MODE:"Default Zoom Mode",MINIMUM_ZOOM:"Minimum Zoom relative to the width of screen (between 30 and 100)",ZOOM_STEP:"Zoom Change Step (between 5 and 50)",DEFAULT_VIEW_MODE:"Default View Mode",VIEW_MODE_VERTICAL:"Vertical",VIEW_MODE_LEFT:"Left to Right",VIEW_MODE_RIGHT:"Right to Left",VIEW_MODE_WEBCOMIC:"WebComic",FIT_WIDTH_OVERSIZED:"Fit Width if Oversized",SHOW_THUMBNAILS:"Show Thumbnails",HIDE_CONTROLS:"Always Hide Page Controls",HEADER_TYPE:"Change Header Type",HEADER_HOVER:"Hover",HEADER_SCROLL:"Scroll",HEADER_CLICK:"Click",HEADER_FIXED:"Fixed",HEADER_SIMPLE:"Simple",BUTTON_DOWNLOAD:"Download",DOWNLOAD_ZIP:"Download Zip file",DOWNLOAD_IMAGES:"Download Images as Zip Automatically",DOWNLOAD_PROGRESS:"Downloading: ##num## of ##total##",GENERATING_ZIP:"Generating Zip file...",DOWNLOAD_INCOMPLETE:"Download Incomplete",DOWNLOAD_INCOMPLETE_MESSAGE:"Some pages failed to download and were skipped. A list of failed pages has been added to the ZIP file.",BUTTON_NEXT:"Next",NEXT_CHAPTER:"Next Chapter",BUTTON_PREVIOUS:"Previous",PREVIOUS_CHAPTER:"Previous Chapter",BOOKMARKS:"Bookmarks",BOOKMARK:"Bookmark",BOOKMARK_REMOVED:"Bookmark Removed",BOOKMARK_SAVED:"Bookmark Saved",BOOKMARK_MESSAGE:"Next time you open this chapter it will resume from: Page ##num## (Only ONCE per Bookmark)",KEYBINDINGS:"Keybindings",EDIT_KEYBINDS:"Edit KeyBindings",SAVE_KEYBINDS:"Save KeyBindings",BUTTON_EDIT:"Edit",BUTTON_SAVE:"Save",KEYBIND_RULES:`
    <h3>Supported Keys</h3>
    Allowed modifiers: shift, option, alt, ctrl, control, command. <br/>
    Special keys: backspace, tab, clear, enter, return, esc, escape, space, up, down, left, right, home, end, pageup, pagedown, del, delete, f1 - f19, num_0 - num_9, num_multiply, num_add, num_enter, num_subtract, num_decimal, num_divide. <br/>
    Examples: <kbd>a</kbd>, <kbd>ctrl+a</kbd> , <kbd>shift+a</kbd> , <kbd>num_2</kbd> , <kbd>2</kbd>
  `,ATTENTION:"Attention",WARNING:"Warning",BUTTON_RESET_SETTINGS:"Reset Settings",SETTINGS_RESET:"Settings have been reset, reload the page to take effect",LANGUAGE_CHANGED:"Language has been changed, reload the page to take effect",AUTO_DOWNLOAD:"Next time a chapter finish loading you will be prompted to save automatically",LAZY_LOAD:"Lazy load is incompatible with zip download, you will not be able to download with this setting ON.<br/> Suggestion: <span style='color:red;font-weight:bold'>Disable Thumbnails</span> to save Bandwidth/Memory.",LAZY_LOAD_IMAGES_ENABLE:"Enable Lazy Load Images",LAZY_LOAD_IMAGES:"Lazy Start From Page (between 5 and 100)",RETURN_CHAPTER_LIST:"Return to Chapter List",PAGES_LOADED:"Pages Loaded",GO_TO_PAGE:"Go to Page",ENLARGE:"Enlarge",RESTORE:"Restore",REDUCE:"Reduce",FIT_WIDTH:"Fit Width",FIT_HEIGHT:"Fit Height",PERCENT:"Percent",TOGGLE_CONTROLS:"Toggle page controls",ZOOM_IN:"Zoom In",ZOOM_OUT:"Zoom Out",ZOOM_RESET:"Zoom Reset",ZOOM_WIDTH:"Zoom to Width",ZOOM_HEIGHT:"Zoom to Height",HIDE:"Hide",RELOAD:"Reload",SLOWLY:"Slowly",NORMAL:"Normal",FAST:"Fast",EXTREME:"Extreme",ALL_PAGES:"All Pages",SPEED_WARNING:"Loading Speed too High",SPEED_WARNING_MESSAGE:"This speed is not recommended.<br/> It may hurt some servers or get your IP marked as DDoS attacker.<br/> Please use with caution!",SCROLL_UP:"Scroll Up",SCROLL_DOWN:"Scroll Down",CLOSE:"Close",LIST_EMPTY:"List Empty",SCROLL_START:"Toggle Auto Scroll",INCREASE_SPEED:"Increase Scroll Speed",DECREASE_SPEED:"Decrease Scroll Speed",AUTO_SCROLL_HEIGHT:"Auto Scroll Speed in Pixels",VERTICAL_SEPARATOR:"Show Vertical Separators",END:"End",SCOPE:"Scope",GLOBAL:"Global",GENERAL:"General",LOADING:"Loading",ZOOM:"Zoom",OTHERS:"Others",NAVBAR_TYPE:"Change Navbar Type",NAVBAR_BOTTOM:"Bottom",NAVBAR_LEFT:"Left",NAVBAR_RIGHT:"Right",NAVBAR_DISABLED:"Disabled",PAGINATION_TYPE:"Pagination Type",PAGINATION_DISABLED:"Disabled",PAGINATION_SLIDER:"Slider",PAGINATION_ARROWS:"Side Arrows",PAGINATION_BOTH:"Both",FILE_MENU:"Main Menu",VIEW_MENU:"View Menu",ZOOM_MENU:"Zoom Menu"},H2={ID:"es_ES",NAME:"Español (ES)",STARTING:"Iniciando Manga OnlineViewer",RESUME:"Continuando lectura desde la Página ",WAITING:"Por favor espere, 3 segundos...",CHOOSE_BEGINNING:"Elija la página en la que comenzar:",BUTTON_START:"Iniciar Manga OnlineViewer",SETTINGS:"Ajustes",LANGUAGE:"Idioma",COLOR_SCHEME:"Esquema de color",THEME:"Tema",THEME_COLOR:"Color",THEME_HUE:"Matiz del color",THEME_SHADE:"Saturación del color",DEFAULT_LOAD_MODE:"Modo de carga por defecto",LOAD_MODE_NORMAL:"Normal (Espera 3s)",LOAD_MODE_ALWAYS:"Siempre (Inmediatamente)",LOAD_MODE_NEVER:"Nunca (Manualmente)",LOAD_SPEED:"Velocidad carga página/segundo",DEFAULT_ZOOM:"Zoom por defecto (entre 5 y 200)",DEFAULT_ZOOM_MODE:"Modo de zoom por defecto",MINIMUM_ZOOM:"Zoom mínimo relativo al ancho de la pantalla",ZOOM_STEP:"Paso entre cambios de zoom (entre 5 y 50)",DEFAULT_VIEW_MODE:"Modo de visualización por defecto",VIEW_MODE_VERTICAL:"Vertical",VIEW_MODE_LEFT:"Izquierda a derecha",VIEW_MODE_RIGHT:"Derecha a izquierda",VIEW_MODE_WEBCOMIC:"WebComic",FIT_WIDTH_OVERSIZED:"Ajustar ancho si es demasiado grande",SHOW_THUMBNAILS:"Mostrar miniaturas",HIDE_CONTROLS:"Ocultar siempre la barra de controles",HEADER_TYPE:"Cambiar tipo de cabecera",HEADER_HOVER:"Pasar por encima",HEADER_SCROLL:"Desplazamiento",HEADER_CLICK:"Hacer click",HEADER_FIXED:"Fijo",HEADER_SIMPLE:"Sencillo",BUTTON_DOWNLOAD:"Descargar",DOWNLOAD_ZIP:"Descargar fichero Zip",DOWNLOAD_IMAGES:"Autodescargar imágenes como Zip",DOWNLOAD_PROGRESS:"Descargando: ##num## de ##total##",GENERATING_ZIP:"Generando archivo Zip...",DOWNLOAD_INCOMPLETE:"Descarga Incompleta",DOWNLOAD_INCOMPLETE_MESSAGE:"Algunas páginas no se pudieron descargar y se saltaron. Se ha añadido una lista de páginas fallidas al archivo ZIP.",BUTTON_NEXT:"Siguiente",NEXT_CHAPTER:"Siguiente capítulo",BUTTON_PREVIOUS:"Anterior",PREVIOUS_CHAPTER:"Capítulo anterior",BOOKMARKS:"Marcadores",BOOKMARK:"Marcador",BOOKMARK_REMOVED:"Marcador eliminado",BOOKMARK_SAVED:"Marcador guardado",BOOKMARK_MESSAGE:"La próxima vez que abra este capítulo, continuará desde la página ##num## (Sólo UNA VEZ por Marcador)",KEYBINDINGS:"Atajos de teclado",EDIT_KEYBINDS:"Editar atajos",SAVE_KEYBINDS:"Guardar atajos",BUTTON_EDIT:"Editar",BUTTON_SAVE:"Guardar",KEYBIND_RULES:`
    <h3>Teclas soportadas</h3>
    Modificadores permitidos: shift, option, alt, ctrl, control, command. <br/>
    Teclas especiales: backspace, tab, clear, enter, return, esc, escape, space, up, down, left, right, home, end, pageup, pagedown, del, delete, f1 - f19, num_0 - num_9, num_multiply, num_add, num_enter, num_subtract, num_decimal, num_divide. <br/>
    Ejemplos: <kbd>a</kbd>, <kbd>ctrl+a</kbd> , <kbd>shift+a</kbd> , <kbd>num_2</kbd> , <kbd>2</kbd>
  `,ATTENTION:"Atención",WARNING:"Alerta",BUTTON_RESET_SETTINGS:"Reiniciar ajustes(Reset Settings)",SETTINGS_RESET:"Se han restablecido los ajustes, vuelve a cargar la página para que surta efecto",LANGUAGE_CHANGED:"Se ha cambiado el idioma, vuelve a cargar la página para que surta efecto",AUTO_DOWNLOAD:"La próxima vez que termine de cargarse un capítulo, se le pedirá que guarde automáticamente",LAZY_LOAD:"La carga diferida es incompatible con la descarga zip, no podrá descargar con este ajuste activado.<br/> Sugerencia: <span style='color:red;font-weight:bold'>Desactivar miniaturas</span> para ahorrar Ancho de banda/Memoria.",LAZY_LOAD_IMAGES_ENABLE:"Habilitar carga de imágenes diferida",LAZY_LOAD_IMAGES:"Empezar carga diferida a partir de la página (entre 5 y 100)",RETURN_CHAPTER_LIST:"Regresar a la lista de capítulos",PAGES_LOADED:"Páginas cargadas",GO_TO_PAGE:"Ir a página",ENLARGE:"Agrandar",RESTORE:"Restaurar",REDUCE:"Reducir",FIT_WIDTH:"Ajustar al ancho",FIT_HEIGHT:"Ajustar al alto",PERCENT:"Porcentual",TOGGLE_CONTROLS:"Alternar controles de página",ZOOM_IN:"Acercar",ZOOM_OUT:"Alejar",ZOOM_RESET:"Restablecer zoom",ZOOM_WIDTH:"Zoom al ancho",ZOOM_HEIGHT:"Zoom al alto",HIDE:"Ocultar",RELOAD:"Recargar",SLOWLY:"Lento",NORMAL:"Normal",FAST:"Rápido",EXTREME:"Extremo",ALL_PAGES:"Todas las páginas",SPEED_WARNING:"Velocidad de carga muy alta",SPEED_WARNING_MESSAGE:"No se recomienda esta velocidad.<br/> Puede dañar algunos servidores o marcar su IP como atacante DDoS.<br/> ¡Utilícelo con precaución!",SCROLL_UP:"Desplazar arriba",SCROLL_DOWN:"Desplazar abajo",CLOSE:"Cerrar",LIST_EMPTY:"Lista vacía",SCROLL_START:"Alternar desplazamiento automático",INCREASE_SPEED:"Aumentar la velocidad de desplazamiento",DECREASE_SPEED:"Disminuir la velocidad de desplazamiento",AUTO_SCROLL_HEIGHT:"Velocidad de desplazamiento automático en píxeles",VERTICAL_SEPARATOR:"Mostrar separadores verticales",END:"Fin",SCOPE:"Alcance",GLOBAL:"Global",GENERAL:"General",LOADING:"Carga",ZOOM:"Zoom",OTHERS:"Otros",NAVBAR_TYPE:"Cambiar el tipo de barra de navegación",NAVBAR_BOTTOM:"Abajo",NAVBAR_LEFT:"Izquierda",NAVBAR_RIGHT:"Derecha",NAVBAR_DISABLED:"Desactivado",PAGINATION_TYPE:"Tipo de paginación",PAGINATION_DISABLED:"Desactivado",PAGINATION_SLIDER:"Control deslizante",PAGINATION_ARROWS:"Flechas laterales",PAGINATION_BOTH:"Ambos",FILE_MENU:"Menú principal",VIEW_MENU:"Ver menú",ZOOM_MENU:"Menú Zoom"},G2={ID:"fr_FR",NAME:"Français (FR)",STARTING:"Démarrage Manga OnlineViewer",RESUME:"Reprise de la lecture à partir de la Page ",WAITING:"Veuillez patienter, 3 secondes...",CHOOSE_BEGINNING:"Choisissez la page par laquelle commencer :",BUTTON_START:"Démarrer Manga OnlineViewer",SETTINGS:"Paramètres",LANGUAGE:"Langue",COLOR_SCHEME:"Palette de couleurs",THEME:"Thème",THEME_COLOR:"Couleur",THEME_HUE:"Teinte de couleur",THEME_SHADE:"Nuance de couleur",DEFAULT_LOAD_MODE:"Mode de chargement par défaut",LOAD_MODE_NORMAL:"Normal (attendre 3 s)",LOAD_MODE_ALWAYS:"Toujours (immédiatement)",LOAD_MODE_NEVER:"Jamais (manuellement)",LOAD_SPEED:"Vitesse de chargement des pages/seconde",DEFAULT_ZOOM:"Zoom par défaut (entre 5 et 200)",DEFAULT_ZOOM_MODE:"Mode de zoom par défaut",MINIMUM_ZOOM:"Zoom minimum par rapport à la largeur de l'écran (entre 30 et 100)",ZOOM_STEP:"Pas de changement de zoom (entre 5 et 50)",DEFAULT_VIEW_MODE:"Mode d'affichage par défaut",VIEW_MODE_VERTICAL:"Vertical",VIEW_MODE_LEFT:"De gauche à droite",VIEW_MODE_RIGHT:"De droite à gauche",VIEW_MODE_WEBCOMIC:"WebComic",FIT_WIDTH_OVERSIZED:"Ajuster à la largeur si surdimensionné",SHOW_THUMBNAILS:"Afficher les vignettes",HIDE_CONTROLS:"Toujours masquer les contrôles de page",HEADER_TYPE:"Changer le type d'en-tête",HEADER_HOVER:"Survol",HEADER_SCROLL:"Défilement",HEADER_CLICK:"Clic",HEADER_FIXED:"Fixe",HEADER_SIMPLE:"Simple",BUTTON_DOWNLOAD:"Télécharger",DOWNLOAD_ZIP:"Télécharger le fichier Zip",DOWNLOAD_IMAGES:"Télécharger les images en Zip automatiquement",DOWNLOAD_PROGRESS:"Téléchargement : ##num## sur ##total##",GENERATING_ZIP:"Génération du fichier Zip...",DOWNLOAD_INCOMPLETE:"Téléchargement incomplet",DOWNLOAD_INCOMPLETE_MESSAGE:"Certaines pages n'ont pas pu être téléchargées et ont été ignorées. Une liste des pages concernées a été ajoutée au fichier ZIP.",BUTTON_NEXT:"Suivant",NEXT_CHAPTER:"Chapitre suivant",BUTTON_PREVIOUS:"Précédent",PREVIOUS_CHAPTER:"Chapitre précédent",BOOKMARKS:"Favoris",BOOKMARK:"Favori",BOOKMARK_REMOVED:"Favori supprimé",BOOKMARK_SAVED:"Favori enregistré",BOOKMARK_MESSAGE:"La prochaine fois que vous ouvrirez ce chapitre, il reprendra à partir de: Page ##num## (Seulement UNE FOIS par favori)",KEYBINDINGS:"Raccourcis clavier",EDIT_KEYBINDS:"Modifier les raccourcis clavier",SAVE_KEYBINDS:"Enregistrer les raccourcis clavier",BUTTON_EDIT:"Modifier",BUTTON_SAVE:"Enregistrer",KEYBIND_RULES:`
    <h3>Touches prises en charge</h3>
    Modificateurs autorisés : shift, option, alt, ctrl, control, command. <br/>
    Touches spéciales : backspace, tab, clear, enter, return, esc, escape, space, up, down, left, right, home, end, pageup, pagedown, del, delete, f1 - f19, num_0 - num_9, num_multiply, num_add, num_enter, num_subtract, num_decimal, num_divide. <br/>
    Exemples : <kbd>a</kbd>, <kbd>ctrl+a</kbd> , <kbd>shift+a</kbd> , <kbd>num_2</kbd> , <kbd>2</kbd>
  `,ATTENTION:"Attention",WARNING:"Avertissement",BUTTON_RESET_SETTINGS:"Réinitialiser les paramètres",SETTINGS_RESET:"Les paramètres ont été réinitialisés, rechargez la page pour prendre effet",LANGUAGE_CHANGED:"La langue a été modifiée, rechargez la page pour prendre effet",AUTO_DOWNLOAD:"La prochaine fois qu'un chapitre finira de se charger, il vous sera proposé de l'enregistrer automatiquement",LAZY_LOAD:"Le chargement paresseux est incompatible avec le téléchargement zip, vous ne pourrez pas télécharger avec ce paramètre activé.<br/> Suggestion : <span style='color:red;font-weight:bold'>Désactivez les vignettes</span> pour économiser de la bande passante/mémoire.",LAZY_LOAD_IMAGES_ENABLE:"Activer le chargement paresseux des images",LAZY_LOAD_IMAGES:"Début du chargement paresseux à partir de la page (entre 5 et 100)",RETURN_CHAPTER_LIST:"Retour à la liste des chapitres",PAGES_LOADED:"Pages chargées",GO_TO_PAGE:"Aller à la page",ENLARGE:"Agrandir",RESTORE:"Restaurer",REDUCE:"Réduire",FIT_WIDTH:"Ajuster à la largeur",FIT_HEIGHT:"Ajuster à la hauteur",PERCENT:"Pourcentage",TOGGLE_CONTROLS:"Basculer les contrôles de page",ZOOM_IN:"Zoom avant",ZOOM_OUT:"Zoom arrière",ZOOM_RESET:"Réinitialiser le zoom",ZOOM_WIDTH:"Zoomer à la largeur",ZOOM_HEIGHT:"Zoomer à la hauteur",HIDE:"Masquer",RELOAD:"Recharger",SLOWLY:"Lentement",NORMAL:"Normal",FAST:"Rapide",EXTREME:"Extrême",ALL_PAGES:"Toutes les pages",SPEED_WARNING:"Vitesse de chargement trop élevée",SPEED_WARNING_MESSAGE:"Cette vitesse n'est pas recommandée.<br/> Elle peut nuire à certains serveurs ou marquer votre IP comme un attaquant DDoS.<br/> Veuillez l'utiliser avec prudence !",SCROLL_UP:"Faire défiler vers le haut",SCROLL_DOWN:"Faire défiler vers le bas",CLOSE:"Fermer",LIST_EMPTY:"Liste vide",SCROLL_START:"Basculer le défilement automatique",INCREASE_SPEED:"Augmenter la vitesse de défilement",DECREASE_SPEED:"Diminuer la vitesse de défilement",AUTO_SCROLL_HEIGHT:"Vitesse de défilement automatique en pixels",VERTICAL_SEPARATOR:"Afficher les séparateurs verticaux",END:"Fin",SCOPE:"Portée",GLOBAL:"Global",GENERAL:"Général",LOADING:"Chargement",ZOOM:"Zoom",OTHERS:"Autres",NAVBAR_TYPE:"Changer le type de barre de navigation",NAVBAR_BOTTOM:"Bas",NAVBAR_LEFT:"Gauche",NAVBAR_RIGHT:"Droite",NAVBAR_DISABLED:"Désactivé",PAGINATION_TYPE:"Type de pagination",PAGINATION_DISABLED:"Désactivé",PAGINATION_SLIDER:"Curseur",PAGINATION_ARROWS:"Flèches latérales",PAGINATION_BOTH:"Les deux",FILE_MENU:"Menu principal",VIEW_MENU:"Menu Affichage",ZOOM_MENU:"Menu Zoom"},U2={ID:"pt_BR",NAME:"Portugues (Brasil)",STARTING:"Iniciando Manga OnlineViewer",RESUME:"Continuando leitura na Pagina ",WAITING:"Por Favor espere, 3 segundos...",CHOOSE_BEGINNING:"Escolha a pagina de onde começar:",BUTTON_START:"Iniciar Manga OnlineViewer",SETTINGS:"Configurações",LANGUAGE:"Idioma",COLOR_SCHEME:"Esquema de Color",THEME:"Tema",THEME_COLOR:"Cor",THEME_HUE:"Tom da Cor",THEME_SHADE:"Saturação da Cor",DEFAULT_LOAD_MODE:"Forma de Carregamento Padrão",LOAD_MODE_NORMAL:"Normal(Esperando 3 sec)",LOAD_MODE_ALWAYS:"Sempre(Imediatamente)",LOAD_MODE_NEVER:"Nunca(Manualmente)",LOAD_SPEED:"Velocidade de Carregamento Paginas/Segundo",DEFAULT_ZOOM:"Zoom padrão (entre 5 e 200)",DEFAULT_ZOOM_MODE:"Modo de Zoom padrão",MINIMUM_ZOOM:"Zoom minimo, relativo ao tamanho da tela (entre 30 e 100)",ZOOM_STEP:"Precisão da Mudança do Zoom (entre 5 e 50)",DEFAULT_VIEW_MODE:"Modo de Visualização Padrão",VIEW_MODE_VERTICAL:"Vertical",VIEW_MODE_LEFT:"Esquerda para Direita",VIEW_MODE_RIGHT:"Direita para Esquerda",VIEW_MODE_WEBCOMIC:"WebComic",FIT_WIDTH_OVERSIZED:"Encher a tela se grande demais",SHOW_THUMBNAILS:"Mostra Miniaturas",HIDE_CONTROLS:"Sempre esconder controles das paginas",HEADER_TYPE:"Mudar Tipo de Cabeçalho",HEADER_HOVER:"Passar por perto",HEADER_SCROLL:"Rolagem do Mouse",HEADER_CLICK:"Click",HEADER_FIXED:"Fixo",HEADER_SIMPLE:"Simples",BUTTON_DOWNLOAD:"Download",DOWNLOAD_ZIP:"Baixar arquivo Zip",DOWNLOAD_IMAGES:"Download das Imagens como Zip Automaticamente",DOWNLOAD_PROGRESS:"Baixando: ##num## de ##total##",GENERATING_ZIP:"Gerando arquivo Zip...",DOWNLOAD_INCOMPLETE:"Download Incompleto",DOWNLOAD_INCOMPLETE_MESSAGE:"Algumas páginas falharam ao baixar e foram puladas. Uma lista de páginas que falharam foi adicionada ao arquivo ZIP.",BUTTON_NEXT:"Proximo",NEXT_CHAPTER:"Proximo Capitulo",BUTTON_PREVIOUS:"Anterior",PREVIOUS_CHAPTER:"Capitulo Anterior",BOOKMARKS:"Marca paginas",BOOKMARK:"Marcar pagina",BOOKMARK_REMOVED:"Marca pagina Removido",BOOKMARK_SAVED:"Marca pagina Salvo",BOOKMARK_MESSAGE:"Proxima vez que abrir este capitulo continuará a partir da Pagina ##num## (Apenas UMA VEZ por marca pagina)",KEYBINDINGS:"Atalhos",EDIT_KEYBINDS:"Editar Atalhos",SAVE_KEYBINDS:"Salvar Atalhos",BUTTON_EDIT:"Editar",BUTTON_SAVE:"Salvar",KEYBIND_RULES:`
    <h3>Teclas Suportadas</h3>
    Modificadores permitidos: shift, option, alt, ctrl, control, command. <br/>
    Teclas Especiais: backspace, tab, clear, enter, return, esc, escape, space, up, down, left, right, home, end, pageup, pagedown, del, delete, f1 - f19, num_0 - num_9, num_multiply, num_add, num_enter, num_subtract, num_decimal, num_divide.<br/>
    Exemplos: <kbd>a</kbd>, <kbd>ctrl+a</kbd> , <kbd>shift+a</kbd> , <kbd>num_2</kbd> , <kbd>2</kbd>
  `,ATTENTION:"Atenção",WARNING:"Alerta",BUTTON_RESET_SETTINGS:"Limpar Configurações(Reset Settings)",SETTINGS_RESET:"Configurações foram limpas, recarregue o site para efetivar a alteração",LANGUAGE_CHANGED:"Idioma foi alterado, recarregue o site para efetivar a alteração",AUTO_DOWNLOAD:"Proxima vez que abrir um capitulo download iniciara automaticamente",LAZY_LOAD:"Carregamento preguiçoso não é compativel com download de zip, não conseguira com essa configuração ativa.<br/> Sugestão: <span style='color:red;font-weight:bold'>Desative Miniaturas</span> para economizar memoria e cota de internet.",LAZY_LOAD_IMAGES_ENABLE:"Ativar Carregamento de imagens preguiçoso",LAZY_LOAD_IMAGES:"Carregamento de paginas preguiçoso começa a partir de (entre 5 e 100)",RETURN_CHAPTER_LIST:"Voltar a lista de Capitulos",PAGES_LOADED:"Paginas Carregadas",GO_TO_PAGE:"Pular para",ENLARGE:"Aumentar",RESTORE:"Restaurar",REDUCE:"Diminuir",FIT_WIDTH:"Preencher Largura",FIT_HEIGHT:"Preencher Altura ",PERCENT:"Percentual",TOGGLE_CONTROLS:"Mostar controles de pagina",ZOOM_IN:"Mais Zoom",ZOOM_OUT:"Menos Zoom",ZOOM_RESET:"Resetar Zoom",ZOOM_WIDTH:"Zoom para Largura",ZOOM_HEIGHT:"Zoom para Altura",HIDE:"Esconder",RELOAD:"Recarregar",SLOWLY:"Devagar",NORMAL:"Normal",FAST:"Rapido",EXTREME:"Extremo",ALL_PAGES:"Todas as Paginas",SPEED_WARNING:"Velocidade de Carregamento muito alta",SPEED_WARNING_MESSAGE:"Essa velocidade não é recomendada.<br/> Ela pode derrubar um servidor or marcar voce como um ataque hacker de DDoS.<br/> Use com cuidado!",SCROLL_UP:"Subir Pagina",SCROLL_DOWN:"Descer Pagina",CLOSE:"Fechar",LIST_EMPTY:"Lista Vazia",SCROLL_START:"Ativar Rolagem Automatica",INCREASE_SPEED:"Aumentar Valocidade da Rolagem",DECREASE_SPEED:"Diminuir Valocidade da Rolagem",AUTO_SCROLL_HEIGHT:"Velocidade da Rolagem Automatica em Pixels",VERTICAL_SEPARATOR:"Mostrar Separadores Verticais",END:"Fin",SCOPE:"Escopo",GLOBAL:"Global",GENERAL:"Geral",LOADING:"Carregamento",ZOOM:"Zoom",OTHERS:"Outros",NAVBAR_TYPE:"Mudar barra de navegação",NAVBAR_BOTTOM:"Embaixo",NAVBAR_LEFT:"Esquerda",NAVBAR_RIGHT:"Direita",NAVBAR_DISABLED:"Desativado",PAGINATION_TYPE:"Tipo de Paginação",PAGINATION_DISABLED:"Desativado",PAGINATION_SLIDER:"Controle deslizante",PAGINATION_ARROWS:"Setas Laterais",PAGINATION_BOTH:"Ambos",FILE_MENU:"Menu Principal",VIEW_MENU:"Menu de Visualizações",ZOOM_MENU:"Menu de Zoom"},W2={ID:"zh_CN",NAME:"中文 (简体)",STARTING:"正在启动 Manga OnlineViewer",RESUME:"从页面继续阅读 ",WAITING:"请等待3秒钟...",CHOOSE_BEGINNING:"选择要开始的页数:",BUTTON_START:"启动Manga OnlineViewer",SETTINGS:"设置",LANGUAGE:"语言",COLOR_SCHEME:"配色方案",THEME:"主题",THEME_COLOR:"颜色",THEME_HUE:"色相",THEME_SHADE:"色度",DEFAULT_LOAD_MODE:"默认加载模式",LOAD_MODE_NORMAL:"等待模式(等待3秒自动加载 )",LOAD_MODE_ALWAYS:"自动模式(无需等待)",LOAD_MODE_NEVER:"手动模式(点击启动)",LOAD_SPEED:"加载速度页数/秒",DEFAULT_ZOOM:"默认缩放 (最小 5 最大 200)",DEFAULT_ZOOM_MODE:"默认缩放模式",MINIMUM_ZOOM:"相对于屏幕宽度的最小缩放 (最小 30 最大 100)",ZOOM_STEP:"缩放级别 (最小 5 最大 50)",DEFAULT_VIEW_MODE:"默认视图模式",VIEW_MODE_VERTICAL:"垂直有缝",VIEW_MODE_LEFT:"从左到右",VIEW_MODE_RIGHT:"从右到左",VIEW_MODE_WEBCOMIC:"垂直无缝",FIT_WIDTH_OVERSIZED:"如果尺寸过大、则适合宽度",SHOW_THUMBNAILS:"显示缩略图",HIDE_CONTROLS:"始终隐藏页面控件",HEADER_TYPE:"更改标题显示方式",HEADER_HOVER:"悬停",HEADER_SCROLL:"滚动",HEADER_CLICK:"点击",HEADER_FIXED:"固定",HEADER_SIMPLE:"简单",BUTTON_DOWNLOAD:"下载",DOWNLOAD_ZIP:"下载压缩文件",DOWNLOAD_IMAGES:"自动将图片下载成ZIP",DOWNLOAD_PROGRESS:"正在下载：第 ##num## 页，共 ##total## 页",GENERATING_ZIP:"正在生成 Zip 文件...",DOWNLOAD_INCOMPLETE:"下载不完整",DOWNLOAD_INCOMPLETE_MESSAGE:"部分页面下载失败并已跳过。失败页面列表已添加到 ZIP 文件中。",BUTTON_NEXT:"下一页",NEXT_CHAPTER:"下一章",BUTTON_PREVIOUS:"上一页",PREVIOUS_CHAPTER:"上一章",BOOKMARKS:"书签",BOOKMARK:"Bookmark",BOOKMARK_REMOVED:"删除书签",BOOKMARK_SAVED:"保存书签",BOOKMARK_MESSAGE:"下次打开本章时，将从: 页码 ##num## (仅一次 每个书签)",KEYBINDINGS:"快捷键",EDIT_KEYBINDS:"编辑键绑定",SAVE_KEYBINDS:"保存键绑定",BUTTON_EDIT:"编辑",BUTTON_SAVE:"救",KEYBIND_RULES:`
    <h3>支持的密钥</h3>
    允许的修饰符: shift, option, alt, ctrl, control, command. <br/>
    特殊键: backspace, tab, clear, enter, return, esc, escape, space, up, down, left, right, home, end, pageup, pagedown, del, delete, f1 - f19, num_0 - num_9, num_multiply, num_add, num_enter, num_subtract, num_decimal, num_divide.<br/>
    例子: <kbd>a</kbd>, <kbd>ctrl+a</kbd> , <kbd>shift+a</kbd> , <kbd>num_2</kbd> , <kbd>2</kbd>
  `,ATTENTION:"注意",WARNING:"警告",BUTTON_RESET_SETTINGS:"重置设置(Reset Settings)",SETTINGS_RESET:"设置已重置、重新加载页面才能生效",LANGUAGE_CHANGED:"语言已更改、重新加载页面才能生效",AUTO_DOWNLOAD:"下次章节加载完成时、系统将提示您自动保存",LAZY_LOAD:"延迟加载与zip下载不兼容、您将无法使用此设置下载.<br/> 建议: <span style='color:red;font-weight:bold'>禁用缩略图</span> 以节省流量和内存.",LAZY_LOAD_IMAGES_ENABLE:"启用延迟加载图像",LAZY_LOAD_IMAGES:"惰性加载从页面 (最小 5 最大 100)",RETURN_CHAPTER_LIST:"返回章节列表",PAGES_LOADED:"已加载的页数",GO_TO_PAGE:"转到页数",ENLARGE:"放大",RESTORE:"还原",REDUCE:"缩小",FIT_WIDTH:"适合宽度",FIT_HEIGHT:"适合高度",PERCENT:"百分之",TOGGLE_CONTROLS:"显示隐藏页面控件",ZOOM_IN:"放大",ZOOM_OUT:"缩小",ZOOM_RESET:"还原",ZOOM_WIDTH:"适合宽度",ZOOM_HEIGHT:"适合高度",HIDE:"显示隐藏页面控件",RELOAD:"重新加载",SLOWLY:"慢速",NORMAL:"正常",FAST:"快速",EXTREME:"极端",ALL_PAGES:"所有页面",SPEED_WARNING:"加载速度过高",SPEED_WARNING_MESSAGE:"不建议使用此速度.<br/>它可能会伤害某些服务器或将您的 IP 标记为 DDoS 攻击者.<br/>请谨慎使用!",SCROLL_UP:"向上滚动",SCROLL_DOWN:"向下滚动",CLOSE:"关闭",LIST_EMPTY:"没有收藏书签",SCROLL_START:"切换自动滚动",INCREASE_SPEED:"增加滚动速度",DECREASE_SPEED:"降低滚动速度",AUTO_SCROLL_HEIGHT:"自动滚动速度（以像素为单位）",VERTICAL_SEPARATOR:"显示垂直分隔符",END:"结尾",SCOPE:"范围",GLOBAL:"全球",GENERAL:"常规",LOADING:"装载",ZOOM:"缩放",OTHERS:"别人",NAVBAR_TYPE:"更改导航栏类型",NAVBAR_BOTTOM:"底部",NAVBAR_LEFT:"左边",NAVBAR_RIGHT:"正确的",NAVBAR_DISABLED:"已禁用",PAGINATION_TYPE:"分页类型",PAGINATION_DISABLED:"已禁用",PAGINATION_SLIDER:"滑块",PAGINATION_ARROWS:"侧边箭头",PAGINATION_BOTH:"两者",FILE_MENU:"主菜单",VIEW_MENU:"查看菜单",ZOOM_MENU:"缩放菜单"},ti=[F2,H2,U2,W2,B2,G2];function Iu(e){return"listImages"in e&&!vn(e.listImages)}function Cu(e){return"listPages"in e&&!vn(e.listPages)}function V2(e){return"bruteForce"in e&&!vn(e.bruteForce)}var ze=(function(e){return e.ENGLISH="English",e.SPANISH="Spanish",e.PORTUGUESE="Portuguese",e.CHINESE="Chinese",e.RAW="Raw",e})({}),Be=(function(e){return e.MANGA="manga",e.COMIC="comic",e.HENTAI="hentai",e})({});function Z2(e,t){return t in e}var ji=(e,t)=>{const r=(o,a)=>Qe.default.transform(o,(s,c,h)=>{Qe.default.isEqual(c,a[h])||(Qe.default.isObject(c)&&Qe.default.isObject(a[h])&&!Qe.default.isArray(c)?s[h]=r(c,a[h]):s[h]=c)});return r(e,t)},Ou={bookmarks:[],colorScheme:"dark",downloadZip:!1,enabled:!1,fitWidthIfOversize:!0,header:"scroll",hidePageControls:!1,lazyLoadImages:!1,lazyStart:50,loadMode:"wait",locale:"en_US",maxReload:5,minZoom:30,navbar:"bottom",pagination:"disabled",scrollHeight:25,theme:"#29487D",throttlePageLoad:1e3,viewMode:"WebComic",zoomMode:"percent",zoomStep:30,zoomValue:100,keybinds:{SCROLL_UP:["up","W","num_8"],SCROLL_DOWN:["down","S","num_2"],NEXT_CHAPTER:["right","/","D","num_6"],PREVIOUS_CHAPTER:["left",";","A","num_4"],RETURN_CHAPTER_LIST:["backspace","del","num_decimal"],ENLARGE:["-","num_add","E"],REDUCE:["=","num_subtract","Q"],RESTORE:["9","num_divide","R"],FIT_WIDTH:["0","num_multiply","F"],FIT_HEIGHT:["H","num_0"],SETTINGS:["num_divide","num_5","X"],VIEW_MODE_WEBCOMIC:["C"],VIEW_MODE_VERTICAL:["V"],VIEW_MODE_LEFT:["N"],VIEW_MODE_RIGHT:["B"],SCROLL_START:["space"],INCREASE_SPEED:["."],DECREASE_SPEED:[","]}},q2={lazyLoadImages:!0,fitWidthIfOversize:!0,navbar:"disabled",viewMode:"WebComic",header:"scroll",hidePageControls:!0,pagination:"disabled"};function Tn(e=!0){return f2()?Qe.default.defaultsDeep(q2,{...Ou,theme:e?"#29487D":"#004526"}):{...Ou,theme:e?"#29487D":"#004526"}}function j2(e,t){if(Array.isArray(e)&&Array.isArray(t)){if(e.length!==t.length)return!1;const r=s=>`${s.url}-${s.date}`,o=[...e].sort((s,c)=>r(s).localeCompare(r(c))),a=[...t].sort((s,c)=>r(s).localeCompare(r(c)));return Qe.default.isEqual(o,a)}}function K2(e,t){if(e&&typeof e=="object"&&t&&typeof t=="object"){const r=e,o=t,a=Object.keys(r).sort((c,h)=>c.localeCompare(h)),s=Object.keys(o).sort((c,h)=>c.localeCompare(h));if(!Qe.default.isEqual(a,s))return!1;for(const c of a){const h=r[c]?[...r[c]].sort((f,p)=>f.localeCompare(p)):[],u=o[c]?[...o[c]].sort((f,p)=>f.localeCompare(p)):[];if(!Qe.default.isEqual(h,u))return!1}return!0}}function Tu(e,t,r){if(r==="bookmarks")return j2(e,t);if(r==="keybinds")return K2(e,t)}function jo(e,t,r){if(e===t)return!1;if(r){const o={[r]:e},a={[r]:t};return!Qe.default.isEqualWith(o,a,Tu)}return!Qe.default.isEqualWith(e,t,Tu)}var Zt=Qe.default.defaultsDeep(l2(Tn()),Tn()),qt=Qe.default.defaultsDeep(c2(Tn(!1)),Tn(!1)),$r=()=>qt?.enabled===!0,$s=e=>$r()&&!["locale","bookmarks","keybinds"].includes(e),St=lu($r()?{...qt,locale:Zt.locale,keybinds:Zt.keybinds,bookmarks:Zt.bookmarks}:Zt),ni=S2(St,e=>ti.find(t=>t.ID===e.locale)??ti[1]),jt=lu({autoScroll:!1,chapter:Ls(),currentPage:0,device:Bi(),manga:void 0,panel:"none",scrollToPage:void 0});function zr(e){if(e){const t=$s(e)?qt[e]:Zt[e],r=St.get()?.[e];jo(r,t,e)&&(St.setKey(e,t),Ee("Refreshed Settings",e,t));return}for(const t in St.get()){const r=St.get()[t],o=$s(t)?qt[t]:Zt[t];jo(r,o)&&St.setKey(t,o)}Ee("Refreshed All Settings")}function Y2(e){const t=Qe.default.defaultsDeep(e,Tn()),r=Zt?ji(t,Zt):t;if(!vn(r)){Ee("Imported Global Settings",r),Zt=t;for(const o in r)zr(o)}}au(Qe.default.debounce(Y2,300),"settings");function X2(e){const t=Qe.default.defaultsDeep(e,Tn(!1)),r=qt?ji(t,qt):t;if(!vn(r)){Ee("Imported Local Settings",r),qt=t;for(const o in r)zr(o)}}au(Qe.default.debounce(X2,300),location.hostname);function K(e){return St.get()?.[e]}function ri(e,t){const r=St.get()?.[e];jo(r,t,e)&&St.setKey(e,t)}function wt(e,t){jo(K(e),t,e)&&(St.setKey(e,t),$s(e)?(qt[e]=t,ou(ji(qt,Tn(!1)))):(Zt[e]=t,u2(ji(Zt,Tn()))))}function Ki(e,t){ri(e,t(K(e)))}function me(e){return jt.get()[e]}function Ue(e,t){const r=jt.get()[e];Qe.default.isEqual(r,t)||jt.setKey(e,t)}function Lu(e,t){const r=jt.get()[e],o=t(r);Qe.default.isEqual(r,o)||jt.setKey(e,o)}function Bn(e,t){Lu("images",r=>({...r,[e]:{...r?.[e],...t(r?.[e]??{})}}))}function Y(e){const t=ti.find(r=>r.ID===K("locale"))??ti[1];return Z2(t,e)?t?.[e]??ti[1]?.[e]:`##MISSING_STRING_${e}##`}function Ru(e=!1){return qt.enabled=e,ou(ji(qt,Tn(!1))),Ee("Local Settings ",e?"Enabled":"Disabled"),Hi.info({title:"Changed Settings to",description:$r()?"Local":"Global",duration:2e3}),$r()}function J2(){$r()?(nu(location.hostname),qt=Tn(!1),Ru(!1)):(nu("settings"),Zt=Tn(),zr()),Ee("Settings Reset")}function ii(e=location.href){return K("bookmarks").find(t=>t.url===e)?.page}function Q2(e=null){mn("Current Settings (Local:",$r(),") ",e?St.get()[e]:St.get(),`
Global Settings`,e?Zt[e]:Zt,`
Local Settings`,e?qt[e]:qt,`
AppState`,jt.get())}a2("MOVSettings",Q2);var ep=(e,t,r)=>{if(r&&!["bookmarks","zoomValue"].includes(r)){const o=t[r],a=e[r];Hi.info({title:`${r} Changed`,description:`from ${JSON.stringify(o)} to ${JSON.stringify(a)}`,duration:2e3})}};St.listen(Qe.default.debounce(ep,300));var tp=gn(((e,t)=>{(function(r){typeof e=="object"&&typeof t<"u"?t.exports=r():typeof define=="function"&&define.amd?define([],r):(typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:this).JSZip=r()})(function(){return(function r(o,a,s){function c(f,p){if(!a[f]){if(!o[f]){var b=typeof require=="function"&&require;if(!p&&b)return b(f,!0);if(h)return h(f,!0);var w=new Error("Cannot find module '"+f+"'");throw w.code="MODULE_NOT_FOUND",w}var m=a[f]={exports:{}};o[f][0].call(m.exports,function(v){var E=o[f][1][v];return c(E||v)},m,m.exports,r,o,a,s)}return a[f].exports}for(var h=typeof require=="function"&&require,u=0;u<s.length;u++)c(s[u]);return c})({1:[function(r,o,a){"use strict";var s=r("./utils"),c=r("./support"),h="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";a.encode=function(u){for(var f,p,b,w,m,v,E,y=[],S=0,x=u.length,T=x,L=s.getTypeOf(u)!=="string";S<u.length;)T=x-S,b=L?(f=u[S++],p=S<x?u[S++]:0,S<x?u[S++]:0):(f=u.charCodeAt(S++),p=S<x?u.charCodeAt(S++):0,S<x?u.charCodeAt(S++):0),w=f>>2,m=(3&f)<<4|p>>4,v=1<T?(15&p)<<2|b>>6:64,E=2<T?63&b:64,y.push(h.charAt(w)+h.charAt(m)+h.charAt(v)+h.charAt(E));return y.join("")},a.decode=function(u){var f,p,b,w,m,v,E=0,y=0,S="data:";if(u.substr(0,S.length)===S)throw new Error("Invalid base64 input, it looks like a data url.");var x,T=3*(u=u.replace(/[^A-Za-z0-9\+\/\=]/g,"")).length/4;if(u.charAt(u.length-1)===h.charAt(64)&&T--,u.charAt(u.length-2)===h.charAt(64)&&T--,T%1!=0)throw new Error("Invalid base64 input, bad content length.");for(x=c.uint8array?new Uint8Array(0|T):new Array(0|T);E<u.length;)f=h.indexOf(u.charAt(E++))<<2|(w=h.indexOf(u.charAt(E++)))>>4,p=(15&w)<<4|(m=h.indexOf(u.charAt(E++)))>>2,b=(3&m)<<6|(v=h.indexOf(u.charAt(E++))),x[y++]=f,m!==64&&(x[y++]=p),v!==64&&(x[y++]=b);return x}},{"./support":30,"./utils":32}],2:[function(r,o,a){"use strict";var s=r("./external"),c=r("./stream/DataWorker"),h=r("./stream/Crc32Probe"),u=r("./stream/DataLengthProbe");function f(p,b,w,m,v){this.compressedSize=p,this.uncompressedSize=b,this.crc32=w,this.compression=m,this.compressedContent=v}f.prototype={getContentWorker:function(){var p=new c(s.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new u("data_length")),b=this;return p.on("end",function(){if(this.streamInfo.data_length!==b.uncompressedSize)throw new Error("Bug : uncompressed data size mismatch")}),p},getCompressedWorker:function(){return new c(s.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize",this.compressedSize).withStreamInfo("uncompressedSize",this.uncompressedSize).withStreamInfo("crc32",this.crc32).withStreamInfo("compression",this.compression)}},f.createWorkerFrom=function(p,b,w){return p.pipe(new h).pipe(new u("uncompressedSize")).pipe(b.compressWorker(w)).pipe(new u("compressedSize")).withStreamInfo("compression",b)},o.exports=f},{"./external":6,"./stream/Crc32Probe":25,"./stream/DataLengthProbe":26,"./stream/DataWorker":27}],3:[function(r,o,a){"use strict";var s=r("./stream/GenericWorker");a.STORE={magic:"\0\0",compressWorker:function(c){return new s("STORE compression")},uncompressWorker:function(){return new s("STORE decompression")}},a.DEFLATE=r("./flate")},{"./flate":7,"./stream/GenericWorker":28}],4:[function(r,o,a){"use strict";var s=r("./utils"),c=(function(){for(var h,u=[],f=0;f<256;f++){h=f;for(var p=0;p<8;p++)h=1&h?3988292384^h>>>1:h>>>1;u[f]=h}return u})();o.exports=function(h,u){return h!==void 0&&h.length?s.getTypeOf(h)!=="string"?(function(f,p,b,w){var m=c,v=w+b;f^=-1;for(var E=w;E<v;E++)f=f>>>8^m[255&(f^p[E])];return-1^f})(0|u,h,h.length,0):(function(f,p,b,w){var m=c,v=w+b;f^=-1;for(var E=w;E<v;E++)f=f>>>8^m[255&(f^p.charCodeAt(E))];return-1^f})(0|u,h,h.length,0):0}},{"./utils":32}],5:[function(r,o,a){"use strict";a.base64=!1,a.binary=!1,a.dir=!1,a.createFolders=!0,a.date=null,a.compression=null,a.compressionOptions=null,a.comment=null,a.unixPermissions=null,a.dosPermissions=null},{}],6:[function(r,o,a){"use strict";var s=null;s=typeof Promise<"u"?Promise:r("lie"),o.exports={Promise:s}},{lie:37}],7:[function(r,o,a){"use strict";var s=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Uint32Array<"u",c=r("pako"),h=r("./utils"),u=r("./stream/GenericWorker"),f=s?"uint8array":"array";function p(b,w){u.call(this,"FlateWorker/"+b),this._pako=null,this._pakoAction=b,this._pakoOptions=w,this.meta={}}a.magic="\b\0",h.inherits(p,u),p.prototype.processChunk=function(b){this.meta=b.meta,this._pako===null&&this._createPako(),this._pako.push(h.transformTo(f,b.data),!1)},p.prototype.flush=function(){u.prototype.flush.call(this),this._pako===null&&this._createPako(),this._pako.push([],!0)},p.prototype.cleanUp=function(){u.prototype.cleanUp.call(this),this._pako=null},p.prototype._createPako=function(){this._pako=new c[this._pakoAction]({raw:!0,level:this._pakoOptions.level||-1});var b=this;this._pako.onData=function(w){b.push({data:w,meta:b.meta})}},a.compressWorker=function(b){return new p("Deflate",b)},a.uncompressWorker=function(){return new p("Inflate",{})}},{"./stream/GenericWorker":28,"./utils":32,pako:38}],8:[function(r,o,a){"use strict";function s(m,v){var E,y="";for(E=0;E<v;E++)y+=String.fromCharCode(255&m),m>>>=8;return y}function c(m,v,E,y,S,x){var T,L,z=m.file,q=m.compression,W=x!==f.utf8encode,oe=h.transformTo("string",x(z.name)),H=h.transformTo("string",f.utf8encode(z.name)),pe=z.comment,_e=h.transformTo("string",x(pe)),P=h.transformTo("string",f.utf8encode(pe)),j=H.length!==z.name.length,A=P.length!==pe.length,Q="",Ie="",ae="",xe=z.dir,se=z.date,Ae={crc32:0,compressedSize:0,uncompressedSize:0};v&&!E||(Ae.crc32=m.crc32,Ae.compressedSize=m.compressedSize,Ae.uncompressedSize=m.uncompressedSize);var G=0;v&&(G|=8),W||!j&&!A||(G|=2048);var U=0,Se=0;xe&&(U|=16),S==="UNIX"?(Se=798,U|=(function(he,Ye){var Et=he;return he||(Et=Ye?16893:33204),(65535&Et)<<16})(z.unixPermissions,xe)):(Se=20,U|=(function(he){return 63&(he||0)})(z.dosPermissions)),T=se.getUTCHours(),T<<=6,T|=se.getUTCMinutes(),T<<=5,T|=se.getUTCSeconds()/2,L=se.getUTCFullYear()-1980,L<<=4,L|=se.getUTCMonth()+1,L<<=5,L|=se.getUTCDate(),j&&(Ie=s(1,1)+s(p(oe),4)+H,Q+="up"+s(Ie.length,2)+Ie),A&&(ae=s(1,1)+s(p(_e),4)+P,Q+="uc"+s(ae.length,2)+ae);var ge="";return ge+=`
\0`,ge+=s(G,2),ge+=q.magic,ge+=s(T,2),ge+=s(L,2),ge+=s(Ae.crc32,4),ge+=s(Ae.compressedSize,4),ge+=s(Ae.uncompressedSize,4),ge+=s(oe.length,2),ge+=s(Q.length,2),{fileRecord:b.LOCAL_FILE_HEADER+ge+oe+Q,dirRecord:b.CENTRAL_FILE_HEADER+s(Se,2)+ge+s(_e.length,2)+"\0\0\0\0"+s(U,4)+s(y,4)+oe+Q+_e}}var h=r("../utils"),u=r("../stream/GenericWorker"),f=r("../utf8"),p=r("../crc32"),b=r("../signature");function w(m,v,E,y){u.call(this,"ZipFileWorker"),this.bytesWritten=0,this.zipComment=v,this.zipPlatform=E,this.encodeFileName=y,this.streamFiles=m,this.accumulate=!1,this.contentBuffer=[],this.dirRecords=[],this.currentSourceOffset=0,this.entriesCount=0,this.currentFile=null,this._sources=[]}h.inherits(w,u),w.prototype.push=function(m){var v=m.meta.percent||0,E=this.entriesCount,y=this._sources.length;this.accumulate?this.contentBuffer.push(m):(this.bytesWritten+=m.data.length,u.prototype.push.call(this,{data:m.data,meta:{currentFile:this.currentFile,percent:E?(v+100*(E-y-1))/E:100}}))},w.prototype.openedSource=function(m){this.currentSourceOffset=this.bytesWritten,this.currentFile=m.file.name;var v=this.streamFiles&&!m.file.dir;if(v){var E=c(m,v,!1,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);this.push({data:E.fileRecord,meta:{percent:0}})}else this.accumulate=!0},w.prototype.closedSource=function(m){this.accumulate=!1;var v=this.streamFiles&&!m.file.dir,E=c(m,v,!0,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);if(this.dirRecords.push(E.dirRecord),v)this.push({data:(function(y){return b.DATA_DESCRIPTOR+s(y.crc32,4)+s(y.compressedSize,4)+s(y.uncompressedSize,4)})(m),meta:{percent:100}});else for(this.push({data:E.fileRecord,meta:{percent:0}});this.contentBuffer.length;)this.push(this.contentBuffer.shift());this.currentFile=null},w.prototype.flush=function(){for(var m=this.bytesWritten,v=0;v<this.dirRecords.length;v++)this.push({data:this.dirRecords[v],meta:{percent:100}});var E=this.bytesWritten-m,y=(function(S,x,T,L,z){var q=h.transformTo("string",z(L));return b.CENTRAL_DIRECTORY_END+"\0\0\0\0"+s(S,2)+s(S,2)+s(x,4)+s(T,4)+s(q.length,2)+q})(this.dirRecords.length,E,m,this.zipComment,this.encodeFileName);this.push({data:y,meta:{percent:100}})},w.prototype.prepareNextSource=function(){this.previous=this._sources.shift(),this.openedSource(this.previous.streamInfo),this.isPaused?this.previous.pause():this.previous.resume()},w.prototype.registerPrevious=function(m){this._sources.push(m);var v=this;return m.on("data",function(E){v.processChunk(E)}),m.on("end",function(){v.closedSource(v.previous.streamInfo),v._sources.length?v.prepareNextSource():v.end()}),m.on("error",function(E){v.error(E)}),this},w.prototype.resume=function(){return!!u.prototype.resume.call(this)&&(!this.previous&&this._sources.length?(this.prepareNextSource(),!0):this.previous||this._sources.length||this.generatedError?void 0:(this.end(),!0))},w.prototype.error=function(m){var v=this._sources;if(!u.prototype.error.call(this,m))return!1;for(var E=0;E<v.length;E++)try{v[E].error(m)}catch{}return!0},w.prototype.lock=function(){u.prototype.lock.call(this);for(var m=this._sources,v=0;v<m.length;v++)m[v].lock()},o.exports=w},{"../crc32":4,"../signature":23,"../stream/GenericWorker":28,"../utf8":31,"../utils":32}],9:[function(r,o,a){"use strict";var s=r("../compressions"),c=r("./ZipFileWorker");a.generateWorker=function(h,u,f){var p=new c(u.streamFiles,f,u.platform,u.encodeFileName),b=0;try{h.forEach(function(w,m){b++;var v=(function(x,T){var L=x||T,z=s[L];if(!z)throw new Error(L+" is not a valid compression method !");return z})(m.options.compression,u.compression),E=m.options.compressionOptions||u.compressionOptions||{},y=m.dir,S=m.date;m._compressWorker(v,E).withStreamInfo("file",{name:w,dir:y,date:S,comment:m.comment||"",unixPermissions:m.unixPermissions,dosPermissions:m.dosPermissions}).pipe(p)}),p.entriesCount=b}catch(w){p.error(w)}return p}},{"../compressions":3,"./ZipFileWorker":8}],10:[function(r,o,a){"use strict";function s(){if(!(this instanceof s))return new s;if(arguments.length)throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");this.files=Object.create(null),this.comment=null,this.root="",this.clone=function(){var c=new s;for(var h in this)typeof this[h]!="function"&&(c[h]=this[h]);return c}}(s.prototype=r("./object")).loadAsync=r("./load"),s.support=r("./support"),s.defaults=r("./defaults"),s.version="3.9.1",s.loadAsync=function(c,h){return new s().loadAsync(c,h)},s.external=r("./external"),o.exports=s},{"./defaults":5,"./external":6,"./load":11,"./object":15,"./support":30}],11:[function(r,o,a){"use strict";var s=r("./utils"),c=r("./external"),h=r("./utf8"),u=r("./zipEntries"),f=r("./stream/Crc32Probe"),p=r("./nodejsUtils");function b(w){return new c.Promise(function(m,v){var E=w.decompressed.getContentWorker().pipe(new f);E.on("error",function(y){v(y)}).on("end",function(){E.streamInfo.crc32!==w.decompressed.crc32?v(new Error("Corrupted zip : CRC32 mismatch")):m()}).resume()})}o.exports=function(w,m){var v=this;return m=s.extend(m||{},{base64:!1,checkCRC32:!1,optimizedBinaryString:!1,createFolders:!1,decodeFileName:h.utf8decode}),p.isNode&&p.isStream(w)?c.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")):s.prepareContent("the loaded zip file",w,!0,m.optimizedBinaryString,m.base64).then(function(E){var y=new u(m);return y.load(E),y}).then(function(E){var y=[c.Promise.resolve(E)],S=E.files;if(m.checkCRC32)for(var x=0;x<S.length;x++)y.push(b(S[x]));return c.Promise.all(y)}).then(function(E){for(var y=E.shift(),S=y.files,x=0;x<S.length;x++){var T=S[x],L=T.fileNameStr,z=s.resolve(T.fileNameStr);v.file(z,T.decompressed,{binary:!0,optimizedBinaryString:!0,date:T.date,dir:T.dir,comment:T.fileCommentStr.length?T.fileCommentStr:null,unixPermissions:T.unixPermissions,dosPermissions:T.dosPermissions,createFolders:m.createFolders}),T.dir||(v.file(z).unsafeOriginalName=L)}return y.zipComment.length&&(v.comment=y.zipComment),v})}},{"./external":6,"./nodejsUtils":14,"./stream/Crc32Probe":25,"./utf8":31,"./utils":32,"./zipEntries":33}],12:[function(r,o,a){"use strict";var s=r("../utils"),c=r("../stream/GenericWorker");function h(u,f){c.call(this,"Nodejs stream input adapter for "+u),this._upstreamEnded=!1,this._bindStream(f)}s.inherits(h,c),h.prototype._bindStream=function(u){var f=this;(this._stream=u).pause(),u.on("data",function(p){f.push({data:p,meta:{percent:0}})}).on("error",function(p){f.isPaused?this.generatedError=p:f.error(p)}).on("end",function(){f.isPaused?f._upstreamEnded=!0:f.end()})},h.prototype.pause=function(){return!!c.prototype.pause.call(this)&&(this._stream.pause(),!0)},h.prototype.resume=function(){return!!c.prototype.resume.call(this)&&(this._upstreamEnded?this.end():this._stream.resume(),!0)},o.exports=h},{"../stream/GenericWorker":28,"../utils":32}],13:[function(r,o,a){"use strict";var s=r("readable-stream").Readable;function c(h,u,f){s.call(this,u),this._helper=h;var p=this;h.on("data",function(b,w){p.push(b)||p._helper.pause(),f&&f(w)}).on("error",function(b){p.emit("error",b)}).on("end",function(){p.push(null)})}r("../utils").inherits(c,s),c.prototype._read=function(){this._helper.resume()},o.exports=c},{"../utils":32,"readable-stream":16}],14:[function(r,o,a){"use strict";o.exports={isNode:typeof Buffer<"u",newBufferFrom:function(s,c){if(Buffer.from&&Buffer.from!==Uint8Array.from)return Buffer.from(s,c);if(typeof s=="number")throw new Error('The "data" argument must not be a number');return new Buffer(s,c)},allocBuffer:function(s){if(Buffer.alloc)return Buffer.alloc(s);var c=new Buffer(s);return c.fill(0),c},isBuffer:function(s){return Buffer.isBuffer(s)},isStream:function(s){return s&&typeof s.on=="function"&&typeof s.pause=="function"&&typeof s.resume=="function"}}},{}],15:[function(r,o,a){"use strict";function s(L,z,q){var W,oe=h.getTypeOf(z),H=h.extend(q||{},p);H.date=H.date||new Date,H.compression!==null&&(H.compression=H.compression.toUpperCase()),typeof H.unixPermissions=="string"&&(H.unixPermissions=parseInt(H.unixPermissions,8)),H.unixPermissions&&16384&H.unixPermissions&&(H.dir=!0),H.dosPermissions&&16&H.dosPermissions&&(H.dir=!0),H.dir&&(L=S(L)),H.createFolders&&(W=y(L))&&x.call(this,W,!0);var pe=oe==="string"&&H.binary===!1&&H.base64===!1;q&&q.binary!==void 0||(H.binary=!pe),(z instanceof b&&z.uncompressedSize===0||H.dir||!z||z.length===0)&&(H.base64=!1,H.binary=!0,z="",H.compression="STORE",oe="string");var _e=null;_e=z instanceof b||z instanceof u?z:v.isNode&&v.isStream(z)?new E(L,z):h.prepareContent(L,z,H.binary,H.optimizedBinaryString,H.base64);var P=new w(L,_e,H);this.files[L]=P}var c=r("./utf8"),h=r("./utils"),u=r("./stream/GenericWorker"),f=r("./stream/StreamHelper"),p=r("./defaults"),b=r("./compressedObject"),w=r("./zipObject"),m=r("./generate"),v=r("./nodejsUtils"),E=r("./nodejs/NodejsStreamInputAdapter"),y=function(L){L.slice(-1)==="/"&&(L=L.substring(0,L.length-1));var z=L.lastIndexOf("/");return 0<z?L.substring(0,z):""},S=function(L){return L.slice(-1)!=="/"&&(L+="/"),L},x=function(L,z){return z=z!==void 0?z:p.createFolders,L=S(L),this.files[L]||s.call(this,L,null,{dir:!0,createFolders:z}),this.files[L]};function T(L){return Object.prototype.toString.call(L)==="[object RegExp]"}o.exports={load:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},forEach:function(L){var z,q,W;for(z in this.files)W=this.files[z],(q=z.slice(this.root.length,z.length))&&z.slice(0,this.root.length)===this.root&&L(q,W)},filter:function(L){var z=[];return this.forEach(function(q,W){L(q,W)&&z.push(W)}),z},file:function(L,z,q){if(arguments.length!==1)return L=this.root+L,s.call(this,L,z,q),this;if(T(L)){var W=L;return this.filter(function(H,pe){return!pe.dir&&W.test(H)})}var oe=this.files[this.root+L];return oe&&!oe.dir?oe:null},folder:function(L){if(!L)return this;if(T(L))return this.filter(function(oe,H){return H.dir&&L.test(oe)});var z=this.root+L,q=x.call(this,z),W=this.clone();return W.root=q.name,W},remove:function(L){L=this.root+L;var z=this.files[L];if(z||(L.slice(-1)!=="/"&&(L+="/"),z=this.files[L]),z&&!z.dir)delete this.files[L];else for(var q=this.filter(function(oe,H){return H.name.slice(0,L.length)===L}),W=0;W<q.length;W++)delete this.files[q[W].name];return this},generate:function(L){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},generateInternalStream:function(L){var z,q={};try{if((q=h.extend(L||{},{streamFiles:!1,compression:"STORE",compressionOptions:null,type:"",platform:"DOS",comment:null,mimeType:"application/zip",encodeFileName:c.utf8encode})).type=q.type.toLowerCase(),q.compression=q.compression.toUpperCase(),q.type==="binarystring"&&(q.type="string"),!q.type)throw new Error("No output type specified.");h.checkSupport(q.type),q.platform!=="darwin"&&q.platform!=="freebsd"&&q.platform!=="linux"&&q.platform!=="sunos"||(q.platform="UNIX"),q.platform==="win32"&&(q.platform="DOS");var W=q.comment||this.comment||"";z=m.generateWorker(this,q,W)}catch(oe){(z=new u("error")).error(oe)}return new f(z,q.type||"string",q.mimeType)},generateAsync:function(L,z){return this.generateInternalStream(L).accumulate(z)},generateNodeStream:function(L,z){return(L=L||{}).type||(L.type="nodebuffer"),this.generateInternalStream(L).toNodejsStream(z)}}},{"./compressedObject":2,"./defaults":5,"./generate":9,"./nodejs/NodejsStreamInputAdapter":12,"./nodejsUtils":14,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31,"./utils":32,"./zipObject":35}],16:[function(r,o,a){o.exports=r("stream")},{stream:void 0}],17:[function(r,o,a){"use strict";var s=r("./DataReader");function c(h){s.call(this,h);for(var u=0;u<this.data.length;u++)h[u]=255&h[u]}r("../utils").inherits(c,s),c.prototype.byteAt=function(h){return this.data[this.zero+h]},c.prototype.lastIndexOfSignature=function(h){for(var u=h.charCodeAt(0),f=h.charCodeAt(1),p=h.charCodeAt(2),b=h.charCodeAt(3),w=this.length-4;0<=w;--w)if(this.data[w]===u&&this.data[w+1]===f&&this.data[w+2]===p&&this.data[w+3]===b)return w-this.zero;return-1},c.prototype.readAndCheckSignature=function(h){var u=h.charCodeAt(0),f=h.charCodeAt(1),p=h.charCodeAt(2),b=h.charCodeAt(3),w=this.readData(4);return u===w[0]&&f===w[1]&&p===w[2]&&b===w[3]},c.prototype.readData=function(h){if(this.checkOffset(h),h===0)return[];var u=this.data.slice(this.zero+this.index,this.zero+this.index+h);return this.index+=h,u},o.exports=c},{"../utils":32,"./DataReader":18}],18:[function(r,o,a){"use strict";var s=r("../utils");function c(h){this.data=h,this.length=h.length,this.index=0,this.zero=0}c.prototype={checkOffset:function(h){this.checkIndex(this.index+h)},checkIndex:function(h){if(this.length<this.zero+h||h<0)throw new Error("End of data reached (data length = "+this.length+", asked index = "+h+"). Corrupted zip ?")},setIndex:function(h){this.checkIndex(h),this.index=h},skip:function(h){this.setIndex(this.index+h)},byteAt:function(h){},readInt:function(h){var u,f=0;for(this.checkOffset(h),u=this.index+h-1;u>=this.index;u--)f=(f<<8)+this.byteAt(u);return this.index+=h,f},readString:function(h){return s.transformTo("string",this.readData(h))},readData:function(h){},lastIndexOfSignature:function(h){},readAndCheckSignature:function(h){},readDate:function(){var h=this.readInt(4);return new Date(Date.UTC(1980+(h>>25&127),(h>>21&15)-1,h>>16&31,h>>11&31,h>>5&63,(31&h)<<1))}},o.exports=c},{"../utils":32}],19:[function(r,o,a){"use strict";var s=r("./Uint8ArrayReader");function c(h){s.call(this,h)}r("../utils").inherits(c,s),c.prototype.readData=function(h){this.checkOffset(h);var u=this.data.slice(this.zero+this.index,this.zero+this.index+h);return this.index+=h,u},o.exports=c},{"../utils":32,"./Uint8ArrayReader":21}],20:[function(r,o,a){"use strict";var s=r("./DataReader");function c(h){s.call(this,h)}r("../utils").inherits(c,s),c.prototype.byteAt=function(h){return this.data.charCodeAt(this.zero+h)},c.prototype.lastIndexOfSignature=function(h){return this.data.lastIndexOf(h)-this.zero},c.prototype.readAndCheckSignature=function(h){return h===this.readData(4)},c.prototype.readData=function(h){this.checkOffset(h);var u=this.data.slice(this.zero+this.index,this.zero+this.index+h);return this.index+=h,u},o.exports=c},{"../utils":32,"./DataReader":18}],21:[function(r,o,a){"use strict";var s=r("./ArrayReader");function c(h){s.call(this,h)}r("../utils").inherits(c,s),c.prototype.readData=function(h){if(this.checkOffset(h),h===0)return new Uint8Array(0);var u=this.data.subarray(this.zero+this.index,this.zero+this.index+h);return this.index+=h,u},o.exports=c},{"../utils":32,"./ArrayReader":17}],22:[function(r,o,a){"use strict";var s=r("../utils"),c=r("../support"),h=r("./ArrayReader"),u=r("./StringReader"),f=r("./NodeBufferReader"),p=r("./Uint8ArrayReader");o.exports=function(b){var w=s.getTypeOf(b);return s.checkSupport(w),w!=="string"||c.uint8array?w==="nodebuffer"?new f(b):c.uint8array?new p(s.transformTo("uint8array",b)):new h(s.transformTo("array",b)):new u(b)}},{"../support":30,"../utils":32,"./ArrayReader":17,"./NodeBufferReader":19,"./StringReader":20,"./Uint8ArrayReader":21}],23:[function(r,o,a){"use strict";a.LOCAL_FILE_HEADER="PK",a.CENTRAL_FILE_HEADER="PK",a.CENTRAL_DIRECTORY_END="PK",a.ZIP64_CENTRAL_DIRECTORY_LOCATOR="PK\x07",a.ZIP64_CENTRAL_DIRECTORY_END="PK",a.DATA_DESCRIPTOR="PK\x07\b"},{}],24:[function(r,o,a){"use strict";var s=r("./GenericWorker"),c=r("../utils");function h(u){s.call(this,"ConvertWorker to "+u),this.destType=u}c.inherits(h,s),h.prototype.processChunk=function(u){this.push({data:c.transformTo(this.destType,u.data),meta:u.meta})},o.exports=h},{"../utils":32,"./GenericWorker":28}],25:[function(r,o,a){"use strict";var s=r("./GenericWorker"),c=r("../crc32");function h(){s.call(this,"Crc32Probe"),this.withStreamInfo("crc32",0)}r("../utils").inherits(h,s),h.prototype.processChunk=function(u){this.streamInfo.crc32=c(u.data,this.streamInfo.crc32||0),this.push(u)},o.exports=h},{"../crc32":4,"../utils":32,"./GenericWorker":28}],26:[function(r,o,a){"use strict";var s=r("../utils"),c=r("./GenericWorker");function h(u){c.call(this,"DataLengthProbe for "+u),this.propName=u,this.withStreamInfo(u,0)}s.inherits(h,c),h.prototype.processChunk=function(u){if(u){var f=this.streamInfo[this.propName]||0;this.streamInfo[this.propName]=f+u.data.length}c.prototype.processChunk.call(this,u)},o.exports=h},{"../utils":32,"./GenericWorker":28}],27:[function(r,o,a){"use strict";var s=r("../utils"),c=r("./GenericWorker");function h(u){c.call(this,"DataWorker");var f=this;this.dataIsReady=!1,this.index=0,this.max=0,this.data=null,this.type="",this._tickScheduled=!1,u.then(function(p){f.dataIsReady=!0,f.data=p,f.max=p&&p.length||0,f.type=s.getTypeOf(p),f.isPaused||f._tickAndRepeat()},function(p){f.error(p)})}s.inherits(h,c),h.prototype.cleanUp=function(){c.prototype.cleanUp.call(this),this.data=null},h.prototype.resume=function(){return!!c.prototype.resume.call(this)&&(!this._tickScheduled&&this.dataIsReady&&(this._tickScheduled=!0,s.delay(this._tickAndRepeat,[],this)),!0)},h.prototype._tickAndRepeat=function(){this._tickScheduled=!1,this.isPaused||this.isFinished||(this._tick(),this.isFinished||(s.delay(this._tickAndRepeat,[],this),this._tickScheduled=!0))},h.prototype._tick=function(){if(this.isPaused||this.isFinished)return!1;var u=null,f=Math.min(this.max,this.index+16384);if(this.index>=this.max)return this.end();switch(this.type){case"string":u=this.data.substring(this.index,f);break;case"uint8array":u=this.data.subarray(this.index,f);break;case"array":case"nodebuffer":u=this.data.slice(this.index,f)}return this.index=f,this.push({data:u,meta:{percent:this.max?this.index/this.max*100:0}})},o.exports=h},{"../utils":32,"./GenericWorker":28}],28:[function(r,o,a){"use strict";function s(c){this.name=c||"default",this.streamInfo={},this.generatedError=null,this.extraStreamInfo={},this.isPaused=!0,this.isFinished=!1,this.isLocked=!1,this._listeners={data:[],end:[],error:[]},this.previous=null}s.prototype={push:function(c){this.emit("data",c)},end:function(){if(this.isFinished)return!1;this.flush();try{this.emit("end"),this.cleanUp(),this.isFinished=!0}catch(c){this.emit("error",c)}return!0},error:function(c){return!this.isFinished&&(this.isPaused?this.generatedError=c:(this.isFinished=!0,this.emit("error",c),this.previous&&this.previous.error(c),this.cleanUp()),!0)},on:function(c,h){return this._listeners[c].push(h),this},cleanUp:function(){this.streamInfo=this.generatedError=this.extraStreamInfo=null,this._listeners=[]},emit:function(c,h){if(this._listeners[c])for(var u=0;u<this._listeners[c].length;u++)this._listeners[c][u].call(this,h)},pipe:function(c){return c.registerPrevious(this)},registerPrevious:function(c){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.streamInfo=c.streamInfo,this.mergeStreamInfo(),this.previous=c;var h=this;return c.on("data",function(u){h.processChunk(u)}),c.on("end",function(){h.end()}),c.on("error",function(u){h.error(u)}),this},pause:function(){return!this.isPaused&&!this.isFinished&&(this.isPaused=!0,this.previous&&this.previous.pause(),!0)},resume:function(){if(!this.isPaused||this.isFinished)return!1;var c=this.isPaused=!1;return this.generatedError&&(this.error(this.generatedError),c=!0),this.previous&&this.previous.resume(),!c},flush:function(){},processChunk:function(c){this.push(c)},withStreamInfo:function(c,h){return this.extraStreamInfo[c]=h,this.mergeStreamInfo(),this},mergeStreamInfo:function(){for(var c in this.extraStreamInfo)this.extraStreamInfo.hasOwnProperty(c)&&(this.streamInfo[c]=this.extraStreamInfo[c])},lock:function(){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.isLocked=!0,this.previous&&this.previous.lock()},toString:function(){var c="Worker "+this.name;return this.previous?this.previous+" -> "+c:c}},o.exports=s},{}],29:[function(r,o,a){"use strict";var s=r("../utils"),c=r("./ConvertWorker"),h=r("./GenericWorker"),u=r("../base64"),f=r("../support"),p=r("../external"),b=null;if(f.nodestream)try{b=r("../nodejs/NodejsStreamOutputAdapter")}catch{}function w(v,E){return new p.Promise(function(y,S){var x=[],T=v._internalType,L=v._outputType,z=v._mimeType;v.on("data",function(q,W){x.push(q),E&&E(W)}).on("error",function(q){x=[],S(q)}).on("end",function(){try{y((function(q,W,oe){switch(q){case"blob":return s.newBlob(s.transformTo("arraybuffer",W),oe);case"base64":return u.encode(W);default:return s.transformTo(q,W)}})(L,(function(q,W){var oe,H=0,pe=null,_e=0;for(oe=0;oe<W.length;oe++)_e+=W[oe].length;switch(q){case"string":return W.join("");case"array":return Array.prototype.concat.apply([],W);case"uint8array":for(pe=new Uint8Array(_e),oe=0;oe<W.length;oe++)pe.set(W[oe],H),H+=W[oe].length;return pe;case"nodebuffer":return Buffer.concat(W);default:throw new Error("concat : unsupported type '"+q+"'")}})(T,x),z))}catch(q){S(q)}x=[]}).resume()})}function m(v,E,y){var S=E;switch(E){case"blob":case"arraybuffer":S="uint8array";break;case"base64":S="string"}try{this._internalType=S,this._outputType=E,this._mimeType=y,s.checkSupport(S),this._worker=v.pipe(new c(S)),v.lock()}catch(x){this._worker=new h("error"),this._worker.error(x)}}m.prototype={accumulate:function(v){return w(this,v)},on:function(v,E){var y=this;return v==="data"?this._worker.on(v,function(S){E.call(y,S.data,S.meta)}):this._worker.on(v,function(){s.delay(E,arguments,y)}),this},resume:function(){return s.delay(this._worker.resume,[],this._worker),this},pause:function(){return this._worker.pause(),this},toNodejsStream:function(v){if(s.checkSupport("nodestream"),this._outputType!=="nodebuffer")throw new Error(this._outputType+" is not supported by this method");return new b(this,{objectMode:this._outputType!=="nodebuffer"},v)}},o.exports=m},{"../base64":1,"../external":6,"../nodejs/NodejsStreamOutputAdapter":13,"../support":30,"../utils":32,"./ConvertWorker":24,"./GenericWorker":28}],30:[function(r,o,a){"use strict";if(a.base64=!0,a.array=!0,a.string=!0,a.arraybuffer=typeof ArrayBuffer<"u"&&typeof Uint8Array<"u",a.nodebuffer=typeof Buffer<"u",a.uint8array=typeof Uint8Array<"u",typeof ArrayBuffer>"u")a.blob=!1;else{var s=new ArrayBuffer(0);try{a.blob=new Blob([s],{type:"application/zip"}).size===0}catch{try{var c=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);c.append(s),a.blob=c.getBlob("application/zip").size===0}catch{a.blob=!1}}}try{a.nodestream=!!r("readable-stream").Readable}catch{a.nodestream=!1}},{"readable-stream":16}],31:[function(r,o,a){"use strict";for(var s=r("./utils"),c=r("./support"),h=r("./nodejsUtils"),u=r("./stream/GenericWorker"),f=new Array(256),p=0;p<256;p++)f[p]=252<=p?6:248<=p?5:240<=p?4:224<=p?3:192<=p?2:1;f[254]=f[254]=1;function b(){u.call(this,"utf-8 decode"),this.leftOver=null}function w(){u.call(this,"utf-8 encode")}a.utf8encode=function(m){return c.nodebuffer?h.newBufferFrom(m,"utf-8"):(function(v){var E,y,S,x,T,L=v.length,z=0;for(x=0;x<L;x++)(64512&(y=v.charCodeAt(x)))==55296&&x+1<L&&(64512&(S=v.charCodeAt(x+1)))==56320&&(y=65536+(y-55296<<10)+(S-56320),x++),z+=y<128?1:y<2048?2:y<65536?3:4;for(E=c.uint8array?new Uint8Array(z):new Array(z),x=T=0;T<z;x++)(64512&(y=v.charCodeAt(x)))==55296&&x+1<L&&(64512&(S=v.charCodeAt(x+1)))==56320&&(y=65536+(y-55296<<10)+(S-56320),x++),y<128?E[T++]=y:(y<2048?E[T++]=192|y>>>6:(y<65536?E[T++]=224|y>>>12:(E[T++]=240|y>>>18,E[T++]=128|y>>>12&63),E[T++]=128|y>>>6&63),E[T++]=128|63&y);return E})(m)},a.utf8decode=function(m){return c.nodebuffer?s.transformTo("nodebuffer",m).toString("utf-8"):(function(v){var E,y,S,x,T=v.length,L=new Array(2*T);for(E=y=0;E<T;)if((S=v[E++])<128)L[y++]=S;else if(4<(x=f[S]))L[y++]=65533,E+=x-1;else{for(S&=x===2?31:x===3?15:7;1<x&&E<T;)S=S<<6|63&v[E++],x--;1<x?L[y++]=65533:S<65536?L[y++]=S:(S-=65536,L[y++]=55296|S>>10&1023,L[y++]=56320|1023&S)}return L.length!==y&&(L.subarray?L=L.subarray(0,y):L.length=y),s.applyFromCharCode(L)})(m=s.transformTo(c.uint8array?"uint8array":"array",m))},s.inherits(b,u),b.prototype.processChunk=function(m){var v=s.transformTo(c.uint8array?"uint8array":"array",m.data);if(this.leftOver&&this.leftOver.length){if(c.uint8array){var E=v;(v=new Uint8Array(E.length+this.leftOver.length)).set(this.leftOver,0),v.set(E,this.leftOver.length)}else v=this.leftOver.concat(v);this.leftOver=null}var y=(function(x,T){var L;for((T=T||x.length)>x.length&&(T=x.length),L=T-1;0<=L&&(192&x[L])==128;)L--;return L<0||L===0?T:L+f[x[L]]>T?L:T})(v),S=v;y!==v.length&&(c.uint8array?(S=v.subarray(0,y),this.leftOver=v.subarray(y,v.length)):(S=v.slice(0,y),this.leftOver=v.slice(y,v.length))),this.push({data:a.utf8decode(S),meta:m.meta})},b.prototype.flush=function(){this.leftOver&&this.leftOver.length&&(this.push({data:a.utf8decode(this.leftOver),meta:{}}),this.leftOver=null)},a.Utf8DecodeWorker=b,s.inherits(w,u),w.prototype.processChunk=function(m){this.push({data:a.utf8encode(m.data),meta:m.meta})},a.Utf8EncodeWorker=w},{"./nodejsUtils":14,"./stream/GenericWorker":28,"./support":30,"./utils":32}],32:[function(r,o,a){"use strict";var s=r("./support"),c=r("./base64"),h=r("./nodejsUtils"),u=r("set-immediate-shim"),f=r("./external");function p(y){return y}function b(y,S){for(var x=0;x<y.length;++x)S[x]=255&y.charCodeAt(x);return S}a.newBlob=function(y,S){a.checkSupport("blob");try{return new Blob([y],{type:S})}catch{try{var x=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);return x.append(y),x.getBlob(S)}catch{throw new Error("Bug : can't construct the Blob.")}}};var w={stringifyByChunk:function(y,S,x){var T=[],L=0,z=y.length;if(z<=x)return String.fromCharCode.apply(null,y);for(;L<z;)S==="array"||S==="nodebuffer"?T.push(String.fromCharCode.apply(null,y.slice(L,Math.min(L+x,z)))):T.push(String.fromCharCode.apply(null,y.subarray(L,Math.min(L+x,z)))),L+=x;return T.join("")},stringifyByChar:function(y){for(var S="",x=0;x<y.length;x++)S+=String.fromCharCode(y[x]);return S},applyCanBeUsed:{uint8array:(function(){try{return s.uint8array&&String.fromCharCode.apply(null,new Uint8Array(1)).length===1}catch{return!1}})(),nodebuffer:(function(){try{return s.nodebuffer&&String.fromCharCode.apply(null,h.allocBuffer(1)).length===1}catch{return!1}})()}};function m(y){var S=65536,x=a.getTypeOf(y),T=!0;if(x==="uint8array"?T=w.applyCanBeUsed.uint8array:x==="nodebuffer"&&(T=w.applyCanBeUsed.nodebuffer),T)for(;1<S;)try{return w.stringifyByChunk(y,x,S)}catch{S=Math.floor(S/2)}return w.stringifyByChar(y)}function v(y,S){for(var x=0;x<y.length;x++)S[x]=y[x];return S}a.applyFromCharCode=m;var E={};E.string={string:p,array:function(y){return b(y,new Array(y.length))},arraybuffer:function(y){return E.string.uint8array(y).buffer},uint8array:function(y){return b(y,new Uint8Array(y.length))},nodebuffer:function(y){return b(y,h.allocBuffer(y.length))}},E.array={string:m,array:p,arraybuffer:function(y){return new Uint8Array(y).buffer},uint8array:function(y){return new Uint8Array(y)},nodebuffer:function(y){return h.newBufferFrom(y)}},E.arraybuffer={string:function(y){return m(new Uint8Array(y))},array:function(y){return v(new Uint8Array(y),new Array(y.byteLength))},arraybuffer:p,uint8array:function(y){return new Uint8Array(y)},nodebuffer:function(y){return h.newBufferFrom(new Uint8Array(y))}},E.uint8array={string:m,array:function(y){return v(y,new Array(y.length))},arraybuffer:function(y){return y.buffer},uint8array:p,nodebuffer:function(y){return h.newBufferFrom(y)}},E.nodebuffer={string:m,array:function(y){return v(y,new Array(y.length))},arraybuffer:function(y){return E.nodebuffer.uint8array(y).buffer},uint8array:function(y){return v(y,new Uint8Array(y.length))},nodebuffer:p},a.transformTo=function(y,S){return S=S||"",y?(a.checkSupport(y),E[a.getTypeOf(S)][y](S)):S},a.resolve=function(y){for(var S=y.split("/"),x=[],T=0;T<S.length;T++){var L=S[T];L==="."||L===""&&T!==0&&T!==S.length-1||(L===".."?x.pop():x.push(L))}return x.join("/")},a.getTypeOf=function(y){return typeof y=="string"?"string":Object.prototype.toString.call(y)==="[object Array]"?"array":s.nodebuffer&&h.isBuffer(y)?"nodebuffer":s.uint8array&&y instanceof Uint8Array?"uint8array":s.arraybuffer&&y instanceof ArrayBuffer?"arraybuffer":void 0},a.checkSupport=function(y){if(!s[y.toLowerCase()])throw new Error(y+" is not supported by this platform")},a.MAX_VALUE_16BITS=65535,a.MAX_VALUE_32BITS=-1,a.pretty=function(y){var S,x,T="";for(x=0;x<(y||"").length;x++)T+="\\x"+((S=y.charCodeAt(x))<16?"0":"")+S.toString(16).toUpperCase();return T},a.delay=function(y,S,x){u(function(){y.apply(x||null,S||[])})},a.inherits=function(y,S){function x(){}x.prototype=S.prototype,y.prototype=new x},a.extend=function(){var y,S,x={};for(y=0;y<arguments.length;y++)for(S in arguments[y])arguments[y].hasOwnProperty(S)&&x[S]===void 0&&(x[S]=arguments[y][S]);return x},a.prepareContent=function(y,S,x,T,L){return f.Promise.resolve(S).then(function(z){return s.blob&&(z instanceof Blob||["[object File]","[object Blob]"].indexOf(Object.prototype.toString.call(z))!==-1)&&typeof FileReader<"u"?new f.Promise(function(q,W){var oe=new FileReader;oe.onload=function(H){q(H.target.result)},oe.onerror=function(H){W(H.target.error)},oe.readAsArrayBuffer(z)}):z}).then(function(z){var q=a.getTypeOf(z);return q?(q==="arraybuffer"?z=a.transformTo("uint8array",z):q==="string"&&(L?z=c.decode(z):x&&T!==!0&&(z=(function(W){return b(W,s.uint8array?new Uint8Array(W.length):new Array(W.length))})(z))),z):f.Promise.reject(new Error("Can't read the data of '"+y+"'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"))})}},{"./base64":1,"./external":6,"./nodejsUtils":14,"./support":30,"set-immediate-shim":54}],33:[function(r,o,a){"use strict";var s=r("./reader/readerFor"),c=r("./utils"),h=r("./signature"),u=r("./zipEntry"),f=(r("./utf8"),r("./support"));function p(b){this.files=[],this.loadOptions=b}p.prototype={checkSignature:function(b){if(!this.reader.readAndCheckSignature(b)){this.reader.index-=4;var w=this.reader.readString(4);throw new Error("Corrupted zip or bug: unexpected signature ("+c.pretty(w)+", expected "+c.pretty(b)+")")}},isSignature:function(b,w){var m=this.reader.index;this.reader.setIndex(b);var v=this.reader.readString(4)===w;return this.reader.setIndex(m),v},readBlockEndOfCentral:function(){this.diskNumber=this.reader.readInt(2),this.diskWithCentralDirStart=this.reader.readInt(2),this.centralDirRecordsOnThisDisk=this.reader.readInt(2),this.centralDirRecords=this.reader.readInt(2),this.centralDirSize=this.reader.readInt(4),this.centralDirOffset=this.reader.readInt(4),this.zipCommentLength=this.reader.readInt(2);var b=this.reader.readData(this.zipCommentLength),w=f.uint8array?"uint8array":"array",m=c.transformTo(w,b);this.zipComment=this.loadOptions.decodeFileName(m)},readBlockZip64EndOfCentral:function(){this.zip64EndOfCentralSize=this.reader.readInt(8),this.reader.skip(4),this.diskNumber=this.reader.readInt(4),this.diskWithCentralDirStart=this.reader.readInt(4),this.centralDirRecordsOnThisDisk=this.reader.readInt(8),this.centralDirRecords=this.reader.readInt(8),this.centralDirSize=this.reader.readInt(8),this.centralDirOffset=this.reader.readInt(8),this.zip64ExtensibleData={};for(var b,w,m,v=this.zip64EndOfCentralSize-44;0<v;)b=this.reader.readInt(2),w=this.reader.readInt(4),m=this.reader.readData(w),this.zip64ExtensibleData[b]={id:b,length:w,value:m}},readBlockZip64EndOfCentralLocator:function(){if(this.diskWithZip64CentralDirStart=this.reader.readInt(4),this.relativeOffsetEndOfZip64CentralDir=this.reader.readInt(8),this.disksCount=this.reader.readInt(4),1<this.disksCount)throw new Error("Multi-volumes zip are not supported")},readLocalFiles:function(){var b,w;for(b=0;b<this.files.length;b++)w=this.files[b],this.reader.setIndex(w.localHeaderOffset),this.checkSignature(h.LOCAL_FILE_HEADER),w.readLocalPart(this.reader),w.handleUTF8(),w.processAttributes()},readCentralDir:function(){var b;for(this.reader.setIndex(this.centralDirOffset);this.reader.readAndCheckSignature(h.CENTRAL_FILE_HEADER);)(b=new u({zip64:this.zip64},this.loadOptions)).readCentralPart(this.reader),this.files.push(b);if(this.centralDirRecords!==this.files.length&&this.centralDirRecords!==0&&this.files.length===0)throw new Error("Corrupted zip or bug: expected "+this.centralDirRecords+" records in central dir, got "+this.files.length)},readEndOfCentral:function(){var b=this.reader.lastIndexOfSignature(h.CENTRAL_DIRECTORY_END);if(b<0)throw this.isSignature(0,h.LOCAL_FILE_HEADER)?new Error("Corrupted zip: can't find end of central directory"):new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");this.reader.setIndex(b);var w=b;if(this.checkSignature(h.CENTRAL_DIRECTORY_END),this.readBlockEndOfCentral(),this.diskNumber===c.MAX_VALUE_16BITS||this.diskWithCentralDirStart===c.MAX_VALUE_16BITS||this.centralDirRecordsOnThisDisk===c.MAX_VALUE_16BITS||this.centralDirRecords===c.MAX_VALUE_16BITS||this.centralDirSize===c.MAX_VALUE_32BITS||this.centralDirOffset===c.MAX_VALUE_32BITS){if(this.zip64=!0,(b=this.reader.lastIndexOfSignature(h.ZIP64_CENTRAL_DIRECTORY_LOCATOR))<0)throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");if(this.reader.setIndex(b),this.checkSignature(h.ZIP64_CENTRAL_DIRECTORY_LOCATOR),this.readBlockZip64EndOfCentralLocator(),!this.isSignature(this.relativeOffsetEndOfZip64CentralDir,h.ZIP64_CENTRAL_DIRECTORY_END)&&(this.relativeOffsetEndOfZip64CentralDir=this.reader.lastIndexOfSignature(h.ZIP64_CENTRAL_DIRECTORY_END),this.relativeOffsetEndOfZip64CentralDir<0))throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),this.checkSignature(h.ZIP64_CENTRAL_DIRECTORY_END),this.readBlockZip64EndOfCentral()}var m=this.centralDirOffset+this.centralDirSize;this.zip64&&(m+=20,m+=12+this.zip64EndOfCentralSize);var v=w-m;if(0<v)this.isSignature(w,h.CENTRAL_FILE_HEADER)||(this.reader.zero=v);else if(v<0)throw new Error("Corrupted zip: missing "+Math.abs(v)+" bytes.")},prepareReader:function(b){this.reader=s(b)},load:function(b){this.prepareReader(b),this.readEndOfCentral(),this.readCentralDir(),this.readLocalFiles()}},o.exports=p},{"./reader/readerFor":22,"./signature":23,"./support":30,"./utf8":31,"./utils":32,"./zipEntry":34}],34:[function(r,o,a){"use strict";var s=r("./reader/readerFor"),c=r("./utils"),h=r("./compressedObject"),u=r("./crc32"),f=r("./utf8"),p=r("./compressions"),b=r("./support");function w(m,v){this.options=m,this.loadOptions=v}w.prototype={isEncrypted:function(){return(1&this.bitFlag)==1},useUTF8:function(){return(2048&this.bitFlag)==2048},readLocalPart:function(m){var v,E;if(m.skip(22),this.fileNameLength=m.readInt(2),E=m.readInt(2),this.fileName=m.readData(this.fileNameLength),m.skip(E),this.compressedSize===-1||this.uncompressedSize===-1)throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");if((v=(function(y){for(var S in p)if(p.hasOwnProperty(S)&&p[S].magic===y)return p[S];return null})(this.compressionMethod))===null)throw new Error("Corrupted zip : compression "+c.pretty(this.compressionMethod)+" unknown (inner file : "+c.transformTo("string",this.fileName)+")");this.decompressed=new h(this.compressedSize,this.uncompressedSize,this.crc32,v,m.readData(this.compressedSize))},readCentralPart:function(m){this.versionMadeBy=m.readInt(2),m.skip(2),this.bitFlag=m.readInt(2),this.compressionMethod=m.readString(2),this.date=m.readDate(),this.crc32=m.readInt(4),this.compressedSize=m.readInt(4),this.uncompressedSize=m.readInt(4);var v=m.readInt(2);if(this.extraFieldsLength=m.readInt(2),this.fileCommentLength=m.readInt(2),this.diskNumberStart=m.readInt(2),this.internalFileAttributes=m.readInt(2),this.externalFileAttributes=m.readInt(4),this.localHeaderOffset=m.readInt(4),this.isEncrypted())throw new Error("Encrypted zip are not supported");m.skip(v),this.readExtraFields(m),this.parseZIP64ExtraField(m),this.fileComment=m.readData(this.fileCommentLength)},processAttributes:function(){this.unixPermissions=null,this.dosPermissions=null;var m=this.versionMadeBy>>8;this.dir=!!(16&this.externalFileAttributes),m==0&&(this.dosPermissions=63&this.externalFileAttributes),m==3&&(this.unixPermissions=this.externalFileAttributes>>16&65535),this.dir||this.fileNameStr.slice(-1)!=="/"||(this.dir=!0)},parseZIP64ExtraField:function(m){if(this.extraFields[1]){var v=s(this.extraFields[1].value);this.uncompressedSize===c.MAX_VALUE_32BITS&&(this.uncompressedSize=v.readInt(8)),this.compressedSize===c.MAX_VALUE_32BITS&&(this.compressedSize=v.readInt(8)),this.localHeaderOffset===c.MAX_VALUE_32BITS&&(this.localHeaderOffset=v.readInt(8)),this.diskNumberStart===c.MAX_VALUE_32BITS&&(this.diskNumberStart=v.readInt(4))}},readExtraFields:function(m){var v,E,y,S=m.index+this.extraFieldsLength;for(this.extraFields||(this.extraFields={});m.index+4<S;)v=m.readInt(2),E=m.readInt(2),y=m.readData(E),this.extraFields[v]={id:v,length:E,value:y};m.setIndex(S)},handleUTF8:function(){var m=b.uint8array?"uint8array":"array";if(this.useUTF8())this.fileNameStr=f.utf8decode(this.fileName),this.fileCommentStr=f.utf8decode(this.fileComment);else{var v=this.findExtraFieldUnicodePath();if(v!==null)this.fileNameStr=v;else{var E=c.transformTo(m,this.fileName);this.fileNameStr=this.loadOptions.decodeFileName(E)}var y=this.findExtraFieldUnicodeComment();if(y!==null)this.fileCommentStr=y;else{var S=c.transformTo(m,this.fileComment);this.fileCommentStr=this.loadOptions.decodeFileName(S)}}},findExtraFieldUnicodePath:function(){var m=this.extraFields[28789];if(m){var v=s(m.value);return v.readInt(1)!==1||u(this.fileName)!==v.readInt(4)?null:f.utf8decode(v.readData(m.length-5))}return null},findExtraFieldUnicodeComment:function(){var m=this.extraFields[25461];if(m){var v=s(m.value);return v.readInt(1)!==1||u(this.fileComment)!==v.readInt(4)?null:f.utf8decode(v.readData(m.length-5))}return null}},o.exports=w},{"./compressedObject":2,"./compressions":3,"./crc32":4,"./reader/readerFor":22,"./support":30,"./utf8":31,"./utils":32}],35:[function(r,o,a){"use strict";function s(v,E,y){this.name=v,this.dir=y.dir,this.date=y.date,this.comment=y.comment,this.unixPermissions=y.unixPermissions,this.dosPermissions=y.dosPermissions,this._data=E,this._dataBinary=y.binary,this.options={compression:y.compression,compressionOptions:y.compressionOptions}}var c=r("./stream/StreamHelper"),h=r("./stream/DataWorker"),u=r("./utf8"),f=r("./compressedObject"),p=r("./stream/GenericWorker");s.prototype={internalStream:function(v){var E=null,y="string";try{if(!v)throw new Error("No output type specified.");var S=(y=v.toLowerCase())==="string"||y==="text";y!=="binarystring"&&y!=="text"||(y="string"),E=this._decompressWorker();var x=!this._dataBinary;x&&!S&&(E=E.pipe(new u.Utf8EncodeWorker)),!x&&S&&(E=E.pipe(new u.Utf8DecodeWorker))}catch(T){(E=new p("error")).error(T)}return new c(E,y,"")},async:function(v,E){return this.internalStream(v).accumulate(E)},nodeStream:function(v,E){return this.internalStream(v||"nodebuffer").toNodejsStream(E)},_compressWorker:function(v,E){if(this._data instanceof f&&this._data.compression.magic===v.magic)return this._data.getCompressedWorker();var y=this._decompressWorker();return this._dataBinary||(y=y.pipe(new u.Utf8EncodeWorker)),f.createWorkerFrom(y,v,E)},_decompressWorker:function(){return this._data instanceof f?this._data.getContentWorker():this._data instanceof p?this._data:new h(this._data)}};for(var b=["asText","asBinary","asNodeBuffer","asUint8Array","asArrayBuffer"],w=function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},m=0;m<b.length;m++)s.prototype[b[m]]=w;o.exports=s},{"./compressedObject":2,"./stream/DataWorker":27,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31}],36:[function(r,o,a){(function(s){"use strict";var c,h,u=s.MutationObserver||s.WebKitMutationObserver;if(u){var f=0,p=new u(v),b=s.document.createTextNode("");p.observe(b,{characterData:!0}),c=function(){b.data=f=++f%2}}else if(s.setImmediate||s.MessageChannel===void 0)c="document"in s&&"onreadystatechange"in s.document.createElement("script")?function(){var E=s.document.createElement("script");E.onreadystatechange=function(){v(),E.onreadystatechange=null,E.parentNode.removeChild(E),E=null},s.document.documentElement.appendChild(E)}:function(){setTimeout(v,0)};else{var w=new s.MessageChannel;w.port1.onmessage=v,c=function(){w.port2.postMessage(0)}}var m=[];function v(){var E,y;h=!0;for(var S=m.length;S;){for(y=m,m=[],E=-1;++E<S;)y[E]();S=m.length}h=!1}o.exports=function(E){m.push(E)!==1||h||c()}}).call(this,typeof global<"u"?global:typeof self<"u"?self:typeof window<"u"?window:{})},{}],37:[function(r,o,a){"use strict";var s=r("immediate");function c(){}var h={},u=["REJECTED"],f=["FULFILLED"],p=["PENDING"];function b(S){if(typeof S!="function")throw new TypeError("resolver must be a function");this.state=p,this.queue=[],this.outcome=void 0,S!==c&&E(this,S)}function w(S,x,T){this.promise=S,typeof x=="function"&&(this.onFulfilled=x,this.callFulfilled=this.otherCallFulfilled),typeof T=="function"&&(this.onRejected=T,this.callRejected=this.otherCallRejected)}function m(S,x,T){s(function(){var L;try{L=x(T)}catch(z){return h.reject(S,z)}L===S?h.reject(S,new TypeError("Cannot resolve promise with itself")):h.resolve(S,L)})}function v(S){var x=S&&S.then;if(S&&(typeof S=="object"||typeof S=="function")&&typeof x=="function")return function(){x.apply(S,arguments)}}function E(S,x){var T=!1;function L(W){T||(T=!0,h.reject(S,W))}function z(W){T||(T=!0,h.resolve(S,W))}var q=y(function(){x(z,L)});q.status==="error"&&L(q.value)}function y(S,x){var T={};try{T.value=S(x),T.status="success"}catch(L){T.status="error",T.value=L}return T}(o.exports=b).prototype.finally=function(S){if(typeof S!="function")return this;var x=this.constructor;return this.then(function(T){return x.resolve(S()).then(function(){return T})},function(T){return x.resolve(S()).then(function(){throw T})})},b.prototype.catch=function(S){return this.then(null,S)},b.prototype.then=function(S,x){if(typeof S!="function"&&this.state===f||typeof x!="function"&&this.state===u)return this;var T=new this.constructor(c);return this.state!==p?m(T,this.state===f?S:x,this.outcome):this.queue.push(new w(T,S,x)),T},w.prototype.callFulfilled=function(S){h.resolve(this.promise,S)},w.prototype.otherCallFulfilled=function(S){m(this.promise,this.onFulfilled,S)},w.prototype.callRejected=function(S){h.reject(this.promise,S)},w.prototype.otherCallRejected=function(S){m(this.promise,this.onRejected,S)},h.resolve=function(S,x){var T=y(v,x);if(T.status==="error")return h.reject(S,T.value);var L=T.value;if(L)E(S,L);else{S.state=f,S.outcome=x;for(var z=-1,q=S.queue.length;++z<q;)S.queue[z].callFulfilled(x)}return S},h.reject=function(S,x){S.state=u,S.outcome=x;for(var T=-1,L=S.queue.length;++T<L;)S.queue[T].callRejected(x);return S},b.resolve=function(S){return S instanceof this?S:h.resolve(new this(c),S)},b.reject=function(S){var x=new this(c);return h.reject(x,S)},b.all=function(S){var x=this;if(Object.prototype.toString.call(S)!=="[object Array]")return this.reject(new TypeError("must be an array"));var T=S.length,L=!1;if(!T)return this.resolve([]);for(var z=new Array(T),q=0,W=-1,oe=new this(c);++W<T;)H(S[W],W);return oe;function H(pe,_e){x.resolve(pe).then(function(P){z[_e]=P,++q!==T||L||(L=!0,h.resolve(oe,z))},function(P){L||(L=!0,h.reject(oe,P))})}},b.race=function(S){var x=this;if(Object.prototype.toString.call(S)!=="[object Array]")return this.reject(new TypeError("must be an array"));var T=S.length,L=!1;if(!T)return this.resolve([]);for(var z=-1,q=new this(c);++z<T;)W=S[z],x.resolve(W).then(function(oe){L||(L=!0,h.resolve(q,oe))},function(oe){L||(L=!0,h.reject(q,oe))});var W;return q}},{immediate:36}],38:[function(r,o,a){"use strict";var s={};(0,r("./lib/utils/common").assign)(s,r("./lib/deflate"),r("./lib/inflate"),r("./lib/zlib/constants")),o.exports=s},{"./lib/deflate":39,"./lib/inflate":40,"./lib/utils/common":41,"./lib/zlib/constants":44}],39:[function(r,o,a){"use strict";var s=r("./zlib/deflate"),c=r("./utils/common"),h=r("./utils/strings"),u=r("./zlib/messages"),f=r("./zlib/zstream"),p=Object.prototype.toString,b=0,w=-1,m=0,v=8;function E(S){if(!(this instanceof E))return new E(S);this.options=c.assign({level:w,method:v,chunkSize:16384,windowBits:15,memLevel:8,strategy:m,to:""},S||{});var x=this.options;x.raw&&0<x.windowBits?x.windowBits=-x.windowBits:x.gzip&&0<x.windowBits&&x.windowBits<16&&(x.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new f,this.strm.avail_out=0;var T=s.deflateInit2(this.strm,x.level,x.method,x.windowBits,x.memLevel,x.strategy);if(T!==b)throw new Error(u[T]);if(x.header&&s.deflateSetHeader(this.strm,x.header),x.dictionary){var L;if(L=typeof x.dictionary=="string"?h.string2buf(x.dictionary):p.call(x.dictionary)==="[object ArrayBuffer]"?new Uint8Array(x.dictionary):x.dictionary,(T=s.deflateSetDictionary(this.strm,L))!==b)throw new Error(u[T]);this._dict_set=!0}}function y(S,x){var T=new E(x);if(T.push(S,!0),T.err)throw T.msg||u[T.err];return T.result}E.prototype.push=function(S,x){var T,L,z=this.strm,q=this.options.chunkSize;if(this.ended)return!1;L=x===~~x?x:x===!0?4:0,typeof S=="string"?z.input=h.string2buf(S):p.call(S)==="[object ArrayBuffer]"?z.input=new Uint8Array(S):z.input=S,z.next_in=0,z.avail_in=z.input.length;do{if(z.avail_out===0&&(z.output=new c.Buf8(q),z.next_out=0,z.avail_out=q),(T=s.deflate(z,L))!==1&&T!==b)return this.onEnd(T),!(this.ended=!0);z.avail_out!==0&&(z.avail_in!==0||L!==4&&L!==2)||(this.options.to==="string"?this.onData(h.buf2binstring(c.shrinkBuf(z.output,z.next_out))):this.onData(c.shrinkBuf(z.output,z.next_out)))}while((0<z.avail_in||z.avail_out===0)&&T!==1);return L===4?(T=s.deflateEnd(this.strm),this.onEnd(T),this.ended=!0,T===b):L!==2||(this.onEnd(b),!(z.avail_out=0))},E.prototype.onData=function(S){this.chunks.push(S)},E.prototype.onEnd=function(S){S===b&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=c.flattenChunks(this.chunks)),this.chunks=[],this.err=S,this.msg=this.strm.msg},a.Deflate=E,a.deflate=y,a.deflateRaw=function(S,x){return(x=x||{}).raw=!0,y(S,x)},a.gzip=function(S,x){return(x=x||{}).gzip=!0,y(S,x)}},{"./utils/common":41,"./utils/strings":42,"./zlib/deflate":46,"./zlib/messages":51,"./zlib/zstream":53}],40:[function(r,o,a){"use strict";var s=r("./zlib/inflate"),c=r("./utils/common"),h=r("./utils/strings"),u=r("./zlib/constants"),f=r("./zlib/messages"),p=r("./zlib/zstream"),b=r("./zlib/gzheader"),w=Object.prototype.toString;function m(E){if(!(this instanceof m))return new m(E);this.options=c.assign({chunkSize:16384,windowBits:0,to:""},E||{});var y=this.options;y.raw&&0<=y.windowBits&&y.windowBits<16&&(y.windowBits=-y.windowBits,y.windowBits===0&&(y.windowBits=-15)),!(0<=y.windowBits&&y.windowBits<16)||E&&E.windowBits||(y.windowBits+=32),15<y.windowBits&&y.windowBits<48&&(15&y.windowBits)==0&&(y.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new p,this.strm.avail_out=0;var S=s.inflateInit2(this.strm,y.windowBits);if(S!==u.Z_OK)throw new Error(f[S]);this.header=new b,s.inflateGetHeader(this.strm,this.header)}function v(E,y){var S=new m(y);if(S.push(E,!0),S.err)throw S.msg||f[S.err];return S.result}m.prototype.push=function(E,y){var S,x,T,L,z,q,W=this.strm,oe=this.options.chunkSize,H=this.options.dictionary,pe=!1;if(this.ended)return!1;x=y===~~y?y:y===!0?u.Z_FINISH:u.Z_NO_FLUSH,typeof E=="string"?W.input=h.binstring2buf(E):w.call(E)==="[object ArrayBuffer]"?W.input=new Uint8Array(E):W.input=E,W.next_in=0,W.avail_in=W.input.length;do{if(W.avail_out===0&&(W.output=new c.Buf8(oe),W.next_out=0,W.avail_out=oe),(S=s.inflate(W,u.Z_NO_FLUSH))===u.Z_NEED_DICT&&H&&(q=typeof H=="string"?h.string2buf(H):w.call(H)==="[object ArrayBuffer]"?new Uint8Array(H):H,S=s.inflateSetDictionary(this.strm,q)),S===u.Z_BUF_ERROR&&pe===!0&&(S=u.Z_OK,pe=!1),S!==u.Z_STREAM_END&&S!==u.Z_OK)return this.onEnd(S),!(this.ended=!0);W.next_out&&(W.avail_out!==0&&S!==u.Z_STREAM_END&&(W.avail_in!==0||x!==u.Z_FINISH&&x!==u.Z_SYNC_FLUSH)||(this.options.to==="string"?(T=h.utf8border(W.output,W.next_out),L=W.next_out-T,z=h.buf2string(W.output,T),W.next_out=L,W.avail_out=oe-L,L&&c.arraySet(W.output,W.output,T,L,0),this.onData(z)):this.onData(c.shrinkBuf(W.output,W.next_out)))),W.avail_in===0&&W.avail_out===0&&(pe=!0)}while((0<W.avail_in||W.avail_out===0)&&S!==u.Z_STREAM_END);return S===u.Z_STREAM_END&&(x=u.Z_FINISH),x===u.Z_FINISH?(S=s.inflateEnd(this.strm),this.onEnd(S),this.ended=!0,S===u.Z_OK):x!==u.Z_SYNC_FLUSH||(this.onEnd(u.Z_OK),!(W.avail_out=0))},m.prototype.onData=function(E){this.chunks.push(E)},m.prototype.onEnd=function(E){E===u.Z_OK&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=c.flattenChunks(this.chunks)),this.chunks=[],this.err=E,this.msg=this.strm.msg},a.Inflate=m,a.inflate=v,a.inflateRaw=function(E,y){return(y=y||{}).raw=!0,v(E,y)},a.ungzip=v},{"./utils/common":41,"./utils/strings":42,"./zlib/constants":44,"./zlib/gzheader":47,"./zlib/inflate":49,"./zlib/messages":51,"./zlib/zstream":53}],41:[function(r,o,a){"use strict";var s=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Int32Array<"u";a.assign=function(u){for(var f=Array.prototype.slice.call(arguments,1);f.length;){var p=f.shift();if(p){if(typeof p!="object")throw new TypeError(p+"must be non-object");for(var b in p)p.hasOwnProperty(b)&&(u[b]=p[b])}}return u},a.shrinkBuf=function(u,f){return u.length===f?u:u.subarray?u.subarray(0,f):(u.length=f,u)};var c={arraySet:function(u,f,p,b,w){if(f.subarray&&u.subarray)u.set(f.subarray(p,p+b),w);else for(var m=0;m<b;m++)u[w+m]=f[p+m]},flattenChunks:function(u){var f,p,b,w,m,v;for(f=b=0,p=u.length;f<p;f++)b+=u[f].length;for(v=new Uint8Array(b),f=w=0,p=u.length;f<p;f++)m=u[f],v.set(m,w),w+=m.length;return v}},h={arraySet:function(u,f,p,b,w){for(var m=0;m<b;m++)u[w+m]=f[p+m]},flattenChunks:function(u){return[].concat.apply([],u)}};a.setTyped=function(u){u?(a.Buf8=Uint8Array,a.Buf16=Uint16Array,a.Buf32=Int32Array,a.assign(a,c)):(a.Buf8=Array,a.Buf16=Array,a.Buf32=Array,a.assign(a,h))},a.setTyped(s)},{}],42:[function(r,o,a){"use strict";var s=r("./common"),c=!0,h=!0;try{String.fromCharCode.apply(null,[0])}catch{c=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch{h=!1}for(var u=new s.Buf8(256),f=0;f<256;f++)u[f]=252<=f?6:248<=f?5:240<=f?4:224<=f?3:192<=f?2:1;function p(b,w){if(w<65537&&(b.subarray&&h||!b.subarray&&c))return String.fromCharCode.apply(null,s.shrinkBuf(b,w));for(var m="",v=0;v<w;v++)m+=String.fromCharCode(b[v]);return m}u[254]=u[254]=1,a.string2buf=function(b){var w,m,v,E,y,S=b.length,x=0;for(E=0;E<S;E++)(64512&(m=b.charCodeAt(E)))==55296&&E+1<S&&(64512&(v=b.charCodeAt(E+1)))==56320&&(m=65536+(m-55296<<10)+(v-56320),E++),x+=m<128?1:m<2048?2:m<65536?3:4;for(w=new s.Buf8(x),E=y=0;y<x;E++)(64512&(m=b.charCodeAt(E)))==55296&&E+1<S&&(64512&(v=b.charCodeAt(E+1)))==56320&&(m=65536+(m-55296<<10)+(v-56320),E++),m<128?w[y++]=m:(m<2048?w[y++]=192|m>>>6:(m<65536?w[y++]=224|m>>>12:(w[y++]=240|m>>>18,w[y++]=128|m>>>12&63),w[y++]=128|m>>>6&63),w[y++]=128|63&m);return w},a.buf2binstring=function(b){return p(b,b.length)},a.binstring2buf=function(b){for(var w=new s.Buf8(b.length),m=0,v=w.length;m<v;m++)w[m]=b.charCodeAt(m);return w},a.buf2string=function(b,w){var m,v,E,y,S=w||b.length,x=new Array(2*S);for(m=v=0;m<S;)if((E=b[m++])<128)x[v++]=E;else if(4<(y=u[E]))x[v++]=65533,m+=y-1;else{for(E&=y===2?31:y===3?15:7;1<y&&m<S;)E=E<<6|63&b[m++],y--;1<y?x[v++]=65533:E<65536?x[v++]=E:(E-=65536,x[v++]=55296|E>>10&1023,x[v++]=56320|1023&E)}return p(x,v)},a.utf8border=function(b,w){var m;for((w=w||b.length)>b.length&&(w=b.length),m=w-1;0<=m&&(192&b[m])==128;)m--;return m<0||m===0?w:m+u[b[m]]>w?m:w}},{"./common":41}],43:[function(r,o,a){"use strict";o.exports=function(s,c,h,u){for(var f=65535&s|0,p=s>>>16&65535|0,b=0;h!==0;){for(h-=b=2e3<h?2e3:h;p=p+(f=f+c[u++]|0)|0,--b;);f%=65521,p%=65521}return f|p<<16|0}},{}],44:[function(r,o,a){"use strict";o.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],45:[function(r,o,a){"use strict";var s=(function(){for(var c,h=[],u=0;u<256;u++){c=u;for(var f=0;f<8;f++)c=1&c?3988292384^c>>>1:c>>>1;h[u]=c}return h})();o.exports=function(c,h,u,f){var p=s,b=f+u;c^=-1;for(var w=f;w<b;w++)c=c>>>8^p[255&(c^h[w])];return-1^c}},{}],46:[function(r,o,a){"use strict";var s,c=r("../utils/common"),h=r("./trees"),u=r("./adler32"),f=r("./crc32"),p=r("./messages"),b=0,w=4,m=0,v=-2,E=-1,y=4,S=2,x=8,T=9,L=286,z=30,q=19,W=2*L+1,oe=15,H=3,pe=258,_e=pe+H+1,P=42,j=113,A=1,Q=2,Ie=3,ae=4;function xe(_,ee){return _.msg=p[ee],ee}function se(_){return(_<<1)-(4<_?9:0)}function Ae(_){for(var ee=_.length;0<=--ee;)_[ee]=0}function G(_){var ee=_.state,Z=ee.pending;Z>_.avail_out&&(Z=_.avail_out),Z!==0&&(c.arraySet(_.output,ee.pending_buf,ee.pending_out,Z,_.next_out),_.next_out+=Z,ee.pending_out+=Z,_.total_out+=Z,_.avail_out-=Z,ee.pending-=Z,ee.pending===0&&(ee.pending_out=0))}function U(_,ee){h._tr_flush_block(_,0<=_.block_start?_.block_start:-1,_.strstart-_.block_start,ee),_.block_start=_.strstart,G(_.strm)}function Se(_,ee){_.pending_buf[_.pending++]=ee}function ge(_,ee){_.pending_buf[_.pending++]=ee>>>8&255,_.pending_buf[_.pending++]=255&ee}function he(_,ee){var Z,O,C=_.max_chain_length,D=_.strstart,ie=_.prev_length,re=_.nice_match,F=_.strstart>_.w_size-_e?_.strstart-(_.w_size-_e):0,ue=_.window,be=_.w_mask,de=_.prev,Me=_.strstart+pe,qe=ue[D+ie-1],Fe=ue[D+ie];_.prev_length>=_.good_match&&(C>>=2),re>_.lookahead&&(re=_.lookahead);do if(ue[(Z=ee)+ie]===Fe&&ue[Z+ie-1]===qe&&ue[Z]===ue[D]&&ue[++Z]===ue[D+1]){D+=2,Z++;do;while(ue[++D]===ue[++Z]&&ue[++D]===ue[++Z]&&ue[++D]===ue[++Z]&&ue[++D]===ue[++Z]&&ue[++D]===ue[++Z]&&ue[++D]===ue[++Z]&&ue[++D]===ue[++Z]&&ue[++D]===ue[++Z]&&D<Me);if(O=pe-(Me-D),D=Me-pe,ie<O){if(_.match_start=ee,re<=(ie=O))break;qe=ue[D+ie-1],Fe=ue[D+ie]}}while((ee=de[ee&be])>F&&--C!=0);return ie<=_.lookahead?ie:_.lookahead}function Ye(_){var ee,Z,O,C,D,ie,re,F,ue,be,de=_.w_size;do{if(C=_.window_size-_.lookahead-_.strstart,_.strstart>=de+(de-_e)){for(c.arraySet(_.window,_.window,de,de,0),_.match_start-=de,_.strstart-=de,_.block_start-=de,ee=Z=_.hash_size;O=_.head[--ee],_.head[ee]=de<=O?O-de:0,--Z;);for(ee=Z=de;O=_.prev[--ee],_.prev[ee]=de<=O?O-de:0,--Z;);C+=de}if(_.strm.avail_in===0)break;if(ie=_.strm,re=_.window,F=_.strstart+_.lookahead,ue=C,be=void 0,be=ie.avail_in,ue<be&&(be=ue),Z=be===0?0:(ie.avail_in-=be,c.arraySet(re,ie.input,ie.next_in,be,F),ie.state.wrap===1?ie.adler=u(ie.adler,re,be,F):ie.state.wrap===2&&(ie.adler=f(ie.adler,re,be,F)),ie.next_in+=be,ie.total_in+=be,be),_.lookahead+=Z,_.lookahead+_.insert>=H)for(D=_.strstart-_.insert,_.ins_h=_.window[D],_.ins_h=(_.ins_h<<_.hash_shift^_.window[D+1])&_.hash_mask;_.insert&&(_.ins_h=(_.ins_h<<_.hash_shift^_.window[D+H-1])&_.hash_mask,_.prev[D&_.w_mask]=_.head[_.ins_h],_.head[_.ins_h]=D,D++,_.insert--,!(_.lookahead+_.insert<H)););}while(_.lookahead<_e&&_.strm.avail_in!==0)}function Et(_,ee){for(var Z,O;;){if(_.lookahead<_e){if(Ye(_),_.lookahead<_e&&ee===b)return A;if(_.lookahead===0)break}if(Z=0,_.lookahead>=H&&(_.ins_h=(_.ins_h<<_.hash_shift^_.window[_.strstart+H-1])&_.hash_mask,Z=_.prev[_.strstart&_.w_mask]=_.head[_.ins_h],_.head[_.ins_h]=_.strstart),Z!==0&&_.strstart-Z<=_.w_size-_e&&(_.match_length=he(_,Z)),_.match_length>=H)if(O=h._tr_tally(_,_.strstart-_.match_start,_.match_length-H),_.lookahead-=_.match_length,_.match_length<=_.max_lazy_match&&_.lookahead>=H){for(_.match_length--;_.strstart++,_.ins_h=(_.ins_h<<_.hash_shift^_.window[_.strstart+H-1])&_.hash_mask,Z=_.prev[_.strstart&_.w_mask]=_.head[_.ins_h],_.head[_.ins_h]=_.strstart,--_.match_length!=0;);_.strstart++}else _.strstart+=_.match_length,_.match_length=0,_.ins_h=_.window[_.strstart],_.ins_h=(_.ins_h<<_.hash_shift^_.window[_.strstart+1])&_.hash_mask;else O=h._tr_tally(_,0,_.window[_.strstart]),_.lookahead--,_.strstart++;if(O&&(U(_,!1),_.strm.avail_out===0))return A}return _.insert=_.strstart<H-1?_.strstart:H-1,ee===w?(U(_,!0),_.strm.avail_out===0?Ie:ae):_.last_lit&&(U(_,!1),_.strm.avail_out===0)?A:Q}function Ne(_,ee){for(var Z,O,C;;){if(_.lookahead<_e){if(Ye(_),_.lookahead<_e&&ee===b)return A;if(_.lookahead===0)break}if(Z=0,_.lookahead>=H&&(_.ins_h=(_.ins_h<<_.hash_shift^_.window[_.strstart+H-1])&_.hash_mask,Z=_.prev[_.strstart&_.w_mask]=_.head[_.ins_h],_.head[_.ins_h]=_.strstart),_.prev_length=_.match_length,_.prev_match=_.match_start,_.match_length=H-1,Z!==0&&_.prev_length<_.max_lazy_match&&_.strstart-Z<=_.w_size-_e&&(_.match_length=he(_,Z),_.match_length<=5&&(_.strategy===1||_.match_length===H&&4096<_.strstart-_.match_start)&&(_.match_length=H-1)),_.prev_length>=H&&_.match_length<=_.prev_length){for(C=_.strstart+_.lookahead-H,O=h._tr_tally(_,_.strstart-1-_.prev_match,_.prev_length-H),_.lookahead-=_.prev_length-1,_.prev_length-=2;++_.strstart<=C&&(_.ins_h=(_.ins_h<<_.hash_shift^_.window[_.strstart+H-1])&_.hash_mask,Z=_.prev[_.strstart&_.w_mask]=_.head[_.ins_h],_.head[_.ins_h]=_.strstart),--_.prev_length!=0;);if(_.match_available=0,_.match_length=H-1,_.strstart++,O&&(U(_,!1),_.strm.avail_out===0))return A}else if(_.match_available){if((O=h._tr_tally(_,0,_.window[_.strstart-1]))&&U(_,!1),_.strstart++,_.lookahead--,_.strm.avail_out===0)return A}else _.match_available=1,_.strstart++,_.lookahead--}return _.match_available&&(O=h._tr_tally(_,0,_.window[_.strstart-1]),_.match_available=0),_.insert=_.strstart<H-1?_.strstart:H-1,ee===w?(U(_,!0),_.strm.avail_out===0?Ie:ae):_.last_lit&&(U(_,!1),_.strm.avail_out===0)?A:Q}function Ge(_,ee,Z,O,C){this.good_length=_,this.max_lazy=ee,this.nice_length=Z,this.max_chain=O,this.func=C}function At(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=x,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new c.Buf16(2*W),this.dyn_dtree=new c.Buf16(2*(2*z+1)),this.bl_tree=new c.Buf16(2*(2*q+1)),Ae(this.dyn_ltree),Ae(this.dyn_dtree),Ae(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new c.Buf16(oe+1),this.heap=new c.Buf16(2*L+1),Ae(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new c.Buf16(2*L+1),Ae(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function it(_){var ee;return _&&_.state?(_.total_in=_.total_out=0,_.data_type=S,(ee=_.state).pending=0,ee.pending_out=0,ee.wrap<0&&(ee.wrap=-ee.wrap),ee.status=ee.wrap?P:j,_.adler=ee.wrap===2?0:1,ee.last_flush=b,h._tr_init(ee),m):xe(_,v)}function Gt(_){var ee=it(_);return ee===m&&(function(Z){Z.window_size=2*Z.w_size,Ae(Z.head),Z.max_lazy_match=s[Z.level].max_lazy,Z.good_match=s[Z.level].good_length,Z.nice_match=s[Z.level].nice_length,Z.max_chain_length=s[Z.level].max_chain,Z.strstart=0,Z.block_start=0,Z.lookahead=0,Z.insert=0,Z.match_length=Z.prev_length=H-1,Z.match_available=0,Z.ins_h=0})(_.state),ee}function Yt(_,ee,Z,O,C,D){if(!_)return v;var ie=1;if(ee===E&&(ee=6),O<0?(ie=0,O=-O):15<O&&(ie=2,O-=16),C<1||T<C||Z!==x||O<8||15<O||ee<0||9<ee||D<0||y<D)return xe(_,v);O===8&&(O=9);var re=new At;return(_.state=re).strm=_,re.wrap=ie,re.gzhead=null,re.w_bits=O,re.w_size=1<<re.w_bits,re.w_mask=re.w_size-1,re.hash_bits=C+7,re.hash_size=1<<re.hash_bits,re.hash_mask=re.hash_size-1,re.hash_shift=~~((re.hash_bits+H-1)/H),re.window=new c.Buf8(2*re.w_size),re.head=new c.Buf16(re.hash_size),re.prev=new c.Buf16(re.w_size),re.lit_bufsize=1<<C+6,re.pending_buf_size=4*re.lit_bufsize,re.pending_buf=new c.Buf8(re.pending_buf_size),re.d_buf=1*re.lit_bufsize,re.l_buf=3*re.lit_bufsize,re.level=ee,re.strategy=D,re.method=Z,Gt(_)}s=[new Ge(0,0,0,0,function(_,ee){var Z=65535;for(Z>_.pending_buf_size-5&&(Z=_.pending_buf_size-5);;){if(_.lookahead<=1){if(Ye(_),_.lookahead===0&&ee===b)return A;if(_.lookahead===0)break}_.strstart+=_.lookahead,_.lookahead=0;var O=_.block_start+Z;if((_.strstart===0||_.strstart>=O)&&(_.lookahead=_.strstart-O,_.strstart=O,U(_,!1),_.strm.avail_out===0)||_.strstart-_.block_start>=_.w_size-_e&&(U(_,!1),_.strm.avail_out===0))return A}return _.insert=0,ee===w?(U(_,!0),_.strm.avail_out===0?Ie:ae):(_.strstart>_.block_start&&(U(_,!1),_.strm.avail_out),A)}),new Ge(4,4,8,4,Et),new Ge(4,5,16,8,Et),new Ge(4,6,32,32,Et),new Ge(4,4,16,16,Ne),new Ge(8,16,32,32,Ne),new Ge(8,16,128,128,Ne),new Ge(8,32,128,256,Ne),new Ge(32,128,258,1024,Ne),new Ge(32,258,258,4096,Ne)],a.deflateInit=function(_,ee){return Yt(_,ee,x,15,8,0)},a.deflateInit2=Yt,a.deflateReset=Gt,a.deflateResetKeep=it,a.deflateSetHeader=function(_,ee){return _&&_.state?_.state.wrap!==2?v:(_.state.gzhead=ee,m):v},a.deflate=function(_,ee){var Z,O,C,D;if(!_||!_.state||5<ee||ee<0)return _?xe(_,v):v;if(O=_.state,!_.output||!_.input&&_.avail_in!==0||O.status===666&&ee!==w)return xe(_,_.avail_out===0?-5:v);if(O.strm=_,Z=O.last_flush,O.last_flush=ee,O.status===P)if(O.wrap===2)_.adler=0,Se(O,31),Se(O,139),Se(O,8),O.gzhead?(Se(O,(O.gzhead.text?1:0)+(O.gzhead.hcrc?2:0)+(O.gzhead.extra?4:0)+(O.gzhead.name?8:0)+(O.gzhead.comment?16:0)),Se(O,255&O.gzhead.time),Se(O,O.gzhead.time>>8&255),Se(O,O.gzhead.time>>16&255),Se(O,O.gzhead.time>>24&255),Se(O,O.level===9?2:2<=O.strategy||O.level<2?4:0),Se(O,255&O.gzhead.os),O.gzhead.extra&&O.gzhead.extra.length&&(Se(O,255&O.gzhead.extra.length),Se(O,O.gzhead.extra.length>>8&255)),O.gzhead.hcrc&&(_.adler=f(_.adler,O.pending_buf,O.pending,0)),O.gzindex=0,O.status=69):(Se(O,0),Se(O,0),Se(O,0),Se(O,0),Se(O,0),Se(O,O.level===9?2:2<=O.strategy||O.level<2?4:0),Se(O,3),O.status=j);else{var ie=x+(O.w_bits-8<<4)<<8;ie|=(2<=O.strategy||O.level<2?0:O.level<6?1:O.level===6?2:3)<<6,O.strstart!==0&&(ie|=32),ie+=31-ie%31,O.status=j,ge(O,ie),O.strstart!==0&&(ge(O,_.adler>>>16),ge(O,65535&_.adler)),_.adler=1}if(O.status===69)if(O.gzhead.extra){for(C=O.pending;O.gzindex<(65535&O.gzhead.extra.length)&&(O.pending!==O.pending_buf_size||(O.gzhead.hcrc&&O.pending>C&&(_.adler=f(_.adler,O.pending_buf,O.pending-C,C)),G(_),C=O.pending,O.pending!==O.pending_buf_size));)Se(O,255&O.gzhead.extra[O.gzindex]),O.gzindex++;O.gzhead.hcrc&&O.pending>C&&(_.adler=f(_.adler,O.pending_buf,O.pending-C,C)),O.gzindex===O.gzhead.extra.length&&(O.gzindex=0,O.status=73)}else O.status=73;if(O.status===73)if(O.gzhead.name){C=O.pending;do{if(O.pending===O.pending_buf_size&&(O.gzhead.hcrc&&O.pending>C&&(_.adler=f(_.adler,O.pending_buf,O.pending-C,C)),G(_),C=O.pending,O.pending===O.pending_buf_size)){D=1;break}D=O.gzindex<O.gzhead.name.length?255&O.gzhead.name.charCodeAt(O.gzindex++):0,Se(O,D)}while(D!==0);O.gzhead.hcrc&&O.pending>C&&(_.adler=f(_.adler,O.pending_buf,O.pending-C,C)),D===0&&(O.gzindex=0,O.status=91)}else O.status=91;if(O.status===91)if(O.gzhead.comment){C=O.pending;do{if(O.pending===O.pending_buf_size&&(O.gzhead.hcrc&&O.pending>C&&(_.adler=f(_.adler,O.pending_buf,O.pending-C,C)),G(_),C=O.pending,O.pending===O.pending_buf_size)){D=1;break}D=O.gzindex<O.gzhead.comment.length?255&O.gzhead.comment.charCodeAt(O.gzindex++):0,Se(O,D)}while(D!==0);O.gzhead.hcrc&&O.pending>C&&(_.adler=f(_.adler,O.pending_buf,O.pending-C,C)),D===0&&(O.status=103)}else O.status=103;if(O.status===103&&(O.gzhead.hcrc?(O.pending+2>O.pending_buf_size&&G(_),O.pending+2<=O.pending_buf_size&&(Se(O,255&_.adler),Se(O,_.adler>>8&255),_.adler=0,O.status=j)):O.status=j),O.pending!==0){if(G(_),_.avail_out===0)return O.last_flush=-1,m}else if(_.avail_in===0&&se(ee)<=se(Z)&&ee!==w)return xe(_,-5);if(O.status===666&&_.avail_in!==0)return xe(_,-5);if(_.avail_in!==0||O.lookahead!==0||ee!==b&&O.status!==666){var re=O.strategy===2?(function(F,ue){for(var be;;){if(F.lookahead===0&&(Ye(F),F.lookahead===0)){if(ue===b)return A;break}if(F.match_length=0,be=h._tr_tally(F,0,F.window[F.strstart]),F.lookahead--,F.strstart++,be&&(U(F,!1),F.strm.avail_out===0))return A}return F.insert=0,ue===w?(U(F,!0),F.strm.avail_out===0?Ie:ae):F.last_lit&&(U(F,!1),F.strm.avail_out===0)?A:Q})(O,ee):O.strategy===3?(function(F,ue){for(var be,de,Me,qe,Fe=F.window;;){if(F.lookahead<=pe){if(Ye(F),F.lookahead<=pe&&ue===b)return A;if(F.lookahead===0)break}if(F.match_length=0,F.lookahead>=H&&0<F.strstart&&(de=Fe[Me=F.strstart-1])===Fe[++Me]&&de===Fe[++Me]&&de===Fe[++Me]){qe=F.strstart+pe;do;while(de===Fe[++Me]&&de===Fe[++Me]&&de===Fe[++Me]&&de===Fe[++Me]&&de===Fe[++Me]&&de===Fe[++Me]&&de===Fe[++Me]&&de===Fe[++Me]&&Me<qe);F.match_length=pe-(qe-Me),F.match_length>F.lookahead&&(F.match_length=F.lookahead)}if(F.match_length>=H?(be=h._tr_tally(F,1,F.match_length-H),F.lookahead-=F.match_length,F.strstart+=F.match_length,F.match_length=0):(be=h._tr_tally(F,0,F.window[F.strstart]),F.lookahead--,F.strstart++),be&&(U(F,!1),F.strm.avail_out===0))return A}return F.insert=0,ue===w?(U(F,!0),F.strm.avail_out===0?Ie:ae):F.last_lit&&(U(F,!1),F.strm.avail_out===0)?A:Q})(O,ee):s[O.level].func(O,ee);if(re!==Ie&&re!==ae||(O.status=666),re===A||re===Ie)return _.avail_out===0&&(O.last_flush=-1),m;if(re===Q&&(ee===1?h._tr_align(O):ee!==5&&(h._tr_stored_block(O,0,0,!1),ee===3&&(Ae(O.head),O.lookahead===0&&(O.strstart=0,O.block_start=0,O.insert=0))),G(_),_.avail_out===0))return O.last_flush=-1,m}return ee!==w?m:O.wrap<=0?1:(O.wrap===2?(Se(O,255&_.adler),Se(O,_.adler>>8&255),Se(O,_.adler>>16&255),Se(O,_.adler>>24&255),Se(O,255&_.total_in),Se(O,_.total_in>>8&255),Se(O,_.total_in>>16&255),Se(O,_.total_in>>24&255)):(ge(O,_.adler>>>16),ge(O,65535&_.adler)),G(_),0<O.wrap&&(O.wrap=-O.wrap),O.pending!==0?m:1)},a.deflateEnd=function(_){var ee;return _&&_.state?(ee=_.state.status)!==P&&ee!==69&&ee!==73&&ee!==91&&ee!==103&&ee!==j&&ee!==666?xe(_,v):(_.state=null,ee===j?xe(_,-3):m):v},a.deflateSetDictionary=function(_,ee){var Z,O,C,D,ie,re,F,ue,be=ee.length;if(!_||!_.state||(D=(Z=_.state).wrap)===2||D===1&&Z.status!==P||Z.lookahead)return v;for(D===1&&(_.adler=u(_.adler,ee,be,0)),Z.wrap=0,be>=Z.w_size&&(D===0&&(Ae(Z.head),Z.strstart=0,Z.block_start=0,Z.insert=0),ue=new c.Buf8(Z.w_size),c.arraySet(ue,ee,be-Z.w_size,Z.w_size,0),ee=ue,be=Z.w_size),ie=_.avail_in,re=_.next_in,F=_.input,_.avail_in=be,_.next_in=0,_.input=ee,Ye(Z);Z.lookahead>=H;){for(O=Z.strstart,C=Z.lookahead-(H-1);Z.ins_h=(Z.ins_h<<Z.hash_shift^Z.window[O+H-1])&Z.hash_mask,Z.prev[O&Z.w_mask]=Z.head[Z.ins_h],Z.head[Z.ins_h]=O,O++,--C;);Z.strstart=O,Z.lookahead=H-1,Ye(Z)}return Z.strstart+=Z.lookahead,Z.block_start=Z.strstart,Z.insert=Z.lookahead,Z.lookahead=0,Z.match_length=Z.prev_length=H-1,Z.match_available=0,_.next_in=re,_.input=F,_.avail_in=ie,Z.wrap=D,m},a.deflateInfo="pako deflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./messages":51,"./trees":52}],47:[function(r,o,a){"use strict";o.exports=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}},{}],48:[function(r,o,a){"use strict";o.exports=function(s,c){var h=s.state,u=s.next_in,f,p,b,w,m,v,E,y,S,x,T,L,z,q,W,oe,H,pe,_e,P,j,A=s.input,Q;f=u+(s.avail_in-5),p=s.next_out,Q=s.output,b=p-(c-s.avail_out),w=p+(s.avail_out-257),m=h.dmax,v=h.wsize,E=h.whave,y=h.wnext,S=h.window,x=h.hold,T=h.bits,L=h.lencode,z=h.distcode,q=(1<<h.lenbits)-1,W=(1<<h.distbits)-1;e:do{T<15&&(x+=A[u++]<<T,T+=8,x+=A[u++]<<T,T+=8),oe=L[x&q];t:for(;;){if(x>>>=H=oe>>>24,T-=H,(H=oe>>>16&255)===0)Q[p++]=65535&oe;else{if(!(16&H)){if((64&H)==0){oe=L[(65535&oe)+(x&(1<<H)-1)];continue t}if(32&H){h.mode=12;break e}s.msg="invalid literal/length code",h.mode=30;break e}pe=65535&oe,(H&=15)&&(T<H&&(x+=A[u++]<<T,T+=8),pe+=x&(1<<H)-1,x>>>=H,T-=H),T<15&&(x+=A[u++]<<T,T+=8,x+=A[u++]<<T,T+=8),oe=z[x&W];n:for(;;){if(x>>>=H=oe>>>24,T-=H,!(16&(H=oe>>>16&255))){if((64&H)==0){oe=z[(65535&oe)+(x&(1<<H)-1)];continue n}s.msg="invalid distance code",h.mode=30;break e}if(_e=65535&oe,T<(H&=15)&&(x+=A[u++]<<T,(T+=8)<H&&(x+=A[u++]<<T,T+=8)),m<(_e+=x&(1<<H)-1)){s.msg="invalid distance too far back",h.mode=30;break e}if(x>>>=H,T-=H,(H=p-b)<_e){if(E<(H=_e-H)&&h.sane){s.msg="invalid distance too far back",h.mode=30;break e}if(j=S,(P=0)===y){if(P+=v-H,H<pe){for(pe-=H;Q[p++]=S[P++],--H;);P=p-_e,j=Q}}else if(y<H){if(P+=v+y-H,(H-=y)<pe){for(pe-=H;Q[p++]=S[P++],--H;);if(P=0,y<pe){for(pe-=H=y;Q[p++]=S[P++],--H;);P=p-_e,j=Q}}}else if(P+=y-H,H<pe){for(pe-=H;Q[p++]=S[P++],--H;);P=p-_e,j=Q}for(;2<pe;)Q[p++]=j[P++],Q[p++]=j[P++],Q[p++]=j[P++],pe-=3;pe&&(Q[p++]=j[P++],1<pe&&(Q[p++]=j[P++]))}else{for(P=p-_e;Q[p++]=Q[P++],Q[p++]=Q[P++],Q[p++]=Q[P++],2<(pe-=3););pe&&(Q[p++]=Q[P++],1<pe&&(Q[p++]=Q[P++]))}break}}break}}while(u<f&&p<w);u-=pe=T>>3,x&=(1<<(T-=pe<<3))-1,s.next_in=u,s.next_out=p,s.avail_in=u<f?f-u+5:5-(u-f),s.avail_out=p<w?w-p+257:257-(p-w),h.hold=x,h.bits=T}},{}],49:[function(r,o,a){"use strict";var s=r("../utils/common"),c=r("./adler32"),h=r("./crc32"),u=r("./inffast"),f=r("./inftrees"),p=1,b=2,w=0,m=-2,v=1,E=852,y=592;function S(P){return(P>>>24&255)+(P>>>8&65280)+((65280&P)<<8)+((255&P)<<24)}function x(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new s.Buf16(320),this.work=new s.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function T(P){var j;return P&&P.state?(j=P.state,P.total_in=P.total_out=j.total=0,P.msg="",j.wrap&&(P.adler=1&j.wrap),j.mode=v,j.last=0,j.havedict=0,j.dmax=32768,j.head=null,j.hold=0,j.bits=0,j.lencode=j.lendyn=new s.Buf32(E),j.distcode=j.distdyn=new s.Buf32(y),j.sane=1,j.back=-1,w):m}function L(P){var j;return P&&P.state?((j=P.state).wsize=0,j.whave=0,j.wnext=0,T(P)):m}function z(P,j){var A,Q;return P&&P.state?(Q=P.state,j<0?(A=0,j=-j):(A=1+(j>>4),j<48&&(j&=15)),j&&(j<8||15<j)?m:(Q.window!==null&&Q.wbits!==j&&(Q.window=null),Q.wrap=A,Q.wbits=j,L(P))):m}function q(P,j){var A,Q;return P?(Q=new x,(P.state=Q).window=null,(A=z(P,j))!==w&&(P.state=null),A):m}var W,oe,H=!0;function pe(P){if(H){var j;for(W=new s.Buf32(512),oe=new s.Buf32(32),j=0;j<144;)P.lens[j++]=8;for(;j<256;)P.lens[j++]=9;for(;j<280;)P.lens[j++]=7;for(;j<288;)P.lens[j++]=8;for(f(p,P.lens,0,288,W,0,P.work,{bits:9}),j=0;j<32;)P.lens[j++]=5;f(b,P.lens,0,32,oe,0,P.work,{bits:5}),H=!1}P.lencode=W,P.lenbits=9,P.distcode=oe,P.distbits=5}function _e(P,j,A,Q){var Ie,ae=P.state;return ae.window===null&&(ae.wsize=1<<ae.wbits,ae.wnext=0,ae.whave=0,ae.window=new s.Buf8(ae.wsize)),Q>=ae.wsize?(s.arraySet(ae.window,j,A-ae.wsize,ae.wsize,0),ae.wnext=0,ae.whave=ae.wsize):(Q<(Ie=ae.wsize-ae.wnext)&&(Ie=Q),s.arraySet(ae.window,j,A-Q,Ie,ae.wnext),(Q-=Ie)?(s.arraySet(ae.window,j,A-Q,Q,0),ae.wnext=Q,ae.whave=ae.wsize):(ae.wnext+=Ie,ae.wnext===ae.wsize&&(ae.wnext=0),ae.whave<ae.wsize&&(ae.whave+=Ie))),0}a.inflateReset=L,a.inflateReset2=z,a.inflateResetKeep=T,a.inflateInit=function(P){return q(P,15)},a.inflateInit2=q,a.inflate=function(P,j){var A,Q,Ie,ae,xe,se,Ae,G,U,Se,ge,he,Ye,Et,Ne,Ge,At,it,Gt,Yt,_,ee,Z,O,C=0,D=new s.Buf8(4),ie=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!P||!P.state||!P.output||!P.input&&P.avail_in!==0)return m;(A=P.state).mode===12&&(A.mode=13),xe=P.next_out,Ie=P.output,Ae=P.avail_out,ae=P.next_in,Q=P.input,se=P.avail_in,G=A.hold,U=A.bits,Se=se,ge=Ae,ee=w;e:for(;;)switch(A.mode){case v:if(A.wrap===0){A.mode=13;break}for(;U<16;){if(se===0)break e;se--,G+=Q[ae++]<<U,U+=8}if(2&A.wrap&&G===35615){D[A.check=0]=255&G,D[1]=G>>>8&255,A.check=h(A.check,D,2,0),U=G=0,A.mode=2;break}if(A.flags=0,A.head&&(A.head.done=!1),!(1&A.wrap)||(((255&G)<<8)+(G>>8))%31){P.msg="incorrect header check",A.mode=30;break}if((15&G)!=8){P.msg="unknown compression method",A.mode=30;break}if(U-=4,_=8+(15&(G>>>=4)),A.wbits===0)A.wbits=_;else if(_>A.wbits){P.msg="invalid window size",A.mode=30;break}A.dmax=1<<_,P.adler=A.check=1,A.mode=512&G?10:12,U=G=0;break;case 2:for(;U<16;){if(se===0)break e;se--,G+=Q[ae++]<<U,U+=8}if(A.flags=G,(255&A.flags)!=8){P.msg="unknown compression method",A.mode=30;break}if(57344&A.flags){P.msg="unknown header flags set",A.mode=30;break}A.head&&(A.head.text=G>>8&1),512&A.flags&&(D[0]=255&G,D[1]=G>>>8&255,A.check=h(A.check,D,2,0)),U=G=0,A.mode=3;case 3:for(;U<32;){if(se===0)break e;se--,G+=Q[ae++]<<U,U+=8}A.head&&(A.head.time=G),512&A.flags&&(D[0]=255&G,D[1]=G>>>8&255,D[2]=G>>>16&255,D[3]=G>>>24&255,A.check=h(A.check,D,4,0)),U=G=0,A.mode=4;case 4:for(;U<16;){if(se===0)break e;se--,G+=Q[ae++]<<U,U+=8}A.head&&(A.head.xflags=255&G,A.head.os=G>>8),512&A.flags&&(D[0]=255&G,D[1]=G>>>8&255,A.check=h(A.check,D,2,0)),U=G=0,A.mode=5;case 5:if(1024&A.flags){for(;U<16;){if(se===0)break e;se--,G+=Q[ae++]<<U,U+=8}A.length=G,A.head&&(A.head.extra_len=G),512&A.flags&&(D[0]=255&G,D[1]=G>>>8&255,A.check=h(A.check,D,2,0)),U=G=0}else A.head&&(A.head.extra=null);A.mode=6;case 6:if(1024&A.flags&&(se<(he=A.length)&&(he=se),he&&(A.head&&(_=A.head.extra_len-A.length,A.head.extra||(A.head.extra=new Array(A.head.extra_len)),s.arraySet(A.head.extra,Q,ae,he,_)),512&A.flags&&(A.check=h(A.check,Q,he,ae)),se-=he,ae+=he,A.length-=he),A.length))break e;A.length=0,A.mode=7;case 7:if(2048&A.flags){if(se===0)break e;for(he=0;_=Q[ae+he++],A.head&&_&&A.length<65536&&(A.head.name+=String.fromCharCode(_)),_&&he<se;);if(512&A.flags&&(A.check=h(A.check,Q,he,ae)),se-=he,ae+=he,_)break e}else A.head&&(A.head.name=null);A.length=0,A.mode=8;case 8:if(4096&A.flags){if(se===0)break e;for(he=0;_=Q[ae+he++],A.head&&_&&A.length<65536&&(A.head.comment+=String.fromCharCode(_)),_&&he<se;);if(512&A.flags&&(A.check=h(A.check,Q,he,ae)),se-=he,ae+=he,_)break e}else A.head&&(A.head.comment=null);A.mode=9;case 9:if(512&A.flags){for(;U<16;){if(se===0)break e;se--,G+=Q[ae++]<<U,U+=8}if(G!==(65535&A.check)){P.msg="header crc mismatch",A.mode=30;break}U=G=0}A.head&&(A.head.hcrc=A.flags>>9&1,A.head.done=!0),P.adler=A.check=0,A.mode=12;break;case 10:for(;U<32;){if(se===0)break e;se--,G+=Q[ae++]<<U,U+=8}P.adler=A.check=S(G),U=G=0,A.mode=11;case 11:if(A.havedict===0)return P.next_out=xe,P.avail_out=Ae,P.next_in=ae,P.avail_in=se,A.hold=G,A.bits=U,2;P.adler=A.check=1,A.mode=12;case 12:if(j===5||j===6)break e;case 13:if(A.last){G>>>=7&U,U-=7&U,A.mode=27;break}for(;U<3;){if(se===0)break e;se--,G+=Q[ae++]<<U,U+=8}switch(A.last=1&G,U-=1,3&(G>>>=1)){case 0:A.mode=14;break;case 1:if(pe(A),A.mode=20,j!==6)break;G>>>=2,U-=2;break e;case 2:A.mode=17;break;case 3:P.msg="invalid block type",A.mode=30}G>>>=2,U-=2;break;case 14:for(G>>>=7&U,U-=7&U;U<32;){if(se===0)break e;se--,G+=Q[ae++]<<U,U+=8}if((65535&G)!=(G>>>16^65535)){P.msg="invalid stored block lengths",A.mode=30;break}if(A.length=65535&G,U=G=0,A.mode=15,j===6)break e;case 15:A.mode=16;case 16:if(he=A.length){if(se<he&&(he=se),Ae<he&&(he=Ae),he===0)break e;s.arraySet(Ie,Q,ae,he,xe),se-=he,ae+=he,Ae-=he,xe+=he,A.length-=he;break}A.mode=12;break;case 17:for(;U<14;){if(se===0)break e;se--,G+=Q[ae++]<<U,U+=8}if(A.nlen=257+(31&G),G>>>=5,U-=5,A.ndist=1+(31&G),G>>>=5,U-=5,A.ncode=4+(15&G),G>>>=4,U-=4,286<A.nlen||30<A.ndist){P.msg="too many length or distance symbols",A.mode=30;break}A.have=0,A.mode=18;case 18:for(;A.have<A.ncode;){for(;U<3;){if(se===0)break e;se--,G+=Q[ae++]<<U,U+=8}A.lens[ie[A.have++]]=7&G,G>>>=3,U-=3}for(;A.have<19;)A.lens[ie[A.have++]]=0;if(A.lencode=A.lendyn,A.lenbits=7,Z={bits:A.lenbits},ee=f(0,A.lens,0,19,A.lencode,0,A.work,Z),A.lenbits=Z.bits,ee){P.msg="invalid code lengths set",A.mode=30;break}A.have=0,A.mode=19;case 19:for(;A.have<A.nlen+A.ndist;){for(;Ge=(C=A.lencode[G&(1<<A.lenbits)-1])>>>16&255,At=65535&C,!((Ne=C>>>24)<=U);){if(se===0)break e;se--,G+=Q[ae++]<<U,U+=8}if(At<16)G>>>=Ne,U-=Ne,A.lens[A.have++]=At;else{if(At===16){for(O=Ne+2;U<O;){if(se===0)break e;se--,G+=Q[ae++]<<U,U+=8}if(G>>>=Ne,U-=Ne,A.have===0){P.msg="invalid bit length repeat",A.mode=30;break}_=A.lens[A.have-1],he=3+(3&G),G>>>=2,U-=2}else if(At===17){for(O=Ne+3;U<O;){if(se===0)break e;se--,G+=Q[ae++]<<U,U+=8}U-=Ne,_=0,he=3+(7&(G>>>=Ne)),G>>>=3,U-=3}else{for(O=Ne+7;U<O;){if(se===0)break e;se--,G+=Q[ae++]<<U,U+=8}U-=Ne,_=0,he=11+(127&(G>>>=Ne)),G>>>=7,U-=7}if(A.have+he>A.nlen+A.ndist){P.msg="invalid bit length repeat",A.mode=30;break}for(;he--;)A.lens[A.have++]=_}}if(A.mode===30)break;if(A.lens[256]===0){P.msg="invalid code -- missing end-of-block",A.mode=30;break}if(A.lenbits=9,Z={bits:A.lenbits},ee=f(p,A.lens,0,A.nlen,A.lencode,0,A.work,Z),A.lenbits=Z.bits,ee){P.msg="invalid literal/lengths set",A.mode=30;break}if(A.distbits=6,A.distcode=A.distdyn,Z={bits:A.distbits},ee=f(b,A.lens,A.nlen,A.ndist,A.distcode,0,A.work,Z),A.distbits=Z.bits,ee){P.msg="invalid distances set",A.mode=30;break}if(A.mode=20,j===6)break e;case 20:A.mode=21;case 21:if(6<=se&&258<=Ae){P.next_out=xe,P.avail_out=Ae,P.next_in=ae,P.avail_in=se,A.hold=G,A.bits=U,u(P,ge),xe=P.next_out,Ie=P.output,Ae=P.avail_out,ae=P.next_in,Q=P.input,se=P.avail_in,G=A.hold,U=A.bits,A.mode===12&&(A.back=-1);break}for(A.back=0;Ge=(C=A.lencode[G&(1<<A.lenbits)-1])>>>16&255,At=65535&C,!((Ne=C>>>24)<=U);){if(se===0)break e;se--,G+=Q[ae++]<<U,U+=8}if(Ge&&(240&Ge)==0){for(it=Ne,Gt=Ge,Yt=At;Ge=(C=A.lencode[Yt+((G&(1<<it+Gt)-1)>>it)])>>>16&255,At=65535&C,!(it+(Ne=C>>>24)<=U);){if(se===0)break e;se--,G+=Q[ae++]<<U,U+=8}G>>>=it,U-=it,A.back+=it}if(G>>>=Ne,U-=Ne,A.back+=Ne,A.length=At,Ge===0){A.mode=26;break}if(32&Ge){A.back=-1,A.mode=12;break}if(64&Ge){P.msg="invalid literal/length code",A.mode=30;break}A.extra=15&Ge,A.mode=22;case 22:if(A.extra){for(O=A.extra;U<O;){if(se===0)break e;se--,G+=Q[ae++]<<U,U+=8}A.length+=G&(1<<A.extra)-1,G>>>=A.extra,U-=A.extra,A.back+=A.extra}A.was=A.length,A.mode=23;case 23:for(;Ge=(C=A.distcode[G&(1<<A.distbits)-1])>>>16&255,At=65535&C,!((Ne=C>>>24)<=U);){if(se===0)break e;se--,G+=Q[ae++]<<U,U+=8}if((240&Ge)==0){for(it=Ne,Gt=Ge,Yt=At;Ge=(C=A.distcode[Yt+((G&(1<<it+Gt)-1)>>it)])>>>16&255,At=65535&C,!(it+(Ne=C>>>24)<=U);){if(se===0)break e;se--,G+=Q[ae++]<<U,U+=8}G>>>=it,U-=it,A.back+=it}if(G>>>=Ne,U-=Ne,A.back+=Ne,64&Ge){P.msg="invalid distance code",A.mode=30;break}A.offset=At,A.extra=15&Ge,A.mode=24;case 24:if(A.extra){for(O=A.extra;U<O;){if(se===0)break e;se--,G+=Q[ae++]<<U,U+=8}A.offset+=G&(1<<A.extra)-1,G>>>=A.extra,U-=A.extra,A.back+=A.extra}if(A.offset>A.dmax){P.msg="invalid distance too far back",A.mode=30;break}A.mode=25;case 25:if(Ae===0)break e;if(he=ge-Ae,A.offset>he){if((he=A.offset-he)>A.whave&&A.sane){P.msg="invalid distance too far back",A.mode=30;break}Ye=he>A.wnext?(he-=A.wnext,A.wsize-he):A.wnext-he,he>A.length&&(he=A.length),Et=A.window}else Et=Ie,Ye=xe-A.offset,he=A.length;for(Ae<he&&(he=Ae),Ae-=he,A.length-=he;Ie[xe++]=Et[Ye++],--he;);A.length===0&&(A.mode=21);break;case 26:if(Ae===0)break e;Ie[xe++]=A.length,Ae--,A.mode=21;break;case 27:if(A.wrap){for(;U<32;){if(se===0)break e;se--,G|=Q[ae++]<<U,U+=8}if(ge-=Ae,P.total_out+=ge,A.total+=ge,ge&&(P.adler=A.check=A.flags?h(A.check,Ie,ge,xe-ge):c(A.check,Ie,ge,xe-ge)),ge=Ae,(A.flags?G:S(G))!==A.check){P.msg="incorrect data check",A.mode=30;break}U=G=0}A.mode=28;case 28:if(A.wrap&&A.flags){for(;U<32;){if(se===0)break e;se--,G+=Q[ae++]<<U,U+=8}if(G!==(4294967295&A.total)){P.msg="incorrect length check",A.mode=30;break}U=G=0}A.mode=29;case 29:ee=1;break e;case 30:ee=-3;break e;case 31:return-4;default:return m}return P.next_out=xe,P.avail_out=Ae,P.next_in=ae,P.avail_in=se,A.hold=G,A.bits=U,(A.wsize||ge!==P.avail_out&&A.mode<30&&(A.mode<27||j!==4))&&_e(P,P.output,P.next_out,ge-P.avail_out)?(A.mode=31,-4):(Se-=P.avail_in,ge-=P.avail_out,P.total_in+=Se,P.total_out+=ge,A.total+=ge,A.wrap&&ge&&(P.adler=A.check=A.flags?h(A.check,Ie,ge,P.next_out-ge):c(A.check,Ie,ge,P.next_out-ge)),P.data_type=A.bits+(A.last?64:0)+(A.mode===12?128:0)+(A.mode===20||A.mode===15?256:0),(Se==0&&ge===0||j===4)&&ee===w&&(ee=-5),ee)},a.inflateEnd=function(P){if(!P||!P.state)return m;var j=P.state;return j.window&&(j.window=null),P.state=null,w},a.inflateGetHeader=function(P,j){var A;return P&&P.state?(2&(A=P.state).wrap)==0?m:((A.head=j).done=!1,w):m},a.inflateSetDictionary=function(P,j){var A,Q=j.length;return P&&P.state?(A=P.state).wrap!==0&&A.mode!==11?m:A.mode===11&&c(1,j,Q,0)!==A.check?-3:_e(P,j,Q,Q)?(A.mode=31,-4):(A.havedict=1,w):m},a.inflateInfo="pako inflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./inffast":48,"./inftrees":50}],50:[function(r,o,a){"use strict";var s=r("../utils/common"),c=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],h=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],u=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],f=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];o.exports=function(p,b,w,m,v,E,y,S){var x,T,L,z,q,W,oe,H,pe,_e=S.bits,P=0,j=0,A=0,Q=0,Ie=0,ae=0,xe=0,se=0,Ae=0,G=0,U=null,Se=0,ge=new s.Buf16(16),he=new s.Buf16(16),Ye=null,Et=0;for(P=0;P<=15;P++)ge[P]=0;for(j=0;j<m;j++)ge[b[w+j]]++;for(Ie=_e,Q=15;1<=Q&&ge[Q]===0;Q--);if(Q<Ie&&(Ie=Q),Q===0)return v[E++]=20971520,v[E++]=20971520,S.bits=1,0;for(A=1;A<Q&&ge[A]===0;A++);for(Ie<A&&(Ie=A),P=se=1;P<=15;P++)if(se<<=1,(se-=ge[P])<0)return-1;if(0<se&&(p===0||Q!==1))return-1;for(he[1]=0,P=1;P<15;P++)he[P+1]=he[P]+ge[P];for(j=0;j<m;j++)b[w+j]!==0&&(y[he[b[w+j]]++]=j);if(W=p===0?(U=Ye=y,19):p===1?(U=c,Se-=257,Ye=h,Et-=257,256):(U=u,Ye=f,-1),P=A,q=E,xe=j=G=0,L=-1,z=(Ae=1<<(ae=Ie))-1,p===1&&852<Ae||p===2&&592<Ae)return 1;for(;;){for(oe=P-xe,pe=y[j]<W?(H=0,y[j]):y[j]>W?(H=Ye[Et+y[j]],U[Se+y[j]]):(H=96,0),x=1<<P-xe,A=T=1<<ae;v[q+(G>>xe)+(T-=x)]=oe<<24|H<<16|pe|0,T!==0;);for(x=1<<P-1;G&x;)x>>=1;if(x!==0?(G&=x-1,G+=x):G=0,j++,--ge[P]==0){if(P===Q)break;P=b[w+y[j]]}if(Ie<P&&(G&z)!==L){for(xe===0&&(xe=Ie),q+=A,se=1<<(ae=P-xe);ae+xe<Q&&!((se-=ge[ae+xe])<=0);)ae++,se<<=1;if(Ae+=1<<ae,p===1&&852<Ae||p===2&&592<Ae)return 1;v[L=G&z]=Ie<<24|ae<<16|q-E|0}}return G!==0&&(v[q+G]=P-xe<<24|4194304),S.bits=Ie,0}},{"../utils/common":41}],51:[function(r,o,a){"use strict";o.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},{}],52:[function(r,o,a){"use strict";var s=r("../utils/common"),c=0,h=1;function u(C){for(var D=C.length;0<=--D;)C[D]=0}var f=0,p=29,b=256,w=b+1+p,m=30,v=19,E=2*w+1,y=15,S=16,x=7,T=256,L=16,z=17,q=18,W=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],oe=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],H=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],pe=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],_e=new Array(2*(w+2));u(_e);var P=new Array(2*m);u(P);var j=new Array(512);u(j);var A=new Array(256);u(A);var Q=new Array(p);u(Q);var Ie,ae,xe,se=new Array(m);function Ae(C,D,ie,re,F){this.static_tree=C,this.extra_bits=D,this.extra_base=ie,this.elems=re,this.max_length=F,this.has_stree=C&&C.length}function G(C,D){this.dyn_tree=C,this.max_code=0,this.stat_desc=D}function U(C){return C<256?j[C]:j[256+(C>>>7)]}function Se(C,D){C.pending_buf[C.pending++]=255&D,C.pending_buf[C.pending++]=D>>>8&255}function ge(C,D,ie){C.bi_valid>S-ie?(C.bi_buf|=D<<C.bi_valid&65535,Se(C,C.bi_buf),C.bi_buf=D>>S-C.bi_valid,C.bi_valid+=ie-S):(C.bi_buf|=D<<C.bi_valid&65535,C.bi_valid+=ie)}function he(C,D,ie){ge(C,ie[2*D],ie[2*D+1])}function Ye(C,D){for(var ie=0;ie|=1&C,C>>>=1,ie<<=1,0<--D;);return ie>>>1}function Et(C,D,ie){var re,F,ue=new Array(y+1),be=0;for(re=1;re<=y;re++)ue[re]=be=be+ie[re-1]<<1;for(F=0;F<=D;F++){var de=C[2*F+1];de!==0&&(C[2*F]=Ye(ue[de]++,de))}}function Ne(C){var D;for(D=0;D<w;D++)C.dyn_ltree[2*D]=0;for(D=0;D<m;D++)C.dyn_dtree[2*D]=0;for(D=0;D<v;D++)C.bl_tree[2*D]=0;C.dyn_ltree[2*T]=1,C.opt_len=C.static_len=0,C.last_lit=C.matches=0}function Ge(C){8<C.bi_valid?Se(C,C.bi_buf):0<C.bi_valid&&(C.pending_buf[C.pending++]=C.bi_buf),C.bi_buf=0,C.bi_valid=0}function At(C,D,ie,re){var F=2*D,ue=2*ie;return C[F]<C[ue]||C[F]===C[ue]&&re[D]<=re[ie]}function it(C,D,ie){for(var re=C.heap[ie],F=ie<<1;F<=C.heap_len&&(F<C.heap_len&&At(D,C.heap[F+1],C.heap[F],C.depth)&&F++,!At(D,re,C.heap[F],C.depth));)C.heap[ie]=C.heap[F],ie=F,F<<=1;C.heap[ie]=re}function Gt(C,D,ie){var re,F,ue,be,de=0;if(C.last_lit!==0)for(;re=C.pending_buf[C.d_buf+2*de]<<8|C.pending_buf[C.d_buf+2*de+1],F=C.pending_buf[C.l_buf+de],de++,re===0?he(C,F,D):(he(C,(ue=A[F])+b+1,D),(be=W[ue])!==0&&ge(C,F-=Q[ue],be),he(C,ue=U(--re),ie),(be=oe[ue])!==0&&ge(C,re-=se[ue],be)),de<C.last_lit;);he(C,T,D)}function Yt(C,D){var ie,re,F,ue=D.dyn_tree,be=D.stat_desc.static_tree,de=D.stat_desc.has_stree,Me=D.stat_desc.elems,qe=-1;for(C.heap_len=0,C.heap_max=E,ie=0;ie<Me;ie++)ue[2*ie]!==0?(C.heap[++C.heap_len]=qe=ie,C.depth[ie]=0):ue[2*ie+1]=0;for(;C.heap_len<2;)ue[2*(F=C.heap[++C.heap_len]=qe<2?++qe:0)]=1,C.depth[F]=0,C.opt_len--,de&&(C.static_len-=be[2*F+1]);for(D.max_code=qe,ie=C.heap_len>>1;1<=ie;ie--)it(C,ue,ie);for(F=Me;ie=C.heap[1],C.heap[1]=C.heap[C.heap_len--],it(C,ue,1),re=C.heap[1],C.heap[--C.heap_max]=ie,C.heap[--C.heap_max]=re,ue[2*F]=ue[2*ie]+ue[2*re],C.depth[F]=(C.depth[ie]>=C.depth[re]?C.depth[ie]:C.depth[re])+1,ue[2*ie+1]=ue[2*re+1]=F,C.heap[1]=F++,it(C,ue,1),2<=C.heap_len;);C.heap[--C.heap_max]=C.heap[1],(function(Fe,Dt){var Yn,Xt,Xn,st,br,Vr,un=Dt.dyn_tree,Ai=Dt.max_code,Bl=Dt.stat_desc.static_tree,Fl=Dt.stat_desc.has_stree,Hl=Dt.stat_desc.extra_bits,yo=Dt.stat_desc.extra_base,wr=Dt.stat_desc.max_length,Si=0;for(st=0;st<=y;st++)Fe.bl_count[st]=0;for(un[2*Fe.heap[Fe.heap_max]+1]=0,Yn=Fe.heap_max+1;Yn<E;Yn++)wr<(st=un[2*un[2*(Xt=Fe.heap[Yn])+1]+1]+1)&&(st=wr,Si++),un[2*Xt+1]=st,Ai<Xt||(Fe.bl_count[st]++,br=0,yo<=Xt&&(br=Hl[Xt-yo]),Vr=un[2*Xt],Fe.opt_len+=Vr*(st+br),Fl&&(Fe.static_len+=Vr*(Bl[2*Xt+1]+br)));if(Si!==0){do{for(st=wr-1;Fe.bl_count[st]===0;)st--;Fe.bl_count[st]--,Fe.bl_count[st+1]+=2,Fe.bl_count[wr]--,Si-=2}while(0<Si);for(st=wr;st!==0;st--)for(Xt=Fe.bl_count[st];Xt!==0;)Ai<(Xn=Fe.heap[--Yn])||(un[2*Xn+1]!==st&&(Fe.opt_len+=(st-un[2*Xn+1])*un[2*Xn],un[2*Xn+1]=st),Xt--)}})(C,D),Et(ue,qe,C.bl_count)}function _(C,D,ie){var re,F,ue=-1,be=D[1],de=0,Me=7,qe=4;for(be===0&&(Me=138,qe=3),D[2*(ie+1)+1]=65535,re=0;re<=ie;re++)F=be,be=D[2*(re+1)+1],++de<Me&&F===be||(de<qe?C.bl_tree[2*F]+=de:F!==0?(F!==ue&&C.bl_tree[2*F]++,C.bl_tree[2*L]++):de<=10?C.bl_tree[2*z]++:C.bl_tree[2*q]++,ue=F,qe=(de=0)===be?(Me=138,3):F===be?(Me=6,3):(Me=7,4))}function ee(C,D,ie){var re,F,ue=-1,be=D[1],de=0,Me=7,qe=4;for(be===0&&(Me=138,qe=3),re=0;re<=ie;re++)if(F=be,be=D[2*(re+1)+1],!(++de<Me&&F===be)){if(de<qe)for(;he(C,F,C.bl_tree),--de!=0;);else F!==0?(F!==ue&&(he(C,F,C.bl_tree),de--),he(C,L,C.bl_tree),ge(C,de-3,2)):de<=10?(he(C,z,C.bl_tree),ge(C,de-3,3)):(he(C,q,C.bl_tree),ge(C,de-11,7));ue=F,qe=(de=0)===be?(Me=138,3):F===be?(Me=6,3):(Me=7,4)}}u(se);var Z=!1;function O(C,D,ie,re){ge(C,(f<<1)+(re?1:0),3),(function(F,ue,be,de){Ge(F),de&&(Se(F,be),Se(F,~be)),s.arraySet(F.pending_buf,F.window,ue,be,F.pending),F.pending+=be})(C,D,ie,!0)}a._tr_init=function(C){Z||((function(){var D,ie,re,F,ue,be=new Array(y+1);for(F=re=0;F<p-1;F++)for(Q[F]=re,D=0;D<1<<W[F];D++)A[re++]=F;for(A[re-1]=F,F=ue=0;F<16;F++)for(se[F]=ue,D=0;D<1<<oe[F];D++)j[ue++]=F;for(ue>>=7;F<m;F++)for(se[F]=ue<<7,D=0;D<1<<oe[F]-7;D++)j[256+ue++]=F;for(ie=0;ie<=y;ie++)be[ie]=0;for(D=0;D<=143;)_e[2*D+1]=8,D++,be[8]++;for(;D<=255;)_e[2*D+1]=9,D++,be[9]++;for(;D<=279;)_e[2*D+1]=7,D++,be[7]++;for(;D<=287;)_e[2*D+1]=8,D++,be[8]++;for(Et(_e,w+1,be),D=0;D<m;D++)P[2*D+1]=5,P[2*D]=Ye(D,5);Ie=new Ae(_e,W,b+1,w,y),ae=new Ae(P,oe,0,m,y),xe=new Ae(new Array(0),H,0,v,x)})(),Z=!0),C.l_desc=new G(C.dyn_ltree,Ie),C.d_desc=new G(C.dyn_dtree,ae),C.bl_desc=new G(C.bl_tree,xe),C.bi_buf=0,C.bi_valid=0,Ne(C)},a._tr_stored_block=O,a._tr_flush_block=function(C,D,ie,re){var F,ue,be=0;0<C.level?(C.strm.data_type===2&&(C.strm.data_type=(function(de){var Me,qe=4093624447;for(Me=0;Me<=31;Me++,qe>>>=1)if(1&qe&&de.dyn_ltree[2*Me]!==0)return c;if(de.dyn_ltree[18]!==0||de.dyn_ltree[20]!==0||de.dyn_ltree[26]!==0)return h;for(Me=32;Me<b;Me++)if(de.dyn_ltree[2*Me]!==0)return h;return c})(C)),Yt(C,C.l_desc),Yt(C,C.d_desc),be=(function(de){var Me;for(_(de,de.dyn_ltree,de.l_desc.max_code),_(de,de.dyn_dtree,de.d_desc.max_code),Yt(de,de.bl_desc),Me=v-1;3<=Me&&de.bl_tree[2*pe[Me]+1]===0;Me--);return de.opt_len+=3*(Me+1)+5+5+4,Me})(C),F=C.opt_len+3+7>>>3,(ue=C.static_len+3+7>>>3)<=F&&(F=ue)):F=ue=ie+5,ie+4<=F&&D!==-1?O(C,D,ie,re):C.strategy===4||ue===F?(ge(C,2+(re?1:0),3),Gt(C,_e,P)):(ge(C,4+(re?1:0),3),(function(de,Me,qe,Fe){var Dt;for(ge(de,Me-257,5),ge(de,qe-1,5),ge(de,Fe-4,4),Dt=0;Dt<Fe;Dt++)ge(de,de.bl_tree[2*pe[Dt]+1],3);ee(de,de.dyn_ltree,Me-1),ee(de,de.dyn_dtree,qe-1)})(C,C.l_desc.max_code+1,C.d_desc.max_code+1,be+1),Gt(C,C.dyn_ltree,C.dyn_dtree)),Ne(C),re&&Ge(C)},a._tr_tally=function(C,D,ie){return C.pending_buf[C.d_buf+2*C.last_lit]=D>>>8&255,C.pending_buf[C.d_buf+2*C.last_lit+1]=255&D,C.pending_buf[C.l_buf+C.last_lit]=255&ie,C.last_lit++,D===0?C.dyn_ltree[2*ie]++:(C.matches++,D--,C.dyn_ltree[2*(A[ie]+b+1)]++,C.dyn_dtree[2*U(D)]++),C.last_lit===C.lit_bufsize-1},a._tr_align=function(C){ge(C,2,3),he(C,T,_e),(function(D){D.bi_valid===16?(Se(D,D.bi_buf),D.bi_buf=0,D.bi_valid=0):8<=D.bi_valid&&(D.pending_buf[D.pending++]=255&D.bi_buf,D.bi_buf>>=8,D.bi_valid-=8)})(C)}},{"../utils/common":41}],53:[function(r,o,a){"use strict";o.exports=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}},{}],54:[function(r,o,a){"use strict";o.exports=typeof setImmediate=="function"?setImmediate:function(){var s=[].slice.apply(arguments);s.splice(1,0,0),setTimeout.apply(null,s)}},{}]},{},[10])(10)})})),Pu=Do(tp(),1),$u=(e,...t)=>t.length===0?e[0]:String.raw({raw:e},...t),oi=$u,zu=$u;function Yi(e,t){let r=e.length,o,a,s=!1,c=!1;Array.isArray(e[0])?o=e:(o=[e],r=o.length,s=!0),Array.isArray(t[0])?a=t:(a=t.length>0?t.map(p=>[p]):[[]],c=!0);let h=a[0].length,u=a[0].map((p,b)=>a.map(w=>w[b])),f=o.map(p=>u.map(b=>{let w=0;if(!Array.isArray(p)){for(let m of b)w+=p*m;return w}for(let m=0;m<p.length;m++)w+=p[m]*(b[m]||0);return w}));return r===1&&s&&(f=f[0]),h===1&&c?r===1&&s?f[0]:f.map(p=>p[0]):f}function zs(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]}function pt(e,t,r=[0,0,0]){const o=zs(e,t[0]),a=zs(e,t[1]),s=zs(e,t[2]);return r[0]=o,r[1]=a,r[2]=s,r}function ai(e){return lr(e)==="string"}function lr(e){return(Object.prototype.toString.call(e).match(/^\[object\s+(.*?)\]$/)[1]||"").toLowerCase()}function Ns(e,{precision:t=16,unit:r}){return je(e)?"none":(e=+Ds(e,t),e+(r??""))}function je(e){return e===null}function _t(e){return je(e)?0:e}function Ds(e,t){if(e===0)return 0;let r=~~e,o=0;r&&t&&(o=~~Math.log10(Math.abs(r))+1);const a=10**(t-o);return Math.floor(e*a+.5)/a}function Xi(e,t,r){return isNaN(e)?t:isNaN(t)?e:e+(t-e)*r}function Nu(e,t,r){return(r-e)/(t-e)}function Bs(e,t,r){return!e||!t||e===t||e[0]===t[0]&&e[1]===t[1]||isNaN(r)||r===null?r:Xi(t[0],t[1],Nu(e[0],e[1],r))}function Ko(e,t,r){return Math.max(Math.min(r,t),e)}function Yo(e,t){return Math.sign(e)===Math.sign(t)?e:-e}function yt(e,t){return Yo(Math.abs(e)**t,e)}function Fs(e,t){return t===0?0:e/t}function Du(e,t,r=0,o=e.length){for(;r<o;){const a=r+o>>1;e[a]<t?r=a+1:o=a}return r}function si(e,t){if(e instanceof t)return!0;const r=t.name;for(;e;){const o=Object.getPrototypeOf(e),a=o?.constructor?.name;if(a===r)return!0;if(!a||a==="Object")return!1;e=o}return!1}var np=Object.freeze({__proto__:null,bisectLeft:Du,clamp:Ko,copySign:Yo,interpolate:Xi,interpolateInv:Nu,isInstance:si,isNone:je,isString:ai,mapRange:Bs,multiplyMatrices:Yi,multiply_v3_m3x3:pt,serializeNumber:Ns,skipNone:_t,spow:yt,toPrecision:Ds,type:lr,zdiv:Fs}),rp=class{add(e,t,r){if(typeof arguments[0]!="string"){for(var e in arguments[0])this.add(e,arguments[0][e],arguments[1]);return}(Array.isArray(e)?e:[e]).forEach(function(o){this[o]=this[o]||[],t&&this[o][r?"unshift":"push"](t)},this)}run(e,t){this[e]=this[e]||[],this[e].forEach(function(r){r.call(t&&t.context?t.context:t,t)})}},cr=new rp,rn={gamut_mapping:"css",precision:5,deltaE:"76",verbose:"production".toLowerCase()!=="test",warn:function(t){this.verbose&&globalThis?.console?.warn?.(t)}},Bu=class{type;coordMeta;coordRange;range;constructor(e,t){if(typeof e=="object"&&(this.coordMeta=e),t&&(this.coordMeta=t,this.coordRange=t.range??t.refRange),typeof e=="string"){let r=e.trim().match(/^(?<type><[a-z]+>)(\[(?<min>-?[.\d]+),\s*(?<max>-?[.\d]+)\])?$/);if(!r)throw new TypeError(`Cannot parse ${e} as a type definition.`);this.type=r.groups.type;let{min:o,max:a}=r.groups;(o||a)&&(this.range=[+o,+a])}}get computedRange(){return this.range?this.range:this.type==="<percentage>"?this.percentageRange():this.type==="<angle>"?[0,360]:null}get unit(){return this.type==="<percentage>"?"%":this.type==="<angle>"?"deg":""}resolve(e){if(this.type==="<angle>")return e;let t=this.computedRange,r=this.coordRange;return this.type==="<percentage>"&&(r??=this.percentageRange()),Bs(t,r,e)}serialize(e,t){let r=this.type==="<percentage>"?this.percentageRange(100):this.computedRange,o=this.unit;return e=Bs(this.coordRange,r,e),Ns(e,{unit:o,precision:t})}toString(){let e=this.type;if(this.range){let[t="",r=""]=this.range;e+=`[${t},${r}]`}return e}percentageRange(e=1){let t;return this.coordMeta&&this.coordMeta.range||this.coordRange&&this.coordRange[0]>=0?t=[0,1]:t=[-1,1],[t[0]*e,t[1]*e]}static get(e,t){return si(e,this)?e:new this(e,t)}},Hs=Symbol("instance"),Fu=class Xf{type;name;spaceCoords;coords;id;alpha;constructor(t,r=t.space){t[Hs]=this,this.type="function",this.name="color",Object.assign(this,t),this.space=r,this.type!=="custom"&&(this.spaceCoords=Object.values(r.coords),this.coords||(this.coords=this.spaceCoords.map(o=>{let a=["<number>","<percentage>"];return o.type==="angle"&&a.push("<angle>"),a})),this.coords=this.coords.map((o,a)=>{let s=this.spaceCoords[a];return typeof o=="string"&&(o=o.trim().split(/\s*\|\s*/)),o.map(c=>Bu.get(c,s))}))}serializeCoords(t,r,o){return o=t.map((a,s)=>Bu.get(o?.[s]??this.coords[s][0],this.spaceCoords[s])),t.map((a,s)=>o[s].serialize(a,r))}coerceCoords(t,r){return Object.entries(this.space.coords).map(([o,a],s)=>{let c=t[s];if(je(c)||isNaN(c))return c;let h=r[s],u=this.coords[s].find(f=>f.type==h);if(!u){let f=a.name||o;throw new TypeError(`${h??c?.raw??c} not allowed for ${f} in ${this.name}()`)}return c=u.resolve(c),u.range&&(r[s]=u.toString()),c})}canSerialize(){return this.type==="function"||this.serialize}parse(t){return null}static get(t,...r){return!t||si(t,this)?t:t[Hs]?t[Hs]:new Xf(t,...r)}},Ht={D50:[.3457/.3585,1,.2958/.3585],D65:[.3127/.329,1,.3583/.329]};function Gs(e){return Array.isArray(e)?e:Ht[e]}function Xo(e,t,r,o={}){if(e=Gs(e),t=Gs(t),!e||!t)throw new TypeError(`Missing white point to convert ${e?"":"from"}${!e&&!t?"/":""}${t?"":"to"}`);if(e===t)return r;let a={W1:e,W2:t,XYZ:r,options:o};if(cr.run("chromatic-adaptation-start",a),a.M||(a.W1===Ht.D65&&a.W2===Ht.D50?a.M=[[1.0479297925449969,.022946870601609652,-.05019226628920524],[.02962780877005599,.9904344267538799,-.017073799063418826],[-.009243040646204504,.015055191490298152,.7518742814281371]]:a.W1===Ht.D50&&a.W2===Ht.D65&&(a.M=[[.955473421488075,-.02309845494876471,.06325924320057072],[-.0283697093338637,1.0099953980813041,.021041441191917323],[.012314014864481998,-.020507649298898964,1.330365926242124]])),cr.run("chromatic-adaptation-end",a),a.M)return pt(a.XYZ,a.M);throw new TypeError("Only Bradford CAT with white points D50 and D65 supported for now.")}function Hu(e,t){let r={str:String(e)?.trim(),options:t};if(cr.run("parse-start",r),r.color)return r.color;r.parsed=op(r.str);let o,a=r.options?r.options.parseMeta??r.options.meta:null;if(r.parsed){let s=r.parsed.name,c,h,u=r.parsed.args,f=u.map((w,m)=>r.parsed.argMeta[m]?.type);if(s==="color"){let w=u.shift();f.shift();let m=w.startsWith("--")?w.substring(2):`--${w}`,v=[w,m];if(c=ke.findFormat({name:s,id:v,type:"function"}),!c){let E,y=w in ke.registry?w:m;if(y in ke.registry){let S=ke.registry[y].formats?.color?.id;S&&(E=`Did you mean ${e.replace("color("+w,"color("+S)}?`)}throw new TypeError(`Cannot parse ${r.str}. `+(E??"Missing a plugin?"))}h=c.space,c.id.startsWith("--")&&!w.startsWith("--")&&rn.warn(`${h.name} is a non-standard space and not currently supported in the CSS spec. Use prefixed color(${c.id}) instead of color(${w}).`),w.startsWith("--")&&!c.id.startsWith("--")&&rn.warn(`${h.name} is a standard space and supported in the CSS spec. Use color(${c.id}) instead of prefixed color(${w}).`)}else c=ke.findFormat({name:s,type:"function"}),h=c.space;a&&Object.assign(a,{format:c,formatId:c.name,types:f,commas:r.parsed.commas});let p=1;r.parsed.lastAlpha&&(p=r.parsed.args.pop(),a&&(a.alphaType=f.pop()));let b=c.coords.length;if(u.length!==b)throw new TypeError(`Expected ${b} coordinates for ${h.id} in ${r.str}), got ${u.length}`);u=c.coerceCoords(u,f),o={spaceId:h.id,coords:u,alpha:p}}else e:for(let s of ke.all)for(let c in s.formats){let h=s.formats[c];if(h.type!=="custom"||h.test&&!h.test(r.str))continue;let u=s.getFormat(h),f=u.parse(r.str);if(f){a&&Object.assign(a,{format:u,formatId:c}),o=f;break e}}if(!o)throw new TypeError(`Could not parse ${e} as a color. Missing a plugin?`);return o.alpha=je(o.alpha)?o.alpha:o.alpha===void 0?1:Ko(0,o.alpha,1),o}var Gu={"%":.01,deg:1,grad:.9,rad:180/Math.PI,turn:360},Jo={function:/^([a-z]+)\(((?:calc\(NaN\)|.)+?)\)$/i,number:/^([-+]?(?:[0-9]*\.)?[0-9]+(e[-+]?[0-9]+)?)$/i,unitValue:RegExp(`(${Object.keys(Gu).join("|")})$`),singleArgument:/\/?\s*(none|NaN|calc\(NaN\)|[-+\w.]+(?:%|deg|g?rad|turn)?)/g};function ip(e){let t={},r=e.match(Jo.unitValue)?.[0],o=t.raw=e;return r?(t.type=r==="%"?"<percentage>":"<angle>",t.unit=r,t.unitless=Number(o.slice(0,-r.length)),o=t.unitless*Gu[r]):Jo.number.test(o)?(o=Number(o),t.type="<number>"):o==="none"?o=null:o==="NaN"||o==="calc(NaN)"?(o=NaN,t.type="<number>"):t.type="<ident>",{value:o,meta:t}}function op(e){if(!e)return;e=e.trim();let t=e.match(Jo.function);if(t){let r=[],o=[],a=!1,s=t[1].toLowerCase(),c=t[2].replace(Jo.singleArgument,(h,u)=>{let{value:f,meta:p}=ip(u);return(h.startsWith("/")||s!=="color"&&r.length===3)&&(a=!0),r.push(f),o.push(p),""});return{name:s,args:r,argMeta:o,lastAlpha:a,commas:c.includes(","),rawName:t[1],rawArgs:t[2]}}}function Le(e,t){if(Array.isArray(e))return e.map(o=>Le(o,t));if(!e)throw new TypeError("Empty color reference");ai(e)&&(e=Hu(e,t));let r=e.space||e.spaceId;return typeof r=="string"&&(e.space=ke.get(r)),e.alpha===void 0&&(e.alpha=1),e}var ap=75e-6,ke=class Dn{constructor(t){this.id=t.id,this.name=t.name,this.base=t.base?Dn.get(t.base):null,this.aliases=t.aliases,this.base&&(this.fromBase=t.fromBase,this.toBase=t.toBase);let r=t.coords??this.base.coords;for(let o in r)"name"in r[o]||(r[o].name=o);this.coords=r,this.white=Gs(t.white??this.base.white??"D65"),this.formats=t.formats??{};for(let o in this.formats){let a=this.formats[o];a.type||="function",a.name||=o}this.formats.color?.id||(this.formats.color={...this.formats.color??{},id:t.cssId||this.id}),t.gamutSpace?this.gamutSpace=t.gamutSpace==="self"?this:Dn.get(t.gamutSpace):this.isPolar?this.gamutSpace=this.base:this.gamutSpace=this,this.gamutSpace.isUnbounded&&(this.inGamut=(o,a)=>!0),this.referred=t.referred,Object.defineProperty(this,"path",{value:sp(this).reverse(),writable:!1,enumerable:!0,configurable:!0}),cr.run("colorspace-init-end",this)}inGamut(t,{epsilon:r=ap}={}){if(!this.equals(this.gamutSpace))return t=this.to(this.gamutSpace,t),this.gamutSpace.inGamut(t,{epsilon:r});let o=Object.values(this.coords);return t.every((a,s)=>{let c=o[s];if(c.type!=="angle"&&c.range){if(je(a))return!0;let[h,u]=c.range;return(h===void 0||a>=h-r)&&(u===void 0||a<=u+r)}return!0})}get isUnbounded(){return Object.values(this.coords).every(t=>!("range"in t))}get cssId(){return this.formats?.color?.id||this.id}get isPolar(){for(let t in this.coords)if(this.coords[t].type==="angle")return!0;return!1}getFormat(t){if(!t)return null;t==="default"?t=Object.values(this.formats)[0]:typeof t=="string"&&(t=this.formats[t]);let r=Fu.get(t,this);return r!==t&&t.name in this.formats&&(this.formats[t.name]=r),r}equals(t){return t?this===t||this.id===t||this.id===t.id:!1}to(t,r){if(arguments.length===1){const h=Le(t);[t,r]=[h.space,h.coords]}if(t=Dn.get(t),this.equals(t))return r;r=r.map(h=>je(h)?0:h);let o=this.path,a=t.path,s,c;for(let h=0;h<o.length&&o[h].equals(a[h]);h++)s=o[h],c=h;if(!s)throw new Error(`Cannot convert between color spaces ${this} and ${t}: no connection space was found`);for(let h=o.length-1;h>c;h--)r=o[h].toBase(r);for(let h=c+1;h<a.length;h++)r=a[h].fromBase(r);return r}from(t,r){if(arguments.length===1){const o=Le(t);[t,r]=[o.space,o.coords]}return t=Dn.get(t),t.to(this,r)}toString(){return`${this.name} (${this.id})`}getMinCoords(){let t=[];for(let r in this.coords){let o=this.coords[r],a=o.range||o.refRange;t.push(a?.min??0)}return t}static registry={};static get all(){return[...new Set(Object.values(Dn.registry))]}static register(t,r){if(arguments.length===1&&(r=arguments[0],t=r.id),r=this.get(r),this.registry[t]&&this.registry[t]!==r)throw new Error(`Duplicate color space registration: '${t}'`);if(this.registry[t]=r,arguments.length===1&&r.aliases)for(let o of r.aliases)this.register(o,r);return r}static get(t,...r){if(!t||si(t,this))return t;if(lr(t)==="string"){let o=Dn.registry[t.toLowerCase()];if(!o)throw new TypeError(`No color space found with id = "${t}"`);return o}if(r.length)return Dn.get(...r);throw new TypeError(`${t} is not a valid color space`)}static findFormat(t,r=Dn.all){if(!t)return null;typeof t=="string"&&(t={name:t});for(let o of r)for(let[a,s]of Object.entries(o.formats)){s.name??=a,s.type??="function";let c=(!t.name||s.name===t.name)&&(!t.type||s.type===t.type);if(t.id){let h=s.ids||[s.id],u=Array.isArray(t.id)?t.id:[t.id];c&&=u.some(f=>h.includes(f))}if(c){let h=Fu.get(s,o);return h!==s&&(o.formats[s.name]=h),h}}return null}static resolveCoord(t,r){let o=lr(t),a,s;if(o==="string"?t.includes(".")?[a,s]=t.split("."):[a,s]=[,t]:Array.isArray(t)?[a,s]=t:(a=t.space,s=t.coordId),a=Dn.get(a),a||(a=r),!a)throw new TypeError(`Cannot resolve coordinate reference ${t}: No color space specified and relative references are not allowed here`);if(o=lr(s),o==="number"||o==="string"&&s>=0){let u=Object.entries(a.coords)[s];if(u)return{space:a,id:u[0],index:s,...u[1]}}a=Dn.get(a);let c=s.toLowerCase(),h=0;for(let u in a.coords){let f=a.coords[u];if(u.toLowerCase()===c||f.name?.toLowerCase()===c)return{space:a,id:u,index:h,...f};h++}throw new TypeError(`No "${s}" coordinate found in ${a.name}. Its coordinates are: ${Object.keys(a.coords).join(", ")}`)}static DEFAULT_FORMAT={type:"functions",name:"color"}};function sp(e){let t=[e];for(let r=e;r=r.base;)t.push(r);return t}var Rt=new ke({id:"xyz-d65",name:"XYZ D65",coords:{x:{refRange:[0,1],name:"X"},y:{refRange:[0,1],name:"Y"},z:{refRange:[0,1],name:"Z"}},white:"D65",formats:{color:{ids:["xyz-d65","xyz"]}},aliases:["xyz"]}),Nt=class extends ke{constructor(e){e.coords||(e.coords={r:{range:[0,1],name:"Red"},g:{range:[0,1],name:"Green"},b:{range:[0,1],name:"Blue"}}),e.base||(e.base=Rt),e.toXYZ_M&&e.fromXYZ_M&&(e.toBase??=t=>{let r=pt(t,e.toXYZ_M);return this.white!==this.base.white&&(r=Xo(this.white,this.base.white,r)),r},e.fromBase??=t=>(t=Xo(this.base.white,this.white,t),pt(t,e.fromXYZ_M))),e.referred??="display",super(e)}};function Uu(e,t={}){if(Array.isArray(e))return e.map(u=>Uu(u,t));let{cssProperty:r="background-color",element:o,...a}=t,s=null;try{return Le(e,a)}catch(u){s=u}let{CSS:c,getComputedStyle:h}=globalThis;if(ai(e)&&o&&c&&h&&c.supports(r,e)){let u=o.style[r];e!==u&&(o.style[r]=e);let f=h(o).getPropertyValue(r);if(e!==u&&(o.style[r]=u),f!==e)try{return Le(f,a)}catch(p){s=p}else s={message:"Color value is a valid CSS color, but it could not be resolved :("}}return t.errorMeta&&(t.errorMeta.error=s),null}function Ji(e,t){e=Le(e);let r=ke.get(t,t?.space),o=t?.precision,a;return!r||e.space.equals(r)?a=e.coords.slice():a=r.from(e),o===void 0?a:a.map(s=>Ds(s,o))}function on(e,t){if(e=Le(e),t==="alpha")return e.alpha??1;let{space:r,index:o}=ke.resolveCoord(t,e.space);return Ji(e,r)[o]}function Us(e,t,r,o){return e=Le(e),Array.isArray(t)&&([t,r,o]=[e.space,t,r]),t=ke.get(t),e.coords=t===e.space?r.slice():t.to(e.space,r),o!==void 0&&(e.alpha=o),e}Us.returns="color";function qn(e,t,r){if(e=Le(e),arguments.length===2&&lr(arguments[1])==="object"){let o=arguments[1];for(let a in o)qn(e,a,o[a])}else if(typeof r=="function"&&(r=r(on(e,t))),t==="alpha")e.alpha=r;else{let{space:o,index:a}=ke.resolveCoord(t,e.space),s=Ji(e,o);s[a]=r,Us(e,o,s)}return e}qn.returns="color";var Ws=new ke({id:"xyz-d50",name:"XYZ D50",white:"D50",base:Rt,fromBase:e=>Xo(Rt.white,"D50",e),toBase:e=>Xo("D50",Rt.white,e)}),lp=216/24389,Wu=24/116,Qo=24389/27,Vs=Ht.D50,an=new ke({id:"lab",name:"Lab",coords:{l:{refRange:[0,100],name:"Lightness"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:Vs,base:Ws,fromBase(e){let t=e.map((r,o)=>r/Vs[o]).map(r=>r>lp?Math.cbrt(r):(Qo*r+16)/116);return[116*t[1]-16,500*(t[0]-t[1]),200*(t[1]-t[2])]},toBase(e){let[t,r,o]=e,a=[];return a[1]=(t+16)/116,a[0]=r/500+a[1],a[2]=a[1]-o/200,[a[0]>Wu?Math.pow(a[0],3):(116*a[0]-16)/Qo,e[0]>8?Math.pow((e[0]+16)/116,3):e[0]/Qo,a[2]>Wu?Math.pow(a[2],3):(116*a[2]-16)/Qo].map((s,c)=>s*Vs[c])},formats:{lab:{coords:["<percentage> | <number>","<number> | <percentage>","<number> | <percentage>"]}}});function bn(e){return typeof e!="number"?e:(e%360+360)%360}function Vu(e,t){let[r,o]=t,a=je(r),s=je(o);if(a&&s)return[r,o];if(a?r=o:s&&(o=r),e==="raw")return t;r=bn(r),o=bn(o);let c=o-r;return e==="increasing"?c<0&&(o+=360):e==="decreasing"?c>0&&(r+=360):e==="longer"?-180<c&&c<180&&(c>0?r+=360:o+=360):e==="shorter"&&(c>180?r+=360:c<-180&&(o+=360)),[r,o]}var sn=new ke({id:"lch",name:"LCH",coords:{l:{refRange:[0,100],name:"Lightness"},c:{refRange:[0,150],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:an,fromBase(e){if(this.ε===void 0){let c=Object.values(this.base.coords)[1].refRange;this.ε=(c[1]-c[0])/1e5}let[t,r,o]=e,a=Math.abs(r)<this.ε&&Math.abs(o)<this.ε,s=a?null:bn(Math.atan2(o,r)*180/Math.PI);return[t,a?0:Math.sqrt(r**2+o**2),s]},toBase(e){let[t,r,o]=e,a=null,s=null;return je(o)||(r=r<0?0:r,a=r*Math.cos(o*Math.PI/180),s=r*Math.sin(o*Math.PI/180)),[t,a,s]},formats:{lch:{coords:["<percentage> | <number>","<number> | <percentage>","<number> | <angle>"]}}}),Zu=25**7,ea=Math.PI,qu=180/ea,li=ea/180;function ju(e){const t=e*e;return t*t*t*e}function Ku(e,t,{kL:r=1,kC:o=1,kH:a=1}={}){[e,t]=Le([e,t]);let[s,c,h]=an.from(e),u=sn.from(an,[s,c,h])[1],[f,p,b]=an.from(t),w=sn.from(an,[f,p,b])[1];u<0&&(u=0),w<0&&(w=0);let m=ju((u+w)/2),v=.5*(1-Math.sqrt(m/(m+Zu))),E=(1+v)*c,y=(1+v)*p,S=Math.sqrt(E**2+h**2),x=Math.sqrt(y**2+b**2),T=E===0&&h===0?0:Math.atan2(h,E),L=y===0&&b===0?0:Math.atan2(b,y);T<0&&(T+=2*ea),L<0&&(L+=2*ea),T*=qu,L*=qu;let z=f-s,q=x-S,W=L-T,oe=T+L,H=Math.abs(W),pe;S*x===0?pe=0:H<=180?pe=W:W>180?pe=W-360:W<-180?pe=W+360:rn.warn("the unthinkable has happened");let _e=2*Math.sqrt(x*S)*Math.sin(pe*li/2),P=(s+f)/2,j=(S+x)/2,A=ju(j),Q;S*x===0?Q=oe:H<=180?Q=oe/2:oe<360?Q=(oe+360)/2:Q=(oe-360)/2;let Ie=(P-50)**2,ae=1+.015*Ie/Math.sqrt(20+Ie),xe=1+.045*j,se=1;se-=.17*Math.cos((Q-30)*li),se+=.24*Math.cos(2*Q*li),se+=.32*Math.cos((3*Q+6)*li),se-=.2*Math.cos((4*Q-63)*li);let Ae=1+.015*j*se,G=30*Math.exp(-1*((Q-275)/25)**2),U=2*Math.sqrt(A/(A+Zu)),Se=-1*Math.sin(2*G*li)*U,ge=(z/(r*ae))**2;return ge+=(q/(o*xe))**2,ge+=(_e/(a*Ae))**2,ge+=Se*(q/(o*xe))*(_e/(a*Ae)),Math.sqrt(ge)}var cp=[[.819022437996703,.3619062600528904,-.1288737815209879],[.0329836539323885,.9292868615863434,.0361446663506424],[.0481771893596242,.2642395317527308,.6335478284694309]],up=[[1.2268798758459243,-.5578149944602171,.2813910456659647],[-.0405757452148008,1.112286803280317,-.0717110580655164],[-.0763729366746601,-.4214933324022432,1.5869240198367816]],dp=[[.210454268309314,.7936177747023054,-.0040720430116193],[1.9779985324311684,-2.42859224204858,.450593709617411],[.0259040424655478,.7827717124575296,-.8086757549230774]],ur=[[1,.3963377773761749,.2158037573099136],[1,-.1055613458156586,-.0638541728258133],[1,-.0894841775298119,-1.2914855480194092]],Ln=new ke({id:"oklab",name:"Oklab",coords:{l:{refRange:[0,1],name:"Lightness"},a:{refRange:[-.4,.4]},b:{refRange:[-.4,.4]}},white:"D65",base:Rt,fromBase(e){let t=pt(e,cp);return t[0]=Math.cbrt(t[0]),t[1]=Math.cbrt(t[1]),t[2]=Math.cbrt(t[2]),pt(t,dp,t)},toBase(e){let t=pt(e,ur);return t[0]=t[0]**3,t[1]=t[1]**3,t[2]=t[2]**3,pt(t,up,t)},formats:{oklab:{coords:["<percentage> | <number>","<number> | <percentage>","<number> | <percentage>"]}}});function Zs(e,t){[e,t]=Le([e,t]);let[r,o,a]=Ln.from(e),[s,c,h]=Ln.from(t),u=r-s,f=o-c,p=a-h;return Math.sqrt(u**2+f**2+p**2)}var hp=75e-6;function Nr(e,t,{epsilon:r=hp}={}){e=Le(e),t||(t=e.space),t=ke.get(t);let o=e.coords;return t!==e.space&&(o=t.from(e)),t.inGamut(o,{epsilon:r})}function ci(e){return{space:e.space,coords:e.coords.slice(),alpha:e.alpha}}function Yu(e,t,r="lab"){r=ke.get(r);let o=r.from(e),a=r.from(t);return Math.sqrt(o.reduce((s,c,h)=>{let u=a[h];return je(c)||je(u)?s:s+(u-c)**2},0))}function fp(e,t){return Yu(e,t,"lab")}var Xu=Math.PI/180;function pp(e,t,{l:r=2,c:o=1}={}){[e,t]=Le([e,t]);let[a,s,c]=an.from(e),[,h,u]=sn.from(an,[a,s,c]),[f,p,b]=an.from(t),w=sn.from(an,[f,p,b])[1];h<0&&(h=0),w<0&&(w=0);let m=a-f,v=h-w,E=s-p,y=c-b,S=E**2+y**2-v**2,x=.511;a>=16&&(x=.040975*a/(1+.01765*a));let T=.0638*h/(1+.0131*h)+.638,L;je(u)&&(u=0),u>=164&&u<=345?L=.56+Math.abs(.2*Math.cos((u+168)*Xu)):L=.36+Math.abs(.4*Math.cos((u+35)*Xu));let z=Math.pow(h,4),q=Math.sqrt(z/(z+1900)),W=T*(q*L+1-q),oe=(m/(r*x))**2;return oe+=(v/(o*T))**2,oe+=S/W**2,Math.sqrt(oe)}var Ju=203,qs=new ke({id:"xyz-abs-d65",cssId:"--xyz-abs-d65",name:"Absolute XYZ D65",coords:{x:{refRange:[0,9504.7],name:"Xa"},y:{refRange:[0,1e4],name:"Ya"},z:{refRange:[0,10888.3],name:"Za"}},base:Rt,fromBase(e){return e.map(t=>t*Ju)},toBase(e){return e.map(t=>t/Ju)}}),ta=1.15,na=.66,Qu=2610/2**14,gp=2**14/2610,ed=3424/2**12,td=2413/2**7,nd=2392/2**7,mp=1.7*2523/2**5,rd=2**5/(1.7*2523),ra=-.56,js=16295499532821565e-27,vp=[[.41478972,.579999,.014648],[-.20151,1.120649,.0531008],[-.0166008,.2648,.6684799]],bp=[[1.9242264357876067,-1.0047923125953657,.037651404030618],[.35031676209499907,.7264811939316552,-.06538442294808501],[-.09098281098284752,-.3127282905230739,1.5227665613052603]],wp=[[.5,.5,0],[3.524,-4.066708,.542708],[.199076,1.096799,-1.295875]],_p=[[1,.13860504327153927,.05804731615611883],[1,-.1386050432715393,-.058047316156118904],[1,-.09601924202631895,-.811891896056039]],id=new ke({id:"jzazbz",name:"Jzazbz",coords:{jz:{refRange:[0,1],name:"Jz"},az:{refRange:[-.21,.21]},bz:{refRange:[-.21,.21]}},base:qs,fromBase(e){let[t,r,o]=e,[a,s,c]=pt(pt([ta*t-(ta-1)*o,na*r-(na-1)*t,o],vp).map(function(h){return yt((ed+td*yt(h/1e4,Qu))/(1+nd*yt(h/1e4,Qu)),mp)}),wp);return[(1+ra)*a/(1+ra*a)-js,s,c]},toBase(e){let[t,r,o]=e,[a,s,c]=pt(pt([(t+js)/(1+ra-ra*(t+js)),r,o],_p).map(function(u){return 1e4*yt((ed-yt(u,rd))/(nd*yt(u,rd)-td),gp)}),bp),h=(a+(ta-1)*c)/ta;return[h,(s+(na-1)*h)/na,c]},formats:{jzazbz:{coords:["<percentage> | <number>","<number> | <percentage>","<number> | <percentage>"]}}}),Ks=new ke({id:"jzczhz",name:"JzCzHz",coords:{jz:{refRange:[0,1],name:"Jz"},cz:{refRange:[0,.26],name:"Chroma"},hz:{refRange:[0,360],type:"angle",name:"Hue"}},base:id,fromBase:sn.fromBase,toBase:sn.toBase,formats:{jzczhz:{coords:["<percentage> | <number>","<number> | <percentage>","<number> | <angle>"]}}});function yp(e,t){[e,t]=Le([e,t]);let[r,o,a]=Ks.from(e),[s,c,h]=Ks.from(t),u=r-s,f=o-c;je(a)&&je(h)?(a=0,h=0):je(a)?a=h:je(h)&&(h=a);let p=a-h,b=2*Math.sqrt(o*c)*Math.sin(p/2*(Math.PI/180));return Math.sqrt(u**2+f**2+b**2)}var od=3424/4096,ad=2413/128,sd=2392/128,ld=2610/16384,kp=2523/32,Ep=16384/2610,cd=32/2523,Ap=[[.3592832590121217,.6976051147779502,-.035891593232029],[-.1920808463704993,1.100476797037432,.0753748658519118],[.0070797844607479,.0748396662186362,.8433265453898765]],Sp=[[2048/4096,2048/4096,0],[6610/4096,-13613/4096,7003/4096],[17933/4096,-17390/4096,-543/4096]],Mp=[[.9999999999999998,.0086090370379328,.111029625003026],[.9999999999999998,-.0086090370379328,-.1110296250030259],[.9999999999999998,.5600313357106791,-.3206271749873188]],xp=[[2.0701522183894223,-1.3263473389671563,.2066510476294053],[.3647385209748072,.6805660249472273,-.0453045459220347],[-.0497472075358123,-.0492609666966131,1.1880659249923042]],Ys=new ke({id:"ictcp",name:"ICTCP",coords:{i:{refRange:[0,1],name:"I"},ct:{refRange:[-.5,.5],name:"CT"},cp:{refRange:[-.5,.5],name:"CP"}},base:qs,fromBase(e){return Ip(pt(e,Ap))},toBase(e){return pt(Cp(e),xp)},formats:{ictcp:{coords:["<percentage> | <number>","<number> | <percentage>","<number> | <percentage>"]}}});function Ip(e){return pt(e.map(function(t){return((od+ad*(t/1e4)**ld)/(1+sd*(t/1e4)**ld))**kp}),Sp)}function Cp(e){return pt(e,Mp).map(function(t){return 1e4*(Math.max(t**cd-od,0)/(ad-sd*t**cd))**Ep})}function Op(e,t){[e,t]=Le([e,t]);let[r,o,a]=Ys.from(e),[s,c,h]=Ys.from(t);return 720*Math.sqrt((r-s)**2+.25*(o-c)**2+(a-h)**2)}function Tp(e,t){[e,t]=Le([e,t]);let r=2,[o,a,s]=Ln.from(e),[c,h,u]=Ln.from(t),f=o-c,p=r*(a-h),b=r*(s-u);return Math.sqrt(f**2+p**2+b**2)}var Lp=Ht.D65,ud=.42,dd=1/ud,Xs=2*Math.PI,hd=[[.401288,.650173,-.051461],[-.250268,1.204414,.045854],[-.002079,.048952,.953127]],Rp=[[1.8620678550872327,-1.0112546305316843,.14918677544445175],[.38752654323613717,.6214474419314753,-.008973985167612518],[-.015841498849333856,-.03412293802851557,1.0499644368778496]],Pp=[[460,451,288],[460,-891,-261],[460,-220,-6300]],$p={dark:[.8,.525,.8],dim:[.9,.59,.9],average:[1,.69,1]},Dr={h:[20.14,90,164.25,237.53,380.14],e:[.8,.7,1,1.2,.8],H:[0,100,200,300,400]},zp=180/Math.PI,fd=Math.PI/180;function pd(e,t){return e.map(r=>{const o=yt(t*Math.abs(r)*.01,ud);return 400*Yo(o,r)/(o+27.13)})}function Np(e,t){const r=100/t*27.13**dd;return e.map(o=>{const a=Math.abs(o);return Yo(r*yt(a/(400-a),dd),o)})}function Dp(e){let t=bn(e);t<=Dr.h[0]&&(t+=360);const r=Du(Dr.h,t)-1,[o,a]=Dr.h.slice(r,r+2),[s,c]=Dr.e.slice(r,r+2),h=Dr.H[r],u=(t-o)/s;return h+100*u/(u+(a-t)/c)}function Bp(e){let t=(e%400+400)%400;const r=Math.floor(.01*t);t=t%100;const[o,a]=Dr.h.slice(r,r+2),[s,c]=Dr.e.slice(r,r+2);return bn((t*(c*o-s*a)-100*o*c)/(t*(c-s)-100*c))}function gd(e,t,r,o,a){const s={};s.discounting=a,s.refWhite=e,s.surround=o;const c=e.map(v=>v*100);s.la=t,s.yb=r;const h=c[1],u=pt(c,hd);let f=$p[s.surround];const p=f[0];s.c=f[1],s.nc=f[2];const b=(1/(5*s.la+1))**4;s.fl=b*s.la+.1*(1-b)*(1-b)*Math.cbrt(5*s.la),s.flRoot=s.fl**.25,s.n=s.yb/h,s.z=1.48+Math.sqrt(s.n),s.nbb=.725*s.n**-.2,s.ncb=s.nbb;const w=Math.max(Math.min(p*(1-1/3.6*Math.exp((-s.la-42)/92)),1),0);s.dRgb=u.map(v=>Xi(1,h/v,w)),s.dRgbInv=s.dRgb.map(v=>1/v);const m=pd(u.map((v,E)=>v*s.dRgb[E]),s.fl);return s.aW=s.nbb*(2*m[0]+m[1]+.05*m[2]),s}var md=gd(Lp,64/Math.PI*.2,20,"average",!1);function Js(e,t){if(!(e.J!==void 0^e.Q!==void 0))throw new Error("Conversion requires one and only one: 'J' or 'Q'");if(!(e.C!==void 0^e.M!==void 0^e.s!==void 0))throw new Error("Conversion requires one and only one: 'C', 'M' or 's'");if(!(e.h!==void 0^e.H!==void 0))throw new Error("Conversion requires one and only one: 'h' or 'H'");if(e.J===0||e.Q===0)return[0,0,0];let r=0;e.h!==void 0?r=bn(e.h)*fd:r=Bp(e.H)*fd;const o=Math.cos(r),a=Math.sin(r);let s=0;e.J!==void 0?s=yt(e.J,1/2)*.1:e.Q!==void 0&&(s=.25*t.c*e.Q/((t.aW+4)*t.flRoot));let c=0;e.C!==void 0?c=e.C/s:e.M!==void 0?c=e.M/t.flRoot/s:e.s!==void 0&&(c=4e-4*e.s**2*(t.aW+4)/t.c);const h=yt(c*Math.pow(1.64-Math.pow(.29,t.n),-.73),10/9),u=.25*(Math.cos(r+2)+3.8),f=t.aW*yt(s,2/t.c/t.z),p=5e4/13*t.nc*t.ncb*u,b=f/t.nbb,w=23*(b+.305)*Fs(h,23*p+h*(11*o+108*a));return pt(Np(pt([b,w*o,w*a],Pp).map(m=>m*1/1403),t.fl).map((m,v)=>m*t.dRgbInv[v]),Rp).map(m=>m/100)}function vd(e,t){const r=pd(pt(e.map(E=>E*100),hd).map((E,y)=>E*t.dRgb[y]),t.fl),o=r[0]+(-12*r[1]+r[2])/11,a=(r[0]+r[1]-2*r[2])/9,s=(Math.atan2(a,o)%Xs+Xs)%Xs,c=.25*(Math.cos(s+2)+3.8),h=yt(5e4/13*t.nc*t.ncb*Fs(c*Math.sqrt(o**2+a**2),r[0]+r[1]+1.05*r[2]+.305),.9)*Math.pow(1.64-Math.pow(.29,t.n),.73),u=yt(t.nbb*(2*r[0]+r[1]+.05*r[2])/t.aW,.5*t.c*t.z),f=100*yt(u,2),p=4/t.c*u*(t.aW+4)*t.flRoot,b=h*u,w=b*t.flRoot,m=bn(s*zp),v=Dp(m);return{J:f,C:b,h:m,s:50*yt(t.c*h/(t.aW+4),1/2),Q:p,M:w,H:v}}var Fp=new ke({id:"cam16-jmh",cssId:"--cam16-jmh",name:"CAM16-JMh",coords:{j:{refRange:[0,100],name:"J"},m:{refRange:[0,105],name:"Colorfulness"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:Rt,fromBase(e){this.ε===void 0&&(this.ε=Object.values(this.coords)[1].refRange[1]/1e5);const t=vd(e,md),r=Math.abs(t.M)<this.ε;return[t.J,r?0:t.M,r?null:t.h]},toBase(e){return Js({J:e[0],M:e[1],h:e[2]},md)}}),Hp=Ht.D65,Gp=216/24389,bd=24389/27;function Up(e){return 116*(e>Gp?Math.cbrt(e):(bd*e+16)/116)-16}function Qs(e){return e>8?Math.pow((e+16)/116,3):e/bd}function Wp(e,t){let[r,o,a]=e,s=[],c=0;if(a===0)return[0,0,0];let h=Qs(a);a>0?c=.00379058511492914*a**2+.608983189401032*a+.9155088574762233:c=9514440756550361e-21*a**2+.08693057439788597*a-21.928975842194614;const u=2e-12,f=15;let p=0,b=1/0;for(;p<=f;){s=Js({J:c,C:o,h:r},t);const w=Math.abs(s[1]-h);if(w<b){if(w<=u)return s;b=w}c=c-(s[1]-h)*c/(2*s[1]),p+=1}return Js({J:c,C:o,h:r},t)}function Vp(e,t){const r=Up(e[1]);if(r===0)return[0,0,0];const o=vd(e,el);return[bn(o.h),o.C,r]}var el=gd(Hp,200/Math.PI*Qs(50),Qs(50)*100,"average",!1),Qi=new ke({id:"hct",name:"HCT",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},c:{refRange:[0,145],name:"Colorfulness"},t:{refRange:[0,100],name:"Tone"}},base:Rt,fromBase(e){this.ε===void 0&&(this.ε=Object.values(this.coords)[1].refRange[1]/1e5);let t=Vp(e);return t[1]<this.ε&&(t[1]=0,t[0]=null),t},toBase(e){return Wp(e,el)},formats:{color:{id:"--hct",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}}),Zp=Math.PI/180,wd=[1,.007,.0228];function _d(e){e[1]<0&&(e=Qi.fromBase(Qi.toBase(e)));const t=Math.log(Math.max(1+wd[2]*e[1]*el.flRoot,1))/wd[2],r=e[0]*Zp,o=t*Math.cos(r),a=t*Math.sin(r);return[e[2],o,a]}function qp(e,t){[e,t]=Le([e,t]);let[r,o,a]=_d(Qi.from(e)),[s,c,h]=_d(Qi.from(t));return Math.sqrt((r-s)**2+(o-c)**2+(a-h)**2)}var ui={deltaE76:fp,deltaECMC:pp,deltaE2000:Ku,deltaEJz:yp,deltaEITP:Op,deltaEOK:Zs,deltaEOK2:Tp,deltaEHCT:qp};function jp(e){return Math.max(parseFloat(`1e${(e?Math.floor(Math.log10(Math.abs(e))):0)-2}`),1e-6)}var yd={hct:{method:"hct.c",jnd:2,deltaEMethod:"hct",blackWhiteClamp:{}},"hct-tonal":{method:"hct.c",jnd:0,deltaEMethod:"hct",blackWhiteClamp:{channel:"hct.t",min:0,max:100}}};function dr(e,{method:t=rn.gamut_mapping,space:r=void 0,deltaEMethod:o="",jnd:a=2,blackWhiteClamp:s=void 0}={}){if(e=Le(e),ai(arguments[1])?r=arguments[1]:r||(r=e.space),r=ke.get(r),Nr(e,r,{epsilon:0}))return e;let c;if(t==="css")c=Kp(e,{space:r});else{if(t!=="clip"&&!Nr(e,r)){Object.prototype.hasOwnProperty.call(yd,t)&&({method:t,jnd:a,deltaEMethod:o,blackWhiteClamp:s}=yd[t]);let h=Ku;if(o!==""){for(let f in ui)if("deltae"+o.toLowerCase()===f.toLowerCase()){h=ui[f];break}}a===0&&(a=1e-16);let u=dr(nt(e,r),{method:"clip",space:r});if(h(e,u)>a){if(s&&Object.keys(s).length===3){let S=ke.resolveCoord(s.channel),x=on(nt(e,S.space),S.id);if(je(x)&&(x=0),x>=s.max)return nt({space:"xyz-d65",coords:Ht.D65},e.space);if(x<=s.min)return nt({space:"xyz-d65",coords:[0,0,0]},e.space)}let f=ke.resolveCoord(t),p=f.space,b=f.id,w=nt(e,p);w.coords.forEach((S,x)=>{je(S)&&(w.coords[x]=0)});let m=(f.range||f.refRange)[0],v=jp(a),E=m,y=on(w,b);for(;y-E>v;){let S=ci(w);S=dr(S,{space:r,method:"clip"}),h(w,S)-a<v?E=on(w,b):y=on(w,b),qn(w,b,(E+y)/2)}c=nt(w,r)}else c=u}else c=nt(e,r);if(t==="clip"||!Nr(c,r,{epsilon:0})){let h=Object.values(r.coords).map(u=>u.range||[]);c.coords=c.coords.map((u,f)=>{let[p,b]=h[f];return p!==void 0&&(u=Math.max(p,u)),b!==void 0&&(u=Math.min(u,b)),u})}}return r!==e.space&&(c=nt(c,e.space)),e.coords=c.coords,e}dr.returns="color";var kd={WHITE:{space:Ln,coords:[1,0,0],alpha:1},BLACK:{space:Ln,coords:[0,0,0],alpha:1}};function Kp(e,{space:t}={}){e=Le(e),t||(t=e.space),t=ke.get(t);const a=ke.get("oklch");if(t.isUnbounded)return nt(e,t);const s=nt(e,a);let c=s.coords[0];if(c>=1){const v=nt(kd.WHITE,t);return v.alpha=e.alpha,nt(v,t)}if(c<=0){const v=nt(kd.BLACK,t);return v.alpha=e.alpha,nt(v,t)}if(Nr(s,t,{epsilon:0}))return nt(s,t);function h(v){const E=nt(v,t),y=Object.values(t.coords);return E.coords=E.coords.map((S,x)=>{if("range"in y[x]){const[T,L]=y[x].range;return Ko(T,S,L)}return S}),E}let u=0,f=s.coords[1],p=!0,b=ci(s),w=h(b),m=Zs(w,b);if(m<.02)return w;for(;f-u>1e-4;){const v=(u+f)/2;if(b.coords[1]=v,p&&Nr(b,t,{epsilon:0}))u=v;else if(w=h(b),m=Zs(w,b),m<.02){if(.02-m<1e-4)break;p=!1,u=v}else f=v}return w}function nt(e,t,{inGamut:r}={}){e=Le(e),t=ke.get(t);let o=t.from(e),a={space:t,coords:o,alpha:e.alpha};return r&&(a=dr(a,r===!0?void 0:r)),a}nt.returns="color";function eo(e,t={}){let{precision:r=rn.precision,format:o,inGamut:a=!0,coords:s,alpha:c,commas:h}=t,u,f=Le(e),p=o,b=f.parseMeta;b&&!o&&(b.format.canSerialize()&&(o=b.format,p=b.formatId),s??=b.types,c??=b.alphaType,h??=b.commas),p&&(o=f.space.getFormat(o)??ke.findFormat(p)),o||(o=f.space.getFormat("default")??ke.DEFAULT_FORMAT,p=o.name),o&&o.space&&o.space!==f.space&&(f=nt(f,o.space));let w=f.coords.slice();if(a||=o.toGamut,a&&!Nr(f)&&(w=dr(ci(f),a===!0?void 0:a).coords),o.type==="custom")if(o.serialize)u=o.serialize(w,f.alpha,t);else throw new TypeError(`format ${p} can only be used to parse colors, not for serialization`);else{let m=o.name||"color",v=o.serializeCoords(w,r,s);if(m==="color"){let T=o.id||o.ids?.[0]||f.space.cssId||f.space.id;v.unshift(T)}let E=f.alpha;c!==void 0&&typeof c!="object"&&(c=typeof c=="string"?{type:c}:{include:c});let y=c?.type??"<number>",S=c?.include===!0||o.alpha===!0||c?.include!==!1&&o.alpha!==!1&&E<1,x="";if(h??=o.commas,S){if(r!==null){let T;y==="<percentage>"&&(T="%",E*=100),E=Ns(E,{precision:r,unit:T})}x=`${h?",":" /"} ${E}`}u=`${m}(${v.join(h?", ":" ")}${x})`}return u}var to=new Nt({id:"rec2020-linear",cssId:"--rec2020-linear",name:"Linear REC.2020",white:"D65",toXYZ_M:[[.6369580483012914,.14461690358620832,.1688809751641721],[.2627002120112671,.6779980715188708,.05930171646986196],[0,.028072693049087428,1.060985057710791]],fromXYZ_M:[[1.716651187971268,-.355670783776392,-.25336628137366],[-.666684351832489,1.616481236634939,.0157685458139111],[.017639857445311,-.042770613257809,.942103121235474]]}),Ed=new Nt({id:"rec2020",name:"REC.2020",base:to,toBase(e){return e.map(function(t){let r=t<0?-1:1,o=t*r;return r*Math.pow(o,2.4)})},fromBase(e){return e.map(function(t){let r=t<0?-1:1,o=t*r;return r*Math.pow(o,1/2.4)})}}),Ad=new Nt({id:"p3-linear",cssId:"display-p3-linear",name:"Linear P3",white:"D65",toXYZ_M:[[.4865709486482162,.26566769316909306,.1982172852343625],[.2289745640697488,.6917385218365064,.079286914093745],[0,.04511338185890264,1.043944368900976]],fromXYZ_M:[[2.493496911941425,-.9313836179191239,-.40271078445071684],[-.8294889695615747,1.7626640603183463,.023624685841943577],[.03584583024378447,-.07617238926804182,.9568845240076872]]}),Yp=[[.41239079926595934,.357584339383878,.1804807884018343],[.21263900587151027,.715168678767756,.07219231536073371],[.01933081871559182,.11919477979462598,.9505321522496607]],Mt=[[3.2409699419045226,-1.537383177570094,-.4986107602930034],[-.9692436362808796,1.8759675015077202,.04155505740717559],[.05563007969699366,-.20397695888897652,1.0569715142428786]],Sd=new Nt({id:"srgb-linear",name:"Linear sRGB",white:"D65",toXYZ_M:Yp,fromXYZ_M:Mt}),Md={aliceblue:[240/255,248/255,1],antiquewhite:[250/255,235/255,215/255],aqua:[0,1,1],aquamarine:[127/255,1,212/255],azure:[240/255,1,1],beige:[245/255,245/255,220/255],bisque:[1,228/255,196/255],black:[0,0,0],blanchedalmond:[1,235/255,205/255],blue:[0,0,1],blueviolet:[138/255,43/255,226/255],brown:[165/255,42/255,42/255],burlywood:[222/255,184/255,135/255],cadetblue:[95/255,158/255,160/255],chartreuse:[127/255,1,0],chocolate:[210/255,105/255,30/255],coral:[1,127/255,80/255],cornflowerblue:[100/255,149/255,237/255],cornsilk:[1,248/255,220/255],crimson:[220/255,20/255,60/255],cyan:[0,1,1],darkblue:[0,0,139/255],darkcyan:[0,139/255,139/255],darkgoldenrod:[184/255,134/255,11/255],darkgray:[169/255,169/255,169/255],darkgreen:[0,100/255,0],darkgrey:[169/255,169/255,169/255],darkkhaki:[189/255,183/255,107/255],darkmagenta:[139/255,0,139/255],darkolivegreen:[85/255,107/255,47/255],darkorange:[1,140/255,0],darkorchid:[153/255,50/255,204/255],darkred:[139/255,0,0],darksalmon:[233/255,150/255,122/255],darkseagreen:[143/255,188/255,143/255],darkslateblue:[72/255,61/255,139/255],darkslategray:[47/255,79/255,79/255],darkslategrey:[47/255,79/255,79/255],darkturquoise:[0,206/255,209/255],darkviolet:[148/255,0,211/255],deeppink:[1,20/255,147/255],deepskyblue:[0,191/255,1],dimgray:[105/255,105/255,105/255],dimgrey:[105/255,105/255,105/255],dodgerblue:[30/255,144/255,1],firebrick:[178/255,34/255,34/255],floralwhite:[1,250/255,240/255],forestgreen:[34/255,139/255,34/255],fuchsia:[1,0,1],gainsboro:[220/255,220/255,220/255],ghostwhite:[248/255,248/255,1],gold:[1,215/255,0],goldenrod:[218/255,165/255,32/255],gray:[128/255,128/255,128/255],green:[0,128/255,0],greenyellow:[173/255,1,47/255],grey:[128/255,128/255,128/255],honeydew:[240/255,1,240/255],hotpink:[1,105/255,180/255],indianred:[205/255,92/255,92/255],indigo:[75/255,0,130/255],ivory:[1,1,240/255],khaki:[240/255,230/255,140/255],lavender:[230/255,230/255,250/255],lavenderblush:[1,240/255,245/255],lawngreen:[124/255,252/255,0],lemonchiffon:[1,250/255,205/255],lightblue:[173/255,216/255,230/255],lightcoral:[240/255,128/255,128/255],lightcyan:[224/255,1,1],lightgoldenrodyellow:[250/255,250/255,210/255],lightgray:[211/255,211/255,211/255],lightgreen:[144/255,238/255,144/255],lightgrey:[211/255,211/255,211/255],lightpink:[1,182/255,193/255],lightsalmon:[1,160/255,122/255],lightseagreen:[32/255,178/255,170/255],lightskyblue:[135/255,206/255,250/255],lightslategray:[119/255,136/255,153/255],lightslategrey:[119/255,136/255,153/255],lightsteelblue:[176/255,196/255,222/255],lightyellow:[1,1,224/255],lime:[0,1,0],limegreen:[50/255,205/255,50/255],linen:[250/255,240/255,230/255],magenta:[1,0,1],maroon:[128/255,0,0],mediumaquamarine:[102/255,205/255,170/255],mediumblue:[0,0,205/255],mediumorchid:[186/255,85/255,211/255],mediumpurple:[147/255,112/255,219/255],mediumseagreen:[60/255,179/255,113/255],mediumslateblue:[123/255,104/255,238/255],mediumspringgreen:[0,250/255,154/255],mediumturquoise:[72/255,209/255,204/255],mediumvioletred:[199/255,21/255,133/255],midnightblue:[25/255,25/255,112/255],mintcream:[245/255,1,250/255],mistyrose:[1,228/255,225/255],moccasin:[1,228/255,181/255],navajowhite:[1,222/255,173/255],navy:[0,0,128/255],oldlace:[253/255,245/255,230/255],olive:[128/255,128/255,0],olivedrab:[107/255,142/255,35/255],orange:[1,165/255,0],orangered:[1,69/255,0],orchid:[218/255,112/255,214/255],palegoldenrod:[238/255,232/255,170/255],palegreen:[152/255,251/255,152/255],paleturquoise:[175/255,238/255,238/255],palevioletred:[219/255,112/255,147/255],papayawhip:[1,239/255,213/255],peachpuff:[1,218/255,185/255],peru:[205/255,133/255,63/255],pink:[1,192/255,203/255],plum:[221/255,160/255,221/255],powderblue:[176/255,224/255,230/255],purple:[128/255,0,128/255],rebeccapurple:[102/255,51/255,153/255],red:[1,0,0],rosybrown:[188/255,143/255,143/255],royalblue:[65/255,105/255,225/255],saddlebrown:[139/255,69/255,19/255],salmon:[250/255,128/255,114/255],sandybrown:[244/255,164/255,96/255],seagreen:[46/255,139/255,87/255],seashell:[1,245/255,238/255],sienna:[160/255,82/255,45/255],silver:[192/255,192/255,192/255],skyblue:[135/255,206/255,235/255],slateblue:[106/255,90/255,205/255],slategray:[112/255,128/255,144/255],slategrey:[112/255,128/255,144/255],snow:[1,250/255,250/255],springgreen:[0,1,127/255],steelblue:[70/255,130/255,180/255],tan:[210/255,180/255,140/255],teal:[0,128/255,128/255],thistle:[216/255,191/255,216/255],tomato:[1,99/255,71/255],turquoise:[64/255,224/255,208/255],violet:[238/255,130/255,238/255],wheat:[245/255,222/255,179/255],white:[1,1,1],whitesmoke:[245/255,245/255,245/255],yellow:[1,1,0],yellowgreen:[154/255,205/255,50/255]},xd=Array(3).fill("<percentage> | <number>[0, 255]"),Id=Array(3).fill("<number>[0, 255]"),Br=new Nt({id:"srgb",name:"sRGB",base:Sd,fromBase:e=>e.map(t=>{let r=t<0?-1:1,o=t*r;return o>.0031308?r*(1.055*o**(1/2.4)-.055):12.92*t}),toBase:e=>e.map(t=>{let r=t<0?-1:1,o=t*r;return o<=.04045?t/12.92:r*((o+.055)/1.055)**2.4}),formats:{rgb:{coords:xd},rgb_number:{name:"rgb",commas:!0,coords:Id,alpha:!1},color:{},rgba:{coords:xd,commas:!0,alpha:!0},rgba_number:{name:"rgba",commas:!0,coords:Id},hex:{type:"custom",toGamut:!0,test:e=>/^#(([a-f0-9]{2}){3,4}|[a-f0-9]{3,4})$/i.test(e),parse(e){e.length<=5&&(e=e.replace(/[a-f0-9]/gi,"$&$&"));let t=[];return e.replace(/[a-f0-9]{2}/gi,r=>{t.push(parseInt(r,16)/255)}),{spaceId:"srgb",coords:t.slice(0,3),alpha:t.slice(3)[0]}},serialize:(e,t,{collapse:r=!0,alpha:o}={})=>{(o!==!1&&t<1||o===!0)&&e.push(t),e=e.map(s=>Math.round(s*255));let a=r&&e.every(s=>s%17===0);return"#"+e.map(s=>a?(s/17).toString(16):s.toString(16).padStart(2,"0")).join("")}},keyword:{type:"custom",test:e=>/^[a-z]+$/i.test(e),parse(e){e=e.toLowerCase();let t={spaceId:"srgb",coords:null,alpha:1};if(e==="transparent"?(t.coords=Md.black,t.alpha=0):t.coords=Md[e],t.coords)return t}}}}),Cd=new Nt({id:"p3",cssId:"display-p3",name:"P3",base:Ad,fromBase:Br.fromBase,toBase:Br.toBase});rn.display_space=Br;var Xp;if(typeof CSS<"u"&&CSS.supports)for(let e of[an,Ed,Cd]){let t=eo({space:e,coords:e.getMinCoords(),alpha:1});if(CSS.supports("color",t)){rn.display_space=e;break}}function Jp(e,{space:t=rn.display_space,...r}={}){e=Le(e);let o=eo(e,r);if(typeof CSS>"u"||CSS.supports("color",o)||!rn.display_space)o=new String(o),o.color=e;else{let a=e;if((e.coords.some(je)||je(e.alpha))&&!(Xp??=CSS.supports("color","hsl(none 50% 50%)"))&&(a=ci(e),a.coords=a.coords.map(_t),a.alpha=_t(a.alpha),o=eo(a,r),CSS.supports("color",o)))return o=new String(o),o.color=a,o;a=nt(a,t),o=new String(eo(a,r)),o.color=a}return o}function Qp(e,t,{space:r,hue:o="shorter"}={}){e=Le(e),r||=e.space,r=ke.get(r);let a=Object.values(r.coords);[e,t]=[e,t].map(f=>nt(f,r));let[s,c]=[e,t].map(f=>f.coords),h=s.map((f,p)=>{let b=a[p],w=c[p];return b.type==="angle"&&([f,w]=Vu(o,[f,w])),Od(f,w)}),u=Od(e.alpha,t.alpha);return{space:r,coords:h,alpha:u}}function Od(e,t){return je(e)||je(t)?e===t?null:0:e-t}function eg(e,t){return e=Le(e),t=Le(t),e.space===t.space&&e.alpha===t.alpha&&e.coords.every((r,o)=>r===t.coords[o])}function hr(e){return on(e,[Rt,"y"])}function Td(e,t){qn(e,[Rt,"y"],t)}function tg(e){Object.defineProperty(e.prototype,"luminance",{get(){return hr(this)},set(t){Td(this,t)}})}var ng=Object.freeze({__proto__:null,getLuminance:hr,register:tg,setLuminance:Td});function rg(e,t){e=Le(e),t=Le(t);let r=Math.max(hr(e),0),o=Math.max(hr(t),0);return o>r&&([r,o]=[o,r]),(r+.05)/(o+.05)}var ig=.56,og=.57,ag=.62,sg=.65,Ld=.022,lg=1.414,cg=.1,ug=5e-4,dg=1.14,Rd=.027,hg=1.14;function Pd(e){return e>=Ld?e:e+(Ld-e)**lg}function di(e){return(e<0?-1:1)*Math.pow(Math.abs(e),2.4)}function fg(e,t){t=Le(t),e=Le(e);let r,o,a,s,c,h;t=nt(t,"srgb"),[s,c,h]=t.coords.map(m=>je(m)?0:m);let u=di(s)*.2126729+di(c)*.7151522+di(h)*.072175;e=nt(e,"srgb"),[s,c,h]=e.coords.map(m=>je(m)?0:m);let f=di(s)*.2126729+di(c)*.7151522+di(h)*.072175,p=Pd(u),b=Pd(f),w=b>p;return Math.abs(b-p)<ug?o=0:w?(r=b**ig-p**og,o=r*dg):(r=b**sg-p**ag,o=r*hg),Math.abs(o)<cg?a=0:o>0?a=o-Rd:a=o+Rd,a*100}function pg(e,t){e=Le(e),t=Le(t);let r=Math.max(hr(e),0),o=Math.max(hr(t),0);o>r&&([r,o]=[o,r]);let a=r+o;return a===0?0:(r-o)/a}var gg=5e4;function mg(e,t){e=Le(e),t=Le(t);let r=Math.max(hr(e),0),o=Math.max(hr(t),0);return o>r&&([r,o]=[o,r]),o===0?gg:(r-o)/o}function vg(e,t){e=Le(e),t=Le(t);let r=on(e,[an,"l"]),o=on(t,[an,"l"]);return Math.abs(r-o)}var bg=216/24389,$d=24/116,ia=24389/27,tl=Ht.D65,nl=new ke({id:"lab-d65",name:"Lab D65",coords:{l:{refRange:[0,100],name:"Lightness"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:tl,base:Rt,fromBase(e){let t=e.map((r,o)=>r/tl[o]).map(r=>r>bg?Math.cbrt(r):(ia*r+16)/116);return[116*t[1]-16,500*(t[0]-t[1]),200*(t[1]-t[2])]},toBase(e){let t=[];return t[1]=(e[0]+16)/116,t[0]=e[1]/500+t[1],t[2]=t[1]-e[2]/200,[t[0]>$d?Math.pow(t[0],3):(116*t[0]-16)/ia,e[0]>8?Math.pow((e[0]+16)/116,3):e[0]/ia,t[2]>$d?Math.pow(t[2],3):(116*t[2]-16)/ia].map((r,o)=>r*tl[o])},formats:{"lab-d65":{coords:["<number> | <percentage>","<number> | <percentage>","<number> | <percentage>"]}}}),rl=Math.pow(5,.5)*.5+.5;function wg(e,t){e=Le(e),t=Le(t);let r=on(e,[nl,"l"]),o=on(t,[nl,"l"]),a=Math.abs(Math.pow(r,rl)-Math.pow(o,rl)),s=Math.pow(a,1/rl)*Math.SQRT2-40;return s<7.5?0:s}var oa=Object.freeze({__proto__:null,contrastAPCA:fg,contrastDeltaPhi:wg,contrastLstar:vg,contrastMichelson:pg,contrastWCAG21:rg,contrastWeber:mg});function _g(e,t,r){ai(r)&&(r={algorithm:r});let{algorithm:o,...a}=r||{};if(!o){let s=Object.keys(oa).map(c=>c.replace(/^contrast/,"")).join(", ");throw new TypeError(`contrast() function needs a contrast algorithm. Please specify one of: ${s}`)}e=Le(e),t=Le(t);for(let s in oa)if("contrast"+o.toLowerCase()===s.toLowerCase())return oa[s](e,t,a);throw new TypeError(`Unknown contrast algorithm: ${o}`)}function aa(e){let[t,r,o]=Ji(e,Rt),a=t+15*r+3*o;return[4*t/a,9*r/a]}function zd(e){let[t,r,o]=Ji(e,Rt),a=t+r+o;return[t/a,r/a]}function yg(e){Object.defineProperty(e.prototype,"uv",{get(){return aa(this)}}),Object.defineProperty(e.prototype,"xy",{get(){return zd(this)}})}var kg=Object.freeze({__proto__:null,register:yg,uv:aa,xy:zd});function no(e,t,r={}){ai(r)&&(r={method:r});let{method:o=rn.deltaE,...a}=r;for(let s in ui)if("deltae"+o.toLowerCase()===s.toLowerCase())return ui[s](e,t,a);throw new TypeError(`Unknown deltaE method: ${o}`)}function Nd(e,t=.25){return qn(e,[ke.get("oklch","lch"),"l"],r=>r*(1+t))}function Dd(e,t=.25){return qn(e,[ke.get("oklch","lch"),"l"],r=>r*(1-t))}Nd.returns="color",Dd.returns="color";var Eg=Object.freeze({__proto__:null,darken:Dd,lighten:Nd});function Bd(e,t,r,o={}){return[e,t]=[Le(e),Le(t)],lr(r)==="object"&&([r,o]=[.5,r]),ro(e,t,o)(r??.5)}function Fd(e,t,r={}){let o;il(e)&&([o,r]=[e,t],[e,t]=o.rangeArgs.colors);let{maxDeltaE:a,deltaEMethod:s,steps:c=2,maxSteps:h=1e3,...u}=r;o||([e,t]=[Le(e),Le(t)],o=ro(e,t,u));let f=no(e,t),p=a>0?Math.max(c,Math.ceil(f/a)+1):c,b=[];if(h!==void 0&&(p=Math.min(p,h)),p===1)b=[{p:.5,color:o(.5)}];else{let w=1/(p-1);b=Array.from({length:p},(m,v)=>{let E=v*w;return{p:E,color:o(E)}})}if(a>0){let w=b.reduce((m,v,E)=>{if(E===0)return 0;let y=no(v.color,b[E-1].color,s);return Math.max(m,y)},0);for(;w>a;){w=0;for(let m=1;m<b.length&&b.length<h;m++){let v=b[m-1],E=b[m],y=(E.p+v.p)/2,S=o(y);w=Math.max(w,no(S,v.color),no(S,E.color)),b.splice(m,0,{p:y,color:o(y)}),m++}}}return b=b.map(w=>w.color),b}function ro(e,t,r={}){if(il(e)){let[u,f]=[e,t];return ro(...u.rangeArgs.colors,{...u.rangeArgs.options,...f})}let{space:o,outputSpace:a,progression:s,premultiplied:c}=r;e=Le(e),t=Le(t),e=ci(e),t=ci(t);let h={colors:[e,t],options:r};if(o?o=ke.get(o):o=ke.registry[rn.interpolationSpace]||e.space,a=a?ke.get(a):o,e=nt(e,o),t=nt(t,o),e=dr(e),t=dr(t),o.coords.h&&o.coords.h.type==="angle"){let u=r.hue=r.hue||"shorter",f=[o,"h"],[p,b]=[on(e,f),on(t,f)];je(p)&&!je(b)?p=b:je(b)&&!je(p)&&(b=p),[p,b]=Vu(u,[p,b]),qn(e,f,p),qn(t,f,b)}return c&&(e.coords=e.coords.map(u=>u*e.alpha),t.coords=t.coords.map(u=>u*t.alpha)),Object.assign(u=>{u=s?s(u):u;let f=e.coords.map((w,m)=>{let v=t.coords[m];return Xi(w,v,u)}),p=Xi(e.alpha,t.alpha,u),b={space:o,coords:f,alpha:p};return c&&(b.coords=b.coords.map(w=>w/p)),a!==o&&(b=nt(b,a)),b},{rangeArgs:h})}function il(e){return lr(e)==="function"&&!!e.rangeArgs}rn.interpolationSpace="lab";function Ag(e){e.defineFunction("mix",Bd,{returns:"color"}),e.defineFunction("range",ro,{returns:"function<color>"}),e.defineFunction("steps",Fd,{returns:"array<color>"})}var Sg=Object.freeze({__proto__:null,isRange:il,mix:Bd,range:ro,register:Ag,steps:Fd}),Mg=new ke({id:"hsl",name:"HSL",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:Br,fromBase:e=>{let t=Math.max(...e),r=Math.min(...e),[o,a,s]=e,[c,h,u]=[null,0,(r+t)/2],f=t-r;if(f!==0){switch(h=u===0||u===1?0:(t-u)/Math.min(u,1-u),t){case o:c=(a-s)/f+(a<s?6:0);break;case a:c=(s-o)/f+2;break;case s:c=(o-a)/f+4}c=c*60}return h<0&&(c+=180,h=Math.abs(h)),c>=360&&(c-=360),[c,h*100,u*100]},toBase:e=>{let[t,r,o]=e;t=t%360,t<0&&(t+=360),r/=100,o/=100;function a(s){let c=(s+t/30)%12,h=r*Math.min(o,1-o);return o-h*Math.max(-1,Math.min(c-3,9-c,1))}return[a(0),a(8),a(4)]},formats:{hsl:{coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]},hsla:{coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"],commas:!0,alpha:!0}}}),Hd=new ke({id:"hsv",name:"HSV",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},v:{range:[0,100],name:"Value"}},base:Br,fromBase(e){let t=Math.max(...e),r=Math.min(...e),[o,a,s]=e,[c,h,u]=[null,0,t],f=t-r;if(f!==0){switch(t){case o:c=(a-s)/f+(a<s?6:0);break;case a:c=(s-o)/f+2;break;case s:c=(o-a)/f+4}c=c*60}return u&&(h=f/u),c>=360&&(c-=360),[c,h*100,u*100]},toBase(e){let[t,r,o]=e;t=t%360,t<0&&(t+=360),r/=100,o/=100;function a(s){let c=(s+t/60)%6;return o-o*r*Math.max(0,Math.min(c,4-c,1))}return[a(5),a(3),a(1)]},formats:{color:{id:"--hsv",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}}),xg=new ke({id:"hwb",name:"HWB",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},w:{range:[0,100],name:"Whiteness"},b:{range:[0,100],name:"Blackness"}},base:Hd,fromBase(e){let[t,r,o]=e;return[t,o*(100-r)/100,100-o]},toBase(e){let[t,r,o]=e;r/=100,o/=100;let a=r+o;if(a>=1)return[t,0,r/a*100];let s=1-o;return[t,(s===0?0:1-r/s)*100,s*100]},formats:{hwb:{coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}}),Gd=new Nt({id:"a98rgb-linear",cssId:"--a98-rgb-linear",name:"Linear Adobe® 98 RGB compatible",white:"D65",toXYZ_M:[[.5766690429101305,.1855582379065463,.1882286462349947],[.29734497525053605,.6273635662554661,.07529145849399788],[.02703136138641234,.07068885253582723,.9913375368376388]],fromXYZ_M:[[2.0415879038107465,-.5650069742788596,-.34473135077832956],[-.9692436362808795,1.8759675015077202,.04155505740717557],[.013444280632031142,-.11836239223101838,1.0151749943912054]]}),Ig=new Nt({id:"a98rgb",cssId:"a98-rgb",name:"Adobe® 98 RGB compatible",base:Gd,toBase:e=>e.map(t=>Math.pow(Math.abs(t),563/256)*Math.sign(t)),fromBase:e=>e.map(t=>Math.pow(Math.abs(t),256/563)*Math.sign(t))}),Ud=new Nt({id:"prophoto-linear",cssId:"--prophoto-rgb-linear",name:"Linear ProPhoto",white:"D50",base:Ws,toXYZ_M:[[.7977666449006423,.13518129740053308,.0313477341283922],[.2880748288194013,.711835234241873,8993693872564e-17],[0,0,.8251046025104602]],fromXYZ_M:[[1.3457868816471583,-.25557208737979464,-.05110186497554526],[-.5446307051249019,1.5082477428451468,.02052744743642139],[0,0,1.2119675456389452]]}),Cg=1/512,Og=16/512,Tg=new Nt({id:"prophoto",cssId:"prophoto-rgb",name:"ProPhoto",base:Ud,toBase(e){return e.map(t=>{let r=t<0?-1:1,o=t*r;return o<Og?t/16:r*o**1.8})},fromBase(e){return e.map(t=>{let r=t<0?-1:1,o=t*r;return o>=Cg?r*o**(1/1.8):16*t})}}),sa=1.09929682680944,Wd=.018053968510807,Lg=new Nt({id:"--rec2020-oetf",name:"REC.2020_Scene_Referred",base:to,referred:"scene",toBase(e){return e.map(function(t){let r=t<0?-1:1,o=t*r;return o<Wd*4.5?t/4.5:r*Math.pow((o+sa-1)/sa,1/.45)})},fromBase(e){return e.map(function(t){let r=t<0?-1:1,o=t*r;return o>=Wd?r*(sa*Math.pow(o,.45)-(sa-1)):4.5*t})}}),Rg=new ke({id:"oklch",name:"OkLCh",coords:{l:{refRange:[0,1],name:"Lightness"},c:{refRange:[0,.4],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},white:"D65",base:Ln,fromBase:sn.fromBase,toBase:sn.toBase,formats:{oklch:{coords:["<percentage> | <number>","<number> | <percentage>","<number> | <angle>"]}}}),hi=2*Math.PI,la=[[4.076741636075958,-3.307711539258063,.2309699031821043],[-1.2684379732850315,2.609757349287688,-.341319376002657],[-.0041960761386756,-.7034186179359362,1.7076146940746117]],ca=[[[-1.8817031,-.80936501],[1.19086277,1.76576728,.59662641,.75515197,.56771245]],[[1.8144408,-1.19445267],[.73956515,-.45954404,.08285427,.12541073,-.14503204]],[[.13110758,1.81333971],[1.35733652,-.00915799,-1.1513021,-.50559606,.00692167]]],ol=Number.MAX_VALUE,io=.206,al=.03,oo=(1+io)/(1+al);function Pt(e,t){let r=e.length;if(r!==t.length)throw new Error(`Vectors of size ${r} and ${t.length} are not aligned`);let o=0;return e.forEach((a,s)=>{o+=a*t[s]}),o}function ao(e){return .5*(oo*e-io+Math.sqrt((oo*e-io)*(oo*e-io)+4*al*oo*e))}function fi(e){return(e**2+io*e)/(oo*(e+al))}function sl(e){let[t,r]=e;return[r/t,r/(1-t)]}function Pg(e,t){return[.11516993+1/(7.4477897+4.1590124*t+e*(-2.19557347+1.75198401*t+e*(-2.13704948-10.02301043*t+e*(-4.24894561+5.38770819*t+4.69891013*e)))),.11239642+1/(1.6132032-.68124379*t+e*(.40370612+.90148123*t+e*(-.27087943+.6122399*t+e*(.00299215-.45399568*t-.14661872*e))))]}function ll(e,t){let r=pt(e,ur);return r[0]=r[0]**3,r[1]=r[1]**3,r[2]=r[2]**3,pt(r,t,r)}function ua(e,t,r,o){let a=zg(e,t,r,o),s=ll([1,a*e,a*t],r),c=yt(1/Math.max(...s),1/3);return[c,c*a]}function $g(e,t,r,o,a,s,c,h){let u;if(h===void 0&&(h=ua(e,t,s,c)),(r-a)*h[1]-(h[0]-a)*o<=0)u=h[1]*a/(o*h[0]+h[1]*(a-r));else{u=h[1]*(a-1)/(o*(h[0]-1)+h[1]*(a-r));let f=r-a,p=o,b=Pt(ur[0].slice(1),[e,t]),w=Pt(ur[1].slice(1),[e,t]),m=Pt(ur[2].slice(1),[e,t]),v=f+p*b,E=f+p*w,y=f+p*m,S=a*(1-u)+u*r,x=u*o,T=S+x*b,L=S+x*w,z=S+x*m,q=T**3,W=L**3,oe=z**3,H=3*v*T**2,pe=3*E*L**2,_e=3*y*z**2,P=6*v**2*T,j=6*E**2*L,A=6*y**2*z,Q=Pt(s[0],[q,W,oe])-1,Ie=Pt(s[0],[H,pe,_e]),ae=Pt(s[0],[P,j,A]),xe=Ie/(Ie*Ie-.5*Q*ae),se=-Q*xe,Ae=Pt(s[1],[q,W,oe])-1,G=Pt(s[1],[H,pe,_e]),U=Pt(s[1],[P,j,A]),Se=G/(G*G-.5*Ae*U),ge=-Ae*Se,he=Pt(s[2],[q,W,oe])-1,Ye=Pt(s[2],[H,pe,_e]),Et=Pt(s[2],[P,j,A]),Ne=Ye/(Ye*Ye-.5*he*Et),Ge=-he*Ne;se=xe>=0?se:ol,ge=Se>=0?ge:ol,Ge=Ne>=0?Ge:ol,u+=Math.min(se,Math.min(ge,Ge))}return u}function Vd(e,t,r){let[o,a,s]=e,c=ua(a,s,t,r),h=$g(a,s,o,1,o,t,r,c),u=sl(c),f=h/Math.min(o*u[0],(1-o)*u[1]),p=Pg(a,s),b=o*p[0],w=(1-o)*p[1],m=.9*f*Math.sqrt(Math.sqrt(1/(1/b**4+1/w**4)));return b=o*.4,w=(1-o)*.8,[Math.sqrt(1/(1/b**2+1/w**2)),m,h]}function zg(e,t,r,o){let a,s,c,h,u,f,p,b;Pt(o[0][0],[e,t])>1?([a,s,c,h,u]=o[0][1],[f,p,b]=r[0]):Pt(o[1][0],[e,t])>1?([a,s,c,h,u]=o[1][1],[f,p,b]=r[1]):([a,s,c,h,u]=o[2][1],[f,p,b]=r[2]);let w=a+s*e+c*t+h*e**2+u*e*t,m=Pt(ur[0].slice(1),[e,t]),v=Pt(ur[1].slice(1),[e,t]),E=Pt(ur[2].slice(1),[e,t]),y=1+w*m,S=1+w*v,x=1+w*E,T=y**3,L=S**3,z=x**3,q=3*m*y**2,W=3*v*S**2,oe=3*E*x**2,H=6*m**2*y,pe=6*v**2*S,_e=6*E**2*x,P=f*T+p*L+b*z,j=f*q+p*W+b*oe,A=f*H+p*pe+b*_e;return w=w-P*j/(j**2-.5*P*A),w}function Ng(e,t,r){let[o,a,s]=e,c=fi(s),h=null,u=null;if(o=bn(o)/360,c!==0&&c!==1&&a!==0){let f=Math.cos(hi*o),p=Math.sin(hi*o),[b,w,m]=Vd([c,f,p],t,r),v=.8,E=1.25,y,S,x,T;a<v?(y=E*a,S=0,x=v*b,T=1-x/w):(y=5*(a-.8),S=w,x=.2*w**2*1.25**2/b,T=1-x/(m-w));let L=S+y*x/(1-T*y);h=L*f,u=L*p}return[c,h,u]}function Dg(e,t,r){let o=1e-7,a=1e-4,s=e[0],c=0,h=ao(s),u=Math.sqrt(e[1]**2+e[2]**2),f=.5+Math.atan2(-e[2],-e[1])/hi;if(h!==0&&h!==1&&u!==0){let[b,w,m]=Vd([s,e[1]/u,e[2]/u],t,r),v=.8,E=1.25,y,S,x,T;u<w?(S=v*b,x=1-S/w,T=u/(S+x*u),c=T*v):(y=w,S=.2*w**2*E**2/b,x=1-S/(m-w),T=(u-y)/(S+x*(u-y)),c=v+.2*T)}const p=Math.abs(c)<a;return p||h===0||Math.abs(1-h)<o?(f=null,p||(c=0)):f=bn(f*360),[f,c,h]}var Bg=new ke({id:"okhsl",name:"Okhsl",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,1],name:"Saturation"},l:{range:[0,1],name:"Lightness"}},base:Ln,gamutSpace:"self",fromBase(e){return Dg(e,la,ca)},toBase(e){return Ng(e,la,ca)},formats:{color:{id:"--okhsl",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}}),Zd=new ke({id:"oklrab",name:"Oklrab",coords:{l:{refRange:[0,1],name:"Lightness"},a:{refRange:[-.4,.4]},b:{refRange:[-.4,.4]}},white:"D65",base:Ln,fromBase(e){return[ao(e[0]),e[1],e[2]]},toBase(e){return[fi(e[0]),e[1],e[2]]},formats:{color:{coords:["<percentage> | <number>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}}),Fg=new ke({id:"oklrch",name:"Oklrch",coords:{l:{refRange:[0,1],name:"Lightness"},c:{refRange:[0,.4],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},white:"D65",base:Zd,fromBase:sn.fromBase,toBase:sn.toBase,formats:{color:{coords:["<percentage> | <number>","<number> | <percentage>[0,1]","<number> | <angle>"]}}});function Hg(e,t,r){let[o,a,s]=e;o=bn(o)/360;let c=fi(s),h=null,u=null;if(c!==0&&a!==0){let f=Math.cos(hi*o),p=Math.sin(hi*o),[b,w]=sl(ua(f,p,t,r)),m=.5,v=1-m/b,E=1-a*m/(m+w-w*v*a),y=a*w*m/(m+w-w*v*a);c=s*E;let S=s*y,x=fi(E),T=y*x/E,L=fi(c);S=S*L/c,c=L;let[z,q,W]=ll([x,f*T,p*T],t),oe=yt(1/Math.max(Math.max(z,q),Math.max(W,0)),1/3);c=c*oe,S=S*oe,h=S*f,u=S*p}return[c,h,u]}function Gg(e,t,r){let o=1e-4,a=e[0],s=0,c=ao(a),h=Math.sqrt(e[1]**2+e[2]**2),u=.5+Math.atan2(-e[2],-e[1])/hi;if(a!==0&&a!==1&&h!==0){let f=e[1]/h,p=e[2]/h,[b,w]=sl(ua(f,p,t,r)),m=.5,v=1-m/b,E=w/(h+a*w),y=E*a,S=E*h,x=fi(y),T=S*x/y,[L,z,q]=ll([x,f*T,p*T],t),W=yt(1/Math.max(Math.max(L,z),Math.max(q,0)),1/3);a=a/W,h=h/W,h=h*ao(a)/a,a=ao(a),c=a/y,s=(m+w)*S/(w*m+w*v*S)}return Math.abs(s)<o||c===0?u=null:u=bn(u*360),[u,s,c]}var Ug=new ke({id:"okhsv",name:"Okhsv",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,1],name:"Saturation"},v:{range:[0,1],name:"Value"}},base:Ln,gamutSpace:"self",fromBase(e){return Gg(e,la,ca)},toBase(e){return Hg(e,la,ca)},formats:{color:{id:"--okhsv",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}}),qd=Ht.D65,Wg=216/24389,jd=24389/27,[Kd,Yd]=aa({space:Rt,coords:qd}),Xd=new ke({id:"luv",name:"Luv",coords:{l:{refRange:[0,100],name:"Lightness"},u:{refRange:[-215,215]},v:{refRange:[-215,215]}},white:qd,base:Rt,fromBase(e){let t=[_t(e[0]),_t(e[1]),_t(e[2])],r=t[1],[o,a]=aa({space:Rt,coords:t});if(!Number.isFinite(o)||!Number.isFinite(a))return[0,0,0];let s=r<=Wg?jd*r:116*Math.cbrt(r)-16;return[s,13*s*(o-Kd),13*s*(a-Yd)]},toBase(e){let[t,r,o]=e;if(t===0||je(t))return[0,0,0];r=_t(r),o=_t(o);let a=r/(13*t)+Kd,s=o/(13*t)+Yd,c=t<=8?t/jd:Math.pow((t+16)/116,3);return[c*(9*a/(4*s)),c,c*((12-3*a-20*s)/(4*s))]},formats:{color:{id:"--luv",coords:["<number> | <percentage>","<number> | <percentage>","<number> | <percentage>"]}}}),cl=new ke({id:"lchuv",name:"LChuv",coords:{l:{refRange:[0,100],name:"Lightness"},c:{refRange:[0,220],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:Xd,fromBase:sn.fromBase,toBase:sn.toBase,formats:{color:{id:"--lchuv",coords:["<number> | <percentage>","<number> | <percentage>","<number> | <angle>"]}}}),Vg=216/24389,Zg=24389/27,Jd=Mt[0][0],Qd=Mt[0][1],ul=Mt[0][2],e0=Mt[1][0],t0=Mt[1][1],dl=Mt[1][2],n0=Mt[2][0],r0=Mt[2][1],hl=Mt[2][2];function pi(e,t,r){const o=t/(Math.sin(r)-e*Math.cos(r));return o<0?1/0:o}function da(e){const t=Math.pow(e+16,3)/1560896,r=t>Vg?t:e/Zg,o=r*(284517*Jd-94839*ul),a=r*(838422*ul+769860*Qd+731718*Jd),s=r*(632260*ul-126452*Qd),c=r*(284517*e0-94839*dl),h=r*(838422*dl+769860*t0+731718*e0),u=r*(632260*dl-126452*t0),f=r*(284517*n0-94839*hl),p=r*(838422*hl+769860*r0+731718*n0),b=r*(632260*hl-126452*r0);return{r0s:o/s,r0i:a*e/s,r1s:o/(s+126452),r1i:(a-769860)*e/(s+126452),g0s:c/u,g0i:h*e/u,g1s:c/(u+126452),g1i:(h-769860)*e/(u+126452),b0s:f/b,b0i:p*e/b,b1s:f/(b+126452),b1i:(p-769860)*e/(b+126452)}}function i0(e,t){const r=t/360*Math.PI*2,o=pi(e.r0s,e.r0i,r),a=pi(e.r1s,e.r1i,r),s=pi(e.g0s,e.g0i,r),c=pi(e.g1s,e.g1i,r),h=pi(e.b0s,e.b0i,r),u=pi(e.b1s,e.b1i,r);return Math.min(o,a,s,c,h,u)}var qg=new ke({id:"hsluv",name:"HSLuv",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:cl,gamutSpace:Br,fromBase(e){let[t,r,o]=[_t(e[0]),_t(e[1]),_t(e[2])],a;return t>99.9999999?(a=0,t=100):t<1e-8?(a=0,t=0):a=r/i0(da(t),o)*100,[o,a,t]},toBase(e){let[t,r,o]=[_t(e[0]),_t(e[1]),_t(e[2])],a;return o>99.9999999?(o=100,a=0):o<1e-8?(o=0,a=0):a=i0(da(o),t)/100*r,[o,a,t]},formats:{color:{id:"--hsluv",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}});Mt[0][0],Mt[0][1],Mt[0][2],Mt[1][0],Mt[1][1],Mt[1][2],Mt[2][0],Mt[2][1],Mt[2][2];function gi(e,t){return Math.abs(t)/Math.sqrt(Math.pow(e,2)+1)}function o0(e){let t=gi(e.r0s,e.r0i),r=gi(e.r1s,e.r1i),o=gi(e.g0s,e.g0i),a=gi(e.g1s,e.g1i),s=gi(e.b0s,e.b0i),c=gi(e.b1s,e.b1i);return Math.min(t,r,o,a,s,c)}var jg=new ke({id:"hpluv",name:"HPLuv",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:cl,gamutSpace:"self",fromBase(e){let[t,r,o]=[_t(e[0]),_t(e[1]),_t(e[2])],a;return t>99.9999999?(a=0,t=100):t<1e-8?(a=0,t=0):a=r/o0(da(t))*100,[o,a,t]},toBase(e){let[t,r,o]=[_t(e[0]),_t(e[1]),_t(e[2])],a;return o>99.9999999?(o=100,a=0):o<1e-8?(o=0,a=0):a=o0(da(o))/100*r,[o,a,t]},formats:{color:{id:"--hpluv",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}}),fl=new Nt({id:"rec2100-linear",name:"Linear REC.2100",white:"D65",toBase:to.toBase,fromBase:to.fromBase}),a0=203,s0=2610/2**14,Kg=2**14/2610,Yg=2523/2**5,l0=2**5/2523,c0=3424/2**12,u0=2413/2**7,d0=2392/2**7,Xg=new Nt({id:"rec2100pq",cssId:"rec2100-pq",name:"REC.2100-PQ",base:fl,toBase(e){return e.map(function(t){return(Math.max(t**l0-c0,0)/(u0-d0*t**l0))**Kg*1e4/a0})},fromBase(e){return e.map(function(t){let r=Math.max(t*a0/1e4,0);return((c0+u0*r**s0)/(1+d0*r**s0))**Yg})}}),h0=.17883277,f0=.28466892,p0=.55991073,pl=3.7743,Jg=new Nt({id:"rec2100hlg",cssId:"rec2100-hlg",name:"REC.2100-HLG",referred:"scene",base:fl,toBase(e){return e.map(function(t){return t<=.5?t**2/3*pl:(Math.exp((t-p0)/h0)+f0)/12*pl})},fromBase(e){return e.map(function(t){return t/=pl,t<=1/12?yt(3*t,.5):h0*Math.log(12*t-f0)+p0})}}),g0={};cr.add("chromatic-adaptation-start",e=>{e.options.method&&(e.M=m0(e.W1,e.W2,e.options.method))}),cr.add("chromatic-adaptation-end",e=>{e.M||(e.M=m0(e.W1,e.W2,e.options.method))});function ha({id:e,toCone_M:t,fromCone_M:r}){g0[e]=arguments[0]}function m0(e,t,r="Bradford"){let o=g0[r],[a,s,c]=Yi(o.toCone_M,e),[h,u,f]=Yi(o.toCone_M,t),p=Yi([[h/a,0,0],[0,u/s,0],[0,0,f/c]],o.toCone_M);return Yi(o.fromCone_M,p)}ha({id:"von Kries",toCone_M:[[.40024,.7076,-.08081],[-.2263,1.16532,.0457],[0,0,.91822]],fromCone_M:[[1.8599363874558397,-1.1293816185800916,.21989740959619328],[.3611914362417676,.6388124632850422,-6370596838649899e-21],[0,0,1.0890636230968613]]}),ha({id:"Bradford",toCone_M:[[.8951,.2664,-.1614],[-.7502,1.7135,.0367],[.0389,-.0685,1.0296]],fromCone_M:[[.9869929054667121,-.14705425642099013,.15996265166373122],[.4323052697233945,.5183602715367774,.049291228212855594],[-.00852866457517732,.04004282165408486,.96848669578755]]}),ha({id:"CAT02",toCone_M:[[.7328,.4296,-.1624],[-.7036,1.6975,.0061],[.003,.0136,.9834]],fromCone_M:[[1.0961238208355142,-.27886900021828726,.18274517938277307],[.4543690419753592,.4735331543074117,.07209780371722911],[-.009627608738429355,-.00569803121611342,1.0153256399545427]]}),ha({id:"CAT16",toCone_M:[[.401288,.650173,-.051461],[-.250268,1.204414,.045854],[-.002079,.048952,.953127]],fromCone_M:[[1.862067855087233,-1.0112546305316845,.14918677544445172],[.3875265432361372,.6214474419314753,-.008973985167612521],[-.01584149884933386,-.03412293802851557,1.0499644368778496]]}),Object.assign(Ht,{A:[1.0985,1,.35585],C:[.98074,1,1.18232],D55:[.95682,1,.92149],D75:[.94972,1,1.22638],E:[1,1,1],F2:[.99186,1,.67393],F7:[.95041,1,1.08747],F11:[1.00962,1,.6435]}),Ht.ACES=[.32168/.33767,1,.34065/.33767];var v0=new Nt({id:"acescg",cssId:"--acescg",name:"ACEScg",coords:{r:{range:[0,65504],name:"Red"},g:{range:[0,65504],name:"Green"},b:{range:[0,65504],name:"Blue"}},referred:"scene",white:Ht.ACES,toXYZ_M:[[.6624541811085053,.13400420645643313,.1561876870049078],[.27222871678091454,.6740817658111484,.05368951740793705],[-.005574649490394108,.004060733528982826,1.0103391003129971]],fromXYZ_M:[[1.6410233796943257,-.32480329418479,-.23642469523761225],[-.6636628587229829,1.6153315916573379,.016756347685530137],[.011721894328375376,-.008284441996237409,.9883948585390215]]}),fa=2**-16,gl=-.35828683,pa=(Math.log2(65504)+9.72)/17.52,Qg=new Nt({id:"acescc",cssId:"--acescc",name:"ACEScc",coords:{r:{range:[gl,pa],name:"Red"},g:{range:[gl,pa],name:"Green"},b:{range:[gl,pa],name:"Blue"}},referred:"scene",base:v0,toBase(e){const t=-.3013698630136986;return e.map(function(r){return r<=t?(2**(r*17.52-9.72)-fa)*2:r<pa?2**(r*17.52-9.72):65504})},fromBase(e){return e.map(function(t){return t<=0?(Math.log2(fa)+9.72)/17.52:t<fa?(Math.log2(fa+t*.5)+9.72)/17.52:(Math.log2(t)+9.72)/17.52})}}),b0=Object.freeze({__proto__:null,A98RGB:Ig,A98RGB_Linear:Gd,ACEScc:Qg,ACEScg:v0,CAM16_JMh:Fp,HCT:Qi,HPLuv:jg,HSL:Mg,HSLuv:qg,HSV:Hd,HWB:xg,ICTCP:Ys,JzCzHz:Ks,Jzazbz:id,LCH:sn,LCHuv:cl,Lab:an,Lab_D65:nl,Luv:Xd,OKLCH:Rg,OKLab:Ln,OKLrCH:Fg,OKLrab:Zd,Okhsl:Bg,Okhsv:Ug,P3:Cd,P3_Linear:Ad,ProPhoto:Tg,ProPhoto_Linear:Ud,REC_2020:Ed,REC_2020_Linear:to,REC_2020_Scene_Referred:Lg,REC_2100_HLG:Jg,REC_2100_Linear:fl,REC_2100_PQ:Xg,XYZ_ABS_D65:qs,XYZ_D50:Ws,XYZ_D65:Rt,sRGB:Br,sRGB_Linear:Sd}),ct=class nn{constructor(...t){let r;if(t.length===1){let c={};typeof t[0]=="object"&&Object.getPrototypeOf(t[0]).constructor===Object&&(t[0]={...t[0]}),r=Le(t[0],{parseMeta:c}),c.format&&(this.parseMeta=c)}let o,a,s;r?(o=r.space||r.spaceId,a=r.coords,s=r.alpha):[o,a,s]=t,Object.defineProperty(this,"space",{value:ke.get(o),writable:!1,enumerable:!0,configurable:!0}),this.coords=a?a.slice():[0,0,0],this.alpha=je(s)?s:s===void 0?1:Ko(0,s,1);for(let c in this.space.coords)Object.defineProperty(this,c,{get:()=>this.get(c),set:h=>this.set(c,h)})}get spaceId(){return this.space.id}clone(){return new nn(this.space,this.coords,this.alpha)}toJSON(){return{spaceId:this.spaceId,coords:this.coords,alpha:this.alpha}}display(...t){let r=Jp(this,...t);return r.color=new nn(r.color),r}static get(t,...r){return si(t,this)?t:new nn(t,...r)}static try(t,r){if(si(t,this))return t;let o=Uu(t,r);return o?new nn(o):null}static defineFunction(t,r,o=r){let{instance:a=!0,returns:s}=o,c=function(...h){let u=r(...h);if(s==="color")u=nn.get(u);else if(s==="function<color>"){let f=u;u=function(...p){let b=f(...p);return nn.get(b)},Object.assign(u,f)}else s==="array<color>"&&(u=u.map(f=>nn.get(f)));return u};t in nn||(nn[t]=c),a&&(nn.prototype[t]=function(...h){return c(this,...h)})}static defineFunctions(t){for(let r in t)nn.defineFunction(r,t[r],t[r])}static extend(t){if(t.register)t.register(nn);else for(let r in t)nn.defineFunction(r,t[r])}};ct.defineFunctions({get:on,getAll:Ji,set:qn,setAll:Us,to:nt,equals:eg,inGamut:Nr,toGamut:dr,distance:Yu,deltas:Qp,toString:eo}),Object.assign(ct,{util:np,hooks:cr,WHITES:Ht,Space:ke,spaces:ke.registry,parse:Hu,defaults:rn});for(let e of Object.keys(b0))ke.register(b0[e]);for(let e in ke.registry)ml(e,ke.registry[e]);cr.add("colorspace-init-end",e=>{ml(e.id,e),e.aliases?.forEach(t=>{ml(t,e)})});function ml(e,t){let r=e.replace(/-/g,"_");Object.defineProperty(ct.prototype,r,{get(){let o=this.getAll(e);if(typeof Proxy>"u")return o;let a=new Proxy(o,{has:(s,c)=>{try{return ke.resolveCoord([t,c]),!0}catch{}return Reflect.has(s,c)},get:(s,c,h)=>{if(c&&typeof c!="symbol"&&!(c in s)&&c in a){let{index:u}=ke.resolveCoord([t,c]);if(u>=0)return s[u]}return Reflect.get(s,c,h)},set:(s,c,h,u)=>{if(c&&typeof c!="symbol"&&!(c in s)||Number(c)>=0){let{index:f}=ke.resolveCoord([t,c]);if(f>=0)return s[f]=h,this.setAll(e,s),!0}return Reflect.set(s,c,h,u)}});return a},set(o){this.setAll(e,o)},configurable:!0,enumerable:!0})}ct.extend(ui),ct.extend({deltaE:no}),Object.assign(ct,{deltaEMethods:ui}),ct.extend(Eg),ct.extend({contrast:_g}),ct.extend(kg),ct.extend(ng),ct.extend(Sg),ct.extend(oa);var vl={navy:"#001f3f",darkblue:"#1e4f7a",blue:"#1A2F4B",darkgreen:"#062925",green:"#1A3636",grass:"#1B3C53",teal:"#044A42",darkpurple:"#1B0044",purple:"#363062",grape:"#31326F",maroon:"#44000D"},kt={dark:{50:"#C1C2C5",100:"#A6A7AB",200:"#909296",300:"#5c5f66",400:"#373A40",500:"#2C2E33",600:"#25262b",700:"#1A1B1E",800:"#141517",900:"#101113",950:"#000000"},slate:{50:"oklch(98.4% 0.003 247.858)",100:"oklch(96.8% 0.007 247.896)",200:"oklch(92.9% 0.013 255.508)",300:"oklch(86.9% 0.022 252.894)",400:"oklch(70.4% 0.04 256.788)",500:"oklch(55.4% 0.046 257.417)",600:"oklch(44.6% 0.043 257.281)",700:"oklch(37.2% 0.044 257.287)",800:"oklch(27.9% 0.041 260.031)",900:"oklch(20.8% 0.042 265.755)",950:"oklch(12.9% 0.042 264.695)"},gray:{50:"oklch(98.5% 0.002 247.839)",100:"oklch(96.7% 0.003 264.542)",200:"oklch(92.8% 0.006 264.531)",300:"oklch(87.2% 0.01 258.338)",400:"oklch(70.7% 0.022 261.325)",500:"oklch(55.1% 0.027 264.364)",600:"oklch(44.6% 0.03 256.802)",700:"oklch(37.3% 0.034 259.733)",800:"oklch(27.8% 0.033 256.848)",900:"oklch(21% 0.034 264.665)",950:"oklch(13% 0.028 261.692)"},zinc:{50:"oklch(98.5% 0 0)",100:"oklch(96.7% 0.001 286.375)",200:"oklch(92% 0.004 286.32)",300:"oklch(87.1% 0.006 286.286)",400:"oklch(70.5% 0.015 286.067)",500:"oklch(55.2% 0.016 285.938)",600:"oklch(44.2% 0.017 285.786)",700:"oklch(37% 0.013 285.805)",800:"oklch(27.4% 0.006 286.033)",900:"oklch(21% 0.006 285.885)",950:"oklch(14.1% 0.005 285.823)"},neutral:{50:"oklch(98.5% 0 0)",100:"oklch(97% 0 0)",200:"oklch(92.2% 0 0)",300:"oklch(87% 0 0)",400:"oklch(70.8% 0 0)",500:"oklch(55.6% 0 0)",600:"oklch(43.9% 0 0)",700:"oklch(37.1% 0 0)",800:"oklch(26.9% 0 0)",900:"oklch(20.5% 0 0)",950:"oklch(14.5% 0 0)"},stone:{50:"oklch(98.5% 0.001 106.423)",100:"oklch(97% 0.001 106.424)",200:"oklch(92.3% 0.003 48.717)",300:"oklch(86.9% 0.005 56.366)",400:"oklch(70.9% 0.01 56.259)",500:"oklch(55.3% 0.013 58.071)",600:"oklch(44.4% 0.011 73.639)",700:"oklch(37.4% 0.01 67.558)",800:"oklch(26.8% 0.007 34.298)",900:"oklch(21.6% 0.006 56.043)",950:"oklch(14.7% 0.004 49.25)"},red:{50:"oklch(97.1% 0.013 17.38)",100:"oklch(93.6% 0.032 17.717)",200:"oklch(88.5% 0.062 18.334)",300:"oklch(80.8% 0.114 19.571)",400:"oklch(70.4% 0.191 22.216)",500:"oklch(63.7% 0.237 25.331)",600:"oklch(57.7% 0.245 27.325)",700:"oklch(50.5% 0.213 27.518)",800:"oklch(44.4% 0.177 26.899)",900:"oklch(39.6% 0.141 25.723)",950:"oklch(25.8% 0.092 26.042)"},orange:{50:"oklch(98% 0.016 73.684)",100:"oklch(95.4% 0.038 75.164)",200:"oklch(90.1% 0.076 70.697)",300:"oklch(83.7% 0.128 66.29)",400:"oklch(75% 0.183 55.934)",500:"oklch(70.5% 0.213 47.604)",600:"oklch(64.6% 0.222 41.116)",700:"oklch(55.3% 0.195 38.402)",800:"oklch(47% 0.157 37.304)",900:"oklch(40.8% 0.123 38.172)",950:"oklch(26.6% 0.079 36.259)"},amber:{50:"oklch(98.7% 0.022 95.277)",100:"oklch(96.2% 0.059 95.617)",200:"oklch(92.4% 0.12 95.746)",300:"oklch(87.9% 0.169 91.605)",400:"oklch(82.8% 0.189 84.429)",500:"oklch(76.9% 0.188 70.08)",600:"oklch(66.6% 0.179 58.318)",700:"oklch(55.5% 0.163 48.998)",800:"oklch(47.3% 0.137 46.201)",900:"oklch(41.4% 0.112 45.904)",950:"oklch(27.9% 0.077 45.635)"},yellow:{50:"oklch(98.7% 0.026 102.212)",100:"oklch(97.3% 0.071 103.193)",200:"oklch(94.5% 0.129 101.54)",300:"oklch(90.5% 0.182 98.111)",400:"oklch(85.2% 0.199 91.936)",500:"oklch(79.5% 0.184 86.047)",600:"oklch(68.1% 0.162 75.834)",700:"oklch(55.4% 0.135 66.442)",800:"oklch(47.6% 0.114 61.907)",900:"oklch(42.1% 0.095 57.708)",950:"oklch(28.6% 0.066 53.813)"},lime:{50:"oklch(98.6% 0.031 120.757)",100:"oklch(96.7% 0.067 122.328)",200:"oklch(93.8% 0.127 124.321)",300:"oklch(89.7% 0.196 126.665)",400:"oklch(84.1% 0.238 128.85)",500:"oklch(76.8% 0.233 130.85)",600:"oklch(64.8% 0.2 131.684)",700:"oklch(53.2% 0.157 131.589)",800:"oklch(45.3% 0.124 130.933)",900:"oklch(40.5% 0.101 131.063)",950:"oklch(27.4% 0.072 132.109)"},green:{50:"oklch(98.2% 0.018 155.826)",100:"oklch(96.2% 0.044 156.743)",200:"oklch(92.5% 0.084 155.995)",300:"oklch(87.1% 0.15 154.449)",400:"oklch(79.2% 0.209 151.711)",500:"oklch(72.3% 0.219 149.579)",600:"oklch(62.7% 0.194 149.214)",700:"oklch(52.7% 0.154 150.069)",800:"oklch(44.8% 0.119 151.328)",900:"oklch(39.3% 0.095 152.535)",950:"oklch(26.6% 0.065 152.934)"},emerald:{50:"oklch(97.9% 0.021 166.113)",100:"oklch(95% 0.052 163.051)",200:"oklch(90.5% 0.093 164.15)",300:"oklch(84.5% 0.143 164.978)",400:"oklch(76.5% 0.177 163.223)",500:"oklch(69.6% 0.17 162.48)",600:"oklch(59.6% 0.145 163.225)",700:"oklch(50.8% 0.118 165.612)",800:"oklch(43.2% 0.095 166.913)",900:"oklch(37.8% 0.077 168.94)",950:"oklch(26.2% 0.051 172.552)"},teal:{50:"oklch(98.4% 0.014 180.72)",100:"oklch(95.3% 0.051 180.801)",200:"oklch(91% 0.096 180.426)",300:"oklch(85.5% 0.138 181.071)",400:"oklch(77.7% 0.152 181.912)",500:"oklch(70.4% 0.14 182.503)",600:"oklch(60% 0.118 184.704)",700:"oklch(51.1% 0.096 186.391)",800:"oklch(43.7% 0.078 188.216)",900:"oklch(38.6% 0.063 188.416)",950:"oklch(27.7% 0.046 192.524)"},cyan:{50:"oklch(98.4% 0.019 200.873)",100:"oklch(95.6% 0.045 203.388)",200:"oklch(91.7% 0.08 205.041)",300:"oklch(86.5% 0.127 207.078)",400:"oklch(78.9% 0.154 211.53)",500:"oklch(71.5% 0.143 215.221)",600:"oklch(60.9% 0.126 221.723)",700:"oklch(52% 0.105 223.128)",800:"oklch(45% 0.085 224.283)",900:"oklch(39.8% 0.07 227.392)",950:"oklch(30.2% 0.056 229.695)"},sky:{50:"oklch(97.7% 0.013 236.62)",100:"oklch(95.1% 0.026 236.824)",200:"oklch(90.1% 0.058 230.902)",300:"oklch(82.8% 0.111 230.318)",400:"oklch(74.6% 0.16 232.661)",500:"oklch(68.5% 0.169 237.323)",600:"oklch(58.8% 0.158 241.966)",700:"oklch(50% 0.134 242.749)",800:"oklch(44.3% 0.11 240.79)",900:"oklch(39.1% 0.09 240.876)",950:"oklch(29.3% 0.066 243.157)"},blue:{50:"oklch(97% 0.014 254.604)",100:"oklch(93.2% 0.032 255.585)",200:"oklch(88.2% 0.059 254.128)",300:"oklch(80.9% 0.105 251.813)",400:"oklch(70.7% 0.165 254.624)",500:"oklch(62.3% 0.214 259.815)",600:"oklch(54.6% 0.245 262.881)",700:"oklch(48.8% 0.243 264.376)",800:"oklch(42.4% 0.199 265.638)",900:"oklch(37.9% 0.146 265.522)",950:"oklch(28.2% 0.091 267.935)"},indigo:{50:"oklch(96.2% 0.018 272.314)",100:"oklch(93% 0.034 272.788)",200:"oklch(87% 0.065 274.039)",300:"oklch(78.5% 0.115 274.713)",400:"oklch(67.3% 0.182 276.935)",500:"oklch(58.5% 0.233 277.117)",600:"oklch(51.1% 0.262 276.966)",700:"oklch(45.7% 0.24 277.023)",800:"oklch(39.8% 0.195 277.366)",900:"oklch(35.9% 0.144 278.697)",950:"oklch(25.7% 0.09 281.288)"},violet:{50:"oklch(96.9% 0.016 293.756)",100:"oklch(94.3% 0.029 294.588)",200:"oklch(89.4% 0.057 293.283)",300:"oklch(81.1% 0.111 293.571)",400:"oklch(70.2% 0.183 293.541)",500:"oklch(60.6% 0.25 292.717)",600:"oklch(54.1% 0.281 293.009)",700:"oklch(49.1% 0.27 292.581)",800:"oklch(43.2% 0.232 292.759)",900:"oklch(38% 0.189 293.745)",950:"oklch(28.3% 0.141 291.089)"},purple:{50:"oklch(97.7% 0.014 308.299)",100:"oklch(94.6% 0.033 307.174)",200:"oklch(90.2% 0.063 306.703)",300:"oklch(82.7% 0.119 306.383)",400:"oklch(71.4% 0.203 305.504)",500:"oklch(62.7% 0.265 303.9)",600:"oklch(55.8% 0.288 302.321)",700:"oklch(49.6% 0.265 301.924)",800:"oklch(43.8% 0.218 303.724)",900:"oklch(38.1% 0.176 304.987)",950:"oklch(29.1% 0.149 302.717)"},fuchsia:{50:"oklch(97.7% 0.017 320.058)",100:"oklch(95.2% 0.037 318.852)",200:"oklch(90.3% 0.076 319.62)",300:"oklch(83.3% 0.145 321.434)",400:"oklch(74% 0.238 322.16)",500:"oklch(66.7% 0.295 322.15)",600:"oklch(59.1% 0.293 322.896)",700:"oklch(51.8% 0.253 323.949)",800:"oklch(45.2% 0.211 324.591)",900:"oklch(40.1% 0.17 325.612)",950:"oklch(29.3% 0.136 325.661)"},pink:{50:"oklch(97.1% 0.014 343.198)",100:"oklch(94.8% 0.028 342.258)",200:"oklch(89.9% 0.061 343.231)",300:"oklch(82.3% 0.12 346.018)",400:"oklch(71.8% 0.202 349.761)",500:"oklch(65.6% 0.241 354.308)",600:"oklch(59.2% 0.249 0.584)",700:"oklch(52.5% 0.223 3.958)",800:"oklch(45.9% 0.187 3.815)",900:"oklch(40.8% 0.153 2.432)",950:"oklch(28.4% 0.109 3.907)"},rose:{50:"oklch(96.9% 0.015 12.422)",100:"oklch(94.1% 0.03 12.58)",200:"oklch(89.2% 0.058 10.001)",300:"oklch(81% 0.117 11.638)",400:"oklch(71.2% 0.194 13.428)",500:"oklch(64.5% 0.246 16.439)",600:"oklch(58.6% 0.253 17.585)",700:"oklch(51.4% 0.222 16.935)",800:"oklch(45.5% 0.188 13.697)",900:"oklch(41% 0.159 10.272)",950:"oklch(27.1% 0.105 12.094)"}};function em(e){try{ct.get(e)}catch{return!0}return ct.contrast(e,"white","Lstar")>ct.contrast(e,"black","Lstar")}function mi(e){return em(e)?"#FFFFFF":"#000000"}function so(e){const t=e.replace(/[\t\n\r]/gim,"").replace(/\s\s+/g," ");return`data:image/svg+xml;charset=UTF-8,${encodeURIComponent(t).replace(/\(/g,"%28").replace(/\)/g,"%29")}`}var ga=e=>e%100===0?15:e%50===0?10:e%25===0?5:2.5;function tm(e,t,r,o){let a="";for(let s=0;s<=e;s+=5){const c=oi` <line
      x1="${s}"
      y1="0"
      x2="${s}"
      y2="${ga(s)}"
    />`;if(a+=c,s!==0&&s%50===0){const h=oi` <text
        x="${s}"
        y="25"
        text-anchor="middle"
        font-size="${ga(s)}px"
      >
        ${s}
      </text>`;a+=h}}for(let s=0;s<=t;s+=5){const c=oi` <line
      x1="0"
      y1="${s}"
      x2="${ga(s)}"
      y2="${s}"
    />`;if(a+=c,s!==0&&s%50===0){const h=oi` <text
        x="25"
        y="${s}"
        text-anchor="middle"
        dominant-baseline="middle"
        font-size="${ga(s)}px"
      >
        ${s}
      </text>`;a+=h}}return oi` <svg
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
  </svg>`}function vi(e,t,r="#0F1C3F",o="#ECEAD9"){return so(tm(e,t,r,o))}var w0=Object.values(kt).map(e=>e[900]),_0=[400,600,900,1200,1400,1600,1970],y0=[600,800,1e3,1200,1400,2e3,2600];function nm(){const e=Math.floor(Math.random()*_0.length),t=Math.floor(Math.random()*y0.length),r=Math.floor(Math.random()*w0.length);return vi(_0[e],y0[t],w0[r])}var bl={name:"Local Files",url:/(file:\/\/\/.+(index)?.html)/,homepage:"/index.html?raw=1",language:[ze.RAW],category:Be.MANGA,run(){const e=parseInt(/\d+/.exec(window.location.search)?.toString()??"5",10);return{title:"Placeholder Manga Loaded",series:"?reload",pages:e,begin:1,prev:"?pages=50",next:"?pages=1",listImages:[vi(1970,1400,"#2D1657"),vi(985,1400,"#152C55"),vi(985,1400,"#7A1420"),vi(985,1400,"#0F5B30"),vi(1970,1400,"#806D15"),...Array(e).fill(0).map(nm)]}}},rm=["image/apng","image/bmp","image/gif","image/jpeg","image/pjpeg","image/png","image/svg+xml","image/tiff","image/webp","image/x-icon"],im=/.(png|jpg|jpeg|gif|bmp|webp)$/i,k0=(e,t)=>e.localeCompare(t,navigator.languages[0]||navigator.language,{numeric:!0,ignorePunctuation:!0});function om(e){return rm.includes(e.type)}var am=e=>{const t=new Blob([new Uint8Array(e).buffer]);return URL.createObjectURL(t)};async function sm(e){const t=await Pu.default.loadAsync(e),r=t.filter((o,a)=>!a.dir&&im.test(a.name)).sort((o,a)=>k0(o.name,a.name));return Ee("Files in zip:",t.files),Promise.all(r.map(o=>o.async("arraybuffer").then(am)))}function E0(e,t){gh([{...bl,start:"always"},{title:e,series:"?reload",pages:t.length,begin:1,prev:"#",next:"#",lazy:!1,listImages:t}]).then(()=>Ee("Page loaded"))}async function lm(e){const t=await sm(e);E0(typeof e=="string"?e:e.name,t)}function A0(e){const t=e.target,r=Array.from(t.files).filter(om).sort((o,a)=>k0(o.webkitRelativePath||o.name,a.webkitRelativePath||a.name));Ee("Local Files: ",r,r.map(o=>o.webkitRelativePath||o.name)),t.files?.[0]&&E0(t.files[0].webkitRelativePath.split("/")[0]||"Local Images",r.map(URL.createObjectURL))}function cm(){return bl.url.test(window.location.href)?(document.querySelector("#MangaOnlineViewer, #LocalTest")&&(document.querySelector("#LocalTest")?.setAttribute("style","display:none"),document.querySelector("#file")?.addEventListener("change",e=>{const t=e.target;t.files?.[0]&&lm(t.files[0])}),document.querySelector("#folder")?.addEventListener("change",A0),document.querySelector("#images")?.addEventListener("change",A0),Ee("Waiting for zip/images upload")),!0):!1}var ma=globalThis,wl=ma.ShadowRoot&&(ma.ShadyCSS===void 0||ma.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,_l=Symbol(),S0=new WeakMap,M0=class{constructor(e,t,r){if(this._$cssResult$=!0,r!==_l)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(wl&&e===void 0){const r=t!==void 0&&t.length===1;r&&(e=S0.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&S0.set(t,e))}return e}toString(){return this.cssText}},Kt=e=>new M0(typeof e=="string"?e:e+"",void 0,_l),$t=(e,...t)=>new M0(e.length===1?e[0]:t.reduce((r,o,a)=>r+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[a+1],e[0]),e,_l),um=(e,t)=>{if(wl)e.adoptedStyleSheets=t.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(const r of t){const o=document.createElement("style"),a=ma.litNonce;a!==void 0&&o.setAttribute("nonce",a),o.textContent=r.cssText,e.appendChild(o)}},x0=wl?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let r="";for(const o of t.cssRules)r+=o.cssText;return Kt(r)})(e):e,{is:dm,defineProperty:hm,getOwnPropertyDescriptor:fm,getOwnPropertyNames:pm,getOwnPropertySymbols:gm,getPrototypeOf:mm}=Object,va=globalThis,I0=va.trustedTypes,vm=I0?I0.emptyScript:"",bm=va.reactiveElementPolyfillSupport,lo=(e,t)=>e,ba={toAttribute(e,t){switch(t){case Boolean:e=e?vm:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},yl=(e,t)=>!dm(e,t),C0={attribute:!0,type:String,converter:ba,reflect:!1,useDefault:!1,hasChanged:yl};Symbol.metadata??=Symbol("metadata"),va.litPropertyMetadata??=new WeakMap;var bi=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=C0){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const r=Symbol(),o=this.getPropertyDescriptor(e,r,t);o!==void 0&&hm(this.prototype,e,o)}}static getPropertyDescriptor(e,t,r){const{get:o,set:a}=fm(this.prototype,e)??{get(){return this[t]},set(s){this[t]=s}};return{get:o,set(s){const c=o?.call(this);a?.call(this,s),this.requestUpdate(e,c,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??C0}static _$Ei(){if(this.hasOwnProperty(lo("elementProperties")))return;const e=mm(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(lo("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(lo("properties"))){const t=this.properties,r=[...pm(t),...gm(t)];for(const o of r)this.createProperty(o,t[o])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[r,o]of t)this.elementProperties.set(r,o)}this._$Eh=new Map;for(const[t,r]of this.elementProperties){const o=this._$Eu(t,r);o!==void 0&&this._$Eh.set(o,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const r=new Set(e.flat(1/0).reverse());for(const o of r)t.unshift(x0(o))}else e!==void 0&&t.push(x0(e));return t}static _$Eu(e,t){const r=t.attribute;return r===!1?void 0:typeof r=="string"?r:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const r of t.keys())this.hasOwnProperty(r)&&(e.set(r,this[r]),delete this[r]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return um(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,r){this._$AK(e,r)}_$ET(e,t){const r=this.constructor.elementProperties.get(e),o=this.constructor._$Eu(e,r);if(o!==void 0&&r.reflect===!0){const a=(r.converter?.toAttribute!==void 0?r.converter:ba).toAttribute(t,r.type);this._$Em=e,a==null?this.removeAttribute(o):this.setAttribute(o,a),this._$Em=null}}_$AK(e,t){const r=this.constructor,o=r._$Eh.get(e);if(o!==void 0&&this._$Em!==o){const a=r.getPropertyOptions(o),s=typeof a.converter=="function"?{fromAttribute:a.converter}:a.converter?.fromAttribute!==void 0?a.converter:ba;this._$Em=o;const c=s.fromAttribute(t,a.type);this[o]=c??this._$Ej?.get(o)??c,this._$Em=null}}requestUpdate(e,t,r,o=!1,a){if(e!==void 0){const s=this.constructor;if(o===!1&&(a=this[e]),r??=s.getPropertyOptions(e),!((r.hasChanged??yl)(a,t)||r.useDefault&&r.reflect&&a===this._$Ej?.get(e)&&!this.hasAttribute(s._$Eu(e,r))))return;this.C(e,t,r)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:r,reflect:o,wrapped:a},s){r&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,s??t??this[e]),a!==!0||s!==void 0)||(this._$AL.has(e)||(this.hasUpdated||r||(t=void 0),this._$AL.set(e,t)),o===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[o,a]of this._$Ep)this[o]=a;this._$Ep=void 0}const r=this.constructor.elementProperties;if(r.size>0)for(const[o,a]of r){const{wrapped:s}=a,c=this[o];s!==!0||this._$AL.has(o)||c===void 0||this.C(o,void 0,a,c)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(r=>r.hostUpdate?.()),this.update(t)):this._$EM()}catch(r){throw e=!1,this._$EM(),r}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(e){}firstUpdated(e){}};bi.elementStyles=[],bi.shadowRootOptions={mode:"open"},bi[lo("elementProperties")]=new Map,bi[lo("finalized")]=new Map,bm?.({ReactiveElement:bi}),(va.reactiveElementVersions??=[]).push("2.1.2");var kl=globalThis,rt=class extends bi{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=C2(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Zn}};rt._$litElement$=!0,rt.finalized=!0,kl.litElementHydrateSupport?.({LitElement:rt});var wm=kl.litElementPolyfillSupport;wm?.({LitElement:rt}),(kl.litElementVersions??=[]).push("4.2.2");var gt=e=>(t,r)=>{r!==void 0?r.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)},_m={attribute:!0,type:String,converter:ba,reflect:!1,hasChanged:yl},ym=(e=_m,t,r)=>{const{kind:o,metadata:a}=r;let s=globalThis.litPropertyMetadata.get(a);if(s===void 0&&globalThis.litPropertyMetadata.set(a,s=new Map),o==="setter"&&((e=Object.create(e)).wrapped=!0),s.set(r.name,e),o==="accessor"){const{name:c}=r;return{set(h){const u=t.get.call(this);t.set.call(this,h),this.requestUpdate(c,u,e,!0,h)},init(h){return h!==void 0&&this.C(c,void 0,e,h),h}}}if(o==="setter"){const{name:c}=r;return function(h){const u=this[c];t.call(this,h),this.requestUpdate(c,u,e,!0,h)}}throw Error("Unsupported decorator location: "+o)};function fe(e){return(t,r)=>typeof r=="object"?ym(e,t,r):((o,a,s)=>{const c=a.hasOwnProperty(s);return a.constructor.createProperty(s,o),c?Object.getOwnPropertyDescriptor(a,s):void 0})(e,t,r)}function ln(e){return fe({...e,state:!0,attribute:!1})}var O0=(e,t,r)=>(r.configurable=!0,r.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(e,t,r),r);function Fr(e,t){return(r,o,a)=>{const s=c=>c.renderRoot?.querySelector(e)??null;if(t){const{get:c,set:h}=typeof o=="object"?r:a??(()=>{const u=Symbol();return{get(){return this[u]},set(f){this[u]=f}}})();return O0(r,o,{get(){let u=c.call(this);return u===void 0&&(u=s(this),(u!==null||this.hasUpdated)&&h.call(this,u)),u}})}return O0(r,o,{get(){return s(this)}})}}var wa=class extends Zo{constructor(e){if(super(e),this.it=$e,e.type!==Vo.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===$e||e==null)return this._t=void 0,this.it=e;if(e===Zn)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;const t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}};wa.directiveName="unsafeHTML",wa.resultType=1;var T0=Zi(wa),El=class extends wa{};El.directiveName="unsafeSVG",El.resultType=2;var L0=Zi(El);function R0(e){return e.startsWith("Icon")&&!e.includes("-")&&!e.includes("_")?e:`Icon${(e.startsWith("Icon")?e.substring(4):e).split(/[-_]/).map(t=>t.charAt(0).toUpperCase()+t.slice(1)).join("")}`}var km=".icon-tabler-file-download>:nth-child(n+4){color:gold}.icon-tabler-arrow-autofit-width>:nth-child(n+3),.icon-tabler-arrow-autofit-height>:nth-child(n+3){color:#ff0}.icon-tabler-zoom-in-area>:nth-child(2),.icon-tabler-zoom-in-area>:nth-child(3){color:#0f0}.icon-tabler-zoom-out-area>:nth-child(2){color:red}.icon-tabler-zoom-pan>:nth-child(n+4){color:#96f}.icon-tabler-arrow-autofit-down>:nth-child(n+3),.icon-tabler-arrow-autofit-left>:nth-child(n+3),.icon-tabler-arrow-autofit-right>:nth-child(n+3){color:#28ffbf}.icon-tabler-spacing-vertical>:nth-child(4){color:#f0f}.icon-tabler-list-numbers>:nth-child(n+5){color:#e48900}.icon-tabler-bookmarks>:nth-child(n+2),.icon-tabler-bookmark>:nth-child(2),.icon-tabler-bookmark-off>:nth-child(2){color:orange}.icon-tabler-bookmark-off>:nth-child(3),.icon-tabler-eye-off>:nth-child(4){color:red}.icon-tabler-zoom-cancel>:nth-child(3),.icon-tabler-zoom-cancel>:nth-child(4){color:#96f}.icon-tabler-zoom-in>:nth-child(3),.icon-tabler-zoom-in>:nth-child(4){color:#0f0}.icon-tabler-zoom-out>:nth-child(3){color:red}.icon-tabler-refresh>:nth-child(n+2){color:#0ff}.icon-tabler-photo>:nth-child(n+2),.icon-tabler-photo-off>:nth-child(n+2){color:silver}.icon-tabler-photo-off>:nth-child(6){color:orange}.icon-tabler-message>:nth-child(2),.icon-tabler-message>:nth-child(3),.icon-tabler-book-return>g{color:#adff2f}.icon-tabler-file-percent>:nth-child(2),.icon-tabler-file-percent>:nth-child(5),.icon-tabler-file-percent>:nth-child(6){color:#ff0}.icon-tabler-settings-off>:nth-child(4){color:red}",Em='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-adjustments-horizontal"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M14 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M4 6l8 0" /><path d="M16 6l4 0" /><path d="M8 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M4 12l2 0" /><path d="M10 12l10 0" /><path d="M17 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M4 18l11 0" /><path d="M19 18l1 0" /></svg>',Am=`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-alert-circle"
>
  <path
    stroke="none"
    d="M0 0h24v24H0z"
    fill="none"
  />
  <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
  <path d="M12 8v4" />
  <path d="M12 16h.01" />
</svg>
`,Sm=`<svg
  xmlns="http://www.w3.org/2000/svg"
  class="icon icon-tabler icon-tabler-arrow-autofit-down"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  stroke-width="2"
  stroke="currentColor"
  fill="none"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path
    stroke="none"
    d="M0 0h24v24H0z"
    fill="none"
  />
  <path d="M12 20h-6a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h8" />
  <path d="M18 4v17" />
  <path d="M15 18l3 3l3 -3" />
</svg>
`,Mm=`<svg
  xmlns="http://www.w3.org/2000/svg"
  class="icon icon-tabler icon-tabler-arrow-autofit-height"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  stroke-width="2"
  stroke="currentColor"
  fill="none"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path
    stroke="none"
    d="M0 0h24v24H0z"
    fill="none"
  />
  <path d="M12 20h-6a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h6" />
  <path d="M18 14v7" />
  <path d="M18 3v7" />
  <path d="M15 18l3 3l3 -3" />
  <path d="M15 6l3 -3l3 3" />
</svg>
`,xm=`<svg
  xmlns="http://www.w3.org/2000/svg"
  class="icon icon-tabler icon-tabler-arrow-autofit-left"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  stroke-width="2"
  stroke="currentColor"
  fill="none"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path
    stroke="none"
    d="M0 0h24v24H0z"
    fill="none"
  />
  <path d="M4 12v-6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v8" />
  <path d="M20 18h-17" />
  <path d="M6 15l-3 3l3 3" />
</svg>
`,Im=`<svg
  xmlns="http://www.w3.org/2000/svg"
  class="icon icon-tabler icon-tabler-arrow-autofit-right"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  stroke-width="2"
  stroke="currentColor"
  fill="none"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path
    stroke="none"
    d="M0 0h24v24H0z"
    fill="none"
  />
  <path d="M20 12v-6a2 2 0 0 0 -2 -2h-12a2 2 0 0 0 -2 2v8" />
  <path d="M4 18h17" />
  <path d="M18 15l3 3l-3 3" />
</svg>
`,Cm=`<svg
  xmlns="http://www.w3.org/2000/svg"
  class="icon icon-tabler icon-tabler-arrow-autofit-width"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  stroke-width="2"
  stroke="currentColor"
  fill="none"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path
    stroke="none"
    d="M0 0h24v24H0z"
    fill="none"
  />
  <path d="M4 12v-6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v6" />
  <path d="M10 18h-7" />
  <path d="M21 18h-7" />
  <path d="M6 15l-3 3l3 3" />
  <path d="M18 15l3 3l-3 3" />
</svg>
`,Om=`<svg
  xmlns="http://www.w3.org/2000/svg"
  class="icon icon-tabler icon-tabler-arrow-big-left"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  stroke-width="2"
  stroke="currentColor"
  fill="none"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path
    stroke="none"
    d="M0 0h24v24H0z"
    fill="none"
  />
  <path
    d="M20 15h-8v3.586a1 1 0 0 1 -1.707 .707l-6.586 -6.586a1 1 0 0 1 0 -1.414l6.586 -6.586a1 1 0 0 1 1.707 .707v3.586h8a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1z"
  />
</svg>
`,Tm=`<svg
  xmlns="http://www.w3.org/2000/svg"
  class="icon icon-tabler icon-tabler-arrow-big-right"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  stroke-width="2"
  stroke="currentColor"
  fill="none"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path
    stroke="none"
    d="M0 0h24v24H0z"
    fill="none"
  />
  <path
    d="M4 9h8v-3.586a1 1 0 0 1 1.707 -.707l6.586 6.586a1 1 0 0 1 0 1.414l-6.586 6.586a1 1 0 0 1 -1.707 -.707v-3.586h-8a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1z"
  />
</svg>
`,Lm='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-arrows-horizontal"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 8l-4 4l4 4" /><path d="M17 8l4 4l-4 4" /><path d="M3 12l18 0" /></svg>',Rm='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-arrows-left-right"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M21 17l-18 0" /><path d="M6 10l-3 -3l3 -3" /><path d="M3 7l18 0" /><path d="M18 20l3 -3l-3 -3" /></svg>',Pm=`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-arrows-move"
>
  <path
    stroke="none"
    d="M0 0h24v24H0z"
    fill="none"
  />
  <path d="M18 9l3 3l-3 3" />
  <path d="M15 12h6" />
  <path d="M6 9l-3 3l3 3" />
  <path d="M3 12h6" />
  <path d="M9 18l3 3l3 -3" />
  <path d="M12 15v6" />
  <path d="M15 6l-3 -3l-3 3" />
  <path d="M12 3v6" />
</svg>
`,$m=`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-arrows-move-vertical"
>
  <path
    stroke="none"
    d="M0 0h24v24H0z"
    fill="none"
  />
  <path d="M9 18l3 3l3 -3" />
  <path d="M12 15v6" />
  <path d="M15 6l-3 -3l-3 3" />
  <path d="M12 3v6" />
</svg>
`,zm=`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-arrows-vertical"
>
  <path
    stroke="none"
    d="M0 0h24v24H0z"
    fill="none"
  />
  <path d="M8 7l4 -4l4 4" />
  <path d="M8 17l4 4l4 -4" />
  <path d="M12 3l0 18" />
</svg>
`,Nm=`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-book"
>
  <path
    stroke="none"
    d="M0 0h24v24H0z"
    fill="none"
  />
  <path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0" />
  <path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0" />
  <path d="M3 6l0 13" />
  <path d="M12 6l0 13" />
  <path d="M21 6l0 13" />
</svg>
`,Dm=`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-return"
>
  <path
    stroke="none"
    d="M0 0h24v24H0z"
    fill="none"
  />
  <path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 2 -1" />
  <path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0" />
  <path d="M3 6l0 13" />
  <path d="M12 6l0 13" />
  <path d="M21 6l0 4" />
  <g transform="rotate(-90, 19, 15)">
    <path d="M15 16l3 -3l3 3" />
    <path d="M18 13v9" />
  </g>
</svg>
`,Bm=`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-book-upload"
>
  <path
    stroke="none"
    d="M0 0h24v24H0z"
    fill="none"
  />
  <path d="M14 20h-8a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12v5" />
  <path d="M11 16h-5a2 2 0 0 0 -2 2" />
  <path d="M15 16l3 -3l3 3" />
  <path d="M18 13v9" />
</svg>
`,Fm=`<svg
  xmlns="http://www.w3.org/2000/svg"
  class="icon icon-tabler icon-tabler-bookmark"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  stroke-width="2"
  stroke="currentColor"
  fill="none"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path
    stroke="none"
    d="M0 0h24v24H0z"
    fill="none"
  />
  <path d="M18 7v14l-6 -4l-6 4v-14a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4z" />
</svg>
`,Hm=`<svg
  xmlns="http://www.w3.org/2000/svg"
  class="icon icon-tabler icon-tabler-bookmark-off"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  stroke-width="2"
  stroke="currentColor"
  fill="none"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path
    stroke="none"
    d="M0 0h24v24H0z"
    fill="none"
  />
  <path
    d="M7.708 3.721a3.982 3.982 0 0 1 2.292 -.721h4a4 4 0 0 1 4 4v7m0 4v3l-6 -4l-6 4v-14c0 -.308 .035 -.609 .1 -.897"
  />
  <path d="M3 3l18 18" />
</svg>
`,Gm=`<svg
  xmlns="http://www.w3.org/2000/svg"
  class="icon icon-tabler icon-tabler-bookmarks"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  stroke-width="2"
  stroke="currentColor"
  fill="none"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path
    stroke="none"
    d="M0 0h24v24H0z"
    fill="none"
  />
  <path d="M15 10v11l-5 -3l-5 3v-11a3 3 0 0 1 3 -3h4a3 3 0 0 1 3 3z" />
  <path d="M11 3h5a3 3 0 0 1 3 3v11" />
</svg>
`,Um=`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-box-align-top"
>
  <path
    stroke="none"
    d="M0 0h24v24H0z"
    fill="none"
  />
  <path d="M4 10.005h16v-5a1 1 0 0 0 -1 -1h-14a1 1 0 0 0 -1 1v5z" />
  <path d="M4 15.005v-.01" />
  <path d="M4 20.005v-.01" />
  <path d="M9 20.005v-.01" />
  <path d="M15 20.005v-.01" />
  <path d="M20 20.005v-.01" />
  <path d="M20 15.005v-.01" />
</svg>
`,Wm=`<svg
  id="Capa_1"
  enable-background="new 0 0 512 512"
  height="512"
  viewBox="0 0 512 512"
  width="512"
  xmlns="http://www.w3.org/2000/svg"
>
  <g>
    <g>
      <g>
        <path
          d="m427.508 512h-343.02c-5.69 0-10.302-4.612-10.302-10.302v-491.396c0-5.69 4.612-10.302 10.302-10.302h343.02c5.69 0 10.302 4.612 10.302 10.302v491.396c-.001 5.69-4.613 10.302-10.302 10.302z"
          fill="#f2eff2"
        />
      </g>
    </g>
    <path
      d="m427.512 0h-41.238c5.687 0 10.302 4.615 10.302 10.302v41.156l-18.039 71.714 18.039 81.268v46.358l-18.039 45.164 18.039 24.847v46.358l-10.302 61.227 10.302 32.149v41.156c0 5.687-4.615 10.302-10.302 10.302h41.238c5.687 0 10.302-4.615 10.302-10.302v-491.397c0-5.687-4.615-10.302-10.302-10.302z"
      fill="#e1dde1"
    />
    <g>
      <path
        d="m243.51 273.63-47.48 104.08-80.61-10.85v-315.4c0-2.85 2.31-5.15 5.15-5.15h30.86c2.13 0 4.03 1.29 4.8 3.27z"
        fill="#3ad1e0"
      />
      <path
        d="m243.51 273.63-16.68 36.56-101.52-260.61c-.76-1.95-2.64-3.25-4.74-3.27h30.86c2.13 0 4.03 1.29 4.8 3.27z"
        fill="#22c7db"
      />
      <path
        d="m310.81 465.69h-190.24c-2.84 0-5.15-2.3-5.15-5.15v-93.68c25.18-34.92 65.99-57.81 112.19-58.37l-16.07 35.21 74.5 39.08 29.56 75.9c1.32 3.37-1.17 7.01-4.79 7.01z"
        fill="#fb33a8"
      />
      <path
        d="m310.81 465.69h-30.92c3.61 0 6.11-3.64 4.79-7.01l-12.92-33.17c-1.92 4.55-2.88 9.61-2.61 14.91.01.13.01.25.01.38 0 5.92-7.39 8.87-11.45 4.36-6.77-7.49-16.03-11.24-25.29-11.24s-18.54 3.75-25.29 11.24c-1.36 1.52-3.11 2.19-4.83 2.19-3.48 0-6.84-2.78-6.62-6.93.03-.59.04-1.18.04-1.77 0-19.36-16.23-34.99-35.81-33.99-.12.01-.24.01-.37.01-5.92 0-8.87-7.4-4.37-11.46 7.49-6.76 11.24-16.03 11.24-25.29s-3.75-18.52-11.24-25.29c-1.51-1.36-2.18-3.1-2.18-4.81 0-3.48 2.78-6.84 6.92-6.64.6.04 1.19.05 1.77.05 12.81 0 23.98-7.11 29.79-17.57l34.29-1.12-14.22 31.16 74.5 39.08 29.56 75.9c1.32 3.37-1.17 7.01-4.79 7.01z"
        fill="#fb33a8"
      />
      <path
        d="m396.58 51.46v152.98c0 2.84-2.31 5.15-5.15 5.15h-32l-40.41-29.31-40.41 29.31h-17.82c-2.12 0-4.03-1.3-4.8-3.28l-59.6-152.98c-1.32-3.38 1.18-7.02 4.79-7.02h190.25c2.84 0 5.15 2.3 5.15 5.15z"
        fill="#fcb44d"
      />
      <path
        d="m396.576 51.457v152.982c0 2.843-2.308 5.151-5.151 5.151h-30.927c2.843 0 5.151-2.308 5.151-5.151v-152.982c0-2.843-2.308-5.151-5.151-5.151h30.927c2.843.001 5.151 2.308 5.151 5.151z"
        fill="#fb9927"
      />
      <g>
        <path
          d="m359.428 181.065v28.526h-80.818v-28.526c0-22.324 18.1-40.414 40.414-40.414 11.157 0 21.263 4.522 28.567 11.837 7.314 7.314 11.837 17.409 11.837 28.577z"
          fill="#ae6ad8"
        />
        <path
          d="m359.43 181.065v28.526h-29.237v-28.526c0-11.167-4.522-21.263-11.837-28.577-3.935-3.935-8.674-7.067-13.949-9.107 4.533-1.762 9.467-2.73 14.618-2.73 11.157 0 21.263 4.522 28.567 11.837 7.316 7.314 11.838 17.409 11.838 28.577z"
          fill="#975bbb"
        />
        <g>
          <g>
            <circle
              cx="319.023"
              cy="121.497"
              fill="#f2eff2"
              r="26.224"
            />
          </g>
        </g>
      </g>
      <path
        d="m396.576 250.798v70.011c0 2.845-2.306 5.151-5.151 5.151h-85.311c-2.123 0-4.029-1.303-4.8-3.281l-27.273-70.011c-1.316-3.377 1.175-7.021 4.8-7.021h112.585c2.844 0 5.15 2.306 5.15 5.151z"
        fill="#23f1a8"
      />
      <path
        d="m396.576 250.798v70.011c0 2.843-2.308 5.151-5.151 5.151h-30.927c2.843 0 5.151-2.308 5.151-5.151v-70.011c0-2.843-2.308-5.151-5.151-5.151h30.927c2.843 0 5.151 2.307 5.151 5.151z"
        fill="#27e19d"
      />
      <path
        d="m324.179 362.016h67.246c2.845 0 5.151 2.306 5.151 5.151v93.376c0 2.845-2.306 5.151-5.151 5.151h-30.866c-2.123 0-4.029-1.303-4.799-3.281l-36.38-93.376c-1.316-3.377 1.175-7.021 4.799-7.021z"
        fill="#23f1a8"
      />
      <path
        d="m396.576 367.167v93.376c0 2.843-2.308 5.151-5.151 5.151h-30.927c2.843 0 5.151-2.308 5.151-5.151v-93.376c0-2.843-2.308-5.151-5.151-5.151h30.927c2.843 0 5.151 2.308 5.151 5.151z"
        fill="#27e19d"
      />
    </g>
    <g>
      <path
        d="m269.153 413.978c.01.124.01.247.01.371 0 5.924-7.397 8.87-11.456 4.368-6.768-7.489-16.03-11.239-25.291-11.239s-18.533 3.75-25.291 11.239c-1.36 1.514-3.101 2.184-4.821 2.184-3.482 0-6.84-2.782-6.624-6.923.031-.597.041-1.185.041-1.772 0-19.367-16.236-34.995-35.809-33.996-.124.01-.247.01-.371.01-5.924 0-8.87-7.397-4.368-11.456 7.489-6.758 11.239-16.03 11.239-25.291s-3.75-18.523-11.239-25.291c-1.514-1.36-2.184-3.101-2.184-4.811 0-3.482 2.782-6.84 6.923-6.634.597.031 1.185.041 1.772.041 19.367 0 34.995-16.236 33.996-35.799-.01-.124-.01-.247-.01-.371 0-5.934 7.397-8.87 11.456-4.378 6.758 7.489 16.03 11.239 25.291 11.239 3.76 0 7.51-.618 11.095-1.844l42.526 109.158c-10.591 6.183-17.565 17.916-16.885 31.195z"
        fill="#fdef63"
      />
      <path
        d="m268.516 417.19c.406-.839.648-1.79.648-2.841 0-.123 0-.247-.01-.371-.68-13.279 6.294-25.013 16.885-31.194l-42.526-109.158c-3.585 1.226-7.335 1.844-11.095 1.844-7.992 0-15.988-2.799-22.374-8.378z"
        fill="#f3d730"
      />
    </g>
    <g>
      <g>
        <path
          d="m229.374 349.967c-4.267 0-7.726-3.459-7.726-7.726v-29.272c0-4.267 3.459-7.726 7.726-7.726s7.726 3.459 7.726 7.726v29.272c0 4.267-3.459 7.726-7.726 7.726z"
          fill="#554e55"
        />
      </g>
      <g>
        <path
          d="m229.374 377.711c-4.267 0-7.726-3.459-7.726-7.726v-2.061c0-4.267 3.459-7.726 7.726-7.726s7.726 3.459 7.726 7.726v2.061c0 4.267-3.459 7.726-7.726 7.726z"
          fill="#554e55"
        />
      </g>
    </g>
    <g>
      <g>
        <path
          d="m258.185 86.361h-18.228c-4.267 0-7.726-3.459-7.726-7.726s3.459-7.726 7.726-7.726h18.228c4.267 0 7.726 3.459 7.726 7.726 0 4.266-3.459 7.726-7.726 7.726z"
          fill="#f2eff2"
        />
      </g>
      <g>
        <path
          d="m266.269 111.168h-18.229c-4.267 0-7.726-3.459-7.726-7.726s3.459-7.726 7.726-7.726h18.228c4.267 0 7.726 3.459 7.726 7.726s-3.458 7.726-7.725 7.726z"
          fill="#f2eff2"
        />
      </g>
    </g>
  </g>
</svg>
`,Vm=`<?xml version="1.0" encoding="UTF-8"?>
<svg
  xmlns="http://www.w3.org/2000/svg"
  version="1.1"
  id="Capa_1"
  x="0px"
  y="0px"
  viewBox="0 0 512 512"
  style="enable-background: new 0 0 512 512"
  xml:space="preserve"
  width="512"
  height="512"
>
  <g>
    <g>
      <g>
        <path
          style="fill: #f2eff2"
          d="M422.485,504.5H89.515c-5.523,0-10-4.477-10-10v-477c0-5.523,4.477-10,10-10h332.971&#10;&#9;&#9;&#9;&#9;c5.523,0,10,4.477,10,10v477C432.485,500.023,428.008,504.5,422.485,504.5z"
        />
      </g>
    </g>
    <g>
      <g>
        <path
          style="fill: #e1dde1"
          d="M432.49,17.5v477c0,5.52-4.48,10-10,10h-40.03c5.52,0,10-4.48,10-10v-477c0-5.52-4.48-10-10-10&#10;&#9;&#9;&#9;&#9;h40.03C428.01,7.5,432.49,11.98,432.49,17.5z"
        />
      </g>
    </g>
    <g>
      <path
        style="
          fill: none;
          stroke: #000000;
          stroke-width: 15;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-miterlimit: 10;
        "
        d="&#10;&#9;&#9;&#9;M334.56,7.5H89.515c-5.523,0-10,4.477-10,10v477c0,5.523,4.477,10,10,10h332.971c5.523,0,10-4.477,10-10v-477&#10;&#9;&#9;&#9;c0-5.523-4.477-10-10-10h-54.763"
      />
    </g>
    <g>
      <path
        style="fill: #3ad1e0"
        d="M313.86,452.74L159.16,55.63c-0.75-1.92-2.6-3.18-4.66-3.18h-29.96c-2.76,0-5,2.24-5,5v397.1&#10;&#9;&#9;&#9;c0,2.76,2.24,5,5,5h184.67C312.72,459.55,315.14,456.01,313.86,452.74z"
      />
      <path
        style="fill: #22c7db"
        d="M309.21,459.55h-30.02c3.51,0,5.93-3.54,4.65-6.81L129.14,55.63c-0.74-1.9-2.56-3.16-4.6-3.18&#10;&#9;&#9;&#9;h29.96c2.06,0,3.91,1.26,4.66,3.18l154.7,397.11C315.14,456.01,312.72,459.55,309.21,459.55z"
      />
      <path
        style="fill: #fb33a8"
        d="M258.193,309.845c-9.05-1.894-18.424-2.909-28.037-2.909c-45.55,0-85.862,22.354-110.616,56.676&#10;&#9;&#9;&#9;v90.938c0,2.76,2.24,5,5,5h184.67c3.51,0,5.93-3.54,4.65-6.81L258.193,309.845z"
      />
      <path
        style="fill: #ee2d9a"
        d="M193.362,311.966c-5.64,10.161-16.48,17.055-28.912,17.055c-0.57,0-1.14-0.01-1.72-0.04&#10;&#9;&#9;&#9;c-4.02-0.2-6.72,3.06-6.72,6.44c0,1.66,0.65,3.35,2.12,4.67c7.27,6.57,10.91,15.56,10.91,24.55s-3.64,17.99-10.91,24.55&#10;&#9;&#9;&#9;c-4.37,3.94-1.51,11.12,4.24,11.12c0.12,0,0.24,0,0.36-0.01c19-0.97,34.76,14.2,34.76,33c0,0.57-0.01,1.14-0.04,1.72&#10;&#9;&#9;&#9;c-0.21,4.02,3.05,6.72,6.43,6.72c1.67,0,3.36-0.65,4.68-2.12c6.56-7.27,15.56-10.91,24.55-10.91c8.99,0,17.98,3.64,24.55,10.91&#10;&#9;&#9;&#9;c3.94,4.37,11.12,1.51,11.12-4.24c0-0.12,0-0.24-0.01-0.36c-0.264-5.151,0.666-10.058,2.527-14.479l12.543,32.197&#10;&#9;&#9;&#9;c1.28,3.27-1.14,6.81-4.65,6.81h30.02c3.51,0,5.93-3.54,4.65-6.81l-55.667-142.895L193.362,311.966z"
      />
      <path
        style="
          fill: none;
          stroke: #000000;
          stroke-width: 15;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-miterlimit: 10;
        "
        d="&#10;&#9;&#9;&#9;M230.156,306.937c-45.55,0-85.862,22.354-110.616,56.676"
      />
      <path
        style="fill: #fcb44d"
        d="M392.46,57.45v148.5c0,2.76-2.24,5-5,5H260.65c-2.06,0-3.91-1.26-4.66-3.18l-57.85-148.5&#10;&#9;&#9;&#9;c-1.28-3.28,1.14-6.82,4.65-6.82h184.67C390.22,52.45,392.46,54.69,392.46,57.45z"
      />
      <path
        style="fill: #fb9927"
        d="M392.46,57.45v148.5c0,2.76-2.24,5-5,5h-30.021c2.76,0,5-2.24,5-5V57.45c0-2.76-2.24-5-5-5h30.021&#10;&#9;&#9;&#9;C390.22,52.45,392.46,54.69,392.46,57.45z"
      />
      <g>
        <path
          style="fill: #ae6ad8"
          d="M356.4,183.26v27.69h-78.45v-27.69c0-21.67,17.57-39.23,39.23-39.23&#10;&#9;&#9;&#9;&#9;c10.83,0,20.64,4.39,27.73,11.49C352.01,162.62,356.4,172.42,356.4,183.26z"
        />
        <path
          style="fill: #975bbb"
          d="M356.402,183.26v27.69h-28.38v-27.69c0-10.84-4.39-20.64-11.49-27.74&#10;&#9;&#9;&#9;&#9;c-3.82-3.82-8.42-6.86-13.54-8.84c4.4-1.71,9.19-2.65,14.19-2.65c10.83,0,20.64,4.39,27.73,11.49&#10;&#9;&#9;&#9;&#9;C352.012,162.62,356.402,172.42,356.402,183.26z"
        />
        <path
          style="
            fill: none;
            stroke: #000000;
            stroke-width: 15;
            stroke-linecap: round;
            stroke-linejoin: round;
            stroke-miterlimit: 10;
          "
          d="&#10;&#9;&#9;&#9;&#9;M277.95,210.95v-27.69c0-21.67,17.57-39.23,39.23-39.23c10.83,0,20.64,4.39,27.73,11.49c7.1,7.1,11.49,16.9,11.49,27.74v27.69"
        />
        <g>
          <circle
            style="fill: #f2eff2"
            cx="317.179"
            cy="125.438"
            r="25.456"
          />

          <circle
            style="
              fill: none;
              stroke: #000000;
              stroke-width: 15;
              stroke-linecap: round;
              stroke-linejoin: round;
              stroke-miterlimit: 10;
            "
            cx="317.179"
            cy="125.438"
            r="25.456"
          />
        </g>
      </g>
      <path
        style="fill: #23f1a8"
        d="M392.46,250.95v67.96c0,2.761-2.239,5-5,5h-82.812c-2.061,0-3.911-1.265-4.659-3.185l-26.474-67.96&#10;&#9;&#9;&#9;c-1.277-3.278,1.141-6.815,4.659-6.815H387.46C390.221,245.95,392.46,248.189,392.46,250.95z"
      />
      <path
        style="fill: #27e19d"
        d="M392.46,250.95v67.96c0,2.76-2.24,5-5,5h-30.021c2.76,0,5-2.24,5-5v-67.96c0-2.76-2.24-5-5-5&#10;&#9;&#9;&#9;h30.021C390.22,245.95,392.46,248.19,392.46,250.95z"
      />
      <path
        style="fill: #23f1a8"
        d="M322.184,358.91h65.276c2.761,0,5,2.239,5,5v90.64c0,2.761-2.239,5-5,5h-29.962&#10;&#9;&#9;&#9;c-2.061,0-3.911-1.265-4.659-3.185l-35.314-90.64C316.248,362.447,318.666,358.91,322.184,358.91z"
      />
      <path
        style="fill: #27e19d"
        d="M392.46,363.91v90.64c0,2.76-2.24,5-5,5h-30.021c2.76,0,5-2.24,5-5v-90.64c0-2.76-2.24-5-5-5&#10;&#9;&#9;&#9;h30.021C390.22,358.91,392.46,361.15,392.46,363.91z"
      />
      <path
        style="
          fill: none;
          stroke: #000000;
          stroke-width: 15;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-miterlimit: 10;
        "
        d="&#10;&#9;&#9;&#9;M119.54,242.003V454.55c0,2.761,2.239,5,5,5h184.666c3.518,0,5.936-3.537,4.659-6.815l-154.704-397.1&#10;&#9;&#9;&#9;c-0.748-1.92-2.598-3.185-4.659-3.185H124.54c-2.761,0-5,2.239-5,5v151.391"
      />
      <path
        style="
          fill: none;
          stroke: #000000;
          stroke-width: 15;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-miterlimit: 10;
        "
        d="&#10;&#9;&#9;&#9;M392.46,57.45v148.5c0,2.761-2.239,5-5,5H260.648c-2.061,0-3.911-1.265-4.659-3.185l-57.854-148.5&#10;&#9;&#9;&#9;c-1.277-3.278,1.141-6.815,4.659-6.815H387.46C390.221,52.45,392.46,54.689,392.46,57.45z"
      />
      <path
        style="
          fill: none;
          stroke: #000000;
          stroke-width: 15;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-miterlimit: 10;
        "
        d="&#10;&#9;&#9;&#9;M306.627,245.95h-28.454c-3.518,0-5.936,3.537-4.659,6.815l26.474,67.96c0.748,1.92,2.598,3.185,4.659,3.185h82.812&#10;&#9;&#9;&#9;c2.761,0,5-2.239,5-5v-67.96c0-2.761-2.239-5-5-5h-47.67"
      />
      <path
        style="
          fill: none;
          stroke: #000000;
          stroke-width: 15;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-miterlimit: 10;
        "
        d="&#10;&#9;&#9;&#9;M322.184,358.91h65.276c2.761,0,5,2.239,5,5v90.64c0,2.761-2.239,5-5,5h-29.962c-2.061,0-3.911-1.265-4.659-3.185l-35.314-90.64&#10;&#9;&#9;&#9;C316.248,362.447,318.666,358.91,322.184,358.91z"
      />
    </g>
    <g>
      <path
        style="fill: #fdef63"
        d="M268.77,409.35c0.01,0.12,0.01,0.24,0.01,0.36c0,5.75-7.18,8.61-11.12,4.24&#10;&#9;&#9;&#9;c-6.57-7.27-15.56-10.91-24.55-10.91c-8.99,0-17.99,3.64-24.55,10.91c-1.32,1.47-3.01,2.12-4.68,2.12c-3.38,0-6.64-2.7-6.43-6.72&#10;&#9;&#9;&#9;c0.03-0.58,0.04-1.15,0.04-1.72c0-18.8-15.76-33.97-34.76-33c-0.12,0.01-0.24,0.01-0.36,0.01c-5.75,0-8.61-7.18-4.24-11.12&#10;&#9;&#9;&#9;c7.27-6.56,10.91-15.56,10.91-24.55s-3.64-17.98-10.91-24.55c-1.47-1.32-2.12-3.01-2.12-4.67c0-3.38,2.7-6.64,6.72-6.44&#10;&#9;&#9;&#9;c0.58,0.03,1.15,0.04,1.72,0.04c18.8,0,33.97-15.76,33-34.75c-0.01-0.12-0.01-0.24-0.01-0.36c0-5.76,7.18-8.61,11.12-4.25&#10;&#9;&#9;&#9;c6.56,7.27,15.56,10.91,24.55,10.91c3.65,0,7.29-0.6,10.77-1.79l41.28,105.96C274.88,385.07,268.11,396.46,268.77,409.35z"
      />
      <path
        style="fill: #f3d730"
        d="M268.151,412.468c0.394-0.814,0.629-1.738,0.629-2.758c0-0.12,0-0.24-0.01-0.36&#10;&#9;&#9;&#9;c-0.66-12.89,6.11-24.28,16.39-30.28l-41.28-105.96c-3.48,1.19-7.12,1.79-10.77,1.79c-7.758,0-15.52-2.717-21.718-8.132&#10;&#9;&#9;&#9;L268.151,412.468z"
      />
      <path
        style="
          fill: none;
          stroke: #000000;
          stroke-width: 15;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-miterlimit: 10;
        "
        d="&#10;&#9;&#9;&#9;M268.77,409.35c0.01,0.12,0.01,0.24,0.01,0.36c0,5.75-7.18,8.61-11.12,4.24c-6.57-7.27-15.56-10.91-24.55-10.91&#10;&#9;&#9;&#9;c-8.99,0-17.99,3.64-24.55,10.91c-1.32,1.47-3.01,2.12-4.68,2.12c-3.38,0-6.64-2.7-6.43-6.72c0.03-0.58,0.04-1.15,0.04-1.72&#10;&#9;&#9;&#9;c0-18.8-15.76-33.97-34.76-33c-0.12,0.01-0.24,0.01-0.36,0.01c-5.75,0-8.61-7.18-4.24-11.12c7.27-6.56,10.91-15.56,10.91-24.55&#10;&#9;&#9;&#9;s-3.64-17.98-10.91-24.55c-1.47-1.32-2.12-3.01-2.12-4.67c0-3.38,2.7-6.64,6.72-6.44c0.58,0.03,1.15,0.04,1.72,0.04&#10;&#9;&#9;&#9;c18.8,0,33.97-15.76,33-34.75c-0.01-0.12-0.01-0.24-0.01-0.36c0-5.76,7.18-8.61,11.12-4.25c6.56,7.27,15.56,10.91,24.55,10.91&#10;&#9;&#9;&#9;c3.65,0,7.29-0.6,10.77-1.79l41.28,105.96C274.88,385.07,268.11,396.46,268.77,409.35z"
      />
    </g>
    <g>
      <line
        style="
          fill: none;
          stroke: #000000;
          stroke-width: 15;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-miterlimit: 10;
        "
        x1="230.156"
        y1="339.714"
        x2="230.156"
        y2="311.299"
      />

      <line
        style="
          fill: none;
          stroke: #000000;
          stroke-width: 15;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-miterlimit: 10;
        "
        x1="230.156"
        y1="364.644"
        x2="230.156"
        y2="366.646"
      />
    </g>
    <g>
      <line
        style="
          fill: none;
          stroke: #000000;
          stroke-width: 15;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-miterlimit: 10;
        "
        x1="240.429"
        y1="83.83"
        x2="258.124"
        y2="83.83"
      />

      <line
        style="
          fill: none;
          stroke: #000000;
          stroke-width: 15;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-miterlimit: 10;
        "
        x1="248.276"
        y1="107.911"
        x2="265.97"
        y2="107.911"
      />
    </g>
  </g>
</svg>
`,Zm=`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!-- Created with Inkscape (http://www.inkscape.org/) -->

<svg
  version="1.1"
  id="svg3390"
  xml:space="preserve"
  width="682.66669"
  height="682.66669"
  viewBox="0 0 682.66669 682.66669"
  xmlns="http://www.w3.org/2000/svg"
>
  <defs id="defs3394">
    <clipPath
      clipPathUnits="userSpaceOnUse"
      id="clipPath3404"
    >
      <path
        d="M 0,512 H 512 V 0 H 0 Z"
        id="path3402"
      />
    </clipPath>
  </defs>
  <g
    id="g3396"
    transform="matrix(1.3333333,0,0,-1.3333333,0,682.66667)"
  >
    <g id="g3398">
      <g
        id="g3400"
        clip-path="url(#clipPath3404)"
      >
        <g
          id="g3406"
          transform="translate(451.7344)"
        >
          <path
            d="m 0,0 h -391.469 c -11.379,0 -20.603,9.225 -20.603,20.604 v 470.792 c 0,11.379 9.224,20.604 20.603,20.604 L 0,512 c 11.379,0 20.604,-9.225 20.604,-20.604 V 20.604 C 20.604,9.225 11.379,0 0,0"
            style="fill: #efe6e6; fill-opacity: 1; fill-rule: nonzero; stroke: none"
            id="path3408"
          />
        </g>
        <g
          id="g3410"
          transform="translate(472.3376,41.2072)"
        >
          <path
            d="m 0,0 c -216.202,0 -391.468,175.266 -391.468,391.468 v 79.325 h -20.604 c -11.379,0 -20.604,-9.225 -20.604,-20.604 V -20.604 c 0,-11.379 9.225,-20.603 20.604,-20.603 H -20.603 C -9.224,-41.207 0,-31.983 0,-20.604 Z"
            style="fill: #e2d7d7; fill-opacity: 1; fill-rule: nonzero; stroke: none"
            id="path3412"
          />
        </g>
        <g
          id="g3414"
          transform="translate(235.3964,198.1382)"
        >
          <path
            d="M 0,0 H 195.734 V 272.655 H 82.414 Z"
            style="fill: #ffffff; fill-opacity: 1; fill-rule: nonzero; stroke: none"
            id="path3416"
          />
        </g>
        <g
          id="g3418"
          transform="translate(235.3964,198.1382)"
        >
          <path
            d="M 0,0 H 195.734 V 272.655 H 82.414 Z"
            style="fill: #5ad6ff; fill-opacity: 1; fill-rule: nonzero; stroke: none"
            id="path3420"
          />
        </g>
        <g
          id="g3422"
          transform="translate(80.8692,198.1382)"
        >
          <path
            d="m 0,0 h 113.32 l 82.414,272.655 H 0 Z"
            style="fill: #f4e74d; fill-opacity: 1; fill-rule: nonzero; stroke: none"
            id="path3424"
          />
        </g>
        <g
          id="g3426"
          transform="translate(80.8692,432.6757)"
        >
          <path
            d="M 0,0 V -234.537 H 78.01 C 29.021,-169.169 0,-87.974 0,0"
            style="fill: #eedb00; fill-opacity: 1; fill-rule: nonzero; stroke: none"
            id="path3428"
          />
        </g>
        <path
          d="M 431.131,41.207 H 80.869 v 115.724 h 350.262 z"
          style="fill: #b18cd9; fill-opacity: 1; fill-rule: nonzero; stroke: none"
          id="path3430"
        />
        <g
          id="g3432"
          transform="translate(194.475,156.931)"
        >
          <path
            d="m 0,0 h -113.606 v -115.724 h 350.262 v 2.149 C 144.487,-103.933 61.838,-62.31 0,0"
            style="fill: #996acc; fill-opacity: 1; fill-rule: nonzero; stroke: none"
            id="path3434"
          />
        </g>
        <g
          id="g3436"
          transform="translate(213.2632,94.3332)"
        >
          <path
            d="m 0,0 c 0,-10.991 -11.188,-19.901 -24.99,-19.901 -13.801,0 -24.989,8.91 -24.989,19.901 0,10.991 11.188,19.9 24.989,19.9 C -11.188,19.9 0,10.991 0,0"
            style="fill: #ffffff; fill-opacity: 1; fill-rule: nonzero; stroke: none"
            id="path3438"
          />
        </g>
        <g
          id="g3440"
          transform="translate(298.7368,94.3332)"
        >
          <path
            d="m 0,0 c 0,-10.991 11.188,-19.901 24.99,-19.901 13.801,0 24.989,8.91 24.989,19.901 0,10.991 -11.188,19.9 -24.989,19.9 C 11.188,19.9 0,10.991 0,0"
            style="fill: #ffffff; fill-opacity: 1; fill-rule: nonzero; stroke: none"
            id="path3442"
          />
        </g>
        <g
          id="g3444"
          transform="translate(202.8374,123.7057)"
        >
          <path
            d="M 0,0 V -10.216"
            style="
              fill: none;
              stroke: #3d4751;
              stroke-width: 15;
              stroke-linecap: round;
              stroke-linejoin: round;
              stroke-miterlimit: 10;
              stroke-dasharray: none;
              stroke-opacity: 1;
            "
            id="path3446"
          />
        </g>
        <g
          id="g3448"
          transform="translate(309.1625,123.7057)"
        >
          <path
            d="M 0,0 V -10.216"
            style="
              fill: none;
              stroke: #3d4751;
              stroke-width: 15;
              stroke-linecap: round;
              stroke-linejoin: round;
              stroke-miterlimit: 10;
              stroke-dasharray: none;
              stroke-opacity: 1;
            "
            id="path3450"
          />
        </g>
        <g
          id="g3452"
          transform="translate(241.984,113.7942)"
        >
          <path
            d="m 0,0 c 3.408,-3.911 8.421,-6.385 14.016,-6.385 5.595,0 10.608,2.474 14.016,6.385"
            style="
              fill: none;
              stroke: #3d4751;
              stroke-width: 15;
              stroke-linecap: round;
              stroke-linejoin: round;
              stroke-miterlimit: 10;
              stroke-dasharray: none;
              stroke-opacity: 1;
            "
            id="path3454"
          />
        </g>
        <g
          id="g3456"
          transform="translate(150.0629,447.8862)"
        >
          <path
            d="m 0,0 33.436,22.907 h -102.63 v -161.294 l 21.382,72.58 59.96,-46.151 -25.363,71.287 75.636,-2.093 z"
            style="fill: #fd5c6f; fill-opacity: 1; fill-rule: nonzero; stroke: none"
            id="path3458"
          />
        </g>
        <g
          id="g3460"
          transform="translate(80.8692,432.6757)"
        >
          <path
            d="m 0,0 v -123.177 l 10.122,34.358 C 3.502,-60.282 0,-30.55 0,0"
            style="fill: #f6334c; fill-opacity: 1; fill-rule: nonzero; stroke: none"
            id="path3462"
          />
        </g>
        <g
          id="g3464"
          transform="translate(431.1308,271.141)"
        >
          <path
            d="m 0,0 -57.698,-44.41 24.406,68.598 -72.782,-2.014 60.066,41.15 -60.066,41.151 72.782,-2.014 -24.406,68.597 L 0,126.649 Z"
            style="fill: #ffffff; fill-opacity: 1; fill-rule: nonzero; stroke: none"
            id="path3466"
          />
        </g>
      </g>
    </g>
  </g>
</svg>
`,qm=`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!-- Created with Inkscape (http://www.inkscape.org/) -->

<svg
  version="1.1"
  id="svg5007"
  xml:space="preserve"
  width="682.66669"
  height="682.66669"
  viewBox="0 0 682.66669 682.66669"
  xmlns="http://www.w3.org/2000/svg"
>
  <defs id="defs5011">
    <clipPath
      clipPathUnits="userSpaceOnUse"
      id="clipPath5021"
    >
      <path
        d="M 0,512 H 512 V 0 H 0 Z"
        id="path5019"
      />
    </clipPath>
  </defs>
  <g
    id="g5013"
    transform="matrix(1.3333333,0,0,-1.3333333,0,682.66667)"
  >
    <g id="g5015">
      <g
        id="g5017"
        clip-path="url(#clipPath5021)"
      >
        <g
          id="g5023"
          transform="translate(446,7.5)"
        >
          <path
            d="m 0,0 h -380 c -11.046,0 -20,8.954 -20,20 v 457 c 0,11.046 8.954,20 20,20 H 0 c 11.046,0 20,-8.954 20,-20 V 20 C 20,8.954 11.046,0 0,0"
            style="fill: #efe6e6; fill-opacity: 1; fill-rule: nonzero; stroke: none"
            id="path5025"
          />
        </g>
        <g
          id="g5027"
          transform="translate(465.9996,47.5)"
        >
          <path
            d="m 0,0 c -209.868,0 -380,170.132 -380,380 v 77 h -20 c -11.045,0 -20,-8.954 -20,-20 V -20 c 0,-11.046 8.955,-20 20,-20 h 380 c 11.046,0 20,8.954 20,20 z"
            style="fill: #e2d7d7; fill-opacity: 1; fill-rule: nonzero; stroke: none"
            id="path5029"
          />
        </g>
        <g
          id="g5031"
          transform="translate(236,199.8333)"
        >
          <path
            d="M 0,0 H 190 V 264.667 H 80 Z"
            style="fill: #ffffff; fill-opacity: 1; fill-rule: nonzero; stroke: none"
            id="path5033"
          />
        </g>
        <g
          id="g5035"
          transform="translate(236,199.8333)"
        >
          <path
            d="M 0,0 H 190 V 264.667 H 80 Z"
            style="fill: #5ad6ff; fill-opacity: 1; fill-rule: nonzero; stroke: none"
            id="path5037"
          />
        </g>
        <g
          id="g5039"
          transform="translate(86,199.8333)"
        >
          <path
            d="m 0,0 h 110 l 80,264.667 H 0 Z"
            style="fill: #f4e74d; fill-opacity: 1; fill-rule: nonzero; stroke: none"
            id="path5041"
          />
        </g>
        <g
          id="g5043"
          transform="translate(86,427.4996)"
        >
          <path
            d="M 0,0 V -227.666 H 75.725 C 28.171,-164.213 0,-85.397 0,0"
            style="fill: #eedb00; fill-opacity: 1; fill-rule: nonzero; stroke: none"
            id="path5045"
          />
        </g>
        <path
          d="M 426,47.5 H 86 v 112.333 h 340 z"
          style="fill: #b18cd9; fill-opacity: 1; fill-rule: nonzero; stroke: none"
          id="path5047"
        />
        <g
          id="g5049"
          transform="translate(196.2775,159.8334)"
        >
          <path
            d="m 0,0 h -110.278 v -112.333 h 340 v 2.085 C 140.254,-100.888 60.026,-60.484 0,0"
            style="fill: #996acc; fill-opacity: 1; fill-rule: nonzero; stroke: none"
            id="path5051"
          />
        </g>
        <g
          id="g5053"
          transform="translate(214.5152,99.0695)"
        >
          <path
            d="m 0,0 c 0,-10.669 -10.861,-19.318 -24.258,-19.318 -13.397,0 -24.257,8.649 -24.257,19.318 0,10.669 10.86,19.317 24.257,19.317 C -10.861,19.317 0,10.669 0,0"
            style="fill: #ffffff; fill-opacity: 1; fill-rule: nonzero; stroke: none"
            id="path5055"
          />
        </g>
        <g
          id="g5057"
          transform="translate(297.4848,99.0695)"
        >
          <path
            d="m 0,0 c 0,-10.669 10.861,-19.318 24.258,-19.318 13.397,0 24.257,8.649 24.257,19.318 0,10.669 -10.86,19.317 -24.257,19.317 C 10.861,19.317 0,10.669 0,0"
            style="fill: #ffffff; fill-opacity: 1; fill-rule: nonzero; stroke: none"
            id="path5059"
          />
        </g>
        <g
          id="g5061"
          transform="translate(204.3949,127.5815)"
        >
          <path
            d="M 0,0 V -9.916"
            style="
              fill: none;
              stroke: #000000;
              stroke-width: 15;
              stroke-linecap: round;
              stroke-linejoin: round;
              stroke-miterlimit: 10;
              stroke-dasharray: none;
              stroke-opacity: 1;
            "
            id="path5063"
          />
        </g>
        <g
          id="g5065"
          transform="translate(307.605,127.5815)"
        >
          <path
            d="M 0,0 V -9.916"
            style="
              fill: none;
              stroke: #000000;
              stroke-width: 15;
              stroke-linecap: round;
              stroke-linejoin: round;
              stroke-miterlimit: 10;
              stroke-dasharray: none;
              stroke-opacity: 1;
            "
            id="path5067"
          />
        </g>
        <g
          id="g5069"
          transform="translate(242.3946,117.9604)"
        >
          <path
            d="m 0,0 c 3.308,-3.796 8.175,-6.198 13.605,-6.198 5.431,0 10.298,2.402 13.606,6.198"
            style="
              fill: none;
              stroke: #000000;
              stroke-width: 15;
              stroke-linecap: round;
              stroke-linejoin: round;
              stroke-miterlimit: 10;
              stroke-dasharray: none;
              stroke-opacity: 1;
            "
            id="path5071"
          />
        </g>
        <g
          id="g5073"
          transform="translate(153.1665,442.2645)"
        >
          <path
            d="m 0,0 32.456,22.235 h -99.623 v -156.568 l 20.756,70.454 58.203,-44.799 -24.62,69.199 73.42,-2.032 z"
            style="fill: #fd5c6f; fill-opacity: 1; fill-rule: nonzero; stroke: none"
            id="path5075"
          />
        </g>
        <g
          id="g5077"
          transform="translate(86,427.4996)"
        >
          <path
            d="m 0,0 v -119.568 l 9.825,33.351 C 3.399,-58.516 0,-29.655 0,0"
            style="fill: #f6334c; fill-opacity: 1; fill-rule: nonzero; stroke: none"
            id="path5079"
          />
        </g>
        <g
          id="g5081"
          transform="translate(426,270.6974)"
        >
          <path
            d="m 0,0 -56.008,-43.108 23.692,66.587 -70.65,-1.955 58.306,39.945 -58.306,39.945 70.65,-1.955 -23.692,66.588 L 0,122.939 Z"
            style="fill: #ffffff; fill-opacity: 1; fill-rule: nonzero; stroke: none"
            id="path5083"
          />
        </g>
        <g
          id="g5085"
          transform="translate(446,7.5)"
        >
          <path
            d="m 0,0 h -380 c -11.046,0 -20,8.954 -20,20 v 457 c 0,11.046 8.954,20 20,20 H 0 c 11.046,0 20,-8.954 20,-20 V 20 C 20,8.954 11.046,0 0,0 Z"
            style="
              fill: none;
              stroke: #000000;
              stroke-width: 15;
              stroke-linecap: round;
              stroke-linejoin: round;
              stroke-miterlimit: 10;
              stroke-dasharray: none;
              stroke-opacity: 1;
            "
            id="path5087"
          />
        </g>
        <g
          id="g5089"
          transform="translate(426,346.167)"
        >
          <path
            d="m 0,0 v 118.333 h -110 l -80,-264.667 H 0 V -28"
            style="
              fill: none;
              stroke: #000000;
              stroke-width: 15;
              stroke-linecap: round;
              stroke-linejoin: round;
              stroke-miterlimit: 10;
              stroke-dasharray: none;
              stroke-opacity: 1;
            "
            id="path5091"
          />
        </g>
        <g
          id="g5093"
          transform="translate(86,199.8333)"
        >
          <path
            d="m 0,0 h 110 l 80,264.667 H 0 Z"
            style="
              fill: none;
              stroke: #000000;
              stroke-width: 15;
              stroke-linecap: round;
              stroke-linejoin: round;
              stroke-miterlimit: 10;
              stroke-dasharray: none;
              stroke-opacity: 1;
            "
            id="path5095"
          />
        </g>
        <g
          id="g5097"
          transform="translate(154.0172,159.8334)"
        >
          <path
            d="m 0,0 h 271.983 v -112.333 h -340 V 0 H -28"
            style="
              fill: none;
              stroke: #000000;
              stroke-width: 15;
              stroke-linecap: round;
              stroke-linejoin: round;
              stroke-miterlimit: 10;
              stroke-dasharray: none;
              stroke-opacity: 1;
            "
            id="path5099"
          />
        </g>
        <g
          id="g5101"
          transform="translate(86,307.9314)"
        >
          <path
            d="m 0,0 20.756,70.454 58.203,-44.799 -24.62,69.199 73.419,-2.032 -60.591,41.511 32.455,22.236"
            style="
              fill: none;
              stroke: #000000;
              stroke-width: 15;
              stroke-linecap: round;
              stroke-linejoin: round;
              stroke-miterlimit: 10;
              stroke-dasharray: none;
              stroke-opacity: 1;
            "
            id="path5103"
          />
        </g>
        <g
          id="g5105"
          transform="translate(426,270.6974)"
        >
          <path
            d="m 0,0 -56.008,-43.108 23.692,66.587 -70.65,-1.955 58.306,39.945 -58.306,39.945 70.65,-1.955 -23.692,66.588 L 0,122.939"
            style="
              fill: none;
              stroke: #000000;
              stroke-width: 15;
              stroke-linecap: round;
              stroke-linejoin: round;
              stroke-miterlimit: 10;
              stroke-dasharray: none;
              stroke-opacity: 1;
            "
            id="path5107"
          />
        </g>
      </g>
    </g>
  </g>
</svg>
`,jm=`<svg
  id="Capa_1"
  enable-background="new 0 0 512 512"
  height="512"
  viewBox="0 0 512 512"
  width="512"
  xmlns="http://www.w3.org/2000/svg"
>
  <g>
    <g>
      <g>
        <path
          d="m427.508 512h-343.02c-5.69 0-10.302-4.612-10.302-10.302v-491.396c0-5.69 4.612-10.302 10.302-10.302h343.02c5.69 0 10.302 4.612 10.302 10.302v491.396c-.001 5.69-4.613 10.302-10.302 10.302z"
          fill="#f2eff2"
        />
      </g>
    </g>
    <path
      d="m427.512 0h-41.238c5.687 0 10.302 4.615 10.302 10.302v36.12l-18.016 49.462 18.016 36.952v51.701l-13.787 87.003 13.787 55.974v51.669l-18.016 52.406 18.016 34.008v36.1c0 5.687-4.615 10.302-10.302 10.302h41.238c5.687 0 10.302-4.615 10.302-10.302v-491.395c0-5.687-4.615-10.302-10.302-10.302z"
      fill="#e1dde1"
    />
    <path
      d="m396.6 46.36v86.52c0 2.85-2.31 5.15-5.15 5.15h-110.11l-22.53-48.41 22.53-48.41h110.11c2.84 0 5.15 2.3 5.15 5.15z"
      fill="#3ad1e0"
    />
    <path
      d="m396.599 46.358v86.525c0 2.843-2.308 5.151-5.151 5.151h-30.926c2.843 0 5.151-2.308 5.151-5.151v-86.525c0-2.843-2.308-5.151-5.151-5.151h30.926c2.844 0 5.151 2.308 5.151 5.151z"
      fill="#20bfd5"
    />
    <path
      d="m281.34 41.207h-39.904c-2.845 0-5.151 2.306-5.151 5.151v86.525c0 2.845 2.306 5.151 5.151 5.151h39.904z"
      fill="#23f1a8"
    />
    <path
      d="m304.73 470.79h-77.71l-39.22-20.29-39.23 20.29h-28.03c-2.84 0-5.15-2.3-5.15-5.15v-86.52c0-2.85 2.31-5.15 5.15-5.15h128.92c1.76 0 3.4.89 4.34 2.37l55.27 86.53c2.19 3.43-.27 7.92-4.34 7.92z"
      fill="#23f1a8"
    />
    <g>
      <path
        d="m227.019 443.104v27.689h-78.446v-27.689c0-21.669 17.569-39.228 39.228-39.228 10.83 0 20.639 4.39 27.729 11.489 7.099 7.1 11.489 16.899 11.489 27.739z"
        fill="#ae6ad8"
      />
      <path
        d="m227.021 443.101v27.691h-29.061v-27.691c0-10.838-4.389-20.634-11.486-27.732-3.729-3.74-8.211-6.727-13.207-8.715 4.492-1.793 9.406-2.782 14.536-2.782 10.827 0 20.635 4.389 27.732 11.497 7.097 7.098 11.486 16.895 11.486 27.732z"
        fill="#975bbb"
      />
    </g>
    <path
      d="m304.728 470.793h-30.926c4.069 0 6.531-4.492 4.347-7.922l-55.269-86.525c-.948-1.483-2.586-2.38-4.347-2.38h30.926c1.762 0 3.4.896 4.347 2.38l55.269 86.525c2.184 3.43-.278 7.922-4.347 7.922z"
      fill="#27e19d"
    />
    <path
      d="m391.448 373.966h-81.106c-4.068 0-6.531 4.495-4.341 7.924l55.269 86.525c.946 1.482 2.583 2.378 4.341 2.378h25.837c2.845 0 5.151-2.306 5.151-5.151v-86.525c0-2.845-2.306-5.151-5.151-5.151z"
      fill="#ae6ad8"
    />
    <path
      d="m396.599 379.117v86.525c0 2.843-2.308 5.151-5.151 5.151h-25.837c-.907 0-1.772-.237-2.534-.68 1.556-.886 2.596-2.555 2.596-4.471v-86.525c0-2.843-2.308-5.151-5.151-5.151h30.926c2.844 0 5.151 2.308 5.151 5.151z"
      fill="#975bbb"
    />
    <g>
      <path
        d="m195.602 46.358v86.525c0 2.845-2.306 5.151-5.151 5.151h-69.91c-2.845 0-5.151-2.306-5.151-5.151v-86.525c0-2.845 2.306-5.151 5.151-5.151h69.91c2.845 0 5.151 2.306 5.151 5.151z"
        fill="#3ad1e0"
      />
      <path
        d="m195.6 46.358v86.525c0 2.843-2.308 5.151-5.151 5.151h-30.926c2.843 0 5.151-2.308 5.151-5.151v-86.525c0-2.843-2.308-5.151-5.151-5.151h30.926c2.844 0 5.151 2.308 5.151 5.151z"
        fill="#20bfd5"
      />
    </g>
    <g>
      <path
        d="m396.6 184.39v143.22c0 2.84-2.31 5.15-5.15 5.15h-30.93l-104.53-27.53-104.52 27.53h-30.93c-2.84 0-5.15-2.31-5.15-5.15v-143.22c0-2.84 2.31-5.15 5.15-5.15h47.77l87.68 16.15 87.69-16.15h47.77c2.84 0 5.15 2.31 5.15 5.15z"
        fill="#fb54b6"
      />
    </g>
    <path
      d="m151.473 332.759c0-57.729 46.798-104.527 104.527-104.527s104.527 46.798 104.527 104.527z"
      fill="#fb9927"
    />
    <path
      d="m360.522 332.759h-35.397c0-51.694-37.519-94.612-86.824-103.028 5.748-.979 11.662-1.494 17.699-1.494 57.731 0 104.522 46.79 104.522 104.522z"
      fill="#f98824"
    />
    <g>
      <path
        d="m396.599 184.392v143.216c0 2.843-2.308 5.151-5.151 5.151h-30.926c2.843 0 5.151-2.308 5.151-5.151v-143.216c0-2.843-2.308-5.151-5.151-5.151h30.926c2.844 0 5.151 2.308 5.151 5.151z"
        fill="#fb33a8"
      />
    </g>
    <g>
      <g>
        <path
          d="m345.43 247.027c-.144 0-.299 0-.453-.01-24.024-1.226-43.947 17.946-43.947 41.722 0 .721.021 1.442.051 2.174.268 5.079-3.853 8.489-8.128 8.489-2.112 0-4.244-.814-5.913-2.678-8.293-9.189-19.676-13.794-31.039-13.794s-22.746 4.605-31.039 13.794c-1.669 1.865-3.801 2.678-5.913 2.678-4.275 0-8.396-3.41-8.128-8.489.031-.731.041-1.453.041-2.174 0-23.777-19.924-42.948-43.937-41.722-.155.01-.309.01-.464.01-7.263 0-10.879-9.076-5.357-14.062 9.189-8.293 13.794-19.666 13.794-31.039 0-7.912-2.225-15.813-6.686-22.685h175.378c-4.461 6.871-6.686 14.773-6.686 22.685 0 11.373 4.605 22.746 13.794 31.039 5.521 4.986 1.905 14.062-5.368 14.062z"
          fill="#fdef63"
        />
        <g>
          <g id="XMLID_00000127012381744132405410000009872483291948348836_">
            <path
              d="m280.138 231.696c-4.268 0-7.726-3.459-7.726-7.726v-.107c0-4.267 3.459-7.726 7.726-7.726s7.726 3.459 7.726 7.726v.107c0 4.267-3.459 7.726-7.726 7.726z"
              fill="#554e55"
            />
          </g>
          <g id="XMLID_00000080918978500845250090000017315552773041050031_">
            <path
              d="m256 231.696c-4.267 0-7.726-3.459-7.726-7.726v-.107c0-4.267 3.459-7.726 7.726-7.726 4.268 0 7.726 3.459 7.726 7.726v.107c0 4.267-3.458 7.726-7.726 7.726z"
              fill="#554e55"
            />
          </g>
          <g id="XMLID_00000140711681861242238370000008769002181148908969_">
            <path
              d="m231.862 231.696c-4.267 0-7.726-3.459-7.726-7.726v-.107c0-4.267 3.459-7.726 7.726-7.726s7.726 3.459 7.726 7.726v.107c.001 4.267-3.459 7.726-7.726 7.726z"
              fill="#554e55"
            />
          </g>
        </g>
        <path
          d="m345.43 247.037c-.155 0-.299 0-.443-.021-24.034-1.226-43.948 17.956-43.948 41.722 0 .721.01 1.432.052 2.174.258 5.079-3.863 8.499-8.128 8.499-2.122 0-4.255-.824-5.924-2.689-6.954-7.685-16.05-12.167-25.507-13.423 29.968-14.804 50.582-45.678 50.582-81.364 0-7.84-.999-15.442-2.864-22.695h34.429c-4.45 6.871-6.676 14.783-6.676 22.685 0 11.373 4.605 22.757 13.784 31.05 5.532 4.966 1.926 14.062-5.357 14.062z"
          fill="#f3d730"
        />
      </g>
    </g>
    <g>
      <g>
        <g>
          <circle
            cx="187.8"
            cy="385.284"
            fill="#d8b2ec"
            r="25.455"
          />
        </g>
      </g>
    </g>
    <g>
      <g id="XMLID_00000028301319025648580530000009457246182494066313_">
        <path
          d="m316.443 111.45c-4.258 0-7.714-3.445-7.726-7.705-.012-4.267 3.438-7.736 7.705-7.747l41.222-.114h.021c4.258 0 7.714 3.445 7.726 7.705.012 4.267-3.438 7.736-7.705 7.747l-41.222.114c-.007 0-.014 0-.021 0z"
          fill="#f2eff2"
        />
      </g>
      <g>
        <path
          d="m357.665 83.243h-21.761c-4.268 0-7.726-3.459-7.726-7.726s3.459-7.726 7.726-7.726h21.761c4.268 0 7.726 3.459 7.726 7.726s-3.458 7.726-7.726 7.726z"
          fill="#f2eff2"
        />
      </g>
    </g>
  </g>
</svg>
`,Km=`<?xml version="1.0" encoding="UTF-8"?>
<svg
  xmlns="http://www.w3.org/2000/svg"
  version="1.1"
  id="Capa_1"
  x="0px"
  y="0px"
  viewBox="0 0 512 512"
  style="enable-background: new 0 0 512 512"
  xml:space="preserve"
  width="512"
  height="512"
>
  <g>
    <g>
      <g>
        <path
          style="fill: #f2eff2"
          d="M422.485,504.5H89.515c-5.523,0-10-4.477-10-10v-477c0-5.523,4.477-10,10-10h332.971&#10;&#9;&#9;&#9;&#9;c5.523,0,10,4.477,10,10v477C432.485,500.023,428.008,504.5,422.485,504.5z"
        />
      </g>
    </g>
    <g>
      <g>
        <path
          style="fill: #e1dde1"
          d="M432.49,17.5v477c0,5.52-4.48,10-10,10h-40.03c5.52,0,10-4.48,10-10v-477c0-5.52-4.48-10-10-10&#10;&#9;&#9;&#9;&#9;h40.03C428.01,7.5,432.49,11.98,432.49,17.5z"
        />
      </g>
    </g>
    <g>
      <path
        style="
          fill: none;
          stroke: #000000;
          stroke-width: 15;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-miterlimit: 10;
        "
        d="&#10;&#9;&#9;&#9;M158.639,7.5H89.515c-5.523,0-10,4.477-10,10v477c0,5.523,4.477,10,10,10h332.971c5.523,0,10-4.477,10-10v-477&#10;&#9;&#9;&#9;c0-5.523-4.477-10-10-10H191.801"
      />
    </g>
    <path
      style="fill: #3ad1e0"
      d="M392.482,52.5v83.99c0,2.761-2.239,5-5,5H241.866c-2.761,0-5-2.239-5-5V52.5c0-2.761,2.239-5,5-5&#10;&#9;&#9;h145.617C390.244,47.5,392.482,49.739,392.482,52.5z"
    />
    <path
      style="fill: #20bfd5"
      d="M392.482,52.5v83.99c0,2.76-2.24,5-5,5h-30.02c2.76,0,5-2.24,5-5V52.5c0-2.76-2.24-5-5-5h30.02&#10;&#9;&#9;C390.242,47.5,392.482,49.74,392.482,52.5z"
    />
    <path
      style="fill: #26d192"
      d="M280.6,47.5h-38.735c-2.761,0-5,2.239-5,5v83.99c0,2.761,2.239,5,5,5H280.6V47.5z"
    />

    <line
      style="
        fill: none;
        stroke: #000000;
        stroke-width: 15;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-miterlimit: 10;
      "
      x1="280.6"
      y1="141.49"
      x2="280.6"
      y2="47.5"
    />
    <path
      style="fill: #23f1a8"
      d="M124.512,370.51h125.143c1.706,0,3.295,0.87,4.214,2.308l53.65,83.99&#10;&#9;&#9;c2.126,3.328-0.264,7.692-4.214,7.692H124.512c-2.761,0-5-2.239-5-5v-83.99C119.512,372.749,121.751,370.51,124.512,370.51z"
    />
    <g>
      <path
        style="fill: #ae6ad8"
        d="M227.87,437.622V464.5h-76.148v-26.878c0-21.034,17.054-38.079,38.079-38.079&#10;&#9;&#9;&#9;c10.512,0,20.034,4.261,26.916,11.153C223.609,417.588,227.87,427.1,227.87,437.622z"
      />
      <path
        style="fill: #975bbb"
        d="M227.872,437.62v26.88h-28.21v-26.88c0-10.52-4.26-20.03-11.15-26.92&#10;&#9;&#9;&#9;c-3.62-3.63-7.97-6.53-12.82-8.46c4.36-1.74,9.13-2.7,14.11-2.7c10.51,0,20.03,4.26,26.92,11.16&#10;&#9;&#9;&#9;C223.612,417.59,227.872,427.1,227.872,437.62z"
      />
      <path
        style="
          fill: none;
          stroke: #000000;
          stroke-width: 15;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-miterlimit: 10;
        "
        d="&#10;&#9;&#9;&#9;M151.722,464.5v-26.878c0-21.034,17.054-38.079,38.079-38.079c10.512,0,20.034,4.261,26.916,11.153&#10;&#9;&#9;&#9;c6.892,6.892,11.153,16.404,11.153,26.926V464.5"
      />
    </g>
    <path
      style="fill: #27e19d"
      d="M303.302,464.5h-30.02c3.95,0,6.34-4.36,4.22-7.69l-53.65-83.99c-0.92-1.44-2.51-2.31-4.22-2.31&#10;&#9;&#9;h30.02c1.71,0,3.3,0.87,4.22,2.31l53.65,83.99C309.642,460.14,307.252,464.5,303.302,464.5z"
    />
    <path
      style="fill: #ae6ad8"
      d="M387.482,370.51h-78.73c-3.949,0-6.34,4.363-4.214,7.692l53.65,83.99&#10;&#9;&#9;c0.919,1.438,2.507,2.308,4.214,2.308h25.08c2.761,0,5-2.239,5-5v-83.99C392.482,372.749,390.244,370.51,387.482,370.51z"
    />
    <path
      style="fill: #975bbb"
      d="M392.482,375.51v83.99c0,2.76-2.24,5-5,5h-25.08c-0.88,0-1.72-0.23-2.46-0.66&#10;&#9;&#9;c1.51-0.86,2.52-2.48,2.52-4.34v-83.99c0-2.76-2.24-5-5-5h30.02C390.242,370.51,392.482,372.75,392.482,375.51z"
    />
    <path
      style="
        fill: none;
        stroke: #000000;
        stroke-width: 15;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-miterlimit: 10;
      "
      d="&#10;&#9;&#9;M392.482,52.5v83.99c0,2.761-2.239,5-5,5H241.866c-2.761,0-5-2.239-5-5V52.5c0-2.761,2.239-5,5-5h145.617&#10;&#9;&#9;C390.244,47.5,392.482,49.739,392.482,52.5z"
    />
    <g>
      <path
        style="fill: #3ad1e0"
        d="M197.374,52.5v83.99c0,2.761-2.239,5-5,5h-67.862c-2.761,0-5-2.239-5-5V52.5c0-2.761,2.239-5,5-5&#10;&#9;&#9;&#9;h67.862C195.135,47.5,197.374,49.739,197.374,52.5z"
      />
      <path
        style="fill: #20bfd5"
        d="M197.372,52.5v83.99c0,2.76-2.24,5-5,5h-30.02c2.76,0,5-2.24,5-5V52.5c0-2.76-2.24-5-5-5h30.02&#10;&#9;&#9;&#9;C195.132,47.5,197.372,49.74,197.372,52.5z"
      />
      <path
        style="
          fill: none;
          stroke: #000000;
          stroke-width: 15;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-miterlimit: 10;
        "
        d="&#10;&#9;&#9;&#9;M197.374,52.5v83.99c0,2.761-2.239,5-5,5h-67.862c-2.761,0-5-2.239-5-5V52.5c0-2.761,2.239-5,5-5h67.862&#10;&#9;&#9;&#9;C195.135,47.5,197.374,49.739,197.374,52.5z"
      />
    </g>
    <g>
      <path
        style="fill: #fb54b6"
        d="M124.512,181.49h262.97c2.761,0,5,2.239,5,5v139.02c0,2.761-2.239,5-5,5h-262.97&#10;&#9;&#9;&#9;c-2.761,0-5-2.239-5-5V186.49C119.512,183.729,121.751,181.49,124.512,181.49z"
      />
    </g>
    <path
      style="fill: #fb9927"
      d="M154.537,330.51c0-56.038,45.427-101.465,101.465-101.465s101.465,45.427,101.465,101.465H154.537z"
    />
    <path
      style="fill: #f98824"
      d="M357.462,330.51h-34.36c0-50.18-36.42-91.84-84.28-100.01c5.58-0.95,11.32-1.45,17.18-1.45&#10;&#9;&#9;C312.042,229.05,357.462,274.47,357.462,330.51z"
    />
    <path
      style="
        fill: none;
        stroke: #000000;
        stroke-width: 15;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-miterlimit: 10;
      "
      d="&#10;&#9;&#9;M154.537,330.51c0-56.038,45.427-101.465,101.465-101.465s101.465,45.427,101.465,101.465"
    />
    <g>
      <path
        style="fill: #fb33a8"
        d="M392.482,186.49v139.02c0,2.76-2.24,5-5,5h-30.02c2.76,0,5-2.24,5-5V186.49c0-2.76-2.24-5-5-5&#10;&#9;&#9;&#9;h30.02C390.242,181.49,392.482,183.73,392.482,186.49z"
      />
    </g>
    <g>
      <g>
        <path
          style="fill: #fdef63"
          d="M342.812,247.29c-0.14,0-0.29,0-0.44-0.01c-23.32-1.19-42.66,17.42-42.66,40.5&#10;&#9;&#9;&#9;&#9;c0,0.7,0.02,1.4,0.05,2.11c0.26,4.93-3.74,8.24-7.89,8.24c-2.05,0-4.12-0.79-5.74-2.6c-8.05-8.92-19.1-13.39-30.13-13.39&#10;&#9;&#9;&#9;&#9;s-22.08,4.47-30.13,13.39c-1.62,1.81-3.69,2.6-5.74,2.6c-4.15,0-8.15-3.31-7.89-8.24c0.03-0.71,0.04-1.41,0.04-2.11&#10;&#9;&#9;&#9;&#9;c0-23.08-19.34-41.69-42.65-40.5c-0.15,0.01-0.3,0.01-0.45,0.01c-7.05,0-10.56-8.81-5.2-13.65c8.92-8.05,13.39-19.09,13.39-30.13&#10;&#9;&#9;&#9;&#9;c0-7.68-2.16-15.35-6.49-22.02h170.24c-4.33,6.67-6.49,14.34-6.49,22.02c0,11.04,4.47,22.08,13.39,30.13&#10;&#9;&#9;&#9;&#9;C353.382,238.48,349.872,247.29,342.812,247.29z"
        />
        <g>
          <line
            id="XMLID_00000127012381744132405410000009872483291948348836_"
            style="
              fill: none;
              stroke: #000000;
              stroke-width: 15;
              stroke-linecap: round;
              stroke-linejoin: round;
              stroke-miterlimit: 10;
            "
            x1="279.433"
            y1="224.908"
            x2="279.433"
            y2="224.805"
          />

          <line
            id="XMLID_00000080918978500845250090000017315552773041050031_"
            style="
              fill: none;
              stroke: #000000;
              stroke-width: 15;
              stroke-linecap: round;
              stroke-linejoin: round;
              stroke-miterlimit: 10;
            "
            x1="256.002"
            y1="224.908"
            x2="256.002"
            y2="224.805"
          />

          <line
            id="XMLID_00000140711681861242238370000008769002181148908969_"
            style="
              fill: none;
              stroke: #000000;
              stroke-width: 15;
              stroke-linecap: round;
              stroke-linejoin: round;
              stroke-miterlimit: 10;
            "
            x1="232.572"
            y1="224.908"
            x2="232.572"
            y2="224.805"
          />
        </g>
        <path
          style="fill: #f3d730"
          d="M342.812,247.3c-0.15,0-0.29,0-0.43-0.02c-23.33-1.19-42.66,17.43-42.66,40.5&#10;&#9;&#9;&#9;&#9;c0,0.7,0.01,1.39,0.05,2.11c0.25,4.93-3.75,8.25-7.89,8.25c-2.06,0-4.13-0.8-5.75-2.61c-6.75-7.46-15.58-11.81-24.76-13.03&#10;&#9;&#9;&#9;&#9;c29.09-14.37,49.1-44.34,49.1-78.98c0-7.61-0.97-14.99-2.78-22.03h33.42c-4.32,6.67-6.48,14.35-6.48,22.02&#10;&#9;&#9;&#9;&#9;c0,11.04,4.47,22.09,13.38,30.14C353.382,238.47,349.882,247.3,342.812,247.3z"
        />
      </g>
      <path
        style="
          fill: none;
          stroke: #000000;
          stroke-width: 15;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-miterlimit: 10;
        "
        d="&#10;&#9;&#9;&#9;M341.122,181.49c-4.33,6.67-6.49,14.34-6.49,22.02c0,11.04,4.47,22.08,13.39,30.13c5.36,4.84,1.85,13.65-5.21,13.65&#10;&#9;&#9;&#9;c-0.14,0-0.29,0-0.44-0.01c-23.32-1.19-42.66,17.42-42.66,40.5c0,0.7,0.02,1.4,0.05,2.11c0.26,4.93-3.74,8.24-7.89,8.24&#10;&#9;&#9;&#9;c-2.05,0-4.12-0.79-5.74-2.6c-8.05-8.92-19.1-13.39-30.13-13.39s-22.08,4.47-30.13,13.39c-1.62,1.81-3.69,2.6-5.74,2.6&#10;&#9;&#9;&#9;c-4.15,0-8.15-3.31-7.89-8.24c0.03-0.71,0.04-1.41,0.04-2.11c0-23.08-19.34-41.69-42.65-40.5c-0.15,0.01-0.3,0.01-0.45,0.01&#10;&#9;&#9;&#9;c-7.05,0-10.56-8.81-5.2-13.65c8.92-8.05,13.39-19.09,13.39-30.13c0-7.68-2.16-15.35-6.49-22.02"
      />
    </g>
    <g>
      <path
        style="
          fill: none;
          stroke: #000000;
          stroke-width: 15;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-miterlimit: 10;
        "
        d="&#10;&#9;&#9;&#9;M208.726,181.49h-84.213c-2.761,0-5,2.239-5,5v139.02c0,2.761,2.239,5,5,5h262.97c2.761,0,5-2.239,5-5V186.49c0-2.761-2.239-5-5-5&#10;&#9;&#9;&#9;H241.888"
      />
    </g>
    <path
      style="
        fill: none;
        stroke: #000000;
        stroke-width: 15;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-miterlimit: 10;
      "
      d="&#10;&#9;&#9;M124.512,370.51h125.143c1.706,0,3.295,0.87,4.214,2.308l53.65,83.99c2.126,3.328-0.264,7.692-4.214,7.692H124.512&#10;&#9;&#9;c-2.761,0-5-2.239-5-5v-83.99C119.512,372.749,121.751,370.51,124.512,370.51z"
    />
    <path
      style="
        fill: none;
        stroke: #000000;
        stroke-width: 15;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-miterlimit: 10;
      "
      d="&#10;&#9;&#9;M392.482,397.976V375.51c0-2.761-2.239-5-5-5h-78.73c-3.949,0-6.34,4.363-4.214,7.692l53.65,83.99&#10;&#9;&#9;c0.919,1.438,2.507,2.308,4.214,2.308h25.08c2.761,0,5-2.239,5-5v-28.362"
    />
    <g>
      <g>
        <g>
          <circle
            style="fill: #d8b2ec"
            cx="189.8"
            cy="381.497"
            r="24.709"
          />

          <circle
            style="
              fill: none;
              stroke: #000000;
              stroke-width: 15;
              stroke-linecap: round;
              stroke-linejoin: round;
              stroke-miterlimit: 10;
            "
            cx="189.8"
            cy="381.497"
            r="24.709"
          />
        </g>
      </g>
    </g>
    <g>
      <line
        id="XMLID_00000028301319025648580530000009457246182494066313_"
        style="
          fill: none;
          stroke: #000000;
          stroke-width: 15;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-miterlimit: 10;
        "
        x1="314.674"
        y1="108.185"
        x2="354.689"
        y2="108.075"
      />

      <line
        style="
          fill: none;
          stroke: #000000;
          stroke-width: 15;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-miterlimit: 10;
        "
        x1="333.566"
        y1="80.805"
        x2="354.689"
        y2="80.805"
      />
    </g>
  </g>
</svg>
`,Ym=`<svg
  xmlns="http://www.w3.org/2000/svg"
  class="icon icon-tabler icon-tabler-category"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  stroke-width="2"
  stroke="currentColor"
  fill="none"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path
    stroke="none"
    d="M0 0h24v24H0z"
    fill="none"
  />
  <path d="M4 4h6v6h-6z" />
  <path d="M14 4h6v6h-6z" />
  <path d="M4 14h6v6h-6z" />
  <path d="M17 17m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
</svg>
`,Xm=`<svg
  xmlns="http://www.w3.org/2000/svg"
  class="icon icon-tabler icon-tabler-check"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  stroke-width="2"
  stroke="currentColor"
  fill="none"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path
    stroke="none"
    d="M0 0h24v24H0z"
    fill="none"
  />
  <path d="M5 12l5 5l10 -10" />
</svg>
`,Jm='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-left"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 6l-6 6l6 6" /></svg>',Qm=`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right"
>
  <path
    stroke="none"
    d="M0 0h24v24H0z"
    fill="none"
  />
  <path d="M9 6l6 6l-6 6" />
</svg>
`,e5=`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-circle-check"
>
  <path
    stroke="none"
    d="M0 0h24v24H0z"
    fill="none"
  />
  <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
  <path d="M9 12l2 2l4 -4" />
</svg>
`,t5=`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-circle-x"
>
  <path
    stroke="none"
    d="M0 0h24v24H0z"
    fill="none"
  />
  <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
  <path d="M10 10l4 4m0 -4l-4 4" />
</svg>
`,n5=`<svg
  xmlns="http://www.w3.org/2000/svg"
  class="icon icon-tabler icon-tabler-device-floppy"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  stroke-width="2"
  stroke="currentColor"
  fill="none"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path
    stroke="none"
    d="M0 0h24v24H0z"
    fill="none"
  />
  <path d="M6 4h10l4 4v10a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2" />
  <path d="M12 14m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M14 4l0 4l-6 0l0 -4" />
</svg>
`,r5=`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-dots-vertical"
>
  <path
    stroke="none"
    d="M0 0h24v24H0z"
    fill="none"
  />
  <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
  <path d="M12 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
  <path d="M12 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
</svg>
`,i5=`<svg
  id="Capa_1"
  enable-background="new 0 0 512 512"
  viewBox="0 0 512 512"
  xmlns="http://www.w3.org/2000/svg"
>
  <g>
    <g>
      <path
        d="m369.32 512h-226.64c-45.516 0-82.414-36.898-82.414-82.414v-347.172c0-45.516 36.898-82.414 82.414-82.414h226.64c45.516 0 82.414 36.898 82.414 82.414v347.171c0 45.517-36.898 82.415-82.414 82.415z"
        fill="#636978"
      />
    </g>
    <g>
      <path
        d="m225.095 450.189v-388.378c0-34.137 27.673-61.811 61.81-61.811h-144.225c-45.516 0-82.414 36.898-82.414 82.414v347.171c0 45.516 36.898 82.414 82.414 82.414h144.225c-34.137.001-61.81-27.673-61.81-61.81z"
        fill="#555a66"
      />
    </g>
    <g>
      <path
        d="m369.32 61.811h-226.64c-11.379 0-20.604 9.225-20.604 20.604v336.869c0 11.379 9.225 20.604 20.604 20.604h226.64c11.379 0 20.604-9.225 20.604-20.604v-336.87c0-11.379-9.225-20.603-20.604-20.603z"
        fill="#96e8ff"
      />
    </g>
    <g>
      <path
        d="m122.076 82.414v336.869c0 11.379 9.225 20.604 20.604 20.604h82.414v-378.076h-82.414c-11.379 0-20.604 9.224-20.604 20.603z"
        fill="#80dbff"
      />
    </g>
    <g>
      <path
        d="m256 111.277c-27.66-8.24-55.124-9.125-82.742-2.655-5.835 1.367-9.975 6.555-9.975 12.548v95.771c0 6.566 6.064 11.463 12.479 10.063 23.872-5.21 47.636-4.921 71.52.866 5.731 1.389 11.704 1.389 17.435 0 23.884-5.788 47.648-6.077 71.52-.866 6.415 1.4 12.479-3.497 12.479-10.063 0-40.343 0-55.429 0-95.771 0-5.993-4.139-11.181-9.975-12.548-27.617-6.471-55.081-5.585-82.741 2.655z"
        fill="#fff"
      />
    </g>
    <g>
      <path
        d="m173.258 108.622c-5.835 1.367-9.975 6.555-9.975 12.548v95.771c0 6.566 6.064 11.463 12.479 10.063 23.872-5.21 47.636-4.921 71.52.866 2.866.694 5.791 1.041 8.717 1.041v-117.634c-27.659-8.24-55.123-9.126-82.741-2.655z"
        fill="#f5fafc"
      />
    </g>
    <g>
      <path
        d="m205.037 104.432c-10.584.315-21.171 1.704-31.781 4.19-5.834 1.367-9.973 6.56-9.973 12.552v95.761c0 6.547 6.037 11.478 12.432 10.08 23.888-5.221 47.667-4.935 71.567.856 2.866.694 8.717 1.042 8.717 1.042 0-13.231-13.741-21.854-26.952-27.087-14.54-5.759-24.011-19.905-24.011-35.544v-61.85z"
        fill="#e1f1fa"
      />
    </g>
    <g>
      <g>
        <path
          d="m338.414 289.266h-164.829c-4.142 0-7.5-3.357-7.5-7.5s3.358-7.5 7.5-7.5h164.829c4.143 0 7.5 3.357 7.5 7.5s-3.357 7.5-7.5 7.5z"
          fill="#19cffc"
        />
      </g>
      <g>
        <path
          d="m338.414 330.473h-164.829c-4.142 0-7.5-3.357-7.5-7.5s3.358-7.5 7.5-7.5h164.829c4.143 0 7.5 3.357 7.5 7.5s-3.357 7.5-7.5 7.5z"
          fill="#19cffc"
        />
      </g>
      <g>
        <g>
          <path
            d="m191.667 385.134c-4.142 0-7.5-3.357-7.5-7.5v-12.362c0-4.143 3.358-7.5 7.5-7.5s7.5 3.357 7.5 7.5v12.362c0 4.142-3.358 7.5-7.5 7.5z"
            fill="#495560"
          />
        </g>
        <g>
          <path
            d="m320.333 385.134c-4.143 0-7.5-3.357-7.5-7.5v-12.362c0-4.143 3.357-7.5 7.5-7.5s7.5 3.357 7.5 7.5v12.362c0 4.142-3.357 7.5-7.5 7.5z"
            fill="#495560"
          />
        </g>
        <g>
          <path
            d="m256 392.493c-8.668 0-16.911-3.754-22.615-10.3-2.721-3.123-2.396-7.86.727-10.582 3.122-2.721 7.86-2.396 10.582.727 2.855 3.276 6.976 5.155 11.307 5.155s8.452-1.879 11.307-5.155c2.723-3.122 7.457-3.447 10.582-.727 3.122 2.722 3.448 7.459.727 10.582-5.706 6.546-13.949 10.3-22.617 10.3z"
            fill="#495560"
          />
        </g>
      </g>
    </g>
  </g>
  <g />
  <g />
  <g />
  <g />
  <g />
  <g />
  <g />
  <g />
  <g />
  <g />
  <g />
  <g />
  <g />
  <g />
  <g />
</svg>
`,o5=`<svg
  version="1.1"
  id="Capa_1"
  xmlns="http://www.w3.org/2000/svg"
  x="0px"
  y="0px"
  viewBox="0 0 512 512"
  style="enable-background: new 0 0 512 512"
  xml:space="preserve"
>
  <g>
    <path
      style="fill: #636978"
      d="M366,504.5H146c-44.183,0-80-35.817-80-80v-337c0-44.183,35.817-80,80-80h220&#10;&#9;&#9;c44.183,0,80,35.817,80,80v337C446,468.683,410.183,504.5,366,504.5z"
    />
    <path
      style="fill: #555a66"
      d="M226,444.5v-377c0-33.137,26.863-60,60-60H146c-44.183,0-80,35.817-80,80v337&#10;&#9;&#9;c0,44.183,35.817,80,80,80h140C252.863,504.5,226,477.637,226,444.5z"
    />
    <path
      style="fill: #96e8ff"
      d="M366,67.5H146c-11.046,0-20,8.954-20,20v327c0,11.046,8.954,20,20,20h220c11.046,0,20-8.954,20-20&#10;&#9;&#9;v-327C386,76.454,377.046,67.5,366,67.5z"
    />
    <path
      style="fill: #80dbff"
      d="M126,87.5v327c0,11.046,8.954,20,20,20h80v-367h-80C134.954,67.5,126,76.454,126,87.5z"
    />
    <path
      style="fill: #ffffff"
      d="M256,115.517c-26.85-7.998-53.509-8.858-80.318-2.577c-5.664,1.327-9.682,6.363-9.682,12.18&#10;&#9;&#9;c0,39.161,0,53.805,0,92.965c0,6.374,5.886,11.128,12.113,9.768c23.172-5.058,46.241-4.777,69.425,0.841&#10;&#9;&#9;c5.563,1.348,11.361,1.348,16.924,0c23.184-5.618,46.252-5.898,69.425-0.841c6.227,1.359,12.113-3.395,12.113-9.768&#10;&#9;&#9;c0-39.161,0-53.805,0-92.965c0-5.818-4.018-10.853-9.682-12.18C309.509,106.659,282.85,107.518,256,115.517z"
    />
    <path
      style="fill: #f5fafc"
      d="M175.682,112.94c-5.664,1.327-9.682,6.363-9.682,12.18c0,39.161,0,53.805,0,92.965&#10;&#9;&#9;c0,6.374,5.886,11.128,12.113,9.769c23.172-5.058,46.241-4.777,69.425,0.841c2.782,0.674,5.622,1.011,8.462,1.011V115.517&#10;&#9;&#9;C229.15,107.518,202.491,106.659,175.682,112.94z"
    />
    <path
      style="fill: #e1f1fa"
      d="M206.53,108.873c-10.274,0.306-20.551,1.654-30.85,4.067c-5.663,1.327-9.681,6.368-9.681,12.184&#10;&#9;&#9;c0,39.155,0,53.801,0,92.955c0,6.355,5.86,11.141,12.068,9.785c23.188-5.068,46.271-4.791,69.47,0.831&#10;&#9;&#9;c2.782,0.674,8.462,1.011,8.462,1.011c0-12.844-13.338-21.214-26.163-26.293c-14.114-5.59-23.307-19.322-23.307-34.502V108.873z"
    />
    <g>
      <path
        style="
          fill: none;
          stroke: #000000;
          stroke-width: 15;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-miterlimit: 10;
        "
        d="&#10;&#9;&#9;&#9;M366,504.5H146c-44.183,0-80-35.817-80-80v-337c0-44.183,35.817-80,80-80h220c44.183,0,80,35.817,80,80v337&#10;&#9;&#9;&#9;C446,468.683,410.183,504.5,366,504.5z"
      />
      <path
        style="
          fill: none;
          stroke: #000000;
          stroke-width: 15;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-miterlimit: 10;
        "
        d="&#10;&#9;&#9;&#9;M126,398.01v16.49c0,11.046,8.954,20,20,20h220c11.046,0,20-8.954,20-20v-327c0-11.046-8.954-20-20-20H146&#10;&#9;&#9;&#9;c-11.046,0-20,8.954-20,20v280.51"
      />

      <line
        style="
          fill: none;
          stroke: #000000;
          stroke-width: 15;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-miterlimit: 10;
        "
        x1="176"
        y1="281.01"
        x2="336"
        y2="281.01"
      />

      <line
        style="
          fill: none;
          stroke: #000000;
          stroke-width: 15;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-miterlimit: 10;
        "
        x1="176"
        y1="321.01"
        x2="336"
        y2="321.01"
      />
      <path
        style="
          fill: none;
          stroke: #000000;
          stroke-width: 15;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-miterlimit: 10;
        "
        d="&#10;&#9;&#9;&#9;M286.144,109.53c-10.033,0.992-20.075,2.987-30.144,5.986c-26.85-7.998-53.509-8.858-80.318-2.577&#10;&#9;&#9;&#9;c-5.664,1.327-9.682,6.363-9.682,12.18c0,39.161,0,53.805,0,92.965c0,6.374,5.886,11.128,12.113,9.768&#10;&#9;&#9;&#9;c23.172-5.058,46.241-4.777,69.425,0.841c5.563,1.348,11.361,1.348,16.924,0c23.184-5.618,46.252-5.898,69.425-0.841&#10;&#9;&#9;&#9;c6.227,1.359,12.113-3.395,12.113-9.768c0-39.161,0-53.805,0-92.965c0-5.818-4.018-10.853-9.682-12.18&#10;&#9;&#9;&#9;c-6.702-1.57-13.395-2.694-20.084-3.372"
      />

      <line
        style="
          fill: none;
          stroke: #000000;
          stroke-width: 15;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-miterlimit: 10;
        "
        x1="256"
        y1="115.517"
        x2="256"
        y2="229.706"
      />
      <g>
        <line
          style="
            fill: none;
            stroke: #000000;
            stroke-width: 15;
            stroke-linecap: round;
            stroke-linejoin: round;
            stroke-miterlimit: 10;
          "
          x1="193.551"
          y1="362.07"
          x2="193.551"
          y2="374.07"
        />

        <line
          style="
            fill: none;
            stroke: #000000;
            stroke-width: 15;
            stroke-linecap: round;
            stroke-linejoin: round;
            stroke-miterlimit: 10;
          "
          x1="318.449"
          y1="362.07"
          x2="318.449"
          y2="374.07"
        />
        <path
          style="
            fill: none;
            stroke: #000000;
            stroke-width: 15;
            stroke-linecap: round;
            stroke-linejoin: round;
            stroke-miterlimit: 10;
          "
          d="&#10;&#9;&#9;&#9;&#9;M239.536,373.713c4.003,4.594,9.892,7.501,16.464,7.501c6.572,0,12.461-2.907,16.464-7.501"
        />
      </g>
    </g>
  </g>
  <g></g>
  <g></g>
  <g></g>
  <g></g>
  <g></g>
  <g></g>
  <g></g>
  <g></g>
  <g></g>
  <g></g>
  <g></g>
  <g></g>
  <g></g>
  <g></g>
  <g></g>
</svg>
`,a5=`<svg
  id="Capa_1"
  enable-background="new 0 0 512 512"
  height="512"
  viewBox="0 0 512 512"
  width="512"
  xmlns="http://www.w3.org/2000/svg"
>
  <g>
    <path
      d="m449.945 61.818v388.363c0 34.144-27.684 61.818-61.818 61.818h-264.254c-34.134 0-61.818-27.674-61.818-61.818v-388.363c0-34.144 27.684-61.818 61.818-61.818h264.253c34.135 0 61.819 27.674 61.819 61.818z"
      fill="#808fa4"
    />
    <path
      d="m188.464 512h-64.59c-34.134 0-61.818-27.674-61.818-61.818v-388.364c-.001-34.144 27.683-61.818 61.817-61.818h50.341c-7.367 6.574-15.218 18.092-15.218 37.359v423.909c.001 0-.215 30.24 29.468 50.732z"
      fill="#64768e"
    />
    <path
      d="m418.912 61.942v147.509l-194.274 13.033 77.912-191.451h85.453c17.072 0 30.909 13.837 30.909 30.909z"
      fill="#c5ced6"
    />
    <path
      d="m271.516 31.033-46.878 191.451-65.641-6.501-65.909-6.532 20.843-140.421 45.365-37.997z"
      fill="#abb6c4"
    />
    <path
      d="m159.296 31.033c-.196 2.009-.299 4.121-.299 6.326v178.624l-65.909-6.532v-147.509c0-17.072 13.837-30.909 30.909-30.909z"
      fill="#9ca9ba"
    />
    <path
      d="m313.676 222.484-18.885 196.428h-135.794l-51.732-35.968-14.177-142.46 65.909-5.379z"
      fill="#c5ced6"
    />
    <path
      d="m93.088 240.484 65.909-5.378v183.807h-35c-17.072 0-30.909-13.837-30.909-30.909z"
      fill="#abb6c4"
    />
    <path
      d="m418.912 240.484v147.519c0 17.072-13.837 30.909-30.909 30.909h-62.19l-12.137-196.428z"
      fill="#64768e"
    />
    <path
      d="m287.487 480.971h-62.974c-8.317 0-15.059-6.742-15.059-15.059v-.913c0-8.317 6.742-15.059 15.059-15.059h62.974c8.317 0 15.059 6.742 15.059 15.059v.913c0 8.316-6.743 15.059-15.059 15.059z"
      fill="#64768e"
    />
    <path
      d="m418.912 209.451v31.033h-77.644c-8.531 0-15.455 6.924-15.455 15.455v162.974h-31.022v-162.975c0-8.531-6.923-15.455-15.455-15.455h-120.34l-13.147-13.27 13.147-17.763h44.138c6.718 0 12.673-4.348 14.723-10.746l53.658-167.672h31.033l-50.65 158.255c-3.183 9.974 4.255 20.163 14.723 20.163h152.291z"
      fill="#e8ecf9"
    />
    <path
      d="m93.088 209.451h65.909v31.033h-65.909z"
      fill="#d7ddf5"
    />
    <g>
      <g>
        <path
          d="m129.509 332.474c-4.268 0-7.727-3.459-7.727-7.727v-12.364c0-4.268 3.459-7.727 7.727-7.727s7.727 3.459 7.727 7.727v12.364c0 4.268-3.459 7.727-7.727 7.727z"
          fill="#495560"
        />
      </g>
      <g>
        <path
          d="m258.191 332.474c-4.268 0-7.727-3.459-7.727-7.727v-12.364c0-4.268 3.459-7.727 7.727-7.727s7.727 3.459 7.727 7.727v12.364c.001 4.268-3.458 7.727-7.727 7.727z"
          fill="#495560"
        />
      </g>
      <path
        d="m223.825 324.391c-4.268 0-7.727 3.459-7.727 7.727 0 3.952-3.215 7.167-7.166 7.167-3.952 0-7.167-3.215-7.167-7.167 0-4.268-3.459-7.727-7.727-7.727s-7.727 3.459-7.727 7.727c0 3.952-3.215 7.167-7.166 7.167-3.952 0-7.167-3.215-7.167-7.167 0-4.268-3.459-7.727-7.727-7.727s-7.727 3.459-7.727 7.727c0 12.473 10.148 22.621 22.621 22.621 5.7 0 10.911-2.124 14.894-5.616 3.982 3.492 9.193 5.616 14.894 5.616 12.473 0 22.62-10.148 22.62-22.621-.001-4.268-3.46-7.727-7.728-7.727z"
        fill="#495560"
      />
    </g>
  </g>
</svg>
`,s5=`<?xml version="1.0" encoding="UTF-8"?>
<svg
  xmlns="http://www.w3.org/2000/svg"
  version="1.1"
  id="Capa_1"
  x="0px"
  y="0px"
  viewBox="0 0 511.941 511.941"
  style="enable-background: new 0 0 511.941 511.941"
  xml:space="preserve"
  width="512"
  height="512"
>
  <g>
    <g>
      <path
        style="fill: #808fa4"
        d="M444.211,67.5v376.94c0,33.14-26.87,60-60,60H127.73c-33.13,0-60-26.86-60-60V67.5&#10;&#9;&#9;&#9;c0-33.14,26.87-60,60-60h256.48C417.341,7.5,444.211,34.361,444.211,67.5z"
      />
      <path
        style="fill: #64768e"
        d="M190.421,504.44h-62.69c-33.13,0-60-26.86-60-60V67.5c0-33.14,26.87-60,60-60h48.86&#10;&#9;&#9;&#9;c-7.15,6.38-14.77,17.56-14.77,36.26v411.44C161.821,455.201,161.611,484.551,190.421,504.44z"
      />
      <path
        style="fill: #c5ced6"
        d="M414.091,67.62v143.17l-188.56,12.65l75.62-185.82h82.94&#10;&#9;&#9;&#9;C400.661,37.62,414.091,51.051,414.091,67.62z"
      />
      <polygon
        style="fill: #abb6c4"
        points="271.031,37.62 225.531,223.44 161.821,217.131 97.85,210.79 118.08,74.5 162.111,37.62 &#9;&#9;&#10;&#9;&#9;&#9;"
      />
      <path
        style="fill: #9ca9ba"
        d="M162.111,37.62c-0.19,1.95-0.29,4-0.29,6.14v173.37l-63.97-6.34V67.62c0-16.57,13.43-30,30-30&#10;&#9;&#9;&#9;H162.111z"
      />
      <polygon
        style="fill: #c5ced6"
        points="311.951,223.44 293.62,414.091 161.821,414.091 111.611,379.181 97.85,240.911 &#10;&#9;&#9;&#9;161.821,235.69 &#9;&#9;"
      />
      <path
        style="fill: #abb6c4"
        d="M97.85,240.911l63.97-5.22v178.4h-33.97c-16.57,0-30-13.43-30-30V240.911z"
      />
      <path
        style="fill: #64768e"
        d="M414.091,240.911v143.18c0,16.57-13.43,30-30,30h-60.36l-11.78-190.65L414.091,240.911z"
      />
      <path
        style="fill: #64768e"
        d="M286.088,474.324h-60.235c-8.317,0-15.059-6.742-15.059-15.059v0&#10;&#9;&#9;&#9;c0-8.317,6.742-15.059,15.059-15.059h60.235c8.317,0,15.059,6.742,15.059,15.059v0&#10;&#9;&#9;&#9;C301.147,467.581,294.405,474.324,286.088,474.324z"
      />
      <path
        style="fill: #e8ecf9"
        d="M414.091,210.79v30.12h-75.36c-8.28,0-15,6.72-15,15v158.18h-30.11v-158.18c0-8.28-6.72-15-15-15&#10;&#9;&#9;&#9;h-116.8l-12.76-12.88l12.76-17.24h42.84c6.52,0,12.3-4.22,14.29-10.43l52.08-162.74h30.12l-49.16,153.6&#10;&#9;&#9;&#9;c-3.09,9.68,4.13,19.57,14.29,19.57H414.091z"
      />
      <rect
        x="97.85"
        y="210.79"
        style="fill: #d7ddf5"
        width="63.97"
        height="30.12"
      />
    </g>
    <g>
      <path
        style="
          fill: none;
          stroke: #000000;
          stroke-width: 15;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-miterlimit: 10;
        "
        d="&#10;&#9;&#9;&#9;M384.206,504.441H127.735c-33.137,0-60-26.863-60-60V67.5c0-33.137,26.863-60,60-60h256.471c33.137,0,60,26.863,60,60v376.941&#10;&#9;&#9;&#9;C444.206,477.578,417.343,504.441,384.206,504.441z"
      />
      <path
        style="
          fill: none;
          stroke: #000000;
          stroke-width: 15;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-miterlimit: 10;
        "
        d="&#10;&#9;&#9;&#9;M384.088,414.088H127.853c-16.569,0-30-13.431-30-30V67.618c0-16.569,13.431-30,30-30h256.235c16.569,0,30,13.431,30,30v316.471&#10;&#9;&#9;&#9;C414.088,400.657,400.657,414.088,384.088,414.088z"
      />
      <path
        style="
          fill: none;
          stroke: #000000;
          stroke-width: 15;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-miterlimit: 10;
        "
        d="&#10;&#9;&#9;&#9;M286.088,474.324h-60.235c-8.317,0-15.059-6.742-15.059-15.059c0-8.317,6.742-15.059,15.059-15.059h60.235&#10;&#9;&#9;&#9;c8.317,0,15.059,6.742,15.059,15.059C301.147,467.581,294.405,474.324,286.088,474.324z"
      />
      <path
        style="
          fill: none;
          stroke: #000000;
          stroke-width: 15;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-miterlimit: 10;
        "
        d="&#10;&#9;&#9;&#9;M100.85,210.79h103.811c6.523,0,12.298-4.215,14.286-10.428L270.56,39.09"
      />
      <path
        style="
          fill: none;
          stroke: #000000;
          stroke-width: 15;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-miterlimit: 10;
        "
        d="&#10;&#9;&#9;&#9;M293.62,410.091v-154.18c0-8.284-6.716-15-15-15H100.85"
      />
      <path
        style="
          fill: none;
          stroke: #000000;
          stroke-width: 15;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-miterlimit: 10;
        "
        d="&#10;&#9;&#9;&#9;M411.091,240.911h-72.36c-8.284,0-15,6.716-15,15v154.18"
      />
      <path
        style="
          fill: none;
          stroke: #000000;
          stroke-width: 15;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-miterlimit: 10;
        "
        d="&#10;&#9;&#9;&#9;M300.616,39.291l-48.622,151.927c-3.098,9.679,4.124,19.572,14.286,19.572h144.81"
      />
      <g>
        <line
          style="
            fill: none;
            stroke: #000000;
            stroke-width: 15;
            stroke-linecap: round;
            stroke-linejoin: round;
            stroke-miterlimit: 10;
          "
          x1="133.2"
          y1="310.695"
          x2="133.2"
          y2="322.695"
        />

        <line
          style="
            fill: none;
            stroke: #000000;
            stroke-width: 15;
            stroke-linecap: round;
            stroke-linejoin: round;
            stroke-miterlimit: 10;
          "
          x1="258.098"
          y1="310.695"
          x2="258.098"
          y2="322.695"
        />
        <g>
          <path
            style="
              fill: none;
              stroke: #000000;
              stroke-width: 15;
              stroke-linecap: round;
              stroke-miterlimit: 10;
            "
            d="M195.831,329.85&#10;&#9;&#9;&#9;&#9;&#9;c0,7.984-6.472,14.456-14.456,14.456s-14.456-6.472-14.456-14.456"
          />
          <path
            style="
              fill: none;
              stroke: #000000;
              stroke-width: 15;
              stroke-linecap: round;
              stroke-miterlimit: 10;
            "
            d="M224.742,329.85&#10;&#9;&#9;&#9;&#9;&#9;c0,7.984-6.472,14.456-14.456,14.456s-14.456-6.472-14.456-14.456"
          />
        </g>
      </g>
    </g>
  </g>
</svg>
`,l5=`<svg
  xmlns="http://www.w3.org/2000/svg"
  class="icon icon-tabler icon-tabler-external-link"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  stroke-width="2"
  stroke="currentColor"
  fill="none"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path
    stroke="none"
    d="M0 0h24v24H0z"
    fill="none"
  />
  <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6" />
  <path d="M11 13l9 -9" />
  <path d="M15 4h5v5" />
</svg>
`,c5=`<svg
  xmlns="http://www.w3.org/2000/svg"
  class="icon icon-tabler icon-tabler-eye"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  stroke-width="2"
  stroke="currentColor"
  fill="none"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path
    stroke="none"
    d="M0 0h24v24H0z"
    fill="none"
  />
  <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
  <path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" />
</svg>
`,u5=`<svg
  xmlns="http://www.w3.org/2000/svg"
  class="icon icon-tabler icon-tabler-eye-off"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  stroke-width="2"
  stroke="currentColor"
  fill="none"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path
    stroke="none"
    d="M0 0h24v24H0z"
    fill="none"
  />
  <path d="M10.585 10.587a2 2 0 0 0 2.829 2.828" />
  <path
    d="M16.681 16.673a8.717 8.717 0 0 1 -4.681 1.327c-3.6 0 -6.6 -2 -9 -6c1.272 -2.12 2.712 -3.678 4.32 -4.674m2.86 -1.146a9.055 9.055 0 0 1 1.82 -.18c3.6 0 6.6 2 9 6c-.666 1.11 -1.379 2.067 -2.138 2.87"
  />
  <path d="M3 3l18 18" />
</svg>
`,d5=`<svg
  xmlns="http://www.w3.org/2000/svg"
  class="icon icon-tabler icon-tabler-file-download"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  stroke-width="2"
  stroke="currentColor"
  fill="none"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path
    stroke="none"
    d="M0 0h24v24H0z"
    fill="none"
  />
  <path d="M14 3v4a1 1 0 0 0 1 1h4" />
  <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
  <path d="M12 17v-6" />
  <path d="M9.5 14.5l2.5 2.5l2.5 -2.5" />
</svg>
`,h5=`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-file-percent"
>
  <path
    stroke="none"
    d="M0 0h24v24H0z"
    fill="none"
  />
  <path d="M10 17l4 -4" />
  <path d="M14 3v4a1 1 0 0 0 1 1h4" />
  <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
  <path d="M10 13h.01" />
  <path d="M14 17h.01" />
</svg>
`,f5=`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-hand-click"
>
  <path
    stroke="none"
    d="M0 0h24v24H0z"
    fill="none"
  />
  <path d="M8 13v-8.5a1.5 1.5 0 0 1 3 0v7.5" />
  <path d="M11 11.5v-2a1.5 1.5 0 0 1 3 0v2.5" />
  <path d="M14 10.5a1.5 1.5 0 0 1 3 0v1.5" />
  <path
    d="M17 11.5a1.5 1.5 0 0 1 3 0v4.5a6 6 0 0 1 -6 6h-2h.208a6 6 0 0 1 -5.012 -2.7l-.196 -.3c-.312 -.479 -1.407 -2.388 -3.286 -5.728a1.5 1.5 0 0 1 .536 -2.022a1.867 1.867 0 0 1 2.28 .28l1.47 1.47"
  />
  <path d="M5 3l-1 -1" />
  <path d="M4 7h-1" />
  <path d="M14 3l1 -1" />
  <path d="M15 6h1" />
</svg>
`,p5=`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-help"
>
  <path
    stroke="none"
    d="M0 0h24v24H0z"
    fill="none"
  />
  <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
  <path d="M12 17l0 .01" />
  <path d="M12 13.5a1.5 1.5 0 0 1 1 -1.5a2.6 2.6 0 1 0 -3 -4" />
</svg>
`,g5=`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-info-circle"
>
  <path
    stroke="none"
    d="M0 0h24v24H0z"
    fill="none"
  />
  <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
  <path d="M12 9h.01" />
  <path d="M11 12h1v4h1" />
</svg>
`,m5=`<svg
  xmlns="http://www.w3.org/2000/svg"
  class="icon icon-tabler icon-tabler-keyboard"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  stroke-width="2"
  stroke="currentColor"
  fill="none"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path
    stroke="none"
    d="M0 0h24v24H0z"
    fill="none"
  />
  <path d="M2 6m0 2a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-16a2 2 0 0 1 -2 -2z" />
  <path d="M6 10l0 .01" />
  <path d="M10 10l0 .01" />
  <path d="M14 10l0 .01" />
  <path d="M18 10l0 .01" />
  <path d="M6 14l0 .01" />
  <path d="M18 14l0 .01" />
  <path d="M10 14l4 .01" />
</svg>
`,v5=`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-layout-bottombar"
>
  <path
    stroke="none"
    d="M0 0h24v24H0z"
    fill="none"
  />
  <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
  <path d="M4 15l16 0" />
</svg>
`,b5=`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-layout-bottombar-inactive"
>
  <path
    stroke="none"
    d="M0 0h24v24H0z"
    fill="none"
  />
  <path d="M4 6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z" />
  <path d="M4 15h1" />
  <path d="M19 15h1" />
  <path d="M9 15h1" />
  <path d="M14 15h1" />
</svg>
`,w5=`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-layout-sidebar"
>
  <path
    stroke="none"
    d="M0 0h24v24H0z"
    fill="none"
  />
  <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
  <path d="M9 4l0 16" />
</svg>
`,_5=`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-layout-sidebar-inactive"
>
  <path
    stroke="none"
    d="M0 0h24v24H0z"
    fill="none"
  />
  <path d="M4 6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z" />
  <path d="M9 4v1" />
  <path d="M9 9v1" />
  <path d="M9 14v1" />
  <path d="M9 19v1" />
</svg>
`,y5=`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-layout-sidebar-right"
>
  <path
    stroke="none"
    d="M0 0h24v24H0z"
    fill="none"
  />
  <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
  <path d="M15 4l0 16" />
</svg>
`,k5=`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-layout-sidebar-right-inactive"
>
  <path
    stroke="none"
    d="M0 0h24v24H0z"
    fill="none"
  />
  <path d="M4 6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z" />
  <path d="M15 4v1" />
  <path d="M15 9v1" />
  <path d="M15 14v1" />
  <path d="M15 19v1" />
</svg>
`,E5=`<svg
  xmlns="http://www.w3.org/2000/svg"
  class="icon icon-tabler icon-tabler-list-numbers"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  stroke-width="2"
  stroke="currentColor"
  fill="none"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path
    stroke="none"
    d="M0 0h24v24H0z"
    fill="none"
  />
  <path d="M11 6h9" />
  <path d="M11 12h9" />
  <path d="M12 18h8" />
  <path d="M4 16a2 2 0 1 1 4 0c0 .591 -.5 1 -1 1.5l-3 2.5h4" />
  <path d="M6 10v-6l-2 2" />
</svg>
`,A5=`<svg
  xmlns="http://www.w3.org/2000/svg"
  class="icon icon-tabler icon-tabler-loader-2"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  stroke-width="2"
  stroke="currentColor"
  fill="none"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path
    stroke="none"
    d="M0 0h24v24H0z"
    fill="none"
  />
  <path d="M12 3a9 9 0 1 0 9 9" />
</svg>
`,S5=`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-location-cog"
>
  <path
    stroke="none"
    d="M0 0h24v24H0z"
    fill="none"
  />
  <path d="M12 18l-2 -4l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5l-3.14 8.697" />
  <path d="M19.001 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M19.001 15.5v1.5" />
  <path d="M19.001 21v1.5" />
  <path d="M22.032 17.25l-1.299 .75" />
  <path d="M17.27 20l-1.3 .75" />
  <path d="M15.97 17.25l1.3 .75" />
  <path d="M20.733 20l1.3 .75" />
</svg>
`,M5=`<svg
  xmlns="http://www.w3.org/2000/svg"
  class="icon icon-tabler icon-tabler-menu-2"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  stroke-width="2"
  stroke="currentColor"
  fill="none"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path
    stroke="none"
    d="M0 0h24v24H0z"
    fill="none"
  />
  <path d="M4 6l16 0" />
  <path d="M4 12l16 0" />
  <path d="M4 18l16 0" />
</svg>
`,x5=`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-menu-deep"
>
  <path
    stroke="none"
    d="M0 0h24v24H0z"
    fill="none"
  />
  <path d="M4 6h16" />
  <path d="M7 12h13" />
  <path d="M10 18h10" />
</svg>
`,I5=`<svg
  xmlns="http://www.w3.org/2000/svg"
  class="icon icon-tabler icon-tabler-message"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  stroke-width="2"
  stroke="currentColor"
  fill="none"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path
    stroke="none"
    d="M0 0h24v24H0z"
    fill="none"
  />
  <path d="M8 9h8" />
  <path d="M8 13h6" />
  <path
    d="M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-5l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12z"
  />
</svg>
`,C5=`<svg
  xmlns="http://www.w3.org/2000/svg"
  class="icon icon-tabler icon-tabler-moon"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  stroke-width="2"
  stroke="currentColor"
  fill="none"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path
    stroke="none"
    d="M0 0h24v24H0z"
    fill="none"
  />
  <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" />
</svg>
`,O5=`<svg
  id="Capa_1"
  enable-background="new 0 0 512 512"
  height="512"
  viewBox="0 0 512 512"
  width="512"
  xmlns="http://www.w3.org/2000/svg"
>
  <g>
    <path
      d="m449.945 61.818v388.363c0 34.144-27.684 61.818-61.818 61.818h-264.253c-34.134 0-61.818-27.674-61.818-61.818v-388.363c-.001-34.144 27.684-61.818 61.818-61.818h264.253c34.133 0 61.818 27.674 61.818 61.818z"
      fill="#e8ecf9"
    />
    <path
      d="m207.555 512h-83.681c-34.134 0-61.818-27.674-61.818-61.818v-388.364c-.001-34.144 27.684-61.818 61.818-61.818h79.993c-11.292 3.421-26.809 12.446-26.809 36.256v436.87c0 26.479 19.854 35.783 30.497 38.874z"
      fill="#d7ddf5"
    />
    <path
      d="m403.396 62.004v139.751c0 8.541-6.924 15.455-15.455 15.455h-210.883l-51.556-21.729v-124.699l51.556-24.233h210.883c8.531 0 15.455 6.913 15.455 15.455z"
      fill="#c5ced6"
    />
    <path
      d="m177.058 46.549v170.66h-52.999c-8.531 0-15.455-6.913-15.455-15.455v-139.75c0-8.541 6.924-15.455 15.455-15.455z"
      fill="#abb6c4"
    />
    <path
      d="m217.209 279.213v8.036l-40.151 41.769-8.809 9.17-59.644 4.307 12.333-53.195 56.121-25.541h24.696c8.541-.001 15.454 6.923 15.454 15.454z"
      fill="#c5ced6"
    />
    <path
      d="m124.059 263.758h52.999v65.26l-8.809 9.17-59.644 4.307v-63.281c-.001-8.532 6.923-15.456 15.454-15.456z"
      fill="#abb6c4"
    />
    <path
      d="m217.209 334.365v60.407l-40.151 43.438-4.204 4.543-64.25-8.634 8.573-21.379-8.573-26.551 50.743-51.824z"
      fill="#c5ced6"
    />
    <path
      d="m177.058 334.365v103.845l-4.204 4.543-64.25-8.634v-47.93l50.743-51.824z"
      fill="#abb6c4"
    />
    <path
      d="m217.209 287.249v47.116c-2.823 1.731-5.121 4.368-6.388 7.696-2.359 6.182-8.253 9.984-14.496 9.984-1.844 0-3.719-.33-5.543-1.03-.546-.206-1.092-.381-1.638-.525-1.298-.34-2.596-.505-3.895-.505-2.916 0-5.749.824-8.191 2.339l-11.045-14.888 11.045-32.29c1.03.165 2.061.433 3.07.824.587.227 1.175.412 1.772.556 1.247.319 2.514.474 3.771.474 6.244 0 12.137-3.802 14.496-9.984.082-.206.165-.412.258-.608 2.493-5.821 8.191-9.376 14.239-9.376.845.001 1.69.073 2.545.217z"
      fill="#808fa4"
    />
    <path
      d="m177.058 305.146v47.178c-2.782 1.731-5.049 4.348-6.305 7.645-.196.505-.402.989-.649 1.453-2.669 5.316-8.108 8.521-13.847 8.521-.309 0-.618-.01-.927-.031-1.535-.093-3.091-.412-4.605-.999-1.824-.701-3.699-1.03-5.543-1.03-6.244 0-12.137 3.802-14.496 9.984s-8.242 9.984-14.496 9.984c-1.834 0-3.709-.33-5.533-1.03-.68-.258-1.36-.474-2.05-.628v-43.695c5.038-1.02 9.458-4.523 11.426-9.674 2.359-6.182 8.253-9.984 14.496-9.984 1.844 0 3.709.33 5.533 1.03 1.824.701 3.709 1.03 5.553 1.03 1.113 0 2.226-.124 3.297-.361 2.895-.629 5.574-2.081 7.686-4.193 1.494-1.494 2.699-3.318 3.503-5.419 2.359-6.182 8.242-9.984 14.496-9.984.813-.003 1.637.058 2.461.203z"
      fill="#64768e"
    />
    <path
      d="m217.209 394.772v55.224c0 8.541-6.913 15.455-15.455 15.455h-24.696l-15.516-24.284 15.516-28.426c1.885-1.618 3.4-3.719 4.348-6.202 2.359-6.172 8.253-9.973 14.496-9.973 1.844 0 3.719.33 5.543 1.03 1.824.701 3.689 1.03 5.533 1.03 1.175 0 2.349-.134 3.472-.402h.01c2.494-.578 4.822-1.762 6.749-3.452z"
      fill="#808fa4"
    />
    <path
      d="m166.91 416.522c3.74 0 7.346-1.36 10.148-3.781v52.71h-52.999c-8.531 0-15.455-6.913-15.455-15.455v-15.877c3.802-1.968 8.397-2.37 12.704-.721 1.824.701 3.699 1.03 5.543 1.03 6.244 0 12.137-3.802 14.496-9.984s8.242-9.984 14.496-9.984c1.834 0 3.709.33 5.533 1.03 1.824.702 3.7 1.032 5.534 1.032z"
      fill="#64768e"
    />
    <path
      d="m403.396 351.612v98.384c0 8.541-6.924 15.455-15.455 15.455h-69.051l-55.132-93.686v-92.552c0-8.531 6.924-15.455 15.455-15.455h62.91z"
      fill="#808fa4"
    />
    <path
      d="m380.121 333.572-61.231 131.879h-39.677c-8.531 0-15.455-6.913-15.455-15.455v-78.231l77.572-53.699z"
      fill="#abb6c4"
    />
    <path
      d="m403.396 279.213v72.4c-7.058 3.359-14.95 5.234-23.275 5.234-3.534 0-6.996-.34-10.344-.989-17.34-3.338-31.744-14.929-38.956-30.518-3.215-6.924-5.007-14.651-5.007-22.79 0-15.197 6.244-28.941 16.31-38.791h45.818c8.53-.001 15.454 6.923 15.454 15.454z"
      fill="#c5ced6"
    />
    <g>
      <g>
        <ellipse
          cx="172.744"
          cy="147.233"
          fill="#fff"
          rx="30.72"
          ry="24.464"
        />
        <ellipse
          cx="339.256"
          cy="147.233"
          fill="#fff"
          rx="30.72"
          ry="24.464"
        />
        <path
          d="m285.787 117.781c-4.268 0-7.727 3.46-7.727 7.727 0 3.952-3.215 7.166-7.166 7.166s-7.166-3.215-7.166-7.166c0-4.268-3.46-7.727-7.727-7.727-4.268 0-7.727 3.46-7.727 7.727 0 3.952-3.215 7.166-7.166 7.166-3.952 0-7.166-3.215-7.166-7.166 0-4.268-3.46-7.727-7.727-7.727-4.268 0-7.727 3.46-7.727 7.727 0 12.473 10.148 22.621 22.621 22.621 5.701 0 10.911-2.124 14.894-5.616 3.982 3.492 9.193 5.616 14.894 5.616 12.473 0 22.621-10.148 22.621-22.621-.003-4.267-3.463-7.727-7.731-7.727z"
          fill="#495560"
        />
      </g>
      <g>
        <path
          d="m206.795 121.062c-4.268 0-7.727-3.46-7.727-7.727 0-3.559-2.896-6.454-6.455-6.454s-6.455 2.895-6.455 6.454c0 4.268-3.46 7.727-7.727 7.727-4.268 0-7.727-3.46-7.727-7.727 0-12.081 9.829-21.909 21.91-21.909s21.91 9.828 21.91 21.909c-.001 4.267-3.461 7.727-7.729 7.727z"
          fill="#495560"
        />
      </g>
      <g>
        <path
          d="m333.569 121.062c-4.268 0-7.727-3.46-7.727-7.727 0-3.559-2.896-6.454-6.455-6.454s-6.455 2.895-6.455 6.454c0 4.268-3.46 7.727-7.727 7.727-4.268 0-7.727-3.46-7.727-7.727 0-12.081 9.829-21.909 21.91-21.909s21.91 9.828 21.91 21.909c-.001 4.267-3.461 7.727-7.729 7.727z"
          fill="#495560"
        />
      </g>
    </g>
  </g>
</svg>
`,T5=`<?xml version="1.0" encoding="UTF-8"?>
<svg
  xmlns="http://www.w3.org/2000/svg"
  version="1.1"
  id="Capa_1"
  x="0px"
  y="0px"
  viewBox="0 0 511.94 511.94"
  style="enable-background: new 0 0 511.94 511.94"
  xml:space="preserve"
  width="512"
  height="512"
>
  <g>
    <g>
      <path
        style="fill: #e8ecf9"
        d="M444.21,67.5v376.94c0,33.14-26.87,60-60,60H127.73c-33.13,0-60-26.86-60-60V67.5&#10;&#9;&#9;&#9;c0-33.14,26.87-60,60-60h256.48C417.34,7.5,444.21,34.36,444.21,67.5z"
      />
      <path
        style="fill: #d7ddf5"
        d="M208.95,504.44h-81.22c-33.13,0-60-26.86-60-60V67.5c0-33.14,26.87-60,60-60h77.64&#10;&#9;&#9;&#9;c-10.96,3.32-26.02,12.08-26.02,35.19v424.02C179.35,492.41,198.62,501.44,208.95,504.44z"
      />
      <path
        style="fill: #c5ced6"
        d="M399.03,67.68v135.64c0,8.29-6.72,15-15,15H179.35l-50.04-21.09V76.2l50.04-23.52h204.68&#10;&#9;&#9;&#9;C392.31,52.68,399.03,59.39,399.03,67.68z"
      />
      <path
        style="fill: #abb6c4"
        d="M179.35,52.68v165.64h-51.44c-8.28,0-15-6.71-15-15V67.68c0-8.29,6.72-15,15-15H179.35z"
      />
      <path
        style="fill: #c5ced6"
        d="M218.32,278.5v7.8l-38.97,40.54l-8.55,8.9l-57.89,4.18l11.97-51.63l54.47-24.79h23.97&#10;&#9;&#9;&#9;C211.61,263.5,218.32,270.22,218.32,278.5z"
      />
      <path
        style="fill: #abb6c4"
        d="M127.91,263.5h51.44v63.34l-8.55,8.9l-57.89,4.18V278.5C112.91,270.22,119.63,263.5,127.91,263.5z"
      />
      <polygon
        style="fill: #c5ced6"
        points="218.32,332.03 218.32,390.66 179.35,432.82 175.27,437.23 112.91,428.85 121.23,408.1 &#10;&#9;&#9;&#9;112.91,382.33 162.16,332.03 &#9;&#9;"
      />
      <polygon
        style="fill: #abb6c4"
        points="179.35,332.03 179.35,432.82 175.27,437.23 112.91,428.85 112.91,382.33 162.16,332.03 &#9;&#9;&#10;&#9;&#9;&#9;"
      />
      <path
        style="fill: #808fa4"
        d="M218.32,286.3v45.73c-2.74,1.68-4.97,4.24-6.2,7.47c-2.29,6-8.01,9.69-14.07,9.69&#10;&#9;&#9;&#9;c-1.79,0-3.61-0.32-5.38-1c-0.53-0.2-1.06-0.37-1.59-0.51c-1.26-0.33-2.52-0.49-3.78-0.49c-2.83,0-5.58,0.8-7.95,2.27&#10;&#9;&#9;&#9;l-10.72-14.45l10.72-31.34c1,0.16,2,0.42,2.98,0.8c0.57,0.22,1.14,0.4,1.72,0.54c1.21,0.31,2.44,0.46,3.66,0.46&#10;&#9;&#9;&#9;c6.06,0,11.78-3.69,14.07-9.69c0.08-0.2,0.16-0.4,0.25-0.59c2.42-5.65,7.95-9.1,13.82-9.1&#10;&#9;&#9;&#9;C216.67,286.09,217.49,286.16,218.32,286.3z"
      />
      <path
        style="fill: #64768e"
        d="M179.35,303.67v45.79c-2.7,1.68-4.9,4.22-6.12,7.42c-0.19,0.49-0.39,0.96-0.63,1.41&#10;&#9;&#9;&#9;c-2.59,5.16-7.87,8.27-13.44,8.27c-0.3,0-0.6-0.01-0.9-0.03c-1.49-0.09-3-0.4-4.47-0.97c-1.77-0.68-3.59-1-5.38-1&#10;&#9;&#9;&#9;c-6.06,0-11.78,3.69-14.07,9.69s-8,9.69-14.07,9.69c-1.78,0-3.6-0.32-5.37-1c-0.66-0.25-1.32-0.46-1.99-0.61v-42.41&#10;&#9;&#9;&#9;c4.89-0.99,9.18-4.39,11.09-9.39c2.29-6,8.01-9.69,14.07-9.69c1.79,0,3.6,0.32,5.37,1c1.77,0.68,3.6,1,5.39,1&#10;&#9;&#9;&#9;c1.08,0,2.16-0.12,3.2-0.35c2.81-0.61,5.41-2.02,7.46-4.07c1.45-1.45,2.62-3.22,3.4-5.26c2.29-6,8-9.69,14.07-9.69&#10;&#9;&#9;&#9;C177.75,303.47,178.55,303.53,179.35,303.67z"
      />
      <path
        style="fill: #808fa4"
        d="M218.32,390.66v53.6c0,8.29-6.71,15-15,15h-23.97l-15.06-23.57l15.06-27.59&#10;&#9;&#9;&#9;c1.83-1.57,3.3-3.61,4.22-6.02c2.29-5.99,8.01-9.68,14.07-9.68c1.79,0,3.61,0.32,5.38,1c1.77,0.68,3.58,1,5.37,1&#10;&#9;&#9;&#9;c1.14,0,2.28-0.13,3.37-0.39h0.01C214.19,393.45,216.45,392.3,218.32,390.66z"
      />
      <path
        style="fill: #64768e"
        d="M169.5,411.77c3.63,0,7.13-1.32,9.85-3.67v51.16h-51.44c-8.28,0-15-6.71-15-15v-15.41&#10;&#9;&#9;&#9;c3.69-1.91,8.15-2.3,12.33-0.7c1.77,0.68,3.59,1,5.38,1c6.06,0,11.78-3.69,14.07-9.69c2.29-6,8-9.69,14.07-9.69&#10;&#9;&#9;&#9;c1.78,0,3.6,0.32,5.37,1C165.9,411.45,167.72,411.77,169.5,411.77z"
      />
      <path
        style="fill: #808fa4"
        d="M399.03,348.77v95.49c0,8.29-6.72,15-15,15h-67.02l-53.51-90.93V278.5c0-8.28,6.72-15,15-15h61.06&#10;&#9;&#9;&#9;L399.03,348.77z"
      />
      <path
        style="fill: #abb6c4"
        d="M376.44,331.26l-59.43,128H278.5c-8.28,0-15-6.71-15-15v-75.93l75.29-52.12L376.44,331.26z"
      />
      <path
        style="fill: #c5ced6"
        d="M399.03,278.5v70.27c-6.85,3.26-14.51,5.08-22.59,5.08c-3.43,0-6.79-0.33-10.04-0.96&#10;&#9;&#9;&#9;c-16.83-3.24-30.81-14.49-37.81-29.62c-3.12-6.72-4.86-14.22-4.86-22.12c0-14.75,6.06-28.09,15.83-37.65h44.47&#10;&#9;&#9;&#9;C392.31,263.5,399.03,270.22,399.03,278.5z"
      />
      <g>
        <g>
          <ellipse
            style="fill: #ffffff"
            cx="175.162"
            cy="150.402"
            rx="29.816"
            ry="23.744"
          />
          <ellipse
            style="fill: #ffffff"
            cx="336.778"
            cy="150.402"
            rx="29.816"
            ry="23.744"
          />
        </g>
      </g>
    </g>
    <g>
      <path
        style="
          fill: none;
          stroke: #000000;
          stroke-width: 15;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-miterlimit: 10;
        "
        d="&#10;&#9;&#9;&#9;M67.73,402.54v41.9c0,33.14,26.87,60,60,60h256.48c33.13,0,60-26.86,60-60V67.5c0-33.14-26.87-60-60-60H127.73&#10;&#9;&#9;&#9;c-33.13,0-60,26.86-60,60v300.04"
      />
      <path
        style="
          fill: none;
          stroke: #000000;
          stroke-width: 15;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-miterlimit: 10;
        "
        d="&#10;&#9;&#9;&#9;M359,52.68h25.03c8.28,0,15,6.71,15,15v135.64c0,8.29-6.72,15-15,15H127.91c-8.28,0-15-6.71-15-15V67.68c0-8.29,6.72-15,15-15H324&#10;&#9;&#9;&#9;"
      />
      <path
        style="
          fill: none;
          stroke: #000000;
          stroke-width: 15;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-miterlimit: 10;
        "
        d="&#10;&#9;&#9;&#9;M203.323,459.264h-75.412c-8.284,0-15-6.716-15-15V278.499c0-8.284,6.716-15,15-15h75.412c8.284,0,15,6.716,15,15v165.765&#10;&#9;&#9;&#9;C218.323,452.548,211.607,459.264,203.323,459.264z"
      />
      <path
        style="
          fill: none;
          stroke: #000000;
          stroke-width: 15;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-miterlimit: 10;
        "
        d="&#10;&#9;&#9;&#9;M399.03,278.5v165.76c0,8.29-6.72,15-15,15H278.5c-8.28,0-15-6.71-15-15V278.5c0-8.28,6.72-15,15-15h105.53&#10;&#9;&#9;&#9;C392.31,263.5,399.03,270.22,399.03,278.5z"
      />

      <line
        style="
          fill: none;
          stroke: #000000;
          stroke-width: 15;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-miterlimit: 10;
        "
        x1="264.641"
        y1="367.54"
        x2="327.14"
        y2="324.275"
      />

      <line
        style="
          fill: none;
          stroke: #000000;
          stroke-width: 15;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-miterlimit: 10;
        "
        x1="335.24"
        y1="420"
        x2="317.58"
        y2="458.04"
      />

      <line
        style="
          fill: none;
          stroke: #000000;
          stroke-width: 15;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-miterlimit: 10;
        "
        x1="365.42"
        y1="354.99"
        x2="349.98"
        y2="388.25"
      />
      <path
        style="
          fill: none;
          stroke: #000000;
          stroke-width: 15;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-miterlimit: 10;
        "
        d="&#10;&#9;&#9;&#9;M337.07,266.11c-14.481,16.226-16.955,38.907-8.48,57.16c12.198,26.365,43.179,37.557,69.06,26.13"
      />
      <path
        style="
          fill: none;
          stroke: #000000;
          stroke-width: 15;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-miterlimit: 10;
        "
        d="&#10;&#9;&#9;&#9;M114.09,339.63c4.39-1.26,8.16-4.51,9.91-9.1c2.29-6,8.01-9.69,14.07-9.69c4.907,0,5.826,2,10.76,2&#10;&#9;&#9;&#9;c6.016,0,11.752-3.643,14.06-9.68c2.29-6,8-9.69,14.07-9.69c3.551,0,5.135,1.068,7.09,1.54c7.171,1.837,14.948-1.942,17.73-9.23&#10;&#9;&#9;&#9;c2.653-6.632,8.993-10.222,15.36-9.63"
      />
      <path
        style="
          fill: none;
          stroke: #000000;
          stroke-width: 15;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-miterlimit: 10;
        "
        d="&#10;&#9;&#9;&#9;M114.09,382.66c0.973,0.288,2.952,1.28,6.18,1.28c6.07,0,11.78-3.69,14.07-9.69c2.29-6,8.01-9.69,14.07-9.69&#10;&#9;&#9;&#9;c4.605,0,5.534,1.709,9.85,1.97c6.213,0.414,12.476-3.218,14.97-9.65c2.891-7.576,11.422-11.716,19.44-8.69&#10;&#9;&#9;&#9;c7.75,2.977,16.481-0.911,19.45-8.69c1.05-2.75,2.82-5.02,5.02-6.66"
      />
      <path
        style="
          fill: none;
          stroke: #000000;
          stroke-width: 15;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-miterlimit: 10;
        "
        d="&#10;&#9;&#9;&#9;M114.09,428.31c3.44-1.43,7.41-1.59,11.15-0.16c7.75,2.977,16.481-0.911,19.45-8.69c2.29-6,8-9.69,14.07-9.69&#10;&#9;&#9;&#9;c4.886,0,5.854,2,10.74,2c6.07,0,11.78-3.69,14.07-9.69c2.29-5.99,8.01-9.68,14.07-9.68c4.907,0,5.856,2,10.75,2&#10;&#9;&#9;&#9;c3.118,0,6.213-0.998,8.75-2.81"
      />
      <g>
        <g>
          <g>
            <path
              style="
                fill: none;
                stroke: #000000;
                stroke-width: 15;
                stroke-linecap: round;
                stroke-miterlimit: 10;
              "
              d="M255.97,129.317&#10;&#9;&#9;&#9;&#9;&#9;&#9;c0,7.984-6.472,14.456-14.456,14.456c-7.984,0-14.456-6.472-14.456-14.456"
            />
            <path
              style="
                fill: none;
                stroke: #000000;
                stroke-width: 15;
                stroke-linecap: round;
                stroke-miterlimit: 10;
              "
              d="M284.881,129.317&#10;&#9;&#9;&#9;&#9;&#9;&#9;c0,7.984-6.472,14.456-14.456,14.456c-7.984,0-14.456-6.472-14.456-14.456"
            />
          </g>
        </g>
        <path
          style="
            fill: none;
            stroke: #000000;
            stroke-width: 15;
            stroke-linecap: round;
            stroke-linejoin: round;
            stroke-miterlimit: 10;
          "
          d="&#10;&#9;&#9;&#9;&#9;M208.213,117.501c0-7.602-6.163-13.765-13.765-13.765c-7.602,0-13.765,6.163-13.765,13.765"
        />
        <path
          style="
            fill: none;
            stroke: #000000;
            stroke-width: 15;
            stroke-linecap: round;
            stroke-linejoin: round;
            stroke-miterlimit: 10;
          "
          d="&#10;&#9;&#9;&#9;&#9;M303.727,117.501c0-7.602,6.163-13.765,13.765-13.765c7.602,0,13.765,6.163,13.765,13.765"
        />
      </g>
    </g>
  </g>
</svg>
`,L5=`<svg
  xmlns="http://www.w3.org/2000/svg"
  class="icon icon-tabler icon-tabler-palette"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  stroke-width="2"
  stroke="currentColor"
  fill="none"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path
    stroke="none"
    d="M0 0h24v24H0z"
    fill="none"
  />
  <path
    d="M12 21a9 9 0 0 1 0 -18c4.97 0 9 3.582 9 8c0 1.06 -.474 2.078 -1.318 2.828c-.844 .75 -1.989 1.172 -3.182 1.172h-2.5a2 2 0 0 0 -1 3.75a1.3 1.3 0 0 1 -1 2.25"
  />
  <path d="M8.5 10.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
  <path d="M12.5 7.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
  <path d="M16.5 10.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
</svg>
`,R5=`<svg
  xmlns="http://www.w3.org/2000/svg"
  class="icon icon-tabler icon-tabler-pencil"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  stroke-width="2"
  stroke="currentColor"
  fill="none"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path
    stroke="none"
    d="M0 0h24v24H0z"
    fill="none"
  />
  <path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4" />
  <path d="M13.5 6.5l4 4" />
</svg>
`,P5=`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-pencil-cog"
>
  <path
    stroke="none"
    d="M0 0h24v24H0z"
    fill="none"
  />
  <path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4" />
  <path d="M13.5 6.5l4 4" />
  <path d="M19.001 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M19.001 15.5v1.5" />
  <path d="M19.001 21v1.5" />
  <path d="M22.032 17.25l-1.299 .75" />
  <path d="M17.27 20l-1.3 .75" />
  <path d="M15.97 17.25l1.3 .75" />
  <path d="M20.733 20l1.3 .75" />
</svg>
`,$5=`<svg
  xmlns="http://www.w3.org/2000/svg"
  class="icon icon-tabler icon-tabler-photo"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  stroke-width="2"
  stroke="currentColor"
  fill="none"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path
    stroke="none"
    d="M0 0h24v24H0z"
    fill="none"
  />
  <path d="M15 8h.01" />
  <path d="M3 6a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3v-12z" />
  <path d="M3 16l5 -5c.928 -.893 2.072 -.893 3 0l5 5" />
  <path d="M14 14l1 -1c.928 -.893 2.072 -.893 3 0l3 3" />
</svg>
`,z5=`<svg
  xmlns="http://www.w3.org/2000/svg"
  class="icon icon-tabler icon-tabler-photo-off"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  stroke-width="2"
  stroke="currentColor"
  fill="none"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path
    stroke="none"
    d="M0 0h24v24H0z"
    fill="none"
  />
  <path d="M15 8h.01" />
  <path
    d="M7 3h11a3 3 0 0 1 3 3v11m-.856 3.099a2.991 2.991 0 0 1 -2.144 .901h-12a3 3 0 0 1 -3 -3v-12c0 -.845 .349 -1.608 .91 -2.153"
  />
  <path d="M3 16l5 -5c.928 -.893 2.072 -.893 3 0l5 5" />
  <path d="M16.33 12.338c.574 -.054 1.155 .166 1.67 .662l3 3" />
  <path
    d="M3 3l18 18"
    color="orange"
  />
</svg>
`,N5=`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-pin"
>
  <path
    stroke="none"
    d="M0 0h24v24H0z"
    fill="none"
  />
  <path d="M15 4.5l-4 4l-4 1.5l-1.5 1.5l7 7l1.5 -1.5l1.5 -4l4 -4" />
  <path d="M9 15l-4.5 4.5" />
  <path d="M14.5 4l5.5 5.5" />
</svg>
`,D5=`<svg
  xmlns="http://www.w3.org/2000/svg"
  class="icon icon-tabler icon-tabler-player-pause"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  stroke-width="2"
  stroke="currentColor"
  fill="none"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path
    stroke="none"
    d="M0 0h24v24H0z"
    fill="none"
  />
  <path d="M6 5m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v12a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" />
  <path d="M14 5m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v12a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" />
</svg>
`,B5=`<svg
  xmlns="http://www.w3.org/2000/svg"
  class="icon icon-tabler icon-tabler-player-play"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  stroke-width="2"
  stroke="currentColor"
  fill="none"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path
    stroke="none"
    d="M0 0h24v24H0z"
    fill="none"
  />
  <path d="M7 4v16l13 -8z" />
</svg>
`,F5=`<svg
  xmlns="http://www.w3.org/2000/svg"
  class="icon icon-tabler icon-tabler-refresh"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  stroke-width="2"
  stroke="currentColor"
  fill="none"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path
    stroke="none"
    d="M0 0h24v24H0z"
    fill="none"
  />
  <path d="M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4" />
  <path d="M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4" />
</svg>
`,H5=`<svg
  xmlns="http://www.w3.org/2000/svg"
  class="icon icon-tabler icon-tabler-settings"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  stroke-width="2"
  stroke="currentColor"
  fill="none"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path
    stroke="none"
    d="M0 0h24v24H0z"
    fill="none"
  />
  <path
    d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z"
  />
  <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
</svg>
`,G5=`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-settings-off"
>
  <path
    stroke="none"
    d="M0 0h24v24H0z"
    fill="none"
  />
  <path
    d="M9.451 5.437c.418 -.218 .75 -.609 .874 -1.12c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35c-.486 .118 -.894 .44 -1.123 .878m-.188 3.803c-.517 .523 -1.349 .734 -2.125 .262a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.472 -.774 -.262 -1.604 .259 -2.121"
  />
  <path d="M9.889 9.869a3 3 0 1 0 4.226 4.26m.592 -3.424a3.012 3.012 0 0 0 -1.419 -1.415" />
  <path d="M3 3l18 18" />
</svg>
`,U5=`<svg
  xmlns="http://www.w3.org/2000/svg"
  class="icon icon-tabler icon-tabler-spacing-vertical"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  stroke-width="2"
  stroke="currentColor"
  fill="none"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path
    stroke="none"
    d="M0 0h24v24H0z"
    fill="none"
  />
  <path d="M4 20v-2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v2" />
  <path d="M4 4v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" />
  <path d="M16 12h-8" />
</svg>
`,W5=`<svg
  xmlns="http://www.w3.org/2000/svg"
  class="icon icon-tabler icon-tabler-sun"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  stroke-width="2"
  stroke="currentColor"
  fill="none"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path
    stroke="none"
    d="M0 0h24v24H0z"
    fill="none"
  />
  <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
  <path
    d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7"
  />
</svg>
`,V5=`<svg
  xmlns="http://www.w3.org/2000/svg"
  class="icon icon-tabler icon-tabler-trash"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  stroke-width="2"
  stroke="currentColor"
  fill="none"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path
    stroke="none"
    d="M0 0h24v24H0z"
    fill="none"
  />
  <path d="M4 7l16 0" />
  <path d="M10 11l0 6" />
  <path d="M14 11l0 6" />
  <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
  <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
</svg>
`,Z5=`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-world-cog"
>
  <path
    stroke="none"
    d="M0 0h24v24H0z"
    fill="none"
  />
  <path d="M21 12a9 9 0 1 0 -8.979 9" />
  <path d="M3.6 9h16.8" />
  <path d="M3.6 15h8.9" />
  <path d="M11.5 3a17 17 0 0 0 0 18" />
  <path d="M12.5 3a16.992 16.992 0 0 1 2.522 10.376" />
  <path d="M19.001 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M19.001 15.5v1.5" />
  <path d="M19.001 21v1.5" />
  <path d="M22.032 17.25l-1.299 .75" />
  <path d="M17.27 20l-1.3 .75" />
  <path d="M15.97 17.25l1.3 .75" />
  <path d="M20.733 20l1.3 .75" />
</svg>
`,q5=`<svg
  xmlns="http://www.w3.org/2000/svg"
  class="icon icon-tabler icon-tabler-x"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  stroke-width="2"
  stroke="currentColor"
  fill="none"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path
    stroke="none"
    d="M0 0h24v24H0z"
    fill="none"
  />
  <path d="M18 6l-12 12" />
  <path d="M6 6l12 12" />
</svg>
`,j5=`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-zoom"
>
  <path
    stroke="none"
    d="M0 0h24v24H0z"
    fill="none"
  />
  <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
  <path d="M21 21l-6 -6" />
</svg>
`,K5=`<svg
  xmlns="http://www.w3.org/2000/svg"
  class="icon icon-tabler icon-tabler-zoom-cancel"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  stroke-width="2"
  stroke="currentColor"
  fill="none"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path
    stroke="none"
    d="M0 0h24v24H0z"
    fill="none"
  />
  <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
  <path d="M8 8l4 4" />
  <path d="M12 8l-4 4" />
  <path d="M21 21l-6 -6" />
</svg>
`,Y5=`<svg
  xmlns="http://www.w3.org/2000/svg"
  class="icon icon-tabler icon-tabler-zoom-in"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  stroke-width="2"
  stroke="currentColor"
  fill="none"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path
    stroke="none"
    d="M0 0h24v24H0z"
    fill="none"
  />
  <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
  <path d="M7 10l6 0" />
  <path d="M10 7l0 6" />
  <path d="M21 21l-6 -6" />
</svg>
`,X5=`<svg
  xmlns="http://www.w3.org/2000/svg"
  class="icon icon-tabler icon-tabler-zoom-in-area"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  stroke-width="2"
  stroke="currentColor"
  fill="none"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path
    stroke="none"
    d="M0 0h24v24H0z"
    fill="none"
  />
  <path d="M15 13v4" />
  <path d="M13 15h4" />
  <path d="M15 15m-5 0a5 5 0 1 0 10 0a5 5 0 1 0 -10 0" />
  <path d="M22 22l-3 -3" />
  <path d="M6 18h-1a2 2 0 0 1 -2 -2v-1" />
  <path d="M3 11v-1" />
  <path d="M3 6v-1a2 2 0 0 1 2 -2h1" />
  <path d="M10 3h1" />
  <path d="M15 3h1a2 2 0 0 1 2 2v1" />
</svg>
`,J5=`<svg
  xmlns="http://www.w3.org/2000/svg"
  class="icon icon-tabler icon-tabler-zoom-out"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  stroke-width="2"
  stroke="currentColor"
  fill="none"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path
    stroke="none"
    d="M0 0h24v24H0z"
    fill="none"
  />
  <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
  <path d="M7 10l6 0" />
  <path d="M21 21l-6 -6" />
</svg>
`,Q5=`<svg
  xmlns="http://www.w3.org/2000/svg"
  class="icon icon-tabler icon-tabler-zoom-out-area"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  stroke-width="2"
  stroke="currentColor"
  fill="none"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path
    stroke="none"
    d="M0 0h24v24H0z"
    fill="none"
  />
  <path d="M13 15h4" />
  <path d="M15 15m-5 0a5 5 0 1 0 10 0a5 5 0 1 0 -10 0" />
  <path d="M22 22l-3 -3" />
  <path d="M6 18h-1a2 2 0 0 1 -2 -2v-1" />
  <path d="M3 11v-1" />
  <path d="M3 6v-1a2 2 0 0 1 2 -2h1" />
  <path d="M10 3h1" />
  <path d="M15 3h1a2 2 0 0 1 2 2v1" />
</svg>
`,ev=`<svg
  xmlns="http://www.w3.org/2000/svg"
  class="icon icon-tabler icon-tabler-zoom-pan"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  stroke-width="2"
  stroke="currentColor"
  fill="none"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path
    stroke="none"
    d="M0 0h24v24H0z"
    fill="none"
  />
  <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
  <path d="M17 17l-2.5 -2.5" />
  <path d="M10 5l2 -2l2 2" />
  <path d="M19 10l2 2l-2 2" />
  <path d="M5 10l-2 2l2 2" />
  <path d="M10 19l2 2l2 -2" />
</svg>
`,P0=eu({IconAdjustmentsHorizontal:()=>Em,IconAlertCircle:()=>Am,IconArrowAutofitDown:()=>Sm,IconArrowAutofitHeight:()=>Mm,IconArrowAutofitLeft:()=>xm,IconArrowAutofitRight:()=>Im,IconArrowAutofitWidth:()=>Cm,IconArrowBigLeft:()=>Om,IconArrowBigRight:()=>Tm,IconArrowsHorizontal:()=>Lm,IconArrowsLeftRight:()=>Rm,IconArrowsMove:()=>Pm,IconArrowsMoveVertical:()=>$m,IconArrowsVertical:()=>zm,IconBook:()=>Nm,IconBookReturn:()=>Dm,IconBookUpload:()=>Bm,IconBookmark:()=>Fm,IconBookmarkOff:()=>Hm,IconBookmarks:()=>Gm,IconBoxAlignTop:()=>Um,IconCategory:()=>Ym,IconCheck:()=>Xm,IconChevronLeft:()=>Jm,IconChevronRight:()=>Qm,IconCircleCheck:()=>e5,IconCircleX:()=>t5,IconComic1:()=>Vm,IconComic1Flat:()=>Wm,IconComic2:()=>qm,IconComic2Flat:()=>Zm,IconComic3:()=>Km,IconComic3Flat:()=>jm,IconDeviceFloppy:()=>n5,IconDotsVertical:()=>r5,IconEReader1:()=>o5,IconEReader1Flat:()=>i5,IconEReader2:()=>s5,IconEReader2Flat:()=>a5,IconExternalLink:()=>l5,IconEye:()=>c5,IconEyeOff:()=>u5,IconFileDownload:()=>d5,IconFilePercent:()=>h5,IconHandClick:()=>f5,IconHelp:()=>p5,IconInfoCircle:()=>g5,IconKeyboard:()=>m5,IconLayoutBottombar:()=>v5,IconLayoutBottombarInactive:()=>b5,IconLayoutSidebar:()=>w5,IconLayoutSidebarInactive:()=>_5,IconLayoutSidebarRight:()=>y5,IconLayoutSidebarRightInactive:()=>k5,IconListNumbers:()=>E5,IconLoader2:()=>A5,IconLocationCog:()=>S5,IconMenu2:()=>M5,IconMenuDeep:()=>x5,IconMessage:()=>I5,IconMoon:()=>C5,IconPage:()=>T5,IconPageFlat:()=>O5,IconPalette:()=>L5,IconPencil:()=>R5,IconPencilCog:()=>P5,IconPhoto:()=>$5,IconPhotoOff:()=>z5,IconPin:()=>N5,IconPlayerPause:()=>D5,IconPlayerPlay:()=>B5,IconRefresh:()=>F5,IconSettings:()=>H5,IconSettingsOff:()=>G5,IconSpacingVertical:()=>U5,IconSun:()=>W5,IconTrash:()=>V5,IconWorldCog:()=>Z5,IconX:()=>q5,IconZoom:()=>j5,IconZoomCancel:()=>K5,IconZoomIn:()=>Y5,IconZoomInArea:()=>X5,IconZoomOut:()=>J5,IconZoomOutArea:()=>Q5,IconZoomPan:()=>ev}),Al=eu({IconAdjustmentsHorizontal:()=>sv,IconAlertCircle:()=>Tv,IconArrowAutofitDown:()=>uv,IconArrowAutofitHeight:()=>dv,IconArrowAutofitLeft:()=>hv,IconArrowAutofitRight:()=>fv,IconArrowAutofitWidth:()=>pv,IconArrowBigLeft:()=>gv,IconArrowBigRight:()=>mv,IconArrowsHorizontal:()=>lv,IconArrowsLeftRight:()=>cv,IconArrowsMove:()=>vv,IconArrowsMoveVertical:()=>bv,IconArrowsVertical:()=>wv,IconBook:()=>_v,IconBookReturn:()=>yv,IconBookUpload:()=>kv,IconBookmark:()=>Ev,IconBookmarkOff:()=>Av,IconBookmarks:()=>Sv,IconBoxAlignTop:()=>Mv,IconCategory:()=>xv,IconCheck:()=>Iv,IconChevronLeft:()=>Cv,IconChevronRight:()=>Ov,IconCircleCheck:()=>Lv,IconCircleX:()=>Rv,IconComic1:()=>zv,IconComic1Flat:()=>Nv,IconComic2:()=>Dv,IconComic2Flat:()=>Bv,IconComic3:()=>Fv,IconComic3Flat:()=>Hv,IconDeviceFloppy:()=>Gv,IconDotsVertical:()=>Uv,IconEReader1:()=>Wv,IconEReader1Flat:()=>Vv,IconEReader2:()=>Zv,IconEReader2Flat:()=>qv,IconExternalLink:()=>jv,IconEye:()=>Kv,IconEyeOff:()=>Yv,IconFileDownload:()=>Xv,IconFilePercent:()=>Jv,IconHandClick:()=>Qv,IconHelp:()=>Pv,IconInfoCircle:()=>$v,IconKeyboard:()=>e4,IconLayoutBottombar:()=>t4,IconLayoutBottombarInactive:()=>n4,IconLayoutSidebar:()=>r4,IconLayoutSidebarInactive:()=>i4,IconLayoutSidebarRight:()=>o4,IconLayoutSidebarRightInactive:()=>a4,IconListNumbers:()=>s4,IconLoader2:()=>l4,IconLocationCog:()=>c4,IconMenu2:()=>u4,IconMenuDeep:()=>d4,IconMessage:()=>h4,IconMoon:()=>f4,IconPage:()=>p4,IconPageFlat:()=>g4,IconPalette:()=>m4,IconPencil:()=>v4,IconPencilCog:()=>b4,IconPhoto:()=>Sl,IconPhotoOff:()=>Ml,IconPin:()=>w4,IconPlayerPause:()=>_4,IconPlayerPlay:()=>y4,IconRefresh:()=>k4,IconSettings:()=>E4,IconSettingsOff:()=>A4,IconSpacingVertical:()=>S4,IconSun:()=>M4,IconTrash:()=>x4,IconWorldCog:()=>I4,IconX:()=>C4,IconZoom:()=>O4,IconZoomCancel:()=>T4,IconZoomIn:()=>L4,IconZoomInArea:()=>R4,IconZoomOut:()=>P4,IconZoomOutArea:()=>$4,IconZoomPan:()=>z4});function tv(e){return[...e.matchAll(/([^{}]+)\s*\{([^}]+)\}/g)].map(t=>{const r=t[1].trim(),o=t[2],a=/color:\s*([^;]+)/.exec(o);if(a){const s=a[1].trim();return{selectors:r.split(",").map(c=>c.trim().replace(/\s\s+/g," ")),color:s}}return null}).filter(t=>t!==null)}var nv=tv(km),_a=new Map;for(const e of nv)for(const t of e.selectors){const r=t.match(/^\s*\.([^ ]+)\s*(.*)$/);if(!r)continue;const[,o,a]=r;let s=a.trim();s.startsWith(">")&&(s=s.substring(1).trim()),s===""&&(s="*"),_a.has(o)||_a.set(o,[]),_a.get(o)?.push({subSelector:s,color:e.color})}var rv=new DOMParser,iv=new XMLSerializer;function ov(e,t){const r=_a.get(t);if(!r?.length)return e;const o=rv.parseFromString(e,"image/svg+xml").documentElement;if(o.querySelector("parsererror"))return console.error(`Error parsing SVG for ${t}`),e;for(const{subSelector:a,color:s}of r)try{o.querySelectorAll(a).forEach(c=>{c.setAttribute("stroke",s)})}catch(c){console.error(`Invalid selector "${a}" for ${t}`,c)}return iv.serializeToString(o)}var av=Object.fromEntries(Object.keys(P0).map(e=>{const t=e.replace(/^Icon/,"").replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),r=P0[e];return[e,ov(r,`icon-tabler-${t}`)]})),{IconAdjustmentsHorizontal:sv,IconArrowsHorizontal:lv,IconArrowsLeftRight:cv,IconArrowAutofitDown:uv,IconArrowAutofitHeight:dv,IconArrowAutofitLeft:hv,IconArrowAutofitRight:fv,IconArrowAutofitWidth:pv,IconArrowBigLeft:gv,IconArrowBigRight:mv,IconArrowsMove:vv,IconArrowsMoveVertical:bv,IconArrowsVertical:wv,IconBook:_v,IconBookReturn:yv,IconBookUpload:kv,IconBookmark:Ev,IconBookmarkOff:Av,IconBookmarks:Sv,IconBoxAlignTop:Mv,IconCategory:xv,IconCheck:Iv,IconChevronLeft:Cv,IconChevronRight:Ov,IconAlertCircle:Tv,IconCircleCheck:Lv,IconCircleX:Rv,IconHelp:Pv,IconInfoCircle:$v,IconComic1:zv,IconComic1Flat:Nv,IconComic2:Dv,IconComic2Flat:Bv,IconComic3:Fv,IconComic3Flat:Hv,IconDeviceFloppy:Gv,IconDotsVertical:Uv,IconEReader1:Wv,IconEReader1Flat:Vv,IconEReader2:Zv,IconEReader2Flat:qv,IconExternalLink:jv,IconEye:Kv,IconEyeOff:Yv,IconFileDownload:Xv,IconFilePercent:Jv,IconHandClick:Qv,IconKeyboard:e4,IconLayoutBottombar:t4,IconLayoutBottombarInactive:n4,IconLayoutSidebar:r4,IconLayoutSidebarInactive:i4,IconLayoutSidebarRight:o4,IconLayoutSidebarRightInactive:a4,IconListNumbers:s4,IconLoader2:l4,IconLocationCog:c4,IconMenu2:u4,IconMenuDeep:d4,IconMessage:h4,IconMoon:f4,IconPage:p4,IconPageFlat:g4,IconPalette:m4,IconPencil:v4,IconPencilCog:b4,IconPhoto:Sl,IconPhotoOff:Ml,IconPin:w4,IconPlayerPause:_4,IconPlayerPlay:y4,IconRefresh:k4,IconSettings:E4,IconSettingsOff:A4,IconSpacingVertical:S4,IconSun:M4,IconTrash:x4,IconWorldCog:I4,IconX:C4,IconZoom:O4,IconZoomCancel:T4,IconZoomIn:L4,IconZoomInArea:R4,IconZoomOut:P4,IconZoomOutArea:$4,IconZoomPan:z4}=av;function X(e,t,r,o){var a=arguments.length,s=a<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,r):o,c;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(e,t,r,o);else for(var h=e.length-1;h>=0;h--)(c=e[h])&&(s=(a<3?c(s):a>3?c(t,r,s):c(t,r))||s);return a>3&&s&&Object.defineProperty(t,r,s),s}var Hr=class extends rt{constructor(...t){super(...t),this.name="",this.variant="regular",this.family="classic",this.label="",this.size=""}static{this.styles=$t`
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
  `}updated(t){super.updated(t),t.has("name")&&(Al[R0(this.name)]?(this.dispatchEvent(new CustomEvent("load",{bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent("wa-load",{bubbles:!0,composed:!0}))):(this.dispatchEvent(new CustomEvent("error",{bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent("wa-error",{bubbles:!0,composed:!0}))))}render(){const t=Al[R0(this.name)];if(!t)return $e;const r=this.size?`--mov-icon-size: ${this.size};`:"";return ce`<span
      role=${this.label?"img":$e}
      aria-label=${this.label||$e}
      aria-hidden=${this.label?$e:"true"}
      style=${r}
      >${L0(t)}</span
    >`}};X([fe({type:String})],Hr.prototype,"name",void 0),X([fe({type:String,reflect:!0})],Hr.prototype,"variant",void 0),X([fe({type:String,reflect:!0})],Hr.prototype,"family",void 0),X([fe({type:String})],Hr.prototype,"label",void 0),X([fe({type:String})],Hr.prototype,"size",void 0),Hr=X([gt("mov-icon")],Hr);var Ot=Zi(class extends Zo{constructor(e){if(super(e),e.type!==Vo.ATTRIBUTE||e.name!=="class"||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(o=>o!=="")));for(const o in t)t[o]&&!this.nt?.has(o)&&this.st.add(o);return this.render(t)}const r=e.element.classList;for(const o of this.st)o in t||(r.remove(o),this.st.delete(o));for(const o in t){const a=!!t[o];a===this.st.has(o)||this.nt?.has(o)||(a?(r.add(o),this.st.add(o)):(r.remove(o),this.st.delete(o)))}return Zn}}),cn=e=>e??$e,N4=":host{--mov-font-size-scale:1;--mov-font-size-m:calc(1rem * var(--mov-font-size-scale));--mov-font-size-s:round(calc(var(--mov-font-size-m) / 1.125), 1px);--mov-font-size-l:round(calc(var(--mov-font-size-m) * 1.125 * 1.125), 1px);--mov-border-width-s:.0625rem;--mov-border-radius-m:.375rem;--mov-border-radius-pill:9999px;--mov-transition-fast:75ms;--mov-font-weight-action:500;--mov-focus-ring:solid .1875rem var(--mov-color-fill-loud);--mov-focus-ring-offset:.0625rem;--mov-line-height-condensed:1.2;--mov-form-control-padding-block:.75em;--mov-form-control-padding-inline:1em;--mov-form-control-height:round(calc(2 * var(--mov-form-control-padding-block) + 1em * var(--mov-line-height-condensed)), 1px);display:inline-block}:host([size=small]){font-size:var(--mov-font-size-s)}:host([size=medium]){font-size:var(--mov-font-size-m)}:host([size=large]){font-size:var(--mov-font-size-l)}.button{box-sizing:border-box;user-select:none;white-space:nowrap;vertical-align:middle;transition-property:background,border,box-shadow,color;transition-duration:var(--mov-transition-fast);cursor:pointer;padding:0 var(--mov-form-control-padding-inline);font-family:inherit;font-size:inherit;font-weight:var(--mov-font-weight-action);line-height:calc(var(--mov-form-control-height) - var(--mov-border-width-s) * 2);height:var(--mov-form-control-height);border-radius:var(--mov-border-radius-m);border-style:solid;border-width:var(--mov-border-width-s);background-color:var(--mov-color-fill-loud);color:var(--mov-color-on-loud);border-color:#0000;justify-content:center;align-items:center;text-decoration:none;display:inline-flex}:host([appearance~=plain]){& .button{color:var(--mov-color-on-quiet);background-color:#0000;border-color:#0000}@media (hover:hover){& .button:not(.disabled):not(.loading):hover{color:var(--mov-color-on-quiet);background-color:var(--mov-color-fill-quiet)}}& .button:not(.disabled):not(.loading):active{color:var(--mov-color-on-quiet);background-color:color-mix(in oklab, var(--mov-color-fill-quiet), var(--mov-color-mix-active))}}:host([appearance~=outlined]){& .button{color:var(--mov-color-on-quiet);border-color:var(--mov-color-border-loud);background-color:#0000}@media (hover:hover){& .button:not(.disabled):not(.loading):hover{color:var(--mov-color-on-quiet);background-color:var(--mov-color-fill-quiet)}}& .button:not(.disabled):not(.loading):active{color:var(--mov-color-on-quiet);background-color:color-mix(in oklab, var(--mov-color-fill-quiet), var(--mov-color-mix-active))}}:host([appearance~=filled]){& .button{color:var(--mov-color-on-normal);background-color:var(--mov-color-fill-normal);border-color:#0000}@media (hover:hover){& .button:not(.disabled):not(.loading):hover{color:var(--mov-color-on-normal);background-color:color-mix(in oklab, var(--mov-color-fill-normal), var(--mov-color-mix-hover))}}& .button:not(.disabled):not(.loading):active{color:var(--mov-color-on-normal);background-color:color-mix(in oklab, var(--mov-color-fill-normal), var(--mov-color-mix-active))}}:host([appearance~=filled][appearance~=outlined]) .button{border-color:var(--mov-color-border-normal)}:host([appearance~=accent]){& .button{color:var(--mov-color-on-loud);background-color:var(--mov-color-fill-loud);border-color:#0000}@media (hover:hover){& .button:not(.disabled):not(.loading):hover{background-color:color-mix(in oklab, var(--mov-color-fill-loud), var(--mov-color-mix-hover))}}& .button:not(.disabled):not(.loading):active{background-color:color-mix(in oklab, var(--mov-color-fill-loud), var(--mov-color-mix-active))}}.button:focus{outline:none}.button:focus-visible{outline:var(--mov-focus-ring);outline-offset:var(--mov-focus-ring-offset)}.button.disabled{opacity:.5;cursor:not-allowed}.button.disabled *{pointer-events:none}.button.is-icon-button{outline-offset:2px;width:var(--mov-form-control-height);aspect-ratio:1}:host([pill]) .button{border-radius:var(--mov-border-radius-pill)}.start,.end{pointer-events:none;flex:none;align-items:center;display:flex}.label{display:inline-block}.is-icon-button .label{display:flex}mov-icon[part~=caret]{align-self:center;align-items:center;display:flex}mov-icon[part~=caret]::part(svg){width:.875em;height:.875em}.loading{cursor:wait;position:relative}.loading .start,.loading .label,.loading .end,.loading .caret{visibility:hidden}.spinner{--indicator-color:currentColor;--track-color:color-mix(in oklab, currentColor, transparent 90%);border:2px solid var(--track-color);border-top-color:var(--indicator-color);border-radius:50%;width:1em;height:1em;font-size:1em;animation:1s linear infinite spin;position:absolute;top:calc(50% - .5em);left:calc(50% - .5em)}@keyframes spin{to{transform:rotate(360deg)}}slot[name=start]::slotted(*){margin-inline-end:.75em}slot[name=end]::slotted(*),.button:not(.visually-hidden-label) [part~=caret]{margin-inline-start:.75em}",ut=class extends rt{constructor(...t){super(...t),this.isIconButton=!1,this.hasLabel=!1,this.hasStart=!1,this.hasEnd=!1,this.title="",this.appearance="accent",this.variant="brand",this.size="medium",this.withCaret=!1,this.disabled=!1,this.loading=!1,this.pill=!1,this.type="button",this.form=null}static{this.styles=[Kt(N4)]}handleClick(t){(this.disabled||this.loading)&&(t.preventDefault(),t.stopPropagation())}click(){this.button?.click()}focus(t){this.button?.focus(t)}blur(){this.button?.blur()}render(){const t=!!this.href,r={button:!0,"with-caret":this.withCaret,disabled:this.disabled,loading:this.loading,pill:this.pill,"has-label":this.hasLabel,"has-start":this.hasStart,"has-end":this.hasEnd,"is-icon-button":this.isIconButton},o=ce`
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
      ${this.withCaret?ce`<mov-icon
            part="caret"
            class="caret"
            name="IconChevronRight"
            style="transform: rotate(90deg)"
          ></mov-icon>`:""}
      ${this.loading?ce`<span
            part="spinner"
            class="spinner"
          ></span>`:""}
    `;return t?ce`
        <a
          part="base"
          class=${Ot(r)}
          href=${cn(this.href)}
          target=${cn(this.target)}
          title=${cn(this.title)}
          role="button"
          aria-disabled=${this.disabled?"true":"false"}
          tabindex=${this.disabled?"-1":"0"}
          download=${cn(this.download)}
          @click=${this.handleClick}
        >
          ${o}
        </a>
      `:ce`
        <button
          part="base"
          class=${Ot(r)}
          ?disabled=${this.disabled||this.loading}
          type=${cn(this.type)}
          title=${cn(this.title)}
          name=${cn(this.name)}
          value=${cn(this.value)}
          aria-disabled=${this.disabled?"true":"false"}
          tabindex=${this.disabled?"-1":"0"}
        >
          ${o}
        </button>
      `}handleLabelSlotChange(){const t=this.labelSlot?.assignedNodes({flatten:!0})??[],r=t.filter(c=>c.nodeType===Node.ELEMENT_NODE),o=t.filter(c=>c.nodeType===Node.TEXT_NODE&&c.textContent?.trim()!==""),a=c=>["wa-icon","mov-icon","svg"].includes(c.localName),s=r.some(a);this.isIconButton=o.length===0&&s}};X([Fr(".button")],ut.prototype,"button",void 0),X([Fr("slot:not([name])")],ut.prototype,"labelSlot",void 0),X([ln()],ut.prototype,"isIconButton",void 0),X([ln()],ut.prototype,"hasLabel",void 0),X([ln()],ut.prototype,"hasStart",void 0),X([ln()],ut.prototype,"hasEnd",void 0),X([fe()],ut.prototype,"title",void 0),X([fe({reflect:!0})],ut.prototype,"appearance",void 0),X([fe({reflect:!0})],ut.prototype,"variant",void 0),X([fe({reflect:!0})],ut.prototype,"size",void 0),X([fe({attribute:"with-caret",type:Boolean,reflect:!0})],ut.prototype,"withCaret",void 0),X([fe({type:Boolean,reflect:!0})],ut.prototype,"disabled",void 0),X([fe({type:Boolean,reflect:!0})],ut.prototype,"loading",void 0),X([fe({type:Boolean,reflect:!0})],ut.prototype,"pill",void 0),X([fe()],ut.prototype,"type",void 0),X([fe({reflect:!0})],ut.prototype,"name",void 0),X([fe({reflect:!0})],ut.prototype,"value",void 0),X([fe({reflect:!0})],ut.prototype,"href",void 0),X([fe()],ut.prototype,"target",void 0),X([fe()],ut.prototype,"rel",void 0),X([fe()],ut.prototype,"download",void 0),X([fe({reflect:!0})],ut.prototype,"form",void 0),ut=X([gt("mov-button")],ut);var wn=class extends rt{constructor(...t){super(...t),this.mode="menu",this.active=!1,this.label="",this.icon="",this.activeIcon="",this.appearance="accent",this.size="medium",this.disabled=!1,this.loading=!1}static{this.styles=$t`
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
  `}connectedCallback(){super.connectedCallback(),this.label||(this.label=this._getDefaultLabel())}render(){const t=this.active?this.activeLabel??this.label:this.label,r={"two-icon-mode":["menu","custom","theme"].includes(this.mode),"single-icon-mode":["chevron","expand","play-pause"].includes(this.mode)};return ce`
      <mov-button
        @click=${this._onClick}
        .appearance=${cn(this.appearance)}
        .size=${cn(this.size)}
        ?disabled=${cn(this.disabled)}
        ?loading=${cn(this.loading)}
        .title=${cn(this.title)}
        class=${Ot(r)}
        title=${t}
        aria-label=${t}
        aria-pressed=${this.active?"true":"false"}
        icon-only
      >
        ${this._renderIcons()}
      </mov-button>
    `}_getDefaultLabel(){switch(this.mode){case"menu":return"Toggle menu";case"chevron":return"Toggle expand";case"theme":return"Toggle theme";case"play-pause":return"Toggle play";case"expand":return"Toggle expand";case"custom":return"Toggle";default:return"Toggle"}}_getIcons(){switch(this.mode){case"menu":return{inactive:"menu-2",active:"x"};case"chevron":return{inactive:"chevron-right",active:"chevron-right"};case"theme":return{inactive:"moon",active:"sun"};case"play-pause":return{inactive:"player-play",active:"player-pause"};case"expand":return{inactive:"arrow-autofit-down",active:"arrow-autofit-down"};case"custom":return{inactive:this.icon,active:this.activeIcon};default:return{inactive:"",active:""}}}_renderIcons(){const t=this._getIcons();return t.inactive?this.mode==="chevron"?ce`<mov-icon
        class="chevron-icon"
        name=${t.inactive}
      ></mov-icon>`:this.mode==="expand"?ce`<mov-icon
        class="expand-icon"
        name=${t.inactive}
      ></mov-icon>`:this.mode==="play-pause"?ce`<mov-icon
        class="play-pause-icon"
        name=${this.active?t.active:t.inactive}
      ></mov-icon>`:ce`
      <mov-icon
        class="inactive-icon"
        name=${t.inactive}
      ></mov-icon>
      <mov-icon
        class="active-icon"
        name=${t.active}
      ></mov-icon>
    `:$e}_onClick(){if(this.disabled||this.loading)return;const t=this.active;this.active=!this.active,this.dispatchEvent(new CustomEvent("toggle",{detail:{value:this.active,oldValue:t,mode:this.mode},bubbles:!0,composed:!0}))}toggle(){this._onClick()}setActive(t){this.active=t}};X([fe({type:String})],wn.prototype,"mode",void 0),X([fe({type:Boolean,reflect:!0})],wn.prototype,"active",void 0),X([fe({type:String})],wn.prototype,"label",void 0),X([fe({type:String})],wn.prototype,"activeLabel",void 0),X([fe({type:String})],wn.prototype,"icon",void 0),X([fe({type:String})],wn.prototype,"activeIcon",void 0),X([fe({type:String,reflect:!0})],wn.prototype,"appearance",void 0),X([fe({type:String,reflect:!0})],wn.prototype,"size",void 0),X([fe({type:Boolean})],wn.prototype,"disabled",void 0),X([fe({type:Boolean,reflect:!0})],wn.prototype,"loading",void 0),wn=X([gt("toggle-button")],wn);var $0="important",D4=" !"+$0,Fn=Zi(class extends Zo{constructor(e){if(super(e),e.type!==Vo.ATTRIBUTE||e.name!=="style"||e.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce((t,r)=>{const o=e[r];return o==null?t:t+`${r=r.includes("-")?r:r.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${o};`},"")}update(e,[t]){const{style:r}=e.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(t)),this.render(t);for(const o of this.ft)t[o]??(this.ft.delete(o),o.includes("-")?r.removeProperty(o):r[o]=null);for(const o in t){const a=t[o];if(a!=null){this.ft.add(o);const s=typeof a=="string"&&a.endsWith(D4);o.includes("-")||s?r.setProperty(o,s?a.slice(0,-11):a,s?$0:""):r[o]=a}}return Zn}}),B4=Object.fromEntries(Object.entries(Al).map(([e,t])=>[e,L0(t)])),{IconAdjustmentsHorizontal:kA,IconArrowsHorizontal:EA,IconArrowsLeftRight:AA,IconArrowAutofitDown:SA,IconArrowAutofitHeight:F4,IconArrowAutofitLeft:MA,IconArrowAutofitRight:xA,IconArrowAutofitWidth:H4,IconArrowBigLeft:IA,IconArrowBigRight:CA,IconArrowsMove:OA,IconArrowsMoveVertical:TA,IconArrowsVertical:LA,IconBook:RA,IconBookReturn:PA,IconBookUpload:$A,IconBookmark:G4,IconBookmarkOff:U4,IconBookmarks:zA,IconBoxAlignTop:NA,IconCategory:W4,IconCheck:ya,IconChevronLeft:DA,IconChevronRight:BA,IconAlertCircle:FA,IconCircleCheck:HA,IconCircleX:GA,IconHelp:UA,IconInfoCircle:WA,IconComic1:VA,IconComic1Flat:ZA,IconComic2:qA,IconComic2Flat:jA,IconComic3:KA,IconComic3Flat:YA,IconDeviceFloppy:XA,IconDotsVertical:JA,IconEReader1:QA,IconEReader1Flat:eS,IconEReader2:tS,IconEReader2Flat:nS,IconExternalLink:rS,IconEye:V4,IconEyeOff:Z4,IconFileDownload:iS,IconFilePercent:oS,IconHandClick:aS,IconKeyboard:sS,IconLayoutBottombar:lS,IconLayoutBottombarInactive:cS,IconLayoutSidebar:uS,IconLayoutSidebarInactive:dS,IconLayoutSidebarRight:hS,IconLayoutSidebarRightInactive:fS,IconListNumbers:pS,IconLoader2:gS,IconLocationCog:mS,IconMenu2:vS,IconMenuDeep:bS,IconMessage:wS,IconMoon:_S,IconPage:yS,IconPageFlat:kS,IconPalette:ES,IconPencil:AS,IconPencilCog:SS,IconPhoto:MS,IconPhotoOff:xS,IconPin:IS,IconPlayerPause:CS,IconPlayerPlay:OS,IconRefresh:q4,IconSettings:TS,IconSettingsOff:LS,IconSpacingVertical:RS,IconSun:PS,IconTrash:$S,IconWorldCog:zS,IconX:xl,IconZoom:NS,IconZoomCancel:j4,IconZoomIn:K4,IconZoomInArea:DS,IconZoomOut:Y4,IconZoomOutArea:BS,IconZoomPan:FS}=B4,fr=class extends rt{constructor(...t){super(...t),this.color="#000000",this.size=26,this.radius="50%",this.contrastColor="#FFFFFF",this.checked=!1}static{this.styles=$t`
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
  `}willUpdate(t){t.has("color")&&(this.contrastColor=mi(this.color)),t.has("selected")&&(this.checked=this.color.toLowerCase()===this.selected?.toLowerCase())}handleClick(){this.dispatchEvent(new CustomEvent("input",{detail:{value:this.color},bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent("change",{detail:{value:this.color},bubbles:!0,composed:!0}))}render(){const t={width:`${this.size}px`,height:`${this.size}px`},r={"--radius":typeof this.radius=="number"?`${this.radius}px`:this.radius,"--color":this.color,"--contrast-color":this.contrastColor};return ce`
      <div style=${Fn(t)}>
        <div
          class="swatch"
          style=${Fn(r)}
          @click=${this.handleClick}
        >
          <slot></slot>
          <span class="check-icon"> ${ya} </span>
        </div>
      </div>
    `}};X([fe({type:String})],fr.prototype,"color",void 0),X([fe({type:String})],fr.prototype,"selected",void 0),X([fe({type:Number})],fr.prototype,"size",void 0),X([fe({type:String})],fr.prototype,"radius",void 0),X([fe({state:!0})],fr.prototype,"contrastColor",void 0),X([fe({type:Boolean,reflect:!0})],fr.prototype,"checked",void 0),fr=X([gt("color-swatch")],fr);function X4(e){const t=e.to("oklch"),r=t.coords[2],o=t.coords[1],a=t.coords[0],s=[.95,.9,.8,.7,.6,.5,.4,.3,.2,.1,.05],c=s.map(f=>new ct("oklch",[f,o,r]).toString({format:"hex"}));let h=-1,u=1/0;for(let f=0;f<s.length;f++){const p=Math.abs(s[f]-a);p<u&&(u=p,h=f)}return h!==-1&&(c[h]=e.toString({format:"hex"})),c.map(f=>f.toUpperCase())}function J4(e){const t=e.to("hsl"),r=[.97,.9,.8,.7,.6,.5,.4,.3,.2,.1,.05],o=[];for(const a of r){const s=t.clone();s.coords[2]=a*100,a>.8?s.coords[1]*=.4:a>.6?s.coords[1]*=.8:a<.3&&(s.coords[1]=Math.min(100,s.coords[1]*1.1)),o.push(s.toString({format:"hex"}).toUpperCase())}return o}function Q4(e){const t=[],r=[95,90,80,70,60,50,40,30,20,10,5],o=e.to("hsl");for(const a of r){const s=o.clone();s.coords[2]=a,t.push(s.toString({format:"hex"}).toUpperCase())}return t}function e3(e){const t=new Array(11).fill(""),r=e.to("hsl"),o={lightest:{lightness:95,rotate:-10,saturate:-30},darkest:{lightness:10,rotate:10,saturate:10}},a=5,s=5,c=(o.lightest.lightness-50)/a,h=(50-o.darkest.lightness)/s,u=o.lightest.rotate/a,f=o.darkest.rotate/s,p=o.lightest.saturate/a,b=o.darkest.saturate/s;for(let w=1;w<=a;w++){const m=a-w,v=r.clone();v.coords[2]+=c*(w-.5),v.coords[0]+=u*w,v.coords[1]+=p*w,t[m]=v.toString({format:"hex"})}t[5]=r.clone().toString({format:"hex"});for(let w=1;w<=s;w++){const m=a+w,v=r.clone();v.coords[2]-=h*(w-.5),v.coords[0]+=f*w,v.coords[1]+=b*w,t[m]=v.toString({format:"hex"})}return t}function t3(e){const[t,r,o]=e.to("hsl").coords,a=new Array(11);a[5]=e.toString({format:"hex"});for(let s=0;s<5;s++){const c=(5-s)/6,h=o+(100-o)*c;a[s]=new ct("hsl",[t,r-r*c,h]).toString({format:"hex"})}for(let s=0;s<5;s++){const c=(s+1)/6,h=o-o*c,u=r+(100-r)*c;a[s+6]=new ct("hsl",[t,u,h]).toString({format:"hex"})}return a}function z0(e,t="steps"){let r;try{r=ct.get(e)}catch{r=ct.get(vl.navy)}switch(t){case"saturation":return J4(r);case"lightness":return Q4(r);case"mantine":return t3(r);case"chakra":return e3(r);default:return X4(r)}}var pr=class extends rt{constructor(...t){super(...t),this.baseColor="#228be6",this.mode="steps",this.orientation="horizontal",this.value="",this.gradient=[]}static{this.styles=$t`
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
  `}willUpdate(t){(t.has("baseColor")||t.has("mode"))&&(this.gradient=z0(this.baseColor,this.mode)??[])}handleSwatchClick(t){this.value=t,this.dispatchEvent(new CustomEvent("input",{detail:{value:this.value},bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value},bubbles:!0,composed:!0}))}render(){return ce`
      ${this.gradient.map(t=>ce`
          <div
            class="swatch"
            ?checked=${this.selected&&t.toLowerCase()===this.selected.toLowerCase()}
            title=${t}
            @click=${()=>this.handleSwatchClick(t)}
          >
            <div
              class="swatch-inner"
              style="--color: ${t}; --text-color: ${mi(t)}"
            >
              <span class="checkmark">${ya}</span>
            </div>
          </div>
        `)}
    `}};X([fe({type:String})],pr.prototype,"baseColor",void 0),X([fe({type:String})],pr.prototype,"mode",void 0),X([fe({type:String,reflect:!0})],pr.prototype,"orientation",void 0),X([fe({type:String})],pr.prototype,"selected",void 0),X([fe({type:String,reflect:!0})],pr.prototype,"value",void 0),X([ln()],pr.prototype,"gradient",void 0),pr=X([gt("color-palette")],pr);var ka=class extends rt{constructor(...t){super(...t),this.value=""}static{this.styles=$t`
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
  `}handleColorClick(t){this.value=t.currentTarget.title,this.dispatchEvent(new CustomEvent("input",{detail:{value:this.value},bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value},bubbles:!0,composed:!0}))}render(){const t=Object.keys(kt).filter(o=>!["dark","gray","zinc","neutral","stone"].includes(o)),r=[200,300,400,500,600,700,800,900,950];return t.map(o=>ce` <div class="SwatchGroup">
        <span class="ColorName">${o}</span>
        <div class="Swatches">${r.map(a=>{const s=kt[o][a],c=mi(s);return ce`
          <span
            title="${s}"
            class="${Ot({ThemeRadio:!0,selected:this.selected?.toLowerCase()===s.toLowerCase()})}"
            style="background-color: ${s}; color: ${c}"
            @click=${this.handleColorClick}
          >
            ${ya}
          </span>
        `})}</div>
      </div>`)}};X([fe({type:String,reflect:!0})],ka.prototype,"value",void 0),X([fe({type:String})],ka.prototype,"selected",void 0),ka=X([gt("color-panel")],ka);var Rn=class extends rt{constructor(...t){super(...t),this.value="#228be6",this.swatches=null,this.mode="popup",this.opened=!1,this.popupDirection="left",this.sourceSpace="srgb",this.hsv={h:0,s:0,v:0},this.saturationThumbPosition={x:0,y:0},this.hueThumbPosition=0,this.isDraggingSaturation=!1,this.isDraggingHue=!1}static{this.styles=$t`
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
  `}connectedCallback(){super.connectedCallback(),this.updateStateFromValue(this.value),window.addEventListener("mousemove",this.handleDrag.bind(this)),window.addEventListener("mouseup",this.handleDragEnd.bind(this)),window.addEventListener("touchmove",this.handleDrag.bind(this),{passive:!1}),window.addEventListener("touchend",this.handleDragEnd.bind(this))}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("mousemove",this.handleDrag.bind(this)),window.removeEventListener("mouseup",this.handleDragEnd.bind(this)),window.removeEventListener("touchmove",this.handleDrag.bind(this)),window.removeEventListener("touchend",this.handleDragEnd.bind(this)),window.removeEventListener("click",this.handleClickOutside.bind(this))}updated(t){t.has("mode")&&(this.mode==="popup"?window.addEventListener("click",this.handleClickOutside.bind(this)):window.removeEventListener("click",this.handleClickOutside.bind(this)))}willUpdate(t){t.has("value")&&this.updateStateFromValue(this.value),t.has("mode")&&this.mode==="inline"&&(this.opened=!1)}handleClickOutside(t){this.opened&&!t.composedPath().includes(this)&&(this.opened=!1)}togglePopup(){if(this.mode==="popup"){if(!this.opened){const t=this.getBoundingClientRect(),r=250;let o;const a=this.closest("mov-drawer");if(a?.shadowRoot){const s=a.shadowRoot.querySelector("dialog");s?o=s.getBoundingClientRect():o={left:0,right:window.innerWidth}}else o={left:0,right:window.innerWidth};t.left+r>o.right?t.right-r>o.left?this.popupDirection="right":this.popupDirection="left":this.popupDirection="left"}this.opened=!this.opened}}isSameColor(t,r){return!t||!r?!1:ct.deltaE(t,r,{method:"2000"})<1}renderCheckIcon(t){return ce`
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
        style=${Fn({stroke:mi(t)})}
      >
        <path d="M5 12l5 5l10 -10" />
      </svg>
    `}renderPickerBody(){const t={backgroundColor:`hsl(${this.hsv.h}, 100%, 50%)`},r={h:this.hsv.h,s:this.hsv.s*100,v:this.hsv.v*100},o={top:`${this.saturationThumbPosition.y}%`,left:`${this.saturationThumbPosition.x}%`,backgroundColor:new ct("hsv",[r.h,r.s,r.v]).toString({format:"hex"})},a={left:`${this.hueThumbPosition}%`};return ce`
      <div
        class="saturation-panel"
        style=${Fn(t)}
        @mousedown=${this.handleSaturationDragStart.bind(this)}
        @touchstart=${this.handleSaturationDragStart.bind(this)}
      >
        <div class="saturation-overlay-1"></div>
        <div class="saturation-overlay-2"></div>
        <div
          class="saturation-thumb"
          style=${Fn(o)}
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
            style=${Fn(a)}
          ></div>
        </div>
      </div>

      <div class="swatches">
        ${(this.swatches||Object.entries(kt).filter(([s])=>!["dark","gray","zinc","neutral","stone"].includes(s)).map(([,s])=>s[600])).map(s=>ce`
            <button
              class="swatch"
              title=${s}
              style=${Fn({backgroundColor:s})}
              @click=${()=>this.selectSwatch(s)}
            >
              ${this.isSameColor(this.value,s)?this.renderCheckIcon(s):""}
            </button>
          `)}
      </div>
    `}render(){const t={"picker-container":!0,popup:this.mode==="popup",right:this.popupDirection==="right"},r=this.renderPickerBody();return this.mode==="popup"?ce`
        <div
          class="popup-trigger"
          @click=${this.togglePopup}
        >
          <div
            class="preview"
            style=${Fn({backgroundColor:this.value})}
          ></div>
        </div>
        ${this.opened?ce`<div class=${Ot(t)}>${r}</div>`:""}
      `:ce`<div class=${Ot(t)}>${r}</div>`}parseColor(t){try{return ct.get(t)}catch(r){return console.error(`[mov-color-picker] Invalid color value: "${t}"`,r),null}}colorToHsv(t){let[r,o,a]=t.to("srgb").to("hsv").coords;return Number.isNaN(r)&&(r=this.hsv.h||0,o=0),o=Math.max(0,Math.min(100,o))/100,a=Math.max(0,Math.min(100,a))/100,{h:r,s:o,v:a}}updateStateFromValue(t){const r=this.parseColor(t);if(!r)return;this.sourceSpace=r.space.id;const o=this.colorToHsv(r);(o.h!==this.hsv.h||o.s!==this.hsv.s||o.v!==this.hsv.v)&&(this.hsv=o,this.updateThumbPositions())}dispatchInput(){this.dispatchEvent(new CustomEvent("input",{detail:{value:this.value},bubbles:!0,composed:!0}))}dispatchChange(){this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value},bubbles:!0,composed:!0}))}updateValueFromHsv(){const t={h:this.hsv.h,s:this.hsv.s*100,v:this.hsv.v*100},r=new ct("hsv",[t.h,t.s,t.v]);let o;try{!this.sourceSpace||["srgb","hsl","hsv"].includes(this.sourceSpace)?o=r.to("srgb").toString({format:"hex"}):o=r.to(this.sourceSpace).toString({precision:5})}catch(a){console.error(`[mov-color-picker] Could not convert color to space ${this.sourceSpace}`,a),o=r.to("srgb").toString({format:"hex"})}this.value!==o&&(this.value=o,this.dispatchInput())}updateThumbPositions(){this.saturationThumbPosition={x:this.hsv.s*100,y:(1-this.hsv.v)*100},this.hueThumbPosition=this.hsv.h/360*100}handleSaturationDragStart(t){t.preventDefault(),this.isDraggingSaturation=!0,this.saturationPanel=this.shadowRoot?.querySelector(".saturation-panel"),this.updateSaturation(t)}handleHueDragStart(t){t.preventDefault(),this.isDraggingHue=!0,this.hueSlider=this.shadowRoot?.querySelector(".hue-slider"),this.updateHue(t)}handleDrag(t){this.isDraggingSaturation&&this.updateSaturation(t),this.isDraggingHue&&this.updateHue(t)}handleDragEnd(){(this.isDraggingSaturation||this.isDraggingHue)&&this.dispatchChange(),this.isDraggingSaturation=!1,this.isDraggingHue=!1}getEventPosition(t){return"touches"in t?{clientX:t.touches[0].clientX,clientY:t.touches[0].clientY}:{clientX:t.clientX,clientY:t.clientY}}updateSaturation(t){if(!this.saturationPanel)return;const{clientX:r,clientY:o}=this.getEventPosition(t),a=this.saturationPanel.getBoundingClientRect(),s=Math.max(0,Math.min(r-a.left,a.width)),c=Math.max(0,Math.min(o-a.top,a.height));this.hsv.s=s/a.width,this.hsv.v=1-c/a.height,this.updateValueFromHsv(),this.updateThumbPositions()}updateHue(t){if(!this.hueSlider)return;const{clientX:r}=this.getEventPosition(t),o=this.hueSlider.getBoundingClientRect(),a=Math.max(0,Math.min(r-o.left,o.width));this.hsv.h=a/o.width*360,this.updateValueFromHsv(),this.updateThumbPositions()}selectSwatch(t){this.value=t,this.dispatchInput(),this.dispatchChange()}};X([fe({type:String})],Rn.prototype,"value",void 0),X([fe({type:Array})],Rn.prototype,"swatches",void 0),X([fe({type:String})],Rn.prototype,"mode",void 0),X([ln()],Rn.prototype,"opened",void 0),X([ln()],Rn.prototype,"popupDirection",void 0),X([ln()],Rn.prototype,"sourceSpace",void 0),X([ln()],Rn.prototype,"hsv",void 0),X([ln()],Rn.prototype,"saturationThumbPosition",void 0),X([ln()],Rn.prototype,"hueThumbPosition",void 0),Rn=X([gt("mov-color-picker")],Rn);var N0=(e,t,r)=>{for(const o of t)if(o[0]===e)return(0,o[1])();return r?.()},gr=class extends rt{constructor(...t){super(...t),this.value="",this.labelPosition="side",this.size="medium",this._options=[],this.resizeObserver=new ResizeObserver(()=>this.updateThumbPosition())}static{this.styles=$t`
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
  `}connectedCallback(){super.connectedCallback(),this.resizeObserver.observe(this)}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver.unobserve(this)}handleClick(t,r){this.value=r,this.dispatchEvent(new CustomEvent("change",{detail:this.value,bubbles:!0,composed:!0}))}handleSlotChange(){this._options=this._slotEl.assignedNodes({flatten:!0}).filter(t=>t.nodeName==="SEGMENTED-CONTROL-OPTION").map(t=>({value:t.getAttribute("value")??"",label:t.getAttribute("label")??"",icon:t.getAttribute("icon")??void 0}))}firstUpdated(){this.handleSlotChange(),this.updateComplete.then(()=>this.updateThumbPosition())}updated(t){super.updated(t),(t.has("value")||t.has("_options")||t.has("labelPosition")||t.has("size"))&&Promise.resolve().then(()=>this.updateThumbPosition())}updateThumbPosition(){if(!this.thumb)return;const t=this.shadowRoot?.querySelector(".button.selected");if(t){const{offsetWidth:r,offsetHeight:o}=t,a=t.getBoundingClientRect(),s=this.shadowRoot?.querySelector(".segmented-control")?.getBoundingClientRect(),c=a.left-(s?.left??0),h=a.top-(s?.top??0);this.thumb.style.transform=`translate(${c}px, ${h}px)`,this.thumb.style.width=`${r}px`,this.thumb.style.height=`${o}px`}else this.thumb.style.width="0px",this.thumb.style.height="0px"}render(){return ce`
      <div class="segmented-control">
        <div class="thumb"></div>
        ${this._options.map(t=>ce`
            <div
              class="option"
              title="${this.labelPosition==="tooltip"?t.label:$e}"
            >
              <button
                class="${Ot({button:!0,selected:this.value===t.value,bottom:this.labelPosition==="bottom",small:this.size==="small",medium:this.size==="medium",large:this.size==="large"})}"
                @click=${r=>this.handleClick(r,t.value)}
                role="radio"
                aria-checked="${this.value===t.value}"
              >
                ${t.icon?ce`<mov-icon
                      name="${t.icon}"
                      .size=${N0(this.size,[["small",()=>"16px"],["medium",()=>"24px"],["large",()=>"36px"]],()=>this.size)}
                    ></mov-icon>`:$e}
                ${this.labelPosition!=="tooltip"?ce`<span>${t.label}</span>`:$e}
              </button>
            </div>
          `)}
      </div>
      <div style="display: none;">
        <slot @slotchange=${this.handleSlotChange}></slot>
      </div>
    `}};X([fe({type:String,reflect:!0})],gr.prototype,"value",void 0),X([fe({type:String})],gr.prototype,"labelPosition",void 0),X([fe({type:String})],gr.prototype,"size",void 0),X([ln()],gr.prototype,"_options",void 0),X([Fr(".thumb")],gr.prototype,"thumb",void 0),X([Fr("slot")],gr.prototype,"_slotEl",void 0),gr=X([gt("segmented-control")],gr);var co=class extends rt{constructor(...t){super(...t),this.value="",this.label=""}createRenderRoot(){return this}};X([fe({type:String,reflect:!0})],co.prototype,"value",void 0),X([fe({type:String,reflect:!0})],co.prototype,"label",void 0),X([fe({type:String,reflect:!0})],co.prototype,"icon",void 0),co=X([gt("segmented-control-option")],co);var mr=class extends rt{constructor(...t){super(...t),this.name="",this.checked=!1,this.disabled=!1,this.design="graphical",this.textOn="ON",this.textOff="OFF"}static{this.styles=$t`
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
  `}toggleChecked(){this.disabled||(this.checked=!this.checked,this.dispatchEvent(new CustomEvent("change",{detail:{checked:this.checked},bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent("input",{detail:{checked:this.checked},bubbles:!0,composed:!0})))}render(){let t;return this.design==="graphical"?t=ce`${this.checked?ya:xl}`:t=ce`<span class="text">${this.checked?this.textOn:this.textOff}</span>`,ce`
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
    `}};X([fe({type:String})],mr.prototype,"name",void 0),X([fe({type:Boolean,reflect:!0})],mr.prototype,"checked",void 0),X([fe({type:Boolean,reflect:!0})],mr.prototype,"disabled",void 0),X([fe({type:String,reflect:!0})],mr.prototype,"design",void 0),X([fe({type:String})],mr.prototype,"textOn",void 0),X([fe({type:String})],mr.prototype,"textOff",void 0),mr=X([gt("mov-switch")],mr);var n3=gn((e=>{Object.defineProperty(e,"__esModule",{value:!0}),e.BLANK_URL=e.relativeFirstCharacters=e.whitespaceEscapeCharsRegex=e.urlSchemeRegex=e.ctrlCharactersRegex=e.htmlCtrlEntityRegex=e.htmlEntitiesRegex=e.invalidProtocolRegex=void 0,e.invalidProtocolRegex=/^([^\w]*)(javascript|data|vbscript)/im,e.htmlEntitiesRegex=/&#(\w+)(^\w|;)?/g,e.htmlCtrlEntityRegex=/&(newline|tab);/gi,e.ctrlCharactersRegex=/[\u0000-\u001F\u007F-\u009F\u2000-\u200D\uFEFF]/gim,e.urlSchemeRegex=/^.+(:|&colon;)/gim,e.whitespaceEscapeCharsRegex=/(\\|%5[cC])((%(6[eE]|72|74))|[nrt])/g,e.relativeFirstCharacters=[".","/"],e.BLANK_URL="about:blank"})),r3=gn((e=>{Object.defineProperty(e,"__esModule",{value:!0}),e.sanitizeUrl=c;var t=n3();function r(h){return t.relativeFirstCharacters.indexOf(h[0])>-1}function o(h){return h.replace(t.ctrlCharactersRegex,"").replace(t.htmlEntitiesRegex,function(u,f){return String.fromCharCode(f)})}function a(h){return URL.canParse(h)}function s(h){try{return decodeURIComponent(h)}catch{return h}}function c(h){if(!h)return t.BLANK_URL;var u,f=s(h.trim());do f=o(f).replace(t.htmlCtrlEntityRegex,"").replace(t.ctrlCharactersRegex,"").replace(t.whitespaceEscapeCharsRegex,"").trim(),f=s(f),u=f.match(t.ctrlCharactersRegex)||f.match(t.htmlEntitiesRegex)||f.match(t.htmlCtrlEntityRegex)||f.match(t.whitespaceEscapeCharsRegex);while(u&&u.length>0);var p=f;if(!p)return t.BLANK_URL;if(r(p))return p;var b=p.trimStart(),w=b.match(t.urlSchemeRegex);if(!w)return p;var m=w[0].toLowerCase().trim();if(t.invalidProtocolRegex.test(m))return t.BLANK_URL;var v=b.replace(/\\/g,"/");if(m==="mailto:"||m.includes("://"))return v;if(m==="http:"||m==="https:"){if(!a(v))return t.BLANK_URL;var E=new URL(v);return E.protocol=E.protocol.toLowerCase(),E.hostname=E.hostname.toLowerCase(),E.toString()}return v}})),i3=gn(((e,t)=>{(function(r,o){typeof define=="function"&&define.amd?define([],o):typeof e<"u"?o():(o(),r.FileSaver={})})(e,function(){"use strict";function r(f,p){return typeof p>"u"?p={autoBom:!1}:typeof p!="object"&&(console.warn("Deprecated: Expected third argument to be a object"),p={autoBom:!p}),p.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(f.type)?new Blob(["\uFEFF",f],{type:f.type}):f}function o(f,p,b){var w=new XMLHttpRequest;w.open("GET",f),w.responseType="blob",w.onload=function(){u(w.response,p,b)},w.onerror=function(){console.error("could not download file")},w.send()}function a(f){var p=new XMLHttpRequest;p.open("HEAD",f,!1);try{p.send()}catch{}return 200<=p.status&&299>=p.status}function s(f){try{f.dispatchEvent(new MouseEvent("click"))}catch{var p=document.createEvent("MouseEvents");p.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),f.dispatchEvent(p)}}var c=typeof window=="object"&&window.window===window?window:typeof self=="object"&&self.self===self?self:typeof global=="object"&&global.global===global?global:void 0,h=c.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),u=c.saveAs||(typeof window!="object"||window!==c?function(){}:"download"in HTMLAnchorElement.prototype&&!h?function(f,p,b){var w=c.URL||c.webkitURL,m=document.createElement("a");p=p||f.name||"download",m.download=p,m.rel="noopener",typeof f=="string"?(m.href=f,m.origin===location.origin?s(m):a(m.href)?o(f,p,b):s(m,m.target="_blank")):(m.href=w.createObjectURL(f),setTimeout(function(){w.revokeObjectURL(m.href)},4e4),setTimeout(function(){s(m)},0))}:"msSaveOrOpenBlob"in navigator?function(f,p,b){if(p=p||f.name||"download",typeof f!="string")navigator.msSaveOrOpenBlob(r(f,b),p);else if(a(f))o(f,p,b);else{var w=document.createElement("a");w.href=f,w.target="_blank",setTimeout(function(){s(w)})}}:function(f,p,b,w){if(w=w||open("","_blank"),w&&(w.document.title=w.document.body.innerText="downloading..."),typeof f=="string")return o(f,p,b);var m=f.type==="application/octet-stream",v=/constructor/i.test(c.HTMLElement)||c.safari,E=/CriOS\/[\d]+/.test(navigator.userAgent);if((E||m&&v||h)&&typeof FileReader<"u"){var y=new FileReader;y.onloadend=function(){var T=y.result;T=E?T:T.replace(/^data:[^;]*;/,"data:attachment/file;"),w?w.location.href=T:location=T,w=null},y.readAsDataURL(f)}else{var S=c.URL||c.webkitURL,x=S.createObjectURL(f);w?w.location=x:location.href=x,w=null,setTimeout(function(){S.revokeObjectURL(x)},4e4)}});c.saveAs=u.saveAs=u,typeof t<"u"&&(t.exports=u)})})),D0=r3(),o3=i3();function a3(e){switch(e){case"image/jpeg":return"jpg";case"image/png":return"png";case"image/webp":return"webp";case"image/gif":return"gif";case"image/bmp":return"bmp";default:return"png"}}async function s3(e){if(!e.src)return null;try{const t=await fetch(e.src);if(t.ok)return Ee(`Got blob for page ${e.src} from fetch`),await t.blob()}catch(t){Ee(`Failed to get blob for page ${e.src} from fetch`,t)}return typeof GM_xmlhttpRequest<"u"?new Promise(t=>{GM_xmlhttpRequest({method:"GET",url:e.src,responseType:"blob",onload:r=>{r.status===200?(Ee(`Got blob for page ${e.src} from GM_xmlhttpRequest`),t(r.response)):(Ee(`Failed to get blob for page ${e.src} from GM_xmlhttpRequest`,r.statusText),t(null))},onerror:r=>{Ee(`Failed to get blob for page ${e.src} from GM_xmlhttpRequest`,r),t(null)}})}):null}async function l3(e){const t=e.ref?.value;if(!t)return null;try{const r=document.createElement("canvas"),o=r.getContext("2d");if(o)return r.width=t.naturalWidth,r.height=t.naturalHeight,o.drawImage(t,0,0),await new Promise(a=>{r.toBlob(s=>{s&&Ee(`Got blob for page ${e.src} from canvas`),a(s)},"image/png",1)})}catch(r){Ee(`Failed to get blob for page ${e.src} from canvas`,r)}return null}async function c3(e){if(e.blob)return Ee(`Got blob for page ${e.src} from cache`),e.blob;const t=await s3(e)||await l3(e);return t||Ee(`Failed to get blob for page ${e.src}`),t}async function u3(){Ue("download","working");const e=new Pu.default,t=me("images")??{},r=me("manga"),o=r?.pages??0,a=Math.floor(Math.log10(o||1))+1,s=Object.entries(t).sort((f,p)=>Number(f[0])-Number(p[0])),c=[],h=f=>{Ue("dialog",{open:!0,title:Y("BUTTON_DOWNLOAD"),content:ce`
        <div style='display: flex; flex-direction: column; gap: 10px;'>
          <p>${Y("DOWNLOAD_PROGRESS").replace("##num##",f.toString()).replace("##total##",o.toString())}</p>
          <progress value='${f}' max='${o}' style='width: 100%; height: 20px;'></progress>
        </div>
      `,footer:ce``})};h(0);let u=0;for(const[f,p]of s)try{const b=await c3(p);if(b){const w=a3(b.type),m=`Page-${Number(f).toString().padStart(a,"0")}.${w}`;Ee(`${m} Added to Zip from Blob`),e.file(m,b,{createFolders:!0,compression:"DEFLATE"})}else c.push(p.src??f)}catch(b){Ee(`Error processing page ${f}`,b),c.push(p.src??f)}finally{u+=1,h(u)}Ue("dialog",{open:!0,title:Y("BUTTON_DOWNLOAD"),content:ce`
      <div style='display: flex; flex-direction: column; gap: 10px;'>
        <p>${Y("GENERATING_ZIP")}</p>
        <progress style='width: 100%; height: 20px;'></progress>
      </div>
    `,footer:ce``}),c.length>0&&(Ee("Some images failed to download:",c),e.file("failed_pages.txt",c.join(`
`))),Ee("Generating Zip"),e.generateAsync({type:"blob"}).then(f=>{Ee("Download Ready"),(0,o3.saveAs)(f,`${r?.title??document.title}.zip`,{autoBom:!1}),c.length>0?Ue("dialog",{open:!0,title:Y("DOWNLOAD_INCOMPLETE"),icon:"warning",content:ce`<p>${Y("DOWNLOAD_INCOMPLETE_MESSAGE")}</p>`,footer:ce`<mov-button @click=${()=>Ue("dialog",null)}>
            ${Y("CLOSE")}
          </mov-button>`}):Ue("dialog",null)}).catch(f=>{Ee("Error generating zip",f),Ue("dialog",{open:!0,title:Y("WARNING"),icon:"error",content:ce`<p>Error generating zip: ${f.message}</p>`,footer:ce`<mov-button @click=${()=>Ue("dialog",null)}>
          ${Y("CLOSE")}
        </mov-button>`})}).finally(()=>{Ue("download",void 0)})}function B0(){me("download")!=="working"&&(Ee("Downloading Chapter"),u3().catch(e=>Ee("Error downloading chapter",e)))}function d3(){Ki("hidePageControls",e=>!e)}function uo(e){const t=e.target,r=t.getAttribute("value")??t.getAttribute("href");e.button!==1&&!e.ctrlKey&&(r&&r!=="#"?window.location.href=(0,D0.sanitizeUrl)(r):t.id==="series"&&window.history.back())}function h3(e){K("viewMode").startsWith("Fluid")?me("chapter").value?.scroll(e?.offsetLeft??0,e?.offsetTop??0):window?.scroll(e?.offsetLeft??0,e?.offsetTop??0)}jt.listen((e,t,r)=>{r==="scrollToPage"&&e.scrollToPage!==void 0&&(e.scrollToPage<=0?window.scrollTo(0,0):h3(me("images")?.[e.scrollToPage]?.ref?.value),setTimeout(()=>Ue("scrollToPage",void 0),10))});function f3(e){const t=e.currentTarget.value;Ue("scrollToPage",parseInt(t,10))}function p3(e){Ue("scrollToPage",e)}var Il=typeof navigator<"u"?navigator.userAgent.toLowerCase().indexOf("firefox")>0:!1;function Cl(e,t,r,o){e.addEventListener?e.addEventListener(t,r,o):e.attachEvent&&e.attachEvent(`on${t}`,r)}function ho(e,t,r,o){e&&(e.removeEventListener?e.removeEventListener(t,r,o):e.detachEvent&&e.detachEvent(`on${t}`,r))}function F0(e,t){const r=t.slice(0,t.length-1),o=[];for(let a=0;a<r.length;a++)o.push(e[r[a].toLowerCase()]);return o}function H0(e){typeof e!="string"&&(e=""),e=e.replace(/\s/g,"");const t=e.split(",");let r=t.lastIndexOf("");for(;r>=0;)t[r-1]+=",",t.splice(r,1),r=t.lastIndexOf("");return t}function g3(e,t){const r=e.length>=t.length?e:t,o=e.length>=t.length?t:e;let a=!0;for(let s=0;s<r.length;s++)o.indexOf(r[s])===-1&&(a=!1);return a}function G0(e){let t=e.keyCode||e.which||e.charCode;return e.code&&/^Key[A-Z]$/.test(e.code)&&(t=e.code.charCodeAt(3)),t}var fo={backspace:8,"⌫":8,tab:9,clear:12,enter:13,"↩":13,return:13,esc:27,escape:27,space:32,left:37,up:38,right:39,down:40,arrowup:38,arrowdown:40,arrowleft:37,arrowright:39,del:46,delete:46,ins:45,insert:45,home:36,end:35,pageup:33,pagedown:34,capslock:20,num_0:96,num_1:97,num_2:98,num_3:99,num_4:100,num_5:101,num_6:102,num_7:103,num_8:104,num_9:105,num_multiply:106,num_add:107,num_enter:108,num_subtract:109,num_decimal:110,num_divide:111,"⇪":20,",":188,".":190,"/":191,"`":192,"-":Il?173:189,"=":Il?61:187,";":Il?59:186,"'":222,"{":219,"}":221,"[":219,"]":221,"\\":220},_n={"⇧":16,shift:16,"⌥":18,alt:18,option:18,"⌃":17,ctrl:17,control:17,"⌘":91,cmd:91,meta:91,command:91},po={16:"shiftKey",18:"altKey",17:"ctrlKey",91:"metaKey",shiftKey:16,ctrlKey:17,altKey:18,metaKey:91},xt={16:!1,18:!1,17:!1,91:!1},ht={};for(let e=1;e<20;e++)fo[`f${e}`]=111+e;var at=[],go=null,wi=null,U0="all",jn=new Map,_i=e=>fo[e.toLowerCase()]||_n[e.toLowerCase()]||e.toUpperCase().charCodeAt(0),m3=e=>Object.keys(fo).find(t=>fo[t]===e),v3=e=>Object.keys(_n).find(t=>_n[t]===e),W0=e=>{U0=e||"all"},mo=()=>U0||"all",b3=()=>at.slice(0),w3=()=>at.map(e=>m3(e)||v3(e)||String.fromCharCode(e)),_3=()=>{const e=[];return Object.keys(ht).forEach(t=>{ht[t].forEach(({key:r,scope:o,mods:a,shortcut:s})=>{e.push({scope:o,shortcut:s,mods:a,keys:r.split("+").map(c=>_i(c))})})}),e},V0=e=>{const t=e.target||e.srcElement,{tagName:r}=t;let o=!0;const a=r==="INPUT"&&!["checkbox","radio","range","button","file","reset","submit","color"].includes(t.type);return(t.isContentEditable||(a||r==="TEXTAREA"||r==="SELECT")&&!t.readOnly)&&(o=!1),o},y3=e=>(typeof e=="string"&&(e=_i(e)),at.indexOf(e)!==-1),k3=(e,t)=>{let r,o;e||(e=mo());for(const a in ht)if(Object.prototype.hasOwnProperty.call(ht,a))for(r=ht[a],o=0;o<r.length;)r[o].scope===e?r.splice(o,1).forEach(({element:s})=>Ol(s)):o++;mo()===e&&W0(t||"all")};function E3(e){let t=G0(e);e.key&&e.key.toLowerCase()==="capslock"&&(t=_i(e.key));const r=at.indexOf(t);if(r>=0&&at.splice(r,1),e.key&&e.key.toLowerCase()==="meta"&&at.splice(0,at.length),(t===93||t===224)&&(t=91),t in xt){xt[t]=!1;for(const o in _n)_n[o]===t&&(yn[o]=!1)}}var Z0=(e,...t)=>{if(typeof e>"u")Object.keys(ht).forEach(r=>{Array.isArray(ht[r])&&ht[r].forEach(o=>Ea(o)),delete ht[r]}),Ol(null);else if(Array.isArray(e))e.forEach(r=>{r.key&&Ea(r)});else if(typeof e=="object")e.key&&Ea(e);else if(typeof e=="string"){let[r,o]=t;typeof r=="function"&&(o=r,r=""),Ea({key:e,scope:r,method:o,splitKey:"+"})}},Ea=({key:e,scope:t,method:r,splitKey:o="+"})=>{H0(e).forEach(a=>{const s=a.split(o),c=s.length,h=s[c-1],u=h==="*"?"*":_i(h);if(!ht[u])return;t||(t=mo());const f=c>1?F0(_n,s):[],p=[];ht[u]=ht[u].filter(b=>{const w=(r?b.method===r:!0)&&b.scope===t&&g3(b.mods,f);return w&&p.push(b.element),!w}),p.forEach(b=>Ol(b))})};function q0(e,t,r,o){if(t.element!==o)return;let a;if(t.scope===r||t.scope==="all"){a=t.mods.length>0;for(const s in xt)Object.prototype.hasOwnProperty.call(xt,s)&&(!xt[s]&&t.mods.indexOf(+s)>-1||xt[s]&&t.mods.indexOf(+s)===-1)&&(a=!1);(t.mods.length===0&&!xt[16]&&!xt[18]&&!xt[17]&&!xt[91]||a||t.shortcut==="*")&&(t.keys=[],t.keys=t.keys.concat(at),t.method(e,t)===!1&&(e.preventDefault?e.preventDefault():e.returnValue=!1,e.stopPropagation&&e.stopPropagation(),e.cancelBubble&&(e.cancelBubble=!0)))}}function j0(e,t){const r=ht["*"];let o=G0(e);if(e.key&&e.key.toLowerCase()==="capslock"||!(yn.filter||V0).call(this,e))return;if((o===93||o===224)&&(o=91),at.indexOf(o)===-1&&o!==229&&at.push(o),["metaKey","ctrlKey","altKey","shiftKey"].forEach(h=>{const u=po[h];e[h]&&at.indexOf(u)===-1?at.push(u):!e[h]&&at.indexOf(u)>-1?at.splice(at.indexOf(u),1):h==="metaKey"&&e[h]&&(at=at.filter(f=>f in po||f===o))}),o in xt){xt[o]=!0;for(const h in _n)Object.prototype.hasOwnProperty.call(_n,h)&&(yn[h]=e[po[_n[h]]]);if(!r)return}for(const h in xt)Object.prototype.hasOwnProperty.call(xt,h)&&(xt[h]=e[po[h]]);e.getModifierState&&!(e.altKey&&!e.ctrlKey)&&e.getModifierState("AltGraph")&&(at.indexOf(17)===-1&&at.push(17),at.indexOf(18)===-1&&at.push(18),xt[17]=!0,xt[18]=!0);const a=mo();if(r)for(let h=0;h<r.length;h++)r[h].scope===a&&(e.type==="keydown"&&r[h].keydown||e.type==="keyup"&&r[h].keyup)&&q0(e,r[h],a,t);if(!(o in ht))return;const s=ht[o],c=s.length;for(let h=0;h<c;h++)if((e.type==="keydown"&&s[h].keydown||e.type==="keyup"&&s[h].keyup)&&s[h].key){const u=s[h],{splitKey:f}=u,p=u.key.split(f),b=[];for(let w=0;w<p.length;w++)b.push(_i(p[w]));b.sort().join("")===at.sort().join("")&&q0(e,u,a,t)}}var yn=function e(t,r,o){at=[];const a=H0(t);let s=[],c="all",h=document,u=0,f=!1,p=!0,b="+",w=!1,m=!1;if(o===void 0&&typeof r=="function"&&(o=r),Object.prototype.toString.call(r)==="[object Object]"){const v=r;v.scope&&(c=v.scope),v.element&&(h=v.element),v.keyup&&(f=v.keyup),v.keydown!==void 0&&(p=v.keydown),v.capture!==void 0&&(w=v.capture),typeof v.splitKey=="string"&&(b=v.splitKey),v.single===!0&&(m=!0)}for(typeof r=="string"&&(c=r),m&&Z0(t,c);u<a.length;u++){const v=a[u].split(b);s=[],v.length>1&&(s=F0(_n,v));let E=v[v.length-1];E=E==="*"?"*":_i(E),E in ht||(ht[E]=[]),ht[E].push({keyup:f,keydown:p,scope:c,mods:s,shortcut:a[u],method:o,key:a[u],splitKey:b,element:h})}if(typeof h<"u"&&typeof window<"u"){if(!jn.has(h)){const v=(y=window.event)=>j0(y,h),E=(y=window.event)=>{j0(y,h),E3(y)};jn.set(h,{keydownListener:v,keyupListenr:E,capture:w}),Cl(h,"keydown",v,w),Cl(h,"keyup",E,w)}if(!go){const v=()=>{at=[]};go={listener:v,capture:w},Cl(window,"focus",v,w)}if(!wi&&typeof document<"u"){const v=()=>{at=[];for(const S in xt)xt[S]=!1;for(const S in _n)e[S]=!1},E=v,y=v;document.addEventListener("fullscreenchange",E),document.addEventListener("webkitfullscreenchange",y),wi={fullscreen:E,webkit:y}}}};function A3(e,t="all"){Object.keys(ht).forEach(r=>{ht[r].filter(o=>o.scope===t&&o.shortcut===e).forEach(o=>{o&&o.method&&o.method({},o)})})}function Ol(e){const t=Object.values(ht).flat();if(t.findIndex(({element:r})=>r===e)<0&&e){const{keydownListener:r,keyupListenr:o,capture:a}=jn.get(e)||{};r&&o&&(ho(e,"keyup",o,a),ho(e,"keydown",r,a),jn.delete(e))}if(t.length<=0||jn.size<=0){if(Array.from(jn.keys()).forEach(r=>{const{keydownListener:o,keyupListenr:a,capture:s}=jn.get(r)||{};o&&a&&(ho(r,"keyup",a,s),ho(r,"keydown",o,s),jn.delete(r))}),jn.clear(),Object.keys(ht).forEach(r=>delete ht[r]),go){const{listener:r,capture:o}=go;ho(window,"focus",r,o),go=null}wi&&typeof document<"u"&&(document.removeEventListener("fullscreenchange",wi.fullscreen),document.removeEventListener("webkitfullscreenchange",wi.webkit),wi=null)}}var Tl={getPressedKeyString:w3,setScope:W0,getScope:mo,deleteScope:k3,getPressedKeyCodes:b3,getAllKeyCodes:_3,isPressed:y3,filter:V0,trigger:A3,unbind:Z0,keyMap:fo,modifier:_n,modifierMap:po};for(const e in Tl){const t=e;Object.prototype.hasOwnProperty.call(Tl,t)&&(yn[t]=Tl[t])}if(typeof window<"u"){const e=window.hotkeys;yn.noConflict=t=>(t&&window.hotkeys===yn&&(window.hotkeys=e),yn),window.hotkeys=yn}typeof module<"u"&&module.exports&&(module.exports=yn,module.exports.default=yn);function K0(){const e=me("chapter").value;if(K("viewMode").startsWith("Fluid")){const t=K("viewMode")==="FluidRTL"?-1:1;e?.scrollBy({top:0,left:K("scrollHeight")*t,behavior:"smooth"}),e&&e.scrollLeft+e.clientWidth>=e.scrollWidth-2&&(Ue("autoScroll",!1),Ee("Finished auto scroll"))}else window.scrollBy({top:K("scrollHeight"),left:0,behavior:"smooth"}),window.scrollY+window.innerHeight>=document.documentElement.scrollHeight&&(Ue("autoScroll",!1),Ee("Finished auto scroll"));me("autoScroll")&&requestAnimationFrame(K0)}function Aa(){me("autoScroll")?(Ue("autoScroll",!1),Ee("Stopped auto scroll")):(Ue("autoScroll",!0),requestAnimationFrame(K0),Ee("Start auto scroll"))}var Sa=!1,S3=Qe.default.debounce(()=>{Aa(),Sa=!1},500);function M3(){!Sa&&me("autoScroll")&&(Aa(),Sa=!0),Sa&&!me("autoScroll")&&S3()}function x3(){window.addEventListener("wheel",Qe.default.throttle(M3,500))}function I3(e,t){const r=document.createElement("style");return r.id=e,r.appendChild(document.createTextNode(t)),r}function C3(e,t){document.querySelector(`#${e}`)||(document.head??document.querySelector("head")).appendChild(I3(e,t))}function O3(e){document.querySelectorAll(`style[id="${e}"]`).forEach(t=>{t.remove()})}function T3(e,t){O3(e),C3(e,t)}function L3(e,t){return oi`
    <style id="${e}">
      ${t}
    </style>
  `}var Gr=class extends rt{constructor(...t){super(...t),this.open=!1,this.mode="dialog",this.fullscreen=!1}static{this.styles=$t`
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
  `}close(){this.open=!1}handleCancel(t){t.preventDefault(),this.close()}handleClick(t){this.mode!=="inline"&&t.target===this.dialog&&this.close()}updated(t){this.mode!=="inline"&&t.has("open")&&(this.open?(this.dialog.classList.remove("closing"),this.dialog.show(),this.dispatchEvent(new CustomEvent("open",{bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent("wa-show",{bubbles:!0,composed:!0})),setTimeout(()=>{this.dispatchEvent(new CustomEvent("wa-after-show",{bubbles:!0,composed:!0}))},150)):t.get("open")===!0&&(this.dispatchEvent(new CustomEvent("close",{bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent("wa-hide",{bubbles:!0,composed:!0})),this.dialog.classList.add("closing"),setTimeout(()=>{this.dialog.classList.remove("closing"),this.dialog.open&&this.dialog.close(),this.dispatchEvent(new CustomEvent("wa-after-hide",{bubbles:!0,composed:!0}))},300)))}render(){return ce`
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
              ${xl}
            </button>
          </div>
        </div>
        <div class="content-slot">
          ${this.icon?ce`
                <div class="icon-container">
                  <mov-icon
                    .name=${R3(this.icon)}
                    size="4rem"
                  ></mov-icon>
                </div>
              `:""}
          <slot></slot>
        </div>
        <slot name="footer"></slot>
      </dialog>
    `}};X([fe({type:Boolean,reflect:!0})],Gr.prototype,"open",void 0),X([fe({type:String,reflect:!0})],Gr.prototype,"mode",void 0),X([fe({type:Boolean,reflect:!0})],Gr.prototype,"fullscreen",void 0),X([fe({type:String,reflect:!0})],Gr.prototype,"icon",void 0),X([Fr("dialog")],Gr.prototype,"dialog",void 0),Gr=X([gt("mov-dialog")],Gr);function Ll(e){const t=()=>Ue("dialog",null);e.timer&&setTimeout(t,e.timer),Ue("dialog",{open:!0,icon:e.icon,title:e.title,content:ce`<div style="padding: 1rem;">${T0(e.html)}</div>`,footer:ce`
      <div
        slot="footer"
        style="display: flex; justify-content: flex-end; padding: 0.5rem 1rem 1rem;"
      >
        <mov-button @click=${t}>OK</mov-button>
      </div>
    `})}function R3(e){switch(e){case"info":return"info-circle";case"warning":return"alert-circle";case"success":return"circle-check";case"error":return"circle-x";case"question":return"help";default:return""}}function P3(e){const t=e.currentTarget.value;Ru(t==="true")}function $3(e){const t=e.currentTarget.value;wt("locale",t)}function z3(e){const t=e.currentTarget.value;wt("loadMode",t)}function N3(e){const t=e.detail.checked;wt("fitWidthIfOversize",t)}function D3(e){const t=e.currentTarget.value;wt("navbar",t)}function B3(e){const t=e.currentTarget.value;wt("pagination",t)}function F3(e){const t=e.detail.checked;wt("downloadZip",t),t&&Ll({title:Y("ATTENTION"),html:Y("AUTO_DOWNLOAD"),timer:1e4,icon:"info"})}function H3(e){const t=e.detail.checked;wt("lazyLoadImages",t),t&&Ll({title:Y("WARNING"),html:Y("LAZY_LOAD"),icon:"warning"})}function G3(e){const t=e.currentTarget.value;wt("lazyStart",parseInt(t,10))}function U3(e){const t=parseInt(e.currentTarget.value,10);wt("throttlePageLoad",t),t<100&&Ll({title:Y("SPEED_WARNING"),html:Y("SPEED_WARNING_MESSAGE"),icon:"warning"})}function W3(e){const t=e.currentTarget.value;wt("zoomStep",parseInt(t,10))}function V3(e){const t=e.currentTarget.value;T3("MinZoom",`#MangaOnlineViewer .PageContent .PageImg {min-width: ${t}vw;}`),wt("minZoom",parseInt(t,10))}function Z3(e){const t=e.detail.checked;wt("hidePageControls",t)}function q3(e){const t=e.currentTarget.value;wt("header",t)}function j3(e){const{value:t}=e.currentTarget;wt("scrollHeight",parseInt(t,10))}function Y0(e){Ki("scrollHeight",t=>{const r=t+e*25;if(r<=0)return 0;const o=Math.ceil(window.innerHeight/200)*100;return r>=o?o:r})}function K3(){const e=K("navbar");return e==="left"||e==="right"?window.innerWidth-34:window.innerWidth}function Y3(){return K("navbar")==="bottom"?window.innerHeight-34:window.innerHeight}function X0(e,t=K("zoomMode"),r=K("zoomValue")){const o=K3(),a=Y3();if(t==="width")e.width=o,e.height=void 0;else if(t==="height")e.width=void 0,e.height=a;else if(t==="percent"){const s=e.naturalWidth??e.ref?.value?.naturalWidth;e.width=s?s*(r/100):void 0,e.height=void 0}return e}function Ur(e=K("zoomMode"),t=K("zoomValue")){Ee("Zoom",e,t),ri("zoomMode",e),ri("zoomValue",t),e==="height"?Ue("scrollToPage",me("currentPage")):zr("header");const r=me("images"),o=me("manga"),a={};for(let s=o?.begin??1;s<=(o?.pages??1);s++)a[s]=X0({...r?.[s]},e,t);Ue("images",a)}function yi(e,t=K("zoomValue")){return()=>{Ur(e,t)}}function Ma(e=1){return()=>{const t=K("zoomValue")+e*K("zoomStep");t>0&&t<500&&Ur("percent",t)}}function X3(e){const t=e.currentTarget.value;wt("zoomMode",t)}function J3(e){const t=parseInt(e.currentTarget.value,10);wt("zoomValue",t),Ur("percent",t)}function Q3(e){Ur("percent",parseInt(e.currentTarget.value,10))}function Kn(e){return()=>{ri("viewMode",e),e.startsWith("Fluid")?(ri("zoomMode","height"),ri("header","click")):(zr("zoomMode"),zr("zoomValue"),zr("header")),Ur()}}function e6(e){const t=e.currentTarget.value;wt("viewMode",t),Kn(t)()}function t6(e){const t=K("viewMode")==="FluidRTL"?-1:1;me("chapter").value?.scrollBy({left:.8*window.innerWidth*e*t,behavior:"smooth"})}function n6(e){const t=me("currentPage")+e;t<0?Ue("scrollToPage",0):t>(me("manga")?.pages??1)||Ue("scrollToPage",t)}function r6(e){window.scrollBy({top:.8*window.innerHeight*e,behavior:"smooth"})}function J0(e){const t=K("viewMode"),r=K("zoomMode");Ee("Scrolling view",t,"zoom",r,"sign",e),t.startsWith("Fluid")?t6(e):r==="height"?n6(e):r6(e)}function vo(e){const t=me("manga")?.[e];t&&t!=="#"?location.href=(0,D0.sanitizeUrl)(t):e!=="next"&&history.back()}var i6={SCROLL_UP(){J0(-1)},SCROLL_DOWN(){J0(1)},NEXT_CHAPTER(){vo("next")},PREVIOUS_CHAPTER(){vo("prev")},RETURN_CHAPTER_LIST(){vo("series")},ENLARGE(){Ma(1)()},REDUCE(){Ma(-1)()},RESTORE(){yi("percent",100)()},FIT_WIDTH(){yi("width")()},FIT_HEIGHT(){yi("height")()},SETTINGS(){Lu("panel",e=>e==="none"?"settings":"none")},VIEW_MODE_WEBCOMIC(){Kn("WebComic")()},VIEW_MODE_VERTICAL(){Kn("Vertical")()},VIEW_MODE_LEFT(){Kn("FluidRTL")()},VIEW_MODE_RIGHT(){Kn("FluidLTR")()},SCROLL_START(){Aa()},INCREASE_SPEED(){Y0(1)},DECREASE_SPEED(){Y0(-1)}};function Q0(){document.onkeydown=null,document.onkeyup=null,window.onkeydown=null,window.onkeyup=null,window.onload=null,document.body.onload=null,yn.unbind(),Object.keys(K("keybinds")).forEach(e=>{yn(K("keybinds")[e]?.join(",")??"",Qe.default.throttle(t=>{t.preventDefault(),t.stopImmediatePropagation(),t.stopPropagation(),i6[e]()},100))})}var vr=class extends rt{constructor(...t){super(...t),this.mode="disabled",this.currentPage=1,this.totalPages=1,this.startPage=1}static{this.styles=$t`
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
  `}get isFirstPage(){return this.currentPage<=this.startPage}get isLastPage(){return this.currentPage>=this.totalPages-(1-this.startPage)}renderSlider(){return ce`
      <div class="slider-pagination">
        <button
          class="pagination-button"
          @click=${uo}
          value="${this.prev}"
          ?disabled=${vn(this.prev)||this.prev==="#"}
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
            @input="${f3}"
          />
          <div class="slider-tooltip">${this.currentPage} / ${this.totalPages}</div>
        </div>

        <button class="pagination-button" @click=${this.goToNextPage} ?disabled=${this.isLastPage}>
          <mov-icon name="chevron-right"></mov-icon>
          <div class="tooltip">Next Page</div>
        </button>

        <button
          class="pagination-button"
          @click=${uo}
          value="${this.next}"
          ?disabled=${vn(this.next)||this.next==="#"}
        >
          <mov-icon name="arrow-big-right"></mov-icon>
          <div class="tooltip">Next Chapter</div>
        </button>
      </div>
    `}renderSideArrows(){return ce`
      <div class="arrows-pagination">
        <button
          class="side-arrow left"
          @click=${this.handleLeftArrowClick}
          ?disabled=${this.isFirstPage&&(vn(this.prev)||this.prev==="#")}
        >
          <mov-icon name="chevron-left"></mov-icon>
        </button>
        <button
          class="side-arrow right"
          @click=${this.handleRightArrowClick}
          ?disabled=${this.isLastPage&&(vn(this.next)||this.next==="#")}
        >
          <mov-icon name="chevron-right"></mov-icon>
        </button>
      </div>
    `}render(){if(this.mode==="disabled")return $e;const t=this.mode==="slider"||this.mode==="both",r=this.mode==="side-arrows"||this.mode==="both";return ce`
      ${t?this.renderSlider():$e} ${r?this.renderSideArrows():$e}
    `}handleLeftArrowClick(){this.isFirstPage?vo("prev"):this.goToPreviousPage()}handleRightArrowClick(){this.isLastPage?vo("next"):this.goToNextPage()}goToPreviousPage(){this.goToPage(this.currentPage-1)}goToNextPage(){this.goToPage(this.currentPage+1)}goToPage(t){Ue("scrollToPage",t)}};X([fe({type:String})],vr.prototype,"mode",void 0),X([fe({type:Number})],vr.prototype,"currentPage",void 0),X([fe({type:Number})],vr.prototype,"totalPages",void 0),X([fe({type:Number})],vr.prototype,"startPage",void 0),X([fe({type:String})],vr.prototype,"next",void 0),X([fe({type:String})],vr.prototype,"prev",void 0),vr=X([gt("manga-pagination")],vr);var bo=class extends rt{constructor(...t){super(...t),this.open=!1,this.placement="end"}static{this.styles=$t`
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
  `}close(){this.open=!1}handleCancel(t){t.preventDefault(),this.close()}handleClick(t){t.target===this.dialog&&this.close()}updated(t){t.has("open")&&(this.open?(this.dialog.classList.remove("closing"),this.dialog.show(),this.dispatchEvent(new CustomEvent("open",{bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent("wa-show",{bubbles:!0,composed:!0})),setTimeout(()=>{this.dispatchEvent(new CustomEvent("wa-after-show",{bubbles:!0,composed:!0}))},250)):t.get("open")===!0&&(this.dispatchEvent(new CustomEvent("close",{bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent("wa-hide",{bubbles:!0,composed:!0})),this.dialog.classList.add("closing"),setTimeout(()=>{this.dialog.classList.remove("closing"),this.dialog.open&&this.dialog.close(),this.dispatchEvent(new CustomEvent("wa-after-hide",{bubbles:!0,composed:!0}))},300)))}render(){return ce`
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
              ${xl}
            </button>
          </div>
        </div>
        <slot class="content-slot"></slot>
      </dialog>
    `}};X([fe({type:Boolean,reflect:!0})],bo.prototype,"open",void 0),X([fe({type:String,reflect:!0})],bo.prototype,"placement",void 0),X([Fr("dialog")],bo.prototype,"dialog",void 0),bo=X([gt("mov-drawer")],bo);var xa=class extends rt{static{this.styles=$t`
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
  `}constructor(){super(),this.open=!1,this.checkable=!1,this.boundClickHandler=this.handleClickOutside.bind(this)}connectedCallback(){super.connectedCallback(),document.addEventListener("click",this.boundClickHandler)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("click",this.boundClickHandler)}handleClickOutside(t){this.open&&!t.composedPath().includes(this)&&(this.open=!1)}toggle(){this.open=!this.open}render(){return ce`
      <div
        @click=${this.toggle}
        class="trigger-wrapper"
      >
        <slot name="trigger"></slot>
      </div>
      <div class="dropdown-content">
        <slot></slot>
      </div>
    `}};X([fe({type:Boolean,reflect:!0})],xa.prototype,"open",void 0),X([fe({type:Boolean,reflect:!0})],xa.prototype,"checkable",void 0),xa=X([gt("mov-dropdown")],xa);var Rl=class extends rt{constructor(...t){super(...t),this.selected=!1}static{this.styles=$t`
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
  `}render(){return ce`
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
    `}};X([fe({type:Boolean,reflect:!0})],Rl.prototype,"selected",void 0),Rl=X([gt("mov-dropdown-item")],Rl);var eh="kbd,.key{white-space:nowrap;text-align:center;background-color:#505050;background-color:gradient(linear, left top, left bottom, from(#3c3c3c), to(#505050));color:#fafafa;text-shadow:-1px -1px #464646;cursor:default;user-select:none;border:none;border-radius:.3em;min-width:1em;padding:.3em .4em .2em .3em;font-family:Lucida Grande,Lucida,Arial,sans-serif;font-size:.85em;font-style:normal;line-height:1;text-decoration:none;display:inline-block;box-shadow:inset 0 0 1px #969696,inset 0 -.05em .4em #505050,0 .1em #1e1e1e,0 .1em .1em #0000004d}kbd[title],.key[title]{cursor:help}kbd.dark,.dark-keys kbd,.key.dark,.dark-keys .key{white-space:nowrap;text-align:center;background-color:#505050;background-color:gradient(linear, left top, left bottom, from(#3c3c3c), to(#505050));color:#fafafa;text-shadow:-1px -1px #464646;border:none;border-radius:.3em;min-width:1em;padding:.3em .4em .2em .3em;font-family:Lucida Grande,Lucida,Arial,sans-serif;font-style:normal;text-decoration:none;display:inline-block;box-shadow:inset 0 0 1px #969696,inset 0 -.05em .4em #505050,0 .1em #1e1e1e,0 .1em .1em #0000004d}kbd.light,.light-keys kbd,.key.light,.light-keys .key{white-space:nowrap;text-align:center;background-color:#fafafa;background-color:gradient(linear, left top, left bottom, from(#d2d2d2), to(#fff));color:#323232;text-shadow:0 0 2px #fff;border:none;border-radius:.3em;min-width:1em;padding:.3em .4em .2em .3em;font-family:Lucida Grande,Lucida,Arial,sans-serif;font-style:normal;text-decoration:none;display:inline-block;box-shadow:inset 0 0 1px #fff,inset 0 0 .4em #c8c8c8,0 .1em #828282,0 .11em #0006,0 .1em .11em #000000e6}kbd.so,.so-keys kbd,.key.so,.so-keys .key{white-space:nowrap;text-align:center;color:#242729;text-shadow:0 1px #fff;background-color:#e1e3e5;border:1px solid #adb3b9;border-radius:.272727em;min-width:1em;margin:0 .1em;padding:.1em .6em;font-family:Arial,Helvetica Neue,Helvetica,sans-serif;font-style:normal;line-height:1.4;text-decoration:none;display:inline-block;box-shadow:0 1px #0c0d0e33,inset 0 0 0 2px #fff}kbd.github,.github-keys kbd,.key.github,.github-keys .key{white-space:nowrap;text-align:center;color:#444d56;vertical-align:middle;box-sizing:border-box;min-width:1em;text-shadow:none;background-color:#fafbfc;border:1px solid #c6cbd1;border-bottom-color:#959da5;border-radius:.272727em;padding:.272727em .454545em;font-family:SFMono-Regular,Consolas,Liberation Mono,Menlo,Courier,monospace;font-size:68.75%;font-style:normal;line-height:.909091;text-decoration:none;display:inline-block;box-shadow:inset 0 -1px #959da5}",o6=gn((e=>{Object.defineProperty(e,"__esModule",{value:!0}),e.StoreController=void 0;var t=class{constructor(r,o){this.host=r,this.atom=o,r.addController(this)}hostConnected(){this.unsubscribe=this.atom.subscribe(()=>{this.host.requestUpdate()})}hostDisconnected(){var r;(r=this.unsubscribe)===null||r===void 0||r.call(this)}get value(){return this.atom.get()}};e.StoreController=t})),Pl=gn((e=>{Object.defineProperty(e,"__esModule",{value:!0}),e.MultiStoreController=void 0;var t=class{constructor(r,o){this.host=r,this.atoms=o,r.addController(this)}hostConnected(){this.unsubscribes=this.atoms.map(r=>r.subscribe(()=>this.host.requestUpdate()))}hostDisconnected(){var r;(r=this.unsubscribes)===null||r===void 0||r.forEach(o=>o())}get values(){return this.atoms.map(r=>r.get())}};e.MultiStoreController=t})),a6=gn((e=>{Object.defineProperty(e,"__esModule",{value:!0}),e.useStores=void 0;var t=Pl();function r(...o){return a=>class extends a{constructor(...s){super(...s),new t.MultiStoreController(this,o)}}}e.useStores=r})),s6=gn((e=>{Object.defineProperty(e,"__esModule",{value:!0}),e.withStores=void 0;var t=Pl(),r=(o,a)=>class extends o{constructor(...c){super(...c),new t.MultiStoreController(this,a)}};e.withStores=r})),l6=gn((e=>{Object.defineProperty(e,"__esModule",{value:!0}),e.withStores=e.useStores=e.MultiStoreController=e.StoreController=void 0;var t=o6();Object.defineProperty(e,"StoreController",{enumerable:!0,get:function(){return t.StoreController}});var r=Pl();Object.defineProperty(e,"MultiStoreController",{enumerable:!0,get:function(){return r.MultiStoreController}});var o=a6();Object.defineProperty(e,"useStores",{enumerable:!0,get:function(){return o.useStores}});var a=s6();Object.defineProperty(e,"withStores",{enumerable:!0,get:function(){return a.withStores}})})),ki=l6(),Ia=49,c6=100,u6=class Jf{constructor(t){this.prevOffset=0,this.headroom="top",this.headerVisible=!0,this.handleScroll=Qe.default.throttle(()=>{if(this.isAnyDropdownOpen()){this.prevOffset=window.scrollY;return}const o=K("header"),{scrollY:a}=window;let s="none";K("zoomMode")!=="height"&&a+window.innerHeight+c6>document.body.scrollHeight?s="end":a>this.prevOffset&&a>Ia?s="hide":o==="scroll"&&a<this.prevOffset&&a>Ia?s="show":o!=="click"&&a<=Ia&&(s="top");let c=!1;if(this.headroom!==s&&(this.headroom=s,c=!0),o==="scroll"){const h=s!=="hide";this.headerVisible!==h&&(this.headerVisible=h,c=!0)}c&&this.host.requestUpdate(),this.prevOffset=a},300),this.handleMouseMove=Qe.default.throttle(o=>{if(this.isAnyDropdownOpen()){this.headerVisible||(this.headerVisible=!0,this.host.requestUpdate());return}if(["hover","scroll"].includes(K("header"))){const a=Jf.isMouseInsideRegion(o,window.innerWidth,Ia*1.5);this.headerVisible!==a&&(this.headerVisible=a,this.host.requestUpdate())}},300),this.toggleHeaderVisibility=()=>{K("header")==="click"&&(this.headerVisible=!this.headerVisible,this.host.requestUpdate())},this.host=t,t.addController(this);const r=K("header");K("zoomMode")==="height"&&["click","hover"].includes(r)&&(this.headerVisible=!1)}hostConnected(){window.addEventListener("scroll",this.handleScroll),window.addEventListener("mousemove",this.handleMouseMove)}hostDisconnected(){window.removeEventListener("scroll",this.handleScroll),window.removeEventListener("mousemove",this.handleMouseMove)}isAnyDropdownOpen(){if(!this.host.shadowRoot)return!1;const t=this.host.shadowRoot.querySelectorAll("mov-dropdown");for(const r of t)if(r.open)return!0;return!1}static isMouseInsideRegion(t,r,o){return t.clientX>=0&&t.clientX<=r&&t.clientY>=0&&t.clientY<=o}},d6=class{constructor(e){this.canvasContext=null,this.host=e,e.addController(this),this.canvasContext=document.createElement("canvas").getContext("2d"),this.resizeObserver=new ResizeObserver(()=>this.update())}hostConnected(){}hostDisconnected(){this.resizeObserver.disconnect()}observe(e,t){!e||!t||(this.element=e,this.text=t,this.resizeObserver.disconnect(),this.resizeObserver.observe(this.element),this.update())}update(){if(!this.element||!this.text||!this.canvasContext){this.value=this.text,this.host.requestUpdate();return}const e=window.getComputedStyle(this.element);this.canvasContext.font=`${e.fontWeight} ${e.fontSize} ${e.fontFamily}`;const t=this.text,r=this.element.clientWidth;if(this.canvasContext.measureText(t).width<=r){this.value=t,this.host.requestUpdate();return}const o="...",a=r-this.canvasContext.measureText(o).width;let s="",c="";for(let h=1;h<t.length;h++){const u=t.substring(0,h),f=t.substring(t.length-h);if(this.canvasContext.measureText(u).width+this.canvasContext.measureText(f).width>a)break;s=u,c=f}this.value=`${s}${o}${c}`,this.host.requestUpdate()}};function $l(e=window.location.href){vn(ii(e))||(Ee(`Bookmark Removed ${e}`),Ki("bookmarks",t=>[...t.filter(r=>r.url!==e)]))}function h6(e){const t=e.currentTarget.value;Ee(`Bookmark Removed ${t}`),Hi.error({title:Y("BOOKMARK_REMOVED"),duration:1e4}),$l(t)}function f6(){Ue("panel","bookmarks")}function th(){const e=me("currentPage"),t={name:me("manga")?.title??document.documentElement.title??window.location.hostname,url:window.location.href,page:e,date:new Date().toISOString().slice(0,10)};ii(t.url)?(Ki("bookmarks",r=>[...r.filter(o=>o.url!==t.url)]),Hi.error({title:Y("BOOKMARK_REMOVED"),duration:1e4})):(Ki("bookmarks",r=>[...r,t]),Hi.success({title:Y("BOOKMARK_SAVED"),description:Y("BOOKMARK_MESSAGE").replace("##num##",e.toString()),duration:1e4}))}function zl(){Ue("panel","none")}function p6(){Ue("panel","settings")}function g6(){Ue("panel","keybindings")}function m6(e){const t={};Object.keys(e).forEach(r=>{const o=e[r].value;if(o){const a=o.value.split(",").map(s=>s.trim()).filter(s=>s!=="");t[r]=a.length>0?a:void 0}}),wt("keybinds",t),Ue("panel","keybindings"),Q0()}function v6(){Ue("panel","keybindingsEditor")}var b6="#Header{background-color:var(--theme-background-color);z-index:900;flex-flow:row;justify-content:space-around;align-items:center;transition:transform .3s ease-in;display:flex;position:sticky;top:0;left:0;right:0;box-shadow:0 0 25px #00000080}#Header.click{padding-left:40px}@keyframes headroom{0%{transform:translateY(-100%)}to{transform:translateY(0%)}}#Header:not(.visible,.headroom-top,.fixed,.simple){animation:.3s ease-in reverse headroom;position:sticky;top:0;transform:translateY(-100%)}#Header.scroll.headroom-hide:not(.visible){animation:none;position:sticky;top:0;transform:translateY(-100%)}#Header.scroll.headroom-show,#Header.headroom-end,#Header.visible{animation:.3s ease-in headroom;position:sticky;top:0;transform:translateY(0%)}#Header.headroom-top{animation:none}#Header.fixed{animation:none;position:sticky;top:0;transform:translateY(0%)}#Header.simple{animation:none;position:static;top:0;transform:translateY(0%)}#menu{z-index:1;color:var(--theme-body-text-color);width:40px;height:40px;position:fixed}#menu:not(.click),#menu.hide{display:none}#menu.click{z-index:901;top:0;left:0}#MangaTitle{word-wrap:anywhere;white-space:nowrap;text-overflow:ellipsis;min-width:200px;max-width:40vw;margin:0;padding:2px;font-size:1.2rem;font-weight:400;overflow:hidden}#GlobalFunctions{z-index:100;flex-wrap:wrap;gap:3px;padding:3px 3px 3px 0;display:flex}#ZoomControl{flex-direction:column;align-items:center;gap:3px;padding:10px 5px;display:flex}",nh="#Header.mobile,#Header.tablet{flex-flow:wrap;display:flex}.mobile #ViewerTitle,.tablet #ViewerTitle{order:4;min-height:auto}.mobile #GlobalFunctions,.tablet #GlobalFunctions{order:2;width:auto;padding:5px}.mobile #GlobalFunctions span{flex-direction:column}.mobile #ZoomControl,.tablet #ZoomControl{order:3}.mobile #Toolbar,.tabler #Toolbar{order:1}#Header.mobile{flex-flow:wrap;justify-content:center;align-items:center}#Header.mobile.click+#Chapter:not(.webcomic,.vertical){position:sticky}.tablet #MangaTitle,.mobile #MangaTitle{max-width:90vw}.mobile #ViewerTitle{order:3;height:auto;margin-top:0;padding:0}.mobile #GlobalFunctions{order:2;gap:0;width:auto;padding:0}.mobile mov-button::part(base){border-radius:0}.mobile #FileDropdown mov-button:first-of-type::part(base){border-radius:5px 0 0 5px}.mobile #GlobalFunctions mov-button:last-of-type::part(base){border-radius:0 5px 5px 0}.mobile .PageFunctions{padding:0}.mobile .PageFunctions .PageButton.Bookmark{opacity:1}.mobile #GlobalFunctions #ZoomSlider,.tablet #GlobalFunctions #ZoomSlider,.mobile .PageFunctions .PageButton:not(.Bookmark),.tablet #Counters,.mobile #ZoomControl,.mobile #ZoomDropdown,.mobile #ViewDropdown,.mobile #FileDropdown :where(:nth-child(3),:nth-child(4)){display:none}",Ca=class extends rt{static{this.styles=[Kt(b6),Kt(nh),Kt(eh),$t``]}constructor(){super(),this.headroomController=new u6(this),this.titleController=new d6(this)}updated(t){super.updated(t),t.has("manga")&&this.manga&&requestAnimationFrame(()=>{this.manga&&this.titleController.observe(this.mangaTitleElement,this.manga?.title??"Manga Online Viewer")})}render(){if(!this.manga)return ce``;const{headroom:t,headerVisible:r}=this.headroomController,o=K("keybinds"),a=s=>{if(me("device")!=="desktop")return $e;const c=o[s];return!c||c.length===0?$e:c.map(h=>ce`<kbd slot="details">${h}</kbd>`)};return ce`
      <mov-button
        id="menu"
        class="${Ot({[K("header")]:!0,hide:["top","end"].includes(t)})}"
        @click=${this.headroomController.toggleHeaderVisibility}
      >
        <mov-icon name="IconMenu2"></mov-icon>
      </mov-button>
      <header
        id="Header"
        class="${Ot({[K("header")]:!0,[`headroom-${t}`]:!0,visible:r&&["hide","none"].includes(t),[me("device")]:!0})}"
      >
        <div
          id="Toolbar"
          class="button-group"
        >
          <mov-dropdown id="FileDropdown">
            <mov-button
              slot="trigger"
              title="${Y("FILE_MENU")}"
            >
              <mov-icon
                label="File"
                name="IconDotsVertical"
              ></mov-icon>
            </mov-button>
            <mov-dropdown-item
              id="settings"
              @click=${p6}
            >
              <mov-icon
                slot="icon"
                name="IconSettings"
              ></mov-icon>
              ${Y("SETTINGS")} ${a("SETTINGS")}
            </mov-dropdown-item>
            <mov-dropdown-item
              id="keybindings"
              @click=${g6}
            >
              <mov-icon
                slot="icon"
                name="IconKeyboard"
              ></mov-icon>
              ${Y("KEYBINDINGS")}
            </mov-dropdown-item>
            <mov-dropdown-item
              id="AutoScroll"
              class="${Ot({running:me("autoScroll")})}"
              @click=${Aa}
            >
              <mov-icon
                slot="icon"
                name="${me("autoScroll")?"IconPlayerPause":"IconPlayerPlay"}"
              ></mov-icon>
              ${Y("SCROLL_START")} ${a("SCROLL_START")}
            </mov-dropdown-item>
            <mov-dropdown-item
              id="bookmarks"
              class="tablets"
              @click=${f6}
            >
              <mov-icon
                slot="icon"
                name="IconBookmarks"
              ></mov-icon>
              ${Y("BOOKMARKS")}
            </mov-dropdown-item>
            <mov-dropdown-item
              id="pageControls"
              class="tablets phones"
              @click="${d3}"
              ?selected=${K("hidePageControls")}
            >
              <mov-icon
                slot="icon"
                name="IconListNumbers"
              ></mov-icon>
              ${Y("TOGGLE_CONTROLS")}
            </mov-dropdown-item>
          </mov-dropdown>

          <mov-dropdown
            id="ViewDropdown"
            checkable
          >
            <mov-button
              slot="trigger"
              title="${Y("VIEW_MENU")}"
            >
              <mov-icon
                label="View"
                name="IconBook"
              ></mov-icon>
            </mov-button>
            <mov-dropdown-item
              id="webComic"
              class="tablets"
              @click="${Kn("WebComic")}"
              ?selected=${K("viewMode")==="WebComic"}
            >
              <mov-icon
                slot="icon"
                name="IconSpacingVertical"
              ></mov-icon>
              ${Y("VIEW_MODE_WEBCOMIC")} ${a("VIEW_MODE_WEBCOMIC")}
            </mov-dropdown-item>
            <mov-dropdown-item
              id="verticalMode"
              class="tablets"
              @click="${Kn("Vertical")}"
              ?selected=${K("viewMode")==="Vertical"}
            >
              <mov-icon
                slot="icon"
                name="IconArrowAutofitDown"
              ></mov-icon>
              ${Y("VIEW_MODE_VERTICAL")} ${a("VIEW_MODE_VERTICAL")}
            </mov-dropdown-item>
            <mov-dropdown-item
              id="ltrMode"
              @click="${Kn("FluidLTR")}"
              ?selected=${K("viewMode")==="FluidLTR"}
            >
              <mov-icon
                slot="icon"
                name="IconArrowAutofitRight"
              ></mov-icon>
              ${Y("VIEW_MODE_LEFT")} ${a("VIEW_MODE_LEFT")}
            </mov-dropdown-item>
            <mov-dropdown-item
              id="rtlMode"
              @click="${Kn("FluidRTL")}"
              ?selected=${K("viewMode")==="FluidRTL"}
            >
              <mov-icon
                slot="icon"
                name="IconArrowAutofitLeft"
              ></mov-icon>
              ${Y("VIEW_MODE_RIGHT")} ${a("VIEW_MODE_RIGHT")}
            </mov-dropdown-item>
          </mov-dropdown>
          <mov-dropdown
            id="ZoomDropdown"
            checkable
          >
            <mov-button
              slot="trigger"
              title="${Y("ZOOM_MENU")}"
            >
              <mov-icon
                label="Zoom"
                name="IconZoom"
              ></mov-icon>
            </mov-button>
            <mov-dropdown-item
              id="enlarge"
              @click="${Ma()}"
            >
              <mov-icon
                slot="icon"
                name="IconZoomInArea"
              ></mov-icon>
              ${Y("ENLARGE")} ${a("ENLARGE")}
            </mov-dropdown-item>
            <mov-dropdown-item
              id="restore"
              @click="${yi("percent",100)}"
            >
              <mov-icon
                slot="icon"
                name="IconZoomPan"
              ></mov-icon>
              ${Y("RESTORE")} ${a("RESTORE")}
            </mov-dropdown-item>
            <mov-dropdown-item
              id="reduce"
              @click="${Ma(-1)}"
            >
              <mov-icon
                slot="icon"
                name="IconZoomOutArea"
              ></mov-icon>
              ${Y("REDUCE")} ${a("REDUCE")}
            </mov-dropdown-item>
            <mov-dropdown-item
              id="fitWidth"
              @click="${yi("width")}"
              ?selected=${K("zoomMode")==="width"}
            >
              <mov-icon
                slot="icon"
                name="IconArrowAutofitWidth"
              ></mov-icon>
              ${Y("FIT_WIDTH")} ${a("FIT_WIDTH")}
            </mov-dropdown-item>
            <mov-dropdown-item
              id="fitHeight"
              @click="${yi("height")}"
              ?selected=${K("zoomMode")==="height"}
            >
              <mov-icon
                slot="icon"
                name="IconArrowAutofitHeight"
              ></mov-icon>
              ${Y("FIT_HEIGHT")} ${a("FIT_HEIGHT")}
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
            .value="${K("zoomValue")}"
            min="${K("minZoom")}"
            max="200"
            @input=${Q3}
          />
          <span id="ZoomVal">
            Zoom:
            ${K("zoomMode")==="percent"?`${K("zoomValue")}%`:K("zoomMode")}</span
          >
        </div>
        <div
          id="GlobalFunctions"
          class="button-group"
        >
          <mov-button
            id="series"
            href="${this.manga.series??$e}"
            @click=${uo}
            title="${Y("RETURN_CHAPTER_LIST")}"
            ?disabled=${!this.manga.series}
          >
            <mov-icon name="IconBookReturn"></mov-icon>
          </mov-button>
          <mov-button
            id="download"
            title="${Y("DOWNLOAD_ZIP")}"
            @click=${B0}
            ?disabled=${me("download")!=="available"}
            ?loading=${me("download")==="working"}
          >
            <mov-icon
              name="${me("download")==="working"?"IconLoader2":"IconFileDownload"}"
            ></mov-icon>
          </mov-button>
          <mov-button
            id="prev"
            href="${this.manga.prev??$e}"
            title="${Y("PREVIOUS_CHAPTER")}"
            @click=${uo}
            ?disabled=${!this.manga.prev}
          >
            <mov-icon name="IconArrowBigLeft"></mov-icon>
          </mov-button>
          <mov-button
            id="next"
            href="${this.manga.next??$e}"
            title="${Y("NEXT_CHAPTER")}"
            @click=${uo}
            ?disabled=${!this.manga.next}
          >
            <mov-icon name="IconArrowBigRight"></mov-icon>
          </mov-button>
        </div>
      </header>
    `}};X([Fr("#MangaTitle")],Ca.prototype,"mangaTitleElement",void 0),X([fe({type:Object})],Ca.prototype,"manga",void 0),Ca=X([gt("reader-header"),(0,ki.useStores)(St,ni,jt)],Ca);var w6="#BookmarksPanel{text-align:center;--width:100vw}#BookmarksList{flex-direction:column;gap:5px;max-height:60vh;padding:0 5px;display:flex;overflow:auto}.bookmark-item{text-align:left;border-radius:5px;align-items:center;gap:1rem;padding:.75rem 1rem;transition:background-color .15s ease-in-out;display:flex}.bookmark-item:hover{background-color:var(--mov-color-fill-quiet,#8080801a)}.bookmark-info{flex-grow:1;min-width:0}.bookmark-name{font-weight:500}.bookmark-url{white-space:nowrap;text-overflow:ellipsis;color:color-mix(in oklab, var(--theme-body-text-color), transparent 30%);font-size:.875rem;text-decoration:none;display:block;overflow:hidden}.bookmark-url:hover{text-decoration:underline}.bookmark-details{text-align:right;width:90px;color:color-mix(in oklab, var(--theme-body-text-color), transparent 30%);flex-shrink:0;font-size:.875rem}.bookmark-details>div{padding:2px 0}.bookmark-actions{flex-shrink:0;gap:.5rem;display:flex}",rh=class extends rt{static{this.styles=[Kt(w6)]}listBookmarks(){return Es(K("bookmarks"))?[Y("LIST_EMPTY")]:K("bookmarks").map((t,r)=>ce`
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
              @click=${h6}
            >
              <mov-icon
                name="IconTrash"
                size="16px"
              ></mov-icon>
            </mov-button>
          </div>
        </div>
      `)}render(){return ce`
      <mov-dialog
        id="BookmarksPanel"
        ?open=${me("panel")==="bookmarks"}
        light-dismiss
        @close=${zl}
      >
        <mov-button
          class="Bookmark"
          title="${Y("BOOKMARK")}"
          @click=${th}
          slot="header-actions"
        >
          <mov-icon
            name="${ii()===void 0?"IconBookmark":"IconBookmarkOff"}"
            size="24px"
          ></mov-icon>
        </mov-button>
        <h2 slot="header">${Y("BOOKMARKS")}</h2>
        <h2 slot="label">${Y("BOOKMARKS")}</h2>
        <div id="BookmarksList">${this.listBookmarks()}</div>
      </mov-dialog>
    `}};rh=X([gt("bookmark-panel"),(0,ki.useStores)(St,ni,jt)],rh);function*_6(e,t){const r=typeof t=="function";if(e!==void 0){let o=-1;for(const a of e)o>-1&&(yield r?t(o):t),o++,yield a}}var y6="#KeybindingsPanel div{line-height:1.5em}#KeybindingsPanel #KeybindingsList{grid-template-columns:1fr 2fr;gap:5px;display:grid}#KeybindingsPanel .ControlButton{justify-content:center;align-items:center;gap:.5em;margin-left:3px;padding:5px 10px}#KeybindingsPanel label{display:ruby}#KeybindingsPanel input{width:100%;display:inline-block}#KeybindingsPanel #HotKeysRules{grid-column:span 2}",ih=class extends rt{constructor(...t){super(...t),this.keybindsRefs=Object.keys(K("keybinds")).reduce((r,o)=>(r[o]=Ls(),r),{})}static{this.styles=[Kt(y6),Kt(eh)]}keybindList(){const t=K("keybinds");return Object.keys(t).map(r=>{const o=t[r]?.length?_6(t[r]?.map(a=>ce`<kbd class="dark">${a}</kbd>`)," / "):"";return ce`<span>${Y(r)}:</span> <span>${o}</span>`})}keybindEditor(){const t=K("keybinds");return Object.keys(t).map(r=>ce`<label for="${r}">${Y(r)}:</label>
          <input
            type="text"
            class="KeybindInput"
            id="${r}"
            name="${r}"
            value="${t[r]?.join(" , ")??$e}"
            ${Ps(this.keybindsRefs[r])}
          />`)}render(){return ce`
      <mov-drawer
        id="KeybindingsPanel"
        ?open=${me("panel").startsWith("keybindings")}
        placement="end"
        @close=${zl}
      >
        <h2 slot="label">${Y("KEYBINDINGS")}</h2>
        <div
          class="controls"
          slot="header-actions"
        >
          ${me("panel")==="keybindingsEditor"?ce` <mov-button
                id="SaveKeybindings"
                type="button"
                title="${Y("SAVE_KEYBINDS")}"
                @click=${()=>m6(this.keybindsRefs)}
              >
                <mov-icon
                  name="IconDeviceFloppy"
                  size="16px"
                  slot="start"
                ></mov-icon>
                ${Y("BUTTON_SAVE")}
              </mov-button>`:ce` <mov-button
                id="EditKeybindings"
                type="button"
                title="${Y("EDIT_KEYBINDS")}"
                @click=${v6}
              >
                <mov-icon
                  name="IconPencil"
                  size="16px"
                  slot="start"
                ></mov-icon>
                ${Y("BUTTON_EDIT")}
              </mov-button>`}
        </div>
        <div id="KeybindingsList">
          ${me("panel")==="keybindingsEditor"?this.keybindEditor():this.keybindList()}
        </div>
        <div id="HotKeysRules">${T0(Y("KEYBIND_RULES"))}</div>
      </mov-drawer>
    `}};ih=X([gt("keybindings-panel"),(0,ki.useStores)(St,ni,jt)],ih);function*k6(e,t){if(e!==void 0){let r=0;for(const o of e)yield t(o,r++)}}function wo(e,t=1){return Array(e).fill(0).map((r,o)=>o+1).filter(r=>r>=t)}function oh(e){e.deltaY&&(e.currentTarget.scrollLeft+=e.deltaY+e.deltaX,e.preventDefault())}function E6(e){e.deltaY&&(e.currentTarget.scrollLeft-=e.deltaY-e.deltaX,e.preventDefault())}var A6=":host{--nav-collapsed-size:34px;--nav-expanded-size:200px;--header-height:80px}#Navigation{color:var(--theme-text-color);background-color:var(--theme-hightlight-color);box-sizing:border-box;white-space:nowrap;text-align:center;z-index:1000;gap:5px;line-height:0;transition:all .3s;display:flex;position:fixed;overflow:hidden}#Thumbnails{flex-grow:1;justify-content:flex-start;gap:5px;display:flex}#Navigation.horizontal #Thumbnails{flex-direction:row;overflow:auto hidden}#Navigation.vertical #Thumbnails{flex-direction:column;justify-content:flex-start;overflow:hidden auto}#Navigation.left #Thumbnails{direction:rtl}:host(:not([forceExpanded])) #Navigation:not(:hover) #Thumbnails{display:none}#NavigationCounters{text-align:center;white-space:nowrap;flex-shrink:0;justify-content:center;align-items:center;gap:.5rem;padding:5px;line-height:1rem;display:flex}#Navigation.horizontal{height:var(--nav-collapsed-size);flex-direction:column;width:100%;left:0;right:0}:host([forceExpanded]) #Navigation.horizontal,#Navigation.horizontal:hover{height:var(--nav-expanded-size)}#Navigation.bottom{bottom:0}#Navigation.vertical{width:var(--nav-collapsed-size);flex-direction:row;height:100%;transition:top .3s,height .3s,width .3s;bottom:0}:host([forceExpanded]) #Navigation.vertical,#Navigation.vertical:hover{width:var(--nav-expanded-size)}#Navigation.left{flex-direction:row-reverse;left:0}#Navigation.right{right:0}#Navigation.vertical #NavigationCounters{writing-mode:vertical-rl;transform:rotate(180deg)}#Navigation.right #NavigationCounters{transform:rotate(0)}#Navigation.vertical.header{top:var(--header-height);height:calc(100% - var(--header-height))}#Navigation .Thumbnail{justify-content:center;align-items:center;width:150px;height:150px;margin:0 5px;display:inline-flex;position:relative}.ThumbnailIndex{color:var(--mov-color-on-loud);background-color:var(--mov-color-fill-loud);opacity:.9;text-align:center;z-index:1;width:100%;font-weight:600;line-height:1.2rem;display:block;position:absolute;bottom:30%;left:0}.ThumbnailImg{cursor:pointer;background-position:50%;background-repeat:no-repeat;background-size:48px 48px;min-width:80px;max-width:150px;min-height:150px;max-height:150px;display:inline-block}",_o=class extends rt{constructor(...t){super(...t),this.mode="bottom",this.forceExpanded=!1,this.isHiding=!1}static{this.styles=[Kt(A6),$t`
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
        background-image: url('${Kt(so(Sl))}');
      }

      .Thumbnail .ThumbnailImg.imgBroken {
        background-image: url('${Kt(so(Ml))}');
      }
    `]}willUpdate(t){t.has("mode")&&(this.isHiding=!0)}updated(t){t.has("mode")&&this.isHiding&&setTimeout(()=>{this.isHiding=!1},50)}render(){if(this.mode==="disabled")return $e;const t=me("manga"),r={horizontal:this.mode==="bottom",vertical:this.mode!=="bottom",left:this.mode==="left",right:this.mode==="right",bottom:this.mode==="bottom",hiding:this.isHiding},o=Object.values(me("images")??{}).filter(a=>a.status==="loaded").length;return ce`
      <nav
        id="Navigation"
        class="${Ot(r)}"
      >
        <div
          id="NavigationCounters"
          class="ControlLabel"
        >
          ${W4}
          <i>${o}</i> /
          <b> ${(t?.pages??1)-((t?.begin??1)-1)} </b>
          ${Y("PAGES_LOADED")}
          <span>: ${me("currentPage")}</span>
        </div>
        <div
          id="Thumbnails"
          @wheel=${this.mode==="bottom"?oh:null}
        >
          ${k6(wo(t?.pages??1,t?.begin??1),a=>ce` <figure
                id="Thumbnail${a}"
                class="Thumbnail"
                role="button"
                tabindex="0"
                title="Go to page ${a}"
                @click=${()=>p3(a)}
              >
                <img
                  id="ThumbnailImg${a}"
                  alt=""
                  class="ThumbnailImg"
                  src=${me("images")?.[a]?.src??$e}
                />
                <figcaption class="ThumbnailIndex">${a}</figcaption>
              </figure>`)}
        </div>
      </nav>
    `}};X([fe({type:String})],_o.prototype,"mode",void 0),X([fe({type:Boolean})],_o.prototype,"forceExpanded",void 0),X([ln()],_o.prototype,"isHiding",void 0),_o=X([gt("navbar-thumbnails"),(0,ki.useStores)(St,ni,jt)],_o);function S6(){const e=$r()?"true":"false";return ce` <div class="ControlLabel">
    ${Y("SCOPE")}
    <segmented-control
      .value=${e}
      @change=${P3}
    >
      <segmented-control-option
        value="false"
        label=${Y("GLOBAL")}
        icon="IconWorldCog"
      ></segmented-control-option>
      <segmented-control-option
        value="true"
        label=${window.location.hostname}
        icon="IconLocationCog"
      ></segmented-control-option>
    </segmented-control>
  </div>`}function M6(){return ti.map(e=>ce`
      <option
        value="${e.ID}"
        ?selected=${K("locale")===e.ID}
      >
        ${e.NAME}
      </option>
    `)}function x6(){return ce` <div class="ControlLabel locale">
    ${Y("LANGUAGE")}
    <select
      id="locale"
      @change="${$3}"
    >
      ${M6()}
    </select>
  </div>`}var I6=()=>ce`${S6()} ${x6()}`;function C6(){return ce`
    <div class="ControlLabel loadMode">
      ${Y("DEFAULT_LOAD_MODE")}
      <select
        id="loadMode"
        @change="${z3}"
      >
        <option
          value="wait"
          ?selected=${K("loadMode")==="wait"}
        >
          ${Y("LOAD_MODE_NORMAL")}
        </option>
        <option
          value="always"
          ?selected=${K("loadMode")==="always"}
        >
          ${Y("LOAD_MODE_ALWAYS")}
        </option>
        <option
          value="never"
          ?selected=${K("loadMode")==="never"}
        >
          ${Y("LOAD_MODE_NEVER")}
        </option>
      </select>
    </div>
  `}function O6(){return ce`
    <div class="ControlLabel PagesPerSecond">
      ${Y("LOAD_SPEED")}
      <select
        id="PagesPerSecond"
        @change="${U3}"
      >
        <option
          value="3000"
          ?selected=${K("throttlePageLoad")===3e3}
        >
          0.3(${Y("SLOWLY")})
        </option>
        <option
          value="2000"
          ?selected=${K("throttlePageLoad")===2e3}
        >
          0.5
        </option>
        <option
          value="1000"
          ?selected=${K("throttlePageLoad")===1e3}
        >
          01(${Y("NORMAL")})
        </option>
        <option
          value="500"
          ?selected=${K("throttlePageLoad")===500}
        >
          02
        </option>
        <option
          value="250"
          ?selected=${K("throttlePageLoad")===250}
        >
          04(${Y("FAST")})
        </option>
        <option
          value="125"
          ?selected=${K("throttlePageLoad")===125}
        >
          08
        </option>
        <option
          value="100"
          ?selected=${K("throttlePageLoad")===100}
        >
          10(${Y("EXTREME")})
        </option>
        <option
          value="1"
          ?selected=${K("throttlePageLoad")===1}
        >
          ${Y("ALL_PAGES")}
        </option>
      </select>
    </div>
  `}var T6=()=>ce`${C6()} ${O6()}`;function L6(){return ce`
    <div class="ControlLabel fitIfOversize">
      ${Y("FIT_WIDTH_OVERSIZED")}
      <mov-switch
        name="fitIfOversize"
        ?checked=${K("fitWidthIfOversize")}
        @change=${N3}
      ></mov-switch>
    </div>
    <div class="ControlLabel downloadZip">
      ${Y("DOWNLOAD_IMAGES")}
      <mov-switch
        name="downloadZip"
        ?checked=${K("downloadZip")}
        @change=${F3}
      ></mov-switch>
    </div>
    <div class="ControlLabel hidePageControls">
      ${Y("HIDE_CONTROLS")}
      <mov-switch
        name="hidePageControls"
        ?checked=${K("hidePageControls")}
        @change=${Z3}
      ></mov-switch>
    </div>
    <div class="ControlLabel lazyLoadImages">
      ${Y("LAZY_LOAD_IMAGES_ENABLE")}
      <mov-switch
        name="lazyLoadImages"
        ?checked=${K("lazyLoadImages")}
        @change=${H3}
      ></mov-switch>
    </div>
  `}function R6(){return ce`
    <div
      class="${Ot({ControlLabel:!0,lazyStart:!0,ControlLabelItem:!0,show:K("lazyLoadImages")})}"
    >
      <span>
        ${Y("LAZY_LOAD_IMAGES")}
        <output
          id="lazyStartVal"
          for="lazyStart"
        >
          ${K("lazyStart")}
        </output>
      </span>
      <input
        type="range"
        value="${K("lazyStart")}"
        name="lazyStart"
        id="lazyStart"
        min="5"
        max="100"
        step="5"
        oninput="lazyStartVal.value = this.value"
        @change="${G3}"
      />
    </div>
  `}function P6(){return ce`
    <div class="ControlLabel headerType">
      ${Y("HEADER_TYPE")}
      <segmented-control
        .value=${K("header")}
        @change=${q3}
        labelPosition="bottom"
      >
        <segmented-control-option
          value="hover"
          label=${Y("HEADER_HOVER")}
          icon="arrows-move"
        ></segmented-control-option>
        <segmented-control-option
          value="scroll"
          label=${Y("HEADER_SCROLL")}
          icon="arrows-vertical"
        ></segmented-control-option>
        <segmented-control-option
          value="click"
          label=${Y("HEADER_CLICK")}
          icon="hand-click"
        ></segmented-control-option>
        <segmented-control-option
          value="fixed"
          label=${Y("HEADER_FIXED")}
          icon="pin"
        ></segmented-control-option>
        <segmented-control-option
          value="simple"
          label=${Y("HEADER_SIMPLE")}
          icon="box-align-top"
        ></segmented-control-option>
      </segmented-control>
    </div>
  `}function $6(){return ce`
    <div class="ControlLabel pagination">
      ${Y("PAGINATION_TYPE")}
      <segmented-control
        .value=${K("pagination")}
        @change=${B3}
        labelPosition="side"
      >
        <segmented-control-option
          value="disabled"
          label=${Y("PAGINATION_DISABLED")}
          icon="x"
        ></segmented-control-option>
        <segmented-control-option
          value="slider"
          label=${Y("PAGINATION_SLIDER")}
          icon="adjustments-horizontal"
        ></segmented-control-option>
        <segmented-control-option
          value="side-arrows"
          label=${Y("PAGINATION_ARROWS")}
          icon="arrows-left-right"
        ></segmented-control-option>
        <segmented-control-option
          value="both"
          label=${Y("PAGINATION_BOTH")}
          icon="arrows-horizontal"
        ></segmented-control-option>
      </segmented-control>
    </div>
  `}function z6(){return ce`
    <div class="ControlLabel navbarType">
      ${Y("NAVBAR_TYPE")}
      <segmented-control
        .value=${K("navbar")}
        @change=${D3}
        labelPosition="tooltip"
      >
        <segmented-control-option
          value="bottom"
          label=${Y("NAVBAR_BOTTOM")}
          icon="layout-bottombar"
        ></segmented-control-option>
        <segmented-control-option
          value="left"
          label=${Y("NAVBAR_LEFT")}
          icon="layout-sidebar"
        ></segmented-control-option>
        <segmented-control-option
          value="right"
          label=${Y("NAVBAR_RIGHT")}
          icon="layout-sidebar-right"
        ></segmented-control-option>
        <segmented-control-option
          value="disabled"
          label=${Y("NAVBAR_DISABLED")}
          icon="x"
        ></segmented-control-option>
      </segmented-control>
    </div>
  `}function N6(){return ce`
    <div class="ControlLabel autoScroll">
      <span>
        ${Y("AUTO_SCROLL_HEIGHT")}
        <output
          id="scrollHeightVal"
          for="scrollHeight"
        >
          ${K("scrollHeight")} </output
        >px
      </span>
      <input
        type="range"
        value="${K("scrollHeight")}"
        name="scrollHeight"
        id="scrollHeight"
        min="1"
        max="${Math.ceil(window.innerHeight/200)*100}"
        step="1"
        @change="${j3}"
      />
    </div>
  `}var D6=()=>ce`${L6()} ${$6()} ${R6()} ${P6()} ${z6()} ${N6()}`;function B6(){const e=K("colorScheme")==="dark";wt("colorScheme",e?"light":"dark"),document.documentElement.classList.remove(e?"dark":"light"),document.documentElement.classList.add(K("colorScheme"))}function Oa(e){wt("theme",e instanceof CustomEvent?e.detail.value:e.currentTarget.value)}function F6(){return ce`
    <div class="ControlLabel ColorSchemeSelector">
      <label>${Y("COLOR_SCHEME")}</label>
      <toggle-button
        id="ColorScheme"
        mode="theme"
        @click=${B6}
        ?active=${K("colorScheme")==="dark"}
      >
      </toggle-button>
    </div>
    <div class="ControlLabel ThemeSelector">
      <label>${Y("THEME_COLOR")}</label>
      <mov-color-picker
        id="ThemeHex"
        .value="${K("theme")}"
        title="${K("theme")}"
        @input=${Oa}
        .swatches=${Object.values(vl)}
      ></mov-color-picker>
    </div>
    <color-palette
      .baseColor="${K("theme")}"
      mode="steps"
      .selected=${K("theme")}
      @change="${Oa}"
    ></color-palette>
    <span id="ColorRecommendations">
      ${Object.values(vl).map(e=>ce`<color-swatch
            .color="${e}"
            .selected=${K("theme")}
            @change=${Oa}
          ></color-swatch>`)}
    </span>
    <details class="ControlLabel">
      <summary>${Y("THEME_HUE")} & ${Y("THEME_SHADE")}</summary>
      <color-panel
        .selected=${K("theme")}
        @change=${Oa}
      ></color-panel>
    </details>
  `}function H6(){return ce` <div class="ControlLabel DefaultZoomMode">
    ${Y("DEFAULT_ZOOM_MODE")}
    <segmented-control
      .value=${K("zoomMode")}
      @change=${X3}
      labelPosition="tooltip"
    >
      <segmented-control-option
        value="percent"
        label=${Y("PERCENT")}
        icon="file-percent"
      ></segmented-control-option>
      <segmented-control-option
        value="width"
        label=${Y("FIT_WIDTH")}
        icon="arrow-autofit-width"
      ></segmented-control-option>
      <segmented-control-option
        value="height"
        label=${Y("FIT_HEIGHT")}
        icon="arrow-autofit-height"
      ></segmented-control-option>
    </segmented-control>
  </div>`}function G6(){return ce`
    <div
      class="${Ot({ControlLabel:!0,zoomValue:!0,ControlLabelItem:!0,show:K("zoomMode")==="percent"})}"
    >
      <span>
        ${Y("DEFAULT_ZOOM")}
        <output
          id="zoomValueVal"
          class="RangeValue"
          for="zoomValue"
        >
          ${K("zoomValue")}%
        </output>
      </span>
      <input
        type="range"
        value="${K("zoomValue")}"
        name="zoomValue"
        id="zoomValue"
        min="5"
        max="200"
        step="5"
        list="zoomValueList"
        @input="${J3}"
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
  `}function U6(){return ce`
    <div class="ControlLabel minZoom">
      <span>
        ${Y("MINIMUM_ZOOM")}
        <output
          id="minZoomVal"
          class="RangeValue"
          for="minZoom"
        >
          ${K("minZoom")}%
        </output>
      </span>
      <input
        type="range"
        value="${K("minZoom")}"
        name="minZoom"
        id="minZoom"
        min="25"
        max="100"
        step="5"
        @input="${V3}"
        list="minZoomList"
      />
      <datalist id="minZoomList">
        <option value="25">25</option>
        <option value="50">50</option>
        <option value="75">75</option>
        <option value="100">100</option>
      </datalist>
    </div>
  `}function W6(){return ce`
    <div class="ControlLabel zoomStep">
      <span>
        ${Y("ZOOM_STEP")}
        <output
          id="zoomStepVal"
          class="RangeValue"
          for="zoomStep"
        >
          ${K("zoomStep")}%
        </output>
      </span>
      <input
        type="range"
        value="${K("zoomStep")}"
        name="zoomStep"
        id="zoomStep"
        min="10"
        max="50"
        step="5"
        @input="${W3}"
        list="zoomStepList"
      />
      <datalist id="zoomStepList">
        <option value="10">10</option>
        <option value="30">30</option>
        <option value="50">50</option>
      </datalist>
    </div>
  `}function V6(){return ce`
    <div class="ControlLabel viewMode">
      ${Y("DEFAULT_VIEW_MODE")}
      <segmented-control
        .value=${K("viewMode")}
        @change=${e6}
        labelPosition="tooltip"
      >
        <segmented-control-option
          value="Vertical"
          label=${Y("VIEW_MODE_VERTICAL")}
          icon="arrow-autofit-down"
        ></segmented-control-option>
        <segmented-control-option
          value="WebComic"
          label=${Y("VIEW_MODE_WEBCOMIC")}
          icon="spacing-vertical"
        ></segmented-control-option>
        <segmented-control-option
          value="FluidLTR"
          label=${Y("VIEW_MODE_LEFT")}
          icon="arrow-autofit-right"
        ></segmented-control-option>
        <segmented-control-option
          value="FluidRTL"
          label=${Y("VIEW_MODE_RIGHT")}
          icon="arrow-autofit-left"
        ></segmented-control-option>
      </segmented-control>
    </div>
  `}var Z6=()=>ce`${H6()} ${G6()} ${U6()} ${W6()} ${V6()}`,q6="#SettingsPanel{color:var(--theme-text-color)}#SettingsPanel fieldset{border:1px solid var(--theme-body-text-color);border-radius:10px;padding:3px}#SettingsPanel .ControlLabel{flex-flow:wrap;justify-content:space-between;align-items:center;padding:2px;display:flex}#SettingsPanel .ControlLabelItem{justify-content:space-between;align-items:center;display:flex}#SettingsPanel .ControlLabelItem:not(.show){display:none}#SettingsPanel input[type=range]{width:100%}#SettingsPanel .RangeValue{color:var(--mov-color-on-loud);text-align:center;background:var(--mov-color-fill-loud);border-radius:3px;margin-left:8px;padding:2px 5px;line-height:20px;display:inline-block}#SettingsPanel datalist{flex-direction:row;justify-content:space-between;width:100%;display:flex}#SettingsPanel datalist option{writing-mode:vertical-lr;padding:0}#ThemeSelector{width:110px}#ColorRecommendations{flex-flow:wrap;gap:2px;display:flex}#Chapter:not(.Vertical)~#SettingsPanel .verticalSeparator{display:none}#ColorScheme{min-width:28px;min-height:28px;padding:5px}#ResetSettings,#ResetSettings::part(base){width:100%}",ah=class extends rt{static{this.styles=[$t`
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
    `,Kt(q6)]}render(){return ce`
      <mov-drawer
        id="SettingsPanel"
        ?open=${me("panel")==="settings"}
        @close=${zl}
        placement="start"
        class="${me("device")}"
      >
        <h2 slot="label">${Y("SETTINGS")}</h2>
        <mov-button
          id="ResetSettings"
          @click="${J2}"
          title="${Y("BUTTON_RESET_SETTINGS")}"
        >
          <mov-icon
            name="IconSettingsOff"
            size="20px"
            slot="start"
          ></mov-icon>
          ${Y("BUTTON_RESET_SETTINGS")}
        </mov-button>
        <div class="content">
          <fieldset id="SettingsPanelGeneral">
            <legend>${Y("GENERAL")}</legend>
            ${I6()}
          </fieldset>
          <fieldset id="SettingsPanelTheme">
            <legend>${Y("THEME")}</legend>
            ${F6()}
          </fieldset>
          <fieldset id="SettingsPanelLoading">
            <legend>${Y("LOADING")}</legend>
            ${T6()}
          </fieldset>
          <fieldset id="SettingsPanelZoom">
            <legend>${Y("ZOOM")}</legend>
            ${Z6()}
          </fieldset>
          <fieldset id="SettingsPanelOthers">
            <legend>${Y("OTHERS")}</legend>
            ${D6()}
          </fieldset>
        </div>
      </mov-drawer>
    `}};ah=X([gt("settings-panel"),(0,ki.useStores)(St,ni,jt)],ah);function j6(e){return new Promise(function(t,r){var o=new FileReader,a=typeof o.readAsBinaryString=="function";o.onloadend=function(){var s=o.result||"";if(a)return t(s);t(X6(s))},o.onerror=r,a?o.readAsBinaryString(e):o.readAsArrayBuffer(e)})}function K6(e){return j6(e).then(btoa)}function Y6(e){return K6(e).then(function(t){return"data:"+e.type+";base64,"+t})}function X6(e){for(var t="",r=new Uint8Array(e),o=r.byteLength,a=-1;++a<o;)t+=String.fromCharCode(r[a]);return t}async function J6(e,t){Ee("Fetching page: ",e);try{const r=await(await fetch(e)).text();return new DOMParser().parseFromString(r,t)}catch(r){throw Ee("Failed to fetch page: ",r),r}}async function Q6(e){return J6(e,"text/html")}async function eb(e,t,r){try{return(await Q6(e)).querySelector(t)?.getAttribute(r)}catch(o){return Ee("Failed to get element attribute: ",o),null}}function tb(e){if(e){let t=e.trim();return t.startsWith("//")&&(t=`https:${t}`),t}return""}async function Ta(e,t,r,o=0){const a=me("images")?.[t];a?.status&&a.status!=="pending"||(Bn(t,()=>({status:"loading"})),setTimeout(async()=>{let s=tb(r),c,h="loaded";try{const u=await fetch(s,e.fetchOptions);u.ok?(c=await u.blob(),s=await Y6(c)):h="error"}catch(u){Ee("Failed to fetch image",u),h="error"}Bn(t,()=>({src:s,blob:c,status:h})),mn("Loaded Image:",t,"Source:",s)},(e.timer??K("throttlePageLoad"))*o),e.pages===t&&$l())}async function sh(e,t,r,o=0){const a=me("images")?.[t];a?.status&&a.status!=="pending"||(Bn(t,()=>({status:"loading"})),setTimeout(async()=>{try{const s=await eb(r,e.img,e.lazyAttr??"src");s?(Bn(t,()=>({status:"pending"})),await Ta(e,t,s,0)):Bn(t,()=>({status:"error"}))}catch(s){Ee("Failed to get page attribute",s),Bn(t,()=>({status:"error"}))}},(e.timer??K("throttlePageLoad"))*o),e.pages===o&&$l())}function lh(e,t){wo(t.pages,e).filter((r,o)=>!(t.lazy??K("lazyLoadImages"))||o<=K("lazyStart")).forEach((r,o)=>{sh(t,r,t.listPages[r-1],o)})}function ch(e,t){wo(t.pages,e).filter((r,o)=>!(t.lazy??K("lazyLoadImages"))||o<=K("lazyStart")).forEach((r,o)=>{Ta(t,r,t.listImages[r-1],o)})}async function nb(){await As(()=>me("manga")!==void 0);const e=me("manga"),t=e.begin??1;mn("Loading Images"),mn(`Intervals: ${e.timer??K("throttlePageLoad")??"Default(1000)"}`),mn(`Lazy: ${e.lazy??K("lazyLoadImages")}, Starting from: ${K("lazyStart")}`),Ur(),Iu(e)?(mn("Method: Images:",e.listImages),ch(t,e)):Cu(e)?(mn("Method: Pages:",e.listPages),lh(t,e)):V2(e)?(mn("Method: Brute Force"),e.bruteForce({begin:t,addImg:Ta,loadImages(r){ch(t,{...e,listImages:r})},loadPages(r,o,a){lh(t,{...e,listPages:r,img:o,lazyAttr:a})},wait:K("throttlePageLoad")})):Ee("No Loading Method Found"),jt.listen((r,o,a)=>{if(a==="currentPage"&&r.currentPage>o.currentPage)for(let s=r.currentPage;s<r.currentPage+5;s++)r.images?.[s]?.src===void 0&&(Iu(e)?Ta(e,s,e.listImages[s-1]):Cu(e)&&sh(e,s,e.listPages[s-1]))})}function rb(){const e=me("images");if(!e)return null;const t=K("viewMode"),r=t==="FluidLTR"||t==="FluidRTL",o=t==="FluidRTL",a=window.innerHeight/2,s=window.innerWidth/2;let c=null;for(const h in e){const u=e[h].ref?.value;if(!u)continue;const f=u?.getBoundingClientRect();let p;r?o?p=f.right:p=f.left:p=f.top,(r?p<=s:p<=a)&&(!c||p>c.edge)&&(c={index:parseInt(h,10),edge:p})}return c?c.index:me("manga")?.begin??1}function uh(){const e=rb();e!=null&&me("currentPage")!==e&&Ue("currentPage",e)}function ib(){const e=Qe.default.throttle(()=>{requestAnimationFrame(uh)},100);window.addEventListener("scroll",e,{passive:!0}),window.addEventListener("resize",e),me("chapter").value?.addEventListener("scroll",e,{passive:!0}),requestAnimationFrame(uh)}function dh(){if(!me("chapter").value){setTimeout(dh,50);return}ib()}var hh=Qe.default.debounce(()=>{Ue("device",Bi()),Ur()},200);async function ob(){await As(()=>me("manga")!==void 0),Q0(),window.addEventListener("resize",hh),window.addEventListener("orientationchange",hh),x3(),dh()}var ab=gn(((e,t)=>{(function(r,o){typeof define=="function"&&define.amd?define(o):typeof e=="object"?t.exports=o():r.NProgress=o()})(e,function(){var r={};r.version="0.2.0";var o=r.settings={minimum:.08,easing:"ease",positionUsing:"",speed:200,trickle:!0,trickleRate:.02,trickleSpeed:800,showSpinner:!0,barSelector:'[role="bar"]',spinnerSelector:'[role="spinner"]',parent:"body",template:'<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'};r.configure=function(v){var E,y;for(E in v)y=v[E],y!==void 0&&v.hasOwnProperty(E)&&(o[E]=y);return this},r.status=null,r.set=function(v){var E=r.isStarted();v=a(v,o.minimum,1),r.status=v===1?null:v;var y=r.render(!E),S=y.querySelector(o.barSelector),x=o.speed,T=o.easing;return y.offsetWidth,h(function(L){o.positionUsing===""&&(o.positionUsing=r.getPositioningCSS()),u(S,c(v,x,T)),v===1?(u(y,{transition:"none",opacity:1}),y.offsetWidth,setTimeout(function(){u(y,{transition:"all "+x+"ms linear",opacity:0}),setTimeout(function(){r.remove(),L()},x)},x)):setTimeout(L,x)}),this},r.isStarted=function(){return typeof r.status=="number"},r.start=function(){r.status||r.set(0);var v=function(){setTimeout(function(){r.status&&(r.trickle(),v())},o.trickleSpeed)};return o.trickle&&v(),this},r.done=function(v){return!v&&!r.status?this:r.inc(.3+.5*Math.random()).set(1)},r.inc=function(v){var E=r.status;return E?(typeof v!="number"&&(v=(1-E)*a(Math.random()*E,.1,.95)),E=a(E+v,0,.994),r.set(E)):r.start()},r.trickle=function(){return r.inc(Math.random()*o.trickleRate)},(function(){var v=0,E=0;r.promise=function(y){return!y||y.state()==="resolved"?this:(E===0&&r.start(),v++,E++,y.always(function(){E--,E===0?(v=0,r.done()):r.set((v-E)/v)}),this)}})(),r.render=function(v){if(r.isRendered())return document.getElementById("nprogress");p(document.documentElement,"nprogress-busy");var E=document.createElement("div");E.id="nprogress",E.innerHTML=o.template;var y=E.querySelector(o.barSelector),S=v?"-100":s(r.status||0),x=document.querySelector(o.parent),T;return u(y,{transition:"all 0 linear",transform:"translate3d("+S+"%,0,0)"}),o.showSpinner||(T=E.querySelector(o.spinnerSelector),T&&m(T)),x!=document.body&&p(x,"nprogress-custom-parent"),x.appendChild(E),E},r.remove=function(){b(document.documentElement,"nprogress-busy"),b(document.querySelector(o.parent),"nprogress-custom-parent");var v=document.getElementById("nprogress");v&&m(v)},r.isRendered=function(){return!!document.getElementById("nprogress")},r.getPositioningCSS=function(){var v=document.body.style,E="WebkitTransform"in v?"Webkit":"MozTransform"in v?"Moz":"msTransform"in v?"ms":"OTransform"in v?"O":"";return E+"Perspective"in v?"translate3d":E+"Transform"in v?"translate":"margin"};function a(v,E,y){return v<E?E:v>y?y:v}function s(v){return(-1+v)*100}function c(v,E,y){var S;return o.positionUsing==="translate3d"?S={transform:"translate3d("+s(v)+"%,0,0)"}:o.positionUsing==="translate"?S={transform:"translate("+s(v)+"%,0)"}:S={"margin-left":s(v)+"%"},S.transition="all "+E+"ms "+y,S}var h=(function(){var v=[];function E(){var y=v.shift();y&&y(E)}return function(y){v.push(y),v.length==1&&E()}})(),u=(function(){var v=["Webkit","O","Moz","ms"],E={};function y(L){return L.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,function(z,q){return q.toUpperCase()})}function S(L){var z=document.body.style;if(L in z)return L;for(var q=v.length,W=L.charAt(0).toUpperCase()+L.slice(1),oe;q--;)if(oe=v[q]+W,oe in z)return oe;return L}function x(L){return L=y(L),E[L]||(E[L]=S(L))}function T(L,z,q){z=x(z),L.style[z]=q}return function(L,z){var q=arguments,W,oe;if(q.length==2)for(W in z)oe=z[W],oe!==void 0&&z.hasOwnProperty(W)&&T(L,W,oe);else T(L,q[1],q[2])}})();function f(v,E){return(typeof v=="string"?v:w(v)).indexOf(" "+E+" ")>=0}function p(v,E){var y=w(v),S=y+E;f(y,E)||(v.className=S.substring(1))}function b(v,E){var y=w(v),S;f(v,E)&&(S=y.replace(" "+E+" "," "),v.className=S.substring(1,S.length-1))}function w(v){return(" "+(v.className||"")+" ").replace(/\s+/gi," ")}function m(v){v&&v.parentNode&&v.parentNode.removeChild(v)}return r})})),sb=Do(ab(),1),lb=/^blob:(.+?)\/(.+)$/;function cb(e){return/^data:image\/(png|jpg|jpeg|gif|svg)/.test(e)}function ub(e){return lb.test(e)}function db(e,t){const r=e.replace(/[?&]forceReload=\d+$/,"");return`${r+(r.includes("?")?"&":"?")}forceReload=${t}`}function hb(e){let t=1;const r=e?.match(/forceReload=(\d+)$/);return r?.at(1)&&(t=parseInt(r[1],10)+1),t}function fh(e,t){Ee(`Reloading Page ${e}`,t);const r=me("images")?.[e]?.src;if(!r)return;const o=hb(r);o>K("maxReload")||(t?.removeAttribute("src"),cb(r)||ub(r)?t?.setAttribute("src",r):t?.setAttribute("src",db(r,o)))}function fb(e){const t=e.currentTarget,r=parseInt(t.value,10),o=me("images")?.[r]?.ref?.value;o&&fh(r,o)}function pb(e){const t=e.currentTarget;Bn(parseInt(t.value,10),r=>({hide:!r.hide}))}function gb(e){const t=e.currentTarget;Bn(parseInt(t.id.replace("PageImg",""),10),s=>({...X0({naturalWidth:t.naturalWidth,naturalHeight:t.naturalHeight}),status:"loaded"}));const r=me("manga")?.pages??1,o=Object.values(me("images")??{}).filter(s=>s.status==="loaded").length,a=Math.floor(o/r*100);document.title=`(${a}%) ${me("manga")?.title}`,sb.default.configure({showSpinner:!1}).set(o/r),Ee(`Progress: ${a}%`),o===r&&(Ee("Images Loading Complete"),Ue("download","available"),K("downloadZip")&&B0())}function mb(e){const t=e.currentTarget;if(Es(t.getAttribute("src")))return;const r=parseInt(t.id.replace("PageImg",""),10);Bn(r,()=>({status:"error"})),fh(r,t)}function vb(e){const t=e.currentTarget,r=parseInt(t.value,10),o=me("images"),a=me("images")?.[r];a?.naturalWidth&&Ue("images",{...o,[r]:{...a,width:(a?.width||a?.naturalWidth)*(1+K("zoomStep")/100),height:void 0}})}function bb(e){const t=e.currentTarget,r=parseInt(t.value,10),o=me("images"),a=me("images")?.[r];a?.naturalWidth&&Ue("images",{...o,[r]:{...a,width:(a?.width||a?.naturalWidth)*(1-K("zoomStep")/100),height:void 0}})}function wb(e){const t=e.currentTarget,r=parseInt(t.value,10),o=me("images"),a=me("images")?.[r];a&&Ue("images",{...o,[r]:{...a,width:void 0,height:void 0}})}function _b(e){const t=e.currentTarget,r=parseInt(t.value,10),o=me("images"),a=me("images")?.[r];a&&Ue("images",{...o,[r]:{...a,width:window.innerWidth+(K("navbar")==="left"||K("navbar")==="right"?-34:0),height:void 0}})}function yb(e){const t=e.currentTarget,r=parseInt(t.value,10),o=me("images"),a=me("images")?.[r];a&&Ue("images",{...o,[r]:{...a,width:void 0,height:window.innerHeight+(K("navbar")==="bottom"?-34:0)}})}function kb(e){const t=me("images")?.[e];let r;return K("viewMode").startsWith("Fluid")?r=`${window.innerHeight+(K("navbar")==="bottom"?-34:0)}px`:r=void 0,{width:t?.width?`${t.width}px`:"auto",height:t?.height?`${t.height}px`:"auto","max-height":r,"min-width":`${K("minZoom")}vw`}}var Eb=(e,t)=>wo(e,t).map(r=>(me("images")?.[r]?.ref||Bn(r,o=>({ref:Ls()})),ce`
      <div
        id="Page${r}"
        class="${Ot({MangaPage:!0,hide:!!me("images")?.[r].hide})}"
      >
        <div class="PageFunctions">
          <button
            class="Bookmark PageButton"
            title="${Y("BOOKMARK")}"
            @click=${th}
            value="${r}"
          >
            ${ii()?U4:G4}
          </button>
          <button
            class="ZoomIn PageButton"
            title="${Y("ZOOM_IN")}"
            @click=${vb}
            value="${r}"
          >
            ${K4}
          </button>
          <button
            class="ZoomRestore PageButton"
            title="${Y("ZOOM_RESET")}"
            @click=${wb}
            value="${r}"
          >
            ${j4}
          </button>
          <button
            class="ZoomOut PageButton"
            title="${Y("ZOOM_OUT")}"
            @click=${bb}
            value="${r}"
          >
            ${Y4}
          </button>
          <button
            class="ZoomWidth PageButton"
            title="${Y("ZOOM_WIDTH")}"
            @click=${_b}
            value="${r}"
          >
            ${H4}
          </button>
          <button
            class="ZoomHeight PageButton"
            title="${Y("ZOOM_HEIGHT")}"
            @click=${yb}
            value="${r}"
          >
            ${F4}
          </button>
          <button
            class="Hide PageButton"
            title="${Y("HIDE")}"
            @click=${pb}
            value="${r}"
          >
            ${me("images")?.[r].hide?V4:Z4}
          </button>
          <button
            class="Reload PageButton"
            title="${Y("RELOAD")}"
            @click=${fb}
            value="${r}"
          >
            ${q4}
          </button>
          <span class="PageIndex">${r}</span>
        </div>
        <div class="PageContent">
          <img
            id="PageImg${r}"
            alt="Page ${r}"
            class="${Ot({PageImg:!0,imgLoaded:me("images")?.[r]?.status==="loaded",imgLoading:me("images")?.[r]?.status==="loading",imgBroken:me("images")?.[r]?.status==="error"})}"
            src=${me("images")?.[r]?.src??$e}
            style="${Fn(kb(r))}"
            @load=${gb}
            @error=${mb}
            ${Ps(me("images")?.[r].ref)}
          />
        </div>
      </div>
      <div class="separator">
        [ ${r===e?Y("END"):`${r} / ${e}`} ]
      </div>
    `)),Ab=e=>ce`
  <main
    id="Chapter"
    ${Ps(me("chapter"))}
    class="${Ot({fitWidthIfOversize:K("fitWidthIfOversize"),[K("viewMode")]:!0,separator:K("viewMode")==="Vertical"})}"
    @wheel=${t=>{K("viewMode")==="FluidLTR"?oh(t):K("viewMode")==="FluidRTL"&&E6(t)}}
  >
    ${Eb(e.pages,e.begin??0)}
  </main>
`,Sb=":root:not(.light,.dark){--theme-body-background:#25262b;--theme-body-text-color:#c1c2c5;--theme-text-color:#c1c2c5;--theme-primary-color:#1a1b1e;--theme-primary-text-color:#c1c2c5;--theme-background-color:#25262b;--theme-hightlight-color:#2c2e33;--theme-border-color:#373a40;--theme-secondary-color:#2c2e33;--theme-secondary-text-color:#c1c2c5}:host{box-sizing:border-box}#MangaOnlineViewer{color:var(--theme-body-text-color);background-color:var(--theme-body-background);box-sizing:border-box;min-height:100vh;text-decoration:none}#Chapter{box-sizing:border-box;grid-template-columns:repeat(1,1fr);min-width:225px;display:grid}#Chapter.Vertical:has(+#Navigation:not(.disabled)),#Chapter.WebComic:has(+#Navigation:not(.disabled)){padding-bottom:31px}#Chapter.Vertical .PageContent{margin-top:8px;margin-bottom:8px}.closeButton{width:fit-content;height:fit-content;position:absolute;top:10px;right:10px}.overlay{z-index:950;cursor:pointer;background-color:#00000080;width:100%;height:100%;display:none;position:fixed;inset:0}.overlay.visible{display:block}select{height:20px;margin:2px}:not(.FluidRTL,.FluidLTR).fitWidthIfOversize .PageContent .PageImg{object-fit:contain;max-width:100%}.hideControls .PageFunctions{visibility:hidden}",Mb="@keyframes spin{to{transform:rotate(360deg)}}@keyframes spin-reverse{0%{transform:rotate(360deg)}to{transform:rotate(0)}}.icon-tabler-loader-2,.animate-spin{animation:1s linear infinite spin}.animate-spin-reverse{animation:1s linear infinite spin-reverse}",xb="#Chapter.FluidLTR,#Chapter.FluidRTL{min-width:auto;display:flex;overflow-x:auto;& .ZoomWidth{display:none}& .PageImg{min-width:unset}& .MangaPage{width:initial;min-width:fit-content;position:relative}& .MangaPage.DoublePage{grid-column:span 2}}#Chapter.FluidLTR{flex-direction:row;& .MangaPage .PageFunctions{direction:rtl;left:0;right:auto}}#Chapter.FluidRTL{flex-direction:row-reverse}",Ib='.PageButton .icon-tabler{vertical-align:sub;width:1rem;height:1rem}.PageButton,.PageButton:visited,.PageButton:link{cursor:pointer;min-height:32px;color:var(--mov-color-on-loud);background-color:var(--mov-color-fill-loud);border-style:solid;border-width:1px;border-color:var(--theme-border-color);border-radius:5px;padding:2px;text-decoration:none}.PageButton:active,.PageButton:hover{opacity:.8}.PageButton[selected]{background-color:var(--mov-color-fill-normal);color:var(--mov-color-on-normal);border:1px solid var(--theme-border-color)}.PageButton.hidden{display:none}.MangaPage{text-align:center;width:100%;min-width:100%;min-height:22px;line-height:0;display:inline-block}.PageContent{text-align:center;max-width:100%;height:100%;transition:all .3s ease-in-out;display:inline-block;overflow:auto hidden}.MangaPage.hide .PageContent{height:0}.PageContent .PageImg[src=""],.PageContent .PageImg:not([src]),.PageContent .PageImg.imgBroken{background-position:50%;background-repeat:no-repeat;background-size:20%;background-color:var(--theme-hightlight-color);text-align:center;vertical-align:top;width:40vw;height:80vh;color:var(--theme-text-color);min-width:40vw;max-width:100%;min-height:50vh;max-height:100%;margin:0;font-size:1rem;line-height:80vh;display:inline-block;position:relative}.PageContent .PageImg[src=""]:before,.PageContent .PageImg:not([src]):before,.PageContent .PageImg.imgBroken:before{content:attr(alt);white-space:pre-wrap;text-align:center;color:var(--theme-text-color);font-size:1rem;position:absolute;top:40%;left:50%;transform:translate(-50%,-50%)}.PageFunctions{justify-content:flex-end;align-items:center;gap:3px;margin:0;padding:0;font-family:monospace;display:flex;position:absolute;right:0}.PageFunctions>.PageIndex{background-color:var(--mov-color-fill-loud);color:var(--mov-color-on-loud);text-align:center;border-radius:5px;min-width:20px;padding:3px 5px;line-height:1rem;display:inline-block}.PageFunctions .PageButton{opacity:.5;border-width:0;justify-content:center;align-items:center;min-height:auto;margin:0;padding:3px;display:flex}.PageFunctions:hover .PageButton{opacity:1}.PageFunctions .PageButton:hover{opacity:.9}#Chapter.Vertical .separator{text-align:center;align-items:center;font-style:italic;display:flex}#Chapter.Vertical .separator:before,#Chapter.Vertical .separator:after{content:"";border-bottom:1px solid var(--theme-text-color);flex:1}#Chapter.Vertical.separator:not(:empty):before{margin-right:.25em}#Chapter.Vertical.separator:not(:empty):after{margin-left:.25em}#Chapter:not(.separator) .separator,#Chapter:not(.Vertical) .separator{display:none}',Cb="html{font-size:100%}body{color:var(--theme-body-text-color);background-color:var(--theme-body-background);margin:0;padding:0;font-family:Helvetica Neue,Helvetica,Arial,sans-serif;font-size:14px;line-height:20px}a,a:link,a:visited,a:active,a:focus{color:var(--theme-body-text-color);text-decoration:none}img{vertical-align:middle;border:0;height:auto}",Ob=zu`
  .PageContent .PageImg[src=''],
  .PageContent .PageImg:not([src]) {
    background-image: url('${so(Sl)}');
  }

  .PageContent .PageImg.imgBroken {
    background-image: url('${so(Ml)}');
  }

  ${Cb}
  ${Sb}
  ${Ib}
  ${xb}
  ${nh}
  ${Mb}
`,Tb=(e="#MangaOnlineViewer",t=K("theme"))=>{const r=z0(t),o=mi(t),a=K("colorScheme")==="dark"?r[8]:r[2];return zu`
    :where(:root),
    ${e}, .dark,
    ${e}.dark {
      --theme-primary-color: ${t};
      --theme-primary-text-color: ${o};
      --theme-secondary-color: ${a};
      --theme-secondary-text-color: ${mi(a)};

      color-scheme: dark;
      --theme-body-background: ${kt.dark[600]};
      --theme-body-text-color: ${kt.dark[50]};
      --theme-text-color: ${kt.dark[50]};
      --theme-background-color: ${kt.dark[600]};
      --theme-hightlight-color: ${kt.dark[500]};
      --theme-border-color: ${kt.dark[400]};

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
      --theme-body-background: ${kt.gray[50]};
      --theme-body-text-color: ${kt.gray[900]};
      --theme-text-color: ${kt.gray[900]};
      --theme-background-color: ${kt.gray[50]};
      --theme-hightlight-color: ${kt.gray[500]};
      --theme-border-color: ${kt.gray[100]};

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
  `},Lb="#StartMOV{all:revert;backface-visibility:hidden;color:#fff;cursor:pointer;text-align:center;z-index:105000;background-image:linear-gradient(90deg,#667eea,#764ba2,#6b8dd6,#8e37d7);background-size:300% 100%;border:none;border-radius:10px;width:80%;min-height:50px;margin:0 auto;padding:.5rem 1rem;font-size:2rem;transition:all .4s ease-in-out;position:fixed;bottom:0;left:0;right:0;box-shadow:0 4px 15px #744fa8bf}#StartMOV:hover{background-position:100% 0;transition:all .4s ease-in-out}#StartMOV:focus{outline:none}",Ei=class extends rt{constructor(...t){super(...t),this.mangaPages=0,this.begin=1,this.timeoutMs=3e3,this.status="initial-prompt"}static{this.styles=[Kt(Lb)]}connectedCallback(){super.connectedCallback(),this.status==="initial-prompt"&&(this.timeoutId=window.setTimeout(()=>{this.handleStart()},this.timeoutMs))}disconnectedCallback(){super.disconnectedCallback(),window.clearTimeout(this.timeoutId)}handleStart(){window.clearTimeout(this.timeoutId),this.dispatchEvent(new CustomEvent("start",{detail:null}))}handleLateStart(t,r){this.dispatchEvent(new CustomEvent("start",{detail:{begin:t,end:r}}))}handleButtonCLick(){this.status="late-start-prompt"}handleDialogClose(t){t.stopPropagation(),window.clearTimeout(this.timeoutId),this.status="late-start-button"}render(){switch(this.status){case"late-start-button":return this.renderLateStartButton();case"late-start-prompt":return this.renderLateStartPrompt();default:return this.renderInitialPrompt()}}renderInitialPrompt(){return ce`
      <mov-dialog
        ?open=${this.status==="initial-prompt"}
        icon="info"
        @close=${this.handleDialogClose}
      >
        <span slot="label">${Y("STARTING")}</span>
        <div style="padding: 1rem;">${Y("WAITING")}</div>
        <div
          slot="footer"
          style="display: flex; justify-content: space-between; padding: 0.5rem 1rem 1rem;"
        >
          <mov-button
            @click=${this.handleDialogClose}
            style="--mov-color-fill-loud: ${kt.red[700]}; --mov-color-on-loud: white;"
          >
            Cancel
          </mov-button>
          <mov-button
            @click=${this.handleStart}
            style="--mov-color-fill-loud: ${kt.green[700]}; --mov-color-on-loud: white;"
          >
            Start Now
          </mov-button>
        </div>
      </mov-dialog>
    `}renderLateStartButton(){return ce`
      <button
        id="StartMOV"
        @click=${this.handleButtonCLick}
      >
        ${Y("BUTTON_START")}
      </button>
    `}renderLateStartPrompt(){let t=this.begin,r=this.mangaPages;const o=a=>{[t,r]=[a.detail.value1,a.detail.value2]};return ce`
      <mov-dialog
        ?open=${this.status==="late-start-prompt"}
        icon="question"
        @close=${this.handleDialogClose}
      >
        <span slot="label">${Y("STARTING")}</span>
        <div style="padding: 1rem;">
          ${Y("CHOOSE_BEGINNING")}
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
              data="${wo(this.mangaPages).join(", ")}"
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
            style="--mov-color-fill-loud: ${kt.red[700]}; --mov-color-on-loud: white;"
          >
            Close
          </mov-button>
          <mov-button
            @click=${()=>this.handleLateStart(t,r)}
            style="--mov-color-fill-loud: ${kt.green[700]}; --mov-color-on-loud: white;"
          >
            Run
          </mov-button>
        </div>
      </mov-dialog>
    `}};X([fe({type:Number,reflect:!0})],Ei.prototype,"mangaPages",void 0),X([fe({type:Number,reflect:!0})],Ei.prototype,"begin",void 0),X([fe({type:Number})],Ei.prototype,"timeoutMs",void 0),X([fe({type:String,reflect:!0})],Ei.prototype,"status",void 0),Ei=X([gt("script-startup")],Ei);function Rb(e){if(!e?.parentNode)return e;const t=e.cloneNode(!0);return e.parentNode.replaceChild(t,e),t}var Pb=e=>{e.getAttributeNames().forEach(t=>{e?.removeAttribute(t)})},$b=(...e)=>{e?.forEach(Pb),e?.forEach(Rb)};function zb(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var ph,La=class extends rt{constructor(...t){super(...t),this.loadMode="wait"}static{this.styles=[$t``,Kt(Ob)]}async start(t,r){this.manga&&($b(document.documentElement,document.head,document.body),window.scrollTo(0,0),Ue("manga",{...this.manga,begin:t??this.manga.begin,pages:r??this.manga.pages}),document.documentElement.setAttribute("mov",""))}firstUpdated(){this.loadMode==="always"&&this.start(),ob(),nb()}render(){const t=me("manga"),r=me("dialog");return ce`
      <style>
        ${Tb()}
      </style>
      <div
        id="MangaOnlineViewer"
        class="${Ot({[K("colorScheme")]:!0,hideControls:K("hidePageControls"),bookmarked:!!ii(),[me("device")]:!0})}"
        style="${Fn({[`padding-${K("navbar")}`]:"34px"})}"
        .locale="${K("locale")}"
      >
        ${t?ce`
              <reader-header .manga=${t}></reader-header>
              ${Ab(t)}
              <navbar-thumbnails
                      .mode=${K("navbar")}
                    ></navbar-thumbnails>
              <manga-pagination
                      .mode="${K("pagination")}"
                      .startPage=${t.begin}
                      .totalPages=${t.pages}
                      .currentPage=${me("currentPage")}
                      .next=${t.next}
                      .prev=${t.prev}
                    ></manga-pagination>
              <keybindings-panel></keybindings-panel>
              <bookmark-panel></bookmark-panel>
              <settings-panel></settings-panel>
              <moaqz-toaster dismissable></moaqz-toaster>
              </div>`:ce(ph||(ph=zb([` <script-startup
              .mangaPages="`,`"
              begin="`,`"
              initialStatus="`,`"
              @start=`,`
            ><\/script-startup>`])),this.manga?.pages,this.manga?.begin,N0(this.loadMode,[["wait",()=>"initial-prompt"],["never",()=>"late-start-button"]]),o=>{this.start(o.detail?.begin,o.detail?.end)})}
        ${r?ce`
              <mov-dialog
                open
                .icon=${r.icon}
                @close=${()=>Ue("dialog",null)}
              >
                <span slot="label">${r.title}</span>
                ${r.content} ${r.footer}
              </mov-dialog>
            `:""}
      </div>
    `}};X([fe({type:String,reflect:!0})],La.prototype,"loadMode",void 0),X([fe({type:Object})],La.prototype,"manga",void 0),La=X([gt("manga-online-viewer"),(0,ki.useStores)(St,ni,jt)],La);var Nl="@moaqzdev/toast",Nb=class ys extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static#e=3e3;parseDuration(t){if(t==="none"||Number.isInteger(t)&&t>ys.#e)return t;const r=this.getAttribute("duration");if(r){const o=Number.parseInt(r);if(!Number.isNaN(o))return o}return ys.#e}async createToast({title:t,type:r,description:o,onConfirm:a,onCancel:s,confirmText:c="✅",cancelText:h="❌",duration:u}){const f=this.shadowRoot.querySelector("#toast-tmpl").content.cloneNode(!0),p={container:f.querySelector("[data-toast]"),title:f.querySelector("[data-title]"),description:f.querySelector("[data-description]"),actions:f.querySelector("[data-actions]"),confirmBtn:f.querySelector("button[data-action-type='confirm']"),cancelBtn:f.querySelector("button[data-action-type='cancel']"),closeBtn:f.querySelector("[data-close-button]")};u=this.parseDuration(u),p.title.textContent=t||"",p.container.setAttribute("data-type",r),o==null?p.description?.remove():p.description.textContent=o;const b=()=>this.removeToast(p.container);if(r==="confirm"?(p.confirmBtn.textContent=c,p.confirmBtn.addEventListener("click",()=>{a?.(),b()},{once:!0}),p.cancelBtn.textContent=h,p.cancelBtn.addEventListener("click",()=>{s?.(),b()},{once:!0})):p.actions?.remove(),this.hasAttribute("dismissable")?p.closeBtn.addEventListener("click",b,{once:!0}):p.closeBtn?.remove(),this.shadowRoot.querySelector("[data-toaster]").appendChild(f),u!=="none"){const w=new AbortController,m=Date.now();let v=null,E=0;const y=()=>{w.abort(),b()};let S=setTimeout(y,u);const x=()=>{v??(clearTimeout(S),v=Date.now())},T=()=>{v!=null&&(E=v-m,v=null,S=setTimeout(y,Math.max(u-E,0)))};["focusin","pointerenter","mouseenter"].forEach(L=>{p.container.addEventListener(L,x,{signal:w.signal})}),["focusout","pointerleave","mouseleave"].forEach(L=>{p.container.addEventListener(L,T,{signal:w.signal})})}}removeToast(t){t.animate([{opacity:1},{opacity:0}],{duration:300,easing:"ease",fill:"forwards"}).finished.then(()=>t.remove())}handleEvent(t){if(t instanceof CustomEvent&&t.type===Nl){const r=t.detail;this.createToast(r)}}connectedCallback(){this.render(),document.addEventListener(Nl,this)}disconnectedCallback(){document.removeEventListener(Nl,this)}render(){this.shadowRoot.innerHTML=`
    <style>${ys.STYLES}</style>

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
  }`};customElements.define("moaqz-toaster",Nb);var Db=`/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */
html{-webkit-text-size-adjust:100%;line-height:1.15}body{margin:0}main{display:block}h1{margin:.67em 0;font-size:2em}hr{box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace;font-size:1em}a{background-color:#0000}abbr[title]{border-bottom:none;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace;font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}img{border-style:none}button,input,optgroup,select,textarea{margin:0;font-family:inherit;font-size:100%;line-height:1.15}button,input{overflow:visible}button,select{text-transform:none}button,[type=button],[type=reset],[type=submit]{-webkit-appearance:button}button::-moz-focus-inner{border-style:none;padding:0}[type=button]::-moz-focus-inner{border-style:none;padding:0}[type=reset]::-moz-focus-inner{border-style:none;padding:0}[type=submit]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring{outline:1px dotted buttontext}[type=button]:-moz-focusring{outline:1px dotted buttontext}[type=reset]:-moz-focusring{outline:1px dotted buttontext}[type=submit]:-moz-focusring{outline:1px dotted buttontext}fieldset{padding:.35em .75em .625em}legend{box-sizing:border-box;color:inherit;white-space:normal;max-width:100%;padding:0;display:table}progress{vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button{height:auto}[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details{display:block}summary{display:list-item}template,[hidden]{display:none}`,Bb="#nprogress{pointer-events:none}#nprogress .bar{z-index:1031;background:#29d;width:100%;height:2px;position:fixed;top:0;left:0}#nprogress .peg{opacity:1;width:100px;height:100%;display:block;position:absolute;right:0;transform:rotate(3deg)translateY(-4px);box-shadow:0 0 10px #29d,0 0 5px #29d}#nprogress .spinner{z-index:1031;display:block;position:fixed;top:15px;right:15px}#nprogress .spinner-icon{box-sizing:border-box;border:2px solid #0000;border-color:#29d #0000 #0000 #29d;border-radius:50%;width:18px;height:18px;animation:.4s linear infinite nprogress-spinner}.nprogress-custom-parent{position:relative;overflow:hidden}.nprogress-custom-parent #nprogress .spinner,.nprogress-custom-parent #nprogress .bar{position:absolute}@-webkit-keyframes nprogress-spinner{0%{-webkit-transform:rotate(0)}to{-webkit-transform:rotate(360deg)}}@keyframes nprogress-spinner{0%{transform:rotate(0)}to{transform:rotate(360deg)}}",Fb="#nprogress .bar{z-index:1031;background:#29d;width:100%;height:4px;position:fixed;top:0;left:0}html[mov] body>:not(manga-online-viewer,#nprogress){display:none!important}html[mov]{all:unset;font-size:16px}",Hb=[Db,Bb,Fb].join(`
`);async function gh([e,t]){Ee(`Found Pages: ${t.pages} in ${e?.name}`),t.title||(t.title=document.querySelector("title")?.textContent?.trim()),t.begin=ii()??t.begin??1,t.before!==void 0&&(mn("Executing Preparation"),await t.before(t.begin??0)),document.head.innerHTML+=L3("externals",Hb);const r=document.createElement("manga-online-viewer");r.loadMode=e?.start??K("loadMode"),r.manga=t,document.body.appendChild(r)}async function Gb(e){if(Ee(`Starting ${ks.script.name} ${ks.script.version} on ${Bi()} ${d2()} with ${h2()}`),cm())return;Ee(e.length,"Known Manga Sites:",e);const t=e.filter(o=>o.url.test(window.location.href));Ee(t.length,"Found sites:",t);const r=t.map(async o=>{Ee(`Testing site: ${o.name}`),await b2(o);const a=await o.run();if(a.pages>0)return[o,a];throw new Error(`${o.name} found ${a.pages} pages`)});try{gh(await Promise.any(r))}catch(o){if(o instanceof AggregateError){Ee("All sites failed to run:");for(const a of o.errors)Ee(a.message)}else Ee("An unexpected error occurred:",o)}}var Ub={eq:(e,t)=>e.textContent?.trim()===t,starts:(e,t)=>!!e.textContent?.trim()?.startsWith(t),ends:(e,t)=>!!e.textContent?.trim()?.endsWith(t)};function mh(e,t,r){const o=Ub[r];if(!o)throw new Error(`Invalid matcherKey: ${r}`);return[...document.querySelectorAll(e)].filter(a=>Array.isArray(t)?t.some(s=>o(a,s)):o(a,t))}function vh(e,t,r){return mh(e,t,r)?.[0]}function Dl(e,t,r,o="a"){return vh(e,t,r)?.closest(o)??null}var bh=(e,t)=>mh(e,t,"eq"),Wb=(e,t)=>vh(e,t,"starts"),Wr=(e,t,r="a")=>Dl(e,t,"eq",r),Vb=(e,t,r="a")=>Dl(e,t,"starts",r),Zb=(e,t,r="a")=>Dl(e,t,"ends",r),qb={name:"Asura Scans",url:/https?:\/\/(www.)?(asuracomic).(net)\/.+/,homepage:"https://asuracomic.net/",language:[ze.ENGLISH],category:Be.MANGA,waitEle:'img[alt*="chapter"]',waitTime:2e3,run(){const e=[...document.querySelectorAll('img[alt*="chapter"]')],t=Wb("p","All chapters are in");return{title:t?.previousSibling?.textContent?.trim(),series:t?.querySelector("a")?.getAttribute("href"),pages:e.length,prev:Wr("h2","Prev","a")?.getAttribute("href"),next:Wr("h2","Next","a")?.getAttribute("href"),listImages:e.map(r=>r.getAttribute("src")??""),async before(){document.querySelectorAll("button.absolute").forEach(r=>{r.dispatchEvent(new Event("click",{bubbles:!0}))}),await v2(1e3)}}}},jb={name:"Batoto",url:/https?:\/\/(?:www\.)?(?:fto|jto|hto|dto|mto|wto|bato|battwo|batotwo|comiko|batocomic|readtoto|zbato|xbato|mangatoto)\.(?:to|com|net|org)\/(chapter|title).*/,homepage:"https://rentry.co/batoto",language:[ze.ENGLISH],category:Be.MANGA,waitEle:'div[name="image-item"] img, .page-img',run(){if(window.location.pathname.startsWith("/title")){window.location.search!=="?load=2"&&(window.location.search="?load=2");const t=[...document.querySelectorAll('div[name="image-item"] img')];return{title:document.querySelector("h6")?.textContent?.trim(),series:document.querySelector("h3 a")?.getAttribute("href"),pages:t.length,prev:Zb("span","Prev Chapter","a")?.getAttribute("href"),next:Vb("span","Next Chapter","a")?.getAttribute("href"),listImages:t.map(r=>r.getAttribute("src")??"")}}const e=[...document.querySelectorAll(".page-img")];return{title:document.querySelector(".nav-title a")?.textContent?.trim(),series:document.querySelector(".nav-title a")?.getAttribute("href"),pages:e.length,prev:document.querySelector(".nav-prev a")?.getAttribute("href"),next:document.querySelector(".nav-next a")?.getAttribute("href"),listImages:e.map(t=>t.getAttribute("src")??"")}}},Kb={name:"BilibiliComics",url:/https?:\/\/(www\.)?(bilibilicomics).net\/episode\/.+/,homepage:"https://www.bilibilicomics.net/",language:[ze.ENGLISH],category:Be.MANGA,waitEle:"#__NUXT_DATA__",async run(){const e=JSON.parse(document.querySelector("#__NUXT_DATA__")?.innerHTML??"").filter(t=>typeof t=="string"&&/.(png|jpg|jpeg|gif|bmp|webp)$/i.exec(t));return{title:document.querySelector(".chapterTitle")?.textContent?.trim(),series:document.querySelector(".book-name")?.getAttribute("href"),pages:e.length,prev:document.querySelectorAll(".pre-next-btns").item(0)?.getAttribute("href"),next:document.querySelectorAll(".pre-next-btns").item(2)?.getAttribute("href"),listImages:e.map(t=>`https://static.comicfans.io/${t}`)}}},Yb={name:"Comick",url:/https?:\/\/(www\.)?comick.io\/.+/,homepage:"https://comick.io/",language:[ze.ENGLISH],category:Be.MANGA,waitFunc(){return/\/([^/]+)-chapter.+$/.test(window.location.pathname)},waitEle:"#__NEXT_DATA__",waitTime:3e3,run(){const e=JSON.parse(document.getElementById("__NEXT_DATA__")?.innerHTML??"")?.props?.pageProps,t=e?.chapter?.md_images?.map(r=>`https://meo.comick.pictures/${r?.b2key}`);return{title:e?.seoTitle??`${e.chapter?.md_comics?.title} ${e?.chapter?.chap}`,series:`/comic/${e?.chapter?.md_comics?.slug}`,pages:t?.length,prev:e?.prev?.href,next:e?.next?.href,listImages:t}}},Xb={name:"Comix.to",homepage:"https://comix.to/",url:/https?:\/\/comix\.to\/(title|comic)\/.+\/.+/,language:ze.ENGLISH,category:Be.COMIC,run:()=>{const e=[...document.querySelectorAll("script")].find(o=>o.textContent?.includes("self.__next_f.push")&&o.textContent?.includes("images"))?.textContent||"",t=e.substring(e.indexOf('"')+3,e.lastIndexOf('"')-2),r=JSON.parse(t.replaceAll("\\",""))[3].chapter.images.map(o=>o.url);return{title:document.querySelector("h1.page-title")?.textContent?.trim(),series:document.querySelector('.breadcrumbs a[href*="/title/"], .breadcrumbs a[href*="/comic/"]')?.getAttribute("href"),pages:r.length,prev:document.querySelector("a.prev-chapter")?.getAttribute("href"),next:document.querySelector("a.next-chapter")?.getAttribute("href"),listImages:r}}},Jb={name:"Dynasty-Scans",url:/https?:\/\/(www\.)?dynasty-scans.com\/chapters\/.+/,homepage:"https://dynasty-scans.com/",language:[ze.ENGLISH],category:Be.MANGA,run(){return{title:document.querySelector("#chapter-title")?.textContent?.trim(),series:document.querySelector("#chapter-title a")?.getAttribute("href"),pages:unsafeWindow.pages.length,prev:document.querySelector("#prev_link")?.getAttribute("href"),next:document.querySelector("#next_link")?.getAttribute("href"),listImages:unsafeWindow.pages.map(e=>e.image)}}},Qb={name:"Flame Comics",url:/https?:\/\/(www.)?(flamecomics).(xyz)\/series\/.+/,homepage:"https://flamecomics.xyz/",language:[ze.ENGLISH],category:Be.MANGA,run(){const e="https://cdn.flamecomics.xyz/uploads/images/series",t=JSON.parse(document.getElementById("__NEXT_DATA__")?.innerHTML??""),r=t?.props?.pageProps?.chapter,o=Object.keys(r?.images).map(a=>`${e}/${r?.series_id}/${r?.token}/${r?.images?.[a]?.name}?${r?.unix_timestamp}`);return{title:`${r?.title} ${r?.chapter}`,series:`../${r?.series_id}`,pages:o.length,prev:t?.props?.pageProps?.previous,next:t?.props?.pageProps?.next,listImages:o}}},e9={name:["FoOlSlide","Kireicake"],url:/^(?!.*jaiminisbox).*\/read\/.+/,homepage:["https://github.com/saintly2k/FoOlSlideX","https://reader.kireicake.com"],language:[ze.ENGLISH],obs:"Any Site that uses FoOLSlide",category:Be.MANGA,waitEle:"img.open",run(){const e=[...document.querySelectorAll(".topbar_left .dropdown_parent:last-of-type li")],t=e.findIndex(c=>{const h=c.querySelector("a")?.getAttribute("href");return h?window.location.href.startsWith(h):!1}),r=[...document.querySelectorAll(".topbar_right .dropdown li")],o=[...document.querySelectorAll(".inner img:not(.open)")],a=o.length>1?o.length:r.length,s={title:e.at(t)?.querySelector("a")?.textContent?.trim()??document.querySelector("title")?.textContent?.trim(),series:document.querySelector("div.tbtitle div.text a")?.getAttribute("href"),pages:a,prev:e.at(t+1)?.querySelector("a")?.getAttribute("href"),next:e.at(t-1)?.querySelector("a")?.getAttribute("href")};return o.length>1?{...s,listImages:o.map(c=>c.getAttribute("src")??"")}:{...s,listPages:Array(a).fill(0).map((c,h)=>`${window.location.href.replace(/\/\d+$/,"")}/${h+1}`),img:"img.open"}}},t9={name:["Ikigai Mangas - EltaNews","Ikigai Mangas - Ajaco"],url:/https?:\/\/(visorikigai|visualikigai).(ajaco|eltanews|foodib|jobswu).(com|net|site)\/capitulo\/\d+/,homepage:["https://visorikigai.eltanews.com/","https://visorikigai.ajaco.net/"],language:[ze.SPANISH],category:Be.MANGA,run(){const e=document.querySelector('script[type="qwik/json"]')?.textContent?.match(/http[^'"]+webp/gi)??[];return{title:document.querySelector("title")?.text.replace(" — Manga en línea | MangaOni",""),pages:e?.length,prev:Wr("span","Siguiente")?.getAttribute("href"),next:Wr("span","Anterior")?.getAttribute("href"),listImages:e}}},n9=e=>new Promise(t=>setTimeout(t,e));async function r9(e){const t=document.querySelector(".reader-content"),r=new Set,o=2e3,a=200;if(!t)return console.error("Error: '.reader-content' container not found."),[];let s=0;for(;r.size<e&&s<a;){t.scrollTop+=o,s++,await n9(300);const c=document.querySelectorAll(".reader-page img");for(const h of c){const u=h.getAttribute("src");u&&u.length>0&&r.add(u)}if(console.log(`Attempt ${s}: Collected ${r.size} of ${e} sources.`),t.scrollHeight-t.clientHeight<=t.scrollTop&&r.size<e){console.warn(`Reached end of scrollable content. Stopping with ${r.size} sources.`);break}}return Array.from(r)}var i9={name:"Kagane",homepage:"https://kagane.org/",url:/https:\/\/(www\.)?kagane\.org\/series\/.+\/reader\/.+/,language:ze.ENGLISH,category:Be.MANGA,waitEle:".reader-page img",async run(){const e=window.location.href,t=e.match(/series\/([^/]+)/)?.[1],r=e.match(/reader\/([^/]+)/)?.[1],o=localStorage.getItem("rsch_did"),a={};o&&(a["X-Rsch-Did"]=o);const s=await fetch(`https://api.kagane.org/api/v1/series/${t}`,{headers:a}).then(b=>b.json()),c=(await fetch(`https://api.kagane.org/api/v1/books/${t}`,{headers:a}).then(b=>b.json())).data.content,h=c.find(b=>b.id===r),u=c.findIndex(b=>b.id===r),f=c[u+1],p=c[u-1];return{title:`${s.data.name} - ${h?.metadata?.title}`,series:`/series/${t}`,pages:h?.media?.pagesCount??0,prev:f?`/series/${t}/books/${f.id}`:void 0,next:p?`/series/${t}/books/${p.id}`:void 0,listImages:await r9(h?.media?.pagesCount??0)}}},o9={name:"KuManga",url:/https?:\/\/(www\.)?kumanga.com\/manga\/leer\/.+/,homepage:"https://www.kumanga.com/",language:[ze.SPANISH],category:Be.MANGA,run(){const e=document.querySelectorAll("select").item(1).querySelector("option[selected]");return{title:document.querySelector("title")?.textContent?.trim(),series:document.querySelector("h2 a")?.getAttribute("href"),pages:unsafeWindow.pUrl.length,prev:`/manga/leer/${e?.previousElementSibling?.getAttribute("value")}`,next:`/manga/leer/${e?.nextElementSibling?.getAttribute("value")}`,listImages:unsafeWindow.pUrl.map(t=>t.imgURL)}}},a9={name:"LeerCapitulo",url:/https?:\/\/(www.)?leercapitulo.co\/leer\/.+/,homepage:"https://www.leercapitulo.co/",language:[ze.SPANISH],category:Be.MANGA,waitEle:"#page_select",run(){const e=[...document.querySelectorAll("#page_select option")].map(t=>t.getAttribute("value")??"");return{title:document.querySelector("h1")?.textContent?.trim(),series:document.querySelector(".chapter-title a")?.getAttribute("href"),pages:e.length,prev:document.querySelector(".pre")?.getAttribute("href"),next:document.querySelector(".next")?.getAttribute("href"),listImages:e}}},s9={name:"LHTranslation",url:/https?:\/\/(www\.)?lhtranslation.net\/read.+/,homepage:"https://lhtranslation.net/",language:[ze.ENGLISH],category:Be.MANGA,run(){const e=document.querySelector(".form-control option:checked"),t=[...document.querySelectorAll("img.chapter-img")];return{title:document.querySelector(".chapter-img.tieude font")?.textContent?.trim(),series:document.querySelector(".navbar-brand.manga-name")?.getAttribute("href"),pages:t.length,prev:e?.nextElementSibling?.getAttribute("value"),next:e?.previousElementSibling?.getAttribute("value"),listImages:t.map(r=>r.getAttribute("src")??"")}}},l9={name:"M440",url:/https?:\/\/(www\.)?m440.in\/manga\/.+\/.+\/\d+/,homepage:"https://m440.in/",language:[ze.SPANISH],category:Be.MANGA,run(){const e=[...document.querySelectorAll("#all img")],t=document.querySelector("#chapter-list li.active");return{title:document.querySelector("title")?.textContent?.trim(),series:document.querySelector("#navbar-collapse-1 ul:nth-child(2) a")?.getAttribute("href"),pages:e.length,prev:t?.nextElementSibling?.firstElementChild?.getAttribute("href"),next:t?.previousElementSibling?.firstElementChild?.getAttribute("href"),listImages:e.map(r=>r.getAttribute("data-src")??"")}}},wh=/^([\t\n])*(https?:\/\/)?.+\.(jpg|jpeg|png|gif|bmp|webp).*$/;function _h(){return[...document.querySelectorAll(".wp-manga-chapter-img, .blocks-gallery-item img, .reading-content img, #chapter-images img, #chapterContent img")].map(e=>{const t=[...e.attributes].filter(r=>/.*(src|url).*/i.test(r.name)&&!/^.*(blank|lazy|loading).*$/.test(r.value));return t.length===0?"":t.find(r=>wh.test(r.value))?.value??e?.getAttribute("src")??""})}var c9={name:["Madara WordPress Plugin","MangaHaus","Isekai Scan","Comic Kiba","Zinmanga","mangatx","Toonily","Mngazuki","JaiminisBox","DisasterScans","ManhuaPlus","TopManhua","NovelMic","Reset-Scans","LeviatanScans","Dragon Tea","SetsuScans","ToonGod","Hades Scans"],url:/https?:\/\/.+\/(manga|series|manhua|comic|ch|novel|webtoon|tmo)\/.+\/.+/,homepage:["https://mangabooth.com/","https://manhuaus.com","https://isekaiscan.com/","https://comickiba.com/","https://zinmanga.com/","https://mangatx.com/","https://toonily.net/","https://mangazuki.me/","https://jaiminisbox.net","https://disasterscans.com/","https://manhuaplus.org/","https://www.topmanhua.com/","https://novelmic.com/","https://reset-scans.com/","https://leviatanscans.com/","https://dragontea.ink/","https://setsuscans.com/","https://toongod.org/home/","https://lectorhades.latamtoon.com"],language:[ze.ENGLISH],obs:"Any Site that uses Madara WordPress Plugin",category:Be.MANGA,waitFunc:()=>{const e=_h();return e.length>0&&e.every(t=>t&&wh.test(t))},run(){const e=_h();return{title:document.querySelector("#chapter-heading")?.textContent?.trim(),series:(document.querySelector(".breadcrumb li:nth-child(3) a")??document.querySelector(".breadcrumb li:nth-child(2) a"))?.getAttribute("href"),pages:e.length,prev:document.querySelector(".prev_page")?.getAttribute("href"),next:document.querySelector(".next_page")?.getAttribute("href"),listImages:e}}},u9={name:"MangaBall",homepage:"https://mangaball.net/",url:/https?:\/\/mangaball\.net\/chapter-detail\/.+/,language:ze.ENGLISH,category:Be.MANGA,run:async()=>{const e=[...document.querySelectorAll("script")].find(f=>f.textContent?.includes("chapterImages"))?.textContent;if(!e)return{title:document.querySelector("h1")?.textContent?.trim(),series:document.querySelector('a[href*="/title-detail/"]')?.getAttribute("href")??document.querySelector('a[href*="/manga-detail/"]')?.getAttribute("href"),pages:0,listImages:[]};const t=e.match(/titleId\s*=\s*[`'"](.+?)[`'"]/)?.[1],r=e.match(/chapterNumber\s*=\s*[`'"](.+?)[`'"]/)?.[1],o=e.match(/chapterVolume\s*=\s*[`'"](.+?)[`'"]/)?.[1],a=e.match(/chapterLanguage\s*=\s*[`'"](.+?)[`'"]/)?.[1],s=JSON.parse(e.match(/chapterImages\s*=\s*JSON\.parse\(\s*[`'"](.+?)[`'"]\s*\)/)?.[1]??e.match(/chapterImages\s*=.*(\[.*?\])/)?.[1]??"[]"),c=document.querySelector('meta[name="csrf-token"]')?.getAttribute("content")||"",h=((await(await fetch("/api/v1/chapter/chapter-listing-by-title-id/",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded","X-CSRF-TOKEN":c},body:`title_id=${t}&lang=${a}`})).json()).ALL_CHAPTERS||[]).sort((f,p)=>p.number_float-f.number_float),u=f=>{const p=parseFloat(r||"0"),b=h.findIndex(E=>E.number_float===p);if(b===-1)return;const w=f==="next"?-1:1,m=b+w,v=String(o);for(let E=m;E>=0&&E<h.length;E+=w){const y=h[E].translations.find(S=>S.language===a&&String(S.volume)===v);if(y)return y.url}};return{title:document.querySelector("h1")?.textContent?.trim(),series:document.querySelector(`a[href*="${t}"]`)?.getAttribute("href")??document.querySelector('a[href*="/title-detail/"]')?.getAttribute("href")??document.querySelector('a[href*="/manga-detail/"]')?.getAttribute("href"),pages:s.length,prev:u("prev"),next:u("next"),listImages:s}}},d9={name:"MangaBuddy",url:/https?:\/\/(www\.)?mangabuddy.com\/.+\/chapter.+/,homepage:"https://mangabuddy.com/",language:[ze.ENGLISH],category:Be.MANGA,waitVar:"chapImages",run(){const e=unsafeWindow.chapImages.split(",").map(t=>new URL(t).pathname.replace("/res/","https://sb.mbcdn.xyz/"));return{title:document.querySelector(".chapter-info")?.textContent?.trim(),series:document.querySelector("#breadcrumbs-container div:nth-child(2) a")?.getAttribute("href"),pages:e.length,prev:document.querySelector("a.prev")?.getAttribute("href"),next:document.querySelector("a.next")?.getAttribute("href"),listImages:e}}},h9={name:"MangaDex",url:/https?:\/\/(www\.)?mangadex.org/,homepage:"https://mangadex.org/",language:[ze.ENGLISH],category:Be.MANGA,waitEle:"#chapter-selector a",async run(){const e=`https://api.mangadex.org/at-home/server/${/\/chapter\/([^/]+)(\/\d+)?/.exec(window.location.pathname)?.at(1)}`,t=await fetch(e).then(async a=>a.json()),r=t.chapter.data,o=document.querySelectorAll("#chapter-selector a");return{title:document.querySelector("title")?.text.replace(" - MangaDex",""),series:document.querySelector("a.text-primary[href^='/title/']")?.getAttribute("href"),pages:r.length,prev:o?.item(0)?.getAttribute("href"),next:o?.item(1)?.getAttribute("href"),listImages:r.map(a=>`${t.baseUrl}/data/${t.chapter.hash}/${a}`)}}},f9={name:["MangaFox","MangaHere"],url:/https?:\/\/(www\.)?(fanfox.net|mangahere.cc)\/manga\/.+\/.+\//,homepage:["https://fanfox.net/","https://www.mangahere.cc/"],language:[ze.ENGLISH],category:Be.MANGA,waitVar:"chapterid",async run(){const e=document.querySelector("#dm5_key")?.getAttribute("value"),t={method:"GET",headers:{"Content-Type":"text/plain"}},r=Array(unsafeWindow.imagecount).fill(0).map(async(a,s)=>{const c=`chapterfun.ashx?cid=${unsafeWindow.chapterid??unsafeWindow.chapter_id}&page=${s}&key=${e}`,h=await fetch(c,t).then(async u=>u.text());return(0,eval)(h),d}),o=await Promise.all(r);return{title:document.querySelector(".reader-header-title div")?.textContent?.trim(),series:document.querySelector(".reader-header-title a")?.getAttribute("href"),pages:unsafeWindow.imagecount,prev:unsafeWindow.prechapterurl,next:unsafeWindow.nextchapterurl,listImages:o.map((a,s)=>a[s===0?0:1])}}},p9={name:"Mangago",url:/https?:\/\/(www\.)?mangago.me\/.*\/.*\/.*/,homepage:"https://www.mangago.me/",language:[ze.ENGLISH],category:Be.MANGA,waitVar:"imgsrcs",run(){const e=CryptoJS.enc.Hex.parse("e11adc3949ba59abbe56e057f20f883e"),t={iv:CryptoJS.enc.Hex.parse("1234567890abcdef1234567890abcdef"),padding:CryptoJS.pad.ZeroPadding},r=CryptoJS.AES.decrypt(unsafeWindow.imgsrcs,e,t).toString(CryptoJS.enc.Utf8).split(",");return{title:`${unsafeWindow.manga_name} ${unsafeWindow.chapter_name}`,series:unsafeWindow.mid,pages:unsafeWindow.total_pages,prev:document.querySelector(".recom p:nth-child(5) a")?.getAttribute("href"),next:unsafeWindow.next_c_url,listImages:r,before(){r.some(o=>o==="")&&document.querySelector("#nform")?.submit()}}}},g9={name:"MangaHub",url:/https?:\/\/(www\.)?(mangahub).io\/chapter\/.+\/.+/,homepage:"https://mangahub.io/",language:[ze.ENGLISH],category:Be.MANGA,waitEle:"#select-chapter",async run(){function e(s){const c=new RegExp(`${s}=([^;]+)`).exec(document.cookie);return c!=null?decodeURIComponent(c[1]):null}const t={query:`{chapter(x:m01,slug:"${unsafeWindow.CURRENT_MANGA_SLUG??window.location.pathname.split("/")[2]}",number:${window.location.pathname.split("/")[3].replace("chapter-","")}){pages}}`},r={method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json","x-mhub-access":e("mhub_access")??""}},o=await fetch("https://api.mghcdn.com/graphql",r).then(async s=>s.json()),a=JSON.parse(o?.data.chapter.pages.toString());return{title:document.querySelector("#mangareader h3")?.textContent?.trim(),series:document.querySelector("#mangareader a")?.getAttribute("href"),pages:a.i.length,prev:document.querySelector(".previous a")?.getAttribute("href"),next:document.querySelector(".next a")?.getAttribute("href"),listImages:a.i.map(s=>`https://imgx.mghcdn.com/${a.p+s}`)}}},m9={name:["MangaKakalot","NeloManga ","MangaNato","NatoManga","MangaBats"],url:/https?:\/\/(www\.)?(read|chap)?(nelomanga|mangakakalot|natomanga|manganato|mangabats|mangakakalove).(com|gg|net).*\/(chapter|manga)\/.+\/.+/,homepage:["https://mangakakalot.gg/","https://www.nelomanga.com/","https://www.manganato.gg/","https://www.natomanga.com/","https://www.mangabats.com/"],language:[ze.ENGLISH],category:Be.MANGA,waitEle:".navi-change-chapter-btn-prev, .next, .navi-change-chapter-btn-next, .back",run(){const e=[...document.querySelectorAll("#vungdoc img, .container-chapter-reader img")];return{title:document.querySelector(".info-top-chapter h2, .imageOptions-chapter-info-top h1, .panel-chapter-info-top h1")?.textContent?.trim(),series:document.querySelectorAll("span a[title]").item(1).getAttribute("href"),pages:e.length,prev:document.querySelector(".navi-change-chapter-btn-prev, .next")?.getAttribute("href"),next:document.querySelector(".navi-change-chapter-btn-next, .back")?.getAttribute("href"),listImages:e.map(t=>t.getAttribute("src")??"")}}},v9={name:"MangaOni",url:/https?:\/\/(www\.)?manga-oni.com\/lector\/.+\/\d+\/cascada/,homepage:"https://manga-oni.com/",language:[ze.SPANISH],category:Be.MANGA,run(){document.querySelector("#c_list")?.dispatchEvent(new Event("mouseover"));const e=document.querySelector("#c_list option:checked"),t=[...document.querySelectorAll("#slider img")];return{title:document.querySelector("title")?.text.replace(" — Manga en línea | MangaOni",""),pages:t?.length,prev:e?.nextElementSibling?.getAttribute("value"),next:e?.previousElementSibling?.getAttribute("value"),listImages:t.map(r=>r.getAttribute("data-src")??r.getAttribute("src")??"")}}},b9={name:"MangaPark",url:/https?:\/\/(www\.)?(mangapark|mpark|comicpark|readpark|parkmanga).(com|me|org|net|io|to)\/title\/.+\/.+/,homepage:"https://mangapark.net/",language:[ze.ENGLISH],category:Be.MANGA,waitEle:"main div div a.btn-primary",run(){const e=[...document.querySelectorAll("main div div > img.w-full")];return{title:[...document.querySelectorAll(".comic-detail h3 a, .comic-detail h6 span")].map(t=>t.textContent?.trim()).join(" "),series:document.querySelector(".comic-detail a")?.getAttribute("href"),pages:e.length,prev:document.querySelectorAll("main div div a.btn-primary")?.item(0)?.getAttribute("href"),next:document.querySelectorAll("main div div a.btn-primary")?.item(1)?.getAttribute("href"),listImages:e.map(t=>t.getAttribute("src")??"")}}},w9={name:"MangaReader",url:/https?:\/\/(www\.)?mangareader.to\/read\/.+\/.+\/.+/,homepage:"https://mangareader.to",language:[ze.ENGLISH],category:Be.MANGA,obs:"Some galleries will not be usable",waitEle:".ds-image, .iv-card",async run(){const e=document.querySelector(".chapter-item.active"),t=[...document.querySelectorAll(".ds-image[data-url], .iv-card[data-url]")].map(async r=>{const o=r.getAttribute("data-url")??"";return o&&r.classList.contains("shuffled")?(await imgReverser(o)).toDataURL():o});return{title:document.querySelector(".hr-manga h2")?.textContent?.trim(),series:document.querySelector(".hr-manga")?.getAttribute("href"),pages:t.length,prev:e?.nextElementSibling?.querySelector("a")?.getAttribute("href"),next:e?.previousElementSibling?.querySelector("a")?.getAttribute("href"),listImages:await Promise.all(t)}}},_9={name:["MangaStream WordPress Plugin","Realm Oasis","Voids-Scans","Luminous Scans","Shimada Scans","Night Scans","Manhwa-Freak","OzulScansEn","CypherScans","MangaGalaxy","LuaScans","Drake Scans","Rizzfables","NovatoScans","TresDaos","Lectormiau","NTRGod","Threedaos"],url:/https?:\/\/[^/]*(scans?|comic|realm|rizz|hivetoon|tresdaos|zonamiau|ntrgod|threedaos)[^/]*\/.+/,homepage:["https://themesia.com/mangastream-wordpress-theme/","https://realmoasis.com/","https://void-scans.com/","https://luminous-scans.com/","https://shimadascans.com/","https://night-scans.com/","https://freakcomic.com/","https://ozulscansen.com/","https://cypherscans.xyz/","https://mangagalaxy.me/","https://luascans.com/","https://drake-scans.com/","https://rizzfables.com/","https://www.novatoscans.top/","https://tresdaos.com","https://zonamiau.com/","https://ntrgod.com/","https://threedaos.zdrz.xyz/"],language:[ze.ENGLISH,ze.SPANISH],category:Be.MANGA,waitEle:':where(#readerarea, .check-box, #viewer-img) img:not(.asurascans):not([src*="loader"]):not([src*="chevron"]),:where(.nextprev, .inner_nPL)',run(){const e=[...document.querySelectorAll(this.waitEle??"")];return{title:document.querySelector("title")?.textContent?.trim(),series:document.querySelector(":where(.allc, .tac) a")?.getAttribute("href")??document.querySelectorAll('[class*="breadcrumb"] a').item(1)?.getAttribute("href"),pages:e.length,prev:bh(":where(.nextprev, .inner_nPL) a",["Prev","Anterior"])?.[0]?.getAttribute("href"),next:bh(":where(.nextprev, .inner_nPL) a",["Next","Siguiente"])?.[0]?.getAttribute("href"),listImages:e.map(t=>t.getAttribute("data-src")??t.getAttribute("data-lazy-src")??t.getAttribute("src")??"")}}},y9={name:"MangaToons",url:/https?:\/\/.*mangatoon.mobi\/.+\/watch\/.+/,homepage:"https://mangatoon.mobi/",language:[ze.ENGLISH],category:Be.MANGA,waitEle:".pictures img:not(.cover)",run(){const e=[...document.querySelectorAll(".pictures img:not(.cover)")];return{title:document.querySelector("title")?.textContent?.trim(),series:document.querySelector(".top-left a")?.getAttribute("href"),pages:e.length,prev:document.querySelector(".page-icons-prev")?.getAttribute("href"),next:document.querySelector(".page-icons-next")?.getAttribute("href"),listImages:e.map(t=>t.getAttribute("data-src")??"")}}},k9={name:"MangaTown",url:/https?:\/\/www\.mangatown\.com\/manga\/.+\/.+\//,homepage:"https://www.mangatown.com/",language:[ze.ENGLISH],category:Be.MANGA,waitEle:"div.page_select select option, .read_img .image",run(){const e=document.querySelector("div.page_select select")?.querySelectorAll("option"),t=[...document.querySelectorAll(".read_img .image")].map(o=>o.getAttribute("src")??""),r=[...e??[]].map(o=>o.value).filter(o=>!o.endsWith("featured.html")).map(o=>new URL(o,window.location.href).href);return{title:document.querySelector("div.title h1")?.textContent?.trim(),series:document.querySelector("div.title a")?.getAttribute("href"),pages:unsafeWindow.total_pages||r.length,prev:document.querySelector(".chapter_select option:checked")?.previousElementSibling?.getAttribute("value"),next:document.querySelector(".chapter_select option:checked")?.nextElementSibling?.getAttribute("value"),...t.length>1?{listImages:t}:{listPages:r,img:"#image"}}}},E9={name:"ManhwaWeb",url:/https?:\/\/(www\.)?manhwaweb.com\/leer\/.+/,homepage:"https://manhwaweb.com/",language:[ze.SPANISH],category:Be.MANGA,async run(){const e=window.location.pathname.replace("/leer",""),t=await fetch(`https://manhwawebbackend-production.up.railway.app/chapters/see${e}`).then(async o=>o.json()),r=await fetch(`https://manhwawebbackend-production.up.railway.app/chapters/seeprevpost${e}`).then(async o=>o.json());return{title:`${t.name} ${t.chapter.chapter}`,series:[...document.querySelectorAll("div")].filter(o=>o.textContent==="Episodios")?.[0]?.parentElement?.getAttribute("href"),pages:t.chapter.img.length,prev:r.chapterAnterior.replace(t._id,t.real_id),next:r.chapterSiguiente.replace(t._id,t.real_id),listImages:t.chapter.img}}},A9={name:["MangaGeko.com","MangaGeko.cc"],url:/https?:\/\/(www\.)?mgeko.(com|cc)?\/reader\/.*/,homepage:["https://www.mgeko.com/","https://www.mgeko.cc/"],language:[ze.ENGLISH],category:Be.MANGA,run(){const e=[...document.querySelectorAll('img[id^="image-"]')];return{title:document.querySelector(".titles")?.textContent?.trim(),series:document.querySelector(".titles a")?.getAttribute("href"),pages:e.length,prev:document.querySelector(".chnav.prev:not(.isDisabled)")?.getAttribute("href"),next:document.querySelector(".chnav.next:not(.isDisabled)")?.getAttribute("href"),listImages:e.map(t=>t.getAttribute("src")??"")}}},S9={name:"NineAnime",url:/https?:\/\/(www\.)?nineanime.com\/chapter\/.+/,homepage:"https://www.nineanime.com/",language:[ze.ENGLISH],category:Be.MANGA,run(){const e=[...document.querySelectorAll(".sl-page option")],t=document.querySelector(".mangaread-pagenav select option[selected]");return{title:`${document.querySelector(".title h1")?.textContent?.trim()}/${document.querySelector(".title h2")?.textContent?.trim()}`,series:document.querySelector(".title a:has(h2)")?.getAttribute("href"),pages:e.length,prev:t?.nextElementSibling?.getAttribute("value"),next:t?.previousElementSibling?.getAttribute("value"),listPages:e.map(r=>r.getAttribute("value")??""),img:".manga_pic"}}},M9={name:"OlympusBiblioteca",url:/https?:\/\/(www\.)?olympusbiblioteca.com\/capitulo\/\d+\/.+/,homepage:"https://olympusbiblioteca.com/",language:[ze.SPANISH],category:Be.MANGA,run(){const e=[...document.querySelectorAll("section img.w-full.h-full")];return{title:document.querySelector("title")?.textContent?.replace(/\|.+/,"").trim(),series:document.querySelector("h1")?.closest("a")?.getAttribute("href"),pages:e.length,prev:document.querySelector('a[name="capitulo anterior"]')?.getAttribute("href"),next:document.querySelector('a[name="capitulo siguiente"]')?.getAttribute("href"),listImages:e.map(t=>t.getAttribute("src")??"")}}},x9={name:"QiManhwa",url:/https?:\/\/qimanhwa\.com\/series\/[^/]+\/chapter-.+/,homepage:"https://qimanhwa.com/",language:[ze.ENGLISH],category:Be.MANGA,waitEle:'img[alt*="Chapter"]',run(){const e=[...document.querySelectorAll('img[alt*="Chapter"]')];return{title:document.querySelector("h1")?.textContent?.trim(),series:Wr("button","Home","a")?.getAttribute("href"),pages:e.length,prev:document.querySelector(".lucide-chevron-left")?.closest("a")?.getAttribute("href"),next:document.querySelector(".lucide-chevron-right")?.closest("a")?.getAttribute("href"),listImages:e.map(t=>t.getAttribute("src")??"")}}},I9={name:"ReadComicsOnline",url:/https?:\/\/(www\.)?readcomicsonline.ru\/comic\/.*\/\d*/,homepage:"https://readcomicsonline.ru/",language:[ze.ENGLISH],category:Be.COMIC,run(){const e=[...document.querySelectorAll("#all img")];return{title:unsafeWindow.title.replace(/ - Page \d+/,""),series:document.querySelector("div.pager-cnt a")?.getAttribute("href"),pages:unsafeWindow.pages.length,prev:unsafeWindow.prev_chapter,next:unsafeWindow.next_chapter,listImages:e.map(t=>t.getAttribute("data-src")??"")}}},C9={name:"ReaperScans",url:/https?:\/\/(www\.)?reaperscans\.com\/series\/.+\/chapter.+/,homepage:"https://reaperscans.com/",language:[ze.ENGLISH],category:Be.MANGA,waitEle:"#content .container img:not(.rounded)",run(){const e=[...document.querySelectorAll("#content .container img:not(.rounded)")];return{title:document.querySelector("title")?.textContent?.trim(),series:document.querySelector("button .fa-house")?.closest("a")?.getAttribute("href"),pages:e.length,prev:document.querySelector(".fa-chevron-left")?.closest("a")?.getAttribute("href"),next:document.querySelector(".fa-chevron-right")?.closest("a")?.getAttribute("href"),listImages:e.map(t=>(t.getAttribute("data-src")||t.getAttribute("src"))??"")}}},O9={name:"TuMangaOnline",url:/https?:\/\/(www\.)?(.+).com\/(viewer|news)\/.+\/(paginated|cascade)/,homepage:"https://lectortmo.com/",language:[ze.SPANISH],category:Be.MANGA,run(){const e=[...document.querySelectorAll(".img-container img, .viewer-container img")],t=[...document.querySelectorAll("div.container:nth-child(4) select#viewer-pages-select option")],r=e.length>1?e.length:t.length,o={title:document.querySelector("title")?.textContent?.trim(),series:document.querySelector('a[title="Volver"]')?.getAttribute("href"),pages:r,prev:document.querySelector(".chapter-prev a")?.getAttribute("href"),next:document.querySelector(".chapter-next a")?.getAttribute("href")};return e.length>1?{...o,listImages:e.map(a=>a.getAttribute("data-src")??"")}:{...o,listPages:Array(t.length).fill(0).map((a,s)=>`${window.location.href.replace(/\/\d+$/,"")}/${s+1}`),img:"#viewer-container img, .viewer-page"}}},T9={name:"Vortex Scans",url:/https?:\/\/(www.)?(vortexscans).(org)\/.+/,homepage:"https://vortexscans.org/",language:[ze.ENGLISH],category:Be.MANGA,waitVar:"__next_f",waitFunc(){return unsafeWindow.__next_f.find(e=>/images/.test(e?.[1]))?.length>0},run(){const e=unsafeWindow.__next_f.find(r=>/images/.test(r?.[1]))?.[1],t=e.slice(e.indexOf("images")).match(/http[^"]+\.(png|gif|jpg|jpeg|webp)/g)??[];return{title:document.querySelector("time")?.closest("div")?.querySelector("div")?.textContent?.trim(),series:document.querySelector("time")?.closest("a")?.getAttribute("href"),pages:t?.length,prev:Wr("button","Prev","a")?.getAttribute("href"),next:Wr("button","Next","a")?.getAttribute("href"),listImages:t}}},L9={name:"WebNovel",url:/https?:\/\/(www\.)?webnovel.com\/comic\/.+/,homepage:"https://www.webnovel.com/",language:[ze.ENGLISH],category:Be.MANGA,waitVar:"g_data",run(){const e=unsafeWindow.g_data.chapter.chapterInfo.chapterPage.map(t=>t.url);return{title:document.querySelector("title")?.textContent?.trim(),series:"./",pages:e.length,prev:`${unsafeWindow.g_data.chapter.chapterInfo.preChapterName}_${unsafeWindow.g_data.chapter.chapterInfo.preChapterId}`,next:`${unsafeWindow.g_data.chapter.chapterInfo.nextChapterName}_${unsafeWindow.g_data.chapter.chapterInfo.nextChapterId}`,listImages:e}}},R9={name:"WebToons",url:/https?:\/\/(www\.)?webtoons.com\/.+viewer.+/,homepage:"https://www.webtoons.com/",language:[ze.ENGLISH],category:Be.MANGA,run(){const e=[...document.querySelectorAll("#_imageList img")];return{title:document.querySelector(".subj_info")?.textContent?.trim(),series:document.querySelector(".subj_info a")?.getAttribute("href"),pages:e.length,prev:document.querySelector("._prevEpisode")?.getAttribute("href"),next:document.querySelector("._nextEpisode")?.getAttribute("href"),listImages:e.map(t=>t.getAttribute("data-url")??t.getAttribute("data-src")??t.getAttribute("src")??"")}}},P9={name:"WeebCentral",url:/https?:\/\/(www\.)?(weebcentral).com\/chapters\/.+/,homepage:"https://weebcentral.com/",language:[ze.ENGLISH],category:Be.MANGA,waitEle:"main section .maw-w-full",async run(){const e=[...document.querySelectorAll("main section .maw-w-full")].map(o=>o.getAttribute("src")??""),t=await fetch(document.querySelector("main section a + button")?.getAttribute("hx-get")??"").then(o=>o.text()),r=new DOMParser().parseFromString(t,"text/html");return{title:document.querySelector("title")?.textContent?.replace(/ | .+/,"").trim(),series:document.querySelector("main section a")?.getAttribute("href"),pages:e.length,prev:r.querySelector("#selected_chapter")?.nextElementSibling?.getAttribute("href"),next:r.querySelector("#selected_chapter")?.previousElementSibling?.getAttribute("href"),listImages:e}}},$9={name:"ZeroScans",url:/https?:\/\/(www\.)?zscans.com\/comics\/.+/,homepage:"https://zscans.com/",language:[ze.ENGLISH],category:Be.MANGA,waitVar:"__ZEROSCANS__",run(){const e=unsafeWindow.__ZEROSCANS__.data.at(0).current_chapter.high_quality,t=document.querySelectorAll(".v-btn--router");return{title:document.querySelector("title")?.textContent?.trim(),series:document.querySelector(".v-breadcrumbs li:nth-child(2) + a")?.getAttribute("href"),pages:e.length,prev:t[0]?.getAttribute("href"),next:t[1]?.getAttribute("href"),listImages:e}}},z9=[qb,jb,Kb,Yb,Xb,Jb,Qb,t9,i9,o9,a9,s9,bl,l9,d9,h9,f9,p9,g9,m9,u9,v9,b9,w9,y9,k9,E9,A9,S9,M9,x9,I9,C9,O9,L9,R9,P9,T9,$9,_9,e9,c9];Gb(z9).catch(Ee)})();
