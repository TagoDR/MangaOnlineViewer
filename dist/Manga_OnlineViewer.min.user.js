// ==UserScript==
// @name          Manga OnlineViewer
// @author        Tago
// @updateURL     https://github.com/TagoDR/MangaOnlineViewer/raw/master/dist/Manga_OnlineViewer.meta.js
// @downloadURL   https://github.com/TagoDR/MangaOnlineViewer/raw/master/dist/Manga_OnlineViewer.user.js
// @supportURL    https://github.com/TagoDR/MangaOnlineViewer/issues
// @namespace     https://github.com/TagoDR
// @description   Shows all pages at once in online view for these sites: Asura Scans, Batoto, BilibiliComics, Comick, Comix.to, Dynasty-Scans, Flame Comics, Ikigai Mangas - EltaNews, Ikigai Mangas - Ajaco, Kagane, KuManga, LeerCapitulo, LHTranslation, Local Files, M440, MangaBuddy, MangaDex, MangaFox, MangaHere, Mangago, MangaHub, MangaKakalot, NeloManga, MangaNato, NatoManga, MangaBats, MangaBall, MangaOni, MangaPark, MangaReader, MangaToons, MangaTown, ManhwaWeb, MangaGeko.com, MangaGeko.cc, NineAnime, Olympus, QiManhwa, ReadComicsOnline, ReaperScans, TuMangaOnline, WebNovel, WebToons, WeebCentral, WeebDex, Vortex Scans, ZeroScans, MangaStream WordPress Plugin, Realm Oasis, Voids-Scans, Luminous Scans, Shimada Scans, Night Scans, Manhwa-Freak, OzulScansEn, CypherScans, MangaGalaxy, LuaScans, Drake Scans, Rizzfables, NovatoScans, TresDaos, Lectormiau, NTRGod, Threedaos, FoOlSlide, Kireicake, Madara WordPress Plugin, MangaHaus, Isekai Scan, Comic Kiba, Zinmanga, mangatx, Toonily, Mngazuki, JaiminisBox, DisasterScans, ManhuaPlus, TopManhua, NovelMic, Reset-Scans, LeviatanScans, Dragon Tea, SetsuScans, ToonGod, Hades Scans
// @version       2026.06.08.build-2156
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
// @include       /https?:\/\/(www.)?(asurascans|asuracomics).(com|net)\/.+/
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
// @include       /https?:\/\/(www\.)?olympusxyz.com\/capitulo\/\d+\/.+/
// @include       /https?:\/\/qimanhwa\.com\/series\/[^/]+\/chapter-.+/
// @include       /https?:\/\/(www\.)?readcomicsonline.ru\/comic\/.*\/\d*/
// @include       /https?:\/\/(www\.)?reaperscans\.com\/series\/.+\/chapter.+/
// @include       /https?:\/\/(www\.)?zonatmo\.(com|org|app)\/(viewer|news|view_uploads|reader|library)\/.+/
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
(function(){var Yf=Object.create,Bi=Object.defineProperty,Xf=Object.getOwnPropertyDescriptor,Jf=Object.getOwnPropertyNames,Qf=Object.getPrototypeOf,ep=Object.prototype.hasOwnProperty,Er=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports),td=(e,t)=>{let r={};for(var i in e)Bi(r,i,{get:e[i],enumerable:!0});return t||Bi(r,Symbol.toStringTag,{value:"Module"}),r},tp=(e,t,r,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(var a=Jf(t),s=0,l=a.length,h;s<l;s++)h=a[s],!ep.call(e,h)&&h!==r&&Bi(e,h,{get:(c=>t[c]).bind(null,h),enumerable:!(i=Xf(t,h))||i.enumerable});return e},Hi=(e,t,r)=>(r=e!=null?Yf(Qf(e)):{},tp(t||!e||!e.__esModule?Bi(r,"default",{value:e,enumerable:!0}):r,e)),rp=Er(((e,t)=>{(function(r,i){typeof e=="object"&&typeof t=="object"?t.exports=i():typeof define=="function"&&define.amd?define([],i):typeof e=="object"?e.bowser=i():r.bowser=i()})(e,(function(){return(function(r){var i={};function a(s){if(i[s])return i[s].exports;var l=i[s]={i:s,l:!1,exports:{}};return r[s].call(l.exports,l,l.exports,a),l.l=!0,l.exports}return a.m=r,a.c=i,a.d=function(s,l,h){a.o(s,l)||Object.defineProperty(s,l,{enumerable:!0,get:h})},a.r=function(s){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(s,"__esModule",{value:!0})},a.t=function(s,l){if(1&l&&(s=a(s)),8&l||4&l&&typeof s=="object"&&s&&s.__esModule)return s;var h=Object.create(null);if(a.r(h),Object.defineProperty(h,"default",{enumerable:!0,value:s}),2&l&&typeof s!="string")for(var c in s)a.d(h,c,function(f){return s[f]}.bind(null,c));return h},a.n=function(s){var l=s&&s.__esModule?function(){return s.default}:function(){return s};return a.d(l,"a",l),l},a.o=function(s,l){return Object.prototype.hasOwnProperty.call(s,l)},a.p="",a(a.s=90)})({17:function(r,i,a){"use strict";i.__esModule=!0,i.default=void 0;var s=a(18);i.default=(function(){function l(){}return l.getFirstMatch=function(h,c){var f=c.match(h);return f&&f.length>0&&f[1]||""},l.getSecondMatch=function(h,c){var f=c.match(h);return f&&f.length>1&&f[2]||""},l.matchAndReturnConst=function(h,c,f){if(h.test(c))return f},l.getWindowsVersionName=function(h){switch(h){case"NT":return"NT";case"XP":return"XP";case"NT 5.0":return"2000";case"NT 5.1":return"XP";case"NT 5.2":return"2003";case"NT 6.0":return"Vista";case"NT 6.1":return"7";case"NT 6.2":return"8";case"NT 6.3":return"8.1";case"NT 10.0":return"10";default:return}},l.getMacOSVersionName=function(h){var c=h.split(".").splice(0,2).map((function(w){return parseInt(w,10)||0}));c.push(0);var f=c[0],p=c[1];if(f===10)switch(p){case 5:return"Leopard";case 6:return"Snow Leopard";case 7:return"Lion";case 8:return"Mountain Lion";case 9:return"Mavericks";case 10:return"Yosemite";case 11:return"El Capitan";case 12:return"Sierra";case 13:return"High Sierra";case 14:return"Mojave";case 15:return"Catalina";default:return}switch(f){case 11:return"Big Sur";case 12:return"Monterey";case 13:return"Ventura";case 14:return"Sonoma";case 15:return"Sequoia";default:return}},l.getAndroidVersionName=function(h){var c=h.split(".").splice(0,2).map((function(f){return parseInt(f,10)||0}));if(c.push(0),!(c[0]===1&&c[1]<5))return c[0]===1&&c[1]<6?"Cupcake":c[0]===1&&c[1]>=6?"Donut":c[0]===2&&c[1]<2?"Eclair":c[0]===2&&c[1]===2?"Froyo":c[0]===2&&c[1]>2?"Gingerbread":c[0]===3?"Honeycomb":c[0]===4&&c[1]<1?"Ice Cream Sandwich":c[0]===4&&c[1]<4?"Jelly Bean":c[0]===4&&c[1]>=4?"KitKat":c[0]===5?"Lollipop":c[0]===6?"Marshmallow":c[0]===7?"Nougat":c[0]===8?"Oreo":c[0]===9?"Pie":void 0},l.getVersionPrecision=function(h){return h.split(".").length},l.compareVersions=function(h,c,f){f===void 0&&(f=!1);var p=l.getVersionPrecision(h),w=l.getVersionPrecision(c),b=Math.max(p,w),m=0,v=l.map([h,c],(function(E){var y=b-l.getVersionPrecision(E),S=E+new Array(y+1).join(".0");return l.map(S.split("."),(function(x){return new Array(20-x.length).join("0")+x})).reverse()}));for(f&&(m=b-Math.min(p,w)),b-=1;b>=m;){if(v[0][b]>v[1][b])return 1;if(v[0][b]===v[1][b]){if(b===m)return 0;b-=1}else if(v[0][b]<v[1][b])return-1}},l.map=function(h,c){var f,p=[];if(Array.prototype.map)return Array.prototype.map.call(h,c);for(f=0;f<h.length;f+=1)p.push(c(h[f]));return p},l.find=function(h,c){var f,p;if(Array.prototype.find)return Array.prototype.find.call(h,c);for(f=0,p=h.length;f<p;f+=1){var w=h[f];if(c(w,f))return w}},l.assign=function(h){for(var c,f,p=h,w=arguments.length,b=new Array(w>1?w-1:0),m=1;m<w;m++)b[m-1]=arguments[m];if(Object.assign)return Object.assign.apply(Object,[h].concat(b));var v=function(){var E=b[c];typeof E=="object"&&E!==null&&Object.keys(E).forEach((function(y){p[y]=E[y]}))};for(c=0,f=b.length;c<f;c+=1)v();return h},l.getBrowserAlias=function(h){return s.BROWSER_ALIASES_MAP[h]},l.getBrowserTypeByAlias=function(h){return s.BROWSER_MAP[h]||""},l})(),r.exports=i.default},18:function(r,i,a){"use strict";i.__esModule=!0,i.ENGINE_MAP=i.OS_MAP=i.PLATFORMS_MAP=i.BROWSER_MAP=i.BROWSER_ALIASES_MAP=void 0,i.BROWSER_ALIASES_MAP={AmazonBot:"amazonbot","Amazon Silk":"amazon_silk","Android Browser":"android",BaiduSpider:"baiduspider",Bada:"bada",BingCrawler:"bingcrawler",Brave:"brave",BlackBerry:"blackberry","ChatGPT-User":"chatgpt_user",Chrome:"chrome",ClaudeBot:"claudebot",Chromium:"chromium",Diffbot:"diffbot",DuckDuckBot:"duckduckbot",DuckDuckGo:"duckduckgo",Electron:"electron",Epiphany:"epiphany",FacebookExternalHit:"facebookexternalhit",Firefox:"firefox",Focus:"focus",Generic:"generic","Google Search":"google_search",Googlebot:"googlebot",GPTBot:"gptbot","Internet Explorer":"ie",InternetArchiveCrawler:"internetarchivecrawler","K-Meleon":"k_meleon",LibreWolf:"librewolf",Linespider:"linespider",Maxthon:"maxthon","Meta-ExternalAds":"meta_externalads","Meta-ExternalAgent":"meta_externalagent","Meta-ExternalFetcher":"meta_externalfetcher","Meta-WebIndexer":"meta_webindexer","Microsoft Edge":"edge","MZ Browser":"mz","NAVER Whale Browser":"naver","OAI-SearchBot":"oai_searchbot",Omgilibot:"omgilibot",Opera:"opera","Opera Coast":"opera_coast","Pale Moon":"pale_moon",PerplexityBot:"perplexitybot","Perplexity-User":"perplexity_user",PhantomJS:"phantomjs",PingdomBot:"pingdombot",Puffin:"puffin",QQ:"qq",QQLite:"qqlite",QupZilla:"qupzilla",Roku:"roku",Safari:"safari",Sailfish:"sailfish","Samsung Internet for Android":"samsung_internet",SlackBot:"slackbot",SeaMonkey:"seamonkey",Sleipnir:"sleipnir","Sogou Browser":"sogou",Swing:"swing",Tizen:"tizen","UC Browser":"uc",Vivaldi:"vivaldi","WebOS Browser":"webos",WeChat:"wechat",YahooSlurp:"yahooslurp","Yandex Browser":"yandex",YandexBot:"yandexbot",YouBot:"youbot"},i.BROWSER_MAP={amazonbot:"AmazonBot",amazon_silk:"Amazon Silk",android:"Android Browser",baiduspider:"BaiduSpider",bada:"Bada",bingcrawler:"BingCrawler",blackberry:"BlackBerry",brave:"Brave",chatgpt_user:"ChatGPT-User",chrome:"Chrome",claudebot:"ClaudeBot",chromium:"Chromium",diffbot:"Diffbot",duckduckbot:"DuckDuckBot",duckduckgo:"DuckDuckGo",edge:"Microsoft Edge",electron:"Electron",epiphany:"Epiphany",facebookexternalhit:"FacebookExternalHit",firefox:"Firefox",focus:"Focus",generic:"Generic",google_search:"Google Search",googlebot:"Googlebot",gptbot:"GPTBot",ie:"Internet Explorer",internetarchivecrawler:"InternetArchiveCrawler",k_meleon:"K-Meleon",librewolf:"LibreWolf",linespider:"Linespider",maxthon:"Maxthon",meta_externalads:"Meta-ExternalAds",meta_externalagent:"Meta-ExternalAgent",meta_externalfetcher:"Meta-ExternalFetcher",meta_webindexer:"Meta-WebIndexer",mz:"MZ Browser",naver:"NAVER Whale Browser",oai_searchbot:"OAI-SearchBot",omgilibot:"Omgilibot",opera:"Opera",opera_coast:"Opera Coast",pale_moon:"Pale Moon",perplexitybot:"PerplexityBot",perplexity_user:"Perplexity-User",phantomjs:"PhantomJS",pingdombot:"PingdomBot",puffin:"Puffin",qq:"QQ Browser",qqlite:"QQ Browser Lite",qupzilla:"QupZilla",roku:"Roku",safari:"Safari",sailfish:"Sailfish",samsung_internet:"Samsung Internet for Android",seamonkey:"SeaMonkey",slackbot:"SlackBot",sleipnir:"Sleipnir",sogou:"Sogou Browser",swing:"Swing",tizen:"Tizen",uc:"UC Browser",vivaldi:"Vivaldi",webos:"WebOS Browser",wechat:"WeChat",yahooslurp:"YahooSlurp",yandex:"Yandex Browser",yandexbot:"YandexBot",youbot:"YouBot"},i.PLATFORMS_MAP={bot:"bot",desktop:"desktop",mobile:"mobile",tablet:"tablet",tv:"tv"},i.OS_MAP={Android:"Android",Bada:"Bada",BlackBerry:"BlackBerry",ChromeOS:"Chrome OS",HarmonyOS:"HarmonyOS",iOS:"iOS",Linux:"Linux",MacOS:"macOS",PlayStation4:"PlayStation 4",Roku:"Roku",Tizen:"Tizen",WebOS:"WebOS",Windows:"Windows",WindowsPhone:"Windows Phone"},i.ENGINE_MAP={Blink:"Blink",EdgeHTML:"EdgeHTML",Gecko:"Gecko",Presto:"Presto",Trident:"Trident",WebKit:"WebKit"}},90:function(r,i,a){"use strict";i.__esModule=!0,i.default=void 0;var s,l=(s=a(91))&&s.__esModule?s:{default:s},h=a(18);function c(f,p){for(var w=0;w<p.length;w++){var b=p[w];b.enumerable=b.enumerable||!1,b.configurable=!0,"value"in b&&(b.writable=!0),Object.defineProperty(f,b.key,b)}}i.default=(function(){function f(){}var p,w,b;return f.getParser=function(m,v,E){if(v===void 0&&(v=!1),E===void 0&&(E=null),typeof m!="string")throw new Error("UserAgent should be a string");return new l.default(m,v,E)},f.parse=function(m,v){return v===void 0&&(v=null),new l.default(m,v).getResult()},p=f,b=[{key:"BROWSER_MAP",get:function(){return h.BROWSER_MAP}},{key:"ENGINE_MAP",get:function(){return h.ENGINE_MAP}},{key:"OS_MAP",get:function(){return h.OS_MAP}},{key:"PLATFORMS_MAP",get:function(){return h.PLATFORMS_MAP}}],(w=null)&&c(p.prototype,w),b&&c(p,b),f})(),r.exports=i.default},91:function(r,i,a){"use strict";i.__esModule=!0,i.default=void 0;var s=p(a(92)),l=p(a(93)),h=p(a(94)),c=p(a(95)),f=p(a(17));function p(w){return w&&w.__esModule?w:{default:w}}i.default=(function(){function w(m,v,E){if(v===void 0&&(v=!1),E===void 0&&(E=null),m==null||m==="")throw new Error("UserAgent parameter can't be empty");this._ua=m;var y=!1;typeof v=="boolean"?(y=v,this._hints=E):this._hints=v!=null&&typeof v=="object"?v:null,this.parsedResult={},y!==!0&&this.parse()}var b=w.prototype;return b.getHints=function(){return this._hints},b.hasBrand=function(m){if(!this._hints||!Array.isArray(this._hints.brands))return!1;var v=m.toLowerCase();return this._hints.brands.some((function(E){return E.brand&&E.brand.toLowerCase()===v}))},b.getBrandVersion=function(m){if(this._hints&&Array.isArray(this._hints.brands)){var v=m.toLowerCase(),E=this._hints.brands.find((function(y){return y.brand&&y.brand.toLowerCase()===v}));return E?E.version:void 0}},b.getUA=function(){return this._ua},b.test=function(m){return m.test(this._ua)},b.parseBrowser=function(){var m=this;this.parsedResult.browser={};var v=f.default.find(s.default,(function(E){if(typeof E.test=="function")return E.test(m);if(Array.isArray(E.test))return E.test.some((function(y){return m.test(y)}));throw new Error("Browser's test function is not valid")}));return v&&(this.parsedResult.browser=v.describe(this.getUA(),this)),this.parsedResult.browser},b.getBrowser=function(){return this.parsedResult.browser?this.parsedResult.browser:this.parseBrowser()},b.getBrowserName=function(m){return m?String(this.getBrowser().name).toLowerCase()||"":this.getBrowser().name||""},b.getBrowserVersion=function(){return this.getBrowser().version},b.getOS=function(){return this.parsedResult.os?this.parsedResult.os:this.parseOS()},b.parseOS=function(){var m=this;this.parsedResult.os={};var v=f.default.find(l.default,(function(E){if(typeof E.test=="function")return E.test(m);if(Array.isArray(E.test))return E.test.some((function(y){return m.test(y)}));throw new Error("Browser's test function is not valid")}));return v&&(this.parsedResult.os=v.describe(this.getUA())),this.parsedResult.os},b.getOSName=function(m){var v=this.getOS().name;return m?String(v).toLowerCase()||"":v||""},b.getOSVersion=function(){return this.getOS().version},b.getPlatform=function(){return this.parsedResult.platform?this.parsedResult.platform:this.parsePlatform()},b.getPlatformType=function(m){m===void 0&&(m=!1);var v=this.getPlatform().type;return m?String(v).toLowerCase()||"":v||""},b.parsePlatform=function(){var m=this;this.parsedResult.platform={};var v=f.default.find(h.default,(function(E){if(typeof E.test=="function")return E.test(m);if(Array.isArray(E.test))return E.test.some((function(y){return m.test(y)}));throw new Error("Browser's test function is not valid")}));return v&&(this.parsedResult.platform=v.describe(this.getUA())),this.parsedResult.platform},b.getEngine=function(){return this.parsedResult.engine?this.parsedResult.engine:this.parseEngine()},b.getEngineName=function(m){return m?String(this.getEngine().name).toLowerCase()||"":this.getEngine().name||""},b.parseEngine=function(){var m=this;this.parsedResult.engine={};var v=f.default.find(c.default,(function(E){if(typeof E.test=="function")return E.test(m);if(Array.isArray(E.test))return E.test.some((function(y){return m.test(y)}));throw new Error("Browser's test function is not valid")}));return v&&(this.parsedResult.engine=v.describe(this.getUA())),this.parsedResult.engine},b.parse=function(){return this.parseBrowser(),this.parseOS(),this.parsePlatform(),this.parseEngine(),this},b.getResult=function(){return f.default.assign({},this.parsedResult)},b.satisfies=function(m){var v=this,E={},y=0,S={},x=0;if(Object.keys(m).forEach((function(ge){var _e=m[ge];typeof _e=="string"?(S[ge]=_e,x+=1):typeof _e=="object"&&(E[ge]=_e,y+=1)})),y>0){var O=Object.keys(E),L=f.default.find(O,(function(ge){return v.isOS(ge)}));if(L){var N=this.satisfies(E[L]);if(N!==void 0)return N}var Y=f.default.find(O,(function(ge){return v.isPlatform(ge)}));if(Y){var Z=this.satisfies(E[Y]);if(Z!==void 0)return Z}}if(x>0){var ie=Object.keys(S),W=f.default.find(ie,(function(ge){return v.isBrowser(ge,!0)}));if(W!==void 0)return this.compareVersion(S[W])}},b.isBrowser=function(m,v){v===void 0&&(v=!1);var E=this.getBrowserName().toLowerCase(),y=m.toLowerCase(),S=f.default.getBrowserTypeByAlias(y);return v&&S&&(y=S.toLowerCase()),y===E},b.compareVersion=function(m){var v=[0],E=m,y=!1,S=this.getBrowserVersion();if(typeof S=="string")return m[0]===">"||m[0]==="<"?(E=m.substr(1),m[1]==="="?(y=!0,E=m.substr(2)):v=[],m[0]===">"?v.push(1):v.push(-1)):m[0]==="="?E=m.substr(1):m[0]==="~"&&(y=!0,E=m.substr(1)),v.indexOf(f.default.compareVersions(S,E,y))>-1},b.isOS=function(m){return this.getOSName(!0)===String(m).toLowerCase()},b.isPlatform=function(m){return this.getPlatformType(!0)===String(m).toLowerCase()},b.isEngine=function(m){return this.getEngineName(!0)===String(m).toLowerCase()},b.is=function(m,v){return v===void 0&&(v=!1),this.isBrowser(m,v)||this.isOS(m)||this.isPlatform(m)},b.some=function(m){var v=this;return m===void 0&&(m=[]),m.some((function(E){return v.is(E)}))},w})(),r.exports=i.default},92:function(r,i,a){"use strict";i.__esModule=!0,i.default=void 0;var s,l=(s=a(17))&&s.__esModule?s:{default:s},h=/version\/(\d+(\.?_?\d+)+)/i;i.default=[{test:[/gptbot/i],describe:function(c){var f={name:"GPTBot"},p=l.default.getFirstMatch(/gptbot\/(\d+(\.\d+)+)/i,c)||l.default.getFirstMatch(h,c);return p&&(f.version=p),f}},{test:[/chatgpt-user/i],describe:function(c){var f={name:"ChatGPT-User"},p=l.default.getFirstMatch(/chatgpt-user\/(\d+(\.\d+)+)/i,c)||l.default.getFirstMatch(h,c);return p&&(f.version=p),f}},{test:[/oai-searchbot/i],describe:function(c){var f={name:"OAI-SearchBot"},p=l.default.getFirstMatch(/oai-searchbot\/(\d+(\.\d+)+)/i,c)||l.default.getFirstMatch(h,c);return p&&(f.version=p),f}},{test:[/claudebot/i,/claude-web/i,/claude-user/i,/claude-searchbot/i],describe:function(c){var f={name:"ClaudeBot"},p=l.default.getFirstMatch(/(?:claudebot|claude-web|claude-user|claude-searchbot)\/(\d+(\.\d+)+)/i,c)||l.default.getFirstMatch(h,c);return p&&(f.version=p),f}},{test:[/omgilibot/i,/webzio-extended/i],describe:function(c){var f={name:"Omgilibot"},p=l.default.getFirstMatch(/(?:omgilibot|webzio-extended)\/(\d+(\.\d+)+)/i,c)||l.default.getFirstMatch(h,c);return p&&(f.version=p),f}},{test:[/diffbot/i],describe:function(c){var f={name:"Diffbot"},p=l.default.getFirstMatch(/diffbot\/(\d+(\.\d+)+)/i,c)||l.default.getFirstMatch(h,c);return p&&(f.version=p),f}},{test:[/perplexitybot/i],describe:function(c){var f={name:"PerplexityBot"},p=l.default.getFirstMatch(/perplexitybot\/(\d+(\.\d+)+)/i,c)||l.default.getFirstMatch(h,c);return p&&(f.version=p),f}},{test:[/perplexity-user/i],describe:function(c){var f={name:"Perplexity-User"},p=l.default.getFirstMatch(/perplexity-user\/(\d+(\.\d+)+)/i,c)||l.default.getFirstMatch(h,c);return p&&(f.version=p),f}},{test:[/youbot/i],describe:function(c){var f={name:"YouBot"},p=l.default.getFirstMatch(/youbot\/(\d+(\.\d+)+)/i,c)||l.default.getFirstMatch(h,c);return p&&(f.version=p),f}},{test:[/meta-webindexer/i],describe:function(c){var f={name:"Meta-WebIndexer"},p=l.default.getFirstMatch(/meta-webindexer\/(\d+(\.\d+)+)/i,c)||l.default.getFirstMatch(h,c);return p&&(f.version=p),f}},{test:[/meta-externalads/i],describe:function(c){var f={name:"Meta-ExternalAds"},p=l.default.getFirstMatch(/meta-externalads\/(\d+(\.\d+)+)/i,c)||l.default.getFirstMatch(h,c);return p&&(f.version=p),f}},{test:[/meta-externalagent/i],describe:function(c){var f={name:"Meta-ExternalAgent"},p=l.default.getFirstMatch(/meta-externalagent\/(\d+(\.\d+)+)/i,c)||l.default.getFirstMatch(h,c);return p&&(f.version=p),f}},{test:[/meta-externalfetcher/i],describe:function(c){var f={name:"Meta-ExternalFetcher"},p=l.default.getFirstMatch(/meta-externalfetcher\/(\d+(\.\d+)+)/i,c)||l.default.getFirstMatch(h,c);return p&&(f.version=p),f}},{test:[/googlebot/i],describe:function(c){var f={name:"Googlebot"},p=l.default.getFirstMatch(/googlebot\/(\d+(\.\d+))/i,c)||l.default.getFirstMatch(h,c);return p&&(f.version=p),f}},{test:[/linespider/i],describe:function(c){var f={name:"Linespider"},p=l.default.getFirstMatch(/(?:linespider)(?:-[-\w]+)?[\s/](\d+(\.\d+)+)/i,c)||l.default.getFirstMatch(h,c);return p&&(f.version=p),f}},{test:[/amazonbot/i],describe:function(c){var f={name:"AmazonBot"},p=l.default.getFirstMatch(/amazonbot\/(\d+(\.\d+)+)/i,c)||l.default.getFirstMatch(h,c);return p&&(f.version=p),f}},{test:[/bingbot/i],describe:function(c){var f={name:"BingCrawler"},p=l.default.getFirstMatch(/bingbot\/(\d+(\.\d+)+)/i,c)||l.default.getFirstMatch(h,c);return p&&(f.version=p),f}},{test:[/baiduspider/i],describe:function(c){var f={name:"BaiduSpider"},p=l.default.getFirstMatch(/baiduspider\/(\d+(\.\d+)+)/i,c)||l.default.getFirstMatch(h,c);return p&&(f.version=p),f}},{test:[/duckduckbot/i],describe:function(c){var f={name:"DuckDuckBot"},p=l.default.getFirstMatch(/duckduckbot\/(\d+(\.\d+)+)/i,c)||l.default.getFirstMatch(h,c);return p&&(f.version=p),f}},{test:[/ia_archiver/i],describe:function(c){var f={name:"InternetArchiveCrawler"},p=l.default.getFirstMatch(/ia_archiver\/(\d+(\.\d+)+)/i,c)||l.default.getFirstMatch(h,c);return p&&(f.version=p),f}},{test:[/facebookexternalhit/i,/facebookcatalog/i],describe:function(){return{name:"FacebookExternalHit"}}},{test:[/slackbot/i,/slack-imgProxy/i],describe:function(c){var f={name:"SlackBot"},p=l.default.getFirstMatch(/(?:slackbot|slack-imgproxy)(?:-[-\w]+)?[\s/](\d+(\.\d+)+)/i,c)||l.default.getFirstMatch(h,c);return p&&(f.version=p),f}},{test:[/yahoo!?[\s/]*slurp/i],describe:function(){return{name:"YahooSlurp"}}},{test:[/yandexbot/i,/yandexmobilebot/i],describe:function(){return{name:"YandexBot"}}},{test:[/pingdom/i],describe:function(){return{name:"PingdomBot"}}},{test:[/opera/i],describe:function(c){var f={name:"Opera"},p=l.default.getFirstMatch(h,c)||l.default.getFirstMatch(/(?:opera)[\s/](\d+(\.?_?\d+)+)/i,c);return p&&(f.version=p),f}},{test:[/opr\/|opios/i],describe:function(c){var f={name:"Opera"},p=l.default.getFirstMatch(/(?:opr|opios)[\s/](\S+)/i,c)||l.default.getFirstMatch(h,c);return p&&(f.version=p),f}},{test:[/SamsungBrowser/i],describe:function(c){var f={name:"Samsung Internet for Android"},p=l.default.getFirstMatch(h,c)||l.default.getFirstMatch(/(?:SamsungBrowser)[\s/](\d+(\.?_?\d+)+)/i,c);return p&&(f.version=p),f}},{test:[/Whale/i],describe:function(c){var f={name:"NAVER Whale Browser"},p=l.default.getFirstMatch(h,c)||l.default.getFirstMatch(/(?:whale)[\s/](\d+(?:\.\d+)+)/i,c);return p&&(f.version=p),f}},{test:[/PaleMoon/i],describe:function(c){var f={name:"Pale Moon"},p=l.default.getFirstMatch(h,c)||l.default.getFirstMatch(/(?:PaleMoon)[\s/](\d+(?:\.\d+)+)/i,c);return p&&(f.version=p),f}},{test:[/MZBrowser/i],describe:function(c){var f={name:"MZ Browser"},p=l.default.getFirstMatch(/(?:MZBrowser)[\s/](\d+(?:\.\d+)+)/i,c)||l.default.getFirstMatch(h,c);return p&&(f.version=p),f}},{test:[/focus/i],describe:function(c){var f={name:"Focus"},p=l.default.getFirstMatch(/(?:focus)[\s/](\d+(?:\.\d+)+)/i,c)||l.default.getFirstMatch(h,c);return p&&(f.version=p),f}},{test:[/swing/i],describe:function(c){var f={name:"Swing"},p=l.default.getFirstMatch(/(?:swing)[\s/](\d+(?:\.\d+)+)/i,c)||l.default.getFirstMatch(h,c);return p&&(f.version=p),f}},{test:[/coast/i],describe:function(c){var f={name:"Opera Coast"},p=l.default.getFirstMatch(h,c)||l.default.getFirstMatch(/(?:coast)[\s/](\d+(\.?_?\d+)+)/i,c);return p&&(f.version=p),f}},{test:[/opt\/\d+(?:.?_?\d+)+/i],describe:function(c){var f={name:"Opera Touch"},p=l.default.getFirstMatch(/(?:opt)[\s/](\d+(\.?_?\d+)+)/i,c)||l.default.getFirstMatch(h,c);return p&&(f.version=p),f}},{test:[/yabrowser/i],describe:function(c){var f={name:"Yandex Browser"},p=l.default.getFirstMatch(/(?:yabrowser)[\s/](\d+(\.?_?\d+)+)/i,c)||l.default.getFirstMatch(h,c);return p&&(f.version=p),f}},{test:[/ucbrowser/i],describe:function(c){var f={name:"UC Browser"},p=l.default.getFirstMatch(h,c)||l.default.getFirstMatch(/(?:ucbrowser)[\s/](\d+(\.?_?\d+)+)/i,c);return p&&(f.version=p),f}},{test:[/Maxthon|mxios/i],describe:function(c){var f={name:"Maxthon"},p=l.default.getFirstMatch(h,c)||l.default.getFirstMatch(/(?:Maxthon|mxios)[\s/](\d+(\.?_?\d+)+)/i,c);return p&&(f.version=p),f}},{test:[/epiphany/i],describe:function(c){var f={name:"Epiphany"},p=l.default.getFirstMatch(h,c)||l.default.getFirstMatch(/(?:epiphany)[\s/](\d+(\.?_?\d+)+)/i,c);return p&&(f.version=p),f}},{test:[/puffin/i],describe:function(c){var f={name:"Puffin"},p=l.default.getFirstMatch(h,c)||l.default.getFirstMatch(/(?:puffin)[\s/](\d+(\.?_?\d+)+)/i,c);return p&&(f.version=p),f}},{test:[/sleipnir/i],describe:function(c){var f={name:"Sleipnir"},p=l.default.getFirstMatch(h,c)||l.default.getFirstMatch(/(?:sleipnir)[\s/](\d+(\.?_?\d+)+)/i,c);return p&&(f.version=p),f}},{test:[/k-meleon/i],describe:function(c){var f={name:"K-Meleon"},p=l.default.getFirstMatch(h,c)||l.default.getFirstMatch(/(?:k-meleon)[\s/](\d+(\.?_?\d+)+)/i,c);return p&&(f.version=p),f}},{test:[/micromessenger/i],describe:function(c){var f={name:"WeChat"},p=l.default.getFirstMatch(/(?:micromessenger)[\s/](\d+(\.?_?\d+)+)/i,c)||l.default.getFirstMatch(h,c);return p&&(f.version=p),f}},{test:[/qqbrowser/i],describe:function(c){var f={name:/qqbrowserlite/i.test(c)?"QQ Browser Lite":"QQ Browser"},p=l.default.getFirstMatch(/(?:qqbrowserlite|qqbrowser)[/](\d+(\.?_?\d+)+)/i,c)||l.default.getFirstMatch(h,c);return p&&(f.version=p),f}},{test:[/msie|trident/i],describe:function(c){var f={name:"Internet Explorer"},p=l.default.getFirstMatch(/(?:msie |rv:)(\d+(\.?_?\d+)+)/i,c);return p&&(f.version=p),f}},{test:[/\sedg\//i],describe:function(c){var f={name:"Microsoft Edge"},p=l.default.getFirstMatch(/\sedg\/(\d+(\.?_?\d+)+)/i,c);return p&&(f.version=p),f}},{test:[/edg([ea]|ios)/i],describe:function(c){var f={name:"Microsoft Edge"},p=l.default.getSecondMatch(/edg([ea]|ios)\/(\d+(\.?_?\d+)+)/i,c);return p&&(f.version=p),f}},{test:[/vivaldi/i],describe:function(c){var f={name:"Vivaldi"},p=l.default.getFirstMatch(/vivaldi\/(\d+(\.?_?\d+)+)/i,c);return p&&(f.version=p),f}},{test:[/seamonkey/i],describe:function(c){var f={name:"SeaMonkey"},p=l.default.getFirstMatch(/seamonkey\/(\d+(\.?_?\d+)+)/i,c);return p&&(f.version=p),f}},{test:[/sailfish/i],describe:function(c){var f={name:"Sailfish"},p=l.default.getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i,c);return p&&(f.version=p),f}},{test:[/silk/i],describe:function(c){var f={name:"Amazon Silk"},p=l.default.getFirstMatch(/silk\/(\d+(\.?_?\d+)+)/i,c);return p&&(f.version=p),f}},{test:[/phantom/i],describe:function(c){var f={name:"PhantomJS"},p=l.default.getFirstMatch(/phantomjs\/(\d+(\.?_?\d+)+)/i,c);return p&&(f.version=p),f}},{test:[/slimerjs/i],describe:function(c){var f={name:"SlimerJS"},p=l.default.getFirstMatch(/slimerjs\/(\d+(\.?_?\d+)+)/i,c);return p&&(f.version=p),f}},{test:[/blackberry|\bbb\d+/i,/rim\stablet/i],describe:function(c){var f={name:"BlackBerry"},p=l.default.getFirstMatch(h,c)||l.default.getFirstMatch(/blackberry[\d]+\/(\d+(\.?_?\d+)+)/i,c);return p&&(f.version=p),f}},{test:[/(web|hpw)[o0]s/i],describe:function(c){var f={name:"WebOS Browser"},p=l.default.getFirstMatch(h,c)||l.default.getFirstMatch(/w(?:eb)?[o0]sbrowser\/(\d+(\.?_?\d+)+)/i,c);return p&&(f.version=p),f}},{test:[/bada/i],describe:function(c){var f={name:"Bada"},p=l.default.getFirstMatch(/dolfin\/(\d+(\.?_?\d+)+)/i,c);return p&&(f.version=p),f}},{test:[/tizen/i],describe:function(c){var f={name:"Tizen"},p=l.default.getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.?_?\d+)+)/i,c)||l.default.getFirstMatch(h,c);return p&&(f.version=p),f}},{test:[/qupzilla/i],describe:function(c){var f={name:"QupZilla"},p=l.default.getFirstMatch(/(?:qupzilla)[\s/](\d+(\.?_?\d+)+)/i,c)||l.default.getFirstMatch(h,c);return p&&(f.version=p),f}},{test:[/librewolf/i],describe:function(c){var f={name:"LibreWolf"},p=l.default.getFirstMatch(/(?:librewolf)[\s/](\d+(\.?_?\d+)+)/i,c);return p&&(f.version=p),f}},{test:[/firefox|iceweasel|fxios/i],describe:function(c){var f={name:"Firefox"},p=l.default.getFirstMatch(/(?:firefox|iceweasel|fxios)[\s/](\d+(\.?_?\d+)+)/i,c);return p&&(f.version=p),f}},{test:[/electron/i],describe:function(c){var f={name:"Electron"},p=l.default.getFirstMatch(/(?:electron)\/(\d+(\.?_?\d+)+)/i,c);return p&&(f.version=p),f}},{test:[/sogoumobilebrowser/i,/metasr/i,/se 2\.[x]/i],describe:function(c){var f={name:"Sogou Browser"},p=l.default.getFirstMatch(/(?:sogoumobilebrowser)[\s/](\d+(\.?_?\d+)+)/i,c),w=l.default.getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i,c),b=l.default.getFirstMatch(/se ([\d.]+)x/i,c),m=p||w||b;return m&&(f.version=m),f}},{test:[/MiuiBrowser/i],describe:function(c){var f={name:"Miui"},p=l.default.getFirstMatch(/(?:MiuiBrowser)[\s/](\d+(\.?_?\d+)+)/i,c);return p&&(f.version=p),f}},{test:function(c){return!!c.hasBrand("DuckDuckGo")||c.test(/\sDdg\/[\d.]+$/i)},describe:function(c,f){var p={name:"DuckDuckGo"};if(f){var w=f.getBrandVersion("DuckDuckGo");if(w)return p.version=w,p}var b=l.default.getFirstMatch(/\sDdg\/([\d.]+)$/i,c);return b&&(p.version=b),p}},{test:function(c){return c.hasBrand("Brave")},describe:function(c,f){var p={name:"Brave"};if(f){var w=f.getBrandVersion("Brave");if(w)return p.version=w,p}return p}},{test:[/chromium/i],describe:function(c){var f={name:"Chromium"},p=l.default.getFirstMatch(/(?:chromium)[\s/](\d+(\.?_?\d+)+)/i,c)||l.default.getFirstMatch(h,c);return p&&(f.version=p),f}},{test:[/chrome|crios|crmo/i],describe:function(c){var f={name:"Chrome"},p=l.default.getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i,c);return p&&(f.version=p),f}},{test:[/GSA/i],describe:function(c){var f={name:"Google Search"},p=l.default.getFirstMatch(/(?:GSA)\/(\d+(\.?_?\d+)+)/i,c);return p&&(f.version=p),f}},{test:function(c){var f=!c.test(/like android/i),p=c.test(/android/i);return f&&p},describe:function(c){var f={name:"Android Browser"},p=l.default.getFirstMatch(h,c);return p&&(f.version=p),f}},{test:[/playstation 4/i],describe:function(c){var f={name:"PlayStation 4"},p=l.default.getFirstMatch(h,c);return p&&(f.version=p),f}},{test:[/safari|applewebkit/i],describe:function(c){var f={name:"Safari"},p=l.default.getFirstMatch(h,c);return p&&(f.version=p),f}},{test:[/.*/i],describe:function(c){var f=c.search("\\(")!==-1?/^(.*)\/(.*)[ \t]\((.*)/:/^(.*)\/(.*) /;return{name:l.default.getFirstMatch(f,c),version:l.default.getSecondMatch(f,c)}}}],r.exports=i.default},93:function(r,i,a){"use strict";i.__esModule=!0,i.default=void 0;var s,l=(s=a(17))&&s.__esModule?s:{default:s},h=a(18);i.default=[{test:[/Roku\/DVP/],describe:function(c){var f=l.default.getFirstMatch(/Roku\/DVP-(\d+\.\d+)/i,c);return{name:h.OS_MAP.Roku,version:f}}},{test:[/windows phone/i],describe:function(c){var f=l.default.getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i,c);return{name:h.OS_MAP.WindowsPhone,version:f}}},{test:[/windows /i],describe:function(c){var f=l.default.getFirstMatch(/Windows ((NT|XP)( \d\d?.\d)?)/i,c),p=l.default.getWindowsVersionName(f);return{name:h.OS_MAP.Windows,version:f,versionName:p}}},{test:[/Macintosh(.*?) FxiOS(.*?)\//],describe:function(c){var f={name:h.OS_MAP.iOS},p=l.default.getSecondMatch(/(Version\/)(\d[\d.]+)/,c);return p&&(f.version=p),f}},{test:[/macintosh/i],describe:function(c){var f=l.default.getFirstMatch(/mac os x (\d+(\.?_?\d+)+)/i,c).replace(/[_\s]/g,"."),p=l.default.getMacOSVersionName(f),w={name:h.OS_MAP.MacOS,version:f};return p&&(w.versionName=p),w}},{test:[/(ipod|iphone|ipad)/i],describe:function(c){var f=l.default.getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i,c).replace(/[_\s]/g,".");return{name:h.OS_MAP.iOS,version:f}}},{test:[/OpenHarmony/i],describe:function(c){var f=l.default.getFirstMatch(/OpenHarmony\s+(\d+(\.\d+)*)/i,c);return{name:h.OS_MAP.HarmonyOS,version:f}}},{test:function(c){var f=!c.test(/like android/i),p=c.test(/android/i);return f&&p},describe:function(c){var f=l.default.getFirstMatch(/android[\s/-](\d+(\.\d+)*)/i,c),p=l.default.getAndroidVersionName(f),w={name:h.OS_MAP.Android,version:f};return p&&(w.versionName=p),w}},{test:[/(web|hpw)[o0]s/i],describe:function(c){var f=l.default.getFirstMatch(/(?:web|hpw)[o0]s\/(\d+(\.\d+)*)/i,c),p={name:h.OS_MAP.WebOS};return f&&f.length&&(p.version=f),p}},{test:[/blackberry|\bbb\d+/i,/rim\stablet/i],describe:function(c){var f=l.default.getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i,c)||l.default.getFirstMatch(/blackberry\d+\/(\d+([_\s]\d+)*)/i,c)||l.default.getFirstMatch(/\bbb(\d+)/i,c);return{name:h.OS_MAP.BlackBerry,version:f}}},{test:[/bada/i],describe:function(c){var f=l.default.getFirstMatch(/bada\/(\d+(\.\d+)*)/i,c);return{name:h.OS_MAP.Bada,version:f}}},{test:[/tizen/i],describe:function(c){var f=l.default.getFirstMatch(/tizen[/\s](\d+(\.\d+)*)/i,c);return{name:h.OS_MAP.Tizen,version:f}}},{test:[/linux/i],describe:function(){return{name:h.OS_MAP.Linux}}},{test:[/CrOS/],describe:function(){return{name:h.OS_MAP.ChromeOS}}},{test:[/PlayStation 4/],describe:function(c){var f=l.default.getFirstMatch(/PlayStation 4[/\s](\d+(\.\d+)*)/i,c);return{name:h.OS_MAP.PlayStation4,version:f}}}],r.exports=i.default},94:function(r,i,a){"use strict";i.__esModule=!0,i.default=void 0;var s,l=(s=a(17))&&s.__esModule?s:{default:s},h=a(18);i.default=[{test:[/googlebot/i],describe:function(){return{type:h.PLATFORMS_MAP.bot,vendor:"Google"}}},{test:[/linespider/i],describe:function(){return{type:h.PLATFORMS_MAP.bot,vendor:"Line"}}},{test:[/amazonbot/i],describe:function(){return{type:h.PLATFORMS_MAP.bot,vendor:"Amazon"}}},{test:[/gptbot/i],describe:function(){return{type:h.PLATFORMS_MAP.bot,vendor:"OpenAI"}}},{test:[/chatgpt-user/i],describe:function(){return{type:h.PLATFORMS_MAP.bot,vendor:"OpenAI"}}},{test:[/oai-searchbot/i],describe:function(){return{type:h.PLATFORMS_MAP.bot,vendor:"OpenAI"}}},{test:[/baiduspider/i],describe:function(){return{type:h.PLATFORMS_MAP.bot,vendor:"Baidu"}}},{test:[/bingbot/i],describe:function(){return{type:h.PLATFORMS_MAP.bot,vendor:"Bing"}}},{test:[/duckduckbot/i],describe:function(){return{type:h.PLATFORMS_MAP.bot,vendor:"DuckDuckGo"}}},{test:[/claudebot/i,/claude-web/i,/claude-user/i,/claude-searchbot/i],describe:function(){return{type:h.PLATFORMS_MAP.bot,vendor:"Anthropic"}}},{test:[/omgilibot/i,/webzio-extended/i],describe:function(){return{type:h.PLATFORMS_MAP.bot,vendor:"Webz.io"}}},{test:[/diffbot/i],describe:function(){return{type:h.PLATFORMS_MAP.bot,vendor:"Diffbot"}}},{test:[/perplexitybot/i],describe:function(){return{type:h.PLATFORMS_MAP.bot,vendor:"Perplexity AI"}}},{test:[/perplexity-user/i],describe:function(){return{type:h.PLATFORMS_MAP.bot,vendor:"Perplexity AI"}}},{test:[/youbot/i],describe:function(){return{type:h.PLATFORMS_MAP.bot,vendor:"You.com"}}},{test:[/ia_archiver/i],describe:function(){return{type:h.PLATFORMS_MAP.bot,vendor:"Internet Archive"}}},{test:[/meta-webindexer/i],describe:function(){return{type:h.PLATFORMS_MAP.bot,vendor:"Meta"}}},{test:[/meta-externalads/i],describe:function(){return{type:h.PLATFORMS_MAP.bot,vendor:"Meta"}}},{test:[/meta-externalagent/i],describe:function(){return{type:h.PLATFORMS_MAP.bot,vendor:"Meta"}}},{test:[/meta-externalfetcher/i],describe:function(){return{type:h.PLATFORMS_MAP.bot,vendor:"Meta"}}},{test:[/facebookexternalhit/i,/facebookcatalog/i],describe:function(){return{type:h.PLATFORMS_MAP.bot,vendor:"Meta"}}},{test:[/slackbot/i,/slack-imgProxy/i],describe:function(){return{type:h.PLATFORMS_MAP.bot,vendor:"Slack"}}},{test:[/yahoo/i],describe:function(){return{type:h.PLATFORMS_MAP.bot,vendor:"Yahoo"}}},{test:[/yandexbot/i,/yandexmobilebot/i],describe:function(){return{type:h.PLATFORMS_MAP.bot,vendor:"Yandex"}}},{test:[/pingdom/i],describe:function(){return{type:h.PLATFORMS_MAP.bot,vendor:"Pingdom"}}},{test:[/huawei/i],describe:function(c){var f=l.default.getFirstMatch(/(can-l01)/i,c)&&"Nova",p={type:h.PLATFORMS_MAP.mobile,vendor:"Huawei"};return f&&(p.model=f),p}},{test:[/nexus\s*(?:7|8|9|10).*/i],describe:function(){return{type:h.PLATFORMS_MAP.tablet,vendor:"Nexus"}}},{test:[/ipad/i],describe:function(){return{type:h.PLATFORMS_MAP.tablet,vendor:"Apple",model:"iPad"}}},{test:[/Macintosh(.*?) FxiOS(.*?)\//],describe:function(){return{type:h.PLATFORMS_MAP.tablet,vendor:"Apple",model:"iPad"}}},{test:[/kftt build/i],describe:function(){return{type:h.PLATFORMS_MAP.tablet,vendor:"Amazon",model:"Kindle Fire HD 7"}}},{test:[/silk/i],describe:function(){return{type:h.PLATFORMS_MAP.tablet,vendor:"Amazon"}}},{test:[/tablet(?! pc)/i],describe:function(){return{type:h.PLATFORMS_MAP.tablet}}},{test:function(c){var f=c.test(/ipod|iphone/i),p=c.test(/like (ipod|iphone)/i);return f&&!p},describe:function(c){var f=l.default.getFirstMatch(/(ipod|iphone)/i,c);return{type:h.PLATFORMS_MAP.mobile,vendor:"Apple",model:f}}},{test:[/nexus\s*[0-6].*/i,/galaxy nexus/i],describe:function(){return{type:h.PLATFORMS_MAP.mobile,vendor:"Nexus"}}},{test:[/Nokia/i],describe:function(c){var f=l.default.getFirstMatch(/Nokia\s+([0-9]+(\.[0-9]+)?)/i,c),p={type:h.PLATFORMS_MAP.mobile,vendor:"Nokia"};return f&&(p.model=f),p}},{test:[/[^-]mobi/i],describe:function(){return{type:h.PLATFORMS_MAP.mobile}}},{test:function(c){return c.getBrowserName(!0)==="blackberry"},describe:function(){return{type:h.PLATFORMS_MAP.mobile,vendor:"BlackBerry"}}},{test:function(c){return c.getBrowserName(!0)==="bada"},describe:function(){return{type:h.PLATFORMS_MAP.mobile}}},{test:function(c){return c.getBrowserName()==="windows phone"},describe:function(){return{type:h.PLATFORMS_MAP.mobile,vendor:"Microsoft"}}},{test:function(c){var f=Number(String(c.getOSVersion()).split(".")[0]);return c.getOSName(!0)==="android"&&f>=3},describe:function(){return{type:h.PLATFORMS_MAP.tablet}}},{test:function(c){return c.getOSName(!0)==="android"},describe:function(){return{type:h.PLATFORMS_MAP.mobile}}},{test:[/smart-?tv|smarttv/i],describe:function(){return{type:h.PLATFORMS_MAP.tv}}},{test:[/netcast/i],describe:function(){return{type:h.PLATFORMS_MAP.tv}}},{test:function(c){return c.getOSName(!0)==="macos"},describe:function(){return{type:h.PLATFORMS_MAP.desktop,vendor:"Apple"}}},{test:function(c){return c.getOSName(!0)==="windows"},describe:function(){return{type:h.PLATFORMS_MAP.desktop}}},{test:function(c){return c.getOSName(!0)==="linux"},describe:function(){return{type:h.PLATFORMS_MAP.desktop}}},{test:function(c){return c.getOSName(!0)==="playstation 4"},describe:function(){return{type:h.PLATFORMS_MAP.tv}}},{test:function(c){return c.getOSName(!0)==="roku"},describe:function(){return{type:h.PLATFORMS_MAP.tv}}}],r.exports=i.default},95:function(r,i,a){"use strict";i.__esModule=!0,i.default=void 0;var s,l=(s=a(17))&&s.__esModule?s:{default:s},h=a(18);i.default=[{test:function(c){return c.getBrowserName(!0)==="microsoft edge"},describe:function(c){if(/\sedg\//i.test(c))return{name:h.ENGINE_MAP.Blink};var f=l.default.getFirstMatch(/edge\/(\d+(\.?_?\d+)+)/i,c);return{name:h.ENGINE_MAP.EdgeHTML,version:f}}},{test:[/trident/i],describe:function(c){var f={name:h.ENGINE_MAP.Trident},p=l.default.getFirstMatch(/trident\/(\d+(\.?_?\d+)+)/i,c);return p&&(f.version=p),f}},{test:function(c){return c.test(/presto/i)},describe:function(c){var f={name:h.ENGINE_MAP.Presto},p=l.default.getFirstMatch(/presto\/(\d+(\.?_?\d+)+)/i,c);return p&&(f.version=p),f}},{test:function(c){var f=c.test(/gecko/i),p=c.test(/like gecko/i);return f&&!p},describe:function(c){var f={name:h.ENGINE_MAP.Gecko},p=l.default.getFirstMatch(/gecko\/(\d+(\.?_?\d+)+)/i,c);return p&&(f.version=p),f}},{test:[/(apple)?webkit\/537\.36/i],describe:function(){return{name:h.ENGINE_MAP.Blink}}},{test:[/(apple)?webkit/i],describe:function(c){var f={name:h.ENGINE_MAP.WebKit},p=l.default.getFirstMatch(/webkit\/(\d+(\.?_?\d+)+)/i,c);return p&&(f.version=p),f}}],r.exports=i.default}})}))})),rd=Hi(rp(),1);function np(e,t){typeof unsafeWindow<"u"&&(unsafeWindow[e]=t),typeof window<"u"&&(window[e]=t)}function ye(...e){return console.log("MangaOnlineViewer-main-min: ",...e),e}function qt(...e){return["dev","development"].includes("main-min")&&console.info("MangaOnlineViewer: ",...e),e}function nd(e){typeof GM_deleteValue<"u"?GM_deleteValue(e):qt("Fake Removing: ",e)}var As=typeof GM_info<"u"?GM_info:{scriptHandler:"Console",script:{name:"Debug",version:"Testing"}};function op(e,t){return typeof GM_getValue<"u"?GM_getValue(e,t):(qt("Fake Getting: ",e," = ",t),t)}function od(e,t){const r=op(e,t);if(typeof r=="string"&&r.trim()!=="")try{return JSON.parse(r)}catch(i){return ye("Failed to parse JSON from storage",e,i),t}return r}function ip(e){return od("settings",e)}function ap(e){return od(window.location.hostname,e)}function id(e,t){return typeof GM_setValue<"u"?(GM_setValue(e,t),ye("Setting: ",e," = ",t),t.toString()):(qt("Fake Setting: ",e," = ",t),String(t))}function sp(e){return id("settings",e)}function ad(e){return id(window.location.hostname,e)}function lp(){const e=rd.default.getParser(window.navigator.userAgent).getBrowser();return`${e.name} ${e.version}`}function cp(){return As.scriptHandler??"Greasemonkey"}var Zo=()=>{const e=rd.default.getParser(window.navigator.userAgent).getPlatformType(!0);return e==="mobile"||window.matchMedia("screen and (max-width: 600px)").matches?"mobile":e==="tablet"||window.matchMedia("screen and (max-width: 992px)").matches?"tablet":"desktop"},dp=()=>Zo()==="mobile"||Zo()==="tablet",Ms=()=>window.location.protocol==="file:"||window.location.pathname.endsWith("Manga_Local_Viewer.html"),sd=(e,t="settings")=>{if(typeof GM_addValueChangeListener<"u")try{return GM_addValueChangeListener(t,(r,i,a,s)=>{s&&e(a)})}catch(r){ye("Failed to add settings listener",r)}},up=Er(((e,t)=>{(function(){var r,i="4.18.1",a=200,s="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",l="Expected a function",h="Invalid `variable` option passed into `_.template`",c="Invalid `imports` option passed into `_.template`",f="__lodash_hash_undefined__",p=500,w="__lodash_placeholder__",b=1,m=2,v=4,E=1,y=2,S=1,x=2,O=4,L=8,N=16,Y=32,Z=64,ie=128,W=256,ge=512,_e=30,P="...",J=800,A=16,ee=1,Ce=2,de=3,Oe=1/0,ae=9007199254740991,Ie=17976931348623157e292,U=NaN,G=4294967295,Me=G-1,me=G>>>1,pe=[["ary",ie],["bind",S],["bindKey",x],["curry",L],["curryRight",N],["flip",ge],["partial",Y],["partialRight",Z],["rearg",W]],Ke="[object Arguments]",mt="[object Array]",Ve="[object AsyncFunction]",We="[object Boolean]",ft="[object Date]",vt="[object DOMException]",Kt="[object Error]",Wt="[object Function]",_="[object GeneratorFunction]",Q="[object Map]",q="[object Number]",T="[object Null]",C="[object Object]",B="[object Promise]",se="[object Proxy]",le="[object RegExp]",F="[object Set]",ue="[object String]",ve="[object Symbol]",he="[object Undefined]",Ae="[object WeakMap]",tt="[object WeakSet]",Ue="[object ArrayBuffer]",Lt="[object DataView]",nn="[object Float32Array]",rr="[object Float64Array]",on="[object Int8Array]",lt="[object Int16Array]",In="[object Int32Array]",Qn="[object Uint8Array]",vr="[object Uint8ClampedArray]",Ro="[object Uint16Array]",Ei="[object Uint32Array]",Hl=/\b__p \+= '';/g,Fl=/\b(__p \+=) '' \+/g,Da=/(__e\(.*?\)|\b__t\)) \+\n'';/g,Cn=/&(?:amp|lt|gt|quot|#39);/g,eo=/[&<>"']/g,cw=RegExp(Cn.source),dw=RegExp(eo.source),uw=/<%-([\s\S]+?)%>/g,hw=/<%([\s\S]+?)%>/g,mh=/<%=([\s\S]+?)%>/g,fw=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,pw=/^\w*$/,gw=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Gl=/[\\^$.*+?()[\]{}|]/g,mw=RegExp(Gl.source),Wl=/^\s+/,vw=/\s/,bw=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,ww=/\{\n\/\* \[wrapped with (.+)\] \*/,_w=/,? & /,yw=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,vh=/[()=,{}\[\]\/\s]/,kw=/\\(\\)?/g,Ew=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,bh=/\w*$/,Sw=/^[-+]0x[0-9a-f]+$/i,Aw=/^0b[01]+$/i,Mw=/^\[object .+?Constructor\]$/,xw=/^0o[0-7]+$/i,Iw=/^(?:0|[1-9]\d*)$/,Cw=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Na=/($^)/,Ow=/['\n\r\u2028\u2029\\]/g,Ba="\\ud800-\\udfff",wh="\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff",_h="\\u2700-\\u27bf",yh="a-z\\xdf-\\xf6\\xf8-\\xff",Tw="\\xac\\xb1\\xd7\\xf7",Lw="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",Rw="\\u2000-\\u206f",Pw=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",kh="A-Z\\xc0-\\xd6\\xd8-\\xde",Eh="\\ufe0e\\ufe0f",Sh=Tw+Lw+Rw+Pw,Ul="['’]",$w="["+Ba+"]",Ah="["+Sh+"]",Ha="["+wh+"]",Mh="\\d+",zw="["+_h+"]",xh="["+yh+"]",Ih="[^"+Ba+Sh+Mh+_h+yh+kh+"]",Vl="\\ud83c[\\udffb-\\udfff]",Dw="(?:"+Ha+"|"+Vl+")",Ch="[^"+Ba+"]",ql="(?:\\ud83c[\\udde6-\\uddff]){2}",Zl="[\\ud800-\\udbff][\\udc00-\\udfff]",Po="["+kh+"]",Oh="\\u200d",Th="(?:"+xh+"|"+Ih+")",Nw="(?:"+Po+"|"+Ih+")",Lh="(?:"+Ul+"(?:d|ll|m|re|s|t|ve))?",Rh="(?:"+Ul+"(?:D|LL|M|RE|S|T|VE))?",Ph=Dw+"?",$h="["+Eh+"]?",Bw="(?:"+Oh+"(?:"+[Ch,ql,Zl].join("|")+")"+$h+Ph+")*",Hw="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Fw="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",zh=$h+Ph+Bw,Gw="(?:"+[zw,ql,Zl].join("|")+")"+zh,Ww="(?:"+[Ch+Ha+"?",Ha,ql,Zl,$w].join("|")+")",Uw=RegExp(Ul,"g"),Vw=RegExp(Ha,"g"),jl=RegExp(Vl+"(?="+Vl+")|"+Ww+zh,"g"),qw=RegExp([Po+"?"+xh+"+"+Lh+"(?="+[Ah,Po,"$"].join("|")+")",Nw+"+"+Rh+"(?="+[Ah,Po+Th,"$"].join("|")+")",Po+"?"+Th+"+"+Lh,Po+"+"+Rh,Fw,Hw,Mh,Gw].join("|"),"g"),Zw=RegExp("["+Oh+Ba+wh+Eh+"]"),jw=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,Kw=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],Yw=-1,ct={};ct[nn]=ct[rr]=ct[on]=ct[lt]=ct[In]=ct[Qn]=ct[vr]=ct[Ro]=ct[Ei]=!0,ct[Ke]=ct[mt]=ct[Ue]=ct[We]=ct[Lt]=ct[ft]=ct[Kt]=ct[Wt]=ct[Q]=ct[q]=ct[C]=ct[le]=ct[F]=ct[ue]=ct[Ae]=!1;var at={};at[Ke]=at[mt]=at[Ue]=at[Lt]=at[We]=at[ft]=at[nn]=at[rr]=at[on]=at[lt]=at[In]=at[Q]=at[q]=at[C]=at[le]=at[F]=at[ue]=at[ve]=at[Qn]=at[vr]=at[Ro]=at[Ei]=!0,at[Kt]=at[Wt]=at[Ae]=!1;var Xw={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},Jw={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Qw={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},e7={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},t7=parseFloat,r7=parseInt,Dh=typeof global=="object"&&global&&global.Object===Object&&global,n7=typeof self=="object"&&self&&self.Object===Object&&self,$t=Dh||n7||Function("return this")(),Kl=typeof e=="object"&&e&&!e.nodeType&&e,to=Kl&&typeof t=="object"&&t&&!t.nodeType&&t,Nh=to&&to.exports===Kl,Yl=Nh&&Dh.process,Ir=(function(){try{var D=to&&to.require&&to.require("util").types;return D||Yl&&Yl.binding&&Yl.binding("util")}catch{}})(),Bh=Ir&&Ir.isArrayBuffer,Hh=Ir&&Ir.isDate,Fh=Ir&&Ir.isMap,Gh=Ir&&Ir.isRegExp,Wh=Ir&&Ir.isSet,Uh=Ir&&Ir.isTypedArray;function br(D,te,V){switch(V.length){case 0:return D.call(te);case 1:return D.call(te,V[0]);case 2:return D.call(te,V[0],V[1]);case 3:return D.call(te,V[0],V[1],V[2])}return D.apply(te,V)}function o7(D,te,V,we){for(var ze=-1,Xe=D==null?0:D.length;++ze<Xe;){var Rt=D[ze];te(we,Rt,V(Rt),D)}return we}function wr(D,te){for(var V=-1,we=D==null?0:D.length;++V<we&&te(D[V],V,D)!==!1;);return D}function i7(D,te){for(var V=D==null?0:D.length;V--&&te(D[V],V,D)!==!1;);return D}function Vh(D,te){for(var V=-1,we=D==null?0:D.length;++V<we;)if(!te(D[V],V,D))return!1;return!0}function On(D,te){for(var V=-1,we=D==null?0:D.length,ze=0,Xe=[];++V<we;){var Rt=D[V];te(Rt,V,D)&&(Xe[ze++]=Rt)}return Xe}function Fa(D,te){return!!(D!=null&&D.length)&&$o(D,te,0)>-1}function Xl(D,te,V){for(var we=-1,ze=D==null?0:D.length;++we<ze;)if(V(te,D[we]))return!0;return!1}function pt(D,te){for(var V=-1,we=D==null?0:D.length,ze=Array(we);++V<we;)ze[V]=te(D[V],V,D);return ze}function Tn(D,te){for(var V=-1,we=te.length,ze=D.length;++V<we;)D[ze+V]=te[V];return D}function Jl(D,te,V,we){var ze=-1,Xe=D==null?0:D.length;for(we&&Xe&&(V=D[++ze]);++ze<Xe;)V=te(V,D[ze],ze,D);return V}function a7(D,te,V,we){var ze=D==null?0:D.length;for(we&&ze&&(V=D[--ze]);ze--;)V=te(V,D[ze],ze,D);return V}function Ql(D,te){for(var V=-1,we=D==null?0:D.length;++V<we;)if(te(D[V],V,D))return!0;return!1}var s7=ec("length");function l7(D){return D.split("")}function c7(D){return D.match(yw)||[]}function qh(D,te,V){var we;return V(D,function(ze,Xe,Rt){if(te(ze,Xe,Rt))return we=Xe,!1}),we}function Ga(D,te,V,we){for(var ze=D.length,Xe=V+(we?1:-1);we?Xe--:++Xe<ze;)if(te(D[Xe],Xe,D))return Xe;return-1}function $o(D,te,V){return te===te?y7(D,te,V):Ga(D,Zh,V)}function d7(D,te,V,we){for(var ze=V-1,Xe=D.length;++ze<Xe;)if(we(D[ze],te))return ze;return-1}function Zh(D){return D!==D}function jh(D,te){var V=D==null?0:D.length;return V?rc(D,te)/V:U}function ec(D){return function(te){return te==null?r:te[D]}}function tc(D){return function(te){return D==null?r:D[te]}}function Kh(D,te,V,we,ze){return ze(D,function(Xe,Rt,rt){V=we?(we=!1,Xe):te(V,Xe,Rt,rt)}),V}function u7(D,te){var V=D.length;for(D.sort(te);V--;)D[V]=D[V].value;return D}function rc(D,te){for(var V,we=-1,ze=D.length;++we<ze;){var Xe=te(D[we]);Xe!==r&&(V=V===r?Xe:V+Xe)}return V}function nc(D,te){for(var V=-1,we=Array(D);++V<D;)we[V]=te(V);return we}function h7(D,te){return pt(te,function(V){return[V,D[V]]})}function Yh(D){return D&&D.slice(0,e1(D)+1).replace(Wl,"")}function _r(D){return function(te){return D(te)}}function oc(D,te){return pt(te,function(V){return D[V]})}function Si(D,te){return D.has(te)}function Xh(D,te){for(var V=-1,we=D.length;++V<we&&$o(te,D[V],0)>-1;);return V}function Jh(D,te){for(var V=D.length;V--&&$o(te,D[V],0)>-1;);return V}function f7(D,te){for(var V=D.length,we=0;V--;)D[V]===te&&++we;return we}var p7=tc(Xw),g7=tc(Jw);function m7(D){return"\\"+e7[D]}function v7(D,te){return D==null?r:D[te]}function zo(D){return Zw.test(D)}function b7(D){return jw.test(D)}function w7(D){for(var te,V=[];!(te=D.next()).done;)V.push(te.value);return V}function ic(D){var te=-1,V=Array(D.size);return D.forEach(function(we,ze){V[++te]=[ze,we]}),V}function Qh(D,te){return function(V){return D(te(V))}}function Ln(D,te){for(var V=-1,we=D.length,ze=0,Xe=[];++V<we;){var Rt=D[V];(Rt===te||Rt===w)&&(D[V]=w,Xe[ze++]=V)}return Xe}function Wa(D){var te=-1,V=Array(D.size);return D.forEach(function(we){V[++te]=we}),V}function _7(D){var te=-1,V=Array(D.size);return D.forEach(function(we){V[++te]=[we,we]}),V}function y7(D,te,V){for(var we=V-1,ze=D.length;++we<ze;)if(D[we]===te)return we;return-1}function k7(D,te,V){for(var we=V+1;we--;)if(D[we]===te)return we;return we}function Do(D){return zo(D)?S7(D):s7(D)}function Nr(D){return zo(D)?A7(D):l7(D)}function e1(D){for(var te=D.length;te--&&vw.test(D.charAt(te)););return te}var E7=tc(Qw);function S7(D){for(var te=jl.lastIndex=0;jl.test(D);)++te;return te}function A7(D){return D.match(jl)||[]}function M7(D){return D.match(qw)||[]}var Rn=(function D(te){te=te==null?$t:Rn.defaults($t.Object(),te,Rn.pick($t,Kw));var V=te.Array,we=te.Date,ze=te.Error,Xe=te.Function,Rt=te.Math,rt=te.Object,ac=te.RegExp,x7=te.String,Cr=te.TypeError,Ua=V.prototype,I7=Xe.prototype,No=rt.prototype,Va=te["__core-js_shared__"],qa=I7.toString,Qe=No.hasOwnProperty,C7=0,t1=(function(){var n=/[^.]+$/.exec(Va&&Va.keys&&Va.keys.IE_PROTO||"");return n?"Symbol(src)_1."+n:""})(),Za=No.toString,O7=qa.call(rt),T7=$t._,L7=ac("^"+qa.call(Qe).replace(Gl,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),ja=Nh?te.Buffer:r,Pn=te.Symbol,Ka=te.Uint8Array,r1=ja?ja.allocUnsafe:r,Ya=Qh(rt.getPrototypeOf,rt),n1=rt.create,o1=No.propertyIsEnumerable,Xa=Ua.splice,i1=Pn?Pn.isConcatSpreadable:r,Ai=Pn?Pn.iterator:r,ro=Pn?Pn.toStringTag:r,Ja=(function(){try{var n=so(rt,"defineProperty");return n({},"",{}),n}catch{}})(),R7=te.clearTimeout!==$t.clearTimeout&&te.clearTimeout,P7=we&&we.now!==$t.Date.now&&we.now,$7=te.setTimeout!==$t.setTimeout&&te.setTimeout,Qa=Rt.ceil,es=Rt.floor,sc=rt.getOwnPropertySymbols,z7=ja?ja.isBuffer:r,a1=te.isFinite,D7=Ua.join,N7=Qh(rt.keys,rt),Pt=Rt.max,Ut=Rt.min,B7=we.now,H7=te.parseInt,s1=Rt.random,F7=Ua.reverse,lc=so(te,"DataView"),Mi=so(te,"Map"),cc=so(te,"Promise"),Bo=so(te,"Set"),xi=so(te,"WeakMap"),Ii=so(rt,"create"),ts=xi&&new xi,Ho={},G7=lo(lc),W7=lo(Mi),U7=lo(cc),V7=lo(Bo),q7=lo(xi),rs=Pn?Pn.prototype:r,Ci=rs?rs.valueOf:r,l1=rs?rs.toString:r;function M(n){if(_t(n)&&!Fe(n)&&!(n instanceof Ze)){if(n instanceof Or)return n;if(Qe.call(n,"__wrapped__"))return df(n)}return new Or(n)}var Fo=(function(){function n(){}return function(o){if(!bt(o))return{};if(n1)return n1(o);n.prototype=o;var u=new n;return n.prototype=r,u}})();function ns(){}function Or(n,o){this.__wrapped__=n,this.__actions__=[],this.__chain__=!!o,this.__index__=0,this.__values__=r}M.templateSettings={escape:uw,evaluate:hw,interpolate:mh,variable:"",imports:{_:M}},M.prototype=ns.prototype,M.prototype.constructor=M,Or.prototype=Fo(ns.prototype),Or.prototype.constructor=Or;function Ze(n){this.__wrapped__=n,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=G,this.__views__=[]}function Z7(){var n=new Ze(this.__wrapped__);return n.__actions__=nr(this.__actions__),n.__dir__=this.__dir__,n.__filtered__=this.__filtered__,n.__iteratees__=nr(this.__iteratees__),n.__takeCount__=this.__takeCount__,n.__views__=nr(this.__views__),n}function j7(){if(this.__filtered__){var n=new Ze(this);n.__dir__=-1,n.__filtered__=!0}else n=this.clone(),n.__dir__*=-1;return n}function K7(){var n=this.__wrapped__.value(),o=this.__dir__,u=Fe(n),g=o<0,k=u?n.length:0,I=s_(0,k,this.__views__),R=I.start,$=I.end,H=$-R,ne=g?$:R-1,re=this.__iteratees__,ce=re.length,be=0,ke=Ut(H,this.__takeCount__);if(!u||!g&&k==H&&ke==H)return L1(n,this.__actions__);var Te=[];e:for(;H--&&be<ke;){ne+=o;for(var Ne=-1,Le=n[ne];++Ne<ce;){var nt=re[Ne],je=nt.iteratee,Jt=nt.type,Xr=je(Le);if(Jt==Ce)Le=Xr;else if(!Xr){if(Jt==ee)continue e;break e}}Te[be++]=Le}return Te}Ze.prototype=Fo(ns.prototype),Ze.prototype.constructor=Ze;function no(n){var o=-1,u=n==null?0:n.length;for(this.clear();++o<u;){var g=n[o];this.set(g[0],g[1])}}function Y7(){this.__data__=Ii?Ii(null):{},this.size=0}function X7(n){var o=this.has(n)&&delete this.__data__[n];return this.size-=o?1:0,o}function J7(n){var o=this.__data__;if(Ii){var u=o[n];return u===f?r:u}return Qe.call(o,n)?o[n]:r}function Q7(n){var o=this.__data__;return Ii?o[n]!==r:Qe.call(o,n)}function e8(n,o){var u=this.__data__;return this.size+=this.has(n)?0:1,u[n]=Ii&&o===r?f:o,this}no.prototype.clear=Y7,no.prototype.delete=X7,no.prototype.get=J7,no.prototype.has=Q7,no.prototype.set=e8;function an(n){var o=-1,u=n==null?0:n.length;for(this.clear();++o<u;){var g=n[o];this.set(g[0],g[1])}}function t8(){this.__data__=[],this.size=0}function r8(n){var o=this.__data__,u=os(o,n);return u<0?!1:(u==o.length-1?o.pop():Xa.call(o,u,1),--this.size,!0)}function n8(n){var o=this.__data__,u=os(o,n);return u<0?r:o[u][1]}function o8(n){return os(this.__data__,n)>-1}function i8(n,o){var u=this.__data__,g=os(u,n);return g<0?(++this.size,u.push([n,o])):u[g][1]=o,this}an.prototype.clear=t8,an.prototype.delete=r8,an.prototype.get=n8,an.prototype.has=o8,an.prototype.set=i8;function sn(n){var o=-1,u=n==null?0:n.length;for(this.clear();++o<u;){var g=n[o];this.set(g[0],g[1])}}function a8(){this.size=0,this.__data__={hash:new no,map:new(Mi||an),string:new no}}function s8(n){var o=ms(this,n).delete(n);return this.size-=o?1:0,o}function l8(n){return ms(this,n).get(n)}function c8(n){return ms(this,n).has(n)}function d8(n,o){var u=ms(this,n),g=u.size;return u.set(n,o),this.size+=u.size==g?0:1,this}sn.prototype.clear=a8,sn.prototype.delete=s8,sn.prototype.get=l8,sn.prototype.has=c8,sn.prototype.set=d8;function oo(n){var o=-1,u=n==null?0:n.length;for(this.__data__=new sn;++o<u;)this.add(n[o])}function u8(n){return this.__data__.set(n,f),this}function h8(n){return this.__data__.has(n)}oo.prototype.add=oo.prototype.push=u8,oo.prototype.has=h8;function Br(n){var o=this.__data__=new an(n);this.size=o.size}function f8(){this.__data__=new an,this.size=0}function p8(n){var o=this.__data__,u=o.delete(n);return this.size=o.size,u}function g8(n){return this.__data__.get(n)}function m8(n){return this.__data__.has(n)}function v8(n,o){var u=this.__data__;if(u instanceof an){var g=u.__data__;if(!Mi||g.length<a-1)return g.push([n,o]),this.size=++u.size,this;u=this.__data__=new sn(g)}return u.set(n,o),this.size=u.size,this}Br.prototype.clear=f8,Br.prototype.delete=p8,Br.prototype.get=g8,Br.prototype.has=m8,Br.prototype.set=v8;function c1(n,o){var u=Fe(n),g=!u&&co(n),k=!u&&!g&&Bn(n),I=!u&&!g&&!k&&Vo(n),R=u||g||k||I,$=R?nc(n.length,x7):[],H=$.length;for(var ne in n)(o||Qe.call(n,ne))&&!(R&&(ne=="length"||k&&(ne=="offset"||ne=="parent")||I&&(ne=="buffer"||ne=="byteLength"||ne=="byteOffset")||dn(ne,H)))&&$.push(ne);return $}function d1(n){var o=n.length;return o?n[_c(0,o-1)]:r}function b8(n,o){return vs(nr(n),io(o,0,n.length))}function w8(n){return vs(nr(n))}function dc(n,o,u){(u!==r&&!Fr(n[o],u)||u===r&&!(o in n))&&jr(n,o,u)}function Oi(n,o,u){var g=n[o];(!(Qe.call(n,o)&&Fr(g,u))||u===r&&!(o in n))&&jr(n,o,u)}function os(n,o){for(var u=n.length;u--;)if(Fr(n[u][0],o))return u;return-1}function _8(n,o,u,g){return $n(n,function(k,I,R){o(g,k,u(k),R)}),g}function u1(n,o){return n&&Yr(o,zt(o),n)}function y8(n,o){return n&&Yr(o,ir(o),n)}function jr(n,o,u){o=="__proto__"&&Ja?Ja(n,o,{configurable:!0,enumerable:!0,value:u,writable:!0}):n[o]=u}function uc(n,o){for(var u=-1,g=o.length,k=V(g),I=n==null;++u<g;)k[u]=I?r:qc(n,o[u]);return k}function io(n,o,u){return n===n&&(u!==r&&(n=n<=u?n:u),o!==r&&(n=n>=o?n:o)),n}function Tr(n,o,u,g,k,I){var R,$=o&b,H=o&m,ne=o&v;if(u&&(R=k?u(n,g,k,I):u(n)),R!==r)return R;if(!bt(n))return n;var re=Fe(n);if(re){if(R=c_(n),!$)return nr(n,R)}else{var ce=Vt(n),be=ce==Wt||ce==_;if(Bn(n))return $1(n,$);if(ce==C||ce==Ke||be&&!k){if(R=H||be?{}:ef(n),!$)return H?J8(n,y8(R,n)):X8(n,u1(R,n))}else{if(!at[ce])return k?n:{};R=d_(n,ce,$)}}I||(I=new Br);var ke=I.get(n);if(ke)return ke;I.set(n,R),Of(n)?n.forEach(function(Ne){R.add(Tr(Ne,o,u,Ne,n,I))}):If(n)&&n.forEach(function(Ne,Le){R.set(Le,Tr(Ne,o,u,Le,n,I))});var Te=re?r:(ne?H?Tc:Oc:H?ir:zt)(n);return wr(Te||n,function(Ne,Le){Te&&(Le=Ne,Ne=n[Le]),Oi(R,Le,Tr(Ne,o,u,Le,n,I))}),R}function k8(n){var o=zt(n);return function(u){return h1(u,n,o)}}function h1(n,o,u){var g=u.length;if(n==null)return!g;for(n=rt(n);g--;){var k=u[g],I=o[k],R=n[k];if(R===r&&!(k in n)||!I(R))return!1}return!0}function f1(n,o,u){if(typeof n!="function")throw new Cr(l);return Di(function(){n.apply(r,u)},o)}function Ti(n,o,u,g){var k=-1,I=Fa,R=!0,$=n.length,H=[],ne=o.length;if(!$)return H;u&&(o=pt(o,_r(u))),g?(I=Xl,R=!1):o.length>=a&&(I=Si,R=!1,o=new oo(o));e:for(;++k<$;){var re=n[k],ce=u==null?re:u(re);if(re=g||re!==0?re:0,R&&ce===ce){for(var be=ne;be--;)if(o[be]===ce)continue e;H.push(re)}else I(o,ce,g)||H.push(re)}return H}var $n=H1(Kr),p1=H1(fc,!0);function E8(n,o){var u=!0;return $n(n,function(g,k,I){return u=!!o(g,k,I),u}),u}function is(n,o,u){for(var g=-1,k=n.length;++g<k;){var I=n[g],R=o(I);if(R!=null&&($===r?R===R&&!kr(R):u(R,$)))var $=R,H=I}return H}function S8(n,o,u,g){var k=n.length;for(u=Ge(u),u<0&&(u=-u>k?0:k+u),g=g===r||g>k?k:Ge(g),g<0&&(g+=k),g=u>g?0:Lf(g);u<g;)n[u++]=o;return n}function g1(n,o){var u=[];return $n(n,function(g,k,I){o(g,k,I)&&u.push(g)}),u}function Ft(n,o,u,g,k){var I=-1,R=n.length;for(u||(u=h_),k||(k=[]);++I<R;){var $=n[I];o>0&&u($)?o>1?Ft($,o-1,u,g,k):Tn(k,$):g||(k[k.length]=$)}return k}var hc=F1(),m1=F1(!0);function Kr(n,o){return n&&hc(n,o,zt)}function fc(n,o){return n&&m1(n,o,zt)}function as(n,o){return On(o,function(u){return un(n[u])})}function ao(n,o){o=Dn(o,n);for(var u=0,g=o.length;n!=null&&u<g;)n=n[Hr(o[u++])];return u&&u==g?n:r}function v1(n,o,u){var g=o(n);return Fe(n)?g:Tn(g,u(n))}function Yt(n){return n==null?n===r?he:T:ro&&ro in rt(n)?a_(n):w_(n)}function pc(n,o){return n>o}function A8(n,o){return n!=null&&Qe.call(n,o)}function M8(n,o){return n!=null&&o in rt(n)}function x8(n,o,u){return n>=Ut(o,u)&&n<Pt(o,u)}function gc(n,o,u){for(var g=u?Xl:Fa,k=n[0].length,I=n.length,R=I,$=V(I),H=1/0,ne=[];R--;){var re=n[R];R&&o&&(re=pt(re,_r(o))),H=Ut(re.length,H),$[R]=!u&&(o||k>=120&&re.length>=120)?new oo(R&&re):r}re=n[0];var ce=-1,be=$[0];e:for(;++ce<k&&ne.length<H;){var ke=re[ce],Te=o?o(ke):ke;if(ke=u||ke!==0?ke:0,!(be?Si(be,Te):g(ne,Te,u))){for(R=I;--R;){var Ne=$[R];if(!(Ne?Si(Ne,Te):g(n[R],Te,u)))continue e}be&&be.push(Te),ne.push(ke)}}return ne}function I8(n,o,u,g){return Kr(n,function(k,I,R){o(g,u(k),I,R)}),g}function Li(n,o,u){o=Dn(o,n),n=of(n,o);var g=n==null?n:n[Hr(Rr(o))];return g==null?r:br(g,n,u)}function b1(n){return _t(n)&&Yt(n)==Ke}function C8(n){return _t(n)&&Yt(n)==Ue}function O8(n){return _t(n)&&Yt(n)==ft}function Ri(n,o,u,g,k){return n===o?!0:n==null||o==null||!_t(n)&&!_t(o)?n!==n&&o!==o:T8(n,o,u,g,Ri,k)}function T8(n,o,u,g,k,I){var R=Fe(n),$=Fe(o),H=R?mt:Vt(n),ne=$?mt:Vt(o);H=H==Ke?C:H,ne=ne==Ke?C:ne;var re=H==C,ce=ne==C,be=H==ne;if(be&&Bn(n)){if(!Bn(o))return!1;R=!0,re=!1}if(be&&!re)return I||(I=new Br),R||Vo(n)?X1(n,o,u,g,k,I):o_(n,o,H,u,g,k,I);if(!(u&E)){var ke=re&&Qe.call(n,"__wrapped__"),Te=ce&&Qe.call(o,"__wrapped__");if(ke||Te){var Ne=ke?n.value():n,Le=Te?o.value():o;return I||(I=new Br),k(Ne,Le,u,g,I)}}return be?(I||(I=new Br),i_(n,o,u,g,k,I)):!1}function L8(n){return _t(n)&&Vt(n)==Q}function mc(n,o,u,g){var k=u.length,I=k,R=!g;if(n==null)return!I;for(n=rt(n);k--;){var $=u[k];if(R&&$[2]?$[1]!==n[$[0]]:!($[0]in n))return!1}for(;++k<I;){$=u[k];var H=$[0],ne=n[H],re=$[1];if(R&&$[2]){if(ne===r&&!(H in n))return!1}else{var ce=new Br;if(g)var be=g(ne,re,H,n,o,ce);if(!(be===r?Ri(re,ne,E|y,g,ce):be))return!1}}return!0}function w1(n){return!bt(n)||p_(n)?!1:(un(n)?L7:Mw).test(lo(n))}function R8(n){return _t(n)&&Yt(n)==le}function P8(n){return _t(n)&&Vt(n)==F}function $8(n){return _t(n)&&Es(n.length)&&!!ct[Yt(n)]}function _1(n){return typeof n=="function"?n:n==null?ar:typeof n=="object"?Fe(n)?E1(n[0],n[1]):k1(n):Uf(n)}function vc(n){if(!zi(n))return N7(n);var o=[];for(var u in rt(n))Qe.call(n,u)&&u!="constructor"&&o.push(u);return o}function z8(n){if(!bt(n))return b_(n);var o=zi(n),u=[];for(var g in n)g=="constructor"&&(o||!Qe.call(n,g))||u.push(g);return u}function bc(n,o){return n<o}function y1(n,o){var u=-1,g=or(n)?V(n.length):[];return $n(n,function(k,I,R){g[++u]=o(k,I,R)}),g}function k1(n){var o=Rc(n);return o.length==1&&o[0][2]?rf(o[0][0],o[0][1]):function(u){return u===n||mc(u,n,o)}}function E1(n,o){return $c(n)&&tf(o)?rf(Hr(n),o):function(u){var g=qc(u,n);return g===r&&g===o?Zc(u,n):Ri(o,g,E|y)}}function ss(n,o,u,g,k){n!==o&&hc(o,function(I,R){if(k||(k=new Br),bt(I))D8(n,o,R,u,ss,g,k);else{var $=g?g(Dc(n,R),I,R+"",n,o,k):r;$===r&&($=I),dc(n,R,$)}},ir)}function D8(n,o,u,g,k,I,R){var $=Dc(n,u),H=Dc(o,u),ne=R.get(H);if(ne){dc(n,u,ne);return}var re=I?I($,H,u+"",n,o,R):r,ce=re===r;if(ce){var be=Fe(H),ke=!be&&Bn(H),Te=!be&&!ke&&Vo(H);re=H,be||ke||Te?Fe($)?re=$:Et($)?re=nr($):ke?(ce=!1,re=$1(H,!0)):Te?(ce=!1,re=z1(H,!0)):re=[]:Ni(H)||co(H)?(re=$,co($)?re=Rf($):(!bt($)||un($))&&(re=ef(H))):ce=!1}ce&&(R.set(H,re),k(re,H,g,I,R),R.delete(H)),dc(n,u,re)}function S1(n,o){var u=n.length;if(u)return o+=o<0?u:0,dn(o,u)?n[o]:r}function A1(n,o,u){o.length?o=pt(o,function(k){return Fe(k)?function(I){return ao(I,k.length===1?k[0]:k)}:k}):o=[ar];var g=-1;return o=pt(o,_r(Re())),u7(y1(n,function(k,I,R){return{criteria:pt(o,function($){return $(k)}),index:++g,value:k}}),function(k,I){return Y8(k,I,u)})}function N8(n,o){return M1(n,o,function(u,g){return Zc(n,g)})}function M1(n,o,u){for(var g=-1,k=o.length,I={};++g<k;){var R=o[g],$=ao(n,R);u($,R)&&Pi(I,Dn(R,n),$)}return I}function B8(n){return function(o){return ao(o,n)}}function wc(n,o,u,g){var k=g?d7:$o,I=-1,R=o.length,$=n;for(n===o&&(o=nr(o)),u&&($=pt(n,_r(u)));++I<R;)for(var H=0,ne=o[I],re=u?u(ne):ne;(H=k($,re,H,g))>-1;)$!==n&&Xa.call($,H,1),Xa.call(n,H,1);return n}function x1(n,o){for(var u=n?o.length:0,g=u-1;u--;){var k=o[u];if(u==g||k!==I){var I=k;dn(k)?Xa.call(n,k,1):Ec(n,k)}}return n}function _c(n,o){return n+es(s1()*(o-n+1))}function H8(n,o,u,g){for(var k=-1,I=Pt(Qa((o-n)/(u||1)),0),R=V(I);I--;)R[g?I:++k]=n,n+=u;return R}function yc(n,o){var u="";if(!n||o<1||o>ae)return u;do o%2&&(u+=n),o=es(o/2),o&&(n+=n);while(o);return u}function qe(n,o){return Nc(nf(n,o,ar),n+"")}function F8(n){return d1(qo(n))}function G8(n,o){var u=qo(n);return vs(u,io(o,0,u.length))}function Pi(n,o,u,g){if(!bt(n))return n;o=Dn(o,n);for(var k=-1,I=o.length,R=I-1,$=n;$!=null&&++k<I;){var H=Hr(o[k]),ne=u;if(H==="__proto__"||H==="constructor"||H==="prototype")return n;if(k!=R){var re=$[H];ne=g?g(re,H,$):r,ne===r&&(ne=bt(re)?re:dn(o[k+1])?[]:{})}Oi($,H,ne),$=$[H]}return n}var I1=ts?function(n,o){return ts.set(n,o),n}:ar,W8=Ja?function(n,o){return Ja(n,"toString",{configurable:!0,enumerable:!1,value:Kc(o),writable:!0})}:ar;function U8(n){return vs(qo(n))}function Lr(n,o,u){var g=-1,k=n.length;o<0&&(o=-o>k?0:k+o),u=u>k?k:u,u<0&&(u+=k),k=o>u?0:u-o>>>0,o>>>=0;for(var I=V(k);++g<k;)I[g]=n[g+o];return I}function V8(n,o){var u;return $n(n,function(g,k,I){return u=o(g,k,I),!u}),!!u}function ls(n,o,u){var g=0,k=n==null?g:n.length;if(typeof o=="number"&&o===o&&k<=me){for(;g<k;){var I=g+k>>>1,R=n[I];R!==null&&!kr(R)&&(u?R<=o:R<o)?g=I+1:k=I}return k}return kc(n,o,ar,u)}function kc(n,o,u,g){var k=0,I=n==null?0:n.length;if(I===0)return 0;o=u(o);for(var R=o!==o,$=o===null,H=kr(o),ne=o===r;k<I;){var re=es((k+I)/2),ce=u(n[re]),be=ce!==r,ke=ce===null,Te=ce===ce,Ne=kr(ce);if(R)var Le=g||Te;else ne?Le=Te&&(g||be):$?Le=Te&&be&&(g||!ke):H?Le=Te&&be&&!ke&&(g||!Ne):ke||Ne?Le=!1:Le=g?ce<=o:ce<o;Le?k=re+1:I=re}return Ut(I,Me)}function C1(n,o){for(var u=-1,g=n.length,k=0,I=[];++u<g;){var R=n[u],$=o?o(R):R;if(!u||!Fr($,H)){var H=$;I[k++]=R===0?0:R}}return I}function O1(n){return typeof n=="number"?n:kr(n)?U:+n}function yr(n){if(typeof n=="string")return n;if(Fe(n))return pt(n,yr)+"";if(kr(n))return l1?l1.call(n):"";var o=n+"";return o=="0"&&1/n==-Oe?"-0":o}function zn(n,o,u){var g=-1,k=Fa,I=n.length,R=!0,$=[],H=$;if(u)R=!1,k=Xl;else if(I>=a){var ne=o?null:r_(n);if(ne)return Wa(ne);R=!1,k=Si,H=new oo}else H=o?[]:$;e:for(;++g<I;){var re=n[g],ce=o?o(re):re;if(re=u||re!==0?re:0,R&&ce===ce){for(var be=H.length;be--;)if(H[be]===ce)continue e;o&&H.push(ce),$.push(re)}else k(H,ce,u)||(H!==$&&H.push(ce),$.push(re))}return $}function Ec(n,o){o=Dn(o,n);var u=-1,g=o.length;if(!g)return!0;for(;++u<g;){var k=Hr(o[u]);if(k==="__proto__"&&!Qe.call(n,"__proto__")||(k==="constructor"||k==="prototype")&&u<g-1)return!1}var I=of(n,o);return I==null||delete I[Hr(Rr(o))]}function T1(n,o,u,g){return Pi(n,o,u(ao(n,o)),g)}function cs(n,o,u,g){for(var k=n.length,I=g?k:-1;(g?I--:++I<k)&&o(n[I],I,n););return u?Lr(n,g?0:I,g?I+1:k):Lr(n,g?I+1:0,g?k:I)}function L1(n,o){var u=n;return u instanceof Ze&&(u=u.value()),Jl(o,function(g,k){return k.func.apply(k.thisArg,Tn([g],k.args))},u)}function Sc(n,o,u){var g=n.length;if(g<2)return g?zn(n[0]):[];for(var k=-1,I=V(g);++k<g;)for(var R=n[k],$=-1;++$<g;)$!=k&&(I[k]=Ti(I[k]||R,n[$],o,u));return zn(Ft(I,1),o,u)}function R1(n,o,u){for(var g=-1,k=n.length,I=o.length,R={};++g<k;){var $=g<I?o[g]:r;u(R,n[g],$)}return R}function Ac(n){return Et(n)?n:[]}function Mc(n){return typeof n=="function"?n:ar}function Dn(n,o){return Fe(n)?n:$c(n,o)?[n]:cf(et(n))}var q8=qe;function Nn(n,o,u){var g=n.length;return u=u===r?g:u,!o&&u>=g?n:Lr(n,o,u)}var P1=R7||function(n){return $t.clearTimeout(n)};function $1(n,o){if(o)return n.slice();var u=n.length,g=r1?r1(u):new n.constructor(u);return n.copy(g),g}function xc(n){var o=new n.constructor(n.byteLength);return new Ka(o).set(new Ka(n)),o}function Z8(n,o){var u=o?xc(n.buffer):n.buffer;return new n.constructor(u,n.byteOffset,n.byteLength)}function j8(n){var o=new n.constructor(n.source,bh.exec(n));return o.lastIndex=n.lastIndex,o}function K8(n){return Ci?rt(Ci.call(n)):{}}function z1(n,o){var u=o?xc(n.buffer):n.buffer;return new n.constructor(u,n.byteOffset,n.length)}function D1(n,o){if(n!==o){var u=n!==r,g=n===null,k=n===n,I=kr(n),R=o!==r,$=o===null,H=o===o,ne=kr(o);if(!$&&!ne&&!I&&n>o||I&&R&&H&&!$&&!ne||g&&R&&H||!u&&H||!k)return 1;if(!g&&!I&&!ne&&n<o||ne&&u&&k&&!g&&!I||$&&u&&k||!R&&k||!H)return-1}return 0}function Y8(n,o,u){for(var g=-1,k=n.criteria,I=o.criteria,R=k.length,$=u.length;++g<R;){var H=D1(k[g],I[g]);if(H)return g>=$?H:H*(u[g]=="desc"?-1:1)}return n.index-o.index}function N1(n,o,u,g){for(var k=-1,I=n.length,R=u.length,$=-1,H=o.length,ne=Pt(I-R,0),re=V(H+ne),ce=!g;++$<H;)re[$]=o[$];for(;++k<R;)(ce||k<I)&&(re[u[k]]=n[k]);for(;ne--;)re[$++]=n[k++];return re}function B1(n,o,u,g){for(var k=-1,I=n.length,R=-1,$=u.length,H=-1,ne=o.length,re=Pt(I-$,0),ce=V(re+ne),be=!g;++k<re;)ce[k]=n[k];for(var ke=k;++H<ne;)ce[ke+H]=o[H];for(;++R<$;)(be||k<I)&&(ce[ke+u[R]]=n[k++]);return ce}function nr(n,o){var u=-1,g=n.length;for(o||(o=V(g));++u<g;)o[u]=n[u];return o}function Yr(n,o,u,g){var k=!u;u||(u={});for(var I=-1,R=o.length;++I<R;){var $=o[I],H=g?g(u[$],n[$],$,u,n):r;H===r&&(H=n[$]),k?jr(u,$,H):Oi(u,$,H)}return u}function X8(n,o){return Yr(n,Pc(n),o)}function J8(n,o){return Yr(n,J1(n),o)}function ds(n,o){return function(u,g){var k=Fe(u)?o7:_8,I=o?o():{};return k(u,n,Re(g,2),I)}}function Go(n){return qe(function(o,u){var g=-1,k=u.length,I=k>1?u[k-1]:r,R=k>2?u[2]:r;for(I=n.length>3&&typeof I=="function"?(k--,I):r,R&&Xt(u[0],u[1],R)&&(I=k<3?r:I,k=1),o=rt(o);++g<k;){var $=u[g];$&&n(o,$,g,I)}return o})}function H1(n,o){return function(u,g){if(u==null)return u;if(!or(u))return n(u,g);for(var k=u.length,I=o?k:-1,R=rt(u);(o?I--:++I<k)&&g(R[I],I,R)!==!1;);return u}}function F1(n){return function(o,u,g){for(var k=-1,I=rt(o),R=g(o),$=R.length;$--;){var H=R[n?$:++k];if(u(I[H],H,I)===!1)break}return o}}function Q8(n,o,u){var g=o&S,k=$i(n);function I(){return(this&&this!==$t&&this instanceof I?k:n).apply(g?u:this,arguments)}return I}function G1(n){return function(o){o=et(o);var u=zo(o)?Nr(o):r,g=u?u[0]:o.charAt(0),k=u?Nn(u,1).join(""):o.slice(1);return g[n]()+k}}function Wo(n){return function(o){return Jl(Gf(Ff(o).replace(Uw,"")),n,"")}}function $i(n){return function(){var o=arguments;switch(o.length){case 0:return new n;case 1:return new n(o[0]);case 2:return new n(o[0],o[1]);case 3:return new n(o[0],o[1],o[2]);case 4:return new n(o[0],o[1],o[2],o[3]);case 5:return new n(o[0],o[1],o[2],o[3],o[4]);case 6:return new n(o[0],o[1],o[2],o[3],o[4],o[5]);case 7:return new n(o[0],o[1],o[2],o[3],o[4],o[5],o[6])}var u=Fo(n.prototype),g=n.apply(u,o);return bt(g)?g:u}}function e_(n,o,u){var g=$i(n);function k(){for(var I=arguments.length,R=V(I),$=I,H=Uo(k);$--;)R[$]=arguments[$];var ne=I<3&&R[0]!==H&&R[I-1]!==H?[]:Ln(R,H);return I-=ne.length,I<u?Z1(n,o,us,k.placeholder,r,R,ne,r,r,u-I):br(this&&this!==$t&&this instanceof k?g:n,this,R)}return k}function W1(n){return function(o,u,g){var k=rt(o);if(!or(o)){var I=Re(u,3);o=zt(o),u=function($){return I(k[$],$,k)}}var R=n(o,u,g);return R>-1?k[I?o[R]:R]:r}}function U1(n){return cn(function(o){var u=o.length,g=u,k=Or.prototype.thru;for(n&&o.reverse();g--;){var I=o[g];if(typeof I!="function")throw new Cr(l);if(k&&!R&&gs(I)=="wrapper")var R=new Or([],!0)}for(g=R?g:u;++g<u;){I=o[g];var $=gs(I),H=$=="wrapper"?Lc(I):r;H&&zc(H[0])&&H[1]==(ie|L|Y|W)&&!H[4].length&&H[9]==1?R=R[gs(H[0])].apply(R,H[3]):R=I.length==1&&zc(I)?R[$]():R.thru(I)}return function(){var ne=arguments,re=ne[0];if(R&&ne.length==1&&Fe(re))return R.plant(re).value();for(var ce=0,be=u?o[ce].apply(this,ne):re;++ce<u;)be=o[ce].call(this,be);return be}})}function us(n,o,u,g,k,I,R,$,H,ne){var re=o&ie,ce=o&S,be=o&x,ke=o&(L|N),Te=o&ge,Ne=be?r:$i(n);function Le(){for(var nt=arguments.length,je=V(nt),Jt=nt;Jt--;)je[Jt]=arguments[Jt];if(ke)var Xr=Uo(Le),Hn=f7(je,Xr);if(g&&(je=N1(je,g,k,ke)),I&&(je=B1(je,I,R,ke)),nt-=Hn,ke&&nt<ne){var St=Ln(je,Xr);return Z1(n,o,us,Le.placeholder,u,je,St,$,H,ne-nt)}var Gr=ce?u:this,fn=be?Gr[n]:n;return nt=je.length,$?je=__(je,$):Te&&nt>1&&je.reverse(),re&&H<nt&&(je.length=H),this&&this!==$t&&this instanceof Le&&(fn=Ne||$i(fn)),fn.apply(Gr,je)}return Le}function V1(n,o){return function(u,g){return I8(u,n,o(g),{})}}function hs(n,o){return function(u,g){var k;if(u===r&&g===r)return o;if(u!==r&&(k=u),g!==r){if(k===r)return g;typeof u=="string"||typeof g=="string"?(u=yr(u),g=yr(g)):(u=O1(u),g=O1(g)),k=n(u,g)}return k}}function Ic(n){return cn(function(o){return o=pt(o,_r(Re())),qe(function(u){var g=this;return n(o,function(k){return br(k,g,u)})})})}function fs(n,o){o=o===r?" ":yr(o);var u=o.length;if(u<2)return u?yc(o,n):o;var g=yc(o,Qa(n/Do(o)));return zo(o)?Nn(Nr(g),0,n).join(""):g.slice(0,n)}function t_(n,o,u,g){var k=o&S,I=$i(n);function R(){for(var $=-1,H=arguments.length,ne=-1,re=g.length,ce=V(re+H),be=this&&this!==$t&&this instanceof R?I:n;++ne<re;)ce[ne]=g[ne];for(;H--;)ce[ne++]=arguments[++$];return br(be,k?u:this,ce)}return R}function q1(n){return function(o,u,g){return g&&typeof g!="number"&&Xt(o,u,g)&&(u=g=r),o=hn(o),u===r?(u=o,o=0):u=hn(u),g=g===r?o<u?1:-1:hn(g),H8(o,u,g,n)}}function ps(n){return function(o,u){return typeof o=="string"&&typeof u=="string"||(o=Pr(o),u=Pr(u)),n(o,u)}}function Z1(n,o,u,g,k,I,R,$,H,ne){var re=o&L,ce=re?R:r,be=re?r:R,ke=re?I:r,Te=re?r:I;o|=re?Y:Z,o&=~(re?Z:Y),o&O||(o&=~(S|x));var Ne=[n,o,k,ke,ce,Te,be,$,H,ne],Le=u.apply(r,Ne);return zc(n)&&af(Le,Ne),Le.placeholder=g,sf(Le,n,o)}function Cc(n){var o=Rt[n];return function(u,g){if(u=Pr(u),g=g==null?0:Ut(Ge(g),292),g&&a1(u)){var k=(et(u)+"e").split("e");return k=(et(o(k[0]+"e"+(+k[1]+g)))+"e").split("e"),+(k[0]+"e"+(+k[1]-g))}return o(u)}}var r_=Bo&&1/Wa(new Bo([,-0]))[1]==Oe?function(n){return new Bo(n)}:Jc;function j1(n){return function(o){var u=Vt(o);return u==Q?ic(o):u==F?_7(o):h7(o,n(o))}}function ln(n,o,u,g,k,I,R,$){var H=o&x;if(!H&&typeof n!="function")throw new Cr(l);var ne=g?g.length:0;if(ne||(o&=~(Y|Z),g=k=r),R=R===r?R:Pt(Ge(R),0),$=$===r?$:Ge($),ne-=k?k.length:0,o&Z){var re=g,ce=k;g=k=r}var be=H?r:Lc(n),ke=[n,o,u,g,k,re,ce,I,R,$];if(be&&v_(ke,be),n=ke[0],o=ke[1],u=ke[2],g=ke[3],k=ke[4],$=ke[9]=ke[9]===r?H?0:n.length:Pt(ke[9]-ne,0),!$&&o&(L|N)&&(o&=~(L|N)),!o||o==S)var Te=Q8(n,o,u);else o==L||o==N?Te=e_(n,o,$):(o==Y||o==(S|Y))&&!k.length?Te=t_(n,o,u,g):Te=us.apply(r,ke);return sf((be?I1:af)(Te,ke),n,o)}function K1(n,o,u,g){return n===r||Fr(n,No[u])&&!Qe.call(g,u)?o:n}function Y1(n,o,u,g,k,I){return bt(n)&&bt(o)&&(I.set(o,n),ss(n,o,r,Y1,I),I.delete(o)),n}function n_(n){return Ni(n)?r:n}function X1(n,o,u,g,k,I){var R=u&E,$=n.length,H=o.length;if($!=H&&!(R&&H>$))return!1;var ne=I.get(n),re=I.get(o);if(ne&&re)return ne==o&&re==n;var ce=-1,be=!0,ke=u&y?new oo:r;for(I.set(n,o),I.set(o,n);++ce<$;){var Te=n[ce],Ne=o[ce];if(g)var Le=R?g(Ne,Te,ce,o,n,I):g(Te,Ne,ce,n,o,I);if(Le!==r){if(Le)continue;be=!1;break}if(ke){if(!Ql(o,function(nt,je){if(!Si(ke,je)&&(Te===nt||k(Te,nt,u,g,I)))return ke.push(je)})){be=!1;break}}else if(!(Te===Ne||k(Te,Ne,u,g,I))){be=!1;break}}return I.delete(n),I.delete(o),be}function o_(n,o,u,g,k,I,R){switch(u){case Lt:if(n.byteLength!=o.byteLength||n.byteOffset!=o.byteOffset)return!1;n=n.buffer,o=o.buffer;case Ue:return!(n.byteLength!=o.byteLength||!I(new Ka(n),new Ka(o)));case We:case ft:case q:return Fr(+n,+o);case Kt:return n.name==o.name&&n.message==o.message;case le:case ue:return n==o+"";case Q:var $=ic;case F:var H=g&E;if($||($=Wa),n.size!=o.size&&!H)return!1;var ne=R.get(n);if(ne)return ne==o;g|=y,R.set(n,o);var re=X1($(n),$(o),g,k,I,R);return R.delete(n),re;case ve:if(Ci)return Ci.call(n)==Ci.call(o)}return!1}function i_(n,o,u,g,k,I){var R=u&E,$=Oc(n),H=$.length;if(H!=Oc(o).length&&!R)return!1;for(var ne=H;ne--;){var re=$[ne];if(!(R?re in o:Qe.call(o,re)))return!1}var ce=I.get(n),be=I.get(o);if(ce&&be)return ce==o&&be==n;var ke=!0;I.set(n,o),I.set(o,n);for(var Te=R;++ne<H;){re=$[ne];var Ne=n[re],Le=o[re];if(g)var nt=R?g(Le,Ne,re,o,n,I):g(Ne,Le,re,n,o,I);if(!(nt===r?Ne===Le||k(Ne,Le,u,g,I):nt)){ke=!1;break}Te||(Te=re=="constructor")}if(ke&&!Te){var je=n.constructor,Jt=o.constructor;je!=Jt&&"constructor"in n&&"constructor"in o&&!(typeof je=="function"&&je instanceof je&&typeof Jt=="function"&&Jt instanceof Jt)&&(ke=!1)}return I.delete(n),I.delete(o),ke}function cn(n){return Nc(nf(n,r,ff),n+"")}function Oc(n){return v1(n,zt,Pc)}function Tc(n){return v1(n,ir,J1)}var Lc=ts?function(n){return ts.get(n)}:Jc;function gs(n){for(var o=n.name+"",u=Ho[o],g=Qe.call(Ho,o)?u.length:0;g--;){var k=u[g],I=k.func;if(I==null||I==n)return k.name}return o}function Uo(n){return(Qe.call(M,"placeholder")?M:n).placeholder}function Re(){var n=M.iteratee||Yc;return n=n===Yc?_1:n,arguments.length?n(arguments[0],arguments[1]):n}function ms(n,o){var u=n.__data__;return f_(o)?u[typeof o=="string"?"string":"hash"]:u.map}function Rc(n){for(var o=zt(n),u=o.length;u--;){var g=o[u],k=n[g];o[u]=[g,k,tf(k)]}return o}function so(n,o){var u=v7(n,o);return w1(u)?u:r}function a_(n){var o=Qe.call(n,ro),u=n[ro];try{n[ro]=r;var g=!0}catch{}var k=Za.call(n);return g&&(o?n[ro]=u:delete n[ro]),k}var Pc=sc?function(n){return n==null?[]:(n=rt(n),On(sc(n),function(o){return o1.call(n,o)}))}:Qc,J1=sc?function(n){for(var o=[];n;)Tn(o,Pc(n)),n=Ya(n);return o}:Qc,Vt=Yt;(lc&&Vt(new lc(new ArrayBuffer(1)))!=Lt||Mi&&Vt(new Mi)!=Q||cc&&Vt(cc.resolve())!=B||Bo&&Vt(new Bo)!=F||xi&&Vt(new xi)!=Ae)&&(Vt=function(n){var o=Yt(n),u=o==C?n.constructor:r,g=u?lo(u):"";if(g)switch(g){case G7:return Lt;case W7:return Q;case U7:return B;case V7:return F;case q7:return Ae}return o});function s_(n,o,u){for(var g=-1,k=u.length;++g<k;){var I=u[g],R=I.size;switch(I.type){case"drop":n+=R;break;case"dropRight":o-=R;break;case"take":o=Ut(o,n+R);break;case"takeRight":n=Pt(n,o-R);break}}return{start:n,end:o}}function l_(n){var o=n.match(ww);return o?o[1].split(_w):[]}function Q1(n,o,u){o=Dn(o,n);for(var g=-1,k=o.length,I=!1;++g<k;){var R=Hr(o[g]);if(!(I=n!=null&&u(n,R)))break;n=n[R]}return I||++g!=k?I:(k=n==null?0:n.length,!!k&&Es(k)&&dn(R,k)&&(Fe(n)||co(n)))}function c_(n){var o=n.length,u=new n.constructor(o);return o&&typeof n[0]=="string"&&Qe.call(n,"index")&&(u.index=n.index,u.input=n.input),u}function ef(n){return typeof n.constructor=="function"&&!zi(n)?Fo(Ya(n)):{}}function d_(n,o,u){var g=n.constructor;switch(o){case Ue:return xc(n);case We:case ft:return new g(+n);case Lt:return Z8(n,u);case nn:case rr:case on:case lt:case In:case Qn:case vr:case Ro:case Ei:return z1(n,u);case Q:return new g;case q:case ue:return new g(n);case le:return j8(n);case F:return new g;case ve:return K8(n)}}function u_(n,o){var u=o.length;if(!u)return n;var g=u-1;return o[g]=(u>1?"& ":"")+o[g],o=o.join(u>2?", ":" "),n.replace(bw,`{
/* [wrapped with `+o+`] */
`)}function h_(n){return Fe(n)||co(n)||!!(i1&&n&&n[i1])}function dn(n,o){var u=typeof n;return o=o??ae,!!o&&(u=="number"||u!="symbol"&&Iw.test(n))&&n>-1&&n%1==0&&n<o}function Xt(n,o,u){if(!bt(u))return!1;var g=typeof o;return(g=="number"?or(u)&&dn(o,u.length):g=="string"&&o in u)?Fr(u[o],n):!1}function $c(n,o){if(Fe(n))return!1;var u=typeof n;return u=="number"||u=="symbol"||u=="boolean"||n==null||kr(n)?!0:pw.test(n)||!fw.test(n)||o!=null&&n in rt(o)}function f_(n){var o=typeof n;return o=="string"||o=="number"||o=="symbol"||o=="boolean"?n!=="__proto__":n===null}function zc(n){var o=gs(n),u=M[o];if(typeof u!="function"||!(o in Ze.prototype))return!1;if(n===u)return!0;var g=Lc(u);return!!g&&n===g[0]}function p_(n){return!!t1&&t1 in n}var g_=Va?un:ed;function zi(n){var o=n&&n.constructor;return n===(typeof o=="function"&&o.prototype||No)}function tf(n){return n===n&&!bt(n)}function rf(n,o){return function(u){return u==null?!1:u[n]===o&&(o!==r||n in rt(u))}}function m_(n){var o=ys(n,function(g){return u.size===p&&u.clear(),g}),u=o.cache;return o}function v_(n,o){var u=n[1],g=o[1],k=u|g,I=k<(S|x|ie),R=g==ie&&u==L||g==ie&&u==W&&n[7].length<=o[8]||g==(ie|W)&&o[7].length<=o[8]&&u==L;if(!(I||R))return n;g&S&&(n[2]=o[2],k|=u&S?0:O);var $=o[3];if($){var H=n[3];n[3]=H?N1(H,$,o[4]):$,n[4]=H?Ln(n[3],w):o[4]}return $=o[5],$&&(H=n[5],n[5]=H?B1(H,$,o[6]):$,n[6]=H?Ln(n[5],w):o[6]),$=o[7],$&&(n[7]=$),g&ie&&(n[8]=n[8]==null?o[8]:Ut(n[8],o[8])),n[9]==null&&(n[9]=o[9]),n[0]=o[0],n[1]=k,n}function b_(n){var o=[];if(n!=null)for(var u in rt(n))o.push(u);return o}function w_(n){return Za.call(n)}function nf(n,o,u){return o=Pt(o===r?n.length-1:o,0),function(){for(var g=arguments,k=-1,I=Pt(g.length-o,0),R=V(I);++k<I;)R[k]=g[o+k];k=-1;for(var $=V(o+1);++k<o;)$[k]=g[k];return $[o]=u(R),br(n,this,$)}}function of(n,o){return o.length<2?n:ao(n,Lr(o,0,-1))}function __(n,o){for(var u=n.length,g=Ut(o.length,u),k=nr(n);g--;){var I=o[g];n[g]=dn(I,u)?k[I]:r}return n}function Dc(n,o){if(!(o==="constructor"&&typeof n[o]=="function")&&o!="__proto__")return n[o]}var af=lf(I1),Di=$7||function(n,o){return $t.setTimeout(n,o)},Nc=lf(W8);function sf(n,o,u){var g=o+"";return Nc(n,u_(g,y_(l_(g),u)))}function lf(n){var o=0,u=0;return function(){var g=B7(),k=A-(g-u);if(u=g,k>0){if(++o>=J)return arguments[0]}else o=0;return n.apply(r,arguments)}}function vs(n,o){var u=-1,g=n.length,k=g-1;for(o=o===r?g:o;++u<o;){var I=_c(u,k),R=n[I];n[I]=n[u],n[u]=R}return n.length=o,n}var cf=m_(function(n){var o=[];return n.charCodeAt(0)===46&&o.push(""),n.replace(gw,function(u,g,k,I){o.push(k?I.replace(kw,"$1"):g||u)}),o});function Hr(n){if(typeof n=="string"||kr(n))return n;var o=n+"";return o=="0"&&1/n==-Oe?"-0":o}function lo(n){if(n!=null){try{return qa.call(n)}catch{}try{return n+""}catch{}}return""}function y_(n,o){return wr(pe,function(u){var g="_."+u[0];o&u[1]&&!Fa(n,g)&&n.push(g)}),n.sort()}function df(n){if(n instanceof Ze)return n.clone();var o=new Or(n.__wrapped__,n.__chain__);return o.__actions__=nr(n.__actions__),o.__index__=n.__index__,o.__values__=n.__values__,o}function k_(n,o,u){(u?Xt(n,o,u):o===r)?o=1:o=Pt(Ge(o),0);var g=n==null?0:n.length;if(!g||o<1)return[];for(var k=0,I=0,R=V(Qa(g/o));k<g;)R[I++]=Lr(n,k,k+=o);return R}function E_(n){for(var o=-1,u=n==null?0:n.length,g=0,k=[];++o<u;){var I=n[o];I&&(k[g++]=I)}return k}function S_(){var n=arguments.length;if(!n)return[];for(var o=V(n-1),u=arguments[0],g=n;g--;)o[g-1]=arguments[g];return Tn(Fe(u)?nr(u):[u],Ft(o,1))}var A_=qe(function(n,o){return Et(n)?Ti(n,Ft(o,1,Et,!0)):[]}),M_=qe(function(n,o){var u=Rr(o);return Et(u)&&(u=r),Et(n)?Ti(n,Ft(o,1,Et,!0),Re(u,2)):[]}),x_=qe(function(n,o){var u=Rr(o);return Et(u)&&(u=r),Et(n)?Ti(n,Ft(o,1,Et,!0),r,u):[]});function I_(n,o,u){var g=n==null?0:n.length;return g?(o=u||o===r?1:Ge(o),Lr(n,o<0?0:o,g)):[]}function C_(n,o,u){var g=n==null?0:n.length;return g?(o=u||o===r?1:Ge(o),o=g-o,Lr(n,0,o<0?0:o)):[]}function O_(n,o){return n&&n.length?cs(n,Re(o,3),!0,!0):[]}function T_(n,o){return n&&n.length?cs(n,Re(o,3),!0):[]}function L_(n,o,u,g){var k=n==null?0:n.length;return k?(u&&typeof u!="number"&&Xt(n,o,u)&&(u=0,g=k),S8(n,o,u,g)):[]}function uf(n,o,u){var g=n==null?0:n.length;if(!g)return-1;var k=u==null?0:Ge(u);return k<0&&(k=Pt(g+k,0)),Ga(n,Re(o,3),k)}function hf(n,o,u){var g=n==null?0:n.length;if(!g)return-1;var k=g-1;return u!==r&&(k=Ge(u),k=u<0?Pt(g+k,0):Ut(k,g-1)),Ga(n,Re(o,3),k,!0)}function ff(n){return n!=null&&n.length?Ft(n,1):[]}function R_(n){return n!=null&&n.length?Ft(n,Oe):[]}function P_(n,o){return n!=null&&n.length?(o=o===r?1:Ge(o),Ft(n,o)):[]}function $_(n){for(var o=-1,u=n==null?0:n.length,g={};++o<u;){var k=n[o];jr(g,k[0],k[1])}return g}function pf(n){return n&&n.length?n[0]:r}function z_(n,o,u){var g=n==null?0:n.length;if(!g)return-1;var k=u==null?0:Ge(u);return k<0&&(k=Pt(g+k,0)),$o(n,o,k)}function D_(n){return n!=null&&n.length?Lr(n,0,-1):[]}var N_=qe(function(n){var o=pt(n,Ac);return o.length&&o[0]===n[0]?gc(o):[]}),B_=qe(function(n){var o=Rr(n),u=pt(n,Ac);return o===Rr(u)?o=r:u.pop(),u.length&&u[0]===n[0]?gc(u,Re(o,2)):[]}),H_=qe(function(n){var o=Rr(n),u=pt(n,Ac);return o=typeof o=="function"?o:r,o&&u.pop(),u.length&&u[0]===n[0]?gc(u,r,o):[]});function F_(n,o){return n==null?"":D7.call(n,o)}function Rr(n){var o=n==null?0:n.length;return o?n[o-1]:r}function G_(n,o,u){var g=n==null?0:n.length;if(!g)return-1;var k=g;return u!==r&&(k=Ge(u),k=k<0?Pt(g+k,0):Ut(k,g-1)),o===o?k7(n,o,k):Ga(n,Zh,k,!0)}function W_(n,o){return n&&n.length?S1(n,Ge(o)):r}var U_=qe(gf);function gf(n,o){return n&&n.length&&o&&o.length?wc(n,o):n}function V_(n,o,u){return n&&n.length&&o&&o.length?wc(n,o,Re(u,2)):n}function q_(n,o,u){return n&&n.length&&o&&o.length?wc(n,o,r,u):n}var Z_=cn(function(n,o){var u=n==null?0:n.length,g=uc(n,o);return x1(n,pt(o,function(k){return dn(k,u)?+k:k}).sort(D1)),g});function j_(n,o){var u=[];if(!(n&&n.length))return u;var g=-1,k=[],I=n.length;for(o=Re(o,3);++g<I;){var R=n[g];o(R,g,n)&&(u.push(R),k.push(g))}return x1(n,k),u}function Bc(n){return n==null?n:F7.call(n)}function K_(n,o,u){var g=n==null?0:n.length;return g?(u&&typeof u!="number"&&Xt(n,o,u)?(o=0,u=g):(o=o==null?0:Ge(o),u=u===r?g:Ge(u)),Lr(n,o,u)):[]}function Y_(n,o){return ls(n,o)}function X_(n,o,u){return kc(n,o,Re(u,2))}function J_(n,o){var u=n==null?0:n.length;if(u){var g=ls(n,o);if(g<u&&Fr(n[g],o))return g}return-1}function Q_(n,o){return ls(n,o,!0)}function ey(n,o,u){return kc(n,o,Re(u,2),!0)}function ty(n,o){if(n!=null&&n.length){var u=ls(n,o,!0)-1;if(Fr(n[u],o))return u}return-1}function ry(n){return n&&n.length?C1(n):[]}function ny(n,o){return n&&n.length?C1(n,Re(o,2)):[]}function oy(n){var o=n==null?0:n.length;return o?Lr(n,1,o):[]}function iy(n,o,u){return n&&n.length?(o=u||o===r?1:Ge(o),Lr(n,0,o<0?0:o)):[]}function ay(n,o,u){var g=n==null?0:n.length;return g?(o=u||o===r?1:Ge(o),o=g-o,Lr(n,o<0?0:o,g)):[]}function sy(n,o){return n&&n.length?cs(n,Re(o,3),!1,!0):[]}function ly(n,o){return n&&n.length?cs(n,Re(o,3)):[]}var cy=qe(function(n){return zn(Ft(n,1,Et,!0))}),dy=qe(function(n){var o=Rr(n);return Et(o)&&(o=r),zn(Ft(n,1,Et,!0),Re(o,2))}),uy=qe(function(n){var o=Rr(n);return o=typeof o=="function"?o:r,zn(Ft(n,1,Et,!0),r,o)});function hy(n){return n&&n.length?zn(n):[]}function fy(n,o){return n&&n.length?zn(n,Re(o,2)):[]}function py(n,o){return o=typeof o=="function"?o:r,n&&n.length?zn(n,r,o):[]}function Hc(n){if(!(n&&n.length))return[];var o=0;return n=On(n,function(u){if(Et(u))return o=Pt(u.length,o),!0}),nc(o,function(u){return pt(n,ec(u))})}function mf(n,o){if(!(n&&n.length))return[];var u=Hc(n);return o==null?u:pt(u,function(g){return br(o,r,g)})}var gy=qe(function(n,o){return Et(n)?Ti(n,o):[]}),my=qe(function(n){return Sc(On(n,Et))}),vy=qe(function(n){var o=Rr(n);return Et(o)&&(o=r),Sc(On(n,Et),Re(o,2))}),by=qe(function(n){var o=Rr(n);return o=typeof o=="function"?o:r,Sc(On(n,Et),r,o)}),wy=qe(Hc);function _y(n,o){return R1(n||[],o||[],Oi)}function yy(n,o){return R1(n||[],o||[],Pi)}var ky=qe(function(n){var o=n.length,u=o>1?n[o-1]:r;return u=typeof u=="function"?(n.pop(),u):r,mf(n,u)});function vf(n){var o=M(n);return o.__chain__=!0,o}function Ey(n,o){return o(n),n}function bs(n,o){return o(n)}var Sy=cn(function(n){var o=n.length,u=o?n[0]:0,g=this.__wrapped__,k=function(I){return uc(I,n)};return o>1||this.__actions__.length||!(g instanceof Ze)||!dn(u)?this.thru(k):(g=g.slice(u,+u+(o?1:0)),g.__actions__.push({func:bs,args:[k],thisArg:r}),new Or(g,this.__chain__).thru(function(I){return o&&!I.length&&I.push(r),I}))});function Ay(){return vf(this)}function My(){return new Or(this.value(),this.__chain__)}function xy(){this.__values__===r&&(this.__values__=Tf(this.value()));var n=this.__index__>=this.__values__.length;return{done:n,value:n?r:this.__values__[this.__index__++]}}function Iy(){return this}function Cy(n){for(var o,u=this;u instanceof ns;){var g=df(u);g.__index__=0,g.__values__=r,o?k.__wrapped__=g:o=g;var k=g;u=u.__wrapped__}return k.__wrapped__=n,o}function Oy(){var n=this.__wrapped__;if(n instanceof Ze){var o=n;return this.__actions__.length&&(o=new Ze(this)),o=o.reverse(),o.__actions__.push({func:bs,args:[Bc],thisArg:r}),new Or(o,this.__chain__)}return this.thru(Bc)}function Ty(){return L1(this.__wrapped__,this.__actions__)}var Ly=ds(function(n,o,u){Qe.call(n,u)?++n[u]:jr(n,u,1)});function Ry(n,o,u){var g=Fe(n)?Vh:E8;return u&&Xt(n,o,u)&&(o=r),g(n,Re(o,3))}function Py(n,o){return(Fe(n)?On:g1)(n,Re(o,3))}var $y=W1(uf),zy=W1(hf);function Dy(n,o){return Ft(ws(n,o),1)}function Ny(n,o){return Ft(ws(n,o),Oe)}function By(n,o,u){return u=u===r?1:Ge(u),Ft(ws(n,o),u)}function bf(n,o){return(Fe(n)?wr:$n)(n,Re(o,3))}function wf(n,o){return(Fe(n)?i7:p1)(n,Re(o,3))}var Hy=ds(function(n,o,u){Qe.call(n,u)?n[u].push(o):jr(n,u,[o])});function Fy(n,o,u,g){n=or(n)?n:qo(n),u=u&&!g?Ge(u):0;var k=n.length;return u<0&&(u=Pt(k+u,0)),Ss(n)?u<=k&&n.indexOf(o,u)>-1:!!k&&$o(n,o,u)>-1}var Gy=qe(function(n,o,u){var g=-1,k=typeof o=="function",I=or(n)?V(n.length):[];return $n(n,function(R){I[++g]=k?br(o,R,u):Li(R,o,u)}),I}),Wy=ds(function(n,o,u){jr(n,u,o)});function ws(n,o){return(Fe(n)?pt:y1)(n,Re(o,3))}function Uy(n,o,u,g){return n==null?[]:(Fe(o)||(o=o==null?[]:[o]),u=g?r:u,Fe(u)||(u=u==null?[]:[u]),A1(n,o,u))}var Vy=ds(function(n,o,u){n[u?0:1].push(o)},function(){return[[],[]]});function qy(n,o,u){var g=Fe(n)?Jl:Kh,k=arguments.length<3;return g(n,Re(o,4),u,k,$n)}function Zy(n,o,u){var g=Fe(n)?a7:Kh,k=arguments.length<3;return g(n,Re(o,4),u,k,p1)}function jy(n,o){return(Fe(n)?On:g1)(n,ks(Re(o,3)))}function Ky(n){return(Fe(n)?d1:F8)(n)}function Yy(n,o,u){return(u?Xt(n,o,u):o===r)?o=1:o=Ge(o),(Fe(n)?b8:G8)(n,o)}function Xy(n){return(Fe(n)?w8:U8)(n)}function Jy(n){if(n==null)return 0;if(or(n))return Ss(n)?Do(n):n.length;var o=Vt(n);return o==Q||o==F?n.size:vc(n).length}function Qy(n,o,u){var g=Fe(n)?Ql:V8;return u&&Xt(n,o,u)&&(o=r),g(n,Re(o,3))}var ek=qe(function(n,o){if(n==null)return[];var u=o.length;return u>1&&Xt(n,o[0],o[1])?o=[]:u>2&&Xt(o[0],o[1],o[2])&&(o=[o[0]]),A1(n,Ft(o,1),[])}),_s=P7||function(){return $t.Date.now()};function tk(n,o){if(typeof o!="function")throw new Cr(l);return n=Ge(n),function(){if(--n<1)return o.apply(this,arguments)}}function _f(n,o,u){return o=u?r:o,o=n&&o==null?n.length:o,ln(n,ie,r,r,r,r,o)}function yf(n,o){var u;if(typeof o!="function")throw new Cr(l);return n=Ge(n),function(){return--n>0&&(u=o.apply(this,arguments)),n<=1&&(o=r),u}}var Fc=qe(function(n,o,u){var g=S;if(u.length){var k=Ln(u,Uo(Fc));g|=Y}return ln(n,g,o,u,k)}),kf=qe(function(n,o,u){var g=S|x;if(u.length){var k=Ln(u,Uo(kf));g|=Y}return ln(o,g,n,u,k)});function Ef(n,o,u){o=u?r:o;var g=ln(n,L,r,r,r,r,r,o);return g.placeholder=Ef.placeholder,g}function Sf(n,o,u){o=u?r:o;var g=ln(n,N,r,r,r,r,r,o);return g.placeholder=Sf.placeholder,g}function Af(n,o,u){var g,k,I,R,$,H,ne=0,re=!1,ce=!1,be=!0;if(typeof n!="function")throw new Cr(l);o=Pr(o)||0,bt(u)&&(re=!!u.leading,ce="maxWait"in u,I=ce?Pt(Pr(u.maxWait)||0,o):I,be="trailing"in u?!!u.trailing:be);function ke(St){var Gr=g,fn=k;return g=k=r,ne=St,R=n.apply(fn,Gr),R}function Te(St){return ne=St,$=Di(nt,o),re?ke(St):R}function Ne(St){var Gr=St-H,fn=St-ne,Vf=o-Gr;return ce?Ut(Vf,I-fn):Vf}function Le(St){var Gr=St-H,fn=St-ne;return H===r||Gr>=o||Gr<0||ce&&fn>=I}function nt(){var St=_s();if(Le(St))return je(St);$=Di(nt,Ne(St))}function je(St){return $=r,be&&g?ke(St):(g=k=r,R)}function Jt(){$!==r&&P1($),ne=0,g=H=k=$=r}function Xr(){return $===r?R:je(_s())}function Hn(){var St=_s(),Gr=Le(St);if(g=arguments,k=this,H=St,Gr){if($===r)return Te(H);if(ce)return P1($),$=Di(nt,o),ke(H)}return $===r&&($=Di(nt,o)),R}return Hn.cancel=Jt,Hn.flush=Xr,Hn}var rk=qe(function(n,o){return f1(n,1,o)}),nk=qe(function(n,o,u){return f1(n,Pr(o)||0,u)});function ok(n){return ln(n,ge)}function ys(n,o){if(typeof n!="function"||o!=null&&typeof o!="function")throw new Cr(l);var u=function(){var g=arguments,k=o?o.apply(this,g):g[0],I=u.cache;if(I.has(k))return I.get(k);var R=n.apply(this,g);return u.cache=I.set(k,R)||I,R};return u.cache=new(ys.Cache||sn),u}ys.Cache=sn;function ks(n){if(typeof n!="function")throw new Cr(l);return function(){var o=arguments;switch(o.length){case 0:return!n.call(this);case 1:return!n.call(this,o[0]);case 2:return!n.call(this,o[0],o[1]);case 3:return!n.call(this,o[0],o[1],o[2])}return!n.apply(this,o)}}function ik(n){return yf(2,n)}var ak=q8(function(n,o){o=o.length==1&&Fe(o[0])?pt(o[0],_r(Re())):pt(Ft(o,1),_r(Re()));var u=o.length;return qe(function(g){for(var k=-1,I=Ut(g.length,u);++k<I;)g[k]=o[k].call(this,g[k]);return br(n,this,g)})}),Gc=qe(function(n,o){return ln(n,Y,r,o,Ln(o,Uo(Gc)))}),Mf=qe(function(n,o){return ln(n,Z,r,o,Ln(o,Uo(Mf)))}),sk=cn(function(n,o){return ln(n,W,r,r,r,o)});function lk(n,o){if(typeof n!="function")throw new Cr(l);return o=o===r?o:Ge(o),qe(n,o)}function ck(n,o){if(typeof n!="function")throw new Cr(l);return o=o==null?0:Pt(Ge(o),0),qe(function(u){var g=u[o],k=Nn(u,0,o);return g&&Tn(k,g),br(n,this,k)})}function dk(n,o,u){var g=!0,k=!0;if(typeof n!="function")throw new Cr(l);return bt(u)&&(g="leading"in u?!!u.leading:g,k="trailing"in u?!!u.trailing:k),Af(n,o,{leading:g,maxWait:o,trailing:k})}function uk(n){return _f(n,1)}function hk(n,o){return Gc(Mc(o),n)}function fk(){if(!arguments.length)return[];var n=arguments[0];return Fe(n)?n:[n]}function pk(n){return Tr(n,v)}function gk(n,o){return o=typeof o=="function"?o:r,Tr(n,v,o)}function mk(n){return Tr(n,b|v)}function vk(n,o){return o=typeof o=="function"?o:r,Tr(n,b|v,o)}function bk(n,o){return o==null||h1(n,o,zt(o))}function Fr(n,o){return n===o||n!==n&&o!==o}var wk=ps(pc),_k=ps(function(n,o){return n>=o}),co=b1((function(){return arguments})())?b1:function(n){return _t(n)&&Qe.call(n,"callee")&&!o1.call(n,"callee")},Fe=V.isArray,yk=Bh?_r(Bh):C8;function or(n){return n!=null&&Es(n.length)&&!un(n)}function Et(n){return _t(n)&&or(n)}function kk(n){return n===!0||n===!1||_t(n)&&Yt(n)==We}var Bn=z7||ed,Ek=Hh?_r(Hh):O8;function Sk(n){return _t(n)&&n.nodeType===1&&!Ni(n)}function Ak(n){if(n==null)return!0;if(or(n)&&(Fe(n)||typeof n=="string"||typeof n.splice=="function"||Bn(n)||Vo(n)||co(n)))return!n.length;var o=Vt(n);if(o==Q||o==F)return!n.size;if(zi(n))return!vc(n).length;for(var u in n)if(Qe.call(n,u))return!1;return!0}function Mk(n,o){return Ri(n,o)}function xk(n,o,u){u=typeof u=="function"?u:r;var g=u?u(n,o):r;return g===r?Ri(n,o,r,u):!!g}function Wc(n){if(!_t(n))return!1;var o=Yt(n);return o==Kt||o==vt||typeof n.message=="string"&&typeof n.name=="string"&&!Ni(n)}function Ik(n){return typeof n=="number"&&a1(n)}function un(n){if(!bt(n))return!1;var o=Yt(n);return o==Wt||o==_||o==Ve||o==se}function xf(n){return typeof n=="number"&&n==Ge(n)}function Es(n){return typeof n=="number"&&n>-1&&n%1==0&&n<=ae}function bt(n){var o=typeof n;return n!=null&&(o=="object"||o=="function")}function _t(n){return n!=null&&typeof n=="object"}var If=Fh?_r(Fh):L8;function Ck(n,o){return n===o||mc(n,o,Rc(o))}function Ok(n,o,u){return u=typeof u=="function"?u:r,mc(n,o,Rc(o),u)}function Tk(n){return Cf(n)&&n!=+n}function Lk(n){if(g_(n))throw new ze(s);return w1(n)}function Rk(n){return n===null}function Pk(n){return n==null}function Cf(n){return typeof n=="number"||_t(n)&&Yt(n)==q}function Ni(n){if(!_t(n)||Yt(n)!=C)return!1;var o=Ya(n);if(o===null)return!0;var u=Qe.call(o,"constructor")&&o.constructor;return typeof u=="function"&&u instanceof u&&qa.call(u)==O7}var Uc=Gh?_r(Gh):R8;function $k(n){return xf(n)&&n>=-ae&&n<=ae}var Of=Wh?_r(Wh):P8;function Ss(n){return typeof n=="string"||!Fe(n)&&_t(n)&&Yt(n)==ue}function kr(n){return typeof n=="symbol"||_t(n)&&Yt(n)==ve}var Vo=Uh?_r(Uh):$8;function zk(n){return n===r}function Dk(n){return _t(n)&&Vt(n)==Ae}function Nk(n){return _t(n)&&Yt(n)==tt}var Bk=ps(bc),Hk=ps(function(n,o){return n<=o});function Tf(n){if(!n)return[];if(or(n))return Ss(n)?Nr(n):nr(n);if(Ai&&n[Ai])return w7(n[Ai]());var o=Vt(n);return(o==Q?ic:o==F?Wa:qo)(n)}function hn(n){return n?(n=Pr(n),n===Oe||n===-Oe?(n<0?-1:1)*Ie:n===n?n:0):n===0?n:0}function Ge(n){var o=hn(n),u=o%1;return o===o?u?o-u:o:0}function Lf(n){return n?io(Ge(n),0,G):0}function Pr(n){if(typeof n=="number")return n;if(kr(n))return U;if(bt(n)){var o=typeof n.valueOf=="function"?n.valueOf():n;n=bt(o)?o+"":o}if(typeof n!="string")return n===0?n:+n;n=Yh(n);var u=Aw.test(n);return u||xw.test(n)?r7(n.slice(2),u?2:8):Sw.test(n)?U:+n}function Rf(n){return Yr(n,ir(n))}function Fk(n){return n?io(Ge(n),-ae,ae):n===0?n:0}function et(n){return n==null?"":yr(n)}var Gk=Go(function(n,o){if(zi(o)||or(o)){Yr(o,zt(o),n);return}for(var u in o)Qe.call(o,u)&&Oi(n,u,o[u])}),Pf=Go(function(n,o){Yr(o,ir(o),n)}),$f=Go(function(n,o,u,g){Yr(o,ir(o),n,g)}),Vc=Go(function(n,o,u,g){Yr(o,zt(o),n,g)}),Wk=cn(uc);function Uk(n,o){var u=Fo(n);return o==null?u:u1(u,o)}var Vk=qe(function(n,o){n=rt(n);var u=-1,g=o.length,k=g>2?o[2]:r;for(k&&Xt(o[0],o[1],k)&&(g=1);++u<g;)for(var I=o[u],R=ir(I),$=-1,H=R.length;++$<H;){var ne=R[$],re=n[ne];(re===r||Fr(re,No[ne])&&!Qe.call(n,ne))&&(n[ne]=I[ne])}return n}),qk=qe(function(n){return n.push(r,Y1),br(zf,r,n)});function Zk(n,o){return qh(n,Re(o,3),Kr)}function jk(n,o){return qh(n,Re(o,3),fc)}function Kk(n,o){return n==null?n:hc(n,Re(o,3),ir)}function Yk(n,o){return n==null?n:m1(n,Re(o,3),ir)}function Xk(n,o){return n&&Kr(n,Re(o,3))}function Jk(n,o){return n&&fc(n,Re(o,3))}function Qk(n){return n==null?[]:as(n,zt(n))}function eE(n){return n==null?[]:as(n,ir(n))}function qc(n,o,u){var g=n==null?r:ao(n,o);return g===r?u:g}function tE(n,o){return n!=null&&Q1(n,o,A8)}function Zc(n,o){return n!=null&&Q1(n,o,M8)}var rE=V1(function(n,o,u){o!=null&&typeof o.toString!="function"&&(o=Za.call(o)),n[o]=u},Kc(ar)),nE=V1(function(n,o,u){o!=null&&typeof o.toString!="function"&&(o=Za.call(o)),Qe.call(n,o)?n[o].push(u):n[o]=[u]},Re),oE=qe(Li);function zt(n){return or(n)?c1(n):vc(n)}function ir(n){return or(n)?c1(n,!0):z8(n)}function iE(n,o){var u={};return o=Re(o,3),Kr(n,function(g,k,I){jr(u,o(g,k,I),g)}),u}function aE(n,o){var u={};return o=Re(o,3),Kr(n,function(g,k,I){jr(u,k,o(g,k,I))}),u}var sE=Go(function(n,o,u){ss(n,o,u)}),zf=Go(function(n,o,u,g){ss(n,o,u,g)}),lE=cn(function(n,o){var u={};if(n==null)return u;var g=!1;o=pt(o,function(I){return I=Dn(I,n),g||(g=I.length>1),I}),Yr(n,Tc(n),u),g&&(u=Tr(u,b|m|v,n_));for(var k=o.length;k--;)Ec(u,o[k]);return u});function cE(n,o){return Df(n,ks(Re(o)))}var dE=cn(function(n,o){return n==null?{}:N8(n,o)});function Df(n,o){if(n==null)return{};var u=pt(Tc(n),function(g){return[g]});return o=Re(o),M1(n,u,function(g,k){return o(g,k[0])})}function uE(n,o,u){o=Dn(o,n);var g=-1,k=o.length;for(k||(k=1,n=r);++g<k;){var I=n==null?r:n[Hr(o[g])];I===r&&(g=k,I=u),n=un(I)?I.call(n):I}return n}function hE(n,o,u){return n==null?n:Pi(n,o,u)}function fE(n,o,u,g){return g=typeof g=="function"?g:r,n==null?n:Pi(n,o,u,g)}var Nf=j1(zt),Bf=j1(ir);function pE(n,o,u){var g=Fe(n),k=g||Bn(n)||Vo(n);if(o=Re(o,4),u==null){var I=n&&n.constructor;k?u=g?new I:[]:bt(n)?u=un(I)?Fo(Ya(n)):{}:u={}}return(k?wr:Kr)(n,function(R,$,H){return o(u,R,$,H)}),u}function gE(n,o){return n==null?!0:Ec(n,o)}function mE(n,o,u){return n==null?n:T1(n,o,Mc(u))}function vE(n,o,u,g){return g=typeof g=="function"?g:r,n==null?n:T1(n,o,Mc(u),g)}function qo(n){return n==null?[]:oc(n,zt(n))}function bE(n){return n==null?[]:oc(n,ir(n))}function wE(n,o,u){return u===r&&(u=o,o=r),u!==r&&(u=Pr(u),u=u===u?u:0),o!==r&&(o=Pr(o),o=o===o?o:0),io(Pr(n),o,u)}function _E(n,o,u){return o=hn(o),u===r?(u=o,o=0):u=hn(u),n=Pr(n),x8(n,o,u)}function yE(n,o,u){if(u&&typeof u!="boolean"&&Xt(n,o,u)&&(o=u=r),u===r&&(typeof o=="boolean"?(u=o,o=r):typeof n=="boolean"&&(u=n,n=r)),n===r&&o===r?(n=0,o=1):(n=hn(n),o===r?(o=n,n=0):o=hn(o)),n>o){var g=n;n=o,o=g}if(u||n%1||o%1){var k=s1();return Ut(n+k*(o-n+t7("1e-"+((k+"").length-1))),o)}return _c(n,o)}var kE=Wo(function(n,o,u){return o=o.toLowerCase(),n+(u?Hf(o):o)});function Hf(n){return jc(et(n).toLowerCase())}function Ff(n){return n=et(n),n&&n.replace(Cw,p7).replace(Vw,"")}function EE(n,o,u){n=et(n),o=yr(o);var g=n.length;u=u===r?g:io(Ge(u),0,g);var k=u;return u-=o.length,u>=0&&n.slice(u,k)==o}function SE(n){return n=et(n),n&&dw.test(n)?n.replace(eo,g7):n}function AE(n){return n=et(n),n&&mw.test(n)?n.replace(Gl,"\\$&"):n}var ME=Wo(function(n,o,u){return n+(u?"-":"")+o.toLowerCase()}),xE=Wo(function(n,o,u){return n+(u?" ":"")+o.toLowerCase()}),IE=G1("toLowerCase");function CE(n,o,u){n=et(n),o=Ge(o);var g=o?Do(n):0;if(!o||g>=o)return n;var k=(o-g)/2;return fs(es(k),u)+n+fs(Qa(k),u)}function OE(n,o,u){n=et(n),o=Ge(o);var g=o?Do(n):0;return o&&g<o?n+fs(o-g,u):n}function TE(n,o,u){n=et(n),o=Ge(o);var g=o?Do(n):0;return o&&g<o?fs(o-g,u)+n:n}function LE(n,o,u){return u||o==null?o=0:o&&(o=+o),H7(et(n).replace(Wl,""),o||0)}function RE(n,o,u){return(u?Xt(n,o,u):o===r)?o=1:o=Ge(o),yc(et(n),o)}function PE(){var n=arguments,o=et(n[0]);return n.length<3?o:o.replace(n[1],n[2])}var $E=Wo(function(n,o,u){return n+(u?"_":"")+o.toLowerCase()});function zE(n,o,u){return u&&typeof u!="number"&&Xt(n,o,u)&&(o=u=r),u=u===r?G:u>>>0,u?(n=et(n),n&&(typeof o=="string"||o!=null&&!Uc(o))&&(o=yr(o),!o&&zo(n))?Nn(Nr(n),0,u):n.split(o,u)):[]}var DE=Wo(function(n,o,u){return n+(u?" ":"")+jc(o)});function NE(n,o,u){return n=et(n),u=u==null?0:io(Ge(u),0,n.length),o=yr(o),n.slice(u,u+o.length)==o}function BE(n,o,u){var g=M.templateSettings;u&&Xt(n,o,u)&&(o=r),n=et(n),o=Vc({},o,g,K1);var k=Vc({},o.imports,g.imports,K1),I=zt(k),R=oc(k,I);wr(I,function(Le){if(vh.test(Le))throw new ze(c)});var $,H,ne=0,re=o.interpolate||Na,ce="__p += '",be=ac((o.escape||Na).source+"|"+re.source+"|"+(re===mh?Ew:Na).source+"|"+(o.evaluate||Na).source+"|$","g"),ke="//# sourceURL="+(Qe.call(o,"sourceURL")?(o.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++Yw+"]")+`
`;n.replace(be,function(Le,nt,je,Jt,Xr,Hn){return je||(je=Jt),ce+=n.slice(ne,Hn).replace(Ow,m7),nt&&($=!0,ce+=`' +
__e(`+nt+`) +
'`),Xr&&(H=!0,ce+=`';
`+Xr+`;
__p += '`),je&&(ce+=`' +
((__t = (`+je+`)) == null ? '' : __t) +
'`),ne=Hn+Le.length,Le}),ce+=`';
`;var Te=Qe.call(o,"variable")&&o.variable;if(!Te)ce=`with (obj) {
`+ce+`
}
`;else if(vh.test(Te))throw new ze(h);ce=(H?ce.replace(Hl,""):ce).replace(Fl,"$1").replace(Da,"$1;"),ce="function("+(Te||"obj")+`) {
`+(Te?"":`obj || (obj = {});
`)+"var __t, __p = ''"+($?", __e = _.escape":"")+(H?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+ce+`return __p
}`;var Ne=Wf(function(){return Xe(I,ke+"return "+ce).apply(r,R)});if(Ne.source=ce,Wc(Ne))throw Ne;return Ne}function HE(n){return et(n).toLowerCase()}function FE(n){return et(n).toUpperCase()}function GE(n,o,u){if(n=et(n),n&&(u||o===r))return Yh(n);if(!n||!(o=yr(o)))return n;var g=Nr(n),k=Nr(o);return Nn(g,Xh(g,k),Jh(g,k)+1).join("")}function WE(n,o,u){if(n=et(n),n&&(u||o===r))return n.slice(0,e1(n)+1);if(!n||!(o=yr(o)))return n;var g=Nr(n);return Nn(g,0,Jh(g,Nr(o))+1).join("")}function UE(n,o,u){if(n=et(n),n&&(u||o===r))return n.replace(Wl,"");if(!n||!(o=yr(o)))return n;var g=Nr(n);return Nn(g,Xh(g,Nr(o))).join("")}function VE(n,o){var u=_e,g=P;if(bt(o)){var k="separator"in o?o.separator:k;u="length"in o?Ge(o.length):u,g="omission"in o?yr(o.omission):g}n=et(n);var I=n.length;if(zo(n)){var R=Nr(n);I=R.length}if(u>=I)return n;var $=u-Do(g);if($<1)return g;var H=R?Nn(R,0,$).join(""):n.slice(0,$);if(k===r)return H+g;if(R&&($+=H.length-$),Uc(k)){if(n.slice($).search(k)){var ne,re=H;for(k.global||(k=ac(k.source,et(bh.exec(k))+"g")),k.lastIndex=0;ne=k.exec(re);)var ce=ne.index;H=H.slice(0,ce===r?$:ce)}}else if(n.indexOf(yr(k),$)!=$){var be=H.lastIndexOf(k);be>-1&&(H=H.slice(0,be))}return H+g}function qE(n){return n=et(n),n&&cw.test(n)?n.replace(Cn,E7):n}var ZE=Wo(function(n,o,u){return n+(u?" ":"")+o.toUpperCase()}),jc=G1("toUpperCase");function Gf(n,o,u){return n=et(n),o=u?r:o,o===r?b7(n)?M7(n):c7(n):n.match(o)||[]}var Wf=qe(function(n,o){try{return br(n,r,o)}catch(u){return Wc(u)?u:new ze(u)}}),jE=cn(function(n,o){return wr(o,function(u){u=Hr(u),jr(n,u,Fc(n[u],n))}),n});function KE(n){var o=n==null?0:n.length,u=Re();return n=o?pt(n,function(g){if(typeof g[1]!="function")throw new Cr(l);return[u(g[0]),g[1]]}):[],qe(function(g){for(var k=-1;++k<o;){var I=n[k];if(br(I[0],this,g))return br(I[1],this,g)}})}function YE(n){return k8(Tr(n,b))}function Kc(n){return function(){return n}}function XE(n,o){return n==null||n!==n?o:n}var JE=U1(),QE=U1(!0);function ar(n){return n}function Yc(n){return _1(typeof n=="function"?n:Tr(n,b))}function eS(n){return k1(Tr(n,b))}function tS(n,o){return E1(n,Tr(o,b))}var rS=qe(function(n,o){return function(u){return Li(u,n,o)}}),nS=qe(function(n,o){return function(u){return Li(n,u,o)}});function Xc(n,o,u){var g=zt(o),k=as(o,g);u==null&&!(bt(o)&&(k.length||!g.length))&&(u=o,o=n,n=this,k=as(o,zt(o)));var I=!(bt(u)&&"chain"in u)||!!u.chain,R=un(n);return wr(k,function($){var H=o[$];n[$]=H,R&&(n.prototype[$]=function(){var ne=this.__chain__;if(I||ne){var re=n(this.__wrapped__);return(re.__actions__=nr(this.__actions__)).push({func:H,args:arguments,thisArg:n}),re.__chain__=ne,re}return H.apply(n,Tn([this.value()],arguments))})}),n}function oS(){return $t._===this&&($t._=T7),this}function Jc(){}function iS(n){return n=Ge(n),qe(function(o){return S1(o,n)})}var aS=Ic(pt),sS=Ic(Vh),lS=Ic(Ql);function Uf(n){return $c(n)?ec(Hr(n)):B8(n)}function cS(n){return function(o){return n==null?r:ao(n,o)}}var dS=q1(),uS=q1(!0);function Qc(){return[]}function ed(){return!1}function hS(){return{}}function fS(){return""}function pS(){return!0}function gS(n,o){if(n=Ge(n),n<1||n>ae)return[];var u=G,g=Ut(n,G);o=Re(o),n-=G;for(var k=nc(g,o);++u<n;)o(u);return k}function mS(n){return Fe(n)?pt(n,Hr):kr(n)?[n]:nr(cf(et(n)))}function vS(n){var o=++C7;return et(n)+o}var bS=hs(function(n,o){return n+o},0),wS=Cc("ceil"),_S=hs(function(n,o){return n/o},1),yS=Cc("floor");function kS(n){return n&&n.length?is(n,ar,pc):r}function ES(n,o){return n&&n.length?is(n,Re(o,2),pc):r}function SS(n){return jh(n,ar)}function AS(n,o){return jh(n,Re(o,2))}function MS(n){return n&&n.length?is(n,ar,bc):r}function xS(n,o){return n&&n.length?is(n,Re(o,2),bc):r}var IS=hs(function(n,o){return n*o},1),CS=Cc("round"),OS=hs(function(n,o){return n-o},0);function TS(n){return n&&n.length?rc(n,ar):0}function LS(n,o){return n&&n.length?rc(n,Re(o,2)):0}return M.after=tk,M.ary=_f,M.assign=Gk,M.assignIn=Pf,M.assignInWith=$f,M.assignWith=Vc,M.at=Wk,M.before=yf,M.bind=Fc,M.bindAll=jE,M.bindKey=kf,M.castArray=fk,M.chain=vf,M.chunk=k_,M.compact=E_,M.concat=S_,M.cond=KE,M.conforms=YE,M.constant=Kc,M.countBy=Ly,M.create=Uk,M.curry=Ef,M.curryRight=Sf,M.debounce=Af,M.defaults=Vk,M.defaultsDeep=qk,M.defer=rk,M.delay=nk,M.difference=A_,M.differenceBy=M_,M.differenceWith=x_,M.drop=I_,M.dropRight=C_,M.dropRightWhile=O_,M.dropWhile=T_,M.fill=L_,M.filter=Py,M.flatMap=Dy,M.flatMapDeep=Ny,M.flatMapDepth=By,M.flatten=ff,M.flattenDeep=R_,M.flattenDepth=P_,M.flip=ok,M.flow=JE,M.flowRight=QE,M.fromPairs=$_,M.functions=Qk,M.functionsIn=eE,M.groupBy=Hy,M.initial=D_,M.intersection=N_,M.intersectionBy=B_,M.intersectionWith=H_,M.invert=rE,M.invertBy=nE,M.invokeMap=Gy,M.iteratee=Yc,M.keyBy=Wy,M.keys=zt,M.keysIn=ir,M.map=ws,M.mapKeys=iE,M.mapValues=aE,M.matches=eS,M.matchesProperty=tS,M.memoize=ys,M.merge=sE,M.mergeWith=zf,M.method=rS,M.methodOf=nS,M.mixin=Xc,M.negate=ks,M.nthArg=iS,M.omit=lE,M.omitBy=cE,M.once=ik,M.orderBy=Uy,M.over=aS,M.overArgs=ak,M.overEvery=sS,M.overSome=lS,M.partial=Gc,M.partialRight=Mf,M.partition=Vy,M.pick=dE,M.pickBy=Df,M.property=Uf,M.propertyOf=cS,M.pull=U_,M.pullAll=gf,M.pullAllBy=V_,M.pullAllWith=q_,M.pullAt=Z_,M.range=dS,M.rangeRight=uS,M.rearg=sk,M.reject=jy,M.remove=j_,M.rest=lk,M.reverse=Bc,M.sampleSize=Yy,M.set=hE,M.setWith=fE,M.shuffle=Xy,M.slice=K_,M.sortBy=ek,M.sortedUniq=ry,M.sortedUniqBy=ny,M.split=zE,M.spread=ck,M.tail=oy,M.take=iy,M.takeRight=ay,M.takeRightWhile=sy,M.takeWhile=ly,M.tap=Ey,M.throttle=dk,M.thru=bs,M.toArray=Tf,M.toPairs=Nf,M.toPairsIn=Bf,M.toPath=mS,M.toPlainObject=Rf,M.transform=pE,M.unary=uk,M.union=cy,M.unionBy=dy,M.unionWith=uy,M.uniq=hy,M.uniqBy=fy,M.uniqWith=py,M.unset=gE,M.unzip=Hc,M.unzipWith=mf,M.update=mE,M.updateWith=vE,M.values=qo,M.valuesIn=bE,M.without=gy,M.words=Gf,M.wrap=hk,M.xor=my,M.xorBy=vy,M.xorWith=by,M.zip=wy,M.zipObject=_y,M.zipObjectDeep=yy,M.zipWith=ky,M.entries=Nf,M.entriesIn=Bf,M.extend=Pf,M.extendWith=$f,Xc(M,M),M.add=bS,M.attempt=Wf,M.camelCase=kE,M.capitalize=Hf,M.ceil=wS,M.clamp=wE,M.clone=pk,M.cloneDeep=mk,M.cloneDeepWith=vk,M.cloneWith=gk,M.conformsTo=bk,M.deburr=Ff,M.defaultTo=XE,M.divide=_S,M.endsWith=EE,M.eq=Fr,M.escape=SE,M.escapeRegExp=AE,M.every=Ry,M.find=$y,M.findIndex=uf,M.findKey=Zk,M.findLast=zy,M.findLastIndex=hf,M.findLastKey=jk,M.floor=yS,M.forEach=bf,M.forEachRight=wf,M.forIn=Kk,M.forInRight=Yk,M.forOwn=Xk,M.forOwnRight=Jk,M.get=qc,M.gt=wk,M.gte=_k,M.has=tE,M.hasIn=Zc,M.head=pf,M.identity=ar,M.includes=Fy,M.indexOf=z_,M.inRange=_E,M.invoke=oE,M.isArguments=co,M.isArray=Fe,M.isArrayBuffer=yk,M.isArrayLike=or,M.isArrayLikeObject=Et,M.isBoolean=kk,M.isBuffer=Bn,M.isDate=Ek,M.isElement=Sk,M.isEmpty=Ak,M.isEqual=Mk,M.isEqualWith=xk,M.isError=Wc,M.isFinite=Ik,M.isFunction=un,M.isInteger=xf,M.isLength=Es,M.isMap=If,M.isMatch=Ck,M.isMatchWith=Ok,M.isNaN=Tk,M.isNative=Lk,M.isNil=Pk,M.isNull=Rk,M.isNumber=Cf,M.isObject=bt,M.isObjectLike=_t,M.isPlainObject=Ni,M.isRegExp=Uc,M.isSafeInteger=$k,M.isSet=Of,M.isString=Ss,M.isSymbol=kr,M.isTypedArray=Vo,M.isUndefined=zk,M.isWeakMap=Dk,M.isWeakSet=Nk,M.join=F_,M.kebabCase=ME,M.last=Rr,M.lastIndexOf=G_,M.lowerCase=xE,M.lowerFirst=IE,M.lt=Bk,M.lte=Hk,M.max=kS,M.maxBy=ES,M.mean=SS,M.meanBy=AS,M.min=MS,M.minBy=xS,M.stubArray=Qc,M.stubFalse=ed,M.stubObject=hS,M.stubString=fS,M.stubTrue=pS,M.multiply=IS,M.nth=W_,M.noConflict=oS,M.noop=Jc,M.now=_s,M.pad=CE,M.padEnd=OE,M.padStart=TE,M.parseInt=LE,M.random=yE,M.reduce=qy,M.reduceRight=Zy,M.repeat=RE,M.replace=PE,M.result=uE,M.round=CS,M.runInContext=D,M.sample=Ky,M.size=Jy,M.snakeCase=$E,M.some=Qy,M.sortedIndex=Y_,M.sortedIndexBy=X_,M.sortedIndexOf=J_,M.sortedLastIndex=Q_,M.sortedLastIndexBy=ey,M.sortedLastIndexOf=ty,M.startCase=DE,M.startsWith=NE,M.subtract=OS,M.sum=TS,M.sumBy=LS,M.template=BE,M.times=gS,M.toFinite=hn,M.toInteger=Ge,M.toLength=Lf,M.toLower=HE,M.toNumber=Pr,M.toSafeInteger=Fk,M.toString=et,M.toUpper=FE,M.trim=GE,M.trimEnd=WE,M.trimStart=UE,M.truncate=VE,M.unescape=qE,M.uniqueId=vS,M.upperCase=ZE,M.upperFirst=jc,M.each=bf,M.eachRight=wf,M.first=pf,Xc(M,(function(){var n={};return Kr(M,function(o,u){Qe.call(M.prototype,u)||(n[u]=o)}),n})(),{chain:!1}),M.VERSION=i,wr(["bind","bindKey","curry","curryRight","partial","partialRight"],function(n){M[n].placeholder=M}),wr(["drop","take"],function(n,o){Ze.prototype[n]=function(u){u=u===r?1:Pt(Ge(u),0);var g=this.__filtered__&&!o?new Ze(this):this.clone();return g.__filtered__?g.__takeCount__=Ut(u,g.__takeCount__):g.__views__.push({size:Ut(u,G),type:n+(g.__dir__<0?"Right":"")}),g},Ze.prototype[n+"Right"]=function(u){return this.reverse()[n](u).reverse()}}),wr(["filter","map","takeWhile"],function(n,o){var u=o+1,g=u==ee||u==de;Ze.prototype[n]=function(k){var I=this.clone();return I.__iteratees__.push({iteratee:Re(k,3),type:u}),I.__filtered__=I.__filtered__||g,I}}),wr(["head","last"],function(n,o){var u="take"+(o?"Right":"");Ze.prototype[n]=function(){return this[u](1).value()[0]}}),wr(["initial","tail"],function(n,o){var u="drop"+(o?"":"Right");Ze.prototype[n]=function(){return this.__filtered__?new Ze(this):this[u](1)}}),Ze.prototype.compact=function(){return this.filter(ar)},Ze.prototype.find=function(n){return this.filter(n).head()},Ze.prototype.findLast=function(n){return this.reverse().find(n)},Ze.prototype.invokeMap=qe(function(n,o){return typeof n=="function"?new Ze(this):this.map(function(u){return Li(u,n,o)})}),Ze.prototype.reject=function(n){return this.filter(ks(Re(n)))},Ze.prototype.slice=function(n,o){n=Ge(n);var u=this;return u.__filtered__&&(n>0||o<0)?new Ze(u):(n<0?u=u.takeRight(-n):n&&(u=u.drop(n)),o!==r&&(o=Ge(o),u=o<0?u.dropRight(-o):u.take(o-n)),u)},Ze.prototype.takeRightWhile=function(n){return this.reverse().takeWhile(n).reverse()},Ze.prototype.toArray=function(){return this.take(G)},Kr(Ze.prototype,function(n,o){var u=/^(?:filter|find|map|reject)|While$/.test(o),g=/^(?:head|last)$/.test(o),k=M[g?"take"+(o=="last"?"Right":""):o],I=g||/^find/.test(o);k&&(M.prototype[o]=function(){var R=this.__wrapped__,$=g?[1]:arguments,H=R instanceof Ze,ne=$[0],re=H||Fe(R),ce=function(nt){var je=k.apply(M,Tn([nt],$));return g&&be?je[0]:je};re&&u&&typeof ne=="function"&&ne.length!=1&&(H=re=!1);var be=this.__chain__,ke=!!this.__actions__.length,Te=I&&!be,Ne=H&&!ke;if(!I&&re){R=Ne?R:new Ze(this);var Le=n.apply(R,$);return Le.__actions__.push({func:bs,args:[ce],thisArg:r}),new Or(Le,be)}return Te&&Ne?n.apply(this,$):(Le=this.thru(ce),Te?g?Le.value()[0]:Le.value():Le)})}),wr(["pop","push","shift","sort","splice","unshift"],function(n){var o=Ua[n],u=/^(?:push|sort|unshift)$/.test(n)?"tap":"thru",g=/^(?:pop|shift)$/.test(n);M.prototype[n]=function(){var k=arguments;if(g&&!this.__chain__){var I=this.value();return o.apply(Fe(I)?I:[],k)}return this[u](function(R){return o.apply(Fe(R)?R:[],k)})}}),Kr(Ze.prototype,function(n,o){var u=M[o];if(u){var g=u.name+"";Qe.call(Ho,g)||(Ho[g]=[]),Ho[g].push({name:o,func:u})}}),Ho[us(r,x).name]=[{name:"wrapper",func:r}],Ze.prototype.clone=Z7,Ze.prototype.reverse=j7,Ze.prototype.value=K7,M.prototype.at=Sy,M.prototype.chain=Ay,M.prototype.commit=My,M.prototype.next=xy,M.prototype.plant=Cy,M.prototype.reverse=Oy,M.prototype.toJSON=M.prototype.valueOf=M.prototype.value=Ty,M.prototype.first=M.prototype.head,Ai&&(M.prototype[Ai]=Iy),M})();typeof define=="function"&&typeof define.amd=="object"&&define.amd?($t._=Rn,define(function(){return Rn})):to?((to.exports=Rn)._=Rn,Kl._=Rn):$t._=Rn}).call(e)})),xe=Hi(up(),1);function xs(e){return xe.default.isEmpty(e)||xe.default.isNil(e)}function Sr(e){return xs(e)||e===!1||e===0}function hp(e,t=document.body){return new Promise(r=>{const i=document.querySelector(e);if(i){r(i);return}const a=new MutationObserver(()=>{const s=document.querySelector(e);s&&(r(s),a.disconnect())});a.observe(t,{childList:!0,subtree:!0,attributes:!0})})}function Is(e,t=250){return new Promise(r=>{const i=setInterval(()=>{e()&&(clearInterval(i),r(!0))},t)})}function fp(e,t,r=document.body){return new Promise(i=>{const a=r.querySelector(e);if(a?.getAttribute(t)){i(a.getAttribute(t)??"");return}const s=new MutationObserver(()=>{const l=r.querySelector(e);l?.getAttribute(t)&&(i(l.getAttribute(t)??""),s.disconnect())});s.observe(r,{childList:!0,subtree:!0,attributes:!0,attributeFilter:[t]})})}function pp(e,t=document.body){return new Promise(r=>{if(!Sr(unsafeWindow[e])){r(unsafeWindow[e]);return}const i=new MutationObserver(()=>{Sr(unsafeWindow[e])||(r(unsafeWindow[e]),i.disconnect())});i.observe(t,{childList:!0,subtree:!0,attributes:!0})})}async function jo(e,t,r,i){e!==void 0&&(ye(r),ye(i,await t(e)))}async function gp(e){await jo(e.waitAttr,t=>fp(t?.[0],t?.[1]),`Waiting for Attribute ${e.waitAttr?.[1]} of ${e.waitAttr?.[0]}`,`Found Attribute ${e.waitAttr?.[1]} of ${e.waitAttr?.[0]} =`),await jo(e.waitEle,hp,`Waiting for Element ${e.waitEle}`,"Found Element"),await jo(e.waitVar,pp,`Waiting for Variable ${e.waitVar}`,"Found Variable"),await jo(e.waitFunc,Is,`Waiting to pass Function check ${e.waitFunc}`,"Found Function check"),await jo(e.waitTime,t=>new Promise(r=>setTimeout(r,t)),`Waiting for ${e.waitTime} milliseconds`,"Continuing after timer")}var $r=[],pn=0,Fi=4,Gi=globalThis.nanostoresGlobal||={epoch:0},ld=e=>{let t=[],r={get(){return r.lc||r.listen(()=>{})(),r.value},init:e,lc:0,listen(i){return r.lc=t.push(i),()=>{for(let s=pn+Fi;s<$r.length;)$r[s]===i?$r.splice(s,Fi):s+=Fi;let a=t.indexOf(i);~a&&(t.splice(a,1),--r.lc||r.off())}},notify(i,a){Gi.epoch++;let s=!$r.length;for(let l of t)$r.push(l,r.value,i,a);if(s){for(pn=0;pn<$r.length;pn+=Fi)$r[pn]($r[pn+1],$r[pn+2],$r[pn+3]);$r.length=0}},off(){},set(i){let a=r.value;a!==i&&(r.value=i,r.notify(a))},subscribe(i){let a=r.listen(i);return i(r.value),a},value:e};return r},mp=5,Wi=6,Ui=10,vp=(e,t,r,i)=>(e.events=e.events||{},e.events[r+Ui]||(e.events[r+Ui]=i(a=>{e.events[r].reduceRight((s,l)=>(l(s),s),{shared:{},...a})})),e.events[r]=e.events[r]||[],e.events[r].push(t),()=>{let a=e.events[r],s=a.indexOf(t);a.splice(s,1),a.length||(delete e.events[r],e.events[r+Ui](),delete e.events[r+Ui])}),bp=1e3,wp=(e,t)=>vp(e,i=>{let a=t(i);a&&e.events[Wi].push(a)},mp,i=>{let a=e.listen;e.listen=(...l)=>(!e.lc&&!e.active&&(e.active=!0,i()),a(...l));let s=e.off;return e.events[Wi]=[],e.off=()=>{s(),setTimeout(()=>{if(e.active&&!e.lc){e.active=!1;for(let l of e.events[Wi])l();e.events[Wi]=[]}},bp)},()=>{e.listen=a,e.off=s}}),_p=(e,t,r)=>{Array.isArray(e)||(e=[e]);let i,a,s=()=>{if(a===Gi.epoch)return;a=Gi.epoch;let p=e.map(w=>w.get());if(!i||p.some((w,b)=>w!==i[b])){i=p;let w=t(...p);w&&w.then&&w.t?w.then(b=>{i===p&&l.set(b)}):(l.set(w),a=Gi.epoch)}},l=ld(void 0),h=l.get;l.get=()=>(s(),h());let c,f=r?()=>{clearTimeout(c),c=setTimeout(s)}:s;return wp(l,()=>{let p=e.map(w=>w.listen(f));return s(),()=>{for(let w of p)w()}}),l},yp=(e,t)=>_p(e,t),cd=(e={})=>{let t=ld(e);return t.setKey=function(r,i){let a=t.value;typeof i>"u"&&r in t.value?(t.value={...t.value},delete t.value[r],t.notify(a,r)):t.value[r]!==i&&(t.value={...t.value,[r]:i},t.notify(a,r))},t},Cs=globalThis,dd=e=>e,Vi=Cs.trustedTypes,ud=Vi?Vi.createPolicy("lit-html",{createHTML:e=>e}):void 0,Os="$lit$",Jr=`lit$${Math.random().toFixed(9).slice(2)}$`,Ts="?"+Jr,kp=`<${Ts}>`,Fn=document,Ko=()=>Fn.createComment(""),Yo=e=>e===null||typeof e!="object"&&typeof e!="function",Ls=Array.isArray,hd=e=>Ls(e)||typeof e?.[Symbol.iterator]=="function",Rs=`[ 	
\f\r]`,Xo=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,fd=/-->/g,pd=/>/g,Gn=RegExp(`>|${Rs}(?:([^\\s"'>=/]+)(${Rs}*=${Rs}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),gd=/'/g,md=/"/g,vd=/^(?:script|style|textarea|title)$/i,Ps=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),oe=Ps(1),RS=Ps(2),PS=Ps(3),Qr=Symbol.for("lit-noChange"),Be=Symbol.for("lit-nothing"),bd=new WeakMap,Wn=Fn.createTreeWalker(Fn,129);function wd(e,t){if(!Ls(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return ud!==void 0?ud.createHTML(t):t}var _d=(e,t)=>{const r=e.length-1,i=[];let a,s=t===2?"<svg>":t===3?"<math>":"",l=Xo;for(let h=0;h<r;h++){const c=e[h];let f,p,w=-1,b=0;for(;b<c.length&&(l.lastIndex=b,p=l.exec(c),p!==null);)b=l.lastIndex,l===Xo?p[1]==="!--"?l=fd:p[1]!==void 0?l=pd:p[2]!==void 0?(vd.test(p[2])&&(a=RegExp("</"+p[2],"g")),l=Gn):p[3]!==void 0&&(l=Gn):l===Gn?p[0]===">"?(l=a??Xo,w=-1):p[1]===void 0?w=-2:(w=l.lastIndex-p[2].length,f=p[1],l=p[3]===void 0?Gn:p[3]==='"'?md:gd):l===md||l===gd?l=Gn:l===fd||l===pd?l=Xo:(l=Gn,a=void 0);const m=l===Gn&&e[h+1].startsWith("/>")?" ":"";s+=l===Xo?c+kp:w>=0?(i.push(f),c.slice(0,w)+Os+c.slice(w)+Jr+m):c+Jr+(w===-2?h:m)}return[wd(e,s+(e[r]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),i]},$s=class qf{constructor({strings:t,_$litType$:r},i){let a;this.parts=[];let s=0,l=0;const h=t.length-1,c=this.parts,[f,p]=_d(t,r);if(this.el=qf.createElement(f,i),Wn.currentNode=this.el.content,r===2||r===3){const w=this.el.content.firstChild;w.replaceWith(...w.childNodes)}for(;(a=Wn.nextNode())!==null&&c.length<h;){if(a.nodeType===1){if(a.hasAttributes())for(const w of a.getAttributeNames())if(w.endsWith(Os)){const b=p[l++],m=a.getAttribute(w).split(Jr),v=/([.?@])?(.*)/.exec(b);c.push({type:1,index:s,name:v[2],strings:m,ctor:v[1]==="."?kd:v[1]==="?"?Ed:v[1]==="@"?Sd:Jo}),a.removeAttribute(w)}else w.startsWith(Jr)&&(c.push({type:6,index:s}),a.removeAttribute(w));if(vd.test(a.tagName)){const w=a.textContent.split(Jr),b=w.length-1;if(b>0){a.textContent=Vi?Vi.emptyScript:"";for(let m=0;m<b;m++)a.append(w[m],Ko()),Wn.nextNode(),c.push({type:2,index:++s});a.append(w[b],Ko())}}}else if(a.nodeType===8)if(a.data===Ts)c.push({type:2,index:s});else{let w=-1;for(;(w=a.data.indexOf(Jr,w+1))!==-1;)c.push({type:7,index:s}),w+=Jr.length-1}s++}}static createElement(t,r){const i=Fn.createElement("template");return i.innerHTML=t,i}};function Un(e,t,r=e,i){if(t===Qr)return t;let a=i!==void 0?r._$Co?.[i]:r._$Cl;const s=Yo(t)?void 0:t._$litDirective$;return a?.constructor!==s&&(a?._$AO?.(!1),s===void 0?a=void 0:(a=new s(e),a._$AT(e,r,i)),i!==void 0?(r._$Co??=[])[i]=a:r._$Cl=a),a!==void 0&&(t=Un(e,a._$AS(e,t.values),a,i)),t}var yd=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:r}=this._$AD,i=(e?.creationScope??Fn).importNode(t,!0);Wn.currentNode=i;let a=Wn.nextNode(),s=0,l=0,h=r[0];for(;h!==void 0;){if(s===h.index){let c;h.type===2?c=new qi(a,a.nextSibling,this,e):h.type===1?c=new h.ctor(a,h.name,h.strings,this,e):h.type===6&&(c=new Ad(a,this,e)),this._$AV.push(c),h=r[++l]}s!==h?.index&&(a=Wn.nextNode(),s++)}return Wn.currentNode=Fn,i}p(e){let t=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(e,r,t),t+=r.strings.length-2):r._$AI(e[t])),t++}},qi=class Zf{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,r,i,a){this.type=2,this._$AH=Be,this._$AN=void 0,this._$AA=t,this._$AB=r,this._$AM=i,this.options=a,this._$Cv=a?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&t?.nodeType===11&&(t=r.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,r=this){t=Un(this,t,r),Yo(t)?t===Be||t==null||t===""?(this._$AH!==Be&&this._$AR(),this._$AH=Be):t!==this._$AH&&t!==Qr&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):hd(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==Be&&Yo(this._$AH)?this._$AA.nextSibling.data=t:this.T(Fn.createTextNode(t)),this._$AH=t}$(t){const{values:r,_$litType$:i}=t,a=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=$s.createElement(wd(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===a)this._$AH.p(r);else{const s=new yd(a,this),l=s.u(this.options);s.p(r),this.T(l),this._$AH=s}}_$AC(t){let r=bd.get(t.strings);return r===void 0&&bd.set(t.strings,r=new $s(t)),r}k(t){Ls(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let i,a=0;for(const s of t)a===r.length?r.push(i=new Zf(this.O(Ko()),this.O(Ko()),this,this.options)):i=r[a],i._$AI(s),a++;a<r.length&&(this._$AR(i&&i._$AB.nextSibling,a),r.length=a)}_$AR(t=this._$AA.nextSibling,r){for(this._$AP?.(!1,!0,r);t!==this._$AB;){const i=dd(t).nextSibling;dd(t).remove(),t=i}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}},Jo=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,r,i,a){this.type=1,this._$AH=Be,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=a,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=Be}_$AI(e,t=this,r,i){const a=this.strings;let s=!1;if(a===void 0)e=Un(this,e,t,0),s=!Yo(e)||e!==this._$AH&&e!==Qr,s&&(this._$AH=e);else{const l=e;let h,c;for(e=a[0],h=0;h<a.length-1;h++)c=Un(this,l[r+h],t,h),c===Qr&&(c=this._$AH[h]),s||=!Yo(c)||c!==this._$AH[h],c===Be?e=Be:e!==Be&&(e+=(c??"")+a[h+1]),this._$AH[h]=c}s&&!i&&this.j(e)}j(e){e===Be?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},kd=class extends Jo{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===Be?void 0:e}},Ed=class extends Jo{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==Be)}},Sd=class extends Jo{constructor(e,t,r,i,a){super(e,t,r,i,a),this.type=5}_$AI(e,t=this){if((e=Un(this,e,t,0)??Be)===Qr)return;const r=this._$AH,i=e===Be&&r!==Be||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,a=e!==Be&&(r===Be||i);i&&this.element.removeEventListener(this.name,this,r),a&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},Ad=class{constructor(e,t,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){Un(this,e)}},Ep={M:Os,P:Jr,A:Ts,C:1,L:_d,R:yd,D:hd,V:Un,I:qi,H:Jo,N:Ed,U:Sd,B:kd,F:Ad},Sp=Cs.litHtmlPolyfillSupport;Sp?.($s,qi),(Cs.litHtmlVersions??=[]).push("3.3.3");var Ap=(e,t,r)=>{const i=r?.renderBefore??t;let a=i._$litPart$;if(a===void 0){const s=r?.renderBefore??null;i._$litPart$=a=new qi(t.insertBefore(Ko(),s),s,void 0,r??{})}return a._$AI(e),a},{I:Mp}=Ep,Md=e=>e,$S=e=>e===null||typeof e!="object"&&typeof e!="function",zS={HTML:1,SVG:2,MATHML:3},DS=(e,t)=>t===void 0?e?._$litType$!==void 0:e?._$litType$===t,NS=e=>e?._$litType$?.h!=null,BS=e=>e?._$litDirective$!==void 0,HS=e=>e?._$litDirective$,xp=e=>e.strings===void 0,xd=()=>document.createComment(""),FS=(e,t,r)=>{const i=e._$AA.parentNode,a=t===void 0?e._$AB:t._$AA;if(r===void 0)r=new Mp(i.insertBefore(xd(),a),i.insertBefore(xd(),a),e,e.options);else{const s=r._$AB.nextSibling,l=r._$AM,h=l!==e;if(h){let c;r._$AQ?.(e),r._$AM=e,r._$AP!==void 0&&(c=e._$AU)!==l._$AU&&r._$AP(c)}if(s!==a||h){let c=r._$AA;for(;c!==s;){const f=Md(c).nextSibling;Md(i).insertBefore(c,a),c=f}}}return r},GS=(e,t,r=e)=>(e._$AI(t,r),e),Ip={},WS=(e,t=Ip)=>e._$AH=t,US=e=>e._$AH,VS=e=>{e._$AR(),e._$AA.remove()},qS=e=>{e._$AR()},Zi={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Qo=e=>(...t)=>({_$litDirective$:e,values:t}),ji=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,r){this._$Ct=e,this._$AM=t,this._$Ci=r}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}},ei=(e,t)=>{const r=e._$AN;if(r===void 0)return!1;for(const i of r)i._$AO?.(t,!1),ei(i,t);return!0},Ki=e=>{let t,r;do{if((t=e._$AM)===void 0)break;r=t._$AN,r.delete(e),e=t}while(r?.size===0)},Id=e=>{for(let t;t=e._$AM;e=t){let r=t._$AN;if(r===void 0)t._$AN=r=new Set;else if(r.has(e))break;r.add(e),Tp(t)}};function Cp(e){this._$AN!==void 0?(Ki(this),this._$AM=e,Id(this)):this._$AM=e}function Op(e,t=!1,r=0){const i=this._$AH,a=this._$AN;if(a!==void 0&&a.size!==0)if(t)if(Array.isArray(i))for(let s=r;s<i.length;s++)ei(i[s],!1),Ki(i[s]);else i!=null&&(ei(i,!1),Ki(i));else ei(this,e)}var Tp=e=>{e.type==Zi.CHILD&&(e._$AP??=Op,e._$AQ??=Cp)},Lp=class extends ji{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,r){super._$AT(e,t,r),Id(this),this.isConnected=e._$AU}_$AO(e,t=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),t&&(ei(this,e),Ki(this))}setValue(e){if(xp(this._$Ct))this._$Ct._$AI(e,this);else{const t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}},zs=()=>new Rp,Rp=class{},Ds=new WeakMap,Ns=Qo(class extends Lp{render(e){return Be}update(e,[t]){const r=t!==this.G;return r&&this.rt(void 0),(r||this.lt!==this.ct)&&(this.G=t,this.ht=e.options?.host,this.rt(this.ct=e.element)),Be}rt(e){if(this.G!==void 0)if(this.isConnected||(e=void 0),typeof this.G=="function"){const t=this.ht??globalThis;let r=Ds.get(t);r===void 0&&(r=new WeakMap,Ds.set(t,r)),r.get(this.G)!==void 0&&this.G.call(this.ht,void 0),r.set(this.G,e),e!==void 0&&this.G.call(this.ht,e)}else this.G.value=e}get lt(){return typeof this.G=="function"?Ds.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),Pp={ID:"de_DE",NAME:"Deutsch",STARTING:"Starte Manga OnlineViewer",RESUME:"Fortsetzen ab Seite ",WAITING:"Bitte warten, 3 Sekunden...",CHOOSE_BEGINNING:"Wähle die Startseite:",BUTTON_START:"Manga OnlineViewer starten",SETTINGS:"Einstellungen",LANGUAGE:"Sprache",COLOR_SCHEME:"Farbschema",THEME:"Design",THEME_COLOR:"Farbe",THEME_HUE:"Farbton",THEME_SHADE:"Schattierung",DEFAULT_LOAD_MODE:"Standard-Lademodus",LOAD_MODE_NORMAL:"Normal (3 Sek. warten)",LOAD_MODE_ALWAYS:"Immer (sofort)",LOAD_MODE_NEVER:"Nie (manuell)",LOAD_SPEED:"Ladegeschwindigkeit",DEFAULT_ZOOM:"Standard-Zoom (zwischen 5 und 200)",DEFAULT_ZOOM_MODE:"Standard-Zoommodus",MINIMUM_ZOOM:"Minimaler Zoom relativ zur Bildschirmbreite (zwischen 30 und 100)",ZOOM_STEP:"Zoom-Schrittgröße (zwischen 5 und 50)",DEFAULT_VIEW_MODE:"Standard-Ansichtsmodus",VIEW_MODE_VERTICAL:"Vertikal",VIEW_MODE_LEFT:"Horizontal - Links nach Rechts",VIEW_MODE_RIGHT:"Horizontal - Rechts nach Links",VIEW_MODE_WEBCOMIC:"WebComic",VIEW_MODE_BOOK:"Buch - Links nach Rechts",VIEW_MODE_MANGA:"Manga - Rechts nach Links",VIEW_MODE_GALLERY:"Galerie",FIT_WIDTH_OVERSIZED:"Breite anpassen bei Übergröße",SHOW_THUMBNAILS:"Miniaturansichten anzeigen",HIDE_CONTROLS:"Seitensteuerung immer ausblenden",HEADER_TYPE:"Kopfbereichstyp ändern",HEADER_HOVER:"Hover",HEADER_SCROLL:"Scrollen",HEADER_CLICK:"Klicken",HEADER_FIXED:"Fixiert",HEADER_SIMPLE:"Einfach",BUTTON_DOWNLOAD:"Herunterladen",DOWNLOAD_ZIP:"Zip-Datei herunterladen",DOWNLOAD_IMAGES:"Bilder automatisch als Zip herunterladen",DOWNLOAD_PROGRESS:"Herunterladen: ##num## von ##total##",GENERATING_ZIP:"Zip-Datei wird erstellt...",DOWNLOAD_INCOMPLETE:"Download unvollständig",DOWNLOAD_INCOMPLETE_MESSAGE:"Einige Seiten konnten nicht heruntergeladen werden und wurden übersprungen. Eine Liste der fehlgeschlagenen Seiten wurde der ZIP-Datei hinzugefügt.",BUTTON_NEXT:"Weiter",NEXT_CHAPTER:"Nächstes Kapitel",BUTTON_PREVIOUS:"Zurück",PREVIOUS_CHAPTER:"Vorheriges Kapitel",BOOKMARKS:"Lesezeichen",BOOKMARK:"Lesezeichen",BOOKMARK_REMOVED:"Lesezeichen entfernt",BOOKMARK_SAVED:"Lesezeichen gespeichert",BOOKMARK_MESSAGE:"Beim nächsten Öffnen dieses Kapitels wird ab fortgesetzt: Seite ##num## (Nur EINMAL pro Lesezeichen)",KEYBINDINGS:"Tastenkürzel",EDIT_KEYBINDS:"Tastenkürzel bearbeiten",SAVE_KEYBINDS:"Tastenkürzel speichern",BUTTON_EDIT:"Bearbeiten",BUTTON_SAVE:"Speichern",KEYBIND_RULES:`
    <h3>Unterstützte Tasten</h3>
    Erlaubte Modifikatoren: shift, option, alt, ctrl, control, command. <br/>
    Spezielle Tasten: backspace, tab, clear, enter, return, esc, escape, space, up, down, left, right, home, end, pageup, pagedown, del, delete, f1 - f19, num_0 - num_9, num_multiply, num_add, num_enter, num_subtract, num_decimal, num_divide. <br/>
    Beispiele: <kbd>a</kbd>, <kbd>ctrl+a</kbd>, <kbd>shift+a</kbd>, <kbd>num_2</kbd>, <kbd>2</kbd>
  `,ATTENTION:"Achtung",WARNING:"Warnung",BUTTON_RESET_SETTINGS:"Einstellungen zurücksetzen(Reset Settings)",SETTINGS_RESET:"Die Einstellungen wurden zurückgesetzt, bitte Seite neu laden",LANGUAGE_CHANGED:"Die Sprache wurde geändert, bitte Seite neu laden",AUTO_DOWNLOAD:"Beim nächsten Laden eines Kapitels wirst du automatisch gefragt, ob du speichern möchtest",LAZY_LOAD:"Lazy Load ist mit Zip-Download nicht kompatibel, mit dieser Einstellung kannst du nicht herunterladen.<br/> Empfehlung: <span style='color:red;font-weight:bold'>Miniaturansichten deaktivieren</span> um Bandbreite/Speicher zu sparen.",LAZY_LOAD_IMAGES_ENABLE:"Lazy Load Bilder aktivieren",LAZY_LOAD_IMAGES:"Lazy Start ab Seite (zwischen 5 und 100)",RETURN_CHAPTER_LIST:"Zur Kapitelübersicht zurückkehren",PAGES_LOADED:"Seiten geladen",GO_TO_PAGE:"Gehe zu Seite",ENLARGE:"Vergrößern",RESTORE:"Wiederherstellen",REDUCE:"Wiederherstellen",FIT_WIDTH:"Breite anpassen",FIT_HEIGHT:"Höhe anpassen",PERCENT:"Prozent",TOGGLE_CONTROLS:"Seitensteuerung umschalten",ZOOM_IN:"Hineinzoomen",ZOOM_OUT:"Herauszoomen",ZOOM_RESET:"Zoom zurücksetzen",ZOOM_WIDTH:"Auf Breite zoomen",ZOOM_HEIGHT:"Auf Höhe zoomen",HIDE:"Ausblenden",RELOAD:"Neu laden",SLOWLY:"Langsam",NORMAL:"Normal",FAST:"Schnell",EXTREME:"Extrem",ALL_PAGES:"Alle Seiten",SPEED_WARNING:"Ladegeschwindigkeit zu hoch",SPEED_WARNING_MESSAGE:"Diese Geschwindigkeit wird nicht empfohlen.<br/> Sie kann einige Server überlasten oder deine IP als DDoS-Angreifer markieren.<br/> Bitte mit Vorsicht verwenden!",SCROLL_UP:"Nach oben scrollen",SCROLL_DOWN:"Nach unten scrollen",CLOSE:"Schließen",CANCEL:"Abbrechen",LIST_EMPTY:"Liste leer",SCROLL_START:"Auto-Scroll umschalten",INCREASE_SPEED:"Scrollgeschwindigkeit erhöhen",DECREASE_SPEED:"Scrollgeschwindigkeit verringern",AUTO_SCROLL_HEIGHT:"Auto-Scroll-Geschwindigkeit in Pixel",VERTICAL_SEPARATOR:"Vertikale Trenner anzeigen",END:"Ende",SCOPE:"Bereich",GLOBAL:"Global",GENERAL:"Allgemein",LOADING:"Lädt",ZOOM:"Zoom",OTHERS:"Sonstiges",NAVBAR_TYPE:"Navigationsleistentyp ändern",NAVBAR_BOTTOM:"Unten",NAVBAR_LEFT:"Links",NAVBAR_RIGHT:"Rechts",NAVBAR_DISABLED:"Deaktiviert",PAGINATION_TYPE:"Paginierungstyp",PAGINATION_DISABLED:"Deaktiviert",PAGINATION_SLIDER:"Schieberegler",PAGINATION_ARROWS:"Seitenpfeile",PAGINATION_BOTH:"Beides",FILE_MENU:"Hauptmenü",VIEW_MENU:"Menü „Ansicht“",ZOOM_MENU:"Zoom-Menü",DOUBLE_PAGE:"Doppelseite umschalten",CHOOSE_FILE:"Datei auswählen",NO_FILES_SELECTED:"Keine Dateien ausgewählt"},$p={ID:"en_US",NAME:"English (US)",STARTING:"Starting Manga OnlineViewer",RESUME:"Resuming reading from Page ",WAITING:"Please wait, 3 seconds...",CHOOSE_BEGINNING:"Choose the Page to start from:",BUTTON_START:"Start Manga OnlineViewer",SETTINGS:"Settings",LANGUAGE:"Language",COLOR_SCHEME:"Color Scheme",THEME:"Theme",THEME_COLOR:"Color",THEME_HUE:"Color Hue",THEME_SHADE:"Color Shade",DEFAULT_LOAD_MODE:"Default Load Mode",LOAD_MODE_NORMAL:"Normal(Wait 3 sec)",LOAD_MODE_ALWAYS:"Always(Immediately)",LOAD_MODE_NEVER:"Never(Manually)",LOAD_SPEED:"Load Speed",DEFAULT_ZOOM:"Default Zoom (between 5 and 200)",DEFAULT_ZOOM_MODE:"Default Zoom Mode",MINIMUM_ZOOM:"Minimum Zoom relative to the width of screen (between 30 and 100)",ZOOM_STEP:"Zoom Change Step (between 5 and 50)",DEFAULT_VIEW_MODE:"Default View Mode",VIEW_MODE_VERTICAL:"Vertical",VIEW_MODE_LEFT:"Horizontal - Left to Right",VIEW_MODE_RIGHT:"Horizontal - Right to Left",VIEW_MODE_WEBCOMIC:"WebComic",VIEW_MODE_BOOK:"Book - Left to Right",VIEW_MODE_MANGA:"Manga - Right to Left",VIEW_MODE_GALLERY:"Gallery",FIT_WIDTH_OVERSIZED:"Fit Width if Oversized",SHOW_THUMBNAILS:"Show Thumbnails",HIDE_CONTROLS:"Always Hide Page Controls",HEADER_TYPE:"Change Header Type",HEADER_HOVER:"Hover",HEADER_SCROLL:"Scroll",HEADER_CLICK:"Click",HEADER_FIXED:"Fixed",HEADER_SIMPLE:"Simple",BUTTON_DOWNLOAD:"Download",DOWNLOAD_ZIP:"Download Zip file",DOWNLOAD_IMAGES:"Download Images as Zip Automatically",DOWNLOAD_PROGRESS:"Downloading: ##num## of ##total##",GENERATING_ZIP:"Generating Zip file...",DOWNLOAD_INCOMPLETE:"Download Incomplete",DOWNLOAD_INCOMPLETE_MESSAGE:"Some pages failed to download and were skipped. A list of failed pages has been added to the ZIP file.",BUTTON_NEXT:"Next",NEXT_CHAPTER:"Next Chapter",BUTTON_PREVIOUS:"Previous",PREVIOUS_CHAPTER:"Previous Chapter",BOOKMARKS:"Bookmarks",BOOKMARK:"Bookmark",BOOKMARK_REMOVED:"Bookmark Removed",BOOKMARK_SAVED:"Bookmark Saved",BOOKMARK_MESSAGE:"Next time you open this chapter it will resume from: Page ##num## (Only ONCE per Bookmark)",KEYBINDINGS:"Keybindings",EDIT_KEYBINDS:"Edit KeyBindings",SAVE_KEYBINDS:"Save KeyBindings",BUTTON_EDIT:"Edit",BUTTON_SAVE:"Save",KEYBIND_RULES:`
    <h3>Supported Keys</h3>
    Allowed modifiers: shift, option, alt, ctrl, control, command. <br/>
    Special keys: backspace, tab, clear, enter, return, esc, escape, space, up, down, left, right, home, end, pageup, pagedown, del, delete, f1 - f19, num_0 - num_9, num_multiply, num_add, num_enter, num_subtract, num_decimal, num_divide. <br/>
    Examples: <kbd>a</kbd>, <kbd>ctrl+a</kbd> , <kbd>shift+a</kbd> , <kbd>num_2</kbd> , <kbd>2</kbd>
  `,ATTENTION:"Attention",WARNING:"Warning",BUTTON_RESET_SETTINGS:"Reset Settings",SETTINGS_RESET:"Settings have been reset, reload the page to take effect",LANGUAGE_CHANGED:"Language has been changed, reload the page to take effect",AUTO_DOWNLOAD:"Next time a chapter finish loading you will be prompted to save automatically",LAZY_LOAD:"Lazy load is incompatible with zip download, you will not be able to download with this setting ON.<br/> Suggestion: <span style='color:red;font-weight:bold'>Disable Thumbnails</span> to save Bandwidth/Memory.",LAZY_LOAD_IMAGES_ENABLE:"Enable Lazy Load Images",LAZY_LOAD_IMAGES:"Lazy Start From Page (between 5 and 100)",RETURN_CHAPTER_LIST:"Return to Chapter List",PAGES_LOADED:"Pages Loaded",GO_TO_PAGE:"Go to Page",ENLARGE:"Enlarge",RESTORE:"Restore",REDUCE:"Reduce",FIT_WIDTH:"Fit Width",FIT_HEIGHT:"Fit Height",PERCENT:"Percent",TOGGLE_CONTROLS:"Toggle page controls",ZOOM_IN:"Zoom In",ZOOM_OUT:"Zoom Out",ZOOM_RESET:"Zoom Reset",ZOOM_WIDTH:"Zoom to Width",ZOOM_HEIGHT:"Zoom to Height",HIDE:"Hide",RELOAD:"Reload",SLOWLY:"Slowly",NORMAL:"Normal",FAST:"Fast",EXTREME:"Extreme",ALL_PAGES:"All Pages",SPEED_WARNING:"Loading Speed too High",SPEED_WARNING_MESSAGE:"This speed is not recommended.<br/> It may hurt some servers or get your IP marked as DDoS attacker.<br/> Please use with caution!",SCROLL_UP:"Scroll Up",SCROLL_DOWN:"Scroll Down",CLOSE:"Close",CANCEL:"Cancel",LIST_EMPTY:"List Empty",SCROLL_START:"Toggle Auto Scroll",INCREASE_SPEED:"Increase Scroll Speed",DECREASE_SPEED:"Decrease Scroll Speed",AUTO_SCROLL_HEIGHT:"Auto Scroll Speed in Pixels",VERTICAL_SEPARATOR:"Show Vertical Separators",END:"End",SCOPE:"Scope",GLOBAL:"Global",GENERAL:"General",LOADING:"Loading",ZOOM:"Zoom",OTHERS:"Others",NAVBAR_TYPE:"Change Navbar Type",NAVBAR_BOTTOM:"Bottom",NAVBAR_LEFT:"Left",NAVBAR_RIGHT:"Right",NAVBAR_DISABLED:"Disabled",PAGINATION_TYPE:"Pagination Type",PAGINATION_DISABLED:"Disabled",PAGINATION_SLIDER:"Slider",PAGINATION_ARROWS:"Side Arrows",PAGINATION_BOTH:"Both",FILE_MENU:"Main Menu",VIEW_MENU:"View Menu",ZOOM_MENU:"Zoom Menu",DOUBLE_PAGE:"Toggle Double Page",CHOOSE_FILE:"Choose File",NO_FILES_SELECTED:"No files selected"},zp={ID:"es_ES",NAME:"Español (ES)",STARTING:"Iniciando Manga OnlineViewer",RESUME:"Continuando lectura desde la Página ",WAITING:"Por favor espere, 3 segundos...",CHOOSE_BEGINNING:"Elija la página en la que comenzar:",BUTTON_START:"Iniciar Manga OnlineViewer",SETTINGS:"Ajustes",LANGUAGE:"Idioma",COLOR_SCHEME:"Esquema de color",THEME:"Tema",THEME_COLOR:"Color",THEME_HUE:"Matiz del color",THEME_SHADE:"Saturación del color",DEFAULT_LOAD_MODE:"Modo de carga por defecto",LOAD_MODE_NORMAL:"Normal (Espera 3s)",LOAD_MODE_ALWAYS:"Siempre (Inmediatamente)",LOAD_MODE_NEVER:"Nunca (Manualmente)",LOAD_SPEED:"Velocidad carga",DEFAULT_ZOOM:"Zoom por defecto (entre 5 y 200)",DEFAULT_ZOOM_MODE:"Modo de zoom por defecto",MINIMUM_ZOOM:"Zoom mínimo relativo al ancho de la pantalla",ZOOM_STEP:"Paso entre cambios de zoom (entre 5 y 50)",DEFAULT_VIEW_MODE:"Modo de visualización por defecto",VIEW_MODE_VERTICAL:"Vertical",VIEW_MODE_LEFT:"Horizontal - Izquierda a derecha",VIEW_MODE_RIGHT:"Horizontal - Derecha a izquierda",VIEW_MODE_WEBCOMIC:"WebComic",VIEW_MODE_BOOK:"Libro - Izquierda a derecha",VIEW_MODE_MANGA:"Manga - Derecha a izquierda",VIEW_MODE_GALLERY:"Galería",FIT_WIDTH_OVERSIZED:"Ajustar ancho si es demasiado grande",SHOW_THUMBNAILS:"Mostrar miniaturas",HIDE_CONTROLS:"Ocultar siempre la barra de controles",HEADER_TYPE:"Cambiar tipo de cabecera",HEADER_HOVER:"Pasar por encima",HEADER_SCROLL:"Desplazamiento",HEADER_CLICK:"Hacer click",HEADER_FIXED:"Fijo",HEADER_SIMPLE:"Sencillo",BUTTON_DOWNLOAD:"Descargar",DOWNLOAD_ZIP:"Descargar fichero Zip",DOWNLOAD_IMAGES:"Autodescargar imágenes como Zip",DOWNLOAD_PROGRESS:"Descargando: ##num## de ##total##",GENERATING_ZIP:"Generando archivo Zip...",DOWNLOAD_INCOMPLETE:"Descarga Incompleta",DOWNLOAD_INCOMPLETE_MESSAGE:"Algunas páginas no se pudieron descargar y se saltaron. Se ha añadido una lista de páginas fallidas al archivo ZIP.",BUTTON_NEXT:"Siguiente",NEXT_CHAPTER:"Siguiente capítulo",BUTTON_PREVIOUS:"Anterior",PREVIOUS_CHAPTER:"Capítulo anterior",BOOKMARKS:"Marcadores",BOOKMARK:"Marcador",BOOKMARK_REMOVED:"Marcador eliminado",BOOKMARK_SAVED:"Marcador guardado",BOOKMARK_MESSAGE:"La próxima vez que abra este capítulo, continuará desde la página ##num## (Sólo UNA VEZ por Marcador)",KEYBINDINGS:"Atajos de teclado",EDIT_KEYBINDS:"Editar atajos",SAVE_KEYBINDS:"Guardar atajos",BUTTON_EDIT:"Editar",BUTTON_SAVE:"Guardar",KEYBIND_RULES:`
    <h3>Teclas soportadas</h3>
    Modificadores permitidos: shift, option, alt, ctrl, control, command. <br/>
    Teclas especiales: backspace, tab, clear, enter, return, esc, escape, space, up, down, left, right, home, end, pageup, pagedown, del, delete, f1 - f19, num_0 - num_9, num_multiply, num_add, num_enter, num_subtract, num_decimal, num_divide. <br/>
    Ejemplos: <kbd>a</kbd>, <kbd>ctrl+a</kbd> , <kbd>shift+a</kbd> , <kbd>num_2</kbd> , <kbd>2</kbd>
  `,ATTENTION:"Atención",WARNING:"Alerta",BUTTON_RESET_SETTINGS:"Reiniciar ajustes(Reset Settings)",SETTINGS_RESET:"Se han restablecido los ajustes, vuelve a cargar la página para que surta efecto",LANGUAGE_CHANGED:"Se ha cambiado el idioma, vuelve a cargar la página para que surta efecto",AUTO_DOWNLOAD:"La próxima vez que termine de cargarse un capítulo, se le pedirá que guarde automáticamente",LAZY_LOAD:"La carga diferida es incompatible con la descarga zip, no podrá descargar con este ajuste activado.<br/> Sugerencia: <span style='color:red;font-weight:bold'>Desactivar miniaturas</span> para ahorrar Ancho de banda/Memoria.",LAZY_LOAD_IMAGES_ENABLE:"Habilitar carga de imágenes diferida",LAZY_LOAD_IMAGES:"Empezar carga diferida a partir de la página (entre 5 y 100)",RETURN_CHAPTER_LIST:"Regresar a la lista de capítulos",PAGES_LOADED:"Páginas cargadas",GO_TO_PAGE:"Ir a página",ENLARGE:"Agrandar",RESTORE:"Restaurar",REDUCE:"Reducir",FIT_WIDTH:"Ajustar al ancho",FIT_HEIGHT:"Ajustar al alto",PERCENT:"Porcentual",TOGGLE_CONTROLS:"Alternar controles de página",ZOOM_IN:"Acercar",ZOOM_OUT:"Alejar",ZOOM_RESET:"Restablecer zoom",ZOOM_WIDTH:"Zoom al ancho",ZOOM_HEIGHT:"Zoom al alto",HIDE:"Ocultar",RELOAD:"Recargar",SLOWLY:"Lento",NORMAL:"Normal",FAST:"Rápido",EXTREME:"Extremo",ALL_PAGES:"Todas las páginas",SPEED_WARNING:"Velocidad de carga muy alta",SPEED_WARNING_MESSAGE:"No se recomienda esta velocidad.<br/> Puede dañar algunos servidores o marcar su IP como atacante DDoS.<br/> ¡Utilícelo con precaución!",SCROLL_UP:"Desplazar arriba",SCROLL_DOWN:"Desplazarse hacia abajo",CLOSE:"Cerrar",CANCEL:"Cancelar",LIST_EMPTY:"Lista vacía",SCROLL_START:"Alternar desplazamiento automático",INCREASE_SPEED:"Aumentar la velocidad de desplazamiento",DECREASE_SPEED:"Disminuir la velocidad de desplazamiento",AUTO_SCROLL_HEIGHT:"Velocidad de desplazamiento automático en píxeles",VERTICAL_SEPARATOR:"Mostrar separadores verticales",END:"Fin",SCOPE:"Alcance",GLOBAL:"Global",GENERAL:"General",LOADING:"Carga",ZOOM:"Zoom",OTHERS:"Otros",NAVBAR_TYPE:"Cambiar el tipo de barra de navegación",NAVBAR_BOTTOM:"Abajo",NAVBAR_LEFT:"Izquierda",NAVBAR_RIGHT:"Derecha",NAVBAR_DISABLED:"Desactivado",PAGINATION_TYPE:"Tipo de paginación",PAGINATION_DISABLED:"Desactivado",PAGINATION_SLIDER:"Control deslizante",PAGINATION_ARROWS:"Flechas laterales",PAGINATION_BOTH:"Ambos",FILE_MENU:"Menú principal",VIEW_MENU:"Ver menú",ZOOM_MENU:"Menú Zoom",DOUBLE_PAGE:"Alternar Página Doble",CHOOSE_FILE:"Elegir archivo",NO_FILES_SELECTED:"No se han seleccionado archivos"},Dp={ID:"fr_FR",NAME:"Français (FR)",STARTING:"Démarrage Manga OnlineViewer",RESUME:"Reprise de la lecture à partir de la Page ",WAITING:"Veuillez patienter, 3 secondes...",CHOOSE_BEGINNING:"Choisissez la page par laquelle commencer :",BUTTON_START:"Démarrer Manga OnlineViewer",SETTINGS:"Paramètres",LANGUAGE:"Langue",COLOR_SCHEME:"Palette de couleurs",THEME:"Thème",THEME_COLOR:"Couleur",THEME_HUE:"Teinte de couleur",THEME_SHADE:"Nuance de couleur",DEFAULT_LOAD_MODE:"Mode de chargement par défaut",LOAD_MODE_NORMAL:"Normal (attendre 3 s)",LOAD_MODE_ALWAYS:"Toujours (immédiatement)",LOAD_MODE_NEVER:"Jamais (manuellement)",LOAD_SPEED:"Vitesse de chargement",DEFAULT_ZOOM:"Zoom par défaut (entre 5 et 200)",DEFAULT_ZOOM_MODE:"Mode de zoom par défaut",MINIMUM_ZOOM:"Zoom minimum par rapport à la largeur de l'écran (entre 30 et 100)",ZOOM_STEP:"Pas de changement de zoom (entre 5 et 50)",DEFAULT_VIEW_MODE:"Mode d'affichage par défaut",VIEW_MODE_VERTICAL:"Vertical",VIEW_MODE_LEFT:"Horizontal - De gauche à droite",VIEW_MODE_RIGHT:"Horizontal - De droite à gauche",VIEW_MODE_WEBCOMIC:"WebComic",VIEW_MODE_BOOK:"Livre - De gauche à droite",VIEW_MODE_MANGA:"Manga - De droite à gauche",VIEW_MODE_GALLERY:"Galerie",FIT_WIDTH_OVERSIZED:"Ajuster à la largeur si surdimensionné",SHOW_THUMBNAILS:"Afficher les vignettes",HIDE_CONTROLS:"Toujours masquer les contrôles de page",HEADER_TYPE:"Changer le type d'en-tête",HEADER_HOVER:"Survol",HEADER_SCROLL:"Défilement",HEADER_CLICK:"Clic",HEADER_FIXED:"Fixe",HEADER_SIMPLE:"Simple",BUTTON_DOWNLOAD:"Télécharger",DOWNLOAD_ZIP:"Télécharger le fichier Zip",DOWNLOAD_IMAGES:"Télécharger les images en Zip automatiquement",DOWNLOAD_PROGRESS:"Téléchargement : ##num## sur ##total##",GENERATING_ZIP:"Génération du fichier Zip...",DOWNLOAD_INCOMPLETE:"Téléchargement incomplet",DOWNLOAD_INCOMPLETE_MESSAGE:"Certaines pages n'ont pas pu être téléchargées et ont été ignorées. Une liste des pages concernées a été ajoutée au fichier ZIP.",BUTTON_NEXT:"Suivant",NEXT_CHAPTER:"Chapitre suivant",BUTTON_PREVIOUS:"Précédent",PREVIOUS_CHAPTER:"Chapitre précédent",BOOKMARKS:"Favoris",BOOKMARK:"Favori",BOOKMARK_REMOVED:"Favori supprimé",BOOKMARK_SAVED:"Favori enregistré",BOOKMARK_MESSAGE:"La prochaine fois que vous ouvrirez ce chapitre, il reprendra à partir de: Page ##num## (Seulement UNE FOIS par favori)",KEYBINDINGS:"Raccourcis clavier",EDIT_KEYBINDS:"Modifier les raccourcis clavier",SAVE_KEYBINDS:"Enregistrer les raccourcis clavier",BUTTON_EDIT:"Modifier",BUTTON_SAVE:"Enregistrer",KEYBIND_RULES:`
    <h3>Touches prises en charge</h3>
    Modificateurs autorisés : shift, option, alt, ctrl, control, command. <br/>
    Touches spéciales : backspace, tab, clear, enter, return, esc, escape, space, up, down, left, right, home, end, pageup, pagedown, del, delete, f1 - f19, num_0 - num_9, num_multiply, num_add, num_enter, num_subtract, num_decimal, num_divide. <br/>
    Exemples : <kbd>a</kbd>, <kbd>ctrl+a</kbd> , <kbd>shift+a</kbd> , <kbd>num_2</kbd> , <kbd>2</kbd>
  `,ATTENTION:"Attention",WARNING:"Avertissement",BUTTON_RESET_SETTINGS:"Réinitialiser les paramètres",SETTINGS_RESET:"Les paramètres ont été réinitialisés, rechargez la page pour prendre effet",LANGUAGE_CHANGED:"La langue a été modifiée, rechargez la page pour prendre effet",AUTO_DOWNLOAD:"La prochaine fois qu'un chapitre finira de se charger, il vous sera proposé de l'enregistrer automatiquement",LAZY_LOAD:"Le chargement paresseux est incompatible avec le téléchargement zip, vous ne pourrez pas télécharger avec ce paramètre activé.<br/> Suggestion : <span style='color:red;font-weight:bold'>Désactivez les vignettes</span> pour économiser de la bande passante/mémoire.",LAZY_LOAD_IMAGES_ENABLE:"Activer le chargement paresseux des images",LAZY_LOAD_IMAGES:"Début du chargement paresseux à partir de la page (entre 5 et 100)",RETURN_CHAPTER_LIST:"Retour à la liste des chapitres",PAGES_LOADED:"Pages chargées",GO_TO_PAGE:"Aller à la page",ENLARGE:"Agrandir",RESTORE:"Restaurer",REDUCE:"Réduire",FIT_WIDTH:"Ajuster à la largeur",FIT_HEIGHT:"Ajuster à la hauteur",PERCENT:"Pourcentage",TOGGLE_CONTROLS:"Basculer les contrôles de page",ZOOM_IN:"Zoom avant",ZOOM_OUT:"Zoom arrière",ZOOM_RESET:"Réinitialiser le zoom",ZOOM_WIDTH:"Zoomer à la largeur",ZOOM_HEIGHT:"Zoomer à la hauteur",HIDE:"Masquer",RELOAD:"Recharger",SLOWLY:"Lentement",NORMAL:"Normal",FAST:"Rapide",EXTREME:"Extrême",ALL_PAGES:"Toutes les pages",SPEED_WARNING:"Vitesse de chargement trop élevée",SPEED_WARNING_MESSAGE:"Cette vitesse n'est pas recommandée.<br/> Elle peut nuire à certains serveurs ou marquer votre IP comme un attaquant DDoS.<br/> Veuillez l'utiliser avec prudence !",SCROLL_UP:"Faire défiler vers le haut",SCROLL_DOWN:"Faire défiler vers le bas",CLOSE:"Fermer",CANCEL:"Annuler",LIST_EMPTY:"Liste vide",SCROLL_START:"Basculer le défilement automatique",INCREASE_SPEED:"Augmenter la vitesse de défilement",DECREASE_SPEED:"Diminuer la vitesse de défilement",AUTO_SCROLL_HEIGHT:"Vitesse de défilement automatique en pixels",VERTICAL_SEPARATOR:"Afficher les séparateurs verticaux",END:"Fin",SCOPE:"Portée",GLOBAL:"Global",GENERAL:"Général",LOADING:"Chargement",ZOOM:"Zoom",OTHERS:"Autres",NAVBAR_TYPE:"Changer le type de barre de navigation",NAVBAR_BOTTOM:"Bas",NAVBAR_LEFT:"Gauche",NAVBAR_RIGHT:"Droite",NAVBAR_DISABLED:"Désactivé",PAGINATION_TYPE:"Type de pagination",PAGINATION_DISABLED:"Désactivé",PAGINATION_SLIDER:"Curseur",PAGINATION_ARROWS:"Flèches latérales",PAGINATION_BOTH:"Les deux",FILE_MENU:"Menu principal",VIEW_MENU:"Menu Affichage",ZOOM_MENU:"Menu Zoom",DOUBLE_PAGE:"Basculer Double Page",CHOOSE_FILE:"Choisir un fichier",NO_FILES_SELECTED:"Aucun fichier sélectionné"},Np={ID:"pt_BR",NAME:"Portugues (Brasil)",STARTING:"Iniciando Manga OnlineViewer",RESUME:"Continuando leitura na Pagina ",WAITING:"Por Favor espere, 3 segundos...",CHOOSE_BEGINNING:"Escolha a pagina de onde começar:",BUTTON_START:"Iniciar Manga OnlineViewer",SETTINGS:"Configurações",LANGUAGE:"Idioma",COLOR_SCHEME:"Esquema de Color",THEME:"Tema",THEME_COLOR:"Cor",THEME_HUE:"Tom da Cor",THEME_SHADE:"Saturação da Cor",DEFAULT_LOAD_MODE:"Forma de Carregamento Padrão",LOAD_MODE_NORMAL:"Normal(Esperando 3 sec)",LOAD_MODE_ALWAYS:"Sempre(Imediatamente)",LOAD_MODE_NEVER:"Nunca(Manualmente)",LOAD_SPEED:"Velocidade de Carregamento",DEFAULT_ZOOM:"Zoom padrão (entre 5 e 200)",DEFAULT_ZOOM_MODE:"Modo de Zoom padrão",MINIMUM_ZOOM:"Zoom minimo, relativo ao tamanho da tela (entre 30 e 100)",ZOOM_STEP:"Precisão da Mudança do Zoom (entre 5 e 50)",DEFAULT_VIEW_MODE:"Modo de Visualização Padrão",VIEW_MODE_VERTICAL:"Vertical",VIEW_MODE_LEFT:"Horizontal - Esquerda para Direita",VIEW_MODE_RIGHT:"Horizontal - Direita para Esquerda",VIEW_MODE_WEBCOMIC:"WebComic",VIEW_MODE_BOOK:"Livro - Esquerda para Direita",VIEW_MODE_MANGA:"Mangá - Direita para Esquerda",VIEW_MODE_GALLERY:"Galeria",FIT_WIDTH_OVERSIZED:"Encher a tela se grande demais",SHOW_THUMBNAILS:"Mostra Miniaturas",HIDE_CONTROLS:"Sempre esconder controles das paginas",HEADER_TYPE:"Mudar Tipo de Cabeçalho",HEADER_HOVER:"Passar por perto",HEADER_SCROLL:"Rolagem do Mouse",HEADER_CLICK:"Click",HEADER_FIXED:"Fixo",HEADER_SIMPLE:"Simples",BUTTON_DOWNLOAD:"Download",DOWNLOAD_ZIP:"Baixar arquivo Zip",DOWNLOAD_IMAGES:"Download das Imagens como Zip Automaticamente",DOWNLOAD_PROGRESS:"Baixando: ##num## de ##total##",GENERATING_ZIP:"Gerando arquivo Zip...",DOWNLOAD_INCOMPLETE:"Download Incompleto",DOWNLOAD_INCOMPLETE_MESSAGE:"Algumas páginas falharam ao baixar e foram puladas. Uma lista de páginas que falharam foi adicionada ao arquivo ZIP.",BUTTON_NEXT:"Proximo",NEXT_CHAPTER:"Proximo Capitulo",BUTTON_PREVIOUS:"Anterior",PREVIOUS_CHAPTER:"Capitulo Anterior",BOOKMARKS:"Marca paginas",BOOKMARK:"Marcar pagina",BOOKMARK_REMOVED:"Marca pagina Removido",BOOKMARK_SAVED:"Marca pagina Salvo",BOOKMARK_MESSAGE:"Proxima vez que abrir este capitulo continuará a partir da Pagina ##num## (Apenas UMA VEZ por marca pagina)",KEYBINDINGS:"Atalhos",EDIT_KEYBINDS:"Editar Atalhos",SAVE_KEYBINDS:"Salvar Atalhos",BUTTON_EDIT:"Editar",BUTTON_SAVE:"Salvar",KEYBIND_RULES:`
    <h3>Teclas Suportadas</h3>
    Modificadores permitidos: shift, option, alt, ctrl, control, command. <br/>
    Teclas Especiais: backspace, tab, clear, enter, return, esc, escape, space, up, down, left, right, home, end, pageup, pagedown, del, delete, f1 - f19, num_0 - num_9, num_multiply, num_add, num_enter, num_subtract, num_decimal, num_divide.<br/>
    Exemplos: <kbd>a</kbd>, <kbd>ctrl+a</kbd> , <kbd>shift+a</kbd> , <kbd>num_2</kbd> , <kbd>2</kbd>
  `,ATTENTION:"Atenção",WARNING:"Alerta",BUTTON_RESET_SETTINGS:"Limpar Configurações(Reset Settings)",SETTINGS_RESET:"Configurações foram limpas, recarregue o site para efetivar a alteração",LANGUAGE_CHANGED:"Idioma foi alterado, recarregue o site para efetivar a alteração",AUTO_DOWNLOAD:"Proxima vez que abrir um capitulo download iniciara automaticamente",LAZY_LOAD:"Carregamento preguiçoso não é compativel com download de zip, não conseguira com essa configuração ativa.<br/> Sugestão: <span style='color:red;font-weight:bold'>Desative Miniaturas</span> para economizar memoria e cota de internet.",LAZY_LOAD_IMAGES_ENABLE:"Ativar Carregamento de imagens preguiçoso",LAZY_LOAD_IMAGES:"Carregamento de paginas preguiçoso começa a partir de (entre 5 e 100)",RETURN_CHAPTER_LIST:"Voltar a lista de Capitulos",PAGES_LOADED:"Paginas Carregadas",GO_TO_PAGE:"Pular para",ENLARGE:"Aumentar",RESTORE:"Restaurar",REDUCE:"Diminuir",FIT_WIDTH:"Preencher Largura",FIT_HEIGHT:"Preencher Altura ",PERCENT:"Percentual",TOGGLE_CONTROLS:"Mostar controles de pagina",ZOOM_IN:"Mais Zoom",ZOOM_OUT:"Menos Zoom",ZOOM_RESET:"Resetar Zoom",ZOOM_WIDTH:"Zoom para Largura",ZOOM_HEIGHT:"Zoom para Altura",HIDE:"Esconder",RELOAD:"Recarregar",SLOWLY:"Devagar",NORMAL:"Normal",FAST:"Rapido",EXTREME:"Extremo",ALL_PAGES:"Todas as Paginas",SPEED_WARNING:"Velocidade de Carregamento muito alta",SPEED_WARNING_MESSAGE:"Essa velocidade não é recomendada.<br/> Ela pode derrubar um servidor or marcar voce como um ataque hacker de DDoS.<br/> Use com cuidado!",SCROLL_UP:"Subir Pagina",SCROLL_DOWN:"Descer Pagina",CLOSE:"Fechar",CANCEL:"Cancelar",LIST_EMPTY:"Lista Vazia",SCROLL_START:"Ativar Rolagem Automatica",INCREASE_SPEED:"Aumentar Valocidade da Rolagem",DECREASE_SPEED:"Diminuir Valocidade da Rolagem",AUTO_SCROLL_HEIGHT:"Velocidade da Rolagem Automatica em Pixels",VERTICAL_SEPARATOR:"Mostrar Separadores Verticais",END:"Fin",SCOPE:"Escopo",GLOBAL:"Global",GENERAL:"Geral",LOADING:"Carregamento",ZOOM:"Zoom",OTHERS:"Outros",NAVBAR_TYPE:"Mudar barra de navegação",NAVBAR_BOTTOM:"Embaixo",NAVBAR_LEFT:"Esquerda",NAVBAR_RIGHT:"Direita",NAVBAR_DISABLED:"Desativado",PAGINATION_TYPE:"Tipo de Paginação",PAGINATION_DISABLED:"Desativado",PAGINATION_SLIDER:"Controle deslizante",PAGINATION_ARROWS:"Setas Laterais",PAGINATION_BOTH:"Ambos",FILE_MENU:"Menu Principal",VIEW_MENU:"Menu de Visualizações",ZOOM_MENU:"Menu de Zoom",DOUBLE_PAGE:"Alternar Página Dupla",CHOOSE_FILE:"Escolher arquivo",NO_FILES_SELECTED:"Nenhum arquivo selecionado"},Bp={ID:"zh_CN",NAME:"中文 (简体)",STARTING:"正在启动 Manga OnlineViewer",RESUME:"从页面继续阅读 ",WAITING:"请等待3秒钟...",CHOOSE_BEGINNING:"选择要开始的页数:",BUTTON_START:"启动Manga OnlineViewer",SETTINGS:"设置",LANGUAGE:"语言",COLOR_SCHEME:"配色方案",THEME:"主题",THEME_COLOR:"颜色",THEME_HUE:"色相",THEME_SHADE:"色度",DEFAULT_LOAD_MODE:"默认加载模式",LOAD_MODE_NORMAL:"等待模式(等待3秒自动加载 )",LOAD_MODE_ALWAYS:"自动模式(无需等待)",LOAD_MODE_NEVER:"手动模式(点击启动)",LOAD_SPEED:"加载速度",DEFAULT_ZOOM:"默认缩放 (最小 5 最大 200)",DEFAULT_ZOOM_MODE:"默认缩放模式",MINIMUM_ZOOM:"相对于屏幕宽度的最小缩放 (最小 30 最大 100)",ZOOM_STEP:"缩放级别 (最小 5 最大 50)",DEFAULT_VIEW_MODE:"默认视图模式",VIEW_MODE_VERTICAL:"垂直有缝",VIEW_MODE_LEFT:"横向 - 从左到右",VIEW_MODE_RIGHT:"横向 - 从右到左",VIEW_MODE_WEBCOMIC:"垂直无缝",VIEW_MODE_BOOK:"书籍 - 从左到右",VIEW_MODE_MANGA:"漫画 - 从右到左",VIEW_MODE_GALLERY:"图库",FIT_WIDTH_OVERSIZED:"如果尺寸过大、则适合宽度",SHOW_THUMBNAILS:"显示缩略图",HIDE_CONTROLS:"始终隐藏页面控件",HEADER_TYPE:"更改标题显示方式",HEADER_HOVER:"悬停",HEADER_SCROLL:"滚动",HEADER_CLICK:"点击",HEADER_FIXED:"固定",HEADER_SIMPLE:"简单",BUTTON_DOWNLOAD:"下载",DOWNLOAD_ZIP:"下载压缩文件",DOWNLOAD_IMAGES:"自动将图片下载成ZIP",DOWNLOAD_PROGRESS:"正在下载：第 ##num## 页，共 ##total## 页",GENERATING_ZIP:"正在生成 Zip 文件...",DOWNLOAD_INCOMPLETE:"下载不完整",DOWNLOAD_INCOMPLETE_MESSAGE:"部分页面下载失败并已跳过。失败页面列表已添加到 ZIP 文件中。",BUTTON_NEXT:"下一页",NEXT_CHAPTER:"下一章",BUTTON_PREVIOUS:"上一页",PREVIOUS_CHAPTER:"上一章",BOOKMARKS:"书签",BOOKMARK:"Bookmark",BOOKMARK_REMOVED:"删除书签",BOOKMARK_SAVED:"保存书签",BOOKMARK_MESSAGE:"下次打开本章时，将从: 页码 ##num## (仅一次 每个书签)",KEYBINDINGS:"快捷键",EDIT_KEYBINDS:"编辑键绑定",SAVE_KEYBINDS:"保存键绑定",BUTTON_EDIT:"编辑",BUTTON_SAVE:"救",KEYBIND_RULES:`
    <h3>支持的密钥</h3>
    允许的修饰符: shift, option, alt, ctrl, control, command. <br/>
    特殊键: backspace, tab, clear, enter, return, esc, escape, space, up, down, left, right, home, end, pageup, pagedown, del, delete, f1 - f19, num_0 - num_9, num_multiply, num_add, num_enter, num_subtract, num_decimal, num_divide.<br/>
    例子: <kbd>a</kbd>, <kbd>ctrl+a</kbd> , <kbd>shift+a</kbd> , <kbd>num_2</kbd> , <kbd>2</kbd>
  `,ATTENTION:"注意",WARNING:"警告",BUTTON_RESET_SETTINGS:"重置设置(Reset Settings)",SETTINGS_RESET:"设置已重置、重新加载页面才能生效",LANGUAGE_CHANGED:"语言已更改、重新加载页面才能生效",AUTO_DOWNLOAD:"下次章节加载完成时、系统将提示您自动保存",LAZY_LOAD:"延迟加载与zip下载不兼容、您将无法使用此设置下载.<br/> 建议: <span style='color:red;font-weight:bold'>禁用缩略图</span> 以节省流量和内存.",LAZY_LOAD_IMAGES_ENABLE:"启用延迟加载图像",LAZY_LOAD_IMAGES:"惰性加载从页面 (最小 5 最大 100)",RETURN_CHAPTER_LIST:"返回章节列表",PAGES_LOADED:"已加载的页数",GO_TO_PAGE:"转到页数",ENLARGE:"放大",RESTORE:"还原",REDUCE:"缩小",FIT_WIDTH:"适合宽度",FIT_HEIGHT:"适合高度",PERCENT:"百分之",TOGGLE_CONTROLS:"显示隐藏页面控件",ZOOM_IN:"放大",ZOOM_OUT:"缩小",ZOOM_RESET:"还原",ZOOM_WIDTH:"适合宽度",ZOOM_HEIGHT:"适合高度",HIDE:"显示隐藏页面控件",RELOAD:"重新加载",SLOWLY:"慢速",NORMAL:"正常",FAST:"快速",EXTREME:"极端",ALL_PAGES:"所有页面",SPEED_WARNING:"加载速度过高",SPEED_WARNING_MESSAGE:"不建议使用此速度.<br/>它可能会伤害某些服务器或将您的 IP 标记为 DDoS 攻击者.<br/>请谨慎使用!",SCROLL_UP:"向上滚动",SCROLL_DOWN:"向下滚动",CLOSE:"关闭",CANCEL:"取消",LIST_EMPTY:"没有收藏书签",SCROLL_START:"切换自动滚动",INCREASE_SPEED:"增加滚动速度",DECREASE_SPEED:"降低滚动速度",AUTO_SCROLL_HEIGHT:"自动滚动速度（以像素为单位）",VERTICAL_SEPARATOR:"显示垂直分隔符",END:"结尾",SCOPE:"范围",GLOBAL:"全球",GENERAL:"常规",LOADING:"装载",ZOOM:"缩放",OTHERS:"别人",NAVBAR_TYPE:"更改导航栏类型",NAVBAR_BOTTOM:"底部",NAVBAR_LEFT:"左边",NAVBAR_RIGHT:"正确的",NAVBAR_DISABLED:"已禁用",PAGINATION_TYPE:"分页类型",PAGINATION_DISABLED:"已禁用",PAGINATION_SLIDER:"滑块",PAGINATION_ARROWS:"侧边箭头",PAGINATION_BOTH:"两者",FILE_MENU:"主菜单",VIEW_MENU:"查看菜单",ZOOM_MENU:"缩放菜单",DOUBLE_PAGE:"切换双页",CHOOSE_FILE:"选择文件",NO_FILES_SELECTED:"未选择任何文件"},uo=[$p,zp,Np,Bp,Pp,Dp];function Cd(e){return"listImages"in e&&!Sr(e.listImages)}function Od(e){return"listPages"in e&&!Sr(e.listPages)}function Hp(e){return"bruteForce"in e&&!Sr(e.bruteForce)}var De=(function(e){return e.ENGLISH="English",e.SPANISH="Spanish",e.PORTUGUESE="Portuguese",e.CHINESE="Chinese",e.RAW="Raw",e})({}),He=(function(e){return e.MANGA="manga",e.COMIC="comic",e.HENTAI="hentai",e})({});function Fp(e,t){return t in e}var Yi=globalThis,Bs=Yi.ShadowRoot&&(Yi.ShadyCSS===void 0||Yi.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Hs=Symbol(),Td=new WeakMap,Ld=class{constructor(e,t,r){if(this._$cssResult$=!0,r!==Hs)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(Bs&&e===void 0){const r=t!==void 0&&t.length===1;r&&(e=Td.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&Td.set(t,e))}return e}toString(){return this.cssText}},Se=e=>new Ld(typeof e=="string"?e:e+"",void 0,Hs),yt=(e,...t)=>new Ld(e.length===1?e[0]:t.reduce((r,i,a)=>r+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[a+1],e[0]),e,Hs),Gp=(e,t)=>{if(Bs)e.adoptedStyleSheets=t.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(const r of t){const i=document.createElement("style"),a=Yi.litNonce;a!==void 0&&i.setAttribute("nonce",a),i.textContent=r.cssText,e.appendChild(i)}},Rd=Bs?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let r="";for(const i of t.cssRules)r+=i.cssText;return Se(r)})(e):e,{is:Wp,defineProperty:Up,getOwnPropertyDescriptor:Vp,getOwnPropertyNames:qp,getOwnPropertySymbols:Zp,getPrototypeOf:jp}=Object,Xi=globalThis,Pd=Xi.trustedTypes,Kp=Pd?Pd.emptyScript:"",Yp=Xi.reactiveElementPolyfillSupport,ti=(e,t)=>e,Ji={toAttribute(e,t){switch(t){case Boolean:e=e?Kp:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},Fs=(e,t)=>!Wp(e,t),$d={attribute:!0,type:String,converter:Ji,reflect:!1,useDefault:!1,hasChanged:Fs};Symbol.metadata??=Symbol("metadata"),Xi.litPropertyMetadata??=new WeakMap;var ho=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=$d){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const r=Symbol(),i=this.getPropertyDescriptor(e,r,t);i!==void 0&&Up(this.prototype,e,i)}}static getPropertyDescriptor(e,t,r){const{get:i,set:a}=Vp(this.prototype,e)??{get(){return this[t]},set(s){this[t]=s}};return{get:i,set(s){const l=i?.call(this);a?.call(this,s),this.requestUpdate(e,l,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??$d}static _$Ei(){if(this.hasOwnProperty(ti("elementProperties")))return;const e=jp(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(ti("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(ti("properties"))){const t=this.properties,r=[...qp(t),...Zp(t)];for(const i of r)this.createProperty(i,t[i])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[r,i]of t)this.elementProperties.set(r,i)}this._$Eh=new Map;for(const[t,r]of this.elementProperties){const i=this._$Eu(t,r);i!==void 0&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const r=new Set(e.flat(1/0).reverse());for(const i of r)t.unshift(Rd(i))}else e!==void 0&&t.push(Rd(e));return t}static _$Eu(e,t){const r=t.attribute;return r===!1?void 0:typeof r=="string"?r:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const r of t.keys())this.hasOwnProperty(r)&&(e.set(r,this[r]),delete this[r]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Gp(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,r){this._$AK(e,r)}_$ET(e,t){const r=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,r);if(i!==void 0&&r.reflect===!0){const a=(r.converter?.toAttribute!==void 0?r.converter:Ji).toAttribute(t,r.type);this._$Em=e,a==null?this.removeAttribute(i):this.setAttribute(i,a),this._$Em=null}}_$AK(e,t){const r=this.constructor,i=r._$Eh.get(e);if(i!==void 0&&this._$Em!==i){const a=r.getPropertyOptions(i),s=typeof a.converter=="function"?{fromAttribute:a.converter}:a.converter?.fromAttribute!==void 0?a.converter:Ji;this._$Em=i;const l=s.fromAttribute(t,a.type);this[i]=l??this._$Ej?.get(i)??l,this._$Em=null}}requestUpdate(e,t,r,i=!1,a){if(e!==void 0){const s=this.constructor;if(i===!1&&(a=this[e]),r??=s.getPropertyOptions(e),!((r.hasChanged??Fs)(a,t)||r.useDefault&&r.reflect&&a===this._$Ej?.get(e)&&!this.hasAttribute(s._$Eu(e,r))))return;this.C(e,t,r)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:r,reflect:i,wrapped:a},s){r&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,s??t??this[e]),a!==!0||s!==void 0)||(this._$AL.has(e)||(this.hasUpdated||r||(t=void 0),this._$AL.set(e,t)),i===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[i,a]of this._$Ep)this[i]=a;this._$Ep=void 0}const r=this.constructor.elementProperties;if(r.size>0)for(const[i,a]of r){const{wrapped:s}=a,l=this[i];s!==!0||this._$AL.has(i)||l===void 0||this.C(i,void 0,a,l)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(r=>r.hostUpdate?.()),this.update(t)):this._$EM()}catch(r){throw e=!1,this._$EM(),r}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(e){}firstUpdated(e){}};ho.elementStyles=[],ho.shadowRootOptions={mode:"open"},ho[ti("elementProperties")]=new Map,ho[ti("finalized")]=new Map,Yp?.({ReactiveElement:ho}),(Xi.reactiveElementVersions??=[]).push("2.1.2");var Gs=globalThis,Je=class extends ho{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Ap(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Qr}};Je._$litElement$=!0,Je.finalized=!0,Gs.litElementHydrateSupport?.({LitElement:Je});var Xp=Gs.litElementPolyfillSupport;Xp?.({LitElement:Je}),(Gs.litElementVersions??=[]).push("4.2.2");var ot=e=>(t,r)=>{r!==void 0?r.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)},Jp={attribute:!0,type:String,converter:Ji,reflect:!1,hasChanged:Fs},Qp=(e=Jp,t,r)=>{const{kind:i,metadata:a}=r;let s=globalThis.litPropertyMetadata.get(a);if(s===void 0&&globalThis.litPropertyMetadata.set(a,s=new Map),i==="setter"&&((e=Object.create(e)).wrapped=!0),s.set(r.name,e),i==="accessor"){const{name:l}=r;return{set(h){const c=t.get.call(this);t.set.call(this,h),this.requestUpdate(l,c,e,!0,h)},init(h){return h!==void 0&&this.C(l,void 0,e,h),h}}}if(i==="setter"){const{name:l}=r;return function(h){const c=this[l];t.call(this,h),this.requestUpdate(l,c,e,!0,h)}}throw Error("Unsupported decorator location: "+i)};function j(e){return(t,r)=>typeof r=="object"?Qp(e,t,r):((i,a,s)=>{const l=a.hasOwnProperty(s);return a.constructor.createProperty(s,i),l?Object.getOwnPropertyDescriptor(a,s):void 0})(e,t,r)}function Dt(e){return j({...e,state:!0,attribute:!1})}var zd=(e,t,r)=>(r.configurable=!0,r.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(e,t,r),r);function en(e,t){return(r,i,a)=>{const s=l=>l.renderRoot?.querySelector(e)??null;if(t){const{get:l,set:h}=typeof i=="object"?r:a??(()=>{const c=Symbol();return{get(){return this[c]},set(f){this[c]=f}}})();return zd(r,i,{get(){let c=l.call(this);return c===void 0&&(c=s(this),(c!==null||this.hasUpdated)&&h.call(this,c)),c}})}return zd(r,i,{get(){return s(this)}})}}var kt=Qo(class extends ji{constructor(e){if(super(e),e.type!==Zi.ATTRIBUTE||e.name!=="class"||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(i=>i!=="")));for(const i in t)t[i]&&!this.nt?.has(i)&&this.st.add(i);return this.render(t)}const r=e.element.classList;for(const i of this.st)i in t||(r.remove(i),this.st.delete(i));for(const i in t){const a=!!t[i];a===this.st.has(i)||this.nt?.has(i)||(a?(r.add(i),this.st.add(i)):(r.remove(i),this.st.delete(i)))}return Qr}}),Qi=class extends ji{constructor(e){if(super(e),this.it=Be,e.type!==Zi.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===Be||e==null)return this._t=void 0,this.it=e;if(e===Qr)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;const t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}};Qi.directiveName="unsafeHTML",Qi.resultType=1;var Dd=Qo(Qi),Ws=class extends Qi{};Ws.directiveName="unsafeSVG",Ws.resultType=2;var Nd=Qo(Ws);function Bd(e){if(e.startsWith("Icon")&&!e.includes("-")&&!e.includes("_"))return e;const t=e.startsWith("Icon")?e.substring(4):e;return`Icon${xe.default.upperFirst(xe.default.camelCase(t))}`}var e2=".icon-tabler-file-download>:nth-child(n+4){color:gold}.icon-tabler-arrow-autofit-width>:nth-child(n+3),.icon-tabler-arrow-autofit-height>:nth-child(n+3){color:#ff0}.icon-tabler-zoom-in-area>:nth-child(2),.icon-tabler-zoom-in-area>:nth-child(3){color:#0f0}.icon-tabler-zoom-out-area>:nth-child(2){color:red}.icon-tabler-zoom-pan>:nth-child(n+4){color:#96f}.icon-tabler-arrow-autofit-down>:nth-child(n+3),.icon-tabler-arrow-autofit-left>:nth-child(n+3),.icon-tabler-arrow-autofit-right>:nth-child(n+3){color:#28ffbf}.icon-tabler-spacing-vertical>:nth-child(4),.icon-tabler-spacing-horizontal>:nth-child(4){color:#f0f}.icon-tabler-list-numbers>:nth-child(n+5){color:#e48900}.icon-tabler-bookmarks>:nth-child(n+2),.icon-tabler-bookmark>:nth-child(2),.icon-tabler-bookmark-off>:nth-child(2){color:orange}.icon-tabler-bookmark-off>:nth-child(3),.icon-tabler-eye-off>:nth-child(4){color:red}.icon-tabler-zoom-cancel>:nth-child(3),.icon-tabler-zoom-cancel>:nth-child(4){color:#96f}.icon-tabler-zoom-in>:nth-child(3),.icon-tabler-zoom-in>:nth-child(4){color:#0f0}.icon-tabler-zoom-out>:nth-child(3){color:red}.icon-tabler-refresh>:nth-child(n+2){color:#0ff}.icon-tabler-photo>:nth-child(n+2),.icon-tabler-photo-off>:nth-child(n+2){color:silver}.icon-tabler-photo-off>:nth-child(6){color:orange}.icon-tabler-message>:nth-child(2),.icon-tabler-message>:nth-child(3),.icon-tabler-book-arrow-left>:nth-child(7),.icon-tabler-book-arrow-left>:nth-child(8),.icon-tabler-book-arrow-right>:nth-child(7),.icon-tabler-book-arrow-right>:nth-child(8),.icon-tabler-books-return>:nth-child(8),.icon-tabler-books-return>:nth-child(9){color:#adff2f}.icon-tabler-file-percent>:nth-child(2),.icon-tabler-file-percent>:nth-child(5),.icon-tabler-file-percent>:nth-child(6){color:#ff0}.icon-tabler-settings-off>:nth-child(4),.icon-tabler-book-off>:nth-child(7){color:red}",t2='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-adjustments-horizontal"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M14 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"/><path d="M4 6l8 0"/><path d="M16 6l4 0"/><path d="M8 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"/><path d="M4 12l2 0"/><path d="M10 12l10 0"/><path d="M17 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"/><path d="M4 18l11 0"/><path d="M19 18l1 0"/></svg>',r2='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-alert-circle"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"/><path d="M12 8v4"/><path d="M12 16h.01"/></svg>',n2='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-api-book"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 1.006 -.5"/><path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0"/><path d="M3 6v13"/><path d="M12 6v13"/><path d="M21 6v6"/><path d="M17.001 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"/><path d="M19.001 15.5v1.5"/><path d="M19.001 21v1.5"/><path d="M22.032 17.25l-1.299 .75"/><path d="M17.27 20l-1.3 .75"/><path d="M15.97 17.25l1.3 .75"/><path d="M20.733 20l1.3 .75"/></svg>',o2='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-autofit-down" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 20h-6a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h8"/><path d="M18 4v17"/><path d="M15 18l3 3l3 -3"/></svg>',i2='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-autofit-height" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 20h-6a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h6"/><path d="M18 14v7"/><path d="M18 3v7"/><path d="M15 18l3 3l3 -3"/><path d="M15 6l3 -3l3 3"/></svg>',a2='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-autofit-left" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 12v-6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v8"/><path d="M20 18h-17"/><path d="M6 15l-3 3l3 3"/></svg>',s2='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-autofit-right" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M20 12v-6a2 2 0 0 0 -2 -2h-12a2 2 0 0 0 -2 2v8"/><path d="M4 18h17"/><path d="M18 15l3 3l-3 3"/></svg>',l2='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-autofit-width" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 12v-6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v6"/><path d="M10 18h-7"/><path d="M21 18h-7"/><path d="M6 15l-3 3l3 3"/><path d="M18 15l3 3l-3 3"/></svg>',c2='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-big-left" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M20 15h-8v3.586a1 1 0 0 1 -1.707 .707l-6.586 -6.586a1 1 0 0 1 0 -1.414l6.586 -6.586a1 1 0 0 1 1.707 .707v3.586h8a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1z"/></svg>',d2='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-big-right" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 9h8v-3.586a1 1 0 0 1 1.707 -.707l6.586 6.586a1 1 0 0 1 0 1.414l-6.586 6.586a1 1 0 0 1 -1.707 -.707v-3.586h-8a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1z"/></svg>',u2='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-arrows-horizontal"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 8l-4 4l4 4"/><path d="M17 8l4 4l-4 4"/><path d="M3 12l18 0"/></svg>',h2='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-arrows-left-right"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M21 17l-18 0"/><path d="M6 10l-3 -3l3 -3"/><path d="M3 7l18 0"/><path d="M18 20l3 -3l-3 -3"/></svg>',f2='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-arrows-move"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 9l3 3l-3 3"/><path d="M15 12h6"/><path d="M6 9l-3 3l3 3"/><path d="M3 12h6"/><path d="M9 18l3 3l3 -3"/><path d="M12 15v6"/><path d="M15 6l-3 -3l-3 3"/><path d="M12 3v6"/></svg>',p2='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-arrows-move-vertical"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 18l3 3l3 -3"/><path d="M12 15v6"/><path d="M15 6l-3 -3l-3 3"/><path d="M12 3v6"/></svg>',g2='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-arrows-vertical"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8 7l4 -4l4 4"/><path d="M8 17l4 4l4 -4"/><path d="M12 3l0 18"/></svg>',m2='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-book"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0"/><path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0"/><path d="M3 6l0 13"/><path d="M12 6l0 13"/><path d="M21 6l0 13"/></svg>',v2='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-book-arrow-left"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 1.006 -.5"/><path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0"/><path d="M3 6v13"/><path d="M12 6v13"/><path d="M21 6v6"/><path d="M16 19h6"/><path d="M19 16l-3 3l3 3"/></svg>',b2='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-book-arrow-right"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 1.006 -.5"/><path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0"/><path d="M3 6v13"/><path d="M12 6v13"/><path d="M21 6v6"/><path d="M16 19h6"/><path d="M19 16l3 3l-3 3"/></svg>',w2='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-book-off"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 5.899 -1.096"/><path d="M3 6a9 9 0 0 1 2.114 -.884m3.8 -.21c1.07 .17 2.116 .534 3.086 1.094a9 9 0 0 1 9 0"/><path d="M3 6v13"/><path d="M12 6v2m0 4v7"/><path d="M21 6v11"/><path d="M3 3l18 18"/></svg>',_2='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-book-upload"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M14 20h-8a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12v5"/><path d="M11 16h-5a2 2 0 0 0 -2 2"/><path d="M15 16l3 -3l3 3"/><path d="M18 13v9"/></svg>',y2='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-bookmark" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 7v14l-6 -4l-6 4v-14a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4z"/></svg>',k2='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-bookmark-off" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7.708 3.721a3.982 3.982 0 0 1 2.292 -.721h4a4 4 0 0 1 4 4v7m0 4v3l-6 -4l-6 4v-14c0 -.308 .035 -.609 .1 -.897"/><path d="M3 3l18 18"/></svg>',E2='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-bookmarks" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 10v11l-5 -3l-5 3v-11a3 3 0 0 1 3 -3h4a3 3 0 0 1 3 3z"/><path d="M11 3h5a3 3 0 0 1 3 3v11"/></svg>',S2='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-books-return"><defs><mask id="arrow-mask"><rect width="24" height="24" fill="white"/><rect x="15" y="15" width="8" height="8" fill="black"/></mask></defs><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 5a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1l0 -14"/><path d="M9 5a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1l0 -14"/><path d="M5 8h4"/><path d="M9 16h4"/><g mask="url(#arrow-mask)"><path d="M13.803 4.56l2.184 -.53c.562 -.135 1.133 .19 1.282 .732l3.695 13.418a1.02 1.02 0 0 1 -.634 1.219l-.133 .041l-2.184 .53c-.562 .135 -1.133 -.19 -1.282 -.732l-3.695 -13.418a1.02 1.02 0 0 1 .634 -1.219l.133 -.041"/><path d="M14 9l4 -1"/><path d="M16 16l3.923 -.98"/></g><path d="M16 19h6"/><path d="M19 16l-3 3l3 3"/></svg>',A2='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-box-align-top"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 10.005h16v-5a1 1 0 0 0 -1 -1h-14a1 1 0 0 0 -1 1v5z"/><path d="M4 15.005v-.01"/><path d="M4 20.005v-.01"/><path d="M9 20.005v-.01"/><path d="M15 20.005v-.01"/><path d="M20 20.005v-.01"/><path d="M20 15.005v-.01"/></svg>',M2='<svg id="Capa_1" enable-background="new 0 0 512 512" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><g><g><g><path d="m427.508 512h-343.02c-5.69 0-10.302-4.612-10.302-10.302v-491.396c0-5.69 4.612-10.302 10.302-10.302h343.02c5.69 0 10.302 4.612 10.302 10.302v491.396c-.001 5.69-4.613 10.302-10.302 10.302z" fill="#f2eff2"/></g></g><path d="m427.512 0h-41.238c5.687 0 10.302 4.615 10.302 10.302v41.156l-18.039 71.714 18.039 81.268v46.358l-18.039 45.164 18.039 24.847v46.358l-10.302 61.227 10.302 32.149v41.156c0 5.687-4.615 10.302-10.302 10.302h41.238c5.687 0 10.302-4.615 10.302-10.302v-491.397c0-5.687-4.615-10.302-10.302-10.302z" fill="#e1dde1"/><g><path d="m243.51 273.63-47.48 104.08-80.61-10.85v-315.4c0-2.85 2.31-5.15 5.15-5.15h30.86c2.13 0 4.03 1.29 4.8 3.27z" fill="#3ad1e0"/><path d="m243.51 273.63-16.68 36.56-101.52-260.61c-.76-1.95-2.64-3.25-4.74-3.27h30.86c2.13 0 4.03 1.29 4.8 3.27z" fill="#22c7db"/><path d="m310.81 465.69h-190.24c-2.84 0-5.15-2.3-5.15-5.15v-93.68c25.18-34.92 65.99-57.81 112.19-58.37l-16.07 35.21 74.5 39.08 29.56 75.9c1.32 3.37-1.17 7.01-4.79 7.01z" fill="#fb33a8"/><path d="m310.81 465.69h-30.92c3.61 0 6.11-3.64 4.79-7.01l-12.92-33.17c-1.92 4.55-2.88 9.61-2.61 14.91.01.13.01.25.01.38 0 5.92-7.39 8.87-11.45 4.36-6.77-7.49-16.03-11.24-25.29-11.24s-18.54 3.75-25.29 11.24c-1.36 1.52-3.11 2.19-4.83 2.19-3.48 0-6.84-2.78-6.62-6.93.03-.59.04-1.18.04-1.77 0-19.36-16.23-34.99-35.81-33.99-.12.01-.24.01-.37.01-5.92 0-8.87-7.4-4.37-11.46 7.49-6.76 11.24-16.03 11.24-25.29s-3.75-18.52-11.24-25.29c-1.51-1.36-2.18-3.1-2.18-4.81 0-3.48 2.78-6.84 6.92-6.64.6.04 1.19.05 1.77.05 12.81 0 23.98-7.11 29.79-17.57l34.29-1.12-14.22 31.16 74.5 39.08 29.56 75.9c1.32 3.37-1.17 7.01-4.79 7.01z" fill="#fb33a8"/><path d="m396.58 51.46v152.98c0 2.84-2.31 5.15-5.15 5.15h-32l-40.41-29.31-40.41 29.31h-17.82c-2.12 0-4.03-1.3-4.8-3.28l-59.6-152.98c-1.32-3.38 1.18-7.02 4.79-7.02h190.25c2.84 0 5.15 2.3 5.15 5.15z" fill="#fcb44d"/><path d="m396.576 51.457v152.982c0 2.843-2.308 5.151-5.151 5.151h-30.927c2.843 0 5.151-2.308 5.151-5.151v-152.982c0-2.843-2.308-5.151-5.151-5.151h30.927c2.843.001 5.151 2.308 5.151 5.151z" fill="#fb9927"/><g><path d="m359.428 181.065v28.526h-80.818v-28.526c0-22.324 18.1-40.414 40.414-40.414 11.157 0 21.263 4.522 28.567 11.837 7.314 7.314 11.837 17.409 11.837 28.577z" fill="#ae6ad8"/><path d="m359.43 181.065v28.526h-29.237v-28.526c0-11.167-4.522-21.263-11.837-28.577-3.935-3.935-8.674-7.067-13.949-9.107 4.533-1.762 9.467-2.73 14.618-2.73 11.157 0 21.263 4.522 28.567 11.837 7.316 7.314 11.838 17.409 11.838 28.577z" fill="#975bbb"/><g><g><circle cx="319.023" cy="121.497" fill="#f2eff2" r="26.224"/></g></g></g><path d="m396.576 250.798v70.011c0 2.845-2.306 5.151-5.151 5.151h-85.311c-2.123 0-4.029-1.303-4.8-3.281l-27.273-70.011c-1.316-3.377 1.175-7.021 4.8-7.021h112.585c2.844 0 5.15 2.306 5.15 5.151z" fill="#23f1a8"/><path d="m396.576 250.798v70.011c0 2.843-2.308 5.151-5.151 5.151h-30.927c2.843 0 5.151-2.308 5.151-5.151v-70.011c0-2.843-2.308-5.151-5.151-5.151h30.927c2.843 0 5.151 2.307 5.151 5.151z" fill="#27e19d"/><path d="m324.179 362.016h67.246c2.845 0 5.151 2.306 5.151 5.151v93.376c0 2.845-2.306 5.151-5.151 5.151h-30.866c-2.123 0-4.029-1.303-4.799-3.281l-36.38-93.376c-1.316-3.377 1.175-7.021 4.799-7.021z" fill="#23f1a8"/><path d="m396.576 367.167v93.376c0 2.843-2.308 5.151-5.151 5.151h-30.927c2.843 0 5.151-2.308 5.151-5.151v-93.376c0-2.843-2.308-5.151-5.151-5.151h30.927c2.843 0 5.151 2.308 5.151 5.151z" fill="#27e19d"/></g><g><path d="m269.153 413.978c.01.124.01.247.01.371 0 5.924-7.397 8.87-11.456 4.368-6.768-7.489-16.03-11.239-25.291-11.239s-18.533 3.75-25.291 11.239c-1.36 1.514-3.101 2.184-4.821 2.184-3.482 0-6.84-2.782-6.624-6.923.031-.597.041-1.185.041-1.772 0-19.367-16.236-34.995-35.809-33.996-.124.01-.247.01-.371.01-5.924 0-8.87-7.397-4.368-11.456 7.489-6.758 11.239-16.03 11.239-25.291s-3.75-18.523-11.239-25.291c-1.514-1.36-2.184-3.101-2.184-4.811 0-3.482 2.782-6.84 6.923-6.634.597.031 1.185.041 1.772.041 19.367 0 34.995-16.236 33.996-35.799-.01-.124-.01-.247-.01-.371 0-5.934 7.397-8.87 11.456-4.378 6.758 7.489 16.03 11.239 25.291 11.239 3.76 0 7.51-.618 11.095-1.844l42.526 109.158c-10.591 6.183-17.565 17.916-16.885 31.195z" fill="#fdef63"/><path d="m268.516 417.19c.406-.839.648-1.79.648-2.841 0-.123 0-.247-.01-.371-.68-13.279 6.294-25.013 16.885-31.194l-42.526-109.158c-3.585 1.226-7.335 1.844-11.095 1.844-7.992 0-15.988-2.799-22.374-8.378z" fill="#f3d730"/></g><g><g><path d="m229.374 349.967c-4.267 0-7.726-3.459-7.726-7.726v-29.272c0-4.267 3.459-7.726 7.726-7.726s7.726 3.459 7.726 7.726v29.272c0 4.267-3.459 7.726-7.726 7.726z" fill="#554e55"/></g><g><path d="m229.374 377.711c-4.267 0-7.726-3.459-7.726-7.726v-2.061c0-4.267 3.459-7.726 7.726-7.726s7.726 3.459 7.726 7.726v2.061c0 4.267-3.459 7.726-7.726 7.726z" fill="#554e55"/></g></g><g><g><path d="m258.185 86.361h-18.228c-4.267 0-7.726-3.459-7.726-7.726s3.459-7.726 7.726-7.726h18.228c4.267 0 7.726 3.459 7.726 7.726 0 4.266-3.459 7.726-7.726 7.726z" fill="#f2eff2"/></g><g><path d="m266.269 111.168h-18.229c-4.267 0-7.726-3.459-7.726-7.726s3.459-7.726 7.726-7.726h18.228c4.267 0 7.726 3.459 7.726 7.726s-3.458 7.726-7.725 7.726z" fill="#f2eff2"/></g></g></g></svg>',x2=`<?xml version="1.0" encoding="UTF-8"?><svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background: new 0 0 512 512" xml:space="preserve" width="512" height="512"><g><g><g><path style="fill: #f2eff2" d="M422.485,504.5H89.515c-5.523,0-10-4.477-10-10v-477c0-5.523,4.477-10,10-10h332.971&#10;&#9;&#9;&#9;&#9;c5.523,0,10,4.477,10,10v477C432.485,500.023,428.008,504.5,422.485,504.5z"/></g></g><g><g><path style="fill: #e1dde1" d="M432.49,17.5v477c0,5.52-4.48,10-10,10h-40.03c5.52,0,10-4.48,10-10v-477c0-5.52-4.48-10-10-10&#10;&#9;&#9;&#9;&#9;h40.03C428.01,7.5,432.49,11.98,432.49,17.5z"/></g></g><g><path style="\r
          fill: none;\r
          stroke: #000000;\r
          stroke-width: 15;\r
          stroke-linecap: round;\r
          stroke-linejoin: round;\r
          stroke-miterlimit: 10;\r
        " d="&#10;&#9;&#9;&#9;M334.56,7.5H89.515c-5.523,0-10,4.477-10,10v477c0,5.523,4.477,10,10,10h332.971c5.523,0,10-4.477,10-10v-477&#10;&#9;&#9;&#9;c0-5.523-4.477-10-10-10h-54.763"/></g><g><path style="fill: #3ad1e0" d="M313.86,452.74L159.16,55.63c-0.75-1.92-2.6-3.18-4.66-3.18h-29.96c-2.76,0-5,2.24-5,5v397.1&#10;&#9;&#9;&#9;c0,2.76,2.24,5,5,5h184.67C312.72,459.55,315.14,456.01,313.86,452.74z"/><path style="fill: #22c7db" d="M309.21,459.55h-30.02c3.51,0,5.93-3.54,4.65-6.81L129.14,55.63c-0.74-1.9-2.56-3.16-4.6-3.18&#10;&#9;&#9;&#9;h29.96c2.06,0,3.91,1.26,4.66,3.18l154.7,397.11C315.14,456.01,312.72,459.55,309.21,459.55z"/><path style="fill: #fb33a8" d="M258.193,309.845c-9.05-1.894-18.424-2.909-28.037-2.909c-45.55,0-85.862,22.354-110.616,56.676&#10;&#9;&#9;&#9;v90.938c0,2.76,2.24,5,5,5h184.67c3.51,0,5.93-3.54,4.65-6.81L258.193,309.845z"/><path style="fill: #ee2d9a" d="M193.362,311.966c-5.64,10.161-16.48,17.055-28.912,17.055c-0.57,0-1.14-0.01-1.72-0.04&#10;&#9;&#9;&#9;c-4.02-0.2-6.72,3.06-6.72,6.44c0,1.66,0.65,3.35,2.12,4.67c7.27,6.57,10.91,15.56,10.91,24.55s-3.64,17.99-10.91,24.55&#10;&#9;&#9;&#9;c-4.37,3.94-1.51,11.12,4.24,11.12c0.12,0,0.24,0,0.36-0.01c19-0.97,34.76,14.2,34.76,33c0,0.57-0.01,1.14-0.04,1.72&#10;&#9;&#9;&#9;c-0.21,4.02,3.05,6.72,6.43,6.72c1.67,0,3.36-0.65,4.68-2.12c6.56-7.27,15.56-10.91,24.55-10.91c8.99,0,17.98,3.64,24.55,10.91&#10;&#9;&#9;&#9;c3.94,4.37,11.12,1.51,11.12-4.24c0-0.12,0-0.24-0.01-0.36c-0.264-5.151,0.666-10.058,2.527-14.479l12.543,32.197&#10;&#9;&#9;&#9;c1.28,3.27-1.14,6.81-4.65,6.81h30.02c3.51,0,5.93-3.54,4.65-6.81l-55.667-142.895L193.362,311.966z"/><path style="\r
          fill: none;\r
          stroke: #000000;\r
          stroke-width: 15;\r
          stroke-linecap: round;\r
          stroke-linejoin: round;\r
          stroke-miterlimit: 10;\r
        " d="&#10;&#9;&#9;&#9;M230.156,306.937c-45.55,0-85.862,22.354-110.616,56.676"/><path style="fill: #fcb44d" d="M392.46,57.45v148.5c0,2.76-2.24,5-5,5H260.65c-2.06,0-3.91-1.26-4.66-3.18l-57.85-148.5&#10;&#9;&#9;&#9;c-1.28-3.28,1.14-6.82,4.65-6.82h184.67C390.22,52.45,392.46,54.69,392.46,57.45z"/><path style="fill: #fb9927" d="M392.46,57.45v148.5c0,2.76-2.24,5-5,5h-30.021c2.76,0,5-2.24,5-5V57.45c0-2.76-2.24-5-5-5h30.021&#10;&#9;&#9;&#9;C390.22,52.45,392.46,54.69,392.46,57.45z"/><g><path style="fill: #ae6ad8" d="M356.4,183.26v27.69h-78.45v-27.69c0-21.67,17.57-39.23,39.23-39.23&#10;&#9;&#9;&#9;&#9;c10.83,0,20.64,4.39,27.73,11.49C352.01,162.62,356.4,172.42,356.4,183.26z"/><path style="fill: #975bbb" d="M356.402,183.26v27.69h-28.38v-27.69c0-10.84-4.39-20.64-11.49-27.74&#10;&#9;&#9;&#9;&#9;c-3.82-3.82-8.42-6.86-13.54-8.84c4.4-1.71,9.19-2.65,14.19-2.65c10.83,0,20.64,4.39,27.73,11.49&#10;&#9;&#9;&#9;&#9;C352.012,162.62,356.402,172.42,356.402,183.26z"/><path style="\r
            fill: none;\r
            stroke: #000000;\r
            stroke-width: 15;\r
            stroke-linecap: round;\r
            stroke-linejoin: round;\r
            stroke-miterlimit: 10;\r
          " d="&#10;&#9;&#9;&#9;&#9;M277.95,210.95v-27.69c0-21.67,17.57-39.23,39.23-39.23c10.83,0,20.64,4.39,27.73,11.49c7.1,7.1,11.49,16.9,11.49,27.74v27.69"/><g><circle style="fill: #f2eff2" cx="317.179" cy="125.438" r="25.456"/><circle style="\r
              fill: none;\r
              stroke: #000000;\r
              stroke-width: 15;\r
              stroke-linecap: round;\r
              stroke-linejoin: round;\r
              stroke-miterlimit: 10;\r
            " cx="317.179" cy="125.438" r="25.456"/></g></g><path style="fill: #23f1a8" d="M392.46,250.95v67.96c0,2.761-2.239,5-5,5h-82.812c-2.061,0-3.911-1.265-4.659-3.185l-26.474-67.96&#10;&#9;&#9;&#9;c-1.277-3.278,1.141-6.815,4.659-6.815H387.46C390.221,245.95,392.46,248.189,392.46,250.95z"/><path style="fill: #27e19d" d="M392.46,250.95v67.96c0,2.76-2.24,5-5,5h-30.021c2.76,0,5-2.24,5-5v-67.96c0-2.76-2.24-5-5-5&#10;&#9;&#9;&#9;h30.021C390.22,245.95,392.46,248.19,392.46,250.95z"/><path style="fill: #23f1a8" d="M322.184,358.91h65.276c2.761,0,5,2.239,5,5v90.64c0,2.761-2.239,5-5,5h-29.962&#10;&#9;&#9;&#9;c-2.061,0-3.911-1.265-4.659-3.185l-35.314-90.64C316.248,362.447,318.666,358.91,322.184,358.91z"/><path style="fill: #27e19d" d="M392.46,363.91v90.64c0,2.76-2.24,5-5,5h-30.021c2.76,0,5-2.24,5-5v-90.64c0-2.76-2.24-5-5-5&#10;&#9;&#9;&#9;h30.021C390.22,358.91,392.46,361.15,392.46,363.91z"/><path style="\r
          fill: none;\r
          stroke: #000000;\r
          stroke-width: 15;\r
          stroke-linecap: round;\r
          stroke-linejoin: round;\r
          stroke-miterlimit: 10;\r
        " d="&#10;&#9;&#9;&#9;M119.54,242.003V454.55c0,2.761,2.239,5,5,5h184.666c3.518,0,5.936-3.537,4.659-6.815l-154.704-397.1&#10;&#9;&#9;&#9;c-0.748-1.92-2.598-3.185-4.659-3.185H124.54c-2.761,0-5,2.239-5,5v151.391"/><path style="\r
          fill: none;\r
          stroke: #000000;\r
          stroke-width: 15;\r
          stroke-linecap: round;\r
          stroke-linejoin: round;\r
          stroke-miterlimit: 10;\r
        " d="&#10;&#9;&#9;&#9;M392.46,57.45v148.5c0,2.761-2.239,5-5,5H260.648c-2.061,0-3.911-1.265-4.659-3.185l-57.854-148.5&#10;&#9;&#9;&#9;c-1.277-3.278,1.141-6.815,4.659-6.815H387.46C390.221,52.45,392.46,54.689,392.46,57.45z"/><path style="\r
          fill: none;\r
          stroke: #000000;\r
          stroke-width: 15;\r
          stroke-linecap: round;\r
          stroke-linejoin: round;\r
          stroke-miterlimit: 10;\r
        " d="&#10;&#9;&#9;&#9;M306.627,245.95h-28.454c-3.518,0-5.936,3.537-4.659,6.815l26.474,67.96c0.748,1.92,2.598,3.185,4.659,3.185h82.812&#10;&#9;&#9;&#9;c2.761,0,5-2.239,5-5v-67.96c0-2.761-2.239-5-5-5h-47.67"/><path style="\r
          fill: none;\r
          stroke: #000000;\r
          stroke-width: 15;\r
          stroke-linecap: round;\r
          stroke-linejoin: round;\r
          stroke-miterlimit: 10;\r
        " d="&#10;&#9;&#9;&#9;M322.184,358.91h65.276c2.761,0,5,2.239,5,5v90.64c0,2.761-2.239,5-5,5h-29.962c-2.061,0-3.911-1.265-4.659-3.185l-35.314-90.64&#10;&#9;&#9;&#9;C316.248,362.447,318.666,358.91,322.184,358.91z"/></g><g><path style="fill: #fdef63" d="M268.77,409.35c0.01,0.12,0.01,0.24,0.01,0.36c0,5.75-7.18,8.61-11.12,4.24&#10;&#9;&#9;&#9;c-6.57-7.27-15.56-10.91-24.55-10.91c-8.99,0-17.99,3.64-24.55,10.91c-1.32,1.47-3.01,2.12-4.68,2.12c-3.38,0-6.64-2.7-6.43-6.72&#10;&#9;&#9;&#9;c0.03-0.58,0.04-1.15,0.04-1.72c0-18.8-15.76-33.97-34.76-33c-0.12,0.01-0.24,0.01-0.36,0.01c-5.75,0-8.61-7.18-4.24-11.12&#10;&#9;&#9;&#9;c7.27-6.56,10.91-15.56,10.91-24.55s-3.64-17.98-10.91-24.55c-1.47-1.32-2.12-3.01-2.12-4.67c0-3.38,2.7-6.64,6.72-6.44&#10;&#9;&#9;&#9;c0.58,0.03,1.15,0.04,1.72,0.04c18.8,0,33.97-15.76,33-34.75c-0.01-0.12-0.01-0.24-0.01-0.36c0-5.76,7.18-8.61,11.12-4.25&#10;&#9;&#9;&#9;c6.56,7.27,15.56,10.91,24.55,10.91c3.65,0,7.29-0.6,10.77-1.79l41.28,105.96C274.88,385.07,268.11,396.46,268.77,409.35z"/><path style="fill: #f3d730" d="M268.151,412.468c0.394-0.814,0.629-1.738,0.629-2.758c0-0.12,0-0.24-0.01-0.36&#10;&#9;&#9;&#9;c-0.66-12.89,6.11-24.28,16.39-30.28l-41.28-105.96c-3.48,1.19-7.12,1.79-10.77,1.79c-7.758,0-15.52-2.717-21.718-8.132&#10;&#9;&#9;&#9;L268.151,412.468z"/><path style="\r
          fill: none;\r
          stroke: #000000;\r
          stroke-width: 15;\r
          stroke-linecap: round;\r
          stroke-linejoin: round;\r
          stroke-miterlimit: 10;\r
        " d="&#10;&#9;&#9;&#9;M268.77,409.35c0.01,0.12,0.01,0.24,0.01,0.36c0,5.75-7.18,8.61-11.12,4.24c-6.57-7.27-15.56-10.91-24.55-10.91&#10;&#9;&#9;&#9;c-8.99,0-17.99,3.64-24.55,10.91c-1.32,1.47-3.01,2.12-4.68,2.12c-3.38,0-6.64-2.7-6.43-6.72c0.03-0.58,0.04-1.15,0.04-1.72&#10;&#9;&#9;&#9;c0-18.8-15.76-33.97-34.76-33c-0.12,0.01-0.24,0.01-0.36,0.01c-5.75,0-8.61-7.18-4.24-11.12c7.27-6.56,10.91-15.56,10.91-24.55&#10;&#9;&#9;&#9;s-3.64-17.98-10.91-24.55c-1.47-1.32-2.12-3.01-2.12-4.67c0-3.38,2.7-6.64,6.72-6.44c0.58,0.03,1.15,0.04,1.72,0.04&#10;&#9;&#9;&#9;c18.8,0,33.97-15.76,33-34.75c-0.01-0.12-0.01-0.24-0.01-0.36c0-5.76,7.18-8.61,11.12-4.25c6.56,7.27,15.56,10.91,24.55,10.91&#10;&#9;&#9;&#9;c3.65,0,7.29-0.6,10.77-1.79l41.28,105.96C274.88,385.07,268.11,396.46,268.77,409.35z"/></g><g><line style="\r
          fill: none;\r
          stroke: #000000;\r
          stroke-width: 15;\r
          stroke-linecap: round;\r
          stroke-linejoin: round;\r
          stroke-miterlimit: 10;\r
        " x1="230.156" y1="339.714" x2="230.156" y2="311.299"/><line style="\r
          fill: none;\r
          stroke: #000000;\r
          stroke-width: 15;\r
          stroke-linecap: round;\r
          stroke-linejoin: round;\r
          stroke-miterlimit: 10;\r
        " x1="230.156" y1="364.644" x2="230.156" y2="366.646"/></g><g><line style="\r
          fill: none;\r
          stroke: #000000;\r
          stroke-width: 15;\r
          stroke-linecap: round;\r
          stroke-linejoin: round;\r
          stroke-miterlimit: 10;\r
        " x1="240.429" y1="83.83" x2="258.124" y2="83.83"/><line style="\r
          fill: none;\r
          stroke: #000000;\r
          stroke-width: 15;\r
          stroke-linecap: round;\r
          stroke-linejoin: round;\r
          stroke-miterlimit: 10;\r
        " x1="248.276" y1="107.911" x2="265.97" y2="107.911"/></g></g></svg>`,I2=`<?xml version="1.0" encoding="UTF-8"?><svg version="1.1" id="svg3390" xml:space="preserve" width="682.66669" height="682.66669" viewBox="0 0 682.66669 682.66669" xmlns="http://www.w3.org/2000/svg"><defs id="defs3394"><clipPath clipPathUnits="userSpaceOnUse" id="clipPath3404"><path d="M 0,512 H 512 V 0 H 0 Z" id="path3402"/></clipPath></defs><g id="g3396" transform="matrix(1.3333333,0,0,-1.3333333,0,682.66667)"><g id="g3398"><g id="g3400" clip-path="url(#clipPath3404)"><g id="g3406" transform="translate(451.7344)"><path d="m 0,0 h -391.469 c -11.379,0 -20.603,9.225 -20.603,20.604 v 470.792 c 0,11.379 9.224,20.604 20.603,20.604 L 0,512 c 11.379,0 20.604,-9.225 20.604,-20.604 V 20.604 C 20.604,9.225 11.379,0 0,0" style="fill: #efe6e6; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path3408"/></g><g id="g3410" transform="translate(472.3376,41.2072)"><path d="m 0,0 c -216.202,0 -391.468,175.266 -391.468,391.468 v 79.325 h -20.604 c -11.379,0 -20.604,-9.225 -20.604,-20.604 V -20.604 c 0,-11.379 9.225,-20.603 20.604,-20.603 H -20.603 C -9.224,-41.207 0,-31.983 0,-20.604 Z" style="fill: #e2d7d7; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path3412"/></g><g id="g3414" transform="translate(235.3964,198.1382)"><path d="M 0,0 H 195.734 V 272.655 H 82.414 Z" style="fill: #ffffff; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path3416"/></g><g id="g3418" transform="translate(235.3964,198.1382)"><path d="M 0,0 H 195.734 V 272.655 H 82.414 Z" style="fill: #5ad6ff; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path3420"/></g><g id="g3422" transform="translate(80.8692,198.1382)"><path d="m 0,0 h 113.32 l 82.414,272.655 H 0 Z" style="fill: #f4e74d; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path3424"/></g><g id="g3426" transform="translate(80.8692,432.6757)"><path d="M 0,0 V -234.537 H 78.01 C 29.021,-169.169 0,-87.974 0,0" style="fill: #eedb00; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path3428"/></g><path d="M 431.131,41.207 H 80.869 v 115.724 h 350.262 z" style="fill: #b18cd9; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path3430"/><g id="g3432" transform="translate(194.475,156.931)"><path d="m 0,0 h -113.606 v -115.724 h 350.262 v 2.149 C 144.487,-103.933 61.838,-62.31 0,0" style="fill: #996acc; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path3434"/></g><g id="g3436" transform="translate(213.2632,94.3332)"><path d="m 0,0 c 0,-10.991 -11.188,-19.901 -24.99,-19.901 -13.801,0 -24.989,8.91 -24.989,19.901 0,10.991 11.188,19.9 24.989,19.9 C -11.188,19.9 0,10.991 0,0" style="fill: #ffffff; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path3438"/></g><g id="g3440" transform="translate(298.7368,94.3332)"><path d="m 0,0 c 0,-10.991 11.188,-19.901 24.99,-19.901 13.801,0 24.989,8.91 24.989,19.901 0,10.991 -11.188,19.9 -24.989,19.9 C 11.188,19.9 0,10.991 0,0" style="fill: #ffffff; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path3442"/></g><g id="g3444" transform="translate(202.8374,123.7057)"><path d="M 0,0 V -10.216" style="\r
              fill: none;\r
              stroke: #3d4751;\r
              stroke-width: 15;\r
              stroke-linecap: round;\r
              stroke-linejoin: round;\r
              stroke-miterlimit: 10;\r
              stroke-dasharray: none;\r
              stroke-opacity: 1;\r
            " id="path3446"/></g><g id="g3448" transform="translate(309.1625,123.7057)"><path d="M 0,0 V -10.216" style="\r
              fill: none;\r
              stroke: #3d4751;\r
              stroke-width: 15;\r
              stroke-linecap: round;\r
              stroke-linejoin: round;\r
              stroke-miterlimit: 10;\r
              stroke-dasharray: none;\r
              stroke-opacity: 1;\r
            " id="path3450"/></g><g id="g3452" transform="translate(241.984,113.7942)"><path d="m 0,0 c 3.408,-3.911 8.421,-6.385 14.016,-6.385 5.595,0 10.608,2.474 14.016,6.385" style="\r
              fill: none;\r
              stroke: #3d4751;\r
              stroke-width: 15;\r
              stroke-linecap: round;\r
              stroke-linejoin: round;\r
              stroke-miterlimit: 10;\r
              stroke-dasharray: none;\r
              stroke-opacity: 1;\r
            " id="path3454"/></g><g id="g3456" transform="translate(150.0629,447.8862)"><path d="m 0,0 33.436,22.907 h -102.63 v -161.294 l 21.382,72.58 59.96,-46.151 -25.363,71.287 75.636,-2.093 z" style="fill: #fd5c6f; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path3458"/></g><g id="g3460" transform="translate(80.8692,432.6757)"><path d="m 0,0 v -123.177 l 10.122,34.358 C 3.502,-60.282 0,-30.55 0,0" style="fill: #f6334c; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path3462"/></g><g id="g3464" transform="translate(431.1308,271.141)"><path d="m 0,0 -57.698,-44.41 24.406,68.598 -72.782,-2.014 60.066,41.15 -60.066,41.151 72.782,-2.014 -24.406,68.597 L 0,126.649 Z" style="fill: #ffffff; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path3466"/></g></g></g></g></svg>`,C2=`<?xml version="1.0" encoding="UTF-8"?><svg version="1.1" id="svg5007" xml:space="preserve" width="682.66669" height="682.66669" viewBox="0 0 682.66669 682.66669" xmlns="http://www.w3.org/2000/svg"><defs id="defs5011"><clipPath clipPathUnits="userSpaceOnUse" id="clipPath5021"><path d="M 0,512 H 512 V 0 H 0 Z" id="path5019"/></clipPath></defs><g id="g5013" transform="matrix(1.3333333,0,0,-1.3333333,0,682.66667)"><g id="g5015"><g id="g5017" clip-path="url(#clipPath5021)"><g id="g5023" transform="translate(446,7.5)"><path d="m 0,0 h -380 c -11.046,0 -20,8.954 -20,20 v 457 c 0,11.046 8.954,20 20,20 H 0 c 11.046,0 20,-8.954 20,-20 V 20 C 20,8.954 11.046,0 0,0" style="fill: #efe6e6; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path5025"/></g><g id="g5027" transform="translate(465.9996,47.5)"><path d="m 0,0 c -209.868,0 -380,170.132 -380,380 v 77 h -20 c -11.045,0 -20,-8.954 -20,-20 V -20 c 0,-11.046 8.955,-20 20,-20 h 380 c 11.046,0 20,8.954 20,20 z" style="fill: #e2d7d7; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path5029"/></g><g id="g5031" transform="translate(236,199.8333)"><path d="M 0,0 H 190 V 264.667 H 80 Z" style="fill: #ffffff; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path5033"/></g><g id="g5035" transform="translate(236,199.8333)"><path d="M 0,0 H 190 V 264.667 H 80 Z" style="fill: #5ad6ff; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path5037"/></g><g id="g5039" transform="translate(86,199.8333)"><path d="m 0,0 h 110 l 80,264.667 H 0 Z" style="fill: #f4e74d; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path5041"/></g><g id="g5043" transform="translate(86,427.4996)"><path d="M 0,0 V -227.666 H 75.725 C 28.171,-164.213 0,-85.397 0,0" style="fill: #eedb00; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path5045"/></g><path d="M 426,47.5 H 86 v 112.333 h 340 z" style="fill: #b18cd9; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path5047"/><g id="g5049" transform="translate(196.2775,159.8334)"><path d="m 0,0 h -110.278 v -112.333 h 340 v 2.085 C 140.254,-100.888 60.026,-60.484 0,0" style="fill: #996acc; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path5051"/></g><g id="g5053" transform="translate(214.5152,99.0695)"><path d="m 0,0 c 0,-10.669 -10.861,-19.318 -24.258,-19.318 -13.397,0 -24.257,8.649 -24.257,19.318 0,10.669 10.86,19.317 24.257,19.317 C -10.861,19.317 0,10.669 0,0" style="fill: #ffffff; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path5055"/></g><g id="g5057" transform="translate(297.4848,99.0695)"><path d="m 0,0 c 0,-10.669 10.861,-19.318 24.258,-19.318 13.397,0 24.257,8.649 24.257,19.318 0,10.669 -10.86,19.317 -24.257,19.317 C 10.861,19.317 0,10.669 0,0" style="fill: #ffffff; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path5059"/></g><g id="g5061" transform="translate(204.3949,127.5815)"><path d="M 0,0 V -9.916" style="\r
              fill: none;\r
              stroke: #000000;\r
              stroke-width: 15;\r
              stroke-linecap: round;\r
              stroke-linejoin: round;\r
              stroke-miterlimit: 10;\r
              stroke-dasharray: none;\r
              stroke-opacity: 1;\r
            " id="path5063"/></g><g id="g5065" transform="translate(307.605,127.5815)"><path d="M 0,0 V -9.916" style="\r
              fill: none;\r
              stroke: #000000;\r
              stroke-width: 15;\r
              stroke-linecap: round;\r
              stroke-linejoin: round;\r
              stroke-miterlimit: 10;\r
              stroke-dasharray: none;\r
              stroke-opacity: 1;\r
            " id="path5067"/></g><g id="g5069" transform="translate(242.3946,117.9604)"><path d="m 0,0 c 3.308,-3.796 8.175,-6.198 13.605,-6.198 5.431,0 10.298,2.402 13.606,6.198" style="\r
              fill: none;\r
              stroke: #000000;\r
              stroke-width: 15;\r
              stroke-linecap: round;\r
              stroke-linejoin: round;\r
              stroke-miterlimit: 10;\r
              stroke-dasharray: none;\r
              stroke-opacity: 1;\r
            " id="path5071"/></g><g id="g5073" transform="translate(153.1665,442.2645)"><path d="m 0,0 32.456,22.235 h -99.623 v -156.568 l 20.756,70.454 58.203,-44.799 -24.62,69.199 73.42,-2.032 z" style="fill: #fd5c6f; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path5075"/></g><g id="g5077" transform="translate(86,427.4996)"><path d="m 0,0 v -119.568 l 9.825,33.351 C 3.399,-58.516 0,-29.655 0,0" style="fill: #f6334c; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path5079"/></g><g id="g5081" transform="translate(426,270.6974)"><path d="m 0,0 -56.008,-43.108 23.692,66.587 -70.65,-1.955 58.306,39.945 -58.306,39.945 70.65,-1.955 -23.692,66.588 L 0,122.939 Z" style="fill: #ffffff; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path5083"/></g><g id="g5085" transform="translate(446,7.5)"><path d="m 0,0 h -380 c -11.046,0 -20,8.954 -20,20 v 457 c 0,11.046 8.954,20 20,20 H 0 c 11.046,0 20,-8.954 20,-20 V 20 C 20,8.954 11.046,0 0,0 Z" style="\r
              fill: none;\r
              stroke: #000000;\r
              stroke-width: 15;\r
              stroke-linecap: round;\r
              stroke-linejoin: round;\r
              stroke-miterlimit: 10;\r
              stroke-dasharray: none;\r
              stroke-opacity: 1;\r
            " id="path5087"/></g><g id="g5089" transform="translate(426,346.167)"><path d="m 0,0 v 118.333 h -110 l -80,-264.667 H 0 V -28" style="\r
              fill: none;\r
              stroke: #000000;\r
              stroke-width: 15;\r
              stroke-linecap: round;\r
              stroke-linejoin: round;\r
              stroke-miterlimit: 10;\r
              stroke-dasharray: none;\r
              stroke-opacity: 1;\r
            " id="path5091"/></g><g id="g5093" transform="translate(86,199.8333)"><path d="m 0,0 h 110 l 80,264.667 H 0 Z" style="\r
              fill: none;\r
              stroke: #000000;\r
              stroke-width: 15;\r
              stroke-linecap: round;\r
              stroke-linejoin: round;\r
              stroke-miterlimit: 10;\r
              stroke-dasharray: none;\r
              stroke-opacity: 1;\r
            " id="path5095"/></g><g id="g5097" transform="translate(154.0172,159.8334)"><path d="m 0,0 h 271.983 v -112.333 h -340 V 0 H -28" style="\r
              fill: none;\r
              stroke: #000000;\r
              stroke-width: 15;\r
              stroke-linecap: round;\r
              stroke-linejoin: round;\r
              stroke-miterlimit: 10;\r
              stroke-dasharray: none;\r
              stroke-opacity: 1;\r
            " id="path5099"/></g><g id="g5101" transform="translate(86,307.9314)"><path d="m 0,0 20.756,70.454 58.203,-44.799 -24.62,69.199 73.419,-2.032 -60.591,41.511 32.455,22.236" style="\r
              fill: none;\r
              stroke: #000000;\r
              stroke-width: 15;\r
              stroke-linecap: round;\r
              stroke-linejoin: round;\r
              stroke-miterlimit: 10;\r
              stroke-dasharray: none;\r
              stroke-opacity: 1;\r
            " id="path5103"/></g><g id="g5105" transform="translate(426,270.6974)"><path d="m 0,0 -56.008,-43.108 23.692,66.587 -70.65,-1.955 58.306,39.945 -58.306,39.945 70.65,-1.955 -23.692,66.588 L 0,122.939" style="\r
              fill: none;\r
              stroke: #000000;\r
              stroke-width: 15;\r
              stroke-linecap: round;\r
              stroke-linejoin: round;\r
              stroke-miterlimit: 10;\r
              stroke-dasharray: none;\r
              stroke-opacity: 1;\r
            " id="path5107"/></g></g></g></g></svg>`,O2='<svg id="Capa_1" enable-background="new 0 0 512 512" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><g><g><g><path d="m427.508 512h-343.02c-5.69 0-10.302-4.612-10.302-10.302v-491.396c0-5.69 4.612-10.302 10.302-10.302h343.02c5.69 0 10.302 4.612 10.302 10.302v491.396c-.001 5.69-4.613 10.302-10.302 10.302z" fill="#f2eff2"/></g></g><path d="m427.512 0h-41.238c5.687 0 10.302 4.615 10.302 10.302v36.12l-18.016 49.462 18.016 36.952v51.701l-13.787 87.003 13.787 55.974v51.669l-18.016 52.406 18.016 34.008v36.1c0 5.687-4.615 10.302-10.302 10.302h41.238c5.687 0 10.302-4.615 10.302-10.302v-491.395c0-5.687-4.615-10.302-10.302-10.302z" fill="#e1dde1"/><path d="m396.6 46.36v86.52c0 2.85-2.31 5.15-5.15 5.15h-110.11l-22.53-48.41 22.53-48.41h110.11c2.84 0 5.15 2.3 5.15 5.15z" fill="#3ad1e0"/><path d="m396.599 46.358v86.525c0 2.843-2.308 5.151-5.151 5.151h-30.926c2.843 0 5.151-2.308 5.151-5.151v-86.525c0-2.843-2.308-5.151-5.151-5.151h30.926c2.844 0 5.151 2.308 5.151 5.151z" fill="#20bfd5"/><path d="m281.34 41.207h-39.904c-2.845 0-5.151 2.306-5.151 5.151v86.525c0 2.845 2.306 5.151 5.151 5.151h39.904z" fill="#23f1a8"/><path d="m304.73 470.79h-77.71l-39.22-20.29-39.23 20.29h-28.03c-2.84 0-5.15-2.3-5.15-5.15v-86.52c0-2.85 2.31-5.15 5.15-5.15h128.92c1.76 0 3.4.89 4.34 2.37l55.27 86.53c2.19 3.43-.27 7.92-4.34 7.92z" fill="#23f1a8"/><g><path d="m227.019 443.104v27.689h-78.446v-27.689c0-21.669 17.569-39.228 39.228-39.228 10.83 0 20.639 4.39 27.729 11.489 7.099 7.1 11.489 16.899 11.489 27.739z" fill="#ae6ad8"/><path d="m227.021 443.101v27.691h-29.061v-27.691c0-10.838-4.389-20.634-11.486-27.732-3.729-3.74-8.211-6.727-13.207-8.715 4.492-1.793 9.406-2.782 14.536-2.782 10.827 0 20.635 4.389 27.732 11.497 7.097 7.098 11.486 16.895 11.486 27.732z" fill="#975bbb"/></g><path d="m304.728 470.793h-30.926c4.069 0 6.531-4.492 4.347-7.922l-55.269-86.525c-.948-1.483-2.586-2.38-4.347-2.38h30.926c1.762 0 3.4.896 4.347 2.38l55.269 86.525c2.184 3.43-.278 7.922-4.347 7.922z" fill="#27e19d"/><path d="m391.448 373.966h-81.106c-4.068 0-6.531 4.495-4.341 7.924l55.269 86.525c.946 1.482 2.583 2.378 4.341 2.378h25.837c2.845 0 5.151-2.306 5.151-5.151v-86.525c0-2.845-2.306-5.151-5.151-5.151z" fill="#ae6ad8"/><path d="m396.599 379.117v86.525c0 2.843-2.308 5.151-5.151 5.151h-25.837c-.907 0-1.772-.237-2.534-.68 1.556-.886 2.596-2.555 2.596-4.471v-86.525c0-2.843-2.308-5.151-5.151-5.151h30.926c2.844 0 5.151 2.308 5.151 5.151z" fill="#975bbb"/><g><path d="m195.602 46.358v86.525c0 2.845-2.306 5.151-5.151 5.151h-69.91c-2.845 0-5.151-2.306-5.151-5.151v-86.525c0-2.845 2.306-5.151 5.151-5.151h69.91c2.845 0 5.151 2.306 5.151 5.151z" fill="#3ad1e0"/><path d="m195.6 46.358v86.525c0 2.843-2.308 5.151-5.151 5.151h-30.926c2.843 0 5.151-2.308 5.151-5.151v-86.525c0-2.843-2.308-5.151-5.151-5.151h30.926c2.844 0 5.151 2.308 5.151 5.151z" fill="#20bfd5"/></g><g><path d="m396.6 184.39v143.22c0 2.84-2.31 5.15-5.15 5.15h-30.93l-104.53-27.53-104.52 27.53h-30.93c-2.84 0-5.15-2.31-5.15-5.15v-143.22c0-2.84 2.31-5.15 5.15-5.15h47.77l87.68 16.15 87.69-16.15h47.77c2.84 0 5.15 2.31 5.15 5.15z" fill="#fb54b6"/></g><path d="m151.473 332.759c0-57.729 46.798-104.527 104.527-104.527s104.527 46.798 104.527 104.527z" fill="#fb9927"/><path d="m360.522 332.759h-35.397c0-51.694-37.519-94.612-86.824-103.028 5.748-.979 11.662-1.494 17.699-1.494 57.731 0 104.522 46.79 104.522 104.522z" fill="#f98824"/><g><path d="m396.599 184.392v143.216c0 2.843-2.308 5.151-5.151 5.151h-30.926c2.843 0 5.151-2.308 5.151-5.151v-143.216c0-2.843-2.308-5.151-5.151-5.151h30.926c2.844 0 5.151 2.308 5.151 5.151z" fill="#fb33a8"/></g><g><g><path d="m345.43 247.027c-.144 0-.299 0-.453-.01-24.024-1.226-43.947 17.946-43.947 41.722 0 .721.021 1.442.051 2.174.268 5.079-3.853 8.489-8.128 8.489-2.112 0-4.244-.814-5.913-2.678-8.293-9.189-19.676-13.794-31.039-13.794s-22.746 4.605-31.039 13.794c-1.669 1.865-3.801 2.678-5.913 2.678-4.275 0-8.396-3.41-8.128-8.489.031-.731.041-1.453.041-2.174 0-23.777-19.924-42.948-43.937-41.722-.155.01-.309.01-.464.01-7.263 0-10.879-9.076-5.357-14.062 9.189-8.293 13.794-19.666 13.794-31.039 0-7.912-2.225-15.813-6.686-22.685h175.378c-4.461 6.871-6.686 14.773-6.686 22.685 0 11.373 4.605 22.746 13.794 31.039 5.521 4.986 1.905 14.062-5.368 14.062z" fill="#fdef63"/><g><g id="XMLID_00000127012381744132405410000009872483291948348836_"><path d="m280.138 231.696c-4.268 0-7.726-3.459-7.726-7.726v-.107c0-4.267 3.459-7.726 7.726-7.726s7.726 3.459 7.726 7.726v.107c0 4.267-3.459 7.726-7.726 7.726z" fill="#554e55"/></g><g id="XMLID_00000080918978500845250090000017315552773041050031_"><path d="m256 231.696c-4.267 0-7.726-3.459-7.726-7.726v-.107c0-4.267 3.459-7.726 7.726-7.726 4.268 0 7.726 3.459 7.726 7.726v.107c0 4.267-3.458 7.726-7.726 7.726z" fill="#554e55"/></g><g id="XMLID_00000140711681861242238370000008769002181148908969_"><path d="m231.862 231.696c-4.267 0-7.726-3.459-7.726-7.726v-.107c0-4.267 3.459-7.726 7.726-7.726s7.726 3.459 7.726 7.726v.107c.001 4.267-3.459 7.726-7.726 7.726z" fill="#554e55"/></g></g><path d="m345.43 247.037c-.155 0-.299 0-.443-.021-24.034-1.226-43.948 17.956-43.948 41.722 0 .721.01 1.432.052 2.174.258 5.079-3.863 8.499-8.128 8.499-2.122 0-4.255-.824-5.924-2.689-6.954-7.685-16.05-12.167-25.507-13.423 29.968-14.804 50.582-45.678 50.582-81.364 0-7.84-.999-15.442-2.864-22.695h34.429c-4.45 6.871-6.676 14.783-6.676 22.685 0 11.373 4.605 22.757 13.784 31.05 5.532 4.966 1.926 14.062-5.357 14.062z" fill="#f3d730"/></g></g><g><g><g><circle cx="187.8" cy="385.284" fill="#d8b2ec" r="25.455"/></g></g></g><g><g id="XMLID_00000028301319025648580530000009457246182494066313_"><path d="m316.443 111.45c-4.258 0-7.714-3.445-7.726-7.705-.012-4.267 3.438-7.736 7.705-7.747l41.222-.114h.021c4.258 0 7.714 3.445 7.726 7.705.012 4.267-3.438 7.736-7.705 7.747l-41.222.114c-.007 0-.014 0-.021 0z" fill="#f2eff2"/></g><g><path d="m357.665 83.243h-21.761c-4.268 0-7.726-3.459-7.726-7.726s3.459-7.726 7.726-7.726h21.761c4.268 0 7.726 3.459 7.726 7.726s-3.458 7.726-7.726 7.726z" fill="#f2eff2"/></g></g></g></svg>',T2=`<?xml version="1.0" encoding="UTF-8"?><svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background: new 0 0 512 512" xml:space="preserve" width="512" height="512"><g><g><g><path style="fill: #f2eff2" d="M422.485,504.5H89.515c-5.523,0-10-4.477-10-10v-477c0-5.523,4.477-10,10-10h332.971&#10;&#9;&#9;&#9;&#9;c5.523,0,10,4.477,10,10v477C432.485,500.023,428.008,504.5,422.485,504.5z"/></g></g><g><g><path style="fill: #e1dde1" d="M432.49,17.5v477c0,5.52-4.48,10-10,10h-40.03c5.52,0,10-4.48,10-10v-477c0-5.52-4.48-10-10-10&#10;&#9;&#9;&#9;&#9;h40.03C428.01,7.5,432.49,11.98,432.49,17.5z"/></g></g><g><path style="\r
          fill: none;\r
          stroke: #000000;\r
          stroke-width: 15;\r
          stroke-linecap: round;\r
          stroke-linejoin: round;\r
          stroke-miterlimit: 10;\r
        " d="&#10;&#9;&#9;&#9;M158.639,7.5H89.515c-5.523,0-10,4.477-10,10v477c0,5.523,4.477,10,10,10h332.971c5.523,0,10-4.477,10-10v-477&#10;&#9;&#9;&#9;c0-5.523-4.477-10-10-10H191.801"/></g><path style="fill: #3ad1e0" d="M392.482,52.5v83.99c0,2.761-2.239,5-5,5H241.866c-2.761,0-5-2.239-5-5V52.5c0-2.761,2.239-5,5-5&#10;&#9;&#9;h145.617C390.244,47.5,392.482,49.739,392.482,52.5z"/><path style="fill: #20bfd5" d="M392.482,52.5v83.99c0,2.76-2.24,5-5,5h-30.02c2.76,0,5-2.24,5-5V52.5c0-2.76-2.24-5-5-5h30.02&#10;&#9;&#9;C390.242,47.5,392.482,49.74,392.482,52.5z"/><path style="fill: #26d192" d="M280.6,47.5h-38.735c-2.761,0-5,2.239-5,5v83.99c0,2.761,2.239,5,5,5H280.6V47.5z"/><line style="\r
        fill: none;\r
        stroke: #000000;\r
        stroke-width: 15;\r
        stroke-linecap: round;\r
        stroke-linejoin: round;\r
        stroke-miterlimit: 10;\r
      " x1="280.6" y1="141.49" x2="280.6" y2="47.5"/><path style="fill: #23f1a8" d="M124.512,370.51h125.143c1.706,0,3.295,0.87,4.214,2.308l53.65,83.99&#10;&#9;&#9;c2.126,3.328-0.264,7.692-4.214,7.692H124.512c-2.761,0-5-2.239-5-5v-83.99C119.512,372.749,121.751,370.51,124.512,370.51z"/><g><path style="fill: #ae6ad8" d="M227.87,437.622V464.5h-76.148v-26.878c0-21.034,17.054-38.079,38.079-38.079&#10;&#9;&#9;&#9;c10.512,0,20.034,4.261,26.916,11.153C223.609,417.588,227.87,427.1,227.87,437.622z"/><path style="fill: #975bbb" d="M227.872,437.62v26.88h-28.21v-26.88c0-10.52-4.26-20.03-11.15-26.92&#10;&#9;&#9;&#9;c-3.62-3.63-7.97-6.53-12.82-8.46c4.36-1.74,9.13-2.7,14.11-2.7c10.51,0,20.03,4.26,26.92,11.16&#10;&#9;&#9;&#9;C223.612,417.59,227.872,427.1,227.872,437.62z"/><path style="\r
          fill: none;\r
          stroke: #000000;\r
          stroke-width: 15;\r
          stroke-linecap: round;\r
          stroke-linejoin: round;\r
          stroke-miterlimit: 10;\r
        " d="&#10;&#9;&#9;&#9;M151.722,464.5v-26.878c0-21.034,17.054-38.079,38.079-38.079c10.512,0,20.034,4.261,26.916,11.153&#10;&#9;&#9;&#9;c6.892,6.892,11.153,16.404,11.153,26.926V464.5"/></g><path style="fill: #27e19d" d="M303.302,464.5h-30.02c3.95,0,6.34-4.36,4.22-7.69l-53.65-83.99c-0.92-1.44-2.51-2.31-4.22-2.31&#10;&#9;&#9;h30.02c1.71,0,3.3,0.87,4.22,2.31l53.65,83.99C309.642,460.14,307.252,464.5,303.302,464.5z"/><path style="fill: #ae6ad8" d="M387.482,370.51h-78.73c-3.949,0-6.34,4.363-4.214,7.692l53.65,83.99&#10;&#9;&#9;c0.919,1.438,2.507,2.308,4.214,2.308h25.08c2.761,0,5-2.239,5-5v-83.99C392.482,372.749,390.244,370.51,387.482,370.51z"/><path style="fill: #975bbb" d="M392.482,375.51v83.99c0,2.76-2.24,5-5,5h-25.08c-0.88,0-1.72-0.23-2.46-0.66&#10;&#9;&#9;c1.51-0.86,2.52-2.48,2.52-4.34v-83.99c0-2.76-2.24-5-5-5h30.02C390.242,370.51,392.482,372.75,392.482,375.51z"/><path style="\r
        fill: none;\r
        stroke: #000000;\r
        stroke-width: 15;\r
        stroke-linecap: round;\r
        stroke-linejoin: round;\r
        stroke-miterlimit: 10;\r
      " d="&#10;&#9;&#9;M392.482,52.5v83.99c0,2.761-2.239,5-5,5H241.866c-2.761,0-5-2.239-5-5V52.5c0-2.761,2.239-5,5-5h145.617&#10;&#9;&#9;C390.244,47.5,392.482,49.739,392.482,52.5z"/><g><path style="fill: #3ad1e0" d="M197.374,52.5v83.99c0,2.761-2.239,5-5,5h-67.862c-2.761,0-5-2.239-5-5V52.5c0-2.761,2.239-5,5-5&#10;&#9;&#9;&#9;h67.862C195.135,47.5,197.374,49.739,197.374,52.5z"/><path style="fill: #20bfd5" d="M197.372,52.5v83.99c0,2.76-2.24,5-5,5h-30.02c2.76,0,5-2.24,5-5V52.5c0-2.76-2.24-5-5-5h30.02&#10;&#9;&#9;&#9;C195.132,47.5,197.372,49.74,197.372,52.5z"/><path style="\r
          fill: none;\r
          stroke: #000000;\r
          stroke-width: 15;\r
          stroke-linecap: round;\r
          stroke-linejoin: round;\r
          stroke-miterlimit: 10;\r
        " d="&#10;&#9;&#9;&#9;M197.374,52.5v83.99c0,2.761-2.239,5-5,5h-67.862c-2.761,0-5-2.239-5-5V52.5c0-2.761,2.239-5,5-5h67.862&#10;&#9;&#9;&#9;C195.135,47.5,197.374,49.739,197.374,52.5z"/></g><g><path style="fill: #fb54b6" d="M124.512,181.49h262.97c2.761,0,5,2.239,5,5v139.02c0,2.761-2.239,5-5,5h-262.97&#10;&#9;&#9;&#9;c-2.761,0-5-2.239-5-5V186.49C119.512,183.729,121.751,181.49,124.512,181.49z"/></g><path style="fill: #fb9927" d="M154.537,330.51c0-56.038,45.427-101.465,101.465-101.465s101.465,45.427,101.465,101.465H154.537z"/><path style="fill: #f98824" d="M357.462,330.51h-34.36c0-50.18-36.42-91.84-84.28-100.01c5.58-0.95,11.32-1.45,17.18-1.45&#10;&#9;&#9;C312.042,229.05,357.462,274.47,357.462,330.51z"/><path style="\r
        fill: none;\r
        stroke: #000000;\r
        stroke-width: 15;\r
        stroke-linecap: round;\r
        stroke-linejoin: round;\r
        stroke-miterlimit: 10;\r
      " d="&#10;&#9;&#9;M154.537,330.51c0-56.038,45.427-101.465,101.465-101.465s101.465,45.427,101.465,101.465"/><g><path style="fill: #fb33a8" d="M392.482,186.49v139.02c0,2.76-2.24,5-5,5h-30.02c2.76,0,5-2.24,5-5V186.49c0-2.76-2.24-5-5-5&#10;&#9;&#9;&#9;h30.02C390.242,181.49,392.482,183.73,392.482,186.49z"/></g><g><g><path style="fill: #fdef63" d="M342.812,247.29c-0.14,0-0.29,0-0.44-0.01c-23.32-1.19-42.66,17.42-42.66,40.5&#10;&#9;&#9;&#9;&#9;c0,0.7,0.02,1.4,0.05,2.11c0.26,4.93-3.74,8.24-7.89,8.24c-2.05,0-4.12-0.79-5.74-2.6c-8.05-8.92-19.1-13.39-30.13-13.39&#10;&#9;&#9;&#9;&#9;s-22.08,4.47-30.13,13.39c-1.62,1.81-3.69,2.6-5.74,2.6c-4.15,0-8.15-3.31-7.89-8.24c0.03-0.71,0.04-1.41,0.04-2.11&#10;&#9;&#9;&#9;&#9;c0-23.08-19.34-41.69-42.65-40.5c-0.15,0.01-0.3,0.01-0.45,0.01c-7.05,0-10.56-8.81-5.2-13.65c8.92-8.05,13.39-19.09,13.39-30.13&#10;&#9;&#9;&#9;&#9;c0-7.68-2.16-15.35-6.49-22.02h170.24c-4.33,6.67-6.49,14.34-6.49,22.02c0,11.04,4.47,22.08,13.39,30.13&#10;&#9;&#9;&#9;&#9;C353.382,238.48,349.872,247.29,342.812,247.29z"/><g><line id="XMLID_00000127012381744132405410000009872483291948348836_" style="\r
              fill: none;\r
              stroke: #000000;\r
              stroke-width: 15;\r
              stroke-linecap: round;\r
              stroke-linejoin: round;\r
              stroke-miterlimit: 10;\r
            " x1="279.433" y1="224.908" x2="279.433" y2="224.805"/><line id="XMLID_00000080918978500845250090000017315552773041050031_" style="\r
              fill: none;\r
              stroke: #000000;\r
              stroke-width: 15;\r
              stroke-linecap: round;\r
              stroke-linejoin: round;\r
              stroke-miterlimit: 10;\r
            " x1="256.002" y1="224.908" x2="256.002" y2="224.805"/><line id="XMLID_00000140711681861242238370000008769002181148908969_" style="\r
              fill: none;\r
              stroke: #000000;\r
              stroke-width: 15;\r
              stroke-linecap: round;\r
              stroke-linejoin: round;\r
              stroke-miterlimit: 10;\r
            " x1="232.572" y1="224.908" x2="232.572" y2="224.805"/></g><path style="fill: #f3d730" d="M342.812,247.3c-0.15,0-0.29,0-0.43-0.02c-23.33-1.19-42.66,17.43-42.66,40.5&#10;&#9;&#9;&#9;&#9;c0,0.7,0.01,1.39,0.05,2.11c0.25,4.93-3.75,8.25-7.89,8.25c-2.06,0-4.13-0.8-5.75-2.61c-6.75-7.46-15.58-11.81-24.76-13.03&#10;&#9;&#9;&#9;&#9;c29.09-14.37,49.1-44.34,49.1-78.98c0-7.61-0.97-14.99-2.78-22.03h33.42c-4.32,6.67-6.48,14.35-6.48,22.02&#10;&#9;&#9;&#9;&#9;c0,11.04,4.47,22.09,13.38,30.14C353.382,238.47,349.882,247.3,342.812,247.3z"/></g><path style="\r
          fill: none;\r
          stroke: #000000;\r
          stroke-width: 15;\r
          stroke-linecap: round;\r
          stroke-linejoin: round;\r
          stroke-miterlimit: 10;\r
        " d="&#10;&#9;&#9;&#9;M341.122,181.49c-4.33,6.67-6.49,14.34-6.49,22.02c0,11.04,4.47,22.08,13.39,30.13c5.36,4.84,1.85,13.65-5.21,13.65&#10;&#9;&#9;&#9;c-0.14,0-0.29,0-0.44-0.01c-23.32-1.19-42.66,17.42-42.66,40.5c0,0.7,0.02,1.4,0.05,2.11c0.26,4.93-3.74,8.24-7.89,8.24&#10;&#9;&#9;&#9;c-2.05,0-4.12-0.79-5.74-2.6c-8.05-8.92-19.1-13.39-30.13-13.39s-22.08,4.47-30.13,13.39c-1.62,1.81-3.69,2.6-5.74,2.6&#10;&#9;&#9;&#9;c-4.15,0-8.15-3.31-7.89-8.24c0.03-0.71,0.04-1.41,0.04-2.11c0-23.08-19.34-41.69-42.65-40.5c-0.15,0.01-0.3,0.01-0.45,0.01&#10;&#9;&#9;&#9;c-7.05,0-10.56-8.81-5.2-13.65c8.92-8.05,13.39-19.09,13.39-30.13c0-7.68-2.16-15.35-6.49-22.02"/></g><g><path style="\r
          fill: none;\r
          stroke: #000000;\r
          stroke-width: 15;\r
          stroke-linecap: round;\r
          stroke-linejoin: round;\r
          stroke-miterlimit: 10;\r
        " d="&#10;&#9;&#9;&#9;M208.726,181.49h-84.213c-2.761,0-5,2.239-5,5v139.02c0,2.761,2.239,5,5,5h262.97c2.761,0,5-2.239,5-5V186.49c0-2.761-2.239-5-5-5&#10;&#9;&#9;&#9;H241.888"/></g><path style="\r
        fill: none;\r
        stroke: #000000;\r
        stroke-width: 15;\r
        stroke-linecap: round;\r
        stroke-linejoin: round;\r
        stroke-miterlimit: 10;\r
      " d="&#10;&#9;&#9;M124.512,370.51h125.143c1.706,0,3.295,0.87,4.214,2.308l53.65,83.99c2.126,3.328-0.264,7.692-4.214,7.692H124.512&#10;&#9;&#9;c-2.761,0-5-2.239-5-5v-83.99C119.512,372.749,121.751,370.51,124.512,370.51z"/><path style="\r
        fill: none;\r
        stroke: #000000;\r
        stroke-width: 15;\r
        stroke-linecap: round;\r
        stroke-linejoin: round;\r
        stroke-miterlimit: 10;\r
      " d="&#10;&#9;&#9;M392.482,397.976V375.51c0-2.761-2.239-5-5-5h-78.73c-3.949,0-6.34,4.363-4.214,7.692l53.65,83.99&#10;&#9;&#9;c0.919,1.438,2.507,2.308,4.214,2.308h25.08c2.761,0,5-2.239,5-5v-28.362"/><g><g><g><circle style="fill: #d8b2ec" cx="189.8" cy="381.497" r="24.709"/><circle style="\r
              fill: none;\r
              stroke: #000000;\r
              stroke-width: 15;\r
              stroke-linecap: round;\r
              stroke-linejoin: round;\r
              stroke-miterlimit: 10;\r
            " cx="189.8" cy="381.497" r="24.709"/></g></g></g><g><line id="XMLID_00000028301319025648580530000009457246182494066313_" style="\r
          fill: none;\r
          stroke: #000000;\r
          stroke-width: 15;\r
          stroke-linecap: round;\r
          stroke-linejoin: round;\r
          stroke-miterlimit: 10;\r
        " x1="314.674" y1="108.185" x2="354.689" y2="108.075"/><line style="\r
          fill: none;\r
          stroke: #000000;\r
          stroke-width: 15;\r
          stroke-linecap: round;\r
          stroke-linejoin: round;\r
          stroke-miterlimit: 10;\r
        " x1="333.566" y1="80.805" x2="354.689" y2="80.805"/></g></g></svg>`,L2='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-category" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4h6v6h-6z"/><path d="M14 4h6v6h-6z"/><path d="M4 14h6v6h-6z"/><path d="M17 17m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"/></svg>',R2='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-check" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 12l5 5l10 -10"/></svg>',P2='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-left"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 6l-6 6l6 6"/></svg>',$2='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 6l6 6l-6 6"/></svg>',z2='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-circle-check"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"/><path d="M9 12l2 2l4 -4"/></svg>',D2='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-circle-x"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"/><path d="M10 10l4 4m0 -4l-4 4"/></svg>',N2='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-device-floppy" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 4h10l4 4v10a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2"/><path d="M12 14m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"/><path d="M14 4l0 4l-6 0l0 -4"/></svg>',B2='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-dots-vertical"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"/><path d="M12 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"/><path d="M12 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"/></svg>',H2='<svg id="Capa_1" enable-background="new 0 0 512 512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><g><g><path d="m369.32 512h-226.64c-45.516 0-82.414-36.898-82.414-82.414v-347.172c0-45.516 36.898-82.414 82.414-82.414h226.64c45.516 0 82.414 36.898 82.414 82.414v347.171c0 45.517-36.898 82.415-82.414 82.415z" fill="#636978"/></g><g><path d="m225.095 450.189v-388.378c0-34.137 27.673-61.811 61.81-61.811h-144.225c-45.516 0-82.414 36.898-82.414 82.414v347.171c0 45.516 36.898 82.414 82.414 82.414h144.225c-34.137.001-61.81-27.673-61.81-61.81z" fill="#555a66"/></g><g><path d="m369.32 61.811h-226.64c-11.379 0-20.604 9.225-20.604 20.604v336.869c0 11.379 9.225 20.604 20.604 20.604h226.64c11.379 0 20.604-9.225 20.604-20.604v-336.87c0-11.379-9.225-20.603-20.604-20.603z" fill="#96e8ff"/></g><g><path d="m122.076 82.414v336.869c0 11.379 9.225 20.604 20.604 20.604h82.414v-378.076h-82.414c-11.379 0-20.604 9.224-20.604 20.603z" fill="#80dbff"/></g><g><path d="m256 111.277c-27.66-8.24-55.124-9.125-82.742-2.655-5.835 1.367-9.975 6.555-9.975 12.548v95.771c0 6.566 6.064 11.463 12.479 10.063 23.872-5.21 47.636-4.921 71.52.866 5.731 1.389 11.704 1.389 17.435 0 23.884-5.788 47.648-6.077 71.52-.866 6.415 1.4 12.479-3.497 12.479-10.063 0-40.343 0-55.429 0-95.771 0-5.993-4.139-11.181-9.975-12.548-27.617-6.471-55.081-5.585-82.741 2.655z" fill="#fff"/></g><g><path d="m173.258 108.622c-5.835 1.367-9.975 6.555-9.975 12.548v95.771c0 6.566 6.064 11.463 12.479 10.063 23.872-5.21 47.636-4.921 71.52.866 2.866.694 5.791 1.041 8.717 1.041v-117.634c-27.659-8.24-55.123-9.126-82.741-2.655z" fill="#f5fafc"/></g><g><path d="m205.037 104.432c-10.584.315-21.171 1.704-31.781 4.19-5.834 1.367-9.973 6.56-9.973 12.552v95.761c0 6.547 6.037 11.478 12.432 10.08 23.888-5.221 47.667-4.935 71.567.856 2.866.694 8.717 1.042 8.717 1.042 0-13.231-13.741-21.854-26.952-27.087-14.54-5.759-24.011-19.905-24.011-35.544v-61.85z" fill="#e1f1fa"/></g><g><g><path d="m338.414 289.266h-164.829c-4.142 0-7.5-3.357-7.5-7.5s3.358-7.5 7.5-7.5h164.829c4.143 0 7.5 3.357 7.5 7.5s-3.357 7.5-7.5 7.5z" fill="#19cffc"/></g><g><path d="m338.414 330.473h-164.829c-4.142 0-7.5-3.357-7.5-7.5s3.358-7.5 7.5-7.5h164.829c4.143 0 7.5 3.357 7.5 7.5s-3.357 7.5-7.5 7.5z" fill="#19cffc"/></g><g><g><path d="m191.667 385.134c-4.142 0-7.5-3.357-7.5-7.5v-12.362c0-4.143 3.358-7.5 7.5-7.5s7.5 3.357 7.5 7.5v12.362c0 4.142-3.358 7.5-7.5 7.5z" fill="#495560"/></g><g><path d="m320.333 385.134c-4.143 0-7.5-3.357-7.5-7.5v-12.362c0-4.143 3.357-7.5 7.5-7.5s7.5 3.357 7.5 7.5v12.362c0 4.142-3.357 7.5-7.5 7.5z" fill="#495560"/></g><g><path d="m256 392.493c-8.668 0-16.911-3.754-22.615-10.3-2.721-3.123-2.396-7.86.727-10.582 3.122-2.721 7.86-2.396 10.582.727 2.855 3.276 6.976 5.155 11.307 5.155s8.452-1.879 11.307-5.155c2.723-3.122 7.457-3.447 10.582-.727 3.122 2.722 3.448 7.459.727 10.582-5.706 6.546-13.949 10.3-22.617 10.3z" fill="#495560"/></g></g></g></g><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/></svg>',F2=`<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background: new 0 0 512 512" xml:space="preserve"><g><path style="fill: #636978" d="M366,504.5H146c-44.183,0-80-35.817-80-80v-337c0-44.183,35.817-80,80-80h220&#10;&#9;&#9;c44.183,0,80,35.817,80,80v337C446,468.683,410.183,504.5,366,504.5z"/><path style="fill: #555a66" d="M226,444.5v-377c0-33.137,26.863-60,60-60H146c-44.183,0-80,35.817-80,80v337&#10;&#9;&#9;c0,44.183,35.817,80,80,80h140C252.863,504.5,226,477.637,226,444.5z"/><path style="fill: #96e8ff" d="M366,67.5H146c-11.046,0-20,8.954-20,20v327c0,11.046,8.954,20,20,20h220c11.046,0,20-8.954,20-20&#10;&#9;&#9;v-327C386,76.454,377.046,67.5,366,67.5z"/><path style="fill: #80dbff" d="M126,87.5v327c0,11.046,8.954,20,20,20h80v-367h-80C134.954,67.5,126,76.454,126,87.5z"/><path style="fill: #ffffff" d="M256,115.517c-26.85-7.998-53.509-8.858-80.318-2.577c-5.664,1.327-9.682,6.363-9.682,12.18&#10;&#9;&#9;c0,39.161,0,53.805,0,92.965c0,6.374,5.886,11.128,12.113,9.768c23.172-5.058,46.241-4.777,69.425,0.841&#10;&#9;&#9;c5.563,1.348,11.361,1.348,16.924,0c23.184-5.618,46.252-5.898,69.425-0.841c6.227,1.359,12.113-3.395,12.113-9.768&#10;&#9;&#9;c0-39.161,0-53.805,0-92.965c0-5.818-4.018-10.853-9.682-12.18C309.509,106.659,282.85,107.518,256,115.517z"/><path style="fill: #f5fafc" d="M175.682,112.94c-5.664,1.327-9.682,6.363-9.682,12.18c0,39.161,0,53.805,0,92.965&#10;&#9;&#9;c0,6.374,5.886,11.128,12.113,9.769c23.172-5.058,46.241-4.777,69.425,0.841c2.782,0.674,5.622,1.011,8.462,1.011V115.517&#10;&#9;&#9;C229.15,107.518,202.491,106.659,175.682,112.94z"/><path style="fill: #e1f1fa" d="M206.53,108.873c-10.274,0.306-20.551,1.654-30.85,4.067c-5.663,1.327-9.681,6.368-9.681,12.184&#10;&#9;&#9;c0,39.155,0,53.801,0,92.955c0,6.355,5.86,11.141,12.068,9.785c23.188-5.068,46.271-4.791,69.47,0.831&#10;&#9;&#9;c2.782,0.674,8.462,1.011,8.462,1.011c0-12.844-13.338-21.214-26.163-26.293c-14.114-5.59-23.307-19.322-23.307-34.502V108.873z"/><g><path style="\r
          fill: none;\r
          stroke: #000000;\r
          stroke-width: 15;\r
          stroke-linecap: round;\r
          stroke-linejoin: round;\r
          stroke-miterlimit: 10;\r
        " d="&#10;&#9;&#9;&#9;M366,504.5H146c-44.183,0-80-35.817-80-80v-337c0-44.183,35.817-80,80-80h220c44.183,0,80,35.817,80,80v337&#10;&#9;&#9;&#9;C446,468.683,410.183,504.5,366,504.5z"/><path style="\r
          fill: none;\r
          stroke: #000000;\r
          stroke-width: 15;\r
          stroke-linecap: round;\r
          stroke-linejoin: round;\r
          stroke-miterlimit: 10;\r
        " d="&#10;&#9;&#9;&#9;M126,398.01v16.49c0,11.046,8.954,20,20,20h220c11.046,0,20-8.954,20-20v-327c0-11.046-8.954-20-20-20H146&#10;&#9;&#9;&#9;c-11.046,0-20,8.954-20,20v280.51"/><line style="\r
          fill: none;\r
          stroke: #000000;\r
          stroke-width: 15;\r
          stroke-linecap: round;\r
          stroke-linejoin: round;\r
          stroke-miterlimit: 10;\r
        " x1="176" y1="281.01" x2="336" y2="281.01"/><line style="\r
          fill: none;\r
          stroke: #000000;\r
          stroke-width: 15;\r
          stroke-linecap: round;\r
          stroke-linejoin: round;\r
          stroke-miterlimit: 10;\r
        " x1="176" y1="321.01" x2="336" y2="321.01"/><path style="\r
          fill: none;\r
          stroke: #000000;\r
          stroke-width: 15;\r
          stroke-linecap: round;\r
          stroke-linejoin: round;\r
          stroke-miterlimit: 10;\r
        " d="&#10;&#9;&#9;&#9;M286.144,109.53c-10.033,0.992-20.075,2.987-30.144,5.986c-26.85-7.998-53.509-8.858-80.318-2.577&#10;&#9;&#9;&#9;c-5.664,1.327-9.682,6.363-9.682,12.18c0,39.161,0,53.805,0,92.965c0,6.374,5.886,11.128,12.113,9.768&#10;&#9;&#9;&#9;c23.172-5.058,46.241-4.777,69.425,0.841c5.563,1.348,11.361,1.348,16.924,0c23.184-5.618,46.252-5.898,69.425-0.841&#10;&#9;&#9;&#9;c6.227,1.359,12.113-3.395,12.113-9.768c0-39.161,0-53.805,0-92.965c0-5.818-4.018-10.853-9.682-12.18&#10;&#9;&#9;&#9;c-6.702-1.57-13.395-2.694-20.084-3.372"/><line style="\r
          fill: none;\r
          stroke: #000000;\r
          stroke-width: 15;\r
          stroke-linecap: round;\r
          stroke-linejoin: round;\r
          stroke-miterlimit: 10;\r
        " x1="256" y1="115.517" x2="256" y2="229.706"/><g><line style="\r
            fill: none;\r
            stroke: #000000;\r
            stroke-width: 15;\r
            stroke-linecap: round;\r
            stroke-linejoin: round;\r
            stroke-miterlimit: 10;\r
          " x1="193.551" y1="362.07" x2="193.551" y2="374.07"/><line style="\r
            fill: none;\r
            stroke: #000000;\r
            stroke-width: 15;\r
            stroke-linecap: round;\r
            stroke-linejoin: round;\r
            stroke-miterlimit: 10;\r
          " x1="318.449" y1="362.07" x2="318.449" y2="374.07"/><path style="\r
            fill: none;\r
            stroke: #000000;\r
            stroke-width: 15;\r
            stroke-linecap: round;\r
            stroke-linejoin: round;\r
            stroke-miterlimit: 10;\r
          " d="&#10;&#9;&#9;&#9;&#9;M239.536,373.713c4.003,4.594,9.892,7.501,16.464,7.501c6.572,0,12.461-2.907,16.464-7.501"/></g></g></g><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/></svg>`,G2='<svg id="Capa_1" enable-background="new 0 0 512 512" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><g><path d="m449.945 61.818v388.363c0 34.144-27.684 61.818-61.818 61.818h-264.254c-34.134 0-61.818-27.674-61.818-61.818v-388.363c0-34.144 27.684-61.818 61.818-61.818h264.253c34.135 0 61.819 27.674 61.819 61.818z" fill="#808fa4"/><path d="m188.464 512h-64.59c-34.134 0-61.818-27.674-61.818-61.818v-388.364c-.001-34.144 27.683-61.818 61.817-61.818h50.341c-7.367 6.574-15.218 18.092-15.218 37.359v423.909c.001 0-.215 30.24 29.468 50.732z" fill="#64768e"/><path d="m418.912 61.942v147.509l-194.274 13.033 77.912-191.451h85.453c17.072 0 30.909 13.837 30.909 30.909z" fill="#c5ced6"/><path d="m271.516 31.033-46.878 191.451-65.641-6.501-65.909-6.532 20.843-140.421 45.365-37.997z" fill="#abb6c4"/><path d="m159.296 31.033c-.196 2.009-.299 4.121-.299 6.326v178.624l-65.909-6.532v-147.509c0-17.072 13.837-30.909 30.909-30.909z" fill="#9ca9ba"/><path d="m313.676 222.484-18.885 196.428h-135.794l-51.732-35.968-14.177-142.46 65.909-5.379z" fill="#c5ced6"/><path d="m93.088 240.484 65.909-5.378v183.807h-35c-17.072 0-30.909-13.837-30.909-30.909z" fill="#abb6c4"/><path d="m418.912 240.484v147.519c0 17.072-13.837 30.909-30.909 30.909h-62.19l-12.137-196.428z" fill="#64768e"/><path d="m287.487 480.971h-62.974c-8.317 0-15.059-6.742-15.059-15.059v-.913c0-8.317 6.742-15.059 15.059-15.059h62.974c8.317 0 15.059 6.742 15.059 15.059v.913c0 8.316-6.743 15.059-15.059 15.059z" fill="#64768e"/><path d="m418.912 209.451v31.033h-77.644c-8.531 0-15.455 6.924-15.455 15.455v162.974h-31.022v-162.975c0-8.531-6.923-15.455-15.455-15.455h-120.34l-13.147-13.27 13.147-17.763h44.138c6.718 0 12.673-4.348 14.723-10.746l53.658-167.672h31.033l-50.65 158.255c-3.183 9.974 4.255 20.163 14.723 20.163h152.291z" fill="#e8ecf9"/><path d="m93.088 209.451h65.909v31.033h-65.909z" fill="#d7ddf5"/><g><g><path d="m129.509 332.474c-4.268 0-7.727-3.459-7.727-7.727v-12.364c0-4.268 3.459-7.727 7.727-7.727s7.727 3.459 7.727 7.727v12.364c0 4.268-3.459 7.727-7.727 7.727z" fill="#495560"/></g><g><path d="m258.191 332.474c-4.268 0-7.727-3.459-7.727-7.727v-12.364c0-4.268 3.459-7.727 7.727-7.727s7.727 3.459 7.727 7.727v12.364c.001 4.268-3.458 7.727-7.727 7.727z" fill="#495560"/></g><path d="m223.825 324.391c-4.268 0-7.727 3.459-7.727 7.727 0 3.952-3.215 7.167-7.166 7.167-3.952 0-7.167-3.215-7.167-7.167 0-4.268-3.459-7.727-7.727-7.727s-7.727 3.459-7.727 7.727c0 3.952-3.215 7.167-7.166 7.167-3.952 0-7.167-3.215-7.167-7.167 0-4.268-3.459-7.727-7.727-7.727s-7.727 3.459-7.727 7.727c0 12.473 10.148 22.621 22.621 22.621 5.7 0 10.911-2.124 14.894-5.616 3.982 3.492 9.193 5.616 14.894 5.616 12.473 0 22.62-10.148 22.62-22.621-.001-4.268-3.46-7.727-7.728-7.727z" fill="#495560"/></g></g></svg>',W2=`<?xml version="1.0" encoding="UTF-8"?><svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 511.941 511.941" style="enable-background: new 0 0 511.941 511.941" xml:space="preserve" width="512" height="512"><g><g><path style="fill: #808fa4" d="M444.211,67.5v376.94c0,33.14-26.87,60-60,60H127.73c-33.13,0-60-26.86-60-60V67.5&#10;&#9;&#9;&#9;c0-33.14,26.87-60,60-60h256.48C417.341,7.5,444.211,34.361,444.211,67.5z"/><path style="fill: #64768e" d="M190.421,504.44h-62.69c-33.13,0-60-26.86-60-60V67.5c0-33.14,26.87-60,60-60h48.86&#10;&#9;&#9;&#9;c-7.15,6.38-14.77,17.56-14.77,36.26v411.44C161.821,455.201,161.611,484.551,190.421,504.44z"/><path style="fill: #c5ced6" d="M414.091,67.62v143.17l-188.56,12.65l75.62-185.82h82.94&#10;&#9;&#9;&#9;C400.661,37.62,414.091,51.051,414.091,67.62z"/><polygon style="fill: #abb6c4" points="271.031,37.62 225.531,223.44 161.821,217.131 97.85,210.79 118.08,74.5 162.111,37.62 &#9;&#9;&#10;&#9;&#9;&#9;"/><path style="fill: #9ca9ba" d="M162.111,37.62c-0.19,1.95-0.29,4-0.29,6.14v173.37l-63.97-6.34V67.62c0-16.57,13.43-30,30-30&#10;&#9;&#9;&#9;H162.111z"/><polygon style="fill: #c5ced6" points="311.951,223.44 293.62,414.091 161.821,414.091 111.611,379.181 97.85,240.911 &#10;&#9;&#9;&#9;161.821,235.69 &#9;&#9;"/><path style="fill: #abb6c4" d="M97.85,240.911l63.97-5.22v178.4h-33.97c-16.57,0-30-13.43-30-30V240.911z"/><path style="fill: #64768e" d="M414.091,240.911v143.18c0,16.57-13.43,30-30,30h-60.36l-11.78-190.65L414.091,240.911z"/><path style="fill: #64768e" d="M286.088,474.324h-60.235c-8.317,0-15.059-6.742-15.059-15.059v0&#10;&#9;&#9;&#9;c0-8.317,6.742-15.059,15.059-15.059h60.235c8.317,0,15.059,6.742,15.059,15.059v0&#10;&#9;&#9;&#9;C301.147,467.581,294.405,474.324,286.088,474.324z"/><path style="fill: #e8ecf9" d="M414.091,210.79v30.12h-75.36c-8.28,0-15,6.72-15,15v158.18h-30.11v-158.18c0-8.28-6.72-15-15-15&#10;&#9;&#9;&#9;h-116.8l-12.76-12.88l12.76-17.24h42.84c6.52,0,12.3-4.22,14.29-10.43l52.08-162.74h30.12l-49.16,153.6&#10;&#9;&#9;&#9;c-3.09,9.68,4.13,19.57,14.29,19.57H414.091z"/><rect x="97.85" y="210.79" style="fill: #d7ddf5" width="63.97" height="30.12"/></g><g><path style="\r
          fill: none;\r
          stroke: #000000;\r
          stroke-width: 15;\r
          stroke-linecap: round;\r
          stroke-linejoin: round;\r
          stroke-miterlimit: 10;\r
        " d="&#10;&#9;&#9;&#9;M384.206,504.441H127.735c-33.137,0-60-26.863-60-60V67.5c0-33.137,26.863-60,60-60h256.471c33.137,0,60,26.863,60,60v376.941&#10;&#9;&#9;&#9;C444.206,477.578,417.343,504.441,384.206,504.441z"/><path style="\r
          fill: none;\r
          stroke: #000000;\r
          stroke-width: 15;\r
          stroke-linecap: round;\r
          stroke-linejoin: round;\r
          stroke-miterlimit: 10;\r
        " d="&#10;&#9;&#9;&#9;M384.088,414.088H127.853c-16.569,0-30-13.431-30-30V67.618c0-16.569,13.431-30,30-30h256.235c16.569,0,30,13.431,30,30v316.471&#10;&#9;&#9;&#9;C414.088,400.657,400.657,414.088,384.088,414.088z"/><path style="\r
          fill: none;\r
          stroke: #000000;\r
          stroke-width: 15;\r
          stroke-linecap: round;\r
          stroke-linejoin: round;\r
          stroke-miterlimit: 10;\r
        " d="&#10;&#9;&#9;&#9;M286.088,474.324h-60.235c-8.317,0-15.059-6.742-15.059-15.059c0-8.317,6.742-15.059,15.059-15.059h60.235&#10;&#9;&#9;&#9;c8.317,0,15.059,6.742,15.059,15.059C301.147,467.581,294.405,474.324,286.088,474.324z"/><path style="\r
          fill: none;\r
          stroke: #000000;\r
          stroke-width: 15;\r
          stroke-linecap: round;\r
          stroke-linejoin: round;\r
          stroke-miterlimit: 10;\r
        " d="&#10;&#9;&#9;&#9;M100.85,210.79h103.811c6.523,0,12.298-4.215,14.286-10.428L270.56,39.09"/><path style="\r
          fill: none;\r
          stroke: #000000;\r
          stroke-width: 15;\r
          stroke-linecap: round;\r
          stroke-linejoin: round;\r
          stroke-miterlimit: 10;\r
        " d="&#10;&#9;&#9;&#9;M293.62,410.091v-154.18c0-8.284-6.716-15-15-15H100.85"/><path style="\r
          fill: none;\r
          stroke: #000000;\r
          stroke-width: 15;\r
          stroke-linecap: round;\r
          stroke-linejoin: round;\r
          stroke-miterlimit: 10;\r
        " d="&#10;&#9;&#9;&#9;M411.091,240.911h-72.36c-8.284,0-15,6.716-15,15v154.18"/><path style="\r
          fill: none;\r
          stroke: #000000;\r
          stroke-width: 15;\r
          stroke-linecap: round;\r
          stroke-linejoin: round;\r
          stroke-miterlimit: 10;\r
        " d="&#10;&#9;&#9;&#9;M300.616,39.291l-48.622,151.927c-3.098,9.679,4.124,19.572,14.286,19.572h144.81"/><g><line style="\r
            fill: none;\r
            stroke: #000000;\r
            stroke-width: 15;\r
            stroke-linecap: round;\r
            stroke-linejoin: round;\r
            stroke-miterlimit: 10;\r
          " x1="133.2" y1="310.695" x2="133.2" y2="322.695"/><line style="\r
            fill: none;\r
            stroke: #000000;\r
            stroke-width: 15;\r
            stroke-linecap: round;\r
            stroke-linejoin: round;\r
            stroke-miterlimit: 10;\r
          " x1="258.098" y1="310.695" x2="258.098" y2="322.695"/><g><path style="\r
              fill: none;\r
              stroke: #000000;\r
              stroke-width: 15;\r
              stroke-linecap: round;\r
              stroke-miterlimit: 10;\r
            " d="M195.831,329.85&#10;&#9;&#9;&#9;&#9;&#9;c0,7.984-6.472,14.456-14.456,14.456s-14.456-6.472-14.456-14.456"/><path style="\r
              fill: none;\r
              stroke: #000000;\r
              stroke-width: 15;\r
              stroke-linecap: round;\r
              stroke-miterlimit: 10;\r
            " d="M224.742,329.85&#10;&#9;&#9;&#9;&#9;&#9;c0,7.984-6.472,14.456-14.456,14.456s-14.456-6.472-14.456-14.456"/></g></g></g></g></svg>`,U2='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-external-link" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6"/><path d="M11 13l9 -9"/><path d="M15 4h5v5"/></svg>',V2='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-eye" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"/><path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6"/></svg>',q2='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-eye-off" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10.585 10.587a2 2 0 0 0 2.829 2.828"/><path d="M16.681 16.673a8.717 8.717 0 0 1 -4.681 1.327c-3.6 0 -6.6 -2 -9 -6c1.272 -2.12 2.712 -3.678 4.32 -4.674m2.86 -1.146a9.055 9.055 0 0 1 1.82 -.18c3.6 0 6.6 2 9 6c-.666 1.11 -1.379 2.067 -2.138 2.87"/><path d="M3 3l18 18"/></svg>',Z2='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-file-download" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M14 3v4a1 1 0 0 0 1 1h4"/><path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"/><path d="M12 17v-6"/><path d="M9.5 14.5l2.5 2.5l2.5 -2.5"/></svg>',j2='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-file-percent"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 17l4 -4"/><path d="M14 3v4a1 1 0 0 0 1 1h4"/><path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"/><path d="M10 13h.01"/><path d="M14 17h.01"/></svg>',K2='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-folder-open"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 19l2.757 -7.351a1 1 0 0 1 .936 -.649h12.307a1 1 0 0 1 .986 1.164l-.996 5.211a2 2 0 0 1 -1.964 1.625h-14.026a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 2 -2h4l3 3h7a2 2 0 0 1 2 2v2" /></svg>',Y2='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-hand-click"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8 13v-8.5a1.5 1.5 0 0 1 3 0v7.5"/><path d="M11 11.5v-2a1.5 1.5 0 0 1 3 0v2.5"/><path d="M14 10.5a1.5 1.5 0 0 1 3 0v1.5"/><path d="M17 11.5a1.5 1.5 0 0 1 3 0v4.5a6 6 0 0 1 -6 6h-2h.208a6 6 0 0 1 -5.012 -2.7l-.196 -.3c-.312 -.479 -1.407 -2.388 -3.286 -5.728a1.5 1.5 0 0 1 .536 -2.022a1.867 1.867 0 0 1 2.28 .28l1.47 1.47"/><path d="M5 3l-1 -1"/><path d="M4 7h-1"/><path d="M14 3l1 -1"/><path d="M15 6h1"/></svg>',X2='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-help"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"/><path d="M12 17l0 .01"/><path d="M12 13.5a1.5 1.5 0 0 1 1 -1.5a2.6 2.6 0 1 0 -3 -4"/></svg>',J2='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-info-circle"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"/><path d="M12 9h.01"/><path d="M11 12h1v4h1"/></svg>',Q2='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-keyboard" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M2 6m0 2a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-16a2 2 0 0 1 -2 -2z"/><path d="M6 10l0 .01"/><path d="M10 10l0 .01"/><path d="M14 10l0 .01"/><path d="M18 10l0 .01"/><path d="M6 14l0 .01"/><path d="M18 14l0 .01"/><path d="M10 14l4 .01"/></svg>',eg='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-layout-bottombar"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"/><path d="M4 15l16 0"/></svg>',tg='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-layout-bottombar-inactive"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z"/><path d="M4 15h1"/><path d="M19 15h1"/><path d="M9 15h1"/><path d="M14 15h1"/></svg>',rg='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-layout-dashboard"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 4h4a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1" /><path d="M5 16h4a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1v-2a1 1 0 0 1 1 -1" /><path d="M15 12h4a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1" /><path d="M15 4h4a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1v-2a1 1 0 0 1 1 -1" /></svg>',ng='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-layout-sidebar"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"/><path d="M9 4l0 16"/></svg>',og='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-layout-sidebar-inactive"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z"/><path d="M9 4v1"/><path d="M9 9v1"/><path d="M9 14v1"/><path d="M9 19v1"/></svg>',ig='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-layout-sidebar-right"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"/><path d="M15 4l0 16"/></svg>',ag='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-layout-sidebar-right-inactive"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z"/><path d="M15 4v1"/><path d="M15 9v1"/><path d="M15 14v1"/><path d="M15 19v1"/></svg>',sg='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-list-numbers" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M11 6h9"/><path d="M11 12h9"/><path d="M12 18h8"/><path d="M4 16a2 2 0 1 1 4 0c0 .591 -.5 1 -1 1.5l-3 2.5h4"/><path d="M6 10v-6l-2 2"/></svg>',lg='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-loader-2" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 3a9 9 0 1 0 9 9"/></svg>',cg='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-location-cog"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 18l-2 -4l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5l-3.14 8.697"/><path d="M19.001 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"/><path d="M19.001 15.5v1.5"/><path d="M19.001 21v1.5"/><path d="M22.032 17.25l-1.299 .75"/><path d="M17.27 20l-1.3 .75"/><path d="M15.97 17.25l1.3 .75"/><path d="M20.733 20l1.3 .75"/></svg>',dg='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-menu-2" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 6l16 0"/><path d="M4 12l16 0"/><path d="M4 18l16 0"/></svg>',ug='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-menu-deep"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 6h16"/><path d="M7 12h13"/><path d="M10 18h10"/></svg>',hg='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-message" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8 9h8"/><path d="M8 13h6"/><path d="M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-5l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12z"/></svg>',fg='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-moon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z"/></svg>',pg='<svg id="Capa_1" enable-background="new 0 0 512 512" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><g><path d="m449.945 61.818v388.363c0 34.144-27.684 61.818-61.818 61.818h-264.253c-34.134 0-61.818-27.674-61.818-61.818v-388.363c-.001-34.144 27.684-61.818 61.818-61.818h264.253c34.133 0 61.818 27.674 61.818 61.818z" fill="#e8ecf9"/><path d="m207.555 512h-83.681c-34.134 0-61.818-27.674-61.818-61.818v-388.364c-.001-34.144 27.684-61.818 61.818-61.818h79.993c-11.292 3.421-26.809 12.446-26.809 36.256v436.87c0 26.479 19.854 35.783 30.497 38.874z" fill="#d7ddf5"/><path d="m403.396 62.004v139.751c0 8.541-6.924 15.455-15.455 15.455h-210.883l-51.556-21.729v-124.699l51.556-24.233h210.883c8.531 0 15.455 6.913 15.455 15.455z" fill="#c5ced6"/><path d="m177.058 46.549v170.66h-52.999c-8.531 0-15.455-6.913-15.455-15.455v-139.75c0-8.541 6.924-15.455 15.455-15.455z" fill="#abb6c4"/><path d="m217.209 279.213v8.036l-40.151 41.769-8.809 9.17-59.644 4.307 12.333-53.195 56.121-25.541h24.696c8.541-.001 15.454 6.923 15.454 15.454z" fill="#c5ced6"/><path d="m124.059 263.758h52.999v65.26l-8.809 9.17-59.644 4.307v-63.281c-.001-8.532 6.923-15.456 15.454-15.456z" fill="#abb6c4"/><path d="m217.209 334.365v60.407l-40.151 43.438-4.204 4.543-64.25-8.634 8.573-21.379-8.573-26.551 50.743-51.824z" fill="#c5ced6"/><path d="m177.058 334.365v103.845l-4.204 4.543-64.25-8.634v-47.93l50.743-51.824z" fill="#abb6c4"/><path d="m217.209 287.249v47.116c-2.823 1.731-5.121 4.368-6.388 7.696-2.359 6.182-8.253 9.984-14.496 9.984-1.844 0-3.719-.33-5.543-1.03-.546-.206-1.092-.381-1.638-.525-1.298-.34-2.596-.505-3.895-.505-2.916 0-5.749.824-8.191 2.339l-11.045-14.888 11.045-32.29c1.03.165 2.061.433 3.07.824.587.227 1.175.412 1.772.556 1.247.319 2.514.474 3.771.474 6.244 0 12.137-3.802 14.496-9.984.082-.206.165-.412.258-.608 2.493-5.821 8.191-9.376 14.239-9.376.845.001 1.69.073 2.545.217z" fill="#808fa4"/><path d="m177.058 305.146v47.178c-2.782 1.731-5.049 4.348-6.305 7.645-.196.505-.402.989-.649 1.453-2.669 5.316-8.108 8.521-13.847 8.521-.309 0-.618-.01-.927-.031-1.535-.093-3.091-.412-4.605-.999-1.824-.701-3.699-1.03-5.543-1.03-6.244 0-12.137 3.802-14.496 9.984s-8.242 9.984-14.496 9.984c-1.834 0-3.709-.33-5.533-1.03-.68-.258-1.36-.474-2.05-.628v-43.695c5.038-1.02 9.458-4.523 11.426-9.674 2.359-6.182 8.253-9.984 14.496-9.984 1.844 0 3.709.33 5.533 1.03 1.824.701 3.709 1.03 5.553 1.03 1.113 0 2.226-.124 3.297-.361 2.895-.629 5.574-2.081 7.686-4.193 1.494-1.494 2.699-3.318 3.503-5.419 2.359-6.182 8.242-9.984 14.496-9.984.813-.003 1.637.058 2.461.203z" fill="#64768e"/><path d="m217.209 394.772v55.224c0 8.541-6.913 15.455-15.455 15.455h-24.696l-15.516-24.284 15.516-28.426c1.885-1.618 3.4-3.719 4.348-6.202 2.359-6.172 8.253-9.973 14.496-9.973 1.844 0 3.719.33 5.543 1.03 1.824.701 3.689 1.03 5.533 1.03 1.175 0 2.349-.134 3.472-.402h.01c2.494-.578 4.822-1.762 6.749-3.452z" fill="#808fa4"/><path d="m166.91 416.522c3.74 0 7.346-1.36 10.148-3.781v52.71h-52.999c-8.531 0-15.455-6.913-15.455-15.455v-15.877c3.802-1.968 8.397-2.37 12.704-.721 1.824.701 3.699 1.03 5.543 1.03 6.244 0 12.137-3.802 14.496-9.984s8.242-9.984 14.496-9.984c1.834 0 3.709.33 5.533 1.03 1.824.702 3.7 1.032 5.534 1.032z" fill="#64768e"/><path d="m403.396 351.612v98.384c0 8.541-6.924 15.455-15.455 15.455h-69.051l-55.132-93.686v-92.552c0-8.531 6.924-15.455 15.455-15.455h62.91z" fill="#808fa4"/><path d="m380.121 333.572-61.231 131.879h-39.677c-8.531 0-15.455-6.913-15.455-15.455v-78.231l77.572-53.699z" fill="#abb6c4"/><path d="m403.396 279.213v72.4c-7.058 3.359-14.95 5.234-23.275 5.234-3.534 0-6.996-.34-10.344-.989-17.34-3.338-31.744-14.929-38.956-30.518-3.215-6.924-5.007-14.651-5.007-22.79 0-15.197 6.244-28.941 16.31-38.791h45.818c8.53-.001 15.454 6.923 15.454 15.454z" fill="#c5ced6"/><g><g><ellipse cx="172.744" cy="147.233" fill="#fff" rx="30.72" ry="24.464"/><ellipse cx="339.256" cy="147.233" fill="#fff" rx="30.72" ry="24.464"/><path d="m285.787 117.781c-4.268 0-7.727 3.46-7.727 7.727 0 3.952-3.215 7.166-7.166 7.166s-7.166-3.215-7.166-7.166c0-4.268-3.46-7.727-7.727-7.727-4.268 0-7.727 3.46-7.727 7.727 0 3.952-3.215 7.166-7.166 7.166-3.952 0-7.166-3.215-7.166-7.166 0-4.268-3.46-7.727-7.727-7.727-4.268 0-7.727 3.46-7.727 7.727 0 12.473 10.148 22.621 22.621 22.621 5.701 0 10.911-2.124 14.894-5.616 3.982 3.492 9.193 5.616 14.894 5.616 12.473 0 22.621-10.148 22.621-22.621-.003-4.267-3.463-7.727-7.731-7.727z" fill="#495560"/></g><g><path d="m206.795 121.062c-4.268 0-7.727-3.46-7.727-7.727 0-3.559-2.896-6.454-6.455-6.454s-6.455 2.895-6.455 6.454c0 4.268-3.46 7.727-7.727 7.727-4.268 0-7.727-3.46-7.727-7.727 0-12.081 9.829-21.909 21.91-21.909s21.91 9.828 21.91 21.909c-.001 4.267-3.461 7.727-7.729 7.727z" fill="#495560"/></g><g><path d="m333.569 121.062c-4.268 0-7.727-3.46-7.727-7.727 0-3.559-2.896-6.454-6.455-6.454s-6.455 2.895-6.455 6.454c0 4.268-3.46 7.727-7.727 7.727-4.268 0-7.727-3.46-7.727-7.727 0-12.081 9.829-21.909 21.91-21.909s21.91 9.828 21.91 21.909c-.001 4.267-3.461 7.727-7.729 7.727z" fill="#495560"/></g></g></g></svg>',gg=`<?xml version="1.0" encoding="UTF-8"?><svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 511.94 511.94" style="enable-background: new 0 0 511.94 511.94" xml:space="preserve" width="512" height="512"><g><g><path style="fill: #e8ecf9" d="M444.21,67.5v376.94c0,33.14-26.87,60-60,60H127.73c-33.13,0-60-26.86-60-60V67.5&#10;&#9;&#9;&#9;c0-33.14,26.87-60,60-60h256.48C417.34,7.5,444.21,34.36,444.21,67.5z"/><path style="fill: #d7ddf5" d="M208.95,504.44h-81.22c-33.13,0-60-26.86-60-60V67.5c0-33.14,26.87-60,60-60h77.64&#10;&#9;&#9;&#9;c-10.96,3.32-26.02,12.08-26.02,35.19v424.02C179.35,492.41,198.62,501.44,208.95,504.44z"/><path style="fill: #c5ced6" d="M399.03,67.68v135.64c0,8.29-6.72,15-15,15H179.35l-50.04-21.09V76.2l50.04-23.52h204.68&#10;&#9;&#9;&#9;C392.31,52.68,399.03,59.39,399.03,67.68z"/><path style="fill: #abb6c4" d="M179.35,52.68v165.64h-51.44c-8.28,0-15-6.71-15-15V67.68c0-8.29,6.72-15,15-15H179.35z"/><path style="fill: #c5ced6" d="M218.32,278.5v7.8l-38.97,40.54l-8.55,8.9l-57.89,4.18l11.97-51.63l54.47-24.79h23.97&#10;&#9;&#9;&#9;C211.61,263.5,218.32,270.22,218.32,278.5z"/><path style="fill: #abb6c4" d="M127.91,263.5h51.44v63.34l-8.55,8.9l-57.89,4.18V278.5C112.91,270.22,119.63,263.5,127.91,263.5z"/><polygon style="fill: #c5ced6" points="218.32,332.03 218.32,390.66 179.35,432.82 175.27,437.23 112.91,428.85 121.23,408.1 &#10;&#9;&#9;&#9;112.91,382.33 162.16,332.03 &#9;&#9;"/><polygon style="fill: #abb6c4" points="179.35,332.03 179.35,432.82 175.27,437.23 112.91,428.85 112.91,382.33 162.16,332.03 &#9;&#9;&#10;&#9;&#9;&#9;"/><path style="fill: #808fa4" d="M218.32,286.3v45.73c-2.74,1.68-4.97,4.24-6.2,7.47c-2.29,6-8.01,9.69-14.07,9.69&#10;&#9;&#9;&#9;c-1.79,0-3.61-0.32-5.38-1c-0.53-0.2-1.06-0.37-1.59-0.51c-1.26-0.33-2.52-0.49-3.78-0.49c-2.83,0-5.58,0.8-7.95,2.27&#10;&#9;&#9;&#9;l-10.72-14.45l10.72-31.34c1,0.16,2,0.42,2.98,0.8c0.57,0.22,1.14,0.4,1.72,0.54c1.21,0.31,2.44,0.46,3.66,0.46&#10;&#9;&#9;&#9;c6.06,0,11.78-3.69,14.07-9.69c0.08-0.2,0.16-0.4,0.25-0.59c2.42-5.65,7.95-9.1,13.82-9.1&#10;&#9;&#9;&#9;C216.67,286.09,217.49,286.16,218.32,286.3z"/><path style="fill: #64768e" d="M179.35,303.67v45.79c-2.7,1.68-4.9,4.22-6.12,7.42c-0.19,0.49-0.39,0.96-0.63,1.41&#10;&#9;&#9;&#9;c-2.59,5.16-7.87,8.27-13.44,8.27c-0.3,0-0.6-0.01-0.9-0.03c-1.49-0.09-3-0.4-4.47-0.97c-1.77-0.68-3.59-1-5.38-1&#10;&#9;&#9;&#9;c-6.06,0-11.78,3.69-14.07,9.69s-8,9.69-14.07,9.69c-1.78,0-3.6-0.32-5.37-1c-0.66-0.25-1.32-0.46-1.99-0.61v-42.41&#10;&#9;&#9;&#9;c4.89-0.99,9.18-4.39,11.09-9.39c2.29-6,8.01-9.69,14.07-9.69c1.79,0,3.6,0.32,5.37,1c1.77,0.68,3.6,1,5.39,1&#10;&#9;&#9;&#9;c1.08,0,2.16-0.12,3.2-0.35c2.81-0.61,5.41-2.02,7.46-4.07c1.45-1.45,2.62-3.22,3.4-5.26c2.29-6,8-9.69,14.07-9.69&#10;&#9;&#9;&#9;C177.75,303.47,178.55,303.53,179.35,303.67z"/><path style="fill: #808fa4" d="M218.32,390.66v53.6c0,8.29-6.71,15-15,15h-23.97l-15.06-23.57l15.06-27.59&#10;&#9;&#9;&#9;c1.83-1.57,3.3-3.61,4.22-6.02c2.29-5.99,8.01-9.68,14.07-9.68c1.79,0,3.61,0.32,5.38,1c1.77,0.68,3.58,1,5.37,1&#10;&#9;&#9;&#9;c1.14,0,2.28-0.13,3.37-0.39h0.01C214.19,393.45,216.45,392.3,218.32,390.66z"/><path style="fill: #64768e" d="M169.5,411.77c3.63,0,7.13-1.32,9.85-3.67v51.16h-51.44c-8.28,0-15-6.71-15-15v-15.41&#10;&#9;&#9;&#9;c3.69-1.91,8.15-2.3,12.33-0.7c1.77,0.68,3.59,1,5.38,1c6.06,0,11.78-3.69,14.07-9.69c2.29-6,8-9.69,14.07-9.69&#10;&#9;&#9;&#9;c1.78,0,3.6,0.32,5.37,1C165.9,411.45,167.72,411.77,169.5,411.77z"/><path style="fill: #808fa4" d="M399.03,348.77v95.49c0,8.29-6.72,15-15,15h-67.02l-53.51-90.93V278.5c0-8.28,6.72-15,15-15h61.06&#10;&#9;&#9;&#9;L399.03,348.77z"/><path style="fill: #abb6c4" d="M376.44,331.26l-59.43,128H278.5c-8.28,0-15-6.71-15-15v-75.93l75.29-52.12L376.44,331.26z"/><path style="fill: #c5ced6" d="M399.03,278.5v70.27c-6.85,3.26-14.51,5.08-22.59,5.08c-3.43,0-6.79-0.33-10.04-0.96&#10;&#9;&#9;&#9;c-16.83-3.24-30.81-14.49-37.81-29.62c-3.12-6.72-4.86-14.22-4.86-22.12c0-14.75,6.06-28.09,15.83-37.65h44.47&#10;&#9;&#9;&#9;C392.31,263.5,399.03,270.22,399.03,278.5z"/><g><g><ellipse style="fill: #ffffff" cx="175.162" cy="150.402" rx="29.816" ry="23.744"/><ellipse style="fill: #ffffff" cx="336.778" cy="150.402" rx="29.816" ry="23.744"/></g></g></g><g><path style="\r
          fill: none;\r
          stroke: #000000;\r
          stroke-width: 15;\r
          stroke-linecap: round;\r
          stroke-linejoin: round;\r
          stroke-miterlimit: 10;\r
        " d="&#10;&#9;&#9;&#9;M67.73,402.54v41.9c0,33.14,26.87,60,60,60h256.48c33.13,0,60-26.86,60-60V67.5c0-33.14-26.87-60-60-60H127.73&#10;&#9;&#9;&#9;c-33.13,0-60,26.86-60,60v300.04"/><path style="\r
          fill: none;\r
          stroke: #000000;\r
          stroke-width: 15;\r
          stroke-linecap: round;\r
          stroke-linejoin: round;\r
          stroke-miterlimit: 10;\r
        " d="&#10;&#9;&#9;&#9;M359,52.68h25.03c8.28,0,15,6.71,15,15v135.64c0,8.29-6.72,15-15,15H127.91c-8.28,0-15-6.71-15-15V67.68c0-8.29,6.72-15,15-15H324&#10;&#9;&#9;&#9;"/><path style="\r
          fill: none;\r
          stroke: #000000;\r
          stroke-width: 15;\r
          stroke-linecap: round;\r
          stroke-linejoin: round;\r
          stroke-miterlimit: 10;\r
        " d="&#10;&#9;&#9;&#9;M203.323,459.264h-75.412c-8.284,0-15-6.716-15-15V278.499c0-8.284,6.716-15,15-15h75.412c8.284,0,15,6.716,15,15v165.765&#10;&#9;&#9;&#9;C218.323,452.548,211.607,459.264,203.323,459.264z"/><path style="\r
          fill: none;\r
          stroke: #000000;\r
          stroke-width: 15;\r
          stroke-linecap: round;\r
          stroke-linejoin: round;\r
          stroke-miterlimit: 10;\r
        " d="&#10;&#9;&#9;&#9;M399.03,278.5v165.76c0,8.29-6.72,15-15,15H278.5c-8.28,0-15-6.71-15-15V278.5c0-8.28,6.72-15,15-15h105.53&#10;&#9;&#9;&#9;C392.31,263.5,399.03,270.22,399.03,278.5z"/><line style="\r
          fill: none;\r
          stroke: #000000;\r
          stroke-width: 15;\r
          stroke-linecap: round;\r
          stroke-linejoin: round;\r
          stroke-miterlimit: 10;\r
        " x1="264.641" y1="367.54" x2="327.14" y2="324.275"/><line style="\r
          fill: none;\r
          stroke: #000000;\r
          stroke-width: 15;\r
          stroke-linecap: round;\r
          stroke-linejoin: round;\r
          stroke-miterlimit: 10;\r
        " x1="335.24" y1="420" x2="317.58" y2="458.04"/><line style="\r
          fill: none;\r
          stroke: #000000;\r
          stroke-width: 15;\r
          stroke-linecap: round;\r
          stroke-linejoin: round;\r
          stroke-miterlimit: 10;\r
        " x1="365.42" y1="354.99" x2="349.98" y2="388.25"/><path style="\r
          fill: none;\r
          stroke: #000000;\r
          stroke-width: 15;\r
          stroke-linecap: round;\r
          stroke-linejoin: round;\r
          stroke-miterlimit: 10;\r
        " d="&#10;&#9;&#9;&#9;M337.07,266.11c-14.481,16.226-16.955,38.907-8.48,57.16c12.198,26.365,43.179,37.557,69.06,26.13"/><path style="\r
          fill: none;\r
          stroke: #000000;\r
          stroke-width: 15;\r
          stroke-linecap: round;\r
          stroke-linejoin: round;\r
          stroke-miterlimit: 10;\r
        " d="&#10;&#9;&#9;&#9;M114.09,339.63c4.39-1.26,8.16-4.51,9.91-9.1c2.29-6,8.01-9.69,14.07-9.69c4.907,0,5.826,2,10.76,2&#10;&#9;&#9;&#9;c6.016,0,11.752-3.643,14.06-9.68c2.29-6,8-9.69,14.07-9.69c3.551,0,5.135,1.068,7.09,1.54c7.171,1.837,14.948-1.942,17.73-9.23&#10;&#9;&#9;&#9;c2.653-6.632,8.993-10.222,15.36-9.63"/><path style="\r
          fill: none;\r
          stroke: #000000;\r
          stroke-width: 15;\r
          stroke-linecap: round;\r
          stroke-linejoin: round;\r
          stroke-miterlimit: 10;\r
        " d="&#10;&#9;&#9;&#9;M114.09,382.66c0.973,0.288,2.952,1.28,6.18,1.28c6.07,0,11.78-3.69,14.07-9.69c2.29-6,8.01-9.69,14.07-9.69&#10;&#9;&#9;&#9;c4.605,0,5.534,1.709,9.85,1.97c6.213,0.414,12.476-3.218,14.97-9.65c2.891-7.576,11.422-11.716,19.44-8.69&#10;&#9;&#9;&#9;c7.75,2.977,16.481-0.911,19.45-8.69c1.05-2.75,2.82-5.02,5.02-6.66"/><path style="\r
          fill: none;\r
          stroke: #000000;\r
          stroke-width: 15;\r
          stroke-linecap: round;\r
          stroke-linejoin: round;\r
          stroke-miterlimit: 10;\r
        " d="&#10;&#9;&#9;&#9;M114.09,428.31c3.44-1.43,7.41-1.59,11.15-0.16c7.75,2.977,16.481-0.911,19.45-8.69c2.29-6,8-9.69,14.07-9.69&#10;&#9;&#9;&#9;c4.886,0,5.854,2,10.74,2c6.07,0,11.78-3.69,14.07-9.69c2.29-5.99,8.01-9.68,14.07-9.68c4.907,0,5.856,2,10.75,2&#10;&#9;&#9;&#9;c3.118,0,6.213-0.998,8.75-2.81"/><g><g><g><path style="\r
                fill: none;\r
                stroke: #000000;\r
                stroke-width: 15;\r
                stroke-linecap: round;\r
                stroke-miterlimit: 10;\r
              " d="M255.97,129.317&#10;&#9;&#9;&#9;&#9;&#9;&#9;c0,7.984-6.472,14.456-14.456,14.456c-7.984,0-14.456-6.472-14.456-14.456"/><path style="\r
                fill: none;\r
                stroke: #000000;\r
                stroke-width: 15;\r
                stroke-linecap: round;\r
                stroke-miterlimit: 10;\r
              " d="M284.881,129.317&#10;&#9;&#9;&#9;&#9;&#9;&#9;c0,7.984-6.472,14.456-14.456,14.456c-7.984,0-14.456-6.472-14.456-14.456"/></g></g><path style="\r
            fill: none;\r
            stroke: #000000;\r
            stroke-width: 15;\r
            stroke-linecap: round;\r
            stroke-linejoin: round;\r
            stroke-miterlimit: 10;\r
          " d="&#10;&#9;&#9;&#9;&#9;M208.213,117.501c0-7.602-6.163-13.765-13.765-13.765c-7.602,0-13.765,6.163-13.765,13.765"/><path style="\r
            fill: none;\r
            stroke: #000000;\r
            stroke-width: 15;\r
            stroke-linecap: round;\r
            stroke-linejoin: round;\r
            stroke-miterlimit: 10;\r
          " d="&#10;&#9;&#9;&#9;&#9;M303.727,117.501c0-7.602,6.163-13.765,13.765-13.765c7.602,0,13.765,6.163,13.765,13.765"/></g></g></g></svg>`,mg='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-palette" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 21a9 9 0 0 1 0 -18c4.97 0 9 3.582 9 8c0 1.06 -.474 2.078 -1.318 2.828c-.844 .75 -1.989 1.172 -3.182 1.172h-2.5a2 2 0 0 0 -1 3.75a1.3 1.3 0 0 1 -1 2.25"/><path d="M8.5 10.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"/><path d="M12.5 7.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"/><path d="M16.5 10.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"/></svg>',vg='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-pencil" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4"/><path d="M13.5 6.5l4 4"/></svg>',bg='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-pencil-cog"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4"/><path d="M13.5 6.5l4 4"/><path d="M19.001 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"/><path d="M19.001 15.5v1.5"/><path d="M19.001 21v1.5"/><path d="M22.032 17.25l-1.299 .75"/><path d="M17.27 20l-1.3 .75"/><path d="M15.97 17.25l1.3 .75"/><path d="M20.733 20l1.3 .75"/></svg>',wg='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-photo" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 8h.01"/><path d="M3 6a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3v-12z"/><path d="M3 16l5 -5c.928 -.893 2.072 -.893 3 0l5 5"/><path d="M14 14l1 -1c.928 -.893 2.072 -.893 3 0l3 3"/></svg>',_g='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-photo-off" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 8h.01"/><path d="M7 3h11a3 3 0 0 1 3 3v11m-.856 3.099a2.991 2.991 0 0 1 -2.144 .901h-12a3 3 0 0 1 -3 -3v-12c0 -.845 .349 -1.608 .91 -2.153"/><path d="M3 16l5 -5c.928 -.893 2.072 -.893 3 0l5 5"/><path d="M16.33 12.338c.574 -.054 1.155 .166 1.67 .662l3 3"/><path d="M3 3l18 18" color="orange"/></svg>',yg='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-pin"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 4.5l-4 4l-4 1.5l-1.5 1.5l7 7l1.5 -1.5l1.5 -4l4 -4"/><path d="M9 15l-4.5 4.5"/><path d="M14.5 4l5.5 5.5"/></svg>',kg='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-player-pause" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 5m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v12a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z"/><path d="M14 5m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v12a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z"/></svg>',Eg='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-player-play" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 4v16l13 -8z"/></svg>',Sg='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-refresh" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4"/><path d="M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4"/></svg>',Ag='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-settings" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z"/><path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"/></svg>',Mg='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-settings-off"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9.451 5.437c.418 -.218 .75 -.609 .874 -1.12c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35c-.486 .118 -.894 .44 -1.123 .878m-.188 3.803c-.517 .523 -1.349 .734 -2.125 .262a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.472 -.774 -.262 -1.604 .259 -2.121"/><path d="M9.889 9.869a3 3 0 1 0 4.226 4.26m.592 -3.424a3.012 3.012 0 0 0 -1.419 -1.415"/><path d="M3 3l18 18"/></svg>',xg='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-spacing-horizontal"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M20 20h-2a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h2"/><path d="M4 20h2a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2"/><path d="M12 8v8"/></svg>',Ig='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-spacing-vertical" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 20v-2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v2"/><path d="M4 4v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2"/><path d="M16 12h-8"/></svg>',Cg='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-sun" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"/><path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7"/></svg>',Og='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-trash" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 7l16 0"/><path d="M10 11l0 6"/><path d="M14 11l0 6"/><path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"/><path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"/></svg>',Tg='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-world-cog"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M21 12a9 9 0 1 0 -8.979 9"/><path d="M3.6 9h16.8"/><path d="M3.6 15h8.9"/><path d="M11.5 3a17 17 0 0 0 0 18"/><path d="M12.5 3a16.992 16.992 0 0 1 2.522 10.376"/><path d="M19.001 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"/><path d="M19.001 15.5v1.5"/><path d="M19.001 21v1.5"/><path d="M22.032 17.25l-1.299 .75"/><path d="M17.27 20l-1.3 .75"/><path d="M15.97 17.25l1.3 .75"/><path d="M20.733 20l1.3 .75"/></svg>',Lg='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-x" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 6l-12 12"/><path d="M6 6l12 12"/></svg>',Rg='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-zoom"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"/><path d="M21 21l-6 -6"/></svg>',Pg='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-zoom-cancel" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"/><path d="M8 8l4 4"/><path d="M12 8l-4 4"/><path d="M21 21l-6 -6"/></svg>',$g='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-zoom-in" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"/><path d="M7 10l6 0"/><path d="M10 7l0 6"/><path d="M21 21l-6 -6"/></svg>',zg='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-zoom-in-area" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 13v4"/><path d="M13 15h4"/><path d="M15 15m-5 0a5 5 0 1 0 10 0a5 5 0 1 0 -10 0"/><path d="M22 22l-3 -3"/><path d="M6 18h-1a2 2 0 0 1 -2 -2v-1"/><path d="M3 11v-1"/><path d="M3 6v-1a2 2 0 0 1 2 -2h1"/><path d="M10 3h1"/><path d="M15 3h1a2 2 0 0 1 2 2v1"/></svg>',Dg='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-zoom-out" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"/><path d="M7 10l6 0"/><path d="M21 21l-6 -6"/></svg>',Ng='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-zoom-out-area" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M13 15h4"/><path d="M15 15m-5 0a5 5 0 1 0 10 0a5 5 0 1 0 -10 0"/><path d="M22 22l-3 -3"/><path d="M6 18h-1a2 2 0 0 1 -2 -2v-1"/><path d="M3 11v-1"/><path d="M3 6v-1a2 2 0 0 1 2 -2h1"/><path d="M10 3h1"/><path d="M15 3h1a2 2 0 0 1 2 2v1"/></svg>',Bg='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-zoom-pan" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"/><path d="M17 17l-2.5 -2.5"/><path d="M10 5l2 -2l2 2"/><path d="M19 10l2 2l-2 2"/><path d="M5 10l-2 2l2 2"/><path d="M10 19l2 2l2 -2"/></svg>',Hg=td({IconAdjustmentsHorizontal:()=>t2,IconAlertCircle:()=>r2,IconApiBook:()=>n2,IconArrowAutofitDown:()=>o2,IconArrowAutofitHeight:()=>i2,IconArrowAutofitLeft:()=>a2,IconArrowAutofitRight:()=>s2,IconArrowAutofitWidth:()=>l2,IconArrowBigLeft:()=>c2,IconArrowBigRight:()=>d2,IconArrowsHorizontal:()=>u2,IconArrowsLeftRight:()=>h2,IconArrowsMove:()=>f2,IconArrowsMoveVertical:()=>p2,IconArrowsVertical:()=>g2,IconBook:()=>m2,IconBookArrowLeft:()=>v2,IconBookArrowRight:()=>b2,IconBookOff:()=>w2,IconBookUpload:()=>_2,IconBookmark:()=>y2,IconBookmarkOff:()=>k2,IconBookmarks:()=>E2,IconBooksReturn:()=>S2,IconBoxAlignTop:()=>A2,IconCategory:()=>L2,IconCheck:()=>R2,IconChevronLeft:()=>P2,IconChevronRight:()=>$2,IconCircleCheck:()=>z2,IconCircleX:()=>D2,IconComic1:()=>x2,IconComic1Flat:()=>M2,IconComic2:()=>C2,IconComic2Flat:()=>I2,IconComic3:()=>T2,IconComic3Flat:()=>O2,IconDeviceFloppy:()=>N2,IconDotsVertical:()=>B2,IconEReader1:()=>F2,IconEReader1Flat:()=>H2,IconEReader2:()=>W2,IconEReader2Flat:()=>G2,IconExternalLink:()=>U2,IconEye:()=>V2,IconEyeOff:()=>q2,IconFileDownload:()=>Z2,IconFilePercent:()=>j2,IconFolderOpen:()=>K2,IconHandClick:()=>Y2,IconHelp:()=>X2,IconInfoCircle:()=>J2,IconKeyboard:()=>Q2,IconLayoutBottombar:()=>eg,IconLayoutBottombarInactive:()=>tg,IconLayoutDashboard:()=>rg,IconLayoutSidebar:()=>ng,IconLayoutSidebarInactive:()=>og,IconLayoutSidebarRight:()=>ig,IconLayoutSidebarRightInactive:()=>ag,IconListNumbers:()=>sg,IconLoader2:()=>lg,IconLocationCog:()=>cg,IconMenu2:()=>dg,IconMenuDeep:()=>ug,IconMessage:()=>hg,IconMoon:()=>fg,IconPage:()=>gg,IconPageFlat:()=>pg,IconPalette:()=>mg,IconPencil:()=>vg,IconPencilCog:()=>bg,IconPhoto:()=>wg,IconPhotoOff:()=>_g,IconPin:()=>yg,IconPlayerPause:()=>kg,IconPlayerPlay:()=>Eg,IconRefresh:()=>Sg,IconSettings:()=>Ag,IconSettingsOff:()=>Mg,IconSpacingHorizontal:()=>xg,IconSpacingVertical:()=>Ig,IconSun:()=>Cg,IconTrash:()=>Og,IconWorldCog:()=>Tg,IconX:()=>Lg,IconZoom:()=>Rg,IconZoomCancel:()=>Pg,IconZoomIn:()=>$g,IconZoomInArea:()=>zg,IconZoomOut:()=>Dg,IconZoomOutArea:()=>Ng,IconZoomPan:()=>Bg}),Us=td({IconAdjustmentsHorizontal:()=>Zg,IconAlertCircle:()=>ym,IconApiBook:()=>jg,IconArrowAutofitDown:()=>Xg,IconArrowAutofitHeight:()=>Jg,IconArrowAutofitLeft:()=>Qg,IconArrowAutofitRight:()=>em,IconArrowAutofitWidth:()=>tm,IconArrowBigLeft:()=>rm,IconArrowBigRight:()=>nm,IconArrowsHorizontal:()=>Kg,IconArrowsLeftRight:()=>Yg,IconArrowsMove:()=>om,IconArrowsMoveVertical:()=>im,IconArrowsVertical:()=>am,IconBook:()=>sm,IconBookArrowLeft:()=>cm,IconBookArrowRight:()=>dm,IconBookOff:()=>lm,IconBookUpload:()=>hm,IconBookmark:()=>fm,IconBookmarkOff:()=>pm,IconBookmarks:()=>gm,IconBooksReturn:()=>um,IconBoxAlignTop:()=>mm,IconCategory:()=>vm,IconCheck:()=>bm,IconChevronLeft:()=>wm,IconChevronRight:()=>_m,IconCircleCheck:()=>km,IconCircleX:()=>Em,IconComic1:()=>Mm,IconComic1Flat:()=>xm,IconComic2:()=>Im,IconComic2Flat:()=>Cm,IconComic3:()=>Om,IconComic3Flat:()=>Tm,IconDeviceFloppy:()=>Lm,IconDotsVertical:()=>Rm,IconEReader1:()=>Pm,IconEReader1Flat:()=>$m,IconEReader2:()=>zm,IconEReader2Flat:()=>Dm,IconExternalLink:()=>Nm,IconEye:()=>Bm,IconEyeOff:()=>Hm,IconFileDownload:()=>Fm,IconFilePercent:()=>Gm,IconFolderOpen:()=>Wm,IconHandClick:()=>Um,IconHelp:()=>Sm,IconInfoCircle:()=>Am,IconKeyboard:()=>Vm,IconLayoutBottombar:()=>Zm,IconLayoutBottombarInactive:()=>jm,IconLayoutDashboard:()=>qm,IconLayoutSidebar:()=>Km,IconLayoutSidebarInactive:()=>Ym,IconLayoutSidebarRight:()=>Xm,IconLayoutSidebarRightInactive:()=>Jm,IconListNumbers:()=>Qm,IconLoader2:()=>e5,IconLocationCog:()=>t5,IconMenu2:()=>r5,IconMenuDeep:()=>n5,IconMessage:()=>o5,IconMoon:()=>i5,IconPage:()=>a5,IconPageFlat:()=>s5,IconPalette:()=>l5,IconPencil:()=>c5,IconPencilCog:()=>d5,IconPhoto:()=>Vs,IconPhotoOff:()=>qs,IconPin:()=>u5,IconPlayerPause:()=>h5,IconPlayerPlay:()=>f5,IconRefresh:()=>p5,IconSettings:()=>g5,IconSettingsOff:()=>m5,IconSpacingHorizontal:()=>v5,IconSpacingVertical:()=>b5,IconSun:()=>w5,IconTrash:()=>_5,IconWorldCog:()=>y5,IconX:()=>k5,IconZoom:()=>E5,IconZoomCancel:()=>S5,IconZoomIn:()=>A5,IconZoomInArea:()=>M5,IconZoomOut:()=>x5,IconZoomOutArea:()=>I5,IconZoomPan:()=>C5});function Fg(e){return[...e.matchAll(/([^{}]+)\s*\{([^}]+)\}/g)].map(t=>{const r=t[1].trim(),i=t[2],a=/color:\s*([^;]+)/.exec(i);if(a){const s=a[1].trim();return{selectors:r.split(",").map(l=>l.trim().replace(/\s\s+/g," ")),color:s}}return null}).filter(t=>t!==null)}var Gg=Fg(e2),ea=new Map;for(const e of Gg)for(const t of e.selectors){const r=t.match(/^\s*\.([^ ]+)\s*(.*)$/);if(!r)continue;const[,i,a]=r;let s=a.trim();s.startsWith(">")&&(s=s.substring(1).trim()),s===""&&(s="*"),ea.has(i)||ea.set(i,[]),ea.get(i)?.push({subSelector:s,color:e.color})}var Wg=new DOMParser,Ug=new XMLSerializer;function Vg(e,t){const r=ea.get(t);if(!r?.length)return e;const i=Wg.parseFromString(e,"image/svg+xml").documentElement;if(i.querySelector("parsererror"))return console.error(`Error parsing SVG for ${t}`),e;for(const{subSelector:a,color:s}of r)try{i.querySelectorAll(a).forEach(l=>{l.setAttribute("stroke",s)})}catch(l){console.error(`Invalid selector "${a}" for ${t}`,l)}return Ug.serializeToString(i)}var qg=xe.default.mapValues(Hg,(e,t)=>Vg(e,`icon-tabler-${xe.default.kebabCase(t.replace(/^Icon/,""))}`)),{IconAdjustmentsHorizontal:Zg,IconApiBook:jg,IconArrowsHorizontal:Kg,IconArrowsLeftRight:Yg,IconArrowAutofitDown:Xg,IconArrowAutofitHeight:Jg,IconArrowAutofitLeft:Qg,IconArrowAutofitRight:em,IconArrowAutofitWidth:tm,IconArrowBigLeft:rm,IconArrowBigRight:nm,IconArrowsMove:om,IconArrowsMoveVertical:im,IconArrowsVertical:am,IconBook:sm,IconBookOff:lm,IconBookArrowLeft:cm,IconBookArrowRight:dm,IconBooksReturn:um,IconBookUpload:hm,IconBookmark:fm,IconBookmarkOff:pm,IconBookmarks:gm,IconBoxAlignTop:mm,IconCategory:vm,IconCheck:bm,IconChevronLeft:wm,IconChevronRight:_m,IconAlertCircle:ym,IconCircleCheck:km,IconCircleX:Em,IconHelp:Sm,IconInfoCircle:Am,IconComic1:Mm,IconComic1Flat:xm,IconComic2:Im,IconComic2Flat:Cm,IconComic3:Om,IconComic3Flat:Tm,IconDeviceFloppy:Lm,IconDotsVertical:Rm,IconEReader1:Pm,IconEReader1Flat:$m,IconEReader2:zm,IconEReader2Flat:Dm,IconExternalLink:Nm,IconEye:Bm,IconEyeOff:Hm,IconFileDownload:Fm,IconFilePercent:Gm,IconFolderOpen:Wm,IconHandClick:Um,IconKeyboard:Vm,IconLayoutDashboard:qm,IconLayoutBottombar:Zm,IconLayoutBottombarInactive:jm,IconLayoutSidebar:Km,IconLayoutSidebarInactive:Ym,IconLayoutSidebarRight:Xm,IconLayoutSidebarRightInactive:Jm,IconListNumbers:Qm,IconLoader2:e5,IconLocationCog:t5,IconMenu2:r5,IconMenuDeep:n5,IconMessage:o5,IconMoon:i5,IconPage:a5,IconPageFlat:s5,IconPalette:l5,IconPencil:c5,IconPencilCog:d5,IconPhoto:Vs,IconPhotoOff:qs,IconPin:u5,IconPlayerPause:h5,IconPlayerPlay:f5,IconRefresh:p5,IconSettings:g5,IconSettingsOff:m5,IconSpacingHorizontal:v5,IconSpacingVertical:b5,IconSun:w5,IconTrash:_5,IconWorldCog:y5,IconX:k5,IconZoom:E5,IconZoomCancel:S5,IconZoomIn:A5,IconZoomInArea:M5,IconZoomOut:x5,IconZoomOutArea:I5,IconZoomPan:C5}=qg;function z(e,t,r,i){var a=arguments.length,s=a<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,r):i,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(e,t,r,i);else for(var h=e.length-1;h>=0;h--)(l=e[h])&&(s=(a<3?l(s):a>3?l(t,r,s):l(t,r))||s);return a>3&&s&&Object.defineProperty(t,r,s),s}var Vn=class extends Je{constructor(...t){super(...t),this.name="",this.variant="regular",this.family="classic",this.label="",this.size=""}static{this.styles=yt`
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
  `}updated(t){super.updated(t),t.has("name")&&(Us[Bd(this.name)]?(this.dispatchEvent(new CustomEvent("load",{bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent("wa-load",{bubbles:!0,composed:!0}))):(this.dispatchEvent(new CustomEvent("error",{bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent("wa-error",{bubbles:!0,composed:!0}))))}render(){const t=Us[Bd(this.name)];if(!t)return Be;const r=this.size?`--mov-icon-size: ${this.size};`:"";return oe`<span
      role=${this.label?"img":Be}
      aria-label=${this.label||Be}
      aria-hidden=${this.label?Be:"true"}
      style=${r}
      >${Nd(t)}</span
    >`}};z([j({type:String})],Vn.prototype,"name",void 0),z([j({type:String,reflect:!0})],Vn.prototype,"variant",void 0),z([j({type:String,reflect:!0})],Vn.prototype,"family",void 0),z([j({type:String})],Vn.prototype,"label",void 0),z([j({type:String})],Vn.prototype,"size",void 0),Vn=z([ot("mov-icon")],Vn);var O5=(e,...t)=>t.length===0?e[0]:String.raw({raw:e},...t),fo=O5;function T5(e,t){const r=document.createElement("style");return r.id=e,r.appendChild(document.createTextNode(t)),r}function Hd(e,t){document.querySelector(`#${e}`)||(document.head??document.querySelector("head")).appendChild(T5(e,t))}function L5(e){document.querySelectorAll(`style[id="${e}"]`).forEach(t=>{t.remove()})}function R5(e,t){L5(e),Hd(e,t)}function P5(e,t){return fo`
    <style id="${e}">
      ${t}
    </style>
  `}var ta=".mov-toast-stack{z-index:2000;pointer-events:none;flex-direction:column;gap:.5rem;width:350px;max-width:100vw;max-height:100vh;padding:1rem;display:flex;position:fixed;overflow:hidden}.mov-toast-stack-top-start{top:0;left:0}.mov-toast-stack-top-center{align-items:center;top:0;left:50%;transform:translate(-50%)}.mov-toast-stack-top-end{top:0;right:0}.mov-toast-stack-bottom-start{flex-direction:column-reverse;bottom:0;left:0}.mov-toast-stack-bottom-center{flex-direction:column-reverse;align-items:center;bottom:0;left:50%;transform:translate(-50%)}.mov-toast-stack-bottom-end{flex-direction:column-reverse;bottom:0;right:0}:host{width:100%;display:block}.mov-toast{pointer-events:auto;background-color:var(--theme-background-color);color:var(--theme-text-color);border:1px solid var(--theme-border-color);opacity:0;visibility:hidden;border-radius:.5rem;flex-direction:column;width:100%;transition:transform .3s cubic-bezier(.4,0,.2,1),opacity .3s cubic-bezier(.4,0,.2,1),visibility .3s cubic-bezier(.4,0,.2,1);display:flex;overflow:hidden;box-shadow:0 4px 12px #00000026}:host([placement$=-end]) .mov-toast{transform:translate(110%)}:host([placement$=-start]) .mov-toast{transform:translate(-110%)}:host([placement=top-center]) .mov-toast{transform:translateY(-110%)}:host([placement=bottom-center]) .mov-toast{transform:translateY(110%)}:host([open]) .mov-toast{opacity:1;visibility:visible;transform:translate(0)}.mov-toast-body{align-items:flex-start;gap:.75rem;padding:.75rem 1rem;display:flex}.mov-toast-icon{flex-shrink:0;justify-content:center;align-items:center;margin-top:.125rem;font-size:20px;display:flex}.mov-toast-icon mov-icon{--mov-icon-size:1.25rem}.mov-toast-content{flex-direction:column;flex-grow:1;gap:.125rem;display:flex}.mov-toast-title{font-size:14px;font-weight:600;line-height:1.25}.mov-toast-description{opacity:.8;font-size:13px;line-height:1.4}.mov-toast-close{cursor:pointer;color:inherit;opacity:.5;background:0 0;border:none;flex-shrink:0;justify-content:center;align-items:center;margin-right:-.25rem;padding:.25rem;transition:opacity .2s;display:flex}.mov-toast-close:hover{opacity:1}.mov-toast-variant-primary .mov-toast-icon{color:var(--mov-color-fill-loud)}.mov-toast-variant-success .mov-toast-icon{color:#28a745}.mov-toast-variant-warning .mov-toast-icon{color:#ffc107}.mov-toast-variant-danger .mov-toast-icon{color:#dc3545}.mov-toast-variant-neutral .mov-toast-icon{color:var(--theme-text-color)}.mov-toast-variant-primary{border-left:4px solid var(--mov-color-fill-loud)}.mov-toast-variant-success{border-left:4px solid #28a745}.mov-toast-variant-warning{border-left:4px solid #ffc107}.mov-toast-variant-danger{border-left:4px solid #dc3545}.mov-toast-variant-neutral{border-left:4px solid var(--theme-border-color)}",Ur=class extends Je{constructor(...t){super(...t),this.open=!1,this.variant="primary",this.duration=3e3,this.closable=!1,this.title="",this.description="",this.placement="bottom-end"}static{this.styles=[Se(ta)]}async show(){if(!this.open)return await this.updateComplete,this.dispatchEvent(new CustomEvent("wa-show",{bubbles:!0,composed:!0})),this.open=!0,this.duration<1/0&&(this.autoHideTimeout=window.setTimeout(()=>this.hide(),this.duration)),new Promise(t=>{setTimeout(()=>{this.dispatchEvent(new CustomEvent("wa-after-show",{bubbles:!0,composed:!0})),t()},300)})}async hide(){if(this.open)return window.clearTimeout(this.autoHideTimeout),this.dispatchEvent(new CustomEvent("wa-hide",{bubbles:!0,composed:!0})),this.open=!1,new Promise(t=>{setTimeout(()=>{this.dispatchEvent(new CustomEvent("wa-after-hide",{bubbles:!0,composed:!0})),this.remove(),t()},300)})}handleCloseClick(){this.hide()}getDefaultIcon(){if(this.icon)return this.icon;switch(this.variant){case"success":return"IconCircleCheck";case"warning":return"IconAlertCircle";case"danger":return"IconCircleX";default:return"IconInfoCircle"}}render(){return oe`
      <div
        part="base"
        class=${kt({"mov-toast":!0,[`mov-toast-variant-${this.variant}`]:!0})}
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
        aria-hidden=${this.open?"false":"true"}
      >
        <div class="mov-toast-body" part="body">
          <div class="mov-toast-icon" part="icon">
            <slot name="icon">
              <mov-icon name=${this.getDefaultIcon()}></mov-icon>
            </slot>
          </div>

          <div class="mov-toast-content" part="content">
            ${this.title?oe`<div class="mov-toast-title" part="title">${this.title}</div>`:""}
            <div class="mov-toast-description" part="description">
              <slot>${this.description}</slot>
            </div>
          </div>

          <slot name="action"></slot>

          ${this.closable?oe`
                <button
                  type="button"
                  class="mov-toast-close"
                  part="close-button"
                  @click=${this.handleCloseClick}
                  aria-label="Close"
                >
                  <mov-icon name="IconX"></mov-icon>
                </button>
              `:""}
        </div>
      </div>
    `}};z([j({type:Boolean,reflect:!0})],Ur.prototype,"open",void 0),z([j({reflect:!0})],Ur.prototype,"variant",void 0),z([j({type:Number})],Ur.prototype,"duration",void 0),z([j({type:Boolean})],Ur.prototype,"closable",void 0),z([j()],Ur.prototype,"title",void 0),z([j()],Ur.prototype,"description",void 0),z([j()],Ur.prototype,"icon",void 0),z([j({reflect:!0})],Ur.prototype,"placement",void 0),Ur=z([ot("mov-toast")],Ur);var lr=e=>{const t=e.placement||"bottom-end",r=`mov-toast-stack-${t}`;let i=document.querySelector(`.mov-toast-stack.${r}`);const a=ta.indexOf(":host");Hd("mov-toast-stack-styles",a>-1?ta.substring(0,a).trim():ta),i||(i=document.createElement("div"),i.className=`mov-toast-stack ${r}`,document.body.appendChild(i));const s=document.createElement("mov-toast");let l=e.variant||"primary";return l==="info"&&(l="primary"),l==="error"&&(l="danger"),s.variant=l,s.title=e.title||"",s.description=e.description||e.message||"",s.duration=e.duration??3e3,s.closable=e.closable??!0,s.placement=t,e.icon&&(s.icon=e.icon),i.appendChild(s),requestAnimationFrame(()=>{s.show()}),s};lr.info=e=>lr({...e,variant:"primary"}),lr.success=e=>lr({...e,variant:"success"}),lr.warning=e=>lr({...e,variant:"warning"}),lr.error=e=>lr({...e,variant:"danger"});var ri=(e,t)=>{const r=(i,a)=>xe.default.transform(i,(s,l,h)=>{xe.default.isEqual(l,a[h])||(xe.default.isObject(l)&&xe.default.isObject(a[h])&&!xe.default.isArray(l)?s[h]=r(l,a[h]):s[h]=l)});return r(e,t)},$5={bookmarks:[],colorScheme:"dark",downloadZip:!1,enabled:!1,fitWidthIfOversize:!0,header:"scroll",hidePageControls:!1,lazyLoadImages:!1,lazyStart:50,loadMode:"wait",locale:"en_US",maxReload:5,minZoom:30,navbar:"bottom",pagination:"disabled",scrollHeight:25,theme:"#29487D",loadSpeed:"Extreme",viewMode:"WebComic",zoomMode:"percent",zoomStep:30,zoomValue:100,keybinds:{SCROLL_UP:["up","W","num_8"],SCROLL_DOWN:["down","S","num_2"],NEXT_CHAPTER:["right","/","D","num_6"],PREVIOUS_CHAPTER:["left",";","A","num_4"],RETURN_CHAPTER_LIST:["backspace","del","num_decimal"],ENLARGE:["-","num_add","E"],REDUCE:["=","num_subtract","Q"],RESTORE:["9","num_divide","R"],FIT_WIDTH:["0","num_multiply","F"],FIT_HEIGHT:["H","num_0"],SETTINGS:["num_divide","num_5","X"],VIEW_MODE_WEBCOMIC:["C"],VIEW_MODE_VERTICAL:["V"],VIEW_MODE_LEFT:["N"],VIEW_MODE_RIGHT:["B"],VIEW_MODE_GALLERY:["G"],SCROLL_START:["space"],INCREASE_SPEED:["."],DECREASE_SPEED:[","],TOGGLE_CONTROLS:["L"]}},z5={lazyLoadImages:!0,fitWidthIfOversize:!0,navbar:"disabled",viewMode:"WebComic",header:"scroll",hidePageControls:!0,pagination:"disabled"},D5={loadSpeed:"All",lazyLoadImages:!1,downloadZip:!1,theme:"oklch(44.6% 0.043 257.281)"};function zr(e=!0){const t={...$5,theme:e?"#29487D":"#004526"};let r=dp()?xe.default.defaultsDeep(z5,t):t;return Ms()&&(r=xe.default.defaultsDeep(D5,r)),r}function N5(e,t){if(Array.isArray(e)&&Array.isArray(t)){if(e.length!==t.length)return!1;const r=s=>`${s.url}-${s.date}`,i=[...e].sort((s,l)=>r(s).localeCompare(r(l))),a=[...t].sort((s,l)=>r(s).localeCompare(r(l)));return xe.default.isEqual(i,a)}}function B5(e,t){if(e&&typeof e=="object"&&t&&typeof t=="object"){const r=e,i=t,a=xe.default.keys(r).sort((l,h)=>l.localeCompare(h)),s=xe.default.keys(i).sort((l,h)=>l.localeCompare(h));if(!xe.default.isEqual(a,s))return!1;for(const l of a){const h=r[l]?[...r[l]].sort((f,p)=>f.localeCompare(p)):[],c=i[l]?[...i[l]].sort((f,p)=>f.localeCompare(p)):[];if(!xe.default.isEqual(h,c))return!1}return!0}}function Fd(e,t,r){if(r==="bookmarks")return N5(e,t);if(r==="keybinds")return B5(e,t)}function ra(e,t,r){if(e===t)return!1;if(r){const i={[r]:e},a={[r]:t};return!xe.default.isEqualWith(i,a,Fd)}return!xe.default.isEqualWith(e,t,Fd)}var Qt=xe.default.defaultsDeep(ip(zr()),zr()),er=xe.default.defaultsDeep(ap(zr(!1)),zr(!1)),qn=()=>er?.enabled===!0,Zs=e=>qn()&&!["locale","bookmarks","keybinds"].includes(e),Ct=cd(qn()?{...er,locale:Qt.locale,keybinds:Qt.keybinds,bookmarks:Qt.bookmarks}:Qt),po=yp(Ct,e=>uo.find(t=>t.ID===e.locale)??uo[1]),tr=cd({autoScroll:!1,chapter:zs(),currentPage:0,device:Zo(),manga:void 0,panel:"none",scrollToPage:void 0});function Zn(e){if(e){const t=Zs(e)?er[e]:Qt[e],r=Ct.get()?.[e];ra(r,t,e)&&(Ct.setKey(e,t),ye("Refreshed Settings",e,t));return}for(const t in Ct.get()){const r=Ct.get()[t],i=Zs(t)?er[t]:Qt[t];ra(r,i)&&Ct.setKey(t,i)}ye("Refreshed All Settings")}function H5(e){const t=xe.default.defaultsDeep(e,zr()),r=Qt?ri(t,Qt):t;if(!Sr(r)){ye("Imported Global Settings",r),Qt=t;for(const i in r)Zn(i)}}sd(xe.default.debounce(H5,300),"settings");function F5(e){const t=xe.default.defaultsDeep(e,zr(!1)),r=er?ri(t,er):t;if(!Sr(r)){ye("Imported Local Settings",r),er=t;for(const i in r)Zn(i)}}sd(xe.default.debounce(F5,300),location.hostname);function X(e){return Ct.get()?.[e]}function go(e,t){const r=Ct.get()?.[e];ra(r,t,e)&&Ct.setKey(e,t)}function At(e,t){ra(X(e),t,e)&&(Ct.setKey(e,t),Zs(e)?(er[e]=t,ad(ri(er,zr(!1)))):(Qt[e]=t,sp(ri(Qt,zr()))))}function mo(e,t){go(e,t(X(e)))}function fe(e){return tr.get()[e]}function $e(e,t){const r=tr.get()[e];xe.default.isEqual(r,t)||tr.setKey(e,t)}function Gd(e,t){const r=tr.get()[e],i=t(r);xe.default.isEqual(r,i)||tr.setKey(e,i)}function cr(e,t){Gd("images",r=>({...r,[e]:{...r?.[e],...t(r?.[e]??{})}}))}function K(e){const t=uo.find(r=>r.ID===X("locale"))??uo[1];return Fp(t,e)?t?.[e]??uo[1]?.[e]:`##MISSING_STRING_${e}##`}function Wd(e=!1){return er.enabled=e,ad(ri(er,zr(!1))),ye("Local Settings ",e?"Enabled":"Disabled"),lr.info({title:"Changed Settings to",description:qn()?"Local":"Global",duration:2e3}),qn()}function G5(){qn()?(nd(location.hostname),er=zr(!1),Wd(!1)):(nd("settings"),Qt=zr(),Zn()),ye("Settings Reset")}function vo(e=location.href){return X("bookmarks").find(t=>t.url===e)?.page}function W5(e=null){qt("Current Settings (Local:",qn(),") ",e?Ct.get()[e]:Ct.get(),`
Global Settings`,e?Qt[e]:Qt,`
Local Settings`,e?er[e]:er,`
AppState`,tr.get())}np("MOVSettings",W5);var U5=(e,t,r)=>{if(r&&!["bookmarks","zoomValue"].includes(r)){const i=t[r],a=e[r];lr.info({title:`${r} Changed`,description:`from ${JSON.stringify(i)} to ${JSON.stringify(a)}`,duration:2e3})}};Ct.listen(xe.default.debounce(U5,300));var dr=e=>e??Be,V5=":host{--mov-font-size-scale:1;--mov-font-size-m:calc(16px * var(--mov-font-size-scale));--mov-font-size-s:round(calc(var(--mov-font-size-m) / 1.125), 1px);--mov-font-size-l:round(calc(var(--mov-font-size-m) * 1.125 * 1.125), 1px);--mov-border-width-s:.0625rem;--mov-border-radius-pill:9999px;--mov-transition-fast:75ms;--mov-font-weight-action:500;--mov-focus-ring:solid .1875rem var(--mov-color-fill-loud);--mov-focus-ring-offset:.0625rem;--mov-line-height-condensed:1.2;--mov-form-control-padding-block:.75em;--mov-form-control-padding-inline:1em;--mov-form-control-height:round(calc(2 * var(--mov-form-control-padding-block) + 1em * var(--mov-line-height-condensed)), 1px);display:inline-block}:host([size=small]){font-size:var(--mov-font-size-s)}:host([size=medium]){font-size:var(--mov-font-size-m)}:host([size=large]){font-size:var(--mov-font-size-l)}.button{box-sizing:border-box;user-select:none;white-space:nowrap;vertical-align:middle;transition-property:background,border,box-shadow,color;transition-duration:var(--mov-transition-fast);cursor:pointer;padding:0 var(--mov-form-control-padding-inline);font-family:inherit;font-size:inherit;font-weight:var(--mov-font-weight-action);line-height:calc(var(--mov-form-control-height) - var(--mov-border-width-s) * 2);height:var(--mov-form-control-height);border-radius:var(--mov-border-radius-m,.375rem);border-style:solid;border-width:var(--mov-border-width-s);background-color:var(--mov-color-fill-loud);color:var(--mov-color-on-loud);border-color:#0000;justify-content:center;align-items:center;text-decoration:none;display:inline-flex}:host([appearance~=plain]){& .button{color:var(--mov-color-on-quiet);background-color:#0000;border-color:#0000}@media (hover:hover){& .button:not(.disabled):not(.loading):hover{color:var(--mov-color-on-quiet);background-color:var(--mov-color-fill-quiet)}}& .button:not(.disabled):not(.loading):active{color:var(--mov-color-on-quiet);background-color:color-mix(in oklab, var(--mov-color-fill-quiet), var(--mov-color-mix-active))}}:host([appearance~=outlined]){& .button{color:var(--mov-color-on-quiet);border-color:var(--mov-color-border-loud);background-color:#0000}@media (hover:hover){& .button:not(.disabled):not(.loading):hover{color:var(--mov-color-on-quiet);background-color:var(--mov-color-fill-quiet)}}& .button:not(.disabled):not(.loading):active{color:var(--mov-color-on-quiet);background-color:color-mix(in oklab, var(--mov-color-fill-quiet), var(--mov-color-mix-active))}}:host([appearance~=filled]){& .button{color:var(--mov-color-on-normal);background-color:var(--mov-color-fill-normal);border-color:#0000}@media (hover:hover){& .button:not(.disabled):not(.loading):hover{color:var(--mov-color-on-normal);background-color:color-mix(in oklab, var(--mov-color-fill-normal), var(--mov-color-mix-hover))}}& .button:not(.disabled):not(.loading):active{color:var(--mov-color-on-normal);background-color:color-mix(in oklab, var(--mov-color-fill-normal), var(--mov-color-mix-active))}}:host([appearance~=filled][appearance~=outlined]) .button{border-color:var(--mov-color-border-normal)}:host([appearance~=accent]){& .button{color:var(--mov-color-on-loud);background-color:var(--mov-color-fill-loud);border-color:#0000}@media (hover:hover){& .button:not(.disabled):not(.loading):hover{background-color:color-mix(in oklab, var(--mov-color-fill-loud), var(--mov-color-mix-hover))}}& .button:not(.disabled):not(.loading):active{background-color:color-mix(in oklab, var(--mov-color-fill-loud), var(--mov-color-mix-active))}}.button:focus{outline:none}.button:focus-visible{outline:var(--mov-focus-ring);outline-offset:var(--mov-focus-ring-offset)}.button.disabled{opacity:.5;cursor:not-allowed}.button.disabled *{pointer-events:none}.button.is-icon-button{outline-offset:2px;width:var(--mov-form-control-height);aspect-ratio:1}:host([pill]) .button{border-radius:var(--mov-border-radius-pill)}.start,.end{pointer-events:none;flex:none;align-items:center;display:flex}.label{display:inline-block}.is-icon-button .label{display:flex}mov-icon[part~=caret]{align-self:center;align-items:center;display:flex}mov-icon[part~=caret]::part(svg){width:.875em;height:.875em}.loading{cursor:wait;position:relative}.loading .start,.loading .label,.loading .end,.loading .caret{visibility:hidden}.spinner{--indicator-color:currentColor;--track-color:color-mix(in oklab, currentColor, transparent 90%);border:2px solid var(--track-color);border-top-color:var(--indicator-color);border-radius:50%;width:1em;height:1em;font-size:1em;animation:1s linear infinite spin;position:absolute;top:calc(50% - .5em);left:calc(50% - .5em)}@keyframes spin{to{transform:rotate(360deg)}}slot[name=start]::slotted(*){margin-inline-end:.75em}slot[name=end]::slotted(*),.button:not(.visually-hidden-label) [part~=caret]{margin-inline-start:.75em}",dt=class extends Je{constructor(...t){super(...t),this.isIconButton=!1,this.hasLabel=!1,this.hasStart=!1,this.hasEnd=!1,this.title="",this.appearance="accent",this.variant="brand",this.size="medium",this.withCaret=!1,this.disabled=!1,this.loading=!1,this.pill=!1,this.type="button"}static{this.styles=[Se(V5)]}handleClick(t){(this.disabled||this.loading)&&(t.preventDefault(),t.stopPropagation())}click(){this.button?.click()}focus(t){this.button?.focus(t)}blur(){this.button?.blur()}render(){const t=!!this.href,r={button:!0,"with-caret":this.withCaret,disabled:this.disabled,loading:this.loading,pill:this.pill,"has-label":this.hasLabel,"has-start":this.hasStart,"has-end":this.hasEnd,"is-icon-button":this.isIconButton},i=oe`
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
      ${this.withCaret?oe`<mov-icon
            part="caret"
            class="caret"
            name="IconChevronRight"
            style="transform: rotate(90deg)"
          ></mov-icon>`:""}
      ${this.loading?oe`<span
            part="spinner"
            class="spinner"
          ></span>`:""}
    `;return t?oe`
        <a
          part="base"
          class=${kt(r)}
          href=${dr(this.href)}
          target=${dr(this.target)}
          title=${dr(this.title)}
          role="button"
          aria-disabled=${this.disabled?"true":"false"}
          tabindex=${this.disabled?"-1":"0"}
          download=${dr(this.download)}
          @click=${this.handleClick}
        >
          ${i}
        </a>
      `:oe`
        <button
          part="base"
          class=${kt(r)}
          ?disabled=${this.disabled||this.loading}
          type=${dr(this.type)}
          title=${dr(this.title)}
          name=${dr(this.name)}
          value=${dr(this.value)}
          aria-disabled=${this.disabled?"true":"false"}
          tabindex=${this.disabled?"-1":"0"}
        >
          ${i}
        </button>
      `}handleLabelSlotChange(){const t=this.labelSlot?.assignedNodes({flatten:!0})??[],r=t.filter(l=>l.nodeType===Node.ELEMENT_NODE),i=t.filter(l=>l.nodeType===Node.TEXT_NODE&&l.textContent?.trim()!==""),a=l=>["wa-icon","mov-icon","svg"].includes(l.localName),s=r.some(a);this.isIconButton=i.length===0&&s}};z([en(".button")],dt.prototype,"button",void 0),z([en("slot:not([name])")],dt.prototype,"labelSlot",void 0),z([Dt()],dt.prototype,"isIconButton",void 0),z([Dt()],dt.prototype,"hasLabel",void 0),z([Dt()],dt.prototype,"hasStart",void 0),z([Dt()],dt.prototype,"hasEnd",void 0),z([j()],dt.prototype,"title",void 0),z([j({reflect:!0})],dt.prototype,"appearance",void 0),z([j({reflect:!0})],dt.prototype,"variant",void 0),z([j({reflect:!0})],dt.prototype,"size",void 0),z([j({attribute:"with-caret",type:Boolean,reflect:!0})],dt.prototype,"withCaret",void 0),z([j({type:Boolean,reflect:!0})],dt.prototype,"disabled",void 0),z([j({type:Boolean,reflect:!0})],dt.prototype,"loading",void 0),z([j({type:Boolean,reflect:!0})],dt.prototype,"pill",void 0),z([j()],dt.prototype,"type",void 0),z([j({reflect:!0})],dt.prototype,"name",void 0),z([j({reflect:!0})],dt.prototype,"value",void 0),z([j({reflect:!0})],dt.prototype,"href",void 0),z([j()],dt.prototype,"target",void 0),z([j({reflect:!0})],dt.prototype,"rel",void 0),z([j()],dt.prototype,"download",void 0),z([j({reflect:!0})],dt.prototype,"form",void 0),dt=z([ot("mov-button")],dt);var Ar=class extends Je{constructor(...t){super(...t),this.mode="burger",this.active=!1,this.label="",this.icon="",this.activeIcon="",this.appearance="accent",this.size="medium",this.disabled=!1,this.loading=!1}static{this.styles=yt`
    :host {
      display: inline-flex;
      vertical-align: middle;
      --burger-size: 1.25rem;
      --burger-line-height: 2px;
      --burger-line-color: currentColor;
      --burger-transition-duration: 0.3s;
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

    /* Burger Mode Styling */
    .burger-mode {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: var(--burger-size);
      height: var(--burger-size);
      position: relative;
    }

    .burger-line {
      width: 100%;
      height: var(--burger-line-height);
      background-color: var(--burger-line-color);
      border-radius: var(--burger-line-height);
      transition: transform var(--burger-transition-duration) ease,
                  opacity var(--burger-transition-duration) ease;
      position: absolute;
    }

    .burger-line:nth-child(1) { transform: translateY(-6px); }
    .burger-line:nth-child(2) { transform: translateY(0); }
    .burger-line:nth-child(3) { transform: translateY(6px); }

    :host([active]) .burger-line:nth-child(1) {
      transform: translateY(0) rotate(45deg);
    }

    :host([active]) .burger-line:nth-child(2) {
      opacity: 0;
      transform: translateX(4px);
    }

    :host([active]) .burger-line:nth-child(3) {
      transform: translateY(0) rotate(-45deg);
    }

    /* Size adjustments for burger */
    :host([size="small"]) { --burger-size: 1rem; }
    :host([size="large"]) { --burger-size: 1.5rem; }

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
  `}connectedCallback(){super.connectedCallback(),this.label||(this.label=this._getDefaultLabel())}render(){const t=this.active?this.activeLabel??this.label:this.label,r={"two-icon-mode":["custom","theme"].includes(this.mode),"single-icon-mode":["chevron","expand","play-pause"].includes(this.mode),"burger-mode-active":this.mode==="burger"};return oe`
      <mov-button
        @click=${this._onClick}
        .appearance=${dr(this.appearance)}
        .size=${dr(this.size)}
        ?disabled=${dr(this.disabled)}
        ?loading=${dr(this.loading)}
        .title=${dr(this.title)}
        class=${kt(r)}
        title=${t}
        aria-label=${t}
        aria-pressed=${this.active?"true":"false"}
        icon-only
      >
        ${this._renderIcons()}
      </mov-button>
    `}_getDefaultLabel(){switch(this.mode){case"burger":return"Toggle menu";case"chevron":return"Toggle expand";case"theme":return"Toggle theme";case"play-pause":return"Toggle play";case"expand":return"Toggle expand";case"custom":return"Toggle";default:return"Toggle"}}_getIcons(){switch(this.mode){case"chevron":return{inactive:"chevron-right",active:"chevron-right"};case"theme":return{inactive:"moon",active:"sun"};case"play-pause":return{inactive:"player-play",active:"player-pause"};case"expand":return{inactive:"arrow-autofit-down",active:"arrow-autofit-down"};case"custom":return{inactive:this.icon,active:this.activeIcon};default:return{inactive:"",active:""}}}_renderIcons(){if(this.mode==="burger")return oe`
        <div class="burger-mode">
          <div class="burger-line"></div>
          <div class="burger-line"></div>
          <div class="burger-line"></div>
        </div>
      `;const t=this._getIcons();return t.inactive?this.mode==="chevron"?oe`<mov-icon
        class="chevron-icon"
        name=${t.inactive}
      ></mov-icon>`:this.mode==="expand"?oe`<mov-icon
        class="expand-icon"
        name=${t.inactive}
      ></mov-icon>`:this.mode==="play-pause"?oe`<mov-icon
        class="play-pause-icon"
        name=${this.active?t.active:t.inactive}
      ></mov-icon>`:oe`
      <mov-icon
        class="inactive-icon"
        name=${t.inactive}
      ></mov-icon>
      <mov-icon
        class="active-icon"
        name=${t.active}
      ></mov-icon>
    `:Be}_onClick(){if(this.disabled||this.loading)return;const t=this.active;this.active=!this.active,this.dispatchEvent(new CustomEvent("toggle",{detail:{value:this.active,oldValue:t,mode:this.mode},bubbles:!0,composed:!0}))}toggle(){this._onClick()}setActive(t){this.active=t}};z([j({type:String})],Ar.prototype,"mode",void 0),z([j({type:Boolean,reflect:!0})],Ar.prototype,"active",void 0),z([j({type:String})],Ar.prototype,"label",void 0),z([j({type:String})],Ar.prototype,"activeLabel",void 0),z([j({type:String})],Ar.prototype,"icon",void 0),z([j({type:String})],Ar.prototype,"activeIcon",void 0),z([j({type:String,reflect:!0})],Ar.prototype,"appearance",void 0),z([j({type:String,reflect:!0})],Ar.prototype,"size",void 0),z([j({type:Boolean})],Ar.prototype,"disabled",void 0),z([j({type:Boolean,reflect:!0})],Ar.prototype,"loading",void 0),Ar=z([ot("toggle-button")],Ar);var q5="important",Z5=" !important",Vr=Qo(class extends ji{constructor(e){if(super(e),e.type!==Zi.ATTRIBUTE||e.name!=="style"||e.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce((t,r)=>{const i=e[r];return i==null?t:t+`${r=r.includes("-")?r:r.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${i};`},"")}update(e,[t]){const{style:r}=e.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(t)),this.render(t);for(const i of this.ft)t[i]??(this.ft.delete(i),i.includes("-")?r.removeProperty(i):r[i]=null);for(const i in t){const a=t[i];if(a!=null){this.ft.add(i);const s=typeof a=="string"&&a.endsWith(Z5);i.includes("-")||s?r.setProperty(i,s?a.slice(0,-11):a,s?q5:""):r[i]=a}}return Qr}});function ni(e,t){let r=e.length,i,a,s=!1,l=!1;Array.isArray(e[0])?i=e:(i=[e],r=i.length,s=!0),Array.isArray(t[0])?a=t:(a=t.length>0?t.map(p=>[p]):[[]],l=!0);let h=a[0].length,c=a[0].map((p,w)=>a.map(b=>b[w])),f=i.map(p=>c.map(w=>{let b=0;if(!Array.isArray(p)){for(let m of w)b+=p*m;return b}for(let m=0;m<p.length;m++)b+=p[m]*(w[m]||0);return b}));return r===1&&s&&(f=f[0]),h===1&&l?r===1&&s?f[0]:f.map(p=>p[0]):f}function js(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]}function wt(e,t,r=[0,0,0]){const i=js(e,t[0]),a=js(e,t[1]),s=js(e,t[2]);return r[0]=i,r[1]=a,r[2]=s,r}function bo(e){return gn(e)==="string"}function gn(e){return(Object.prototype.toString.call(e).match(/^\[object\s+(.*?)\]$/)[1]||"").toLowerCase()}function Ks(e,{precision:t=16,unit:r}){return Ye(e)?"none":(e=+Ys(e,t),e+(r??""))}function Ye(e){return e===null}function Mt(e){return Ye(e)?0:e}function Ys(e,t){if(e===0)return 0;let r=~~e,i=0;r&&t&&(i=~~Math.log10(Math.abs(r))+1);const a=10**(t-i);return Math.floor(e*a+.5)/a}function oi(e,t,r){return isNaN(e)?t:isNaN(t)?e:e+(t-e)*r}function Ud(e,t,r){return(r-e)/(t-e)}function Xs(e,t,r){return!e||!t||e===t||e[0]===t[0]&&e[1]===t[1]||isNaN(r)||r===null?r:oi(t[0],t[1],Ud(e[0],e[1],r))}function na(e,t,r){return Math.max(Math.min(r,t),e)}function oa(e,t){return Math.sign(e)===Math.sign(t)?e:-e}function xt(e,t){return oa(Math.abs(e)**t,e)}function Js(e,t){return t===0?0:e/t}function Vd(e,t,r=0,i=e.length){for(;r<i;){const a=r+i>>1;e[a]<t?r=a+1:i=a}return r}function wo(e,t){if(e instanceof t)return!0;const r=t.name;for(;e;){const i=Object.getPrototypeOf(e),a=i?.constructor?.name;if(a===r)return!0;if(!a||a==="Object")return!1;e=i}return!1}var j5=Object.freeze({__proto__:null,bisectLeft:Vd,clamp:na,copySign:oa,interpolate:oi,interpolateInv:Ud,isInstance:wo,isNone:Ye,isString:bo,mapRange:Xs,multiplyMatrices:ni,multiply_v3_m3x3:wt,serializeNumber:Ks,skipNone:Mt,spow:xt,toPrecision:Ys,type:gn,zdiv:Js}),K5=class{add(e,t,r){if(typeof arguments[0]!="string"){for(var e in arguments[0])this.add(e,arguments[0][e],arguments[1]);return}(Array.isArray(e)?e:[e]).forEach(function(i){this[i]=this[i]||[],t&&this[i][r?"unshift":"push"](t)},this)}run(e,t){this[e]=this[e]||[],this[e].forEach(function(r){r.call(t&&t.context?t.context:t,t)})}},mn=new K5,ur={gamut_mapping:"css",precision:5,deltaE:"76",verbose:"production".toLowerCase()!=="test",warn:function(t){this.verbose&&globalThis?.console?.warn?.(t)}},qd=class{type;coordMeta;coordRange;range;constructor(e,t){if(typeof e=="object"&&(this.coordMeta=e),t&&(this.coordMeta=t,this.coordRange=t.range??t.refRange),typeof e=="string"){let r=e.trim().match(/^(?<type><[a-z]+>)(\[(?<min>-?[.\d]+),\s*(?<max>-?[.\d]+)\])?$/);if(!r)throw new TypeError(`Cannot parse ${e} as a type definition.`);this.type=r.groups.type;let{min:i,max:a}=r.groups;(i||a)&&(this.range=[+i,+a])}}get computedRange(){return this.range?this.range:this.type==="<percentage>"?this.percentageRange():this.type==="<angle>"?[0,360]:null}get unit(){return this.type==="<percentage>"?"%":this.type==="<angle>"?"deg":""}resolve(e){if(this.type==="<angle>")return e;let t=this.computedRange,r=this.coordRange;return this.type==="<percentage>"&&(r??=this.percentageRange()),Xs(t,r,e)}serialize(e,t){let r=this.type==="<percentage>"?this.percentageRange(100):this.computedRange,i=this.unit;return e=Xs(this.coordRange,r,e),Ks(e,{unit:i,precision:t})}toString(){let e=this.type;if(this.range){let[t="",r=""]=this.range;e+=`[${t},${r}]`}return e}percentageRange(e=1){let t;return this.coordMeta&&this.coordMeta.range||this.coordRange&&this.coordRange[0]>=0?t=[0,1]:t=[-1,1],[t[0]*e,t[1]*e]}static get(e,t){return wo(e,this)?e:new this(e,t)}},Qs=Symbol("instance"),Zd=class jf{type;name;spaceCoords;coords;id;alpha;constructor(t,r=t.space){t[Qs]=this,this.type="function",this.name="color",Object.assign(this,t),this.space=r,this.type!=="custom"&&(this.spaceCoords=Object.values(r.coords),this.coords||(this.coords=this.spaceCoords.map(i=>{let a=["<number>","<percentage>"];return i.type==="angle"&&a.push("<angle>"),a})),this.coords=this.coords.map((i,a)=>{let s=this.spaceCoords[a];return typeof i=="string"&&(i=i.trim().split(/\s*\|\s*/)),i.map(l=>qd.get(l,s))}))}serializeCoords(t,r,i){return i=t.map((a,s)=>qd.get(i?.[s]??this.coords[s][0],this.spaceCoords[s])),t.map((a,s)=>i[s].serialize(a,r))}coerceCoords(t,r){return Object.entries(this.space.coords).map(([i,a],s)=>{let l=t[s];if(Ye(l)||isNaN(l))return l;let h=r[s],c=this.coords[s].find(f=>f.type==h);if(!c){let f=a.name||i;throw new TypeError(`${h??l?.raw??l} not allowed for ${f} in ${this.name}()`)}return l=c.resolve(l),c.range&&(r[s]=c.toString()),l})}canSerialize(){return this.type==="function"||this.serialize}parse(t){return null}static get(t,...r){return!t||wo(t,this)?t:t[Qs]?t[Qs]:new jf(t,...r)}},Zt={D50:[.3457/.3585,1,.2958/.3585],D65:[.3127/.329,1,.3583/.329]};function el(e){return Array.isArray(e)?e:Zt[e]}function ia(e,t,r,i={}){if(e=el(e),t=el(t),!e||!t)throw new TypeError(`Missing white point to convert ${e?"":"from"}${!e&&!t?"/":""}${t?"":"to"}`);if(e===t)return r;let a={W1:e,W2:t,XYZ:r,options:i};if(mn.run("chromatic-adaptation-start",a),a.M||(a.W1===Zt.D65&&a.W2===Zt.D50?a.M=[[1.0479297925449969,.022946870601609652,-.05019226628920524],[.02962780877005599,.9904344267538799,-.017073799063418826],[-.009243040646204504,.015055191490298152,.7518742814281371]]:a.W1===Zt.D50&&a.W2===Zt.D65&&(a.M=[[.955473421488075,-.02309845494876471,.06325924320057072],[-.0283697093338637,1.0099953980813041,.021041441191917323],[.012314014864481998,-.020507649298898964,1.330365926242124]])),mn.run("chromatic-adaptation-end",a),a.M)return wt(a.XYZ,a.M);throw new TypeError("Only Bradford CAT with white points D50 and D65 supported for now.")}function jd(e,t){let r={str:String(e)?.trim(),options:t};if(mn.run("parse-start",r),r.color)return r.color;r.parsed=X5(r.str);let i,a=r.options?r.options.parseMeta??r.options.meta:null;if(r.parsed){let s=r.parsed.name,l,h,c=r.parsed.args,f=c.map((b,m)=>r.parsed.argMeta[m]?.type);if(s==="color"){let b=c.shift();f.shift();let m=b.startsWith("--")?b.substring(2):`--${b}`,v=[b,m];if(l=Ee.findFormat({name:s,id:v,type:"function"}),!l){let E,y=b in Ee.registry?b:m;if(y in Ee.registry){let S=Ee.registry[y].formats?.color?.id;S&&(E=`Did you mean ${e.replace("color("+b,"color("+S)}?`)}throw new TypeError(`Cannot parse ${r.str}. `+(E??"Missing a plugin?"))}h=l.space,l.id.startsWith("--")&&!b.startsWith("--")&&ur.warn(`${h.name} is a non-standard space and not currently supported in the CSS spec. Use prefixed color(${l.id}) instead of color(${b}).`),b.startsWith("--")&&!l.id.startsWith("--")&&ur.warn(`${h.name} is a standard space and supported in the CSS spec. Use color(${l.id}) instead of prefixed color(${b}).`)}else l=Ee.findFormat({name:s,type:"function"}),h=l.space;a&&Object.assign(a,{format:l,formatId:l.name,types:f,commas:r.parsed.commas});let p=1;r.parsed.lastAlpha&&(p=r.parsed.args.pop(),a&&(a.alphaType=f.pop()));let w=l.coords.length;if(c.length!==w)throw new TypeError(`Expected ${w} coordinates for ${h.id} in ${r.str}), got ${c.length}`);c=l.coerceCoords(c,f),i={spaceId:h.id,coords:c,alpha:p}}else e:for(let s of Ee.all)for(let l in s.formats){let h=s.formats[l];if(h.type!=="custom"||h.test&&!h.test(r.str))continue;let c=s.getFormat(h),f=c.parse(r.str);if(f){a&&Object.assign(a,{format:c,formatId:l}),i=f;break e}}if(!i)throw new TypeError(`Could not parse ${e} as a color. Missing a plugin?`);return i.alpha=Ye(i.alpha)?i.alpha:i.alpha===void 0?1:na(0,i.alpha,1),i}var Kd={"%":.01,deg:1,grad:.9,rad:180/Math.PI,turn:360},aa={function:/^([a-z]+)\(((?:calc\(NaN\)|.)+?)\)$/i,number:/^([-+]?(?:[0-9]*\.)?[0-9]+(e[-+]?[0-9]+)?)$/i,unitValue:RegExp(`(${Object.keys(Kd).join("|")})$`),singleArgument:/\/?\s*(none|NaN|calc\(NaN\)|[-+\w.]+(?:%|deg|g?rad|turn)?)/g};function Y5(e){let t={},r=e.match(aa.unitValue)?.[0],i=t.raw=e;return r?(t.type=r==="%"?"<percentage>":"<angle>",t.unit=r,t.unitless=Number(i.slice(0,-r.length)),i=t.unitless*Kd[r]):aa.number.test(i)?(i=Number(i),t.type="<number>"):i==="none"?i=null:i==="NaN"||i==="calc(NaN)"?(i=NaN,t.type="<number>"):t.type="<ident>",{value:i,meta:t}}function X5(e){if(!e)return;e=e.trim();let t=e.match(aa.function);if(t){let r=[],i=[],a=!1,s=t[1].toLowerCase(),l=t[2].replace(aa.singleArgument,(h,c)=>{let{value:f,meta:p}=Y5(c);return(h.startsWith("/")||s!=="color"&&r.length===3)&&(a=!0),r.push(f),i.push(p),""});return{name:s,args:r,argMeta:i,lastAlpha:a,commas:l.includes(","),rawName:t[1],rawArgs:t[2]}}}function Pe(e,t){if(Array.isArray(e))return e.map(i=>Pe(i,t));if(!e)throw new TypeError("Empty color reference");bo(e)&&(e=jd(e,t));let r=e.space||e.spaceId;return typeof r=="string"&&(e.space=Ee.get(r)),e.alpha===void 0&&(e.alpha=1),e}var J5=75e-6,Ee=class Wr{constructor(t){this.id=t.id,this.name=t.name,this.base=t.base?Wr.get(t.base):null,this.aliases=t.aliases,this.base&&(this.fromBase=t.fromBase,this.toBase=t.toBase);let r=t.coords??this.base.coords;for(let a in r)"name"in r[a]||(r[a].name=a);this.coords=r;let i=t.white??this.base.white??"D65";this.white=el(i),this.formats=t.formats??{};for(let a in this.formats){let s=this.formats[a];s.type||="function",s.name||=a}this.formats.color?.id||(this.formats.color={...this.formats.color??{},id:t.cssId||this.id}),t.gamutSpace?this.gamutSpace=t.gamutSpace==="self"?this:Wr.get(t.gamutSpace):this.isPolar?this.gamutSpace=this.base:this.gamutSpace=this,this.gamutSpace.isUnbounded&&(this.inGamut=(a,s)=>!0),this.referred=t.referred,Object.defineProperty(this,"path",{value:Q5(this).reverse(),writable:!1,enumerable:!0,configurable:!0}),mn.run("colorspace-init-end",this)}inGamut(t,{epsilon:r=J5}={}){if(!this.equals(this.gamutSpace))return t=this.to(this.gamutSpace,t),this.gamutSpace.inGamut(t,{epsilon:r});let i=Object.values(this.coords);return t.every((a,s)=>{let l=i[s];if(l.type!=="angle"&&l.range){if(Ye(a))return!0;let[h,c]=l.range;return(h===void 0||a>=h-r)&&(c===void 0||a<=c+r)}return!0})}get isUnbounded(){return Object.values(this.coords).every(t=>!("range"in t))}get cssId(){return this.formats?.color?.id||this.id}get isPolar(){for(let t in this.coords)if(this.coords[t].type==="angle")return!0;return!1}getFormat(t){if(!t)return null;t==="default"?t=Object.values(this.formats)[0]:typeof t=="string"&&(t=this.formats[t]);let r=Zd.get(t,this);return r!==t&&t.name in this.formats&&(this.formats[t.name]=r),r}equals(t){return t?this===t||this.id===t||this.id===t.id:!1}to(t,r){if(arguments.length===1){const h=Pe(t);[t,r]=[h.space,h.coords]}if(t=Wr.get(t),this.equals(t))return r;r=r.map(h=>Ye(h)?0:h);let i=this.path,a=t.path,s,l;for(let h=0;h<i.length&&i[h].equals(a[h]);h++)s=i[h],l=h;if(!s)throw new Error(`Cannot convert between color spaces ${this} and ${t}: no connection space was found`);for(let h=i.length-1;h>l;h--)r=i[h].toBase(r);for(let h=l+1;h<a.length;h++)r=a[h].fromBase(r);return r}from(t,r){if(arguments.length===1){const i=Pe(t);[t,r]=[i.space,i.coords]}return t=Wr.get(t),t.to(this,r)}toString(){return`${this.name} (${this.id})`}getMinCoords(){let t=[];for(let r in this.coords){let i=this.coords[r],a=i.range||i.refRange;t.push(a?.min??0)}return t}static registry={};static get all(){return[...new Set(Object.values(Wr.registry))]}static register(t,r){if(arguments.length===1&&(r=arguments[0],t=r.id),r=this.get(r),this.registry[t]&&this.registry[t]!==r)throw new Error(`Duplicate color space registration: '${t}'`);if(this.registry[t]=r,arguments.length===1&&r.aliases)for(let i of r.aliases)this.register(i,r);return r}static get(t,...r){if(!t||wo(t,this))return t;if(gn(t)==="string"){let i=Wr.registry[t.toLowerCase()];if(!i)throw new TypeError(`No color space found with id = "${t}"`);return i}if(r.length)return Wr.get(...r);throw new TypeError(`${t} is not a valid color space`)}static findFormat(t,r=Wr.all){if(!t)return null;typeof t=="string"&&(t={name:t});for(let i of r)for(let[a,s]of Object.entries(i.formats)){s.name??=a,s.type??="function";let l=(!t.name||s.name===t.name)&&(!t.type||s.type===t.type);if(t.id){let h=s.ids||[s.id],c=Array.isArray(t.id)?t.id:[t.id];l&&=c.some(f=>h.includes(f))}if(l){let h=Zd.get(s,i);return h!==s&&(i.formats[s.name]=h),h}}return null}static resolveCoord(t,r){let i=gn(t),a,s;if(i==="string"?t.includes(".")?[a,s]=t.split("."):[a,s]=[,t]:Array.isArray(t)?[a,s]=t:(a=t.space,s=t.coordId),a=Wr.get(a),a||(a=r),!a)throw new TypeError(`Cannot resolve coordinate reference ${t}: No color space specified and relative references are not allowed here`);if(i=gn(s),i==="number"||i==="string"&&s>=0){let c=Object.entries(a.coords)[s];if(c)return{space:a,id:c[0],index:s,...c[1]}}a=Wr.get(a);let l=s.toLowerCase(),h=0;for(let c in a.coords){let f=a.coords[c];if(c.toLowerCase()===l||f.name?.toLowerCase()===l)return{space:a,id:c,index:h,...f};h++}throw new TypeError(`No "${s}" coordinate found in ${a.name}. Its coordinates are: ${Object.keys(a.coords).join(", ")}`)}static DEFAULT_FORMAT={type:"functions",name:"color"}};function Q5(e){let t=[e];for(let r=e;r=r.base;)t.push(r);return t}var Nt=new Ee({id:"xyz-d65",name:"XYZ D65",coords:{x:{refRange:[0,1],name:"X"},y:{refRange:[0,1],name:"Y"},z:{refRange:[0,1],name:"Z"}},white:"D65",formats:{color:{ids:["xyz-d65","xyz"]}},aliases:["xyz"]}),Gt=class extends Ee{constructor(e){e.coords||(e.coords={r:{range:[0,1],name:"Red"},g:{range:[0,1],name:"Green"},b:{range:[0,1],name:"Blue"}}),e.base||(e.base=Nt),e.toXYZ_M&&e.fromXYZ_M&&(e.toBase??=t=>{let r=wt(t,e.toXYZ_M);return this.white!==this.base.white&&(r=ia(this.white,this.base.white,r)),r},e.fromBase??=t=>(t=ia(this.base.white,this.white,t),wt(t,e.fromXYZ_M))),e.referred??="display",super(e)}};function Yd(e,t={}){if(Array.isArray(e))return e.map(c=>Yd(c,t));let{cssProperty:r="background-color",element:i,...a}=t,s=null;try{return Pe(e,a)}catch(c){s=c}let{CSS:l,getComputedStyle:h}=globalThis;if(bo(e)&&i&&l&&h&&l.supports(r,e)){let c=i.style[r];e!==c&&(i.style[r]=e);let f=h(i).getPropertyValue(r);if(e!==c&&(i.style[r]=c),f!==e)try{return Pe(f,a)}catch(p){s=p}else s={message:"Color value is a valid CSS color, but it could not be resolved :("}}return t.errorMeta&&(t.errorMeta.error=s),null}function ii(e,t){e=Pe(e);let r=Ee.get(t,t?.space),i=t?.precision,a;return!r||e.space.equals(r)?a=e.coords.slice():a=r.from(e),i===void 0?a:a.map(s=>Ys(s,i))}function hr(e,t){if(e=Pe(e),t==="alpha")return e.alpha??1;let{space:r,index:i}=Ee.resolveCoord(t,e.space);return ii(e,r)[i]}function tl(e,t,r,i){return e=Pe(e),Array.isArray(t)&&([t,r,i]=[e.space,t,r]),t=Ee.get(t),e.coords=t===e.space?r.slice():t.to(e.space,r),i!==void 0&&(e.alpha=i),e}tl.returns="color";function tn(e,t,r){if(e=Pe(e),arguments.length===2&&gn(arguments[1])==="object"){let i=arguments[1];for(let a in i)tn(e,a,i[a])}else if(typeof r=="function"&&(r=r(hr(e,t))),t==="alpha")e.alpha=r;else{let{space:i,index:a}=Ee.resolveCoord(t,e.space),s=ii(e,i);s[a]=r,tl(e,i,s)}return e}tn.returns="color";var rl=new Ee({id:"xyz-d50",name:"XYZ D50",white:"D50",base:Nt,fromBase:e=>ia(Nt.white,"D50",e),toBase:e=>ia("D50",Nt.white,e)}),ev=216/24389,Xd=24/116,sa=24389/27,nl=Zt.D50,fr=new Ee({id:"lab",name:"Lab",coords:{l:{refRange:[0,100],name:"Lightness"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:nl,base:rl,fromBase(e){let t=e.map((r,i)=>r/nl[i]).map(r=>r>ev?Math.cbrt(r):(sa*r+16)/116);return[116*t[1]-16,500*(t[0]-t[1]),200*(t[1]-t[2])]},toBase(e){let[t,r,i]=e,a=[];return a[1]=(t+16)/116,a[0]=r/500+a[1],a[2]=a[1]-i/200,[a[0]>Xd?Math.pow(a[0],3):(116*a[0]-16)/sa,e[0]>8?Math.pow((e[0]+16)/116,3):e[0]/sa,a[2]>Xd?Math.pow(a[2],3):(116*a[2]-16)/sa].map((s,l)=>s*nl[l])},formats:{lab:{coords:["<percentage> | <number>","<number> | <percentage>","<number> | <percentage>"]}}});function Mr(e){return typeof e!="number"?e:(e%360+360)%360}function Jd(e,t){let[r,i]=t,a=Ye(r),s=Ye(i);if(a&&s)return[r,i];if(a?r=i:s&&(i=r),e==="raw")return t;r=Mr(r),i=Mr(i);let l=i-r;return e==="increasing"?l<0&&(i+=360):e==="decreasing"?l>0&&(r+=360):e==="longer"?-180<l&&l<180&&(l>0?r+=360:i+=360):e==="shorter"&&(l>180?r+=360:l<-180&&(i+=360)),[r,i]}var pr=new Ee({id:"lch",name:"LCH",coords:{l:{refRange:[0,100],name:"Lightness"},c:{refRange:[0,150],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:fr,fromBase(e){if(this.ε===void 0){let l=Object.values(this.base.coords)[1].refRange,h=l[1]-l[0];this.ε=h/1e5}let[t,r,i]=e,a=Math.abs(r)<this.ε&&Math.abs(i)<this.ε,s=a?null:Mr(Math.atan2(i,r)*180/Math.PI);return[t,a?0:Math.sqrt(r**2+i**2),s]},toBase(e){let[t,r,i]=e,a=null,s=null;return Ye(i)||(r=r<0?0:r,a=r*Math.cos(i*Math.PI/180),s=r*Math.sin(i*Math.PI/180)),[t,a,s]},formats:{lch:{coords:["<percentage> | <number>","<number> | <percentage>","<number> | <angle>"]}}}),Qd=25**7,la=Math.PI,eu=180/la,_o=la/180;function tu(e){const t=e*e;return t*t*t*e}function ru(e,t,{kL:r=1,kC:i=1,kH:a=1}={}){[e,t]=Pe([e,t]);let[s,l,h]=fr.from(e),c=pr.from(fr,[s,l,h])[1],[f,p,w]=fr.from(t),b=pr.from(fr,[f,p,w])[1];c<0&&(c=0),b<0&&(b=0);let m=tu((c+b)/2),v=.5*(1-Math.sqrt(m/(m+Qd))),E=(1+v)*l,y=(1+v)*p,S=Math.sqrt(E**2+h**2),x=Math.sqrt(y**2+w**2),O=E===0&&h===0?0:Math.atan2(h,E),L=y===0&&w===0?0:Math.atan2(w,y);O<0&&(O+=2*la),L<0&&(L+=2*la),O*=eu,L*=eu;let N=f-s,Y=x-S,Z=L-O,ie=O+L,W=Math.abs(Z),ge;S*x===0?ge=0:W<=180?ge=Z:Z>180?ge=Z-360:Z<-180?ge=Z+360:ur.warn("the unthinkable has happened");let _e=2*Math.sqrt(x*S)*Math.sin(ge*_o/2),P=(s+f)/2,J=(S+x)/2,A=tu(J),ee;S*x===0?ee=ie:W<=180?ee=ie/2:ie<360?ee=(ie+360)/2:ee=(ie-360)/2;let Ce=(P-50)**2,de=1+.015*Ce/Math.sqrt(20+Ce),Oe=1+.045*J,ae=1;ae-=.17*Math.cos((ee-30)*_o),ae+=.24*Math.cos(2*ee*_o),ae+=.32*Math.cos((3*ee+6)*_o),ae-=.2*Math.cos((4*ee-63)*_o);let Ie=1+.015*J*ae,U=30*Math.exp(-1*((ee-275)/25)**2),G=2*Math.sqrt(A/(A+Qd)),Me=-1*Math.sin(2*U*_o)*G,me=(N/(r*de))**2;return me+=(Y/(i*Oe))**2,me+=(_e/(a*Ie))**2,me+=Me*(Y/(i*Oe))*(_e/(a*Ie)),Math.sqrt(me)}var tv=[[.819022437996703,.3619062600528904,-.1288737815209879],[.0329836539323885,.9292868615863434,.0361446663506424],[.0481771893596242,.2642395317527308,.6335478284694309]],rv=[[1.2268798758459243,-.5578149944602171,.2813910456659647],[-.0405757452148008,1.112286803280317,-.0717110580655164],[-.0763729366746601,-.4214933324022432,1.5869240198367816]],nv=[[.210454268309314,.7936177747023054,-.0040720430116193],[1.9779985324311684,-2.42859224204858,.450593709617411],[.0259040424655478,.7827717124575296,-.8086757549230774]],vn=[[1,.3963377773761749,.2158037573099136],[1,-.1055613458156586,-.0638541728258133],[1,-.0894841775298119,-1.2914855480194092]],Dr=new Ee({id:"oklab",name:"Oklab",coords:{l:{refRange:[0,1],name:"Lightness"},a:{refRange:[-.4,.4]},b:{refRange:[-.4,.4]}},white:"D65",base:Nt,fromBase(e){let t=wt(e,tv);return t[0]=Math.cbrt(t[0]),t[1]=Math.cbrt(t[1]),t[2]=Math.cbrt(t[2]),wt(t,nv,t)},toBase(e){let t=wt(e,vn);return t[0]=t[0]**3,t[1]=t[1]**3,t[2]=t[2]**3,wt(t,rv,t)},formats:{oklab:{coords:["<percentage> | <number>","<number> | <percentage>","<number> | <percentage>"]}}});function ol(e,t){[e,t]=Pe([e,t]);let[r,i,a]=Dr.from(e),[s,l,h]=Dr.from(t),c=r-s,f=i-l,p=a-h;return Math.sqrt(c**2+f**2+p**2)}var ov=75e-6;function jn(e,t,{epsilon:r=ov}={}){e=Pe(e),t||(t=e.space),t=Ee.get(t);let i=e.coords;return t!==e.space&&(i=t.from(e)),t.inGamut(i,{epsilon:r})}function yo(e){return{space:e.space,coords:e.coords.slice(),alpha:e.alpha}}function nu(e,t,r="lab"){r=Ee.get(r);let i=r.from(e),a=r.from(t);return Math.sqrt(i.reduce((s,l,h)=>{let c=a[h];return Ye(l)||Ye(c)?s:s+(c-l)**2},0))}function iv(e,t){return nu(e,t,"lab")}var ou=Math.PI/180;function av(e,t,{l:r=2,c:i=1}={}){[e,t]=Pe([e,t]);let[a,s,l]=fr.from(e),[,h,c]=pr.from(fr,[a,s,l]),[f,p,w]=fr.from(t),b=pr.from(fr,[f,p,w])[1];h<0&&(h=0),b<0&&(b=0);let m=a-f,v=h-b,E=s-p,y=l-w,S=E**2+y**2-v**2,x=.511;a>=16&&(x=.040975*a/(1+.01765*a));let O=.0638*h/(1+.0131*h)+.638,L;Ye(c)&&(c=0),c>=164&&c<=345?L=.56+Math.abs(.2*Math.cos((c+168)*ou)):L=.36+Math.abs(.4*Math.cos((c+35)*ou));let N=Math.pow(h,4),Y=Math.sqrt(N/(N+1900)),Z=O*(Y*L+1-Y),ie=(m/(r*x))**2;return ie+=(v/(i*O))**2,ie+=S/Z**2,Math.sqrt(ie)}var iu=203,il=new Ee({id:"xyz-abs-d65",cssId:"--xyz-abs-d65",name:"Absolute XYZ D65",coords:{x:{refRange:[0,9504.7],name:"Xa"},y:{refRange:[0,1e4],name:"Ya"},z:{refRange:[0,10888.3],name:"Za"}},base:Nt,fromBase(e){return e.map(t=>t*iu)},toBase(e){return e.map(t=>t/iu)}}),ca=1.15,da=.66,au=2610/2**14,sv=2**14/2610,su=3424/2**12,lu=2413/2**7,cu=2392/2**7,lv=1.7*2523/2**5,du=2**5/(1.7*2523),uu=-.56,al=16295499532821565e-27,cv=[[.41478972,.579999,.014648],[-.20151,1.120649,.0531008],[-.0166008,.2648,.6684799]],dv=[[1.9242264357876067,-1.0047923125953657,.037651404030618],[.35031676209499907,.7264811939316552,-.06538442294808501],[-.09098281098284752,-.3127282905230739,1.5227665613052603]],uv=[[.5,.5,0],[3.524,-4.066708,.542708],[.199076,1.096799,-1.295875]],hv=[[1,.13860504327153927,.05804731615611883],[1,-.1386050432715393,-.058047316156118904],[1,-.09601924202631895,-.811891896056039]],hu=new Ee({id:"jzazbz",name:"Jzazbz",coords:{jz:{refRange:[0,1],name:"Jz"},az:{refRange:[-.21,.21]},bz:{refRange:[-.21,.21]}},base:il,fromBase(e){let[t,r,i]=e,[a,s,l]=wt(wt([ca*t-(ca-1)*i,da*r-(da-1)*t,i],cv).map(function(h){return xt((su+lu*xt(h/1e4,au))/(1+cu*xt(h/1e4,au)),lv)}),uv);return[.43999999999999995*a/(1+uu*a)-al,s,l]},toBase(e){let[t,r,i]=e,[a,s,l]=wt(wt([(t+al)/(.43999999999999995-uu*(t+al)),r,i],hv).map(function(c){return 1e4*xt((su-xt(c,du))/(cu*xt(c,du)-lu),sv)}),dv),h=(a+(ca-1)*l)/ca;return[h,(s+(da-1)*h)/da,l]},formats:{jzazbz:{coords:["<percentage> | <number>","<number> | <percentage>","<number> | <percentage>"]}}}),sl=new Ee({id:"jzczhz",name:"JzCzHz",coords:{jz:{refRange:[0,1],name:"Jz"},cz:{refRange:[0,.26],name:"Chroma"},hz:{refRange:[0,360],type:"angle",name:"Hue"}},base:hu,fromBase:pr.fromBase,toBase:pr.toBase,formats:{jzczhz:{coords:["<percentage> | <number>","<number> | <percentage>","<number> | <angle>"]}}});function fv(e,t){[e,t]=Pe([e,t]);let[r,i,a]=sl.from(e),[s,l,h]=sl.from(t),c=r-s,f=i-l;Ye(a)&&Ye(h)?(a=0,h=0):Ye(a)?a=h:Ye(h)&&(h=a);let p=a-h,w=2*Math.sqrt(i*l)*Math.sin(p/2*(Math.PI/180));return Math.sqrt(c**2+f**2+w**2)}var fu=3424/4096,pu=2413/128,gu=2392/128,mu=2610/16384,pv=2523/32,gv=16384/2610,vu=32/2523,mv=[[.3592832590121217,.6976051147779502,-.035891593232029],[-.1920808463704993,1.100476797037432,.0753748658519118],[.0070797844607479,.0748396662186362,.8433265453898765]],vv=[[2048/4096,2048/4096,0],[6610/4096,-13613/4096,7003/4096],[17933/4096,-17390/4096,-543/4096]],bv=[[.9999999999999998,.0086090370379328,.111029625003026],[.9999999999999998,-.0086090370379328,-.1110296250030259],[.9999999999999998,.5600313357106791,-.3206271749873188]],wv=[[2.0701522183894223,-1.3263473389671563,.2066510476294053],[.3647385209748072,.6805660249472273,-.0453045459220347],[-.0497472075358123,-.0492609666966131,1.1880659249923042]],ll=new Ee({id:"ictcp",name:"ICTCP",coords:{i:{refRange:[0,1],name:"I"},ct:{refRange:[-.5,.5],name:"CT"},cp:{refRange:[-.5,.5],name:"CP"}},base:il,fromBase(e){return _v(wt(e,mv))},toBase(e){return wt(yv(e),wv)},formats:{ictcp:{coords:["<percentage> | <number>","<number> | <percentage>","<number> | <percentage>"]}}});function _v(e){return wt(e.map(function(t){return((fu+pu*(t/1e4)**mu)/(1+gu*(t/1e4)**mu))**pv}),vv)}function yv(e){return wt(e,bv).map(function(t){return 1e4*(Math.max(t**vu-fu,0)/(pu-gu*t**vu))**gv})}function kv(e,t){[e,t]=Pe([e,t]);let[r,i,a]=ll.from(e),[s,l,h]=ll.from(t);return 720*Math.sqrt((r-s)**2+.25*(i-l)**2+(a-h)**2)}function Ev(e,t){[e,t]=Pe([e,t]);let r=2,[i,a,s]=Dr.from(e),[l,h,c]=Dr.from(t),f=i-l,p=r*(a-h),w=r*(s-c);return Math.sqrt(f**2+p**2+w**2)}var Sv=Zt.D65,bu=.42,wu=1/bu,cl=2*Math.PI,_u=[[.401288,.650173,-.051461],[-.250268,1.204414,.045854],[-.002079,.048952,.953127]],Av=[[1.8620678550872327,-1.0112546305316843,.14918677544445175],[.38752654323613717,.6214474419314753,-.008973985167612518],[-.015841498849333856,-.03412293802851557,1.0499644368778496]],Mv=[[460,451,288],[460,-891,-261],[460,-220,-6300]],xv={dark:[.8,.525,.8],dim:[.9,.59,.9],average:[1,.69,1]},Kn={h:[20.14,90,164.25,237.53,380.14],e:[.8,.7,1,1.2,.8],H:[0,100,200,300,400]},Iv=180/Math.PI,yu=Math.PI/180;function ku(e,t){return e.map(r=>{const i=xt(t*Math.abs(r)*.01,bu);return 400*oa(i,r)/(i+27.13)})}function Cv(e,t){const r=100/t*27.13**wu;return e.map(i=>{const a=Math.abs(i);return oa(r*xt(a/(400-a),wu),i)})}function Ov(e){let t=Mr(e);t<=Kn.h[0]&&(t+=360);const r=Vd(Kn.h,t)-1,[i,a]=Kn.h.slice(r,r+2),[s,l]=Kn.e.slice(r,r+2),h=Kn.H[r],c=(t-i)/s;return h+100*c/(c+(a-t)/l)}function Tv(e){let t=(e%400+400)%400;const r=Math.floor(.01*t);t=t%100;const[i,a]=Kn.h.slice(r,r+2),[s,l]=Kn.e.slice(r,r+2);return Mr((t*(l*i-s*a)-100*i*l)/(t*(l-s)-100*l))}function Eu(e,t,r,i,a){const s={};s.discounting=a,s.refWhite=e,s.surround=i;const l=e.map(v=>v*100);s.la=t,s.yb=r;const h=l[1],c=wt(l,_u);let f=xv[s.surround];const p=f[0];s.c=f[1],s.nc=f[2];const w=(1/(5*s.la+1))**4;s.fl=w*s.la+.1*(1-w)*(1-w)*Math.cbrt(5*s.la),s.flRoot=s.fl**.25,s.n=s.yb/h,s.z=1.48+Math.sqrt(s.n),s.nbb=.725*s.n**-.2,s.ncb=s.nbb;const b=Math.max(Math.min(p*(1-1/3.6*Math.exp((-s.la-42)/92)),1),0);s.dRgb=c.map(v=>oi(1,h/v,b)),s.dRgbInv=s.dRgb.map(v=>1/v);const m=ku(c.map((v,E)=>v*s.dRgb[E]),s.fl);return s.aW=s.nbb*(2*m[0]+m[1]+.05*m[2]),s}var Su=Eu(Sv,64/Math.PI*.2,20,"average",!1);function dl(e,t){if(!(e.J!==void 0^e.Q!==void 0))throw new Error("Conversion requires one and only one: 'J' or 'Q'");if(!(e.C!==void 0^e.M!==void 0^e.s!==void 0))throw new Error("Conversion requires one and only one: 'C', 'M' or 's'");if(!(e.h!==void 0^e.H!==void 0))throw new Error("Conversion requires one and only one: 'h' or 'H'");if(e.J===0||e.Q===0)return[0,0,0];let r=0;e.h!==void 0?r=Mr(e.h)*yu:r=Tv(e.H)*yu;const i=Math.cos(r),a=Math.sin(r);let s=0;e.J!==void 0?s=xt(e.J,1/2)*.1:e.Q!==void 0&&(s=.25*t.c*e.Q/((t.aW+4)*t.flRoot));let l=0;e.C!==void 0?l=e.C/s:e.M!==void 0?l=e.M/t.flRoot/s:e.s!==void 0&&(l=4e-4*e.s**2*(t.aW+4)/t.c);const h=xt(l*Math.pow(1.64-Math.pow(.29,t.n),-.73),10/9),c=.25*(Math.cos(r+2)+3.8),f=t.aW*xt(s,2/t.c/t.z),p=5e4/13*t.nc*t.ncb*c,w=f/t.nbb,b=23*(w+.305)*Js(h,23*p+h*(11*i+108*a));return wt(Cv(wt([w,b*i,b*a],Mv).map(m=>m*1/1403),t.fl).map((m,v)=>m*t.dRgbInv[v]),Av).map(m=>m/100)}function Au(e,t){const r=ku(wt(e.map(E=>E*100),_u).map((E,y)=>E*t.dRgb[y]),t.fl),i=r[0]+(-12*r[1]+r[2])/11,a=(r[0]+r[1]-2*r[2])/9,s=(Math.atan2(a,i)%cl+cl)%cl,l=.25*(Math.cos(s+2)+3.8),h=xt(5e4/13*t.nc*t.ncb*Js(l*Math.sqrt(i**2+a**2),r[0]+r[1]+1.05*r[2]+.305),.9)*Math.pow(1.64-Math.pow(.29,t.n),.73),c=xt(t.nbb*(2*r[0]+r[1]+.05*r[2])/t.aW,.5*t.c*t.z),f=100*xt(c,2),p=4/t.c*c*(t.aW+4)*t.flRoot,w=h*c,b=w*t.flRoot,m=Mr(s*Iv),v=Ov(m);return{J:f,C:w,h:m,s:50*xt(t.c*h/(t.aW+4),1/2),Q:p,M:b,H:v}}var Lv=new Ee({id:"cam16-jmh",cssId:"--cam16-jmh",name:"CAM16-JMh",coords:{j:{refRange:[0,100],name:"J"},m:{refRange:[0,105],name:"Colorfulness"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:Nt,fromBase(e){this.ε===void 0&&(this.ε=Object.values(this.coords)[1].refRange[1]/1e5);const t=Au(e,Su),r=Math.abs(t.M)<this.ε;return[t.J,r?0:t.M,r?null:t.h]},toBase(e){return dl({J:e[0],M:e[1],h:e[2]},Su)}}),Rv=Zt.D65,Pv=216/24389,Mu=24389/27;function $v(e){return 116*(e>Pv?Math.cbrt(e):(Mu*e+16)/116)-16}function ul(e){return e>8?Math.pow((e+16)/116,3):e/Mu}function zv(e,t){let[r,i,a]=e,s=[],l=0;if(a===0)return[0,0,0];let h=ul(a);a>0?l=.00379058511492914*a**2+.608983189401032*a+.9155088574762233:l=9514440756550361e-21*a**2+.08693057439788597*a-21.928975842194614;const c=2e-12,f=15;let p=0,w=1/0;for(;p<=f;){s=dl({J:l,C:i,h:r},t);const b=Math.abs(s[1]-h);if(b<w){if(b<=c)return s;w=b}l=l-(s[1]-h)*l/(2*s[1]),p+=1}return dl({J:l,C:i,h:r},t)}function Dv(e,t){const r=$v(e[1]);if(r===0)return[0,0,0];const i=Au(e,hl);return[Mr(i.h),i.C,r]}var hl=Eu(Rv,200/Math.PI*ul(50),ul(50)*100,"average",!1),ai=new Ee({id:"hct",name:"HCT",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},c:{refRange:[0,145],name:"Colorfulness"},t:{refRange:[0,100],name:"Tone"}},base:Nt,fromBase(e){this.ε===void 0&&(this.ε=Object.values(this.coords)[1].refRange[1]/1e5);let t=Dv(e);return t[1]<this.ε&&(t[1]=0,t[0]=null),t},toBase(e){return zv(e,hl)},formats:{color:{id:"--hct",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}}),Nv=Math.PI/180,xu=[1,.007,.0228];function Iu(e){e[1]<0&&(e=ai.fromBase(ai.toBase(e)));const t=Math.log(Math.max(1+xu[2]*e[1]*hl.flRoot,1))/xu[2],r=e[0]*Nv,i=t*Math.cos(r),a=t*Math.sin(r);return[e[2],i,a]}function Bv(e,t){[e,t]=Pe([e,t]);let[r,i,a]=Iu(ai.from(e)),[s,l,h]=Iu(ai.from(t));return Math.sqrt((r-s)**2+(i-l)**2+(a-h)**2)}var ko={deltaE76:iv,deltaECMC:av,deltaE2000:ru,deltaEJz:fv,deltaEITP:kv,deltaEOK:ol,deltaEOK2:Ev,deltaEHCT:Bv};function Hv(e){return Math.max(parseFloat(`1e${(e?Math.floor(Math.log10(Math.abs(e))):0)-2}`),1e-6)}var Cu={hct:{method:"hct.c",jnd:2,deltaEMethod:"hct",blackWhiteClamp:{}},"hct-tonal":{method:"hct.c",jnd:0,deltaEMethod:"hct",blackWhiteClamp:{channel:"hct.t",min:0,max:100}}};function bn(e,{method:t=ur.gamut_mapping,space:r=void 0,deltaEMethod:i="",jnd:a=2,blackWhiteClamp:s=void 0}={}){if(e=Pe(e),bo(arguments[1])?r=arguments[1]:r||(r=e.space),r=Ee.get(r),jn(e,r,{epsilon:0}))return e;let l;if(t==="css")l=Fv(e,{space:r});else{if(t!=="clip"&&!jn(e,r)){Object.prototype.hasOwnProperty.call(Cu,t)&&({method:t,jnd:a,deltaEMethod:i,blackWhiteClamp:s}=Cu[t]);let h=ru;if(i!==""){for(let f in ko)if("deltae"+i.toLowerCase()===f.toLowerCase()){h=ko[f];break}}a===0&&(a=1e-16);let c=bn(it(e,r),{method:"clip",space:r});if(h(e,c)>a){if(s&&Object.keys(s).length===3){let S=Ee.resolveCoord(s.channel),x=hr(it(e,S.space),S.id);if(Ye(x)&&(x=0),x>=s.max)return it({space:"xyz-d65",coords:Zt.D65},e.space);if(x<=s.min)return it({space:"xyz-d65",coords:[0,0,0]},e.space)}let f=Ee.resolveCoord(t),p=f.space,w=f.id,b=it(e,p);b.coords.forEach((S,x)=>{Ye(S)&&(b.coords[x]=0)});let m=(f.range||f.refRange)[0],v=Hv(a),E=m,y=hr(b,w);for(;y-E>v;){let S=yo(b);S=bn(S,{space:r,method:"clip"}),h(b,S)-a<v?E=hr(b,w):y=hr(b,w),tn(b,w,(E+y)/2)}l=it(b,r)}else l=c}else l=it(e,r);if(t==="clip"||!jn(l,r,{epsilon:0})){let h=Object.values(r.coords).map(c=>c.range||[]);l.coords=l.coords.map((c,f)=>{let[p,w]=h[f];return p!==void 0&&(c=Math.max(p,c)),w!==void 0&&(c=Math.min(c,w)),c})}}return r!==e.space&&(l=it(l,e.space)),e.coords=l.coords,e}bn.returns="color";var Ou={WHITE:{space:Dr,coords:[1,0,0],alpha:1},BLACK:{space:Dr,coords:[0,0,0],alpha:1}};function Fv(e,{space:t}={}){e=Pe(e),t||(t=e.space),t=Ee.get(t);const a=Ee.get("oklch");if(t.isUnbounded)return it(e,t);const s=it(e,a);let l=s.coords[0];if(l>=1){const v=it(Ou.WHITE,t);return v.alpha=e.alpha,it(v,t)}if(l<=0){const v=it(Ou.BLACK,t);return v.alpha=e.alpha,it(v,t)}if(jn(s,t,{epsilon:0}))return it(s,t);function h(v){const E=it(v,t),y=Object.values(t.coords);return E.coords=E.coords.map((S,x)=>{if("range"in y[x]){const[O,L]=y[x].range;return na(O,S,L)}return S}),E}let c=0,f=s.coords[1],p=!0,w=yo(s),b=h(w),m=ol(b,w);if(m<.02)return b;for(;f-c>1e-4;){const v=(c+f)/2;if(w.coords[1]=v,p&&jn(w,t,{epsilon:0}))c=v;else if(b=h(w),m=ol(b,w),m<.02){if(.02-m<1e-4)break;p=!1,c=v}else f=v}return b}function it(e,t,{inGamut:r}={}){e=Pe(e),t=Ee.get(t);let i=t.from(e),a={space:t,coords:i,alpha:e.alpha};return r&&(a=bn(a,r===!0?void 0:r)),a}it.returns="color";function si(e,t={}){let{precision:r=ur.precision,format:i,inGamut:a=!0,coords:s,alpha:l,commas:h}=t,c,f=Pe(e),p=i,w=f.parseMeta;w&&!i&&(w.format.canSerialize()&&(i=w.format,p=w.formatId),s??=w.types,l??=w.alphaType,h??=w.commas),p&&(i=f.space.getFormat(i)??Ee.findFormat(p)),i||(i=f.space.getFormat("default")??Ee.DEFAULT_FORMAT,p=i.name),i&&i.space&&i.space!==f.space&&(f=it(f,i.space));let b=f.coords.slice();if(a||=i.toGamut,a&&!jn(f)&&(b=bn(yo(f),a===!0?void 0:a).coords),i.type==="custom")if(i.serialize)c=i.serialize(b,f.alpha,t);else throw new TypeError(`format ${p} can only be used to parse colors, not for serialization`);else{let m=i.name||"color",v=i.serializeCoords(b,r,s);if(m==="color"){let O=i.id||i.ids?.[0]||f.space.cssId||f.space.id;v.unshift(O)}let E=f.alpha;l!==void 0&&typeof l!="object"&&(l=typeof l=="string"?{type:l}:{include:l});let y=l?.type??"<number>",S=l?.include===!0||i.alpha===!0||l?.include!==!1&&i.alpha!==!1&&E<1,x="";if(h??=i.commas,S){if(r!==null){let O;y==="<percentage>"&&(O="%",E*=100),E=Ks(E,{precision:r,unit:O})}x=`${h?",":" /"} ${E}`}c=`${m}(${v.join(h?", ":" ")}${x})`}return c}var li=new Gt({id:"rec2020-linear",cssId:"--rec2020-linear",name:"Linear REC.2020",white:"D65",toXYZ_M:[[.6369580483012914,.14461690358620832,.1688809751641721],[.2627002120112671,.6779980715188708,.05930171646986196],[0,.028072693049087428,1.060985057710791]],fromXYZ_M:[[1.716651187971268,-.355670783776392,-.25336628137366],[-.666684351832489,1.616481236634939,.0157685458139111],[.017639857445311,-.042770613257809,.942103121235474]]}),Tu=new Gt({id:"rec2020",name:"REC.2020",base:li,toBase(e){return e.map(function(t){let r=t<0?-1:1,i=t*r;return r*Math.pow(i,2.4)})},fromBase(e){return e.map(function(t){let r=t<0?-1:1,i=t*r;return r*Math.pow(i,1/2.4)})}}),Lu=new Gt({id:"p3-linear",cssId:"display-p3-linear",name:"Linear P3",white:"D65",toXYZ_M:[[.4865709486482162,.26566769316909306,.1982172852343625],[.2289745640697488,.6917385218365064,.079286914093745],[0,.04511338185890264,1.043944368900976]],fromXYZ_M:[[2.493496911941425,-.9313836179191239,-.40271078445071684],[-.8294889695615747,1.7626640603183463,.023624685841943577],[.03584583024378447,-.07617238926804182,.9568845240076872]]}),Gv=[[.41239079926595934,.357584339383878,.1804807884018343],[.21263900587151027,.715168678767756,.07219231536073371],[.01933081871559182,.11919477979462598,.9505321522496607]],Ot=[[3.2409699419045226,-1.537383177570094,-.4986107602930034],[-.9692436362808796,1.8759675015077202,.04155505740717559],[.05563007969699366,-.20397695888897652,1.0569715142428786]],Ru=new Gt({id:"srgb-linear",name:"Linear sRGB",white:"D65",toXYZ_M:Gv,fromXYZ_M:Ot}),Pu={aliceblue:[240/255,248/255,1],antiquewhite:[250/255,235/255,215/255],aqua:[0,1,1],aquamarine:[127/255,1,212/255],azure:[240/255,1,1],beige:[245/255,245/255,220/255],bisque:[1,228/255,196/255],black:[0,0,0],blanchedalmond:[1,235/255,205/255],blue:[0,0,1],blueviolet:[138/255,43/255,226/255],brown:[165/255,42/255,42/255],burlywood:[222/255,184/255,135/255],cadetblue:[95/255,158/255,160/255],chartreuse:[127/255,1,0],chocolate:[210/255,105/255,30/255],coral:[1,127/255,80/255],cornflowerblue:[100/255,149/255,237/255],cornsilk:[1,248/255,220/255],crimson:[220/255,20/255,60/255],cyan:[0,1,1],darkblue:[0,0,139/255],darkcyan:[0,139/255,139/255],darkgoldenrod:[184/255,134/255,11/255],darkgray:[169/255,169/255,169/255],darkgreen:[0,100/255,0],darkgrey:[169/255,169/255,169/255],darkkhaki:[189/255,183/255,107/255],darkmagenta:[139/255,0,139/255],darkolivegreen:[85/255,107/255,47/255],darkorange:[1,140/255,0],darkorchid:[153/255,50/255,204/255],darkred:[139/255,0,0],darksalmon:[233/255,150/255,122/255],darkseagreen:[143/255,188/255,143/255],darkslateblue:[72/255,61/255,139/255],darkslategray:[47/255,79/255,79/255],darkslategrey:[47/255,79/255,79/255],darkturquoise:[0,206/255,209/255],darkviolet:[148/255,0,211/255],deeppink:[1,20/255,147/255],deepskyblue:[0,191/255,1],dimgray:[105/255,105/255,105/255],dimgrey:[105/255,105/255,105/255],dodgerblue:[30/255,144/255,1],firebrick:[178/255,34/255,34/255],floralwhite:[1,250/255,240/255],forestgreen:[34/255,139/255,34/255],fuchsia:[1,0,1],gainsboro:[220/255,220/255,220/255],ghostwhite:[248/255,248/255,1],gold:[1,215/255,0],goldenrod:[218/255,165/255,32/255],gray:[128/255,128/255,128/255],green:[0,128/255,0],greenyellow:[173/255,1,47/255],grey:[128/255,128/255,128/255],honeydew:[240/255,1,240/255],hotpink:[1,105/255,180/255],indianred:[205/255,92/255,92/255],indigo:[75/255,0,130/255],ivory:[1,1,240/255],khaki:[240/255,230/255,140/255],lavender:[230/255,230/255,250/255],lavenderblush:[1,240/255,245/255],lawngreen:[124/255,252/255,0],lemonchiffon:[1,250/255,205/255],lightblue:[173/255,216/255,230/255],lightcoral:[240/255,128/255,128/255],lightcyan:[224/255,1,1],lightgoldenrodyellow:[250/255,250/255,210/255],lightgray:[211/255,211/255,211/255],lightgreen:[144/255,238/255,144/255],lightgrey:[211/255,211/255,211/255],lightpink:[1,182/255,193/255],lightsalmon:[1,160/255,122/255],lightseagreen:[32/255,178/255,170/255],lightskyblue:[135/255,206/255,250/255],lightslategray:[119/255,136/255,153/255],lightslategrey:[119/255,136/255,153/255],lightsteelblue:[176/255,196/255,222/255],lightyellow:[1,1,224/255],lime:[0,1,0],limegreen:[50/255,205/255,50/255],linen:[250/255,240/255,230/255],magenta:[1,0,1],maroon:[128/255,0,0],mediumaquamarine:[102/255,205/255,170/255],mediumblue:[0,0,205/255],mediumorchid:[186/255,85/255,211/255],mediumpurple:[147/255,112/255,219/255],mediumseagreen:[60/255,179/255,113/255],mediumslateblue:[123/255,104/255,238/255],mediumspringgreen:[0,250/255,154/255],mediumturquoise:[72/255,209/255,204/255],mediumvioletred:[199/255,21/255,133/255],midnightblue:[25/255,25/255,112/255],mintcream:[245/255,1,250/255],mistyrose:[1,228/255,225/255],moccasin:[1,228/255,181/255],navajowhite:[1,222/255,173/255],navy:[0,0,128/255],oldlace:[253/255,245/255,230/255],olive:[128/255,128/255,0],olivedrab:[107/255,142/255,35/255],orange:[1,165/255,0],orangered:[1,69/255,0],orchid:[218/255,112/255,214/255],palegoldenrod:[238/255,232/255,170/255],palegreen:[152/255,251/255,152/255],paleturquoise:[175/255,238/255,238/255],palevioletred:[219/255,112/255,147/255],papayawhip:[1,239/255,213/255],peachpuff:[1,218/255,185/255],peru:[205/255,133/255,63/255],pink:[1,192/255,203/255],plum:[221/255,160/255,221/255],powderblue:[176/255,224/255,230/255],purple:[128/255,0,128/255],rebeccapurple:[102/255,51/255,153/255],red:[1,0,0],rosybrown:[188/255,143/255,143/255],royalblue:[65/255,105/255,225/255],saddlebrown:[139/255,69/255,19/255],salmon:[250/255,128/255,114/255],sandybrown:[244/255,164/255,96/255],seagreen:[46/255,139/255,87/255],seashell:[1,245/255,238/255],sienna:[160/255,82/255,45/255],silver:[192/255,192/255,192/255],skyblue:[135/255,206/255,235/255],slateblue:[106/255,90/255,205/255],slategray:[112/255,128/255,144/255],slategrey:[112/255,128/255,144/255],snow:[1,250/255,250/255],springgreen:[0,1,127/255],steelblue:[70/255,130/255,180/255],tan:[210/255,180/255,140/255],teal:[0,128/255,128/255],thistle:[216/255,191/255,216/255],tomato:[1,99/255,71/255],turquoise:[64/255,224/255,208/255],violet:[238/255,130/255,238/255],wheat:[245/255,222/255,179/255],white:[1,1,1],whitesmoke:[245/255,245/255,245/255],yellow:[1,1,0],yellowgreen:[154/255,205/255,50/255]},$u=Array(3).fill("<percentage> | <number>[0, 255]"),zu=Array(3).fill("<number>[0, 255]"),Yn=new Gt({id:"srgb",name:"sRGB",base:Ru,fromBase:e=>e.map(t=>{let r=t<0?-1:1,i=t*r;return i>.0031308?r*(1.055*i**(1/2.4)-.055):12.92*t}),toBase:e=>e.map(t=>{let r=t<0?-1:1,i=t*r;return i<=.04045?t/12.92:r*((i+.055)/1.055)**2.4}),formats:{rgb:{coords:$u},rgb_number:{name:"rgb",commas:!0,coords:zu,alpha:!1},color:{},rgba:{coords:$u,commas:!0,alpha:!0},rgba_number:{name:"rgba",commas:!0,coords:zu},hex:{type:"custom",toGamut:!0,test:e=>/^#(([a-f0-9]{2}){3,4}|[a-f0-9]{3,4})$/i.test(e),parse(e){e.length<=5&&(e=e.replace(/[a-f0-9]/gi,"$&$&"));let t=[];return e.replace(/[a-f0-9]{2}/gi,r=>{t.push(parseInt(r,16)/255)}),{spaceId:"srgb",coords:t.slice(0,3),alpha:t.slice(3)[0]}},serialize:(e,t,{collapse:r=!0,alpha:i}={})=>{(i!==!1&&t<1||i===!0)&&e.push(t),e=e.map(s=>Math.round(s*255));let a=r&&e.every(s=>s%17===0);return"#"+e.map(s=>a?(s/17).toString(16):s.toString(16).padStart(2,"0")).join("")}},keyword:{type:"custom",test:e=>/^[a-z]+$/i.test(e),parse(e){e=e.toLowerCase();let t={spaceId:"srgb",coords:null,alpha:1};if(e==="transparent"?(t.coords=Pu.black,t.alpha=0):t.coords=Pu[e],t.coords)return t}}}}),Du=new Gt({id:"p3",cssId:"display-p3",name:"P3",base:Lu,fromBase:Yn.fromBase,toBase:Yn.toBase});ur.display_space=Yn;var Wv;if(typeof CSS<"u"&&CSS.supports)for(let e of[fr,Tu,Du]){let t=si({space:e,coords:e.getMinCoords(),alpha:1});if(CSS.supports("color",t)){ur.display_space=e;break}}function Uv(e,{space:t=ur.display_space,...r}={}){e=Pe(e);let i=si(e,r);if(typeof CSS>"u"||CSS.supports("color",i)||!ur.display_space)i=new String(i),i.color=e;else{let a=e;if((e.coords.some(Ye)||Ye(e.alpha))&&!(Wv??=CSS.supports("color","hsl(none 50% 50%)"))&&(a=yo(e),a.coords=a.coords.map(Mt),a.alpha=Mt(a.alpha),i=si(a,r),CSS.supports("color",i)))return i=new String(i),i.color=a,i;a=it(a,t),i=new String(si(a,r)),i.color=a}return i}function Vv(e,t,{space:r,hue:i="shorter"}={}){e=Pe(e),r||=e.space,r=Ee.get(r);let a=Object.values(r.coords);[e,t]=[e,t].map(f=>it(f,r));let[s,l]=[e,t].map(f=>f.coords),h=s.map((f,p)=>{let w=a[p],b=l[p];return w.type==="angle"&&([f,b]=Jd(i,[f,b])),Nu(f,b)}),c=Nu(e.alpha,t.alpha);return{space:r,coords:h,alpha:c}}function Nu(e,t){return Ye(e)||Ye(t)?e===t?null:0:e-t}function qv(e,t){return e=Pe(e),t=Pe(t),e.space===t.space&&e.alpha===t.alpha&&e.coords.every((r,i)=>r===t.coords[i])}function wn(e){return hr(e,[Nt,"y"])}function Bu(e,t){tn(e,[Nt,"y"],t)}function Zv(e){Object.defineProperty(e.prototype,"luminance",{get(){return wn(this)},set(t){Bu(this,t)}})}var jv=Object.freeze({__proto__:null,getLuminance:wn,register:Zv,setLuminance:Bu});function Kv(e,t){e=Pe(e),t=Pe(t);let r=Math.max(wn(e),0),i=Math.max(wn(t),0);return i>r&&([r,i]=[i,r]),(r+.05)/(i+.05)}var Yv=.56,Xv=.57,Jv=.62,Qv=.65,Hu=.022,e4=1.414,t4=.1,r4=5e-4,n4=1.14,Fu=.027,o4=1.14;function Gu(e){return e>=Hu?e:e+(Hu-e)**e4}function Eo(e){return(e<0?-1:1)*Math.pow(Math.abs(e),2.4)}function i4(e,t){t=Pe(t),e=Pe(e);let r,i,a,s,l,h;t=it(t,"srgb"),[s,l,h]=t.coords.map(m=>Ye(m)?0:m);let c=Eo(s)*.2126729+Eo(l)*.7151522+Eo(h)*.072175;e=it(e,"srgb"),[s,l,h]=e.coords.map(m=>Ye(m)?0:m);let f=Eo(s)*.2126729+Eo(l)*.7151522+Eo(h)*.072175,p=Gu(c),w=Gu(f),b=w>p;return Math.abs(w-p)<r4?i=0:b?(r=w**Yv-p**Xv,i=r*n4):(r=w**Qv-p**Jv,i=r*o4),Math.abs(i)<t4?a=0:i>0?a=i-Fu:a=i+Fu,a*100}function a4(e,t){e=Pe(e),t=Pe(t);let r=Math.max(wn(e),0),i=Math.max(wn(t),0);i>r&&([r,i]=[i,r]);let a=r+i;return a===0?0:(r-i)/a}var s4=5e4;function l4(e,t){e=Pe(e),t=Pe(t);let r=Math.max(wn(e),0),i=Math.max(wn(t),0);return i>r&&([r,i]=[i,r]),i===0?s4:(r-i)/i}function c4(e,t){e=Pe(e),t=Pe(t);let r=hr(e,[fr,"l"]),i=hr(t,[fr,"l"]);return Math.abs(r-i)}var d4=216/24389,Wu=24/116,ua=24389/27,fl=Zt.D65,pl=new Ee({id:"lab-d65",name:"Lab D65",coords:{l:{refRange:[0,100],name:"Lightness"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:fl,base:Nt,fromBase(e){let t=e.map((r,i)=>r/fl[i]).map(r=>r>d4?Math.cbrt(r):(ua*r+16)/116);return[116*t[1]-16,500*(t[0]-t[1]),200*(t[1]-t[2])]},toBase(e){let t=[];return t[1]=(e[0]+16)/116,t[0]=e[1]/500+t[1],t[2]=t[1]-e[2]/200,[t[0]>Wu?Math.pow(t[0],3):(116*t[0]-16)/ua,e[0]>8?Math.pow((e[0]+16)/116,3):e[0]/ua,t[2]>Wu?Math.pow(t[2],3):(116*t[2]-16)/ua].map((r,i)=>r*fl[i])},formats:{"lab-d65":{coords:["<number> | <percentage>","<number> | <percentage>","<number> | <percentage>"]}}}),gl=Math.pow(5,.5)*.5+.5;function u4(e,t){e=Pe(e),t=Pe(t);let r=hr(e,[pl,"l"]),i=hr(t,[pl,"l"]),a=Math.abs(Math.pow(r,gl)-Math.pow(i,gl)),s=Math.pow(a,1/gl)*Math.SQRT2-40;return s<7.5?0:s}var ha=Object.freeze({__proto__:null,contrastAPCA:i4,contrastDeltaPhi:u4,contrastLstar:c4,contrastMichelson:a4,contrastWCAG21:Kv,contrastWeber:l4});function h4(e,t,r){bo(r)&&(r={algorithm:r});let{algorithm:i,...a}=r||{};if(!i){let s=Object.keys(ha).map(l=>l.replace(/^contrast/,"")).join(", ");throw new TypeError(`contrast() function needs a contrast algorithm. Please specify one of: ${s}`)}e=Pe(e),t=Pe(t);for(let s in ha)if("contrast"+i.toLowerCase()===s.toLowerCase())return ha[s](e,t,a);throw new TypeError(`Unknown contrast algorithm: ${i}`)}function fa(e){let[t,r,i]=ii(e,Nt),a=t+15*r+3*i;return[4*t/a,9*r/a]}function Uu(e){let[t,r,i]=ii(e,Nt),a=t+r+i;return[t/a,r/a]}function f4(e){Object.defineProperty(e.prototype,"uv",{get(){return fa(this)}}),Object.defineProperty(e.prototype,"xy",{get(){return Uu(this)}})}var p4=Object.freeze({__proto__:null,register:f4,uv:fa,xy:Uu});function ci(e,t,r={}){bo(r)&&(r={method:r});let{method:i=ur.deltaE,...a}=r;for(let s in ko)if("deltae"+i.toLowerCase()===s.toLowerCase())return ko[s](e,t,a);throw new TypeError(`Unknown deltaE method: ${i}`)}function Vu(e,t=.25){return tn(e,[Ee.get("oklch","lch"),"l"],r=>r*(1+t))}function qu(e,t=.25){return tn(e,[Ee.get("oklch","lch"),"l"],r=>r*(1-t))}Vu.returns="color",qu.returns="color";var g4=Object.freeze({__proto__:null,darken:qu,lighten:Vu});function Zu(e,t,r,i={}){return[e,t]=[Pe(e),Pe(t)],gn(r)==="object"&&([r,i]=[.5,r]),di(e,t,i)(r??.5)}function ju(e,t,r={}){let i;ml(e)&&([i,r]=[e,t],[e,t]=i.rangeArgs.colors);let{maxDeltaE:a,deltaEMethod:s,steps:l=2,maxSteps:h=1e3,...c}=r;i||([e,t]=[Pe(e),Pe(t)],i=di(e,t,c));let f=ci(e,t),p=a>0?Math.max(l,Math.ceil(f/a)+1):l,w=[];if(h!==void 0&&(p=Math.min(p,h)),p===1)w=[{p:.5,color:i(.5)}];else{let b=1/(p-1);w=Array.from({length:p},(m,v)=>{let E=v*b;return{p:E,color:i(E)}})}if(a>0){let b=w.reduce((m,v,E)=>{if(E===0)return 0;let y=ci(v.color,w[E-1].color,s);return Math.max(m,y)},0);for(;b>a;){b=0;for(let m=1;m<w.length&&w.length<h;m++){let v=w[m-1],E=w[m],y=(E.p+v.p)/2,S=i(y);b=Math.max(b,ci(S,v.color),ci(S,E.color)),w.splice(m,0,{p:y,color:i(y)}),m++}}}return w=w.map(b=>b.color),w}function di(e,t,r={}){if(ml(e)){let[c,f]=[e,t];return di(...c.rangeArgs.colors,{...c.rangeArgs.options,...f})}let{space:i,outputSpace:a,progression:s,premultiplied:l}=r;e=Pe(e),t=Pe(t),e=yo(e),t=yo(t);let h={colors:[e,t],options:r};if(i?i=Ee.get(i):i=Ee.registry[ur.interpolationSpace]||e.space,a=a?Ee.get(a):i,e=it(e,i),t=it(t,i),e=bn(e),t=bn(t),i.coords.h&&i.coords.h.type==="angle"){let c=r.hue=r.hue||"shorter",f=[i,"h"],[p,w]=[hr(e,f),hr(t,f)];Ye(p)&&!Ye(w)?p=w:Ye(w)&&!Ye(p)&&(w=p),[p,w]=Jd(c,[p,w]),tn(e,f,p),tn(t,f,w)}return l&&(e.coords=e.coords.map(c=>c*e.alpha),t.coords=t.coords.map(c=>c*t.alpha)),Object.assign(c=>{c=s?s(c):c;let f=e.coords.map((b,m)=>{let v=t.coords[m];return oi(b,v,c)}),p=oi(e.alpha,t.alpha,c),w={space:i,coords:f,alpha:p};return l&&(w.coords=w.coords.map(b=>b/p)),a!==i&&(w=it(w,a)),w},{rangeArgs:h})}function ml(e){return gn(e)==="function"&&!!e.rangeArgs}ur.interpolationSpace="lab";function m4(e){e.defineFunction("mix",Zu,{returns:"color"}),e.defineFunction("range",di,{returns:"function<color>"}),e.defineFunction("steps",ju,{returns:"array<color>"})}var v4=Object.freeze({__proto__:null,isRange:ml,mix:Zu,range:di,register:m4,steps:ju}),b4=new Ee({id:"hsl",name:"HSL",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:Yn,fromBase:e=>{let t=Math.max(...e),r=Math.min(...e),[i,a,s]=e,[l,h,c]=[null,0,(r+t)/2],f=t-r;if(f!==0){switch(h=c===0||c===1?0:(t-c)/Math.min(c,1-c),t){case i:l=(a-s)/f+(a<s?6:0);break;case a:l=(s-i)/f+2;break;case s:l=(i-a)/f+4}l=l*60}return h<0&&(l+=180,h=Math.abs(h)),l>=360&&(l-=360),[l,h*100,c*100]},toBase:e=>{let[t,r,i]=e;t=t%360,t<0&&(t+=360),r/=100,i/=100;function a(s){let l=(s+t/30)%12,h=r*Math.min(i,1-i);return i-h*Math.max(-1,Math.min(l-3,9-l,1))}return[a(0),a(8),a(4)]},formats:{hsl:{coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]},hsla:{coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"],commas:!0,alpha:!0}}}),Ku=new Ee({id:"hsv",name:"HSV",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},v:{range:[0,100],name:"Value"}},base:Yn,fromBase(e){let t=Math.max(...e),r=Math.min(...e),[i,a,s]=e,[l,h,c]=[null,0,t],f=t-r;if(f!==0){switch(t){case i:l=(a-s)/f+(a<s?6:0);break;case a:l=(s-i)/f+2;break;case s:l=(i-a)/f+4}l=l*60}return c&&(h=f/c),l>=360&&(l-=360),[l,h*100,c*100]},toBase(e){let[t,r,i]=e;t=t%360,t<0&&(t+=360),r/=100,i/=100;function a(s){let l=(s+t/60)%6;return i-i*r*Math.max(0,Math.min(l,4-l,1))}return[a(5),a(3),a(1)]},formats:{color:{id:"--hsv",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}}),w4=new Ee({id:"hwb",name:"HWB",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},w:{range:[0,100],name:"Whiteness"},b:{range:[0,100],name:"Blackness"}},base:Ku,fromBase(e){let[t,r,i]=e;return[t,i*(100-r)/100,100-i]},toBase(e){let[t,r,i]=e;r/=100,i/=100;let a=r+i;if(a>=1)return[t,0,r/a*100];let s=1-i;return[t,(s===0?0:1-r/s)*100,s*100]},formats:{hwb:{coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}}),Yu=new Gt({id:"a98rgb-linear",cssId:"--a98-rgb-linear",name:"Linear Adobe® 98 RGB compatible",white:"D65",toXYZ_M:[[.5766690429101305,.1855582379065463,.1882286462349947],[.29734497525053605,.6273635662554661,.07529145849399788],[.02703136138641234,.07068885253582723,.9913375368376388]],fromXYZ_M:[[2.0415879038107465,-.5650069742788596,-.34473135077832956],[-.9692436362808795,1.8759675015077202,.04155505740717557],[.013444280632031142,-.11836239223101838,1.0151749943912054]]}),_4=new Gt({id:"a98rgb",cssId:"a98-rgb",name:"Adobe® 98 RGB compatible",base:Yu,toBase:e=>e.map(t=>Math.pow(Math.abs(t),563/256)*Math.sign(t)),fromBase:e=>e.map(t=>Math.pow(Math.abs(t),256/563)*Math.sign(t))}),Xu=new Gt({id:"prophoto-linear",cssId:"--prophoto-rgb-linear",name:"Linear ProPhoto",white:"D50",base:rl,toXYZ_M:[[.7977666449006423,.13518129740053308,.0313477341283922],[.2880748288194013,.711835234241873,8993693872564e-17],[0,0,.8251046025104602]],fromXYZ_M:[[1.3457868816471583,-.25557208737979464,-.05110186497554526],[-.5446307051249019,1.5082477428451468,.02052744743642139],[0,0,1.2119675456389452]]}),y4=1/512,k4=16/512,E4=new Gt({id:"prophoto",cssId:"prophoto-rgb",name:"ProPhoto",base:Xu,toBase(e){return e.map(t=>{let r=t<0?-1:1,i=t*r;return i<k4?t/16:r*i**1.8})},fromBase(e){return e.map(t=>{let r=t<0?-1:1,i=t*r;return i>=y4?r*i**(1/1.8):16*t})}}),pa=1.09929682680944,Ju=.018053968510807,S4=new Gt({id:"--rec2020-oetf",name:"REC.2020_Scene_Referred",base:li,referred:"scene",toBase(e){return e.map(function(t){let r=t<0?-1:1,i=t*r;return i<Ju*4.5?t/4.5:r*Math.pow((i+pa-1)/pa,1/.45)})},fromBase(e){return e.map(function(t){let r=t<0?-1:1,i=t*r;return i>=Ju?r*(pa*Math.pow(i,.45)-(pa-1)):4.5*t})}}),A4=new Ee({id:"oklch",name:"OkLCh",coords:{l:{refRange:[0,1],name:"Lightness"},c:{refRange:[0,.4],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},white:"D65",base:Dr,fromBase:pr.fromBase,toBase:pr.toBase,formats:{oklch:{coords:["<percentage> | <number>","<number> | <percentage>","<number> | <angle>"]}}}),So=2*Math.PI,ga=[[4.076741636075958,-3.307711539258063,.2309699031821043],[-1.2684379732850315,2.609757349287688,-.341319376002657],[-.0041960761386756,-.7034186179359362,1.7076146940746117]],ma=[[[-1.8817031,-.80936501],[1.19086277,1.76576728,.59662641,.75515197,.56771245]],[[1.8144408,-1.19445267],[.73956515,-.45954404,.08285427,.12541073,-.14503204]],[[.13110758,1.81333971],[1.35733652,-.00915799,-1.1513021,-.50559606,.00692167]]],vl=Number.MAX_VALUE,va=.206,Qu=.03,ui=1.206/1.03;function Bt(e,t){let r=e.length;if(r!==t.length)throw new Error(`Vectors of size ${r} and ${t.length} are not aligned`);let i=0;return e.forEach((a,s)=>{i+=a*t[s]}),i}function hi(e){return .5*(ui*e-va+Math.sqrt((ui*e-va)*(ui*e-va)+4*Qu*ui*e))}function Ao(e){return(e**2+va*e)/(ui*(e+Qu))}function bl(e){let[t,r]=e;return[r/t,r/(1-t)]}function M4(e,t){return[.11516993+1/(7.4477897+4.1590124*t+e*(-2.19557347+1.75198401*t+e*(-2.13704948-10.02301043*t+e*(-4.24894561+5.38770819*t+4.69891013*e)))),.11239642+1/(1.6132032-.68124379*t+e*(.40370612+.90148123*t+e*(-.27087943+.6122399*t+e*(.00299215-.45399568*t-.14661872*e))))]}function wl(e,t){let r=wt(e,vn);return r[0]=r[0]**3,r[1]=r[1]**3,r[2]=r[2]**3,wt(r,t,r)}function ba(e,t,r,i){let a=I4(e,t,r,i),s=wl([1,a*e,a*t],r),l=xt(1/Math.max(...s),1/3);return[l,l*a]}function x4(e,t,r,i,a,s,l,h){let c;if(h===void 0&&(h=ba(e,t,s,l)),(r-a)*h[1]-(h[0]-a)*i<=0)c=h[1]*a/(i*h[0]+h[1]*(a-r));else{c=h[1]*(a-1)/(i*(h[0]-1)+h[1]*(a-r));let f=r-a,p=i,w=Bt(vn[0].slice(1),[e,t]),b=Bt(vn[1].slice(1),[e,t]),m=Bt(vn[2].slice(1),[e,t]),v=f+p*w,E=f+p*b,y=f+p*m,S=a*(1-c)+c*r,x=c*i,O=S+x*w,L=S+x*b,N=S+x*m,Y=O**3,Z=L**3,ie=N**3,W=3*v*O**2,ge=3*E*L**2,_e=3*y*N**2,P=6*v**2*O,J=6*E**2*L,A=6*y**2*N,ee=Bt(s[0],[Y,Z,ie])-1,Ce=Bt(s[0],[W,ge,_e]),de=Bt(s[0],[P,J,A]),Oe=Ce/(Ce*Ce-.5*ee*de),ae=-ee*Oe,Ie=Bt(s[1],[Y,Z,ie])-1,U=Bt(s[1],[W,ge,_e]),G=Bt(s[1],[P,J,A]),Me=U/(U*U-.5*Ie*G),me=-Ie*Me,pe=Bt(s[2],[Y,Z,ie])-1,Ke=Bt(s[2],[W,ge,_e]),mt=Bt(s[2],[P,J,A]),Ve=Ke/(Ke*Ke-.5*pe*mt),We=-pe*Ve;ae=Oe>=0?ae:vl,me=Me>=0?me:vl,We=Ve>=0?We:vl,c+=Math.min(ae,Math.min(me,We))}return c}function e0(e,t,r){let[i,a,s]=e,l=ba(a,s,t,r),h=x4(a,s,i,1,i,t,r,l),c=bl(l),f=h/Math.min(i*c[0],(1-i)*c[1]),p=M4(a,s),w=i*p[0],b=(1-i)*p[1],m=.9*f*Math.sqrt(Math.sqrt(1/(1/w**4+1/b**4)));return w=i*.4,b=(1-i)*.8,[Math.sqrt(1/(1/w**2+1/b**2)),m,h]}function I4(e,t,r,i){let a,s,l,h,c,f,p,w;Bt(i[0][0],[e,t])>1?([a,s,l,h,c]=i[0][1],[f,p,w]=r[0]):Bt(i[1][0],[e,t])>1?([a,s,l,h,c]=i[1][1],[f,p,w]=r[1]):([a,s,l,h,c]=i[2][1],[f,p,w]=r[2]);let b=a+s*e+l*t+h*e**2+c*e*t,m=Bt(vn[0].slice(1),[e,t]),v=Bt(vn[1].slice(1),[e,t]),E=Bt(vn[2].slice(1),[e,t]),y=1+b*m,S=1+b*v,x=1+b*E,O=y**3,L=S**3,N=x**3,Y=3*m*y**2,Z=3*v*S**2,ie=3*E*x**2,W=6*m**2*y,ge=6*v**2*S,_e=6*E**2*x,P=f*O+p*L+w*N,J=f*Y+p*Z+w*ie,A=f*W+p*ge+w*_e;return b=b-P*J/(J**2-.5*P*A),b}function C4(e,t,r){let[i,a,s]=e,l=Ao(s),h=null,c=null;if(i=Mr(i)/360,l!==0&&l!==1&&a!==0){let f=Math.cos(So*i),p=Math.sin(So*i),[w,b,m]=e0([l,f,p],t,r),v=.8,E=1.25,y,S,x,O;a<v?(y=E*a,S=0,x=v*w,O=1-x/b):(y=5*(a-.8),S=b,x=.2*b**2*1.25**2/w,O=1-x/(m-b));let L=S+y*x/(1-O*y);h=L*f,c=L*p}return[l,h,c]}function O4(e,t,r){let i=1e-7,a=1e-4,s=e[0],l=0,h=hi(s),c=Math.sqrt(e[1]**2+e[2]**2),f=.5+Math.atan2(-e[2],-e[1])/So;if(h!==0&&h!==1&&c!==0){let[w,b,m]=e0([s,e[1]/c,e[2]/c],t,r),v=.8,E=1.25,y,S,x,O;c<b?(S=v*w,x=1-S/b,O=c/(S+x*c),l=O*v):(y=b,S=.2*b**2*E**2/w,x=1-S/(m-b),O=(c-y)/(S+x*(c-y)),l=v+.2*O)}const p=Math.abs(l)<a;return p||h===0||Math.abs(1-h)<i?(f=null,p||(l=0)):f=Mr(f*360),[f,l,h]}var T4=new Ee({id:"okhsl",name:"Okhsl",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,1],name:"Saturation"},l:{range:[0,1],name:"Lightness"}},base:Dr,gamutSpace:"self",fromBase(e){return O4(e,ga,ma)},toBase(e){return C4(e,ga,ma)},formats:{color:{id:"--okhsl",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}}),t0=new Ee({id:"oklrab",name:"Oklrab",coords:{l:{refRange:[0,1],name:"Lightness"},a:{refRange:[-.4,.4]},b:{refRange:[-.4,.4]}},white:"D65",base:Dr,fromBase(e){return[hi(e[0]),e[1],e[2]]},toBase(e){return[Ao(e[0]),e[1],e[2]]},formats:{color:{coords:["<percentage> | <number>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}}),L4=new Ee({id:"oklrch",name:"Oklrch",coords:{l:{refRange:[0,1],name:"Lightness"},c:{refRange:[0,.4],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},white:"D65",base:t0,fromBase:pr.fromBase,toBase:pr.toBase,formats:{color:{coords:["<percentage> | <number>","<number> | <percentage>[0,1]","<number> | <angle>"]}}});function R4(e,t,r){let[i,a,s]=e;i=Mr(i)/360;let l=Ao(s),h=null,c=null;if(l!==0&&a!==0){let f=Math.cos(So*i),p=Math.sin(So*i),[w,b]=bl(ba(f,p,t,r)),m=.5,v=1-m/w,E=1-a*m/(m+b-b*v*a),y=a*b*m/(m+b-b*v*a);l=s*E;let S=s*y,x=Ao(E),O=y*x/E,L=Ao(l);S=S*L/l,l=L;let[N,Y,Z]=wl([x,f*O,p*O],t),ie=xt(1/Math.max(Math.max(N,Y),Math.max(Z,0)),1/3);l=l*ie,S=S*ie,h=S*f,c=S*p}return[l,h,c]}function P4(e,t,r){let i=1e-4,a=e[0],s=0,l=hi(a),h=Math.sqrt(e[1]**2+e[2]**2),c=.5+Math.atan2(-e[2],-e[1])/So;if(a!==0&&a!==1&&h!==0){let f=e[1]/h,p=e[2]/h,[w,b]=bl(ba(f,p,t,r)),m=.5,v=1-m/w,E=b/(h+a*b),y=E*a,S=E*h,x=Ao(y),O=S*x/y,[L,N,Y]=wl([x,f*O,p*O],t),Z=xt(1/Math.max(Math.max(L,N),Math.max(Y,0)),1/3);a=a/Z,h=h/Z,h=h*hi(a)/a,a=hi(a),l=a/y,s=(m+b)*S/(b*m+b*v*S)}return Math.abs(s)<i||l===0?c=null:c=Mr(c*360),[c,s,l]}var $4=new Ee({id:"okhsv",name:"Okhsv",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,1],name:"Saturation"},v:{range:[0,1],name:"Value"}},base:Dr,gamutSpace:"self",fromBase(e){return P4(e,ga,ma)},toBase(e){return R4(e,ga,ma)},formats:{color:{id:"--okhsv",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}}),r0=Zt.D65,z4=216/24389,n0=24389/27,[o0,i0]=fa({space:Nt,coords:r0}),a0=new Ee({id:"luv",name:"Luv",coords:{l:{refRange:[0,100],name:"Lightness"},u:{refRange:[-215,215]},v:{refRange:[-215,215]}},white:r0,base:Nt,fromBase(e){let t=[Mt(e[0]),Mt(e[1]),Mt(e[2])],r=t[1],[i,a]=fa({space:Nt,coords:t});if(!Number.isFinite(i)||!Number.isFinite(a))return[0,0,0];let s=r<=z4?n0*r:116*Math.cbrt(r)-16;return[s,13*s*(i-o0),13*s*(a-i0)]},toBase(e){let[t,r,i]=e;if(t===0||Ye(t))return[0,0,0];r=Mt(r),i=Mt(i);let a=r/(13*t)+o0,s=i/(13*t)+i0,l=t<=8?t/n0:Math.pow((t+16)/116,3);return[l*(9*a/(4*s)),l,l*((12-3*a-20*s)/(4*s))]},formats:{color:{id:"--luv",coords:["<number> | <percentage>","<number> | <percentage>","<number> | <percentage>"]}}}),_l=new Ee({id:"lchuv",name:"LChuv",coords:{l:{refRange:[0,100],name:"Lightness"},c:{refRange:[0,220],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:a0,fromBase:pr.fromBase,toBase:pr.toBase,formats:{color:{id:"--lchuv",coords:["<number> | <percentage>","<number> | <percentage>","<number> | <angle>"]}}}),D4=216/24389,N4=24389/27,s0=Ot[0][0],l0=Ot[0][1],yl=Ot[0][2],c0=Ot[1][0],d0=Ot[1][1],kl=Ot[1][2],u0=Ot[2][0],h0=Ot[2][1],El=Ot[2][2];function Mo(e,t,r){const i=t/(Math.sin(r)-e*Math.cos(r));return i<0?1/0:i}function wa(e){const t=Math.pow(e+16,3)/1560896,r=t>D4?t:e/N4,i=r*(284517*s0-94839*yl),a=r*(838422*yl+769860*l0+731718*s0),s=r*(632260*yl-126452*l0),l=r*(284517*c0-94839*kl),h=r*(838422*kl+769860*d0+731718*c0),c=r*(632260*kl-126452*d0),f=r*(284517*u0-94839*El),p=r*(838422*El+769860*h0+731718*u0),w=r*(632260*El-126452*h0);return{r0s:i/s,r0i:a*e/s,r1s:i/(s+126452),r1i:(a-769860)*e/(s+126452),g0s:l/c,g0i:h*e/c,g1s:l/(c+126452),g1i:(h-769860)*e/(c+126452),b0s:f/w,b0i:p*e/w,b1s:f/(w+126452),b1i:(p-769860)*e/(w+126452)}}function f0(e,t){const r=t/360*Math.PI*2,i=Mo(e.r0s,e.r0i,r),a=Mo(e.r1s,e.r1i,r),s=Mo(e.g0s,e.g0i,r),l=Mo(e.g1s,e.g1i,r),h=Mo(e.b0s,e.b0i,r),c=Mo(e.b1s,e.b1i,r);return Math.min(i,a,s,l,h,c)}var B4=new Ee({id:"hsluv",name:"HSLuv",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:_l,gamutSpace:Yn,fromBase(e){let[t,r,i]=[Mt(e[0]),Mt(e[1]),Mt(e[2])],a;return t>99.9999999?(a=0,t=100):t<1e-8?(a=0,t=0):a=r/f0(wa(t),i)*100,[i,a,t]},toBase(e){let[t,r,i]=[Mt(e[0]),Mt(e[1]),Mt(e[2])],a;return i>99.9999999?(i=100,a=0):i<1e-8?(i=0,a=0):a=f0(wa(i),t)/100*r,[i,a,t]},formats:{color:{id:"--hsluv",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}});Ot[0][0],Ot[0][1],Ot[0][2],Ot[1][0],Ot[1][1],Ot[1][2],Ot[2][0],Ot[2][1],Ot[2][2];function xo(e,t){return Math.abs(t)/Math.sqrt(Math.pow(e,2)+1)}function p0(e){let t=xo(e.r0s,e.r0i),r=xo(e.r1s,e.r1i),i=xo(e.g0s,e.g0i),a=xo(e.g1s,e.g1i),s=xo(e.b0s,e.b0i),l=xo(e.b1s,e.b1i);return Math.min(t,r,i,a,s,l)}var H4=new Ee({id:"hpluv",name:"HPLuv",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:_l,gamutSpace:"self",fromBase(e){let[t,r,i]=[Mt(e[0]),Mt(e[1]),Mt(e[2])],a;return t>99.9999999?(a=0,t=100):t<1e-8?(a=0,t=0):a=r/p0(wa(t))*100,[i,a,t]},toBase(e){let[t,r,i]=[Mt(e[0]),Mt(e[1]),Mt(e[2])],a;return i>99.9999999?(i=100,a=0):i<1e-8?(i=0,a=0):a=p0(wa(i))/100*r,[i,a,t]},formats:{color:{id:"--hpluv",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}}),Sl=new Gt({id:"rec2100-linear",name:"Linear REC.2100",white:"D65",toBase:li.toBase,fromBase:li.fromBase}),g0=203,m0=2610/2**14,F4=2**14/2610,G4=2523/2**5,v0=2**5/2523,b0=3424/2**12,w0=2413/2**7,_0=2392/2**7,W4=new Gt({id:"rec2100pq",cssId:"rec2100-pq",name:"REC.2100-PQ",base:Sl,toBase(e){return e.map(function(t){return(Math.max(t**v0-b0,0)/(w0-_0*t**v0))**F4*1e4/g0})},fromBase(e){return e.map(function(t){let r=Math.max(t*g0/1e4,0);return((b0+w0*r**m0)/(1+_0*r**m0))**G4})}}),y0=.17883277,k0=.28466892,E0=.55991073,Al=3.7743,U4=new Gt({id:"rec2100hlg",cssId:"rec2100-hlg",name:"REC.2100-HLG",referred:"scene",base:Sl,toBase(e){return e.map(function(t){return t<=.5?t**2/3*Al:(Math.exp((t-E0)/y0)+k0)/12*Al})},fromBase(e){return e.map(function(t){return t/=Al,t<=1/12?xt(3*t,.5):y0*Math.log(12*t-k0)+E0})}}),S0={};mn.add("chromatic-adaptation-start",e=>{e.options.method&&(e.M=A0(e.W1,e.W2,e.options.method))}),mn.add("chromatic-adaptation-end",e=>{e.M||(e.M=A0(e.W1,e.W2,e.options.method))});function _a({id:e,toCone_M:t,fromCone_M:r}){S0[e]=arguments[0]}function A0(e,t,r="Bradford"){let i=S0[r],[a,s,l]=ni(i.toCone_M,e),[h,c,f]=ni(i.toCone_M,t),p=ni([[h/a,0,0],[0,c/s,0],[0,0,f/l]],i.toCone_M);return ni(i.fromCone_M,p)}_a({id:"von Kries",toCone_M:[[.40024,.7076,-.08081],[-.2263,1.16532,.0457],[0,0,.91822]],fromCone_M:[[1.8599363874558397,-1.1293816185800916,.21989740959619328],[.3611914362417676,.6388124632850422,-6370596838649899e-21],[0,0,1.0890636230968613]]}),_a({id:"Bradford",toCone_M:[[.8951,.2664,-.1614],[-.7502,1.7135,.0367],[.0389,-.0685,1.0296]],fromCone_M:[[.9869929054667121,-.14705425642099013,.15996265166373122],[.4323052697233945,.5183602715367774,.049291228212855594],[-.00852866457517732,.04004282165408486,.96848669578755]]}),_a({id:"CAT02",toCone_M:[[.7328,.4296,-.1624],[-.7036,1.6975,.0061],[.003,.0136,.9834]],fromCone_M:[[1.0961238208355142,-.27886900021828726,.18274517938277307],[.4543690419753592,.4735331543074117,.07209780371722911],[-.009627608738429355,-.00569803121611342,1.0153256399545427]]}),_a({id:"CAT16",toCone_M:[[.401288,.650173,-.051461],[-.250268,1.204414,.045854],[-.002079,.048952,.953127]],fromCone_M:[[1.862067855087233,-1.0112546305316845,.14918677544445172],[.3875265432361372,.6214474419314753,-.008973985167612521],[-.01584149884933386,-.03412293802851557,1.0499644368778496]]}),Object.assign(Zt,{A:[1.0985,1,.35585],C:[.98074,1,1.18232],D55:[.95682,1,.92149],D75:[.94972,1,1.22638],E:[1,1,1],F2:[.99186,1,.67393],F7:[.95041,1,1.08747],F11:[1.00962,1,.6435]}),Zt.ACES=[.32168/.33767,1,.34065/.33767];var M0=new Gt({id:"acescg",cssId:"--acescg",name:"ACEScg",coords:{r:{range:[0,65504],name:"Red"},g:{range:[0,65504],name:"Green"},b:{range:[0,65504],name:"Blue"}},referred:"scene",white:Zt.ACES,toXYZ_M:[[.6624541811085053,.13400420645643313,.1561876870049078],[.27222871678091454,.6740817658111484,.05368951740793705],[-.005574649490394108,.004060733528982826,1.0103391003129971]],fromXYZ_M:[[1.6410233796943257,-.32480329418479,-.23642469523761225],[-.6636628587229829,1.6153315916573379,.016756347685530137],[.011721894328375376,-.008284441996237409,.9883948585390215]]}),ya=2**-16,Ml=-.35828683,ka=(Math.log2(65504)+9.72)/17.52,V4=new Gt({id:"acescc",cssId:"--acescc",name:"ACEScc",coords:{r:{range:[Ml,ka],name:"Red"},g:{range:[Ml,ka],name:"Green"},b:{range:[Ml,ka],name:"Blue"}},referred:"scene",base:M0,toBase(e){const t=-.3013698630136986;return e.map(function(r){return r<=t?(2**(r*17.52-9.72)-ya)*2:r<ka?2**(r*17.52-9.72):65504})},fromBase(e){return e.map(function(t){return t<=0?(Math.log2(ya)+9.72)/17.52:t<ya?(Math.log2(ya+t*.5)+9.72)/17.52:(Math.log2(t)+9.72)/17.52})}}),x0=Object.freeze({__proto__:null,A98RGB:_4,A98RGB_Linear:Yu,ACEScc:V4,ACEScg:M0,CAM16_JMh:Lv,HCT:ai,HPLuv:H4,HSL:b4,HSLuv:B4,HSV:Ku,HWB:w4,ICTCP:ll,JzCzHz:sl,Jzazbz:hu,LCH:pr,LCHuv:_l,Lab:fr,Lab_D65:pl,Luv:a0,OKLCH:A4,OKLab:Dr,OKLrCH:L4,OKLrab:t0,Okhsl:T4,Okhsv:$4,P3:Du,P3_Linear:Lu,ProPhoto:E4,ProPhoto_Linear:Xu,REC_2020:Tu,REC_2020_Linear:li,REC_2020_Scene_Referred:S4,REC_2100_HLG:U4,REC_2100_Linear:Sl,REC_2100_PQ:W4,XYZ_ABS_D65:il,XYZ_D50:rl,XYZ_D65:Nt,sRGB:Yn,sRGB_Linear:Ru}),ut=class sr{constructor(...t){let r;if(t.length===1){let l={};typeof t[0]=="object"&&Object.getPrototypeOf(t[0]).constructor===Object&&(t[0]={...t[0]}),r=Pe(t[0],{parseMeta:l}),l.format&&(this.parseMeta=l)}let i,a,s;r?(i=r.space||r.spaceId,a=r.coords,s=r.alpha):[i,a,s]=t,Object.defineProperty(this,"space",{value:Ee.get(i),writable:!1,enumerable:!0,configurable:!0}),this.coords=a?a.slice():[0,0,0],this.alpha=Ye(s)?s:s===void 0?1:na(0,s,1);for(let l in this.space.coords)Object.defineProperty(this,l,{get:()=>this.get(l),set:h=>this.set(l,h)})}get spaceId(){return this.space.id}clone(){return new sr(this.space,this.coords,this.alpha)}toJSON(){return{spaceId:this.spaceId,coords:this.coords,alpha:this.alpha}}display(...t){let r=Uv(this,...t);return r.color=new sr(r.color),r}static get(t,...r){return wo(t,this)?t:new sr(t,...r)}static try(t,r){if(wo(t,this))return t;let i=Yd(t,r);return i?new sr(i):null}static defineFunction(t,r,i=r){let{instance:a=!0,returns:s}=i,l=function(...h){let c=r(...h);if(s==="color")c=sr.get(c);else if(s==="function<color>"){let f=c;c=function(...p){let w=f(...p);return sr.get(w)},Object.assign(c,f)}else s==="array<color>"&&(c=c.map(f=>sr.get(f)));return c};t in sr||(sr[t]=l),a&&(sr.prototype[t]=function(...h){return l(this,...h)})}static defineFunctions(t){for(let r in t)sr.defineFunction(r,t[r],t[r])}static extend(t){if(t.register)t.register(sr);else for(let r in t)sr.defineFunction(r,t[r])}};ut.defineFunctions({get:hr,getAll:ii,set:tn,setAll:tl,to:it,equals:qv,inGamut:jn,toGamut:bn,distance:nu,deltas:Vv,toString:si}),Object.assign(ut,{util:j5,hooks:mn,WHITES:Zt,Space:Ee,spaces:Ee.registry,parse:jd,defaults:ur});for(let e of Object.keys(x0))Ee.register(x0[e]);for(let e in Ee.registry)xl(e,Ee.registry[e]);mn.add("colorspace-init-end",e=>{xl(e.id,e),e.aliases?.forEach(t=>{xl(t,e)})});function xl(e,t){let r=e.replace(/-/g,"_");Object.defineProperty(ut.prototype,r,{get(){let i=this.getAll(e);if(typeof Proxy>"u")return i;let a=new Proxy(i,{has:(s,l)=>{try{return Ee.resolveCoord([t,l]),!0}catch{}return Reflect.has(s,l)},get:(s,l,h)=>{if(l&&typeof l!="symbol"&&!(l in s)&&l in a){let{index:c}=Ee.resolveCoord([t,l]);if(c>=0)return s[c]}return Reflect.get(s,l,h)},set:(s,l,h,c)=>{if(l&&typeof l!="symbol"&&!(l in s)||Number(l)>=0){let{index:f}=Ee.resolveCoord([t,l]);if(f>=0)return s[f]=h,this.setAll(e,s),!0}return Reflect.set(s,l,h,c)}});return a},set(i){this.setAll(e,i)},configurable:!0,enumerable:!0})}ut.extend(ko),ut.extend({deltaE:ci}),Object.assign(ut,{deltaEMethods:ko}),ut.extend(g4),ut.extend({contrast:h4}),ut.extend(p4),ut.extend(jv),ut.extend(v4),ut.extend(ha);var Il={navy:"#001f3f",darkblue:"#1e4f7a",blue:"#1A2F4B",darkgreen:"#062925",green:"#1A3636",grass:"#1B3C53",teal:"#044A42",darkpurple:"#1B0044",purple:"#363062",grape:"#31326F",maroon:"#44000D"},It={dark:{50:"#C1C2C5",100:"#A6A7AB",200:"#909296",300:"#5c5f66",400:"#373A40",500:"#2C2E33",600:"#25262b",700:"#1A1B1E",800:"#141517",900:"#101113",950:"#000000"},slate:{50:"oklch(98.4% 0.003 247.858)",100:"oklch(96.8% 0.007 247.896)",200:"oklch(92.9% 0.013 255.508)",300:"oklch(86.9% 0.022 252.894)",400:"oklch(70.4% 0.04 256.788)",500:"oklch(55.4% 0.046 257.417)",600:"oklch(44.6% 0.043 257.281)",700:"oklch(37.2% 0.044 257.287)",800:"oklch(27.9% 0.041 260.031)",900:"oklch(20.8% 0.042 265.755)",950:"oklch(12.9% 0.042 264.695)"},gray:{50:"oklch(98.5% 0.002 247.839)",100:"oklch(96.7% 0.003 264.542)",200:"oklch(92.8% 0.006 264.531)",300:"oklch(87.2% 0.01 258.338)",400:"oklch(70.7% 0.022 261.325)",500:"oklch(55.1% 0.027 264.364)",600:"oklch(44.6% 0.03 256.802)",700:"oklch(37.3% 0.034 259.733)",800:"oklch(27.8% 0.033 256.848)",900:"oklch(21% 0.034 264.665)",950:"oklch(13% 0.028 261.692)"},zinc:{50:"oklch(98.5% 0 0)",100:"oklch(96.7% 0.001 286.375)",200:"oklch(92% 0.004 286.32)",300:"oklch(87.1% 0.006 286.286)",400:"oklch(70.5% 0.015 286.067)",500:"oklch(55.2% 0.016 285.938)",600:"oklch(44.2% 0.017 285.786)",700:"oklch(37% 0.013 285.805)",800:"oklch(27.4% 0.006 286.033)",900:"oklch(21% 0.006 285.885)",950:"oklch(14.1% 0.005 285.823)"},neutral:{50:"oklch(98.5% 0 0)",100:"oklch(97% 0 0)",200:"oklch(92.2% 0 0)",300:"oklch(87% 0 0)",400:"oklch(70.8% 0 0)",500:"oklch(55.6% 0 0)",600:"oklch(43.9% 0 0)",700:"oklch(37.1% 0 0)",800:"oklch(26.9% 0 0)",900:"oklch(20.5% 0 0)",950:"oklch(14.5% 0 0)"},stone:{50:"oklch(98.5% 0.001 106.423)",100:"oklch(97% 0.001 106.424)",200:"oklch(92.3% 0.003 48.717)",300:"oklch(86.9% 0.005 56.366)",400:"oklch(70.9% 0.01 56.259)",500:"oklch(55.3% 0.013 58.071)",600:"oklch(44.4% 0.011 73.639)",700:"oklch(37.4% 0.01 67.558)",800:"oklch(26.8% 0.007 34.298)",900:"oklch(21.6% 0.006 56.043)",950:"oklch(14.7% 0.004 49.25)"},red:{50:"oklch(97.1% 0.013 17.38)",100:"oklch(93.6% 0.032 17.717)",200:"oklch(88.5% 0.062 18.334)",300:"oklch(80.8% 0.114 19.571)",400:"oklch(70.4% 0.191 22.216)",500:"oklch(63.7% 0.237 25.331)",600:"oklch(57.7% 0.245 27.325)",700:"oklch(50.5% 0.213 27.518)",800:"oklch(44.4% 0.177 26.899)",900:"oklch(39.6% 0.141 25.723)",950:"oklch(25.8% 0.092 26.042)"},orange:{50:"oklch(98% 0.016 73.684)",100:"oklch(95.4% 0.038 75.164)",200:"oklch(90.1% 0.076 70.697)",300:"oklch(83.7% 0.128 66.29)",400:"oklch(75% 0.183 55.934)",500:"oklch(70.5% 0.213 47.604)",600:"oklch(64.6% 0.222 41.116)",700:"oklch(55.3% 0.195 38.402)",800:"oklch(47% 0.157 37.304)",900:"oklch(40.8% 0.123 38.172)",950:"oklch(26.6% 0.079 36.259)"},amber:{50:"oklch(98.7% 0.022 95.277)",100:"oklch(96.2% 0.059 95.617)",200:"oklch(92.4% 0.12 95.746)",300:"oklch(87.9% 0.169 91.605)",400:"oklch(82.8% 0.189 84.429)",500:"oklch(76.9% 0.188 70.08)",600:"oklch(66.6% 0.179 58.318)",700:"oklch(55.5% 0.163 48.998)",800:"oklch(47.3% 0.137 46.201)",900:"oklch(41.4% 0.112 45.904)",950:"oklch(27.9% 0.077 45.635)"},yellow:{50:"oklch(98.7% 0.026 102.212)",100:"oklch(97.3% 0.071 103.193)",200:"oklch(94.5% 0.129 101.54)",300:"oklch(90.5% 0.182 98.111)",400:"oklch(85.2% 0.199 91.936)",500:"oklch(79.5% 0.184 86.047)",600:"oklch(68.1% 0.162 75.834)",700:"oklch(55.4% 0.135 66.442)",800:"oklch(47.6% 0.114 61.907)",900:"oklch(42.1% 0.095 57.708)",950:"oklch(28.6% 0.066 53.813)"},lime:{50:"oklch(98.6% 0.031 120.757)",100:"oklch(96.7% 0.067 122.328)",200:"oklch(93.8% 0.127 124.321)",300:"oklch(89.7% 0.196 126.665)",400:"oklch(84.1% 0.238 128.85)",500:"oklch(76.8% 0.233 130.85)",600:"oklch(64.8% 0.2 131.684)",700:"oklch(53.2% 0.157 131.589)",800:"oklch(45.3% 0.124 130.933)",900:"oklch(40.5% 0.101 131.063)",950:"oklch(27.4% 0.072 132.109)"},green:{50:"oklch(98.2% 0.018 155.826)",100:"oklch(96.2% 0.044 156.743)",200:"oklch(92.5% 0.084 155.995)",300:"oklch(87.1% 0.15 154.449)",400:"oklch(79.2% 0.209 151.711)",500:"oklch(72.3% 0.219 149.579)",600:"oklch(62.7% 0.194 149.214)",700:"oklch(52.7% 0.154 150.069)",800:"oklch(44.8% 0.119 151.328)",900:"oklch(39.3% 0.095 152.535)",950:"oklch(26.6% 0.065 152.934)"},emerald:{50:"oklch(97.9% 0.021 166.113)",100:"oklch(95% 0.052 163.051)",200:"oklch(90.5% 0.093 164.15)",300:"oklch(84.5% 0.143 164.978)",400:"oklch(76.5% 0.177 163.223)",500:"oklch(69.6% 0.17 162.48)",600:"oklch(59.6% 0.145 163.225)",700:"oklch(50.8% 0.118 165.612)",800:"oklch(43.2% 0.095 166.913)",900:"oklch(37.8% 0.077 168.94)",950:"oklch(26.2% 0.051 172.552)"},teal:{50:"oklch(98.4% 0.014 180.72)",100:"oklch(95.3% 0.051 180.801)",200:"oklch(91% 0.096 180.426)",300:"oklch(85.5% 0.138 181.071)",400:"oklch(77.7% 0.152 181.912)",500:"oklch(70.4% 0.14 182.503)",600:"oklch(60% 0.118 184.704)",700:"oklch(51.1% 0.096 186.391)",800:"oklch(43.7% 0.078 188.216)",900:"oklch(38.6% 0.063 188.416)",950:"oklch(27.7% 0.046 192.524)"},cyan:{50:"oklch(98.4% 0.019 200.873)",100:"oklch(95.6% 0.045 203.388)",200:"oklch(91.7% 0.08 205.041)",300:"oklch(86.5% 0.127 207.078)",400:"oklch(78.9% 0.154 211.53)",500:"oklch(71.5% 0.143 215.221)",600:"oklch(60.9% 0.126 221.723)",700:"oklch(52% 0.105 223.128)",800:"oklch(45% 0.085 224.283)",900:"oklch(39.8% 0.07 227.392)",950:"oklch(30.2% 0.056 229.695)"},sky:{50:"oklch(97.7% 0.013 236.62)",100:"oklch(95.1% 0.026 236.824)",200:"oklch(90.1% 0.058 230.902)",300:"oklch(82.8% 0.111 230.318)",400:"oklch(74.6% 0.16 232.661)",500:"oklch(68.5% 0.169 237.323)",600:"oklch(58.8% 0.158 241.966)",700:"oklch(50% 0.134 242.749)",800:"oklch(44.3% 0.11 240.79)",900:"oklch(39.1% 0.09 240.876)",950:"oklch(29.3% 0.066 243.157)"},blue:{50:"oklch(97% 0.014 254.604)",100:"oklch(93.2% 0.032 255.585)",200:"oklch(88.2% 0.059 254.128)",300:"oklch(80.9% 0.105 251.813)",400:"oklch(70.7% 0.165 254.624)",500:"oklch(62.3% 0.214 259.815)",600:"oklch(54.6% 0.245 262.881)",700:"oklch(48.8% 0.243 264.376)",800:"oklch(42.4% 0.199 265.638)",900:"oklch(37.9% 0.146 265.522)",950:"oklch(28.2% 0.091 267.935)"},indigo:{50:"oklch(96.2% 0.018 272.314)",100:"oklch(93% 0.034 272.788)",200:"oklch(87% 0.065 274.039)",300:"oklch(78.5% 0.115 274.713)",400:"oklch(67.3% 0.182 276.935)",500:"oklch(58.5% 0.233 277.117)",600:"oklch(51.1% 0.262 276.966)",700:"oklch(45.7% 0.24 277.023)",800:"oklch(39.8% 0.195 277.366)",900:"oklch(35.9% 0.144 278.697)",950:"oklch(25.7% 0.09 281.288)"},violet:{50:"oklch(96.9% 0.016 293.756)",100:"oklch(94.3% 0.029 294.588)",200:"oklch(89.4% 0.057 293.283)",300:"oklch(81.1% 0.111 293.571)",400:"oklch(70.2% 0.183 293.541)",500:"oklch(60.6% 0.25 292.717)",600:"oklch(54.1% 0.281 293.009)",700:"oklch(49.1% 0.27 292.581)",800:"oklch(43.2% 0.232 292.759)",900:"oklch(38% 0.189 293.745)",950:"oklch(28.3% 0.141 291.089)"},purple:{50:"oklch(97.7% 0.014 308.299)",100:"oklch(94.6% 0.033 307.174)",200:"oklch(90.2% 0.063 306.703)",300:"oklch(82.7% 0.119 306.383)",400:"oklch(71.4% 0.203 305.504)",500:"oklch(62.7% 0.265 303.9)",600:"oklch(55.8% 0.288 302.321)",700:"oklch(49.6% 0.265 301.924)",800:"oklch(43.8% 0.218 303.724)",900:"oklch(38.1% 0.176 304.987)",950:"oklch(29.1% 0.149 302.717)"},fuchsia:{50:"oklch(97.7% 0.017 320.058)",100:"oklch(95.2% 0.037 318.852)",200:"oklch(90.3% 0.076 319.62)",300:"oklch(83.3% 0.145 321.434)",400:"oklch(74% 0.238 322.16)",500:"oklch(66.7% 0.295 322.15)",600:"oklch(59.1% 0.293 322.896)",700:"oklch(51.8% 0.253 323.949)",800:"oklch(45.2% 0.211 324.591)",900:"oklch(40.1% 0.17 325.612)",950:"oklch(29.3% 0.136 325.661)"},pink:{50:"oklch(97.1% 0.014 343.198)",100:"oklch(94.8% 0.028 342.258)",200:"oklch(89.9% 0.061 343.231)",300:"oklch(82.3% 0.12 346.018)",400:"oklch(71.8% 0.202 349.761)",500:"oklch(65.6% 0.241 354.308)",600:"oklch(59.2% 0.249 0.584)",700:"oklch(52.5% 0.223 3.958)",800:"oklch(45.9% 0.187 3.815)",900:"oklch(40.8% 0.153 2.432)",950:"oklch(28.4% 0.109 3.907)"},rose:{50:"oklch(96.9% 0.015 12.422)",100:"oklch(94.1% 0.03 12.58)",200:"oklch(89.2% 0.058 10.001)",300:"oklch(81% 0.117 11.638)",400:"oklch(71.2% 0.194 13.428)",500:"oklch(64.5% 0.246 16.439)",600:"oklch(58.6% 0.253 17.585)",700:"oklch(51.4% 0.222 16.935)",800:"oklch(45.5% 0.188 13.697)",900:"oklch(41% 0.159 10.272)",950:"oklch(27.1% 0.105 12.094)"}};function q4(e){try{ut.get(e)}catch{return!0}return ut.contrast(e,"white","Lstar")>ut.contrast(e,"black","Lstar")}function Io(e){return q4(e)?"#FFFFFF":"#000000"}var Z4=xe.default.fromPairs(xe.default.entries(Us).map(([e,t])=>[e,Nd(t)])),{IconAdjustmentsHorizontal:ZS,IconApiBook:jS,IconArrowsHorizontal:KS,IconArrowsLeftRight:YS,IconArrowAutofitDown:XS,IconArrowAutofitHeight:j4,IconArrowAutofitLeft:JS,IconArrowAutofitRight:QS,IconArrowAutofitWidth:K4,IconArrowBigLeft:eA,IconArrowBigRight:tA,IconArrowsMove:rA,IconArrowsMoveVertical:nA,IconArrowsVertical:oA,IconBook:iA,IconBookOff:aA,IconBookArrowLeft:sA,IconBookArrowRight:lA,IconBooksReturn:cA,IconBookUpload:dA,IconBookmark:Y4,IconBookmarkOff:X4,IconBookmarks:uA,IconBoxAlignTop:hA,IconCategory:J4,IconCheck:Ea,IconChevronLeft:fA,IconChevronRight:pA,IconAlertCircle:gA,IconCircleCheck:mA,IconCircleX:vA,IconHelp:bA,IconInfoCircle:wA,IconComic1:_A,IconComic1Flat:yA,IconComic2:kA,IconComic2Flat:EA,IconComic3:SA,IconComic3Flat:AA,IconDeviceFloppy:MA,IconDotsVertical:xA,IconEReader1:IA,IconEReader1Flat:CA,IconEReader2:OA,IconEReader2Flat:TA,IconExternalLink:LA,IconEye:Q4,IconEyeOff:e3,IconFileDownload:RA,IconFilePercent:PA,IconFolderOpen:$A,IconHandClick:zA,IconKeyboard:DA,IconLayoutDashboard:NA,IconLayoutBottombar:BA,IconLayoutBottombarInactive:HA,IconLayoutSidebar:FA,IconLayoutSidebarInactive:GA,IconLayoutSidebarRight:WA,IconLayoutSidebarRightInactive:UA,IconListNumbers:VA,IconLoader2:qA,IconLocationCog:ZA,IconMenu2:jA,IconMenuDeep:KA,IconMessage:YA,IconMoon:XA,IconPage:JA,IconPageFlat:QA,IconPalette:eM,IconPencil:tM,IconPencilCog:rM,IconPhoto:nM,IconPhotoOff:oM,IconPin:iM,IconPlayerPause:aM,IconPlayerPlay:sM,IconRefresh:t3,IconSettings:lM,IconSettingsOff:cM,IconSpacingHorizontal:r3,IconSpacingVertical:dM,IconSun:uM,IconTrash:hM,IconWorldCog:fM,IconX:Cl,IconZoom:pM,IconZoomCancel:n3,IconZoomIn:o3,IconZoomInArea:gM,IconZoomOut:i3,IconZoomOutArea:mM,IconZoomPan:vM}=Z4,_n=class extends Je{constructor(...t){super(...t),this.color="#000000",this.size=26,this.radius="50%",this.contrastColor="#FFFFFF",this.checked=!1}static{this.styles=yt`
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
  `}willUpdate(t){t.has("color")&&(this.contrastColor=Io(this.color)),t.has("selected")&&(this.checked=this.color.toLowerCase()===this.selected?.toLowerCase())}handleClick(){this.dispatchEvent(new CustomEvent("input",{detail:{value:this.color},bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent("change",{detail:{value:this.color},bubbles:!0,composed:!0}))}render(){const t={width:`${this.size}px`,height:`${this.size}px`},r={"--radius":typeof this.radius=="number"?`${this.radius}px`:this.radius,"--color":this.color,"--contrast-color":this.contrastColor};return oe`
      <div style=${Vr(t)}>
        <div
          class="swatch"
          style=${Vr(r)}
          @click=${this.handleClick}
        >
          <slot></slot>
          <span class="check-icon"> ${Ea} </span>
        </div>
      </div>
    `}};z([j({type:String})],_n.prototype,"color",void 0),z([j({type:String})],_n.prototype,"selected",void 0),z([j({type:Number})],_n.prototype,"size",void 0),z([j({type:String})],_n.prototype,"radius",void 0),z([j({state:!0})],_n.prototype,"contrastColor",void 0),z([j({type:Boolean,reflect:!0})],_n.prototype,"checked",void 0),_n=z([ot("color-swatch")],_n);function a3(e){const[t,r,i]=e.to("oklch").coords.map(c=>c??0),a=[.95,.9,.8,.7,.6,.5,.4,.3,.2,.1,.05],s=a.map(c=>new ut("oklch",[c,r,i]).toString({format:"hex"}));let l=-1,h=1/0;for(let c=0;c<a.length;c++){const f=Math.abs(a[c]-t);f<h&&(h=f,l=c)}return l!==-1&&(s[l]=e.toString({format:"hex"})),s.map(c=>c.toUpperCase())}function s3(e){const t=e.to("hsl"),r=[.97,.9,.8,.7,.6,.5,.4,.3,.2,.1,.05],i=[];for(const a of r){const s=t.clone();s.coords[2]=a*100;const l=s.coords[1]??0;a>.8?s.coords[1]=l*.4:a>.6?s.coords[1]=l*.8:a<.3&&(s.coords[1]=Math.min(100,l*1.1)),i.push(s.toString({format:"hex"}).toUpperCase())}return i}function l3(e){const t=[],r=[95,90,80,70,60,50,40,30,20,10,5],i=e.to("hsl");for(const a of r){const s=i.clone();s.coords[2]=a,t.push(s.toString({format:"hex"}).toUpperCase())}return t}function c3(e){const t=new Array(11).fill(""),r=e.to("hsl"),i={lightest:{lightness:95,rotate:-10,saturate:-30},darkest:{lightness:10,rotate:10,saturate:10}},a=5,s=5,l=(i.lightest.lightness-50)/a,h=(50-i.darkest.lightness)/s,c=i.lightest.rotate/a,f=i.darkest.rotate/s,p=i.lightest.saturate/a,w=i.darkest.saturate/s;for(let b=1;b<=a;b++){const m=a-b,v=r.clone();v.coords[2]=(v.coords[2]??0)+l*(b-.5),v.coords[0]=(v.coords[0]??0)+c*b,v.coords[1]=(v.coords[1]??0)+p*b,t[m]=v.toString({format:"hex"})}t[5]=r.clone().toString({format:"hex"});for(let b=1;b<=s;b++){const m=a+b,v=r.clone();v.coords[2]=(v.coords[2]??0)-h*(b-.5),v.coords[0]=(v.coords[0]??0)+f*b,v.coords[1]=(v.coords[1]??0)+w*b,t[m]=v.toString({format:"hex"})}return t}function d3(e){const[t,r,i]=e.to("hsl").coords.map(s=>s??0),a=new Array(11);a[5]=e.toString({format:"hex"});for(let s=0;s<5;s++){const l=(5-s)/6,h=i+(100-i)*l;a[s]=new ut("hsl",[t,r-r*l,h]).toString({format:"hex"})}for(let s=0;s<5;s++){const l=(s+1)/6,h=i-i*l,c=r+(100-r)*l;a[s+6]=new ut("hsl",[t,c,h]).toString({format:"hex"})}return a}function I0(e,t="steps"){let r;try{r=ut.get(e)}catch{r=ut.get(Il.navy)}switch(t){case"saturation":return s3(r);case"lightness":return l3(r);case"mantine":return d3(r);case"chakra":return c3(r);default:return a3(r)}}var yn=class extends Je{constructor(...t){super(...t),this.baseColor="#228be6",this.mode="steps",this.orientation="horizontal",this.value="",this.gradient=[]}static{this.styles=yt`
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
  `}willUpdate(t){(t.has("baseColor")||t.has("mode"))&&(this.gradient=I0(this.baseColor,this.mode)??[])}handleSwatchClick(t){this.value=t,this.dispatchEvent(new CustomEvent("input",{detail:{value:this.value},bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value},bubbles:!0,composed:!0}))}render(){return oe`
      ${this.gradient.map(t=>oe`
          <div
            class="swatch"
            ?checked=${this.selected&&t.toLowerCase()===this.selected.toLowerCase()}
            title=${t}
            @click=${()=>this.handleSwatchClick(t)}
          >
            <div
              class="swatch-inner"
              style="--color: ${t}; --text-color: ${Io(t)}"
            >
              <span class="checkmark">${Ea}</span>
            </div>
          </div>
        `)}
    `}};z([j({type:String})],yn.prototype,"baseColor",void 0),z([j({type:String})],yn.prototype,"mode",void 0),z([j({type:String,reflect:!0})],yn.prototype,"orientation",void 0),z([j({type:String})],yn.prototype,"selected",void 0),z([j({type:String,reflect:!0})],yn.prototype,"value",void 0),z([Dt()],yn.prototype,"gradient",void 0),yn=z([ot("color-palette")],yn);var Sa=class extends Je{constructor(...t){super(...t),this.value=""}static{this.styles=yt`
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
  `}handleColorClick(t){this.value=t.currentTarget.title,this.dispatchEvent(new CustomEvent("input",{detail:{value:this.value},bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value},bubbles:!0,composed:!0}))}render(){const t=xe.default.keys(It).filter(i=>!["dark","gray","zinc","neutral","stone"].includes(i)),r=[200,300,400,500,600,700,800,900,950];return t.map(i=>oe` <div class="SwatchGroup">
        <span class="ColorName">${i}</span>
        <div class="Swatches">${r.map(a=>{const s=It[i][a],l=Io(s);return oe`
          <span
            title="${s}"
            class="${kt({ThemeRadio:!0,selected:this.selected?.toLowerCase()===s.toLowerCase()})}"
            style="background-color: ${s}; color: ${l}"
            @click=${this.handleColorClick}
          >
            ${Ea}
          </span>
        `})}</div>
      </div>`)}};z([j({type:String,reflect:!0})],Sa.prototype,"value",void 0),z([j({type:String})],Sa.prototype,"selected",void 0),Sa=z([ot("color-panel")],Sa);var Ht=class extends Je{constructor(...t){super(...t),this.value="#228be6",this.defaultValue="#228be6",this.label="",this.hint="",this.name="",this.disabled=!1,this.size="medium",this.swatches=null,this.mode="popup",this.opened=!1,this.popupDirection="left",this.sourceSpace="srgb",this.hsv={h:0,s:0,v:0},this.saturationThumbPosition={x:0,y:0},this.hueThumbPosition=0,this.isDraggingSaturation=!1,this.isDraggingHue=!1}static{this.styles=yt`
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
  `}connectedCallback(){super.connectedCallback(),this.updateStateFromValue(this.value),window.addEventListener("mousemove",this.handleDrag.bind(this)),window.addEventListener("mouseup",this.handleDragEnd.bind(this)),window.addEventListener("touchmove",this.handleDrag.bind(this),{passive:!1}),window.addEventListener("touchend",this.handleDragEnd.bind(this))}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("mousemove",this.handleDrag.bind(this)),window.removeEventListener("mouseup",this.handleDragEnd.bind(this)),window.removeEventListener("touchmove",this.handleDrag.bind(this)),window.removeEventListener("touchend",this.handleDragEnd.bind(this)),window.removeEventListener("click",this.handleClickOutside.bind(this))}updated(t){t.has("mode")&&(this.mode==="popup"?window.addEventListener("click",this.handleClickOutside.bind(this)):window.removeEventListener("click",this.handleClickOutside.bind(this)))}willUpdate(t){t.has("value")&&this.updateStateFromValue(this.value),t.has("mode")&&this.mode==="inline"&&(this.opened=!1)}handleClickOutside(t){this.opened&&!t.composedPath().includes(this)&&this.hide()}show(){this.disabled||this.opened||(this.opened=!0,this.dispatchEvent(new CustomEvent("wa-show",{bubbles:!0,composed:!0})),setTimeout(()=>{this.dispatchEvent(new CustomEvent("wa-after-show",{bubbles:!0,composed:!0}))},150))}hide(){this.opened&&(this.opened=!1,this.dispatchEvent(new CustomEvent("wa-hide",{bubbles:!0,composed:!0})),setTimeout(()=>{this.dispatchEvent(new CustomEvent("wa-after-hide",{bubbles:!0,composed:!0}))},150))}togglePopup(){if(this.mode==="popup")if(this.opened)this.hide();else{const t=this.getBoundingClientRect(),r=250;let i;const a=this.closest("mov-drawer");if(a?.shadowRoot){const s=a.shadowRoot.querySelector("dialog");s?i=s.getBoundingClientRect():i={left:0,right:window.innerWidth}}else i={left:0,right:window.innerWidth};t.left+r>i.right?t.right-r>i.left?this.popupDirection="right":this.popupDirection="left":this.popupDirection="left",this.show()}}isSameColor(t,r){return!t||!r?!1:ut.deltaE(t,r,{method:"2000"})<1}renderCheckIcon(t){return oe`
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
        style=${Vr({stroke:Io(t)})}
      >
        <path d="M5 12l5 5l10 -10" />
      </svg>
    `}renderPickerBody(){const t={backgroundColor:`hsl(${this.hsv.h}, 100%, 50%)`},r={h:this.hsv.h,s:this.hsv.s*100,v:this.hsv.v*100},i={top:`${this.saturationThumbPosition.y}%`,left:`${this.saturationThumbPosition.x}%`,backgroundColor:new ut("hsv",[r.h,r.s,r.v]).toString({format:"hex"})},a={left:`${this.hueThumbPosition}%`};return oe`
      <div
        class="saturation-panel"
        style=${Vr(t)}
        @mousedown=${this.handleSaturationDragStart.bind(this)}
        @touchstart=${this.handleSaturationDragStart.bind(this)}
      >
        <div class="saturation-overlay-1"></div>
        <div class="saturation-overlay-2"></div>
        <div
          class="saturation-thumb"
          style=${Vr(i)}
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
            style=${Vr(a)}
          ></div>
        </div>
      </div>

      <div class="swatches">
        ${(this.swatches||xe.default.entries(It).filter(([s])=>!["dark","gray","zinc","neutral","stone"].includes(s)).map(([,s])=>s[600])).map(s=>oe`
            <button
              class="swatch"
              title=${s}
              style=${Vr({backgroundColor:s})}
              @click=${()=>this.selectSwatch(s)}
            >
              ${this.isSameColor(this.value,s)?this.renderCheckIcon(s):""}
            </button>
          `)}
      </div>
    `}render(){const t={"picker-container":!0,popup:this.mode==="popup",right:this.popupDirection==="right"},r=this.renderPickerBody();return this.mode==="popup"?oe`
        <div
          class="popup-trigger"
          @click=${this.togglePopup}
        >
          <div
            class="preview"
            style=${Vr({backgroundColor:this.value})}
          ></div>
        </div>
        ${this.opened?oe`<div class=${kt(t)}>${r}</div>`:""}
      `:oe`<div class=${kt(t)}>${r}</div>`}parseColor(t){try{return ut.get(t)}catch(r){return console.error(`[mov-color-picker] Invalid color value: "${t}"`,r),null}}colorToHsv(t){let[r,i,a]=t.to("srgb").to("hsv").coords.map(s=>s??0);return Number.isNaN(r)&&(r=this.hsv.h||0,i=0),i=Math.max(0,Math.min(100,i))/100,a=Math.max(0,Math.min(100,a))/100,{h:r,s:i,v:a}}updateStateFromValue(t){const r=this.parseColor(t);if(!r)return;this.sourceSpace=r.space.id;const i=this.colorToHsv(r);(i.h!==this.hsv.h||i.s!==this.hsv.s||i.v!==this.hsv.v)&&(this.hsv=i,this.updateThumbPositions())}dispatchInput(){this.dispatchEvent(new CustomEvent("input",{detail:{value:this.value},bubbles:!0,composed:!0}))}dispatchChange(){this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value},bubbles:!0,composed:!0}))}updateValueFromHsv(){const t={h:this.hsv.h,s:this.hsv.s*100,v:this.hsv.v*100},r=new ut("hsv",[t.h,t.s,t.v]);let i;try{!this.sourceSpace||["srgb","hsl","hsv"].includes(this.sourceSpace)?i=r.to("srgb").toString({format:"hex"}):i=r.to(this.sourceSpace).toString({precision:5})}catch(a){console.error(`[mov-color-picker] Could not convert color to space ${this.sourceSpace}`,a),i=r.to("srgb").toString({format:"hex"})}this.value!==i&&(this.value=i,this.dispatchInput())}updateThumbPositions(){this.saturationThumbPosition={x:this.hsv.s*100,y:(1-this.hsv.v)*100},this.hueThumbPosition=this.hsv.h/360*100}handleSaturationDragStart(t){t.preventDefault(),this.isDraggingSaturation=!0,this.saturationPanel=this.shadowRoot?.querySelector(".saturation-panel"),this.updateSaturation(t)}handleHueDragStart(t){t.preventDefault(),this.isDraggingHue=!0,this.hueSlider=this.shadowRoot?.querySelector(".hue-slider"),this.updateHue(t)}handleDrag(t){this.isDraggingSaturation&&this.updateSaturation(t),this.isDraggingHue&&this.updateHue(t)}handleDragEnd(){(this.isDraggingSaturation||this.isDraggingHue)&&this.dispatchChange(),this.isDraggingSaturation=!1,this.isDraggingHue=!1}getEventPosition(t){return"touches"in t?{clientX:t.touches[0].clientX,clientY:t.touches[0].clientY}:{clientX:t.clientX,clientY:t.clientY}}updateSaturation(t){if(!this.saturationPanel)return;const{clientX:r,clientY:i}=this.getEventPosition(t),a=this.saturationPanel.getBoundingClientRect(),s=Math.max(0,Math.min(r-a.left,a.width)),l=Math.max(0,Math.min(i-a.top,a.height));this.hsv.s=s/a.width,this.hsv.v=1-l/a.height,this.updateValueFromHsv(),this.updateThumbPositions()}updateHue(t){if(!this.hueSlider)return;const{clientX:r}=this.getEventPosition(t),i=this.hueSlider.getBoundingClientRect(),a=Math.max(0,Math.min(r-i.left,i.width));this.hsv.h=a/i.width*360,this.updateValueFromHsv(),this.updateThumbPositions()}selectSwatch(t){this.value=t,this.dispatchInput(),this.dispatchChange()}};z([j({type:String})],Ht.prototype,"value",void 0),z([j({type:String,attribute:"default-value"})],Ht.prototype,"defaultValue",void 0),z([j({type:String})],Ht.prototype,"label",void 0),z([j({type:String})],Ht.prototype,"hint",void 0),z([j({type:String})],Ht.prototype,"name",void 0),z([j({type:Boolean,reflect:!0})],Ht.prototype,"disabled",void 0),z([j({type:String,reflect:!0})],Ht.prototype,"size",void 0),z([j({type:Array})],Ht.prototype,"swatches",void 0),z([j({type:String})],Ht.prototype,"mode",void 0),z([Dt()],Ht.prototype,"opened",void 0),z([Dt()],Ht.prototype,"popupDirection",void 0),z([Dt()],Ht.prototype,"sourceSpace",void 0),z([Dt()],Ht.prototype,"hsv",void 0),z([Dt()],Ht.prototype,"saturationThumbPosition",void 0),z([Dt()],Ht.prototype,"hueThumbPosition",void 0),Ht=z([ot("mov-color-picker")],Ht);var u3=(e,t,r)=>{for(const i of t)if(i[0]===e)return(0,i[1])();return r?.()},kn=class extends Je{constructor(...t){super(...t),this.value="",this.labelPosition="side",this.size="medium",this._options=[],this.resizeObserver=new ResizeObserver(()=>this.updateThumbPosition())}static{this.styles=yt`
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
      font-size: 16px; /* Default font-size (medium) */
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
      font-size: 14px;
    }
    .button.large {
      padding: 0.75rem 1rem;
      font-size: 18px;
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
  `}connectedCallback(){super.connectedCallback(),this.resizeObserver.observe(this)}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver.unobserve(this)}handleClick(t,r){this.value=r,this.dispatchEvent(new CustomEvent("change",{detail:this.value,bubbles:!0,composed:!0}))}handleSlotChange(){this._options=this._slotEl.assignedNodes({flatten:!0}).filter(t=>t.nodeName==="SEGMENTED-CONTROL-OPTION").map(t=>({value:t.getAttribute("value")??"",label:t.getAttribute("label")??"",icon:t.getAttribute("icon")??void 0}))}firstUpdated(){this.handleSlotChange(),this.updateComplete.then(()=>this.updateThumbPosition())}updated(t){super.updated(t),(t.has("value")||t.has("_options")||t.has("labelPosition")||t.has("size"))&&Promise.resolve().then(()=>this.updateThumbPosition())}updateThumbPosition(){if(!this.thumb)return;const t=this.shadowRoot?.querySelector(".button.selected");if(t){const{offsetWidth:r,offsetHeight:i}=t,a=t.getBoundingClientRect(),s=this.shadowRoot?.querySelector(".segmented-control")?.getBoundingClientRect(),l=a.left-(s?.left??0),h=a.top-(s?.top??0);this.thumb.style.transform=`translate(${l}px, ${h}px)`,this.thumb.style.width=`${r}px`,this.thumb.style.height=`${i}px`}else this.thumb.style.width="0px",this.thumb.style.height="0px"}render(){return oe`
      <div class="segmented-control">
        <div class="thumb"></div>
        ${this._options.map(t=>oe`
            <div
              class="option"
              title="${this.labelPosition==="tooltip"?t.label:Be}"
            >
              <button
                class="${kt({button:!0,selected:this.value===t.value,bottom:this.labelPosition==="bottom",small:this.size==="small",medium:this.size==="medium",large:this.size==="large"})}"
                @click=${r=>this.handleClick(r,t.value)}
                role="radio"
                aria-checked="${this.value===t.value}"
              >
                ${t.icon?oe`<mov-icon
                      name="${t.icon}"
                      .size=${u3(this.size,[["small",()=>"16px"],["medium",()=>"24px"],["large",()=>"36px"]],()=>this.size)}
                    ></mov-icon>`:Be}
                ${this.labelPosition!=="tooltip"?oe`<span>${t.label}</span>`:Be}
              </button>
            </div>
          `)}
      </div>
      <div style="display: none;">
        <slot @slotchange=${this.handleSlotChange}></slot>
      </div>
    `}};z([j({type:String,reflect:!0})],kn.prototype,"value",void 0),z([j({type:String})],kn.prototype,"labelPosition",void 0),z([j({type:String})],kn.prototype,"size",void 0),z([Dt()],kn.prototype,"_options",void 0),z([en(".thumb")],kn.prototype,"thumb",void 0),z([en("slot")],kn.prototype,"_slotEl",void 0),kn=z([ot("segmented-control")],kn);var fi=class extends Je{constructor(...t){super(...t),this.value="",this.label=""}createRenderRoot(){return this}};z([j({type:String,reflect:!0})],fi.prototype,"value",void 0),z([j({type:String,reflect:!0})],fi.prototype,"label",void 0),z([j({type:String,reflect:!0})],fi.prototype,"icon",void 0),fi=z([ot("segmented-control-option")],fi);var gr=class extends Je{constructor(...t){super(...t),this.name="",this.value="on",this.checked=!1,this.defaultChecked=!1,this.disabled=!1,this.required=!1,this.size="medium",this.hint="",this.design="graphical",this.textOn="ON",this.textOff="OFF"}static{this.styles=yt`
    :host {
      --switch-width: 3rem;
      --switch-height: 1.5rem;
      --knob-size: 1.25rem;
      display: inline-block;
    }

    :host([size='small']) {
      --switch-width: 2.5rem;
      --switch-height: 1.25rem;
      --knob-size: 16px;
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
      font-size: 16px;
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
      width: 16px;
      height: 16px;
      fill: none;
    }

    .text {
      font-size: 12px;
      font-weight: bold;
      color: #333;
    }

    .hint {
      font-size: 13px;
      opacity: 0.7;
      margin-top: 0.25rem;
    }
  `}handleChange(t){this.disabled||(this.checked=t.target.checked,this.dispatchEvent(new CustomEvent("change",{detail:{checked:this.checked},bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent("input",{detail:{checked:this.checked},bubbles:!0,composed:!0})))}render(){const t=this.design.toLowerCase();let r;return t==="graphical"?r=oe`${this.checked?Ea:Cl}`:r=oe`<span class="text">${this.checked?this.textOn:this.textOff}</span>`,oe`
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
            class="${kt({switch:!0,[t]:!0})}"
          >
            <div class="knob">${r}</div>
          </div>
        </label>
        <div class="hint">
          <slot name="hint">${this.hint}</slot>
        </div>
      </div>
    `}};z([j({type:String})],gr.prototype,"name",void 0),z([j({type:String})],gr.prototype,"value",void 0),z([j({type:Boolean,reflect:!0})],gr.prototype,"checked",void 0),z([j({type:Boolean,reflect:!0,attribute:"default-checked"})],gr.prototype,"defaultChecked",void 0),z([j({type:Boolean,reflect:!0})],gr.prototype,"disabled",void 0),z([j({type:Boolean,reflect:!0})],gr.prototype,"required",void 0),z([j({type:String,reflect:!0})],gr.prototype,"size",void 0),z([j({type:String})],gr.prototype,"hint",void 0),z([j({type:String,reflect:!0})],gr.prototype,"design",void 0),z([j({type:String})],gr.prototype,"textOn",void 0),z([j({type:String})],gr.prototype,"textOff",void 0),gr=z([ot("mov-switch")],gr);var h3=":host{--mov-slider-track-height:6px;--mov-slider-thumb-size:18px;--mov-slider-tooltip-offset:24px;user-select:none;touch-action:none;width:100%;display:block}:host([vertical]){display:inline-block}.mov-slider__container{align-items:center;min-height:24px;display:flex;position:relative}:host([vertical]) .mov-slider__container{flex-direction:column;min-width:24px;min-height:auto}.mov-slider__track{height:var(--mov-slider-track-height);background:var(--theme-border-color,#ccc);cursor:pointer;border-radius:9999px;flex:1;position:relative}:host([vertical]) .mov-slider__track{width:var(--mov-slider-track-height);height:100%;min-height:8rem}.mov-slider__progress{background:var(--mov-color-fill-loud);pointer-events:none;border-radius:9999px;height:100%;transition:background-color .15s;position:absolute}.mov-slider__progress--min-gap{background:#f59e0b;animation:2s ease-in-out infinite pulse-gap}@keyframes pulse-gap{0%,to{opacity:1}50%{opacity:.7}}:host([vertical]) .mov-slider__progress{width:100%;height:auto}.mov-slider__thumb{width:var(--mov-slider-thumb-size);height:var(--mov-slider-thumb-size);border:3px solid var(--mov-color-fill-loud);cursor:grab;touch-action:none;box-sizing:border-box;background:#fff;border-radius:9999px;transition:transform .15s,border-color .15s,box-shadow .15s;position:absolute;top:50%;transform:translate(-50%,-50%);box-shadow:0 1px 3px #0003}.mov-slider__thumb:active{cursor:grabbing;transform:translate(-50%,-50%)scale(1.1)}:host([vertical]) .mov-slider__thumb{inset-inline-start:50%;top:auto;transform:translate(-50%,50%)}:host([vertical]) .mov-slider__thumb:active{transform:translate(-50%,50%)scale(1.1)}.mov-slider__thumb:hover{border-color:var(--mov-color-fill-loud);box-shadow:0 4px 6px -1px #0000001a}.mov-slider__thumb--focused{outline:3px solid var(--mov-color-fill-loud);outline-offset:2px}.mov-slider__thumb--active{z-index:1;transform:translate(-50%,-50%)scale(1.1)}:host([vertical]) .mov-slider__thumb--active{transform:translate(-50%,50%)scale(1.1)}:host([readonly]) .mov-slider__thumb{cursor:default;border-color:var(--theme-border-color)}:host([readonly]) .mov-slider__thumb:active{transform:translate(-50%,-50%)}.mov-slider__input{opacity:0;pointer-events:none;position:absolute}.mov-slider__tooltip{bottom:var(--mov-slider-tooltip-offset);background:var(--theme-hightlight-color,#333);color:#fff;white-space:nowrap;pointer-events:none;opacity:0;z-index:2;border-radius:4px;padding:2px 8px;font-size:14px;transition:opacity .15s;position:absolute;inset-inline-start:50%;transform:translate(-50%)}.mov-slider__thumb:hover .mov-slider__tooltip,.mov-slider__thumb--focused .mov-slider__tooltip,.mov-slider__thumb--active .mov-slider__tooltip{opacity:1}:host([vertical]) .mov-slider__tooltip{bottom:auto;inset-inline-start:var(--mov-slider-tooltip-offset);top:50%;transform:translateY(-50%)}.mov-slider__ticks{top:50%;pointer-events:none;height:8px;position:absolute;inset-inline:0}:host([vertical]) .mov-slider__ticks{top:0;bottom:0;width:8px;height:auto;inset-inline-start:50%}.mov-slider__tick{background:var(--theme-border-color);width:1px;height:8px;position:absolute;transform:translate(-50%)}:host([vertical]) .mov-slider__tick{width:8px;height:1px;transform:translateY(-50%)}.mov-slider__tick-label{color:var(--theme-text-color);opacity:.7;white-space:nowrap;font-size:12px;position:absolute;top:12px;transform:translate(-50%)}:host([vertical]) .mov-slider__tick-label{top:auto;inset-inline-start:12px;transform:translateY(-50%)}:host([size=small]){--mov-slider-track-height:4px;--mov-slider-thumb-size:14px}:host([size=large]){--mov-slider-track-height:10px;--mov-slider-thumb-size:22px}:host([disabled]){opacity:.6;pointer-events:none}:host([disabled]) .mov-slider__thumb{cursor:not-allowed;border-color:var(--theme-border-color);background:#f3f4f6}:host([invalid]) .mov-slider__progress{background:#ef4444}.mov-form-control__label{color:var(--theme-text-color);margin-bottom:.5rem;display:block}.mov-form-control__helper,.mov-form-control__error{margin-top:.5rem;font-size:14px}.mov-form-control__helper{color:var(--theme-text-color);opacity:.8}.mov-form-control__error{color:#ef4444}.mov-slider__live-region{clip:rect(0 0 0 0);border:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}:host([show-ticks]){margin-left:5px;margin-right:5px;padding-bottom:15px}:host([filled]) .mov-slider__thumb{background:var(--mov-color-fill-loud);border-color:var(--mov-color-fill-loud)}",ht=class extends Je{static{this.styles=[Se(h3)]}constructor(){super(),this.label="",this.helpText="",this.errorMessage="",this.min=0,this.max=100,this.step=1,this.value=0,this.dual=!1,this.vertical=!1,this.filled=!1,this.size="medium",this.disabled=!1,this.readonly=!1,this.invalid=!1,this.showTooltip=!1,this.showTicks=!1,this.tickStep=0,this.tickCount=0,this.focusedThumb=null,this.draggingThumb=null,this.activeDrag=null,this._handlePointerMove=this._handlePointerMove.bind(this),this._handlePointerUp=this._handlePointerUp.bind(this)}get values(){return Array.isArray(this.value)?this.value:[this.min,this.value]}getPercentage(t){return(t-this.min)/(this.max-this.min)*100}getValueFromPercentage(t){const r=this.min+t/100*(this.max-this.min);return this.step?Math.round(r/this.step)*this.step:r}getValueFromPointer(t,r,i){let a;return this.vertical?a=(i.bottom-r)/i.height*100:a=(t-i.left)/i.width*100,a=Math.max(0,Math.min(100,a)),this.getValueFromPercentage(a)}clampValue(t){let r=Math.max(this.min,Math.min(this.max,t));return this.step&&(r=Math.round(r/this.step)*this.step),Number(r.toFixed(10))}handleThumbPointerDown(t,r){this.disabled||this.readonly||!this.track||(t.preventDefault(),t.stopPropagation(),t.currentTarget.setPointerCapture(t.pointerId),this.activeDrag={thumb:r,trackRect:this.track.getBoundingClientRect()},this.draggingThumb=r,document.addEventListener("pointermove",this._handlePointerMove),document.addEventListener("pointerup",this._handlePointerUp),document.addEventListener("pointercancel",this._handlePointerUp))}_handlePointerMove(t){if(!this.activeDrag||this.disabled||this.readonly)return;const{thumb:r,trackRect:i}=this.activeDrag,a=this.getValueFromPointer(t.clientX,t.clientY,i);if(this.dual){const s=this.values;if(r==="min"){const l=Math.min(a,s[1]-(this.step||1));this.updateValue([l,s[1]],"input")}else{const l=Math.max(a,s[0]+(this.step||1));this.updateValue([s[0],l],"input")}}else this.updateValue(a,"input")}_handlePointerUp(t){this.activeDrag&&(this.shadowRoot?.querySelector(".mov-slider__thumb--active")?.releasePointerCapture(t.pointerId),this.updateValue(this.value,"change"),this.activeDrag=null,this.draggingThumb=null,document.removeEventListener("pointermove",this._handlePointerMove),document.removeEventListener("pointerup",this._handlePointerUp),document.removeEventListener("pointercancel",this._handlePointerUp))}updateValue(t,r="change"){this.readonly||this.disabled||(this.dual&&Array.isArray(t)?(t=[this.clampValue(t[0]),this.clampValue(t[1])],t[0]>t[1]&&(t=[t[1],t[0]])):!this.dual&&typeof t=="number"&&(t=this.clampValue(t)),this.value=t,this.dispatchEvent(new CustomEvent(r,{bubbles:!0,composed:!0,detail:{value:t}})))}handleTrackClick(t){if(this.disabled||this.readonly||!this.track)return;const r=this.track.getBoundingClientRect(),i=this.getValueFromPointer(t.clientX,t.clientY,r);if(this.dual){const a=this.values;Math.abs(i-a[0])<Math.abs(i-a[1])?this.updateValue([i,a[1]]):this.updateValue([a[0],i])}else this.updateValue(i)}renderTicks(){if(!this.showTicks)return null;const t=new Set;t.add(this.min),t.add(this.max);let r=this.tickStep;if(this.tickCount>1&&(r=Math.round((this.max-this.min)/(this.tickCount-1))),r>0){const i=Math.floor((this.max-this.min)/r);if(i<=100)for(let a=1;a<=i;a++){const s=this.min+a*r;s<this.max&&t.add(Number(s.toFixed(10)))}}return oe`<div class="mov-slider__ticks">${Array.from(t).sort((i,a)=>i-a).map(i=>{const a=this.getPercentage(i);return oe`
        <div class="mov-slider__tick" style="${this.vertical?`bottom: ${a}%`:`inset-inline-start: ${a}%`}">
          <div class="mov-slider__tick-label">${i}</div>
        </div>
      `})}</div>`}renderThumb(t,r){const i=this.getPercentage(t),a=this.focusedThumb===r,s=this.draggingThumb===r,l=this.vertical?`bottom: ${i}%`:`inset-inline-start: ${i}%`;return oe`
      <div
        class="mov-slider__thumb ${a?"mov-slider__thumb--focused":""} ${s?"mov-slider__thumb--active":""}"
        style="${l}"
        @pointerdown=${h=>this.handleThumbPointerDown(h,r)}
      >
        ${this.showTooltip?oe`<div class="mov-slider__tooltip">${t}</div>`:""}
      </div>
    `}renderProgress(){const t=this.values;if(this.dual){const i=this.getPercentage(t[0]),a=this.getPercentage(t[1]);return oe`<div
        class="mov-slider__progress"
        style="${this.vertical?`bottom: ${i}%; height: ${a-i}%`:`left: ${i}%; width: ${a-i}%`}"
      ></div>`}const r=this.getPercentage(t[1]);return oe`<div
      class="mov-slider__progress"
      style="${this.vertical?`bottom: 0; height: ${r}%`:`left: 0; width: ${r}%`}"
    ></div>`}render(){const t=this.values;return oe`
      <div
        class="mov-slider"
        part="base"
      >
        ${this.label?oe`<label class="mov-form-control__label">${this.label}</label>`:""}
        <div
          class="mov-slider__container"
          @click=${this.handleTrackClick}
        >
          <div class="mov-slider__track">
            ${this.renderProgress()} ${this.renderTicks()}
            ${this.dual?oe`${this.renderThumb(t[0],"min")}${this.renderThumb(t[1],"max")}`:this.renderThumb(t[1],"single")}
          </div>
        </div>
        ${this.helpText&&!this.invalid?oe`<div class="mov-form-control__helper">${this.helpText}</div>`:""}
        ${this.invalid&&this.errorMessage?oe`<div class="mov-form-control__error">${this.errorMessage}</div>`:""}
      </div>
    `}};z([j({type:String})],ht.prototype,"label",void 0),z([j({attribute:"help-text"})],ht.prototype,"helpText",void 0),z([j({attribute:"error-message"})],ht.prototype,"errorMessage",void 0),z([j({type:Number})],ht.prototype,"min",void 0),z([j({type:Number})],ht.prototype,"max",void 0),z([j({type:Number})],ht.prototype,"step",void 0),z([j({type:Object})],ht.prototype,"value",void 0),z([j({type:Boolean,reflect:!0})],ht.prototype,"dual",void 0),z([j({type:Boolean,reflect:!0})],ht.prototype,"vertical",void 0),z([j({type:Boolean,reflect:!0})],ht.prototype,"filled",void 0),z([j({reflect:!0})],ht.prototype,"size",void 0),z([j({type:Boolean,reflect:!0})],ht.prototype,"disabled",void 0),z([j({type:Boolean,reflect:!0})],ht.prototype,"readonly",void 0),z([j({type:Boolean,reflect:!0})],ht.prototype,"invalid",void 0),z([j({type:Boolean,attribute:"show-tooltip"})],ht.prototype,"showTooltip",void 0),z([j({type:Boolean,attribute:"show-ticks"})],ht.prototype,"showTicks",void 0),z([j({type:Number,attribute:"tick-step"})],ht.prototype,"tickStep",void 0),z([j({type:Number,attribute:"tick-count"})],ht.prototype,"tickCount",void 0),z([Dt()],ht.prototype,"focusedThumb",void 0),z([Dt()],ht.prototype,"draggingThumb",void 0),z([en(".mov-slider__track")],ht.prototype,"track",void 0),z([en(".mov-slider__live-region")],ht.prototype,"liveRegion",void 0),ht=z([ot("mov-slider")],ht);var f3=Er((e=>{Object.defineProperty(e,"__esModule",{value:!0}),e.BLANK_URL=e.relativeFirstCharacters=e.whitespaceEscapeCharsRegex=e.urlSchemeRegex=e.ctrlCharactersRegex=e.htmlCtrlEntityRegex=e.htmlEntitiesRegex=e.invalidProtocolRegex=void 0,e.invalidProtocolRegex=/^([^\w]*)(javascript|data|vbscript)/im,e.htmlEntitiesRegex=/&#(\w+)(^\w|;)?/g,e.htmlCtrlEntityRegex=/&(newline|tab);/gi,e.ctrlCharactersRegex=/[\u0000-\u001F\u007F-\u009F\u2000-\u200D\uFEFF]/gim,e.urlSchemeRegex=/^.+(:|&colon;)/gim,e.whitespaceEscapeCharsRegex=/(\\|%5[cC])((%(6[eE]|72|74))|[nrt])/g,e.relativeFirstCharacters=[".","/"],e.BLANK_URL="about:blank"})),p3=Er((e=>{Object.defineProperty(e,"__esModule",{value:!0}),e.sanitizeUrl=l;var t=f3();function r(h){return t.relativeFirstCharacters.indexOf(h[0])>-1}function i(h){return h.replace(t.ctrlCharactersRegex,"").replace(t.htmlEntitiesRegex,function(c,f){return String.fromCharCode(f)})}function a(h){return URL.canParse(h)}function s(h){try{return decodeURIComponent(h)}catch{return h}}function l(h){if(!h)return t.BLANK_URL;var c,f=s(h.trim());do f=i(f).replace(t.htmlCtrlEntityRegex,"").replace(t.ctrlCharactersRegex,"").replace(t.whitespaceEscapeCharsRegex,"").trim(),f=s(f),c=f.match(t.ctrlCharactersRegex)||f.match(t.htmlEntitiesRegex)||f.match(t.htmlCtrlEntityRegex)||f.match(t.whitespaceEscapeCharsRegex);while(c&&c.length>0);var p=f;if(!p)return t.BLANK_URL;if(r(p))return p;var w=p.trimStart(),b=w.match(t.urlSchemeRegex);if(!b)return p;var m=b[0].toLowerCase().trim();if(t.invalidProtocolRegex.test(m))return t.BLANK_URL;var v=w.replace(/\\/g,"/");if(m==="mailto:"||m.includes("://"))return v;if(m==="http:"||m==="https:"){if(!a(v))return t.BLANK_URL;var E=new URL(v);return E.protocol=E.protocol.toLowerCase(),E.hostname=E.hostname.toLowerCase(),E.toString()}return v}})),g3=Er(((e,t)=>{(function(r,i){typeof define=="function"&&define.amd?define([],i):typeof e<"u"?i():(i(),r.FileSaver={})})(e,function(){"use strict";function r(f,p){return typeof p>"u"?p={autoBom:!1}:typeof p!="object"&&(console.warn("Deprecated: Expected third argument to be a object"),p={autoBom:!p}),p.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(f.type)?new Blob(["\uFEFF",f],{type:f.type}):f}function i(f,p,w){var b=new XMLHttpRequest;b.open("GET",f),b.responseType="blob",b.onload=function(){c(b.response,p,w)},b.onerror=function(){console.error("could not download file")},b.send()}function a(f){var p=new XMLHttpRequest;p.open("HEAD",f,!1);try{p.send()}catch{}return 200<=p.status&&299>=p.status}function s(f){try{f.dispatchEvent(new MouseEvent("click"))}catch{var p=document.createEvent("MouseEvents");p.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),f.dispatchEvent(p)}}var l=typeof window=="object"&&window.window===window?window:typeof self=="object"&&self.self===self?self:typeof global=="object"&&global.global===global?global:void 0,h=l.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),c=l.saveAs||(typeof window!="object"||window!==l?function(){}:"download"in HTMLAnchorElement.prototype&&!h?function(f,p,w){var b=l.URL||l.webkitURL,m=document.createElement("a");p=p||f.name||"download",m.download=p,m.rel="noopener",typeof f=="string"?(m.href=f,m.origin===location.origin?s(m):a(m.href)?i(f,p,w):s(m,m.target="_blank")):(m.href=b.createObjectURL(f),setTimeout(function(){b.revokeObjectURL(m.href)},4e4),setTimeout(function(){s(m)},0))}:"msSaveOrOpenBlob"in navigator?function(f,p,w){if(p=p||f.name||"download",typeof f!="string")navigator.msSaveOrOpenBlob(r(f,w),p);else if(a(f))i(f,p,w);else{var b=document.createElement("a");b.href=f,b.target="_blank",setTimeout(function(){s(b)})}}:function(f,p,w,b){if(b=b||open("","_blank"),b&&(b.document.title=b.document.body.innerText="downloading..."),typeof f=="string")return i(f,p,w);var m=f.type==="application/octet-stream",v=/constructor/i.test(l.HTMLElement)||l.safari,E=/CriOS\/[\d]+/.test(navigator.userAgent);if((E||m&&v||h)&&typeof FileReader<"u"){var y=new FileReader;y.onloadend=function(){var O=y.result;O=E?O:O.replace(/^data:[^;]*;/,"data:attachment/file;"),b?b.location.href=O:location=O,b=null},y.readAsDataURL(f)}else{var S=l.URL||l.webkitURL,x=S.createObjectURL(f);b?b.location=x:location.href=x,b=null,setTimeout(function(){S.revokeObjectURL(x)},4e4)}});l.saveAs=c.saveAs=c,typeof t<"u"&&(t.exports=c)})})),m3=Er(((e,t)=>{(function(r){typeof e=="object"&&typeof t<"u"?t.exports=r():typeof define=="function"&&define.amd?define([],r):(typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:this).JSZip=r()})(function(){return(function r(i,a,s){function l(f,p){if(!a[f]){if(!i[f]){var w=typeof require=="function"&&require;if(!p&&w)return w(f,!0);if(h)return h(f,!0);var b=new Error("Cannot find module '"+f+"'");throw b.code="MODULE_NOT_FOUND",b}var m=a[f]={exports:{}};i[f][0].call(m.exports,function(v){var E=i[f][1][v];return l(E||v)},m,m.exports,r,i,a,s)}return a[f].exports}for(var h=typeof require=="function"&&require,c=0;c<s.length;c++)l(s[c]);return l})({1:[function(r,i,a){"use strict";var s=r("./utils"),l=r("./support"),h="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";a.encode=function(c){for(var f,p,w,b,m,v,E,y=[],S=0,x=c.length,O=x,L=s.getTypeOf(c)!=="string";S<c.length;)O=x-S,w=L?(f=c[S++],p=S<x?c[S++]:0,S<x?c[S++]:0):(f=c.charCodeAt(S++),p=S<x?c.charCodeAt(S++):0,S<x?c.charCodeAt(S++):0),b=f>>2,m=(3&f)<<4|p>>4,v=1<O?(15&p)<<2|w>>6:64,E=2<O?63&w:64,y.push(h.charAt(b)+h.charAt(m)+h.charAt(v)+h.charAt(E));return y.join("")},a.decode=function(c){var f,p,w,b,m,v,E=0,y=0,S="data:";if(c.substr(0,S.length)===S)throw new Error("Invalid base64 input, it looks like a data url.");var x,O=3*(c=c.replace(/[^A-Za-z0-9\+\/\=]/g,"")).length/4;if(c.charAt(c.length-1)===h.charAt(64)&&O--,c.charAt(c.length-2)===h.charAt(64)&&O--,O%1!=0)throw new Error("Invalid base64 input, bad content length.");for(x=l.uint8array?new Uint8Array(0|O):new Array(0|O);E<c.length;)f=h.indexOf(c.charAt(E++))<<2|(b=h.indexOf(c.charAt(E++)))>>4,p=(15&b)<<4|(m=h.indexOf(c.charAt(E++)))>>2,w=(3&m)<<6|(v=h.indexOf(c.charAt(E++))),x[y++]=f,m!==64&&(x[y++]=p),v!==64&&(x[y++]=w);return x}},{"./support":30,"./utils":32}],2:[function(r,i,a){"use strict";var s=r("./external"),l=r("./stream/DataWorker"),h=r("./stream/Crc32Probe"),c=r("./stream/DataLengthProbe");function f(p,w,b,m,v){this.compressedSize=p,this.uncompressedSize=w,this.crc32=b,this.compression=m,this.compressedContent=v}f.prototype={getContentWorker:function(){var p=new l(s.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new c("data_length")),w=this;return p.on("end",function(){if(this.streamInfo.data_length!==w.uncompressedSize)throw new Error("Bug : uncompressed data size mismatch")}),p},getCompressedWorker:function(){return new l(s.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize",this.compressedSize).withStreamInfo("uncompressedSize",this.uncompressedSize).withStreamInfo("crc32",this.crc32).withStreamInfo("compression",this.compression)}},f.createWorkerFrom=function(p,w,b){return p.pipe(new h).pipe(new c("uncompressedSize")).pipe(w.compressWorker(b)).pipe(new c("compressedSize")).withStreamInfo("compression",w)},i.exports=f},{"./external":6,"./stream/Crc32Probe":25,"./stream/DataLengthProbe":26,"./stream/DataWorker":27}],3:[function(r,i,a){"use strict";var s=r("./stream/GenericWorker");a.STORE={magic:"\0\0",compressWorker:function(l){return new s("STORE compression")},uncompressWorker:function(){return new s("STORE decompression")}},a.DEFLATE=r("./flate")},{"./flate":7,"./stream/GenericWorker":28}],4:[function(r,i,a){"use strict";var s=r("./utils"),l=(function(){for(var h,c=[],f=0;f<256;f++){h=f;for(var p=0;p<8;p++)h=1&h?3988292384^h>>>1:h>>>1;c[f]=h}return c})();i.exports=function(h,c){return h!==void 0&&h.length?s.getTypeOf(h)!=="string"?(function(f,p,w,b){var m=l,v=b+w;f^=-1;for(var E=b;E<v;E++)f=f>>>8^m[255&(f^p[E])];return-1^f})(0|c,h,h.length,0):(function(f,p,w,b){var m=l,v=b+w;f^=-1;for(var E=b;E<v;E++)f=f>>>8^m[255&(f^p.charCodeAt(E))];return-1^f})(0|c,h,h.length,0):0}},{"./utils":32}],5:[function(r,i,a){"use strict";a.base64=!1,a.binary=!1,a.dir=!1,a.createFolders=!0,a.date=null,a.compression=null,a.compressionOptions=null,a.comment=null,a.unixPermissions=null,a.dosPermissions=null},{}],6:[function(r,i,a){"use strict";var s=null;s=typeof Promise<"u"?Promise:r("lie"),i.exports={Promise:s}},{lie:37}],7:[function(r,i,a){"use strict";var s=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Uint32Array<"u",l=r("pako"),h=r("./utils"),c=r("./stream/GenericWorker"),f=s?"uint8array":"array";function p(w,b){c.call(this,"FlateWorker/"+w),this._pako=null,this._pakoAction=w,this._pakoOptions=b,this.meta={}}a.magic="\b\0",h.inherits(p,c),p.prototype.processChunk=function(w){this.meta=w.meta,this._pako===null&&this._createPako(),this._pako.push(h.transformTo(f,w.data),!1)},p.prototype.flush=function(){c.prototype.flush.call(this),this._pako===null&&this._createPako(),this._pako.push([],!0)},p.prototype.cleanUp=function(){c.prototype.cleanUp.call(this),this._pako=null},p.prototype._createPako=function(){this._pako=new l[this._pakoAction]({raw:!0,level:this._pakoOptions.level||-1});var w=this;this._pako.onData=function(b){w.push({data:b,meta:w.meta})}},a.compressWorker=function(w){return new p("Deflate",w)},a.uncompressWorker=function(){return new p("Inflate",{})}},{"./stream/GenericWorker":28,"./utils":32,pako:38}],8:[function(r,i,a){"use strict";function s(m,v){var E,y="";for(E=0;E<v;E++)y+=String.fromCharCode(255&m),m>>>=8;return y}function l(m,v,E,y,S,x){var O,L,N=m.file,Y=m.compression,Z=x!==f.utf8encode,ie=h.transformTo("string",x(N.name)),W=h.transformTo("string",f.utf8encode(N.name)),ge=N.comment,_e=h.transformTo("string",x(ge)),P=h.transformTo("string",f.utf8encode(ge)),J=W.length!==N.name.length,A=P.length!==ge.length,ee="",Ce="",de="",Oe=N.dir,ae=N.date,Ie={crc32:0,compressedSize:0,uncompressedSize:0};v&&!E||(Ie.crc32=m.crc32,Ie.compressedSize=m.compressedSize,Ie.uncompressedSize=m.uncompressedSize);var U=0;v&&(U|=8),Z||!J&&!A||(U|=2048);var G=0,Me=0;Oe&&(G|=16),S==="UNIX"?(Me=798,G|=(function(pe,Ke){var mt=pe;return pe||(mt=Ke?16893:33204),(65535&mt)<<16})(N.unixPermissions,Oe)):(Me=20,G|=(function(pe){return 63&(pe||0)})(N.dosPermissions)),O=ae.getUTCHours(),O<<=6,O|=ae.getUTCMinutes(),O<<=5,O|=ae.getUTCSeconds()/2,L=ae.getUTCFullYear()-1980,L<<=4,L|=ae.getUTCMonth()+1,L<<=5,L|=ae.getUTCDate(),J&&(Ce=s(1,1)+s(p(ie),4)+W,ee+="up"+s(Ce.length,2)+Ce),A&&(de=s(1,1)+s(p(_e),4)+P,ee+="uc"+s(de.length,2)+de);var me="";return me+=`
\0`,me+=s(U,2),me+=Y.magic,me+=s(O,2),me+=s(L,2),me+=s(Ie.crc32,4),me+=s(Ie.compressedSize,4),me+=s(Ie.uncompressedSize,4),me+=s(ie.length,2),me+=s(ee.length,2),{fileRecord:w.LOCAL_FILE_HEADER+me+ie+ee,dirRecord:w.CENTRAL_FILE_HEADER+s(Me,2)+me+s(_e.length,2)+"\0\0\0\0"+s(G,4)+s(y,4)+ie+ee+_e}}var h=r("../utils"),c=r("../stream/GenericWorker"),f=r("../utf8"),p=r("../crc32"),w=r("../signature");function b(m,v,E,y){c.call(this,"ZipFileWorker"),this.bytesWritten=0,this.zipComment=v,this.zipPlatform=E,this.encodeFileName=y,this.streamFiles=m,this.accumulate=!1,this.contentBuffer=[],this.dirRecords=[],this.currentSourceOffset=0,this.entriesCount=0,this.currentFile=null,this._sources=[]}h.inherits(b,c),b.prototype.push=function(m){var v=m.meta.percent||0,E=this.entriesCount,y=this._sources.length;this.accumulate?this.contentBuffer.push(m):(this.bytesWritten+=m.data.length,c.prototype.push.call(this,{data:m.data,meta:{currentFile:this.currentFile,percent:E?(v+100*(E-y-1))/E:100}}))},b.prototype.openedSource=function(m){this.currentSourceOffset=this.bytesWritten,this.currentFile=m.file.name;var v=this.streamFiles&&!m.file.dir;if(v){var E=l(m,v,!1,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);this.push({data:E.fileRecord,meta:{percent:0}})}else this.accumulate=!0},b.prototype.closedSource=function(m){this.accumulate=!1;var v=this.streamFiles&&!m.file.dir,E=l(m,v,!0,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);if(this.dirRecords.push(E.dirRecord),v)this.push({data:(function(y){return w.DATA_DESCRIPTOR+s(y.crc32,4)+s(y.compressedSize,4)+s(y.uncompressedSize,4)})(m),meta:{percent:100}});else for(this.push({data:E.fileRecord,meta:{percent:0}});this.contentBuffer.length;)this.push(this.contentBuffer.shift());this.currentFile=null},b.prototype.flush=function(){for(var m=this.bytesWritten,v=0;v<this.dirRecords.length;v++)this.push({data:this.dirRecords[v],meta:{percent:100}});var E=this.bytesWritten-m,y=(function(S,x,O,L,N){var Y=h.transformTo("string",N(L));return w.CENTRAL_DIRECTORY_END+"\0\0\0\0"+s(S,2)+s(S,2)+s(x,4)+s(O,4)+s(Y.length,2)+Y})(this.dirRecords.length,E,m,this.zipComment,this.encodeFileName);this.push({data:y,meta:{percent:100}})},b.prototype.prepareNextSource=function(){this.previous=this._sources.shift(),this.openedSource(this.previous.streamInfo),this.isPaused?this.previous.pause():this.previous.resume()},b.prototype.registerPrevious=function(m){this._sources.push(m);var v=this;return m.on("data",function(E){v.processChunk(E)}),m.on("end",function(){v.closedSource(v.previous.streamInfo),v._sources.length?v.prepareNextSource():v.end()}),m.on("error",function(E){v.error(E)}),this},b.prototype.resume=function(){return!!c.prototype.resume.call(this)&&(!this.previous&&this._sources.length?(this.prepareNextSource(),!0):this.previous||this._sources.length||this.generatedError?void 0:(this.end(),!0))},b.prototype.error=function(m){var v=this._sources;if(!c.prototype.error.call(this,m))return!1;for(var E=0;E<v.length;E++)try{v[E].error(m)}catch{}return!0},b.prototype.lock=function(){c.prototype.lock.call(this);for(var m=this._sources,v=0;v<m.length;v++)m[v].lock()},i.exports=b},{"../crc32":4,"../signature":23,"../stream/GenericWorker":28,"../utf8":31,"../utils":32}],9:[function(r,i,a){"use strict";var s=r("../compressions"),l=r("./ZipFileWorker");a.generateWorker=function(h,c,f){var p=new l(c.streamFiles,f,c.platform,c.encodeFileName),w=0;try{h.forEach(function(b,m){w++;var v=(function(x,O){var L=x||O,N=s[L];if(!N)throw new Error(L+" is not a valid compression method !");return N})(m.options.compression,c.compression),E=m.options.compressionOptions||c.compressionOptions||{},y=m.dir,S=m.date;m._compressWorker(v,E).withStreamInfo("file",{name:b,dir:y,date:S,comment:m.comment||"",unixPermissions:m.unixPermissions,dosPermissions:m.dosPermissions}).pipe(p)}),p.entriesCount=w}catch(b){p.error(b)}return p}},{"../compressions":3,"./ZipFileWorker":8}],10:[function(r,i,a){"use strict";function s(){if(!(this instanceof s))return new s;if(arguments.length)throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");this.files=Object.create(null),this.comment=null,this.root="",this.clone=function(){var l=new s;for(var h in this)typeof this[h]!="function"&&(l[h]=this[h]);return l}}(s.prototype=r("./object")).loadAsync=r("./load"),s.support=r("./support"),s.defaults=r("./defaults"),s.version="3.9.1",s.loadAsync=function(l,h){return new s().loadAsync(l,h)},s.external=r("./external"),i.exports=s},{"./defaults":5,"./external":6,"./load":11,"./object":15,"./support":30}],11:[function(r,i,a){"use strict";var s=r("./utils"),l=r("./external"),h=r("./utf8"),c=r("./zipEntries"),f=r("./stream/Crc32Probe"),p=r("./nodejsUtils");function w(b){return new l.Promise(function(m,v){var E=b.decompressed.getContentWorker().pipe(new f);E.on("error",function(y){v(y)}).on("end",function(){E.streamInfo.crc32!==b.decompressed.crc32?v(new Error("Corrupted zip : CRC32 mismatch")):m()}).resume()})}i.exports=function(b,m){var v=this;return m=s.extend(m||{},{base64:!1,checkCRC32:!1,optimizedBinaryString:!1,createFolders:!1,decodeFileName:h.utf8decode}),p.isNode&&p.isStream(b)?l.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")):s.prepareContent("the loaded zip file",b,!0,m.optimizedBinaryString,m.base64).then(function(E){var y=new c(m);return y.load(E),y}).then(function(E){var y=[l.Promise.resolve(E)],S=E.files;if(m.checkCRC32)for(var x=0;x<S.length;x++)y.push(w(S[x]));return l.Promise.all(y)}).then(function(E){for(var y=E.shift(),S=y.files,x=0;x<S.length;x++){var O=S[x],L=O.fileNameStr,N=s.resolve(O.fileNameStr);v.file(N,O.decompressed,{binary:!0,optimizedBinaryString:!0,date:O.date,dir:O.dir,comment:O.fileCommentStr.length?O.fileCommentStr:null,unixPermissions:O.unixPermissions,dosPermissions:O.dosPermissions,createFolders:m.createFolders}),O.dir||(v.file(N).unsafeOriginalName=L)}return y.zipComment.length&&(v.comment=y.zipComment),v})}},{"./external":6,"./nodejsUtils":14,"./stream/Crc32Probe":25,"./utf8":31,"./utils":32,"./zipEntries":33}],12:[function(r,i,a){"use strict";var s=r("../utils"),l=r("../stream/GenericWorker");function h(c,f){l.call(this,"Nodejs stream input adapter for "+c),this._upstreamEnded=!1,this._bindStream(f)}s.inherits(h,l),h.prototype._bindStream=function(c){var f=this;(this._stream=c).pause(),c.on("data",function(p){f.push({data:p,meta:{percent:0}})}).on("error",function(p){f.isPaused?this.generatedError=p:f.error(p)}).on("end",function(){f.isPaused?f._upstreamEnded=!0:f.end()})},h.prototype.pause=function(){return!!l.prototype.pause.call(this)&&(this._stream.pause(),!0)},h.prototype.resume=function(){return!!l.prototype.resume.call(this)&&(this._upstreamEnded?this.end():this._stream.resume(),!0)},i.exports=h},{"../stream/GenericWorker":28,"../utils":32}],13:[function(r,i,a){"use strict";var s=r("readable-stream").Readable;function l(h,c,f){s.call(this,c),this._helper=h;var p=this;h.on("data",function(w,b){p.push(w)||p._helper.pause(),f&&f(b)}).on("error",function(w){p.emit("error",w)}).on("end",function(){p.push(null)})}r("../utils").inherits(l,s),l.prototype._read=function(){this._helper.resume()},i.exports=l},{"../utils":32,"readable-stream":16}],14:[function(r,i,a){"use strict";i.exports={isNode:typeof Buffer<"u",newBufferFrom:function(s,l){if(Buffer.from&&Buffer.from!==Uint8Array.from)return Buffer.from(s,l);if(typeof s=="number")throw new Error('The "data" argument must not be a number');return new Buffer(s,l)},allocBuffer:function(s){if(Buffer.alloc)return Buffer.alloc(s);var l=new Buffer(s);return l.fill(0),l},isBuffer:function(s){return Buffer.isBuffer(s)},isStream:function(s){return s&&typeof s.on=="function"&&typeof s.pause=="function"&&typeof s.resume=="function"}}},{}],15:[function(r,i,a){"use strict";function s(L,N,Y){var Z,ie=h.getTypeOf(N),W=h.extend(Y||{},p);W.date=W.date||new Date,W.compression!==null&&(W.compression=W.compression.toUpperCase()),typeof W.unixPermissions=="string"&&(W.unixPermissions=parseInt(W.unixPermissions,8)),W.unixPermissions&&16384&W.unixPermissions&&(W.dir=!0),W.dosPermissions&&16&W.dosPermissions&&(W.dir=!0),W.dir&&(L=S(L)),W.createFolders&&(Z=y(L))&&x.call(this,Z,!0);var ge=ie==="string"&&W.binary===!1&&W.base64===!1;Y&&Y.binary!==void 0||(W.binary=!ge),(N instanceof w&&N.uncompressedSize===0||W.dir||!N||N.length===0)&&(W.base64=!1,W.binary=!0,N="",W.compression="STORE",ie="string");var _e=null;_e=N instanceof w||N instanceof c?N:v.isNode&&v.isStream(N)?new E(L,N):h.prepareContent(L,N,W.binary,W.optimizedBinaryString,W.base64);var P=new b(L,_e,W);this.files[L]=P}var l=r("./utf8"),h=r("./utils"),c=r("./stream/GenericWorker"),f=r("./stream/StreamHelper"),p=r("./defaults"),w=r("./compressedObject"),b=r("./zipObject"),m=r("./generate"),v=r("./nodejsUtils"),E=r("./nodejs/NodejsStreamInputAdapter"),y=function(L){L.slice(-1)==="/"&&(L=L.substring(0,L.length-1));var N=L.lastIndexOf("/");return 0<N?L.substring(0,N):""},S=function(L){return L.slice(-1)!=="/"&&(L+="/"),L},x=function(L,N){return N=N!==void 0?N:p.createFolders,L=S(L),this.files[L]||s.call(this,L,null,{dir:!0,createFolders:N}),this.files[L]};function O(L){return Object.prototype.toString.call(L)==="[object RegExp]"}i.exports={load:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},forEach:function(L){var N,Y,Z;for(N in this.files)Z=this.files[N],(Y=N.slice(this.root.length,N.length))&&N.slice(0,this.root.length)===this.root&&L(Y,Z)},filter:function(L){var N=[];return this.forEach(function(Y,Z){L(Y,Z)&&N.push(Z)}),N},file:function(L,N,Y){if(arguments.length!==1)return L=this.root+L,s.call(this,L,N,Y),this;if(O(L)){var Z=L;return this.filter(function(W,ge){return!ge.dir&&Z.test(W)})}var ie=this.files[this.root+L];return ie&&!ie.dir?ie:null},folder:function(L){if(!L)return this;if(O(L))return this.filter(function(ie,W){return W.dir&&L.test(ie)});var N=this.root+L,Y=x.call(this,N),Z=this.clone();return Z.root=Y.name,Z},remove:function(L){L=this.root+L;var N=this.files[L];if(N||(L.slice(-1)!=="/"&&(L+="/"),N=this.files[L]),N&&!N.dir)delete this.files[L];else for(var Y=this.filter(function(ie,W){return W.name.slice(0,L.length)===L}),Z=0;Z<Y.length;Z++)delete this.files[Y[Z].name];return this},generate:function(L){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},generateInternalStream:function(L){var N,Y={};try{if((Y=h.extend(L||{},{streamFiles:!1,compression:"STORE",compressionOptions:null,type:"",platform:"DOS",comment:null,mimeType:"application/zip",encodeFileName:l.utf8encode})).type=Y.type.toLowerCase(),Y.compression=Y.compression.toUpperCase(),Y.type==="binarystring"&&(Y.type="string"),!Y.type)throw new Error("No output type specified.");h.checkSupport(Y.type),Y.platform!=="darwin"&&Y.platform!=="freebsd"&&Y.platform!=="linux"&&Y.platform!=="sunos"||(Y.platform="UNIX"),Y.platform==="win32"&&(Y.platform="DOS");var Z=Y.comment||this.comment||"";N=m.generateWorker(this,Y,Z)}catch(ie){(N=new c("error")).error(ie)}return new f(N,Y.type||"string",Y.mimeType)},generateAsync:function(L,N){return this.generateInternalStream(L).accumulate(N)},generateNodeStream:function(L,N){return(L=L||{}).type||(L.type="nodebuffer"),this.generateInternalStream(L).toNodejsStream(N)}}},{"./compressedObject":2,"./defaults":5,"./generate":9,"./nodejs/NodejsStreamInputAdapter":12,"./nodejsUtils":14,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31,"./utils":32,"./zipObject":35}],16:[function(r,i,a){i.exports=r("stream")},{stream:void 0}],17:[function(r,i,a){"use strict";var s=r("./DataReader");function l(h){s.call(this,h);for(var c=0;c<this.data.length;c++)h[c]=255&h[c]}r("../utils").inherits(l,s),l.prototype.byteAt=function(h){return this.data[this.zero+h]},l.prototype.lastIndexOfSignature=function(h){for(var c=h.charCodeAt(0),f=h.charCodeAt(1),p=h.charCodeAt(2),w=h.charCodeAt(3),b=this.length-4;0<=b;--b)if(this.data[b]===c&&this.data[b+1]===f&&this.data[b+2]===p&&this.data[b+3]===w)return b-this.zero;return-1},l.prototype.readAndCheckSignature=function(h){var c=h.charCodeAt(0),f=h.charCodeAt(1),p=h.charCodeAt(2),w=h.charCodeAt(3),b=this.readData(4);return c===b[0]&&f===b[1]&&p===b[2]&&w===b[3]},l.prototype.readData=function(h){if(this.checkOffset(h),h===0)return[];var c=this.data.slice(this.zero+this.index,this.zero+this.index+h);return this.index+=h,c},i.exports=l},{"../utils":32,"./DataReader":18}],18:[function(r,i,a){"use strict";var s=r("../utils");function l(h){this.data=h,this.length=h.length,this.index=0,this.zero=0}l.prototype={checkOffset:function(h){this.checkIndex(this.index+h)},checkIndex:function(h){if(this.length<this.zero+h||h<0)throw new Error("End of data reached (data length = "+this.length+", asked index = "+h+"). Corrupted zip ?")},setIndex:function(h){this.checkIndex(h),this.index=h},skip:function(h){this.setIndex(this.index+h)},byteAt:function(h){},readInt:function(h){var c,f=0;for(this.checkOffset(h),c=this.index+h-1;c>=this.index;c--)f=(f<<8)+this.byteAt(c);return this.index+=h,f},readString:function(h){return s.transformTo("string",this.readData(h))},readData:function(h){},lastIndexOfSignature:function(h){},readAndCheckSignature:function(h){},readDate:function(){var h=this.readInt(4);return new Date(Date.UTC(1980+(h>>25&127),(h>>21&15)-1,h>>16&31,h>>11&31,h>>5&63,(31&h)<<1))}},i.exports=l},{"../utils":32}],19:[function(r,i,a){"use strict";var s=r("./Uint8ArrayReader");function l(h){s.call(this,h)}r("../utils").inherits(l,s),l.prototype.readData=function(h){this.checkOffset(h);var c=this.data.slice(this.zero+this.index,this.zero+this.index+h);return this.index+=h,c},i.exports=l},{"../utils":32,"./Uint8ArrayReader":21}],20:[function(r,i,a){"use strict";var s=r("./DataReader");function l(h){s.call(this,h)}r("../utils").inherits(l,s),l.prototype.byteAt=function(h){return this.data.charCodeAt(this.zero+h)},l.prototype.lastIndexOfSignature=function(h){return this.data.lastIndexOf(h)-this.zero},l.prototype.readAndCheckSignature=function(h){return h===this.readData(4)},l.prototype.readData=function(h){this.checkOffset(h);var c=this.data.slice(this.zero+this.index,this.zero+this.index+h);return this.index+=h,c},i.exports=l},{"../utils":32,"./DataReader":18}],21:[function(r,i,a){"use strict";var s=r("./ArrayReader");function l(h){s.call(this,h)}r("../utils").inherits(l,s),l.prototype.readData=function(h){if(this.checkOffset(h),h===0)return new Uint8Array(0);var c=this.data.subarray(this.zero+this.index,this.zero+this.index+h);return this.index+=h,c},i.exports=l},{"../utils":32,"./ArrayReader":17}],22:[function(r,i,a){"use strict";var s=r("../utils"),l=r("../support"),h=r("./ArrayReader"),c=r("./StringReader"),f=r("./NodeBufferReader"),p=r("./Uint8ArrayReader");i.exports=function(w){var b=s.getTypeOf(w);return s.checkSupport(b),b!=="string"||l.uint8array?b==="nodebuffer"?new f(w):l.uint8array?new p(s.transformTo("uint8array",w)):new h(s.transformTo("array",w)):new c(w)}},{"../support":30,"../utils":32,"./ArrayReader":17,"./NodeBufferReader":19,"./StringReader":20,"./Uint8ArrayReader":21}],23:[function(r,i,a){"use strict";a.LOCAL_FILE_HEADER="PK",a.CENTRAL_FILE_HEADER="PK",a.CENTRAL_DIRECTORY_END="PK",a.ZIP64_CENTRAL_DIRECTORY_LOCATOR="PK\x07",a.ZIP64_CENTRAL_DIRECTORY_END="PK",a.DATA_DESCRIPTOR="PK\x07\b"},{}],24:[function(r,i,a){"use strict";var s=r("./GenericWorker"),l=r("../utils");function h(c){s.call(this,"ConvertWorker to "+c),this.destType=c}l.inherits(h,s),h.prototype.processChunk=function(c){this.push({data:l.transformTo(this.destType,c.data),meta:c.meta})},i.exports=h},{"../utils":32,"./GenericWorker":28}],25:[function(r,i,a){"use strict";var s=r("./GenericWorker"),l=r("../crc32");function h(){s.call(this,"Crc32Probe"),this.withStreamInfo("crc32",0)}r("../utils").inherits(h,s),h.prototype.processChunk=function(c){this.streamInfo.crc32=l(c.data,this.streamInfo.crc32||0),this.push(c)},i.exports=h},{"../crc32":4,"../utils":32,"./GenericWorker":28}],26:[function(r,i,a){"use strict";var s=r("../utils"),l=r("./GenericWorker");function h(c){l.call(this,"DataLengthProbe for "+c),this.propName=c,this.withStreamInfo(c,0)}s.inherits(h,l),h.prototype.processChunk=function(c){if(c){var f=this.streamInfo[this.propName]||0;this.streamInfo[this.propName]=f+c.data.length}l.prototype.processChunk.call(this,c)},i.exports=h},{"../utils":32,"./GenericWorker":28}],27:[function(r,i,a){"use strict";var s=r("../utils"),l=r("./GenericWorker");function h(c){l.call(this,"DataWorker");var f=this;this.dataIsReady=!1,this.index=0,this.max=0,this.data=null,this.type="",this._tickScheduled=!1,c.then(function(p){f.dataIsReady=!0,f.data=p,f.max=p&&p.length||0,f.type=s.getTypeOf(p),f.isPaused||f._tickAndRepeat()},function(p){f.error(p)})}s.inherits(h,l),h.prototype.cleanUp=function(){l.prototype.cleanUp.call(this),this.data=null},h.prototype.resume=function(){return!!l.prototype.resume.call(this)&&(!this._tickScheduled&&this.dataIsReady&&(this._tickScheduled=!0,s.delay(this._tickAndRepeat,[],this)),!0)},h.prototype._tickAndRepeat=function(){this._tickScheduled=!1,this.isPaused||this.isFinished||(this._tick(),this.isFinished||(s.delay(this._tickAndRepeat,[],this),this._tickScheduled=!0))},h.prototype._tick=function(){if(this.isPaused||this.isFinished)return!1;var c=null,f=Math.min(this.max,this.index+16384);if(this.index>=this.max)return this.end();switch(this.type){case"string":c=this.data.substring(this.index,f);break;case"uint8array":c=this.data.subarray(this.index,f);break;case"array":case"nodebuffer":c=this.data.slice(this.index,f)}return this.index=f,this.push({data:c,meta:{percent:this.max?this.index/this.max*100:0}})},i.exports=h},{"../utils":32,"./GenericWorker":28}],28:[function(r,i,a){"use strict";function s(l){this.name=l||"default",this.streamInfo={},this.generatedError=null,this.extraStreamInfo={},this.isPaused=!0,this.isFinished=!1,this.isLocked=!1,this._listeners={data:[],end:[],error:[]},this.previous=null}s.prototype={push:function(l){this.emit("data",l)},end:function(){if(this.isFinished)return!1;this.flush();try{this.emit("end"),this.cleanUp(),this.isFinished=!0}catch(l){this.emit("error",l)}return!0},error:function(l){return!this.isFinished&&(this.isPaused?this.generatedError=l:(this.isFinished=!0,this.emit("error",l),this.previous&&this.previous.error(l),this.cleanUp()),!0)},on:function(l,h){return this._listeners[l].push(h),this},cleanUp:function(){this.streamInfo=this.generatedError=this.extraStreamInfo=null,this._listeners=[]},emit:function(l,h){if(this._listeners[l])for(var c=0;c<this._listeners[l].length;c++)this._listeners[l][c].call(this,h)},pipe:function(l){return l.registerPrevious(this)},registerPrevious:function(l){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.streamInfo=l.streamInfo,this.mergeStreamInfo(),this.previous=l;var h=this;return l.on("data",function(c){h.processChunk(c)}),l.on("end",function(){h.end()}),l.on("error",function(c){h.error(c)}),this},pause:function(){return!this.isPaused&&!this.isFinished&&(this.isPaused=!0,this.previous&&this.previous.pause(),!0)},resume:function(){if(!this.isPaused||this.isFinished)return!1;var l=this.isPaused=!1;return this.generatedError&&(this.error(this.generatedError),l=!0),this.previous&&this.previous.resume(),!l},flush:function(){},processChunk:function(l){this.push(l)},withStreamInfo:function(l,h){return this.extraStreamInfo[l]=h,this.mergeStreamInfo(),this},mergeStreamInfo:function(){for(var l in this.extraStreamInfo)this.extraStreamInfo.hasOwnProperty(l)&&(this.streamInfo[l]=this.extraStreamInfo[l])},lock:function(){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.isLocked=!0,this.previous&&this.previous.lock()},toString:function(){var l="Worker "+this.name;return this.previous?this.previous+" -> "+l:l}},i.exports=s},{}],29:[function(r,i,a){"use strict";var s=r("../utils"),l=r("./ConvertWorker"),h=r("./GenericWorker"),c=r("../base64"),f=r("../support"),p=r("../external"),w=null;if(f.nodestream)try{w=r("../nodejs/NodejsStreamOutputAdapter")}catch{}function b(v,E){return new p.Promise(function(y,S){var x=[],O=v._internalType,L=v._outputType,N=v._mimeType;v.on("data",function(Y,Z){x.push(Y),E&&E(Z)}).on("error",function(Y){x=[],S(Y)}).on("end",function(){try{y((function(Y,Z,ie){switch(Y){case"blob":return s.newBlob(s.transformTo("arraybuffer",Z),ie);case"base64":return c.encode(Z);default:return s.transformTo(Y,Z)}})(L,(function(Y,Z){var ie,W=0,ge=null,_e=0;for(ie=0;ie<Z.length;ie++)_e+=Z[ie].length;switch(Y){case"string":return Z.join("");case"array":return Array.prototype.concat.apply([],Z);case"uint8array":for(ge=new Uint8Array(_e),ie=0;ie<Z.length;ie++)ge.set(Z[ie],W),W+=Z[ie].length;return ge;case"nodebuffer":return Buffer.concat(Z);default:throw new Error("concat : unsupported type '"+Y+"'")}})(O,x),N))}catch(Y){S(Y)}x=[]}).resume()})}function m(v,E,y){var S=E;switch(E){case"blob":case"arraybuffer":S="uint8array";break;case"base64":S="string"}try{this._internalType=S,this._outputType=E,this._mimeType=y,s.checkSupport(S),this._worker=v.pipe(new l(S)),v.lock()}catch(x){this._worker=new h("error"),this._worker.error(x)}}m.prototype={accumulate:function(v){return b(this,v)},on:function(v,E){var y=this;return v==="data"?this._worker.on(v,function(S){E.call(y,S.data,S.meta)}):this._worker.on(v,function(){s.delay(E,arguments,y)}),this},resume:function(){return s.delay(this._worker.resume,[],this._worker),this},pause:function(){return this._worker.pause(),this},toNodejsStream:function(v){if(s.checkSupport("nodestream"),this._outputType!=="nodebuffer")throw new Error(this._outputType+" is not supported by this method");return new w(this,{objectMode:this._outputType!=="nodebuffer"},v)}},i.exports=m},{"../base64":1,"../external":6,"../nodejs/NodejsStreamOutputAdapter":13,"../support":30,"../utils":32,"./ConvertWorker":24,"./GenericWorker":28}],30:[function(r,i,a){"use strict";if(a.base64=!0,a.array=!0,a.string=!0,a.arraybuffer=typeof ArrayBuffer<"u"&&typeof Uint8Array<"u",a.nodebuffer=typeof Buffer<"u",a.uint8array=typeof Uint8Array<"u",typeof ArrayBuffer>"u")a.blob=!1;else{var s=new ArrayBuffer(0);try{a.blob=new Blob([s],{type:"application/zip"}).size===0}catch{try{var l=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);l.append(s),a.blob=l.getBlob("application/zip").size===0}catch{a.blob=!1}}}try{a.nodestream=!!r("readable-stream").Readable}catch{a.nodestream=!1}},{"readable-stream":16}],31:[function(r,i,a){"use strict";for(var s=r("./utils"),l=r("./support"),h=r("./nodejsUtils"),c=r("./stream/GenericWorker"),f=new Array(256),p=0;p<256;p++)f[p]=252<=p?6:248<=p?5:240<=p?4:224<=p?3:192<=p?2:1;f[254]=f[254]=1;function w(){c.call(this,"utf-8 decode"),this.leftOver=null}function b(){c.call(this,"utf-8 encode")}a.utf8encode=function(m){return l.nodebuffer?h.newBufferFrom(m,"utf-8"):(function(v){var E,y,S,x,O,L=v.length,N=0;for(x=0;x<L;x++)(64512&(y=v.charCodeAt(x)))==55296&&x+1<L&&(64512&(S=v.charCodeAt(x+1)))==56320&&(y=65536+(y-55296<<10)+(S-56320),x++),N+=y<128?1:y<2048?2:y<65536?3:4;for(E=l.uint8array?new Uint8Array(N):new Array(N),x=O=0;O<N;x++)(64512&(y=v.charCodeAt(x)))==55296&&x+1<L&&(64512&(S=v.charCodeAt(x+1)))==56320&&(y=65536+(y-55296<<10)+(S-56320),x++),y<128?E[O++]=y:(y<2048?E[O++]=192|y>>>6:(y<65536?E[O++]=224|y>>>12:(E[O++]=240|y>>>18,E[O++]=128|y>>>12&63),E[O++]=128|y>>>6&63),E[O++]=128|63&y);return E})(m)},a.utf8decode=function(m){return l.nodebuffer?s.transformTo("nodebuffer",m).toString("utf-8"):(function(v){var E,y,S,x,O=v.length,L=new Array(2*O);for(E=y=0;E<O;)if((S=v[E++])<128)L[y++]=S;else if(4<(x=f[S]))L[y++]=65533,E+=x-1;else{for(S&=x===2?31:x===3?15:7;1<x&&E<O;)S=S<<6|63&v[E++],x--;1<x?L[y++]=65533:S<65536?L[y++]=S:(S-=65536,L[y++]=55296|S>>10&1023,L[y++]=56320|1023&S)}return L.length!==y&&(L.subarray?L=L.subarray(0,y):L.length=y),s.applyFromCharCode(L)})(m=s.transformTo(l.uint8array?"uint8array":"array",m))},s.inherits(w,c),w.prototype.processChunk=function(m){var v=s.transformTo(l.uint8array?"uint8array":"array",m.data);if(this.leftOver&&this.leftOver.length){if(l.uint8array){var E=v;(v=new Uint8Array(E.length+this.leftOver.length)).set(this.leftOver,0),v.set(E,this.leftOver.length)}else v=this.leftOver.concat(v);this.leftOver=null}var y=(function(x,O){var L;for((O=O||x.length)>x.length&&(O=x.length),L=O-1;0<=L&&(192&x[L])==128;)L--;return L<0||L===0?O:L+f[x[L]]>O?L:O})(v),S=v;y!==v.length&&(l.uint8array?(S=v.subarray(0,y),this.leftOver=v.subarray(y,v.length)):(S=v.slice(0,y),this.leftOver=v.slice(y,v.length))),this.push({data:a.utf8decode(S),meta:m.meta})},w.prototype.flush=function(){this.leftOver&&this.leftOver.length&&(this.push({data:a.utf8decode(this.leftOver),meta:{}}),this.leftOver=null)},a.Utf8DecodeWorker=w,s.inherits(b,c),b.prototype.processChunk=function(m){this.push({data:a.utf8encode(m.data),meta:m.meta})},a.Utf8EncodeWorker=b},{"./nodejsUtils":14,"./stream/GenericWorker":28,"./support":30,"./utils":32}],32:[function(r,i,a){"use strict";var s=r("./support"),l=r("./base64"),h=r("./nodejsUtils"),c=r("set-immediate-shim"),f=r("./external");function p(y){return y}function w(y,S){for(var x=0;x<y.length;++x)S[x]=255&y.charCodeAt(x);return S}a.newBlob=function(y,S){a.checkSupport("blob");try{return new Blob([y],{type:S})}catch{try{var x=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);return x.append(y),x.getBlob(S)}catch{throw new Error("Bug : can't construct the Blob.")}}};var b={stringifyByChunk:function(y,S,x){var O=[],L=0,N=y.length;if(N<=x)return String.fromCharCode.apply(null,y);for(;L<N;)S==="array"||S==="nodebuffer"?O.push(String.fromCharCode.apply(null,y.slice(L,Math.min(L+x,N)))):O.push(String.fromCharCode.apply(null,y.subarray(L,Math.min(L+x,N)))),L+=x;return O.join("")},stringifyByChar:function(y){for(var S="",x=0;x<y.length;x++)S+=String.fromCharCode(y[x]);return S},applyCanBeUsed:{uint8array:(function(){try{return s.uint8array&&String.fromCharCode.apply(null,new Uint8Array(1)).length===1}catch{return!1}})(),nodebuffer:(function(){try{return s.nodebuffer&&String.fromCharCode.apply(null,h.allocBuffer(1)).length===1}catch{return!1}})()}};function m(y){var S=65536,x=a.getTypeOf(y),O=!0;if(x==="uint8array"?O=b.applyCanBeUsed.uint8array:x==="nodebuffer"&&(O=b.applyCanBeUsed.nodebuffer),O)for(;1<S;)try{return b.stringifyByChunk(y,x,S)}catch{S=Math.floor(S/2)}return b.stringifyByChar(y)}function v(y,S){for(var x=0;x<y.length;x++)S[x]=y[x];return S}a.applyFromCharCode=m;var E={};E.string={string:p,array:function(y){return w(y,new Array(y.length))},arraybuffer:function(y){return E.string.uint8array(y).buffer},uint8array:function(y){return w(y,new Uint8Array(y.length))},nodebuffer:function(y){return w(y,h.allocBuffer(y.length))}},E.array={string:m,array:p,arraybuffer:function(y){return new Uint8Array(y).buffer},uint8array:function(y){return new Uint8Array(y)},nodebuffer:function(y){return h.newBufferFrom(y)}},E.arraybuffer={string:function(y){return m(new Uint8Array(y))},array:function(y){return v(new Uint8Array(y),new Array(y.byteLength))},arraybuffer:p,uint8array:function(y){return new Uint8Array(y)},nodebuffer:function(y){return h.newBufferFrom(new Uint8Array(y))}},E.uint8array={string:m,array:function(y){return v(y,new Array(y.length))},arraybuffer:function(y){return y.buffer},uint8array:p,nodebuffer:function(y){return h.newBufferFrom(y)}},E.nodebuffer={string:m,array:function(y){return v(y,new Array(y.length))},arraybuffer:function(y){return E.nodebuffer.uint8array(y).buffer},uint8array:function(y){return v(y,new Uint8Array(y.length))},nodebuffer:p},a.transformTo=function(y,S){return S=S||"",y?(a.checkSupport(y),E[a.getTypeOf(S)][y](S)):S},a.resolve=function(y){for(var S=y.split("/"),x=[],O=0;O<S.length;O++){var L=S[O];L==="."||L===""&&O!==0&&O!==S.length-1||(L===".."?x.pop():x.push(L))}return x.join("/")},a.getTypeOf=function(y){return typeof y=="string"?"string":Object.prototype.toString.call(y)==="[object Array]"?"array":s.nodebuffer&&h.isBuffer(y)?"nodebuffer":s.uint8array&&y instanceof Uint8Array?"uint8array":s.arraybuffer&&y instanceof ArrayBuffer?"arraybuffer":void 0},a.checkSupport=function(y){if(!s[y.toLowerCase()])throw new Error(y+" is not supported by this platform")},a.MAX_VALUE_16BITS=65535,a.MAX_VALUE_32BITS=-1,a.pretty=function(y){var S,x,O="";for(x=0;x<(y||"").length;x++)O+="\\x"+((S=y.charCodeAt(x))<16?"0":"")+S.toString(16).toUpperCase();return O},a.delay=function(y,S,x){c(function(){y.apply(x||null,S||[])})},a.inherits=function(y,S){function x(){}x.prototype=S.prototype,y.prototype=new x},a.extend=function(){var y,S,x={};for(y=0;y<arguments.length;y++)for(S in arguments[y])arguments[y].hasOwnProperty(S)&&x[S]===void 0&&(x[S]=arguments[y][S]);return x},a.prepareContent=function(y,S,x,O,L){return f.Promise.resolve(S).then(function(N){return s.blob&&(N instanceof Blob||["[object File]","[object Blob]"].indexOf(Object.prototype.toString.call(N))!==-1)&&typeof FileReader<"u"?new f.Promise(function(Y,Z){var ie=new FileReader;ie.onload=function(W){Y(W.target.result)},ie.onerror=function(W){Z(W.target.error)},ie.readAsArrayBuffer(N)}):N}).then(function(N){var Y=a.getTypeOf(N);return Y?(Y==="arraybuffer"?N=a.transformTo("uint8array",N):Y==="string"&&(L?N=l.decode(N):x&&O!==!0&&(N=(function(Z){return w(Z,s.uint8array?new Uint8Array(Z.length):new Array(Z.length))})(N))),N):f.Promise.reject(new Error("Can't read the data of '"+y+"'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"))})}},{"./base64":1,"./external":6,"./nodejsUtils":14,"./support":30,"set-immediate-shim":54}],33:[function(r,i,a){"use strict";var s=r("./reader/readerFor"),l=r("./utils"),h=r("./signature"),c=r("./zipEntry"),f=(r("./utf8"),r("./support"));function p(w){this.files=[],this.loadOptions=w}p.prototype={checkSignature:function(w){if(!this.reader.readAndCheckSignature(w)){this.reader.index-=4;var b=this.reader.readString(4);throw new Error("Corrupted zip or bug: unexpected signature ("+l.pretty(b)+", expected "+l.pretty(w)+")")}},isSignature:function(w,b){var m=this.reader.index;this.reader.setIndex(w);var v=this.reader.readString(4)===b;return this.reader.setIndex(m),v},readBlockEndOfCentral:function(){this.diskNumber=this.reader.readInt(2),this.diskWithCentralDirStart=this.reader.readInt(2),this.centralDirRecordsOnThisDisk=this.reader.readInt(2),this.centralDirRecords=this.reader.readInt(2),this.centralDirSize=this.reader.readInt(4),this.centralDirOffset=this.reader.readInt(4),this.zipCommentLength=this.reader.readInt(2);var w=this.reader.readData(this.zipCommentLength),b=f.uint8array?"uint8array":"array",m=l.transformTo(b,w);this.zipComment=this.loadOptions.decodeFileName(m)},readBlockZip64EndOfCentral:function(){this.zip64EndOfCentralSize=this.reader.readInt(8),this.reader.skip(4),this.diskNumber=this.reader.readInt(4),this.diskWithCentralDirStart=this.reader.readInt(4),this.centralDirRecordsOnThisDisk=this.reader.readInt(8),this.centralDirRecords=this.reader.readInt(8),this.centralDirSize=this.reader.readInt(8),this.centralDirOffset=this.reader.readInt(8),this.zip64ExtensibleData={};for(var w,b,m,v=this.zip64EndOfCentralSize-44;0<v;)w=this.reader.readInt(2),b=this.reader.readInt(4),m=this.reader.readData(b),this.zip64ExtensibleData[w]={id:w,length:b,value:m}},readBlockZip64EndOfCentralLocator:function(){if(this.diskWithZip64CentralDirStart=this.reader.readInt(4),this.relativeOffsetEndOfZip64CentralDir=this.reader.readInt(8),this.disksCount=this.reader.readInt(4),1<this.disksCount)throw new Error("Multi-volumes zip are not supported")},readLocalFiles:function(){var w,b;for(w=0;w<this.files.length;w++)b=this.files[w],this.reader.setIndex(b.localHeaderOffset),this.checkSignature(h.LOCAL_FILE_HEADER),b.readLocalPart(this.reader),b.handleUTF8(),b.processAttributes()},readCentralDir:function(){var w;for(this.reader.setIndex(this.centralDirOffset);this.reader.readAndCheckSignature(h.CENTRAL_FILE_HEADER);)(w=new c({zip64:this.zip64},this.loadOptions)).readCentralPart(this.reader),this.files.push(w);if(this.centralDirRecords!==this.files.length&&this.centralDirRecords!==0&&this.files.length===0)throw new Error("Corrupted zip or bug: expected "+this.centralDirRecords+" records in central dir, got "+this.files.length)},readEndOfCentral:function(){var w=this.reader.lastIndexOfSignature(h.CENTRAL_DIRECTORY_END);if(w<0)throw this.isSignature(0,h.LOCAL_FILE_HEADER)?new Error("Corrupted zip: can't find end of central directory"):new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");this.reader.setIndex(w);var b=w;if(this.checkSignature(h.CENTRAL_DIRECTORY_END),this.readBlockEndOfCentral(),this.diskNumber===l.MAX_VALUE_16BITS||this.diskWithCentralDirStart===l.MAX_VALUE_16BITS||this.centralDirRecordsOnThisDisk===l.MAX_VALUE_16BITS||this.centralDirRecords===l.MAX_VALUE_16BITS||this.centralDirSize===l.MAX_VALUE_32BITS||this.centralDirOffset===l.MAX_VALUE_32BITS){if(this.zip64=!0,(w=this.reader.lastIndexOfSignature(h.ZIP64_CENTRAL_DIRECTORY_LOCATOR))<0)throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");if(this.reader.setIndex(w),this.checkSignature(h.ZIP64_CENTRAL_DIRECTORY_LOCATOR),this.readBlockZip64EndOfCentralLocator(),!this.isSignature(this.relativeOffsetEndOfZip64CentralDir,h.ZIP64_CENTRAL_DIRECTORY_END)&&(this.relativeOffsetEndOfZip64CentralDir=this.reader.lastIndexOfSignature(h.ZIP64_CENTRAL_DIRECTORY_END),this.relativeOffsetEndOfZip64CentralDir<0))throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),this.checkSignature(h.ZIP64_CENTRAL_DIRECTORY_END),this.readBlockZip64EndOfCentral()}var m=this.centralDirOffset+this.centralDirSize;this.zip64&&(m+=20,m+=12+this.zip64EndOfCentralSize);var v=b-m;if(0<v)this.isSignature(b,h.CENTRAL_FILE_HEADER)||(this.reader.zero=v);else if(v<0)throw new Error("Corrupted zip: missing "+Math.abs(v)+" bytes.")},prepareReader:function(w){this.reader=s(w)},load:function(w){this.prepareReader(w),this.readEndOfCentral(),this.readCentralDir(),this.readLocalFiles()}},i.exports=p},{"./reader/readerFor":22,"./signature":23,"./support":30,"./utf8":31,"./utils":32,"./zipEntry":34}],34:[function(r,i,a){"use strict";var s=r("./reader/readerFor"),l=r("./utils"),h=r("./compressedObject"),c=r("./crc32"),f=r("./utf8"),p=r("./compressions"),w=r("./support");function b(m,v){this.options=m,this.loadOptions=v}b.prototype={isEncrypted:function(){return(1&this.bitFlag)==1},useUTF8:function(){return(2048&this.bitFlag)==2048},readLocalPart:function(m){var v,E;if(m.skip(22),this.fileNameLength=m.readInt(2),E=m.readInt(2),this.fileName=m.readData(this.fileNameLength),m.skip(E),this.compressedSize===-1||this.uncompressedSize===-1)throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");if((v=(function(y){for(var S in p)if(p.hasOwnProperty(S)&&p[S].magic===y)return p[S];return null})(this.compressionMethod))===null)throw new Error("Corrupted zip : compression "+l.pretty(this.compressionMethod)+" unknown (inner file : "+l.transformTo("string",this.fileName)+")");this.decompressed=new h(this.compressedSize,this.uncompressedSize,this.crc32,v,m.readData(this.compressedSize))},readCentralPart:function(m){this.versionMadeBy=m.readInt(2),m.skip(2),this.bitFlag=m.readInt(2),this.compressionMethod=m.readString(2),this.date=m.readDate(),this.crc32=m.readInt(4),this.compressedSize=m.readInt(4),this.uncompressedSize=m.readInt(4);var v=m.readInt(2);if(this.extraFieldsLength=m.readInt(2),this.fileCommentLength=m.readInt(2),this.diskNumberStart=m.readInt(2),this.internalFileAttributes=m.readInt(2),this.externalFileAttributes=m.readInt(4),this.localHeaderOffset=m.readInt(4),this.isEncrypted())throw new Error("Encrypted zip are not supported");m.skip(v),this.readExtraFields(m),this.parseZIP64ExtraField(m),this.fileComment=m.readData(this.fileCommentLength)},processAttributes:function(){this.unixPermissions=null,this.dosPermissions=null;var m=this.versionMadeBy>>8;this.dir=!!(16&this.externalFileAttributes),m==0&&(this.dosPermissions=63&this.externalFileAttributes),m==3&&(this.unixPermissions=this.externalFileAttributes>>16&65535),this.dir||this.fileNameStr.slice(-1)!=="/"||(this.dir=!0)},parseZIP64ExtraField:function(m){if(this.extraFields[1]){var v=s(this.extraFields[1].value);this.uncompressedSize===l.MAX_VALUE_32BITS&&(this.uncompressedSize=v.readInt(8)),this.compressedSize===l.MAX_VALUE_32BITS&&(this.compressedSize=v.readInt(8)),this.localHeaderOffset===l.MAX_VALUE_32BITS&&(this.localHeaderOffset=v.readInt(8)),this.diskNumberStart===l.MAX_VALUE_32BITS&&(this.diskNumberStart=v.readInt(4))}},readExtraFields:function(m){var v,E,y,S=m.index+this.extraFieldsLength;for(this.extraFields||(this.extraFields={});m.index+4<S;)v=m.readInt(2),E=m.readInt(2),y=m.readData(E),this.extraFields[v]={id:v,length:E,value:y};m.setIndex(S)},handleUTF8:function(){var m=w.uint8array?"uint8array":"array";if(this.useUTF8())this.fileNameStr=f.utf8decode(this.fileName),this.fileCommentStr=f.utf8decode(this.fileComment);else{var v=this.findExtraFieldUnicodePath();if(v!==null)this.fileNameStr=v;else{var E=l.transformTo(m,this.fileName);this.fileNameStr=this.loadOptions.decodeFileName(E)}var y=this.findExtraFieldUnicodeComment();if(y!==null)this.fileCommentStr=y;else{var S=l.transformTo(m,this.fileComment);this.fileCommentStr=this.loadOptions.decodeFileName(S)}}},findExtraFieldUnicodePath:function(){var m=this.extraFields[28789];if(m){var v=s(m.value);return v.readInt(1)!==1||c(this.fileName)!==v.readInt(4)?null:f.utf8decode(v.readData(m.length-5))}return null},findExtraFieldUnicodeComment:function(){var m=this.extraFields[25461];if(m){var v=s(m.value);return v.readInt(1)!==1||c(this.fileComment)!==v.readInt(4)?null:f.utf8decode(v.readData(m.length-5))}return null}},i.exports=b},{"./compressedObject":2,"./compressions":3,"./crc32":4,"./reader/readerFor":22,"./support":30,"./utf8":31,"./utils":32}],35:[function(r,i,a){"use strict";function s(v,E,y){this.name=v,this.dir=y.dir,this.date=y.date,this.comment=y.comment,this.unixPermissions=y.unixPermissions,this.dosPermissions=y.dosPermissions,this._data=E,this._dataBinary=y.binary,this.options={compression:y.compression,compressionOptions:y.compressionOptions}}var l=r("./stream/StreamHelper"),h=r("./stream/DataWorker"),c=r("./utf8"),f=r("./compressedObject"),p=r("./stream/GenericWorker");s.prototype={internalStream:function(v){var E=null,y="string";try{if(!v)throw new Error("No output type specified.");var S=(y=v.toLowerCase())==="string"||y==="text";y!=="binarystring"&&y!=="text"||(y="string"),E=this._decompressWorker();var x=!this._dataBinary;x&&!S&&(E=E.pipe(new c.Utf8EncodeWorker)),!x&&S&&(E=E.pipe(new c.Utf8DecodeWorker))}catch(O){(E=new p("error")).error(O)}return new l(E,y,"")},async:function(v,E){return this.internalStream(v).accumulate(E)},nodeStream:function(v,E){return this.internalStream(v||"nodebuffer").toNodejsStream(E)},_compressWorker:function(v,E){if(this._data instanceof f&&this._data.compression.magic===v.magic)return this._data.getCompressedWorker();var y=this._decompressWorker();return this._dataBinary||(y=y.pipe(new c.Utf8EncodeWorker)),f.createWorkerFrom(y,v,E)},_decompressWorker:function(){return this._data instanceof f?this._data.getContentWorker():this._data instanceof p?this._data:new h(this._data)}};for(var w=["asText","asBinary","asNodeBuffer","asUint8Array","asArrayBuffer"],b=function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},m=0;m<w.length;m++)s.prototype[w[m]]=b;i.exports=s},{"./compressedObject":2,"./stream/DataWorker":27,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31}],36:[function(r,i,a){(function(s){"use strict";var l,h,c=s.MutationObserver||s.WebKitMutationObserver;if(c){var f=0,p=new c(v),w=s.document.createTextNode("");p.observe(w,{characterData:!0}),l=function(){w.data=f=++f%2}}else if(s.setImmediate||s.MessageChannel===void 0)l="document"in s&&"onreadystatechange"in s.document.createElement("script")?function(){var E=s.document.createElement("script");E.onreadystatechange=function(){v(),E.onreadystatechange=null,E.parentNode.removeChild(E),E=null},s.document.documentElement.appendChild(E)}:function(){setTimeout(v,0)};else{var b=new s.MessageChannel;b.port1.onmessage=v,l=function(){b.port2.postMessage(0)}}var m=[];function v(){var E,y;h=!0;for(var S=m.length;S;){for(y=m,m=[],E=-1;++E<S;)y[E]();S=m.length}h=!1}i.exports=function(E){m.push(E)!==1||h||l()}}).call(this,typeof global<"u"?global:typeof self<"u"?self:typeof window<"u"?window:{})},{}],37:[function(r,i,a){"use strict";var s=r("immediate");function l(){}var h={},c=["REJECTED"],f=["FULFILLED"],p=["PENDING"];function w(S){if(typeof S!="function")throw new TypeError("resolver must be a function");this.state=p,this.queue=[],this.outcome=void 0,S!==l&&E(this,S)}function b(S,x,O){this.promise=S,typeof x=="function"&&(this.onFulfilled=x,this.callFulfilled=this.otherCallFulfilled),typeof O=="function"&&(this.onRejected=O,this.callRejected=this.otherCallRejected)}function m(S,x,O){s(function(){var L;try{L=x(O)}catch(N){return h.reject(S,N)}L===S?h.reject(S,new TypeError("Cannot resolve promise with itself")):h.resolve(S,L)})}function v(S){var x=S&&S.then;if(S&&(typeof S=="object"||typeof S=="function")&&typeof x=="function")return function(){x.apply(S,arguments)}}function E(S,x){var O=!1;function L(Z){O||(O=!0,h.reject(S,Z))}function N(Z){O||(O=!0,h.resolve(S,Z))}var Y=y(function(){x(N,L)});Y.status==="error"&&L(Y.value)}function y(S,x){var O={};try{O.value=S(x),O.status="success"}catch(L){O.status="error",O.value=L}return O}(i.exports=w).prototype.finally=function(S){if(typeof S!="function")return this;var x=this.constructor;return this.then(function(O){return x.resolve(S()).then(function(){return O})},function(O){return x.resolve(S()).then(function(){throw O})})},w.prototype.catch=function(S){return this.then(null,S)},w.prototype.then=function(S,x){if(typeof S!="function"&&this.state===f||typeof x!="function"&&this.state===c)return this;var O=new this.constructor(l);return this.state!==p?m(O,this.state===f?S:x,this.outcome):this.queue.push(new b(O,S,x)),O},b.prototype.callFulfilled=function(S){h.resolve(this.promise,S)},b.prototype.otherCallFulfilled=function(S){m(this.promise,this.onFulfilled,S)},b.prototype.callRejected=function(S){h.reject(this.promise,S)},b.prototype.otherCallRejected=function(S){m(this.promise,this.onRejected,S)},h.resolve=function(S,x){var O=y(v,x);if(O.status==="error")return h.reject(S,O.value);var L=O.value;if(L)E(S,L);else{S.state=f,S.outcome=x;for(var N=-1,Y=S.queue.length;++N<Y;)S.queue[N].callFulfilled(x)}return S},h.reject=function(S,x){S.state=c,S.outcome=x;for(var O=-1,L=S.queue.length;++O<L;)S.queue[O].callRejected(x);return S},w.resolve=function(S){return S instanceof this?S:h.resolve(new this(l),S)},w.reject=function(S){var x=new this(l);return h.reject(x,S)},w.all=function(S){var x=this;if(Object.prototype.toString.call(S)!=="[object Array]")return this.reject(new TypeError("must be an array"));var O=S.length,L=!1;if(!O)return this.resolve([]);for(var N=new Array(O),Y=0,Z=-1,ie=new this(l);++Z<O;)W(S[Z],Z);return ie;function W(ge,_e){x.resolve(ge).then(function(P){N[_e]=P,++Y!==O||L||(L=!0,h.resolve(ie,N))},function(P){L||(L=!0,h.reject(ie,P))})}},w.race=function(S){var x=this;if(Object.prototype.toString.call(S)!=="[object Array]")return this.reject(new TypeError("must be an array"));var O=S.length,L=!1;if(!O)return this.resolve([]);for(var N=-1,Y=new this(l);++N<O;)Z=S[N],x.resolve(Z).then(function(ie){L||(L=!0,h.resolve(Y,ie))},function(ie){L||(L=!0,h.reject(Y,ie))});var Z;return Y}},{immediate:36}],38:[function(r,i,a){"use strict";var s={};(0,r("./lib/utils/common").assign)(s,r("./lib/deflate"),r("./lib/inflate"),r("./lib/zlib/constants")),i.exports=s},{"./lib/deflate":39,"./lib/inflate":40,"./lib/utils/common":41,"./lib/zlib/constants":44}],39:[function(r,i,a){"use strict";var s=r("./zlib/deflate"),l=r("./utils/common"),h=r("./utils/strings"),c=r("./zlib/messages"),f=r("./zlib/zstream"),p=Object.prototype.toString,w=0,b=-1,m=0,v=8;function E(S){if(!(this instanceof E))return new E(S);this.options=l.assign({level:b,method:v,chunkSize:16384,windowBits:15,memLevel:8,strategy:m,to:""},S||{});var x=this.options;x.raw&&0<x.windowBits?x.windowBits=-x.windowBits:x.gzip&&0<x.windowBits&&x.windowBits<16&&(x.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new f,this.strm.avail_out=0;var O=s.deflateInit2(this.strm,x.level,x.method,x.windowBits,x.memLevel,x.strategy);if(O!==w)throw new Error(c[O]);if(x.header&&s.deflateSetHeader(this.strm,x.header),x.dictionary){var L;if(L=typeof x.dictionary=="string"?h.string2buf(x.dictionary):p.call(x.dictionary)==="[object ArrayBuffer]"?new Uint8Array(x.dictionary):x.dictionary,(O=s.deflateSetDictionary(this.strm,L))!==w)throw new Error(c[O]);this._dict_set=!0}}function y(S,x){var O=new E(x);if(O.push(S,!0),O.err)throw O.msg||c[O.err];return O.result}E.prototype.push=function(S,x){var O,L,N=this.strm,Y=this.options.chunkSize;if(this.ended)return!1;L=x===~~x?x:x===!0?4:0,typeof S=="string"?N.input=h.string2buf(S):p.call(S)==="[object ArrayBuffer]"?N.input=new Uint8Array(S):N.input=S,N.next_in=0,N.avail_in=N.input.length;do{if(N.avail_out===0&&(N.output=new l.Buf8(Y),N.next_out=0,N.avail_out=Y),(O=s.deflate(N,L))!==1&&O!==w)return this.onEnd(O),!(this.ended=!0);N.avail_out!==0&&(N.avail_in!==0||L!==4&&L!==2)||(this.options.to==="string"?this.onData(h.buf2binstring(l.shrinkBuf(N.output,N.next_out))):this.onData(l.shrinkBuf(N.output,N.next_out)))}while((0<N.avail_in||N.avail_out===0)&&O!==1);return L===4?(O=s.deflateEnd(this.strm),this.onEnd(O),this.ended=!0,O===w):L!==2||(this.onEnd(w),!(N.avail_out=0))},E.prototype.onData=function(S){this.chunks.push(S)},E.prototype.onEnd=function(S){S===w&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=l.flattenChunks(this.chunks)),this.chunks=[],this.err=S,this.msg=this.strm.msg},a.Deflate=E,a.deflate=y,a.deflateRaw=function(S,x){return(x=x||{}).raw=!0,y(S,x)},a.gzip=function(S,x){return(x=x||{}).gzip=!0,y(S,x)}},{"./utils/common":41,"./utils/strings":42,"./zlib/deflate":46,"./zlib/messages":51,"./zlib/zstream":53}],40:[function(r,i,a){"use strict";var s=r("./zlib/inflate"),l=r("./utils/common"),h=r("./utils/strings"),c=r("./zlib/constants"),f=r("./zlib/messages"),p=r("./zlib/zstream"),w=r("./zlib/gzheader"),b=Object.prototype.toString;function m(E){if(!(this instanceof m))return new m(E);this.options=l.assign({chunkSize:16384,windowBits:0,to:""},E||{});var y=this.options;y.raw&&0<=y.windowBits&&y.windowBits<16&&(y.windowBits=-y.windowBits,y.windowBits===0&&(y.windowBits=-15)),!(0<=y.windowBits&&y.windowBits<16)||E&&E.windowBits||(y.windowBits+=32),15<y.windowBits&&y.windowBits<48&&(15&y.windowBits)==0&&(y.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new p,this.strm.avail_out=0;var S=s.inflateInit2(this.strm,y.windowBits);if(S!==c.Z_OK)throw new Error(f[S]);this.header=new w,s.inflateGetHeader(this.strm,this.header)}function v(E,y){var S=new m(y);if(S.push(E,!0),S.err)throw S.msg||f[S.err];return S.result}m.prototype.push=function(E,y){var S,x,O,L,N,Y,Z=this.strm,ie=this.options.chunkSize,W=this.options.dictionary,ge=!1;if(this.ended)return!1;x=y===~~y?y:y===!0?c.Z_FINISH:c.Z_NO_FLUSH,typeof E=="string"?Z.input=h.binstring2buf(E):b.call(E)==="[object ArrayBuffer]"?Z.input=new Uint8Array(E):Z.input=E,Z.next_in=0,Z.avail_in=Z.input.length;do{if(Z.avail_out===0&&(Z.output=new l.Buf8(ie),Z.next_out=0,Z.avail_out=ie),(S=s.inflate(Z,c.Z_NO_FLUSH))===c.Z_NEED_DICT&&W&&(Y=typeof W=="string"?h.string2buf(W):b.call(W)==="[object ArrayBuffer]"?new Uint8Array(W):W,S=s.inflateSetDictionary(this.strm,Y)),S===c.Z_BUF_ERROR&&ge===!0&&(S=c.Z_OK,ge=!1),S!==c.Z_STREAM_END&&S!==c.Z_OK)return this.onEnd(S),!(this.ended=!0);Z.next_out&&(Z.avail_out!==0&&S!==c.Z_STREAM_END&&(Z.avail_in!==0||x!==c.Z_FINISH&&x!==c.Z_SYNC_FLUSH)||(this.options.to==="string"?(O=h.utf8border(Z.output,Z.next_out),L=Z.next_out-O,N=h.buf2string(Z.output,O),Z.next_out=L,Z.avail_out=ie-L,L&&l.arraySet(Z.output,Z.output,O,L,0),this.onData(N)):this.onData(l.shrinkBuf(Z.output,Z.next_out)))),Z.avail_in===0&&Z.avail_out===0&&(ge=!0)}while((0<Z.avail_in||Z.avail_out===0)&&S!==c.Z_STREAM_END);return S===c.Z_STREAM_END&&(x=c.Z_FINISH),x===c.Z_FINISH?(S=s.inflateEnd(this.strm),this.onEnd(S),this.ended=!0,S===c.Z_OK):x!==c.Z_SYNC_FLUSH||(this.onEnd(c.Z_OK),!(Z.avail_out=0))},m.prototype.onData=function(E){this.chunks.push(E)},m.prototype.onEnd=function(E){E===c.Z_OK&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=l.flattenChunks(this.chunks)),this.chunks=[],this.err=E,this.msg=this.strm.msg},a.Inflate=m,a.inflate=v,a.inflateRaw=function(E,y){return(y=y||{}).raw=!0,v(E,y)},a.ungzip=v},{"./utils/common":41,"./utils/strings":42,"./zlib/constants":44,"./zlib/gzheader":47,"./zlib/inflate":49,"./zlib/messages":51,"./zlib/zstream":53}],41:[function(r,i,a){"use strict";var s=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Int32Array<"u";a.assign=function(c){for(var f=Array.prototype.slice.call(arguments,1);f.length;){var p=f.shift();if(p){if(typeof p!="object")throw new TypeError(p+"must be non-object");for(var w in p)p.hasOwnProperty(w)&&(c[w]=p[w])}}return c},a.shrinkBuf=function(c,f){return c.length===f?c:c.subarray?c.subarray(0,f):(c.length=f,c)};var l={arraySet:function(c,f,p,w,b){if(f.subarray&&c.subarray)c.set(f.subarray(p,p+w),b);else for(var m=0;m<w;m++)c[b+m]=f[p+m]},flattenChunks:function(c){var f,p,w,b,m,v;for(f=w=0,p=c.length;f<p;f++)w+=c[f].length;for(v=new Uint8Array(w),f=b=0,p=c.length;f<p;f++)m=c[f],v.set(m,b),b+=m.length;return v}},h={arraySet:function(c,f,p,w,b){for(var m=0;m<w;m++)c[b+m]=f[p+m]},flattenChunks:function(c){return[].concat.apply([],c)}};a.setTyped=function(c){c?(a.Buf8=Uint8Array,a.Buf16=Uint16Array,a.Buf32=Int32Array,a.assign(a,l)):(a.Buf8=Array,a.Buf16=Array,a.Buf32=Array,a.assign(a,h))},a.setTyped(s)},{}],42:[function(r,i,a){"use strict";var s=r("./common"),l=!0,h=!0;try{String.fromCharCode.apply(null,[0])}catch{l=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch{h=!1}for(var c=new s.Buf8(256),f=0;f<256;f++)c[f]=252<=f?6:248<=f?5:240<=f?4:224<=f?3:192<=f?2:1;function p(w,b){if(b<65537&&(w.subarray&&h||!w.subarray&&l))return String.fromCharCode.apply(null,s.shrinkBuf(w,b));for(var m="",v=0;v<b;v++)m+=String.fromCharCode(w[v]);return m}c[254]=c[254]=1,a.string2buf=function(w){var b,m,v,E,y,S=w.length,x=0;for(E=0;E<S;E++)(64512&(m=w.charCodeAt(E)))==55296&&E+1<S&&(64512&(v=w.charCodeAt(E+1)))==56320&&(m=65536+(m-55296<<10)+(v-56320),E++),x+=m<128?1:m<2048?2:m<65536?3:4;for(b=new s.Buf8(x),E=y=0;y<x;E++)(64512&(m=w.charCodeAt(E)))==55296&&E+1<S&&(64512&(v=w.charCodeAt(E+1)))==56320&&(m=65536+(m-55296<<10)+(v-56320),E++),m<128?b[y++]=m:(m<2048?b[y++]=192|m>>>6:(m<65536?b[y++]=224|m>>>12:(b[y++]=240|m>>>18,b[y++]=128|m>>>12&63),b[y++]=128|m>>>6&63),b[y++]=128|63&m);return b},a.buf2binstring=function(w){return p(w,w.length)},a.binstring2buf=function(w){for(var b=new s.Buf8(w.length),m=0,v=b.length;m<v;m++)b[m]=w.charCodeAt(m);return b},a.buf2string=function(w,b){var m,v,E,y,S=b||w.length,x=new Array(2*S);for(m=v=0;m<S;)if((E=w[m++])<128)x[v++]=E;else if(4<(y=c[E]))x[v++]=65533,m+=y-1;else{for(E&=y===2?31:y===3?15:7;1<y&&m<S;)E=E<<6|63&w[m++],y--;1<y?x[v++]=65533:E<65536?x[v++]=E:(E-=65536,x[v++]=55296|E>>10&1023,x[v++]=56320|1023&E)}return p(x,v)},a.utf8border=function(w,b){var m;for((b=b||w.length)>w.length&&(b=w.length),m=b-1;0<=m&&(192&w[m])==128;)m--;return m<0||m===0?b:m+c[w[m]]>b?m:b}},{"./common":41}],43:[function(r,i,a){"use strict";i.exports=function(s,l,h,c){for(var f=65535&s|0,p=s>>>16&65535|0,w=0;h!==0;){for(h-=w=2e3<h?2e3:h;p=p+(f=f+l[c++]|0)|0,--w;);f%=65521,p%=65521}return f|p<<16|0}},{}],44:[function(r,i,a){"use strict";i.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],45:[function(r,i,a){"use strict";var s=(function(){for(var l,h=[],c=0;c<256;c++){l=c;for(var f=0;f<8;f++)l=1&l?3988292384^l>>>1:l>>>1;h[c]=l}return h})();i.exports=function(l,h,c,f){var p=s,w=f+c;l^=-1;for(var b=f;b<w;b++)l=l>>>8^p[255&(l^h[b])];return-1^l}},{}],46:[function(r,i,a){"use strict";var s,l=r("../utils/common"),h=r("./trees"),c=r("./adler32"),f=r("./crc32"),p=r("./messages"),w=0,b=4,m=0,v=-2,E=-1,y=4,S=2,x=8,O=9,L=286,N=30,Y=19,Z=2*L+1,ie=15,W=3,ge=258,_e=ge+W+1,P=42,J=113,A=1,ee=2,Ce=3,de=4;function Oe(_,Q){return _.msg=p[Q],Q}function ae(_){return(_<<1)-(4<_?9:0)}function Ie(_){for(var Q=_.length;0<=--Q;)_[Q]=0}function U(_){var Q=_.state,q=Q.pending;q>_.avail_out&&(q=_.avail_out),q!==0&&(l.arraySet(_.output,Q.pending_buf,Q.pending_out,q,_.next_out),_.next_out+=q,Q.pending_out+=q,_.total_out+=q,_.avail_out-=q,Q.pending-=q,Q.pending===0&&(Q.pending_out=0))}function G(_,Q){h._tr_flush_block(_,0<=_.block_start?_.block_start:-1,_.strstart-_.block_start,Q),_.block_start=_.strstart,U(_.strm)}function Me(_,Q){_.pending_buf[_.pending++]=Q}function me(_,Q){_.pending_buf[_.pending++]=Q>>>8&255,_.pending_buf[_.pending++]=255&Q}function pe(_,Q){var q,T,C=_.max_chain_length,B=_.strstart,se=_.prev_length,le=_.nice_match,F=_.strstart>_.w_size-_e?_.strstart-(_.w_size-_e):0,ue=_.window,ve=_.w_mask,he=_.prev,Ae=_.strstart+ge,tt=ue[B+se-1],Ue=ue[B+se];_.prev_length>=_.good_match&&(C>>=2),le>_.lookahead&&(le=_.lookahead);do if(ue[(q=Q)+se]===Ue&&ue[q+se-1]===tt&&ue[q]===ue[B]&&ue[++q]===ue[B+1]){B+=2,q++;do;while(ue[++B]===ue[++q]&&ue[++B]===ue[++q]&&ue[++B]===ue[++q]&&ue[++B]===ue[++q]&&ue[++B]===ue[++q]&&ue[++B]===ue[++q]&&ue[++B]===ue[++q]&&ue[++B]===ue[++q]&&B<Ae);if(T=ge-(Ae-B),B=Ae-ge,se<T){if(_.match_start=Q,le<=(se=T))break;tt=ue[B+se-1],Ue=ue[B+se]}}while((Q=he[Q&ve])>F&&--C!=0);return se<=_.lookahead?se:_.lookahead}function Ke(_){var Q,q,T,C,B,se,le,F,ue,ve,he=_.w_size;do{if(C=_.window_size-_.lookahead-_.strstart,_.strstart>=he+(he-_e)){for(l.arraySet(_.window,_.window,he,he,0),_.match_start-=he,_.strstart-=he,_.block_start-=he,Q=q=_.hash_size;T=_.head[--Q],_.head[Q]=he<=T?T-he:0,--q;);for(Q=q=he;T=_.prev[--Q],_.prev[Q]=he<=T?T-he:0,--q;);C+=he}if(_.strm.avail_in===0)break;if(se=_.strm,le=_.window,F=_.strstart+_.lookahead,ue=C,ve=void 0,ve=se.avail_in,ue<ve&&(ve=ue),q=ve===0?0:(se.avail_in-=ve,l.arraySet(le,se.input,se.next_in,ve,F),se.state.wrap===1?se.adler=c(se.adler,le,ve,F):se.state.wrap===2&&(se.adler=f(se.adler,le,ve,F)),se.next_in+=ve,se.total_in+=ve,ve),_.lookahead+=q,_.lookahead+_.insert>=W)for(B=_.strstart-_.insert,_.ins_h=_.window[B],_.ins_h=(_.ins_h<<_.hash_shift^_.window[B+1])&_.hash_mask;_.insert&&(_.ins_h=(_.ins_h<<_.hash_shift^_.window[B+W-1])&_.hash_mask,_.prev[B&_.w_mask]=_.head[_.ins_h],_.head[_.ins_h]=B,B++,_.insert--,!(_.lookahead+_.insert<W)););}while(_.lookahead<_e&&_.strm.avail_in!==0)}function mt(_,Q){for(var q,T;;){if(_.lookahead<_e){if(Ke(_),_.lookahead<_e&&Q===w)return A;if(_.lookahead===0)break}if(q=0,_.lookahead>=W&&(_.ins_h=(_.ins_h<<_.hash_shift^_.window[_.strstart+W-1])&_.hash_mask,q=_.prev[_.strstart&_.w_mask]=_.head[_.ins_h],_.head[_.ins_h]=_.strstart),q!==0&&_.strstart-q<=_.w_size-_e&&(_.match_length=pe(_,q)),_.match_length>=W)if(T=h._tr_tally(_,_.strstart-_.match_start,_.match_length-W),_.lookahead-=_.match_length,_.match_length<=_.max_lazy_match&&_.lookahead>=W){for(_.match_length--;_.strstart++,_.ins_h=(_.ins_h<<_.hash_shift^_.window[_.strstart+W-1])&_.hash_mask,q=_.prev[_.strstart&_.w_mask]=_.head[_.ins_h],_.head[_.ins_h]=_.strstart,--_.match_length!=0;);_.strstart++}else _.strstart+=_.match_length,_.match_length=0,_.ins_h=_.window[_.strstart],_.ins_h=(_.ins_h<<_.hash_shift^_.window[_.strstart+1])&_.hash_mask;else T=h._tr_tally(_,0,_.window[_.strstart]),_.lookahead--,_.strstart++;if(T&&(G(_,!1),_.strm.avail_out===0))return A}return _.insert=_.strstart<W-1?_.strstart:W-1,Q===b?(G(_,!0),_.strm.avail_out===0?Ce:de):_.last_lit&&(G(_,!1),_.strm.avail_out===0)?A:ee}function Ve(_,Q){for(var q,T,C;;){if(_.lookahead<_e){if(Ke(_),_.lookahead<_e&&Q===w)return A;if(_.lookahead===0)break}if(q=0,_.lookahead>=W&&(_.ins_h=(_.ins_h<<_.hash_shift^_.window[_.strstart+W-1])&_.hash_mask,q=_.prev[_.strstart&_.w_mask]=_.head[_.ins_h],_.head[_.ins_h]=_.strstart),_.prev_length=_.match_length,_.prev_match=_.match_start,_.match_length=W-1,q!==0&&_.prev_length<_.max_lazy_match&&_.strstart-q<=_.w_size-_e&&(_.match_length=pe(_,q),_.match_length<=5&&(_.strategy===1||_.match_length===W&&4096<_.strstart-_.match_start)&&(_.match_length=W-1)),_.prev_length>=W&&_.match_length<=_.prev_length){for(C=_.strstart+_.lookahead-W,T=h._tr_tally(_,_.strstart-1-_.prev_match,_.prev_length-W),_.lookahead-=_.prev_length-1,_.prev_length-=2;++_.strstart<=C&&(_.ins_h=(_.ins_h<<_.hash_shift^_.window[_.strstart+W-1])&_.hash_mask,q=_.prev[_.strstart&_.w_mask]=_.head[_.ins_h],_.head[_.ins_h]=_.strstart),--_.prev_length!=0;);if(_.match_available=0,_.match_length=W-1,_.strstart++,T&&(G(_,!1),_.strm.avail_out===0))return A}else if(_.match_available){if((T=h._tr_tally(_,0,_.window[_.strstart-1]))&&G(_,!1),_.strstart++,_.lookahead--,_.strm.avail_out===0)return A}else _.match_available=1,_.strstart++,_.lookahead--}return _.match_available&&(T=h._tr_tally(_,0,_.window[_.strstart-1]),_.match_available=0),_.insert=_.strstart<W-1?_.strstart:W-1,Q===b?(G(_,!0),_.strm.avail_out===0?Ce:de):_.last_lit&&(G(_,!1),_.strm.avail_out===0)?A:ee}function We(_,Q,q,T,C){this.good_length=_,this.max_lazy=Q,this.nice_length=q,this.max_chain=T,this.func=C}function ft(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=x,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new l.Buf16(2*Z),this.dyn_dtree=new l.Buf16(2*(2*N+1)),this.bl_tree=new l.Buf16(2*(2*Y+1)),Ie(this.dyn_ltree),Ie(this.dyn_dtree),Ie(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new l.Buf16(ie+1),this.heap=new l.Buf16(2*L+1),Ie(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new l.Buf16(2*L+1),Ie(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function vt(_){var Q;return _&&_.state?(_.total_in=_.total_out=0,_.data_type=S,(Q=_.state).pending=0,Q.pending_out=0,Q.wrap<0&&(Q.wrap=-Q.wrap),Q.status=Q.wrap?P:J,_.adler=Q.wrap===2?0:1,Q.last_flush=w,h._tr_init(Q),m):Oe(_,v)}function Kt(_){var Q=vt(_);return Q===m&&(function(q){q.window_size=2*q.w_size,Ie(q.head),q.max_lazy_match=s[q.level].max_lazy,q.good_match=s[q.level].good_length,q.nice_match=s[q.level].nice_length,q.max_chain_length=s[q.level].max_chain,q.strstart=0,q.block_start=0,q.lookahead=0,q.insert=0,q.match_length=q.prev_length=W-1,q.match_available=0,q.ins_h=0})(_.state),Q}function Wt(_,Q,q,T,C,B){if(!_)return v;var se=1;if(Q===E&&(Q=6),T<0?(se=0,T=-T):15<T&&(se=2,T-=16),C<1||O<C||q!==x||T<8||15<T||Q<0||9<Q||B<0||y<B)return Oe(_,v);T===8&&(T=9);var le=new ft;return(_.state=le).strm=_,le.wrap=se,le.gzhead=null,le.w_bits=T,le.w_size=1<<le.w_bits,le.w_mask=le.w_size-1,le.hash_bits=C+7,le.hash_size=1<<le.hash_bits,le.hash_mask=le.hash_size-1,le.hash_shift=~~((le.hash_bits+W-1)/W),le.window=new l.Buf8(2*le.w_size),le.head=new l.Buf16(le.hash_size),le.prev=new l.Buf16(le.w_size),le.lit_bufsize=1<<C+6,le.pending_buf_size=4*le.lit_bufsize,le.pending_buf=new l.Buf8(le.pending_buf_size),le.d_buf=1*le.lit_bufsize,le.l_buf=3*le.lit_bufsize,le.level=Q,le.strategy=B,le.method=q,Kt(_)}s=[new We(0,0,0,0,function(_,Q){var q=65535;for(q>_.pending_buf_size-5&&(q=_.pending_buf_size-5);;){if(_.lookahead<=1){if(Ke(_),_.lookahead===0&&Q===w)return A;if(_.lookahead===0)break}_.strstart+=_.lookahead,_.lookahead=0;var T=_.block_start+q;if((_.strstart===0||_.strstart>=T)&&(_.lookahead=_.strstart-T,_.strstart=T,G(_,!1),_.strm.avail_out===0)||_.strstart-_.block_start>=_.w_size-_e&&(G(_,!1),_.strm.avail_out===0))return A}return _.insert=0,Q===b?(G(_,!0),_.strm.avail_out===0?Ce:de):(_.strstart>_.block_start&&(G(_,!1),_.strm.avail_out),A)}),new We(4,4,8,4,mt),new We(4,5,16,8,mt),new We(4,6,32,32,mt),new We(4,4,16,16,Ve),new We(8,16,32,32,Ve),new We(8,16,128,128,Ve),new We(8,32,128,256,Ve),new We(32,128,258,1024,Ve),new We(32,258,258,4096,Ve)],a.deflateInit=function(_,Q){return Wt(_,Q,x,15,8,0)},a.deflateInit2=Wt,a.deflateReset=Kt,a.deflateResetKeep=vt,a.deflateSetHeader=function(_,Q){return _&&_.state?_.state.wrap!==2?v:(_.state.gzhead=Q,m):v},a.deflate=function(_,Q){var q,T,C,B;if(!_||!_.state||5<Q||Q<0)return _?Oe(_,v):v;if(T=_.state,!_.output||!_.input&&_.avail_in!==0||T.status===666&&Q!==b)return Oe(_,_.avail_out===0?-5:v);if(T.strm=_,q=T.last_flush,T.last_flush=Q,T.status===P)if(T.wrap===2)_.adler=0,Me(T,31),Me(T,139),Me(T,8),T.gzhead?(Me(T,(T.gzhead.text?1:0)+(T.gzhead.hcrc?2:0)+(T.gzhead.extra?4:0)+(T.gzhead.name?8:0)+(T.gzhead.comment?16:0)),Me(T,255&T.gzhead.time),Me(T,T.gzhead.time>>8&255),Me(T,T.gzhead.time>>16&255),Me(T,T.gzhead.time>>24&255),Me(T,T.level===9?2:2<=T.strategy||T.level<2?4:0),Me(T,255&T.gzhead.os),T.gzhead.extra&&T.gzhead.extra.length&&(Me(T,255&T.gzhead.extra.length),Me(T,T.gzhead.extra.length>>8&255)),T.gzhead.hcrc&&(_.adler=f(_.adler,T.pending_buf,T.pending,0)),T.gzindex=0,T.status=69):(Me(T,0),Me(T,0),Me(T,0),Me(T,0),Me(T,0),Me(T,T.level===9?2:2<=T.strategy||T.level<2?4:0),Me(T,3),T.status=J);else{var se=x+(T.w_bits-8<<4)<<8;se|=(2<=T.strategy||T.level<2?0:T.level<6?1:T.level===6?2:3)<<6,T.strstart!==0&&(se|=32),se+=31-se%31,T.status=J,me(T,se),T.strstart!==0&&(me(T,_.adler>>>16),me(T,65535&_.adler)),_.adler=1}if(T.status===69)if(T.gzhead.extra){for(C=T.pending;T.gzindex<(65535&T.gzhead.extra.length)&&(T.pending!==T.pending_buf_size||(T.gzhead.hcrc&&T.pending>C&&(_.adler=f(_.adler,T.pending_buf,T.pending-C,C)),U(_),C=T.pending,T.pending!==T.pending_buf_size));)Me(T,255&T.gzhead.extra[T.gzindex]),T.gzindex++;T.gzhead.hcrc&&T.pending>C&&(_.adler=f(_.adler,T.pending_buf,T.pending-C,C)),T.gzindex===T.gzhead.extra.length&&(T.gzindex=0,T.status=73)}else T.status=73;if(T.status===73)if(T.gzhead.name){C=T.pending;do{if(T.pending===T.pending_buf_size&&(T.gzhead.hcrc&&T.pending>C&&(_.adler=f(_.adler,T.pending_buf,T.pending-C,C)),U(_),C=T.pending,T.pending===T.pending_buf_size)){B=1;break}B=T.gzindex<T.gzhead.name.length?255&T.gzhead.name.charCodeAt(T.gzindex++):0,Me(T,B)}while(B!==0);T.gzhead.hcrc&&T.pending>C&&(_.adler=f(_.adler,T.pending_buf,T.pending-C,C)),B===0&&(T.gzindex=0,T.status=91)}else T.status=91;if(T.status===91)if(T.gzhead.comment){C=T.pending;do{if(T.pending===T.pending_buf_size&&(T.gzhead.hcrc&&T.pending>C&&(_.adler=f(_.adler,T.pending_buf,T.pending-C,C)),U(_),C=T.pending,T.pending===T.pending_buf_size)){B=1;break}B=T.gzindex<T.gzhead.comment.length?255&T.gzhead.comment.charCodeAt(T.gzindex++):0,Me(T,B)}while(B!==0);T.gzhead.hcrc&&T.pending>C&&(_.adler=f(_.adler,T.pending_buf,T.pending-C,C)),B===0&&(T.status=103)}else T.status=103;if(T.status===103&&(T.gzhead.hcrc?(T.pending+2>T.pending_buf_size&&U(_),T.pending+2<=T.pending_buf_size&&(Me(T,255&_.adler),Me(T,_.adler>>8&255),_.adler=0,T.status=J)):T.status=J),T.pending!==0){if(U(_),_.avail_out===0)return T.last_flush=-1,m}else if(_.avail_in===0&&ae(Q)<=ae(q)&&Q!==b)return Oe(_,-5);if(T.status===666&&_.avail_in!==0)return Oe(_,-5);if(_.avail_in!==0||T.lookahead!==0||Q!==w&&T.status!==666){var le=T.strategy===2?(function(F,ue){for(var ve;;){if(F.lookahead===0&&(Ke(F),F.lookahead===0)){if(ue===w)return A;break}if(F.match_length=0,ve=h._tr_tally(F,0,F.window[F.strstart]),F.lookahead--,F.strstart++,ve&&(G(F,!1),F.strm.avail_out===0))return A}return F.insert=0,ue===b?(G(F,!0),F.strm.avail_out===0?Ce:de):F.last_lit&&(G(F,!1),F.strm.avail_out===0)?A:ee})(T,Q):T.strategy===3?(function(F,ue){for(var ve,he,Ae,tt,Ue=F.window;;){if(F.lookahead<=ge){if(Ke(F),F.lookahead<=ge&&ue===w)return A;if(F.lookahead===0)break}if(F.match_length=0,F.lookahead>=W&&0<F.strstart&&(he=Ue[Ae=F.strstart-1])===Ue[++Ae]&&he===Ue[++Ae]&&he===Ue[++Ae]){tt=F.strstart+ge;do;while(he===Ue[++Ae]&&he===Ue[++Ae]&&he===Ue[++Ae]&&he===Ue[++Ae]&&he===Ue[++Ae]&&he===Ue[++Ae]&&he===Ue[++Ae]&&he===Ue[++Ae]&&Ae<tt);F.match_length=ge-(tt-Ae),F.match_length>F.lookahead&&(F.match_length=F.lookahead)}if(F.match_length>=W?(ve=h._tr_tally(F,1,F.match_length-W),F.lookahead-=F.match_length,F.strstart+=F.match_length,F.match_length=0):(ve=h._tr_tally(F,0,F.window[F.strstart]),F.lookahead--,F.strstart++),ve&&(G(F,!1),F.strm.avail_out===0))return A}return F.insert=0,ue===b?(G(F,!0),F.strm.avail_out===0?Ce:de):F.last_lit&&(G(F,!1),F.strm.avail_out===0)?A:ee})(T,Q):s[T.level].func(T,Q);if(le!==Ce&&le!==de||(T.status=666),le===A||le===Ce)return _.avail_out===0&&(T.last_flush=-1),m;if(le===ee&&(Q===1?h._tr_align(T):Q!==5&&(h._tr_stored_block(T,0,0,!1),Q===3&&(Ie(T.head),T.lookahead===0&&(T.strstart=0,T.block_start=0,T.insert=0))),U(_),_.avail_out===0))return T.last_flush=-1,m}return Q!==b?m:T.wrap<=0?1:(T.wrap===2?(Me(T,255&_.adler),Me(T,_.adler>>8&255),Me(T,_.adler>>16&255),Me(T,_.adler>>24&255),Me(T,255&_.total_in),Me(T,_.total_in>>8&255),Me(T,_.total_in>>16&255),Me(T,_.total_in>>24&255)):(me(T,_.adler>>>16),me(T,65535&_.adler)),U(_),0<T.wrap&&(T.wrap=-T.wrap),T.pending!==0?m:1)},a.deflateEnd=function(_){var Q;return _&&_.state?(Q=_.state.status)!==P&&Q!==69&&Q!==73&&Q!==91&&Q!==103&&Q!==J&&Q!==666?Oe(_,v):(_.state=null,Q===J?Oe(_,-3):m):v},a.deflateSetDictionary=function(_,Q){var q,T,C,B,se,le,F,ue,ve=Q.length;if(!_||!_.state||(B=(q=_.state).wrap)===2||B===1&&q.status!==P||q.lookahead)return v;for(B===1&&(_.adler=c(_.adler,Q,ve,0)),q.wrap=0,ve>=q.w_size&&(B===0&&(Ie(q.head),q.strstart=0,q.block_start=0,q.insert=0),ue=new l.Buf8(q.w_size),l.arraySet(ue,Q,ve-q.w_size,q.w_size,0),Q=ue,ve=q.w_size),se=_.avail_in,le=_.next_in,F=_.input,_.avail_in=ve,_.next_in=0,_.input=Q,Ke(q);q.lookahead>=W;){for(T=q.strstart,C=q.lookahead-(W-1);q.ins_h=(q.ins_h<<q.hash_shift^q.window[T+W-1])&q.hash_mask,q.prev[T&q.w_mask]=q.head[q.ins_h],q.head[q.ins_h]=T,T++,--C;);q.strstart=T,q.lookahead=W-1,Ke(q)}return q.strstart+=q.lookahead,q.block_start=q.strstart,q.insert=q.lookahead,q.lookahead=0,q.match_length=q.prev_length=W-1,q.match_available=0,_.next_in=le,_.input=F,_.avail_in=se,q.wrap=B,m},a.deflateInfo="pako deflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./messages":51,"./trees":52}],47:[function(r,i,a){"use strict";i.exports=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}},{}],48:[function(r,i,a){"use strict";i.exports=function(s,l){var h=s.state,c=s.next_in,f,p,w,b,m,v,E,y,S,x,O,L,N,Y,Z,ie,W,ge,_e,P,J,A=s.input,ee;f=c+(s.avail_in-5),p=s.next_out,ee=s.output,w=p-(l-s.avail_out),b=p+(s.avail_out-257),m=h.dmax,v=h.wsize,E=h.whave,y=h.wnext,S=h.window,x=h.hold,O=h.bits,L=h.lencode,N=h.distcode,Y=(1<<h.lenbits)-1,Z=(1<<h.distbits)-1;e:do{O<15&&(x+=A[c++]<<O,O+=8,x+=A[c++]<<O,O+=8),ie=L[x&Y];t:for(;;){if(x>>>=W=ie>>>24,O-=W,(W=ie>>>16&255)===0)ee[p++]=65535&ie;else{if(!(16&W)){if((64&W)==0){ie=L[(65535&ie)+(x&(1<<W)-1)];continue t}if(32&W){h.mode=12;break e}s.msg="invalid literal/length code",h.mode=30;break e}ge=65535&ie,(W&=15)&&(O<W&&(x+=A[c++]<<O,O+=8),ge+=x&(1<<W)-1,x>>>=W,O-=W),O<15&&(x+=A[c++]<<O,O+=8,x+=A[c++]<<O,O+=8),ie=N[x&Z];r:for(;;){if(x>>>=W=ie>>>24,O-=W,!(16&(W=ie>>>16&255))){if((64&W)==0){ie=N[(65535&ie)+(x&(1<<W)-1)];continue r}s.msg="invalid distance code",h.mode=30;break e}if(_e=65535&ie,O<(W&=15)&&(x+=A[c++]<<O,(O+=8)<W&&(x+=A[c++]<<O,O+=8)),m<(_e+=x&(1<<W)-1)){s.msg="invalid distance too far back",h.mode=30;break e}if(x>>>=W,O-=W,(W=p-w)<_e){if(E<(W=_e-W)&&h.sane){s.msg="invalid distance too far back",h.mode=30;break e}if(J=S,(P=0)===y){if(P+=v-W,W<ge){for(ge-=W;ee[p++]=S[P++],--W;);P=p-_e,J=ee}}else if(y<W){if(P+=v+y-W,(W-=y)<ge){for(ge-=W;ee[p++]=S[P++],--W;);if(P=0,y<ge){for(ge-=W=y;ee[p++]=S[P++],--W;);P=p-_e,J=ee}}}else if(P+=y-W,W<ge){for(ge-=W;ee[p++]=S[P++],--W;);P=p-_e,J=ee}for(;2<ge;)ee[p++]=J[P++],ee[p++]=J[P++],ee[p++]=J[P++],ge-=3;ge&&(ee[p++]=J[P++],1<ge&&(ee[p++]=J[P++]))}else{for(P=p-_e;ee[p++]=ee[P++],ee[p++]=ee[P++],ee[p++]=ee[P++],2<(ge-=3););ge&&(ee[p++]=ee[P++],1<ge&&(ee[p++]=ee[P++]))}break}}break}}while(c<f&&p<b);c-=ge=O>>3,x&=(1<<(O-=ge<<3))-1,s.next_in=c,s.next_out=p,s.avail_in=c<f?f-c+5:5-(c-f),s.avail_out=p<b?b-p+257:257-(p-b),h.hold=x,h.bits=O}},{}],49:[function(r,i,a){"use strict";var s=r("../utils/common"),l=r("./adler32"),h=r("./crc32"),c=r("./inffast"),f=r("./inftrees"),p=1,w=2,b=0,m=-2,v=1,E=852,y=592;function S(P){return(P>>>24&255)+(P>>>8&65280)+((65280&P)<<8)+((255&P)<<24)}function x(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new s.Buf16(320),this.work=new s.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function O(P){var J;return P&&P.state?(J=P.state,P.total_in=P.total_out=J.total=0,P.msg="",J.wrap&&(P.adler=1&J.wrap),J.mode=v,J.last=0,J.havedict=0,J.dmax=32768,J.head=null,J.hold=0,J.bits=0,J.lencode=J.lendyn=new s.Buf32(E),J.distcode=J.distdyn=new s.Buf32(y),J.sane=1,J.back=-1,b):m}function L(P){var J;return P&&P.state?((J=P.state).wsize=0,J.whave=0,J.wnext=0,O(P)):m}function N(P,J){var A,ee;return P&&P.state?(ee=P.state,J<0?(A=0,J=-J):(A=1+(J>>4),J<48&&(J&=15)),J&&(J<8||15<J)?m:(ee.window!==null&&ee.wbits!==J&&(ee.window=null),ee.wrap=A,ee.wbits=J,L(P))):m}function Y(P,J){var A,ee;return P?(ee=new x,(P.state=ee).window=null,(A=N(P,J))!==b&&(P.state=null),A):m}var Z,ie,W=!0;function ge(P){if(W){var J;for(Z=new s.Buf32(512),ie=new s.Buf32(32),J=0;J<144;)P.lens[J++]=8;for(;J<256;)P.lens[J++]=9;for(;J<280;)P.lens[J++]=7;for(;J<288;)P.lens[J++]=8;for(f(p,P.lens,0,288,Z,0,P.work,{bits:9}),J=0;J<32;)P.lens[J++]=5;f(w,P.lens,0,32,ie,0,P.work,{bits:5}),W=!1}P.lencode=Z,P.lenbits=9,P.distcode=ie,P.distbits=5}function _e(P,J,A,ee){var Ce,de=P.state;return de.window===null&&(de.wsize=1<<de.wbits,de.wnext=0,de.whave=0,de.window=new s.Buf8(de.wsize)),ee>=de.wsize?(s.arraySet(de.window,J,A-de.wsize,de.wsize,0),de.wnext=0,de.whave=de.wsize):(ee<(Ce=de.wsize-de.wnext)&&(Ce=ee),s.arraySet(de.window,J,A-ee,Ce,de.wnext),(ee-=Ce)?(s.arraySet(de.window,J,A-ee,ee,0),de.wnext=ee,de.whave=de.wsize):(de.wnext+=Ce,de.wnext===de.wsize&&(de.wnext=0),de.whave<de.wsize&&(de.whave+=Ce))),0}a.inflateReset=L,a.inflateReset2=N,a.inflateResetKeep=O,a.inflateInit=function(P){return Y(P,15)},a.inflateInit2=Y,a.inflate=function(P,J){var A,ee,Ce,de,Oe,ae,Ie,U,G,Me,me,pe,Ke,mt,Ve,We,ft,vt,Kt,Wt,_,Q,q,T,C=0,B=new s.Buf8(4),se=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!P||!P.state||!P.output||!P.input&&P.avail_in!==0)return m;(A=P.state).mode===12&&(A.mode=13),Oe=P.next_out,Ce=P.output,Ie=P.avail_out,de=P.next_in,ee=P.input,ae=P.avail_in,U=A.hold,G=A.bits,Me=ae,me=Ie,Q=b;e:for(;;)switch(A.mode){case v:if(A.wrap===0){A.mode=13;break}for(;G<16;){if(ae===0)break e;ae--,U+=ee[de++]<<G,G+=8}if(2&A.wrap&&U===35615){B[A.check=0]=255&U,B[1]=U>>>8&255,A.check=h(A.check,B,2,0),G=U=0,A.mode=2;break}if(A.flags=0,A.head&&(A.head.done=!1),!(1&A.wrap)||(((255&U)<<8)+(U>>8))%31){P.msg="incorrect header check",A.mode=30;break}if((15&U)!=8){P.msg="unknown compression method",A.mode=30;break}if(G-=4,_=8+(15&(U>>>=4)),A.wbits===0)A.wbits=_;else if(_>A.wbits){P.msg="invalid window size",A.mode=30;break}A.dmax=1<<_,P.adler=A.check=1,A.mode=512&U?10:12,G=U=0;break;case 2:for(;G<16;){if(ae===0)break e;ae--,U+=ee[de++]<<G,G+=8}if(A.flags=U,(255&A.flags)!=8){P.msg="unknown compression method",A.mode=30;break}if(57344&A.flags){P.msg="unknown header flags set",A.mode=30;break}A.head&&(A.head.text=U>>8&1),512&A.flags&&(B[0]=255&U,B[1]=U>>>8&255,A.check=h(A.check,B,2,0)),G=U=0,A.mode=3;case 3:for(;G<32;){if(ae===0)break e;ae--,U+=ee[de++]<<G,G+=8}A.head&&(A.head.time=U),512&A.flags&&(B[0]=255&U,B[1]=U>>>8&255,B[2]=U>>>16&255,B[3]=U>>>24&255,A.check=h(A.check,B,4,0)),G=U=0,A.mode=4;case 4:for(;G<16;){if(ae===0)break e;ae--,U+=ee[de++]<<G,G+=8}A.head&&(A.head.xflags=255&U,A.head.os=U>>8),512&A.flags&&(B[0]=255&U,B[1]=U>>>8&255,A.check=h(A.check,B,2,0)),G=U=0,A.mode=5;case 5:if(1024&A.flags){for(;G<16;){if(ae===0)break e;ae--,U+=ee[de++]<<G,G+=8}A.length=U,A.head&&(A.head.extra_len=U),512&A.flags&&(B[0]=255&U,B[1]=U>>>8&255,A.check=h(A.check,B,2,0)),G=U=0}else A.head&&(A.head.extra=null);A.mode=6;case 6:if(1024&A.flags&&(ae<(pe=A.length)&&(pe=ae),pe&&(A.head&&(_=A.head.extra_len-A.length,A.head.extra||(A.head.extra=new Array(A.head.extra_len)),s.arraySet(A.head.extra,ee,de,pe,_)),512&A.flags&&(A.check=h(A.check,ee,pe,de)),ae-=pe,de+=pe,A.length-=pe),A.length))break e;A.length=0,A.mode=7;case 7:if(2048&A.flags){if(ae===0)break e;for(pe=0;_=ee[de+pe++],A.head&&_&&A.length<65536&&(A.head.name+=String.fromCharCode(_)),_&&pe<ae;);if(512&A.flags&&(A.check=h(A.check,ee,pe,de)),ae-=pe,de+=pe,_)break e}else A.head&&(A.head.name=null);A.length=0,A.mode=8;case 8:if(4096&A.flags){if(ae===0)break e;for(pe=0;_=ee[de+pe++],A.head&&_&&A.length<65536&&(A.head.comment+=String.fromCharCode(_)),_&&pe<ae;);if(512&A.flags&&(A.check=h(A.check,ee,pe,de)),ae-=pe,de+=pe,_)break e}else A.head&&(A.head.comment=null);A.mode=9;case 9:if(512&A.flags){for(;G<16;){if(ae===0)break e;ae--,U+=ee[de++]<<G,G+=8}if(U!==(65535&A.check)){P.msg="header crc mismatch",A.mode=30;break}G=U=0}A.head&&(A.head.hcrc=A.flags>>9&1,A.head.done=!0),P.adler=A.check=0,A.mode=12;break;case 10:for(;G<32;){if(ae===0)break e;ae--,U+=ee[de++]<<G,G+=8}P.adler=A.check=S(U),G=U=0,A.mode=11;case 11:if(A.havedict===0)return P.next_out=Oe,P.avail_out=Ie,P.next_in=de,P.avail_in=ae,A.hold=U,A.bits=G,2;P.adler=A.check=1,A.mode=12;case 12:if(J===5||J===6)break e;case 13:if(A.last){U>>>=7&G,G-=7&G,A.mode=27;break}for(;G<3;){if(ae===0)break e;ae--,U+=ee[de++]<<G,G+=8}switch(A.last=1&U,G-=1,3&(U>>>=1)){case 0:A.mode=14;break;case 1:if(ge(A),A.mode=20,J!==6)break;U>>>=2,G-=2;break e;case 2:A.mode=17;break;case 3:P.msg="invalid block type",A.mode=30}U>>>=2,G-=2;break;case 14:for(U>>>=7&G,G-=7&G;G<32;){if(ae===0)break e;ae--,U+=ee[de++]<<G,G+=8}if((65535&U)!=(U>>>16^65535)){P.msg="invalid stored block lengths",A.mode=30;break}if(A.length=65535&U,G=U=0,A.mode=15,J===6)break e;case 15:A.mode=16;case 16:if(pe=A.length){if(ae<pe&&(pe=ae),Ie<pe&&(pe=Ie),pe===0)break e;s.arraySet(Ce,ee,de,pe,Oe),ae-=pe,de+=pe,Ie-=pe,Oe+=pe,A.length-=pe;break}A.mode=12;break;case 17:for(;G<14;){if(ae===0)break e;ae--,U+=ee[de++]<<G,G+=8}if(A.nlen=257+(31&U),U>>>=5,G-=5,A.ndist=1+(31&U),U>>>=5,G-=5,A.ncode=4+(15&U),U>>>=4,G-=4,286<A.nlen||30<A.ndist){P.msg="too many length or distance symbols",A.mode=30;break}A.have=0,A.mode=18;case 18:for(;A.have<A.ncode;){for(;G<3;){if(ae===0)break e;ae--,U+=ee[de++]<<G,G+=8}A.lens[se[A.have++]]=7&U,U>>>=3,G-=3}for(;A.have<19;)A.lens[se[A.have++]]=0;if(A.lencode=A.lendyn,A.lenbits=7,q={bits:A.lenbits},Q=f(0,A.lens,0,19,A.lencode,0,A.work,q),A.lenbits=q.bits,Q){P.msg="invalid code lengths set",A.mode=30;break}A.have=0,A.mode=19;case 19:for(;A.have<A.nlen+A.ndist;){for(;We=(C=A.lencode[U&(1<<A.lenbits)-1])>>>16&255,ft=65535&C,!((Ve=C>>>24)<=G);){if(ae===0)break e;ae--,U+=ee[de++]<<G,G+=8}if(ft<16)U>>>=Ve,G-=Ve,A.lens[A.have++]=ft;else{if(ft===16){for(T=Ve+2;G<T;){if(ae===0)break e;ae--,U+=ee[de++]<<G,G+=8}if(U>>>=Ve,G-=Ve,A.have===0){P.msg="invalid bit length repeat",A.mode=30;break}_=A.lens[A.have-1],pe=3+(3&U),U>>>=2,G-=2}else if(ft===17){for(T=Ve+3;G<T;){if(ae===0)break e;ae--,U+=ee[de++]<<G,G+=8}G-=Ve,_=0,pe=3+(7&(U>>>=Ve)),U>>>=3,G-=3}else{for(T=Ve+7;G<T;){if(ae===0)break e;ae--,U+=ee[de++]<<G,G+=8}G-=Ve,_=0,pe=11+(127&(U>>>=Ve)),U>>>=7,G-=7}if(A.have+pe>A.nlen+A.ndist){P.msg="invalid bit length repeat",A.mode=30;break}for(;pe--;)A.lens[A.have++]=_}}if(A.mode===30)break;if(A.lens[256]===0){P.msg="invalid code -- missing end-of-block",A.mode=30;break}if(A.lenbits=9,q={bits:A.lenbits},Q=f(p,A.lens,0,A.nlen,A.lencode,0,A.work,q),A.lenbits=q.bits,Q){P.msg="invalid literal/lengths set",A.mode=30;break}if(A.distbits=6,A.distcode=A.distdyn,q={bits:A.distbits},Q=f(w,A.lens,A.nlen,A.ndist,A.distcode,0,A.work,q),A.distbits=q.bits,Q){P.msg="invalid distances set",A.mode=30;break}if(A.mode=20,J===6)break e;case 20:A.mode=21;case 21:if(6<=ae&&258<=Ie){P.next_out=Oe,P.avail_out=Ie,P.next_in=de,P.avail_in=ae,A.hold=U,A.bits=G,c(P,me),Oe=P.next_out,Ce=P.output,Ie=P.avail_out,de=P.next_in,ee=P.input,ae=P.avail_in,U=A.hold,G=A.bits,A.mode===12&&(A.back=-1);break}for(A.back=0;We=(C=A.lencode[U&(1<<A.lenbits)-1])>>>16&255,ft=65535&C,!((Ve=C>>>24)<=G);){if(ae===0)break e;ae--,U+=ee[de++]<<G,G+=8}if(We&&(240&We)==0){for(vt=Ve,Kt=We,Wt=ft;We=(C=A.lencode[Wt+((U&(1<<vt+Kt)-1)>>vt)])>>>16&255,ft=65535&C,!(vt+(Ve=C>>>24)<=G);){if(ae===0)break e;ae--,U+=ee[de++]<<G,G+=8}U>>>=vt,G-=vt,A.back+=vt}if(U>>>=Ve,G-=Ve,A.back+=Ve,A.length=ft,We===0){A.mode=26;break}if(32&We){A.back=-1,A.mode=12;break}if(64&We){P.msg="invalid literal/length code",A.mode=30;break}A.extra=15&We,A.mode=22;case 22:if(A.extra){for(T=A.extra;G<T;){if(ae===0)break e;ae--,U+=ee[de++]<<G,G+=8}A.length+=U&(1<<A.extra)-1,U>>>=A.extra,G-=A.extra,A.back+=A.extra}A.was=A.length,A.mode=23;case 23:for(;We=(C=A.distcode[U&(1<<A.distbits)-1])>>>16&255,ft=65535&C,!((Ve=C>>>24)<=G);){if(ae===0)break e;ae--,U+=ee[de++]<<G,G+=8}if((240&We)==0){for(vt=Ve,Kt=We,Wt=ft;We=(C=A.distcode[Wt+((U&(1<<vt+Kt)-1)>>vt)])>>>16&255,ft=65535&C,!(vt+(Ve=C>>>24)<=G);){if(ae===0)break e;ae--,U+=ee[de++]<<G,G+=8}U>>>=vt,G-=vt,A.back+=vt}if(U>>>=Ve,G-=Ve,A.back+=Ve,64&We){P.msg="invalid distance code",A.mode=30;break}A.offset=ft,A.extra=15&We,A.mode=24;case 24:if(A.extra){for(T=A.extra;G<T;){if(ae===0)break e;ae--,U+=ee[de++]<<G,G+=8}A.offset+=U&(1<<A.extra)-1,U>>>=A.extra,G-=A.extra,A.back+=A.extra}if(A.offset>A.dmax){P.msg="invalid distance too far back",A.mode=30;break}A.mode=25;case 25:if(Ie===0)break e;if(pe=me-Ie,A.offset>pe){if((pe=A.offset-pe)>A.whave&&A.sane){P.msg="invalid distance too far back",A.mode=30;break}Ke=pe>A.wnext?(pe-=A.wnext,A.wsize-pe):A.wnext-pe,pe>A.length&&(pe=A.length),mt=A.window}else mt=Ce,Ke=Oe-A.offset,pe=A.length;for(Ie<pe&&(pe=Ie),Ie-=pe,A.length-=pe;Ce[Oe++]=mt[Ke++],--pe;);A.length===0&&(A.mode=21);break;case 26:if(Ie===0)break e;Ce[Oe++]=A.length,Ie--,A.mode=21;break;case 27:if(A.wrap){for(;G<32;){if(ae===0)break e;ae--,U|=ee[de++]<<G,G+=8}if(me-=Ie,P.total_out+=me,A.total+=me,me&&(P.adler=A.check=A.flags?h(A.check,Ce,me,Oe-me):l(A.check,Ce,me,Oe-me)),me=Ie,(A.flags?U:S(U))!==A.check){P.msg="incorrect data check",A.mode=30;break}G=U=0}A.mode=28;case 28:if(A.wrap&&A.flags){for(;G<32;){if(ae===0)break e;ae--,U+=ee[de++]<<G,G+=8}if(U!==(4294967295&A.total)){P.msg="incorrect length check",A.mode=30;break}G=U=0}A.mode=29;case 29:Q=1;break e;case 30:Q=-3;break e;case 31:return-4;default:return m}return P.next_out=Oe,P.avail_out=Ie,P.next_in=de,P.avail_in=ae,A.hold=U,A.bits=G,(A.wsize||me!==P.avail_out&&A.mode<30&&(A.mode<27||J!==4))&&_e(P,P.output,P.next_out,me-P.avail_out)?(A.mode=31,-4):(Me-=P.avail_in,me-=P.avail_out,P.total_in+=Me,P.total_out+=me,A.total+=me,A.wrap&&me&&(P.adler=A.check=A.flags?h(A.check,Ce,me,P.next_out-me):l(A.check,Ce,me,P.next_out-me)),P.data_type=A.bits+(A.last?64:0)+(A.mode===12?128:0)+(A.mode===20||A.mode===15?256:0),(Me==0&&me===0||J===4)&&Q===b&&(Q=-5),Q)},a.inflateEnd=function(P){if(!P||!P.state)return m;var J=P.state;return J.window&&(J.window=null),P.state=null,b},a.inflateGetHeader=function(P,J){var A;return P&&P.state?(2&(A=P.state).wrap)==0?m:((A.head=J).done=!1,b):m},a.inflateSetDictionary=function(P,J){var A,ee=J.length;return P&&P.state?(A=P.state).wrap!==0&&A.mode!==11?m:A.mode===11&&l(1,J,ee,0)!==A.check?-3:_e(P,J,ee,ee)?(A.mode=31,-4):(A.havedict=1,b):m},a.inflateInfo="pako inflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./inffast":48,"./inftrees":50}],50:[function(r,i,a){"use strict";var s=r("../utils/common"),l=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],h=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],c=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],f=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];i.exports=function(p,w,b,m,v,E,y,S){var x,O,L,N,Y,Z,ie,W,ge,_e=S.bits,P=0,J=0,A=0,ee=0,Ce=0,de=0,Oe=0,ae=0,Ie=0,U=0,G=null,Me=0,me=new s.Buf16(16),pe=new s.Buf16(16),Ke=null,mt=0;for(P=0;P<=15;P++)me[P]=0;for(J=0;J<m;J++)me[w[b+J]]++;for(Ce=_e,ee=15;1<=ee&&me[ee]===0;ee--);if(ee<Ce&&(Ce=ee),ee===0)return v[E++]=20971520,v[E++]=20971520,S.bits=1,0;for(A=1;A<ee&&me[A]===0;A++);for(Ce<A&&(Ce=A),P=ae=1;P<=15;P++)if(ae<<=1,(ae-=me[P])<0)return-1;if(0<ae&&(p===0||ee!==1))return-1;for(pe[1]=0,P=1;P<15;P++)pe[P+1]=pe[P]+me[P];for(J=0;J<m;J++)w[b+J]!==0&&(y[pe[w[b+J]]++]=J);if(Z=p===0?(G=Ke=y,19):p===1?(G=l,Me-=257,Ke=h,mt-=257,256):(G=c,Ke=f,-1),P=A,Y=E,Oe=J=U=0,L=-1,N=(Ie=1<<(de=Ce))-1,p===1&&852<Ie||p===2&&592<Ie)return 1;for(;;){for(ie=P-Oe,ge=y[J]<Z?(W=0,y[J]):y[J]>Z?(W=Ke[mt+y[J]],G[Me+y[J]]):(W=96,0),x=1<<P-Oe,A=O=1<<de;v[Y+(U>>Oe)+(O-=x)]=ie<<24|W<<16|ge|0,O!==0;);for(x=1<<P-1;U&x;)x>>=1;if(x!==0?(U&=x-1,U+=x):U=0,J++,--me[P]==0){if(P===ee)break;P=w[b+y[J]]}if(Ce<P&&(U&N)!==L){for(Oe===0&&(Oe=Ce),Y+=A,ae=1<<(de=P-Oe);de+Oe<ee&&!((ae-=me[de+Oe])<=0);)de++,ae<<=1;if(Ie+=1<<de,p===1&&852<Ie||p===2&&592<Ie)return 1;v[L=U&N]=Ce<<24|de<<16|Y-E|0}}return U!==0&&(v[Y+U]=P-Oe<<24|4194304),S.bits=Ce,0}},{"../utils/common":41}],51:[function(r,i,a){"use strict";i.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},{}],52:[function(r,i,a){"use strict";var s=r("../utils/common"),l=0,h=1;function c(C){for(var B=C.length;0<=--B;)C[B]=0}var f=0,p=29,w=256,b=w+1+p,m=30,v=19,E=2*b+1,y=15,S=16,x=7,O=256,L=16,N=17,Y=18,Z=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],ie=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],W=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],ge=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],_e=new Array(2*(b+2));c(_e);var P=new Array(2*m);c(P);var J=new Array(512);c(J);var A=new Array(256);c(A);var ee=new Array(p);c(ee);var Ce,de,Oe,ae=new Array(m);function Ie(C,B,se,le,F){this.static_tree=C,this.extra_bits=B,this.extra_base=se,this.elems=le,this.max_length=F,this.has_stree=C&&C.length}function U(C,B){this.dyn_tree=C,this.max_code=0,this.stat_desc=B}function G(C){return C<256?J[C]:J[256+(C>>>7)]}function Me(C,B){C.pending_buf[C.pending++]=255&B,C.pending_buf[C.pending++]=B>>>8&255}function me(C,B,se){C.bi_valid>S-se?(C.bi_buf|=B<<C.bi_valid&65535,Me(C,C.bi_buf),C.bi_buf=B>>S-C.bi_valid,C.bi_valid+=se-S):(C.bi_buf|=B<<C.bi_valid&65535,C.bi_valid+=se)}function pe(C,B,se){me(C,se[2*B],se[2*B+1])}function Ke(C,B){for(var se=0;se|=1&C,C>>>=1,se<<=1,0<--B;);return se>>>1}function mt(C,B,se){var le,F,ue=new Array(y+1),ve=0;for(le=1;le<=y;le++)ue[le]=ve=ve+se[le-1]<<1;for(F=0;F<=B;F++){var he=C[2*F+1];he!==0&&(C[2*F]=Ke(ue[he]++,he))}}function Ve(C){var B;for(B=0;B<b;B++)C.dyn_ltree[2*B]=0;for(B=0;B<m;B++)C.dyn_dtree[2*B]=0;for(B=0;B<v;B++)C.bl_tree[2*B]=0;C.dyn_ltree[2*O]=1,C.opt_len=C.static_len=0,C.last_lit=C.matches=0}function We(C){8<C.bi_valid?Me(C,C.bi_buf):0<C.bi_valid&&(C.pending_buf[C.pending++]=C.bi_buf),C.bi_buf=0,C.bi_valid=0}function ft(C,B,se,le){var F=2*B,ue=2*se;return C[F]<C[ue]||C[F]===C[ue]&&le[B]<=le[se]}function vt(C,B,se){for(var le=C.heap[se],F=se<<1;F<=C.heap_len&&(F<C.heap_len&&ft(B,C.heap[F+1],C.heap[F],C.depth)&&F++,!ft(B,le,C.heap[F],C.depth));)C.heap[se]=C.heap[F],se=F,F<<=1;C.heap[se]=le}function Kt(C,B,se){var le,F,ue,ve,he=0;if(C.last_lit!==0)for(;le=C.pending_buf[C.d_buf+2*he]<<8|C.pending_buf[C.d_buf+2*he+1],F=C.pending_buf[C.l_buf+he],he++,le===0?pe(C,F,B):(pe(C,(ue=A[F])+w+1,B),(ve=Z[ue])!==0&&me(C,F-=ee[ue],ve),pe(C,ue=G(--le),se),(ve=ie[ue])!==0&&me(C,le-=ae[ue],ve)),he<C.last_lit;);pe(C,O,B)}function Wt(C,B){var se,le,F,ue=B.dyn_tree,ve=B.stat_desc.static_tree,he=B.stat_desc.has_stree,Ae=B.stat_desc.elems,tt=-1;for(C.heap_len=0,C.heap_max=E,se=0;se<Ae;se++)ue[2*se]!==0?(C.heap[++C.heap_len]=tt=se,C.depth[se]=0):ue[2*se+1]=0;for(;C.heap_len<2;)ue[2*(F=C.heap[++C.heap_len]=tt<2?++tt:0)]=1,C.depth[F]=0,C.opt_len--,he&&(C.static_len-=ve[2*F+1]);for(B.max_code=tt,se=C.heap_len>>1;1<=se;se--)vt(C,ue,se);for(F=Ae;se=C.heap[1],C.heap[1]=C.heap[C.heap_len--],vt(C,ue,1),le=C.heap[1],C.heap[--C.heap_max]=se,C.heap[--C.heap_max]=le,ue[2*F]=ue[2*se]+ue[2*le],C.depth[F]=(C.depth[se]>=C.depth[le]?C.depth[se]:C.depth[le])+1,ue[2*se+1]=ue[2*le+1]=F,C.heap[1]=F++,vt(C,ue,1),2<=C.heap_len;);C.heap[--C.heap_max]=C.heap[1],(function(Ue,Lt){var nn,rr,on,lt,In,Qn,vr=Lt.dyn_tree,Ro=Lt.max_code,Ei=Lt.stat_desc.static_tree,Hl=Lt.stat_desc.has_stree,Fl=Lt.stat_desc.extra_bits,Da=Lt.stat_desc.extra_base,Cn=Lt.stat_desc.max_length,eo=0;for(lt=0;lt<=y;lt++)Ue.bl_count[lt]=0;for(vr[2*Ue.heap[Ue.heap_max]+1]=0,nn=Ue.heap_max+1;nn<E;nn++)Cn<(lt=vr[2*vr[2*(rr=Ue.heap[nn])+1]+1]+1)&&(lt=Cn,eo++),vr[2*rr+1]=lt,Ro<rr||(Ue.bl_count[lt]++,In=0,Da<=rr&&(In=Fl[rr-Da]),Qn=vr[2*rr],Ue.opt_len+=Qn*(lt+In),Hl&&(Ue.static_len+=Qn*(Ei[2*rr+1]+In)));if(eo!==0){do{for(lt=Cn-1;Ue.bl_count[lt]===0;)lt--;Ue.bl_count[lt]--,Ue.bl_count[lt+1]+=2,Ue.bl_count[Cn]--,eo-=2}while(0<eo);for(lt=Cn;lt!==0;lt--)for(rr=Ue.bl_count[lt];rr!==0;)Ro<(on=Ue.heap[--nn])||(vr[2*on+1]!==lt&&(Ue.opt_len+=(lt-vr[2*on+1])*vr[2*on],vr[2*on+1]=lt),rr--)}})(C,B),mt(ue,tt,C.bl_count)}function _(C,B,se){var le,F,ue=-1,ve=B[1],he=0,Ae=7,tt=4;for(ve===0&&(Ae=138,tt=3),B[2*(se+1)+1]=65535,le=0;le<=se;le++)F=ve,ve=B[2*(le+1)+1],++he<Ae&&F===ve||(he<tt?C.bl_tree[2*F]+=he:F!==0?(F!==ue&&C.bl_tree[2*F]++,C.bl_tree[2*L]++):he<=10?C.bl_tree[2*N]++:C.bl_tree[2*Y]++,ue=F,tt=(he=0)===ve?(Ae=138,3):F===ve?(Ae=6,3):(Ae=7,4))}function Q(C,B,se){var le,F,ue=-1,ve=B[1],he=0,Ae=7,tt=4;for(ve===0&&(Ae=138,tt=3),le=0;le<=se;le++)if(F=ve,ve=B[2*(le+1)+1],!(++he<Ae&&F===ve)){if(he<tt)for(;pe(C,F,C.bl_tree),--he!=0;);else F!==0?(F!==ue&&(pe(C,F,C.bl_tree),he--),pe(C,L,C.bl_tree),me(C,he-3,2)):he<=10?(pe(C,N,C.bl_tree),me(C,he-3,3)):(pe(C,Y,C.bl_tree),me(C,he-11,7));ue=F,tt=(he=0)===ve?(Ae=138,3):F===ve?(Ae=6,3):(Ae=7,4)}}c(ae);var q=!1;function T(C,B,se,le){me(C,(f<<1)+(le?1:0),3),(function(F,ue,ve,he){We(F),he&&(Me(F,ve),Me(F,~ve)),s.arraySet(F.pending_buf,F.window,ue,ve,F.pending),F.pending+=ve})(C,B,se,!0)}a._tr_init=function(C){q||((function(){var B,se,le,F,ue,ve=new Array(y+1);for(F=le=0;F<p-1;F++)for(ee[F]=le,B=0;B<1<<Z[F];B++)A[le++]=F;for(A[le-1]=F,F=ue=0;F<16;F++)for(ae[F]=ue,B=0;B<1<<ie[F];B++)J[ue++]=F;for(ue>>=7;F<m;F++)for(ae[F]=ue<<7,B=0;B<1<<ie[F]-7;B++)J[256+ue++]=F;for(se=0;se<=y;se++)ve[se]=0;for(B=0;B<=143;)_e[2*B+1]=8,B++,ve[8]++;for(;B<=255;)_e[2*B+1]=9,B++,ve[9]++;for(;B<=279;)_e[2*B+1]=7,B++,ve[7]++;for(;B<=287;)_e[2*B+1]=8,B++,ve[8]++;for(mt(_e,b+1,ve),B=0;B<m;B++)P[2*B+1]=5,P[2*B]=Ke(B,5);Ce=new Ie(_e,Z,w+1,b,y),de=new Ie(P,ie,0,m,y),Oe=new Ie(new Array(0),W,0,v,x)})(),q=!0),C.l_desc=new U(C.dyn_ltree,Ce),C.d_desc=new U(C.dyn_dtree,de),C.bl_desc=new U(C.bl_tree,Oe),C.bi_buf=0,C.bi_valid=0,Ve(C)},a._tr_stored_block=T,a._tr_flush_block=function(C,B,se,le){var F,ue,ve=0;0<C.level?(C.strm.data_type===2&&(C.strm.data_type=(function(he){var Ae,tt=4093624447;for(Ae=0;Ae<=31;Ae++,tt>>>=1)if(1&tt&&he.dyn_ltree[2*Ae]!==0)return l;if(he.dyn_ltree[18]!==0||he.dyn_ltree[20]!==0||he.dyn_ltree[26]!==0)return h;for(Ae=32;Ae<w;Ae++)if(he.dyn_ltree[2*Ae]!==0)return h;return l})(C)),Wt(C,C.l_desc),Wt(C,C.d_desc),ve=(function(he){var Ae;for(_(he,he.dyn_ltree,he.l_desc.max_code),_(he,he.dyn_dtree,he.d_desc.max_code),Wt(he,he.bl_desc),Ae=v-1;3<=Ae&&he.bl_tree[2*ge[Ae]+1]===0;Ae--);return he.opt_len+=3*(Ae+1)+5+5+4,Ae})(C),F=C.opt_len+3+7>>>3,(ue=C.static_len+3+7>>>3)<=F&&(F=ue)):F=ue=se+5,se+4<=F&&B!==-1?T(C,B,se,le):C.strategy===4||ue===F?(me(C,2+(le?1:0),3),Kt(C,_e,P)):(me(C,4+(le?1:0),3),(function(he,Ae,tt,Ue){var Lt;for(me(he,Ae-257,5),me(he,tt-1,5),me(he,Ue-4,4),Lt=0;Lt<Ue;Lt++)me(he,he.bl_tree[2*ge[Lt]+1],3);Q(he,he.dyn_ltree,Ae-1),Q(he,he.dyn_dtree,tt-1)})(C,C.l_desc.max_code+1,C.d_desc.max_code+1,ve+1),Kt(C,C.dyn_ltree,C.dyn_dtree)),Ve(C),le&&We(C)},a._tr_tally=function(C,B,se){return C.pending_buf[C.d_buf+2*C.last_lit]=B>>>8&255,C.pending_buf[C.d_buf+2*C.last_lit+1]=255&B,C.pending_buf[C.l_buf+C.last_lit]=255&se,C.last_lit++,B===0?C.dyn_ltree[2*se]++:(C.matches++,B--,C.dyn_ltree[2*(A[se]+w+1)]++,C.dyn_dtree[2*G(B)]++),C.last_lit===C.lit_bufsize-1},a._tr_align=function(C){me(C,2,3),pe(C,O,_e),(function(B){B.bi_valid===16?(Me(B,B.bi_buf),B.bi_buf=0,B.bi_valid=0):8<=B.bi_valid&&(B.pending_buf[B.pending++]=255&B.bi_buf,B.bi_buf>>=8,B.bi_valid-=8)})(C)}},{"../utils/common":41}],53:[function(r,i,a){"use strict";i.exports=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}},{}],54:[function(r,i,a){"use strict";i.exports=typeof setImmediate=="function"?setImmediate:function(){var s=[].slice.apply(arguments);s.splice(1,0,0),setTimeout.apply(null,s)}},{}]},{},[10])(10)})})),C0=p3(),v3=g3(),b3=Hi(m3(),1);function w3(e){switch(e){case"image/jpeg":return"jpg";case"image/png":return"png";case"image/webp":return"webp";case"image/gif":return"gif";case"image/bmp":return"bmp";default:return"png"}}async function _3(e){if(!e.src)return null;try{const t=await fetch(e.src);if(t.ok)return ye(`Got blob for page ${e.src} from fetch`),await t.blob()}catch(t){ye(`Failed to get blob for page ${e.src} from fetch`,t)}return typeof GM_xmlhttpRequest<"u"?new Promise(t=>{GM_xmlhttpRequest({method:"GET",url:e.src,responseType:"blob",onload:r=>{r.status===200?(ye(`Got blob for page ${e.src} from GM_xmlhttpRequest`),t(r.response)):(ye(`Failed to get blob for page ${e.src} from GM_xmlhttpRequest`,r.statusText),t(null))},onerror:r=>{ye(`Failed to get blob for page ${e.src} from GM_xmlhttpRequest`,r),t(null)}})}):null}async function y3(e){const t=e.ref?.value;if(!t)return null;try{const r=document.createElement("canvas"),i=r.getContext("2d");if(i)return r.width=t.naturalWidth,r.height=t.naturalHeight,i.drawImage(t,0,0),await new Promise(a=>{r.toBlob(s=>{s&&ye(`Got blob for page ${e.src} from canvas`),a(s)},"image/png",1)})}catch(r){ye(`Failed to get blob for page ${e.src} from canvas`,r)}return null}async function k3(e){if(e.blob)return ye(`Got blob for page ${e.src} from cache`),e.blob;const t=await _3(e)||await y3(e);return t||ye(`Failed to get blob for page ${e.src}`),t}async function E3(){$e("download","working");const e=new b3.default,t=fe("images")??{},r=fe("manga"),i=r?.pages??0,a=Math.floor(Math.log10(i||1))+1,s=xe.default.sortBy(xe.default.entries(t),([f])=>Number(f)),l=[],h=f=>{$e("dialog",{open:!0,title:K("BUTTON_DOWNLOAD"),content:oe`
        <div style='display: flex; flex-direction: column; gap: 10px;'>
          <p>${K("DOWNLOAD_PROGRESS").replace("##num##",f.toString()).replace("##total##",i.toString())}</p>
          <progress value='${f}' max='${i}' style='width: 100%; height: 20px;'></progress>
        </div>
      `,footer:oe`
        <mov-button @click=${()=>$e("download","cancelled")}>
          ${K("CANCEL")}
        </mov-button>
      `})};h(0);let c=0;for(const[f,p]of s){if(fe("download")==="cancelled"){ye("Download cancelled"),$e("dialog",null),$e("download",void 0);return}try{const w=await k3(p);if(w){const b=w3(w.type),m=`Page-${Number(f).toString().padStart(a,"0")}.${b}`;ye(`${m} Added to Zip from Blob`),e.file(m,w,{createFolders:!0,compression:"DEFLATE"})}else l.push(p.src??f)}catch(w){ye(`Error processing page ${f}`,w),l.push(p.src??f)}finally{c+=1,h(c)}}$e("dialog",{open:!0,title:K("BUTTON_DOWNLOAD"),content:oe`
      <div style='display: flex; flex-direction: column; gap: 10px;'>
        <p>${K("GENERATING_ZIP")}</p>
        <progress style='width: 100%; height: 20px;'></progress>
      </div>
    `,footer:oe``}),l.length>0&&(ye("Some images failed to download:",l),e.file("failed_pages.txt",l.join(`
`))),ye("Generating Zip"),e.generateAsync({type:"blob"}).then(f=>{ye("Download Ready"),(0,v3.saveAs)(f,`${r?.title??document.title}.zip`,{autoBom:!1}),l.length>0?$e("dialog",{open:!0,title:K("DOWNLOAD_INCOMPLETE"),icon:"warning",content:oe`<p>${K("DOWNLOAD_INCOMPLETE_MESSAGE")}</p>`,footer:oe`<mov-button @click=${()=>$e("dialog",null)}>
            ${K("CLOSE")}
          </mov-button>`}):$e("dialog",null)}).catch(f=>{ye("Error generating zip",f),$e("dialog",{open:!0,title:K("WARNING"),icon:"error",content:oe`<p>Error generating zip: ${f.message}</p>`,footer:oe`<mov-button @click=${()=>$e("dialog",null)}>
          ${K("CLOSE")}
        </mov-button>`})}).finally(()=>{$e("download",void 0)})}function O0(){fe("download")!=="working"&&(ye("Downloading Chapter"),E3().catch(e=>ye("Error downloading chapter",e)))}function S3(){mo("hidePageControls",e=>!e)}function pi(e){const t=e.currentTarget||e.target,r=t.getAttribute("value")??t.getAttribute("href");e.button!==1&&!e.ctrlKey&&(r&&r!=="#"?window.location.href=(0,C0.sanitizeUrl)(r):t.id==="series"&&(Ms()?window.location.href=window.location.pathname:window.history.back()))}function A3(e){if(e)if(X("viewMode").startsWith("Fluid")){const t=fe("chapter").value;if(t){const r=e.getBoundingClientRect(),i=t.getBoundingClientRect();t.scrollBy({left:r.left-i.left,top:r.top-i.top,behavior:"instant"})}}else{const t=e.getBoundingClientRect();window.scrollTo({top:t.top+window.scrollY,left:t.left+window.scrollX,behavior:"instant"})}}tr.listen((e,t,r)=>{r==="scrollToPage"&&e.scrollToPage!==void 0&&(e.scrollToPage<=0?window.scrollTo(0,0):A3(fe("images")?.[e.scrollToPage]?.ref?.value),setTimeout(()=>$e("scrollToPage",void 0),10))});function M3(e){const t=e.detail.value;$e("scrollToPage",typeof t=="string"?parseInt(t,10):t)}function x3(e){$e("scrollToPage",e)}var Ol=typeof navigator<"u"?navigator.userAgent.toLowerCase().indexOf("firefox")>0:!1;function Tl(e,t,r,i){e.addEventListener?e.addEventListener(t,r,i):e.attachEvent&&e.attachEvent(`on${t}`,r)}function gi(e,t,r,i){e&&(e.removeEventListener?e.removeEventListener(t,r,i):e.detachEvent&&e.detachEvent(`on${t}`,r))}function T0(e,t){const r=t.slice(0,t.length-1),i=[];for(let a=0;a<r.length;a++)i.push(e[r[a].toLowerCase()]);return i}function L0(e){typeof e!="string"&&(e=""),e=e.replace(/\s/g,"");const t=e.split(",");let r=t.lastIndexOf("");for(;r>=0;)t[r-1]+=",",t.splice(r,1),r=t.lastIndexOf("");return t}function I3(e,t){const r=e.length>=t.length?e:t,i=e.length>=t.length?t:e;let a=!0;for(let s=0;s<r.length;s++)i.indexOf(r[s])===-1&&(a=!1);return a}function R0(e){let t=e.keyCode||e.which||e.charCode;return e.key&&/^[a-z]$/i.test(e.key)?e.key.toUpperCase().charCodeAt(0):(e.code&&/^Key[A-Z]$/.test(e.code)&&(t=e.code.charCodeAt(3)),t)}var mi={backspace:8,"⌫":8,tab:9,clear:12,enter:13,"↩":13,return:13,esc:27,escape:27,space:32,left:37,up:38,right:39,down:40,arrowup:38,arrowdown:40,arrowleft:37,arrowright:39,del:46,delete:46,ins:45,insert:45,home:36,end:35,pageup:33,pagedown:34,capslock:20,num_0:96,num_1:97,num_2:98,num_3:99,num_4:100,num_5:101,num_6:102,num_7:103,num_8:104,num_9:105,num_multiply:106,num_add:107,num_enter:108,num_subtract:109,num_decimal:110,num_divide:111,"⇪":20,",":188,".":190,"/":191,"`":192,"-":Ol?173:189,"=":Ol?61:187,";":Ol?59:186,"'":222,"{":219,"}":221,"[":219,"]":221,"\\":220},xr={"⇧":16,shift:16,"⌥":18,alt:18,option:18,"⌃":17,ctrl:17,control:17,"⌘":91,cmd:91,meta:91,command:91},vi={16:"shiftKey",18:"altKey",17:"ctrlKey",91:"metaKey",shiftKey:16,ctrlKey:17,altKey:18,metaKey:91},Tt={16:!1,18:!1,17:!1,91:!1},gt={};for(let e=1;e<20;e++)mi[`f${e}`]=111+e;var st=[],bi=null,Co=null,P0="all",rn=new Map,Oo=e=>mi[e.toLowerCase()]||xr[e.toLowerCase()]||e.toUpperCase().charCodeAt(0),C3=e=>Object.keys(mi).find(t=>mi[t]===e),O3=e=>Object.keys(xr).find(t=>xr[t]===e),$0=e=>{P0=e||"all"},wi=()=>P0||"all",T3=()=>st.slice(0),L3=()=>st.map(e=>C3(e)||O3(e)||String.fromCharCode(e)),R3=()=>{const e=[];return Object.keys(gt).forEach(t=>{gt[t].forEach(({key:r,scope:i,mods:a,shortcut:s})=>{e.push({scope:i,shortcut:s,mods:a,keys:r.split("+").map(l=>Oo(l))})})}),e},z0=e=>{const t=e.target||e.srcElement,{tagName:r}=t;let i=!0;const a=r==="INPUT"&&!["checkbox","radio","range","button","file","reset","submit","color"].includes(t.type);return(t.isContentEditable||(a||r==="TEXTAREA"||r==="SELECT")&&!t.readOnly)&&(i=!1),i},P3=e=>(typeof e=="string"&&(e=Oo(e)),st.indexOf(e)!==-1),$3=(e,t)=>{let r,i;e||(e=wi());for(const a in gt)if(Object.prototype.hasOwnProperty.call(gt,a))for(r=gt[a],i=0;i<r.length;)r[i].scope===e?r.splice(i,1).forEach(({element:s})=>Ll(s)):i++;wi()===e&&$0(t||"all")};function z3(e){let t=R0(e);e.key&&e.key.toLowerCase()==="capslock"&&(t=Oo(e.key));const r=st.indexOf(t);if(r>=0&&st.splice(r,1),e.key&&e.key.toLowerCase()==="meta"&&st.splice(0,st.length),(t===93||t===224)&&(t=91),t in Tt){Tt[t]=!1;for(const i in xr)xr[i]===t&&(qr[i]=!1)}}var D0=(e,...t)=>{if(typeof e>"u")Object.keys(gt).forEach(r=>{Array.isArray(gt[r])&&gt[r].forEach(i=>Aa(i)),delete gt[r]}),Ll(null);else if(Array.isArray(e))e.forEach(r=>{r.key&&Aa(r)});else if(typeof e=="object")e.key&&Aa(e);else if(typeof e=="string"){let[r,i]=t;typeof r=="function"&&(i=r,r=""),Aa({key:e,scope:r,method:i,splitKey:"+"})}},Aa=({key:e,scope:t,method:r,splitKey:i="+"})=>{L0(e).forEach(a=>{const s=a.split(i),l=s.length,h=s[l-1],c=h==="*"?"*":Oo(h);if(!gt[c])return;t||(t=wi());const f=l>1?T0(xr,s):[],p=[];gt[c]=gt[c].filter(w=>{const b=(r?w.method===r:!0)&&w.scope===t&&I3(w.mods,f);return b&&p.push(w.element),!b}),p.forEach(w=>Ll(w))})};function N0(e,t,r,i){if(t.element!==i)return;let a;if(t.scope===r||t.scope==="all"){a=t.mods.length>0;for(const s in Tt)Object.prototype.hasOwnProperty.call(Tt,s)&&(!Tt[s]&&t.mods.indexOf(+s)>-1||Tt[s]&&t.mods.indexOf(+s)===-1)&&(a=!1);(t.mods.length===0&&!Tt[16]&&!Tt[18]&&!Tt[17]&&!Tt[91]||a||t.shortcut==="*")&&(t.keys=[],t.keys=t.keys.concat(st),t.method(e,t)===!1&&(e.preventDefault?e.preventDefault():e.returnValue=!1,e.stopPropagation&&e.stopPropagation(),e.cancelBubble&&(e.cancelBubble=!0)))}}function B0(e,t){const r=gt["*"];let i=R0(e);if(e.key&&e.key.toLowerCase()==="capslock"||!(qr.filter||z0).call(this,e))return;if((i===93||i===224)&&(i=91),st.indexOf(i)===-1&&i!==229&&st.push(i),["metaKey","ctrlKey","altKey","shiftKey"].forEach(h=>{const c=vi[h];e[h]&&st.indexOf(c)===-1?st.push(c):!e[h]&&st.indexOf(c)>-1?st.splice(st.indexOf(c),1):h==="metaKey"&&e[h]&&(st=st.filter(f=>f in vi||f===i))}),i in Tt){Tt[i]=!0;for(const h in xr)Object.prototype.hasOwnProperty.call(xr,h)&&(qr[h]=e[vi[xr[h]]]);if(!r)return}for(const h in Tt)Object.prototype.hasOwnProperty.call(Tt,h)&&(Tt[h]=e[vi[h]]);e.getModifierState&&!(e.altKey&&!e.ctrlKey)&&e.getModifierState("AltGraph")&&(st.indexOf(17)===-1&&st.push(17),st.indexOf(18)===-1&&st.push(18),Tt[17]=!0,Tt[18]=!0);const a=wi();if(r)for(let h=0;h<r.length;h++)r[h].scope===a&&(e.type==="keydown"&&r[h].keydown||e.type==="keyup"&&r[h].keyup)&&N0(e,r[h],a,t);if(!(i in gt))return;const s=gt[i],l=s.length;for(let h=0;h<l;h++)if((e.type==="keydown"&&s[h].keydown||e.type==="keyup"&&s[h].keyup)&&s[h].key){const c=s[h],{splitKey:f}=c,p=c.key.split(f),w=[];for(let b=0;b<p.length;b++)w.push(Oo(p[b]));w.sort().join("")===st.sort().join("")&&N0(e,c,a,t)}}var qr=function e(t,r,i){st=[];const a=L0(t);let s=[],l="all",h=document,c=0,f=!1,p=!0,w="+",b=!1,m=!1;if(i===void 0&&typeof r=="function"&&(i=r),Object.prototype.toString.call(r)==="[object Object]"){const v=r;v.scope&&(l=v.scope),v.element&&(h=v.element),v.keyup&&(f=v.keyup),v.keydown!==void 0&&(p=v.keydown),v.capture!==void 0&&(b=v.capture),typeof v.splitKey=="string"&&(w=v.splitKey),v.single===!0&&(m=!0)}for(typeof r=="string"&&(l=r),m&&D0(t,l);c<a.length;c++){const v=a[c].split(w);s=[],v.length>1&&(s=T0(xr,v));let E=v[v.length-1];E=E==="*"?"*":Oo(E),E in gt||(gt[E]=[]),gt[E].push({keyup:f,keydown:p,scope:l,mods:s,shortcut:a[c],method:i,key:a[c],splitKey:w,element:h})}if(typeof h<"u"&&typeof window<"u"){if(!rn.has(h)){const v=(y=window.event)=>B0(y,h),E=(y=window.event)=>{B0(y,h),z3(y)};rn.set(h,{keydownListener:v,keyupListenr:E,capture:b}),Tl(h,"keydown",v,b),Tl(h,"keyup",E,b)}if(!bi){const v=()=>{st=[]};bi={listener:v,capture:b},Tl(window,"focus",v,b)}if(!Co&&typeof document<"u"){const v=()=>{st=[];for(const S in Tt)Tt[S]=!1;for(const S in xr)e[S]=!1},E=v,y=v;document.addEventListener("fullscreenchange",E),document.addEventListener("webkitfullscreenchange",y),Co={fullscreen:E,webkit:y}}}};function D3(e,t="all"){Object.keys(gt).forEach(r=>{gt[r].filter(i=>i.scope===t&&i.shortcut===e).forEach(i=>{i&&i.method&&i.method({},i)})})}function Ll(e){const t=Object.values(gt).flat();if(t.findIndex(({element:r})=>r===e)<0&&e){const{keydownListener:r,keyupListenr:i,capture:a}=rn.get(e)||{};r&&i&&(gi(e,"keyup",i,a),gi(e,"keydown",r,a),rn.delete(e))}if(t.length<=0||rn.size<=0){if(Array.from(rn.keys()).forEach(r=>{const{keydownListener:i,keyupListenr:a,capture:s}=rn.get(r)||{};i&&a&&(gi(r,"keyup",a,s),gi(r,"keydown",i,s),rn.delete(r))}),rn.clear(),Object.keys(gt).forEach(r=>delete gt[r]),bi){const{listener:r,capture:i}=bi;gi(window,"focus",r,i),bi=null}Co&&typeof document<"u"&&(document.removeEventListener("fullscreenchange",Co.fullscreen),document.removeEventListener("webkitfullscreenchange",Co.webkit),Co=null)}}var Rl={getPressedKeyString:L3,setScope:$0,getScope:wi,deleteScope:$3,getPressedKeyCodes:T3,getAllKeyCodes:R3,isPressed:P3,filter:z0,trigger:D3,unbind:D0,keyMap:mi,modifier:xr,modifierMap:vi};for(const e in Rl){const t=e;Object.prototype.hasOwnProperty.call(Rl,t)&&(qr[t]=Rl[t])}if(typeof window<"u"){const e=window.hotkeys;qr.noConflict=t=>(t&&window.hotkeys===qr&&(window.hotkeys=e),qr),window.hotkeys=qr}function H0(){const e=fe("chapter").value;if(X("viewMode").startsWith("Fluid")){const t=X("viewMode")==="FluidRTL"?-1:1;e?.scrollBy({top:0,left:X("scrollHeight")*t,behavior:"smooth"}),e&&e.scrollLeft+e.clientWidth>=e.scrollWidth-2&&($e("autoScroll",!1),ye("Finished auto scroll"))}else window.scrollBy({top:X("scrollHeight"),left:0,behavior:"smooth"}),window.scrollY+window.innerHeight>=document.documentElement.scrollHeight&&($e("autoScroll",!1),ye("Finished auto scroll"));fe("autoScroll")&&requestAnimationFrame(H0)}function Ma(){fe("autoScroll")?($e("autoScroll",!1),ye("Stopped auto scroll")):($e("autoScroll",!0),requestAnimationFrame(H0),ye("Start auto scroll"))}var xa=!1,N3=xe.default.debounce(()=>{Ma(),xa=!1},500);function B3(){!xa&&fe("autoScroll")&&(Ma(),xa=!0),xa&&!fe("autoScroll")&&N3()}function H3(){window.addEventListener("wheel",xe.default.throttle(B3,500))}var Zr=class extends Je{constructor(...t){super(...t),this.open=!1,this.mode="dialog",this.fullscreen=!1,this.label="",this.withoutHeader=!1,this.lightDismiss=!0}static{this.styles=yt`
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
      font-size: 24px;
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
  `}close(){this.open=!1}handleCancel(t){t.preventDefault(),this.close()}handleBackdropClick(){this.mode!=="inline"&&this.lightDismiss&&this.close()}handleClick(t){this.mode!=="inline"&&this.lightDismiss&&t.target===this.dialog&&this.close()}updated(t){this.mode!=="inline"&&t.has("open")&&(this.open?(this.dialog.classList.remove("closing"),this.dialog.show(),this.dispatchEvent(new CustomEvent("open",{bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent("wa-show",{bubbles:!0,composed:!0})),setTimeout(()=>{this.dispatchEvent(new CustomEvent("wa-after-show",{bubbles:!0,composed:!0}))},150)):t.get("open")===!0&&(this.dispatchEvent(new CustomEvent("close",{bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent("wa-hide",{bubbles:!0,composed:!0})),this.dialog.classList.add("closing"),setTimeout(()=>{this.dialog.classList.remove("closing"),this.dialog.open&&this.dialog.close(),this.dispatchEvent(new CustomEvent("wa-after-hide",{bubbles:!0,composed:!0}))},300)))}render(){return oe`
      <div
        class="backdrop"
        @click=${this.handleBackdropClick}
      ></div>
      <dialog
        part="dialog"
        @cancel=${this.handleCancel}
        @click=${this.handleClick}
      >
        ${this.withoutHeader?"":oe`
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
                ${Cl}
              </button>
            </div>
          </div>
        `}
        <div class="content-slot" part="body">
          ${this.icon?oe`
                <div class="icon-container">
                  <mov-icon
                    .name=${F3(this.icon)}
                    size="4rem"
                  ></mov-icon>
                </div>
              `:""}
          <slot></slot>
        </div>
        <slot name="footer" part="footer"></slot>
      </dialog>
    `}};z([j({type:Boolean,reflect:!0})],Zr.prototype,"open",void 0),z([j({type:String,reflect:!0})],Zr.prototype,"mode",void 0),z([j({type:Boolean,reflect:!0})],Zr.prototype,"fullscreen",void 0),z([j({type:String,reflect:!0})],Zr.prototype,"label",void 0),z([j({type:Boolean,reflect:!0,attribute:"without-header"})],Zr.prototype,"withoutHeader",void 0),z([j({type:Boolean,reflect:!0,attribute:"light-dismiss"})],Zr.prototype,"lightDismiss",void 0),z([j({type:String,reflect:!0})],Zr.prototype,"icon",void 0),z([en("dialog")],Zr.prototype,"dialog",void 0),Zr=z([ot("mov-dialog")],Zr);function Pl(e){const t=()=>$e("dialog",null);e.timer&&setTimeout(t,e.timer),$e("dialog",{open:!0,icon:e.icon,title:e.title,content:oe`<div style="padding: 1rem;">${Dd(e.html)}</div>`,footer:oe`
      <div
        slot="footer"
        style="display: flex; justify-content: flex-end; padding: 0.5rem 1rem 1rem;"
      >
        <mov-button @click=${t}>OK</mov-button>
      </div>
    `})}function F3(e){switch(e){case"info":return"info-circle";case"warning":return"alert-circle";case"success":return"circle-check";case"error":return"circle-x";case"question":return"help";default:return""}}function G3(e){const t=e.currentTarget.value;Wd(t==="true")}function W3(e){const t=e.currentTarget.value;At("locale",t)}function U3(e){const t=e.currentTarget.value;At("loadMode",t)}function V3(e){const t=e.detail.checked;At("fitWidthIfOversize",t)}function q3(e){const t=e.currentTarget.value;At("navbar",t)}function Z3(e){const t=e.currentTarget.value;At("pagination",t)}function j3(e){const t=e.detail.checked;At("downloadZip",t),t&&Pl({title:K("ATTENTION"),html:K("AUTO_DOWNLOAD"),timer:1e4,icon:"info"})}function K3(e){const t=e.detail.checked;At("lazyLoadImages",t),t&&Pl({title:K("WARNING"),html:K("LAZY_LOAD"),icon:"warning"})}function Y3(e){const t=e.detail.value;At("lazyStart",typeof t=="string"?parseInt(t,10):t)}function X3(e){const t=e.currentTarget.value;At("loadSpeed",t),["Extreme","All"].includes(t)&&Pl({title:K("SPEED_WARNING"),html:K("SPEED_WARNING_MESSAGE"),icon:"warning"})}function J3(e){const t=e.detail.value;At("zoomStep",typeof t=="string"?parseInt(t,10):t)}function Q3(e){const t=e.detail.value,r=typeof t=="string"?parseInt(t,10):t;R5("MinZoom",`#MangaOnlineViewer .PageContent .PageImg {min-width: ${r}vw;}`),At("minZoom",r)}function eb(e){const t=e.detail.checked;At("hidePageControls",t)}function tb(e){const t=e.currentTarget.value;At("header",t)}function rb(e){const t=e.detail.value;At("scrollHeight",typeof t=="string"?parseInt(t,10):t)}function F0(e){mo("scrollHeight",t=>{const r=t+e*25;if(r<=0)return 0;const i=Math.ceil(window.innerHeight/200)*100;return r>=i?i:r})}function nb(){const e=X("navbar");return e==="left"||e==="right"?window.innerWidth-34:window.innerWidth}function ob(){return X("navbar")==="bottom"?window.innerHeight-34:window.innerHeight}function G0(e,t=X("zoomMode"),r=X("zoomValue")){const i=nb(),a=ob();if(t==="width")e.width=i,e.height=void 0;else if(t==="height")e.width=void 0,e.height=a;else if(t==="percent"){const s=e.naturalWidth??e.ref?.value?.naturalWidth;e.width=s?s*(r/100):void 0,e.height=void 0}return e}function En(e=X("zoomMode"),t=X("zoomValue")){ye("Zoom",e,t),go("zoomMode",e),go("zoomValue",t),e==="height"?$e("scrollToPage",fe("currentPage")):Zn("header");const r=fe("images"),i=fe("manga"),a={};for(let s=i?.begin??1;s<=(i?.pages??1);s++)a[s]=G0({...r?.[s]},e,t);$e("images",a)}function To(e,t=X("zoomValue")){return()=>{En(e,t)}}function Ia(e=1){return()=>{const t=X("zoomValue")+e*X("zoomStep");t>0&&t<500&&En("percent",t)}}function ib(e){const t=e.currentTarget.value;At("zoomMode",t)}function ab(e){const t=e.detail.value,r=typeof t=="string"?parseInt(t,10):t;At("zoomValue",r),En("percent",r)}function sb(e){const t=e.detail.value;En("percent",typeof t=="string"?parseInt(t,10):t)}function mr(e){return()=>{go("viewMode",e),["FluidLTR","FluidRTL","Book","Manga"].includes(e)?(go("zoomMode","height"),go("header","click"),En("height")):(Zn("zoomMode"),Zn("zoomValue"),Zn("header")),En()}}function lb(e){const t=e.currentTarget.value;At("viewMode",t),mr(t)()}function cb(e){const t=X("viewMode")==="FluidRTL"?-1:1;fe("chapter").value?.scrollBy({left:.8*window.innerWidth*e*t,behavior:"smooth"})}function db(e){const t=fe("currentPage")+e;t<0?$e("scrollToPage",0):t>(fe("manga")?.pages??1)||$e("scrollToPage",t)}function ub(e){window.scrollBy({top:.8*window.innerHeight*e,behavior:"smooth"})}function hb(e){const t=fe("currentPage"),r=fe("manga");if(!r)return;const i=fe("images")??{},a=r.begin??1,s=r.pages??1,l=c=>{if(c<a||c>s)return!1;if(i[c]?.doublePage)return!0;let f=0;for(let p=c-1;p>=a&&!i[p]?.doublePage;p--)f++;return f%2===0};let h;if(e===1)for(h=t+1;h<=s&&!l(h);)h++;else if(l(t))for(h=t-1;h>a&&!l(h);)h--;else for(h=t;h>a&&!l(h);)h--;h<a?$e("scrollToPage",0):h>s?$e("scrollToPage",s):$e("scrollToPage",h)}function W0(e){const t=X("viewMode"),r=X("zoomMode");ye("Scrolling view",t,"zoom",r,"sign",e),t.match(/^(Book|Manga)$/)&&r==="height"?hb(e):t.startsWith("Fluid")?cb(e):r==="height"?db(e):ub(e)}function _i(e){const t=fe("manga")?.[e];t&&t!=="#"?window.location.href=(0,C0.sanitizeUrl)(t):e==="series"&&(Ms()?window.location.href=window.location.pathname:window.history.back())}var fb={SCROLL_UP(){W0(-1)},SCROLL_DOWN(){W0(1)},NEXT_CHAPTER(){_i("next")},PREVIOUS_CHAPTER(){_i("prev")},RETURN_CHAPTER_LIST(){_i("series")},ENLARGE(){Ia(1)()},REDUCE(){Ia(-1)()},RESTORE(){To("percent",100)()},FIT_WIDTH(){To("width")()},FIT_HEIGHT(){To("height")()},SETTINGS(){Gd("panel",e=>e==="none"?"settings":"none")},VIEW_MODE_WEBCOMIC(){mr("WebComic")()},VIEW_MODE_VERTICAL(){mr("Vertical")()},VIEW_MODE_LEFT(){mr("FluidRTL")()},VIEW_MODE_RIGHT(){mr("FluidLTR")()},VIEW_MODE_GALLERY(){mr("Gallery")()},SCROLL_START(){Ma()},INCREASE_SPEED(){F0(1)},DECREASE_SPEED(){F0(-1)},TOGGLE_CONTROLS(){mo("hidePageControls",e=>!e)}};function U0(){document.onkeydown=null,document.onkeyup=null,window.onkeydown=null,window.onkeyup=null,window.onload=null,document.body.onload=null,qr.unbind(),xe.default.keys(X("keybinds")).forEach(e=>{qr(X("keybinds")[e]?.join(",")??"",xe.default.throttle(t=>{fe("panel")!=="keybindingsEditor"&&(t.preventDefault(),t.stopImmediatePropagation(),t.stopPropagation(),fb[e]())},100))})}var Sn=class extends Je{constructor(...t){super(...t),this.mode="disabled",this.currentPage=1,this.totalPages=1,this.startPage=1}static{this.styles=yt`
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
      --mov-slider-track-height: 4px;
      --mov-slider-thumb-size: 16px;
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
  `}get isFirstPage(){return this.currentPage<=this.startPage}get isLastPage(){return this.currentPage>=this.totalPages-(1-this.startPage)}renderSlider(){return oe`
      <div class="slider-pagination">
        <button
          class="pagination-button"
          @click=${pi}
          value="${this.prev}"
          ?disabled=${Sr(this.prev)||this.prev==="#"}
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
          <mov-slider
            class="pagination-slider"
            min="${this.startPage}"
            max="${this.totalPages}"
            .value="${this.currentPage}"
            show-tooltip
            @input="${M3}"
          ></mov-slider>
        </div>

        <button class="pagination-button" @click=${this.goToNextPage} ?disabled=${this.isLastPage}>
          <mov-icon name="chevron-right"></mov-icon>
          <div class="tooltip">Next Page</div>
        </button>

        <button
          class="pagination-button"
          @click=${pi}
          value="${this.next}"
          ?disabled=${Sr(this.next)||this.next==="#"}
        >
          <mov-icon name="arrow-big-right"></mov-icon>
          <div class="tooltip">Next Chapter</div>
        </button>
      </div>
    `}renderSideArrows(){return oe`
      <div class="arrows-pagination">
        <button
          class="side-arrow left"
          @click=${this.handleLeftArrowClick}
          ?disabled=${this.isFirstPage&&(Sr(this.prev)||this.prev==="#")}
        >
          <mov-icon name="chevron-left"></mov-icon>
        </button>
        <button
          class="side-arrow right"
          @click=${this.handleRightArrowClick}
          ?disabled=${this.isLastPage&&(Sr(this.next)||this.next==="#")}
        >
          <mov-icon name="chevron-right"></mov-icon>
        </button>
      </div>
    `}render(){if(this.mode==="disabled")return Be;const t=this.mode==="slider"||this.mode==="both",r=this.mode==="side-arrows"||this.mode==="both";return oe`
      ${t?this.renderSlider():Be} ${r?this.renderSideArrows():Be}
    `}handleLeftArrowClick(){this.isFirstPage?_i("prev"):this.goToPreviousPage()}handleRightArrowClick(){this.isLastPage?_i("next"):this.goToNextPage()}goToPreviousPage(){this.goToPage(this.currentPage-1)}goToNextPage(){this.goToPage(this.currentPage+1)}goToPage(t){$e("scrollToPage",t)}};z([j({type:String})],Sn.prototype,"mode",void 0),z([j({type:Number})],Sn.prototype,"currentPage",void 0),z([j({type:Number})],Sn.prototype,"totalPages",void 0),z([j({type:Number})],Sn.prototype,"startPage",void 0),z([j({type:String})],Sn.prototype,"next",void 0),z([j({type:String})],Sn.prototype,"prev",void 0),Sn=z([ot("manga-pagination")],Sn);var An=class extends Je{constructor(...t){super(...t),this.open=!1,this.placement="end",this.label="",this.withoutHeader=!1,this.lightDismiss=!0}static{this.styles=yt`
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
      font-size: 24px;
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
  `}close(){this.open=!1}handleCancel(t){t.preventDefault(),this.close()}handleBackdropClick(){this.lightDismiss&&this.close()}handleClick(t){this.lightDismiss&&t.target===this.dialog&&this.close()}updated(t){t.has("open")&&(this.open?(this.dialog.classList.remove("closing"),this.dialog.show(),this.dispatchEvent(new CustomEvent("open",{bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent("wa-show",{bubbles:!0,composed:!0})),setTimeout(()=>{this.dispatchEvent(new CustomEvent("wa-after-show",{bubbles:!0,composed:!0}))},250)):t.get("open")===!0&&(this.dispatchEvent(new CustomEvent("close",{bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent("wa-hide",{bubbles:!0,composed:!0})),this.dialog.classList.add("closing"),setTimeout(()=>{this.dialog.classList.remove("closing"),this.dialog.open&&this.dialog.close(),this.dispatchEvent(new CustomEvent("wa-after-hide",{bubbles:!0,composed:!0}))},300)))}render(){return oe`
      <div
        class="backdrop"
        @click=${this.handleBackdropClick}
      ></div>
      <dialog
        part="dialog"
        @cancel=${this.handleCancel}
        @click=${this.handleClick}
      >
        ${this.withoutHeader?"":oe`
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
                ${Cl}
              </button>
            </div>
          </div>
        `}
        <slot class="content-slot" part="body"></slot>
        <slot name="footer" class="footer-slot" part="footer"></slot>
      </dialog>
    `}};z([j({type:Boolean,reflect:!0})],An.prototype,"open",void 0),z([j({type:String,reflect:!0})],An.prototype,"placement",void 0),z([j({type:String,reflect:!0})],An.prototype,"label",void 0),z([j({type:Boolean,reflect:!0,attribute:"without-header"})],An.prototype,"withoutHeader",void 0),z([j({type:Boolean,reflect:!0,attribute:"light-dismiss"})],An.prototype,"lightDismiss",void 0),z([en("dialog")],An.prototype,"dialog",void 0),An=z([ot("mov-drawer")],An);var Xn=class extends Je{static{this.styles=yt`
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
      top: 100%;
      left: 0;
      background-color: var(--theme-background-color, #f9f9f9);
      min-width: 160px;
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
      z-index: 100;
      list-style: none;
      padding: 0;
      margin: 4px 0 0;
      border: 1px solid var(--theme-border-color, #ccc);
      border-radius: 5px;
    }
    :host([placement^='top']) .dropdown-content {
      top: auto;
      bottom: 100%;
      margin: 0 0 4px;
    }
    :host([placement$='end']) .dropdown-content {
      left: auto;
      right: 0;
    }
    :host([open]) .dropdown-content {
      display: block;
    }
  `}constructor(){super(),this.open=!1,this.checkable=!1,this.distance=0,this.skidding=0,this.placement="bottom-start",this.boundClickHandler=this.handleClickOutside.bind(this)}connectedCallback(){super.connectedCallback(),document.addEventListener("click",this.boundClickHandler)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("click",this.boundClickHandler)}handleClickOutside(t){this.open&&!t.composedPath().includes(this)&&this.hide()}show(){this.open||(this.open=!0,this.dispatchEvent(new CustomEvent("wa-show",{bubbles:!0,composed:!0})),setTimeout(()=>{this.dispatchEvent(new CustomEvent("wa-after-show",{bubbles:!0,composed:!0}))},150))}hide(){this.open&&(this.open=!1,this.dispatchEvent(new CustomEvent("wa-hide",{bubbles:!0,composed:!0})),setTimeout(()=>{this.dispatchEvent(new CustomEvent("wa-after-hide",{bubbles:!0,composed:!0}))},150))}toggle(){this.open?this.hide():this.show()}render(){return oe`
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
    `}};z([j({type:Boolean,reflect:!0})],Xn.prototype,"open",void 0),z([j({type:Boolean,reflect:!0})],Xn.prototype,"checkable",void 0),z([j({type:Number})],Xn.prototype,"distance",void 0),z([j({type:Number})],Xn.prototype,"skidding",void 0),z([j({type:String})],Xn.prototype,"placement",void 0),Xn=z([ot("mov-dropdown")],Xn);var Mn=class extends Je{constructor(...t){super(...t),this.selected=!1,this.checked=!1,this.disabled=!1,this.value="",this.variant="default",this.type="normal"}static{this.styles=yt`
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
  `}handleSelect(){this.disabled||this.dispatchEvent(new CustomEvent("wa-select",{detail:{item:this},bubbles:!0,composed:!0}))}render(){return oe`
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
    `}};z([j({type:Boolean,reflect:!0})],Mn.prototype,"selected",void 0),z([j({type:Boolean,reflect:!0})],Mn.prototype,"checked",void 0),z([j({type:Boolean,reflect:!0})],Mn.prototype,"disabled",void 0),z([j({type:String})],Mn.prototype,"value",void 0),z([j({type:String,reflect:!0})],Mn.prototype,"variant",void 0),z([j({type:String,reflect:!0})],Mn.prototype,"type",void 0),Mn=z([ot("mov-dropdown-item")],Mn);var $l=class extends Je{constructor(...t){super(...t),this.orientation="horizontal"}static{this.styles=yt`
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
  `}render(){return oe`<div
      class="divider"
      role="separator"
    ></div>`}};z([j({type:String,reflect:!0})],$l.prototype,"orientation",void 0),$l=z([ot("mov-divider")],$l);var V0="kbd,.key{white-space:nowrap;text-align:center;background-color:#505050;background-color:gradient(linear, left top, left bottom, from(#3c3c3c), to(#505050));color:#fafafa;text-shadow:-1px -1px #464646;cursor:default;user-select:none;border:none;border-radius:.3em;min-width:1em;padding:.3em .4em .2em .3em;font-family:Lucida Grande,Lucida,Arial,sans-serif;font-size:.85em;font-style:normal;line-height:1;text-decoration:none;display:inline-block;box-shadow:inset 0 0 1px #969696,inset 0 -.05em .4em #505050,0 .1em #1e1e1e,0 .1em .1em #0000004d}kbd[title],.key[title]{cursor:help}kbd.dark,.dark-keys kbd,.key.dark,.dark-keys .key{white-space:nowrap;text-align:center;background-color:#505050;background-color:gradient(linear, left top, left bottom, from(#3c3c3c), to(#505050));color:#fafafa;text-shadow:-1px -1px #464646;border:none;border-radius:.3em;min-width:1em;padding:.3em .4em .2em .3em;font-family:Lucida Grande,Lucida,Arial,sans-serif;font-style:normal;text-decoration:none;display:inline-block;box-shadow:inset 0 0 1px #969696,inset 0 -.05em .4em #505050,0 .1em #1e1e1e,0 .1em .1em #0000004d}kbd.light,.light-keys kbd,.key.light,.light-keys .key{white-space:nowrap;text-align:center;background-color:#fafafa;background-color:gradient(linear, left top, left bottom, from(#d2d2d2), to(#fff));color:#323232;text-shadow:0 0 2px #fff;border:none;border-radius:.3em;min-width:1em;padding:.3em .4em .2em .3em;font-family:Lucida Grande,Lucida,Arial,sans-serif;font-style:normal;text-decoration:none;display:inline-block;box-shadow:inset 0 0 1px #fff,inset 0 0 .4em #c8c8c8,0 .1em #828282,0 .11em #0006,0 .1em .11em #000000e6}kbd.so,.so-keys kbd,.key.so,.so-keys .key{white-space:nowrap;text-align:center;color:#242729;text-shadow:0 1px #fff;background-color:#e1e3e5;border:1px solid #adb3b9;border-radius:.272727em;min-width:1em;margin:0 .1em;padding:.1em .6em;font-family:Arial,Helvetica Neue,Helvetica,sans-serif;font-style:normal;line-height:1.4;text-decoration:none;display:inline-block;box-shadow:0 1px #0c0d0e33,inset 0 0 0 2px #fff}kbd.github,.github-keys kbd,.key.github,.github-keys .key{white-space:nowrap;text-align:center;color:#444d56;vertical-align:middle;box-sizing:border-box;min-width:1em;text-shadow:none;background-color:#fafbfc;border:1px solid #c6cbd1;border-bottom-color:#959da5;border-radius:.272727em;padding:.272727em .454545em;font-family:SFMono-Regular,Consolas,Liberation Mono,Menlo,Courier,monospace;font-size:68.75%;font-style:normal;line-height:.909091;text-decoration:none;display:inline-block;box-shadow:inset 0 -1px #959da5}",pb=Er((e=>{Object.defineProperty(e,"__esModule",{value:!0}),e.StoreController=void 0;var t=class{constructor(r,i){this.host=r,this.atom=i,r.addController(this)}hostConnected(){this.unsubscribe=this.atom.subscribe(()=>{this.host.requestUpdate()})}hostDisconnected(){var r;(r=this.unsubscribe)===null||r===void 0||r.call(this)}get value(){return this.atom.get()}};e.StoreController=t})),zl=Er((e=>{Object.defineProperty(e,"__esModule",{value:!0}),e.MultiStoreController=void 0;var t=class{constructor(r,i){this.host=r,this.atoms=i,r.addController(this)}hostConnected(){this.unsubscribes=this.atoms.map(r=>r.subscribe(()=>this.host.requestUpdate()))}hostDisconnected(){var r;(r=this.unsubscribes)===null||r===void 0||r.forEach(i=>i())}get values(){return this.atoms.map(r=>r.get())}};e.MultiStoreController=t})),gb=Er((e=>{Object.defineProperty(e,"__esModule",{value:!0}),e.useStores=void 0;var t=zl();function r(...i){return a=>class extends a{constructor(...s){super(...s),new t.MultiStoreController(this,i)}}}e.useStores=r})),mb=Er((e=>{Object.defineProperty(e,"__esModule",{value:!0}),e.withStores=void 0;var t=zl(),r=(i,a)=>class extends i{constructor(...l){super(...l),new t.MultiStoreController(this,a)}};e.withStores=r})),vb=Er((e=>{Object.defineProperty(e,"__esModule",{value:!0}),e.withStores=e.useStores=e.MultiStoreController=e.StoreController=void 0;var t=pb();Object.defineProperty(e,"StoreController",{enumerable:!0,get:function(){return t.StoreController}});var r=zl();Object.defineProperty(e,"MultiStoreController",{enumerable:!0,get:function(){return r.MultiStoreController}});var i=gb();Object.defineProperty(e,"useStores",{enumerable:!0,get:function(){return i.useStores}});var a=mb();Object.defineProperty(e,"withStores",{enumerable:!0,get:function(){return a.withStores}})})),Lo=vb(),q0=class extends Je{static{this.styles=yt`
    :host {
      display: inline-flex;
      vertical-align: middle;
      z-index: 100;
    }

    :host(:has(mov-dropdown[open])) {
      z-index: 110;
    }

    .button-group {
      display: flex;
      flex-wrap: wrap;
    }

    ::slotted(mov-button),
    ::slotted(mov-dropdown) {
      margin-inline-start: -1px;
      --mov-border-radius-m: 0;
    }

    ::slotted(mov-button:first-child),
    ::slotted(mov-dropdown:first-child) {
      margin-inline-start: 0;
      --mov-border-radius-m: 0.375rem 0 0 0.375rem;
    }

    ::slotted(mov-button:last-child),
    ::slotted(mov-dropdown:last-child) {
      --mov-border-radius-m: 0 0.375rem 0.375rem 0;
    }

    ::slotted(mov-button:first-child:last-child),
    ::slotted(mov-dropdown:first-child:last-child) {
      --mov-border-radius-m: 0.375rem;
    }

    /* Handling adjacent button groups visual merge */
    :host(.button-group-merged-start) {
      margin-inline-start: -1px;
    }
    :host(.button-group-merged-start) ::slotted(mov-button:first-child),
    :host(.button-group-merged-start) ::slotted(mov-dropdown:first-child) {
      --mov-border-radius-m: 0 0 0 0;
    }

    :host(.button-group-merged-end) ::slotted(mov-button:last-child),
    :host(.button-group-merged-end) ::slotted(mov-dropdown:last-child) {
      --mov-border-radius-m: 0 0 0 0;
    }

    ::slotted(mov-dropdown) {
      display: flex;
    }
  `}render(){return oe`
      <div
        class="button-group"
        role="group"
      >
        <slot></slot>
      </div>
    `}};q0=z([ot("mov-button-group")],q0);var Ca=49,bb=100,wb=class Kf{constructor(t){this.prevOffset=0,this.headroom="top",this.headerVisible=!0,this.handleScroll=xe.default.throttle(()=>{if(this.isAnyDropdownOpen()){this.prevOffset=window.scrollY;return}const i=X("header"),{scrollY:a}=window;let s="none";X("zoomMode")!=="height"&&a+window.innerHeight+bb>document.body.scrollHeight?s="end":a>this.prevOffset&&a>Ca?s="hide":i==="scroll"&&a<this.prevOffset&&a>Ca?s="show":i!=="click"&&a<=Ca&&(s="top");let l=!1;if(this.headroom!==s&&(this.headroom=s,l=!0),i==="scroll"){const h=s!=="hide";this.headerVisible!==h&&(this.headerVisible=h,l=!0)}l&&this.host.requestUpdate(),this.prevOffset=a},300),this.handleMouseMove=xe.default.throttle(i=>{if(this.isAnyDropdownOpen()){this.headerVisible||(this.headerVisible=!0,this.host.requestUpdate());return}if(["hover","scroll"].includes(X("header"))){const a=Kf.isMouseInsideRegion(i,window.innerWidth,Ca*1.5);this.headerVisible!==a&&(this.headerVisible=a,this.host.requestUpdate())}},300),this.toggleHeaderVisibility=()=>{X("header")==="click"&&(this.headerVisible=!this.headerVisible,this.host.requestUpdate())},this.host=t,t.addController(this);const r=X("header");X("zoomMode")==="height"&&["click","hover"].includes(r)&&(this.headerVisible=!1)}hostConnected(){window.addEventListener("scroll",this.handleScroll),window.addEventListener("mousemove",this.handleMouseMove)}hostDisconnected(){window.removeEventListener("scroll",this.handleScroll),window.removeEventListener("mousemove",this.handleMouseMove)}isAnyDropdownOpen(){if(!this.host.shadowRoot)return!1;const t=this.host.shadowRoot.querySelectorAll("mov-dropdown");for(const r of t)if(r.open)return!0;return!1}static isMouseInsideRegion(t,r,i){return t.clientX>=0&&t.clientX<=r&&t.clientY>=0&&t.clientY<=i}},_b=class{constructor(e){this.canvasContext=null,this.host=e,e.addController(this);const t=document.createElement("canvas");this.canvasContext=t.getContext("2d"),this.resizeObserver=new ResizeObserver(()=>this.update())}hostConnected(){}hostDisconnected(){this.resizeObserver.disconnect()}observe(e,t){!e||!t||(this.element=e,this.text=t,this.resizeObserver.disconnect(),this.resizeObserver.observe(this.element),this.update())}update(){if(!this.element||!this.text||!this.canvasContext){this.value=this.text,this.host.requestUpdate();return}const e=window.getComputedStyle(this.element);this.canvasContext.font=`${e.fontWeight} ${e.fontSize} ${e.fontFamily}`;const t=this.text,r=this.element.clientWidth;if(this.canvasContext.measureText(t).width<=r){this.value=t,this.host.requestUpdate();return}const i="...",a=r-this.canvasContext.measureText(i).width;let s="",l="";for(let h=1;h<t.length;h++){const c=t.substring(0,h),f=t.substring(t.length-h);if(this.canvasContext.measureText(c).width+this.canvasContext.measureText(f).width>a)break;s=c,l=f}this.value=`${s}${i}${l}`,this.host.requestUpdate()}};function Z0(e=window.location.href){Sr(vo(e))||(ye(`Bookmark Removed ${e}`),mo("bookmarks",t=>[...t.filter(r=>r.url!==e)]))}function yb(e){const t=e.currentTarget.value;ye(`Bookmark Removed ${t}`),lr.error({title:K("BOOKMARK_REMOVED"),duration:1e4}),Z0(t)}function kb(){$e("panel","bookmarks")}function j0(){const e=fe("currentPage"),t={name:fe("manga")?.title??document.documentElement.title??window.location.hostname,url:window.location.href,page:e,date:new Date().toISOString().slice(0,10)};vo(t.url)?(mo("bookmarks",r=>[...r.filter(i=>i.url!==t.url)]),lr.error({title:K("BOOKMARK_REMOVED"),duration:1e4})):(mo("bookmarks",r=>[...r,t]),lr.success({title:K("BOOKMARK_SAVED"),description:K("BOOKMARK_MESSAGE").replace("##num##",e.toString()),duration:1e4}))}function Dl(){$e("panel","none")}function Eb(){$e("panel","settings")}function Sb(){$e("panel","keybindings")}function Ab(e){const t={};xe.default.keys(e).forEach(r=>{const i=e[r].value;if(i){const a=i.value.split(",").map(s=>s.trim()).filter(s=>s!=="");t[r]=a.length>0?a:void 0}}),At("keybinds",t),$e("panel","keybindings"),U0()}function Mb(){$e("panel","keybindingsEditor")}var xb="#Header{background-color:var(--theme-background-color);z-index:900;flex-flow:row;justify-content:space-around;align-items:center;gap:10px;padding:0 20px;transition:transform .3s ease-in;display:flex;position:sticky;top:0;left:0;right:0;box-shadow:0 0 25px #00000080}#Header.click{padding-left:60px}@keyframes headroom{0%{transform:translateY(-100%)}to{transform:translateY(0%)}}#Header:not(.visible,.headroom-top,.fixed,.simple){animation:.3s ease-in reverse headroom;position:sticky;top:0;transform:translateY(-100%)}#Header.scroll.headroom-hide:not(.visible){animation:none;position:sticky;top:0;transform:translateY(-100%)}#Header.scroll.headroom-show,#Header.headroom-end,#Header.visible{animation:.3s ease-in headroom;position:sticky;top:0;transform:translateY(0%)}#Header.headroom-top{animation:none}#Header.fixed{animation:none;position:sticky;top:0;transform:translateY(0%)}#Header.simple{animation:none;position:static;top:0;transform:translateY(0%)}#menu{z-index:1;color:var(--theme-body-text-color);width:40px;height:40px;position:fixed}#menu:not(.click),#menu.hide{display:none}#menu.click{z-index:901;opacity:.8;top:25px;left:5px}#Toolbar{order:1}#GlobalFunctions{order:4}#ViewerTitle{order:2;justify-content:center;display:flex}#ZoomControl{flex-direction:column;order:3;align-items:center;gap:3px;min-width:100px;padding:10px 5px;display:flex}#MangaTitle{word-wrap:anywhere;white-space:nowrap;text-overflow:ellipsis;min-width:200px;max-width:40vw;margin:0;padding:2px;font-size:19px;font-weight:400;overflow:hidden}",K0="#Header.mobile,#Header.tablet{flex-flow:wrap;justify-content:center;gap:0;display:flex}.mobile #ViewerTitle,.tablet #ViewerTitle{order:4;min-height:auto}.mobile #Toolbar,.tablet #Toolbar{order:1}#Header.mobile{flex-flow:wrap;justify-content:center;align-items:center}#Header.mobile.click+#Chapter:not(.webcomic,.vertical){position:sticky}.tablet #MangaTitle,.mobile #MangaTitle{max-width:90vw}.mobile #ViewerTitle{order:3;height:auto;margin-top:0;padding:0}.mobile #GlobalFunctions,.tablet #GlobalFunctions{order:2}.mobile .PageFunctions{padding:0}.mobile .PageFunctions .PageButton.Bookmark{opacity:1}.mobile #GlobalFunctions #ZoomSlider,.tablet #GlobalFunctions #ZoomSlider,.mobile .PageFunctions .PageButton:not(.Bookmark),.tablet #Counters,.mobile #ZoomControl,.mobile #ZoomDropdown,.mobile #ViewDropdown,.mobile #FileDropdown :where(:nth-child(3),:nth-child(4)),.mobile #BookMode,.mobile #MangaMode,.tablet #BookMode,.tablet #MangaMode{display:none}",Oa=class extends Je{static{this.styles=[Se(xb),Se(K0),Se(V0),yt``]}constructor(){super(),this.headroomController=new wb(this),this.titleController=new _b(this)}updated(t){super.updated(t),t.has("manga")&&this.manga&&requestAnimationFrame(()=>{this.manga&&this.titleController.observe(this.mangaTitleElement,this.manga?.title??"Manga Online Viewer")})}render(){if(!this.manga)return oe``;const{headroom:t,headerVisible:r}=this.headroomController,i=X("keybinds"),a=s=>{if(fe("device")!=="desktop")return Be;const l=i[s];return!l||l.length===0?Be:l.map(h=>oe`<kbd slot="details">${h}</kbd>`)};return oe`
      <toggle-button
        id="menu"
        mode="burger"
        class="${kt({[X("header")]:!0,hide:["top","end"].includes(t)})}"
        ?active=${r}
        @toggle=${this.headroomController.toggleHeaderVisibility}
      >
      </toggle-button>
      <header
        id="Header"
        class="${kt({[X("header")]:!0,[`headroom-${t}`]:!0,visible:r&&["hide","none"].includes(t),[fe("device")]:!0})}"
      >
        <mov-button-group
          id="Toolbar"
          class="${kt({"button-group-merged-end":["mobile","tablet"].includes(fe("device"))})}"
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
              @click=${Eb}
            >
              <mov-icon
                slot="icon"
                name="IconSettings"
              ></mov-icon>
              ${K("SETTINGS")} ${a("SETTINGS")}
            </mov-dropdown-item>
            <mov-dropdown-item
              id="keybindings"
              @click=${Sb}
            >
              <mov-icon
                slot="icon"
                name="IconKeyboard"
              ></mov-icon>
              ${K("KEYBINDINGS")}
            </mov-dropdown-item>
            <mov-dropdown-item
              id="bookmarks"
              class="tablets"
              @click=${kb}
            >
              <mov-icon
                slot="icon"
                name="IconBookmarks"
              ></mov-icon>
              ${K("BOOKMARKS")}
            </mov-dropdown-item>
            <mov-divider></mov-divider>
            <mov-dropdown-item
              id="AutoScroll"
              class="${kt({running:fe("autoScroll")})}"
              @click=${Ma}
            >
              <mov-icon
                slot="icon"
                name="${fe("autoScroll")?"IconPlayerPause":"IconPlayerPlay"}"
              ></mov-icon>
              ${K("SCROLL_START")} ${a("SCROLL_START")}
            </mov-dropdown-item>
            <mov-dropdown-item
              id="pageControls"
              class="tablets phones"
              @click="${S3}"
              ?selected=${X("hidePageControls")}
            >
              <mov-icon
                slot="icon"
                name="IconListNumbers"
              ></mov-icon>
              ${K("TOGGLE_CONTROLS")} ${a("TOGGLE_CONTROLS")}
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
                name="IconApiBook"
              ></mov-icon>
            </mov-button>
            <mov-dropdown-item
              id="webComic"
              class="tablets"
              @click="${mr("WebComic")}"
              ?selected=${X("viewMode")==="WebComic"}
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
              @click="${mr("Vertical")}"
              ?selected=${X("viewMode")==="Vertical"}
            >
              <mov-icon
                slot="icon"
                name="IconArrowAutofitDown"
              ></mov-icon>
              ${K("VIEW_MODE_VERTICAL")} ${a("VIEW_MODE_VERTICAL")}
            </mov-dropdown-item>
            <mov-divider></mov-divider>
            <mov-dropdown-item
              id="ltrMode"
              @click="${mr("FluidLTR")}"
              ?selected=${X("viewMode")==="FluidLTR"}
            >
              <mov-icon
                slot="icon"
                name="IconArrowAutofitRight"
              ></mov-icon>
              ${K("VIEW_MODE_LEFT")} ${a("VIEW_MODE_LEFT")}
            </mov-dropdown-item>
            <mov-dropdown-item
              id="rtlMode"
              @click="${mr("FluidRTL")}"
              ?selected=${X("viewMode")==="FluidRTL"}
            >
              <mov-icon
                slot="icon"
                name="IconArrowAutofitLeft"
              ></mov-icon>
              ${K("VIEW_MODE_RIGHT")} ${a("VIEW_MODE_RIGHT")}
            </mov-dropdown-item>
            <mov-divider></mov-divider>
            <mov-dropdown-item
              id="BookMode"
              @click="${mr("Book")}"
              ?selected=${X("viewMode")==="Book"}
            >
              <mov-icon
                slot="icon"
                name="IconBookArrowRight"
              ></mov-icon>
              ${K("VIEW_MODE_BOOK")} ${a("VIEW_MODE_BOOK")}
            </mov-dropdown-item>
            <mov-dropdown-item
              id="MangaMode"
              @click="${mr("Manga")}"
              ?selected=${X("viewMode")==="Manga"}
            >
              <mov-icon
                slot="icon"
                name="IconBookArrowLeft"
              ></mov-icon>
              ${K("VIEW_MODE_MANGA")} ${a("VIEW_MODE_MANGA")}
            </mov-dropdown-item>
            <mov-divider></mov-divider>
            <mov-dropdown-item
              id="GalleryMode"
              @click="${mr("Gallery")}"
              ?selected=${X("viewMode")==="Gallery"}
            >
              <mov-icon
                slot="icon"
                name="IconLayoutDashboard"
              ></mov-icon>
              ${K("VIEW_MODE_GALLERY")} ${a("VIEW_MODE_GALLERY")}
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
              @click="${Ia()}"
            >
              <mov-icon
                slot="icon"
                name="IconZoomInArea"
              ></mov-icon>
              ${K("ENLARGE")} ${a("ENLARGE")}
            </mov-dropdown-item>
            <mov-dropdown-item
              id="restore"
              @click="${To("percent",100)}"
            >
              <mov-icon
                slot="icon"
                name="IconZoomPan"
              ></mov-icon>
              ${K("RESTORE")} ${a("RESTORE")}
            </mov-dropdown-item>
            <mov-dropdown-item
              id="reduce"
              @click="${Ia(-1)}"
            >
              <mov-icon
                slot="icon"
                name="IconZoomOutArea"
              ></mov-icon>
              ${K("REDUCE")} ${a("REDUCE")}
            </mov-dropdown-item>
            <mov-divider></mov-divider>
            <mov-dropdown-item
              id="fitWidth"
              @click="${To("width")}"
              ?selected=${X("zoomMode")==="width"}
            >
              <mov-icon
                slot="icon"
                name="IconArrowAutofitWidth"
              ></mov-icon>
              ${K("FIT_WIDTH")} ${a("FIT_WIDTH")}
            </mov-dropdown-item>
            <mov-dropdown-item
              id="fitHeight"
              @click="${To("height")}"
              ?selected=${X("zoomMode")==="height"}
            >
              <mov-icon
                slot="icon"
                name="IconArrowAutofitHeight"
              ></mov-icon>
              ${K("FIT_HEIGHT")} ${a("FIT_HEIGHT")}
            </mov-dropdown-item>
          </mov-dropdown>
        </mov-button-group>
        <mov-button-group
          id="GlobalFunctions"
          class="${kt({"button-group-merged-start":["mobile","tablet"].includes(fe("device"))})}"
        >
          <mov-button
            id="series"
            href="${this.manga.series??Be}"
            @click=${pi}
            title="${K("RETURN_CHAPTER_LIST")}"
            ?disabled=${!this.manga.series}
          >
            <mov-icon name="IconBooksReturn"></mov-icon>
          </mov-button>
          <mov-button
            id="download"
            title="${K("DOWNLOAD_ZIP")}"
            @click=${O0}
            ?disabled=${fe("download")!=="available"}
            ?loading=${fe("download")==="working"}
          >
            <mov-icon
              name="${fe("download")==="working"?"IconLoader2":"IconFileDownload"}"
            ></mov-icon>
          </mov-button>
          <mov-button
            id="prev"
            href="${this.manga.prev??Be}"
            title="${K("PREVIOUS_CHAPTER")}"
            @click=${pi}
            ?disabled=${!this.manga.prev}
          >
            <mov-icon name="IconArrowBigLeft"></mov-icon>
          </mov-button>
          <mov-button
            id="next"
            href="${this.manga.next??Be}"
            title="${K("NEXT_CHAPTER")}"
            @click=${pi}
            ?disabled=${!this.manga.next}
          >
            <mov-icon name="IconArrowBigRight"></mov-icon>
          </mov-button>
        </mov-button-group>
        <div id="ViewerTitle">
          <h1
            id="MangaTitle"
            title="${this.manga.title}"
          >
            ${this.titleController.value??this.manga.title}
          </h1>
        </div>
        <div id="ZoomControl">
          <output id="ZoomVal">
            Zoom:
            ${X("zoomMode")==="percent"?`${X("zoomValue")}%`:X("zoomMode")}
          </output>
          <mov-slider
            id="Zoom"
            name="Zoom"
            .value="${X("zoomValue")}"
            min="${X("minZoom")}"
            max="200"
            show-tooltip
            @input=${sb}
          ></mov-slider>
        </div>
      </header>
    `}};z([en("#MangaTitle")],Oa.prototype,"mangaTitleElement",void 0),z([j({type:Object})],Oa.prototype,"manga",void 0),Oa=z([ot("reader-header"),(0,Lo.useStores)(Ct,po,tr)],Oa);var Ib="#BookmarksPanel{text-align:center;--width:100vw}#BookmarksList{flex-direction:column;gap:5px;max-height:60vh;padding:0 5px;display:flex;overflow:auto}.bookmark-item{text-align:left;border-radius:5px;align-items:center;gap:1rem;padding:.75rem 1rem;transition:background-color .15s ease-in-out;display:flex}.bookmark-item:hover{background-color:var(--mov-color-fill-quiet,#8080801a)}.bookmark-info{flex-grow:1;min-width:0}.bookmark-name{font-weight:500}.bookmark-url{white-space:nowrap;text-overflow:ellipsis;color:color-mix(in oklab, var(--theme-body-text-color), transparent 30%);font-size:14px;text-decoration:none;display:block;overflow:hidden}.bookmark-url:hover{text-decoration:underline}.bookmark-details{text-align:right;width:90px;color:color-mix(in oklab, var(--theme-body-text-color), transparent 30%);flex-shrink:0;font-size:14px}.bookmark-details>div{padding:2px 0}.bookmark-actions{flex-shrink:0;gap:.5rem;display:flex}",Y0=class extends Je{static{this.styles=[Se(Ib)]}listBookmarks(){return xs(X("bookmarks"))?[K("LIST_EMPTY")]:X("bookmarks").map((t,r)=>oe`
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
              @click=${yb}
            >
              <mov-icon
                name="IconTrash"
                size="16px"
              ></mov-icon>
            </mov-button>
          </div>
        </div>
      `)}render(){return oe`
      <mov-dialog
        id="BookmarksPanel"
        ?open=${fe("panel")==="bookmarks"}
        light-dismiss
        @close=${Dl}
      >
        <mov-button
          class="Bookmark"
          title="${K("BOOKMARK")}"
          @click=${j0}
          slot="header-actions"
        >
          <mov-icon
            name="${vo()===void 0?"IconBookmark":"IconBookmarkOff"}"
            size="24px"
          ></mov-icon>
        </mov-button>
        <h2 slot="header">${K("BOOKMARKS")}</h2>
        <h2 slot="label">${K("BOOKMARKS")}</h2>
        <div id="BookmarksList">${this.listBookmarks()}</div>
      </mov-dialog>
    `}};Y0=z([ot("bookmark-panel"),(0,Lo.useStores)(Ct,po,tr)],Y0);function*Cb(e,t){const r=typeof t=="function";if(e!==void 0){let i=-1;for(const a of e)i>-1&&(yield r?t(i):t),i++,yield a}}var Ob="#KeybindingsPanel div{line-height:1.5em}#KeybindingsPanel #KeybindingsList{grid-template-columns:1fr 2fr;gap:5px;display:grid}#KeybindingsPanel .ControlButton{justify-content:center;align-items:center;gap:.5em;margin-left:3px;padding:5px 10px}#KeybindingsPanel label{display:ruby}#KeybindingsPanel input{width:100%;display:inline-block}#KeybindingsPanel #HotKeysRules{grid-column:span 2}",X0=class extends Je{constructor(...t){super(...t),this.keybindsRefs=xe.default.keys(X("keybinds")).reduce((r,i)=>(r[i]=zs(),r),{})}static{this.styles=[Se(Ob),Se(V0)]}keybindList(){const t=X("keybinds");return xe.default.keys(t).map(r=>{const i=t[r]?.length?Cb(t[r]?.map(a=>oe`<kbd class="dark">${a}</kbd>`)," / "):"";return oe`<span>${K(r)}:</span> <span>${i}</span>`})}keybindEditor(){const t=X("keybinds");return xe.default.keys(t).map(r=>oe`<label for="${r}">${K(r)}:</label>
          <input
            type="text"
            class="KeybindInput"
            id="${r}"
            name="${r}"
            value="${t[r]?.join(" , ")??Be}"
            ${Ns(this.keybindsRefs[r])}
          />`)}render(){return oe`
      <mov-drawer
        id="KeybindingsPanel"
        ?open=${fe("panel").startsWith("keybindings")}
        placement="end"
        @close=${Dl}
      >
        <h2 slot="label">${K("KEYBINDINGS")}</h2>
        <div
          class="controls"
          slot="header-actions"
        >
          ${fe("panel")==="keybindingsEditor"?oe` <mov-button
                id="SaveKeybindings"
                type="button"
                title="${K("SAVE_KEYBINDS")}"
                @click=${()=>Ab(this.keybindsRefs)}
              >
                <mov-icon
                  name="IconDeviceFloppy"
                  size="16px"
                  slot="start"
                ></mov-icon>
                ${K("BUTTON_SAVE")}
              </mov-button>`:oe` <mov-button
                id="EditKeybindings"
                type="button"
                title="${K("EDIT_KEYBINDS")}"
                @click=${Mb}
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
          ${fe("panel")==="keybindingsEditor"?this.keybindEditor():this.keybindList()}
        </div>
        <div id="HotKeysRules">${Dd(K("KEYBIND_RULES"))}</div>
      </mov-drawer>
    `}};X0=z([ot("keybindings-panel"),(0,Lo.useStores)(Ct,po,tr)],X0);function*Tb(e,t){if(e!==void 0){let r=0;for(const i of e)yield t(i,r++)}}function Ta(e,t=1){return Array(e).fill(0).map((r,i)=>i+1).filter(r=>r>=t)}function yi(e){const t=e.replace(/[\t\n\r]/gim,"").replace(/\s\s+/g," ");return`data:image/svg+xml;charset=UTF-8,${encodeURIComponent(t).replace(/\(/g,"%28").replace(/\)/g,"%29")}`}var La=e=>e%100===0?15:e%50===0?10:e%25===0?5:2.5;function Lb(e,t,r,i){let a="";for(let s=0;s<=e;s+=5){const l=fo` <line
      x1="${s}"
      y1="0"
      x2="${s}"
      y2="${La(s)}"
    />`;if(a+=l,s!==0&&s%50===0){const h=fo` <text
        x="${s}"
        y="25"
        text-anchor="middle"
        font-size="${La(s)}px"
      >
        ${s}
      </text>`;a+=h}}for(let s=0;s<=t;s+=5){const l=fo` <line
      x1="0"
      y1="${s}"
      x2="${La(s)}"
      y2="${s}"
    />`;if(a+=l,s!==0&&s%50===0){const h=fo` <text
        x="25"
        y="${s}"
        text-anchor="middle"
        dominant-baseline="middle"
        font-size="${La(s)}px"
      >
        ${s}
      </text>`;a+=h}}return fo` <svg
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
  </svg>`}function jt(e,t,r="#0F1C3F",i="#ECEAD9"){return yi(Lb(e,t,r,i))}var J0=xe.default.values(It).map(e=>e[900]),Q0=[400,600,900,1200,1400,1600,1970],eh=[600,800,1e3,1200,1400,2e3,2600];function Rb(){const e=Math.floor(Math.random()*Q0.length),t=Math.floor(Math.random()*eh.length),r=Math.floor(Math.random()*J0.length);return jt(Q0[e],eh[t],J0[r])}function th(e){e.deltaY&&(e.currentTarget.scrollLeft+=e.deltaY+e.deltaX,e.preventDefault())}function Pb(e){e.deltaY&&(e.currentTarget.scrollLeft-=e.deltaY-e.deltaX,e.preventDefault())}var $b=":host{--nav-collapsed-size:34px;--nav-expanded-size:200px;--header-height:80px}#Navigation{color:var(--theme-text-color);background-color:var(--theme-hightlight-color);box-sizing:border-box;white-space:nowrap;text-align:center;z-index:1000;gap:5px;line-height:0;transition:all .3s;display:flex;position:fixed;overflow:hidden}#Thumbnails{flex-grow:1;justify-content:flex-start;gap:5px;display:flex}#Navigation.horizontal #Thumbnails{flex-direction:row;overflow:auto hidden}#Navigation.vertical #Thumbnails{flex-direction:column;justify-content:flex-start;overflow:hidden auto}#Navigation.left #Thumbnails{direction:rtl}:host(:not([forceExpanded])) #Navigation:not(:hover) #Thumbnails{display:none}#NavigationCounters{text-align:center;white-space:nowrap;flex-shrink:0;justify-content:center;align-items:center;gap:.5rem;padding:5px;line-height:1rem;display:flex}#Navigation.horizontal{height:var(--nav-collapsed-size);flex-direction:column;width:100%;left:0;right:0}:host([forceExpanded]) #Navigation.horizontal,#Navigation.horizontal:hover{height:var(--nav-expanded-size)}#Navigation.bottom{bottom:0}#Navigation.vertical{width:var(--nav-collapsed-size);flex-direction:row;height:100%;transition:top .3s,height .3s,width .3s;bottom:0}:host([forceExpanded]) #Navigation.vertical,#Navigation.vertical:hover{width:var(--nav-expanded-size)}#Navigation.left{flex-direction:row-reverse;left:0}#Navigation.right{right:0}#Navigation.vertical #NavigationCounters{writing-mode:vertical-rl;transform:rotate(180deg)}#Navigation.right #NavigationCounters{transform:rotate(0)}#Navigation.vertical.header{top:var(--header-height);height:calc(100% - var(--header-height))}#Navigation .Thumbnail{justify-content:center;align-items:center;width:150px;height:150px;margin:0 5px;display:inline-flex;position:relative}.ThumbnailIndex{color:var(--mov-color-on-loud);background-color:var(--mov-color-fill-loud);opacity:.9;text-align:center;z-index:1;width:100%;font-weight:600;line-height:1.2rem;display:block;position:absolute;bottom:30%;left:0}.ThumbnailImg{cursor:pointer;background-position:50%;background-repeat:no-repeat;background-size:48px 48px;min-width:80px;max-width:150px;min-height:150px;max-height:150px;display:inline-block}",ki=class extends Je{constructor(...t){super(...t),this.mode="bottom",this.forceExpanded=!1,this.isHiding=!1}static{this.styles=[Se($b),yt`
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
        background-image: url('${Se(yi(Vs))}');
      }

      .Thumbnail .ThumbnailImg.imgBroken {
        background-image: url('${Se(yi(qs))}');
      }
    `]}willUpdate(t){t.has("mode")&&(this.isHiding=!0)}updated(t){t.has("mode")&&this.isHiding&&setTimeout(()=>{this.isHiding=!1},50)}render(){if(this.mode==="disabled")return Be;const t=fe("manga"),r={horizontal:this.mode==="bottom",vertical:this.mode!=="bottom",left:this.mode==="left",right:this.mode==="right",bottom:this.mode==="bottom",hiding:this.isHiding},i=fe("images")||{},a=xe.default.keys(i).filter(s=>{const l=parseInt(s,10);return l>=(t?.begin??1)&&l<=(t?.pages??1)&&i[l]?.status==="loaded"}).length;return oe`
      <nav
        id="Navigation"
        class="${kt(r)}"
      >
        <div
          id="NavigationCounters"
          class="ControlLabel"
        >
          ${J4}
          <i>${a}</i> /
          <b> ${(t?.pages??1)-((t?.begin??1)-1)} </b>
          ${K("PAGES_LOADED")}
          <span>: ${fe("currentPage")}</span>
        </div>
        <div
          id="Thumbnails"
          @wheel=${this.mode==="bottom"?th:null}
        >
          ${Tb(Ta(t?.pages??1,t?.begin??1),s=>oe` <figure
                id="Thumbnail${s}"
                class="Thumbnail"
                role="button"
                tabindex="0"
                title="Go to page ${s}"
                @click=${()=>x3(s)}
              >
                <img
                  id="ThumbnailImg${s}"
                  alt=""
                  class="ThumbnailImg"
                  src=${fe("images")?.[s]?.src??Be}
                />
                <figcaption class="ThumbnailIndex">${s}</figcaption>
              </figure>`)}
        </div>
      </nav>
    `}};z([j({type:String})],ki.prototype,"mode",void 0),z([j({type:Boolean})],ki.prototype,"forceExpanded",void 0),z([Dt()],ki.prototype,"isHiding",void 0),ki=z([ot("navbar-thumbnails"),(0,Lo.useStores)(Ct,po,tr)],ki);function zb(){const e=qn()?"true":"false";return oe` <div class="ControlLabel">
    ${K("SCOPE")}
    <segmented-control
      .value=${e}
      @change=${G3}
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
  </div>`}function Db(){return uo.map(e=>oe`
      <option
        value="${e.ID}"
        ?selected=${X("locale")===e.ID}
      >
        ${e.NAME}
      </option>
    `)}function Nb(){return oe` <div class="ControlLabel locale">
    ${K("LANGUAGE")}
    <select
      id="locale"
      @change="${W3}"
    >
      ${Db()}
    </select>
  </div>`}var Bb=()=>oe`${zb()} ${Nb()}`;function Hb(){return oe`
    <div class="ControlLabel loadMode">
      ${K("DEFAULT_LOAD_MODE")}
      <select
        id="loadMode"
        @change="${U3}"
      >
        <option
          value="wait"
          ?selected=${X("loadMode")==="wait"}
        >
          ${K("LOAD_MODE_NORMAL")}
        </option>
        <option
          value="always"
          ?selected=${X("loadMode")==="always"}
        >
          ${K("LOAD_MODE_ALWAYS")}
        </option>
        <option
          value="never"
          ?selected=${X("loadMode")==="never"}
        >
          ${K("LOAD_MODE_NEVER")}
        </option>
      </select>
    </div>
  `}function Fb(){return oe`
    <div class="ControlLabel PagesPerSecond">
      ${K("LOAD_SPEED")}
      <select
        id="PagesPerSecond"
        @change="${X3}"
      >
        <option
          value="Safe"
          ?selected=${X("loadSpeed")==="Safe"}
        >
          ${K("SLOWLY")} (Safe)
        </option>
        <option
          value="Standard"
          ?selected=${X("loadSpeed")==="Standard"}
        >
          ${K("NORMAL")} (Standard)
        </option>
        <option
          value="Faster"
          ?selected=${X("loadSpeed")==="Faster"}
        >
          ${K("FAST")} (Faster)
        </option>
        <option
          value="Extreme"
          ?selected=${X("loadSpeed")==="Extreme"}
        >
          ${K("EXTREME")} (Extreme)
        </option>
        <option
          value="All"
          ?selected=${X("loadSpeed")==="All"}
        >
          ${K("ALL_PAGES")} (All)
        </option>
      </select>
    </div>
  `}var Gb=()=>oe`${Hb()} ${Fb()}`;function Wb(){return oe`
    <div class="ControlLabel fitIfOversize">
      ${K("FIT_WIDTH_OVERSIZED")}
      <mov-switch
        name="fitIfOversize"
        ?checked=${X("fitWidthIfOversize")}
        @change=${V3}
      ></mov-switch>
    </div>
    <div class="ControlLabel downloadZip">
      ${K("DOWNLOAD_IMAGES")}
      <mov-switch
        name="downloadZip"
        ?checked=${X("downloadZip")}
        @change=${j3}
      ></mov-switch>
    </div>
    <div class="ControlLabel hidePageControls">
      ${K("HIDE_CONTROLS")}
      <mov-switch
        name="hidePageControls"
        ?checked=${X("hidePageControls")}
        @change=${eb}
      ></mov-switch>
    </div>
    <div class="ControlLabel lazyLoadImages">
      ${K("LAZY_LOAD_IMAGES_ENABLE")}
      <mov-switch
        name="lazyLoadImages"
        ?checked=${X("lazyLoadImages")}
        @change=${K3}
      ></mov-switch>
    </div>
  `}function Ub(){return oe`
    <div
      class="${kt({ControlLabel:!0,lazyStart:!0,ControlLabelItem:!0,show:X("lazyLoadImages")})}"
    >
      <span>
        ${K("LAZY_LOAD_IMAGES")}
        <output
          id="lazyStartVal"
          class="RangeValue"
          for="lazyStart"
        >
          ${X("lazyStart")}
        </output>
      </span>
      <mov-slider
        name="lazyStart"
        id="lazyStart"
        .value="${X("lazyStart")}"
        min="5"
        max="100"
        step="5"
        show-tooltip
        show-ticks
        tick-count="3"
        @input="${Y3}"
      ></mov-slider>
    </div>
  `}function Vb(){return oe`
    <div class="ControlLabel headerType">
      ${K("HEADER_TYPE")}
      <segmented-control
        .value=${X("header")}
        @change=${tb}
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
  `}function qb(){return oe`
    <div class="ControlLabel pagination">
      ${K("PAGINATION_TYPE")}
      <segmented-control
        .value=${X("pagination")}
        @change=${Z3}
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
  `}function Zb(){return oe`
    <div class="ControlLabel navbarType">
      ${K("NAVBAR_TYPE")}
      <segmented-control
        .value=${X("navbar")}
        @change=${q3}
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
  `}function jb(){return oe`
    <div class="ControlLabel autoScroll">
      <span>
        ${K("AUTO_SCROLL_HEIGHT")}
        <output
          id="scrollHeightVal"
          class="RangeValue"
          for="scrollHeight"
        >
          ${X("scrollHeight")}px
        </output>
      </span>
      <mov-slider
        name="scrollHeight"
        id="scrollHeight"
        .value="${X("scrollHeight")}"
        min="1"
        max="${Math.ceil(window.innerHeight/200)*100}"
        step="1"
        show-tooltip
        show-ticks
        tick-count="5"
        @input="${rb}"
      ></mov-slider>
    </div>
  `}var Kb=()=>oe`${Wb()} ${qb()} ${Ub()} ${Vb()} ${Zb()} ${jb()}`;function Yb(){const e=X("colorScheme")==="dark";At("colorScheme",e?"light":"dark"),document.documentElement.classList.remove(e?"dark":"light"),document.documentElement.classList.add(X("colorScheme"))}function Ra(e){At("theme",e instanceof CustomEvent?e.detail.value:e.currentTarget.value)}function Xb(){return oe`
    <div class="ControlLabel ColorSchemeSelector">
      <label>${K("COLOR_SCHEME")}</label>
      <toggle-button
        id="ColorScheme"
        mode="theme"
        @click=${Yb}
        ?active=${X("colorScheme")==="dark"}
      >
      </toggle-button>
    </div>
    <div class="ControlLabel ThemeSelector">
      <label>${K("THEME_COLOR")}</label>
      <mov-color-picker
        id="ThemeHex"
        .value="${X("theme")}"
        title="${X("theme")}"
        @input=${Ra}
        .swatches=${xe.default.values(Il)}
      ></mov-color-picker>
    </div>
    <color-palette
      .baseColor="${X("theme")}"
      mode="steps"
      .selected=${X("theme")}
      @change="${Ra}"
    ></color-palette>
    <span id="ColorRecommendations">
      ${xe.default.values(Il).map(e=>oe`<color-swatch
            .color="${e}"
            .selected=${X("theme")}
            @change=${Ra}
          ></color-swatch>`)}
    </span>
    <details class="ControlLabel">
      <summary>${K("THEME_HUE")} & ${K("THEME_SHADE")}</summary>
      <color-panel
        .selected=${X("theme")}
        @change=${Ra}
      ></color-panel>
    </details>
  `}function Jb(){return oe` <div class="ControlLabel DefaultZoomMode">
    ${K("DEFAULT_ZOOM_MODE")}
    <segmented-control
      .value=${X("zoomMode")}
      @change=${ib}
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
  </div>`}function Qb(){return oe`
    <div
      class="${kt({ControlLabel:!0,zoomValue:!0,ControlLabelItem:!0,show:X("zoomMode")==="percent"})}"
    >
      <span>
        ${K("DEFAULT_ZOOM")}
        <output
          id="zoomValueVal"
          class="RangeValue"
          for="zoomValue"
        >
          ${X("zoomValue")}%
        </output>
      </span>
      <mov-slider
        name="zoomValue"
        id="zoomValue"
        .value="${X("zoomValue")}"
        min="5"
        max="200"
        step="5"
        show-tooltip
        show-ticks
        tick-count="5"
        @input="${ab}"
      ></mov-slider>
    </div>
  `}function e6(){return oe`
    <div class="ControlLabel minZoom">
      <span>
        ${K("MINIMUM_ZOOM")}
        <output
          id="minZoomVal"
          class="RangeValue"
          for="minZoom"
        >
          ${X("minZoom")}%
        </output>
      </span>
      <mov-slider
        name="minZoom"
        id="minZoom"
        .value="${X("minZoom")}"
        min="25"
        max="100"
        step="5"
        show-tooltip
        show-ticks
        tick-count="4"
        @input="${Q3}"
      ></mov-slider>
    </div>
  `}function t6(){return oe`
    <div class="ControlLabel zoomStep">
      <span>
        ${K("ZOOM_STEP")}
        <output
          id="zoomStepVal"
          class="RangeValue"
          for="zoomStep"
        >
          ${X("zoomStep")}%
        </output>
      </span>
      <mov-slider
        name="zoomStep"
        id="zoomStep"
        .value="${X("zoomStep")}"
        min="10"
        max="50"
        step="5"
        show-tooltip
        show-ticks
        tick-count="5"
        @input="${J3}"
      ></mov-slider>
    </div>
  `}function r6(){return oe`
    <div class="ControlLabel viewMode">
      ${K("DEFAULT_VIEW_MODE")}
      <segmented-control
        .value=${X("viewMode")}
        @change=${lb}
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
        <segmented-control-option
            value="Book"
            label=${K("VIEW_MODE_BOOK")}
            icon="IconBookArrowRight"
        ></segmented-control-option>
        <segmented-control-option
            value="Manga"
            label=${K("VIEW_MODE_MANGA")}
            icon="IconBookArrowLeft"
        ></segmented-control-option>
        <segmented-control-option
            value="Gallery"
            label=${K("VIEW_MODE_GALLERY")}
            icon="IconLayoutDashboard"
        ></segmented-control-option>
      </segmented-control>
    </div>
  `}var n6=()=>oe`${Jb()} ${Qb()} ${e6()} ${t6()} ${r6()}`,o6="#SettingsPanel{color:var(--theme-text-color)}#SettingsPanel fieldset{border:1px solid var(--theme-body-text-color);border-radius:10px;padding:3px}#SettingsPanel .ControlLabel{flex-flow:wrap;justify-content:space-between;align-items:center;padding:2px;display:flex}#SettingsPanel .ControlLabelItem{justify-content:space-between;align-items:center;display:flex}#SettingsPanel .ControlLabelItem:not(.show){display:none}#SettingsPanel input[type=range]{width:100%}#SettingsPanel .RangeValue{color:var(--mov-color-on-loud);text-align:center;background:var(--mov-color-fill-loud);border-radius:3px;margin-left:8px;padding:2px 5px;line-height:20px;display:inline-block}#SettingsPanel datalist{flex-direction:row;justify-content:space-between;width:100%;display:flex}#SettingsPanel datalist option{writing-mode:vertical-lr;padding:0}#ThemeSelector{width:110px}#ColorRecommendations{flex-flow:wrap;gap:2px;display:flex}#Chapter:not(.Vertical)~#SettingsPanel .verticalSeparator{display:none}#ColorScheme{min-width:28px;min-height:28px;padding:5px}#ResetSettings,#ResetSettings::part(base){width:100%}",rh=class extends Je{static{this.styles=[yt`
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
    `,Se(o6)]}render(){return oe`
      <mov-drawer
        id="SettingsPanel"
        ?open=${fe("panel")==="settings"}
        @close=${Dl}
        placement="start"
        class="${fe("device")}"
      >
        <h2 slot="label">${K("SETTINGS")}</h2>
        <mov-button
          id="ResetSettings"
          @click="${G5}"
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
            ${Bb()}
          </fieldset>
          <fieldset id="SettingsPanelTheme">
            <legend>${K("THEME")}</legend>
            ${Xb()}
          </fieldset>
          <fieldset id="SettingsPanelLoading">
            <legend>${K("LOADING")}</legend>
            ${Gb()}
          </fieldset>
          <fieldset id="SettingsPanelZoom">
            <legend>${K("ZOOM")}</legend>
            ${n6()}
          </fieldset>
          <fieldset id="SettingsPanelOthers">
            <legend>${K("OTHERS")}</legend>
            ${Kb()}
          </fieldset>
        </div>
      </mov-drawer>
    `}};rh=z([ot("settings-panel"),(0,Lo.useStores)(Ct,po,tr)],rh);function i6(e){return new Promise(function(t,r){var i=new FileReader,a=typeof i.readAsBinaryString=="function";i.onloadend=function(){var s=i.result||"";if(a)return t(s);t(l6(s))},i.onerror=r,a?i.readAsBinaryString(e):i.readAsArrayBuffer(e)})}function a6(e){return i6(e).then(btoa)}function s6(e){return a6(e).then(function(t){return"data:"+e.type+";base64,"+t})}function l6(e){for(var t="",r=new Uint8Array(e),i=r.byteLength,a=-1;++a<i;)t+=String.fromCharCode(r[a]);return t}async function c6(e,t){ye("Fetching page: ",e);try{const r=await(await fetch(e)).text();return new DOMParser().parseFromString(r,t)}catch(r){throw ye("Failed to fetch page: ",r),r}}async function d6(e){return c6(e,"text/html")}async function u6(e,t,r){try{return(await d6(e)).querySelector(t)?.getAttribute(r)}catch(i){return ye("Failed to get element attribute: ",i),null}}var h6=class{constructor(e,t){this.queue=[],this.activeCount=0,this.lastRunTime=0;const r={Safe:{concurrency:5,delay:1e3},Standard:{concurrency:5,delay:500},Faster:{concurrency:10,delay:500},Extreme:{concurrency:10,delay:250},All:{concurrency:20,delay:50}}[e];this.maxConcurrency=r.concurrency,this.minDelay=t??r.delay}add(e){this.queue.push(e),this.runNext()}async runNext(){if(this.activeCount>=this.maxConcurrency||this.queue.length===0)return;const e=Date.now()-this.lastRunTime;if(e<this.minDelay){setTimeout(()=>this.runNext(),this.minDelay-e);return}const t=this.queue.shift();if(t){this.activeCount+=1,this.lastRunTime=Date.now();try{await t()}finally{this.activeCount-=1,this.runNext()}}}},Nl;function f6(e){if(e){let t=e.trim();return t.startsWith("//")&&(t=`https:${t}`),t}return""}async function Pa(e,t,r){const i=fe("images")?.[t];i?.status&&i.status!=="pending"||(cr(t,()=>({status:"loading"})),Nl.add(async()=>{let a=f6(r),s;try{const l=await fetch(a,e.fetchOptions);if(l.ok){const h=l.headers.get("content-type");h?.startsWith("image/")?(s=await l.blob(),a=await s6(s)):ye("Fetched content is not an image",h)}else ye("Fetch failed with status",l.status)}catch(l){ye("Failed to fetch image",l)}cr(t,()=>({src:a,blob:s,status:"loaded"})),qt("Loaded Image:",t,"Source:",a)}),e.pages===t&&Z0())}async function nh(e,t,r){const i=fe("images")?.[t];i?.status&&i.status!=="pending"||(cr(t,()=>({status:"loading"})),Nl.add(async()=>{try{const a=await u6(r,e.img,e.lazyAttr??"src");a?(cr(t,()=>({status:"pending"})),await Pa(e,t,a)):cr(t,()=>({status:"error"}))}catch(a){ye("Failed to get page attribute",a),cr(t,()=>({status:"error"}))}}))}function oh(e,t){Ta(t.pages,e).filter((r,i)=>!(t.lazy??X("lazyLoadImages"))||i<=X("lazyStart")).forEach(r=>{nh(t,r,t.listPages[r-1])})}function ih(e,t){Ta(t.pages,e).filter((r,i)=>!(t.lazy??X("lazyLoadImages"))||i<=X("lazyStart")).forEach(r=>{Pa(t,r,t.listImages[r-1])})}async function p6(){await Is(()=>fe("manga")!==void 0);const e=fe("manga"),t=e.begin??1;Nl=new h6(X("loadSpeed"),e.timer),qt("Loading Images"),qt(`Speed: ${X("loadSpeed")}`),qt(`Lazy: ${e.lazy??X("lazyLoadImages")}, Starting from: ${X("lazyStart")}`),En(),Cd(e)?(qt("Method: Images:",e.listImages),ih(t,e)):Od(e)?(qt("Method: Pages:",e.listPages),oh(t,e)):Hp(e)?(qt("Method: Brute Force"),e.bruteForce({begin:t,addImg:Pa,loadImages(r){ih(t,{...e,listImages:r})},loadPages(r,i,a){oh(t,{...e,listPages:r,img:i,lazyAttr:a})},wait:0})):ye("No Loading Method Found"),tr.listen((r,i,a)=>{if(a==="currentPage"&&r.currentPage>i.currentPage)for(let s=r.currentPage;s<Math.min(r.currentPage+5,e.pages+1);s++)r.images?.[s]?.src!==void 0||r.images?.[s]?.status==="loading"||(Cd(e)?Pa(e,s,e.listImages[s-1]):Od(e)&&nh(e,s,e.listPages[s-1]))})}function g6(){const e=fe("images");if(!e)return null;const t=X("viewMode"),r=t==="FluidLTR"||t==="FluidRTL",i=t==="FluidRTL",a=window.innerHeight/2,s=window.innerWidth/2;let l=null;for(const h in e){const c=e[h].ref?.value;if(!c)continue;const f=c?.getBoundingClientRect();let p;r?i?p=f.right:p=f.left:p=f.top,(r?p<=s:p<=a)&&(!l||p>l.edge)&&(l={index:parseInt(h,10),edge:p})}return l?l.index:fe("manga")?.begin??1}function ah(){const e=g6();e!=null&&fe("currentPage")!==e&&$e("currentPage",e)}function m6(){const e=xe.default.throttle(()=>{requestAnimationFrame(ah)},100);window.addEventListener("scroll",e,{passive:!0}),window.addEventListener("resize",e),fe("chapter").value?.addEventListener("scroll",e,{passive:!0}),requestAnimationFrame(ah)}function sh(){if(!fe("chapter").value){setTimeout(sh,50);return}m6()}var lh=xe.default.debounce(()=>{$e("device",Zo()),En()},200);async function v6(){await Is(()=>fe("manga")!==void 0),U0(),window.addEventListener("resize",lh),window.addEventListener("orientationchange",lh),H3(),sh()}var b6=Er(((e,t)=>{(function(r,i){typeof define=="function"&&define.amd?define(i):typeof e=="object"?t.exports=i():r.NProgress=i()})(e,function(){var r={};r.version="0.2.0";var i=r.settings={minimum:.08,easing:"ease",positionUsing:"",speed:200,trickle:!0,trickleRate:.02,trickleSpeed:800,showSpinner:!0,barSelector:'[role="bar"]',spinnerSelector:'[role="spinner"]',parent:"body",template:'<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'};r.configure=function(v){var E,y;for(E in v)y=v[E],y!==void 0&&v.hasOwnProperty(E)&&(i[E]=y);return this},r.status=null,r.set=function(v){var E=r.isStarted();v=a(v,i.minimum,1),r.status=v===1?null:v;var y=r.render(!E),S=y.querySelector(i.barSelector),x=i.speed,O=i.easing;return y.offsetWidth,h(function(L){i.positionUsing===""&&(i.positionUsing=r.getPositioningCSS()),c(S,l(v,x,O)),v===1?(c(y,{transition:"none",opacity:1}),y.offsetWidth,setTimeout(function(){c(y,{transition:"all "+x+"ms linear",opacity:0}),setTimeout(function(){r.remove(),L()},x)},x)):setTimeout(L,x)}),this},r.isStarted=function(){return typeof r.status=="number"},r.start=function(){r.status||r.set(0);var v=function(){setTimeout(function(){r.status&&(r.trickle(),v())},i.trickleSpeed)};return i.trickle&&v(),this},r.done=function(v){return!v&&!r.status?this:r.inc(.3+.5*Math.random()).set(1)},r.inc=function(v){var E=r.status;return E?(typeof v!="number"&&(v=(1-E)*a(Math.random()*E,.1,.95)),E=a(E+v,0,.994),r.set(E)):r.start()},r.trickle=function(){return r.inc(Math.random()*i.trickleRate)},(function(){var v=0,E=0;r.promise=function(y){return!y||y.state()==="resolved"?this:(E===0&&r.start(),v++,E++,y.always(function(){E--,E===0?(v=0,r.done()):r.set((v-E)/v)}),this)}})(),r.render=function(v){if(r.isRendered())return document.getElementById("nprogress");p(document.documentElement,"nprogress-busy");var E=document.createElement("div");E.id="nprogress",E.innerHTML=i.template;var y=E.querySelector(i.barSelector),S=v?"-100":s(r.status||0),x=document.querySelector(i.parent),O;return c(y,{transition:"all 0 linear",transform:"translate3d("+S+"%,0,0)"}),i.showSpinner||(O=E.querySelector(i.spinnerSelector),O&&m(O)),x!=document.body&&p(x,"nprogress-custom-parent"),x.appendChild(E),E},r.remove=function(){w(document.documentElement,"nprogress-busy"),w(document.querySelector(i.parent),"nprogress-custom-parent");var v=document.getElementById("nprogress");v&&m(v)},r.isRendered=function(){return!!document.getElementById("nprogress")},r.getPositioningCSS=function(){var v=document.body.style,E="WebkitTransform"in v?"Webkit":"MozTransform"in v?"Moz":"msTransform"in v?"ms":"OTransform"in v?"O":"";return E+"Perspective"in v?"translate3d":E+"Transform"in v?"translate":"margin"};function a(v,E,y){return v<E?E:v>y?y:v}function s(v){return(-1+v)*100}function l(v,E,y){var S;return i.positionUsing==="translate3d"?S={transform:"translate3d("+s(v)+"%,0,0)"}:i.positionUsing==="translate"?S={transform:"translate("+s(v)+"%,0)"}:S={"margin-left":s(v)+"%"},S.transition="all "+E+"ms "+y,S}var h=(function(){var v=[];function E(){var y=v.shift();y&&y(E)}return function(y){v.push(y),v.length==1&&E()}})(),c=(function(){var v=["Webkit","O","Moz","ms"],E={};function y(L){return L.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,function(N,Y){return Y.toUpperCase()})}function S(L){var N=document.body.style;if(L in N)return L;for(var Y=v.length,Z=L.charAt(0).toUpperCase()+L.slice(1),ie;Y--;)if(ie=v[Y]+Z,ie in N)return ie;return L}function x(L){return L=y(L),E[L]||(E[L]=S(L))}function O(L,N,Y){N=x(N),L.style[N]=Y}return function(L,N){var Y=arguments,Z,ie;if(Y.length==2)for(Z in N)ie=N[Z],ie!==void 0&&N.hasOwnProperty(Z)&&O(L,Z,ie);else O(L,Y[1],Y[2])}})();function f(v,E){return(typeof v=="string"?v:b(v)).indexOf(" "+E+" ")>=0}function p(v,E){var y=b(v),S=y+E;f(y,E)||(v.className=S.substring(1))}function w(v,E){var y=b(v),S;f(v,E)&&(S=y.replace(" "+E+" "," "),v.className=S.substring(1,S.length-1))}function b(v){return(" "+(v.className||"")+" ").replace(/\s+/gi," ")}function m(v){v&&v.parentNode&&v.parentNode.removeChild(v)}return r})})),w6=Hi(b6(),1),_6=/^blob:(.+?)\/(.+)$/;function y6(e){return/^data:image\/(png|jpg|jpeg|gif|svg)/.test(e)}function k6(e){return _6.test(e)}function E6(e,t){const r=e.replace(/[?&]forceReload=\d+$/,"");return`${r+(r.includes("?")?"&":"?")}forceReload=${t}`}function ch(e,t){const r=fe("images")?.[e];if(!r?.src)return;const i=(r.reload??0)+1;if(i>X("maxReload")){ye(`Stopped reloading Page ${e} after ${i} attempts`);return}if(ye(`Reloading Page ${e} (Attempt ${i})`,t),t?.removeAttribute("src"),y6(r.src)||k6(r.src))cr(e,()=>({reload:i})),t?.setAttribute("src",r.src);else{const a=E6(r.src,i);cr(e,()=>({reload:i,src:a})),t?.setAttribute("src",a)}}function S6(e){const t=e.currentTarget,r=parseInt(t.value,10),i=fe("images")?.[r]?.ref?.value;i&&ch(r,i)}function A6(e){const t=e.currentTarget;cr(parseInt(t.value,10),r=>({hide:!r.hide}))}function M6(e){const t=e.currentTarget;cr(parseInt(t.id.replace("PageImg",""),10),h=>({...G0({naturalWidth:t.naturalWidth,naturalHeight:t.naturalHeight}),status:"loaded",doublePage:t.naturalWidth>t.naturalHeight}));const r=fe("manga"),i=fe("images")||{},a=xe.default.keys(i).filter(h=>{const c=parseInt(h,10);return c>=(r?.begin??1)&&c<=(r?.pages??1)&&i[c]?.status==="loaded"}).length,s=(r?.pages??1)-((r?.begin??1)-1),l=Math.floor(a/s*100);document.title=`(${l}%) ${fe("manga")?.title}`,w6.default.configure({showSpinner:!1}).set(a/s),ye(`Progress: ${l}%`),a===s&&(ye("Images Loading Complete"),$e("download","available"),X("downloadZip")&&O0())}function x6(e){const t=e.currentTarget;if(xs(t.getAttribute("src")))return;const r=parseInt(t.id.replace("PageImg",""),10);cr(r,()=>({status:"error"})),ch(r,t)}function I6(e){const t=e.currentTarget,r=parseInt(t.value,10),i=fe("images"),a=fe("images")?.[r];a?.naturalWidth&&$e("images",{...i,[r]:{...a,width:(a?.width||a?.naturalWidth)*(1+X("zoomStep")/100),height:void 0}})}function C6(e){const t=e.currentTarget,r=parseInt(t.value,10),i=fe("images"),a=fe("images")?.[r];a?.naturalWidth&&$e("images",{...i,[r]:{...a,width:(a?.width||a?.naturalWidth)*(1-X("zoomStep")/100),height:void 0}})}function O6(e){const t=e.currentTarget,r=parseInt(t.value,10),i=fe("images"),a=fe("images")?.[r];a&&$e("images",{...i,[r]:{...a,width:void 0,height:void 0}})}function T6(e){const t=e.currentTarget,r=parseInt(t.value,10),i=fe("images"),a=fe("images")?.[r];a&&$e("images",{...i,[r]:{...a,width:window.innerWidth+(X("navbar")==="left"||X("navbar")==="right"?-34:0),height:void 0}})}function L6(e){const t=e.currentTarget,r=parseInt(t.value,10),i=fe("images"),a=fe("images")?.[r];a&&$e("images",{...i,[r]:{...a,width:void 0,height:window.innerHeight+(X("navbar")==="bottom"?-34:0)}})}function R6(e){const t=fe("images")?.[e],r=X("viewMode").match(/^(Book|Manga)$/),i=X("viewMode")==="Gallery",a=X("viewMode").startsWith("Fluid"),s=X("navbar")==="bottom";return{width:t?.width?`${t.width}px`:"auto",height:t?.height?`${t.height}px`:"auto","max-height":a?`${window.innerHeight+(s?-34:0)}px`:void 0,"min-width":!r&&!i?`${X("minZoom")}vw`:void 0}}var P6=(e,t)=>Ta(e,t).map(r=>{fe("images")?.[r]?.ref||cr(r,c=>({ref:zs()}));let i=0;for(let c=r-1;c>=t&&!fe("images")?.[c].doublePage;c--)fe("images")?.[c].doublePage||i++;const a=fe("images")?.[r].doublePage??!1,s=X("viewMode")==="Book",l=!a&&(s?i%2===0:i%2===1),h=!a&&(s?i%2===1:i%2===0);return oe`
      <div
        id="Page${r}"
        class="${kt({MangaPage:!0,hide:!!fe("images")?.[r].hide,DoublePage:a,LeftPage:l&&!a,RightPage:h&&!a})}"
      >
        <div class="PageFunctions">
          <button
            class="Bookmark PageButton"
            title="${K("BOOKMARK")}"
            @click=${j0}
            value="${r}"
          >
            ${vo()?X4:Y4}
          </button>
          <button
            class="ZoomIn PageButton"
            title="${K("ZOOM_IN")}"
            @click=${I6}
            value="${r}"
          >
            ${o3}
          </button>
          <button
            class="ZoomRestore PageButton"
            title="${K("ZOOM_RESET")}"
            @click=${O6}
            value="${r}"
          >
            ${n3}
          </button>
          <button
            class="ZoomOut PageButton"
            title="${K("ZOOM_OUT")}"
            @click=${C6}
            value="${r}"
          >
            ${i3}
          </button>
          <button
            class="ZoomHeight PageButton"
            title="${K("ZOOM_HEIGHT")}"
            @click=${L6}
            value="${r}"
          >
            ${j4}
          </button>
          ${X("viewMode").match(/^(Book|Manga)$/)?oe`
            <button
              class="DoublePage PageButton"
              title="${K("DOUBLE_PAGE")}"
              @click=${()=>{cr(r,c=>({doublePage:!c.doublePage}))}}
              value="${r}"
            >
              ${r3}
            </button>`:oe`
              <button
                class="ZoomWidth PageButton"
                title="${K("ZOOM_WIDTH")}"
                @click=${T6}
                value="${r}"
              >
                ${K4}
              </button>`}
          <button
            class="Hide PageButton"
            title="${K("HIDE")}"
            @click=${A6}
            value="${r}"
          >
            ${fe("images")?.[r].hide?Q4:e3}
          </button>
          <button
            class="Reload PageButton"
            title="${K("RELOAD")}"
            @click=${S6}
            value="${r}"
          >
            ${t3}
          </button>
          <span class="PageIndex">${r}</span>
        </div>
        <div class="PageContent">
          <img
            id="PageImg${r}"
            alt="Page ${r}"
            class="${kt({PageImg:!0,imgBroken:fe("images")?.[r]?.status==="error"})}"
            src=${fe("images")?.[r]?.src??Be}
            style="${Vr(R6(r))}"
            @load=${M6}
            @error=${x6}
            ${Ns(fe("images")?.[r].ref)}
          />
        </div>
      </div>
      <div class="separator">
        [ ${r===e?K("END"):`${r} / ${e}`} ]
      </div>
    `}),$6=e=>oe`
  <main
    id="Chapter"
    ${Ns(fe("chapter"))}
    class="${kt({fitWidthIfOversize:X("fitWidthIfOversize"),[X("viewMode")]:!0,separator:X("viewMode")==="Vertical"})}"
    @wheel=${t=>{X("viewMode")==="FluidLTR"?th(t):X("viewMode")==="FluidRTL"&&Pb(t)}}
  >
    ${P6(e.pages,e.begin??0)}
  </main>
`,z6=":root:not(.light,.dark){--theme-body-background:#25262b;--theme-body-text-color:#c1c2c5;--theme-text-color:#c1c2c5;--theme-primary-color:#1a1b1e;--theme-primary-text-color:#c1c2c5;--theme-background-color:#25262b;--theme-hightlight-color:#2c2e33;--theme-border-color:#373a40;--theme-secondary-color:#2c2e33;--theme-secondary-text-color:#c1c2c5}:host{all:initial;box-sizing:border-box;display:block}#MangaOnlineViewer{color:var(--theme-body-text-color);background-color:var(--theme-body-background);box-sizing:border-box;--mov-font-size-m:16px;min-height:100vh;text-decoration:none}#Chapter{box-sizing:border-box;grid-template-columns:repeat(1,1fr);min-width:225px;display:grid}#Chapter.Vertical:has(+#Navigation:not(.disabled)),#Chapter.WebComic:has(+#Navigation:not(.disabled)){padding-bottom:31px}#Chapter.Vertical .PageContent{margin-top:8px;margin-bottom:8px}.closeButton{width:fit-content;height:fit-content;position:absolute;top:10px;right:10px}.overlay{z-index:950;cursor:pointer;background-color:#00000080;width:100%;height:100%;display:none;position:fixed;inset:0}.overlay.visible{display:block}select{height:20px;margin:2px}:not(.FluidRTL,.FluidLTR).fitWidthIfOversize .PageContent .PageImg{object-fit:contain;max-width:100%}.hideControls .PageFunctions{visibility:hidden}",D6="@keyframes spin{to{transform:rotate(360deg)}}@keyframes spin-reverse{0%{transform:rotate(360deg)}to{transform:rotate(0)}}.icon-tabler-loader-2,.animate-spin{animation:1s linear infinite spin}.animate-spin-reverse{animation:1s linear infinite spin-reverse}",N6="#Chapter:where(.Book,.Manga){grid-template-columns:1fr 1fr;grid-auto-flow:row;gap:0;width:100%;min-width:auto;display:grid}#Chapter:where(.Book,.Manga) .MangaPage{width:100%;min-height:22px;display:block;position:relative;overflow:hidden}#Chapter:where(.Book,.Manga) .MangaPage .PageFunctions{border-radius:0 0 0 4px;flex-direction:row;top:0;left:auto;right:0}#Chapter:where(.Book,.Manga) .MangaPage.LeftPage .PageFunctions{border-radius:0 0 4px;flex-direction:row-reverse;left:0;right:auto}#Chapter:where(.Book,.Manga) .MangaPage.DoublePage{grid-column:span 2}#Chapter:where(.Book,.Manga) .MangaPage .PageContent{flex-shrink:0;justify-content:center;align-items:center;display:flex;overflow:hidden}#Chapter:where(.Book,.Manga) .MangaPage.LeftPage .PageContent{justify-content:flex-end;padding-right:0}#Chapter:where(.Book,.Manga) .MangaPage.RightPage .PageContent{justify-content:flex-start;padding-left:0}#Chapter:where(.Book,.Manga) .MangaPage.DoublePage .PageContent{justify-content:center}#Chapter.Manga{direction:rtl}#Chapter.Manga .MangaPage{direction:ltr}",B6="#Chapter.FluidLTR,#Chapter.FluidRTL{min-width:auto;display:flex;overflow-x:auto;& .ZoomWidth{display:none}& .PageImg{min-width:unset}& .MangaPage{width:initial;min-width:fit-content;position:relative}& .MangaPage.DoublePage{grid-column:span 2}}#Chapter.FluidLTR{flex-direction:row;& .MangaPage .PageFunctions{direction:rtl;left:0;right:auto}}#Chapter.FluidRTL{flex-direction:row-reverse}",H6="#Chapter.Gallery{flex-wrap:wrap;justify-content:center;gap:10px;padding:10px;display:flex}.Gallery .MangaPage{width:auto;min-width:unset;flex:0 auto}.Gallery .MangaPage .PageContent .PageImg{min-width:unset}.Gallery .PageFunctions,.Gallery .separator{display:none}",F6='.PageButton .icon-tabler{vertical-align:sub;width:1rem;height:1rem}.PageButton,.PageButton:visited,.PageButton:link{cursor:pointer;min-height:32px;color:var(--mov-color-on-loud);background-color:var(--mov-color-fill-loud);border-style:solid;border-width:1px;border-color:var(--theme-border-color);border-radius:5px;padding:2px;text-decoration:none}.PageButton:active,.PageButton:hover{opacity:.8}.PageButton[selected]{background-color:var(--mov-color-fill-normal);color:var(--mov-color-on-normal);border:1px solid var(--theme-border-color)}.PageButton.hidden{display:none}.MangaPage{text-align:center;width:100%;min-width:100%;min-height:22px;line-height:0;display:inline-block}.PageContent{text-align:center;max-width:100%;height:100%;transition:all .3s ease-in-out;display:inline-block;overflow:auto hidden}.MangaPage.hide .PageContent{height:0}.PageContent .PageImg[src=""],.PageContent .PageImg:not([src]),.PageContent .PageImg.imgBroken{background-position:50%;background-repeat:no-repeat;background-size:20%;background-color:var(--theme-hightlight-color);text-align:center;vertical-align:top;width:40vw;height:80vh;color:var(--theme-text-color);min-width:40vw;max-width:100%;min-height:50vh;max-height:100%;margin:0;font-size:16px;line-height:80vh;display:inline-block;position:relative}.PageContent .PageImg[src=""]:before,.PageContent .PageImg:not([src]):before,.PageContent .PageImg.imgBroken:before{content:attr(alt);white-space:pre-wrap;text-align:center;color:var(--theme-text-color);font-size:16px;position:absolute;top:40%;left:50%;transform:translate(-50%,-50%)}.PageFunctions{justify-content:flex-end;align-items:center;gap:3px;margin:0;padding:0;font-family:monospace;display:flex;position:absolute;right:0}.PageFunctions>.PageIndex{background-color:var(--mov-color-fill-loud);color:var(--mov-color-on-loud);text-align:center;border-radius:5px;min-width:20px;padding:3px 5px;line-height:1rem;display:inline-block}.PageFunctions .PageButton{opacity:.5;border-width:0;justify-content:center;align-items:center;min-height:auto;margin:0;padding:3px;display:flex}.PageFunctions:hover .PageButton{opacity:1}.PageFunctions .PageButton:hover{opacity:.9}#Chapter.Vertical .separator{text-align:center;align-items:center;font-style:italic;display:flex}#Chapter.Vertical .separator:before,#Chapter.Vertical .separator:after{content:"";border-bottom:1px solid var(--theme-text-color);flex:1}#Chapter.Vertical.separator:not(:empty):before{margin-right:.25em}#Chapter.Vertical.separator:not(:empty):after{margin-left:.25em}#Chapter:not(.separator) .separator,#Chapter:not(.Vertical) .separator{display:none}',G6="#MangaOnlineViewer{color:var(--theme-body-text-color);background-color:var(--theme-body-background);margin:0;padding:0;font-family:Helvetica Neue,Helvetica,Arial,sans-serif;font-size:16px;line-height:20px}a,a:link,a:visited,a:active,a:focus{color:var(--theme-body-text-color);text-decoration:none}img{vertical-align:middle;border:0;height:auto}",W6=":root{--theme-primary-color:#007bff;--theme-primary-text-color:#fff;--theme-secondary-color:#6c757d;--theme-secondary-text-color:#fff;--theme-body-background:#212529;--theme-body-text-color:#f8f9fa;--theme-text-color:#f8f9fa;--theme-background-color:#212529;--theme-hightlight-color:#343a40;--theme-border-color:#495057;--mov-color-fill-quiet:#ced4da;--mov-color-fill-normal:#adb5bd;--mov-color-fill-loud:#007bff;--mov-color-border-quiet:#adb5bd;--mov-color-border-normal:#6c757d;--mov-color-border-loud:#495057;--mov-color-on-quiet:#343a40;--mov-color-on-normal:#fff;--mov-color-on-loud:#fff;--mov-color-mix-hover:#00000014;--mov-color-mix-active:#00000029}.light{--theme-body-background:#f8f9fa;--theme-body-text-color:#212529;--theme-text-color:#212529;--theme-background-color:#f8f9fa;--theme-hightlight-color:#e9ecef;--theme-border-color:#dee2e6;--mov-color-fill-quiet:#f8f9fa;--mov-color-fill-normal:#e9ecef;--mov-color-fill-loud:#007bff;--mov-color-border-quiet:#e9ecef;--mov-color-border-normal:#dee2e6;--mov-color-border-loud:#adb5bd;--mov-color-on-quiet:#6c757d;--mov-color-on-normal:#fff;--mov-color-on-loud:#fff;--mov-color-mix-hover:#0000001a;--mov-color-mix-active:#0003}",U6=yt`
  .PageContent .PageImg[src=''],
  .PageContent .PageImg:not([src]) {
    background-image: url('${Se(yi(Vs))}');
  }

  .PageContent .PageImg.imgBroken {
    background-image: url('${Se(yi(qs))}');
  }

  ${Se(W6)}
  ${Se(G6)}
  ${Se(z6)}
  ${Se(F6)}
  ${Se(B6)}
  ${Se(N6)}
  ${Se(H6)}
  ${Se(K0)}
  ${Se(D6)}
`,V6=(e="#MangaOnlineViewer",t=X("theme"))=>{const r=I0(t),i=Io(t),a=X("colorScheme")==="dark"?r[8]:r[2],s=Io(a);return yt`
    :where(:root),
    ${Se(e)}, .dark,
    ${Se(e)}.dark {
      --theme-primary-color: ${Se(t)};;
      --theme-primary-text-color: ${Se(i)};;
      --theme-secondary-color: ${Se(a)};;
      --theme-secondary-text-color: ${Se(s)};;

      color-scheme: dark;
      --theme-body-background: ${Se(It.dark[600])};;
      --theme-body-text-color: ${Se(It.dark[50])};;
      --theme-text-color: ${Se(It.dark[50])};;
      --theme-background-color: ${Se(It.dark[600])};;
      --theme-hightlight-color: ${Se(It.dark[500])};;
      --theme-border-color: ${Se(It.dark[400])};;

      --mov-color-fill-quiet: ${Se(r[9])};;
      --mov-color-fill-normal: var(--theme-secondary-color, ${Se(r[8])};);
      --mov-color-fill-loud: var(--theme-primary-color);
      --mov-color-border-quiet: ${Se(r[8])};;
      --mov-color-border-normal: ${Se(r[7])};;
      --mov-color-border-loud: ${Se(r[6])};;
      --mov-color-on-quiet: ${Se(r[4])};;
      --mov-color-on-normal: var(--theme-secondary-text-color, ${Se(r[3])};);
      --mov-color-on-loud: var(--theme-primary-text-color, white);

      --mov-color-mix-hover: black 8%;
      --mov-color-mix-active: black 16%;
    }

    .light,
    ${Se(e)};.light {
      color-scheme: light;
      --theme-body-background: ${Se(It.gray[50])};;
      --theme-body-text-color: ${Se(It.gray[900])};;
      --theme-text-color: ${Se(It.gray[900])};;
      --theme-background-color: ${Se(It.gray[50])};;
      --theme-hightlight-color: ${Se(It.gray[500])};;
      --theme-border-color: ${Se(It.gray[100])};;

      --mov-color-fill-quiet: ${Se(r[0])};;
      --mov-color-fill-normal: var(--theme-secondary-color, ${Se(r[1])};);
      --mov-color-fill-loud: var(--theme-primary-color);
      --mov-color-border-quiet: ${Se(r[1])};;
      --mov-color-border-normal: ${Se(r[2])};;
      --mov-color-border-loud: ${Se(r[4])};;
      --mov-color-on-quiet: ${Se(r[6])};;
      --mov-color-on-normal: var(--theme-secondary-text-color, ${Se(r[3])};);
      --mov-color-on-loud: var(--theme-primary-text-color, white);

      --mov-color-mix-hover: black 10%;
      --mov-color-mix-active: black 20%;
    }
  `},q6="#StartMOV{all:revert;backface-visibility:hidden;color:#fff;cursor:pointer;text-align:center;z-index:105000;background-image:linear-gradient(90deg,#667eea,#764ba2,#6b8dd6,#8e37d7);background-size:300% 100%;border:none;border-radius:10px;width:80%;min-height:50px;margin:0 auto;padding:.5rem 1rem;font-size:32px;transition:all .4s ease-in-out;position:fixed;bottom:0;left:0;right:0;box-shadow:0 4px 15px #744fa8bf}#StartMOV:hover{background-position:100% 0;transition:all .4s ease-in-out}#StartMOV:focus{outline:none}#pagesSliderVal{text-align:center;margin-top:15px;font-weight:700;display:block}",xn=class extends Je{constructor(...t){super(...t),this.mangaPages=0,this.begin=1,this.timeoutMs=3e3,this.status="initial-prompt"}static{this.styles=[Se(q6)]}connectedCallback(){super.connectedCallback(),this.status==="initial-prompt"&&(this.timeoutId=window.setTimeout(()=>{this.handleStart()},this.timeoutMs))}disconnectedCallback(){super.disconnectedCallback(),window.clearTimeout(this.timeoutId)}handleStart(){window.clearTimeout(this.timeoutId),this.dispatchEvent(new CustomEvent("start",{detail:null}))}handleLateStart(t,r){this.dispatchEvent(new CustomEvent("start",{detail:{begin:t,end:r}}))}handleButtonCLick(){this.status="late-start-prompt"}handleDialogClose(t){t.stopPropagation(),window.clearTimeout(this.timeoutId),this.status="late-start-button"}render(){switch(this.status){case"late-start-button":return this.renderLateStartButton();case"late-start-prompt":return this.renderLateStartPrompt();default:return this.renderInitialPrompt()}}renderInitialPrompt(){return oe`
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
            style="--mov-color-fill-loud: ${It.red[700]}; --mov-color-on-loud: white;"
          >
            Cancel
          </mov-button>
          <mov-button
            @click=${this.handleStart}
            style="--mov-color-fill-loud: ${It.green[700]}; --mov-color-on-loud: white;"
          >
            Start Now
          </mov-button>
        </div>
      </mov-dialog>
    `}renderLateStartButton(){return oe`
      <button
        id="StartMOV"
        @click=${this.handleButtonCLick}
      >
        ${K("BUTTON_START")}
      </button>
    `}renderLateStartPrompt(){this.beginPage??=this.begin,this.endPage??=this.mangaPages;const t=r=>{this.beginPage=r.detail.value[0],this.endPage=r.detail.value[1]};return oe`
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
            <mov-slider
              id="pagesSlider"
              dual
              show-tooltip
              show-ticks
              tick-count="10"
              step="1"
              .value=${[this.beginPage,this.endPage]}
              min="0"
              max="${this.mangaPages}"
              @input=${t}
            ></mov-slider>
            <output
              id="pagesSliderVal"
              class="RangeValue"
              for="pagesSlider"
            >
              [${String(this.beginPage).padStart(3,"0")} ,
              ${String(this.endPage).padStart(3,"0")}]
            </output>
          </div>
        </div>
        <div
          slot="footer"
          style="display: flex; justify-content: flex-end; gap: 0.5rem; padding: 0.5rem 1rem 1rem;"
        >
          <mov-button
            @click=${this.handleDialogClose}
            style="--mov-color-fill-loud: ${It.red[700]}; --mov-color-on-loud: white;"
          >
            Close
          </mov-button>
          <mov-button
            @click=${()=>this.handleLateStart(this.beginPage??0,this.endPage??this.mangaPages)}
            style="--mov-color-fill-loud: ${It.green[700]}; --mov-color-on-loud: white;"
          >
            Run
          </mov-button>
        </div>
      </mov-dialog>
    `}};z([j({type:Number,reflect:!0})],xn.prototype,"mangaPages",void 0),z([j({type:Number,reflect:!0})],xn.prototype,"begin",void 0),z([j({type:Number})],xn.prototype,"timeoutMs",void 0),z([j({type:String,reflect:!0})],xn.prototype,"status",void 0),z([Dt()],xn.prototype,"beginPage",void 0),z([Dt()],xn.prototype,"endPage",void 0),xn=z([ot("script-startup")],xn);function Z6(e){if(!e?.parentNode)return e;const t=e.cloneNode(!0);return e.parentNode.replaceChild(t,e),t}var j6=e=>{e.getAttributeNames().forEach(t=>{e?.removeAttribute(t)})},K6=(...e)=>{e?.forEach(j6),e?.forEach(Z6)};function Y6(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var dh,$a=class extends Je{constructor(...t){super(...t),this.loadMode="wait"}static{this.styles=[yt``,Se(U6)]}async start(t,r){this.manga&&(document.documentElement.hasAttribute("mov")||(K6(document.documentElement,document.head,document.body),document.documentElement.setAttribute("mov","")),window.scrollTo(0,0),$e("manga",{...this.manga,begin:t??this.manga.begin,pages:r??this.manga.pages}))}firstUpdated(){this.loadMode==="always"&&this.start(),v6(),p6()}render(){const t=fe("manga"),r=fe("dialog");return oe`
      <style>
        ${V6()}
      </style>
      <div
        id="MangaOnlineViewer"
        class="${kt({[X("colorScheme")]:!0,hideControls:X("hidePageControls"),bookmarked:!!vo(),[fe("device")]:!0})}"
        style="${Vr({[`padding-${X("navbar")}`]:"34px"})}"
        .locale="${X("locale")}"
      >
        ${t?oe` <reader-header .manga=${t}></reader-header>
              ${$6(t)}
              <navbar-thumbnails .mode=${X("navbar")}></navbar-thumbnails>
              <manga-pagination
                .mode="${X("pagination")}"
                .startPage=${t.begin}
                .totalPages=${t.pages}
                .currentPage=${fe("currentPage")}
                .next=${t.next}
                .prev=${t.prev}
              ></manga-pagination>
              <keybindings-panel></keybindings-panel>
              <bookmark-panel></bookmark-panel>
              <settings-panel></settings-panel>
              <moaqz-toaster dismissable></moaqz-toaster>`:oe(dh||(dh=Y6([` <script-startup
              .mangaPages="`,`"
              begin="`,`"
              status="`,`"
              @start=`,`
            ><\/script-startup>`])),this.manga?.pages,this.manga?.begin,this.loadMode==="never"?"late-start-button":"initial-prompt",i=>{this.start(i.detail?.begin,i.detail?.end)})}
        ${r?oe`
              <mov-dialog
                open
                .icon=${r.icon}
                @close=${()=>$e("dialog",null)}
              >
                <span slot="label">${r.title}</span>
                ${r.content} ${r.footer}
              </mov-dialog>
            `:""}
      </div>
    `}};z([j({type:String,reflect:!0})],$a.prototype,"loadMode",void 0),z([j({type:Object})],$a.prototype,"manga",void 0),$a=z([ot("manga-online-viewer"),(0,Lo.useStores)(Ct,po,tr)],$a);var X6=`/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */
html{-webkit-text-size-adjust:100%;line-height:1.15}body{margin:0}main{display:block}h1{margin:.67em 0;font-size:2em}hr{box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace;font-size:1em}a{background-color:#0000}abbr[title]{border-bottom:none;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace;font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}img{border-style:none}button,input,optgroup,select,textarea{margin:0;font-family:inherit;font-size:100%;line-height:1.15}button,input{overflow:visible}button,select{text-transform:none}button,[type=button],[type=reset],[type=submit]{-webkit-appearance:button}button::-moz-focus-inner{border-style:none;padding:0}[type=button]::-moz-focus-inner{border-style:none;padding:0}[type=reset]::-moz-focus-inner{border-style:none;padding:0}[type=submit]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring{outline:1px dotted buttontext}[type=button]:-moz-focusring{outline:1px dotted buttontext}[type=reset]:-moz-focusring{outline:1px dotted buttontext}[type=submit]:-moz-focusring{outline:1px dotted buttontext}fieldset{padding:.35em .75em .625em}legend{box-sizing:border-box;color:inherit;white-space:normal;max-width:100%;padding:0;display:table}progress{vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button{height:auto}[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details{display:block}summary{display:list-item}template,[hidden]{display:none}`,J6="#nprogress{pointer-events:none}#nprogress .bar{z-index:1031;background:#29d;width:100%;height:2px;position:fixed;top:0;left:0}#nprogress .peg{opacity:1;width:100px;height:100%;display:block;position:absolute;right:0;transform:rotate(3deg)translateY(-4px);box-shadow:0 0 10px #29d,0 0 5px #29d}#nprogress .spinner{z-index:1031;display:block;position:fixed;top:15px;right:15px}#nprogress .spinner-icon{box-sizing:border-box;border:2px solid #0000;border-color:#29d #0000 #0000 #29d;border-radius:50%;width:18px;height:18px;animation:.4s linear infinite nprogress-spinner}.nprogress-custom-parent{position:relative;overflow:hidden}.nprogress-custom-parent #nprogress .spinner,.nprogress-custom-parent #nprogress .bar{position:absolute}@-webkit-keyframes nprogress-spinner{0%{-webkit-transform:rotate(0)}to{-webkit-transform:rotate(360deg)}}@keyframes nprogress-spinner{0%{transform:rotate(0)}to{transform:rotate(360deg)}}",Q6="#nprogress .bar{z-index:1031;background:#29d;width:100%;height:4px;position:fixed;top:0;left:0}html[mov] body>:not(manga-online-viewer,#nprogress){display:none!important}html[mov]{all:unset;font-size:16px}",e9=[X6,J6,Q6].join(`
`);async function t9([e,t]){ye(`Found Pages: ${t.pages} in ${e?.name}`),t.title||(t.title=document.querySelector("title")?.textContent?.trim()),t.begin=vo()??t.begin??1,t.before!==void 0&&(qt("Executing Preparation"),await t.before(t.begin??0)),document.head.innerHTML+=P5("externals",e9);const r=document.createElement("manga-online-viewer");r.loadMode=e?.start??X("loadMode"),r.manga=t,document.body.appendChild(r)}async function r9(e){ye(`Starting ${As.script.name} ${As.script.version} on ${Zo()} ${lp()} with ${cp()}`),ye(e.length,"Known Manga Sites:",e);const t=e.filter(i=>i.url.test(window.location.href));ye(t.length,"Found sites:",t);const r=t.map(async i=>{ye(`Testing site: ${i.name}`),await gp(i),qt(i.name,"Passed");const a=await i.run();if(qt("Processed site:",i,a),a.pages>0)return[i,a];throw new Error(`${i.name} found ${a.pages} pages`)});try{const i=await Promise.any(r);qt("Going with",i[0].name),t9(i)}catch(i){if(i instanceof AggregateError){ye("All sites failed to run:");for(const a of i.errors)ye(a.message)}else ye("An unexpected error occurred:",i)}}var n9={eq:(e,t)=>e.textContent?.trim()===t,starts:(e,t)=>!!e.textContent?.trim()?.startsWith(t),ends:(e,t)=>!!e.textContent?.trim()?.endsWith(t)};function uh(e,t,r){const i=n9[r];if(!i)throw new Error(`Invalid matcherKey: ${r}`);return[...document.querySelectorAll(e)].filter(a=>xe.default.castArray(t).some(s=>i(a,s)))}function o9(e,t,r){return uh(e,t,r)?.[0]}function Bl(e,t,r,i="a"){return o9(e,t,r)?.closest(i)??null}var hh=(e,t)=>uh(e,t,"eq"),Jn=(e,t,r="a")=>Bl(e,t,"eq",r),i9=(e,t,r="a")=>Bl(e,t,"starts",r),a9=(e,t,r="a")=>Bl(e,t,"ends",r),s9={name:"Asura Scans",url:/https?:\/\/(www.)?(asurascans|asuracomics).(com|net)\/.+/,homepage:"https://asurascans.com/",language:[De.ENGLISH],category:He.MANGA,waitEle:'astro-island[component-url*="ChapterReader"]',run(){const e=document.querySelector('astro-island[component-url*="ChapterReader"]'),t=JSON.parse(e?.getAttribute("props")||"{}"),r=t.seriesSlug?.[1],i=(t.pages?.[1]||[]).map(a=>a[1]?.url?.[1]).filter(Boolean);return{title:`${t.seriesName?.[1]} - Chapter ${t.chapterName?.[1]}`,series:`/comics/${r}`,pages:i.length,prev:Jn("span","Prev","a")?.getAttribute("href")||document.querySelector('link[rel="prev"]')?.getAttribute("href")||void 0,next:Jn("span","Next","a")?.getAttribute("href")||document.querySelector('link[rel="next"]')?.getAttribute("href")||void 0,listImages:i}}},l9={name:"Batoto",url:/https?:\/\/(?:www\.)?(?:fto|jto|hto|dto|mto|wto|bato|battwo|batotwo|comiko|batocomic|readtoto|zbato|xbato|mangatoto)\.(?:to|com|net|org)\/(chapter|title).*/,homepage:"https://rentry.co/batoto",language:[De.ENGLISH],category:He.MANGA,waitEle:'div[name="image-item"] img, .page-img',run(){if(window.location.pathname.startsWith("/title")){window.location.search!=="?load=2"&&(window.location.search="?load=2");const t=[...document.querySelectorAll('div[name="image-item"] img')];return{title:document.querySelector("h6")?.textContent?.trim(),series:document.querySelector("h3 a")?.getAttribute("href"),pages:t.length,prev:a9("span","Prev Chapter","a")?.getAttribute("href"),next:i9("span","Next Chapter","a")?.getAttribute("href"),listImages:t.map(r=>r.getAttribute("src")??"")}}const e=[...document.querySelectorAll(".page-img")];return{title:document.querySelector(".nav-title a")?.textContent?.trim(),series:document.querySelector(".nav-title a")?.getAttribute("href"),pages:e.length,prev:document.querySelector(".nav-prev a")?.getAttribute("href"),next:document.querySelector(".nav-next a")?.getAttribute("href"),listImages:e.map(t=>t.getAttribute("src")??"")}}},c9={name:"BilibiliComics",url:/https?:\/\/(www\.)?(bilibilicomics).net\/episode\/.+/,homepage:"https://www.bilibilicomics.net/",language:[De.ENGLISH],category:He.MANGA,waitEle:"#__NUXT_DATA__",async run(){const e=JSON.parse(document.querySelector("#__NUXT_DATA__")?.innerHTML??"").filter(t=>typeof t=="string"&&/.(png|jpg|jpeg|gif|bmp|webp)$/i.exec(t));return{title:document.querySelector(".chapterTitle")?.textContent?.trim(),series:document.querySelector(".book-name")?.getAttribute("href"),pages:e.length,prev:document.querySelectorAll(".pre-next-btns").item(0)?.getAttribute("href"),next:document.querySelectorAll(".pre-next-btns").item(2)?.getAttribute("href"),listImages:e.map(t=>`https://static.comicfans.io/${t}`)}}},d9={name:"Comick",url:/https?:\/\/(www\.)?comick.io\/.+/,homepage:"https://comick.io/",language:[De.ENGLISH],category:He.MANGA,waitFunc(){return/\/([^/]+)-chapter.+$/.test(window.location.pathname)},waitEle:"#__NEXT_DATA__",waitTime:3e3,run(){const e=JSON.parse(document.getElementById("__NEXT_DATA__")?.innerHTML??"")?.props?.pageProps,t=e?.chapter?.md_images?.map(r=>`https://meo.comick.pictures/${r?.b2key}`);return{title:e?.seoTitle??`${e.chapter?.md_comics?.title} ${e?.chapter?.chap}`,series:`/comic/${e?.chapter?.md_comics?.slug}`,pages:t?.length,prev:e?.prev?.href,next:e?.next?.href,listImages:t}}};async function u9(e){try{const t=await(await fetch(e)).blob();return new Promise((r,i)=>{const a=new FileReader;a.onloadend=()=>r(a.result),a.onerror=i,a.readAsDataURL(t)})}catch(t){return console.error(`Failed to convert blob URL ${e} to data URL:`,t),e}}async function h9(e,t,r){const i=document.createElement("div");i.style.cssText="position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; background: rgba(33, 37, 41, 0.95); z-index: 999999; display: flex; flex-direction: column; align-items: center; justify-content: center; color: white; font-family: sans-serif; font-size: 20px;",i.innerHTML=`
    <div style="font-size: 24px; font-weight: bold; margin-bottom: 20px;">MangaOnlineViewer</div>
    <div id="mov-loading-text">Preparing pages...</div>
    <div style="margin-top: 20px; width: 200px; height: 6px; background: #495057; border-radius: 3px; overflow: hidden;">
      <div id="mov-loading-bar" style="width: 0; height: 100%; background: #37b24d; transition: width 0.1s;"></div>
    </div>
  `,document.body.appendChild(i);const a=(h,c)=>{const f=c>0?Math.round(h/c*100):0,p=document.getElementById("mov-loading-text"),w=document.getElementById("mov-loading-bar");p&&(p.textContent=`Scrolling and waiting for pages to load: ${h} / ${c||"?"}`),w&&(w.style.width=c>0?`${f}%`:"50%")};a(0,e);const s=window.scrollY,l=[];try{for(let h=0;h<e;h++){let c=null,f=0;for(;f<5e3;){const b=[...document.querySelectorAll("img")].filter(t);if(b[h]){c=b[h];break}await new Promise(m=>setTimeout(m,100)),f+=100}if(!c){ye(`Failed to find image element for page ${h+1}`);continue}c.scrollIntoView({behavior:"auto",block:"center"});let p=0,w="";for(;p<5e3;){const b=c.src||c.getAttribute("src")||"";if(b&&r(b)&&(c.naturalWidth>250||c.complete)){const m=c.naturalWidth||c.width||0;if(m===0||m>=250){w=b;break}}await new Promise(m=>setTimeout(m,100)),p+=100}w?l.push(w):(ye(`Timeout waiting for image ${h+1} to load`),l.push(c.src||c.getAttribute("src")||"")),a(l.length,e)}}finally{window.scrollTo(0,s),i.remove()}if(l.length===0)throw new Error("No images collected from the page");return await Promise.all(l.map(async h=>h.startsWith("blob:")?await u9(h):h))}var za=null;if(typeof window<"u"&&window.location.hostname.includes("comix.to")){const e=JSON.parse;JSON.parse=(t,r)=>{const i=e(t,r);try{i?.result?.pages&&(za=i.result.pages,ye("Intercepted chapter pages data from JSON.parse",za))}catch{}return i}}function f9(){const e=document.querySelector("#app-root");if(!e)return null;const t=Object.keys(e).find(i=>i.startsWith("__reactContainer")||i.startsWith("__reactFiber"));if(!t)return null;const r=[e[t]];for(;r.length>0;){const i=r.pop();if(i){if(i.stateNode?.props){const a=i.stateNode.props.client;if(a&&typeof a.getQueryCache=="function"){const s=a.getQueryCache().getAll();for(const l of s){const h=l.state.data;if(h?.result?.pages)return h.result.pages}}}if(i.memoizedProps){const a=i.memoizedProps.client||i.memoizedProps.value;if(a&&typeof a.getQueryCache=="function"){const s=a.getQueryCache().getAll();for(const l of s){const h=l.state.data;if(h?.result?.pages)return h.result.pages}}}i.child&&r.push(i.child),i.sibling&&r.push(i.sibling)}}return null}function p9(){const e=document.querySelector("#app-root");if(!e)return null;const t=Object.keys(e).find(i=>i.startsWith("__reactContainer")||i.startsWith("__reactFiber"));if(!t)return null;const r=[e[t]];for(;r.length>0;){const i=r.pop();if(!i)continue;const a=s=>{if(s&&typeof s.getQueryCache=="function"){const l=s.getQueryCache().getAll();for(const h of l){const c=h.state.data;if(c){if(Array.isArray(c)&&c.length>0&&(c[0].chapterNumber!==void 0||c[0].number!==void 0))return c;if(c.result&&Array.isArray(c.result.items)&&c.result.items.length>0){const f=c.result.items[0];if(f.chapterNumber!==void 0||f.number!==void 0||f.mangaId!==void 0)return c.result.items}}}}return null};if(i.stateNode?.props){const s=a(i.stateNode.props.client);if(s)return s}if(i.memoizedProps){const s=a(i.memoizedProps.client||i.memoizedProps.value);if(s)return s}i.child&&r.push(i.child),i.sibling&&r.push(i.sibling)}return null}function g9(){const e=document.querySelector('select[aria-label*="page" i], select[class*="page" i], select[id*="page" i]');return e?e.querySelectorAll("option").length:0}function m9(){const e=[...document.querySelectorAll("span, div, button, option")];for(const t of e){const r=t.textContent||"",i=/^\s*1\s*(?:\/|of)\s*(\d+)\s*$/i.exec(r.trim());if(i){const a=parseInt(i[1],10);if(a>0&&a<500)return a}}return 0}function v9(){const e=[...document.querySelectorAll("a")];let t=null,r=null;for(const i of e){const a=i.getAttribute("href");if(!a?.includes("/title/")||!/\/\d+-chapter-/.test(a))continue;const s=(i.textContent||"").toLowerCase().trim(),l=(i.getAttribute("aria-label")||"").toLowerCase();(s.includes("next")||l.includes("next")||i.querySelector('[class*="next"]')||i.querySelector('[class*="right"]'))&&(t=a),(s.includes("prev")||s.includes("previous")||l.includes("prev")||l.includes("previous")||i.querySelector('[class*="prev"]')||i.querySelector('[class*="left"]'))&&(r=a)}return{prev:r,next:t}}function b9(){const e=[...document.querySelectorAll("a")],t=[];for(const c of e){const f=c.getAttribute("href");if(!f?.includes("/title/")||!/\/\d+-chapter-/.test(f))continue;const p=/-chapter-(\d+(\.\d+)?)/.exec(f);p&&t.push({href:f,num:parseFloat(p[1])})}if(t.length===0)return{prev:null,next:null};const r=new Set,i=t.filter(c=>{const f=c.href.split("#")[0].split("?")[0];return r.has(f)?!1:(r.add(f),!0)});i.sort((c,f)=>c.num-f.num);const a=window.location.pathname.split("#")[0].split("?")[0],s=i.findIndex(c=>c.href.includes(a)||a.includes(c.href));let l=null,h=null;return s!==-1&&(s>0&&(l=i[s-1].href),s<i.length-1&&(h=i[s+1].href)),{prev:l,next:h}}function w9(){const{prev:e,next:t}=v9();return e||t?{prev:e,next:t}:b9()}function fh(e){if(!e.closest("#app-root")&&!e.closest(".rpage-body"))return!1;const t=e.src||e.getAttribute("src")||"";if(!t||t.includes("avatar")||t.includes("logo")||t.includes("icon")||t.includes("placeholder")||t.startsWith("data:image/svg+xml"))return!1;const r=e.naturalWidth||e.width||0;return!(r>0&&r<250)}function _9(e){return!e||e.includes("placeholder")||e.startsWith("data:image/svg+xml")||e.includes("loading")?!1:e.startsWith("data:")||e.startsWith("blob:")||e.includes("comix.to")||e.includes("static.comix.to")||e.includes("wowpic")}var y9={name:"Comix.to",homepage:"https://comix.to/",url:/https?:\/\/comix\.to\/(title|comic)\/.+\/.+/,language:De.ENGLISH,category:He.MANGA,async run(){let e=0,t=null,r=null;for(;e<5e3&&(t||(t=f9()),r||(r=p9()),!(t&&r));)await new Promise(E=>setTimeout(E,100)),e+=100;!t&&za&&(t=za);let i=t?.items?.length||0;i===0&&(i=g9()),i===0&&(i=m9()),i===0&&(i=[...document.querySelectorAll("#app-root img, .rpage-body img")].filter(fh).length||40),ye(`Identified expected page count: ${i}`);const a=await h9(i,fh,_9),s=document.getElementById("initial-data"),l=s?JSON.parse(s.textContent||"{}"):{};let h="",c="";if(l.queries)for(const E of Object.keys(l.queries)){const y=l.queries[E];if(y?.title&&y.url){h=y.title,c=y.url;break}}h||(h=document.querySelector("title")?.textContent?.trim()||""),c||(c=document.querySelector('a[href^="/title/"]:not([href*="-chapter-"])')?.getAttribute("href")||"");let f=null,p=null;const w=/\/title\/([^/]+)/.exec(window.location.pathname),b=w?w[1]:"",m=/\/(\d+)-chapter-/.exec(window.location.pathname),v=m?parseInt(m[1],10):0;if(r&&v&&b){const E=x=>parseFloat(x.number??x.chapterNumber??"0"),y=[...r].sort((x,O)=>E(x)-E(O)),S=y.findIndex(x=>parseInt(x.id,10)===v);if(S!==-1){if(S>0){const x=y[S-1],O=x.number??x.chapterNumber;f=`/title/${b}/${x.id}-chapter-${O}`}if(S<y.length-1){const x=y[S+1],O=x.number??x.chapterNumber;p=`/title/${b}/${x.id}-chapter-${O}`}}}if(!f&&!p){const E=w9();f=E.prev,p=E.next}return{title:h,series:c,pages:a.length,prev:f,next:p,listImages:a}}},k9={name:"Dynasty-Scans",url:/https?:\/\/(www\.)?dynasty-scans.com\/chapters\/.+/,homepage:"https://dynasty-scans.com/",language:[De.ENGLISH],category:He.MANGA,run(){return{title:document.querySelector("#chapter-title")?.textContent?.trim(),series:document.querySelector("#chapter-title a")?.getAttribute("href"),pages:unsafeWindow.pages.length,prev:document.querySelector("#prev_link")?.getAttribute("href"),next:document.querySelector("#next_link")?.getAttribute("href"),listImages:unsafeWindow.pages.map(e=>e.image)}}},E9={name:"Flame Comics",url:/https?:\/\/(www.)?(flamecomics).(xyz)\/series\/.+/,homepage:"https://flamecomics.xyz/",language:[De.ENGLISH],category:He.MANGA,run(){const e="https://cdn.flamecomics.xyz/uploads/images/series",t=JSON.parse(document.getElementById("__NEXT_DATA__")?.innerHTML??""),r=t?.props?.pageProps?.chapter,i=xe.default.keys(r?.images).map(a=>`${e}/${r?.series_id}/${r?.token}/${r?.images?.[a]?.name}?${r?.unix_timestamp}`);return{title:`${r?.title} ${r?.chapter}`,series:`../${r?.series_id}`,pages:i.length,prev:t?.props?.pageProps?.previous,next:t?.props?.pageProps?.next,listImages:i}}},S9={name:["FoOlSlide","Kireicake"],url:/^(?!.*jaiminisbox).*\/read\/.+/,homepage:["https://github.com/saintly2k/FoOlSlideX","https://reader.kireicake.com"],language:[De.ENGLISH],obs:"Any Site that uses FoOLSlide",category:He.MANGA,waitEle:"img.open",run(){const e=[...document.querySelectorAll(".topbar_left .dropdown_parent:last-of-type li")],t=e.findIndex(l=>{const h=l.querySelector("a")?.getAttribute("href");return h?window.location.href.startsWith(h):!1}),r=[...document.querySelectorAll(".topbar_right .dropdown li")],i=[...document.querySelectorAll(".inner img:not(.open)")],a=i.length>1?i.length:r.length,s={title:e.at(t)?.querySelector("a")?.textContent?.trim()??document.querySelector("title")?.textContent?.trim(),series:document.querySelector("div.tbtitle div.text a")?.getAttribute("href"),pages:a,prev:e.at(t+1)?.querySelector("a")?.getAttribute("href"),next:e.at(t-1)?.querySelector("a")?.getAttribute("href")};return i.length>1?{...s,listImages:i.map(l=>l.getAttribute("src")??"")}:{...s,listPages:Array(a).fill(0).map((l,h)=>`${window.location.href.replace(/\/\d+$/,"")}/${h+1}`),img:"img.open"}}},A9={name:["Ikigai Mangas - EltaNews","Ikigai Mangas - Ajaco"],url:/https?:\/\/(visorikigai|visualikigai).(ajaco|eltanews|foodib|jobswu).(com|net|site)\/capitulo\/\d+/,homepage:["https://visorikigai.eltanews.com/","https://visorikigai.ajaco.net/"],language:[De.SPANISH],category:He.MANGA,run(){const e=document.querySelector('script[type="qwik/json"]')?.textContent?.match(/http[^'"]+webp/gi)??[];return{title:document.querySelector("title")?.text.replace(" — Manga en línea | MangaOni",""),pages:e?.length,prev:Jn("span","Siguiente")?.getAttribute("href"),next:Jn("span","Anterior")?.getAttribute("href"),listImages:e}}},M9=e=>new Promise(t=>setTimeout(t,e));async function x9(e){const t=document.querySelector(".reader-content"),r=new Set,i=2e3,a=200;if(!t)return console.error("Error: '.reader-content' container not found."),[];let s=0;for(;r.size<e&&s<a;){t.scrollTop+=i,s++,await M9(300);const l=document.querySelectorAll(".reader-page img");for(const h of l){const c=h.getAttribute("src");c&&c.length>0&&r.add(c)}if(console.log(`Attempt ${s}: Collected ${r.size} of ${e} sources.`),t.scrollHeight-t.clientHeight<=t.scrollTop&&r.size<e){console.warn(`Reached end of scrollable content. Stopping with ${r.size} sources.`);break}}return Array.from(r)}var I9={name:"Kagane",homepage:"https://kagane.org/",url:/https:\/\/(www\.)?kagane\.org\/series\/.+\/reader\/.+/,language:De.ENGLISH,category:He.MANGA,waitEle:".reader-page img",async run(){const e=window.location.href,t=e.match(/series\/([^/]+)/)?.[1],r=e.match(/reader\/([^/]+)/)?.[1],i=localStorage.getItem("rsch_did"),a={};i&&(a["X-Rsch-Did"]=i);const s=await fetch(`https://api.kagane.org/api/v1/series/${t}`,{headers:a}).then(w=>w.json()),l=(await fetch(`https://api.kagane.org/api/v1/books/${t}`,{headers:a}).then(w=>w.json())).data.content,h=l.find(w=>w.id===r),c=l.findIndex(w=>w.id===r),f=l[c+1],p=l[c-1];return{title:`${s.data.name} - ${h?.metadata?.title}`,series:`/series/${t}`,pages:h?.media?.pagesCount??0,prev:f?`/series/${t}/books/${f.id}`:void 0,next:p?`/series/${t}/books/${p.id}`:void 0,listImages:await x9(h?.media?.pagesCount??0)}}},C9={name:"KuManga",url:/https?:\/\/(www\.)?kumanga.com\/manga\/leer\/.+/,homepage:"https://www.kumanga.com/",language:[De.SPANISH],category:He.MANGA,run(){const e=document.querySelectorAll("select").item(1).querySelector("option[selected]");return{title:document.querySelector("title")?.textContent?.trim(),series:document.querySelector("h2 a")?.getAttribute("href"),pages:unsafeWindow.pUrl.length,prev:`/manga/leer/${e?.previousElementSibling?.getAttribute("value")}`,next:`/manga/leer/${e?.nextElementSibling?.getAttribute("value")}`,listImages:unsafeWindow.pUrl.map(t=>t.imgURL)}}},O9={name:"LeerCapitulo",url:/https?:\/\/(www.)?leercapitulo.co\/leer\/.+/,homepage:"https://www.leercapitulo.co/",language:[De.SPANISH],category:He.MANGA,waitEle:"#page_select",run(){const e=[...document.querySelectorAll("#page_select option")].map(t=>t.getAttribute("value")??"");return{title:document.querySelector("h1")?.textContent?.trim(),series:document.querySelector(".chapter-title a")?.getAttribute("href"),pages:e.length,prev:document.querySelector(".pre")?.getAttribute("href"),next:document.querySelector(".next")?.getAttribute("href"),listImages:e}}},T9={name:"LHTranslation",url:/https?:\/\/(www\.)?lhtranslation.net\/read.+/,homepage:"https://lhtranslation.net/",language:[De.ENGLISH],category:He.MANGA,run(){const e=document.querySelector(".form-control option:checked"),t=[...document.querySelectorAll("img.chapter-img")];return{title:document.querySelector(".chapter-img.tieude font")?.textContent?.trim(),series:document.querySelector(".navbar-brand.manga-name")?.getAttribute("href"),pages:t.length,prev:e?.nextElementSibling?.getAttribute("value"),next:e?.previousElementSibling?.getAttribute("value"),listImages:t.map(r=>r.getAttribute("src")??"")}}},L9={name:"Local Files",url:/(file:\/\/\/.+(index)?.html)/,homepage:"/index.html?raw=1",language:[De.RAW],category:He.MANGA,run(e){const t=e??parseInt(/\d+/.exec(window.location.search)?.toString()??"5",10);return{title:"Placeholder Manga Loaded",series:"?reload",pages:document.title==="MangaOnlineViewer Script"?t:0,begin:1,prev:"?pages=50",next:"?pages=1",listImages:[jt(1970,1400,"#2D1657"),jt(985,1400,"#152C55"),jt(985,1400,"#7A1420"),jt(1970,1400,"#806D15"),jt(985,1400,"#0F5B30"),jt(1970,1400,"#1a3e3c"),jt(985,1400,"#480f5b"),jt(985,1400,"#a9bf7a"),jt(985,1400,"#147a56"),jt(1970,1400,"#190343"),jt(985,1400,"#d5b91e"),jt(985,1400,"#836ecd"),jt(985,1400,"#bf19b2"),jt(985,1400,"#152055"),...Array(t).fill(0).map(Rb)]}}},R9={name:"M440",url:/https?:\/\/(www\.)?m440.in\/manga\/.+\/.+\/\d+/,homepage:"https://m440.in/",language:[De.SPANISH],category:He.MANGA,run(){const e=[...document.querySelectorAll("#all img")],t=document.querySelector("#chapter-list li.active");return{title:document.querySelector("title")?.textContent?.trim(),series:document.querySelector("#navbar-collapse-1 ul:nth-child(2) a")?.getAttribute("href"),pages:e.length,prev:t?.nextElementSibling?.firstElementChild?.getAttribute("href"),next:t?.previousElementSibling?.firstElementChild?.getAttribute("href"),listImages:e.map(r=>r.getAttribute("data-src")??"")}}},ph=/^([\t\n])*(https?:\/\/)?.+\.(jpg|jpeg|png|gif|bmp|webp).*$/;function gh(){return[...document.querySelectorAll(".wp-manga-chapter-img, .blocks-gallery-item img, .reading-content img, #chapter-images img, #chapterContent img")].map(e=>{const t=[...e.attributes].filter(r=>/.*(src|url).*/i.test(r.name)&&!/^.*(blank|lazy|loading).*$/.test(r.value));return t.length===0?"":t.find(r=>ph.test(r.value))?.value??e?.getAttribute("src")??""})}var P9={name:["Madara WordPress Plugin","MangaHaus","Isekai Scan","Comic Kiba","Zinmanga","mangatx","Toonily","Mngazuki","JaiminisBox","DisasterScans","ManhuaPlus","TopManhua","NovelMic","Reset-Scans","LeviatanScans","Dragon Tea","SetsuScans","ToonGod","Hades Scans"],url:/https?:\/\/.+\/(manga|series|manhua|comic|ch|novel|webtoon|tmo)\/.+\/.+/,homepage:["https://mangabooth.com/","https://manhuaus.com","https://isekaiscan.com/","https://comickiba.com/","https://zinmanga.com/","https://mangatx.com/","https://toonily.net/","https://mangazuki.me/","https://jaiminisbox.net","https://disasterscans.com/","https://manhuaplus.org/","https://www.topmanhua.com/","https://novelmic.com/","https://reset-scans.com/","https://leviatanscans.com/","https://dragontea.ink/","https://setsuscans.com/","https://toongod.org/home/","https://lectorhades.latamtoon.com"],language:[De.ENGLISH],obs:"Any Site that uses Madara WordPress Plugin",category:He.MANGA,waitFunc:()=>{const e=gh();return e.length>0&&e.every(t=>t&&ph.test(t))},run(){const e=gh();return{title:document.querySelector("#chapter-heading")?.textContent?.trim(),series:(document.querySelector(".breadcrumb li:nth-child(3) a")??document.querySelector(".breadcrumb li:nth-child(2) a"))?.getAttribute("href"),pages:e.length,prev:document.querySelector(".prev_page")?.getAttribute("href"),next:document.querySelector(".next_page")?.getAttribute("href"),listImages:e}}},$9={name:"MangaBall",homepage:"https://mangaball.net/",url:/https?:\/\/mangaball\.net\/chapter-detail\/.+/,language:De.ENGLISH,category:He.MANGA,run:async()=>{const e=[...document.querySelectorAll("script")].find(f=>f.textContent?.includes("chapterImages"))?.textContent;if(!e)return{title:document.querySelector("h1")?.textContent?.trim(),series:document.querySelector('a[href*="/title-detail/"]')?.getAttribute("href")??document.querySelector('a[href*="/manga-detail/"]')?.getAttribute("href"),pages:0,listImages:[]};const t=e.match(/titleId\s*=\s*[`'"](.+?)[`'"]/)?.[1],r=e.match(/chapterNumber\s*=\s*[`'"](.+?)[`'"]/)?.[1],i=e.match(/chapterVolume\s*=\s*[`'"](.+?)[`'"]/)?.[1],a=e.match(/chapterLanguage\s*=\s*[`'"](.+?)[`'"]/)?.[1],s=JSON.parse(e.match(/chapterImages\s*=\s*JSON\.parse\(\s*[`'"](.+?)[`'"]\s*\)/)?.[1]??e.match(/chapterImages\s*=.*(\[.*?\])/)?.[1]??"[]"),l=document.querySelector('meta[name="csrf-token"]')?.getAttribute("content")||"",h=((await(await fetch("/api/v1/chapter/chapter-listing-by-title-id/",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded","X-CSRF-TOKEN":l},body:`title_id=${t}&lang=${a}`})).json()).ALL_CHAPTERS||[]).sort((f,p)=>p.number_float-f.number_float),c=f=>{const p=parseFloat(r||"0"),w=h.findIndex(E=>E.number_float===p);if(w===-1)return;const b=f==="next"?-1:1,m=w+b,v=String(i);for(let E=m;E>=0&&E<h.length;E+=b){const y=h[E].translations.find(S=>S.language===a&&String(S.volume)===v);if(y)return y.url}};return{title:document.querySelector("h1")?.textContent?.trim(),series:document.querySelector(`a[href*="${t}"]`)?.getAttribute("href")??document.querySelector('a[href*="/title-detail/"]')?.getAttribute("href")??document.querySelector('a[href*="/manga-detail/"]')?.getAttribute("href"),pages:s.length,prev:c("prev"),next:c("next"),listImages:s}}},z9={name:"MangaBuddy",url:/https?:\/\/(www\.)?mangabuddy.com\/.+\/chapter.+/,homepage:"https://mangabuddy.com/",language:[De.ENGLISH],category:He.MANGA,waitVar:"chapImages",run(){const e=unsafeWindow.chapImages.split(",").map(t=>new URL(t).pathname.replace("/res/","https://sb.mbcdn.xyz/"));return{title:document.querySelector(".chapter-info")?.textContent?.trim(),series:document.querySelector("#breadcrumbs-container div:nth-child(2) a")?.getAttribute("href"),pages:e.length,prev:document.querySelector("a.prev")?.getAttribute("href"),next:document.querySelector("a.next")?.getAttribute("href"),listImages:e}}},D9={name:"MangaDex",url:/https?:\/\/(www\.)?mangadex.org/,homepage:"https://mangadex.org/",language:[De.ENGLISH],category:He.MANGA,waitEle:"#chapter-selector a",async run(){const e=`https://api.mangadex.org/at-home/server/${/\/chapter\/([^/]+)(\/\d+)?/.exec(window.location.pathname)?.at(1)}`,t=await fetch(e).then(async a=>a.json()),r=t.chapter.data,i=document.querySelectorAll("#chapter-selector a");return{title:document.querySelector("title")?.text.replace(" - MangaDex",""),series:document.querySelector("a.text-primary[href^='/title/']")?.getAttribute("href"),pages:r.length,prev:i?.item(0)?.getAttribute("href"),next:i?.item(1)?.getAttribute("href"),listImages:r.map(a=>`${t.baseUrl}/data/${t.chapter.hash}/${a}`)}}},N9={name:["MangaFox","MangaHere"],url:/https?:\/\/(www\.)?(fanfox.net|mangahere.cc)\/manga\/.+\/.+\//,homepage:["https://fanfox.net/","https://www.mangahere.cc/"],language:[De.ENGLISH],category:He.MANGA,waitVar:"chapterid",async run(){const e=document.querySelector("#dm5_key")?.getAttribute("value"),t={method:"GET",headers:{"Content-Type":"text/plain"}},r=Array(unsafeWindow.imagecount).fill(0).map(async(a,s)=>{const l=`chapterfun.ashx?cid=${unsafeWindow.chapterid??unsafeWindow.chapter_id}&page=${s}&key=${e}`,h=await fetch(l,t).then(async c=>c.text());return(0,eval)(h),d}),i=await Promise.all(r);return{title:document.querySelector(".reader-header-title div")?.textContent?.trim(),series:document.querySelector(".reader-header-title a")?.getAttribute("href"),pages:unsafeWindow.imagecount,prev:unsafeWindow.prechapterurl,next:unsafeWindow.nextchapterurl,listImages:i.map((a,s)=>a[s===0?0:1])}}},B9={name:"Mangago",url:/https?:\/\/(www\.)?mangago.me\/.*\/.*\/.*/,homepage:"https://www.mangago.me/",language:[De.ENGLISH],category:He.MANGA,waitVar:"imgsrcs",run(){const e=CryptoJS.enc.Hex.parse("e11adc3949ba59abbe56e057f20f883e"),t={iv:CryptoJS.enc.Hex.parse("1234567890abcdef1234567890abcdef"),padding:CryptoJS.pad.ZeroPadding},r=CryptoJS.AES.decrypt(unsafeWindow.imgsrcs,e,t).toString(CryptoJS.enc.Utf8).split(",");return{title:`${unsafeWindow.manga_name} ${unsafeWindow.chapter_name}`,series:unsafeWindow.mid,pages:unsafeWindow.total_pages,prev:document.querySelector(".recom p:nth-child(5) a")?.getAttribute("href"),next:unsafeWindow.next_c_url,listImages:r,before(){r.some(i=>i==="")&&document.querySelector("#nform")?.submit()}}}},H9={name:"MangaHub",url:/https?:\/\/(www\.)?(mangahub).io\/chapter\/.+\/.+/,homepage:"https://mangahub.io/",language:[De.ENGLISH],category:He.MANGA,waitEle:"#select-chapter",async run(){function e(s){const l=new RegExp(`${s}=([^;]+)`).exec(document.cookie);return l!=null?decodeURIComponent(l[1]):null}const t={query:`{chapter(x:m01,slug:"${unsafeWindow.CURRENT_MANGA_SLUG??window.location.pathname.split("/")[2]}",number:${window.location.pathname.split("/")[3].replace("chapter-","")}){pages}}`},r={method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json","x-mhub-access":e("mhub_access")??""}},i=await fetch("https://api.mghcdn.com/graphql",r).then(async s=>s.json()),a=JSON.parse(i?.data.chapter.pages.toString());return{title:document.querySelector("#mangareader h3")?.textContent?.trim(),series:document.querySelector("#mangareader a")?.getAttribute("href"),pages:a.i.length,prev:document.querySelector(".previous a")?.getAttribute("href"),next:document.querySelector(".next a")?.getAttribute("href"),listImages:a.i.map(s=>`https://imgx.mghcdn.com/${a.p+s}`)}}},F9={name:["MangaKakalot","NeloManga ","MangaNato","NatoManga","MangaBats"],url:/https?:\/\/(www\.)?(read|chap)?(nelomanga|mangakakalot|natomanga|manganato|mangabats|mangakakalove).(com|gg|net).*\/(chapter|manga)\/.+\/.+/,homepage:["https://mangakakalot.gg/","https://www.nelomanga.com/","https://www.manganato.gg/","https://www.natomanga.com/","https://www.mangabats.com/"],language:[De.ENGLISH],category:He.MANGA,waitEle:".navi-change-chapter-btn-prev, .next, .navi-change-chapter-btn-next, .back",run(){const e=[...document.querySelectorAll("#vungdoc img, .container-chapter-reader img")];return{title:document.querySelector(".info-top-chapter h2, .imageOptions-chapter-info-top h1, .panel-chapter-info-top h1")?.textContent?.trim(),series:document.querySelectorAll("span a[title]").item(1).getAttribute("href"),pages:e.length,prev:document.querySelector(".navi-change-chapter-btn-prev, .next")?.getAttribute("href"),next:document.querySelector(".navi-change-chapter-btn-next, .back")?.getAttribute("href"),listImages:e.map(t=>t.getAttribute("src")??"")}}},G9={name:"MangaOni",url:/https?:\/\/(www\.)?manga-oni.com\/lector\/.+\/\d+\/cascada/,homepage:"https://manga-oni.com/",language:[De.SPANISH],category:He.MANGA,run(){document.querySelector("#c_list")?.dispatchEvent(new Event("mouseover"));const e=document.querySelector("#c_list option:checked"),t=[...document.querySelectorAll("#slider img")];return{title:document.querySelector("title")?.text.replace(" — Manga en línea | MangaOni",""),pages:t?.length,prev:e?.nextElementSibling?.getAttribute("value"),next:e?.previousElementSibling?.getAttribute("value"),listImages:t.map(r=>r.getAttribute("data-src")??r.getAttribute("src")??"")}}},W9={name:"MangaPark",url:/https?:\/\/(www\.)?(mangapark|mpark|comicpark|readpark|parkmanga).(com|me|org|net|io|to)\/title\/.+\/.+/,homepage:"https://mangapark.net/",language:[De.ENGLISH],category:He.MANGA,waitEle:"main div div a.btn-primary",run(){const e=[...document.querySelectorAll("main div div > img.w-full")];return{title:[...document.querySelectorAll(".comic-detail h3 a, .comic-detail h6 span")].map(t=>t.textContent?.trim()).join(" "),series:document.querySelector(".comic-detail a")?.getAttribute("href"),pages:e.length,prev:document.querySelectorAll("main div div a.btn-primary")?.item(0)?.getAttribute("href"),next:document.querySelectorAll("main div div a.btn-primary")?.item(1)?.getAttribute("href"),listImages:e.map(t=>t.getAttribute("src")??"")}}},U9={name:"MangaReader",url:/https?:\/\/(www\.)?mangareader.to\/read\/.+\/.+\/.+/,homepage:"https://mangareader.to",language:[De.ENGLISH],category:He.MANGA,obs:"Some galleries will not be usable",waitEle:".ds-image, .iv-card",async run(){const e=document.querySelector(".chapter-item.active"),t=[...document.querySelectorAll(".ds-image[data-url], .iv-card[data-url]")].map(async r=>{const i=r.getAttribute("data-url")??"";return i&&r.classList.contains("shuffled")?(await imgReverser(i)).toDataURL():i});return{title:document.querySelector(".hr-manga h2")?.textContent?.trim(),series:document.querySelector(".hr-manga")?.getAttribute("href"),pages:t.length,prev:e?.nextElementSibling?.querySelector("a")?.getAttribute("href"),next:e?.previousElementSibling?.querySelector("a")?.getAttribute("href"),listImages:await Promise.all(t)}}},V9={name:["MangaStream WordPress Plugin","Realm Oasis","Voids-Scans","Luminous Scans","Shimada Scans","Night Scans","Manhwa-Freak","OzulScansEn","CypherScans","MangaGalaxy","LuaScans","Drake Scans","Rizzfables","NovatoScans","TresDaos","Lectormiau","NTRGod","Threedaos"],url:/https?:\/\/[^/]*(scans?|comic|realm|rizz|hivetoon|tresdaos|zonamiau|ntrgod|threedaos)[^/]*\/.+/,homepage:["https://themesia.com/mangastream-wordpress-theme/","https://realmoasis.com/","https://void-scans.com/","https://luminous-scans.com/","https://shimadascans.com/","https://night-scans.com/","https://freakcomic.com/","https://ozulscansen.com/","https://cypherscans.xyz/","https://mangagalaxy.me/","https://luascans.com/","https://drake-scans.com/","https://rizzfables.com/","https://www.novatoscans.top/","https://tresdaos.com","https://zonamiau.com/","https://ntrgod.com/","https://threedaos.zdrz.xyz/"],language:[De.ENGLISH,De.SPANISH],category:He.MANGA,waitEle:':where(#readerarea, .check-box, #viewer-img) img:not(.asurascans):not([src*="loader"]):not([src*="chevron"]),:where(.nextprev, .inner_nPL)',run(){const e=[...document.querySelectorAll(this.waitEle??"")];return{title:document.querySelector("title")?.textContent?.trim(),series:document.querySelector(":where(.allc, .tac) a")?.getAttribute("href")??document.querySelectorAll('[class*="breadcrumb"] a').item(1)?.getAttribute("href"),pages:e.length,prev:hh(":where(.nextprev, .inner_nPL) a",["Prev","Anterior"])?.[0]?.getAttribute("href"),next:hh(":where(.nextprev, .inner_nPL) a",["Next","Siguiente"])?.[0]?.getAttribute("href"),listImages:e.map(t=>t.getAttribute("data-src")??t.getAttribute("data-lazy-src")??t.getAttribute("src")??"")}}},q9={name:"MangaToons",url:/https?:\/\/.*mangatoon.mobi\/.+\/watch\/.+/,homepage:"https://mangatoon.mobi/",language:[De.ENGLISH],category:He.MANGA,waitEle:".pictures img:not(.cover)",run(){const e=[...document.querySelectorAll(".pictures img:not(.cover)")];return{title:document.querySelector("title")?.textContent?.trim(),series:document.querySelector(".top-left a")?.getAttribute("href"),pages:e.length,prev:document.querySelector(".page-icons-prev")?.getAttribute("href"),next:document.querySelector(".page-icons-next")?.getAttribute("href"),listImages:e.map(t=>t.getAttribute("data-src")??"")}}},Z9={name:"MangaTown",url:/https?:\/\/www\.mangatown\.com\/manga\/.+\/.+\//,homepage:"https://www.mangatown.com/",language:[De.ENGLISH],category:He.MANGA,waitEle:"div.page_select select option, .read_img .image",run(){const e=document.querySelector("div.page_select select")?.querySelectorAll("option"),t=[...document.querySelectorAll(".read_img .image")].map(i=>i.getAttribute("src")??""),r=[...e??[]].map(i=>i.value).filter(i=>!i.endsWith("featured.html")).map(i=>new URL(i,window.location.href).href);return{title:document.querySelector("div.title h1")?.textContent?.trim(),series:document.querySelector("div.title a")?.getAttribute("href"),pages:unsafeWindow.total_pages||r.length,prev:document.querySelector(".chapter_select option:checked")?.previousElementSibling?.getAttribute("value"),next:document.querySelector(".chapter_select option:checked")?.nextElementSibling?.getAttribute("value"),...t.length>1?{listImages:t}:{listPages:r,img:"#image"}}}},j9={name:"ManhwaWeb",url:/https?:\/\/(www\.)?manhwaweb.com\/leer\/.+/,homepage:"https://manhwaweb.com/",language:[De.SPANISH],category:He.MANGA,async run(){const e=window.location.pathname.replace("/leer",""),t=await fetch(`https://manhwawebbackend-production.up.railway.app/chapters/see${e}`).then(async i=>i.json()),r=await fetch(`https://manhwawebbackend-production.up.railway.app/chapters/seeprevpost${e}`).then(async i=>i.json());return{title:`${t.name} ${t.chapter.chapter}`,series:[...document.querySelectorAll("div")].filter(i=>i.textContent==="Episodios")?.[0]?.parentElement?.getAttribute("href"),pages:t.chapter.img.length,prev:r.chapterAnterior.replace(t._id,t.real_id),next:r.chapterSiguiente.replace(t._id,t.real_id),listImages:t.chapter.img}}},K9={name:["MangaGeko.com","MangaGeko.cc"],url:/https?:\/\/(www\.)?mgeko.(com|cc)?\/reader\/.*/,homepage:["https://www.mgeko.com/","https://www.mgeko.cc/"],language:[De.ENGLISH],category:He.MANGA,run(){const e=[...document.querySelectorAll('img[id^="image-"]')];return{title:document.querySelector(".titles")?.textContent?.trim(),series:document.querySelector(".titles a")?.getAttribute("href"),pages:e.length,prev:document.querySelector(".chnav.prev:not(.isDisabled)")?.getAttribute("href"),next:document.querySelector(".chnav.next:not(.isDisabled)")?.getAttribute("href"),listImages:e.map(t=>t.getAttribute("src")??"")}}},Y9={name:"NineAnime",url:/https?:\/\/(www\.)?nineanime.com\/chapter\/.+/,homepage:"https://www.nineanime.com/",language:[De.ENGLISH],category:He.MANGA,run(){const e=[...document.querySelectorAll(".sl-page option")],t=document.querySelector(".mangaread-pagenav select option[selected]");return{title:`${document.querySelector(".title h1")?.textContent?.trim()}/${document.querySelector(".title h2")?.textContent?.trim()}`,series:document.querySelector(".title a:has(h2)")?.getAttribute("href"),pages:e.length,prev:t?.nextElementSibling?.getAttribute("value"),next:t?.previousElementSibling?.getAttribute("value"),listPages:e.map(r=>r.getAttribute("value")??""),img:".manga_pic"}}},X9={name:"Olympus",url:/https?:\/\/(www\.)?olympusxyz.com\/capitulo\/\d+\/.+/,homepage:"https://olympusxyz.com/",language:[De.SPANISH],category:He.MANGA,run(){const e=[...document.querySelectorAll("section img.w-full.h-full")];return{title:document.querySelector("title")?.textContent?.replace(/\|.+/,"").trim(),series:document.querySelector("h1")?.closest("a")?.getAttribute("href"),pages:e.length,prev:document.querySelector('a[name="capitulo anterior"]')?.getAttribute("href"),next:document.querySelector('a[name="capitulo siguiente"]')?.getAttribute("href"),listImages:e.map(t=>t.getAttribute("src")??"")}}},J9={name:"QiManhwa",url:/https?:\/\/qimanhwa\.com\/series\/[^/]+\/chapter-.+/,homepage:"https://qimanhwa.com/",language:[De.ENGLISH],category:He.MANGA,waitEle:'img[alt*="Chapter"]',run(){const e=[...document.querySelectorAll('img[alt*="Chapter"]')];return{title:document.querySelector("h1")?.textContent?.trim(),series:Jn("button","Home","a")?.getAttribute("href"),pages:e.length,prev:document.querySelector(".lucide-chevron-left")?.closest("a")?.getAttribute("href"),next:document.querySelector(".lucide-chevron-right")?.closest("a")?.getAttribute("href"),listImages:e.map(t=>t.getAttribute("src")??"")}}},Q9={name:"ReadComicsOnline",url:/https?:\/\/(www\.)?readcomicsonline.ru\/comic\/.*\/\d*/,homepage:"https://readcomicsonline.ru/",language:[De.ENGLISH],category:He.COMIC,run(){const e=[...document.querySelectorAll("#all img")];return{title:unsafeWindow.title.replace(/ - Page \d+/,""),series:document.querySelector("div.pager-cnt a")?.getAttribute("href"),pages:unsafeWindow.pages.length,prev:unsafeWindow.prev_chapter,next:unsafeWindow.next_chapter,listImages:e.map(t=>t.getAttribute("data-src")??"")}}},ew={name:"ReaperScans",url:/https?:\/\/(www\.)?reaperscans\.com\/series\/.+\/chapter.+/,homepage:"https://reaperscans.com/",language:[De.ENGLISH],category:He.MANGA,waitEle:"#content .container img:not(.rounded)",run(){const e=[...document.querySelectorAll("#content .container img:not(.rounded)")];return{title:document.querySelector("title")?.textContent?.trim(),series:document.querySelector("button .fa-house")?.closest("a")?.getAttribute("href"),pages:e.length,prev:document.querySelector(".fa-chevron-left")?.closest("a")?.getAttribute("href"),next:document.querySelector(".fa-chevron-right")?.closest("a")?.getAttribute("href"),listImages:e.map(t=>(t.getAttribute("data-src")||t.getAttribute("src"))??"")}}},tw={name:"TuMangaOnline",url:/https?:\/\/(www\.)?zonatmo\.(com|org|app)\/(viewer|news|view_uploads|reader|library)\/.+/,homepage:"https://zonatmo.org/",language:[De.SPANISH],category:He.MANGA,run(){const e=[...document.querySelectorAll(".img-container img, .viewer-container img, .content-image, .viewer-image, .img-fluid, .reader-img-wrap img, .viewer-img, #viewer-container img, .viewer-page")],t=[...document.querySelectorAll("div.container:nth-child(4) select#viewer-pages-select option, #viewer-pages-select option, select#chapter-pages option, select#pages option")],r=e.length>1?e.length:t.length;return{title:document.querySelector("title")?.textContent?.trim(),series:(document.querySelector('a[title="Volver"]')??document.querySelector(".breadcrumb-item:nth-child(2) a")??document.querySelector(".book-name a")??document.querySelector(".breadcrumb-item a"))?.getAttribute("href"),pages:r||1,prev:(document.querySelector(".chapter-prev a")??document.querySelector(".prev_page")??document.querySelector("a.prev-chapter")??document.querySelector(".chapter-prev-btn"))?.getAttribute("href"),next:(document.querySelector(".chapter-next a")??document.querySelector(".next_page")??document.querySelector("a.next-chapter")??document.querySelector(".chapter-next-btn"))?.getAttribute("href"),...e.length<=1&&t.length>1?{listPages:Array(t.length).fill(0).map((i,a)=>`${window.location.href.replace(/\/\d+$/,"")}/${a+1}`)}:{listImages:e.map(i=>i.getAttribute("data-src")??i.getAttribute("data-original")??i.getAttribute("src")??"")},img:"#viewer-container img, .viewer-page, .img-container img, .content-image, .viewer-image, .reader-img-wrap img, .viewer-img",before(){if(window.location.pathname.includes("paginated")&&(window.location.pathname=window.location.pathname.replace(/paginated.*/,"cascade")),window.location.pathname.includes("view_uploads")){const i=document.querySelector("a.btn.btn-primary, .btn-primary a, a.btn-block");i&&i.click()}}}}},rw={name:"Vortex Scans",url:/https?:\/\/(www.)?(vortexscans).(org)\/.+/,homepage:"https://vortexscans.org/",language:[De.ENGLISH],category:He.MANGA,waitVar:"__next_f",waitFunc(){return unsafeWindow.__next_f.find(e=>/images/.test(e?.[1]))?.length>0},run(){const e=unsafeWindow.__next_f.find(r=>/images/.test(r?.[1]))?.[1],t=e.slice(e.indexOf("images")).match(/http[^"]+\.(png|gif|jpg|jpeg|webp)/g)??[];return{title:document.querySelector("time")?.closest("div")?.querySelector("div")?.textContent?.trim(),series:document.querySelector("time")?.closest("a")?.getAttribute("href"),pages:t?.length,prev:Jn("button","Prev","a")?.getAttribute("href"),next:Jn("button","Next","a")?.getAttribute("href"),listImages:t}}},nw={name:"WebNovel",url:/https?:\/\/(www\.)?webnovel.com\/comic\/.+/,homepage:"https://www.webnovel.com/",language:[De.ENGLISH],category:He.MANGA,waitVar:"g_data",run(){const e=unsafeWindow.g_data.chapter.chapterInfo.chapterPage.map(t=>t.url);return{title:document.querySelector("title")?.textContent?.trim(),series:"./",pages:e.length,prev:`${unsafeWindow.g_data.chapter.chapterInfo.preChapterName}_${unsafeWindow.g_data.chapter.chapterInfo.preChapterId}`,next:`${unsafeWindow.g_data.chapter.chapterInfo.nextChapterName}_${unsafeWindow.g_data.chapter.chapterInfo.nextChapterId}`,listImages:e}}},ow={name:"WebToons",url:/https?:\/\/(www\.)?webtoons.com\/.+viewer.+/,homepage:"https://www.webtoons.com/",language:[De.ENGLISH],category:He.MANGA,run(){const e=[...document.querySelectorAll("#_imageList img")];return{title:document.querySelector(".subj_info")?.textContent?.trim(),series:document.querySelector(".subj_info a")?.getAttribute("href"),pages:e.length,prev:document.querySelector("._prevEpisode")?.getAttribute("href"),next:document.querySelector("._nextEpisode")?.getAttribute("href"),listImages:e.map(t=>t.getAttribute("data-url")??t.getAttribute("data-src")??t.getAttribute("src")??"")}}},iw={name:"WeebCentral",url:/https?:\/\/(www\.)?(weebcentral).com\/chapters\/.+/,homepage:"https://weebcentral.com/",language:[De.ENGLISH],category:He.MANGA,waitEle:'section[hx-get*="/images"]',async run(){if(document.documentElement.hasAttribute("mov"))return{pages:0,listImages:[]};const e=document.querySelector('section[hx-get*="/images"]')?.getAttribute("hx-get");if(!e)throw new Error("Images HTMX endpoint not found");const t=`${e.replace(/&amp;/g,"&")}&reading_style=long_strip`,r=await fetch(t,{headers:{"HX-Request":"true"}}).then(p=>p.text()),i=new DOMParser,a=[...i.parseFromString(r,"text/html").querySelectorAll("img")].map(p=>p.getAttribute("src")||p.getAttribute("data-src")||"").filter(p=>p&&!p.includes("broken_image")).map(p=>p.startsWith("http")?p:new URL(p,window.location.origin).href),s=[...new Set(a)].sort((p,w)=>{const b=p.match(/-(\d+)\.[^.]+$/),m=w.match(/-(\d+)\.[^.]+$/);return(b?parseInt(b[1],10):0)-(m?parseInt(m[1],10):0)}),l=document.querySelector('button[hx-get*="chapter-select"]')?.getAttribute("hx-get"),h=await fetch(l??"",{headers:{"HX-Request":"true"}}).then(p=>p.text()),c=i.parseFromString(h,"text/html").querySelector("#selected_chapter"),f=p=>p?p.startsWith("http")?p:new URL(p,window.location.origin).href:null;return{title:document.title.split(" - ")[0].trim(),series:f(document.querySelector("main section a.btn-ghost")?.getAttribute("href")),pages:s.length,prev:f(c?.nextElementSibling?.getAttribute("href")),next:f(c?.previousElementSibling?.getAttribute("href")),listImages:s,fetchOptions:{headers:{"HX-Request":"true",Referer:window.location.href}}}}},aw={name:"WeebDex",url:/https?:\/\/(www\.)?weebdex\.org\/.+/,homepage:"https://weebdex.org/",language:De.ENGLISH,category:He.MANGA,waitEle:'a[href^="/title/"]',async run(){const e=/\/chapter\/([^/]+)/.exec(window.location.pathname)?.at(1),t=`https://api.weebdex.org/chapter/${e}`,r=await fetch(t).then(async h=>h.json()),i=document.querySelector('a[href^="/title/"]'),a=`https://api.weebdex.org/manga/${r.relationships.manga.id}/aggregate?lang=${r.language}`,s=(await fetch(a).then(async h=>h.json())).chapters||[],l=s.findIndex(h=>h.chapter===r.chapter);return{title:document.querySelector("title")?.textContent?.trim().replace(/Page \d+:/,""),series:i?.getAttribute("href"),pages:r.data.length,prev:s[l+1]?`/chapter/${xe.default.keys(s[l+1].entries)[0]}`:void 0,next:s[l-1]?`/chapter/${xe.default.keys(s[l-1].entries)[0]}`:void 0,listImages:r.data.map(h=>`${r.node}/data/${e}/${h.name}`)}}},sw={name:"ZeroScans",url:/https?:\/\/(www\.)?zscans.com\/comics\/.+/,homepage:"https://zscans.com/",language:[De.ENGLISH],category:He.MANGA,waitVar:"__ZEROSCANS__",run(){const e=unsafeWindow.__ZEROSCANS__.data.at(0).current_chapter.high_quality,t=document.querySelectorAll(".v-btn--router");return{title:document.querySelector("title")?.textContent?.trim(),series:document.querySelector(".v-breadcrumbs li:nth-child(2) + a")?.getAttribute("href"),pages:e.length,prev:t[0]?.getAttribute("href"),next:t[1]?.getAttribute("href"),listImages:e}}},lw=[s9,l9,c9,d9,y9,k9,E9,A9,I9,C9,O9,T9,L9,R9,z9,D9,N9,B9,H9,F9,$9,G9,W9,U9,q9,Z9,j9,K9,Y9,X9,J9,Q9,ew,tw,nw,ow,iw,aw,rw,sw,V9,S9,P9];r9(lw).catch(ye)})();
