// ==UserScript==
// @name          Manga OnlineViewer
// @author        Tago
// @updateURL     https://github.com/TagoDR/MangaOnlineViewer/raw/master/dist/Manga_OnlineViewer.meta.js
// @downloadURL   https://github.com/TagoDR/MangaOnlineViewer/raw/master/dist/Manga_OnlineViewer.user.js
// @supportURL    https://github.com/TagoDR/MangaOnlineViewer/issues
// @namespace     https://github.com/TagoDR
// @description   Shows all pages at once in online view for these sites: Asura Scans, Batoto, BilibiliComics, Comick, Comix.to, Dynasty-Scans, Flame Comics, Ikigai Mangas - EltaNews, Ikigai Mangas - Ajaco, Kagane, KuManga, LeerCapitulo, LHTranslation, Local Files, M440, MangaBuddy, MangaDex, MangaFox, MangaHere, Mangago, MangaHub, MangaKakalot, NeloManga, MangaNato, NatoManga, MangaBats, MangaBall, MangaOni, MangaPark, MangaReader, MangaToons, MangaTown, ManhwaWeb, MangaGeko.com, MangaGeko.cc, NineAnime, OlympusBiblioteca, QiManhwa, ReadComicsOnline, ReaperScans, TuMangaOnline, WebNovel, WebToons, WeebCentral, WeebDex, Vortex Scans, ZeroScans, MangaStream WordPress Plugin, Realm Oasis, Voids-Scans, Luminous Scans, Shimada Scans, Night Scans, Manhwa-Freak, OzulScansEn, CypherScans, MangaGalaxy, LuaScans, Drake Scans, Rizzfables, NovatoScans, TresDaos, Lectormiau, NTRGod, Threedaos, FoOlSlide, Kireicake, Madara WordPress Plugin, MangaHaus, Isekai Scan, Comic Kiba, Zinmanga, mangatx, Toonily, Mngazuki, JaiminisBox, DisasterScans, ManhuaPlus, TopManhua, NovelMic, Reset-Scans, LeviatanScans, Dragon Tea, SetsuScans, ToonGod, Hades Scans
// @version       2026.04.03.build-1425
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
// @include       /https?:\/\/(www\.)?weebdex\.org\/.+/
// @include       /https?:\/\/(www.)?(vortexscans).(org)\/.+/
// @include       /https?:\/\/(www\.)?zscans.com\/comics\/.+/
// @include       /https?:\/\/[^/]*(scans?|comic|realm|rizz|hivetoon|tresdaos|zonamiau|ntrgod|threedaos)[^/]*\/.+/
// @include       /^(?!.*jaiminisbox).*\/read\/.+/
// @include       /https?:\/\/.+\/(manga|series|manhua|comic|ch|novel|webtoon|tmo)\/.+\/.+/
// @exclude       /https?:\/\/(www\.)?tsumino.com\/.+/
// @exclude       /https?:\/\/(www\.)?pururin.io\/.+/
// ==/UserScript==
(function(){var Qf=Object.create,Ni=Object.defineProperty,e2=Object.getOwnPropertyDescriptor,t2=Object.getOwnPropertyNames,n2=Object.getPrototypeOf,r2=Object.prototype.hasOwnProperty,wn=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),tu=(e,t)=>{let r={};for(var i in e)Ni(r,i,{get:e[i],enumerable:!0});return t||Ni(r,Symbol.toStringTag,{value:"Module"}),r},o2=(e,t,r,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(var a=t2(t),s=0,l=a.length,h;s<l;s++)h=a[s],!r2.call(e,h)&&h!==r&&Ni(e,h,{get:(u=>t[u]).bind(null,h),enumerable:!(i=e2(t,h))||i.enumerable});return e},Fi=(e,t,r)=>(r=e!=null?Qf(n2(e)):{},o2(t||!e||!e.__esModule?Ni(r,"default",{value:e,enumerable:!0}):r,e)),i2=wn(((e,t)=>{(function(r,i){typeof e=="object"&&typeof t=="object"?t.exports=i():typeof define=="function"&&define.amd?define([],i):typeof e=="object"?e.bowser=i():r.bowser=i()})(e,(function(){return(function(r){var i={};function a(s){if(i[s])return i[s].exports;var l=i[s]={i:s,l:!1,exports:{}};return r[s].call(l.exports,l,l.exports,a),l.l=!0,l.exports}return a.m=r,a.c=i,a.d=function(s,l,h){a.o(s,l)||Object.defineProperty(s,l,{enumerable:!0,get:h})},a.r=function(s){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(s,"__esModule",{value:!0})},a.t=function(s,l){if(1&l&&(s=a(s)),8&l||4&l&&typeof s=="object"&&s&&s.__esModule)return s;var h=Object.create(null);if(a.r(h),Object.defineProperty(h,"default",{enumerable:!0,value:s}),2&l&&typeof s!="string")for(var u in s)a.d(h,u,function(f){return s[f]}.bind(null,u));return h},a.n=function(s){var l=s&&s.__esModule?function(){return s.default}:function(){return s};return a.d(l,"a",l),l},a.o=function(s,l){return Object.prototype.hasOwnProperty.call(s,l)},a.p="",a(a.s=90)})({17:function(r,i,a){"use strict";i.__esModule=!0,i.default=void 0;var s=a(18);i.default=(function(){function l(){}return l.getFirstMatch=function(h,u){var f=u.match(h);return f&&f.length>0&&f[1]||""},l.getSecondMatch=function(h,u){var f=u.match(h);return f&&f.length>1&&f[2]||""},l.matchAndReturnConst=function(h,u,f){if(h.test(u))return f},l.getWindowsVersionName=function(h){switch(h){case"NT":return"NT";case"XP":return"XP";case"NT 5.0":return"2000";case"NT 5.1":return"XP";case"NT 5.2":return"2003";case"NT 6.0":return"Vista";case"NT 6.1":return"7";case"NT 6.2":return"8";case"NT 6.3":return"8.1";case"NT 10.0":return"10";default:return}},l.getMacOSVersionName=function(h){var u=h.split(".").splice(0,2).map((function(b){return parseInt(b,10)||0}));u.push(0);var f=u[0],p=u[1];if(f===10)switch(p){case 5:return"Leopard";case 6:return"Snow Leopard";case 7:return"Lion";case 8:return"Mountain Lion";case 9:return"Mavericks";case 10:return"Yosemite";case 11:return"El Capitan";case 12:return"Sierra";case 13:return"High Sierra";case 14:return"Mojave";case 15:return"Catalina";default:return}switch(f){case 11:return"Big Sur";case 12:return"Monterey";case 13:return"Ventura";case 14:return"Sonoma";case 15:return"Sequoia";default:return}},l.getAndroidVersionName=function(h){var u=h.split(".").splice(0,2).map((function(f){return parseInt(f,10)||0}));if(u.push(0),!(u[0]===1&&u[1]<5))return u[0]===1&&u[1]<6?"Cupcake":u[0]===1&&u[1]>=6?"Donut":u[0]===2&&u[1]<2?"Eclair":u[0]===2&&u[1]===2?"Froyo":u[0]===2&&u[1]>2?"Gingerbread":u[0]===3?"Honeycomb":u[0]===4&&u[1]<1?"Ice Cream Sandwich":u[0]===4&&u[1]<4?"Jelly Bean":u[0]===4&&u[1]>=4?"KitKat":u[0]===5?"Lollipop":u[0]===6?"Marshmallow":u[0]===7?"Nougat":u[0]===8?"Oreo":u[0]===9?"Pie":void 0},l.getVersionPrecision=function(h){return h.split(".").length},l.compareVersions=function(h,u,f){f===void 0&&(f=!1);var p=l.getVersionPrecision(h),b=l.getVersionPrecision(u),w=Math.max(p,b),v=0,m=l.map([h,u],(function(E){var y=w-l.getVersionPrecision(E),S=E+new Array(y+1).join(".0");return l.map(S.split("."),(function(x){return new Array(20-x.length).join("0")+x})).reverse()}));for(f&&(v=w-Math.min(p,b)),w-=1;w>=v;){if(m[0][w]>m[1][w])return 1;if(m[0][w]===m[1][w]){if(w===v)return 0;w-=1}else if(m[0][w]<m[1][w])return-1}},l.map=function(h,u){var f,p=[];if(Array.prototype.map)return Array.prototype.map.call(h,u);for(f=0;f<h.length;f+=1)p.push(u(h[f]));return p},l.find=function(h,u){var f,p;if(Array.prototype.find)return Array.prototype.find.call(h,u);for(f=0,p=h.length;f<p;f+=1){var b=h[f];if(u(b,f))return b}},l.assign=function(h){for(var u,f,p=h,b=arguments.length,w=new Array(b>1?b-1:0),v=1;v<b;v++)w[v-1]=arguments[v];if(Object.assign)return Object.assign.apply(Object,[h].concat(w));var m=function(){var E=w[u];typeof E=="object"&&E!==null&&Object.keys(E).forEach((function(y){p[y]=E[y]}))};for(u=0,f=w.length;u<f;u+=1)m();return h},l.getBrowserAlias=function(h){return s.BROWSER_ALIASES_MAP[h]},l.getBrowserTypeByAlias=function(h){return s.BROWSER_MAP[h]||""},l})(),r.exports=i.default},18:function(r,i,a){"use strict";i.__esModule=!0,i.ENGINE_MAP=i.OS_MAP=i.PLATFORMS_MAP=i.BROWSER_MAP=i.BROWSER_ALIASES_MAP=void 0,i.BROWSER_ALIASES_MAP={AmazonBot:"amazonbot","Amazon Silk":"amazon_silk","Android Browser":"android",BaiduSpider:"baiduspider",Bada:"bada",BingCrawler:"bingcrawler",Brave:"brave",BlackBerry:"blackberry","ChatGPT-User":"chatgpt_user",Chrome:"chrome",ClaudeBot:"claudebot",Chromium:"chromium",Diffbot:"diffbot",DuckDuckBot:"duckduckbot",DuckDuckGo:"duckduckgo",Electron:"electron",Epiphany:"epiphany",FacebookExternalHit:"facebookexternalhit",Firefox:"firefox",Focus:"focus",Generic:"generic","Google Search":"google_search",Googlebot:"googlebot",GPTBot:"gptbot","Internet Explorer":"ie",InternetArchiveCrawler:"internetarchivecrawler","K-Meleon":"k_meleon",LibreWolf:"librewolf",Linespider:"linespider",Maxthon:"maxthon","Meta-ExternalAds":"meta_externalads","Meta-ExternalAgent":"meta_externalagent","Meta-ExternalFetcher":"meta_externalfetcher","Meta-WebIndexer":"meta_webindexer","Microsoft Edge":"edge","MZ Browser":"mz","NAVER Whale Browser":"naver","OAI-SearchBot":"oai_searchbot",Omgilibot:"omgilibot",Opera:"opera","Opera Coast":"opera_coast","Pale Moon":"pale_moon",PerplexityBot:"perplexitybot","Perplexity-User":"perplexity_user",PhantomJS:"phantomjs",PingdomBot:"pingdombot",Puffin:"puffin",QQ:"qq",QQLite:"qqlite",QupZilla:"qupzilla",Roku:"roku",Safari:"safari",Sailfish:"sailfish","Samsung Internet for Android":"samsung_internet",SlackBot:"slackbot",SeaMonkey:"seamonkey",Sleipnir:"sleipnir","Sogou Browser":"sogou",Swing:"swing",Tizen:"tizen","UC Browser":"uc",Vivaldi:"vivaldi","WebOS Browser":"webos",WeChat:"wechat",YahooSlurp:"yahooslurp","Yandex Browser":"yandex",YandexBot:"yandexbot",YouBot:"youbot"},i.BROWSER_MAP={amazonbot:"AmazonBot",amazon_silk:"Amazon Silk",android:"Android Browser",baiduspider:"BaiduSpider",bada:"Bada",bingcrawler:"BingCrawler",blackberry:"BlackBerry",brave:"Brave",chatgpt_user:"ChatGPT-User",chrome:"Chrome",claudebot:"ClaudeBot",chromium:"Chromium",diffbot:"Diffbot",duckduckbot:"DuckDuckBot",duckduckgo:"DuckDuckGo",edge:"Microsoft Edge",electron:"Electron",epiphany:"Epiphany",facebookexternalhit:"FacebookExternalHit",firefox:"Firefox",focus:"Focus",generic:"Generic",google_search:"Google Search",googlebot:"Googlebot",gptbot:"GPTBot",ie:"Internet Explorer",internetarchivecrawler:"InternetArchiveCrawler",k_meleon:"K-Meleon",librewolf:"LibreWolf",linespider:"Linespider",maxthon:"Maxthon",meta_externalads:"Meta-ExternalAds",meta_externalagent:"Meta-ExternalAgent",meta_externalfetcher:"Meta-ExternalFetcher",meta_webindexer:"Meta-WebIndexer",mz:"MZ Browser",naver:"NAVER Whale Browser",oai_searchbot:"OAI-SearchBot",omgilibot:"Omgilibot",opera:"Opera",opera_coast:"Opera Coast",pale_moon:"Pale Moon",perplexitybot:"PerplexityBot",perplexity_user:"Perplexity-User",phantomjs:"PhantomJS",pingdombot:"PingdomBot",puffin:"Puffin",qq:"QQ Browser",qqlite:"QQ Browser Lite",qupzilla:"QupZilla",roku:"Roku",safari:"Safari",sailfish:"Sailfish",samsung_internet:"Samsung Internet for Android",seamonkey:"SeaMonkey",slackbot:"SlackBot",sleipnir:"Sleipnir",sogou:"Sogou Browser",swing:"Swing",tizen:"Tizen",uc:"UC Browser",vivaldi:"Vivaldi",webos:"WebOS Browser",wechat:"WeChat",yahooslurp:"YahooSlurp",yandex:"Yandex Browser",yandexbot:"YandexBot",youbot:"YouBot"},i.PLATFORMS_MAP={bot:"bot",desktop:"desktop",mobile:"mobile",tablet:"tablet",tv:"tv"},i.OS_MAP={Android:"Android",Bada:"Bada",BlackBerry:"BlackBerry",ChromeOS:"Chrome OS",HarmonyOS:"HarmonyOS",iOS:"iOS",Linux:"Linux",MacOS:"macOS",PlayStation4:"PlayStation 4",Roku:"Roku",Tizen:"Tizen",WebOS:"WebOS",Windows:"Windows",WindowsPhone:"Windows Phone"},i.ENGINE_MAP={Blink:"Blink",EdgeHTML:"EdgeHTML",Gecko:"Gecko",Presto:"Presto",Trident:"Trident",WebKit:"WebKit"}},90:function(r,i,a){"use strict";i.__esModule=!0,i.default=void 0;var s,l=(s=a(91))&&s.__esModule?s:{default:s},h=a(18);function u(f,p){for(var b=0;b<p.length;b++){var w=p[b];w.enumerable=w.enumerable||!1,w.configurable=!0,"value"in w&&(w.writable=!0),Object.defineProperty(f,w.key,w)}}i.default=(function(){function f(){}var p,b,w;return f.getParser=function(v,m,E){if(m===void 0&&(m=!1),E===void 0&&(E=null),typeof v!="string")throw new Error("UserAgent should be a string");return new l.default(v,m,E)},f.parse=function(v,m){return m===void 0&&(m=null),new l.default(v,m).getResult()},p=f,w=[{key:"BROWSER_MAP",get:function(){return h.BROWSER_MAP}},{key:"ENGINE_MAP",get:function(){return h.ENGINE_MAP}},{key:"OS_MAP",get:function(){return h.OS_MAP}},{key:"PLATFORMS_MAP",get:function(){return h.PLATFORMS_MAP}}],(b=null)&&u(p.prototype,b),w&&u(p,w),f})(),r.exports=i.default},91:function(r,i,a){"use strict";i.__esModule=!0,i.default=void 0;var s=p(a(92)),l=p(a(93)),h=p(a(94)),u=p(a(95)),f=p(a(17));function p(b){return b&&b.__esModule?b:{default:b}}i.default=(function(){function b(v,m,E){if(m===void 0&&(m=!1),E===void 0&&(E=null),v==null||v==="")throw new Error("UserAgent parameter can't be empty");this._ua=v;var y=!1;typeof m=="boolean"?(y=m,this._hints=E):this._hints=m!=null&&typeof m=="object"?m:null,this.parsedResult={},y!==!0&&this.parse()}var w=b.prototype;return w.getHints=function(){return this._hints},w.hasBrand=function(v){if(!this._hints||!Array.isArray(this._hints.brands))return!1;var m=v.toLowerCase();return this._hints.brands.some((function(E){return E.brand&&E.brand.toLowerCase()===m}))},w.getBrandVersion=function(v){if(this._hints&&Array.isArray(this._hints.brands)){var m=v.toLowerCase(),E=this._hints.brands.find((function(y){return y.brand&&y.brand.toLowerCase()===m}));return E?E.version:void 0}},w.getUA=function(){return this._ua},w.test=function(v){return v.test(this._ua)},w.parseBrowser=function(){var v=this;this.parsedResult.browser={};var m=f.default.find(s.default,(function(E){if(typeof E.test=="function")return E.test(v);if(Array.isArray(E.test))return E.test.some((function(y){return v.test(y)}));throw new Error("Browser's test function is not valid")}));return m&&(this.parsedResult.browser=m.describe(this.getUA(),this)),this.parsedResult.browser},w.getBrowser=function(){return this.parsedResult.browser?this.parsedResult.browser:this.parseBrowser()},w.getBrowserName=function(v){return v?String(this.getBrowser().name).toLowerCase()||"":this.getBrowser().name||""},w.getBrowserVersion=function(){return this.getBrowser().version},w.getOS=function(){return this.parsedResult.os?this.parsedResult.os:this.parseOS()},w.parseOS=function(){var v=this;this.parsedResult.os={};var m=f.default.find(l.default,(function(E){if(typeof E.test=="function")return E.test(v);if(Array.isArray(E.test))return E.test.some((function(y){return v.test(y)}));throw new Error("Browser's test function is not valid")}));return m&&(this.parsedResult.os=m.describe(this.getUA())),this.parsedResult.os},w.getOSName=function(v){var m=this.getOS().name;return v?String(m).toLowerCase()||"":m||""},w.getOSVersion=function(){return this.getOS().version},w.getPlatform=function(){return this.parsedResult.platform?this.parsedResult.platform:this.parsePlatform()},w.getPlatformType=function(v){v===void 0&&(v=!1);var m=this.getPlatform().type;return v?String(m).toLowerCase()||"":m||""},w.parsePlatform=function(){var v=this;this.parsedResult.platform={};var m=f.default.find(h.default,(function(E){if(typeof E.test=="function")return E.test(v);if(Array.isArray(E.test))return E.test.some((function(y){return v.test(y)}));throw new Error("Browser's test function is not valid")}));return m&&(this.parsedResult.platform=m.describe(this.getUA())),this.parsedResult.platform},w.getEngine=function(){return this.parsedResult.engine?this.parsedResult.engine:this.parseEngine()},w.getEngineName=function(v){return v?String(this.getEngine().name).toLowerCase()||"":this.getEngine().name||""},w.parseEngine=function(){var v=this;this.parsedResult.engine={};var m=f.default.find(u.default,(function(E){if(typeof E.test=="function")return E.test(v);if(Array.isArray(E.test))return E.test.some((function(y){return v.test(y)}));throw new Error("Browser's test function is not valid")}));return m&&(this.parsedResult.engine=m.describe(this.getUA())),this.parsedResult.engine},w.parse=function(){return this.parseBrowser(),this.parseOS(),this.parsePlatform(),this.parseEngine(),this},w.getResult=function(){return f.default.assign({},this.parsedResult)},w.satisfies=function(v){var m=this,E={},y=0,S={},x=0;if(Object.keys(v).forEach((function(ge){var _e=v[ge];typeof _e=="string"?(S[ge]=_e,x+=1):typeof _e=="object"&&(E[ge]=_e,y+=1)})),y>0){var T=Object.keys(E),L=f.default.find(T,(function(ge){return m.isOS(ge)}));if(L){var D=this.satisfies(E[L]);if(D!==void 0)return D}var K=f.default.find(T,(function(ge){return m.isPlatform(ge)}));if(K){var V=this.satisfies(E[K]);if(V!==void 0)return V}}if(x>0){var ae=Object.keys(S),H=f.default.find(ae,(function(ge){return m.isBrowser(ge,!0)}));if(H!==void 0)return this.compareVersion(S[H])}},w.isBrowser=function(v,m){m===void 0&&(m=!1);var E=this.getBrowserName().toLowerCase(),y=v.toLowerCase(),S=f.default.getBrowserTypeByAlias(y);return m&&S&&(y=S.toLowerCase()),y===E},w.compareVersion=function(v){var m=[0],E=v,y=!1,S=this.getBrowserVersion();if(typeof S=="string")return v[0]===">"||v[0]==="<"?(E=v.substr(1),v[1]==="="?(y=!0,E=v.substr(2)):m=[],v[0]===">"?m.push(1):m.push(-1)):v[0]==="="?E=v.substr(1):v[0]==="~"&&(y=!0,E=v.substr(1)),m.indexOf(f.default.compareVersions(S,E,y))>-1},w.isOS=function(v){return this.getOSName(!0)===String(v).toLowerCase()},w.isPlatform=function(v){return this.getPlatformType(!0)===String(v).toLowerCase()},w.isEngine=function(v){return this.getEngineName(!0)===String(v).toLowerCase()},w.is=function(v,m){return m===void 0&&(m=!1),this.isBrowser(v,m)||this.isOS(v)||this.isPlatform(v)},w.some=function(v){var m=this;return v===void 0&&(v=[]),v.some((function(E){return m.is(E)}))},b})(),r.exports=i.default},92:function(r,i,a){"use strict";i.__esModule=!0,i.default=void 0;var s,l=(s=a(17))&&s.__esModule?s:{default:s},h=/version\/(\d+(\.?_?\d+)+)/i;i.default=[{test:[/gptbot/i],describe:function(u){var f={name:"GPTBot"},p=l.default.getFirstMatch(/gptbot\/(\d+(\.\d+)+)/i,u)||l.default.getFirstMatch(h,u);return p&&(f.version=p),f}},{test:[/chatgpt-user/i],describe:function(u){var f={name:"ChatGPT-User"},p=l.default.getFirstMatch(/chatgpt-user\/(\d+(\.\d+)+)/i,u)||l.default.getFirstMatch(h,u);return p&&(f.version=p),f}},{test:[/oai-searchbot/i],describe:function(u){var f={name:"OAI-SearchBot"},p=l.default.getFirstMatch(/oai-searchbot\/(\d+(\.\d+)+)/i,u)||l.default.getFirstMatch(h,u);return p&&(f.version=p),f}},{test:[/claudebot/i,/claude-web/i,/claude-user/i,/claude-searchbot/i],describe:function(u){var f={name:"ClaudeBot"},p=l.default.getFirstMatch(/(?:claudebot|claude-web|claude-user|claude-searchbot)\/(\d+(\.\d+)+)/i,u)||l.default.getFirstMatch(h,u);return p&&(f.version=p),f}},{test:[/omgilibot/i,/webzio-extended/i],describe:function(u){var f={name:"Omgilibot"},p=l.default.getFirstMatch(/(?:omgilibot|webzio-extended)\/(\d+(\.\d+)+)/i,u)||l.default.getFirstMatch(h,u);return p&&(f.version=p),f}},{test:[/diffbot/i],describe:function(u){var f={name:"Diffbot"},p=l.default.getFirstMatch(/diffbot\/(\d+(\.\d+)+)/i,u)||l.default.getFirstMatch(h,u);return p&&(f.version=p),f}},{test:[/perplexitybot/i],describe:function(u){var f={name:"PerplexityBot"},p=l.default.getFirstMatch(/perplexitybot\/(\d+(\.\d+)+)/i,u)||l.default.getFirstMatch(h,u);return p&&(f.version=p),f}},{test:[/perplexity-user/i],describe:function(u){var f={name:"Perplexity-User"},p=l.default.getFirstMatch(/perplexity-user\/(\d+(\.\d+)+)/i,u)||l.default.getFirstMatch(h,u);return p&&(f.version=p),f}},{test:[/youbot/i],describe:function(u){var f={name:"YouBot"},p=l.default.getFirstMatch(/youbot\/(\d+(\.\d+)+)/i,u)||l.default.getFirstMatch(h,u);return p&&(f.version=p),f}},{test:[/meta-webindexer/i],describe:function(u){var f={name:"Meta-WebIndexer"},p=l.default.getFirstMatch(/meta-webindexer\/(\d+(\.\d+)+)/i,u)||l.default.getFirstMatch(h,u);return p&&(f.version=p),f}},{test:[/meta-externalads/i],describe:function(u){var f={name:"Meta-ExternalAds"},p=l.default.getFirstMatch(/meta-externalads\/(\d+(\.\d+)+)/i,u)||l.default.getFirstMatch(h,u);return p&&(f.version=p),f}},{test:[/meta-externalagent/i],describe:function(u){var f={name:"Meta-ExternalAgent"},p=l.default.getFirstMatch(/meta-externalagent\/(\d+(\.\d+)+)/i,u)||l.default.getFirstMatch(h,u);return p&&(f.version=p),f}},{test:[/meta-externalfetcher/i],describe:function(u){var f={name:"Meta-ExternalFetcher"},p=l.default.getFirstMatch(/meta-externalfetcher\/(\d+(\.\d+)+)/i,u)||l.default.getFirstMatch(h,u);return p&&(f.version=p),f}},{test:[/googlebot/i],describe:function(u){var f={name:"Googlebot"},p=l.default.getFirstMatch(/googlebot\/(\d+(\.\d+))/i,u)||l.default.getFirstMatch(h,u);return p&&(f.version=p),f}},{test:[/linespider/i],describe:function(u){var f={name:"Linespider"},p=l.default.getFirstMatch(/(?:linespider)(?:-[-\w]+)?[\s/](\d+(\.\d+)+)/i,u)||l.default.getFirstMatch(h,u);return p&&(f.version=p),f}},{test:[/amazonbot/i],describe:function(u){var f={name:"AmazonBot"},p=l.default.getFirstMatch(/amazonbot\/(\d+(\.\d+)+)/i,u)||l.default.getFirstMatch(h,u);return p&&(f.version=p),f}},{test:[/bingbot/i],describe:function(u){var f={name:"BingCrawler"},p=l.default.getFirstMatch(/bingbot\/(\d+(\.\d+)+)/i,u)||l.default.getFirstMatch(h,u);return p&&(f.version=p),f}},{test:[/baiduspider/i],describe:function(u){var f={name:"BaiduSpider"},p=l.default.getFirstMatch(/baiduspider\/(\d+(\.\d+)+)/i,u)||l.default.getFirstMatch(h,u);return p&&(f.version=p),f}},{test:[/duckduckbot/i],describe:function(u){var f={name:"DuckDuckBot"},p=l.default.getFirstMatch(/duckduckbot\/(\d+(\.\d+)+)/i,u)||l.default.getFirstMatch(h,u);return p&&(f.version=p),f}},{test:[/ia_archiver/i],describe:function(u){var f={name:"InternetArchiveCrawler"},p=l.default.getFirstMatch(/ia_archiver\/(\d+(\.\d+)+)/i,u)||l.default.getFirstMatch(h,u);return p&&(f.version=p),f}},{test:[/facebookexternalhit/i,/facebookcatalog/i],describe:function(){return{name:"FacebookExternalHit"}}},{test:[/slackbot/i,/slack-imgProxy/i],describe:function(u){var f={name:"SlackBot"},p=l.default.getFirstMatch(/(?:slackbot|slack-imgproxy)(?:-[-\w]+)?[\s/](\d+(\.\d+)+)/i,u)||l.default.getFirstMatch(h,u);return p&&(f.version=p),f}},{test:[/yahoo!?[\s/]*slurp/i],describe:function(){return{name:"YahooSlurp"}}},{test:[/yandexbot/i,/yandexmobilebot/i],describe:function(){return{name:"YandexBot"}}},{test:[/pingdom/i],describe:function(){return{name:"PingdomBot"}}},{test:[/opera/i],describe:function(u){var f={name:"Opera"},p=l.default.getFirstMatch(h,u)||l.default.getFirstMatch(/(?:opera)[\s/](\d+(\.?_?\d+)+)/i,u);return p&&(f.version=p),f}},{test:[/opr\/|opios/i],describe:function(u){var f={name:"Opera"},p=l.default.getFirstMatch(/(?:opr|opios)[\s/](\S+)/i,u)||l.default.getFirstMatch(h,u);return p&&(f.version=p),f}},{test:[/SamsungBrowser/i],describe:function(u){var f={name:"Samsung Internet for Android"},p=l.default.getFirstMatch(h,u)||l.default.getFirstMatch(/(?:SamsungBrowser)[\s/](\d+(\.?_?\d+)+)/i,u);return p&&(f.version=p),f}},{test:[/Whale/i],describe:function(u){var f={name:"NAVER Whale Browser"},p=l.default.getFirstMatch(h,u)||l.default.getFirstMatch(/(?:whale)[\s/](\d+(?:\.\d+)+)/i,u);return p&&(f.version=p),f}},{test:[/PaleMoon/i],describe:function(u){var f={name:"Pale Moon"},p=l.default.getFirstMatch(h,u)||l.default.getFirstMatch(/(?:PaleMoon)[\s/](\d+(?:\.\d+)+)/i,u);return p&&(f.version=p),f}},{test:[/MZBrowser/i],describe:function(u){var f={name:"MZ Browser"},p=l.default.getFirstMatch(/(?:MZBrowser)[\s/](\d+(?:\.\d+)+)/i,u)||l.default.getFirstMatch(h,u);return p&&(f.version=p),f}},{test:[/focus/i],describe:function(u){var f={name:"Focus"},p=l.default.getFirstMatch(/(?:focus)[\s/](\d+(?:\.\d+)+)/i,u)||l.default.getFirstMatch(h,u);return p&&(f.version=p),f}},{test:[/swing/i],describe:function(u){var f={name:"Swing"},p=l.default.getFirstMatch(/(?:swing)[\s/](\d+(?:\.\d+)+)/i,u)||l.default.getFirstMatch(h,u);return p&&(f.version=p),f}},{test:[/coast/i],describe:function(u){var f={name:"Opera Coast"},p=l.default.getFirstMatch(h,u)||l.default.getFirstMatch(/(?:coast)[\s/](\d+(\.?_?\d+)+)/i,u);return p&&(f.version=p),f}},{test:[/opt\/\d+(?:.?_?\d+)+/i],describe:function(u){var f={name:"Opera Touch"},p=l.default.getFirstMatch(/(?:opt)[\s/](\d+(\.?_?\d+)+)/i,u)||l.default.getFirstMatch(h,u);return p&&(f.version=p),f}},{test:[/yabrowser/i],describe:function(u){var f={name:"Yandex Browser"},p=l.default.getFirstMatch(/(?:yabrowser)[\s/](\d+(\.?_?\d+)+)/i,u)||l.default.getFirstMatch(h,u);return p&&(f.version=p),f}},{test:[/ucbrowser/i],describe:function(u){var f={name:"UC Browser"},p=l.default.getFirstMatch(h,u)||l.default.getFirstMatch(/(?:ucbrowser)[\s/](\d+(\.?_?\d+)+)/i,u);return p&&(f.version=p),f}},{test:[/Maxthon|mxios/i],describe:function(u){var f={name:"Maxthon"},p=l.default.getFirstMatch(h,u)||l.default.getFirstMatch(/(?:Maxthon|mxios)[\s/](\d+(\.?_?\d+)+)/i,u);return p&&(f.version=p),f}},{test:[/epiphany/i],describe:function(u){var f={name:"Epiphany"},p=l.default.getFirstMatch(h,u)||l.default.getFirstMatch(/(?:epiphany)[\s/](\d+(\.?_?\d+)+)/i,u);return p&&(f.version=p),f}},{test:[/puffin/i],describe:function(u){var f={name:"Puffin"},p=l.default.getFirstMatch(h,u)||l.default.getFirstMatch(/(?:puffin)[\s/](\d+(\.?_?\d+)+)/i,u);return p&&(f.version=p),f}},{test:[/sleipnir/i],describe:function(u){var f={name:"Sleipnir"},p=l.default.getFirstMatch(h,u)||l.default.getFirstMatch(/(?:sleipnir)[\s/](\d+(\.?_?\d+)+)/i,u);return p&&(f.version=p),f}},{test:[/k-meleon/i],describe:function(u){var f={name:"K-Meleon"},p=l.default.getFirstMatch(h,u)||l.default.getFirstMatch(/(?:k-meleon)[\s/](\d+(\.?_?\d+)+)/i,u);return p&&(f.version=p),f}},{test:[/micromessenger/i],describe:function(u){var f={name:"WeChat"},p=l.default.getFirstMatch(/(?:micromessenger)[\s/](\d+(\.?_?\d+)+)/i,u)||l.default.getFirstMatch(h,u);return p&&(f.version=p),f}},{test:[/qqbrowser/i],describe:function(u){var f={name:/qqbrowserlite/i.test(u)?"QQ Browser Lite":"QQ Browser"},p=l.default.getFirstMatch(/(?:qqbrowserlite|qqbrowser)[/](\d+(\.?_?\d+)+)/i,u)||l.default.getFirstMatch(h,u);return p&&(f.version=p),f}},{test:[/msie|trident/i],describe:function(u){var f={name:"Internet Explorer"},p=l.default.getFirstMatch(/(?:msie |rv:)(\d+(\.?_?\d+)+)/i,u);return p&&(f.version=p),f}},{test:[/\sedg\//i],describe:function(u){var f={name:"Microsoft Edge"},p=l.default.getFirstMatch(/\sedg\/(\d+(\.?_?\d+)+)/i,u);return p&&(f.version=p),f}},{test:[/edg([ea]|ios)/i],describe:function(u){var f={name:"Microsoft Edge"},p=l.default.getSecondMatch(/edg([ea]|ios)\/(\d+(\.?_?\d+)+)/i,u);return p&&(f.version=p),f}},{test:[/vivaldi/i],describe:function(u){var f={name:"Vivaldi"},p=l.default.getFirstMatch(/vivaldi\/(\d+(\.?_?\d+)+)/i,u);return p&&(f.version=p),f}},{test:[/seamonkey/i],describe:function(u){var f={name:"SeaMonkey"},p=l.default.getFirstMatch(/seamonkey\/(\d+(\.?_?\d+)+)/i,u);return p&&(f.version=p),f}},{test:[/sailfish/i],describe:function(u){var f={name:"Sailfish"},p=l.default.getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i,u);return p&&(f.version=p),f}},{test:[/silk/i],describe:function(u){var f={name:"Amazon Silk"},p=l.default.getFirstMatch(/silk\/(\d+(\.?_?\d+)+)/i,u);return p&&(f.version=p),f}},{test:[/phantom/i],describe:function(u){var f={name:"PhantomJS"},p=l.default.getFirstMatch(/phantomjs\/(\d+(\.?_?\d+)+)/i,u);return p&&(f.version=p),f}},{test:[/slimerjs/i],describe:function(u){var f={name:"SlimerJS"},p=l.default.getFirstMatch(/slimerjs\/(\d+(\.?_?\d+)+)/i,u);return p&&(f.version=p),f}},{test:[/blackberry|\bbb\d+/i,/rim\stablet/i],describe:function(u){var f={name:"BlackBerry"},p=l.default.getFirstMatch(h,u)||l.default.getFirstMatch(/blackberry[\d]+\/(\d+(\.?_?\d+)+)/i,u);return p&&(f.version=p),f}},{test:[/(web|hpw)[o0]s/i],describe:function(u){var f={name:"WebOS Browser"},p=l.default.getFirstMatch(h,u)||l.default.getFirstMatch(/w(?:eb)?[o0]sbrowser\/(\d+(\.?_?\d+)+)/i,u);return p&&(f.version=p),f}},{test:[/bada/i],describe:function(u){var f={name:"Bada"},p=l.default.getFirstMatch(/dolfin\/(\d+(\.?_?\d+)+)/i,u);return p&&(f.version=p),f}},{test:[/tizen/i],describe:function(u){var f={name:"Tizen"},p=l.default.getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.?_?\d+)+)/i,u)||l.default.getFirstMatch(h,u);return p&&(f.version=p),f}},{test:[/qupzilla/i],describe:function(u){var f={name:"QupZilla"},p=l.default.getFirstMatch(/(?:qupzilla)[\s/](\d+(\.?_?\d+)+)/i,u)||l.default.getFirstMatch(h,u);return p&&(f.version=p),f}},{test:[/librewolf/i],describe:function(u){var f={name:"LibreWolf"},p=l.default.getFirstMatch(/(?:librewolf)[\s/](\d+(\.?_?\d+)+)/i,u);return p&&(f.version=p),f}},{test:[/firefox|iceweasel|fxios/i],describe:function(u){var f={name:"Firefox"},p=l.default.getFirstMatch(/(?:firefox|iceweasel|fxios)[\s/](\d+(\.?_?\d+)+)/i,u);return p&&(f.version=p),f}},{test:[/electron/i],describe:function(u){var f={name:"Electron"},p=l.default.getFirstMatch(/(?:electron)\/(\d+(\.?_?\d+)+)/i,u);return p&&(f.version=p),f}},{test:[/sogoumobilebrowser/i,/metasr/i,/se 2\.[x]/i],describe:function(u){var f={name:"Sogou Browser"},p=l.default.getFirstMatch(/(?:sogoumobilebrowser)[\s/](\d+(\.?_?\d+)+)/i,u),b=l.default.getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i,u),w=l.default.getFirstMatch(/se ([\d.]+)x/i,u),v=p||b||w;return v&&(f.version=v),f}},{test:[/MiuiBrowser/i],describe:function(u){var f={name:"Miui"},p=l.default.getFirstMatch(/(?:MiuiBrowser)[\s/](\d+(\.?_?\d+)+)/i,u);return p&&(f.version=p),f}},{test:function(u){return!!u.hasBrand("DuckDuckGo")||u.test(/\sDdg\/[\d.]+$/i)},describe:function(u,f){var p={name:"DuckDuckGo"};if(f){var b=f.getBrandVersion("DuckDuckGo");if(b)return p.version=b,p}var w=l.default.getFirstMatch(/\sDdg\/([\d.]+)$/i,u);return w&&(p.version=w),p}},{test:function(u){return u.hasBrand("Brave")},describe:function(u,f){var p={name:"Brave"};if(f){var b=f.getBrandVersion("Brave");if(b)return p.version=b,p}return p}},{test:[/chromium/i],describe:function(u){var f={name:"Chromium"},p=l.default.getFirstMatch(/(?:chromium)[\s/](\d+(\.?_?\d+)+)/i,u)||l.default.getFirstMatch(h,u);return p&&(f.version=p),f}},{test:[/chrome|crios|crmo/i],describe:function(u){var f={name:"Chrome"},p=l.default.getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i,u);return p&&(f.version=p),f}},{test:[/GSA/i],describe:function(u){var f={name:"Google Search"},p=l.default.getFirstMatch(/(?:GSA)\/(\d+(\.?_?\d+)+)/i,u);return p&&(f.version=p),f}},{test:function(u){var f=!u.test(/like android/i),p=u.test(/android/i);return f&&p},describe:function(u){var f={name:"Android Browser"},p=l.default.getFirstMatch(h,u);return p&&(f.version=p),f}},{test:[/playstation 4/i],describe:function(u){var f={name:"PlayStation 4"},p=l.default.getFirstMatch(h,u);return p&&(f.version=p),f}},{test:[/safari|applewebkit/i],describe:function(u){var f={name:"Safari"},p=l.default.getFirstMatch(h,u);return p&&(f.version=p),f}},{test:[/.*/i],describe:function(u){var f=u.search("\\(")!==-1?/^(.*)\/(.*)[ \t]\((.*)/:/^(.*)\/(.*) /;return{name:l.default.getFirstMatch(f,u),version:l.default.getSecondMatch(f,u)}}}],r.exports=i.default},93:function(r,i,a){"use strict";i.__esModule=!0,i.default=void 0;var s,l=(s=a(17))&&s.__esModule?s:{default:s},h=a(18);i.default=[{test:[/Roku\/DVP/],describe:function(u){var f=l.default.getFirstMatch(/Roku\/DVP-(\d+\.\d+)/i,u);return{name:h.OS_MAP.Roku,version:f}}},{test:[/windows phone/i],describe:function(u){var f=l.default.getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i,u);return{name:h.OS_MAP.WindowsPhone,version:f}}},{test:[/windows /i],describe:function(u){var f=l.default.getFirstMatch(/Windows ((NT|XP)( \d\d?.\d)?)/i,u),p=l.default.getWindowsVersionName(f);return{name:h.OS_MAP.Windows,version:f,versionName:p}}},{test:[/Macintosh(.*?) FxiOS(.*?)\//],describe:function(u){var f={name:h.OS_MAP.iOS},p=l.default.getSecondMatch(/(Version\/)(\d[\d.]+)/,u);return p&&(f.version=p),f}},{test:[/macintosh/i],describe:function(u){var f=l.default.getFirstMatch(/mac os x (\d+(\.?_?\d+)+)/i,u).replace(/[_\s]/g,"."),p=l.default.getMacOSVersionName(f),b={name:h.OS_MAP.MacOS,version:f};return p&&(b.versionName=p),b}},{test:[/(ipod|iphone|ipad)/i],describe:function(u){var f=l.default.getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i,u).replace(/[_\s]/g,".");return{name:h.OS_MAP.iOS,version:f}}},{test:[/OpenHarmony/i],describe:function(u){var f=l.default.getFirstMatch(/OpenHarmony\s+(\d+(\.\d+)*)/i,u);return{name:h.OS_MAP.HarmonyOS,version:f}}},{test:function(u){var f=!u.test(/like android/i),p=u.test(/android/i);return f&&p},describe:function(u){var f=l.default.getFirstMatch(/android[\s/-](\d+(\.\d+)*)/i,u),p=l.default.getAndroidVersionName(f),b={name:h.OS_MAP.Android,version:f};return p&&(b.versionName=p),b}},{test:[/(web|hpw)[o0]s/i],describe:function(u){var f=l.default.getFirstMatch(/(?:web|hpw)[o0]s\/(\d+(\.\d+)*)/i,u),p={name:h.OS_MAP.WebOS};return f&&f.length&&(p.version=f),p}},{test:[/blackberry|\bbb\d+/i,/rim\stablet/i],describe:function(u){var f=l.default.getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i,u)||l.default.getFirstMatch(/blackberry\d+\/(\d+([_\s]\d+)*)/i,u)||l.default.getFirstMatch(/\bbb(\d+)/i,u);return{name:h.OS_MAP.BlackBerry,version:f}}},{test:[/bada/i],describe:function(u){var f=l.default.getFirstMatch(/bada\/(\d+(\.\d+)*)/i,u);return{name:h.OS_MAP.Bada,version:f}}},{test:[/tizen/i],describe:function(u){var f=l.default.getFirstMatch(/tizen[/\s](\d+(\.\d+)*)/i,u);return{name:h.OS_MAP.Tizen,version:f}}},{test:[/linux/i],describe:function(){return{name:h.OS_MAP.Linux}}},{test:[/CrOS/],describe:function(){return{name:h.OS_MAP.ChromeOS}}},{test:[/PlayStation 4/],describe:function(u){var f=l.default.getFirstMatch(/PlayStation 4[/\s](\d+(\.\d+)*)/i,u);return{name:h.OS_MAP.PlayStation4,version:f}}}],r.exports=i.default},94:function(r,i,a){"use strict";i.__esModule=!0,i.default=void 0;var s,l=(s=a(17))&&s.__esModule?s:{default:s},h=a(18);i.default=[{test:[/googlebot/i],describe:function(){return{type:h.PLATFORMS_MAP.bot,vendor:"Google"}}},{test:[/linespider/i],describe:function(){return{type:h.PLATFORMS_MAP.bot,vendor:"Line"}}},{test:[/amazonbot/i],describe:function(){return{type:h.PLATFORMS_MAP.bot,vendor:"Amazon"}}},{test:[/gptbot/i],describe:function(){return{type:h.PLATFORMS_MAP.bot,vendor:"OpenAI"}}},{test:[/chatgpt-user/i],describe:function(){return{type:h.PLATFORMS_MAP.bot,vendor:"OpenAI"}}},{test:[/oai-searchbot/i],describe:function(){return{type:h.PLATFORMS_MAP.bot,vendor:"OpenAI"}}},{test:[/baiduspider/i],describe:function(){return{type:h.PLATFORMS_MAP.bot,vendor:"Baidu"}}},{test:[/bingbot/i],describe:function(){return{type:h.PLATFORMS_MAP.bot,vendor:"Bing"}}},{test:[/duckduckbot/i],describe:function(){return{type:h.PLATFORMS_MAP.bot,vendor:"DuckDuckGo"}}},{test:[/claudebot/i,/claude-web/i,/claude-user/i,/claude-searchbot/i],describe:function(){return{type:h.PLATFORMS_MAP.bot,vendor:"Anthropic"}}},{test:[/omgilibot/i,/webzio-extended/i],describe:function(){return{type:h.PLATFORMS_MAP.bot,vendor:"Webz.io"}}},{test:[/diffbot/i],describe:function(){return{type:h.PLATFORMS_MAP.bot,vendor:"Diffbot"}}},{test:[/perplexitybot/i],describe:function(){return{type:h.PLATFORMS_MAP.bot,vendor:"Perplexity AI"}}},{test:[/perplexity-user/i],describe:function(){return{type:h.PLATFORMS_MAP.bot,vendor:"Perplexity AI"}}},{test:[/youbot/i],describe:function(){return{type:h.PLATFORMS_MAP.bot,vendor:"You.com"}}},{test:[/ia_archiver/i],describe:function(){return{type:h.PLATFORMS_MAP.bot,vendor:"Internet Archive"}}},{test:[/meta-webindexer/i],describe:function(){return{type:h.PLATFORMS_MAP.bot,vendor:"Meta"}}},{test:[/meta-externalads/i],describe:function(){return{type:h.PLATFORMS_MAP.bot,vendor:"Meta"}}},{test:[/meta-externalagent/i],describe:function(){return{type:h.PLATFORMS_MAP.bot,vendor:"Meta"}}},{test:[/meta-externalfetcher/i],describe:function(){return{type:h.PLATFORMS_MAP.bot,vendor:"Meta"}}},{test:[/facebookexternalhit/i,/facebookcatalog/i],describe:function(){return{type:h.PLATFORMS_MAP.bot,vendor:"Meta"}}},{test:[/slackbot/i,/slack-imgProxy/i],describe:function(){return{type:h.PLATFORMS_MAP.bot,vendor:"Slack"}}},{test:[/yahoo/i],describe:function(){return{type:h.PLATFORMS_MAP.bot,vendor:"Yahoo"}}},{test:[/yandexbot/i,/yandexmobilebot/i],describe:function(){return{type:h.PLATFORMS_MAP.bot,vendor:"Yandex"}}},{test:[/pingdom/i],describe:function(){return{type:h.PLATFORMS_MAP.bot,vendor:"Pingdom"}}},{test:[/huawei/i],describe:function(u){var f=l.default.getFirstMatch(/(can-l01)/i,u)&&"Nova",p={type:h.PLATFORMS_MAP.mobile,vendor:"Huawei"};return f&&(p.model=f),p}},{test:[/nexus\s*(?:7|8|9|10).*/i],describe:function(){return{type:h.PLATFORMS_MAP.tablet,vendor:"Nexus"}}},{test:[/ipad/i],describe:function(){return{type:h.PLATFORMS_MAP.tablet,vendor:"Apple",model:"iPad"}}},{test:[/Macintosh(.*?) FxiOS(.*?)\//],describe:function(){return{type:h.PLATFORMS_MAP.tablet,vendor:"Apple",model:"iPad"}}},{test:[/kftt build/i],describe:function(){return{type:h.PLATFORMS_MAP.tablet,vendor:"Amazon",model:"Kindle Fire HD 7"}}},{test:[/silk/i],describe:function(){return{type:h.PLATFORMS_MAP.tablet,vendor:"Amazon"}}},{test:[/tablet(?! pc)/i],describe:function(){return{type:h.PLATFORMS_MAP.tablet}}},{test:function(u){var f=u.test(/ipod|iphone/i),p=u.test(/like (ipod|iphone)/i);return f&&!p},describe:function(u){var f=l.default.getFirstMatch(/(ipod|iphone)/i,u);return{type:h.PLATFORMS_MAP.mobile,vendor:"Apple",model:f}}},{test:[/nexus\s*[0-6].*/i,/galaxy nexus/i],describe:function(){return{type:h.PLATFORMS_MAP.mobile,vendor:"Nexus"}}},{test:[/Nokia/i],describe:function(u){var f=l.default.getFirstMatch(/Nokia\s+([0-9]+(\.[0-9]+)?)/i,u),p={type:h.PLATFORMS_MAP.mobile,vendor:"Nokia"};return f&&(p.model=f),p}},{test:[/[^-]mobi/i],describe:function(){return{type:h.PLATFORMS_MAP.mobile}}},{test:function(u){return u.getBrowserName(!0)==="blackberry"},describe:function(){return{type:h.PLATFORMS_MAP.mobile,vendor:"BlackBerry"}}},{test:function(u){return u.getBrowserName(!0)==="bada"},describe:function(){return{type:h.PLATFORMS_MAP.mobile}}},{test:function(u){return u.getBrowserName()==="windows phone"},describe:function(){return{type:h.PLATFORMS_MAP.mobile,vendor:"Microsoft"}}},{test:function(u){var f=Number(String(u.getOSVersion()).split(".")[0]);return u.getOSName(!0)==="android"&&f>=3},describe:function(){return{type:h.PLATFORMS_MAP.tablet}}},{test:function(u){return u.getOSName(!0)==="android"},describe:function(){return{type:h.PLATFORMS_MAP.mobile}}},{test:[/smart-?tv|smarttv/i],describe:function(){return{type:h.PLATFORMS_MAP.tv}}},{test:[/netcast/i],describe:function(){return{type:h.PLATFORMS_MAP.tv}}},{test:function(u){return u.getOSName(!0)==="macos"},describe:function(){return{type:h.PLATFORMS_MAP.desktop,vendor:"Apple"}}},{test:function(u){return u.getOSName(!0)==="windows"},describe:function(){return{type:h.PLATFORMS_MAP.desktop}}},{test:function(u){return u.getOSName(!0)==="linux"},describe:function(){return{type:h.PLATFORMS_MAP.desktop}}},{test:function(u){return u.getOSName(!0)==="playstation 4"},describe:function(){return{type:h.PLATFORMS_MAP.tv}}},{test:function(u){return u.getOSName(!0)==="roku"},describe:function(){return{type:h.PLATFORMS_MAP.tv}}}],r.exports=i.default},95:function(r,i,a){"use strict";i.__esModule=!0,i.default=void 0;var s,l=(s=a(17))&&s.__esModule?s:{default:s},h=a(18);i.default=[{test:function(u){return u.getBrowserName(!0)==="microsoft edge"},describe:function(u){if(/\sedg\//i.test(u))return{name:h.ENGINE_MAP.Blink};var f=l.default.getFirstMatch(/edge\/(\d+(\.?_?\d+)+)/i,u);return{name:h.ENGINE_MAP.EdgeHTML,version:f}}},{test:[/trident/i],describe:function(u){var f={name:h.ENGINE_MAP.Trident},p=l.default.getFirstMatch(/trident\/(\d+(\.?_?\d+)+)/i,u);return p&&(f.version=p),f}},{test:function(u){return u.test(/presto/i)},describe:function(u){var f={name:h.ENGINE_MAP.Presto},p=l.default.getFirstMatch(/presto\/(\d+(\.?_?\d+)+)/i,u);return p&&(f.version=p),f}},{test:function(u){var f=u.test(/gecko/i),p=u.test(/like gecko/i);return f&&!p},describe:function(u){var f={name:h.ENGINE_MAP.Gecko},p=l.default.getFirstMatch(/gecko\/(\d+(\.?_?\d+)+)/i,u);return p&&(f.version=p),f}},{test:[/(apple)?webkit\/537\.36/i],describe:function(){return{name:h.ENGINE_MAP.Blink}}},{test:[/(apple)?webkit/i],describe:function(u){var f={name:h.ENGINE_MAP.WebKit},p=l.default.getFirstMatch(/webkit\/(\d+(\.?_?\d+)+)/i,u);return p&&(f.version=p),f}}],r.exports=i.default}})}))})),nu=Fi(i2(),1);function a2(e,t){typeof unsafeWindow<"u"&&(unsafeWindow[e]=t),typeof window<"u"&&(window[e]=t)}function Ee(...e){return console.log("MangaOnlineViewer-main-min: ",...e),e}function _n(...e){return["dev","development"].includes("main-min")&&console.info("MangaOnlineViewer: ",...e),e}function ru(e){typeof GM_deleteValue<"u"?GM_deleteValue(e):_n("Fake Removing: ",e)}var Es=typeof GM_info<"u"?GM_info:{scriptHandler:"Console",script:{name:"Debug",version:"Testing"}};function s2(e,t){return typeof GM_getValue<"u"?GM_getValue(e,t):(_n("Fake Getting: ",e," = ",t),t)}function ou(e,t){const r=s2(e,t);if(typeof r=="string"&&r.trim()!=="")try{return JSON.parse(r)}catch(i){return Ee("Failed to parse JSON from storage",e,i),t}return r}function l2(e){return ou("settings",e)}function c2(e){return ou(window.location.hostname,e)}function iu(e,t){return typeof GM_setValue<"u"?(GM_setValue(e,t),Ee("Setting: ",e," = ",t),t.toString()):(_n("Fake Setting: ",e," = ",t),String(t))}function u2(e){return iu("settings",e)}function au(e){return iu(window.location.hostname,e)}function d2(){const e=nu.default.getParser(window.navigator.userAgent).getBrowser();return`${e.name} ${e.version}`}function h2(){return Es.scriptHandler??"Greasemonkey"}var Wo=()=>{const e=nu.default.getParser(window.navigator.userAgent).getPlatformType(!0);return e==="mobile"||window.matchMedia("screen and (max-width: 600px)").matches?"mobile":e==="tablet"||window.matchMedia("screen and (max-width: 992px)").matches?"tablet":"desktop"},f2=()=>Wo()==="mobile"||Wo()==="tablet",p2=()=>window.location.protocol==="file:"||window.location.pathname.endsWith("Manga_Local_Viewer.html"),su=(e,t="settings")=>{if(typeof GM_addValueChangeListener<"u")try{return GM_addValueChangeListener(t,(r,i,a,s)=>{s&&e(a)})}catch(r){Ee("Failed to add settings listener",r)}},g2=wn(((e,t)=>{(function(){var r,i="4.17.23",a=200,s="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",l="Expected a function",h="Invalid `variable` option passed into `_.template`",u="__lodash_hash_undefined__",f=500,p="__lodash_placeholder__",b=1,w=2,v=4,m=1,E=2,y=1,S=2,x=4,T=8,L=16,D=32,K=64,V=128,ae=256,H=512,ge=30,_e="...",P=800,X=16,A=1,Q=2,Ce=3,se=1/0,Ie=9007199254740991,le=17976931348623157e292,Ae=NaN,W=4294967295,U=W-1,Se=W>>>1,me=[["ary",V],["bind",y],["bindKey",S],["curry",T],["curryRight",L],["flip",H],["partial",D],["partialRight",K],["rearg",ae]],fe="[object Arguments]",Xe="[object Array]",Et="[object AsyncFunction]",Fe="[object Boolean]",Ue="[object Date]",At="[object DOMException]",ot="[object Error]",Ut="[object Function]",Jt="[object GeneratorFunction]",_="[object Map]",ee="[object Number]",j="[object Null]",O="[object Object]",C="[object Promise]",B="[object Proxy]",ie="[object RegExp]",re="[object Set]",F="[object String]",de="[object Symbol]",be="[object Undefined]",he="[object WeakMap]",xe="[object WeakSet]",je="[object ArrayBuffer]",Ge="[object DataView]",Nt="[object Float32Array]",Qn="[object Float64Array]",Qt="[object Int8Array]",er="[object Int16Array]",st="[object Int32Array]",kr="[object Uint8Array]",Kr="[object Uint8ClampedArray]",pn="[object Uint16Array]",Io="[object Uint32Array]",Fl=/\b__p \+= '';/g,Hl=/\b(__p \+=) '' \+/g,Gl=/(__e\(.*?\)|\b__t\)) \+\n'';/g,Ei=/&(?:amp|lt|gt|quot|#39);/g,Er=/[&<>"']/g,Co=RegExp(Ei.source),i7=RegExp(Er.source),a7=/<%-([\s\S]+?)%>/g,s7=/<%([\s\S]+?)%>/g,yh=/<%=([\s\S]+?)%>/g,l7=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,c7=/^\w*$/,u7=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Wl=/[\\^$.*+?()[\]{}|]/g,d7=RegExp(Wl.source),Ul=/^\s+/,h7=/\s/,f7=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,p7=/\{\n\/\* \[wrapped with (.+)\] \*/,g7=/,? & /,m7=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,v7=/[()=,{}\[\]\/\s]/,b7=/\\(\\)?/g,w7=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,kh=/\w*$/,_7=/^[-+]0x[0-9a-f]+$/i,y7=/^0b[01]+$/i,k7=/^\[object .+?Constructor\]$/,E7=/^0o[0-7]+$/i,A7=/^(?:0|[1-9]\d*)$/,S7=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Pa=/($^)/,M7=/['\n\r\u2028\u2029\\]/g,$a="\\ud800-\\udfff",Eh="\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff",Ah="\\u2700-\\u27bf",Sh="a-z\\xdf-\\xf6\\xf8-\\xff",x7="\\xac\\xb1\\xd7\\xf7",I7="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",C7="\\u2000-\\u206f",O7=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Mh="A-Z\\xc0-\\xd6\\xd8-\\xde",xh="\\ufe0e\\ufe0f",Ih=x7+I7+C7+O7,Vl="['’]",T7="["+$a+"]",Ch="["+Ih+"]",Da="["+Eh+"]",Oh="\\d+",L7="["+Ah+"]",Th="["+Sh+"]",Lh="[^"+$a+Ih+Oh+Ah+Sh+Mh+"]",Zl="\\ud83c[\\udffb-\\udfff]",R7="(?:"+Da+"|"+Zl+")",Rh="[^"+$a+"]",ql="(?:\\ud83c[\\udde6-\\uddff]){2}",jl="[\\ud800-\\udbff][\\udc00-\\udfff]",Oo="["+Mh+"]",Ph="\\u200d",$h="(?:"+Th+"|"+Lh+")",P7="(?:"+Oo+"|"+Lh+")",Dh="(?:"+Vl+"(?:d|ll|m|re|s|t|ve))?",zh="(?:"+Vl+"(?:D|LL|M|RE|S|T|VE))?",Bh=R7+"?",Nh="["+xh+"]?",$7="(?:"+Ph+"(?:"+[Rh,ql,jl].join("|")+")"+Nh+Bh+")*",D7="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",z7="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",Fh=Nh+Bh+$7,B7="(?:"+[L7,ql,jl].join("|")+")"+Fh,N7="(?:"+[Rh+Da+"?",Da,ql,jl,T7].join("|")+")",F7=RegExp(Vl,"g"),H7=RegExp(Da,"g"),Kl=RegExp(Zl+"(?="+Zl+")|"+N7+Fh,"g"),G7=RegExp([Oo+"?"+Th+"+"+Dh+"(?="+[Ch,Oo,"$"].join("|")+")",P7+"+"+zh+"(?="+[Ch,Oo+$h,"$"].join("|")+")",Oo+"?"+$h+"+"+Dh,Oo+"+"+zh,z7,D7,Oh,B7].join("|"),"g"),W7=RegExp("["+Ph+$a+Eh+xh+"]"),U7=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,V7=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],Z7=-1,lt={};lt[Nt]=lt[Qn]=lt[Qt]=lt[er]=lt[st]=lt[kr]=lt[Kr]=lt[pn]=lt[Io]=!0,lt[fe]=lt[Xe]=lt[je]=lt[Fe]=lt[Ge]=lt[Ue]=lt[ot]=lt[Ut]=lt[_]=lt[ee]=lt[O]=lt[ie]=lt[re]=lt[F]=lt[he]=!1;var it={};it[fe]=it[Xe]=it[je]=it[Ge]=it[Fe]=it[Ue]=it[Nt]=it[Qn]=it[Qt]=it[er]=it[st]=it[_]=it[ee]=it[O]=it[ie]=it[re]=it[F]=it[de]=it[kr]=it[Kr]=it[pn]=it[Io]=!0,it[ot]=it[Ut]=it[he]=!1;var q7={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},j7={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},K7={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},Y7={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},X7=parseFloat,J7=parseInt,Hh=typeof global=="object"&&global&&global.Object===Object&&global,Q7=typeof self=="object"&&self&&self.Object===Object&&self,Lt=Hh||Q7||Function("return this")(),Yl=typeof e=="object"&&e&&!e.nodeType&&e,Yr=Yl&&typeof t=="object"&&t&&!t.nodeType&&t,Gh=Yr&&Yr.exports===Yl,Xl=Gh&&Hh.process,Mn=(function(){try{var z=Yr&&Yr.require&&Yr.require("util").types;return z||Xl&&Xl.binding&&Xl.binding("util")}catch{}})(),Wh=Mn&&Mn.isArrayBuffer,Uh=Mn&&Mn.isDate,Vh=Mn&&Mn.isMap,Zh=Mn&&Mn.isRegExp,qh=Mn&&Mn.isSet,jh=Mn&&Mn.isTypedArray;function gn(z,J,Z){switch(Z.length){case 0:return z.call(J);case 1:return z.call(J,Z[0]);case 2:return z.call(J,Z[0],Z[1]);case 3:return z.call(J,Z[0],Z[1],Z[2])}return z.apply(J,Z)}function ew(z,J,Z,we){for(var De=-1,Ye=z==null?0:z.length;++De<Ye;){var It=z[De];J(we,It,Z(It),z)}return we}function xn(z,J){for(var Z=-1,we=z==null?0:z.length;++Z<we&&J(z[Z],Z,z)!==!1;);return z}function tw(z,J){for(var Z=z==null?0:z.length;Z--&&J(z[Z],Z,z)!==!1;);return z}function Kh(z,J){for(var Z=-1,we=z==null?0:z.length;++Z<we;)if(!J(z[Z],Z,z))return!1;return!0}function Ar(z,J){for(var Z=-1,we=z==null?0:z.length,De=0,Ye=[];++Z<we;){var It=z[Z];J(It,Z,z)&&(Ye[De++]=It)}return Ye}function za(z,J){return!!(z!=null&&z.length)&&To(z,J,0)>-1}function Jl(z,J,Z){for(var we=-1,De=z==null?0:z.length;++we<De;)if(Z(J,z[we]))return!0;return!1}function dt(z,J){for(var Z=-1,we=z==null?0:z.length,De=Array(we);++Z<we;)De[Z]=J(z[Z],Z,z);return De}function Sr(z,J){for(var Z=-1,we=J.length,De=z.length;++Z<we;)z[De+Z]=J[Z];return z}function Ql(z,J,Z,we){var De=-1,Ye=z==null?0:z.length;for(we&&Ye&&(Z=z[++De]);++De<Ye;)Z=J(Z,z[De],De,z);return Z}function nw(z,J,Z,we){var De=z==null?0:z.length;for(we&&De&&(Z=z[--De]);De--;)Z=J(Z,z[De],De,z);return Z}function ec(z,J){for(var Z=-1,we=z==null?0:z.length;++Z<we;)if(J(z[Z],Z,z))return!0;return!1}var rw=tc("length");function ow(z){return z.split("")}function iw(z){return z.match(m7)||[]}function Yh(z,J,Z){var we;return Z(z,function(De,Ye,It){if(J(De,Ye,It))return we=Ye,!1}),we}function Ba(z,J,Z,we){for(var De=z.length,Ye=Z+(we?1:-1);we?Ye--:++Ye<De;)if(J(z[Ye],Ye,z))return Ye;return-1}function To(z,J,Z){return J===J?vw(z,J,Z):Ba(z,Xh,Z)}function aw(z,J,Z,we){for(var De=Z-1,Ye=z.length;++De<Ye;)if(we(z[De],J))return De;return-1}function Xh(z){return z!==z}function Jh(z,J){var Z=z==null?0:z.length;return Z?rc(z,J)/Z:Ae}function tc(z){return function(J){return J==null?r:J[z]}}function nc(z){return function(J){return z==null?r:z[J]}}function Qh(z,J,Z,we,De){return De(z,function(Ye,It,tt){Z=we?(we=!1,Ye):J(Z,Ye,It,tt)}),Z}function sw(z,J){var Z=z.length;for(z.sort(J);Z--;)z[Z]=z[Z].value;return z}function rc(z,J){for(var Z,we=-1,De=z.length;++we<De;){var Ye=J(z[we]);Ye!==r&&(Z=Z===r?Ye:Z+Ye)}return Z}function oc(z,J){for(var Z=-1,we=Array(z);++Z<z;)we[Z]=J(Z);return we}function lw(z,J){return dt(J,function(Z){return[Z,z[Z]]})}function e1(z){return z&&z.slice(0,o1(z)+1).replace(Ul,"")}function mn(z){return function(J){return z(J)}}function ic(z,J){return dt(J,function(Z){return z[Z]})}function Ai(z,J){return z.has(J)}function t1(z,J){for(var Z=-1,we=z.length;++Z<we&&To(J,z[Z],0)>-1;);return Z}function n1(z,J){for(var Z=z.length;Z--&&To(J,z[Z],0)>-1;);return Z}function cw(z,J){for(var Z=z.length,we=0;Z--;)z[Z]===J&&++we;return we}var uw=nc(q7),dw=nc(j7);function hw(z){return"\\"+Y7[z]}function fw(z,J){return z==null?r:z[J]}function Lo(z){return W7.test(z)}function pw(z){return U7.test(z)}function gw(z){for(var J,Z=[];!(J=z.next()).done;)Z.push(J.value);return Z}function ac(z){var J=-1,Z=Array(z.size);return z.forEach(function(we,De){Z[++J]=[De,we]}),Z}function r1(z,J){return function(Z){return z(J(Z))}}function Mr(z,J){for(var Z=-1,we=z.length,De=0,Ye=[];++Z<we;){var It=z[Z];(It===J||It===p)&&(z[Z]=p,Ye[De++]=Z)}return Ye}function Na(z){var J=-1,Z=Array(z.size);return z.forEach(function(we){Z[++J]=we}),Z}function mw(z){var J=-1,Z=Array(z.size);return z.forEach(function(we){Z[++J]=[we,we]}),Z}function vw(z,J,Z){for(var we=Z-1,De=z.length;++we<De;)if(z[we]===J)return we;return-1}function bw(z,J,Z){for(var we=Z+1;we--;)if(z[we]===J)return we;return we}function Ro(z){return Lo(z)?_w(z):rw(z)}function Bn(z){return Lo(z)?yw(z):ow(z)}function o1(z){for(var J=z.length;J--&&h7.test(z.charAt(J)););return J}var ww=nc(K7);function _w(z){for(var J=Kl.lastIndex=0;Kl.test(z);)++J;return J}function yw(z){return z.match(Kl)||[]}function kw(z){return z.match(G7)||[]}var xr=(function z(J){J=J==null?Lt:xr.defaults(Lt.Object(),J,xr.pick(Lt,V7));var Z=J.Array,we=J.Date,De=J.Error,Ye=J.Function,It=J.Math,tt=J.Object,sc=J.RegExp,Ew=J.String,In=J.TypeError,Fa=Z.prototype,Aw=Ye.prototype,Po=tt.prototype,Ha=J["__core-js_shared__"],Ga=Aw.toString,Je=Po.hasOwnProperty,Sw=0,i1=(function(){var n=/[^.]+$/.exec(Ha&&Ha.keys&&Ha.keys.IE_PROTO||"");return n?"Symbol(src)_1."+n:""})(),Wa=Po.toString,Mw=Ga.call(tt),xw=Lt._,Iw=sc("^"+Ga.call(Je).replace(Wl,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Ua=Gh?J.Buffer:r,Ir=J.Symbol,Va=J.Uint8Array,a1=Ua?Ua.allocUnsafe:r,Za=r1(tt.getPrototypeOf,tt),s1=tt.create,l1=Po.propertyIsEnumerable,qa=Fa.splice,c1=Ir?Ir.isConcatSpreadable:r,Si=Ir?Ir.iterator:r,Xr=Ir?Ir.toStringTag:r,ja=(function(){try{var n=no(tt,"defineProperty");return n({},"",{}),n}catch{}})(),Cw=J.clearTimeout!==Lt.clearTimeout&&J.clearTimeout,Ow=we&&we.now!==Lt.Date.now&&we.now,Tw=J.setTimeout!==Lt.setTimeout&&J.setTimeout,Ka=It.ceil,Ya=It.floor,lc=tt.getOwnPropertySymbols,Lw=Ua?Ua.isBuffer:r,u1=J.isFinite,Rw=Fa.join,Pw=r1(tt.keys,tt),Ct=It.max,Ft=It.min,$w=we.now,Dw=J.parseInt,d1=It.random,zw=Fa.reverse,cc=no(J,"DataView"),Mi=no(J,"Map"),uc=no(J,"Promise"),$o=no(J,"Set"),xi=no(J,"WeakMap"),Ii=no(tt,"create"),Xa=xi&&new xi,Do={},Bw=ro(cc),Nw=ro(Mi),Fw=ro(uc),Hw=ro($o),Gw=ro(xi),Ja=Ir?Ir.prototype:r,Ci=Ja?Ja.valueOf:r,h1=Ja?Ja.toString:r;function M(n){if(mt(n)&&!He(n)&&!(n instanceof Ze)){if(n instanceof Cn)return n;if(Je.call(n,"__wrapped__"))return pf(n)}return new Cn(n)}var zo=(function(){function n(){}return function(o){if(!pt(o))return{};if(s1)return s1(o);n.prototype=o;var c=new n;return n.prototype=r,c}})();function Qa(){}function Cn(n,o){this.__wrapped__=n,this.__actions__=[],this.__chain__=!!o,this.__index__=0,this.__values__=r}M.templateSettings={escape:a7,evaluate:s7,interpolate:yh,variable:"",imports:{_:M}},M.prototype=Qa.prototype,M.prototype.constructor=M,Cn.prototype=zo(Qa.prototype),Cn.prototype.constructor=Cn;function Ze(n){this.__wrapped__=n,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=W,this.__views__=[]}function Ww(){var n=new Ze(this.__wrapped__);return n.__actions__=en(this.__actions__),n.__dir__=this.__dir__,n.__filtered__=this.__filtered__,n.__iteratees__=en(this.__iteratees__),n.__takeCount__=this.__takeCount__,n.__views__=en(this.__views__),n}function Uw(){if(this.__filtered__){var n=new Ze(this);n.__dir__=-1,n.__filtered__=!0}else n=this.clone(),n.__dir__*=-1;return n}function Vw(){var n=this.__wrapped__.value(),o=this.__dir__,c=He(n),g=o<0,k=c?n.length:0,I=r_(0,k,this.__views__),R=I.start,$=I.end,N=$-R,ne=g?$:R-1,te=this.__iteratees__,ce=te.length,ve=0,ye=Ft(N,this.__takeCount__);if(!c||!g&&k==N&&ye==N)return D1(n,this.__actions__);var Oe=[];e:for(;N--&&ve<ye;){ne+=o;for(var ze=-1,Le=n[ne];++ze<ce;){var nt=te[ze],qe=nt.iteratee,qt=nt.type,jn=qe(Le);if(qt==Q)Le=jn;else if(!jn){if(qt==A)continue e;break e}}Oe[ve++]=Le}return Oe}Ze.prototype=zo(Qa.prototype),Ze.prototype.constructor=Ze;function Jr(n){var o=-1,c=n==null?0:n.length;for(this.clear();++o<c;){var g=n[o];this.set(g[0],g[1])}}function Zw(){this.__data__=Ii?Ii(null):{},this.size=0}function qw(n){var o=this.has(n)&&delete this.__data__[n];return this.size-=o?1:0,o}function jw(n){var o=this.__data__;if(Ii){var c=o[n];return c===u?r:c}return Je.call(o,n)?o[n]:r}function Kw(n){var o=this.__data__;return Ii?o[n]!==r:Je.call(o,n)}function Yw(n,o){var c=this.__data__;return this.size+=this.has(n)?0:1,c[n]=Ii&&o===r?u:o,this}Jr.prototype.clear=Zw,Jr.prototype.delete=qw,Jr.prototype.get=jw,Jr.prototype.has=Kw,Jr.prototype.set=Yw;function tr(n){var o=-1,c=n==null?0:n.length;for(this.clear();++o<c;){var g=n[o];this.set(g[0],g[1])}}function Xw(){this.__data__=[],this.size=0}function Jw(n){var o=this.__data__,c=es(o,n);return c<0?!1:(c==o.length-1?o.pop():qa.call(o,c,1),--this.size,!0)}function Qw(n){var o=this.__data__,c=es(o,n);return c<0?r:o[c][1]}function e8(n){return es(this.__data__,n)>-1}function t8(n,o){var c=this.__data__,g=es(c,n);return g<0?(++this.size,c.push([n,o])):c[g][1]=o,this}tr.prototype.clear=Xw,tr.prototype.delete=Jw,tr.prototype.get=Qw,tr.prototype.has=e8,tr.prototype.set=t8;function nr(n){var o=-1,c=n==null?0:n.length;for(this.clear();++o<c;){var g=n[o];this.set(g[0],g[1])}}function n8(){this.size=0,this.__data__={hash:new Jr,map:new(Mi||tr),string:new Jr}}function r8(n){var o=hs(this,n).delete(n);return this.size-=o?1:0,o}function o8(n){return hs(this,n).get(n)}function i8(n){return hs(this,n).has(n)}function a8(n,o){var c=hs(this,n),g=c.size;return c.set(n,o),this.size+=c.size==g?0:1,this}nr.prototype.clear=n8,nr.prototype.delete=r8,nr.prototype.get=o8,nr.prototype.has=i8,nr.prototype.set=a8;function Qr(n){var o=-1,c=n==null?0:n.length;for(this.__data__=new nr;++o<c;)this.add(n[o])}function s8(n){return this.__data__.set(n,u),this}function l8(n){return this.__data__.has(n)}Qr.prototype.add=Qr.prototype.push=s8,Qr.prototype.has=l8;function Nn(n){this.size=(this.__data__=new tr(n)).size}function c8(){this.__data__=new tr,this.size=0}function u8(n){var o=this.__data__,c=o.delete(n);return this.size=o.size,c}function d8(n){return this.__data__.get(n)}function h8(n){return this.__data__.has(n)}function f8(n,o){var c=this.__data__;if(c instanceof tr){var g=c.__data__;if(!Mi||g.length<a-1)return g.push([n,o]),this.size=++c.size,this;c=this.__data__=new nr(g)}return c.set(n,o),this.size=c.size,this}Nn.prototype.clear=c8,Nn.prototype.delete=u8,Nn.prototype.get=d8,Nn.prototype.has=h8,Nn.prototype.set=f8;function f1(n,o){var c=He(n),g=!c&&oo(n),k=!c&&!g&&Rr(n),I=!c&&!g&&!k&&Ho(n),R=c||g||k||I,$=R?oc(n.length,Ew):[],N=$.length;for(var ne in n)(o||Je.call(n,ne))&&!(R&&(ne=="length"||k&&(ne=="offset"||ne=="parent")||I&&(ne=="buffer"||ne=="byteLength"||ne=="byteOffset")||ar(ne,N)))&&$.push(ne);return $}function p1(n){var o=n.length;return o?n[yc(0,o-1)]:r}function p8(n,o){return fs(en(n),eo(o,0,n.length))}function g8(n){return fs(en(n))}function dc(n,o,c){(c!==r&&!Fn(n[o],c)||c===r&&!(o in n))&&rr(n,o,c)}function Oi(n,o,c){var g=n[o];(!(Je.call(n,o)&&Fn(g,c))||c===r&&!(o in n))&&rr(n,o,c)}function es(n,o){for(var c=n.length;c--;)if(Fn(n[c][0],o))return c;return-1}function m8(n,o,c,g){return Cr(n,function(k,I,R){o(g,k,c(k),R)}),g}function g1(n,o){return n&&Zn(o,Rt(o),n)}function v8(n,o){return n&&Zn(o,nn(o),n)}function rr(n,o,c){o=="__proto__"&&ja?ja(n,o,{configurable:!0,enumerable:!0,value:c,writable:!0}):n[o]=c}function hc(n,o){for(var c=-1,g=o.length,k=Z(g),I=n==null;++c<g;)k[c]=I?r:Zc(n,o[c]);return k}function eo(n,o,c){return n===n&&(c!==r&&(n=n<=c?n:c),o!==r&&(n=n>=o?n:o)),n}function On(n,o,c,g,k,I){var R,$=o&b,N=o&w,ne=o&v;if(c&&(R=k?c(n,g,k,I):c(n)),R!==r)return R;if(!pt(n))return n;var te=He(n);if(te){if(R=i_(n),!$)return en(n,R)}else{var ce=Ht(n),ve=ce==Ut||ce==Jt;if(Rr(n))return N1(n,$);if(ce==O||ce==fe||ve&&!k){if(R=N||ve?{}:of(n),!$)return N?j8(n,v8(R,n)):q8(n,g1(R,n))}else{if(!it[ce])return k?n:{};R=a_(n,ce,$)}}I||(I=new Nn);var ye=I.get(n);if(ye)return ye;I.set(n,R),Pf(n)?n.forEach(function(ze){R.add(On(ze,o,c,ze,n,I))}):Lf(n)&&n.forEach(function(ze,Le){R.set(Le,On(ze,o,c,Le,n,I))});var Oe=te?r:(ne?N?Lc:Tc:N?nn:Rt)(n);return xn(Oe||n,function(ze,Le){Oe&&(Le=ze,ze=n[Le]),Oi(R,Le,On(ze,o,c,Le,n,I))}),R}function b8(n){var o=Rt(n);return function(c){return m1(c,n,o)}}function m1(n,o,c){var g=c.length;if(n==null)return!g;for(n=tt(n);g--;){var k=c[g],I=o[k],R=n[k];if(R===r&&!(k in n)||!I(R))return!1}return!0}function v1(n,o,c){if(typeof n!="function")throw new In(l);return zi(function(){n.apply(r,c)},o)}function Ti(n,o,c,g){var k=-1,I=za,R=!0,$=n.length,N=[],ne=o.length;if(!$)return N;c&&(o=dt(o,mn(c))),g?(I=Jl,R=!1):o.length>=a&&(I=Ai,R=!1,o=new Qr(o));e:for(;++k<$;){var te=n[k],ce=c==null?te:c(te);if(te=g||te!==0?te:0,R&&ce===ce){for(var ve=ne;ve--;)if(o[ve]===ce)continue e;N.push(te)}else I(o,ce,g)||N.push(te)}return N}var Cr=U1(Vn),b1=U1(pc,!0);function w8(n,o){var c=!0;return Cr(n,function(g,k,I){return c=!!o(g,k,I),c}),c}function ts(n,o,c){for(var g=-1,k=n.length;++g<k;){var I=n[g],R=o(I);if(R!=null&&($===r?R===R&&!bn(R):c(R,$)))var $=R,N=I}return N}function _8(n,o,c,g){var k=n.length;for(c=We(c),c<0&&(c=-c>k?0:k+c),g=g===r||g>k?k:We(g),g<0&&(g+=k),g=c>g?0:Df(g);c<g;)n[c++]=o;return n}function w1(n,o){var c=[];return Cr(n,function(g,k,I){o(g,k,I)&&c.push(g)}),c}function zt(n,o,c,g,k){var I=-1,R=n.length;for(c||(c=l_),k||(k=[]);++I<R;){var $=n[I];o>0&&c($)?o>1?zt($,o-1,c,g,k):Sr(k,$):g||(k[k.length]=$)}return k}var fc=V1(),_1=V1(!0);function Vn(n,o){return n&&fc(n,o,Rt)}function pc(n,o){return n&&_1(n,o,Rt)}function ns(n,o){return Ar(o,function(c){return sr(n[c])})}function to(n,o){o=Tr(o,n);for(var c=0,g=o.length;n!=null&&c<g;)n=n[qn(o[c++])];return c&&c==g?n:r}function y1(n,o,c){var g=o(n);return He(n)?g:Sr(g,c(n))}function Vt(n){return n==null?n===r?be:j:Xr&&Xr in tt(n)?n_(n):g_(n)}function gc(n,o){return n>o}function y8(n,o){return n!=null&&Je.call(n,o)}function k8(n,o){return n!=null&&o in tt(n)}function E8(n,o,c){return n>=Ft(o,c)&&n<Ct(o,c)}function mc(n,o,c){for(var g=c?Jl:za,k=n[0].length,I=n.length,R=I,$=Z(I),N=1/0,ne=[];R--;){var te=n[R];R&&o&&(te=dt(te,mn(o))),N=Ft(te.length,N),$[R]=!c&&(o||k>=120&&te.length>=120)?new Qr(R&&te):r}te=n[0];var ce=-1,ve=$[0];e:for(;++ce<k&&ne.length<N;){var ye=te[ce],Oe=o?o(ye):ye;if(ye=c||ye!==0?ye:0,!(ve?Ai(ve,Oe):g(ne,Oe,c))){for(R=I;--R;){var ze=$[R];if(!(ze?Ai(ze,Oe):g(n[R],Oe,c)))continue e}ve&&ve.push(Oe),ne.push(ye)}}return ne}function A8(n,o,c,g){return Vn(n,function(k,I,R){o(g,c(k),I,R)}),g}function Li(n,o,c){o=Tr(o,n),n=cf(n,o);var g=n==null?n:n[qn(Ln(o))];return g==null?r:gn(g,n,c)}function k1(n){return mt(n)&&Vt(n)==fe}function S8(n){return mt(n)&&Vt(n)==je}function M8(n){return mt(n)&&Vt(n)==Ue}function Ri(n,o,c,g,k){return n===o?!0:n==null||o==null||!mt(n)&&!mt(o)?n!==n&&o!==o:x8(n,o,c,g,Ri,k)}function x8(n,o,c,g,k,I){var R=He(n),$=He(o),N=R?Xe:Ht(n),ne=$?Xe:Ht(o);N=N==fe?O:N,ne=ne==fe?O:ne;var te=N==O,ce=ne==O,ve=N==ne;if(ve&&Rr(n)){if(!Rr(o))return!1;R=!0,te=!1}if(ve&&!te)return I||(I=new Nn),R||Ho(n)?tf(n,o,c,g,k,I):e_(n,o,N,c,g,k,I);if(!(c&m)){var ye=te&&Je.call(n,"__wrapped__"),Oe=ce&&Je.call(o,"__wrapped__");if(ye||Oe){var ze=ye?n.value():n,Le=Oe?o.value():o;return I||(I=new Nn),k(ze,Le,c,g,I)}}return ve?(I||(I=new Nn),t_(n,o,c,g,k,I)):!1}function I8(n){return mt(n)&&Ht(n)==_}function vc(n,o,c,g){var k=c.length,I=k,R=!g;if(n==null)return!I;for(n=tt(n);k--;){var $=c[k];if(R&&$[2]?$[1]!==n[$[0]]:!($[0]in n))return!1}for(;++k<I;){$=c[k];var N=$[0],ne=n[N],te=$[1];if(R&&$[2]){if(ne===r&&!(N in n))return!1}else{var ce=new Nn;if(g)var ve=g(ne,te,N,n,o,ce);if(!(ve===r?Ri(te,ne,m|E,g,ce):ve))return!1}}return!0}function E1(n){return!pt(n)||u_(n)?!1:(sr(n)?Iw:k7).test(ro(n))}function C8(n){return mt(n)&&Vt(n)==ie}function O8(n){return mt(n)&&Ht(n)==re}function T8(n){return mt(n)&&ws(n.length)&&!!lt[Vt(n)]}function A1(n){return typeof n=="function"?n:n==null?rn:typeof n=="object"?He(n)?x1(n[0],n[1]):M1(n):qf(n)}function bc(n){if(!Di(n))return Pw(n);var o=[];for(var c in tt(n))Je.call(n,c)&&c!="constructor"&&o.push(c);return o}function L8(n){if(!pt(n))return p_(n);var o=Di(n),c=[];for(var g in n)g=="constructor"&&(o||!Je.call(n,g))||c.push(g);return c}function wc(n,o){return n<o}function S1(n,o){var c=-1,g=tn(n)?Z(n.length):[];return Cr(n,function(k,I,R){g[++c]=o(k,I,R)}),g}function M1(n){var o=Pc(n);return o.length==1&&o[0][2]?sf(o[0][0],o[0][1]):function(c){return c===n||vc(c,n,o)}}function x1(n,o){return Dc(n)&&af(o)?sf(qn(n),o):function(c){var g=Zc(c,n);return g===r&&g===o?qc(c,n):Ri(o,g,m|E)}}function rs(n,o,c,g,k){n!==o&&fc(o,function(I,R){if(k||(k=new Nn),pt(I))R8(n,o,R,c,rs,g,k);else{var $=g?g(Bc(n,R),I,R+"",n,o,k):r;$===r&&($=I),dc(n,R,$)}},nn)}function R8(n,o,c,g,k,I,R){var $=Bc(n,c),N=Bc(o,c),ne=R.get(N);if(ne){dc(n,c,ne);return}var te=I?I($,N,c+"",n,o,R):r,ce=te===r;if(ce){var ve=He(N),ye=!ve&&Rr(N),Oe=!ve&&!ye&&Ho(N);te=N,ve||ye||Oe?He($)?te=$:vt($)?te=en($):ye?(ce=!1,te=N1(N,!0)):Oe?(ce=!1,te=F1(N,!0)):te=[]:Bi(N)||oo(N)?(te=$,oo($)?te=zf($):(!pt($)||sr($))&&(te=of(N))):ce=!1}ce&&(R.set(N,te),k(te,N,g,I,R),R.delete(N)),dc(n,c,te)}function I1(n,o){var c=n.length;if(c)return o+=o<0?c:0,ar(o,c)?n[o]:r}function C1(n,o,c){o.length?o=dt(o,function(k){return He(k)?function(I){return to(I,k.length===1?k[0]:k)}:k}):o=[rn];var g=-1;return o=dt(o,mn(Te())),sw(S1(n,function(k,I,R){var $=dt(o,function(N){return N(k)});return{criteria:$,index:++g,value:k}}),function(k,I){return Z8(k,I,c)})}function P8(n,o){return O1(n,o,function(c,g){return qc(n,g)})}function O1(n,o,c){for(var g=-1,k=o.length,I={};++g<k;){var R=o[g],$=to(n,R);c($,R)&&Pi(I,Tr(R,n),$)}return I}function $8(n){return function(o){return to(o,n)}}function _c(n,o,c,g){var k=g?aw:To,I=-1,R=o.length,$=n;for(n===o&&(o=en(o)),c&&($=dt(n,mn(c)));++I<R;)for(var N=0,ne=o[I],te=c?c(ne):ne;(N=k($,te,N,g))>-1;)$!==n&&qa.call($,N,1),qa.call(n,N,1);return n}function T1(n,o){for(var c=n?o.length:0,g=c-1;c--;){var k=o[c];if(c==g||k!==I){var I=k;ar(k)?qa.call(n,k,1):Ac(n,k)}}return n}function yc(n,o){return n+Ya(d1()*(o-n+1))}function D8(n,o,c,g){for(var k=-1,I=Ct(Ka((o-n)/(c||1)),0),R=Z(I);I--;)R[g?I:++k]=n,n+=c;return R}function kc(n,o){var c="";if(!n||o<1||o>Ie)return c;do o%2&&(c+=n),o=Ya(o/2),o&&(n+=n);while(o);return c}function Ve(n,o){return Nc(lf(n,o,rn),n+"")}function z8(n){return p1(Go(n))}function B8(n,o){var c=Go(n);return fs(c,eo(o,0,c.length))}function Pi(n,o,c,g){if(!pt(n))return n;o=Tr(o,n);for(var k=-1,I=o.length,R=I-1,$=n;$!=null&&++k<I;){var N=qn(o[k]),ne=c;if(N==="__proto__"||N==="constructor"||N==="prototype")return n;if(k!=R){var te=$[N];ne=g?g(te,N,$):r,ne===r&&(ne=pt(te)?te:ar(o[k+1])?[]:{})}Oi($,N,ne),$=$[N]}return n}var L1=Xa?function(n,o){return Xa.set(n,o),n}:rn,N8=ja?function(n,o){return ja(n,"toString",{configurable:!0,enumerable:!1,value:Kc(o),writable:!0})}:rn;function F8(n){return fs(Go(n))}function Tn(n,o,c){var g=-1,k=n.length;o<0&&(o=-o>k?0:k+o),c=c>k?k:c,c<0&&(c+=k),k=o>c?0:c-o>>>0,o>>>=0;for(var I=Z(k);++g<k;)I[g]=n[g+o];return I}function H8(n,o){var c;return Cr(n,function(g,k,I){return c=o(g,k,I),!c}),!!c}function os(n,o,c){var g=0,k=n==null?g:n.length;if(typeof o=="number"&&o===o&&k<=Se){for(;g<k;){var I=g+k>>>1,R=n[I];R!==null&&!bn(R)&&(c?R<=o:R<o)?g=I+1:k=I}return k}return Ec(n,o,rn,c)}function Ec(n,o,c,g){var k=0,I=n==null?0:n.length;if(I===0)return 0;o=c(o);for(var R=o!==o,$=o===null,N=bn(o),ne=o===r;k<I;){var te=Ya((k+I)/2),ce=c(n[te]),ve=ce!==r,ye=ce===null,Oe=ce===ce,ze=bn(ce);if(R)var Le=g||Oe;else ne?Le=Oe&&(g||ve):$?Le=Oe&&ve&&(g||!ye):N?Le=Oe&&ve&&!ye&&(g||!ze):ye||ze?Le=!1:Le=g?ce<=o:ce<o;Le?k=te+1:I=te}return Ft(I,U)}function R1(n,o){for(var c=-1,g=n.length,k=0,I=[];++c<g;){var R=n[c],$=o?o(R):R;if(!c||!Fn($,N)){var N=$;I[k++]=R===0?0:R}}return I}function P1(n){return typeof n=="number"?n:bn(n)?Ae:+n}function vn(n){if(typeof n=="string")return n;if(He(n))return dt(n,vn)+"";if(bn(n))return h1?h1.call(n):"";var o=n+"";return o=="0"&&1/n==-se?"-0":o}function Or(n,o,c){var g=-1,k=za,I=n.length,R=!0,$=[],N=$;if(c)R=!1,k=Jl;else if(I>=a){var ne=o?null:J8(n);if(ne)return Na(ne);R=!1,k=Ai,N=new Qr}else N=o?[]:$;e:for(;++g<I;){var te=n[g],ce=o?o(te):te;if(te=c||te!==0?te:0,R&&ce===ce){for(var ve=N.length;ve--;)if(N[ve]===ce)continue e;o&&N.push(ce),$.push(te)}else k(N,ce,c)||(N!==$&&N.push(ce),$.push(te))}return $}function Ac(n,o){o=Tr(o,n);var c=-1,g=o.length;if(!g)return!0;for(var k=n==null||typeof n!="object"&&typeof n!="function";++c<g;){var I=o[c];if(typeof I=="string"){if(I==="__proto__"&&!Je.call(n,"__proto__"))return!1;if(I==="constructor"&&c+1<g&&typeof o[c+1]=="string"&&o[c+1]==="prototype"){if(k&&c===0)continue;return!1}}}var R=cf(n,o);return R==null||delete R[qn(Ln(o))]}function $1(n,o,c,g){return Pi(n,o,c(to(n,o)),g)}function is(n,o,c,g){for(var k=n.length,I=g?k:-1;(g?I--:++I<k)&&o(n[I],I,n););return c?Tn(n,g?0:I,g?I+1:k):Tn(n,g?I+1:0,g?k:I)}function D1(n,o){var c=n;return c instanceof Ze&&(c=c.value()),Ql(o,function(g,k){return k.func.apply(k.thisArg,Sr([g],k.args))},c)}function Sc(n,o,c){var g=n.length;if(g<2)return g?Or(n[0]):[];for(var k=-1,I=Z(g);++k<g;)for(var R=n[k],$=-1;++$<g;)$!=k&&(I[k]=Ti(I[k]||R,n[$],o,c));return Or(zt(I,1),o,c)}function z1(n,o,c){for(var g=-1,k=n.length,I=o.length,R={};++g<k;){var $=g<I?o[g]:r;c(R,n[g],$)}return R}function Mc(n){return vt(n)?n:[]}function xc(n){return typeof n=="function"?n:rn}function Tr(n,o){return He(n)?n:Dc(n,o)?[n]:ff(Qe(n))}var G8=Ve;function Lr(n,o,c){var g=n.length;return c=c===r?g:c,!o&&c>=g?n:Tn(n,o,c)}var B1=Cw||function(n){return Lt.clearTimeout(n)};function N1(n,o){if(o)return n.slice();var c=n.length,g=a1?a1(c):new n.constructor(c);return n.copy(g),g}function Ic(n){var o=new n.constructor(n.byteLength);return new Va(o).set(new Va(n)),o}function W8(n,o){var c=o?Ic(n.buffer):n.buffer;return new n.constructor(c,n.byteOffset,n.byteLength)}function U8(n){var o=new n.constructor(n.source,kh.exec(n));return o.lastIndex=n.lastIndex,o}function V8(n){return Ci?tt(Ci.call(n)):{}}function F1(n,o){var c=o?Ic(n.buffer):n.buffer;return new n.constructor(c,n.byteOffset,n.length)}function H1(n,o){if(n!==o){var c=n!==r,g=n===null,k=n===n,I=bn(n),R=o!==r,$=o===null,N=o===o,ne=bn(o);if(!$&&!ne&&!I&&n>o||I&&R&&N&&!$&&!ne||g&&R&&N||!c&&N||!k)return 1;if(!g&&!I&&!ne&&n<o||ne&&c&&k&&!g&&!I||$&&c&&k||!R&&k||!N)return-1}return 0}function Z8(n,o,c){for(var g=-1,k=n.criteria,I=o.criteria,R=k.length,$=c.length;++g<R;){var N=H1(k[g],I[g]);if(N)return g>=$?N:N*(c[g]=="desc"?-1:1)}return n.index-o.index}function G1(n,o,c,g){for(var k=-1,I=n.length,R=c.length,$=-1,N=o.length,ne=Ct(I-R,0),te=Z(N+ne),ce=!g;++$<N;)te[$]=o[$];for(;++k<R;)(ce||k<I)&&(te[c[k]]=n[k]);for(;ne--;)te[$++]=n[k++];return te}function W1(n,o,c,g){for(var k=-1,I=n.length,R=-1,$=c.length,N=-1,ne=o.length,te=Ct(I-$,0),ce=Z(te+ne),ve=!g;++k<te;)ce[k]=n[k];for(var ye=k;++N<ne;)ce[ye+N]=o[N];for(;++R<$;)(ve||k<I)&&(ce[ye+c[R]]=n[k++]);return ce}function en(n,o){var c=-1,g=n.length;for(o||(o=Z(g));++c<g;)o[c]=n[c];return o}function Zn(n,o,c,g){var k=!c;c||(c={});for(var I=-1,R=o.length;++I<R;){var $=o[I],N=g?g(c[$],n[$],$,c,n):r;N===r&&(N=n[$]),k?rr(c,$,N):Oi(c,$,N)}return c}function q8(n,o){return Zn(n,$c(n),o)}function j8(n,o){return Zn(n,nf(n),o)}function as(n,o){return function(c,g){var k=He(c)?ew:m8,I=o?o():{};return k(c,n,Te(g,2),I)}}function Bo(n){return Ve(function(o,c){var g=-1,k=c.length,I=k>1?c[k-1]:r,R=k>2?c[2]:r;for(I=n.length>3&&typeof I=="function"?(k--,I):r,R&&Zt(c[0],c[1],R)&&(I=k<3?r:I,k=1),o=tt(o);++g<k;){var $=c[g];$&&n(o,$,g,I)}return o})}function U1(n,o){return function(c,g){if(c==null)return c;if(!tn(c))return n(c,g);for(var k=c.length,I=o?k:-1,R=tt(c);(o?I--:++I<k)&&g(R[I],I,R)!==!1;);return c}}function V1(n){return function(o,c,g){for(var k=-1,I=tt(o),R=g(o),$=R.length;$--;){var N=R[n?$:++k];if(c(I[N],N,I)===!1)break}return o}}function K8(n,o,c){var g=o&y,k=$i(n);function I(){return(this&&this!==Lt&&this instanceof I?k:n).apply(g?c:this,arguments)}return I}function Z1(n){return function(o){o=Qe(o);var c=Lo(o)?Bn(o):r,g=c?c[0]:o.charAt(0),k=c?Lr(c,1).join(""):o.slice(1);return g[n]()+k}}function No(n){return function(o){return Ql(Vf(Uf(o).replace(F7,"")),n,"")}}function $i(n){return function(){var o=arguments;switch(o.length){case 0:return new n;case 1:return new n(o[0]);case 2:return new n(o[0],o[1]);case 3:return new n(o[0],o[1],o[2]);case 4:return new n(o[0],o[1],o[2],o[3]);case 5:return new n(o[0],o[1],o[2],o[3],o[4]);case 6:return new n(o[0],o[1],o[2],o[3],o[4],o[5]);case 7:return new n(o[0],o[1],o[2],o[3],o[4],o[5],o[6])}var c=zo(n.prototype),g=n.apply(c,o);return pt(g)?g:c}}function Y8(n,o,c){var g=$i(n);function k(){for(var I=arguments.length,R=Z(I),$=I,N=Fo(k);$--;)R[$]=arguments[$];var ne=I<3&&R[0]!==N&&R[I-1]!==N?[]:Mr(R,N);return I-=ne.length,I<c?X1(n,o,ss,k.placeholder,r,R,ne,r,r,c-I):gn(this&&this!==Lt&&this instanceof k?g:n,this,R)}return k}function q1(n){return function(o,c,g){var k=tt(o);if(!tn(o)){var I=Te(c,3);o=Rt(o),c=function($){return I(k[$],$,k)}}var R=n(o,c,g);return R>-1?k[I?o[R]:R]:r}}function j1(n){return ir(function(o){var c=o.length,g=c,k=Cn.prototype.thru;for(n&&o.reverse();g--;){var I=o[g];if(typeof I!="function")throw new In(l);if(k&&!R&&ds(I)=="wrapper")var R=new Cn([],!0)}for(g=R?g:c;++g<c;){I=o[g];var $=ds(I),N=$=="wrapper"?Rc(I):r;N&&zc(N[0])&&N[1]==(V|T|D|ae)&&!N[4].length&&N[9]==1?R=R[ds(N[0])].apply(R,N[3]):R=I.length==1&&zc(I)?R[$]():R.thru(I)}return function(){var ne=arguments,te=ne[0];if(R&&ne.length==1&&He(te))return R.plant(te).value();for(var ce=0,ve=c?o[ce].apply(this,ne):te;++ce<c;)ve=o[ce].call(this,ve);return ve}})}function ss(n,o,c,g,k,I,R,$,N,ne){var te=o&V,ce=o&y,ve=o&S,ye=o&(T|L),Oe=o&H,ze=ve?r:$i(n);function Le(){for(var nt=arguments.length,qe=Z(nt),qt=nt;qt--;)qe[qt]=arguments[qt];if(ye)var jn=Fo(Le),Pr=cw(qe,jn);if(g&&(qe=G1(qe,g,k,ye)),I&&(qe=W1(qe,I,R,ye)),nt-=Pr,ye&&nt<ne){var bt=Mr(qe,jn);return X1(n,o,ss,Le.placeholder,c,qe,bt,$,N,ne-nt)}var Hn=ce?c:this,cr=ve?Hn[n]:n;return nt=qe.length,$?qe=m_(qe,$):Oe&&nt>1&&qe.reverse(),te&&N<nt&&(qe.length=N),this&&this!==Lt&&this instanceof Le&&(cr=ze||$i(cr)),cr.apply(Hn,qe)}return Le}function K1(n,o){return function(c,g){return A8(c,n,o(g),{})}}function ls(n,o){return function(c,g){var k;if(c===r&&g===r)return o;if(c!==r&&(k=c),g!==r){if(k===r)return g;typeof c=="string"||typeof g=="string"?(c=vn(c),g=vn(g)):(c=P1(c),g=P1(g)),k=n(c,g)}return k}}function Cc(n){return ir(function(o){return o=dt(o,mn(Te())),Ve(function(c){var g=this;return n(o,function(k){return gn(k,g,c)})})})}function cs(n,o){o=o===r?" ":vn(o);var c=o.length;if(c<2)return c?kc(o,n):o;var g=kc(o,Ka(n/Ro(o)));return Lo(o)?Lr(Bn(g),0,n).join(""):g.slice(0,n)}function X8(n,o,c,g){var k=o&y,I=$i(n);function R(){for(var $=-1,N=arguments.length,ne=-1,te=g.length,ce=Z(te+N),ve=this&&this!==Lt&&this instanceof R?I:n;++ne<te;)ce[ne]=g[ne];for(;N--;)ce[ne++]=arguments[++$];return gn(ve,k?c:this,ce)}return R}function Y1(n){return function(o,c,g){return g&&typeof g!="number"&&Zt(o,c,g)&&(c=g=r),o=lr(o),c===r?(c=o,o=0):c=lr(c),g=g===r?o<c?1:-1:lr(g),D8(o,c,g,n)}}function us(n){return function(o,c){return typeof o=="string"&&typeof c=="string"||(o=Rn(o),c=Rn(c)),n(o,c)}}function X1(n,o,c,g,k,I,R,$,N,ne){var te=o&T,ce=te?R:r,ve=te?r:R,ye=te?I:r,Oe=te?r:I;o|=te?D:K,o&=~(te?K:D),o&x||(o&=~(y|S));var ze=[n,o,k,ye,ce,Oe,ve,$,N,ne],Le=c.apply(r,ze);return zc(n)&&uf(Le,ze),Le.placeholder=g,df(Le,n,o)}function Oc(n){var o=It[n];return function(c,g){if(c=Rn(c),g=g==null?0:Ft(We(g),292),g&&u1(c)){var k=(Qe(c)+"e").split("e");return k=(Qe(o(k[0]+"e"+(+k[1]+g)))+"e").split("e"),+(k[0]+"e"+(+k[1]-g))}return o(c)}}var J8=$o&&1/Na(new $o([,-0]))[1]==se?function(n){return new $o(n)}:Jc;function J1(n){return function(o){var c=Ht(o);return c==_?ac(o):c==re?mw(o):lw(o,n(o))}}function or(n,o,c,g,k,I,R,$){var N=o&S;if(!N&&typeof n!="function")throw new In(l);var ne=g?g.length:0;if(ne||(o&=~(D|K),g=k=r),R=R===r?R:Ct(We(R),0),$=$===r?$:We($),ne-=k?k.length:0,o&K){var te=g,ce=k;g=k=r}var ve=N?r:Rc(n),ye=[n,o,c,g,k,te,ce,I,R,$];if(ve&&f_(ye,ve),n=ye[0],o=ye[1],c=ye[2],g=ye[3],k=ye[4],$=ye[9]=ye[9]===r?N?0:n.length:Ct(ye[9]-ne,0),!$&&o&(T|L)&&(o&=~(T|L)),!o||o==y)var Oe=K8(n,o,c);else o==T||o==L?Oe=Y8(n,o,$):(o==D||o==(y|D))&&!k.length?Oe=X8(n,o,c,g):Oe=ss.apply(r,ye);return df((ve?L1:uf)(Oe,ye),n,o)}function Q1(n,o,c,g){return n===r||Fn(n,Po[c])&&!Je.call(g,c)?o:n}function ef(n,o,c,g,k,I){return pt(n)&&pt(o)&&(I.set(o,n),rs(n,o,r,ef,I),I.delete(o)),n}function Q8(n){return Bi(n)?r:n}function tf(n,o,c,g,k,I){var R=c&m,$=n.length,N=o.length;if($!=N&&!(R&&N>$))return!1;var ne=I.get(n),te=I.get(o);if(ne&&te)return ne==o&&te==n;var ce=-1,ve=!0,ye=c&E?new Qr:r;for(I.set(n,o),I.set(o,n);++ce<$;){var Oe=n[ce],ze=o[ce];if(g)var Le=R?g(ze,Oe,ce,o,n,I):g(Oe,ze,ce,n,o,I);if(Le!==r){if(Le)continue;ve=!1;break}if(ye){if(!ec(o,function(nt,qe){if(!Ai(ye,qe)&&(Oe===nt||k(Oe,nt,c,g,I)))return ye.push(qe)})){ve=!1;break}}else if(!(Oe===ze||k(Oe,ze,c,g,I))){ve=!1;break}}return I.delete(n),I.delete(o),ve}function e_(n,o,c,g,k,I,R){switch(c){case Ge:if(n.byteLength!=o.byteLength||n.byteOffset!=o.byteOffset)return!1;n=n.buffer,o=o.buffer;case je:return!(n.byteLength!=o.byteLength||!I(new Va(n),new Va(o)));case Fe:case Ue:case ee:return Fn(+n,+o);case ot:return n.name==o.name&&n.message==o.message;case ie:case F:return n==o+"";case _:var $=ac;case re:var N=g&m;if($||($=Na),n.size!=o.size&&!N)return!1;var ne=R.get(n);if(ne)return ne==o;g|=E,R.set(n,o);var te=tf($(n),$(o),g,k,I,R);return R.delete(n),te;case de:if(Ci)return Ci.call(n)==Ci.call(o)}return!1}function t_(n,o,c,g,k,I){var R=c&m,$=Tc(n),N=$.length;if(N!=Tc(o).length&&!R)return!1;for(var ne=N;ne--;){var te=$[ne];if(!(R?te in o:Je.call(o,te)))return!1}var ce=I.get(n),ve=I.get(o);if(ce&&ve)return ce==o&&ve==n;var ye=!0;I.set(n,o),I.set(o,n);for(var Oe=R;++ne<N;){te=$[ne];var ze=n[te],Le=o[te];if(g)var nt=R?g(Le,ze,te,o,n,I):g(ze,Le,te,n,o,I);if(!(nt===r?ze===Le||k(ze,Le,c,g,I):nt)){ye=!1;break}Oe||(Oe=te=="constructor")}if(ye&&!Oe){var qe=n.constructor,qt=o.constructor;qe!=qt&&"constructor"in n&&"constructor"in o&&!(typeof qe=="function"&&qe instanceof qe&&typeof qt=="function"&&qt instanceof qt)&&(ye=!1)}return I.delete(n),I.delete(o),ye}function ir(n){return Nc(lf(n,r,vf),n+"")}function Tc(n){return y1(n,Rt,$c)}function Lc(n){return y1(n,nn,nf)}var Rc=Xa?function(n){return Xa.get(n)}:Jc;function ds(n){for(var o=n.name+"",c=Do[o],g=Je.call(Do,o)?c.length:0;g--;){var k=c[g],I=k.func;if(I==null||I==n)return k.name}return o}function Fo(n){return(Je.call(M,"placeholder")?M:n).placeholder}function Te(){var n=M.iteratee||Yc;return n=n===Yc?A1:n,arguments.length?n(arguments[0],arguments[1]):n}function hs(n,o){var c=n.__data__;return c_(o)?c[typeof o=="string"?"string":"hash"]:c.map}function Pc(n){for(var o=Rt(n),c=o.length;c--;){var g=o[c],k=n[g];o[c]=[g,k,af(k)]}return o}function no(n,o){var c=fw(n,o);return E1(c)?c:r}function n_(n){var o=Je.call(n,Xr),c=n[Xr];try{n[Xr]=r;var g=!0}catch{}var k=Wa.call(n);return g&&(o?n[Xr]=c:delete n[Xr]),k}var $c=lc?function(n){return n==null?[]:(n=tt(n),Ar(lc(n),function(o){return l1.call(n,o)}))}:Qc,nf=lc?function(n){for(var o=[];n;)Sr(o,$c(n)),n=Za(n);return o}:Qc,Ht=Vt;(cc&&Ht(new cc(new ArrayBuffer(1)))!=Ge||Mi&&Ht(new Mi)!=_||uc&&Ht(uc.resolve())!=C||$o&&Ht(new $o)!=re||xi&&Ht(new xi)!=he)&&(Ht=function(n){var o=Vt(n),c=o==O?n.constructor:r,g=c?ro(c):"";if(g)switch(g){case Bw:return Ge;case Nw:return _;case Fw:return C;case Hw:return re;case Gw:return he}return o});function r_(n,o,c){for(var g=-1,k=c.length;++g<k;){var I=c[g],R=I.size;switch(I.type){case"drop":n+=R;break;case"dropRight":o-=R;break;case"take":o=Ft(o,n+R);break;case"takeRight":n=Ct(n,o-R);break}}return{start:n,end:o}}function o_(n){var o=n.match(p7);return o?o[1].split(g7):[]}function rf(n,o,c){o=Tr(o,n);for(var g=-1,k=o.length,I=!1;++g<k;){var R=qn(o[g]);if(!(I=n!=null&&c(n,R)))break;n=n[R]}return I||++g!=k?I:(k=n==null?0:n.length,!!k&&ws(k)&&ar(R,k)&&(He(n)||oo(n)))}function i_(n){var o=n.length,c=new n.constructor(o);return o&&typeof n[0]=="string"&&Je.call(n,"index")&&(c.index=n.index,c.input=n.input),c}function of(n){return typeof n.constructor=="function"&&!Di(n)?zo(Za(n)):{}}function a_(n,o,c){var g=n.constructor;switch(o){case je:return Ic(n);case Fe:case Ue:return new g(+n);case Ge:return W8(n,c);case Nt:case Qn:case Qt:case er:case st:case kr:case Kr:case pn:case Io:return F1(n,c);case _:return new g;case ee:case F:return new g(n);case ie:return U8(n);case re:return new g;case de:return V8(n)}}function s_(n,o){var c=o.length;if(!c)return n;var g=c-1;return o[g]=(c>1?"& ":"")+o[g],o=o.join(c>2?", ":" "),n.replace(f7,`{
/* [wrapped with `+o+`] */
`)}function l_(n){return He(n)||oo(n)||!!(c1&&n&&n[c1])}function ar(n,o){var c=typeof n;return o=o??Ie,!!o&&(c=="number"||c!="symbol"&&A7.test(n))&&n>-1&&n%1==0&&n<o}function Zt(n,o,c){if(!pt(c))return!1;var g=typeof o;return(g=="number"?tn(c)&&ar(o,c.length):g=="string"&&o in c)?Fn(c[o],n):!1}function Dc(n,o){if(He(n))return!1;var c=typeof n;return c=="number"||c=="symbol"||c=="boolean"||n==null||bn(n)?!0:c7.test(n)||!l7.test(n)||o!=null&&n in tt(o)}function c_(n){var o=typeof n;return o=="string"||o=="number"||o=="symbol"||o=="boolean"?n!=="__proto__":n===null}function zc(n){var o=ds(n),c=M[o];if(typeof c!="function"||!(o in Ze.prototype))return!1;if(n===c)return!0;var g=Rc(c);return!!g&&n===g[0]}function u_(n){return!!i1&&i1 in n}var d_=Ha?sr:eu;function Di(n){var o=n&&n.constructor;return n===(typeof o=="function"&&o.prototype||Po)}function af(n){return n===n&&!pt(n)}function sf(n,o){return function(c){return c==null?!1:c[n]===o&&(o!==r||n in tt(c))}}function h_(n){var o=vs(n,function(g){return c.size===f&&c.clear(),g}),c=o.cache;return o}function f_(n,o){var c=n[1],g=o[1],k=c|g,I=k<(y|S|V),R=g==V&&c==T||g==V&&c==ae&&n[7].length<=o[8]||g==(V|ae)&&o[7].length<=o[8]&&c==T;if(!(I||R))return n;g&y&&(n[2]=o[2],k|=c&y?0:x);var $=o[3];if($){var N=n[3];n[3]=N?G1(N,$,o[4]):$,n[4]=N?Mr(n[3],p):o[4]}return $=o[5],$&&(N=n[5],n[5]=N?W1(N,$,o[6]):$,n[6]=N?Mr(n[5],p):o[6]),$=o[7],$&&(n[7]=$),g&V&&(n[8]=n[8]==null?o[8]:Ft(n[8],o[8])),n[9]==null&&(n[9]=o[9]),n[0]=o[0],n[1]=k,n}function p_(n){var o=[];if(n!=null)for(var c in tt(n))o.push(c);return o}function g_(n){return Wa.call(n)}function lf(n,o,c){return o=Ct(o===r?n.length-1:o,0),function(){for(var g=arguments,k=-1,I=Ct(g.length-o,0),R=Z(I);++k<I;)R[k]=g[o+k];k=-1;for(var $=Z(o+1);++k<o;)$[k]=g[k];return $[o]=c(R),gn(n,this,$)}}function cf(n,o){return o.length<2?n:to(n,Tn(o,0,-1))}function m_(n,o){for(var c=n.length,g=Ft(o.length,c),k=en(n);g--;){var I=o[g];n[g]=ar(I,c)?k[I]:r}return n}function Bc(n,o){if(!(o==="constructor"&&typeof n[o]=="function")&&o!="__proto__")return n[o]}var uf=hf(L1),zi=Tw||function(n,o){return Lt.setTimeout(n,o)},Nc=hf(N8);function df(n,o,c){var g=o+"";return Nc(n,s_(g,v_(o_(g),c)))}function hf(n){var o=0,c=0;return function(){var g=$w(),k=X-(g-c);if(c=g,k>0){if(++o>=P)return arguments[0]}else o=0;return n.apply(r,arguments)}}function fs(n,o){var c=-1,g=n.length,k=g-1;for(o=o===r?g:o;++c<o;){var I=yc(c,k),R=n[I];n[I]=n[c],n[c]=R}return n.length=o,n}var ff=h_(function(n){var o=[];return n.charCodeAt(0)===46&&o.push(""),n.replace(u7,function(c,g,k,I){o.push(k?I.replace(b7,"$1"):g||c)}),o});function qn(n){if(typeof n=="string"||bn(n))return n;var o=n+"";return o=="0"&&1/n==-se?"-0":o}function ro(n){if(n!=null){try{return Ga.call(n)}catch{}try{return n+""}catch{}}return""}function v_(n,o){return xn(me,function(c){var g="_."+c[0];o&c[1]&&!za(n,g)&&n.push(g)}),n.sort()}function pf(n){if(n instanceof Ze)return n.clone();var o=new Cn(n.__wrapped__,n.__chain__);return o.__actions__=en(n.__actions__),o.__index__=n.__index__,o.__values__=n.__values__,o}function b_(n,o,c){(c?Zt(n,o,c):o===r)?o=1:o=Ct(We(o),0);var g=n==null?0:n.length;if(!g||o<1)return[];for(var k=0,I=0,R=Z(Ka(g/o));k<g;)R[I++]=Tn(n,k,k+=o);return R}function w_(n){for(var o=-1,c=n==null?0:n.length,g=0,k=[];++o<c;){var I=n[o];I&&(k[g++]=I)}return k}function __(){var n=arguments.length;if(!n)return[];for(var o=Z(n-1),c=arguments[0],g=n;g--;)o[g-1]=arguments[g];return Sr(He(c)?en(c):[c],zt(o,1))}var y_=Ve(function(n,o){return vt(n)?Ti(n,zt(o,1,vt,!0)):[]}),k_=Ve(function(n,o){var c=Ln(o);return vt(c)&&(c=r),vt(n)?Ti(n,zt(o,1,vt,!0),Te(c,2)):[]}),E_=Ve(function(n,o){var c=Ln(o);return vt(c)&&(c=r),vt(n)?Ti(n,zt(o,1,vt,!0),r,c):[]});function A_(n,o,c){var g=n==null?0:n.length;return g?(o=c||o===r?1:We(o),Tn(n,o<0?0:o,g)):[]}function S_(n,o,c){var g=n==null?0:n.length;return g?(o=c||o===r?1:We(o),o=g-o,Tn(n,0,o<0?0:o)):[]}function M_(n,o){return n&&n.length?is(n,Te(o,3),!0,!0):[]}function x_(n,o){return n&&n.length?is(n,Te(o,3),!0):[]}function I_(n,o,c,g){var k=n==null?0:n.length;return k?(c&&typeof c!="number"&&Zt(n,o,c)&&(c=0,g=k),_8(n,o,c,g)):[]}function gf(n,o,c){var g=n==null?0:n.length;if(!g)return-1;var k=c==null?0:We(c);return k<0&&(k=Ct(g+k,0)),Ba(n,Te(o,3),k)}function mf(n,o,c){var g=n==null?0:n.length;if(!g)return-1;var k=g-1;return c!==r&&(k=We(c),k=c<0?Ct(g+k,0):Ft(k,g-1)),Ba(n,Te(o,3),k,!0)}function vf(n){return n!=null&&n.length?zt(n,1):[]}function C_(n){return n!=null&&n.length?zt(n,se):[]}function O_(n,o){return n!=null&&n.length?(o=o===r?1:We(o),zt(n,o)):[]}function T_(n){for(var o=-1,c=n==null?0:n.length,g={};++o<c;){var k=n[o];g[k[0]]=k[1]}return g}function bf(n){return n&&n.length?n[0]:r}function L_(n,o,c){var g=n==null?0:n.length;if(!g)return-1;var k=c==null?0:We(c);return k<0&&(k=Ct(g+k,0)),To(n,o,k)}function R_(n){return n!=null&&n.length?Tn(n,0,-1):[]}var P_=Ve(function(n){var o=dt(n,Mc);return o.length&&o[0]===n[0]?mc(o):[]}),$_=Ve(function(n){var o=Ln(n),c=dt(n,Mc);return o===Ln(c)?o=r:c.pop(),c.length&&c[0]===n[0]?mc(c,Te(o,2)):[]}),D_=Ve(function(n){var o=Ln(n),c=dt(n,Mc);return o=typeof o=="function"?o:r,o&&c.pop(),c.length&&c[0]===n[0]?mc(c,r,o):[]});function z_(n,o){return n==null?"":Rw.call(n,o)}function Ln(n){var o=n==null?0:n.length;return o?n[o-1]:r}function B_(n,o,c){var g=n==null?0:n.length;if(!g)return-1;var k=g;return c!==r&&(k=We(c),k=k<0?Ct(g+k,0):Ft(k,g-1)),o===o?bw(n,o,k):Ba(n,Xh,k,!0)}function N_(n,o){return n&&n.length?I1(n,We(o)):r}var F_=Ve(wf);function wf(n,o){return n&&n.length&&o&&o.length?_c(n,o):n}function H_(n,o,c){return n&&n.length&&o&&o.length?_c(n,o,Te(c,2)):n}function G_(n,o,c){return n&&n.length&&o&&o.length?_c(n,o,r,c):n}var W_=ir(function(n,o){var c=n==null?0:n.length,g=hc(n,o);return T1(n,dt(o,function(k){return ar(k,c)?+k:k}).sort(H1)),g});function U_(n,o){var c=[];if(!(n&&n.length))return c;var g=-1,k=[],I=n.length;for(o=Te(o,3);++g<I;){var R=n[g];o(R,g,n)&&(c.push(R),k.push(g))}return T1(n,k),c}function Fc(n){return n==null?n:zw.call(n)}function V_(n,o,c){var g=n==null?0:n.length;return g?(c&&typeof c!="number"&&Zt(n,o,c)?(o=0,c=g):(o=o==null?0:We(o),c=c===r?g:We(c)),Tn(n,o,c)):[]}function Z_(n,o){return os(n,o)}function q_(n,o,c){return Ec(n,o,Te(c,2))}function j_(n,o){var c=n==null?0:n.length;if(c){var g=os(n,o);if(g<c&&Fn(n[g],o))return g}return-1}function K_(n,o){return os(n,o,!0)}function Y_(n,o,c){return Ec(n,o,Te(c,2),!0)}function X_(n,o){if(n!=null&&n.length){var c=os(n,o,!0)-1;if(Fn(n[c],o))return c}return-1}function J_(n){return n&&n.length?R1(n):[]}function Q_(n,o){return n&&n.length?R1(n,Te(o,2)):[]}function ey(n){var o=n==null?0:n.length;return o?Tn(n,1,o):[]}function ty(n,o,c){return n&&n.length?(o=c||o===r?1:We(o),Tn(n,0,o<0?0:o)):[]}function ny(n,o,c){var g=n==null?0:n.length;return g?(o=c||o===r?1:We(o),o=g-o,Tn(n,o<0?0:o,g)):[]}function ry(n,o){return n&&n.length?is(n,Te(o,3),!1,!0):[]}function oy(n,o){return n&&n.length?is(n,Te(o,3)):[]}var iy=Ve(function(n){return Or(zt(n,1,vt,!0))}),ay=Ve(function(n){var o=Ln(n);return vt(o)&&(o=r),Or(zt(n,1,vt,!0),Te(o,2))}),sy=Ve(function(n){var o=Ln(n);return o=typeof o=="function"?o:r,Or(zt(n,1,vt,!0),r,o)});function ly(n){return n&&n.length?Or(n):[]}function cy(n,o){return n&&n.length?Or(n,Te(o,2)):[]}function uy(n,o){return o=typeof o=="function"?o:r,n&&n.length?Or(n,r,o):[]}function Hc(n){if(!(n&&n.length))return[];var o=0;return n=Ar(n,function(c){if(vt(c))return o=Ct(c.length,o),!0}),oc(o,function(c){return dt(n,tc(c))})}function _f(n,o){if(!(n&&n.length))return[];var c=Hc(n);return o==null?c:dt(c,function(g){return gn(o,r,g)})}var dy=Ve(function(n,o){return vt(n)?Ti(n,o):[]}),hy=Ve(function(n){return Sc(Ar(n,vt))}),fy=Ve(function(n){var o=Ln(n);return vt(o)&&(o=r),Sc(Ar(n,vt),Te(o,2))}),py=Ve(function(n){var o=Ln(n);return o=typeof o=="function"?o:r,Sc(Ar(n,vt),r,o)}),gy=Ve(Hc);function my(n,o){return z1(n||[],o||[],Oi)}function vy(n,o){return z1(n||[],o||[],Pi)}var by=Ve(function(n){var o=n.length,c=o>1?n[o-1]:r;return c=typeof c=="function"?(n.pop(),c):r,_f(n,c)});function yf(n){var o=M(n);return o.__chain__=!0,o}function wy(n,o){return o(n),n}function ps(n,o){return o(n)}var _y=ir(function(n){var o=n.length,c=o?n[0]:0,g=this.__wrapped__,k=function(I){return hc(I,n)};return o>1||this.__actions__.length||!(g instanceof Ze)||!ar(c)?this.thru(k):(g=g.slice(c,+c+(o?1:0)),g.__actions__.push({func:ps,args:[k],thisArg:r}),new Cn(g,this.__chain__).thru(function(I){return o&&!I.length&&I.push(r),I}))});function yy(){return yf(this)}function ky(){return new Cn(this.value(),this.__chain__)}function Ey(){this.__values__===r&&(this.__values__=$f(this.value()));var n=this.__index__>=this.__values__.length,o=n?r:this.__values__[this.__index__++];return{done:n,value:o}}function Ay(){return this}function Sy(n){for(var o,c=this;c instanceof Qa;){var g=pf(c);g.__index__=0,g.__values__=r,o?k.__wrapped__=g:o=g;var k=g;c=c.__wrapped__}return k.__wrapped__=n,o}function My(){var n=this.__wrapped__;if(n instanceof Ze){var o=n;return this.__actions__.length&&(o=new Ze(this)),o=o.reverse(),o.__actions__.push({func:ps,args:[Fc],thisArg:r}),new Cn(o,this.__chain__)}return this.thru(Fc)}function xy(){return D1(this.__wrapped__,this.__actions__)}var Iy=as(function(n,o,c){Je.call(n,c)?++n[c]:rr(n,c,1)});function Cy(n,o,c){var g=He(n)?Kh:w8;return c&&Zt(n,o,c)&&(o=r),g(n,Te(o,3))}function Oy(n,o){return(He(n)?Ar:w1)(n,Te(o,3))}var Ty=q1(gf),Ly=q1(mf);function Ry(n,o){return zt(gs(n,o),1)}function Py(n,o){return zt(gs(n,o),se)}function $y(n,o,c){return c=c===r?1:We(c),zt(gs(n,o),c)}function kf(n,o){return(He(n)?xn:Cr)(n,Te(o,3))}function Ef(n,o){return(He(n)?tw:b1)(n,Te(o,3))}var Dy=as(function(n,o,c){Je.call(n,c)?n[c].push(o):rr(n,c,[o])});function zy(n,o,c,g){n=tn(n)?n:Go(n),c=c&&!g?We(c):0;var k=n.length;return c<0&&(c=Ct(k+c,0)),_s(n)?c<=k&&n.indexOf(o,c)>-1:!!k&&To(n,o,c)>-1}var By=Ve(function(n,o,c){var g=-1,k=typeof o=="function",I=tn(n)?Z(n.length):[];return Cr(n,function(R){I[++g]=k?gn(o,R,c):Li(R,o,c)}),I}),Ny=as(function(n,o,c){rr(n,c,o)});function gs(n,o){return(He(n)?dt:S1)(n,Te(o,3))}function Fy(n,o,c,g){return n==null?[]:(He(o)||(o=o==null?[]:[o]),c=g?r:c,He(c)||(c=c==null?[]:[c]),C1(n,o,c))}var Hy=as(function(n,o,c){n[c?0:1].push(o)},function(){return[[],[]]});function Gy(n,o,c){var g=He(n)?Ql:Qh,k=arguments.length<3;return g(n,Te(o,4),c,k,Cr)}function Wy(n,o,c){var g=He(n)?nw:Qh,k=arguments.length<3;return g(n,Te(o,4),c,k,b1)}function Uy(n,o){return(He(n)?Ar:w1)(n,bs(Te(o,3)))}function Vy(n){return(He(n)?p1:z8)(n)}function Zy(n,o,c){return(c?Zt(n,o,c):o===r)?o=1:o=We(o),(He(n)?p8:B8)(n,o)}function qy(n){return(He(n)?g8:F8)(n)}function jy(n){if(n==null)return 0;if(tn(n))return _s(n)?Ro(n):n.length;var o=Ht(n);return o==_||o==re?n.size:bc(n).length}function Ky(n,o,c){var g=He(n)?ec:H8;return c&&Zt(n,o,c)&&(o=r),g(n,Te(o,3))}var Yy=Ve(function(n,o){if(n==null)return[];var c=o.length;return c>1&&Zt(n,o[0],o[1])?o=[]:c>2&&Zt(o[0],o[1],o[2])&&(o=[o[0]]),C1(n,zt(o,1),[])}),ms=Ow||function(){return Lt.Date.now()};function Xy(n,o){if(typeof o!="function")throw new In(l);return n=We(n),function(){if(--n<1)return o.apply(this,arguments)}}function Af(n,o,c){return o=c?r:o,o=n&&o==null?n.length:o,or(n,V,r,r,r,r,o)}function Sf(n,o){var c;if(typeof o!="function")throw new In(l);return n=We(n),function(){return--n>0&&(c=o.apply(this,arguments)),n<=1&&(o=r),c}}var Gc=Ve(function(n,o,c){var g=y;if(c.length){var k=Mr(c,Fo(Gc));g|=D}return or(n,g,o,c,k)}),Mf=Ve(function(n,o,c){var g=y|S;if(c.length){var k=Mr(c,Fo(Mf));g|=D}return or(o,g,n,c,k)});function xf(n,o,c){o=c?r:o;var g=or(n,T,r,r,r,r,r,o);return g.placeholder=xf.placeholder,g}function If(n,o,c){o=c?r:o;var g=or(n,L,r,r,r,r,r,o);return g.placeholder=If.placeholder,g}function Cf(n,o,c){var g,k,I,R,$,N,ne=0,te=!1,ce=!1,ve=!0;if(typeof n!="function")throw new In(l);o=Rn(o)||0,pt(c)&&(te=!!c.leading,ce="maxWait"in c,I=ce?Ct(Rn(c.maxWait)||0,o):I,ve="trailing"in c?!!c.trailing:ve);function ye(bt){var Hn=g,cr=k;return g=k=r,ne=bt,R=n.apply(cr,Hn),R}function Oe(bt){return ne=bt,$=zi(nt,o),te?ye(bt):R}function ze(bt){var Hn=bt-N,cr=bt-ne,jf=o-Hn;return ce?Ft(jf,I-cr):jf}function Le(bt){var Hn=bt-N,cr=bt-ne;return N===r||Hn>=o||Hn<0||ce&&cr>=I}function nt(){var bt=ms();if(Le(bt))return qe(bt);$=zi(nt,ze(bt))}function qe(bt){return $=r,ve&&g?ye(bt):(g=k=r,R)}function qt(){$!==r&&B1($),ne=0,g=N=k=$=r}function jn(){return $===r?R:qe(ms())}function Pr(){var bt=ms(),Hn=Le(bt);if(g=arguments,k=this,N=bt,Hn){if($===r)return Oe(N);if(ce)return B1($),$=zi(nt,o),ye(N)}return $===r&&($=zi(nt,o)),R}return Pr.cancel=qt,Pr.flush=jn,Pr}var Jy=Ve(function(n,o){return v1(n,1,o)}),Qy=Ve(function(n,o,c){return v1(n,Rn(o)||0,c)});function ek(n){return or(n,H)}function vs(n,o){if(typeof n!="function"||o!=null&&typeof o!="function")throw new In(l);var c=function(){var g=arguments,k=o?o.apply(this,g):g[0],I=c.cache;if(I.has(k))return I.get(k);var R=n.apply(this,g);return c.cache=I.set(k,R)||I,R};return c.cache=new(vs.Cache||nr),c}vs.Cache=nr;function bs(n){if(typeof n!="function")throw new In(l);return function(){var o=arguments;switch(o.length){case 0:return!n.call(this);case 1:return!n.call(this,o[0]);case 2:return!n.call(this,o[0],o[1]);case 3:return!n.call(this,o[0],o[1],o[2])}return!n.apply(this,o)}}function tk(n){return Sf(2,n)}var nk=G8(function(n,o){o=o.length==1&&He(o[0])?dt(o[0],mn(Te())):dt(zt(o,1),mn(Te()));var c=o.length;return Ve(function(g){for(var k=-1,I=Ft(g.length,c);++k<I;)g[k]=o[k].call(this,g[k]);return gn(n,this,g)})}),Wc=Ve(function(n,o){return or(n,D,r,o,Mr(o,Fo(Wc)))}),Of=Ve(function(n,o){return or(n,K,r,o,Mr(o,Fo(Of)))}),rk=ir(function(n,o){return or(n,ae,r,r,r,o)});function ok(n,o){if(typeof n!="function")throw new In(l);return o=o===r?o:We(o),Ve(n,o)}function ik(n,o){if(typeof n!="function")throw new In(l);return o=o==null?0:Ct(We(o),0),Ve(function(c){var g=c[o],k=Lr(c,0,o);return g&&Sr(k,g),gn(n,this,k)})}function ak(n,o,c){var g=!0,k=!0;if(typeof n!="function")throw new In(l);return pt(c)&&(g="leading"in c?!!c.leading:g,k="trailing"in c?!!c.trailing:k),Cf(n,o,{leading:g,maxWait:o,trailing:k})}function sk(n){return Af(n,1)}function lk(n,o){return Wc(xc(o),n)}function ck(){if(!arguments.length)return[];var n=arguments[0];return He(n)?n:[n]}function uk(n){return On(n,v)}function dk(n,o){return o=typeof o=="function"?o:r,On(n,v,o)}function hk(n){return On(n,b|v)}function fk(n,o){return o=typeof o=="function"?o:r,On(n,b|v,o)}function pk(n,o){return o==null||m1(n,o,Rt(o))}function Fn(n,o){return n===o||n!==n&&o!==o}var gk=us(gc),mk=us(function(n,o){return n>=o}),oo=k1((function(){return arguments})())?k1:function(n){return mt(n)&&Je.call(n,"callee")&&!l1.call(n,"callee")},He=Z.isArray,vk=Wh?mn(Wh):S8;function tn(n){return n!=null&&ws(n.length)&&!sr(n)}function vt(n){return mt(n)&&tn(n)}function bk(n){return n===!0||n===!1||mt(n)&&Vt(n)==Fe}var Rr=Lw||eu,wk=Uh?mn(Uh):M8;function _k(n){return mt(n)&&n.nodeType===1&&!Bi(n)}function yk(n){if(n==null)return!0;if(tn(n)&&(He(n)||typeof n=="string"||typeof n.splice=="function"||Rr(n)||Ho(n)||oo(n)))return!n.length;var o=Ht(n);if(o==_||o==re)return!n.size;if(Di(n))return!bc(n).length;for(var c in n)if(Je.call(n,c))return!1;return!0}function kk(n,o){return Ri(n,o)}function Ek(n,o,c){c=typeof c=="function"?c:r;var g=c?c(n,o):r;return g===r?Ri(n,o,r,c):!!g}function Uc(n){if(!mt(n))return!1;var o=Vt(n);return o==ot||o==At||typeof n.message=="string"&&typeof n.name=="string"&&!Bi(n)}function Ak(n){return typeof n=="number"&&u1(n)}function sr(n){if(!pt(n))return!1;var o=Vt(n);return o==Ut||o==Jt||o==Et||o==B}function Tf(n){return typeof n=="number"&&n==We(n)}function ws(n){return typeof n=="number"&&n>-1&&n%1==0&&n<=Ie}function pt(n){var o=typeof n;return n!=null&&(o=="object"||o=="function")}function mt(n){return n!=null&&typeof n=="object"}var Lf=Vh?mn(Vh):I8;function Sk(n,o){return n===o||vc(n,o,Pc(o))}function Mk(n,o,c){return c=typeof c=="function"?c:r,vc(n,o,Pc(o),c)}function xk(n){return Rf(n)&&n!=+n}function Ik(n){if(d_(n))throw new De(s);return E1(n)}function Ck(n){return n===null}function Ok(n){return n==null}function Rf(n){return typeof n=="number"||mt(n)&&Vt(n)==ee}function Bi(n){if(!mt(n)||Vt(n)!=O)return!1;var o=Za(n);if(o===null)return!0;var c=Je.call(o,"constructor")&&o.constructor;return typeof c=="function"&&c instanceof c&&Ga.call(c)==Mw}var Vc=Zh?mn(Zh):C8;function Tk(n){return Tf(n)&&n>=-Ie&&n<=Ie}var Pf=qh?mn(qh):O8;function _s(n){return typeof n=="string"||!He(n)&&mt(n)&&Vt(n)==F}function bn(n){return typeof n=="symbol"||mt(n)&&Vt(n)==de}var Ho=jh?mn(jh):T8;function Lk(n){return n===r}function Rk(n){return mt(n)&&Ht(n)==he}function Pk(n){return mt(n)&&Vt(n)==xe}var $k=us(wc),Dk=us(function(n,o){return n<=o});function $f(n){if(!n)return[];if(tn(n))return _s(n)?Bn(n):en(n);if(Si&&n[Si])return gw(n[Si]());var o=Ht(n);return(o==_?ac:o==re?Na:Go)(n)}function lr(n){return n?(n=Rn(n),n===se||n===-se?(n<0?-1:1)*le:n===n?n:0):n===0?n:0}function We(n){var o=lr(n),c=o%1;return o===o?c?o-c:o:0}function Df(n){return n?eo(We(n),0,W):0}function Rn(n){if(typeof n=="number")return n;if(bn(n))return Ae;if(pt(n)){var o=typeof n.valueOf=="function"?n.valueOf():n;n=pt(o)?o+"":o}if(typeof n!="string")return n===0?n:+n;n=e1(n);var c=y7.test(n);return c||E7.test(n)?J7(n.slice(2),c?2:8):_7.test(n)?Ae:+n}function zf(n){return Zn(n,nn(n))}function zk(n){return n?eo(We(n),-Ie,Ie):n===0?n:0}function Qe(n){return n==null?"":vn(n)}var Bk=Bo(function(n,o){if(Di(o)||tn(o)){Zn(o,Rt(o),n);return}for(var c in o)Je.call(o,c)&&Oi(n,c,o[c])}),Bf=Bo(function(n,o){Zn(o,nn(o),n)}),ys=Bo(function(n,o,c,g){Zn(o,nn(o),n,g)}),Nk=Bo(function(n,o,c,g){Zn(o,Rt(o),n,g)}),Fk=ir(hc);function Hk(n,o){var c=zo(n);return o==null?c:g1(c,o)}var Gk=Ve(function(n,o){n=tt(n);var c=-1,g=o.length,k=g>2?o[2]:r;for(k&&Zt(o[0],o[1],k)&&(g=1);++c<g;)for(var I=o[c],R=nn(I),$=-1,N=R.length;++$<N;){var ne=R[$],te=n[ne];(te===r||Fn(te,Po[ne])&&!Je.call(n,ne))&&(n[ne]=I[ne])}return n}),Wk=Ve(function(n){return n.push(r,ef),gn(Nf,r,n)});function Uk(n,o){return Yh(n,Te(o,3),Vn)}function Vk(n,o){return Yh(n,Te(o,3),pc)}function Zk(n,o){return n==null?n:fc(n,Te(o,3),nn)}function qk(n,o){return n==null?n:_1(n,Te(o,3),nn)}function jk(n,o){return n&&Vn(n,Te(o,3))}function Kk(n,o){return n&&pc(n,Te(o,3))}function Yk(n){return n==null?[]:ns(n,Rt(n))}function Xk(n){return n==null?[]:ns(n,nn(n))}function Zc(n,o,c){var g=n==null?r:to(n,o);return g===r?c:g}function Jk(n,o){return n!=null&&rf(n,o,y8)}function qc(n,o){return n!=null&&rf(n,o,k8)}var Qk=K1(function(n,o,c){o!=null&&typeof o.toString!="function"&&(o=Wa.call(o)),n[o]=c},Kc(rn)),eE=K1(function(n,o,c){o!=null&&typeof o.toString!="function"&&(o=Wa.call(o)),Je.call(n,o)?n[o].push(c):n[o]=[c]},Te),tE=Ve(Li);function Rt(n){return tn(n)?f1(n):bc(n)}function nn(n){return tn(n)?f1(n,!0):L8(n)}function nE(n,o){var c={};return o=Te(o,3),Vn(n,function(g,k,I){rr(c,o(g,k,I),g)}),c}function rE(n,o){var c={};return o=Te(o,3),Vn(n,function(g,k,I){rr(c,k,o(g,k,I))}),c}var oE=Bo(function(n,o,c){rs(n,o,c)}),Nf=Bo(function(n,o,c,g){rs(n,o,c,g)}),iE=ir(function(n,o){var c={};if(n==null)return c;var g=!1;o=dt(o,function(I){return I=Tr(I,n),g||(g=I.length>1),I}),Zn(n,Lc(n),c),g&&(c=On(c,b|w|v,Q8));for(var k=o.length;k--;)Ac(c,o[k]);return c});function aE(n,o){return Ff(n,bs(Te(o)))}var sE=ir(function(n,o){return n==null?{}:P8(n,o)});function Ff(n,o){if(n==null)return{};var c=dt(Lc(n),function(g){return[g]});return o=Te(o),O1(n,c,function(g,k){return o(g,k[0])})}function lE(n,o,c){o=Tr(o,n);var g=-1,k=o.length;for(k||(k=1,n=r);++g<k;){var I=n==null?r:n[qn(o[g])];I===r&&(g=k,I=c),n=sr(I)?I.call(n):I}return n}function cE(n,o,c){return n==null?n:Pi(n,o,c)}function uE(n,o,c,g){return g=typeof g=="function"?g:r,n==null?n:Pi(n,o,c,g)}var Hf=J1(Rt),Gf=J1(nn);function dE(n,o,c){var g=He(n),k=g||Rr(n)||Ho(n);if(o=Te(o,4),c==null){var I=n&&n.constructor;k?c=g?new I:[]:pt(n)?c=sr(I)?zo(Za(n)):{}:c={}}return(k?xn:Vn)(n,function(R,$,N){return o(c,R,$,N)}),c}function hE(n,o){return n==null?!0:Ac(n,o)}function fE(n,o,c){return n==null?n:$1(n,o,xc(c))}function pE(n,o,c,g){return g=typeof g=="function"?g:r,n==null?n:$1(n,o,xc(c),g)}function Go(n){return n==null?[]:ic(n,Rt(n))}function gE(n){return n==null?[]:ic(n,nn(n))}function mE(n,o,c){return c===r&&(c=o,o=r),c!==r&&(c=Rn(c),c=c===c?c:0),o!==r&&(o=Rn(o),o=o===o?o:0),eo(Rn(n),o,c)}function vE(n,o,c){return o=lr(o),c===r?(c=o,o=0):c=lr(c),n=Rn(n),E8(n,o,c)}function bE(n,o,c){if(c&&typeof c!="boolean"&&Zt(n,o,c)&&(o=c=r),c===r&&(typeof o=="boolean"?(c=o,o=r):typeof n=="boolean"&&(c=n,n=r)),n===r&&o===r?(n=0,o=1):(n=lr(n),o===r?(o=n,n=0):o=lr(o)),n>o){var g=n;n=o,o=g}if(c||n%1||o%1){var k=d1();return Ft(n+k*(o-n+X7("1e-"+((k+"").length-1))),o)}return yc(n,o)}var wE=No(function(n,o,c){return o=o.toLowerCase(),n+(c?Wf(o):o)});function Wf(n){return jc(Qe(n).toLowerCase())}function Uf(n){return n=Qe(n),n&&n.replace(S7,uw).replace(H7,"")}function _E(n,o,c){n=Qe(n),o=vn(o);var g=n.length;c=c===r?g:eo(We(c),0,g);var k=c;return c-=o.length,c>=0&&n.slice(c,k)==o}function yE(n){return n=Qe(n),n&&i7.test(n)?n.replace(Er,dw):n}function kE(n){return n=Qe(n),n&&d7.test(n)?n.replace(Wl,"\\$&"):n}var EE=No(function(n,o,c){return n+(c?"-":"")+o.toLowerCase()}),AE=No(function(n,o,c){return n+(c?" ":"")+o.toLowerCase()}),SE=Z1("toLowerCase");function ME(n,o,c){n=Qe(n),o=We(o);var g=o?Ro(n):0;if(!o||g>=o)return n;var k=(o-g)/2;return cs(Ya(k),c)+n+cs(Ka(k),c)}function xE(n,o,c){n=Qe(n),o=We(o);var g=o?Ro(n):0;return o&&g<o?n+cs(o-g,c):n}function IE(n,o,c){n=Qe(n),o=We(o);var g=o?Ro(n):0;return o&&g<o?cs(o-g,c)+n:n}function CE(n,o,c){return c||o==null?o=0:o&&(o=+o),Dw(Qe(n).replace(Ul,""),o||0)}function OE(n,o,c){return(c?Zt(n,o,c):o===r)?o=1:o=We(o),kc(Qe(n),o)}function TE(){var n=arguments,o=Qe(n[0]);return n.length<3?o:o.replace(n[1],n[2])}var LE=No(function(n,o,c){return n+(c?"_":"")+o.toLowerCase()});function RE(n,o,c){return c&&typeof c!="number"&&Zt(n,o,c)&&(o=c=r),c=c===r?W:c>>>0,c?(n=Qe(n),n&&(typeof o=="string"||o!=null&&!Vc(o))&&(o=vn(o),!o&&Lo(n))?Lr(Bn(n),0,c):n.split(o,c)):[]}var PE=No(function(n,o,c){return n+(c?" ":"")+jc(o)});function $E(n,o,c){return n=Qe(n),c=c==null?0:eo(We(c),0,n.length),o=vn(o),n.slice(c,c+o.length)==o}function DE(n,o,c){var g=M.templateSettings;c&&Zt(n,o,c)&&(o=r),n=Qe(n),o=ys({},o,g,Q1);var k=ys({},o.imports,g.imports,Q1),I=Rt(k),R=ic(k,I),$,N,ne=0,te=o.interpolate||Pa,ce="__p += '",ve=sc((o.escape||Pa).source+"|"+te.source+"|"+(te===yh?w7:Pa).source+"|"+(o.evaluate||Pa).source+"|$","g"),ye="//# sourceURL="+(Je.call(o,"sourceURL")?(o.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++Z7+"]")+`
`;n.replace(ve,function(Le,nt,qe,qt,jn,Pr){return qe||(qe=qt),ce+=n.slice(ne,Pr).replace(M7,hw),nt&&($=!0,ce+=`' +
__e(`+nt+`) +
'`),jn&&(N=!0,ce+=`';
`+jn+`;
__p += '`),qe&&(ce+=`' +
((__t = (`+qe+`)) == null ? '' : __t) +
'`),ne=Pr+Le.length,Le}),ce+=`';
`;var Oe=Je.call(o,"variable")&&o.variable;if(!Oe)ce=`with (obj) {
`+ce+`
}
`;else if(v7.test(Oe))throw new De(h);ce=(N?ce.replace(Fl,""):ce).replace(Hl,"$1").replace(Gl,"$1;"),ce="function("+(Oe||"obj")+`) {
`+(Oe?"":`obj || (obj = {});
`)+"var __t, __p = ''"+($?", __e = _.escape":"")+(N?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+ce+`return __p
}`;var ze=Zf(function(){return Ye(I,ye+"return "+ce).apply(r,R)});if(ze.source=ce,Uc(ze))throw ze;return ze}function zE(n){return Qe(n).toLowerCase()}function BE(n){return Qe(n).toUpperCase()}function NE(n,o,c){if(n=Qe(n),n&&(c||o===r))return e1(n);if(!n||!(o=vn(o)))return n;var g=Bn(n),k=Bn(o);return Lr(g,t1(g,k),n1(g,k)+1).join("")}function FE(n,o,c){if(n=Qe(n),n&&(c||o===r))return n.slice(0,o1(n)+1);if(!n||!(o=vn(o)))return n;var g=Bn(n);return Lr(g,0,n1(g,Bn(o))+1).join("")}function HE(n,o,c){if(n=Qe(n),n&&(c||o===r))return n.replace(Ul,"");if(!n||!(o=vn(o)))return n;var g=Bn(n);return Lr(g,t1(g,Bn(o))).join("")}function GE(n,o){var c=ge,g=_e;if(pt(o)){var k="separator"in o?o.separator:k;c="length"in o?We(o.length):c,g="omission"in o?vn(o.omission):g}n=Qe(n);var I=n.length;if(Lo(n)){var R=Bn(n);I=R.length}if(c>=I)return n;var $=c-Ro(g);if($<1)return g;var N=R?Lr(R,0,$).join(""):n.slice(0,$);if(k===r)return N+g;if(R&&($+=N.length-$),Vc(k)){if(n.slice($).search(k)){var ne,te=N;for(k.global||(k=sc(k.source,Qe(kh.exec(k))+"g")),k.lastIndex=0;ne=k.exec(te);)var ce=ne.index;N=N.slice(0,ce===r?$:ce)}}else if(n.indexOf(vn(k),$)!=$){var ve=N.lastIndexOf(k);ve>-1&&(N=N.slice(0,ve))}return N+g}function WE(n){return n=Qe(n),n&&Co.test(n)?n.replace(Ei,ww):n}var UE=No(function(n,o,c){return n+(c?" ":"")+o.toUpperCase()}),jc=Z1("toUpperCase");function Vf(n,o,c){return n=Qe(n),o=c?r:o,o===r?pw(n)?kw(n):iw(n):n.match(o)||[]}var Zf=Ve(function(n,o){try{return gn(n,r,o)}catch(c){return Uc(c)?c:new De(c)}}),VE=ir(function(n,o){return xn(o,function(c){c=qn(c),rr(n,c,Gc(n[c],n))}),n});function ZE(n){var o=n==null?0:n.length,c=Te();return n=o?dt(n,function(g){if(typeof g[1]!="function")throw new In(l);return[c(g[0]),g[1]]}):[],Ve(function(g){for(var k=-1;++k<o;){var I=n[k];if(gn(I[0],this,g))return gn(I[1],this,g)}})}function qE(n){return b8(On(n,b))}function Kc(n){return function(){return n}}function jE(n,o){return n==null||n!==n?o:n}var KE=j1(),YE=j1(!0);function rn(n){return n}function Yc(n){return A1(typeof n=="function"?n:On(n,b))}function XE(n){return M1(On(n,b))}function JE(n,o){return x1(n,On(o,b))}var QE=Ve(function(n,o){return function(c){return Li(c,n,o)}}),eA=Ve(function(n,o){return function(c){return Li(n,c,o)}});function Xc(n,o,c){var g=Rt(o),k=ns(o,g);c==null&&!(pt(o)&&(k.length||!g.length))&&(c=o,o=n,n=this,k=ns(o,Rt(o)));var I=!(pt(c)&&"chain"in c)||!!c.chain,R=sr(n);return xn(k,function($){var N=o[$];n[$]=N,R&&(n.prototype[$]=function(){var ne=this.__chain__;if(I||ne){var te=n(this.__wrapped__);return(te.__actions__=en(this.__actions__)).push({func:N,args:arguments,thisArg:n}),te.__chain__=ne,te}return N.apply(n,Sr([this.value()],arguments))})}),n}function tA(){return Lt._===this&&(Lt._=xw),this}function Jc(){}function nA(n){return n=We(n),Ve(function(o){return I1(o,n)})}var rA=Cc(dt),oA=Cc(Kh),iA=Cc(ec);function qf(n){return Dc(n)?tc(qn(n)):$8(n)}function aA(n){return function(o){return n==null?r:to(n,o)}}var sA=Y1(),lA=Y1(!0);function Qc(){return[]}function eu(){return!1}function cA(){return{}}function uA(){return""}function dA(){return!0}function hA(n,o){if(n=We(n),n<1||n>Ie)return[];var c=W,g=Ft(n,W);o=Te(o),n-=W;for(var k=oc(g,o);++c<n;)o(c);return k}function fA(n){return He(n)?dt(n,qn):bn(n)?[n]:en(ff(Qe(n)))}function pA(n){var o=++Sw;return Qe(n)+o}var gA=ls(function(n,o){return n+o},0),mA=Oc("ceil"),vA=ls(function(n,o){return n/o},1),bA=Oc("floor");function wA(n){return n&&n.length?ts(n,rn,gc):r}function _A(n,o){return n&&n.length?ts(n,Te(o,2),gc):r}function yA(n){return Jh(n,rn)}function kA(n,o){return Jh(n,Te(o,2))}function EA(n){return n&&n.length?ts(n,rn,wc):r}function AA(n,o){return n&&n.length?ts(n,Te(o,2),wc):r}var SA=ls(function(n,o){return n*o},1),MA=Oc("round"),xA=ls(function(n,o){return n-o},0);function IA(n){return n&&n.length?rc(n,rn):0}function CA(n,o){return n&&n.length?rc(n,Te(o,2)):0}return M.after=Xy,M.ary=Af,M.assign=Bk,M.assignIn=Bf,M.assignInWith=ys,M.assignWith=Nk,M.at=Fk,M.before=Sf,M.bind=Gc,M.bindAll=VE,M.bindKey=Mf,M.castArray=ck,M.chain=yf,M.chunk=b_,M.compact=w_,M.concat=__,M.cond=ZE,M.conforms=qE,M.constant=Kc,M.countBy=Iy,M.create=Hk,M.curry=xf,M.curryRight=If,M.debounce=Cf,M.defaults=Gk,M.defaultsDeep=Wk,M.defer=Jy,M.delay=Qy,M.difference=y_,M.differenceBy=k_,M.differenceWith=E_,M.drop=A_,M.dropRight=S_,M.dropRightWhile=M_,M.dropWhile=x_,M.fill=I_,M.filter=Oy,M.flatMap=Ry,M.flatMapDeep=Py,M.flatMapDepth=$y,M.flatten=vf,M.flattenDeep=C_,M.flattenDepth=O_,M.flip=ek,M.flow=KE,M.flowRight=YE,M.fromPairs=T_,M.functions=Yk,M.functionsIn=Xk,M.groupBy=Dy,M.initial=R_,M.intersection=P_,M.intersectionBy=$_,M.intersectionWith=D_,M.invert=Qk,M.invertBy=eE,M.invokeMap=By,M.iteratee=Yc,M.keyBy=Ny,M.keys=Rt,M.keysIn=nn,M.map=gs,M.mapKeys=nE,M.mapValues=rE,M.matches=XE,M.matchesProperty=JE,M.memoize=vs,M.merge=oE,M.mergeWith=Nf,M.method=QE,M.methodOf=eA,M.mixin=Xc,M.negate=bs,M.nthArg=nA,M.omit=iE,M.omitBy=aE,M.once=tk,M.orderBy=Fy,M.over=rA,M.overArgs=nk,M.overEvery=oA,M.overSome=iA,M.partial=Wc,M.partialRight=Of,M.partition=Hy,M.pick=sE,M.pickBy=Ff,M.property=qf,M.propertyOf=aA,M.pull=F_,M.pullAll=wf,M.pullAllBy=H_,M.pullAllWith=G_,M.pullAt=W_,M.range=sA,M.rangeRight=lA,M.rearg=rk,M.reject=Uy,M.remove=U_,M.rest=ok,M.reverse=Fc,M.sampleSize=Zy,M.set=cE,M.setWith=uE,M.shuffle=qy,M.slice=V_,M.sortBy=Yy,M.sortedUniq=J_,M.sortedUniqBy=Q_,M.split=RE,M.spread=ik,M.tail=ey,M.take=ty,M.takeRight=ny,M.takeRightWhile=ry,M.takeWhile=oy,M.tap=wy,M.throttle=ak,M.thru=ps,M.toArray=$f,M.toPairs=Hf,M.toPairsIn=Gf,M.toPath=fA,M.toPlainObject=zf,M.transform=dE,M.unary=sk,M.union=iy,M.unionBy=ay,M.unionWith=sy,M.uniq=ly,M.uniqBy=cy,M.uniqWith=uy,M.unset=hE,M.unzip=Hc,M.unzipWith=_f,M.update=fE,M.updateWith=pE,M.values=Go,M.valuesIn=gE,M.without=dy,M.words=Vf,M.wrap=lk,M.xor=hy,M.xorBy=fy,M.xorWith=py,M.zip=gy,M.zipObject=my,M.zipObjectDeep=vy,M.zipWith=by,M.entries=Hf,M.entriesIn=Gf,M.extend=Bf,M.extendWith=ys,Xc(M,M),M.add=gA,M.attempt=Zf,M.camelCase=wE,M.capitalize=Wf,M.ceil=mA,M.clamp=mE,M.clone=uk,M.cloneDeep=hk,M.cloneDeepWith=fk,M.cloneWith=dk,M.conformsTo=pk,M.deburr=Uf,M.defaultTo=jE,M.divide=vA,M.endsWith=_E,M.eq=Fn,M.escape=yE,M.escapeRegExp=kE,M.every=Cy,M.find=Ty,M.findIndex=gf,M.findKey=Uk,M.findLast=Ly,M.findLastIndex=mf,M.findLastKey=Vk,M.floor=bA,M.forEach=kf,M.forEachRight=Ef,M.forIn=Zk,M.forInRight=qk,M.forOwn=jk,M.forOwnRight=Kk,M.get=Zc,M.gt=gk,M.gte=mk,M.has=Jk,M.hasIn=qc,M.head=bf,M.identity=rn,M.includes=zy,M.indexOf=L_,M.inRange=vE,M.invoke=tE,M.isArguments=oo,M.isArray=He,M.isArrayBuffer=vk,M.isArrayLike=tn,M.isArrayLikeObject=vt,M.isBoolean=bk,M.isBuffer=Rr,M.isDate=wk,M.isElement=_k,M.isEmpty=yk,M.isEqual=kk,M.isEqualWith=Ek,M.isError=Uc,M.isFinite=Ak,M.isFunction=sr,M.isInteger=Tf,M.isLength=ws,M.isMap=Lf,M.isMatch=Sk,M.isMatchWith=Mk,M.isNaN=xk,M.isNative=Ik,M.isNil=Ok,M.isNull=Ck,M.isNumber=Rf,M.isObject=pt,M.isObjectLike=mt,M.isPlainObject=Bi,M.isRegExp=Vc,M.isSafeInteger=Tk,M.isSet=Pf,M.isString=_s,M.isSymbol=bn,M.isTypedArray=Ho,M.isUndefined=Lk,M.isWeakMap=Rk,M.isWeakSet=Pk,M.join=z_,M.kebabCase=EE,M.last=Ln,M.lastIndexOf=B_,M.lowerCase=AE,M.lowerFirst=SE,M.lt=$k,M.lte=Dk,M.max=wA,M.maxBy=_A,M.mean=yA,M.meanBy=kA,M.min=EA,M.minBy=AA,M.stubArray=Qc,M.stubFalse=eu,M.stubObject=cA,M.stubString=uA,M.stubTrue=dA,M.multiply=SA,M.nth=N_,M.noConflict=tA,M.noop=Jc,M.now=ms,M.pad=ME,M.padEnd=xE,M.padStart=IE,M.parseInt=CE,M.random=bE,M.reduce=Gy,M.reduceRight=Wy,M.repeat=OE,M.replace=TE,M.result=lE,M.round=MA,M.runInContext=z,M.sample=Vy,M.size=jy,M.snakeCase=LE,M.some=Ky,M.sortedIndex=Z_,M.sortedIndexBy=q_,M.sortedIndexOf=j_,M.sortedLastIndex=K_,M.sortedLastIndexBy=Y_,M.sortedLastIndexOf=X_,M.startCase=PE,M.startsWith=$E,M.subtract=xA,M.sum=IA,M.sumBy=CA,M.template=DE,M.times=hA,M.toFinite=lr,M.toInteger=We,M.toLength=Df,M.toLower=zE,M.toNumber=Rn,M.toSafeInteger=zk,M.toString=Qe,M.toUpper=BE,M.trim=NE,M.trimEnd=FE,M.trimStart=HE,M.truncate=GE,M.unescape=WE,M.uniqueId=pA,M.upperCase=UE,M.upperFirst=jc,M.each=kf,M.eachRight=Ef,M.first=bf,Xc(M,(function(){var n={};return Vn(M,function(o,c){Je.call(M.prototype,c)||(n[c]=o)}),n})(),{chain:!1}),M.VERSION=i,xn(["bind","bindKey","curry","curryRight","partial","partialRight"],function(n){M[n].placeholder=M}),xn(["drop","take"],function(n,o){Ze.prototype[n]=function(c){c=c===r?1:Ct(We(c),0);var g=this.__filtered__&&!o?new Ze(this):this.clone();return g.__filtered__?g.__takeCount__=Ft(c,g.__takeCount__):g.__views__.push({size:Ft(c,W),type:n+(g.__dir__<0?"Right":"")}),g},Ze.prototype[n+"Right"]=function(c){return this.reverse()[n](c).reverse()}}),xn(["filter","map","takeWhile"],function(n,o){var c=o+1,g=c==A||c==Ce;Ze.prototype[n]=function(k){var I=this.clone();return I.__iteratees__.push({iteratee:Te(k,3),type:c}),I.__filtered__=I.__filtered__||g,I}}),xn(["head","last"],function(n,o){var c="take"+(o?"Right":"");Ze.prototype[n]=function(){return this[c](1).value()[0]}}),xn(["initial","tail"],function(n,o){var c="drop"+(o?"":"Right");Ze.prototype[n]=function(){return this.__filtered__?new Ze(this):this[c](1)}}),Ze.prototype.compact=function(){return this.filter(rn)},Ze.prototype.find=function(n){return this.filter(n).head()},Ze.prototype.findLast=function(n){return this.reverse().find(n)},Ze.prototype.invokeMap=Ve(function(n,o){return typeof n=="function"?new Ze(this):this.map(function(c){return Li(c,n,o)})}),Ze.prototype.reject=function(n){return this.filter(bs(Te(n)))},Ze.prototype.slice=function(n,o){n=We(n);var c=this;return c.__filtered__&&(n>0||o<0)?new Ze(c):(n<0?c=c.takeRight(-n):n&&(c=c.drop(n)),o!==r&&(o=We(o),c=o<0?c.dropRight(-o):c.take(o-n)),c)},Ze.prototype.takeRightWhile=function(n){return this.reverse().takeWhile(n).reverse()},Ze.prototype.toArray=function(){return this.take(W)},Vn(Ze.prototype,function(n,o){var c=/^(?:filter|find|map|reject)|While$/.test(o),g=/^(?:head|last)$/.test(o),k=M[g?"take"+(o=="last"?"Right":""):o],I=g||/^find/.test(o);k&&(M.prototype[o]=function(){var R=this.__wrapped__,$=g?[1]:arguments,N=R instanceof Ze,ne=$[0],te=N||He(R),ce=function(nt){var qe=k.apply(M,Sr([nt],$));return g&&ve?qe[0]:qe};te&&c&&typeof ne=="function"&&ne.length!=1&&(N=te=!1);var ve=this.__chain__,ye=!!this.__actions__.length,Oe=I&&!ve,ze=N&&!ye;if(!I&&te){R=ze?R:new Ze(this);var Le=n.apply(R,$);return Le.__actions__.push({func:ps,args:[ce],thisArg:r}),new Cn(Le,ve)}return Oe&&ze?n.apply(this,$):(Le=this.thru(ce),Oe?g?Le.value()[0]:Le.value():Le)})}),xn(["pop","push","shift","sort","splice","unshift"],function(n){var o=Fa[n],c=/^(?:push|sort|unshift)$/.test(n)?"tap":"thru",g=/^(?:pop|shift)$/.test(n);M.prototype[n]=function(){var k=arguments;if(g&&!this.__chain__){var I=this.value();return o.apply(He(I)?I:[],k)}return this[c](function(R){return o.apply(He(R)?R:[],k)})}}),Vn(Ze.prototype,function(n,o){var c=M[o];if(c){var g=c.name+"";Je.call(Do,g)||(Do[g]=[]),Do[g].push({name:o,func:c})}}),Do[ss(r,S).name]=[{name:"wrapper",func:r}],Ze.prototype.clone=Ww,Ze.prototype.reverse=Uw,Ze.prototype.value=Vw,M.prototype.at=_y,M.prototype.chain=yy,M.prototype.commit=ky,M.prototype.next=Ey,M.prototype.plant=Sy,M.prototype.reverse=My,M.prototype.toJSON=M.prototype.valueOf=M.prototype.value=xy,M.prototype.first=M.prototype.head,Si&&(M.prototype[Si]=Ay),M})();typeof define=="function"&&typeof define.amd=="object"&&define.amd?(Lt._=xr,define(function(){return xr})):Yr?((Yr.exports=xr)._=xr,Yl._=xr):Lt._=xr}).call(e)})),Me=Fi(g2(),1);function As(e){return Me.default.isEmpty(e)||Me.default.isNil(e)}function yn(e){return As(e)||e===!1||e===0}function m2(e,t=document.body){return new Promise(r=>{const i=document.querySelector(e);if(i){r(i);return}const a=new MutationObserver(()=>{const s=document.querySelector(e);s&&(r(s),a.disconnect())});a.observe(t,{childList:!0,subtree:!0,attributes:!0})})}function Ss(e,t=250){return new Promise(r=>{const i=setInterval(()=>{e()&&(clearInterval(i),r(!0))},t)})}function v2(e,t,r=document.body){return new Promise(i=>{const a=r.querySelector(e);if(a?.getAttribute(t)){i(a.getAttribute(t)??"");return}const s=new MutationObserver(()=>{const l=r.querySelector(e);l?.getAttribute(t)&&(i(l.getAttribute(t)??""),s.disconnect())});s.observe(r,{childList:!0,subtree:!0,attributes:!0,attributeFilter:[t]})})}function b2(e,t=document.body){return new Promise(r=>{if(!yn(unsafeWindow[e])){r(unsafeWindow[e]);return}const i=new MutationObserver(()=>{yn(unsafeWindow[e])||(r(unsafeWindow[e]),i.disconnect())});i.observe(t,{childList:!0,subtree:!0,attributes:!0})})}function w2(e=1e3,t){return new Promise(r=>{setTimeout(()=>r(t),e)})}async function Uo(e,t,r,i){e!==void 0&&(Ee(r),Ee(i,await t(e)))}async function _2(e){await Uo(e.waitAttr,t=>v2(t?.[0],t?.[1]),`Waiting for Attribute ${e.waitAttr?.[1]} of ${e.waitAttr?.[0]}`,`Found Attribute ${e.waitAttr?.[1]} of ${e.waitAttr?.[0]} =`),await Uo(e.waitEle,m2,`Waiting for Element ${e.waitEle}`,"Found Element"),await Uo(e.waitVar,b2,`Waiting for Variable ${e.waitVar}`,"Found Variable"),await Uo(e.waitFunc,Ss,`Waiting to pass Function check ${e.waitFunc}`,"Found Function check"),await Uo(e.waitTime,t=>new Promise(r=>setTimeout(r,t)),`Waiting for ${e.waitTime} milliseconds`,"Continuing after timer")}var y2="@moaqzdev/toast",Vo={_dispatchToast(e,t){Object.assign(t,{type:e});const r=new CustomEvent(y2,{detail:t});document.dispatchEvent(r)},success(e){this._dispatchToast("success",e)},error(e){this._dispatchToast("error",e)},warning(e){this._dispatchToast("warning",e)},info(e){this._dispatchToast("info",e)},confirm(e){this._dispatchToast("confirm",e)}},Pn=[],ur=0,Hi=4,Gi=0,lu=e=>{let t=[],r={get(){return r.lc||r.listen(()=>{})(),r.value},init:e,lc:0,listen(i){return r.lc=t.push(i),()=>{for(let s=ur+Hi;s<Pn.length;)Pn[s]===i?Pn.splice(s,Hi):s+=Hi;let a=t.indexOf(i);~a&&(t.splice(a,1),--r.lc||r.off())}},notify(i,a){Gi++;let s=!Pn.length;for(let l of t)Pn.push(l,r.value,i,a);if(s){for(ur=0;ur<Pn.length;ur+=Hi)Pn[ur](Pn[ur+1],Pn[ur+2],Pn[ur+3]);Pn.length=0}},off(){},set(i){let a=r.value;a!==i&&(r.value=i,r.notify(a))},subscribe(i){let a=r.listen(i);return i(r.value),a},value:e};return r},k2=5,Wi=6,Ui=10,E2=(e,t,r,i)=>(e.events=e.events||{},e.events[r+Ui]||(e.events[r+Ui]=i(a=>{e.events[r].reduceRight((s,l)=>(l(s),s),{shared:{},...a})})),e.events[r]=e.events[r]||[],e.events[r].push(t),()=>{let a=e.events[r],s=a.indexOf(t);a.splice(s,1),a.length||(delete e.events[r],e.events[r+Ui](),delete e.events[r+Ui])}),A2=1e3,S2=(e,t)=>E2(e,i=>{let a=t(i);a&&e.events[Wi].push(a)},k2,i=>{let a=e.listen;e.listen=(...l)=>(!e.lc&&!e.active&&(e.active=!0,i()),a(...l));let s=e.off;return e.events[Wi]=[],e.off=()=>{s(),setTimeout(()=>{if(e.active&&!e.lc){e.active=!1;for(let l of e.events[Wi])l();e.events[Wi]=[]}},A2)},()=>{e.listen=a,e.off=s}}),M2=(e,t,r)=>{Array.isArray(e)||(e=[e]);let i,a,s=()=>{if(a===Gi)return;a=Gi;let p=e.map(b=>b.get());if(!i||p.some((b,w)=>b!==i[w])){i=p;let b=t(...p);b&&b.then&&b.t?b.then(w=>{i===p&&l.set(w)}):(l.set(b),a=Gi)}},l=lu(void 0),h=l.get;l.get=()=>(s(),h());let u,f=r?()=>{clearTimeout(u),u=setTimeout(s)}:s;return S2(l,()=>{let p=e.map(b=>b.listen(f));return s(),()=>{for(let b of p)b()}}),l},x2=(e,t)=>M2(e,t),cu=(e={})=>{let t=lu(e);return t.setKey=function(r,i){let a=t.value;typeof i>"u"&&r in t.value?(t.value={...t.value},delete t.value[r],t.notify(a,r)):t.value[r]!==i&&(t.value={...t.value,[r]:i},t.notify(a,r))},t},Ms=globalThis,uu=e=>e,Vi=Ms.trustedTypes,du=Vi?Vi.createPolicy("lit-html",{createHTML:e=>e}):void 0,xs="$lit$",Kn=`lit$${Math.random().toFixed(9).slice(2)}$`,Is="?"+Kn,I2=`<${Is}>`,$r=document,Zo=()=>$r.createComment(""),qo=e=>e===null||typeof e!="object"&&typeof e!="function",Cs=Array.isArray,hu=e=>Cs(e)||typeof e?.[Symbol.iterator]=="function",Os=`[ 	
\f\r]`,jo=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,fu=/-->/g,pu=/>/g,Dr=RegExp(`>|${Os}(?:([^\\s"'>=/]+)(${Os}*=${Os}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),gu=/'/g,mu=/"/g,vu=/^(?:script|style|textarea|title)$/i,Ts=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),ue=Ts(1),OA=Ts(2),TA=Ts(3),Yn=Symbol.for("lit-noChange"),Be=Symbol.for("lit-nothing"),bu=new WeakMap,zr=$r.createTreeWalker($r,129);function wu(e,t){if(!Cs(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return du!==void 0?du.createHTML(t):t}var _u=(e,t)=>{const r=e.length-1,i=[];let a,s=t===2?"<svg>":t===3?"<math>":"",l=jo;for(let h=0;h<r;h++){const u=e[h];let f,p,b=-1,w=0;for(;w<u.length&&(l.lastIndex=w,p=l.exec(u),p!==null);)w=l.lastIndex,l===jo?p[1]==="!--"?l=fu:p[1]!==void 0?l=pu:p[2]!==void 0?(vu.test(p[2])&&(a=RegExp("</"+p[2],"g")),l=Dr):p[3]!==void 0&&(l=Dr):l===Dr?p[0]===">"?(l=a??jo,b=-1):p[1]===void 0?b=-2:(b=l.lastIndex-p[2].length,f=p[1],l=p[3]===void 0?Dr:p[3]==='"'?mu:gu):l===mu||l===gu?l=Dr:l===fu||l===pu?l=jo:(l=Dr,a=void 0);const v=l===Dr&&e[h+1].startsWith("/>")?" ":"";s+=l===jo?u+I2:b>=0?(i.push(f),u.slice(0,b)+xs+u.slice(b)+Kn+v):u+Kn+(b===-2?h:v)}return[wu(e,s+(e[r]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),i]},Ls=class Kf{constructor({strings:t,_$litType$:r},i){let a;this.parts=[];let s=0,l=0;const h=t.length-1,u=this.parts,[f,p]=_u(t,r);if(this.el=Kf.createElement(f,i),zr.currentNode=this.el.content,r===2||r===3){const b=this.el.content.firstChild;b.replaceWith(...b.childNodes)}for(;(a=zr.nextNode())!==null&&u.length<h;){if(a.nodeType===1){if(a.hasAttributes())for(const b of a.getAttributeNames())if(b.endsWith(xs)){const w=p[l++],v=a.getAttribute(b).split(Kn),m=/([.?@])?(.*)/.exec(w);u.push({type:1,index:s,name:m[2],strings:v,ctor:m[1]==="."?ku:m[1]==="?"?Eu:m[1]==="@"?Au:Ko}),a.removeAttribute(b)}else b.startsWith(Kn)&&(u.push({type:6,index:s}),a.removeAttribute(b));if(vu.test(a.tagName)){const b=a.textContent.split(Kn),w=b.length-1;if(w>0){a.textContent=Vi?Vi.emptyScript:"";for(let v=0;v<w;v++)a.append(b[v],Zo()),zr.nextNode(),u.push({type:2,index:++s});a.append(b[w],Zo())}}}else if(a.nodeType===8)if(a.data===Is)u.push({type:2,index:s});else{let b=-1;for(;(b=a.data.indexOf(Kn,b+1))!==-1;)u.push({type:7,index:s}),b+=Kn.length-1}s++}}static createElement(t,r){const i=$r.createElement("template");return i.innerHTML=t,i}};function Br(e,t,r=e,i){if(t===Yn)return t;let a=i!==void 0?r._$Co?.[i]:r._$Cl;const s=qo(t)?void 0:t._$litDirective$;return a?.constructor!==s&&(a?._$AO?.(!1),s===void 0?a=void 0:(a=new s(e),a._$AT(e,r,i)),i!==void 0?(r._$Co??=[])[i]=a:r._$Cl=a),a!==void 0&&(t=Br(e,a._$AS(e,t.values),a,i)),t}var yu=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:r}=this._$AD,i=(e?.creationScope??$r).importNode(t,!0);zr.currentNode=i;let a=zr.nextNode(),s=0,l=0,h=r[0];for(;h!==void 0;){if(s===h.index){let u;h.type===2?u=new Zi(a,a.nextSibling,this,e):h.type===1?u=new h.ctor(a,h.name,h.strings,this,e):h.type===6&&(u=new Su(a,this,e)),this._$AV.push(u),h=r[++l]}s!==h?.index&&(a=zr.nextNode(),s++)}return zr.currentNode=$r,i}p(e){let t=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(e,r,t),t+=r.strings.length-2):r._$AI(e[t])),t++}},Zi=class Yf{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,r,i,a){this.type=2,this._$AH=Be,this._$AN=void 0,this._$AA=t,this._$AB=r,this._$AM=i,this.options=a,this._$Cv=a?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&t?.nodeType===11&&(t=r.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,r=this){t=Br(this,t,r),qo(t)?t===Be||t==null||t===""?(this._$AH!==Be&&this._$AR(),this._$AH=Be):t!==this._$AH&&t!==Yn&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):hu(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==Be&&qo(this._$AH)?this._$AA.nextSibling.data=t:this.T($r.createTextNode(t)),this._$AH=t}$(t){const{values:r,_$litType$:i}=t,a=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=Ls.createElement(wu(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===a)this._$AH.p(r);else{const s=new yu(a,this),l=s.u(this.options);s.p(r),this.T(l),this._$AH=s}}_$AC(t){let r=bu.get(t.strings);return r===void 0&&bu.set(t.strings,r=new Ls(t)),r}k(t){Cs(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let i,a=0;for(const s of t)a===r.length?r.push(i=new Yf(this.O(Zo()),this.O(Zo()),this,this.options)):i=r[a],i._$AI(s),a++;a<r.length&&(this._$AR(i&&i._$AB.nextSibling,a),r.length=a)}_$AR(t=this._$AA.nextSibling,r){for(this._$AP?.(!1,!0,r);t!==this._$AB;){const i=uu(t).nextSibling;uu(t).remove(),t=i}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}},Ko=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,r,i,a){this.type=1,this._$AH=Be,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=a,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=Be}_$AI(e,t=this,r,i){const a=this.strings;let s=!1;if(a===void 0)e=Br(this,e,t,0),s=!qo(e)||e!==this._$AH&&e!==Yn,s&&(this._$AH=e);else{const l=e;let h,u;for(e=a[0],h=0;h<a.length-1;h++)u=Br(this,l[r+h],t,h),u===Yn&&(u=this._$AH[h]),s||=!qo(u)||u!==this._$AH[h],u===Be?e=Be:e!==Be&&(e+=(u??"")+a[h+1]),this._$AH[h]=u}s&&!i&&this.j(e)}j(e){e===Be?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},ku=class extends Ko{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===Be?void 0:e}},Eu=class extends Ko{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==Be)}},Au=class extends Ko{constructor(e,t,r,i,a){super(e,t,r,i,a),this.type=5}_$AI(e,t=this){if((e=Br(this,e,t,0)??Be)===Yn)return;const r=this._$AH,i=e===Be&&r!==Be||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,a=e!==Be&&(r===Be||i);i&&this.element.removeEventListener(this.name,this,r),a&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},Su=class{constructor(e,t,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){Br(this,e)}},C2={M:xs,P:Kn,A:Is,C:1,L:_u,R:yu,D:hu,V:Br,I:Zi,H:Ko,N:Eu,U:Au,B:ku,F:Su},O2=Ms.litHtmlPolyfillSupport;O2?.(Ls,Zi),(Ms.litHtmlVersions??=[]).push("3.3.2");var T2=(e,t,r)=>{const i=r?.renderBefore??t;let a=i._$litPart$;if(a===void 0){const s=r?.renderBefore??null;i._$litPart$=a=new Zi(t.insertBefore(Zo(),s),s,void 0,r??{})}return a._$AI(e),a},{I:L2}=C2,Mu=e=>e,LA=e=>e===null||typeof e!="object"&&typeof e!="function",RA={HTML:1,SVG:2,MATHML:3},PA=(e,t)=>t===void 0?e?._$litType$!==void 0:e?._$litType$===t,$A=e=>e?._$litType$?.h!=null,DA=e=>e?._$litDirective$!==void 0,zA=e=>e?._$litDirective$,R2=e=>e.strings===void 0,xu=()=>document.createComment(""),BA=(e,t,r)=>{const i=e._$AA.parentNode,a=t===void 0?e._$AB:t._$AA;if(r===void 0)r=new L2(i.insertBefore(xu(),a),i.insertBefore(xu(),a),e,e.options);else{const s=r._$AB.nextSibling,l=r._$AM,h=l!==e;if(h){let u;r._$AQ?.(e),r._$AM=e,r._$AP!==void 0&&(u=e._$AU)!==l._$AU&&r._$AP(u)}if(s!==a||h){let u=r._$AA;for(;u!==s;){const f=Mu(u).nextSibling;Mu(i).insertBefore(u,a),u=f}}}return r},NA=(e,t,r=e)=>(e._$AI(t,r),e),P2={},FA=(e,t=P2)=>e._$AH=t,HA=e=>e._$AH,GA=e=>{e._$AR(),e._$AA.remove()},WA=e=>{e._$AR()},qi={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Yo=e=>(...t)=>({_$litDirective$:e,values:t}),ji=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,r){this._$Ct=e,this._$AM=t,this._$Ci=r}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}},Xo=(e,t)=>{const r=e._$AN;if(r===void 0)return!1;for(const i of r)i._$AO?.(t,!1),Xo(i,t);return!0},Ki=e=>{let t,r;do{if((t=e._$AM)===void 0)break;r=t._$AN,r.delete(e),e=t}while(r?.size===0)},Iu=e=>{for(let t;t=e._$AM;e=t){let r=t._$AN;if(r===void 0)t._$AN=r=new Set;else if(r.has(e))break;r.add(e),z2(t)}};function $2(e){this._$AN!==void 0?(Ki(this),this._$AM=e,Iu(this)):this._$AM=e}function D2(e,t=!1,r=0){const i=this._$AH,a=this._$AN;if(a!==void 0&&a.size!==0)if(t)if(Array.isArray(i))for(let s=r;s<i.length;s++)Xo(i[s],!1),Ki(i[s]);else i!=null&&(Xo(i,!1),Ki(i));else Xo(this,e)}var z2=e=>{e.type==qi.CHILD&&(e._$AP??=D2,e._$AQ??=$2)},B2=class extends ji{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,r){super._$AT(e,t,r),Iu(this),this.isConnected=e._$AU}_$AO(e,t=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),t&&(Xo(this,e),Ki(this))}setValue(e){if(R2(this._$Ct))this._$Ct._$AI(e,this);else{const t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}},Rs=()=>new N2,N2=class{},Ps=new WeakMap,$s=Yo(class extends B2{render(e){return Be}update(e,[t]){const r=t!==this.G;return r&&this.G!==void 0&&this.rt(void 0),(r||this.lt!==this.ct)&&(this.G=t,this.ht=e.options?.host,this.rt(this.ct=e.element)),Be}rt(e){if(this.isConnected||(e=void 0),typeof this.G=="function"){const t=this.ht??globalThis;let r=Ps.get(t);r===void 0&&(r=new WeakMap,Ps.set(t,r)),r.get(this.G)!==void 0&&this.G.call(this.ht,void 0),r.set(this.G,e),e!==void 0&&this.G.call(this.ht,e)}else this.G.value=e}get lt(){return typeof this.G=="function"?Ps.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),F2={ID:"de_DE",NAME:"Deutsch",STARTING:"Starte Manga OnlineViewer",RESUME:"Fortsetzen ab Seite ",WAITING:"Bitte warten, 3 Sekunden...",CHOOSE_BEGINNING:"Wähle die Startseite:",BUTTON_START:"Manga OnlineViewer starten",SETTINGS:"Einstellungen",LANGUAGE:"Sprache",COLOR_SCHEME:"Farbschema",THEME:"Design",THEME_COLOR:"Farbe",THEME_HUE:"Farbton",THEME_SHADE:"Schattierung",DEFAULT_LOAD_MODE:"Standard-Lademodus",LOAD_MODE_NORMAL:"Normal (3 Sek. warten)",LOAD_MODE_ALWAYS:"Immer (sofort)",LOAD_MODE_NEVER:"Nie (manuell)",LOAD_SPEED:"Ladegeschwindigkeit",DEFAULT_ZOOM:"Standard-Zoom (zwischen 5 und 200)",DEFAULT_ZOOM_MODE:"Standard-Zoommodus",MINIMUM_ZOOM:"Minimaler Zoom relativ zur Bildschirmbreite (zwischen 30 und 100)",ZOOM_STEP:"Zoom-Schrittgröße (zwischen 5 und 50)",DEFAULT_VIEW_MODE:"Standard-Ansichtsmodus",VIEW_MODE_VERTICAL:"Vertikal",VIEW_MODE_LEFT:"Horizontal - Links nach Rechts",VIEW_MODE_RIGHT:"Horizontal - Rechts nach Links",VIEW_MODE_WEBCOMIC:"WebComic",VIEW_MODE_BOOK:"Buch - Links nach Rechts",VIEW_MODE_MANGA:"Manga - Rechts nach Links",VIEW_MODE_GALLERY:"Galerie",FIT_WIDTH_OVERSIZED:"Breite anpassen bei Übergröße",SHOW_THUMBNAILS:"Miniaturansichten anzeigen",HIDE_CONTROLS:"Seitensteuerung immer ausblenden",HEADER_TYPE:"Kopfbereichstyp ändern",HEADER_HOVER:"Hover",HEADER_SCROLL:"Scrollen",HEADER_CLICK:"Klicken",HEADER_FIXED:"Fixiert",HEADER_SIMPLE:"Einfach",BUTTON_DOWNLOAD:"Herunterladen",DOWNLOAD_ZIP:"Zip-Datei herunterladen",DOWNLOAD_IMAGES:"Bilder automatisch als Zip herunterladen",DOWNLOAD_PROGRESS:"Herunterladen: ##num## von ##total##",GENERATING_ZIP:"Zip-Datei wird erstellt...",DOWNLOAD_INCOMPLETE:"Download unvollständig",DOWNLOAD_INCOMPLETE_MESSAGE:"Einige Seiten konnten nicht heruntergeladen werden und wurden übersprungen. Eine Liste der fehlgeschlagenen Seiten wurde der ZIP-Datei hinzugefügt.",BUTTON_NEXT:"Weiter",NEXT_CHAPTER:"Nächstes Kapitel",BUTTON_PREVIOUS:"Zurück",PREVIOUS_CHAPTER:"Vorheriges Kapitel",BOOKMARKS:"Lesezeichen",BOOKMARK:"Lesezeichen",BOOKMARK_REMOVED:"Lesezeichen entfernt",BOOKMARK_SAVED:"Lesezeichen gespeichert",BOOKMARK_MESSAGE:"Beim nächsten Öffnen dieses Kapitels wird ab fortgesetzt: Seite ##num## (Nur EINMAL pro Lesezeichen)",KEYBINDINGS:"Tastenkürzel",EDIT_KEYBINDS:"Tastenkürzel bearbeiten",SAVE_KEYBINDS:"Tastenkürzel speichern",BUTTON_EDIT:"Bearbeiten",BUTTON_SAVE:"Speichern",KEYBIND_RULES:`
    <h3>Unterstützte Tasten</h3>
    Erlaubte Modifikatoren: shift, option, alt, ctrl, control, command. <br/>
    Spezielle Tasten: backspace, tab, clear, enter, return, esc, escape, space, up, down, left, right, home, end, pageup, pagedown, del, delete, f1 - f19, num_0 - num_9, num_multiply, num_add, num_enter, num_subtract, num_decimal, num_divide. <br/>
    Beispiele: <kbd>a</kbd>, <kbd>ctrl+a</kbd>, <kbd>shift+a</kbd>, <kbd>num_2</kbd>, <kbd>2</kbd>
  `,ATTENTION:"Achtung",WARNING:"Warnung",BUTTON_RESET_SETTINGS:"Einstellungen zurücksetzen(Reset Settings)",SETTINGS_RESET:"Die Einstellungen wurden zurückgesetzt, bitte Seite neu laden",LANGUAGE_CHANGED:"Die Sprache wurde geändert, bitte Seite neu laden",AUTO_DOWNLOAD:"Beim nächsten Laden eines Kapitels wirst du automatisch gefragt, ob du speichern möchtest",LAZY_LOAD:"Lazy Load ist mit Zip-Download nicht kompatibel, mit dieser Einstellung kannst du nicht herunterladen.<br/> Empfehlung: <span style='color:red;font-weight:bold'>Miniaturansichten deaktivieren</span> um Bandbreite/Speicher zu sparen.",LAZY_LOAD_IMAGES_ENABLE:"Lazy Load Bilder aktivieren",LAZY_LOAD_IMAGES:"Lazy Start ab Seite (zwischen 5 und 100)",RETURN_CHAPTER_LIST:"Zur Kapitelübersicht zurückkehren",PAGES_LOADED:"Seiten geladen",GO_TO_PAGE:"Gehe zu Seite",ENLARGE:"Vergrößern",RESTORE:"Wiederherstellen",REDUCE:"Wiederherstellen",FIT_WIDTH:"Breite anpassen",FIT_HEIGHT:"Höhe anpassen",PERCENT:"Prozent",TOGGLE_CONTROLS:"Seitensteuerung umschalten",ZOOM_IN:"Hineinzoomen",ZOOM_OUT:"Herauszoomen",ZOOM_RESET:"Zoom zurücksetzen",ZOOM_WIDTH:"Auf Breite zoomen",ZOOM_HEIGHT:"Auf Höhe zoomen",HIDE:"Ausblenden",RELOAD:"Neu laden",SLOWLY:"Langsam",NORMAL:"Normal",FAST:"Schnell",EXTREME:"Extrem",ALL_PAGES:"Alle Seiten",SPEED_WARNING:"Ladegeschwindigkeit zu hoch",SPEED_WARNING_MESSAGE:"Diese Geschwindigkeit wird nicht empfohlen.<br/> Sie kann einige Server überlasten oder deine IP als DDoS-Angreifer markieren.<br/> Bitte mit Vorsicht verwenden!",SCROLL_UP:"Nach oben scrollen",SCROLL_DOWN:"Nach unten scrollen",CLOSE:"Schließen",CANCEL:"Abbrechen",LIST_EMPTY:"Liste leer",SCROLL_START:"Auto-Scroll umschalten",INCREASE_SPEED:"Scrollgeschwindigkeit erhöhen",DECREASE_SPEED:"Scrollgeschwindigkeit verringern",AUTO_SCROLL_HEIGHT:"Auto-Scroll-Geschwindigkeit in Pixel",VERTICAL_SEPARATOR:"Vertikale Trenner anzeigen",END:"Ende",SCOPE:"Bereich",GLOBAL:"Global",GENERAL:"Allgemein",LOADING:"Lädt",ZOOM:"Zoom",OTHERS:"Sonstiges",NAVBAR_TYPE:"Navigationsleistentyp ändern",NAVBAR_BOTTOM:"Unten",NAVBAR_LEFT:"Links",NAVBAR_RIGHT:"Rechts",NAVBAR_DISABLED:"Deaktiviert",PAGINATION_TYPE:"Paginierungstyp",PAGINATION_DISABLED:"Deaktiviert",PAGINATION_SLIDER:"Schieberegler",PAGINATION_ARROWS:"Seitenpfeile",PAGINATION_BOTH:"Beides",FILE_MENU:"Hauptmenü",VIEW_MENU:"Menü „Ansicht“",ZOOM_MENU:"Zoom-Menü",DOUBLE_PAGE:"Doppelseite umschalten"},H2={ID:"en_US",NAME:"English (US)",STARTING:"Starting Manga OnlineViewer",RESUME:"Resuming reading from Page ",WAITING:"Please wait, 3 seconds...",CHOOSE_BEGINNING:"Choose the Page to start from:",BUTTON_START:"Start Manga OnlineViewer",SETTINGS:"Settings",LANGUAGE:"Language",COLOR_SCHEME:"Color Scheme",THEME:"Theme",THEME_COLOR:"Color",THEME_HUE:"Color Hue",THEME_SHADE:"Color Shade",DEFAULT_LOAD_MODE:"Default Load Mode",LOAD_MODE_NORMAL:"Normal(Wait 3 sec)",LOAD_MODE_ALWAYS:"Always(Immediately)",LOAD_MODE_NEVER:"Never(Manually)",LOAD_SPEED:"Load Speed",DEFAULT_ZOOM:"Default Zoom (between 5 and 200)",DEFAULT_ZOOM_MODE:"Default Zoom Mode",MINIMUM_ZOOM:"Minimum Zoom relative to the width of screen (between 30 and 100)",ZOOM_STEP:"Zoom Change Step (between 5 and 50)",DEFAULT_VIEW_MODE:"Default View Mode",VIEW_MODE_VERTICAL:"Vertical",VIEW_MODE_LEFT:"Horizontal - Left to Right",VIEW_MODE_RIGHT:"Horizontal - Right to Left",VIEW_MODE_WEBCOMIC:"WebComic",VIEW_MODE_BOOK:"Book - Left to Right",VIEW_MODE_MANGA:"Manga - Right to Left",VIEW_MODE_GALLERY:"Gallery",FIT_WIDTH_OVERSIZED:"Fit Width if Oversized",SHOW_THUMBNAILS:"Show Thumbnails",HIDE_CONTROLS:"Always Hide Page Controls",HEADER_TYPE:"Change Header Type",HEADER_HOVER:"Hover",HEADER_SCROLL:"Scroll",HEADER_CLICK:"Click",HEADER_FIXED:"Fixed",HEADER_SIMPLE:"Simple",BUTTON_DOWNLOAD:"Download",DOWNLOAD_ZIP:"Download Zip file",DOWNLOAD_IMAGES:"Download Images as Zip Automatically",DOWNLOAD_PROGRESS:"Downloading: ##num## of ##total##",GENERATING_ZIP:"Generating Zip file...",DOWNLOAD_INCOMPLETE:"Download Incomplete",DOWNLOAD_INCOMPLETE_MESSAGE:"Some pages failed to download and were skipped. A list of failed pages has been added to the ZIP file.",BUTTON_NEXT:"Next",NEXT_CHAPTER:"Next Chapter",BUTTON_PREVIOUS:"Previous",PREVIOUS_CHAPTER:"Previous Chapter",BOOKMARKS:"Bookmarks",BOOKMARK:"Bookmark",BOOKMARK_REMOVED:"Bookmark Removed",BOOKMARK_SAVED:"Bookmark Saved",BOOKMARK_MESSAGE:"Next time you open this chapter it will resume from: Page ##num## (Only ONCE per Bookmark)",KEYBINDINGS:"Keybindings",EDIT_KEYBINDS:"Edit KeyBindings",SAVE_KEYBINDS:"Save KeyBindings",BUTTON_EDIT:"Edit",BUTTON_SAVE:"Save",KEYBIND_RULES:`
    <h3>Supported Keys</h3>
    Allowed modifiers: shift, option, alt, ctrl, control, command. <br/>
    Special keys: backspace, tab, clear, enter, return, esc, escape, space, up, down, left, right, home, end, pageup, pagedown, del, delete, f1 - f19, num_0 - num_9, num_multiply, num_add, num_enter, num_subtract, num_decimal, num_divide. <br/>
    Examples: <kbd>a</kbd>, <kbd>ctrl+a</kbd> , <kbd>shift+a</kbd> , <kbd>num_2</kbd> , <kbd>2</kbd>
  `,ATTENTION:"Attention",WARNING:"Warning",BUTTON_RESET_SETTINGS:"Reset Settings",SETTINGS_RESET:"Settings have been reset, reload the page to take effect",LANGUAGE_CHANGED:"Language has been changed, reload the page to take effect",AUTO_DOWNLOAD:"Next time a chapter finish loading you will be prompted to save automatically",LAZY_LOAD:"Lazy load is incompatible with zip download, you will not be able to download with this setting ON.<br/> Suggestion: <span style='color:red;font-weight:bold'>Disable Thumbnails</span> to save Bandwidth/Memory.",LAZY_LOAD_IMAGES_ENABLE:"Enable Lazy Load Images",LAZY_LOAD_IMAGES:"Lazy Start From Page (between 5 and 100)",RETURN_CHAPTER_LIST:"Return to Chapter List",PAGES_LOADED:"Pages Loaded",GO_TO_PAGE:"Go to Page",ENLARGE:"Enlarge",RESTORE:"Restore",REDUCE:"Reduce",FIT_WIDTH:"Fit Width",FIT_HEIGHT:"Fit Height",PERCENT:"Percent",TOGGLE_CONTROLS:"Toggle page controls",ZOOM_IN:"Zoom In",ZOOM_OUT:"Zoom Out",ZOOM_RESET:"Zoom Reset",ZOOM_WIDTH:"Zoom to Width",ZOOM_HEIGHT:"Zoom to Height",HIDE:"Hide",RELOAD:"Reload",SLOWLY:"Slowly",NORMAL:"Normal",FAST:"Fast",EXTREME:"Extreme",ALL_PAGES:"All Pages",SPEED_WARNING:"Loading Speed too High",SPEED_WARNING_MESSAGE:"This speed is not recommended.<br/> It may hurt some servers or get your IP marked as DDoS attacker.<br/> Please use with caution!",SCROLL_UP:"Scroll Up",SCROLL_DOWN:"Scroll Down",CLOSE:"Close",CANCEL:"Cancel",LIST_EMPTY:"List Empty",SCROLL_START:"Toggle Auto Scroll",INCREASE_SPEED:"Increase Scroll Speed",DECREASE_SPEED:"Decrease Scroll Speed",AUTO_SCROLL_HEIGHT:"Auto Scroll Speed in Pixels",VERTICAL_SEPARATOR:"Show Vertical Separators",END:"End",SCOPE:"Scope",GLOBAL:"Global",GENERAL:"General",LOADING:"Loading",ZOOM:"Zoom",OTHERS:"Others",NAVBAR_TYPE:"Change Navbar Type",NAVBAR_BOTTOM:"Bottom",NAVBAR_LEFT:"Left",NAVBAR_RIGHT:"Right",NAVBAR_DISABLED:"Disabled",PAGINATION_TYPE:"Pagination Type",PAGINATION_DISABLED:"Disabled",PAGINATION_SLIDER:"Slider",PAGINATION_ARROWS:"Side Arrows",PAGINATION_BOTH:"Both",FILE_MENU:"Main Menu",VIEW_MENU:"View Menu",ZOOM_MENU:"Zoom Menu",DOUBLE_PAGE:"Toggle Double Page"},G2={ID:"es_ES",NAME:"Español (ES)",STARTING:"Iniciando Manga OnlineViewer",RESUME:"Continuando lectura desde la Página ",WAITING:"Por favor espere, 3 segundos...",CHOOSE_BEGINNING:"Elija la página en la que comenzar:",BUTTON_START:"Iniciar Manga OnlineViewer",SETTINGS:"Ajustes",LANGUAGE:"Idioma",COLOR_SCHEME:"Esquema de color",THEME:"Tema",THEME_COLOR:"Color",THEME_HUE:"Matiz del color",THEME_SHADE:"Saturación del color",DEFAULT_LOAD_MODE:"Modo de carga por defecto",LOAD_MODE_NORMAL:"Normal (Espera 3s)",LOAD_MODE_ALWAYS:"Siempre (Inmediatamente)",LOAD_MODE_NEVER:"Nunca (Manualmente)",LOAD_SPEED:"Velocidad carga",DEFAULT_ZOOM:"Zoom por defecto (entre 5 y 200)",DEFAULT_ZOOM_MODE:"Modo de zoom por defecto",MINIMUM_ZOOM:"Zoom mínimo relativo al ancho de la pantalla",ZOOM_STEP:"Paso entre cambios de zoom (entre 5 y 50)",DEFAULT_VIEW_MODE:"Modo de visualización por defecto",VIEW_MODE_VERTICAL:"Vertical",VIEW_MODE_LEFT:"Horizontal - Izquierda a derecha",VIEW_MODE_RIGHT:"Horizontal - Derecha a izquierda",VIEW_MODE_WEBCOMIC:"WebComic",VIEW_MODE_BOOK:"Libro - Izquierda a derecha",VIEW_MODE_MANGA:"Manga - Derecha a izquierda",VIEW_MODE_GALLERY:"Galería",FIT_WIDTH_OVERSIZED:"Ajustar ancho si es demasiado grande",SHOW_THUMBNAILS:"Mostrar miniaturas",HIDE_CONTROLS:"Ocultar siempre la barra de controles",HEADER_TYPE:"Cambiar tipo de cabecera",HEADER_HOVER:"Pasar por encima",HEADER_SCROLL:"Desplazamiento",HEADER_CLICK:"Hacer click",HEADER_FIXED:"Fijo",HEADER_SIMPLE:"Sencillo",BUTTON_DOWNLOAD:"Descargar",DOWNLOAD_ZIP:"Descargar fichero Zip",DOWNLOAD_IMAGES:"Autodescargar imágenes como Zip",DOWNLOAD_PROGRESS:"Descargando: ##num## de ##total##",GENERATING_ZIP:"Generando archivo Zip...",DOWNLOAD_INCOMPLETE:"Descarga Incompleta",DOWNLOAD_INCOMPLETE_MESSAGE:"Algunas páginas no se pudieron descargar y se saltaron. Se ha añadido una lista de páginas fallidas al archivo ZIP.",BUTTON_NEXT:"Siguiente",NEXT_CHAPTER:"Siguiente capítulo",BUTTON_PREVIOUS:"Anterior",PREVIOUS_CHAPTER:"Capítulo anterior",BOOKMARKS:"Marcadores",BOOKMARK:"Marcador",BOOKMARK_REMOVED:"Marcador eliminado",BOOKMARK_SAVED:"Marcador guardado",BOOKMARK_MESSAGE:"La próxima vez que abra este capítulo, continuará desde la página ##num## (Sólo UNA VEZ por Marcador)",KEYBINDINGS:"Atajos de teclado",EDIT_KEYBINDS:"Editar atajos",SAVE_KEYBINDS:"Guardar atajos",BUTTON_EDIT:"Editar",BUTTON_SAVE:"Guardar",KEYBIND_RULES:`
    <h3>Teclas soportadas</h3>
    Modificadores permitidos: shift, option, alt, ctrl, control, command. <br/>
    Teclas especiales: backspace, tab, clear, enter, return, esc, escape, space, up, down, left, right, home, end, pageup, pagedown, del, delete, f1 - f19, num_0 - num_9, num_multiply, num_add, num_enter, num_subtract, num_decimal, num_divide. <br/>
    Ejemplos: <kbd>a</kbd>, <kbd>ctrl+a</kbd> , <kbd>shift+a</kbd> , <kbd>num_2</kbd> , <kbd>2</kbd>
  `,ATTENTION:"Atención",WARNING:"Alerta",BUTTON_RESET_SETTINGS:"Reiniciar ajustes(Reset Settings)",SETTINGS_RESET:"Se han restablecido los ajustes, vuelve a cargar la página para que surta efecto",LANGUAGE_CHANGED:"Se ha cambiado el idioma, vuelve a cargar la página para que surta efecto",AUTO_DOWNLOAD:"La próxima vez que termine de cargarse un capítulo, se le pedirá que guarde automáticamente",LAZY_LOAD:"La carga diferida es incompatible con la descarga zip, no podrá descargar con este ajuste activado.<br/> Sugerencia: <span style='color:red;font-weight:bold'>Desactivar miniaturas</span> para ahorrar Ancho de banda/Memoria.",LAZY_LOAD_IMAGES_ENABLE:"Habilitar carga de imágenes diferida",LAZY_LOAD_IMAGES:"Empezar carga diferida a partir de la página (entre 5 y 100)",RETURN_CHAPTER_LIST:"Regresar a la lista de capítulos",PAGES_LOADED:"Páginas cargadas",GO_TO_PAGE:"Ir a página",ENLARGE:"Agrandar",RESTORE:"Restaurar",REDUCE:"Reducir",FIT_WIDTH:"Ajustar al ancho",FIT_HEIGHT:"Ajustar al alto",PERCENT:"Porcentual",TOGGLE_CONTROLS:"Alternar controles de página",ZOOM_IN:"Acercar",ZOOM_OUT:"Alejar",ZOOM_RESET:"Restablecer zoom",ZOOM_WIDTH:"Zoom al ancho",ZOOM_HEIGHT:"Zoom al alto",HIDE:"Ocultar",RELOAD:"Recargar",SLOWLY:"Lento",NORMAL:"Normal",FAST:"Rápido",EXTREME:"Extremo",ALL_PAGES:"Todas las páginas",SPEED_WARNING:"Velocidad de carga muy alta",SPEED_WARNING_MESSAGE:"No se recomienda esta velocidad.<br/> Puede dañar algunos servidores o marcar su IP como atacante DDoS.<br/> ¡Utilícelo con precaución!",SCROLL_UP:"Desplazar arriba",SCROLL_DOWN:"Desplazarse hacia abajo",CLOSE:"Cerrar",CANCEL:"Cancelar",LIST_EMPTY:"Lista vacía",SCROLL_START:"Alternar desplazamiento automático",INCREASE_SPEED:"Aumentar la velocidad de desplazamiento",DECREASE_SPEED:"Disminuir la velocidad de desplazamiento",AUTO_SCROLL_HEIGHT:"Velocidad de desplazamiento automático en píxeles",VERTICAL_SEPARATOR:"Mostrar separadores verticales",END:"Fin",SCOPE:"Alcance",GLOBAL:"Global",GENERAL:"General",LOADING:"Carga",ZOOM:"Zoom",OTHERS:"Otros",NAVBAR_TYPE:"Cambiar el tipo de barra de navegación",NAVBAR_BOTTOM:"Abajo",NAVBAR_LEFT:"Izquierda",NAVBAR_RIGHT:"Derecha",NAVBAR_DISABLED:"Desactivado",PAGINATION_TYPE:"Tipo de paginación",PAGINATION_DISABLED:"Desactivado",PAGINATION_SLIDER:"Control deslizante",PAGINATION_ARROWS:"Flechas laterales",PAGINATION_BOTH:"Ambos",FILE_MENU:"Menú principal",VIEW_MENU:"Ver menú",ZOOM_MENU:"Menú Zoom",DOUBLE_PAGE:"Alternar Página Doble"},W2={ID:"fr_FR",NAME:"Français (FR)",STARTING:"Démarrage Manga OnlineViewer",RESUME:"Reprise de la lecture à partir de la Page ",WAITING:"Veuillez patienter, 3 secondes...",CHOOSE_BEGINNING:"Choisissez la page par laquelle commencer :",BUTTON_START:"Démarrer Manga OnlineViewer",SETTINGS:"Paramètres",LANGUAGE:"Langue",COLOR_SCHEME:"Palette de couleurs",THEME:"Thème",THEME_COLOR:"Couleur",THEME_HUE:"Teinte de couleur",THEME_SHADE:"Nuance de couleur",DEFAULT_LOAD_MODE:"Mode de chargement par défaut",LOAD_MODE_NORMAL:"Normal (attendre 3 s)",LOAD_MODE_ALWAYS:"Toujours (immédiatement)",LOAD_MODE_NEVER:"Jamais (manuellement)",LOAD_SPEED:"Vitesse de chargement",DEFAULT_ZOOM:"Zoom par défaut (entre 5 et 200)",DEFAULT_ZOOM_MODE:"Mode de zoom par défaut",MINIMUM_ZOOM:"Zoom minimum par rapport à la largeur de l'écran (entre 30 et 100)",ZOOM_STEP:"Pas de changement de zoom (entre 5 et 50)",DEFAULT_VIEW_MODE:"Mode d'affichage par défaut",VIEW_MODE_VERTICAL:"Vertical",VIEW_MODE_LEFT:"Horizontal - De gauche à droite",VIEW_MODE_RIGHT:"Horizontal - De droite à gauche",VIEW_MODE_WEBCOMIC:"WebComic",VIEW_MODE_BOOK:"Livre - De gauche à droite",VIEW_MODE_MANGA:"Manga - De droite à gauche",VIEW_MODE_GALLERY:"Galerie",FIT_WIDTH_OVERSIZED:"Ajuster à la largeur si surdimensionné",SHOW_THUMBNAILS:"Afficher les vignettes",HIDE_CONTROLS:"Toujours masquer les contrôles de page",HEADER_TYPE:"Changer le type d'en-tête",HEADER_HOVER:"Survol",HEADER_SCROLL:"Défilement",HEADER_CLICK:"Clic",HEADER_FIXED:"Fixe",HEADER_SIMPLE:"Simple",BUTTON_DOWNLOAD:"Télécharger",DOWNLOAD_ZIP:"Télécharger le fichier Zip",DOWNLOAD_IMAGES:"Télécharger les images en Zip automatiquement",DOWNLOAD_PROGRESS:"Téléchargement : ##num## sur ##total##",GENERATING_ZIP:"Génération du fichier Zip...",DOWNLOAD_INCOMPLETE:"Téléchargement incomplet",DOWNLOAD_INCOMPLETE_MESSAGE:"Certaines pages n'ont pas pu être téléchargées et ont été ignorées. Une liste des pages concernées a été ajoutée au fichier ZIP.",BUTTON_NEXT:"Suivant",NEXT_CHAPTER:"Chapitre suivant",BUTTON_PREVIOUS:"Précédent",PREVIOUS_CHAPTER:"Chapitre précédent",BOOKMARKS:"Favoris",BOOKMARK:"Favori",BOOKMARK_REMOVED:"Favori supprimé",BOOKMARK_SAVED:"Favori enregistré",BOOKMARK_MESSAGE:"La prochaine fois que vous ouvrirez ce chapitre, il reprendra à partir de: Page ##num## (Seulement UNE FOIS par favori)",KEYBINDINGS:"Raccourcis clavier",EDIT_KEYBINDS:"Modifier les raccourcis clavier",SAVE_KEYBINDS:"Enregistrer les raccourcis clavier",BUTTON_EDIT:"Modifier",BUTTON_SAVE:"Enregistrer",KEYBIND_RULES:`
    <h3>Touches prises en charge</h3>
    Modificateurs autorisés : shift, option, alt, ctrl, control, command. <br/>
    Touches spéciales : backspace, tab, clear, enter, return, esc, escape, space, up, down, left, right, home, end, pageup, pagedown, del, delete, f1 - f19, num_0 - num_9, num_multiply, num_add, num_enter, num_subtract, num_decimal, num_divide. <br/>
    Exemples : <kbd>a</kbd>, <kbd>ctrl+a</kbd> , <kbd>shift+a</kbd> , <kbd>num_2</kbd> , <kbd>2</kbd>
  `,ATTENTION:"Attention",WARNING:"Avertissement",BUTTON_RESET_SETTINGS:"Réinitialiser les paramètres",SETTINGS_RESET:"Les paramètres ont été réinitialisés, rechargez la page pour prendre effet",LANGUAGE_CHANGED:"La langue a été modifiée, rechargez la page pour prendre effet",AUTO_DOWNLOAD:"La prochaine fois qu'un chapitre finira de se charger, il vous sera proposé de l'enregistrer automatiquement",LAZY_LOAD:"Le chargement paresseux est incompatible avec le téléchargement zip, vous ne pourrez pas télécharger avec ce paramètre activé.<br/> Suggestion : <span style='color:red;font-weight:bold'>Désactivez les vignettes</span> pour économiser de la bande passante/mémoire.",LAZY_LOAD_IMAGES_ENABLE:"Activer le chargement paresseux des images",LAZY_LOAD_IMAGES:"Début du chargement paresseux à partir de la page (entre 5 et 100)",RETURN_CHAPTER_LIST:"Retour à la liste des chapitres",PAGES_LOADED:"Pages chargées",GO_TO_PAGE:"Aller à la page",ENLARGE:"Agrandir",RESTORE:"Restaurer",REDUCE:"Réduire",FIT_WIDTH:"Ajuster à la largeur",FIT_HEIGHT:"Ajuster à la hauteur",PERCENT:"Pourcentage",TOGGLE_CONTROLS:"Basculer les contrôles de page",ZOOM_IN:"Zoom avant",ZOOM_OUT:"Zoom arrière",ZOOM_RESET:"Réinitialiser le zoom",ZOOM_WIDTH:"Zoomer à la largeur",ZOOM_HEIGHT:"Zoomer à la hauteur",HIDE:"Masquer",RELOAD:"Recharger",SLOWLY:"Lentement",NORMAL:"Normal",FAST:"Rapide",EXTREME:"Extrême",ALL_PAGES:"Toutes les pages",SPEED_WARNING:"Vitesse de chargement trop élevée",SPEED_WARNING_MESSAGE:"Cette vitesse n'est pas recommandée.<br/> Elle peut nuire à certains serveurs ou marquer votre IP comme un attaquant DDoS.<br/> Veuillez l'utiliser avec prudence !",SCROLL_UP:"Faire défiler vers le haut",SCROLL_DOWN:"Faire défiler vers le bas",CLOSE:"Fermer",CANCEL:"Annuler",LIST_EMPTY:"Liste vide",SCROLL_START:"Basculer le défilement automatique",INCREASE_SPEED:"Augmenter la vitesse de défilement",DECREASE_SPEED:"Diminuer la vitesse de défilement",AUTO_SCROLL_HEIGHT:"Vitesse de défilement automatique en pixels",VERTICAL_SEPARATOR:"Afficher les séparateurs verticaux",END:"Fin",SCOPE:"Portée",GLOBAL:"Global",GENERAL:"Général",LOADING:"Chargement",ZOOM:"Zoom",OTHERS:"Autres",NAVBAR_TYPE:"Changer le type de barre de navigation",NAVBAR_BOTTOM:"Bas",NAVBAR_LEFT:"Gauche",NAVBAR_RIGHT:"Droite",NAVBAR_DISABLED:"Désactivé",PAGINATION_TYPE:"Type de pagination",PAGINATION_DISABLED:"Désactivé",PAGINATION_SLIDER:"Curseur",PAGINATION_ARROWS:"Flèches latérales",PAGINATION_BOTH:"Les deux",FILE_MENU:"Menu principal",VIEW_MENU:"Menu Affichage",ZOOM_MENU:"Menu Zoom",DOUBLE_PAGE:"Basculer Double Page"},U2={ID:"pt_BR",NAME:"Portugues (Brasil)",STARTING:"Iniciando Manga OnlineViewer",RESUME:"Continuando leitura na Pagina ",WAITING:"Por Favor espere, 3 segundos...",CHOOSE_BEGINNING:"Escolha a pagina de onde começar:",BUTTON_START:"Iniciar Manga OnlineViewer",SETTINGS:"Configurações",LANGUAGE:"Idioma",COLOR_SCHEME:"Esquema de Color",THEME:"Tema",THEME_COLOR:"Cor",THEME_HUE:"Tom da Cor",THEME_SHADE:"Saturação da Cor",DEFAULT_LOAD_MODE:"Forma de Carregamento Padrão",LOAD_MODE_NORMAL:"Normal(Esperando 3 sec)",LOAD_MODE_ALWAYS:"Sempre(Imediatamente)",LOAD_MODE_NEVER:"Nunca(Manualmente)",LOAD_SPEED:"Velocidade de Carregamento",DEFAULT_ZOOM:"Zoom padrão (entre 5 e 200)",DEFAULT_ZOOM_MODE:"Modo de Zoom padrão",MINIMUM_ZOOM:"Zoom minimo, relativo ao tamanho da tela (entre 30 e 100)",ZOOM_STEP:"Precisão da Mudança do Zoom (entre 5 e 50)",DEFAULT_VIEW_MODE:"Modo de Visualização Padrão",VIEW_MODE_VERTICAL:"Vertical",VIEW_MODE_LEFT:"Horizontal - Esquerda para Direita",VIEW_MODE_RIGHT:"Horizontal - Direita para Esquerda",VIEW_MODE_WEBCOMIC:"WebComic",VIEW_MODE_BOOK:"Livro - Esquerda para Direita",VIEW_MODE_MANGA:"Mangá - Direita para Esquerda",VIEW_MODE_GALLERY:"Galeria",FIT_WIDTH_OVERSIZED:"Encher a tela se grande demais",SHOW_THUMBNAILS:"Mostra Miniaturas",HIDE_CONTROLS:"Sempre esconder controles das paginas",HEADER_TYPE:"Mudar Tipo de Cabeçalho",HEADER_HOVER:"Passar por perto",HEADER_SCROLL:"Rolagem do Mouse",HEADER_CLICK:"Click",HEADER_FIXED:"Fixo",HEADER_SIMPLE:"Simples",BUTTON_DOWNLOAD:"Download",DOWNLOAD_ZIP:"Baixar arquivo Zip",DOWNLOAD_IMAGES:"Download das Imagens como Zip Automaticamente",DOWNLOAD_PROGRESS:"Baixando: ##num## de ##total##",GENERATING_ZIP:"Gerando arquivo Zip...",DOWNLOAD_INCOMPLETE:"Download Incompleto",DOWNLOAD_INCOMPLETE_MESSAGE:"Algumas páginas falharam ao baixar e foram puladas. Uma lista de páginas que falharam foi adicionada ao arquivo ZIP.",BUTTON_NEXT:"Proximo",NEXT_CHAPTER:"Proximo Capitulo",BUTTON_PREVIOUS:"Anterior",PREVIOUS_CHAPTER:"Capitulo Anterior",BOOKMARKS:"Marca paginas",BOOKMARK:"Marcar pagina",BOOKMARK_REMOVED:"Marca pagina Removido",BOOKMARK_SAVED:"Marca pagina Salvo",BOOKMARK_MESSAGE:"Proxima vez que abrir este capitulo continuará a partir da Pagina ##num## (Apenas UMA VEZ por marca pagina)",KEYBINDINGS:"Atalhos",EDIT_KEYBINDS:"Editar Atalhos",SAVE_KEYBINDS:"Salvar Atalhos",BUTTON_EDIT:"Editar",BUTTON_SAVE:"Salvar",KEYBIND_RULES:`
    <h3>Teclas Suportadas</h3>
    Modificadores permitidos: shift, option, alt, ctrl, control, command. <br/>
    Teclas Especiais: backspace, tab, clear, enter, return, esc, escape, space, up, down, left, right, home, end, pageup, pagedown, del, delete, f1 - f19, num_0 - num_9, num_multiply, num_add, num_enter, num_subtract, num_decimal, num_divide.<br/>
    Exemplos: <kbd>a</kbd>, <kbd>ctrl+a</kbd> , <kbd>shift+a</kbd> , <kbd>num_2</kbd> , <kbd>2</kbd>
  `,ATTENTION:"Atenção",WARNING:"Alerta",BUTTON_RESET_SETTINGS:"Limpar Configurações(Reset Settings)",SETTINGS_RESET:"Configurações foram limpas, recarregue o site para efetivar a alteração",LANGUAGE_CHANGED:"Idioma foi alterado, recarregue o site para efetivar a alteração",AUTO_DOWNLOAD:"Proxima vez que abrir um capitulo download iniciara automaticamente",LAZY_LOAD:"Carregamento preguiçoso não é compativel com download de zip, não conseguira com essa configuração ativa.<br/> Sugestão: <span style='color:red;font-weight:bold'>Desative Miniaturas</span> para economizar memoria e cota de internet.",LAZY_LOAD_IMAGES_ENABLE:"Ativar Carregamento de imagens preguiçoso",LAZY_LOAD_IMAGES:"Carregamento de paginas preguiçoso começa a partir de (entre 5 e 100)",RETURN_CHAPTER_LIST:"Voltar a lista de Capitulos",PAGES_LOADED:"Paginas Carregadas",GO_TO_PAGE:"Pular para",ENLARGE:"Aumentar",RESTORE:"Restaurar",REDUCE:"Diminuir",FIT_WIDTH:"Preencher Largura",FIT_HEIGHT:"Preencher Altura ",PERCENT:"Percentual",TOGGLE_CONTROLS:"Mostar controles de pagina",ZOOM_IN:"Mais Zoom",ZOOM_OUT:"Menos Zoom",ZOOM_RESET:"Resetar Zoom",ZOOM_WIDTH:"Zoom para Largura",ZOOM_HEIGHT:"Zoom para Altura",HIDE:"Esconder",RELOAD:"Recarregar",SLOWLY:"Devagar",NORMAL:"Normal",FAST:"Rapido",EXTREME:"Extremo",ALL_PAGES:"Todas as Paginas",SPEED_WARNING:"Velocidade de Carregamento muito alta",SPEED_WARNING_MESSAGE:"Essa velocidade não é recomendada.<br/> Ela pode derrubar um servidor or marcar voce como um ataque hacker de DDoS.<br/> Use com cuidado!",SCROLL_UP:"Subir Pagina",SCROLL_DOWN:"Descer Pagina",CLOSE:"Fechar",CANCEL:"Cancelar",LIST_EMPTY:"Lista Vazia",SCROLL_START:"Ativar Rolagem Automatica",INCREASE_SPEED:"Aumentar Valocidade da Rolagem",DECREASE_SPEED:"Diminuir Valocidade da Rolagem",AUTO_SCROLL_HEIGHT:"Velocidade da Rolagem Automatica em Pixels",VERTICAL_SEPARATOR:"Mostrar Separadores Verticais",END:"Fin",SCOPE:"Escopo",GLOBAL:"Global",GENERAL:"Geral",LOADING:"Carregamento",ZOOM:"Zoom",OTHERS:"Outros",NAVBAR_TYPE:"Mudar barra de navegação",NAVBAR_BOTTOM:"Embaixo",NAVBAR_LEFT:"Esquerda",NAVBAR_RIGHT:"Direita",NAVBAR_DISABLED:"Desativado",PAGINATION_TYPE:"Tipo de Paginação",PAGINATION_DISABLED:"Desativado",PAGINATION_SLIDER:"Controle deslizante",PAGINATION_ARROWS:"Setas Laterais",PAGINATION_BOTH:"Ambos",FILE_MENU:"Menu Principal",VIEW_MENU:"Menu de Visualizações",ZOOM_MENU:"Menu de Zoom",DOUBLE_PAGE:"Alternar Página Dupla"},V2={ID:"zh_CN",NAME:"中文 (简体)",STARTING:"正在启动 Manga OnlineViewer",RESUME:"从页面继续阅读 ",WAITING:"请等待3秒钟...",CHOOSE_BEGINNING:"选择要开始的页数:",BUTTON_START:"启动Manga OnlineViewer",SETTINGS:"设置",LANGUAGE:"语言",COLOR_SCHEME:"配色方案",THEME:"主题",THEME_COLOR:"颜色",THEME_HUE:"色相",THEME_SHADE:"色度",DEFAULT_LOAD_MODE:"默认加载模式",LOAD_MODE_NORMAL:"等待模式(等待3秒自动加载 )",LOAD_MODE_ALWAYS:"自动模式(无需等待)",LOAD_MODE_NEVER:"手动模式(点击启动)",LOAD_SPEED:"加载速度",DEFAULT_ZOOM:"默认缩放 (最小 5 最大 200)",DEFAULT_ZOOM_MODE:"默认缩放模式",MINIMUM_ZOOM:"相对于屏幕宽度的最小缩放 (最小 30 最大 100)",ZOOM_STEP:"缩放级别 (最小 5 最大 50)",DEFAULT_VIEW_MODE:"默认视图模式",VIEW_MODE_VERTICAL:"垂直有缝",VIEW_MODE_LEFT:"横向 - 从左到右",VIEW_MODE_RIGHT:"横向 - 从右到左",VIEW_MODE_WEBCOMIC:"垂直无缝",VIEW_MODE_BOOK:"书籍 - 从左到右",VIEW_MODE_MANGA:"漫画 - 从右到左",VIEW_MODE_GALLERY:"图库",FIT_WIDTH_OVERSIZED:"如果尺寸过大、则适合宽度",SHOW_THUMBNAILS:"显示缩略图",HIDE_CONTROLS:"始终隐藏页面控件",HEADER_TYPE:"更改标题显示方式",HEADER_HOVER:"悬停",HEADER_SCROLL:"滚动",HEADER_CLICK:"点击",HEADER_FIXED:"固定",HEADER_SIMPLE:"简单",BUTTON_DOWNLOAD:"下载",DOWNLOAD_ZIP:"下载压缩文件",DOWNLOAD_IMAGES:"自动将图片下载成ZIP",DOWNLOAD_PROGRESS:"正在下载：第 ##num## 页，共 ##total## 页",GENERATING_ZIP:"正在生成 Zip 文件...",DOWNLOAD_INCOMPLETE:"下载不完整",DOWNLOAD_INCOMPLETE_MESSAGE:"部分页面下载失败并已跳过。失败页面列表已添加到 ZIP 文件中。",BUTTON_NEXT:"下一页",NEXT_CHAPTER:"下一章",BUTTON_PREVIOUS:"上一页",PREVIOUS_CHAPTER:"上一章",BOOKMARKS:"书签",BOOKMARK:"Bookmark",BOOKMARK_REMOVED:"删除书签",BOOKMARK_SAVED:"保存书签",BOOKMARK_MESSAGE:"下次打开本章时，将从: 页码 ##num## (仅一次 每个书签)",KEYBINDINGS:"快捷键",EDIT_KEYBINDS:"编辑键绑定",SAVE_KEYBINDS:"保存键绑定",BUTTON_EDIT:"编辑",BUTTON_SAVE:"救",KEYBIND_RULES:`
    <h3>支持的密钥</h3>
    允许的修饰符: shift, option, alt, ctrl, control, command. <br/>
    特殊键: backspace, tab, clear, enter, return, esc, escape, space, up, down, left, right, home, end, pageup, pagedown, del, delete, f1 - f19, num_0 - num_9, num_multiply, num_add, num_enter, num_subtract, num_decimal, num_divide.<br/>
    例子: <kbd>a</kbd>, <kbd>ctrl+a</kbd> , <kbd>shift+a</kbd> , <kbd>num_2</kbd> , <kbd>2</kbd>
  `,ATTENTION:"注意",WARNING:"警告",BUTTON_RESET_SETTINGS:"重置设置(Reset Settings)",SETTINGS_RESET:"设置已重置、重新加载页面才能生效",LANGUAGE_CHANGED:"语言已更改、重新加载页面才能生效",AUTO_DOWNLOAD:"下次章节加载完成时、系统将提示您自动保存",LAZY_LOAD:"延迟加载与zip下载不兼容、您将无法使用此设置下载.<br/> 建议: <span style='color:red;font-weight:bold'>禁用缩略图</span> 以节省流量和内存.",LAZY_LOAD_IMAGES_ENABLE:"启用延迟加载图像",LAZY_LOAD_IMAGES:"惰性加载从页面 (最小 5 最大 100)",RETURN_CHAPTER_LIST:"返回章节列表",PAGES_LOADED:"已加载的页数",GO_TO_PAGE:"转到页数",ENLARGE:"放大",RESTORE:"还原",REDUCE:"缩小",FIT_WIDTH:"适合宽度",FIT_HEIGHT:"适合高度",PERCENT:"百分之",TOGGLE_CONTROLS:"显示隐藏页面控件",ZOOM_IN:"放大",ZOOM_OUT:"缩小",ZOOM_RESET:"还原",ZOOM_WIDTH:"适合宽度",ZOOM_HEIGHT:"适合高度",HIDE:"显示隐藏页面控件",RELOAD:"重新加载",SLOWLY:"慢速",NORMAL:"正常",FAST:"快速",EXTREME:"极端",ALL_PAGES:"所有页面",SPEED_WARNING:"加载速度过高",SPEED_WARNING_MESSAGE:"不建议使用此速度.<br/>它可能会伤害某些服务器或将您的 IP 标记为 DDoS 攻击者.<br/>请谨慎使用!",SCROLL_UP:"向上滚动",SCROLL_DOWN:"向下滚动",CLOSE:"关闭",CANCEL:"取消",LIST_EMPTY:"没有收藏书签",SCROLL_START:"切换自动滚动",INCREASE_SPEED:"增加滚动速度",DECREASE_SPEED:"降低滚动速度",AUTO_SCROLL_HEIGHT:"自动滚动速度（以像素为单位）",VERTICAL_SEPARATOR:"显示垂直分隔符",END:"结尾",SCOPE:"范围",GLOBAL:"全球",GENERAL:"常规",LOADING:"装载",ZOOM:"缩放",OTHERS:"别人",NAVBAR_TYPE:"更改导航栏类型",NAVBAR_BOTTOM:"底部",NAVBAR_LEFT:"左边",NAVBAR_RIGHT:"正确的",NAVBAR_DISABLED:"已禁用",PAGINATION_TYPE:"分页类型",PAGINATION_DISABLED:"已禁用",PAGINATION_SLIDER:"滑块",PAGINATION_ARROWS:"侧边箭头",PAGINATION_BOTH:"两者",FILE_MENU:"主菜单",VIEW_MENU:"查看菜单",ZOOM_MENU:"缩放菜单",DOUBLE_PAGE:"切换双页"},io=[H2,G2,U2,V2,F2,W2];function Cu(e){return"listImages"in e&&!yn(e.listImages)}function Ou(e){return"listPages"in e&&!yn(e.listPages)}function Z2(e){return"bruteForce"in e&&!yn(e.bruteForce)}var $e=(function(e){return e.ENGLISH="English",e.SPANISH="Spanish",e.PORTUGUESE="Portuguese",e.CHINESE="Chinese",e.RAW="Raw",e})({}),Ne=(function(e){return e.MANGA="manga",e.COMIC="comic",e.HENTAI="hentai",e})({});function q2(e,t){return t in e}var Jo=(e,t)=>{const r=(i,a)=>Me.default.transform(i,(s,l,h)=>{Me.default.isEqual(l,a[h])||(Me.default.isObject(l)&&Me.default.isObject(a[h])&&!Me.default.isArray(l)?s[h]=r(l,a[h]):s[h]=l)});return r(e,t)},j2={bookmarks:[],colorScheme:"dark",downloadZip:!1,enabled:!1,fitWidthIfOversize:!0,header:"scroll",hidePageControls:!1,lazyLoadImages:!1,lazyStart:50,loadMode:"wait",locale:"en_US",maxReload:5,minZoom:30,navbar:"bottom",pagination:"disabled",scrollHeight:25,theme:"#29487D",loadSpeed:"Extreme",viewMode:"WebComic",zoomMode:"percent",zoomStep:30,zoomValue:100,keybinds:{SCROLL_UP:["up","W","num_8"],SCROLL_DOWN:["down","S","num_2"],NEXT_CHAPTER:["right","/","D","num_6"],PREVIOUS_CHAPTER:["left",";","A","num_4"],RETURN_CHAPTER_LIST:["backspace","del","num_decimal"],ENLARGE:["-","num_add","E"],REDUCE:["=","num_subtract","Q"],RESTORE:["9","num_divide","R"],FIT_WIDTH:["0","num_multiply","F"],FIT_HEIGHT:["H","num_0"],SETTINGS:["num_divide","num_5","X"],VIEW_MODE_WEBCOMIC:["C"],VIEW_MODE_VERTICAL:["V"],VIEW_MODE_LEFT:["N"],VIEW_MODE_RIGHT:["B"],VIEW_MODE_GALLERY:["G"],SCROLL_START:["space"],INCREASE_SPEED:["."],DECREASE_SPEED:[","]}},K2={lazyLoadImages:!0,fitWidthIfOversize:!0,navbar:"disabled",viewMode:"WebComic",header:"scroll",hidePageControls:!0,pagination:"disabled"},Y2={loadSpeed:"All",lazyLoadImages:!1,downloadZip:!1,theme:"oklch(44.6% 0.043 257.281)"};function $n(e=!0){const t={...j2,theme:e?"#29487D":"#004526"};let r=f2()?Me.default.defaultsDeep(K2,t):t;return p2()&&(r=Me.default.defaultsDeep(Y2,r)),r}function X2(e,t){if(Array.isArray(e)&&Array.isArray(t)){if(e.length!==t.length)return!1;const r=s=>`${s.url}-${s.date}`,i=[...e].sort((s,l)=>r(s).localeCompare(r(l))),a=[...t].sort((s,l)=>r(s).localeCompare(r(l)));return Me.default.isEqual(i,a)}}function J2(e,t){if(e&&typeof e=="object"&&t&&typeof t=="object"){const r=e,i=t,a=Me.default.keys(r).sort((l,h)=>l.localeCompare(h)),s=Me.default.keys(i).sort((l,h)=>l.localeCompare(h));if(!Me.default.isEqual(a,s))return!1;for(const l of a){const h=r[l]?[...r[l]].sort((f,p)=>f.localeCompare(p)):[],u=i[l]?[...i[l]].sort((f,p)=>f.localeCompare(p)):[];if(!Me.default.isEqual(h,u))return!1}return!0}}function Tu(e,t,r){if(r==="bookmarks")return X2(e,t);if(r==="keybinds")return J2(e,t)}function Yi(e,t,r){if(e===t)return!1;if(r){const i={[r]:e},a={[r]:t};return!Me.default.isEqualWith(i,a,Tu)}return!Me.default.isEqualWith(e,t,Tu)}var jt=Me.default.defaultsDeep(l2($n()),$n()),Kt=Me.default.defaultsDeep(c2($n(!1)),$n(!1)),Nr=()=>Kt?.enabled===!0,Ds=e=>Nr()&&!["locale","bookmarks","keybinds"].includes(e),St=cu(Nr()?{...Kt,locale:jt.locale,keybinds:jt.keybinds,bookmarks:jt.bookmarks}:jt),ao=x2(St,e=>io.find(t=>t.ID===e.locale)??io[1]),Yt=cu({autoScroll:!1,chapter:Rs(),currentPage:0,device:Wo(),manga:void 0,panel:"none",scrollToPage:void 0});function Fr(e){if(e){const t=Ds(e)?Kt[e]:jt[e],r=St.get()?.[e];Yi(r,t,e)&&(St.setKey(e,t),Ee("Refreshed Settings",e,t));return}for(const t in St.get()){const r=St.get()[t],i=Ds(t)?Kt[t]:jt[t];Yi(r,i)&&St.setKey(t,i)}Ee("Refreshed All Settings")}function Q2(e){const t=Me.default.defaultsDeep(e,$n()),r=jt?Jo(t,jt):t;if(!yn(r)){Ee("Imported Global Settings",r),jt=t;for(const i in r)Fr(i)}}su(Me.default.debounce(Q2,300),"settings");function ep(e){const t=Me.default.defaultsDeep(e,$n(!1)),r=Kt?Jo(t,Kt):t;if(!yn(r)){Ee("Imported Local Settings",r),Kt=t;for(const i in r)Fr(i)}}su(Me.default.debounce(ep,300),location.hostname);function Y(e){return St.get()?.[e]}function so(e,t){const r=St.get()?.[e];Yi(r,t,e)&&St.setKey(e,t)}function wt(e,t){Yi(Y(e),t,e)&&(St.setKey(e,t),Ds(e)?(Kt[e]=t,au(Jo(Kt,$n(!1)))):(jt[e]=t,u2(Jo(jt,$n()))))}function Qo(e,t){so(e,t(Y(e)))}function pe(e){return Yt.get()[e]}function Pe(e,t){const r=Yt.get()[e];Me.default.isEqual(r,t)||Yt.setKey(e,t)}function Lu(e,t){const r=Yt.get()[e],i=t(r);Me.default.isEqual(r,i)||Yt.setKey(e,i)}function Dn(e,t){Lu("images",r=>({...r,[e]:{...r?.[e],...t(r?.[e]??{})}}))}function q(e){const t=io.find(r=>r.ID===Y("locale"))??io[1];return q2(t,e)?t?.[e]??io[1]?.[e]:`##MISSING_STRING_${e}##`}function Ru(e=!1){return Kt.enabled=e,au(Jo(Kt,$n(!1))),Ee("Local Settings ",e?"Enabled":"Disabled"),Vo.info({title:"Changed Settings to",description:Nr()?"Local":"Global",duration:2e3}),Nr()}function tp(){Nr()?(ru(location.hostname),Kt=$n(!1),Ru(!1)):(ru("settings"),jt=$n(),Fr()),Ee("Settings Reset")}function lo(e=location.href){return Y("bookmarks").find(t=>t.url===e)?.page}function np(e=null){_n("Current Settings (Local:",Nr(),") ",e?St.get()[e]:St.get(),`
Global Settings`,e?jt[e]:jt,`
Local Settings`,e?Kt[e]:Kt,`
AppState`,Yt.get())}a2("MOVSettings",np);var rp=(e,t,r)=>{if(r&&!["bookmarks","zoomValue"].includes(r)){const i=t[r],a=e[r];Vo.info({title:`${r} Changed`,description:`from ${JSON.stringify(i)} to ${JSON.stringify(a)}`,duration:2e3})}};St.listen(Me.default.debounce(rp,300));var op=wn(((e,t)=>{(function(r){typeof e=="object"&&typeof t<"u"?t.exports=r():typeof define=="function"&&define.amd?define([],r):(typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:this).JSZip=r()})(function(){return(function r(i,a,s){function l(f,p){if(!a[f]){if(!i[f]){var b=typeof require=="function"&&require;if(!p&&b)return b(f,!0);if(h)return h(f,!0);var w=new Error("Cannot find module '"+f+"'");throw w.code="MODULE_NOT_FOUND",w}var v=a[f]={exports:{}};i[f][0].call(v.exports,function(m){var E=i[f][1][m];return l(E||m)},v,v.exports,r,i,a,s)}return a[f].exports}for(var h=typeof require=="function"&&require,u=0;u<s.length;u++)l(s[u]);return l})({1:[function(r,i,a){"use strict";var s=r("./utils"),l=r("./support"),h="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";a.encode=function(u){for(var f,p,b,w,v,m,E,y=[],S=0,x=u.length,T=x,L=s.getTypeOf(u)!=="string";S<u.length;)T=x-S,b=L?(f=u[S++],p=S<x?u[S++]:0,S<x?u[S++]:0):(f=u.charCodeAt(S++),p=S<x?u.charCodeAt(S++):0,S<x?u.charCodeAt(S++):0),w=f>>2,v=(3&f)<<4|p>>4,m=1<T?(15&p)<<2|b>>6:64,E=2<T?63&b:64,y.push(h.charAt(w)+h.charAt(v)+h.charAt(m)+h.charAt(E));return y.join("")},a.decode=function(u){var f,p,b,w,v,m,E=0,y=0,S="data:";if(u.substr(0,S.length)===S)throw new Error("Invalid base64 input, it looks like a data url.");var x,T=3*(u=u.replace(/[^A-Za-z0-9\+\/\=]/g,"")).length/4;if(u.charAt(u.length-1)===h.charAt(64)&&T--,u.charAt(u.length-2)===h.charAt(64)&&T--,T%1!=0)throw new Error("Invalid base64 input, bad content length.");for(x=l.uint8array?new Uint8Array(0|T):new Array(0|T);E<u.length;)f=h.indexOf(u.charAt(E++))<<2|(w=h.indexOf(u.charAt(E++)))>>4,p=(15&w)<<4|(v=h.indexOf(u.charAt(E++)))>>2,b=(3&v)<<6|(m=h.indexOf(u.charAt(E++))),x[y++]=f,v!==64&&(x[y++]=p),m!==64&&(x[y++]=b);return x}},{"./support":30,"./utils":32}],2:[function(r,i,a){"use strict";var s=r("./external"),l=r("./stream/DataWorker"),h=r("./stream/Crc32Probe"),u=r("./stream/DataLengthProbe");function f(p,b,w,v,m){this.compressedSize=p,this.uncompressedSize=b,this.crc32=w,this.compression=v,this.compressedContent=m}f.prototype={getContentWorker:function(){var p=new l(s.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new u("data_length")),b=this;return p.on("end",function(){if(this.streamInfo.data_length!==b.uncompressedSize)throw new Error("Bug : uncompressed data size mismatch")}),p},getCompressedWorker:function(){return new l(s.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize",this.compressedSize).withStreamInfo("uncompressedSize",this.uncompressedSize).withStreamInfo("crc32",this.crc32).withStreamInfo("compression",this.compression)}},f.createWorkerFrom=function(p,b,w){return p.pipe(new h).pipe(new u("uncompressedSize")).pipe(b.compressWorker(w)).pipe(new u("compressedSize")).withStreamInfo("compression",b)},i.exports=f},{"./external":6,"./stream/Crc32Probe":25,"./stream/DataLengthProbe":26,"./stream/DataWorker":27}],3:[function(r,i,a){"use strict";var s=r("./stream/GenericWorker");a.STORE={magic:"\0\0",compressWorker:function(l){return new s("STORE compression")},uncompressWorker:function(){return new s("STORE decompression")}},a.DEFLATE=r("./flate")},{"./flate":7,"./stream/GenericWorker":28}],4:[function(r,i,a){"use strict";var s=r("./utils"),l=(function(){for(var h,u=[],f=0;f<256;f++){h=f;for(var p=0;p<8;p++)h=1&h?3988292384^h>>>1:h>>>1;u[f]=h}return u})();i.exports=function(h,u){return h!==void 0&&h.length?s.getTypeOf(h)!=="string"?(function(f,p,b,w){var v=l,m=w+b;f^=-1;for(var E=w;E<m;E++)f=f>>>8^v[255&(f^p[E])];return-1^f})(0|u,h,h.length,0):(function(f,p,b,w){var v=l,m=w+b;f^=-1;for(var E=w;E<m;E++)f=f>>>8^v[255&(f^p.charCodeAt(E))];return-1^f})(0|u,h,h.length,0):0}},{"./utils":32}],5:[function(r,i,a){"use strict";a.base64=!1,a.binary=!1,a.dir=!1,a.createFolders=!0,a.date=null,a.compression=null,a.compressionOptions=null,a.comment=null,a.unixPermissions=null,a.dosPermissions=null},{}],6:[function(r,i,a){"use strict";var s=null;s=typeof Promise<"u"?Promise:r("lie"),i.exports={Promise:s}},{lie:37}],7:[function(r,i,a){"use strict";var s=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Uint32Array<"u",l=r("pako"),h=r("./utils"),u=r("./stream/GenericWorker"),f=s?"uint8array":"array";function p(b,w){u.call(this,"FlateWorker/"+b),this._pako=null,this._pakoAction=b,this._pakoOptions=w,this.meta={}}a.magic="\b\0",h.inherits(p,u),p.prototype.processChunk=function(b){this.meta=b.meta,this._pako===null&&this._createPako(),this._pako.push(h.transformTo(f,b.data),!1)},p.prototype.flush=function(){u.prototype.flush.call(this),this._pako===null&&this._createPako(),this._pako.push([],!0)},p.prototype.cleanUp=function(){u.prototype.cleanUp.call(this),this._pako=null},p.prototype._createPako=function(){this._pako=new l[this._pakoAction]({raw:!0,level:this._pakoOptions.level||-1});var b=this;this._pako.onData=function(w){b.push({data:w,meta:b.meta})}},a.compressWorker=function(b){return new p("Deflate",b)},a.uncompressWorker=function(){return new p("Inflate",{})}},{"./stream/GenericWorker":28,"./utils":32,pako:38}],8:[function(r,i,a){"use strict";function s(v,m){var E,y="";for(E=0;E<m;E++)y+=String.fromCharCode(255&v),v>>>=8;return y}function l(v,m,E,y,S,x){var T,L,D=v.file,K=v.compression,V=x!==f.utf8encode,ae=h.transformTo("string",x(D.name)),H=h.transformTo("string",f.utf8encode(D.name)),ge=D.comment,_e=h.transformTo("string",x(ge)),P=h.transformTo("string",f.utf8encode(ge)),X=H.length!==D.name.length,A=P.length!==ge.length,Q="",Ce="",se="",Ie=D.dir,le=D.date,Ae={crc32:0,compressedSize:0,uncompressedSize:0};m&&!E||(Ae.crc32=v.crc32,Ae.compressedSize=v.compressedSize,Ae.uncompressedSize=v.uncompressedSize);var W=0;m&&(W|=8),V||!X&&!A||(W|=2048);var U=0,Se=0;Ie&&(U|=16),S==="UNIX"?(Se=798,U|=(function(fe,Xe){var Et=fe;return fe||(Et=Xe?16893:33204),(65535&Et)<<16})(D.unixPermissions,Ie)):(Se=20,U|=(function(fe){return 63&(fe||0)})(D.dosPermissions)),T=le.getUTCHours(),T<<=6,T|=le.getUTCMinutes(),T<<=5,T|=le.getUTCSeconds()/2,L=le.getUTCFullYear()-1980,L<<=4,L|=le.getUTCMonth()+1,L<<=5,L|=le.getUTCDate(),X&&(Ce=s(1,1)+s(p(ae),4)+H,Q+="up"+s(Ce.length,2)+Ce),A&&(se=s(1,1)+s(p(_e),4)+P,Q+="uc"+s(se.length,2)+se);var me="";return me+=`
\0`,me+=s(W,2),me+=K.magic,me+=s(T,2),me+=s(L,2),me+=s(Ae.crc32,4),me+=s(Ae.compressedSize,4),me+=s(Ae.uncompressedSize,4),me+=s(ae.length,2),me+=s(Q.length,2),{fileRecord:b.LOCAL_FILE_HEADER+me+ae+Q,dirRecord:b.CENTRAL_FILE_HEADER+s(Se,2)+me+s(_e.length,2)+"\0\0\0\0"+s(U,4)+s(y,4)+ae+Q+_e}}var h=r("../utils"),u=r("../stream/GenericWorker"),f=r("../utf8"),p=r("../crc32"),b=r("../signature");function w(v,m,E,y){u.call(this,"ZipFileWorker"),this.bytesWritten=0,this.zipComment=m,this.zipPlatform=E,this.encodeFileName=y,this.streamFiles=v,this.accumulate=!1,this.contentBuffer=[],this.dirRecords=[],this.currentSourceOffset=0,this.entriesCount=0,this.currentFile=null,this._sources=[]}h.inherits(w,u),w.prototype.push=function(v){var m=v.meta.percent||0,E=this.entriesCount,y=this._sources.length;this.accumulate?this.contentBuffer.push(v):(this.bytesWritten+=v.data.length,u.prototype.push.call(this,{data:v.data,meta:{currentFile:this.currentFile,percent:E?(m+100*(E-y-1))/E:100}}))},w.prototype.openedSource=function(v){this.currentSourceOffset=this.bytesWritten,this.currentFile=v.file.name;var m=this.streamFiles&&!v.file.dir;if(m){var E=l(v,m,!1,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);this.push({data:E.fileRecord,meta:{percent:0}})}else this.accumulate=!0},w.prototype.closedSource=function(v){this.accumulate=!1;var m=this.streamFiles&&!v.file.dir,E=l(v,m,!0,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);if(this.dirRecords.push(E.dirRecord),m)this.push({data:(function(y){return b.DATA_DESCRIPTOR+s(y.crc32,4)+s(y.compressedSize,4)+s(y.uncompressedSize,4)})(v),meta:{percent:100}});else for(this.push({data:E.fileRecord,meta:{percent:0}});this.contentBuffer.length;)this.push(this.contentBuffer.shift());this.currentFile=null},w.prototype.flush=function(){for(var v=this.bytesWritten,m=0;m<this.dirRecords.length;m++)this.push({data:this.dirRecords[m],meta:{percent:100}});var E=this.bytesWritten-v,y=(function(S,x,T,L,D){var K=h.transformTo("string",D(L));return b.CENTRAL_DIRECTORY_END+"\0\0\0\0"+s(S,2)+s(S,2)+s(x,4)+s(T,4)+s(K.length,2)+K})(this.dirRecords.length,E,v,this.zipComment,this.encodeFileName);this.push({data:y,meta:{percent:100}})},w.prototype.prepareNextSource=function(){this.previous=this._sources.shift(),this.openedSource(this.previous.streamInfo),this.isPaused?this.previous.pause():this.previous.resume()},w.prototype.registerPrevious=function(v){this._sources.push(v);var m=this;return v.on("data",function(E){m.processChunk(E)}),v.on("end",function(){m.closedSource(m.previous.streamInfo),m._sources.length?m.prepareNextSource():m.end()}),v.on("error",function(E){m.error(E)}),this},w.prototype.resume=function(){return!!u.prototype.resume.call(this)&&(!this.previous&&this._sources.length?(this.prepareNextSource(),!0):this.previous||this._sources.length||this.generatedError?void 0:(this.end(),!0))},w.prototype.error=function(v){var m=this._sources;if(!u.prototype.error.call(this,v))return!1;for(var E=0;E<m.length;E++)try{m[E].error(v)}catch{}return!0},w.prototype.lock=function(){u.prototype.lock.call(this);for(var v=this._sources,m=0;m<v.length;m++)v[m].lock()},i.exports=w},{"../crc32":4,"../signature":23,"../stream/GenericWorker":28,"../utf8":31,"../utils":32}],9:[function(r,i,a){"use strict";var s=r("../compressions"),l=r("./ZipFileWorker");a.generateWorker=function(h,u,f){var p=new l(u.streamFiles,f,u.platform,u.encodeFileName),b=0;try{h.forEach(function(w,v){b++;var m=(function(x,T){var L=x||T,D=s[L];if(!D)throw new Error(L+" is not a valid compression method !");return D})(v.options.compression,u.compression),E=v.options.compressionOptions||u.compressionOptions||{},y=v.dir,S=v.date;v._compressWorker(m,E).withStreamInfo("file",{name:w,dir:y,date:S,comment:v.comment||"",unixPermissions:v.unixPermissions,dosPermissions:v.dosPermissions}).pipe(p)}),p.entriesCount=b}catch(w){p.error(w)}return p}},{"../compressions":3,"./ZipFileWorker":8}],10:[function(r,i,a){"use strict";function s(){if(!(this instanceof s))return new s;if(arguments.length)throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");this.files=Object.create(null),this.comment=null,this.root="",this.clone=function(){var l=new s;for(var h in this)typeof this[h]!="function"&&(l[h]=this[h]);return l}}(s.prototype=r("./object")).loadAsync=r("./load"),s.support=r("./support"),s.defaults=r("./defaults"),s.version="3.9.1",s.loadAsync=function(l,h){return new s().loadAsync(l,h)},s.external=r("./external"),i.exports=s},{"./defaults":5,"./external":6,"./load":11,"./object":15,"./support":30}],11:[function(r,i,a){"use strict";var s=r("./utils"),l=r("./external"),h=r("./utf8"),u=r("./zipEntries"),f=r("./stream/Crc32Probe"),p=r("./nodejsUtils");function b(w){return new l.Promise(function(v,m){var E=w.decompressed.getContentWorker().pipe(new f);E.on("error",function(y){m(y)}).on("end",function(){E.streamInfo.crc32!==w.decompressed.crc32?m(new Error("Corrupted zip : CRC32 mismatch")):v()}).resume()})}i.exports=function(w,v){var m=this;return v=s.extend(v||{},{base64:!1,checkCRC32:!1,optimizedBinaryString:!1,createFolders:!1,decodeFileName:h.utf8decode}),p.isNode&&p.isStream(w)?l.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")):s.prepareContent("the loaded zip file",w,!0,v.optimizedBinaryString,v.base64).then(function(E){var y=new u(v);return y.load(E),y}).then(function(E){var y=[l.Promise.resolve(E)],S=E.files;if(v.checkCRC32)for(var x=0;x<S.length;x++)y.push(b(S[x]));return l.Promise.all(y)}).then(function(E){for(var y=E.shift(),S=y.files,x=0;x<S.length;x++){var T=S[x],L=T.fileNameStr,D=s.resolve(T.fileNameStr);m.file(D,T.decompressed,{binary:!0,optimizedBinaryString:!0,date:T.date,dir:T.dir,comment:T.fileCommentStr.length?T.fileCommentStr:null,unixPermissions:T.unixPermissions,dosPermissions:T.dosPermissions,createFolders:v.createFolders}),T.dir||(m.file(D).unsafeOriginalName=L)}return y.zipComment.length&&(m.comment=y.zipComment),m})}},{"./external":6,"./nodejsUtils":14,"./stream/Crc32Probe":25,"./utf8":31,"./utils":32,"./zipEntries":33}],12:[function(r,i,a){"use strict";var s=r("../utils"),l=r("../stream/GenericWorker");function h(u,f){l.call(this,"Nodejs stream input adapter for "+u),this._upstreamEnded=!1,this._bindStream(f)}s.inherits(h,l),h.prototype._bindStream=function(u){var f=this;(this._stream=u).pause(),u.on("data",function(p){f.push({data:p,meta:{percent:0}})}).on("error",function(p){f.isPaused?this.generatedError=p:f.error(p)}).on("end",function(){f.isPaused?f._upstreamEnded=!0:f.end()})},h.prototype.pause=function(){return!!l.prototype.pause.call(this)&&(this._stream.pause(),!0)},h.prototype.resume=function(){return!!l.prototype.resume.call(this)&&(this._upstreamEnded?this.end():this._stream.resume(),!0)},i.exports=h},{"../stream/GenericWorker":28,"../utils":32}],13:[function(r,i,a){"use strict";var s=r("readable-stream").Readable;function l(h,u,f){s.call(this,u),this._helper=h;var p=this;h.on("data",function(b,w){p.push(b)||p._helper.pause(),f&&f(w)}).on("error",function(b){p.emit("error",b)}).on("end",function(){p.push(null)})}r("../utils").inherits(l,s),l.prototype._read=function(){this._helper.resume()},i.exports=l},{"../utils":32,"readable-stream":16}],14:[function(r,i,a){"use strict";i.exports={isNode:typeof Buffer<"u",newBufferFrom:function(s,l){if(Buffer.from&&Buffer.from!==Uint8Array.from)return Buffer.from(s,l);if(typeof s=="number")throw new Error('The "data" argument must not be a number');return new Buffer(s,l)},allocBuffer:function(s){if(Buffer.alloc)return Buffer.alloc(s);var l=new Buffer(s);return l.fill(0),l},isBuffer:function(s){return Buffer.isBuffer(s)},isStream:function(s){return s&&typeof s.on=="function"&&typeof s.pause=="function"&&typeof s.resume=="function"}}},{}],15:[function(r,i,a){"use strict";function s(L,D,K){var V,ae=h.getTypeOf(D),H=h.extend(K||{},p);H.date=H.date||new Date,H.compression!==null&&(H.compression=H.compression.toUpperCase()),typeof H.unixPermissions=="string"&&(H.unixPermissions=parseInt(H.unixPermissions,8)),H.unixPermissions&&16384&H.unixPermissions&&(H.dir=!0),H.dosPermissions&&16&H.dosPermissions&&(H.dir=!0),H.dir&&(L=S(L)),H.createFolders&&(V=y(L))&&x.call(this,V,!0);var ge=ae==="string"&&H.binary===!1&&H.base64===!1;K&&K.binary!==void 0||(H.binary=!ge),(D instanceof b&&D.uncompressedSize===0||H.dir||!D||D.length===0)&&(H.base64=!1,H.binary=!0,D="",H.compression="STORE",ae="string");var _e=null;_e=D instanceof b||D instanceof u?D:m.isNode&&m.isStream(D)?new E(L,D):h.prepareContent(L,D,H.binary,H.optimizedBinaryString,H.base64);var P=new w(L,_e,H);this.files[L]=P}var l=r("./utf8"),h=r("./utils"),u=r("./stream/GenericWorker"),f=r("./stream/StreamHelper"),p=r("./defaults"),b=r("./compressedObject"),w=r("./zipObject"),v=r("./generate"),m=r("./nodejsUtils"),E=r("./nodejs/NodejsStreamInputAdapter"),y=function(L){L.slice(-1)==="/"&&(L=L.substring(0,L.length-1));var D=L.lastIndexOf("/");return 0<D?L.substring(0,D):""},S=function(L){return L.slice(-1)!=="/"&&(L+="/"),L},x=function(L,D){return D=D!==void 0?D:p.createFolders,L=S(L),this.files[L]||s.call(this,L,null,{dir:!0,createFolders:D}),this.files[L]};function T(L){return Object.prototype.toString.call(L)==="[object RegExp]"}i.exports={load:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},forEach:function(L){var D,K,V;for(D in this.files)V=this.files[D],(K=D.slice(this.root.length,D.length))&&D.slice(0,this.root.length)===this.root&&L(K,V)},filter:function(L){var D=[];return this.forEach(function(K,V){L(K,V)&&D.push(V)}),D},file:function(L,D,K){if(arguments.length!==1)return L=this.root+L,s.call(this,L,D,K),this;if(T(L)){var V=L;return this.filter(function(H,ge){return!ge.dir&&V.test(H)})}var ae=this.files[this.root+L];return ae&&!ae.dir?ae:null},folder:function(L){if(!L)return this;if(T(L))return this.filter(function(ae,H){return H.dir&&L.test(ae)});var D=this.root+L,K=x.call(this,D),V=this.clone();return V.root=K.name,V},remove:function(L){L=this.root+L;var D=this.files[L];if(D||(L.slice(-1)!=="/"&&(L+="/"),D=this.files[L]),D&&!D.dir)delete this.files[L];else for(var K=this.filter(function(ae,H){return H.name.slice(0,L.length)===L}),V=0;V<K.length;V++)delete this.files[K[V].name];return this},generate:function(L){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},generateInternalStream:function(L){var D,K={};try{if((K=h.extend(L||{},{streamFiles:!1,compression:"STORE",compressionOptions:null,type:"",platform:"DOS",comment:null,mimeType:"application/zip",encodeFileName:l.utf8encode})).type=K.type.toLowerCase(),K.compression=K.compression.toUpperCase(),K.type==="binarystring"&&(K.type="string"),!K.type)throw new Error("No output type specified.");h.checkSupport(K.type),K.platform!=="darwin"&&K.platform!=="freebsd"&&K.platform!=="linux"&&K.platform!=="sunos"||(K.platform="UNIX"),K.platform==="win32"&&(K.platform="DOS");var V=K.comment||this.comment||"";D=v.generateWorker(this,K,V)}catch(ae){(D=new u("error")).error(ae)}return new f(D,K.type||"string",K.mimeType)},generateAsync:function(L,D){return this.generateInternalStream(L).accumulate(D)},generateNodeStream:function(L,D){return(L=L||{}).type||(L.type="nodebuffer"),this.generateInternalStream(L).toNodejsStream(D)}}},{"./compressedObject":2,"./defaults":5,"./generate":9,"./nodejs/NodejsStreamInputAdapter":12,"./nodejsUtils":14,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31,"./utils":32,"./zipObject":35}],16:[function(r,i,a){i.exports=r("stream")},{stream:void 0}],17:[function(r,i,a){"use strict";var s=r("./DataReader");function l(h){s.call(this,h);for(var u=0;u<this.data.length;u++)h[u]=255&h[u]}r("../utils").inherits(l,s),l.prototype.byteAt=function(h){return this.data[this.zero+h]},l.prototype.lastIndexOfSignature=function(h){for(var u=h.charCodeAt(0),f=h.charCodeAt(1),p=h.charCodeAt(2),b=h.charCodeAt(3),w=this.length-4;0<=w;--w)if(this.data[w]===u&&this.data[w+1]===f&&this.data[w+2]===p&&this.data[w+3]===b)return w-this.zero;return-1},l.prototype.readAndCheckSignature=function(h){var u=h.charCodeAt(0),f=h.charCodeAt(1),p=h.charCodeAt(2),b=h.charCodeAt(3),w=this.readData(4);return u===w[0]&&f===w[1]&&p===w[2]&&b===w[3]},l.prototype.readData=function(h){if(this.checkOffset(h),h===0)return[];var u=this.data.slice(this.zero+this.index,this.zero+this.index+h);return this.index+=h,u},i.exports=l},{"../utils":32,"./DataReader":18}],18:[function(r,i,a){"use strict";var s=r("../utils");function l(h){this.data=h,this.length=h.length,this.index=0,this.zero=0}l.prototype={checkOffset:function(h){this.checkIndex(this.index+h)},checkIndex:function(h){if(this.length<this.zero+h||h<0)throw new Error("End of data reached (data length = "+this.length+", asked index = "+h+"). Corrupted zip ?")},setIndex:function(h){this.checkIndex(h),this.index=h},skip:function(h){this.setIndex(this.index+h)},byteAt:function(h){},readInt:function(h){var u,f=0;for(this.checkOffset(h),u=this.index+h-1;u>=this.index;u--)f=(f<<8)+this.byteAt(u);return this.index+=h,f},readString:function(h){return s.transformTo("string",this.readData(h))},readData:function(h){},lastIndexOfSignature:function(h){},readAndCheckSignature:function(h){},readDate:function(){var h=this.readInt(4);return new Date(Date.UTC(1980+(h>>25&127),(h>>21&15)-1,h>>16&31,h>>11&31,h>>5&63,(31&h)<<1))}},i.exports=l},{"../utils":32}],19:[function(r,i,a){"use strict";var s=r("./Uint8ArrayReader");function l(h){s.call(this,h)}r("../utils").inherits(l,s),l.prototype.readData=function(h){this.checkOffset(h);var u=this.data.slice(this.zero+this.index,this.zero+this.index+h);return this.index+=h,u},i.exports=l},{"../utils":32,"./Uint8ArrayReader":21}],20:[function(r,i,a){"use strict";var s=r("./DataReader");function l(h){s.call(this,h)}r("../utils").inherits(l,s),l.prototype.byteAt=function(h){return this.data.charCodeAt(this.zero+h)},l.prototype.lastIndexOfSignature=function(h){return this.data.lastIndexOf(h)-this.zero},l.prototype.readAndCheckSignature=function(h){return h===this.readData(4)},l.prototype.readData=function(h){this.checkOffset(h);var u=this.data.slice(this.zero+this.index,this.zero+this.index+h);return this.index+=h,u},i.exports=l},{"../utils":32,"./DataReader":18}],21:[function(r,i,a){"use strict";var s=r("./ArrayReader");function l(h){s.call(this,h)}r("../utils").inherits(l,s),l.prototype.readData=function(h){if(this.checkOffset(h),h===0)return new Uint8Array(0);var u=this.data.subarray(this.zero+this.index,this.zero+this.index+h);return this.index+=h,u},i.exports=l},{"../utils":32,"./ArrayReader":17}],22:[function(r,i,a){"use strict";var s=r("../utils"),l=r("../support"),h=r("./ArrayReader"),u=r("./StringReader"),f=r("./NodeBufferReader"),p=r("./Uint8ArrayReader");i.exports=function(b){var w=s.getTypeOf(b);return s.checkSupport(w),w!=="string"||l.uint8array?w==="nodebuffer"?new f(b):l.uint8array?new p(s.transformTo("uint8array",b)):new h(s.transformTo("array",b)):new u(b)}},{"../support":30,"../utils":32,"./ArrayReader":17,"./NodeBufferReader":19,"./StringReader":20,"./Uint8ArrayReader":21}],23:[function(r,i,a){"use strict";a.LOCAL_FILE_HEADER="PK",a.CENTRAL_FILE_HEADER="PK",a.CENTRAL_DIRECTORY_END="PK",a.ZIP64_CENTRAL_DIRECTORY_LOCATOR="PK\x07",a.ZIP64_CENTRAL_DIRECTORY_END="PK",a.DATA_DESCRIPTOR="PK\x07\b"},{}],24:[function(r,i,a){"use strict";var s=r("./GenericWorker"),l=r("../utils");function h(u){s.call(this,"ConvertWorker to "+u),this.destType=u}l.inherits(h,s),h.prototype.processChunk=function(u){this.push({data:l.transformTo(this.destType,u.data),meta:u.meta})},i.exports=h},{"../utils":32,"./GenericWorker":28}],25:[function(r,i,a){"use strict";var s=r("./GenericWorker"),l=r("../crc32");function h(){s.call(this,"Crc32Probe"),this.withStreamInfo("crc32",0)}r("../utils").inherits(h,s),h.prototype.processChunk=function(u){this.streamInfo.crc32=l(u.data,this.streamInfo.crc32||0),this.push(u)},i.exports=h},{"../crc32":4,"../utils":32,"./GenericWorker":28}],26:[function(r,i,a){"use strict";var s=r("../utils"),l=r("./GenericWorker");function h(u){l.call(this,"DataLengthProbe for "+u),this.propName=u,this.withStreamInfo(u,0)}s.inherits(h,l),h.prototype.processChunk=function(u){if(u){var f=this.streamInfo[this.propName]||0;this.streamInfo[this.propName]=f+u.data.length}l.prototype.processChunk.call(this,u)},i.exports=h},{"../utils":32,"./GenericWorker":28}],27:[function(r,i,a){"use strict";var s=r("../utils"),l=r("./GenericWorker");function h(u){l.call(this,"DataWorker");var f=this;this.dataIsReady=!1,this.index=0,this.max=0,this.data=null,this.type="",this._tickScheduled=!1,u.then(function(p){f.dataIsReady=!0,f.data=p,f.max=p&&p.length||0,f.type=s.getTypeOf(p),f.isPaused||f._tickAndRepeat()},function(p){f.error(p)})}s.inherits(h,l),h.prototype.cleanUp=function(){l.prototype.cleanUp.call(this),this.data=null},h.prototype.resume=function(){return!!l.prototype.resume.call(this)&&(!this._tickScheduled&&this.dataIsReady&&(this._tickScheduled=!0,s.delay(this._tickAndRepeat,[],this)),!0)},h.prototype._tickAndRepeat=function(){this._tickScheduled=!1,this.isPaused||this.isFinished||(this._tick(),this.isFinished||(s.delay(this._tickAndRepeat,[],this),this._tickScheduled=!0))},h.prototype._tick=function(){if(this.isPaused||this.isFinished)return!1;var u=null,f=Math.min(this.max,this.index+16384);if(this.index>=this.max)return this.end();switch(this.type){case"string":u=this.data.substring(this.index,f);break;case"uint8array":u=this.data.subarray(this.index,f);break;case"array":case"nodebuffer":u=this.data.slice(this.index,f)}return this.index=f,this.push({data:u,meta:{percent:this.max?this.index/this.max*100:0}})},i.exports=h},{"../utils":32,"./GenericWorker":28}],28:[function(r,i,a){"use strict";function s(l){this.name=l||"default",this.streamInfo={},this.generatedError=null,this.extraStreamInfo={},this.isPaused=!0,this.isFinished=!1,this.isLocked=!1,this._listeners={data:[],end:[],error:[]},this.previous=null}s.prototype={push:function(l){this.emit("data",l)},end:function(){if(this.isFinished)return!1;this.flush();try{this.emit("end"),this.cleanUp(),this.isFinished=!0}catch(l){this.emit("error",l)}return!0},error:function(l){return!this.isFinished&&(this.isPaused?this.generatedError=l:(this.isFinished=!0,this.emit("error",l),this.previous&&this.previous.error(l),this.cleanUp()),!0)},on:function(l,h){return this._listeners[l].push(h),this},cleanUp:function(){this.streamInfo=this.generatedError=this.extraStreamInfo=null,this._listeners=[]},emit:function(l,h){if(this._listeners[l])for(var u=0;u<this._listeners[l].length;u++)this._listeners[l][u].call(this,h)},pipe:function(l){return l.registerPrevious(this)},registerPrevious:function(l){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.streamInfo=l.streamInfo,this.mergeStreamInfo(),this.previous=l;var h=this;return l.on("data",function(u){h.processChunk(u)}),l.on("end",function(){h.end()}),l.on("error",function(u){h.error(u)}),this},pause:function(){return!this.isPaused&&!this.isFinished&&(this.isPaused=!0,this.previous&&this.previous.pause(),!0)},resume:function(){if(!this.isPaused||this.isFinished)return!1;var l=this.isPaused=!1;return this.generatedError&&(this.error(this.generatedError),l=!0),this.previous&&this.previous.resume(),!l},flush:function(){},processChunk:function(l){this.push(l)},withStreamInfo:function(l,h){return this.extraStreamInfo[l]=h,this.mergeStreamInfo(),this},mergeStreamInfo:function(){for(var l in this.extraStreamInfo)this.extraStreamInfo.hasOwnProperty(l)&&(this.streamInfo[l]=this.extraStreamInfo[l])},lock:function(){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.isLocked=!0,this.previous&&this.previous.lock()},toString:function(){var l="Worker "+this.name;return this.previous?this.previous+" -> "+l:l}},i.exports=s},{}],29:[function(r,i,a){"use strict";var s=r("../utils"),l=r("./ConvertWorker"),h=r("./GenericWorker"),u=r("../base64"),f=r("../support"),p=r("../external"),b=null;if(f.nodestream)try{b=r("../nodejs/NodejsStreamOutputAdapter")}catch{}function w(m,E){return new p.Promise(function(y,S){var x=[],T=m._internalType,L=m._outputType,D=m._mimeType;m.on("data",function(K,V){x.push(K),E&&E(V)}).on("error",function(K){x=[],S(K)}).on("end",function(){try{y((function(K,V,ae){switch(K){case"blob":return s.newBlob(s.transformTo("arraybuffer",V),ae);case"base64":return u.encode(V);default:return s.transformTo(K,V)}})(L,(function(K,V){var ae,H=0,ge=null,_e=0;for(ae=0;ae<V.length;ae++)_e+=V[ae].length;switch(K){case"string":return V.join("");case"array":return Array.prototype.concat.apply([],V);case"uint8array":for(ge=new Uint8Array(_e),ae=0;ae<V.length;ae++)ge.set(V[ae],H),H+=V[ae].length;return ge;case"nodebuffer":return Buffer.concat(V);default:throw new Error("concat : unsupported type '"+K+"'")}})(T,x),D))}catch(K){S(K)}x=[]}).resume()})}function v(m,E,y){var S=E;switch(E){case"blob":case"arraybuffer":S="uint8array";break;case"base64":S="string"}try{this._internalType=S,this._outputType=E,this._mimeType=y,s.checkSupport(S),this._worker=m.pipe(new l(S)),m.lock()}catch(x){this._worker=new h("error"),this._worker.error(x)}}v.prototype={accumulate:function(m){return w(this,m)},on:function(m,E){var y=this;return m==="data"?this._worker.on(m,function(S){E.call(y,S.data,S.meta)}):this._worker.on(m,function(){s.delay(E,arguments,y)}),this},resume:function(){return s.delay(this._worker.resume,[],this._worker),this},pause:function(){return this._worker.pause(),this},toNodejsStream:function(m){if(s.checkSupport("nodestream"),this._outputType!=="nodebuffer")throw new Error(this._outputType+" is not supported by this method");return new b(this,{objectMode:this._outputType!=="nodebuffer"},m)}},i.exports=v},{"../base64":1,"../external":6,"../nodejs/NodejsStreamOutputAdapter":13,"../support":30,"../utils":32,"./ConvertWorker":24,"./GenericWorker":28}],30:[function(r,i,a){"use strict";if(a.base64=!0,a.array=!0,a.string=!0,a.arraybuffer=typeof ArrayBuffer<"u"&&typeof Uint8Array<"u",a.nodebuffer=typeof Buffer<"u",a.uint8array=typeof Uint8Array<"u",typeof ArrayBuffer>"u")a.blob=!1;else{var s=new ArrayBuffer(0);try{a.blob=new Blob([s],{type:"application/zip"}).size===0}catch{try{var l=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);l.append(s),a.blob=l.getBlob("application/zip").size===0}catch{a.blob=!1}}}try{a.nodestream=!!r("readable-stream").Readable}catch{a.nodestream=!1}},{"readable-stream":16}],31:[function(r,i,a){"use strict";for(var s=r("./utils"),l=r("./support"),h=r("./nodejsUtils"),u=r("./stream/GenericWorker"),f=new Array(256),p=0;p<256;p++)f[p]=252<=p?6:248<=p?5:240<=p?4:224<=p?3:192<=p?2:1;f[254]=f[254]=1;function b(){u.call(this,"utf-8 decode"),this.leftOver=null}function w(){u.call(this,"utf-8 encode")}a.utf8encode=function(v){return l.nodebuffer?h.newBufferFrom(v,"utf-8"):(function(m){var E,y,S,x,T,L=m.length,D=0;for(x=0;x<L;x++)(64512&(y=m.charCodeAt(x)))==55296&&x+1<L&&(64512&(S=m.charCodeAt(x+1)))==56320&&(y=65536+(y-55296<<10)+(S-56320),x++),D+=y<128?1:y<2048?2:y<65536?3:4;for(E=l.uint8array?new Uint8Array(D):new Array(D),x=T=0;T<D;x++)(64512&(y=m.charCodeAt(x)))==55296&&x+1<L&&(64512&(S=m.charCodeAt(x+1)))==56320&&(y=65536+(y-55296<<10)+(S-56320),x++),y<128?E[T++]=y:(y<2048?E[T++]=192|y>>>6:(y<65536?E[T++]=224|y>>>12:(E[T++]=240|y>>>18,E[T++]=128|y>>>12&63),E[T++]=128|y>>>6&63),E[T++]=128|63&y);return E})(v)},a.utf8decode=function(v){return l.nodebuffer?s.transformTo("nodebuffer",v).toString("utf-8"):(function(m){var E,y,S,x,T=m.length,L=new Array(2*T);for(E=y=0;E<T;)if((S=m[E++])<128)L[y++]=S;else if(4<(x=f[S]))L[y++]=65533,E+=x-1;else{for(S&=x===2?31:x===3?15:7;1<x&&E<T;)S=S<<6|63&m[E++],x--;1<x?L[y++]=65533:S<65536?L[y++]=S:(S-=65536,L[y++]=55296|S>>10&1023,L[y++]=56320|1023&S)}return L.length!==y&&(L.subarray?L=L.subarray(0,y):L.length=y),s.applyFromCharCode(L)})(v=s.transformTo(l.uint8array?"uint8array":"array",v))},s.inherits(b,u),b.prototype.processChunk=function(v){var m=s.transformTo(l.uint8array?"uint8array":"array",v.data);if(this.leftOver&&this.leftOver.length){if(l.uint8array){var E=m;(m=new Uint8Array(E.length+this.leftOver.length)).set(this.leftOver,0),m.set(E,this.leftOver.length)}else m=this.leftOver.concat(m);this.leftOver=null}var y=(function(x,T){var L;for((T=T||x.length)>x.length&&(T=x.length),L=T-1;0<=L&&(192&x[L])==128;)L--;return L<0||L===0?T:L+f[x[L]]>T?L:T})(m),S=m;y!==m.length&&(l.uint8array?(S=m.subarray(0,y),this.leftOver=m.subarray(y,m.length)):(S=m.slice(0,y),this.leftOver=m.slice(y,m.length))),this.push({data:a.utf8decode(S),meta:v.meta})},b.prototype.flush=function(){this.leftOver&&this.leftOver.length&&(this.push({data:a.utf8decode(this.leftOver),meta:{}}),this.leftOver=null)},a.Utf8DecodeWorker=b,s.inherits(w,u),w.prototype.processChunk=function(v){this.push({data:a.utf8encode(v.data),meta:v.meta})},a.Utf8EncodeWorker=w},{"./nodejsUtils":14,"./stream/GenericWorker":28,"./support":30,"./utils":32}],32:[function(r,i,a){"use strict";var s=r("./support"),l=r("./base64"),h=r("./nodejsUtils"),u=r("set-immediate-shim"),f=r("./external");function p(y){return y}function b(y,S){for(var x=0;x<y.length;++x)S[x]=255&y.charCodeAt(x);return S}a.newBlob=function(y,S){a.checkSupport("blob");try{return new Blob([y],{type:S})}catch{try{var x=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);return x.append(y),x.getBlob(S)}catch{throw new Error("Bug : can't construct the Blob.")}}};var w={stringifyByChunk:function(y,S,x){var T=[],L=0,D=y.length;if(D<=x)return String.fromCharCode.apply(null,y);for(;L<D;)S==="array"||S==="nodebuffer"?T.push(String.fromCharCode.apply(null,y.slice(L,Math.min(L+x,D)))):T.push(String.fromCharCode.apply(null,y.subarray(L,Math.min(L+x,D)))),L+=x;return T.join("")},stringifyByChar:function(y){for(var S="",x=0;x<y.length;x++)S+=String.fromCharCode(y[x]);return S},applyCanBeUsed:{uint8array:(function(){try{return s.uint8array&&String.fromCharCode.apply(null,new Uint8Array(1)).length===1}catch{return!1}})(),nodebuffer:(function(){try{return s.nodebuffer&&String.fromCharCode.apply(null,h.allocBuffer(1)).length===1}catch{return!1}})()}};function v(y){var S=65536,x=a.getTypeOf(y),T=!0;if(x==="uint8array"?T=w.applyCanBeUsed.uint8array:x==="nodebuffer"&&(T=w.applyCanBeUsed.nodebuffer),T)for(;1<S;)try{return w.stringifyByChunk(y,x,S)}catch{S=Math.floor(S/2)}return w.stringifyByChar(y)}function m(y,S){for(var x=0;x<y.length;x++)S[x]=y[x];return S}a.applyFromCharCode=v;var E={};E.string={string:p,array:function(y){return b(y,new Array(y.length))},arraybuffer:function(y){return E.string.uint8array(y).buffer},uint8array:function(y){return b(y,new Uint8Array(y.length))},nodebuffer:function(y){return b(y,h.allocBuffer(y.length))}},E.array={string:v,array:p,arraybuffer:function(y){return new Uint8Array(y).buffer},uint8array:function(y){return new Uint8Array(y)},nodebuffer:function(y){return h.newBufferFrom(y)}},E.arraybuffer={string:function(y){return v(new Uint8Array(y))},array:function(y){return m(new Uint8Array(y),new Array(y.byteLength))},arraybuffer:p,uint8array:function(y){return new Uint8Array(y)},nodebuffer:function(y){return h.newBufferFrom(new Uint8Array(y))}},E.uint8array={string:v,array:function(y){return m(y,new Array(y.length))},arraybuffer:function(y){return y.buffer},uint8array:p,nodebuffer:function(y){return h.newBufferFrom(y)}},E.nodebuffer={string:v,array:function(y){return m(y,new Array(y.length))},arraybuffer:function(y){return E.nodebuffer.uint8array(y).buffer},uint8array:function(y){return m(y,new Uint8Array(y.length))},nodebuffer:p},a.transformTo=function(y,S){return S=S||"",y?(a.checkSupport(y),E[a.getTypeOf(S)][y](S)):S},a.resolve=function(y){for(var S=y.split("/"),x=[],T=0;T<S.length;T++){var L=S[T];L==="."||L===""&&T!==0&&T!==S.length-1||(L===".."?x.pop():x.push(L))}return x.join("/")},a.getTypeOf=function(y){return typeof y=="string"?"string":Object.prototype.toString.call(y)==="[object Array]"?"array":s.nodebuffer&&h.isBuffer(y)?"nodebuffer":s.uint8array&&y instanceof Uint8Array?"uint8array":s.arraybuffer&&y instanceof ArrayBuffer?"arraybuffer":void 0},a.checkSupport=function(y){if(!s[y.toLowerCase()])throw new Error(y+" is not supported by this platform")},a.MAX_VALUE_16BITS=65535,a.MAX_VALUE_32BITS=-1,a.pretty=function(y){var S,x,T="";for(x=0;x<(y||"").length;x++)T+="\\x"+((S=y.charCodeAt(x))<16?"0":"")+S.toString(16).toUpperCase();return T},a.delay=function(y,S,x){u(function(){y.apply(x||null,S||[])})},a.inherits=function(y,S){function x(){}x.prototype=S.prototype,y.prototype=new x},a.extend=function(){var y,S,x={};for(y=0;y<arguments.length;y++)for(S in arguments[y])arguments[y].hasOwnProperty(S)&&x[S]===void 0&&(x[S]=arguments[y][S]);return x},a.prepareContent=function(y,S,x,T,L){return f.Promise.resolve(S).then(function(D){return s.blob&&(D instanceof Blob||["[object File]","[object Blob]"].indexOf(Object.prototype.toString.call(D))!==-1)&&typeof FileReader<"u"?new f.Promise(function(K,V){var ae=new FileReader;ae.onload=function(H){K(H.target.result)},ae.onerror=function(H){V(H.target.error)},ae.readAsArrayBuffer(D)}):D}).then(function(D){var K=a.getTypeOf(D);return K?(K==="arraybuffer"?D=a.transformTo("uint8array",D):K==="string"&&(L?D=l.decode(D):x&&T!==!0&&(D=(function(V){return b(V,s.uint8array?new Uint8Array(V.length):new Array(V.length))})(D))),D):f.Promise.reject(new Error("Can't read the data of '"+y+"'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"))})}},{"./base64":1,"./external":6,"./nodejsUtils":14,"./support":30,"set-immediate-shim":54}],33:[function(r,i,a){"use strict";var s=r("./reader/readerFor"),l=r("./utils"),h=r("./signature"),u=r("./zipEntry"),f=(r("./utf8"),r("./support"));function p(b){this.files=[],this.loadOptions=b}p.prototype={checkSignature:function(b){if(!this.reader.readAndCheckSignature(b)){this.reader.index-=4;var w=this.reader.readString(4);throw new Error("Corrupted zip or bug: unexpected signature ("+l.pretty(w)+", expected "+l.pretty(b)+")")}},isSignature:function(b,w){var v=this.reader.index;this.reader.setIndex(b);var m=this.reader.readString(4)===w;return this.reader.setIndex(v),m},readBlockEndOfCentral:function(){this.diskNumber=this.reader.readInt(2),this.diskWithCentralDirStart=this.reader.readInt(2),this.centralDirRecordsOnThisDisk=this.reader.readInt(2),this.centralDirRecords=this.reader.readInt(2),this.centralDirSize=this.reader.readInt(4),this.centralDirOffset=this.reader.readInt(4),this.zipCommentLength=this.reader.readInt(2);var b=this.reader.readData(this.zipCommentLength),w=f.uint8array?"uint8array":"array",v=l.transformTo(w,b);this.zipComment=this.loadOptions.decodeFileName(v)},readBlockZip64EndOfCentral:function(){this.zip64EndOfCentralSize=this.reader.readInt(8),this.reader.skip(4),this.diskNumber=this.reader.readInt(4),this.diskWithCentralDirStart=this.reader.readInt(4),this.centralDirRecordsOnThisDisk=this.reader.readInt(8),this.centralDirRecords=this.reader.readInt(8),this.centralDirSize=this.reader.readInt(8),this.centralDirOffset=this.reader.readInt(8),this.zip64ExtensibleData={};for(var b,w,v,m=this.zip64EndOfCentralSize-44;0<m;)b=this.reader.readInt(2),w=this.reader.readInt(4),v=this.reader.readData(w),this.zip64ExtensibleData[b]={id:b,length:w,value:v}},readBlockZip64EndOfCentralLocator:function(){if(this.diskWithZip64CentralDirStart=this.reader.readInt(4),this.relativeOffsetEndOfZip64CentralDir=this.reader.readInt(8),this.disksCount=this.reader.readInt(4),1<this.disksCount)throw new Error("Multi-volumes zip are not supported")},readLocalFiles:function(){var b,w;for(b=0;b<this.files.length;b++)w=this.files[b],this.reader.setIndex(w.localHeaderOffset),this.checkSignature(h.LOCAL_FILE_HEADER),w.readLocalPart(this.reader),w.handleUTF8(),w.processAttributes()},readCentralDir:function(){var b;for(this.reader.setIndex(this.centralDirOffset);this.reader.readAndCheckSignature(h.CENTRAL_FILE_HEADER);)(b=new u({zip64:this.zip64},this.loadOptions)).readCentralPart(this.reader),this.files.push(b);if(this.centralDirRecords!==this.files.length&&this.centralDirRecords!==0&&this.files.length===0)throw new Error("Corrupted zip or bug: expected "+this.centralDirRecords+" records in central dir, got "+this.files.length)},readEndOfCentral:function(){var b=this.reader.lastIndexOfSignature(h.CENTRAL_DIRECTORY_END);if(b<0)throw this.isSignature(0,h.LOCAL_FILE_HEADER)?new Error("Corrupted zip: can't find end of central directory"):new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");this.reader.setIndex(b);var w=b;if(this.checkSignature(h.CENTRAL_DIRECTORY_END),this.readBlockEndOfCentral(),this.diskNumber===l.MAX_VALUE_16BITS||this.diskWithCentralDirStart===l.MAX_VALUE_16BITS||this.centralDirRecordsOnThisDisk===l.MAX_VALUE_16BITS||this.centralDirRecords===l.MAX_VALUE_16BITS||this.centralDirSize===l.MAX_VALUE_32BITS||this.centralDirOffset===l.MAX_VALUE_32BITS){if(this.zip64=!0,(b=this.reader.lastIndexOfSignature(h.ZIP64_CENTRAL_DIRECTORY_LOCATOR))<0)throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");if(this.reader.setIndex(b),this.checkSignature(h.ZIP64_CENTRAL_DIRECTORY_LOCATOR),this.readBlockZip64EndOfCentralLocator(),!this.isSignature(this.relativeOffsetEndOfZip64CentralDir,h.ZIP64_CENTRAL_DIRECTORY_END)&&(this.relativeOffsetEndOfZip64CentralDir=this.reader.lastIndexOfSignature(h.ZIP64_CENTRAL_DIRECTORY_END),this.relativeOffsetEndOfZip64CentralDir<0))throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),this.checkSignature(h.ZIP64_CENTRAL_DIRECTORY_END),this.readBlockZip64EndOfCentral()}var v=this.centralDirOffset+this.centralDirSize;this.zip64&&(v+=20,v+=12+this.zip64EndOfCentralSize);var m=w-v;if(0<m)this.isSignature(w,h.CENTRAL_FILE_HEADER)||(this.reader.zero=m);else if(m<0)throw new Error("Corrupted zip: missing "+Math.abs(m)+" bytes.")},prepareReader:function(b){this.reader=s(b)},load:function(b){this.prepareReader(b),this.readEndOfCentral(),this.readCentralDir(),this.readLocalFiles()}},i.exports=p},{"./reader/readerFor":22,"./signature":23,"./support":30,"./utf8":31,"./utils":32,"./zipEntry":34}],34:[function(r,i,a){"use strict";var s=r("./reader/readerFor"),l=r("./utils"),h=r("./compressedObject"),u=r("./crc32"),f=r("./utf8"),p=r("./compressions"),b=r("./support");function w(v,m){this.options=v,this.loadOptions=m}w.prototype={isEncrypted:function(){return(1&this.bitFlag)==1},useUTF8:function(){return(2048&this.bitFlag)==2048},readLocalPart:function(v){var m,E;if(v.skip(22),this.fileNameLength=v.readInt(2),E=v.readInt(2),this.fileName=v.readData(this.fileNameLength),v.skip(E),this.compressedSize===-1||this.uncompressedSize===-1)throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");if((m=(function(y){for(var S in p)if(p.hasOwnProperty(S)&&p[S].magic===y)return p[S];return null})(this.compressionMethod))===null)throw new Error("Corrupted zip : compression "+l.pretty(this.compressionMethod)+" unknown (inner file : "+l.transformTo("string",this.fileName)+")");this.decompressed=new h(this.compressedSize,this.uncompressedSize,this.crc32,m,v.readData(this.compressedSize))},readCentralPart:function(v){this.versionMadeBy=v.readInt(2),v.skip(2),this.bitFlag=v.readInt(2),this.compressionMethod=v.readString(2),this.date=v.readDate(),this.crc32=v.readInt(4),this.compressedSize=v.readInt(4),this.uncompressedSize=v.readInt(4);var m=v.readInt(2);if(this.extraFieldsLength=v.readInt(2),this.fileCommentLength=v.readInt(2),this.diskNumberStart=v.readInt(2),this.internalFileAttributes=v.readInt(2),this.externalFileAttributes=v.readInt(4),this.localHeaderOffset=v.readInt(4),this.isEncrypted())throw new Error("Encrypted zip are not supported");v.skip(m),this.readExtraFields(v),this.parseZIP64ExtraField(v),this.fileComment=v.readData(this.fileCommentLength)},processAttributes:function(){this.unixPermissions=null,this.dosPermissions=null;var v=this.versionMadeBy>>8;this.dir=!!(16&this.externalFileAttributes),v==0&&(this.dosPermissions=63&this.externalFileAttributes),v==3&&(this.unixPermissions=this.externalFileAttributes>>16&65535),this.dir||this.fileNameStr.slice(-1)!=="/"||(this.dir=!0)},parseZIP64ExtraField:function(v){if(this.extraFields[1]){var m=s(this.extraFields[1].value);this.uncompressedSize===l.MAX_VALUE_32BITS&&(this.uncompressedSize=m.readInt(8)),this.compressedSize===l.MAX_VALUE_32BITS&&(this.compressedSize=m.readInt(8)),this.localHeaderOffset===l.MAX_VALUE_32BITS&&(this.localHeaderOffset=m.readInt(8)),this.diskNumberStart===l.MAX_VALUE_32BITS&&(this.diskNumberStart=m.readInt(4))}},readExtraFields:function(v){var m,E,y,S=v.index+this.extraFieldsLength;for(this.extraFields||(this.extraFields={});v.index+4<S;)m=v.readInt(2),E=v.readInt(2),y=v.readData(E),this.extraFields[m]={id:m,length:E,value:y};v.setIndex(S)},handleUTF8:function(){var v=b.uint8array?"uint8array":"array";if(this.useUTF8())this.fileNameStr=f.utf8decode(this.fileName),this.fileCommentStr=f.utf8decode(this.fileComment);else{var m=this.findExtraFieldUnicodePath();if(m!==null)this.fileNameStr=m;else{var E=l.transformTo(v,this.fileName);this.fileNameStr=this.loadOptions.decodeFileName(E)}var y=this.findExtraFieldUnicodeComment();if(y!==null)this.fileCommentStr=y;else{var S=l.transformTo(v,this.fileComment);this.fileCommentStr=this.loadOptions.decodeFileName(S)}}},findExtraFieldUnicodePath:function(){var v=this.extraFields[28789];if(v){var m=s(v.value);return m.readInt(1)!==1||u(this.fileName)!==m.readInt(4)?null:f.utf8decode(m.readData(v.length-5))}return null},findExtraFieldUnicodeComment:function(){var v=this.extraFields[25461];if(v){var m=s(v.value);return m.readInt(1)!==1||u(this.fileComment)!==m.readInt(4)?null:f.utf8decode(m.readData(v.length-5))}return null}},i.exports=w},{"./compressedObject":2,"./compressions":3,"./crc32":4,"./reader/readerFor":22,"./support":30,"./utf8":31,"./utils":32}],35:[function(r,i,a){"use strict";function s(m,E,y){this.name=m,this.dir=y.dir,this.date=y.date,this.comment=y.comment,this.unixPermissions=y.unixPermissions,this.dosPermissions=y.dosPermissions,this._data=E,this._dataBinary=y.binary,this.options={compression:y.compression,compressionOptions:y.compressionOptions}}var l=r("./stream/StreamHelper"),h=r("./stream/DataWorker"),u=r("./utf8"),f=r("./compressedObject"),p=r("./stream/GenericWorker");s.prototype={internalStream:function(m){var E=null,y="string";try{if(!m)throw new Error("No output type specified.");var S=(y=m.toLowerCase())==="string"||y==="text";y!=="binarystring"&&y!=="text"||(y="string"),E=this._decompressWorker();var x=!this._dataBinary;x&&!S&&(E=E.pipe(new u.Utf8EncodeWorker)),!x&&S&&(E=E.pipe(new u.Utf8DecodeWorker))}catch(T){(E=new p("error")).error(T)}return new l(E,y,"")},async:function(m,E){return this.internalStream(m).accumulate(E)},nodeStream:function(m,E){return this.internalStream(m||"nodebuffer").toNodejsStream(E)},_compressWorker:function(m,E){if(this._data instanceof f&&this._data.compression.magic===m.magic)return this._data.getCompressedWorker();var y=this._decompressWorker();return this._dataBinary||(y=y.pipe(new u.Utf8EncodeWorker)),f.createWorkerFrom(y,m,E)},_decompressWorker:function(){return this._data instanceof f?this._data.getContentWorker():this._data instanceof p?this._data:new h(this._data)}};for(var b=["asText","asBinary","asNodeBuffer","asUint8Array","asArrayBuffer"],w=function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},v=0;v<b.length;v++)s.prototype[b[v]]=w;i.exports=s},{"./compressedObject":2,"./stream/DataWorker":27,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31}],36:[function(r,i,a){(function(s){"use strict";var l,h,u=s.MutationObserver||s.WebKitMutationObserver;if(u){var f=0,p=new u(m),b=s.document.createTextNode("");p.observe(b,{characterData:!0}),l=function(){b.data=f=++f%2}}else if(s.setImmediate||s.MessageChannel===void 0)l="document"in s&&"onreadystatechange"in s.document.createElement("script")?function(){var E=s.document.createElement("script");E.onreadystatechange=function(){m(),E.onreadystatechange=null,E.parentNode.removeChild(E),E=null},s.document.documentElement.appendChild(E)}:function(){setTimeout(m,0)};else{var w=new s.MessageChannel;w.port1.onmessage=m,l=function(){w.port2.postMessage(0)}}var v=[];function m(){var E,y;h=!0;for(var S=v.length;S;){for(y=v,v=[],E=-1;++E<S;)y[E]();S=v.length}h=!1}i.exports=function(E){v.push(E)!==1||h||l()}}).call(this,typeof global<"u"?global:typeof self<"u"?self:typeof window<"u"?window:{})},{}],37:[function(r,i,a){"use strict";var s=r("immediate");function l(){}var h={},u=["REJECTED"],f=["FULFILLED"],p=["PENDING"];function b(S){if(typeof S!="function")throw new TypeError("resolver must be a function");this.state=p,this.queue=[],this.outcome=void 0,S!==l&&E(this,S)}function w(S,x,T){this.promise=S,typeof x=="function"&&(this.onFulfilled=x,this.callFulfilled=this.otherCallFulfilled),typeof T=="function"&&(this.onRejected=T,this.callRejected=this.otherCallRejected)}function v(S,x,T){s(function(){var L;try{L=x(T)}catch(D){return h.reject(S,D)}L===S?h.reject(S,new TypeError("Cannot resolve promise with itself")):h.resolve(S,L)})}function m(S){var x=S&&S.then;if(S&&(typeof S=="object"||typeof S=="function")&&typeof x=="function")return function(){x.apply(S,arguments)}}function E(S,x){var T=!1;function L(V){T||(T=!0,h.reject(S,V))}function D(V){T||(T=!0,h.resolve(S,V))}var K=y(function(){x(D,L)});K.status==="error"&&L(K.value)}function y(S,x){var T={};try{T.value=S(x),T.status="success"}catch(L){T.status="error",T.value=L}return T}(i.exports=b).prototype.finally=function(S){if(typeof S!="function")return this;var x=this.constructor;return this.then(function(T){return x.resolve(S()).then(function(){return T})},function(T){return x.resolve(S()).then(function(){throw T})})},b.prototype.catch=function(S){return this.then(null,S)},b.prototype.then=function(S,x){if(typeof S!="function"&&this.state===f||typeof x!="function"&&this.state===u)return this;var T=new this.constructor(l);return this.state!==p?v(T,this.state===f?S:x,this.outcome):this.queue.push(new w(T,S,x)),T},w.prototype.callFulfilled=function(S){h.resolve(this.promise,S)},w.prototype.otherCallFulfilled=function(S){v(this.promise,this.onFulfilled,S)},w.prototype.callRejected=function(S){h.reject(this.promise,S)},w.prototype.otherCallRejected=function(S){v(this.promise,this.onRejected,S)},h.resolve=function(S,x){var T=y(m,x);if(T.status==="error")return h.reject(S,T.value);var L=T.value;if(L)E(S,L);else{S.state=f,S.outcome=x;for(var D=-1,K=S.queue.length;++D<K;)S.queue[D].callFulfilled(x)}return S},h.reject=function(S,x){S.state=u,S.outcome=x;for(var T=-1,L=S.queue.length;++T<L;)S.queue[T].callRejected(x);return S},b.resolve=function(S){return S instanceof this?S:h.resolve(new this(l),S)},b.reject=function(S){var x=new this(l);return h.reject(x,S)},b.all=function(S){var x=this;if(Object.prototype.toString.call(S)!=="[object Array]")return this.reject(new TypeError("must be an array"));var T=S.length,L=!1;if(!T)return this.resolve([]);for(var D=new Array(T),K=0,V=-1,ae=new this(l);++V<T;)H(S[V],V);return ae;function H(ge,_e){x.resolve(ge).then(function(P){D[_e]=P,++K!==T||L||(L=!0,h.resolve(ae,D))},function(P){L||(L=!0,h.reject(ae,P))})}},b.race=function(S){var x=this;if(Object.prototype.toString.call(S)!=="[object Array]")return this.reject(new TypeError("must be an array"));var T=S.length,L=!1;if(!T)return this.resolve([]);for(var D=-1,K=new this(l);++D<T;)V=S[D],x.resolve(V).then(function(ae){L||(L=!0,h.resolve(K,ae))},function(ae){L||(L=!0,h.reject(K,ae))});var V;return K}},{immediate:36}],38:[function(r,i,a){"use strict";var s={};(0,r("./lib/utils/common").assign)(s,r("./lib/deflate"),r("./lib/inflate"),r("./lib/zlib/constants")),i.exports=s},{"./lib/deflate":39,"./lib/inflate":40,"./lib/utils/common":41,"./lib/zlib/constants":44}],39:[function(r,i,a){"use strict";var s=r("./zlib/deflate"),l=r("./utils/common"),h=r("./utils/strings"),u=r("./zlib/messages"),f=r("./zlib/zstream"),p=Object.prototype.toString,b=0,w=-1,v=0,m=8;function E(S){if(!(this instanceof E))return new E(S);this.options=l.assign({level:w,method:m,chunkSize:16384,windowBits:15,memLevel:8,strategy:v,to:""},S||{});var x=this.options;x.raw&&0<x.windowBits?x.windowBits=-x.windowBits:x.gzip&&0<x.windowBits&&x.windowBits<16&&(x.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new f,this.strm.avail_out=0;var T=s.deflateInit2(this.strm,x.level,x.method,x.windowBits,x.memLevel,x.strategy);if(T!==b)throw new Error(u[T]);if(x.header&&s.deflateSetHeader(this.strm,x.header),x.dictionary){var L;if(L=typeof x.dictionary=="string"?h.string2buf(x.dictionary):p.call(x.dictionary)==="[object ArrayBuffer]"?new Uint8Array(x.dictionary):x.dictionary,(T=s.deflateSetDictionary(this.strm,L))!==b)throw new Error(u[T]);this._dict_set=!0}}function y(S,x){var T=new E(x);if(T.push(S,!0),T.err)throw T.msg||u[T.err];return T.result}E.prototype.push=function(S,x){var T,L,D=this.strm,K=this.options.chunkSize;if(this.ended)return!1;L=x===~~x?x:x===!0?4:0,typeof S=="string"?D.input=h.string2buf(S):p.call(S)==="[object ArrayBuffer]"?D.input=new Uint8Array(S):D.input=S,D.next_in=0,D.avail_in=D.input.length;do{if(D.avail_out===0&&(D.output=new l.Buf8(K),D.next_out=0,D.avail_out=K),(T=s.deflate(D,L))!==1&&T!==b)return this.onEnd(T),!(this.ended=!0);D.avail_out!==0&&(D.avail_in!==0||L!==4&&L!==2)||(this.options.to==="string"?this.onData(h.buf2binstring(l.shrinkBuf(D.output,D.next_out))):this.onData(l.shrinkBuf(D.output,D.next_out)))}while((0<D.avail_in||D.avail_out===0)&&T!==1);return L===4?(T=s.deflateEnd(this.strm),this.onEnd(T),this.ended=!0,T===b):L!==2||(this.onEnd(b),!(D.avail_out=0))},E.prototype.onData=function(S){this.chunks.push(S)},E.prototype.onEnd=function(S){S===b&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=l.flattenChunks(this.chunks)),this.chunks=[],this.err=S,this.msg=this.strm.msg},a.Deflate=E,a.deflate=y,a.deflateRaw=function(S,x){return(x=x||{}).raw=!0,y(S,x)},a.gzip=function(S,x){return(x=x||{}).gzip=!0,y(S,x)}},{"./utils/common":41,"./utils/strings":42,"./zlib/deflate":46,"./zlib/messages":51,"./zlib/zstream":53}],40:[function(r,i,a){"use strict";var s=r("./zlib/inflate"),l=r("./utils/common"),h=r("./utils/strings"),u=r("./zlib/constants"),f=r("./zlib/messages"),p=r("./zlib/zstream"),b=r("./zlib/gzheader"),w=Object.prototype.toString;function v(E){if(!(this instanceof v))return new v(E);this.options=l.assign({chunkSize:16384,windowBits:0,to:""},E||{});var y=this.options;y.raw&&0<=y.windowBits&&y.windowBits<16&&(y.windowBits=-y.windowBits,y.windowBits===0&&(y.windowBits=-15)),!(0<=y.windowBits&&y.windowBits<16)||E&&E.windowBits||(y.windowBits+=32),15<y.windowBits&&y.windowBits<48&&(15&y.windowBits)==0&&(y.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new p,this.strm.avail_out=0;var S=s.inflateInit2(this.strm,y.windowBits);if(S!==u.Z_OK)throw new Error(f[S]);this.header=new b,s.inflateGetHeader(this.strm,this.header)}function m(E,y){var S=new v(y);if(S.push(E,!0),S.err)throw S.msg||f[S.err];return S.result}v.prototype.push=function(E,y){var S,x,T,L,D,K,V=this.strm,ae=this.options.chunkSize,H=this.options.dictionary,ge=!1;if(this.ended)return!1;x=y===~~y?y:y===!0?u.Z_FINISH:u.Z_NO_FLUSH,typeof E=="string"?V.input=h.binstring2buf(E):w.call(E)==="[object ArrayBuffer]"?V.input=new Uint8Array(E):V.input=E,V.next_in=0,V.avail_in=V.input.length;do{if(V.avail_out===0&&(V.output=new l.Buf8(ae),V.next_out=0,V.avail_out=ae),(S=s.inflate(V,u.Z_NO_FLUSH))===u.Z_NEED_DICT&&H&&(K=typeof H=="string"?h.string2buf(H):w.call(H)==="[object ArrayBuffer]"?new Uint8Array(H):H,S=s.inflateSetDictionary(this.strm,K)),S===u.Z_BUF_ERROR&&ge===!0&&(S=u.Z_OK,ge=!1),S!==u.Z_STREAM_END&&S!==u.Z_OK)return this.onEnd(S),!(this.ended=!0);V.next_out&&(V.avail_out!==0&&S!==u.Z_STREAM_END&&(V.avail_in!==0||x!==u.Z_FINISH&&x!==u.Z_SYNC_FLUSH)||(this.options.to==="string"?(T=h.utf8border(V.output,V.next_out),L=V.next_out-T,D=h.buf2string(V.output,T),V.next_out=L,V.avail_out=ae-L,L&&l.arraySet(V.output,V.output,T,L,0),this.onData(D)):this.onData(l.shrinkBuf(V.output,V.next_out)))),V.avail_in===0&&V.avail_out===0&&(ge=!0)}while((0<V.avail_in||V.avail_out===0)&&S!==u.Z_STREAM_END);return S===u.Z_STREAM_END&&(x=u.Z_FINISH),x===u.Z_FINISH?(S=s.inflateEnd(this.strm),this.onEnd(S),this.ended=!0,S===u.Z_OK):x!==u.Z_SYNC_FLUSH||(this.onEnd(u.Z_OK),!(V.avail_out=0))},v.prototype.onData=function(E){this.chunks.push(E)},v.prototype.onEnd=function(E){E===u.Z_OK&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=l.flattenChunks(this.chunks)),this.chunks=[],this.err=E,this.msg=this.strm.msg},a.Inflate=v,a.inflate=m,a.inflateRaw=function(E,y){return(y=y||{}).raw=!0,m(E,y)},a.ungzip=m},{"./utils/common":41,"./utils/strings":42,"./zlib/constants":44,"./zlib/gzheader":47,"./zlib/inflate":49,"./zlib/messages":51,"./zlib/zstream":53}],41:[function(r,i,a){"use strict";var s=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Int32Array<"u";a.assign=function(u){for(var f=Array.prototype.slice.call(arguments,1);f.length;){var p=f.shift();if(p){if(typeof p!="object")throw new TypeError(p+"must be non-object");for(var b in p)p.hasOwnProperty(b)&&(u[b]=p[b])}}return u},a.shrinkBuf=function(u,f){return u.length===f?u:u.subarray?u.subarray(0,f):(u.length=f,u)};var l={arraySet:function(u,f,p,b,w){if(f.subarray&&u.subarray)u.set(f.subarray(p,p+b),w);else for(var v=0;v<b;v++)u[w+v]=f[p+v]},flattenChunks:function(u){var f,p,b,w,v,m;for(f=b=0,p=u.length;f<p;f++)b+=u[f].length;for(m=new Uint8Array(b),f=w=0,p=u.length;f<p;f++)v=u[f],m.set(v,w),w+=v.length;return m}},h={arraySet:function(u,f,p,b,w){for(var v=0;v<b;v++)u[w+v]=f[p+v]},flattenChunks:function(u){return[].concat.apply([],u)}};a.setTyped=function(u){u?(a.Buf8=Uint8Array,a.Buf16=Uint16Array,a.Buf32=Int32Array,a.assign(a,l)):(a.Buf8=Array,a.Buf16=Array,a.Buf32=Array,a.assign(a,h))},a.setTyped(s)},{}],42:[function(r,i,a){"use strict";var s=r("./common"),l=!0,h=!0;try{String.fromCharCode.apply(null,[0])}catch{l=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch{h=!1}for(var u=new s.Buf8(256),f=0;f<256;f++)u[f]=252<=f?6:248<=f?5:240<=f?4:224<=f?3:192<=f?2:1;function p(b,w){if(w<65537&&(b.subarray&&h||!b.subarray&&l))return String.fromCharCode.apply(null,s.shrinkBuf(b,w));for(var v="",m=0;m<w;m++)v+=String.fromCharCode(b[m]);return v}u[254]=u[254]=1,a.string2buf=function(b){var w,v,m,E,y,S=b.length,x=0;for(E=0;E<S;E++)(64512&(v=b.charCodeAt(E)))==55296&&E+1<S&&(64512&(m=b.charCodeAt(E+1)))==56320&&(v=65536+(v-55296<<10)+(m-56320),E++),x+=v<128?1:v<2048?2:v<65536?3:4;for(w=new s.Buf8(x),E=y=0;y<x;E++)(64512&(v=b.charCodeAt(E)))==55296&&E+1<S&&(64512&(m=b.charCodeAt(E+1)))==56320&&(v=65536+(v-55296<<10)+(m-56320),E++),v<128?w[y++]=v:(v<2048?w[y++]=192|v>>>6:(v<65536?w[y++]=224|v>>>12:(w[y++]=240|v>>>18,w[y++]=128|v>>>12&63),w[y++]=128|v>>>6&63),w[y++]=128|63&v);return w},a.buf2binstring=function(b){return p(b,b.length)},a.binstring2buf=function(b){for(var w=new s.Buf8(b.length),v=0,m=w.length;v<m;v++)w[v]=b.charCodeAt(v);return w},a.buf2string=function(b,w){var v,m,E,y,S=w||b.length,x=new Array(2*S);for(v=m=0;v<S;)if((E=b[v++])<128)x[m++]=E;else if(4<(y=u[E]))x[m++]=65533,v+=y-1;else{for(E&=y===2?31:y===3?15:7;1<y&&v<S;)E=E<<6|63&b[v++],y--;1<y?x[m++]=65533:E<65536?x[m++]=E:(E-=65536,x[m++]=55296|E>>10&1023,x[m++]=56320|1023&E)}return p(x,m)},a.utf8border=function(b,w){var v;for((w=w||b.length)>b.length&&(w=b.length),v=w-1;0<=v&&(192&b[v])==128;)v--;return v<0||v===0?w:v+u[b[v]]>w?v:w}},{"./common":41}],43:[function(r,i,a){"use strict";i.exports=function(s,l,h,u){for(var f=65535&s|0,p=s>>>16&65535|0,b=0;h!==0;){for(h-=b=2e3<h?2e3:h;p=p+(f=f+l[u++]|0)|0,--b;);f%=65521,p%=65521}return f|p<<16|0}},{}],44:[function(r,i,a){"use strict";i.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],45:[function(r,i,a){"use strict";var s=(function(){for(var l,h=[],u=0;u<256;u++){l=u;for(var f=0;f<8;f++)l=1&l?3988292384^l>>>1:l>>>1;h[u]=l}return h})();i.exports=function(l,h,u,f){var p=s,b=f+u;l^=-1;for(var w=f;w<b;w++)l=l>>>8^p[255&(l^h[w])];return-1^l}},{}],46:[function(r,i,a){"use strict";var s,l=r("../utils/common"),h=r("./trees"),u=r("./adler32"),f=r("./crc32"),p=r("./messages"),b=0,w=4,v=0,m=-2,E=-1,y=4,S=2,x=8,T=9,L=286,D=30,K=19,V=2*L+1,ae=15,H=3,ge=258,_e=ge+H+1,P=42,X=113,A=1,Q=2,Ce=3,se=4;function Ie(_,ee){return _.msg=p[ee],ee}function le(_){return(_<<1)-(4<_?9:0)}function Ae(_){for(var ee=_.length;0<=--ee;)_[ee]=0}function W(_){var ee=_.state,j=ee.pending;j>_.avail_out&&(j=_.avail_out),j!==0&&(l.arraySet(_.output,ee.pending_buf,ee.pending_out,j,_.next_out),_.next_out+=j,ee.pending_out+=j,_.total_out+=j,_.avail_out-=j,ee.pending-=j,ee.pending===0&&(ee.pending_out=0))}function U(_,ee){h._tr_flush_block(_,0<=_.block_start?_.block_start:-1,_.strstart-_.block_start,ee),_.block_start=_.strstart,W(_.strm)}function Se(_,ee){_.pending_buf[_.pending++]=ee}function me(_,ee){_.pending_buf[_.pending++]=ee>>>8&255,_.pending_buf[_.pending++]=255&ee}function fe(_,ee){var j,O,C=_.max_chain_length,B=_.strstart,ie=_.prev_length,re=_.nice_match,F=_.strstart>_.w_size-_e?_.strstart-(_.w_size-_e):0,de=_.window,be=_.w_mask,he=_.prev,xe=_.strstart+ge,je=de[B+ie-1],Ge=de[B+ie];_.prev_length>=_.good_match&&(C>>=2),re>_.lookahead&&(re=_.lookahead);do if(de[(j=ee)+ie]===Ge&&de[j+ie-1]===je&&de[j]===de[B]&&de[++j]===de[B+1]){B+=2,j++;do;while(de[++B]===de[++j]&&de[++B]===de[++j]&&de[++B]===de[++j]&&de[++B]===de[++j]&&de[++B]===de[++j]&&de[++B]===de[++j]&&de[++B]===de[++j]&&de[++B]===de[++j]&&B<xe);if(O=ge-(xe-B),B=xe-ge,ie<O){if(_.match_start=ee,re<=(ie=O))break;je=de[B+ie-1],Ge=de[B+ie]}}while((ee=he[ee&be])>F&&--C!=0);return ie<=_.lookahead?ie:_.lookahead}function Xe(_){var ee,j,O,C,B,ie,re,F,de,be,he=_.w_size;do{if(C=_.window_size-_.lookahead-_.strstart,_.strstart>=he+(he-_e)){for(l.arraySet(_.window,_.window,he,he,0),_.match_start-=he,_.strstart-=he,_.block_start-=he,ee=j=_.hash_size;O=_.head[--ee],_.head[ee]=he<=O?O-he:0,--j;);for(ee=j=he;O=_.prev[--ee],_.prev[ee]=he<=O?O-he:0,--j;);C+=he}if(_.strm.avail_in===0)break;if(ie=_.strm,re=_.window,F=_.strstart+_.lookahead,de=C,be=void 0,be=ie.avail_in,de<be&&(be=de),j=be===0?0:(ie.avail_in-=be,l.arraySet(re,ie.input,ie.next_in,be,F),ie.state.wrap===1?ie.adler=u(ie.adler,re,be,F):ie.state.wrap===2&&(ie.adler=f(ie.adler,re,be,F)),ie.next_in+=be,ie.total_in+=be,be),_.lookahead+=j,_.lookahead+_.insert>=H)for(B=_.strstart-_.insert,_.ins_h=_.window[B],_.ins_h=(_.ins_h<<_.hash_shift^_.window[B+1])&_.hash_mask;_.insert&&(_.ins_h=(_.ins_h<<_.hash_shift^_.window[B+H-1])&_.hash_mask,_.prev[B&_.w_mask]=_.head[_.ins_h],_.head[_.ins_h]=B,B++,_.insert--,!(_.lookahead+_.insert<H)););}while(_.lookahead<_e&&_.strm.avail_in!==0)}function Et(_,ee){for(var j,O;;){if(_.lookahead<_e){if(Xe(_),_.lookahead<_e&&ee===b)return A;if(_.lookahead===0)break}if(j=0,_.lookahead>=H&&(_.ins_h=(_.ins_h<<_.hash_shift^_.window[_.strstart+H-1])&_.hash_mask,j=_.prev[_.strstart&_.w_mask]=_.head[_.ins_h],_.head[_.ins_h]=_.strstart),j!==0&&_.strstart-j<=_.w_size-_e&&(_.match_length=fe(_,j)),_.match_length>=H)if(O=h._tr_tally(_,_.strstart-_.match_start,_.match_length-H),_.lookahead-=_.match_length,_.match_length<=_.max_lazy_match&&_.lookahead>=H){for(_.match_length--;_.strstart++,_.ins_h=(_.ins_h<<_.hash_shift^_.window[_.strstart+H-1])&_.hash_mask,j=_.prev[_.strstart&_.w_mask]=_.head[_.ins_h],_.head[_.ins_h]=_.strstart,--_.match_length!=0;);_.strstart++}else _.strstart+=_.match_length,_.match_length=0,_.ins_h=_.window[_.strstart],_.ins_h=(_.ins_h<<_.hash_shift^_.window[_.strstart+1])&_.hash_mask;else O=h._tr_tally(_,0,_.window[_.strstart]),_.lookahead--,_.strstart++;if(O&&(U(_,!1),_.strm.avail_out===0))return A}return _.insert=_.strstart<H-1?_.strstart:H-1,ee===w?(U(_,!0),_.strm.avail_out===0?Ce:se):_.last_lit&&(U(_,!1),_.strm.avail_out===0)?A:Q}function Fe(_,ee){for(var j,O,C;;){if(_.lookahead<_e){if(Xe(_),_.lookahead<_e&&ee===b)return A;if(_.lookahead===0)break}if(j=0,_.lookahead>=H&&(_.ins_h=(_.ins_h<<_.hash_shift^_.window[_.strstart+H-1])&_.hash_mask,j=_.prev[_.strstart&_.w_mask]=_.head[_.ins_h],_.head[_.ins_h]=_.strstart),_.prev_length=_.match_length,_.prev_match=_.match_start,_.match_length=H-1,j!==0&&_.prev_length<_.max_lazy_match&&_.strstart-j<=_.w_size-_e&&(_.match_length=fe(_,j),_.match_length<=5&&(_.strategy===1||_.match_length===H&&4096<_.strstart-_.match_start)&&(_.match_length=H-1)),_.prev_length>=H&&_.match_length<=_.prev_length){for(C=_.strstart+_.lookahead-H,O=h._tr_tally(_,_.strstart-1-_.prev_match,_.prev_length-H),_.lookahead-=_.prev_length-1,_.prev_length-=2;++_.strstart<=C&&(_.ins_h=(_.ins_h<<_.hash_shift^_.window[_.strstart+H-1])&_.hash_mask,j=_.prev[_.strstart&_.w_mask]=_.head[_.ins_h],_.head[_.ins_h]=_.strstart),--_.prev_length!=0;);if(_.match_available=0,_.match_length=H-1,_.strstart++,O&&(U(_,!1),_.strm.avail_out===0))return A}else if(_.match_available){if((O=h._tr_tally(_,0,_.window[_.strstart-1]))&&U(_,!1),_.strstart++,_.lookahead--,_.strm.avail_out===0)return A}else _.match_available=1,_.strstart++,_.lookahead--}return _.match_available&&(O=h._tr_tally(_,0,_.window[_.strstart-1]),_.match_available=0),_.insert=_.strstart<H-1?_.strstart:H-1,ee===w?(U(_,!0),_.strm.avail_out===0?Ce:se):_.last_lit&&(U(_,!1),_.strm.avail_out===0)?A:Q}function Ue(_,ee,j,O,C){this.good_length=_,this.max_lazy=ee,this.nice_length=j,this.max_chain=O,this.func=C}function At(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=x,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new l.Buf16(2*V),this.dyn_dtree=new l.Buf16(2*(2*D+1)),this.bl_tree=new l.Buf16(2*(2*K+1)),Ae(this.dyn_ltree),Ae(this.dyn_dtree),Ae(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new l.Buf16(ae+1),this.heap=new l.Buf16(2*L+1),Ae(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new l.Buf16(2*L+1),Ae(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function ot(_){var ee;return _&&_.state?(_.total_in=_.total_out=0,_.data_type=S,(ee=_.state).pending=0,ee.pending_out=0,ee.wrap<0&&(ee.wrap=-ee.wrap),ee.status=ee.wrap?P:X,_.adler=ee.wrap===2?0:1,ee.last_flush=b,h._tr_init(ee),v):Ie(_,m)}function Ut(_){var ee=ot(_);return ee===v&&(function(j){j.window_size=2*j.w_size,Ae(j.head),j.max_lazy_match=s[j.level].max_lazy,j.good_match=s[j.level].good_length,j.nice_match=s[j.level].nice_length,j.max_chain_length=s[j.level].max_chain,j.strstart=0,j.block_start=0,j.lookahead=0,j.insert=0,j.match_length=j.prev_length=H-1,j.match_available=0,j.ins_h=0})(_.state),ee}function Jt(_,ee,j,O,C,B){if(!_)return m;var ie=1;if(ee===E&&(ee=6),O<0?(ie=0,O=-O):15<O&&(ie=2,O-=16),C<1||T<C||j!==x||O<8||15<O||ee<0||9<ee||B<0||y<B)return Ie(_,m);O===8&&(O=9);var re=new At;return(_.state=re).strm=_,re.wrap=ie,re.gzhead=null,re.w_bits=O,re.w_size=1<<re.w_bits,re.w_mask=re.w_size-1,re.hash_bits=C+7,re.hash_size=1<<re.hash_bits,re.hash_mask=re.hash_size-1,re.hash_shift=~~((re.hash_bits+H-1)/H),re.window=new l.Buf8(2*re.w_size),re.head=new l.Buf16(re.hash_size),re.prev=new l.Buf16(re.w_size),re.lit_bufsize=1<<C+6,re.pending_buf_size=4*re.lit_bufsize,re.pending_buf=new l.Buf8(re.pending_buf_size),re.d_buf=1*re.lit_bufsize,re.l_buf=3*re.lit_bufsize,re.level=ee,re.strategy=B,re.method=j,Ut(_)}s=[new Ue(0,0,0,0,function(_,ee){var j=65535;for(j>_.pending_buf_size-5&&(j=_.pending_buf_size-5);;){if(_.lookahead<=1){if(Xe(_),_.lookahead===0&&ee===b)return A;if(_.lookahead===0)break}_.strstart+=_.lookahead,_.lookahead=0;var O=_.block_start+j;if((_.strstart===0||_.strstart>=O)&&(_.lookahead=_.strstart-O,_.strstart=O,U(_,!1),_.strm.avail_out===0)||_.strstart-_.block_start>=_.w_size-_e&&(U(_,!1),_.strm.avail_out===0))return A}return _.insert=0,ee===w?(U(_,!0),_.strm.avail_out===0?Ce:se):(_.strstart>_.block_start&&(U(_,!1),_.strm.avail_out),A)}),new Ue(4,4,8,4,Et),new Ue(4,5,16,8,Et),new Ue(4,6,32,32,Et),new Ue(4,4,16,16,Fe),new Ue(8,16,32,32,Fe),new Ue(8,16,128,128,Fe),new Ue(8,32,128,256,Fe),new Ue(32,128,258,1024,Fe),new Ue(32,258,258,4096,Fe)],a.deflateInit=function(_,ee){return Jt(_,ee,x,15,8,0)},a.deflateInit2=Jt,a.deflateReset=Ut,a.deflateResetKeep=ot,a.deflateSetHeader=function(_,ee){return _&&_.state?_.state.wrap!==2?m:(_.state.gzhead=ee,v):m},a.deflate=function(_,ee){var j,O,C,B;if(!_||!_.state||5<ee||ee<0)return _?Ie(_,m):m;if(O=_.state,!_.output||!_.input&&_.avail_in!==0||O.status===666&&ee!==w)return Ie(_,_.avail_out===0?-5:m);if(O.strm=_,j=O.last_flush,O.last_flush=ee,O.status===P)if(O.wrap===2)_.adler=0,Se(O,31),Se(O,139),Se(O,8),O.gzhead?(Se(O,(O.gzhead.text?1:0)+(O.gzhead.hcrc?2:0)+(O.gzhead.extra?4:0)+(O.gzhead.name?8:0)+(O.gzhead.comment?16:0)),Se(O,255&O.gzhead.time),Se(O,O.gzhead.time>>8&255),Se(O,O.gzhead.time>>16&255),Se(O,O.gzhead.time>>24&255),Se(O,O.level===9?2:2<=O.strategy||O.level<2?4:0),Se(O,255&O.gzhead.os),O.gzhead.extra&&O.gzhead.extra.length&&(Se(O,255&O.gzhead.extra.length),Se(O,O.gzhead.extra.length>>8&255)),O.gzhead.hcrc&&(_.adler=f(_.adler,O.pending_buf,O.pending,0)),O.gzindex=0,O.status=69):(Se(O,0),Se(O,0),Se(O,0),Se(O,0),Se(O,0),Se(O,O.level===9?2:2<=O.strategy||O.level<2?4:0),Se(O,3),O.status=X);else{var ie=x+(O.w_bits-8<<4)<<8;ie|=(2<=O.strategy||O.level<2?0:O.level<6?1:O.level===6?2:3)<<6,O.strstart!==0&&(ie|=32),ie+=31-ie%31,O.status=X,me(O,ie),O.strstart!==0&&(me(O,_.adler>>>16),me(O,65535&_.adler)),_.adler=1}if(O.status===69)if(O.gzhead.extra){for(C=O.pending;O.gzindex<(65535&O.gzhead.extra.length)&&(O.pending!==O.pending_buf_size||(O.gzhead.hcrc&&O.pending>C&&(_.adler=f(_.adler,O.pending_buf,O.pending-C,C)),W(_),C=O.pending,O.pending!==O.pending_buf_size));)Se(O,255&O.gzhead.extra[O.gzindex]),O.gzindex++;O.gzhead.hcrc&&O.pending>C&&(_.adler=f(_.adler,O.pending_buf,O.pending-C,C)),O.gzindex===O.gzhead.extra.length&&(O.gzindex=0,O.status=73)}else O.status=73;if(O.status===73)if(O.gzhead.name){C=O.pending;do{if(O.pending===O.pending_buf_size&&(O.gzhead.hcrc&&O.pending>C&&(_.adler=f(_.adler,O.pending_buf,O.pending-C,C)),W(_),C=O.pending,O.pending===O.pending_buf_size)){B=1;break}B=O.gzindex<O.gzhead.name.length?255&O.gzhead.name.charCodeAt(O.gzindex++):0,Se(O,B)}while(B!==0);O.gzhead.hcrc&&O.pending>C&&(_.adler=f(_.adler,O.pending_buf,O.pending-C,C)),B===0&&(O.gzindex=0,O.status=91)}else O.status=91;if(O.status===91)if(O.gzhead.comment){C=O.pending;do{if(O.pending===O.pending_buf_size&&(O.gzhead.hcrc&&O.pending>C&&(_.adler=f(_.adler,O.pending_buf,O.pending-C,C)),W(_),C=O.pending,O.pending===O.pending_buf_size)){B=1;break}B=O.gzindex<O.gzhead.comment.length?255&O.gzhead.comment.charCodeAt(O.gzindex++):0,Se(O,B)}while(B!==0);O.gzhead.hcrc&&O.pending>C&&(_.adler=f(_.adler,O.pending_buf,O.pending-C,C)),B===0&&(O.status=103)}else O.status=103;if(O.status===103&&(O.gzhead.hcrc?(O.pending+2>O.pending_buf_size&&W(_),O.pending+2<=O.pending_buf_size&&(Se(O,255&_.adler),Se(O,_.adler>>8&255),_.adler=0,O.status=X)):O.status=X),O.pending!==0){if(W(_),_.avail_out===0)return O.last_flush=-1,v}else if(_.avail_in===0&&le(ee)<=le(j)&&ee!==w)return Ie(_,-5);if(O.status===666&&_.avail_in!==0)return Ie(_,-5);if(_.avail_in!==0||O.lookahead!==0||ee!==b&&O.status!==666){var re=O.strategy===2?(function(F,de){for(var be;;){if(F.lookahead===0&&(Xe(F),F.lookahead===0)){if(de===b)return A;break}if(F.match_length=0,be=h._tr_tally(F,0,F.window[F.strstart]),F.lookahead--,F.strstart++,be&&(U(F,!1),F.strm.avail_out===0))return A}return F.insert=0,de===w?(U(F,!0),F.strm.avail_out===0?Ce:se):F.last_lit&&(U(F,!1),F.strm.avail_out===0)?A:Q})(O,ee):O.strategy===3?(function(F,de){for(var be,he,xe,je,Ge=F.window;;){if(F.lookahead<=ge){if(Xe(F),F.lookahead<=ge&&de===b)return A;if(F.lookahead===0)break}if(F.match_length=0,F.lookahead>=H&&0<F.strstart&&(he=Ge[xe=F.strstart-1])===Ge[++xe]&&he===Ge[++xe]&&he===Ge[++xe]){je=F.strstart+ge;do;while(he===Ge[++xe]&&he===Ge[++xe]&&he===Ge[++xe]&&he===Ge[++xe]&&he===Ge[++xe]&&he===Ge[++xe]&&he===Ge[++xe]&&he===Ge[++xe]&&xe<je);F.match_length=ge-(je-xe),F.match_length>F.lookahead&&(F.match_length=F.lookahead)}if(F.match_length>=H?(be=h._tr_tally(F,1,F.match_length-H),F.lookahead-=F.match_length,F.strstart+=F.match_length,F.match_length=0):(be=h._tr_tally(F,0,F.window[F.strstart]),F.lookahead--,F.strstart++),be&&(U(F,!1),F.strm.avail_out===0))return A}return F.insert=0,de===w?(U(F,!0),F.strm.avail_out===0?Ce:se):F.last_lit&&(U(F,!1),F.strm.avail_out===0)?A:Q})(O,ee):s[O.level].func(O,ee);if(re!==Ce&&re!==se||(O.status=666),re===A||re===Ce)return _.avail_out===0&&(O.last_flush=-1),v;if(re===Q&&(ee===1?h._tr_align(O):ee!==5&&(h._tr_stored_block(O,0,0,!1),ee===3&&(Ae(O.head),O.lookahead===0&&(O.strstart=0,O.block_start=0,O.insert=0))),W(_),_.avail_out===0))return O.last_flush=-1,v}return ee!==w?v:O.wrap<=0?1:(O.wrap===2?(Se(O,255&_.adler),Se(O,_.adler>>8&255),Se(O,_.adler>>16&255),Se(O,_.adler>>24&255),Se(O,255&_.total_in),Se(O,_.total_in>>8&255),Se(O,_.total_in>>16&255),Se(O,_.total_in>>24&255)):(me(O,_.adler>>>16),me(O,65535&_.adler)),W(_),0<O.wrap&&(O.wrap=-O.wrap),O.pending!==0?v:1)},a.deflateEnd=function(_){var ee;return _&&_.state?(ee=_.state.status)!==P&&ee!==69&&ee!==73&&ee!==91&&ee!==103&&ee!==X&&ee!==666?Ie(_,m):(_.state=null,ee===X?Ie(_,-3):v):m},a.deflateSetDictionary=function(_,ee){var j,O,C,B,ie,re,F,de,be=ee.length;if(!_||!_.state||(B=(j=_.state).wrap)===2||B===1&&j.status!==P||j.lookahead)return m;for(B===1&&(_.adler=u(_.adler,ee,be,0)),j.wrap=0,be>=j.w_size&&(B===0&&(Ae(j.head),j.strstart=0,j.block_start=0,j.insert=0),de=new l.Buf8(j.w_size),l.arraySet(de,ee,be-j.w_size,j.w_size,0),ee=de,be=j.w_size),ie=_.avail_in,re=_.next_in,F=_.input,_.avail_in=be,_.next_in=0,_.input=ee,Xe(j);j.lookahead>=H;){for(O=j.strstart,C=j.lookahead-(H-1);j.ins_h=(j.ins_h<<j.hash_shift^j.window[O+H-1])&j.hash_mask,j.prev[O&j.w_mask]=j.head[j.ins_h],j.head[j.ins_h]=O,O++,--C;);j.strstart=O,j.lookahead=H-1,Xe(j)}return j.strstart+=j.lookahead,j.block_start=j.strstart,j.insert=j.lookahead,j.lookahead=0,j.match_length=j.prev_length=H-1,j.match_available=0,_.next_in=re,_.input=F,_.avail_in=ie,j.wrap=B,v},a.deflateInfo="pako deflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./messages":51,"./trees":52}],47:[function(r,i,a){"use strict";i.exports=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}},{}],48:[function(r,i,a){"use strict";i.exports=function(s,l){var h=s.state,u=s.next_in,f,p,b,w,v,m,E,y,S,x,T,L,D,K,V,ae,H,ge,_e,P,X,A=s.input,Q;f=u+(s.avail_in-5),p=s.next_out,Q=s.output,b=p-(l-s.avail_out),w=p+(s.avail_out-257),v=h.dmax,m=h.wsize,E=h.whave,y=h.wnext,S=h.window,x=h.hold,T=h.bits,L=h.lencode,D=h.distcode,K=(1<<h.lenbits)-1,V=(1<<h.distbits)-1;e:do{T<15&&(x+=A[u++]<<T,T+=8,x+=A[u++]<<T,T+=8),ae=L[x&K];t:for(;;){if(x>>>=H=ae>>>24,T-=H,(H=ae>>>16&255)===0)Q[p++]=65535&ae;else{if(!(16&H)){if((64&H)==0){ae=L[(65535&ae)+(x&(1<<H)-1)];continue t}if(32&H){h.mode=12;break e}s.msg="invalid literal/length code",h.mode=30;break e}ge=65535&ae,(H&=15)&&(T<H&&(x+=A[u++]<<T,T+=8),ge+=x&(1<<H)-1,x>>>=H,T-=H),T<15&&(x+=A[u++]<<T,T+=8,x+=A[u++]<<T,T+=8),ae=D[x&V];n:for(;;){if(x>>>=H=ae>>>24,T-=H,!(16&(H=ae>>>16&255))){if((64&H)==0){ae=D[(65535&ae)+(x&(1<<H)-1)];continue n}s.msg="invalid distance code",h.mode=30;break e}if(_e=65535&ae,T<(H&=15)&&(x+=A[u++]<<T,(T+=8)<H&&(x+=A[u++]<<T,T+=8)),v<(_e+=x&(1<<H)-1)){s.msg="invalid distance too far back",h.mode=30;break e}if(x>>>=H,T-=H,(H=p-b)<_e){if(E<(H=_e-H)&&h.sane){s.msg="invalid distance too far back",h.mode=30;break e}if(X=S,(P=0)===y){if(P+=m-H,H<ge){for(ge-=H;Q[p++]=S[P++],--H;);P=p-_e,X=Q}}else if(y<H){if(P+=m+y-H,(H-=y)<ge){for(ge-=H;Q[p++]=S[P++],--H;);if(P=0,y<ge){for(ge-=H=y;Q[p++]=S[P++],--H;);P=p-_e,X=Q}}}else if(P+=y-H,H<ge){for(ge-=H;Q[p++]=S[P++],--H;);P=p-_e,X=Q}for(;2<ge;)Q[p++]=X[P++],Q[p++]=X[P++],Q[p++]=X[P++],ge-=3;ge&&(Q[p++]=X[P++],1<ge&&(Q[p++]=X[P++]))}else{for(P=p-_e;Q[p++]=Q[P++],Q[p++]=Q[P++],Q[p++]=Q[P++],2<(ge-=3););ge&&(Q[p++]=Q[P++],1<ge&&(Q[p++]=Q[P++]))}break}}break}}while(u<f&&p<w);u-=ge=T>>3,x&=(1<<(T-=ge<<3))-1,s.next_in=u,s.next_out=p,s.avail_in=u<f?f-u+5:5-(u-f),s.avail_out=p<w?w-p+257:257-(p-w),h.hold=x,h.bits=T}},{}],49:[function(r,i,a){"use strict";var s=r("../utils/common"),l=r("./adler32"),h=r("./crc32"),u=r("./inffast"),f=r("./inftrees"),p=1,b=2,w=0,v=-2,m=1,E=852,y=592;function S(P){return(P>>>24&255)+(P>>>8&65280)+((65280&P)<<8)+((255&P)<<24)}function x(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new s.Buf16(320),this.work=new s.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function T(P){var X;return P&&P.state?(X=P.state,P.total_in=P.total_out=X.total=0,P.msg="",X.wrap&&(P.adler=1&X.wrap),X.mode=m,X.last=0,X.havedict=0,X.dmax=32768,X.head=null,X.hold=0,X.bits=0,X.lencode=X.lendyn=new s.Buf32(E),X.distcode=X.distdyn=new s.Buf32(y),X.sane=1,X.back=-1,w):v}function L(P){var X;return P&&P.state?((X=P.state).wsize=0,X.whave=0,X.wnext=0,T(P)):v}function D(P,X){var A,Q;return P&&P.state?(Q=P.state,X<0?(A=0,X=-X):(A=1+(X>>4),X<48&&(X&=15)),X&&(X<8||15<X)?v:(Q.window!==null&&Q.wbits!==X&&(Q.window=null),Q.wrap=A,Q.wbits=X,L(P))):v}function K(P,X){var A,Q;return P?(Q=new x,(P.state=Q).window=null,(A=D(P,X))!==w&&(P.state=null),A):v}var V,ae,H=!0;function ge(P){if(H){var X;for(V=new s.Buf32(512),ae=new s.Buf32(32),X=0;X<144;)P.lens[X++]=8;for(;X<256;)P.lens[X++]=9;for(;X<280;)P.lens[X++]=7;for(;X<288;)P.lens[X++]=8;for(f(p,P.lens,0,288,V,0,P.work,{bits:9}),X=0;X<32;)P.lens[X++]=5;f(b,P.lens,0,32,ae,0,P.work,{bits:5}),H=!1}P.lencode=V,P.lenbits=9,P.distcode=ae,P.distbits=5}function _e(P,X,A,Q){var Ce,se=P.state;return se.window===null&&(se.wsize=1<<se.wbits,se.wnext=0,se.whave=0,se.window=new s.Buf8(se.wsize)),Q>=se.wsize?(s.arraySet(se.window,X,A-se.wsize,se.wsize,0),se.wnext=0,se.whave=se.wsize):(Q<(Ce=se.wsize-se.wnext)&&(Ce=Q),s.arraySet(se.window,X,A-Q,Ce,se.wnext),(Q-=Ce)?(s.arraySet(se.window,X,A-Q,Q,0),se.wnext=Q,se.whave=se.wsize):(se.wnext+=Ce,se.wnext===se.wsize&&(se.wnext=0),se.whave<se.wsize&&(se.whave+=Ce))),0}a.inflateReset=L,a.inflateReset2=D,a.inflateResetKeep=T,a.inflateInit=function(P){return K(P,15)},a.inflateInit2=K,a.inflate=function(P,X){var A,Q,Ce,se,Ie,le,Ae,W,U,Se,me,fe,Xe,Et,Fe,Ue,At,ot,Ut,Jt,_,ee,j,O,C=0,B=new s.Buf8(4),ie=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!P||!P.state||!P.output||!P.input&&P.avail_in!==0)return v;(A=P.state).mode===12&&(A.mode=13),Ie=P.next_out,Ce=P.output,Ae=P.avail_out,se=P.next_in,Q=P.input,le=P.avail_in,W=A.hold,U=A.bits,Se=le,me=Ae,ee=w;e:for(;;)switch(A.mode){case m:if(A.wrap===0){A.mode=13;break}for(;U<16;){if(le===0)break e;le--,W+=Q[se++]<<U,U+=8}if(2&A.wrap&&W===35615){B[A.check=0]=255&W,B[1]=W>>>8&255,A.check=h(A.check,B,2,0),U=W=0,A.mode=2;break}if(A.flags=0,A.head&&(A.head.done=!1),!(1&A.wrap)||(((255&W)<<8)+(W>>8))%31){P.msg="incorrect header check",A.mode=30;break}if((15&W)!=8){P.msg="unknown compression method",A.mode=30;break}if(U-=4,_=8+(15&(W>>>=4)),A.wbits===0)A.wbits=_;else if(_>A.wbits){P.msg="invalid window size",A.mode=30;break}A.dmax=1<<_,P.adler=A.check=1,A.mode=512&W?10:12,U=W=0;break;case 2:for(;U<16;){if(le===0)break e;le--,W+=Q[se++]<<U,U+=8}if(A.flags=W,(255&A.flags)!=8){P.msg="unknown compression method",A.mode=30;break}if(57344&A.flags){P.msg="unknown header flags set",A.mode=30;break}A.head&&(A.head.text=W>>8&1),512&A.flags&&(B[0]=255&W,B[1]=W>>>8&255,A.check=h(A.check,B,2,0)),U=W=0,A.mode=3;case 3:for(;U<32;){if(le===0)break e;le--,W+=Q[se++]<<U,U+=8}A.head&&(A.head.time=W),512&A.flags&&(B[0]=255&W,B[1]=W>>>8&255,B[2]=W>>>16&255,B[3]=W>>>24&255,A.check=h(A.check,B,4,0)),U=W=0,A.mode=4;case 4:for(;U<16;){if(le===0)break e;le--,W+=Q[se++]<<U,U+=8}A.head&&(A.head.xflags=255&W,A.head.os=W>>8),512&A.flags&&(B[0]=255&W,B[1]=W>>>8&255,A.check=h(A.check,B,2,0)),U=W=0,A.mode=5;case 5:if(1024&A.flags){for(;U<16;){if(le===0)break e;le--,W+=Q[se++]<<U,U+=8}A.length=W,A.head&&(A.head.extra_len=W),512&A.flags&&(B[0]=255&W,B[1]=W>>>8&255,A.check=h(A.check,B,2,0)),U=W=0}else A.head&&(A.head.extra=null);A.mode=6;case 6:if(1024&A.flags&&(le<(fe=A.length)&&(fe=le),fe&&(A.head&&(_=A.head.extra_len-A.length,A.head.extra||(A.head.extra=new Array(A.head.extra_len)),s.arraySet(A.head.extra,Q,se,fe,_)),512&A.flags&&(A.check=h(A.check,Q,fe,se)),le-=fe,se+=fe,A.length-=fe),A.length))break e;A.length=0,A.mode=7;case 7:if(2048&A.flags){if(le===0)break e;for(fe=0;_=Q[se+fe++],A.head&&_&&A.length<65536&&(A.head.name+=String.fromCharCode(_)),_&&fe<le;);if(512&A.flags&&(A.check=h(A.check,Q,fe,se)),le-=fe,se+=fe,_)break e}else A.head&&(A.head.name=null);A.length=0,A.mode=8;case 8:if(4096&A.flags){if(le===0)break e;for(fe=0;_=Q[se+fe++],A.head&&_&&A.length<65536&&(A.head.comment+=String.fromCharCode(_)),_&&fe<le;);if(512&A.flags&&(A.check=h(A.check,Q,fe,se)),le-=fe,se+=fe,_)break e}else A.head&&(A.head.comment=null);A.mode=9;case 9:if(512&A.flags){for(;U<16;){if(le===0)break e;le--,W+=Q[se++]<<U,U+=8}if(W!==(65535&A.check)){P.msg="header crc mismatch",A.mode=30;break}U=W=0}A.head&&(A.head.hcrc=A.flags>>9&1,A.head.done=!0),P.adler=A.check=0,A.mode=12;break;case 10:for(;U<32;){if(le===0)break e;le--,W+=Q[se++]<<U,U+=8}P.adler=A.check=S(W),U=W=0,A.mode=11;case 11:if(A.havedict===0)return P.next_out=Ie,P.avail_out=Ae,P.next_in=se,P.avail_in=le,A.hold=W,A.bits=U,2;P.adler=A.check=1,A.mode=12;case 12:if(X===5||X===6)break e;case 13:if(A.last){W>>>=7&U,U-=7&U,A.mode=27;break}for(;U<3;){if(le===0)break e;le--,W+=Q[se++]<<U,U+=8}switch(A.last=1&W,U-=1,3&(W>>>=1)){case 0:A.mode=14;break;case 1:if(ge(A),A.mode=20,X!==6)break;W>>>=2,U-=2;break e;case 2:A.mode=17;break;case 3:P.msg="invalid block type",A.mode=30}W>>>=2,U-=2;break;case 14:for(W>>>=7&U,U-=7&U;U<32;){if(le===0)break e;le--,W+=Q[se++]<<U,U+=8}if((65535&W)!=(W>>>16^65535)){P.msg="invalid stored block lengths",A.mode=30;break}if(A.length=65535&W,U=W=0,A.mode=15,X===6)break e;case 15:A.mode=16;case 16:if(fe=A.length){if(le<fe&&(fe=le),Ae<fe&&(fe=Ae),fe===0)break e;s.arraySet(Ce,Q,se,fe,Ie),le-=fe,se+=fe,Ae-=fe,Ie+=fe,A.length-=fe;break}A.mode=12;break;case 17:for(;U<14;){if(le===0)break e;le--,W+=Q[se++]<<U,U+=8}if(A.nlen=257+(31&W),W>>>=5,U-=5,A.ndist=1+(31&W),W>>>=5,U-=5,A.ncode=4+(15&W),W>>>=4,U-=4,286<A.nlen||30<A.ndist){P.msg="too many length or distance symbols",A.mode=30;break}A.have=0,A.mode=18;case 18:for(;A.have<A.ncode;){for(;U<3;){if(le===0)break e;le--,W+=Q[se++]<<U,U+=8}A.lens[ie[A.have++]]=7&W,W>>>=3,U-=3}for(;A.have<19;)A.lens[ie[A.have++]]=0;if(A.lencode=A.lendyn,A.lenbits=7,j={bits:A.lenbits},ee=f(0,A.lens,0,19,A.lencode,0,A.work,j),A.lenbits=j.bits,ee){P.msg="invalid code lengths set",A.mode=30;break}A.have=0,A.mode=19;case 19:for(;A.have<A.nlen+A.ndist;){for(;Ue=(C=A.lencode[W&(1<<A.lenbits)-1])>>>16&255,At=65535&C,!((Fe=C>>>24)<=U);){if(le===0)break e;le--,W+=Q[se++]<<U,U+=8}if(At<16)W>>>=Fe,U-=Fe,A.lens[A.have++]=At;else{if(At===16){for(O=Fe+2;U<O;){if(le===0)break e;le--,W+=Q[se++]<<U,U+=8}if(W>>>=Fe,U-=Fe,A.have===0){P.msg="invalid bit length repeat",A.mode=30;break}_=A.lens[A.have-1],fe=3+(3&W),W>>>=2,U-=2}else if(At===17){for(O=Fe+3;U<O;){if(le===0)break e;le--,W+=Q[se++]<<U,U+=8}U-=Fe,_=0,fe=3+(7&(W>>>=Fe)),W>>>=3,U-=3}else{for(O=Fe+7;U<O;){if(le===0)break e;le--,W+=Q[se++]<<U,U+=8}U-=Fe,_=0,fe=11+(127&(W>>>=Fe)),W>>>=7,U-=7}if(A.have+fe>A.nlen+A.ndist){P.msg="invalid bit length repeat",A.mode=30;break}for(;fe--;)A.lens[A.have++]=_}}if(A.mode===30)break;if(A.lens[256]===0){P.msg="invalid code -- missing end-of-block",A.mode=30;break}if(A.lenbits=9,j={bits:A.lenbits},ee=f(p,A.lens,0,A.nlen,A.lencode,0,A.work,j),A.lenbits=j.bits,ee){P.msg="invalid literal/lengths set",A.mode=30;break}if(A.distbits=6,A.distcode=A.distdyn,j={bits:A.distbits},ee=f(b,A.lens,A.nlen,A.ndist,A.distcode,0,A.work,j),A.distbits=j.bits,ee){P.msg="invalid distances set",A.mode=30;break}if(A.mode=20,X===6)break e;case 20:A.mode=21;case 21:if(6<=le&&258<=Ae){P.next_out=Ie,P.avail_out=Ae,P.next_in=se,P.avail_in=le,A.hold=W,A.bits=U,u(P,me),Ie=P.next_out,Ce=P.output,Ae=P.avail_out,se=P.next_in,Q=P.input,le=P.avail_in,W=A.hold,U=A.bits,A.mode===12&&(A.back=-1);break}for(A.back=0;Ue=(C=A.lencode[W&(1<<A.lenbits)-1])>>>16&255,At=65535&C,!((Fe=C>>>24)<=U);){if(le===0)break e;le--,W+=Q[se++]<<U,U+=8}if(Ue&&(240&Ue)==0){for(ot=Fe,Ut=Ue,Jt=At;Ue=(C=A.lencode[Jt+((W&(1<<ot+Ut)-1)>>ot)])>>>16&255,At=65535&C,!(ot+(Fe=C>>>24)<=U);){if(le===0)break e;le--,W+=Q[se++]<<U,U+=8}W>>>=ot,U-=ot,A.back+=ot}if(W>>>=Fe,U-=Fe,A.back+=Fe,A.length=At,Ue===0){A.mode=26;break}if(32&Ue){A.back=-1,A.mode=12;break}if(64&Ue){P.msg="invalid literal/length code",A.mode=30;break}A.extra=15&Ue,A.mode=22;case 22:if(A.extra){for(O=A.extra;U<O;){if(le===0)break e;le--,W+=Q[se++]<<U,U+=8}A.length+=W&(1<<A.extra)-1,W>>>=A.extra,U-=A.extra,A.back+=A.extra}A.was=A.length,A.mode=23;case 23:for(;Ue=(C=A.distcode[W&(1<<A.distbits)-1])>>>16&255,At=65535&C,!((Fe=C>>>24)<=U);){if(le===0)break e;le--,W+=Q[se++]<<U,U+=8}if((240&Ue)==0){for(ot=Fe,Ut=Ue,Jt=At;Ue=(C=A.distcode[Jt+((W&(1<<ot+Ut)-1)>>ot)])>>>16&255,At=65535&C,!(ot+(Fe=C>>>24)<=U);){if(le===0)break e;le--,W+=Q[se++]<<U,U+=8}W>>>=ot,U-=ot,A.back+=ot}if(W>>>=Fe,U-=Fe,A.back+=Fe,64&Ue){P.msg="invalid distance code",A.mode=30;break}A.offset=At,A.extra=15&Ue,A.mode=24;case 24:if(A.extra){for(O=A.extra;U<O;){if(le===0)break e;le--,W+=Q[se++]<<U,U+=8}A.offset+=W&(1<<A.extra)-1,W>>>=A.extra,U-=A.extra,A.back+=A.extra}if(A.offset>A.dmax){P.msg="invalid distance too far back",A.mode=30;break}A.mode=25;case 25:if(Ae===0)break e;if(fe=me-Ae,A.offset>fe){if((fe=A.offset-fe)>A.whave&&A.sane){P.msg="invalid distance too far back",A.mode=30;break}Xe=fe>A.wnext?(fe-=A.wnext,A.wsize-fe):A.wnext-fe,fe>A.length&&(fe=A.length),Et=A.window}else Et=Ce,Xe=Ie-A.offset,fe=A.length;for(Ae<fe&&(fe=Ae),Ae-=fe,A.length-=fe;Ce[Ie++]=Et[Xe++],--fe;);A.length===0&&(A.mode=21);break;case 26:if(Ae===0)break e;Ce[Ie++]=A.length,Ae--,A.mode=21;break;case 27:if(A.wrap){for(;U<32;){if(le===0)break e;le--,W|=Q[se++]<<U,U+=8}if(me-=Ae,P.total_out+=me,A.total+=me,me&&(P.adler=A.check=A.flags?h(A.check,Ce,me,Ie-me):l(A.check,Ce,me,Ie-me)),me=Ae,(A.flags?W:S(W))!==A.check){P.msg="incorrect data check",A.mode=30;break}U=W=0}A.mode=28;case 28:if(A.wrap&&A.flags){for(;U<32;){if(le===0)break e;le--,W+=Q[se++]<<U,U+=8}if(W!==(4294967295&A.total)){P.msg="incorrect length check",A.mode=30;break}U=W=0}A.mode=29;case 29:ee=1;break e;case 30:ee=-3;break e;case 31:return-4;default:return v}return P.next_out=Ie,P.avail_out=Ae,P.next_in=se,P.avail_in=le,A.hold=W,A.bits=U,(A.wsize||me!==P.avail_out&&A.mode<30&&(A.mode<27||X!==4))&&_e(P,P.output,P.next_out,me-P.avail_out)?(A.mode=31,-4):(Se-=P.avail_in,me-=P.avail_out,P.total_in+=Se,P.total_out+=me,A.total+=me,A.wrap&&me&&(P.adler=A.check=A.flags?h(A.check,Ce,me,P.next_out-me):l(A.check,Ce,me,P.next_out-me)),P.data_type=A.bits+(A.last?64:0)+(A.mode===12?128:0)+(A.mode===20||A.mode===15?256:0),(Se==0&&me===0||X===4)&&ee===w&&(ee=-5),ee)},a.inflateEnd=function(P){if(!P||!P.state)return v;var X=P.state;return X.window&&(X.window=null),P.state=null,w},a.inflateGetHeader=function(P,X){var A;return P&&P.state?(2&(A=P.state).wrap)==0?v:((A.head=X).done=!1,w):v},a.inflateSetDictionary=function(P,X){var A,Q=X.length;return P&&P.state?(A=P.state).wrap!==0&&A.mode!==11?v:A.mode===11&&l(1,X,Q,0)!==A.check?-3:_e(P,X,Q,Q)?(A.mode=31,-4):(A.havedict=1,w):v},a.inflateInfo="pako inflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./inffast":48,"./inftrees":50}],50:[function(r,i,a){"use strict";var s=r("../utils/common"),l=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],h=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],u=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],f=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];i.exports=function(p,b,w,v,m,E,y,S){var x,T,L,D,K,V,ae,H,ge,_e=S.bits,P=0,X=0,A=0,Q=0,Ce=0,se=0,Ie=0,le=0,Ae=0,W=0,U=null,Se=0,me=new s.Buf16(16),fe=new s.Buf16(16),Xe=null,Et=0;for(P=0;P<=15;P++)me[P]=0;for(X=0;X<v;X++)me[b[w+X]]++;for(Ce=_e,Q=15;1<=Q&&me[Q]===0;Q--);if(Q<Ce&&(Ce=Q),Q===0)return m[E++]=20971520,m[E++]=20971520,S.bits=1,0;for(A=1;A<Q&&me[A]===0;A++);for(Ce<A&&(Ce=A),P=le=1;P<=15;P++)if(le<<=1,(le-=me[P])<0)return-1;if(0<le&&(p===0||Q!==1))return-1;for(fe[1]=0,P=1;P<15;P++)fe[P+1]=fe[P]+me[P];for(X=0;X<v;X++)b[w+X]!==0&&(y[fe[b[w+X]]++]=X);if(V=p===0?(U=Xe=y,19):p===1?(U=l,Se-=257,Xe=h,Et-=257,256):(U=u,Xe=f,-1),P=A,K=E,Ie=X=W=0,L=-1,D=(Ae=1<<(se=Ce))-1,p===1&&852<Ae||p===2&&592<Ae)return 1;for(;;){for(ae=P-Ie,ge=y[X]<V?(H=0,y[X]):y[X]>V?(H=Xe[Et+y[X]],U[Se+y[X]]):(H=96,0),x=1<<P-Ie,A=T=1<<se;m[K+(W>>Ie)+(T-=x)]=ae<<24|H<<16|ge|0,T!==0;);for(x=1<<P-1;W&x;)x>>=1;if(x!==0?(W&=x-1,W+=x):W=0,X++,--me[P]==0){if(P===Q)break;P=b[w+y[X]]}if(Ce<P&&(W&D)!==L){for(Ie===0&&(Ie=Ce),K+=A,le=1<<(se=P-Ie);se+Ie<Q&&!((le-=me[se+Ie])<=0);)se++,le<<=1;if(Ae+=1<<se,p===1&&852<Ae||p===2&&592<Ae)return 1;m[L=W&D]=Ce<<24|se<<16|K-E|0}}return W!==0&&(m[K+W]=P-Ie<<24|4194304),S.bits=Ce,0}},{"../utils/common":41}],51:[function(r,i,a){"use strict";i.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},{}],52:[function(r,i,a){"use strict";var s=r("../utils/common"),l=0,h=1;function u(C){for(var B=C.length;0<=--B;)C[B]=0}var f=0,p=29,b=256,w=b+1+p,v=30,m=19,E=2*w+1,y=15,S=16,x=7,T=256,L=16,D=17,K=18,V=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],ae=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],H=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],ge=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],_e=new Array(2*(w+2));u(_e);var P=new Array(2*v);u(P);var X=new Array(512);u(X);var A=new Array(256);u(A);var Q=new Array(p);u(Q);var Ce,se,Ie,le=new Array(v);function Ae(C,B,ie,re,F){this.static_tree=C,this.extra_bits=B,this.extra_base=ie,this.elems=re,this.max_length=F,this.has_stree=C&&C.length}function W(C,B){this.dyn_tree=C,this.max_code=0,this.stat_desc=B}function U(C){return C<256?X[C]:X[256+(C>>>7)]}function Se(C,B){C.pending_buf[C.pending++]=255&B,C.pending_buf[C.pending++]=B>>>8&255}function me(C,B,ie){C.bi_valid>S-ie?(C.bi_buf|=B<<C.bi_valid&65535,Se(C,C.bi_buf),C.bi_buf=B>>S-C.bi_valid,C.bi_valid+=ie-S):(C.bi_buf|=B<<C.bi_valid&65535,C.bi_valid+=ie)}function fe(C,B,ie){me(C,ie[2*B],ie[2*B+1])}function Xe(C,B){for(var ie=0;ie|=1&C,C>>>=1,ie<<=1,0<--B;);return ie>>>1}function Et(C,B,ie){var re,F,de=new Array(y+1),be=0;for(re=1;re<=y;re++)de[re]=be=be+ie[re-1]<<1;for(F=0;F<=B;F++){var he=C[2*F+1];he!==0&&(C[2*F]=Xe(de[he]++,he))}}function Fe(C){var B;for(B=0;B<w;B++)C.dyn_ltree[2*B]=0;for(B=0;B<v;B++)C.dyn_dtree[2*B]=0;for(B=0;B<m;B++)C.bl_tree[2*B]=0;C.dyn_ltree[2*T]=1,C.opt_len=C.static_len=0,C.last_lit=C.matches=0}function Ue(C){8<C.bi_valid?Se(C,C.bi_buf):0<C.bi_valid&&(C.pending_buf[C.pending++]=C.bi_buf),C.bi_buf=0,C.bi_valid=0}function At(C,B,ie,re){var F=2*B,de=2*ie;return C[F]<C[de]||C[F]===C[de]&&re[B]<=re[ie]}function ot(C,B,ie){for(var re=C.heap[ie],F=ie<<1;F<=C.heap_len&&(F<C.heap_len&&At(B,C.heap[F+1],C.heap[F],C.depth)&&F++,!At(B,re,C.heap[F],C.depth));)C.heap[ie]=C.heap[F],ie=F,F<<=1;C.heap[ie]=re}function Ut(C,B,ie){var re,F,de,be,he=0;if(C.last_lit!==0)for(;re=C.pending_buf[C.d_buf+2*he]<<8|C.pending_buf[C.d_buf+2*he+1],F=C.pending_buf[C.l_buf+he],he++,re===0?fe(C,F,B):(fe(C,(de=A[F])+b+1,B),(be=V[de])!==0&&me(C,F-=Q[de],be),fe(C,de=U(--re),ie),(be=ae[de])!==0&&me(C,re-=le[de],be)),he<C.last_lit;);fe(C,T,B)}function Jt(C,B){var ie,re,F,de=B.dyn_tree,be=B.stat_desc.static_tree,he=B.stat_desc.has_stree,xe=B.stat_desc.elems,je=-1;for(C.heap_len=0,C.heap_max=E,ie=0;ie<xe;ie++)de[2*ie]!==0?(C.heap[++C.heap_len]=je=ie,C.depth[ie]=0):de[2*ie+1]=0;for(;C.heap_len<2;)de[2*(F=C.heap[++C.heap_len]=je<2?++je:0)]=1,C.depth[F]=0,C.opt_len--,he&&(C.static_len-=be[2*F+1]);for(B.max_code=je,ie=C.heap_len>>1;1<=ie;ie--)ot(C,de,ie);for(F=xe;ie=C.heap[1],C.heap[1]=C.heap[C.heap_len--],ot(C,de,1),re=C.heap[1],C.heap[--C.heap_max]=ie,C.heap[--C.heap_max]=re,de[2*F]=de[2*ie]+de[2*re],C.depth[F]=(C.depth[ie]>=C.depth[re]?C.depth[ie]:C.depth[re])+1,de[2*ie+1]=de[2*re+1]=F,C.heap[1]=F++,ot(C,de,1),2<=C.heap_len;);C.heap[--C.heap_max]=C.heap[1],(function(Ge,Nt){var Qn,Qt,er,st,kr,Kr,pn=Nt.dyn_tree,Io=Nt.max_code,Fl=Nt.stat_desc.static_tree,Hl=Nt.stat_desc.has_stree,Gl=Nt.stat_desc.extra_bits,Ei=Nt.stat_desc.extra_base,Er=Nt.stat_desc.max_length,Co=0;for(st=0;st<=y;st++)Ge.bl_count[st]=0;for(pn[2*Ge.heap[Ge.heap_max]+1]=0,Qn=Ge.heap_max+1;Qn<E;Qn++)Er<(st=pn[2*pn[2*(Qt=Ge.heap[Qn])+1]+1]+1)&&(st=Er,Co++),pn[2*Qt+1]=st,Io<Qt||(Ge.bl_count[st]++,kr=0,Ei<=Qt&&(kr=Gl[Qt-Ei]),Kr=pn[2*Qt],Ge.opt_len+=Kr*(st+kr),Hl&&(Ge.static_len+=Kr*(Fl[2*Qt+1]+kr)));if(Co!==0){do{for(st=Er-1;Ge.bl_count[st]===0;)st--;Ge.bl_count[st]--,Ge.bl_count[st+1]+=2,Ge.bl_count[Er]--,Co-=2}while(0<Co);for(st=Er;st!==0;st--)for(Qt=Ge.bl_count[st];Qt!==0;)Io<(er=Ge.heap[--Qn])||(pn[2*er+1]!==st&&(Ge.opt_len+=(st-pn[2*er+1])*pn[2*er],pn[2*er+1]=st),Qt--)}})(C,B),Et(de,je,C.bl_count)}function _(C,B,ie){var re,F,de=-1,be=B[1],he=0,xe=7,je=4;for(be===0&&(xe=138,je=3),B[2*(ie+1)+1]=65535,re=0;re<=ie;re++)F=be,be=B[2*(re+1)+1],++he<xe&&F===be||(he<je?C.bl_tree[2*F]+=he:F!==0?(F!==de&&C.bl_tree[2*F]++,C.bl_tree[2*L]++):he<=10?C.bl_tree[2*D]++:C.bl_tree[2*K]++,de=F,je=(he=0)===be?(xe=138,3):F===be?(xe=6,3):(xe=7,4))}function ee(C,B,ie){var re,F,de=-1,be=B[1],he=0,xe=7,je=4;for(be===0&&(xe=138,je=3),re=0;re<=ie;re++)if(F=be,be=B[2*(re+1)+1],!(++he<xe&&F===be)){if(he<je)for(;fe(C,F,C.bl_tree),--he!=0;);else F!==0?(F!==de&&(fe(C,F,C.bl_tree),he--),fe(C,L,C.bl_tree),me(C,he-3,2)):he<=10?(fe(C,D,C.bl_tree),me(C,he-3,3)):(fe(C,K,C.bl_tree),me(C,he-11,7));de=F,je=(he=0)===be?(xe=138,3):F===be?(xe=6,3):(xe=7,4)}}u(le);var j=!1;function O(C,B,ie,re){me(C,(f<<1)+(re?1:0),3),(function(F,de,be,he){Ue(F),he&&(Se(F,be),Se(F,~be)),s.arraySet(F.pending_buf,F.window,de,be,F.pending),F.pending+=be})(C,B,ie,!0)}a._tr_init=function(C){j||((function(){var B,ie,re,F,de,be=new Array(y+1);for(F=re=0;F<p-1;F++)for(Q[F]=re,B=0;B<1<<V[F];B++)A[re++]=F;for(A[re-1]=F,F=de=0;F<16;F++)for(le[F]=de,B=0;B<1<<ae[F];B++)X[de++]=F;for(de>>=7;F<v;F++)for(le[F]=de<<7,B=0;B<1<<ae[F]-7;B++)X[256+de++]=F;for(ie=0;ie<=y;ie++)be[ie]=0;for(B=0;B<=143;)_e[2*B+1]=8,B++,be[8]++;for(;B<=255;)_e[2*B+1]=9,B++,be[9]++;for(;B<=279;)_e[2*B+1]=7,B++,be[7]++;for(;B<=287;)_e[2*B+1]=8,B++,be[8]++;for(Et(_e,w+1,be),B=0;B<v;B++)P[2*B+1]=5,P[2*B]=Xe(B,5);Ce=new Ae(_e,V,b+1,w,y),se=new Ae(P,ae,0,v,y),Ie=new Ae(new Array(0),H,0,m,x)})(),j=!0),C.l_desc=new W(C.dyn_ltree,Ce),C.d_desc=new W(C.dyn_dtree,se),C.bl_desc=new W(C.bl_tree,Ie),C.bi_buf=0,C.bi_valid=0,Fe(C)},a._tr_stored_block=O,a._tr_flush_block=function(C,B,ie,re){var F,de,be=0;0<C.level?(C.strm.data_type===2&&(C.strm.data_type=(function(he){var xe,je=4093624447;for(xe=0;xe<=31;xe++,je>>>=1)if(1&je&&he.dyn_ltree[2*xe]!==0)return l;if(he.dyn_ltree[18]!==0||he.dyn_ltree[20]!==0||he.dyn_ltree[26]!==0)return h;for(xe=32;xe<b;xe++)if(he.dyn_ltree[2*xe]!==0)return h;return l})(C)),Jt(C,C.l_desc),Jt(C,C.d_desc),be=(function(he){var xe;for(_(he,he.dyn_ltree,he.l_desc.max_code),_(he,he.dyn_dtree,he.d_desc.max_code),Jt(he,he.bl_desc),xe=m-1;3<=xe&&he.bl_tree[2*ge[xe]+1]===0;xe--);return he.opt_len+=3*(xe+1)+5+5+4,xe})(C),F=C.opt_len+3+7>>>3,(de=C.static_len+3+7>>>3)<=F&&(F=de)):F=de=ie+5,ie+4<=F&&B!==-1?O(C,B,ie,re):C.strategy===4||de===F?(me(C,2+(re?1:0),3),Ut(C,_e,P)):(me(C,4+(re?1:0),3),(function(he,xe,je,Ge){var Nt;for(me(he,xe-257,5),me(he,je-1,5),me(he,Ge-4,4),Nt=0;Nt<Ge;Nt++)me(he,he.bl_tree[2*ge[Nt]+1],3);ee(he,he.dyn_ltree,xe-1),ee(he,he.dyn_dtree,je-1)})(C,C.l_desc.max_code+1,C.d_desc.max_code+1,be+1),Ut(C,C.dyn_ltree,C.dyn_dtree)),Fe(C),re&&Ue(C)},a._tr_tally=function(C,B,ie){return C.pending_buf[C.d_buf+2*C.last_lit]=B>>>8&255,C.pending_buf[C.d_buf+2*C.last_lit+1]=255&B,C.pending_buf[C.l_buf+C.last_lit]=255&ie,C.last_lit++,B===0?C.dyn_ltree[2*ie]++:(C.matches++,B--,C.dyn_ltree[2*(A[ie]+b+1)]++,C.dyn_dtree[2*U(B)]++),C.last_lit===C.lit_bufsize-1},a._tr_align=function(C){me(C,2,3),fe(C,T,_e),(function(B){B.bi_valid===16?(Se(B,B.bi_buf),B.bi_buf=0,B.bi_valid=0):8<=B.bi_valid&&(B.pending_buf[B.pending++]=255&B.bi_buf,B.bi_buf>>=8,B.bi_valid-=8)})(C)}},{"../utils/common":41}],53:[function(r,i,a){"use strict";i.exports=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}},{}],54:[function(r,i,a){"use strict";i.exports=typeof setImmediate=="function"?setImmediate:function(){var s=[].slice.apply(arguments);s.splice(1,0,0),setTimeout.apply(null,s)}},{}]},{},[10])(10)})})),Pu=Fi(op(),1),$u=(e,...t)=>t.length===0?e[0]:String.raw({raw:e},...t),co=$u,Du=$u;function ei(e,t){let r=e.length,i,a,s=!1,l=!1;Array.isArray(e[0])?i=e:(i=[e],r=i.length,s=!0),Array.isArray(t[0])?a=t:(a=t.length>0?t.map(p=>[p]):[[]],l=!0);let h=a[0].length,u=a[0].map((p,b)=>a.map(w=>w[b])),f=i.map(p=>u.map(b=>{let w=0;if(!Array.isArray(p)){for(let v of b)w+=p*v;return w}for(let v=0;v<p.length;v++)w+=p[v]*(b[v]||0);return w}));return r===1&&s&&(f=f[0]),h===1&&l?r===1&&s?f[0]:f.map(p=>p[0]):f}function zs(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]}function gt(e,t,r=[0,0,0]){const i=zs(e,t[0]),a=zs(e,t[1]),s=zs(e,t[2]);return r[0]=i,r[1]=a,r[2]=s,r}function uo(e){return dr(e)==="string"}function dr(e){return(Object.prototype.toString.call(e).match(/^\[object\s+(.*?)\]$/)[1]||"").toLowerCase()}function Bs(e,{precision:t=16,unit:r}){return Ke(e)?"none":(e=+Ns(e,t),e+(r??""))}function Ke(e){return e===null}function _t(e){return Ke(e)?0:e}function Ns(e,t){if(e===0)return 0;let r=~~e,i=0;r&&t&&(i=~~Math.log10(Math.abs(r))+1);const a=10**(t-i);return Math.floor(e*a+.5)/a}function ti(e,t,r){return isNaN(e)?t:isNaN(t)?e:e+(t-e)*r}function zu(e,t,r){return(r-e)/(t-e)}function Fs(e,t,r){return!e||!t||e===t||e[0]===t[0]&&e[1]===t[1]||isNaN(r)||r===null?r:ti(t[0],t[1],zu(e[0],e[1],r))}function Xi(e,t,r){return Math.max(Math.min(r,t),e)}function Ji(e,t){return Math.sign(e)===Math.sign(t)?e:-e}function yt(e,t){return Ji(Math.abs(e)**t,e)}function Hs(e,t){return t===0?0:e/t}function Bu(e,t,r=0,i=e.length){for(;r<i;){const a=r+i>>1;e[a]<t?r=a+1:i=a}return r}function ho(e,t){if(e instanceof t)return!0;const r=t.name;for(;e;){const i=Object.getPrototypeOf(e),a=i?.constructor?.name;if(a===r)return!0;if(!a||a==="Object")return!1;e=i}return!1}var ip=Object.freeze({__proto__:null,bisectLeft:Bu,clamp:Xi,copySign:Ji,interpolate:ti,interpolateInv:zu,isInstance:ho,isNone:Ke,isString:uo,mapRange:Fs,multiplyMatrices:ei,multiply_v3_m3x3:gt,serializeNumber:Bs,skipNone:_t,spow:yt,toPrecision:Ns,type:dr,zdiv:Hs}),ap=class{add(e,t,r){if(typeof arguments[0]!="string"){for(var e in arguments[0])this.add(e,arguments[0][e],arguments[1]);return}(Array.isArray(e)?e:[e]).forEach(function(i){this[i]=this[i]||[],t&&this[i][r?"unshift":"push"](t)},this)}run(e,t){this[e]=this[e]||[],this[e].forEach(function(r){r.call(t&&t.context?t.context:t,t)})}},hr=new ap,an={gamut_mapping:"css",precision:5,deltaE:"76",verbose:"production".toLowerCase()!=="test",warn:function(t){this.verbose&&globalThis?.console?.warn?.(t)}},Nu=class{type;coordMeta;coordRange;range;constructor(e,t){if(typeof e=="object"&&(this.coordMeta=e),t&&(this.coordMeta=t,this.coordRange=t.range??t.refRange),typeof e=="string"){let r=e.trim().match(/^(?<type><[a-z]+>)(\[(?<min>-?[.\d]+),\s*(?<max>-?[.\d]+)\])?$/);if(!r)throw new TypeError(`Cannot parse ${e} as a type definition.`);this.type=r.groups.type;let{min:i,max:a}=r.groups;(i||a)&&(this.range=[+i,+a])}}get computedRange(){return this.range?this.range:this.type==="<percentage>"?this.percentageRange():this.type==="<angle>"?[0,360]:null}get unit(){return this.type==="<percentage>"?"%":this.type==="<angle>"?"deg":""}resolve(e){if(this.type==="<angle>")return e;let t=this.computedRange,r=this.coordRange;return this.type==="<percentage>"&&(r??=this.percentageRange()),Fs(t,r,e)}serialize(e,t){let r=this.type==="<percentage>"?this.percentageRange(100):this.computedRange,i=this.unit;return e=Fs(this.coordRange,r,e),Bs(e,{unit:i,precision:t})}toString(){let e=this.type;if(this.range){let[t="",r=""]=this.range;e+=`[${t},${r}]`}return e}percentageRange(e=1){let t;return this.coordMeta&&this.coordMeta.range||this.coordRange&&this.coordRange[0]>=0?t=[0,1]:t=[-1,1],[t[0]*e,t[1]*e]}static get(e,t){return ho(e,this)?e:new this(e,t)}},Gs=Symbol("instance"),Fu=class Xf{type;name;spaceCoords;coords;id;alpha;constructor(t,r=t.space){t[Gs]=this,this.type="function",this.name="color",Object.assign(this,t),this.space=r,this.type!=="custom"&&(this.spaceCoords=Object.values(r.coords),this.coords||(this.coords=this.spaceCoords.map(i=>{let a=["<number>","<percentage>"];return i.type==="angle"&&a.push("<angle>"),a})),this.coords=this.coords.map((i,a)=>{let s=this.spaceCoords[a];return typeof i=="string"&&(i=i.trim().split(/\s*\|\s*/)),i.map(l=>Nu.get(l,s))}))}serializeCoords(t,r,i){return i=t.map((a,s)=>Nu.get(i?.[s]??this.coords[s][0],this.spaceCoords[s])),t.map((a,s)=>i[s].serialize(a,r))}coerceCoords(t,r){return Object.entries(this.space.coords).map(([i,a],s)=>{let l=t[s];if(Ke(l)||isNaN(l))return l;let h=r[s],u=this.coords[s].find(f=>f.type==h);if(!u){let f=a.name||i;throw new TypeError(`${h??l?.raw??l} not allowed for ${f} in ${this.name}()`)}return l=u.resolve(l),u.range&&(r[s]=u.toString()),l})}canSerialize(){return this.type==="function"||this.serialize}parse(t){return null}static get(t,...r){return!t||ho(t,this)?t:t[Gs]?t[Gs]:new Xf(t,...r)}},Gt={D50:[.3457/.3585,1,.2958/.3585],D65:[.3127/.329,1,.3583/.329]};function Ws(e){return Array.isArray(e)?e:Gt[e]}function Qi(e,t,r,i={}){if(e=Ws(e),t=Ws(t),!e||!t)throw new TypeError(`Missing white point to convert ${e?"":"from"}${!e&&!t?"/":""}${t?"":"to"}`);if(e===t)return r;let a={W1:e,W2:t,XYZ:r,options:i};if(hr.run("chromatic-adaptation-start",a),a.M||(a.W1===Gt.D65&&a.W2===Gt.D50?a.M=[[1.0479297925449969,.022946870601609652,-.05019226628920524],[.02962780877005599,.9904344267538799,-.017073799063418826],[-.009243040646204504,.015055191490298152,.7518742814281371]]:a.W1===Gt.D50&&a.W2===Gt.D65&&(a.M=[[.955473421488075,-.02309845494876471,.06325924320057072],[-.0283697093338637,1.0099953980813041,.021041441191917323],[.012314014864481998,-.020507649298898964,1.330365926242124]])),hr.run("chromatic-adaptation-end",a),a.M)return gt(a.XYZ,a.M);throw new TypeError("Only Bradford CAT with white points D50 and D65 supported for now.")}function Hu(e,t){let r={str:String(e)?.trim(),options:t};if(hr.run("parse-start",r),r.color)return r.color;r.parsed=lp(r.str);let i,a=r.options?r.options.parseMeta??r.options.meta:null;if(r.parsed){let s=r.parsed.name,l,h,u=r.parsed.args,f=u.map((w,v)=>r.parsed.argMeta[v]?.type);if(s==="color"){let w=u.shift();f.shift();let v=w.startsWith("--")?w.substring(2):`--${w}`,m=[w,v];if(l=ke.findFormat({name:s,id:m,type:"function"}),!l){let E,y=w in ke.registry?w:v;if(y in ke.registry){let S=ke.registry[y].formats?.color?.id;S&&(E=`Did you mean ${e.replace("color("+w,"color("+S)}?`)}throw new TypeError(`Cannot parse ${r.str}. `+(E??"Missing a plugin?"))}h=l.space,l.id.startsWith("--")&&!w.startsWith("--")&&an.warn(`${h.name} is a non-standard space and not currently supported in the CSS spec. Use prefixed color(${l.id}) instead of color(${w}).`),w.startsWith("--")&&!l.id.startsWith("--")&&an.warn(`${h.name} is a standard space and supported in the CSS spec. Use color(${l.id}) instead of prefixed color(${w}).`)}else l=ke.findFormat({name:s,type:"function"}),h=l.space;a&&Object.assign(a,{format:l,formatId:l.name,types:f,commas:r.parsed.commas});let p=1;r.parsed.lastAlpha&&(p=r.parsed.args.pop(),a&&(a.alphaType=f.pop()));let b=l.coords.length;if(u.length!==b)throw new TypeError(`Expected ${b} coordinates for ${h.id} in ${r.str}), got ${u.length}`);u=l.coerceCoords(u,f),i={spaceId:h.id,coords:u,alpha:p}}else e:for(let s of ke.all)for(let l in s.formats){let h=s.formats[l];if(h.type!=="custom"||h.test&&!h.test(r.str))continue;let u=s.getFormat(h),f=u.parse(r.str);if(f){a&&Object.assign(a,{format:u,formatId:l}),i=f;break e}}if(!i)throw new TypeError(`Could not parse ${e} as a color. Missing a plugin?`);return i.alpha=Ke(i.alpha)?i.alpha:i.alpha===void 0?1:Xi(0,i.alpha,1),i}var Gu={"%":.01,deg:1,grad:.9,rad:180/Math.PI,turn:360},ea={function:/^([a-z]+)\(((?:calc\(NaN\)|.)+?)\)$/i,number:/^([-+]?(?:[0-9]*\.)?[0-9]+(e[-+]?[0-9]+)?)$/i,unitValue:RegExp(`(${Object.keys(Gu).join("|")})$`),singleArgument:/\/?\s*(none|NaN|calc\(NaN\)|[-+\w.]+(?:%|deg|g?rad|turn)?)/g};function sp(e){let t={},r=e.match(ea.unitValue)?.[0],i=t.raw=e;return r?(t.type=r==="%"?"<percentage>":"<angle>",t.unit=r,t.unitless=Number(i.slice(0,-r.length)),i=t.unitless*Gu[r]):ea.number.test(i)?(i=Number(i),t.type="<number>"):i==="none"?i=null:i==="NaN"||i==="calc(NaN)"?(i=NaN,t.type="<number>"):t.type="<ident>",{value:i,meta:t}}function lp(e){if(!e)return;e=e.trim();let t=e.match(ea.function);if(t){let r=[],i=[],a=!1,s=t[1].toLowerCase(),l=t[2].replace(ea.singleArgument,(h,u)=>{let{value:f,meta:p}=sp(u);return(h.startsWith("/")||s!=="color"&&r.length===3)&&(a=!0),r.push(f),i.push(p),""});return{name:s,args:r,argMeta:i,lastAlpha:a,commas:l.includes(","),rawName:t[1],rawArgs:t[2]}}}function Re(e,t){if(Array.isArray(e))return e.map(i=>Re(i,t));if(!e)throw new TypeError("Empty color reference");uo(e)&&(e=Hu(e,t));let r=e.space||e.spaceId;return typeof r=="string"&&(e.space=ke.get(r)),e.alpha===void 0&&(e.alpha=1),e}var cp=75e-6,ke=class Gn{constructor(t){this.id=t.id,this.name=t.name,this.base=t.base?Gn.get(t.base):null,this.aliases=t.aliases,this.base&&(this.fromBase=t.fromBase,this.toBase=t.toBase);let r=t.coords??this.base.coords;for(let i in r)"name"in r[i]||(r[i].name=i);this.coords=r,this.white=Ws(t.white??this.base.white??"D65"),this.formats=t.formats??{};for(let i in this.formats){let a=this.formats[i];a.type||="function",a.name||=i}this.formats.color?.id||(this.formats.color={...this.formats.color??{},id:t.cssId||this.id}),t.gamutSpace?this.gamutSpace=t.gamutSpace==="self"?this:Gn.get(t.gamutSpace):this.isPolar?this.gamutSpace=this.base:this.gamutSpace=this,this.gamutSpace.isUnbounded&&(this.inGamut=(i,a)=>!0),this.referred=t.referred,Object.defineProperty(this,"path",{value:up(this).reverse(),writable:!1,enumerable:!0,configurable:!0}),hr.run("colorspace-init-end",this)}inGamut(t,{epsilon:r=cp}={}){if(!this.equals(this.gamutSpace))return t=this.to(this.gamutSpace,t),this.gamutSpace.inGamut(t,{epsilon:r});let i=Object.values(this.coords);return t.every((a,s)=>{let l=i[s];if(l.type!=="angle"&&l.range){if(Ke(a))return!0;let[h,u]=l.range;return(h===void 0||a>=h-r)&&(u===void 0||a<=u+r)}return!0})}get isUnbounded(){return Object.values(this.coords).every(t=>!("range"in t))}get cssId(){return this.formats?.color?.id||this.id}get isPolar(){for(let t in this.coords)if(this.coords[t].type==="angle")return!0;return!1}getFormat(t){if(!t)return null;t==="default"?t=Object.values(this.formats)[0]:typeof t=="string"&&(t=this.formats[t]);let r=Fu.get(t,this);return r!==t&&t.name in this.formats&&(this.formats[t.name]=r),r}equals(t){return t?this===t||this.id===t||this.id===t.id:!1}to(t,r){if(arguments.length===1){const h=Re(t);[t,r]=[h.space,h.coords]}if(t=Gn.get(t),this.equals(t))return r;r=r.map(h=>Ke(h)?0:h);let i=this.path,a=t.path,s,l;for(let h=0;h<i.length&&i[h].equals(a[h]);h++)s=i[h],l=h;if(!s)throw new Error(`Cannot convert between color spaces ${this} and ${t}: no connection space was found`);for(let h=i.length-1;h>l;h--)r=i[h].toBase(r);for(let h=l+1;h<a.length;h++)r=a[h].fromBase(r);return r}from(t,r){if(arguments.length===1){const i=Re(t);[t,r]=[i.space,i.coords]}return t=Gn.get(t),t.to(this,r)}toString(){return`${this.name} (${this.id})`}getMinCoords(){let t=[];for(let r in this.coords){let i=this.coords[r],a=i.range||i.refRange;t.push(a?.min??0)}return t}static registry={};static get all(){return[...new Set(Object.values(Gn.registry))]}static register(t,r){if(arguments.length===1&&(r=arguments[0],t=r.id),r=this.get(r),this.registry[t]&&this.registry[t]!==r)throw new Error(`Duplicate color space registration: '${t}'`);if(this.registry[t]=r,arguments.length===1&&r.aliases)for(let i of r.aliases)this.register(i,r);return r}static get(t,...r){if(!t||ho(t,this))return t;if(dr(t)==="string"){let i=Gn.registry[t.toLowerCase()];if(!i)throw new TypeError(`No color space found with id = "${t}"`);return i}if(r.length)return Gn.get(...r);throw new TypeError(`${t} is not a valid color space`)}static findFormat(t,r=Gn.all){if(!t)return null;typeof t=="string"&&(t={name:t});for(let i of r)for(let[a,s]of Object.entries(i.formats)){s.name??=a,s.type??="function";let l=(!t.name||s.name===t.name)&&(!t.type||s.type===t.type);if(t.id){let h=s.ids||[s.id],u=Array.isArray(t.id)?t.id:[t.id];l&&=u.some(f=>h.includes(f))}if(l){let h=Fu.get(s,i);return h!==s&&(i.formats[s.name]=h),h}}return null}static resolveCoord(t,r){let i=dr(t),a,s;if(i==="string"?t.includes(".")?[a,s]=t.split("."):[a,s]=[,t]:Array.isArray(t)?[a,s]=t:(a=t.space,s=t.coordId),a=Gn.get(a),a||(a=r),!a)throw new TypeError(`Cannot resolve coordinate reference ${t}: No color space specified and relative references are not allowed here`);if(i=dr(s),i==="number"||i==="string"&&s>=0){let u=Object.entries(a.coords)[s];if(u)return{space:a,id:u[0],index:s,...u[1]}}a=Gn.get(a);let l=s.toLowerCase(),h=0;for(let u in a.coords){let f=a.coords[u];if(u.toLowerCase()===l||f.name?.toLowerCase()===l)return{space:a,id:u,index:h,...f};h++}throw new TypeError(`No "${s}" coordinate found in ${a.name}. Its coordinates are: ${Object.keys(a.coords).join(", ")}`)}static DEFAULT_FORMAT={type:"functions",name:"color"}};function up(e){let t=[e];for(let r=e;r=r.base;)t.push(r);return t}var Pt=new ke({id:"xyz-d65",name:"XYZ D65",coords:{x:{refRange:[0,1],name:"X"},y:{refRange:[0,1],name:"Y"},z:{refRange:[0,1],name:"Z"}},white:"D65",formats:{color:{ids:["xyz-d65","xyz"]}},aliases:["xyz"]}),Bt=class extends ke{constructor(e){e.coords||(e.coords={r:{range:[0,1],name:"Red"},g:{range:[0,1],name:"Green"},b:{range:[0,1],name:"Blue"}}),e.base||(e.base=Pt),e.toXYZ_M&&e.fromXYZ_M&&(e.toBase??=t=>{let r=gt(t,e.toXYZ_M);return this.white!==this.base.white&&(r=Qi(this.white,this.base.white,r)),r},e.fromBase??=t=>(t=Qi(this.base.white,this.white,t),gt(t,e.fromXYZ_M))),e.referred??="display",super(e)}};function Wu(e,t={}){if(Array.isArray(e))return e.map(u=>Wu(u,t));let{cssProperty:r="background-color",element:i,...a}=t,s=null;try{return Re(e,a)}catch(u){s=u}let{CSS:l,getComputedStyle:h}=globalThis;if(uo(e)&&i&&l&&h&&l.supports(r,e)){let u=i.style[r];e!==u&&(i.style[r]=e);let f=h(i).getPropertyValue(r);if(e!==u&&(i.style[r]=u),f!==e)try{return Re(f,a)}catch(p){s=p}else s={message:"Color value is a valid CSS color, but it could not be resolved :("}}return t.errorMeta&&(t.errorMeta.error=s),null}function ni(e,t){e=Re(e);let r=ke.get(t,t?.space),i=t?.precision,a;return!r||e.space.equals(r)?a=e.coords.slice():a=r.from(e),i===void 0?a:a.map(s=>Ns(s,i))}function sn(e,t){if(e=Re(e),t==="alpha")return e.alpha??1;let{space:r,index:i}=ke.resolveCoord(t,e.space);return ni(e,r)[i]}function Us(e,t,r,i){return e=Re(e),Array.isArray(t)&&([t,r,i]=[e.space,t,r]),t=ke.get(t),e.coords=t===e.space?r.slice():t.to(e.space,r),i!==void 0&&(e.alpha=i),e}Us.returns="color";function Xn(e,t,r){if(e=Re(e),arguments.length===2&&dr(arguments[1])==="object"){let i=arguments[1];for(let a in i)Xn(e,a,i[a])}else if(typeof r=="function"&&(r=r(sn(e,t))),t==="alpha")e.alpha=r;else{let{space:i,index:a}=ke.resolveCoord(t,e.space),s=ni(e,i);s[a]=r,Us(e,i,s)}return e}Xn.returns="color";var Vs=new ke({id:"xyz-d50",name:"XYZ D50",white:"D50",base:Pt,fromBase:e=>Qi(Pt.white,"D50",e),toBase:e=>Qi("D50",Pt.white,e)}),dp=216/24389,Uu=24/116,ta=24389/27,Zs=Gt.D50,ln=new ke({id:"lab",name:"Lab",coords:{l:{refRange:[0,100],name:"Lightness"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:Zs,base:Vs,fromBase(e){let t=e.map((r,i)=>r/Zs[i]).map(r=>r>dp?Math.cbrt(r):(ta*r+16)/116);return[116*t[1]-16,500*(t[0]-t[1]),200*(t[1]-t[2])]},toBase(e){let[t,r,i]=e,a=[];return a[1]=(t+16)/116,a[0]=r/500+a[1],a[2]=a[1]-i/200,[a[0]>Uu?Math.pow(a[0],3):(116*a[0]-16)/ta,e[0]>8?Math.pow((e[0]+16)/116,3):e[0]/ta,a[2]>Uu?Math.pow(a[2],3):(116*a[2]-16)/ta].map((s,l)=>s*Zs[l])},formats:{lab:{coords:["<percentage> | <number>","<number> | <percentage>","<number> | <percentage>"]}}});function kn(e){return typeof e!="number"?e:(e%360+360)%360}function Vu(e,t){let[r,i]=t,a=Ke(r),s=Ke(i);if(a&&s)return[r,i];if(a?r=i:s&&(i=r),e==="raw")return t;r=kn(r),i=kn(i);let l=i-r;return e==="increasing"?l<0&&(i+=360):e==="decreasing"?l>0&&(r+=360):e==="longer"?-180<l&&l<180&&(l>0?r+=360:i+=360):e==="shorter"&&(l>180?r+=360:l<-180&&(i+=360)),[r,i]}var cn=new ke({id:"lch",name:"LCH",coords:{l:{refRange:[0,100],name:"Lightness"},c:{refRange:[0,150],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:ln,fromBase(e){if(this.ε===void 0){let l=Object.values(this.base.coords)[1].refRange;this.ε=(l[1]-l[0])/1e5}let[t,r,i]=e,a=Math.abs(r)<this.ε&&Math.abs(i)<this.ε,s=a?null:kn(Math.atan2(i,r)*180/Math.PI);return[t,a?0:Math.sqrt(r**2+i**2),s]},toBase(e){let[t,r,i]=e,a=null,s=null;return Ke(i)||(r=r<0?0:r,a=r*Math.cos(i*Math.PI/180),s=r*Math.sin(i*Math.PI/180)),[t,a,s]},formats:{lch:{coords:["<percentage> | <number>","<number> | <percentage>","<number> | <angle>"]}}}),Zu=25**7,na=Math.PI,qu=180/na,fo=na/180;function ju(e){const t=e*e;return t*t*t*e}function Ku(e,t,{kL:r=1,kC:i=1,kH:a=1}={}){[e,t]=Re([e,t]);let[s,l,h]=ln.from(e),u=cn.from(ln,[s,l,h])[1],[f,p,b]=ln.from(t),w=cn.from(ln,[f,p,b])[1];u<0&&(u=0),w<0&&(w=0);let v=ju((u+w)/2),m=.5*(1-Math.sqrt(v/(v+Zu))),E=(1+m)*l,y=(1+m)*p,S=Math.sqrt(E**2+h**2),x=Math.sqrt(y**2+b**2),T=E===0&&h===0?0:Math.atan2(h,E),L=y===0&&b===0?0:Math.atan2(b,y);T<0&&(T+=2*na),L<0&&(L+=2*na),T*=qu,L*=qu;let D=f-s,K=x-S,V=L-T,ae=T+L,H=Math.abs(V),ge;S*x===0?ge=0:H<=180?ge=V:V>180?ge=V-360:V<-180?ge=V+360:an.warn("the unthinkable has happened");let _e=2*Math.sqrt(x*S)*Math.sin(ge*fo/2),P=(s+f)/2,X=(S+x)/2,A=ju(X),Q;S*x===0?Q=ae:H<=180?Q=ae/2:ae<360?Q=(ae+360)/2:Q=(ae-360)/2;let Ce=(P-50)**2,se=1+.015*Ce/Math.sqrt(20+Ce),Ie=1+.045*X,le=1;le-=.17*Math.cos((Q-30)*fo),le+=.24*Math.cos(2*Q*fo),le+=.32*Math.cos((3*Q+6)*fo),le-=.2*Math.cos((4*Q-63)*fo);let Ae=1+.015*X*le,W=30*Math.exp(-1*((Q-275)/25)**2),U=2*Math.sqrt(A/(A+Zu)),Se=-1*Math.sin(2*W*fo)*U,me=(D/(r*se))**2;return me+=(K/(i*Ie))**2,me+=(_e/(a*Ae))**2,me+=Se*(K/(i*Ie))*(_e/(a*Ae)),Math.sqrt(me)}var hp=[[.819022437996703,.3619062600528904,-.1288737815209879],[.0329836539323885,.9292868615863434,.0361446663506424],[.0481771893596242,.2642395317527308,.6335478284694309]],fp=[[1.2268798758459243,-.5578149944602171,.2813910456659647],[-.0405757452148008,1.112286803280317,-.0717110580655164],[-.0763729366746601,-.4214933324022432,1.5869240198367816]],pp=[[.210454268309314,.7936177747023054,-.0040720430116193],[1.9779985324311684,-2.42859224204858,.450593709617411],[.0259040424655478,.7827717124575296,-.8086757549230774]],fr=[[1,.3963377773761749,.2158037573099136],[1,-.1055613458156586,-.0638541728258133],[1,-.0894841775298119,-1.2914855480194092]],zn=new ke({id:"oklab",name:"Oklab",coords:{l:{refRange:[0,1],name:"Lightness"},a:{refRange:[-.4,.4]},b:{refRange:[-.4,.4]}},white:"D65",base:Pt,fromBase(e){let t=gt(e,hp);return t[0]=Math.cbrt(t[0]),t[1]=Math.cbrt(t[1]),t[2]=Math.cbrt(t[2]),gt(t,pp,t)},toBase(e){let t=gt(e,fr);return t[0]=t[0]**3,t[1]=t[1]**3,t[2]=t[2]**3,gt(t,fp,t)},formats:{oklab:{coords:["<percentage> | <number>","<number> | <percentage>","<number> | <percentage>"]}}});function qs(e,t){[e,t]=Re([e,t]);let[r,i,a]=zn.from(e),[s,l,h]=zn.from(t),u=r-s,f=i-l,p=a-h;return Math.sqrt(u**2+f**2+p**2)}var gp=75e-6;function Hr(e,t,{epsilon:r=gp}={}){e=Re(e),t||(t=e.space),t=ke.get(t);let i=e.coords;return t!==e.space&&(i=t.from(e)),t.inGamut(i,{epsilon:r})}function po(e){return{space:e.space,coords:e.coords.slice(),alpha:e.alpha}}function Yu(e,t,r="lab"){r=ke.get(r);let i=r.from(e),a=r.from(t);return Math.sqrt(i.reduce((s,l,h)=>{let u=a[h];return Ke(l)||Ke(u)?s:s+(u-l)**2},0))}function mp(e,t){return Yu(e,t,"lab")}var Xu=Math.PI/180;function vp(e,t,{l:r=2,c:i=1}={}){[e,t]=Re([e,t]);let[a,s,l]=ln.from(e),[,h,u]=cn.from(ln,[a,s,l]),[f,p,b]=ln.from(t),w=cn.from(ln,[f,p,b])[1];h<0&&(h=0),w<0&&(w=0);let v=a-f,m=h-w,E=s-p,y=l-b,S=E**2+y**2-m**2,x=.511;a>=16&&(x=.040975*a/(1+.01765*a));let T=.0638*h/(1+.0131*h)+.638,L;Ke(u)&&(u=0),u>=164&&u<=345?L=.56+Math.abs(.2*Math.cos((u+168)*Xu)):L=.36+Math.abs(.4*Math.cos((u+35)*Xu));let D=Math.pow(h,4),K=Math.sqrt(D/(D+1900)),V=T*(K*L+1-K),ae=(v/(r*x))**2;return ae+=(m/(i*T))**2,ae+=S/V**2,Math.sqrt(ae)}var Ju=203,js=new ke({id:"xyz-abs-d65",cssId:"--xyz-abs-d65",name:"Absolute XYZ D65",coords:{x:{refRange:[0,9504.7],name:"Xa"},y:{refRange:[0,1e4],name:"Ya"},z:{refRange:[0,10888.3],name:"Za"}},base:Pt,fromBase(e){return e.map(t=>t*Ju)},toBase(e){return e.map(t=>t/Ju)}}),ra=1.15,oa=.66,Qu=2610/2**14,bp=2**14/2610,ed=3424/2**12,td=2413/2**7,nd=2392/2**7,wp=1.7*2523/2**5,rd=2**5/(1.7*2523),ia=-.56,Ks=16295499532821565e-27,_p=[[.41478972,.579999,.014648],[-.20151,1.120649,.0531008],[-.0166008,.2648,.6684799]],yp=[[1.9242264357876067,-1.0047923125953657,.037651404030618],[.35031676209499907,.7264811939316552,-.06538442294808501],[-.09098281098284752,-.3127282905230739,1.5227665613052603]],kp=[[.5,.5,0],[3.524,-4.066708,.542708],[.199076,1.096799,-1.295875]],Ep=[[1,.13860504327153927,.05804731615611883],[1,-.1386050432715393,-.058047316156118904],[1,-.09601924202631895,-.811891896056039]],od=new ke({id:"jzazbz",name:"Jzazbz",coords:{jz:{refRange:[0,1],name:"Jz"},az:{refRange:[-.21,.21]},bz:{refRange:[-.21,.21]}},base:js,fromBase(e){let[t,r,i]=e,[a,s,l]=gt(gt([ra*t-(ra-1)*i,oa*r-(oa-1)*t,i],_p).map(function(h){return yt((ed+td*yt(h/1e4,Qu))/(1+nd*yt(h/1e4,Qu)),wp)}),kp);return[(1+ia)*a/(1+ia*a)-Ks,s,l]},toBase(e){let[t,r,i]=e,[a,s,l]=gt(gt([(t+Ks)/(1+ia-ia*(t+Ks)),r,i],Ep).map(function(u){return 1e4*yt((ed-yt(u,rd))/(nd*yt(u,rd)-td),bp)}),yp),h=(a+(ra-1)*l)/ra;return[h,(s+(oa-1)*h)/oa,l]},formats:{jzazbz:{coords:["<percentage> | <number>","<number> | <percentage>","<number> | <percentage>"]}}}),Ys=new ke({id:"jzczhz",name:"JzCzHz",coords:{jz:{refRange:[0,1],name:"Jz"},cz:{refRange:[0,.26],name:"Chroma"},hz:{refRange:[0,360],type:"angle",name:"Hue"}},base:od,fromBase:cn.fromBase,toBase:cn.toBase,formats:{jzczhz:{coords:["<percentage> | <number>","<number> | <percentage>","<number> | <angle>"]}}});function Ap(e,t){[e,t]=Re([e,t]);let[r,i,a]=Ys.from(e),[s,l,h]=Ys.from(t),u=r-s,f=i-l;Ke(a)&&Ke(h)?(a=0,h=0):Ke(a)?a=h:Ke(h)&&(h=a);let p=a-h,b=2*Math.sqrt(i*l)*Math.sin(p/2*(Math.PI/180));return Math.sqrt(u**2+f**2+b**2)}var id=3424/4096,ad=2413/128,sd=2392/128,ld=2610/16384,Sp=2523/32,Mp=16384/2610,cd=32/2523,xp=[[.3592832590121217,.6976051147779502,-.035891593232029],[-.1920808463704993,1.100476797037432,.0753748658519118],[.0070797844607479,.0748396662186362,.8433265453898765]],Ip=[[2048/4096,2048/4096,0],[6610/4096,-13613/4096,7003/4096],[17933/4096,-17390/4096,-543/4096]],Cp=[[.9999999999999998,.0086090370379328,.111029625003026],[.9999999999999998,-.0086090370379328,-.1110296250030259],[.9999999999999998,.5600313357106791,-.3206271749873188]],Op=[[2.0701522183894223,-1.3263473389671563,.2066510476294053],[.3647385209748072,.6805660249472273,-.0453045459220347],[-.0497472075358123,-.0492609666966131,1.1880659249923042]],Xs=new ke({id:"ictcp",name:"ICTCP",coords:{i:{refRange:[0,1],name:"I"},ct:{refRange:[-.5,.5],name:"CT"},cp:{refRange:[-.5,.5],name:"CP"}},base:js,fromBase(e){return Tp(gt(e,xp))},toBase(e){return gt(Lp(e),Op)},formats:{ictcp:{coords:["<percentage> | <number>","<number> | <percentage>","<number> | <percentage>"]}}});function Tp(e){return gt(e.map(function(t){return((id+ad*(t/1e4)**ld)/(1+sd*(t/1e4)**ld))**Sp}),Ip)}function Lp(e){return gt(e,Cp).map(function(t){return 1e4*(Math.max(t**cd-id,0)/(ad-sd*t**cd))**Mp})}function Rp(e,t){[e,t]=Re([e,t]);let[r,i,a]=Xs.from(e),[s,l,h]=Xs.from(t);return 720*Math.sqrt((r-s)**2+.25*(i-l)**2+(a-h)**2)}function Pp(e,t){[e,t]=Re([e,t]);let r=2,[i,a,s]=zn.from(e),[l,h,u]=zn.from(t),f=i-l,p=r*(a-h),b=r*(s-u);return Math.sqrt(f**2+p**2+b**2)}var $p=Gt.D65,ud=.42,dd=1/ud,Js=2*Math.PI,hd=[[.401288,.650173,-.051461],[-.250268,1.204414,.045854],[-.002079,.048952,.953127]],Dp=[[1.8620678550872327,-1.0112546305316843,.14918677544445175],[.38752654323613717,.6214474419314753,-.008973985167612518],[-.015841498849333856,-.03412293802851557,1.0499644368778496]],zp=[[460,451,288],[460,-891,-261],[460,-220,-6300]],Bp={dark:[.8,.525,.8],dim:[.9,.59,.9],average:[1,.69,1]},Gr={h:[20.14,90,164.25,237.53,380.14],e:[.8,.7,1,1.2,.8],H:[0,100,200,300,400]},Np=180/Math.PI,fd=Math.PI/180;function pd(e,t){return e.map(r=>{const i=yt(t*Math.abs(r)*.01,ud);return 400*Ji(i,r)/(i+27.13)})}function Fp(e,t){const r=100/t*27.13**dd;return e.map(i=>{const a=Math.abs(i);return Ji(r*yt(a/(400-a),dd),i)})}function Hp(e){let t=kn(e);t<=Gr.h[0]&&(t+=360);const r=Bu(Gr.h,t)-1,[i,a]=Gr.h.slice(r,r+2),[s,l]=Gr.e.slice(r,r+2),h=Gr.H[r],u=(t-i)/s;return h+100*u/(u+(a-t)/l)}function Gp(e){let t=(e%400+400)%400;const r=Math.floor(.01*t);t=t%100;const[i,a]=Gr.h.slice(r,r+2),[s,l]=Gr.e.slice(r,r+2);return kn((t*(l*i-s*a)-100*i*l)/(t*(l-s)-100*l))}function gd(e,t,r,i,a){const s={};s.discounting=a,s.refWhite=e,s.surround=i;const l=e.map(m=>m*100);s.la=t,s.yb=r;const h=l[1],u=gt(l,hd);let f=Bp[s.surround];const p=f[0];s.c=f[1],s.nc=f[2];const b=(1/(5*s.la+1))**4;s.fl=b*s.la+.1*(1-b)*(1-b)*Math.cbrt(5*s.la),s.flRoot=s.fl**.25,s.n=s.yb/h,s.z=1.48+Math.sqrt(s.n),s.nbb=.725*s.n**-.2,s.ncb=s.nbb;const w=Math.max(Math.min(p*(1-1/3.6*Math.exp((-s.la-42)/92)),1),0);s.dRgb=u.map(m=>ti(1,h/m,w)),s.dRgbInv=s.dRgb.map(m=>1/m);const v=pd(u.map((m,E)=>m*s.dRgb[E]),s.fl);return s.aW=s.nbb*(2*v[0]+v[1]+.05*v[2]),s}var md=gd($p,64/Math.PI*.2,20,"average",!1);function Qs(e,t){if(!(e.J!==void 0^e.Q!==void 0))throw new Error("Conversion requires one and only one: 'J' or 'Q'");if(!(e.C!==void 0^e.M!==void 0^e.s!==void 0))throw new Error("Conversion requires one and only one: 'C', 'M' or 's'");if(!(e.h!==void 0^e.H!==void 0))throw new Error("Conversion requires one and only one: 'h' or 'H'");if(e.J===0||e.Q===0)return[0,0,0];let r=0;e.h!==void 0?r=kn(e.h)*fd:r=Gp(e.H)*fd;const i=Math.cos(r),a=Math.sin(r);let s=0;e.J!==void 0?s=yt(e.J,1/2)*.1:e.Q!==void 0&&(s=.25*t.c*e.Q/((t.aW+4)*t.flRoot));let l=0;e.C!==void 0?l=e.C/s:e.M!==void 0?l=e.M/t.flRoot/s:e.s!==void 0&&(l=4e-4*e.s**2*(t.aW+4)/t.c);const h=yt(l*Math.pow(1.64-Math.pow(.29,t.n),-.73),10/9),u=.25*(Math.cos(r+2)+3.8),f=t.aW*yt(s,2/t.c/t.z),p=5e4/13*t.nc*t.ncb*u,b=f/t.nbb,w=23*(b+.305)*Hs(h,23*p+h*(11*i+108*a));return gt(Fp(gt([b,w*i,w*a],zp).map(v=>v*1/1403),t.fl).map((v,m)=>v*t.dRgbInv[m]),Dp).map(v=>v/100)}function vd(e,t){const r=pd(gt(e.map(E=>E*100),hd).map((E,y)=>E*t.dRgb[y]),t.fl),i=r[0]+(-12*r[1]+r[2])/11,a=(r[0]+r[1]-2*r[2])/9,s=(Math.atan2(a,i)%Js+Js)%Js,l=.25*(Math.cos(s+2)+3.8),h=yt(5e4/13*t.nc*t.ncb*Hs(l*Math.sqrt(i**2+a**2),r[0]+r[1]+1.05*r[2]+.305),.9)*Math.pow(1.64-Math.pow(.29,t.n),.73),u=yt(t.nbb*(2*r[0]+r[1]+.05*r[2])/t.aW,.5*t.c*t.z),f=100*yt(u,2),p=4/t.c*u*(t.aW+4)*t.flRoot,b=h*u,w=b*t.flRoot,v=kn(s*Np),m=Hp(v);return{J:f,C:b,h:v,s:50*yt(t.c*h/(t.aW+4),1/2),Q:p,M:w,H:m}}var Wp=new ke({id:"cam16-jmh",cssId:"--cam16-jmh",name:"CAM16-JMh",coords:{j:{refRange:[0,100],name:"J"},m:{refRange:[0,105],name:"Colorfulness"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:Pt,fromBase(e){this.ε===void 0&&(this.ε=Object.values(this.coords)[1].refRange[1]/1e5);const t=vd(e,md),r=Math.abs(t.M)<this.ε;return[t.J,r?0:t.M,r?null:t.h]},toBase(e){return Qs({J:e[0],M:e[1],h:e[2]},md)}}),Up=Gt.D65,Vp=216/24389,bd=24389/27;function Zp(e){return 116*(e>Vp?Math.cbrt(e):(bd*e+16)/116)-16}function el(e){return e>8?Math.pow((e+16)/116,3):e/bd}function qp(e,t){let[r,i,a]=e,s=[],l=0;if(a===0)return[0,0,0];let h=el(a);a>0?l=.00379058511492914*a**2+.608983189401032*a+.9155088574762233:l=9514440756550361e-21*a**2+.08693057439788597*a-21.928975842194614;const u=2e-12,f=15;let p=0,b=1/0;for(;p<=f;){s=Qs({J:l,C:i,h:r},t);const w=Math.abs(s[1]-h);if(w<b){if(w<=u)return s;b=w}l=l-(s[1]-h)*l/(2*s[1]),p+=1}return Qs({J:l,C:i,h:r},t)}function jp(e,t){const r=Zp(e[1]);if(r===0)return[0,0,0];const i=vd(e,tl);return[kn(i.h),i.C,r]}var tl=gd(Up,200/Math.PI*el(50),el(50)*100,"average",!1),ri=new ke({id:"hct",name:"HCT",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},c:{refRange:[0,145],name:"Colorfulness"},t:{refRange:[0,100],name:"Tone"}},base:Pt,fromBase(e){this.ε===void 0&&(this.ε=Object.values(this.coords)[1].refRange[1]/1e5);let t=jp(e);return t[1]<this.ε&&(t[1]=0,t[0]=null),t},toBase(e){return qp(e,tl)},formats:{color:{id:"--hct",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}}),Kp=Math.PI/180,wd=[1,.007,.0228];function _d(e){e[1]<0&&(e=ri.fromBase(ri.toBase(e)));const t=Math.log(Math.max(1+wd[2]*e[1]*tl.flRoot,1))/wd[2],r=e[0]*Kp,i=t*Math.cos(r),a=t*Math.sin(r);return[e[2],i,a]}function Yp(e,t){[e,t]=Re([e,t]);let[r,i,a]=_d(ri.from(e)),[s,l,h]=_d(ri.from(t));return Math.sqrt((r-s)**2+(i-l)**2+(a-h)**2)}var go={deltaE76:mp,deltaECMC:vp,deltaE2000:Ku,deltaEJz:Ap,deltaEITP:Rp,deltaEOK:qs,deltaEOK2:Pp,deltaEHCT:Yp};function Xp(e){return Math.max(parseFloat(`1e${(e?Math.floor(Math.log10(Math.abs(e))):0)-2}`),1e-6)}var yd={hct:{method:"hct.c",jnd:2,deltaEMethod:"hct",blackWhiteClamp:{}},"hct-tonal":{method:"hct.c",jnd:0,deltaEMethod:"hct",blackWhiteClamp:{channel:"hct.t",min:0,max:100}}};function pr(e,{method:t=an.gamut_mapping,space:r=void 0,deltaEMethod:i="",jnd:a=2,blackWhiteClamp:s=void 0}={}){if(e=Re(e),uo(arguments[1])?r=arguments[1]:r||(r=e.space),r=ke.get(r),Hr(e,r,{epsilon:0}))return e;let l;if(t==="css")l=Jp(e,{space:r});else{if(t!=="clip"&&!Hr(e,r)){Object.prototype.hasOwnProperty.call(yd,t)&&({method:t,jnd:a,deltaEMethod:i,blackWhiteClamp:s}=yd[t]);let h=Ku;if(i!==""){for(let f in go)if("deltae"+i.toLowerCase()===f.toLowerCase()){h=go[f];break}}a===0&&(a=1e-16);let u=pr(rt(e,r),{method:"clip",space:r});if(h(e,u)>a){if(s&&Object.keys(s).length===3){let S=ke.resolveCoord(s.channel),x=sn(rt(e,S.space),S.id);if(Ke(x)&&(x=0),x>=s.max)return rt({space:"xyz-d65",coords:Gt.D65},e.space);if(x<=s.min)return rt({space:"xyz-d65",coords:[0,0,0]},e.space)}let f=ke.resolveCoord(t),p=f.space,b=f.id,w=rt(e,p);w.coords.forEach((S,x)=>{Ke(S)&&(w.coords[x]=0)});let v=(f.range||f.refRange)[0],m=Xp(a),E=v,y=sn(w,b);for(;y-E>m;){let S=po(w);S=pr(S,{space:r,method:"clip"}),h(w,S)-a<m?E=sn(w,b):y=sn(w,b),Xn(w,b,(E+y)/2)}l=rt(w,r)}else l=u}else l=rt(e,r);if(t==="clip"||!Hr(l,r,{epsilon:0})){let h=Object.values(r.coords).map(u=>u.range||[]);l.coords=l.coords.map((u,f)=>{let[p,b]=h[f];return p!==void 0&&(u=Math.max(p,u)),b!==void 0&&(u=Math.min(u,b)),u})}}return r!==e.space&&(l=rt(l,e.space)),e.coords=l.coords,e}pr.returns="color";var kd={WHITE:{space:zn,coords:[1,0,0],alpha:1},BLACK:{space:zn,coords:[0,0,0],alpha:1}};function Jp(e,{space:t}={}){e=Re(e),t||(t=e.space),t=ke.get(t);const a=ke.get("oklch");if(t.isUnbounded)return rt(e,t);const s=rt(e,a);let l=s.coords[0];if(l>=1){const m=rt(kd.WHITE,t);return m.alpha=e.alpha,rt(m,t)}if(l<=0){const m=rt(kd.BLACK,t);return m.alpha=e.alpha,rt(m,t)}if(Hr(s,t,{epsilon:0}))return rt(s,t);function h(m){const E=rt(m,t),y=Object.values(t.coords);return E.coords=E.coords.map((S,x)=>{if("range"in y[x]){const[T,L]=y[x].range;return Xi(T,S,L)}return S}),E}let u=0,f=s.coords[1],p=!0,b=po(s),w=h(b),v=qs(w,b);if(v<.02)return w;for(;f-u>1e-4;){const m=(u+f)/2;if(b.coords[1]=m,p&&Hr(b,t,{epsilon:0}))u=m;else if(w=h(b),v=qs(w,b),v<.02){if(.02-v<1e-4)break;p=!1,u=m}else f=m}return w}function rt(e,t,{inGamut:r}={}){e=Re(e),t=ke.get(t);let i=t.from(e),a={space:t,coords:i,alpha:e.alpha};return r&&(a=pr(a,r===!0?void 0:r)),a}rt.returns="color";function oi(e,t={}){let{precision:r=an.precision,format:i,inGamut:a=!0,coords:s,alpha:l,commas:h}=t,u,f=Re(e),p=i,b=f.parseMeta;b&&!i&&(b.format.canSerialize()&&(i=b.format,p=b.formatId),s??=b.types,l??=b.alphaType,h??=b.commas),p&&(i=f.space.getFormat(i)??ke.findFormat(p)),i||(i=f.space.getFormat("default")??ke.DEFAULT_FORMAT,p=i.name),i&&i.space&&i.space!==f.space&&(f=rt(f,i.space));let w=f.coords.slice();if(a||=i.toGamut,a&&!Hr(f)&&(w=pr(po(f),a===!0?void 0:a).coords),i.type==="custom")if(i.serialize)u=i.serialize(w,f.alpha,t);else throw new TypeError(`format ${p} can only be used to parse colors, not for serialization`);else{let v=i.name||"color",m=i.serializeCoords(w,r,s);if(v==="color"){let T=i.id||i.ids?.[0]||f.space.cssId||f.space.id;m.unshift(T)}let E=f.alpha;l!==void 0&&typeof l!="object"&&(l=typeof l=="string"?{type:l}:{include:l});let y=l?.type??"<number>",S=l?.include===!0||i.alpha===!0||l?.include!==!1&&i.alpha!==!1&&E<1,x="";if(h??=i.commas,S){if(r!==null){let T;y==="<percentage>"&&(T="%",E*=100),E=Bs(E,{precision:r,unit:T})}x=`${h?",":" /"} ${E}`}u=`${v}(${m.join(h?", ":" ")}${x})`}return u}var ii=new Bt({id:"rec2020-linear",cssId:"--rec2020-linear",name:"Linear REC.2020",white:"D65",toXYZ_M:[[.6369580483012914,.14461690358620832,.1688809751641721],[.2627002120112671,.6779980715188708,.05930171646986196],[0,.028072693049087428,1.060985057710791]],fromXYZ_M:[[1.716651187971268,-.355670783776392,-.25336628137366],[-.666684351832489,1.616481236634939,.0157685458139111],[.017639857445311,-.042770613257809,.942103121235474]]}),Ed=new Bt({id:"rec2020",name:"REC.2020",base:ii,toBase(e){return e.map(function(t){let r=t<0?-1:1,i=t*r;return r*Math.pow(i,2.4)})},fromBase(e){return e.map(function(t){let r=t<0?-1:1,i=t*r;return r*Math.pow(i,1/2.4)})}}),Ad=new Bt({id:"p3-linear",cssId:"display-p3-linear",name:"Linear P3",white:"D65",toXYZ_M:[[.4865709486482162,.26566769316909306,.1982172852343625],[.2289745640697488,.6917385218365064,.079286914093745],[0,.04511338185890264,1.043944368900976]],fromXYZ_M:[[2.493496911941425,-.9313836179191239,-.40271078445071684],[-.8294889695615747,1.7626640603183463,.023624685841943577],[.03584583024378447,-.07617238926804182,.9568845240076872]]}),Qp=[[.41239079926595934,.357584339383878,.1804807884018343],[.21263900587151027,.715168678767756,.07219231536073371],[.01933081871559182,.11919477979462598,.9505321522496607]],Mt=[[3.2409699419045226,-1.537383177570094,-.4986107602930034],[-.9692436362808796,1.8759675015077202,.04155505740717559],[.05563007969699366,-.20397695888897652,1.0569715142428786]],Sd=new Bt({id:"srgb-linear",name:"Linear sRGB",white:"D65",toXYZ_M:Qp,fromXYZ_M:Mt}),Md={aliceblue:[240/255,248/255,1],antiquewhite:[250/255,235/255,215/255],aqua:[0,1,1],aquamarine:[127/255,1,212/255],azure:[240/255,1,1],beige:[245/255,245/255,220/255],bisque:[1,228/255,196/255],black:[0,0,0],blanchedalmond:[1,235/255,205/255],blue:[0,0,1],blueviolet:[138/255,43/255,226/255],brown:[165/255,42/255,42/255],burlywood:[222/255,184/255,135/255],cadetblue:[95/255,158/255,160/255],chartreuse:[127/255,1,0],chocolate:[210/255,105/255,30/255],coral:[1,127/255,80/255],cornflowerblue:[100/255,149/255,237/255],cornsilk:[1,248/255,220/255],crimson:[220/255,20/255,60/255],cyan:[0,1,1],darkblue:[0,0,139/255],darkcyan:[0,139/255,139/255],darkgoldenrod:[184/255,134/255,11/255],darkgray:[169/255,169/255,169/255],darkgreen:[0,100/255,0],darkgrey:[169/255,169/255,169/255],darkkhaki:[189/255,183/255,107/255],darkmagenta:[139/255,0,139/255],darkolivegreen:[85/255,107/255,47/255],darkorange:[1,140/255,0],darkorchid:[153/255,50/255,204/255],darkred:[139/255,0,0],darksalmon:[233/255,150/255,122/255],darkseagreen:[143/255,188/255,143/255],darkslateblue:[72/255,61/255,139/255],darkslategray:[47/255,79/255,79/255],darkslategrey:[47/255,79/255,79/255],darkturquoise:[0,206/255,209/255],darkviolet:[148/255,0,211/255],deeppink:[1,20/255,147/255],deepskyblue:[0,191/255,1],dimgray:[105/255,105/255,105/255],dimgrey:[105/255,105/255,105/255],dodgerblue:[30/255,144/255,1],firebrick:[178/255,34/255,34/255],floralwhite:[1,250/255,240/255],forestgreen:[34/255,139/255,34/255],fuchsia:[1,0,1],gainsboro:[220/255,220/255,220/255],ghostwhite:[248/255,248/255,1],gold:[1,215/255,0],goldenrod:[218/255,165/255,32/255],gray:[128/255,128/255,128/255],green:[0,128/255,0],greenyellow:[173/255,1,47/255],grey:[128/255,128/255,128/255],honeydew:[240/255,1,240/255],hotpink:[1,105/255,180/255],indianred:[205/255,92/255,92/255],indigo:[75/255,0,130/255],ivory:[1,1,240/255],khaki:[240/255,230/255,140/255],lavender:[230/255,230/255,250/255],lavenderblush:[1,240/255,245/255],lawngreen:[124/255,252/255,0],lemonchiffon:[1,250/255,205/255],lightblue:[173/255,216/255,230/255],lightcoral:[240/255,128/255,128/255],lightcyan:[224/255,1,1],lightgoldenrodyellow:[250/255,250/255,210/255],lightgray:[211/255,211/255,211/255],lightgreen:[144/255,238/255,144/255],lightgrey:[211/255,211/255,211/255],lightpink:[1,182/255,193/255],lightsalmon:[1,160/255,122/255],lightseagreen:[32/255,178/255,170/255],lightskyblue:[135/255,206/255,250/255],lightslategray:[119/255,136/255,153/255],lightslategrey:[119/255,136/255,153/255],lightsteelblue:[176/255,196/255,222/255],lightyellow:[1,1,224/255],lime:[0,1,0],limegreen:[50/255,205/255,50/255],linen:[250/255,240/255,230/255],magenta:[1,0,1],maroon:[128/255,0,0],mediumaquamarine:[102/255,205/255,170/255],mediumblue:[0,0,205/255],mediumorchid:[186/255,85/255,211/255],mediumpurple:[147/255,112/255,219/255],mediumseagreen:[60/255,179/255,113/255],mediumslateblue:[123/255,104/255,238/255],mediumspringgreen:[0,250/255,154/255],mediumturquoise:[72/255,209/255,204/255],mediumvioletred:[199/255,21/255,133/255],midnightblue:[25/255,25/255,112/255],mintcream:[245/255,1,250/255],mistyrose:[1,228/255,225/255],moccasin:[1,228/255,181/255],navajowhite:[1,222/255,173/255],navy:[0,0,128/255],oldlace:[253/255,245/255,230/255],olive:[128/255,128/255,0],olivedrab:[107/255,142/255,35/255],orange:[1,165/255,0],orangered:[1,69/255,0],orchid:[218/255,112/255,214/255],palegoldenrod:[238/255,232/255,170/255],palegreen:[152/255,251/255,152/255],paleturquoise:[175/255,238/255,238/255],palevioletred:[219/255,112/255,147/255],papayawhip:[1,239/255,213/255],peachpuff:[1,218/255,185/255],peru:[205/255,133/255,63/255],pink:[1,192/255,203/255],plum:[221/255,160/255,221/255],powderblue:[176/255,224/255,230/255],purple:[128/255,0,128/255],rebeccapurple:[102/255,51/255,153/255],red:[1,0,0],rosybrown:[188/255,143/255,143/255],royalblue:[65/255,105/255,225/255],saddlebrown:[139/255,69/255,19/255],salmon:[250/255,128/255,114/255],sandybrown:[244/255,164/255,96/255],seagreen:[46/255,139/255,87/255],seashell:[1,245/255,238/255],sienna:[160/255,82/255,45/255],silver:[192/255,192/255,192/255],skyblue:[135/255,206/255,235/255],slateblue:[106/255,90/255,205/255],slategray:[112/255,128/255,144/255],slategrey:[112/255,128/255,144/255],snow:[1,250/255,250/255],springgreen:[0,1,127/255],steelblue:[70/255,130/255,180/255],tan:[210/255,180/255,140/255],teal:[0,128/255,128/255],thistle:[216/255,191/255,216/255],tomato:[1,99/255,71/255],turquoise:[64/255,224/255,208/255],violet:[238/255,130/255,238/255],wheat:[245/255,222/255,179/255],white:[1,1,1],whitesmoke:[245/255,245/255,245/255],yellow:[1,1,0],yellowgreen:[154/255,205/255,50/255]},xd=Array(3).fill("<percentage> | <number>[0, 255]"),Id=Array(3).fill("<number>[0, 255]"),Wr=new Bt({id:"srgb",name:"sRGB",base:Sd,fromBase:e=>e.map(t=>{let r=t<0?-1:1,i=t*r;return i>.0031308?r*(1.055*i**(1/2.4)-.055):12.92*t}),toBase:e=>e.map(t=>{let r=t<0?-1:1,i=t*r;return i<=.04045?t/12.92:r*((i+.055)/1.055)**2.4}),formats:{rgb:{coords:xd},rgb_number:{name:"rgb",commas:!0,coords:Id,alpha:!1},color:{},rgba:{coords:xd,commas:!0,alpha:!0},rgba_number:{name:"rgba",commas:!0,coords:Id},hex:{type:"custom",toGamut:!0,test:e=>/^#(([a-f0-9]{2}){3,4}|[a-f0-9]{3,4})$/i.test(e),parse(e){e.length<=5&&(e=e.replace(/[a-f0-9]/gi,"$&$&"));let t=[];return e.replace(/[a-f0-9]{2}/gi,r=>{t.push(parseInt(r,16)/255)}),{spaceId:"srgb",coords:t.slice(0,3),alpha:t.slice(3)[0]}},serialize:(e,t,{collapse:r=!0,alpha:i}={})=>{(i!==!1&&t<1||i===!0)&&e.push(t),e=e.map(s=>Math.round(s*255));let a=r&&e.every(s=>s%17===0);return"#"+e.map(s=>a?(s/17).toString(16):s.toString(16).padStart(2,"0")).join("")}},keyword:{type:"custom",test:e=>/^[a-z]+$/i.test(e),parse(e){e=e.toLowerCase();let t={spaceId:"srgb",coords:null,alpha:1};if(e==="transparent"?(t.coords=Md.black,t.alpha=0):t.coords=Md[e],t.coords)return t}}}}),Cd=new Bt({id:"p3",cssId:"display-p3",name:"P3",base:Ad,fromBase:Wr.fromBase,toBase:Wr.toBase});an.display_space=Wr;var eg;if(typeof CSS<"u"&&CSS.supports)for(let e of[ln,Ed,Cd]){let t=oi({space:e,coords:e.getMinCoords(),alpha:1});if(CSS.supports("color",t)){an.display_space=e;break}}function tg(e,{space:t=an.display_space,...r}={}){e=Re(e);let i=oi(e,r);if(typeof CSS>"u"||CSS.supports("color",i)||!an.display_space)i=new String(i),i.color=e;else{let a=e;if((e.coords.some(Ke)||Ke(e.alpha))&&!(eg??=CSS.supports("color","hsl(none 50% 50%)"))&&(a=po(e),a.coords=a.coords.map(_t),a.alpha=_t(a.alpha),i=oi(a,r),CSS.supports("color",i)))return i=new String(i),i.color=a,i;a=rt(a,t),i=new String(oi(a,r)),i.color=a}return i}function ng(e,t,{space:r,hue:i="shorter"}={}){e=Re(e),r||=e.space,r=ke.get(r);let a=Object.values(r.coords);[e,t]=[e,t].map(f=>rt(f,r));let[s,l]=[e,t].map(f=>f.coords),h=s.map((f,p)=>{let b=a[p],w=l[p];return b.type==="angle"&&([f,w]=Vu(i,[f,w])),Od(f,w)}),u=Od(e.alpha,t.alpha);return{space:r,coords:h,alpha:u}}function Od(e,t){return Ke(e)||Ke(t)?e===t?null:0:e-t}function rg(e,t){return e=Re(e),t=Re(t),e.space===t.space&&e.alpha===t.alpha&&e.coords.every((r,i)=>r===t.coords[i])}function gr(e){return sn(e,[Pt,"y"])}function Td(e,t){Xn(e,[Pt,"y"],t)}function og(e){Object.defineProperty(e.prototype,"luminance",{get(){return gr(this)},set(t){Td(this,t)}})}var ig=Object.freeze({__proto__:null,getLuminance:gr,register:og,setLuminance:Td});function ag(e,t){e=Re(e),t=Re(t);let r=Math.max(gr(e),0),i=Math.max(gr(t),0);return i>r&&([r,i]=[i,r]),(r+.05)/(i+.05)}var sg=.56,lg=.57,cg=.62,ug=.65,Ld=.022,dg=1.414,hg=.1,fg=5e-4,pg=1.14,Rd=.027,gg=1.14;function Pd(e){return e>=Ld?e:e+(Ld-e)**dg}function mo(e){return(e<0?-1:1)*Math.pow(Math.abs(e),2.4)}function mg(e,t){t=Re(t),e=Re(e);let r,i,a,s,l,h;t=rt(t,"srgb"),[s,l,h]=t.coords.map(v=>Ke(v)?0:v);let u=mo(s)*.2126729+mo(l)*.7151522+mo(h)*.072175;e=rt(e,"srgb"),[s,l,h]=e.coords.map(v=>Ke(v)?0:v);let f=mo(s)*.2126729+mo(l)*.7151522+mo(h)*.072175,p=Pd(u),b=Pd(f),w=b>p;return Math.abs(b-p)<fg?i=0:w?(r=b**sg-p**lg,i=r*pg):(r=b**ug-p**cg,i=r*gg),Math.abs(i)<hg?a=0:i>0?a=i-Rd:a=i+Rd,a*100}function vg(e,t){e=Re(e),t=Re(t);let r=Math.max(gr(e),0),i=Math.max(gr(t),0);i>r&&([r,i]=[i,r]);let a=r+i;return a===0?0:(r-i)/a}var bg=5e4;function wg(e,t){e=Re(e),t=Re(t);let r=Math.max(gr(e),0),i=Math.max(gr(t),0);return i>r&&([r,i]=[i,r]),i===0?bg:(r-i)/i}function _g(e,t){e=Re(e),t=Re(t);let r=sn(e,[ln,"l"]),i=sn(t,[ln,"l"]);return Math.abs(r-i)}var yg=216/24389,$d=24/116,aa=24389/27,nl=Gt.D65,rl=new ke({id:"lab-d65",name:"Lab D65",coords:{l:{refRange:[0,100],name:"Lightness"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:nl,base:Pt,fromBase(e){let t=e.map((r,i)=>r/nl[i]).map(r=>r>yg?Math.cbrt(r):(aa*r+16)/116);return[116*t[1]-16,500*(t[0]-t[1]),200*(t[1]-t[2])]},toBase(e){let t=[];return t[1]=(e[0]+16)/116,t[0]=e[1]/500+t[1],t[2]=t[1]-e[2]/200,[t[0]>$d?Math.pow(t[0],3):(116*t[0]-16)/aa,e[0]>8?Math.pow((e[0]+16)/116,3):e[0]/aa,t[2]>$d?Math.pow(t[2],3):(116*t[2]-16)/aa].map((r,i)=>r*nl[i])},formats:{"lab-d65":{coords:["<number> | <percentage>","<number> | <percentage>","<number> | <percentage>"]}}}),ol=Math.pow(5,.5)*.5+.5;function kg(e,t){e=Re(e),t=Re(t);let r=sn(e,[rl,"l"]),i=sn(t,[rl,"l"]),a=Math.abs(Math.pow(r,ol)-Math.pow(i,ol)),s=Math.pow(a,1/ol)*Math.SQRT2-40;return s<7.5?0:s}var sa=Object.freeze({__proto__:null,contrastAPCA:mg,contrastDeltaPhi:kg,contrastLstar:_g,contrastMichelson:vg,contrastWCAG21:ag,contrastWeber:wg});function Eg(e,t,r){uo(r)&&(r={algorithm:r});let{algorithm:i,...a}=r||{};if(!i){let s=Object.keys(sa).map(l=>l.replace(/^contrast/,"")).join(", ");throw new TypeError(`contrast() function needs a contrast algorithm. Please specify one of: ${s}`)}e=Re(e),t=Re(t);for(let s in sa)if("contrast"+i.toLowerCase()===s.toLowerCase())return sa[s](e,t,a);throw new TypeError(`Unknown contrast algorithm: ${i}`)}function la(e){let[t,r,i]=ni(e,Pt),a=t+15*r+3*i;return[4*t/a,9*r/a]}function Dd(e){let[t,r,i]=ni(e,Pt),a=t+r+i;return[t/a,r/a]}function Ag(e){Object.defineProperty(e.prototype,"uv",{get(){return la(this)}}),Object.defineProperty(e.prototype,"xy",{get(){return Dd(this)}})}var Sg=Object.freeze({__proto__:null,register:Ag,uv:la,xy:Dd});function ai(e,t,r={}){uo(r)&&(r={method:r});let{method:i=an.deltaE,...a}=r;for(let s in go)if("deltae"+i.toLowerCase()===s.toLowerCase())return go[s](e,t,a);throw new TypeError(`Unknown deltaE method: ${i}`)}function zd(e,t=.25){return Xn(e,[ke.get("oklch","lch"),"l"],r=>r*(1+t))}function Bd(e,t=.25){return Xn(e,[ke.get("oklch","lch"),"l"],r=>r*(1-t))}zd.returns="color",Bd.returns="color";var Mg=Object.freeze({__proto__:null,darken:Bd,lighten:zd});function Nd(e,t,r,i={}){return[e,t]=[Re(e),Re(t)],dr(r)==="object"&&([r,i]=[.5,r]),si(e,t,i)(r??.5)}function Fd(e,t,r={}){let i;il(e)&&([i,r]=[e,t],[e,t]=i.rangeArgs.colors);let{maxDeltaE:a,deltaEMethod:s,steps:l=2,maxSteps:h=1e3,...u}=r;i||([e,t]=[Re(e),Re(t)],i=si(e,t,u));let f=ai(e,t),p=a>0?Math.max(l,Math.ceil(f/a)+1):l,b=[];if(h!==void 0&&(p=Math.min(p,h)),p===1)b=[{p:.5,color:i(.5)}];else{let w=1/(p-1);b=Array.from({length:p},(v,m)=>{let E=m*w;return{p:E,color:i(E)}})}if(a>0){let w=b.reduce((v,m,E)=>{if(E===0)return 0;let y=ai(m.color,b[E-1].color,s);return Math.max(v,y)},0);for(;w>a;){w=0;for(let v=1;v<b.length&&b.length<h;v++){let m=b[v-1],E=b[v],y=(E.p+m.p)/2,S=i(y);w=Math.max(w,ai(S,m.color),ai(S,E.color)),b.splice(v,0,{p:y,color:i(y)}),v++}}}return b=b.map(w=>w.color),b}function si(e,t,r={}){if(il(e)){let[u,f]=[e,t];return si(...u.rangeArgs.colors,{...u.rangeArgs.options,...f})}let{space:i,outputSpace:a,progression:s,premultiplied:l}=r;e=Re(e),t=Re(t),e=po(e),t=po(t);let h={colors:[e,t],options:r};if(i?i=ke.get(i):i=ke.registry[an.interpolationSpace]||e.space,a=a?ke.get(a):i,e=rt(e,i),t=rt(t,i),e=pr(e),t=pr(t),i.coords.h&&i.coords.h.type==="angle"){let u=r.hue=r.hue||"shorter",f=[i,"h"],[p,b]=[sn(e,f),sn(t,f)];Ke(p)&&!Ke(b)?p=b:Ke(b)&&!Ke(p)&&(b=p),[p,b]=Vu(u,[p,b]),Xn(e,f,p),Xn(t,f,b)}return l&&(e.coords=e.coords.map(u=>u*e.alpha),t.coords=t.coords.map(u=>u*t.alpha)),Object.assign(u=>{u=s?s(u):u;let f=e.coords.map((w,v)=>{let m=t.coords[v];return ti(w,m,u)}),p=ti(e.alpha,t.alpha,u),b={space:i,coords:f,alpha:p};return l&&(b.coords=b.coords.map(w=>w/p)),a!==i&&(b=rt(b,a)),b},{rangeArgs:h})}function il(e){return dr(e)==="function"&&!!e.rangeArgs}an.interpolationSpace="lab";function xg(e){e.defineFunction("mix",Nd,{returns:"color"}),e.defineFunction("range",si,{returns:"function<color>"}),e.defineFunction("steps",Fd,{returns:"array<color>"})}var Ig=Object.freeze({__proto__:null,isRange:il,mix:Nd,range:si,register:xg,steps:Fd}),Cg=new ke({id:"hsl",name:"HSL",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:Wr,fromBase:e=>{let t=Math.max(...e),r=Math.min(...e),[i,a,s]=e,[l,h,u]=[null,0,(r+t)/2],f=t-r;if(f!==0){switch(h=u===0||u===1?0:(t-u)/Math.min(u,1-u),t){case i:l=(a-s)/f+(a<s?6:0);break;case a:l=(s-i)/f+2;break;case s:l=(i-a)/f+4}l=l*60}return h<0&&(l+=180,h=Math.abs(h)),l>=360&&(l-=360),[l,h*100,u*100]},toBase:e=>{let[t,r,i]=e;t=t%360,t<0&&(t+=360),r/=100,i/=100;function a(s){let l=(s+t/30)%12,h=r*Math.min(i,1-i);return i-h*Math.max(-1,Math.min(l-3,9-l,1))}return[a(0),a(8),a(4)]},formats:{hsl:{coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]},hsla:{coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"],commas:!0,alpha:!0}}}),Hd=new ke({id:"hsv",name:"HSV",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},v:{range:[0,100],name:"Value"}},base:Wr,fromBase(e){let t=Math.max(...e),r=Math.min(...e),[i,a,s]=e,[l,h,u]=[null,0,t],f=t-r;if(f!==0){switch(t){case i:l=(a-s)/f+(a<s?6:0);break;case a:l=(s-i)/f+2;break;case s:l=(i-a)/f+4}l=l*60}return u&&(h=f/u),l>=360&&(l-=360),[l,h*100,u*100]},toBase(e){let[t,r,i]=e;t=t%360,t<0&&(t+=360),r/=100,i/=100;function a(s){let l=(s+t/60)%6;return i-i*r*Math.max(0,Math.min(l,4-l,1))}return[a(5),a(3),a(1)]},formats:{color:{id:"--hsv",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}}),Og=new ke({id:"hwb",name:"HWB",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},w:{range:[0,100],name:"Whiteness"},b:{range:[0,100],name:"Blackness"}},base:Hd,fromBase(e){let[t,r,i]=e;return[t,i*(100-r)/100,100-i]},toBase(e){let[t,r,i]=e;r/=100,i/=100;let a=r+i;if(a>=1)return[t,0,r/a*100];let s=1-i;return[t,(s===0?0:1-r/s)*100,s*100]},formats:{hwb:{coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}}),Gd=new Bt({id:"a98rgb-linear",cssId:"--a98-rgb-linear",name:"Linear Adobe® 98 RGB compatible",white:"D65",toXYZ_M:[[.5766690429101305,.1855582379065463,.1882286462349947],[.29734497525053605,.6273635662554661,.07529145849399788],[.02703136138641234,.07068885253582723,.9913375368376388]],fromXYZ_M:[[2.0415879038107465,-.5650069742788596,-.34473135077832956],[-.9692436362808795,1.8759675015077202,.04155505740717557],[.013444280632031142,-.11836239223101838,1.0151749943912054]]}),Tg=new Bt({id:"a98rgb",cssId:"a98-rgb",name:"Adobe® 98 RGB compatible",base:Gd,toBase:e=>e.map(t=>Math.pow(Math.abs(t),563/256)*Math.sign(t)),fromBase:e=>e.map(t=>Math.pow(Math.abs(t),256/563)*Math.sign(t))}),Wd=new Bt({id:"prophoto-linear",cssId:"--prophoto-rgb-linear",name:"Linear ProPhoto",white:"D50",base:Vs,toXYZ_M:[[.7977666449006423,.13518129740053308,.0313477341283922],[.2880748288194013,.711835234241873,8993693872564e-17],[0,0,.8251046025104602]],fromXYZ_M:[[1.3457868816471583,-.25557208737979464,-.05110186497554526],[-.5446307051249019,1.5082477428451468,.02052744743642139],[0,0,1.2119675456389452]]}),Lg=1/512,Rg=16/512,Pg=new Bt({id:"prophoto",cssId:"prophoto-rgb",name:"ProPhoto",base:Wd,toBase(e){return e.map(t=>{let r=t<0?-1:1,i=t*r;return i<Rg?t/16:r*i**1.8})},fromBase(e){return e.map(t=>{let r=t<0?-1:1,i=t*r;return i>=Lg?r*i**(1/1.8):16*t})}}),ca=1.09929682680944,Ud=.018053968510807,$g=new Bt({id:"--rec2020-oetf",name:"REC.2020_Scene_Referred",base:ii,referred:"scene",toBase(e){return e.map(function(t){let r=t<0?-1:1,i=t*r;return i<Ud*4.5?t/4.5:r*Math.pow((i+ca-1)/ca,1/.45)})},fromBase(e){return e.map(function(t){let r=t<0?-1:1,i=t*r;return i>=Ud?r*(ca*Math.pow(i,.45)-(ca-1)):4.5*t})}}),Dg=new ke({id:"oklch",name:"OkLCh",coords:{l:{refRange:[0,1],name:"Lightness"},c:{refRange:[0,.4],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},white:"D65",base:zn,fromBase:cn.fromBase,toBase:cn.toBase,formats:{oklch:{coords:["<percentage> | <number>","<number> | <percentage>","<number> | <angle>"]}}}),vo=2*Math.PI,ua=[[4.076741636075958,-3.307711539258063,.2309699031821043],[-1.2684379732850315,2.609757349287688,-.341319376002657],[-.0041960761386756,-.7034186179359362,1.7076146940746117]],da=[[[-1.8817031,-.80936501],[1.19086277,1.76576728,.59662641,.75515197,.56771245]],[[1.8144408,-1.19445267],[.73956515,-.45954404,.08285427,.12541073,-.14503204]],[[.13110758,1.81333971],[1.35733652,-.00915799,-1.1513021,-.50559606,.00692167]]],al=Number.MAX_VALUE,li=.206,sl=.03,ci=(1+li)/(1+sl);function $t(e,t){let r=e.length;if(r!==t.length)throw new Error(`Vectors of size ${r} and ${t.length} are not aligned`);let i=0;return e.forEach((a,s)=>{i+=a*t[s]}),i}function ui(e){return .5*(ci*e-li+Math.sqrt((ci*e-li)*(ci*e-li)+4*sl*ci*e))}function bo(e){return(e**2+li*e)/(ci*(e+sl))}function ll(e){let[t,r]=e;return[r/t,r/(1-t)]}function zg(e,t){return[.11516993+1/(7.4477897+4.1590124*t+e*(-2.19557347+1.75198401*t+e*(-2.13704948-10.02301043*t+e*(-4.24894561+5.38770819*t+4.69891013*e)))),.11239642+1/(1.6132032-.68124379*t+e*(.40370612+.90148123*t+e*(-.27087943+.6122399*t+e*(.00299215-.45399568*t-.14661872*e))))]}function cl(e,t){let r=gt(e,fr);return r[0]=r[0]**3,r[1]=r[1]**3,r[2]=r[2]**3,gt(r,t,r)}function ha(e,t,r,i){let a=Ng(e,t,r,i),s=cl([1,a*e,a*t],r),l=yt(1/Math.max(...s),1/3);return[l,l*a]}function Bg(e,t,r,i,a,s,l,h){let u;if(h===void 0&&(h=ha(e,t,s,l)),(r-a)*h[1]-(h[0]-a)*i<=0)u=h[1]*a/(i*h[0]+h[1]*(a-r));else{u=h[1]*(a-1)/(i*(h[0]-1)+h[1]*(a-r));let f=r-a,p=i,b=$t(fr[0].slice(1),[e,t]),w=$t(fr[1].slice(1),[e,t]),v=$t(fr[2].slice(1),[e,t]),m=f+p*b,E=f+p*w,y=f+p*v,S=a*(1-u)+u*r,x=u*i,T=S+x*b,L=S+x*w,D=S+x*v,K=T**3,V=L**3,ae=D**3,H=3*m*T**2,ge=3*E*L**2,_e=3*y*D**2,P=6*m**2*T,X=6*E**2*L,A=6*y**2*D,Q=$t(s[0],[K,V,ae])-1,Ce=$t(s[0],[H,ge,_e]),se=$t(s[0],[P,X,A]),Ie=Ce/(Ce*Ce-.5*Q*se),le=-Q*Ie,Ae=$t(s[1],[K,V,ae])-1,W=$t(s[1],[H,ge,_e]),U=$t(s[1],[P,X,A]),Se=W/(W*W-.5*Ae*U),me=-Ae*Se,fe=$t(s[2],[K,V,ae])-1,Xe=$t(s[2],[H,ge,_e]),Et=$t(s[2],[P,X,A]),Fe=Xe/(Xe*Xe-.5*fe*Et),Ue=-fe*Fe;le=Ie>=0?le:al,me=Se>=0?me:al,Ue=Fe>=0?Ue:al,u+=Math.min(le,Math.min(me,Ue))}return u}function Vd(e,t,r){let[i,a,s]=e,l=ha(a,s,t,r),h=Bg(a,s,i,1,i,t,r,l),u=ll(l),f=h/Math.min(i*u[0],(1-i)*u[1]),p=zg(a,s),b=i*p[0],w=(1-i)*p[1],v=.9*f*Math.sqrt(Math.sqrt(1/(1/b**4+1/w**4)));return b=i*.4,w=(1-i)*.8,[Math.sqrt(1/(1/b**2+1/w**2)),v,h]}function Ng(e,t,r,i){let a,s,l,h,u,f,p,b;$t(i[0][0],[e,t])>1?([a,s,l,h,u]=i[0][1],[f,p,b]=r[0]):$t(i[1][0],[e,t])>1?([a,s,l,h,u]=i[1][1],[f,p,b]=r[1]):([a,s,l,h,u]=i[2][1],[f,p,b]=r[2]);let w=a+s*e+l*t+h*e**2+u*e*t,v=$t(fr[0].slice(1),[e,t]),m=$t(fr[1].slice(1),[e,t]),E=$t(fr[2].slice(1),[e,t]),y=1+w*v,S=1+w*m,x=1+w*E,T=y**3,L=S**3,D=x**3,K=3*v*y**2,V=3*m*S**2,ae=3*E*x**2,H=6*v**2*y,ge=6*m**2*S,_e=6*E**2*x,P=f*T+p*L+b*D,X=f*K+p*V+b*ae,A=f*H+p*ge+b*_e;return w=w-P*X/(X**2-.5*P*A),w}function Fg(e,t,r){let[i,a,s]=e,l=bo(s),h=null,u=null;if(i=kn(i)/360,l!==0&&l!==1&&a!==0){let f=Math.cos(vo*i),p=Math.sin(vo*i),[b,w,v]=Vd([l,f,p],t,r),m=.8,E=1.25,y,S,x,T;a<m?(y=E*a,S=0,x=m*b,T=1-x/w):(y=5*(a-.8),S=w,x=.2*w**2*1.25**2/b,T=1-x/(v-w));let L=S+y*x/(1-T*y);h=L*f,u=L*p}return[l,h,u]}function Hg(e,t,r){let i=1e-7,a=1e-4,s=e[0],l=0,h=ui(s),u=Math.sqrt(e[1]**2+e[2]**2),f=.5+Math.atan2(-e[2],-e[1])/vo;if(h!==0&&h!==1&&u!==0){let[b,w,v]=Vd([s,e[1]/u,e[2]/u],t,r),m=.8,E=1.25,y,S,x,T;u<w?(S=m*b,x=1-S/w,T=u/(S+x*u),l=T*m):(y=w,S=.2*w**2*E**2/b,x=1-S/(v-w),T=(u-y)/(S+x*(u-y)),l=m+.2*T)}const p=Math.abs(l)<a;return p||h===0||Math.abs(1-h)<i?(f=null,p||(l=0)):f=kn(f*360),[f,l,h]}var Gg=new ke({id:"okhsl",name:"Okhsl",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,1],name:"Saturation"},l:{range:[0,1],name:"Lightness"}},base:zn,gamutSpace:"self",fromBase(e){return Hg(e,ua,da)},toBase(e){return Fg(e,ua,da)},formats:{color:{id:"--okhsl",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}}),Zd=new ke({id:"oklrab",name:"Oklrab",coords:{l:{refRange:[0,1],name:"Lightness"},a:{refRange:[-.4,.4]},b:{refRange:[-.4,.4]}},white:"D65",base:zn,fromBase(e){return[ui(e[0]),e[1],e[2]]},toBase(e){return[bo(e[0]),e[1],e[2]]},formats:{color:{coords:["<percentage> | <number>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}}),Wg=new ke({id:"oklrch",name:"Oklrch",coords:{l:{refRange:[0,1],name:"Lightness"},c:{refRange:[0,.4],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},white:"D65",base:Zd,fromBase:cn.fromBase,toBase:cn.toBase,formats:{color:{coords:["<percentage> | <number>","<number> | <percentage>[0,1]","<number> | <angle>"]}}});function Ug(e,t,r){let[i,a,s]=e;i=kn(i)/360;let l=bo(s),h=null,u=null;if(l!==0&&a!==0){let f=Math.cos(vo*i),p=Math.sin(vo*i),[b,w]=ll(ha(f,p,t,r)),v=.5,m=1-v/b,E=1-a*v/(v+w-w*m*a),y=a*w*v/(v+w-w*m*a);l=s*E;let S=s*y,x=bo(E),T=y*x/E,L=bo(l);S=S*L/l,l=L;let[D,K,V]=cl([x,f*T,p*T],t),ae=yt(1/Math.max(Math.max(D,K),Math.max(V,0)),1/3);l=l*ae,S=S*ae,h=S*f,u=S*p}return[l,h,u]}function Vg(e,t,r){let i=1e-4,a=e[0],s=0,l=ui(a),h=Math.sqrt(e[1]**2+e[2]**2),u=.5+Math.atan2(-e[2],-e[1])/vo;if(a!==0&&a!==1&&h!==0){let f=e[1]/h,p=e[2]/h,[b,w]=ll(ha(f,p,t,r)),v=.5,m=1-v/b,E=w/(h+a*w),y=E*a,S=E*h,x=bo(y),T=S*x/y,[L,D,K]=cl([x,f*T,p*T],t),V=yt(1/Math.max(Math.max(L,D),Math.max(K,0)),1/3);a=a/V,h=h/V,h=h*ui(a)/a,a=ui(a),l=a/y,s=(v+w)*S/(w*v+w*m*S)}return Math.abs(s)<i||l===0?u=null:u=kn(u*360),[u,s,l]}var Zg=new ke({id:"okhsv",name:"Okhsv",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,1],name:"Saturation"},v:{range:[0,1],name:"Value"}},base:zn,gamutSpace:"self",fromBase(e){return Vg(e,ua,da)},toBase(e){return Ug(e,ua,da)},formats:{color:{id:"--okhsv",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}}),qd=Gt.D65,qg=216/24389,jd=24389/27,[Kd,Yd]=la({space:Pt,coords:qd}),Xd=new ke({id:"luv",name:"Luv",coords:{l:{refRange:[0,100],name:"Lightness"},u:{refRange:[-215,215]},v:{refRange:[-215,215]}},white:qd,base:Pt,fromBase(e){let t=[_t(e[0]),_t(e[1]),_t(e[2])],r=t[1],[i,a]=la({space:Pt,coords:t});if(!Number.isFinite(i)||!Number.isFinite(a))return[0,0,0];let s=r<=qg?jd*r:116*Math.cbrt(r)-16;return[s,13*s*(i-Kd),13*s*(a-Yd)]},toBase(e){let[t,r,i]=e;if(t===0||Ke(t))return[0,0,0];r=_t(r),i=_t(i);let a=r/(13*t)+Kd,s=i/(13*t)+Yd,l=t<=8?t/jd:Math.pow((t+16)/116,3);return[l*(9*a/(4*s)),l,l*((12-3*a-20*s)/(4*s))]},formats:{color:{id:"--luv",coords:["<number> | <percentage>","<number> | <percentage>","<number> | <percentage>"]}}}),ul=new ke({id:"lchuv",name:"LChuv",coords:{l:{refRange:[0,100],name:"Lightness"},c:{refRange:[0,220],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:Xd,fromBase:cn.fromBase,toBase:cn.toBase,formats:{color:{id:"--lchuv",coords:["<number> | <percentage>","<number> | <percentage>","<number> | <angle>"]}}}),jg=216/24389,Kg=24389/27,Jd=Mt[0][0],Qd=Mt[0][1],dl=Mt[0][2],e0=Mt[1][0],t0=Mt[1][1],hl=Mt[1][2],n0=Mt[2][0],r0=Mt[2][1],fl=Mt[2][2];function wo(e,t,r){const i=t/(Math.sin(r)-e*Math.cos(r));return i<0?1/0:i}function fa(e){const t=Math.pow(e+16,3)/1560896,r=t>jg?t:e/Kg,i=r*(284517*Jd-94839*dl),a=r*(838422*dl+769860*Qd+731718*Jd),s=r*(632260*dl-126452*Qd),l=r*(284517*e0-94839*hl),h=r*(838422*hl+769860*t0+731718*e0),u=r*(632260*hl-126452*t0),f=r*(284517*n0-94839*fl),p=r*(838422*fl+769860*r0+731718*n0),b=r*(632260*fl-126452*r0);return{r0s:i/s,r0i:a*e/s,r1s:i/(s+126452),r1i:(a-769860)*e/(s+126452),g0s:l/u,g0i:h*e/u,g1s:l/(u+126452),g1i:(h-769860)*e/(u+126452),b0s:f/b,b0i:p*e/b,b1s:f/(b+126452),b1i:(p-769860)*e/(b+126452)}}function o0(e,t){const r=t/360*Math.PI*2,i=wo(e.r0s,e.r0i,r),a=wo(e.r1s,e.r1i,r),s=wo(e.g0s,e.g0i,r),l=wo(e.g1s,e.g1i,r),h=wo(e.b0s,e.b0i,r),u=wo(e.b1s,e.b1i,r);return Math.min(i,a,s,l,h,u)}var Yg=new ke({id:"hsluv",name:"HSLuv",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:ul,gamutSpace:Wr,fromBase(e){let[t,r,i]=[_t(e[0]),_t(e[1]),_t(e[2])],a;return t>99.9999999?(a=0,t=100):t<1e-8?(a=0,t=0):a=r/o0(fa(t),i)*100,[i,a,t]},toBase(e){let[t,r,i]=[_t(e[0]),_t(e[1]),_t(e[2])],a;return i>99.9999999?(i=100,a=0):i<1e-8?(i=0,a=0):a=o0(fa(i),t)/100*r,[i,a,t]},formats:{color:{id:"--hsluv",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}});Mt[0][0],Mt[0][1],Mt[0][2],Mt[1][0],Mt[1][1],Mt[1][2],Mt[2][0],Mt[2][1],Mt[2][2];function _o(e,t){return Math.abs(t)/Math.sqrt(Math.pow(e,2)+1)}function i0(e){let t=_o(e.r0s,e.r0i),r=_o(e.r1s,e.r1i),i=_o(e.g0s,e.g0i),a=_o(e.g1s,e.g1i),s=_o(e.b0s,e.b0i),l=_o(e.b1s,e.b1i);return Math.min(t,r,i,a,s,l)}var Xg=new ke({id:"hpluv",name:"HPLuv",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:ul,gamutSpace:"self",fromBase(e){let[t,r,i]=[_t(e[0]),_t(e[1]),_t(e[2])],a;return t>99.9999999?(a=0,t=100):t<1e-8?(a=0,t=0):a=r/i0(fa(t))*100,[i,a,t]},toBase(e){let[t,r,i]=[_t(e[0]),_t(e[1]),_t(e[2])],a;return i>99.9999999?(i=100,a=0):i<1e-8?(i=0,a=0):a=i0(fa(i))/100*r,[i,a,t]},formats:{color:{id:"--hpluv",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}}),pl=new Bt({id:"rec2100-linear",name:"Linear REC.2100",white:"D65",toBase:ii.toBase,fromBase:ii.fromBase}),a0=203,s0=2610/2**14,Jg=2**14/2610,Qg=2523/2**5,l0=2**5/2523,c0=3424/2**12,u0=2413/2**7,d0=2392/2**7,em=new Bt({id:"rec2100pq",cssId:"rec2100-pq",name:"REC.2100-PQ",base:pl,toBase(e){return e.map(function(t){return(Math.max(t**l0-c0,0)/(u0-d0*t**l0))**Jg*1e4/a0})},fromBase(e){return e.map(function(t){let r=Math.max(t*a0/1e4,0);return((c0+u0*r**s0)/(1+d0*r**s0))**Qg})}}),h0=.17883277,f0=.28466892,p0=.55991073,gl=3.7743,tm=new Bt({id:"rec2100hlg",cssId:"rec2100-hlg",name:"REC.2100-HLG",referred:"scene",base:pl,toBase(e){return e.map(function(t){return t<=.5?t**2/3*gl:(Math.exp((t-p0)/h0)+f0)/12*gl})},fromBase(e){return e.map(function(t){return t/=gl,t<=1/12?yt(3*t,.5):h0*Math.log(12*t-f0)+p0})}}),g0={};hr.add("chromatic-adaptation-start",e=>{e.options.method&&(e.M=m0(e.W1,e.W2,e.options.method))}),hr.add("chromatic-adaptation-end",e=>{e.M||(e.M=m0(e.W1,e.W2,e.options.method))});function pa({id:e,toCone_M:t,fromCone_M:r}){g0[e]=arguments[0]}function m0(e,t,r="Bradford"){let i=g0[r],[a,s,l]=ei(i.toCone_M,e),[h,u,f]=ei(i.toCone_M,t),p=ei([[h/a,0,0],[0,u/s,0],[0,0,f/l]],i.toCone_M);return ei(i.fromCone_M,p)}pa({id:"von Kries",toCone_M:[[.40024,.7076,-.08081],[-.2263,1.16532,.0457],[0,0,.91822]],fromCone_M:[[1.8599363874558397,-1.1293816185800916,.21989740959619328],[.3611914362417676,.6388124632850422,-6370596838649899e-21],[0,0,1.0890636230968613]]}),pa({id:"Bradford",toCone_M:[[.8951,.2664,-.1614],[-.7502,1.7135,.0367],[.0389,-.0685,1.0296]],fromCone_M:[[.9869929054667121,-.14705425642099013,.15996265166373122],[.4323052697233945,.5183602715367774,.049291228212855594],[-.00852866457517732,.04004282165408486,.96848669578755]]}),pa({id:"CAT02",toCone_M:[[.7328,.4296,-.1624],[-.7036,1.6975,.0061],[.003,.0136,.9834]],fromCone_M:[[1.0961238208355142,-.27886900021828726,.18274517938277307],[.4543690419753592,.4735331543074117,.07209780371722911],[-.009627608738429355,-.00569803121611342,1.0153256399545427]]}),pa({id:"CAT16",toCone_M:[[.401288,.650173,-.051461],[-.250268,1.204414,.045854],[-.002079,.048952,.953127]],fromCone_M:[[1.862067855087233,-1.0112546305316845,.14918677544445172],[.3875265432361372,.6214474419314753,-.008973985167612521],[-.01584149884933386,-.03412293802851557,1.0499644368778496]]}),Object.assign(Gt,{A:[1.0985,1,.35585],C:[.98074,1,1.18232],D55:[.95682,1,.92149],D75:[.94972,1,1.22638],E:[1,1,1],F2:[.99186,1,.67393],F7:[.95041,1,1.08747],F11:[1.00962,1,.6435]}),Gt.ACES=[.32168/.33767,1,.34065/.33767];var v0=new Bt({id:"acescg",cssId:"--acescg",name:"ACEScg",coords:{r:{range:[0,65504],name:"Red"},g:{range:[0,65504],name:"Green"},b:{range:[0,65504],name:"Blue"}},referred:"scene",white:Gt.ACES,toXYZ_M:[[.6624541811085053,.13400420645643313,.1561876870049078],[.27222871678091454,.6740817658111484,.05368951740793705],[-.005574649490394108,.004060733528982826,1.0103391003129971]],fromXYZ_M:[[1.6410233796943257,-.32480329418479,-.23642469523761225],[-.6636628587229829,1.6153315916573379,.016756347685530137],[.011721894328375376,-.008284441996237409,.9883948585390215]]}),ga=2**-16,ml=-.35828683,ma=(Math.log2(65504)+9.72)/17.52,nm=new Bt({id:"acescc",cssId:"--acescc",name:"ACEScc",coords:{r:{range:[ml,ma],name:"Red"},g:{range:[ml,ma],name:"Green"},b:{range:[ml,ma],name:"Blue"}},referred:"scene",base:v0,toBase(e){const t=-.3013698630136986;return e.map(function(r){return r<=t?(2**(r*17.52-9.72)-ga)*2:r<ma?2**(r*17.52-9.72):65504})},fromBase(e){return e.map(function(t){return t<=0?(Math.log2(ga)+9.72)/17.52:t<ga?(Math.log2(ga+t*.5)+9.72)/17.52:(Math.log2(t)+9.72)/17.52})}}),b0=Object.freeze({__proto__:null,A98RGB:Tg,A98RGB_Linear:Gd,ACEScc:nm,ACEScg:v0,CAM16_JMh:Wp,HCT:ri,HPLuv:Xg,HSL:Cg,HSLuv:Yg,HSV:Hd,HWB:Og,ICTCP:Xs,JzCzHz:Ys,Jzazbz:od,LCH:cn,LCHuv:ul,Lab:ln,Lab_D65:rl,Luv:Xd,OKLCH:Dg,OKLab:zn,OKLrCH:Wg,OKLrab:Zd,Okhsl:Gg,Okhsv:Zg,P3:Cd,P3_Linear:Ad,ProPhoto:Pg,ProPhoto_Linear:Wd,REC_2020:Ed,REC_2020_Linear:ii,REC_2020_Scene_Referred:$g,REC_2100_HLG:tm,REC_2100_Linear:pl,REC_2100_PQ:em,XYZ_ABS_D65:js,XYZ_D50:Vs,XYZ_D65:Pt,sRGB:Wr,sRGB_Linear:Sd}),ct=class on{constructor(...t){let r;if(t.length===1){let l={};typeof t[0]=="object"&&Object.getPrototypeOf(t[0]).constructor===Object&&(t[0]={...t[0]}),r=Re(t[0],{parseMeta:l}),l.format&&(this.parseMeta=l)}let i,a,s;r?(i=r.space||r.spaceId,a=r.coords,s=r.alpha):[i,a,s]=t,Object.defineProperty(this,"space",{value:ke.get(i),writable:!1,enumerable:!0,configurable:!0}),this.coords=a?a.slice():[0,0,0],this.alpha=Ke(s)?s:s===void 0?1:Xi(0,s,1);for(let l in this.space.coords)Object.defineProperty(this,l,{get:()=>this.get(l),set:h=>this.set(l,h)})}get spaceId(){return this.space.id}clone(){return new on(this.space,this.coords,this.alpha)}toJSON(){return{spaceId:this.spaceId,coords:this.coords,alpha:this.alpha}}display(...t){let r=tg(this,...t);return r.color=new on(r.color),r}static get(t,...r){return ho(t,this)?t:new on(t,...r)}static try(t,r){if(ho(t,this))return t;let i=Wu(t,r);return i?new on(i):null}static defineFunction(t,r,i=r){let{instance:a=!0,returns:s}=i,l=function(...h){let u=r(...h);if(s==="color")u=on.get(u);else if(s==="function<color>"){let f=u;u=function(...p){let b=f(...p);return on.get(b)},Object.assign(u,f)}else s==="array<color>"&&(u=u.map(f=>on.get(f)));return u};t in on||(on[t]=l),a&&(on.prototype[t]=function(...h){return l(this,...h)})}static defineFunctions(t){for(let r in t)on.defineFunction(r,t[r],t[r])}static extend(t){if(t.register)t.register(on);else for(let r in t)on.defineFunction(r,t[r])}};ct.defineFunctions({get:sn,getAll:ni,set:Xn,setAll:Us,to:rt,equals:rg,inGamut:Hr,toGamut:pr,distance:Yu,deltas:ng,toString:oi}),Object.assign(ct,{util:ip,hooks:hr,WHITES:Gt,Space:ke,spaces:ke.registry,parse:Hu,defaults:an});for(let e of Object.keys(b0))ke.register(b0[e]);for(let e in ke.registry)vl(e,ke.registry[e]);hr.add("colorspace-init-end",e=>{vl(e.id,e),e.aliases?.forEach(t=>{vl(t,e)})});function vl(e,t){let r=e.replace(/-/g,"_");Object.defineProperty(ct.prototype,r,{get(){let i=this.getAll(e);if(typeof Proxy>"u")return i;let a=new Proxy(i,{has:(s,l)=>{try{return ke.resolveCoord([t,l]),!0}catch{}return Reflect.has(s,l)},get:(s,l,h)=>{if(l&&typeof l!="symbol"&&!(l in s)&&l in a){let{index:u}=ke.resolveCoord([t,l]);if(u>=0)return s[u]}return Reflect.get(s,l,h)},set:(s,l,h,u)=>{if(l&&typeof l!="symbol"&&!(l in s)||Number(l)>=0){let{index:f}=ke.resolveCoord([t,l]);if(f>=0)return s[f]=h,this.setAll(e,s),!0}return Reflect.set(s,l,h,u)}});return a},set(i){this.setAll(e,i)},configurable:!0,enumerable:!0})}ct.extend(go),ct.extend({deltaE:ai}),Object.assign(ct,{deltaEMethods:go}),ct.extend(Mg),ct.extend({contrast:Eg}),ct.extend(Sg),ct.extend(ig),ct.extend(Ig),ct.extend(sa);var bl={navy:"#001f3f",darkblue:"#1e4f7a",blue:"#1A2F4B",darkgreen:"#062925",green:"#1A3636",grass:"#1B3C53",teal:"#044A42",darkpurple:"#1B0044",purple:"#363062",grape:"#31326F",maroon:"#44000D"},kt={dark:{50:"#C1C2C5",100:"#A6A7AB",200:"#909296",300:"#5c5f66",400:"#373A40",500:"#2C2E33",600:"#25262b",700:"#1A1B1E",800:"#141517",900:"#101113",950:"#000000"},slate:{50:"oklch(98.4% 0.003 247.858)",100:"oklch(96.8% 0.007 247.896)",200:"oklch(92.9% 0.013 255.508)",300:"oklch(86.9% 0.022 252.894)",400:"oklch(70.4% 0.04 256.788)",500:"oklch(55.4% 0.046 257.417)",600:"oklch(44.6% 0.043 257.281)",700:"oklch(37.2% 0.044 257.287)",800:"oklch(27.9% 0.041 260.031)",900:"oklch(20.8% 0.042 265.755)",950:"oklch(12.9% 0.042 264.695)"},gray:{50:"oklch(98.5% 0.002 247.839)",100:"oklch(96.7% 0.003 264.542)",200:"oklch(92.8% 0.006 264.531)",300:"oklch(87.2% 0.01 258.338)",400:"oklch(70.7% 0.022 261.325)",500:"oklch(55.1% 0.027 264.364)",600:"oklch(44.6% 0.03 256.802)",700:"oklch(37.3% 0.034 259.733)",800:"oklch(27.8% 0.033 256.848)",900:"oklch(21% 0.034 264.665)",950:"oklch(13% 0.028 261.692)"},zinc:{50:"oklch(98.5% 0 0)",100:"oklch(96.7% 0.001 286.375)",200:"oklch(92% 0.004 286.32)",300:"oklch(87.1% 0.006 286.286)",400:"oklch(70.5% 0.015 286.067)",500:"oklch(55.2% 0.016 285.938)",600:"oklch(44.2% 0.017 285.786)",700:"oklch(37% 0.013 285.805)",800:"oklch(27.4% 0.006 286.033)",900:"oklch(21% 0.006 285.885)",950:"oklch(14.1% 0.005 285.823)"},neutral:{50:"oklch(98.5% 0 0)",100:"oklch(97% 0 0)",200:"oklch(92.2% 0 0)",300:"oklch(87% 0 0)",400:"oklch(70.8% 0 0)",500:"oklch(55.6% 0 0)",600:"oklch(43.9% 0 0)",700:"oklch(37.1% 0 0)",800:"oklch(26.9% 0 0)",900:"oklch(20.5% 0 0)",950:"oklch(14.5% 0 0)"},stone:{50:"oklch(98.5% 0.001 106.423)",100:"oklch(97% 0.001 106.424)",200:"oklch(92.3% 0.003 48.717)",300:"oklch(86.9% 0.005 56.366)",400:"oklch(70.9% 0.01 56.259)",500:"oklch(55.3% 0.013 58.071)",600:"oklch(44.4% 0.011 73.639)",700:"oklch(37.4% 0.01 67.558)",800:"oklch(26.8% 0.007 34.298)",900:"oklch(21.6% 0.006 56.043)",950:"oklch(14.7% 0.004 49.25)"},red:{50:"oklch(97.1% 0.013 17.38)",100:"oklch(93.6% 0.032 17.717)",200:"oklch(88.5% 0.062 18.334)",300:"oklch(80.8% 0.114 19.571)",400:"oklch(70.4% 0.191 22.216)",500:"oklch(63.7% 0.237 25.331)",600:"oklch(57.7% 0.245 27.325)",700:"oklch(50.5% 0.213 27.518)",800:"oklch(44.4% 0.177 26.899)",900:"oklch(39.6% 0.141 25.723)",950:"oklch(25.8% 0.092 26.042)"},orange:{50:"oklch(98% 0.016 73.684)",100:"oklch(95.4% 0.038 75.164)",200:"oklch(90.1% 0.076 70.697)",300:"oklch(83.7% 0.128 66.29)",400:"oklch(75% 0.183 55.934)",500:"oklch(70.5% 0.213 47.604)",600:"oklch(64.6% 0.222 41.116)",700:"oklch(55.3% 0.195 38.402)",800:"oklch(47% 0.157 37.304)",900:"oklch(40.8% 0.123 38.172)",950:"oklch(26.6% 0.079 36.259)"},amber:{50:"oklch(98.7% 0.022 95.277)",100:"oklch(96.2% 0.059 95.617)",200:"oklch(92.4% 0.12 95.746)",300:"oklch(87.9% 0.169 91.605)",400:"oklch(82.8% 0.189 84.429)",500:"oklch(76.9% 0.188 70.08)",600:"oklch(66.6% 0.179 58.318)",700:"oklch(55.5% 0.163 48.998)",800:"oklch(47.3% 0.137 46.201)",900:"oklch(41.4% 0.112 45.904)",950:"oklch(27.9% 0.077 45.635)"},yellow:{50:"oklch(98.7% 0.026 102.212)",100:"oklch(97.3% 0.071 103.193)",200:"oklch(94.5% 0.129 101.54)",300:"oklch(90.5% 0.182 98.111)",400:"oklch(85.2% 0.199 91.936)",500:"oklch(79.5% 0.184 86.047)",600:"oklch(68.1% 0.162 75.834)",700:"oklch(55.4% 0.135 66.442)",800:"oklch(47.6% 0.114 61.907)",900:"oklch(42.1% 0.095 57.708)",950:"oklch(28.6% 0.066 53.813)"},lime:{50:"oklch(98.6% 0.031 120.757)",100:"oklch(96.7% 0.067 122.328)",200:"oklch(93.8% 0.127 124.321)",300:"oklch(89.7% 0.196 126.665)",400:"oklch(84.1% 0.238 128.85)",500:"oklch(76.8% 0.233 130.85)",600:"oklch(64.8% 0.2 131.684)",700:"oklch(53.2% 0.157 131.589)",800:"oklch(45.3% 0.124 130.933)",900:"oklch(40.5% 0.101 131.063)",950:"oklch(27.4% 0.072 132.109)"},green:{50:"oklch(98.2% 0.018 155.826)",100:"oklch(96.2% 0.044 156.743)",200:"oklch(92.5% 0.084 155.995)",300:"oklch(87.1% 0.15 154.449)",400:"oklch(79.2% 0.209 151.711)",500:"oklch(72.3% 0.219 149.579)",600:"oklch(62.7% 0.194 149.214)",700:"oklch(52.7% 0.154 150.069)",800:"oklch(44.8% 0.119 151.328)",900:"oklch(39.3% 0.095 152.535)",950:"oklch(26.6% 0.065 152.934)"},emerald:{50:"oklch(97.9% 0.021 166.113)",100:"oklch(95% 0.052 163.051)",200:"oklch(90.5% 0.093 164.15)",300:"oklch(84.5% 0.143 164.978)",400:"oklch(76.5% 0.177 163.223)",500:"oklch(69.6% 0.17 162.48)",600:"oklch(59.6% 0.145 163.225)",700:"oklch(50.8% 0.118 165.612)",800:"oklch(43.2% 0.095 166.913)",900:"oklch(37.8% 0.077 168.94)",950:"oklch(26.2% 0.051 172.552)"},teal:{50:"oklch(98.4% 0.014 180.72)",100:"oklch(95.3% 0.051 180.801)",200:"oklch(91% 0.096 180.426)",300:"oklch(85.5% 0.138 181.071)",400:"oklch(77.7% 0.152 181.912)",500:"oklch(70.4% 0.14 182.503)",600:"oklch(60% 0.118 184.704)",700:"oklch(51.1% 0.096 186.391)",800:"oklch(43.7% 0.078 188.216)",900:"oklch(38.6% 0.063 188.416)",950:"oklch(27.7% 0.046 192.524)"},cyan:{50:"oklch(98.4% 0.019 200.873)",100:"oklch(95.6% 0.045 203.388)",200:"oklch(91.7% 0.08 205.041)",300:"oklch(86.5% 0.127 207.078)",400:"oklch(78.9% 0.154 211.53)",500:"oklch(71.5% 0.143 215.221)",600:"oklch(60.9% 0.126 221.723)",700:"oklch(52% 0.105 223.128)",800:"oklch(45% 0.085 224.283)",900:"oklch(39.8% 0.07 227.392)",950:"oklch(30.2% 0.056 229.695)"},sky:{50:"oklch(97.7% 0.013 236.62)",100:"oklch(95.1% 0.026 236.824)",200:"oklch(90.1% 0.058 230.902)",300:"oklch(82.8% 0.111 230.318)",400:"oklch(74.6% 0.16 232.661)",500:"oklch(68.5% 0.169 237.323)",600:"oklch(58.8% 0.158 241.966)",700:"oklch(50% 0.134 242.749)",800:"oklch(44.3% 0.11 240.79)",900:"oklch(39.1% 0.09 240.876)",950:"oklch(29.3% 0.066 243.157)"},blue:{50:"oklch(97% 0.014 254.604)",100:"oklch(93.2% 0.032 255.585)",200:"oklch(88.2% 0.059 254.128)",300:"oklch(80.9% 0.105 251.813)",400:"oklch(70.7% 0.165 254.624)",500:"oklch(62.3% 0.214 259.815)",600:"oklch(54.6% 0.245 262.881)",700:"oklch(48.8% 0.243 264.376)",800:"oklch(42.4% 0.199 265.638)",900:"oklch(37.9% 0.146 265.522)",950:"oklch(28.2% 0.091 267.935)"},indigo:{50:"oklch(96.2% 0.018 272.314)",100:"oklch(93% 0.034 272.788)",200:"oklch(87% 0.065 274.039)",300:"oklch(78.5% 0.115 274.713)",400:"oklch(67.3% 0.182 276.935)",500:"oklch(58.5% 0.233 277.117)",600:"oklch(51.1% 0.262 276.966)",700:"oklch(45.7% 0.24 277.023)",800:"oklch(39.8% 0.195 277.366)",900:"oklch(35.9% 0.144 278.697)",950:"oklch(25.7% 0.09 281.288)"},violet:{50:"oklch(96.9% 0.016 293.756)",100:"oklch(94.3% 0.029 294.588)",200:"oklch(89.4% 0.057 293.283)",300:"oklch(81.1% 0.111 293.571)",400:"oklch(70.2% 0.183 293.541)",500:"oklch(60.6% 0.25 292.717)",600:"oklch(54.1% 0.281 293.009)",700:"oklch(49.1% 0.27 292.581)",800:"oklch(43.2% 0.232 292.759)",900:"oklch(38% 0.189 293.745)",950:"oklch(28.3% 0.141 291.089)"},purple:{50:"oklch(97.7% 0.014 308.299)",100:"oklch(94.6% 0.033 307.174)",200:"oklch(90.2% 0.063 306.703)",300:"oklch(82.7% 0.119 306.383)",400:"oklch(71.4% 0.203 305.504)",500:"oklch(62.7% 0.265 303.9)",600:"oklch(55.8% 0.288 302.321)",700:"oklch(49.6% 0.265 301.924)",800:"oklch(43.8% 0.218 303.724)",900:"oklch(38.1% 0.176 304.987)",950:"oklch(29.1% 0.149 302.717)"},fuchsia:{50:"oklch(97.7% 0.017 320.058)",100:"oklch(95.2% 0.037 318.852)",200:"oklch(90.3% 0.076 319.62)",300:"oklch(83.3% 0.145 321.434)",400:"oklch(74% 0.238 322.16)",500:"oklch(66.7% 0.295 322.15)",600:"oklch(59.1% 0.293 322.896)",700:"oklch(51.8% 0.253 323.949)",800:"oklch(45.2% 0.211 324.591)",900:"oklch(40.1% 0.17 325.612)",950:"oklch(29.3% 0.136 325.661)"},pink:{50:"oklch(97.1% 0.014 343.198)",100:"oklch(94.8% 0.028 342.258)",200:"oklch(89.9% 0.061 343.231)",300:"oklch(82.3% 0.12 346.018)",400:"oklch(71.8% 0.202 349.761)",500:"oklch(65.6% 0.241 354.308)",600:"oklch(59.2% 0.249 0.584)",700:"oklch(52.5% 0.223 3.958)",800:"oklch(45.9% 0.187 3.815)",900:"oklch(40.8% 0.153 2.432)",950:"oklch(28.4% 0.109 3.907)"},rose:{50:"oklch(96.9% 0.015 12.422)",100:"oklch(94.1% 0.03 12.58)",200:"oklch(89.2% 0.058 10.001)",300:"oklch(81% 0.117 11.638)",400:"oklch(71.2% 0.194 13.428)",500:"oklch(64.5% 0.246 16.439)",600:"oklch(58.6% 0.253 17.585)",700:"oklch(51.4% 0.222 16.935)",800:"oklch(45.5% 0.188 13.697)",900:"oklch(41% 0.159 10.272)",950:"oklch(27.1% 0.105 12.094)"}};function rm(e){try{ct.get(e)}catch{return!0}return ct.contrast(e,"white","Lstar")>ct.contrast(e,"black","Lstar")}function yo(e){return rm(e)?"#FFFFFF":"#000000"}function di(e){const t=e.replace(/[\t\n\r]/gim,"").replace(/\s\s+/g," ");return`data:image/svg+xml;charset=UTF-8,${encodeURIComponent(t).replace(/\(/g,"%28").replace(/\)/g,"%29")}`}var va=e=>e%100===0?15:e%50===0?10:e%25===0?5:2.5;function om(e,t,r,i){let a="";for(let s=0;s<=e;s+=5){const l=co` <line
      x1="${s}"
      y1="0"
      x2="${s}"
      y2="${va(s)}"
    />`;if(a+=l,s!==0&&s%50===0){const h=co` <text
        x="${s}"
        y="25"
        text-anchor="middle"
        font-size="${va(s)}px"
      >
        ${s}
      </text>`;a+=h}}for(let s=0;s<=t;s+=5){const l=co` <line
      x1="0"
      y1="${s}"
      x2="${va(s)}"
      y2="${s}"
    />`;if(a+=l,s!==0&&s%50===0){const h=co` <text
        x="25"
        y="${s}"
        text-anchor="middle"
        dominant-baseline="middle"
        font-size="${va(s)}px"
      >
        ${s}
      </text>`;a+=h}}return co` <svg
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
      fill="${i}"
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
      fill="${i}"
      stroke="${i}"
    >
      ${a}
    </g>
  </svg>`}function Wt(e,t,r="#0F1C3F",i="#ECEAD9"){return di(om(e,t,r,i))}var w0=Me.default.values(kt).map(e=>e[900]),_0=[400,600,900,1200,1400,1600,1970],y0=[600,800,1e3,1200,1400,2e3,2600];function im(){const e=Math.floor(Math.random()*_0.length),t=Math.floor(Math.random()*y0.length),r=Math.floor(Math.random()*w0.length);return Wt(_0[e],y0[t],w0[r])}var wl={name:"Local Files",url:/(file:\/\/\/.+(index)?.html)/,homepage:"/index.html?raw=1",language:[$e.RAW],category:Ne.MANGA,run(e){const t=e??parseInt(/\d+/.exec(window.location.search)?.toString()??"5",10);return{title:"Placeholder Manga Loaded",series:"?reload",pages:t,begin:1,prev:"?pages=50",next:"?pages=1",listImages:[Wt(1970,1400,"#2D1657"),Wt(985,1400,"#152C55"),Wt(985,1400,"#7A1420"),Wt(1970,1400,"#806D15"),Wt(985,1400,"#0F5B30"),Wt(1970,1400,"#1a3e3c"),Wt(985,1400,"#480f5b"),Wt(985,1400,"#a9bf7a"),Wt(985,1400,"#147a56"),Wt(1970,1400,"#190343"),Wt(985,1400,"#d5b91e"),Wt(985,1400,"#836ecd"),Wt(985,1400,"#bf19b2"),Wt(985,1400,"#152055"),...Array(t).fill(0).map(im)]}}},am=["image/apng","image/bmp","image/gif","image/jpeg","image/pjpeg","image/png","image/svg+xml","image/tiff","image/webp","image/x-icon"],sm=/.(png|jpg|jpeg|gif|bmp|webp)$/i,k0=(e,t)=>e.localeCompare(t,navigator.languages[0]||navigator.language,{numeric:!0,ignorePunctuation:!0});function lm(e){return am.includes(e.type)}var cm=e=>{const t=new Uint8Array(e),r=new Blob([t.buffer]);return URL.createObjectURL(r)};async function um(e){const t=await Pu.default.loadAsync(e),r=t.filter((i,a)=>!a.dir&&sm.test(a.name)).sort((i,a)=>k0(i.name,a.name));return Ee("Files in zip:",t.files),Promise.all(r.map(i=>i.async("arraybuffer").then(cm)))}function E0(e,t){gh([{...wl,start:"always"},{title:e,series:"?reload",pages:t.length,begin:1,prev:"#",next:"#",lazy:!1,listImages:t}]).then(()=>Ee("Page loaded"))}async function dm(e){const t=await um(e);E0(typeof e=="string"?e:e.name,t)}function A0(e){const t=e.target,r=Array.from(t.files).filter(lm).sort((i,a)=>k0(i.webkitRelativePath||i.name,a.webkitRelativePath||a.name));Ee("Local Files: ",r,r.map(i=>i.webkitRelativePath||i.name)),t.files?.[0]&&E0(t.files[0].webkitRelativePath.split("/")[0]||"Local Images",r.map(URL.createObjectURL))}function hm(){return wl.url.test(window.location.href)?(document.querySelector("#MangaOnlineViewer, #LocalTest")&&(document.querySelector("#LocalTest")?.setAttribute("style","display:none"),document.querySelector("#file")?.addEventListener("change",e=>{const t=e.target;t.files?.[0]&&dm(t.files[0])}),document.querySelector("#folder")?.addEventListener("change",A0),document.querySelector("#images")?.addEventListener("change",A0),Ee("Waiting for zip/images upload")),!0):!1}var ba=globalThis,_l=ba.ShadowRoot&&(ba.ShadyCSS===void 0||ba.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,yl=Symbol(),S0=new WeakMap,M0=class{constructor(e,t,r){if(this._$cssResult$=!0,r!==yl)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(_l&&e===void 0){const r=t!==void 0&&t.length===1;r&&(e=S0.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&S0.set(t,e))}return e}toString(){return this.cssText}},Xt=e=>new M0(typeof e=="string"?e:e+"",void 0,yl),Ot=(e,...t)=>new M0(e.length===1?e[0]:t.reduce((r,i,a)=>r+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[a+1],e[0]),e,yl),fm=(e,t)=>{if(_l)e.adoptedStyleSheets=t.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(const r of t){const i=document.createElement("style"),a=ba.litNonce;a!==void 0&&i.setAttribute("nonce",a),i.textContent=r.cssText,e.appendChild(i)}},x0=_l?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let r="";for(const i of t.cssRules)r+=i.cssText;return Xt(r)})(e):e,{is:pm,defineProperty:gm,getOwnPropertyDescriptor:mm,getOwnPropertyNames:vm,getOwnPropertySymbols:bm,getPrototypeOf:wm}=Object,wa=globalThis,I0=wa.trustedTypes,_m=I0?I0.emptyScript:"",ym=wa.reactiveElementPolyfillSupport,hi=(e,t)=>e,_a={toAttribute(e,t){switch(t){case Boolean:e=e?_m:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},kl=(e,t)=>!pm(e,t),C0={attribute:!0,type:String,converter:_a,reflect:!1,useDefault:!1,hasChanged:kl};Symbol.metadata??=Symbol("metadata"),wa.litPropertyMetadata??=new WeakMap;var ko=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=C0){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const r=Symbol(),i=this.getPropertyDescriptor(e,r,t);i!==void 0&&gm(this.prototype,e,i)}}static getPropertyDescriptor(e,t,r){const{get:i,set:a}=mm(this.prototype,e)??{get(){return this[t]},set(s){this[t]=s}};return{get:i,set(s){const l=i?.call(this);a?.call(this,s),this.requestUpdate(e,l,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??C0}static _$Ei(){if(this.hasOwnProperty(hi("elementProperties")))return;const e=wm(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(hi("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(hi("properties"))){const t=this.properties,r=[...vm(t),...bm(t)];for(const i of r)this.createProperty(i,t[i])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[r,i]of t)this.elementProperties.set(r,i)}this._$Eh=new Map;for(const[t,r]of this.elementProperties){const i=this._$Eu(t,r);i!==void 0&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const r=new Set(e.flat(1/0).reverse());for(const i of r)t.unshift(x0(i))}else e!==void 0&&t.push(x0(e));return t}static _$Eu(e,t){const r=t.attribute;return r===!1?void 0:typeof r=="string"?r:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const r of t.keys())this.hasOwnProperty(r)&&(e.set(r,this[r]),delete this[r]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return fm(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,r){this._$AK(e,r)}_$ET(e,t){const r=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,r);if(i!==void 0&&r.reflect===!0){const a=(r.converter?.toAttribute!==void 0?r.converter:_a).toAttribute(t,r.type);this._$Em=e,a==null?this.removeAttribute(i):this.setAttribute(i,a),this._$Em=null}}_$AK(e,t){const r=this.constructor,i=r._$Eh.get(e);if(i!==void 0&&this._$Em!==i){const a=r.getPropertyOptions(i),s=typeof a.converter=="function"?{fromAttribute:a.converter}:a.converter?.fromAttribute!==void 0?a.converter:_a;this._$Em=i;const l=s.fromAttribute(t,a.type);this[i]=l??this._$Ej?.get(i)??l,this._$Em=null}}requestUpdate(e,t,r,i=!1,a){if(e!==void 0){const s=this.constructor;if(i===!1&&(a=this[e]),r??=s.getPropertyOptions(e),!((r.hasChanged??kl)(a,t)||r.useDefault&&r.reflect&&a===this._$Ej?.get(e)&&!this.hasAttribute(s._$Eu(e,r))))return;this.C(e,t,r)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:r,reflect:i,wrapped:a},s){r&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,s??t??this[e]),a!==!0||s!==void 0)||(this._$AL.has(e)||(this.hasUpdated||r||(t=void 0),this._$AL.set(e,t)),i===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[i,a]of this._$Ep)this[i]=a;this._$Ep=void 0}const r=this.constructor.elementProperties;if(r.size>0)for(const[i,a]of r){const{wrapped:s}=a,l=this[i];s!==!0||this._$AL.has(i)||l===void 0||this.C(i,void 0,a,l)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(r=>r.hostUpdate?.()),this.update(t)):this._$EM()}catch(r){throw e=!1,this._$EM(),r}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(e){}firstUpdated(e){}};ko.elementStyles=[],ko.shadowRootOptions={mode:"open"},ko[hi("elementProperties")]=new Map,ko[hi("finalized")]=new Map,ym?.({ReactiveElement:ko}),(wa.reactiveElementVersions??=[]).push("2.1.2");var El=globalThis,et=class extends ko{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=T2(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Yn}};et._$litElement$=!0,et.finalized=!0,El.litElementHydrateSupport?.({LitElement:et});var km=El.litElementPolyfillSupport;km?.({LitElement:et}),(El.litElementVersions??=[]).push("4.2.2");var ht=e=>(t,r)=>{r!==void 0?r.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)},Em={attribute:!0,type:String,converter:_a,reflect:!1,hasChanged:kl},Am=(e=Em,t,r)=>{const{kind:i,metadata:a}=r;let s=globalThis.litPropertyMetadata.get(a);if(s===void 0&&globalThis.litPropertyMetadata.set(a,s=new Map),i==="setter"&&((e=Object.create(e)).wrapped=!0),s.set(r.name,e),i==="accessor"){const{name:l}=r;return{set(h){const u=t.get.call(this);t.set.call(this,h),this.requestUpdate(l,u,e,!0,h)},init(h){return h!==void 0&&this.C(l,void 0,e,h),h}}}if(i==="setter"){const{name:l}=r;return function(h){const u=this[l];t.call(this,h),this.requestUpdate(l,u,e,!0,h)}}throw Error("Unsupported decorator location: "+i)};function oe(e){return(t,r)=>typeof r=="object"?Am(e,t,r):((i,a,s)=>{const l=a.hasOwnProperty(s);return a.constructor.createProperty(s,i),l?Object.getOwnPropertyDescriptor(a,s):void 0})(e,t,r)}function un(e){return oe({...e,state:!0,attribute:!1})}var O0=(e,t,r)=>(r.configurable=!0,r.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(e,t,r),r);function Ur(e,t){return(r,i,a)=>{const s=l=>l.renderRoot?.querySelector(e)??null;if(t){const{get:l,set:h}=typeof i=="object"?r:a??(()=>{const u=Symbol();return{get(){return this[u]},set(f){this[u]=f}}})();return O0(r,i,{get(){let u=l.call(this);return u===void 0&&(u=s(this),(u!==null||this.hasUpdated)&&h.call(this,u)),u}})}return O0(r,i,{get(){return s(this)}})}}var ya=class extends ji{constructor(e){if(super(e),this.it=Be,e.type!==qi.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===Be||e==null)return this._t=void 0,this.it=e;if(e===Yn)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;const t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}};ya.directiveName="unsafeHTML",ya.resultType=1;var T0=Yo(ya),Al=class extends ya{};Al.directiveName="unsafeSVG",Al.resultType=2;var L0=Yo(Al);function R0(e){if(e.startsWith("Icon")&&!e.includes("-")&&!e.includes("_"))return e;const t=e.startsWith("Icon")?e.substring(4):e;return`Icon${Me.default.upperFirst(Me.default.camelCase(t))}`}var Sm=".icon-tabler-file-download>:nth-child(n+4){color:gold}.icon-tabler-arrow-autofit-width>:nth-child(n+3),.icon-tabler-arrow-autofit-height>:nth-child(n+3){color:#ff0}.icon-tabler-zoom-in-area>:nth-child(2),.icon-tabler-zoom-in-area>:nth-child(3){color:#0f0}.icon-tabler-zoom-out-area>:nth-child(2){color:red}.icon-tabler-zoom-pan>:nth-child(n+4){color:#96f}.icon-tabler-arrow-autofit-down>:nth-child(n+3),.icon-tabler-arrow-autofit-left>:nth-child(n+3),.icon-tabler-arrow-autofit-right>:nth-child(n+3){color:#28ffbf}.icon-tabler-spacing-vertical>:nth-child(4),.icon-tabler-spacing-horizontal>:nth-child(4){color:#f0f}.icon-tabler-list-numbers>:nth-child(n+5){color:#e48900}.icon-tabler-bookmarks>:nth-child(n+2),.icon-tabler-bookmark>:nth-child(2),.icon-tabler-bookmark-off>:nth-child(2){color:orange}.icon-tabler-bookmark-off>:nth-child(3),.icon-tabler-eye-off>:nth-child(4){color:red}.icon-tabler-zoom-cancel>:nth-child(3),.icon-tabler-zoom-cancel>:nth-child(4){color:#96f}.icon-tabler-zoom-in>:nth-child(3),.icon-tabler-zoom-in>:nth-child(4){color:#0f0}.icon-tabler-zoom-out>:nth-child(3){color:red}.icon-tabler-refresh>:nth-child(n+2){color:#0ff}.icon-tabler-photo>:nth-child(n+2),.icon-tabler-photo-off>:nth-child(n+2){color:silver}.icon-tabler-photo-off>:nth-child(6){color:orange}.icon-tabler-message>:nth-child(2),.icon-tabler-message>:nth-child(3),.icon-tabler-book-arrow-left>:nth-child(7),.icon-tabler-book-arrow-left>:nth-child(8),.icon-tabler-book-arrow-right>:nth-child(7),.icon-tabler-book-arrow-right>:nth-child(8),.icon-tabler-books-return>:nth-child(8),.icon-tabler-books-return>:nth-child(9){color:#adff2f}.icon-tabler-file-percent>:nth-child(2),.icon-tabler-file-percent>:nth-child(5),.icon-tabler-file-percent>:nth-child(6){color:#ff0}.icon-tabler-settings-off>:nth-child(4),.icon-tabler-book-off>:nth-child(7){color:red}",Mm='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-adjustments-horizontal"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M14 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"/><path d="M4 6l8 0"/><path d="M16 6l4 0"/><path d="M8 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"/><path d="M4 12l2 0"/><path d="M10 12l10 0"/><path d="M17 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"/><path d="M4 18l11 0"/><path d="M19 18l1 0"/></svg>',xm='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-alert-circle"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"/><path d="M12 8v4"/><path d="M12 16h.01"/></svg>',Im='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-api-book"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 1.006 -.5"/><path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0"/><path d="M3 6v13"/><path d="M12 6v13"/><path d="M21 6v6"/><path d="M17.001 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"/><path d="M19.001 15.5v1.5"/><path d="M19.001 21v1.5"/><path d="M22.032 17.25l-1.299 .75"/><path d="M17.27 20l-1.3 .75"/><path d="M15.97 17.25l1.3 .75"/><path d="M20.733 20l1.3 .75"/></svg>',Cm='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-autofit-down" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 20h-6a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h8"/><path d="M18 4v17"/><path d="M15 18l3 3l3 -3"/></svg>',Om='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-autofit-height" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 20h-6a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h6"/><path d="M18 14v7"/><path d="M18 3v7"/><path d="M15 18l3 3l3 -3"/><path d="M15 6l3 -3l3 3"/></svg>',Tm='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-autofit-left" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 12v-6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v8"/><path d="M20 18h-17"/><path d="M6 15l-3 3l3 3"/></svg>',Lm='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-autofit-right" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M20 12v-6a2 2 0 0 0 -2 -2h-12a2 2 0 0 0 -2 2v8"/><path d="M4 18h17"/><path d="M18 15l3 3l-3 3"/></svg>',Rm='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-autofit-width" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 12v-6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v6"/><path d="M10 18h-7"/><path d="M21 18h-7"/><path d="M6 15l-3 3l3 3"/><path d="M18 15l3 3l-3 3"/></svg>',Pm='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-big-left" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M20 15h-8v3.586a1 1 0 0 1 -1.707 .707l-6.586 -6.586a1 1 0 0 1 0 -1.414l6.586 -6.586a1 1 0 0 1 1.707 .707v3.586h8a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1z"/></svg>',$m='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-big-right" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 9h8v-3.586a1 1 0 0 1 1.707 -.707l6.586 6.586a1 1 0 0 1 0 1.414l-6.586 6.586a1 1 0 0 1 -1.707 -.707v-3.586h-8a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1z"/></svg>',Dm='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-arrows-horizontal"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 8l-4 4l4 4"/><path d="M17 8l4 4l-4 4"/><path d="M3 12l18 0"/></svg>',zm='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-arrows-left-right"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M21 17l-18 0"/><path d="M6 10l-3 -3l3 -3"/><path d="M3 7l18 0"/><path d="M18 20l3 -3l-3 -3"/></svg>',Bm='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-arrows-move"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 9l3 3l-3 3"/><path d="M15 12h6"/><path d="M6 9l-3 3l3 3"/><path d="M3 12h6"/><path d="M9 18l3 3l3 -3"/><path d="M12 15v6"/><path d="M15 6l-3 -3l-3 3"/><path d="M12 3v6"/></svg>',Nm='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-arrows-move-vertical"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 18l3 3l3 -3"/><path d="M12 15v6"/><path d="M15 6l-3 -3l-3 3"/><path d="M12 3v6"/></svg>',Fm='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-arrows-vertical"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8 7l4 -4l4 4"/><path d="M8 17l4 4l4 -4"/><path d="M12 3l0 18"/></svg>',Hm='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-book"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0"/><path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0"/><path d="M3 6l0 13"/><path d="M12 6l0 13"/><path d="M21 6l0 13"/></svg>',Gm='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-book-arrow-left"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 1.006 -.5"/><path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0"/><path d="M3 6v13"/><path d="M12 6v13"/><path d="M21 6v6"/><path d="M16 19h6"/><path d="M19 16l-3 3l3 3"/></svg>',Wm='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-book-arrow-right"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 1.006 -.5"/><path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0"/><path d="M3 6v13"/><path d="M12 6v13"/><path d="M21 6v6"/><path d="M16 19h6"/><path d="M19 16l3 3l-3 3"/></svg>',Um='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-book-off"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 5.899 -1.096"/><path d="M3 6a9 9 0 0 1 2.114 -.884m3.8 -.21c1.07 .17 2.116 .534 3.086 1.094a9 9 0 0 1 9 0"/><path d="M3 6v13"/><path d="M12 6v2m0 4v7"/><path d="M21 6v11"/><path d="M3 3l18 18"/></svg>',Vm='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-book-upload"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M14 20h-8a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12v5"/><path d="M11 16h-5a2 2 0 0 0 -2 2"/><path d="M15 16l3 -3l3 3"/><path d="M18 13v9"/></svg>',Zm='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-bookmark" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 7v14l-6 -4l-6 4v-14a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4z"/></svg>',qm='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-bookmark-off" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7.708 3.721a3.982 3.982 0 0 1 2.292 -.721h4a4 4 0 0 1 4 4v7m0 4v3l-6 -4l-6 4v-14c0 -.308 .035 -.609 .1 -.897"/><path d="M3 3l18 18"/></svg>',jm='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-bookmarks" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 10v11l-5 -3l-5 3v-11a3 3 0 0 1 3 -3h4a3 3 0 0 1 3 3z"/><path d="M11 3h5a3 3 0 0 1 3 3v11"/></svg>',Km='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-books-return"><defs><mask id="arrow-mask"><rect width="24" height="24" fill="white"/><rect x="15" y="15" width="8" height="8" fill="black"/></mask></defs><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 5a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1l0 -14"/><path d="M9 5a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1l0 -14"/><path d="M5 8h4"/><path d="M9 16h4"/><g mask="url(#arrow-mask)"><path d="M13.803 4.56l2.184 -.53c.562 -.135 1.133 .19 1.282 .732l3.695 13.418a1.02 1.02 0 0 1 -.634 1.219l-.133 .041l-2.184 .53c-.562 .135 -1.133 -.19 -1.282 -.732l-3.695 -13.418a1.02 1.02 0 0 1 .634 -1.219l.133 -.041"/><path d="M14 9l4 -1"/><path d="M16 16l3.923 -.98"/></g><path d="M16 19h6"/><path d="M19 16l-3 3l3 3"/></svg>',Ym='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-box-align-top"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 10.005h16v-5a1 1 0 0 0 -1 -1h-14a1 1 0 0 0 -1 1v5z"/><path d="M4 15.005v-.01"/><path d="M4 20.005v-.01"/><path d="M9 20.005v-.01"/><path d="M15 20.005v-.01"/><path d="M20 20.005v-.01"/><path d="M20 15.005v-.01"/></svg>',Xm='<svg id="Capa_1" enable-background="new 0 0 512 512" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><g><g><g><path d="m427.508 512h-343.02c-5.69 0-10.302-4.612-10.302-10.302v-491.396c0-5.69 4.612-10.302 10.302-10.302h343.02c5.69 0 10.302 4.612 10.302 10.302v491.396c-.001 5.69-4.613 10.302-10.302 10.302z" fill="#f2eff2"/></g></g><path d="m427.512 0h-41.238c5.687 0 10.302 4.615 10.302 10.302v41.156l-18.039 71.714 18.039 81.268v46.358l-18.039 45.164 18.039 24.847v46.358l-10.302 61.227 10.302 32.149v41.156c0 5.687-4.615 10.302-10.302 10.302h41.238c5.687 0 10.302-4.615 10.302-10.302v-491.397c0-5.687-4.615-10.302-10.302-10.302z" fill="#e1dde1"/><g><path d="m243.51 273.63-47.48 104.08-80.61-10.85v-315.4c0-2.85 2.31-5.15 5.15-5.15h30.86c2.13 0 4.03 1.29 4.8 3.27z" fill="#3ad1e0"/><path d="m243.51 273.63-16.68 36.56-101.52-260.61c-.76-1.95-2.64-3.25-4.74-3.27h30.86c2.13 0 4.03 1.29 4.8 3.27z" fill="#22c7db"/><path d="m310.81 465.69h-190.24c-2.84 0-5.15-2.3-5.15-5.15v-93.68c25.18-34.92 65.99-57.81 112.19-58.37l-16.07 35.21 74.5 39.08 29.56 75.9c1.32 3.37-1.17 7.01-4.79 7.01z" fill="#fb33a8"/><path d="m310.81 465.69h-30.92c3.61 0 6.11-3.64 4.79-7.01l-12.92-33.17c-1.92 4.55-2.88 9.61-2.61 14.91.01.13.01.25.01.38 0 5.92-7.39 8.87-11.45 4.36-6.77-7.49-16.03-11.24-25.29-11.24s-18.54 3.75-25.29 11.24c-1.36 1.52-3.11 2.19-4.83 2.19-3.48 0-6.84-2.78-6.62-6.93.03-.59.04-1.18.04-1.77 0-19.36-16.23-34.99-35.81-33.99-.12.01-.24.01-.37.01-5.92 0-8.87-7.4-4.37-11.46 7.49-6.76 11.24-16.03 11.24-25.29s-3.75-18.52-11.24-25.29c-1.51-1.36-2.18-3.1-2.18-4.81 0-3.48 2.78-6.84 6.92-6.64.6.04 1.19.05 1.77.05 12.81 0 23.98-7.11 29.79-17.57l34.29-1.12-14.22 31.16 74.5 39.08 29.56 75.9c1.32 3.37-1.17 7.01-4.79 7.01z" fill="#fb33a8"/><path d="m396.58 51.46v152.98c0 2.84-2.31 5.15-5.15 5.15h-32l-40.41-29.31-40.41 29.31h-17.82c-2.12 0-4.03-1.3-4.8-3.28l-59.6-152.98c-1.32-3.38 1.18-7.02 4.79-7.02h190.25c2.84 0 5.15 2.3 5.15 5.15z" fill="#fcb44d"/><path d="m396.576 51.457v152.982c0 2.843-2.308 5.151-5.151 5.151h-30.927c2.843 0 5.151-2.308 5.151-5.151v-152.982c0-2.843-2.308-5.151-5.151-5.151h30.927c2.843.001 5.151 2.308 5.151 5.151z" fill="#fb9927"/><g><path d="m359.428 181.065v28.526h-80.818v-28.526c0-22.324 18.1-40.414 40.414-40.414 11.157 0 21.263 4.522 28.567 11.837 7.314 7.314 11.837 17.409 11.837 28.577z" fill="#ae6ad8"/><path d="m359.43 181.065v28.526h-29.237v-28.526c0-11.167-4.522-21.263-11.837-28.577-3.935-3.935-8.674-7.067-13.949-9.107 4.533-1.762 9.467-2.73 14.618-2.73 11.157 0 21.263 4.522 28.567 11.837 7.316 7.314 11.838 17.409 11.838 28.577z" fill="#975bbb"/><g><g><circle cx="319.023" cy="121.497" fill="#f2eff2" r="26.224"/></g></g></g><path d="m396.576 250.798v70.011c0 2.845-2.306 5.151-5.151 5.151h-85.311c-2.123 0-4.029-1.303-4.8-3.281l-27.273-70.011c-1.316-3.377 1.175-7.021 4.8-7.021h112.585c2.844 0 5.15 2.306 5.15 5.151z" fill="#23f1a8"/><path d="m396.576 250.798v70.011c0 2.843-2.308 5.151-5.151 5.151h-30.927c2.843 0 5.151-2.308 5.151-5.151v-70.011c0-2.843-2.308-5.151-5.151-5.151h30.927c2.843 0 5.151 2.307 5.151 5.151z" fill="#27e19d"/><path d="m324.179 362.016h67.246c2.845 0 5.151 2.306 5.151 5.151v93.376c0 2.845-2.306 5.151-5.151 5.151h-30.866c-2.123 0-4.029-1.303-4.799-3.281l-36.38-93.376c-1.316-3.377 1.175-7.021 4.799-7.021z" fill="#23f1a8"/><path d="m396.576 367.167v93.376c0 2.843-2.308 5.151-5.151 5.151h-30.927c2.843 0 5.151-2.308 5.151-5.151v-93.376c0-2.843-2.308-5.151-5.151-5.151h30.927c2.843 0 5.151 2.308 5.151 5.151z" fill="#27e19d"/></g><g><path d="m269.153 413.978c.01.124.01.247.01.371 0 5.924-7.397 8.87-11.456 4.368-6.768-7.489-16.03-11.239-25.291-11.239s-18.533 3.75-25.291 11.239c-1.36 1.514-3.101 2.184-4.821 2.184-3.482 0-6.84-2.782-6.624-6.923.031-.597.041-1.185.041-1.772 0-19.367-16.236-34.995-35.809-33.996-.124.01-.247.01-.371.01-5.924 0-8.87-7.397-4.368-11.456 7.489-6.758 11.239-16.03 11.239-25.291s-3.75-18.523-11.239-25.291c-1.514-1.36-2.184-3.101-2.184-4.811 0-3.482 2.782-6.84 6.923-6.634.597.031 1.185.041 1.772.041 19.367 0 34.995-16.236 33.996-35.799-.01-.124-.01-.247-.01-.371 0-5.934 7.397-8.87 11.456-4.378 6.758 7.489 16.03 11.239 25.291 11.239 3.76 0 7.51-.618 11.095-1.844l42.526 109.158c-10.591 6.183-17.565 17.916-16.885 31.195z" fill="#fdef63"/><path d="m268.516 417.19c.406-.839.648-1.79.648-2.841 0-.123 0-.247-.01-.371-.68-13.279 6.294-25.013 16.885-31.194l-42.526-109.158c-3.585 1.226-7.335 1.844-11.095 1.844-7.992 0-15.988-2.799-22.374-8.378z" fill="#f3d730"/></g><g><g><path d="m229.374 349.967c-4.267 0-7.726-3.459-7.726-7.726v-29.272c0-4.267 3.459-7.726 7.726-7.726s7.726 3.459 7.726 7.726v29.272c0 4.267-3.459 7.726-7.726 7.726z" fill="#554e55"/></g><g><path d="m229.374 377.711c-4.267 0-7.726-3.459-7.726-7.726v-2.061c0-4.267 3.459-7.726 7.726-7.726s7.726 3.459 7.726 7.726v2.061c0 4.267-3.459 7.726-7.726 7.726z" fill="#554e55"/></g></g><g><g><path d="m258.185 86.361h-18.228c-4.267 0-7.726-3.459-7.726-7.726s3.459-7.726 7.726-7.726h18.228c4.267 0 7.726 3.459 7.726 7.726 0 4.266-3.459 7.726-7.726 7.726z" fill="#f2eff2"/></g><g><path d="m266.269 111.168h-18.229c-4.267 0-7.726-3.459-7.726-7.726s3.459-7.726 7.726-7.726h18.228c4.267 0 7.726 3.459 7.726 7.726s-3.458 7.726-7.725 7.726z" fill="#f2eff2"/></g></g></g></svg>',Jm=`<?xml version="1.0" encoding="UTF-8"?><svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background: new 0 0 512 512" xml:space="preserve" width="512" height="512"><g><g><g><path style="fill: #f2eff2" d="M422.485,504.5H89.515c-5.523,0-10-4.477-10-10v-477c0-5.523,4.477-10,10-10h332.971&#10;&#9;&#9;&#9;&#9;c5.523,0,10,4.477,10,10v477C432.485,500.023,428.008,504.5,422.485,504.5z"/></g></g><g><g><path style="fill: #e1dde1" d="M432.49,17.5v477c0,5.52-4.48,10-10,10h-40.03c5.52,0,10-4.48,10-10v-477c0-5.52-4.48-10-10-10&#10;&#9;&#9;&#9;&#9;h40.03C428.01,7.5,432.49,11.98,432.49,17.5z"/></g></g><g><path style="
          fill: none;
          stroke: #000000;
          stroke-width: 15;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-miterlimit: 10;
        " d="&#10;&#9;&#9;&#9;M334.56,7.5H89.515c-5.523,0-10,4.477-10,10v477c0,5.523,4.477,10,10,10h332.971c5.523,0,10-4.477,10-10v-477&#10;&#9;&#9;&#9;c0-5.523-4.477-10-10-10h-54.763"/></g><g><path style="fill: #3ad1e0" d="M313.86,452.74L159.16,55.63c-0.75-1.92-2.6-3.18-4.66-3.18h-29.96c-2.76,0-5,2.24-5,5v397.1&#10;&#9;&#9;&#9;c0,2.76,2.24,5,5,5h184.67C312.72,459.55,315.14,456.01,313.86,452.74z"/><path style="fill: #22c7db" d="M309.21,459.55h-30.02c3.51,0,5.93-3.54,4.65-6.81L129.14,55.63c-0.74-1.9-2.56-3.16-4.6-3.18&#10;&#9;&#9;&#9;h29.96c2.06,0,3.91,1.26,4.66,3.18l154.7,397.11C315.14,456.01,312.72,459.55,309.21,459.55z"/><path style="fill: #fb33a8" d="M258.193,309.845c-9.05-1.894-18.424-2.909-28.037-2.909c-45.55,0-85.862,22.354-110.616,56.676&#10;&#9;&#9;&#9;v90.938c0,2.76,2.24,5,5,5h184.67c3.51,0,5.93-3.54,4.65-6.81L258.193,309.845z"/><path style="fill: #ee2d9a" d="M193.362,311.966c-5.64,10.161-16.48,17.055-28.912,17.055c-0.57,0-1.14-0.01-1.72-0.04&#10;&#9;&#9;&#9;c-4.02-0.2-6.72,3.06-6.72,6.44c0,1.66,0.65,3.35,2.12,4.67c7.27,6.57,10.91,15.56,10.91,24.55s-3.64,17.99-10.91,24.55&#10;&#9;&#9;&#9;c-4.37,3.94-1.51,11.12,4.24,11.12c0.12,0,0.24,0,0.36-0.01c19-0.97,34.76,14.2,34.76,33c0,0.57-0.01,1.14-0.04,1.72&#10;&#9;&#9;&#9;c-0.21,4.02,3.05,6.72,6.43,6.72c1.67,0,3.36-0.65,4.68-2.12c6.56-7.27,15.56-10.91,24.55-10.91c8.99,0,17.98,3.64,24.55,10.91&#10;&#9;&#9;&#9;c3.94,4.37,11.12,1.51,11.12-4.24c0-0.12,0-0.24-0.01-0.36c-0.264-5.151,0.666-10.058,2.527-14.479l12.543,32.197&#10;&#9;&#9;&#9;c1.28,3.27-1.14,6.81-4.65,6.81h30.02c3.51,0,5.93-3.54,4.65-6.81l-55.667-142.895L193.362,311.966z"/><path style="
          fill: none;
          stroke: #000000;
          stroke-width: 15;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-miterlimit: 10;
        " d="&#10;&#9;&#9;&#9;M230.156,306.937c-45.55,0-85.862,22.354-110.616,56.676"/><path style="fill: #fcb44d" d="M392.46,57.45v148.5c0,2.76-2.24,5-5,5H260.65c-2.06,0-3.91-1.26-4.66-3.18l-57.85-148.5&#10;&#9;&#9;&#9;c-1.28-3.28,1.14-6.82,4.65-6.82h184.67C390.22,52.45,392.46,54.69,392.46,57.45z"/><path style="fill: #fb9927" d="M392.46,57.45v148.5c0,2.76-2.24,5-5,5h-30.021c2.76,0,5-2.24,5-5V57.45c0-2.76-2.24-5-5-5h30.021&#10;&#9;&#9;&#9;C390.22,52.45,392.46,54.69,392.46,57.45z"/><g><path style="fill: #ae6ad8" d="M356.4,183.26v27.69h-78.45v-27.69c0-21.67,17.57-39.23,39.23-39.23&#10;&#9;&#9;&#9;&#9;c10.83,0,20.64,4.39,27.73,11.49C352.01,162.62,356.4,172.42,356.4,183.26z"/><path style="fill: #975bbb" d="M356.402,183.26v27.69h-28.38v-27.69c0-10.84-4.39-20.64-11.49-27.74&#10;&#9;&#9;&#9;&#9;c-3.82-3.82-8.42-6.86-13.54-8.84c4.4-1.71,9.19-2.65,14.19-2.65c10.83,0,20.64,4.39,27.73,11.49&#10;&#9;&#9;&#9;&#9;C352.012,162.62,356.402,172.42,356.402,183.26z"/><path style="
            fill: none;
            stroke: #000000;
            stroke-width: 15;
            stroke-linecap: round;
            stroke-linejoin: round;
            stroke-miterlimit: 10;
          " d="&#10;&#9;&#9;&#9;&#9;M277.95,210.95v-27.69c0-21.67,17.57-39.23,39.23-39.23c10.83,0,20.64,4.39,27.73,11.49c7.1,7.1,11.49,16.9,11.49,27.74v27.69"/><g><circle style="fill: #f2eff2" cx="317.179" cy="125.438" r="25.456"/><circle style="
              fill: none;
              stroke: #000000;
              stroke-width: 15;
              stroke-linecap: round;
              stroke-linejoin: round;
              stroke-miterlimit: 10;
            " cx="317.179" cy="125.438" r="25.456"/></g></g><path style="fill: #23f1a8" d="M392.46,250.95v67.96c0,2.761-2.239,5-5,5h-82.812c-2.061,0-3.911-1.265-4.659-3.185l-26.474-67.96&#10;&#9;&#9;&#9;c-1.277-3.278,1.141-6.815,4.659-6.815H387.46C390.221,245.95,392.46,248.189,392.46,250.95z"/><path style="fill: #27e19d" d="M392.46,250.95v67.96c0,2.76-2.24,5-5,5h-30.021c2.76,0,5-2.24,5-5v-67.96c0-2.76-2.24-5-5-5&#10;&#9;&#9;&#9;h30.021C390.22,245.95,392.46,248.19,392.46,250.95z"/><path style="fill: #23f1a8" d="M322.184,358.91h65.276c2.761,0,5,2.239,5,5v90.64c0,2.761-2.239,5-5,5h-29.962&#10;&#9;&#9;&#9;c-2.061,0-3.911-1.265-4.659-3.185l-35.314-90.64C316.248,362.447,318.666,358.91,322.184,358.91z"/><path style="fill: #27e19d" d="M392.46,363.91v90.64c0,2.76-2.24,5-5,5h-30.021c2.76,0,5-2.24,5-5v-90.64c0-2.76-2.24-5-5-5&#10;&#9;&#9;&#9;h30.021C390.22,358.91,392.46,361.15,392.46,363.91z"/><path style="
          fill: none;
          stroke: #000000;
          stroke-width: 15;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-miterlimit: 10;
        " d="&#10;&#9;&#9;&#9;M119.54,242.003V454.55c0,2.761,2.239,5,5,5h184.666c3.518,0,5.936-3.537,4.659-6.815l-154.704-397.1&#10;&#9;&#9;&#9;c-0.748-1.92-2.598-3.185-4.659-3.185H124.54c-2.761,0-5,2.239-5,5v151.391"/><path style="
          fill: none;
          stroke: #000000;
          stroke-width: 15;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-miterlimit: 10;
        " d="&#10;&#9;&#9;&#9;M392.46,57.45v148.5c0,2.761-2.239,5-5,5H260.648c-2.061,0-3.911-1.265-4.659-3.185l-57.854-148.5&#10;&#9;&#9;&#9;c-1.277-3.278,1.141-6.815,4.659-6.815H387.46C390.221,52.45,392.46,54.689,392.46,57.45z"/><path style="
          fill: none;
          stroke: #000000;
          stroke-width: 15;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-miterlimit: 10;
        " d="&#10;&#9;&#9;&#9;M306.627,245.95h-28.454c-3.518,0-5.936,3.537-4.659,6.815l26.474,67.96c0.748,1.92,2.598,3.185,4.659,3.185h82.812&#10;&#9;&#9;&#9;c2.761,0,5-2.239,5-5v-67.96c0-2.761-2.239-5-5-5h-47.67"/><path style="
          fill: none;
          stroke: #000000;
          stroke-width: 15;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-miterlimit: 10;
        " d="&#10;&#9;&#9;&#9;M322.184,358.91h65.276c2.761,0,5,2.239,5,5v90.64c0,2.761-2.239,5-5,5h-29.962c-2.061,0-3.911-1.265-4.659-3.185l-35.314-90.64&#10;&#9;&#9;&#9;C316.248,362.447,318.666,358.91,322.184,358.91z"/></g><g><path style="fill: #fdef63" d="M268.77,409.35c0.01,0.12,0.01,0.24,0.01,0.36c0,5.75-7.18,8.61-11.12,4.24&#10;&#9;&#9;&#9;c-6.57-7.27-15.56-10.91-24.55-10.91c-8.99,0-17.99,3.64-24.55,10.91c-1.32,1.47-3.01,2.12-4.68,2.12c-3.38,0-6.64-2.7-6.43-6.72&#10;&#9;&#9;&#9;c0.03-0.58,0.04-1.15,0.04-1.72c0-18.8-15.76-33.97-34.76-33c-0.12,0.01-0.24,0.01-0.36,0.01c-5.75,0-8.61-7.18-4.24-11.12&#10;&#9;&#9;&#9;c7.27-6.56,10.91-15.56,10.91-24.55s-3.64-17.98-10.91-24.55c-1.47-1.32-2.12-3.01-2.12-4.67c0-3.38,2.7-6.64,6.72-6.44&#10;&#9;&#9;&#9;c0.58,0.03,1.15,0.04,1.72,0.04c18.8,0,33.97-15.76,33-34.75c-0.01-0.12-0.01-0.24-0.01-0.36c0-5.76,7.18-8.61,11.12-4.25&#10;&#9;&#9;&#9;c6.56,7.27,15.56,10.91,24.55,10.91c3.65,0,7.29-0.6,10.77-1.79l41.28,105.96C274.88,385.07,268.11,396.46,268.77,409.35z"/><path style="fill: #f3d730" d="M268.151,412.468c0.394-0.814,0.629-1.738,0.629-2.758c0-0.12,0-0.24-0.01-0.36&#10;&#9;&#9;&#9;c-0.66-12.89,6.11-24.28,16.39-30.28l-41.28-105.96c-3.48,1.19-7.12,1.79-10.77,1.79c-7.758,0-15.52-2.717-21.718-8.132&#10;&#9;&#9;&#9;L268.151,412.468z"/><path style="
          fill: none;
          stroke: #000000;
          stroke-width: 15;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-miterlimit: 10;
        " d="&#10;&#9;&#9;&#9;M268.77,409.35c0.01,0.12,0.01,0.24,0.01,0.36c0,5.75-7.18,8.61-11.12,4.24c-6.57-7.27-15.56-10.91-24.55-10.91&#10;&#9;&#9;&#9;c-8.99,0-17.99,3.64-24.55,10.91c-1.32,1.47-3.01,2.12-4.68,2.12c-3.38,0-6.64-2.7-6.43-6.72c0.03-0.58,0.04-1.15,0.04-1.72&#10;&#9;&#9;&#9;c0-18.8-15.76-33.97-34.76-33c-0.12,0.01-0.24,0.01-0.36,0.01c-5.75,0-8.61-7.18-4.24-11.12c7.27-6.56,10.91-15.56,10.91-24.55&#10;&#9;&#9;&#9;s-3.64-17.98-10.91-24.55c-1.47-1.32-2.12-3.01-2.12-4.67c0-3.38,2.7-6.64,6.72-6.44c0.58,0.03,1.15,0.04,1.72,0.04&#10;&#9;&#9;&#9;c18.8,0,33.97-15.76,33-34.75c-0.01-0.12-0.01-0.24-0.01-0.36c0-5.76,7.18-8.61,11.12-4.25c6.56,7.27,15.56,10.91,24.55,10.91&#10;&#9;&#9;&#9;c3.65,0,7.29-0.6,10.77-1.79l41.28,105.96C274.88,385.07,268.11,396.46,268.77,409.35z"/></g><g><line style="
          fill: none;
          stroke: #000000;
          stroke-width: 15;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-miterlimit: 10;
        " x1="230.156" y1="339.714" x2="230.156" y2="311.299"/><line style="
          fill: none;
          stroke: #000000;
          stroke-width: 15;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-miterlimit: 10;
        " x1="230.156" y1="364.644" x2="230.156" y2="366.646"/></g><g><line style="
          fill: none;
          stroke: #000000;
          stroke-width: 15;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-miterlimit: 10;
        " x1="240.429" y1="83.83" x2="258.124" y2="83.83"/><line style="
          fill: none;
          stroke: #000000;
          stroke-width: 15;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-miterlimit: 10;
        " x1="248.276" y1="107.911" x2="265.97" y2="107.911"/></g></g></svg>`,Qm=`<?xml version="1.0" encoding="UTF-8"?><svg version="1.1" id="svg3390" xml:space="preserve" width="682.66669" height="682.66669" viewBox="0 0 682.66669 682.66669" xmlns="http://www.w3.org/2000/svg"><defs id="defs3394"><clipPath clipPathUnits="userSpaceOnUse" id="clipPath3404"><path d="M 0,512 H 512 V 0 H 0 Z" id="path3402"/></clipPath></defs><g id="g3396" transform="matrix(1.3333333,0,0,-1.3333333,0,682.66667)"><g id="g3398"><g id="g3400" clip-path="url(#clipPath3404)"><g id="g3406" transform="translate(451.7344)"><path d="m 0,0 h -391.469 c -11.379,0 -20.603,9.225 -20.603,20.604 v 470.792 c 0,11.379 9.224,20.604 20.603,20.604 L 0,512 c 11.379,0 20.604,-9.225 20.604,-20.604 V 20.604 C 20.604,9.225 11.379,0 0,0" style="fill: #efe6e6; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path3408"/></g><g id="g3410" transform="translate(472.3376,41.2072)"><path d="m 0,0 c -216.202,0 -391.468,175.266 -391.468,391.468 v 79.325 h -20.604 c -11.379,0 -20.604,-9.225 -20.604,-20.604 V -20.604 c 0,-11.379 9.225,-20.603 20.604,-20.603 H -20.603 C -9.224,-41.207 0,-31.983 0,-20.604 Z" style="fill: #e2d7d7; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path3412"/></g><g id="g3414" transform="translate(235.3964,198.1382)"><path d="M 0,0 H 195.734 V 272.655 H 82.414 Z" style="fill: #ffffff; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path3416"/></g><g id="g3418" transform="translate(235.3964,198.1382)"><path d="M 0,0 H 195.734 V 272.655 H 82.414 Z" style="fill: #5ad6ff; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path3420"/></g><g id="g3422" transform="translate(80.8692,198.1382)"><path d="m 0,0 h 113.32 l 82.414,272.655 H 0 Z" style="fill: #f4e74d; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path3424"/></g><g id="g3426" transform="translate(80.8692,432.6757)"><path d="M 0,0 V -234.537 H 78.01 C 29.021,-169.169 0,-87.974 0,0" style="fill: #eedb00; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path3428"/></g><path d="M 431.131,41.207 H 80.869 v 115.724 h 350.262 z" style="fill: #b18cd9; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path3430"/><g id="g3432" transform="translate(194.475,156.931)"><path d="m 0,0 h -113.606 v -115.724 h 350.262 v 2.149 C 144.487,-103.933 61.838,-62.31 0,0" style="fill: #996acc; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path3434"/></g><g id="g3436" transform="translate(213.2632,94.3332)"><path d="m 0,0 c 0,-10.991 -11.188,-19.901 -24.99,-19.901 -13.801,0 -24.989,8.91 -24.989,19.901 0,10.991 11.188,19.9 24.989,19.9 C -11.188,19.9 0,10.991 0,0" style="fill: #ffffff; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path3438"/></g><g id="g3440" transform="translate(298.7368,94.3332)"><path d="m 0,0 c 0,-10.991 11.188,-19.901 24.99,-19.901 13.801,0 24.989,8.91 24.989,19.901 0,10.991 -11.188,19.9 -24.989,19.9 C 11.188,19.9 0,10.991 0,0" style="fill: #ffffff; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path3442"/></g><g id="g3444" transform="translate(202.8374,123.7057)"><path d="M 0,0 V -10.216" style="
              fill: none;
              stroke: #3d4751;
              stroke-width: 15;
              stroke-linecap: round;
              stroke-linejoin: round;
              stroke-miterlimit: 10;
              stroke-dasharray: none;
              stroke-opacity: 1;
            " id="path3446"/></g><g id="g3448" transform="translate(309.1625,123.7057)"><path d="M 0,0 V -10.216" style="
              fill: none;
              stroke: #3d4751;
              stroke-width: 15;
              stroke-linecap: round;
              stroke-linejoin: round;
              stroke-miterlimit: 10;
              stroke-dasharray: none;
              stroke-opacity: 1;
            " id="path3450"/></g><g id="g3452" transform="translate(241.984,113.7942)"><path d="m 0,0 c 3.408,-3.911 8.421,-6.385 14.016,-6.385 5.595,0 10.608,2.474 14.016,6.385" style="
              fill: none;
              stroke: #3d4751;
              stroke-width: 15;
              stroke-linecap: round;
              stroke-linejoin: round;
              stroke-miterlimit: 10;
              stroke-dasharray: none;
              stroke-opacity: 1;
            " id="path3454"/></g><g id="g3456" transform="translate(150.0629,447.8862)"><path d="m 0,0 33.436,22.907 h -102.63 v -161.294 l 21.382,72.58 59.96,-46.151 -25.363,71.287 75.636,-2.093 z" style="fill: #fd5c6f; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path3458"/></g><g id="g3460" transform="translate(80.8692,432.6757)"><path d="m 0,0 v -123.177 l 10.122,34.358 C 3.502,-60.282 0,-30.55 0,0" style="fill: #f6334c; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path3462"/></g><g id="g3464" transform="translate(431.1308,271.141)"><path d="m 0,0 -57.698,-44.41 24.406,68.598 -72.782,-2.014 60.066,41.15 -60.066,41.151 72.782,-2.014 -24.406,68.597 L 0,126.649 Z" style="fill: #ffffff; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path3466"/></g></g></g></g></svg>`,e5=`<?xml version="1.0" encoding="UTF-8"?><svg version="1.1" id="svg5007" xml:space="preserve" width="682.66669" height="682.66669" viewBox="0 0 682.66669 682.66669" xmlns="http://www.w3.org/2000/svg"><defs id="defs5011"><clipPath clipPathUnits="userSpaceOnUse" id="clipPath5021"><path d="M 0,512 H 512 V 0 H 0 Z" id="path5019"/></clipPath></defs><g id="g5013" transform="matrix(1.3333333,0,0,-1.3333333,0,682.66667)"><g id="g5015"><g id="g5017" clip-path="url(#clipPath5021)"><g id="g5023" transform="translate(446,7.5)"><path d="m 0,0 h -380 c -11.046,0 -20,8.954 -20,20 v 457 c 0,11.046 8.954,20 20,20 H 0 c 11.046,0 20,-8.954 20,-20 V 20 C 20,8.954 11.046,0 0,0" style="fill: #efe6e6; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path5025"/></g><g id="g5027" transform="translate(465.9996,47.5)"><path d="m 0,0 c -209.868,0 -380,170.132 -380,380 v 77 h -20 c -11.045,0 -20,-8.954 -20,-20 V -20 c 0,-11.046 8.955,-20 20,-20 h 380 c 11.046,0 20,8.954 20,20 z" style="fill: #e2d7d7; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path5029"/></g><g id="g5031" transform="translate(236,199.8333)"><path d="M 0,0 H 190 V 264.667 H 80 Z" style="fill: #ffffff; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path5033"/></g><g id="g5035" transform="translate(236,199.8333)"><path d="M 0,0 H 190 V 264.667 H 80 Z" style="fill: #5ad6ff; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path5037"/></g><g id="g5039" transform="translate(86,199.8333)"><path d="m 0,0 h 110 l 80,264.667 H 0 Z" style="fill: #f4e74d; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path5041"/></g><g id="g5043" transform="translate(86,427.4996)"><path d="M 0,0 V -227.666 H 75.725 C 28.171,-164.213 0,-85.397 0,0" style="fill: #eedb00; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path5045"/></g><path d="M 426,47.5 H 86 v 112.333 h 340 z" style="fill: #b18cd9; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path5047"/><g id="g5049" transform="translate(196.2775,159.8334)"><path d="m 0,0 h -110.278 v -112.333 h 340 v 2.085 C 140.254,-100.888 60.026,-60.484 0,0" style="fill: #996acc; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path5051"/></g><g id="g5053" transform="translate(214.5152,99.0695)"><path d="m 0,0 c 0,-10.669 -10.861,-19.318 -24.258,-19.318 -13.397,0 -24.257,8.649 -24.257,19.318 0,10.669 10.86,19.317 24.257,19.317 C -10.861,19.317 0,10.669 0,0" style="fill: #ffffff; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path5055"/></g><g id="g5057" transform="translate(297.4848,99.0695)"><path d="m 0,0 c 0,-10.669 10.861,-19.318 24.258,-19.318 13.397,0 24.257,8.649 24.257,19.318 0,10.669 -10.86,19.317 -24.257,19.317 C 10.861,19.317 0,10.669 0,0" style="fill: #ffffff; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path5059"/></g><g id="g5061" transform="translate(204.3949,127.5815)"><path d="M 0,0 V -9.916" style="
              fill: none;
              stroke: #000000;
              stroke-width: 15;
              stroke-linecap: round;
              stroke-linejoin: round;
              stroke-miterlimit: 10;
              stroke-dasharray: none;
              stroke-opacity: 1;
            " id="path5063"/></g><g id="g5065" transform="translate(307.605,127.5815)"><path d="M 0,0 V -9.916" style="
              fill: none;
              stroke: #000000;
              stroke-width: 15;
              stroke-linecap: round;
              stroke-linejoin: round;
              stroke-miterlimit: 10;
              stroke-dasharray: none;
              stroke-opacity: 1;
            " id="path5067"/></g><g id="g5069" transform="translate(242.3946,117.9604)"><path d="m 0,0 c 3.308,-3.796 8.175,-6.198 13.605,-6.198 5.431,0 10.298,2.402 13.606,6.198" style="
              fill: none;
              stroke: #000000;
              stroke-width: 15;
              stroke-linecap: round;
              stroke-linejoin: round;
              stroke-miterlimit: 10;
              stroke-dasharray: none;
              stroke-opacity: 1;
            " id="path5071"/></g><g id="g5073" transform="translate(153.1665,442.2645)"><path d="m 0,0 32.456,22.235 h -99.623 v -156.568 l 20.756,70.454 58.203,-44.799 -24.62,69.199 73.42,-2.032 z" style="fill: #fd5c6f; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path5075"/></g><g id="g5077" transform="translate(86,427.4996)"><path d="m 0,0 v -119.568 l 9.825,33.351 C 3.399,-58.516 0,-29.655 0,0" style="fill: #f6334c; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path5079"/></g><g id="g5081" transform="translate(426,270.6974)"><path d="m 0,0 -56.008,-43.108 23.692,66.587 -70.65,-1.955 58.306,39.945 -58.306,39.945 70.65,-1.955 -23.692,66.588 L 0,122.939 Z" style="fill: #ffffff; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path5083"/></g><g id="g5085" transform="translate(446,7.5)"><path d="m 0,0 h -380 c -11.046,0 -20,8.954 -20,20 v 457 c 0,11.046 8.954,20 20,20 H 0 c 11.046,0 20,-8.954 20,-20 V 20 C 20,8.954 11.046,0 0,0 Z" style="
              fill: none;
              stroke: #000000;
              stroke-width: 15;
              stroke-linecap: round;
              stroke-linejoin: round;
              stroke-miterlimit: 10;
              stroke-dasharray: none;
              stroke-opacity: 1;
            " id="path5087"/></g><g id="g5089" transform="translate(426,346.167)"><path d="m 0,0 v 118.333 h -110 l -80,-264.667 H 0 V -28" style="
              fill: none;
              stroke: #000000;
              stroke-width: 15;
              stroke-linecap: round;
              stroke-linejoin: round;
              stroke-miterlimit: 10;
              stroke-dasharray: none;
              stroke-opacity: 1;
            " id="path5091"/></g><g id="g5093" transform="translate(86,199.8333)"><path d="m 0,0 h 110 l 80,264.667 H 0 Z" style="
              fill: none;
              stroke: #000000;
              stroke-width: 15;
              stroke-linecap: round;
              stroke-linejoin: round;
              stroke-miterlimit: 10;
              stroke-dasharray: none;
              stroke-opacity: 1;
            " id="path5095"/></g><g id="g5097" transform="translate(154.0172,159.8334)"><path d="m 0,0 h 271.983 v -112.333 h -340 V 0 H -28" style="
              fill: none;
              stroke: #000000;
              stroke-width: 15;
              stroke-linecap: round;
              stroke-linejoin: round;
              stroke-miterlimit: 10;
              stroke-dasharray: none;
              stroke-opacity: 1;
            " id="path5099"/></g><g id="g5101" transform="translate(86,307.9314)"><path d="m 0,0 20.756,70.454 58.203,-44.799 -24.62,69.199 73.419,-2.032 -60.591,41.511 32.455,22.236" style="
              fill: none;
              stroke: #000000;
              stroke-width: 15;
              stroke-linecap: round;
              stroke-linejoin: round;
              stroke-miterlimit: 10;
              stroke-dasharray: none;
              stroke-opacity: 1;
            " id="path5103"/></g><g id="g5105" transform="translate(426,270.6974)"><path d="m 0,0 -56.008,-43.108 23.692,66.587 -70.65,-1.955 58.306,39.945 -58.306,39.945 70.65,-1.955 -23.692,66.588 L 0,122.939" style="
              fill: none;
              stroke: #000000;
              stroke-width: 15;
              stroke-linecap: round;
              stroke-linejoin: round;
              stroke-miterlimit: 10;
              stroke-dasharray: none;
              stroke-opacity: 1;
            " id="path5107"/></g></g></g></g></svg>`,t5='<svg id="Capa_1" enable-background="new 0 0 512 512" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><g><g><g><path d="m427.508 512h-343.02c-5.69 0-10.302-4.612-10.302-10.302v-491.396c0-5.69 4.612-10.302 10.302-10.302h343.02c5.69 0 10.302 4.612 10.302 10.302v491.396c-.001 5.69-4.613 10.302-10.302 10.302z" fill="#f2eff2"/></g></g><path d="m427.512 0h-41.238c5.687 0 10.302 4.615 10.302 10.302v36.12l-18.016 49.462 18.016 36.952v51.701l-13.787 87.003 13.787 55.974v51.669l-18.016 52.406 18.016 34.008v36.1c0 5.687-4.615 10.302-10.302 10.302h41.238c5.687 0 10.302-4.615 10.302-10.302v-491.395c0-5.687-4.615-10.302-10.302-10.302z" fill="#e1dde1"/><path d="m396.6 46.36v86.52c0 2.85-2.31 5.15-5.15 5.15h-110.11l-22.53-48.41 22.53-48.41h110.11c2.84 0 5.15 2.3 5.15 5.15z" fill="#3ad1e0"/><path d="m396.599 46.358v86.525c0 2.843-2.308 5.151-5.151 5.151h-30.926c2.843 0 5.151-2.308 5.151-5.151v-86.525c0-2.843-2.308-5.151-5.151-5.151h30.926c2.844 0 5.151 2.308 5.151 5.151z" fill="#20bfd5"/><path d="m281.34 41.207h-39.904c-2.845 0-5.151 2.306-5.151 5.151v86.525c0 2.845 2.306 5.151 5.151 5.151h39.904z" fill="#23f1a8"/><path d="m304.73 470.79h-77.71l-39.22-20.29-39.23 20.29h-28.03c-2.84 0-5.15-2.3-5.15-5.15v-86.52c0-2.85 2.31-5.15 5.15-5.15h128.92c1.76 0 3.4.89 4.34 2.37l55.27 86.53c2.19 3.43-.27 7.92-4.34 7.92z" fill="#23f1a8"/><g><path d="m227.019 443.104v27.689h-78.446v-27.689c0-21.669 17.569-39.228 39.228-39.228 10.83 0 20.639 4.39 27.729 11.489 7.099 7.1 11.489 16.899 11.489 27.739z" fill="#ae6ad8"/><path d="m227.021 443.101v27.691h-29.061v-27.691c0-10.838-4.389-20.634-11.486-27.732-3.729-3.74-8.211-6.727-13.207-8.715 4.492-1.793 9.406-2.782 14.536-2.782 10.827 0 20.635 4.389 27.732 11.497 7.097 7.098 11.486 16.895 11.486 27.732z" fill="#975bbb"/></g><path d="m304.728 470.793h-30.926c4.069 0 6.531-4.492 4.347-7.922l-55.269-86.525c-.948-1.483-2.586-2.38-4.347-2.38h30.926c1.762 0 3.4.896 4.347 2.38l55.269 86.525c2.184 3.43-.278 7.922-4.347 7.922z" fill="#27e19d"/><path d="m391.448 373.966h-81.106c-4.068 0-6.531 4.495-4.341 7.924l55.269 86.525c.946 1.482 2.583 2.378 4.341 2.378h25.837c2.845 0 5.151-2.306 5.151-5.151v-86.525c0-2.845-2.306-5.151-5.151-5.151z" fill="#ae6ad8"/><path d="m396.599 379.117v86.525c0 2.843-2.308 5.151-5.151 5.151h-25.837c-.907 0-1.772-.237-2.534-.68 1.556-.886 2.596-2.555 2.596-4.471v-86.525c0-2.843-2.308-5.151-5.151-5.151h30.926c2.844 0 5.151 2.308 5.151 5.151z" fill="#975bbb"/><g><path d="m195.602 46.358v86.525c0 2.845-2.306 5.151-5.151 5.151h-69.91c-2.845 0-5.151-2.306-5.151-5.151v-86.525c0-2.845 2.306-5.151 5.151-5.151h69.91c2.845 0 5.151 2.306 5.151 5.151z" fill="#3ad1e0"/><path d="m195.6 46.358v86.525c0 2.843-2.308 5.151-5.151 5.151h-30.926c2.843 0 5.151-2.308 5.151-5.151v-86.525c0-2.843-2.308-5.151-5.151-5.151h30.926c2.844 0 5.151 2.308 5.151 5.151z" fill="#20bfd5"/></g><g><path d="m396.6 184.39v143.22c0 2.84-2.31 5.15-5.15 5.15h-30.93l-104.53-27.53-104.52 27.53h-30.93c-2.84 0-5.15-2.31-5.15-5.15v-143.22c0-2.84 2.31-5.15 5.15-5.15h47.77l87.68 16.15 87.69-16.15h47.77c2.84 0 5.15 2.31 5.15 5.15z" fill="#fb54b6"/></g><path d="m151.473 332.759c0-57.729 46.798-104.527 104.527-104.527s104.527 46.798 104.527 104.527z" fill="#fb9927"/><path d="m360.522 332.759h-35.397c0-51.694-37.519-94.612-86.824-103.028 5.748-.979 11.662-1.494 17.699-1.494 57.731 0 104.522 46.79 104.522 104.522z" fill="#f98824"/><g><path d="m396.599 184.392v143.216c0 2.843-2.308 5.151-5.151 5.151h-30.926c2.843 0 5.151-2.308 5.151-5.151v-143.216c0-2.843-2.308-5.151-5.151-5.151h30.926c2.844 0 5.151 2.308 5.151 5.151z" fill="#fb33a8"/></g><g><g><path d="m345.43 247.027c-.144 0-.299 0-.453-.01-24.024-1.226-43.947 17.946-43.947 41.722 0 .721.021 1.442.051 2.174.268 5.079-3.853 8.489-8.128 8.489-2.112 0-4.244-.814-5.913-2.678-8.293-9.189-19.676-13.794-31.039-13.794s-22.746 4.605-31.039 13.794c-1.669 1.865-3.801 2.678-5.913 2.678-4.275 0-8.396-3.41-8.128-8.489.031-.731.041-1.453.041-2.174 0-23.777-19.924-42.948-43.937-41.722-.155.01-.309.01-.464.01-7.263 0-10.879-9.076-5.357-14.062 9.189-8.293 13.794-19.666 13.794-31.039 0-7.912-2.225-15.813-6.686-22.685h175.378c-4.461 6.871-6.686 14.773-6.686 22.685 0 11.373 4.605 22.746 13.794 31.039 5.521 4.986 1.905 14.062-5.368 14.062z" fill="#fdef63"/><g><g id="XMLID_00000127012381744132405410000009872483291948348836_"><path d="m280.138 231.696c-4.268 0-7.726-3.459-7.726-7.726v-.107c0-4.267 3.459-7.726 7.726-7.726s7.726 3.459 7.726 7.726v.107c0 4.267-3.459 7.726-7.726 7.726z" fill="#554e55"/></g><g id="XMLID_00000080918978500845250090000017315552773041050031_"><path d="m256 231.696c-4.267 0-7.726-3.459-7.726-7.726v-.107c0-4.267 3.459-7.726 7.726-7.726 4.268 0 7.726 3.459 7.726 7.726v.107c0 4.267-3.458 7.726-7.726 7.726z" fill="#554e55"/></g><g id="XMLID_00000140711681861242238370000008769002181148908969_"><path d="m231.862 231.696c-4.267 0-7.726-3.459-7.726-7.726v-.107c0-4.267 3.459-7.726 7.726-7.726s7.726 3.459 7.726 7.726v.107c.001 4.267-3.459 7.726-7.726 7.726z" fill="#554e55"/></g></g><path d="m345.43 247.037c-.155 0-.299 0-.443-.021-24.034-1.226-43.948 17.956-43.948 41.722 0 .721.01 1.432.052 2.174.258 5.079-3.863 8.499-8.128 8.499-2.122 0-4.255-.824-5.924-2.689-6.954-7.685-16.05-12.167-25.507-13.423 29.968-14.804 50.582-45.678 50.582-81.364 0-7.84-.999-15.442-2.864-22.695h34.429c-4.45 6.871-6.676 14.783-6.676 22.685 0 11.373 4.605 22.757 13.784 31.05 5.532 4.966 1.926 14.062-5.357 14.062z" fill="#f3d730"/></g></g><g><g><g><circle cx="187.8" cy="385.284" fill="#d8b2ec" r="25.455"/></g></g></g><g><g id="XMLID_00000028301319025648580530000009457246182494066313_"><path d="m316.443 111.45c-4.258 0-7.714-3.445-7.726-7.705-.012-4.267 3.438-7.736 7.705-7.747l41.222-.114h.021c4.258 0 7.714 3.445 7.726 7.705.012 4.267-3.438 7.736-7.705 7.747l-41.222.114c-.007 0-.014 0-.021 0z" fill="#f2eff2"/></g><g><path d="m357.665 83.243h-21.761c-4.268 0-7.726-3.459-7.726-7.726s3.459-7.726 7.726-7.726h21.761c4.268 0 7.726 3.459 7.726 7.726s-3.458 7.726-7.726 7.726z" fill="#f2eff2"/></g></g></g></svg>',n5=`<?xml version="1.0" encoding="UTF-8"?><svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background: new 0 0 512 512" xml:space="preserve" width="512" height="512"><g><g><g><path style="fill: #f2eff2" d="M422.485,504.5H89.515c-5.523,0-10-4.477-10-10v-477c0-5.523,4.477-10,10-10h332.971&#10;&#9;&#9;&#9;&#9;c5.523,0,10,4.477,10,10v477C432.485,500.023,428.008,504.5,422.485,504.5z"/></g></g><g><g><path style="fill: #e1dde1" d="M432.49,17.5v477c0,5.52-4.48,10-10,10h-40.03c5.52,0,10-4.48,10-10v-477c0-5.52-4.48-10-10-10&#10;&#9;&#9;&#9;&#9;h40.03C428.01,7.5,432.49,11.98,432.49,17.5z"/></g></g><g><path style="
          fill: none;
          stroke: #000000;
          stroke-width: 15;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-miterlimit: 10;
        " d="&#10;&#9;&#9;&#9;M158.639,7.5H89.515c-5.523,0-10,4.477-10,10v477c0,5.523,4.477,10,10,10h332.971c5.523,0,10-4.477,10-10v-477&#10;&#9;&#9;&#9;c0-5.523-4.477-10-10-10H191.801"/></g><path style="fill: #3ad1e0" d="M392.482,52.5v83.99c0,2.761-2.239,5-5,5H241.866c-2.761,0-5-2.239-5-5V52.5c0-2.761,2.239-5,5-5&#10;&#9;&#9;h145.617C390.244,47.5,392.482,49.739,392.482,52.5z"/><path style="fill: #20bfd5" d="M392.482,52.5v83.99c0,2.76-2.24,5-5,5h-30.02c2.76,0,5-2.24,5-5V52.5c0-2.76-2.24-5-5-5h30.02&#10;&#9;&#9;C390.242,47.5,392.482,49.74,392.482,52.5z"/><path style="fill: #26d192" d="M280.6,47.5h-38.735c-2.761,0-5,2.239-5,5v83.99c0,2.761,2.239,5,5,5H280.6V47.5z"/><line style="
        fill: none;
        stroke: #000000;
        stroke-width: 15;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-miterlimit: 10;
      " x1="280.6" y1="141.49" x2="280.6" y2="47.5"/><path style="fill: #23f1a8" d="M124.512,370.51h125.143c1.706,0,3.295,0.87,4.214,2.308l53.65,83.99&#10;&#9;&#9;c2.126,3.328-0.264,7.692-4.214,7.692H124.512c-2.761,0-5-2.239-5-5v-83.99C119.512,372.749,121.751,370.51,124.512,370.51z"/><g><path style="fill: #ae6ad8" d="M227.87,437.622V464.5h-76.148v-26.878c0-21.034,17.054-38.079,38.079-38.079&#10;&#9;&#9;&#9;c10.512,0,20.034,4.261,26.916,11.153C223.609,417.588,227.87,427.1,227.87,437.622z"/><path style="fill: #975bbb" d="M227.872,437.62v26.88h-28.21v-26.88c0-10.52-4.26-20.03-11.15-26.92&#10;&#9;&#9;&#9;c-3.62-3.63-7.97-6.53-12.82-8.46c4.36-1.74,9.13-2.7,14.11-2.7c10.51,0,20.03,4.26,26.92,11.16&#10;&#9;&#9;&#9;C223.612,417.59,227.872,427.1,227.872,437.62z"/><path style="
          fill: none;
          stroke: #000000;
          stroke-width: 15;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-miterlimit: 10;
        " d="&#10;&#9;&#9;&#9;M151.722,464.5v-26.878c0-21.034,17.054-38.079,38.079-38.079c10.512,0,20.034,4.261,26.916,11.153&#10;&#9;&#9;&#9;c6.892,6.892,11.153,16.404,11.153,26.926V464.5"/></g><path style="fill: #27e19d" d="M303.302,464.5h-30.02c3.95,0,6.34-4.36,4.22-7.69l-53.65-83.99c-0.92-1.44-2.51-2.31-4.22-2.31&#10;&#9;&#9;h30.02c1.71,0,3.3,0.87,4.22,2.31l53.65,83.99C309.642,460.14,307.252,464.5,303.302,464.5z"/><path style="fill: #ae6ad8" d="M387.482,370.51h-78.73c-3.949,0-6.34,4.363-4.214,7.692l53.65,83.99&#10;&#9;&#9;c0.919,1.438,2.507,2.308,4.214,2.308h25.08c2.761,0,5-2.239,5-5v-83.99C392.482,372.749,390.244,370.51,387.482,370.51z"/><path style="fill: #975bbb" d="M392.482,375.51v83.99c0,2.76-2.24,5-5,5h-25.08c-0.88,0-1.72-0.23-2.46-0.66&#10;&#9;&#9;c1.51-0.86,2.52-2.48,2.52-4.34v-83.99c0-2.76-2.24-5-5-5h30.02C390.242,370.51,392.482,372.75,392.482,375.51z"/><path style="
        fill: none;
        stroke: #000000;
        stroke-width: 15;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-miterlimit: 10;
      " d="&#10;&#9;&#9;M392.482,52.5v83.99c0,2.761-2.239,5-5,5H241.866c-2.761,0-5-2.239-5-5V52.5c0-2.761,2.239-5,5-5h145.617&#10;&#9;&#9;C390.244,47.5,392.482,49.739,392.482,52.5z"/><g><path style="fill: #3ad1e0" d="M197.374,52.5v83.99c0,2.761-2.239,5-5,5h-67.862c-2.761,0-5-2.239-5-5V52.5c0-2.761,2.239-5,5-5&#10;&#9;&#9;&#9;h67.862C195.135,47.5,197.374,49.739,197.374,52.5z"/><path style="fill: #20bfd5" d="M197.372,52.5v83.99c0,2.76-2.24,5-5,5h-30.02c2.76,0,5-2.24,5-5V52.5c0-2.76-2.24-5-5-5h30.02&#10;&#9;&#9;&#9;C195.132,47.5,197.372,49.74,197.372,52.5z"/><path style="
          fill: none;
          stroke: #000000;
          stroke-width: 15;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-miterlimit: 10;
        " d="&#10;&#9;&#9;&#9;M197.374,52.5v83.99c0,2.761-2.239,5-5,5h-67.862c-2.761,0-5-2.239-5-5V52.5c0-2.761,2.239-5,5-5h67.862&#10;&#9;&#9;&#9;C195.135,47.5,197.374,49.739,197.374,52.5z"/></g><g><path style="fill: #fb54b6" d="M124.512,181.49h262.97c2.761,0,5,2.239,5,5v139.02c0,2.761-2.239,5-5,5h-262.97&#10;&#9;&#9;&#9;c-2.761,0-5-2.239-5-5V186.49C119.512,183.729,121.751,181.49,124.512,181.49z"/></g><path style="fill: #fb9927" d="M154.537,330.51c0-56.038,45.427-101.465,101.465-101.465s101.465,45.427,101.465,101.465H154.537z"/><path style="fill: #f98824" d="M357.462,330.51h-34.36c0-50.18-36.42-91.84-84.28-100.01c5.58-0.95,11.32-1.45,17.18-1.45&#10;&#9;&#9;C312.042,229.05,357.462,274.47,357.462,330.51z"/><path style="
        fill: none;
        stroke: #000000;
        stroke-width: 15;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-miterlimit: 10;
      " d="&#10;&#9;&#9;M154.537,330.51c0-56.038,45.427-101.465,101.465-101.465s101.465,45.427,101.465,101.465"/><g><path style="fill: #fb33a8" d="M392.482,186.49v139.02c0,2.76-2.24,5-5,5h-30.02c2.76,0,5-2.24,5-5V186.49c0-2.76-2.24-5-5-5&#10;&#9;&#9;&#9;h30.02C390.242,181.49,392.482,183.73,392.482,186.49z"/></g><g><g><path style="fill: #fdef63" d="M342.812,247.29c-0.14,0-0.29,0-0.44-0.01c-23.32-1.19-42.66,17.42-42.66,40.5&#10;&#9;&#9;&#9;&#9;c0,0.7,0.02,1.4,0.05,2.11c0.26,4.93-3.74,8.24-7.89,8.24c-2.05,0-4.12-0.79-5.74-2.6c-8.05-8.92-19.1-13.39-30.13-13.39&#10;&#9;&#9;&#9;&#9;s-22.08,4.47-30.13,13.39c-1.62,1.81-3.69,2.6-5.74,2.6c-4.15,0-8.15-3.31-7.89-8.24c0.03-0.71,0.04-1.41,0.04-2.11&#10;&#9;&#9;&#9;&#9;c0-23.08-19.34-41.69-42.65-40.5c-0.15,0.01-0.3,0.01-0.45,0.01c-7.05,0-10.56-8.81-5.2-13.65c8.92-8.05,13.39-19.09,13.39-30.13&#10;&#9;&#9;&#9;&#9;c0-7.68-2.16-15.35-6.49-22.02h170.24c-4.33,6.67-6.49,14.34-6.49,22.02c0,11.04,4.47,22.08,13.39,30.13&#10;&#9;&#9;&#9;&#9;C353.382,238.48,349.872,247.29,342.812,247.29z"/><g><line id="XMLID_00000127012381744132405410000009872483291948348836_" style="
              fill: none;
              stroke: #000000;
              stroke-width: 15;
              stroke-linecap: round;
              stroke-linejoin: round;
              stroke-miterlimit: 10;
            " x1="279.433" y1="224.908" x2="279.433" y2="224.805"/><line id="XMLID_00000080918978500845250090000017315552773041050031_" style="
              fill: none;
              stroke: #000000;
              stroke-width: 15;
              stroke-linecap: round;
              stroke-linejoin: round;
              stroke-miterlimit: 10;
            " x1="256.002" y1="224.908" x2="256.002" y2="224.805"/><line id="XMLID_00000140711681861242238370000008769002181148908969_" style="
              fill: none;
              stroke: #000000;
              stroke-width: 15;
              stroke-linecap: round;
              stroke-linejoin: round;
              stroke-miterlimit: 10;
            " x1="232.572" y1="224.908" x2="232.572" y2="224.805"/></g><path style="fill: #f3d730" d="M342.812,247.3c-0.15,0-0.29,0-0.43-0.02c-23.33-1.19-42.66,17.43-42.66,40.5&#10;&#9;&#9;&#9;&#9;c0,0.7,0.01,1.39,0.05,2.11c0.25,4.93-3.75,8.25-7.89,8.25c-2.06,0-4.13-0.8-5.75-2.61c-6.75-7.46-15.58-11.81-24.76-13.03&#10;&#9;&#9;&#9;&#9;c29.09-14.37,49.1-44.34,49.1-78.98c0-7.61-0.97-14.99-2.78-22.03h33.42c-4.32,6.67-6.48,14.35-6.48,22.02&#10;&#9;&#9;&#9;&#9;c0,11.04,4.47,22.09,13.38,30.14C353.382,238.47,349.882,247.3,342.812,247.3z"/></g><path style="
          fill: none;
          stroke: #000000;
          stroke-width: 15;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-miterlimit: 10;
        " d="&#10;&#9;&#9;&#9;M341.122,181.49c-4.33,6.67-6.49,14.34-6.49,22.02c0,11.04,4.47,22.08,13.39,30.13c5.36,4.84,1.85,13.65-5.21,13.65&#10;&#9;&#9;&#9;c-0.14,0-0.29,0-0.44-0.01c-23.32-1.19-42.66,17.42-42.66,40.5c0,0.7,0.02,1.4,0.05,2.11c0.26,4.93-3.74,8.24-7.89,8.24&#10;&#9;&#9;&#9;c-2.05,0-4.12-0.79-5.74-2.6c-8.05-8.92-19.1-13.39-30.13-13.39s-22.08,4.47-30.13,13.39c-1.62,1.81-3.69,2.6-5.74,2.6&#10;&#9;&#9;&#9;c-4.15,0-8.15-3.31-7.89-8.24c0.03-0.71,0.04-1.41,0.04-2.11c0-23.08-19.34-41.69-42.65-40.5c-0.15,0.01-0.3,0.01-0.45,0.01&#10;&#9;&#9;&#9;c-7.05,0-10.56-8.81-5.2-13.65c8.92-8.05,13.39-19.09,13.39-30.13c0-7.68-2.16-15.35-6.49-22.02"/></g><g><path style="
          fill: none;
          stroke: #000000;
          stroke-width: 15;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-miterlimit: 10;
        " d="&#10;&#9;&#9;&#9;M208.726,181.49h-84.213c-2.761,0-5,2.239-5,5v139.02c0,2.761,2.239,5,5,5h262.97c2.761,0,5-2.239,5-5V186.49c0-2.761-2.239-5-5-5&#10;&#9;&#9;&#9;H241.888"/></g><path style="
        fill: none;
        stroke: #000000;
        stroke-width: 15;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-miterlimit: 10;
      " d="&#10;&#9;&#9;M124.512,370.51h125.143c1.706,0,3.295,0.87,4.214,2.308l53.65,83.99c2.126,3.328-0.264,7.692-4.214,7.692H124.512&#10;&#9;&#9;c-2.761,0-5-2.239-5-5v-83.99C119.512,372.749,121.751,370.51,124.512,370.51z"/><path style="
        fill: none;
        stroke: #000000;
        stroke-width: 15;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-miterlimit: 10;
      " d="&#10;&#9;&#9;M392.482,397.976V375.51c0-2.761-2.239-5-5-5h-78.73c-3.949,0-6.34,4.363-4.214,7.692l53.65,83.99&#10;&#9;&#9;c0.919,1.438,2.507,2.308,4.214,2.308h25.08c2.761,0,5-2.239,5-5v-28.362"/><g><g><g><circle style="fill: #d8b2ec" cx="189.8" cy="381.497" r="24.709"/><circle style="
              fill: none;
              stroke: #000000;
              stroke-width: 15;
              stroke-linecap: round;
              stroke-linejoin: round;
              stroke-miterlimit: 10;
            " cx="189.8" cy="381.497" r="24.709"/></g></g></g><g><line id="XMLID_00000028301319025648580530000009457246182494066313_" style="
          fill: none;
          stroke: #000000;
          stroke-width: 15;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-miterlimit: 10;
        " x1="314.674" y1="108.185" x2="354.689" y2="108.075"/><line style="
          fill: none;
          stroke: #000000;
          stroke-width: 15;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-miterlimit: 10;
        " x1="333.566" y1="80.805" x2="354.689" y2="80.805"/></g></g></svg>`,r5='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-category" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4h6v6h-6z"/><path d="M14 4h6v6h-6z"/><path d="M4 14h6v6h-6z"/><path d="M17 17m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"/></svg>',o5='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-check" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 12l5 5l10 -10"/></svg>',i5='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-left"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 6l-6 6l6 6"/></svg>',a5='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 6l6 6l-6 6"/></svg>',s5='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-circle-check"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"/><path d="M9 12l2 2l4 -4"/></svg>',l5='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-circle-x"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"/><path d="M10 10l4 4m0 -4l-4 4"/></svg>',c5='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-device-floppy" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 4h10l4 4v10a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2"/><path d="M12 14m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"/><path d="M14 4l0 4l-6 0l0 -4"/></svg>',u5='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-dots-vertical"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"/><path d="M12 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"/><path d="M12 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"/></svg>',d5='<svg id="Capa_1" enable-background="new 0 0 512 512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><g><g><path d="m369.32 512h-226.64c-45.516 0-82.414-36.898-82.414-82.414v-347.172c0-45.516 36.898-82.414 82.414-82.414h226.64c45.516 0 82.414 36.898 82.414 82.414v347.171c0 45.517-36.898 82.415-82.414 82.415z" fill="#636978"/></g><g><path d="m225.095 450.189v-388.378c0-34.137 27.673-61.811 61.81-61.811h-144.225c-45.516 0-82.414 36.898-82.414 82.414v347.171c0 45.516 36.898 82.414 82.414 82.414h144.225c-34.137.001-61.81-27.673-61.81-61.81z" fill="#555a66"/></g><g><path d="m369.32 61.811h-226.64c-11.379 0-20.604 9.225-20.604 20.604v336.869c0 11.379 9.225 20.604 20.604 20.604h226.64c11.379 0 20.604-9.225 20.604-20.604v-336.87c0-11.379-9.225-20.603-20.604-20.603z" fill="#96e8ff"/></g><g><path d="m122.076 82.414v336.869c0 11.379 9.225 20.604 20.604 20.604h82.414v-378.076h-82.414c-11.379 0-20.604 9.224-20.604 20.603z" fill="#80dbff"/></g><g><path d="m256 111.277c-27.66-8.24-55.124-9.125-82.742-2.655-5.835 1.367-9.975 6.555-9.975 12.548v95.771c0 6.566 6.064 11.463 12.479 10.063 23.872-5.21 47.636-4.921 71.52.866 5.731 1.389 11.704 1.389 17.435 0 23.884-5.788 47.648-6.077 71.52-.866 6.415 1.4 12.479-3.497 12.479-10.063 0-40.343 0-55.429 0-95.771 0-5.993-4.139-11.181-9.975-12.548-27.617-6.471-55.081-5.585-82.741 2.655z" fill="#fff"/></g><g><path d="m173.258 108.622c-5.835 1.367-9.975 6.555-9.975 12.548v95.771c0 6.566 6.064 11.463 12.479 10.063 23.872-5.21 47.636-4.921 71.52.866 2.866.694 5.791 1.041 8.717 1.041v-117.634c-27.659-8.24-55.123-9.126-82.741-2.655z" fill="#f5fafc"/></g><g><path d="m205.037 104.432c-10.584.315-21.171 1.704-31.781 4.19-5.834 1.367-9.973 6.56-9.973 12.552v95.761c0 6.547 6.037 11.478 12.432 10.08 23.888-5.221 47.667-4.935 71.567.856 2.866.694 8.717 1.042 8.717 1.042 0-13.231-13.741-21.854-26.952-27.087-14.54-5.759-24.011-19.905-24.011-35.544v-61.85z" fill="#e1f1fa"/></g><g><g><path d="m338.414 289.266h-164.829c-4.142 0-7.5-3.357-7.5-7.5s3.358-7.5 7.5-7.5h164.829c4.143 0 7.5 3.357 7.5 7.5s-3.357 7.5-7.5 7.5z" fill="#19cffc"/></g><g><path d="m338.414 330.473h-164.829c-4.142 0-7.5-3.357-7.5-7.5s3.358-7.5 7.5-7.5h164.829c4.143 0 7.5 3.357 7.5 7.5s-3.357 7.5-7.5 7.5z" fill="#19cffc"/></g><g><g><path d="m191.667 385.134c-4.142 0-7.5-3.357-7.5-7.5v-12.362c0-4.143 3.358-7.5 7.5-7.5s7.5 3.357 7.5 7.5v12.362c0 4.142-3.358 7.5-7.5 7.5z" fill="#495560"/></g><g><path d="m320.333 385.134c-4.143 0-7.5-3.357-7.5-7.5v-12.362c0-4.143 3.357-7.5 7.5-7.5s7.5 3.357 7.5 7.5v12.362c0 4.142-3.357 7.5-7.5 7.5z" fill="#495560"/></g><g><path d="m256 392.493c-8.668 0-16.911-3.754-22.615-10.3-2.721-3.123-2.396-7.86.727-10.582 3.122-2.721 7.86-2.396 10.582.727 2.855 3.276 6.976 5.155 11.307 5.155s8.452-1.879 11.307-5.155c2.723-3.122 7.457-3.447 10.582-.727 3.122 2.722 3.448 7.459.727 10.582-5.706 6.546-13.949 10.3-22.617 10.3z" fill="#495560"/></g></g></g></g><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/></svg>',h5=`<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background: new 0 0 512 512" xml:space="preserve"><g><path style="fill: #636978" d="M366,504.5H146c-44.183,0-80-35.817-80-80v-337c0-44.183,35.817-80,80-80h220&#10;&#9;&#9;c44.183,0,80,35.817,80,80v337C446,468.683,410.183,504.5,366,504.5z"/><path style="fill: #555a66" d="M226,444.5v-377c0-33.137,26.863-60,60-60H146c-44.183,0-80,35.817-80,80v337&#10;&#9;&#9;c0,44.183,35.817,80,80,80h140C252.863,504.5,226,477.637,226,444.5z"/><path style="fill: #96e8ff" d="M366,67.5H146c-11.046,0-20,8.954-20,20v327c0,11.046,8.954,20,20,20h220c11.046,0,20-8.954,20-20&#10;&#9;&#9;v-327C386,76.454,377.046,67.5,366,67.5z"/><path style="fill: #80dbff" d="M126,87.5v327c0,11.046,8.954,20,20,20h80v-367h-80C134.954,67.5,126,76.454,126,87.5z"/><path style="fill: #ffffff" d="M256,115.517c-26.85-7.998-53.509-8.858-80.318-2.577c-5.664,1.327-9.682,6.363-9.682,12.18&#10;&#9;&#9;c0,39.161,0,53.805,0,92.965c0,6.374,5.886,11.128,12.113,9.768c23.172-5.058,46.241-4.777,69.425,0.841&#10;&#9;&#9;c5.563,1.348,11.361,1.348,16.924,0c23.184-5.618,46.252-5.898,69.425-0.841c6.227,1.359,12.113-3.395,12.113-9.768&#10;&#9;&#9;c0-39.161,0-53.805,0-92.965c0-5.818-4.018-10.853-9.682-12.18C309.509,106.659,282.85,107.518,256,115.517z"/><path style="fill: #f5fafc" d="M175.682,112.94c-5.664,1.327-9.682,6.363-9.682,12.18c0,39.161,0,53.805,0,92.965&#10;&#9;&#9;c0,6.374,5.886,11.128,12.113,9.769c23.172-5.058,46.241-4.777,69.425,0.841c2.782,0.674,5.622,1.011,8.462,1.011V115.517&#10;&#9;&#9;C229.15,107.518,202.491,106.659,175.682,112.94z"/><path style="fill: #e1f1fa" d="M206.53,108.873c-10.274,0.306-20.551,1.654-30.85,4.067c-5.663,1.327-9.681,6.368-9.681,12.184&#10;&#9;&#9;c0,39.155,0,53.801,0,92.955c0,6.355,5.86,11.141,12.068,9.785c23.188-5.068,46.271-4.791,69.47,0.831&#10;&#9;&#9;c2.782,0.674,8.462,1.011,8.462,1.011c0-12.844-13.338-21.214-26.163-26.293c-14.114-5.59-23.307-19.322-23.307-34.502V108.873z"/><g><path style="
          fill: none;
          stroke: #000000;
          stroke-width: 15;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-miterlimit: 10;
        " d="&#10;&#9;&#9;&#9;M366,504.5H146c-44.183,0-80-35.817-80-80v-337c0-44.183,35.817-80,80-80h220c44.183,0,80,35.817,80,80v337&#10;&#9;&#9;&#9;C446,468.683,410.183,504.5,366,504.5z"/><path style="
          fill: none;
          stroke: #000000;
          stroke-width: 15;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-miterlimit: 10;
        " d="&#10;&#9;&#9;&#9;M126,398.01v16.49c0,11.046,8.954,20,20,20h220c11.046,0,20-8.954,20-20v-327c0-11.046-8.954-20-20-20H146&#10;&#9;&#9;&#9;c-11.046,0-20,8.954-20,20v280.51"/><line style="
          fill: none;
          stroke: #000000;
          stroke-width: 15;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-miterlimit: 10;
        " x1="176" y1="281.01" x2="336" y2="281.01"/><line style="
          fill: none;
          stroke: #000000;
          stroke-width: 15;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-miterlimit: 10;
        " x1="176" y1="321.01" x2="336" y2="321.01"/><path style="
          fill: none;
          stroke: #000000;
          stroke-width: 15;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-miterlimit: 10;
        " d="&#10;&#9;&#9;&#9;M286.144,109.53c-10.033,0.992-20.075,2.987-30.144,5.986c-26.85-7.998-53.509-8.858-80.318-2.577&#10;&#9;&#9;&#9;c-5.664,1.327-9.682,6.363-9.682,12.18c0,39.161,0,53.805,0,92.965c0,6.374,5.886,11.128,12.113,9.768&#10;&#9;&#9;&#9;c23.172-5.058,46.241-4.777,69.425,0.841c5.563,1.348,11.361,1.348,16.924,0c23.184-5.618,46.252-5.898,69.425-0.841&#10;&#9;&#9;&#9;c6.227,1.359,12.113-3.395,12.113-9.768c0-39.161,0-53.805,0-92.965c0-5.818-4.018-10.853-9.682-12.18&#10;&#9;&#9;&#9;c-6.702-1.57-13.395-2.694-20.084-3.372"/><line style="
          fill: none;
          stroke: #000000;
          stroke-width: 15;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-miterlimit: 10;
        " x1="256" y1="115.517" x2="256" y2="229.706"/><g><line style="
            fill: none;
            stroke: #000000;
            stroke-width: 15;
            stroke-linecap: round;
            stroke-linejoin: round;
            stroke-miterlimit: 10;
          " x1="193.551" y1="362.07" x2="193.551" y2="374.07"/><line style="
            fill: none;
            stroke: #000000;
            stroke-width: 15;
            stroke-linecap: round;
            stroke-linejoin: round;
            stroke-miterlimit: 10;
          " x1="318.449" y1="362.07" x2="318.449" y2="374.07"/><path style="
            fill: none;
            stroke: #000000;
            stroke-width: 15;
            stroke-linecap: round;
            stroke-linejoin: round;
            stroke-miterlimit: 10;
          " d="&#10;&#9;&#9;&#9;&#9;M239.536,373.713c4.003,4.594,9.892,7.501,16.464,7.501c6.572,0,12.461-2.907,16.464-7.501"/></g></g></g><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/></svg>`,f5='<svg id="Capa_1" enable-background="new 0 0 512 512" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><g><path d="m449.945 61.818v388.363c0 34.144-27.684 61.818-61.818 61.818h-264.254c-34.134 0-61.818-27.674-61.818-61.818v-388.363c0-34.144 27.684-61.818 61.818-61.818h264.253c34.135 0 61.819 27.674 61.819 61.818z" fill="#808fa4"/><path d="m188.464 512h-64.59c-34.134 0-61.818-27.674-61.818-61.818v-388.364c-.001-34.144 27.683-61.818 61.817-61.818h50.341c-7.367 6.574-15.218 18.092-15.218 37.359v423.909c.001 0-.215 30.24 29.468 50.732z" fill="#64768e"/><path d="m418.912 61.942v147.509l-194.274 13.033 77.912-191.451h85.453c17.072 0 30.909 13.837 30.909 30.909z" fill="#c5ced6"/><path d="m271.516 31.033-46.878 191.451-65.641-6.501-65.909-6.532 20.843-140.421 45.365-37.997z" fill="#abb6c4"/><path d="m159.296 31.033c-.196 2.009-.299 4.121-.299 6.326v178.624l-65.909-6.532v-147.509c0-17.072 13.837-30.909 30.909-30.909z" fill="#9ca9ba"/><path d="m313.676 222.484-18.885 196.428h-135.794l-51.732-35.968-14.177-142.46 65.909-5.379z" fill="#c5ced6"/><path d="m93.088 240.484 65.909-5.378v183.807h-35c-17.072 0-30.909-13.837-30.909-30.909z" fill="#abb6c4"/><path d="m418.912 240.484v147.519c0 17.072-13.837 30.909-30.909 30.909h-62.19l-12.137-196.428z" fill="#64768e"/><path d="m287.487 480.971h-62.974c-8.317 0-15.059-6.742-15.059-15.059v-.913c0-8.317 6.742-15.059 15.059-15.059h62.974c8.317 0 15.059 6.742 15.059 15.059v.913c0 8.316-6.743 15.059-15.059 15.059z" fill="#64768e"/><path d="m418.912 209.451v31.033h-77.644c-8.531 0-15.455 6.924-15.455 15.455v162.974h-31.022v-162.975c0-8.531-6.923-15.455-15.455-15.455h-120.34l-13.147-13.27 13.147-17.763h44.138c6.718 0 12.673-4.348 14.723-10.746l53.658-167.672h31.033l-50.65 158.255c-3.183 9.974 4.255 20.163 14.723 20.163h152.291z" fill="#e8ecf9"/><path d="m93.088 209.451h65.909v31.033h-65.909z" fill="#d7ddf5"/><g><g><path d="m129.509 332.474c-4.268 0-7.727-3.459-7.727-7.727v-12.364c0-4.268 3.459-7.727 7.727-7.727s7.727 3.459 7.727 7.727v12.364c0 4.268-3.459 7.727-7.727 7.727z" fill="#495560"/></g><g><path d="m258.191 332.474c-4.268 0-7.727-3.459-7.727-7.727v-12.364c0-4.268 3.459-7.727 7.727-7.727s7.727 3.459 7.727 7.727v12.364c.001 4.268-3.458 7.727-7.727 7.727z" fill="#495560"/></g><path d="m223.825 324.391c-4.268 0-7.727 3.459-7.727 7.727 0 3.952-3.215 7.167-7.166 7.167-3.952 0-7.167-3.215-7.167-7.167 0-4.268-3.459-7.727-7.727-7.727s-7.727 3.459-7.727 7.727c0 3.952-3.215 7.167-7.166 7.167-3.952 0-7.167-3.215-7.167-7.167 0-4.268-3.459-7.727-7.727-7.727s-7.727 3.459-7.727 7.727c0 12.473 10.148 22.621 22.621 22.621 5.7 0 10.911-2.124 14.894-5.616 3.982 3.492 9.193 5.616 14.894 5.616 12.473 0 22.62-10.148 22.62-22.621-.001-4.268-3.46-7.727-7.728-7.727z" fill="#495560"/></g></g></svg>',p5=`<?xml version="1.0" encoding="UTF-8"?><svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 511.941 511.941" style="enable-background: new 0 0 511.941 511.941" xml:space="preserve" width="512" height="512"><g><g><path style="fill: #808fa4" d="M444.211,67.5v376.94c0,33.14-26.87,60-60,60H127.73c-33.13,0-60-26.86-60-60V67.5&#10;&#9;&#9;&#9;c0-33.14,26.87-60,60-60h256.48C417.341,7.5,444.211,34.361,444.211,67.5z"/><path style="fill: #64768e" d="M190.421,504.44h-62.69c-33.13,0-60-26.86-60-60V67.5c0-33.14,26.87-60,60-60h48.86&#10;&#9;&#9;&#9;c-7.15,6.38-14.77,17.56-14.77,36.26v411.44C161.821,455.201,161.611,484.551,190.421,504.44z"/><path style="fill: #c5ced6" d="M414.091,67.62v143.17l-188.56,12.65l75.62-185.82h82.94&#10;&#9;&#9;&#9;C400.661,37.62,414.091,51.051,414.091,67.62z"/><polygon style="fill: #abb6c4" points="271.031,37.62 225.531,223.44 161.821,217.131 97.85,210.79 118.08,74.5 162.111,37.62 &#9;&#9;&#10;&#9;&#9;&#9;"/><path style="fill: #9ca9ba" d="M162.111,37.62c-0.19,1.95-0.29,4-0.29,6.14v173.37l-63.97-6.34V67.62c0-16.57,13.43-30,30-30&#10;&#9;&#9;&#9;H162.111z"/><polygon style="fill: #c5ced6" points="311.951,223.44 293.62,414.091 161.821,414.091 111.611,379.181 97.85,240.911 &#10;&#9;&#9;&#9;161.821,235.69 &#9;&#9;"/><path style="fill: #abb6c4" d="M97.85,240.911l63.97-5.22v178.4h-33.97c-16.57,0-30-13.43-30-30V240.911z"/><path style="fill: #64768e" d="M414.091,240.911v143.18c0,16.57-13.43,30-30,30h-60.36l-11.78-190.65L414.091,240.911z"/><path style="fill: #64768e" d="M286.088,474.324h-60.235c-8.317,0-15.059-6.742-15.059-15.059v0&#10;&#9;&#9;&#9;c0-8.317,6.742-15.059,15.059-15.059h60.235c8.317,0,15.059,6.742,15.059,15.059v0&#10;&#9;&#9;&#9;C301.147,467.581,294.405,474.324,286.088,474.324z"/><path style="fill: #e8ecf9" d="M414.091,210.79v30.12h-75.36c-8.28,0-15,6.72-15,15v158.18h-30.11v-158.18c0-8.28-6.72-15-15-15&#10;&#9;&#9;&#9;h-116.8l-12.76-12.88l12.76-17.24h42.84c6.52,0,12.3-4.22,14.29-10.43l52.08-162.74h30.12l-49.16,153.6&#10;&#9;&#9;&#9;c-3.09,9.68,4.13,19.57,14.29,19.57H414.091z"/><rect x="97.85" y="210.79" style="fill: #d7ddf5" width="63.97" height="30.12"/></g><g><path style="
          fill: none;
          stroke: #000000;
          stroke-width: 15;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-miterlimit: 10;
        " d="&#10;&#9;&#9;&#9;M384.206,504.441H127.735c-33.137,0-60-26.863-60-60V67.5c0-33.137,26.863-60,60-60h256.471c33.137,0,60,26.863,60,60v376.941&#10;&#9;&#9;&#9;C444.206,477.578,417.343,504.441,384.206,504.441z"/><path style="
          fill: none;
          stroke: #000000;
          stroke-width: 15;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-miterlimit: 10;
        " d="&#10;&#9;&#9;&#9;M384.088,414.088H127.853c-16.569,0-30-13.431-30-30V67.618c0-16.569,13.431-30,30-30h256.235c16.569,0,30,13.431,30,30v316.471&#10;&#9;&#9;&#9;C414.088,400.657,400.657,414.088,384.088,414.088z"/><path style="
          fill: none;
          stroke: #000000;
          stroke-width: 15;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-miterlimit: 10;
        " d="&#10;&#9;&#9;&#9;M286.088,474.324h-60.235c-8.317,0-15.059-6.742-15.059-15.059c0-8.317,6.742-15.059,15.059-15.059h60.235&#10;&#9;&#9;&#9;c8.317,0,15.059,6.742,15.059,15.059C301.147,467.581,294.405,474.324,286.088,474.324z"/><path style="
          fill: none;
          stroke: #000000;
          stroke-width: 15;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-miterlimit: 10;
        " d="&#10;&#9;&#9;&#9;M100.85,210.79h103.811c6.523,0,12.298-4.215,14.286-10.428L270.56,39.09"/><path style="
          fill: none;
          stroke: #000000;
          stroke-width: 15;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-miterlimit: 10;
        " d="&#10;&#9;&#9;&#9;M293.62,410.091v-154.18c0-8.284-6.716-15-15-15H100.85"/><path style="
          fill: none;
          stroke: #000000;
          stroke-width: 15;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-miterlimit: 10;
        " d="&#10;&#9;&#9;&#9;M411.091,240.911h-72.36c-8.284,0-15,6.716-15,15v154.18"/><path style="
          fill: none;
          stroke: #000000;
          stroke-width: 15;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-miterlimit: 10;
        " d="&#10;&#9;&#9;&#9;M300.616,39.291l-48.622,151.927c-3.098,9.679,4.124,19.572,14.286,19.572h144.81"/><g><line style="
            fill: none;
            stroke: #000000;
            stroke-width: 15;
            stroke-linecap: round;
            stroke-linejoin: round;
            stroke-miterlimit: 10;
          " x1="133.2" y1="310.695" x2="133.2" y2="322.695"/><line style="
            fill: none;
            stroke: #000000;
            stroke-width: 15;
            stroke-linecap: round;
            stroke-linejoin: round;
            stroke-miterlimit: 10;
          " x1="258.098" y1="310.695" x2="258.098" y2="322.695"/><g><path style="
              fill: none;
              stroke: #000000;
              stroke-width: 15;
              stroke-linecap: round;
              stroke-miterlimit: 10;
            " d="M195.831,329.85&#10;&#9;&#9;&#9;&#9;&#9;c0,7.984-6.472,14.456-14.456,14.456s-14.456-6.472-14.456-14.456"/><path style="
              fill: none;
              stroke: #000000;
              stroke-width: 15;
              stroke-linecap: round;
              stroke-miterlimit: 10;
            " d="M224.742,329.85&#10;&#9;&#9;&#9;&#9;&#9;c0,7.984-6.472,14.456-14.456,14.456s-14.456-6.472-14.456-14.456"/></g></g></g></g></svg>`,g5='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-external-link" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6"/><path d="M11 13l9 -9"/><path d="M15 4h5v5"/></svg>',m5='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-eye" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"/><path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6"/></svg>',v5='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-eye-off" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10.585 10.587a2 2 0 0 0 2.829 2.828"/><path d="M16.681 16.673a8.717 8.717 0 0 1 -4.681 1.327c-3.6 0 -6.6 -2 -9 -6c1.272 -2.12 2.712 -3.678 4.32 -4.674m2.86 -1.146a9.055 9.055 0 0 1 1.82 -.18c3.6 0 6.6 2 9 6c-.666 1.11 -1.379 2.067 -2.138 2.87"/><path d="M3 3l18 18"/></svg>',b5='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-file-download" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M14 3v4a1 1 0 0 0 1 1h4"/><path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"/><path d="M12 17v-6"/><path d="M9.5 14.5l2.5 2.5l2.5 -2.5"/></svg>',w5='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-file-percent"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 17l4 -4"/><path d="M14 3v4a1 1 0 0 0 1 1h4"/><path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"/><path d="M10 13h.01"/><path d="M14 17h.01"/></svg>',_5='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-hand-click"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8 13v-8.5a1.5 1.5 0 0 1 3 0v7.5"/><path d="M11 11.5v-2a1.5 1.5 0 0 1 3 0v2.5"/><path d="M14 10.5a1.5 1.5 0 0 1 3 0v1.5"/><path d="M17 11.5a1.5 1.5 0 0 1 3 0v4.5a6 6 0 0 1 -6 6h-2h.208a6 6 0 0 1 -5.012 -2.7l-.196 -.3c-.312 -.479 -1.407 -2.388 -3.286 -5.728a1.5 1.5 0 0 1 .536 -2.022a1.867 1.867 0 0 1 2.28 .28l1.47 1.47"/><path d="M5 3l-1 -1"/><path d="M4 7h-1"/><path d="M14 3l1 -1"/><path d="M15 6h1"/></svg>',y5='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-help"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"/><path d="M12 17l0 .01"/><path d="M12 13.5a1.5 1.5 0 0 1 1 -1.5a2.6 2.6 0 1 0 -3 -4"/></svg>',k5='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-info-circle"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"/><path d="M12 9h.01"/><path d="M11 12h1v4h1"/></svg>',E5='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-keyboard" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M2 6m0 2a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-16a2 2 0 0 1 -2 -2z"/><path d="M6 10l0 .01"/><path d="M10 10l0 .01"/><path d="M14 10l0 .01"/><path d="M18 10l0 .01"/><path d="M6 14l0 .01"/><path d="M18 14l0 .01"/><path d="M10 14l4 .01"/></svg>',A5='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-layout-bottombar"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"/><path d="M4 15l16 0"/></svg>',S5='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-layout-bottombar-inactive"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z"/><path d="M4 15h1"/><path d="M19 15h1"/><path d="M9 15h1"/><path d="M14 15h1"/></svg>',M5='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-layout-dashboard"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 4h4a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1" /><path d="M5 16h4a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1v-2a1 1 0 0 1 1 -1" /><path d="M15 12h4a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1" /><path d="M15 4h4a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1v-2a1 1 0 0 1 1 -1" /></svg>',x5='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-layout-sidebar"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"/><path d="M9 4l0 16"/></svg>',I5='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-layout-sidebar-inactive"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z"/><path d="M9 4v1"/><path d="M9 9v1"/><path d="M9 14v1"/><path d="M9 19v1"/></svg>',C5='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-layout-sidebar-right"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"/><path d="M15 4l0 16"/></svg>',O5='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-layout-sidebar-right-inactive"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z"/><path d="M15 4v1"/><path d="M15 9v1"/><path d="M15 14v1"/><path d="M15 19v1"/></svg>',T5='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-list-numbers" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M11 6h9"/><path d="M11 12h9"/><path d="M12 18h8"/><path d="M4 16a2 2 0 1 1 4 0c0 .591 -.5 1 -1 1.5l-3 2.5h4"/><path d="M6 10v-6l-2 2"/></svg>',L5='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-loader-2" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 3a9 9 0 1 0 9 9"/></svg>',R5='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-location-cog"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 18l-2 -4l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5l-3.14 8.697"/><path d="M19.001 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"/><path d="M19.001 15.5v1.5"/><path d="M19.001 21v1.5"/><path d="M22.032 17.25l-1.299 .75"/><path d="M17.27 20l-1.3 .75"/><path d="M15.97 17.25l1.3 .75"/><path d="M20.733 20l1.3 .75"/></svg>',P5='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-menu-2" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 6l16 0"/><path d="M4 12l16 0"/><path d="M4 18l16 0"/></svg>',$5='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-menu-deep"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 6h16"/><path d="M7 12h13"/><path d="M10 18h10"/></svg>',D5='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-message" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8 9h8"/><path d="M8 13h6"/><path d="M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-5l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12z"/></svg>',z5='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-moon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z"/></svg>',B5='<svg id="Capa_1" enable-background="new 0 0 512 512" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><g><path d="m449.945 61.818v388.363c0 34.144-27.684 61.818-61.818 61.818h-264.253c-34.134 0-61.818-27.674-61.818-61.818v-388.363c-.001-34.144 27.684-61.818 61.818-61.818h264.253c34.133 0 61.818 27.674 61.818 61.818z" fill="#e8ecf9"/><path d="m207.555 512h-83.681c-34.134 0-61.818-27.674-61.818-61.818v-388.364c-.001-34.144 27.684-61.818 61.818-61.818h79.993c-11.292 3.421-26.809 12.446-26.809 36.256v436.87c0 26.479 19.854 35.783 30.497 38.874z" fill="#d7ddf5"/><path d="m403.396 62.004v139.751c0 8.541-6.924 15.455-15.455 15.455h-210.883l-51.556-21.729v-124.699l51.556-24.233h210.883c8.531 0 15.455 6.913 15.455 15.455z" fill="#c5ced6"/><path d="m177.058 46.549v170.66h-52.999c-8.531 0-15.455-6.913-15.455-15.455v-139.75c0-8.541 6.924-15.455 15.455-15.455z" fill="#abb6c4"/><path d="m217.209 279.213v8.036l-40.151 41.769-8.809 9.17-59.644 4.307 12.333-53.195 56.121-25.541h24.696c8.541-.001 15.454 6.923 15.454 15.454z" fill="#c5ced6"/><path d="m124.059 263.758h52.999v65.26l-8.809 9.17-59.644 4.307v-63.281c-.001-8.532 6.923-15.456 15.454-15.456z" fill="#abb6c4"/><path d="m217.209 334.365v60.407l-40.151 43.438-4.204 4.543-64.25-8.634 8.573-21.379-8.573-26.551 50.743-51.824z" fill="#c5ced6"/><path d="m177.058 334.365v103.845l-4.204 4.543-64.25-8.634v-47.93l50.743-51.824z" fill="#abb6c4"/><path d="m217.209 287.249v47.116c-2.823 1.731-5.121 4.368-6.388 7.696-2.359 6.182-8.253 9.984-14.496 9.984-1.844 0-3.719-.33-5.543-1.03-.546-.206-1.092-.381-1.638-.525-1.298-.34-2.596-.505-3.895-.505-2.916 0-5.749.824-8.191 2.339l-11.045-14.888 11.045-32.29c1.03.165 2.061.433 3.07.824.587.227 1.175.412 1.772.556 1.247.319 2.514.474 3.771.474 6.244 0 12.137-3.802 14.496-9.984.082-.206.165-.412.258-.608 2.493-5.821 8.191-9.376 14.239-9.376.845.001 1.69.073 2.545.217z" fill="#808fa4"/><path d="m177.058 305.146v47.178c-2.782 1.731-5.049 4.348-6.305 7.645-.196.505-.402.989-.649 1.453-2.669 5.316-8.108 8.521-13.847 8.521-.309 0-.618-.01-.927-.031-1.535-.093-3.091-.412-4.605-.999-1.824-.701-3.699-1.03-5.543-1.03-6.244 0-12.137 3.802-14.496 9.984s-8.242 9.984-14.496 9.984c-1.834 0-3.709-.33-5.533-1.03-.68-.258-1.36-.474-2.05-.628v-43.695c5.038-1.02 9.458-4.523 11.426-9.674 2.359-6.182 8.253-9.984 14.496-9.984 1.844 0 3.709.33 5.533 1.03 1.824.701 3.709 1.03 5.553 1.03 1.113 0 2.226-.124 3.297-.361 2.895-.629 5.574-2.081 7.686-4.193 1.494-1.494 2.699-3.318 3.503-5.419 2.359-6.182 8.242-9.984 14.496-9.984.813-.003 1.637.058 2.461.203z" fill="#64768e"/><path d="m217.209 394.772v55.224c0 8.541-6.913 15.455-15.455 15.455h-24.696l-15.516-24.284 15.516-28.426c1.885-1.618 3.4-3.719 4.348-6.202 2.359-6.172 8.253-9.973 14.496-9.973 1.844 0 3.719.33 5.543 1.03 1.824.701 3.689 1.03 5.533 1.03 1.175 0 2.349-.134 3.472-.402h.01c2.494-.578 4.822-1.762 6.749-3.452z" fill="#808fa4"/><path d="m166.91 416.522c3.74 0 7.346-1.36 10.148-3.781v52.71h-52.999c-8.531 0-15.455-6.913-15.455-15.455v-15.877c3.802-1.968 8.397-2.37 12.704-.721 1.824.701 3.699 1.03 5.543 1.03 6.244 0 12.137-3.802 14.496-9.984s8.242-9.984 14.496-9.984c1.834 0 3.709.33 5.533 1.03 1.824.702 3.7 1.032 5.534 1.032z" fill="#64768e"/><path d="m403.396 351.612v98.384c0 8.541-6.924 15.455-15.455 15.455h-69.051l-55.132-93.686v-92.552c0-8.531 6.924-15.455 15.455-15.455h62.91z" fill="#808fa4"/><path d="m380.121 333.572-61.231 131.879h-39.677c-8.531 0-15.455-6.913-15.455-15.455v-78.231l77.572-53.699z" fill="#abb6c4"/><path d="m403.396 279.213v72.4c-7.058 3.359-14.95 5.234-23.275 5.234-3.534 0-6.996-.34-10.344-.989-17.34-3.338-31.744-14.929-38.956-30.518-3.215-6.924-5.007-14.651-5.007-22.79 0-15.197 6.244-28.941 16.31-38.791h45.818c8.53-.001 15.454 6.923 15.454 15.454z" fill="#c5ced6"/><g><g><ellipse cx="172.744" cy="147.233" fill="#fff" rx="30.72" ry="24.464"/><ellipse cx="339.256" cy="147.233" fill="#fff" rx="30.72" ry="24.464"/><path d="m285.787 117.781c-4.268 0-7.727 3.46-7.727 7.727 0 3.952-3.215 7.166-7.166 7.166s-7.166-3.215-7.166-7.166c0-4.268-3.46-7.727-7.727-7.727-4.268 0-7.727 3.46-7.727 7.727 0 3.952-3.215 7.166-7.166 7.166-3.952 0-7.166-3.215-7.166-7.166 0-4.268-3.46-7.727-7.727-7.727-4.268 0-7.727 3.46-7.727 7.727 0 12.473 10.148 22.621 22.621 22.621 5.701 0 10.911-2.124 14.894-5.616 3.982 3.492 9.193 5.616 14.894 5.616 12.473 0 22.621-10.148 22.621-22.621-.003-4.267-3.463-7.727-7.731-7.727z" fill="#495560"/></g><g><path d="m206.795 121.062c-4.268 0-7.727-3.46-7.727-7.727 0-3.559-2.896-6.454-6.455-6.454s-6.455 2.895-6.455 6.454c0 4.268-3.46 7.727-7.727 7.727-4.268 0-7.727-3.46-7.727-7.727 0-12.081 9.829-21.909 21.91-21.909s21.91 9.828 21.91 21.909c-.001 4.267-3.461 7.727-7.729 7.727z" fill="#495560"/></g><g><path d="m333.569 121.062c-4.268 0-7.727-3.46-7.727-7.727 0-3.559-2.896-6.454-6.455-6.454s-6.455 2.895-6.455 6.454c0 4.268-3.46 7.727-7.727 7.727-4.268 0-7.727-3.46-7.727-7.727 0-12.081 9.829-21.909 21.91-21.909s21.91 9.828 21.91 21.909c-.001 4.267-3.461 7.727-7.729 7.727z" fill="#495560"/></g></g></g></svg>',N5=`<?xml version="1.0" encoding="UTF-8"?><svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 511.94 511.94" style="enable-background: new 0 0 511.94 511.94" xml:space="preserve" width="512" height="512"><g><g><path style="fill: #e8ecf9" d="M444.21,67.5v376.94c0,33.14-26.87,60-60,60H127.73c-33.13,0-60-26.86-60-60V67.5&#10;&#9;&#9;&#9;c0-33.14,26.87-60,60-60h256.48C417.34,7.5,444.21,34.36,444.21,67.5z"/><path style="fill: #d7ddf5" d="M208.95,504.44h-81.22c-33.13,0-60-26.86-60-60V67.5c0-33.14,26.87-60,60-60h77.64&#10;&#9;&#9;&#9;c-10.96,3.32-26.02,12.08-26.02,35.19v424.02C179.35,492.41,198.62,501.44,208.95,504.44z"/><path style="fill: #c5ced6" d="M399.03,67.68v135.64c0,8.29-6.72,15-15,15H179.35l-50.04-21.09V76.2l50.04-23.52h204.68&#10;&#9;&#9;&#9;C392.31,52.68,399.03,59.39,399.03,67.68z"/><path style="fill: #abb6c4" d="M179.35,52.68v165.64h-51.44c-8.28,0-15-6.71-15-15V67.68c0-8.29,6.72-15,15-15H179.35z"/><path style="fill: #c5ced6" d="M218.32,278.5v7.8l-38.97,40.54l-8.55,8.9l-57.89,4.18l11.97-51.63l54.47-24.79h23.97&#10;&#9;&#9;&#9;C211.61,263.5,218.32,270.22,218.32,278.5z"/><path style="fill: #abb6c4" d="M127.91,263.5h51.44v63.34l-8.55,8.9l-57.89,4.18V278.5C112.91,270.22,119.63,263.5,127.91,263.5z"/><polygon style="fill: #c5ced6" points="218.32,332.03 218.32,390.66 179.35,432.82 175.27,437.23 112.91,428.85 121.23,408.1 &#10;&#9;&#9;&#9;112.91,382.33 162.16,332.03 &#9;&#9;"/><polygon style="fill: #abb6c4" points="179.35,332.03 179.35,432.82 175.27,437.23 112.91,428.85 112.91,382.33 162.16,332.03 &#9;&#9;&#10;&#9;&#9;&#9;"/><path style="fill: #808fa4" d="M218.32,286.3v45.73c-2.74,1.68-4.97,4.24-6.2,7.47c-2.29,6-8.01,9.69-14.07,9.69&#10;&#9;&#9;&#9;c-1.79,0-3.61-0.32-5.38-1c-0.53-0.2-1.06-0.37-1.59-0.51c-1.26-0.33-2.52-0.49-3.78-0.49c-2.83,0-5.58,0.8-7.95,2.27&#10;&#9;&#9;&#9;l-10.72-14.45l10.72-31.34c1,0.16,2,0.42,2.98,0.8c0.57,0.22,1.14,0.4,1.72,0.54c1.21,0.31,2.44,0.46,3.66,0.46&#10;&#9;&#9;&#9;c6.06,0,11.78-3.69,14.07-9.69c0.08-0.2,0.16-0.4,0.25-0.59c2.42-5.65,7.95-9.1,13.82-9.1&#10;&#9;&#9;&#9;C216.67,286.09,217.49,286.16,218.32,286.3z"/><path style="fill: #64768e" d="M179.35,303.67v45.79c-2.7,1.68-4.9,4.22-6.12,7.42c-0.19,0.49-0.39,0.96-0.63,1.41&#10;&#9;&#9;&#9;c-2.59,5.16-7.87,8.27-13.44,8.27c-0.3,0-0.6-0.01-0.9-0.03c-1.49-0.09-3-0.4-4.47-0.97c-1.77-0.68-3.59-1-5.38-1&#10;&#9;&#9;&#9;c-6.06,0-11.78,3.69-14.07,9.69s-8,9.69-14.07,9.69c-1.78,0-3.6-0.32-5.37-1c-0.66-0.25-1.32-0.46-1.99-0.61v-42.41&#10;&#9;&#9;&#9;c4.89-0.99,9.18-4.39,11.09-9.39c2.29-6,8.01-9.69,14.07-9.69c1.79,0,3.6,0.32,5.37,1c1.77,0.68,3.6,1,5.39,1&#10;&#9;&#9;&#9;c1.08,0,2.16-0.12,3.2-0.35c2.81-0.61,5.41-2.02,7.46-4.07c1.45-1.45,2.62-3.22,3.4-5.26c2.29-6,8-9.69,14.07-9.69&#10;&#9;&#9;&#9;C177.75,303.47,178.55,303.53,179.35,303.67z"/><path style="fill: #808fa4" d="M218.32,390.66v53.6c0,8.29-6.71,15-15,15h-23.97l-15.06-23.57l15.06-27.59&#10;&#9;&#9;&#9;c1.83-1.57,3.3-3.61,4.22-6.02c2.29-5.99,8.01-9.68,14.07-9.68c1.79,0,3.61,0.32,5.38,1c1.77,0.68,3.58,1,5.37,1&#10;&#9;&#9;&#9;c1.14,0,2.28-0.13,3.37-0.39h0.01C214.19,393.45,216.45,392.3,218.32,390.66z"/><path style="fill: #64768e" d="M169.5,411.77c3.63,0,7.13-1.32,9.85-3.67v51.16h-51.44c-8.28,0-15-6.71-15-15v-15.41&#10;&#9;&#9;&#9;c3.69-1.91,8.15-2.3,12.33-0.7c1.77,0.68,3.59,1,5.38,1c6.06,0,11.78-3.69,14.07-9.69c2.29-6,8-9.69,14.07-9.69&#10;&#9;&#9;&#9;c1.78,0,3.6,0.32,5.37,1C165.9,411.45,167.72,411.77,169.5,411.77z"/><path style="fill: #808fa4" d="M399.03,348.77v95.49c0,8.29-6.72,15-15,15h-67.02l-53.51-90.93V278.5c0-8.28,6.72-15,15-15h61.06&#10;&#9;&#9;&#9;L399.03,348.77z"/><path style="fill: #abb6c4" d="M376.44,331.26l-59.43,128H278.5c-8.28,0-15-6.71-15-15v-75.93l75.29-52.12L376.44,331.26z"/><path style="fill: #c5ced6" d="M399.03,278.5v70.27c-6.85,3.26-14.51,5.08-22.59,5.08c-3.43,0-6.79-0.33-10.04-0.96&#10;&#9;&#9;&#9;c-16.83-3.24-30.81-14.49-37.81-29.62c-3.12-6.72-4.86-14.22-4.86-22.12c0-14.75,6.06-28.09,15.83-37.65h44.47&#10;&#9;&#9;&#9;C392.31,263.5,399.03,270.22,399.03,278.5z"/><g><g><ellipse style="fill: #ffffff" cx="175.162" cy="150.402" rx="29.816" ry="23.744"/><ellipse style="fill: #ffffff" cx="336.778" cy="150.402" rx="29.816" ry="23.744"/></g></g></g><g><path style="
          fill: none;
          stroke: #000000;
          stroke-width: 15;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-miterlimit: 10;
        " d="&#10;&#9;&#9;&#9;M67.73,402.54v41.9c0,33.14,26.87,60,60,60h256.48c33.13,0,60-26.86,60-60V67.5c0-33.14-26.87-60-60-60H127.73&#10;&#9;&#9;&#9;c-33.13,0-60,26.86-60,60v300.04"/><path style="
          fill: none;
          stroke: #000000;
          stroke-width: 15;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-miterlimit: 10;
        " d="&#10;&#9;&#9;&#9;M359,52.68h25.03c8.28,0,15,6.71,15,15v135.64c0,8.29-6.72,15-15,15H127.91c-8.28,0-15-6.71-15-15V67.68c0-8.29,6.72-15,15-15H324&#10;&#9;&#9;&#9;"/><path style="
          fill: none;
          stroke: #000000;
          stroke-width: 15;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-miterlimit: 10;
        " d="&#10;&#9;&#9;&#9;M203.323,459.264h-75.412c-8.284,0-15-6.716-15-15V278.499c0-8.284,6.716-15,15-15h75.412c8.284,0,15,6.716,15,15v165.765&#10;&#9;&#9;&#9;C218.323,452.548,211.607,459.264,203.323,459.264z"/><path style="
          fill: none;
          stroke: #000000;
          stroke-width: 15;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-miterlimit: 10;
        " d="&#10;&#9;&#9;&#9;M399.03,278.5v165.76c0,8.29-6.72,15-15,15H278.5c-8.28,0-15-6.71-15-15V278.5c0-8.28,6.72-15,15-15h105.53&#10;&#9;&#9;&#9;C392.31,263.5,399.03,270.22,399.03,278.5z"/><line style="
          fill: none;
          stroke: #000000;
          stroke-width: 15;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-miterlimit: 10;
        " x1="264.641" y1="367.54" x2="327.14" y2="324.275"/><line style="
          fill: none;
          stroke: #000000;
          stroke-width: 15;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-miterlimit: 10;
        " x1="335.24" y1="420" x2="317.58" y2="458.04"/><line style="
          fill: none;
          stroke: #000000;
          stroke-width: 15;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-miterlimit: 10;
        " x1="365.42" y1="354.99" x2="349.98" y2="388.25"/><path style="
          fill: none;
          stroke: #000000;
          stroke-width: 15;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-miterlimit: 10;
        " d="&#10;&#9;&#9;&#9;M337.07,266.11c-14.481,16.226-16.955,38.907-8.48,57.16c12.198,26.365,43.179,37.557,69.06,26.13"/><path style="
          fill: none;
          stroke: #000000;
          stroke-width: 15;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-miterlimit: 10;
        " d="&#10;&#9;&#9;&#9;M114.09,339.63c4.39-1.26,8.16-4.51,9.91-9.1c2.29-6,8.01-9.69,14.07-9.69c4.907,0,5.826,2,10.76,2&#10;&#9;&#9;&#9;c6.016,0,11.752-3.643,14.06-9.68c2.29-6,8-9.69,14.07-9.69c3.551,0,5.135,1.068,7.09,1.54c7.171,1.837,14.948-1.942,17.73-9.23&#10;&#9;&#9;&#9;c2.653-6.632,8.993-10.222,15.36-9.63"/><path style="
          fill: none;
          stroke: #000000;
          stroke-width: 15;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-miterlimit: 10;
        " d="&#10;&#9;&#9;&#9;M114.09,382.66c0.973,0.288,2.952,1.28,6.18,1.28c6.07,0,11.78-3.69,14.07-9.69c2.29-6,8.01-9.69,14.07-9.69&#10;&#9;&#9;&#9;c4.605,0,5.534,1.709,9.85,1.97c6.213,0.414,12.476-3.218,14.97-9.65c2.891-7.576,11.422-11.716,19.44-8.69&#10;&#9;&#9;&#9;c7.75,2.977,16.481-0.911,19.45-8.69c1.05-2.75,2.82-5.02,5.02-6.66"/><path style="
          fill: none;
          stroke: #000000;
          stroke-width: 15;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-miterlimit: 10;
        " d="&#10;&#9;&#9;&#9;M114.09,428.31c3.44-1.43,7.41-1.59,11.15-0.16c7.75,2.977,16.481-0.911,19.45-8.69c2.29-6,8-9.69,14.07-9.69&#10;&#9;&#9;&#9;c4.886,0,5.854,2,10.74,2c6.07,0,11.78-3.69,14.07-9.69c2.29-5.99,8.01-9.68,14.07-9.68c4.907,0,5.856,2,10.75,2&#10;&#9;&#9;&#9;c3.118,0,6.213-0.998,8.75-2.81"/><g><g><g><path style="
                fill: none;
                stroke: #000000;
                stroke-width: 15;
                stroke-linecap: round;
                stroke-miterlimit: 10;
              " d="M255.97,129.317&#10;&#9;&#9;&#9;&#9;&#9;&#9;c0,7.984-6.472,14.456-14.456,14.456c-7.984,0-14.456-6.472-14.456-14.456"/><path style="
                fill: none;
                stroke: #000000;
                stroke-width: 15;
                stroke-linecap: round;
                stroke-miterlimit: 10;
              " d="M284.881,129.317&#10;&#9;&#9;&#9;&#9;&#9;&#9;c0,7.984-6.472,14.456-14.456,14.456c-7.984,0-14.456-6.472-14.456-14.456"/></g></g><path style="
            fill: none;
            stroke: #000000;
            stroke-width: 15;
            stroke-linecap: round;
            stroke-linejoin: round;
            stroke-miterlimit: 10;
          " d="&#10;&#9;&#9;&#9;&#9;M208.213,117.501c0-7.602-6.163-13.765-13.765-13.765c-7.602,0-13.765,6.163-13.765,13.765"/><path style="
            fill: none;
            stroke: #000000;
            stroke-width: 15;
            stroke-linecap: round;
            stroke-linejoin: round;
            stroke-miterlimit: 10;
          " d="&#10;&#9;&#9;&#9;&#9;M303.727,117.501c0-7.602,6.163-13.765,13.765-13.765c7.602,0,13.765,6.163,13.765,13.765"/></g></g></g></svg>`,F5='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-palette" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 21a9 9 0 0 1 0 -18c4.97 0 9 3.582 9 8c0 1.06 -.474 2.078 -1.318 2.828c-.844 .75 -1.989 1.172 -3.182 1.172h-2.5a2 2 0 0 0 -1 3.75a1.3 1.3 0 0 1 -1 2.25"/><path d="M8.5 10.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"/><path d="M12.5 7.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"/><path d="M16.5 10.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"/></svg>',H5='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-pencil" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4"/><path d="M13.5 6.5l4 4"/></svg>',G5='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-pencil-cog"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4"/><path d="M13.5 6.5l4 4"/><path d="M19.001 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"/><path d="M19.001 15.5v1.5"/><path d="M19.001 21v1.5"/><path d="M22.032 17.25l-1.299 .75"/><path d="M17.27 20l-1.3 .75"/><path d="M15.97 17.25l1.3 .75"/><path d="M20.733 20l1.3 .75"/></svg>',W5='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-photo" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 8h.01"/><path d="M3 6a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3v-12z"/><path d="M3 16l5 -5c.928 -.893 2.072 -.893 3 0l5 5"/><path d="M14 14l1 -1c.928 -.893 2.072 -.893 3 0l3 3"/></svg>',U5='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-photo-off" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 8h.01"/><path d="M7 3h11a3 3 0 0 1 3 3v11m-.856 3.099a2.991 2.991 0 0 1 -2.144 .901h-12a3 3 0 0 1 -3 -3v-12c0 -.845 .349 -1.608 .91 -2.153"/><path d="M3 16l5 -5c.928 -.893 2.072 -.893 3 0l5 5"/><path d="M16.33 12.338c.574 -.054 1.155 .166 1.67 .662l3 3"/><path d="M3 3l18 18" color="orange"/></svg>',V5='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-pin"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 4.5l-4 4l-4 1.5l-1.5 1.5l7 7l1.5 -1.5l1.5 -4l4 -4"/><path d="M9 15l-4.5 4.5"/><path d="M14.5 4l5.5 5.5"/></svg>',Z5='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-player-pause" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 5m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v12a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z"/><path d="M14 5m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v12a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z"/></svg>',q5='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-player-play" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 4v16l13 -8z"/></svg>',j5='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-refresh" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4"/><path d="M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4"/></svg>',K5='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-settings" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z"/><path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"/></svg>',Y5='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-settings-off"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9.451 5.437c.418 -.218 .75 -.609 .874 -1.12c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35c-.486 .118 -.894 .44 -1.123 .878m-.188 3.803c-.517 .523 -1.349 .734 -2.125 .262a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.472 -.774 -.262 -1.604 .259 -2.121"/><path d="M9.889 9.869a3 3 0 1 0 4.226 4.26m.592 -3.424a3.012 3.012 0 0 0 -1.419 -1.415"/><path d="M3 3l18 18"/></svg>',X5='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-spacing-horizontal"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M20 20h-2a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h2"/><path d="M4 20h2a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2"/><path d="M12 8v8"/></svg>',J5='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-spacing-vertical" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 20v-2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v2"/><path d="M4 4v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2"/><path d="M16 12h-8"/></svg>',Q5='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-sun" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"/><path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7"/></svg>',ev='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-trash" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 7l16 0"/><path d="M10 11l0 6"/><path d="M14 11l0 6"/><path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"/><path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"/></svg>',tv='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-world-cog"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M21 12a9 9 0 1 0 -8.979 9"/><path d="M3.6 9h16.8"/><path d="M3.6 15h8.9"/><path d="M11.5 3a17 17 0 0 0 0 18"/><path d="M12.5 3a16.992 16.992 0 0 1 2.522 10.376"/><path d="M19.001 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"/><path d="M19.001 15.5v1.5"/><path d="M19.001 21v1.5"/><path d="M22.032 17.25l-1.299 .75"/><path d="M17.27 20l-1.3 .75"/><path d="M15.97 17.25l1.3 .75"/><path d="M20.733 20l1.3 .75"/></svg>',nv='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-x" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 6l-12 12"/><path d="M6 6l12 12"/></svg>',rv='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-zoom"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"/><path d="M21 21l-6 -6"/></svg>',ov='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-zoom-cancel" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"/><path d="M8 8l4 4"/><path d="M12 8l-4 4"/><path d="M21 21l-6 -6"/></svg>',iv='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-zoom-in" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"/><path d="M7 10l6 0"/><path d="M10 7l0 6"/><path d="M21 21l-6 -6"/></svg>',av='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-zoom-in-area" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 13v4"/><path d="M13 15h4"/><path d="M15 15m-5 0a5 5 0 1 0 10 0a5 5 0 1 0 -10 0"/><path d="M22 22l-3 -3"/><path d="M6 18h-1a2 2 0 0 1 -2 -2v-1"/><path d="M3 11v-1"/><path d="M3 6v-1a2 2 0 0 1 2 -2h1"/><path d="M10 3h1"/><path d="M15 3h1a2 2 0 0 1 2 2v1"/></svg>',sv='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-zoom-out" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"/><path d="M7 10l6 0"/><path d="M21 21l-6 -6"/></svg>',lv='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-zoom-out-area" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M13 15h4"/><path d="M15 15m-5 0a5 5 0 1 0 10 0a5 5 0 1 0 -10 0"/><path d="M22 22l-3 -3"/><path d="M6 18h-1a2 2 0 0 1 -2 -2v-1"/><path d="M3 11v-1"/><path d="M3 6v-1a2 2 0 0 1 2 -2h1"/><path d="M10 3h1"/><path d="M15 3h1a2 2 0 0 1 2 2v1"/></svg>',cv='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-zoom-pan" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"/><path d="M17 17l-2.5 -2.5"/><path d="M10 5l2 -2l2 2"/><path d="M19 10l2 2l-2 2"/><path d="M5 10l-2 2l2 2"/><path d="M10 19l2 2l2 -2"/></svg>',uv=tu({IconAdjustmentsHorizontal:()=>Mm,IconAlertCircle:()=>xm,IconApiBook:()=>Im,IconArrowAutofitDown:()=>Cm,IconArrowAutofitHeight:()=>Om,IconArrowAutofitLeft:()=>Tm,IconArrowAutofitRight:()=>Lm,IconArrowAutofitWidth:()=>Rm,IconArrowBigLeft:()=>Pm,IconArrowBigRight:()=>$m,IconArrowsHorizontal:()=>Dm,IconArrowsLeftRight:()=>zm,IconArrowsMove:()=>Bm,IconArrowsMoveVertical:()=>Nm,IconArrowsVertical:()=>Fm,IconBook:()=>Hm,IconBookArrowLeft:()=>Gm,IconBookArrowRight:()=>Wm,IconBookOff:()=>Um,IconBookUpload:()=>Vm,IconBookmark:()=>Zm,IconBookmarkOff:()=>qm,IconBookmarks:()=>jm,IconBooksReturn:()=>Km,IconBoxAlignTop:()=>Ym,IconCategory:()=>r5,IconCheck:()=>o5,IconChevronLeft:()=>i5,IconChevronRight:()=>a5,IconCircleCheck:()=>s5,IconCircleX:()=>l5,IconComic1:()=>Jm,IconComic1Flat:()=>Xm,IconComic2:()=>e5,IconComic2Flat:()=>Qm,IconComic3:()=>n5,IconComic3Flat:()=>t5,IconDeviceFloppy:()=>c5,IconDotsVertical:()=>u5,IconEReader1:()=>h5,IconEReader1Flat:()=>d5,IconEReader2:()=>p5,IconEReader2Flat:()=>f5,IconExternalLink:()=>g5,IconEye:()=>m5,IconEyeOff:()=>v5,IconFileDownload:()=>b5,IconFilePercent:()=>w5,IconHandClick:()=>_5,IconHelp:()=>y5,IconInfoCircle:()=>k5,IconKeyboard:()=>E5,IconLayoutBottombar:()=>A5,IconLayoutBottombarInactive:()=>S5,IconLayoutDashboard:()=>M5,IconLayoutSidebar:()=>x5,IconLayoutSidebarInactive:()=>I5,IconLayoutSidebarRight:()=>C5,IconLayoutSidebarRightInactive:()=>O5,IconListNumbers:()=>T5,IconLoader2:()=>L5,IconLocationCog:()=>R5,IconMenu2:()=>P5,IconMenuDeep:()=>$5,IconMessage:()=>D5,IconMoon:()=>z5,IconPage:()=>N5,IconPageFlat:()=>B5,IconPalette:()=>F5,IconPencil:()=>H5,IconPencilCog:()=>G5,IconPhoto:()=>W5,IconPhotoOff:()=>U5,IconPin:()=>V5,IconPlayerPause:()=>Z5,IconPlayerPlay:()=>q5,IconRefresh:()=>j5,IconSettings:()=>K5,IconSettingsOff:()=>Y5,IconSpacingHorizontal:()=>X5,IconSpacingVertical:()=>J5,IconSun:()=>Q5,IconTrash:()=>ev,IconWorldCog:()=>tv,IconX:()=>nv,IconZoom:()=>rv,IconZoomCancel:()=>ov,IconZoomIn:()=>iv,IconZoomInArea:()=>av,IconZoomOut:()=>sv,IconZoomOutArea:()=>lv,IconZoomPan:()=>cv}),Sl=tu({IconAdjustmentsHorizontal:()=>vv,IconAlertCircle:()=>Vv,IconApiBook:()=>bv,IconArrowAutofitDown:()=>yv,IconArrowAutofitHeight:()=>kv,IconArrowAutofitLeft:()=>Ev,IconArrowAutofitRight:()=>Av,IconArrowAutofitWidth:()=>Sv,IconArrowBigLeft:()=>Mv,IconArrowBigRight:()=>xv,IconArrowsHorizontal:()=>wv,IconArrowsLeftRight:()=>_v,IconArrowsMove:()=>Iv,IconArrowsMoveVertical:()=>Cv,IconArrowsVertical:()=>Ov,IconBook:()=>Tv,IconBookArrowLeft:()=>Rv,IconBookArrowRight:()=>Pv,IconBookOff:()=>Lv,IconBookUpload:()=>Dv,IconBookmark:()=>zv,IconBookmarkOff:()=>Bv,IconBookmarks:()=>Nv,IconBooksReturn:()=>$v,IconBoxAlignTop:()=>Fv,IconCategory:()=>Hv,IconCheck:()=>Gv,IconChevronLeft:()=>Wv,IconChevronRight:()=>Uv,IconCircleCheck:()=>Zv,IconCircleX:()=>qv,IconComic1:()=>Yv,IconComic1Flat:()=>Xv,IconComic2:()=>Jv,IconComic2Flat:()=>Qv,IconComic3:()=>e4,IconComic3Flat:()=>t4,IconDeviceFloppy:()=>n4,IconDotsVertical:()=>r4,IconEReader1:()=>o4,IconEReader1Flat:()=>i4,IconEReader2:()=>a4,IconEReader2Flat:()=>s4,IconExternalLink:()=>l4,IconEye:()=>c4,IconEyeOff:()=>u4,IconFileDownload:()=>d4,IconFilePercent:()=>h4,IconHandClick:()=>f4,IconHelp:()=>jv,IconInfoCircle:()=>Kv,IconKeyboard:()=>p4,IconLayoutBottombar:()=>m4,IconLayoutBottombarInactive:()=>v4,IconLayoutDashboard:()=>g4,IconLayoutSidebar:()=>b4,IconLayoutSidebarInactive:()=>w4,IconLayoutSidebarRight:()=>_4,IconLayoutSidebarRightInactive:()=>y4,IconListNumbers:()=>k4,IconLoader2:()=>E4,IconLocationCog:()=>A4,IconMenu2:()=>S4,IconMenuDeep:()=>M4,IconMessage:()=>x4,IconMoon:()=>I4,IconPage:()=>C4,IconPageFlat:()=>O4,IconPalette:()=>T4,IconPencil:()=>L4,IconPencilCog:()=>R4,IconPhoto:()=>Ml,IconPhotoOff:()=>xl,IconPin:()=>P4,IconPlayerPause:()=>$4,IconPlayerPlay:()=>D4,IconRefresh:()=>z4,IconSettings:()=>B4,IconSettingsOff:()=>N4,IconSpacingHorizontal:()=>F4,IconSpacingVertical:()=>H4,IconSun:()=>G4,IconTrash:()=>W4,IconWorldCog:()=>U4,IconX:()=>V4,IconZoom:()=>Z4,IconZoomCancel:()=>q4,IconZoomIn:()=>j4,IconZoomInArea:()=>K4,IconZoomOut:()=>Y4,IconZoomOutArea:()=>X4,IconZoomPan:()=>J4});function dv(e){return[...e.matchAll(/([^{}]+)\s*\{([^}]+)\}/g)].map(t=>{const r=t[1].trim(),i=t[2],a=/color:\s*([^;]+)/.exec(i);if(a){const s=a[1].trim();return{selectors:r.split(",").map(l=>l.trim().replace(/\s\s+/g," ")),color:s}}return null}).filter(t=>t!==null)}var hv=dv(Sm),ka=new Map;for(const e of hv)for(const t of e.selectors){const r=t.match(/^\s*\.([^ ]+)\s*(.*)$/);if(!r)continue;const[,i,a]=r;let s=a.trim();s.startsWith(">")&&(s=s.substring(1).trim()),s===""&&(s="*"),ka.has(i)||ka.set(i,[]),ka.get(i)?.push({subSelector:s,color:e.color})}var fv=new DOMParser,pv=new XMLSerializer;function gv(e,t){const r=ka.get(t);if(!r?.length)return e;const i=fv.parseFromString(e,"image/svg+xml").documentElement;if(i.querySelector("parsererror"))return console.error(`Error parsing SVG for ${t}`),e;for(const{subSelector:a,color:s}of r)try{i.querySelectorAll(a).forEach(l=>{l.setAttribute("stroke",s)})}catch(l){console.error(`Invalid selector "${a}" for ${t}`,l)}return pv.serializeToString(i)}var mv=Me.default.mapValues(uv,(e,t)=>gv(e,`icon-tabler-${Me.default.kebabCase(t.replace(/^Icon/,""))}`)),{IconAdjustmentsHorizontal:vv,IconApiBook:bv,IconArrowsHorizontal:wv,IconArrowsLeftRight:_v,IconArrowAutofitDown:yv,IconArrowAutofitHeight:kv,IconArrowAutofitLeft:Ev,IconArrowAutofitRight:Av,IconArrowAutofitWidth:Sv,IconArrowBigLeft:Mv,IconArrowBigRight:xv,IconArrowsMove:Iv,IconArrowsMoveVertical:Cv,IconArrowsVertical:Ov,IconBook:Tv,IconBookOff:Lv,IconBookArrowLeft:Rv,IconBookArrowRight:Pv,IconBooksReturn:$v,IconBookUpload:Dv,IconBookmark:zv,IconBookmarkOff:Bv,IconBookmarks:Nv,IconBoxAlignTop:Fv,IconCategory:Hv,IconCheck:Gv,IconChevronLeft:Wv,IconChevronRight:Uv,IconAlertCircle:Vv,IconCircleCheck:Zv,IconCircleX:qv,IconHelp:jv,IconInfoCircle:Kv,IconComic1:Yv,IconComic1Flat:Xv,IconComic2:Jv,IconComic2Flat:Qv,IconComic3:e4,IconComic3Flat:t4,IconDeviceFloppy:n4,IconDotsVertical:r4,IconEReader1:o4,IconEReader1Flat:i4,IconEReader2:a4,IconEReader2Flat:s4,IconExternalLink:l4,IconEye:c4,IconEyeOff:u4,IconFileDownload:d4,IconFilePercent:h4,IconHandClick:f4,IconKeyboard:p4,IconLayoutDashboard:g4,IconLayoutBottombar:m4,IconLayoutBottombarInactive:v4,IconLayoutSidebar:b4,IconLayoutSidebarInactive:w4,IconLayoutSidebarRight:_4,IconLayoutSidebarRightInactive:y4,IconListNumbers:k4,IconLoader2:E4,IconLocationCog:A4,IconMenu2:S4,IconMenuDeep:M4,IconMessage:x4,IconMoon:I4,IconPage:C4,IconPageFlat:O4,IconPalette:T4,IconPencil:L4,IconPencilCog:R4,IconPhoto:Ml,IconPhotoOff:xl,IconPin:P4,IconPlayerPause:$4,IconPlayerPlay:D4,IconRefresh:z4,IconSettings:B4,IconSettingsOff:N4,IconSpacingHorizontal:F4,IconSpacingVertical:H4,IconSun:G4,IconTrash:W4,IconWorldCog:U4,IconX:V4,IconZoom:Z4,IconZoomCancel:q4,IconZoomIn:j4,IconZoomInArea:K4,IconZoomOut:Y4,IconZoomOutArea:X4,IconZoomPan:J4}=mv;function G(e,t,r,i){var a=arguments.length,s=a<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,r):i,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(e,t,r,i);else for(var h=e.length-1;h>=0;h--)(l=e[h])&&(s=(a<3?l(s):a>3?l(t,r,s):l(t,r))||s);return a>3&&s&&Object.defineProperty(t,r,s),s}var Vr=class extends et{constructor(...t){super(...t),this.name="",this.variant="regular",this.family="classic",this.label="",this.size=""}static{this.styles=Ot`
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
  `}updated(t){super.updated(t),t.has("name")&&(Sl[R0(this.name)]?(this.dispatchEvent(new CustomEvent("load",{bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent("wa-load",{bubbles:!0,composed:!0}))):(this.dispatchEvent(new CustomEvent("error",{bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent("wa-error",{bubbles:!0,composed:!0}))))}render(){const t=Sl[R0(this.name)];if(!t)return Be;const r=this.size?`--mov-icon-size: ${this.size};`:"";return ue`<span
      role=${this.label?"img":Be}
      aria-label=${this.label||Be}
      aria-hidden=${this.label?Be:"true"}
      style=${r}
      >${L0(t)}</span
    >`}};G([oe({type:String})],Vr.prototype,"name",void 0),G([oe({type:String,reflect:!0})],Vr.prototype,"variant",void 0),G([oe({type:String,reflect:!0})],Vr.prototype,"family",void 0),G([oe({type:String})],Vr.prototype,"label",void 0),G([oe({type:String})],Vr.prototype,"size",void 0),Vr=G([ht("mov-icon")],Vr);var Tt=Yo(class extends ji{constructor(e){if(super(e),e.type!==qi.ATTRIBUTE||e.name!=="class"||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(i=>i!=="")));for(const i in t)t[i]&&!this.nt?.has(i)&&this.st.add(i);return this.render(t)}const r=e.element.classList;for(const i of this.st)i in t||(r.remove(i),this.st.delete(i));for(const i in t){const a=!!t[i];a===this.st.has(i)||this.nt?.has(i)||(a?(r.add(i),this.st.add(i)):(r.remove(i),this.st.delete(i)))}return Yn}}),dn=e=>e??Be,Q4=":host{--mov-font-size-scale:1;--mov-font-size-m:calc(1rem * var(--mov-font-size-scale));--mov-font-size-s:round(calc(var(--mov-font-size-m) / 1.125), 1px);--mov-font-size-l:round(calc(var(--mov-font-size-m) * 1.125 * 1.125), 1px);--mov-border-width-s:.0625rem;--mov-border-radius-m:.375rem;--mov-border-radius-pill:9999px;--mov-transition-fast:75ms;--mov-font-weight-action:500;--mov-focus-ring:solid .1875rem var(--mov-color-fill-loud);--mov-focus-ring-offset:.0625rem;--mov-line-height-condensed:1.2;--mov-form-control-padding-block:.75em;--mov-form-control-padding-inline:1em;--mov-form-control-height:round(calc(2 * var(--mov-form-control-padding-block) + 1em * var(--mov-line-height-condensed)), 1px);display:inline-block}:host([size=small]){font-size:var(--mov-font-size-s)}:host([size=medium]){font-size:var(--mov-font-size-m)}:host([size=large]){font-size:var(--mov-font-size-l)}.button{box-sizing:border-box;user-select:none;white-space:nowrap;vertical-align:middle;transition-property:background,border,box-shadow,color;transition-duration:var(--mov-transition-fast);cursor:pointer;padding:0 var(--mov-form-control-padding-inline);font-family:inherit;font-size:inherit;font-weight:var(--mov-font-weight-action);line-height:calc(var(--mov-form-control-height) - var(--mov-border-width-s) * 2);height:var(--mov-form-control-height);border-radius:var(--mov-border-radius-m);border-style:solid;border-width:var(--mov-border-width-s);background-color:var(--mov-color-fill-loud);color:var(--mov-color-on-loud);border-color:#0000;justify-content:center;align-items:center;text-decoration:none;display:inline-flex}:host([appearance~=plain]){& .button{color:var(--mov-color-on-quiet);background-color:#0000;border-color:#0000}@media (hover:hover){& .button:not(.disabled):not(.loading):hover{color:var(--mov-color-on-quiet);background-color:var(--mov-color-fill-quiet)}}& .button:not(.disabled):not(.loading):active{color:var(--mov-color-on-quiet);background-color:color-mix(in oklab, var(--mov-color-fill-quiet), var(--mov-color-mix-active))}}:host([appearance~=outlined]){& .button{color:var(--mov-color-on-quiet);border-color:var(--mov-color-border-loud);background-color:#0000}@media (hover:hover){& .button:not(.disabled):not(.loading):hover{color:var(--mov-color-on-quiet);background-color:var(--mov-color-fill-quiet)}}& .button:not(.disabled):not(.loading):active{color:var(--mov-color-on-quiet);background-color:color-mix(in oklab, var(--mov-color-fill-quiet), var(--mov-color-mix-active))}}:host([appearance~=filled]){& .button{color:var(--mov-color-on-normal);background-color:var(--mov-color-fill-normal);border-color:#0000}@media (hover:hover){& .button:not(.disabled):not(.loading):hover{color:var(--mov-color-on-normal);background-color:color-mix(in oklab, var(--mov-color-fill-normal), var(--mov-color-mix-hover))}}& .button:not(.disabled):not(.loading):active{color:var(--mov-color-on-normal);background-color:color-mix(in oklab, var(--mov-color-fill-normal), var(--mov-color-mix-active))}}:host([appearance~=filled][appearance~=outlined]) .button{border-color:var(--mov-color-border-normal)}:host([appearance~=accent]){& .button{color:var(--mov-color-on-loud);background-color:var(--mov-color-fill-loud);border-color:#0000}@media (hover:hover){& .button:not(.disabled):not(.loading):hover{background-color:color-mix(in oklab, var(--mov-color-fill-loud), var(--mov-color-mix-hover))}}& .button:not(.disabled):not(.loading):active{background-color:color-mix(in oklab, var(--mov-color-fill-loud), var(--mov-color-mix-active))}}.button:focus{outline:none}.button:focus-visible{outline:var(--mov-focus-ring);outline-offset:var(--mov-focus-ring-offset)}.button.disabled{opacity:.5;cursor:not-allowed}.button.disabled *{pointer-events:none}.button.is-icon-button{outline-offset:2px;width:var(--mov-form-control-height);aspect-ratio:1}:host([pill]) .button{border-radius:var(--mov-border-radius-pill)}.start,.end{pointer-events:none;flex:none;align-items:center;display:flex}.label{display:inline-block}.is-icon-button .label{display:flex}mov-icon[part~=caret]{align-self:center;align-items:center;display:flex}mov-icon[part~=caret]::part(svg){width:.875em;height:.875em}.loading{cursor:wait;position:relative}.loading .start,.loading .label,.loading .end,.loading .caret{visibility:hidden}.spinner{--indicator-color:currentColor;--track-color:color-mix(in oklab, currentColor, transparent 90%);border:2px solid var(--track-color);border-top-color:var(--indicator-color);border-radius:50%;width:1em;height:1em;font-size:1em;animation:1s linear infinite spin;position:absolute;top:calc(50% - .5em);left:calc(50% - .5em)}@keyframes spin{to{transform:rotate(360deg)}}slot[name=start]::slotted(*){margin-inline-end:.75em}slot[name=end]::slotted(*),.button:not(.visually-hidden-label) [part~=caret]{margin-inline-start:.75em}",ut=class extends et{constructor(...t){super(...t),this.isIconButton=!1,this.hasLabel=!1,this.hasStart=!1,this.hasEnd=!1,this.title="",this.appearance="accent",this.variant="brand",this.size="medium",this.withCaret=!1,this.disabled=!1,this.loading=!1,this.pill=!1,this.type="button"}static{this.styles=[Xt(Q4)]}handleClick(t){(this.disabled||this.loading)&&(t.preventDefault(),t.stopPropagation())}click(){this.button?.click()}focus(t){this.button?.focus(t)}blur(){this.button?.blur()}render(){const t=!!this.href,r={button:!0,"with-caret":this.withCaret,disabled:this.disabled,loading:this.loading,pill:this.pill,"has-label":this.hasLabel,"has-start":this.hasStart,"has-end":this.hasEnd,"is-icon-button":this.isIconButton},i=ue`
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
      ${this.withCaret?ue`<mov-icon
            part="caret"
            class="caret"
            name="IconChevronRight"
            style="transform: rotate(90deg)"
          ></mov-icon>`:""}
      ${this.loading?ue`<span
            part="spinner"
            class="spinner"
          ></span>`:""}
    `;return t?ue`
        <a
          part="base"
          class=${Tt(r)}
          href=${dn(this.href)}
          target=${dn(this.target)}
          title=${dn(this.title)}
          role="button"
          aria-disabled=${this.disabled?"true":"false"}
          tabindex=${this.disabled?"-1":"0"}
          download=${dn(this.download)}
          @click=${this.handleClick}
        >
          ${i}
        </a>
      `:ue`
        <button
          part="base"
          class=${Tt(r)}
          ?disabled=${this.disabled||this.loading}
          type=${dn(this.type)}
          title=${dn(this.title)}
          name=${dn(this.name)}
          value=${dn(this.value)}
          aria-disabled=${this.disabled?"true":"false"}
          tabindex=${this.disabled?"-1":"0"}
        >
          ${i}
        </button>
      `}handleLabelSlotChange(){const t=this.labelSlot?.assignedNodes({flatten:!0})??[],r=t.filter(l=>l.nodeType===Node.ELEMENT_NODE),i=t.filter(l=>l.nodeType===Node.TEXT_NODE&&l.textContent?.trim()!==""),a=l=>["wa-icon","mov-icon","svg"].includes(l.localName),s=r.some(a);this.isIconButton=i.length===0&&s}};G([Ur(".button")],ut.prototype,"button",void 0),G([Ur("slot:not([name])")],ut.prototype,"labelSlot",void 0),G([un()],ut.prototype,"isIconButton",void 0),G([un()],ut.prototype,"hasLabel",void 0),G([un()],ut.prototype,"hasStart",void 0),G([un()],ut.prototype,"hasEnd",void 0),G([oe()],ut.prototype,"title",void 0),G([oe({reflect:!0})],ut.prototype,"appearance",void 0),G([oe({reflect:!0})],ut.prototype,"variant",void 0),G([oe({reflect:!0})],ut.prototype,"size",void 0),G([oe({attribute:"with-caret",type:Boolean,reflect:!0})],ut.prototype,"withCaret",void 0),G([oe({type:Boolean,reflect:!0})],ut.prototype,"disabled",void 0),G([oe({type:Boolean,reflect:!0})],ut.prototype,"loading",void 0),G([oe({type:Boolean,reflect:!0})],ut.prototype,"pill",void 0),G([oe()],ut.prototype,"type",void 0),G([oe({reflect:!0})],ut.prototype,"name",void 0),G([oe({reflect:!0})],ut.prototype,"value",void 0),G([oe({reflect:!0})],ut.prototype,"href",void 0),G([oe()],ut.prototype,"target",void 0),G([oe({reflect:!0})],ut.prototype,"rel",void 0),G([oe()],ut.prototype,"download",void 0),G([oe({reflect:!0})],ut.prototype,"form",void 0),ut=G([ht("mov-button")],ut);var En=class extends et{constructor(...t){super(...t),this.mode="menu",this.active=!1,this.label="",this.icon="",this.activeIcon="",this.appearance="accent",this.size="medium",this.disabled=!1,this.loading=!1}static{this.styles=Ot`
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
  `}connectedCallback(){super.connectedCallback(),this.label||(this.label=this._getDefaultLabel())}render(){const t=this.active?this.activeLabel??this.label:this.label,r={"two-icon-mode":["menu","custom","theme"].includes(this.mode),"single-icon-mode":["chevron","expand","play-pause"].includes(this.mode)};return ue`
      <mov-button
        @click=${this._onClick}
        .appearance=${dn(this.appearance)}
        .size=${dn(this.size)}
        ?disabled=${dn(this.disabled)}
        ?loading=${dn(this.loading)}
        .title=${dn(this.title)}
        class=${Tt(r)}
        title=${t}
        aria-label=${t}
        aria-pressed=${this.active?"true":"false"}
        icon-only
      >
        ${this._renderIcons()}
      </mov-button>
    `}_getDefaultLabel(){switch(this.mode){case"menu":return"Toggle menu";case"chevron":return"Toggle expand";case"theme":return"Toggle theme";case"play-pause":return"Toggle play";case"expand":return"Toggle expand";case"custom":return"Toggle";default:return"Toggle"}}_getIcons(){switch(this.mode){case"menu":return{inactive:"menu-2",active:"x"};case"chevron":return{inactive:"chevron-right",active:"chevron-right"};case"theme":return{inactive:"moon",active:"sun"};case"play-pause":return{inactive:"player-play",active:"player-pause"};case"expand":return{inactive:"arrow-autofit-down",active:"arrow-autofit-down"};case"custom":return{inactive:this.icon,active:this.activeIcon};default:return{inactive:"",active:""}}}_renderIcons(){const t=this._getIcons();return t.inactive?this.mode==="chevron"?ue`<mov-icon
        class="chevron-icon"
        name=${t.inactive}
      ></mov-icon>`:this.mode==="expand"?ue`<mov-icon
        class="expand-icon"
        name=${t.inactive}
      ></mov-icon>`:this.mode==="play-pause"?ue`<mov-icon
        class="play-pause-icon"
        name=${this.active?t.active:t.inactive}
      ></mov-icon>`:ue`
      <mov-icon
        class="inactive-icon"
        name=${t.inactive}
      ></mov-icon>
      <mov-icon
        class="active-icon"
        name=${t.active}
      ></mov-icon>
    `:Be}_onClick(){if(this.disabled||this.loading)return;const t=this.active;this.active=!this.active,this.dispatchEvent(new CustomEvent("toggle",{detail:{value:this.active,oldValue:t,mode:this.mode},bubbles:!0,composed:!0}))}toggle(){this._onClick()}setActive(t){this.active=t}};G([oe({type:String})],En.prototype,"mode",void 0),G([oe({type:Boolean,reflect:!0})],En.prototype,"active",void 0),G([oe({type:String})],En.prototype,"label",void 0),G([oe({type:String})],En.prototype,"activeLabel",void 0),G([oe({type:String})],En.prototype,"icon",void 0),G([oe({type:String})],En.prototype,"activeIcon",void 0),G([oe({type:String,reflect:!0})],En.prototype,"appearance",void 0),G([oe({type:String,reflect:!0})],En.prototype,"size",void 0),G([oe({type:Boolean})],En.prototype,"disabled",void 0),G([oe({type:Boolean,reflect:!0})],En.prototype,"loading",void 0),En=G([ht("toggle-button")],En);var P0="important",e3=" !"+P0,Wn=Yo(class extends ji{constructor(e){if(super(e),e.type!==qi.ATTRIBUTE||e.name!=="style"||e.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce((t,r)=>{const i=e[r];return i==null?t:t+`${r=r.includes("-")?r:r.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${i};`},"")}update(e,[t]){const{style:r}=e.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(t)),this.render(t);for(const i of this.ft)t[i]??(this.ft.delete(i),i.includes("-")?r.removeProperty(i):r[i]=null);for(const i in t){const a=t[i];if(a!=null){this.ft.add(i);const s=typeof a=="string"&&a.endsWith(e3);i.includes("-")||s?r.setProperty(i,s?a.slice(0,-11):a,s?P0:""):r[i]=a}}return Yn}}),t3=Me.default.fromPairs(Me.default.entries(Sl).map(([e,t])=>[e,L0(t)])),{IconAdjustmentsHorizontal:UA,IconApiBook:VA,IconArrowsHorizontal:ZA,IconArrowsLeftRight:qA,IconArrowAutofitDown:jA,IconArrowAutofitHeight:n3,IconArrowAutofitLeft:KA,IconArrowAutofitRight:YA,IconArrowAutofitWidth:r3,IconArrowBigLeft:XA,IconArrowBigRight:JA,IconArrowsMove:QA,IconArrowsMoveVertical:eS,IconArrowsVertical:tS,IconBook:nS,IconBookOff:rS,IconBookArrowLeft:oS,IconBookArrowRight:iS,IconBooksReturn:aS,IconBookUpload:sS,IconBookmark:o3,IconBookmarkOff:i3,IconBookmarks:lS,IconBoxAlignTop:cS,IconCategory:a3,IconCheck:Ea,IconChevronLeft:uS,IconChevronRight:dS,IconAlertCircle:hS,IconCircleCheck:fS,IconCircleX:pS,IconHelp:gS,IconInfoCircle:mS,IconComic1:vS,IconComic1Flat:bS,IconComic2:wS,IconComic2Flat:_S,IconComic3:yS,IconComic3Flat:kS,IconDeviceFloppy:ES,IconDotsVertical:AS,IconEReader1:SS,IconEReader1Flat:MS,IconEReader2:xS,IconEReader2Flat:IS,IconExternalLink:CS,IconEye:s3,IconEyeOff:l3,IconFileDownload:OS,IconFilePercent:TS,IconHandClick:LS,IconKeyboard:RS,IconLayoutDashboard:PS,IconLayoutBottombar:$S,IconLayoutBottombarInactive:DS,IconLayoutSidebar:zS,IconLayoutSidebarInactive:BS,IconLayoutSidebarRight:NS,IconLayoutSidebarRightInactive:FS,IconListNumbers:HS,IconLoader2:GS,IconLocationCog:WS,IconMenu2:US,IconMenuDeep:VS,IconMessage:ZS,IconMoon:qS,IconPage:jS,IconPageFlat:KS,IconPalette:YS,IconPencil:XS,IconPencilCog:JS,IconPhoto:QS,IconPhotoOff:eM,IconPin:tM,IconPlayerPause:nM,IconPlayerPlay:rM,IconRefresh:c3,IconSettings:oM,IconSettingsOff:iM,IconSpacingHorizontal:u3,IconSpacingVertical:aM,IconSun:sM,IconTrash:lM,IconWorldCog:cM,IconX:Il,IconZoom:uM,IconZoomCancel:d3,IconZoomIn:h3,IconZoomInArea:dM,IconZoomOut:f3,IconZoomOutArea:hM,IconZoomPan:fM}=t3,mr=class extends et{constructor(...t){super(...t),this.color="#000000",this.size=26,this.radius="50%",this.contrastColor="#FFFFFF",this.checked=!1}static{this.styles=Ot`
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
  `}willUpdate(t){t.has("color")&&(this.contrastColor=yo(this.color)),t.has("selected")&&(this.checked=this.color.toLowerCase()===this.selected?.toLowerCase())}handleClick(){this.dispatchEvent(new CustomEvent("input",{detail:{value:this.color},bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent("change",{detail:{value:this.color},bubbles:!0,composed:!0}))}render(){const t={width:`${this.size}px`,height:`${this.size}px`},r={"--radius":typeof this.radius=="number"?`${this.radius}px`:this.radius,"--color":this.color,"--contrast-color":this.contrastColor};return ue`
      <div style=${Wn(t)}>
        <div
          class="swatch"
          style=${Wn(r)}
          @click=${this.handleClick}
        >
          <slot></slot>
          <span class="check-icon"> ${Ea} </span>
        </div>
      </div>
    `}};G([oe({type:String})],mr.prototype,"color",void 0),G([oe({type:String})],mr.prototype,"selected",void 0),G([oe({type:Number})],mr.prototype,"size",void 0),G([oe({type:String})],mr.prototype,"radius",void 0),G([oe({state:!0})],mr.prototype,"contrastColor",void 0),G([oe({type:Boolean,reflect:!0})],mr.prototype,"checked",void 0),mr=G([ht("color-swatch")],mr);function p3(e){const[t,r,i]=e.to("oklch").coords.map(u=>u??0),a=[.95,.9,.8,.7,.6,.5,.4,.3,.2,.1,.05],s=a.map(u=>new ct("oklch",[u,r,i]).toString({format:"hex"}));let l=-1,h=1/0;for(let u=0;u<a.length;u++){const f=Math.abs(a[u]-t);f<h&&(h=f,l=u)}return l!==-1&&(s[l]=e.toString({format:"hex"})),s.map(u=>u.toUpperCase())}function g3(e){const t=e.to("hsl"),r=[.97,.9,.8,.7,.6,.5,.4,.3,.2,.1,.05],i=[];for(const a of r){const s=t.clone();s.coords[2]=a*100;const l=s.coords[1]??0;a>.8?s.coords[1]=l*.4:a>.6?s.coords[1]=l*.8:a<.3&&(s.coords[1]=Math.min(100,l*1.1)),i.push(s.toString({format:"hex"}).toUpperCase())}return i}function m3(e){const t=[],r=[95,90,80,70,60,50,40,30,20,10,5],i=e.to("hsl");for(const a of r){const s=i.clone();s.coords[2]=a,t.push(s.toString({format:"hex"}).toUpperCase())}return t}function v3(e){const t=new Array(11).fill(""),r=e.to("hsl"),i={lightest:{lightness:95,rotate:-10,saturate:-30},darkest:{lightness:10,rotate:10,saturate:10}},a=5,s=5,l=(i.lightest.lightness-50)/a,h=(50-i.darkest.lightness)/s,u=i.lightest.rotate/a,f=i.darkest.rotate/s,p=i.lightest.saturate/a,b=i.darkest.saturate/s;for(let w=1;w<=a;w++){const v=a-w,m=r.clone();m.coords[2]=(m.coords[2]??0)+l*(w-.5),m.coords[0]=(m.coords[0]??0)+u*w,m.coords[1]=(m.coords[1]??0)+p*w,t[v]=m.toString({format:"hex"})}t[5]=r.clone().toString({format:"hex"});for(let w=1;w<=s;w++){const v=a+w,m=r.clone();m.coords[2]=(m.coords[2]??0)-h*(w-.5),m.coords[0]=(m.coords[0]??0)+f*w,m.coords[1]=(m.coords[1]??0)+b*w,t[v]=m.toString({format:"hex"})}return t}function b3(e){const[t,r,i]=e.to("hsl").coords.map(s=>s??0),a=new Array(11);a[5]=e.toString({format:"hex"});for(let s=0;s<5;s++){const l=(5-s)/6,h=i+(100-i)*l;a[s]=new ct("hsl",[t,r-r*l,h]).toString({format:"hex"})}for(let s=0;s<5;s++){const l=(s+1)/6,h=i-i*l,u=r+(100-r)*l;a[s+6]=new ct("hsl",[t,u,h]).toString({format:"hex"})}return a}function $0(e,t="steps"){let r;try{r=ct.get(e)}catch{r=ct.get(bl.navy)}switch(t){case"saturation":return g3(r);case"lightness":return m3(r);case"mantine":return b3(r);case"chakra":return v3(r);default:return p3(r)}}var vr=class extends et{constructor(...t){super(...t),this.baseColor="#228be6",this.mode="steps",this.orientation="horizontal",this.value="",this.gradient=[]}static{this.styles=Ot`
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
  `}willUpdate(t){(t.has("baseColor")||t.has("mode"))&&(this.gradient=$0(this.baseColor,this.mode)??[])}handleSwatchClick(t){this.value=t,this.dispatchEvent(new CustomEvent("input",{detail:{value:this.value},bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value},bubbles:!0,composed:!0}))}render(){return ue`
      ${this.gradient.map(t=>ue`
          <div
            class="swatch"
            ?checked=${this.selected&&t.toLowerCase()===this.selected.toLowerCase()}
            title=${t}
            @click=${()=>this.handleSwatchClick(t)}
          >
            <div
              class="swatch-inner"
              style="--color: ${t}; --text-color: ${yo(t)}"
            >
              <span class="checkmark">${Ea}</span>
            </div>
          </div>
        `)}
    `}};G([oe({type:String})],vr.prototype,"baseColor",void 0),G([oe({type:String})],vr.prototype,"mode",void 0),G([oe({type:String,reflect:!0})],vr.prototype,"orientation",void 0),G([oe({type:String})],vr.prototype,"selected",void 0),G([oe({type:String,reflect:!0})],vr.prototype,"value",void 0),G([un()],vr.prototype,"gradient",void 0),vr=G([ht("color-palette")],vr);var Aa=class extends et{constructor(...t){super(...t),this.value=""}static{this.styles=Ot`
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
  `}handleColorClick(t){this.value=t.currentTarget.title,this.dispatchEvent(new CustomEvent("input",{detail:{value:this.value},bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value},bubbles:!0,composed:!0}))}render(){const t=Me.default.keys(kt).filter(i=>!["dark","gray","zinc","neutral","stone"].includes(i)),r=[200,300,400,500,600,700,800,900,950];return t.map(i=>ue` <div class="SwatchGroup">
        <span class="ColorName">${i}</span>
        <div class="Swatches">${r.map(a=>{const s=kt[i][a],l=yo(s);return ue`
          <span
            title="${s}"
            class="${Tt({ThemeRadio:!0,selected:this.selected?.toLowerCase()===s.toLowerCase()})}"
            style="background-color: ${s}; color: ${l}"
            @click=${this.handleColorClick}
          >
            ${Ea}
          </span>
        `})}</div>
      </div>`)}};G([oe({type:String,reflect:!0})],Aa.prototype,"value",void 0),G([oe({type:String})],Aa.prototype,"selected",void 0),Aa=G([ht("color-panel")],Aa);var Dt=class extends et{constructor(...t){super(...t),this.value="#228be6",this.defaultValue="#228be6",this.label="",this.hint="",this.name="",this.disabled=!1,this.size="medium",this.swatches=null,this.mode="popup",this.opened=!1,this.popupDirection="left",this.sourceSpace="srgb",this.hsv={h:0,s:0,v:0},this.saturationThumbPosition={x:0,y:0},this.hueThumbPosition=0,this.isDraggingSaturation=!1,this.isDraggingHue=!1}static{this.styles=Ot`
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
  `}connectedCallback(){super.connectedCallback(),this.updateStateFromValue(this.value),window.addEventListener("mousemove",this.handleDrag.bind(this)),window.addEventListener("mouseup",this.handleDragEnd.bind(this)),window.addEventListener("touchmove",this.handleDrag.bind(this),{passive:!1}),window.addEventListener("touchend",this.handleDragEnd.bind(this))}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("mousemove",this.handleDrag.bind(this)),window.removeEventListener("mouseup",this.handleDragEnd.bind(this)),window.removeEventListener("touchmove",this.handleDrag.bind(this)),window.removeEventListener("touchend",this.handleDragEnd.bind(this)),window.removeEventListener("click",this.handleClickOutside.bind(this))}updated(t){t.has("mode")&&(this.mode==="popup"?window.addEventListener("click",this.handleClickOutside.bind(this)):window.removeEventListener("click",this.handleClickOutside.bind(this)))}willUpdate(t){t.has("value")&&this.updateStateFromValue(this.value),t.has("mode")&&this.mode==="inline"&&(this.opened=!1)}handleClickOutside(t){this.opened&&!t.composedPath().includes(this)&&this.hide()}show(){this.disabled||this.opened||(this.opened=!0,this.dispatchEvent(new CustomEvent("wa-show",{bubbles:!0,composed:!0})),setTimeout(()=>{this.dispatchEvent(new CustomEvent("wa-after-show",{bubbles:!0,composed:!0}))},150))}hide(){this.opened&&(this.opened=!1,this.dispatchEvent(new CustomEvent("wa-hide",{bubbles:!0,composed:!0})),setTimeout(()=>{this.dispatchEvent(new CustomEvent("wa-after-hide",{bubbles:!0,composed:!0}))},150))}togglePopup(){if(this.mode==="popup")if(this.opened)this.hide();else{const t=this.getBoundingClientRect(),r=250;let i;const a=this.closest("mov-drawer");if(a?.shadowRoot){const s=a.shadowRoot.querySelector("dialog");s?i=s.getBoundingClientRect():i={left:0,right:window.innerWidth}}else i={left:0,right:window.innerWidth};t.left+r>i.right?t.right-r>i.left?this.popupDirection="right":this.popupDirection="left":this.popupDirection="left",this.show()}}isSameColor(t,r){return!t||!r?!1:ct.deltaE(t,r,{method:"2000"})<1}renderCheckIcon(t){return ue`
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
        style=${Wn({stroke:yo(t)})}
      >
        <path d="M5 12l5 5l10 -10" />
      </svg>
    `}renderPickerBody(){const t={backgroundColor:`hsl(${this.hsv.h}, 100%, 50%)`},r={h:this.hsv.h,s:this.hsv.s*100,v:this.hsv.v*100},i={top:`${this.saturationThumbPosition.y}%`,left:`${this.saturationThumbPosition.x}%`,backgroundColor:new ct("hsv",[r.h,r.s,r.v]).toString({format:"hex"})},a={left:`${this.hueThumbPosition}%`};return ue`
      <div
        class="saturation-panel"
        style=${Wn(t)}
        @mousedown=${this.handleSaturationDragStart.bind(this)}
        @touchstart=${this.handleSaturationDragStart.bind(this)}
      >
        <div class="saturation-overlay-1"></div>
        <div class="saturation-overlay-2"></div>
        <div
          class="saturation-thumb"
          style=${Wn(i)}
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
            style=${Wn(a)}
          ></div>
        </div>
      </div>

      <div class="swatches">
        ${(this.swatches||Me.default.entries(kt).filter(([s])=>!["dark","gray","zinc","neutral","stone"].includes(s)).map(([,s])=>s[600])).map(s=>ue`
            <button
              class="swatch"
              title=${s}
              style=${Wn({backgroundColor:s})}
              @click=${()=>this.selectSwatch(s)}
            >
              ${this.isSameColor(this.value,s)?this.renderCheckIcon(s):""}
            </button>
          `)}
      </div>
    `}render(){const t={"picker-container":!0,popup:this.mode==="popup",right:this.popupDirection==="right"},r=this.renderPickerBody();return this.mode==="popup"?ue`
        <div
          class="popup-trigger"
          @click=${this.togglePopup}
        >
          <div
            class="preview"
            style=${Wn({backgroundColor:this.value})}
          ></div>
        </div>
        ${this.opened?ue`<div class=${Tt(t)}>${r}</div>`:""}
      `:ue`<div class=${Tt(t)}>${r}</div>`}parseColor(t){try{return ct.get(t)}catch(r){return console.error(`[mov-color-picker] Invalid color value: "${t}"`,r),null}}colorToHsv(t){let[r,i,a]=t.to("srgb").to("hsv").coords.map(s=>s??0);return Number.isNaN(r)&&(r=this.hsv.h||0,i=0),i=Math.max(0,Math.min(100,i))/100,a=Math.max(0,Math.min(100,a))/100,{h:r,s:i,v:a}}updateStateFromValue(t){const r=this.parseColor(t);if(!r)return;this.sourceSpace=r.space.id;const i=this.colorToHsv(r);(i.h!==this.hsv.h||i.s!==this.hsv.s||i.v!==this.hsv.v)&&(this.hsv=i,this.updateThumbPositions())}dispatchInput(){this.dispatchEvent(new CustomEvent("input",{detail:{value:this.value},bubbles:!0,composed:!0}))}dispatchChange(){this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value},bubbles:!0,composed:!0}))}updateValueFromHsv(){const t={h:this.hsv.h,s:this.hsv.s*100,v:this.hsv.v*100},r=new ct("hsv",[t.h,t.s,t.v]);let i;try{!this.sourceSpace||["srgb","hsl","hsv"].includes(this.sourceSpace)?i=r.to("srgb").toString({format:"hex"}):i=r.to(this.sourceSpace).toString({precision:5})}catch(a){console.error(`[mov-color-picker] Could not convert color to space ${this.sourceSpace}`,a),i=r.to("srgb").toString({format:"hex"})}this.value!==i&&(this.value=i,this.dispatchInput())}updateThumbPositions(){this.saturationThumbPosition={x:this.hsv.s*100,y:(1-this.hsv.v)*100},this.hueThumbPosition=this.hsv.h/360*100}handleSaturationDragStart(t){t.preventDefault(),this.isDraggingSaturation=!0,this.saturationPanel=this.shadowRoot?.querySelector(".saturation-panel"),this.updateSaturation(t)}handleHueDragStart(t){t.preventDefault(),this.isDraggingHue=!0,this.hueSlider=this.shadowRoot?.querySelector(".hue-slider"),this.updateHue(t)}handleDrag(t){this.isDraggingSaturation&&this.updateSaturation(t),this.isDraggingHue&&this.updateHue(t)}handleDragEnd(){(this.isDraggingSaturation||this.isDraggingHue)&&this.dispatchChange(),this.isDraggingSaturation=!1,this.isDraggingHue=!1}getEventPosition(t){return"touches"in t?{clientX:t.touches[0].clientX,clientY:t.touches[0].clientY}:{clientX:t.clientX,clientY:t.clientY}}updateSaturation(t){if(!this.saturationPanel)return;const{clientX:r,clientY:i}=this.getEventPosition(t),a=this.saturationPanel.getBoundingClientRect(),s=Math.max(0,Math.min(r-a.left,a.width)),l=Math.max(0,Math.min(i-a.top,a.height));this.hsv.s=s/a.width,this.hsv.v=1-l/a.height,this.updateValueFromHsv(),this.updateThumbPositions()}updateHue(t){if(!this.hueSlider)return;const{clientX:r}=this.getEventPosition(t),i=this.hueSlider.getBoundingClientRect(),a=Math.max(0,Math.min(r-i.left,i.width));this.hsv.h=a/i.width*360,this.updateValueFromHsv(),this.updateThumbPositions()}selectSwatch(t){this.value=t,this.dispatchInput(),this.dispatchChange()}};G([oe({type:String})],Dt.prototype,"value",void 0),G([oe({type:String,attribute:"default-value"})],Dt.prototype,"defaultValue",void 0),G([oe({type:String})],Dt.prototype,"label",void 0),G([oe({type:String})],Dt.prototype,"hint",void 0),G([oe({type:String})],Dt.prototype,"name",void 0),G([oe({type:Boolean,reflect:!0})],Dt.prototype,"disabled",void 0),G([oe({type:String,reflect:!0})],Dt.prototype,"size",void 0),G([oe({type:Array})],Dt.prototype,"swatches",void 0),G([oe({type:String})],Dt.prototype,"mode",void 0),G([un()],Dt.prototype,"opened",void 0),G([un()],Dt.prototype,"popupDirection",void 0),G([un()],Dt.prototype,"sourceSpace",void 0),G([un()],Dt.prototype,"hsv",void 0),G([un()],Dt.prototype,"saturationThumbPosition",void 0),G([un()],Dt.prototype,"hueThumbPosition",void 0),Dt=G([ht("mov-color-picker")],Dt);var D0=(e,t,r)=>{for(const i of t)if(i[0]===e)return(0,i[1])();return r?.()},br=class extends et{constructor(...t){super(...t),this.value="",this.labelPosition="side",this.size="medium",this._options=[],this.resizeObserver=new ResizeObserver(()=>this.updateThumbPosition())}static{this.styles=Ot`
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
  `}connectedCallback(){super.connectedCallback(),this.resizeObserver.observe(this)}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver.unobserve(this)}handleClick(t,r){this.value=r,this.dispatchEvent(new CustomEvent("change",{detail:this.value,bubbles:!0,composed:!0}))}handleSlotChange(){this._options=this._slotEl.assignedNodes({flatten:!0}).filter(t=>t.nodeName==="SEGMENTED-CONTROL-OPTION").map(t=>({value:t.getAttribute("value")??"",label:t.getAttribute("label")??"",icon:t.getAttribute("icon")??void 0}))}firstUpdated(){this.handleSlotChange(),this.updateComplete.then(()=>this.updateThumbPosition())}updated(t){super.updated(t),(t.has("value")||t.has("_options")||t.has("labelPosition")||t.has("size"))&&Promise.resolve().then(()=>this.updateThumbPosition())}updateThumbPosition(){if(!this.thumb)return;const t=this.shadowRoot?.querySelector(".button.selected");if(t){const{offsetWidth:r,offsetHeight:i}=t,a=t.getBoundingClientRect(),s=this.shadowRoot?.querySelector(".segmented-control")?.getBoundingClientRect(),l=a.left-(s?.left??0),h=a.top-(s?.top??0);this.thumb.style.transform=`translate(${l}px, ${h}px)`,this.thumb.style.width=`${r}px`,this.thumb.style.height=`${i}px`}else this.thumb.style.width="0px",this.thumb.style.height="0px"}render(){return ue`
      <div class="segmented-control">
        <div class="thumb"></div>
        ${this._options.map(t=>ue`
            <div
              class="option"
              title="${this.labelPosition==="tooltip"?t.label:Be}"
            >
              <button
                class="${Tt({button:!0,selected:this.value===t.value,bottom:this.labelPosition==="bottom",small:this.size==="small",medium:this.size==="medium",large:this.size==="large"})}"
                @click=${r=>this.handleClick(r,t.value)}
                role="radio"
                aria-checked="${this.value===t.value}"
              >
                ${t.icon?ue`<mov-icon
                      name="${t.icon}"
                      .size=${D0(this.size,[["small",()=>"16px"],["medium",()=>"24px"],["large",()=>"36px"]],()=>this.size)}
                    ></mov-icon>`:Be}
                ${this.labelPosition!=="tooltip"?ue`<span>${t.label}</span>`:Be}
              </button>
            </div>
          `)}
      </div>
      <div style="display: none;">
        <slot @slotchange=${this.handleSlotChange}></slot>
      </div>
    `}};G([oe({type:String,reflect:!0})],br.prototype,"value",void 0),G([oe({type:String})],br.prototype,"labelPosition",void 0),G([oe({type:String})],br.prototype,"size",void 0),G([un()],br.prototype,"_options",void 0),G([Ur(".thumb")],br.prototype,"thumb",void 0),G([Ur("slot")],br.prototype,"_slotEl",void 0),br=G([ht("segmented-control")],br);var fi=class extends et{constructor(...t){super(...t),this.value="",this.label=""}createRenderRoot(){return this}};G([oe({type:String,reflect:!0})],fi.prototype,"value",void 0),G([oe({type:String,reflect:!0})],fi.prototype,"label",void 0),G([oe({type:String,reflect:!0})],fi.prototype,"icon",void 0),fi=G([ht("segmented-control-option")],fi);var hn=class extends et{constructor(...t){super(...t),this.name="",this.value="on",this.checked=!1,this.defaultChecked=!1,this.disabled=!1,this.required=!1,this.size="medium",this.hint="",this.design="graphical",this.textOn="ON",this.textOff="OFF"}static{this.styles=Ot`
    :host {
      --switch-width: 3rem;
      --switch-height: 1.5rem;
      --knob-size: 1.25rem;
      display: inline-block;
    }

    :host([size='small']) {
      --switch-width: 2.5rem;
      --switch-height: 1.25rem;
      --knob-size: 1rem;
    }

    :host([size='large']) {
      --switch-width: 4rem;
      --switch-height: 2rem;
      --knob-size: 1.75rem;
    }

    *,
    *::before,
    *::after {
      box-sizing: border-box;
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
      top: 1px;
      left: 1px;
      width: var(--knob-size);
      height: var(--knob-size);
      background-color: #fff;
      border-radius: 50%;
      box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
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
      left: calc(100% - var(--knob-size) - 1px);
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

    .hint {
      font-size: 0.8rem;
      opacity: 0.7;
      margin-top: 0.25rem;
    }
  `}handleChange(t){this.disabled||(this.checked=t.target.checked,this.dispatchEvent(new CustomEvent("change",{bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent("input",{bubbles:!0,composed:!0})))}render(){const t=this.design.toLowerCase();let r;return t==="graphical"?r=ue`${this.checked?Ea:Il}`:r=ue`<span class="text">${this.checked?this.textOn:this.textOff}</span>`,ue`
      <div class="base">
        <label class="label">
          <slot></slot>
          <input
            type="checkbox"
            .name="${this.name}"
            .value="${this.value}"
            .checked=${this.checked}
            ?disabled=${this.disabled}
            ?required=${this.required}
            @change=${this.handleChange}
          />
          <div
            class="${Tt({switch:!0,[t]:!0})}"
          >
            <div class="knob">${r}</div>
          </div>
        </label>
        <div class="hint">
          <slot name="hint">${this.hint}</slot>
        </div>
      </div>
    `}};G([oe({type:String})],hn.prototype,"name",void 0),G([oe({type:String})],hn.prototype,"value",void 0),G([oe({type:Boolean,reflect:!0})],hn.prototype,"checked",void 0),G([oe({type:Boolean,reflect:!0,attribute:"default-checked"})],hn.prototype,"defaultChecked",void 0),G([oe({type:Boolean,reflect:!0})],hn.prototype,"disabled",void 0),G([oe({type:Boolean,reflect:!0})],hn.prototype,"required",void 0),G([oe({type:String,reflect:!0})],hn.prototype,"size",void 0),G([oe({type:String})],hn.prototype,"hint",void 0),G([oe({type:String,reflect:!0})],hn.prototype,"design",void 0),G([oe({type:String})],hn.prototype,"textOn",void 0),G([oe({type:String})],hn.prototype,"textOff",void 0),hn=G([ht("mov-switch")],hn);var w3=wn((e=>{Object.defineProperty(e,"__esModule",{value:!0}),e.BLANK_URL=e.relativeFirstCharacters=e.whitespaceEscapeCharsRegex=e.urlSchemeRegex=e.ctrlCharactersRegex=e.htmlCtrlEntityRegex=e.htmlEntitiesRegex=e.invalidProtocolRegex=void 0,e.invalidProtocolRegex=/^([^\w]*)(javascript|data|vbscript)/im,e.htmlEntitiesRegex=/&#(\w+)(^\w|;)?/g,e.htmlCtrlEntityRegex=/&(newline|tab);/gi,e.ctrlCharactersRegex=/[\u0000-\u001F\u007F-\u009F\u2000-\u200D\uFEFF]/gim,e.urlSchemeRegex=/^.+(:|&colon;)/gim,e.whitespaceEscapeCharsRegex=/(\\|%5[cC])((%(6[eE]|72|74))|[nrt])/g,e.relativeFirstCharacters=[".","/"],e.BLANK_URL="about:blank"})),_3=wn((e=>{Object.defineProperty(e,"__esModule",{value:!0}),e.sanitizeUrl=l;var t=w3();function r(h){return t.relativeFirstCharacters.indexOf(h[0])>-1}function i(h){return h.replace(t.ctrlCharactersRegex,"").replace(t.htmlEntitiesRegex,function(u,f){return String.fromCharCode(f)})}function a(h){return URL.canParse(h)}function s(h){try{return decodeURIComponent(h)}catch{return h}}function l(h){if(!h)return t.BLANK_URL;var u,f=s(h.trim());do f=i(f).replace(t.htmlCtrlEntityRegex,"").replace(t.ctrlCharactersRegex,"").replace(t.whitespaceEscapeCharsRegex,"").trim(),f=s(f),u=f.match(t.ctrlCharactersRegex)||f.match(t.htmlEntitiesRegex)||f.match(t.htmlCtrlEntityRegex)||f.match(t.whitespaceEscapeCharsRegex);while(u&&u.length>0);var p=f;if(!p)return t.BLANK_URL;if(r(p))return p;var b=p.trimStart(),w=b.match(t.urlSchemeRegex);if(!w)return p;var v=w[0].toLowerCase().trim();if(t.invalidProtocolRegex.test(v))return t.BLANK_URL;var m=b.replace(/\\/g,"/");if(v==="mailto:"||v.includes("://"))return m;if(v==="http:"||v==="https:"){if(!a(m))return t.BLANK_URL;var E=new URL(m);return E.protocol=E.protocol.toLowerCase(),E.hostname=E.hostname.toLowerCase(),E.toString()}return m}})),y3=wn(((e,t)=>{(function(r,i){typeof define=="function"&&define.amd?define([],i):typeof e<"u"?i():(i(),r.FileSaver={})})(e,function(){"use strict";function r(f,p){return typeof p>"u"?p={autoBom:!1}:typeof p!="object"&&(console.warn("Deprecated: Expected third argument to be a object"),p={autoBom:!p}),p.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(f.type)?new Blob(["\uFEFF",f],{type:f.type}):f}function i(f,p,b){var w=new XMLHttpRequest;w.open("GET",f),w.responseType="blob",w.onload=function(){u(w.response,p,b)},w.onerror=function(){console.error("could not download file")},w.send()}function a(f){var p=new XMLHttpRequest;p.open("HEAD",f,!1);try{p.send()}catch{}return 200<=p.status&&299>=p.status}function s(f){try{f.dispatchEvent(new MouseEvent("click"))}catch{var p=document.createEvent("MouseEvents");p.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),f.dispatchEvent(p)}}var l=typeof window=="object"&&window.window===window?window:typeof self=="object"&&self.self===self?self:typeof global=="object"&&global.global===global?global:void 0,h=l.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),u=l.saveAs||(typeof window!="object"||window!==l?function(){}:"download"in HTMLAnchorElement.prototype&&!h?function(f,p,b){var w=l.URL||l.webkitURL,v=document.createElement("a");p=p||f.name||"download",v.download=p,v.rel="noopener",typeof f=="string"?(v.href=f,v.origin===location.origin?s(v):a(v.href)?i(f,p,b):s(v,v.target="_blank")):(v.href=w.createObjectURL(f),setTimeout(function(){w.revokeObjectURL(v.href)},4e4),setTimeout(function(){s(v)},0))}:"msSaveOrOpenBlob"in navigator?function(f,p,b){if(p=p||f.name||"download",typeof f!="string")navigator.msSaveOrOpenBlob(r(f,b),p);else if(a(f))i(f,p,b);else{var w=document.createElement("a");w.href=f,w.target="_blank",setTimeout(function(){s(w)})}}:function(f,p,b,w){if(w=w||open("","_blank"),w&&(w.document.title=w.document.body.innerText="downloading..."),typeof f=="string")return i(f,p,b);var v=f.type==="application/octet-stream",m=/constructor/i.test(l.HTMLElement)||l.safari,E=/CriOS\/[\d]+/.test(navigator.userAgent);if((E||v&&m||h)&&typeof FileReader<"u"){var y=new FileReader;y.onloadend=function(){var T=y.result;T=E?T:T.replace(/^data:[^;]*;/,"data:attachment/file;"),w?w.location.href=T:location=T,w=null},y.readAsDataURL(f)}else{var S=l.URL||l.webkitURL,x=S.createObjectURL(f);w?w.location=x:location.href=x,w=null,setTimeout(function(){S.revokeObjectURL(x)},4e4)}});l.saveAs=u.saveAs=u,typeof t<"u"&&(t.exports=u)})})),z0=_3(),k3=y3();function E3(e){switch(e){case"image/jpeg":return"jpg";case"image/png":return"png";case"image/webp":return"webp";case"image/gif":return"gif";case"image/bmp":return"bmp";default:return"png"}}async function A3(e){if(!e.src)return null;try{const t=await fetch(e.src);if(t.ok)return Ee(`Got blob for page ${e.src} from fetch`),await t.blob()}catch(t){Ee(`Failed to get blob for page ${e.src} from fetch`,t)}return typeof GM_xmlhttpRequest<"u"?new Promise(t=>{GM_xmlhttpRequest({method:"GET",url:e.src,responseType:"blob",onload:r=>{r.status===200?(Ee(`Got blob for page ${e.src} from GM_xmlhttpRequest`),t(r.response)):(Ee(`Failed to get blob for page ${e.src} from GM_xmlhttpRequest`,r.statusText),t(null))},onerror:r=>{Ee(`Failed to get blob for page ${e.src} from GM_xmlhttpRequest`,r),t(null)}})}):null}async function S3(e){const t=e.ref?.value;if(!t)return null;try{const r=document.createElement("canvas"),i=r.getContext("2d");if(i)return r.width=t.naturalWidth,r.height=t.naturalHeight,i.drawImage(t,0,0),await new Promise(a=>{r.toBlob(s=>{s&&Ee(`Got blob for page ${e.src} from canvas`),a(s)},"image/png",1)})}catch(r){Ee(`Failed to get blob for page ${e.src} from canvas`,r)}return null}async function M3(e){if(e.blob)return Ee(`Got blob for page ${e.src} from cache`),e.blob;const t=await A3(e)||await S3(e);return t||Ee(`Failed to get blob for page ${e.src}`),t}async function x3(){Pe("download","working");const e=new Pu.default,t=pe("images")??{},r=pe("manga"),i=r?.pages??0,a=Math.floor(Math.log10(i||1))+1,s=Me.default.sortBy(Me.default.entries(t),([f])=>Number(f)),l=[],h=f=>{Pe("dialog",{open:!0,title:q("BUTTON_DOWNLOAD"),content:ue`
        <div style='display: flex; flex-direction: column; gap: 10px;'>
          <p>${q("DOWNLOAD_PROGRESS").replace("##num##",f.toString()).replace("##total##",i.toString())}</p>
          <progress value='${f}' max='${i}' style='width: 100%; height: 20px;'></progress>
        </div>
      `,footer:ue`
        <mov-button @click=${()=>Pe("download","cancelled")}>
          ${q("CANCEL")}
        </mov-button>
      `})};h(0);let u=0;for(const[f,p]of s){if(pe("download")==="cancelled"){Ee("Download cancelled"),Pe("dialog",null),Pe("download",void 0);return}try{const b=await M3(p);if(b){const w=E3(b.type),v=`Page-${Number(f).toString().padStart(a,"0")}.${w}`;Ee(`${v} Added to Zip from Blob`),e.file(v,b,{createFolders:!0,compression:"DEFLATE"})}else l.push(p.src??f)}catch(b){Ee(`Error processing page ${f}`,b),l.push(p.src??f)}finally{u+=1,h(u)}}Pe("dialog",{open:!0,title:q("BUTTON_DOWNLOAD"),content:ue`
      <div style='display: flex; flex-direction: column; gap: 10px;'>
        <p>${q("GENERATING_ZIP")}</p>
        <progress style='width: 100%; height: 20px;'></progress>
      </div>
    `,footer:ue``}),l.length>0&&(Ee("Some images failed to download:",l),e.file("failed_pages.txt",l.join(`
`))),Ee("Generating Zip"),e.generateAsync({type:"blob"}).then(f=>{Ee("Download Ready"),(0,k3.saveAs)(f,`${r?.title??document.title}.zip`,{autoBom:!1}),l.length>0?Pe("dialog",{open:!0,title:q("DOWNLOAD_INCOMPLETE"),icon:"warning",content:ue`<p>${q("DOWNLOAD_INCOMPLETE_MESSAGE")}</p>`,footer:ue`<mov-button @click=${()=>Pe("dialog",null)}>
            ${q("CLOSE")}
          </mov-button>`}):Pe("dialog",null)}).catch(f=>{Ee("Error generating zip",f),Pe("dialog",{open:!0,title:q("WARNING"),icon:"error",content:ue`<p>Error generating zip: ${f.message}</p>`,footer:ue`<mov-button @click=${()=>Pe("dialog",null)}>
          ${q("CLOSE")}
        </mov-button>`})}).finally(()=>{Pe("download",void 0)})}function B0(){pe("download")!=="working"&&(Ee("Downloading Chapter"),x3().catch(e=>Ee("Error downloading chapter",e)))}function I3(){Qo("hidePageControls",e=>!e)}function pi(e){const t=e.target,r=t.getAttribute("value")??t.getAttribute("href");e.button!==1&&!e.ctrlKey&&(r&&r!=="#"?window.location.href=(0,z0.sanitizeUrl)(r):t.id==="series"&&window.history.back())}function C3(e){if(e)if(Y("viewMode").startsWith("Fluid")){const t=pe("chapter").value;if(t){const r=e.getBoundingClientRect(),i=t.getBoundingClientRect();t.scrollBy({left:r.left-i.left,top:r.top-i.top,behavior:"instant"})}}else{const t=e.getBoundingClientRect();window.scrollTo({top:t.top+window.scrollY,left:t.left+window.scrollX,behavior:"instant"})}}Yt.listen((e,t,r)=>{r==="scrollToPage"&&e.scrollToPage!==void 0&&(e.scrollToPage<=0?window.scrollTo(0,0):C3(pe("images")?.[e.scrollToPage]?.ref?.value),setTimeout(()=>Pe("scrollToPage",void 0),10))});function O3(e){const t=e.currentTarget.value;Pe("scrollToPage",parseInt(t,10))}function T3(e){Pe("scrollToPage",e)}var Cl=typeof navigator<"u"?navigator.userAgent.toLowerCase().indexOf("firefox")>0:!1;function Ol(e,t,r,i){e.addEventListener?e.addEventListener(t,r,i):e.attachEvent&&e.attachEvent(`on${t}`,r)}function gi(e,t,r,i){e&&(e.removeEventListener?e.removeEventListener(t,r,i):e.detachEvent&&e.detachEvent(`on${t}`,r))}function N0(e,t){const r=t.slice(0,t.length-1),i=[];for(let a=0;a<r.length;a++)i.push(e[r[a].toLowerCase()]);return i}function F0(e){typeof e!="string"&&(e=""),e=e.replace(/\s/g,"");const t=e.split(",");let r=t.lastIndexOf("");for(;r>=0;)t[r-1]+=",",t.splice(r,1),r=t.lastIndexOf("");return t}function L3(e,t){const r=e.length>=t.length?e:t,i=e.length>=t.length?t:e;let a=!0;for(let s=0;s<r.length;s++)i.indexOf(r[s])===-1&&(a=!1);return a}function H0(e){let t=e.keyCode||e.which||e.charCode;return e.code&&/^Key[A-Z]$/.test(e.code)&&(t=e.code.charCodeAt(3)),t}var mi={backspace:8,"⌫":8,tab:9,clear:12,enter:13,"↩":13,return:13,esc:27,escape:27,space:32,left:37,up:38,right:39,down:40,arrowup:38,arrowdown:40,arrowleft:37,arrowright:39,del:46,delete:46,ins:45,insert:45,home:36,end:35,pageup:33,pagedown:34,capslock:20,num_0:96,num_1:97,num_2:98,num_3:99,num_4:100,num_5:101,num_6:102,num_7:103,num_8:104,num_9:105,num_multiply:106,num_add:107,num_enter:108,num_subtract:109,num_decimal:110,num_divide:111,"⇪":20,",":188,".":190,"/":191,"`":192,"-":Cl?173:189,"=":Cl?61:187,";":Cl?59:186,"'":222,"{":219,"}":221,"[":219,"]":221,"\\":220},An={"⇧":16,shift:16,"⌥":18,alt:18,option:18,"⌃":17,ctrl:17,control:17,"⌘":91,cmd:91,meta:91,command:91},vi={16:"shiftKey",18:"altKey",17:"ctrlKey",91:"metaKey",shiftKey:16,ctrlKey:17,altKey:18,metaKey:91},xt={16:!1,18:!1,17:!1,91:!1},ft={};for(let e=1;e<20;e++)mi[`f${e}`]=111+e;var at=[],bi=null,Eo=null,G0="all",Jn=new Map,Ao=e=>mi[e.toLowerCase()]||An[e.toLowerCase()]||e.toUpperCase().charCodeAt(0),R3=e=>Object.keys(mi).find(t=>mi[t]===e),P3=e=>Object.keys(An).find(t=>An[t]===e),W0=e=>{G0=e||"all"},wi=()=>G0||"all",$3=()=>at.slice(0),D3=()=>at.map(e=>R3(e)||P3(e)||String.fromCharCode(e)),z3=()=>{const e=[];return Object.keys(ft).forEach(t=>{ft[t].forEach(({key:r,scope:i,mods:a,shortcut:s})=>{e.push({scope:i,shortcut:s,mods:a,keys:r.split("+").map(l=>Ao(l))})})}),e},U0=e=>{const t=e.target||e.srcElement,{tagName:r}=t;let i=!0;const a=r==="INPUT"&&!["checkbox","radio","range","button","file","reset","submit","color"].includes(t.type);return(t.isContentEditable||(a||r==="TEXTAREA"||r==="SELECT")&&!t.readOnly)&&(i=!1),i},B3=e=>(typeof e=="string"&&(e=Ao(e)),at.indexOf(e)!==-1),N3=(e,t)=>{let r,i;e||(e=wi());for(const a in ft)if(Object.prototype.hasOwnProperty.call(ft,a))for(r=ft[a],i=0;i<r.length;)r[i].scope===e?r.splice(i,1).forEach(({element:s})=>Tl(s)):i++;wi()===e&&W0(t||"all")};function F3(e){let t=H0(e);e.key&&e.key.toLowerCase()==="capslock"&&(t=Ao(e.key));const r=at.indexOf(t);if(r>=0&&at.splice(r,1),e.key&&e.key.toLowerCase()==="meta"&&at.splice(0,at.length),(t===93||t===224)&&(t=91),t in xt){xt[t]=!1;for(const i in An)An[i]===t&&(Sn[i]=!1)}}var V0=(e,...t)=>{if(typeof e>"u")Object.keys(ft).forEach(r=>{Array.isArray(ft[r])&&ft[r].forEach(i=>Sa(i)),delete ft[r]}),Tl(null);else if(Array.isArray(e))e.forEach(r=>{r.key&&Sa(r)});else if(typeof e=="object")e.key&&Sa(e);else if(typeof e=="string"){let[r,i]=t;typeof r=="function"&&(i=r,r=""),Sa({key:e,scope:r,method:i,splitKey:"+"})}},Sa=({key:e,scope:t,method:r,splitKey:i="+"})=>{F0(e).forEach(a=>{const s=a.split(i),l=s.length,h=s[l-1],u=h==="*"?"*":Ao(h);if(!ft[u])return;t||(t=wi());const f=l>1?N0(An,s):[],p=[];ft[u]=ft[u].filter(b=>{const w=(r?b.method===r:!0)&&b.scope===t&&L3(b.mods,f);return w&&p.push(b.element),!w}),p.forEach(b=>Tl(b))})};function Z0(e,t,r,i){if(t.element!==i)return;let a;if(t.scope===r||t.scope==="all"){a=t.mods.length>0;for(const s in xt)Object.prototype.hasOwnProperty.call(xt,s)&&(!xt[s]&&t.mods.indexOf(+s)>-1||xt[s]&&t.mods.indexOf(+s)===-1)&&(a=!1);(t.mods.length===0&&!xt[16]&&!xt[18]&&!xt[17]&&!xt[91]||a||t.shortcut==="*")&&(t.keys=[],t.keys=t.keys.concat(at),t.method(e,t)===!1&&(e.preventDefault?e.preventDefault():e.returnValue=!1,e.stopPropagation&&e.stopPropagation(),e.cancelBubble&&(e.cancelBubble=!0)))}}function q0(e,t){const r=ft["*"];let i=H0(e);if(e.key&&e.key.toLowerCase()==="capslock"||!(Sn.filter||U0).call(this,e))return;if((i===93||i===224)&&(i=91),at.indexOf(i)===-1&&i!==229&&at.push(i),["metaKey","ctrlKey","altKey","shiftKey"].forEach(h=>{const u=vi[h];e[h]&&at.indexOf(u)===-1?at.push(u):!e[h]&&at.indexOf(u)>-1?at.splice(at.indexOf(u),1):h==="metaKey"&&e[h]&&(at=at.filter(f=>f in vi||f===i))}),i in xt){xt[i]=!0;for(const h in An)Object.prototype.hasOwnProperty.call(An,h)&&(Sn[h]=e[vi[An[h]]]);if(!r)return}for(const h in xt)Object.prototype.hasOwnProperty.call(xt,h)&&(xt[h]=e[vi[h]]);e.getModifierState&&!(e.altKey&&!e.ctrlKey)&&e.getModifierState("AltGraph")&&(at.indexOf(17)===-1&&at.push(17),at.indexOf(18)===-1&&at.push(18),xt[17]=!0,xt[18]=!0);const a=wi();if(r)for(let h=0;h<r.length;h++)r[h].scope===a&&(e.type==="keydown"&&r[h].keydown||e.type==="keyup"&&r[h].keyup)&&Z0(e,r[h],a,t);if(!(i in ft))return;const s=ft[i],l=s.length;for(let h=0;h<l;h++)if((e.type==="keydown"&&s[h].keydown||e.type==="keyup"&&s[h].keyup)&&s[h].key){const u=s[h],{splitKey:f}=u,p=u.key.split(f),b=[];for(let w=0;w<p.length;w++)b.push(Ao(p[w]));b.sort().join("")===at.sort().join("")&&Z0(e,u,a,t)}}var Sn=function e(t,r,i){at=[];const a=F0(t);let s=[],l="all",h=document,u=0,f=!1,p=!0,b="+",w=!1,v=!1;if(i===void 0&&typeof r=="function"&&(i=r),Object.prototype.toString.call(r)==="[object Object]"){const m=r;m.scope&&(l=m.scope),m.element&&(h=m.element),m.keyup&&(f=m.keyup),m.keydown!==void 0&&(p=m.keydown),m.capture!==void 0&&(w=m.capture),typeof m.splitKey=="string"&&(b=m.splitKey),m.single===!0&&(v=!0)}for(typeof r=="string"&&(l=r),v&&V0(t,l);u<a.length;u++){const m=a[u].split(b);s=[],m.length>1&&(s=N0(An,m));let E=m[m.length-1];E=E==="*"?"*":Ao(E),E in ft||(ft[E]=[]),ft[E].push({keyup:f,keydown:p,scope:l,mods:s,shortcut:a[u],method:i,key:a[u],splitKey:b,element:h})}if(typeof h<"u"&&typeof window<"u"){if(!Jn.has(h)){const m=(y=window.event)=>q0(y,h),E=(y=window.event)=>{q0(y,h),F3(y)};Jn.set(h,{keydownListener:m,keyupListenr:E,capture:w}),Ol(h,"keydown",m,w),Ol(h,"keyup",E,w)}if(!bi){const m=()=>{at=[]};bi={listener:m,capture:w},Ol(window,"focus",m,w)}if(!Eo&&typeof document<"u"){const m=()=>{at=[];for(const S in xt)xt[S]=!1;for(const S in An)e[S]=!1},E=m,y=m;document.addEventListener("fullscreenchange",E),document.addEventListener("webkitfullscreenchange",y),Eo={fullscreen:E,webkit:y}}}};function H3(e,t="all"){Object.keys(ft).forEach(r=>{ft[r].filter(i=>i.scope===t&&i.shortcut===e).forEach(i=>{i&&i.method&&i.method({},i)})})}function Tl(e){const t=Object.values(ft).flat();if(t.findIndex(({element:r})=>r===e)<0&&e){const{keydownListener:r,keyupListenr:i,capture:a}=Jn.get(e)||{};r&&i&&(gi(e,"keyup",i,a),gi(e,"keydown",r,a),Jn.delete(e))}if(t.length<=0||Jn.size<=0){if(Array.from(Jn.keys()).forEach(r=>{const{keydownListener:i,keyupListenr:a,capture:s}=Jn.get(r)||{};i&&a&&(gi(r,"keyup",a,s),gi(r,"keydown",i,s),Jn.delete(r))}),Jn.clear(),Object.keys(ft).forEach(r=>delete ft[r]),bi){const{listener:r,capture:i}=bi;gi(window,"focus",r,i),bi=null}Eo&&typeof document<"u"&&(document.removeEventListener("fullscreenchange",Eo.fullscreen),document.removeEventListener("webkitfullscreenchange",Eo.webkit),Eo=null)}}var Ll={getPressedKeyString:D3,setScope:W0,getScope:wi,deleteScope:N3,getPressedKeyCodes:$3,getAllKeyCodes:z3,isPressed:B3,filter:U0,trigger:H3,unbind:V0,keyMap:mi,modifier:An,modifierMap:vi};for(const e in Ll){const t=e;Object.prototype.hasOwnProperty.call(Ll,t)&&(Sn[t]=Ll[t])}if(typeof window<"u"){const e=window.hotkeys;Sn.noConflict=t=>(t&&window.hotkeys===Sn&&(window.hotkeys=e),Sn),window.hotkeys=Sn}typeof module<"u"&&module.exports&&(module.exports=Sn,module.exports.default=Sn);function j0(){const e=pe("chapter").value;if(Y("viewMode").startsWith("Fluid")){const t=Y("viewMode")==="FluidRTL"?-1:1;e?.scrollBy({top:0,left:Y("scrollHeight")*t,behavior:"smooth"}),e&&e.scrollLeft+e.clientWidth>=e.scrollWidth-2&&(Pe("autoScroll",!1),Ee("Finished auto scroll"))}else window.scrollBy({top:Y("scrollHeight"),left:0,behavior:"smooth"}),window.scrollY+window.innerHeight>=document.documentElement.scrollHeight&&(Pe("autoScroll",!1),Ee("Finished auto scroll"));pe("autoScroll")&&requestAnimationFrame(j0)}function Ma(){pe("autoScroll")?(Pe("autoScroll",!1),Ee("Stopped auto scroll")):(Pe("autoScroll",!0),requestAnimationFrame(j0),Ee("Start auto scroll"))}var xa=!1,G3=Me.default.debounce(()=>{Ma(),xa=!1},500);function W3(){!xa&&pe("autoScroll")&&(Ma(),xa=!0),xa&&!pe("autoScroll")&&G3()}function U3(){window.addEventListener("wheel",Me.default.throttle(W3,500))}function V3(e,t){const r=document.createElement("style");return r.id=e,r.appendChild(document.createTextNode(t)),r}function Z3(e,t){document.querySelector(`#${e}`)||(document.head??document.querySelector("head")).appendChild(V3(e,t))}function q3(e){document.querySelectorAll(`style[id="${e}"]`).forEach(t=>{t.remove()})}function j3(e,t){q3(e),Z3(e,t)}function K3(e,t){return co`
    <style id="${e}">
      ${t}
    </style>
  `}var Un=class extends et{constructor(...t){super(...t),this.open=!1,this.mode="dialog",this.fullscreen=!1,this.label="",this.withoutHeader=!1,this.lightDismiss=!0}static{this.styles=Ot`
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
  `}close(){this.open=!1}handleCancel(t){t.preventDefault(),this.close()}handleBackdropClick(){this.mode!=="inline"&&this.lightDismiss&&this.close()}handleClick(t){this.mode!=="inline"&&this.lightDismiss&&t.target===this.dialog&&this.close()}updated(t){this.mode!=="inline"&&t.has("open")&&(this.open?(this.dialog.classList.remove("closing"),this.dialog.show(),this.dispatchEvent(new CustomEvent("open",{bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent("wa-show",{bubbles:!0,composed:!0})),setTimeout(()=>{this.dispatchEvent(new CustomEvent("wa-after-show",{bubbles:!0,composed:!0}))},150)):t.get("open")===!0&&(this.dispatchEvent(new CustomEvent("close",{bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent("wa-hide",{bubbles:!0,composed:!0})),this.dialog.classList.add("closing"),setTimeout(()=>{this.dialog.classList.remove("closing"),this.dialog.open&&this.dialog.close(),this.dispatchEvent(new CustomEvent("wa-after-hide",{bubbles:!0,composed:!0}))},300)))}render(){return ue`
      <div
        class="backdrop"
        @click=${this.handleBackdropClick}
      ></div>
      <dialog
        part="dialog"
        @cancel=${this.handleCancel}
        @click=${this.handleClick}
      >
        ${this.withoutHeader?"":ue`
          <div
            class="header-bar"
            part="header-bar"
          >
            <div class="action-item">
              <slot name="header-actions"></slot>
            </div>
            <div class="header-content" part="title">
              <slot name="label">${this.label}</slot>
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
                ${Il}
              </button>
            </div>
          </div>
        `}
        <div class="content-slot" part="body">
          ${this.icon?ue`
                <div class="icon-container">
                  <mov-icon
                    .name=${Y3(this.icon)}
                    size="4rem"
                  ></mov-icon>
                </div>
              `:""}
          <slot></slot>
        </div>
        <slot name="footer" part="footer"></slot>
      </dialog>
    `}};G([oe({type:Boolean,reflect:!0})],Un.prototype,"open",void 0),G([oe({type:String,reflect:!0})],Un.prototype,"mode",void 0),G([oe({type:Boolean,reflect:!0})],Un.prototype,"fullscreen",void 0),G([oe({type:String,reflect:!0})],Un.prototype,"label",void 0),G([oe({type:Boolean,reflect:!0,attribute:"without-header"})],Un.prototype,"withoutHeader",void 0),G([oe({type:Boolean,reflect:!0,attribute:"light-dismiss"})],Un.prototype,"lightDismiss",void 0),G([oe({type:String,reflect:!0})],Un.prototype,"icon",void 0),G([Ur("dialog")],Un.prototype,"dialog",void 0),Un=G([ht("mov-dialog")],Un);function Rl(e){const t=()=>Pe("dialog",null);e.timer&&setTimeout(t,e.timer),Pe("dialog",{open:!0,icon:e.icon,title:e.title,content:ue`<div style="padding: 1rem;">${T0(e.html)}</div>`,footer:ue`
      <div
        slot="footer"
        style="display: flex; justify-content: flex-end; padding: 0.5rem 1rem 1rem;"
      >
        <mov-button @click=${t}>OK</mov-button>
      </div>
    `})}function Y3(e){switch(e){case"info":return"info-circle";case"warning":return"alert-circle";case"success":return"circle-check";case"error":return"circle-x";case"question":return"help";default:return""}}function X3(e){const t=e.currentTarget.value;Ru(t==="true")}function J3(e){const t=e.currentTarget.value;wt("locale",t)}function Q3(e){const t=e.currentTarget.value;wt("loadMode",t)}function e6(e){const t=e.detail.checked;wt("fitWidthIfOversize",t)}function t6(e){const t=e.currentTarget.value;wt("navbar",t)}function n6(e){const t=e.currentTarget.value;wt("pagination",t)}function r6(e){const t=e.detail.checked;wt("downloadZip",t),t&&Rl({title:q("ATTENTION"),html:q("AUTO_DOWNLOAD"),timer:1e4,icon:"info"})}function o6(e){const t=e.detail.checked;wt("lazyLoadImages",t),t&&Rl({title:q("WARNING"),html:q("LAZY_LOAD"),icon:"warning"})}function i6(e){const t=e.currentTarget.value;wt("lazyStart",parseInt(t,10))}function a6(e){const t=e.currentTarget.value;wt("loadSpeed",t),["Extreme","All"].includes(t)&&Rl({title:q("SPEED_WARNING"),html:q("SPEED_WARNING_MESSAGE"),icon:"warning"})}function s6(e){const t=e.currentTarget.value;wt("zoomStep",parseInt(t,10))}function l6(e){const t=e.currentTarget.value;j3("MinZoom",`#MangaOnlineViewer .PageContent .PageImg {min-width: ${t}vw;}`),wt("minZoom",parseInt(t,10))}function c6(e){const t=e.detail.checked;wt("hidePageControls",t)}function u6(e){const t=e.currentTarget.value;wt("header",t)}function d6(e){const{value:t}=e.currentTarget;wt("scrollHeight",parseInt(t,10))}function K0(e){Qo("scrollHeight",t=>{const r=t+e*25;if(r<=0)return 0;const i=Math.ceil(window.innerHeight/200)*100;return r>=i?i:r})}function h6(){const e=Y("navbar");return e==="left"||e==="right"?window.innerWidth-34:window.innerWidth}function f6(){return Y("navbar")==="bottom"?window.innerHeight-34:window.innerHeight}function Y0(e,t=Y("zoomMode"),r=Y("zoomValue")){const i=h6(),a=f6();if(t==="width")e.width=i,e.height=void 0;else if(t==="height")e.width=void 0,e.height=a;else if(t==="percent"){const s=e.naturalWidth??e.ref?.value?.naturalWidth;e.width=s?s*(r/100):void 0,e.height=void 0}return e}function Zr(e=Y("zoomMode"),t=Y("zoomValue")){Ee("Zoom",e,t),so("zoomMode",e),so("zoomValue",t),e==="height"?Pe("scrollToPage",pe("currentPage")):Fr("header");const r=pe("images"),i=pe("manga"),a={};for(let s=i?.begin??1;s<=(i?.pages??1);s++)a[s]=Y0({...r?.[s]},e,t);Pe("images",a)}function So(e,t=Y("zoomValue")){return()=>{Zr(e,t)}}function Ia(e=1){return()=>{const t=Y("zoomValue")+e*Y("zoomStep");t>0&&t<500&&Zr("percent",t)}}function p6(e){const t=e.currentTarget.value;wt("zoomMode",t)}function g6(e){const t=parseInt(e.currentTarget.value,10);wt("zoomValue",t),Zr("percent",t)}function m6(e){Zr("percent",parseInt(e.currentTarget.value,10))}function fn(e){return()=>{so("viewMode",e),e.startsWith("Fluid")?(so("zoomMode","height"),so("header","click")):(Fr("zoomMode"),Fr("zoomValue"),Fr("header")),Zr()}}function v6(e){const t=e.currentTarget.value;wt("viewMode",t),fn(t)()}function b6(e){const t=Y("viewMode")==="FluidRTL"?-1:1;pe("chapter").value?.scrollBy({left:.8*window.innerWidth*e*t,behavior:"smooth"})}function w6(e){const t=pe("currentPage")+e;t<0?Pe("scrollToPage",0):t>(pe("manga")?.pages??1)||Pe("scrollToPage",t)}function _6(e){window.scrollBy({top:.8*window.innerHeight*e,behavior:"smooth"})}function y6(e){const t=pe("currentPage"),r=pe("manga");if(!r)return;const i=pe("images")??{},a=r.begin??1,s=r.pages??1,l=u=>{if(u<a||u>s)return!1;if(i[u]?.doublePage)return!0;let f=0;for(let p=u-1;p>=a&&!i[p]?.doublePage;p--)f++;return f%2===0};let h;if(e===1)for(h=t+1;h<=s&&!l(h);)h++;else if(l(t))for(h=t-1;h>a&&!l(h);)h--;else for(h=t;h>a&&!l(h);)h--;h<a?Pe("scrollToPage",0):h>s?Pe("scrollToPage",s):Pe("scrollToPage",h)}function X0(e){const t=Y("viewMode"),r=Y("zoomMode");Ee("Scrolling view",t,"zoom",r,"sign",e),t.match(/^(Book|Manga)$/)&&r==="height"?y6(e):t.startsWith("Fluid")?b6(e):r==="height"?w6(e):_6(e)}function _i(e){const t=pe("manga")?.[e];t&&t!=="#"?location.href=(0,z0.sanitizeUrl)(t):e!=="next"&&history.back()}var k6={SCROLL_UP(){X0(-1)},SCROLL_DOWN(){X0(1)},NEXT_CHAPTER(){_i("next")},PREVIOUS_CHAPTER(){_i("prev")},RETURN_CHAPTER_LIST(){_i("series")},ENLARGE(){Ia(1)()},REDUCE(){Ia(-1)()},RESTORE(){So("percent",100)()},FIT_WIDTH(){So("width")()},FIT_HEIGHT(){So("height")()},SETTINGS(){Lu("panel",e=>e==="none"?"settings":"none")},VIEW_MODE_WEBCOMIC(){fn("WebComic")()},VIEW_MODE_VERTICAL(){fn("Vertical")()},VIEW_MODE_LEFT(){fn("FluidRTL")()},VIEW_MODE_RIGHT(){fn("FluidLTR")()},VIEW_MODE_GALLERY(){fn("Gallery")()},SCROLL_START(){Ma()},INCREASE_SPEED(){K0(1)},DECREASE_SPEED(){K0(-1)}};function J0(){document.onkeydown=null,document.onkeyup=null,window.onkeydown=null,window.onkeyup=null,window.onload=null,document.body.onload=null,Sn.unbind(),Me.default.keys(Y("keybinds")).forEach(e=>{Sn(Y("keybinds")[e]?.join(",")??"",Me.default.throttle(t=>{t.preventDefault(),t.stopImmediatePropagation(),t.stopPropagation(),k6[e]()},100))})}var wr=class extends et{constructor(...t){super(...t),this.mode="disabled",this.currentPage=1,this.totalPages=1,this.startPage=1}static{this.styles=Ot`
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
  `}get isFirstPage(){return this.currentPage<=this.startPage}get isLastPage(){return this.currentPage>=this.totalPages-(1-this.startPage)}renderSlider(){return ue`
      <div class="slider-pagination">
        <button
          class="pagination-button"
          @click=${pi}
          value="${this.prev}"
          ?disabled=${yn(this.prev)||this.prev==="#"}
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
            @input="${O3}"
          />
          <div class="slider-tooltip">${this.currentPage} / ${this.totalPages}</div>
        </div>

        <button class="pagination-button" @click=${this.goToNextPage} ?disabled=${this.isLastPage}>
          <mov-icon name="chevron-right"></mov-icon>
          <div class="tooltip">Next Page</div>
        </button>

        <button
          class="pagination-button"
          @click=${pi}
          value="${this.next}"
          ?disabled=${yn(this.next)||this.next==="#"}
        >
          <mov-icon name="arrow-big-right"></mov-icon>
          <div class="tooltip">Next Chapter</div>
        </button>
      </div>
    `}renderSideArrows(){return ue`
      <div class="arrows-pagination">
        <button
          class="side-arrow left"
          @click=${this.handleLeftArrowClick}
          ?disabled=${this.isFirstPage&&(yn(this.prev)||this.prev==="#")}
        >
          <mov-icon name="chevron-left"></mov-icon>
        </button>
        <button
          class="side-arrow right"
          @click=${this.handleRightArrowClick}
          ?disabled=${this.isLastPage&&(yn(this.next)||this.next==="#")}
        >
          <mov-icon name="chevron-right"></mov-icon>
        </button>
      </div>
    `}render(){if(this.mode==="disabled")return Be;const t=this.mode==="slider"||this.mode==="both",r=this.mode==="side-arrows"||this.mode==="both";return ue`
      ${t?this.renderSlider():Be} ${r?this.renderSideArrows():Be}
    `}handleLeftArrowClick(){this.isFirstPage?_i("prev"):this.goToPreviousPage()}handleRightArrowClick(){this.isLastPage?_i("next"):this.goToNextPage()}goToPreviousPage(){this.goToPage(this.currentPage-1)}goToNextPage(){this.goToPage(this.currentPage+1)}goToPage(t){Pe("scrollToPage",t)}};G([oe({type:String})],wr.prototype,"mode",void 0),G([oe({type:Number})],wr.prototype,"currentPage",void 0),G([oe({type:Number})],wr.prototype,"totalPages",void 0),G([oe({type:Number})],wr.prototype,"startPage",void 0),G([oe({type:String})],wr.prototype,"next",void 0),G([oe({type:String})],wr.prototype,"prev",void 0),wr=G([ht("manga-pagination")],wr);var _r=class extends et{constructor(...t){super(...t),this.open=!1,this.placement="end",this.label="",this.withoutHeader=!1,this.lightDismiss=!0}static{this.styles=Ot`
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
    :host([placement='top']) dialog {
      top: 0;
      left: 0;
      width: 100%;
      height: auto;
      transform: translateY(-100%);
    }
    :host([placement='bottom']) dialog {
      bottom: 0;
      left: 0;
      width: 100%;
      height: auto;
      top: auto;
      transform: translateY(100%);
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
    .footer-slot {
      display: block;
      padding: 1rem;
      border-top: 1px solid var(--theme-border-color, #e0e0e0);
    }
  `}close(){this.open=!1}handleCancel(t){t.preventDefault(),this.close()}handleBackdropClick(){this.lightDismiss&&this.close()}handleClick(t){this.lightDismiss&&t.target===this.dialog&&this.close()}updated(t){t.has("open")&&(this.open?(this.dialog.classList.remove("closing"),this.dialog.show(),this.dispatchEvent(new CustomEvent("open",{bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent("wa-show",{bubbles:!0,composed:!0})),setTimeout(()=>{this.dispatchEvent(new CustomEvent("wa-after-show",{bubbles:!0,composed:!0}))},250)):t.get("open")===!0&&(this.dispatchEvent(new CustomEvent("close",{bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent("wa-hide",{bubbles:!0,composed:!0})),this.dialog.classList.add("closing"),setTimeout(()=>{this.dialog.classList.remove("closing"),this.dialog.open&&this.dialog.close(),this.dispatchEvent(new CustomEvent("wa-after-hide",{bubbles:!0,composed:!0}))},300)))}render(){return ue`
      <div
        class="backdrop"
        @click=${this.handleBackdropClick}
      ></div>
      <dialog
        part="dialog"
        @cancel=${this.handleCancel}
        @click=${this.handleClick}
      >
        ${this.withoutHeader?"":ue`
          <div
            class="header-bar"
            part="header-bar"
          >
            <div class="action-item">
              <slot name="header-actions"></slot>
            </div>
            <div class="header-content" part="title">
              <slot name="label">${this.label}</slot>
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
                ${Il}
              </button>
            </div>
          </div>
        `}
        <slot class="content-slot" part="body"></slot>
        <slot name="footer" class="footer-slot" part="footer"></slot>
      </dialog>
    `}};G([oe({type:Boolean,reflect:!0})],_r.prototype,"open",void 0),G([oe({type:String,reflect:!0})],_r.prototype,"placement",void 0),G([oe({type:String,reflect:!0})],_r.prototype,"label",void 0),G([oe({type:Boolean,reflect:!0,attribute:"without-header"})],_r.prototype,"withoutHeader",void 0),G([oe({type:Boolean,reflect:!0,attribute:"light-dismiss"})],_r.prototype,"lightDismiss",void 0),G([Ur("dialog")],_r.prototype,"dialog",void 0),_r=G([ht("mov-drawer")],_r);var qr=class extends et{static{this.styles=Ot`
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
  `}constructor(){super(),this.open=!1,this.checkable=!1,this.distance=0,this.skidding=0,this.placement="bottom-start",this.boundClickHandler=this.handleClickOutside.bind(this)}connectedCallback(){super.connectedCallback(),document.addEventListener("click",this.boundClickHandler)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("click",this.boundClickHandler)}handleClickOutside(t){this.open&&!t.composedPath().includes(this)&&this.hide()}show(){this.open||(this.open=!0,this.dispatchEvent(new CustomEvent("wa-show",{bubbles:!0,composed:!0})),setTimeout(()=>{this.dispatchEvent(new CustomEvent("wa-after-show",{bubbles:!0,composed:!0}))},150))}hide(){this.open&&(this.open=!1,this.dispatchEvent(new CustomEvent("wa-hide",{bubbles:!0,composed:!0})),setTimeout(()=>{this.dispatchEvent(new CustomEvent("wa-after-hide",{bubbles:!0,composed:!0}))},150))}toggle(){this.open?this.hide():this.show()}render(){return ue`
      <div
        @click=${this.toggle}
        class="trigger-wrapper"
        part="trigger"
      >
        <slot name="trigger"></slot>
      </div>
      <div
        class="dropdown-content"
        part="menu"
      >
        <slot></slot>
      </div>
    `}};G([oe({type:Boolean,reflect:!0})],qr.prototype,"open",void 0),G([oe({type:Boolean,reflect:!0})],qr.prototype,"checkable",void 0),G([oe({type:Number})],qr.prototype,"distance",void 0),G([oe({type:Number})],qr.prototype,"skidding",void 0),G([oe({type:String})],qr.prototype,"placement",void 0),qr=G([ht("mov-dropdown")],qr);var yr=class extends et{constructor(...t){super(...t),this.selected=!1,this.checked=!1,this.disabled=!1,this.value="",this.variant="default",this.type="normal"}static{this.styles=Ot`
    :host {
      display: block;
      min-width: max-content;
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
    :host([selected]) .item,
    :host([checked]) .item {
      background-color: var(--mov-color-fill-normal);
      color: var(--mov-color-on-normal);
    }
    :host([disabled]) .item {
      opacity: 0.5;
      cursor: not-allowed;
      pointer-events: none;
    }
    :host([variant='danger']) .item {
      color: var(--theme-color-danger, #dc3545);
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
    :host([selected]) .check-icon,
    :host([checked]) .check-icon {
      visibility: visible;
    }
    ::slotted([slot='details']) {
      font-size: 0.9em;
      opacity: 0.7;
    }
  `}handleSelect(){this.disabled||this.dispatchEvent(new CustomEvent("wa-select",{detail:{item:this},bubbles:!0,composed:!0}))}render(){return ue`
      <div
        class="item"
        @click=${this.handleSelect}
        part="base"
      >
        <div
          class="item-content"
          part="label"
        >
          <mov-icon
            class="check-icon"
            name="IconCheck"
            part="checkmark"
          ></mov-icon>
          <slot
            name="icon"
            part="icon"
          ></slot>
          <slot></slot>
        </div>
        <slot
          name="details"
          part="details"
        ></slot>
      </div>
    `}};G([oe({type:Boolean,reflect:!0})],yr.prototype,"selected",void 0),G([oe({type:Boolean,reflect:!0})],yr.prototype,"checked",void 0),G([oe({type:Boolean,reflect:!0})],yr.prototype,"disabled",void 0),G([oe({type:String})],yr.prototype,"value",void 0),G([oe({type:String,reflect:!0})],yr.prototype,"variant",void 0),G([oe({type:String,reflect:!0})],yr.prototype,"type",void 0),yr=G([ht("mov-dropdown-item")],yr);var Pl=class extends et{constructor(...t){super(...t),this.orientation="horizontal"}static{this.styles=Ot`
    :host {
      display: block;
    }
    :host([orientation='horizontal']) .divider {
      border-top: 1px solid var(--theme-border-color, #ccc);
      margin: 4px 0;
    }
    :host([orientation='vertical']) .divider {
      border-left: 1px solid var(--theme-border-color, #ccc);
      height: 100%;
      margin: 0 4px;
      display: inline-block;
    }
  `}render(){return ue`<div
      class="divider"
      role="separator"
    ></div>`}};G([oe({type:String,reflect:!0})],Pl.prototype,"orientation",void 0),Pl=G([ht("mov-divider")],Pl);var Q0="kbd,.key{white-space:nowrap;text-align:center;background-color:#505050;background-color:gradient(linear, left top, left bottom, from(#3c3c3c), to(#505050));color:#fafafa;text-shadow:-1px -1px #464646;cursor:default;user-select:none;border:none;border-radius:.3em;min-width:1em;padding:.3em .4em .2em .3em;font-family:Lucida Grande,Lucida,Arial,sans-serif;font-size:.85em;font-style:normal;line-height:1;text-decoration:none;display:inline-block;box-shadow:inset 0 0 1px #969696,inset 0 -.05em .4em #505050,0 .1em #1e1e1e,0 .1em .1em #0000004d}kbd[title],.key[title]{cursor:help}kbd.dark,.dark-keys kbd,.key.dark,.dark-keys .key{white-space:nowrap;text-align:center;background-color:#505050;background-color:gradient(linear, left top, left bottom, from(#3c3c3c), to(#505050));color:#fafafa;text-shadow:-1px -1px #464646;border:none;border-radius:.3em;min-width:1em;padding:.3em .4em .2em .3em;font-family:Lucida Grande,Lucida,Arial,sans-serif;font-style:normal;text-decoration:none;display:inline-block;box-shadow:inset 0 0 1px #969696,inset 0 -.05em .4em #505050,0 .1em #1e1e1e,0 .1em .1em #0000004d}kbd.light,.light-keys kbd,.key.light,.light-keys .key{white-space:nowrap;text-align:center;background-color:#fafafa;background-color:gradient(linear, left top, left bottom, from(#d2d2d2), to(#fff));color:#323232;text-shadow:0 0 2px #fff;border:none;border-radius:.3em;min-width:1em;padding:.3em .4em .2em .3em;font-family:Lucida Grande,Lucida,Arial,sans-serif;font-style:normal;text-decoration:none;display:inline-block;box-shadow:inset 0 0 1px #fff,inset 0 0 .4em #c8c8c8,0 .1em #828282,0 .11em #0006,0 .1em .11em #000000e6}kbd.so,.so-keys kbd,.key.so,.so-keys .key{white-space:nowrap;text-align:center;color:#242729;text-shadow:0 1px #fff;background-color:#e1e3e5;border:1px solid #adb3b9;border-radius:.272727em;min-width:1em;margin:0 .1em;padding:.1em .6em;font-family:Arial,Helvetica Neue,Helvetica,sans-serif;font-style:normal;line-height:1.4;text-decoration:none;display:inline-block;box-shadow:0 1px #0c0d0e33,inset 0 0 0 2px #fff}kbd.github,.github-keys kbd,.key.github,.github-keys .key{white-space:nowrap;text-align:center;color:#444d56;vertical-align:middle;box-sizing:border-box;min-width:1em;text-shadow:none;background-color:#fafbfc;border:1px solid #c6cbd1;border-bottom-color:#959da5;border-radius:.272727em;padding:.272727em .454545em;font-family:SFMono-Regular,Consolas,Liberation Mono,Menlo,Courier,monospace;font-size:68.75%;font-style:normal;line-height:.909091;text-decoration:none;display:inline-block;box-shadow:inset 0 -1px #959da5}",E6=wn((e=>{Object.defineProperty(e,"__esModule",{value:!0}),e.StoreController=void 0;var t=class{constructor(r,i){this.host=r,this.atom=i,r.addController(this)}hostConnected(){this.unsubscribe=this.atom.subscribe(()=>{this.host.requestUpdate()})}hostDisconnected(){var r;(r=this.unsubscribe)===null||r===void 0||r.call(this)}get value(){return this.atom.get()}};e.StoreController=t})),$l=wn((e=>{Object.defineProperty(e,"__esModule",{value:!0}),e.MultiStoreController=void 0;var t=class{constructor(r,i){this.host=r,this.atoms=i,r.addController(this)}hostConnected(){this.unsubscribes=this.atoms.map(r=>r.subscribe(()=>this.host.requestUpdate()))}hostDisconnected(){var r;(r=this.unsubscribes)===null||r===void 0||r.forEach(i=>i())}get values(){return this.atoms.map(r=>r.get())}};e.MultiStoreController=t})),A6=wn((e=>{Object.defineProperty(e,"__esModule",{value:!0}),e.useStores=void 0;var t=$l();function r(...i){return a=>class extends a{constructor(...s){super(...s),new t.MultiStoreController(this,i)}}}e.useStores=r})),S6=wn((e=>{Object.defineProperty(e,"__esModule",{value:!0}),e.withStores=void 0;var t=$l(),r=(i,a)=>class extends i{constructor(...l){super(...l),new t.MultiStoreController(this,a)}};e.withStores=r})),M6=wn((e=>{Object.defineProperty(e,"__esModule",{value:!0}),e.withStores=e.useStores=e.MultiStoreController=e.StoreController=void 0;var t=E6();Object.defineProperty(e,"StoreController",{enumerable:!0,get:function(){return t.StoreController}});var r=$l();Object.defineProperty(e,"MultiStoreController",{enumerable:!0,get:function(){return r.MultiStoreController}});var i=A6();Object.defineProperty(e,"useStores",{enumerable:!0,get:function(){return i.useStores}});var a=S6();Object.defineProperty(e,"withStores",{enumerable:!0,get:function(){return a.withStores}})})),Mo=M6(),Ca=49,x6=100,I6=class Jf{constructor(t){this.prevOffset=0,this.headroom="top",this.headerVisible=!0,this.handleScroll=Me.default.throttle(()=>{if(this.isAnyDropdownOpen()){this.prevOffset=window.scrollY;return}const i=Y("header"),{scrollY:a}=window;let s="none";Y("zoomMode")!=="height"&&a+window.innerHeight+x6>document.body.scrollHeight?s="end":a>this.prevOffset&&a>Ca?s="hide":i==="scroll"&&a<this.prevOffset&&a>Ca?s="show":i!=="click"&&a<=Ca&&(s="top");let l=!1;if(this.headroom!==s&&(this.headroom=s,l=!0),i==="scroll"){const h=s!=="hide";this.headerVisible!==h&&(this.headerVisible=h,l=!0)}l&&this.host.requestUpdate(),this.prevOffset=a},300),this.handleMouseMove=Me.default.throttle(i=>{if(this.isAnyDropdownOpen()){this.headerVisible||(this.headerVisible=!0,this.host.requestUpdate());return}if(["hover","scroll"].includes(Y("header"))){const a=Jf.isMouseInsideRegion(i,window.innerWidth,Ca*1.5);this.headerVisible!==a&&(this.headerVisible=a,this.host.requestUpdate())}},300),this.toggleHeaderVisibility=()=>{Y("header")==="click"&&(this.headerVisible=!this.headerVisible,this.host.requestUpdate())},this.host=t,t.addController(this);const r=Y("header");Y("zoomMode")==="height"&&["click","hover"].includes(r)&&(this.headerVisible=!1)}hostConnected(){window.addEventListener("scroll",this.handleScroll),window.addEventListener("mousemove",this.handleMouseMove)}hostDisconnected(){window.removeEventListener("scroll",this.handleScroll),window.removeEventListener("mousemove",this.handleMouseMove)}isAnyDropdownOpen(){if(!this.host.shadowRoot)return!1;const t=this.host.shadowRoot.querySelectorAll("mov-dropdown");for(const r of t)if(r.open)return!0;return!1}static isMouseInsideRegion(t,r,i){return t.clientX>=0&&t.clientX<=r&&t.clientY>=0&&t.clientY<=i}},C6=class{constructor(e){this.canvasContext=null,this.host=e,e.addController(this),this.canvasContext=document.createElement("canvas").getContext("2d"),this.resizeObserver=new ResizeObserver(()=>this.update())}hostConnected(){}hostDisconnected(){this.resizeObserver.disconnect()}observe(e,t){!e||!t||(this.element=e,this.text=t,this.resizeObserver.disconnect(),this.resizeObserver.observe(this.element),this.update())}update(){if(!this.element||!this.text||!this.canvasContext){this.value=this.text,this.host.requestUpdate();return}const e=window.getComputedStyle(this.element);this.canvasContext.font=`${e.fontWeight} ${e.fontSize} ${e.fontFamily}`;const t=this.text,r=this.element.clientWidth;if(this.canvasContext.measureText(t).width<=r){this.value=t,this.host.requestUpdate();return}const i="...",a=r-this.canvasContext.measureText(i).width;let s="",l="";for(let h=1;h<t.length;h++){const u=t.substring(0,h),f=t.substring(t.length-h);if(this.canvasContext.measureText(u).width+this.canvasContext.measureText(f).width>a)break;s=u,l=f}this.value=`${s}${i}${l}`,this.host.requestUpdate()}};function eh(e=window.location.href){yn(lo(e))||(Ee(`Bookmark Removed ${e}`),Qo("bookmarks",t=>[...t.filter(r=>r.url!==e)]))}function O6(e){const t=e.currentTarget.value;Ee(`Bookmark Removed ${t}`),Vo.error({title:q("BOOKMARK_REMOVED"),duration:1e4}),eh(t)}function T6(){Pe("panel","bookmarks")}function th(){const e=pe("currentPage"),t={name:pe("manga")?.title??document.documentElement.title??window.location.hostname,url:window.location.href,page:e,date:new Date().toISOString().slice(0,10)};lo(t.url)?(Qo("bookmarks",r=>[...r.filter(i=>i.url!==t.url)]),Vo.error({title:q("BOOKMARK_REMOVED"),duration:1e4})):(Qo("bookmarks",r=>[...r,t]),Vo.success({title:q("BOOKMARK_SAVED"),description:q("BOOKMARK_MESSAGE").replace("##num##",e.toString()),duration:1e4}))}function Dl(){Pe("panel","none")}function L6(){Pe("panel","settings")}function R6(){Pe("panel","keybindings")}function P6(e){const t={};Me.default.keys(e).forEach(r=>{const i=e[r].value;if(i){const a=i.value.split(",").map(s=>s.trim()).filter(s=>s!=="");t[r]=a.length>0?a:void 0}}),wt("keybinds",t),Pe("panel","keybindings"),J0()}function $6(){Pe("panel","keybindingsEditor")}var D6="#Header{background-color:var(--theme-background-color);z-index:900;flex-flow:row;justify-content:space-around;align-items:center;transition:transform .3s ease-in;display:flex;position:sticky;top:0;left:0;right:0;box-shadow:0 0 25px #00000080}#Header.click{padding-left:40px}@keyframes headroom{0%{transform:translateY(-100%)}to{transform:translateY(0%)}}#Header:not(.visible,.headroom-top,.fixed,.simple){animation:.3s ease-in reverse headroom;position:sticky;top:0;transform:translateY(-100%)}#Header.scroll.headroom-hide:not(.visible){animation:none;position:sticky;top:0;transform:translateY(-100%)}#Header.scroll.headroom-show,#Header.headroom-end,#Header.visible{animation:.3s ease-in headroom;position:sticky;top:0;transform:translateY(0%)}#Header.headroom-top{animation:none}#Header.fixed{animation:none;position:sticky;top:0;transform:translateY(0%)}#Header.simple{animation:none;position:static;top:0;transform:translateY(0%)}#menu{z-index:1;color:var(--theme-body-text-color);width:40px;height:40px;position:fixed}#menu:not(.click),#menu.hide{display:none}#menu.click{z-index:901;top:0;left:0}#MangaTitle{word-wrap:anywhere;white-space:nowrap;text-overflow:ellipsis;min-width:200px;max-width:40vw;margin:0;padding:2px;font-size:1.2rem;font-weight:400;overflow:hidden}#GlobalFunctions{z-index:100;flex-wrap:wrap;gap:3px;padding:3px 3px 3px 0;display:flex}#ZoomControl{flex-direction:column;align-items:center;gap:3px;padding:10px 5px;display:flex}",nh="#Header.mobile,#Header.tablet{flex-flow:wrap;display:flex}.mobile #ViewerTitle,.tablet #ViewerTitle{order:4;min-height:auto}.mobile #GlobalFunctions,.tablet #GlobalFunctions{order:2;width:auto;padding:5px}.mobile #GlobalFunctions span{flex-direction:column}.mobile #ZoomControl,.tablet #ZoomControl{order:3}.mobile #Toolbar,.tabler #Toolbar{order:1}#Header.mobile{flex-flow:wrap;justify-content:center;align-items:center}#Header.mobile.click+#Chapter:not(.webcomic,.vertical){position:sticky}.tablet #MangaTitle,.mobile #MangaTitle{max-width:90vw}.mobile #ViewerTitle{order:3;height:auto;margin-top:0;padding:0}.mobile #GlobalFunctions{order:2;gap:0;width:auto;padding:0}.mobile mov-button::part(base){border-radius:0}.mobile #FileDropdown mov-button:first-of-type::part(base){border-radius:5px 0 0 5px}.mobile #GlobalFunctions mov-button:last-of-type::part(base){border-radius:0 5px 5px 0}.mobile .PageFunctions{padding:0}.mobile .PageFunctions .PageButton.Bookmark{opacity:1}.mobile #GlobalFunctions #ZoomSlider,.tablet #GlobalFunctions #ZoomSlider,.mobile .PageFunctions .PageButton:not(.Bookmark),.tablet #Counters,.mobile #ZoomControl,.mobile #ZoomDropdown,.mobile #ViewDropdown,.mobile #FileDropdown :where(:nth-child(3),:nth-child(4)),.mobile #BookMode,.mobile #MangaMode,.tablet #BookMode,.tablet #MangaMode{display:none}",Oa=class extends et{static{this.styles=[Xt(D6),Xt(nh),Xt(Q0),Ot``]}constructor(){super(),this.headroomController=new I6(this),this.titleController=new C6(this)}updated(t){super.updated(t),t.has("manga")&&this.manga&&requestAnimationFrame(()=>{this.manga&&this.titleController.observe(this.mangaTitleElement,this.manga?.title??"Manga Online Viewer")})}render(){if(!this.manga)return ue``;const{headroom:t,headerVisible:r}=this.headroomController,i=Y("keybinds"),a=s=>{if(pe("device")!=="desktop")return Be;const l=i[s];return!l||l.length===0?Be:l.map(h=>ue`<kbd slot="details">${h}</kbd>`)};return ue`
      <mov-button
        id="menu"
        class="${Tt({[Y("header")]:!0,hide:["top","end"].includes(t)})}"
        @click=${this.headroomController.toggleHeaderVisibility}
      >
        <mov-icon name="IconMenu2"></mov-icon>
      </mov-button>
      <header
        id="Header"
        class="${Tt({[Y("header")]:!0,[`headroom-${t}`]:!0,visible:r&&["hide","none"].includes(t),[pe("device")]:!0})}"
      >
        <div
          id="Toolbar"
          class="button-group"
        >
          <mov-dropdown id="FileDropdown">
            <mov-button
              slot="trigger"
              title="${q("FILE_MENU")}"
            >
              <mov-icon
                label="File"
                name="IconDotsVertical"
              ></mov-icon>
            </mov-button>
            <mov-dropdown-item
              id="settings"
              @click=${L6}
            >
              <mov-icon
                slot="icon"
                name="IconSettings"
              ></mov-icon>
              ${q("SETTINGS")} ${a("SETTINGS")}
            </mov-dropdown-item>
            <mov-dropdown-item
              id="keybindings"
              @click=${R6}
            >
              <mov-icon
                slot="icon"
                name="IconKeyboard"
              ></mov-icon>
              ${q("KEYBINDINGS")}
            </mov-dropdown-item>
            <mov-dropdown-item
              id="bookmarks"
              class="tablets"
              @click=${T6}
            >
              <mov-icon
                slot="icon"
                name="IconBookmarks"
              ></mov-icon>
              ${q("BOOKMARKS")}
            </mov-dropdown-item>
            <mov-divider></mov-divider>
            <mov-dropdown-item
              id="AutoScroll"
              class="${Tt({running:pe("autoScroll")})}"
              @click=${Ma}
            >
              <mov-icon
                slot="icon"
                name="${pe("autoScroll")?"IconPlayerPause":"IconPlayerPlay"}"
              ></mov-icon>
              ${q("SCROLL_START")} ${a("SCROLL_START")}
            </mov-dropdown-item>
            <mov-dropdown-item
              id="pageControls"
              class="tablets phones"
              @click="${I3}"
              ?selected=${Y("hidePageControls")}
            >
              <mov-icon
                slot="icon"
                name="IconListNumbers"
              ></mov-icon>
              ${q("TOGGLE_CONTROLS")}
            </mov-dropdown-item>
          </mov-dropdown>

          <mov-dropdown
            id="ViewDropdown"
            checkable
          >
            <mov-button
              slot="trigger"
              title="${q("VIEW_MENU")}"
            >
              <mov-icon
                label="View"
                name="IconApiBook"
              ></mov-icon>
            </mov-button>
            <mov-dropdown-item
              id="webComic"
              class="tablets"
              @click="${fn("WebComic")}"
              ?selected=${Y("viewMode")==="WebComic"}
            >
              <mov-icon
                slot="icon"
                name="IconSpacingVertical"
              ></mov-icon>
              ${q("VIEW_MODE_WEBCOMIC")} ${a("VIEW_MODE_WEBCOMIC")}
            </mov-dropdown-item>
            <mov-dropdown-item
              id="verticalMode"
              class="tablets"
              @click="${fn("Vertical")}"
              ?selected=${Y("viewMode")==="Vertical"}
            >
              <mov-icon
                slot="icon"
                name="IconArrowAutofitDown"
              ></mov-icon>
              ${q("VIEW_MODE_VERTICAL")} ${a("VIEW_MODE_VERTICAL")}
            </mov-dropdown-item>
            <mov-divider></mov-divider>
            <mov-dropdown-item
              id="ltrMode"
              @click="${fn("FluidLTR")}"
              ?selected=${Y("viewMode")==="FluidLTR"}
            >
              <mov-icon
                slot="icon"
                name="IconArrowAutofitRight"
              ></mov-icon>
              ${q("VIEW_MODE_LEFT")} ${a("VIEW_MODE_LEFT")}
            </mov-dropdown-item>
            <mov-dropdown-item
              id="rtlMode"
              @click="${fn("FluidRTL")}"
              ?selected=${Y("viewMode")==="FluidRTL"}
            >
              <mov-icon
                slot="icon"
                name="IconArrowAutofitLeft"
              ></mov-icon>
              ${q("VIEW_MODE_RIGHT")} ${a("VIEW_MODE_RIGHT")}
            </mov-dropdown-item>
            <mov-divider></mov-divider>
            <mov-dropdown-item
              id="BookMode"
              @click="${fn("Book")}"
              ?selected=${Y("viewMode")==="Book"}
            >
              <mov-icon
                slot="icon"
                name="IconBookArrowRight"
              ></mov-icon>
              ${q("VIEW_MODE_BOOK")} ${a("VIEW_MODE_BOOK")}
            </mov-dropdown-item>
            <mov-dropdown-item
              id="MangaMode"
              @click="${fn("Manga")}"
              ?selected=${Y("viewMode")==="Manga"}
            >
              <mov-icon
                slot="icon"
                name="IconBookArrowLeft"
              ></mov-icon>
              ${q("VIEW_MODE_MANGA")} ${a("VIEW_MODE_MANGA")}
            </mov-dropdown-item>
            <mov-divider></mov-divider>
            <mov-dropdown-item
              id="GalleryMode"
              @click="${fn("Gallery")}"
              ?selected=${Y("viewMode")==="Gallery"}
            >
              <mov-icon
                slot="icon"
                name="IconLayoutDashboard"
              ></mov-icon>
              ${q("VIEW_MODE_GALLERY")} ${a("VIEW_MODE_GALLERY")}
            </mov-dropdown-item>
          </mov-dropdown>
          <mov-dropdown
            id="ZoomDropdown"
            checkable
          >
            <mov-button
              slot="trigger"
              title="${q("ZOOM_MENU")}"
            >
              <mov-icon
                label="Zoom"
                name="IconZoom"
              ></mov-icon>
            </mov-button>
            <mov-dropdown-item
              id="enlarge"
              @click="${Ia()}"
            >
              <mov-icon
                slot="icon"
                name="IconZoomInArea"
              ></mov-icon>
              ${q("ENLARGE")} ${a("ENLARGE")}
            </mov-dropdown-item>
            <mov-dropdown-item
              id="restore"
              @click="${So("percent",100)}"
            >
              <mov-icon
                slot="icon"
                name="IconZoomPan"
              ></mov-icon>
              ${q("RESTORE")} ${a("RESTORE")}
            </mov-dropdown-item>
            <mov-dropdown-item
              id="reduce"
              @click="${Ia(-1)}"
            >
              <mov-icon
                slot="icon"
                name="IconZoomOutArea"
              ></mov-icon>
              ${q("REDUCE")} ${a("REDUCE")}
            </mov-dropdown-item>
            <mov-divider></mov-divider>
            <mov-dropdown-item
              id="fitWidth"
              @click="${So("width")}"
              ?selected=${Y("zoomMode")==="width"}
            >
              <mov-icon
                slot="icon"
                name="IconArrowAutofitWidth"
              ></mov-icon>
              ${q("FIT_WIDTH")} ${a("FIT_WIDTH")}
            </mov-dropdown-item>
            <mov-dropdown-item
              id="fitHeight"
              @click="${So("height")}"
              ?selected=${Y("zoomMode")==="height"}
            >
              <mov-icon
                slot="icon"
                name="IconArrowAutofitHeight"
              ></mov-icon>
              ${q("FIT_HEIGHT")} ${a("FIT_HEIGHT")}
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
            .value="${Y("zoomValue")}"
            min="${Y("minZoom")}"
            max="200"
            @input=${m6}
          />
          <span id="ZoomVal">
            Zoom:
            ${Y("zoomMode")==="percent"?`${Y("zoomValue")}%`:Y("zoomMode")}</span
          >
        </div>
        <div
          id="GlobalFunctions"
          class="button-group"
        >
          <mov-button
            id="series"
            href="${this.manga.series??Be}"
            @click=${pi}
            title="${q("RETURN_CHAPTER_LIST")}"
            ?disabled=${!this.manga.series}
          >
            <mov-icon name="IconBooksReturn"></mov-icon>
          </mov-button>
          <mov-button
            id="download"
            title="${q("DOWNLOAD_ZIP")}"
            @click=${B0}
            ?disabled=${pe("download")!=="available"}
            ?loading=${pe("download")==="working"}
          >
            <mov-icon
              name="${pe("download")==="working"?"IconLoader2":"IconFileDownload"}"
            ></mov-icon>
          </mov-button>
          <mov-button
            id="prev"
            href="${this.manga.prev??Be}"
            title="${q("PREVIOUS_CHAPTER")}"
            @click=${pi}
            ?disabled=${!this.manga.prev}
          >
            <mov-icon name="IconArrowBigLeft"></mov-icon>
          </mov-button>
          <mov-button
            id="next"
            href="${this.manga.next??Be}"
            title="${q("NEXT_CHAPTER")}"
            @click=${pi}
            ?disabled=${!this.manga.next}
          >
            <mov-icon name="IconArrowBigRight"></mov-icon>
          </mov-button>
        </div>
      </header>
    `}};G([Ur("#MangaTitle")],Oa.prototype,"mangaTitleElement",void 0),G([oe({type:Object})],Oa.prototype,"manga",void 0),Oa=G([ht("reader-header"),(0,Mo.useStores)(St,ao,Yt)],Oa);var z6="#BookmarksPanel{text-align:center;--width:100vw}#BookmarksList{flex-direction:column;gap:5px;max-height:60vh;padding:0 5px;display:flex;overflow:auto}.bookmark-item{text-align:left;border-radius:5px;align-items:center;gap:1rem;padding:.75rem 1rem;transition:background-color .15s ease-in-out;display:flex}.bookmark-item:hover{background-color:var(--mov-color-fill-quiet,#8080801a)}.bookmark-info{flex-grow:1;min-width:0}.bookmark-name{font-weight:500}.bookmark-url{white-space:nowrap;text-overflow:ellipsis;color:color-mix(in oklab, var(--theme-body-text-color), transparent 30%);font-size:.875rem;text-decoration:none;display:block;overflow:hidden}.bookmark-url:hover{text-decoration:underline}.bookmark-details{text-align:right;width:90px;color:color-mix(in oklab, var(--theme-body-text-color), transparent 30%);flex-shrink:0;font-size:.875rem}.bookmark-details>div{padding:2px 0}.bookmark-actions{flex-shrink:0;gap:.5rem;display:flex}",rh=class extends et{static{this.styles=[Xt(z6)]}listBookmarks(){return As(Y("bookmarks"))?[q("LIST_EMPTY")]:Y("bookmarks").map((t,r)=>ue`
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
              @click=${O6}
            >
              <mov-icon
                name="IconTrash"
                size="16px"
              ></mov-icon>
            </mov-button>
          </div>
        </div>
      `)}render(){return ue`
      <mov-dialog
        id="BookmarksPanel"
        ?open=${pe("panel")==="bookmarks"}
        light-dismiss
        @close=${Dl}
      >
        <mov-button
          class="Bookmark"
          title="${q("BOOKMARK")}"
          @click=${th}
          slot="header-actions"
        >
          <mov-icon
            name="${lo()===void 0?"IconBookmark":"IconBookmarkOff"}"
            size="24px"
          ></mov-icon>
        </mov-button>
        <h2 slot="header">${q("BOOKMARKS")}</h2>
        <h2 slot="label">${q("BOOKMARKS")}</h2>
        <div id="BookmarksList">${this.listBookmarks()}</div>
      </mov-dialog>
    `}};rh=G([ht("bookmark-panel"),(0,Mo.useStores)(St,ao,Yt)],rh);function*B6(e,t){const r=typeof t=="function";if(e!==void 0){let i=-1;for(const a of e)i>-1&&(yield r?t(i):t),i++,yield a}}var N6="#KeybindingsPanel div{line-height:1.5em}#KeybindingsPanel #KeybindingsList{grid-template-columns:1fr 2fr;gap:5px;display:grid}#KeybindingsPanel .ControlButton{justify-content:center;align-items:center;gap:.5em;margin-left:3px;padding:5px 10px}#KeybindingsPanel label{display:ruby}#KeybindingsPanel input{width:100%;display:inline-block}#KeybindingsPanel #HotKeysRules{grid-column:span 2}",oh=class extends et{constructor(...t){super(...t),this.keybindsRefs=Me.default.keys(Y("keybinds")).reduce((r,i)=>(r[i]=Rs(),r),{})}static{this.styles=[Xt(N6),Xt(Q0)]}keybindList(){const t=Y("keybinds");return Me.default.keys(t).map(r=>{const i=t[r]?.length?B6(t[r]?.map(a=>ue`<kbd class="dark">${a}</kbd>`)," / "):"";return ue`<span>${q(r)}:</span> <span>${i}</span>`})}keybindEditor(){const t=Y("keybinds");return Me.default.keys(t).map(r=>ue`<label for="${r}">${q(r)}:</label>
          <input
            type="text"
            class="KeybindInput"
            id="${r}"
            name="${r}"
            value="${t[r]?.join(" , ")??Be}"
            ${$s(this.keybindsRefs[r])}
          />`)}render(){return ue`
      <mov-drawer
        id="KeybindingsPanel"
        ?open=${pe("panel").startsWith("keybindings")}
        placement="end"
        @close=${Dl}
      >
        <h2 slot="label">${q("KEYBINDINGS")}</h2>
        <div
          class="controls"
          slot="header-actions"
        >
          ${pe("panel")==="keybindingsEditor"?ue` <mov-button
                id="SaveKeybindings"
                type="button"
                title="${q("SAVE_KEYBINDS")}"
                @click=${()=>P6(this.keybindsRefs)}
              >
                <mov-icon
                  name="IconDeviceFloppy"
                  size="16px"
                  slot="start"
                ></mov-icon>
                ${q("BUTTON_SAVE")}
              </mov-button>`:ue` <mov-button
                id="EditKeybindings"
                type="button"
                title="${q("EDIT_KEYBINDS")}"
                @click=${$6}
              >
                <mov-icon
                  name="IconPencil"
                  size="16px"
                  slot="start"
                ></mov-icon>
                ${q("BUTTON_EDIT")}
              </mov-button>`}
        </div>
        <div id="KeybindingsList">
          ${pe("panel")==="keybindingsEditor"?this.keybindEditor():this.keybindList()}
        </div>
        <div id="HotKeysRules">${T0(q("KEYBIND_RULES"))}</div>
      </mov-drawer>
    `}};oh=G([ht("keybindings-panel"),(0,Mo.useStores)(St,ao,Yt)],oh);function*F6(e,t){if(e!==void 0){let r=0;for(const i of e)yield t(i,r++)}}function yi(e,t=1){return Array(e).fill(0).map((r,i)=>i+1).filter(r=>r>=t)}function ih(e){e.deltaY&&(e.currentTarget.scrollLeft+=e.deltaY+e.deltaX,e.preventDefault())}function H6(e){e.deltaY&&(e.currentTarget.scrollLeft-=e.deltaY-e.deltaX,e.preventDefault())}var G6=":host{--nav-collapsed-size:34px;--nav-expanded-size:200px;--header-height:80px}#Navigation{color:var(--theme-text-color);background-color:var(--theme-hightlight-color);box-sizing:border-box;white-space:nowrap;text-align:center;z-index:1000;gap:5px;line-height:0;transition:all .3s;display:flex;position:fixed;overflow:hidden}#Thumbnails{flex-grow:1;justify-content:flex-start;gap:5px;display:flex}#Navigation.horizontal #Thumbnails{flex-direction:row;overflow:auto hidden}#Navigation.vertical #Thumbnails{flex-direction:column;justify-content:flex-start;overflow:hidden auto}#Navigation.left #Thumbnails{direction:rtl}:host(:not([forceExpanded])) #Navigation:not(:hover) #Thumbnails{display:none}#NavigationCounters{text-align:center;white-space:nowrap;flex-shrink:0;justify-content:center;align-items:center;gap:.5rem;padding:5px;line-height:1rem;display:flex}#Navigation.horizontal{height:var(--nav-collapsed-size);flex-direction:column;width:100%;left:0;right:0}:host([forceExpanded]) #Navigation.horizontal,#Navigation.horizontal:hover{height:var(--nav-expanded-size)}#Navigation.bottom{bottom:0}#Navigation.vertical{width:var(--nav-collapsed-size);flex-direction:row;height:100%;transition:top .3s,height .3s,width .3s;bottom:0}:host([forceExpanded]) #Navigation.vertical,#Navigation.vertical:hover{width:var(--nav-expanded-size)}#Navigation.left{flex-direction:row-reverse;left:0}#Navigation.right{right:0}#Navigation.vertical #NavigationCounters{writing-mode:vertical-rl;transform:rotate(180deg)}#Navigation.right #NavigationCounters{transform:rotate(0)}#Navigation.vertical.header{top:var(--header-height);height:calc(100% - var(--header-height))}#Navigation .Thumbnail{justify-content:center;align-items:center;width:150px;height:150px;margin:0 5px;display:inline-flex;position:relative}.ThumbnailIndex{color:var(--mov-color-on-loud);background-color:var(--mov-color-fill-loud);opacity:.9;text-align:center;z-index:1;width:100%;font-weight:600;line-height:1.2rem;display:block;position:absolute;bottom:30%;left:0}.ThumbnailImg{cursor:pointer;background-position:50%;background-repeat:no-repeat;background-size:48px 48px;min-width:80px;max-width:150px;min-height:150px;max-height:150px;display:inline-block}",ki=class extends et{constructor(...t){super(...t),this.mode="bottom",this.forceExpanded=!1,this.isHiding=!1}static{this.styles=[Xt(G6),Ot`
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
        background-image: url('${Xt(di(Ml))}');
      }

      .Thumbnail .ThumbnailImg.imgBroken {
        background-image: url('${Xt(di(xl))}');
      }
    `]}willUpdate(t){t.has("mode")&&(this.isHiding=!0)}updated(t){t.has("mode")&&this.isHiding&&setTimeout(()=>{this.isHiding=!1},50)}render(){if(this.mode==="disabled")return Be;const t=pe("manga"),r={horizontal:this.mode==="bottom",vertical:this.mode!=="bottom",left:this.mode==="left",right:this.mode==="right",bottom:this.mode==="bottom",hiding:this.isHiding},i=pe("images")||{},a=Me.default.keys(i).filter(s=>{const l=parseInt(s,10);return l>=(t?.begin??1)&&l<=(t?.pages??1)&&i[l]?.status==="loaded"}).length;return ue`
      <nav
        id="Navigation"
        class="${Tt(r)}"
      >
        <div
          id="NavigationCounters"
          class="ControlLabel"
        >
          ${a3}
          <i>${a}</i> /
          <b> ${(t?.pages??1)-((t?.begin??1)-1)} </b>
          ${q("PAGES_LOADED")}
          <span>: ${pe("currentPage")}</span>
        </div>
        <div
          id="Thumbnails"
          @wheel=${this.mode==="bottom"?ih:null}
        >
          ${F6(yi(t?.pages??1,t?.begin??1),s=>ue` <figure
                id="Thumbnail${s}"
                class="Thumbnail"
                role="button"
                tabindex="0"
                title="Go to page ${s}"
                @click=${()=>T3(s)}
              >
                <img
                  id="ThumbnailImg${s}"
                  alt=""
                  class="ThumbnailImg"
                  src=${pe("images")?.[s]?.src??Be}
                />
                <figcaption class="ThumbnailIndex">${s}</figcaption>
              </figure>`)}
        </div>
      </nav>
    `}};G([oe({type:String})],ki.prototype,"mode",void 0),G([oe({type:Boolean})],ki.prototype,"forceExpanded",void 0),G([un()],ki.prototype,"isHiding",void 0),ki=G([ht("navbar-thumbnails"),(0,Mo.useStores)(St,ao,Yt)],ki);function W6(){const e=Nr()?"true":"false";return ue` <div class="ControlLabel">
    ${q("SCOPE")}
    <segmented-control
      .value=${e}
      @change=${X3}
    >
      <segmented-control-option
        value="false"
        label=${q("GLOBAL")}
        icon="IconWorldCog"
      ></segmented-control-option>
      <segmented-control-option
        value="true"
        label=${window.location.hostname}
        icon="IconLocationCog"
      ></segmented-control-option>
    </segmented-control>
  </div>`}function U6(){return io.map(e=>ue`
      <option
        value="${e.ID}"
        ?selected=${Y("locale")===e.ID}
      >
        ${e.NAME}
      </option>
    `)}function V6(){return ue` <div class="ControlLabel locale">
    ${q("LANGUAGE")}
    <select
      id="locale"
      @change="${J3}"
    >
      ${U6()}
    </select>
  </div>`}var Z6=()=>ue`${W6()} ${V6()}`;function q6(){return ue`
    <div class="ControlLabel loadMode">
      ${q("DEFAULT_LOAD_MODE")}
      <select
        id="loadMode"
        @change="${Q3}"
      >
        <option
          value="wait"
          ?selected=${Y("loadMode")==="wait"}
        >
          ${q("LOAD_MODE_NORMAL")}
        </option>
        <option
          value="always"
          ?selected=${Y("loadMode")==="always"}
        >
          ${q("LOAD_MODE_ALWAYS")}
        </option>
        <option
          value="never"
          ?selected=${Y("loadMode")==="never"}
        >
          ${q("LOAD_MODE_NEVER")}
        </option>
      </select>
    </div>
  `}function j6(){return ue`
    <div class="ControlLabel PagesPerSecond">
      ${q("LOAD_SPEED")}
      <select
        id="PagesPerSecond"
        @change="${a6}"
      >
        <option
          value="Safe"
          ?selected=${Y("loadSpeed")==="Safe"}
        >
          ${q("SLOWLY")} (Safe)
        </option>
        <option
          value="Standard"
          ?selected=${Y("loadSpeed")==="Standard"}
        >
          ${q("NORMAL")} (Standard)
        </option>
        <option
          value="Faster"
          ?selected=${Y("loadSpeed")==="Faster"}
        >
          ${q("FAST")} (Faster)
        </option>
        <option
          value="Extreme"
          ?selected=${Y("loadSpeed")==="Extreme"}
        >
          ${q("EXTREME")} (Extreme)
        </option>
        <option
          value="All"
          ?selected=${Y("loadSpeed")==="All"}
        >
          ${q("ALL_PAGES")} (All)
        </option>
      </select>
    </div>
  `}var K6=()=>ue`${q6()} ${j6()}`;function Y6(){return ue`
    <div class="ControlLabel fitIfOversize">
      ${q("FIT_WIDTH_OVERSIZED")}
      <mov-switch
        name="fitIfOversize"
        ?checked=${Y("fitWidthIfOversize")}
        @change=${e6}
      ></mov-switch>
    </div>
    <div class="ControlLabel downloadZip">
      ${q("DOWNLOAD_IMAGES")}
      <mov-switch
        name="downloadZip"
        ?checked=${Y("downloadZip")}
        @change=${r6}
      ></mov-switch>
    </div>
    <div class="ControlLabel hidePageControls">
      ${q("HIDE_CONTROLS")}
      <mov-switch
        name="hidePageControls"
        ?checked=${Y("hidePageControls")}
        @change=${c6}
      ></mov-switch>
    </div>
    <div class="ControlLabel lazyLoadImages">
      ${q("LAZY_LOAD_IMAGES_ENABLE")}
      <mov-switch
        name="lazyLoadImages"
        ?checked=${Y("lazyLoadImages")}
        @change=${o6}
      ></mov-switch>
    </div>
  `}function X6(){return ue`
    <div
      class="${Tt({ControlLabel:!0,lazyStart:!0,ControlLabelItem:!0,show:Y("lazyLoadImages")})}"
    >
      <span>
        ${q("LAZY_LOAD_IMAGES")}
        <output
          id="lazyStartVal"
          for="lazyStart"
        >
          ${Y("lazyStart")}
        </output>
      </span>
      <input
        type="range"
        value="${Y("lazyStart")}"
        name="lazyStart"
        id="lazyStart"
        min="5"
        max="100"
        step="5"
        oninput="lazyStartVal.value = this.value"
        @change="${i6}"
      />
    </div>
  `}function J6(){return ue`
    <div class="ControlLabel headerType">
      ${q("HEADER_TYPE")}
      <segmented-control
        .value=${Y("header")}
        @change=${u6}
        labelPosition="bottom"
      >
        <segmented-control-option
          value="hover"
          label=${q("HEADER_HOVER")}
          icon="arrows-move"
        ></segmented-control-option>
        <segmented-control-option
          value="scroll"
          label=${q("HEADER_SCROLL")}
          icon="arrows-vertical"
        ></segmented-control-option>
        <segmented-control-option
          value="click"
          label=${q("HEADER_CLICK")}
          icon="hand-click"
        ></segmented-control-option>
        <segmented-control-option
          value="fixed"
          label=${q("HEADER_FIXED")}
          icon="pin"
        ></segmented-control-option>
        <segmented-control-option
          value="simple"
          label=${q("HEADER_SIMPLE")}
          icon="box-align-top"
        ></segmented-control-option>
      </segmented-control>
    </div>
  `}function Q6(){return ue`
    <div class="ControlLabel pagination">
      ${q("PAGINATION_TYPE")}
      <segmented-control
        .value=${Y("pagination")}
        @change=${n6}
        labelPosition="side"
      >
        <segmented-control-option
          value="disabled"
          label=${q("PAGINATION_DISABLED")}
          icon="x"
        ></segmented-control-option>
        <segmented-control-option
          value="slider"
          label=${q("PAGINATION_SLIDER")}
          icon="adjustments-horizontal"
        ></segmented-control-option>
        <segmented-control-option
          value="side-arrows"
          label=${q("PAGINATION_ARROWS")}
          icon="arrows-left-right"
        ></segmented-control-option>
        <segmented-control-option
          value="both"
          label=${q("PAGINATION_BOTH")}
          icon="arrows-horizontal"
        ></segmented-control-option>
      </segmented-control>
    </div>
  `}function eb(){return ue`
    <div class="ControlLabel navbarType">
      ${q("NAVBAR_TYPE")}
      <segmented-control
        .value=${Y("navbar")}
        @change=${t6}
        labelPosition="tooltip"
      >
        <segmented-control-option
          value="bottom"
          label=${q("NAVBAR_BOTTOM")}
          icon="layout-bottombar"
        ></segmented-control-option>
        <segmented-control-option
          value="left"
          label=${q("NAVBAR_LEFT")}
          icon="layout-sidebar"
        ></segmented-control-option>
        <segmented-control-option
          value="right"
          label=${q("NAVBAR_RIGHT")}
          icon="layout-sidebar-right"
        ></segmented-control-option>
        <segmented-control-option
          value="disabled"
          label=${q("NAVBAR_DISABLED")}
          icon="x"
        ></segmented-control-option>
      </segmented-control>
    </div>
  `}function tb(){return ue`
    <div class="ControlLabel autoScroll">
      <span>
        ${q("AUTO_SCROLL_HEIGHT")}
        <output
          id="scrollHeightVal"
          for="scrollHeight"
        >
          ${Y("scrollHeight")} </output
        >px
      </span>
      <input
        type="range"
        value="${Y("scrollHeight")}"
        name="scrollHeight"
        id="scrollHeight"
        min="1"
        max="${Math.ceil(window.innerHeight/200)*100}"
        step="1"
        @change="${d6}"
      />
    </div>
  `}var nb=()=>ue`${Y6()} ${Q6()} ${X6()} ${J6()} ${eb()} ${tb()}`;function rb(){const e=Y("colorScheme")==="dark";wt("colorScheme",e?"light":"dark"),document.documentElement.classList.remove(e?"dark":"light"),document.documentElement.classList.add(Y("colorScheme"))}function Ta(e){wt("theme",e instanceof CustomEvent?e.detail.value:e.currentTarget.value)}function ob(){return ue`
    <div class="ControlLabel ColorSchemeSelector">
      <label>${q("COLOR_SCHEME")}</label>
      <toggle-button
        id="ColorScheme"
        mode="theme"
        @click=${rb}
        ?active=${Y("colorScheme")==="dark"}
      >
      </toggle-button>
    </div>
    <div class="ControlLabel ThemeSelector">
      <label>${q("THEME_COLOR")}</label>
      <mov-color-picker
        id="ThemeHex"
        .value="${Y("theme")}"
        title="${Y("theme")}"
        @input=${Ta}
        .swatches=${Me.default.values(bl)}
      ></mov-color-picker>
    </div>
    <color-palette
      .baseColor="${Y("theme")}"
      mode="steps"
      .selected=${Y("theme")}
      @change="${Ta}"
    ></color-palette>
    <span id="ColorRecommendations">
      ${Me.default.values(bl).map(e=>ue`<color-swatch
            .color="${e}"
            .selected=${Y("theme")}
            @change=${Ta}
          ></color-swatch>`)}
    </span>
    <details class="ControlLabel">
      <summary>${q("THEME_HUE")} & ${q("THEME_SHADE")}</summary>
      <color-panel
        .selected=${Y("theme")}
        @change=${Ta}
      ></color-panel>
    </details>
  `}function ib(){return ue` <div class="ControlLabel DefaultZoomMode">
    ${q("DEFAULT_ZOOM_MODE")}
    <segmented-control
      .value=${Y("zoomMode")}
      @change=${p6}
      labelPosition="tooltip"
    >
      <segmented-control-option
        value="percent"
        label=${q("PERCENT")}
        icon="file-percent"
      ></segmented-control-option>
      <segmented-control-option
        value="width"
        label=${q("FIT_WIDTH")}
        icon="arrow-autofit-width"
      ></segmented-control-option>
      <segmented-control-option
        value="height"
        label=${q("FIT_HEIGHT")}
        icon="arrow-autofit-height"
      ></segmented-control-option>
    </segmented-control>
  </div>`}function ab(){return ue`
    <div
      class="${Tt({ControlLabel:!0,zoomValue:!0,ControlLabelItem:!0,show:Y("zoomMode")==="percent"})}"
    >
      <span>
        ${q("DEFAULT_ZOOM")}
        <output
          id="zoomValueVal"
          class="RangeValue"
          for="zoomValue"
        >
          ${Y("zoomValue")}%
        </output>
      </span>
      <input
        type="range"
        value="${Y("zoomValue")}"
        name="zoomValue"
        id="zoomValue"
        min="5"
        max="200"
        step="5"
        list="zoomValueList"
        @input="${g6}"
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
  `}function sb(){return ue`
    <div class="ControlLabel minZoom">
      <span>
        ${q("MINIMUM_ZOOM")}
        <output
          id="minZoomVal"
          class="RangeValue"
          for="minZoom"
        >
          ${Y("minZoom")}%
        </output>
      </span>
      <input
        type="range"
        value="${Y("minZoom")}"
        name="minZoom"
        id="minZoom"
        min="25"
        max="100"
        step="5"
        @input="${l6}"
        list="minZoomList"
      />
      <datalist id="minZoomList">
        <option value="25">25</option>
        <option value="50">50</option>
        <option value="75">75</option>
        <option value="100">100</option>
      </datalist>
    </div>
  `}function lb(){return ue`
    <div class="ControlLabel zoomStep">
      <span>
        ${q("ZOOM_STEP")}
        <output
          id="zoomStepVal"
          class="RangeValue"
          for="zoomStep"
        >
          ${Y("zoomStep")}%
        </output>
      </span>
      <input
        type="range"
        value="${Y("zoomStep")}"
        name="zoomStep"
        id="zoomStep"
        min="10"
        max="50"
        step="5"
        @input="${s6}"
        list="zoomStepList"
      />
      <datalist id="zoomStepList">
        <option value="10">10</option>
        <option value="30">30</option>
        <option value="50">50</option>
      </datalist>
    </div>
  `}function cb(){return ue`
    <div class="ControlLabel viewMode">
      ${q("DEFAULT_VIEW_MODE")}
      <segmented-control
        .value=${Y("viewMode")}
        @change=${v6}
        labelPosition="tooltip"
      >
        <segmented-control-option
          value="Vertical"
          label=${q("VIEW_MODE_VERTICAL")}
          icon="arrow-autofit-down"
        ></segmented-control-option>
        <segmented-control-option
          value="WebComic"
          label=${q("VIEW_MODE_WEBCOMIC")}
          icon="spacing-vertical"
        ></segmented-control-option>
        <segmented-control-option
          value="FluidLTR"
          label=${q("VIEW_MODE_LEFT")}
          icon="arrow-autofit-right"
        ></segmented-control-option>
        <segmented-control-option
          value="FluidRTL"
          label=${q("VIEW_MODE_RIGHT")}
          icon="arrow-autofit-left"
        ></segmented-control-option>
        <segmented-control-option
            value="Book"
            label=${q("VIEW_MODE_BOOK")}
            icon="IconBookArrowRight"
        ></segmented-control-option>
        <segmented-control-option
            value="Manga"
            label=${q("VIEW_MODE_MANGA")}
            icon="IconBookArrowLeft"
        ></segmented-control-option>
        <segmented-control-option
            value="Gallery"
            label=${q("VIEW_MODE_GALLERY")}
            icon="IconLayoutDashboard"
        ></segmented-control-option>
      </segmented-control>
    </div>
  `}var ub=()=>ue`${ib()} ${ab()} ${sb()} ${lb()} ${cb()}`,db="#SettingsPanel{color:var(--theme-text-color)}#SettingsPanel fieldset{border:1px solid var(--theme-body-text-color);border-radius:10px;padding:3px}#SettingsPanel .ControlLabel{flex-flow:wrap;justify-content:space-between;align-items:center;padding:2px;display:flex}#SettingsPanel .ControlLabelItem{justify-content:space-between;align-items:center;display:flex}#SettingsPanel .ControlLabelItem:not(.show){display:none}#SettingsPanel input[type=range]{width:100%}#SettingsPanel .RangeValue{color:var(--mov-color-on-loud);text-align:center;background:var(--mov-color-fill-loud);border-radius:3px;margin-left:8px;padding:2px 5px;line-height:20px;display:inline-block}#SettingsPanel datalist{flex-direction:row;justify-content:space-between;width:100%;display:flex}#SettingsPanel datalist option{writing-mode:vertical-lr;padding:0}#ThemeSelector{width:110px}#ColorRecommendations{flex-flow:wrap;gap:2px;display:flex}#Chapter:not(.Vertical)~#SettingsPanel .verticalSeparator{display:none}#ColorScheme{min-width:28px;min-height:28px;padding:5px}#ResetSettings,#ResetSettings::part(base){width:100%}",ah=class extends et{static{this.styles=[Ot`
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
    `,Xt(db)]}render(){return ue`
      <mov-drawer
        id="SettingsPanel"
        ?open=${pe("panel")==="settings"}
        @close=${Dl}
        placement="start"
        class="${pe("device")}"
      >
        <h2 slot="label">${q("SETTINGS")}</h2>
        <mov-button
          id="ResetSettings"
          @click="${tp}"
          title="${q("BUTTON_RESET_SETTINGS")}"
        >
          <mov-icon
            name="IconSettingsOff"
            size="20px"
            slot="start"
          ></mov-icon>
          ${q("BUTTON_RESET_SETTINGS")}
        </mov-button>
        <div class="content">
          <fieldset id="SettingsPanelGeneral">
            <legend>${q("GENERAL")}</legend>
            ${Z6()}
          </fieldset>
          <fieldset id="SettingsPanelTheme">
            <legend>${q("THEME")}</legend>
            ${ob()}
          </fieldset>
          <fieldset id="SettingsPanelLoading">
            <legend>${q("LOADING")}</legend>
            ${K6()}
          </fieldset>
          <fieldset id="SettingsPanelZoom">
            <legend>${q("ZOOM")}</legend>
            ${ub()}
          </fieldset>
          <fieldset id="SettingsPanelOthers">
            <legend>${q("OTHERS")}</legend>
            ${nb()}
          </fieldset>
        </div>
      </mov-drawer>
    `}};ah=G([ht("settings-panel"),(0,Mo.useStores)(St,ao,Yt)],ah);function hb(e){return new Promise(function(t,r){var i=new FileReader,a=typeof i.readAsBinaryString=="function";i.onloadend=function(){var s=i.result||"";if(a)return t(s);t(gb(s))},i.onerror=r,a?i.readAsBinaryString(e):i.readAsArrayBuffer(e)})}function fb(e){return hb(e).then(btoa)}function pb(e){return fb(e).then(function(t){return"data:"+e.type+";base64,"+t})}function gb(e){for(var t="",r=new Uint8Array(e),i=r.byteLength,a=-1;++a<i;)t+=String.fromCharCode(r[a]);return t}async function mb(e,t){Ee("Fetching page: ",e);try{const r=await(await fetch(e)).text();return new DOMParser().parseFromString(r,t)}catch(r){throw Ee("Failed to fetch page: ",r),r}}async function vb(e){return mb(e,"text/html")}async function bb(e,t,r){try{return(await vb(e)).querySelector(t)?.getAttribute(r)}catch(i){return Ee("Failed to get element attribute: ",i),null}}var wb=class{constructor(e,t){this.queue=[],this.activeCount=0,this.lastRunTime=0;const r={Safe:{concurrency:5,delay:1e3},Standard:{concurrency:5,delay:500},Faster:{concurrency:10,delay:500},Extreme:{concurrency:10,delay:250},All:{concurrency:20,delay:50}}[e];this.maxConcurrency=r.concurrency,this.minDelay=t??r.delay}add(e){this.queue.push(e),this.runNext()}async runNext(){if(this.activeCount>=this.maxConcurrency||this.queue.length===0)return;const e=Date.now()-this.lastRunTime;if(e<this.minDelay){setTimeout(()=>this.runNext(),this.minDelay-e);return}const t=this.queue.shift();if(t){this.activeCount+=1,this.lastRunTime=Date.now();try{await t()}finally{this.activeCount-=1,this.runNext()}}}},zl;function _b(e){if(e){let t=e.trim();return t.startsWith("//")&&(t=`https:${t}`),t}return""}async function La(e,t,r){const i=pe("images")?.[t];i?.status&&i.status!=="pending"||(Dn(t,()=>({status:"loading"})),zl.add(async()=>{let a=_b(r),s,l="loaded";try{const h=await fetch(a,e.fetchOptions);h.ok?(s=await h.blob(),a=await pb(s)):l="error"}catch(h){Ee("Failed to fetch image",h),l="error"}Dn(t,()=>({src:a,blob:s,status:l})),_n("Loaded Image:",t,"Source:",a)}),e.pages===t&&eh())}async function sh(e,t,r){const i=pe("images")?.[t];i?.status&&i.status!=="pending"||(Dn(t,()=>({status:"loading"})),zl.add(async()=>{try{const a=await bb(r,e.img,e.lazyAttr??"src");a?(Dn(t,()=>({status:"pending"})),await La(e,t,a)):Dn(t,()=>({status:"error"}))}catch(a){Ee("Failed to get page attribute",a),Dn(t,()=>({status:"error"}))}}))}function lh(e,t){yi(t.pages,e).filter((r,i)=>!(t.lazy??Y("lazyLoadImages"))||i<=Y("lazyStart")).forEach(r=>{sh(t,r,t.listPages[r-1])})}function ch(e,t){yi(t.pages,e).filter((r,i)=>!(t.lazy??Y("lazyLoadImages"))||i<=Y("lazyStart")).forEach(r=>{La(t,r,t.listImages[r-1])})}async function yb(){await Ss(()=>pe("manga")!==void 0);const e=pe("manga"),t=e.begin??1;zl=new wb(Y("loadSpeed"),e.timer),_n("Loading Images"),_n(`Speed: ${Y("loadSpeed")}`),_n(`Lazy: ${e.lazy??Y("lazyLoadImages")}, Starting from: ${Y("lazyStart")}`),Zr(),Cu(e)?(_n("Method: Images:",e.listImages),ch(t,e)):Ou(e)?(_n("Method: Pages:",e.listPages),lh(t,e)):Z2(e)?(_n("Method: Brute Force"),e.bruteForce({begin:t,addImg:La,loadImages(r){ch(t,{...e,listImages:r})},loadPages(r,i,a){lh(t,{...e,listPages:r,img:i,lazyAttr:a})},wait:0})):Ee("No Loading Method Found"),Yt.listen((r,i,a)=>{if(a==="currentPage"&&r.currentPage>i.currentPage)for(let s=r.currentPage;s<Math.min(r.currentPage+5,e.pages+1);s++)r.images?.[s]?.src!==void 0||r.images?.[s]?.status==="loading"||(Cu(e)?La(e,s,e.listImages[s-1]):Ou(e)&&sh(e,s,e.listPages[s-1]))})}function kb(){const e=pe("images");if(!e)return null;const t=Y("viewMode"),r=t==="FluidLTR"||t==="FluidRTL",i=t==="FluidRTL",a=window.innerHeight/2,s=window.innerWidth/2;let l=null;for(const h in e){const u=e[h].ref?.value;if(!u)continue;const f=u?.getBoundingClientRect();let p;r?i?p=f.right:p=f.left:p=f.top,(r?p<=s:p<=a)&&(!l||p>l.edge)&&(l={index:parseInt(h,10),edge:p})}return l?l.index:pe("manga")?.begin??1}function uh(){const e=kb();e!=null&&pe("currentPage")!==e&&Pe("currentPage",e)}function Eb(){const e=Me.default.throttle(()=>{requestAnimationFrame(uh)},100);window.addEventListener("scroll",e,{passive:!0}),window.addEventListener("resize",e),pe("chapter").value?.addEventListener("scroll",e,{passive:!0}),requestAnimationFrame(uh)}function dh(){if(!pe("chapter").value){setTimeout(dh,50);return}Eb()}var hh=Me.default.debounce(()=>{Pe("device",Wo()),Zr()},200);async function Ab(){await Ss(()=>pe("manga")!==void 0),J0(),window.addEventListener("resize",hh),window.addEventListener("orientationchange",hh),U3(),dh()}var Sb=wn(((e,t)=>{(function(r,i){typeof define=="function"&&define.amd?define(i):typeof e=="object"?t.exports=i():r.NProgress=i()})(e,function(){var r={};r.version="0.2.0";var i=r.settings={minimum:.08,easing:"ease",positionUsing:"",speed:200,trickle:!0,trickleRate:.02,trickleSpeed:800,showSpinner:!0,barSelector:'[role="bar"]',spinnerSelector:'[role="spinner"]',parent:"body",template:'<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'};r.configure=function(m){var E,y;for(E in m)y=m[E],y!==void 0&&m.hasOwnProperty(E)&&(i[E]=y);return this},r.status=null,r.set=function(m){var E=r.isStarted();m=a(m,i.minimum,1),r.status=m===1?null:m;var y=r.render(!E),S=y.querySelector(i.barSelector),x=i.speed,T=i.easing;return y.offsetWidth,h(function(L){i.positionUsing===""&&(i.positionUsing=r.getPositioningCSS()),u(S,l(m,x,T)),m===1?(u(y,{transition:"none",opacity:1}),y.offsetWidth,setTimeout(function(){u(y,{transition:"all "+x+"ms linear",opacity:0}),setTimeout(function(){r.remove(),L()},x)},x)):setTimeout(L,x)}),this},r.isStarted=function(){return typeof r.status=="number"},r.start=function(){r.status||r.set(0);var m=function(){setTimeout(function(){r.status&&(r.trickle(),m())},i.trickleSpeed)};return i.trickle&&m(),this},r.done=function(m){return!m&&!r.status?this:r.inc(.3+.5*Math.random()).set(1)},r.inc=function(m){var E=r.status;return E?(typeof m!="number"&&(m=(1-E)*a(Math.random()*E,.1,.95)),E=a(E+m,0,.994),r.set(E)):r.start()},r.trickle=function(){return r.inc(Math.random()*i.trickleRate)},(function(){var m=0,E=0;r.promise=function(y){return!y||y.state()==="resolved"?this:(E===0&&r.start(),m++,E++,y.always(function(){E--,E===0?(m=0,r.done()):r.set((m-E)/m)}),this)}})(),r.render=function(m){if(r.isRendered())return document.getElementById("nprogress");p(document.documentElement,"nprogress-busy");var E=document.createElement("div");E.id="nprogress",E.innerHTML=i.template;var y=E.querySelector(i.barSelector),S=m?"-100":s(r.status||0),x=document.querySelector(i.parent),T;return u(y,{transition:"all 0 linear",transform:"translate3d("+S+"%,0,0)"}),i.showSpinner||(T=E.querySelector(i.spinnerSelector),T&&v(T)),x!=document.body&&p(x,"nprogress-custom-parent"),x.appendChild(E),E},r.remove=function(){b(document.documentElement,"nprogress-busy"),b(document.querySelector(i.parent),"nprogress-custom-parent");var m=document.getElementById("nprogress");m&&v(m)},r.isRendered=function(){return!!document.getElementById("nprogress")},r.getPositioningCSS=function(){var m=document.body.style,E="WebkitTransform"in m?"Webkit":"MozTransform"in m?"Moz":"msTransform"in m?"ms":"OTransform"in m?"O":"";return E+"Perspective"in m?"translate3d":E+"Transform"in m?"translate":"margin"};function a(m,E,y){return m<E?E:m>y?y:m}function s(m){return(-1+m)*100}function l(m,E,y){var S;return i.positionUsing==="translate3d"?S={transform:"translate3d("+s(m)+"%,0,0)"}:i.positionUsing==="translate"?S={transform:"translate("+s(m)+"%,0)"}:S={"margin-left":s(m)+"%"},S.transition="all "+E+"ms "+y,S}var h=(function(){var m=[];function E(){var y=m.shift();y&&y(E)}return function(y){m.push(y),m.length==1&&E()}})(),u=(function(){var m=["Webkit","O","Moz","ms"],E={};function y(L){return L.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,function(D,K){return K.toUpperCase()})}function S(L){var D=document.body.style;if(L in D)return L;for(var K=m.length,V=L.charAt(0).toUpperCase()+L.slice(1),ae;K--;)if(ae=m[K]+V,ae in D)return ae;return L}function x(L){return L=y(L),E[L]||(E[L]=S(L))}function T(L,D,K){D=x(D),L.style[D]=K}return function(L,D){var K=arguments,V,ae;if(K.length==2)for(V in D)ae=D[V],ae!==void 0&&D.hasOwnProperty(V)&&T(L,V,ae);else T(L,K[1],K[2])}})();function f(m,E){return(typeof m=="string"?m:w(m)).indexOf(" "+E+" ")>=0}function p(m,E){var y=w(m),S=y+E;f(y,E)||(m.className=S.substring(1))}function b(m,E){var y=w(m),S;f(m,E)&&(S=y.replace(" "+E+" "," "),m.className=S.substring(1,S.length-1))}function w(m){return(" "+(m.className||"")+" ").replace(/\s+/gi," ")}function v(m){m&&m.parentNode&&m.parentNode.removeChild(m)}return r})})),Mb=Fi(Sb(),1),xb=/^blob:(.+?)\/(.+)$/;function Ib(e){return/^data:image\/(png|jpg|jpeg|gif|svg)/.test(e)}function Cb(e){return xb.test(e)}function Ob(e,t){const r=e.replace(/[?&]forceReload=\d+$/,"");return`${r+(r.includes("?")?"&":"?")}forceReload=${t}`}function Tb(e){let t=1;const r=e?.match(/forceReload=(\d+)$/);return r?.at(1)&&(t=parseInt(r[1],10)+1),t}function fh(e,t){Ee(`Reloading Page ${e}`,t);const r=pe("images")?.[e]?.src;if(!r)return;const i=Tb(r);i>Y("maxReload")||(t?.removeAttribute("src"),Ib(r)||Cb(r)?t?.setAttribute("src",r):t?.setAttribute("src",Ob(r,i)))}function Lb(e){const t=e.currentTarget,r=parseInt(t.value,10),i=pe("images")?.[r]?.ref?.value;i&&fh(r,i)}function Rb(e){const t=e.currentTarget;Dn(parseInt(t.value,10),r=>({hide:!r.hide}))}function Pb(e){const t=e.currentTarget;Dn(parseInt(t.id.replace("PageImg",""),10),h=>({...Y0({naturalWidth:t.naturalWidth,naturalHeight:t.naturalHeight}),status:"loaded",doublePage:t.naturalWidth>t.naturalHeight}));const r=pe("manga"),i=pe("images")||{},a=Me.default.keys(i).filter(h=>{const u=parseInt(h,10);return u>=(r?.begin??1)&&u<=(r?.pages??1)&&i[u]?.status==="loaded"}).length,s=(r?.pages??1)-((r?.begin??1)-1),l=Math.floor(a/s*100);document.title=`(${l}%) ${pe("manga")?.title}`,Mb.default.configure({showSpinner:!1}).set(a/s),Ee(`Progress: ${l}%`),a===s&&(Ee("Images Loading Complete"),Pe("download","available"),Y("downloadZip")&&B0())}function $b(e){const t=e.currentTarget;if(As(t.getAttribute("src")))return;const r=parseInt(t.id.replace("PageImg",""),10);Dn(r,()=>({status:"error"})),fh(r,t)}function Db(e){const t=e.currentTarget,r=parseInt(t.value,10),i=pe("images"),a=pe("images")?.[r];a?.naturalWidth&&Pe("images",{...i,[r]:{...a,width:(a?.width||a?.naturalWidth)*(1+Y("zoomStep")/100),height:void 0}})}function zb(e){const t=e.currentTarget,r=parseInt(t.value,10),i=pe("images"),a=pe("images")?.[r];a?.naturalWidth&&Pe("images",{...i,[r]:{...a,width:(a?.width||a?.naturalWidth)*(1-Y("zoomStep")/100),height:void 0}})}function Bb(e){const t=e.currentTarget,r=parseInt(t.value,10),i=pe("images"),a=pe("images")?.[r];a&&Pe("images",{...i,[r]:{...a,width:void 0,height:void 0}})}function Nb(e){const t=e.currentTarget,r=parseInt(t.value,10),i=pe("images"),a=pe("images")?.[r];a&&Pe("images",{...i,[r]:{...a,width:window.innerWidth+(Y("navbar")==="left"||Y("navbar")==="right"?-34:0),height:void 0}})}function Fb(e){const t=e.currentTarget,r=parseInt(t.value,10),i=pe("images"),a=pe("images")?.[r];a&&Pe("images",{...i,[r]:{...a,width:void 0,height:window.innerHeight+(Y("navbar")==="bottom"?-34:0)}})}function Hb(e){const t=pe("images")?.[e],r=Y("viewMode").match(/^(Book|Manga)$/),i=Y("viewMode")==="Gallery",a=Y("viewMode").startsWith("Fluid"),s=Y("navbar")==="bottom";return{width:t?.width?`${t.width}px`:"auto",height:t?.height?`${t.height}px`:"auto","max-height":a?`${window.innerHeight+(s?-34:0)}px`:void 0,"min-width":!r&&!i?`${Y("minZoom")}vw`:void 0}}var Gb=(e,t)=>yi(e,t).map(r=>{pe("images")?.[r]?.ref||Dn(r,u=>({ref:Rs()}));let i=0;for(let u=r-1;u>=t&&!pe("images")?.[u].doublePage;u--)pe("images")?.[u].doublePage||i++;const a=pe("images")?.[r].doublePage??!1,s=Y("viewMode")==="Book",l=!a&&(s?i%2===0:i%2===1),h=!a&&(s?i%2===1:i%2===0);return ue`
      <div
        id="Page${r}"
        class="${Tt({MangaPage:!0,hide:!!pe("images")?.[r].hide,DoublePage:a,LeftPage:l&&!a,RightPage:h&&!a})}"
      >
        <div class="PageFunctions">
          <button
            class="Bookmark PageButton"
            title="${q("BOOKMARK")}"
            @click=${th}
            value="${r}"
          >
            ${lo()?i3:o3}
          </button>
          <button
            class="ZoomIn PageButton"
            title="${q("ZOOM_IN")}"
            @click=${Db}
            value="${r}"
          >
            ${h3}
          </button>
          <button
            class="ZoomRestore PageButton"
            title="${q("ZOOM_RESET")}"
            @click=${Bb}
            value="${r}"
          >
            ${d3}
          </button>
          <button
            class="ZoomOut PageButton"
            title="${q("ZOOM_OUT")}"
            @click=${zb}
            value="${r}"
          >
            ${f3}
          </button>
          <button
            class="ZoomHeight PageButton"
            title="${q("ZOOM_HEIGHT")}"
            @click=${Fb}
            value="${r}"
          >
            ${n3}
          </button>
          ${Y("viewMode").match(/^(Book|Manga)$/)?ue`
            <button
              class="DoublePage PageButton"
              title="${q("DOUBLE_PAGE")}"
              @click=${()=>{Dn(r,u=>({doublePage:!u.doublePage}))}}
              value="${r}"
            >
              ${u3}
            </button>`:ue`
              <button
                class="ZoomWidth PageButton"
                title="${q("ZOOM_WIDTH")}"
                @click=${Nb}
                value="${r}"
              >
                ${r3}
              </button>`}
          <button
            class="Hide PageButton"
            title="${q("HIDE")}"
            @click=${Rb}
            value="${r}"
          >
            ${pe("images")?.[r].hide?s3:l3}
          </button>
          <button
            class="Reload PageButton"
            title="${q("RELOAD")}"
            @click=${Lb}
            value="${r}"
          >
            ${c3}
          </button>
          <span class="PageIndex">${r}</span>
        </div>
        <div class="PageContent">
          <img
            id="PageImg${r}"
            alt="Page ${r}"
            class="${Tt({PageImg:!0,imgBroken:pe("images")?.[r]?.status==="error"})}"
            src=${pe("images")?.[r]?.src??Be}
            style="${Wn(Hb(r))}"
            @load=${Pb}
            @error=${$b}
            ${$s(pe("images")?.[r].ref)}
          />
        </div>
      </div>
      <div class="separator">
        [ ${r===e?q("END"):`${r} / ${e}`} ]
      </div>
    `}),Wb=e=>ue`
  <main
    id="Chapter"
    ${$s(pe("chapter"))}
    class="${Tt({fitWidthIfOversize:Y("fitWidthIfOversize"),[Y("viewMode")]:!0,separator:Y("viewMode")==="Vertical"})}"
    @wheel=${t=>{Y("viewMode")==="FluidLTR"?ih(t):Y("viewMode")==="FluidRTL"&&H6(t)}}
  >
    ${Gb(e.pages,e.begin??0)}
  </main>
`,Ub=":root:not(.light,.dark){--theme-body-background:#25262b;--theme-body-text-color:#c1c2c5;--theme-text-color:#c1c2c5;--theme-primary-color:#1a1b1e;--theme-primary-text-color:#c1c2c5;--theme-background-color:#25262b;--theme-hightlight-color:#2c2e33;--theme-border-color:#373a40;--theme-secondary-color:#2c2e33;--theme-secondary-text-color:#c1c2c5}:host{box-sizing:border-box}#MangaOnlineViewer{color:var(--theme-body-text-color);background-color:var(--theme-body-background);box-sizing:border-box;min-height:100vh;text-decoration:none}#Chapter{box-sizing:border-box;grid-template-columns:repeat(1,1fr);min-width:225px;display:grid}#Chapter.Vertical:has(+#Navigation:not(.disabled)),#Chapter.WebComic:has(+#Navigation:not(.disabled)){padding-bottom:31px}#Chapter.Vertical .PageContent{margin-top:8px;margin-bottom:8px}.closeButton{width:fit-content;height:fit-content;position:absolute;top:10px;right:10px}.overlay{z-index:950;cursor:pointer;background-color:#00000080;width:100%;height:100%;display:none;position:fixed;inset:0}.overlay.visible{display:block}select{height:20px;margin:2px}:not(.FluidRTL,.FluidLTR).fitWidthIfOversize .PageContent .PageImg{object-fit:contain;max-width:100%}.hideControls .PageFunctions{visibility:hidden}",Vb="@keyframes spin{to{transform:rotate(360deg)}}@keyframes spin-reverse{0%{transform:rotate(360deg)}to{transform:rotate(0)}}.icon-tabler-loader-2,.animate-spin{animation:1s linear infinite spin}.animate-spin-reverse{animation:1s linear infinite spin-reverse}",Zb="#Chapter:where(.Book,.Manga){grid-template-columns:1fr 1fr;grid-auto-flow:row;gap:0;width:100%;min-width:auto;display:grid}#Chapter:where(.Book,.Manga) .MangaPage{width:100%;min-height:22px;display:block;position:relative;overflow:hidden}#Chapter:where(.Book,.Manga) .MangaPage .PageFunctions{border-radius:0 0 0 4px;flex-direction:row;top:0;left:auto;right:0}#Chapter:where(.Book,.Manga) .MangaPage.LeftPage .PageFunctions{border-radius:0 0 4px;flex-direction:row-reverse;left:0;right:auto}#Chapter:where(.Book,.Manga) .MangaPage.DoublePage{grid-column:span 2}#Chapter:where(.Book,.Manga) .MangaPage .PageContent{flex-shrink:0;justify-content:center;align-items:center;display:flex;overflow:hidden}#Chapter:where(.Book,.Manga) .MangaPage.LeftPage .PageContent{justify-content:flex-end;padding-right:0}#Chapter:where(.Book,.Manga) .MangaPage.RightPage .PageContent{justify-content:flex-start;padding-left:0}#Chapter:where(.Book,.Manga) .MangaPage.DoublePage .PageContent{justify-content:center}#Chapter.Manga{direction:rtl}#Chapter.Manga .MangaPage{direction:ltr}",qb="#Chapter.FluidLTR,#Chapter.FluidRTL{min-width:auto;display:flex;overflow-x:auto;& .ZoomWidth{display:none}& .PageImg{min-width:unset}& .MangaPage{width:initial;min-width:fit-content;position:relative}& .MangaPage.DoublePage{grid-column:span 2}}#Chapter.FluidLTR{flex-direction:row;& .MangaPage .PageFunctions{direction:rtl;left:0;right:auto}}#Chapter.FluidRTL{flex-direction:row-reverse}",jb="#Chapter.Gallery{flex-wrap:wrap;justify-content:center;gap:10px;padding:10px;display:flex}.Gallery .MangaPage{width:auto;min-width:unset;flex:0 auto}.Gallery .MangaPage .PageContent .PageImg{min-width:unset}.Gallery .PageFunctions,.Gallery .separator{display:none}",Kb='.PageButton .icon-tabler{vertical-align:sub;width:1rem;height:1rem}.PageButton,.PageButton:visited,.PageButton:link{cursor:pointer;min-height:32px;color:var(--mov-color-on-loud);background-color:var(--mov-color-fill-loud);border-style:solid;border-width:1px;border-color:var(--theme-border-color);border-radius:5px;padding:2px;text-decoration:none}.PageButton:active,.PageButton:hover{opacity:.8}.PageButton[selected]{background-color:var(--mov-color-fill-normal);color:var(--mov-color-on-normal);border:1px solid var(--theme-border-color)}.PageButton.hidden{display:none}.MangaPage{text-align:center;width:100%;min-width:100%;min-height:22px;line-height:0;display:inline-block}.PageContent{text-align:center;max-width:100%;height:100%;transition:all .3s ease-in-out;display:inline-block;overflow:auto hidden}.MangaPage.hide .PageContent{height:0}.PageContent .PageImg[src=""],.PageContent .PageImg:not([src]),.PageContent .PageImg.imgBroken{background-position:50%;background-repeat:no-repeat;background-size:20%;background-color:var(--theme-hightlight-color);text-align:center;vertical-align:top;width:40vw;height:80vh;color:var(--theme-text-color);min-width:40vw;max-width:100%;min-height:50vh;max-height:100%;margin:0;font-size:1rem;line-height:80vh;display:inline-block;position:relative}.PageContent .PageImg[src=""]:before,.PageContent .PageImg:not([src]):before,.PageContent .PageImg.imgBroken:before{content:attr(alt);white-space:pre-wrap;text-align:center;color:var(--theme-text-color);font-size:1rem;position:absolute;top:40%;left:50%;transform:translate(-50%,-50%)}.PageFunctions{justify-content:flex-end;align-items:center;gap:3px;margin:0;padding:0;font-family:monospace;display:flex;position:absolute;right:0}.PageFunctions>.PageIndex{background-color:var(--mov-color-fill-loud);color:var(--mov-color-on-loud);text-align:center;border-radius:5px;min-width:20px;padding:3px 5px;line-height:1rem;display:inline-block}.PageFunctions .PageButton{opacity:.5;border-width:0;justify-content:center;align-items:center;min-height:auto;margin:0;padding:3px;display:flex}.PageFunctions:hover .PageButton{opacity:1}.PageFunctions .PageButton:hover{opacity:.9}#Chapter.Vertical .separator{text-align:center;align-items:center;font-style:italic;display:flex}#Chapter.Vertical .separator:before,#Chapter.Vertical .separator:after{content:"";border-bottom:1px solid var(--theme-text-color);flex:1}#Chapter.Vertical.separator:not(:empty):before{margin-right:.25em}#Chapter.Vertical.separator:not(:empty):after{margin-left:.25em}#Chapter:not(.separator) .separator,#Chapter:not(.Vertical) .separator{display:none}',Yb="html{font-size:100%}body{color:var(--theme-body-text-color);background-color:var(--theme-body-background);margin:0;padding:0;font-family:Helvetica Neue,Helvetica,Arial,sans-serif;font-size:14px;line-height:20px}a,a:link,a:visited,a:active,a:focus{color:var(--theme-body-text-color);text-decoration:none}img{vertical-align:middle;border:0;height:auto}",Xb=Du`
  .PageContent .PageImg[src=''],
  .PageContent .PageImg:not([src]) {
    background-image: url('${di(Ml)}');
  }

  .PageContent .PageImg.imgBroken {
    background-image: url('${di(xl)}');
  }

  ${Yb}
  ${Ub}
  ${Kb}
  ${qb}
  ${Zb}
  ${jb}
  ${nh}
  ${Vb}
`,Jb=(e="#MangaOnlineViewer",t=Y("theme"))=>{const r=$0(t),i=yo(t),a=Y("colorScheme")==="dark"?r[8]:r[2];return Du`
    :where(:root),
    ${e}, .dark,
    ${e}.dark {
      --theme-primary-color: ${t};
      --theme-primary-text-color: ${i};
      --theme-secondary-color: ${a};
      --theme-secondary-text-color: ${yo(a)};

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
  `},Qb="#StartMOV{all:revert;backface-visibility:hidden;color:#fff;cursor:pointer;text-align:center;z-index:105000;background-image:linear-gradient(90deg,#667eea,#764ba2,#6b8dd6,#8e37d7);background-size:300% 100%;border:none;border-radius:10px;width:80%;min-height:50px;margin:0 auto;padding:.5rem 1rem;font-size:2rem;transition:all .4s ease-in-out;position:fixed;bottom:0;left:0;right:0;box-shadow:0 4px 15px #744fa8bf}#StartMOV:hover{background-position:100% 0;transition:all .4s ease-in-out}#StartMOV:focus{outline:none}",xo=class extends et{constructor(...t){super(...t),this.mangaPages=0,this.begin=1,this.timeoutMs=3e3,this.status="initial-prompt"}static{this.styles=[Xt(Qb)]}connectedCallback(){super.connectedCallback(),this.status==="initial-prompt"&&(this.timeoutId=window.setTimeout(()=>{this.handleStart()},this.timeoutMs))}disconnectedCallback(){super.disconnectedCallback(),window.clearTimeout(this.timeoutId)}handleStart(){window.clearTimeout(this.timeoutId),this.dispatchEvent(new CustomEvent("start",{detail:null}))}handleLateStart(t,r){this.dispatchEvent(new CustomEvent("start",{detail:{begin:t,end:r}}))}handleButtonCLick(){this.status="late-start-prompt"}handleDialogClose(t){t.stopPropagation(),window.clearTimeout(this.timeoutId),this.status="late-start-button"}render(){switch(this.status){case"late-start-button":return this.renderLateStartButton();case"late-start-prompt":return this.renderLateStartPrompt();default:return this.renderInitialPrompt()}}renderInitialPrompt(){return ue`
      <mov-dialog
        ?open=${this.status==="initial-prompt"}
        icon="info"
        @close=${this.handleDialogClose}
      >
        <span slot="label">${q("STARTING")}</span>
        <div style="padding: 1rem;">${q("WAITING")}</div>
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
    `}renderLateStartButton(){return ue`
      <button
        id="StartMOV"
        @click=${this.handleButtonCLick}
      >
        ${q("BUTTON_START")}
      </button>
    `}renderLateStartPrompt(){let t=this.begin,r=this.mangaPages;const i=a=>{[t,r]=[a.detail.value1,a.detail.value2]};return ue`
      <mov-dialog
        ?open=${this.status==="late-start-prompt"}
        icon="question"
        @close=${this.handleDialogClose}
      >
        <span slot="label">${q("STARTING")}</span>
        <div style="padding: 1rem;">
          ${q("CHOOSE_BEGINNING")}
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
              data="${yi(this.mangaPages).join(", ")}"
              marks="true"
              marks-count="11"
              marks-values-count="11"
              generate-labels="true"
              slider-width="100%"
              pointers-overlap="false"
              generate-labels-text-color="var(--mov-color-on-loud)"
              @change=${i}
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
    `}};G([oe({type:Number,reflect:!0})],xo.prototype,"mangaPages",void 0),G([oe({type:Number,reflect:!0})],xo.prototype,"begin",void 0),G([oe({type:Number})],xo.prototype,"timeoutMs",void 0),G([oe({type:String,reflect:!0})],xo.prototype,"status",void 0),xo=G([ht("script-startup")],xo);function e9(e){if(!e?.parentNode)return e;const t=e.cloneNode(!0);return e.parentNode.replaceChild(t,e),t}var t9=e=>{e.getAttributeNames().forEach(t=>{e?.removeAttribute(t)})},n9=(...e)=>{e?.forEach(t9),e?.forEach(e9)};function r9(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var ph,Ra=class extends et{constructor(...t){super(...t),this.loadMode="wait"}static{this.styles=[Ot``,Xt(Xb)]}async start(t,r){this.manga&&(n9(document.documentElement,document.head,document.body),window.scrollTo(0,0),Pe("manga",{...this.manga,begin:t??this.manga.begin,pages:r??this.manga.pages}),document.documentElement.setAttribute("mov",""))}firstUpdated(){this.loadMode==="always"&&this.start(),Ab(),yb()}render(){const t=pe("manga"),r=pe("dialog");return ue`
      <style>
        ${Jb()}
      </style>
      <div
        id="MangaOnlineViewer"
        class="${Tt({[Y("colorScheme")]:!0,hideControls:Y("hidePageControls"),bookmarked:!!lo(),[pe("device")]:!0})}"
        style="${Wn({[`padding-${Y("navbar")}`]:"34px"})}"
        .locale="${Y("locale")}"
      >
        ${t?ue`
              <reader-header .manga=${t}></reader-header>
              ${Wb(t)}
              <navbar-thumbnails
                      .mode=${Y("navbar")}
                    ></navbar-thumbnails>
              <manga-pagination
                      .mode="${Y("pagination")}"
                      .startPage=${t.begin}
                      .totalPages=${t.pages}
                      .currentPage=${pe("currentPage")}
                      .next=${t.next}
                      .prev=${t.prev}
                    ></manga-pagination>
              <keybindings-panel></keybindings-panel>
              <bookmark-panel></bookmark-panel>
              <settings-panel></settings-panel>
              <moaqz-toaster dismissable></moaqz-toaster>
              </div>`:ue(ph||(ph=r9([` <script-startup
              .mangaPages="`,`"
              begin="`,`"
              initialStatus="`,`"
              @start=`,`
            ><\/script-startup>`])),this.manga?.pages,this.manga?.begin,D0(this.loadMode,[["wait",()=>"initial-prompt"],["never",()=>"late-start-button"]]),i=>{this.start(i.detail?.begin,i.detail?.end)})}
        ${r?ue`
              <mov-dialog
                open
                .icon=${r.icon}
                @close=${()=>Pe("dialog",null)}
              >
                <span slot="label">${r.title}</span>
                ${r.content} ${r.footer}
              </mov-dialog>
            `:""}
      </div>
    `}};G([oe({type:String,reflect:!0})],Ra.prototype,"loadMode",void 0),G([oe({type:Object})],Ra.prototype,"manga",void 0),Ra=G([ht("manga-online-viewer"),(0,Mo.useStores)(St,ao,Yt)],Ra);var Bl="@moaqzdev/toast",o9=class ks extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static#e=3e3;parseDuration(t){if(t==="none"||Number.isInteger(t)&&t>ks.#e)return t;const r=this.getAttribute("duration");if(r){const i=Number.parseInt(r);if(!Number.isNaN(i))return i}return ks.#e}async createToast({title:t,type:r,description:i,onConfirm:a,onCancel:s,confirmText:l="✅",cancelText:h="❌",duration:u}){const f=this.shadowRoot.querySelector("#toast-tmpl").content.cloneNode(!0),p={container:f.querySelector("[data-toast]"),title:f.querySelector("[data-title]"),description:f.querySelector("[data-description]"),actions:f.querySelector("[data-actions]"),confirmBtn:f.querySelector("button[data-action-type='confirm']"),cancelBtn:f.querySelector("button[data-action-type='cancel']"),closeBtn:f.querySelector("[data-close-button]")};u=this.parseDuration(u),p.title.textContent=t||"",p.container.setAttribute("data-type",r),i==null?p.description?.remove():p.description.textContent=i;const b=()=>this.removeToast(p.container);if(r==="confirm"?(p.confirmBtn.textContent=l,p.confirmBtn.addEventListener("click",()=>{a?.(),b()},{once:!0}),p.cancelBtn.textContent=h,p.cancelBtn.addEventListener("click",()=>{s?.(),b()},{once:!0})):p.actions?.remove(),this.hasAttribute("dismissable")?p.closeBtn.addEventListener("click",b,{once:!0}):p.closeBtn?.remove(),this.shadowRoot.querySelector("[data-toaster]").appendChild(f),u!=="none"){const w=new AbortController,v=Date.now();let m=null,E=0;const y=()=>{w.abort(),b()};let S=setTimeout(y,u);const x=()=>{m??(clearTimeout(S),m=Date.now())},T=()=>{m!=null&&(E=m-v,m=null,S=setTimeout(y,Math.max(u-E,0)))};["focusin","pointerenter","mouseenter"].forEach(L=>{p.container.addEventListener(L,x,{signal:w.signal})}),["focusout","pointerleave","mouseleave"].forEach(L=>{p.container.addEventListener(L,T,{signal:w.signal})})}}removeToast(t){t.animate([{opacity:1},{opacity:0}],{duration:300,easing:"ease",fill:"forwards"}).finished.then(()=>t.remove())}handleEvent(t){if(t instanceof CustomEvent&&t.type===Bl){const r=t.detail;this.createToast(r)}}connectedCallback(){this.render(),document.addEventListener(Bl,this)}disconnectedCallback(){document.removeEventListener(Bl,this)}render(){this.shadowRoot.innerHTML=`
    <style>${ks.STYLES}</style>

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
  }`};customElements.define("moaqz-toaster",o9);var i9=`/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */
html{-webkit-text-size-adjust:100%;line-height:1.15}body{margin:0}main{display:block}h1{margin:.67em 0;font-size:2em}hr{box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace;font-size:1em}a{background-color:#0000}abbr[title]{border-bottom:none;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace;font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}img{border-style:none}button,input,optgroup,select,textarea{margin:0;font-family:inherit;font-size:100%;line-height:1.15}button,input{overflow:visible}button,select{text-transform:none}button,[type=button],[type=reset],[type=submit]{-webkit-appearance:button}button::-moz-focus-inner{border-style:none;padding:0}[type=button]::-moz-focus-inner{border-style:none;padding:0}[type=reset]::-moz-focus-inner{border-style:none;padding:0}[type=submit]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring{outline:1px dotted buttontext}[type=button]:-moz-focusring{outline:1px dotted buttontext}[type=reset]:-moz-focusring{outline:1px dotted buttontext}[type=submit]:-moz-focusring{outline:1px dotted buttontext}fieldset{padding:.35em .75em .625em}legend{box-sizing:border-box;color:inherit;white-space:normal;max-width:100%;padding:0;display:table}progress{vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button{height:auto}[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details{display:block}summary{display:list-item}template,[hidden]{display:none}`,a9="#nprogress{pointer-events:none}#nprogress .bar{z-index:1031;background:#29d;width:100%;height:2px;position:fixed;top:0;left:0}#nprogress .peg{opacity:1;width:100px;height:100%;display:block;position:absolute;right:0;transform:rotate(3deg)translateY(-4px);box-shadow:0 0 10px #29d,0 0 5px #29d}#nprogress .spinner{z-index:1031;display:block;position:fixed;top:15px;right:15px}#nprogress .spinner-icon{box-sizing:border-box;border:2px solid #0000;border-color:#29d #0000 #0000 #29d;border-radius:50%;width:18px;height:18px;animation:.4s linear infinite nprogress-spinner}.nprogress-custom-parent{position:relative;overflow:hidden}.nprogress-custom-parent #nprogress .spinner,.nprogress-custom-parent #nprogress .bar{position:absolute}@-webkit-keyframes nprogress-spinner{0%{-webkit-transform:rotate(0)}to{-webkit-transform:rotate(360deg)}}@keyframes nprogress-spinner{0%{transform:rotate(0)}to{transform:rotate(360deg)}}",s9="#nprogress .bar{z-index:1031;background:#29d;width:100%;height:4px;position:fixed;top:0;left:0}html[mov] body>:not(manga-online-viewer,#nprogress){display:none!important}html[mov]{all:unset;font-size:16px}",l9=[i9,a9,s9].join(`
`);async function gh([e,t]){Ee(`Found Pages: ${t.pages} in ${e?.name}`),t.title||(t.title=document.querySelector("title")?.textContent?.trim()),t.begin=lo()??t.begin??1,t.before!==void 0&&(_n("Executing Preparation"),await t.before(t.begin??0)),document.head.innerHTML+=K3("externals",l9);const r=document.createElement("manga-online-viewer");r.loadMode=e?.start??Y("loadMode"),r.manga=t,document.body.appendChild(r)}async function c9(e){if(Ee(`Starting ${Es.script.name} ${Es.script.version} on ${Wo()} ${d2()} with ${h2()}`),hm())return;Ee(e.length,"Known Manga Sites:",e);const t=e.filter(i=>i.url.test(window.location.href));Ee(t.length,"Found sites:",t);const r=t.map(async i=>{Ee(`Testing site: ${i.name}`),await _2(i);const a=await i.run();if(a.pages>0)return[i,a];throw new Error(`${i.name} found ${a.pages} pages`)});try{gh(await Promise.any(r))}catch(i){if(i instanceof AggregateError){Ee("All sites failed to run:");for(const a of i.errors)Ee(a.message)}else Ee("An unexpected error occurred:",i)}}var u9={eq:(e,t)=>e.textContent?.trim()===t,starts:(e,t)=>!!e.textContent?.trim()?.startsWith(t),ends:(e,t)=>!!e.textContent?.trim()?.endsWith(t)};function mh(e,t,r){const i=u9[r];if(!i)throw new Error(`Invalid matcherKey: ${r}`);return[...document.querySelectorAll(e)].filter(a=>Me.default.castArray(t).some(s=>i(a,s)))}function vh(e,t,r){return mh(e,t,r)?.[0]}function Nl(e,t,r,i="a"){return vh(e,t,r)?.closest(i)??null}var bh=(e,t)=>mh(e,t,"eq"),d9=(e,t)=>vh(e,t,"starts"),jr=(e,t,r="a")=>Nl(e,t,"eq",r),h9=(e,t,r="a")=>Nl(e,t,"starts",r),f9=(e,t,r="a")=>Nl(e,t,"ends",r),p9={name:"Asura Scans",url:/https?:\/\/(www.)?(asuracomic).(net)\/.+/,homepage:"https://asuracomic.net/",language:[$e.ENGLISH],category:Ne.MANGA,waitEle:'img[alt*="chapter"]',waitTime:2e3,run(){const e=[...document.querySelectorAll('img[alt*="chapter"]')],t=d9("p","All chapters are in");return{title:t?.previousSibling?.textContent?.trim(),series:t?.querySelector("a")?.getAttribute("href"),pages:e.length,prev:jr("h2","Prev","a")?.getAttribute("href"),next:jr("h2","Next","a")?.getAttribute("href"),listImages:e.map(r=>r.getAttribute("src")??""),async before(){document.querySelectorAll("button.absolute").forEach(r=>{r.dispatchEvent(new Event("click",{bubbles:!0}))}),await w2(1e3)}}}},g9={name:"Batoto",url:/https?:\/\/(?:www\.)?(?:fto|jto|hto|dto|mto|wto|bato|battwo|batotwo|comiko|batocomic|readtoto|zbato|xbato|mangatoto)\.(?:to|com|net|org)\/(chapter|title).*/,homepage:"https://rentry.co/batoto",language:[$e.ENGLISH],category:Ne.MANGA,waitEle:'div[name="image-item"] img, .page-img',run(){if(window.location.pathname.startsWith("/title")){window.location.search!=="?load=2"&&(window.location.search="?load=2");const t=[...document.querySelectorAll('div[name="image-item"] img')];return{title:document.querySelector("h6")?.textContent?.trim(),series:document.querySelector("h3 a")?.getAttribute("href"),pages:t.length,prev:f9("span","Prev Chapter","a")?.getAttribute("href"),next:h9("span","Next Chapter","a")?.getAttribute("href"),listImages:t.map(r=>r.getAttribute("src")??"")}}const e=[...document.querySelectorAll(".page-img")];return{title:document.querySelector(".nav-title a")?.textContent?.trim(),series:document.querySelector(".nav-title a")?.getAttribute("href"),pages:e.length,prev:document.querySelector(".nav-prev a")?.getAttribute("href"),next:document.querySelector(".nav-next a")?.getAttribute("href"),listImages:e.map(t=>t.getAttribute("src")??"")}}},m9={name:"BilibiliComics",url:/https?:\/\/(www\.)?(bilibilicomics).net\/episode\/.+/,homepage:"https://www.bilibilicomics.net/",language:[$e.ENGLISH],category:Ne.MANGA,waitEle:"#__NUXT_DATA__",async run(){const e=JSON.parse(document.querySelector("#__NUXT_DATA__")?.innerHTML??"").filter(t=>typeof t=="string"&&/.(png|jpg|jpeg|gif|bmp|webp)$/i.exec(t));return{title:document.querySelector(".chapterTitle")?.textContent?.trim(),series:document.querySelector(".book-name")?.getAttribute("href"),pages:e.length,prev:document.querySelectorAll(".pre-next-btns").item(0)?.getAttribute("href"),next:document.querySelectorAll(".pre-next-btns").item(2)?.getAttribute("href"),listImages:e.map(t=>`https://static.comicfans.io/${t}`)}}},v9={name:"Comick",url:/https?:\/\/(www\.)?comick.io\/.+/,homepage:"https://comick.io/",language:[$e.ENGLISH],category:Ne.MANGA,waitFunc(){return/\/([^/]+)-chapter.+$/.test(window.location.pathname)},waitEle:"#__NEXT_DATA__",waitTime:3e3,run(){const e=JSON.parse(document.getElementById("__NEXT_DATA__")?.innerHTML??"")?.props?.pageProps,t=e?.chapter?.md_images?.map(r=>`https://meo.comick.pictures/${r?.b2key}`);return{title:e?.seoTitle??`${e.chapter?.md_comics?.title} ${e?.chapter?.chap}`,series:`/comic/${e?.chapter?.md_comics?.slug}`,pages:t?.length,prev:e?.prev?.href,next:e?.next?.href,listImages:t}}},b9={name:"Comix.to",homepage:"https://comix.to/",url:/https?:\/\/comix\.to\/(title|comic)\/.+\/.+/,language:$e.ENGLISH,category:Ne.COMIC,run:()=>{const e=[...document.querySelectorAll("script")].find(i=>i.textContent?.includes("self.__next_f.push")&&i.textContent?.includes("images"))?.textContent||"",t=e.substring(e.indexOf('"')+3,e.lastIndexOf('"')-2),r=JSON.parse(t.replaceAll("\\",""))[3].chapter.images.map(i=>i.url);return{title:document.querySelector("h1.page-title")?.textContent?.trim(),series:document.querySelector('.breadcrumbs a[href*="/title/"], .breadcrumbs a[href*="/comic/"]')?.getAttribute("href"),pages:r.length,prev:document.querySelector("a.prev-chapter")?.getAttribute("href"),next:document.querySelector("a.next-chapter")?.getAttribute("href"),listImages:r}}},w9={name:"Dynasty-Scans",url:/https?:\/\/(www\.)?dynasty-scans.com\/chapters\/.+/,homepage:"https://dynasty-scans.com/",language:[$e.ENGLISH],category:Ne.MANGA,run(){return{title:document.querySelector("#chapter-title")?.textContent?.trim(),series:document.querySelector("#chapter-title a")?.getAttribute("href"),pages:unsafeWindow.pages.length,prev:document.querySelector("#prev_link")?.getAttribute("href"),next:document.querySelector("#next_link")?.getAttribute("href"),listImages:unsafeWindow.pages.map(e=>e.image)}}},_9={name:"Flame Comics",url:/https?:\/\/(www.)?(flamecomics).(xyz)\/series\/.+/,homepage:"https://flamecomics.xyz/",language:[$e.ENGLISH],category:Ne.MANGA,run(){const e="https://cdn.flamecomics.xyz/uploads/images/series",t=JSON.parse(document.getElementById("__NEXT_DATA__")?.innerHTML??""),r=t?.props?.pageProps?.chapter,i=Me.default.keys(r?.images).map(a=>`${e}/${r?.series_id}/${r?.token}/${r?.images?.[a]?.name}?${r?.unix_timestamp}`);return{title:`${r?.title} ${r?.chapter}`,series:`../${r?.series_id}`,pages:i.length,prev:t?.props?.pageProps?.previous,next:t?.props?.pageProps?.next,listImages:i}}},y9={name:["FoOlSlide","Kireicake"],url:/^(?!.*jaiminisbox).*\/read\/.+/,homepage:["https://github.com/saintly2k/FoOlSlideX","https://reader.kireicake.com"],language:[$e.ENGLISH],obs:"Any Site that uses FoOLSlide",category:Ne.MANGA,waitEle:"img.open",run(){const e=[...document.querySelectorAll(".topbar_left .dropdown_parent:last-of-type li")],t=e.findIndex(l=>{const h=l.querySelector("a")?.getAttribute("href");return h?window.location.href.startsWith(h):!1}),r=[...document.querySelectorAll(".topbar_right .dropdown li")],i=[...document.querySelectorAll(".inner img:not(.open)")],a=i.length>1?i.length:r.length,s={title:e.at(t)?.querySelector("a")?.textContent?.trim()??document.querySelector("title")?.textContent?.trim(),series:document.querySelector("div.tbtitle div.text a")?.getAttribute("href"),pages:a,prev:e.at(t+1)?.querySelector("a")?.getAttribute("href"),next:e.at(t-1)?.querySelector("a")?.getAttribute("href")};return i.length>1?{...s,listImages:i.map(l=>l.getAttribute("src")??"")}:{...s,listPages:Array(a).fill(0).map((l,h)=>`${window.location.href.replace(/\/\d+$/,"")}/${h+1}`),img:"img.open"}}},k9={name:["Ikigai Mangas - EltaNews","Ikigai Mangas - Ajaco"],url:/https?:\/\/(visorikigai|visualikigai).(ajaco|eltanews|foodib|jobswu).(com|net|site)\/capitulo\/\d+/,homepage:["https://visorikigai.eltanews.com/","https://visorikigai.ajaco.net/"],language:[$e.SPANISH],category:Ne.MANGA,run(){const e=document.querySelector('script[type="qwik/json"]')?.textContent?.match(/http[^'"]+webp/gi)??[];return{title:document.querySelector("title")?.text.replace(" — Manga en línea | MangaOni",""),pages:e?.length,prev:jr("span","Siguiente")?.getAttribute("href"),next:jr("span","Anterior")?.getAttribute("href"),listImages:e}}},E9=e=>new Promise(t=>setTimeout(t,e));async function A9(e){const t=document.querySelector(".reader-content"),r=new Set,i=2e3,a=200;if(!t)return console.error("Error: '.reader-content' container not found."),[];let s=0;for(;r.size<e&&s<a;){t.scrollTop+=i,s++,await E9(300);const l=document.querySelectorAll(".reader-page img");for(const h of l){const u=h.getAttribute("src");u&&u.length>0&&r.add(u)}if(console.log(`Attempt ${s}: Collected ${r.size} of ${e} sources.`),t.scrollHeight-t.clientHeight<=t.scrollTop&&r.size<e){console.warn(`Reached end of scrollable content. Stopping with ${r.size} sources.`);break}}return Array.from(r)}var S9={name:"Kagane",homepage:"https://kagane.org/",url:/https:\/\/(www\.)?kagane\.org\/series\/.+\/reader\/.+/,language:$e.ENGLISH,category:Ne.MANGA,waitEle:".reader-page img",async run(){const e=window.location.href,t=e.match(/series\/([^/]+)/)?.[1],r=e.match(/reader\/([^/]+)/)?.[1],i=localStorage.getItem("rsch_did"),a={};i&&(a["X-Rsch-Did"]=i);const s=await fetch(`https://api.kagane.org/api/v1/series/${t}`,{headers:a}).then(b=>b.json()),l=(await fetch(`https://api.kagane.org/api/v1/books/${t}`,{headers:a}).then(b=>b.json())).data.content,h=l.find(b=>b.id===r),u=l.findIndex(b=>b.id===r),f=l[u+1],p=l[u-1];return{title:`${s.data.name} - ${h?.metadata?.title}`,series:`/series/${t}`,pages:h?.media?.pagesCount??0,prev:f?`/series/${t}/books/${f.id}`:void 0,next:p?`/series/${t}/books/${p.id}`:void 0,listImages:await A9(h?.media?.pagesCount??0)}}},M9={name:"KuManga",url:/https?:\/\/(www\.)?kumanga.com\/manga\/leer\/.+/,homepage:"https://www.kumanga.com/",language:[$e.SPANISH],category:Ne.MANGA,run(){const e=document.querySelectorAll("select").item(1).querySelector("option[selected]");return{title:document.querySelector("title")?.textContent?.trim(),series:document.querySelector("h2 a")?.getAttribute("href"),pages:unsafeWindow.pUrl.length,prev:`/manga/leer/${e?.previousElementSibling?.getAttribute("value")}`,next:`/manga/leer/${e?.nextElementSibling?.getAttribute("value")}`,listImages:unsafeWindow.pUrl.map(t=>t.imgURL)}}},x9={name:"LeerCapitulo",url:/https?:\/\/(www.)?leercapitulo.co\/leer\/.+/,homepage:"https://www.leercapitulo.co/",language:[$e.SPANISH],category:Ne.MANGA,waitEle:"#page_select",run(){const e=[...document.querySelectorAll("#page_select option")].map(t=>t.getAttribute("value")??"");return{title:document.querySelector("h1")?.textContent?.trim(),series:document.querySelector(".chapter-title a")?.getAttribute("href"),pages:e.length,prev:document.querySelector(".pre")?.getAttribute("href"),next:document.querySelector(".next")?.getAttribute("href"),listImages:e}}},I9={name:"LHTranslation",url:/https?:\/\/(www\.)?lhtranslation.net\/read.+/,homepage:"https://lhtranslation.net/",language:[$e.ENGLISH],category:Ne.MANGA,run(){const e=document.querySelector(".form-control option:checked"),t=[...document.querySelectorAll("img.chapter-img")];return{title:document.querySelector(".chapter-img.tieude font")?.textContent?.trim(),series:document.querySelector(".navbar-brand.manga-name")?.getAttribute("href"),pages:t.length,prev:e?.nextElementSibling?.getAttribute("value"),next:e?.previousElementSibling?.getAttribute("value"),listImages:t.map(r=>r.getAttribute("src")??"")}}},C9={name:"M440",url:/https?:\/\/(www\.)?m440.in\/manga\/.+\/.+\/\d+/,homepage:"https://m440.in/",language:[$e.SPANISH],category:Ne.MANGA,run(){const e=[...document.querySelectorAll("#all img")],t=document.querySelector("#chapter-list li.active");return{title:document.querySelector("title")?.textContent?.trim(),series:document.querySelector("#navbar-collapse-1 ul:nth-child(2) a")?.getAttribute("href"),pages:e.length,prev:t?.nextElementSibling?.firstElementChild?.getAttribute("href"),next:t?.previousElementSibling?.firstElementChild?.getAttribute("href"),listImages:e.map(r=>r.getAttribute("data-src")??"")}}},wh=/^([\t\n])*(https?:\/\/)?.+\.(jpg|jpeg|png|gif|bmp|webp).*$/;function _h(){return[...document.querySelectorAll(".wp-manga-chapter-img, .blocks-gallery-item img, .reading-content img, #chapter-images img, #chapterContent img")].map(e=>{const t=[...e.attributes].filter(r=>/.*(src|url).*/i.test(r.name)&&!/^.*(blank|lazy|loading).*$/.test(r.value));return t.length===0?"":t.find(r=>wh.test(r.value))?.value??e?.getAttribute("src")??""})}var O9={name:["Madara WordPress Plugin","MangaHaus","Isekai Scan","Comic Kiba","Zinmanga","mangatx","Toonily","Mngazuki","JaiminisBox","DisasterScans","ManhuaPlus","TopManhua","NovelMic","Reset-Scans","LeviatanScans","Dragon Tea","SetsuScans","ToonGod","Hades Scans"],url:/https?:\/\/.+\/(manga|series|manhua|comic|ch|novel|webtoon|tmo)\/.+\/.+/,homepage:["https://mangabooth.com/","https://manhuaus.com","https://isekaiscan.com/","https://comickiba.com/","https://zinmanga.com/","https://mangatx.com/","https://toonily.net/","https://mangazuki.me/","https://jaiminisbox.net","https://disasterscans.com/","https://manhuaplus.org/","https://www.topmanhua.com/","https://novelmic.com/","https://reset-scans.com/","https://leviatanscans.com/","https://dragontea.ink/","https://setsuscans.com/","https://toongod.org/home/","https://lectorhades.latamtoon.com"],language:[$e.ENGLISH],obs:"Any Site that uses Madara WordPress Plugin",category:Ne.MANGA,waitFunc:()=>{const e=_h();return e.length>0&&e.every(t=>t&&wh.test(t))},run(){const e=_h();return{title:document.querySelector("#chapter-heading")?.textContent?.trim(),series:(document.querySelector(".breadcrumb li:nth-child(3) a")??document.querySelector(".breadcrumb li:nth-child(2) a"))?.getAttribute("href"),pages:e.length,prev:document.querySelector(".prev_page")?.getAttribute("href"),next:document.querySelector(".next_page")?.getAttribute("href"),listImages:e}}},T9={name:"MangaBall",homepage:"https://mangaball.net/",url:/https?:\/\/mangaball\.net\/chapter-detail\/.+/,language:$e.ENGLISH,category:Ne.MANGA,run:async()=>{const e=[...document.querySelectorAll("script")].find(f=>f.textContent?.includes("chapterImages"))?.textContent;if(!e)return{title:document.querySelector("h1")?.textContent?.trim(),series:document.querySelector('a[href*="/title-detail/"]')?.getAttribute("href")??document.querySelector('a[href*="/manga-detail/"]')?.getAttribute("href"),pages:0,listImages:[]};const t=e.match(/titleId\s*=\s*[`'"](.+?)[`'"]/)?.[1],r=e.match(/chapterNumber\s*=\s*[`'"](.+?)[`'"]/)?.[1],i=e.match(/chapterVolume\s*=\s*[`'"](.+?)[`'"]/)?.[1],a=e.match(/chapterLanguage\s*=\s*[`'"](.+?)[`'"]/)?.[1],s=JSON.parse(e.match(/chapterImages\s*=\s*JSON\.parse\(\s*[`'"](.+?)[`'"]\s*\)/)?.[1]??e.match(/chapterImages\s*=.*(\[.*?\])/)?.[1]??"[]"),l=document.querySelector('meta[name="csrf-token"]')?.getAttribute("content")||"",h=((await(await fetch("/api/v1/chapter/chapter-listing-by-title-id/",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded","X-CSRF-TOKEN":l},body:`title_id=${t}&lang=${a}`})).json()).ALL_CHAPTERS||[]).sort((f,p)=>p.number_float-f.number_float),u=f=>{const p=parseFloat(r||"0"),b=h.findIndex(E=>E.number_float===p);if(b===-1)return;const w=f==="next"?-1:1,v=b+w,m=String(i);for(let E=v;E>=0&&E<h.length;E+=w){const y=h[E].translations.find(S=>S.language===a&&String(S.volume)===m);if(y)return y.url}};return{title:document.querySelector("h1")?.textContent?.trim(),series:document.querySelector(`a[href*="${t}"]`)?.getAttribute("href")??document.querySelector('a[href*="/title-detail/"]')?.getAttribute("href")??document.querySelector('a[href*="/manga-detail/"]')?.getAttribute("href"),pages:s.length,prev:u("prev"),next:u("next"),listImages:s}}},L9={name:"MangaBuddy",url:/https?:\/\/(www\.)?mangabuddy.com\/.+\/chapter.+/,homepage:"https://mangabuddy.com/",language:[$e.ENGLISH],category:Ne.MANGA,waitVar:"chapImages",run(){const e=unsafeWindow.chapImages.split(",").map(t=>new URL(t).pathname.replace("/res/","https://sb.mbcdn.xyz/"));return{title:document.querySelector(".chapter-info")?.textContent?.trim(),series:document.querySelector("#breadcrumbs-container div:nth-child(2) a")?.getAttribute("href"),pages:e.length,prev:document.querySelector("a.prev")?.getAttribute("href"),next:document.querySelector("a.next")?.getAttribute("href"),listImages:e}}},R9={name:"MangaDex",url:/https?:\/\/(www\.)?mangadex.org/,homepage:"https://mangadex.org/",language:[$e.ENGLISH],category:Ne.MANGA,waitEle:"#chapter-selector a",async run(){const e=`https://api.mangadex.org/at-home/server/${/\/chapter\/([^/]+)(\/\d+)?/.exec(window.location.pathname)?.at(1)}`,t=await fetch(e).then(async a=>a.json()),r=t.chapter.data,i=document.querySelectorAll("#chapter-selector a");return{title:document.querySelector("title")?.text.replace(" - MangaDex",""),series:document.querySelector("a.text-primary[href^='/title/']")?.getAttribute("href"),pages:r.length,prev:i?.item(0)?.getAttribute("href"),next:i?.item(1)?.getAttribute("href"),listImages:r.map(a=>`${t.baseUrl}/data/${t.chapter.hash}/${a}`)}}},P9={name:["MangaFox","MangaHere"],url:/https?:\/\/(www\.)?(fanfox.net|mangahere.cc)\/manga\/.+\/.+\//,homepage:["https://fanfox.net/","https://www.mangahere.cc/"],language:[$e.ENGLISH],category:Ne.MANGA,waitVar:"chapterid",async run(){const e=document.querySelector("#dm5_key")?.getAttribute("value"),t={method:"GET",headers:{"Content-Type":"text/plain"}},r=Array(unsafeWindow.imagecount).fill(0).map(async(a,s)=>{const l=`chapterfun.ashx?cid=${unsafeWindow.chapterid??unsafeWindow.chapter_id}&page=${s}&key=${e}`,h=await fetch(l,t).then(async u=>u.text());return(0,eval)(h),d}),i=await Promise.all(r);return{title:document.querySelector(".reader-header-title div")?.textContent?.trim(),series:document.querySelector(".reader-header-title a")?.getAttribute("href"),pages:unsafeWindow.imagecount,prev:unsafeWindow.prechapterurl,next:unsafeWindow.nextchapterurl,listImages:i.map((a,s)=>a[s===0?0:1])}}},$9={name:"Mangago",url:/https?:\/\/(www\.)?mangago.me\/.*\/.*\/.*/,homepage:"https://www.mangago.me/",language:[$e.ENGLISH],category:Ne.MANGA,waitVar:"imgsrcs",run(){const e=CryptoJS.enc.Hex.parse("e11adc3949ba59abbe56e057f20f883e"),t={iv:CryptoJS.enc.Hex.parse("1234567890abcdef1234567890abcdef"),padding:CryptoJS.pad.ZeroPadding},r=CryptoJS.AES.decrypt(unsafeWindow.imgsrcs,e,t).toString(CryptoJS.enc.Utf8).split(",");return{title:`${unsafeWindow.manga_name} ${unsafeWindow.chapter_name}`,series:unsafeWindow.mid,pages:unsafeWindow.total_pages,prev:document.querySelector(".recom p:nth-child(5) a")?.getAttribute("href"),next:unsafeWindow.next_c_url,listImages:r,before(){r.some(i=>i==="")&&document.querySelector("#nform")?.submit()}}}},D9={name:"MangaHub",url:/https?:\/\/(www\.)?(mangahub).io\/chapter\/.+\/.+/,homepage:"https://mangahub.io/",language:[$e.ENGLISH],category:Ne.MANGA,waitEle:"#select-chapter",async run(){function e(s){const l=new RegExp(`${s}=([^;]+)`).exec(document.cookie);return l!=null?decodeURIComponent(l[1]):null}const t={query:`{chapter(x:m01,slug:"${unsafeWindow.CURRENT_MANGA_SLUG??window.location.pathname.split("/")[2]}",number:${window.location.pathname.split("/")[3].replace("chapter-","")}){pages}}`},r={method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json","x-mhub-access":e("mhub_access")??""}},i=await fetch("https://api.mghcdn.com/graphql",r).then(async s=>s.json()),a=JSON.parse(i?.data.chapter.pages.toString());return{title:document.querySelector("#mangareader h3")?.textContent?.trim(),series:document.querySelector("#mangareader a")?.getAttribute("href"),pages:a.i.length,prev:document.querySelector(".previous a")?.getAttribute("href"),next:document.querySelector(".next a")?.getAttribute("href"),listImages:a.i.map(s=>`https://imgx.mghcdn.com/${a.p+s}`)}}},z9={name:["MangaKakalot","NeloManga ","MangaNato","NatoManga","MangaBats"],url:/https?:\/\/(www\.)?(read|chap)?(nelomanga|mangakakalot|natomanga|manganato|mangabats|mangakakalove).(com|gg|net).*\/(chapter|manga)\/.+\/.+/,homepage:["https://mangakakalot.gg/","https://www.nelomanga.com/","https://www.manganato.gg/","https://www.natomanga.com/","https://www.mangabats.com/"],language:[$e.ENGLISH],category:Ne.MANGA,waitEle:".navi-change-chapter-btn-prev, .next, .navi-change-chapter-btn-next, .back",run(){const e=[...document.querySelectorAll("#vungdoc img, .container-chapter-reader img")];return{title:document.querySelector(".info-top-chapter h2, .imageOptions-chapter-info-top h1, .panel-chapter-info-top h1")?.textContent?.trim(),series:document.querySelectorAll("span a[title]").item(1).getAttribute("href"),pages:e.length,prev:document.querySelector(".navi-change-chapter-btn-prev, .next")?.getAttribute("href"),next:document.querySelector(".navi-change-chapter-btn-next, .back")?.getAttribute("href"),listImages:e.map(t=>t.getAttribute("src")??"")}}},B9={name:"MangaOni",url:/https?:\/\/(www\.)?manga-oni.com\/lector\/.+\/\d+\/cascada/,homepage:"https://manga-oni.com/",language:[$e.SPANISH],category:Ne.MANGA,run(){document.querySelector("#c_list")?.dispatchEvent(new Event("mouseover"));const e=document.querySelector("#c_list option:checked"),t=[...document.querySelectorAll("#slider img")];return{title:document.querySelector("title")?.text.replace(" — Manga en línea | MangaOni",""),pages:t?.length,prev:e?.nextElementSibling?.getAttribute("value"),next:e?.previousElementSibling?.getAttribute("value"),listImages:t.map(r=>r.getAttribute("data-src")??r.getAttribute("src")??"")}}},N9={name:"MangaPark",url:/https?:\/\/(www\.)?(mangapark|mpark|comicpark|readpark|parkmanga).(com|me|org|net|io|to)\/title\/.+\/.+/,homepage:"https://mangapark.net/",language:[$e.ENGLISH],category:Ne.MANGA,waitEle:"main div div a.btn-primary",run(){const e=[...document.querySelectorAll("main div div > img.w-full")];return{title:[...document.querySelectorAll(".comic-detail h3 a, .comic-detail h6 span")].map(t=>t.textContent?.trim()).join(" "),series:document.querySelector(".comic-detail a")?.getAttribute("href"),pages:e.length,prev:document.querySelectorAll("main div div a.btn-primary")?.item(0)?.getAttribute("href"),next:document.querySelectorAll("main div div a.btn-primary")?.item(1)?.getAttribute("href"),listImages:e.map(t=>t.getAttribute("src")??"")}}},F9={name:"MangaReader",url:/https?:\/\/(www\.)?mangareader.to\/read\/.+\/.+\/.+/,homepage:"https://mangareader.to",language:[$e.ENGLISH],category:Ne.MANGA,obs:"Some galleries will not be usable",waitEle:".ds-image, .iv-card",async run(){const e=document.querySelector(".chapter-item.active"),t=[...document.querySelectorAll(".ds-image[data-url], .iv-card[data-url]")].map(async r=>{const i=r.getAttribute("data-url")??"";return i&&r.classList.contains("shuffled")?(await imgReverser(i)).toDataURL():i});return{title:document.querySelector(".hr-manga h2")?.textContent?.trim(),series:document.querySelector(".hr-manga")?.getAttribute("href"),pages:t.length,prev:e?.nextElementSibling?.querySelector("a")?.getAttribute("href"),next:e?.previousElementSibling?.querySelector("a")?.getAttribute("href"),listImages:await Promise.all(t)}}},H9={name:["MangaStream WordPress Plugin","Realm Oasis","Voids-Scans","Luminous Scans","Shimada Scans","Night Scans","Manhwa-Freak","OzulScansEn","CypherScans","MangaGalaxy","LuaScans","Drake Scans","Rizzfables","NovatoScans","TresDaos","Lectormiau","NTRGod","Threedaos"],url:/https?:\/\/[^/]*(scans?|comic|realm|rizz|hivetoon|tresdaos|zonamiau|ntrgod|threedaos)[^/]*\/.+/,homepage:["https://themesia.com/mangastream-wordpress-theme/","https://realmoasis.com/","https://void-scans.com/","https://luminous-scans.com/","https://shimadascans.com/","https://night-scans.com/","https://freakcomic.com/","https://ozulscansen.com/","https://cypherscans.xyz/","https://mangagalaxy.me/","https://luascans.com/","https://drake-scans.com/","https://rizzfables.com/","https://www.novatoscans.top/","https://tresdaos.com","https://zonamiau.com/","https://ntrgod.com/","https://threedaos.zdrz.xyz/"],language:[$e.ENGLISH,$e.SPANISH],category:Ne.MANGA,waitEle:':where(#readerarea, .check-box, #viewer-img) img:not(.asurascans):not([src*="loader"]):not([src*="chevron"]),:where(.nextprev, .inner_nPL)',run(){const e=[...document.querySelectorAll(this.waitEle??"")];return{title:document.querySelector("title")?.textContent?.trim(),series:document.querySelector(":where(.allc, .tac) a")?.getAttribute("href")??document.querySelectorAll('[class*="breadcrumb"] a').item(1)?.getAttribute("href"),pages:e.length,prev:bh(":where(.nextprev, .inner_nPL) a",["Prev","Anterior"])?.[0]?.getAttribute("href"),next:bh(":where(.nextprev, .inner_nPL) a",["Next","Siguiente"])?.[0]?.getAttribute("href"),listImages:e.map(t=>t.getAttribute("data-src")??t.getAttribute("data-lazy-src")??t.getAttribute("src")??"")}}},G9={name:"MangaToons",url:/https?:\/\/.*mangatoon.mobi\/.+\/watch\/.+/,homepage:"https://mangatoon.mobi/",language:[$e.ENGLISH],category:Ne.MANGA,waitEle:".pictures img:not(.cover)",run(){const e=[...document.querySelectorAll(".pictures img:not(.cover)")];return{title:document.querySelector("title")?.textContent?.trim(),series:document.querySelector(".top-left a")?.getAttribute("href"),pages:e.length,prev:document.querySelector(".page-icons-prev")?.getAttribute("href"),next:document.querySelector(".page-icons-next")?.getAttribute("href"),listImages:e.map(t=>t.getAttribute("data-src")??"")}}},W9={name:"MangaTown",url:/https?:\/\/www\.mangatown\.com\/manga\/.+\/.+\//,homepage:"https://www.mangatown.com/",language:[$e.ENGLISH],category:Ne.MANGA,waitEle:"div.page_select select option, .read_img .image",run(){const e=document.querySelector("div.page_select select")?.querySelectorAll("option"),t=[...document.querySelectorAll(".read_img .image")].map(i=>i.getAttribute("src")??""),r=[...e??[]].map(i=>i.value).filter(i=>!i.endsWith("featured.html")).map(i=>new URL(i,window.location.href).href);return{title:document.querySelector("div.title h1")?.textContent?.trim(),series:document.querySelector("div.title a")?.getAttribute("href"),pages:unsafeWindow.total_pages||r.length,prev:document.querySelector(".chapter_select option:checked")?.previousElementSibling?.getAttribute("value"),next:document.querySelector(".chapter_select option:checked")?.nextElementSibling?.getAttribute("value"),...t.length>1?{listImages:t}:{listPages:r,img:"#image"}}}},U9={name:"ManhwaWeb",url:/https?:\/\/(www\.)?manhwaweb.com\/leer\/.+/,homepage:"https://manhwaweb.com/",language:[$e.SPANISH],category:Ne.MANGA,async run(){const e=window.location.pathname.replace("/leer",""),t=await fetch(`https://manhwawebbackend-production.up.railway.app/chapters/see${e}`).then(async i=>i.json()),r=await fetch(`https://manhwawebbackend-production.up.railway.app/chapters/seeprevpost${e}`).then(async i=>i.json());return{title:`${t.name} ${t.chapter.chapter}`,series:[...document.querySelectorAll("div")].filter(i=>i.textContent==="Episodios")?.[0]?.parentElement?.getAttribute("href"),pages:t.chapter.img.length,prev:r.chapterAnterior.replace(t._id,t.real_id),next:r.chapterSiguiente.replace(t._id,t.real_id),listImages:t.chapter.img}}},V9={name:["MangaGeko.com","MangaGeko.cc"],url:/https?:\/\/(www\.)?mgeko.(com|cc)?\/reader\/.*/,homepage:["https://www.mgeko.com/","https://www.mgeko.cc/"],language:[$e.ENGLISH],category:Ne.MANGA,run(){const e=[...document.querySelectorAll('img[id^="image-"]')];return{title:document.querySelector(".titles")?.textContent?.trim(),series:document.querySelector(".titles a")?.getAttribute("href"),pages:e.length,prev:document.querySelector(".chnav.prev:not(.isDisabled)")?.getAttribute("href"),next:document.querySelector(".chnav.next:not(.isDisabled)")?.getAttribute("href"),listImages:e.map(t=>t.getAttribute("src")??"")}}},Z9={name:"NineAnime",url:/https?:\/\/(www\.)?nineanime.com\/chapter\/.+/,homepage:"https://www.nineanime.com/",language:[$e.ENGLISH],category:Ne.MANGA,run(){const e=[...document.querySelectorAll(".sl-page option")],t=document.querySelector(".mangaread-pagenav select option[selected]");return{title:`${document.querySelector(".title h1")?.textContent?.trim()}/${document.querySelector(".title h2")?.textContent?.trim()}`,series:document.querySelector(".title a:has(h2)")?.getAttribute("href"),pages:e.length,prev:t?.nextElementSibling?.getAttribute("value"),next:t?.previousElementSibling?.getAttribute("value"),listPages:e.map(r=>r.getAttribute("value")??""),img:".manga_pic"}}},q9={name:"OlympusBiblioteca",url:/https?:\/\/(www\.)?olympusbiblioteca.com\/capitulo\/\d+\/.+/,homepage:"https://olympusbiblioteca.com/",language:[$e.SPANISH],category:Ne.MANGA,run(){const e=[...document.querySelectorAll("section img.w-full.h-full")];return{title:document.querySelector("title")?.textContent?.replace(/\|.+/,"").trim(),series:document.querySelector("h1")?.closest("a")?.getAttribute("href"),pages:e.length,prev:document.querySelector('a[name="capitulo anterior"]')?.getAttribute("href"),next:document.querySelector('a[name="capitulo siguiente"]')?.getAttribute("href"),listImages:e.map(t=>t.getAttribute("src")??"")}}},j9={name:"QiManhwa",url:/https?:\/\/qimanhwa\.com\/series\/[^/]+\/chapter-.+/,homepage:"https://qimanhwa.com/",language:[$e.ENGLISH],category:Ne.MANGA,waitEle:'img[alt*="Chapter"]',run(){const e=[...document.querySelectorAll('img[alt*="Chapter"]')];return{title:document.querySelector("h1")?.textContent?.trim(),series:jr("button","Home","a")?.getAttribute("href"),pages:e.length,prev:document.querySelector(".lucide-chevron-left")?.closest("a")?.getAttribute("href"),next:document.querySelector(".lucide-chevron-right")?.closest("a")?.getAttribute("href"),listImages:e.map(t=>t.getAttribute("src")??"")}}},K9={name:"ReadComicsOnline",url:/https?:\/\/(www\.)?readcomicsonline.ru\/comic\/.*\/\d*/,homepage:"https://readcomicsonline.ru/",language:[$e.ENGLISH],category:Ne.COMIC,run(){const e=[...document.querySelectorAll("#all img")];return{title:unsafeWindow.title.replace(/ - Page \d+/,""),series:document.querySelector("div.pager-cnt a")?.getAttribute("href"),pages:unsafeWindow.pages.length,prev:unsafeWindow.prev_chapter,next:unsafeWindow.next_chapter,listImages:e.map(t=>t.getAttribute("data-src")??"")}}},Y9={name:"ReaperScans",url:/https?:\/\/(www\.)?reaperscans\.com\/series\/.+\/chapter.+/,homepage:"https://reaperscans.com/",language:[$e.ENGLISH],category:Ne.MANGA,waitEle:"#content .container img:not(.rounded)",run(){const e=[...document.querySelectorAll("#content .container img:not(.rounded)")];return{title:document.querySelector("title")?.textContent?.trim(),series:document.querySelector("button .fa-house")?.closest("a")?.getAttribute("href"),pages:e.length,prev:document.querySelector(".fa-chevron-left")?.closest("a")?.getAttribute("href"),next:document.querySelector(".fa-chevron-right")?.closest("a")?.getAttribute("href"),listImages:e.map(t=>(t.getAttribute("data-src")||t.getAttribute("src"))??"")}}},X9={name:"TuMangaOnline",url:/https?:\/\/(www\.)?(.+).com\/(viewer|news)\/.+\/(paginated|cascade)/,homepage:"https://lectortmo.com/",language:[$e.SPANISH],category:Ne.MANGA,run(){const e=[...document.querySelectorAll(".img-container img, .viewer-container img")],t=[...document.querySelectorAll("div.container:nth-child(4) select#viewer-pages-select option")],r=e.length>1?e.length:t.length,i={title:document.querySelector("title")?.textContent?.trim(),series:document.querySelector('a[title="Volver"]')?.getAttribute("href"),pages:r,prev:document.querySelector(".chapter-prev a")?.getAttribute("href"),next:document.querySelector(".chapter-next a")?.getAttribute("href")};return e.length>1?{...i,listImages:e.map(a=>a.getAttribute("data-src")??"")}:{...i,listPages:Array(t.length).fill(0).map((a,s)=>`${window.location.href.replace(/\/\d+$/,"")}/${s+1}`),img:"#viewer-container img, .viewer-page"}}},J9={name:"Vortex Scans",url:/https?:\/\/(www.)?(vortexscans).(org)\/.+/,homepage:"https://vortexscans.org/",language:[$e.ENGLISH],category:Ne.MANGA,waitVar:"__next_f",waitFunc(){return unsafeWindow.__next_f.find(e=>/images/.test(e?.[1]))?.length>0},run(){const e=unsafeWindow.__next_f.find(r=>/images/.test(r?.[1]))?.[1],t=e.slice(e.indexOf("images")).match(/http[^"]+\.(png|gif|jpg|jpeg|webp)/g)??[];return{title:document.querySelector("time")?.closest("div")?.querySelector("div")?.textContent?.trim(),series:document.querySelector("time")?.closest("a")?.getAttribute("href"),pages:t?.length,prev:jr("button","Prev","a")?.getAttribute("href"),next:jr("button","Next","a")?.getAttribute("href"),listImages:t}}},Q9={name:"WebNovel",url:/https?:\/\/(www\.)?webnovel.com\/comic\/.+/,homepage:"https://www.webnovel.com/",language:[$e.ENGLISH],category:Ne.MANGA,waitVar:"g_data",run(){const e=unsafeWindow.g_data.chapter.chapterInfo.chapterPage.map(t=>t.url);return{title:document.querySelector("title")?.textContent?.trim(),series:"./",pages:e.length,prev:`${unsafeWindow.g_data.chapter.chapterInfo.preChapterName}_${unsafeWindow.g_data.chapter.chapterInfo.preChapterId}`,next:`${unsafeWindow.g_data.chapter.chapterInfo.nextChapterName}_${unsafeWindow.g_data.chapter.chapterInfo.nextChapterId}`,listImages:e}}},e7={name:"WebToons",url:/https?:\/\/(www\.)?webtoons.com\/.+viewer.+/,homepage:"https://www.webtoons.com/",language:[$e.ENGLISH],category:Ne.MANGA,run(){const e=[...document.querySelectorAll("#_imageList img")];return{title:document.querySelector(".subj_info")?.textContent?.trim(),series:document.querySelector(".subj_info a")?.getAttribute("href"),pages:e.length,prev:document.querySelector("._prevEpisode")?.getAttribute("href"),next:document.querySelector("._nextEpisode")?.getAttribute("href"),listImages:e.map(t=>t.getAttribute("data-url")??t.getAttribute("data-src")??t.getAttribute("src")??"")}}},t7={name:"WeebCentral",url:/https?:\/\/(www\.)?(weebcentral).com\/chapters\/.+/,homepage:"https://weebcentral.com/",language:[$e.ENGLISH],category:Ne.MANGA,waitEle:"main section .maw-w-full",async run(){const e=[...document.querySelectorAll("main section .maw-w-full")].map(i=>i.getAttribute("src")??""),t=await fetch(document.querySelector("main section a + button")?.getAttribute("hx-get")??"").then(i=>i.text()),r=new DOMParser().parseFromString(t,"text/html");return{title:document.querySelector("title")?.textContent?.replace(/ | .+/,"").trim(),series:document.querySelector("main section a")?.getAttribute("href"),pages:e.length,prev:r.querySelector("#selected_chapter")?.nextElementSibling?.getAttribute("href"),next:r.querySelector("#selected_chapter")?.previousElementSibling?.getAttribute("href"),listImages:e}}},n7={name:"WeebDex",url:/https?:\/\/(www\.)?weebdex\.org\/.+/,homepage:"https://weebdex.org/",language:$e.ENGLISH,category:Ne.MANGA,waitEle:'a[href^="/title/"]',async run(){const e=/\/chapter\/([^/]+)/.exec(window.location.pathname)?.at(1),t=`https://api.weebdex.org/chapter/${e}`,r=await fetch(t).then(async h=>h.json()),i=document.querySelector('a[href^="/title/"]'),a=`https://api.weebdex.org/manga/${r.relationships.manga.id}/aggregate?lang=${r.language}`,s=(await fetch(a).then(async h=>h.json())).chapters||[],l=s.findIndex(h=>h.chapter===r.chapter);return{title:document.querySelector("title")?.textContent?.trim().replace(/Page \d+:/,""),series:i?.getAttribute("href"),pages:r.data.length,prev:s[l+1]?`/chapter/${Me.default.keys(s[l+1].entries)[0]}`:void 0,next:s[l-1]?`/chapter/${Me.default.keys(s[l-1].entries)[0]}`:void 0,listImages:r.data.map(h=>`${r.node}/data/${e}/${h.name}`)}}},r7={name:"ZeroScans",url:/https?:\/\/(www\.)?zscans.com\/comics\/.+/,homepage:"https://zscans.com/",language:[$e.ENGLISH],category:Ne.MANGA,waitVar:"__ZEROSCANS__",run(){const e=unsafeWindow.__ZEROSCANS__.data.at(0).current_chapter.high_quality,t=document.querySelectorAll(".v-btn--router");return{title:document.querySelector("title")?.textContent?.trim(),series:document.querySelector(".v-breadcrumbs li:nth-child(2) + a")?.getAttribute("href"),pages:e.length,prev:t[0]?.getAttribute("href"),next:t[1]?.getAttribute("href"),listImages:e}}},o7=[p9,g9,m9,v9,b9,w9,_9,k9,S9,M9,x9,I9,wl,C9,L9,R9,P9,$9,D9,z9,T9,B9,N9,F9,G9,W9,U9,V9,Z9,q9,j9,K9,Y9,X9,Q9,e7,t7,n7,J9,r7,H9,y9,O9];c9(o7).catch(Ee)})();
