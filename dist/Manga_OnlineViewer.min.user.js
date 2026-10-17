// ==UserScript==
// @name          Manga OnlineViewer
// @author        Tago
// @updateURL     https://github.com/TagoDR/MangaOnlineViewer/raw/master/dist/Manga_OnlineViewer.meta.js
// @downloadURL   https://github.com/TagoDR/MangaOnlineViewer/raw/master/dist/Manga_OnlineViewer.user.js
// @supportURL    https://github.com/TagoDR/MangaOnlineViewer/issues
// @namespace     https://github.com/TagoDR
// @description   Shows all pages at once in online view for these sites: Asura Scans, Batoto, BilibiliComics, Comick, Comix.to, DemonicScans, Dynasty-Scans, Flame Comics, Ikigai Mangas - EltaNews, Ikigai Mangas - Ajaco, Kagane, KuManga, LeerCapitulo, LectorXD, LHTranslation, Local Files, M440, MangaBuddy, MangaDex, MangaFox, MangaHere, Mangago, MangaHub, MangaKakalot, NeloManga, MangaNato, NatoManga, MangaBats, MangaBall, MangaOni, MangaPark, MangaReader, MangaToons, MangaTown, ManhwaWeb, MangaGeko.com, MangaGeko.cc, NineAnime, Olympus, Qi Manga, QiManhwa, ReadComicsOnline, ReaperScans, ReiManga, TuMangaOnline, WebNovel, WebToons, WeebCentral, WeebDex, Vortex Scans, ZeroScans, MangaStream WordPress Plugin, Realm Oasis, Voids-Scans, Luminous Scans, Shimada Scans, Night Scans, Manhwa-Freak, OzulScansEn, CypherScans, MangaGalaxy, LuaScans, Drake Scans, Rizzfables, NovatoScans, TresDaos, Lectormiau, NTRGod, Threedaos, FoOlSlide, Kireicake, Madara WordPress Plugin, MangaHaus, Isekai Scan, Comic Kiba, Zinmanga, mangatx, Toonily, Mngazuki, JaiminisBox, DisasterScans, ManhuaPlus, TopManhua, NovelMic, Reset-Scans, LeviatanScans, Dragon Tea, SetsuScans, ToonGod, Hades Scans
// @version       2026.10.17.build-2343
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
// @require       https://cdn.jsdelivr.net/npm/colorjs.io@0.7.1/dist/color.global.min.js
// @require       https://cdnjs.cloudflare.com/ajax/libs/jszip/3.9.1/jszip.min.js
// @require       https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.js
// @require       https://cdn.jsdelivr.net/npm/lodash@4.18.1/lodash.min.js
// @require       https://cdn.jsdelivr.net/npm/hotkeys-js@4.0.7/dist/hotkeys-js.min.js
// @require       https://cdn.jsdelivr.net/npm/bowser@2.14.1/bundled.js
// @require       https://cdnjs.cloudflare.com/ajax/libs/blob-util/2.0.2/blob-util.min.js
// @require       https://cdnjs.cloudflare.com/ajax/libs/FileSaver.js/2.0.5/FileSaver.min.js
// @include       /https?:\/\/(www.)?(asurascans|asuracomics).(com|net)\/.+/
// @include       /https?:\/\/(?:www\.)?(?:fto|jto|hto|dto|mto|wto|bato|battwo|batotwo|comiko|batocomic|readtoto|zbato|xbato|mangatoto)\.(?:to|com|net|org)\/(chapter|title).*/
// @include       /https?:\/\/(www\.)?(bilibilicomics).net\/episode\/.+/
// @include       /https?:\/\/(www\.)?comick.io\/.+/
// @include       /https?:\/\/comix\.to\/(title|comic)\/.+\/.+/
// @include       /https?:\/\/(www\.)?demonicscans\.org\/(title\/.+\/chapter\/.+|chaptered\.php\?manga=\d+&chapter=.+)/
// @include       /https?:\/\/(www\.)?dynasty-scans.com\/chapters\/.+/
// @include       /https?:\/\/(www.)?(flamecomics).(xyz)\/series\/.+/
// @include       /https?:\/\/(visorikigai|visualikigai).(ajaco|eltanews|foodib|jobswu).(com|net|site)\/capitulo\/\d+/
// @include       /https:\/\/(www\.)?kagane\.org\/series\/.+\/reader\/.+/
// @include       /https?:\/\/(www\.)?kumanga.com\/manga\/leer\/.+/
// @include       /https?:\/\/(www\.)?leercapitulo\.co\/leer\/.+/
// @include       /https?:\/\/(www\.)?lectorxd\.com\/.+\/leer\/.+/
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
// @include       /https?:\/\/(www\.)?olympusxyz\.com\/(series\/[^/]+\/)?capitulo\/.+/
// @include       /https?:\/\/(www\.)?qimanga\.com\/series\/[^/]+\/chapter-.+/
// @include       /https?:\/\/qimanhwa\.com\/series\/[^/]+\/chapter-.+/
// @include       /https?:\/\/(www\.)?readcomicsonline.ru\/comic\/.*\/\d*/
// @include       /https?:\/\/(www\.)?reaperscans\.com\/series\/.+\/chapter.+/
// @include       /https?:\/\/(www\.)?reimanga\.com\/manga\/[^/]+-\d+\/\d+/
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
(function(){var wp=Object.create,ca=Object.defineProperty,_p=Object.getOwnPropertyDescriptor,yp=Object.getOwnPropertyNames,kp=Object.getPrototypeOf,Xu=Object.prototype.hasOwnProperty,xr=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t,t.exports),e=null),t.exports),sn=(e,t)=>{let n={};for(var o in e)ca(n,o,{get:e[o],enumerable:!0});return t||ca(n,Symbol.toStringTag,{value:"Module"}),n},Ep=(e,t,n,o)=>{if(t&&typeof t=="object"||typeof t=="function")for(var a=yp(t),s=0,c=a.length,l;s<c;s++)l=a[s],!Xu.call(e,l)&&l!==n&&ca(e,l,{get:(f=>t[f]).bind(null,l),enumerable:!(o=_p(t,l))||o.enumerable});return e},ua=(e,t,n)=>(n=e!=null?wp(kp(e)):{},Ep(t||!e||!e.__esModule||!Xu.call(e,"default")?ca(n,"default",{value:e,enumerable:!0}):n,e)),Sp=xr(((e,t,n)=>{(function(o,a){typeof e=="object"&&typeof t=="object"?t.exports=a():typeof define=="function"&&define.amd?define([],a):typeof e=="object"?e.bowser=a():o.bowser=a()})(n,(function(){return(function(o){var a={};function s(c){if(a[c])return a[c].exports;var l=a[c]={i:c,l:!1,exports:{}};return o[c].call(l.exports,l,l.exports,s),l.l=!0,l.exports}return s.m=o,s.c=a,s.d=function(c,l,f){s.o(c,l)||Object.defineProperty(c,l,{enumerable:!0,get:f})},s.r=function(c){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(c,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(c,"__esModule",{value:!0})},s.t=function(c,l){if(1&l&&(c=s(c)),8&l||4&l&&typeof c=="object"&&c&&c.__esModule)return c;var f=Object.create(null);if(s.r(f),Object.defineProperty(f,"default",{enumerable:!0,value:c}),2&l&&typeof c!="string")for(var h in c)s.d(f,h,function(p){return c[p]}.bind(null,h));return f},s.n=function(c){var l=c&&c.__esModule?function(){return c.default}:function(){return c};return s.d(l,"a",l),l},s.o=function(c,l){return Object.prototype.hasOwnProperty.call(c,l)},s.p="",s(s.s=90)})({17:function(o,a,s){"use strict";a.__esModule=!0,a.default=void 0;var c=s(18);a.default=(function(){function l(){}return l.getFirstMatch=function(f,h){var p=h.match(f);return p&&p.length>0&&p[1]||""},l.getSecondMatch=function(f,h){var p=h.match(f);return p&&p.length>1&&p[2]||""},l.matchAndReturnConst=function(f,h,p){if(f.test(h))return p},l.getWindowsVersionName=function(f){switch(f){case"NT":return"NT";case"XP":return"XP";case"NT 5.0":return"2000";case"NT 5.1":return"XP";case"NT 5.2":return"2003";case"NT 6.0":return"Vista";case"NT 6.1":return"7";case"NT 6.2":return"8";case"NT 6.3":return"8.1";case"NT 10.0":return"10";default:return}},l.getMacOSVersionName=function(f){var h=f.split(".").splice(0,2).map((function(_){return parseInt(_,10)||0}));h.push(0);var p=h[0],m=h[1];if(p===10)switch(m){case 5:return"Leopard";case 6:return"Snow Leopard";case 7:return"Lion";case 8:return"Mountain Lion";case 9:return"Mavericks";case 10:return"Yosemite";case 11:return"El Capitan";case 12:return"Sierra";case 13:return"High Sierra";case 14:return"Mojave";case 15:return"Catalina";default:return}switch(p){case 11:return"Big Sur";case 12:return"Monterey";case 13:return"Ventura";case 14:return"Sonoma";case 15:return"Sequoia";default:return}},l.getAndroidVersionName=function(f){var h=f.split(".").splice(0,2).map((function(p){return parseInt(p,10)||0}));if(h.push(0),!(h[0]===1&&h[1]<5))return h[0]===1&&h[1]<6?"Cupcake":h[0]===1&&h[1]>=6?"Donut":h[0]===2&&h[1]<2?"Eclair":h[0]===2&&h[1]===2?"Froyo":h[0]===2&&h[1]>2?"Gingerbread":h[0]===3?"Honeycomb":h[0]===4&&h[1]<1?"Ice Cream Sandwich":h[0]===4&&h[1]<4?"Jelly Bean":h[0]===4&&h[1]>=4?"KitKat":h[0]===5?"Lollipop":h[0]===6?"Marshmallow":h[0]===7?"Nougat":h[0]===8?"Oreo":h[0]===9?"Pie":void 0},l.getVersionPrecision=function(f){return f.split(".").length},l.compareVersions=function(f,h,p){p===void 0&&(p=!1);var m=l.getVersionPrecision(f),_=l.getVersionPrecision(h),v=Math.max(m,_),y=0,w=l.map([f,h],(function(b){var S=v-l.getVersionPrecision(b),M=b+new Array(S+1).join(".0");return l.map(M.split("."),(function(C){return new Array(20-C.length).join("0")+C})).reverse()}));for(p&&(y=v-Math.min(m,_)),v-=1;v>=y;){if(w[0][v]>w[1][v])return 1;if(w[0][v]===w[1][v]){if(v===y)return 0;v-=1}else if(w[0][v]<w[1][v])return-1}},l.map=function(f,h){var p,m=[];if(Array.prototype.map)return Array.prototype.map.call(f,h);for(p=0;p<f.length;p+=1)m.push(h(f[p]));return m},l.find=function(f,h){var p,m;if(Array.prototype.find)return Array.prototype.find.call(f,h);for(p=0,m=f.length;p<m;p+=1){var _=f[p];if(h(_,p))return _}},l.assign=function(f){for(var h,p,m=f,_=arguments.length,v=new Array(_>1?_-1:0),y=1;y<_;y++)v[y-1]=arguments[y];if(Object.assign)return Object.assign.apply(Object,[f].concat(v));var w=function(){var b=v[h];typeof b=="object"&&b!==null&&Object.keys(b).forEach((function(S){m[S]=b[S]}))};for(h=0,p=v.length;h<p;h+=1)w();return f},l.getBrowserAlias=function(f){return c.BROWSER_ALIASES_MAP[f]},l.getBrowserTypeByAlias=function(f){return c.BROWSER_MAP[f]||""},l})(),o.exports=a.default},18:function(o,a,s){"use strict";a.__esModule=!0,a.ENGINE_MAP=a.OS_MAP=a.PLATFORMS_MAP=a.BROWSER_MAP=a.BROWSER_ALIASES_MAP=void 0,a.BROWSER_ALIASES_MAP={AmazonBot:"amazonbot","Amazon Silk":"amazon_silk","Android Browser":"android",BaiduSpider:"baiduspider",Bada:"bada",BingCrawler:"bingcrawler",Brave:"brave",BlackBerry:"blackberry","ChatGPT-User":"chatgpt_user",Chrome:"chrome",ClaudeBot:"claudebot",Chromium:"chromium",Diffbot:"diffbot",DuckDuckBot:"duckduckbot",DuckDuckGo:"duckduckgo",Electron:"electron",Epiphany:"epiphany",FacebookExternalHit:"facebookexternalhit",Firefox:"firefox",Focus:"focus",Generic:"generic","Google Search":"google_search",Googlebot:"googlebot",GPTBot:"gptbot","Internet Explorer":"ie",InternetArchiveCrawler:"internetarchivecrawler","K-Meleon":"k_meleon",LibreWolf:"librewolf",Linespider:"linespider",Maxthon:"maxthon","Meta-ExternalAds":"meta_externalads","Meta-ExternalAgent":"meta_externalagent","Meta-ExternalFetcher":"meta_externalfetcher","Meta-WebIndexer":"meta_webindexer","Microsoft Edge":"edge","MZ Browser":"mz","NAVER Whale Browser":"naver","OAI-SearchBot":"oai_searchbot",Omgilibot:"omgilibot",Opera:"opera","Opera Coast":"opera_coast","Pale Moon":"pale_moon",PerplexityBot:"perplexitybot","Perplexity-User":"perplexity_user",PhantomJS:"phantomjs",PingdomBot:"pingdombot",Puffin:"puffin",QQ:"qq",QQLite:"qqlite",QupZilla:"qupzilla",Roku:"roku",Safari:"safari",Sailfish:"sailfish","Samsung Internet for Android":"samsung_internet",SlackBot:"slackbot",SeaMonkey:"seamonkey",Sleipnir:"sleipnir","Sogou Browser":"sogou",Swing:"swing",Tizen:"tizen","UC Browser":"uc",Vivaldi:"vivaldi","WebOS Browser":"webos",WeChat:"wechat",YahooSlurp:"yahooslurp","Yandex Browser":"yandex",YandexBot:"yandexbot",YouBot:"youbot"},a.BROWSER_MAP={amazonbot:"AmazonBot",amazon_silk:"Amazon Silk",android:"Android Browser",baiduspider:"BaiduSpider",bada:"Bada",bingcrawler:"BingCrawler",blackberry:"BlackBerry",brave:"Brave",chatgpt_user:"ChatGPT-User",chrome:"Chrome",claudebot:"ClaudeBot",chromium:"Chromium",diffbot:"Diffbot",duckduckbot:"DuckDuckBot",duckduckgo:"DuckDuckGo",edge:"Microsoft Edge",electron:"Electron",epiphany:"Epiphany",facebookexternalhit:"FacebookExternalHit",firefox:"Firefox",focus:"Focus",generic:"Generic",google_search:"Google Search",googlebot:"Googlebot",gptbot:"GPTBot",ie:"Internet Explorer",internetarchivecrawler:"InternetArchiveCrawler",k_meleon:"K-Meleon",librewolf:"LibreWolf",linespider:"Linespider",maxthon:"Maxthon",meta_externalads:"Meta-ExternalAds",meta_externalagent:"Meta-ExternalAgent",meta_externalfetcher:"Meta-ExternalFetcher",meta_webindexer:"Meta-WebIndexer",mz:"MZ Browser",naver:"NAVER Whale Browser",oai_searchbot:"OAI-SearchBot",omgilibot:"Omgilibot",opera:"Opera",opera_coast:"Opera Coast",pale_moon:"Pale Moon",perplexitybot:"PerplexityBot",perplexity_user:"Perplexity-User",phantomjs:"PhantomJS",pingdombot:"PingdomBot",puffin:"Puffin",qq:"QQ Browser",qqlite:"QQ Browser Lite",qupzilla:"QupZilla",roku:"Roku",safari:"Safari",sailfish:"Sailfish",samsung_internet:"Samsung Internet for Android",seamonkey:"SeaMonkey",slackbot:"SlackBot",sleipnir:"Sleipnir",sogou:"Sogou Browser",swing:"Swing",tizen:"Tizen",uc:"UC Browser",vivaldi:"Vivaldi",webos:"WebOS Browser",wechat:"WeChat",yahooslurp:"YahooSlurp",yandex:"Yandex Browser",yandexbot:"YandexBot",youbot:"YouBot"},a.PLATFORMS_MAP={bot:"bot",desktop:"desktop",mobile:"mobile",tablet:"tablet",tv:"tv"},a.OS_MAP={Android:"Android",Bada:"Bada",BlackBerry:"BlackBerry",ChromeOS:"Chrome OS",HarmonyOS:"HarmonyOS",iOS:"iOS",Linux:"Linux",MacOS:"macOS",PlayStation4:"PlayStation 4",Roku:"Roku",Tizen:"Tizen",WebOS:"WebOS",Windows:"Windows",WindowsPhone:"Windows Phone"},a.ENGINE_MAP={Blink:"Blink",EdgeHTML:"EdgeHTML",Gecko:"Gecko",Presto:"Presto",Trident:"Trident",WebKit:"WebKit"}},90:function(o,a,s){"use strict";a.__esModule=!0,a.default=void 0;var c,l=(c=s(91))&&c.__esModule?c:{default:c},f=s(18);function h(p,m){for(var _=0;_<m.length;_++){var v=m[_];v.enumerable=v.enumerable||!1,v.configurable=!0,"value"in v&&(v.writable=!0),Object.defineProperty(p,v.key,v)}}a.default=(function(){function p(){}var m,_,v;return p.getParser=function(y,w,b){if(w===void 0&&(w=!1),b===void 0&&(b=null),typeof y!="string")throw new Error("UserAgent should be a string");return new l.default(y,w,b)},p.parse=function(y,w){return w===void 0&&(w=null),new l.default(y,w).getResult()},m=p,v=[{key:"BROWSER_MAP",get:function(){return f.BROWSER_MAP}},{key:"ENGINE_MAP",get:function(){return f.ENGINE_MAP}},{key:"OS_MAP",get:function(){return f.OS_MAP}},{key:"PLATFORMS_MAP",get:function(){return f.PLATFORMS_MAP}}],(_=null)&&h(m.prototype,_),v&&h(m,v),p})(),o.exports=a.default},91:function(o,a,s){"use strict";a.__esModule=!0,a.default=void 0;var c=m(s(92)),l=m(s(93)),f=m(s(94)),h=m(s(95)),p=m(s(17));function m(_){return _&&_.__esModule?_:{default:_}}a.default=(function(){function _(y,w,b){if(w===void 0&&(w=!1),b===void 0&&(b=null),y==null||y==="")throw new Error("UserAgent parameter can't be empty");this._ua=y;var S=!1;typeof w=="boolean"?(S=w,this._hints=b):this._hints=w!=null&&typeof w=="object"?w:null,this.parsedResult={},S!==!0&&this.parse()}var v=_.prototype;return v.getHints=function(){return this._hints},v.hasBrand=function(y){if(!this._hints||!Array.isArray(this._hints.brands))return!1;var w=y.toLowerCase();return this._hints.brands.some((function(b){return b.brand&&b.brand.toLowerCase()===w}))},v.getBrandVersion=function(y){if(this._hints&&Array.isArray(this._hints.brands)){var w=y.toLowerCase(),b=this._hints.brands.find((function(S){return S.brand&&S.brand.toLowerCase()===w}));return b?b.version:void 0}},v.getUA=function(){return this._ua},v.test=function(y){return y.test(this._ua)},v.parseBrowser=function(){var y=this;this.parsedResult.browser={};var w=p.default.find(c.default,(function(b){if(typeof b.test=="function")return b.test(y);if(Array.isArray(b.test))return b.test.some((function(S){return y.test(S)}));throw new Error("Browser's test function is not valid")}));return w&&(this.parsedResult.browser=w.describe(this.getUA(),this)),this.parsedResult.browser},v.getBrowser=function(){return this.parsedResult.browser?this.parsedResult.browser:this.parseBrowser()},v.getBrowserName=function(y){return y?String(this.getBrowser().name).toLowerCase()||"":this.getBrowser().name||""},v.getBrowserVersion=function(){return this.getBrowser().version},v.getOS=function(){return this.parsedResult.os?this.parsedResult.os:this.parseOS()},v.parseOS=function(){var y=this;this.parsedResult.os={};var w=p.default.find(l.default,(function(b){if(typeof b.test=="function")return b.test(y);if(Array.isArray(b.test))return b.test.some((function(S){return y.test(S)}));throw new Error("Browser's test function is not valid")}));return w&&(this.parsedResult.os=w.describe(this.getUA())),this.parsedResult.os},v.getOSName=function(y){var w=this.getOS().name;return y?String(w).toLowerCase()||"":w||""},v.getOSVersion=function(){return this.getOS().version},v.getPlatform=function(){return this.parsedResult.platform?this.parsedResult.platform:this.parsePlatform()},v.getPlatformType=function(y){y===void 0&&(y=!1);var w=this.getPlatform().type;return y?String(w).toLowerCase()||"":w||""},v.parsePlatform=function(){var y=this;this.parsedResult.platform={};var w=p.default.find(f.default,(function(b){if(typeof b.test=="function")return b.test(y);if(Array.isArray(b.test))return b.test.some((function(S){return y.test(S)}));throw new Error("Browser's test function is not valid")}));return w&&(this.parsedResult.platform=w.describe(this.getUA())),this.parsedResult.platform},v.getEngine=function(){return this.parsedResult.engine?this.parsedResult.engine:this.parseEngine()},v.getEngineName=function(y){return y?String(this.getEngine().name).toLowerCase()||"":this.getEngine().name||""},v.parseEngine=function(){var y=this;this.parsedResult.engine={};var w=p.default.find(h.default,(function(b){if(typeof b.test=="function")return b.test(y);if(Array.isArray(b.test))return b.test.some((function(S){return y.test(S)}));throw new Error("Browser's test function is not valid")}));return w&&(this.parsedResult.engine=w.describe(this.getUA())),this.parsedResult.engine},v.parse=function(){return this.parseBrowser(),this.parseOS(),this.parsePlatform(),this.parseEngine(),this},v.getResult=function(){return p.default.assign({},this.parsedResult)},v.satisfies=function(y){var w=this,b={},S=0,M={},C=0;if(Object.keys(y).forEach((function(ve){var P=y[ve];typeof P=="string"?(M[ve]=P,C+=1):typeof P=="object"&&(b[ve]=P,S+=1)})),S>0){var L=Object.keys(b),D=p.default.find(L,(function(ve){return w.isOS(ve)}));if(D){var Y=this.satisfies(b[D]);if(Y!==void 0)return Y}var U=p.default.find(L,(function(ve){return w.isPlatform(ve)}));if(U){var oe=this.satisfies(b[U]);if(oe!==void 0)return oe}}if(C>0){var H=Object.keys(M),me=p.default.find(H,(function(ve){return w.isBrowser(ve,!0)}));if(me!==void 0)return this.compareVersion(M[me])}},v.isBrowser=function(y,w){w===void 0&&(w=!1);var b=this.getBrowserName().toLowerCase(),S=y.toLowerCase(),M=p.default.getBrowserTypeByAlias(S);return w&&M&&(S=M.toLowerCase()),S===b},v.compareVersion=function(y){var w=[0],b=y,S=!1,M=this.getBrowserVersion();if(typeof M=="string")return y[0]===">"||y[0]==="<"?(b=y.substr(1),y[1]==="="?(S=!0,b=y.substr(2)):w=[],y[0]===">"?w.push(1):w.push(-1)):y[0]==="="?b=y.substr(1):y[0]==="~"&&(S=!0,b=y.substr(1)),w.indexOf(p.default.compareVersions(M,b,S))>-1},v.isOS=function(y){return this.getOSName(!0)===String(y).toLowerCase()},v.isPlatform=function(y){return this.getPlatformType(!0)===String(y).toLowerCase()},v.isEngine=function(y){return this.getEngineName(!0)===String(y).toLowerCase()},v.is=function(y,w){return w===void 0&&(w=!1),this.isBrowser(y,w)||this.isOS(y)||this.isPlatform(y)},v.some=function(y){var w=this;return y===void 0&&(y=[]),y.some((function(b){return w.is(b)}))},_})(),o.exports=a.default},92:function(o,a,s){"use strict";a.__esModule=!0,a.default=void 0;var c,l=(c=s(17))&&c.__esModule?c:{default:c},f=/version\/(\d+(\.?_?\d+)+)/i;a.default=[{test:[/gptbot/i],describe:function(h){var p={name:"GPTBot"},m=l.default.getFirstMatch(/gptbot\/(\d+(\.\d+)+)/i,h)||l.default.getFirstMatch(f,h);return m&&(p.version=m),p}},{test:[/chatgpt-user/i],describe:function(h){var p={name:"ChatGPT-User"},m=l.default.getFirstMatch(/chatgpt-user\/(\d+(\.\d+)+)/i,h)||l.default.getFirstMatch(f,h);return m&&(p.version=m),p}},{test:[/oai-searchbot/i],describe:function(h){var p={name:"OAI-SearchBot"},m=l.default.getFirstMatch(/oai-searchbot\/(\d+(\.\d+)+)/i,h)||l.default.getFirstMatch(f,h);return m&&(p.version=m),p}},{test:[/claudebot/i,/claude-web/i,/claude-user/i,/claude-searchbot/i],describe:function(h){var p={name:"ClaudeBot"},m=l.default.getFirstMatch(/(?:claudebot|claude-web|claude-user|claude-searchbot)\/(\d+(\.\d+)+)/i,h)||l.default.getFirstMatch(f,h);return m&&(p.version=m),p}},{test:[/omgilibot/i,/webzio-extended/i],describe:function(h){var p={name:"Omgilibot"},m=l.default.getFirstMatch(/(?:omgilibot|webzio-extended)\/(\d+(\.\d+)+)/i,h)||l.default.getFirstMatch(f,h);return m&&(p.version=m),p}},{test:[/diffbot/i],describe:function(h){var p={name:"Diffbot"},m=l.default.getFirstMatch(/diffbot\/(\d+(\.\d+)+)/i,h)||l.default.getFirstMatch(f,h);return m&&(p.version=m),p}},{test:[/perplexitybot/i],describe:function(h){var p={name:"PerplexityBot"},m=l.default.getFirstMatch(/perplexitybot\/(\d+(\.\d+)+)/i,h)||l.default.getFirstMatch(f,h);return m&&(p.version=m),p}},{test:[/perplexity-user/i],describe:function(h){var p={name:"Perplexity-User"},m=l.default.getFirstMatch(/perplexity-user\/(\d+(\.\d+)+)/i,h)||l.default.getFirstMatch(f,h);return m&&(p.version=m),p}},{test:[/youbot/i],describe:function(h){var p={name:"YouBot"},m=l.default.getFirstMatch(/youbot\/(\d+(\.\d+)+)/i,h)||l.default.getFirstMatch(f,h);return m&&(p.version=m),p}},{test:[/meta-webindexer/i],describe:function(h){var p={name:"Meta-WebIndexer"},m=l.default.getFirstMatch(/meta-webindexer\/(\d+(\.\d+)+)/i,h)||l.default.getFirstMatch(f,h);return m&&(p.version=m),p}},{test:[/meta-externalads/i],describe:function(h){var p={name:"Meta-ExternalAds"},m=l.default.getFirstMatch(/meta-externalads\/(\d+(\.\d+)+)/i,h)||l.default.getFirstMatch(f,h);return m&&(p.version=m),p}},{test:[/meta-externalagent/i],describe:function(h){var p={name:"Meta-ExternalAgent"},m=l.default.getFirstMatch(/meta-externalagent\/(\d+(\.\d+)+)/i,h)||l.default.getFirstMatch(f,h);return m&&(p.version=m),p}},{test:[/meta-externalfetcher/i],describe:function(h){var p={name:"Meta-ExternalFetcher"},m=l.default.getFirstMatch(/meta-externalfetcher\/(\d+(\.\d+)+)/i,h)||l.default.getFirstMatch(f,h);return m&&(p.version=m),p}},{test:[/googlebot/i],describe:function(h){var p={name:"Googlebot"},m=l.default.getFirstMatch(/googlebot\/(\d+(\.\d+))/i,h)||l.default.getFirstMatch(f,h);return m&&(p.version=m),p}},{test:[/linespider/i],describe:function(h){var p={name:"Linespider"},m=l.default.getFirstMatch(/(?:linespider)(?:-[-\w]+)?[\s/](\d+(\.\d+)+)/i,h)||l.default.getFirstMatch(f,h);return m&&(p.version=m),p}},{test:[/amazonbot/i],describe:function(h){var p={name:"AmazonBot"},m=l.default.getFirstMatch(/amazonbot\/(\d+(\.\d+)+)/i,h)||l.default.getFirstMatch(f,h);return m&&(p.version=m),p}},{test:[/bingbot/i],describe:function(h){var p={name:"BingCrawler"},m=l.default.getFirstMatch(/bingbot\/(\d+(\.\d+)+)/i,h)||l.default.getFirstMatch(f,h);return m&&(p.version=m),p}},{test:[/baiduspider/i],describe:function(h){var p={name:"BaiduSpider"},m=l.default.getFirstMatch(/baiduspider\/(\d+(\.\d+)+)/i,h)||l.default.getFirstMatch(f,h);return m&&(p.version=m),p}},{test:[/duckduckbot/i],describe:function(h){var p={name:"DuckDuckBot"},m=l.default.getFirstMatch(/duckduckbot\/(\d+(\.\d+)+)/i,h)||l.default.getFirstMatch(f,h);return m&&(p.version=m),p}},{test:[/ia_archiver/i],describe:function(h){var p={name:"InternetArchiveCrawler"},m=l.default.getFirstMatch(/ia_archiver\/(\d+(\.\d+)+)/i,h)||l.default.getFirstMatch(f,h);return m&&(p.version=m),p}},{test:[/facebookexternalhit/i,/facebookcatalog/i],describe:function(){return{name:"FacebookExternalHit"}}},{test:[/slackbot/i,/slack-imgProxy/i],describe:function(h){var p={name:"SlackBot"},m=l.default.getFirstMatch(/(?:slackbot|slack-imgproxy)(?:-[-\w]+)?[\s/](\d+(\.\d+)+)/i,h)||l.default.getFirstMatch(f,h);return m&&(p.version=m),p}},{test:[/yahoo!?[\s/]*slurp/i],describe:function(){return{name:"YahooSlurp"}}},{test:[/yandexbot/i,/yandexmobilebot/i],describe:function(){return{name:"YandexBot"}}},{test:[/pingdom/i],describe:function(){return{name:"PingdomBot"}}},{test:[/opera/i],describe:function(h){var p={name:"Opera"},m=l.default.getFirstMatch(f,h)||l.default.getFirstMatch(/(?:opera)[\s/](\d+(\.?_?\d+)+)/i,h);return m&&(p.version=m),p}},{test:[/opr\/|opios/i],describe:function(h){var p={name:"Opera"},m=l.default.getFirstMatch(/(?:opr|opios)[\s/](\S+)/i,h)||l.default.getFirstMatch(f,h);return m&&(p.version=m),p}},{test:[/SamsungBrowser/i],describe:function(h){var p={name:"Samsung Internet for Android"},m=l.default.getFirstMatch(f,h)||l.default.getFirstMatch(/(?:SamsungBrowser)[\s/](\d+(\.?_?\d+)+)/i,h);return m&&(p.version=m),p}},{test:[/Whale/i],describe:function(h){var p={name:"NAVER Whale Browser"},m=l.default.getFirstMatch(f,h)||l.default.getFirstMatch(/(?:whale)[\s/](\d+(?:\.\d+)+)/i,h);return m&&(p.version=m),p}},{test:[/PaleMoon/i],describe:function(h){var p={name:"Pale Moon"},m=l.default.getFirstMatch(f,h)||l.default.getFirstMatch(/(?:PaleMoon)[\s/](\d+(?:\.\d+)+)/i,h);return m&&(p.version=m),p}},{test:[/MZBrowser/i],describe:function(h){var p={name:"MZ Browser"},m=l.default.getFirstMatch(/(?:MZBrowser)[\s/](\d+(?:\.\d+)+)/i,h)||l.default.getFirstMatch(f,h);return m&&(p.version=m),p}},{test:[/focus/i],describe:function(h){var p={name:"Focus"},m=l.default.getFirstMatch(/(?:focus)[\s/](\d+(?:\.\d+)+)/i,h)||l.default.getFirstMatch(f,h);return m&&(p.version=m),p}},{test:[/swing/i],describe:function(h){var p={name:"Swing"},m=l.default.getFirstMatch(/(?:swing)[\s/](\d+(?:\.\d+)+)/i,h)||l.default.getFirstMatch(f,h);return m&&(p.version=m),p}},{test:[/coast/i],describe:function(h){var p={name:"Opera Coast"},m=l.default.getFirstMatch(f,h)||l.default.getFirstMatch(/(?:coast)[\s/](\d+(\.?_?\d+)+)/i,h);return m&&(p.version=m),p}},{test:[/opt\/\d+(?:.?_?\d+)+/i],describe:function(h){var p={name:"Opera Touch"},m=l.default.getFirstMatch(/(?:opt)[\s/](\d+(\.?_?\d+)+)/i,h)||l.default.getFirstMatch(f,h);return m&&(p.version=m),p}},{test:[/yabrowser/i],describe:function(h){var p={name:"Yandex Browser"},m=l.default.getFirstMatch(/(?:yabrowser)[\s/](\d+(\.?_?\d+)+)/i,h)||l.default.getFirstMatch(f,h);return m&&(p.version=m),p}},{test:[/ucbrowser/i],describe:function(h){var p={name:"UC Browser"},m=l.default.getFirstMatch(f,h)||l.default.getFirstMatch(/(?:ucbrowser)[\s/](\d+(\.?_?\d+)+)/i,h);return m&&(p.version=m),p}},{test:[/Maxthon|mxios/i],describe:function(h){var p={name:"Maxthon"},m=l.default.getFirstMatch(f,h)||l.default.getFirstMatch(/(?:Maxthon|mxios)[\s/](\d+(\.?_?\d+)+)/i,h);return m&&(p.version=m),p}},{test:[/epiphany/i],describe:function(h){var p={name:"Epiphany"},m=l.default.getFirstMatch(f,h)||l.default.getFirstMatch(/(?:epiphany)[\s/](\d+(\.?_?\d+)+)/i,h);return m&&(p.version=m),p}},{test:[/puffin/i],describe:function(h){var p={name:"Puffin"},m=l.default.getFirstMatch(f,h)||l.default.getFirstMatch(/(?:puffin)[\s/](\d+(\.?_?\d+)+)/i,h);return m&&(p.version=m),p}},{test:[/sleipnir/i],describe:function(h){var p={name:"Sleipnir"},m=l.default.getFirstMatch(f,h)||l.default.getFirstMatch(/(?:sleipnir)[\s/](\d+(\.?_?\d+)+)/i,h);return m&&(p.version=m),p}},{test:[/k-meleon/i],describe:function(h){var p={name:"K-Meleon"},m=l.default.getFirstMatch(f,h)||l.default.getFirstMatch(/(?:k-meleon)[\s/](\d+(\.?_?\d+)+)/i,h);return m&&(p.version=m),p}},{test:[/micromessenger/i],describe:function(h){var p={name:"WeChat"},m=l.default.getFirstMatch(/(?:micromessenger)[\s/](\d+(\.?_?\d+)+)/i,h)||l.default.getFirstMatch(f,h);return m&&(p.version=m),p}},{test:[/qqbrowser/i],describe:function(h){var p={name:/qqbrowserlite/i.test(h)?"QQ Browser Lite":"QQ Browser"},m=l.default.getFirstMatch(/(?:qqbrowserlite|qqbrowser)[/](\d+(\.?_?\d+)+)/i,h)||l.default.getFirstMatch(f,h);return m&&(p.version=m),p}},{test:[/msie|trident/i],describe:function(h){var p={name:"Internet Explorer"},m=l.default.getFirstMatch(/(?:msie |rv:)(\d+(\.?_?\d+)+)/i,h);return m&&(p.version=m),p}},{test:[/\sedg\//i],describe:function(h){var p={name:"Microsoft Edge"},m=l.default.getFirstMatch(/\sedg\/(\d+(\.?_?\d+)+)/i,h);return m&&(p.version=m),p}},{test:[/edg([ea]|ios)/i],describe:function(h){var p={name:"Microsoft Edge"},m=l.default.getSecondMatch(/edg([ea]|ios)\/(\d+(\.?_?\d+)+)/i,h);return m&&(p.version=m),p}},{test:[/vivaldi/i],describe:function(h){var p={name:"Vivaldi"},m=l.default.getFirstMatch(/vivaldi\/(\d+(\.?_?\d+)+)/i,h);return m&&(p.version=m),p}},{test:[/seamonkey/i],describe:function(h){var p={name:"SeaMonkey"},m=l.default.getFirstMatch(/seamonkey\/(\d+(\.?_?\d+)+)/i,h);return m&&(p.version=m),p}},{test:[/sailfish/i],describe:function(h){var p={name:"Sailfish"},m=l.default.getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i,h);return m&&(p.version=m),p}},{test:[/silk/i],describe:function(h){var p={name:"Amazon Silk"},m=l.default.getFirstMatch(/silk\/(\d+(\.?_?\d+)+)/i,h);return m&&(p.version=m),p}},{test:[/phantom/i],describe:function(h){var p={name:"PhantomJS"},m=l.default.getFirstMatch(/phantomjs\/(\d+(\.?_?\d+)+)/i,h);return m&&(p.version=m),p}},{test:[/slimerjs/i],describe:function(h){var p={name:"SlimerJS"},m=l.default.getFirstMatch(/slimerjs\/(\d+(\.?_?\d+)+)/i,h);return m&&(p.version=m),p}},{test:[/blackberry|\bbb\d+/i,/rim\stablet/i],describe:function(h){var p={name:"BlackBerry"},m=l.default.getFirstMatch(f,h)||l.default.getFirstMatch(/blackberry[\d]+\/(\d+(\.?_?\d+)+)/i,h);return m&&(p.version=m),p}},{test:[/(web|hpw)[o0]s/i],describe:function(h){var p={name:"WebOS Browser"},m=l.default.getFirstMatch(f,h)||l.default.getFirstMatch(/w(?:eb)?[o0]sbrowser\/(\d+(\.?_?\d+)+)/i,h);return m&&(p.version=m),p}},{test:[/bada/i],describe:function(h){var p={name:"Bada"},m=l.default.getFirstMatch(/dolfin\/(\d+(\.?_?\d+)+)/i,h);return m&&(p.version=m),p}},{test:[/tizen/i],describe:function(h){var p={name:"Tizen"},m=l.default.getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.?_?\d+)+)/i,h)||l.default.getFirstMatch(f,h);return m&&(p.version=m),p}},{test:[/qupzilla/i],describe:function(h){var p={name:"QupZilla"},m=l.default.getFirstMatch(/(?:qupzilla)[\s/](\d+(\.?_?\d+)+)/i,h)||l.default.getFirstMatch(f,h);return m&&(p.version=m),p}},{test:[/librewolf/i],describe:function(h){var p={name:"LibreWolf"},m=l.default.getFirstMatch(/(?:librewolf)[\s/](\d+(\.?_?\d+)+)/i,h);return m&&(p.version=m),p}},{test:[/firefox|iceweasel|fxios/i],describe:function(h){var p={name:"Firefox"},m=l.default.getFirstMatch(/(?:firefox|iceweasel|fxios)[\s/](\d+(\.?_?\d+)+)/i,h);return m&&(p.version=m),p}},{test:[/electron/i],describe:function(h){var p={name:"Electron"},m=l.default.getFirstMatch(/(?:electron)\/(\d+(\.?_?\d+)+)/i,h);return m&&(p.version=m),p}},{test:[/sogoumobilebrowser/i,/metasr/i,/se 2\.[x]/i],describe:function(h){var p={name:"Sogou Browser"},m=l.default.getFirstMatch(/(?:sogoumobilebrowser)[\s/](\d+(\.?_?\d+)+)/i,h),_=l.default.getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i,h),v=l.default.getFirstMatch(/se ([\d.]+)x/i,h),y=m||_||v;return y&&(p.version=y),p}},{test:[/MiuiBrowser/i],describe:function(h){var p={name:"Miui"},m=l.default.getFirstMatch(/(?:MiuiBrowser)[\s/](\d+(\.?_?\d+)+)/i,h);return m&&(p.version=m),p}},{test:function(h){return!!h.hasBrand("DuckDuckGo")||h.test(/\sDdg\/[\d.]+$/i)},describe:function(h,p){var m={name:"DuckDuckGo"};if(p){var _=p.getBrandVersion("DuckDuckGo");if(_)return m.version=_,m}var v=l.default.getFirstMatch(/\sDdg\/([\d.]+)$/i,h);return v&&(m.version=v),m}},{test:function(h){return h.hasBrand("Brave")},describe:function(h,p){var m={name:"Brave"};if(p){var _=p.getBrandVersion("Brave");if(_)return m.version=_,m}return m}},{test:[/chromium/i],describe:function(h){var p={name:"Chromium"},m=l.default.getFirstMatch(/(?:chromium)[\s/](\d+(\.?_?\d+)+)/i,h)||l.default.getFirstMatch(f,h);return m&&(p.version=m),p}},{test:[/chrome|crios|crmo/i],describe:function(h){var p={name:"Chrome"},m=l.default.getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i,h);return m&&(p.version=m),p}},{test:[/GSA/i],describe:function(h){var p={name:"Google Search"},m=l.default.getFirstMatch(/(?:GSA)\/(\d+(\.?_?\d+)+)/i,h);return m&&(p.version=m),p}},{test:function(h){var p=!h.test(/like android/i),m=h.test(/android/i);return p&&m},describe:function(h){var p={name:"Android Browser"},m=l.default.getFirstMatch(f,h);return m&&(p.version=m),p}},{test:[/playstation 4/i],describe:function(h){var p={name:"PlayStation 4"},m=l.default.getFirstMatch(f,h);return m&&(p.version=m),p}},{test:[/safari|applewebkit/i],describe:function(h){var p={name:"Safari"},m=l.default.getFirstMatch(f,h);return m&&(p.version=m),p}},{test:[/.*/i],describe:function(h){var p=h.search("\\(")!==-1?/^(.*)\/(.*)[ \t]\((.*)/:/^(.*)\/(.*) /;return{name:l.default.getFirstMatch(p,h),version:l.default.getSecondMatch(p,h)}}}],o.exports=a.default},93:function(o,a,s){"use strict";a.__esModule=!0,a.default=void 0;var c,l=(c=s(17))&&c.__esModule?c:{default:c},f=s(18);a.default=[{test:[/Roku\/DVP/],describe:function(h){var p=l.default.getFirstMatch(/Roku\/DVP-(\d+\.\d+)/i,h);return{name:f.OS_MAP.Roku,version:p}}},{test:[/windows phone/i],describe:function(h){var p=l.default.getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i,h);return{name:f.OS_MAP.WindowsPhone,version:p}}},{test:[/windows /i],describe:function(h){var p=l.default.getFirstMatch(/Windows ((NT|XP)( \d\d?.\d)?)/i,h),m=l.default.getWindowsVersionName(p);return{name:f.OS_MAP.Windows,version:p,versionName:m}}},{test:[/Macintosh(.*?) FxiOS(.*?)\//],describe:function(h){var p={name:f.OS_MAP.iOS},m=l.default.getSecondMatch(/(Version\/)(\d[\d.]+)/,h);return m&&(p.version=m),p}},{test:[/macintosh/i],describe:function(h){var p=l.default.getFirstMatch(/mac os x (\d+(\.?_?\d+)+)/i,h).replace(/[_\s]/g,"."),m=l.default.getMacOSVersionName(p),_={name:f.OS_MAP.MacOS,version:p};return m&&(_.versionName=m),_}},{test:[/(ipod|iphone|ipad)/i],describe:function(h){var p=l.default.getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i,h).replace(/[_\s]/g,".");return{name:f.OS_MAP.iOS,version:p}}},{test:[/OpenHarmony/i],describe:function(h){var p=l.default.getFirstMatch(/OpenHarmony\s+(\d+(\.\d+)*)/i,h);return{name:f.OS_MAP.HarmonyOS,version:p}}},{test:function(h){var p=!h.test(/like android/i),m=h.test(/android/i);return p&&m},describe:function(h){var p=l.default.getFirstMatch(/android[\s/-](\d+(\.\d+)*)/i,h),m=l.default.getAndroidVersionName(p),_={name:f.OS_MAP.Android,version:p};return m&&(_.versionName=m),_}},{test:[/(web|hpw)[o0]s/i],describe:function(h){var p=l.default.getFirstMatch(/(?:web|hpw)[o0]s\/(\d+(\.\d+)*)/i,h),m={name:f.OS_MAP.WebOS};return p&&p.length&&(m.version=p),m}},{test:[/blackberry|\bbb\d+/i,/rim\stablet/i],describe:function(h){var p=l.default.getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i,h)||l.default.getFirstMatch(/blackberry\d+\/(\d+([_\s]\d+)*)/i,h)||l.default.getFirstMatch(/\bbb(\d+)/i,h);return{name:f.OS_MAP.BlackBerry,version:p}}},{test:[/bada/i],describe:function(h){var p=l.default.getFirstMatch(/bada\/(\d+(\.\d+)*)/i,h);return{name:f.OS_MAP.Bada,version:p}}},{test:[/tizen/i],describe:function(h){var p=l.default.getFirstMatch(/tizen[/\s](\d+(\.\d+)*)/i,h);return{name:f.OS_MAP.Tizen,version:p}}},{test:[/linux/i],describe:function(){return{name:f.OS_MAP.Linux}}},{test:[/CrOS/],describe:function(){return{name:f.OS_MAP.ChromeOS}}},{test:[/PlayStation 4/],describe:function(h){var p=l.default.getFirstMatch(/PlayStation 4[/\s](\d+(\.\d+)*)/i,h);return{name:f.OS_MAP.PlayStation4,version:p}}}],o.exports=a.default},94:function(o,a,s){"use strict";a.__esModule=!0,a.default=void 0;var c,l=(c=s(17))&&c.__esModule?c:{default:c},f=s(18);a.default=[{test:[/googlebot/i],describe:function(){return{type:f.PLATFORMS_MAP.bot,vendor:"Google"}}},{test:[/linespider/i],describe:function(){return{type:f.PLATFORMS_MAP.bot,vendor:"Line"}}},{test:[/amazonbot/i],describe:function(){return{type:f.PLATFORMS_MAP.bot,vendor:"Amazon"}}},{test:[/gptbot/i],describe:function(){return{type:f.PLATFORMS_MAP.bot,vendor:"OpenAI"}}},{test:[/chatgpt-user/i],describe:function(){return{type:f.PLATFORMS_MAP.bot,vendor:"OpenAI"}}},{test:[/oai-searchbot/i],describe:function(){return{type:f.PLATFORMS_MAP.bot,vendor:"OpenAI"}}},{test:[/baiduspider/i],describe:function(){return{type:f.PLATFORMS_MAP.bot,vendor:"Baidu"}}},{test:[/bingbot/i],describe:function(){return{type:f.PLATFORMS_MAP.bot,vendor:"Bing"}}},{test:[/duckduckbot/i],describe:function(){return{type:f.PLATFORMS_MAP.bot,vendor:"DuckDuckGo"}}},{test:[/claudebot/i,/claude-web/i,/claude-user/i,/claude-searchbot/i],describe:function(){return{type:f.PLATFORMS_MAP.bot,vendor:"Anthropic"}}},{test:[/omgilibot/i,/webzio-extended/i],describe:function(){return{type:f.PLATFORMS_MAP.bot,vendor:"Webz.io"}}},{test:[/diffbot/i],describe:function(){return{type:f.PLATFORMS_MAP.bot,vendor:"Diffbot"}}},{test:[/perplexitybot/i],describe:function(){return{type:f.PLATFORMS_MAP.bot,vendor:"Perplexity AI"}}},{test:[/perplexity-user/i],describe:function(){return{type:f.PLATFORMS_MAP.bot,vendor:"Perplexity AI"}}},{test:[/youbot/i],describe:function(){return{type:f.PLATFORMS_MAP.bot,vendor:"You.com"}}},{test:[/ia_archiver/i],describe:function(){return{type:f.PLATFORMS_MAP.bot,vendor:"Internet Archive"}}},{test:[/meta-webindexer/i],describe:function(){return{type:f.PLATFORMS_MAP.bot,vendor:"Meta"}}},{test:[/meta-externalads/i],describe:function(){return{type:f.PLATFORMS_MAP.bot,vendor:"Meta"}}},{test:[/meta-externalagent/i],describe:function(){return{type:f.PLATFORMS_MAP.bot,vendor:"Meta"}}},{test:[/meta-externalfetcher/i],describe:function(){return{type:f.PLATFORMS_MAP.bot,vendor:"Meta"}}},{test:[/facebookexternalhit/i,/facebookcatalog/i],describe:function(){return{type:f.PLATFORMS_MAP.bot,vendor:"Meta"}}},{test:[/slackbot/i,/slack-imgProxy/i],describe:function(){return{type:f.PLATFORMS_MAP.bot,vendor:"Slack"}}},{test:[/yahoo/i],describe:function(){return{type:f.PLATFORMS_MAP.bot,vendor:"Yahoo"}}},{test:[/yandexbot/i,/yandexmobilebot/i],describe:function(){return{type:f.PLATFORMS_MAP.bot,vendor:"Yandex"}}},{test:[/pingdom/i],describe:function(){return{type:f.PLATFORMS_MAP.bot,vendor:"Pingdom"}}},{test:[/huawei/i],describe:function(h){var p=l.default.getFirstMatch(/(can-l01)/i,h)&&"Nova",m={type:f.PLATFORMS_MAP.mobile,vendor:"Huawei"};return p&&(m.model=p),m}},{test:[/nexus\s*(?:7|8|9|10).*/i],describe:function(){return{type:f.PLATFORMS_MAP.tablet,vendor:"Nexus"}}},{test:[/ipad/i],describe:function(){return{type:f.PLATFORMS_MAP.tablet,vendor:"Apple",model:"iPad"}}},{test:[/Macintosh(.*?) FxiOS(.*?)\//],describe:function(){return{type:f.PLATFORMS_MAP.tablet,vendor:"Apple",model:"iPad"}}},{test:[/kftt build/i],describe:function(){return{type:f.PLATFORMS_MAP.tablet,vendor:"Amazon",model:"Kindle Fire HD 7"}}},{test:[/silk/i],describe:function(){return{type:f.PLATFORMS_MAP.tablet,vendor:"Amazon"}}},{test:[/tablet(?! pc)/i],describe:function(){return{type:f.PLATFORMS_MAP.tablet}}},{test:function(h){var p=h.test(/ipod|iphone/i),m=h.test(/like (ipod|iphone)/i);return p&&!m},describe:function(h){var p=l.default.getFirstMatch(/(ipod|iphone)/i,h);return{type:f.PLATFORMS_MAP.mobile,vendor:"Apple",model:p}}},{test:[/nexus\s*[0-6].*/i,/galaxy nexus/i],describe:function(){return{type:f.PLATFORMS_MAP.mobile,vendor:"Nexus"}}},{test:[/Nokia/i],describe:function(h){var p=l.default.getFirstMatch(/Nokia\s+([0-9]+(\.[0-9]+)?)/i,h),m={type:f.PLATFORMS_MAP.mobile,vendor:"Nokia"};return p&&(m.model=p),m}},{test:[/[^-]mobi/i],describe:function(){return{type:f.PLATFORMS_MAP.mobile}}},{test:function(h){return h.getBrowserName(!0)==="blackberry"},describe:function(){return{type:f.PLATFORMS_MAP.mobile,vendor:"BlackBerry"}}},{test:function(h){return h.getBrowserName(!0)==="bada"},describe:function(){return{type:f.PLATFORMS_MAP.mobile}}},{test:function(h){return h.getBrowserName()==="windows phone"},describe:function(){return{type:f.PLATFORMS_MAP.mobile,vendor:"Microsoft"}}},{test:function(h){var p=Number(String(h.getOSVersion()).split(".")[0]);return h.getOSName(!0)==="android"&&p>=3},describe:function(){return{type:f.PLATFORMS_MAP.tablet}}},{test:function(h){return h.getOSName(!0)==="android"},describe:function(){return{type:f.PLATFORMS_MAP.mobile}}},{test:[/smart-?tv|smarttv/i],describe:function(){return{type:f.PLATFORMS_MAP.tv}}},{test:[/netcast/i],describe:function(){return{type:f.PLATFORMS_MAP.tv}}},{test:function(h){return h.getOSName(!0)==="macos"},describe:function(){return{type:f.PLATFORMS_MAP.desktop,vendor:"Apple"}}},{test:function(h){return h.getOSName(!0)==="windows"},describe:function(){return{type:f.PLATFORMS_MAP.desktop}}},{test:function(h){return h.getOSName(!0)==="linux"},describe:function(){return{type:f.PLATFORMS_MAP.desktop}}},{test:function(h){return h.getOSName(!0)==="playstation 4"},describe:function(){return{type:f.PLATFORMS_MAP.tv}}},{test:function(h){return h.getOSName(!0)==="roku"},describe:function(){return{type:f.PLATFORMS_MAP.tv}}}],o.exports=a.default},95:function(o,a,s){"use strict";a.__esModule=!0,a.default=void 0;var c,l=(c=s(17))&&c.__esModule?c:{default:c},f=s(18);a.default=[{test:function(h){return h.getBrowserName(!0)==="microsoft edge"},describe:function(h){if(/\sedg\//i.test(h))return{name:f.ENGINE_MAP.Blink};var p=l.default.getFirstMatch(/edge\/(\d+(\.?_?\d+)+)/i,h);return{name:f.ENGINE_MAP.EdgeHTML,version:p}}},{test:[/trident/i],describe:function(h){var p={name:f.ENGINE_MAP.Trident},m=l.default.getFirstMatch(/trident\/(\d+(\.?_?\d+)+)/i,h);return m&&(p.version=m),p}},{test:function(h){return h.test(/presto/i)},describe:function(h){var p={name:f.ENGINE_MAP.Presto},m=l.default.getFirstMatch(/presto\/(\d+(\.?_?\d+)+)/i,h);return m&&(p.version=m),p}},{test:function(h){var p=h.test(/gecko/i),m=h.test(/like gecko/i);return p&&!m},describe:function(h){var p={name:f.ENGINE_MAP.Gecko},m=l.default.getFirstMatch(/gecko\/(\d+(\.?_?\d+)+)/i,h);return m&&(p.version=m),p}},{test:[/(apple)?webkit\/537\.36/i],describe:function(){return{name:f.ENGINE_MAP.Blink}}},{test:[/(apple)?webkit/i],describe:function(h){var p={name:f.ENGINE_MAP.WebKit},m=l.default.getFirstMatch(/webkit\/(\d+(\.?_?\d+)+)/i,h);return m&&(p.version=m),p}}],o.exports=a.default}})}))})),Ju=ua(Sp(),1);function Ap(e,t){typeof unsafeWindow<"u"&&(unsafeWindow[e]=t),typeof window<"u"&&(window[e]=t)}function Ee(...e){return console.log("MangaOnlineViewer-main-min: ",...e),e}function jt(...e){return["dev","development"].includes("main-min")&&console.info("MangaOnlineViewer: ",...e),e}function Qu(e){typeof GM_deleteValue<"u"?GM_deleteValue(e):jt("Fake Removing: ",e)}var Js=typeof GM_info<"u"?GM_info:{scriptHandler:"Console",script:{name:"Debug",version:"Testing"}};function Mp(e,t){return typeof GM_getValue<"u"?GM_getValue(e,t):(jt("Fake Getting: ",e," = ",t),t)}function ed(e,t){const n=Mp(e,t);if(typeof n=="string"&&n.trim()!=="")try{return JSON.parse(n)}catch(o){return Ee("Failed to parse JSON from storage",e,o),t}return n}function xp(e){return ed("settings",e)}function Ip(e){return ed(window.location.hostname,e)}function td(e,t){return typeof GM_setValue<"u"?(GM_setValue(e,t),Ee("Setting: ",e," = ",t),t.toString()):(jt("Fake Setting: ",e," = ",t),String(t))}function Cp(e){return td("settings",e)}function rd(e){return td(window.location.hostname,e)}function Op(){const e=Ju.default.getParser(window.navigator.userAgent).getBrowser();return`${e.name} ${e.version}`}function Tp(){return Js.scriptHandler??"Greasemonkey"}var da=()=>{const e=Ju.default.getParser(window.navigator.userAgent).getPlatformType(!0);return e==="mobile"||window.matchMedia("screen and (max-width: 600px)").matches?"mobile":e==="tablet"||window.matchMedia("screen and (max-width: 992px)").matches?"tablet":"desktop"},Lp=()=>da()==="mobile"||da()==="tablet",Qs=()=>window.location.protocol==="file:"||window.location.pathname.endsWith("Manga_Local_Viewer.html"),nd=(e,t="settings")=>{if(typeof GM_addValueChangeListener<"u")try{return GM_addValueChangeListener(t,(n,o,a,s)=>{s&&e(a)})}catch(n){Ee("Failed to add settings listener",n)}},Rp=xr(((e,t,n)=>{(function(){var o,a="4.18.1",s=200,c="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",l="Expected a function",f="Invalid `variable` option passed into `_.template`",h="Invalid `imports` option passed into `_.template`",p="__lodash_hash_undefined__",m=500,_="__lodash_placeholder__",v=1,y=2,w=4,b=1,S=2,M=1,C=2,L=4,D=8,Y=16,U=32,oe=64,H=128,me=256,ve=512,P=30,J="...",A=800,ee=16,Ce=1,ue=2,ze=3,se=1/0,Ae=9007199254740991,q=17976931348623157e292,W=NaN,ke=4294967295,ge=ke-1,pe=ke>>>1,it=[["ary",H],["bind",M],["bindKey",C],["curry",D],["curryRight",Y],["flip",ve],["partial",U],["partialRight",oe],["rearg",me]],ft="[object Arguments]",We="[object Array]",Ze="[object AsyncFunction]",vt="[object Boolean]",at="[object Date]",Rr="[object DOMException]",Vt="[object Error]",k="[object Function]",re="[object GeneratorFunction]",V="[object Map]",T="[object Number]",O="[object Null]",N="[object Object]",ae="[object Promise]",le="[object Proxy]",G="[object RegExp]",de="[object Set]",be="[object String]",he="[object Symbol]",Ie="[object Undefined]",Je="[object WeakMap]",je="[object WeakSet]",zt="[object ArrayBuffer]",Pr="[object DataView]",ir="[object Float32Array]",gn="[object Float64Array]",pt="[object Int8Array]",Bn="[object Int16Array]",ho="[object Int32Array]",yr="[object Uint8Array]",Jo="[object Uint8ClampedArray]",qi="[object Uint16Array]",Zi="[object Uint32Array]",zc=/\b__p \+= '';/g,us=/\b(__p \+=) '' \+/g,fo=/(__e\(.*?\)|\b__t\)) \+\n'';/g,po=/&(?:amp|lt|gt|quot|#39);/g,N1=/[&<>"']/g,F8=RegExp(po.source),G8=RegExp(N1.source),W8=/<%-([\s\S]+?)%>/g,U8=/<%([\s\S]+?)%>/g,B1=/<%=([\s\S]+?)%>/g,V8=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,q8=/^\w*$/,Z8=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Nc=/[\\^$.*+?()[\]{}|]/g,j8=RegExp(Nc.source),Bc=/^\s+/,K8=/\s/,Y8=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,X8=/\{\n\/\* \[wrapped with (.+)\] \*/,J8=/,? & /,Q8=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,H1=/[()=,{}\[\]\/\s]/,e_=/\\(\\)?/g,t_=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,F1=/\w*$/,r_=/^[-+]0x[0-9a-f]+$/i,n_=/^0b[01]+$/i,o_=/^\[object .+?Constructor\]$/,i_=/^0o[0-7]+$/i,a_=/^(?:0|[1-9]\d*)$/,s_=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,ds=/($^)/,l_=/['\n\r\u2028\u2029\\]/g,hs="\\ud800-\\udfff",G1="\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff",W1="\\u2700-\\u27bf",U1="a-z\\xdf-\\xf6\\xf8-\\xff",c_="\\xac\\xb1\\xd7\\xf7",u_="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",d_="\\u2000-\\u206f",h_=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",V1="A-Z\\xc0-\\xd6\\xd8-\\xde",q1="\\ufe0e\\ufe0f",Z1=c_+u_+d_+h_,Hc="['’]",f_="["+hs+"]",j1="["+Z1+"]",fs="["+G1+"]",K1="\\d+",p_="["+W1+"]",Y1="["+U1+"]",X1="[^"+hs+Z1+K1+W1+U1+V1+"]",Fc="\\ud83c[\\udffb-\\udfff]",m_="(?:"+fs+"|"+Fc+")",J1="[^"+hs+"]",Gc="(?:\\ud83c[\\udde6-\\uddff]){2}",Wc="[\\ud800-\\udbff][\\udc00-\\udfff]",Qo="["+V1+"]",Q1="\\u200d",ef="(?:"+Y1+"|"+X1+")",g_="(?:"+Qo+"|"+X1+")",tf="(?:"+Hc+"(?:d|ll|m|re|s|t|ve))?",rf="(?:"+Hc+"(?:D|LL|M|RE|S|T|VE))?",nf=m_+"?",of="["+q1+"]?",v_="(?:"+Q1+"(?:"+[J1,Gc,Wc].join("|")+")"+of+nf+")*",b_="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",w_="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",af=of+nf+v_,__="(?:"+[p_,Gc,Wc].join("|")+")"+af,y_="(?:"+[J1+fs+"?",fs,Gc,Wc,f_].join("|")+")",k_=RegExp(Hc,"g"),E_=RegExp(fs,"g"),Uc=RegExp(Fc+"(?="+Fc+")|"+y_+af,"g"),S_=RegExp([Qo+"?"+Y1+"+"+tf+"(?="+[j1,Qo,"$"].join("|")+")",g_+"+"+rf+"(?="+[j1,Qo+ef,"$"].join("|")+")",Qo+"?"+ef+"+"+tf,Qo+"+"+rf,w_,b_,K1,__].join("|"),"g"),A_=RegExp("["+Q1+hs+G1+q1+"]"),M_=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,x_=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],I_=-1,mt={};mt[ir]=mt[gn]=mt[pt]=mt[Bn]=mt[ho]=mt[yr]=mt[Jo]=mt[qi]=mt[Zi]=!0,mt[ft]=mt[We]=mt[zt]=mt[vt]=mt[Pr]=mt[at]=mt[Vt]=mt[k]=mt[V]=mt[T]=mt[N]=mt[G]=mt[de]=mt[be]=mt[Je]=!1;var dt={};dt[ft]=dt[We]=dt[zt]=dt[Pr]=dt[vt]=dt[at]=dt[ir]=dt[gn]=dt[pt]=dt[Bn]=dt[ho]=dt[V]=dt[T]=dt[N]=dt[G]=dt[de]=dt[be]=dt[he]=dt[yr]=dt[Jo]=dt[qi]=dt[Zi]=!0,dt[Vt]=dt[k]=dt[Je]=!1;var C_={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},O_={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},T_={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},L_={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},R_=parseFloat,P_=parseInt,sf=typeof global=="object"&&global&&global.Object===Object&&global,$_=typeof self=="object"&&self&&self.Object===Object&&self,Nt=sf||$_||Function("return this")(),Vc=typeof e=="object"&&e&&!e.nodeType&&e,mo=Vc&&typeof t=="object"&&t&&!t.nodeType&&t,lf=mo&&mo.exports===Vc,qc=lf&&sf.process,$r=(function(){try{var B=mo&&mo.require&&mo.require("util").types;return B||qc&&qc.binding&&qc.binding("util")}catch{}})(),cf=$r&&$r.isArrayBuffer,uf=$r&&$r.isDate,df=$r&&$r.isMap,hf=$r&&$r.isRegExp,ff=$r&&$r.isSet,pf=$r&&$r.isTypedArray;function kr(B,Q,j){switch(j.length){case 0:return B.call(Q);case 1:return B.call(Q,j[0]);case 2:return B.call(Q,j[0],j[1]);case 3:return B.call(Q,j[0],j[1],j[2])}return B.apply(Q,j)}function D_(B,Q,j,ye){for(var Ne=-1,tt=B==null?0:B.length;++Ne<tt;){var Pt=B[Ne];Q(ye,Pt,j(Pt),B)}return ye}function Er(B,Q){for(var j=-1,ye=B==null?0:B.length;++j<ye&&Q(B[j],j,B)!==!1;);return B}function z_(B,Q){for(var j=B==null?0:B.length;j--&&Q(B[j],j,B)!==!1;);return B}function mf(B,Q){for(var j=-1,ye=B==null?0:B.length;++j<ye;)if(!Q(B[j],j,B))return!1;return!0}function Hn(B,Q){for(var j=-1,ye=B==null?0:B.length,Ne=0,tt=[];++j<ye;){var Pt=B[j];Q(Pt,j,B)&&(tt[Ne++]=Pt)}return tt}function ps(B,Q){return!!(B!=null&&B.length)&&ei(B,Q,0)>-1}function Zc(B,Q,j){for(var ye=-1,Ne=B==null?0:B.length;++ye<Ne;)if(j(Q,B[ye]))return!0;return!1}function bt(B,Q){for(var j=-1,ye=B==null?0:B.length,Ne=Array(ye);++j<ye;)Ne[j]=Q(B[j],j,B);return Ne}function Fn(B,Q){for(var j=-1,ye=Q.length,Ne=B.length;++j<ye;)B[Ne+j]=Q[j];return B}function jc(B,Q,j,ye){var Ne=-1,tt=B==null?0:B.length;for(ye&&tt&&(j=B[++Ne]);++Ne<tt;)j=Q(j,B[Ne],Ne,B);return j}function N_(B,Q,j,ye){var Ne=B==null?0:B.length;for(ye&&Ne&&(j=B[--Ne]);Ne--;)j=Q(j,B[Ne],Ne,B);return j}function Kc(B,Q){for(var j=-1,ye=B==null?0:B.length;++j<ye;)if(Q(B[j],j,B))return!0;return!1}var B_=Yc("length");function H_(B){return B.split("")}function F_(B){return B.match(Q8)||[]}function gf(B,Q,j){var ye;return j(B,function(Ne,tt,Pt){if(Q(Ne,tt,Pt))return ye=tt,!1}),ye}function ms(B,Q,j,ye){for(var Ne=B.length,tt=j+(ye?1:-1);ye?tt--:++tt<Ne;)if(Q(B[tt],tt,B))return tt;return-1}function ei(B,Q,j){return Q===Q?Q_(B,Q,j):ms(B,vf,j)}function G_(B,Q,j,ye){for(var Ne=j-1,tt=B.length;++Ne<tt;)if(ye(B[Ne],Q))return Ne;return-1}function vf(B){return B!==B}function bf(B,Q){var j=B==null?0:B.length;return j?Jc(B,Q)/j:W}function Yc(B){return function(Q){return Q==null?o:Q[B]}}function Xc(B){return function(Q){return B==null?o:B[Q]}}function wf(B,Q,j,ye,Ne){return Ne(B,function(tt,Pt,st){j=ye?(ye=!1,tt):Q(j,tt,Pt,st)}),j}function W_(B,Q){var j=B.length;for(B.sort(Q);j--;)B[j]=B[j].value;return B}function Jc(B,Q){for(var j,ye=-1,Ne=B.length;++ye<Ne;){var tt=Q(B[ye]);tt!==o&&(j=j===o?tt:j+tt)}return j}function Qc(B,Q){for(var j=-1,ye=Array(B);++j<B;)ye[j]=Q(j);return ye}function U_(B,Q){return bt(Q,function(j){return[j,B[j]]})}function _f(B){return B&&B.slice(0,Sf(B)+1).replace(Bc,"")}function Sr(B){return function(Q){return B(Q)}}function eu(B,Q){return bt(Q,function(j){return B[j]})}function ji(B,Q){return B.has(Q)}function yf(B,Q){for(var j=-1,ye=B.length;++j<ye&&ei(Q,B[j],0)>-1;);return j}function kf(B,Q){for(var j=B.length;j--&&ei(Q,B[j],0)>-1;);return j}function V_(B,Q){for(var j=B.length,ye=0;j--;)B[j]===Q&&++ye;return ye}var q_=Xc(C_),Z_=Xc(O_);function j_(B){return"\\"+L_[B]}function K_(B,Q){return B==null?o:B[Q]}function ti(B){return A_.test(B)}function Y_(B){return M_.test(B)}function X_(B){for(var Q,j=[];!(Q=B.next()).done;)j.push(Q.value);return j}function tu(B){var Q=-1,j=Array(B.size);return B.forEach(function(ye,Ne){j[++Q]=[Ne,ye]}),j}function Ef(B,Q){return function(j){return B(Q(j))}}function Gn(B,Q){for(var j=-1,ye=B.length,Ne=0,tt=[];++j<ye;){var Pt=B[j];(Pt===Q||Pt===_)&&(B[j]=_,tt[Ne++]=j)}return tt}function gs(B){var Q=-1,j=Array(B.size);return B.forEach(function(ye){j[++Q]=ye}),j}function J_(B){var Q=-1,j=Array(B.size);return B.forEach(function(ye){j[++Q]=[ye,ye]}),j}function Q_(B,Q,j){for(var ye=j-1,Ne=B.length;++ye<Ne;)if(B[ye]===Q)return ye;return-1}function ey(B,Q,j){for(var ye=j+1;ye--;)if(B[ye]===Q)return ye;return ye}function ri(B){return ti(B)?ry(B):B_(B)}function qr(B){return ti(B)?ny(B):H_(B)}function Sf(B){for(var Q=B.length;Q--&&K8.test(B.charAt(Q)););return Q}var ty=Xc(T_);function ry(B){for(var Q=Uc.lastIndex=0;Uc.test(B);)++Q;return Q}function ny(B){return B.match(Uc)||[]}function oy(B){return B.match(S_)||[]}var Wn=(function B(Q){Q=Q==null?Nt:Wn.defaults(Nt.Object(),Q,Wn.pick(Nt,x_));var j=Q.Array,ye=Q.Date,Ne=Q.Error,tt=Q.Function,Pt=Q.Math,st=Q.Object,ru=Q.RegExp,iy=Q.String,Dr=Q.TypeError,vs=j.prototype,ay=tt.prototype,ni=st.prototype,bs=Q["__core-js_shared__"],ws=ay.toString,nt=ni.hasOwnProperty,sy=0,Af=(function(){var r=/[^.]+$/.exec(bs&&bs.keys&&bs.keys.IE_PROTO||"");return r?"Symbol(src)_1."+r:""})(),_s=ni.toString,ly=ws.call(st),cy=Nt._,uy=ru("^"+ws.call(nt).replace(Nc,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),ys=lf?Q.Buffer:o,Un=Q.Symbol,ks=Q.Uint8Array,Mf=ys?ys.allocUnsafe:o,Es=Ef(st.getPrototypeOf,st),xf=st.create,If=ni.propertyIsEnumerable,Ss=vs.splice,Cf=Un?Un.isConcatSpreadable:o,Ki=Un?Un.iterator:o,go=Un?Un.toStringTag:o,As=(function(){try{var r=yo(st,"defineProperty");return r({},"",{}),r}catch{}})(),dy=Q.clearTimeout!==Nt.clearTimeout&&Q.clearTimeout,hy=ye&&ye.now!==Nt.Date.now&&ye.now,fy=Q.setTimeout!==Nt.setTimeout&&Q.setTimeout,Ms=Pt.ceil,xs=Pt.floor,nu=st.getOwnPropertySymbols,py=ys?ys.isBuffer:o,Of=Q.isFinite,my=vs.join,gy=Ef(st.keys,st),$t=Pt.max,qt=Pt.min,vy=ye.now,by=Q.parseInt,Tf=Pt.random,wy=vs.reverse,ou=yo(Q,"DataView"),Yi=yo(Q,"Map"),iu=yo(Q,"Promise"),oi=yo(Q,"Set"),Xi=yo(Q,"WeakMap"),Ji=yo(st,"create"),Is=Xi&&new Xi,ii={},_y=ko(ou),yy=ko(Yi),ky=ko(iu),Ey=ko(oi),Sy=ko(Xi),Cs=Un?Un.prototype:o,Qi=Cs?Cs.valueOf:o,Lf=Cs?Cs.toString:o;function x(r){if(kt(r)&&!Ge(r)&&!(r instanceof Ke)){if(r instanceof zr)return r;if(nt.call(r,"__wrapped__"))return R2(r)}return new zr(r)}var ai=(function(){function r(){}return function(i){if(!yt(i))return{};if(xf)return xf(i);r.prototype=i;var u=new r;return r.prototype=o,u}})();function Os(){}function zr(r,i){this.__wrapped__=r,this.__actions__=[],this.__chain__=!!i,this.__index__=0,this.__values__=o}x.templateSettings={escape:W8,evaluate:U8,interpolate:B1,variable:"",imports:{_:x}},x.prototype=Os.prototype,x.prototype.constructor=x,zr.prototype=ai(Os.prototype),zr.prototype.constructor=zr;function Ke(r){this.__wrapped__=r,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=ke,this.__views__=[]}function Ay(){var r=new Ke(this.__wrapped__);return r.__actions__=ar(this.__actions__),r.__dir__=this.__dir__,r.__filtered__=this.__filtered__,r.__iteratees__=ar(this.__iteratees__),r.__takeCount__=this.__takeCount__,r.__views__=ar(this.__views__),r}function My(){if(this.__filtered__){var r=new Ke(this);r.__dir__=-1,r.__filtered__=!0}else r=this.clone(),r.__dir__*=-1;return r}function xy(){var r=this.__wrapped__.value(),i=this.__dir__,u=Ge(r),g=i<0,E=u?r.length:0,I=Bk(0,E,this.__views__),R=I.start,$=I.end,F=$-R,ie=g?$:R-1,te=this.__iteratees__,ce=te.length,we=0,Se=qt(F,this.__takeCount__);if(!u||!g&&E==F&&Se==F)return r2(r,this.__actions__);var Oe=[];e:for(;F--&&we<Se;){ie+=i;for(var Be=-1,Te=r[ie];++Be<ce;){var lt=te[Be],Ye=lt.iteratee,Qt=lt.type,an=Ye(Te);if(Qt==ue)Te=an;else if(!an){if(Qt==Ce)continue e;break e}}Oe[we++]=Te}return Oe}Ke.prototype=ai(Os.prototype),Ke.prototype.constructor=Ke;function vo(r){var i=-1,u=r==null?0:r.length;for(this.clear();++i<u;){var g=r[i];this.set(g[0],g[1])}}function Iy(){this.__data__=Ji?Ji(null):{},this.size=0}function Cy(r){var i=this.has(r)&&delete this.__data__[r];return this.size-=i?1:0,i}function Oy(r){var i=this.__data__;if(Ji){var u=i[r];return u===p?o:u}return nt.call(i,r)?i[r]:o}function Ty(r){var i=this.__data__;return Ji?i[r]!==o:nt.call(i,r)}function Ly(r,i){var u=this.__data__;return this.size+=this.has(r)?0:1,u[r]=Ji&&i===o?p:i,this}vo.prototype.clear=Iy,vo.prototype.delete=Cy,vo.prototype.get=Oy,vo.prototype.has=Ty,vo.prototype.set=Ly;function vn(r){var i=-1,u=r==null?0:r.length;for(this.clear();++i<u;){var g=r[i];this.set(g[0],g[1])}}function Ry(){this.__data__=[],this.size=0}function Py(r){var i=this.__data__,u=Ts(i,r);return u<0?!1:(u==i.length-1?i.pop():Ss.call(i,u,1),--this.size,!0)}function $y(r){var i=this.__data__,u=Ts(i,r);return u<0?o:i[u][1]}function Dy(r){return Ts(this.__data__,r)>-1}function zy(r,i){var u=this.__data__,g=Ts(u,r);return g<0?(++this.size,u.push([r,i])):u[g][1]=i,this}vn.prototype.clear=Ry,vn.prototype.delete=Py,vn.prototype.get=$y,vn.prototype.has=Dy,vn.prototype.set=zy;function bn(r){var i=-1,u=r==null?0:r.length;for(this.clear();++i<u;){var g=r[i];this.set(g[0],g[1])}}function Ny(){this.size=0,this.__data__={hash:new vo,map:new(Yi||vn),string:new vo}}function By(r){var i=Ws(this,r).delete(r);return this.size-=i?1:0,i}function Hy(r){return Ws(this,r).get(r)}function Fy(r){return Ws(this,r).has(r)}function Gy(r,i){var u=Ws(this,r),g=u.size;return u.set(r,i),this.size+=u.size==g?0:1,this}bn.prototype.clear=Ny,bn.prototype.delete=By,bn.prototype.get=Hy,bn.prototype.has=Fy,bn.prototype.set=Gy;function bo(r){var i=-1,u=r==null?0:r.length;for(this.__data__=new bn;++i<u;)this.add(r[i])}function Wy(r){return this.__data__.set(r,p),this}function Uy(r){return this.__data__.has(r)}bo.prototype.add=bo.prototype.push=Wy,bo.prototype.has=Uy;function Zr(r){var i=this.__data__=new vn(r);this.size=i.size}function Vy(){this.__data__=new vn,this.size=0}function qy(r){var i=this.__data__,u=i.delete(r);return this.size=i.size,u}function Zy(r){return this.__data__.get(r)}function jy(r){return this.__data__.has(r)}function Ky(r,i){var u=this.__data__;if(u instanceof vn){var g=u.__data__;if(!Yi||g.length<199)return g.push([r,i]),this.size=++u.size,this;u=this.__data__=new bn(g)}return u.set(r,i),this.size=u.size,this}Zr.prototype.clear=Vy,Zr.prototype.delete=qy,Zr.prototype.get=Zy,Zr.prototype.has=jy,Zr.prototype.set=Ky;function Rf(r,i){var u=Ge(r),g=!u&&Eo(r),E=!u&&!g&&Kn(r),I=!u&&!g&&!E&&ui(r),R=u||g||E||I,$=R?Qc(r.length,iy):[],F=$.length;for(var ie in r)(i||nt.call(r,ie))&&!(R&&(ie=="length"||E&&(ie=="offset"||ie=="parent")||I&&(ie=="buffer"||ie=="byteLength"||ie=="byteOffset")||yn(ie,F)))&&$.push(ie);return $}function Pf(r){var i=r.length;return i?r[gu(0,i-1)]:o}function Yy(r,i){return Us(ar(r),wo(i,0,r.length))}function Xy(r){return Us(ar(r))}function au(r,i,u){(u!==o&&!Kr(r[i],u)||u===o&&!(i in r))&&rn(r,i,u)}function ea(r,i,u){var g=r[i];(!(nt.call(r,i)&&Kr(g,u))||u===o&&!(i in r))&&rn(r,i,u)}function Ts(r,i){for(var u=r.length;u--;)if(Kr(r[u][0],i))return u;return-1}function Jy(r,i,u,g){return Vn(r,function(E,I,R){i(g,E,u(E),R)}),g}function $f(r,i){return r&&on(i,Bt(i),r)}function Qy(r,i){return r&&on(i,lr(i),r)}function rn(r,i,u){i=="__proto__"&&As?As(r,i,{configurable:!0,enumerable:!0,value:u,writable:!0}):r[i]=u}function su(r,i){for(var u=-1,g=i.length,E=j(g),I=r==null;++u<g;)E[u]=I?o:Gu(r,i[u]);return E}function wo(r,i,u){return r===r&&(u!==o&&(r=r<=u?r:u),i!==o&&(r=r>=i?r:i)),r}function Nr(r,i,u,g,E,I){var R,$=i&v,F=i&y,ie=i&w;if(u&&(R=E?u(r,g,E,I):u(r)),R!==o)return R;if(!yt(r))return r;var te=Ge(r);if(te){if(R=Fk(r),!$)return ar(r,R)}else{var ce=Zt(r),we=ce==k||ce==re;if(Kn(r))return i2(r,$);if(ce==N||ce==ft||we&&!E){if(R=F||we?{}:S2(r),!$)return F?Ok(r,Qy(R,r)):Ck(r,$f(R,r))}else{if(!dt[ce])return E?r:{};R=Gk(r,ce,$)}}I||(I=new Zr);var Se=I.get(r);if(Se)return Se;I.set(r,R),Q2(r)?r.forEach(function(Be){R.add(Nr(Be,i,u,Be,r,I))}):X2(r)&&r.forEach(function(Be,Te){R.set(Te,Nr(Be,i,u,Te,r,I))});var Oe=te?o:(ie?F?xu:Mu:F?lr:Bt)(r);return Er(Oe||r,function(Be,Te){Oe&&(Te=Be,Be=r[Te]),ea(R,Te,Nr(Be,i,u,Te,r,I))}),R}function ek(r){var i=Bt(r);return function(u){return Df(u,r,i)}}function Df(r,i,u){var g=u.length;if(r==null)return!g;for(r=st(r);g--;){var E=u[g],I=i[E],R=r[E];if(R===o&&!(E in r)||!I(R))return!1}return!0}function zf(r,i,u){if(typeof r!="function")throw new Dr(l);return sa(function(){r.apply(o,u)},i)}function ta(r,i,u,g){var E=-1,I=ps,R=!0,$=r.length,F=[],ie=i.length;if(!$)return F;u&&(i=bt(i,Sr(u))),g?(I=Zc,R=!1):i.length>=s&&(I=ji,R=!1,i=new bo(i));e:for(;++E<$;){var te=r[E],ce=u==null?te:u(te);if(te=g||te!==0?te:0,R&&ce===ce){for(var we=ie;we--;)if(i[we]===ce)continue e;F.push(te)}else I(i,ce,g)||F.push(te)}return F}var Vn=u2(nn),Nf=u2(cu,!0);function tk(r,i){var u=!0;return Vn(r,function(g,E,I){return u=!!i(g,E,I),u}),u}function Ls(r,i,u){for(var g=-1,E=r.length;++g<E;){var I=r[g],R=i(I);if(R!=null&&($===o?R===R&&!Mr(R):u(R,$)))var $=R,F=I}return F}function rk(r,i,u,g){var E=r.length;for(u=Ue(u),u<0&&(u=-u>E?0:E+u),g=g===o||g>E?E:Ue(g),g<0&&(g+=E),g=u>g?0:tp(g);u<g;)r[u++]=i;return r}function Bf(r,i){var u=[];return Vn(r,function(g,E,I){i(g,E,I)&&u.push(g)}),u}function Wt(r,i,u,g,E){var I=-1,R=r.length;for(u||(u=Uk),E||(E=[]);++I<R;){var $=r[I];i>0&&u($)?i>1?Wt($,i-1,u,g,E):Fn(E,$):g||(E[E.length]=$)}return E}var lu=d2(),Hf=d2(!0);function nn(r,i){return r&&lu(r,i,Bt)}function cu(r,i){return r&&Hf(r,i,Bt)}function Rs(r,i){return Hn(i,function(u){return kn(r[u])})}function _o(r,i){i=Zn(i,r);for(var u=0,g=i.length;r!=null&&u<g;)r=r[jr(i[u++])];return u&&u==g?r:o}function Ff(r,i,u){var g=i(r);return Ge(r)?g:Fn(g,u(r))}function Xt(r){return r==null?r===o?Ie:O:go&&go in st(r)?Nk(r):Xk(r)}function uu(r,i){return r>i}function nk(r,i){return r!=null&&nt.call(r,i)}function ok(r,i){return r!=null&&i in st(r)}function ik(r,i,u){return r>=qt(i,u)&&r<$t(i,u)}function du(r,i,u){for(var g=u?Zc:ps,E=r[0].length,I=r.length,R=I,$=j(I),F=1/0,ie=[];R--;){var te=r[R];R&&i&&(te=bt(te,Sr(i))),F=qt(te.length,F),$[R]=!u&&(i||E>=120&&te.length>=120)?new bo(R&&te):o}te=r[0];var ce=-1,we=$[0];e:for(;++ce<E&&ie.length<F;){var Se=te[ce],Oe=i?i(Se):Se;if(Se=u||Se!==0?Se:0,!(we?ji(we,Oe):g(ie,Oe,u))){for(R=I;--R;){var Be=$[R];if(!(Be?ji(Be,Oe):g(r[R],Oe,u)))continue e}we&&we.push(Oe),ie.push(Se)}}return ie}function ak(r,i,u,g){return nn(r,function(E,I,R){i(g,u(E),I,R)}),g}function ra(r,i,u){i=Zn(i,r),r=I2(r,i);var g=r==null?r:r[jr(Hr(i))];return g==null?o:kr(g,r,u)}function Gf(r){return kt(r)&&Xt(r)==ft}function sk(r){return kt(r)&&Xt(r)==zt}function lk(r){return kt(r)&&Xt(r)==at}function na(r,i,u,g,E){return r===i?!0:r==null||i==null||!kt(r)&&!kt(i)?r!==r&&i!==i:ck(r,i,u,g,na,E)}function ck(r,i,u,g,E,I){var R=Ge(r),$=Ge(i),F=R?We:Zt(r),ie=$?We:Zt(i);F=F==ft?N:F,ie=ie==ft?N:ie;var te=F==N,ce=ie==N,we=F==ie;if(we&&Kn(r)){if(!Kn(i))return!1;R=!0,te=!1}if(we&&!te)return I||(I=new Zr),R||ui(r)?y2(r,i,u,g,E,I):Dk(r,i,F,u,g,E,I);if(!(u&b)){var Se=te&&nt.call(r,"__wrapped__"),Oe=ce&&nt.call(i,"__wrapped__");if(Se||Oe){var Be=Se?r.value():r,Te=Oe?i.value():i;return I||(I=new Zr),E(Be,Te,u,g,I)}}return we?(I||(I=new Zr),zk(r,i,u,g,E,I)):!1}function uk(r){return kt(r)&&Zt(r)==V}function hu(r,i,u,g){var E=u.length,I=E,R=!g;if(r==null)return!I;for(r=st(r);E--;){var $=u[E];if(R&&$[2]?$[1]!==r[$[0]]:!($[0]in r))return!1}for(;++E<I;){$=u[E];var F=$[0],ie=r[F],te=$[1];if(R&&$[2]){if(ie===o&&!(F in r))return!1}else{var ce=new Zr;if(g)var we=g(ie,te,F,r,i,ce);if(!(we===o?na(te,ie,3,g,ce):we))return!1}}return!0}function Wf(r){return!yt(r)||qk(r)?!1:(kn(r)?uy:o_).test(ko(r))}function dk(r){return kt(r)&&Xt(r)==G}function hk(r){return kt(r)&&Zt(r)==de}function fk(r){return kt(r)&&Ys(r.length)&&!!mt[Xt(r)]}function Uf(r){return typeof r=="function"?r:r==null?cr:typeof r=="object"?Ge(r)?Zf(r[0],r[1]):qf(r):fp(r)}function fu(r){if(!aa(r))return gy(r);var i=[];for(var u in st(r))nt.call(r,u)&&u!="constructor"&&i.push(u);return i}function pk(r){if(!yt(r))return Yk(r);var i=aa(r),u=[];for(var g in r)g=="constructor"&&(i||!nt.call(r,g))||u.push(g);return u}function pu(r,i){return r<i}function Vf(r,i){var u=-1,g=sr(r)?j(r.length):[];return Vn(r,function(E,I,R){g[++u]=i(E,I,R)}),g}function qf(r){var i=Cu(r);return i.length==1&&i[0][2]?M2(i[0][0],i[0][1]):function(u){return u===r||hu(u,r,i)}}function Zf(r,i){return Tu(r)&&A2(i)?M2(jr(r),i):function(u){var g=Gu(u,r);return g===o&&g===i?Wu(u,r):na(i,g,3)}}function Ps(r,i,u,g,E){r!==i&&lu(i,function(I,R){if(E||(E=new Zr),yt(I))mk(r,i,R,u,Ps,g,E);else{var $=g?g(Ru(r,R),I,R+"",r,i,E):o;$===o&&($=I),au(r,R,$)}},lr)}function mk(r,i,u,g,E,I,R){var $=Ru(r,u),F=Ru(i,u),ie=R.get(F);if(ie){au(r,u,ie);return}var te=I?I($,F,u+"",r,i,R):o,ce=te===o;if(ce){var we=Ge(F),Se=!we&&Kn(F),Oe=!we&&!Se&&ui(F);te=F,we||Se||Oe?Ge($)?te=$:Mt($)?te=ar($):Se?(ce=!1,te=i2(F,!0)):Oe?(ce=!1,te=a2(F,!0)):te=[]:la(F)||Eo(F)?(te=$,Eo($)?te=rp($):(!yt($)||kn($))&&(te=S2(F))):ce=!1}ce&&(R.set(F,te),E(te,F,g,I,R),R.delete(F)),au(r,u,te)}function jf(r,i){var u=r.length;if(u)return i+=i<0?u:0,yn(i,u)?r[i]:o}function Kf(r,i,u){i.length?i=bt(i,function(E){return Ge(E)?function(I){return _o(I,E.length===1?E[0]:E)}:E}):i=[cr];var g=-1;return i=bt(i,Sr(Le())),W_(Vf(r,function(E,I,R){return{criteria:bt(i,function($){return $(E)}),index:++g,value:E}}),function(E,I){return Ik(E,I,u)})}function gk(r,i){return Yf(r,i,function(u,g){return Wu(r,g)})}function Yf(r,i,u){for(var g=-1,E=i.length,I={};++g<E;){var R=i[g],$=_o(r,R);u($,R)&&oa(I,Zn(R,r),$)}return I}function vk(r){return function(i){return _o(i,r)}}function mu(r,i,u,g){var E=g?G_:ei,I=-1,R=i.length,$=r;for(r===i&&(i=ar(i)),u&&($=bt(r,Sr(u)));++I<R;)for(var F=0,ie=i[I],te=u?u(ie):ie;(F=E($,te,F,g))>-1;)$!==r&&Ss.call($,F,1),Ss.call(r,F,1);return r}function Xf(r,i){for(var u=r?i.length:0,g=u-1;u--;){var E=i[u];if(u==g||E!==I){var I=E;yn(E)?Ss.call(r,E,1):wu(r,E)}}return r}function gu(r,i){return r+xs(Tf()*(i-r+1))}function bk(r,i,u,g){for(var E=-1,I=$t(Ms((i-r)/(u||1)),0),R=j(I);I--;)R[g?I:++E]=r,r+=u;return R}function vu(r,i){var u="";if(!r||i<1||i>Ae)return u;do i%2&&(u+=r),i=xs(i/2),i&&(r+=r);while(i);return u}function qe(r,i){return Pu(x2(r,i,cr),r+"")}function wk(r){return Pf(di(r))}function _k(r,i){var u=di(r);return Us(u,wo(i,0,u.length))}function oa(r,i,u,g){if(!yt(r))return r;i=Zn(i,r);for(var E=-1,I=i.length,R=I-1,$=r;$!=null&&++E<I;){var F=jr(i[E]),ie=u;if(F==="__proto__"||F==="constructor"||F==="prototype")return r;if(E!=R){var te=$[F];ie=g?g(te,F,$):o,ie===o&&(ie=yt(te)?te:yn(i[E+1])?[]:{})}ea($,F,ie),$=$[F]}return r}var Jf=Is?function(r,i){return Is.set(r,i),r}:cr,yk=As?function(r,i){return As(r,"toString",{configurable:!0,enumerable:!1,value:Vu(i),writable:!0})}:cr;function kk(r){return Us(di(r))}function Br(r,i,u){var g=-1,E=r.length;i<0&&(i=-i>E?0:E+i),u=u>E?E:u,u<0&&(u+=E),E=i>u?0:u-i>>>0,i>>>=0;for(var I=j(E);++g<E;)I[g]=r[g+i];return I}function Ek(r,i){var u;return Vn(r,function(g,E,I){return u=i(g,E,I),!u}),!!u}function $s(r,i,u){var g=0,E=r==null?g:r.length;if(typeof i=="number"&&i===i&&E<=pe){for(;g<E;){var I=g+E>>>1,R=r[I];R!==null&&!Mr(R)&&(u?R<=i:R<i)?g=I+1:E=I}return E}return bu(r,i,cr,u)}function bu(r,i,u,g){var E=0,I=r==null?0:r.length;if(I===0)return 0;i=u(i);for(var R=i!==i,$=i===null,F=Mr(i),ie=i===o;E<I;){var te=xs((E+I)/2),ce=u(r[te]),we=ce!==o,Se=ce===null,Oe=ce===ce,Be=Mr(ce);if(R)var Te=g||Oe;else ie?Te=Oe&&(g||we):$?Te=Oe&&we&&(g||!Se):F?Te=Oe&&we&&!Se&&(g||!Be):Se||Be?Te=!1:Te=g?ce<=i:ce<i;Te?E=te+1:I=te}return qt(I,ge)}function Qf(r,i){for(var u=-1,g=r.length,E=0,I=[];++u<g;){var R=r[u],$=i?i(R):R;if(!u||!Kr($,F)){var F=$;I[E++]=R===0?0:R}}return I}function e2(r){return typeof r=="number"?r:Mr(r)?W:+r}function Ar(r){if(typeof r=="string")return r;if(Ge(r))return bt(r,Ar)+"";if(Mr(r))return Lf?Lf.call(r):"";var i=r+"";return i=="0"&&1/r==-1/0?"-0":i}function qn(r,i,u){var g=-1,E=ps,I=r.length,R=!0,$=[],F=$;if(u)R=!1,E=Zc;else if(I>=s){var ie=i?null:Pk(r);if(ie)return gs(ie);R=!1,E=ji,F=new bo}else F=i?[]:$;e:for(;++g<I;){var te=r[g],ce=i?i(te):te;if(te=u||te!==0?te:0,R&&ce===ce){for(var we=F.length;we--;)if(F[we]===ce)continue e;i&&F.push(ce),$.push(te)}else E(F,ce,u)||(F!==$&&F.push(ce),$.push(te))}return $}function wu(r,i){i=Zn(i,r);var u=-1,g=i.length;if(!g)return!0;for(;++u<g;){var E=jr(i[u]);if(E==="__proto__"&&!nt.call(r,"__proto__")||(E==="constructor"||E==="prototype")&&u<g-1)return!1}var I=I2(r,i);return I==null||delete I[jr(Hr(i))]}function t2(r,i,u,g){return oa(r,i,u(_o(r,i)),g)}function Ds(r,i,u,g){for(var E=r.length,I=g?E:-1;(g?I--:++I<E)&&i(r[I],I,r););return u?Br(r,g?0:I,g?I+1:E):Br(r,g?I+1:0,g?E:I)}function r2(r,i){var u=r;return u instanceof Ke&&(u=u.value()),jc(i,function(g,E){return E.func.apply(E.thisArg,Fn([g],E.args))},u)}function _u(r,i,u){var g=r.length;if(g<2)return g?qn(r[0]):[];for(var E=-1,I=j(g);++E<g;)for(var R=r[E],$=-1;++$<g;)$!=E&&(I[E]=ta(I[E]||R,r[$],i,u));return qn(Wt(I,1),i,u)}function n2(r,i,u){for(var g=-1,E=r.length,I=i.length,R={};++g<E;){var $=g<I?i[g]:o;u(R,r[g],$)}return R}function yu(r){return Mt(r)?r:[]}function ku(r){return typeof r=="function"?r:cr}function Zn(r,i){return Ge(r)?r:Tu(r,i)?[r]:L2(ot(r))}var Sk=qe;function jn(r,i,u){var g=r.length;return u=u===o?g:u,!i&&u>=g?r:Br(r,i,u)}var o2=dy||function(r){return Nt.clearTimeout(r)};function i2(r,i){if(i)return r.slice();var u=r.length,g=Mf?Mf(u):new r.constructor(u);return r.copy(g),g}function Eu(r){var i=new r.constructor(r.byteLength);return new ks(i).set(new ks(r)),i}function Ak(r,i){var u=i?Eu(r.buffer):r.buffer;return new r.constructor(u,r.byteOffset,r.byteLength)}function Mk(r){var i=new r.constructor(r.source,F1.exec(r));return i.lastIndex=r.lastIndex,i}function xk(r){return Qi?st(Qi.call(r)):{}}function a2(r,i){var u=i?Eu(r.buffer):r.buffer;return new r.constructor(u,r.byteOffset,r.length)}function s2(r,i){if(r!==i){var u=r!==o,g=r===null,E=r===r,I=Mr(r),R=i!==o,$=i===null,F=i===i,ie=Mr(i);if(!$&&!ie&&!I&&r>i||I&&R&&F&&!$&&!ie||g&&R&&F||!u&&F||!E)return 1;if(!g&&!I&&!ie&&r<i||ie&&u&&E&&!g&&!I||$&&u&&E||!R&&E||!F)return-1}return 0}function Ik(r,i,u){for(var g=-1,E=r.criteria,I=i.criteria,R=E.length,$=u.length;++g<R;){var F=s2(E[g],I[g]);if(F)return g>=$?F:F*(u[g]=="desc"?-1:1)}return r.index-i.index}function l2(r,i,u,g){for(var E=-1,I=r.length,R=u.length,$=-1,F=i.length,ie=$t(I-R,0),te=j(F+ie),ce=!g;++$<F;)te[$]=i[$];for(;++E<R;)(ce||E<I)&&(te[u[E]]=r[E]);for(;ie--;)te[$++]=r[E++];return te}function c2(r,i,u,g){for(var E=-1,I=r.length,R=-1,$=u.length,F=-1,ie=i.length,te=$t(I-$,0),ce=j(te+ie),we=!g;++E<te;)ce[E]=r[E];for(var Se=E;++F<ie;)ce[Se+F]=i[F];for(;++R<$;)(we||E<I)&&(ce[Se+u[R]]=r[E++]);return ce}function ar(r,i){var u=-1,g=r.length;for(i||(i=j(g));++u<g;)i[u]=r[u];return i}function on(r,i,u,g){var E=!u;u||(u={});for(var I=-1,R=i.length;++I<R;){var $=i[I],F=g?g(u[$],r[$],$,u,r):o;F===o&&(F=r[$]),E?rn(u,$,F):ea(u,$,F)}return u}function Ck(r,i){return on(r,Ou(r),i)}function Ok(r,i){return on(r,k2(r),i)}function zs(r,i){return function(u,g){var E=Ge(u)?D_:Jy,I=i?i():{};return E(u,r,Le(g,2),I)}}function si(r){return qe(function(i,u){var g=-1,E=u.length,I=E>1?u[E-1]:o,R=E>2?u[2]:o;for(I=r.length>3&&typeof I=="function"?(E--,I):o,R&&Jt(u[0],u[1],R)&&(I=E<3?o:I,E=1),i=st(i);++g<E;){var $=u[g];$&&r(i,$,g,I)}return i})}function u2(r,i){return function(u,g){if(u==null)return u;if(!sr(u))return r(u,g);for(var E=u.length,I=i?E:-1,R=st(u);(i?I--:++I<E)&&g(R[I],I,R)!==!1;);return u}}function d2(r){return function(i,u,g){for(var E=-1,I=st(i),R=g(i),$=R.length;$--;){var F=R[r?$:++E];if(u(I[F],F,I)===!1)break}return i}}function Tk(r,i,u){var g=i&M,E=ia(r);function I(){return(this&&this!==Nt&&this instanceof I?E:r).apply(g?u:this,arguments)}return I}function h2(r){return function(i){i=ot(i);var u=ti(i)?qr(i):o,g=u?u[0]:i.charAt(0),E=u?jn(u,1).join(""):i.slice(1);return g[r]()+E}}function li(r){return function(i){return jc(dp(up(i).replace(k_,"")),r,"")}}function ia(r){return function(){var i=arguments;switch(i.length){case 0:return new r;case 1:return new r(i[0]);case 2:return new r(i[0],i[1]);case 3:return new r(i[0],i[1],i[2]);case 4:return new r(i[0],i[1],i[2],i[3]);case 5:return new r(i[0],i[1],i[2],i[3],i[4]);case 6:return new r(i[0],i[1],i[2],i[3],i[4],i[5]);case 7:return new r(i[0],i[1],i[2],i[3],i[4],i[5],i[6])}var u=ai(r.prototype),g=r.apply(u,i);return yt(g)?g:u}}function Lk(r,i,u){var g=ia(r);function E(){for(var I=arguments.length,R=j(I),$=I,F=ci(E);$--;)R[$]=arguments[$];var ie=I<3&&R[0]!==F&&R[I-1]!==F?[]:Gn(R,F);return I-=ie.length,I<u?v2(r,i,Ns,E.placeholder,o,R,ie,o,o,u-I):kr(this&&this!==Nt&&this instanceof E?g:r,this,R)}return E}function f2(r){return function(i,u,g){var E=st(i);if(!sr(i)){var I=Le(u,3);i=Bt(i),u=function($){return I(E[$],$,E)}}var R=r(i,u,g);return R>-1?E[I?i[R]:R]:o}}function p2(r){return _n(function(i){var u=i.length,g=u,E=zr.prototype.thru;for(r&&i.reverse();g--;){var I=i[g];if(typeof I!="function")throw new Dr(l);if(E&&!R&&Gs(I)=="wrapper")var R=new zr([],!0)}for(g=R?g:u;++g<u;){I=i[g];var $=Gs(I),F=$=="wrapper"?Iu(I):o;F&&Lu(F[0])&&F[1]==(H|D|U|me)&&!F[4].length&&F[9]==1?R=R[Gs(F[0])].apply(R,F[3]):R=I.length==1&&Lu(I)?R[$]():R.thru(I)}return function(){var ie=arguments,te=ie[0];if(R&&ie.length==1&&Ge(te))return R.plant(te).value();for(var ce=0,we=u?i[ce].apply(this,ie):te;++ce<u;)we=i[ce].call(this,we);return we}})}function Ns(r,i,u,g,E,I,R,$,F,ie){var te=i&H,ce=i&M,we=i&C,Se=i&(D|Y),Oe=i&ve,Be=we?o:ia(r);function Te(){for(var lt=arguments.length,Ye=j(lt),Qt=lt;Qt--;)Ye[Qt]=arguments[Qt];if(Se)var an=ci(Te),Yn=V_(Ye,an);if(g&&(Ye=l2(Ye,g,E,Se)),I&&(Ye=c2(Ye,I,R,Se)),lt-=Yn,Se&&lt<ie){var xt=Gn(Ye,an);return v2(r,i,Ns,Te.placeholder,u,Ye,xt,$,F,ie-lt)}var Yr=ce?u:this,Sn=we?Yr[r]:r;return lt=Ye.length,$?Ye=Jk(Ye,$):Oe&&lt>1&&Ye.reverse(),te&&F<lt&&(Ye.length=F),this&&this!==Nt&&this instanceof Te&&(Sn=Be||ia(Sn)),Sn.apply(Yr,Ye)}return Te}function m2(r,i){return function(u,g){return ak(u,r,i(g),{})}}function Bs(r,i){return function(u,g){var E;if(u===o&&g===o)return i;if(u!==o&&(E=u),g!==o){if(E===o)return g;typeof u=="string"||typeof g=="string"?(u=Ar(u),g=Ar(g)):(u=e2(u),g=e2(g)),E=r(u,g)}return E}}function Su(r){return _n(function(i){return i=bt(i,Sr(Le())),qe(function(u){var g=this;return r(i,function(E){return kr(E,g,u)})})})}function Hs(r,i){i=i===o?" ":Ar(i);var u=i.length;if(u<2)return u?vu(i,r):i;var g=vu(i,Ms(r/ri(i)));return ti(i)?jn(qr(g),0,r).join(""):g.slice(0,r)}function Rk(r,i,u,g){var E=i&M,I=ia(r);function R(){for(var $=-1,F=arguments.length,ie=-1,te=g.length,ce=j(te+F),we=this&&this!==Nt&&this instanceof R?I:r;++ie<te;)ce[ie]=g[ie];for(;F--;)ce[ie++]=arguments[++$];return kr(we,E?u:this,ce)}return R}function g2(r){return function(i,u,g){return g&&typeof g!="number"&&Jt(i,u,g)&&(u=g=o),i=En(i),u===o?(u=i,i=0):u=En(u),g=g===o?i<u?1:-1:En(g),bk(i,u,g,r)}}function Fs(r){return function(i,u){return typeof i=="string"&&typeof u=="string"||(i=Fr(i),u=Fr(u)),r(i,u)}}function v2(r,i,u,g,E,I,R,$,F,ie){var te=i&D,ce=te?R:o,we=te?o:R,Se=te?I:o,Oe=te?o:I;i|=te?U:oe,i&=~(te?oe:U),i&L||(i&=~(M|C));var Be=[r,i,E,Se,ce,Oe,we,$,F,ie],Te=u.apply(o,Be);return Lu(r)&&C2(Te,Be),Te.placeholder=g,O2(Te,r,i)}function Au(r){var i=Pt[r];return function(u,g){if(u=Fr(u),g=g==null?0:qt(Ue(g),292),g&&Of(u)){var E=(ot(u)+"e").split("e");return E=(ot(i(E[0]+"e"+(+E[1]+g)))+"e").split("e"),+(E[0]+"e"+(+E[1]-g))}return i(u)}}var Pk=oi&&1/gs(new oi([,-0]))[1]==se?function(r){return new oi(r)}:ju;function b2(r){return function(i){var u=Zt(i);return u==V?tu(i):u==de?J_(i):U_(i,r(i))}}function wn(r,i,u,g,E,I,R,$){var F=i&C;if(!F&&typeof r!="function")throw new Dr(l);var ie=g?g.length:0;if(ie||(i&=~(U|oe),g=E=o),R=R===o?R:$t(Ue(R),0),$=$===o?$:Ue($),ie-=E?E.length:0,i&oe){var te=g,ce=E;g=E=o}var we=F?o:Iu(r),Se=[r,i,u,g,E,te,ce,I,R,$];if(we&&Kk(Se,we),r=Se[0],i=Se[1],u=Se[2],g=Se[3],E=Se[4],$=Se[9]=Se[9]===o?F?0:r.length:$t(Se[9]-ie,0),!$&&i&(D|Y)&&(i&=~(D|Y)),!i||i==M)var Oe=Tk(r,i,u);else i==D||i==Y?Oe=Lk(r,i,$):(i==U||i==(M|U))&&!E.length?Oe=Rk(r,i,u,g):Oe=Ns.apply(o,Se);return O2((we?Jf:C2)(Oe,Se),r,i)}function w2(r,i,u,g){return r===o||Kr(r,ni[u])&&!nt.call(g,u)?i:r}function _2(r,i,u,g,E,I){return yt(r)&&yt(i)&&(I.set(i,r),Ps(r,i,o,_2,I),I.delete(i)),r}function $k(r){return la(r)?o:r}function y2(r,i,u,g,E,I){var R=u&b,$=r.length,F=i.length;if($!=F&&!(R&&F>$))return!1;var ie=I.get(r),te=I.get(i);if(ie&&te)return ie==i&&te==r;var ce=-1,we=!0,Se=u&S?new bo:o;for(I.set(r,i),I.set(i,r);++ce<$;){var Oe=r[ce],Be=i[ce];if(g)var Te=R?g(Be,Oe,ce,i,r,I):g(Oe,Be,ce,r,i,I);if(Te!==o){if(Te)continue;we=!1;break}if(Se){if(!Kc(i,function(lt,Ye){if(!ji(Se,Ye)&&(Oe===lt||E(Oe,lt,u,g,I)))return Se.push(Ye)})){we=!1;break}}else if(!(Oe===Be||E(Oe,Be,u,g,I))){we=!1;break}}return I.delete(r),I.delete(i),we}function Dk(r,i,u,g,E,I,R){switch(u){case Pr:if(r.byteLength!=i.byteLength||r.byteOffset!=i.byteOffset)return!1;r=r.buffer,i=i.buffer;case zt:return!(r.byteLength!=i.byteLength||!I(new ks(r),new ks(i)));case vt:case at:case T:return Kr(+r,+i);case Vt:return r.name==i.name&&r.message==i.message;case G:case be:return r==i+"";case V:var $=tu;case de:var F=g&b;if($||($=gs),r.size!=i.size&&!F)return!1;var ie=R.get(r);if(ie)return ie==i;g|=S,R.set(r,i);var te=y2($(r),$(i),g,E,I,R);return R.delete(r),te;case he:if(Qi)return Qi.call(r)==Qi.call(i)}return!1}function zk(r,i,u,g,E,I){var R=u&b,$=Mu(r),F=$.length;if(F!=Mu(i).length&&!R)return!1;for(var ie=F;ie--;){var te=$[ie];if(!(R?te in i:nt.call(i,te)))return!1}var ce=I.get(r),we=I.get(i);if(ce&&we)return ce==i&&we==r;var Se=!0;I.set(r,i),I.set(i,r);for(var Oe=R;++ie<F;){te=$[ie];var Be=r[te],Te=i[te];if(g)var lt=R?g(Te,Be,te,i,r,I):g(Be,Te,te,r,i,I);if(!(lt===o?Be===Te||E(Be,Te,u,g,I):lt)){Se=!1;break}Oe||(Oe=te=="constructor")}if(Se&&!Oe){var Ye=r.constructor,Qt=i.constructor;Ye!=Qt&&"constructor"in r&&"constructor"in i&&!(typeof Ye=="function"&&Ye instanceof Ye&&typeof Qt=="function"&&Qt instanceof Qt)&&(Se=!1)}return I.delete(r),I.delete(i),Se}function _n(r){return Pu(x2(r,o,D2),r+"")}function Mu(r){return Ff(r,Bt,Ou)}function xu(r){return Ff(r,lr,k2)}var Iu=Is?function(r){return Is.get(r)}:ju;function Gs(r){for(var i=r.name+"",u=ii[i],g=nt.call(ii,i)?u.length:0;g--;){var E=u[g],I=E.func;if(I==null||I==r)return E.name}return i}function ci(r){return(nt.call(x,"placeholder")?x:r).placeholder}function Le(){var r=x.iteratee||qu;return r=r===qu?Uf:r,arguments.length?r(arguments[0],arguments[1]):r}function Ws(r,i){var u=r.__data__;return Vk(i)?u[typeof i=="string"?"string":"hash"]:u.map}function Cu(r){for(var i=Bt(r),u=i.length;u--;){var g=i[u],E=r[g];i[u]=[g,E,A2(E)]}return i}function yo(r,i){var u=K_(r,i);return Wf(u)?u:o}function Nk(r){var i=nt.call(r,go),u=r[go];try{r[go]=o;var g=!0}catch{}var E=_s.call(r);return g&&(i?r[go]=u:delete r[go]),E}var Ou=nu?function(r){return r==null?[]:(r=st(r),Hn(nu(r),function(i){return If.call(r,i)}))}:Ku,k2=nu?function(r){for(var i=[];r;)Fn(i,Ou(r)),r=Es(r);return i}:Ku,Zt=Xt;(ou&&Zt(new ou(new ArrayBuffer(1)))!=Pr||Yi&&Zt(new Yi)!=V||iu&&Zt(iu.resolve())!=ae||oi&&Zt(new oi)!=de||Xi&&Zt(new Xi)!=Je)&&(Zt=function(r){var i=Xt(r),u=i==N?r.constructor:o,g=u?ko(u):"";if(g)switch(g){case _y:return Pr;case yy:return V;case ky:return ae;case Ey:return de;case Sy:return Je}return i});function Bk(r,i,u){for(var g=-1,E=u.length;++g<E;){var I=u[g],R=I.size;switch(I.type){case"drop":r+=R;break;case"dropRight":i-=R;break;case"take":i=qt(i,r+R);break;case"takeRight":r=$t(r,i-R)}}return{start:r,end:i}}function Hk(r){var i=r.match(X8);return i?i[1].split(J8):[]}function E2(r,i,u){i=Zn(i,r);for(var g=-1,E=i.length,I=!1;++g<E;){var R=jr(i[g]);if(!(I=r!=null&&u(r,R)))break;r=r[R]}return I||++g!=E?I:(E=r==null?0:r.length,!!E&&Ys(E)&&yn(R,E)&&(Ge(r)||Eo(r)))}function Fk(r){var i=r.length,u=new r.constructor(i);return i&&typeof r[0]=="string"&&nt.call(r,"index")&&(u.index=r.index,u.input=r.input),u}function S2(r){return typeof r.constructor=="function"&&!aa(r)?ai(Es(r)):{}}function Gk(r,i,u){var g=r.constructor;switch(i){case zt:return Eu(r);case vt:case at:return new g(+r);case Pr:return Ak(r,u);case ir:case gn:case pt:case Bn:case ho:case yr:case Jo:case qi:case Zi:return a2(r,u);case V:return new g;case T:case be:return new g(r);case G:return Mk(r);case de:return new g;case he:return xk(r)}}function Wk(r,i){var u=i.length;if(!u)return r;var g=u-1;return i[g]=(u>1?"& ":"")+i[g],i=i.join(u>2?", ":" "),r.replace(Y8,`{
/* [wrapped with `+i+`] */
`)}function Uk(r){return Ge(r)||Eo(r)||!!(Cf&&r&&r[Cf])}function yn(r,i){var u=typeof r;return i=i??Ae,!!i&&(u=="number"||u!="symbol"&&a_.test(r))&&r>-1&&r%1==0&&r<i}function Jt(r,i,u){if(!yt(u))return!1;var g=typeof i;return(g=="number"?sr(u)&&yn(i,u.length):g=="string"&&i in u)?Kr(u[i],r):!1}function Tu(r,i){if(Ge(r))return!1;var u=typeof r;return u=="number"||u=="symbol"||u=="boolean"||r==null||Mr(r)?!0:q8.test(r)||!V8.test(r)||i!=null&&r in st(i)}function Vk(r){var i=typeof r;return i=="string"||i=="number"||i=="symbol"||i=="boolean"?r!=="__proto__":r===null}function Lu(r){var i=Gs(r),u=x[i];if(typeof u!="function"||!(i in Ke.prototype))return!1;if(r===u)return!0;var g=Iu(u);return!!g&&r===g[0]}function qk(r){return!!Af&&Af in r}var Zk=bs?kn:Yu;function aa(r){var i=r&&r.constructor;return r===(typeof i=="function"&&i.prototype||ni)}function A2(r){return r===r&&!yt(r)}function M2(r,i){return function(u){return u==null?!1:u[r]===i&&(i!==o||r in st(u))}}function jk(r){var i=js(r,function(g){return u.size===m&&u.clear(),g}),u=i.cache;return i}function Kk(r,i){var u=r[1],g=i[1],E=u|g,I=E<(M|C|H),R=g==H&&u==D||g==H&&u==me&&r[7].length<=i[8]||g==(H|me)&&i[7].length<=i[8]&&u==D;if(!(I||R))return r;g&M&&(r[2]=i[2],E|=u&M?0:L);var $=i[3];if($){var F=r[3];r[3]=F?l2(F,$,i[4]):$,r[4]=F?Gn(r[3],_):i[4]}return $=i[5],$&&(F=r[5],r[5]=F?c2(F,$,i[6]):$,r[6]=F?Gn(r[5],_):i[6]),$=i[7],$&&(r[7]=$),g&H&&(r[8]=r[8]==null?i[8]:qt(r[8],i[8])),r[9]==null&&(r[9]=i[9]),r[0]=i[0],r[1]=E,r}function Yk(r){var i=[];if(r!=null)for(var u in st(r))i.push(u);return i}function Xk(r){return _s.call(r)}function x2(r,i,u){return i=$t(i===o?r.length-1:i,0),function(){for(var g=arguments,E=-1,I=$t(g.length-i,0),R=j(I);++E<I;)R[E]=g[i+E];E=-1;for(var $=j(i+1);++E<i;)$[E]=g[E];return $[i]=u(R),kr(r,this,$)}}function I2(r,i){return i.length<2?r:_o(r,Br(i,0,-1))}function Jk(r,i){for(var u=r.length,g=qt(i.length,u),E=ar(r);g--;){var I=i[g];r[g]=yn(I,u)?E[I]:o}return r}function Ru(r,i){if(!(i==="constructor"&&typeof r[i]=="function")&&i!="__proto__")return r[i]}var C2=T2(Jf),sa=fy||function(r,i){return Nt.setTimeout(r,i)},Pu=T2(yk);function O2(r,i,u){var g=i+"";return Pu(r,Wk(g,Qk(Hk(g),u)))}function T2(r){var i=0,u=0;return function(){var g=vy(),E=ee-(g-u);if(u=g,E>0){if(++i>=A)return arguments[0]}else i=0;return r.apply(o,arguments)}}function Us(r,i){var u=-1,g=r.length,E=g-1;for(i=i===o?g:i;++u<i;){var I=gu(u,E),R=r[I];r[I]=r[u],r[u]=R}return r.length=i,r}var L2=jk(function(r){var i=[];return r.charCodeAt(0)===46&&i.push(""),r.replace(Z8,function(u,g,E,I){i.push(E?I.replace(e_,"$1"):g||u)}),i});function jr(r){if(typeof r=="string"||Mr(r))return r;var i=r+"";return i=="0"&&1/r==-1/0?"-0":i}function ko(r){if(r!=null){try{return ws.call(r)}catch{}try{return r+""}catch{}}return""}function Qk(r,i){return Er(it,function(u){var g="_."+u[0];i&u[1]&&!ps(r,g)&&r.push(g)}),r.sort()}function R2(r){if(r instanceof Ke)return r.clone();var i=new zr(r.__wrapped__,r.__chain__);return i.__actions__=ar(r.__actions__),i.__index__=r.__index__,i.__values__=r.__values__,i}function eE(r,i,u){(u?Jt(r,i,u):i===o)?i=1:i=$t(Ue(i),0);var g=r==null?0:r.length;if(!g||i<1)return[];for(var E=0,I=0,R=j(Ms(g/i));E<g;)R[I++]=Br(r,E,E+=i);return R}function tE(r){for(var i=-1,u=r==null?0:r.length,g=0,E=[];++i<u;){var I=r[i];I&&(E[g++]=I)}return E}function rE(){var r=arguments.length;if(!r)return[];for(var i=j(r-1),u=arguments[0],g=r;g--;)i[g-1]=arguments[g];return Fn(Ge(u)?ar(u):[u],Wt(i,1))}var nE=qe(function(r,i){return Mt(r)?ta(r,Wt(i,1,Mt,!0)):[]}),oE=qe(function(r,i){var u=Hr(i);return Mt(u)&&(u=o),Mt(r)?ta(r,Wt(i,1,Mt,!0),Le(u,2)):[]}),iE=qe(function(r,i){var u=Hr(i);return Mt(u)&&(u=o),Mt(r)?ta(r,Wt(i,1,Mt,!0),o,u):[]});function aE(r,i,u){var g=r==null?0:r.length;return g?(i=u||i===o?1:Ue(i),Br(r,i<0?0:i,g)):[]}function sE(r,i,u){var g=r==null?0:r.length;return g?(i=u||i===o?1:Ue(i),i=g-i,Br(r,0,i<0?0:i)):[]}function lE(r,i){return r&&r.length?Ds(r,Le(i,3),!0,!0):[]}function cE(r,i){return r&&r.length?Ds(r,Le(i,3),!0):[]}function uE(r,i,u,g){var E=r==null?0:r.length;return E?(u&&typeof u!="number"&&Jt(r,i,u)&&(u=0,g=E),rk(r,i,u,g)):[]}function P2(r,i,u){var g=r==null?0:r.length;if(!g)return-1;var E=u==null?0:Ue(u);return E<0&&(E=$t(g+E,0)),ms(r,Le(i,3),E)}function $2(r,i,u){var g=r==null?0:r.length;if(!g)return-1;var E=g-1;return u!==o&&(E=Ue(u),E=u<0?$t(g+E,0):qt(E,g-1)),ms(r,Le(i,3),E,!0)}function D2(r){return r!=null&&r.length?Wt(r,1):[]}function dE(r){return r!=null&&r.length?Wt(r,se):[]}function hE(r,i){return r!=null&&r.length?(i=i===o?1:Ue(i),Wt(r,i)):[]}function fE(r){for(var i=-1,u=r==null?0:r.length,g={};++i<u;){var E=r[i];rn(g,E[0],E[1])}return g}function z2(r){return r&&r.length?r[0]:o}function pE(r,i,u){var g=r==null?0:r.length;if(!g)return-1;var E=u==null?0:Ue(u);return E<0&&(E=$t(g+E,0)),ei(r,i,E)}function mE(r){return r!=null&&r.length?Br(r,0,-1):[]}var gE=qe(function(r){var i=bt(r,yu);return i.length&&i[0]===r[0]?du(i):[]}),vE=qe(function(r){var i=Hr(r),u=bt(r,yu);return i===Hr(u)?i=o:u.pop(),u.length&&u[0]===r[0]?du(u,Le(i,2)):[]}),bE=qe(function(r){var i=Hr(r),u=bt(r,yu);return i=typeof i=="function"?i:o,i&&u.pop(),u.length&&u[0]===r[0]?du(u,o,i):[]});function wE(r,i){return r==null?"":my.call(r,i)}function Hr(r){var i=r==null?0:r.length;return i?r[i-1]:o}function _E(r,i,u){var g=r==null?0:r.length;if(!g)return-1;var E=g;return u!==o&&(E=Ue(u),E=E<0?$t(g+E,0):qt(E,g-1)),i===i?ey(r,i,E):ms(r,vf,E,!0)}function yE(r,i){return r&&r.length?jf(r,Ue(i)):o}var kE=qe(N2);function N2(r,i){return r&&r.length&&i&&i.length?mu(r,i):r}function EE(r,i,u){return r&&r.length&&i&&i.length?mu(r,i,Le(u,2)):r}function SE(r,i,u){return r&&r.length&&i&&i.length?mu(r,i,o,u):r}var AE=_n(function(r,i){var u=r==null?0:r.length,g=su(r,i);return Xf(r,bt(i,function(E){return yn(E,u)?+E:E}).sort(s2)),g});function ME(r,i){var u=[];if(!(r&&r.length))return u;var g=-1,E=[],I=r.length;for(i=Le(i,3);++g<I;){var R=r[g];i(R,g,r)&&(u.push(R),E.push(g))}return Xf(r,E),u}function $u(r){return r==null?r:wy.call(r)}function xE(r,i,u){var g=r==null?0:r.length;return g?(u&&typeof u!="number"&&Jt(r,i,u)?(i=0,u=g):(i=i==null?0:Ue(i),u=u===o?g:Ue(u)),Br(r,i,u)):[]}function IE(r,i){return $s(r,i)}function CE(r,i,u){return bu(r,i,Le(u,2))}function OE(r,i){var u=r==null?0:r.length;if(u){var g=$s(r,i);if(g<u&&Kr(r[g],i))return g}return-1}function TE(r,i){return $s(r,i,!0)}function LE(r,i,u){return bu(r,i,Le(u,2),!0)}function RE(r,i){if(r!=null&&r.length){var u=$s(r,i,!0)-1;if(Kr(r[u],i))return u}return-1}function PE(r){return r&&r.length?Qf(r):[]}function $E(r,i){return r&&r.length?Qf(r,Le(i,2)):[]}function DE(r){var i=r==null?0:r.length;return i?Br(r,1,i):[]}function zE(r,i,u){return r&&r.length?(i=u||i===o?1:Ue(i),Br(r,0,i<0?0:i)):[]}function NE(r,i,u){var g=r==null?0:r.length;return g?(i=u||i===o?1:Ue(i),i=g-i,Br(r,i<0?0:i,g)):[]}function BE(r,i){return r&&r.length?Ds(r,Le(i,3),!1,!0):[]}function HE(r,i){return r&&r.length?Ds(r,Le(i,3)):[]}var FE=qe(function(r){return qn(Wt(r,1,Mt,!0))}),GE=qe(function(r){var i=Hr(r);return Mt(i)&&(i=o),qn(Wt(r,1,Mt,!0),Le(i,2))}),WE=qe(function(r){var i=Hr(r);return i=typeof i=="function"?i:o,qn(Wt(r,1,Mt,!0),o,i)});function UE(r){return r&&r.length?qn(r):[]}function VE(r,i){return r&&r.length?qn(r,Le(i,2)):[]}function qE(r,i){return i=typeof i=="function"?i:o,r&&r.length?qn(r,o,i):[]}function Du(r){if(!(r&&r.length))return[];var i=0;return r=Hn(r,function(u){if(Mt(u))return i=$t(u.length,i),!0}),Qc(i,function(u){return bt(r,Yc(u))})}function B2(r,i){if(!(r&&r.length))return[];var u=Du(r);return i==null?u:bt(u,function(g){return kr(i,o,g)})}var ZE=qe(function(r,i){return Mt(r)?ta(r,i):[]}),jE=qe(function(r){return _u(Hn(r,Mt))}),KE=qe(function(r){var i=Hr(r);return Mt(i)&&(i=o),_u(Hn(r,Mt),Le(i,2))}),YE=qe(function(r){var i=Hr(r);return i=typeof i=="function"?i:o,_u(Hn(r,Mt),o,i)}),XE=qe(Du);function JE(r,i){return n2(r||[],i||[],ea)}function QE(r,i){return n2(r||[],i||[],oa)}var eS=qe(function(r){var i=r.length,u=i>1?r[i-1]:o;return u=typeof u=="function"?(r.pop(),u):o,B2(r,u)});function H2(r){var i=x(r);return i.__chain__=!0,i}function tS(r,i){return i(r),r}function Vs(r,i){return i(r)}var rS=_n(function(r){var i=r.length,u=i?r[0]:0,g=this.__wrapped__,E=function(I){return su(I,r)};return i>1||this.__actions__.length||!(g instanceof Ke)||!yn(u)?this.thru(E):(g=g.slice(u,+u+(i?1:0)),g.__actions__.push({func:Vs,args:[E],thisArg:o}),new zr(g,this.__chain__).thru(function(I){return i&&!I.length&&I.push(o),I}))});function nS(){return H2(this)}function oS(){return new zr(this.value(),this.__chain__)}function iS(){this.__values__===o&&(this.__values__=ep(this.value()));var r=this.__index__>=this.__values__.length;return{done:r,value:r?o:this.__values__[this.__index__++]}}function aS(){return this}function sS(r){for(var i,u=this;u instanceof Os;){var g=R2(u);g.__index__=0,g.__values__=o,i?E.__wrapped__=g:i=g;var E=g;u=u.__wrapped__}return E.__wrapped__=r,i}function lS(){var r=this.__wrapped__;if(r instanceof Ke){var i=r;return this.__actions__.length&&(i=new Ke(this)),i=i.reverse(),i.__actions__.push({func:Vs,args:[$u],thisArg:o}),new zr(i,this.__chain__)}return this.thru($u)}function cS(){return r2(this.__wrapped__,this.__actions__)}var uS=zs(function(r,i,u){nt.call(r,u)?++r[u]:rn(r,u,1)});function dS(r,i,u){var g=Ge(r)?mf:tk;return u&&Jt(r,i,u)&&(i=o),g(r,Le(i,3))}function hS(r,i){return(Ge(r)?Hn:Bf)(r,Le(i,3))}var fS=f2(P2),pS=f2($2);function mS(r,i){return Wt(qs(r,i),1)}function gS(r,i){return Wt(qs(r,i),se)}function vS(r,i,u){return u=u===o?1:Ue(u),Wt(qs(r,i),u)}function F2(r,i){return(Ge(r)?Er:Vn)(r,Le(i,3))}function G2(r,i){return(Ge(r)?z_:Nf)(r,Le(i,3))}var bS=zs(function(r,i,u){nt.call(r,u)?r[u].push(i):rn(r,u,[i])});function wS(r,i,u,g){r=sr(r)?r:di(r),u=u&&!g?Ue(u):0;var E=r.length;return u<0&&(u=$t(E+u,0)),Xs(r)?u<=E&&r.indexOf(i,u)>-1:!!E&&ei(r,i,u)>-1}var _S=qe(function(r,i,u){var g=-1,E=typeof i=="function",I=sr(r)?j(r.length):[];return Vn(r,function(R){I[++g]=E?kr(i,R,u):ra(R,i,u)}),I}),yS=zs(function(r,i,u){rn(r,u,i)});function qs(r,i){return(Ge(r)?bt:Vf)(r,Le(i,3))}function kS(r,i,u,g){return r==null?[]:(Ge(i)||(i=i==null?[]:[i]),u=g?o:u,Ge(u)||(u=u==null?[]:[u]),Kf(r,i,u))}var ES=zs(function(r,i,u){r[u?0:1].push(i)},function(){return[[],[]]});function SS(r,i,u){var g=Ge(r)?jc:wf,E=arguments.length<3;return g(r,Le(i,4),u,E,Vn)}function AS(r,i,u){var g=Ge(r)?N_:wf,E=arguments.length<3;return g(r,Le(i,4),u,E,Nf)}function MS(r,i){return(Ge(r)?Hn:Bf)(r,Ks(Le(i,3)))}function xS(r){return(Ge(r)?Pf:wk)(r)}function IS(r,i,u){return(u?Jt(r,i,u):i===o)?i=1:i=Ue(i),(Ge(r)?Yy:_k)(r,i)}function CS(r){return(Ge(r)?Xy:kk)(r)}function OS(r){if(r==null)return 0;if(sr(r))return Xs(r)?ri(r):r.length;var i=Zt(r);return i==V||i==de?r.size:fu(r).length}function TS(r,i,u){var g=Ge(r)?Kc:Ek;return u&&Jt(r,i,u)&&(i=o),g(r,Le(i,3))}var LS=qe(function(r,i){if(r==null)return[];var u=i.length;return u>1&&Jt(r,i[0],i[1])?i=[]:u>2&&Jt(i[0],i[1],i[2])&&(i=[i[0]]),Kf(r,Wt(i,1),[])}),Zs=hy||function(){return Nt.Date.now()};function RS(r,i){if(typeof i!="function")throw new Dr(l);return r=Ue(r),function(){if(--r<1)return i.apply(this,arguments)}}function W2(r,i,u){return i=u?o:i,i=r&&i==null?r.length:i,wn(r,H,o,o,o,o,i)}function U2(r,i){var u;if(typeof i!="function")throw new Dr(l);return r=Ue(r),function(){return--r>0&&(u=i.apply(this,arguments)),r<=1&&(i=o),u}}var zu=qe(function(r,i,u){var g=M;if(u.length){var E=Gn(u,ci(zu));g|=U}return wn(r,g,i,u,E)}),V2=qe(function(r,i,u){var g=M|C;if(u.length){var E=Gn(u,ci(V2));g|=U}return wn(i,g,r,u,E)});function q2(r,i,u){i=u?o:i;var g=wn(r,D,o,o,o,o,o,i);return g.placeholder=q2.placeholder,g}function Z2(r,i,u){i=u?o:i;var g=wn(r,Y,o,o,o,o,o,i);return g.placeholder=Z2.placeholder,g}function j2(r,i,u){var g,E,I,R,$,F,ie=0,te=!1,ce=!1,we=!0;if(typeof r!="function")throw new Dr(l);i=Fr(i)||0,yt(u)&&(te=!!u.leading,ce="maxWait"in u,I=ce?$t(Fr(u.maxWait)||0,i):I,we="trailing"in u?!!u.trailing:we);function Se(xt){var Yr=g,Sn=E;return g=E=o,ie=xt,R=r.apply(Sn,Yr),R}function Oe(xt){return ie=xt,$=sa(lt,i),te?Se(xt):R}function Be(xt){var Yr=xt-F,Sn=xt-ie,pp=i-Yr;return ce?qt(pp,I-Sn):pp}function Te(xt){var Yr=xt-F,Sn=xt-ie;return F===o||Yr>=i||Yr<0||ce&&Sn>=I}function lt(){var xt=Zs();if(Te(xt))return Ye(xt);$=sa(lt,Be(xt))}function Ye(xt){return $=o,we&&g?Se(xt):(g=E=o,R)}function Qt(){$!==o&&o2($),ie=0,g=F=E=$=o}function an(){return $===o?R:Ye(Zs())}function Yn(){var xt=Zs(),Yr=Te(xt);if(g=arguments,E=this,F=xt,Yr){if($===o)return Oe(F);if(ce)return o2($),$=sa(lt,i),Se(F)}return $===o&&($=sa(lt,i)),R}return Yn.cancel=Qt,Yn.flush=an,Yn}var PS=qe(function(r,i){return zf(r,1,i)}),$S=qe(function(r,i,u){return zf(r,Fr(i)||0,u)});function DS(r){return wn(r,ve)}function js(r,i){if(typeof r!="function"||i!=null&&typeof i!="function")throw new Dr(l);var u=function(){var g=arguments,E=i?i.apply(this,g):g[0],I=u.cache;if(I.has(E))return I.get(E);var R=r.apply(this,g);return u.cache=I.set(E,R)||I,R};return u.cache=new(js.Cache||bn),u}js.Cache=bn;function Ks(r){if(typeof r!="function")throw new Dr(l);return function(){var i=arguments;switch(i.length){case 0:return!r.call(this);case 1:return!r.call(this,i[0]);case 2:return!r.call(this,i[0],i[1]);case 3:return!r.call(this,i[0],i[1],i[2])}return!r.apply(this,i)}}function zS(r){return U2(2,r)}var NS=Sk(function(r,i){i=i.length==1&&Ge(i[0])?bt(i[0],Sr(Le())):bt(Wt(i,1),Sr(Le()));var u=i.length;return qe(function(g){for(var E=-1,I=qt(g.length,u);++E<I;)g[E]=i[E].call(this,g[E]);return kr(r,this,g)})}),Nu=qe(function(r,i){return wn(r,U,o,i,Gn(i,ci(Nu)))}),K2=qe(function(r,i){return wn(r,oe,o,i,Gn(i,ci(K2)))}),BS=_n(function(r,i){return wn(r,me,o,o,o,i)});function HS(r,i){if(typeof r!="function")throw new Dr(l);return i=i===o?i:Ue(i),qe(r,i)}function FS(r,i){if(typeof r!="function")throw new Dr(l);return i=i==null?0:$t(Ue(i),0),qe(function(u){var g=u[i],E=jn(u,0,i);return g&&Fn(E,g),kr(r,this,E)})}function GS(r,i,u){var g=!0,E=!0;if(typeof r!="function")throw new Dr(l);return yt(u)&&(g="leading"in u?!!u.leading:g,E="trailing"in u?!!u.trailing:E),j2(r,i,{leading:g,maxWait:i,trailing:E})}function WS(r){return W2(r,1)}function US(r,i){return Nu(ku(i),r)}function VS(){if(!arguments.length)return[];var r=arguments[0];return Ge(r)?r:[r]}function qS(r){return Nr(r,w)}function ZS(r,i){return i=typeof i=="function"?i:o,Nr(r,w,i)}function jS(r){return Nr(r,5)}function KS(r,i){return i=typeof i=="function"?i:o,Nr(r,5,i)}function YS(r,i){return i==null||Df(r,i,Bt(i))}function Kr(r,i){return r===i||r!==r&&i!==i}var XS=Fs(uu),JS=Fs(function(r,i){return r>=i}),Eo=Gf((function(){return arguments})())?Gf:function(r){return kt(r)&&nt.call(r,"callee")&&!If.call(r,"callee")},Ge=j.isArray,QS=cf?Sr(cf):sk;function sr(r){return r!=null&&Ys(r.length)&&!kn(r)}function Mt(r){return kt(r)&&sr(r)}function eA(r){return r===!0||r===!1||kt(r)&&Xt(r)==vt}var Kn=py||Yu,tA=uf?Sr(uf):lk;function rA(r){return kt(r)&&r.nodeType===1&&!la(r)}function nA(r){if(r==null)return!0;if(sr(r)&&(Ge(r)||typeof r=="string"||typeof r.splice=="function"||Kn(r)||ui(r)||Eo(r)))return!r.length;var i=Zt(r);if(i==V||i==de)return!r.size;if(aa(r))return!fu(r).length;for(var u in r)if(nt.call(r,u))return!1;return!0}function oA(r,i){return na(r,i)}function iA(r,i,u){u=typeof u=="function"?u:o;var g=u?u(r,i):o;return g===o?na(r,i,o,u):!!g}function Bu(r){if(!kt(r))return!1;var i=Xt(r);return i==Vt||i==Rr||typeof r.message=="string"&&typeof r.name=="string"&&!la(r)}function aA(r){return typeof r=="number"&&Of(r)}function kn(r){if(!yt(r))return!1;var i=Xt(r);return i==k||i==re||i==Ze||i==le}function Y2(r){return typeof r=="number"&&r==Ue(r)}function Ys(r){return typeof r=="number"&&r>-1&&r%1==0&&r<=Ae}function yt(r){var i=typeof r;return r!=null&&(i=="object"||i=="function")}function kt(r){return r!=null&&typeof r=="object"}var X2=df?Sr(df):uk;function sA(r,i){return r===i||hu(r,i,Cu(i))}function lA(r,i,u){return u=typeof u=="function"?u:o,hu(r,i,Cu(i),u)}function cA(r){return J2(r)&&r!=+r}function uA(r){if(Zk(r))throw new Ne(c);return Wf(r)}function dA(r){return r===null}function hA(r){return r==null}function J2(r){return typeof r=="number"||kt(r)&&Xt(r)==T}function la(r){if(!kt(r)||Xt(r)!=N)return!1;var i=Es(r);if(i===null)return!0;var u=nt.call(i,"constructor")&&i.constructor;return typeof u=="function"&&u instanceof u&&ws.call(u)==ly}var Hu=hf?Sr(hf):dk;function fA(r){return Y2(r)&&r>=-Ae&&r<=Ae}var Q2=ff?Sr(ff):hk;function Xs(r){return typeof r=="string"||!Ge(r)&&kt(r)&&Xt(r)==be}function Mr(r){return typeof r=="symbol"||kt(r)&&Xt(r)==he}var ui=pf?Sr(pf):fk;function pA(r){return r===o}function mA(r){return kt(r)&&Zt(r)==Je}function gA(r){return kt(r)&&Xt(r)==je}var vA=Fs(pu),bA=Fs(function(r,i){return r<=i});function ep(r){if(!r)return[];if(sr(r))return Xs(r)?qr(r):ar(r);if(Ki&&r[Ki])return X_(r[Ki]());var i=Zt(r);return(i==V?tu:i==de?gs:di)(r)}function En(r){return r?(r=Fr(r),r===se||r===-1/0?(r<0?-1:1)*q:r===r?r:0):r===0?r:0}function Ue(r){var i=En(r),u=i%1;return i===i?u?i-u:i:0}function tp(r){return r?wo(Ue(r),0,ke):0}function Fr(r){if(typeof r=="number")return r;if(Mr(r))return W;if(yt(r)){var i=typeof r.valueOf=="function"?r.valueOf():r;r=yt(i)?i+"":i}if(typeof r!="string")return r===0?r:+r;r=_f(r);var u=n_.test(r);return u||i_.test(r)?P_(r.slice(2),u?2:8):r_.test(r)?W:+r}function rp(r){return on(r,lr(r))}function wA(r){return r?wo(Ue(r),-Ae,Ae):r===0?r:0}function ot(r){return r==null?"":Ar(r)}var _A=si(function(r,i){if(aa(i)||sr(i)){on(i,Bt(i),r);return}for(var u in i)nt.call(i,u)&&ea(r,u,i[u])}),np=si(function(r,i){on(i,lr(i),r)}),op=si(function(r,i,u,g){on(i,lr(i),r,g)}),Fu=si(function(r,i,u,g){on(i,Bt(i),r,g)}),yA=_n(su);function kA(r,i){var u=ai(r);return i==null?u:$f(u,i)}var EA=qe(function(r,i){r=st(r);var u=-1,g=i.length,E=g>2?i[2]:o;for(E&&Jt(i[0],i[1],E)&&(g=1);++u<g;)for(var I=i[u],R=lr(I),$=-1,F=R.length;++$<F;){var ie=R[$],te=r[ie];(te===o||Kr(te,ni[ie])&&!nt.call(r,ie))&&(r[ie]=I[ie])}return r}),SA=qe(function(r){return r.push(o,_2),kr(ip,o,r)});function AA(r,i){return gf(r,Le(i,3),nn)}function MA(r,i){return gf(r,Le(i,3),cu)}function xA(r,i){return r==null?r:lu(r,Le(i,3),lr)}function IA(r,i){return r==null?r:Hf(r,Le(i,3),lr)}function CA(r,i){return r&&nn(r,Le(i,3))}function OA(r,i){return r&&cu(r,Le(i,3))}function TA(r){return r==null?[]:Rs(r,Bt(r))}function LA(r){return r==null?[]:Rs(r,lr(r))}function Gu(r,i,u){var g=r==null?o:_o(r,i);return g===o?u:g}function RA(r,i){return r!=null&&E2(r,i,nk)}function Wu(r,i){return r!=null&&E2(r,i,ok)}var PA=m2(function(r,i,u){i!=null&&typeof i.toString!="function"&&(i=_s.call(i)),r[i]=u},Vu(cr)),$A=m2(function(r,i,u){i!=null&&typeof i.toString!="function"&&(i=_s.call(i)),nt.call(r,i)?r[i].push(u):r[i]=[u]},Le),DA=qe(ra);function Bt(r){return sr(r)?Rf(r):fu(r)}function lr(r){return sr(r)?Rf(r,!0):pk(r)}function zA(r,i){var u={};return i=Le(i,3),nn(r,function(g,E,I){rn(u,i(g,E,I),g)}),u}function NA(r,i){var u={};return i=Le(i,3),nn(r,function(g,E,I){rn(u,E,i(g,E,I))}),u}var BA=si(function(r,i,u){Ps(r,i,u)}),ip=si(function(r,i,u,g){Ps(r,i,u,g)}),HA=_n(function(r,i){var u={};if(r==null)return u;var g=!1;i=bt(i,function(I){return I=Zn(I,r),g||(g=I.length>1),I}),on(r,xu(r),u),g&&(u=Nr(u,7,$k));for(var E=i.length;E--;)wu(u,i[E]);return u});function FA(r,i){return ap(r,Ks(Le(i)))}var GA=_n(function(r,i){return r==null?{}:gk(r,i)});function ap(r,i){if(r==null)return{};var u=bt(xu(r),function(g){return[g]});return i=Le(i),Yf(r,u,function(g,E){return i(g,E[0])})}function WA(r,i,u){i=Zn(i,r);var g=-1,E=i.length;for(E||(E=1,r=o);++g<E;){var I=r==null?o:r[jr(i[g])];I===o&&(g=E,I=u),r=kn(I)?I.call(r):I}return r}function UA(r,i,u){return r==null?r:oa(r,i,u)}function VA(r,i,u,g){return g=typeof g=="function"?g:o,r==null?r:oa(r,i,u,g)}var sp=b2(Bt),lp=b2(lr);function qA(r,i,u){var g=Ge(r),E=g||Kn(r)||ui(r);if(i=Le(i,4),u==null){var I=r&&r.constructor;E?u=g?new I:[]:yt(r)?u=kn(I)?ai(Es(r)):{}:u={}}return(E?Er:nn)(r,function(R,$,F){return i(u,R,$,F)}),u}function ZA(r,i){return r==null?!0:wu(r,i)}function jA(r,i,u){return r==null?r:t2(r,i,ku(u))}function KA(r,i,u,g){return g=typeof g=="function"?g:o,r==null?r:t2(r,i,ku(u),g)}function di(r){return r==null?[]:eu(r,Bt(r))}function YA(r){return r==null?[]:eu(r,lr(r))}function XA(r,i,u){return u===o&&(u=i,i=o),u!==o&&(u=Fr(u),u=u===u?u:0),i!==o&&(i=Fr(i),i=i===i?i:0),wo(Fr(r),i,u)}function JA(r,i,u){return i=En(i),u===o?(u=i,i=0):u=En(u),r=Fr(r),ik(r,i,u)}function QA(r,i,u){if(u&&typeof u!="boolean"&&Jt(r,i,u)&&(i=u=o),u===o&&(typeof i=="boolean"?(u=i,i=o):typeof r=="boolean"&&(u=r,r=o)),r===o&&i===o?(r=0,i=1):(r=En(r),i===o?(i=r,r=0):i=En(i)),r>i){var g=r;r=i,i=g}if(u||r%1||i%1){var E=Tf();return qt(r+E*(i-r+R_("1e-"+((E+"").length-1))),i)}return gu(r,i)}var eM=li(function(r,i,u){return i=i.toLowerCase(),r+(u?cp(i):i)});function cp(r){return Uu(ot(r).toLowerCase())}function up(r){return r=ot(r),r&&r.replace(s_,q_).replace(E_,"")}function tM(r,i,u){r=ot(r),i=Ar(i);var g=r.length;u=u===o?g:wo(Ue(u),0,g);var E=u;return u-=i.length,u>=0&&r.slice(u,E)==i}function rM(r){return r=ot(r),r&&G8.test(r)?r.replace(N1,Z_):r}function nM(r){return r=ot(r),r&&j8.test(r)?r.replace(Nc,"\\$&"):r}var oM=li(function(r,i,u){return r+(u?"-":"")+i.toLowerCase()}),iM=li(function(r,i,u){return r+(u?" ":"")+i.toLowerCase()}),aM=h2("toLowerCase");function sM(r,i,u){r=ot(r),i=Ue(i);var g=i?ri(r):0;if(!i||g>=i)return r;var E=(i-g)/2;return Hs(xs(E),u)+r+Hs(Ms(E),u)}function lM(r,i,u){r=ot(r),i=Ue(i);var g=i?ri(r):0;return i&&g<i?r+Hs(i-g,u):r}function cM(r,i,u){r=ot(r),i=Ue(i);var g=i?ri(r):0;return i&&g<i?Hs(i-g,u)+r:r}function uM(r,i,u){return u||i==null?i=0:i&&(i=+i),by(ot(r).replace(Bc,""),i||0)}function dM(r,i,u){return(u?Jt(r,i,u):i===o)?i=1:i=Ue(i),vu(ot(r),i)}function hM(){var r=arguments,i=ot(r[0]);return r.length<3?i:i.replace(r[1],r[2])}var fM=li(function(r,i,u){return r+(u?"_":"")+i.toLowerCase()});function pM(r,i,u){return u&&typeof u!="number"&&Jt(r,i,u)&&(i=u=o),u=u===o?ke:u>>>0,u?(r=ot(r),r&&(typeof i=="string"||i!=null&&!Hu(i))&&(i=Ar(i),!i&&ti(r))?jn(qr(r),0,u):r.split(i,u)):[]}var mM=li(function(r,i,u){return r+(u?" ":"")+Uu(i)});function gM(r,i,u){return r=ot(r),u=u==null?0:wo(Ue(u),0,r.length),i=Ar(i),r.slice(u,u+i.length)==i}function vM(r,i,u){var g=x.templateSettings;u&&Jt(r,i,u)&&(i=o),r=ot(r),i=Fu({},i,g,w2);var E=Fu({},i.imports,g.imports,w2),I=Bt(E),R=eu(E,I);Er(I,function(Te){if(H1.test(Te))throw new Ne(h)});var $,F,ie=0,te=i.interpolate||ds,ce="__p += '",we=ru((i.escape||ds).source+"|"+te.source+"|"+(te===B1?t_:ds).source+"|"+(i.evaluate||ds).source+"|$","g"),Se="//# sourceURL="+(nt.call(i,"sourceURL")?(i.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++I_+"]")+`
`;r.replace(we,function(Te,lt,Ye,Qt,an,Yn){return Ye||(Ye=Qt),ce+=r.slice(ie,Yn).replace(l_,j_),lt&&($=!0,ce+=`' +
__e(`+lt+`) +
'`),an&&(F=!0,ce+=`';
`+an+`;
__p += '`),Ye&&(ce+=`' +
((__t = (`+Ye+`)) == null ? '' : __t) +
'`),ie=Yn+Te.length,Te}),ce+=`';
`;var Oe=nt.call(i,"variable")&&i.variable;if(!Oe)ce=`with (obj) {
`+ce+`
}
`;else if(H1.test(Oe))throw new Ne(f);ce=(F?ce.replace(zc,""):ce).replace(us,"$1").replace(fo,"$1;"),ce="function("+(Oe||"obj")+`) {
`+(Oe?"":`obj || (obj = {});
`)+"var __t, __p = ''"+($?", __e = _.escape":"")+(F?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+ce+`return __p
}`;var Be=hp(function(){return tt(I,Se+"return "+ce).apply(o,R)});if(Be.source=ce,Bu(Be))throw Be;return Be}function bM(r){return ot(r).toLowerCase()}function wM(r){return ot(r).toUpperCase()}function _M(r,i,u){if(r=ot(r),r&&(u||i===o))return _f(r);if(!r||!(i=Ar(i)))return r;var g=qr(r),E=qr(i);return jn(g,yf(g,E),kf(g,E)+1).join("")}function yM(r,i,u){if(r=ot(r),r&&(u||i===o))return r.slice(0,Sf(r)+1);if(!r||!(i=Ar(i)))return r;var g=qr(r);return jn(g,0,kf(g,qr(i))+1).join("")}function kM(r,i,u){if(r=ot(r),r&&(u||i===o))return r.replace(Bc,"");if(!r||!(i=Ar(i)))return r;var g=qr(r);return jn(g,yf(g,qr(i))).join("")}function EM(r,i){var u=P,g=J;if(yt(i)){var E="separator"in i?i.separator:E;u="length"in i?Ue(i.length):u,g="omission"in i?Ar(i.omission):g}r=ot(r);var I=r.length;if(ti(r)){var R=qr(r);I=R.length}if(u>=I)return r;var $=u-ri(g);if($<1)return g;var F=R?jn(R,0,$).join(""):r.slice(0,$);if(E===o)return F+g;if(R&&($+=F.length-$),Hu(E)){if(r.slice($).search(E)){var ie,te=F;for(E.global||(E=ru(E.source,ot(F1.exec(E))+"g")),E.lastIndex=0;ie=E.exec(te);)var ce=ie.index;F=F.slice(0,ce===o?$:ce)}}else if(r.indexOf(Ar(E),$)!=$){var we=F.lastIndexOf(E);we>-1&&(F=F.slice(0,we))}return F+g}function SM(r){return r=ot(r),r&&F8.test(r)?r.replace(po,ty):r}var AM=li(function(r,i,u){return r+(u?" ":"")+i.toUpperCase()}),Uu=h2("toUpperCase");function dp(r,i,u){return r=ot(r),i=u?o:i,i===o?Y_(r)?oy(r):F_(r):r.match(i)||[]}var hp=qe(function(r,i){try{return kr(r,o,i)}catch(u){return Bu(u)?u:new Ne(u)}}),MM=_n(function(r,i){return Er(i,function(u){u=jr(u),rn(r,u,zu(r[u],r))}),r});function xM(r){var i=r==null?0:r.length,u=Le();return r=i?bt(r,function(g){if(typeof g[1]!="function")throw new Dr(l);return[u(g[0]),g[1]]}):[],qe(function(g){for(var E=-1;++E<i;){var I=r[E];if(kr(I[0],this,g))return kr(I[1],this,g)}})}function IM(r){return ek(Nr(r,v))}function Vu(r){return function(){return r}}function CM(r,i){return r==null||r!==r?i:r}var OM=p2(),TM=p2(!0);function cr(r){return r}function qu(r){return Uf(typeof r=="function"?r:Nr(r,v))}function LM(r){return qf(Nr(r,v))}function RM(r,i){return Zf(r,Nr(i,v))}var PM=qe(function(r,i){return function(u){return ra(u,r,i)}}),$M=qe(function(r,i){return function(u){return ra(r,u,i)}});function Zu(r,i,u){var g=Bt(i),E=Rs(i,g);u==null&&!(yt(i)&&(E.length||!g.length))&&(u=i,i=r,r=this,E=Rs(i,Bt(i)));var I=!(yt(u)&&"chain"in u)||!!u.chain,R=kn(r);return Er(E,function($){var F=i[$];r[$]=F,R&&(r.prototype[$]=function(){var ie=this.__chain__;if(I||ie){var te=r(this.__wrapped__);return(te.__actions__=ar(this.__actions__)).push({func:F,args:arguments,thisArg:r}),te.__chain__=ie,te}return F.apply(r,Fn([this.value()],arguments))})}),r}function DM(){return Nt._===this&&(Nt._=cy),this}function ju(){}function zM(r){return r=Ue(r),qe(function(i){return jf(i,r)})}var NM=Su(bt),BM=Su(mf),HM=Su(Kc);function fp(r){return Tu(r)?Yc(jr(r)):vk(r)}function FM(r){return function(i){return r==null?o:_o(r,i)}}var GM=g2(),WM=g2(!0);function Ku(){return[]}function Yu(){return!1}function UM(){return{}}function VM(){return""}function qM(){return!0}function ZM(r,i){if(r=Ue(r),r<1||r>Ae)return[];var u=ke,g=qt(r,ke);i=Le(i),r-=ke;for(var E=Qc(g,i);++u<r;)i(u);return E}function jM(r){return Ge(r)?bt(r,jr):Mr(r)?[r]:ar(L2(ot(r)))}function KM(r){var i=++sy;return ot(r)+i}var YM=Bs(function(r,i){return r+i},0),XM=Au("ceil"),JM=Bs(function(r,i){return r/i},1),QM=Au("floor");function ex(r){return r&&r.length?Ls(r,cr,uu):o}function tx(r,i){return r&&r.length?Ls(r,Le(i,2),uu):o}function rx(r){return bf(r,cr)}function nx(r,i){return bf(r,Le(i,2))}function ox(r){return r&&r.length?Ls(r,cr,pu):o}function ix(r,i){return r&&r.length?Ls(r,Le(i,2),pu):o}var ax=Bs(function(r,i){return r*i},1),sx=Au("round"),lx=Bs(function(r,i){return r-i},0);function cx(r){return r&&r.length?Jc(r,cr):0}function ux(r,i){return r&&r.length?Jc(r,Le(i,2)):0}return x.after=RS,x.ary=W2,x.assign=_A,x.assignIn=np,x.assignInWith=op,x.assignWith=Fu,x.at=yA,x.before=U2,x.bind=zu,x.bindAll=MM,x.bindKey=V2,x.castArray=VS,x.chain=H2,x.chunk=eE,x.compact=tE,x.concat=rE,x.cond=xM,x.conforms=IM,x.constant=Vu,x.countBy=uS,x.create=kA,x.curry=q2,x.curryRight=Z2,x.debounce=j2,x.defaults=EA,x.defaultsDeep=SA,x.defer=PS,x.delay=$S,x.difference=nE,x.differenceBy=oE,x.differenceWith=iE,x.drop=aE,x.dropRight=sE,x.dropRightWhile=lE,x.dropWhile=cE,x.fill=uE,x.filter=hS,x.flatMap=mS,x.flatMapDeep=gS,x.flatMapDepth=vS,x.flatten=D2,x.flattenDeep=dE,x.flattenDepth=hE,x.flip=DS,x.flow=OM,x.flowRight=TM,x.fromPairs=fE,x.functions=TA,x.functionsIn=LA,x.groupBy=bS,x.initial=mE,x.intersection=gE,x.intersectionBy=vE,x.intersectionWith=bE,x.invert=PA,x.invertBy=$A,x.invokeMap=_S,x.iteratee=qu,x.keyBy=yS,x.keys=Bt,x.keysIn=lr,x.map=qs,x.mapKeys=zA,x.mapValues=NA,x.matches=LM,x.matchesProperty=RM,x.memoize=js,x.merge=BA,x.mergeWith=ip,x.method=PM,x.methodOf=$M,x.mixin=Zu,x.negate=Ks,x.nthArg=zM,x.omit=HA,x.omitBy=FA,x.once=zS,x.orderBy=kS,x.over=NM,x.overArgs=NS,x.overEvery=BM,x.overSome=HM,x.partial=Nu,x.partialRight=K2,x.partition=ES,x.pick=GA,x.pickBy=ap,x.property=fp,x.propertyOf=FM,x.pull=kE,x.pullAll=N2,x.pullAllBy=EE,x.pullAllWith=SE,x.pullAt=AE,x.range=GM,x.rangeRight=WM,x.rearg=BS,x.reject=MS,x.remove=ME,x.rest=HS,x.reverse=$u,x.sampleSize=IS,x.set=UA,x.setWith=VA,x.shuffle=CS,x.slice=xE,x.sortBy=LS,x.sortedUniq=PE,x.sortedUniqBy=$E,x.split=pM,x.spread=FS,x.tail=DE,x.take=zE,x.takeRight=NE,x.takeRightWhile=BE,x.takeWhile=HE,x.tap=tS,x.throttle=GS,x.thru=Vs,x.toArray=ep,x.toPairs=sp,x.toPairsIn=lp,x.toPath=jM,x.toPlainObject=rp,x.transform=qA,x.unary=WS,x.union=FE,x.unionBy=GE,x.unionWith=WE,x.uniq=UE,x.uniqBy=VE,x.uniqWith=qE,x.unset=ZA,x.unzip=Du,x.unzipWith=B2,x.update=jA,x.updateWith=KA,x.values=di,x.valuesIn=YA,x.without=ZE,x.words=dp,x.wrap=US,x.xor=jE,x.xorBy=KE,x.xorWith=YE,x.zip=XE,x.zipObject=JE,x.zipObjectDeep=QE,x.zipWith=eS,x.entries=sp,x.entriesIn=lp,x.extend=np,x.extendWith=op,Zu(x,x),x.add=YM,x.attempt=hp,x.camelCase=eM,x.capitalize=cp,x.ceil=XM,x.clamp=XA,x.clone=qS,x.cloneDeep=jS,x.cloneDeepWith=KS,x.cloneWith=ZS,x.conformsTo=YS,x.deburr=up,x.defaultTo=CM,x.divide=JM,x.endsWith=tM,x.eq=Kr,x.escape=rM,x.escapeRegExp=nM,x.every=dS,x.find=fS,x.findIndex=P2,x.findKey=AA,x.findLast=pS,x.findLastIndex=$2,x.findLastKey=MA,x.floor=QM,x.forEach=F2,x.forEachRight=G2,x.forIn=xA,x.forInRight=IA,x.forOwn=CA,x.forOwnRight=OA,x.get=Gu,x.gt=XS,x.gte=JS,x.has=RA,x.hasIn=Wu,x.head=z2,x.identity=cr,x.includes=wS,x.indexOf=pE,x.inRange=JA,x.invoke=DA,x.isArguments=Eo,x.isArray=Ge,x.isArrayBuffer=QS,x.isArrayLike=sr,x.isArrayLikeObject=Mt,x.isBoolean=eA,x.isBuffer=Kn,x.isDate=tA,x.isElement=rA,x.isEmpty=nA,x.isEqual=oA,x.isEqualWith=iA,x.isError=Bu,x.isFinite=aA,x.isFunction=kn,x.isInteger=Y2,x.isLength=Ys,x.isMap=X2,x.isMatch=sA,x.isMatchWith=lA,x.isNaN=cA,x.isNative=uA,x.isNil=hA,x.isNull=dA,x.isNumber=J2,x.isObject=yt,x.isObjectLike=kt,x.isPlainObject=la,x.isRegExp=Hu,x.isSafeInteger=fA,x.isSet=Q2,x.isString=Xs,x.isSymbol=Mr,x.isTypedArray=ui,x.isUndefined=pA,x.isWeakMap=mA,x.isWeakSet=gA,x.join=wE,x.kebabCase=oM,x.last=Hr,x.lastIndexOf=_E,x.lowerCase=iM,x.lowerFirst=aM,x.lt=vA,x.lte=bA,x.max=ex,x.maxBy=tx,x.mean=rx,x.meanBy=nx,x.min=ox,x.minBy=ix,x.stubArray=Ku,x.stubFalse=Yu,x.stubObject=UM,x.stubString=VM,x.stubTrue=qM,x.multiply=ax,x.nth=yE,x.noConflict=DM,x.noop=ju,x.now=Zs,x.pad=sM,x.padEnd=lM,x.padStart=cM,x.parseInt=uM,x.random=QA,x.reduce=SS,x.reduceRight=AS,x.repeat=dM,x.replace=hM,x.result=WA,x.round=sx,x.runInContext=B,x.sample=xS,x.size=OS,x.snakeCase=fM,x.some=TS,x.sortedIndex=IE,x.sortedIndexBy=CE,x.sortedIndexOf=OE,x.sortedLastIndex=TE,x.sortedLastIndexBy=LE,x.sortedLastIndexOf=RE,x.startCase=mM,x.startsWith=gM,x.subtract=lx,x.sum=cx,x.sumBy=ux,x.template=vM,x.times=ZM,x.toFinite=En,x.toInteger=Ue,x.toLength=tp,x.toLower=bM,x.toNumber=Fr,x.toSafeInteger=wA,x.toString=ot,x.toUpper=wM,x.trim=_M,x.trimEnd=yM,x.trimStart=kM,x.truncate=EM,x.unescape=SM,x.uniqueId=KM,x.upperCase=AM,x.upperFirst=Uu,x.each=F2,x.eachRight=G2,x.first=z2,Zu(x,(function(){var r={};return nn(x,function(i,u){nt.call(x.prototype,u)||(r[u]=i)}),r})(),{chain:!1}),x.VERSION=a,Er(["bind","bindKey","curry","curryRight","partial","partialRight"],function(r){x[r].placeholder=x}),Er(["drop","take"],function(r,i){Ke.prototype[r]=function(u){u=u===o?1:$t(Ue(u),0);var g=this.__filtered__&&!i?new Ke(this):this.clone();return g.__filtered__?g.__takeCount__=qt(u,g.__takeCount__):g.__views__.push({size:qt(u,ke),type:r+(g.__dir__<0?"Right":"")}),g},Ke.prototype[r+"Right"]=function(u){return this.reverse()[r](u).reverse()}}),Er(["filter","map","takeWhile"],function(r,i){var u=i+1,g=u==Ce||u==ze;Ke.prototype[r]=function(E){var I=this.clone();return I.__iteratees__.push({iteratee:Le(E,3),type:u}),I.__filtered__=I.__filtered__||g,I}}),Er(["head","last"],function(r,i){var u="take"+(i?"Right":"");Ke.prototype[r]=function(){return this[u](1).value()[0]}}),Er(["initial","tail"],function(r,i){var u="drop"+(i?"":"Right");Ke.prototype[r]=function(){return this.__filtered__?new Ke(this):this[u](1)}}),Ke.prototype.compact=function(){return this.filter(cr)},Ke.prototype.find=function(r){return this.filter(r).head()},Ke.prototype.findLast=function(r){return this.reverse().find(r)},Ke.prototype.invokeMap=qe(function(r,i){return typeof r=="function"?new Ke(this):this.map(function(u){return ra(u,r,i)})}),Ke.prototype.reject=function(r){return this.filter(Ks(Le(r)))},Ke.prototype.slice=function(r,i){r=Ue(r);var u=this;return u.__filtered__&&(r>0||i<0)?new Ke(u):(r<0?u=u.takeRight(-r):r&&(u=u.drop(r)),i!==o&&(i=Ue(i),u=i<0?u.dropRight(-i):u.take(i-r)),u)},Ke.prototype.takeRightWhile=function(r){return this.reverse().takeWhile(r).reverse()},Ke.prototype.toArray=function(){return this.take(ke)},nn(Ke.prototype,function(r,i){var u=/^(?:filter|find|map|reject)|While$/.test(i),g=/^(?:head|last)$/.test(i),E=x[g?"take"+(i=="last"?"Right":""):i],I=g||/^find/.test(i);E&&(x.prototype[i]=function(){var R=this.__wrapped__,$=g?[1]:arguments,F=R instanceof Ke,ie=$[0],te=F||Ge(R),ce=function(lt){var Ye=E.apply(x,Fn([lt],$));return g&&we?Ye[0]:Ye};te&&u&&typeof ie=="function"&&ie.length!=1&&(F=te=!1);var we=this.__chain__,Se=!!this.__actions__.length,Oe=I&&!we,Be=F&&!Se;if(!I&&te){R=Be?R:new Ke(this);var Te=r.apply(R,$);return Te.__actions__.push({func:Vs,args:[ce],thisArg:o}),new zr(Te,we)}return Oe&&Be?r.apply(this,$):(Te=this.thru(ce),Oe?g?Te.value()[0]:Te.value():Te)})}),Er(["pop","push","shift","sort","splice","unshift"],function(r){var i=vs[r],u=/^(?:push|sort|unshift)$/.test(r)?"tap":"thru",g=/^(?:pop|shift)$/.test(r);x.prototype[r]=function(){var E=arguments;if(g&&!this.__chain__){var I=this.value();return i.apply(Ge(I)?I:[],E)}return this[u](function(R){return i.apply(Ge(R)?R:[],E)})}}),nn(Ke.prototype,function(r,i){var u=x[i];if(u){var g=u.name+"";nt.call(ii,g)||(ii[g]=[]),ii[g].push({name:i,func:u})}}),ii[Ns(o,C).name]=[{name:"wrapper",func:o}],Ke.prototype.clone=Ay,Ke.prototype.reverse=My,Ke.prototype.value=xy,x.prototype.at=rS,x.prototype.chain=nS,x.prototype.commit=oS,x.prototype.next=iS,x.prototype.plant=sS,x.prototype.reverse=lS,x.prototype.toJSON=x.prototype.valueOf=x.prototype.value=cS,x.prototype.first=x.prototype.head,Ki&&(x.prototype[Ki]=aS),x})();typeof define=="function"&&typeof define.amd=="object"&&define.amd?(Nt._=Wn,define(function(){return Wn})):mo?((mo.exports=Wn)._=Wn,Vc._=Wn):Nt._=Wn}).call(n)})),xe=ua(Rp(),1);function el(e){return xe.default.isEmpty(e)||xe.default.isNil(e)}function Ir(e){return el(e)||e===!1||e===0}function Pp(e,t=document.body){return new Promise(n=>{const o=document.querySelector(e);if(o){n(o);return}const a=new MutationObserver(()=>{const s=document.querySelector(e);s&&(n(s),a.disconnect())});a.observe(t,{childList:!0,subtree:!0,attributes:!0})})}function tl(e,t=250){return new Promise(n=>{const o=setInterval(()=>{e()&&(clearInterval(o),n(!0))},t)})}function $p(e,t,n=document.body){return new Promise(o=>{const a=n.querySelector(e);if(a?.getAttribute(t)){o(a.getAttribute(t)??"");return}const s=new MutationObserver(()=>{const c=n.querySelector(e);c?.getAttribute(t)&&(o(c.getAttribute(t)??""),s.disconnect())});s.observe(n,{childList:!0,subtree:!0,attributes:!0,attributeFilter:[t]})})}function Dp(e,t=document.body){return new Promise(n=>{if(!Ir(unsafeWindow[e])){n(unsafeWindow[e]);return}const o=new MutationObserver(()=>{Ir(unsafeWindow[e])||(n(unsafeWindow[e]),o.disconnect())});o.observe(t,{childList:!0,subtree:!0,attributes:!0})})}async function zp(e,t=5e3){const n=new Promise((o,a)=>{setTimeout(()=>a(new Error(`Timeout after ${t} ms`)),t)});return Promise.race([e,n])}async function hi(e,t,n,o){if(e!==void 0){Ee(n);const a=await t(e);Ee(o,a)}}async function Np(e){await hi(e.waitAttr,t=>$p(t?.[0],t?.[1]),`Waiting for Attribute ${e.waitAttr?.[1]} of ${e.waitAttr?.[0]}`,`Found Attribute ${e.waitAttr?.[1]} of ${e.waitAttr?.[0]} =`),await hi(e.waitEle,Pp,`Waiting for Element ${e.waitEle}`,"Found Element"),await hi(e.waitVar,Dp,`Waiting for Variable ${e.waitVar}`,"Found Variable"),await hi(e.waitFunc,tl,`Waiting to pass Function check ${e.waitFunc}`,"Found Function check"),await hi(e.waitTime,t=>new Promise(n=>setTimeout(n,t)),`Waiting for ${e.waitTime} milliseconds`,"Continuing after timer")}var er=[],fi=0,Xn=null,rl=4,ha=globalThis.nanostoresGlobal||={epoch:0},Bp=()=>{let e,t;for(;fi<er.length;){t=fi,fi+=rl;let n=Xn?.get(er[t]);if(n){if(!n.has(er[t+1]))continue;n.clear()}try{er[t](er[t+1].value,er[t+2],er[t+3])}catch(o){e=o}}if(er.length=fi=0,e)throw e},od=e=>{let t=[],n={eq:Object.is,get(){return n.lc||n.listen(()=>{})(),n.value},init:e,lc:0,listen(o){return n.lc=t.push(o),()=>{Xn?.get(o)?.delete(n);for(let s=fi;s<er.length;)er[s]===o&&er[s+1]===n?er.splice(s,rl):s+=rl;let a=t.indexOf(o);~a&&(t.splice(a,1),--n.lc||n.off())}},notify(o,a){ha.epoch++;let s=!er.length&&!Xn;for(let c of t){if(Xn){let l=Xn.get(c);if(l||Xn.set(c,l=new Set),l.has(n))continue;l.add(n)}er.push(c,n,o,Xn?void 0:a)}s&&Bp()},off(){},set(o){let a=n.value;n.eq(a,o)||(n.value=o,n.notify(a))},subscribe(o){let a=n.listen(o);return o(n.value),a},value:e};return n},Hp=5,fa=6,pa=10,Fp=(e,t,n,o)=>(e.events=e.events||{},e.events[n+pa]||(e.events[n+pa]=o(a=>{e.events[n].reduceRight((s,c)=>(c(s),s),{shared:{},...a})})),e.events[n]=e.events[n]||[],e.events[n].push(t),()=>{let a=e.events[n],s=a.indexOf(t);~s&&(a.splice(s,1),a.length||(e.events[n+pa](),delete e.events[n+pa]))}),Gp=1e3,Wp=(e,t)=>Fp(e,o=>{let a=t(o);a&&e.events[fa].push(a)},Hp,o=>{let a=e.listen;e.listen=(...c)=>(!e.lc&&!e.active&&(e.active=!0,o()),a(...c));let s=e.off;return e.events[fa]=[],e.off=()=>{s(),setTimeout(()=>{if(e.active&&!e.lc){e.active=!1;for(let c of e.events[fa])c();e.events[fa]=[]}},Gp)},()=>{e.listen=a,e.off=s}}),Up=(e,t,n)=>{Array.isArray(e)||(e=[e]);let o,a,s=()=>{if(a===ha.epoch)return;a=ha.epoch;let p=e.map(m=>m.get());if(!o?.every((m,_)=>e[_].eq(m,p[_]))){o=p;let m=t(...p);m&&m.then&&m.t?m.then(_=>{o===p&&c.set(_)}):(c.set(m),a=ha.epoch)}},c=od(),l=c.get;c.get=()=>(s(),l());let f,h=n?()=>{clearTimeout(f),f=setTimeout(s)}:s;return Wp(c,()=>{let p=e.map(m=>m.listen(h));return s(),()=>{for(let m of p)m()}}),c},Vp=(e,t)=>Up(e,t),id=(e={})=>{let t=od(e);return t.eqKey=Object.is,t.setKey=function(n,o){let a=t.value;typeof o>"u"&&n in t.value?(t.value={...t.value},delete t.value[n],t.notify(a,n)):t.eqKey(t.value[n],o,n)||(t.value={...t.value,[n]:o},t.notify(a,n))},t},nl=globalThis,ad=e=>e,ma=nl.trustedTypes,sd=ma?ma.createPolicy("lit-html",{createHTML:e=>e}):void 0,ol="$lit$",ln=`lit$${Math.random().toFixed(9).slice(2)}$`,il="?"+ln,qp=`<${il}>`,Jn=document,pi=()=>Jn.createComment(""),mi=e=>e===null||typeof e!="object"&&typeof e!="function",al=Array.isArray,ld=e=>al(e)||typeof e?.[Symbol.iterator]=="function",sl=`[ 	
\f\r]`,gi=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,cd=/-->/g,ud=/>/g,Qn=RegExp(`>|${sl}(?:([^\\s"'>=/]+)(${sl}*=${sl}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),dd=/'/g,hd=/"/g,fd=/^(?:script|style|textarea|title)$/i,ll=e=>(t,...n)=>({_$litType$:e,strings:t,values:n}),ne=ll(1),dx=ll(2),hx=ll(3),cn=Symbol.for("lit-noChange"),He=Symbol.for("lit-nothing"),pd=new WeakMap,eo=Jn.createTreeWalker(Jn,129);function md(e,t){if(!al(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return sd!==void 0?sd.createHTML(t):t}var gd=(e,t)=>{const n=e.length-1,o=[];let a,s=t===2?"<svg>":t===3?"<math>":"",c=gi;for(let l=0;l<n;l++){const f=e[l];let h,p,m=-1,_=0;for(;_<f.length&&(c.lastIndex=_,p=c.exec(f),p!==null);)_=c.lastIndex,c===gi?p[1]==="!--"?c=cd:p[1]!==void 0?c=ud:p[2]!==void 0?(fd.test(p[2])&&(a=RegExp("</"+p[2],"g")),c=Qn):p[3]!==void 0&&(c=Qn):c===Qn?p[0]===">"?(c=a??gi,m=-1):p[1]===void 0?m=-2:(m=c.lastIndex-p[2].length,h=p[1],c=p[3]===void 0?Qn:p[3]==='"'?hd:dd):c===hd||c===dd?c=Qn:c===cd||c===ud?c=gi:(c=Qn,a=void 0);const v=c===Qn&&e[l+1].startsWith("/>")?" ":"";s+=c===gi?f+qp:m>=0?(o.push(h),f.slice(0,m)+ol+f.slice(m)+ln+v):f+ln+(m===-2?l:v)}return[md(e,s+(e[n]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),o]},cl=class mp{constructor({strings:t,_$litType$:n},o){let a;this.parts=[];let s=0,c=0;const l=t.length-1,f=this.parts,[h,p]=gd(t,n);if(this.el=mp.createElement(h,o),eo.currentNode=this.el.content,n===2||n===3){const m=this.el.content.firstChild;m.replaceWith(...m.childNodes)}for(;(a=eo.nextNode())!==null&&f.length<l;){if(a.nodeType===1){if(a.hasAttributes())for(const m of a.getAttributeNames())if(m.endsWith(ol)){const _=p[c++],v=a.getAttribute(m).split(ln),y=/([.?@])?(.*)/.exec(_);f.push({type:1,index:s,name:y[2],strings:v,ctor:y[1]==="."?bd:y[1]==="?"?wd:y[1]==="@"?_d:vi}),a.removeAttribute(m)}else m.startsWith(ln)&&(f.push({type:6,index:s}),a.removeAttribute(m));if(fd.test(a.tagName)){const m=a.textContent.split(ln),_=m.length-1;if(_>0){a.textContent=ma?ma.emptyScript:"";for(let v=0;v<_;v++)a.append(m[v],pi()),eo.nextNode(),f.push({type:2,index:++s});a.append(m[_],pi())}}}else if(a.nodeType===8)if(a.data===il)f.push({type:2,index:s});else{let m=-1;for(;(m=a.data.indexOf(ln,m+1))!==-1;)f.push({type:7,index:s}),m+=ln.length-1}s++}}static createElement(t,n){const o=Jn.createElement("template");return o.innerHTML=t,o}};function to(e,t,n=e,o){if(t===cn)return t;let a=o!==void 0?n._$Co?.[o]:n._$Cl;const s=mi(t)?void 0:t._$litDirective$;return a?.constructor!==s&&(a?._$AO?.(!1),s===void 0?a=void 0:(a=new s(e),a._$AT(e,n,o)),o!==void 0?(n._$Co??=[])[o]=a:n._$Cl=a),a!==void 0&&(t=to(e,a._$AS(e,t.values),a,o)),t}var vd=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:n}=this._$AD,o=(e?.creationScope??Jn).importNode(t,!0);eo.currentNode=o;let a=eo.nextNode(),s=0,c=0,l=n[0];for(;l!==void 0;){if(s===l.index){let f;l.type===2?f=new ga(a,a.nextSibling,this,e):l.type===1?f=new l.ctor(a,l.name,l.strings,this,e):l.type===6&&(f=new yd(a,this,e)),this._$AV.push(f),l=n[++c]}s!==l?.index&&(a=eo.nextNode(),s++)}return eo.currentNode=Jn,o}p(e){let t=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(e,n,t),t+=n.strings.length-2):n._$AI(e[t])),t++}},ga=class gp{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,n,o,a){this.type=2,this._$AH=He,this._$AN=void 0,this._$AA=t,this._$AB=n,this._$AM=o,this.options=a,this._$Cv=a?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const n=this._$AM;return n!==void 0&&t?.nodeType===11&&(t=n.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,n=this){t=to(this,t,n),mi(t)?t===He||t==null||t===""?(this._$AH!==He&&this._$AR(),this._$AH=He):t!==this._$AH&&t!==cn&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):ld(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==He&&mi(this._$AH)?this._$AA.nextSibling.data=t:this.T(Jn.createTextNode(t)),this._$AH=t}$(t){const{values:n,_$litType$:o}=t,a=typeof o=="number"?this._$AC(t):(o.el===void 0&&(o.el=cl.createElement(md(o.h,o.h[0]),this.options)),o);if(this._$AH?._$AD===a)this._$AH.p(n);else{const s=new vd(a,this),c=s.u(this.options);s.p(n),this.T(c),this._$AH=s}}_$AC(t){let n=pd.get(t.strings);return n===void 0&&pd.set(t.strings,n=new cl(t)),n}k(t){al(this._$AH)||(this._$AH=[],this._$AR());const n=this._$AH;let o,a=0;for(const s of t)a===n.length?n.push(o=new gp(this.O(pi()),this.O(pi()),this,this.options)):o=n[a],o._$AI(s),a++;a<n.length&&(this._$AR(o&&o._$AB.nextSibling,a),n.length=a)}_$AR(t=this._$AA.nextSibling,n){for(this._$AP?.(!1,!0,n);t!==this._$AB;){const o=ad(t).nextSibling;ad(t).remove(),t=o}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}},vi=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,o,a){this.type=1,this._$AH=He,this._$AN=void 0,this.element=e,this.name=t,this._$AM=o,this.options=a,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=He}_$AI(e,t=this,n,o){const a=this.strings;let s=!1;if(a===void 0)e=to(this,e,t,0),s=!mi(e)||e!==this._$AH&&e!==cn,s&&(this._$AH=e);else{const c=e;let l,f;for(e=a[0],l=0;l<a.length-1;l++)f=to(this,c[n+l],t,l),f===cn&&(f=this._$AH[l]),s||=!mi(f)||f!==this._$AH[l],f===He?e=He:e!==He&&(e+=(f??"")+a[l+1]),this._$AH[l]=f}s&&!o&&this.j(e)}j(e){e===He?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},bd=class extends vi{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===He?void 0:e}},wd=class extends vi{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==He)}},_d=class extends vi{constructor(e,t,n,o,a){super(e,t,n,o,a),this.type=5}_$AI(e,t=this){if((e=to(this,e,t,0)??He)===cn)return;const n=this._$AH,o=e===He&&n!==He||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,a=e!==He&&(n===He||o);o&&this.element.removeEventListener(this.name,this,n),a&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},yd=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){to(this,e)}},Zp={M:ol,P:ln,A:il,C:1,L:gd,R:vd,D:ld,V:to,I:ga,H:vi,N:wd,U:_d,B:bd,F:yd},jp=nl.litHtmlPolyfillSupport;jp?.(cl,ga),(nl.litHtmlVersions??=[]).push("3.3.3");var Kp=(e,t,n)=>{const o=n?.renderBefore??t;let a=o._$litPart$;if(a===void 0){const s=n?.renderBefore??null;o._$litPart$=a=new ga(t.insertBefore(pi(),s),s,void 0,n??{})}return a._$AI(e),a},{I:Yp}=Zp,kd=e=>e,fx=e=>e===null||typeof e!="object"&&typeof e!="function",px={HTML:1,SVG:2,MATHML:3},mx=(e,t)=>t===void 0?e?._$litType$!==void 0:e?._$litType$===t,gx=e=>e?._$litType$?.h!=null,vx=e=>e?._$litDirective$!==void 0,bx=e=>e?._$litDirective$,Xp=e=>e.strings===void 0,Ed=()=>document.createComment(""),wx=(e,t,n)=>{const o=e._$AA.parentNode,a=t===void 0?e._$AB:t._$AA;if(n===void 0){const s=o.insertBefore(Ed(),a),c=o.insertBefore(Ed(),a);n=new Yp(s,c,e,e.options)}else{const s=n._$AB.nextSibling,c=n._$AM,l=c!==e;if(l){let f;n._$AQ?.(e),n._$AM=e,n._$AP!==void 0&&(f=e._$AU)!==c._$AU&&n._$AP(f)}if(s!==a||l){let f=n._$AA;for(;f!==s;){const h=kd(f).nextSibling;kd(o).insertBefore(f,a),f=h}}}return n},_x=(e,t,n=e)=>(e._$AI(t,n),e),Jp={},yx=(e,t=Jp)=>e._$AH=t,kx=e=>e._$AH,Ex=e=>{e._$AR(),e._$AA.remove()},Sx=e=>{e._$AR()},va={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},bi=e=>(...t)=>({_$litDirective$:e,values:t}),ba=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}},wi=(e,t)=>{const n=e._$AN;if(n===void 0)return!1;for(const o of n)o._$AO?.(t,!1),wi(o,t);return!0},wa=e=>{let t,n;do{if((t=e._$AM)===void 0)break;n=t._$AN,n.delete(e),e=t}while(n?.size===0)},Sd=e=>{for(let t;t=e._$AM;e=t){let n=t._$AN;if(n===void 0)t._$AN=n=new Set;else if(n.has(e))break;n.add(e),tm(t)}};function Qp(e){this._$AN!==void 0?(wa(this),this._$AM=e,Sd(this)):this._$AM=e}function em(e,t=!1,n=0){const o=this._$AH,a=this._$AN;if(a!==void 0&&a.size!==0)if(t)if(Array.isArray(o))for(let s=n;s<o.length;s++)wi(o[s],!1),wa(o[s]);else o!=null&&(wi(o,!1),wa(o));else wi(this,e)}var tm=e=>{e.type==va.CHILD&&(e._$AP??=em,e._$AQ??=Qp)},rm=class extends ba{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,n){super._$AT(e,t,n),Sd(this),this.isConnected=e._$AU}_$AO(e,t=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),t&&(wi(this,e),wa(this))}setValue(e){if(Xp(this._$Ct))this._$Ct._$AI(e,this);else{const t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}},ul=()=>new nm,nm=class{},dl=new WeakMap,hl=bi(class extends rm{render(e){return He}update(e,[t]){const n=t!==this.G;return n&&this.rt(void 0),(n||this.lt!==this.ct)&&(this.G=t,this.ht=e.options?.host,this.rt(this.ct=e.element)),He}rt(e){if(this.G!==void 0)if(this.isConnected||(e=void 0),typeof this.G=="function"){const t=this.ht??globalThis;let n=dl.get(t);n===void 0&&(n=new WeakMap,dl.set(t,n)),n.get(this.G)!==void 0&&this.G.call(this.ht,void 0),n.set(this.G,e),e!==void 0&&this.G.call(this.ht,e)}else this.G.value=e}get lt(){return typeof this.G=="function"?dl.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),om={ID:"de_DE",NAME:"Deutsch",STARTING:"Starte Manga OnlineViewer",RESUME:"Fortsetzen ab Seite ",WAITING:"Bitte warten, 3 Sekunden...",CHOOSE_BEGINNING:"Wähle die Startseite:",BUTTON_START:"Manga OnlineViewer starten",SETTINGS:"Einstellungen",LANGUAGE:"Sprache",COLOR_SCHEME:"Farbschema",THEME:"Design",THEME_COLOR:"Farbe",THEME_HUE:"Farbton",THEME_SHADE:"Schattierung",DEFAULT_LOAD_MODE:"Standard-Lademodus",DEVICE_MODE:"Gerätemodus",DEVICE_MODE_AUTO:"Automatisch",DEVICE_MODE_DESKTOP:"Desktop",DEVICE_MODE_TABLET:"Tablet",DEVICE_MODE_MOBILE:"Mobil",LOAD_MODE_NORMAL:"Normal (3 Sek. warten)",LOAD_MODE_ALWAYS:"Immer (sofort)",LOAD_MODE_NEVER:"Nie (manuell)",LOAD_SPEED:"Ladegeschwindigkeit",DEFAULT_ZOOM:"Standard-Zoom (zwischen 5 und 200)",DEFAULT_ZOOM_MODE:"Standard-Zoommodus",MINIMUM_ZOOM:"Minimaler Zoom relativ zur Bildschirmbreite (zwischen 30 und 100)",ZOOM_STEP:"Zoom-Schrittgröße (zwischen 5 und 50)",DEFAULT_VIEW_MODE:"Standard-Ansichtsmodus",VIEW_MODE_VERTICAL:"Vertikal",VIEW_MODE_LEFT:"Horizontal - Links nach Rechts",VIEW_MODE_RIGHT:"Horizontal - Rechts nach Links",VIEW_MODE_WEBCOMIC:"WebComic",VIEW_MODE_BOOK:"Buch - Links nach Rechts",VIEW_MODE_MANGA:"Manga - Rechts nach Links",VIEW_MODE_GALLERY:"Galerie",FIT_WIDTH_OVERSIZED:"Breite anpassen bei Übergröße",SHOW_THUMBNAILS:"Miniaturansichten anzeigen",HIDE_CONTROLS:"Seitensteuerung immer ausblenden",HEADER_TYPE:"Kopfbereichstyp ändern",HEADER_HOVER:"Hover",HEADER_SCROLL:"Scrollen",HEADER_CLICK:"Klicken",HEADER_FIXED:"Fixiert",HEADER_SIMPLE:"Einfach",BUTTON_DOWNLOAD:"Herunterladen",DOWNLOAD_ZIP:"Zip-Datei herunterladen",DOWNLOAD_IMAGES:"Bilder automatisch als Zip herunterladen",DOWNLOAD_PROGRESS:"Herunterladen: ##num## von ##total##",GENERATING_ZIP:"Zip-Datei wird erstellt...",DOWNLOAD_INCOMPLETE:"Download unvollständig",DOWNLOAD_INCOMPLETE_MESSAGE:"Einige Seiten konnten nicht heruntergeladen werden und wurden übersprungen. Eine Liste der fehlgeschlagenen Seiten wurde der ZIP-Datei hinzugefügt.",BUTTON_NEXT:"Weiter",NEXT_CHAPTER:"Nächstes Kapitel",BUTTON_PREVIOUS:"Zurück",PREVIOUS_CHAPTER:"Vorheriges Kapitel",BOOKMARKS:"Lesezeichen",BOOKMARK:"Lesezeichen",BOOKMARK_REMOVED:"Lesezeichen entfernt",BOOKMARK_SAVED:"Lesezeichen gespeichert",BOOKMARK_MESSAGE:"Beim nächsten Öffnen dieses Kapitels wird ab fortgesetzt: Seite ##num## (Nur EINMAL pro Lesezeichen)",KEYBINDINGS:"Tastenkürzel",EDIT_KEYBINDS:"Tastenkürzel bearbeiten",SAVE_KEYBINDS:"Tastenkürzel speichern",BUTTON_EDIT:"Bearbeiten",BUTTON_SAVE:"Speichern",KEYBIND_RULES:`
    <h3>Unterstützte Tasten</h3>
    Erlaubte Modifikatoren: shift, option, alt, ctrl, control, command. <br/>
    Spezielle Tasten: backspace, tab, clear, enter, return, esc, escape, space, up, down, left, right, home, end, pageup, pagedown, del, delete, f1 - f19, num_0 - num_9, num_multiply, num_add, num_enter, num_subtract, num_decimal, num_divide. <br/>
    Beispiele: <kbd>a</kbd>, <kbd>ctrl+a</kbd>, <kbd>shift+a</kbd>, <kbd>num_2</kbd>, <kbd>2</kbd>
  `,ATTENTION:"Achtung",WARNING:"Warnung",BUTTON_RESET_SETTINGS:"Einstellungen zurücksetzen(Reset Settings)",SETTINGS_RESET:"Die Einstellungen wurden zurückgesetzt, bitte Seite neu laden",LANGUAGE_CHANGED:"Die Sprache wurde geändert, bitte Seite neu laden",AUTO_DOWNLOAD:"Beim nächsten Laden eines Kapitels wirst du automatisch gefragt, ob du speichern möchtest",LAZY_LOAD:"Lazy Load ist mit Zip-Download nicht kompatibel, mit dieser Einstellung kannst du nicht herunterladen.<br/> Empfehlung: <span style='color:red;font-weight:bold'>Miniaturansichten deaktivieren</span> um Bandbreite/Speicher zu sparen.",LAZY_LOAD_IMAGES_ENABLE:"Lazy Load Bilder aktivieren",LAZY_LOAD_IMAGES:"Lazy Start ab Seite (zwischen 5 und 100)",RETURN_CHAPTER_LIST:"Zur Kapitelübersicht zurückkehren",PAGES_LOADED:"Seiten geladen",GO_TO_PAGE:"Gehe zu Seite",ENLARGE:"Vergrößern",RESTORE:"Wiederherstellen",REDUCE:"Wiederherstellen",FIT_WIDTH:"Breite anpassen",FIT_HEIGHT:"Höhe anpassen",PERCENT:"Prozent",TOGGLE_CONTROLS:"Seitensteuerung umschalten",ZOOM_IN:"Hineinzoomen",ZOOM_OUT:"Herauszoomen",ZOOM_RESET:"Zoom zurücksetzen",ZOOM_WIDTH:"Auf Breite zoomen",ZOOM_HEIGHT:"Auf Höhe zoomen",HIDE:"Ausblenden",RELOAD:"Neu laden",SLOWLY:"Langsam",NORMAL:"Normal",FAST:"Schnell",EXTREME:"Extrem",ALL_PAGES:"Alle Seiten",SPEED_WARNING:"Ladegeschwindigkeit zu hoch",SPEED_WARNING_MESSAGE:"Diese Geschwindigkeit wird nicht empfohlen.<br/> Sie kann einige Server überlasten oder deine IP als DDoS-Angreifer markieren.<br/> Bitte mit Vorsicht verwenden!",SCROLL_UP:"Nach oben scrollen",SCROLL_DOWN:"Nach unten scrollen",CLOSE:"Schließen",CANCEL:"Abbrechen",LIST_EMPTY:"Liste leer",SCROLL_START:"Auto-Scroll umschalten",INCREASE_SPEED:"Scrollgeschwindigkeit erhöhen",DECREASE_SPEED:"Scrollgeschwindigkeit verringern",AUTO_SCROLL_HEIGHT:"Auto-Scroll-Geschwindigkeit in Pixel",VERTICAL_SEPARATOR:"Vertikale Trenner anzeigen",END:"Ende",SCOPE:"Bereich",GLOBAL:"Global",GENERAL:"Allgemein",LOADING:"Lädt",ZOOM:"Zoom",OTHERS:"Sonstiges",NAVBAR_TYPE:"Navigationsleistentyp ändern",NAVBAR_BOTTOM:"Unten",NAVBAR_LEFT:"Links",NAVBAR_RIGHT:"Rechts",NAVBAR_DISABLED:"Deaktiviert",PAGINATION_TYPE:"Paginierungstyp",PAGINATION_DISABLED:"Deaktiviert",PAGINATION_SLIDER:"Schieberegler",PAGINATION_ARROWS:"Seitenpfeile",PAGINATION_BOTH:"Beides",FILE_MENU:"Hauptmenü",VIEW_MENU:"Menü „Ansicht“",ZOOM_MENU:"Zoom-Menü",DOUBLE_PAGE:"Doppelseite umschalten",CHOOSE_FILE:"Datei auswählen",NO_FILES_SELECTED:"Keine Dateien ausgewählt"},im={ID:"en_US",NAME:"English (US)",STARTING:"Starting Manga OnlineViewer",RESUME:"Resuming reading from Page ",WAITING:"Please wait, 3 seconds...",CHOOSE_BEGINNING:"Choose the Page to start from:",BUTTON_START:"Start Manga OnlineViewer",SETTINGS:"Settings",LANGUAGE:"Language",COLOR_SCHEME:"Color Scheme",THEME:"Theme",THEME_COLOR:"Color",THEME_HUE:"Color Hue",THEME_SHADE:"Color Shade",DEFAULT_LOAD_MODE:"Default Load Mode",DEVICE_MODE:"Device Mode",DEVICE_MODE_AUTO:"Auto",DEVICE_MODE_DESKTOP:"Desktop",DEVICE_MODE_TABLET:"Tablet",DEVICE_MODE_MOBILE:"Mobile",LOAD_MODE_NORMAL:"Normal(Wait 3 sec)",LOAD_MODE_ALWAYS:"Always(Immediately)",LOAD_MODE_NEVER:"Never(Manually)",LOAD_SPEED:"Load Speed",DEFAULT_ZOOM:"Default Zoom (between 5 and 200)",DEFAULT_ZOOM_MODE:"Default Zoom Mode",MINIMUM_ZOOM:"Minimum Zoom relative to the width of screen (between 30 and 100)",ZOOM_STEP:"Zoom Change Step (between 5 and 50)",DEFAULT_VIEW_MODE:"Default View Mode",VIEW_MODE_VERTICAL:"Vertical",VIEW_MODE_LEFT:"Horizontal - Left to Right",VIEW_MODE_RIGHT:"Horizontal - Right to Left",VIEW_MODE_WEBCOMIC:"WebComic",VIEW_MODE_BOOK:"Book - Left to Right",VIEW_MODE_MANGA:"Manga - Right to Left",VIEW_MODE_GALLERY:"Gallery",FIT_WIDTH_OVERSIZED:"Fit Width if Oversized",SHOW_THUMBNAILS:"Show Thumbnails",HIDE_CONTROLS:"Always Hide Page Controls",HEADER_TYPE:"Change Header Type",HEADER_HOVER:"Hover",HEADER_SCROLL:"Scroll",HEADER_CLICK:"Click",HEADER_FIXED:"Fixed",HEADER_SIMPLE:"Simple",BUTTON_DOWNLOAD:"Download",DOWNLOAD_ZIP:"Download Zip file",DOWNLOAD_IMAGES:"Download Images as Zip Automatically",DOWNLOAD_PROGRESS:"Downloading: ##num## of ##total##",GENERATING_ZIP:"Generating Zip file...",DOWNLOAD_INCOMPLETE:"Download Incomplete",DOWNLOAD_INCOMPLETE_MESSAGE:"Some pages failed to download and were skipped. A list of failed pages has been added to the ZIP file.",BUTTON_NEXT:"Next",NEXT_CHAPTER:"Next Chapter",BUTTON_PREVIOUS:"Previous",PREVIOUS_CHAPTER:"Previous Chapter",BOOKMARKS:"Bookmarks",BOOKMARK:"Bookmark",BOOKMARK_REMOVED:"Bookmark Removed",BOOKMARK_SAVED:"Bookmark Saved",BOOKMARK_MESSAGE:"Next time you open this chapter it will resume from: Page ##num## (Only ONCE per Bookmark)",KEYBINDINGS:"Keybindings",EDIT_KEYBINDS:"Edit KeyBindings",SAVE_KEYBINDS:"Save KeyBindings",BUTTON_EDIT:"Edit",BUTTON_SAVE:"Save",KEYBIND_RULES:`
    <h3>Supported Keys</h3>
    Allowed modifiers: shift, option, alt, ctrl, control, command. <br/>
    Special keys: backspace, tab, clear, enter, return, esc, escape, space, up, down, left, right, home, end, pageup, pagedown, del, delete, f1 - f19, num_0 - num_9, num_multiply, num_add, num_enter, num_subtract, num_decimal, num_divide. <br/>
    Examples: <kbd>a</kbd>, <kbd>ctrl+a</kbd> , <kbd>shift+a</kbd> , <kbd>num_2</kbd> , <kbd>2</kbd>
  `,ATTENTION:"Attention",WARNING:"Warning",BUTTON_RESET_SETTINGS:"Reset Settings",SETTINGS_RESET:"Settings have been reset, reload the page to take effect",LANGUAGE_CHANGED:"Language has been changed, reload the page to take effect",AUTO_DOWNLOAD:"Next time a chapter finish loading you will be prompted to save automatically",LAZY_LOAD:"Lazy load is incompatible with zip download, you will not be able to download with this setting ON.<br/> Suggestion: <span style='color:red;font-weight:bold'>Disable Thumbnails</span> to save Bandwidth/Memory.",LAZY_LOAD_IMAGES_ENABLE:"Enable Lazy Load Images",LAZY_LOAD_IMAGES:"Lazy Start From Page (between 5 and 100)",RETURN_CHAPTER_LIST:"Return to Chapter List",PAGES_LOADED:"Pages Loaded",GO_TO_PAGE:"Go to Page",ENLARGE:"Enlarge",RESTORE:"Restore",REDUCE:"Reduce",FIT_WIDTH:"Fit Width",FIT_HEIGHT:"Fit Height",PERCENT:"Percent",TOGGLE_CONTROLS:"Toggle page controls",ZOOM_IN:"Zoom In",ZOOM_OUT:"Zoom Out",ZOOM_RESET:"Zoom Reset",ZOOM_WIDTH:"Zoom to Width",ZOOM_HEIGHT:"Zoom to Height",HIDE:"Hide",RELOAD:"Reload",SLOWLY:"Slowly",NORMAL:"Normal",FAST:"Fast",EXTREME:"Extreme",ALL_PAGES:"All Pages",SPEED_WARNING:"Loading Speed too High",SPEED_WARNING_MESSAGE:"This speed is not recommended.<br/> It may hurt some servers or get your IP marked as DDoS attacker.<br/> Please use with caution!",SCROLL_UP:"Scroll Up",SCROLL_DOWN:"Scroll Down",CLOSE:"Close",CANCEL:"Cancel",LIST_EMPTY:"List Empty",SCROLL_START:"Toggle Auto Scroll",INCREASE_SPEED:"Increase Scroll Speed",DECREASE_SPEED:"Decrease Scroll Speed",AUTO_SCROLL_HEIGHT:"Auto Scroll Speed in Pixels",VERTICAL_SEPARATOR:"Show Vertical Separators",END:"End",SCOPE:"Scope",GLOBAL:"Global",GENERAL:"General",LOADING:"Loading",ZOOM:"Zoom",OTHERS:"Others",NAVBAR_TYPE:"Change Navbar Type",NAVBAR_BOTTOM:"Bottom",NAVBAR_LEFT:"Left",NAVBAR_RIGHT:"Right",NAVBAR_DISABLED:"Disabled",PAGINATION_TYPE:"Pagination Type",PAGINATION_DISABLED:"Disabled",PAGINATION_SLIDER:"Slider",PAGINATION_ARROWS:"Side Arrows",PAGINATION_BOTH:"Both",FILE_MENU:"Main Menu",VIEW_MENU:"View Menu",ZOOM_MENU:"Zoom Menu",DOUBLE_PAGE:"Toggle Double Page",CHOOSE_FILE:"Choose File",NO_FILES_SELECTED:"No files selected"},am={ID:"es_ES",NAME:"Español (ES)",STARTING:"Iniciando Manga OnlineViewer",RESUME:"Continuando lectura desde la Página ",WAITING:"Por favor espere, 3 segundos...",CHOOSE_BEGINNING:"Elija la página en la que comenzar:",BUTTON_START:"Iniciar Manga OnlineViewer",SETTINGS:"Ajustes",LANGUAGE:"Idioma",COLOR_SCHEME:"Esquema de color",THEME:"Tema",THEME_COLOR:"Color",THEME_HUE:"Matiz del color",THEME_SHADE:"Saturación del color",DEFAULT_LOAD_MODE:"Modo de carga por defecto",DEVICE_MODE:"Modo de dispositivo",DEVICE_MODE_AUTO:"Automático",DEVICE_MODE_DESKTOP:"Escritorio",DEVICE_MODE_TABLET:"Tableta",DEVICE_MODE_MOBILE:"Móvil",LOAD_MODE_NORMAL:"Normal (Espera 3s)",LOAD_MODE_ALWAYS:"Siempre (Inmediatamente)",LOAD_MODE_NEVER:"Nunca (Manualmente)",LOAD_SPEED:"Velocidad carga",DEFAULT_ZOOM:"Zoom por defecto (entre 5 y 200)",DEFAULT_ZOOM_MODE:"Modo de zoom por defecto",MINIMUM_ZOOM:"Zoom mínimo relativo al ancho de la pantalla",ZOOM_STEP:"Paso entre cambios de zoom (entre 5 y 50)",DEFAULT_VIEW_MODE:"Modo de visualización por defecto",VIEW_MODE_VERTICAL:"Vertical",VIEW_MODE_LEFT:"Horizontal - Izquierda a derecha",VIEW_MODE_RIGHT:"Horizontal - Derecha a izquierda",VIEW_MODE_WEBCOMIC:"WebComic",VIEW_MODE_BOOK:"Libro - Izquierda a derecha",VIEW_MODE_MANGA:"Manga - Derecha a izquierda",VIEW_MODE_GALLERY:"Galería",FIT_WIDTH_OVERSIZED:"Ajustar ancho si es demasiado grande",SHOW_THUMBNAILS:"Mostrar miniaturas",HIDE_CONTROLS:"Ocultar siempre la barra de controles",HEADER_TYPE:"Cambiar tipo de cabecera",HEADER_HOVER:"Pasar por encima",HEADER_SCROLL:"Desplazamiento",HEADER_CLICK:"Hacer click",HEADER_FIXED:"Fijo",HEADER_SIMPLE:"Sencillo",BUTTON_DOWNLOAD:"Descargar",DOWNLOAD_ZIP:"Descargar fichero Zip",DOWNLOAD_IMAGES:"Autodescargar imágenes como Zip",DOWNLOAD_PROGRESS:"Descargando: ##num## de ##total##",GENERATING_ZIP:"Generando archivo Zip...",DOWNLOAD_INCOMPLETE:"Descarga Incompleta",DOWNLOAD_INCOMPLETE_MESSAGE:"Algunas páginas no se pudieron descargar y se saltaron. Se ha añadido una lista de páginas fallidas al archivo ZIP.",BUTTON_NEXT:"Siguiente",NEXT_CHAPTER:"Siguiente capítulo",BUTTON_PREVIOUS:"Anterior",PREVIOUS_CHAPTER:"Capítulo anterior",BOOKMARKS:"Marcadores",BOOKMARK:"Marcador",BOOKMARK_REMOVED:"Marcador eliminado",BOOKMARK_SAVED:"Marcador guardado",BOOKMARK_MESSAGE:"La próxima vez que abra este capítulo, continuará desde la página ##num## (Sólo UNA VEZ por Marcador)",KEYBINDINGS:"Atajos de teclado",EDIT_KEYBINDS:"Editar atajos",SAVE_KEYBINDS:"Guardar atajos",BUTTON_EDIT:"Editar",BUTTON_SAVE:"Guardar",KEYBIND_RULES:`
    <h3>Teclas soportadas</h3>
    Modificadores permitidos: shift, option, alt, ctrl, control, command. <br/>
    Teclas especiales: backspace, tab, clear, enter, return, esc, escape, space, up, down, left, right, home, end, pageup, pagedown, del, delete, f1 - f19, num_0 - num_9, num_multiply, num_add, num_enter, num_subtract, num_decimal, num_divide. <br/>
    Ejemplos: <kbd>a</kbd>, <kbd>ctrl+a</kbd> , <kbd>shift+a</kbd> , <kbd>num_2</kbd> , <kbd>2</kbd>
  `,ATTENTION:"Atención",WARNING:"Alerta",BUTTON_RESET_SETTINGS:"Reiniciar ajustes(Reset Settings)",SETTINGS_RESET:"Se han restablecido los ajustes, vuelve a cargar la página para que surta efecto",LANGUAGE_CHANGED:"Se ha cambiado el idioma, vuelve a cargar la página para que surta efecto",AUTO_DOWNLOAD:"La próxima vez que termine de cargarse un capítulo, se le pedirá que guarde automáticamente",LAZY_LOAD:"La carga diferida es incompatible con la descarga zip, no podrá descargar con este ajuste activado.<br/> Sugerencia: <span style='color:red;font-weight:bold'>Desactivar miniaturas</span> para ahorrar Ancho de banda/Memoria.",LAZY_LOAD_IMAGES_ENABLE:"Habilitar carga de imágenes diferida",LAZY_LOAD_IMAGES:"Empezar carga diferida a partir de la página (entre 5 y 100)",RETURN_CHAPTER_LIST:"Regresar a la lista de capítulos",PAGES_LOADED:"Páginas cargadas",GO_TO_PAGE:"Ir a página",ENLARGE:"Agrandar",RESTORE:"Restaurar",REDUCE:"Reducir",FIT_WIDTH:"Ajustar al ancho",FIT_HEIGHT:"Ajustar al alto",PERCENT:"Porcentual",TOGGLE_CONTROLS:"Alternar controles de página",ZOOM_IN:"Acercar",ZOOM_OUT:"Alejar",ZOOM_RESET:"Restablecer zoom",ZOOM_WIDTH:"Zoom al ancho",ZOOM_HEIGHT:"Zoom al alto",HIDE:"Ocultar",RELOAD:"Recargar",SLOWLY:"Lento",NORMAL:"Normal",FAST:"Rápido",EXTREME:"Extremo",ALL_PAGES:"Todas las páginas",SPEED_WARNING:"Velocidad de carga muy alta",SPEED_WARNING_MESSAGE:"No se recomienda esta velocidad.<br/> Puede dañar algunos servidores o marcar su IP como atacante DDoS.<br/> ¡Utilícelo con precaución!",SCROLL_UP:"Desplazar arriba",SCROLL_DOWN:"Desplazarse hacia abajo",CLOSE:"Cerrar",CANCEL:"Cancelar",LIST_EMPTY:"Lista vacía",SCROLL_START:"Alternar desplazamiento automático",INCREASE_SPEED:"Aumentar la velocidad de desplazamiento",DECREASE_SPEED:"Disminuir la velocidad de desplazamiento",AUTO_SCROLL_HEIGHT:"Velocidad de desplazamiento automático en píxeles",VERTICAL_SEPARATOR:"Mostrar separadores verticales",END:"Fin",SCOPE:"Alcance",GLOBAL:"Global",GENERAL:"General",LOADING:"Carga",ZOOM:"Zoom",OTHERS:"Otros",NAVBAR_TYPE:"Cambiar el tipo de barra de navegación",NAVBAR_BOTTOM:"Abajo",NAVBAR_LEFT:"Izquierda",NAVBAR_RIGHT:"Derecha",NAVBAR_DISABLED:"Desactivado",PAGINATION_TYPE:"Tipo de paginación",PAGINATION_DISABLED:"Desactivado",PAGINATION_SLIDER:"Control deslizante",PAGINATION_ARROWS:"Flechas laterales",PAGINATION_BOTH:"Ambos",FILE_MENU:"Menú principal",VIEW_MENU:"Ver menú",ZOOM_MENU:"Menú Zoom",DOUBLE_PAGE:"Alternar Página Doble",CHOOSE_FILE:"Elegir archivo",NO_FILES_SELECTED:"No se han seleccionado archivos"},sm={ID:"fr_FR",NAME:"Français (FR)",STARTING:"Démarrage Manga OnlineViewer",RESUME:"Reprise de la lecture à partir de la Page ",WAITING:"Veuillez patienter, 3 secondes...",CHOOSE_BEGINNING:"Choisissez la page par laquelle commencer :",BUTTON_START:"Démarrer Manga OnlineViewer",SETTINGS:"Paramètres",LANGUAGE:"Langue",COLOR_SCHEME:"Palette de couleurs",THEME:"Thème",THEME_COLOR:"Couleur",THEME_HUE:"Teinte de couleur",THEME_SHADE:"Nuance de couleur",DEFAULT_LOAD_MODE:"Mode de chargement par défaut",DEVICE_MODE:"Mode d'appareil",DEVICE_MODE_AUTO:"Automatique",DEVICE_MODE_DESKTOP:"Bureau",DEVICE_MODE_TABLET:"Tablette",DEVICE_MODE_MOBILE:"Mobile",LOAD_MODE_NORMAL:"Normal (attendre 3 s)",LOAD_MODE_ALWAYS:"Toujours (immédiatement)",LOAD_MODE_NEVER:"Jamais (manuellement)",LOAD_SPEED:"Vitesse de chargement",DEFAULT_ZOOM:"Zoom par défaut (entre 5 et 200)",DEFAULT_ZOOM_MODE:"Mode de zoom par défaut",MINIMUM_ZOOM:"Zoom minimum par rapport à la largeur de l'écran (entre 30 et 100)",ZOOM_STEP:"Pas de changement de zoom (entre 5 et 50)",DEFAULT_VIEW_MODE:"Mode d'affichage par défaut",VIEW_MODE_VERTICAL:"Vertical",VIEW_MODE_LEFT:"Horizontal - De gauche à droite",VIEW_MODE_RIGHT:"Horizontal - De droite à gauche",VIEW_MODE_WEBCOMIC:"WebComic",VIEW_MODE_BOOK:"Livre - De gauche à droite",VIEW_MODE_MANGA:"Manga - De droite à gauche",VIEW_MODE_GALLERY:"Galerie",FIT_WIDTH_OVERSIZED:"Ajuster à la largeur si surdimensionné",SHOW_THUMBNAILS:"Afficher les vignettes",HIDE_CONTROLS:"Toujours masquer les contrôles de page",HEADER_TYPE:"Changer le type d'en-tête",HEADER_HOVER:"Survol",HEADER_SCROLL:"Défilement",HEADER_CLICK:"Clic",HEADER_FIXED:"Fixe",HEADER_SIMPLE:"Simple",BUTTON_DOWNLOAD:"Télécharger",DOWNLOAD_ZIP:"Télécharger le fichier Zip",DOWNLOAD_IMAGES:"Télécharger les images en Zip automatiquement",DOWNLOAD_PROGRESS:"Téléchargement : ##num## sur ##total##",GENERATING_ZIP:"Génération du fichier Zip...",DOWNLOAD_INCOMPLETE:"Téléchargement incomplet",DOWNLOAD_INCOMPLETE_MESSAGE:"Certaines pages n'ont pas pu être téléchargées et ont été ignorées. Une liste des pages concernées a été ajoutée au fichier ZIP.",BUTTON_NEXT:"Suivant",NEXT_CHAPTER:"Chapitre suivant",BUTTON_PREVIOUS:"Précédent",PREVIOUS_CHAPTER:"Chapitre précédent",BOOKMARKS:"Favoris",BOOKMARK:"Favori",BOOKMARK_REMOVED:"Favori supprimé",BOOKMARK_SAVED:"Favori enregistré",BOOKMARK_MESSAGE:"La prochaine fois que vous ouvrirez ce chapitre, il reprendra à partir de: Page ##num## (Seulement UNE FOIS par favori)",KEYBINDINGS:"Raccourcis clavier",EDIT_KEYBINDS:"Modifier les raccourcis clavier",SAVE_KEYBINDS:"Enregistrer les raccourcis clavier",BUTTON_EDIT:"Modifier",BUTTON_SAVE:"Enregistrer",KEYBIND_RULES:`
    <h3>Touches prises en charge</h3>
    Modificateurs autorisés : shift, option, alt, ctrl, control, command. <br/>
    Touches spéciales : backspace, tab, clear, enter, return, esc, escape, space, up, down, left, right, home, end, pageup, pagedown, del, delete, f1 - f19, num_0 - num_9, num_multiply, num_add, num_enter, num_subtract, num_decimal, num_divide. <br/>
    Exemples : <kbd>a</kbd>, <kbd>ctrl+a</kbd> , <kbd>shift+a</kbd> , <kbd>num_2</kbd> , <kbd>2</kbd>
  `,ATTENTION:"Attention",WARNING:"Avertissement",BUTTON_RESET_SETTINGS:"Réinitialiser les paramètres",SETTINGS_RESET:"Les paramètres ont été réinitialisés, rechargez la page pour prendre effet",LANGUAGE_CHANGED:"La langue a été modifiée, rechargez la page pour prendre effet",AUTO_DOWNLOAD:"La prochaine fois qu'un chapitre finira de se charger, il vous sera proposé de l'enregistrer automatiquement",LAZY_LOAD:"Le chargement paresseux est incompatible avec le téléchargement zip, vous ne pourrez pas télécharger avec ce paramètre activé.<br/> Suggestion : <span style='color:red;font-weight:bold'>Désactivez les vignettes</span> pour économiser de la bande passante/mémoire.",LAZY_LOAD_IMAGES_ENABLE:"Activer le chargement paresseux des images",LAZY_LOAD_IMAGES:"Début du chargement paresseux à partir de la page (entre 5 et 100)",RETURN_CHAPTER_LIST:"Retour à la liste des chapitres",PAGES_LOADED:"Pages chargées",GO_TO_PAGE:"Aller à la page",ENLARGE:"Agrandir",RESTORE:"Restaurer",REDUCE:"Réduire",FIT_WIDTH:"Ajuster à la largeur",FIT_HEIGHT:"Ajuster à la hauteur",PERCENT:"Pourcentage",TOGGLE_CONTROLS:"Basculer les contrôles de page",ZOOM_IN:"Zoom avant",ZOOM_OUT:"Zoom arrière",ZOOM_RESET:"Réinitialiser le zoom",ZOOM_WIDTH:"Zoomer à la largeur",ZOOM_HEIGHT:"Zoomer à la hauteur",HIDE:"Masquer",RELOAD:"Recharger",SLOWLY:"Lentement",NORMAL:"Normal",FAST:"Rapide",EXTREME:"Extrême",ALL_PAGES:"Toutes les pages",SPEED_WARNING:"Vitesse de chargement trop élevée",SPEED_WARNING_MESSAGE:"Cette vitesse n'est pas recommandée.<br/> Elle peut nuire à certains serveurs ou marquer votre IP comme un attaquant DDoS.<br/> Veuillez l'utiliser avec prudence !",SCROLL_UP:"Faire défiler vers le haut",SCROLL_DOWN:"Faire défiler vers le bas",CLOSE:"Fermer",CANCEL:"Annuler",LIST_EMPTY:"Liste vide",SCROLL_START:"Basculer le défilement automatique",INCREASE_SPEED:"Augmenter la vitesse de défilement",DECREASE_SPEED:"Diminuer la vitesse de défilement",AUTO_SCROLL_HEIGHT:"Vitesse de défilement automatique en pixels",VERTICAL_SEPARATOR:"Afficher les séparateurs verticaux",END:"Fin",SCOPE:"Portée",GLOBAL:"Global",GENERAL:"Général",LOADING:"Chargement",ZOOM:"Zoom",OTHERS:"Autres",NAVBAR_TYPE:"Changer le type de barre de navigation",NAVBAR_BOTTOM:"Bas",NAVBAR_LEFT:"Gauche",NAVBAR_RIGHT:"Droite",NAVBAR_DISABLED:"Désactivé",PAGINATION_TYPE:"Type de pagination",PAGINATION_DISABLED:"Désactivé",PAGINATION_SLIDER:"Curseur",PAGINATION_ARROWS:"Flèches latérales",PAGINATION_BOTH:"Les deux",FILE_MENU:"Menu principal",VIEW_MENU:"Menu Affichage",ZOOM_MENU:"Menu Zoom",DOUBLE_PAGE:"Basculer Double Page",CHOOSE_FILE:"Choisir un fichier",NO_FILES_SELECTED:"Aucun fichier sélectionné"},lm={ID:"pt_BR",NAME:"Portugues (Brasil)",STARTING:"Iniciando Manga OnlineViewer",RESUME:"Continuando leitura na Pagina ",WAITING:"Por Favor espere, 3 segundos...",CHOOSE_BEGINNING:"Escolha a pagina de onde começar:",BUTTON_START:"Iniciar Manga OnlineViewer",SETTINGS:"Configurações",LANGUAGE:"Idioma",COLOR_SCHEME:"Esquema de Color",THEME:"Tema",THEME_COLOR:"Cor",THEME_HUE:"Tom da Cor",THEME_SHADE:"Saturação da Cor",DEFAULT_LOAD_MODE:"Forma de Carregamento Padrão",DEVICE_MODE:"Modo de Dispositivo",DEVICE_MODE_AUTO:"Automático",DEVICE_MODE_DESKTOP:"Desktop",DEVICE_MODE_TABLET:"Tablet",DEVICE_MODE_MOBILE:"Celular",LOAD_MODE_NORMAL:"Normal(Esperando 3 sec)",LOAD_MODE_ALWAYS:"Sempre(Imediatamente)",LOAD_MODE_NEVER:"Nunca(Manualmente)",LOAD_SPEED:"Velocidade de Carregamento",DEFAULT_ZOOM:"Zoom padrão (entre 5 e 200)",DEFAULT_ZOOM_MODE:"Modo de Zoom padrão",MINIMUM_ZOOM:"Zoom minimo, relativo ao tamanho da tela (entre 30 e 100)",ZOOM_STEP:"Precisão da Mudança do Zoom (entre 5 e 50)",DEFAULT_VIEW_MODE:"Modo de Visualização Padrão",VIEW_MODE_VERTICAL:"Vertical",VIEW_MODE_LEFT:"Horizontal - Esquerda para Direita",VIEW_MODE_RIGHT:"Horizontal - Direita para Esquerda",VIEW_MODE_WEBCOMIC:"WebComic",VIEW_MODE_BOOK:"Livro - Esquerda para Direita",VIEW_MODE_MANGA:"Mangá - Direita para Esquerda",VIEW_MODE_GALLERY:"Galeria",FIT_WIDTH_OVERSIZED:"Encher a tela se grande demais",SHOW_THUMBNAILS:"Mostra Miniaturas",HIDE_CONTROLS:"Sempre esconder controles das paginas",HEADER_TYPE:"Mudar Tipo de Cabeçalho",HEADER_HOVER:"Passar por perto",HEADER_SCROLL:"Rolagem do Mouse",HEADER_CLICK:"Click",HEADER_FIXED:"Fixo",HEADER_SIMPLE:"Simples",BUTTON_DOWNLOAD:"Download",DOWNLOAD_ZIP:"Baixar arquivo Zip",DOWNLOAD_IMAGES:"Download das Imagens como Zip Automaticamente",DOWNLOAD_PROGRESS:"Baixando: ##num## de ##total##",GENERATING_ZIP:"Gerando arquivo Zip...",DOWNLOAD_INCOMPLETE:"Download Incompleto",DOWNLOAD_INCOMPLETE_MESSAGE:"Algumas páginas falharam ao baixar e foram puladas. Uma lista de páginas que falharam foi adicionada ao arquivo ZIP.",BUTTON_NEXT:"Proximo",NEXT_CHAPTER:"Proximo Capitulo",BUTTON_PREVIOUS:"Anterior",PREVIOUS_CHAPTER:"Capitulo Anterior",BOOKMARKS:"Marca paginas",BOOKMARK:"Marcar pagina",BOOKMARK_REMOVED:"Marca pagina Removido",BOOKMARK_SAVED:"Marca pagina Salvo",BOOKMARK_MESSAGE:"Proxima vez que abrir este capitulo continuará a partir da Pagina ##num## (Apenas UMA VEZ por marca pagina)",KEYBINDINGS:"Atalhos",EDIT_KEYBINDS:"Editar Atalhos",SAVE_KEYBINDS:"Salvar Atalhos",BUTTON_EDIT:"Editar",BUTTON_SAVE:"Salvar",KEYBIND_RULES:`
    <h3>Teclas Suportadas</h3>
    Modificadores permitidos: shift, option, alt, ctrl, control, command. <br/>
    Teclas Especiais: backspace, tab, clear, enter, return, esc, escape, space, up, down, left, right, home, end, pageup, pagedown, del, delete, f1 - f19, num_0 - num_9, num_multiply, num_add, num_enter, num_subtract, num_decimal, num_divide.<br/>
    Exemplos: <kbd>a</kbd>, <kbd>ctrl+a</kbd> , <kbd>shift+a</kbd> , <kbd>num_2</kbd> , <kbd>2</kbd>
  `,ATTENTION:"Atenção",WARNING:"Alerta",BUTTON_RESET_SETTINGS:"Limpar Configurações(Reset Settings)",SETTINGS_RESET:"Configurações foram limpas, recarregue o site para efetivar a alteração",LANGUAGE_CHANGED:"Idioma foi alterado, recarregue o site para efetivar a alteração",AUTO_DOWNLOAD:"Proxima vez que abrir um capitulo download iniciara automaticamente",LAZY_LOAD:"Carregamento preguiçoso não é compativel com download de zip, não conseguira com essa configuração ativa.<br/> Sugestão: <span style='color:red;font-weight:bold'>Desative Miniaturas</span> para economizar memoria e cota de internet.",LAZY_LOAD_IMAGES_ENABLE:"Ativar Carregamento de imagens preguiçoso",LAZY_LOAD_IMAGES:"Carregamento de paginas preguiçoso começa a partir de (entre 5 e 100)",RETURN_CHAPTER_LIST:"Voltar a lista de Capitulos",PAGES_LOADED:"Paginas Carregadas",GO_TO_PAGE:"Pular para",ENLARGE:"Aumentar",RESTORE:"Restaurar",REDUCE:"Diminuir",FIT_WIDTH:"Preencher Largura",FIT_HEIGHT:"Preencher Altura ",PERCENT:"Percentual",TOGGLE_CONTROLS:"Mostar controles de pagina",ZOOM_IN:"Mais Zoom",ZOOM_OUT:"Menos Zoom",ZOOM_RESET:"Resetar Zoom",ZOOM_WIDTH:"Zoom para Largura",ZOOM_HEIGHT:"Zoom para Altura",HIDE:"Esconder",RELOAD:"Recarregar",SLOWLY:"Devagar",NORMAL:"Normal",FAST:"Rapido",EXTREME:"Extremo",ALL_PAGES:"Todas as Paginas",SPEED_WARNING:"Velocidade de Carregamento muito alta",SPEED_WARNING_MESSAGE:"Essa velocidade não é recomendada.<br/> Ela pode derrubar um servidor or marcar voce como um ataque hacker de DDoS.<br/> Use com cuidado!",SCROLL_UP:"Subir Pagina",SCROLL_DOWN:"Descer Pagina",CLOSE:"Fechar",CANCEL:"Cancelar",LIST_EMPTY:"Lista Vazia",SCROLL_START:"Ativar Rolagem Automatica",INCREASE_SPEED:"Aumentar Valocidade da Rolagem",DECREASE_SPEED:"Diminuir Valocidade da Rolagem",AUTO_SCROLL_HEIGHT:"Velocidade da Rolagem Automatica em Pixels",VERTICAL_SEPARATOR:"Mostrar Separadores Verticais",END:"Fin",SCOPE:"Escopo",GLOBAL:"Global",GENERAL:"Geral",LOADING:"Carregamento",ZOOM:"Zoom",OTHERS:"Outros",NAVBAR_TYPE:"Mudar barra de navegação",NAVBAR_BOTTOM:"Embaixo",NAVBAR_LEFT:"Esquerda",NAVBAR_RIGHT:"Direita",NAVBAR_DISABLED:"Desativado",PAGINATION_TYPE:"Tipo de Paginação",PAGINATION_DISABLED:"Desativado",PAGINATION_SLIDER:"Controle deslizante",PAGINATION_ARROWS:"Setas Laterais",PAGINATION_BOTH:"Ambos",FILE_MENU:"Menu Principal",VIEW_MENU:"Menu de Visualizações",ZOOM_MENU:"Menu de Zoom",DOUBLE_PAGE:"Alternar Página Dupla",CHOOSE_FILE:"Escolher arquivo",NO_FILES_SELECTED:"Nenhum arquivo selecionado"},cm={ID:"zh_CN",NAME:"中文 (简体)",STARTING:"正在启动 Manga OnlineViewer",RESUME:"从页面继续阅读 ",WAITING:"请等待3秒钟...",CHOOSE_BEGINNING:"选择要开始的页数:",BUTTON_START:"启动Manga OnlineViewer",SETTINGS:"设置",LANGUAGE:"语言",COLOR_SCHEME:"配色方案",THEME:"主题",THEME_COLOR:"颜色",THEME_HUE:"色相",THEME_SHADE:"色度",DEFAULT_LOAD_MODE:"默认加载模式",DEVICE_MODE:"设备模式",DEVICE_MODE_AUTO:"自动",DEVICE_MODE_DESKTOP:"桌面",DEVICE_MODE_TABLET:"平板",DEVICE_MODE_MOBILE:"手机",LOAD_MODE_NORMAL:"等待模式(等待3秒自动加载 )",LOAD_MODE_ALWAYS:"自动模式(无需等待)",LOAD_MODE_NEVER:"手动模式(点击启动)",LOAD_SPEED:"加载速度",DEFAULT_ZOOM:"默认缩放 (最小 5 最大 200)",DEFAULT_ZOOM_MODE:"默认缩放模式",MINIMUM_ZOOM:"相对于屏幕宽度的最小缩放 (最小 30 最大 100)",ZOOM_STEP:"缩放级别 (最小 5 最大 50)",DEFAULT_VIEW_MODE:"默认视图模式",VIEW_MODE_VERTICAL:"垂直有缝",VIEW_MODE_LEFT:"横向 - 从左到右",VIEW_MODE_RIGHT:"横向 - 从右到左",VIEW_MODE_WEBCOMIC:"垂直无缝",VIEW_MODE_BOOK:"书籍 - 从左到右",VIEW_MODE_MANGA:"漫画 - 从右到左",VIEW_MODE_GALLERY:"图库",FIT_WIDTH_OVERSIZED:"如果尺寸过大、则适合宽度",SHOW_THUMBNAILS:"显示缩略图",HIDE_CONTROLS:"始终隐藏页面控件",HEADER_TYPE:"更改标题显示方式",HEADER_HOVER:"悬停",HEADER_SCROLL:"滚动",HEADER_CLICK:"点击",HEADER_FIXED:"固定",HEADER_SIMPLE:"简单",BUTTON_DOWNLOAD:"下载",DOWNLOAD_ZIP:"下载压缩文件",DOWNLOAD_IMAGES:"自动将图片下载成ZIP",DOWNLOAD_PROGRESS:"正在下载：第 ##num## 页，共 ##total## 页",GENERATING_ZIP:"正在生成 Zip 文件...",DOWNLOAD_INCOMPLETE:"下载不完整",DOWNLOAD_INCOMPLETE_MESSAGE:"部分页面下载失败并已跳过。失败页面列表已添加到 ZIP 文件中。",BUTTON_NEXT:"下一页",NEXT_CHAPTER:"下一章",BUTTON_PREVIOUS:"上一页",PREVIOUS_CHAPTER:"上一章",BOOKMARKS:"书签",BOOKMARK:"Bookmark",BOOKMARK_REMOVED:"删除书签",BOOKMARK_SAVED:"保存书签",BOOKMARK_MESSAGE:"下次打开本章时，将从: 页码 ##num## (仅一次 每个书签)",KEYBINDINGS:"快捷键",EDIT_KEYBINDS:"编辑键绑定",SAVE_KEYBINDS:"保存键绑定",BUTTON_EDIT:"编辑",BUTTON_SAVE:"救",KEYBIND_RULES:`
    <h3>支持的密钥</h3>
    允许的修饰符: shift, option, alt, ctrl, control, command. <br/>
    特殊键: backspace, tab, clear, enter, return, esc, escape, space, up, down, left, right, home, end, pageup, pagedown, del, delete, f1 - f19, num_0 - num_9, num_multiply, num_add, num_enter, num_subtract, num_decimal, num_divide.<br/>
    例子: <kbd>a</kbd>, <kbd>ctrl+a</kbd> , <kbd>shift+a</kbd> , <kbd>num_2</kbd> , <kbd>2</kbd>
  `,ATTENTION:"注意",WARNING:"警告",BUTTON_RESET_SETTINGS:"重置设置(Reset Settings)",SETTINGS_RESET:"设置已重置、重新加载页面才能生效",LANGUAGE_CHANGED:"语言已更改、重新加载页面才能生效",AUTO_DOWNLOAD:"下次章节加载完成时、系统将提示您自动保存",LAZY_LOAD:"延迟加载与zip下载不兼容、您将无法使用此设置下载.<br/> 建议: <span style='color:red;font-weight:bold'>禁用缩略图</span> 以节省流量和内存.",LAZY_LOAD_IMAGES_ENABLE:"启用延迟加载图像",LAZY_LOAD_IMAGES:"惰性加载从页面 (最小 5 最大 100)",RETURN_CHAPTER_LIST:"返回章节列表",PAGES_LOADED:"已加载的页数",GO_TO_PAGE:"转到页数",ENLARGE:"放大",RESTORE:"还原",REDUCE:"缩小",FIT_WIDTH:"适合宽度",FIT_HEIGHT:"适合高度",PERCENT:"百分之",TOGGLE_CONTROLS:"显示隐藏页面控件",ZOOM_IN:"放大",ZOOM_OUT:"缩小",ZOOM_RESET:"还原",ZOOM_WIDTH:"适合宽度",ZOOM_HEIGHT:"适合高度",HIDE:"显示隐藏页面控件",RELOAD:"重新加载",SLOWLY:"慢速",NORMAL:"正常",FAST:"快速",EXTREME:"极端",ALL_PAGES:"所有页面",SPEED_WARNING:"加载速度过高",SPEED_WARNING_MESSAGE:"不建议使用此速度.<br/>它可能会伤害某些服务器或将您的 IP 标记为 DDoS 攻击者.<br/>请谨慎使用!",SCROLL_UP:"向上滚动",SCROLL_DOWN:"向下滚动",CLOSE:"关闭",CANCEL:"取消",LIST_EMPTY:"没有收藏书签",SCROLL_START:"切换自动滚动",INCREASE_SPEED:"增加滚动速度",DECREASE_SPEED:"降低滚动速度",AUTO_SCROLL_HEIGHT:"自动滚动速度（以像素为单位）",VERTICAL_SEPARATOR:"显示垂直分隔符",END:"结尾",SCOPE:"范围",GLOBAL:"全球",GENERAL:"常规",LOADING:"装载",ZOOM:"缩放",OTHERS:"别人",NAVBAR_TYPE:"更改导航栏类型",NAVBAR_BOTTOM:"底部",NAVBAR_LEFT:"左边",NAVBAR_RIGHT:"正确的",NAVBAR_DISABLED:"已禁用",PAGINATION_TYPE:"分页类型",PAGINATION_DISABLED:"已禁用",PAGINATION_SLIDER:"滑块",PAGINATION_ARROWS:"侧边箭头",PAGINATION_BOTH:"两者",FILE_MENU:"主菜单",VIEW_MENU:"查看菜单",ZOOM_MENU:"缩放菜单",DOUBLE_PAGE:"切换双页",CHOOSE_FILE:"选择文件",NO_FILES_SELECTED:"未选择任何文件"},So=[im,am,lm,cm,om,sm];function Ad(e){return"listImages"in e&&!Ir(e.listImages)}function Md(e){return"listPages"in e&&!Ir(e.listPages)}function um(e){return"bruteForce"in e&&!Ir(e.bruteForce)}var Re=(function(e){return e.ENGLISH="English",e.SPANISH="Spanish",e.PORTUGUESE="Portuguese",e.CHINESE="Chinese",e.RAW="Raw",e})({}),$e=(function(e){return e.MANGA="manga",e.COMIC="comic",e.HENTAI="hentai",e})({});function dm(e,t){return t in e}var _a=globalThis,fl=_a.ShadowRoot&&(_a.ShadyCSS===void 0||_a.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,pl=Symbol(),xd=new WeakMap,Id=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==pl)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(fl&&e===void 0){const n=t!==void 0&&t.length===1;n&&(e=xd.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&xd.set(t,e))}return e}toString(){return this.cssText}},Me=e=>new Id(typeof e=="string"?e:e+"",void 0,pl),Et=(e,...t)=>{const n=e.length===1?e[0]:t.reduce((o,a,s)=>o+(c=>{if(c._$cssResult$===!0)return c.cssText;if(typeof c=="number")return c;throw Error("Value passed to 'css' function must be a 'css' function result: "+c+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(a)+e[s+1],e[0]);return new Id(n,e,pl)},hm=(e,t)=>{if(fl)e.adoptedStyleSheets=t.map(n=>n instanceof CSSStyleSheet?n:n.styleSheet);else for(const n of t){const o=document.createElement("style"),a=_a.litNonce;a!==void 0&&o.setAttribute("nonce",a),o.textContent=n.cssText,e.appendChild(o)}},Cd=fl?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let n="";for(const o of t.cssRules)n+=o.cssText;return Me(n)})(e):e,{is:fm,defineProperty:pm,getOwnPropertyDescriptor:mm,getOwnPropertyNames:gm,getOwnPropertySymbols:vm,getPrototypeOf:bm}=Object,ya=globalThis,Od=ya.trustedTypes,wm=Od?Od.emptyScript:"",_m=ya.reactiveElementPolyfillSupport,_i=(e,t)=>e,ka={toAttribute(e,t){switch(t){case Boolean:e=e?wm:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},ml=(e,t)=>!fm(e,t),Td={attribute:!0,type:String,converter:ka,reflect:!1,useDefault:!1,hasChanged:ml};Symbol.metadata??=Symbol("metadata"),ya.litPropertyMetadata??=new WeakMap;var Ao=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=Td){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const n=Symbol(),o=this.getPropertyDescriptor(e,n,t);o!==void 0&&pm(this.prototype,e,o)}}static getPropertyDescriptor(e,t,n){const{get:o,set:a}=mm(this.prototype,e)??{get(){return this[t]},set(s){this[t]=s}};return{get:o,set(s){const c=o?.call(this);a?.call(this,s),this.requestUpdate(e,c,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Td}static _$Ei(){if(this.hasOwnProperty(_i("elementProperties")))return;const e=bm(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(_i("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(_i("properties"))){const t=this.properties,n=[...gm(t),...vm(t)];for(const o of n)this.createProperty(o,t[o])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[n,o]of t)this.elementProperties.set(n,o)}this._$Eh=new Map;for(const[t,n]of this.elementProperties){const o=this._$Eu(t,n);o!==void 0&&this._$Eh.set(o,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const n=new Set(e.flat(1/0).reverse());for(const o of n)t.unshift(Cd(o))}else e!==void 0&&t.push(Cd(e));return t}static _$Eu(e,t){const n=t.attribute;return n===!1?void 0:typeof n=="string"?n:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return hm(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){const n=this.constructor.elementProperties.get(e),o=this.constructor._$Eu(e,n);if(o!==void 0&&n.reflect===!0){const a=(n.converter?.toAttribute!==void 0?n.converter:ka).toAttribute(t,n.type);this._$Em=e,a==null?this.removeAttribute(o):this.setAttribute(o,a),this._$Em=null}}_$AK(e,t){const n=this.constructor,o=n._$Eh.get(e);if(o!==void 0&&this._$Em!==o){const a=n.getPropertyOptions(o),s=typeof a.converter=="function"?{fromAttribute:a.converter}:a.converter?.fromAttribute!==void 0?a.converter:ka;this._$Em=o;const c=s.fromAttribute(t,a.type);this[o]=c??this._$Ej?.get(o)??c,this._$Em=null}}requestUpdate(e,t,n,o=!1,a){if(e!==void 0){const s=this.constructor;if(o===!1&&(a=this[e]),n??=s.getPropertyOptions(e),!((n.hasChanged??ml)(a,t)||n.useDefault&&n.reflect&&a===this._$Ej?.get(e)&&!this.hasAttribute(s._$Eu(e,n))))return;this.C(e,t,n)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:o,wrapped:a},s){n&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,s??t??this[e]),a!==!0||s!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),o===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[o,a]of this._$Ep)this[o]=a;this._$Ep=void 0}const n=this.constructor.elementProperties;if(n.size>0)for(const[o,a]of n){const{wrapped:s}=a,c=this[o];s!==!0||this._$AL.has(o)||c===void 0||this.C(o,void 0,a,c)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(n=>n.hostUpdate?.()),this.update(t)):this._$EM()}catch(n){throw e=!1,this._$EM(),n}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(e){}firstUpdated(e){}};Ao.elementStyles=[],Ao.shadowRootOptions={mode:"open"},Ao[_i("elementProperties")]=new Map,Ao[_i("finalized")]=new Map,_m?.({ReactiveElement:Ao}),(ya.reactiveElementVersions??=[]).push("2.1.2");var gl=globalThis,rt=class extends Ao{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Kp(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return cn}};rt._$litElement$=!0,rt.finalized=!0,gl.litElementHydrateSupport?.({LitElement:rt});var ym=gl.litElementPolyfillSupport;ym?.({LitElement:rt}),(gl.litElementVersions??=[]).push("4.2.2");var ct=e=>(t,n)=>{n!==void 0?n.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)},km={attribute:!0,type:String,converter:ka,reflect:!1,hasChanged:ml},Em=(e=km,t,n)=>{const{kind:o,metadata:a}=n;let s=globalThis.litPropertyMetadata.get(a);if(s===void 0&&globalThis.litPropertyMetadata.set(a,s=new Map),o==="setter"&&((e=Object.create(e)).wrapped=!0),s.set(n.name,e),o==="accessor"){const{name:c}=n;return{set(l){const f=t.get.call(this);t.set.call(this,l),this.requestUpdate(c,f,e,!0,l)},init(l){return l!==void 0&&this.C(c,void 0,e,l),l}}}if(o==="setter"){const{name:c}=n;return function(l){const f=this[c];t.call(this,l),this.requestUpdate(c,f,e,!0,l)}}throw Error("Unsupported decorator location: "+o)};function K(e){return(t,n)=>typeof n=="object"?Em(e,t,n):((o,a,s)=>{const c=a.hasOwnProperty(s);return a.constructor.createProperty(s,o),c?Object.getOwnPropertyDescriptor(a,s):void 0})(e,t,n)}function Ht(e){return K({...e,state:!0,attribute:!1})}var Ld=(e,t,n)=>(n.configurable=!0,n.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(e,t,n),n);function An(e,t){return(n,o,a)=>{const s=c=>c.renderRoot?.querySelector(e)??null;if(t){const{get:c,set:l}=typeof o=="object"?n:a??(()=>{const f=Symbol();return{get(){return this[f]},set(h){this[f]=h}}})();return Ld(n,o,{get(){let f=c.call(this);return f===void 0&&(f=s(this),(f!==null||this.hasUpdated)&&l.call(this,f)),f}})}return Ld(n,o,{get(){return s(this)}})}}var St=bi(class extends ba{constructor(e){if(super(e),e.type!==va.ATTRIBUTE||e.name!=="class"||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(o=>o!=="")));for(const o in t)t[o]&&!this.nt?.has(o)&&this.st.add(o);return this.render(t)}const n=e.element.classList;for(const o of this.st)o in t||(n.remove(o),this.st.delete(o));for(const o in t){const a=!!t[o];a===this.st.has(o)||this.nt?.has(o)||(a?(n.add(o),this.st.add(o)):(n.remove(o),this.st.delete(o)))}return cn}}),Ea=class extends ba{constructor(e){if(super(e),this.it=He,e.type!==va.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===He||e==null)return this._t=void 0,this.it=e;if(e===cn)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;const t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}};Ea.directiveName="unsafeHTML",Ea.resultType=1;var Rd=bi(Ea),vl=class extends Ea{};vl.directiveName="unsafeSVG",vl.resultType=2;var Pd=bi(vl);function $d(e){if(e.startsWith("Icon")&&!e.includes("-")&&!e.includes("_"))return e;const t=e.startsWith("Icon")?e.substring(4):e;return`Icon${xe.default.upperFirst(xe.default.camelCase(t))}`}var Sm=".icon-tabler-file-download>:nth-child(n+4){color:gold}.icon-tabler-arrow-autofit-width>:nth-child(n+3),.icon-tabler-arrow-autofit-height>:nth-child(n+3){color:#ff0}.icon-tabler-zoom-in-area>:nth-child(2),.icon-tabler-zoom-in-area>:nth-child(3){color:#0f0}.icon-tabler-zoom-out-area>:nth-child(2){color:red}.icon-tabler-zoom-pan>:nth-child(n+4){color:#96f}.icon-tabler-arrow-autofit-down>:nth-child(n+3),.icon-tabler-arrow-autofit-left>:nth-child(n+3),.icon-tabler-arrow-autofit-right>:nth-child(n+3){color:#28ffbf}.icon-tabler-spacing-vertical>:nth-child(4),.icon-tabler-spacing-horizontal>:nth-child(4){color:#f0f}.icon-tabler-list-numbers>:nth-child(n+5){color:#e48900}.icon-tabler-bookmarks>:nth-child(n+2),.icon-tabler-bookmark>:nth-child(2),.icon-tabler-bookmark-off>:nth-child(2){color:orange}.icon-tabler-bookmark-off>:nth-child(3),.icon-tabler-eye-off>:nth-child(4){color:red}.icon-tabler-zoom-cancel>:nth-child(3),.icon-tabler-zoom-cancel>:nth-child(4){color:#96f}.icon-tabler-zoom-in>:nth-child(3),.icon-tabler-zoom-in>:nth-child(4){color:#0f0}.icon-tabler-zoom-out>:nth-child(3){color:red}.icon-tabler-refresh>:nth-child(n+2){color:#0ff}.icon-tabler-photo>:nth-child(n+2),.icon-tabler-photo-off>:nth-child(n+2){color:silver}.icon-tabler-photo-off>:nth-child(6){color:orange}.icon-tabler-message>:nth-child(2),.icon-tabler-message>:nth-child(3),.icon-tabler-book-arrow-left>:nth-child(7),.icon-tabler-book-arrow-left>:nth-child(8),.icon-tabler-book-arrow-right>:nth-child(7),.icon-tabler-book-arrow-right>:nth-child(8),.icon-tabler-books-return>:nth-child(8),.icon-tabler-books-return>:nth-child(9){color:#adff2f}.icon-tabler-file-percent>:nth-child(2),.icon-tabler-file-percent>:nth-child(5),.icon-tabler-file-percent>:nth-child(6){color:#ff0}.icon-tabler-settings-off>:nth-child(4),.icon-tabler-book-off>:nth-child(7){color:red}",Am='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-adjustments-horizontal"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M14 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"/><path d="M4 6l8 0"/><path d="M16 6l4 0"/><path d="M8 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"/><path d="M4 12l2 0"/><path d="M10 12l10 0"/><path d="M17 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"/><path d="M4 18l11 0"/><path d="M19 18l1 0"/></svg>',Mm='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-alert-circle"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"/><path d="M12 8v4"/><path d="M12 16h.01"/></svg>',xm='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-api-book"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 1.006 -.5"/><path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0"/><path d="M3 6v13"/><path d="M12 6v13"/><path d="M21 6v6"/><path d="M17.001 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"/><path d="M19.001 15.5v1.5"/><path d="M19.001 21v1.5"/><path d="M22.032 17.25l-1.299 .75"/><path d="M17.27 20l-1.3 .75"/><path d="M15.97 17.25l1.3 .75"/><path d="M20.733 20l1.3 .75"/></svg>',Im='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-autofit-down" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 20h-6a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h8"/><path d="M18 4v17"/><path d="M15 18l3 3l3 -3"/></svg>',Cm='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-autofit-height" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 20h-6a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h6"/><path d="M18 14v7"/><path d="M18 3v7"/><path d="M15 18l3 3l3 -3"/><path d="M15 6l3 -3l3 3"/></svg>',Om='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-autofit-left" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 12v-6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v8"/><path d="M20 18h-17"/><path d="M6 15l-3 3l3 3"/></svg>',Tm='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-autofit-right" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M20 12v-6a2 2 0 0 0 -2 -2h-12a2 2 0 0 0 -2 2v8"/><path d="M4 18h17"/><path d="M18 15l3 3l-3 3"/></svg>',Lm='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-autofit-width" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 12v-6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v6"/><path d="M10 18h-7"/><path d="M21 18h-7"/><path d="M6 15l-3 3l3 3"/><path d="M18 15l3 3l-3 3"/></svg>',Rm='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-big-left" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M20 15h-8v3.586a1 1 0 0 1 -1.707 .707l-6.586 -6.586a1 1 0 0 1 0 -1.414l6.586 -6.586a1 1 0 0 1 1.707 .707v3.586h8a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1z"/></svg>',Pm='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-big-right" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 9h8v-3.586a1 1 0 0 1 1.707 -.707l6.586 6.586a1 1 0 0 1 0 1.414l-6.586 6.586a1 1 0 0 1 -1.707 -.707v-3.586h-8a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1z"/></svg>',$m='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-arrows-horizontal"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 8l-4 4l4 4"/><path d="M17 8l4 4l-4 4"/><path d="M3 12l18 0"/></svg>',Dm='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-arrows-left-right"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M21 17l-18 0"/><path d="M6 10l-3 -3l3 -3"/><path d="M3 7l18 0"/><path d="M18 20l3 -3l-3 -3"/></svg>',zm='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-arrows-move"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 9l3 3l-3 3"/><path d="M15 12h6"/><path d="M6 9l-3 3l3 3"/><path d="M3 12h6"/><path d="M9 18l3 3l3 -3"/><path d="M12 15v6"/><path d="M15 6l-3 -3l-3 3"/><path d="M12 3v6"/></svg>',Nm='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-arrows-move-vertical"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 18l3 3l3 -3"/><path d="M12 15v6"/><path d="M15 6l-3 -3l-3 3"/><path d="M12 3v6"/></svg>',Bm='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-arrows-vertical"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8 7l4 -4l4 4"/><path d="M8 17l4 4l4 -4"/><path d="M12 3l0 18"/></svg>',Hm='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-book"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0"/><path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0"/><path d="M3 6l0 13"/><path d="M12 6l0 13"/><path d="M21 6l0 13"/></svg>',Fm='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-book-arrow-left"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 1.006 -.5"/><path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0"/><path d="M3 6v13"/><path d="M12 6v13"/><path d="M21 6v6"/><path d="M16 19h6"/><path d="M19 16l-3 3l3 3"/></svg>',Gm='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-book-arrow-right"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 1.006 -.5"/><path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0"/><path d="M3 6v13"/><path d="M12 6v13"/><path d="M21 6v6"/><path d="M16 19h6"/><path d="M19 16l3 3l-3 3"/></svg>',Wm='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-book-off"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 5.899 -1.096"/><path d="M3 6a9 9 0 0 1 2.114 -.884m3.8 -.21c1.07 .17 2.116 .534 3.086 1.094a9 9 0 0 1 9 0"/><path d="M3 6v13"/><path d="M12 6v2m0 4v7"/><path d="M21 6v11"/><path d="M3 3l18 18"/></svg>',Um='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-book-upload"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M14 20h-8a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12v5"/><path d="M11 16h-5a2 2 0 0 0 -2 2"/><path d="M15 16l3 -3l3 3"/><path d="M18 13v9"/></svg>',Vm='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-bookmark" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 7v14l-6 -4l-6 4v-14a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4z"/></svg>',qm='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-bookmark-off" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7.708 3.721a3.982 3.982 0 0 1 2.292 -.721h4a4 4 0 0 1 4 4v7m0 4v3l-6 -4l-6 4v-14c0 -.308 .035 -.609 .1 -.897"/><path d="M3 3l18 18"/></svg>',Zm='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-bookmarks" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 10v11l-5 -3l-5 3v-11a3 3 0 0 1 3 -3h4a3 3 0 0 1 3 3z"/><path d="M11 3h5a3 3 0 0 1 3 3v11"/></svg>',jm='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-books-return"><defs><mask id="arrow-mask"><rect width="24" height="24" fill="white"/><rect x="15" y="15" width="8" height="8" fill="black"/></mask></defs><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 5a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1l0 -14"/><path d="M9 5a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1l0 -14"/><path d="M5 8h4"/><path d="M9 16h4"/><g mask="url(#arrow-mask)"><path d="M13.803 4.56l2.184 -.53c.562 -.135 1.133 .19 1.282 .732l3.695 13.418a1.02 1.02 0 0 1 -.634 1.219l-.133 .041l-2.184 .53c-.562 .135 -1.133 -.19 -1.282 -.732l-3.695 -13.418a1.02 1.02 0 0 1 .634 -1.219l.133 -.041"/><path d="M14 9l4 -1"/><path d="M16 16l3.923 -.98"/></g><path d="M16 19h6"/><path d="M19 16l-3 3l3 3"/></svg>',Km='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-box-align-top"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 10.005h16v-5a1 1 0 0 0 -1 -1h-14a1 1 0 0 0 -1 1v5z"/><path d="M4 15.005v-.01"/><path d="M4 20.005v-.01"/><path d="M9 20.005v-.01"/><path d="M15 20.005v-.01"/><path d="M20 20.005v-.01"/><path d="M20 15.005v-.01"/></svg>',Ym='<svg id="Capa_1" enable-background="new 0 0 512 512" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><g><g><g><path d="m427.508 512h-343.02c-5.69 0-10.302-4.612-10.302-10.302v-491.396c0-5.69 4.612-10.302 10.302-10.302h343.02c5.69 0 10.302 4.612 10.302 10.302v491.396c-.001 5.69-4.613 10.302-10.302 10.302z" fill="#f2eff2"/></g></g><path d="m427.512 0h-41.238c5.687 0 10.302 4.615 10.302 10.302v41.156l-18.039 71.714 18.039 81.268v46.358l-18.039 45.164 18.039 24.847v46.358l-10.302 61.227 10.302 32.149v41.156c0 5.687-4.615 10.302-10.302 10.302h41.238c5.687 0 10.302-4.615 10.302-10.302v-491.397c0-5.687-4.615-10.302-10.302-10.302z" fill="#e1dde1"/><g><path d="m243.51 273.63-47.48 104.08-80.61-10.85v-315.4c0-2.85 2.31-5.15 5.15-5.15h30.86c2.13 0 4.03 1.29 4.8 3.27z" fill="#3ad1e0"/><path d="m243.51 273.63-16.68 36.56-101.52-260.61c-.76-1.95-2.64-3.25-4.74-3.27h30.86c2.13 0 4.03 1.29 4.8 3.27z" fill="#22c7db"/><path d="m310.81 465.69h-190.24c-2.84 0-5.15-2.3-5.15-5.15v-93.68c25.18-34.92 65.99-57.81 112.19-58.37l-16.07 35.21 74.5 39.08 29.56 75.9c1.32 3.37-1.17 7.01-4.79 7.01z" fill="#fb33a8"/><path d="m310.81 465.69h-30.92c3.61 0 6.11-3.64 4.79-7.01l-12.92-33.17c-1.92 4.55-2.88 9.61-2.61 14.91.01.13.01.25.01.38 0 5.92-7.39 8.87-11.45 4.36-6.77-7.49-16.03-11.24-25.29-11.24s-18.54 3.75-25.29 11.24c-1.36 1.52-3.11 2.19-4.83 2.19-3.48 0-6.84-2.78-6.62-6.93.03-.59.04-1.18.04-1.77 0-19.36-16.23-34.99-35.81-33.99-.12.01-.24.01-.37.01-5.92 0-8.87-7.4-4.37-11.46 7.49-6.76 11.24-16.03 11.24-25.29s-3.75-18.52-11.24-25.29c-1.51-1.36-2.18-3.1-2.18-4.81 0-3.48 2.78-6.84 6.92-6.64.6.04 1.19.05 1.77.05 12.81 0 23.98-7.11 29.79-17.57l34.29-1.12-14.22 31.16 74.5 39.08 29.56 75.9c1.32 3.37-1.17 7.01-4.79 7.01z" fill="#fb33a8"/><path d="m396.58 51.46v152.98c0 2.84-2.31 5.15-5.15 5.15h-32l-40.41-29.31-40.41 29.31h-17.82c-2.12 0-4.03-1.3-4.8-3.28l-59.6-152.98c-1.32-3.38 1.18-7.02 4.79-7.02h190.25c2.84 0 5.15 2.3 5.15 5.15z" fill="#fcb44d"/><path d="m396.576 51.457v152.982c0 2.843-2.308 5.151-5.151 5.151h-30.927c2.843 0 5.151-2.308 5.151-5.151v-152.982c0-2.843-2.308-5.151-5.151-5.151h30.927c2.843.001 5.151 2.308 5.151 5.151z" fill="#fb9927"/><g><path d="m359.428 181.065v28.526h-80.818v-28.526c0-22.324 18.1-40.414 40.414-40.414 11.157 0 21.263 4.522 28.567 11.837 7.314 7.314 11.837 17.409 11.837 28.577z" fill="#ae6ad8"/><path d="m359.43 181.065v28.526h-29.237v-28.526c0-11.167-4.522-21.263-11.837-28.577-3.935-3.935-8.674-7.067-13.949-9.107 4.533-1.762 9.467-2.73 14.618-2.73 11.157 0 21.263 4.522 28.567 11.837 7.316 7.314 11.838 17.409 11.838 28.577z" fill="#975bbb"/><g><g><circle cx="319.023" cy="121.497" fill="#f2eff2" r="26.224"/></g></g></g><path d="m396.576 250.798v70.011c0 2.845-2.306 5.151-5.151 5.151h-85.311c-2.123 0-4.029-1.303-4.8-3.281l-27.273-70.011c-1.316-3.377 1.175-7.021 4.8-7.021h112.585c2.844 0 5.15 2.306 5.15 5.151z" fill="#23f1a8"/><path d="m396.576 250.798v70.011c0 2.843-2.308 5.151-5.151 5.151h-30.927c2.843 0 5.151-2.308 5.151-5.151v-70.011c0-2.843-2.308-5.151-5.151-5.151h30.927c2.843 0 5.151 2.307 5.151 5.151z" fill="#27e19d"/><path d="m324.179 362.016h67.246c2.845 0 5.151 2.306 5.151 5.151v93.376c0 2.845-2.306 5.151-5.151 5.151h-30.866c-2.123 0-4.029-1.303-4.799-3.281l-36.38-93.376c-1.316-3.377 1.175-7.021 4.799-7.021z" fill="#23f1a8"/><path d="m396.576 367.167v93.376c0 2.843-2.308 5.151-5.151 5.151h-30.927c2.843 0 5.151-2.308 5.151-5.151v-93.376c0-2.843-2.308-5.151-5.151-5.151h30.927c2.843 0 5.151 2.308 5.151 5.151z" fill="#27e19d"/></g><g><path d="m269.153 413.978c.01.124.01.247.01.371 0 5.924-7.397 8.87-11.456 4.368-6.768-7.489-16.03-11.239-25.291-11.239s-18.533 3.75-25.291 11.239c-1.36 1.514-3.101 2.184-4.821 2.184-3.482 0-6.84-2.782-6.624-6.923.031-.597.041-1.185.041-1.772 0-19.367-16.236-34.995-35.809-33.996-.124.01-.247.01-.371.01-5.924 0-8.87-7.397-4.368-11.456 7.489-6.758 11.239-16.03 11.239-25.291s-3.75-18.523-11.239-25.291c-1.514-1.36-2.184-3.101-2.184-4.811 0-3.482 2.782-6.84 6.923-6.634.597.031 1.185.041 1.772.041 19.367 0 34.995-16.236 33.996-35.799-.01-.124-.01-.247-.01-.371 0-5.934 7.397-8.87 11.456-4.378 6.758 7.489 16.03 11.239 25.291 11.239 3.76 0 7.51-.618 11.095-1.844l42.526 109.158c-10.591 6.183-17.565 17.916-16.885 31.195z" fill="#fdef63"/><path d="m268.516 417.19c.406-.839.648-1.79.648-2.841 0-.123 0-.247-.01-.371-.68-13.279 6.294-25.013 16.885-31.194l-42.526-109.158c-3.585 1.226-7.335 1.844-11.095 1.844-7.992 0-15.988-2.799-22.374-8.378z" fill="#f3d730"/></g><g><g><path d="m229.374 349.967c-4.267 0-7.726-3.459-7.726-7.726v-29.272c0-4.267 3.459-7.726 7.726-7.726s7.726 3.459 7.726 7.726v29.272c0 4.267-3.459 7.726-7.726 7.726z" fill="#554e55"/></g><g><path d="m229.374 377.711c-4.267 0-7.726-3.459-7.726-7.726v-2.061c0-4.267 3.459-7.726 7.726-7.726s7.726 3.459 7.726 7.726v2.061c0 4.267-3.459 7.726-7.726 7.726z" fill="#554e55"/></g></g><g><g><path d="m258.185 86.361h-18.228c-4.267 0-7.726-3.459-7.726-7.726s3.459-7.726 7.726-7.726h18.228c4.267 0 7.726 3.459 7.726 7.726 0 4.266-3.459 7.726-7.726 7.726z" fill="#f2eff2"/></g><g><path d="m266.269 111.168h-18.229c-4.267 0-7.726-3.459-7.726-7.726s3.459-7.726 7.726-7.726h18.228c4.267 0 7.726 3.459 7.726 7.726s-3.458 7.726-7.725 7.726z" fill="#f2eff2"/></g></g></g></svg>',Xm=`<?xml version="1.0" encoding="UTF-8"?><svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512" xml:space="preserve" width="512" height="512"><g><g><g><path style="fill: #f2eff2" d="M422.485,504.5H89.515c-5.523,0-10-4.477-10-10v-477c0-5.523,4.477-10,10-10h332.971&#10;&#9;&#9;&#9;&#9;c5.523,0,10,4.477,10,10v477C432.485,500.023,428.008,504.5,422.485,504.5z"/></g></g><g><g><path style="fill: #e1dde1" d="M432.49,17.5v477c0,5.52-4.48,10-10,10h-40.03c5.52,0,10-4.48,10-10v-477c0-5.52-4.48-10-10-10&#10;&#9;&#9;&#9;&#9;h40.03C428.01,7.5,432.49,11.98,432.49,17.5z"/></g></g><g><path style="\r
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
        " x1="248.276" y1="107.911" x2="265.97" y2="107.911"/></g></g></svg>`,Jm=`<?xml version="1.0" encoding="UTF-8"?><svg version="1.1" id="svg3390" xml:space="preserve" width="682.66669" height="682.66669" viewBox="0 0 682.66669 682.66669" xmlns="http://www.w3.org/2000/svg"><defs id="defs3394"><clipPath clipPathUnits="userSpaceOnUse" id="clipPath3404"><path d="M 0,512 H 512 V 0 H 0 Z" id="path3402"/></clipPath></defs><g id="g3396" transform="matrix(1.3333333,0,0,-1.3333333,0,682.66667)"><g id="g3398"><g id="g3400" clip-path="url(#clipPath3404)"><g id="g3406" transform="translate(451.7344)"><path d="m 0,0 h -391.469 c -11.379,0 -20.603,9.225 -20.603,20.604 v 470.792 c 0,11.379 9.224,20.604 20.603,20.604 L 0,512 c 11.379,0 20.604,-9.225 20.604,-20.604 V 20.604 C 20.604,9.225 11.379,0 0,0" style="fill: #efe6e6; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path3408"/></g><g id="g3410" transform="translate(472.3376,41.2072)"><path d="m 0,0 c -216.202,0 -391.468,175.266 -391.468,391.468 v 79.325 h -20.604 c -11.379,0 -20.604,-9.225 -20.604,-20.604 V -20.604 c 0,-11.379 9.225,-20.603 20.604,-20.603 H -20.603 C -9.224,-41.207 0,-31.983 0,-20.604 Z" style="fill: #e2d7d7; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path3412"/></g><g id="g3414" transform="translate(235.3964,198.1382)"><path d="M 0,0 H 195.734 V 272.655 H 82.414 Z" style="fill: #ffffff; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path3416"/></g><g id="g3418" transform="translate(235.3964,198.1382)"><path d="M 0,0 H 195.734 V 272.655 H 82.414 Z" style="fill: #5ad6ff; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path3420"/></g><g id="g3422" transform="translate(80.8692,198.1382)"><path d="m 0,0 h 113.32 l 82.414,272.655 H 0 Z" style="fill: #f4e74d; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path3424"/></g><g id="g3426" transform="translate(80.8692,432.6757)"><path d="M 0,0 V -234.537 H 78.01 C 29.021,-169.169 0,-87.974 0,0" style="fill: #eedb00; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path3428"/></g><path d="M 431.131,41.207 H 80.869 v 115.724 h 350.262 z" style="fill: #b18cd9; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path3430"/><g id="g3432" transform="translate(194.475,156.931)"><path d="m 0,0 h -113.606 v -115.724 h 350.262 v 2.149 C 144.487,-103.933 61.838,-62.31 0,0" style="fill: #996acc; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path3434"/></g><g id="g3436" transform="translate(213.2632,94.3332)"><path d="m 0,0 c 0,-10.991 -11.188,-19.901 -24.99,-19.901 -13.801,0 -24.989,8.91 -24.989,19.901 0,10.991 11.188,19.9 24.989,19.9 C -11.188,19.9 0,10.991 0,0" style="fill: #ffffff; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path3438"/></g><g id="g3440" transform="translate(298.7368,94.3332)"><path d="m 0,0 c 0,-10.991 11.188,-19.901 24.99,-19.901 13.801,0 24.989,8.91 24.989,19.901 0,10.991 -11.188,19.9 -24.989,19.9 C 11.188,19.9 0,10.991 0,0" style="fill: #ffffff; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path3442"/></g><g id="g3444" transform="translate(202.8374,123.7057)"><path d="M 0,0 V -10.216" style="\r
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
            " id="path3454"/></g><g id="g3456" transform="translate(150.0629,447.8862)"><path d="m 0,0 33.436,22.907 h -102.63 v -161.294 l 21.382,72.58 59.96,-46.151 -25.363,71.287 75.636,-2.093 z" style="fill: #fd5c6f; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path3458"/></g><g id="g3460" transform="translate(80.8692,432.6757)"><path d="m 0,0 v -123.177 l 10.122,34.358 C 3.502,-60.282 0,-30.55 0,0" style="fill: #f6334c; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path3462"/></g><g id="g3464" transform="translate(431.1308,271.141)"><path d="m 0,0 -57.698,-44.41 24.406,68.598 -72.782,-2.014 60.066,41.15 -60.066,41.151 72.782,-2.014 -24.406,68.597 L 0,126.649 Z" style="fill: #ffffff; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path3466"/></g></g></g></g></svg>`,Qm=`<?xml version="1.0" encoding="UTF-8"?><svg version="1.1" id="svg5007" xml:space="preserve" width="682.66669" height="682.66669" viewBox="0 0 682.66669 682.66669" xmlns="http://www.w3.org/2000/svg"><defs id="defs5011"><clipPath clipPathUnits="userSpaceOnUse" id="clipPath5021"><path d="M 0,512 H 512 V 0 H 0 Z" id="path5019"/></clipPath></defs><g id="g5013" transform="matrix(1.3333333,0,0,-1.3333333,0,682.66667)"><g id="g5015"><g id="g5017" clip-path="url(#clipPath5021)"><g id="g5023" transform="translate(446,7.5)"><path d="m 0,0 h -380 c -11.046,0 -20,8.954 -20,20 v 457 c 0,11.046 8.954,20 20,20 H 0 c 11.046,0 20,-8.954 20,-20 V 20 C 20,8.954 11.046,0 0,0" style="fill: #efe6e6; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path5025"/></g><g id="g5027" transform="translate(465.9996,47.5)"><path d="m 0,0 c -209.868,0 -380,170.132 -380,380 v 77 h -20 c -11.045,0 -20,-8.954 -20,-20 V -20 c 0,-11.046 8.955,-20 20,-20 h 380 c 11.046,0 20,8.954 20,20 z" style="fill: #e2d7d7; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path5029"/></g><g id="g5031" transform="translate(236,199.8333)"><path d="M 0,0 H 190 V 264.667 H 80 Z" style="fill: #ffffff; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path5033"/></g><g id="g5035" transform="translate(236,199.8333)"><path d="M 0,0 H 190 V 264.667 H 80 Z" style="fill: #5ad6ff; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path5037"/></g><g id="g5039" transform="translate(86,199.8333)"><path d="m 0,0 h 110 l 80,264.667 H 0 Z" style="fill: #f4e74d; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path5041"/></g><g id="g5043" transform="translate(86,427.4996)"><path d="M 0,0 V -227.666 H 75.725 C 28.171,-164.213 0,-85.397 0,0" style="fill: #eedb00; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path5045"/></g><path d="M 426,47.5 H 86 v 112.333 h 340 z" style="fill: #b18cd9; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path5047"/><g id="g5049" transform="translate(196.2775,159.8334)"><path d="m 0,0 h -110.278 v -112.333 h 340 v 2.085 C 140.254,-100.888 60.026,-60.484 0,0" style="fill: #996acc; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path5051"/></g><g id="g5053" transform="translate(214.5152,99.0695)"><path d="m 0,0 c 0,-10.669 -10.861,-19.318 -24.258,-19.318 -13.397,0 -24.257,8.649 -24.257,19.318 0,10.669 10.86,19.317 24.257,19.317 C -10.861,19.317 0,10.669 0,0" style="fill: #ffffff; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path5055"/></g><g id="g5057" transform="translate(297.4848,99.0695)"><path d="m 0,0 c 0,-10.669 10.861,-19.318 24.258,-19.318 13.397,0 24.257,8.649 24.257,19.318 0,10.669 -10.86,19.317 -24.257,19.317 C 10.861,19.317 0,10.669 0,0" style="fill: #ffffff; fill-opacity: 1; fill-rule: nonzero; stroke: none" id="path5059"/></g><g id="g5061" transform="translate(204.3949,127.5815)"><path d="M 0,0 V -9.916" style="\r
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
            " id="path5107"/></g></g></g></g></svg>`,eg='<svg id="Capa_1" enable-background="new 0 0 512 512" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><g><g><g><path d="m427.508 512h-343.02c-5.69 0-10.302-4.612-10.302-10.302v-491.396c0-5.69 4.612-10.302 10.302-10.302h343.02c5.69 0 10.302 4.612 10.302 10.302v491.396c-.001 5.69-4.613 10.302-10.302 10.302z" fill="#f2eff2"/></g></g><path d="m427.512 0h-41.238c5.687 0 10.302 4.615 10.302 10.302v36.12l-18.016 49.462 18.016 36.952v51.701l-13.787 87.003 13.787 55.974v51.669l-18.016 52.406 18.016 34.008v36.1c0 5.687-4.615 10.302-10.302 10.302h41.238c5.687 0 10.302-4.615 10.302-10.302v-491.395c0-5.687-4.615-10.302-10.302-10.302z" fill="#e1dde1"/><path d="m396.6 46.36v86.52c0 2.85-2.31 5.15-5.15 5.15h-110.11l-22.53-48.41 22.53-48.41h110.11c2.84 0 5.15 2.3 5.15 5.15z" fill="#3ad1e0"/><path d="m396.599 46.358v86.525c0 2.843-2.308 5.151-5.151 5.151h-30.926c2.843 0 5.151-2.308 5.151-5.151v-86.525c0-2.843-2.308-5.151-5.151-5.151h30.926c2.844 0 5.151 2.308 5.151 5.151z" fill="#20bfd5"/><path d="m281.34 41.207h-39.904c-2.845 0-5.151 2.306-5.151 5.151v86.525c0 2.845 2.306 5.151 5.151 5.151h39.904z" fill="#23f1a8"/><path d="m304.73 470.79h-77.71l-39.22-20.29-39.23 20.29h-28.03c-2.84 0-5.15-2.3-5.15-5.15v-86.52c0-2.85 2.31-5.15 5.15-5.15h128.92c1.76 0 3.4.89 4.34 2.37l55.27 86.53c2.19 3.43-.27 7.92-4.34 7.92z" fill="#23f1a8"/><g><path d="m227.019 443.104v27.689h-78.446v-27.689c0-21.669 17.569-39.228 39.228-39.228 10.83 0 20.639 4.39 27.729 11.489 7.099 7.1 11.489 16.899 11.489 27.739z" fill="#ae6ad8"/><path d="m227.021 443.101v27.691h-29.061v-27.691c0-10.838-4.389-20.634-11.486-27.732-3.729-3.74-8.211-6.727-13.207-8.715 4.492-1.793 9.406-2.782 14.536-2.782 10.827 0 20.635 4.389 27.732 11.497 7.097 7.098 11.486 16.895 11.486 27.732z" fill="#975bbb"/></g><path d="m304.728 470.793h-30.926c4.069 0 6.531-4.492 4.347-7.922l-55.269-86.525c-.948-1.483-2.586-2.38-4.347-2.38h30.926c1.762 0 3.4.896 4.347 2.38l55.269 86.525c2.184 3.43-.278 7.922-4.347 7.922z" fill="#27e19d"/><path d="m391.448 373.966h-81.106c-4.068 0-6.531 4.495-4.341 7.924l55.269 86.525c.946 1.482 2.583 2.378 4.341 2.378h25.837c2.845 0 5.151-2.306 5.151-5.151v-86.525c0-2.845-2.306-5.151-5.151-5.151z" fill="#ae6ad8"/><path d="m396.599 379.117v86.525c0 2.843-2.308 5.151-5.151 5.151h-25.837c-.907 0-1.772-.237-2.534-.68 1.556-.886 2.596-2.555 2.596-4.471v-86.525c0-2.843-2.308-5.151-5.151-5.151h30.926c2.844 0 5.151 2.308 5.151 5.151z" fill="#975bbb"/><g><path d="m195.602 46.358v86.525c0 2.845-2.306 5.151-5.151 5.151h-69.91c-2.845 0-5.151-2.306-5.151-5.151v-86.525c0-2.845 2.306-5.151 5.151-5.151h69.91c2.845 0 5.151 2.306 5.151 5.151z" fill="#3ad1e0"/><path d="m195.6 46.358v86.525c0 2.843-2.308 5.151-5.151 5.151h-30.926c2.843 0 5.151-2.308 5.151-5.151v-86.525c0-2.843-2.308-5.151-5.151-5.151h30.926c2.844 0 5.151 2.308 5.151 5.151z" fill="#20bfd5"/></g><g><path d="m396.6 184.39v143.22c0 2.84-2.31 5.15-5.15 5.15h-30.93l-104.53-27.53-104.52 27.53h-30.93c-2.84 0-5.15-2.31-5.15-5.15v-143.22c0-2.84 2.31-5.15 5.15-5.15h47.77l87.68 16.15 87.69-16.15h47.77c2.84 0 5.15 2.31 5.15 5.15z" fill="#fb54b6"/></g><path d="m151.473 332.759c0-57.729 46.798-104.527 104.527-104.527s104.527 46.798 104.527 104.527z" fill="#fb9927"/><path d="m360.522 332.759h-35.397c0-51.694-37.519-94.612-86.824-103.028 5.748-.979 11.662-1.494 17.699-1.494 57.731 0 104.522 46.79 104.522 104.522z" fill="#f98824"/><g><path d="m396.599 184.392v143.216c0 2.843-2.308 5.151-5.151 5.151h-30.926c2.843 0 5.151-2.308 5.151-5.151v-143.216c0-2.843-2.308-5.151-5.151-5.151h30.926c2.844 0 5.151 2.308 5.151 5.151z" fill="#fb33a8"/></g><g><g><path d="m345.43 247.027c-.144 0-.299 0-.453-.01-24.024-1.226-43.947 17.946-43.947 41.722 0 .721.021 1.442.051 2.174.268 5.079-3.853 8.489-8.128 8.489-2.112 0-4.244-.814-5.913-2.678-8.293-9.189-19.676-13.794-31.039-13.794s-22.746 4.605-31.039 13.794c-1.669 1.865-3.801 2.678-5.913 2.678-4.275 0-8.396-3.41-8.128-8.489.031-.731.041-1.453.041-2.174 0-23.777-19.924-42.948-43.937-41.722-.155.01-.309.01-.464.01-7.263 0-10.879-9.076-5.357-14.062 9.189-8.293 13.794-19.666 13.794-31.039 0-7.912-2.225-15.813-6.686-22.685h175.378c-4.461 6.871-6.686 14.773-6.686 22.685 0 11.373 4.605 22.746 13.794 31.039 5.521 4.986 1.905 14.062-5.368 14.062z" fill="#fdef63"/><g><g id="XMLID_00000127012381744132405410000009872483291948348836_"><path d="m280.138 231.696c-4.268 0-7.726-3.459-7.726-7.726v-.107c0-4.267 3.459-7.726 7.726-7.726s7.726 3.459 7.726 7.726v.107c0 4.267-3.459 7.726-7.726 7.726z" fill="#554e55"/></g><g id="XMLID_00000080918978500845250090000017315552773041050031_"><path d="m256 231.696c-4.267 0-7.726-3.459-7.726-7.726v-.107c0-4.267 3.459-7.726 7.726-7.726 4.268 0 7.726 3.459 7.726 7.726v.107c0 4.267-3.458 7.726-7.726 7.726z" fill="#554e55"/></g><g id="XMLID_00000140711681861242238370000008769002181148908969_"><path d="m231.862 231.696c-4.267 0-7.726-3.459-7.726-7.726v-.107c0-4.267 3.459-7.726 7.726-7.726s7.726 3.459 7.726 7.726v.107c.001 4.267-3.459 7.726-7.726 7.726z" fill="#554e55"/></g></g><path d="m345.43 247.037c-.155 0-.299 0-.443-.021-24.034-1.226-43.948 17.956-43.948 41.722 0 .721.01 1.432.052 2.174.258 5.079-3.863 8.499-8.128 8.499-2.122 0-4.255-.824-5.924-2.689-6.954-7.685-16.05-12.167-25.507-13.423 29.968-14.804 50.582-45.678 50.582-81.364 0-7.84-.999-15.442-2.864-22.695h34.429c-4.45 6.871-6.676 14.783-6.676 22.685 0 11.373 4.605 22.757 13.784 31.05 5.532 4.966 1.926 14.062-5.357 14.062z" fill="#f3d730"/></g></g><g><g><g><circle cx="187.8" cy="385.284" fill="#d8b2ec" r="25.455"/></g></g></g><g><g id="XMLID_00000028301319025648580530000009457246182494066313_"><path d="m316.443 111.45c-4.258 0-7.714-3.445-7.726-7.705-.012-4.267 3.438-7.736 7.705-7.747l41.222-.114h.021c4.258 0 7.714 3.445 7.726 7.705.012 4.267-3.438 7.736-7.705 7.747l-41.222.114c-.007 0-.014 0-.021 0z" fill="#f2eff2"/></g><g><path d="m357.665 83.243h-21.761c-4.268 0-7.726-3.459-7.726-7.726s3.459-7.726 7.726-7.726h21.761c4.268 0 7.726 3.459 7.726 7.726s-3.458 7.726-7.726 7.726z" fill="#f2eff2"/></g></g></g></svg>',tg=`<?xml version="1.0" encoding="UTF-8"?><svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512" xml:space="preserve" width="512" height="512"><g><g><g><path style="fill: #f2eff2" d="M422.485,504.5H89.515c-5.523,0-10-4.477-10-10v-477c0-5.523,4.477-10,10-10h332.971&#10;&#9;&#9;&#9;&#9;c5.523,0,10,4.477,10,10v477C432.485,500.023,428.008,504.5,422.485,504.5z"/></g></g><g><g><path style="fill: #e1dde1" d="M432.49,17.5v477c0,5.52-4.48,10-10,10h-40.03c5.52,0,10-4.48,10-10v-477c0-5.52-4.48-10-10-10&#10;&#9;&#9;&#9;&#9;h40.03C428.01,7.5,432.49,11.98,432.49,17.5z"/></g></g><g><path style="\r
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
        " x1="333.566" y1="80.805" x2="354.689" y2="80.805"/></g></g></svg>`,rg='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-category" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4h6v6h-6z"/><path d="M14 4h6v6h-6z"/><path d="M4 14h6v6h-6z"/><path d="M17 17m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"/></svg>',ng='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-check" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 12l5 5l10 -10"/></svg>',og='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-left"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 6l-6 6l6 6"/></svg>',ig='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 6l6 6l-6 6"/></svg>',ag='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-circle-check"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"/><path d="M9 12l2 2l4 -4"/></svg>',sg='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-circle-x"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"/><path d="M10 10l4 4m0 -4l-4 4"/></svg>',lg=`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-device-desktop" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 5a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1z"/><path d="M7 20h10"/><path d="M9 16v4"/><path d="M15 16v4"/></svg>\r
`,cg='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-device-floppy" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 4h10l4 4v10a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2"/><path d="M12 14m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"/><path d="M14 4l0 4l-6 0l0 -4"/></svg>',ug=`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-device-mobile" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 5a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2z"/><path d="M11 4h2"/><path d="M12 17v.01"/></svg>\r
`,dg=`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-device-tablet" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 4a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1v16a1 1 0 0 1 -1 1h-12a1 1 0 0 1 -1 -1z"/><path d="M11 17a1 1 0 1 0 2 0a1 1 0 0 0 -2 0"/></svg>\r
`,hg='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-dots-vertical"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"/><path d="M12 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"/><path d="M12 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"/></svg>',fg='<svg id="Capa_1" enable-background="new 0 0 512 512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><g><g><path d="m369.32 512h-226.64c-45.516 0-82.414-36.898-82.414-82.414v-347.172c0-45.516 36.898-82.414 82.414-82.414h226.64c45.516 0 82.414 36.898 82.414 82.414v347.171c0 45.517-36.898 82.415-82.414 82.415z" fill="#636978"/></g><g><path d="m225.095 450.189v-388.378c0-34.137 27.673-61.811 61.81-61.811h-144.225c-45.516 0-82.414 36.898-82.414 82.414v347.171c0 45.516 36.898 82.414 82.414 82.414h144.225c-34.137.001-61.81-27.673-61.81-61.81z" fill="#555a66"/></g><g><path d="m369.32 61.811h-226.64c-11.379 0-20.604 9.225-20.604 20.604v336.869c0 11.379 9.225 20.604 20.604 20.604h226.64c11.379 0 20.604-9.225 20.604-20.604v-336.87c0-11.379-9.225-20.603-20.604-20.603z" fill="#96e8ff"/></g><g><path d="m122.076 82.414v336.869c0 11.379 9.225 20.604 20.604 20.604h82.414v-378.076h-82.414c-11.379 0-20.604 9.224-20.604 20.603z" fill="#80dbff"/></g><g><path d="m256 111.277c-27.66-8.24-55.124-9.125-82.742-2.655-5.835 1.367-9.975 6.555-9.975 12.548v95.771c0 6.566 6.064 11.463 12.479 10.063 23.872-5.21 47.636-4.921 71.52.866 5.731 1.389 11.704 1.389 17.435 0 23.884-5.788 47.648-6.077 71.52-.866 6.415 1.4 12.479-3.497 12.479-10.063 0-40.343 0-55.429 0-95.771 0-5.993-4.139-11.181-9.975-12.548-27.617-6.471-55.081-5.585-82.741 2.655z" fill="#fff"/></g><g><path d="m173.258 108.622c-5.835 1.367-9.975 6.555-9.975 12.548v95.771c0 6.566 6.064 11.463 12.479 10.063 23.872-5.21 47.636-4.921 71.52.866 2.866.694 5.791 1.041 8.717 1.041v-117.634c-27.659-8.24-55.123-9.126-82.741-2.655z" fill="#f5fafc"/></g><g><path d="m205.037 104.432c-10.584.315-21.171 1.704-31.781 4.19-5.834 1.367-9.973 6.56-9.973 12.552v95.761c0 6.547 6.037 11.478 12.432 10.08 23.888-5.221 47.667-4.935 71.567.856 2.866.694 8.717 1.042 8.717 1.042 0-13.231-13.741-21.854-26.952-27.087-14.54-5.759-24.011-19.905-24.011-35.544v-61.85z" fill="#e1f1fa"/></g><g><g><path d="m338.414 289.266h-164.829c-4.142 0-7.5-3.357-7.5-7.5s3.358-7.5 7.5-7.5h164.829c4.143 0 7.5 3.357 7.5 7.5s-3.357 7.5-7.5 7.5z" fill="#19cffc"/></g><g><path d="m338.414 330.473h-164.829c-4.142 0-7.5-3.357-7.5-7.5s3.358-7.5 7.5-7.5h164.829c4.143 0 7.5 3.357 7.5 7.5s-3.357 7.5-7.5 7.5z" fill="#19cffc"/></g><g><g><path d="m191.667 385.134c-4.142 0-7.5-3.357-7.5-7.5v-12.362c0-4.143 3.358-7.5 7.5-7.5s7.5 3.357 7.5 7.5v12.362c0 4.142-3.358 7.5-7.5 7.5z" fill="#495560"/></g><g><path d="m320.333 385.134c-4.143 0-7.5-3.357-7.5-7.5v-12.362c0-4.143 3.357-7.5 7.5-7.5s7.5 3.357 7.5 7.5v12.362c0 4.142-3.357 7.5-7.5 7.5z" fill="#495560"/></g><g><path d="m256 392.493c-8.668 0-16.911-3.754-22.615-10.3-2.721-3.123-2.396-7.86.727-10.582 3.122-2.721 7.86-2.396 10.582.727 2.855 3.276 6.976 5.155 11.307 5.155s8.452-1.879 11.307-5.155c2.723-3.122 7.457-3.447 10.582-.727 3.122 2.722 3.448 7.459.727 10.582-5.706 6.546-13.949 10.3-22.617 10.3z" fill="#495560"/></g></g></g></g><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/></svg>',pg=`<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 512 512" xml:space="preserve"><g><path style="fill: #636978" d="M366,504.5H146c-44.183,0-80-35.817-80-80v-337c0-44.183,35.817-80,80-80h220&#10;&#9;&#9;c44.183,0,80,35.817,80,80v337C446,468.683,410.183,504.5,366,504.5z"/><path style="fill: #555a66" d="M226,444.5v-377c0-33.137,26.863-60,60-60H146c-44.183,0-80,35.817-80,80v337&#10;&#9;&#9;c0,44.183,35.817,80,80,80h140C252.863,504.5,226,477.637,226,444.5z"/><path style="fill: #96e8ff" d="M366,67.5H146c-11.046,0-20,8.954-20,20v327c0,11.046,8.954,20,20,20h220c11.046,0,20-8.954,20-20&#10;&#9;&#9;v-327C386,76.454,377.046,67.5,366,67.5z"/><path style="fill: #80dbff" d="M126,87.5v327c0,11.046,8.954,20,20,20h80v-367h-80C134.954,67.5,126,76.454,126,87.5z"/><path style="fill: #ffffff" d="M256,115.517c-26.85-7.998-53.509-8.858-80.318-2.577c-5.664,1.327-9.682,6.363-9.682,12.18&#10;&#9;&#9;c0,39.161,0,53.805,0,92.965c0,6.374,5.886,11.128,12.113,9.768c23.172-5.058,46.241-4.777,69.425,0.841&#10;&#9;&#9;c5.563,1.348,11.361,1.348,16.924,0c23.184-5.618,46.252-5.898,69.425-0.841c6.227,1.359,12.113-3.395,12.113-9.768&#10;&#9;&#9;c0-39.161,0-53.805,0-92.965c0-5.818-4.018-10.853-9.682-12.18C309.509,106.659,282.85,107.518,256,115.517z"/><path style="fill: #f5fafc" d="M175.682,112.94c-5.664,1.327-9.682,6.363-9.682,12.18c0,39.161,0,53.805,0,92.965&#10;&#9;&#9;c0,6.374,5.886,11.128,12.113,9.769c23.172-5.058,46.241-4.777,69.425,0.841c2.782,0.674,5.622,1.011,8.462,1.011V115.517&#10;&#9;&#9;C229.15,107.518,202.491,106.659,175.682,112.94z"/><path style="fill: #e1f1fa" d="M206.53,108.873c-10.274,0.306-20.551,1.654-30.85,4.067c-5.663,1.327-9.681,6.368-9.681,12.184&#10;&#9;&#9;c0,39.155,0,53.801,0,92.955c0,6.355,5.86,11.141,12.068,9.785c23.188-5.068,46.271-4.791,69.47,0.831&#10;&#9;&#9;c2.782,0.674,8.462,1.011,8.462,1.011c0-12.844-13.338-21.214-26.163-26.293c-14.114-5.59-23.307-19.322-23.307-34.502V108.873z"/><g><path style="\r
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
          " d="&#10;&#9;&#9;&#9;&#9;M239.536,373.713c4.003,4.594,9.892,7.501,16.464,7.501c6.572,0,12.461-2.907,16.464-7.501"/></g></g></g><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/></svg>`,mg='<svg id="Capa_1" enable-background="new 0 0 512 512" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><g><path d="m449.945 61.818v388.363c0 34.144-27.684 61.818-61.818 61.818h-264.254c-34.134 0-61.818-27.674-61.818-61.818v-388.363c0-34.144 27.684-61.818 61.818-61.818h264.253c34.135 0 61.819 27.674 61.819 61.818z" fill="#808fa4"/><path d="m188.464 512h-64.59c-34.134 0-61.818-27.674-61.818-61.818v-388.364c-.001-34.144 27.683-61.818 61.817-61.818h50.341c-7.367 6.574-15.218 18.092-15.218 37.359v423.909c.001 0-.215 30.24 29.468 50.732z" fill="#64768e"/><path d="m418.912 61.942v147.509l-194.274 13.033 77.912-191.451h85.453c17.072 0 30.909 13.837 30.909 30.909z" fill="#c5ced6"/><path d="m271.516 31.033-46.878 191.451-65.641-6.501-65.909-6.532 20.843-140.421 45.365-37.997z" fill="#abb6c4"/><path d="m159.296 31.033c-.196 2.009-.299 4.121-.299 6.326v178.624l-65.909-6.532v-147.509c0-17.072 13.837-30.909 30.909-30.909z" fill="#9ca9ba"/><path d="m313.676 222.484-18.885 196.428h-135.794l-51.732-35.968-14.177-142.46 65.909-5.379z" fill="#c5ced6"/><path d="m93.088 240.484 65.909-5.378v183.807h-35c-17.072 0-30.909-13.837-30.909-30.909z" fill="#abb6c4"/><path d="m418.912 240.484v147.519c0 17.072-13.837 30.909-30.909 30.909h-62.19l-12.137-196.428z" fill="#64768e"/><path d="m287.487 480.971h-62.974c-8.317 0-15.059-6.742-15.059-15.059v-.913c0-8.317 6.742-15.059 15.059-15.059h62.974c8.317 0 15.059 6.742 15.059 15.059v.913c0 8.316-6.743 15.059-15.059 15.059z" fill="#64768e"/><path d="m418.912 209.451v31.033h-77.644c-8.531 0-15.455 6.924-15.455 15.455v162.974h-31.022v-162.975c0-8.531-6.923-15.455-15.455-15.455h-120.34l-13.147-13.27 13.147-17.763h44.138c6.718 0 12.673-4.348 14.723-10.746l53.658-167.672h31.033l-50.65 158.255c-3.183 9.974 4.255 20.163 14.723 20.163h152.291z" fill="#e8ecf9"/><path d="m93.088 209.451h65.909v31.033h-65.909z" fill="#d7ddf5"/><g><g><path d="m129.509 332.474c-4.268 0-7.727-3.459-7.727-7.727v-12.364c0-4.268 3.459-7.727 7.727-7.727s7.727 3.459 7.727 7.727v12.364c0 4.268-3.459 7.727-7.727 7.727z" fill="#495560"/></g><g><path d="m258.191 332.474c-4.268 0-7.727-3.459-7.727-7.727v-12.364c0-4.268 3.459-7.727 7.727-7.727s7.727 3.459 7.727 7.727v12.364c.001 4.268-3.458 7.727-7.727 7.727z" fill="#495560"/></g><path d="m223.825 324.391c-4.268 0-7.727 3.459-7.727 7.727 0 3.952-3.215 7.167-7.166 7.167-3.952 0-7.167-3.215-7.167-7.167 0-4.268-3.459-7.727-7.727-7.727s-7.727 3.459-7.727 7.727c0 3.952-3.215 7.167-7.166 7.167-3.952 0-7.167-3.215-7.167-7.167 0-4.268-3.459-7.727-7.727-7.727s-7.727 3.459-7.727 7.727c0 12.473 10.148 22.621 22.621 22.621 5.7 0 10.911-2.124 14.894-5.616 3.982 3.492 9.193 5.616 14.894 5.616 12.473 0 22.62-10.148 22.62-22.621-.001-4.268-3.46-7.727-7.728-7.727z" fill="#495560"/></g></g></svg>',gg=`<?xml version="1.0" encoding="UTF-8"?><svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 511.941 511.941" xml:space="preserve" width="512" height="512"><g><g><path style="fill: #808fa4" d="M444.211,67.5v376.94c0,33.14-26.87,60-60,60H127.73c-33.13,0-60-26.86-60-60V67.5&#10;&#9;&#9;&#9;c0-33.14,26.87-60,60-60h256.48C417.341,7.5,444.211,34.361,444.211,67.5z"/><path style="fill: #64768e" d="M190.421,504.44h-62.69c-33.13,0-60-26.86-60-60V67.5c0-33.14,26.87-60,60-60h48.86&#10;&#9;&#9;&#9;c-7.15,6.38-14.77,17.56-14.77,36.26v411.44C161.821,455.201,161.611,484.551,190.421,504.44z"/><path style="fill: #c5ced6" d="M414.091,67.62v143.17l-188.56,12.65l75.62-185.82h82.94&#10;&#9;&#9;&#9;C400.661,37.62,414.091,51.051,414.091,67.62z"/><polygon style="fill: #abb6c4" points="271.031,37.62 225.531,223.44 161.821,217.131 97.85,210.79 118.08,74.5 162.111,37.62 &#9;&#9;&#10;&#9;&#9;&#9;"/><path style="fill: #9ca9ba" d="M162.111,37.62c-0.19,1.95-0.29,4-0.29,6.14v173.37l-63.97-6.34V67.62c0-16.57,13.43-30,30-30&#10;&#9;&#9;&#9;H162.111z"/><polygon style="fill: #c5ced6" points="311.951,223.44 293.62,414.091 161.821,414.091 111.611,379.181 97.85,240.911 &#10;&#9;&#9;&#9;161.821,235.69 &#9;&#9;"/><path style="fill: #abb6c4" d="M97.85,240.911l63.97-5.22v178.4h-33.97c-16.57,0-30-13.43-30-30V240.911z"/><path style="fill: #64768e" d="M414.091,240.911v143.18c0,16.57-13.43,30-30,30h-60.36l-11.78-190.65L414.091,240.911z"/><path style="fill: #64768e" d="M286.088,474.324h-60.235c-8.317,0-15.059-6.742-15.059-15.059v0&#10;&#9;&#9;&#9;c0-8.317,6.742-15.059,15.059-15.059h60.235c8.317,0,15.059,6.742,15.059,15.059v0&#10;&#9;&#9;&#9;C301.147,467.581,294.405,474.324,286.088,474.324z"/><path style="fill: #e8ecf9" d="M414.091,210.79v30.12h-75.36c-8.28,0-15,6.72-15,15v158.18h-30.11v-158.18c0-8.28-6.72-15-15-15&#10;&#9;&#9;&#9;h-116.8l-12.76-12.88l12.76-17.24h42.84c6.52,0,12.3-4.22,14.29-10.43l52.08-162.74h30.12l-49.16,153.6&#10;&#9;&#9;&#9;c-3.09,9.68,4.13,19.57,14.29,19.57H414.091z"/><rect x="97.85" y="210.79" style="fill: #d7ddf5" width="63.97" height="30.12"/></g><g><path style="\r
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
            " d="M224.742,329.85&#10;&#9;&#9;&#9;&#9;&#9;c0,7.984-6.472,14.456-14.456,14.456s-14.456-6.472-14.456-14.456"/></g></g></g></g></svg>`,vg='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-external-link" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6"/><path d="M11 13l9 -9"/><path d="M15 4h5v5"/></svg>',bg='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-eye" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"/><path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6"/></svg>',wg='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-eye-off" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10.585 10.587a2 2 0 0 0 2.829 2.828"/><path d="M16.681 16.673a8.717 8.717 0 0 1 -4.681 1.327c-3.6 0 -6.6 -2 -9 -6c1.272 -2.12 2.712 -3.678 4.32 -4.674m2.86 -1.146a9.055 9.055 0 0 1 1.82 -.18c3.6 0 6.6 2 9 6c-.666 1.11 -1.379 2.067 -2.138 2.87"/><path d="M3 3l18 18"/></svg>',_g='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-file-download" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M14 3v4a1 1 0 0 0 1 1h4"/><path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"/><path d="M12 17v-6"/><path d="M9.5 14.5l2.5 2.5l2.5 -2.5"/></svg>',yg='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-file-percent"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 17l4 -4"/><path d="M14 3v4a1 1 0 0 0 1 1h4"/><path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"/><path d="M10 13h.01"/><path d="M14 17h.01"/></svg>',kg='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-folder-open"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 19l2.757 -7.351a1 1 0 0 1 .936 -.649h12.307a1 1 0 0 1 .986 1.164l-.996 5.211a2 2 0 0 1 -1.964 1.625h-14.026a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 2 -2h4l3 3h7a2 2 0 0 1 2 2v2" /></svg>',Eg='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-hand-click"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8 13v-8.5a1.5 1.5 0 0 1 3 0v7.5"/><path d="M11 11.5v-2a1.5 1.5 0 0 1 3 0v2.5"/><path d="M14 10.5a1.5 1.5 0 0 1 3 0v1.5"/><path d="M17 11.5a1.5 1.5 0 0 1 3 0v4.5a6 6 0 0 1 -6 6h-2h.208a6 6 0 0 1 -5.012 -2.7l-.196 -.3c-.312 -.479 -1.407 -2.388 -3.286 -5.728a1.5 1.5 0 0 1 .536 -2.022a1.867 1.867 0 0 1 2.28 .28l1.47 1.47"/><path d="M5 3l-1 -1"/><path d="M4 7h-1"/><path d="M14 3l1 -1"/><path d="M15 6h1"/></svg>',Sg='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-help"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"/><path d="M12 17l0 .01"/><path d="M12 13.5a1.5 1.5 0 0 1 1 -1.5a2.6 2.6 0 1 0 -3 -4"/></svg>',Ag='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-info-circle"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"/><path d="M12 9h.01"/><path d="M11 12h1v4h1"/></svg>',Mg='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-keyboard" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M2 6m0 2a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-16a2 2 0 0 1 -2 -2z"/><path d="M6 10l0 .01"/><path d="M10 10l0 .01"/><path d="M14 10l0 .01"/><path d="M18 10l0 .01"/><path d="M6 14l0 .01"/><path d="M18 14l0 .01"/><path d="M10 14l4 .01"/></svg>',xg='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-layout-bottombar"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"/><path d="M4 15l16 0"/></svg>',Ig='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-layout-bottombar-inactive"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z"/><path d="M4 15h1"/><path d="M19 15h1"/><path d="M9 15h1"/><path d="M14 15h1"/></svg>',Cg='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-layout-dashboard"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 4h4a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1" /><path d="M5 16h4a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1v-2a1 1 0 0 1 1 -1" /><path d="M15 12h4a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1" /><path d="M15 4h4a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1v-2a1 1 0 0 1 1 -1" /></svg>',Og='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-layout-sidebar"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"/><path d="M9 4l0 16"/></svg>',Tg='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-layout-sidebar-inactive"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z"/><path d="M9 4v1"/><path d="M9 9v1"/><path d="M9 14v1"/><path d="M9 19v1"/></svg>',Lg='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-layout-sidebar-right"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"/><path d="M15 4l0 16"/></svg>',Rg='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-layout-sidebar-right-inactive"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z"/><path d="M15 4v1"/><path d="M15 9v1"/><path d="M15 14v1"/><path d="M15 19v1"/></svg>',Pg='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-list-numbers" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M11 6h9"/><path d="M11 12h9"/><path d="M12 18h8"/><path d="M4 16a2 2 0 1 1 4 0c0 .591 -.5 1 -1 1.5l-3 2.5h4"/><path d="M6 10v-6l-2 2"/></svg>',$g='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-loader-2" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 3a9 9 0 1 0 9 9"/></svg>',Dg='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-location-cog"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 18l-2 -4l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5l-3.14 8.697"/><path d="M19.001 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"/><path d="M19.001 15.5v1.5"/><path d="M19.001 21v1.5"/><path d="M22.032 17.25l-1.299 .75"/><path d="M17.27 20l-1.3 .75"/><path d="M15.97 17.25l1.3 .75"/><path d="M20.733 20l1.3 .75"/></svg>',zg='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-menu-2" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 6l16 0"/><path d="M4 12l16 0"/><path d="M4 18l16 0"/></svg>',Ng='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-menu-deep"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 6h16"/><path d="M7 12h13"/><path d="M10 18h10"/></svg>',Bg='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-message" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8 9h8"/><path d="M8 13h6"/><path d="M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-5l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12z"/></svg>',Hg='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-moon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z"/></svg>',Fg='<svg id="Capa_1" enable-background="new 0 0 512 512" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><g><path d="m449.945 61.818v388.363c0 34.144-27.684 61.818-61.818 61.818h-264.253c-34.134 0-61.818-27.674-61.818-61.818v-388.363c-.001-34.144 27.684-61.818 61.818-61.818h264.253c34.133 0 61.818 27.674 61.818 61.818z" fill="#e8ecf9"/><path d="m207.555 512h-83.681c-34.134 0-61.818-27.674-61.818-61.818v-388.364c-.001-34.144 27.684-61.818 61.818-61.818h79.993c-11.292 3.421-26.809 12.446-26.809 36.256v436.87c0 26.479 19.854 35.783 30.497 38.874z" fill="#d7ddf5"/><path d="m403.396 62.004v139.751c0 8.541-6.924 15.455-15.455 15.455h-210.883l-51.556-21.729v-124.699l51.556-24.233h210.883c8.531 0 15.455 6.913 15.455 15.455z" fill="#c5ced6"/><path d="m177.058 46.549v170.66h-52.999c-8.531 0-15.455-6.913-15.455-15.455v-139.75c0-8.541 6.924-15.455 15.455-15.455z" fill="#abb6c4"/><path d="m217.209 279.213v8.036l-40.151 41.769-8.809 9.17-59.644 4.307 12.333-53.195 56.121-25.541h24.696c8.541-.001 15.454 6.923 15.454 15.454z" fill="#c5ced6"/><path d="m124.059 263.758h52.999v65.26l-8.809 9.17-59.644 4.307v-63.281c-.001-8.532 6.923-15.456 15.454-15.456z" fill="#abb6c4"/><path d="m217.209 334.365v60.407l-40.151 43.438-4.204 4.543-64.25-8.634 8.573-21.379-8.573-26.551 50.743-51.824z" fill="#c5ced6"/><path d="m177.058 334.365v103.845l-4.204 4.543-64.25-8.634v-47.93l50.743-51.824z" fill="#abb6c4"/><path d="m217.209 287.249v47.116c-2.823 1.731-5.121 4.368-6.388 7.696-2.359 6.182-8.253 9.984-14.496 9.984-1.844 0-3.719-.33-5.543-1.03-.546-.206-1.092-.381-1.638-.525-1.298-.34-2.596-.505-3.895-.505-2.916 0-5.749.824-8.191 2.339l-11.045-14.888 11.045-32.29c1.03.165 2.061.433 3.07.824.587.227 1.175.412 1.772.556 1.247.319 2.514.474 3.771.474 6.244 0 12.137-3.802 14.496-9.984.082-.206.165-.412.258-.608 2.493-5.821 8.191-9.376 14.239-9.376.845.001 1.69.073 2.545.217z" fill="#808fa4"/><path d="m177.058 305.146v47.178c-2.782 1.731-5.049 4.348-6.305 7.645-.196.505-.402.989-.649 1.453-2.669 5.316-8.108 8.521-13.847 8.521-.309 0-.618-.01-.927-.031-1.535-.093-3.091-.412-4.605-.999-1.824-.701-3.699-1.03-5.543-1.03-6.244 0-12.137 3.802-14.496 9.984s-8.242 9.984-14.496 9.984c-1.834 0-3.709-.33-5.533-1.03-.68-.258-1.36-.474-2.05-.628v-43.695c5.038-1.02 9.458-4.523 11.426-9.674 2.359-6.182 8.253-9.984 14.496-9.984 1.844 0 3.709.33 5.533 1.03 1.824.701 3.709 1.03 5.553 1.03 1.113 0 2.226-.124 3.297-.361 2.895-.629 5.574-2.081 7.686-4.193 1.494-1.494 2.699-3.318 3.503-5.419 2.359-6.182 8.242-9.984 14.496-9.984.813-.003 1.637.058 2.461.203z" fill="#64768e"/><path d="m217.209 394.772v55.224c0 8.541-6.913 15.455-15.455 15.455h-24.696l-15.516-24.284 15.516-28.426c1.885-1.618 3.4-3.719 4.348-6.202 2.359-6.172 8.253-9.973 14.496-9.973 1.844 0 3.719.33 5.543 1.03 1.824.701 3.689 1.03 5.533 1.03 1.175 0 2.349-.134 3.472-.402h.01c2.494-.578 4.822-1.762 6.749-3.452z" fill="#808fa4"/><path d="m166.91 416.522c3.74 0 7.346-1.36 10.148-3.781v52.71h-52.999c-8.531 0-15.455-6.913-15.455-15.455v-15.877c3.802-1.968 8.397-2.37 12.704-.721 1.824.701 3.699 1.03 5.543 1.03 6.244 0 12.137-3.802 14.496-9.984s8.242-9.984 14.496-9.984c1.834 0 3.709.33 5.533 1.03 1.824.702 3.7 1.032 5.534 1.032z" fill="#64768e"/><path d="m403.396 351.612v98.384c0 8.541-6.924 15.455-15.455 15.455h-69.051l-55.132-93.686v-92.552c0-8.531 6.924-15.455 15.455-15.455h62.91z" fill="#808fa4"/><path d="m380.121 333.572-61.231 131.879h-39.677c-8.531 0-15.455-6.913-15.455-15.455v-78.231l77.572-53.699z" fill="#abb6c4"/><path d="m403.396 279.213v72.4c-7.058 3.359-14.95 5.234-23.275 5.234-3.534 0-6.996-.34-10.344-.989-17.34-3.338-31.744-14.929-38.956-30.518-3.215-6.924-5.007-14.651-5.007-22.79 0-15.197 6.244-28.941 16.31-38.791h45.818c8.53-.001 15.454 6.923 15.454 15.454z" fill="#c5ced6"/><g><g><ellipse cx="172.744" cy="147.233" fill="#fff" rx="30.72" ry="24.464"/><ellipse cx="339.256" cy="147.233" fill="#fff" rx="30.72" ry="24.464"/><path d="m285.787 117.781c-4.268 0-7.727 3.46-7.727 7.727 0 3.952-3.215 7.166-7.166 7.166s-7.166-3.215-7.166-7.166c0-4.268-3.46-7.727-7.727-7.727-4.268 0-7.727 3.46-7.727 7.727 0 3.952-3.215 7.166-7.166 7.166-3.952 0-7.166-3.215-7.166-7.166 0-4.268-3.46-7.727-7.727-7.727-4.268 0-7.727 3.46-7.727 7.727 0 12.473 10.148 22.621 22.621 22.621 5.701 0 10.911-2.124 14.894-5.616 3.982 3.492 9.193 5.616 14.894 5.616 12.473 0 22.621-10.148 22.621-22.621-.003-4.267-3.463-7.727-7.731-7.727z" fill="#495560"/></g><g><path d="m206.795 121.062c-4.268 0-7.727-3.46-7.727-7.727 0-3.559-2.896-6.454-6.455-6.454s-6.455 2.895-6.455 6.454c0 4.268-3.46 7.727-7.727 7.727-4.268 0-7.727-3.46-7.727-7.727 0-12.081 9.829-21.909 21.91-21.909s21.91 9.828 21.91 21.909c-.001 4.267-3.461 7.727-7.729 7.727z" fill="#495560"/></g><g><path d="m333.569 121.062c-4.268 0-7.727-3.46-7.727-7.727 0-3.559-2.896-6.454-6.455-6.454s-6.455 2.895-6.455 6.454c0 4.268-3.46 7.727-7.727 7.727-4.268 0-7.727-3.46-7.727-7.727 0-12.081 9.829-21.909 21.91-21.909s21.91 9.828 21.91 21.909c-.001 4.267-3.461 7.727-7.729 7.727z" fill="#495560"/></g></g></g></svg>',Gg=`<?xml version="1.0" encoding="UTF-8"?><svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 511.94 511.94" xml:space="preserve" width="512" height="512"><g><g><path style="fill: #e8ecf9" d="M444.21,67.5v376.94c0,33.14-26.87,60-60,60H127.73c-33.13,0-60-26.86-60-60V67.5&#10;&#9;&#9;&#9;c0-33.14,26.87-60,60-60h256.48C417.34,7.5,444.21,34.36,444.21,67.5z"/><path style="fill: #d7ddf5" d="M208.95,504.44h-81.22c-33.13,0-60-26.86-60-60V67.5c0-33.14,26.87-60,60-60h77.64&#10;&#9;&#9;&#9;c-10.96,3.32-26.02,12.08-26.02,35.19v424.02C179.35,492.41,198.62,501.44,208.95,504.44z"/><path style="fill: #c5ced6" d="M399.03,67.68v135.64c0,8.29-6.72,15-15,15H179.35l-50.04-21.09V76.2l50.04-23.52h204.68&#10;&#9;&#9;&#9;C392.31,52.68,399.03,59.39,399.03,67.68z"/><path style="fill: #abb6c4" d="M179.35,52.68v165.64h-51.44c-8.28,0-15-6.71-15-15V67.68c0-8.29,6.72-15,15-15H179.35z"/><path style="fill: #c5ced6" d="M218.32,278.5v7.8l-38.97,40.54l-8.55,8.9l-57.89,4.18l11.97-51.63l54.47-24.79h23.97&#10;&#9;&#9;&#9;C211.61,263.5,218.32,270.22,218.32,278.5z"/><path style="fill: #abb6c4" d="M127.91,263.5h51.44v63.34l-8.55,8.9l-57.89,4.18V278.5C112.91,270.22,119.63,263.5,127.91,263.5z"/><polygon style="fill: #c5ced6" points="218.32,332.03 218.32,390.66 179.35,432.82 175.27,437.23 112.91,428.85 121.23,408.1 &#10;&#9;&#9;&#9;112.91,382.33 162.16,332.03 &#9;&#9;"/><polygon style="fill: #abb6c4" points="179.35,332.03 179.35,432.82 175.27,437.23 112.91,428.85 112.91,382.33 162.16,332.03 &#9;&#9;&#10;&#9;&#9;&#9;"/><path style="fill: #808fa4" d="M218.32,286.3v45.73c-2.74,1.68-4.97,4.24-6.2,7.47c-2.29,6-8.01,9.69-14.07,9.69&#10;&#9;&#9;&#9;c-1.79,0-3.61-0.32-5.38-1c-0.53-0.2-1.06-0.37-1.59-0.51c-1.26-0.33-2.52-0.49-3.78-0.49c-2.83,0-5.58,0.8-7.95,2.27&#10;&#9;&#9;&#9;l-10.72-14.45l10.72-31.34c1,0.16,2,0.42,2.98,0.8c0.57,0.22,1.14,0.4,1.72,0.54c1.21,0.31,2.44,0.46,3.66,0.46&#10;&#9;&#9;&#9;c6.06,0,11.78-3.69,14.07-9.69c0.08-0.2,0.16-0.4,0.25-0.59c2.42-5.65,7.95-9.1,13.82-9.1&#10;&#9;&#9;&#9;C216.67,286.09,217.49,286.16,218.32,286.3z"/><path style="fill: #64768e" d="M179.35,303.67v45.79c-2.7,1.68-4.9,4.22-6.12,7.42c-0.19,0.49-0.39,0.96-0.63,1.41&#10;&#9;&#9;&#9;c-2.59,5.16-7.87,8.27-13.44,8.27c-0.3,0-0.6-0.01-0.9-0.03c-1.49-0.09-3-0.4-4.47-0.97c-1.77-0.68-3.59-1-5.38-1&#10;&#9;&#9;&#9;c-6.06,0-11.78,3.69-14.07,9.69s-8,9.69-14.07,9.69c-1.78,0-3.6-0.32-5.37-1c-0.66-0.25-1.32-0.46-1.99-0.61v-42.41&#10;&#9;&#9;&#9;c4.89-0.99,9.18-4.39,11.09-9.39c2.29-6,8.01-9.69,14.07-9.69c1.79,0,3.6,0.32,5.37,1c1.77,0.68,3.6,1,5.39,1&#10;&#9;&#9;&#9;c1.08,0,2.16-0.12,3.2-0.35c2.81-0.61,5.41-2.02,7.46-4.07c1.45-1.45,2.62-3.22,3.4-5.26c2.29-6,8-9.69,14.07-9.69&#10;&#9;&#9;&#9;C177.75,303.47,178.55,303.53,179.35,303.67z"/><path style="fill: #808fa4" d="M218.32,390.66v53.6c0,8.29-6.71,15-15,15h-23.97l-15.06-23.57l15.06-27.59&#10;&#9;&#9;&#9;c1.83-1.57,3.3-3.61,4.22-6.02c2.29-5.99,8.01-9.68,14.07-9.68c1.79,0,3.61,0.32,5.38,1c1.77,0.68,3.58,1,5.37,1&#10;&#9;&#9;&#9;c1.14,0,2.28-0.13,3.37-0.39h0.01C214.19,393.45,216.45,392.3,218.32,390.66z"/><path style="fill: #64768e" d="M169.5,411.77c3.63,0,7.13-1.32,9.85-3.67v51.16h-51.44c-8.28,0-15-6.71-15-15v-15.41&#10;&#9;&#9;&#9;c3.69-1.91,8.15-2.3,12.33-0.7c1.77,0.68,3.59,1,5.38,1c6.06,0,11.78-3.69,14.07-9.69c2.29-6,8-9.69,14.07-9.69&#10;&#9;&#9;&#9;c1.78,0,3.6,0.32,5.37,1C165.9,411.45,167.72,411.77,169.5,411.77z"/><path style="fill: #808fa4" d="M399.03,348.77v95.49c0,8.29-6.72,15-15,15h-67.02l-53.51-90.93V278.5c0-8.28,6.72-15,15-15h61.06&#10;&#9;&#9;&#9;L399.03,348.77z"/><path style="fill: #abb6c4" d="M376.44,331.26l-59.43,128H278.5c-8.28,0-15-6.71-15-15v-75.93l75.29-52.12L376.44,331.26z"/><path style="fill: #c5ced6" d="M399.03,278.5v70.27c-6.85,3.26-14.51,5.08-22.59,5.08c-3.43,0-6.79-0.33-10.04-0.96&#10;&#9;&#9;&#9;c-16.83-3.24-30.81-14.49-37.81-29.62c-3.12-6.72-4.86-14.22-4.86-22.12c0-14.75,6.06-28.09,15.83-37.65h44.47&#10;&#9;&#9;&#9;C392.31,263.5,399.03,270.22,399.03,278.5z"/><g><g><ellipse style="fill: #ffffff" cx="175.162" cy="150.402" rx="29.816" ry="23.744"/><ellipse style="fill: #ffffff" cx="336.778" cy="150.402" rx="29.816" ry="23.744"/></g></g></g><g><path style="\r
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
          " d="&#10;&#9;&#9;&#9;&#9;M303.727,117.501c0-7.602,6.163-13.765,13.765-13.765c7.602,0,13.765,6.163,13.765,13.765"/></g></g></g></svg>`,Wg='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-palette" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 21a9 9 0 0 1 0 -18c4.97 0 9 3.582 9 8c0 1.06 -.474 2.078 -1.318 2.828c-.844 .75 -1.989 1.172 -3.182 1.172h-2.5a2 2 0 0 0 -1 3.75a1.3 1.3 0 0 1 -1 2.25"/><path d="M8.5 10.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"/><path d="M12.5 7.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"/><path d="M16.5 10.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"/></svg>',Ug='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-pencil" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4"/><path d="M13.5 6.5l4 4"/></svg>',Vg='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-pencil-cog"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4"/><path d="M13.5 6.5l4 4"/><path d="M19.001 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"/><path d="M19.001 15.5v1.5"/><path d="M19.001 21v1.5"/><path d="M22.032 17.25l-1.299 .75"/><path d="M17.27 20l-1.3 .75"/><path d="M15.97 17.25l1.3 .75"/><path d="M20.733 20l1.3 .75"/></svg>',qg='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-photo" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 8h.01"/><path d="M3 6a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3v-12z"/><path d="M3 16l5 -5c.928 -.893 2.072 -.893 3 0l5 5"/><path d="M14 14l1 -1c.928 -.893 2.072 -.893 3 0l3 3"/></svg>',Zg='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-photo-off" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 8h.01"/><path d="M7 3h11a3 3 0 0 1 3 3v11m-.856 3.099a2.991 2.991 0 0 1 -2.144 .901h-12a3 3 0 0 1 -3 -3v-12c0 -.845 .349 -1.608 .91 -2.153"/><path d="M3 16l5 -5c.928 -.893 2.072 -.893 3 0l5 5"/><path d="M16.33 12.338c.574 -.054 1.155 .166 1.67 .662l3 3"/><path d="M3 3l18 18" color="orange"/></svg>',jg='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-pin"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 4.5l-4 4l-4 1.5l-1.5 1.5l7 7l1.5 -1.5l1.5 -4l4 -4"/><path d="M9 15l-4.5 4.5"/><path d="M14.5 4l5.5 5.5"/></svg>',Kg='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-player-pause" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 5m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v12a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z"/><path d="M14 5m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v12a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z"/></svg>',Yg='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-player-play" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 4v16l13 -8z"/></svg>',Xg='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-refresh" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4"/><path d="M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4"/></svg>',Jg='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-settings" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z"/><path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"/></svg>',Qg='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-settings-off"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9.451 5.437c.418 -.218 .75 -.609 .874 -1.12c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35c-.486 .118 -.894 .44 -1.123 .878m-.188 3.803c-.517 .523 -1.349 .734 -2.125 .262a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.472 -.774 -.262 -1.604 .259 -2.121"/><path d="M9.889 9.869a3 3 0 1 0 4.226 4.26m.592 -3.424a3.012 3.012 0 0 0 -1.419 -1.415"/><path d="M3 3l18 18"/></svg>',e5='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-spacing-horizontal"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M20 20h-2a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h2"/><path d="M4 20h2a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2"/><path d="M12 8v8"/></svg>',t5='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-spacing-vertical" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 20v-2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v2"/><path d="M4 4v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2"/><path d="M16 12h-8"/></svg>',r5='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-sun" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"/><path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7"/></svg>',n5='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-trash" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 7l16 0"/><path d="M10 11l0 6"/><path d="M14 11l0 6"/><path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"/><path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"/></svg>',o5='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-world-cog"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M21 12a9 9 0 1 0 -8.979 9"/><path d="M3.6 9h16.8"/><path d="M3.6 15h8.9"/><path d="M11.5 3a17 17 0 0 0 0 18"/><path d="M12.5 3a16.992 16.992 0 0 1 2.522 10.376"/><path d="M19.001 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"/><path d="M19.001 15.5v1.5"/><path d="M19.001 21v1.5"/><path d="M22.032 17.25l-1.299 .75"/><path d="M17.27 20l-1.3 .75"/><path d="M15.97 17.25l1.3 .75"/><path d="M20.733 20l1.3 .75"/></svg>',i5='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-x" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 6l-12 12"/><path d="M6 6l12 12"/></svg>',a5='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-zoom"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"/><path d="M21 21l-6 -6"/></svg>',s5='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-zoom-cancel" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"/><path d="M8 8l4 4"/><path d="M12 8l-4 4"/><path d="M21 21l-6 -6"/></svg>',l5='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-zoom-in" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"/><path d="M7 10l6 0"/><path d="M10 7l0 6"/><path d="M21 21l-6 -6"/></svg>',c5='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-zoom-in-area" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 13v4"/><path d="M13 15h4"/><path d="M15 15m-5 0a5 5 0 1 0 10 0a5 5 0 1 0 -10 0"/><path d="M22 22l-3 -3"/><path d="M6 18h-1a2 2 0 0 1 -2 -2v-1"/><path d="M3 11v-1"/><path d="M3 6v-1a2 2 0 0 1 2 -2h1"/><path d="M10 3h1"/><path d="M15 3h1a2 2 0 0 1 2 2v1"/></svg>',u5='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-zoom-out" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"/><path d="M7 10l6 0"/><path d="M21 21l-6 -6"/></svg>',d5='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-zoom-out-area" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M13 15h4"/><path d="M15 15m-5 0a5 5 0 1 0 10 0a5 5 0 1 0 -10 0"/><path d="M22 22l-3 -3"/><path d="M6 18h-1a2 2 0 0 1 -2 -2v-1"/><path d="M3 11v-1"/><path d="M3 6v-1a2 2 0 0 1 2 -2h1"/><path d="M10 3h1"/><path d="M15 3h1a2 2 0 0 1 2 2v1"/></svg>',h5='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-zoom-pan" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"/><path d="M17 17l-2.5 -2.5"/><path d="M10 5l2 -2l2 2"/><path d="M19 10l2 2l-2 2"/><path d="M5 10l-2 2l2 2"/><path d="M10 19l2 2l2 -2"/></svg>',f5=sn({IconAdjustmentsHorizontal:()=>Am,IconAlertCircle:()=>Mm,IconApiBook:()=>xm,IconArrowAutofitDown:()=>Im,IconArrowAutofitHeight:()=>Cm,IconArrowAutofitLeft:()=>Om,IconArrowAutofitRight:()=>Tm,IconArrowAutofitWidth:()=>Lm,IconArrowBigLeft:()=>Rm,IconArrowBigRight:()=>Pm,IconArrowsHorizontal:()=>$m,IconArrowsLeftRight:()=>Dm,IconArrowsMove:()=>zm,IconArrowsMoveVertical:()=>Nm,IconArrowsVertical:()=>Bm,IconBook:()=>Hm,IconBookArrowLeft:()=>Fm,IconBookArrowRight:()=>Gm,IconBookOff:()=>Wm,IconBookUpload:()=>Um,IconBookmark:()=>Vm,IconBookmarkOff:()=>qm,IconBookmarks:()=>Zm,IconBooksReturn:()=>jm,IconBoxAlignTop:()=>Km,IconCategory:()=>rg,IconCheck:()=>ng,IconChevronLeft:()=>og,IconChevronRight:()=>ig,IconCircleCheck:()=>ag,IconCircleX:()=>sg,IconComic1:()=>Xm,IconComic1Flat:()=>Ym,IconComic2:()=>Qm,IconComic2Flat:()=>Jm,IconComic3:()=>tg,IconComic3Flat:()=>eg,IconDeviceDesktop:()=>lg,IconDeviceFloppy:()=>cg,IconDeviceMobile:()=>ug,IconDeviceTablet:()=>dg,IconDotsVertical:()=>hg,IconEReader1:()=>pg,IconEReader1Flat:()=>fg,IconEReader2:()=>gg,IconEReader2Flat:()=>mg,IconExternalLink:()=>vg,IconEye:()=>bg,IconEyeOff:()=>wg,IconFileDownload:()=>_g,IconFilePercent:()=>yg,IconFolderOpen:()=>kg,IconHandClick:()=>Eg,IconHelp:()=>Sg,IconInfoCircle:()=>Ag,IconKeyboard:()=>Mg,IconLayoutBottombar:()=>xg,IconLayoutBottombarInactive:()=>Ig,IconLayoutDashboard:()=>Cg,IconLayoutSidebar:()=>Og,IconLayoutSidebarInactive:()=>Tg,IconLayoutSidebarRight:()=>Lg,IconLayoutSidebarRightInactive:()=>Rg,IconListNumbers:()=>Pg,IconLoader2:()=>$g,IconLocationCog:()=>Dg,IconMenu2:()=>zg,IconMenuDeep:()=>Ng,IconMessage:()=>Bg,IconMoon:()=>Hg,IconPage:()=>Gg,IconPageFlat:()=>Fg,IconPalette:()=>Wg,IconPencil:()=>Ug,IconPencilCog:()=>Vg,IconPhoto:()=>qg,IconPhotoOff:()=>Zg,IconPin:()=>jg,IconPlayerPause:()=>Kg,IconPlayerPlay:()=>Yg,IconRefresh:()=>Xg,IconSettings:()=>Jg,IconSettingsOff:()=>Qg,IconSpacingHorizontal:()=>e5,IconSpacingVertical:()=>t5,IconSun:()=>r5,IconTrash:()=>n5,IconWorldCog:()=>o5,IconX:()=>i5,IconZoom:()=>a5,IconZoomCancel:()=>s5,IconZoomIn:()=>l5,IconZoomInArea:()=>c5,IconZoomOut:()=>u5,IconZoomOutArea:()=>d5,IconZoomPan:()=>h5}),bl=sn({IconAdjustmentsHorizontal:()=>_5,IconAlertCircle:()=>j5,IconApiBook:()=>y5,IconArrowAutofitDown:()=>S5,IconArrowAutofitHeight:()=>A5,IconArrowAutofitLeft:()=>M5,IconArrowAutofitRight:()=>x5,IconArrowAutofitWidth:()=>I5,IconArrowBigLeft:()=>C5,IconArrowBigRight:()=>O5,IconArrowsHorizontal:()=>k5,IconArrowsLeftRight:()=>E5,IconArrowsMove:()=>T5,IconArrowsMoveVertical:()=>L5,IconArrowsVertical:()=>R5,IconBook:()=>P5,IconBookArrowLeft:()=>D5,IconBookArrowRight:()=>z5,IconBookOff:()=>$5,IconBookUpload:()=>B5,IconBookmark:()=>H5,IconBookmarkOff:()=>F5,IconBookmarks:()=>G5,IconBooksReturn:()=>N5,IconBoxAlignTop:()=>W5,IconCategory:()=>U5,IconCheck:()=>V5,IconChevronLeft:()=>q5,IconChevronRight:()=>Z5,IconCircleCheck:()=>K5,IconCircleX:()=>Y5,IconComic1:()=>Q5,IconComic1Flat:()=>ev,IconComic2:()=>tv,IconComic2Flat:()=>rv,IconComic3:()=>nv,IconComic3Flat:()=>ov,IconDeviceDesktop:()=>iv,IconDeviceFloppy:()=>av,IconDeviceMobile:()=>sv,IconDeviceTablet:()=>lv,IconDotsVertical:()=>cv,IconEReader1:()=>uv,IconEReader1Flat:()=>dv,IconEReader2:()=>hv,IconEReader2Flat:()=>fv,IconExternalLink:()=>pv,IconEye:()=>mv,IconEyeOff:()=>gv,IconFileDownload:()=>vv,IconFilePercent:()=>bv,IconFolderOpen:()=>wv,IconHandClick:()=>_v,IconHelp:()=>X5,IconInfoCircle:()=>J5,IconKeyboard:()=>yv,IconLayoutBottombar:()=>Ev,IconLayoutBottombarInactive:()=>Sv,IconLayoutDashboard:()=>kv,IconLayoutSidebar:()=>Av,IconLayoutSidebarInactive:()=>Mv,IconLayoutSidebarRight:()=>xv,IconLayoutSidebarRightInactive:()=>Iv,IconListNumbers:()=>Cv,IconLoader2:()=>Ov,IconLocationCog:()=>Tv,IconMenu2:()=>Lv,IconMenuDeep:()=>Rv,IconMessage:()=>Pv,IconMoon:()=>$v,IconPage:()=>Dv,IconPageFlat:()=>zv,IconPalette:()=>Nv,IconPencil:()=>Bv,IconPencilCog:()=>Hv,IconPhoto:()=>wl,IconPhotoOff:()=>_l,IconPin:()=>Fv,IconPlayerPause:()=>Gv,IconPlayerPlay:()=>Wv,IconRefresh:()=>Uv,IconSettings:()=>Vv,IconSettingsOff:()=>qv,IconSpacingHorizontal:()=>Zv,IconSpacingVertical:()=>jv,IconSun:()=>Kv,IconTrash:()=>Yv,IconWorldCog:()=>Xv,IconX:()=>Jv,IconZoom:()=>Qv,IconZoomCancel:()=>e4,IconZoomIn:()=>t4,IconZoomInArea:()=>r4,IconZoomOut:()=>n4,IconZoomOutArea:()=>o4,IconZoomPan:()=>i4});function p5(e){return[...e.matchAll(/([^{}]+)\s*\{([^}]+)\}/g)].map(t=>{const n=t[1].trim(),o=t[2],a=/color:\s*([^;]+)/.exec(o);if(a){const s=a[1].trim();return{selectors:n.split(",").map(c=>c.trim().replace(/\s\s+/g," ")),color:s}}return null}).filter(t=>t!==null)}var m5=p5(Sm),Sa=new Map;for(const e of m5)for(const t of e.selectors){const n=t.match(/^\s*\.([^ ]+)\s*(.*)$/);if(!n)continue;const[,o,a]=n;let s=a.trim();s.startsWith(">")&&(s=s.substring(1).trim()),s===""&&(s="*"),Sa.has(o)||Sa.set(o,[]),Sa.get(o)?.push({subSelector:s,color:e.color})}var g5=new DOMParser,v5=new XMLSerializer;function b5(e,t){const n=Sa.get(t);if(!n?.length)return e;const o=g5.parseFromString(e,"image/svg+xml").documentElement;if(o.querySelector("parsererror"))return console.error(`Error parsing SVG for ${t}`),e;for(const{subSelector:a,color:s}of n)try{o.querySelectorAll(a).forEach(c=>{c.setAttribute("stroke",s)})}catch(c){console.error(`Invalid selector "${a}" for ${t}`,c)}return v5.serializeToString(o)}var w5=xe.default.mapValues(f5,(e,t)=>b5(e,`icon-tabler-${xe.default.kebabCase(t.replace(/^Icon/,""))}`)),{IconAdjustmentsHorizontal:_5,IconApiBook:y5,IconArrowsHorizontal:k5,IconArrowsLeftRight:E5,IconArrowAutofitDown:S5,IconArrowAutofitHeight:A5,IconArrowAutofitLeft:M5,IconArrowAutofitRight:x5,IconArrowAutofitWidth:I5,IconArrowBigLeft:C5,IconArrowBigRight:O5,IconArrowsMove:T5,IconArrowsMoveVertical:L5,IconArrowsVertical:R5,IconBook:P5,IconBookOff:$5,IconBookArrowLeft:D5,IconBookArrowRight:z5,IconBooksReturn:N5,IconBookUpload:B5,IconBookmark:H5,IconBookmarkOff:F5,IconBookmarks:G5,IconBoxAlignTop:W5,IconCategory:U5,IconCheck:V5,IconChevronLeft:q5,IconChevronRight:Z5,IconAlertCircle:j5,IconCircleCheck:K5,IconCircleX:Y5,IconHelp:X5,IconInfoCircle:J5,IconComic1:Q5,IconComic1Flat:ev,IconComic2:tv,IconComic2Flat:rv,IconComic3:nv,IconComic3Flat:ov,IconDeviceDesktop:iv,IconDeviceFloppy:av,IconDeviceMobile:sv,IconDeviceTablet:lv,IconDotsVertical:cv,IconEReader1:uv,IconEReader1Flat:dv,IconEReader2:hv,IconEReader2Flat:fv,IconExternalLink:pv,IconEye:mv,IconEyeOff:gv,IconFileDownload:vv,IconFilePercent:bv,IconFolderOpen:wv,IconHandClick:_v,IconKeyboard:yv,IconLayoutDashboard:kv,IconLayoutBottombar:Ev,IconLayoutBottombarInactive:Sv,IconLayoutSidebar:Av,IconLayoutSidebarInactive:Mv,IconLayoutSidebarRight:xv,IconLayoutSidebarRightInactive:Iv,IconListNumbers:Cv,IconLoader2:Ov,IconLocationCog:Tv,IconMenu2:Lv,IconMenuDeep:Rv,IconMessage:Pv,IconMoon:$v,IconPage:Dv,IconPageFlat:zv,IconPalette:Nv,IconPencil:Bv,IconPencilCog:Hv,IconPhoto:wl,IconPhotoOff:_l,IconPin:Fv,IconPlayerPause:Gv,IconPlayerPlay:Wv,IconRefresh:Uv,IconSettings:Vv,IconSettingsOff:qv,IconSpacingHorizontal:Zv,IconSpacingVertical:jv,IconSun:Kv,IconTrash:Yv,IconWorldCog:Xv,IconX:Jv,IconZoom:Qv,IconZoomCancel:e4,IconZoomIn:t4,IconZoomInArea:r4,IconZoomOut:n4,IconZoomOutArea:o4,IconZoomPan:i4}=w5;function z(e,t,n,o){var a=arguments.length,s=a<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,n):o,c;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(e,t,n,o);else for(var l=e.length-1;l>=0;l--)(c=e[l])&&(s=(a<3?c(s):a>3?c(t,n,s):c(t,n))||s);return a>3&&s&&Object.defineProperty(t,n,s),s}var ro=class extends rt{constructor(...t){super(...t),this.name="",this.variant="regular",this.family="classic",this.label="",this.size=""}static{this.styles=Et`
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
  `}updated(t){if(super.updated(t),t.has("name")){const n=$d(this.name);bl[n]?(this.dispatchEvent(new CustomEvent("load",{bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent("wa-load",{bubbles:!0,composed:!0}))):(this.dispatchEvent(new CustomEvent("error",{bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent("wa-error",{bubbles:!0,composed:!0})))}}render(){const t=$d(this.name),n=bl[t];if(!n)return He;const o=this.size?`--mov-icon-size: ${this.size};`:"";return ne`<span
      role=${this.label?"img":He}
      aria-label=${this.label||He}
      aria-hidden=${this.label?He:"true"}
      style=${o}
      >${Pd(n)}</span
    >`}};z([K({type:String})],ro.prototype,"name",void 0),z([K({type:String,reflect:!0})],ro.prototype,"variant",void 0),z([K({type:String,reflect:!0})],ro.prototype,"family",void 0),z([K({type:String})],ro.prototype,"label",void 0),z([K({type:String})],ro.prototype,"size",void 0),ro=z([ct("mov-icon")],ro);var a4=(e,...t)=>t.length===0?e[0]:String.raw({raw:e},...t),Mo=a4;function s4(e,t){const n=document.createElement("style");return n.id=e,n.appendChild(document.createTextNode(t)),n}function Dd(e,t){document.querySelector(`#${e}`)||(document.head??document.querySelector("head")).appendChild(s4(e,t))}function l4(e){document.querySelectorAll(`style[id="${e}"]`).forEach(t=>{t.remove()})}function c4(e,t){l4(e),Dd(e,t)}function u4(e,t){return Mo`
    <style id="${e}">
      ${t}
    </style>
  `}var Aa=".mov-toast-stack{z-index:2000;pointer-events:none;flex-direction:column;gap:.5rem;width:350px;max-width:100vw;max-height:100vh;padding:1rem;display:flex;position:fixed;overflow:hidden}.mov-toast-stack-top-start{top:0;left:0}.mov-toast-stack-top-center{align-items:center;top:0;left:50%;transform:translate(-50%)}.mov-toast-stack-top-end{top:0;right:0}.mov-toast-stack-bottom-start{flex-direction:column-reverse;bottom:0;left:0}.mov-toast-stack-bottom-center{flex-direction:column-reverse;align-items:center;bottom:0;left:50%;transform:translate(-50%)}.mov-toast-stack-bottom-end{flex-direction:column-reverse;bottom:0;right:0}:host{width:100%;display:block}.mov-toast{pointer-events:auto;background-color:var(--theme-background-color);color:var(--theme-text-color);border:1px solid var(--theme-border-color);opacity:0;visibility:hidden;border-radius:.5rem;flex-direction:column;width:100%;transition:transform .3s cubic-bezier(.4,0,.2,1),opacity .3s cubic-bezier(.4,0,.2,1),visibility .3s cubic-bezier(.4,0,.2,1);display:flex;overflow:hidden;box-shadow:0 4px 12px #00000026}:host([placement$=-end]) .mov-toast{transform:translate(110%)}:host([placement$=-start]) .mov-toast{transform:translate(-110%)}:host([placement=top-center]) .mov-toast{transform:translateY(-110%)}:host([placement=bottom-center]) .mov-toast{transform:translateY(110%)}:host([open]) .mov-toast{opacity:1;visibility:visible;transform:translate(0)}.mov-toast-body{align-items:flex-start;gap:.75rem;padding:.75rem 1rem;display:flex}.mov-toast-icon{flex-shrink:0;justify-content:center;align-items:center;margin-top:.125rem;font-size:20px;display:flex}.mov-toast-icon mov-icon{--mov-icon-size:1.25rem}.mov-toast-content{flex-direction:column;flex-grow:1;gap:.125rem;display:flex}.mov-toast-title{font-size:14px;font-weight:600;line-height:1.25}.mov-toast-description{opacity:.8;font-size:13px;line-height:1.4}.mov-toast-close{cursor:pointer;color:inherit;opacity:.5;background:0 0;border:none;flex-shrink:0;justify-content:center;align-items:center;margin-right:-.25rem;padding:.25rem;transition:opacity .2s;display:flex}.mov-toast-close:hover{opacity:1}.mov-toast-variant-primary .mov-toast-icon{color:var(--mov-color-fill-loud)}.mov-toast-variant-success .mov-toast-icon{color:#28a745}.mov-toast-variant-warning .mov-toast-icon{color:#ffc107}.mov-toast-variant-danger .mov-toast-icon{color:#dc3545}.mov-toast-variant-neutral .mov-toast-icon{color:var(--theme-text-color)}.mov-toast-variant-primary{border-left:4px solid var(--mov-color-fill-loud)}.mov-toast-variant-success{border-left:4px solid #28a745}.mov-toast-variant-warning{border-left:4px solid #ffc107}.mov-toast-variant-danger{border-left:4px solid #dc3545}.mov-toast-variant-neutral{border-left:4px solid var(--theme-border-color)}",Xr=class extends rt{constructor(...t){super(...t),this.open=!1,this.variant="primary",this.duration=3e3,this.closable=!1,this.title="",this.description="",this.placement="bottom-end"}static{this.styles=[Me(Aa)]}async show(){if(!this.open)return await this.updateComplete,this.dispatchEvent(new CustomEvent("wa-show",{bubbles:!0,composed:!0})),this.open=!0,this.duration<1/0&&(this.autoHideTimeout=window.setTimeout(()=>this.hide(),this.duration)),new Promise(t=>{setTimeout(()=>{this.dispatchEvent(new CustomEvent("wa-after-show",{bubbles:!0,composed:!0})),t()},300)})}async hide(){if(this.open)return window.clearTimeout(this.autoHideTimeout),this.dispatchEvent(new CustomEvent("wa-hide",{bubbles:!0,composed:!0})),this.open=!1,new Promise(t=>{setTimeout(()=>{this.dispatchEvent(new CustomEvent("wa-after-hide",{bubbles:!0,composed:!0})),this.remove(),t()},300)})}handleCloseClick(){this.hide()}getDefaultIcon(){if(this.icon)return this.icon;switch(this.variant){case"success":return"IconCircleCheck";case"warning":return"IconAlertCircle";case"danger":return"IconCircleX";default:return"IconInfoCircle"}}render(){return ne`
      <div
        part="base"
        class=${St({"mov-toast":!0,[`mov-toast-variant-${this.variant}`]:!0})}
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
            ${this.title?ne`<div class="mov-toast-title" part="title">${this.title}</div>`:""}
            <div class="mov-toast-description" part="description">
              <slot>${this.description}</slot>
            </div>
          </div>

          <slot name="action"></slot>

          ${this.closable?ne`
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
    `}};z([K({type:Boolean,reflect:!0})],Xr.prototype,"open",void 0),z([K({reflect:!0})],Xr.prototype,"variant",void 0),z([K({type:Number})],Xr.prototype,"duration",void 0),z([K({type:Boolean})],Xr.prototype,"closable",void 0),z([K()],Xr.prototype,"title",void 0),z([K()],Xr.prototype,"description",void 0),z([K()],Xr.prototype,"icon",void 0),z([K({reflect:!0})],Xr.prototype,"placement",void 0),Xr=z([ct("mov-toast")],Xr);var dr=e=>{const t=e.placement||"bottom-end",n=`mov-toast-stack-${t}`;let o=document.querySelector(`.mov-toast-stack.${n}`);const a=Aa.indexOf(":host"),s=a>-1?Aa.substring(0,a).trim():Aa;Dd("mov-toast-stack-styles",s),o||(o=document.createElement("div"),o.className=`mov-toast-stack ${n}`,document.body.appendChild(o));const c=document.createElement("mov-toast");let l=e.variant||"primary";return l==="info"&&(l="primary"),l==="error"&&(l="danger"),c.variant=l,c.title=e.title||"",c.description=e.description||e.message||"",c.duration=e.duration??3e3,c.closable=e.closable??!0,c.placement=t,e.icon&&(c.icon=e.icon),o.appendChild(c),requestAnimationFrame(()=>{c.show()}),c};dr.info=e=>dr({...e,variant:"primary"}),dr.success=e=>dr({...e,variant:"success"}),dr.warning=e=>dr({...e,variant:"warning"}),dr.error=e=>dr({...e,variant:"danger"});var yi=(e,t)=>{const n=(o,a)=>xe.default.transform(o,(s,c,l)=>{xe.default.isEqual(c,a[l])||(xe.default.isObject(c)&&xe.default.isObject(a[l])&&!xe.default.isArray(c)?s[l]=n(c,a[l]):s[l]=c)});return n(e,t)},d4={bookmarks:[],colorScheme:"dark",deviceMode:"auto",downloadZip:!1,enabled:!1,fitWidthIfOversize:!0,header:"scroll",hidePageControls:!1,lazyLoadImages:!1,lazyStart:50,loadMode:"wait",locale:"en_US",maxReload:5,minZoom:30,navbar:"bottom",pagination:"disabled",scrollHeight:25,theme:"#29487D",loadSpeed:"Extreme",viewMode:"WebComic",zoomMode:"percent",zoomStep:30,zoomValue:100,keybinds:{SCROLL_UP:["up","W","num_8"],SCROLL_DOWN:["down","S","num_2"],NEXT_CHAPTER:["right","/","D","num_6"],PREVIOUS_CHAPTER:["left",";","A","num_4"],RETURN_CHAPTER_LIST:["backspace","del","num_decimal"],ENLARGE:["-","num_add","E"],REDUCE:["=","num_subtract","Q"],RESTORE:["9","num_divide","R"],FIT_WIDTH:["0","num_multiply","F"],FIT_HEIGHT:["H","num_0"],SETTINGS:["num_divide","num_5","X"],VIEW_MODE_WEBCOMIC:["C"],VIEW_MODE_VERTICAL:["V"],VIEW_MODE_LEFT:["N"],VIEW_MODE_RIGHT:["B"],VIEW_MODE_GALLERY:["G"],SCROLL_START:["space"],INCREASE_SPEED:["."],DECREASE_SPEED:[","],TOGGLE_CONTROLS:["L"]}},h4={lazyLoadImages:!0,fitWidthIfOversize:!0,navbar:"disabled",viewMode:"WebComic",header:"scroll",hidePageControls:!0,pagination:"disabled"},f4={loadSpeed:"All",lazyLoadImages:!1,downloadZip:!1,theme:"oklch(44.6% 0.043 257.281)"};function Wr(e=!0){const t={...d4,theme:e?"#29487D":"#004526"};let n=Lp()?xe.default.defaultsDeep(h4,t):t;return Qs()&&(n=xe.default.defaultsDeep(f4,n)),n}function p4(e,t){if(Array.isArray(e)&&Array.isArray(t)){if(e.length!==t.length)return!1;const n=s=>`${s.url}-${s.date}`,o=[...e].sort((s,c)=>n(s).localeCompare(n(c))),a=[...t].sort((s,c)=>n(s).localeCompare(n(c)));return xe.default.isEqual(o,a)}}function m4(e,t){if(e&&typeof e=="object"&&t&&typeof t=="object"){const n=e,o=t,a=xe.default.keys(n).sort((c,l)=>c.localeCompare(l)),s=xe.default.keys(o).sort((c,l)=>c.localeCompare(l));if(!xe.default.isEqual(a,s))return!1;for(const c of a){const l=n[c]?[...n[c]].sort((h,p)=>h.localeCompare(p)):[],f=o[c]?[...o[c]].sort((h,p)=>h.localeCompare(p)):[];if(!xe.default.isEqual(l,f))return!1}return!0}}function zd(e,t,n){if(n==="bookmarks")return p4(e,t);if(n==="keybinds")return m4(e,t)}function Ma(e,t,n){if(e===t)return!1;if(n){const o={[n]:e},a={[n]:t};return!xe.default.isEqualWith(o,a,zd)}return!xe.default.isEqualWith(e,t,zd)}var tr=xe.default.defaultsDeep(xp(Wr()),Wr()),rr=xe.default.defaultsDeep(Ip(Wr(!1)),Wr(!1)),no=()=>rr?.enabled===!0,yl=e=>no()&&!["locale","bookmarks","keybinds"].includes(e),Tt=id(no()?{...rr,locale:tr.locale,keybinds:tr.keybinds,bookmarks:tr.bookmarks}:tr),xo=Vp(Tt,e=>So.find(t=>t.ID===e.locale)??So[1]);function kl(e=X("deviceMode")){return e==="auto"?da():e}var nr=id({autoScroll:!1,chapter:ul(),currentPage:0,device:kl(),manga:void 0,panel:"none",scrollToPage:void 0});function oo(e){if(e){const t=yl(e)?rr[e]:tr[e],n=Tt.get()?.[e];Ma(n,t,e)&&(Tt.setKey(e,t),Ee("Refreshed Settings",e,t));return}for(const t in Tt.get()){const n=Tt.get()[t],o=yl(t)?rr[t]:tr[t];Ma(n,o)&&Tt.setKey(t,o)}Ee("Refreshed All Settings")}function g4(e){const t=xe.default.defaultsDeep(e,Wr()),n=tr?yi(t,tr):t;if(!Ir(n)){Ee("Imported Global Settings",n),tr=t;for(const o in n)oo(o)}}nd(xe.default.debounce(g4,300),"settings");function v4(e){const t=xe.default.defaultsDeep(e,Wr(!1)),n=rr?yi(t,rr):t;if(!Ir(n)){Ee("Imported Local Settings",n),rr=t;for(const o in n)oo(o)}}nd(xe.default.debounce(v4,300),location.hostname);function X(e){return Tt.get()?.[e]}function Io(e,t){const n=Tt.get()?.[e];Ma(n,t,e)&&Tt.setKey(e,t)}function At(e,t){Ma(X(e),t,e)&&(Tt.setKey(e,t),yl(e)?(rr[e]=t,rd(yi(rr,Wr(!1)))):(tr[e]=t,Cp(yi(tr,Wr()))))}function Co(e,t){Io(e,t(X(e)))}function fe(e){return nr.get()[e]}function De(e,t){const n=nr.get()[e];xe.default.isEqual(n,t)||nr.setKey(e,t)}function Nd(e,t){const n=nr.get()[e],o=t(n);xe.default.isEqual(n,o)||nr.setKey(e,o)}function hr(e,t){Nd("images",n=>({...n,[e]:{...n?.[e],...t(n?.[e]??{})}}))}function Z(e){const t=So.find(n=>n.ID===X("locale"))??So[1];return dm(t,e)?t?.[e]??So[1]?.[e]:`##MISSING_STRING_${e}##`}function Bd(e=!1){return rr.enabled=e,rd(yi(rr,Wr(!1))),Ee("Local Settings ",e?"Enabled":"Disabled"),dr.info({title:"Changed Settings to",description:no()?"Local":"Global",duration:2e3}),no()}function b4(){no()?(Qu(location.hostname),rr=Wr(!1),Bd(!1)):(Qu("settings"),tr=Wr(),oo()),Ee("Settings Reset")}function Oo(e=location.href){return X("bookmarks").find(t=>t.url===e)?.page}function w4(e=null){jt("Current Settings (Local:",no(),") ",e?Tt.get()[e]:Tt.get(),`
Global Settings`,e?tr[e]:tr,`
Local Settings`,e?rr[e]:rr,`
AppState`,nr.get())}Ap("MOVSettings",w4);var _4=(e,t,n)=>{if(n&&!["bookmarks","zoomValue"].includes(n)){const o=t[n],a=e[n];dr.info({title:`${n} Changed`,description:`from ${JSON.stringify(o)} to ${JSON.stringify(a)}`,duration:2e3})}};Tt.listen(xe.default.debounce(_4,300));var fr=e=>e??He,y4=":host{--mov-font-size-scale:1;--mov-font-size-m:calc(16px * var(--mov-font-size-scale));--mov-font-size-s:round(calc(var(--mov-font-size-m) / 1.125), 1px);--mov-font-size-l:round(calc(var(--mov-font-size-m) * 1.125 * 1.125), 1px);--mov-border-width-s:.0625rem;--mov-border-radius-pill:9999px;--mov-transition-fast:75ms;--mov-font-weight-action:500;--mov-focus-ring:solid .1875rem var(--mov-color-fill-loud);--mov-focus-ring-offset:.0625rem;--mov-line-height-condensed:1.2;--mov-form-control-padding-block:.75em;--mov-form-control-padding-inline:1em;--mov-form-control-height:round(calc(2 * var(--mov-form-control-padding-block) + 1em * var(--mov-line-height-condensed)), 1px);display:inline-block}:host([size=small]){font-size:var(--mov-font-size-s)}:host([size=medium]){font-size:var(--mov-font-size-m)}:host([size=large]){font-size:var(--mov-font-size-l)}.button{box-sizing:border-box;user-select:none;white-space:nowrap;vertical-align:middle;transition-property:background,border,box-shadow,color;transition-duration:var(--mov-transition-fast);cursor:pointer;padding:0 var(--mov-form-control-padding-inline);font-family:inherit;font-size:inherit;font-weight:var(--mov-font-weight-action);line-height:calc(var(--mov-form-control-height) - var(--mov-border-width-s) * 2);height:var(--mov-form-control-height);border-radius:var(--mov-border-radius-m,.375rem);border-style:solid;border-width:var(--mov-border-width-s);background-color:var(--mov-color-fill-loud);color:var(--mov-color-on-loud);border-color:#0000;justify-content:center;align-items:center;text-decoration:none;display:inline-flex}:host([appearance~=plain]){& .button{color:var(--mov-color-on-quiet);background-color:#0000;border-color:#0000}@media (hover:hover){& .button:not(.disabled):not(.loading):hover{color:var(--mov-color-on-quiet);background-color:var(--mov-color-fill-quiet)}}& .button:not(.disabled):not(.loading):active{color:var(--mov-color-on-quiet);background-color:color-mix(in oklab, var(--mov-color-fill-quiet), var(--mov-color-mix-active))}}:host([appearance~=outlined]){& .button{color:var(--mov-color-on-quiet);border-color:var(--mov-color-border-loud);background-color:#0000}@media (hover:hover){& .button:not(.disabled):not(.loading):hover{color:var(--mov-color-on-quiet);background-color:var(--mov-color-fill-quiet)}}& .button:not(.disabled):not(.loading):active{color:var(--mov-color-on-quiet);background-color:color-mix(in oklab, var(--mov-color-fill-quiet), var(--mov-color-mix-active))}}:host([appearance~=filled]){& .button{color:var(--mov-color-on-normal);background-color:var(--mov-color-fill-normal);border-color:#0000}@media (hover:hover){& .button:not(.disabled):not(.loading):hover{color:var(--mov-color-on-normal);background-color:color-mix(in oklab, var(--mov-color-fill-normal), var(--mov-color-mix-hover))}}& .button:not(.disabled):not(.loading):active{color:var(--mov-color-on-normal);background-color:color-mix(in oklab, var(--mov-color-fill-normal), var(--mov-color-mix-active))}}:host([appearance~=filled][appearance~=outlined]) .button{border-color:var(--mov-color-border-normal)}:host([appearance~=accent]){& .button{color:var(--mov-color-on-loud);background-color:var(--mov-color-fill-loud);border-color:#0000}@media (hover:hover){& .button:not(.disabled):not(.loading):hover{background-color:color-mix(in oklab, var(--mov-color-fill-loud), var(--mov-color-mix-hover))}}& .button:not(.disabled):not(.loading):active{background-color:color-mix(in oklab, var(--mov-color-fill-loud), var(--mov-color-mix-active))}}.button:focus{outline:none}.button:focus-visible{outline:var(--mov-focus-ring);outline-offset:var(--mov-focus-ring-offset)}.button.disabled{opacity:.5;cursor:not-allowed}.button.disabled *{pointer-events:none}.button.is-icon-button{outline-offset:2px;width:var(--mov-form-control-height);aspect-ratio:1}:host([pill]) .button{border-radius:var(--mov-border-radius-pill)}.start,.end{pointer-events:none;flex:none;align-items:center;display:flex}.label{display:inline-block}.is-icon-button .label{display:flex}mov-icon[part~=caret]{align-self:center;align-items:center;display:flex}mov-icon[part~=caret]::part(svg){width:.875em;height:.875em}.loading{cursor:wait;position:relative}.loading .start,.loading .label,.loading .end,.loading .caret{visibility:hidden}.spinner{--indicator-color:currentColor;--track-color:color-mix(in oklab, currentColor, transparent 90%);border:2px solid var(--track-color);border-top-color:var(--indicator-color);border-radius:50%;width:1em;height:1em;font-size:1em;animation:1s linear infinite spin;position:absolute;top:calc(50% - .5em);left:calc(50% - .5em)}@keyframes spin{to{transform:rotate(360deg)}}slot[name=start]::slotted(*){margin-inline-end:.75em}slot[name=end]::slotted(*),.button:not(.visually-hidden-label) [part~=caret]{margin-inline-start:.75em}",gt=class extends rt{constructor(...t){super(...t),this.isIconButton=!1,this.hasLabel=!1,this.hasStart=!1,this.hasEnd=!1,this.title="",this.appearance="accent",this.variant="brand",this.size="medium",this.withCaret=!1,this.disabled=!1,this.loading=!1,this.pill=!1,this.type="button"}static{this.styles=[Me(y4)]}handleClick(t){(this.disabled||this.loading)&&(t.preventDefault(),t.stopPropagation())}click(){this.button?.click()}focus(t){this.button?.focus(t)}blur(){this.button?.blur()}render(){const t=!!this.href,n={button:!0,"with-caret":this.withCaret,disabled:this.disabled,loading:this.loading,pill:this.pill,"has-label":this.hasLabel,"has-start":this.hasStart,"has-end":this.hasEnd,"is-icon-button":this.isIconButton},o=ne`
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
      ${this.withCaret?ne`<mov-icon
            part="caret"
            class="caret"
            name="IconChevronRight"
            style="transform: rotate(90deg)"
          ></mov-icon>`:""}
      ${this.loading?ne`<span
            part="spinner"
            class="spinner"
          ></span>`:""}
    `;return t?ne`
        <a
          part="base"
          class=${St(n)}
          href=${fr(this.href)}
          target=${fr(this.target)}
          title=${fr(this.title)}
          role="button"
          aria-disabled=${this.disabled?"true":"false"}
          tabindex=${this.disabled?"-1":"0"}
          download=${fr(this.download)}
          @click=${this.handleClick}
        >
          ${o}
        </a>
      `:ne`
        <button
          part="base"
          class=${St(n)}
          ?disabled=${this.disabled||this.loading}
          type=${fr(this.type)}
          title=${fr(this.title)}
          name=${fr(this.name)}
          value=${fr(this.value)}
          aria-disabled=${this.disabled?"true":"false"}
          tabindex=${this.disabled?"-1":"0"}
        >
          ${o}
        </button>
      `}handleLabelSlotChange(){const t=this.labelSlot?.assignedNodes({flatten:!0})??[],n=t.filter(c=>c.nodeType===Node.ELEMENT_NODE),o=t.filter(c=>c.nodeType===Node.TEXT_NODE&&c.textContent?.trim()!==""),a=c=>["wa-icon","mov-icon","svg"].includes(c.localName),s=n.some(a);this.isIconButton=o.length===0&&s}};z([An(".button")],gt.prototype,"button",void 0),z([An("slot:not([name])")],gt.prototype,"labelSlot",void 0),z([Ht()],gt.prototype,"isIconButton",void 0),z([Ht()],gt.prototype,"hasLabel",void 0),z([Ht()],gt.prototype,"hasStart",void 0),z([Ht()],gt.prototype,"hasEnd",void 0),z([K()],gt.prototype,"title",void 0),z([K({reflect:!0})],gt.prototype,"appearance",void 0),z([K({reflect:!0})],gt.prototype,"variant",void 0),z([K({reflect:!0})],gt.prototype,"size",void 0),z([K({attribute:"with-caret",type:Boolean,reflect:!0})],gt.prototype,"withCaret",void 0),z([K({type:Boolean,reflect:!0})],gt.prototype,"disabled",void 0),z([K({type:Boolean,reflect:!0})],gt.prototype,"loading",void 0),z([K({type:Boolean,reflect:!0})],gt.prototype,"pill",void 0),z([K()],gt.prototype,"type",void 0),z([K({reflect:!0})],gt.prototype,"name",void 0),z([K({reflect:!0})],gt.prototype,"value",void 0),z([K({reflect:!0})],gt.prototype,"href",void 0),z([K()],gt.prototype,"target",void 0),z([K({reflect:!0})],gt.prototype,"rel",void 0),z([K()],gt.prototype,"download",void 0),z([K({reflect:!0})],gt.prototype,"form",void 0),gt=z([ct("mov-button")],gt);var Cr=class extends rt{constructor(...t){super(...t),this.mode="burger",this.active=!1,this.label="",this.icon="",this.activeIcon="",this.appearance="accent",this.size="medium",this.disabled=!1,this.loading=!1}static{this.styles=Et`
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
  `}connectedCallback(){super.connectedCallback(),this.label||(this.label=this._getDefaultLabel())}render(){const t=this.active?this.activeLabel??this.label:this.label,n={"two-icon-mode":["custom","theme"].includes(this.mode),"single-icon-mode":["chevron","expand","play-pause"].includes(this.mode),"burger-mode-active":this.mode==="burger"};return ne`
      <mov-button
        @click=${this._onClick}
        .appearance=${fr(this.appearance)}
        .size=${fr(this.size)}
        ?disabled=${fr(this.disabled)}
        ?loading=${fr(this.loading)}
        .title=${fr(this.title)}
        class=${St(n)}
        title=${t}
        aria-label=${t}
        aria-pressed=${this.active?"true":"false"}
        icon-only
      >
        ${this._renderIcons()}
      </mov-button>
    `}_getDefaultLabel(){switch(this.mode){case"burger":return"Toggle menu";case"chevron":return"Toggle expand";case"theme":return"Toggle theme";case"play-pause":return"Toggle play";case"expand":return"Toggle expand";case"custom":return"Toggle";default:return"Toggle"}}_getIcons(){switch(this.mode){case"chevron":return{inactive:"chevron-right",active:"chevron-right"};case"theme":return{inactive:"moon",active:"sun"};case"play-pause":return{inactive:"player-play",active:"player-pause"};case"expand":return{inactive:"arrow-autofit-down",active:"arrow-autofit-down"};case"custom":return{inactive:this.icon,active:this.activeIcon};default:return{inactive:"",active:""}}}_renderIcons(){if(this.mode==="burger")return ne`
        <div class="burger-mode">
          <div class="burger-line"></div>
          <div class="burger-line"></div>
          <div class="burger-line"></div>
        </div>
      `;const t=this._getIcons();return t.inactive?this.mode==="chevron"?ne`<mov-icon
        class="chevron-icon"
        name=${t.inactive}
      ></mov-icon>`:this.mode==="expand"?ne`<mov-icon
        class="expand-icon"
        name=${t.inactive}
      ></mov-icon>`:this.mode==="play-pause"?ne`<mov-icon
        class="play-pause-icon"
        name=${this.active?t.active:t.inactive}
      ></mov-icon>`:ne`
      <mov-icon
        class="inactive-icon"
        name=${t.inactive}
      ></mov-icon>
      <mov-icon
        class="active-icon"
        name=${t.active}
      ></mov-icon>
    `:He}_onClick(){if(this.disabled||this.loading)return;const t=this.active;this.active=!this.active,this.dispatchEvent(new CustomEvent("toggle",{detail:{value:this.active,oldValue:t,mode:this.mode},bubbles:!0,composed:!0}))}toggle(){this._onClick()}setActive(t){this.active=t}};z([K({type:String})],Cr.prototype,"mode",void 0),z([K({type:Boolean,reflect:!0})],Cr.prototype,"active",void 0),z([K({type:String})],Cr.prototype,"label",void 0),z([K({type:String})],Cr.prototype,"activeLabel",void 0),z([K({type:String})],Cr.prototype,"icon",void 0),z([K({type:String})],Cr.prototype,"activeIcon",void 0),z([K({type:String,reflect:!0})],Cr.prototype,"appearance",void 0),z([K({type:String,reflect:!0})],Cr.prototype,"size",void 0),z([K({type:Boolean})],Cr.prototype,"disabled",void 0),z([K({type:Boolean,reflect:!0})],Cr.prototype,"loading",void 0),Cr=z([ct("toggle-button")],Cr);var Hd="important",k4=" !"+Hd,Jr=bi(class extends ba{constructor(e){if(super(e),e.type!==va.ATTRIBUTE||e.name!=="style"||e.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce((t,n)=>{const o=e[n];return o==null?t:t+`${n=n.includes("-")?n:n.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${o};`},"")}update(e,[t]){const{style:n}=e.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(t)),this.render(t);for(const o of this.ft)t[o]??(this.ft.delete(o),o.includes("-")?n.removeProperty(o):n[o]=null);for(const o in t){const a=t[o];if(a!=null){this.ft.add(o);const s=typeof a=="string"&&a.endsWith(k4);o.includes("-")||s?n.setProperty(o,s?a.slice(0,-11):a,s?Hd:""):n[o]=a}}return cn}});function ki(e,t){let n=e.length,o,a,s=!1,c=!1;Array.isArray(e[0])?o=e:(o=[e],n=o.length,s=!0),Array.isArray(t[0])?a=t:(a=t.length>0?t.map(p=>[p]):[[]],c=!0);let l=a[0].length,f=a[0].map((p,m)=>a.map(_=>_[m])),h=o.map(p=>f.map(m=>{let _=0;if(!Array.isArray(p)){for(let v of m)_+=p*v;return _}for(let v=0;v<p.length;v++)_+=p[v]*(m[v]||0);return _}));return n===1&&s&&(h=h[0]),l===1&&c?n===1&&s?h[0]:h.map(p=>p[0]):h}function El(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]}function Xe(e,t,n=[0,0,0]){const o=El(e,t[0]),a=El(e,t[1]),s=El(e,t[2]);return n[0]=o,n[1]=a,n[2]=s,n}var E4=sn({bisectLeft:()=>Gd,clamp:()=>Ur,copySign:()=>xa,diag:()=>Il,interpolate:()=>Ei,interpolateInv:()=>Fd,inv:()=>I4,isInstance:()=>io,isNone:()=>Fe,isString:()=>To,lu:()=>Cl,mapRange:()=>Ml,multiplyMatrices:()=>ki,multiply_v3_m3x3:()=>Xe,serializeNumber:()=>Sl,skipNone:()=>It,solve:()=>C4,spow:()=>ut,toPrecision:()=>Al,type:()=>Mn,zdiv:()=>xl});function To(e){return Mn(e)==="string"}function Mn(e){return(Object.prototype.toString.call(e).match(/^\[object\s+(.*?)\]$/)[1]||"").toLowerCase()}function Sl(e,{precision:t=16,unit:n}){return Fe(e)?"none":(e=+Al(e,t),e+(n??""))}function Fe(e){return e===null}function It(e){return Fe(e)?0:e}function Al(e,t){if(e===0)return 0;let n=~~e,o=0;n&&t&&(o=~~Math.log10(Math.abs(n))+1);const a=10**(t-o);return Math.floor(e*a+.5)/a}function Ei(e,t,n){return Fe(e)||isNaN(e)?t:Fe(t)||isNaN(t)?e:e+(t-e)*n}function Fd(e,t,n){return(n-e)/(t-e)}function Ml(e,t,n){return!e||!t||e===t||e[0]===t[0]&&e[1]===t[1]||isNaN(n)||n===null?n:Ei(t[0],t[1],Fd(e[0],e[1],n))}function Ur(e,t,n){return Math.max(Math.min(n,t),e)}function xa(e,t){return Math.sign(e)===Math.sign(t)?e:-e}function ut(e,t){return xa(Math.abs(e)**t,e)}function xl(e,t){return t===0?0:e/t}function Gd(e,t,n=0,o=e.length){for(;n<o;){const a=n+o>>1;e[a]<t?n=a+1:o=a}return n}function io(e,t){if(e instanceof t)return!0;const n=t.name;for(;e;){const o=Object.getPrototypeOf(e),a=o?.constructor?.name;if(a===n)return!0;if(!a||a==="Object")return!1;e=o}return!1}function Il(e){const t=e.length,n=[];for(let o=0;o<t;o++){n[o]=[];for(let a=0;a<t;a++)n[o][a]=o===a?e[o]:0}return n}function Cl(e,{pIndices:t=!1}={}){let n,o,a,s;const c=e.length;t?(n=Array.from({length:c},(l,f)=>f),a=Il(new Array(c).fill(1))):(o=Il(new Array(c).fill(1)),a=structuredClone(o)),s=structuredClone(e);for(let l=0;l<c-1;l++){let f=l,h=Math.abs(s[l][l]);for(let p=l+1;p<c;p++){const m=Math.abs(s[p][l]);m>h&&(f=p,h=m)}if(f!=l){if([s[l],s[f]]=[s[f],s[l]],t?[n[l],n[f]]=[n[f],n[l]]:[o[l],o[f]]=[o[f],o[l]],l)for(let p=0;p<l;p++)[a[l][p],a[f][p]]=[a[f][p],a[l][p]]}else if(!h)continue;for(let p=l+1;p<c;p++){const m=s[p][l]/s[l][l];for(let _=l;_<c;_++)s[p][_]+=-s[l][_]*m,a[p][_]+=a[l][_]*m}}return t?[n,a,s]:[o,a,s]}function S4(e,t,n){for(let o=0;o<n;o++){const a=t[o];for(let s=0;s<o;s++)for(let c=0;c<n;c++)a[c]-=e[o][s]*t[s][c];for(let s=0;s<n;s++)a[s]/=e[o][o]}return t}function A4(e,t,n){for(let a=n-1;a>-1;a--){const s=t[a];for(let c=a+1;c<n;c++)for(var o=0;o<n;o++)s[o]-=e[a][c]*t[c][o];for(let c=0;c<n;c++)t[a][c]/=e[a][a]}return t}function M4(e,t,n){for(let o=0;o<n;o++){let a=t[o];for(let s=0;s<o;s++)a-=e[o][s]*t[s];t[o]=a/e[o][o]}return t}function x4(e,t,n){for(let o=n-1;o>-1;o--){let a=t[o];for(let s=o+1;s<n;s++)a-=e[o][s]*t[s];t[o]=a/e[o][o]}return t}function I4(e){const[t,n,o]=Cl(e),a=n.length;if(n.map((s,c)=>s[c]*o[c][c]).reduce((s,c)=>s*c,1)===0)throw new Error("Matrix is singular");return A4(o,S4(n,t,a),a)}function C4(e,t){const[n,o,a]=Cl(e,{pIndices:!0}),s=o.length;if(o.map((c,l)=>c[l]*a[l][l]).reduce((c,l)=>c*l,1)===0)throw new Error("Matrix is singular");return x4(a,M4(o,n.map(c=>t[c]),s),s)}var O4=class{add(e,t,n){if(typeof arguments[0]!="string"){for(var e in arguments[0])this.add(e,arguments[0][e],arguments[1]);return}(Array.isArray(e)?e:[e]).forEach(function(o){this[o]=this[o]||[],t&&this[o][n?"unshift":"push"](t)},this)}run(e,t){this[e]=this[e]||[],this[e].forEach(function(n){n.call(t&&t.context?t.context:t,t)})}},xn=new O4,pr={gamut_mapping:"css",precision:5,deltaE:"76",verbose:"production".toLowerCase()!=="test",warn:function(t){this.verbose&&globalThis?.console?.warn?.(t)}},Wd=class{type;coordMeta;coordRange;range;constructor(e,t){if(typeof e=="object"&&(this.coordMeta=e),t&&(this.coordMeta=t,this.coordRange=t.range??t.refRange),typeof e=="string"){let n=e.trim().match(/^(?<type><[a-z]+>)(\[(?<min>-?[.\d]+),\s*(?<max>-?[.\d]+)\])?$/);if(!n)throw new TypeError(`Cannot parse ${e} as a type definition.`);this.type=n.groups.type;let{min:o,max:a}=n.groups;(o||a)&&(this.range=[+o,+a])}}get computedRange(){return this.range?this.range:this.type==="<percentage>"?this.percentageRange():this.type==="<angle>"?[0,360]:null}get unit(){return this.type==="<percentage>"?"%":this.type==="<angle>"?"deg":""}resolve(e){if(this.type==="<angle>")return e;let t=this.computedRange,n=this.coordRange;return this.type==="<percentage>"&&(n??=this.percentageRange()),Ml(t,n,e)}serialize(e,t){let n=this.type==="<percentage>"?this.percentageRange(100):this.computedRange,o=this.unit;return e=Ml(this.coordRange,n,e),Sl(e,{unit:o,precision:t})}toString(){let e=this.type;if(this.range){let[t="",n=""]=this.range;e+=`[${t},${n}]`}return e}percentageRange(e=1){let t;return this.coordMeta&&this.coordMeta.range||this.coordRange&&this.coordRange[0]>=0?t=[0,1]:t=[-1,1],[t[0]*e,t[1]*e]}static get(e,t){return io(e,this)?e:new this(e,t)}},Ol=Symbol("instance"),Ud=class vp{type;name;spaceCoords;coords;id;alpha;constructor(t,n=t.space){t[Ol]=this,this.type="function",this.name="color",Object.assign(this,t),this.space=n,this.type!=="custom"&&(this.spaceCoords=Object.values(n.coords),this.coords||(this.coords=this.spaceCoords.map(o=>{let a=["<number>","<percentage>"];return o.type==="angle"&&a.push("<angle>"),a})),this.coords=this.coords.map((o,a)=>{let s=this.spaceCoords[a];return typeof o=="string"&&(o=o.trim().split(/\s*\|\s*/)),o.map(c=>Wd.get(c,s))}))}serializeCoords(t,n,o){return o=t.map((a,s)=>Wd.get(o?.[s]??this.coords[s][0],this.spaceCoords[s])),t.map((a,s)=>o[s].serialize(a,n))}coerceCoords(t,n){return Object.entries(this.space.coords).map(([o,a],s)=>{let c=t[s];if(Fe(c)||isNaN(c))return c;let l=n[s],f=this.coords[s].find(h=>h.type==l);if(!f){let h=a.name||o;throw new TypeError(`${l??c?.raw??c} not allowed for ${h} in ${this.name}()`)}return c=f.resolve(c),f.range&&(n[s]=f.toString()),c})}canSerialize(){return this.type==="function"||this.serialize}parse(t){return null}static get(t,...n){return!t||io(t,this)?t:t[Ol]?t[Ol]:new vp(t,...n)}},Kt={D50:[.3457/.3585,1,.2958/.3585],D65:[.3127/.329,1,.3583/.329]};function Tl(e){return Array.isArray(e)?e:Kt[e]}function Ia(e,t,n,o={}){if(e=Tl(e),t=Tl(t),!e||!t)throw new TypeError(`Missing white point to convert ${e?"":"from"}${!e&&!t?"/":""}${t?"":"to"}`);if(e===t)return n;let a={W1:e,W2:t,XYZ:n,options:o};if(xn.run("chromatic-adaptation-start",a),a.M||(a.W1===Kt.D65&&a.W2===Kt.D50?a.M=[[1.0479297925449969,.022946870601609652,-.05019226628920524],[.02962780877005599,.9904344267538799,-.017073799063418826],[-.009243040646204504,.015055191490298152,.7518742814281371]]:a.W1===Kt.D50&&a.W2===Kt.D65&&(a.M=[[.955473421488075,-.02309845494876471,.06325924320057072],[-.0283697093338637,1.0099953980813041,.021041441191917323],[.012314014864481998,-.020507649298898964,1.330365926242124]])),xn.run("chromatic-adaptation-end",a),a.M)return Xe(a.XYZ,a.M);throw new TypeError("Only Bradford CAT with white points D50 and D65 supported for now.")}function Vd(e,t){let n={str:String(e)?.trim(),options:t};if(xn.run("parse-start",n),n.color)return n.color;n.parsed=L4(n.str);let o,a=n.options?n.options.parseMeta??n.options.meta:null;if(n.parsed){let s=n.parsed.name,c,l,f=n.parsed.args,h=f.map((_,v)=>n.parsed.argMeta[v]?.type);if(s==="color"){let _=f.shift();h.shift();let v=_.startsWith("--")?_.substring(2):`--${_}`,y=[_,v];if(c=_e.findFormat({name:s,id:y,type:"function"}),!c){let w,b=_ in _e.registry?_:v;if(b in _e.registry){let S=_e.registry[b].formats?.color?.id;S&&(w=`Did you mean ${e.replace("color("+_,"color("+S)}?`)}throw new TypeError(`Cannot parse ${n.str}. `+(w??"Missing a plugin?"))}l=c.space,c.id.startsWith("--")&&!_.startsWith("--")&&pr.warn(`${l.name} is a non-standard space and not currently supported in the CSS spec. Use prefixed color(${c.id}) instead of color(${_}).`),_.startsWith("--")&&!c.id.startsWith("--")&&pr.warn(`${l.name} is a standard space and supported in the CSS spec. Use color(${c.id}) instead of prefixed color(${_}).`)}else c=_e.findFormat({name:s,type:"function"}),l=c.space;a&&Object.assign(a,{format:c,formatId:c.name,types:h,commas:n.parsed.commas});let p=1;n.parsed.lastAlpha&&(p=n.parsed.args.pop(),a&&(a.alphaType=h.pop()));let m=c.coords.length;if(f.length!==m)throw new TypeError(`Expected ${m} coordinates for ${l.id} in ${n.str}), got ${f.length}`);f=c.coerceCoords(f,h),o={spaceId:l.id,coords:f,alpha:p}}else e:for(let s of _e.all)for(let c in s.formats){let l=s.formats[c];if(l.type!=="custom"||l.test&&!l.test(n.str))continue;let f=s.getFormat(l),h=f.parse(n.str);if(h){a&&Object.assign(a,{format:f,formatId:c}),o=h;break e}}if(!o)throw new TypeError(`Could not parse ${e} as a color. Missing a plugin?`);return o.alpha=Fe(o.alpha)?o.alpha:o.alpha===void 0?1:Ur(0,o.alpha,1),o}var qd={"%":.01,deg:1,grad:.9,rad:180/Math.PI,turn:360},Ca={function:/^([a-z]+)\(((?:calc\(NaN\)|.)+?)\)$/i,number:/^([-+]?(?:[0-9]*\.)?[0-9]+(e[-+]?[0-9]+)?)$/i,unitValue:RegExp(`(${Object.keys(qd).join("|")})$`),singleArgument:/\/?\s*(none|NaN|calc\(NaN\)|[-+\w.]+(?:%|deg|g?rad|turn)?)/g};function T4(e){let t={},n=e.match(Ca.unitValue)?.[0],o=t.raw=e;return n?(t.type=n==="%"?"<percentage>":"<angle>",t.unit=n,t.unitless=Number(o.slice(0,-n.length)),o=t.unitless*qd[n]):Ca.number.test(o)?(o=Number(o),t.type="<number>"):o==="none"?o=null:o==="NaN"||o==="calc(NaN)"?(o=NaN,t.type="<number>"):t.type="<ident>",{value:o,meta:t}}function L4(e){if(!e)return;e=e.trim();let t=e.match(Ca.function);if(t){let n=[],o=[],a=!1,s=t[1].toLowerCase(),c=t[2].replace(Ca.singleArgument,(l,f)=>{let{value:h,meta:p}=T4(f);return(l.startsWith("/")||s!=="color"&&n.length===3)&&(a=!0),n.push(h),o.push(p),""});return{name:s,args:n,argMeta:o,lastAlpha:a,commas:c.includes(","),rawName:t[1],rawArgs:t[2]}}}function Pe(e,t){if(Array.isArray(e))return e.map(o=>Pe(o,t));if(!e)throw new TypeError("Empty color reference");To(e)&&(e=Vd(e,t));let n=e.space||e.spaceId;return typeof n=="string"&&(e.space=_e.get(n)),e.alpha===void 0&&(e.alpha=1),e}var R4=75e-6,_e=class Gr{constructor(t){this.id=t.id,this.name=t.name,this.base=t.base?Gr.get(t.base):null,this.aliases=t.aliases,this.displaySpaces=t.displaySpaces?.map(a=>Gr.get(a)),this.bases=[];for(let a=this.base;a;a=a.base)this.bases.push(a);t.rgbGamut&&(this.rgbGamut=t.rgbGamut),t.linearGamut&&(this.linearGamut=t.linearGamut),this.base&&(t.fromBase&&(this.fromBase=t.fromBase),t.toBase&&(this.toBase=t.toBase));let n=t.coords??this.base.coords;for(let a in n)"name"in n[a]||(n[a].name=a);this.coords=n;let o=t.white??this.base.white??"D65";this.white=Tl(o),this.formats=t.formats??{};for(let a in this.formats){let s=this.formats[a];s.type||="function",s.name||=a}this.formats.color?.id||(this.formats.color={...this.formats.color??{},id:t.cssId||this.id}),t.gamutSpace?this.gamutSpace=t.gamutSpace==="self"?this:Gr.get(t.gamutSpace):this.isPolar?this.gamutSpace=this.base:this.gamutSpace=this,this.gamutSpace.isUnbounded&&(this.inGamut=(a,s)=>!0),this.M=t.M??{},this.referred=t.referred,Object.defineProperty(this,"path",{value:P4(this).reverse(),writable:!1,enumerable:!0,configurable:!0}),xn.run("colorspace-init-end",this)}inGamut(t,{epsilon:n=R4}={}){if(!this.equals(this.gamutSpace))return t=this.to(this.gamutSpace,t),this.gamutSpace.inGamut(t,{epsilon:n});let o=Object.values(this.coords);return t.every((a,s)=>{let c=o[s];if(c.type!=="angle"&&c.range){if(Fe(a))return!0;let[l,f]=c.range;return(l===void 0||a>=l-n)&&(f===void 0||a<=f+n)}return!0})}get isUnbounded(){return Object.values(this.coords).every(t=>!("range"in t))}get cssId(){return this.formats?.color?.id||this.id}get hueId(){for(let t in this.coords)if(this.coords[t].type==="angle")return t;return null}get hueIndex(){return Object.keys(this.coords).findIndex(t=>this.coords[t].type==="angle")}get isPolar(){return this.hueId!==null}getFormat(t){if(!t)return null;t==="default"?t=Object.values(this.formats)[0]:typeof t=="string"&&(t=this.formats[t]);let n=Ud.get(t,this);return n!==t&&t.name in this.formats&&(this.formats[t.name]=n),n}equals(t){return t?this===t||this.id===t||this.id===t.id:!1}to(t,n){if(arguments.length===1){const l=Pe(t);[t,n]=[l.space,l.coords]}if(t=Gr.get(t),this.equals(t))return n;n=n.map(l=>Fe(l)?0:l);let o=this.path,a=t.path,s,c;for(let l=0;l<o.length&&o[l].equals(a[l]);l++)s=o[l],c=l;if(!s)throw new Error(`Cannot convert between color spaces ${this} and ${t}: no connection space was found`);for(let l=o.length-1;l>c;l--)n=o[l].toBase(n);for(let l=c+1;l<a.length;l++)n=a[l].fromBase(n);return n}from(t,n){if(arguments.length===1){const o=Pe(t);[t,n]=[o.space,o.coords]}return t=Gr.get(t),t.to(this,n)}toString(){return`${this.name} (${this.id})`}getMinCoords(){let t=[];for(let n in this.coords){let o=this.coords[n],a=o.range||o.refRange;t.push(a?.min??0)}return t}static registry={};static get all(){return[...new Set(Object.values(Gr.registry))]}static register(t,n){if(arguments.length===1&&(n=arguments[0],t=n.id),n=this.get(n),this.registry[t]&&this.registry[t]!==n)throw new Error(`Duplicate color space registration: '${t}'`);if(this.registry[t]=n,arguments.length===1&&n.aliases)for(let o of n.aliases)this.register(o,n);return n}static get(t,...n){if(!t||io(t,this))return t;if(Mn(t)==="string"){let o=Gr.registry[t.toLowerCase()];if(!o)throw new TypeError(`No color space found with id = "${t}"`);return o}if(n.length)return Gr.get(...n);throw new TypeError(`${t} is not a valid color space`)}static findFormat(t,n=Gr.all){if(!t)return null;typeof t=="string"&&(t={name:t});for(let o of n)for(let[a,s]of Object.entries(o.formats)){s.name??=a,s.type??="function";let c=(!t.name||s.name===t.name)&&(!t.type||s.type===t.type);if(t.id){let l=s.ids||[s.id],f=Array.isArray(t.id)?t.id:[t.id];c&&=f.some(h=>l.includes(h))}if(c){let l=Ud.get(s,o);return l!==s&&(o.formats[s.name]=l),l}}return null}static resolveCoord(t,n){let o=Mn(t),a,s;if(o==="string"?t.includes(".")?[a,s]=t.split("."):[a,s]=[,t]:Array.isArray(t)?[a,s]=t:(a=t.space,s=t.coordId),a=Gr.get(a),a||(a=n),!a)throw new TypeError(`Cannot resolve coordinate reference ${t}: No color space specified and relative references are not allowed here`);if(o=Mn(s),o==="number"||o==="string"&&s>=0){let f=Object.entries(a.coords)[s];if(f)return{space:a,id:f[0],index:s,...f[1]}}a=Gr.get(a);let c=s.toLowerCase(),l=0;for(let f in a.coords){let h=a.coords[f];if(f.toLowerCase()===c||h.name?.toLowerCase()===c)return{space:a,id:f,index:l,...h};l++}throw new TypeError(`No "${s}" coordinate found in ${a.name}. Its coordinates are: ${Object.keys(a.coords).join(", ")}`)}static DEFAULT_FORMAT={type:"functions",name:"color"}};function P4(e){let t=[e];for(let n=e;n=n.base;)t.push(n);return t}var Lt=new _e({id:"xyz-d65",name:"XYZ D65",coords:{x:{refRange:[0,1],name:"X"},y:{refRange:[0,1],name:"Y"},z:{refRange:[0,1],name:"Z"}},white:"D65",formats:{color:{ids:["xyz-d65","xyz"]}},aliases:["xyz"]}),Ct=class extends _e{constructor(e){e.coords||(e.coords={r:{range:[0,1],name:"Red"},g:{range:[0,1],name:"Green"},b:{range:[0,1],name:"Blue"}}),e.base||(e.base=Lt);let t=e.toXYZ_M??e.M?.toXYZ,n=e.fromXYZ_M??e.M?.fromXYZ;e.referred??="display",super(e),t&&n&&(this.M.toXYZ=t,this.M.fromXYZ=n)}toBase(e){let t=Xe(e,this.M.toXYZ);return this.white!==this.base.white&&(t=Ia(this.white,this.base.white,t)),t}fromBase(e){return e=Ia(this.base.white,this.white,e),Xe(e,this.M.fromXYZ)}},Ll=new _e({id:"xyz-d50",name:"XYZ D50",white:"D50",base:Lt,fromBase:e=>Ia(Lt.white,"D50",e),toBase:e=>Ia("D50",Lt.white,e)}),$4=216/24389,Zd=24/116,Oa=24389/27,Rl=Kt.D50,mr=new _e({id:"lab",name:"Lab",coords:{l:{refRange:[0,100],name:"Lightness"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:Rl,base:Ll,fromBase(e){let t=e.map((n,o)=>n/Rl[o]).map(n=>n>$4?Math.cbrt(n):(Oa*n+16)/116);return[116*t[1]-16,500*(t[0]-t[1]),200*(t[1]-t[2])]},toBase(e){let[t,n,o]=e,a=[];return a[1]=(t+16)/116,a[0]=n/500+a[1],a[2]=a[1]-o/200,[a[0]>Zd?Math.pow(a[0],3):(116*a[0]-16)/Oa,e[0]>8?Math.pow((e[0]+16)/116,3):e[0]/Oa,a[2]>Zd?Math.pow(a[2],3):(116*a[2]-16)/Oa].map((s,c)=>s*Rl[c])},formats:{lab:{coords:["<percentage> | <number>","<number> | <percentage>","<number> | <percentage>"]}}});function Or(e){return typeof e!="number"?e:(e%360+360)%360}function jd(e,t){let[n,o]=t,a=Fe(n),s=Fe(o);if(a&&s)return[n,o];if(a?n=o:s&&(o=n),e==="raw")return t;n=Or(n),o=Or(o);let c=o-n;return e==="increasing"?c<0&&(o+=360):e==="decreasing"?c>0&&(n+=360):e==="longer"?-180<c&&c<180&&(c>0?n+=360:o+=360):e==="shorter"&&(c>180?n+=360:c<-180&&(o+=360)),[n,o]}var Dt=new _e({id:"lch",name:"LCH",coords:{l:{refRange:[0,100],name:"Lightness"},c:{refRange:[0,150],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:mr,fromBase(e){if(this.ε===void 0){let c=Object.values(this.base.coords)[1].refRange,l=c[1]-c[0];this.ε=l/1e5}let[t,n,o]=e,a=Math.abs(n)<this.ε&&Math.abs(o)<this.ε,s=a?null:Or(Math.atan2(o,n)*180/Math.PI);return[t,a?0:Math.sqrt(n**2+o**2),s]},toBase(e){let[t,n,o]=e,a=null,s=null;return Fe(o)||(n=n<0?0:n,a=n*Math.cos(o*Math.PI/180),s=n*Math.sin(o*Math.PI/180)),[t,a,s]},formats:{lch:{coords:["<percentage> | <number>","<number> | <percentage>","<number> | <angle>"]}}}),Kd=25**7,Ta=Math.PI,Yd=180/Ta,Lo=Ta/180;function Xd(e){const t=e*e;return t*t*t*e}function Jd(e,t,{kL:n=1,kC:o=1,kH:a=1}={}){[e,t]=Pe([e,t]);let[s,c,l]=mr.from(e),f=Dt.from(mr,[s,c,l])[1],[h,p,m]=mr.from(t),_=Dt.from(mr,[h,p,m])[1];f<0&&(f=0),_<0&&(_=0);let v=Xd((f+_)/2),y=.5*(1-Math.sqrt(v/(v+Kd))),w=(1+y)*c,b=(1+y)*p,S=Math.sqrt(w**2+l**2),M=Math.sqrt(b**2+m**2),C=w===0&&l===0?0:Math.atan2(l,w),L=b===0&&m===0?0:Math.atan2(m,b);C<0&&(C+=2*Ta),L<0&&(L+=2*Ta),C*=Yd,L*=Yd;let D=h-s,Y=M-S,U=L-C,oe=C+L,H=Math.abs(U),me;S*M===0?me=0:H<=180?me=U:U>180?me=U-360:U<-180?me=U+360:pr.warn("the unthinkable has happened");let ve=2*Math.sqrt(M*S)*Math.sin(me*Lo/2),P=(s+h)/2,J=(S+M)/2,A=Xd(J),ee;S*M===0?ee=oe:H<=180?ee=oe/2:oe<360?ee=(oe+360)/2:ee=(oe-360)/2;let Ce=(P-50)**2,ue=1+.015*Ce/Math.sqrt(20+Ce),ze=1+.045*J,se=1;se-=.17*Math.cos((ee-30)*Lo),se+=.24*Math.cos(2*ee*Lo),se+=.32*Math.cos((3*ee+6)*Lo),se-=.2*Math.cos((4*ee-63)*Lo);let Ae=1+.015*J*se,q=30*Math.exp(-1*((ee-275)/25)**2),W=2*Math.sqrt(A/(A+Kd)),ke=-1*Math.sin(2*q*Lo)*W,ge=(D/(n*ue))**2;return ge+=(Y/(o*ze))**2,ge+=(ve/(a*Ae))**2,ge+=ke*(Y/(o*ze))*(ve/(a*Ae)),Math.sqrt(ge)}var Si={XYZtoLMS:[[.819022437996703,.3619062600528904,-.1288737815209879],[.0329836539323885,.9292868615863434,.0361446663506424],[.0481771893596242,.2642395317527308,.6335478284694309]],LMStoXYZ:[[1.2268798758459243,-.5578149944602171,.2813910456659647],[-.0405757452148008,1.112286803280317,-.0717110580655164],[-.0763729366746601,-.4214933324022432,1.5869240198367816]],LMStoLab:[[.210454268309314,.7936177747023054,-.0040720430116193],[1.9779985324311684,-2.42859224204858,.450593709617411],[.0259040424655478,.7827717124575296,-.8086757549230774]],LabtoLMS:[[1,.3963377773761749,.2158037573099136],[1,-.1055613458156586,-.0638541728258133],[1,-.0894841775298119,-1.2914855480194092]]},Tr=new _e({id:"oklab",name:"Oklab",coords:{l:{refRange:[0,1],name:"Lightness"},a:{refRange:[-.4,.4]},b:{refRange:[-.4,.4]}},white:"D65",base:Lt,M:Si,fromBase(e){let t=Xe(e,Si.XYZtoLMS);return t[0]=Math.cbrt(t[0]),t[1]=Math.cbrt(t[1]),t[2]=Math.cbrt(t[2]),Xe(t,Si.LMStoLab,t)},toBase(e){let t=Xe(e,Si.LabtoLMS);return t[0]=t[0]**3,t[1]=t[1]**3,t[2]=t[2]**3,Xe(t,Si.LMStoXYZ,t)},formats:{oklab:{coords:["<percentage> | <number>","<number> | <percentage>","<number> | <percentage>"]}}});function Pl(e,t){[e,t]=Pe([e,t]);let[n,o,a]=Tr.from(e),[s,c,l]=Tr.from(t),f=n-s,h=o-c,p=a-l;return Math.sqrt(f**2+h**2+p**2)}var D4=75e-6;function Ro(e,t,{epsilon:n=D4}={}){e=Pe(e),t||(t=e.space),t=_e.get(t);let o=e.coords;return t!==e.space&&(o=t.from(e)),t.inGamut(o,{epsilon:n})}function Ve(e,t,{inGamut:n}={}){e=Pe(e),t=_e.get(t);let o=t.from(e),a={space:t,coords:o,alpha:e.alpha};return n&&(a=dn(a,n===!0?void 0:n)),a}Ve.returns="color";function Ai(e,t){e=Pe(e);let n=_e.get(t,t?.space),o=t?.precision,a;return!n||e.space.equals(n)?a=e.coords.slice():a=n.from(e),o===void 0?a:a.map(s=>Al(s,o))}function gr(e,t){if(e=Pe(e),t==="alpha")return e.alpha??1;let{space:n,index:o}=_e.resolveCoord(t,e.space);return Ai(e,n)[o]}var In=new _e({id:"oklch",name:"OkLCh",coords:{l:{refRange:[0,1],name:"Lightness"},c:{refRange:[0,.4],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},white:"D65",base:Tr,fromBase:Dt.fromBase,toBase:Dt.toBase,formats:{oklch:{coords:["<percentage> | <number>","<number> | <percentage>","<number> | <angle>"]}}});function $l(e,t,n,o){return e=Pe(e),Array.isArray(t)&&([t,n,o]=[e.space,t,n]),t=_e.get(t),e.coords=t===e.space?n.slice():t.to(e.space,n),o!==void 0&&(e.alpha=o),e}$l.returns="color";function un(e,t,n){if(e=Pe(e),arguments.length===2&&Mn(arguments[1])==="object"){let o=arguments[1];for(let a in o)un(e,a,o[a])}else if(typeof n=="function"&&(n=n(gr(e,t))),t==="alpha")e.alpha=n;else{let{space:o,index:a}=_e.resolveCoord(t,e.space),s=Ai(e,o);s[a]=n,$l(e,o,s)}return e}un.returns="color";function Po(e){return{space:e.space,coords:e.coords.slice(),alpha:e.alpha}}function Qd(e,t,n="lab"){n=_e.get(n);let o=n.from(e),a=n.from(t);return Math.sqrt(o.reduce((s,c,l)=>{let f=a[l];return Fe(c)||Fe(f)?s:s+(f-c)**2},0))}function z4(e,t){return Qd(e,t,"lab")}var e0=Math.PI/180;function N4(e,t,{l:n=2,c:o=1}={}){[e,t]=Pe([e,t]);let[a,s,c]=mr.from(e),[,l,f]=Dt.from(mr,[a,s,c]),[h,p,m]=mr.from(t),_=Dt.from(mr,[h,p,m])[1];l<0&&(l=0),_<0&&(_=0);let v=a-h,y=l-_,w=s-p,b=c-m,S=w**2+b**2-y**2,M=.511;a>=16&&(M=.040975*a/(1+.01765*a));let C=.0638*l/(1+.0131*l)+.638,L;Fe(f)&&(f=0),f>=164&&f<=345?L=.56+Math.abs(.2*Math.cos((f+168)*e0)):L=.36+Math.abs(.4*Math.cos((f+35)*e0));let D=Math.pow(l,4),Y=Math.sqrt(D/(D+1900)),U=C*(Y*L+1-Y),oe=(v/(n*M))**2;return oe+=(y/(o*C))**2,oe+=S/U**2,Math.sqrt(oe)}var t0=203,Dl=new _e({id:"xyz-abs-d65",cssId:"--xyz-abs-d65",name:"Absolute XYZ D65",coords:{x:{refRange:[0,9504.7],name:"Xa"},y:{refRange:[0,1e4],name:"Ya"},z:{refRange:[0,10888.3],name:"Za"}},base:Lt,fromBase(e){return e.map(t=>t*t0)},toBase(e){return e.map(t=>t/t0)}}),r0=1.15,n0=.66,o0=2610/2**14,B4=2**14/2610,i0=3424/4096,a0=2413/128,s0=2392/128,H4=1.7*2523/32,l0=32/(1.7*2523),c0=-.56,zl=16295499532821565e-27,Mi={XYZtoCone:[[.41478972,.579999,.014648],[-.20151,1.120649,.0531008],[-.0166008,.2648,.6684799]],ConetoXYZ:[[1.9242264357876067,-1.0047923125953657,.037651404030618],[.35031676209499907,.7264811939316552,-.06538442294808501],[-.09098281098284752,-.3127282905230739,1.5227665613052603]],ConetoIab:[[.5,.5,0],[3.524,-4.066708,.542708],[.199076,1.096799,-1.295875]],IabtoCone:[[1,.13860504327153927,.05804731615611883],[1,-.1386050432715393,-.058047316156118904],[1,-.09601924202631895,-.811891896056039]]},u0=new _e({id:"jzazbz",name:"Jzazbz",coords:{jz:{refRange:[0,1],name:"Jz"},az:{refRange:[-.21,.21]},bz:{refRange:[-.21,.21]}},base:Dl,M:Mi,fromBase(e){let[t,n,o]=e,a=r0*t-.1499999999999999*o,s=n0*n- -.33999999999999997*t,c=Xe([a,s,o],Mi.XYZtoCone).map(function(p){let m=i0+a0*ut(p/1e4,o0),_=1+s0*ut(p/1e4,o0);return ut(m/_,H4)}),[l,f,h]=Xe(c,Mi.ConetoIab);return[.43999999999999995*l/(1+c0*l)-zl,f,h]},toBase(e){let[t,n,o]=e,a=(t+zl)/(.43999999999999995-c0*(t+zl)),s=Xe([a,n,o],Mi.IabtoCone).map(function(p){let m=i0-ut(p,l0),_=s0*ut(p,l0)-a0;return 1e4*ut(m/_,B4)}),[c,l,f]=Xe(s,Mi.ConetoXYZ),h=(c+.1499999999999999*f)/r0;return[h,(l+-.33999999999999997*h)/n0,f]},formats:{jzazbz:{coords:["<percentage> | <number>","<number> | <percentage>","<number> | <percentage>"]}}}),Nl=new _e({id:"jzczhz",name:"JzCzHz",coords:{jz:{refRange:[0,1],name:"Jz"},cz:{refRange:[0,.26],name:"Chroma"},hz:{refRange:[0,360],type:"angle",name:"Hue"}},base:u0,fromBase:Dt.fromBase,toBase:Dt.toBase,formats:{jzczhz:{coords:["<percentage> | <number>","<number> | <percentage>","<number> | <angle>"]}}});function F4(e,t){[e,t]=Pe([e,t]);let[n,o,a]=Nl.from(e),[s,c,l]=Nl.from(t),f=n-s,h=o-c;Fe(a)&&Fe(l)?(a=0,l=0):Fe(a)?a=l:Fe(l)&&(l=a);let p=a-l,m=2*Math.sqrt(o*c)*Math.sin(p/2*(Math.PI/180));return Math.sqrt(f**2+h**2+m**2)}var d0=3424/4096,h0=2413/128,f0=2392/128,p0=2610/16384,G4=2523/32,W4=16384/2610,m0=32/2523,xi={XYZtoLMS:[[.3592832590121217,.6976051147779502,-.035891593232029],[-.1920808463704993,1.100476797037432,.0753748658519118],[.0070797844607479,.0748396662186362,.8433265453898765]],LMStoIPT:[[2048/4096,2048/4096,0],[6610/4096,-13613/4096,7003/4096],[17933/4096,-17390/4096,-543/4096]],IPTtoLMS:[[.9999999999999998,.0086090370379328,.111029625003026],[.9999999999999998,-.0086090370379328,-.1110296250030259],[.9999999999999998,.5600313357106791,-.3206271749873188]],LMStoXYZ:[[2.0701522183894223,-1.3263473389671563,.2066510476294053],[.3647385209748072,.6805660249472273,-.0453045459220347],[-.0497472075358123,-.0492609666966131,1.1880659249923042]]},Bl=new _e({id:"ictcp",name:"ICTCP",coords:{i:{refRange:[0,1],name:"I"},ct:{refRange:[-.5,.5],name:"CT"},cp:{refRange:[-.5,.5],name:"CP"}},base:Dl,M:xi,fromBase(e){return U4(Xe(e,xi.XYZtoLMS))},toBase(e){let t=V4(e);return Xe(t,xi.LMStoXYZ)},formats:{ictcp:{coords:["<percentage> | <number>","<number> | <percentage>","<number> | <percentage>"]}}});function U4(e){let t=e.map(function(n){return((d0+h0*(n/1e4)**p0)/(1+f0*(n/1e4)**p0))**G4});return Xe(t,xi.LMStoIPT)}function V4(e){return Xe(e,xi.IPTtoLMS).map(function(t){return 1e4*(Math.max(t**m0-d0,0)/(h0-f0*t**m0))**W4})}function q4(e,t){[e,t]=Pe([e,t]);let[n,o,a]=Bl.from(e),[s,c,l]=Bl.from(t);return 720*Math.sqrt((n-s)**2+.25*(o-c)**2+(a-l)**2)}function Z4(e,t){[e,t]=Pe([e,t]);let n=2,[o,a,s]=Tr.from(e),[c,l,f]=Tr.from(t),h=o-c,p=n*(a-l),m=n*(s-f);return Math.sqrt(h**2+p**2+m**2)}var j4=Kt.D65,g0=.42,v0=1/g0,Hl=2*Math.PI,Ii={cat16:[[.401288,.650173,-.051461],[-.250268,1.204414,.045854],[-.002079,.048952,.953127]],cat16Inv:[[1.8620678550872327,-1.0112546305316843,.14918677544445175],[.38752654323613717,.6214474419314753,-.008973985167612518],[-.015841498849333856,-.03412293802851557,1.0499644368778496]],m1:[[460,451,288],[460,-891,-261],[460,-220,-6300]]},K4={dark:[.8,.525,.8],dim:[.9,.59,.9],average:[1,.69,1]},ao={h:[20.14,90,164.25,237.53,380.14],e:[.8,.7,1,1.2,.8],H:[0,100,200,300,400]},Y4=180/Math.PI,b0=Math.PI/180;function w0(e,t){return e.map(n=>{const o=ut(t*Math.abs(n)*.01,g0);return 400*xa(o,n)/(o+27.13)})}function X4(e,t){const n=100/t*27.13**v0;return e.map(o=>{const a=Math.abs(o);return xa(n*ut(a/(400-a),v0),o)})}function J4(e){let t=Or(e);t<=ao.h[0]&&(t+=360);const n=Gd(ao.h,t)-1,[o,a]=ao.h.slice(n,n+2),[s,c]=ao.e.slice(n,n+2),l=ao.H[n],f=(t-o)/s;return l+100*f/(f+(a-t)/c)}function Q4(e){let t=(e%400+400)%400;const n=Math.floor(.01*t);t=t%100;const[o,a]=ao.h.slice(n,n+2),[s,c]=ao.e.slice(n,n+2);return Or((t*(c*o-s*a)-100*o*c)/(t*(c-s)-100*c))}function _0(e,t,n,o,a){const s={};s.discounting=a,s.refWhite=e,s.surround=o;const c=e.map(y=>y*100);s.la=t,s.yb=n;const l=c[1],f=Xe(c,Ii.cat16);let h=K4[s.surround];const p=h[0];s.c=h[1],s.nc=h[2];const m=(1/(5*s.la+1))**4;s.fl=m*s.la+.1*(1-m)*(1-m)*Math.cbrt(5*s.la),s.flRoot=s.fl**.25,s.n=s.yb/l,s.z=1.48+Math.sqrt(s.n),s.nbb=.725*s.n**-.2,s.ncb=s.nbb;const _=a?1:Math.max(Math.min(p*(1-1/3.6*Math.exp((-s.la-42)/92)),1),0);s.dRgb=f.map(y=>Ei(1,l/y,_)),s.dRgbInv=s.dRgb.map(y=>1/y);const v=w0(f.map((y,w)=>y*s.dRgb[w]),s.fl);return s.aW=s.nbb*(2*v[0]+v[1]+.05*v[2]),s}var y0=_0(j4,64/Math.PI*.2,20,"average",!1);function k0(e,t){if(!(e.J!==void 0^e.Q!==void 0))throw new Error("Conversion requires one and only one: 'J' or 'Q'");if(!(e.C!==void 0^e.M!==void 0^e.s!==void 0))throw new Error("Conversion requires one and only one: 'C', 'M' or 's'");if(!(e.h!==void 0^e.H!==void 0))throw new Error("Conversion requires one and only one: 'h' or 'H'");if(e.J===0||e.Q===0)return[0,0,0];let n=0;e.h!==void 0?n=Or(e.h)*b0:n=Q4(e.H)*b0;const o=Math.cos(n),a=Math.sin(n);let s=0;e.J!==void 0?s=ut(e.J,1/2)*.1:e.Q!==void 0&&(s=.25*t.c*e.Q/((t.aW+4)*t.flRoot));let c=0;e.C!==void 0?c=e.C/s:e.M!==void 0?c=e.M/t.flRoot/s:e.s!==void 0&&(c=4e-4*e.s**2*(t.aW+4)/t.c);const l=ut(c*Math.pow(1.64-Math.pow(.29,t.n),-.73),10/9),f=.25*(Math.cos(n+2)+3.8),h=t.aW*ut(s,2/t.c/t.z),p=5e4/13*t.nc*t.ncb*f,m=h/t.nbb,_=23*(m+.305)*xl(l,23*p+l*(11*o+108*a)),v=_*o,y=_*a,w=X4(Xe([m,v,y],Ii.m1).map(b=>b*1/1403),t.fl);return Xe(w.map((b,S)=>b*t.dRgbInv[S]),Ii.cat16Inv).map(b=>b/100)}function E0(e,t){const n=e.map(M=>M*100),o=w0(Xe(n,Ii.cat16).map((M,C)=>M*t.dRgb[C]),t.fl),a=o[0]+(-12*o[1]+o[2])/11,s=(o[0]+o[1]-2*o[2])/9,c=(Math.atan2(s,a)%Hl+Hl)%Hl,l=.25*(Math.cos(c+2)+3.8),f=5e4/13*t.nc*t.ncb*xl(l*Math.sqrt(a**2+s**2),o[0]+o[1]+1.05*o[2]+.305),h=ut(f,.9)*Math.pow(1.64-Math.pow(.29,t.n),.73),p=t.nbb*(2*o[0]+o[1]+.05*o[2]),m=ut(p/t.aW,.5*t.c*t.z),_=100*ut(m,2),v=4/t.c*m*(t.aW+4)*t.flRoot,y=h*m,w=y*t.flRoot,b=Or(c*Y4),S=J4(b);return{J:_,C:y,h:b,s:50*ut(t.c*h/(t.aW+4),1/2),Q:v,M:w,H:S}}var e3=new _e({id:"cam16-jmh",cssId:"--cam16-jmh",name:"CAM16-JMh",coords:{j:{refRange:[0,100],name:"J"},m:{refRange:[0,105],name:"Colorfulness"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:Lt,M:Ii,fromBase(e){this.ε===void 0&&(this.ε=Object.values(this.coords)[1].refRange[1]/1e5);const t=E0(e,y0),n=Math.abs(t.M)<this.ε;return[t.J,n?0:t.M,n?null:t.h]},toBase(e){return k0({J:e[0],M:e[1],h:e[2]},y0)}}),t3=Kt.D65,r3=216/24389,S0=24389/27;function n3(e){return 116*(e>r3?Math.cbrt(e):(S0*e+16)/116)-16}function Fl(e){return e>8?Math.pow((e+16)/116,3):e/S0}function o3(e,t){let[n,o,a]=e,s=[],c=0;if(a===0)return[0,0,0];let l=Fl(a);a>0?c=.00379058511492914*a**2+.608983189401032*a+.9155088574762233:c=9514440756550361e-21*a**2+.08693057439788597*a-21.928975842194614;const f=2e-12,h=15;let p=0,m=1/0,_=[0,0,0];for(;p<=h;){s=k0({J:c,C:o,h:n},t);const v=Math.abs(s[1]-l);if(v<m){if(v<=f)return s;_=s,m=v}c=c-(s[1]-l)*c/(2*s[1]),p+=1}return _}function i3(e,t){const n=n3(e[1]);if(n===0)return[0,0,0];const o=E0(e,La);return[Or(o.h),o.C,n]}var La=_0(t3,200/Math.PI*Fl(50),Fl(50)*100,"average",!1),Ci=new _e({id:"hct",name:"HCT",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},c:{refRange:[0,145],name:"Colorfulness"},t:{refRange:[0,100],name:"Tone"}},base:Lt,fromBase(e){this.ε===void 0&&(this.ε=Object.values(this.coords)[1].refRange[1]/1e5);let t=i3(e,La);return t[1]<this.ε&&(t[1]=0,t[0]=null),t},toBase(e){return o3(e,La)},formats:{color:{id:"--hct",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}}),a3=Math.PI/180,A0=[1,.007,.0228];function M0(e){e[1]<0&&(e=Ci.fromBase(Ci.toBase(e)));const t=Math.log(Math.max(1+A0[2]*e[1]*La.flRoot,1))/A0[2],n=e[0]*a3,o=t*Math.cos(n),a=t*Math.sin(n);return[e[2],o,a]}function s3(e,t){[e,t]=Pe([e,t]);let[n,o,a]=M0(Ci.from(e)),[s,c,l]=M0(Ci.from(t));return Math.sqrt((n-s)**2+(o-c)**2+(a-l)**2)}var{cos:Qe,sin:et,sqrt:$o,atan2:Ut,exp:Do,abs:Gl,pow:Ra,PI:l3}=Math,c3=[[1.000042977349746,20718877053183e-18,-4361018085669474e-20],[26946201090235744e-21,.9999906145080147,-14898828405401079e-21],[-7941753620756204e-21,12875204405137254e-21,.9997859822609763]],u3=[[.9999570254019492,-2071874272730964e-20,4361733292468361e-20],[-2694517763358666e-20,1.000009385946497,1490098223546482e-20],[7943459292954202e-21,-1287824596735154e-20,1.000214063706999]],d3=[[.7212986433113499,.45344826541531813,-.19288975751942616],[-.788211869495579,1.795241376757236,.0876172451181785],[-.0917700599912156,.45765588659459255,1.2922045513917677]],h3=[[1.065107295808859,-.3150044075301121,.1803492381741039],[.4721107713837796,.4271995765962455,.04150680489380985],[-.09156391926309541,-.1736709363194979,.7719790382558294]],Wl=[.47229813098762524,.5149184096354483,.5113233386366979],Ul=[2.1173067060606283,1.9420552485353544,1.9557096741686448],f3=[[-.26355622180094096,.4168322883703174,.4926763141656403],[1.8897570508777322,-3.1212232034205774,1.0421666921060384],[.3585108617962056,1.7694028193790368,-1.4120626067695372]],p3=[[.9183897822815021,.5232051237088666,.7065804598090856],[1.0899090574433026,.07005324849041904,.4319776874787044],[1.598895729264209,.22061850068770233,.012506037355220951]],so={CAT_TO_HELM:c3,CAT_FROM_HELM:u3,M1:d3,M1_INV:h3,M2:f3,M2_INV:p3},m3=-.02833024015436984,x0=-.21131429516166544,I0=.2189784817615645,C0=-.06871898981942523,O0=.005506053349515315,T0=-.0641329861299175,L0=-.053592461436994296,R0=-.00954137464208059,P0=.2676231133101982,$0=.8934892185255707,D0=.7173169828841472,z0=.6915224124600773,N0=.48647127559605596,B0=.9853124591201782,Vl=.5385456675962418,ql=.12508858146241716,Zl=.6768950256217603,H0=-.4963251525324449,F0=-.09564696283240552,G0=-.029053748937210654,W0=1.3346761652952872,U0=-.1698908144723919,g3=-.195370576218515,v3=.5330819227283227,b3=.08863325582067766,w3=.9365540137751136,_3=.13789738139719568,y3=.061650260197979936,k3=.0641970862504494,E3=-.027401052793571013,S3=-.09900209889026965,A3=.059635520647228726,M3=-.013586499967803128,x3=.2253393118474472,I3=-1.5239477450767043,C3=-1.751157310240011,O3=-.43576378069144767,T3=1.060094063845983,L3=.47931193034584496,R3=-.2622579649434462,P3=.13610794232685908,$3=.1168702235362288,D3=-.01617739641422492,z3=.038145638815030566,V0=-28.2*l3/180,Pa=Qe(V0),$a=et(V0);function q0(e){return m3*Qe(e)+x0*et(e)+I0*Qe(2*e)+C0*et(2*e)+O0*Qe(3*e)+T0*et(3*e)+L0*Qe(4*e)+R0*et(4*e)}function N3(e){return .02833024015436984*et(e)+x0*Qe(e)+-2*I0*et(2*e)+2*C0*Qe(2*e)+-3*O0*et(3*e)+3*T0*Qe(3*e)+-4*L0*et(4*e)+4*R0*Qe(4*e)}function Z0(e){let t=g3*Qe(e)+v3*et(e)+b3*Qe(2*e)+w3*et(2*e)+_3*Qe(3*e)+y3*et(3*e)+k3*Qe(4*e)+E3*et(4*e);return Do(t)}function j0(e){let t=e-.5;return Do(Ur(-30,I3*t+C3*t*t,30))}function K0(e,t){let n=O3*Qe(e)+T3*et(e)+L3*Qe(2*e)+R3*et(2*e);return Do(Ur(-30,(t-.5)*n,30))}function Y0(e){let t=P3*Qe(e)+$3*et(e)+D3*Qe(2*e)+z3*et(2*e);return Do(t)}function X0(e){return 1+S3*Qe(e)+A3*et(e)+M3*Qe(2*e)+x3*et(2*e)}function B3(e,t){let n=e*(1-e),o=e+Vl*n+ql*n*(.5-e)+Zl*n*n;return o+=n*(H0*Qe(t)+F0*et(t)),o}function H3(e,t){let n=H0*Qe(t)+F0*et(t),o=e;for(let a=0;a<15;a++){let s=o*(1-o),c=1-2*o,l=o+(Vl+n)*s+ql*s*(.5-o)+Zl*s*s-e,f=1+(Vl+n)*c+ql*(c*(.5-o)-s)+Zl*2*s*c;Gl(f)<1e-10&&(f=1),o-=l/f}return o}function F3(e,t){let n=G0+W0*Qe(t)+U0*et(t),o=e<1?1-e:0,a=n*e*o*o;return e*Do(Ur(-30,a,30))}function G3(e,t){let n=G0+W0*Qe(t)+U0*et(t),o=e;for(let a=0;a<12;a++){let s=o<1?1-o:0,c=n*o*s*s,l=Do(Ur(-30,c,30)),f=o*l-e,h=n*s*(1-3*o),p=l*(1+o*h);Gl(p)<1e-10&&(p=1),o-=f/p}return o}var W3=function(e){let t=Xe(e,so.CAT_TO_HELM),[n,o,a]=Xe(t,so.M1),s=ut(n,Wl[0]),c=ut(o,Wl[1]),l=ut(a,Wl[2]),[f,h,p]=Xe([s,c,l],so.M2),m=Ut(p,h),_=$o(h*h+p*p),v=q0(m),y=m+v;h=_*Qe(y),p=_*et(y);let w=$o(h*h+p*p),b=P0*Ra(w,Ur(.01,$0,10)),S=Ut(p,h),M=1+D0*Qe(S)+z0*et(S)+N0*Qe(2*S)+B0*et(2*S);f+=b*M,m=Ut(p,h),f=B3(f,m),m=Ut(p,h),f=F3(f,m),m=Ut(p,h);let C=Z0(m);h*=C,p*=C,m=Ut(p,h),_=$o(h*h+p*p);let L=X0(m),D=_>0?Ra(_,L):0;h=D*Qe(m),p=D*et(m);let Y=j0(f);h*=Y,p*=Y,m=Ut(p,h);let U=K0(m,f);h*=U,p*=U,m=Ut(p,h),f*=Y0(m);let oe=h*Pa-p*$a,H=h*$a+p*Pa;return[f,oe,H]},U3=function(e){let[t,n,o]=e,a=n*Pa+o*$a,s=-n*$a+o*Pa;n=a,o=s;let c=Ut(o,n);t/=Y0(c),c=Ut(o,n);let l=K0(c,t);n/=l,o/=l;let f=j0(t);n/=f,o/=f,c=Ut(o,n);let h=$o(n*n+o*o),p=X0(c),m=h>0?Ra(h,1/p):0;n=m*Qe(c),o=m*et(c),c=Ut(o,n);let _=Z0(c);n/=_,o/=_,c=Ut(o,n),t=G3(t,c),c=Ut(o,n),t=H3(t,c);let v=$o(n*n+o*o),y=P0*Ra(v,Ur(.01,$0,10)),w=Ut(o,n),b=1+D0*Qe(w)+z0*et(w)+N0*Qe(2*w)+B0*et(2*w);t-=y*b;let S=Ut(o,n);h=$o(n*n+o*o);let M=S;for(let me=0;me<8;me++){let ve=M+q0(M)-S,P=1+N3(M);Gl(P)<1e-10&&(P=1),M-=ve/P}n=h*Qe(M),o=h*et(M);let[C,L,D]=Xe([t,n,o],so.M2_INV),Y=ut(C,Ul[0]),U=ut(L,Ul[1]),oe=ut(D,Ul[2]),H=Xe([Y,U,oe],so.M1_INV);return Xe(H,so.CAT_FROM_HELM)},jl=new _e({id:"helmlab-metric",name:"Helmlab MetricSpace",cssId:"--helmlab-metric",coords:{l:{refRange:[0,1.6],name:"Lightness"},a:{refRange:[-1.5,1.5]},b:{refRange:[-1.5,1.5]}},white:"D65",base:Lt,M:so,fromBase(e){return W3(e)},toBase(e){return U3(e)}}),V3=-.9155125151657894,q3=2.9268353744941558,Z3=3.966003089807536,j3=1.9737081170404969,K3=52.473130649294724,Y3=.47897301074925214;function X3(e,t){[e,t]=Pe([e,t]);let[n,o,a]=jl.from(e),[s,c,l]=jl.from(t),f=n-s,h=o-c,p=a-l,m=(n+s)*.5,_=1+V3*(m-.5)**2,v=(Math.sqrt(o**2+a**2)+Math.sqrt(c**2+l**2))*.5,y=1+q3*v,w=(f**2/_**2+Z3*(h**2+p**2)/y**2)**(j3/2);return(w/(1+K3*w))**Y3}var zo={deltaE76:z4,deltaECMC:N4,deltaE2000:Jd,deltaEJz:F4,deltaEITP:q4,deltaEOK:Pl,deltaEOK2:Z4,deltaEHCT:s3,deltaEHelmlab:X3};function J3(e){return Math.max(parseFloat(`1e${(e?Math.floor(Math.log10(Math.abs(e))):0)-2}`),1e-6)}var J0={hct:{method:"hct.c",jnd:2,deltaEMethod:"hct",blackWhiteClamp:{}},"hct-tonal":{method:"hct.c",jnd:0,deltaEMethod:"hct",blackWhiteClamp:{channel:"hct.t",min:0,max:100}}};function dn(e,{method:t=pr.gamut_mapping,space:n=void 0,deltaEMethod:o="",jnd:a=2,blackWhiteClamp:s=void 0}={}){if(e=Pe(e),To(arguments[1])?n=arguments[1]:n||(n=e.space),n=_e.get(n),Ro(e,n,{epsilon:0}))return e;let c;if(t==="css")c=Q3(e,{space:n});else if(t==="raytrace")c=tb(e,{space:n});else{if(t!=="clip"){Object.prototype.hasOwnProperty.call(J0,t)&&({method:t,jnd:a,deltaEMethod:o,blackWhiteClamp:s}=J0[t]);let l=Jd;if(o!==""){for(let h in zo)if("deltae"+o.toLowerCase()===h.toLowerCase()){l=zo[h];break}}a===0&&(a=1e-16);let f=dn(Ve(e,n),{method:"clip",space:n});if(l(e,f)>a){if(s&&Object.keys(s).length===3){let S=_e.resolveCoord(s.channel),M=gr(Ve(e,S.space),S.id);if(Fe(M)&&(M=0),M>=s.max)return Ve({space:"xyz-d65",coords:Kt.D65},e.space);if(M<=s.min)return Ve({space:"xyz-d65",coords:[0,0,0]},e.space)}let h=_e.resolveCoord(t),p=h.space,m=h.id,_=Ve(e,p);_.coords.forEach((S,M)=>{Fe(S)&&(_.coords[M]=0)});let v=(h.range||h.refRange)[0],y=J3(a),w=v,b=gr(_,m);for(;b-w>y;){let S=Po(_);S=dn(S,{space:n,method:"clip"}),l(_,S)-a<y?w=gr(_,m):b=gr(_,m),un(_,m,(w+b)/2)}c=Ve(_,n)}else c=f}else c=Ve(e,n);if(t==="clip"||!Ro(c,n,{epsilon:0})){let l=Object.values(n.coords).map(f=>f.range||[]);c.coords=c.coords.map((f,h)=>{let[p,m]=l[h];return p!==void 0&&(f=Math.max(p,f)),m!==void 0&&(f=Math.min(f,m)),f})}}return n!==e.space&&(c=Ve(c,e.space)),e.coords=c.coords,e}dn.returns="color";var Da={WHITE:{space:Tr,coords:[1,0,0],alpha:1},BLACK:{space:Tr,coords:[0,0,0],alpha:1}};function Q3(e,{space:t}={}){if(e=Pe(e),t||(t=e.space),t=_e.get(t),t.isUnbounded)return Ve(e,t);const a=Ve(e,In);let s=a.coords[0];if(s>=1){const v=Ve(Da.WHITE,t);return v.alpha=e.alpha,Ve(v,t)}if(s<=0){const v=Ve(Da.BLACK,t);return v.alpha=e.alpha,Ve(v,t)}if(Ro(a,t,{epsilon:0}))return Ve(a,t);function c(v){const y=Ve(v,t),w=Object.values(t.coords);return y.coords=y.coords.map((b,S)=>{if("range"in w[S]){const[M,C]=w[S].range;return Ur(M,b,C)}return b}),y}let l=0,f=a.coords[1],h=!0,p=Po(a),m=c(p),_=Pl(m,p);if(_<.02)return m;for(;f-l>1e-4;){const v=(l+f)/2;if(p.coords[1]=v,h&&Ro(p,t,{epsilon:0}))l=v;else if(m=c(p),_=Pl(m,p),_<.02){if(.02-_<1e-4)break;h=!1,l=v}else f=v}return m}function eb(e,t,n=[0,0,0],o=[1,1,1]){let a=1/0,s=-1/0,c=[];for(let l=0;l<3;l++){const f=e[l],h=t[l]-f,p=n[l],m=o[l];if(c.push(h),Math.abs(h)>1e-12){const _=1/h,v=(p-f)*_,y=(m-f)*_;s=Math.max(Math.min(v,y),s),a=Math.min(Math.max(v,y),a)}else if(f<p||f>m)return[]}return s>a||a<0?[]:(s<0&&(s=a),isFinite(s)?[e[0]+c[0]*s,e[1]+c[1]*s,e[2]+c[2]*s]:[])}function tb(e,{space:t}={}){if(e=Pe(e),t||(t=e.space),t=_e.get(t),t.isUnbounded)return Ve(e,t);let n=Ve(e,In),[o,a,s]=n.coords;if(o>=1){const w=Ve(Da.WHITE,t);return w.alpha=e.alpha,Ve(w,t)}else if(o<=0){const w=Ve(Da.BLACK,t);return w.alpha=e.alpha,Ve(w,t)}const c=t,l=t.rgbGamut;if(l!==void 0&&(t=l),!io(t,Ct))throw Error("An RGB gamut is required");let[f,h]=Object.values(t.coords)[0].range,p=[h,h,h];const m=t.linearGamut;m!==void 0&&(h=Ve({space:t,coords:p,alpha:e.alpha},m).coords[0],p=[h,h,h],t=m,f=Object.values(t.coords)[0].range[0]);let _=[f,f,f],v=Ve(n,t);if(!v.coords.every(w=>f<=w&&w<=h)){let w=Ve({space:In,coords:[o,0,s]},t).coords;const b=f+1e-12,S=h-1e-12;let M=v.coords;for(let C=0;C<4;C++){if(C){const D=Ve(v,In);D.coords[0]=o,D.coords[2]=s,v=Ve(D,t)}const L=eb(w,v.coords,_,p);if(L.length===0){v.coords=[...M];break}C&&v.coords.every(D=>b<D&&D<S)&&(w=[...v.coords]),M=L,v.coords=[...L]}}v=Ve(v,c);const y=Object.values(c.coords);return v.coords=v.coords.map((w,b)=>{if("range"in y[b]){const[S,M]=y[b].range;return Ur(S,w,M)}return w}),v}var No=class extends _e{constructor(e){let t=_e.get(e.base),n=e.chroma??"c",o=Object.keys(t.coords),a=o.indexOf(n);if(a===-1)throw new TypeError(`GamutRelativeColorSpace needs a "${n}" coordinate, got ${t.id}`);let s=Object.fromEntries(Object.entries(t.coords).map(([l,f])=>[l,{...f}]));s[n].range=[0,1],delete s[n].refRange,e.coords??=s,e.formats??={color:{coords:o.map(l=>{if(t.coords[l].type==="angle")return"<number> | <angle>";let[f,h]=t.coords[l].range??t.coords[l].refRange??[];return l===n||f===0&&h===1?"<percentage> | <number>":"<number> | <percentage>"})}},super(e),this.chromaIndex=a,this.method=`${t.id}.${n}`;let c=[[0,0,1],[0,1,0],[0,1,1],[1,0,0],[1,0,1],[1,1,0]];this.oogChroma=1.01*Math.max(...c.map(l=>t.from(this.gamutSpace,l)[this.chromaIndex]||0))}maxChroma(e){let t=[...e];return t[this.chromaIndex]=this.oogChroma,dn({space:this.base,coords:t},{space:this.gamutSpace,method:this.method,deltaEMethod:"OK",jnd:0}).coords[this.chromaIndex]}toBase(e){return e=[...e],e.some((t,n)=>n!==this.chromaIndex&&Fe(t))?e[this.chromaIndex]!==0&&(e[this.chromaIndex]=null):Fe(e[this.chromaIndex])||(e[this.chromaIndex]*=this.maxChroma(e)),e}fromBase(e){if(e=[...e],e.some((t,n)=>n!==this.chromaIndex&&Fe(t)))e[this.chromaIndex]!==0&&(e[this.chromaIndex]=null);else if(!Fe(e[this.chromaIndex])){let t=this.maxChroma(e);e[this.chromaIndex]=t?e[this.chromaIndex]/t:0}return e}};function Q0(e,t={}){if(Array.isArray(e))return e.map(f=>Q0(f,t));let{cssProperty:n="background-color",element:o,...a}=t,s=null;try{return Pe(e,a)}catch(f){s=f}let{CSS:c,getComputedStyle:l}=globalThis;if(To(e)&&o&&c&&l&&c.supports(n,e)){let f=o.style[n];e!==f&&(o.style[n]=e);let h=l(o).getPropertyValue(n);if(e!==f&&(o.style[n]=f),h!==e)try{return Pe(h,a)}catch(p){s=p}else s={message:"Color value is a valid CSS color, but it could not be resolved :("}}return t.errorMeta&&(t.errorMeta.error=s),null}function Bo(e,t={}){let{precision:n=pr.precision,format:o,inGamut:a=!0,coords:s,alpha:c,commas:l}=t,f,h=Pe(e),p=o,m=h.parseMeta;m&&!o&&(m.format.canSerialize()&&(o=m.format,p=m.formatId),s??=m.types,c??=m.alphaType,l??=m.commas),p&&(o=h.space.getFormat(o)??_e.findFormat(p)),o||(o=h.space.getFormat("default")??_e.DEFAULT_FORMAT,p=o.name),o&&o.space&&o.space!==h.space&&(h=Ve(h,o.space));let _=h.coords.slice();if(a||=o.toGamut,a&&!Ro(h)&&(_=dn(Po(h),a===!0?void 0:a).coords),o.type==="custom")if(o.serialize)f=o.serialize(_,h.alpha,t);else throw new TypeError(`format ${p} can only be used to parse colors, not for serialization`);else{let v=o.name||"color",y=o.serializeCoords(_,n,s);if(v==="color"){let C=o.id||o.ids?.[0]||h.space.cssId||h.space.id;y.unshift(C)}let w=h.alpha;c!==void 0&&typeof c!="object"&&(c=typeof c=="string"?{type:c}:{include:c});let b=c?.type??"<number>",S=c?.include===!0||o.alpha===!0||c?.include!==!1&&o.alpha!==!1&&w<1,M="";if(l??=o.commas,S){if(n!==null){let C;b==="<percentage>"&&(C="%",w*=100),w=Sl(w,{precision:n,unit:C})}M=`${l?",":" /"} ${w}`}f=`${v}(${y.join(l?", ":" ")}${M})`}return f}var eh={toXYZ:[[.6369580483012914,.14461690358620832,.1688809751641721],[.2627002120112671,.6779980715188708,.05930171646986196],[0,.028072693049087428,1.060985057710791]],fromXYZ:[[1.716651187971268,-.355670783776392,-.25336628137366],[-.666684351832489,1.616481236634939,.0157685458139111],[.017639857445311,-.042770613257809,.942103121235474]]},Oi=new Ct({id:"rec2020-linear",cssId:"--rec2020-linear",name:"Linear REC.2020",white:"D65",M:eh}),Ho=new Ct({id:"rec2020",name:"REC.2020",base:Oi,linearGamut:Oi,toBase(e){return e.map(function(t){let n=t<0?-1:1,o=t*n;return n*Math.pow(o,2.4)})},fromBase(e){return e.map(function(t){let n=t<0?-1:1,o=t*n;return n*Math.pow(o,1/2.4)})}}),rb={toXYZ:[[.4865709486482162,.26566769316909306,.1982172852343625],[.2289745640697488,.6917385218365064,.079286914093745],[0,.04511338185890264,1.043944368900976]],fromXYZ:[[2.493496911941425,-.9313836179191239,-.40271078445071684],[-.8294889695615747,1.7626640603183463,.023624685841943577],[.03584583024378447,-.07617238926804182,.9568845240076872]]},Kl=new Ct({id:"p3-linear",cssId:"display-p3-linear",name:"Linear P3",white:"D65",M:rb}),Yl={toXYZ:[[.41239079926595934,.357584339383878,.1804807884018343],[.21263900587151027,.715168678767756,.07219231536073371],[.01933081871559182,.11919477979462598,.9505321522496607]],fromXYZ:[[3.2409699419045226,-1.537383177570094,-.4986107602930034],[-.9692436362808796,1.8759675015077202,.04155505740717559],[.05563007969699366,-.20397695888897652,1.0569715142428786]]},Xl=new Ct({id:"srgb-linear",name:"Linear sRGB",white:"D65",M:Yl}),th={aliceblue:[240/255,248/255,1],antiquewhite:[250/255,235/255,215/255],aqua:[0,1,1],aquamarine:[127/255,1,212/255],azure:[240/255,1,1],beige:[245/255,245/255,220/255],bisque:[1,228/255,196/255],black:[0,0,0],blanchedalmond:[1,235/255,205/255],blue:[0,0,1],blueviolet:[138/255,43/255,226/255],brown:[165/255,42/255,42/255],burlywood:[222/255,184/255,135/255],cadetblue:[95/255,158/255,160/255],chartreuse:[127/255,1,0],chocolate:[210/255,105/255,30/255],coral:[1,127/255,80/255],cornflowerblue:[100/255,149/255,237/255],cornsilk:[1,248/255,220/255],crimson:[220/255,20/255,60/255],cyan:[0,1,1],darkblue:[0,0,139/255],darkcyan:[0,139/255,139/255],darkgoldenrod:[184/255,134/255,11/255],darkgray:[169/255,169/255,169/255],darkgreen:[0,100/255,0],darkgrey:[169/255,169/255,169/255],darkkhaki:[189/255,183/255,107/255],darkmagenta:[139/255,0,139/255],darkolivegreen:[85/255,107/255,47/255],darkorange:[1,140/255,0],darkorchid:[153/255,50/255,204/255],darkred:[139/255,0,0],darksalmon:[233/255,150/255,122/255],darkseagreen:[143/255,188/255,143/255],darkslateblue:[72/255,61/255,139/255],darkslategray:[47/255,79/255,79/255],darkslategrey:[47/255,79/255,79/255],darkturquoise:[0,206/255,209/255],darkviolet:[148/255,0,211/255],deeppink:[1,20/255,147/255],deepskyblue:[0,191/255,1],dimgray:[105/255,105/255,105/255],dimgrey:[105/255,105/255,105/255],dodgerblue:[30/255,144/255,1],firebrick:[178/255,34/255,34/255],floralwhite:[1,250/255,240/255],forestgreen:[34/255,139/255,34/255],fuchsia:[1,0,1],gainsboro:[220/255,220/255,220/255],ghostwhite:[248/255,248/255,1],gold:[1,215/255,0],goldenrod:[218/255,165/255,32/255],gray:[128/255,128/255,128/255],green:[0,128/255,0],greenyellow:[173/255,1,47/255],grey:[128/255,128/255,128/255],honeydew:[240/255,1,240/255],hotpink:[1,105/255,180/255],indianred:[205/255,92/255,92/255],indigo:[75/255,0,130/255],ivory:[1,1,240/255],khaki:[240/255,230/255,140/255],lavender:[230/255,230/255,250/255],lavenderblush:[1,240/255,245/255],lawngreen:[124/255,252/255,0],lemonchiffon:[1,250/255,205/255],lightblue:[173/255,216/255,230/255],lightcoral:[240/255,128/255,128/255],lightcyan:[224/255,1,1],lightgoldenrodyellow:[250/255,250/255,210/255],lightgray:[211/255,211/255,211/255],lightgreen:[144/255,238/255,144/255],lightgrey:[211/255,211/255,211/255],lightpink:[1,182/255,193/255],lightsalmon:[1,160/255,122/255],lightseagreen:[32/255,178/255,170/255],lightskyblue:[135/255,206/255,250/255],lightslategray:[119/255,136/255,153/255],lightslategrey:[119/255,136/255,153/255],lightsteelblue:[176/255,196/255,222/255],lightyellow:[1,1,224/255],lime:[0,1,0],limegreen:[50/255,205/255,50/255],linen:[250/255,240/255,230/255],magenta:[1,0,1],maroon:[128/255,0,0],mediumaquamarine:[102/255,205/255,170/255],mediumblue:[0,0,205/255],mediumorchid:[186/255,85/255,211/255],mediumpurple:[147/255,112/255,219/255],mediumseagreen:[60/255,179/255,113/255],mediumslateblue:[123/255,104/255,238/255],mediumspringgreen:[0,250/255,154/255],mediumturquoise:[72/255,209/255,204/255],mediumvioletred:[199/255,21/255,133/255],midnightblue:[25/255,25/255,112/255],mintcream:[245/255,1,250/255],mistyrose:[1,228/255,225/255],moccasin:[1,228/255,181/255],navajowhite:[1,222/255,173/255],navy:[0,0,128/255],oldlace:[253/255,245/255,230/255],olive:[128/255,128/255,0],olivedrab:[107/255,142/255,35/255],orange:[1,165/255,0],orangered:[1,69/255,0],orchid:[218/255,112/255,214/255],palegoldenrod:[238/255,232/255,170/255],palegreen:[152/255,251/255,152/255],paleturquoise:[175/255,238/255,238/255],palevioletred:[219/255,112/255,147/255],papayawhip:[1,239/255,213/255],peachpuff:[1,218/255,185/255],peru:[205/255,133/255,63/255],pink:[1,192/255,203/255],plum:[221/255,160/255,221/255],powderblue:[176/255,224/255,230/255],purple:[128/255,0,128/255],rebeccapurple:[102/255,51/255,153/255],red:[1,0,0],rosybrown:[188/255,143/255,143/255],royalblue:[65/255,105/255,225/255],saddlebrown:[139/255,69/255,19/255],salmon:[250/255,128/255,114/255],sandybrown:[244/255,164/255,96/255],seagreen:[46/255,139/255,87/255],seashell:[1,245/255,238/255],sienna:[160/255,82/255,45/255],silver:[192/255,192/255,192/255],skyblue:[135/255,206/255,235/255],slateblue:[106/255,90/255,205/255],slategray:[112/255,128/255,144/255],slategrey:[112/255,128/255,144/255],snow:[1,250/255,250/255],springgreen:[0,1,127/255],steelblue:[70/255,130/255,180/255],tan:[210/255,180/255,140/255],teal:[0,128/255,128/255],thistle:[216/255,191/255,216/255],tomato:[1,99/255,71/255],turquoise:[64/255,224/255,208/255],violet:[238/255,130/255,238/255],wheat:[245/255,222/255,179/255],white:[1,1,1],whitesmoke:[245/255,245/255,245/255],yellow:[1,1,0],yellowgreen:[154/255,205/255,50/255]},rh=Array(3).fill("<percentage> | <number>[0, 255]"),nh=Array(3).fill("<number>[0, 255]"),vr=new Ct({id:"srgb",name:"sRGB",base:Xl,linearGamut:Xl,fromBase:e=>e.map(t=>{let n=t<0?-1:1,o=t*n;return o>.0031308?n*(1.055*o**(1/2.4)-.055):12.92*t}),toBase:e=>e.map(t=>{let n=t<0?-1:1,o=t*n;return o<=.04045?t/12.92:n*((o+.055)/1.055)**2.4}),formats:{rgb:{coords:rh},rgb_number:{name:"rgb",commas:!0,coords:nh,alpha:!1},color:{},rgba:{coords:rh,commas:!0,alpha:!0},rgba_number:{name:"rgba",commas:!0,coords:nh},hex:{type:"custom",toGamut:!0,test:e=>/^#(([a-f0-9]{2}){3,4}|[a-f0-9]{3,4})$/i.test(e),parse(e){e.length<=5&&(e=e.replace(/[a-f0-9]/gi,"$&$&"));let t=[];return e.replace(/[a-f0-9]{2}/gi,n=>{t.push(parseInt(n,16)/255)}),{spaceId:"srgb",coords:t.slice(0,3),alpha:t.slice(3)[0]}},serialize:(e,t,{collapse:n=!0,alpha:o}={})=>{(o!==!1&&t<1||o===!0)&&e.push(t),e=e.map(s=>Math.round(s*255));let a=n&&e.every(s=>s%17===0);return"#"+e.map(s=>a?(s/17).toString(16):s.toString(16).padStart(2,"0")).join("")}},keyword:{type:"custom",test:e=>/^[a-z]+$/i.test(e),parse(e){e=e.toLowerCase();let t={spaceId:"srgb",coords:null,alpha:1};if(e==="transparent"?(t.coords=th.black,t.alpha=0):t.coords=th[e],t.coords)return t}}}}),Fo=new Ct({id:"p3",cssId:"display-p3",name:"P3",base:Kl,linearGamut:Kl,fromBase:vr.fromBase,toBase:vr.toBase});pr.display_space=vr;var nb;if(typeof CSS<"u"&&CSS.supports)for(let e of[mr,Ho,Fo]){let t={space:e,coords:e.getMinCoords(),alpha:1},n=Bo(t);if(CSS.supports("color",n)){pr.display_space=e;break}}function ob(e,{space:t,supports:n=globalThis.CSS?.supports,...o}={}){e=Pe(e);let a=Bo(e,o);if(!n||n("color",a)||!pr.display_space)a=new String(a),a.color=e;else{let s=e;if((e.coords.some(Fe)||Fe(e.alpha))&&!(nb??=n("color","hsl(none 50% 50%)"))&&(s=Po(e),s.coords=s.coords.map(It),s.alpha=It(s.alpha),a=Bo(s,o),n("color",a)))return a=new String(a),a.color=s,a;if(t===void 0){t=s.space;let c=t.displaySpaces??t.bases;!t.displaySpaces&&!t.id.startsWith("xyz-")&&(c=c.filter(l=>!l.id.startsWith("xyz-")));for(let l of c){let f=Ve(s,l),h=Bo(f,o);if(n("color",h))return a=new String(h),a.color=f,a}t=pr.display_space}s=Ve(s,t),a=new String(Bo(s,o)),a.color=s}return a}function ib(e,t,{space:n,hue:o="shorter"}={}){e=Pe(e),n||=e.space,n=_e.get(n);let a=Object.values(n.coords);[e,t]=[e,t].map(h=>Ve(h,n));let[s,c]=[e,t].map(h=>h.coords),l=s.map((h,p)=>{let m=a[p],_=c[p];return m.type==="angle"&&([h,_]=jd(o,[h,_])),oh(h,_)}),f=oh(e.alpha,t.alpha);return{space:n,coords:l,alpha:f}}function oh(e,t){return Fe(e)||Fe(t)?e===t?null:0:e-t}function ab(e,t){return e=Pe(e),t=Pe(t),e.space===t.space&&e.alpha===t.alpha&&e.coords.every((n,o)=>n===t.coords[o])}var sb=sn({getLuminance:()=>Cn,register:()=>lb,setLuminance:()=>ih});function Cn(e){return gr(e,[Lt,"y"])}function ih(e,t){un(e,[Lt,"y"],t)}function lb(e){Object.defineProperty(e.prototype,"luminance",{get(){return Cn(this)},set(t){ih(this,t)}})}function cb(e,t){e=Pe(e),t=Pe(t);let n=Math.max(Cn(e),0),o=Math.max(Cn(t),0);return o>n&&([n,o]=[o,n]),(n+.05)/(o+.05)}var ub=.56,db=.57,hb=.62,fb=.65,ah=.022,pb=1.414,mb=.1,gb=5e-4,vb=1.14,sh=.027,bb=1.14;function lh(e){return e>=ah?e:e+(ah-e)**pb}function Go(e){return(e<0?-1:1)*Math.pow(Math.abs(e),2.4)}function wb(e,t){t=Pe(t),e=Pe(e);let n,o,a,s,c,l;t=Ve(t,"srgb"),[s,c,l]=t.coords.map(v=>Fe(v)?0:v);let f=Go(s)*.2126729+Go(c)*.7151522+Go(l)*.072175;e=Ve(e,"srgb"),[s,c,l]=e.coords.map(v=>Fe(v)?0:v);let h=Go(s)*.2126729+Go(c)*.7151522+Go(l)*.072175,p=lh(f),m=lh(h),_=m>p;return Math.abs(m-p)<gb?o=0:_?(n=m**ub-p**db,o=n*vb):(n=m**fb-p**hb,o=n*bb),Math.abs(o)<mb?a=0:o>0?a=o-sh:a=o+sh,a*100}function _b(e,t){e=Pe(e),t=Pe(t);let n=Math.max(Cn(e),0),o=Math.max(Cn(t),0);o>n&&([n,o]=[o,n]);let a=n+o;return a===0?0:(n-o)/a}var yb=5e4;function kb(e,t){e=Pe(e),t=Pe(t);let n=Math.max(Cn(e),0),o=Math.max(Cn(t),0);return o>n&&([n,o]=[o,n]),o===0?yb:(n-o)/o}function Eb(e,t){e=Pe(e),t=Pe(t);let n=gr(e,[mr,"l"]),o=gr(t,[mr,"l"]);return Math.abs(n-o)}var Sb=216/24389,ch=24/116,za=24389/27,Jl=Kt.D65,Ql=new _e({id:"lab-d65",name:"Lab D65",coords:{l:{refRange:[0,100],name:"Lightness"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:Jl,base:Lt,fromBase(e){let t=e.map((n,o)=>n/Jl[o]).map(n=>n>Sb?Math.cbrt(n):(za*n+16)/116);return[116*t[1]-16,500*(t[0]-t[1]),200*(t[1]-t[2])]},toBase(e){let t=[];return t[1]=(e[0]+16)/116,t[0]=e[1]/500+t[1],t[2]=t[1]-e[2]/200,[t[0]>ch?Math.pow(t[0],3):(116*t[0]-16)/za,e[0]>8?Math.pow((e[0]+16)/116,3):e[0]/za,t[2]>ch?Math.pow(t[2],3):(116*t[2]-16)/za].map((n,o)=>n*Jl[o])},formats:{"lab-d65":{coords:["<number> | <percentage>","<number> | <percentage>","<number> | <percentage>"]}}}),ec=Math.pow(5,.5)*.5+.5;function Ab(e,t){e=Pe(e),t=Pe(t);let n=gr(e,[Ql,"l"]),o=gr(t,[Ql,"l"]),a=Math.abs(Math.pow(n,ec)-Math.pow(o,ec)),s=Math.pow(a,1/ec)*Math.SQRT2-40;return s<7.5?0:s}var Na=sn({contrastAPCA:()=>wb,contrastDeltaPhi:()=>Ab,contrastLstar:()=>Eb,contrastMichelson:()=>_b,contrastWCAG21:()=>cb,contrastWeber:()=>kb});function Mb(e,t,n){To(n)&&(n={algorithm:n});let{algorithm:o,...a}=n||{};if(!o){let s=Object.keys(Na).map(c=>c.replace(/^contrast/,"")).join(", ");throw new TypeError(`contrast() function needs a contrast algorithm. Please specify one of: ${s}`)}e=Pe(e),t=Pe(t);for(let s in Na)if("contrast"+o.toLowerCase()===s.toLowerCase())return Na[s](e,t,a);throw new TypeError(`Unknown contrast algorithm: ${o}`)}var xb=sn({register:()=>Ib,uv:()=>Ba,xy:()=>uh});function Ba(e){let[t,n,o]=Ai(e,Lt),a=t+15*n+3*o;return[4*t/a,9*n/a]}function uh(e){let[t,n,o]=Ai(e,Lt),a=t+n+o;return[t/a,n/a]}function Ib(e){Object.defineProperty(e.prototype,"uv",{get(){return Ba(this)}}),Object.defineProperty(e.prototype,"xy",{get(){return uh(this)}})}function Ti(e,t,n={}){To(n)&&(n={method:n});let{method:o=pr.deltaE,...a}=n;for(let s in zo)if("deltae"+o.toLowerCase()===s.toLowerCase())return zo[s](e,t,a);throw new TypeError(`Unknown deltaE method: ${o}`)}var Cb=sn({darken:()=>hh,lighten:()=>dh});function dh(e,t=.25){let n=[_e.get("oklch","lch"),"l"];return un(e,n,o=>o*(1+t))}function hh(e,t=.25){let n=[_e.get("oklch","lch"),"l"];return un(e,n,o=>o*(1-t))}dh.returns="color",hh.returns="color";var Ob=sn({isRange:()=>rc,mix:()=>fh,range:()=>Li,register:()=>Tb,steps:()=>ph});function fh(e,t,n,o={}){return[e,t]=[Pe(e),Pe(t)],Mn(n)==="object"&&([n,o]=[.5,n]),Li(e,t,o)(n??.5)}function ph(e,t,n={}){let o;rc(e)&&([o,n]=[e,t],[e,t]=o.rangeArgs.colors);let{maxDeltaE:a,deltaEMethod:s,steps:c=2,maxSteps:l=1e3,...f}=n;o||([e,t]=[Pe(e),Pe(t)],o=Li(e,t,f));let h=Ti(e,t,s),p=a>0?Math.max(c,Math.ceil(h/a)+1):c,m=[];if(l!==void 0&&(p=Math.min(p,l)),p===1)m=[{p:.5,color:o(.5)}];else{let _=1/(p-1);m=Array.from({length:p},(v,y)=>{let w=y*_;return{p:w,color:o(w)}})}if(a>0){let _=m.reduce((v,y,w)=>{if(w===0)return 0;let b=Ti(y.color,m[w-1].color,s);return Math.max(v,b)},0);for(;_>a;){_=0;for(let v=1;v<m.length&&m.length<l;v++){let y=m[v-1],w=m[v],b=(w.p+y.p)/2,S=o(b);_=Math.max(_,Ti(S,y.color,s),Ti(S,w.color,s)),m.splice(v,0,{p:b,color:o(b)}),v++}}}return m=m.map(_=>_.color),m}function Li(e,t,n={}){if(rc(e)){let[p,m]=[e,t];return Li(...p.rangeArgs.colors,{...p.rangeArgs.options,...m})}let{space:o,outputSpace:a,progression:s,premultiplied:c}=n;e=Pe(e),t=Pe(t),e=Po(e),t=Po(t);let l={colors:[e,t],options:n};o?o=_e.get(o):o=_e.registry[pr.interpolationSpace]||e.space,a=a?_e.get(a):o,e=Ve(e,o),t=Ve(t,o),e=dn(e),t=dn(t);let f=o.hueId,h=o.hueIndex;if(f){let p=n.hue=n.hue||"shorter",m=[o,f],[_,v]=[gr(e,m),gr(t,m)];Fe(_)&&!Fe(v)?_=v:Fe(v)&&!Fe(_)&&(v=_),[_,v]=jd(p,[_,v]),un(e,m,_),un(t,m,v)}return Fe(e.alpha)&&!Fe(t.alpha)?e.alpha=t.alpha:Fe(t.alpha)&&!Fe(e.alpha)&&(t.alpha=e.alpha),c&&(e.coords=tc(e.coords,e.alpha,h),t.coords=tc(t.coords,t.alpha,h)),Object.assign(p=>{p=s?s(p):p;let m=e.coords.map((y,w)=>{let b=t.coords[w];return Ei(y,b,p)}),_=Ei(e.alpha,t.alpha,p),v={space:o,coords:m,alpha:_};return c&&(v.coords=tc(v.coords,_,h,!0)),a!==o&&(v=Ve(v,a)),v},{rangeArgs:l})}function tc(e,t,n,o=!1){return Fe(t)||o&&t===0?e:e.map((a,s)=>s===n||Fe(a)?a:o?a/t:a*t)}function rc(e){return Mn(e)==="function"&&!!e.rangeArgs}pr.interpolationSpace="lab";function Tb(e){e.defineFunction("mix",fh,{returns:"color"}),e.defineFunction("range",Li,{returns:"function<color>"}),e.defineFunction("steps",ph,{returns:"array<color>"})}var Vr=new _e({id:"hsl",name:"HSL",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:vr,rgbGamut:vr,fromBase:e=>{let t=Math.max(...e),n=Math.min(...e),[o,a,s]=e,[c,l,f]=[null,0,(n+t)/2],h=t-n;if(h!==0){switch(l=f===0||f===1?0:(t-f)/Math.min(f,1-f),t){case o:c=(a-s)/h+(a<s?6:0);break;case a:c=(s-o)/h+2;break;case s:c=(o-a)/h+4}c=c*60}return l<0&&(c+=180,l=Math.abs(l)),c>=360&&(c-=360),[c,l*100,f*100]},toBase:e=>{let[t,n,o]=e;t=t%360,t<0&&(t+=360),n/=100,o/=100;function a(s){let c=(s+t/30)%12,l=n*Math.min(o,1-o);return o-l*Math.max(-1,Math.min(c-3,9-c,1))}return[a(0),a(8),a(4)]},formats:{hsl:{coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]},hsla:{coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"],commas:!0,alpha:!0}}}),Lb=new _e({id:"hsl-p3",cssId:"--hsl-p3",name:"HSL P3",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:Fo,rgbGamut:Fo,fromBase:Vr.fromBase,toBase:Vr.toBase}),Rb=new _e({id:"hsl-rec2020",cssId:"--hsl-rec2020",name:"HSL Rec.2020",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:Ho,rgbGamut:Ho,fromBase:Vr.fromBase,toBase:Vr.toBase}),mh=new _e({id:"hsv",name:"HSV",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},v:{range:[0,100],name:"Value"}},base:vr,rgbGamut:vr,fromBase(e){let t=Math.max(...e),n=Math.min(...e),[o,a,s]=e,[c,l,f]=[null,0,t],h=t-n;if(h!==0){switch(t){case o:c=(a-s)/h+(a<s?6:0);break;case a:c=(s-o)/h+2;break;case s:c=(o-a)/h+4}c=c*60}return f&&(l=h/f),c>=360&&(c-=360),[c,l*100,f*100]},toBase(e){let[t,n,o]=e;t=t%360,t<0&&(t+=360),n/=100,o/=100;function a(s){let c=(s+t/60)%6;return o-o*n*Math.max(0,Math.min(c,4-c,1))}return[a(5),a(3),a(1)]},formats:{color:{id:"--hsv",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}}),Pb=new _e({id:"hwb",name:"HWB",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},w:{range:[0,100],name:"Whiteness"},b:{range:[0,100],name:"Blackness"}},base:mh,rgbGamut:vr,fromBase(e){let[t,n,o]=e;return[t,o*(100-n)/100,100-o]},toBase(e){let[t,n,o]=e;n/=100,o/=100;let a=n+o;if(a>=1)return[t,0,n/a*100];let s=1-o;return[t,(s===0?0:1-n/s)*100,s*100]},formats:{hwb:{coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}}),$b={toXYZ:[[.5766690429101305,.1855582379065463,.1882286462349947],[.29734497525053605,.6273635662554661,.07529145849399788],[.02703136138641234,.07068885253582723,.9913375368376388]],fromXYZ:[[2.0415879038107465,-.5650069742788596,-.34473135077832956],[-.9692436362808795,1.8759675015077202,.04155505740717557],[.013444280632031142,-.11836239223101838,1.0151749943912054]]},nc=new Ct({id:"a98rgb-linear",cssId:"--a98-rgb-linear",name:"Linear Adobe® 98 RGB compatible",white:"D65",M:$b}),Db=new Ct({id:"a98rgb",cssId:"a98-rgb",name:"Adobe® 98 RGB compatible",base:nc,linearGamut:nc,toBase:e=>e.map(t=>Math.pow(Math.abs(t),563/256)*Math.sign(t)),fromBase:e=>e.map(t=>Math.pow(Math.abs(t),256/563)*Math.sign(t))}),zb={toXYZ:[[.7977666449006423,.13518129740053308,.0313477341283922],[.2880748288194013,.711835234241873,8993693872564e-17],[0,0,.8251046025104602]],fromXYZ:[[1.3457868816471583,-.25557208737979464,-.05110186497554526],[-.5446307051249019,1.5082477428451468,.02052744743642139],[0,0,1.2119675456389452]]},oc=new Ct({id:"prophoto-linear",cssId:"--prophoto-rgb-linear",name:"Linear ProPhoto",white:"D50",base:Ll,M:zb}),Nb=1/512,Bb=16/512,Hb=new Ct({id:"prophoto",cssId:"prophoto-rgb",name:"ProPhoto",base:oc,linearGamut:oc,toBase(e){return e.map(t=>{let n=t<0?-1:1,o=t*n;return o<Bb?t/16:n*o**1.8})},fromBase(e){return e.map(t=>{let n=t<0?-1:1,o=t*n;return o>=Nb?n*o**(1/1.8):16*t})}}),ic=1.09929682680944,gh=.018053968510807,Fb=new Ct({id:"--rec2020-oetf",name:"REC.2020_Scene_Referred",base:Oi,linearGamut:Oi,referred:"scene",toBase(e){return e.map(function(t){let n=t<0?-1:1,o=t*n;return o<gh*4.5?t/4.5:n*Math.pow((o+ic-1)/ic,1/.45)})},fromBase(e){return e.map(function(t){let n=t<0?-1:1,o=t*n;return o>=gh?n*(ic*Math.pow(o,.45)-.09929682680944008):4.5*t})}}),Gb=new No({id:"oklch-p3",cssId:"--oklch-p3",name:"OKLCh P3",base:In,gamutSpace:Fo}),Wb=new No({id:"oklch-srgb",cssId:"--oklch-srgb",name:"OKLCh sRGB",base:In,gamutSpace:vr}),Ub=new No({id:"oklch-rec2020",cssId:"--oklch-rec2020",name:"OKLCh Rec.2020",base:In,gamutSpace:Ho}),Vb=new No({id:"lch-p3",cssId:"--lch-p3",name:"LCH P3",base:Dt,gamutSpace:Fo}),qb=new No({id:"lch-srgb",cssId:"--lch-srgb",name:"LCH sRGB",base:Dt,gamutSpace:vr}),Zb=new No({id:"lch-rec2020",cssId:"--lch-rec2020",name:"LCH Rec.2020",base:Dt,gamutSpace:Ho}),Wo=2*Math.PI,Qr={...Tr.M,toLMS:[[.4122214694707629,.5363325372617349,.0514459932675022],[.2119034958178251,.6806995506452344,.1073969535369405],[.0883024591900564,.2817188391361215,.6299787016738222]],toSRGBLinear:[[4.076741636075958,-3.307711539258063,.2309699031821043],[-1.2684379732850315,2.609757349287688,-.341319376002657],[-.0041960761386756,-.7034186179359362,1.7076146940746117]]},Ha=[[[-1.8817031,-.80936501],[1.19086277,1.76576728,.59662641,.75515197,.56771245]],[[1.8144408,-1.19445267],[.73956515,-.45954404,.08285427,.12541073,-.14503204]],[[.13110758,1.81333971],[1.35733652,-.00915799,-1.1513021,-.50559606,.00692167]]],ac=Number.MAX_VALUE,Fa=.206,vh=.03,Ri=1.206/1.03;function Ft(e,t){let n=e.length;if(n!==t.length)throw new Error(`Vectors of size ${n} and ${t.length} are not aligned`);let o=0;return e.forEach((a,s)=>{o+=a*t[s]}),o}function Pi(e){return .5*(Ri*e-Fa+Math.sqrt((Ri*e-Fa)*(Ri*e-Fa)+4*vh*Ri*e))}function Uo(e){return(e**2+Fa*e)/(Ri*(e+vh))}function sc(e){let[t,n]=e;return[n/t,n/(1-t)]}function jb(e,t){return[.11516993+1/(7.4477897+4.1590124*t+e*(-2.19557347+1.75198401*t+e*(-2.13704948-10.02301043*t+e*(-4.24894561+5.38770819*t+4.69891013*e)))),.11239642+1/(1.6132032-.68124379*t+e*(.40370612+.90148123*t+e*(-.27087943+.6122399*t+e*(.00299215-.45399568*t-.14661872*e))))]}function lc(e,t){let n=Xe(e,Qr.LabtoLMS);return n[0]=n[0]**3,n[1]=n[1]**3,n[2]=n[2]**3,Xe(n,t,n)}function Ga(e,t,n,o){let a=Yb(e,t,n,o),s=lc([1,a*e,a*t],n),c=ut(1/Math.max(...s),1/3);return[c,c*a]}function Kb(e,t,n,o,a,s,c,l){let f;if(l===void 0&&(l=Ga(e,t,s,c)),(n-a)*l[1]-(l[0]-a)*o<=0)f=l[1]*a/(o*l[0]+l[1]*(a-n));else{f=l[1]*(a-1)/(o*(l[0]-1)+l[1]*(a-n));let h=n-a,p=o,m=Ft(Qr.LabtoLMS[0].slice(1),[e,t]),_=Ft(Qr.LabtoLMS[1].slice(1),[e,t]),v=Ft(Qr.LabtoLMS[2].slice(1),[e,t]),y=h+p*m,w=h+p*_,b=h+p*v,S=a*(1-f)+f*n,M=f*o,C=S+M*m,L=S+M*_,D=S+M*v,Y=C**3,U=L**3,oe=D**3,H=3*y*C**2,me=3*w*L**2,ve=3*b*D**2,P=6*y**2*C,J=6*w**2*L,A=6*b**2*D,ee=Ft(s[0],[Y,U,oe])-1,Ce=Ft(s[0],[H,me,ve]),ue=Ft(s[0],[P,J,A]),ze=Ce/(Ce*Ce-.5*ee*ue),se=-ee*ze,Ae=Ft(s[1],[Y,U,oe])-1,q=Ft(s[1],[H,me,ve]),W=Ft(s[1],[P,J,A]),ke=q/(q*q-.5*Ae*W),ge=-Ae*ke,pe=Ft(s[2],[Y,U,oe])-1,it=Ft(s[2],[H,me,ve]),ft=Ft(s[2],[P,J,A]),We=it/(it*it-.5*pe*ft),Ze=-pe*We;se=ze>=0?se:ac,ge=ke>=0?ge:ac,Ze=We>=0?Ze:ac,f+=Math.min(se,Math.min(ge,Ze))}return f}function bh(e,t,n){let[o,a,s]=e,c=Ga(a,s,t,n),l=Kb(a,s,o,1,o,t,n,c),f=sc(c),h=l/Math.min(o*f[0],(1-o)*f[1]),p=jb(a,s),m=o*p[0],_=(1-o)*p[1],v=.9*h*Math.sqrt(Math.sqrt(1/(1/m**4+1/_**4)));return m=o*.4,_=(1-o)*.8,[Math.sqrt(1/(1/m**2+1/_**2)),v,l]}function Yb(e,t,n,o){let a,s,c,l,f,h,p,m;Ft(o[0][0],[e,t])>1?([a,s,c,l,f]=o[0][1],[h,p,m]=n[0]):Ft(o[1][0],[e,t])>1?([a,s,c,l,f]=o[1][1],[h,p,m]=n[1]):([a,s,c,l,f]=o[2][1],[h,p,m]=n[2]);let _=a+s*e+c*t+l*e**2+f*e*t,v=Ft(Qr.LabtoLMS[0].slice(1),[e,t]),y=Ft(Qr.LabtoLMS[1].slice(1),[e,t]),w=Ft(Qr.LabtoLMS[2].slice(1),[e,t]),b=1+_*v,S=1+_*y,M=1+_*w,C=b**3,L=S**3,D=M**3,Y=3*v*b**2,U=3*y*S**2,oe=3*w*M**2,H=6*v**2*b,me=6*y**2*S,ve=6*w**2*M,P=h*C+p*L+m*D,J=h*Y+p*U+m*oe,A=h*H+p*me+m*ve;return _=_-P*J/(J**2-.5*P*A),_}function Xb(e,t,n){let[o,a,s]=e,c=Uo(s),l=null,f=null;if(o=Or(o)/360,c!==0&&c!==1&&a!==0){let h=Math.cos(Wo*o),p=Math.sin(Wo*o),[m,_,v]=bh([c,h,p],t,n),y=.8,w=1.25,b,S,M,C;a<y?(b=w*a,S=0,M=y*m,C=1-M/_):(b=5*(a-.8),S=_,M=.2*_**2*1.25**2/m,C=1-M/(v-_));let L=S+b*M/(1-C*b);l=L*h,f=L*p}return[c,l,f]}function Jb(e,t,n){let o=1e-7,a=1e-4,s=e[0],c=0,l=Pi(s),f=Math.sqrt(e[1]**2+e[2]**2),h=.5+Math.atan2(-e[2],-e[1])/Wo;if(l!==0&&l!==1&&f!==0){let[m,_,v]=bh([s,e[1]/f,e[2]/f],t,n),y=.8,w=1.25,b,S,M,C;f<_?(S=y*m,M=1-S/_,C=f/(S+M*f),c=C*y):(b=_,S=.2*_**2*w**2/m,M=1-S/(v-_),C=(f-b)/(S+M*(f-b)),c=y+.2*C)}const p=Math.abs(c)<a;return p||l===0||Math.abs(1-l)<o?(h=null,p||(c=0)):h=Or(h*360),[h,c,l]}var Wa=new _e({id:"okhsl",name:"Okhsl",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,1],name:"Saturation"},l:{range:[0,1],name:"Lightness"}},base:Tr,gamutSpace:"self",M:Qr,fromBase(e){return Jb(e,Qr.toSRGBLinear,Ha)},toBase(e){return Xb(e,Qr.toSRGBLinear,Ha)},formats:{color:{id:"--okhsl",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}});Wa.rgbGamut=new Ct({id:"okhsl-prism",cssId:"--okhsl-prism",name:"Okhsl Prism",base:Wa,fromBase(e){return Vr.toBase([e[0],e[1]*100,e[2]*100])},toBase(e){const t=Vr.fromBase(e);return t[1]/=100,t[2]/=100,t}});var wh=new _e({id:"oklrab",name:"Oklrab",coords:{l:{refRange:[0,1],name:"Lightness"},a:{refRange:[-.4,.4]},b:{refRange:[-.4,.4]}},white:"D65",base:Tr,fromBase(e){return[Pi(e[0]),e[1],e[2]]},toBase(e){return[Uo(e[0]),e[1],e[2]]},formats:{color:{coords:["<percentage> | <number>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}}),Qb=new _e({id:"oklrch",name:"Oklrch",coords:{l:{refRange:[0,1],name:"Lightness"},c:{refRange:[0,.4],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},white:"D65",base:wh,fromBase:Dt.fromBase,toBase:Dt.toBase,formats:{color:{coords:["<percentage> | <number>","<number> | <percentage>[0,1]","<number> | <angle>"]}}}),cc={toSRGBLinear:Wa.M.toSRGBLinear};function e6(e,t,n){let[o,a,s]=e;o=Or(o)/360;let c=Uo(s),l=null,f=null;if(c!==0&&a!==0){let h=Math.cos(Wo*o),p=Math.sin(Wo*o),m=Ga(h,p,t,n),[_,v]=sc(m),y=.5,w=1-y/_,b=1-a*y/(y+v-v*w*a),S=a*v*y/(y+v-v*w*a);c=s*b;let M=s*S,C=Uo(b),L=S*C/b,D=Uo(c);M=M*D/c,c=D;let[Y,U,oe]=lc([C,h*L,p*L],t),H=ut(1/Math.max(Math.max(Y,U),Math.max(oe,0)),1/3);c=c*H,M=M*H,l=M*h,f=M*p}return[c,l,f]}function t6(e,t,n){let o=1e-4,a=e[0],s=0,c=Pi(a),l=Math.sqrt(e[1]**2+e[2]**2),f=.5+Math.atan2(-e[2],-e[1])/Wo;if(a!==0&&a!==1&&l!==0){let h=e[1]/l,p=e[2]/l,m=Ga(h,p,t,n),[_,v]=sc(m),y=.5,w=1-y/_,b=v/(l+a*v),S=b*a,M=b*l,C=Uo(S),L=M*C/S,[D,Y,U]=lc([C,h*L,p*L],t),oe=ut(1/Math.max(Math.max(D,Y),Math.max(U,0)),1/3);a=a/oe,l=l/oe,l=l*Pi(a)/a,a=Pi(a),c=a/S,s=(y+v)*M/(v*y+v*w*M)}return Math.abs(s)<o||c===0?f=null:f=Or(f*360),[f,s,c]}var uc=new _e({id:"okhsv",name:"Okhsv",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,1],name:"Saturation"},v:{range:[0,1],name:"Value"}},base:Tr,gamutSpace:"self",M:cc,fromBase(e){return t6(e,cc.toSRGBLinear,Ha)},toBase(e){return e6(e,cc.toSRGBLinear,Ha)},formats:{color:{id:"--okhsv",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}});uc.rgbGamut=new Ct({id:"okhsv-prism",cssId:"--okhsv-prism",name:"Okhsv Prism",base:uc,fromBase(e){return Vr.toBase([e[0],e[1]*100,e[2]*100])},toBase(e){const t=Vr.fromBase(e);return t[1]/=100,t[2]/=100,t}});var _h=Kt.D65,r6=216/24389,yh=24389/27,[kh,Eh]=Ba({space:Lt,coords:_h}),Sh=new _e({id:"luv",name:"Luv",coords:{l:{refRange:[0,100],name:"Lightness"},u:{refRange:[-215,215]},v:{refRange:[-215,215]}},white:_h,base:Lt,fromBase(e){let t=[It(e[0]),It(e[1]),It(e[2])],n=t[1],[o,a]=Ba({space:Lt,coords:t});if(!Number.isFinite(o)||!Number.isFinite(a))return[0,0,0];let s=n<=r6?yh*n:116*Math.cbrt(n)-16;return[s,13*s*(o-kh),13*s*(a-Eh)]},toBase(e){let[t,n,o]=e;if(t===0||Fe(t))return[0,0,0];n=It(n),o=It(o);let a=n/(13*t)+kh,s=o/(13*t)+Eh,c=t<=8?t/yh:Math.pow((t+16)/116,3);return[c*(9*a/(4*s)),c,c*((12-3*a-20*s)/(4*s))]},formats:{color:{id:"--luv",coords:["<number> | <percentage>","<number> | <percentage>","<number> | <percentage>"]}}}),dc=new _e({id:"lchuv",name:"LChuv",coords:{l:{refRange:[0,100],name:"Lightness"},c:{refRange:[0,220],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:Sh,fromBase:Dt.fromBase,toBase:Dt.toBase,formats:{color:{id:"--lchuv",coords:["<number> | <percentage>","<number> | <percentage>","<number> | <angle>"]}}}),n6=216/24389,o6=24389/27,hn=Yl.fromXYZ,Ah=hn[0][0],Mh=hn[0][1],hc=hn[0][2],xh=hn[1][0],Ih=hn[1][1],fc=hn[1][2],Ch=hn[2][0],Oh=hn[2][1],pc=hn[2][2];function Vo(e,t,n){const o=t/(Math.sin(n)-e*Math.cos(n));return o<0?1/0:o}function Ua(e){const t=Math.pow(e+16,3)/1560896,n=t>n6?t:e/o6,o=n*(284517*Ah-94839*hc),a=n*(838422*hc+769860*Mh+731718*Ah),s=n*(632260*hc-126452*Mh),c=n*(284517*xh-94839*fc),l=n*(838422*fc+769860*Ih+731718*xh),f=n*(632260*fc-126452*Ih),h=n*(284517*Ch-94839*pc),p=n*(838422*pc+769860*Oh+731718*Ch),m=n*(632260*pc-126452*Oh);return{r0s:o/s,r0i:a*e/s,r1s:o/(s+126452),r1i:(a-769860)*e/(s+126452),g0s:c/f,g0i:l*e/f,g1s:c/(f+126452),g1i:(l-769860)*e/(f+126452),b0s:h/m,b0i:p*e/m,b1s:h/(m+126452),b1i:(p-769860)*e/(m+126452)}}function Th(e,t){const n=t/360*Math.PI*2,o=Vo(e.r0s,e.r0i,n),a=Vo(e.r1s,e.r1i,n),s=Vo(e.g0s,e.g0i,n),c=Vo(e.g1s,e.g1i,n),l=Vo(e.b0s,e.b0i,n),f=Vo(e.b1s,e.b1i,n);return Math.min(o,a,s,c,l,f)}var i6=new _e({id:"hsluv",name:"HSLuv",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:dc,gamutSpace:vr,rgbGamut:vr,fromBase(e){let[t,n,o]=[It(e[0]),It(e[1]),It(e[2])],a;return t>99.9999999?(a=0,t=100):t<1e-8?(a=0,t=0):a=n/Th(Ua(t),o)*100,[o,a,t]},toBase(e){let[t,n,o]=[It(e[0]),It(e[1]),It(e[2])],a;return o>99.9999999?(o=100,a=0):o<1e-8?(o=0,a=0):a=Th(Ua(o),t)/100*n,[o,a,t]},formats:{color:{id:"--hsluv",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}}),fn=Yl.fromXYZ;fn[0][0],fn[0][1],fn[0][2],fn[1][0],fn[1][1],fn[1][2],fn[2][0],fn[2][1],fn[2][2];function qo(e,t){return Math.abs(t)/Math.sqrt(Math.pow(e,2)+1)}function Lh(e){let t=qo(e.r0s,e.r0i),n=qo(e.r1s,e.r1i),o=qo(e.g0s,e.g0i),a=qo(e.g1s,e.g1i),s=qo(e.b0s,e.b0i),c=qo(e.b1s,e.b1i);return Math.min(t,n,o,a,s,c)}var mc=new _e({id:"hpluv",name:"HPLuv",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:dc,gamutSpace:"self",fromBase(e){let[t,n,o]=[It(e[0]),It(e[1]),It(e[2])],a;return t>99.9999999?(a=0,t=100):t<1e-8?(a=0,t=0):a=n/Lh(Ua(t))*100,[o,a,t]},toBase(e){let[t,n,o]=[It(e[0]),It(e[1]),It(e[2])],a;return o>99.9999999?(o=100,a=0):o<1e-8?(o=0,a=0):a=Lh(Ua(o))/100*n,[o,a,t]},formats:{color:{id:"--hpluv",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}});mc.rgbGamut=new Ct({id:"hpluv-prism",cssId:"--hpluv-prism",name:"HPLuv Prism",base:mc,fromBase(e){return Vr.toBase(e)},toBase(e){return Vr.fromBase(e)}});var Va=.021,qa=Math.sqrt(Va/3),a6=qa*qa*qa,Rh=.978,Ph=.058,$h=264.5*Math.PI/180,gc=.7,s6=.37,$i={M1:[[.8154832155941288,.36033406153856506,-.12434135574228214],[.03301008352745078,.9292865057066169,.03612192716575443],[.04818827356456861,.2642841575338424,.6334971784195534]],M1_INV:[[1.2325947975032656,-.5557590239287523,.2736201534771583],[-.040801327874216024,1.112228863738653,-.07142753586443781],[-.07673825928337766,-.42172784577108585,1.5875238558143416]],M2:[[.21193779684470104,.7992121834263127,-.00410075161564345],[2.4672018828033475,-2.9877348024830788,.520532919679731],[-.11390787868068575,1.3932982808117473,-1.279390402131062]],M2_INV:[[.9930001151336143,.32599327253052285,.1294508563171392],[.9930001151336139,-.08708353111074627,-.03861361743004929],[.9930001151336136,-.12386097008215022,-.8351991365871061]]},On=[0,.05,.1,.15,.2,.25,.3,.35,.4,.45,.5,.55,.6,.65,.7,.75,.8,.85,.9,.95,1],pn=[0,.009494013522189627,.02564569838030986,.055259661658689105,.10574901531227408,.16055853320726027,.21405964892993756,.26786230508811226,.3220435246104499,.3739052098520243,.43020997780918835,.4835465162128873,.5399824670411353,.5956710081330342,.6542161666450478,.7115380216519989,.7702762412711669,.8293313467712837,.889406386197059,.9462829573474728,1],vc=On.length;function bc(e){let t=e/(2*a6),n=2*qa*Math.sinh(Math.asinh(t)/3),o=n*n*n+Va*n-e,a=3*n*n+Va,s=6*n,c=2*a*a-o*s;return Math.abs(c)>1e-30&&(n-=2*o*a/c),n}function wc(e){return e*e*e+Va*e}function Dh(e){let t=Math.max(0,Math.min(1,(e-s6)/.63));return Math.sin(Math.PI*t)**2}function l6(e,t,n){let o=Math.sqrt(t*t+n*n);if(o<1e-12)return[t,n];let a=Dh(e);if(a<1e-12)return[t,n];let s=Math.atan2(n,t),c=s-$h;c=c-Math.round(c/(2*Math.PI))*2*Math.PI;let l=Math.exp(-.5*(c/gc)**2),f=s+Ph*a*l;return[o*Math.cos(f),o*Math.sin(f)]}function c6(e,t,n){let o=Math.sqrt(t*t+n*n);if(o<1e-12)return[t,n];let a=Dh(e);if(a<1e-12)return[t,n];let s=Math.atan2(n,t),c=gc*gc,l=Ph*a,f=s;for(let h=0;h<8;h++){let p=f-$h;p=p-Math.round(p/(2*Math.PI))*2*Math.PI;let m=Math.exp(-.5*p*p/c),_=f+l*m-s,v=1+l*m*(-p/c),y=l*m*(-1/c+p*p/(c*c)),w=2*v*v-_*y;Math.abs(w)>1e-30&&(f-=2*_*v/w)}return[o*Math.cos(f),o*Math.sin(f)]}function u6(e){if(e<=0||e>=1)return e;let t=0,n=vc-1;for(;n-t>1;){let a=t+n>>1;On[a]<=e?t=a:n=a}let o=(e-On[t])/(On[n]-On[t]);return pn[t]+o*(pn[n]-pn[t])}function d6(e){if(e<=pn[0]||e>=pn[vc-1])return e;let t=0,n=vc-1;for(;n-t>1;){let a=t+n>>1;pn[a]<=e?t=a:n=a}let o=(e-pn[t])/(pn[n]-pn[t]);return On[t]+o*(On[n]-On[t])}var zh=new _e({id:"helmgen",name:"HelmGen",cssId:"--helmgen",coords:{l:{refRange:[0,1],name:"Lightness"},a:{refRange:[-.6,.6]},b:{refRange:[-.6,.6]}},white:"D65",base:Lt,M:$i,fromBase(e){let t=Xe(e,$i.M1),n=bc(Math.max(t[0],0)),o=bc(Math.max(t[1],0)),a=bc(Math.max(t[2],0));{let f=(n+o+a)/3,h=(Math.max(n,o,a)-Math.min(n,o,a))/Math.max(Math.abs(f),1e-30),p=Math.exp(-((h/1e-5)**2));n+=p*(f-n),o+=p*(f-o),a+=p*(f-a)}let[s,c,l]=Xe([n,o,a],$i.M2);{let f=Math.sqrt(c*c+l*l);if(f>1e-12){let h=Math.pow(f,Rh)/f;c*=h,l*=h}}return s=u6(s),[c,l]=l6(s,c,l),[s,c,l]},toBase(e){let[t,n,o]=e;[n,o]=c6(t,n,o),t=d6(t);{let p=Math.sqrt(n*n+o*o);if(p>1e-12){let m=Math.pow(p,1/Rh)/p;n*=m,o*=m}}let[a,s,c]=Xe([t,n,o],$i.M2_INV);{let p=(a+s+c)/3,m=(Math.max(a,s,c)-Math.min(a,s,c))/Math.max(Math.abs(p),1e-30),_=Math.exp(-((m/1e-5)**2));a+=_*(p-a),s+=_*(p-s),c+=_*(p-c)}let l=wc(a),f=wc(s),h=wc(c);return Xe([l,f,h],$i.M1_INV)}}),h6=new _e({id:"helmgenlch",name:"HelmGenLCh",cssId:"--helmgenlch",coords:{l:{refRange:[0,1],name:"Lightness"},c:{refRange:[0,.65],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},white:"D65",base:zh,fromBase:Dt.fromBase,toBase:Dt.toBase}),Di=new Ct({id:"rec2100-linear",name:"Linear REC.2100",white:"D65",M:eh}),Nh=203,Bh=2610/2**14,f6=2**14/2610,p6=2523/32,Hh=32/2523,Fh=3424/4096,Gh=2413/128,Wh=2392/128,m6=new Ct({id:"rec2100pq",cssId:"rec2100-pq",name:"REC.2100-PQ",base:Di,linearGamut:Di,toBase(e){return e.map(function(t){return(Math.max(t**Hh-Fh,0)/(Gh-Wh*t**Hh))**f6*1e4/Nh})},fromBase(e){return e.map(function(t){let n=Math.max(t*Nh/1e4,0);return((Fh+Gh*n**Bh)/(1+Wh*n**Bh))**p6})}}),Uh=.17883277,Vh=.28466892,qh=.55991073,_c=3.7743,g6=new Ct({id:"rec2100hlg",cssId:"rec2100-hlg",name:"REC.2100-HLG",referred:"scene",base:Di,linearGamut:Di,toBase(e){return e.map(function(t){return t<=.5?t**2/3*_c:(Math.exp((t-qh)/Uh)+Vh)/12*_c})},fromBase(e){return e.map(function(t){return t/=_c,t<=1/12?ut(3*t,.5):Uh*Math.log(12*t-Vh)+qh})}}),Zh={};xn.add("chromatic-adaptation-start",e=>{e.options.method&&(e.M=jh(e.W1,e.W2,e.options.method))}),xn.add("chromatic-adaptation-end",e=>{e.M||(e.M=jh(e.W1,e.W2,e.options.method))});function Za({id:e,toCone_M:t,fromCone_M:n}){Zh[e]=arguments[0]}function jh(e,t,n="Bradford"){let o=Zh[n],[a,s,c]=ki(o.toCone_M,e),[l,f,h]=ki(o.toCone_M,t),p=[[l/a,0,0],[0,f/s,0],[0,0,h/c]],m=ki(p,o.toCone_M);return ki(o.fromCone_M,m)}Za({id:"von Kries",toCone_M:[[.40024,.7076,-.08081],[-.2263,1.16532,.0457],[0,0,.91822]],fromCone_M:[[1.8599363874558397,-1.1293816185800916,.21989740959619328],[.3611914362417676,.6388124632850422,-6370596838649899e-21],[0,0,1.0890636230968613]]}),Za({id:"Bradford",toCone_M:[[.8951,.2664,-.1614],[-.7502,1.7135,.0367],[.0389,-.0685,1.0296]],fromCone_M:[[.9869929054667121,-.14705425642099013,.15996265166373122],[.4323052697233945,.5183602715367774,.049291228212855594],[-.00852866457517732,.04004282165408486,.96848669578755]]}),Za({id:"CAT02",toCone_M:[[.7328,.4296,-.1624],[-.7036,1.6975,.0061],[.003,.0136,.9834]],fromCone_M:[[1.0961238208355142,-.27886900021828726,.18274517938277307],[.4543690419753592,.4735331543074117,.07209780371722911],[-.009627608738429355,-.00569803121611342,1.0153256399545427]]}),Za({id:"CAT16",toCone_M:[[.401288,.650173,-.051461],[-.250268,1.204414,.045854],[-.002079,.048952,.953127]],fromCone_M:[[1.862067855087233,-1.0112546305316845,.14918677544445172],[.3875265432361372,.6214474419314753,-.008973985167612521],[-.01584149884933386,-.03412293802851557,1.0499644368778496]]}),Object.assign(Kt,{A:[1.0985,1,.35585],C:[.98074,1,1.18232],D55:[.95682,1,.92149],D75:[.94972,1,1.22638],E:[1,1,1],F2:[.99186,1,.67393],F7:[.95041,1,1.08747],F11:[1.00962,1,.6435]}),Kt.ACES=[.32168/.33767,1,.34065/.33767];var v6={toXYZ:[[.6624541811085053,.13400420645643313,.1561876870049078],[.27222871678091454,.6740817658111484,.05368951740793705],[-.005574649490394108,.004060733528982826,1.0103391003129971]],fromXYZ:[[1.6410233796943257,-.32480329418479,-.23642469523761225],[-.6636628587229829,1.6153315916573379,.016756347685530137],[.011721894328375376,-.008284441996237409,.9883948585390215]]},yc=new Ct({id:"acescg",cssId:"--acescg",name:"ACEScg",coords:{r:{range:[0,65504],name:"Red"},g:{range:[0,65504],name:"Green"},b:{range:[0,65504],name:"Blue"}},referred:"scene",white:Kt.ACES,M:v6}),ja=2**-16,kc=-.35828683,Ka=(Math.log2(65504)+9.72)/17.52,b6=new Ct({id:"acescc",cssId:"--acescc",name:"ACEScc",coords:{r:{range:[kc,Ka],name:"Red"},g:{range:[kc,Ka],name:"Green"},b:{range:[kc,Ka],name:"Blue"}},referred:"scene",base:yc,linearGamut:yc,toBase(e){const t=-.3013698630136986;return e.map(function(n){return n<=t?(2**(n*17.52-9.72)-ja)*2:n<Ka?2**(n*17.52-9.72):65504})},fromBase(e){return e.map(function(t){return t<=0?(Math.log2(ja)+9.72)/17.52:t<ja?(Math.log2(ja+t*.5)+9.72)/17.52:(Math.log2(t)+9.72)/17.52})}}),Kh=sn({A98RGB:()=>Db,A98RGB_Linear:()=>nc,ACEScc:()=>b6,ACEScg:()=>yc,CAM16_JMh:()=>e3,HCT:()=>Ci,HPLuv:()=>mc,HSL:()=>Vr,HSL_P3:()=>Lb,HSL_REC2020:()=>Rb,HSLuv:()=>i6,HSV:()=>mh,HWB:()=>Pb,HelmGen:()=>zh,HelmGenLCh:()=>h6,Helmlab:()=>jl,ICTCP:()=>Bl,JzCzHz:()=>Nl,Jzazbz:()=>u0,LCH:()=>Dt,LCH_P3:()=>Vb,LCH_REC_2020:()=>Zb,LCH_sRGB:()=>qb,LCHuv:()=>dc,Lab:()=>mr,Lab_D65:()=>Ql,Luv:()=>Sh,OKLCH:()=>In,OKLCH_P3:()=>Gb,OKLCH_REC_2020:()=>Ub,OKLCH_sRGB:()=>Wb,OKLab:()=>Tr,OKLrCH:()=>Qb,OKLrab:()=>wh,Okhsl:()=>Wa,Okhsv:()=>uc,P3:()=>Fo,P3_Linear:()=>Kl,ProPhoto:()=>Hb,ProPhoto_Linear:()=>oc,REC_2020:()=>Ho,REC_2020_Linear:()=>Oi,REC_2020_Scene_Referred:()=>Fb,REC_2100_HLG:()=>g6,REC_2100_Linear:()=>Di,REC_2100_PQ:()=>m6,XYZ_ABS_D65:()=>Dl,XYZ_D50:()=>Ll,XYZ_D65:()=>Lt,sRGB:()=>vr,sRGB_Linear:()=>Xl}),br=class ur{constructor(...t){let n;if(t.length===1){let c={};typeof t[0]=="object"&&Object.getPrototypeOf(t[0]).constructor===Object&&(t[0]={...t[0]}),n=Pe(t[0],{parseMeta:c}),c.format&&(this.parseMeta=c)}let o,a,s;n?(o=n.space||n.spaceId,a=n.coords,s=n.alpha):[o,a,s]=t,Object.defineProperty(this,"space",{value:_e.get(o),writable:!1,enumerable:!0,configurable:!0}),this.coords=a?a.slice():[0,0,0],this.alpha=Fe(s)?s:s===void 0?1:Ur(0,s,1);for(let c in this.space.coords)Object.defineProperty(this,c,{get:()=>this.get(c),set:l=>this.set(c,l)})}get spaceId(){return this.space.id}clone(){return new ur(this.space,this.coords,this.alpha)}toJSON(){return{spaceId:this.spaceId,coords:this.coords,alpha:this.alpha}}display(...t){let n=ob(this,...t);return n.color=new ur(n.color),n}static get(t,...n){return io(t,this)?t:new ur(t,...n)}static try(t,n){if(io(t,this))return t;let o=Q0(t,n);return o?new ur(o):null}static defineFunction(t,n,o=n){let{instance:a=!0,returns:s}=o,c=function(...l){let f=n(...l);if(s==="color")f=ur.get(f);else if(s==="function<color>"){let h=f;f=function(...p){let m=h(...p);return ur.get(m)},Object.assign(f,h)}else s==="array<color>"&&(f=f.map(h=>ur.get(h)));return f};t in ur||(ur[t]=c),a&&(ur.prototype[t]=function(...l){return c(this,...l)})}static defineFunctions(t){for(let n in t)ur.defineFunction(n,t[n],t[n])}static extend(t){if(t.register)t.register(ur);else for(let n in t)ur.defineFunction(n,t[n])}};br.defineFunctions({get:gr,getAll:Ai,set:un,setAll:$l,to:Ve,equals:ab,inGamut:Ro,toGamut:dn,distance:Qd,deltas:ib,toString:Bo}),Object.assign(br,{util:E4,hooks:xn,WHITES:Kt,Space:_e,spaces:_e.registry,parse:Vd,defaults:pr});for(let e of Object.keys(Kh))_e.register(Kh[e]);for(let e in _e.registry)Ec(e,_e.registry[e]);xn.add("colorspace-init-end",e=>{Ec(e.id,e),e.aliases?.forEach(t=>{Ec(t,e)})});function Ec(e,t){let n=e.replace(/-/g,"_");Object.defineProperty(br.prototype,n,{get(){let o=this.getAll(e);if(typeof Proxy>"u")return o;let a=new Proxy(o,{has:(s,c)=>{try{return _e.resolveCoord([t,c]),!0}catch{}return Reflect.has(s,c)},get:(s,c,l)=>{if(c&&typeof c!="symbol"&&!(c in s)&&c in a){let{index:f}=_e.resolveCoord([t,c]);if(f>=0)return s[f]}return Reflect.get(s,c,l)},set:(s,c,l,f)=>{if(c&&typeof c!="symbol"&&!(c in s)||Number(c)>=0){let{index:h}=_e.resolveCoord([t,c]);if(h>=0)return s[h]=l,this.setAll(e,s),!0}return Reflect.set(s,c,l,f)}});return a},set(o){this.setAll(e,o)},configurable:!0,enumerable:!0})}br.extend(zo),br.extend({deltaE:Ti}),Object.assign(br,{deltaEMethods:zo}),br.extend(Cb),br.extend({contrast:Mb}),br.extend(xb),br.extend(sb),br.extend(Ob),br.extend(Na);var Lr=br,Sc={navy:"#001f3f",darkblue:"#1e4f7a",blue:"#1A2F4B",darkgreen:"#062925",green:"#1A3636",grass:"#1B3C53",teal:"#044A42",darkpurple:"#1B0044",purple:"#363062",grape:"#31326F",maroon:"#44000D"},Ot={dark:{50:"#C1C2C5",100:"#A6A7AB",200:"#909296",300:"#5c5f66",400:"#373A40",500:"#2C2E33",600:"#25262b",700:"#1A1B1E",800:"#141517",900:"#101113",950:"#000000"},slate:{50:"oklch(98.4% 0.003 247.858)",100:"oklch(96.8% 0.007 247.896)",200:"oklch(92.9% 0.013 255.508)",300:"oklch(86.9% 0.022 252.894)",400:"oklch(70.4% 0.04 256.788)",500:"oklch(55.4% 0.046 257.417)",600:"oklch(44.6% 0.043 257.281)",700:"oklch(37.2% 0.044 257.287)",800:"oklch(27.9% 0.041 260.031)",900:"oklch(20.8% 0.042 265.755)",950:"oklch(12.9% 0.042 264.695)"},gray:{50:"oklch(98.5% 0.002 247.839)",100:"oklch(96.7% 0.003 264.542)",200:"oklch(92.8% 0.006 264.531)",300:"oklch(87.2% 0.01 258.338)",400:"oklch(70.7% 0.022 261.325)",500:"oklch(55.1% 0.027 264.364)",600:"oklch(44.6% 0.03 256.802)",700:"oklch(37.3% 0.034 259.733)",800:"oklch(27.8% 0.033 256.848)",900:"oklch(21% 0.034 264.665)",950:"oklch(13% 0.028 261.692)"},zinc:{50:"oklch(98.5% 0 0)",100:"oklch(96.7% 0.001 286.375)",200:"oklch(92% 0.004 286.32)",300:"oklch(87.1% 0.006 286.286)",400:"oklch(70.5% 0.015 286.067)",500:"oklch(55.2% 0.016 285.938)",600:"oklch(44.2% 0.017 285.786)",700:"oklch(37% 0.013 285.805)",800:"oklch(27.4% 0.006 286.033)",900:"oklch(21% 0.006 285.885)",950:"oklch(14.1% 0.005 285.823)"},neutral:{50:"oklch(98.5% 0 0)",100:"oklch(97% 0 0)",200:"oklch(92.2% 0 0)",300:"oklch(87% 0 0)",400:"oklch(70.8% 0 0)",500:"oklch(55.6% 0 0)",600:"oklch(43.9% 0 0)",700:"oklch(37.1% 0 0)",800:"oklch(26.9% 0 0)",900:"oklch(20.5% 0 0)",950:"oklch(14.5% 0 0)"},stone:{50:"oklch(98.5% 0.001 106.423)",100:"oklch(97% 0.001 106.424)",200:"oklch(92.3% 0.003 48.717)",300:"oklch(86.9% 0.005 56.366)",400:"oklch(70.9% 0.01 56.259)",500:"oklch(55.3% 0.013 58.071)",600:"oklch(44.4% 0.011 73.639)",700:"oklch(37.4% 0.01 67.558)",800:"oklch(26.8% 0.007 34.298)",900:"oklch(21.6% 0.006 56.043)",950:"oklch(14.7% 0.004 49.25)"},red:{50:"oklch(97.1% 0.013 17.38)",100:"oklch(93.6% 0.032 17.717)",200:"oklch(88.5% 0.062 18.334)",300:"oklch(80.8% 0.114 19.571)",400:"oklch(70.4% 0.191 22.216)",500:"oklch(63.7% 0.237 25.331)",600:"oklch(57.7% 0.245 27.325)",700:"oklch(50.5% 0.213 27.518)",800:"oklch(44.4% 0.177 26.899)",900:"oklch(39.6% 0.141 25.723)",950:"oklch(25.8% 0.092 26.042)"},orange:{50:"oklch(98% 0.016 73.684)",100:"oklch(95.4% 0.038 75.164)",200:"oklch(90.1% 0.076 70.697)",300:"oklch(83.7% 0.128 66.29)",400:"oklch(75% 0.183 55.934)",500:"oklch(70.5% 0.213 47.604)",600:"oklch(64.6% 0.222 41.116)",700:"oklch(55.3% 0.195 38.402)",800:"oklch(47% 0.157 37.304)",900:"oklch(40.8% 0.123 38.172)",950:"oklch(26.6% 0.079 36.259)"},amber:{50:"oklch(98.7% 0.022 95.277)",100:"oklch(96.2% 0.059 95.617)",200:"oklch(92.4% 0.12 95.746)",300:"oklch(87.9% 0.169 91.605)",400:"oklch(82.8% 0.189 84.429)",500:"oklch(76.9% 0.188 70.08)",600:"oklch(66.6% 0.179 58.318)",700:"oklch(55.5% 0.163 48.998)",800:"oklch(47.3% 0.137 46.201)",900:"oklch(41.4% 0.112 45.904)",950:"oklch(27.9% 0.077 45.635)"},yellow:{50:"oklch(98.7% 0.026 102.212)",100:"oklch(97.3% 0.071 103.193)",200:"oklch(94.5% 0.129 101.54)",300:"oklch(90.5% 0.182 98.111)",400:"oklch(85.2% 0.199 91.936)",500:"oklch(79.5% 0.184 86.047)",600:"oklch(68.1% 0.162 75.834)",700:"oklch(55.4% 0.135 66.442)",800:"oklch(47.6% 0.114 61.907)",900:"oklch(42.1% 0.095 57.708)",950:"oklch(28.6% 0.066 53.813)"},lime:{50:"oklch(98.6% 0.031 120.757)",100:"oklch(96.7% 0.067 122.328)",200:"oklch(93.8% 0.127 124.321)",300:"oklch(89.7% 0.196 126.665)",400:"oklch(84.1% 0.238 128.85)",500:"oklch(76.8% 0.233 130.85)",600:"oklch(64.8% 0.2 131.684)",700:"oklch(53.2% 0.157 131.589)",800:"oklch(45.3% 0.124 130.933)",900:"oklch(40.5% 0.101 131.063)",950:"oklch(27.4% 0.072 132.109)"},green:{50:"oklch(98.2% 0.018 155.826)",100:"oklch(96.2% 0.044 156.743)",200:"oklch(92.5% 0.084 155.995)",300:"oklch(87.1% 0.15 154.449)",400:"oklch(79.2% 0.209 151.711)",500:"oklch(72.3% 0.219 149.579)",600:"oklch(62.7% 0.194 149.214)",700:"oklch(52.7% 0.154 150.069)",800:"oklch(44.8% 0.119 151.328)",900:"oklch(39.3% 0.095 152.535)",950:"oklch(26.6% 0.065 152.934)"},emerald:{50:"oklch(97.9% 0.021 166.113)",100:"oklch(95% 0.052 163.051)",200:"oklch(90.5% 0.093 164.15)",300:"oklch(84.5% 0.143 164.978)",400:"oklch(76.5% 0.177 163.223)",500:"oklch(69.6% 0.17 162.48)",600:"oklch(59.6% 0.145 163.225)",700:"oklch(50.8% 0.118 165.612)",800:"oklch(43.2% 0.095 166.913)",900:"oklch(37.8% 0.077 168.94)",950:"oklch(26.2% 0.051 172.552)"},teal:{50:"oklch(98.4% 0.014 180.72)",100:"oklch(95.3% 0.051 180.801)",200:"oklch(91% 0.096 180.426)",300:"oklch(85.5% 0.138 181.071)",400:"oklch(77.7% 0.152 181.912)",500:"oklch(70.4% 0.14 182.503)",600:"oklch(60% 0.118 184.704)",700:"oklch(51.1% 0.096 186.391)",800:"oklch(43.7% 0.078 188.216)",900:"oklch(38.6% 0.063 188.416)",950:"oklch(27.7% 0.046 192.524)"},cyan:{50:"oklch(98.4% 0.019 200.873)",100:"oklch(95.6% 0.045 203.388)",200:"oklch(91.7% 0.08 205.041)",300:"oklch(86.5% 0.127 207.078)",400:"oklch(78.9% 0.154 211.53)",500:"oklch(71.5% 0.143 215.221)",600:"oklch(60.9% 0.126 221.723)",700:"oklch(52% 0.105 223.128)",800:"oklch(45% 0.085 224.283)",900:"oklch(39.8% 0.07 227.392)",950:"oklch(30.2% 0.056 229.695)"},sky:{50:"oklch(97.7% 0.013 236.62)",100:"oklch(95.1% 0.026 236.824)",200:"oklch(90.1% 0.058 230.902)",300:"oklch(82.8% 0.111 230.318)",400:"oklch(74.6% 0.16 232.661)",500:"oklch(68.5% 0.169 237.323)",600:"oklch(58.8% 0.158 241.966)",700:"oklch(50% 0.134 242.749)",800:"oklch(44.3% 0.11 240.79)",900:"oklch(39.1% 0.09 240.876)",950:"oklch(29.3% 0.066 243.157)"},blue:{50:"oklch(97% 0.014 254.604)",100:"oklch(93.2% 0.032 255.585)",200:"oklch(88.2% 0.059 254.128)",300:"oklch(80.9% 0.105 251.813)",400:"oklch(70.7% 0.165 254.624)",500:"oklch(62.3% 0.214 259.815)",600:"oklch(54.6% 0.245 262.881)",700:"oklch(48.8% 0.243 264.376)",800:"oklch(42.4% 0.199 265.638)",900:"oklch(37.9% 0.146 265.522)",950:"oklch(28.2% 0.091 267.935)"},indigo:{50:"oklch(96.2% 0.018 272.314)",100:"oklch(93% 0.034 272.788)",200:"oklch(87% 0.065 274.039)",300:"oklch(78.5% 0.115 274.713)",400:"oklch(67.3% 0.182 276.935)",500:"oklch(58.5% 0.233 277.117)",600:"oklch(51.1% 0.262 276.966)",700:"oklch(45.7% 0.24 277.023)",800:"oklch(39.8% 0.195 277.366)",900:"oklch(35.9% 0.144 278.697)",950:"oklch(25.7% 0.09 281.288)"},violet:{50:"oklch(96.9% 0.016 293.756)",100:"oklch(94.3% 0.029 294.588)",200:"oklch(89.4% 0.057 293.283)",300:"oklch(81.1% 0.111 293.571)",400:"oklch(70.2% 0.183 293.541)",500:"oklch(60.6% 0.25 292.717)",600:"oklch(54.1% 0.281 293.009)",700:"oklch(49.1% 0.27 292.581)",800:"oklch(43.2% 0.232 292.759)",900:"oklch(38% 0.189 293.745)",950:"oklch(28.3% 0.141 291.089)"},purple:{50:"oklch(97.7% 0.014 308.299)",100:"oklch(94.6% 0.033 307.174)",200:"oklch(90.2% 0.063 306.703)",300:"oklch(82.7% 0.119 306.383)",400:"oklch(71.4% 0.203 305.504)",500:"oklch(62.7% 0.265 303.9)",600:"oklch(55.8% 0.288 302.321)",700:"oklch(49.6% 0.265 301.924)",800:"oklch(43.8% 0.218 303.724)",900:"oklch(38.1% 0.176 304.987)",950:"oklch(29.1% 0.149 302.717)"},fuchsia:{50:"oklch(97.7% 0.017 320.058)",100:"oklch(95.2% 0.037 318.852)",200:"oklch(90.3% 0.076 319.62)",300:"oklch(83.3% 0.145 321.434)",400:"oklch(74% 0.238 322.16)",500:"oklch(66.7% 0.295 322.15)",600:"oklch(59.1% 0.293 322.896)",700:"oklch(51.8% 0.253 323.949)",800:"oklch(45.2% 0.211 324.591)",900:"oklch(40.1% 0.17 325.612)",950:"oklch(29.3% 0.136 325.661)"},pink:{50:"oklch(97.1% 0.014 343.198)",100:"oklch(94.8% 0.028 342.258)",200:"oklch(89.9% 0.061 343.231)",300:"oklch(82.3% 0.12 346.018)",400:"oklch(71.8% 0.202 349.761)",500:"oklch(65.6% 0.241 354.308)",600:"oklch(59.2% 0.249 0.584)",700:"oklch(52.5% 0.223 3.958)",800:"oklch(45.9% 0.187 3.815)",900:"oklch(40.8% 0.153 2.432)",950:"oklch(28.4% 0.109 3.907)"},rose:{50:"oklch(96.9% 0.015 12.422)",100:"oklch(94.1% 0.03 12.58)",200:"oklch(89.2% 0.058 10.001)",300:"oklch(81% 0.117 11.638)",400:"oklch(71.2% 0.194 13.428)",500:"oklch(64.5% 0.246 16.439)",600:"oklch(58.6% 0.253 17.585)",700:"oklch(51.4% 0.222 16.935)",800:"oklch(45.5% 0.188 13.697)",900:"oklch(41% 0.159 10.272)",950:"oklch(27.1% 0.105 12.094)"}};function w6(e){try{Lr.get(e)}catch{return!0}return Lr.contrast(e,"white","Lstar")>Lr.contrast(e,"black","Lstar")}function Zo(e){return w6(e)?"#FFFFFF":"#000000"}var _6=xe.default.fromPairs(xe.default.entries(bl).map(([e,t])=>[e,Pd(t)])),{IconAdjustmentsHorizontal:Ax,IconApiBook:Mx,IconArrowsHorizontal:xx,IconArrowsLeftRight:Ix,IconArrowAutofitDown:Cx,IconArrowAutofitHeight:y6,IconArrowAutofitLeft:Ox,IconArrowAutofitRight:Tx,IconArrowAutofitWidth:k6,IconArrowBigLeft:Lx,IconArrowBigRight:Rx,IconArrowsMove:Px,IconArrowsMoveVertical:$x,IconArrowsVertical:Dx,IconBook:zx,IconBookOff:Nx,IconBookArrowLeft:Bx,IconBookArrowRight:Hx,IconBooksReturn:Fx,IconBookUpload:Gx,IconBookmark:E6,IconBookmarkOff:S6,IconBookmarks:Wx,IconBoxAlignTop:Ux,IconCategory:A6,IconCheck:Ya,IconChevronLeft:Vx,IconChevronRight:qx,IconAlertCircle:Zx,IconCircleCheck:jx,IconCircleX:Kx,IconHelp:Yx,IconInfoCircle:Xx,IconComic1:Jx,IconComic1Flat:Qx,IconComic2:eI,IconComic2Flat:tI,IconComic3:rI,IconComic3Flat:nI,IconDeviceDesktop:oI,IconDeviceFloppy:iI,IconDeviceMobile:aI,IconDeviceTablet:sI,IconDotsVertical:lI,IconEReader1:cI,IconEReader1Flat:uI,IconEReader2:dI,IconEReader2Flat:hI,IconExternalLink:fI,IconEye:M6,IconEyeOff:x6,IconFileDownload:pI,IconFilePercent:mI,IconFolderOpen:gI,IconHandClick:vI,IconKeyboard:bI,IconLayoutDashboard:wI,IconLayoutBottombar:_I,IconLayoutBottombarInactive:yI,IconLayoutSidebar:kI,IconLayoutSidebarInactive:EI,IconLayoutSidebarRight:SI,IconLayoutSidebarRightInactive:AI,IconListNumbers:MI,IconLoader2:xI,IconLocationCog:II,IconMenu2:CI,IconMenuDeep:OI,IconMessage:TI,IconMoon:LI,IconPage:RI,IconPageFlat:PI,IconPalette:$I,IconPencil:DI,IconPencilCog:zI,IconPhoto:NI,IconPhotoOff:BI,IconPin:HI,IconPlayerPause:FI,IconPlayerPlay:GI,IconRefresh:I6,IconSettings:WI,IconSettingsOff:UI,IconSpacingHorizontal:C6,IconSpacingVertical:VI,IconSun:qI,IconTrash:ZI,IconWorldCog:jI,IconX:Ac,IconZoom:KI,IconZoomCancel:O6,IconZoomIn:T6,IconZoomInArea:YI,IconZoomOut:L6,IconZoomOutArea:XI,IconZoomPan:JI}=_6,Tn=class extends rt{constructor(...t){super(...t),this.color="#000000",this.size=26,this.radius="50%",this.contrastColor="#FFFFFF",this.checked=!1}static{this.styles=Et`
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
  `}willUpdate(t){t.has("color")&&(this.contrastColor=Zo(this.color)),t.has("selected")&&(this.checked=this.color.toLowerCase()===this.selected?.toLowerCase())}handleClick(){this.dispatchEvent(new CustomEvent("input",{detail:{value:this.color},bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent("change",{detail:{value:this.color},bubbles:!0,composed:!0}))}render(){const t={width:`${this.size}px`,height:`${this.size}px`},n={"--radius":typeof this.radius=="number"?`${this.radius}px`:this.radius,"--color":this.color,"--contrast-color":this.contrastColor};return ne`
      <div style=${Jr(t)}>
        <div
          class="swatch"
          style=${Jr(n)}
          @click=${this.handleClick}
        >
          <slot></slot>
          <span class="check-icon"> ${Ya} </span>
        </div>
      </div>
    `}};z([K({type:String})],Tn.prototype,"color",void 0),z([K({type:String})],Tn.prototype,"selected",void 0),z([K({type:Number})],Tn.prototype,"size",void 0),z([K({type:String})],Tn.prototype,"radius",void 0),z([K({state:!0})],Tn.prototype,"contrastColor",void 0),z([K({type:Boolean,reflect:!0})],Tn.prototype,"checked",void 0),Tn=z([ct("color-swatch")],Tn);function R6(e){const[t,n,o]=e.to("oklch").coords.map(f=>f??0),a=[.95,.9,.8,.7,.6,.5,.4,.3,.2,.1,.05],s=a.map(f=>new Lr("oklch",[f,n,o]).toString({format:"hex"}));let c=-1,l=1/0;for(let f=0;f<a.length;f++){const h=Math.abs(a[f]-t);h<l&&(l=h,c=f)}return c!==-1&&(s[c]=e.toString({format:"hex"})),s.map(f=>f.toUpperCase())}function P6(e){const t=e.to("hsl"),n=[.97,.9,.8,.7,.6,.5,.4,.3,.2,.1,.05],o=[];for(const a of n){const s=t.clone();s.coords[2]=a*100;const c=s.coords[1]??0;a>.8?s.coords[1]=c*.4:a>.6?s.coords[1]=c*.8:a<.3&&(s.coords[1]=Math.min(100,c*1.1)),o.push(s.toString({format:"hex"}).toUpperCase())}return o}function $6(e){const t=[],n=[95,90,80,70,60,50,40,30,20,10,5],o=e.to("hsl");for(const a of n){const s=o.clone();s.coords[2]=a,t.push(s.toString({format:"hex"}).toUpperCase())}return t}function D6(e){const t=new Array(11).fill(""),n=e.to("hsl"),o={lightest:{lightness:95,rotate:-10,saturate:-30},darkest:{lightness:10,rotate:10,saturate:10}},a=5,s=5,c=(o.lightest.lightness-50)/a,l=(50-o.darkest.lightness)/s,f=o.lightest.rotate/a,h=o.darkest.rotate/s,p=o.lightest.saturate/a,m=o.darkest.saturate/s;for(let _=1;_<=a;_++){const v=a-_,y=n.clone();y.coords[2]=(y.coords[2]??0)+c*(_-.5),y.coords[0]=(y.coords[0]??0)+f*_,y.coords[1]=(y.coords[1]??0)+p*_,t[v]=y.toString({format:"hex"})}t[5]=n.clone().toString({format:"hex"});for(let _=1;_<=s;_++){const v=a+_,y=n.clone();y.coords[2]=(y.coords[2]??0)-l*(_-.5),y.coords[0]=(y.coords[0]??0)+h*_,y.coords[1]=(y.coords[1]??0)+m*_,t[v]=y.toString({format:"hex"})}return t}function z6(e){const[t,n,o]=e.to("hsl").coords.map(s=>s??0),a=new Array(11);a[5]=e.toString({format:"hex"});for(let s=0;s<5;s++){const c=(5-s)/6,l=o+(100-o)*c,f=n-n*c;a[s]=new Lr("hsl",[t,f,l]).toString({format:"hex"})}for(let s=0;s<5;s++){const c=(s+1)/6,l=o-o*c,f=n+(100-n)*c;a[s+6]=new Lr("hsl",[t,f,l]).toString({format:"hex"})}return a}function Yh(e,t="steps"){let n;try{n=Lr.get(e)}catch{n=Lr.get(Sc.navy)}switch(t){case"saturation":return P6(n);case"lightness":return $6(n);case"mantine":return z6(n);case"chakra":return D6(n);default:return R6(n)}}var Ln=class extends rt{constructor(...t){super(...t),this.baseColor="#228be6",this.mode="steps",this.orientation="horizontal",this.value="",this.gradient=[]}static{this.styles=Et`
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
  `}willUpdate(t){(t.has("baseColor")||t.has("mode"))&&(this.gradient=Yh(this.baseColor,this.mode)??[])}handleSwatchClick(t){this.value=t,this.dispatchEvent(new CustomEvent("input",{detail:{value:this.value},bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value},bubbles:!0,composed:!0}))}render(){return ne`
      ${this.gradient.map(t=>{const n=this.selected&&t.toLowerCase()===this.selected.toLowerCase(),o=Zo(t);return ne`
          <div
            class="swatch"
            ?checked=${n}
            title=${t}
            @click=${()=>this.handleSwatchClick(t)}
          >
            <div
              class="swatch-inner"
              style="--color: ${t}; --text-color: ${o}"
            >
              <span class="checkmark">${Ya}</span>
            </div>
          </div>
        `})}
    `}};z([K({type:String})],Ln.prototype,"baseColor",void 0),z([K({type:String})],Ln.prototype,"mode",void 0),z([K({type:String,reflect:!0})],Ln.prototype,"orientation",void 0),z([K({type:String})],Ln.prototype,"selected",void 0),z([K({type:String,reflect:!0})],Ln.prototype,"value",void 0),z([Ht()],Ln.prototype,"gradient",void 0),Ln=z([ct("color-palette")],Ln);var Xa=class extends rt{constructor(...t){super(...t),this.value=""}static{this.styles=Et`
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
  `}handleColorClick(t){this.value=t.currentTarget.title,this.dispatchEvent(new CustomEvent("input",{detail:{value:this.value},bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value},bubbles:!0,composed:!0}))}render(){const t=xe.default.keys(Ot).filter(o=>!["dark","gray","zinc","neutral","stone"].includes(o)),n=[200,300,400,500,600,700,800,900,950];return t.map(o=>{const a=n.map(s=>{const c=Ot[o][s],l=Zo(c),f=this.selected?.toLowerCase()===c.toLowerCase();return ne`
          <span
            title="${c}"
            class="${St({ThemeRadio:!0,selected:f})}"
            style="background-color: ${c}; color: ${l}"
            @click=${this.handleColorClick}
          >
            ${Ya}
          </span>
        `});return ne` <div class="SwatchGroup">
        <span class="ColorName">${o}</span>
        <div class="Swatches">${a}</div>
      </div>`})}};z([K({type:String,reflect:!0})],Xa.prototype,"value",void 0),z([K({type:String})],Xa.prototype,"selected",void 0),Xa=z([ct("color-panel")],Xa);var Gt=class extends rt{constructor(...t){super(...t),this.value="#228be6",this.defaultValue="#228be6",this.label="",this.hint="",this.name="",this.disabled=!1,this.size="medium",this.swatches=null,this.mode="popup",this.opened=!1,this.popupDirection="left",this.sourceSpace="srgb",this.hsv={h:0,s:0,v:0},this.saturationThumbPosition={x:0,y:0},this.hueThumbPosition=0,this.isDraggingSaturation=!1,this.isDraggingHue=!1}static{this.styles=Et`
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
  `}connectedCallback(){super.connectedCallback(),this.updateStateFromValue(this.value),window.addEventListener("mousemove",this.handleDrag.bind(this)),window.addEventListener("mouseup",this.handleDragEnd.bind(this)),window.addEventListener("touchmove",this.handleDrag.bind(this),{passive:!1}),window.addEventListener("touchend",this.handleDragEnd.bind(this))}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("mousemove",this.handleDrag.bind(this)),window.removeEventListener("mouseup",this.handleDragEnd.bind(this)),window.removeEventListener("touchmove",this.handleDrag.bind(this)),window.removeEventListener("touchend",this.handleDragEnd.bind(this)),window.removeEventListener("click",this.handleClickOutside.bind(this))}updated(t){t.has("mode")&&(this.mode==="popup"?window.addEventListener("click",this.handleClickOutside.bind(this)):window.removeEventListener("click",this.handleClickOutside.bind(this)))}willUpdate(t){t.has("value")&&this.updateStateFromValue(this.value),t.has("mode")&&this.mode==="inline"&&(this.opened=!1)}handleClickOutside(t){this.opened&&!t.composedPath().includes(this)&&this.hide()}show(){this.disabled||this.opened||(this.opened=!0,this.dispatchEvent(new CustomEvent("wa-show",{bubbles:!0,composed:!0})),setTimeout(()=>{this.dispatchEvent(new CustomEvent("wa-after-show",{bubbles:!0,composed:!0}))},150))}hide(){this.opened&&(this.opened=!1,this.dispatchEvent(new CustomEvent("wa-hide",{bubbles:!0,composed:!0})),setTimeout(()=>{this.dispatchEvent(new CustomEvent("wa-after-hide",{bubbles:!0,composed:!0}))},150))}togglePopup(){if(this.mode==="popup")if(this.opened)this.hide();else{const t=this.getBoundingClientRect(),n=250;let o;const a=this.closest("mov-drawer");if(a?.shadowRoot){const s=a.shadowRoot.querySelector("dialog");s?o=s.getBoundingClientRect():o={left:0,right:window.innerWidth}}else o={left:0,right:window.innerWidth};t.left+n>o.right?t.right-n>o.left?this.popupDirection="right":this.popupDirection="left":this.popupDirection="left",this.show()}}isSameColor(t,n){return!t||!n?!1:Lr.deltaE(t,n,{method:"2000"})<1}renderCheckIcon(t){return ne`
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
        style=${Jr({stroke:Zo(t)})}
      >
        <path d="M5 12l5 5l10 -10" />
      </svg>
    `}renderPickerBody(){const t={backgroundColor:`hsl(${this.hsv.h}, 100%, 50%)`},n={h:this.hsv.h,s:this.hsv.s*100,v:this.hsv.v*100},o={top:`${this.saturationThumbPosition.y}%`,left:`${this.saturationThumbPosition.x}%`,backgroundColor:new Lr("hsv",[n.h,n.s,n.v]).toString({format:"hex"})},a={left:`${this.hueThumbPosition}%`};return ne`
      <div
        class="saturation-panel"
        style=${Jr(t)}
        @mousedown=${this.handleSaturationDragStart.bind(this)}
        @touchstart=${this.handleSaturationDragStart.bind(this)}
      >
        <div class="saturation-overlay-1"></div>
        <div class="saturation-overlay-2"></div>
        <div
          class="saturation-thumb"
          style=${Jr(o)}
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
            style=${Jr(a)}
          ></div>
        </div>
      </div>

      <div class="swatches">
        ${(this.swatches||xe.default.entries(Ot).filter(([s])=>!["dark","gray","zinc","neutral","stone"].includes(s)).map(([,s])=>s[600])).map(s=>ne`
            <button
              class="swatch"
              title=${s}
              style=${Jr({backgroundColor:s})}
              @click=${()=>this.selectSwatch(s)}
            >
              ${this.isSameColor(this.value,s)?this.renderCheckIcon(s):""}
            </button>
          `)}
      </div>
    `}render(){const t={"picker-container":!0,popup:this.mode==="popup",right:this.popupDirection==="right"},n=this.renderPickerBody();return this.mode==="popup"?ne`
        <div
          class="popup-trigger"
          @click=${this.togglePopup}
        >
          <div
            class="preview"
            style=${Jr({backgroundColor:this.value})}
          ></div>
        </div>
        ${this.opened?ne`<div class=${St(t)}>${n}</div>`:""}
      `:ne`<div class=${St(t)}>${n}</div>`}parseColor(t){try{return Lr.get(t)}catch(n){return console.error(`[mov-color-picker] Invalid color value: "${t}"`,n),null}}colorToHsv(t){let[n,o,a]=t.to("srgb").to("hsv").coords.map(s=>s??0);return Number.isNaN(n)&&(n=this.hsv.h||0,o=0),o=Math.max(0,Math.min(100,o))/100,a=Math.max(0,Math.min(100,a))/100,{h:n,s:o,v:a}}updateStateFromValue(t){const n=this.parseColor(t);if(!n)return;this.sourceSpace=n.space.id;const o=this.colorToHsv(n);(o.h!==this.hsv.h||o.s!==this.hsv.s||o.v!==this.hsv.v)&&(this.hsv=o,this.updateThumbPositions())}dispatchInput(){this.dispatchEvent(new CustomEvent("input",{detail:{value:this.value},bubbles:!0,composed:!0}))}dispatchChange(){this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value},bubbles:!0,composed:!0}))}updateValueFromHsv(){const t={h:this.hsv.h,s:this.hsv.s*100,v:this.hsv.v*100},n=new Lr("hsv",[t.h,t.s,t.v]);let o;try{!this.sourceSpace||["srgb","hsl","hsv"].includes(this.sourceSpace)?o=n.to("srgb").toString({format:"hex"}):o=n.to(this.sourceSpace).toString({precision:5})}catch(a){console.error(`[mov-color-picker] Could not convert color to space ${this.sourceSpace}`,a),o=n.to("srgb").toString({format:"hex"})}this.value!==o&&(this.value=o,this.dispatchInput())}updateThumbPositions(){this.saturationThumbPosition={x:this.hsv.s*100,y:(1-this.hsv.v)*100},this.hueThumbPosition=this.hsv.h/360*100}handleSaturationDragStart(t){t.preventDefault(),this.isDraggingSaturation=!0,this.saturationPanel=this.shadowRoot?.querySelector(".saturation-panel"),this.updateSaturation(t)}handleHueDragStart(t){t.preventDefault(),this.isDraggingHue=!0,this.hueSlider=this.shadowRoot?.querySelector(".hue-slider"),this.updateHue(t)}handleDrag(t){this.isDraggingSaturation&&this.updateSaturation(t),this.isDraggingHue&&this.updateHue(t)}handleDragEnd(){(this.isDraggingSaturation||this.isDraggingHue)&&this.dispatchChange(),this.isDraggingSaturation=!1,this.isDraggingHue=!1}getEventPosition(t){return"touches"in t?{clientX:t.touches[0].clientX,clientY:t.touches[0].clientY}:{clientX:t.clientX,clientY:t.clientY}}updateSaturation(t){if(!this.saturationPanel)return;const{clientX:n,clientY:o}=this.getEventPosition(t),a=this.saturationPanel.getBoundingClientRect(),s=Math.max(0,Math.min(n-a.left,a.width)),c=Math.max(0,Math.min(o-a.top,a.height));this.hsv.s=s/a.width,this.hsv.v=1-c/a.height,this.updateValueFromHsv(),this.updateThumbPositions()}updateHue(t){if(!this.hueSlider)return;const{clientX:n}=this.getEventPosition(t),o=this.hueSlider.getBoundingClientRect(),a=Math.max(0,Math.min(n-o.left,o.width));this.hsv.h=a/o.width*360,this.updateValueFromHsv(),this.updateThumbPositions()}selectSwatch(t){this.value=t,this.dispatchInput(),this.dispatchChange()}};z([K({type:String})],Gt.prototype,"value",void 0),z([K({type:String,attribute:"default-value"})],Gt.prototype,"defaultValue",void 0),z([K({type:String})],Gt.prototype,"label",void 0),z([K({type:String})],Gt.prototype,"hint",void 0),z([K({type:String})],Gt.prototype,"name",void 0),z([K({type:Boolean,reflect:!0})],Gt.prototype,"disabled",void 0),z([K({type:String,reflect:!0})],Gt.prototype,"size",void 0),z([K({type:Array})],Gt.prototype,"swatches",void 0),z([K({type:String})],Gt.prototype,"mode",void 0),z([Ht()],Gt.prototype,"opened",void 0),z([Ht()],Gt.prototype,"popupDirection",void 0),z([Ht()],Gt.prototype,"sourceSpace",void 0),z([Ht()],Gt.prototype,"hsv",void 0),z([Ht()],Gt.prototype,"saturationThumbPosition",void 0),z([Ht()],Gt.prototype,"hueThumbPosition",void 0),Gt=z([ct("mov-color-picker")],Gt);var N6=(e,t,n)=>{for(const o of t)if(o[0]===e)return(0,o[1])();return n?.()},Rn=class extends rt{constructor(...t){super(...t),this.value="",this.labelPosition="side",this.size="medium",this._options=[],this.resizeObserver=new ResizeObserver(()=>this.updateThumbPosition())}static{this.styles=Et`
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
  `}connectedCallback(){super.connectedCallback(),this.resizeObserver.observe(this)}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver.unobserve(this)}handleClick(t,n){this.value=n,this.dispatchEvent(new CustomEvent("change",{detail:this.value,bubbles:!0,composed:!0}))}handleSlotChange(){this._options=this._slotEl.assignedNodes({flatten:!0}).filter(t=>t.nodeName==="SEGMENTED-CONTROL-OPTION").map(t=>({value:t.getAttribute("value")??"",label:t.getAttribute("label")??"",icon:t.getAttribute("icon")??void 0}))}firstUpdated(){this.handleSlotChange(),this.updateComplete.then(()=>this.updateThumbPosition())}updated(t){super.updated(t),(t.has("value")||t.has("_options")||t.has("labelPosition")||t.has("size"))&&Promise.resolve().then(()=>this.updateThumbPosition())}updateThumbPosition(){if(!this.thumb)return;const t=this.shadowRoot?.querySelector(".button.selected");if(t){const{offsetWidth:n,offsetHeight:o}=t,a=t.getBoundingClientRect(),s=this.shadowRoot?.querySelector(".segmented-control")?.getBoundingClientRect(),c=a.left-(s?.left??0),l=a.top-(s?.top??0);this.thumb.style.transform=`translate(${c}px, ${l}px)`,this.thumb.style.width=`${n}px`,this.thumb.style.height=`${o}px`}else this.thumb.style.width="0px",this.thumb.style.height="0px"}render(){return ne`
      <div class="segmented-control">
        <div class="thumb"></div>
        ${this._options.map(t=>ne`
            <div
              class="option"
              title="${this.labelPosition==="tooltip"?t.label:He}"
            >
              <button
                class="${St({button:!0,selected:this.value===t.value,bottom:this.labelPosition==="bottom",small:this.size==="small",medium:this.size==="medium",large:this.size==="large"})}"
                @click=${n=>this.handleClick(n,t.value)}
                role="radio"
                aria-checked="${this.value===t.value}"
              >
                ${t.icon?ne`<mov-icon
                      name="${t.icon}"
                      .size=${N6(this.size,[["small",()=>"16px"],["medium",()=>"24px"],["large",()=>"36px"]],()=>this.size)}
                    ></mov-icon>`:He}
                ${this.labelPosition!=="tooltip"?ne`<span>${t.label}</span>`:He}
              </button>
            </div>
          `)}
      </div>
      <div style="display: none;">
        <slot @slotchange=${this.handleSlotChange}></slot>
      </div>
    `}};z([K({type:String,reflect:!0})],Rn.prototype,"value",void 0),z([K({type:String})],Rn.prototype,"labelPosition",void 0),z([K({type:String})],Rn.prototype,"size",void 0),z([Ht()],Rn.prototype,"_options",void 0),z([An(".thumb")],Rn.prototype,"thumb",void 0),z([An("slot")],Rn.prototype,"_slotEl",void 0),Rn=z([ct("segmented-control")],Rn);var zi=class extends rt{constructor(...t){super(...t),this.value="",this.label=""}createRenderRoot(){return this}};z([K({type:String,reflect:!0})],zi.prototype,"value",void 0),z([K({type:String,reflect:!0})],zi.prototype,"label",void 0),z([K({type:String,reflect:!0})],zi.prototype,"icon",void 0),zi=z([ct("segmented-control-option")],zi);var wr=class extends rt{constructor(...t){super(...t),this.name="",this.value="on",this.checked=!1,this.defaultChecked=!1,this.disabled=!1,this.required=!1,this.size="medium",this.hint="",this.design="graphical",this.textOn="ON",this.textOff="OFF"}static{this.styles=Et`
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
  `}handleChange(t){this.disabled||(this.checked=t.target.checked,this.dispatchEvent(new CustomEvent("change",{detail:{checked:this.checked},bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent("input",{detail:{checked:this.checked},bubbles:!0,composed:!0})))}render(){const t=this.design.toLowerCase();let n;return t==="graphical"?n=ne`${this.checked?Ya:Ac}`:n=ne`<span class="text">${this.checked?this.textOn:this.textOff}</span>`,ne`
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
            class="${St({switch:!0,[t]:!0})}"
          >
            <div class="knob">${n}</div>
          </div>
        </label>
        <div class="hint">
          <slot name="hint">${this.hint}</slot>
        </div>
      </div>
    `}};z([K({type:String})],wr.prototype,"name",void 0),z([K({type:String})],wr.prototype,"value",void 0),z([K({type:Boolean,reflect:!0})],wr.prototype,"checked",void 0),z([K({type:Boolean,reflect:!0,attribute:"default-checked"})],wr.prototype,"defaultChecked",void 0),z([K({type:Boolean,reflect:!0})],wr.prototype,"disabled",void 0),z([K({type:Boolean,reflect:!0})],wr.prototype,"required",void 0),z([K({type:String,reflect:!0})],wr.prototype,"size",void 0),z([K({type:String})],wr.prototype,"hint",void 0),z([K({type:String,reflect:!0})],wr.prototype,"design",void 0),z([K({type:String})],wr.prototype,"textOn",void 0),z([K({type:String})],wr.prototype,"textOff",void 0),wr=z([ct("mov-switch")],wr);var B6=":host{--mov-slider-track-height:6px;--mov-slider-thumb-size:18px;--mov-slider-tooltip-offset:24px;-webkit-user-select:none;user-select:none;touch-action:none;width:100%;display:block}:host([vertical]){display:inline-block}.mov-slider__container{align-items:center;min-height:24px;display:flex;position:relative}:host([vertical]) .mov-slider__container{flex-direction:column;min-width:24px;min-height:auto}.mov-slider__track{height:var(--mov-slider-track-height);background:var(--theme-border-color,#ccc);cursor:pointer;border-radius:9999px;flex:1;position:relative}:host([vertical]) .mov-slider__track{width:var(--mov-slider-track-height);height:100%;min-height:8rem}.mov-slider__progress{background:var(--mov-color-fill-loud);pointer-events:none;border-radius:9999px;height:100%;transition:background-color .15s;position:absolute}.mov-slider__progress--min-gap{background:#f59e0b;animation:2s ease-in-out infinite pulse-gap}@keyframes pulse-gap{0%,to{opacity:1}50%{opacity:.7}}:host([vertical]) .mov-slider__progress{width:100%;height:auto}.mov-slider__thumb{width:var(--mov-slider-thumb-size);height:var(--mov-slider-thumb-size);border:3px solid var(--mov-color-fill-loud);cursor:grab;touch-action:none;box-sizing:border-box;background:#fff;border-radius:9999px;transition:transform .15s,border-color .15s,box-shadow .15s;position:absolute;top:50%;transform:translate(-50%,-50%);box-shadow:0 1px 3px #0003}.mov-slider__thumb:active{cursor:grabbing;transform:translate(-50%,-50%)scale(1.1)}:host([vertical]) .mov-slider__thumb{inset-inline-start:50%;top:auto;transform:translate(-50%,50%)}:host([vertical]) .mov-slider__thumb:active{transform:translate(-50%,50%)scale(1.1)}.mov-slider__thumb:hover{border-color:var(--mov-color-fill-loud);box-shadow:0 4px 6px -1px #0000001a}.mov-slider__thumb--focused{outline:3px solid var(--mov-color-fill-loud);outline-offset:2px}.mov-slider__thumb--active{z-index:1;transform:translate(-50%,-50%)scale(1.1)}:host([vertical]) .mov-slider__thumb--active{transform:translate(-50%,50%)scale(1.1)}:host([readonly]) .mov-slider__thumb{cursor:default;border-color:var(--theme-border-color)}:host([readonly]) .mov-slider__thumb:active{transform:translate(-50%,-50%)}.mov-slider__input{opacity:0;pointer-events:none;position:absolute}.mov-slider__tooltip{bottom:var(--mov-slider-tooltip-offset);background:var(--theme-hightlight-color,#333);color:#fff;white-space:nowrap;pointer-events:none;opacity:0;z-index:2;border-radius:4px;padding:2px 8px;font-size:14px;transition:opacity .15s;position:absolute;inset-inline-start:50%;transform:translate(-50%)}.mov-slider__thumb:hover .mov-slider__tooltip,.mov-slider__thumb--focused .mov-slider__tooltip,.mov-slider__thumb--active .mov-slider__tooltip{opacity:1}:host([vertical]) .mov-slider__tooltip{bottom:auto;inset-inline-start:var(--mov-slider-tooltip-offset);top:50%;transform:translateY(-50%)}.mov-slider__ticks{top:50%;pointer-events:none;height:8px;position:absolute;inset-inline:0}:host([vertical]) .mov-slider__ticks{top:0;bottom:0;width:8px;height:auto;inset-inline-start:50%}.mov-slider__tick{background:var(--theme-border-color);width:1px;height:8px;position:absolute;transform:translate(-50%)}:host([vertical]) .mov-slider__tick{width:8px;height:1px;transform:translateY(-50%)}.mov-slider__tick-label{color:var(--theme-text-color);opacity:.7;white-space:nowrap;font-size:12px;position:absolute;top:12px;transform:translate(-50%)}:host([vertical]) .mov-slider__tick-label{top:auto;inset-inline-start:12px;transform:translateY(-50%)}:host([size=small]){--mov-slider-track-height:4px;--mov-slider-thumb-size:14px}:host([size=large]){--mov-slider-track-height:10px;--mov-slider-thumb-size:22px}:host([disabled]){opacity:.6;pointer-events:none}:host([disabled]) .mov-slider__thumb{cursor:not-allowed;border-color:var(--theme-border-color);background:#f3f4f6}:host([invalid]) .mov-slider__progress{background:#ef4444}.mov-form-control__label{color:var(--theme-text-color);margin-bottom:.5rem;display:block}.mov-form-control__helper,.mov-form-control__error{margin-top:.5rem;font-size:14px}.mov-form-control__helper{color:var(--theme-text-color);opacity:.8}.mov-form-control__error{color:#ef4444}.mov-slider__live-region{clip:rect(0 0 0 0);border:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}:host([show-ticks]){margin-left:5px;margin-right:5px;padding-bottom:15px}:host([filled]) .mov-slider__thumb{background:var(--mov-color-fill-loud);border-color:var(--mov-color-fill-loud)}",wt=class extends rt{static{this.styles=[Me(B6)]}constructor(){super(),this.label="",this.helpText="",this.errorMessage="",this.min=0,this.max=100,this.step=1,this.value=0,this.dual=!1,this.vertical=!1,this.filled=!1,this.size="medium",this.disabled=!1,this.readonly=!1,this.invalid=!1,this.showTooltip=!1,this.showTicks=!1,this.tickStep=0,this.tickCount=0,this.focusedThumb=null,this.draggingThumb=null,this.activeDrag=null,this._handlePointerMove=this._handlePointerMove.bind(this),this._handlePointerUp=this._handlePointerUp.bind(this)}get values(){return Array.isArray(this.value)?this.value:[this.min,this.value]}getPercentage(t){return(t-this.min)/(this.max-this.min)*100}getValueFromPercentage(t){const n=this.min+t/100*(this.max-this.min);return this.step?Math.round(n/this.step)*this.step:n}getValueFromPointer(t,n,o){let a;return this.vertical?a=(o.bottom-n)/o.height*100:a=(t-o.left)/o.width*100,a=Math.max(0,Math.min(100,a)),this.getValueFromPercentage(a)}clampValue(t){let n=Math.max(this.min,Math.min(this.max,t));return this.step&&(n=Math.round(n/this.step)*this.step),Number(n.toFixed(10))}handleThumbPointerDown(t,n){this.disabled||this.readonly||!this.track||(t.preventDefault(),t.stopPropagation(),t.currentTarget.setPointerCapture(t.pointerId),this.activeDrag={thumb:n,trackRect:this.track.getBoundingClientRect()},this.draggingThumb=n,document.addEventListener("pointermove",this._handlePointerMove),document.addEventListener("pointerup",this._handlePointerUp),document.addEventListener("pointercancel",this._handlePointerUp))}_handlePointerMove(t){if(!this.activeDrag||this.disabled||this.readonly)return;const{thumb:n,trackRect:o}=this.activeDrag,a=this.getValueFromPointer(t.clientX,t.clientY,o);if(this.dual){const s=this.values;if(n==="min"){const c=Math.min(a,s[1]-(this.step||1));this.updateValue([c,s[1]],"input")}else{const c=Math.max(a,s[0]+(this.step||1));this.updateValue([s[0],c],"input")}}else this.updateValue(a,"input")}_handlePointerUp(t){this.activeDrag&&(this.shadowRoot?.querySelector(".mov-slider__thumb--active")?.releasePointerCapture(t.pointerId),this.updateValue(this.value,"change"),this.activeDrag=null,this.draggingThumb=null,document.removeEventListener("pointermove",this._handlePointerMove),document.removeEventListener("pointerup",this._handlePointerUp),document.removeEventListener("pointercancel",this._handlePointerUp))}updateValue(t,n="change"){this.readonly||this.disabled||(this.dual&&Array.isArray(t)?(t=[this.clampValue(t[0]),this.clampValue(t[1])],t[0]>t[1]&&(t=[t[1],t[0]])):!this.dual&&typeof t=="number"&&(t=this.clampValue(t)),this.value=t,this.dispatchEvent(new CustomEvent(n,{bubbles:!0,composed:!0,detail:{value:t}})))}handleTrackClick(t){if(this.disabled||this.readonly||!this.track)return;const n=this.track.getBoundingClientRect(),o=this.getValueFromPointer(t.clientX,t.clientY,n);if(this.dual){const a=this.values;Math.abs(o-a[0])<Math.abs(o-a[1])?this.updateValue([o,a[1]]):this.updateValue([a[0],o])}else this.updateValue(o)}renderTicks(){if(!this.showTicks)return null;const t=new Set;t.add(this.min),t.add(this.max);let n=this.tickStep;if(this.tickCount>1&&(n=Math.round((this.max-this.min)/(this.tickCount-1))),n>0){const a=Math.floor((this.max-this.min)/n);if(a<=100)for(let s=1;s<=a;s++){const c=this.min+s*n;c<this.max&&t.add(Number(c.toFixed(10)))}}const o=Array.from(t).sort((a,s)=>a-s).map(a=>{const s=this.getPercentage(a),c=this.vertical?`bottom: ${s}%`:`inset-inline-start: ${s}%`;return ne`
        <div class="mov-slider__tick" style="${c}">
          <div class="mov-slider__tick-label">${a}</div>
        </div>
      `});return ne`<div class="mov-slider__ticks">${o}</div>`}renderThumb(t,n){const o=this.getPercentage(t),a=this.focusedThumb===n,s=this.draggingThumb===n,c=this.vertical?`bottom: ${o}%`:`inset-inline-start: ${o}%`;return ne`
      <div
        class="mov-slider__thumb ${a?"mov-slider__thumb--focused":""} ${s?"mov-slider__thumb--active":""}"
        style="${c}"
        @pointerdown=${l=>this.handleThumbPointerDown(l,n)}
      >
        ${this.showTooltip?ne`<div class="mov-slider__tooltip">${t}</div>`:""}
      </div>
    `}renderProgress(){const t=this.values;if(this.dual){const a=this.getPercentage(t[0]),s=this.getPercentage(t[1]),c=this.vertical?`bottom: ${a}%; height: ${s-a}%`:`left: ${a}%; width: ${s-a}%`;return ne`<div
        class="mov-slider__progress"
        style="${c}"
      ></div>`}const n=this.getPercentage(t[1]),o=this.vertical?`bottom: 0; height: ${n}%`:`left: 0; width: ${n}%`;return ne`<div
      class="mov-slider__progress"
      style="${o}"
    ></div>`}render(){const t=this.values;return ne`
      <div
        class="mov-slider"
        part="base"
      >
        ${this.label?ne`<label class="mov-form-control__label">${this.label}</label>`:""}
        <div
          class="mov-slider__container"
          @click=${this.handleTrackClick}
        >
          <div class="mov-slider__track">
            ${this.renderProgress()} ${this.renderTicks()}
            ${this.dual?ne`${this.renderThumb(t[0],"min")}${this.renderThumb(t[1],"max")}`:this.renderThumb(t[1],"single")}
          </div>
        </div>
        ${this.helpText&&!this.invalid?ne`<div class="mov-form-control__helper">${this.helpText}</div>`:""}
        ${this.invalid&&this.errorMessage?ne`<div class="mov-form-control__error">${this.errorMessage}</div>`:""}
      </div>
    `}};z([K({type:String})],wt.prototype,"label",void 0),z([K({attribute:"help-text"})],wt.prototype,"helpText",void 0),z([K({attribute:"error-message"})],wt.prototype,"errorMessage",void 0),z([K({type:Number})],wt.prototype,"min",void 0),z([K({type:Number})],wt.prototype,"max",void 0),z([K({type:Number})],wt.prototype,"step",void 0),z([K({type:Object})],wt.prototype,"value",void 0),z([K({type:Boolean,reflect:!0})],wt.prototype,"dual",void 0),z([K({type:Boolean,reflect:!0})],wt.prototype,"vertical",void 0),z([K({type:Boolean,reflect:!0})],wt.prototype,"filled",void 0),z([K({reflect:!0})],wt.prototype,"size",void 0),z([K({type:Boolean,reflect:!0})],wt.prototype,"disabled",void 0),z([K({type:Boolean,reflect:!0})],wt.prototype,"readonly",void 0),z([K({type:Boolean,reflect:!0})],wt.prototype,"invalid",void 0),z([K({type:Boolean,attribute:"show-tooltip"})],wt.prototype,"showTooltip",void 0),z([K({type:Boolean,attribute:"show-ticks"})],wt.prototype,"showTicks",void 0),z([K({type:Number,attribute:"tick-step"})],wt.prototype,"tickStep",void 0),z([K({type:Number,attribute:"tick-count"})],wt.prototype,"tickCount",void 0),z([Ht()],wt.prototype,"focusedThumb",void 0),z([Ht()],wt.prototype,"draggingThumb",void 0),z([An(".mov-slider__track")],wt.prototype,"track",void 0),wt=z([ct("mov-slider")],wt);var H6=xr((e=>{Object.defineProperty(e,"__esModule",{value:!0}),e.BLANK_URL=e.relativeFirstCharacters=e.whitespaceEscapeCharsRegex=e.urlSchemeRegex=e.ctrlCharactersRegex=e.htmlCtrlEntityRegex=e.htmlEntitiesRegex=e.invalidProtocolRegex=void 0,e.invalidProtocolRegex=/^([^\w]*)(javascript|data|vbscript)/im,e.htmlEntitiesRegex=/&#(\w+)(^\w|;)?/g,e.htmlCtrlEntityRegex=/&(newline|tab);/gi,e.ctrlCharactersRegex=/[\u0000-\u001F\u007F-\u009F\u2000-\u200D\uFEFF]/gim,e.urlSchemeRegex=/^.+(:|&colon;)/gim,e.whitespaceEscapeCharsRegex=/(\\|%5[cC])((%(6[eE]|72|74))|[nrt])/g,e.relativeFirstCharacters=[".","/"],e.BLANK_URL="about:blank"})),F6=xr((e=>{Object.defineProperty(e,"__esModule",{value:!0}),e.sanitizeUrl=c;var t=H6();function n(l){return t.relativeFirstCharacters.indexOf(l[0])>-1}function o(l){return l.replace(t.ctrlCharactersRegex,"").replace(t.htmlEntitiesRegex,function(f,h){return String.fromCharCode(h)})}function a(l){return URL.canParse(l)}function s(l){try{return decodeURIComponent(l)}catch{return l}}function c(l){if(!l)return t.BLANK_URL;var f,h=s(l.trim());do h=o(h).replace(t.htmlCtrlEntityRegex,"").replace(t.ctrlCharactersRegex,"").replace(t.whitespaceEscapeCharsRegex,"").trim(),h=s(h),f=h.match(t.ctrlCharactersRegex)||h.match(t.htmlEntitiesRegex)||h.match(t.htmlCtrlEntityRegex)||h.match(t.whitespaceEscapeCharsRegex);while(f&&f.length>0);var p=h;if(!p)return t.BLANK_URL;if(n(p))return p;var m=p.trimStart(),_=m.match(t.urlSchemeRegex);if(!_)return p;var v=_[0].toLowerCase().trim();if(t.invalidProtocolRegex.test(v))return t.BLANK_URL;var y=m.replace(/\\/g,"/");if(v==="mailto:"||v.includes("://"))return y;if(v==="http:"||v==="https:"){if(!a(y))return t.BLANK_URL;var w=new URL(y);return w.protocol=w.protocol.toLowerCase(),w.hostname=w.hostname.toLowerCase(),w.toString()}return y}})),G6=xr(((e,t,n)=>{(function(o,a){typeof define=="function"&&define.amd?define([],a):typeof e<"u"?a():(a(),o.FileSaver={})})(n,function(){"use strict";function o(p,m){return typeof m>"u"?m={autoBom:!1}:typeof m!="object"&&(console.warn("Deprecated: Expected third argument to be a object"),m={autoBom:!m}),m.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(p.type)?new Blob(["\uFEFF",p],{type:p.type}):p}function a(p,m,_){var v=new XMLHttpRequest;v.open("GET",p),v.responseType="blob",v.onload=function(){h(v.response,m,_)},v.onerror=function(){console.error("could not download file")},v.send()}function s(p){var m=new XMLHttpRequest;m.open("HEAD",p,!1);try{m.send()}catch{}return 200<=m.status&&299>=m.status}function c(p){try{p.dispatchEvent(new MouseEvent("click"))}catch{var m=document.createEvent("MouseEvents");m.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),p.dispatchEvent(m)}}var l=typeof window=="object"&&window.window===window?window:typeof self=="object"&&self.self===self?self:typeof global=="object"&&global.global===global?global:void 0,f=l.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),h=l.saveAs||(typeof window!="object"||window!==l?function(){}:"download"in HTMLAnchorElement.prototype&&!f?function(p,m,_){var v=l.URL||l.webkitURL,y=document.createElement("a");m=m||p.name||"download",y.download=m,y.rel="noopener",typeof p=="string"?(y.href=p,y.origin===location.origin?c(y):s(y.href)?a(p,m,_):c(y,y.target="_blank")):(y.href=v.createObjectURL(p),setTimeout(function(){v.revokeObjectURL(y.href)},4e4),setTimeout(function(){c(y)},0))}:"msSaveOrOpenBlob"in navigator?function(p,m,_){if(m=m||p.name||"download",typeof p!="string")navigator.msSaveOrOpenBlob(o(p,_),m);else if(s(p))a(p,m,_);else{var v=document.createElement("a");v.href=p,v.target="_blank",setTimeout(function(){c(v)})}}:function(p,m,_,v){if(v=v||open("","_blank"),v&&(v.document.title=v.document.body.innerText="downloading..."),typeof p=="string")return a(p,m,_);var y=p.type==="application/octet-stream",w=/constructor/i.test(l.HTMLElement)||l.safari,b=/CriOS\/[\d]+/.test(navigator.userAgent);if((b||y&&w||f)&&typeof FileReader<"u"){var S=new FileReader;S.onloadend=function(){var L=S.result;L=b?L:L.replace(/^data:[^;]*;/,"data:attachment/file;"),v?v.location.href=L:location=L,v=null},S.readAsDataURL(p)}else{var M=l.URL||l.webkitURL,C=M.createObjectURL(p);v?v.location=C:location.href=C,v=null,setTimeout(function(){M.revokeObjectURL(C)},4e4)}});l.saveAs=h.saveAs=h,typeof t<"u"&&(t.exports=h)})})),W6=xr(((e,t)=>{(function(n){typeof e=="object"&&typeof t<"u"?t.exports=n():typeof define=="function"&&define.amd?define([],n):(typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:this).JSZip=n()})(function(){return(function n(o,a,s){function c(h,p){if(!a[h]){if(!o[h]){var m=typeof require=="function"&&require;if(!p&&m)return m(h,!0);if(l)return l(h,!0);var _=new Error("Cannot find module '"+h+"'");throw _.code="MODULE_NOT_FOUND",_}var v=a[h]={exports:{}};o[h][0].call(v.exports,function(y){var w=o[h][1][y];return c(w||y)},v,v.exports,n,o,a,s)}return a[h].exports}for(var l=typeof require=="function"&&require,f=0;f<s.length;f++)c(s[f]);return c})({1:[function(n,o,a){"use strict";var s=n("./utils"),c=n("./support"),l="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";a.encode=function(f){for(var h,p,m,_,v,y,w,b=[],S=0,M=f.length,C=M,L=s.getTypeOf(f)!=="string";S<f.length;)C=M-S,m=L?(h=f[S++],p=S<M?f[S++]:0,S<M?f[S++]:0):(h=f.charCodeAt(S++),p=S<M?f.charCodeAt(S++):0,S<M?f.charCodeAt(S++):0),_=h>>2,v=(3&h)<<4|p>>4,y=1<C?(15&p)<<2|m>>6:64,w=2<C?63&m:64,b.push(l.charAt(_)+l.charAt(v)+l.charAt(y)+l.charAt(w));return b.join("")},a.decode=function(f){var h,p,m,_,v,y,w=0,b=0,S="data:";if(f.substr(0,S.length)===S)throw new Error("Invalid base64 input, it looks like a data url.");var M,C=3*(f=f.replace(/[^A-Za-z0-9\+\/\=]/g,"")).length/4;if(f.charAt(f.length-1)===l.charAt(64)&&C--,f.charAt(f.length-2)===l.charAt(64)&&C--,C%1!=0)throw new Error("Invalid base64 input, bad content length.");for(M=c.uint8array?new Uint8Array(0|C):new Array(0|C);w<f.length;)h=l.indexOf(f.charAt(w++))<<2|(_=l.indexOf(f.charAt(w++)))>>4,p=(15&_)<<4|(v=l.indexOf(f.charAt(w++)))>>2,m=(3&v)<<6|(y=l.indexOf(f.charAt(w++))),M[b++]=h,v!==64&&(M[b++]=p),y!==64&&(M[b++]=m);return M}},{"./support":30,"./utils":32}],2:[function(n,o,a){"use strict";var s=n("./external"),c=n("./stream/DataWorker"),l=n("./stream/Crc32Probe"),f=n("./stream/DataLengthProbe");function h(p,m,_,v,y){this.compressedSize=p,this.uncompressedSize=m,this.crc32=_,this.compression=v,this.compressedContent=y}h.prototype={getContentWorker:function(){var p=new c(s.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new f("data_length")),m=this;return p.on("end",function(){if(this.streamInfo.data_length!==m.uncompressedSize)throw new Error("Bug : uncompressed data size mismatch")}),p},getCompressedWorker:function(){return new c(s.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize",this.compressedSize).withStreamInfo("uncompressedSize",this.uncompressedSize).withStreamInfo("crc32",this.crc32).withStreamInfo("compression",this.compression)}},h.createWorkerFrom=function(p,m,_){return p.pipe(new l).pipe(new f("uncompressedSize")).pipe(m.compressWorker(_)).pipe(new f("compressedSize")).withStreamInfo("compression",m)},o.exports=h},{"./external":6,"./stream/Crc32Probe":25,"./stream/DataLengthProbe":26,"./stream/DataWorker":27}],3:[function(n,o,a){"use strict";var s=n("./stream/GenericWorker");a.STORE={magic:"\0\0",compressWorker:function(c){return new s("STORE compression")},uncompressWorker:function(){return new s("STORE decompression")}},a.DEFLATE=n("./flate")},{"./flate":7,"./stream/GenericWorker":28}],4:[function(n,o,a){"use strict";var s=n("./utils"),c=(function(){for(var l,f=[],h=0;h<256;h++){l=h;for(var p=0;p<8;p++)l=1&l?3988292384^l>>>1:l>>>1;f[h]=l}return f})();o.exports=function(l,f){return l!==void 0&&l.length?s.getTypeOf(l)!=="string"?(function(h,p,m,_){var v=c,y=_+m;h^=-1;for(var w=_;w<y;w++)h=h>>>8^v[255&(h^p[w])];return-1^h})(0|f,l,l.length,0):(function(h,p,m,_){var v=c,y=_+m;h^=-1;for(var w=_;w<y;w++)h=h>>>8^v[255&(h^p.charCodeAt(w))];return-1^h})(0|f,l,l.length,0):0}},{"./utils":32}],5:[function(n,o,a){"use strict";a.base64=!1,a.binary=!1,a.dir=!1,a.createFolders=!0,a.date=null,a.compression=null,a.compressionOptions=null,a.comment=null,a.unixPermissions=null,a.dosPermissions=null},{}],6:[function(n,o,a){"use strict";var s=null;s=typeof Promise<"u"?Promise:n("lie"),o.exports={Promise:s}},{lie:37}],7:[function(n,o,a){"use strict";var s=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Uint32Array<"u",c=n("pako"),l=n("./utils"),f=n("./stream/GenericWorker"),h=s?"uint8array":"array";function p(m,_){f.call(this,"FlateWorker/"+m),this._pako=null,this._pakoAction=m,this._pakoOptions=_,this.meta={}}a.magic="\b\0",l.inherits(p,f),p.prototype.processChunk=function(m){this.meta=m.meta,this._pako===null&&this._createPako(),this._pako.push(l.transformTo(h,m.data),!1)},p.prototype.flush=function(){f.prototype.flush.call(this),this._pako===null&&this._createPako(),this._pako.push([],!0)},p.prototype.cleanUp=function(){f.prototype.cleanUp.call(this),this._pako=null},p.prototype._createPako=function(){this._pako=new c[this._pakoAction]({raw:!0,level:this._pakoOptions.level||-1});var m=this;this._pako.onData=function(_){m.push({data:_,meta:m.meta})}},a.compressWorker=function(m){return new p("Deflate",m)},a.uncompressWorker=function(){return new p("Inflate",{})}},{"./stream/GenericWorker":28,"./utils":32,pako:38}],8:[function(n,o,a){"use strict";function s(v,y){var w,b="";for(w=0;w<y;w++)b+=String.fromCharCode(255&v),v>>>=8;return b}function c(v,y,w,b,S,M){var C,L,D=v.file,Y=v.compression,U=M!==h.utf8encode,oe=l.transformTo("string",M(D.name)),H=l.transformTo("string",h.utf8encode(D.name)),me=D.comment,ve=l.transformTo("string",M(me)),P=l.transformTo("string",h.utf8encode(me)),J=H.length!==D.name.length,A=P.length!==me.length,ee="",Ce="",ue="",ze=D.dir,se=D.date,Ae={crc32:0,compressedSize:0,uncompressedSize:0};y&&!w||(Ae.crc32=v.crc32,Ae.compressedSize=v.compressedSize,Ae.uncompressedSize=v.uncompressedSize);var q=0;y&&(q|=8),U||!J&&!A||(q|=2048);var W=0,ke=0;ze&&(W|=16),S==="UNIX"?(ke=798,W|=(function(pe,it){var ft=pe;return pe||(ft=it?16893:33204),(65535&ft)<<16})(D.unixPermissions,ze)):(ke=20,W|=(function(pe){return 63&(pe||0)})(D.dosPermissions)),C=se.getUTCHours(),C<<=6,C|=se.getUTCMinutes(),C<<=5,C|=se.getUTCSeconds()/2,L=se.getUTCFullYear()-1980,L<<=4,L|=se.getUTCMonth()+1,L<<=5,L|=se.getUTCDate(),J&&(Ce=s(1,1)+s(p(oe),4)+H,ee+="up"+s(Ce.length,2)+Ce),A&&(ue=s(1,1)+s(p(ve),4)+P,ee+="uc"+s(ue.length,2)+ue);var ge="";return ge+=`
\0`,ge+=s(q,2),ge+=Y.magic,ge+=s(C,2),ge+=s(L,2),ge+=s(Ae.crc32,4),ge+=s(Ae.compressedSize,4),ge+=s(Ae.uncompressedSize,4),ge+=s(oe.length,2),ge+=s(ee.length,2),{fileRecord:m.LOCAL_FILE_HEADER+ge+oe+ee,dirRecord:m.CENTRAL_FILE_HEADER+s(ke,2)+ge+s(ve.length,2)+"\0\0\0\0"+s(W,4)+s(b,4)+oe+ee+ve}}var l=n("../utils"),f=n("../stream/GenericWorker"),h=n("../utf8"),p=n("../crc32"),m=n("../signature");function _(v,y,w,b){f.call(this,"ZipFileWorker"),this.bytesWritten=0,this.zipComment=y,this.zipPlatform=w,this.encodeFileName=b,this.streamFiles=v,this.accumulate=!1,this.contentBuffer=[],this.dirRecords=[],this.currentSourceOffset=0,this.entriesCount=0,this.currentFile=null,this._sources=[]}l.inherits(_,f),_.prototype.push=function(v){var y=v.meta.percent||0,w=this.entriesCount,b=this._sources.length;this.accumulate?this.contentBuffer.push(v):(this.bytesWritten+=v.data.length,f.prototype.push.call(this,{data:v.data,meta:{currentFile:this.currentFile,percent:w?(y+100*(w-b-1))/w:100}}))},_.prototype.openedSource=function(v){this.currentSourceOffset=this.bytesWritten,this.currentFile=v.file.name;var y=this.streamFiles&&!v.file.dir;if(y){var w=c(v,y,!1,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);this.push({data:w.fileRecord,meta:{percent:0}})}else this.accumulate=!0},_.prototype.closedSource=function(v){this.accumulate=!1;var y=this.streamFiles&&!v.file.dir,w=c(v,y,!0,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);if(this.dirRecords.push(w.dirRecord),y)this.push({data:(function(b){return m.DATA_DESCRIPTOR+s(b.crc32,4)+s(b.compressedSize,4)+s(b.uncompressedSize,4)})(v),meta:{percent:100}});else for(this.push({data:w.fileRecord,meta:{percent:0}});this.contentBuffer.length;)this.push(this.contentBuffer.shift());this.currentFile=null},_.prototype.flush=function(){for(var v=this.bytesWritten,y=0;y<this.dirRecords.length;y++)this.push({data:this.dirRecords[y],meta:{percent:100}});var w=this.bytesWritten-v,b=(function(S,M,C,L,D){var Y=l.transformTo("string",D(L));return m.CENTRAL_DIRECTORY_END+"\0\0\0\0"+s(S,2)+s(S,2)+s(M,4)+s(C,4)+s(Y.length,2)+Y})(this.dirRecords.length,w,v,this.zipComment,this.encodeFileName);this.push({data:b,meta:{percent:100}})},_.prototype.prepareNextSource=function(){this.previous=this._sources.shift(),this.openedSource(this.previous.streamInfo),this.isPaused?this.previous.pause():this.previous.resume()},_.prototype.registerPrevious=function(v){this._sources.push(v);var y=this;return v.on("data",function(w){y.processChunk(w)}),v.on("end",function(){y.closedSource(y.previous.streamInfo),y._sources.length?y.prepareNextSource():y.end()}),v.on("error",function(w){y.error(w)}),this},_.prototype.resume=function(){return!!f.prototype.resume.call(this)&&(!this.previous&&this._sources.length?(this.prepareNextSource(),!0):this.previous||this._sources.length||this.generatedError?void 0:(this.end(),!0))},_.prototype.error=function(v){var y=this._sources;if(!f.prototype.error.call(this,v))return!1;for(var w=0;w<y.length;w++)try{y[w].error(v)}catch{}return!0},_.prototype.lock=function(){f.prototype.lock.call(this);for(var v=this._sources,y=0;y<v.length;y++)v[y].lock()},o.exports=_},{"../crc32":4,"../signature":23,"../stream/GenericWorker":28,"../utf8":31,"../utils":32}],9:[function(n,o,a){"use strict";var s=n("../compressions"),c=n("./ZipFileWorker");a.generateWorker=function(l,f,h){var p=new c(f.streamFiles,h,f.platform,f.encodeFileName),m=0;try{l.forEach(function(_,v){m++;var y=(function(M,C){var L=M||C,D=s[L];if(!D)throw new Error(L+" is not a valid compression method !");return D})(v.options.compression,f.compression),w=v.options.compressionOptions||f.compressionOptions||{},b=v.dir,S=v.date;v._compressWorker(y,w).withStreamInfo("file",{name:_,dir:b,date:S,comment:v.comment||"",unixPermissions:v.unixPermissions,dosPermissions:v.dosPermissions}).pipe(p)}),p.entriesCount=m}catch(_){p.error(_)}return p}},{"../compressions":3,"./ZipFileWorker":8}],10:[function(n,o,a){"use strict";function s(){if(!(this instanceof s))return new s;if(arguments.length)throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");this.files=Object.create(null),this.comment=null,this.root="",this.clone=function(){var c=new s;for(var l in this)typeof this[l]!="function"&&(c[l]=this[l]);return c}}(s.prototype=n("./object")).loadAsync=n("./load"),s.support=n("./support"),s.defaults=n("./defaults"),s.version="3.9.1",s.loadAsync=function(c,l){return new s().loadAsync(c,l)},s.external=n("./external"),o.exports=s},{"./defaults":5,"./external":6,"./load":11,"./object":15,"./support":30}],11:[function(n,o,a){"use strict";var s=n("./utils"),c=n("./external"),l=n("./utf8"),f=n("./zipEntries"),h=n("./stream/Crc32Probe"),p=n("./nodejsUtils");function m(_){return new c.Promise(function(v,y){var w=_.decompressed.getContentWorker().pipe(new h);w.on("error",function(b){y(b)}).on("end",function(){w.streamInfo.crc32!==_.decompressed.crc32?y(new Error("Corrupted zip : CRC32 mismatch")):v()}).resume()})}o.exports=function(_,v){var y=this;return v=s.extend(v||{},{base64:!1,checkCRC32:!1,optimizedBinaryString:!1,createFolders:!1,decodeFileName:l.utf8decode}),p.isNode&&p.isStream(_)?c.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")):s.prepareContent("the loaded zip file",_,!0,v.optimizedBinaryString,v.base64).then(function(w){var b=new f(v);return b.load(w),b}).then(function(w){var b=[c.Promise.resolve(w)],S=w.files;if(v.checkCRC32)for(var M=0;M<S.length;M++)b.push(m(S[M]));return c.Promise.all(b)}).then(function(w){for(var b=w.shift(),S=b.files,M=0;M<S.length;M++){var C=S[M],L=C.fileNameStr,D=s.resolve(C.fileNameStr);y.file(D,C.decompressed,{binary:!0,optimizedBinaryString:!0,date:C.date,dir:C.dir,comment:C.fileCommentStr.length?C.fileCommentStr:null,unixPermissions:C.unixPermissions,dosPermissions:C.dosPermissions,createFolders:v.createFolders}),C.dir||(y.file(D).unsafeOriginalName=L)}return b.zipComment.length&&(y.comment=b.zipComment),y})}},{"./external":6,"./nodejsUtils":14,"./stream/Crc32Probe":25,"./utf8":31,"./utils":32,"./zipEntries":33}],12:[function(n,o,a){"use strict";var s=n("../utils"),c=n("../stream/GenericWorker");function l(f,h){c.call(this,"Nodejs stream input adapter for "+f),this._upstreamEnded=!1,this._bindStream(h)}s.inherits(l,c),l.prototype._bindStream=function(f){var h=this;(this._stream=f).pause(),f.on("data",function(p){h.push({data:p,meta:{percent:0}})}).on("error",function(p){h.isPaused?this.generatedError=p:h.error(p)}).on("end",function(){h.isPaused?h._upstreamEnded=!0:h.end()})},l.prototype.pause=function(){return!!c.prototype.pause.call(this)&&(this._stream.pause(),!0)},l.prototype.resume=function(){return!!c.prototype.resume.call(this)&&(this._upstreamEnded?this.end():this._stream.resume(),!0)},o.exports=l},{"../stream/GenericWorker":28,"../utils":32}],13:[function(n,o,a){"use strict";var s=n("readable-stream").Readable;function c(l,f,h){s.call(this,f),this._helper=l;var p=this;l.on("data",function(m,_){p.push(m)||p._helper.pause(),h&&h(_)}).on("error",function(m){p.emit("error",m)}).on("end",function(){p.push(null)})}n("../utils").inherits(c,s),c.prototype._read=function(){this._helper.resume()},o.exports=c},{"../utils":32,"readable-stream":16}],14:[function(n,o,a){"use strict";o.exports={isNode:typeof Buffer<"u",newBufferFrom:function(s,c){if(Buffer.from&&Buffer.from!==Uint8Array.from)return Buffer.from(s,c);if(typeof s=="number")throw new Error('The "data" argument must not be a number');return new Buffer(s,c)},allocBuffer:function(s){if(Buffer.alloc)return Buffer.alloc(s);var c=new Buffer(s);return c.fill(0),c},isBuffer:function(s){return Buffer.isBuffer(s)},isStream:function(s){return s&&typeof s.on=="function"&&typeof s.pause=="function"&&typeof s.resume=="function"}}},{}],15:[function(n,o,a){"use strict";function s(L,D,Y){var U,oe=l.getTypeOf(D),H=l.extend(Y||{},p);H.date=H.date||new Date,H.compression!==null&&(H.compression=H.compression.toUpperCase()),typeof H.unixPermissions=="string"&&(H.unixPermissions=parseInt(H.unixPermissions,8)),H.unixPermissions&&16384&H.unixPermissions&&(H.dir=!0),H.dosPermissions&&16&H.dosPermissions&&(H.dir=!0),H.dir&&(L=S(L)),H.createFolders&&(U=b(L))&&M.call(this,U,!0);var me=oe==="string"&&H.binary===!1&&H.base64===!1;Y&&Y.binary!==void 0||(H.binary=!me),(D instanceof m&&D.uncompressedSize===0||H.dir||!D||D.length===0)&&(H.base64=!1,H.binary=!0,D="",H.compression="STORE",oe="string");var ve=null;ve=D instanceof m||D instanceof f?D:y.isNode&&y.isStream(D)?new w(L,D):l.prepareContent(L,D,H.binary,H.optimizedBinaryString,H.base64);var P=new _(L,ve,H);this.files[L]=P}var c=n("./utf8"),l=n("./utils"),f=n("./stream/GenericWorker"),h=n("./stream/StreamHelper"),p=n("./defaults"),m=n("./compressedObject"),_=n("./zipObject"),v=n("./generate"),y=n("./nodejsUtils"),w=n("./nodejs/NodejsStreamInputAdapter"),b=function(L){L.slice(-1)==="/"&&(L=L.substring(0,L.length-1));var D=L.lastIndexOf("/");return 0<D?L.substring(0,D):""},S=function(L){return L.slice(-1)!=="/"&&(L+="/"),L},M=function(L,D){return D=D!==void 0?D:p.createFolders,L=S(L),this.files[L]||s.call(this,L,null,{dir:!0,createFolders:D}),this.files[L]};function C(L){return Object.prototype.toString.call(L)==="[object RegExp]"}o.exports={load:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},forEach:function(L){var D,Y,U;for(D in this.files)U=this.files[D],(Y=D.slice(this.root.length,D.length))&&D.slice(0,this.root.length)===this.root&&L(Y,U)},filter:function(L){var D=[];return this.forEach(function(Y,U){L(Y,U)&&D.push(U)}),D},file:function(L,D,Y){if(arguments.length!==1)return L=this.root+L,s.call(this,L,D,Y),this;if(C(L)){var U=L;return this.filter(function(H,me){return!me.dir&&U.test(H)})}var oe=this.files[this.root+L];return oe&&!oe.dir?oe:null},folder:function(L){if(!L)return this;if(C(L))return this.filter(function(oe,H){return H.dir&&L.test(oe)});var D=this.root+L,Y=M.call(this,D),U=this.clone();return U.root=Y.name,U},remove:function(L){L=this.root+L;var D=this.files[L];if(D||(L.slice(-1)!=="/"&&(L+="/"),D=this.files[L]),D&&!D.dir)delete this.files[L];else for(var Y=this.filter(function(oe,H){return H.name.slice(0,L.length)===L}),U=0;U<Y.length;U++)delete this.files[Y[U].name];return this},generate:function(L){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},generateInternalStream:function(L){var D,Y={};try{if((Y=l.extend(L||{},{streamFiles:!1,compression:"STORE",compressionOptions:null,type:"",platform:"DOS",comment:null,mimeType:"application/zip",encodeFileName:c.utf8encode})).type=Y.type.toLowerCase(),Y.compression=Y.compression.toUpperCase(),Y.type==="binarystring"&&(Y.type="string"),!Y.type)throw new Error("No output type specified.");l.checkSupport(Y.type),Y.platform!=="darwin"&&Y.platform!=="freebsd"&&Y.platform!=="linux"&&Y.platform!=="sunos"||(Y.platform="UNIX"),Y.platform==="win32"&&(Y.platform="DOS");var U=Y.comment||this.comment||"";D=v.generateWorker(this,Y,U)}catch(oe){(D=new f("error")).error(oe)}return new h(D,Y.type||"string",Y.mimeType)},generateAsync:function(L,D){return this.generateInternalStream(L).accumulate(D)},generateNodeStream:function(L,D){return(L=L||{}).type||(L.type="nodebuffer"),this.generateInternalStream(L).toNodejsStream(D)}}},{"./compressedObject":2,"./defaults":5,"./generate":9,"./nodejs/NodejsStreamInputAdapter":12,"./nodejsUtils":14,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31,"./utils":32,"./zipObject":35}],16:[function(n,o,a){o.exports=n("stream")},{stream:void 0}],17:[function(n,o,a){"use strict";var s=n("./DataReader");function c(l){s.call(this,l);for(var f=0;f<this.data.length;f++)l[f]=255&l[f]}n("../utils").inherits(c,s),c.prototype.byteAt=function(l){return this.data[this.zero+l]},c.prototype.lastIndexOfSignature=function(l){for(var f=l.charCodeAt(0),h=l.charCodeAt(1),p=l.charCodeAt(2),m=l.charCodeAt(3),_=this.length-4;0<=_;--_)if(this.data[_]===f&&this.data[_+1]===h&&this.data[_+2]===p&&this.data[_+3]===m)return _-this.zero;return-1},c.prototype.readAndCheckSignature=function(l){var f=l.charCodeAt(0),h=l.charCodeAt(1),p=l.charCodeAt(2),m=l.charCodeAt(3),_=this.readData(4);return f===_[0]&&h===_[1]&&p===_[2]&&m===_[3]},c.prototype.readData=function(l){if(this.checkOffset(l),l===0)return[];var f=this.data.slice(this.zero+this.index,this.zero+this.index+l);return this.index+=l,f},o.exports=c},{"../utils":32,"./DataReader":18}],18:[function(n,o,a){"use strict";var s=n("../utils");function c(l){this.data=l,this.length=l.length,this.index=0,this.zero=0}c.prototype={checkOffset:function(l){this.checkIndex(this.index+l)},checkIndex:function(l){if(this.length<this.zero+l||l<0)throw new Error("End of data reached (data length = "+this.length+", asked index = "+l+"). Corrupted zip ?")},setIndex:function(l){this.checkIndex(l),this.index=l},skip:function(l){this.setIndex(this.index+l)},byteAt:function(l){},readInt:function(l){var f,h=0;for(this.checkOffset(l),f=this.index+l-1;f>=this.index;f--)h=(h<<8)+this.byteAt(f);return this.index+=l,h},readString:function(l){return s.transformTo("string",this.readData(l))},readData:function(l){},lastIndexOfSignature:function(l){},readAndCheckSignature:function(l){},readDate:function(){var l=this.readInt(4);return new Date(Date.UTC(1980+(l>>25&127),(l>>21&15)-1,l>>16&31,l>>11&31,l>>5&63,(31&l)<<1))}},o.exports=c},{"../utils":32}],19:[function(n,o,a){"use strict";var s=n("./Uint8ArrayReader");function c(l){s.call(this,l)}n("../utils").inherits(c,s),c.prototype.readData=function(l){this.checkOffset(l);var f=this.data.slice(this.zero+this.index,this.zero+this.index+l);return this.index+=l,f},o.exports=c},{"../utils":32,"./Uint8ArrayReader":21}],20:[function(n,o,a){"use strict";var s=n("./DataReader");function c(l){s.call(this,l)}n("../utils").inherits(c,s),c.prototype.byteAt=function(l){return this.data.charCodeAt(this.zero+l)},c.prototype.lastIndexOfSignature=function(l){return this.data.lastIndexOf(l)-this.zero},c.prototype.readAndCheckSignature=function(l){return l===this.readData(4)},c.prototype.readData=function(l){this.checkOffset(l);var f=this.data.slice(this.zero+this.index,this.zero+this.index+l);return this.index+=l,f},o.exports=c},{"../utils":32,"./DataReader":18}],21:[function(n,o,a){"use strict";var s=n("./ArrayReader");function c(l){s.call(this,l)}n("../utils").inherits(c,s),c.prototype.readData=function(l){if(this.checkOffset(l),l===0)return new Uint8Array(0);var f=this.data.subarray(this.zero+this.index,this.zero+this.index+l);return this.index+=l,f},o.exports=c},{"../utils":32,"./ArrayReader":17}],22:[function(n,o,a){"use strict";var s=n("../utils"),c=n("../support"),l=n("./ArrayReader"),f=n("./StringReader"),h=n("./NodeBufferReader"),p=n("./Uint8ArrayReader");o.exports=function(m){var _=s.getTypeOf(m);return s.checkSupport(_),_!=="string"||c.uint8array?_==="nodebuffer"?new h(m):c.uint8array?new p(s.transformTo("uint8array",m)):new l(s.transformTo("array",m)):new f(m)}},{"../support":30,"../utils":32,"./ArrayReader":17,"./NodeBufferReader":19,"./StringReader":20,"./Uint8ArrayReader":21}],23:[function(n,o,a){"use strict";a.LOCAL_FILE_HEADER="PK",a.CENTRAL_FILE_HEADER="PK",a.CENTRAL_DIRECTORY_END="PK",a.ZIP64_CENTRAL_DIRECTORY_LOCATOR="PK\x07",a.ZIP64_CENTRAL_DIRECTORY_END="PK",a.DATA_DESCRIPTOR="PK\x07\b"},{}],24:[function(n,o,a){"use strict";var s=n("./GenericWorker"),c=n("../utils");function l(f){s.call(this,"ConvertWorker to "+f),this.destType=f}c.inherits(l,s),l.prototype.processChunk=function(f){this.push({data:c.transformTo(this.destType,f.data),meta:f.meta})},o.exports=l},{"../utils":32,"./GenericWorker":28}],25:[function(n,o,a){"use strict";var s=n("./GenericWorker"),c=n("../crc32");function l(){s.call(this,"Crc32Probe"),this.withStreamInfo("crc32",0)}n("../utils").inherits(l,s),l.prototype.processChunk=function(f){this.streamInfo.crc32=c(f.data,this.streamInfo.crc32||0),this.push(f)},o.exports=l},{"../crc32":4,"../utils":32,"./GenericWorker":28}],26:[function(n,o,a){"use strict";var s=n("../utils"),c=n("./GenericWorker");function l(f){c.call(this,"DataLengthProbe for "+f),this.propName=f,this.withStreamInfo(f,0)}s.inherits(l,c),l.prototype.processChunk=function(f){if(f){var h=this.streamInfo[this.propName]||0;this.streamInfo[this.propName]=h+f.data.length}c.prototype.processChunk.call(this,f)},o.exports=l},{"../utils":32,"./GenericWorker":28}],27:[function(n,o,a){"use strict";var s=n("../utils"),c=n("./GenericWorker");function l(f){c.call(this,"DataWorker");var h=this;this.dataIsReady=!1,this.index=0,this.max=0,this.data=null,this.type="",this._tickScheduled=!1,f.then(function(p){h.dataIsReady=!0,h.data=p,h.max=p&&p.length||0,h.type=s.getTypeOf(p),h.isPaused||h._tickAndRepeat()},function(p){h.error(p)})}s.inherits(l,c),l.prototype.cleanUp=function(){c.prototype.cleanUp.call(this),this.data=null},l.prototype.resume=function(){return!!c.prototype.resume.call(this)&&(!this._tickScheduled&&this.dataIsReady&&(this._tickScheduled=!0,s.delay(this._tickAndRepeat,[],this)),!0)},l.prototype._tickAndRepeat=function(){this._tickScheduled=!1,this.isPaused||this.isFinished||(this._tick(),this.isFinished||(s.delay(this._tickAndRepeat,[],this),this._tickScheduled=!0))},l.prototype._tick=function(){if(this.isPaused||this.isFinished)return!1;var f=null,h=Math.min(this.max,this.index+16384);if(this.index>=this.max)return this.end();switch(this.type){case"string":f=this.data.substring(this.index,h);break;case"uint8array":f=this.data.subarray(this.index,h);break;case"array":case"nodebuffer":f=this.data.slice(this.index,h)}return this.index=h,this.push({data:f,meta:{percent:this.max?this.index/this.max*100:0}})},o.exports=l},{"../utils":32,"./GenericWorker":28}],28:[function(n,o,a){"use strict";function s(c){this.name=c||"default",this.streamInfo={},this.generatedError=null,this.extraStreamInfo={},this.isPaused=!0,this.isFinished=!1,this.isLocked=!1,this._listeners={data:[],end:[],error:[]},this.previous=null}s.prototype={push:function(c){this.emit("data",c)},end:function(){if(this.isFinished)return!1;this.flush();try{this.emit("end"),this.cleanUp(),this.isFinished=!0}catch(c){this.emit("error",c)}return!0},error:function(c){return!this.isFinished&&(this.isPaused?this.generatedError=c:(this.isFinished=!0,this.emit("error",c),this.previous&&this.previous.error(c),this.cleanUp()),!0)},on:function(c,l){return this._listeners[c].push(l),this},cleanUp:function(){this.streamInfo=this.generatedError=this.extraStreamInfo=null,this._listeners=[]},emit:function(c,l){if(this._listeners[c])for(var f=0;f<this._listeners[c].length;f++)this._listeners[c][f].call(this,l)},pipe:function(c){return c.registerPrevious(this)},registerPrevious:function(c){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.streamInfo=c.streamInfo,this.mergeStreamInfo(),this.previous=c;var l=this;return c.on("data",function(f){l.processChunk(f)}),c.on("end",function(){l.end()}),c.on("error",function(f){l.error(f)}),this},pause:function(){return!this.isPaused&&!this.isFinished&&(this.isPaused=!0,this.previous&&this.previous.pause(),!0)},resume:function(){if(!this.isPaused||this.isFinished)return!1;var c=this.isPaused=!1;return this.generatedError&&(this.error(this.generatedError),c=!0),this.previous&&this.previous.resume(),!c},flush:function(){},processChunk:function(c){this.push(c)},withStreamInfo:function(c,l){return this.extraStreamInfo[c]=l,this.mergeStreamInfo(),this},mergeStreamInfo:function(){for(var c in this.extraStreamInfo)this.extraStreamInfo.hasOwnProperty(c)&&(this.streamInfo[c]=this.extraStreamInfo[c])},lock:function(){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.isLocked=!0,this.previous&&this.previous.lock()},toString:function(){var c="Worker "+this.name;return this.previous?this.previous+" -> "+c:c}},o.exports=s},{}],29:[function(n,o,a){"use strict";var s=n("../utils"),c=n("./ConvertWorker"),l=n("./GenericWorker"),f=n("../base64"),h=n("../support"),p=n("../external"),m=null;if(h.nodestream)try{m=n("../nodejs/NodejsStreamOutputAdapter")}catch{}function _(y,w){return new p.Promise(function(b,S){var M=[],C=y._internalType,L=y._outputType,D=y._mimeType;y.on("data",function(Y,U){M.push(Y),w&&w(U)}).on("error",function(Y){M=[],S(Y)}).on("end",function(){try{b((function(Y,U,oe){switch(Y){case"blob":return s.newBlob(s.transformTo("arraybuffer",U),oe);case"base64":return f.encode(U);default:return s.transformTo(Y,U)}})(L,(function(Y,U){var oe,H=0,me=null,ve=0;for(oe=0;oe<U.length;oe++)ve+=U[oe].length;switch(Y){case"string":return U.join("");case"array":return Array.prototype.concat.apply([],U);case"uint8array":for(me=new Uint8Array(ve),oe=0;oe<U.length;oe++)me.set(U[oe],H),H+=U[oe].length;return me;case"nodebuffer":return Buffer.concat(U);default:throw new Error("concat : unsupported type '"+Y+"'")}})(C,M),D))}catch(Y){S(Y)}M=[]}).resume()})}function v(y,w,b){var S=w;switch(w){case"blob":case"arraybuffer":S="uint8array";break;case"base64":S="string"}try{this._internalType=S,this._outputType=w,this._mimeType=b,s.checkSupport(S),this._worker=y.pipe(new c(S)),y.lock()}catch(M){this._worker=new l("error"),this._worker.error(M)}}v.prototype={accumulate:function(y){return _(this,y)},on:function(y,w){var b=this;return y==="data"?this._worker.on(y,function(S){w.call(b,S.data,S.meta)}):this._worker.on(y,function(){s.delay(w,arguments,b)}),this},resume:function(){return s.delay(this._worker.resume,[],this._worker),this},pause:function(){return this._worker.pause(),this},toNodejsStream:function(y){if(s.checkSupport("nodestream"),this._outputType!=="nodebuffer")throw new Error(this._outputType+" is not supported by this method");return new m(this,{objectMode:this._outputType!=="nodebuffer"},y)}},o.exports=v},{"../base64":1,"../external":6,"../nodejs/NodejsStreamOutputAdapter":13,"../support":30,"../utils":32,"./ConvertWorker":24,"./GenericWorker":28}],30:[function(n,o,a){"use strict";if(a.base64=!0,a.array=!0,a.string=!0,a.arraybuffer=typeof ArrayBuffer<"u"&&typeof Uint8Array<"u",a.nodebuffer=typeof Buffer<"u",a.uint8array=typeof Uint8Array<"u",typeof ArrayBuffer>"u")a.blob=!1;else{var s=new ArrayBuffer(0);try{a.blob=new Blob([s],{type:"application/zip"}).size===0}catch{try{var c=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);c.append(s),a.blob=c.getBlob("application/zip").size===0}catch{a.blob=!1}}}try{a.nodestream=!!n("readable-stream").Readable}catch{a.nodestream=!1}},{"readable-stream":16}],31:[function(n,o,a){"use strict";for(var s=n("./utils"),c=n("./support"),l=n("./nodejsUtils"),f=n("./stream/GenericWorker"),h=new Array(256),p=0;p<256;p++)h[p]=252<=p?6:248<=p?5:240<=p?4:224<=p?3:192<=p?2:1;h[254]=h[254]=1;function m(){f.call(this,"utf-8 decode"),this.leftOver=null}function _(){f.call(this,"utf-8 encode")}a.utf8encode=function(v){return c.nodebuffer?l.newBufferFrom(v,"utf-8"):(function(y){var w,b,S,M,C,L=y.length,D=0;for(M=0;M<L;M++)(64512&(b=y.charCodeAt(M)))==55296&&M+1<L&&(64512&(S=y.charCodeAt(M+1)))==56320&&(b=65536+(b-55296<<10)+(S-56320),M++),D+=b<128?1:b<2048?2:b<65536?3:4;for(w=c.uint8array?new Uint8Array(D):new Array(D),M=C=0;C<D;M++)(64512&(b=y.charCodeAt(M)))==55296&&M+1<L&&(64512&(S=y.charCodeAt(M+1)))==56320&&(b=65536+(b-55296<<10)+(S-56320),M++),b<128?w[C++]=b:(b<2048?w[C++]=192|b>>>6:(b<65536?w[C++]=224|b>>>12:(w[C++]=240|b>>>18,w[C++]=128|b>>>12&63),w[C++]=128|b>>>6&63),w[C++]=128|63&b);return w})(v)},a.utf8decode=function(v){return c.nodebuffer?s.transformTo("nodebuffer",v).toString("utf-8"):(function(y){var w,b,S,M,C=y.length,L=new Array(2*C);for(w=b=0;w<C;)if((S=y[w++])<128)L[b++]=S;else if(4<(M=h[S]))L[b++]=65533,w+=M-1;else{for(S&=M===2?31:M===3?15:7;1<M&&w<C;)S=S<<6|63&y[w++],M--;1<M?L[b++]=65533:S<65536?L[b++]=S:(S-=65536,L[b++]=55296|S>>10&1023,L[b++]=56320|1023&S)}return L.length!==b&&(L.subarray?L=L.subarray(0,b):L.length=b),s.applyFromCharCode(L)})(v=s.transformTo(c.uint8array?"uint8array":"array",v))},s.inherits(m,f),m.prototype.processChunk=function(v){var y=s.transformTo(c.uint8array?"uint8array":"array",v.data);if(this.leftOver&&this.leftOver.length){if(c.uint8array){var w=y;(y=new Uint8Array(w.length+this.leftOver.length)).set(this.leftOver,0),y.set(w,this.leftOver.length)}else y=this.leftOver.concat(y);this.leftOver=null}var b=(function(M,C){var L;for((C=C||M.length)>M.length&&(C=M.length),L=C-1;0<=L&&(192&M[L])==128;)L--;return L<0||L===0?C:L+h[M[L]]>C?L:C})(y),S=y;b!==y.length&&(c.uint8array?(S=y.subarray(0,b),this.leftOver=y.subarray(b,y.length)):(S=y.slice(0,b),this.leftOver=y.slice(b,y.length))),this.push({data:a.utf8decode(S),meta:v.meta})},m.prototype.flush=function(){this.leftOver&&this.leftOver.length&&(this.push({data:a.utf8decode(this.leftOver),meta:{}}),this.leftOver=null)},a.Utf8DecodeWorker=m,s.inherits(_,f),_.prototype.processChunk=function(v){this.push({data:a.utf8encode(v.data),meta:v.meta})},a.Utf8EncodeWorker=_},{"./nodejsUtils":14,"./stream/GenericWorker":28,"./support":30,"./utils":32}],32:[function(n,o,a){"use strict";var s=n("./support"),c=n("./base64"),l=n("./nodejsUtils"),f=n("set-immediate-shim"),h=n("./external");function p(b){return b}function m(b,S){for(var M=0;M<b.length;++M)S[M]=255&b.charCodeAt(M);return S}a.newBlob=function(b,S){a.checkSupport("blob");try{return new Blob([b],{type:S})}catch{try{var M=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);return M.append(b),M.getBlob(S)}catch{throw new Error("Bug : can't construct the Blob.")}}};var _={stringifyByChunk:function(b,S,M){var C=[],L=0,D=b.length;if(D<=M)return String.fromCharCode.apply(null,b);for(;L<D;)S==="array"||S==="nodebuffer"?C.push(String.fromCharCode.apply(null,b.slice(L,Math.min(L+M,D)))):C.push(String.fromCharCode.apply(null,b.subarray(L,Math.min(L+M,D)))),L+=M;return C.join("")},stringifyByChar:function(b){for(var S="",M=0;M<b.length;M++)S+=String.fromCharCode(b[M]);return S},applyCanBeUsed:{uint8array:(function(){try{return s.uint8array&&String.fromCharCode.apply(null,new Uint8Array(1)).length===1}catch{return!1}})(),nodebuffer:(function(){try{return s.nodebuffer&&String.fromCharCode.apply(null,l.allocBuffer(1)).length===1}catch{return!1}})()}};function v(b){var S=65536,M=a.getTypeOf(b),C=!0;if(M==="uint8array"?C=_.applyCanBeUsed.uint8array:M==="nodebuffer"&&(C=_.applyCanBeUsed.nodebuffer),C)for(;1<S;)try{return _.stringifyByChunk(b,M,S)}catch{S=Math.floor(S/2)}return _.stringifyByChar(b)}function y(b,S){for(var M=0;M<b.length;M++)S[M]=b[M];return S}a.applyFromCharCode=v;var w={};w.string={string:p,array:function(b){return m(b,new Array(b.length))},arraybuffer:function(b){return w.string.uint8array(b).buffer},uint8array:function(b){return m(b,new Uint8Array(b.length))},nodebuffer:function(b){return m(b,l.allocBuffer(b.length))}},w.array={string:v,array:p,arraybuffer:function(b){return new Uint8Array(b).buffer},uint8array:function(b){return new Uint8Array(b)},nodebuffer:function(b){return l.newBufferFrom(b)}},w.arraybuffer={string:function(b){return v(new Uint8Array(b))},array:function(b){return y(new Uint8Array(b),new Array(b.byteLength))},arraybuffer:p,uint8array:function(b){return new Uint8Array(b)},nodebuffer:function(b){return l.newBufferFrom(new Uint8Array(b))}},w.uint8array={string:v,array:function(b){return y(b,new Array(b.length))},arraybuffer:function(b){return b.buffer},uint8array:p,nodebuffer:function(b){return l.newBufferFrom(b)}},w.nodebuffer={string:v,array:function(b){return y(b,new Array(b.length))},arraybuffer:function(b){return w.nodebuffer.uint8array(b).buffer},uint8array:function(b){return y(b,new Uint8Array(b.length))},nodebuffer:p},a.transformTo=function(b,S){return S=S||"",b?(a.checkSupport(b),w[a.getTypeOf(S)][b](S)):S},a.resolve=function(b){for(var S=b.split("/"),M=[],C=0;C<S.length;C++){var L=S[C];L==="."||L===""&&C!==0&&C!==S.length-1||(L===".."?M.pop():M.push(L))}return M.join("/")},a.getTypeOf=function(b){return typeof b=="string"?"string":Object.prototype.toString.call(b)==="[object Array]"?"array":s.nodebuffer&&l.isBuffer(b)?"nodebuffer":s.uint8array&&b instanceof Uint8Array?"uint8array":s.arraybuffer&&b instanceof ArrayBuffer?"arraybuffer":void 0},a.checkSupport=function(b){if(!s[b.toLowerCase()])throw new Error(b+" is not supported by this platform")},a.MAX_VALUE_16BITS=65535,a.MAX_VALUE_32BITS=-1,a.pretty=function(b){var S,M,C="";for(M=0;M<(b||"").length;M++)C+="\\x"+((S=b.charCodeAt(M))<16?"0":"")+S.toString(16).toUpperCase();return C},a.delay=function(b,S,M){f(function(){b.apply(M||null,S||[])})},a.inherits=function(b,S){function M(){}M.prototype=S.prototype,b.prototype=new M},a.extend=function(){var b,S,M={};for(b=0;b<arguments.length;b++)for(S in arguments[b])arguments[b].hasOwnProperty(S)&&M[S]===void 0&&(M[S]=arguments[b][S]);return M},a.prepareContent=function(b,S,M,C,L){return h.Promise.resolve(S).then(function(D){return s.blob&&(D instanceof Blob||["[object File]","[object Blob]"].indexOf(Object.prototype.toString.call(D))!==-1)&&typeof FileReader<"u"?new h.Promise(function(Y,U){var oe=new FileReader;oe.onload=function(H){Y(H.target.result)},oe.onerror=function(H){U(H.target.error)},oe.readAsArrayBuffer(D)}):D}).then(function(D){var Y=a.getTypeOf(D);return Y?(Y==="arraybuffer"?D=a.transformTo("uint8array",D):Y==="string"&&(L?D=c.decode(D):M&&C!==!0&&(D=(function(U){return m(U,s.uint8array?new Uint8Array(U.length):new Array(U.length))})(D))),D):h.Promise.reject(new Error("Can't read the data of '"+b+"'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"))})}},{"./base64":1,"./external":6,"./nodejsUtils":14,"./support":30,"set-immediate-shim":54}],33:[function(n,o,a){"use strict";var s=n("./reader/readerFor"),c=n("./utils"),l=n("./signature"),f=n("./zipEntry"),h=(n("./utf8"),n("./support"));function p(m){this.files=[],this.loadOptions=m}p.prototype={checkSignature:function(m){if(!this.reader.readAndCheckSignature(m)){this.reader.index-=4;var _=this.reader.readString(4);throw new Error("Corrupted zip or bug: unexpected signature ("+c.pretty(_)+", expected "+c.pretty(m)+")")}},isSignature:function(m,_){var v=this.reader.index;this.reader.setIndex(m);var y=this.reader.readString(4)===_;return this.reader.setIndex(v),y},readBlockEndOfCentral:function(){this.diskNumber=this.reader.readInt(2),this.diskWithCentralDirStart=this.reader.readInt(2),this.centralDirRecordsOnThisDisk=this.reader.readInt(2),this.centralDirRecords=this.reader.readInt(2),this.centralDirSize=this.reader.readInt(4),this.centralDirOffset=this.reader.readInt(4),this.zipCommentLength=this.reader.readInt(2);var m=this.reader.readData(this.zipCommentLength),_=h.uint8array?"uint8array":"array",v=c.transformTo(_,m);this.zipComment=this.loadOptions.decodeFileName(v)},readBlockZip64EndOfCentral:function(){this.zip64EndOfCentralSize=this.reader.readInt(8),this.reader.skip(4),this.diskNumber=this.reader.readInt(4),this.diskWithCentralDirStart=this.reader.readInt(4),this.centralDirRecordsOnThisDisk=this.reader.readInt(8),this.centralDirRecords=this.reader.readInt(8),this.centralDirSize=this.reader.readInt(8),this.centralDirOffset=this.reader.readInt(8),this.zip64ExtensibleData={};for(var m,_,v,y=this.zip64EndOfCentralSize-44;0<y;)m=this.reader.readInt(2),_=this.reader.readInt(4),v=this.reader.readData(_),this.zip64ExtensibleData[m]={id:m,length:_,value:v}},readBlockZip64EndOfCentralLocator:function(){if(this.diskWithZip64CentralDirStart=this.reader.readInt(4),this.relativeOffsetEndOfZip64CentralDir=this.reader.readInt(8),this.disksCount=this.reader.readInt(4),1<this.disksCount)throw new Error("Multi-volumes zip are not supported")},readLocalFiles:function(){for(var m=0,_;m<this.files.length;m++)_=this.files[m],this.reader.setIndex(_.localHeaderOffset),this.checkSignature(l.LOCAL_FILE_HEADER),_.readLocalPart(this.reader),_.handleUTF8(),_.processAttributes()},readCentralDir:function(){var m;for(this.reader.setIndex(this.centralDirOffset);this.reader.readAndCheckSignature(l.CENTRAL_FILE_HEADER);)(m=new f({zip64:this.zip64},this.loadOptions)).readCentralPart(this.reader),this.files.push(m);if(this.centralDirRecords!==this.files.length&&this.centralDirRecords!==0&&this.files.length===0)throw new Error("Corrupted zip or bug: expected "+this.centralDirRecords+" records in central dir, got "+this.files.length)},readEndOfCentral:function(){var m=this.reader.lastIndexOfSignature(l.CENTRAL_DIRECTORY_END);if(m<0)throw this.isSignature(0,l.LOCAL_FILE_HEADER)?new Error("Corrupted zip: can't find end of central directory"):new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");this.reader.setIndex(m);var _=m;if(this.checkSignature(l.CENTRAL_DIRECTORY_END),this.readBlockEndOfCentral(),this.diskNumber===c.MAX_VALUE_16BITS||this.diskWithCentralDirStart===c.MAX_VALUE_16BITS||this.centralDirRecordsOnThisDisk===c.MAX_VALUE_16BITS||this.centralDirRecords===c.MAX_VALUE_16BITS||this.centralDirSize===c.MAX_VALUE_32BITS||this.centralDirOffset===c.MAX_VALUE_32BITS){if(this.zip64=!0,(m=this.reader.lastIndexOfSignature(l.ZIP64_CENTRAL_DIRECTORY_LOCATOR))<0)throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");if(this.reader.setIndex(m),this.checkSignature(l.ZIP64_CENTRAL_DIRECTORY_LOCATOR),this.readBlockZip64EndOfCentralLocator(),!this.isSignature(this.relativeOffsetEndOfZip64CentralDir,l.ZIP64_CENTRAL_DIRECTORY_END)&&(this.relativeOffsetEndOfZip64CentralDir=this.reader.lastIndexOfSignature(l.ZIP64_CENTRAL_DIRECTORY_END),this.relativeOffsetEndOfZip64CentralDir<0))throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),this.checkSignature(l.ZIP64_CENTRAL_DIRECTORY_END),this.readBlockZip64EndOfCentral()}var v=this.centralDirOffset+this.centralDirSize;this.zip64&&(v+=20,v+=12+this.zip64EndOfCentralSize);var y=_-v;if(0<y)this.isSignature(_,l.CENTRAL_FILE_HEADER)||(this.reader.zero=y);else if(y<0)throw new Error("Corrupted zip: missing "+Math.abs(y)+" bytes.")},prepareReader:function(m){this.reader=s(m)},load:function(m){this.prepareReader(m),this.readEndOfCentral(),this.readCentralDir(),this.readLocalFiles()}},o.exports=p},{"./reader/readerFor":22,"./signature":23,"./support":30,"./utf8":31,"./utils":32,"./zipEntry":34}],34:[function(n,o,a){"use strict";var s=n("./reader/readerFor"),c=n("./utils"),l=n("./compressedObject"),f=n("./crc32"),h=n("./utf8"),p=n("./compressions"),m=n("./support");function _(v,y){this.options=v,this.loadOptions=y}_.prototype={isEncrypted:function(){return(1&this.bitFlag)==1},useUTF8:function(){return(2048&this.bitFlag)==2048},readLocalPart:function(v){var y,w;if(v.skip(22),this.fileNameLength=v.readInt(2),w=v.readInt(2),this.fileName=v.readData(this.fileNameLength),v.skip(w),this.compressedSize===-1||this.uncompressedSize===-1)throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");if((y=(function(b){for(var S in p)if(p.hasOwnProperty(S)&&p[S].magic===b)return p[S];return null})(this.compressionMethod))===null)throw new Error("Corrupted zip : compression "+c.pretty(this.compressionMethod)+" unknown (inner file : "+c.transformTo("string",this.fileName)+")");this.decompressed=new l(this.compressedSize,this.uncompressedSize,this.crc32,y,v.readData(this.compressedSize))},readCentralPart:function(v){this.versionMadeBy=v.readInt(2),v.skip(2),this.bitFlag=v.readInt(2),this.compressionMethod=v.readString(2),this.date=v.readDate(),this.crc32=v.readInt(4),this.compressedSize=v.readInt(4),this.uncompressedSize=v.readInt(4);var y=v.readInt(2);if(this.extraFieldsLength=v.readInt(2),this.fileCommentLength=v.readInt(2),this.diskNumberStart=v.readInt(2),this.internalFileAttributes=v.readInt(2),this.externalFileAttributes=v.readInt(4),this.localHeaderOffset=v.readInt(4),this.isEncrypted())throw new Error("Encrypted zip are not supported");v.skip(y),this.readExtraFields(v),this.parseZIP64ExtraField(v),this.fileComment=v.readData(this.fileCommentLength)},processAttributes:function(){this.unixPermissions=null,this.dosPermissions=null;var v=this.versionMadeBy>>8;this.dir=!!(16&this.externalFileAttributes),v==0&&(this.dosPermissions=63&this.externalFileAttributes),v==3&&(this.unixPermissions=this.externalFileAttributes>>16&65535),this.dir||this.fileNameStr.slice(-1)!=="/"||(this.dir=!0)},parseZIP64ExtraField:function(v){if(this.extraFields[1]){var y=s(this.extraFields[1].value);this.uncompressedSize===c.MAX_VALUE_32BITS&&(this.uncompressedSize=y.readInt(8)),this.compressedSize===c.MAX_VALUE_32BITS&&(this.compressedSize=y.readInt(8)),this.localHeaderOffset===c.MAX_VALUE_32BITS&&(this.localHeaderOffset=y.readInt(8)),this.diskNumberStart===c.MAX_VALUE_32BITS&&(this.diskNumberStart=y.readInt(4))}},readExtraFields:function(v){var y,w,b,S=v.index+this.extraFieldsLength;for(this.extraFields||(this.extraFields={});v.index+4<S;)y=v.readInt(2),w=v.readInt(2),b=v.readData(w),this.extraFields[y]={id:y,length:w,value:b};v.setIndex(S)},handleUTF8:function(){var v=m.uint8array?"uint8array":"array";if(this.useUTF8())this.fileNameStr=h.utf8decode(this.fileName),this.fileCommentStr=h.utf8decode(this.fileComment);else{var y=this.findExtraFieldUnicodePath();if(y!==null)this.fileNameStr=y;else{var w=c.transformTo(v,this.fileName);this.fileNameStr=this.loadOptions.decodeFileName(w)}var b=this.findExtraFieldUnicodeComment();if(b!==null)this.fileCommentStr=b;else{var S=c.transformTo(v,this.fileComment);this.fileCommentStr=this.loadOptions.decodeFileName(S)}}},findExtraFieldUnicodePath:function(){var v=this.extraFields[28789];if(v){var y=s(v.value);return y.readInt(1)!==1||f(this.fileName)!==y.readInt(4)?null:h.utf8decode(y.readData(v.length-5))}return null},findExtraFieldUnicodeComment:function(){var v=this.extraFields[25461];if(v){var y=s(v.value);return y.readInt(1)!==1||f(this.fileComment)!==y.readInt(4)?null:h.utf8decode(y.readData(v.length-5))}return null}},o.exports=_},{"./compressedObject":2,"./compressions":3,"./crc32":4,"./reader/readerFor":22,"./support":30,"./utf8":31,"./utils":32}],35:[function(n,o,a){"use strict";function s(y,w,b){this.name=y,this.dir=b.dir,this.date=b.date,this.comment=b.comment,this.unixPermissions=b.unixPermissions,this.dosPermissions=b.dosPermissions,this._data=w,this._dataBinary=b.binary,this.options={compression:b.compression,compressionOptions:b.compressionOptions}}var c=n("./stream/StreamHelper"),l=n("./stream/DataWorker"),f=n("./utf8"),h=n("./compressedObject"),p=n("./stream/GenericWorker");s.prototype={internalStream:function(y){var w=null,b="string";try{if(!y)throw new Error("No output type specified.");var S=(b=y.toLowerCase())==="string"||b==="text";b!=="binarystring"&&b!=="text"||(b="string"),w=this._decompressWorker();var M=!this._dataBinary;M&&!S&&(w=w.pipe(new f.Utf8EncodeWorker)),!M&&S&&(w=w.pipe(new f.Utf8DecodeWorker))}catch(C){(w=new p("error")).error(C)}return new c(w,b,"")},async:function(y,w){return this.internalStream(y).accumulate(w)},nodeStream:function(y,w){return this.internalStream(y||"nodebuffer").toNodejsStream(w)},_compressWorker:function(y,w){if(this._data instanceof h&&this._data.compression.magic===y.magic)return this._data.getCompressedWorker();var b=this._decompressWorker();return this._dataBinary||(b=b.pipe(new f.Utf8EncodeWorker)),h.createWorkerFrom(b,y,w)},_decompressWorker:function(){return this._data instanceof h?this._data.getContentWorker():this._data instanceof p?this._data:new l(this._data)}};for(var m=["asText","asBinary","asNodeBuffer","asUint8Array","asArrayBuffer"],_=function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},v=0;v<m.length;v++)s.prototype[m[v]]=_;o.exports=s},{"./compressedObject":2,"./stream/DataWorker":27,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31}],36:[function(n,o,a){(function(s){"use strict";var c,l,f=s.MutationObserver||s.WebKitMutationObserver;if(f){var h=0,p=new f(y),m=s.document.createTextNode("");p.observe(m,{characterData:!0}),c=function(){m.data=h=++h%2}}else if(s.setImmediate||s.MessageChannel===void 0)c="document"in s&&"onreadystatechange"in s.document.createElement("script")?function(){var w=s.document.createElement("script");w.onreadystatechange=function(){y(),w.onreadystatechange=null,w.parentNode.removeChild(w),w=null},s.document.documentElement.appendChild(w)}:function(){setTimeout(y,0)};else{var _=new s.MessageChannel;_.port1.onmessage=y,c=function(){_.port2.postMessage(0)}}var v=[];function y(){var w,b;l=!0;for(var S=v.length;S;){for(b=v,v=[],w=-1;++w<S;)b[w]();S=v.length}l=!1}o.exports=function(w){v.push(w)!==1||l||c()}}).call(this,typeof global<"u"?global:typeof self<"u"?self:typeof window<"u"?window:{})},{}],37:[function(n,o,a){"use strict";var s=n("immediate");function c(){}var l={},f=["REJECTED"],h=["FULFILLED"],p=["PENDING"];function m(S){if(typeof S!="function")throw new TypeError("resolver must be a function");this.state=p,this.queue=[],this.outcome=void 0,S!==c&&w(this,S)}function _(S,M,C){this.promise=S,typeof M=="function"&&(this.onFulfilled=M,this.callFulfilled=this.otherCallFulfilled),typeof C=="function"&&(this.onRejected=C,this.callRejected=this.otherCallRejected)}function v(S,M,C){s(function(){var L;try{L=M(C)}catch(D){return l.reject(S,D)}L===S?l.reject(S,new TypeError("Cannot resolve promise with itself")):l.resolve(S,L)})}function y(S){var M=S&&S.then;if(S&&(typeof S=="object"||typeof S=="function")&&typeof M=="function")return function(){M.apply(S,arguments)}}function w(S,M){var C=!1;function L(U){C||(C=!0,l.reject(S,U))}function D(U){C||(C=!0,l.resolve(S,U))}var Y=b(function(){M(D,L)});Y.status==="error"&&L(Y.value)}function b(S,M){var C={};try{C.value=S(M),C.status="success"}catch(L){C.status="error",C.value=L}return C}(o.exports=m).prototype.finally=function(S){if(typeof S!="function")return this;var M=this.constructor;return this.then(function(C){return M.resolve(S()).then(function(){return C})},function(C){return M.resolve(S()).then(function(){throw C})})},m.prototype.catch=function(S){return this.then(null,S)},m.prototype.then=function(S,M){if(typeof S!="function"&&this.state===h||typeof M!="function"&&this.state===f)return this;var C=new this.constructor(c);return this.state!==p?v(C,this.state===h?S:M,this.outcome):this.queue.push(new _(C,S,M)),C},_.prototype.callFulfilled=function(S){l.resolve(this.promise,S)},_.prototype.otherCallFulfilled=function(S){v(this.promise,this.onFulfilled,S)},_.prototype.callRejected=function(S){l.reject(this.promise,S)},_.prototype.otherCallRejected=function(S){v(this.promise,this.onRejected,S)},l.resolve=function(S,M){var C=b(y,M);if(C.status==="error")return l.reject(S,C.value);var L=C.value;if(L)w(S,L);else{S.state=h,S.outcome=M;for(var D=-1,Y=S.queue.length;++D<Y;)S.queue[D].callFulfilled(M)}return S},l.reject=function(S,M){S.state=f,S.outcome=M;for(var C=-1,L=S.queue.length;++C<L;)S.queue[C].callRejected(M);return S},m.resolve=function(S){return S instanceof this?S:l.resolve(new this(c),S)},m.reject=function(S){var M=new this(c);return l.reject(M,S)},m.all=function(S){var M=this;if(Object.prototype.toString.call(S)!=="[object Array]")return this.reject(new TypeError("must be an array"));var C=S.length,L=!1;if(!C)return this.resolve([]);for(var D=new Array(C),Y=0,U=-1,oe=new this(c);++U<C;)H(S[U],U);return oe;function H(me,ve){M.resolve(me).then(function(P){D[ve]=P,++Y!==C||L||(L=!0,l.resolve(oe,D))},function(P){L||(L=!0,l.reject(oe,P))})}},m.race=function(S){var M=this;if(Object.prototype.toString.call(S)!=="[object Array]")return this.reject(new TypeError("must be an array"));var C=S.length,L=!1;if(!C)return this.resolve([]);for(var D=-1,Y=new this(c);++D<C;)U=S[D],M.resolve(U).then(function(oe){L||(L=!0,l.resolve(Y,oe))},function(oe){L||(L=!0,l.reject(Y,oe))});var U;return Y}},{immediate:36}],38:[function(n,o,a){"use strict";var s={};(0,n("./lib/utils/common").assign)(s,n("./lib/deflate"),n("./lib/inflate"),n("./lib/zlib/constants")),o.exports=s},{"./lib/deflate":39,"./lib/inflate":40,"./lib/utils/common":41,"./lib/zlib/constants":44}],39:[function(n,o,a){"use strict";var s=n("./zlib/deflate"),c=n("./utils/common"),l=n("./utils/strings"),f=n("./zlib/messages"),h=n("./zlib/zstream"),p=Object.prototype.toString,m=0,_=-1,v=0,y=8;function w(S){if(!(this instanceof w))return new w(S);this.options=c.assign({level:_,method:y,chunkSize:16384,windowBits:15,memLevel:8,strategy:v,to:""},S||{});var M=this.options;M.raw&&0<M.windowBits?M.windowBits=-M.windowBits:M.gzip&&0<M.windowBits&&M.windowBits<16&&(M.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new h,this.strm.avail_out=0;var C=s.deflateInit2(this.strm,M.level,M.method,M.windowBits,M.memLevel,M.strategy);if(C!==m)throw new Error(f[C]);if(M.header&&s.deflateSetHeader(this.strm,M.header),M.dictionary){var L=typeof M.dictionary=="string"?l.string2buf(M.dictionary):p.call(M.dictionary)==="[object ArrayBuffer]"?new Uint8Array(M.dictionary):M.dictionary;if((C=s.deflateSetDictionary(this.strm,L))!==m)throw new Error(f[C]);this._dict_set=!0}}function b(S,M){var C=new w(M);if(C.push(S,!0),C.err)throw C.msg||f[C.err];return C.result}w.prototype.push=function(S,M){var C,L,D=this.strm,Y=this.options.chunkSize;if(this.ended)return!1;L=M===~~M?M:M===!0?4:0,typeof S=="string"?D.input=l.string2buf(S):p.call(S)==="[object ArrayBuffer]"?D.input=new Uint8Array(S):D.input=S,D.next_in=0,D.avail_in=D.input.length;do{if(D.avail_out===0&&(D.output=new c.Buf8(Y),D.next_out=0,D.avail_out=Y),(C=s.deflate(D,L))!==1&&C!==m)return this.onEnd(C),!(this.ended=!0);D.avail_out!==0&&(D.avail_in!==0||L!==4&&L!==2)||(this.options.to==="string"?this.onData(l.buf2binstring(c.shrinkBuf(D.output,D.next_out))):this.onData(c.shrinkBuf(D.output,D.next_out)))}while((0<D.avail_in||D.avail_out===0)&&C!==1);return L===4?(C=s.deflateEnd(this.strm),this.onEnd(C),this.ended=!0,C===m):L!==2||(this.onEnd(m),!(D.avail_out=0))},w.prototype.onData=function(S){this.chunks.push(S)},w.prototype.onEnd=function(S){S===m&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=c.flattenChunks(this.chunks)),this.chunks=[],this.err=S,this.msg=this.strm.msg},a.Deflate=w,a.deflate=b,a.deflateRaw=function(S,M){return(M=M||{}).raw=!0,b(S,M)},a.gzip=function(S,M){return(M=M||{}).gzip=!0,b(S,M)}},{"./utils/common":41,"./utils/strings":42,"./zlib/deflate":46,"./zlib/messages":51,"./zlib/zstream":53}],40:[function(n,o,a){"use strict";var s=n("./zlib/inflate"),c=n("./utils/common"),l=n("./utils/strings"),f=n("./zlib/constants"),h=n("./zlib/messages"),p=n("./zlib/zstream"),m=n("./zlib/gzheader"),_=Object.prototype.toString;function v(w){if(!(this instanceof v))return new v(w);this.options=c.assign({chunkSize:16384,windowBits:0,to:""},w||{});var b=this.options;b.raw&&0<=b.windowBits&&b.windowBits<16&&(b.windowBits=-b.windowBits,b.windowBits===0&&(b.windowBits=-15)),!(0<=b.windowBits&&b.windowBits<16)||w&&w.windowBits||(b.windowBits+=32),15<b.windowBits&&b.windowBits<48&&(15&b.windowBits)==0&&(b.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new p,this.strm.avail_out=0;var S=s.inflateInit2(this.strm,b.windowBits);if(S!==f.Z_OK)throw new Error(h[S]);this.header=new m,s.inflateGetHeader(this.strm,this.header)}function y(w,b){var S=new v(b);if(S.push(w,!0),S.err)throw S.msg||h[S.err];return S.result}v.prototype.push=function(w,b){var S,M,C,L,D,Y,U=this.strm,oe=this.options.chunkSize,H=this.options.dictionary,me=!1;if(this.ended)return!1;M=b===~~b?b:b===!0?f.Z_FINISH:f.Z_NO_FLUSH,typeof w=="string"?U.input=l.binstring2buf(w):_.call(w)==="[object ArrayBuffer]"?U.input=new Uint8Array(w):U.input=w,U.next_in=0,U.avail_in=U.input.length;do{if(U.avail_out===0&&(U.output=new c.Buf8(oe),U.next_out=0,U.avail_out=oe),(S=s.inflate(U,f.Z_NO_FLUSH))===f.Z_NEED_DICT&&H&&(Y=typeof H=="string"?l.string2buf(H):_.call(H)==="[object ArrayBuffer]"?new Uint8Array(H):H,S=s.inflateSetDictionary(this.strm,Y)),S===f.Z_BUF_ERROR&&me===!0&&(S=f.Z_OK,me=!1),S!==f.Z_STREAM_END&&S!==f.Z_OK)return this.onEnd(S),!(this.ended=!0);U.next_out&&(U.avail_out!==0&&S!==f.Z_STREAM_END&&(U.avail_in!==0||M!==f.Z_FINISH&&M!==f.Z_SYNC_FLUSH)||(this.options.to==="string"?(C=l.utf8border(U.output,U.next_out),L=U.next_out-C,D=l.buf2string(U.output,C),U.next_out=L,U.avail_out=oe-L,L&&c.arraySet(U.output,U.output,C,L,0),this.onData(D)):this.onData(c.shrinkBuf(U.output,U.next_out)))),U.avail_in===0&&U.avail_out===0&&(me=!0)}while((0<U.avail_in||U.avail_out===0)&&S!==f.Z_STREAM_END);return S===f.Z_STREAM_END&&(M=f.Z_FINISH),M===f.Z_FINISH?(S=s.inflateEnd(this.strm),this.onEnd(S),this.ended=!0,S===f.Z_OK):M!==f.Z_SYNC_FLUSH||(this.onEnd(f.Z_OK),!(U.avail_out=0))},v.prototype.onData=function(w){this.chunks.push(w)},v.prototype.onEnd=function(w){w===f.Z_OK&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=c.flattenChunks(this.chunks)),this.chunks=[],this.err=w,this.msg=this.strm.msg},a.Inflate=v,a.inflate=y,a.inflateRaw=function(w,b){return(b=b||{}).raw=!0,y(w,b)},a.ungzip=y},{"./utils/common":41,"./utils/strings":42,"./zlib/constants":44,"./zlib/gzheader":47,"./zlib/inflate":49,"./zlib/messages":51,"./zlib/zstream":53}],41:[function(n,o,a){"use strict";var s=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Int32Array<"u";a.assign=function(f){for(var h=Array.prototype.slice.call(arguments,1);h.length;){var p=h.shift();if(p){if(typeof p!="object")throw new TypeError(p+"must be non-object");for(var m in p)p.hasOwnProperty(m)&&(f[m]=p[m])}}return f},a.shrinkBuf=function(f,h){return f.length===h?f:f.subarray?f.subarray(0,h):(f.length=h,f)};var c={arraySet:function(f,h,p,m,_){if(h.subarray&&f.subarray)f.set(h.subarray(p,p+m),_);else for(var v=0;v<m;v++)f[_+v]=h[p+v]},flattenChunks:function(f){for(var h=m=0,p=f.length,m,_,v,y;h<p;h++)m+=f[h].length;for(y=new Uint8Array(m),h=_=0,p=f.length;h<p;h++)v=f[h],y.set(v,_),_+=v.length;return y}},l={arraySet:function(f,h,p,m,_){for(var v=0;v<m;v++)f[_+v]=h[p+v]},flattenChunks:function(f){return[].concat.apply([],f)}};a.setTyped=function(f){f?(a.Buf8=Uint8Array,a.Buf16=Uint16Array,a.Buf32=Int32Array,a.assign(a,c)):(a.Buf8=Array,a.Buf16=Array,a.Buf32=Array,a.assign(a,l))},a.setTyped(s)},{}],42:[function(n,o,a){"use strict";var s=n("./common"),c=!0,l=!0;try{String.fromCharCode.apply(null,[0])}catch{c=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch{l=!1}for(var f=new s.Buf8(256),h=0;h<256;h++)f[h]=252<=h?6:248<=h?5:240<=h?4:224<=h?3:192<=h?2:1;function p(m,_){if(_<65537&&(m.subarray&&l||!m.subarray&&c))return String.fromCharCode.apply(null,s.shrinkBuf(m,_));for(var v="",y=0;y<_;y++)v+=String.fromCharCode(m[y]);return v}f[254]=f[254]=1,a.string2buf=function(m){var _,v,y,w,b,S=m.length,M=0;for(w=0;w<S;w++)(64512&(v=m.charCodeAt(w)))==55296&&w+1<S&&(64512&(y=m.charCodeAt(w+1)))==56320&&(v=65536+(v-55296<<10)+(y-56320),w++),M+=v<128?1:v<2048?2:v<65536?3:4;for(_=new s.Buf8(M),w=b=0;b<M;w++)(64512&(v=m.charCodeAt(w)))==55296&&w+1<S&&(64512&(y=m.charCodeAt(w+1)))==56320&&(v=65536+(v-55296<<10)+(y-56320),w++),v<128?_[b++]=v:(v<2048?_[b++]=192|v>>>6:(v<65536?_[b++]=224|v>>>12:(_[b++]=240|v>>>18,_[b++]=128|v>>>12&63),_[b++]=128|v>>>6&63),_[b++]=128|63&v);return _},a.buf2binstring=function(m){return p(m,m.length)},a.binstring2buf=function(m){for(var _=new s.Buf8(m.length),v=0,y=_.length;v<y;v++)_[v]=m.charCodeAt(v);return _},a.buf2string=function(m,_){var v,y,w,b,S=_||m.length,M=new Array(2*S);for(v=y=0;v<S;)if((w=m[v++])<128)M[y++]=w;else if(4<(b=f[w]))M[y++]=65533,v+=b-1;else{for(w&=b===2?31:b===3?15:7;1<b&&v<S;)w=w<<6|63&m[v++],b--;1<b?M[y++]=65533:w<65536?M[y++]=w:(w-=65536,M[y++]=55296|w>>10&1023,M[y++]=56320|1023&w)}return p(M,y)},a.utf8border=function(m,_){var v;for((_=_||m.length)>m.length&&(_=m.length),v=_-1;0<=v&&(192&m[v])==128;)v--;return v<0||v===0?_:v+f[m[v]]>_?v:_}},{"./common":41}],43:[function(n,o,a){"use strict";o.exports=function(s,c,l,f){for(var h=65535&s|0,p=s>>>16&65535|0,m=0;l!==0;){for(l-=m=2e3<l?2e3:l;p=p+(h=h+c[f++]|0)|0,--m;);h%=65521,p%=65521}return h|p<<16|0}},{}],44:[function(n,o,a){"use strict";o.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],45:[function(n,o,a){"use strict";var s=(function(){for(var c,l=[],f=0;f<256;f++){c=f;for(var h=0;h<8;h++)c=1&c?3988292384^c>>>1:c>>>1;l[f]=c}return l})();o.exports=function(c,l,f,h){var p=s,m=h+f;c^=-1;for(var _=h;_<m;_++)c=c>>>8^p[255&(c^l[_])];return-1^c}},{}],46:[function(n,o,a){"use strict";var s,c=n("../utils/common"),l=n("./trees"),f=n("./adler32"),h=n("./crc32"),p=n("./messages"),m=0,_=4,v=0,y=-2,w=-1,b=4,S=2,M=8,C=9,L=286,D=30,Y=19,U=2*L+1,oe=15,H=3,me=258,ve=me+H+1,P=42,J=113,A=1,ee=2,Ce=3,ue=4;function ze(k,re){return k.msg=p[re],re}function se(k){return(k<<1)-(4<k?9:0)}function Ae(k){for(var re=k.length;0<=--re;)k[re]=0}function q(k){var re=k.state,V=re.pending;V>k.avail_out&&(V=k.avail_out),V!==0&&(c.arraySet(k.output,re.pending_buf,re.pending_out,V,k.next_out),k.next_out+=V,re.pending_out+=V,k.total_out+=V,k.avail_out-=V,re.pending-=V,re.pending===0&&(re.pending_out=0))}function W(k,re){l._tr_flush_block(k,0<=k.block_start?k.block_start:-1,k.strstart-k.block_start,re),k.block_start=k.strstart,q(k.strm)}function ke(k,re){k.pending_buf[k.pending++]=re}function ge(k,re){k.pending_buf[k.pending++]=re>>>8&255,k.pending_buf[k.pending++]=255&re}function pe(k,re){var V,T,O=k.max_chain_length,N=k.strstart,ae=k.prev_length,le=k.nice_match,G=k.strstart>k.w_size-ve?k.strstart-(k.w_size-ve):0,de=k.window,be=k.w_mask,he=k.prev,Ie=k.strstart+me,Je=de[N+ae-1],je=de[N+ae];k.prev_length>=k.good_match&&(O>>=2),le>k.lookahead&&(le=k.lookahead);do if(de[(V=re)+ae]===je&&de[V+ae-1]===Je&&de[V]===de[N]&&de[++V]===de[N+1]){N+=2,V++;do;while(de[++N]===de[++V]&&de[++N]===de[++V]&&de[++N]===de[++V]&&de[++N]===de[++V]&&de[++N]===de[++V]&&de[++N]===de[++V]&&de[++N]===de[++V]&&de[++N]===de[++V]&&N<Ie);if(T=me-(Ie-N),N=Ie-me,ae<T){if(k.match_start=re,le<=(ae=T))break;Je=de[N+ae-1],je=de[N+ae]}}while((re=he[re&be])>G&&--O!=0);return ae<=k.lookahead?ae:k.lookahead}function it(k){var re,V,T,O,N,ae,le,G,de,be,he=k.w_size;do{if(O=k.window_size-k.lookahead-k.strstart,k.strstart>=he+(he-ve)){for(c.arraySet(k.window,k.window,he,he,0),k.match_start-=he,k.strstart-=he,k.block_start-=he,re=V=k.hash_size;T=k.head[--re],k.head[re]=he<=T?T-he:0,--V;);for(re=V=he;T=k.prev[--re],k.prev[re]=he<=T?T-he:0,--V;);O+=he}if(k.strm.avail_in===0)break;if(ae=k.strm,le=k.window,G=k.strstart+k.lookahead,de=O,be=void 0,be=ae.avail_in,de<be&&(be=de),V=be===0?0:(ae.avail_in-=be,c.arraySet(le,ae.input,ae.next_in,be,G),ae.state.wrap===1?ae.adler=f(ae.adler,le,be,G):ae.state.wrap===2&&(ae.adler=h(ae.adler,le,be,G)),ae.next_in+=be,ae.total_in+=be,be),k.lookahead+=V,k.lookahead+k.insert>=H)for(N=k.strstart-k.insert,k.ins_h=k.window[N],k.ins_h=(k.ins_h<<k.hash_shift^k.window[N+1])&k.hash_mask;k.insert&&(k.ins_h=(k.ins_h<<k.hash_shift^k.window[N+H-1])&k.hash_mask,k.prev[N&k.w_mask]=k.head[k.ins_h],k.head[k.ins_h]=N,N++,k.insert--,!(k.lookahead+k.insert<H)););}while(k.lookahead<ve&&k.strm.avail_in!==0)}function ft(k,re){for(var V,T;;){if(k.lookahead<ve){if(it(k),k.lookahead<ve&&re===m)return A;if(k.lookahead===0)break}if(V=0,k.lookahead>=H&&(k.ins_h=(k.ins_h<<k.hash_shift^k.window[k.strstart+H-1])&k.hash_mask,V=k.prev[k.strstart&k.w_mask]=k.head[k.ins_h],k.head[k.ins_h]=k.strstart),V!==0&&k.strstart-V<=k.w_size-ve&&(k.match_length=pe(k,V)),k.match_length>=H)if(T=l._tr_tally(k,k.strstart-k.match_start,k.match_length-H),k.lookahead-=k.match_length,k.match_length<=k.max_lazy_match&&k.lookahead>=H){for(k.match_length--;k.strstart++,k.ins_h=(k.ins_h<<k.hash_shift^k.window[k.strstart+H-1])&k.hash_mask,V=k.prev[k.strstart&k.w_mask]=k.head[k.ins_h],k.head[k.ins_h]=k.strstart,--k.match_length!=0;);k.strstart++}else k.strstart+=k.match_length,k.match_length=0,k.ins_h=k.window[k.strstart],k.ins_h=(k.ins_h<<k.hash_shift^k.window[k.strstart+1])&k.hash_mask;else T=l._tr_tally(k,0,k.window[k.strstart]),k.lookahead--,k.strstart++;if(T&&(W(k,!1),k.strm.avail_out===0))return A}return k.insert=k.strstart<H-1?k.strstart:H-1,re===_?(W(k,!0),k.strm.avail_out===0?Ce:ue):k.last_lit&&(W(k,!1),k.strm.avail_out===0)?A:ee}function We(k,re){for(var V,T,O;;){if(k.lookahead<ve){if(it(k),k.lookahead<ve&&re===m)return A;if(k.lookahead===0)break}if(V=0,k.lookahead>=H&&(k.ins_h=(k.ins_h<<k.hash_shift^k.window[k.strstart+H-1])&k.hash_mask,V=k.prev[k.strstart&k.w_mask]=k.head[k.ins_h],k.head[k.ins_h]=k.strstart),k.prev_length=k.match_length,k.prev_match=k.match_start,k.match_length=H-1,V!==0&&k.prev_length<k.max_lazy_match&&k.strstart-V<=k.w_size-ve&&(k.match_length=pe(k,V),k.match_length<=5&&(k.strategy===1||k.match_length===H&&4096<k.strstart-k.match_start)&&(k.match_length=H-1)),k.prev_length>=H&&k.match_length<=k.prev_length){for(O=k.strstart+k.lookahead-H,T=l._tr_tally(k,k.strstart-1-k.prev_match,k.prev_length-H),k.lookahead-=k.prev_length-1,k.prev_length-=2;++k.strstart<=O&&(k.ins_h=(k.ins_h<<k.hash_shift^k.window[k.strstart+H-1])&k.hash_mask,V=k.prev[k.strstart&k.w_mask]=k.head[k.ins_h],k.head[k.ins_h]=k.strstart),--k.prev_length!=0;);if(k.match_available=0,k.match_length=H-1,k.strstart++,T&&(W(k,!1),k.strm.avail_out===0))return A}else if(k.match_available){if((T=l._tr_tally(k,0,k.window[k.strstart-1]))&&W(k,!1),k.strstart++,k.lookahead--,k.strm.avail_out===0)return A}else k.match_available=1,k.strstart++,k.lookahead--}return k.match_available&&(T=l._tr_tally(k,0,k.window[k.strstart-1]),k.match_available=0),k.insert=k.strstart<H-1?k.strstart:H-1,re===_?(W(k,!0),k.strm.avail_out===0?Ce:ue):k.last_lit&&(W(k,!1),k.strm.avail_out===0)?A:ee}function Ze(k,re,V,T,O){this.good_length=k,this.max_lazy=re,this.nice_length=V,this.max_chain=T,this.func=O}function vt(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=M,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new c.Buf16(2*U),this.dyn_dtree=new c.Buf16(2*(2*D+1)),this.bl_tree=new c.Buf16(2*(2*Y+1)),Ae(this.dyn_ltree),Ae(this.dyn_dtree),Ae(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new c.Buf16(oe+1),this.heap=new c.Buf16(2*L+1),Ae(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new c.Buf16(2*L+1),Ae(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function at(k){var re;return k&&k.state?(k.total_in=k.total_out=0,k.data_type=S,(re=k.state).pending=0,re.pending_out=0,re.wrap<0&&(re.wrap=-re.wrap),re.status=re.wrap?P:J,k.adler=re.wrap===2?0:1,re.last_flush=m,l._tr_init(re),v):ze(k,y)}function Rr(k){var re=at(k);return re===v&&(function(V){V.window_size=2*V.w_size,Ae(V.head),V.max_lazy_match=s[V.level].max_lazy,V.good_match=s[V.level].good_length,V.nice_match=s[V.level].nice_length,V.max_chain_length=s[V.level].max_chain,V.strstart=0,V.block_start=0,V.lookahead=0,V.insert=0,V.match_length=V.prev_length=H-1,V.match_available=0,V.ins_h=0})(k.state),re}function Vt(k,re,V,T,O,N){if(!k)return y;var ae=1;if(re===w&&(re=6),T<0?(ae=0,T=-T):15<T&&(ae=2,T-=16),O<1||C<O||V!==M||T<8||15<T||re<0||9<re||N<0||b<N)return ze(k,y);T===8&&(T=9);var le=new vt;return(k.state=le).strm=k,le.wrap=ae,le.gzhead=null,le.w_bits=T,le.w_size=1<<le.w_bits,le.w_mask=le.w_size-1,le.hash_bits=O+7,le.hash_size=1<<le.hash_bits,le.hash_mask=le.hash_size-1,le.hash_shift=~~((le.hash_bits+H-1)/H),le.window=new c.Buf8(2*le.w_size),le.head=new c.Buf16(le.hash_size),le.prev=new c.Buf16(le.w_size),le.lit_bufsize=1<<O+6,le.pending_buf_size=4*le.lit_bufsize,le.pending_buf=new c.Buf8(le.pending_buf_size),le.d_buf=1*le.lit_bufsize,le.l_buf=3*le.lit_bufsize,le.level=re,le.strategy=N,le.method=V,Rr(k)}s=[new Ze(0,0,0,0,function(k,re){var V=65535;for(V>k.pending_buf_size-5&&(V=k.pending_buf_size-5);;){if(k.lookahead<=1){if(it(k),k.lookahead===0&&re===m)return A;if(k.lookahead===0)break}k.strstart+=k.lookahead,k.lookahead=0;var T=k.block_start+V;if((k.strstart===0||k.strstart>=T)&&(k.lookahead=k.strstart-T,k.strstart=T,W(k,!1),k.strm.avail_out===0)||k.strstart-k.block_start>=k.w_size-ve&&(W(k,!1),k.strm.avail_out===0))return A}return k.insert=0,re===_?(W(k,!0),k.strm.avail_out===0?Ce:ue):(k.strstart>k.block_start&&(W(k,!1),k.strm.avail_out),A)}),new Ze(4,4,8,4,ft),new Ze(4,5,16,8,ft),new Ze(4,6,32,32,ft),new Ze(4,4,16,16,We),new Ze(8,16,32,32,We),new Ze(8,16,128,128,We),new Ze(8,32,128,256,We),new Ze(32,128,258,1024,We),new Ze(32,258,258,4096,We)],a.deflateInit=function(k,re){return Vt(k,re,M,15,8,0)},a.deflateInit2=Vt,a.deflateReset=Rr,a.deflateResetKeep=at,a.deflateSetHeader=function(k,re){return k&&k.state?k.state.wrap!==2?y:(k.state.gzhead=re,v):y},a.deflate=function(k,re){var V,T,O,N;if(!k||!k.state||5<re||re<0)return k?ze(k,y):y;if(T=k.state,!k.output||!k.input&&k.avail_in!==0||T.status===666&&re!==_)return ze(k,k.avail_out===0?-5:y);if(T.strm=k,V=T.last_flush,T.last_flush=re,T.status===P)if(T.wrap===2)k.adler=0,ke(T,31),ke(T,139),ke(T,8),T.gzhead?(ke(T,(T.gzhead.text?1:0)+(T.gzhead.hcrc?2:0)+(T.gzhead.extra?4:0)+(T.gzhead.name?8:0)+(T.gzhead.comment?16:0)),ke(T,255&T.gzhead.time),ke(T,T.gzhead.time>>8&255),ke(T,T.gzhead.time>>16&255),ke(T,T.gzhead.time>>24&255),ke(T,T.level===9?2:2<=T.strategy||T.level<2?4:0),ke(T,255&T.gzhead.os),T.gzhead.extra&&T.gzhead.extra.length&&(ke(T,255&T.gzhead.extra.length),ke(T,T.gzhead.extra.length>>8&255)),T.gzhead.hcrc&&(k.adler=h(k.adler,T.pending_buf,T.pending,0)),T.gzindex=0,T.status=69):(ke(T,0),ke(T,0),ke(T,0),ke(T,0),ke(T,0),ke(T,T.level===9?2:2<=T.strategy||T.level<2?4:0),ke(T,3),T.status=J);else{var ae=M+(T.w_bits-8<<4)<<8;ae|=(2<=T.strategy||T.level<2?0:T.level<6?1:T.level===6?2:3)<<6,T.strstart!==0&&(ae|=32),ae+=31-ae%31,T.status=J,ge(T,ae),T.strstart!==0&&(ge(T,k.adler>>>16),ge(T,65535&k.adler)),k.adler=1}if(T.status===69)if(T.gzhead.extra){for(O=T.pending;T.gzindex<(65535&T.gzhead.extra.length)&&(T.pending!==T.pending_buf_size||(T.gzhead.hcrc&&T.pending>O&&(k.adler=h(k.adler,T.pending_buf,T.pending-O,O)),q(k),O=T.pending,T.pending!==T.pending_buf_size));)ke(T,255&T.gzhead.extra[T.gzindex]),T.gzindex++;T.gzhead.hcrc&&T.pending>O&&(k.adler=h(k.adler,T.pending_buf,T.pending-O,O)),T.gzindex===T.gzhead.extra.length&&(T.gzindex=0,T.status=73)}else T.status=73;if(T.status===73)if(T.gzhead.name){O=T.pending;do{if(T.pending===T.pending_buf_size&&(T.gzhead.hcrc&&T.pending>O&&(k.adler=h(k.adler,T.pending_buf,T.pending-O,O)),q(k),O=T.pending,T.pending===T.pending_buf_size)){N=1;break}N=T.gzindex<T.gzhead.name.length?255&T.gzhead.name.charCodeAt(T.gzindex++):0,ke(T,N)}while(N!==0);T.gzhead.hcrc&&T.pending>O&&(k.adler=h(k.adler,T.pending_buf,T.pending-O,O)),N===0&&(T.gzindex=0,T.status=91)}else T.status=91;if(T.status===91)if(T.gzhead.comment){O=T.pending;do{if(T.pending===T.pending_buf_size&&(T.gzhead.hcrc&&T.pending>O&&(k.adler=h(k.adler,T.pending_buf,T.pending-O,O)),q(k),O=T.pending,T.pending===T.pending_buf_size)){N=1;break}N=T.gzindex<T.gzhead.comment.length?255&T.gzhead.comment.charCodeAt(T.gzindex++):0,ke(T,N)}while(N!==0);T.gzhead.hcrc&&T.pending>O&&(k.adler=h(k.adler,T.pending_buf,T.pending-O,O)),N===0&&(T.status=103)}else T.status=103;if(T.status===103&&(T.gzhead.hcrc?(T.pending+2>T.pending_buf_size&&q(k),T.pending+2<=T.pending_buf_size&&(ke(T,255&k.adler),ke(T,k.adler>>8&255),k.adler=0,T.status=J)):T.status=J),T.pending!==0){if(q(k),k.avail_out===0)return T.last_flush=-1,v}else if(k.avail_in===0&&se(re)<=se(V)&&re!==_)return ze(k,-5);if(T.status===666&&k.avail_in!==0)return ze(k,-5);if(k.avail_in!==0||T.lookahead!==0||re!==m&&T.status!==666){var le=T.strategy===2?(function(G,de){for(var be;;){if(G.lookahead===0&&(it(G),G.lookahead===0)){if(de===m)return A;break}if(G.match_length=0,be=l._tr_tally(G,0,G.window[G.strstart]),G.lookahead--,G.strstart++,be&&(W(G,!1),G.strm.avail_out===0))return A}return G.insert=0,de===_?(W(G,!0),G.strm.avail_out===0?Ce:ue):G.last_lit&&(W(G,!1),G.strm.avail_out===0)?A:ee})(T,re):T.strategy===3?(function(G,de){for(var be,he,Ie,Je,je=G.window;;){if(G.lookahead<=me){if(it(G),G.lookahead<=me&&de===m)return A;if(G.lookahead===0)break}if(G.match_length=0,G.lookahead>=H&&0<G.strstart&&(he=je[Ie=G.strstart-1])===je[++Ie]&&he===je[++Ie]&&he===je[++Ie]){Je=G.strstart+me;do;while(he===je[++Ie]&&he===je[++Ie]&&he===je[++Ie]&&he===je[++Ie]&&he===je[++Ie]&&he===je[++Ie]&&he===je[++Ie]&&he===je[++Ie]&&Ie<Je);G.match_length=me-(Je-Ie),G.match_length>G.lookahead&&(G.match_length=G.lookahead)}if(G.match_length>=H?(be=l._tr_tally(G,1,G.match_length-H),G.lookahead-=G.match_length,G.strstart+=G.match_length,G.match_length=0):(be=l._tr_tally(G,0,G.window[G.strstart]),G.lookahead--,G.strstart++),be&&(W(G,!1),G.strm.avail_out===0))return A}return G.insert=0,de===_?(W(G,!0),G.strm.avail_out===0?Ce:ue):G.last_lit&&(W(G,!1),G.strm.avail_out===0)?A:ee})(T,re):s[T.level].func(T,re);if(le!==Ce&&le!==ue||(T.status=666),le===A||le===Ce)return k.avail_out===0&&(T.last_flush=-1),v;if(le===ee&&(re===1?l._tr_align(T):re!==5&&(l._tr_stored_block(T,0,0,!1),re===3&&(Ae(T.head),T.lookahead===0&&(T.strstart=0,T.block_start=0,T.insert=0))),q(k),k.avail_out===0))return T.last_flush=-1,v}return re!==_?v:T.wrap<=0?1:(T.wrap===2?(ke(T,255&k.adler),ke(T,k.adler>>8&255),ke(T,k.adler>>16&255),ke(T,k.adler>>24&255),ke(T,255&k.total_in),ke(T,k.total_in>>8&255),ke(T,k.total_in>>16&255),ke(T,k.total_in>>24&255)):(ge(T,k.adler>>>16),ge(T,65535&k.adler)),q(k),0<T.wrap&&(T.wrap=-T.wrap),T.pending!==0?v:1)},a.deflateEnd=function(k){var re;return k&&k.state?(re=k.state.status)!==P&&re!==69&&re!==73&&re!==91&&re!==103&&re!==J&&re!==666?ze(k,y):(k.state=null,re===J?ze(k,-3):v):y},a.deflateSetDictionary=function(k,re){var V,T,O,N,ae,le,G,de,be=re.length;if(!k||!k.state||(N=(V=k.state).wrap)===2||N===1&&V.status!==P||V.lookahead)return y;for(N===1&&(k.adler=f(k.adler,re,be,0)),V.wrap=0,be>=V.w_size&&(N===0&&(Ae(V.head),V.strstart=0,V.block_start=0,V.insert=0),de=new c.Buf8(V.w_size),c.arraySet(de,re,be-V.w_size,V.w_size,0),re=de,be=V.w_size),ae=k.avail_in,le=k.next_in,G=k.input,k.avail_in=be,k.next_in=0,k.input=re,it(V);V.lookahead>=H;){for(T=V.strstart,O=V.lookahead-(H-1);V.ins_h=(V.ins_h<<V.hash_shift^V.window[T+H-1])&V.hash_mask,V.prev[T&V.w_mask]=V.head[V.ins_h],V.head[V.ins_h]=T,T++,--O;);V.strstart=T,V.lookahead=H-1,it(V)}return V.strstart+=V.lookahead,V.block_start=V.strstart,V.insert=V.lookahead,V.lookahead=0,V.match_length=V.prev_length=H-1,V.match_available=0,k.next_in=le,k.input=G,k.avail_in=ae,V.wrap=N,v},a.deflateInfo="pako deflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./messages":51,"./trees":52}],47:[function(n,o,a){"use strict";o.exports=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}},{}],48:[function(n,o,a){"use strict";o.exports=function(s,c){var l=s.state,f=s.next_in,h,p,m,_,v,y,w,b,S,M,C,L,D,Y,U,oe,H,me,ve,P,J,A=s.input,ee;h=f+(s.avail_in-5),p=s.next_out,ee=s.output,m=p-(c-s.avail_out),_=p+(s.avail_out-257),v=l.dmax,y=l.wsize,w=l.whave,b=l.wnext,S=l.window,M=l.hold,C=l.bits,L=l.lencode,D=l.distcode,Y=(1<<l.lenbits)-1,U=(1<<l.distbits)-1;e:do{C<15&&(M+=A[f++]<<C,C+=8,M+=A[f++]<<C,C+=8),oe=L[M&Y];t:for(;;){if(M>>>=H=oe>>>24,C-=H,(H=oe>>>16&255)===0)ee[p++]=65535&oe;else{if(!(16&H)){if((64&H)==0){oe=L[(65535&oe)+(M&(1<<H)-1)];continue t}if(32&H){l.mode=12;break e}s.msg="invalid literal/length code",l.mode=30;break e}me=65535&oe,(H&=15)&&(C<H&&(M+=A[f++]<<C,C+=8),me+=M&(1<<H)-1,M>>>=H,C-=H),C<15&&(M+=A[f++]<<C,C+=8,M+=A[f++]<<C,C+=8),oe=D[M&U];r:for(;;){if(M>>>=H=oe>>>24,C-=H,!(16&(H=oe>>>16&255))){if((64&H)==0){oe=D[(65535&oe)+(M&(1<<H)-1)];continue r}s.msg="invalid distance code",l.mode=30;break e}if(ve=65535&oe,C<(H&=15)&&(M+=A[f++]<<C,(C+=8)<H&&(M+=A[f++]<<C,C+=8)),v<(ve+=M&(1<<H)-1)){s.msg="invalid distance too far back",l.mode=30;break e}if(M>>>=H,C-=H,(H=p-m)<ve){if(w<(H=ve-H)&&l.sane){s.msg="invalid distance too far back",l.mode=30;break e}if(J=S,(P=0)===b){if(P+=y-H,H<me){for(me-=H;ee[p++]=S[P++],--H;);P=p-ve,J=ee}}else if(b<H){if(P+=y+b-H,(H-=b)<me){for(me-=H;ee[p++]=S[P++],--H;);if(P=0,b<me){for(me-=H=b;ee[p++]=S[P++],--H;);P=p-ve,J=ee}}}else if(P+=b-H,H<me){for(me-=H;ee[p++]=S[P++],--H;);P=p-ve,J=ee}for(;2<me;)ee[p++]=J[P++],ee[p++]=J[P++],ee[p++]=J[P++],me-=3;me&&(ee[p++]=J[P++],1<me&&(ee[p++]=J[P++]))}else{for(P=p-ve;ee[p++]=ee[P++],ee[p++]=ee[P++],ee[p++]=ee[P++],2<(me-=3););me&&(ee[p++]=ee[P++],1<me&&(ee[p++]=ee[P++]))}break}}break}}while(f<h&&p<_);f-=me=C>>3,M&=(1<<(C-=me<<3))-1,s.next_in=f,s.next_out=p,s.avail_in=f<h?h-f+5:5-(f-h),s.avail_out=p<_?_-p+257:257-(p-_),l.hold=M,l.bits=C}},{}],49:[function(n,o,a){"use strict";var s=n("../utils/common"),c=n("./adler32"),l=n("./crc32"),f=n("./inffast"),h=n("./inftrees"),p=1,m=2,_=0,v=-2,y=1,w=852,b=592;function S(P){return(P>>>24&255)+(P>>>8&65280)+((65280&P)<<8)+((255&P)<<24)}function M(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new s.Buf16(320),this.work=new s.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function C(P){var J;return P&&P.state?(J=P.state,P.total_in=P.total_out=J.total=0,P.msg="",J.wrap&&(P.adler=1&J.wrap),J.mode=y,J.last=0,J.havedict=0,J.dmax=32768,J.head=null,J.hold=0,J.bits=0,J.lencode=J.lendyn=new s.Buf32(w),J.distcode=J.distdyn=new s.Buf32(b),J.sane=1,J.back=-1,_):v}function L(P){var J;return P&&P.state?((J=P.state).wsize=0,J.whave=0,J.wnext=0,C(P)):v}function D(P,J){var A,ee;return P&&P.state?(ee=P.state,J<0?(A=0,J=-J):(A=1+(J>>4),J<48&&(J&=15)),J&&(J<8||15<J)?v:(ee.window!==null&&ee.wbits!==J&&(ee.window=null),ee.wrap=A,ee.wbits=J,L(P))):v}function Y(P,J){var A,ee;return P?(ee=new M,(P.state=ee).window=null,(A=D(P,J))!==_&&(P.state=null),A):v}var U,oe,H=!0;function me(P){if(H){var J;for(U=new s.Buf32(512),oe=new s.Buf32(32),J=0;J<144;)P.lens[J++]=8;for(;J<256;)P.lens[J++]=9;for(;J<280;)P.lens[J++]=7;for(;J<288;)P.lens[J++]=8;for(h(p,P.lens,0,288,U,0,P.work,{bits:9}),J=0;J<32;)P.lens[J++]=5;h(m,P.lens,0,32,oe,0,P.work,{bits:5}),H=!1}P.lencode=U,P.lenbits=9,P.distcode=oe,P.distbits=5}function ve(P,J,A,ee){var Ce,ue=P.state;return ue.window===null&&(ue.wsize=1<<ue.wbits,ue.wnext=0,ue.whave=0,ue.window=new s.Buf8(ue.wsize)),ee>=ue.wsize?(s.arraySet(ue.window,J,A-ue.wsize,ue.wsize,0),ue.wnext=0,ue.whave=ue.wsize):(ee<(Ce=ue.wsize-ue.wnext)&&(Ce=ee),s.arraySet(ue.window,J,A-ee,Ce,ue.wnext),(ee-=Ce)?(s.arraySet(ue.window,J,A-ee,ee,0),ue.wnext=ee,ue.whave=ue.wsize):(ue.wnext+=Ce,ue.wnext===ue.wsize&&(ue.wnext=0),ue.whave<ue.wsize&&(ue.whave+=Ce))),0}a.inflateReset=L,a.inflateReset2=D,a.inflateResetKeep=C,a.inflateInit=function(P){return Y(P,15)},a.inflateInit2=Y,a.inflate=function(P,J){var A,ee,Ce,ue,ze,se,Ae,q,W,ke,ge,pe,it,ft,We,Ze,vt,at,Rr,Vt,k,re,V,T,O=0,N=new s.Buf8(4),ae=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!P||!P.state||!P.output||!P.input&&P.avail_in!==0)return v;(A=P.state).mode===12&&(A.mode=13),ze=P.next_out,Ce=P.output,Ae=P.avail_out,ue=P.next_in,ee=P.input,se=P.avail_in,q=A.hold,W=A.bits,ke=se,ge=Ae,re=_;e:for(;;)switch(A.mode){case y:if(A.wrap===0){A.mode=13;break}for(;W<16;){if(se===0)break e;se--,q+=ee[ue++]<<W,W+=8}if(2&A.wrap&&q===35615){N[A.check=0]=255&q,N[1]=q>>>8&255,A.check=l(A.check,N,2,0),W=q=0,A.mode=2;break}if(A.flags=0,A.head&&(A.head.done=!1),!(1&A.wrap)||(((255&q)<<8)+(q>>8))%31){P.msg="incorrect header check",A.mode=30;break}if((15&q)!=8){P.msg="unknown compression method",A.mode=30;break}if(W-=4,k=8+(15&(q>>>=4)),A.wbits===0)A.wbits=k;else if(k>A.wbits){P.msg="invalid window size",A.mode=30;break}A.dmax=1<<k,P.adler=A.check=1,A.mode=512&q?10:12,W=q=0;break;case 2:for(;W<16;){if(se===0)break e;se--,q+=ee[ue++]<<W,W+=8}if(A.flags=q,(255&A.flags)!=8){P.msg="unknown compression method",A.mode=30;break}if(57344&A.flags){P.msg="unknown header flags set",A.mode=30;break}A.head&&(A.head.text=q>>8&1),512&A.flags&&(N[0]=255&q,N[1]=q>>>8&255,A.check=l(A.check,N,2,0)),W=q=0,A.mode=3;case 3:for(;W<32;){if(se===0)break e;se--,q+=ee[ue++]<<W,W+=8}A.head&&(A.head.time=q),512&A.flags&&(N[0]=255&q,N[1]=q>>>8&255,N[2]=q>>>16&255,N[3]=q>>>24&255,A.check=l(A.check,N,4,0)),W=q=0,A.mode=4;case 4:for(;W<16;){if(se===0)break e;se--,q+=ee[ue++]<<W,W+=8}A.head&&(A.head.xflags=255&q,A.head.os=q>>8),512&A.flags&&(N[0]=255&q,N[1]=q>>>8&255,A.check=l(A.check,N,2,0)),W=q=0,A.mode=5;case 5:if(1024&A.flags){for(;W<16;){if(se===0)break e;se--,q+=ee[ue++]<<W,W+=8}A.length=q,A.head&&(A.head.extra_len=q),512&A.flags&&(N[0]=255&q,N[1]=q>>>8&255,A.check=l(A.check,N,2,0)),W=q=0}else A.head&&(A.head.extra=null);A.mode=6;case 6:if(1024&A.flags&&(se<(pe=A.length)&&(pe=se),pe&&(A.head&&(k=A.head.extra_len-A.length,A.head.extra||(A.head.extra=new Array(A.head.extra_len)),s.arraySet(A.head.extra,ee,ue,pe,k)),512&A.flags&&(A.check=l(A.check,ee,pe,ue)),se-=pe,ue+=pe,A.length-=pe),A.length))break e;A.length=0,A.mode=7;case 7:if(2048&A.flags){if(se===0)break e;for(pe=0;k=ee[ue+pe++],A.head&&k&&A.length<65536&&(A.head.name+=String.fromCharCode(k)),k&&pe<se;);if(512&A.flags&&(A.check=l(A.check,ee,pe,ue)),se-=pe,ue+=pe,k)break e}else A.head&&(A.head.name=null);A.length=0,A.mode=8;case 8:if(4096&A.flags){if(se===0)break e;for(pe=0;k=ee[ue+pe++],A.head&&k&&A.length<65536&&(A.head.comment+=String.fromCharCode(k)),k&&pe<se;);if(512&A.flags&&(A.check=l(A.check,ee,pe,ue)),se-=pe,ue+=pe,k)break e}else A.head&&(A.head.comment=null);A.mode=9;case 9:if(512&A.flags){for(;W<16;){if(se===0)break e;se--,q+=ee[ue++]<<W,W+=8}if(q!==(65535&A.check)){P.msg="header crc mismatch",A.mode=30;break}W=q=0}A.head&&(A.head.hcrc=A.flags>>9&1,A.head.done=!0),P.adler=A.check=0,A.mode=12;break;case 10:for(;W<32;){if(se===0)break e;se--,q+=ee[ue++]<<W,W+=8}P.adler=A.check=S(q),W=q=0,A.mode=11;case 11:if(A.havedict===0)return P.next_out=ze,P.avail_out=Ae,P.next_in=ue,P.avail_in=se,A.hold=q,A.bits=W,2;P.adler=A.check=1,A.mode=12;case 12:if(J===5||J===6)break e;case 13:if(A.last){q>>>=7&W,W-=7&W,A.mode=27;break}for(;W<3;){if(se===0)break e;se--,q+=ee[ue++]<<W,W+=8}switch(A.last=1&q,W-=1,3&(q>>>=1)){case 0:A.mode=14;break;case 1:if(me(A),A.mode=20,J!==6)break;q>>>=2,W-=2;break e;case 2:A.mode=17;break;case 3:P.msg="invalid block type",A.mode=30}q>>>=2,W-=2;break;case 14:for(q>>>=7&W,W-=7&W;W<32;){if(se===0)break e;se--,q+=ee[ue++]<<W,W+=8}if((65535&q)!=(q>>>16^65535)){P.msg="invalid stored block lengths",A.mode=30;break}if(A.length=65535&q,W=q=0,A.mode=15,J===6)break e;case 15:A.mode=16;case 16:if(pe=A.length){if(se<pe&&(pe=se),Ae<pe&&(pe=Ae),pe===0)break e;s.arraySet(Ce,ee,ue,pe,ze),se-=pe,ue+=pe,Ae-=pe,ze+=pe,A.length-=pe;break}A.mode=12;break;case 17:for(;W<14;){if(se===0)break e;se--,q+=ee[ue++]<<W,W+=8}if(A.nlen=257+(31&q),q>>>=5,W-=5,A.ndist=1+(31&q),q>>>=5,W-=5,A.ncode=4+(15&q),q>>>=4,W-=4,286<A.nlen||30<A.ndist){P.msg="too many length or distance symbols",A.mode=30;break}A.have=0,A.mode=18;case 18:for(;A.have<A.ncode;){for(;W<3;){if(se===0)break e;se--,q+=ee[ue++]<<W,W+=8}A.lens[ae[A.have++]]=7&q,q>>>=3,W-=3}for(;A.have<19;)A.lens[ae[A.have++]]=0;if(A.lencode=A.lendyn,A.lenbits=7,V={bits:A.lenbits},re=h(0,A.lens,0,19,A.lencode,0,A.work,V),A.lenbits=V.bits,re){P.msg="invalid code lengths set",A.mode=30;break}A.have=0,A.mode=19;case 19:for(;A.have<A.nlen+A.ndist;){for(;Ze=(O=A.lencode[q&(1<<A.lenbits)-1])>>>16&255,vt=65535&O,!((We=O>>>24)<=W);){if(se===0)break e;se--,q+=ee[ue++]<<W,W+=8}if(vt<16)q>>>=We,W-=We,A.lens[A.have++]=vt;else{if(vt===16){for(T=We+2;W<T;){if(se===0)break e;se--,q+=ee[ue++]<<W,W+=8}if(q>>>=We,W-=We,A.have===0){P.msg="invalid bit length repeat",A.mode=30;break}k=A.lens[A.have-1],pe=3+(3&q),q>>>=2,W-=2}else if(vt===17){for(T=We+3;W<T;){if(se===0)break e;se--,q+=ee[ue++]<<W,W+=8}W-=We,k=0,pe=3+(7&(q>>>=We)),q>>>=3,W-=3}else{for(T=We+7;W<T;){if(se===0)break e;se--,q+=ee[ue++]<<W,W+=8}W-=We,k=0,pe=11+(127&(q>>>=We)),q>>>=7,W-=7}if(A.have+pe>A.nlen+A.ndist){P.msg="invalid bit length repeat",A.mode=30;break}for(;pe--;)A.lens[A.have++]=k}}if(A.mode===30)break;if(A.lens[256]===0){P.msg="invalid code -- missing end-of-block",A.mode=30;break}if(A.lenbits=9,V={bits:A.lenbits},re=h(p,A.lens,0,A.nlen,A.lencode,0,A.work,V),A.lenbits=V.bits,re){P.msg="invalid literal/lengths set",A.mode=30;break}if(A.distbits=6,A.distcode=A.distdyn,V={bits:A.distbits},re=h(m,A.lens,A.nlen,A.ndist,A.distcode,0,A.work,V),A.distbits=V.bits,re){P.msg="invalid distances set",A.mode=30;break}if(A.mode=20,J===6)break e;case 20:A.mode=21;case 21:if(6<=se&&258<=Ae){P.next_out=ze,P.avail_out=Ae,P.next_in=ue,P.avail_in=se,A.hold=q,A.bits=W,f(P,ge),ze=P.next_out,Ce=P.output,Ae=P.avail_out,ue=P.next_in,ee=P.input,se=P.avail_in,q=A.hold,W=A.bits,A.mode===12&&(A.back=-1);break}for(A.back=0;Ze=(O=A.lencode[q&(1<<A.lenbits)-1])>>>16&255,vt=65535&O,!((We=O>>>24)<=W);){if(se===0)break e;se--,q+=ee[ue++]<<W,W+=8}if(Ze&&(240&Ze)==0){for(at=We,Rr=Ze,Vt=vt;Ze=(O=A.lencode[Vt+((q&(1<<at+Rr)-1)>>at)])>>>16&255,vt=65535&O,!(at+(We=O>>>24)<=W);){if(se===0)break e;se--,q+=ee[ue++]<<W,W+=8}q>>>=at,W-=at,A.back+=at}if(q>>>=We,W-=We,A.back+=We,A.length=vt,Ze===0){A.mode=26;break}if(32&Ze){A.back=-1,A.mode=12;break}if(64&Ze){P.msg="invalid literal/length code",A.mode=30;break}A.extra=15&Ze,A.mode=22;case 22:if(A.extra){for(T=A.extra;W<T;){if(se===0)break e;se--,q+=ee[ue++]<<W,W+=8}A.length+=q&(1<<A.extra)-1,q>>>=A.extra,W-=A.extra,A.back+=A.extra}A.was=A.length,A.mode=23;case 23:for(;Ze=(O=A.distcode[q&(1<<A.distbits)-1])>>>16&255,vt=65535&O,!((We=O>>>24)<=W);){if(se===0)break e;se--,q+=ee[ue++]<<W,W+=8}if((240&Ze)==0){for(at=We,Rr=Ze,Vt=vt;Ze=(O=A.distcode[Vt+((q&(1<<at+Rr)-1)>>at)])>>>16&255,vt=65535&O,!(at+(We=O>>>24)<=W);){if(se===0)break e;se--,q+=ee[ue++]<<W,W+=8}q>>>=at,W-=at,A.back+=at}if(q>>>=We,W-=We,A.back+=We,64&Ze){P.msg="invalid distance code",A.mode=30;break}A.offset=vt,A.extra=15&Ze,A.mode=24;case 24:if(A.extra){for(T=A.extra;W<T;){if(se===0)break e;se--,q+=ee[ue++]<<W,W+=8}A.offset+=q&(1<<A.extra)-1,q>>>=A.extra,W-=A.extra,A.back+=A.extra}if(A.offset>A.dmax){P.msg="invalid distance too far back",A.mode=30;break}A.mode=25;case 25:if(Ae===0)break e;if(pe=ge-Ae,A.offset>pe){if((pe=A.offset-pe)>A.whave&&A.sane){P.msg="invalid distance too far back",A.mode=30;break}it=pe>A.wnext?(pe-=A.wnext,A.wsize-pe):A.wnext-pe,pe>A.length&&(pe=A.length),ft=A.window}else ft=Ce,it=ze-A.offset,pe=A.length;for(Ae<pe&&(pe=Ae),Ae-=pe,A.length-=pe;Ce[ze++]=ft[it++],--pe;);A.length===0&&(A.mode=21);break;case 26:if(Ae===0)break e;Ce[ze++]=A.length,Ae--,A.mode=21;break;case 27:if(A.wrap){for(;W<32;){if(se===0)break e;se--,q|=ee[ue++]<<W,W+=8}if(ge-=Ae,P.total_out+=ge,A.total+=ge,ge&&(P.adler=A.check=A.flags?l(A.check,Ce,ge,ze-ge):c(A.check,Ce,ge,ze-ge)),ge=Ae,(A.flags?q:S(q))!==A.check){P.msg="incorrect data check",A.mode=30;break}W=q=0}A.mode=28;case 28:if(A.wrap&&A.flags){for(;W<32;){if(se===0)break e;se--,q+=ee[ue++]<<W,W+=8}if(q!==(4294967295&A.total)){P.msg="incorrect length check",A.mode=30;break}W=q=0}A.mode=29;case 29:re=1;break e;case 30:re=-3;break e;case 31:return-4;default:return v}return P.next_out=ze,P.avail_out=Ae,P.next_in=ue,P.avail_in=se,A.hold=q,A.bits=W,(A.wsize||ge!==P.avail_out&&A.mode<30&&(A.mode<27||J!==4))&&ve(P,P.output,P.next_out,ge-P.avail_out)?(A.mode=31,-4):(ke-=P.avail_in,ge-=P.avail_out,P.total_in+=ke,P.total_out+=ge,A.total+=ge,A.wrap&&ge&&(P.adler=A.check=A.flags?l(A.check,Ce,ge,P.next_out-ge):c(A.check,Ce,ge,P.next_out-ge)),P.data_type=A.bits+(A.last?64:0)+(A.mode===12?128:0)+(A.mode===20||A.mode===15?256:0),(ke==0&&ge===0||J===4)&&re===_&&(re=-5),re)},a.inflateEnd=function(P){if(!P||!P.state)return v;var J=P.state;return J.window&&(J.window=null),P.state=null,_},a.inflateGetHeader=function(P,J){var A;return P&&P.state?(2&(A=P.state).wrap)==0?v:((A.head=J).done=!1,_):v},a.inflateSetDictionary=function(P,J){var A,ee=J.length;return P&&P.state?(A=P.state).wrap!==0&&A.mode!==11?v:A.mode===11&&c(1,J,ee,0)!==A.check?-3:ve(P,J,ee,ee)?(A.mode=31,-4):(A.havedict=1,_):v},a.inflateInfo="pako inflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./inffast":48,"./inftrees":50}],50:[function(n,o,a){"use strict";var s=n("../utils/common"),c=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],l=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],f=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],h=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];o.exports=function(p,m,_,v,y,w,b,S){var M,C,L,D,Y,U,oe,H,me,ve=S.bits,P=0,J=0,A=0,ee=0,Ce=0,ue=0,ze=0,se=0,Ae=0,q=0,W=null,ke=0,ge=new s.Buf16(16),pe=new s.Buf16(16),it=null,ft=0;for(P=0;P<=15;P++)ge[P]=0;for(J=0;J<v;J++)ge[m[_+J]]++;for(Ce=ve,ee=15;1<=ee&&ge[ee]===0;ee--);if(ee<Ce&&(Ce=ee),ee===0)return y[w++]=20971520,y[w++]=20971520,S.bits=1,0;for(A=1;A<ee&&ge[A]===0;A++);for(Ce<A&&(Ce=A),P=se=1;P<=15;P++)if(se<<=1,(se-=ge[P])<0)return-1;if(0<se&&(p===0||ee!==1))return-1;for(pe[1]=0,P=1;P<15;P++)pe[P+1]=pe[P]+ge[P];for(J=0;J<v;J++)m[_+J]!==0&&(b[pe[m[_+J]]++]=J);if(U=p===0?(W=it=b,19):p===1?(W=c,ke-=257,it=l,ft-=257,256):(W=f,it=h,-1),P=A,Y=w,ze=J=q=0,L=-1,D=(Ae=1<<(ue=Ce))-1,p===1&&852<Ae||p===2&&592<Ae)return 1;for(;;){for(oe=P-ze,me=b[J]<U?(H=0,b[J]):b[J]>U?(H=it[ft+b[J]],W[ke+b[J]]):(H=96,0),M=1<<P-ze,A=C=1<<ue;y[Y+(q>>ze)+(C-=M)]=oe<<24|H<<16|me|0,C!==0;);for(M=1<<P-1;q&M;)M>>=1;if(M!==0?(q&=M-1,q+=M):q=0,J++,--ge[P]==0){if(P===ee)break;P=m[_+b[J]]}if(Ce<P&&(q&D)!==L){for(ze===0&&(ze=Ce),Y+=A,se=1<<(ue=P-ze);ue+ze<ee&&!((se-=ge[ue+ze])<=0);)ue++,se<<=1;if(Ae+=1<<ue,p===1&&852<Ae||p===2&&592<Ae)return 1;y[L=q&D]=Ce<<24|ue<<16|Y-w|0}}return q!==0&&(y[Y+q]=P-ze<<24|4194304),S.bits=Ce,0}},{"../utils/common":41}],51:[function(n,o,a){"use strict";o.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},{}],52:[function(n,o,a){"use strict";var s=n("../utils/common"),c=0,l=1;function f(O){for(var N=O.length;0<=--N;)O[N]=0}var h=0,p=29,m=256,_=m+1+p,v=30,y=19,w=2*_+1,b=15,S=16,M=7,C=256,L=16,D=17,Y=18,U=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],oe=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],H=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],me=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],ve=new Array(2*(_+2));f(ve);var P=new Array(2*v);f(P);var J=new Array(512);f(J);var A=new Array(256);f(A);var ee=new Array(p);f(ee);var Ce,ue,ze,se=new Array(v);function Ae(O,N,ae,le,G){this.static_tree=O,this.extra_bits=N,this.extra_base=ae,this.elems=le,this.max_length=G,this.has_stree=O&&O.length}function q(O,N){this.dyn_tree=O,this.max_code=0,this.stat_desc=N}function W(O){return O<256?J[O]:J[256+(O>>>7)]}function ke(O,N){O.pending_buf[O.pending++]=255&N,O.pending_buf[O.pending++]=N>>>8&255}function ge(O,N,ae){O.bi_valid>S-ae?(O.bi_buf|=N<<O.bi_valid&65535,ke(O,O.bi_buf),O.bi_buf=N>>S-O.bi_valid,O.bi_valid+=ae-S):(O.bi_buf|=N<<O.bi_valid&65535,O.bi_valid+=ae)}function pe(O,N,ae){ge(O,ae[2*N],ae[2*N+1])}function it(O,N){for(var ae=0;ae|=1&O,O>>>=1,ae<<=1,0<--N;);return ae>>>1}function ft(O,N,ae){var le,G,de=new Array(b+1),be=0;for(le=1;le<=b;le++)de[le]=be=be+ae[le-1]<<1;for(G=0;G<=N;G++){var he=O[2*G+1];he!==0&&(O[2*G]=it(de[he]++,he))}}function We(O){for(var N=0;N<_;N++)O.dyn_ltree[2*N]=0;for(N=0;N<v;N++)O.dyn_dtree[2*N]=0;for(N=0;N<y;N++)O.bl_tree[2*N]=0;O.dyn_ltree[2*C]=1,O.opt_len=O.static_len=0,O.last_lit=O.matches=0}function Ze(O){8<O.bi_valid?ke(O,O.bi_buf):0<O.bi_valid&&(O.pending_buf[O.pending++]=O.bi_buf),O.bi_buf=0,O.bi_valid=0}function vt(O,N,ae,le){var G=2*N,de=2*ae;return O[G]<O[de]||O[G]===O[de]&&le[N]<=le[ae]}function at(O,N,ae){for(var le=O.heap[ae],G=ae<<1;G<=O.heap_len&&(G<O.heap_len&&vt(N,O.heap[G+1],O.heap[G],O.depth)&&G++,!vt(N,le,O.heap[G],O.depth));)O.heap[ae]=O.heap[G],ae=G,G<<=1;O.heap[ae]=le}function Rr(O,N,ae){var le,G,de,be,he=0;if(O.last_lit!==0)for(;le=O.pending_buf[O.d_buf+2*he]<<8|O.pending_buf[O.d_buf+2*he+1],G=O.pending_buf[O.l_buf+he],he++,le===0?pe(O,G,N):(pe(O,(de=A[G])+m+1,N),(be=U[de])!==0&&ge(O,G-=ee[de],be),pe(O,de=W(--le),ae),(be=oe[de])!==0&&ge(O,le-=se[de],be)),he<O.last_lit;);pe(O,C,N)}function Vt(O,N){var ae,le,G,de=N.dyn_tree,be=N.stat_desc.static_tree,he=N.stat_desc.has_stree,Ie=N.stat_desc.elems,Je=-1;for(O.heap_len=0,O.heap_max=w,ae=0;ae<Ie;ae++)de[2*ae]!==0?(O.heap[++O.heap_len]=Je=ae,O.depth[ae]=0):de[2*ae+1]=0;for(;O.heap_len<2;)de[2*(G=O.heap[++O.heap_len]=Je<2?++Je:0)]=1,O.depth[G]=0,O.opt_len--,he&&(O.static_len-=be[2*G+1]);for(N.max_code=Je,ae=O.heap_len>>1;1<=ae;ae--)at(O,de,ae);for(G=Ie;ae=O.heap[1],O.heap[1]=O.heap[O.heap_len--],at(O,de,1),le=O.heap[1],O.heap[--O.heap_max]=ae,O.heap[--O.heap_max]=le,de[2*G]=de[2*ae]+de[2*le],O.depth[G]=(O.depth[ae]>=O.depth[le]?O.depth[ae]:O.depth[le])+1,de[2*ae+1]=de[2*le+1]=G,O.heap[1]=G++,at(O,de,1),2<=O.heap_len;);O.heap[--O.heap_max]=O.heap[1],(function(je,zt){var Pr,ir,gn,pt,Bn,ho,yr=zt.dyn_tree,Jo=zt.max_code,qi=zt.stat_desc.static_tree,Zi=zt.stat_desc.has_stree,zc=zt.stat_desc.extra_bits,us=zt.stat_desc.extra_base,fo=zt.stat_desc.max_length,po=0;for(pt=0;pt<=b;pt++)je.bl_count[pt]=0;for(yr[2*je.heap[je.heap_max]+1]=0,Pr=je.heap_max+1;Pr<w;Pr++)fo<(pt=yr[2*yr[2*(ir=je.heap[Pr])+1]+1]+1)&&(pt=fo,po++),yr[2*ir+1]=pt,Jo<ir||(je.bl_count[pt]++,Bn=0,us<=ir&&(Bn=zc[ir-us]),ho=yr[2*ir],je.opt_len+=ho*(pt+Bn),Zi&&(je.static_len+=ho*(qi[2*ir+1]+Bn)));if(po!==0){do{for(pt=fo-1;je.bl_count[pt]===0;)pt--;je.bl_count[pt]--,je.bl_count[pt+1]+=2,je.bl_count[fo]--,po-=2}while(0<po);for(pt=fo;pt!==0;pt--)for(ir=je.bl_count[pt];ir!==0;)Jo<(gn=je.heap[--Pr])||(yr[2*gn+1]!==pt&&(je.opt_len+=(pt-yr[2*gn+1])*yr[2*gn],yr[2*gn+1]=pt),ir--)}})(O,N),ft(de,Je,O.bl_count)}function k(O,N,ae){var le,G,de=-1,be=N[1],he=0,Ie=7,Je=4;for(be===0&&(Ie=138,Je=3),N[2*(ae+1)+1]=65535,le=0;le<=ae;le++)G=be,be=N[2*(le+1)+1],++he<Ie&&G===be||(he<Je?O.bl_tree[2*G]+=he:G!==0?(G!==de&&O.bl_tree[2*G]++,O.bl_tree[2*L]++):he<=10?O.bl_tree[2*D]++:O.bl_tree[2*Y]++,de=G,Je=(he=0)===be?(Ie=138,3):G===be?(Ie=6,3):(Ie=7,4))}function re(O,N,ae){var le,G,de=-1,be=N[1],he=0,Ie=7,Je=4;for(be===0&&(Ie=138,Je=3),le=0;le<=ae;le++)if(G=be,be=N[2*(le+1)+1],!(++he<Ie&&G===be)){if(he<Je)for(;pe(O,G,O.bl_tree),--he!=0;);else G!==0?(G!==de&&(pe(O,G,O.bl_tree),he--),pe(O,L,O.bl_tree),ge(O,he-3,2)):he<=10?(pe(O,D,O.bl_tree),ge(O,he-3,3)):(pe(O,Y,O.bl_tree),ge(O,he-11,7));de=G,Je=(he=0)===be?(Ie=138,3):G===be?(Ie=6,3):(Ie=7,4)}}f(se);var V=!1;function T(O,N,ae,le){ge(O,(h<<1)+(le?1:0),3),(function(G,de,be,he){Ze(G),he&&(ke(G,be),ke(G,~be)),s.arraySet(G.pending_buf,G.window,de,be,G.pending),G.pending+=be})(O,N,ae,!0)}a._tr_init=function(O){V||((function(){var N,ae,le,G,de,be=new Array(b+1);for(G=le=0;G<p-1;G++)for(ee[G]=le,N=0;N<1<<U[G];N++)A[le++]=G;for(A[le-1]=G,G=de=0;G<16;G++)for(se[G]=de,N=0;N<1<<oe[G];N++)J[de++]=G;for(de>>=7;G<v;G++)for(se[G]=de<<7,N=0;N<1<<oe[G]-7;N++)J[256+de++]=G;for(ae=0;ae<=b;ae++)be[ae]=0;for(N=0;N<=143;)ve[2*N+1]=8,N++,be[8]++;for(;N<=255;)ve[2*N+1]=9,N++,be[9]++;for(;N<=279;)ve[2*N+1]=7,N++,be[7]++;for(;N<=287;)ve[2*N+1]=8,N++,be[8]++;for(ft(ve,_+1,be),N=0;N<v;N++)P[2*N+1]=5,P[2*N]=it(N,5);Ce=new Ae(ve,U,m+1,_,b),ue=new Ae(P,oe,0,v,b),ze=new Ae(new Array(0),H,0,y,M)})(),V=!0),O.l_desc=new q(O.dyn_ltree,Ce),O.d_desc=new q(O.dyn_dtree,ue),O.bl_desc=new q(O.bl_tree,ze),O.bi_buf=0,O.bi_valid=0,We(O)},a._tr_stored_block=T,a._tr_flush_block=function(O,N,ae,le){var G,de,be=0;0<O.level?(O.strm.data_type===2&&(O.strm.data_type=(function(he){var Ie,Je=4093624447;for(Ie=0;Ie<=31;Ie++,Je>>>=1)if(1&Je&&he.dyn_ltree[2*Ie]!==0)return c;if(he.dyn_ltree[18]!==0||he.dyn_ltree[20]!==0||he.dyn_ltree[26]!==0)return l;for(Ie=32;Ie<m;Ie++)if(he.dyn_ltree[2*Ie]!==0)return l;return c})(O)),Vt(O,O.l_desc),Vt(O,O.d_desc),be=(function(he){var Ie;for(k(he,he.dyn_ltree,he.l_desc.max_code),k(he,he.dyn_dtree,he.d_desc.max_code),Vt(he,he.bl_desc),Ie=y-1;3<=Ie&&he.bl_tree[2*me[Ie]+1]===0;Ie--);return he.opt_len+=3*(Ie+1)+5+5+4,Ie})(O),G=O.opt_len+3+7>>>3,(de=O.static_len+3+7>>>3)<=G&&(G=de)):G=de=ae+5,ae+4<=G&&N!==-1?T(O,N,ae,le):O.strategy===4||de===G?(ge(O,2+(le?1:0),3),Rr(O,ve,P)):(ge(O,4+(le?1:0),3),(function(he,Ie,Je,je){var zt;for(ge(he,Ie-257,5),ge(he,Je-1,5),ge(he,je-4,4),zt=0;zt<je;zt++)ge(he,he.bl_tree[2*me[zt]+1],3);re(he,he.dyn_ltree,Ie-1),re(he,he.dyn_dtree,Je-1)})(O,O.l_desc.max_code+1,O.d_desc.max_code+1,be+1),Rr(O,O.dyn_ltree,O.dyn_dtree)),We(O),le&&Ze(O)},a._tr_tally=function(O,N,ae){return O.pending_buf[O.d_buf+2*O.last_lit]=N>>>8&255,O.pending_buf[O.d_buf+2*O.last_lit+1]=255&N,O.pending_buf[O.l_buf+O.last_lit]=255&ae,O.last_lit++,N===0?O.dyn_ltree[2*ae]++:(O.matches++,N--,O.dyn_ltree[2*(A[ae]+m+1)]++,O.dyn_dtree[2*W(N)]++),O.last_lit===O.lit_bufsize-1},a._tr_align=function(O){ge(O,2,3),pe(O,C,ve),(function(N){N.bi_valid===16?(ke(N,N.bi_buf),N.bi_buf=0,N.bi_valid=0):8<=N.bi_valid&&(N.pending_buf[N.pending++]=255&N.bi_buf,N.bi_buf>>=8,N.bi_valid-=8)})(O)}},{"../utils/common":41}],53:[function(n,o,a){"use strict";o.exports=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}},{}],54:[function(n,o,a){"use strict";o.exports=typeof setImmediate=="function"?setImmediate:function(){var s=[].slice.apply(arguments);s.splice(1,0,0),setTimeout.apply(null,s)}},{}]},{},[10])(10)})})),Xh=F6(),U6=G6(),V6=ua(W6(),1);function q6(e){switch(e){case"image/jpeg":return"jpg";case"image/png":return"png";case"image/webp":return"webp";case"image/gif":return"gif";case"image/bmp":return"bmp";default:return"png"}}async function Z6(e){if(!e.src)return null;try{const t=await fetch(e.src);if(t.ok)return Ee(`Got blob for page ${e.src} from fetch`),await t.blob()}catch(t){Ee(`Failed to get blob for page ${e.src} from fetch`,t)}return typeof GM_xmlhttpRequest<"u"?new Promise(t=>{GM_xmlhttpRequest({method:"GET",url:e.src,responseType:"blob",onload:n=>{n.status===200?(Ee(`Got blob for page ${e.src} from GM_xmlhttpRequest`),t(n.response)):(Ee(`Failed to get blob for page ${e.src} from GM_xmlhttpRequest`,n.statusText),t(null))},onerror:n=>{Ee(`Failed to get blob for page ${e.src} from GM_xmlhttpRequest`,n),t(null)}})}):null}async function j6(e){const t=e.ref?.value;if(!t)return null;try{const n=document.createElement("canvas"),o=n.getContext("2d");if(o)return n.width=t.naturalWidth,n.height=t.naturalHeight,o.drawImage(t,0,0),await new Promise(a=>{n.toBlob(s=>{s&&Ee(`Got blob for page ${e.src} from canvas`),a(s)},"image/png",1)})}catch(n){Ee(`Failed to get blob for page ${e.src} from canvas`,n)}return null}async function K6(e){if(e.blob)return Ee(`Got blob for page ${e.src} from cache`),e.blob;const t=await Z6(e)||await j6(e);return t||Ee(`Failed to get blob for page ${e.src}`),t}async function Y6(){De("download","working");const e=new V6.default,t=fe("images")??{},n=fe("manga"),o=n?.pages??0,a=Math.floor(Math.log10(o||1))+1,s=xe.default.sortBy(xe.default.entries(t),([h])=>Number(h)),c=[],l=h=>{De("dialog",{open:!0,title:Z("BUTTON_DOWNLOAD"),content:ne`
        <div style='display: flex; flex-direction: column; gap: 10px;'>
          <p>${Z("DOWNLOAD_PROGRESS").replace("##num##",h.toString()).replace("##total##",o.toString())}</p>
          <progress value='${h}' max='${o}' style='width: 100%; height: 20px;'></progress>
        </div>
      `,footer:ne`
        <mov-button @click=${()=>De("download","cancelled")}>
          ${Z("CANCEL")}
        </mov-button>
      `})};l(0);let f=0;for(const[h,p]of s){if(fe("download")==="cancelled"){Ee("Download cancelled"),De("dialog",null),De("download",void 0);return}try{const m=await K6(p);if(m){const _=q6(m.type),v=`Page-${Number(h).toString().padStart(a,"0")}.${_}`;Ee(`${v} Added to Zip from Blob`),e.file(v,m,{createFolders:!0,compression:"DEFLATE"})}else c.push(p.src??h)}catch(m){Ee(`Error processing page ${h}`,m),c.push(p.src??h)}finally{f+=1,l(f)}}De("dialog",{open:!0,title:Z("BUTTON_DOWNLOAD"),content:ne`
      <div style='display: flex; flex-direction: column; gap: 10px;'>
        <p>${Z("GENERATING_ZIP")}</p>
        <progress style='width: 100%; height: 20px;'></progress>
      </div>
    `,footer:ne``}),c.length>0&&(Ee("Some images failed to download:",c),e.file("failed_pages.txt",c.join(`
`))),Ee("Generating Zip"),e.generateAsync({type:"blob"}).then(h=>{Ee("Download Ready");const p=`${n?.title??document.title}.zip`;(0,U6.saveAs)(h,p,{autoBom:!1}),c.length>0?De("dialog",{open:!0,title:Z("DOWNLOAD_INCOMPLETE"),icon:"warning",content:ne`<p>${Z("DOWNLOAD_INCOMPLETE_MESSAGE")}</p>`,footer:ne`<mov-button @click=${()=>De("dialog",null)}>
            ${Z("CLOSE")}
          </mov-button>`}):De("dialog",null)}).catch(h=>{Ee("Error generating zip",h),De("dialog",{open:!0,title:Z("WARNING"),icon:"error",content:ne`<p>Error generating zip: ${h.message}</p>`,footer:ne`<mov-button @click=${()=>De("dialog",null)}>
          ${Z("CLOSE")}
        </mov-button>`})}).finally(()=>{De("download",void 0)})}function Jh(){fe("download")!=="working"&&(Ee("Downloading Chapter"),Y6().catch(e=>Ee("Error downloading chapter",e)))}function X6(){Co("hidePageControls",e=>!e)}function Ni(e){const t=e.currentTarget||e.target,n=t.getAttribute("value")??t.getAttribute("href");e.button!==1&&!e.ctrlKey&&(n&&n!=="#"?window.location.href=(0,Xh.sanitizeUrl)(n):t.id==="series"&&(Qs()?window.location.href=window.location.pathname:window.history.back()))}function J6(e){if(e)if(X("viewMode").startsWith("Fluid")){const t=fe("chapter").value;if(t){const n=e.getBoundingClientRect(),o=t.getBoundingClientRect();t.scrollBy({left:n.left-o.left,top:n.top-o.top,behavior:"instant"})}}else{const t=e.getBoundingClientRect();window.scrollTo({top:t.top+window.scrollY,left:t.left+window.scrollX,behavior:"instant"})}}nr.listen((e,t,n)=>{n==="scrollToPage"&&e.scrollToPage!==void 0&&(e.scrollToPage<=0?window.scrollTo(0,0):J6(fe("images")?.[e.scrollToPage]?.ref?.value),setTimeout(()=>De("scrollToPage",void 0),10))});function Q6(e){const t=e.detail.value;De("scrollToPage",typeof t=="string"?parseInt(t,10):t)}function e9(e){De("scrollToPage",e)}var Mc=typeof navigator<"u"?navigator.userAgent.toLowerCase().indexOf("firefox")>0:!1;function xc(e,t,n,o){e.addEventListener?e.addEventListener(t,n,o):e.attachEvent&&e.attachEvent(`on${t}`,n)}function Bi(e,t,n,o){e&&(e.removeEventListener?e.removeEventListener(t,n,o):e.detachEvent&&e.detachEvent(`on${t}`,n))}function Qh(e,t){const n=t.slice(0,t.length-1),o=[];for(let a=0;a<n.length;a++)o.push(e[n[a].toLowerCase()]);return o}function e1(e){typeof e!="string"&&(e=""),e=e.replace(/\s/g,"");const t=e.split(",");let n=t.lastIndexOf("");for(;n>=0;)t[n-1]+=",",t.splice(n,1),n=t.lastIndexOf("");return t}function t9(e,t){const n=e.length>=t.length?e:t,o=e.length>=t.length?t:e;let a=!0;for(let s=0;s<n.length;s++)o.indexOf(n[s])===-1&&(a=!1);return a}function t1(e,t,n){let o=e.keyCode||e.which||e.charCode;if(e.key){const a=e.key.toLowerCase();if(a in t)return t[a];if(a in n)return n[a];if(/^[0-9]$/.test(e.key))return e.key.charCodeAt(0);if(/^[a-z]$/i.test(e.key))return e.key.toUpperCase().charCodeAt(0)}return e.code&&/^Key[A-Z]$/.test(e.code)&&(o=e.code.charCodeAt(3)),o}var lo={backspace:8,"⌫":8,tab:9,clear:12,enter:13,"↩":13,return:13,esc:27,escape:27,space:32,left:37,up:38,right:39,down:40,arrowup:38,arrowdown:40,arrowleft:37,arrowright:39,del:46,delete:46,ins:45,insert:45,home:36,end:35,pageup:33,pagedown:34,capslock:20,num_0:96,num_1:97,num_2:98,num_3:99,num_4:100,num_5:101,num_6:102,num_7:103,num_8:104,num_9:105,num_multiply:106,num_add:107,num_enter:108,num_subtract:109,num_decimal:110,num_divide:111,"⇪":20,",":188,".":190,"/":191,"`":192,"-":Mc?173:189,"=":Mc?61:187,";":Mc?59:186,"'":222,"{":219,"}":221,"[":219,"]":221,"\\":220},or={"⇧":16,shift:16,"⌥":18,alt:18,option:18,"⌃":17,ctrl:17,control:17,"⌘":91,cmd:91,meta:91,command:91},Hi={16:"shiftKey",18:"altKey",17:"ctrlKey",91:"metaKey",shiftKey:16,ctrlKey:17,altKey:18,metaKey:91},Rt={16:!1,18:!1,17:!1,91:!1},_t={};for(let e=1;e<20;e++)lo[`f${e}`]=111+e;var ht=[],Fi=null,jo=null,r1="all",mn=new Map,Ko=e=>lo[e.toLowerCase()]||or[e.toLowerCase()]||e.toUpperCase().charCodeAt(0),r9=e=>Object.keys(lo).find(t=>lo[t]===e),n9=e=>Object.keys(or).find(t=>or[t]===e),n1=e=>{r1=e||"all"},Gi=()=>r1||"all",o9=()=>ht.slice(0),i9=()=>ht.map(e=>r9(e)||n9(e)||String.fromCharCode(e)),a9=()=>{const e=[];return Object.keys(_t).forEach(t=>{_t[t].forEach(({key:n,scope:o,mods:a,shortcut:s})=>{e.push({scope:o,shortcut:s,mods:a,keys:n.split("+").map(c=>Ko(c))})})}),e},o1=e=>{const t=e.target||e.srcElement,{tagName:n}=t;let o=!0;const a=n==="INPUT"&&!["checkbox","radio","range","button","file","reset","submit","color"].includes(t.type);return(t.isContentEditable||(a||n==="TEXTAREA"||n==="SELECT")&&!t.readOnly)&&(o=!1),o},s9=e=>(typeof e=="string"&&(e=Ko(e)),ht.indexOf(e)!==-1),l9=(e,t)=>{let n,o;e||(e=Gi());for(const a in _t)if(Object.prototype.hasOwnProperty.call(_t,a))for(n=_t[a],o=0;o<n.length;)n[o].scope===e?n.splice(o,1).forEach(({element:s})=>Ic(s)):o++;Gi()===e&&n1(t||"all")};function c9(e){let t=t1(e,lo,or);e.key&&e.key.toLowerCase()==="capslock"&&(t=Ko(e.key));const n=ht.indexOf(t);if(n>=0&&ht.splice(n,1),e.key&&e.key.toLowerCase()==="meta"&&ht.splice(0,ht.length),(t===93||t===224)&&(t=91),t in Rt){Rt[t]=!1;for(const o in or)or[o]===t&&(en[o]=!1)}}var i1=(e,...t)=>{if(typeof e>"u")Object.keys(_t).forEach(n=>{Array.isArray(_t[n])&&_t[n].forEach(o=>Ja(o)),delete _t[n]}),Ic(null);else if(Array.isArray(e))e.forEach(n=>{n.key&&Ja(n)});else if(typeof e=="object")e.key&&Ja(e);else if(typeof e=="string"){let[n,o]=t;typeof n=="function"&&(o=n,n=""),Ja({key:e,scope:n,method:o,splitKey:"+"})}},Ja=({key:e,scope:t,method:n,splitKey:o="+"})=>{e1(e).forEach(a=>{const s=a.split(o),c=s.length,l=s[c-1],f=l==="*"?"*":Ko(l);if(!_t[f])return;t||(t=Gi());const h=c>1?Qh(or,s):[],p=[];_t[f]=_t[f].filter(m=>{const _=(n?m.method===n:!0)&&m.scope===t&&t9(m.mods,h);return _&&p.push(m.element),!_}),p.forEach(m=>Ic(m))})};function a1(e,t,n,o){if(t.element!==o)return;let a;if(t.scope===n||t.scope==="all"){a=t.mods.length>0;for(const s in Rt)Object.prototype.hasOwnProperty.call(Rt,s)&&(!Rt[s]&&t.mods.indexOf(+s)>-1||Rt[s]&&t.mods.indexOf(+s)===-1)&&(a=!1);(t.mods.length===0&&!Rt[16]&&!Rt[18]&&!Rt[17]&&!Rt[91]||a||t.shortcut==="*")&&(t.keys=[],t.keys=t.keys.concat(ht),t.method(e,t)===!1&&(e.preventDefault?e.preventDefault():e.returnValue=!1,e.stopPropagation&&e.stopPropagation(),e.cancelBubble&&(e.cancelBubble=!0)))}}function s1(e,t){const n=_t["*"];let o=t1(e,lo,or);if(e.key&&e.key.toLowerCase()==="capslock"||!(en.filter||o1).call(this,e))return;if((o===93||o===224)&&(o=91),ht.indexOf(o)===-1&&o!==229&&ht.push(o),["metaKey","ctrlKey","altKey","shiftKey"].forEach(l=>{const f=Hi[l];e[l]&&ht.indexOf(f)===-1?ht.push(f):!e[l]&&ht.indexOf(f)>-1?ht.splice(ht.indexOf(f),1):l==="metaKey"&&e[l]&&(ht=ht.filter(h=>h in Hi||h===o))}),o in Rt){Rt[o]=!0;for(const l in or)if(Object.prototype.hasOwnProperty.call(or,l)){const f=Hi[or[l]];en[l]=e[f]}if(!n)return}for(const l in Rt)Object.prototype.hasOwnProperty.call(Rt,l)&&(Rt[l]=e[Hi[l]]);e.getModifierState&&!(e.altKey&&!e.ctrlKey)&&e.getModifierState("AltGraph")&&(ht.indexOf(17)===-1&&ht.push(17),ht.indexOf(18)===-1&&ht.push(18),Rt[17]=!0,Rt[18]=!0);const a=Gi();if(n)for(let l=0;l<n.length;l++)n[l].scope===a&&(e.type==="keydown"&&n[l].keydown||e.type==="keyup"&&n[l].keyup)&&a1(e,n[l],a,t);if(!(o in _t))return;const s=_t[o],c=s.length;for(let l=0;l<c;l++)if((e.type==="keydown"&&s[l].keydown||e.type==="keyup"&&s[l].keyup)&&s[l].key){const f=s[l],{splitKey:h}=f,p=f.key.split(h),m=[];for(let _=0;_<p.length;_++)m.push(Ko(p[_]));m.sort().join("")===ht.sort().join("")&&a1(e,f,a,t)}}var en=function e(t,n,o){ht=[];const a=e1(t);let s=[],c="all",l=document,f=0,h=!1,p=!0,m="+",_=!1,v=!1;if(o===void 0&&typeof n=="function"&&(o=n),Object.prototype.toString.call(n)==="[object Object]"){const y=n;y.scope&&(c=y.scope),y.element&&(l=y.element),y.keyup&&(h=y.keyup),y.keydown!==void 0&&(p=y.keydown),y.capture!==void 0&&(_=y.capture),typeof y.splitKey=="string"&&(m=y.splitKey),y.single===!0&&(v=!0)}for(typeof n=="string"&&(c=n),v&&i1(t,c);f<a.length;f++){const y=a[f].split(m);s=[],y.length>1&&(s=Qh(or,y));let w=y[y.length-1];w=w==="*"?"*":Ko(w),w in _t||(_t[w]=[]),_t[w].push({keyup:h,keydown:p,scope:c,mods:s,shortcut:a[f],method:o,key:a[f],splitKey:m,element:l})}if(typeof l<"u"&&typeof window<"u"){if(!mn.has(l)){const y=(b=window.event)=>s1(b,l),w=(b=window.event)=>{s1(b,l),c9(b)};mn.set(l,{keydownListener:y,keyupListenr:w,capture:_}),xc(l,"keydown",y,_),xc(l,"keyup",w,_)}if(!Fi){const y=()=>{ht=[]};Fi={listener:y,capture:_},xc(window,"focus",y,_)}if(!jo&&typeof document<"u"){const y=()=>{ht=[];for(const S in Rt)Rt[S]=!1;for(const S in or)e[S]=!1},w=y,b=y;document.addEventListener("fullscreenchange",w),document.addEventListener("webkitfullscreenchange",b),jo={fullscreen:w,webkit:b}}}};function u9(e,t="all"){Object.keys(_t).forEach(n=>{_t[n].filter(o=>o.scope===t&&(o.shortcut===e||o.shortcut==="*")).forEach(o=>{o&&o.method&&o.method({},o)})})}function Ic(e){const t=Object.values(_t).flat();if(t.findIndex(({element:n})=>n===e)<0&&e){const{keydownListener:n,keyupListenr:o,capture:a}=mn.get(e)||{};n&&o&&(Bi(e,"keyup",o,a),Bi(e,"keydown",n,a),mn.delete(e))}if(t.length<=0||mn.size<=0){if(Array.from(mn.keys()).forEach(n=>{const{keydownListener:o,keyupListenr:a,capture:s}=mn.get(n)||{};o&&a&&(Bi(n,"keyup",a,s),Bi(n,"keydown",o,s),mn.delete(n))}),mn.clear(),Object.keys(_t).forEach(n=>delete _t[n]),Fi){const{listener:n,capture:o}=Fi;Bi(window,"focus",n,o),Fi=null}jo&&typeof document<"u"&&(document.removeEventListener("fullscreenchange",jo.fullscreen),document.removeEventListener("webkitfullscreenchange",jo.webkit),jo=null)}}var Cc={getPressedKeyString:i9,setScope:n1,getScope:Gi,deleteScope:l9,getPressedKeyCodes:o9,getAllKeyCodes:a9,isPressed:s9,filter:o1,trigger:u9,unbind:i1,keyMap:lo,modifier:or,modifierMap:Hi};for(const e in Cc){const t=e;Object.prototype.hasOwnProperty.call(Cc,t)&&(en[t]=Cc[t])}if(typeof window<"u"){const e=window.hotkeys;en.noConflict=t=>(t&&window.hotkeys===en&&(window.hotkeys=e),en),window.hotkeys=en}function l1(){const e=fe("chapter").value;if(X("viewMode").startsWith("Fluid")){const t=X("viewMode")==="FluidRTL"?-1:1;e?.scrollBy({top:0,left:X("scrollHeight")*t,behavior:"smooth"}),e&&e.scrollLeft+e.clientWidth>=e.scrollWidth-2&&(De("autoScroll",!1),Ee("Finished auto scroll"))}else window.scrollBy({top:X("scrollHeight"),left:0,behavior:"smooth"}),window.scrollY+window.innerHeight>=document.documentElement.scrollHeight&&(De("autoScroll",!1),Ee("Finished auto scroll"));fe("autoScroll")&&requestAnimationFrame(l1)}function Qa(){fe("autoScroll")?(De("autoScroll",!1),Ee("Stopped auto scroll")):(De("autoScroll",!0),requestAnimationFrame(l1),Ee("Start auto scroll"))}var es=!1,d9=xe.default.debounce(()=>{Qa(),es=!1},500);function h9(){!es&&fe("autoScroll")&&(Qa(),es=!0),es&&!fe("autoScroll")&&d9()}function f9(){window.addEventListener("wheel",xe.default.throttle(h9,500))}var tn=class extends rt{constructor(...t){super(...t),this.open=!1,this.mode="dialog",this.fullscreen=!1,this.label="",this.withoutHeader=!1,this.lightDismiss=!0}static{this.styles=Et`
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
  `}close(){this.open=!1}handleCancel(t){t.preventDefault(),this.close()}handleBackdropClick(){this.mode!=="inline"&&this.lightDismiss&&this.close()}handleClick(t){this.mode!=="inline"&&this.lightDismiss&&t.target===this.dialog&&this.close()}updated(t){this.mode!=="inline"&&t.has("open")&&(this.open?(this.dialog.classList.remove("closing"),this.dialog.show(),this.dispatchEvent(new CustomEvent("open",{bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent("wa-show",{bubbles:!0,composed:!0})),setTimeout(()=>{this.dispatchEvent(new CustomEvent("wa-after-show",{bubbles:!0,composed:!0}))},150)):t.get("open")===!0&&(this.dispatchEvent(new CustomEvent("close",{bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent("wa-hide",{bubbles:!0,composed:!0})),this.dialog.classList.add("closing"),setTimeout(()=>{this.dialog.classList.remove("closing"),this.dialog.open&&this.dialog.close(),this.dispatchEvent(new CustomEvent("wa-after-hide",{bubbles:!0,composed:!0}))},300)))}render(){return ne`
      <div
        class="backdrop"
        @click=${this.handleBackdropClick}
      ></div>
      <dialog
        part="dialog"
        @cancel=${this.handleCancel}
        @click=${this.handleClick}
      >
        ${this.withoutHeader?"":ne`
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
                ${Ac}
              </button>
            </div>
          </div>
        `}
        <div class="content-slot" part="body">
          ${this.icon?ne`
                <div class="icon-container">
                  <mov-icon
                    .name=${p9(this.icon)}
                    size="4rem"
                  ></mov-icon>
                </div>
              `:""}
          <slot></slot>
        </div>
        <slot name="footer" part="footer"></slot>
      </dialog>
    `}};z([K({type:Boolean,reflect:!0})],tn.prototype,"open",void 0),z([K({type:String,reflect:!0})],tn.prototype,"mode",void 0),z([K({type:Boolean,reflect:!0})],tn.prototype,"fullscreen",void 0),z([K({type:String,reflect:!0})],tn.prototype,"label",void 0),z([K({type:Boolean,reflect:!0,attribute:"without-header"})],tn.prototype,"withoutHeader",void 0),z([K({type:Boolean,reflect:!0,attribute:"light-dismiss"})],tn.prototype,"lightDismiss",void 0),z([K({type:String,reflect:!0})],tn.prototype,"icon",void 0),z([An("dialog")],tn.prototype,"dialog",void 0),tn=z([ct("mov-dialog")],tn);function Oc(e){const t=()=>De("dialog",null);e.timer&&setTimeout(t,e.timer),De("dialog",{open:!0,icon:e.icon,title:e.title,content:ne`<div style="padding: 1rem;">${Rd(e.html)}</div>`,footer:ne`
      <div
        slot="footer"
        style="display: flex; justify-content: flex-end; padding: 0.5rem 1rem 1rem;"
      >
        <mov-button @click=${t}>OK</mov-button>
      </div>
    `})}function p9(e){switch(e){case"info":return"info-circle";case"warning":return"alert-circle";case"success":return"circle-check";case"error":return"circle-x";case"question":return"help";default:return""}}function m9(e){const t=e.currentTarget.value;Bd(t==="true")}function g9(e){const t=e.currentTarget.value;At("locale",t)}function v9(e){const t=e.currentTarget.value;At("loadMode",t)}function b9(e){const t=e.detail.checked;At("fitWidthIfOversize",t)}function w9(e){const t=e.currentTarget.value;At("navbar",t)}function _9(e){const t=e.currentTarget.value;At("pagination",t)}function y9(e){const t=e.detail.checked;At("downloadZip",t),t&&Oc({title:Z("ATTENTION"),html:Z("AUTO_DOWNLOAD"),timer:1e4,icon:"info"})}function k9(e){const t=e.detail.checked;At("lazyLoadImages",t),t&&Oc({title:Z("WARNING"),html:Z("LAZY_LOAD"),icon:"warning"})}function E9(e){const t=e.detail.value;At("lazyStart",typeof t=="string"?parseInt(t,10):t)}function S9(e){const t=e.currentTarget.value;At("loadSpeed",t),["Extreme","All"].includes(t)&&Oc({title:Z("SPEED_WARNING"),html:Z("SPEED_WARNING_MESSAGE"),icon:"warning"})}function A9(e){const t=e.detail.value;At("zoomStep",typeof t=="string"?parseInt(t,10):t)}function M9(e){const t=e.detail.value,n=typeof t=="string"?parseInt(t,10):t;c4("MinZoom",`#MangaOnlineViewer .PageContent .PageImg {min-width: ${n}vw;}`),At("minZoom",n)}function x9(e){const t=e.detail.checked;At("hidePageControls",t)}function I9(e){const t=e.currentTarget.value;At("header",t)}function C9(e){const t=e.detail.value;At("scrollHeight",typeof t=="string"?parseInt(t,10):t)}function c1(e){Co("scrollHeight",t=>{const n=t+e*25;if(n<=0)return 0;const o=Math.ceil(window.innerHeight/200)*100;return n>=o?o:n})}function O9(e){const t=e.currentTarget.value;At("deviceMode",t),De("device",kl(t))}function T9(){const e=X("navbar");return e==="left"||e==="right"?window.innerWidth-34:window.innerWidth}function L9(){return X("navbar")==="bottom"?window.innerHeight-34:window.innerHeight}function u1(e,t=X("zoomMode"),n=X("zoomValue")){const o=T9(),a=L9();if(t==="width")e.width=o,e.height=void 0;else if(t==="height")e.width=void 0,e.height=a;else if(t==="percent"){const s=e.naturalWidth??e.ref?.value?.naturalWidth;e.width=s?s*(n/100):void 0,e.height=void 0}return e}function Pn(e=X("zoomMode"),t=X("zoomValue")){Ee("Zoom",e,t),Io("zoomMode",e),Io("zoomValue",t),e==="height"?De("scrollToPage",fe("currentPage")):oo("header");const n=fe("images"),o=fe("manga"),a={};for(let s=o?.begin??1;s<=(o?.pages??1);s++)a[s]=u1({...n?.[s]},e,t);De("images",a)}function Yo(e,t=X("zoomValue")){return()=>{Pn(e,t)}}function ts(e=1){return()=>{const t=X("zoomValue")+e*X("zoomStep");t>0&&t<500&&Pn("percent",t)}}function R9(e){const t=e.currentTarget.value;At("zoomMode",t)}function P9(e){const t=e.detail.value,n=typeof t=="string"?parseInt(t,10):t;At("zoomValue",n),Pn("percent",n)}function $9(e){const t=e.detail.value;Pn("percent",typeof t=="string"?parseInt(t,10):t)}function _r(e){return()=>{Io("viewMode",e),["FluidLTR","FluidRTL","Book","Manga"].includes(e)?(Io("zoomMode","height"),Io("header","click"),Pn("height")):(oo("zoomMode"),oo("zoomValue"),oo("header")),Pn()}}function D9(e){const t=e.currentTarget.value;At("viewMode",t),_r(t)()}function z9(e){const t=X("viewMode")==="FluidRTL"?-1:1;fe("chapter").value?.scrollBy({left:.8*window.innerWidth*e*t,behavior:"smooth"})}function N9(e){const t=fe("currentPage")+e;t<0?De("scrollToPage",0):t>(fe("manga")?.pages??1)||De("scrollToPage",t)}function B9(e){window.scrollBy({top:.8*window.innerHeight*e,behavior:"smooth"})}function H9(e){const t=fe("currentPage"),n=fe("manga");if(!n)return;const o=fe("images")??{},a=n.begin??1,s=n.pages??1,c=f=>{if(f<a||f>s)return!1;if(o[f]?.doublePage)return!0;let h=0;for(let p=f-1;p>=a&&!o[p]?.doublePage;p--)h++;return h%2===0};let l;if(e===1)for(l=t+1;l<=s&&!c(l);)l++;else if(c(t))for(l=t-1;l>a&&!c(l);)l--;else for(l=t;l>a&&!c(l);)l--;l<a?De("scrollToPage",0):l>s?De("scrollToPage",s):De("scrollToPage",l)}function d1(e){const t=X("viewMode"),n=X("zoomMode");Ee("Scrolling view",t,"zoom",n,"sign",e),t.match(/^(Book|Manga)$/)&&n==="height"?H9(e):t.startsWith("Fluid")?z9(e):n==="height"?N9(e):B9(e)}function Wi(e){const t=fe("manga")?.[e];t&&t!=="#"?window.location.href=(0,Xh.sanitizeUrl)(t):e==="series"&&(Qs()?window.location.href=window.location.pathname:window.history.back())}var F9={SCROLL_UP(){d1(-1)},SCROLL_DOWN(){d1(1)},NEXT_CHAPTER(){Wi("next")},PREVIOUS_CHAPTER(){Wi("prev")},RETURN_CHAPTER_LIST(){Wi("series")},ENLARGE(){ts(1)()},REDUCE(){ts(-1)()},RESTORE(){Yo("percent",100)()},FIT_WIDTH(){Yo("width")()},FIT_HEIGHT(){Yo("height")()},SETTINGS(){Nd("panel",e=>e==="none"?"settings":"none")},VIEW_MODE_WEBCOMIC(){_r("WebComic")()},VIEW_MODE_VERTICAL(){_r("Vertical")()},VIEW_MODE_LEFT(){_r("FluidRTL")()},VIEW_MODE_RIGHT(){_r("FluidLTR")()},VIEW_MODE_GALLERY(){_r("Gallery")()},SCROLL_START(){Qa()},INCREASE_SPEED(){c1(1)},DECREASE_SPEED(){c1(-1)},TOGGLE_CONTROLS(){Co("hidePageControls",e=>!e)}};function h1(){document.onkeydown=null,document.onkeyup=null,window.onkeydown=null,window.onkeyup=null,window.onload=null,document.body.onload=null,en.unbind(),xe.default.keys(X("keybinds")).forEach(e=>{en(X("keybinds")[e]?.join(",")??"",xe.default.throttle(t=>{fe("panel")!=="keybindingsEditor"&&(t.preventDefault(),t.stopImmediatePropagation(),t.stopPropagation(),F9[e]())},100))})}var $n=class extends rt{constructor(...t){super(...t),this.mode="disabled",this.currentPage=1,this.totalPages=1,this.startPage=1}static{this.styles=Et`
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
  `}get isFirstPage(){return this.currentPage<=this.startPage}get isLastPage(){return this.currentPage>=this.totalPages-(1-this.startPage)}renderSlider(){return ne`
      <div class="slider-pagination">
        <button
          class="pagination-button"
          @click=${Ni}
          value="${this.prev}"
          ?disabled=${Ir(this.prev)||this.prev==="#"}
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
            @input="${Q6}"
          ></mov-slider>
        </div>

        <button class="pagination-button" @click=${this.goToNextPage} ?disabled=${this.isLastPage}>
          <mov-icon name="chevron-right"></mov-icon>
          <div class="tooltip">Next Page</div>
        </button>

        <button
          class="pagination-button"
          @click=${Ni}
          value="${this.next}"
          ?disabled=${Ir(this.next)||this.next==="#"}
        >
          <mov-icon name="arrow-big-right"></mov-icon>
          <div class="tooltip">Next Chapter</div>
        </button>
      </div>
    `}renderSideArrows(){return ne`
      <div class="arrows-pagination">
        <button
          class="side-arrow left"
          @click=${this.handleLeftArrowClick}
          ?disabled=${this.isFirstPage&&(Ir(this.prev)||this.prev==="#")}
        >
          <mov-icon name="chevron-left"></mov-icon>
        </button>
        <button
          class="side-arrow right"
          @click=${this.handleRightArrowClick}
          ?disabled=${this.isLastPage&&(Ir(this.next)||this.next==="#")}
        >
          <mov-icon name="chevron-right"></mov-icon>
        </button>
      </div>
    `}render(){if(this.mode==="disabled")return He;const t=this.mode==="slider"||this.mode==="both",n=this.mode==="side-arrows"||this.mode==="both";return ne`
      ${t?this.renderSlider():He} ${n?this.renderSideArrows():He}
    `}handleLeftArrowClick(){this.isFirstPage?Wi("prev"):this.goToPreviousPage()}handleRightArrowClick(){this.isLastPage?Wi("next"):this.goToNextPage()}goToPreviousPage(){this.goToPage(this.currentPage-1)}goToNextPage(){this.goToPage(this.currentPage+1)}goToPage(t){De("scrollToPage",t)}};z([K({type:String})],$n.prototype,"mode",void 0),z([K({type:Number})],$n.prototype,"currentPage",void 0),z([K({type:Number})],$n.prototype,"totalPages",void 0),z([K({type:Number})],$n.prototype,"startPage",void 0),z([K({type:String})],$n.prototype,"next",void 0),z([K({type:String})],$n.prototype,"prev",void 0),$n=z([ct("manga-pagination")],$n);var Dn=class extends rt{constructor(...t){super(...t),this.open=!1,this.placement="end",this.label="",this.withoutHeader=!1,this.lightDismiss=!0}static{this.styles=Et`
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
  `}close(){this.open=!1}handleCancel(t){t.preventDefault(),this.close()}handleBackdropClick(){this.lightDismiss&&this.close()}handleClick(t){this.lightDismiss&&t.target===this.dialog&&this.close()}updated(t){t.has("open")&&(this.open?(this.dialog.classList.remove("closing"),this.dialog.show(),this.dispatchEvent(new CustomEvent("open",{bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent("wa-show",{bubbles:!0,composed:!0})),setTimeout(()=>{this.dispatchEvent(new CustomEvent("wa-after-show",{bubbles:!0,composed:!0}))},250)):t.get("open")===!0&&(this.dispatchEvent(new CustomEvent("close",{bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent("wa-hide",{bubbles:!0,composed:!0})),this.dialog.classList.add("closing"),setTimeout(()=>{this.dialog.classList.remove("closing"),this.dialog.open&&this.dialog.close(),this.dispatchEvent(new CustomEvent("wa-after-hide",{bubbles:!0,composed:!0}))},300)))}render(){return ne`
      <div
        class="backdrop"
        @click=${this.handleBackdropClick}
      ></div>
      <dialog
        part="dialog"
        @cancel=${this.handleCancel}
        @click=${this.handleClick}
      >
        ${this.withoutHeader?"":ne`
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
                ${Ac}
              </button>
            </div>
          </div>
        `}
        <slot class="content-slot" part="body"></slot>
        <slot name="footer" class="footer-slot" part="footer"></slot>
      </dialog>
    `}};z([K({type:Boolean,reflect:!0})],Dn.prototype,"open",void 0),z([K({type:String,reflect:!0})],Dn.prototype,"placement",void 0),z([K({type:String,reflect:!0})],Dn.prototype,"label",void 0),z([K({type:Boolean,reflect:!0,attribute:"without-header"})],Dn.prototype,"withoutHeader",void 0),z([K({type:Boolean,reflect:!0,attribute:"light-dismiss"})],Dn.prototype,"lightDismiss",void 0),z([An("dialog")],Dn.prototype,"dialog",void 0),Dn=z([ct("mov-drawer")],Dn);var co=class extends rt{static{this.styles=Et`
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
  `}constructor(){super(),this.open=!1,this.checkable=!1,this.distance=0,this.skidding=0,this.placement="bottom-start",this.boundClickHandler=this.handleClickOutside.bind(this)}connectedCallback(){super.connectedCallback(),document.addEventListener("click",this.boundClickHandler)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("click",this.boundClickHandler)}handleClickOutside(t){this.open&&!t.composedPath().includes(this)&&this.hide()}show(){this.open||(this.open=!0,this.dispatchEvent(new CustomEvent("wa-show",{bubbles:!0,composed:!0})),setTimeout(()=>{this.dispatchEvent(new CustomEvent("wa-after-show",{bubbles:!0,composed:!0}))},150))}hide(){this.open&&(this.open=!1,this.dispatchEvent(new CustomEvent("wa-hide",{bubbles:!0,composed:!0})),setTimeout(()=>{this.dispatchEvent(new CustomEvent("wa-after-hide",{bubbles:!0,composed:!0}))},150))}toggle(){this.open?this.hide():this.show()}render(){return ne`
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
    `}};z([K({type:Boolean,reflect:!0})],co.prototype,"open",void 0),z([K({type:Boolean,reflect:!0})],co.prototype,"checkable",void 0),z([K({type:Number})],co.prototype,"distance",void 0),z([K({type:Number})],co.prototype,"skidding",void 0),z([K({type:String})],co.prototype,"placement",void 0),co=z([ct("mov-dropdown")],co);var zn=class extends rt{constructor(...t){super(...t),this.selected=!1,this.checked=!1,this.disabled=!1,this.value="",this.variant="default",this.type="normal"}static{this.styles=Et`
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
  `}handleSelect(){this.disabled||this.dispatchEvent(new CustomEvent("wa-select",{detail:{item:this},bubbles:!0,composed:!0}))}render(){return ne`
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
    `}};z([K({type:Boolean,reflect:!0})],zn.prototype,"selected",void 0),z([K({type:Boolean,reflect:!0})],zn.prototype,"checked",void 0),z([K({type:Boolean,reflect:!0})],zn.prototype,"disabled",void 0),z([K({type:String})],zn.prototype,"value",void 0),z([K({type:String,reflect:!0})],zn.prototype,"variant",void 0),z([K({type:String,reflect:!0})],zn.prototype,"type",void 0),zn=z([ct("mov-dropdown-item")],zn);var Tc=class extends rt{constructor(...t){super(...t),this.orientation="horizontal"}static{this.styles=Et`
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
  `}render(){return ne`<div
      class="divider"
      role="separator"
    ></div>`}};z([K({type:String,reflect:!0})],Tc.prototype,"orientation",void 0),Tc=z([ct("mov-divider")],Tc);var f1="kbd,.key{white-space:nowrap;text-align:center;background-color:#505050;background-color:gradient(linear, left top, left bottom, from(#3c3c3c), to(#505050));color:#fafafa;text-shadow:-1px -1px #464646;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border:none;border-radius:.3em;min-width:1em;padding:.3em .4em .2em .3em;font-family:Lucida Grande,Lucida,Arial,sans-serif;font-size:.85em;font-style:normal;line-height:1;text-decoration:none;display:inline-block;-webkit-box-shadow:inset 0 0 1px #969696,inset 0 -.05em .4em #505050,0 .1em #1e1e1e,0 .1em .1em #0000004d;box-shadow:inset 0 0 1px #969696,inset 0 -.05em .4em #505050,0 .1em #1e1e1e,0 .1em .1em #0000004d}kbd[title],.key[title]{cursor:help}kbd.dark,.dark-keys kbd,.key.dark,.dark-keys .key{white-space:nowrap;text-align:center;background-color:#505050;background-color:gradient(linear, left top, left bottom, from(#3c3c3c), to(#505050));color:#fafafa;text-shadow:-1px -1px #464646;border:none;border-radius:.3em;min-width:1em;padding:.3em .4em .2em .3em;font-family:Lucida Grande,Lucida,Arial,sans-serif;font-style:normal;text-decoration:none;display:inline-block;-webkit-box-shadow:inset 0 0 1px #969696,inset 0 -.05em .4em #505050,0 .1em #1e1e1e,0 .1em .1em #0000004d;box-shadow:inset 0 0 1px #969696,inset 0 -.05em .4em #505050,0 .1em #1e1e1e,0 .1em .1em #0000004d}kbd.light,.light-keys kbd,.key.light,.light-keys .key{white-space:nowrap;text-align:center;background-color:#fafafa;background-color:gradient(linear, left top, left bottom, from(#d2d2d2), to(#fff));color:#323232;text-shadow:0 0 2px #fff;border:none;border-radius:.3em;min-width:1em;padding:.3em .4em .2em .3em;font-family:Lucida Grande,Lucida,Arial,sans-serif;font-style:normal;text-decoration:none;display:inline-block;-webkit-box-shadow:inset 0 0 1px #fff,inset 0 0 .4em #c8c8c8,0 .1em #828282,0 .11em #0006,0 .1em .11em #000000e6;box-shadow:inset 0 0 1px #fff,inset 0 0 .4em #c8c8c8,0 .1em #828282,0 .11em #0006,0 .1em .11em #000000e6}kbd.so,.so-keys kbd,.key.so,.so-keys .key{white-space:nowrap;text-align:center;color:#242729;text-shadow:0 1px #fff;background-color:#e1e3e5;border:1px solid #adb3b9;border-radius:.272727em;min-width:1em;margin:0 .1em;padding:.1em .6em;font-family:Arial,Helvetica Neue,Helvetica,sans-serif;font-style:normal;line-height:1.4;text-decoration:none;display:inline-block;-webkit-box-shadow:0 1px #0c0d0e33,inset 0 0 0 2px #fff;box-shadow:0 1px #0c0d0e33,inset 0 0 0 2px #fff}kbd.github,.github-keys kbd,.key.github,.github-keys .key{white-space:nowrap;text-align:center;color:#444d56;vertical-align:middle;-webkit-box-sizing:border-box;box-sizing:border-box;min-width:1em;text-shadow:none;background-color:#fafbfc;border:1px solid #c6cbd1;border-bottom-color:#959da5;border-radius:.272727em;padding:.272727em .454545em;font-family:SFMono-Regular,Consolas,Liberation Mono,Menlo,Courier,monospace;font-size:68.75%;font-style:normal;line-height:.909091;text-decoration:none;display:inline-block;-webkit-box-shadow:inset 0 -1px #959da5;box-shadow:inset 0 -1px #959da5}",G9=xr((e=>{Object.defineProperty(e,"__esModule",{value:!0}),e.StoreController=void 0;var t=class{constructor(n,o){this.host=n,this.atom=o,n.addController(this)}hostConnected(){this.unsubscribe=this.atom.subscribe(()=>{this.host.requestUpdate()})}hostDisconnected(){var n;(n=this.unsubscribe)===null||n===void 0||n.call(this)}get value(){return this.atom.get()}};e.StoreController=t})),Lc=xr((e=>{Object.defineProperty(e,"__esModule",{value:!0}),e.MultiStoreController=void 0;var t=class{constructor(n,o){this.host=n,this.atoms=o,n.addController(this)}hostConnected(){this.unsubscribes=this.atoms.map(n=>n.subscribe(()=>this.host.requestUpdate()))}hostDisconnected(){var n;(n=this.unsubscribes)===null||n===void 0||n.forEach(o=>o())}get values(){return this.atoms.map(n=>n.get())}};e.MultiStoreController=t})),W9=xr((e=>{Object.defineProperty(e,"__esModule",{value:!0}),e.useStores=void 0;var t=Lc();function n(...o){return a=>class extends a{constructor(...s){super(...s),new t.MultiStoreController(this,o)}}}e.useStores=n})),U9=xr((e=>{Object.defineProperty(e,"__esModule",{value:!0}),e.withStores=void 0;var t=Lc(),n=(o,a)=>class extends o{constructor(...c){super(...c),new t.MultiStoreController(this,a)}};e.withStores=n})),V9=xr((e=>{Object.defineProperty(e,"__esModule",{value:!0}),e.withStores=e.useStores=e.MultiStoreController=e.StoreController=void 0;var t=G9();Object.defineProperty(e,"StoreController",{enumerable:!0,get:function(){return t.StoreController}});var n=Lc();Object.defineProperty(e,"MultiStoreController",{enumerable:!0,get:function(){return n.MultiStoreController}});var o=W9();Object.defineProperty(e,"useStores",{enumerable:!0,get:function(){return o.useStores}});var a=U9();Object.defineProperty(e,"withStores",{enumerable:!0,get:function(){return a.withStores}})})),Xo=V9(),p1=class extends rt{static{this.styles=Et`
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
  `}render(){return ne`
      <div
        class="button-group"
        role="group"
      >
        <slot></slot>
      </div>
    `}};p1=z([ct("mov-button-group")],p1);var rs=49,q9=100,Z9=class bp{constructor(t){this.prevOffset=0,this.headroom="top",this.headerVisible=!0,this.handleScroll=xe.default.throttle(()=>{if(this.isAnyDropdownOpen()){this.prevOffset=window.scrollY;return}const o=X("header"),{scrollY:a}=window;let s="none";X("zoomMode")!=="height"&&a+window.innerHeight+q9>document.body.scrollHeight?s="end":a>this.prevOffset&&a>rs?s="hide":o==="scroll"&&a<this.prevOffset&&a>rs?s="show":o!=="click"&&a<=rs&&(s="top");let c=!1;if(this.headroom!==s&&(this.headroom=s,c=!0),o==="scroll"){const l=s!=="hide";this.headerVisible!==l&&(this.headerVisible=l,c=!0)}c&&this.host.requestUpdate(),this.prevOffset=a},300),this.handleMouseMove=xe.default.throttle(o=>{if(this.isAnyDropdownOpen()){this.headerVisible||(this.headerVisible=!0,this.host.requestUpdate());return}if(["hover","scroll"].includes(X("header"))){const a=bp.isMouseInsideRegion(o,window.innerWidth,rs*1.5);this.headerVisible!==a&&(this.headerVisible=a,this.host.requestUpdate())}},300),this.toggleHeaderVisibility=()=>{X("header")==="click"&&(this.headerVisible=!this.headerVisible,this.host.requestUpdate())},this.host=t,t.addController(this);const n=X("header");X("zoomMode")==="height"&&["click","hover"].includes(n)&&(this.headerVisible=!1)}hostConnected(){window.addEventListener("scroll",this.handleScroll),window.addEventListener("mousemove",this.handleMouseMove)}hostDisconnected(){window.removeEventListener("scroll",this.handleScroll),window.removeEventListener("mousemove",this.handleMouseMove)}isAnyDropdownOpen(){if(!this.host.shadowRoot)return!1;const t=this.host.shadowRoot.querySelectorAll("mov-dropdown");for(const n of t)if(n.open)return!0;return!1}static isMouseInsideRegion(t,n,o){return t.clientX>=0&&t.clientX<=n&&t.clientY>=0&&t.clientY<=o}},j9=class{constructor(e){this.canvasContext=null,this.host=e,e.addController(this);const t=document.createElement("canvas");this.canvasContext=t.getContext("2d"),this.resizeObserver=new ResizeObserver(()=>this.update())}hostConnected(){}hostDisconnected(){this.resizeObserver.disconnect()}observe(e,t){!e||!t||(this.element=e,this.text=t,this.resizeObserver.disconnect(),this.resizeObserver.observe(this.element),this.update())}update(){if(!this.element||!this.text||!this.canvasContext){this.value=this.text,this.host.requestUpdate();return}const e=window.getComputedStyle(this.element);this.canvasContext.font=`${e.fontWeight} ${e.fontSize} ${e.fontFamily}`;const t=this.text,n=this.element.clientWidth;if(this.canvasContext.measureText(t).width<=n){this.value=t,this.host.requestUpdate();return}const o="...",a=n-this.canvasContext.measureText(o).width;let s="",c="";for(let l=1;l<t.length;l++){const f=t.substring(0,l),h=t.substring(t.length-l);if(this.canvasContext.measureText(f).width+this.canvasContext.measureText(h).width>a)break;s=f,c=h}this.value=`${s}${o}${c}`,this.host.requestUpdate()}};function m1(e=window.location.href){Ir(Oo(e))||(Ee(`Bookmark Removed ${e}`),Co("bookmarks",t=>[...t.filter(n=>n.url!==e)]))}function K9(e){const t=e.currentTarget.value;Ee(`Bookmark Removed ${t}`),dr.error({title:Z("BOOKMARK_REMOVED"),duration:1e4}),m1(t)}function Y9(){De("panel","bookmarks")}function g1(){const e=fe("currentPage"),t={name:fe("manga")?.title??document.documentElement.title??window.location.hostname,url:window.location.href,page:e,date:new Date().toISOString().slice(0,10)};Oo(t.url)?(Co("bookmarks",n=>[...n.filter(o=>o.url!==t.url)]),dr.error({title:Z("BOOKMARK_REMOVED"),duration:1e4})):(Co("bookmarks",n=>[...n,t]),dr.success({title:Z("BOOKMARK_SAVED"),description:Z("BOOKMARK_MESSAGE").replace("##num##",e.toString()),duration:1e4}))}function Rc(){De("panel","none")}function X9(){De("panel","settings")}function J9(){De("panel","keybindings")}function Q9(e){const t={};xe.default.keys(e).forEach(n=>{const o=e[n].value;if(o){const a=o.value.split(",").map(s=>s.trim()).filter(s=>s!=="");t[n]=a.length>0?a:void 0}}),At("keybinds",t),De("panel","keybindings"),h1()}function e7(){De("panel","keybindingsEditor")}var t7="#Header{background-color:var(--theme-background-color);z-index:900;flex-flow:row;justify-content:space-around;align-items:center;gap:10px;padding:0 20px;transition:transform .3s ease-in;display:flex;position:sticky;top:0;left:0;right:0;box-shadow:0 0 25px #00000080}#Header.click{padding-left:60px}@keyframes headroom{0%{transform:translateY(-100%)}to{transform:translateY(0%)}}#Header:not(.visible,.headroom-top,.fixed,.simple){animation:.3s ease-in reverse headroom;position:sticky;top:0;transform:translateY(-100%)}#Header.scroll.headroom-hide:not(.visible){animation:none;position:sticky;top:0;transform:translateY(-100%)}#Header.scroll.headroom-show,#Header.headroom-end,#Header.visible{animation:.3s ease-in headroom;position:sticky;top:0;transform:translateY(0%)}#Header.headroom-top{animation:none}#Header.fixed{animation:none;position:sticky;top:0;transform:translateY(0%)}#Header.simple{animation:none;position:static;top:0;transform:translateY(0%)}#menu{z-index:1;color:var(--theme-body-text-color);width:40px;height:40px;position:fixed}#menu:not(.click),#menu.hide{display:none}#menu.click{z-index:901;opacity:.8;top:25px;left:5px}#Toolbar{order:1}#GlobalFunctions{order:4}#ViewerTitle{order:2;justify-content:center;display:flex}#ZoomControl{flex-direction:column;order:3;align-items:center;gap:3px;min-width:100px;padding:10px 5px;display:flex}#MangaTitle{word-wrap:anywhere;white-space:nowrap;text-overflow:ellipsis;min-width:200px;max-width:40vw;margin:0;padding:2px;font-size:19px;font-weight:400;overflow:hidden}",v1="#Header.mobile,#Header.tablet{flex-flow:wrap;justify-content:center;gap:0;display:flex}.mobile #ViewerTitle,.tablet #ViewerTitle{order:4;min-height:auto}.mobile #Toolbar,.tablet #Toolbar{order:1}#Header.mobile{flex-flow:wrap;justify-content:center;align-items:center}#Header.mobile.click+#Chapter:not(.webcomic,.vertical){position:sticky}.tablet #MangaTitle,.mobile #MangaTitle{max-width:90vw}.mobile #ViewerTitle{order:3;height:auto;margin-top:0;padding:0}.mobile #GlobalFunctions,.tablet #GlobalFunctions{order:2}.mobile .PageFunctions{padding:0}.mobile .PageFunctions .PageButton.Bookmark{opacity:1}.mobile #GlobalFunctions #ZoomSlider,.tablet #GlobalFunctions #ZoomSlider,.mobile .PageFunctions .PageButton:not(.Bookmark),.tablet #Counters,.mobile #ZoomControl,.mobile #ZoomDropdown,.mobile #ViewDropdown,.mobile #FileDropdown :where(:nth-child(3),:nth-child(4)),.mobile #BookMode,.mobile #MangaMode,.tablet #BookMode,.tablet #MangaMode{display:none}",ns=class extends rt{static{this.styles=[Me(t7),Me(v1),Me(f1),Et``]}constructor(){super(),this.headroomController=new Z9(this),this.titleController=new j9(this)}updated(t){super.updated(t),t.has("manga")&&this.manga&&requestAnimationFrame(()=>{this.manga&&this.titleController.observe(this.mangaTitleElement,this.manga?.title??"Manga Online Viewer")})}render(){if(!this.manga)return ne``;const{headroom:t,headerVisible:n}=this.headroomController,o=X("keybinds"),a=s=>{if(fe("device")!=="desktop")return He;const c=o[s];return!c||c.length===0?He:c.map(l=>ne`<kbd slot="details">${l}</kbd>`)};return ne`
      <toggle-button
        id="menu"
        mode="burger"
        class="${St({[X("header")]:!0,hide:["top","end"].includes(t)})}"
        ?active=${n}
        @toggle=${this.headroomController.toggleHeaderVisibility}
      >
      </toggle-button>
      <header
        id="Header"
        class="${St({[X("header")]:!0,[`headroom-${t}`]:!0,visible:n&&["hide","none"].includes(t),[fe("device")]:!0})}"
      >
        <mov-button-group
          id="Toolbar"
          class="${St({"button-group-merged-end":["mobile","tablet"].includes(fe("device"))})}"
        >
          <mov-dropdown id="FileDropdown">
            <mov-button
              slot="trigger"
              title="${Z("FILE_MENU")}"
            >
              <mov-icon
                label="File"
                name="IconDotsVertical"
              ></mov-icon>
            </mov-button>
            <mov-dropdown-item
              id="settings"
              @click=${X9}
            >
              <mov-icon
                slot="icon"
                name="IconSettings"
              ></mov-icon>
              ${Z("SETTINGS")} ${a("SETTINGS")}
            </mov-dropdown-item>
            <mov-dropdown-item
              id="keybindings"
              @click=${J9}
            >
              <mov-icon
                slot="icon"
                name="IconKeyboard"
              ></mov-icon>
              ${Z("KEYBINDINGS")}
            </mov-dropdown-item>
            <mov-dropdown-item
              id="bookmarks"
              class="tablets"
              @click=${Y9}
            >
              <mov-icon
                slot="icon"
                name="IconBookmarks"
              ></mov-icon>
              ${Z("BOOKMARKS")}
            </mov-dropdown-item>
            <mov-divider></mov-divider>
            <mov-dropdown-item
              id="AutoScroll"
              class="${St({running:fe("autoScroll")})}"
              @click=${Qa}
            >
              <mov-icon
                slot="icon"
                name="${fe("autoScroll")?"IconPlayerPause":"IconPlayerPlay"}"
              ></mov-icon>
              ${Z("SCROLL_START")} ${a("SCROLL_START")}
            </mov-dropdown-item>
            <mov-dropdown-item
              id="pageControls"
              class="tablets phones"
              @click="${X6}"
              ?selected=${X("hidePageControls")}
            >
              <mov-icon
                slot="icon"
                name="IconListNumbers"
              ></mov-icon>
              ${Z("TOGGLE_CONTROLS")} ${a("TOGGLE_CONTROLS")}
            </mov-dropdown-item>
          </mov-dropdown>

          <mov-dropdown
            id="ViewDropdown"
            checkable
          >
            <mov-button
              slot="trigger"
              title="${Z("VIEW_MENU")}"
            >
              <mov-icon
                label="View"
                name="IconApiBook"
              ></mov-icon>
            </mov-button>
            <mov-dropdown-item
              id="webComic"
              class="tablets"
              @click="${_r("WebComic")}"
              ?selected=${X("viewMode")==="WebComic"}
            >
              <mov-icon
                slot="icon"
                name="IconSpacingVertical"
              ></mov-icon>
              ${Z("VIEW_MODE_WEBCOMIC")} ${a("VIEW_MODE_WEBCOMIC")}
            </mov-dropdown-item>
            <mov-dropdown-item
              id="verticalMode"
              class="tablets"
              @click="${_r("Vertical")}"
              ?selected=${X("viewMode")==="Vertical"}
            >
              <mov-icon
                slot="icon"
                name="IconArrowAutofitDown"
              ></mov-icon>
              ${Z("VIEW_MODE_VERTICAL")} ${a("VIEW_MODE_VERTICAL")}
            </mov-dropdown-item>
            <mov-divider></mov-divider>
            <mov-dropdown-item
              id="ltrMode"
              @click="${_r("FluidLTR")}"
              ?selected=${X("viewMode")==="FluidLTR"}
            >
              <mov-icon
                slot="icon"
                name="IconArrowAutofitRight"
              ></mov-icon>
              ${Z("VIEW_MODE_LEFT")} ${a("VIEW_MODE_LEFT")}
            </mov-dropdown-item>
            <mov-dropdown-item
              id="rtlMode"
              @click="${_r("FluidRTL")}"
              ?selected=${X("viewMode")==="FluidRTL"}
            >
              <mov-icon
                slot="icon"
                name="IconArrowAutofitLeft"
              ></mov-icon>
              ${Z("VIEW_MODE_RIGHT")} ${a("VIEW_MODE_RIGHT")}
            </mov-dropdown-item>
            <mov-divider></mov-divider>
            <mov-dropdown-item
              id="BookMode"
              @click="${_r("Book")}"
              ?selected=${X("viewMode")==="Book"}
            >
              <mov-icon
                slot="icon"
                name="IconBookArrowRight"
              ></mov-icon>
              ${Z("VIEW_MODE_BOOK")} ${a("VIEW_MODE_BOOK")}
            </mov-dropdown-item>
            <mov-dropdown-item
              id="MangaMode"
              @click="${_r("Manga")}"
              ?selected=${X("viewMode")==="Manga"}
            >
              <mov-icon
                slot="icon"
                name="IconBookArrowLeft"
              ></mov-icon>
              ${Z("VIEW_MODE_MANGA")} ${a("VIEW_MODE_MANGA")}
            </mov-dropdown-item>
            <mov-divider></mov-divider>
            <mov-dropdown-item
              id="GalleryMode"
              @click="${_r("Gallery")}"
              ?selected=${X("viewMode")==="Gallery"}
            >
              <mov-icon
                slot="icon"
                name="IconLayoutDashboard"
              ></mov-icon>
              ${Z("VIEW_MODE_GALLERY")} ${a("VIEW_MODE_GALLERY")}
            </mov-dropdown-item>
          </mov-dropdown>
          <mov-dropdown
            id="ZoomDropdown"
            checkable
          >
            <mov-button
              slot="trigger"
              title="${Z("ZOOM_MENU")}"
            >
              <mov-icon
                label="Zoom"
                name="IconZoom"
              ></mov-icon>
            </mov-button>
            <mov-dropdown-item
              id="enlarge"
              @click="${ts()}"
            >
              <mov-icon
                slot="icon"
                name="IconZoomInArea"
              ></mov-icon>
              ${Z("ENLARGE")} ${a("ENLARGE")}
            </mov-dropdown-item>
            <mov-dropdown-item
              id="restore"
              @click="${Yo("percent",100)}"
            >
              <mov-icon
                slot="icon"
                name="IconZoomPan"
              ></mov-icon>
              ${Z("RESTORE")} ${a("RESTORE")}
            </mov-dropdown-item>
            <mov-dropdown-item
              id="reduce"
              @click="${ts(-1)}"
            >
              <mov-icon
                slot="icon"
                name="IconZoomOutArea"
              ></mov-icon>
              ${Z("REDUCE")} ${a("REDUCE")}
            </mov-dropdown-item>
            <mov-divider></mov-divider>
            <mov-dropdown-item
              id="fitWidth"
              @click="${Yo("width")}"
              ?selected=${X("zoomMode")==="width"}
            >
              <mov-icon
                slot="icon"
                name="IconArrowAutofitWidth"
              ></mov-icon>
              ${Z("FIT_WIDTH")} ${a("FIT_WIDTH")}
            </mov-dropdown-item>
            <mov-dropdown-item
              id="fitHeight"
              @click="${Yo("height")}"
              ?selected=${X("zoomMode")==="height"}
            >
              <mov-icon
                slot="icon"
                name="IconArrowAutofitHeight"
              ></mov-icon>
              ${Z("FIT_HEIGHT")} ${a("FIT_HEIGHT")}
            </mov-dropdown-item>
          </mov-dropdown>
        </mov-button-group>
        <mov-button-group
          id="GlobalFunctions"
          class="${St({"button-group-merged-start":["mobile","tablet"].includes(fe("device"))})}"
        >
          <mov-button
            id="series"
            href="${this.manga.series??He}"
            @click=${Ni}
            title="${Z("RETURN_CHAPTER_LIST")}"
            ?disabled=${!this.manga.series}
          >
            <mov-icon name="IconBooksReturn"></mov-icon>
          </mov-button>
          <mov-button
            id="download"
            title="${Z("DOWNLOAD_ZIP")}"
            @click=${Jh}
            ?disabled=${fe("download")!=="available"}
            ?loading=${fe("download")==="working"}
          >
            <mov-icon
              name="${fe("download")==="working"?"IconLoader2":"IconFileDownload"}"
            ></mov-icon>
          </mov-button>
          <mov-button
            id="prev"
            href="${this.manga.prev??He}"
            title="${Z("PREVIOUS_CHAPTER")}"
            @click=${Ni}
            ?disabled=${!this.manga.prev}
          >
            <mov-icon name="IconArrowBigLeft"></mov-icon>
          </mov-button>
          <mov-button
            id="next"
            href="${this.manga.next??He}"
            title="${Z("NEXT_CHAPTER")}"
            @click=${Ni}
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
            @input=${$9}
          ></mov-slider>
        </div>
      </header>
    `}};z([An("#MangaTitle")],ns.prototype,"mangaTitleElement",void 0),z([K({type:Object})],ns.prototype,"manga",void 0),ns=z([ct("reader-header"),(0,Xo.useStores)(Tt,xo,nr)],ns);var r7="#BookmarksPanel{text-align:center;--width:100vw}#BookmarksList{flex-direction:column;gap:5px;max-height:60vh;padding:0 5px;display:flex;overflow:auto}.bookmark-item{text-align:left;border-radius:5px;align-items:center;gap:1rem;padding:.75rem 1rem;transition:background-color .15s ease-in-out;display:flex}.bookmark-item:hover{background-color:var(--mov-color-fill-quiet,#8080801a)}.bookmark-info{flex-grow:1;min-width:0}.bookmark-name{font-weight:500}.bookmark-url{white-space:nowrap;text-overflow:ellipsis;color:color-mix(in oklab, var(--theme-body-text-color), transparent 30%);font-size:14px;text-decoration:none;display:block;overflow:hidden}.bookmark-url:hover{text-decoration:underline}.bookmark-details{text-align:right;width:90px;color:color-mix(in oklab, var(--theme-body-text-color), transparent 30%);flex-shrink:0;font-size:14px}.bookmark-details>div{padding:2px 0}.bookmark-actions{flex-shrink:0;gap:.5rem;display:flex}",b1=class extends rt{static{this.styles=[Me(r7)]}listBookmarks(){return el(X("bookmarks"))?[Z("LIST_EMPTY")]:X("bookmarks").map((t,n)=>ne`
        <div
          id="Bookmark${n+1}"
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
              @click=${K9}
            >
              <mov-icon
                name="IconTrash"
                size="16px"
              ></mov-icon>
            </mov-button>
          </div>
        </div>
      `)}render(){return ne`
      <mov-dialog
        id="BookmarksPanel"
        ?open=${fe("panel")==="bookmarks"}
        light-dismiss
        @close=${Rc}
      >
        <mov-button
          class="Bookmark"
          title="${Z("BOOKMARK")}"
          @click=${g1}
          slot="header-actions"
        >
          <mov-icon
            name="${Oo()===void 0?"IconBookmark":"IconBookmarkOff"}"
            size="24px"
          ></mov-icon>
        </mov-button>
        <h2 slot="header">${Z("BOOKMARKS")}</h2>
        <h2 slot="label">${Z("BOOKMARKS")}</h2>
        <div id="BookmarksList">${this.listBookmarks()}</div>
      </mov-dialog>
    `}};b1=z([ct("bookmark-panel"),(0,Xo.useStores)(Tt,xo,nr)],b1);function*n7(e,t){const n=typeof t=="function";if(e!==void 0){let o=-1;for(const a of e)o>-1&&(yield n?t(o):t),o++,yield a}}var o7="#KeybindingsPanel div{line-height:1.5em}#KeybindingsPanel #KeybindingsList{grid-template-columns:1fr 2fr;gap:5px;display:grid}#KeybindingsPanel .ControlButton{justify-content:center;align-items:center;gap:.5em;margin-left:3px;padding:5px 10px}#KeybindingsPanel label{display:ruby}#KeybindingsPanel input{width:100%;display:inline-block}#KeybindingsPanel #HotKeysRules{grid-column:span 2}",w1=class extends rt{constructor(...t){super(...t),this.keybindsRefs=xe.default.keys(X("keybinds")).reduce((n,o)=>(n[o]=ul(),n),{})}static{this.styles=[Me(o7),Me(f1)]}keybindList(){const t=X("keybinds");return xe.default.keys(t).map(n=>{const o=t[n]?.length?n7(t[n]?.map(a=>ne`<kbd class="dark">${a}</kbd>`)," / "):"";return ne`<span>${Z(n)}:</span> <span>${o}</span>`})}keybindEditor(){const t=X("keybinds");return xe.default.keys(t).map(n=>ne`<label for="${n}">${Z(n)}:</label>
          <input
            type="text"
            class="KeybindInput"
            id="${n}"
            name="${n}"
            value="${t[n]?.join(" , ")??He}"
            ${hl(this.keybindsRefs[n])}
          />`)}render(){return ne`
      <mov-drawer
        id="KeybindingsPanel"
        ?open=${fe("panel").startsWith("keybindings")}
        placement="end"
        @close=${Rc}
      >
        <h2 slot="label">${Z("KEYBINDINGS")}</h2>
        <div
          class="controls"
          slot="header-actions"
        >
          ${fe("panel")==="keybindingsEditor"?ne` <mov-button
                id="SaveKeybindings"
                type="button"
                title="${Z("SAVE_KEYBINDS")}"
                @click=${()=>Q9(this.keybindsRefs)}
              >
                <mov-icon
                  name="IconDeviceFloppy"
                  size="16px"
                  slot="start"
                ></mov-icon>
                ${Z("BUTTON_SAVE")}
              </mov-button>`:ne` <mov-button
                id="EditKeybindings"
                type="button"
                title="${Z("EDIT_KEYBINDS")}"
                @click=${e7}
              >
                <mov-icon
                  name="IconPencil"
                  size="16px"
                  slot="start"
                ></mov-icon>
                ${Z("BUTTON_EDIT")}
              </mov-button>`}
        </div>
        <div id="KeybindingsList">
          ${fe("panel")==="keybindingsEditor"?this.keybindEditor():this.keybindList()}
        </div>
        <div id="HotKeysRules">${Rd(Z("KEYBIND_RULES"))}</div>
      </mov-drawer>
    `}};w1=z([ct("keybindings-panel"),(0,Xo.useStores)(Tt,xo,nr)],w1);function*i7(e,t){if(e!==void 0){let n=0;for(const o of e)yield t(o,n++)}}function os(e,t=1){return Array(e).fill(0).map((n,o)=>o+1).filter(n=>n>=t)}function Ui(e){const t=e.replace(/[\t\n\r]/gim,"").replace(/\s\s+/g," ");return`data:image/svg+xml;charset=UTF-8,${encodeURIComponent(t).replace(/\(/g,"%28").replace(/\)/g,"%29")}`}var is=e=>e%100===0?15:e%50===0?10:e%25===0?5:2.5;function a7(e,t,n,o){let a="";for(let s=0;s<=e;s+=5){const c=Mo` <line
      x1="${s}"
      y1="0"
      x2="${s}"
      y2="${is(s)}"
    />`;if(a+=c,s!==0&&s%50===0){const l=Mo` <text
        x="${s}"
        y="25"
        text-anchor="middle"
        font-size="${is(s)}px"
      >
        ${s}
      </text>`;a+=l}}for(let s=0;s<=t;s+=5){const c=Mo` <line
      x1="0"
      y1="${s}"
      x2="${is(s)}"
      y2="${s}"
    />`;if(a+=c,s!==0&&s%50===0){const l=Mo` <text
        x="25"
        y="${s}"
        text-anchor="middle"
        dominant-baseline="middle"
        font-size="${is(s)}px"
      >
        ${s}
      </text>`;a+=l}}return Mo` <svg
    xmlns="http://www.w3.org/2000/svg"
    width="${e}"
    height="${t}"
    viewBox="0 0 ${e} ${t}"
  >
    <rect
      width="${e}"
      height="${t}"
      fill="${n}"
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
  </svg>`}function Yt(e,t,n="#0F1C3F",o="#ECEAD9"){return Ui(a7(e,t,n,o))}var _1=xe.default.values(Ot).map(e=>e[900]),y1=[400,600,900,1200,1400,1600,1970],k1=[600,800,1e3,1200,1400,2e3,2600];function s7(){const e=Math.floor(Math.random()*y1.length),t=Math.floor(Math.random()*k1.length),n=Math.floor(Math.random()*_1.length);return Yt(y1[e],k1[t],_1[n])}function E1(e){e.deltaY&&(e.currentTarget.scrollLeft+=e.deltaY+e.deltaX,e.preventDefault())}function l7(e){e.deltaY&&(e.currentTarget.scrollLeft-=e.deltaY-e.deltaX,e.preventDefault())}var c7=":host{--nav-collapsed-size:34px;--nav-expanded-size:200px;--header-height:80px}#Navigation{color:var(--theme-text-color);background-color:var(--theme-hightlight-color);box-sizing:border-box;white-space:nowrap;text-align:center;z-index:1000;gap:5px;line-height:0;transition:all .3s;display:flex;position:fixed;overflow:hidden}#Thumbnails{flex-grow:1;justify-content:flex-start;gap:5px;display:flex}#Navigation.horizontal #Thumbnails{flex-direction:row;overflow:auto hidden}#Navigation.vertical #Thumbnails{flex-direction:column;justify-content:flex-start;overflow:hidden auto}#Navigation.left #Thumbnails{direction:rtl}:host(:not([forceExpanded])) #Navigation:not(:hover) #Thumbnails{display:none}#NavigationCounters{text-align:center;white-space:nowrap;flex-shrink:0;justify-content:center;align-items:center;gap:.5rem;padding:5px;line-height:1rem;display:flex}#Navigation.horizontal{height:var(--nav-collapsed-size);flex-direction:column;width:100%;left:0;right:0}:host([forceExpanded]) #Navigation.horizontal,#Navigation.horizontal:hover{height:var(--nav-expanded-size)}#Navigation.bottom{bottom:0}#Navigation.vertical{width:var(--nav-collapsed-size);flex-direction:row;height:100%;transition:top .3s,height .3s,width .3s;bottom:0}:host([forceExpanded]) #Navigation.vertical,#Navigation.vertical:hover{width:var(--nav-expanded-size)}#Navigation.left{flex-direction:row-reverse;left:0}#Navigation.right{right:0}#Navigation.vertical #NavigationCounters{writing-mode:vertical-rl;transform:rotate(180deg)}#Navigation.right #NavigationCounters{transform:rotate(0)}#Navigation.vertical.header{top:var(--header-height);height:calc(100% - var(--header-height))}#Navigation .Thumbnail{justify-content:center;align-items:center;width:150px;height:150px;margin:0 5px;display:inline-flex;position:relative}.ThumbnailIndex{color:var(--mov-color-on-loud);background-color:var(--mov-color-fill-loud);opacity:.9;text-align:center;z-index:1;width:100%;font-weight:600;line-height:1.2rem;display:block;position:absolute;bottom:30%;left:0}.ThumbnailImg{cursor:pointer;background-position:50%;background-repeat:no-repeat;background-size:48px 48px;min-width:80px;max-width:150px;min-height:150px;max-height:150px;display:inline-block}",Vi=class extends rt{constructor(...t){super(...t),this.mode="bottom",this.forceExpanded=!1,this.isHiding=!1}static{this.styles=[Me(c7),Et`
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
        background-image: url('${Me(Ui(wl))}');
      }

      .Thumbnail .ThumbnailImg.imgBroken {
        background-image: url('${Me(Ui(_l))}');
      }
    `]}willUpdate(t){t.has("mode")&&(this.isHiding=!0)}updated(t){t.has("mode")&&this.isHiding&&setTimeout(()=>{this.isHiding=!1},50)}render(){if(this.mode==="disabled")return He;const t=fe("manga"),n={horizontal:this.mode==="bottom",vertical:this.mode!=="bottom",left:this.mode==="left",right:this.mode==="right",bottom:this.mode==="bottom",hiding:this.isHiding},o=fe("images")||{},a=xe.default.keys(o).filter(s=>{const c=parseInt(s,10);return c>=(t?.begin??1)&&c<=(t?.pages??1)&&o[c]?.status==="loaded"}).length;return ne`
      <nav
        id="Navigation"
        class="${St(n)}"
      >
        <div
          id="NavigationCounters"
          class="ControlLabel"
        >
          ${A6}
          <i>${a}</i> /
          <b> ${(t?.pages??1)-((t?.begin??1)-1)} </b>
          ${Z("PAGES_LOADED")}
          <span>: ${fe("currentPage")}</span>
        </div>
        <div
          id="Thumbnails"
          @wheel=${this.mode==="bottom"?E1:null}
        >
          ${i7(os(t?.pages??1,t?.begin??1),s=>ne` <figure
                id="Thumbnail${s}"
                class="Thumbnail"
                role="button"
                tabindex="0"
                title="Go to page ${s}"
                @click=${()=>e9(s)}
              >
                <img
                  id="ThumbnailImg${s}"
                  alt=""
                  class="ThumbnailImg"
                  src=${fe("images")?.[s]?.src??He}
                />
                <figcaption class="ThumbnailIndex">${s}</figcaption>
              </figure>`)}
        </div>
      </nav>
    `}};z([K({type:String})],Vi.prototype,"mode",void 0),z([K({type:Boolean})],Vi.prototype,"forceExpanded",void 0),z([Ht()],Vi.prototype,"isHiding",void 0),Vi=z([ct("navbar-thumbnails"),(0,Xo.useStores)(Tt,xo,nr)],Vi);function u7(){const e=no()?"true":"false";return ne` <div class="ControlLabel">
    ${Z("SCOPE")}
    <segmented-control
      .value=${e}
      @change=${m9}
    >
      <segmented-control-option
        value="false"
        label=${Z("GLOBAL")}
        icon="IconWorldCog"
      ></segmented-control-option>
      <segmented-control-option
        value="true"
        label=${window.location.hostname}
        icon="IconLocationCog"
      ></segmented-control-option>
    </segmented-control>
  </div>`}function d7(){return So.map(e=>ne`
      <option
        value="${e.ID}"
        ?selected=${X("locale")===e.ID}
      >
        ${e.NAME}
      </option>
    `)}function h7(){return ne` <div class="ControlLabel locale">
    ${Z("LANGUAGE")}
    <select
      id="locale"
      @change="${g9}"
    >
      ${d7()}
    </select>
  </div>`}function f7(){const e=X("deviceMode");return ne` <div class="ControlLabel">
    ${Z("DEVICE_MODE")}
    <segmented-control
      .value=${e}
      @change=${O9}
    >
      <segmented-control-option
        value="auto"
        label=${Z("DEVICE_MODE_AUTO")}
        icon="IconAdjustmentsHorizontal"
      ></segmented-control-option>
      <segmented-control-option
        value="desktop"
        label=${Z("DEVICE_MODE_DESKTOP")}
        icon="IconDeviceDesktop"
      ></segmented-control-option>
      <segmented-control-option
        value="tablet"
        label=${Z("DEVICE_MODE_TABLET")}
        icon="IconDeviceTablet"
      ></segmented-control-option>
      <segmented-control-option
        value="mobile"
        label=${Z("DEVICE_MODE_MOBILE")}
        icon="IconDeviceMobile"
      ></segmented-control-option>
    </segmented-control>
  </div>`}var p7=()=>ne`${u7()} ${f7()} ${h7()}`;function m7(){return ne`
    <div class="ControlLabel loadMode">
      ${Z("DEFAULT_LOAD_MODE")}
      <select
        id="loadMode"
        @change="${v9}"
      >
        <option
          value="wait"
          ?selected=${X("loadMode")==="wait"}
        >
          ${Z("LOAD_MODE_NORMAL")}
        </option>
        <option
          value="always"
          ?selected=${X("loadMode")==="always"}
        >
          ${Z("LOAD_MODE_ALWAYS")}
        </option>
        <option
          value="never"
          ?selected=${X("loadMode")==="never"}
        >
          ${Z("LOAD_MODE_NEVER")}
        </option>
      </select>
    </div>
  `}function g7(){return ne`
    <div class="ControlLabel PagesPerSecond">
      ${Z("LOAD_SPEED")}
      <select
        id="PagesPerSecond"
        @change="${S9}"
      >
        <option
          value="Safe"
          ?selected=${X("loadSpeed")==="Safe"}
        >
          ${Z("SLOWLY")} (Safe)
        </option>
        <option
          value="Standard"
          ?selected=${X("loadSpeed")==="Standard"}
        >
          ${Z("NORMAL")} (Standard)
        </option>
        <option
          value="Faster"
          ?selected=${X("loadSpeed")==="Faster"}
        >
          ${Z("FAST")} (Faster)
        </option>
        <option
          value="Extreme"
          ?selected=${X("loadSpeed")==="Extreme"}
        >
          ${Z("EXTREME")} (Extreme)
        </option>
        <option
          value="All"
          ?selected=${X("loadSpeed")==="All"}
        >
          ${Z("ALL_PAGES")} (All)
        </option>
      </select>
    </div>
  `}var v7=()=>ne`${m7()} ${g7()}`;function b7(){return ne`
    <div class="ControlLabel fitIfOversize">
      ${Z("FIT_WIDTH_OVERSIZED")}
      <mov-switch
        name="fitIfOversize"
        ?checked=${X("fitWidthIfOversize")}
        @change=${b9}
      ></mov-switch>
    </div>
    <div class="ControlLabel downloadZip">
      ${Z("DOWNLOAD_IMAGES")}
      <mov-switch
        name="downloadZip"
        ?checked=${X("downloadZip")}
        @change=${y9}
      ></mov-switch>
    </div>
    <div class="ControlLabel hidePageControls">
      ${Z("HIDE_CONTROLS")}
      <mov-switch
        name="hidePageControls"
        ?checked=${X("hidePageControls")}
        @change=${x9}
      ></mov-switch>
    </div>
    <div class="ControlLabel lazyLoadImages">
      ${Z("LAZY_LOAD_IMAGES_ENABLE")}
      <mov-switch
        name="lazyLoadImages"
        ?checked=${X("lazyLoadImages")}
        @change=${k9}
      ></mov-switch>
    </div>
  `}function w7(){return ne`
    <div
      class="${St({ControlLabel:!0,lazyStart:!0,ControlLabelItem:!0,show:X("lazyLoadImages")})}"
    >
      <span>
        ${Z("LAZY_LOAD_IMAGES")}
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
        @input="${E9}"
      ></mov-slider>
    </div>
  `}function _7(){return ne`
    <div class="ControlLabel headerType">
      ${Z("HEADER_TYPE")}
      <segmented-control
        .value=${X("header")}
        @change=${I9}
        labelPosition="bottom"
      >
        <segmented-control-option
          value="hover"
          label=${Z("HEADER_HOVER")}
          icon="arrows-move"
        ></segmented-control-option>
        <segmented-control-option
          value="scroll"
          label=${Z("HEADER_SCROLL")}
          icon="arrows-vertical"
        ></segmented-control-option>
        <segmented-control-option
          value="click"
          label=${Z("HEADER_CLICK")}
          icon="hand-click"
        ></segmented-control-option>
        <segmented-control-option
          value="fixed"
          label=${Z("HEADER_FIXED")}
          icon="pin"
        ></segmented-control-option>
        <segmented-control-option
          value="simple"
          label=${Z("HEADER_SIMPLE")}
          icon="box-align-top"
        ></segmented-control-option>
      </segmented-control>
    </div>
  `}function y7(){return ne`
    <div class="ControlLabel pagination">
      ${Z("PAGINATION_TYPE")}
      <segmented-control
        .value=${X("pagination")}
        @change=${_9}
        labelPosition="side"
      >
        <segmented-control-option
          value="disabled"
          label=${Z("PAGINATION_DISABLED")}
          icon="x"
        ></segmented-control-option>
        <segmented-control-option
          value="slider"
          label=${Z("PAGINATION_SLIDER")}
          icon="adjustments-horizontal"
        ></segmented-control-option>
        <segmented-control-option
          value="side-arrows"
          label=${Z("PAGINATION_ARROWS")}
          icon="arrows-left-right"
        ></segmented-control-option>
        <segmented-control-option
          value="both"
          label=${Z("PAGINATION_BOTH")}
          icon="arrows-horizontal"
        ></segmented-control-option>
      </segmented-control>
    </div>
  `}function k7(){return ne`
    <div class="ControlLabel navbarType">
      ${Z("NAVBAR_TYPE")}
      <segmented-control
        .value=${X("navbar")}
        @change=${w9}
        labelPosition="tooltip"
      >
        <segmented-control-option
          value="bottom"
          label=${Z("NAVBAR_BOTTOM")}
          icon="layout-bottombar"
        ></segmented-control-option>
        <segmented-control-option
          value="left"
          label=${Z("NAVBAR_LEFT")}
          icon="layout-sidebar"
        ></segmented-control-option>
        <segmented-control-option
          value="right"
          label=${Z("NAVBAR_RIGHT")}
          icon="layout-sidebar-right"
        ></segmented-control-option>
        <segmented-control-option
          value="disabled"
          label=${Z("NAVBAR_DISABLED")}
          icon="x"
        ></segmented-control-option>
      </segmented-control>
    </div>
  `}function E7(){return ne`
    <div class="ControlLabel autoScroll">
      <span>
        ${Z("AUTO_SCROLL_HEIGHT")}
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
        @input="${C9}"
      ></mov-slider>
    </div>
  `}var S7=()=>ne`${b7()} ${y7()} ${w7()} ${_7()} ${k7()} ${E7()}`;function A7(){const e=X("colorScheme")==="dark";At("colorScheme",e?"light":"dark"),document.documentElement.classList.remove(e?"dark":"light"),document.documentElement.classList.add(X("colorScheme"))}function as(e){const t=e instanceof CustomEvent?e.detail.value:e.currentTarget.value;At("theme",t)}function M7(){return ne`
    <div class="ControlLabel ColorSchemeSelector">
      <label>${Z("COLOR_SCHEME")}</label>
      <toggle-button
        id="ColorScheme"
        mode="theme"
        @click=${A7}
        ?active=${X("colorScheme")==="dark"}
      >
      </toggle-button>
    </div>
    <div class="ControlLabel ThemeSelector">
      <label>${Z("THEME_COLOR")}</label>
      <mov-color-picker
        id="ThemeHex"
        .value="${X("theme")}"
        title="${X("theme")}"
        @input=${as}
        .swatches=${xe.default.values(Sc)}
      ></mov-color-picker>
    </div>
    <color-palette
      .baseColor="${X("theme")}"
      mode="steps"
      .selected=${X("theme")}
      @change="${as}"
    ></color-palette>
    <span id="ColorRecommendations">
      ${xe.default.values(Sc).map(e=>ne`<color-swatch
            .color="${e}"
            .selected=${X("theme")}
            @change=${as}
          ></color-swatch>`)}
    </span>
    <details class="ControlLabel">
      <summary>${Z("THEME_HUE")} & ${Z("THEME_SHADE")}</summary>
      <color-panel
        .selected=${X("theme")}
        @change=${as}
      ></color-panel>
    </details>
  `}function x7(){return ne` <div class="ControlLabel DefaultZoomMode">
    ${Z("DEFAULT_ZOOM_MODE")}
    <segmented-control
      .value=${X("zoomMode")}
      @change=${R9}
      labelPosition="tooltip"
    >
      <segmented-control-option
        value="percent"
        label=${Z("PERCENT")}
        icon="file-percent"
      ></segmented-control-option>
      <segmented-control-option
        value="width"
        label=${Z("FIT_WIDTH")}
        icon="arrow-autofit-width"
      ></segmented-control-option>
      <segmented-control-option
        value="height"
        label=${Z("FIT_HEIGHT")}
        icon="arrow-autofit-height"
      ></segmented-control-option>
    </segmented-control>
  </div>`}function I7(){return ne`
    <div
      class="${St({ControlLabel:!0,zoomValue:!0,ControlLabelItem:!0,show:X("zoomMode")==="percent"})}"
    >
      <span>
        ${Z("DEFAULT_ZOOM")}
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
        @input="${P9}"
      ></mov-slider>
    </div>
  `}function C7(){return ne`
    <div class="ControlLabel minZoom">
      <span>
        ${Z("MINIMUM_ZOOM")}
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
        @input="${M9}"
      ></mov-slider>
    </div>
  `}function O7(){return ne`
    <div class="ControlLabel zoomStep">
      <span>
        ${Z("ZOOM_STEP")}
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
        @input="${A9}"
      ></mov-slider>
    </div>
  `}function T7(){return ne`
    <div class="ControlLabel viewMode">
      ${Z("DEFAULT_VIEW_MODE")}
      <segmented-control
        .value=${X("viewMode")}
        @change=${D9}
        labelPosition="tooltip"
      >
        <segmented-control-option
          value="Vertical"
          label=${Z("VIEW_MODE_VERTICAL")}
          icon="arrow-autofit-down"
        ></segmented-control-option>
        <segmented-control-option
          value="WebComic"
          label=${Z("VIEW_MODE_WEBCOMIC")}
          icon="spacing-vertical"
        ></segmented-control-option>
        <segmented-control-option
          value="FluidLTR"
          label=${Z("VIEW_MODE_LEFT")}
          icon="arrow-autofit-right"
        ></segmented-control-option>
        <segmented-control-option
          value="FluidRTL"
          label=${Z("VIEW_MODE_RIGHT")}
          icon="arrow-autofit-left"
        ></segmented-control-option>
        <segmented-control-option
            value="Book"
            label=${Z("VIEW_MODE_BOOK")}
            icon="IconBookArrowRight"
        ></segmented-control-option>
        <segmented-control-option
            value="Manga"
            label=${Z("VIEW_MODE_MANGA")}
            icon="IconBookArrowLeft"
        ></segmented-control-option>
        <segmented-control-option
            value="Gallery"
            label=${Z("VIEW_MODE_GALLERY")}
            icon="IconLayoutDashboard"
        ></segmented-control-option>
      </segmented-control>
    </div>
  `}var L7=()=>ne`${x7()} ${I7()} ${C7()} ${O7()} ${T7()}`,R7="#SettingsPanel{color:var(--theme-text-color)}#SettingsPanel fieldset{border:1px solid var(--theme-body-text-color);border-radius:10px;padding:3px}#SettingsPanel .ControlLabel{flex-flow:wrap;justify-content:space-between;align-items:center;padding:2px;display:flex}#SettingsPanel .ControlLabelItem{justify-content:space-between;align-items:center;display:flex}#SettingsPanel .ControlLabelItem:not(.show){display:none}#SettingsPanel input[type=range]{width:100%}#SettingsPanel .RangeValue{color:var(--mov-color-on-loud);text-align:center;background:var(--mov-color-fill-loud);border-radius:3px;margin-left:8px;padding:2px 5px;line-height:20px;display:inline-block}#SettingsPanel datalist{flex-direction:row;justify-content:space-between;width:100%;display:flex}#SettingsPanel datalist option{writing-mode:vertical-lr;padding:0}#ThemeSelector{width:110px}#ColorRecommendations{flex-flow:wrap;gap:2px;display:flex}#Chapter:not(.Vertical)~#SettingsPanel .verticalSeparator{display:none}#ColorScheme{min-width:28px;min-height:28px;padding:5px}#ResetSettings,#ResetSettings::part(base){width:100%}",S1=class extends rt{static{this.styles=[Et`
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
    `,Me(R7)]}render(){return ne`
      <mov-drawer
        id="SettingsPanel"
        ?open=${fe("panel")==="settings"}
        @close=${Rc}
        placement="start"
        class="${fe("device")}"
      >
        <h2 slot="label">${Z("SETTINGS")}</h2>
        <mov-button
          id="ResetSettings"
          @click="${b4}"
          title="${Z("BUTTON_RESET_SETTINGS")}"
        >
          <mov-icon
            name="IconSettingsOff"
            size="20px"
            slot="start"
          ></mov-icon>
          ${Z("BUTTON_RESET_SETTINGS")}
        </mov-button>
        <div class="content">
          <fieldset id="SettingsPanelGeneral">
            <legend>${Z("GENERAL")}</legend>
            ${p7()}
          </fieldset>
          <fieldset id="SettingsPanelTheme">
            <legend>${Z("THEME")}</legend>
            ${M7()}
          </fieldset>
          <fieldset id="SettingsPanelLoading">
            <legend>${Z("LOADING")}</legend>
            ${v7()}
          </fieldset>
          <fieldset id="SettingsPanelZoom">
            <legend>${Z("ZOOM")}</legend>
            ${L7()}
          </fieldset>
          <fieldset id="SettingsPanelOthers">
            <legend>${Z("OTHERS")}</legend>
            ${S7()}
          </fieldset>
        </div>
      </mov-drawer>
    `}};S1=z([ct("settings-panel"),(0,Xo.useStores)(Tt,xo,nr)],S1);function P7(e){return new Promise(function(t,n){var o=new FileReader,a=typeof o.readAsBinaryString=="function";o.onloadend=function(){var s=o.result||"";if(a)return t(s);t(z7(s))},o.onerror=n,a?o.readAsBinaryString(e):o.readAsArrayBuffer(e)})}function $7(e){return P7(e).then(btoa)}function D7(e){return $7(e).then(function(t){return"data:"+e.type+";base64,"+t})}function z7(e){for(var t="",n=new Uint8Array(e),o=n.byteLength,a=-1;++a<o;)t+=String.fromCharCode(n[a]);return t}async function N7(e,t){Ee("Fetching page: ",e);try{const n=await(await fetch(e)).text();return new DOMParser().parseFromString(n,t)}catch(n){throw Ee("Failed to fetch page: ",n),n}}async function B7(e){return N7(e,"text/html")}async function H7(e,t,n){try{return(await B7(e)).querySelector(t)?.getAttribute(n)}catch(o){return Ee("Failed to get element attribute: ",o),null}}var F7=class{constructor(e,t){this.queue=[],this.activeCount=0,this.lastRunTime=0;const n={Safe:{concurrency:5,delay:1e3},Standard:{concurrency:5,delay:500},Faster:{concurrency:10,delay:500},Extreme:{concurrency:10,delay:250},All:{concurrency:20,delay:50}}[e];this.maxConcurrency=n.concurrency,this.minDelay=t??n.delay}add(e){this.queue.push(e),this.runNext()}async runNext(){if(this.activeCount>=this.maxConcurrency||this.queue.length===0)return;const e=Date.now()-this.lastRunTime;if(e<this.minDelay){setTimeout(()=>this.runNext(),this.minDelay-e);return}const t=this.queue.shift();if(t){this.activeCount+=1,this.lastRunTime=Date.now();try{await t()}finally{this.activeCount-=1,this.runNext()}}}},Pc;function G7(e){if(e){let t=e.trim();return t.startsWith("//")&&(t=`https:${t}`),t}return""}async function ss(e,t,n){const o=fe("images")?.[t];o?.status&&o.status!=="pending"||(hr(t,()=>({status:"loading"})),Pc.add(async()=>{let a=G7(n),s;try{const c=await fetch(a,e.fetchOptions);if(c.ok){const l=c.headers.get("content-type");l?.startsWith("image/")?(s=await c.blob(),a=await D7(s)):Ee("Fetched content is not an image",l)}else Ee("Fetch failed with status",c.status)}catch(c){Ee("Failed to fetch image",c)}hr(t,()=>({src:a,blob:s,status:"loaded"})),jt("Loaded Image:",t,"Source:",a)}),e.pages===t&&m1())}async function A1(e,t,n){const o=fe("images")?.[t];o?.status&&o.status!=="pending"||(hr(t,()=>({status:"loading"})),Pc.add(async()=>{try{const a=await H7(n,e.img,e.lazyAttr??"src");a?(hr(t,()=>({status:"pending"})),await ss(e,t,a)):hr(t,()=>({status:"error"}))}catch(a){Ee("Failed to get page attribute",a),hr(t,()=>({status:"error"}))}}))}function M1(e,t){os(t.pages,e).filter((n,o)=>!(t.lazy??X("lazyLoadImages"))||o<=X("lazyStart")).forEach(n=>{A1(t,n,t.listPages[n-1])})}function x1(e,t){os(t.pages,e).filter((n,o)=>!(t.lazy??X("lazyLoadImages"))||o<=X("lazyStart")).forEach(n=>{ss(t,n,t.listImages[n-1])})}async function W7(){await tl(()=>fe("manga")!==void 0);const e=fe("manga"),t=e.begin??1;Pc=new F7(X("loadSpeed"),e.timer),jt("Loading Images"),jt(`Speed: ${X("loadSpeed")}`),jt(`Lazy: ${e.lazy??X("lazyLoadImages")}, Starting from: ${X("lazyStart")}`),Pn(),Ad(e)?(jt("Method: Images:",e.listImages),x1(t,e)):Md(e)?(jt("Method: Pages:",e.listPages),M1(t,e)):um(e)?(jt("Method: Brute Force"),e.bruteForce({begin:t,addImg:ss,loadImages(n){x1(t,{...e,listImages:n})},loadPages(n,o,a){M1(t,{...e,listPages:n,img:o,lazyAttr:a})},wait:0})):Ee("No Loading Method Found"),nr.listen((n,o,a)=>{if(a==="currentPage"&&n.currentPage>o.currentPage)for(let s=n.currentPage;s<Math.min(n.currentPage+5,e.pages+1);s++)n.images?.[s]?.src!==void 0||n.images?.[s]?.status==="loading"||(Ad(e)?ss(e,s,e.listImages[s-1]):Md(e)&&A1(e,s,e.listPages[s-1]))})}function U7(){const e=fe("images");if(!e)return null;const t=X("viewMode"),n=t==="FluidLTR"||t==="FluidRTL",o=t==="FluidRTL",a=window.innerHeight/2,s=window.innerWidth/2;let c=null;for(const l in e){const f=e[l].ref?.value;if(!f)continue;const h=f?.getBoundingClientRect();let p;n?o?p=h.right:p=h.left:p=h.top,(n?p<=s:p<=a)&&(!c||p>c.edge)&&(c={index:parseInt(l,10),edge:p})}return c?c.index:fe("manga")?.begin??1}function I1(){const e=U7();e!=null&&fe("currentPage")!==e&&De("currentPage",e)}function V7(){const e=xe.default.throttle(()=>{requestAnimationFrame(I1)},100);window.addEventListener("scroll",e,{passive:!0}),window.addEventListener("resize",e),fe("chapter").value?.addEventListener("scroll",e,{passive:!0}),requestAnimationFrame(I1)}function C1(){if(!fe("chapter").value){setTimeout(C1,50);return}V7()}var O1=xe.default.debounce(()=>{De("device",kl()),Pn()},200);async function q7(){await tl(()=>fe("manga")!==void 0),h1(),window.addEventListener("resize",O1),window.addEventListener("orientationchange",O1),f9(),C1()}var Z7=xr(((e,t,n)=>{(function(o,a){typeof define=="function"&&define.amd?define(a):typeof e=="object"?t.exports=a():o.NProgress=a()})(n,function(){var o={};o.version="0.2.0";var a=o.settings={minimum:.08,easing:"ease",positionUsing:"",speed:200,trickle:!0,trickleRate:.02,trickleSpeed:800,showSpinner:!0,barSelector:'[role="bar"]',spinnerSelector:'[role="spinner"]',parent:"body",template:'<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'};o.configure=function(w){var b,S;for(b in w)S=w[b],S!==void 0&&w.hasOwnProperty(b)&&(a[b]=S);return this},o.status=null,o.set=function(w){var b=o.isStarted();w=s(w,a.minimum,1),o.status=w===1?null:w;var S=o.render(!b),M=S.querySelector(a.barSelector),C=a.speed,L=a.easing;return S.offsetWidth,f(function(D){a.positionUsing===""&&(a.positionUsing=o.getPositioningCSS()),h(M,l(w,C,L)),w===1?(h(S,{transition:"none",opacity:1}),S.offsetWidth,setTimeout(function(){h(S,{transition:"all "+C+"ms linear",opacity:0}),setTimeout(function(){o.remove(),D()},C)},C)):setTimeout(D,C)}),this},o.isStarted=function(){return typeof o.status=="number"},o.start=function(){o.status||o.set(0);var w=function(){setTimeout(function(){o.status&&(o.trickle(),w())},a.trickleSpeed)};return a.trickle&&w(),this},o.done=function(w){return!w&&!o.status?this:o.inc(.3+.5*Math.random()).set(1)},o.inc=function(w){var b=o.status;return b?(typeof w!="number"&&(w=(1-b)*s(Math.random()*b,.1,.95)),b=s(b+w,0,.994),o.set(b)):o.start()},o.trickle=function(){return o.inc(Math.random()*a.trickleRate)},(function(){var w=0,b=0;o.promise=function(S){return!S||S.state()==="resolved"?this:(b===0&&o.start(),w++,b++,S.always(function(){b--,b===0?(w=0,o.done()):o.set((w-b)/w)}),this)}})(),o.render=function(w){if(o.isRendered())return document.getElementById("nprogress");m(document.documentElement,"nprogress-busy");var b=document.createElement("div");b.id="nprogress",b.innerHTML=a.template;var S=b.querySelector(a.barSelector),M=w?"-100":c(o.status||0),C=document.querySelector(a.parent),L;return h(S,{transition:"all 0 linear",transform:"translate3d("+M+"%,0,0)"}),a.showSpinner||(L=b.querySelector(a.spinnerSelector),L&&y(L)),C!=document.body&&m(C,"nprogress-custom-parent"),C.appendChild(b),b},o.remove=function(){_(document.documentElement,"nprogress-busy"),_(document.querySelector(a.parent),"nprogress-custom-parent");var w=document.getElementById("nprogress");w&&y(w)},o.isRendered=function(){return!!document.getElementById("nprogress")},o.getPositioningCSS=function(){var w=document.body.style,b="WebkitTransform"in w?"Webkit":"MozTransform"in w?"Moz":"msTransform"in w?"ms":"OTransform"in w?"O":"";return b+"Perspective"in w?"translate3d":b+"Transform"in w?"translate":"margin"};function s(w,b,S){return w<b?b:w>S?S:w}function c(w){return(-1+w)*100}function l(w,b,S){var M;return a.positionUsing==="translate3d"?M={transform:"translate3d("+c(w)+"%,0,0)"}:a.positionUsing==="translate"?M={transform:"translate("+c(w)+"%,0)"}:M={"margin-left":c(w)+"%"},M.transition="all "+b+"ms "+S,M}var f=(function(){var w=[];function b(){var S=w.shift();S&&S(b)}return function(S){w.push(S),w.length==1&&b()}})(),h=(function(){var w=["Webkit","O","Moz","ms"],b={};function S(D){return D.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,function(Y,U){return U.toUpperCase()})}function M(D){var Y=document.body.style;if(D in Y)return D;for(var U=w.length,oe=D.charAt(0).toUpperCase()+D.slice(1),H;U--;)if(H=w[U]+oe,H in Y)return H;return D}function C(D){return D=S(D),b[D]||(b[D]=M(D))}function L(D,Y,U){Y=C(Y),D.style[Y]=U}return function(D,Y){var U=arguments,oe,H;if(U.length==2)for(oe in Y)H=Y[oe],H!==void 0&&Y.hasOwnProperty(oe)&&L(D,oe,H);else L(D,U[1],U[2])}})();function p(w,b){return(typeof w=="string"?w:v(w)).indexOf(" "+b+" ")>=0}function m(w,b){var S=v(w),M=S+b;p(S,b)||(w.className=M.substring(1))}function _(w,b){var S=v(w),M;p(w,b)&&(M=S.replace(" "+b+" "," "),w.className=M.substring(1,M.length-1))}function v(w){return(" "+(w.className||"")+" ").replace(/\s+/gi," ")}function y(w){w&&w.parentNode&&w.parentNode.removeChild(w)}return o})})),j7=ua(Z7(),1),K7=/^blob:(.+?)\/(.+)$/;function Y7(e){return/^data:image\/(png|jpg|jpeg|gif|svg)/.test(e)}function X7(e){return K7.test(e)}function J7(e,t){const n=e.replace(/[?&]forceReload=\d+$/,"");return`${n+(n.includes("?")?"&":"?")}forceReload=${t}`}function T1(e,t){const n=fe("images")?.[e];if(!n?.src)return;const o=(n.reload??0)+1;if(o>X("maxReload")){Ee(`Stopped reloading Page ${e} after ${o} attempts`);return}if(Ee(`Reloading Page ${e} (Attempt ${o})`,t),t?.removeAttribute("src"),Y7(n.src)||X7(n.src))hr(e,()=>({reload:o})),t?.setAttribute("src",n.src);else{const a=J7(n.src,o);hr(e,()=>({reload:o,src:a})),t?.setAttribute("src",a)}}function Q7(e){const t=e.currentTarget,n=parseInt(t.value,10),o=fe("images")?.[n]?.ref?.value;o&&T1(n,o)}function ew(e){const t=e.currentTarget,n=parseInt(t.value,10);hr(n,o=>({hide:!o.hide}))}function tw(e){const t=e.currentTarget,n=parseInt(t.id.replace("PageImg",""),10);hr(n,f=>({...u1({naturalWidth:t.naturalWidth,naturalHeight:t.naturalHeight}),status:"loaded",doublePage:t.naturalWidth>t.naturalHeight}));const o=fe("manga"),a=fe("images")||{},s=xe.default.keys(a).filter(f=>{const h=parseInt(f,10);return h>=(o?.begin??1)&&h<=(o?.pages??1)&&a[h]?.status==="loaded"}).length,c=(o?.pages??1)-((o?.begin??1)-1),l=Math.floor(s/c*100);document.title=`(${l}%) ${fe("manga")?.title}`,j7.default.configure({showSpinner:!1}).set(s/c),Ee(`Progress: ${l}%`),s===c&&(Ee("Images Loading Complete"),De("download","available"),X("downloadZip")&&Jh())}function rw(e){const t=e.currentTarget;if(el(t.getAttribute("src")))return;const n=parseInt(t.id.replace("PageImg",""),10);hr(n,()=>({status:"error"})),T1(n,t)}function nw(e){const t=e.currentTarget,n=parseInt(t.value,10),o=fe("images"),a=fe("images")?.[n];a?.naturalWidth&&De("images",{...o,[n]:{...a,width:(a?.width||a?.naturalWidth)*(1+X("zoomStep")/100),height:void 0}})}function ow(e){const t=e.currentTarget,n=parseInt(t.value,10),o=fe("images"),a=fe("images")?.[n];a?.naturalWidth&&De("images",{...o,[n]:{...a,width:(a?.width||a?.naturalWidth)*(1-X("zoomStep")/100),height:void 0}})}function iw(e){const t=e.currentTarget,n=parseInt(t.value,10),o=fe("images"),a=fe("images")?.[n];a&&De("images",{...o,[n]:{...a,width:void 0,height:void 0}})}function aw(e){const t=e.currentTarget,n=parseInt(t.value,10),o=fe("images"),a=fe("images")?.[n];a&&De("images",{...o,[n]:{...a,width:window.innerWidth+(X("navbar")==="left"||X("navbar")==="right"?-34:0),height:void 0}})}function sw(e){const t=e.currentTarget,n=parseInt(t.value,10),o=fe("images"),a=fe("images")?.[n];a&&De("images",{...o,[n]:{...a,width:void 0,height:window.innerHeight+(X("navbar")==="bottom"?-34:0)}})}function lw(e){const t=fe("images")?.[e],n=X("viewMode").match(/^(Book|Manga)$/),o=X("viewMode")==="Gallery",a=X("viewMode").startsWith("Fluid"),s=X("navbar")==="bottom";return{width:t?.width?`${t.width}px`:"auto",height:t?.height?`${t.height}px`:"auto","max-height":a?`${window.innerHeight+(s?-34:0)}px`:void 0,"min-width":!n&&!o?`${X("minZoom")}vw`:void 0}}var cw=(e,t)=>os(e,t).map(n=>{fe("images")?.[n]?.ref||hr(n,f=>({ref:ul()}));let o=0;for(let f=n-1;f>=t&&!fe("images")?.[f].doublePage;f--)fe("images")?.[f].doublePage||o++;const a=fe("images")?.[n].doublePage??!1,s=X("viewMode")==="Book",c=!a&&(s?o%2===0:o%2===1),l=!a&&(s?o%2===1:o%2===0);return ne`
      <div
        id="Page${n}"
        class="${St({MangaPage:!0,hide:!!fe("images")?.[n].hide,DoublePage:a,LeftPage:c&&!a,RightPage:l&&!a})}"
      >
        <div class="PageFunctions">
          <button
            class="Bookmark PageButton"
            title="${Z("BOOKMARK")}"
            @click=${g1}
            value="${n}"
          >
            ${Oo()?S6:E6}
          </button>
          <button
            class="ZoomIn PageButton"
            title="${Z("ZOOM_IN")}"
            @click=${nw}
            value="${n}"
          >
            ${T6}
          </button>
          <button
            class="ZoomRestore PageButton"
            title="${Z("ZOOM_RESET")}"
            @click=${iw}
            value="${n}"
          >
            ${O6}
          </button>
          <button
            class="ZoomOut PageButton"
            title="${Z("ZOOM_OUT")}"
            @click=${ow}
            value="${n}"
          >
            ${L6}
          </button>
          <button
            class="ZoomHeight PageButton"
            title="${Z("ZOOM_HEIGHT")}"
            @click=${sw}
            value="${n}"
          >
            ${y6}
          </button>
          ${X("viewMode").match(/^(Book|Manga)$/)?ne`
            <button
              class="DoublePage PageButton"
              title="${Z("DOUBLE_PAGE")}"
              @click=${()=>{hr(n,f=>({doublePage:!f.doublePage}))}}
              value="${n}"
            >
              ${C6}
            </button>`:ne`
              <button
                class="ZoomWidth PageButton"
                title="${Z("ZOOM_WIDTH")}"
                @click=${aw}
                value="${n}"
              >
                ${k6}
              </button>`}
          <button
            class="Hide PageButton"
            title="${Z("HIDE")}"
            @click=${ew}
            value="${n}"
          >
            ${fe("images")?.[n].hide?M6:x6}
          </button>
          <button
            class="Reload PageButton"
            title="${Z("RELOAD")}"
            @click=${Q7}
            value="${n}"
          >
            ${I6}
          </button>
          <span class="PageIndex">${n}</span>
        </div>
        <div class="PageContent">
          <img
            id="PageImg${n}"
            alt="Page ${n}"
            class="${St({PageImg:!0,imgBroken:fe("images")?.[n]?.status==="error"})}"
            src=${fe("images")?.[n]?.src??He}
            style="${Jr(lw(n))}"
            @load=${tw}
            @error=${rw}
            ${hl(fe("images")?.[n].ref)}
          />
        </div>
      </div>
      <div class="separator">
        [ ${n===e?Z("END"):`${n} / ${e}`} ]
      </div>
    `}),uw=e=>ne`
  <main
    id="Chapter"
    ${hl(fe("chapter"))}
    class="${St({fitWidthIfOversize:X("fitWidthIfOversize"),[X("viewMode")]:!0,separator:X("viewMode")==="Vertical"})}"
    @wheel=${t=>{X("viewMode")==="FluidLTR"?E1(t):X("viewMode")==="FluidRTL"&&l7(t)}}
  >
    ${cw(e.pages,e.begin??0)}
  </main>
`,dw=":root:not(.light,.dark){--theme-body-background:#25262b;--theme-body-text-color:#c1c2c5;--theme-text-color:#c1c2c5;--theme-primary-color:#1a1b1e;--theme-primary-text-color:#c1c2c5;--theme-background-color:#25262b;--theme-hightlight-color:#2c2e33;--theme-border-color:#373a40;--theme-secondary-color:#2c2e33;--theme-secondary-text-color:#c1c2c5}:host{all:initial;box-sizing:border-box;display:block}#MangaOnlineViewer{color:var(--theme-body-text-color);background-color:var(--theme-body-background);box-sizing:border-box;--mov-font-size-m:16px;min-height:100vh;text-decoration:none}#Chapter{box-sizing:border-box;grid-template-columns:repeat(1,1fr);min-width:225px;display:grid}#Chapter.Vertical:has(+#Navigation:not(.disabled)),#Chapter.WebComic:has(+#Navigation:not(.disabled)){padding-bottom:31px}#Chapter.Vertical .PageContent{margin-top:8px;margin-bottom:8px}.closeButton{width:fit-content;height:fit-content;position:absolute;top:10px;right:10px}.overlay{z-index:950;cursor:pointer;background-color:#00000080;width:100%;height:100%;display:none;position:fixed;inset:0}.overlay.visible{display:block}select{height:20px;margin:2px}:not(.FluidRTL,.FluidLTR).fitWidthIfOversize .PageContent .PageImg{object-fit:contain;max-width:100%}.hideControls .PageFunctions{visibility:hidden}",hw="@-webkit-keyframes spin{to{transform:rotate(360deg)}}@keyframes spin{to{transform:rotate(360deg)}}@-webkit-keyframes spin-reverse{0%{transform:rotate(360deg)}to{transform:rotate(0)}}@keyframes spin-reverse{0%{transform:rotate(360deg)}to{transform:rotate(0)}}.icon-tabler-loader-2,.animate-spin{-webkit-animation:1s linear infinite spin;animation:1s linear infinite spin}.animate-spin-reverse{-webkit-animation:1s linear infinite spin-reverse;animation:1s linear infinite spin-reverse}",fw="#Chapter:where(.Book,.Manga){grid-template-columns:1fr 1fr;grid-auto-flow:row;gap:0;width:100%;min-width:auto;display:grid}#Chapter:where(.Book,.Manga) .MangaPage{width:100%;min-height:22px;display:block;position:relative;overflow:hidden}#Chapter:where(.Book,.Manga) .MangaPage .PageFunctions{border-radius:0 0 0 4px;flex-direction:row;top:0;left:auto;right:0}#Chapter:where(.Book,.Manga) .MangaPage.LeftPage .PageFunctions{border-radius:0 0 4px;flex-direction:row-reverse;left:0;right:auto}#Chapter:where(.Book,.Manga) .MangaPage.DoublePage{grid-column:span 2}#Chapter:where(.Book,.Manga) .MangaPage .PageContent{flex-shrink:0;justify-content:center;align-items:center;display:flex;overflow:hidden}#Chapter:where(.Book,.Manga) .MangaPage.LeftPage .PageContent{justify-content:flex-end;padding-right:0}#Chapter:where(.Book,.Manga) .MangaPage.RightPage .PageContent{justify-content:flex-start;padding-left:0}#Chapter:where(.Book,.Manga) .MangaPage.DoublePage .PageContent{justify-content:center}#Chapter.Manga{direction:rtl}#Chapter.Manga .MangaPage{direction:ltr}",pw="#Chapter.FluidLTR,#Chapter.FluidRTL{min-width:auto;display:flex;overflow-x:auto;& .ZoomWidth{display:none}& .PageImg{min-width:unset}& .MangaPage{width:initial;min-width:fit-content;position:relative}& .MangaPage.DoublePage{grid-column:span 2}}#Chapter.FluidLTR{flex-direction:row;& .MangaPage .PageFunctions{direction:rtl;left:0;right:auto}}#Chapter.FluidRTL{flex-direction:row-reverse}",mw="#Chapter.Gallery{flex-wrap:wrap;justify-content:center;gap:10px;padding:10px;display:flex}.Gallery .MangaPage{width:auto;min-width:unset;flex:0 auto}.Gallery .MangaPage .PageContent .PageImg{min-width:unset}.Gallery .PageFunctions,.Gallery .separator{display:none}",gw='.PageButton .icon-tabler{vertical-align:sub;width:1rem;height:1rem}.PageButton,.PageButton:visited,.PageButton:link{cursor:pointer;min-height:32px;color:var(--mov-color-on-loud);background-color:var(--mov-color-fill-loud);border-style:solid;border-width:1px;border-color:var(--theme-border-color);border-radius:5px;padding:2px;text-decoration:none}.PageButton:active,.PageButton:hover{opacity:.8}.PageButton[selected]{background-color:var(--mov-color-fill-normal);color:var(--mov-color-on-normal);border:1px solid var(--theme-border-color)}.PageButton.hidden{display:none}.MangaPage{text-align:center;width:100%;min-width:100%;min-height:22px;line-height:0;display:inline-block}.PageContent{text-align:center;max-width:100%;height:100%;transition:all .3s ease-in-out;display:inline-block;overflow:auto hidden}.MangaPage.hide .PageContent{height:0}.PageContent .PageImg[src=""],.PageContent .PageImg:not([src]),.PageContent .PageImg.imgBroken{background-position:50%;background-repeat:no-repeat;background-size:20%;background-color:var(--theme-hightlight-color);text-align:center;vertical-align:top;width:40vw;height:80vh;color:var(--theme-text-color);min-width:40vw;max-width:100%;min-height:50vh;max-height:100%;margin:0;font-size:16px;line-height:80vh;display:inline-block;position:relative}.PageContent .PageImg[src=""]:before,.PageContent .PageImg:not([src]):before,.PageContent .PageImg.imgBroken:before{content:attr(alt);white-space:pre-wrap;text-align:center;color:var(--theme-text-color);font-size:16px;position:absolute;top:40%;left:50%;transform:translate(-50%,-50%)}.PageFunctions{justify-content:flex-end;align-items:center;gap:3px;margin:0;padding:0;font-family:monospace;display:flex;position:absolute;right:0}.PageFunctions>.PageIndex{background-color:var(--mov-color-fill-loud);color:var(--mov-color-on-loud);text-align:center;border-radius:5px;min-width:20px;padding:3px 5px;line-height:1rem;display:inline-block}.PageFunctions .PageButton{opacity:.5;border-width:0;justify-content:center;align-items:center;min-height:auto;margin:0;padding:3px;display:flex}.PageFunctions:hover .PageButton{opacity:1}.PageFunctions .PageButton:hover{opacity:.9}#Chapter.Vertical .separator{text-align:center;align-items:center;font-style:italic;display:flex}#Chapter.Vertical .separator:before,#Chapter.Vertical .separator:after{content:"";border-bottom:1px solid var(--theme-text-color);flex:1}#Chapter.Vertical.separator:not(:empty):before{margin-right:.25em}#Chapter.Vertical.separator:not(:empty):after{margin-left:.25em}#Chapter:not(.separator) .separator,#Chapter:not(.Vertical) .separator{display:none}',vw="#MangaOnlineViewer{color:var(--theme-body-text-color);background-color:var(--theme-body-background);margin:0;padding:0;font-family:Helvetica Neue,Helvetica,Arial,sans-serif;font-size:16px;line-height:20px}a,a:link,a:visited,a:active,a:focus{color:var(--theme-body-text-color);text-decoration:none}img{vertical-align:middle;border:0;height:auto}",bw=":root{--theme-primary-color:#007bff;--theme-primary-text-color:#fff;--theme-secondary-color:#6c757d;--theme-secondary-text-color:#fff;--theme-body-background:#212529;--theme-body-text-color:#f8f9fa;--theme-text-color:#f8f9fa;--theme-background-color:#212529;--theme-hightlight-color:#343a40;--theme-border-color:#495057;--mov-color-fill-quiet:#ced4da;--mov-color-fill-normal:#adb5bd;--mov-color-fill-loud:#007bff;--mov-color-border-quiet:#adb5bd;--mov-color-border-normal:#6c757d;--mov-color-border-loud:#495057;--mov-color-on-quiet:#343a40;--mov-color-on-normal:#fff;--mov-color-on-loud:#fff;--mov-color-mix-hover:#00000014;--mov-color-mix-active:#00000029}.light{--theme-body-background:#f8f9fa;--theme-body-text-color:#212529;--theme-text-color:#212529;--theme-background-color:#f8f9fa;--theme-hightlight-color:#e9ecef;--theme-border-color:#dee2e6;--mov-color-fill-quiet:#f8f9fa;--mov-color-fill-normal:#e9ecef;--mov-color-fill-loud:#007bff;--mov-color-border-quiet:#e9ecef;--mov-color-border-normal:#dee2e6;--mov-color-border-loud:#adb5bd;--mov-color-on-quiet:#6c757d;--mov-color-on-normal:#fff;--mov-color-on-loud:#fff;--mov-color-mix-hover:#0000001a;--mov-color-mix-active:#0003}",ww=Et`
  .PageContent .PageImg[src=''],
  .PageContent .PageImg:not([src]) {
    background-image: url('${Me(Ui(wl))}');
  }

  .PageContent .PageImg.imgBroken {
    background-image: url('${Me(Ui(_l))}');
  }

  ${Me(bw)}
  ${Me(vw)}
  ${Me(dw)}
  ${Me(gw)}
  ${Me(pw)}
  ${Me(fw)}
  ${Me(mw)}
  ${Me(v1)}
  ${Me(hw)}
`,_w=(e="#MangaOnlineViewer",t=X("theme"))=>{const n=Yh(t),o=Zo(t),a=X("colorScheme")==="dark"?n[8]:n[2],s=Zo(a);return Et`
    :where(:root),
    ${Me(e)}, .dark,
    ${Me(e)}.dark {
      --theme-primary-color: ${Me(t)};;
      --theme-primary-text-color: ${Me(o)};;
      --theme-secondary-color: ${Me(a)};;
      --theme-secondary-text-color: ${Me(s)};;

      color-scheme: dark;
      --theme-body-background: ${Me(Ot.dark[600])};;
      --theme-body-text-color: ${Me(Ot.dark[50])};;
      --theme-text-color: ${Me(Ot.dark[50])};;
      --theme-background-color: ${Me(Ot.dark[600])};;
      --theme-hightlight-color: ${Me(Ot.dark[500])};;
      --theme-border-color: ${Me(Ot.dark[400])};;

      --mov-color-fill-quiet: ${Me(n[9])};;
      --mov-color-fill-normal: var(--theme-secondary-color, ${Me(n[8])};);
      --mov-color-fill-loud: var(--theme-primary-color);
      --mov-color-border-quiet: ${Me(n[8])};;
      --mov-color-border-normal: ${Me(n[7])};;
      --mov-color-border-loud: ${Me(n[6])};;
      --mov-color-on-quiet: ${Me(n[4])};;
      --mov-color-on-normal: var(--theme-secondary-text-color, ${Me(n[3])};);
      --mov-color-on-loud: var(--theme-primary-text-color, white);

      --mov-color-mix-hover: black 8%;
      --mov-color-mix-active: black 16%;
    }

    .light,
    ${Me(e)};.light {
      color-scheme: light;
      --theme-body-background: ${Me(Ot.gray[50])};;
      --theme-body-text-color: ${Me(Ot.gray[900])};;
      --theme-text-color: ${Me(Ot.gray[900])};;
      --theme-background-color: ${Me(Ot.gray[50])};;
      --theme-hightlight-color: ${Me(Ot.gray[500])};;
      --theme-border-color: ${Me(Ot.gray[100])};;

      --mov-color-fill-quiet: ${Me(n[0])};;
      --mov-color-fill-normal: var(--theme-secondary-color, ${Me(n[1])};);
      --mov-color-fill-loud: var(--theme-primary-color);
      --mov-color-border-quiet: ${Me(n[1])};;
      --mov-color-border-normal: ${Me(n[2])};;
      --mov-color-border-loud: ${Me(n[4])};;
      --mov-color-on-quiet: ${Me(n[6])};;
      --mov-color-on-normal: var(--theme-secondary-text-color, ${Me(n[3])};);
      --mov-color-on-loud: var(--theme-primary-text-color, white);

      --mov-color-mix-hover: black 10%;
      --mov-color-mix-active: black 20%;
    }
  `},yw="#StartMOV{all:revert;backface-visibility:hidden;color:#fff;cursor:pointer;text-align:center;z-index:105000;background-image:linear-gradient(90deg,#667eea,#764ba2,#6b8dd6,#8e37d7);background-size:300% 100%;border:none;border-radius:10px;width:80%;min-height:50px;margin:0 auto;padding:.5rem 1rem;font-size:32px;transition:all .4s ease-in-out;position:fixed;bottom:0;left:0;right:0;box-shadow:0 4px 15px #744fa8bf}#StartMOV:hover{background-position:100% 0;transition:all .4s ease-in-out}#StartMOV:focus{outline:none}#pagesSliderVal{text-align:center;margin-top:15px;font-weight:700;display:block}",Nn=class extends rt{constructor(...t){super(...t),this.mangaPages=0,this.begin=1,this.timeoutMs=3e3,this.status="initial-prompt"}static{this.styles=[Me(yw)]}connectedCallback(){super.connectedCallback(),this.status==="initial-prompt"&&(this.timeoutId=window.setTimeout(()=>{this.handleStart()},this.timeoutMs))}disconnectedCallback(){super.disconnectedCallback(),window.clearTimeout(this.timeoutId)}handleStart(){window.clearTimeout(this.timeoutId),this.dispatchEvent(new CustomEvent("start",{detail:null}))}handleLateStart(t,n){this.dispatchEvent(new CustomEvent("start",{detail:{begin:t,end:n}}))}handleButtonCLick(){this.status="late-start-prompt"}handleDialogClose(t){t.stopPropagation(),window.clearTimeout(this.timeoutId),this.status="late-start-button"}render(){switch(this.status){case"late-start-button":return this.renderLateStartButton();case"late-start-prompt":return this.renderLateStartPrompt();default:return this.renderInitialPrompt()}}renderInitialPrompt(){return ne`
      <mov-dialog
        ?open=${this.status==="initial-prompt"}
        icon="info"
        @close=${this.handleDialogClose}
      >
        <span slot="label">${Z("STARTING")}</span>
        <div style="padding: 1rem;">${Z("WAITING")}</div>
        <div
          slot="footer"
          style="display: flex; justify-content: space-between; padding: 0.5rem 1rem 1rem;"
        >
          <mov-button
            @click=${this.handleDialogClose}
            style="--mov-color-fill-loud: ${Ot.red[700]}; --mov-color-on-loud: white;"
          >
            Cancel
          </mov-button>
          <mov-button
            @click=${this.handleStart}
            style="--mov-color-fill-loud: ${Ot.green[700]}; --mov-color-on-loud: white;"
          >
            Start Now
          </mov-button>
        </div>
      </mov-dialog>
    `}renderLateStartButton(){return ne`
      <button
        id="StartMOV"
        @click=${this.handleButtonCLick}
      >
        ${Z("BUTTON_START")}
      </button>
    `}renderLateStartPrompt(){this.beginPage??=this.begin,this.endPage??=this.mangaPages;const t=n=>{this.beginPage=n.detail.value[0],this.endPage=n.detail.value[1]};return ne`
      <mov-dialog
        ?open=${this.status==="late-start-prompt"}
        icon="question"
        @close=${this.handleDialogClose}
      >
        <span slot="label">${Z("STARTING")}</span>
        <div style="padding: 1rem;">
          ${Z("CHOOSE_BEGINNING")}
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
            style="--mov-color-fill-loud: ${Ot.red[700]}; --mov-color-on-loud: white;"
          >
            Close
          </mov-button>
          <mov-button
            @click=${()=>this.handleLateStart(this.beginPage??0,this.endPage??this.mangaPages)}
            style="--mov-color-fill-loud: ${Ot.green[700]}; --mov-color-on-loud: white;"
          >
            Run
          </mov-button>
        </div>
      </mov-dialog>
    `}};z([K({type:Number,reflect:!0})],Nn.prototype,"mangaPages",void 0),z([K({type:Number,reflect:!0})],Nn.prototype,"begin",void 0),z([K({type:Number})],Nn.prototype,"timeoutMs",void 0),z([K({type:String,reflect:!0})],Nn.prototype,"status",void 0),z([Ht()],Nn.prototype,"beginPage",void 0),z([Ht()],Nn.prototype,"endPage",void 0),Nn=z([ct("script-startup")],Nn);function kw(e){if(!e?.parentNode)return e;const t=e.cloneNode(!0);return e.parentNode.replaceChild(t,e),t}var Ew=e=>{e.getAttributeNames().forEach(t=>{e?.removeAttribute(t)})},Sw=(...e)=>{e?.forEach(Ew),e?.forEach(kw)};function Aw(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var L1,ls=class extends rt{constructor(...t){super(...t),this.loadMode="wait"}static{this.styles=[Et``,Me(ww)]}async start(t,n){this.manga&&(document.documentElement.hasAttribute("mov")||(Sw(document.documentElement,document.head,document.body),document.documentElement.setAttribute("mov","")),window.scrollTo(0,0),De("manga",{...this.manga,begin:t??this.manga.begin,pages:n??this.manga.pages}))}firstUpdated(){this.loadMode==="always"&&this.start(),q7(),W7()}render(){const t=fe("manga"),n=fe("dialog");return ne`
      <style>
        ${_w()}
      </style>
      <div
        id="MangaOnlineViewer"
        class="${St({[X("colorScheme")]:!0,hideControls:X("hidePageControls"),bookmarked:!!Oo(),[fe("device")]:!0})}"
        style="${Jr({[`padding-${X("navbar")}`]:"34px"})}"
        .locale="${X("locale")}"
      >
        ${t?ne` <reader-header .manga=${t}></reader-header>
              ${uw(t)}
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
              <moaqz-toaster dismissable></moaqz-toaster>`:ne(L1||(L1=Aw([` <script-startup
              .mangaPages="`,`"
              begin="`,`"
              status="`,`"
              @start=`,`
            ><\/script-startup>`])),this.manga?.pages,this.manga?.begin,this.loadMode==="never"?"late-start-button":"initial-prompt",o=>{this.start(o.detail?.begin,o.detail?.end)})}
        ${n?ne`
              <mov-dialog
                open
                .icon=${n.icon}
                @close=${()=>De("dialog",null)}
              >
                <span slot="label">${n.title}</span>
                ${n.content} ${n.footer}
              </mov-dialog>
            `:""}
      </div>
    `}};z([K({type:String,reflect:!0})],ls.prototype,"loadMode",void 0),z([K({type:Object})],ls.prototype,"manga",void 0),ls=z([ct("manga-online-viewer"),(0,Xo.useStores)(Tt,xo,nr)],ls);var Mw=`/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */
html{-webkit-text-size-adjust:100%;line-height:1.15}body{margin:0}main{display:block}h1{margin:.67em 0;font-size:2em}hr{box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace;font-size:1em}a{background-color:#0000}abbr[title]{border-bottom:none;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace;font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}img{border-style:none}button,input,optgroup,select,textarea{margin:0;font-family:inherit;font-size:100%;line-height:1.15}button,input{overflow:visible}button,select{text-transform:none}button,[type=button],[type=reset],[type=submit]{-webkit-appearance:button}button::-moz-focus-inner,[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring{outline:1px dotted buttontext}fieldset{padding:.35em .75em .625em}legend{box-sizing:border-box;color:inherit;white-space:normal;max-width:100%;padding:0;display:table}progress{vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details{display:block}summary{display:list-item}template,[hidden]{display:none}`,xw="#nprogress{pointer-events:none}#nprogress .bar{z-index:1031;background:#29d;width:100%;height:2px;position:fixed;top:0;left:0}#nprogress .peg{opacity:1;width:100px;height:100%;display:block;position:absolute;right:0;-webkit-transform:rotate(3deg)translateY(-4px);-ms-transform:rotate(3deg)translateY(-4px);transform:rotate(3deg)translateY(-4px);box-shadow:0 0 10px #29d,0 0 5px #29d}#nprogress .spinner{z-index:1031;display:block;position:fixed;top:15px;right:15px}#nprogress .spinner-icon{box-sizing:border-box;border:2px solid #0000;border-color:#29d #0000 #0000 #29d;border-radius:50%;width:18px;height:18px;-webkit-animation:.4s linear infinite nprogress-spinner;animation:.4s linear infinite nprogress-spinner}.nprogress-custom-parent{position:relative;overflow:hidden}.nprogress-custom-parent #nprogress .spinner,.nprogress-custom-parent #nprogress .bar{position:absolute}@-webkit-keyframes nprogress-spinner{0%{-webkit-transform:rotate(0)}to{-webkit-transform:rotate(360deg)}}@keyframes nprogress-spinner{0%{transform:rotate(0)}to{transform:rotate(360deg)}}",Iw="#nprogress .bar{z-index:1031;background:#29d;width:100%;height:4px;position:fixed;top:0;left:0}html[mov] body>:not(manga-online-viewer,#nprogress){display:none!important}html[mov]{all:unset;font-size:16px}",Cw=[Mw,xw,Iw].join(`
`);async function Ow([e,t]){Ee(`Found Pages: ${t.pages} in ${e?.name}`),t.title||(t.title=document.querySelector("title")?.textContent?.trim()),t.begin=Oo()??t.begin??1,t.before!==void 0&&(jt("Executing Preparation"),await t.before(t.begin??0)),document.head.innerHTML+=u4("externals",Cw),zp(unsafeWindow.customElements.whenDefined("manga-online-viewer"),1e4).then(()=>{const n=document.createElement("manga-online-viewer");n.loadMode=e?.start??X("loadMode"),n.manga=t,document.body.appendChild(n),Ee("Viewer Ready",n)}).catch(n=>Ee("Define WebComponent failed",n))}async function Tw(e){Ee(`Starting ${Js.script.name} ${Js.script.version} on ${da()} ${Op()} with ${Tp()}`),Ee(e.length,"Known Manga Sites:",e);const t=e.filter(o=>o.url.test(window.location.href));Ee(t.length,"Found sites:",t);const n=t.map(async o=>{Ee(`Testing site: ${o.name}`),await Np(o),jt(o.name,"Passed");const a=await o.run();if(jt("Processed site:",o,a),a.pages>0)return[o,a];throw new Error(`${o.name} found ${a.pages} pages`)});try{const o=await Promise.any(n);jt("Going with",o[0].name),Ow(o)}catch(o){if(o instanceof AggregateError){Ee("All sites failed to run:");for(const a of o.errors)Ee(a.message)}else Ee("An unexpected error occurred:",o)}}var Lw={eq:(e,t)=>e.textContent?.trim()===t,starts:(e,t)=>!!e.textContent?.trim()?.startsWith(t),ends:(e,t)=>!!e.textContent?.trim()?.endsWith(t)};function R1(e,t,n){const o=Lw[n];if(!o)throw new Error(`Invalid matcherKey: ${n}`);return[...document.querySelectorAll(e)].filter(a=>xe.default.castArray(t).some(s=>o(a,s)))}function Rw(e,t,n){return R1(e,t,n)?.[0]}function $c(e,t,n,o="a"){return Rw(e,t,n)?.closest(o)??null}var P1=(e,t)=>R1(e,t,"eq"),uo=(e,t,n="a")=>$c(e,t,"eq",n),Dc=(e,t,n="a")=>$c(e,t,"starts",n),Pw=(e,t,n="a")=>$c(e,t,"ends",n),$w={name:"Asura Scans",url:/https?:\/\/(www.)?(asurascans|asuracomics).(com|net)\/.+/,homepage:"https://asurascans.com/",language:[Re.ENGLISH],category:$e.MANGA,waitEle:'astro-island[component-url*="ChapterReader"]',run(){const e=document.querySelector('astro-island[component-url*="ChapterReader"]'),t=JSON.parse(e?.getAttribute("props")||"{}"),n=t.seriesSlug?.[1],o=(t.pages?.[1]||[]).map(a=>a[1]?.url?.[1]).filter(Boolean);return{title:`${t.seriesName?.[1]} - Chapter ${t.chapterName?.[1]}`,series:`/comics/${n}`,pages:o.length,prev:uo("span","Prev","a")?.getAttribute("href")||document.querySelector('link[rel="prev"]')?.getAttribute("href")||void 0,next:uo("span","Next","a")?.getAttribute("href")||document.querySelector('link[rel="next"]')?.getAttribute("href")||void 0,listImages:o}}},Dw={name:"Batoto",url:/https?:\/\/(?:www\.)?(?:fto|jto|hto|dto|mto|wto|bato|battwo|batotwo|comiko|batocomic|readtoto|zbato|xbato|mangatoto)\.(?:to|com|net|org)\/(chapter|title).*/,homepage:"https://rentry.co/batoto",language:[Re.ENGLISH],category:$e.MANGA,waitEle:'div[name="image-item"] img, .page-img',run(){if(window.location.pathname.startsWith("/title")){window.location.search!=="?load=2"&&(window.location.search="?load=2");const t=[...document.querySelectorAll('div[name="image-item"] img')];return{title:document.querySelector("h6")?.textContent?.trim(),series:document.querySelector("h3 a")?.getAttribute("href"),pages:t.length,prev:Pw("span","Prev Chapter","a")?.getAttribute("href"),next:Dc("span","Next Chapter","a")?.getAttribute("href"),listImages:t.map(n=>n.getAttribute("src")??"")}}const e=[...document.querySelectorAll(".page-img")];return{title:document.querySelector(".nav-title a")?.textContent?.trim(),series:document.querySelector(".nav-title a")?.getAttribute("href"),pages:e.length,prev:document.querySelector(".nav-prev a")?.getAttribute("href"),next:document.querySelector(".nav-next a")?.getAttribute("href"),listImages:e.map(t=>t.getAttribute("src")??"")}}},zw={name:"BilibiliComics",url:/https?:\/\/(www\.)?(bilibilicomics).net\/episode\/.+/,homepage:"https://www.bilibilicomics.net/",language:[Re.ENGLISH],category:$e.MANGA,waitEle:"#__NUXT_DATA__",async run(){const e=JSON.parse(document.querySelector("#__NUXT_DATA__")?.innerHTML??"").filter(t=>typeof t=="string"&&/.(png|jpg|jpeg|gif|bmp|webp)$/i.exec(t));return{title:document.querySelector(".chapterTitle")?.textContent?.trim(),series:document.querySelector(".book-name")?.getAttribute("href"),pages:e.length,prev:document.querySelectorAll(".pre-next-btns").item(0)?.getAttribute("href"),next:document.querySelectorAll(".pre-next-btns").item(2)?.getAttribute("href"),listImages:e.map(t=>`https://static.comicfans.io/${t}`)}}},Nw={name:"Comick",url:/https?:\/\/(www\.)?comick.io\/.+/,homepage:"https://comick.io/",language:[Re.ENGLISH],category:$e.MANGA,waitFunc(){return/\/([^/]+)-chapter.+$/.test(window.location.pathname)},waitEle:"#__NEXT_DATA__",waitTime:3e3,run(){const e=JSON.parse(document.getElementById("__NEXT_DATA__")?.innerHTML??"")?.props?.pageProps,t=e?.chapter?.md_images?.map(n=>`https://meo.comick.pictures/${n?.b2key}`);return{title:e?.seoTitle??`${e.chapter?.md_comics?.title} ${e?.chapter?.chap}`,series:`/comic/${e?.chapter?.md_comics?.slug}`,pages:t?.length,prev:e?.prev?.href,next:e?.next?.href,listImages:t}}};async function Bw(e){try{const t=await(await fetch(e)).blob();return new Promise((n,o)=>{const a=new FileReader;a.onloadend=()=>n(a.result),a.onerror=o,a.readAsDataURL(t)})}catch(t){return console.error(`Failed to convert blob URL ${e} to data URL:`,t),e}}async function Hw(e,t,n){const o=document.createElement("div");o.style.cssText="position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; background: rgba(33, 37, 41, 0.95); z-index: 999999; display: flex; flex-direction: column; align-items: center; justify-content: center; color: white; font-family: sans-serif; font-size: 20px;",o.innerHTML=`
    <div style="font-size: 24px; font-weight: bold; margin-bottom: 20px;">MangaOnlineViewer</div>
    <div id="mov-loading-text">Preparing pages...</div>
    <div style="margin-top: 20px; width: 200px; height: 6px; background: #495057; border-radius: 3px; overflow: hidden;">
      <div id="mov-loading-bar" style="width: 0; height: 100%; background: #37b24d; transition: width 0.1s;"></div>
    </div>
  `,document.body.appendChild(o);const a=(l,f)=>{const h=f>0?Math.round(l/f*100):0,p=document.getElementById("mov-loading-text"),m=document.getElementById("mov-loading-bar");p&&(p.textContent=`Scrolling and waiting for pages to load: ${l} / ${f||"?"}`),m&&(m.style.width=f>0?`${h}%`:"50%")};a(0,e);const s=window.scrollY,c=[];try{for(let l=0;l<e;l++){let f=null,h=0;for(;h<5e3;){const _=[...document.querySelectorAll("img")].filter(t);if(_[l]){f=_[l];break}await new Promise(v=>setTimeout(v,100)),h+=100}if(!f){Ee(`Failed to find image element for page ${l+1}`);continue}f.scrollIntoView({behavior:"auto",block:"center"});let p=0,m="";for(;p<5e3;){const _=f.src||f.getAttribute("src")||"";if(_&&n(_)&&(f.naturalWidth>250||f.complete)){const v=f.naturalWidth||f.width||0;if(v===0||v>=250){m=_;break}}await new Promise(v=>setTimeout(v,100)),p+=100}m?c.push(m):(Ee(`Timeout waiting for image ${l+1} to load`),c.push(f.src||f.getAttribute("src")||"")),a(c.length,e)}}finally{window.scrollTo(0,s),o.remove()}if(c.length===0)throw new Error("No images collected from the page");return await Promise.all(c.map(async l=>l.startsWith("blob:")?await Bw(l):l))}var cs=null;if(typeof window<"u"&&window.location.hostname.includes("comix.to")){const e=JSON.parse;JSON.parse=(t,n)=>{const o=e(t,n);try{o?.result?.pages&&(cs=o.result.pages,Ee("Intercepted chapter pages data from JSON.parse",cs))}catch{}return o}}function Fw(){const e=document.querySelector("#app-root");if(!e)return null;const t=Object.keys(e).find(o=>o.startsWith("__reactContainer")||o.startsWith("__reactFiber"));if(!t)return null;const n=[e[t]];for(;n.length>0;){const o=n.pop();if(o){if(o.stateNode?.props){const a=o.stateNode.props.client;if(a&&typeof a.getQueryCache=="function"){const s=a.getQueryCache().getAll();for(const c of s){const l=c.state.data;if(l?.result?.pages)return l.result.pages}}}if(o.memoizedProps){const a=o.memoizedProps.client||o.memoizedProps.value;if(a&&typeof a.getQueryCache=="function"){const s=a.getQueryCache().getAll();for(const c of s){const l=c.state.data;if(l?.result?.pages)return l.result.pages}}}o.child&&n.push(o.child),o.sibling&&n.push(o.sibling)}}return null}function Gw(){const e=document.querySelector("#app-root");if(!e)return null;const t=Object.keys(e).find(o=>o.startsWith("__reactContainer")||o.startsWith("__reactFiber"));if(!t)return null;const n=[e[t]];for(;n.length>0;){const o=n.pop();if(!o)continue;const a=s=>{if(s&&typeof s.getQueryCache=="function"){const c=s.getQueryCache().getAll();for(const l of c){const f=l.state.data;if(f){if(Array.isArray(f)&&f.length>0&&(f[0].chapterNumber!==void 0||f[0].number!==void 0))return f;if(f.result&&Array.isArray(f.result.items)&&f.result.items.length>0){const h=f.result.items[0];if(h.chapterNumber!==void 0||h.number!==void 0||h.mangaId!==void 0)return f.result.items}}}}return null};if(o.stateNode?.props){const s=a(o.stateNode.props.client);if(s)return s}if(o.memoizedProps){const s=a(o.memoizedProps.client||o.memoizedProps.value);if(s)return s}o.child&&n.push(o.child),o.sibling&&n.push(o.sibling)}return null}function Ww(){const e=document.querySelector('select[aria-label*="page" i], select[class*="page" i], select[id*="page" i]');return e?e.querySelectorAll("option").length:0}function Uw(){const e=[...document.querySelectorAll("span, div, button, option")];for(const t of e){const n=t.textContent||"",o=/^\s*1\s*(?:\/|of)\s*(\d+)\s*$/i.exec(n.trim());if(o){const a=parseInt(o[1],10);if(a>0&&a<500)return a}}return 0}function Vw(){const e=[...document.querySelectorAll("a")];let t=null,n=null;for(const o of e){const a=o.getAttribute("href");if(!a?.includes("/title/")||!/\/\d+-chapter-/.test(a))continue;const s=(o.textContent||"").toLowerCase().trim(),c=(o.getAttribute("aria-label")||"").toLowerCase();(s.includes("next")||c.includes("next")||o.querySelector('[class*="next"]')||o.querySelector('[class*="right"]'))&&(t=a),(s.includes("prev")||s.includes("previous")||c.includes("prev")||c.includes("previous")||o.querySelector('[class*="prev"]')||o.querySelector('[class*="left"]'))&&(n=a)}return{prev:n,next:t}}function qw(){const e=[...document.querySelectorAll("a")],t=[];for(const f of e){const h=f.getAttribute("href");if(!h?.includes("/title/")||!/\/\d+-chapter-/.test(h))continue;const p=/-chapter-(\d+(\.\d+)?)/.exec(h);p&&t.push({href:h,num:parseFloat(p[1])})}if(t.length===0)return{prev:null,next:null};const n=new Set,o=t.filter(f=>{const h=f.href.split("#")[0].split("?")[0];return n.has(h)?!1:(n.add(h),!0)});o.sort((f,h)=>f.num-h.num);const a=window.location.pathname.split("#")[0].split("?")[0],s=o.findIndex(f=>f.href.includes(a)||a.includes(f.href));let c=null,l=null;return s!==-1&&(s>0&&(c=o[s-1].href),s<o.length-1&&(l=o[s+1].href)),{prev:c,next:l}}function Zw(){const{prev:e,next:t}=Vw();return e||t?{prev:e,next:t}:qw()}function $1(e){if(!e.closest("#app-root")&&!e.closest(".rpage-body"))return!1;const t=e.src||e.getAttribute("src")||"";if(!t||t.includes("avatar")||t.includes("logo")||t.includes("icon")||t.includes("placeholder")||t.startsWith("data:image/svg+xml"))return!1;const n=e.naturalWidth||e.width||0;return!(n>0&&n<250)}function jw(e){return!e||e.includes("placeholder")||e.startsWith("data:image/svg+xml")||e.includes("loading")?!1:e.startsWith("data:")||e.startsWith("blob:")||e.includes("comix.to")||e.includes("static.comix.to")||e.includes("wowpic")}var Kw={name:"Comix.to",homepage:"https://comix.to/",url:/https?:\/\/comix\.to\/(title|comic)\/.+\/.+/,language:Re.ENGLISH,category:$e.MANGA,async run(){let e=0,t=null,n=null;for(;e<5e3&&(t||(t=Fw()),n||(n=Gw()),!(t&&n));)await new Promise(w=>setTimeout(w,100)),e+=100;!t&&cs&&(t=cs);let o=t?.items?.length||0;o===0&&(o=Ww()),o===0&&(o=Uw()),o===0&&(o=[...document.querySelectorAll("#app-root img, .rpage-body img")].filter($1).length||40),Ee(`Identified expected page count: ${o}`);const a=await Hw(o,$1,jw),s=document.getElementById("initial-data"),c=s?JSON.parse(s.textContent||"{}"):{};let l="",f="";if(c.queries)for(const w of Object.keys(c.queries)){const b=c.queries[w];if(b?.title&&b.url){l=b.title,f=b.url;break}}l||(l=document.querySelector("title")?.textContent?.trim()||""),f||(f=document.querySelector('a[href^="/title/"]:not([href*="-chapter-"])')?.getAttribute("href")||"");let h=null,p=null;const m=/\/title\/([^/]+)/.exec(window.location.pathname),_=m?m[1]:"",v=/\/(\d+)-chapter-/.exec(window.location.pathname),y=v?parseInt(v[1],10):0;if(n&&y&&_){const w=M=>parseFloat(M.number??M.chapterNumber??"0"),b=[...n].sort((M,C)=>w(M)-w(C)),S=b.findIndex(M=>parseInt(M.id,10)===y);if(S!==-1){if(S>0){const M=b[S-1],C=M.number??M.chapterNumber;h=`/title/${_}/${M.id}-chapter-${C}`}if(S<b.length-1){const M=b[S+1],C=M.number??M.chapterNumber;p=`/title/${_}/${M.id}-chapter-${C}`}}}if(!h&&!p){const w=Zw();h=w.prev,p=w.next}return{title:l,series:f,pages:a.length,prev:h,next:p,listImages:a}}},Yw={name:"DemonicScans",url:/https?:\/\/(www\.)?demonicscans\.org\/(title\/.+\/chapter\/.+|chaptered\.php\?manga=\d+&chapter=.+)/,homepage:"https://demonicscans.org/",language:[Re.ENGLISH],category:$e.MANGA,waitEle:'img.imgholder[src*="cdn.demoniclibs.com"]',async run(){const e=[...document.querySelectorAll('img.imgholder[src*="cdn.demoniclibs.com"]')].map(t=>t.getAttribute("data-src")||t.getAttribute("src")||"");return{title:document.querySelector("title")?.textContent?.trim(),series:document.querySelector("h1 a")?.getAttribute("href"),pages:e.length,prev:document.querySelector(".prevchap")?.getAttribute("href"),next:document.querySelector(".nextchap")?.getAttribute("href"),listImages:e}}},Xw={name:"Dynasty-Scans",url:/https?:\/\/(www\.)?dynasty-scans.com\/chapters\/.+/,homepage:"https://dynasty-scans.com/",language:[Re.ENGLISH],category:$e.MANGA,run(){return{title:document.querySelector("#chapter-title")?.textContent?.trim(),series:document.querySelector("#chapter-title a")?.getAttribute("href"),pages:unsafeWindow.pages.length,prev:document.querySelector("#prev_link")?.getAttribute("href"),next:document.querySelector("#next_link")?.getAttribute("href"),listImages:unsafeWindow.pages.map(e=>e.image)}}},Jw={name:"Flame Comics",url:/https?:\/\/(www.)?(flamecomics).(xyz)\/series\/.+/,homepage:"https://flamecomics.xyz/",language:[Re.ENGLISH],category:$e.MANGA,run(){const e="https://cdn.flamecomics.xyz/uploads/images/series",t=JSON.parse(document.getElementById("__NEXT_DATA__")?.innerHTML??""),n=t?.props?.pageProps?.chapter,o=xe.default.keys(n?.images).map(a=>`${e}/${n?.series_id}/${n?.token}/${n?.images?.[a]?.name}?${n?.unix_timestamp}`);return{title:`${n?.title} ${n?.chapter}`,series:`../${n?.series_id}`,pages:o.length,prev:t?.props?.pageProps?.previous,next:t?.props?.pageProps?.next,listImages:o}}},Qw={name:["FoOlSlide","Kireicake"],url:/^(?!.*jaiminisbox).*\/read\/.+/,homepage:["https://github.com/saintly2k/FoOlSlideX","https://reader.kireicake.com"],language:[Re.ENGLISH],obs:"Any Site that uses FoOLSlide",category:$e.MANGA,waitEle:"img.open",run(){const e=[...document.querySelectorAll(".topbar_left .dropdown_parent:last-of-type li")],t=e.findIndex(c=>{const l=c.querySelector("a")?.getAttribute("href");return l?window.location.href.startsWith(l):!1}),n=[...document.querySelectorAll(".topbar_right .dropdown li")],o=[...document.querySelectorAll(".inner img:not(.open)")],a=o.length>1?o.length:n.length,s={title:e.at(t)?.querySelector("a")?.textContent?.trim()??document.querySelector("title")?.textContent?.trim(),series:document.querySelector("div.tbtitle div.text a")?.getAttribute("href"),pages:a,prev:e.at(t+1)?.querySelector("a")?.getAttribute("href"),next:e.at(t-1)?.querySelector("a")?.getAttribute("href")};return o.length>1?{...s,listImages:o.map(c=>c.getAttribute("src")??"")}:{...s,listPages:Array(a).fill(0).map((c,l)=>`${window.location.href.replace(/\/\d+$/,"")}/${l+1}`),img:"img.open"}}},e8={name:["Ikigai Mangas - EltaNews","Ikigai Mangas - Ajaco"],url:/https?:\/\/(visorikigai|visualikigai).(ajaco|eltanews|foodib|jobswu).(com|net|site)\/capitulo\/\d+/,homepage:["https://visorikigai.eltanews.com/","https://visorikigai.ajaco.net/"],language:[Re.SPANISH],category:$e.MANGA,run(){const e=document.querySelector('script[type="qwik/json"]')?.textContent?.match(/http[^'"]+webp/gi)??[];return{title:document.querySelector("title")?.text.replace(" — Manga en línea | MangaOni",""),pages:e?.length,prev:uo("span","Siguiente")?.getAttribute("href"),next:uo("span","Anterior")?.getAttribute("href"),listImages:e}}},t8=e=>new Promise(t=>setTimeout(t,e));async function r8(e){const t=document.querySelector(".reader-content"),n=new Set,o=2e3,a=200;if(!t)return console.error("Error: '.reader-content' container not found."),[];let s=0;for(;n.size<e&&s<a;){t.scrollTop+=o,s++,await t8(300);const c=document.querySelectorAll(".reader-page img");for(const l of c){const f=l.getAttribute("src");f&&f.length>0&&n.add(f)}if(console.log(`Attempt ${s}: Collected ${n.size} of ${e} sources.`),t.scrollHeight-t.clientHeight<=t.scrollTop&&n.size<e){console.warn(`Reached end of scrollable content. Stopping with ${n.size} sources.`);break}}return Array.from(n)}var n8={name:"Kagane",homepage:"https://kagane.org/",url:/https:\/\/(www\.)?kagane\.org\/series\/.+\/reader\/.+/,language:Re.ENGLISH,category:$e.MANGA,waitEle:".reader-page img",async run(){const e=window.location.href,t=e.match(/series\/([^/]+)/)?.[1],n=e.match(/reader\/([^/]+)/)?.[1],o=localStorage.getItem("rsch_did"),a={};o&&(a["X-Rsch-Did"]=o);const s=await fetch(`https://api.kagane.org/api/v1/series/${t}`,{headers:a}).then(m=>m.json()),c=(await fetch(`https://api.kagane.org/api/v1/books/${t}`,{headers:a}).then(m=>m.json())).data.content,l=c.find(m=>m.id===n),f=c.findIndex(m=>m.id===n),h=c[f+1],p=c[f-1];return{title:`${s.data.name} - ${l?.metadata?.title}`,series:`/series/${t}`,pages:l?.media?.pagesCount??0,prev:h?`/series/${t}/books/${h.id}`:void 0,next:p?`/series/${t}/books/${p.id}`:void 0,listImages:await r8(l?.media?.pagesCount??0)}}},o8={name:"KuManga",url:/https?:\/\/(www\.)?kumanga.com\/manga\/leer\/.+/,homepage:"https://www.kumanga.com/",language:[Re.SPANISH],category:$e.MANGA,run(){const e=document.querySelectorAll("select").item(1).querySelector("option[selected]");return{title:document.querySelector("title")?.textContent?.trim(),series:document.querySelector("h2 a")?.getAttribute("href"),pages:unsafeWindow.pUrl.length,prev:`/manga/leer/${e?.previousElementSibling?.getAttribute("value")}`,next:`/manga/leer/${e?.nextElementSibling?.getAttribute("value")}`,listImages:unsafeWindow.pUrl.map(t=>t.imgURL)}}},i8={name:"LectorXD",url:/https?:\/\/(www\.)?lectorxd\.com\/.+\/leer\/.+/,homepage:"https://lectorxd.com/",language:[Re.SPANISH],category:$e.MANGA,waitEle:".page-container img, img.page-image, .page-container, astro-island",run(){let e=[...document.querySelectorAll('.page-container img, img.page-image, .page-image img, div[class*="page-container"] img')].map(t=>t.getAttribute("data-src")||t.getAttribute("src")||"").filter(t=>t.trim().length>0).map(t=>t.startsWith("http")?t:new URL(t,window.location.href).href);if(e.length===0){const t=document.querySelector("astro-island")?.getAttribute("props");if(t){const n=t.match(/https?:\/\/[^"'\s\\]+\.(jpg|jpeg|png|webp|avif)[^"'\s\\]*/gi);n&&(e=n)}}return{title:document.querySelector("h1")?.textContent?.trim()||document.title?.replace(/\s*[-|]\s*Lector\s*XD.*$/i,"")?.trim()||void 0,series:document.querySelector('a[href*="/manga/"], a[href*="/manhwa/"], a[href*="/manhua/"], a[href*="/comic/"], a[href*="/series/"]')?.getAttribute("href")||window.location.pathname.replace(/\/leer\/.*/,""),pages:e.length,prev:document.querySelector('a[title*="Anterior" i], a[aria-label*="Anterior" i], a[name*="anterior" i]')?.getAttribute("href")||Dc("a, span, button","Anterior")?.getAttribute("href")||document.querySelector('link[rel="prev"]')?.getAttribute("href")||void 0,next:document.querySelector('a[title*="Siguiente" i], a[aria-label*="Siguiente" i], a[name*="siguiente" i]')?.getAttribute("href")||Dc("a, span, button","Siguiente")?.getAttribute("href")||document.querySelector('link[rel="next"]')?.getAttribute("href")||void 0,listImages:e}}},a8={name:"LeerCapitulo",url:/https?:\/\/(www\.)?leercapitulo\.co\/leer\/.+/,homepage:"https://www.leercapitulo.co/",language:[Re.SPANISH],category:$e.MANGA,waitEle:"#lcPages img, #page_select",run(){const e=document.querySelector("#chapterSelect"),t=e&&e.selectedIndex>=0&&e.selectedIndex<e.options.length-1?e.options[e.selectedIndex+1]?.value:void 0,n=e&&e.selectedIndex>0?e.options[e.selectedIndex-1]?.value:void 0,o=[...document.querySelectorAll("#lcPages img, .lc-pages img")],a=[...document.querySelectorAll("#page_select option")],s=o.length>0?o.map(c=>c.getAttribute("data-src")??c.getAttribute("src")??""):a.map(c=>c.getAttribute("value")??"");return{title:(document.querySelector("h1")?.textContent??document.querySelector("title")?.textContent)?.replace(/\|.+/,"").trim(),series:document.querySelector('a.lc-rbtn--title, a[href*="/manga/"], .chapter-title a')?.getAttribute("href")??void 0,pages:s.length,prev:t??document.querySelector(".pre")?.getAttribute("href")??void 0,next:n??document.querySelector(".next")?.getAttribute("href")??void 0,listImages:s}}},s8={name:"LHTranslation",url:/https?:\/\/(www\.)?lhtranslation.net\/read.+/,homepage:"https://lhtranslation.net/",language:[Re.ENGLISH],category:$e.MANGA,run(){const e=document.querySelector(".form-control option:checked"),t=[...document.querySelectorAll("img.chapter-img")];return{title:document.querySelector(".chapter-img.tieude font")?.textContent?.trim(),series:document.querySelector(".navbar-brand.manga-name")?.getAttribute("href"),pages:t.length,prev:e?.nextElementSibling?.getAttribute("value"),next:e?.previousElementSibling?.getAttribute("value"),listImages:t.map(n=>n.getAttribute("src")??"")}}},l8={name:"Local Files",url:/(file:\/\/\/.+(index)?.html)/,homepage:"/index.html?raw=1",language:[Re.RAW],category:$e.MANGA,run(e){const t=e??parseInt(/\d+/.exec(window.location.search)?.toString()??"5",10);return{title:"Placeholder Manga Loaded",series:"?reload",pages:document.title==="MangaOnlineViewer Script"?t:0,begin:1,prev:"?pages=50",next:"?pages=1",listImages:[Yt(1970,1400,"#2D1657"),Yt(985,1400,"#152C55"),Yt(985,1400,"#7A1420"),Yt(1970,1400,"#806D15"),Yt(985,1400,"#0F5B30"),Yt(1970,1400,"#1a3e3c"),Yt(985,1400,"#480f5b"),Yt(985,1400,"#a9bf7a"),Yt(985,1400,"#147a56"),Yt(1970,1400,"#190343"),Yt(985,1400,"#d5b91e"),Yt(985,1400,"#836ecd"),Yt(985,1400,"#bf19b2"),Yt(985,1400,"#152055"),...Array(t).fill(0).map(s7)]}}},c8={name:"M440",url:/https?:\/\/(www\.)?m440.in\/manga\/.+\/.+\/\d+/,homepage:"https://m440.in/",language:[Re.SPANISH],category:$e.MANGA,run(){const e=[...document.querySelectorAll("#all img")],t=document.querySelector("#chapter-list li.active");return{title:document.querySelector("title")?.textContent?.trim(),series:document.querySelector("#navbar-collapse-1 ul:nth-child(2) a")?.getAttribute("href"),pages:e.length,prev:t?.nextElementSibling?.firstElementChild?.getAttribute("href"),next:t?.previousElementSibling?.firstElementChild?.getAttribute("href"),listImages:e.map(n=>n.getAttribute("data-src")??"")}}},D1=/^([\t\n])*(https?:\/\/)?.+\.(jpg|jpeg|png|gif|bmp|webp).*$/;function z1(){return[...document.querySelectorAll(".wp-manga-chapter-img, .blocks-gallery-item img, .reading-content img, #chapter-images img, #chapterContent img")].map(e=>{const t=[...e.attributes].filter(n=>/.*(src|url).*/i.test(n.name)&&!/^.*(blank|lazy|loading).*$/.test(n.value));return t.length===0?"":t.find(n=>D1.test(n.value))?.value??e?.getAttribute("src")??""})}var u8={name:["Madara WordPress Plugin","MangaHaus","Isekai Scan","Comic Kiba","Zinmanga","mangatx","Toonily","Mngazuki","JaiminisBox","DisasterScans","ManhuaPlus","TopManhua","NovelMic","Reset-Scans","LeviatanScans","Dragon Tea","SetsuScans","ToonGod","Hades Scans"],url:/https?:\/\/.+\/(manga|series|manhua|comic|ch|novel|webtoon|tmo)\/.+\/.+/,homepage:["https://mangabooth.com/","https://manhuaus.com","https://isekaiscan.com/","https://comickiba.com/","https://zinmanga.com/","https://mangatx.com/","https://toonily.net/","https://mangazuki.me/","https://jaiminisbox.net","https://disasterscans.com/","https://manhuaplus.org/","https://www.topmanhua.com/","https://novelmic.com/","https://reset-scans.com/","https://leviatanscans.com/","https://dragontea.ink/","https://setsuscans.com/","https://toongod.org/home/","https://lectorhades.latamtoon.com"],language:[Re.ENGLISH],obs:"Any Site that uses Madara WordPress Plugin",category:$e.MANGA,waitFunc:()=>{const e=z1();return e.length>0&&e.every(t=>t&&D1.test(t))},run(){const e=z1();return{title:document.querySelector("#chapter-heading")?.textContent?.trim(),series:(document.querySelector(".breadcrumb li:nth-child(3) a")??document.querySelector(".breadcrumb li:nth-child(2) a"))?.getAttribute("href"),pages:e.length,prev:document.querySelector(".prev_page")?.getAttribute("href"),next:document.querySelector(".next_page")?.getAttribute("href"),listImages:e}}},d8={name:"MangaBall",homepage:"https://mangaball.net/",url:/https?:\/\/mangaball\.net\/chapter-detail\/.+/,language:Re.ENGLISH,category:$e.MANGA,run:async()=>{const e=[...document.querySelectorAll("script")].find(h=>h.textContent?.includes("chapterImages"))?.textContent;if(!e)return{title:document.querySelector("h1")?.textContent?.trim(),series:document.querySelector('a[href*="/title-detail/"]')?.getAttribute("href")??document.querySelector('a[href*="/manga-detail/"]')?.getAttribute("href"),pages:0,listImages:[]};const t=e.match(/titleId\s*=\s*[`'"](.+?)[`'"]/)?.[1],n=e.match(/chapterNumber\s*=\s*[`'"](.+?)[`'"]/)?.[1],o=e.match(/chapterVolume\s*=\s*[`'"](.+?)[`'"]/)?.[1],a=e.match(/chapterLanguage\s*=\s*[`'"](.+?)[`'"]/)?.[1],s=JSON.parse(e.match(/chapterImages\s*=\s*JSON\.parse\(\s*[`'"](.+?)[`'"]\s*\)/)?.[1]??e.match(/chapterImages\s*=.*(\[.*?\])/)?.[1]??"[]"),c=document.querySelector('meta[name="csrf-token"]')?.getAttribute("content")||"",l=((await(await fetch("/api/v1/chapter/chapter-listing-by-title-id/",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded","X-CSRF-TOKEN":c},body:`title_id=${t}&lang=${a}`})).json()).ALL_CHAPTERS||[]).sort((h,p)=>p.number_float-h.number_float),f=h=>{const p=parseFloat(n||"0"),m=l.findIndex(w=>w.number_float===p);if(m===-1)return;const _=h==="next"?-1:1,v=m+_,y=String(o);for(let w=v;w>=0&&w<l.length;w+=_){const b=l[w].translations.find(S=>S.language===a&&String(S.volume)===y);if(b)return b.url}};return{title:document.querySelector("h1")?.textContent?.trim(),series:document.querySelector(`a[href*="${t}"]`)?.getAttribute("href")??document.querySelector('a[href*="/title-detail/"]')?.getAttribute("href")??document.querySelector('a[href*="/manga-detail/"]')?.getAttribute("href"),pages:s.length,prev:f("prev"),next:f("next"),listImages:s}}},h8={name:"MangaBuddy",url:/https?:\/\/(www\.)?mangabuddy.com\/.+\/chapter.+/,homepage:"https://mangabuddy.com/",language:[Re.ENGLISH],category:$e.MANGA,waitVar:"chapImages",run(){const e=unsafeWindow.chapImages.split(",").map(t=>new URL(t).pathname.replace("/res/","https://sb.mbcdn.xyz/"));return{title:document.querySelector(".chapter-info")?.textContent?.trim(),series:document.querySelector("#breadcrumbs-container div:nth-child(2) a")?.getAttribute("href"),pages:e.length,prev:document.querySelector("a.prev")?.getAttribute("href"),next:document.querySelector("a.next")?.getAttribute("href"),listImages:e}}},f8={name:"MangaDex",url:/https?:\/\/(www\.)?mangadex.org/,homepage:"https://mangadex.org/",language:[Re.ENGLISH],category:$e.MANGA,waitEle:"#chapter-selector a",async run(){const e=`https://api.mangadex.org/at-home/server/${/\/chapter\/([^/]+)(\/\d+)?/.exec(window.location.pathname)?.at(1)}`,t=await fetch(e).then(async a=>a.json()),n=t.chapter.data,o=document.querySelectorAll("#chapter-selector a");return{title:document.querySelector("title")?.text.replace(" - MangaDex",""),series:document.querySelector("a.text-primary[href^='/title/']")?.getAttribute("href"),pages:n.length,prev:o?.item(0)?.getAttribute("href"),next:o?.item(1)?.getAttribute("href"),listImages:n.map(a=>`${t.baseUrl}/data/${t.chapter.hash}/${a}`)}}},p8={name:["MangaFox","MangaHere"],url:/https?:\/\/(www\.)?(fanfox.net|mangahere.cc)\/manga\/.+\/.+\//,homepage:["https://fanfox.net/","https://www.mangahere.cc/"],language:[Re.ENGLISH],category:$e.MANGA,waitVar:"chapterid",async run(){const e=document.querySelector("#dm5_key")?.getAttribute("value"),t={method:"GET",headers:{"Content-Type":"text/plain"}},n=Array(unsafeWindow.imagecount).fill(0).map(async(a,s)=>{const c=`chapterfun.ashx?cid=${unsafeWindow.chapterid??unsafeWindow.chapter_id}&page=${s}&key=${e}`,l=await fetch(c,t).then(async f=>f.text());return(0,eval)(l),d}),o=await Promise.all(n);return{title:document.querySelector(".reader-header-title div")?.textContent?.trim(),series:document.querySelector(".reader-header-title a")?.getAttribute("href"),pages:unsafeWindow.imagecount,prev:unsafeWindow.prechapterurl,next:unsafeWindow.nextchapterurl,listImages:o.map((a,s)=>a[s===0?0:1])}}},m8={name:"Mangago",url:/https?:\/\/(www\.)?mangago.me\/.*\/.*\/.*/,homepage:"https://www.mangago.me/",language:[Re.ENGLISH],category:$e.MANGA,waitVar:"imgsrcs",run(){const e=CryptoJS.enc.Hex.parse("e11adc3949ba59abbe56e057f20f883e"),t={iv:CryptoJS.enc.Hex.parse("1234567890abcdef1234567890abcdef"),padding:CryptoJS.pad.ZeroPadding},n=CryptoJS.AES.decrypt(unsafeWindow.imgsrcs,e,t).toString(CryptoJS.enc.Utf8).split(",");return{title:`${unsafeWindow.manga_name} ${unsafeWindow.chapter_name}`,series:unsafeWindow.mid,pages:unsafeWindow.total_pages,prev:document.querySelector(".recom p:nth-child(5) a")?.getAttribute("href"),next:unsafeWindow.next_c_url,listImages:n,before(){n.some(o=>o==="")&&document.querySelector("#nform")?.submit()}}}},g8={name:"MangaHub",url:/https?:\/\/(www\.)?(mangahub).io\/chapter\/.+\/.+/,homepage:"https://mangahub.io/",language:[Re.ENGLISH],category:$e.MANGA,waitEle:"#select-chapter",async run(){function e(s){const c=new RegExp(`${s}=([^;]+)`).exec(document.cookie);return c!=null?decodeURIComponent(c[1]):null}const t={query:`{chapter(x:m01,slug:"${unsafeWindow.CURRENT_MANGA_SLUG??window.location.pathname.split("/")[2]}",number:${window.location.pathname.split("/")[3].replace("chapter-","")}){pages}}`},n={method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json","x-mhub-access":e("mhub_access")??""}},o=await fetch("https://api.mghcdn.com/graphql",n).then(async s=>s.json()),a=JSON.parse(o?.data.chapter.pages.toString());return{title:document.querySelector("#mangareader h3")?.textContent?.trim(),series:document.querySelector("#mangareader a")?.getAttribute("href"),pages:a.i.length,prev:document.querySelector(".previous a")?.getAttribute("href"),next:document.querySelector(".next a")?.getAttribute("href"),listImages:a.i.map(s=>`https://imgx.mghcdn.com/${a.p+s}`)}}},v8={name:["MangaKakalot","NeloManga ","MangaNato","NatoManga","MangaBats"],url:/https?:\/\/(www\.)?(read|chap)?(nelomanga|mangakakalot|natomanga|manganato|mangabats|mangakakalove).(com|gg|net).*\/(chapter|manga)\/.+\/.+/,homepage:["https://mangakakalot.gg/","https://www.nelomanga.com/","https://www.manganato.gg/","https://www.natomanga.com/","https://www.mangabats.com/"],language:[Re.ENGLISH],category:$e.MANGA,waitEle:".navi-change-chapter-btn-prev, .next, .navi-change-chapter-btn-next, .back",run(){const e=[...document.querySelectorAll("#vungdoc img, .container-chapter-reader img")];return{title:document.querySelector(".info-top-chapter h2, .imageOptions-chapter-info-top h1, .panel-chapter-info-top h1")?.textContent?.trim(),series:document.querySelectorAll("span a[title]").item(1).getAttribute("href"),pages:e.length,prev:document.querySelector(".navi-change-chapter-btn-prev, .next")?.getAttribute("href"),next:document.querySelector(".navi-change-chapter-btn-next, .back")?.getAttribute("href"),listImages:e.map(t=>t.getAttribute("src")??"")}}},b8={name:"MangaOni",url:/https?:\/\/(www\.)?manga-oni.com\/lector\/.+\/\d+\/cascada/,homepage:"https://manga-oni.com/",language:[Re.SPANISH],category:$e.MANGA,run(){document.querySelector("#c_list")?.dispatchEvent(new Event("mouseover"));const e=document.querySelector("#c_list option:checked"),t=[...document.querySelectorAll("#slider img")];return{title:document.querySelector("title")?.text.replace(" — Manga en línea | MangaOni",""),pages:t?.length,prev:e?.nextElementSibling?.getAttribute("value"),next:e?.previousElementSibling?.getAttribute("value"),listImages:t.map(n=>n.getAttribute("data-src")??n.getAttribute("src")??"")}}},w8={name:"MangaPark",url:/https?:\/\/(www\.)?(mangapark|mpark|comicpark|readpark|parkmanga).(com|me|org|net|io|to)\/title\/.+\/.+/,homepage:"https://mangapark.net/",language:[Re.ENGLISH],category:$e.MANGA,waitEle:"main div div a.btn-primary",run(){const e=[...document.querySelectorAll("main div div > img.w-full")];return{title:[...document.querySelectorAll(".comic-detail h3 a, .comic-detail h6 span")].map(t=>t.textContent?.trim()).join(" "),series:document.querySelector(".comic-detail a")?.getAttribute("href"),pages:e.length,prev:document.querySelectorAll("main div div a.btn-primary")?.item(0)?.getAttribute("href"),next:document.querySelectorAll("main div div a.btn-primary")?.item(1)?.getAttribute("href"),listImages:e.map(t=>t.getAttribute("src")??"")}}},_8={name:"MangaReader",url:/https?:\/\/(www\.)?mangareader.to\/read\/.+\/.+\/.+/,homepage:"https://mangareader.to",language:[Re.ENGLISH],category:$e.MANGA,obs:"Some galleries will not be usable",waitEle:".ds-image, .iv-card",async run(){const e=document.querySelector(".chapter-item.active"),t=[...document.querySelectorAll(".ds-image[data-url], .iv-card[data-url]")].map(async n=>{const o=n.getAttribute("data-url")??"";return o&&n.classList.contains("shuffled")?(await imgReverser(o)).toDataURL():o});return{title:document.querySelector(".hr-manga h2")?.textContent?.trim(),series:document.querySelector(".hr-manga")?.getAttribute("href"),pages:t.length,prev:e?.nextElementSibling?.querySelector("a")?.getAttribute("href"),next:e?.previousElementSibling?.querySelector("a")?.getAttribute("href"),listImages:await Promise.all(t)}}},y8={name:["MangaStream WordPress Plugin","Realm Oasis","Voids-Scans","Luminous Scans","Shimada Scans","Night Scans","Manhwa-Freak","OzulScansEn","CypherScans","MangaGalaxy","LuaScans","Drake Scans","Rizzfables","NovatoScans","TresDaos","Lectormiau","NTRGod","Threedaos"],url:/https?:\/\/[^/]*(scans?|comic|realm|rizz|hivetoon|tresdaos|zonamiau|ntrgod|threedaos)[^/]*\/.+/,homepage:["https://themesia.com/mangastream-wordpress-theme/","https://realmoasis.com/","https://void-scans.com/","https://luminous-scans.com/","https://shimadascans.com/","https://night-scans.com/","https://freakcomic.com/","https://ozulscansen.com/","https://cypherscans.xyz/","https://mangagalaxy.me/","https://luascans.com/","https://drake-scans.com/","https://rizzfables.com/","https://www.novatoscans.top/","https://tresdaos.com","https://zonamiau.com/","https://ntrgod.com/","https://threedaos.zdrz.xyz/"],language:[Re.ENGLISH,Re.SPANISH],category:$e.MANGA,waitEle:':where(#readerarea, .check-box, #viewer-img) img:not(.asurascans):not([src*="loader"]):not([src*="chevron"]),:where(.nextprev, .inner_nPL)',run(){const e=[...document.querySelectorAll(this.waitEle??"")];return{title:document.querySelector("title")?.textContent?.trim(),series:document.querySelector(":where(.allc, .tac) a")?.getAttribute("href")??document.querySelectorAll('[class*="breadcrumb"] a').item(1)?.getAttribute("href"),pages:e.length,prev:P1(":where(.nextprev, .inner_nPL) a",["Prev","Anterior"])?.[0]?.getAttribute("href"),next:P1(":where(.nextprev, .inner_nPL) a",["Next","Siguiente"])?.[0]?.getAttribute("href"),listImages:e.map(t=>t.getAttribute("data-src")??t.getAttribute("data-lazy-src")??t.getAttribute("src")??"")}}},k8={name:"MangaToons",url:/https?:\/\/.*mangatoon.mobi\/.+\/watch\/.+/,homepage:"https://mangatoon.mobi/",language:[Re.ENGLISH],category:$e.MANGA,waitEle:".pictures img:not(.cover)",run(){const e=[...document.querySelectorAll(".pictures img:not(.cover)")];return{title:document.querySelector("title")?.textContent?.trim(),series:document.querySelector(".top-left a")?.getAttribute("href"),pages:e.length,prev:document.querySelector(".page-icons-prev")?.getAttribute("href"),next:document.querySelector(".page-icons-next")?.getAttribute("href"),listImages:e.map(t=>t.getAttribute("data-src")??"")}}},E8={name:"MangaTown",url:/https?:\/\/www\.mangatown\.com\/manga\/.+\/.+\//,homepage:"https://www.mangatown.com/",language:[Re.ENGLISH],category:$e.MANGA,waitEle:"div.page_select select option, .read_img .image",run(){const e=document.querySelector("div.page_select select")?.querySelectorAll("option"),t=[...document.querySelectorAll(".read_img .image")].map(o=>o.getAttribute("src")??""),n=[...e??[]].map(o=>o.value).filter(o=>!o.endsWith("featured.html")).map(o=>new URL(o,window.location.href).href);return{title:document.querySelector("div.title h1")?.textContent?.trim(),series:document.querySelector("div.title a")?.getAttribute("href"),pages:unsafeWindow.total_pages||n.length,prev:document.querySelector(".chapter_select option:checked")?.previousElementSibling?.getAttribute("value"),next:document.querySelector(".chapter_select option:checked")?.nextElementSibling?.getAttribute("value"),...t.length>1?{listImages:t}:{listPages:n,img:"#image"}}}},S8={name:"ManhwaWeb",url:/https?:\/\/(www\.)?manhwaweb.com\/leer\/.+/,homepage:"https://manhwaweb.com/",language:[Re.SPANISH],category:$e.MANGA,async run(){const e=window.location.pathname.replace("/leer",""),t=await fetch(`https://manhwawebbackend-production.up.railway.app/chapters/see${e}`).then(async o=>o.json()),n=await fetch(`https://manhwawebbackend-production.up.railway.app/chapters/seeprevpost${e}`).then(async o=>o.json());return{title:`${t.name} ${t.chapter.chapter}`,series:[...document.querySelectorAll("div")].filter(o=>o.textContent==="Episodios")?.[0]?.parentElement?.getAttribute("href"),pages:t.chapter.img.length,prev:n.chapterAnterior.replace(t._id,t.real_id),next:n.chapterSiguiente.replace(t._id,t.real_id),listImages:t.chapter.img}}},A8={name:["MangaGeko.com","MangaGeko.cc"],url:/https?:\/\/(www\.)?mgeko.(com|cc)?\/reader\/.*/,homepage:["https://www.mgeko.com/","https://www.mgeko.cc/"],language:[Re.ENGLISH],category:$e.MANGA,run(){const e=[...document.querySelectorAll('img[id^="image-"]')];return{title:document.querySelector(".titles")?.textContent?.trim(),series:document.querySelector(".titles a")?.getAttribute("href"),pages:e.length,prev:document.querySelector(".chnav.prev:not(.isDisabled)")?.getAttribute("href"),next:document.querySelector(".chnav.next:not(.isDisabled)")?.getAttribute("href"),listImages:e.map(t=>t.getAttribute("src")??"")}}},M8={name:"NineAnime",url:/https?:\/\/(www\.)?nineanime.com\/chapter\/.+/,homepage:"https://www.nineanime.com/",language:[Re.ENGLISH],category:$e.MANGA,run(){const e=[...document.querySelectorAll(".sl-page option")],t=document.querySelector(".mangaread-pagenav select option[selected]");return{title:`${document.querySelector(".title h1")?.textContent?.trim()}/${document.querySelector(".title h2")?.textContent?.trim()}`,series:document.querySelector(".title a:has(h2)")?.getAttribute("href"),pages:e.length,prev:t?.nextElementSibling?.getAttribute("value"),next:t?.previousElementSibling?.getAttribute("value"),listPages:e.map(n=>n.getAttribute("value")??""),img:".manga_pic"}}},x8={name:"Olympus",url:/https?:\/\/(www\.)?olympusxyz\.com\/(series\/[^/]+\/)?capitulo\/.+/,homepage:"https://olympusxyz.com/",language:[Re.SPANISH],category:$e.MANGA,waitEle:"main.strip img, section img.w-full.h-full",run(){const e=[...document.querySelectorAll("main.strip img, section img.w-full.h-full")];return{title:(document.querySelector("title")?.textContent??document.querySelector(".rback span")?.textContent)?.replace(/\|.+/,"").trim(),series:document.querySelector('a.rback, .chnav a[href*="/series/"]')?.getAttribute("href")??document.querySelector("h1")?.closest("a")?.getAttribute("href"),pages:e.length,prev:document.querySelector('.chnav-main a.btn-ghost[href*="/capitulo/"], a[name="capitulo anterior"]')?.getAttribute("href")??void 0,next:document.querySelector('.chnav-main a.btn-primary[href*="/capitulo/"], a[name="capitulo siguiente"]')?.getAttribute("href")??void 0,listImages:e.map(t=>t.getAttribute("src")??t.getAttribute("data-src")??"")}}},I8={name:"Qi Manga",url:/https?:\/\/(www\.)?qimanga\.com\/series\/[^/]+\/chapter-.+/,homepage:"https://qimanga.com/",language:[Re.ENGLISH],category:$e.MANGA,waitEle:"img.r-page-img",run(){const e=[...document.querySelectorAll("img.r-page-img")],t=document.querySelector(".r-page-counter")?.textContent??"",n=Number.parseInt(t.split("/").pop()?.trim()??"",10)||e.length,o=document.querySelector("#ng-state")?.textContent??"",a=/"navigation":\{"prev":\{"slug":"([^"]+)"[\s\S]*?"next":\{"slug":"([^"]+)"/.exec(o),s=document.querySelector(".r-back")?.getAttribute("href"),c=l=>s?`${s}/${l}`:void 0;return{title:document.querySelector("h1.sr-only")?.textContent?.trim(),series:s,pages:n,prev:a?c(a[1]):void 0,next:a?c(a[2]):void 0,listImages:e.map(l=>l.getAttribute("src")??"")}}},C8={name:"QiManhwa",url:/https?:\/\/qimanhwa\.com\/series\/[^/]+\/chapter-.+/,homepage:"https://qimanhwa.com/",language:[Re.ENGLISH],category:$e.MANGA,waitEle:'img[alt*="Chapter"]',run(){const e=[...document.querySelectorAll('img[alt*="Chapter"]')];return{title:document.querySelector("h1")?.textContent?.trim(),series:uo("button","Home","a")?.getAttribute("href"),pages:e.length,prev:document.querySelector(".lucide-chevron-left")?.closest("a")?.getAttribute("href"),next:document.querySelector(".lucide-chevron-right")?.closest("a")?.getAttribute("href"),listImages:e.map(t=>t.getAttribute("src")??"")}}},O8={name:"ReadComicsOnline",url:/https?:\/\/(www\.)?readcomicsonline.ru\/comic\/.*\/\d*/,homepage:"https://readcomicsonline.ru/",language:[Re.ENGLISH],category:$e.COMIC,run(){const e=[...document.querySelectorAll("#all img")];return{title:unsafeWindow.title.replace(/ - Page \d+/,""),series:document.querySelector("div.pager-cnt a")?.getAttribute("href"),pages:unsafeWindow.pages.length,prev:unsafeWindow.prev_chapter,next:unsafeWindow.next_chapter,listImages:e.map(t=>t.getAttribute("data-src")??"")}}},T8={name:"ReaperScans",url:/https?:\/\/(www\.)?reaperscans\.com\/series\/.+\/chapter.+/,homepage:"https://reaperscans.com/",language:[Re.ENGLISH],category:$e.MANGA,waitEle:"#content .container img:not(.rounded)",run(){const e=[...document.querySelectorAll("#content .container img:not(.rounded)")];return{title:document.querySelector("title")?.textContent?.trim(),series:document.querySelector("button .fa-house")?.closest("a")?.getAttribute("href"),pages:e.length,prev:document.querySelector(".fa-chevron-left")?.closest("a")?.getAttribute("href"),next:document.querySelector(".fa-chevron-right")?.closest("a")?.getAttribute("href"),listImages:e.map(t=>(t.getAttribute("data-src")||t.getAttribute("src"))??"")}}},L8={name:"ReiManga",url:/https?:\/\/(www\.)?reimanga\.com\/manga\/[^/]+-\d+\/\d+/,homepage:"https://reimanga.com/",language:[Re.ENGLISH],category:$e.MANGA,waitEle:"img",run(){const e=document.getElementById("__NEXT_DATA__"),t=e?JSON.parse(e.textContent??"{}")?.props?.pageProps??null:null,n=t?.chapter?.images??t?.chapter?.img??null,o=Array.isArray(n)?n.map(v=>typeof v=="string"?v:v?.url??v?.src??""):[...document.querySelectorAll("img")].filter(v=>{const y=v.getAttribute("src")??"";return/\/(manga|chapter|uploads?|files?|images?)\//i.test(y)||/(cdn|media|img|static)/i.test(y)}).map(v=>v.getAttribute("src")??"").filter(v=>v.startsWith("http")),a=window.location.pathname.split("/").filter(Boolean),s=a.length>1?`/${a.slice(0,2).join("/")}`:void 0,c=t?.series?.slug!==void 0?`/manga/${t.series.slug}`:document.querySelector('a[href*="/manga/"]')?.getAttribute("href")??s,l=document.querySelector('select[aria-label="Jump to chapter"]'),f=l?[...l.options]:[],h=l?.selectedIndex??-1,p=h+1<f.length?f[h+1]?.value:void 0,m=h-1>=0?f[h-1]?.value:void 0,_=v=>v&&c?`${c}/${v}`:void 0;return{title:t?.title??(`${t?.chapters?.[0]?.series_name??t?.manga?.name??t?.series?.name??""} ${t?.chapters?.[0]?.name??t?.chapter?.name??t?.chapter?.number??""}`.trim()||document.title.replace(/ –.*| -.*| \|.*/,"").trim()),series:c,pages:o.length,prev:_(p),next:_(m),listImages:o}}},R8={name:"TuMangaOnline",url:/https?:\/\/(www\.)?zonatmo\.(com|org|app)\/(viewer|news|view_uploads|reader|library)\/.+/,homepage:"https://zonatmo.org/",language:[Re.SPANISH],category:$e.MANGA,run(){const e=[...document.querySelectorAll(".img-container img, .viewer-container img, .content-image, .viewer-image, .img-fluid, .reader-img-wrap img, .viewer-img, #viewer-container img, .viewer-page")],t=[...document.querySelectorAll("div.container:nth-child(4) select#viewer-pages-select option, #viewer-pages-select option, select#chapter-pages option, select#pages option")],n=e.length>1?e.length:t.length;return{title:document.querySelector("title")?.textContent?.trim(),series:(document.querySelector('a[title="Volver"]')??document.querySelector(".breadcrumb-item:nth-child(2) a")??document.querySelector(".book-name a")??document.querySelector(".breadcrumb-item a"))?.getAttribute("href"),pages:n||1,prev:(document.querySelector(".chapter-prev a")??document.querySelector(".prev_page")??document.querySelector("a.prev-chapter")??document.querySelector(".chapter-prev-btn"))?.getAttribute("href"),next:(document.querySelector(".chapter-next a")??document.querySelector(".next_page")??document.querySelector("a.next-chapter")??document.querySelector(".chapter-next-btn"))?.getAttribute("href"),...e.length<=1&&t.length>1?{listPages:Array(t.length).fill(0).map((o,a)=>`${window.location.href.replace(/\/\d+$/,"")}/${a+1}`)}:{listImages:e.map(o=>o.getAttribute("data-src")??o.getAttribute("data-original")??o.getAttribute("src")??"")},img:"#viewer-container img, .viewer-page, .img-container img, .content-image, .viewer-image, .reader-img-wrap img, .viewer-img",before(){if(window.location.pathname.includes("paginated")&&(window.location.pathname=window.location.pathname.replace(/paginated.*/,"cascade")),window.location.pathname.includes("view_uploads")){const o=document.querySelector("a.btn.btn-primary, .btn-primary a, a.btn-block");o&&o.click()}}}}},P8={name:"Vortex Scans",url:/https?:\/\/(www.)?(vortexscans).(org)\/.+/,homepage:"https://vortexscans.org/",language:[Re.ENGLISH],category:$e.MANGA,waitVar:"__next_f",waitFunc(){return unsafeWindow.__next_f.find(e=>/images/.test(e?.[1]))?.length>0},run(){const e=unsafeWindow.__next_f.find(n=>/images/.test(n?.[1]))?.[1],t=e.slice(e.indexOf("images")).match(/http[^"]+\.(png|gif|jpg|jpeg|webp)/g)??[];return{title:document.querySelector("time")?.closest("div")?.querySelector("div")?.textContent?.trim(),series:document.querySelector("time")?.closest("a")?.getAttribute("href"),pages:t?.length,prev:uo("button","Prev","a")?.getAttribute("href"),next:uo("button","Next","a")?.getAttribute("href"),listImages:t}}},$8={name:"WebNovel",url:/https?:\/\/(www\.)?webnovel.com\/comic\/.+/,homepage:"https://www.webnovel.com/",language:[Re.ENGLISH],category:$e.MANGA,waitVar:"g_data",run(){const e=unsafeWindow.g_data.chapter.chapterInfo.chapterPage.map(t=>t.url);return{title:document.querySelector("title")?.textContent?.trim(),series:"./",pages:e.length,prev:`${unsafeWindow.g_data.chapter.chapterInfo.preChapterName}_${unsafeWindow.g_data.chapter.chapterInfo.preChapterId}`,next:`${unsafeWindow.g_data.chapter.chapterInfo.nextChapterName}_${unsafeWindow.g_data.chapter.chapterInfo.nextChapterId}`,listImages:e}}},D8={name:"WebToons",url:/https?:\/\/(www\.)?webtoons.com\/.+viewer.+/,homepage:"https://www.webtoons.com/",language:[Re.ENGLISH],category:$e.MANGA,run(){const e=[...document.querySelectorAll("#_imageList img")];return{title:document.querySelector(".subj_info")?.textContent?.trim(),series:document.querySelector(".subj_info a")?.getAttribute("href"),pages:e.length,prev:document.querySelector("._prevEpisode")?.getAttribute("href"),next:document.querySelector("._nextEpisode")?.getAttribute("href"),listImages:e.map(t=>t.getAttribute("data-url")??t.getAttribute("data-src")??t.getAttribute("src")??"")}}},z8={name:"WeebCentral",url:/https?:\/\/(www\.)?(weebcentral).com\/chapters\/.+/,homepage:"https://weebcentral.com/",language:[Re.ENGLISH],category:$e.MANGA,waitEle:'section[hx-get*="/images"]',async run(){if(document.documentElement.hasAttribute("mov"))return{pages:0,listImages:[]};const e=document.querySelector('section[hx-get*="/images"]')?.getAttribute("hx-get");if(!e)throw new Error("Images HTMX endpoint not found");const t=`${e.replace(/&amp;/g,"&")}&reading_style=long_strip`,n=await fetch(t,{headers:{"HX-Request":"true"}}).then(p=>p.text()),o=new DOMParser,a=[...o.parseFromString(n,"text/html").querySelectorAll("img")].map(p=>p.getAttribute("src")||p.getAttribute("data-src")||"").filter(p=>p&&!p.includes("broken_image")).map(p=>p.startsWith("http")?p:new URL(p,window.location.origin).href),s=[...new Set(a)].sort((p,m)=>{const _=p.match(/-(\d+)\.[^.]+$/),v=m.match(/-(\d+)\.[^.]+$/);return(_?parseInt(_[1],10):0)-(v?parseInt(v[1],10):0)}),c=document.querySelector('button[hx-get*="chapter-select"]')?.getAttribute("hx-get"),l=await fetch(c??"",{headers:{"HX-Request":"true"}}).then(p=>p.text()),f=o.parseFromString(l,"text/html").querySelector("#selected_chapter"),h=p=>p?p.startsWith("http")?p:new URL(p,window.location.origin).href:null;return{title:document.title.split(" - ")[0].trim(),series:h(document.querySelector("main section a.btn-ghost")?.getAttribute("href")),pages:s.length,prev:h(f?.nextElementSibling?.getAttribute("href")),next:h(f?.previousElementSibling?.getAttribute("href")),listImages:s,fetchOptions:{headers:{"HX-Request":"true",Referer:window.location.href}}}}},N8={name:"WeebDex",url:/https?:\/\/(www\.)?weebdex\.org\/.+/,homepage:"https://weebdex.org/",language:Re.ENGLISH,category:$e.MANGA,waitEle:'a[href^="/title/"]',async run(){const e=/\/chapter\/([^/]+)/.exec(window.location.pathname)?.at(1),t=`https://api.weebdex.org/chapter/${e}`,n=await fetch(t).then(async l=>l.json()),o=document.querySelector('a[href^="/title/"]'),a=`https://api.weebdex.org/manga/${n.relationships.manga.id}/aggregate?lang=${n.language}`,s=(await fetch(a).then(async l=>l.json())).chapters||[],c=s.findIndex(l=>l.chapter===n.chapter);return{title:document.querySelector("title")?.textContent?.trim().replace(/Page \d+:/,""),series:o?.getAttribute("href"),pages:n.data.length,prev:s[c+1]?`/chapter/${xe.default.keys(s[c+1].entries)[0]}`:void 0,next:s[c-1]?`/chapter/${xe.default.keys(s[c-1].entries)[0]}`:void 0,listImages:n.data.map(l=>`${n.node}/data/${e}/${l.name}`)}}},B8={name:"ZeroScans",url:/https?:\/\/(www\.)?zscans.com\/comics\/.+/,homepage:"https://zscans.com/",language:[Re.ENGLISH],category:$e.MANGA,waitVar:"__ZEROSCANS__",run(){const e=unsafeWindow.__ZEROSCANS__.data.at(0).current_chapter.high_quality,t=document.querySelectorAll(".v-btn--router");return{title:document.querySelector("title")?.textContent?.trim(),series:document.querySelector(".v-breadcrumbs li:nth-child(2) + a")?.getAttribute("href"),pages:e.length,prev:t[0]?.getAttribute("href"),next:t[1]?.getAttribute("href"),listImages:e}}},H8=[$w,Dw,zw,Nw,Kw,Yw,Xw,Jw,e8,n8,o8,a8,i8,s8,l8,c8,h8,f8,p8,m8,g8,v8,d8,b8,w8,_8,k8,E8,S8,A8,M8,x8,I8,C8,O8,T8,L8,R8,$8,D8,z8,N8,P8,B8,y8,Qw,u8];Tw(H8).catch(Ee)})();
